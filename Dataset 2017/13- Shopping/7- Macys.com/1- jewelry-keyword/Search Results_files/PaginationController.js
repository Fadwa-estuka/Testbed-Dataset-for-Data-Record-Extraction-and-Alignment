define( [ 'jquery', 'backbone', 'underscore', 'handlebars', 'logger', 'cookie', 'pubsub', 'globals', 'mcomAnalytics' ], function ( $, Backbone, _, Handlebars, Logger, Cookie, PubSub, Globals, cmAnalytics ) {
    'use strict';

    var PaginationController = function ( options ) {
        Logger.log( "loading file from macys ui: paginationController.js" );
        this.paginationAreaUi = options.paginationAreaUi;
        this.breadcrumbsUi = options.breadcrumbsUi;
        this.baseUrl = options.baseUrlUi;
        this.exploreAttrUI = options.exploreAttrUi;
        this.macysMultiselectUi = options.macysMultiselectUi;
        this.macysBrightTagUi = options.macysBrightTagUi || {
            'navigation': {
                'pageIndex': 1
            }
        };
        this.macysFacetedUi = options.macysFacetedUi;
        this.macysSearchAnalyticsUi = options.macysSearchAnalyticsUi;
        this.macysMultiFacetUi = options.macysMultiFacetUi;
        this.pubSubModuleUi = options.pubSubModuleUi;
        this.backToTopClick = false;
        this.cmCreatePageElementTag = window.cmCreatePageElementTag;

        this.faceted = false;
        this.brand = $( "#BRAND" ).get( 0 );
        this.size = $( "#SIZE" ).get( 0 );
        this.sortBy = $( "#sortBy" ).get( 0 );
        this.sortByHeader = $( "#sortByHdr" ).get( 0 );
        this.pppHeader = $( "#pppHdr" ).get( 0 );
        this.fromOnUrlChange = false;
        if ( this.sortBy ) {
            this.faceted = true;
        }
        // For setting sortBy header in multi select.
        this.setSortByHeader();
        this.productsPerPage4ColumnGrid = $( '.fourColumnGridClass', '#filterPPP' ).get( 0 );
        this.productsPerPage3ColumnGrid = $( '.threeColumnGridClass', '#filterPPP' ).get( 0 );
        this.productsPerPage = $( '#itemsPP' );
        this.paginationTop = $( '#paginateTop' ).get( 0 );
        this.paginationBot = $( '#paginateBottom' ).get( 0 );
        this.productCount = $( '#productCount' ).get( 0 );
        this.locked = false;
        this.isPageRefreshWithFacetValues = false;
        this.isSeoFriendlyFeatureEnabled = Globals.getValue( 'props.seoFriendlyFacetsEnabled' );

        if ( this.faceted ) {
            this.origSort = this.curSort = this.sortBy.value;
        }
        this.origPPP = this.curPPP = this.productsPerPage.val();

        // if(this.macysFacetedUi && this.macysFacetedUi.facetWidget) {
        if ( this.macysMultiFacetUi ) {
            PubSub.observe( "updateFacetItems" ).subscribe( this.macysMultiFacetUi.facetWidget.updateBreadCrumbFacetItems );
        }

        try {
            this.origPage = this.infiniteScrollPageIndexEnd = this.pageIndex = parseInt( $( "#paginateTop .currentPage" ).get( 0 ).innerHTML, 10 );
        } catch ( e ) {
            this.origPage = this.pageIndex = 1;
            Logger.log( "error getting initial pageIndex: " + e );
        }
        if ( this.productCount ) {
            this.pageCount = Math.ceil( parseInt( this.productCount.innerHTML, 10 ) / parseInt( this.origPPP, 10 ) );
        } else {
            this.pageCount = 1;
        }
        this.lastState = [ this.pageIndex, this.origPPP, this.origSort ];
        this.callsMade = 0;
        this.setInfiniteScroll( false );
        this.scrollAttached = false;
        this.showPrevItems = false;
        this.allExpStartPageIndex = 1;

        var _this = this;

        $( this.productsPerPage4ColumnGrid ).off().on( "change", function ( e ) {
            $( '#itemsPP' ).val( $( e.currentTarget ).val() );
            _this.updatePPP4ColumnGrid( e, _this );
        } );

        $( this.productsPerPage3ColumnGrid ).off().on( "change", function ( e ) {
            $( '#itemsPP' ).val( $( e.currentTarget ).val() );
            _this.updatePPP3ColumnGrid( e, _this );
        } );

        if ( this.faceted ) {
            $( this.sortBy ).off().on( "change", function ( e ) {
                _this.updateSortBy( e, _this );
            } );

        } else {

            $( this.brand ).on( "change", function ( e ) {
                _this.updateBrandSize( e, _this );
            } );

            $( this.size ).on( "change", function ( e ) {
                _this.updateBrandSize( e, _this );
            } );
        }

        $( this.paginationTop ).on( "click", function ( e ) {
            _this.updatePageIndex( e, _this );
        } );

        $( this.paginationBot ).on( "click", function ( e ) {
            _this.updatePageIndex( e, _this );
        } );
        this.updateThumbnailTracking();
    };

    PaginationController.prototype.getUrlArgs = function ( isHash ) {
        var str = [];
        if ( this.pageIndex ) {
            // split calls for 120 products, for page 1 trigger 2 calls
            this.newpageIndex = ( this.pageIndex * 2 ) - 1 + this.callsMade;
            var pageIndex = ( parseInt( this.curPPP, 10 ) === 120 ) ? this.newpageIndex : this.pageIndex;
            // get all page index when show prev items is clicked
            if ( ( this.showPrevItems || this.getAllPageIndexInSession() ) && this.productsPerPage.val().toUpperCase() === "ALL" ) {
                pageIndex = parseInt( this.getAllExpStartPageIndex(), 10 );
                // set current allPageIndex to pageIndex for continuation of pagination in "all experience"
                if ( !this.showPrevItems && pageIndex ) {
                    this.pageIndex = pageIndex;
                }
            }
            if ( isHash ) {
                if ( this.productsPerPage.val().toUpperCase() === "ALL" ) {
                    str.push( "pageIndex=1" );
                } else if ( parseInt( this.curPPP, 10 ) === 120 ) {
                    str.push( "pageIndex=" + this.pageIndex );
                } else {
                    if ( !( ( parseInt( this.curPPP, 10 ) === 40 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp !== '3_COL' ) || ( parseInt( this.productsPerPage.val(), 10 ) === 60 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp === '3_COL' ) ) ) {
                        str.push( "pageIndex=" + pageIndex );
                    }
                }
            } else {
                str.push( "pageIndex=" + pageIndex );
            }
        }

        if ( Globals.getValue( 'props.seoJSCSSEnabled' ) ) {
            if ( this.faceted ) {
                if ( this.sortBy.value !== '*' && this.sortBy.value !== 'ORIGINAL' ) {
                    str.push( "sortBy=" + this.sortBy.value );
                }
            } else {
                if ( this.brand && this.brand.value ) {
                    str.push( "brand=" + this.brand.value );
                }
                if ( this.size && this.size.value ) {
                    str.push( "size=" + this.size.value );
                }
            }
            if ( isHash ) {
                if ( !( ( parseInt( this.curPPP, 10 ) === 40 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp !== '3_COL' ) || ( parseInt( this.productsPerPage.val(), 10 ) === 60 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp === '3_COL' ) ) ) {
                    str.push( "productsPerPage=" + this.productsPerPage.val() );
                }
            } else {
                str.push( "productsPerPage=" + this.getPPPForURL() );
            }

            return str.join( "&" );
        } else {
            if ( this.faceted ) {
                if ( this.sortBy.value !== '*' ) {
                    str.push( "sortBy=" + this.sortBy.value );
                }
            } else {
                if ( this.brand && this.brand.value ) {
                    str.push( "brand=" + this.brand.value );
                }
                if ( this.size && this.size.value ) {
                    str.push( "size=" + this.size.value );
                }
            }

            if ( isHash ) {
                if ( this.productsPerPage.val() !== 24 && !( ( parseInt( this.curPPP, 10 ) === 40 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp !== '3_COL' ) || ( parseInt( this.productsPerPage.val(), 10 ) === 60 && this.pageIndex === 1 && window.MACYS.PaginationHelper.primaryGridExp === '3_COL' ) ) ) {
                    str.push( "productsPerPage=" + this.productsPerPage.val() );
                }
            } else {
                if ( this.productsPerPage.val() !== 24 ) {
                    str.push( "productsPerPage=" + this.getPPPForURL() );
                }
            }

            return str.join( "&" );
        }
    };

    PaginationController.prototype.getIndex = function () {
        return this.pageIndex;
    };

    PaginationController.prototype.getSort = function () {
        return ( this.faceted ) ? this.sortBy.value : "ORIGINAL";
    };

    PaginationController.prototype.getPPP = function () {
        return ( ( this.productsPerPage.val() ).toUpperCase() !== "ALL" ) ? this.productsPerPage.val() : 60;
    };

    PaginationController.prototype.getPPPForURL = function () {
        return ( parseInt( this.curPPP, 10 ) === 120 ) ? 60 : this.curPPP;
    };

    PaginationController.prototype.getSize = function () {
        return this.size.value;
    };

    PaginationController.prototype.getBrand = function () {
        return this.brand.value;
    };

    PaginationController.prototype.isOriginalSort = function () {
        return this.getSort() === this.origSort;
    };

    PaginationController.prototype.isOriginalPPP = function () {
        return this.getPPP() === this.origPPP;
    };

    PaginationController.prototype.setSortByHeader = function () {
        if ( this.sortByHeader && this.faceted && this.sortBy.selectedIndex >= 0 ) {
            this.sortByHeader.innerHTML = this.sortBy[ this.sortBy.selectedIndex ].text;
        }
    };

    PaginationController.prototype.lock = function () {
        if ( this.faceted ) {
            if ( this.sortBy ) {
                this.sortBy.disabled = true;
            } else {
                if ( this.brand ) {
                    this.brand.disabled = true;
                }
                if ( this.size ) {
                    this.size.disabled = true;
                }
            }
        }
        this.productsPerPage.disabled = true;
        $( this.paginationTop ).addClass( "busy" );
        $( this.paginationBot ).hide();
        $( this.paginationBot ).siblings().hide();
        this.locked = true;
    };

    PaginationController.prototype.unlock = function () {
        if ( this.faceted ) {
            if ( this.sortBy ) {
                this.sortBy.disabled = false;
            } else {
                if ( this.brand ) {
                    this.brand.disabled = false;
                }
                if ( this.size ) {
                    this.size.disabled = true;
                }
            }
        }
        this.productsPerPage.disabled = false;
        $( this.paginationTop ).removeClass( "busy" );
        if ( ( this.productsPerPage.val() ).toUpperCase() !== "ALL" ) {
            $( this.paginationBot ).show();
            $( this.paginationTop ).show();
        }
        $( this.paginationBot ).siblings().show();
        this.locked = false;
    };

    PaginationController.prototype.isPaginationApplicable = function () {
        return ( this.pageCount > 1 );
    };

    PaginationController.prototype.renderPagination = function () {
        /* update the paginateIndex -- page# of pages
         this.paginateIndex.innerHTML = "Page " + this.pageIndex + " of " + this.pageCount;*/
        /* get rid of everything except paginateIndex */

        // Commented out because " 'i' is already defined " error while compilation.
        // var i = 0;
        this.paginationTop.innerHTML = "";
        var pageElem = document.createElement( 'span' );
        pageElem.innerHTML = 'Page';
        pageElem.className = 'pageText';
        this.appendLinkBuffer( this.paginationTop );
        if ( this.isPaginationApplicable() ) {
            if ( this.pageIndex > 1 ) {
                this.paginationTop.appendChild( this.getPageLink( 'arrowLeft arrowButton', '' ) );
                this.paginationTop.appendChild( this.getPageLink( 'previousClass', 'Previous' ) );
                this.appendLinkBuffer( this.paginationTop );
            }
            this.paginationTop.appendChild( pageElem );
            if ( this.pageIndex < 4 || this.pageCount < 6 ) {
                for ( var i = 1; i < Math.min( 5, this.pageCount ); i++ ) {
                    this.appendLinkBuffer( this.paginationTop );
                    if ( i === this.pageIndex ) {
                        this.paginationTop.appendChild( this.getPageLink( 'currentPage', i ) );
                    } else {
                        this.paginationTop.appendChild( this.getPageLink( '', i ) );
                    }
                }
                if ( this.pageCount > 5 ) {
                    this.paginationTop.appendChild( this.getEllipsis() );
                } else {
                    this.appendLinkBuffer( this.paginationTop );
                }
            } else if ( this.pageCount - this.pageIndex < 3 ) {
                this.appendLinkBuffer( this.paginationTop );
                this.paginationTop.appendChild( this.getPageLink( '', 1 ) );
                this.paginationTop.appendChild( this.getEllipsis() );
                for ( var j = this.pageCount - 3; j < this.pageCount; j++ ) {
                    if ( j === this.pageIndex ) {
                        this.paginationTop.appendChild( this.getPageLink( 'currentPage', j ) );
                    } else {
                        this.paginationTop.appendChild( this.getPageLink( '', j ) );
                    }
                    this.appendLinkBuffer( this.paginationTop );
                }
            } else {
                this.appendLinkBuffer( this.paginationTop );
                this.paginationTop.appendChild( this.getPageLink( '', 1 ) );
                this.paginationTop.appendChild( this.getEllipsis() );
                this.appendLinkBuffer( this.paginationTop );
                this.paginationTop.appendChild( this.getPageLink( 'currentPage', this.pageIndex ) );
                this.appendLinkBuffer( this.paginationTop );
                this.paginationTop.appendChild( this.getEllipsis() );
            }
        }
        if ( this.pageIndex === this.pageCount ) {
            if ( this.pageIndex === 1 ) {
                this.paginationTop.appendChild( this.createShowAllItemsText( 'showAllItems' ) );
            } else {
                this.paginationTop.appendChild( this.getPageLink( 'currentPage', this.pageCount ) );
            }
        } else {
            if ( this.pageCount === 0 ) {
                this.paginationTop.appendChild( this.createShowAllItemsText( 'showAllItems' ) );
            } else {
                this.paginationTop.appendChild( this.getPageLink( '', this.pageCount ) );
            }
        }

        if ( this.pageCount > this.pageIndex ) {
            this.appendLinkBuffer( this.paginationTop );
            this.paginationTop.appendChild( this.getPageLink( 'nextClass', 'Next' ) );
            this.paginationTop.appendChild( this.getPageLink( 'arrowRight arrowButton', '' ) );
            // if(YAHOO.env.ua.ie)
            if ( navigator.userAgent.search( "MSIE" ) >= 0 ) {
                $( '#paginateTop' ).css( 'marginTop', '0px' );
            }
        } else if ( this.pageCount !== 1 ) {
            this.appendLinkBuffer( this.paginationTop );
            if ( navigator.userAgent.search( "MSIE" ) >= 0 ) {
                $( '#paginateTop' ).css( 'marginTop', '-6px' );
            }
        }

        if ( this.paginationBot ) {
            this.paginationBot.innerHTML = this.paginationTop.innerHTML;
        }

        //show or hide pagination based on PPP value
        if ( ( this.productsPerPage.val() ).toUpperCase() === "ALL" ) {
            $( ".pagination" ).hide();
            $( "#filterPPP" ).css( {
                "float": "right",
                "margin-right": "-6px"
            } );
            $( "#filterPPPBottom" ).css( {
                "float": "right",
                "margin-right": ""
            } );
        } else if ( parseInt( this.productsPerPage.val(), 10 ) === 120 ) {
            if ( !this.locked ) {
                $( ".pagination" ).show();
            }
            $( "#filterPPP, #filterPPPBottom" ).css( {
                "float": "left",
                "margin-right": ""
            } );
        } else {
            if ( !this.locked ) {
                $( ".pagination" ).show();
            }
            $( "#filterPPP, #filterPPPBottom" ).css( {
                "float": "left",
                "margin-right": ""
            } );
        }
    };

    PaginationController.prototype.getPageLink = function ( className, pageNum, attr ) {
        var a = document.createElement( 'a' );
        if ( attr ) {
            a = document.createElement( 'span' );
        }
        a.className = className;
        a.innerHTML = pageNum;
        $( a ).addClass( 'paginationSpacer' );
        if ( a.className !== "currentPage" && attr === undefined ) {
            a.href = this.baseUrl + '/catalog/index.ognc?CategoryID=';
            if ( ( $( "#categoryId" ).get( 0 ) ) && $( "#categoryId" ).get( 0 ).value !== '' ) {
                a.href += $( "#categoryId" ).get( 0 ).value;
            }
            a.href += '&pageIndex=' + pageNum;
        }
        return a;
    };

    PaginationController.prototype.createShowAllItemsText = function ( className ) {
        var span = document.createElement( 'span' );
        span.className = className;
        if ( this.productCount.innerHTML === 0 ) {
            span.innerHTML = "";
        } else if ( this.productCount.innerHTML === 1 ) {
            span.innerHTML = "";
        } else if ( this.productCount.innerHTML > 1 ) {
            span.innerHTML = "Showing All " + this.productCount.innerHTML + " Items";
        }
        return span;
    };

    PaginationController.prototype.appendLinkBuffer = function ( el ) {
        return;
    };

    PaginationController.prototype.getEllipsis = function () {
        var ellipsis = document.createElement( 'span' );
        ellipsis.innerHTML = '...';
        return ellipsis;
    };

    PaginationController.prototype.revertToLastState = function () {
        if ( this.faceted ) {
            this.sortBy.value = this.curSort = this.lastState[ 2 ];
        }
        this.productsPerPage.value = this.curPPP = this.lastState[ 1 ];
        this.pageIndex = this.lastState[ 0 ];
        this.renderPagination();
    };

    PaginationController.prototype.setProductCount = function ( count, pageProductCount ) {
        /* Displaying Product count & Item per page in the bottom pagination of Search landing page */
        var itemPerPage = $( '#paginateBottom' ).parent().children( '.itemPerPage' )[ 0 ];
        if ( itemPerPage ) {
            if ( count > this.curPPP && ( this.productsPerPage.val() ).toUpperCase() !== "ALL" ) {
                itemPerPage.innerHTML = "Showing " + pageProductCount + " of " + count + " results";
                if ( $( "#filterPPPBottom" ).length ) {
                    $( "#filterPPPBottom" ).removeClass( "showingResult" ).addClass( "showingResults" );
                }
            } else {
                itemPerPage.innerHTML = "";
                if ( $( "#filterPPPBottom" ).length ) {
                    $( "#filterPPPBottom" ).removeClass( "showingResults" ).addClass( "showingResult" );
                }
            }
        }

        if ( parseInt( this.productCount.innerHTML, 10 ) === count ) {
            return;
        }
        this.productCount.innerHTML = count;
        $( '#prodResultMsg' ).html( ( count > 1 ) ? "results" : "result" );
        var spanItems = $( ".productCount" );
        if ( spanItems && spanItems.length > 1 ) {
            if ( count === 1 ) {
                spanItems[ 1 ].innerHTML = "item";
            } else {
                spanItems[ 1 ].innerHTML = "items";
            }
        }
        this.pageCount = Math.ceil( count / this.curPPP );
        //this.pageIndex = 1;
        this.renderPagination();
    };

    PaginationController.prototype.updateSortBy = function ( e ) {
        this.lastState[ 2 ] = this.curSort;
        this.curSort = this.getSort();
        var exploreAttr = this.exploreAttrUI;
        var elementId;
        // For setting sortBy header in multi select.
        this.setSortByHeader();
        exploreAttr.add( {
            1: $( "#pageId" ).val()
        } );

        if ( this.macysMultiselectUi && this.macysMultiselectUi.coreMetrics ) {
            exploreAttr.add( {
                6: this.macysMultiselectUi.coreMetrics.getSearchKeyword()
            } );
        }
        if ( this.curSort === "ORIGINAL" ) {
            elementId = "Featured Items";
        } else if ( this.curSort === "NAME" ) {
            elementId = "Item Name";
        } else if ( this.curSort === "NEW_ITEMS" ) {
            elementId = "New Arrivals";
        } else if ( this.curSort === "PRICE_HIGH_TO_LOW" ) {
            elementId = "Price: High to Low";
        } else if ( this.curSort === "PRICE_LOW_TO_HIGH" ) {
            elementId = "Price: Low to High";
        } else if ( this.curSort === "BEST_SELLERS" ) {
            elementId = "Best Sellers";
        } else if ( this.curSort === "TOP_RATED" ) {
            /*Added the string &#39; for escaping apostrophe*/
            elementId = "Customers&#39; Top Rated";
        }

        this.cmCreatePageElementTag( elementId, "Faceted Sort By", exploreAttr.toString() );
        this.pageIndex = 1;
        this.macysBrightTagUi.navigation.pageIndex = this.pageIndex;
        this.resetShowPreviousItems();
        // For keyword search, no need to refresh the product count & facet for updating sort by.
        if ( this.macysFacetedUi.facetCtrl && this.macysFacetedUi.facetCtrl.dynamicFacet ) {
            this.macysFacetedUi.facetCtrl.updateFacetWidget = false;
        }
        this.macysFacetedUi.userFacetUpdate.fire();
    };

    PaginationController.prototype.updatePageIndex = function ( e ) {
        var tar = e.target;
        e.preventDefault();

        if ( !tar.nodeName || tar.nodeName.toLowerCase() !== 'a' || this.locked ) {
            return;
        }

        Logger.log( "clicked page, old index: " + this.pageIndex );

        this.lastState[ 0 ] = this.pageIndex;
        Logger.log( "tar.innerHTML: " + tar.innerHTML );


        if ( tar.innerHTML === 'Previous' || $( tar ).hasClass( "arrowLeft" ) ) {
            this.pageIndex--;
        } else if ( tar.innerHTML === 'Next' || $( tar ).hasClass( "arrowRight" ) ) {
            this.pageIndex++;
        } else {
            this.pageIndex = parseInt( tar.innerHTML, 10 );
        }

        //Ft#4419
        this.macysBrightTagUi.navigation.pageIndex = this.pageIndex;
        if ( this.pageIndex > this.pageCount ) {
            this.pageIndex = this.pageCount;
        }
        if ( this.pageIndex < 1 ) {
            this.pageIndex = 1;
        }
        Logger.log( "clicked page, new index: " + this.pageIndex );
        this.renderPagination();
        window.scrollTo( 0, 0 );
        this.stopLoading = false;
        if ( this.waiting ) {
            this.stopLoading = true;
        }
        // reset callsMade only for 120 products list
        if ( parseInt( this.curPPP, 10 ) === 120 ) {
            this.callsMade = 0;
            this.macysFacetedUi.productsFetchedEvent.subscribe( this.fetchProductsOnScroll, this, true );
        }
        if ( this.lastState[ 0 ] !== this.pageIndex ) {
            // For keyword search, no need to refresh the product count & facet for updating pagination.
            if ( this.macysFacetedUi.facetCtrl.dynamicFacet ) {


                this.macysFacetedUi.facetCtrl.updateFacetWidget = false;
            }
            this.macysFacetedUi.facetCtrl.updateProducts( false, this.pageIndex );

        }
        this.updateThumbnailTracking();
    };

    PaginationController.prototype.updateThumbnailTracking = function () {
        return;
    };

    PaginationController.prototype.updatePPP4ColumnGrid = function () {
        this.is4ColumnGrid = true;
        // this.productsPerPage = $( '.fourColumnGridClass', '#filterPPP' ).get( 0 );
        this.updatePPP();
    };

    PaginationController.prototype.updatePPP3ColumnGrid = function () {
        this.is4ColumnGrid = false;
        // this.productsPerPage = $( '.threeColumnGridClass', '#filterPPP' ).get( 0 );
        this.updatePPP();
    };

    PaginationController.prototype.updatePPPColumnGrid = function ( e ) {
        this.is4ColumnGrid = false;
        if ( $( '.threeAcross' ).hasClass( 'disabledGrid' ) ) {
            this.is4ColumnGrid = true;
        }
        this.updatePPP( e );
    };

    PaginationController.prototype.dataSetUp = function ( e ) {

        var exploreAttr = this.exploreAttrUI,
            elementId,
            cmElementId,
            self = this;

        this.lastState[ 1 ] = this.curPPP;
        this.curPPP = this.getPPP();
        cmElementId = this.curPPP;

        this.showPrevItems = false;
        // trigger infinite scroll for "Show All"
        if ( ( this.productsPerPage.val() ).toUpperCase() === "ALL" ) {
            if ( this.getAllExpStartPageIndex() > 1 ) {
                if ( $( ".showPrevItems" ).length > 0 ) {
                    $( ".showPrevItems" ).remove();
                }
                $( "ul#thumbnails" ).before( "<div class='showPrevItems' style='margin-left:auto;margin-right:auto;margin-top:20px;margin-bottom:5px;width:25%;'><button id='showPrevItems' class='secondary tiny radius'>Show Previous Items</button></div>" );
                $( "#showPrevItems" ).click( function () {
                    self.showPrevItems = true;
                    self.setInfiniteScroll( true );
                    self.allExpStartPageIndex--;
                    if ( self.allExpStartPageIndex === 1 ) {
                        $( ".showPrevItems" ).remove();
                    }

                    if ( !self.isSeoFriendlyFeatureEnabled ) {
                        $( "ul#thumbnails" ).before( "<div class='paginationLoader'></div>" );
                    }

                    var trackingInfo = {
                        elementID: Globals.getValue( 'page.pageName' ),
                        elementCategory: "Load Previous"
                    };

                    cmAnalytics.elementTag( trackingInfo );
                    self.fetchProducts( true, self.allExpStartPageIndex );
                } );
            }
            cmElementId = "ALL";
            this.waiting = false;
            this.callsMade = 0;
            this.restrictScroll = false;
            this.macysFacetedUi.productsFetchedEvent.subscribe( this.attachScroll, this, true );
            //16A - SET HERE TO HANDLE ALL DEEPLINK
            this.attachScroll();
        } else if ( parseInt( this.productsPerPage.val(), 10 ) === 120 ) {
            this.callsMade = 0;
            this.restrictScroll = true;
        } else {
            this.restrictScroll = true;
            this.setInfiniteScroll( false );
        }

        //NOTE FROM MMOIR: Why are we resetting this!?!?! what if the server rendered a different page than page 1, then this is resetting it??? BAD!!!!
        ///... I will add this check and use pageIndex as-is if it is already set.
        this.pageIndex = this.pageIndex || 1;
        var origPageCount = this.pageCount;

        this.pageCount = Math.ceil( parseInt( this.productCount.innerHTML, 10 ) / this.curPPP );
        // Added PPP header for multi facet.
        if ( this.pppHeader && this.productsPerPage.selectedIndex >= 0 ) {
            this.pppHeader.innerHTML = this.productsPerPage[ this.productsPerPage.selectedIndex ].text;
        }

        exploreAttr.add( {
            1: $( "#pageId" ).val()
        } );

        if ( this.macysMultiselectUi && this.macysMultiselectUi.coreMetrics ) {
            exploreAttr.add( {
                6: this.macysMultiselectUi.coreMetrics.getSearchKeyword()
            } );
        }
        elementId = cmElementId + " Items Per Page";

        if ( this.fromOnUrlChange === false ) {
            this.cmCreatePageElementTag( elementId, "Faceted Items Per Page", exploreAttr.toString() );
        }

        this.renderPagination();

        if ( ( origPageCount === this.pageCount ) && ( this.pageCount === 1 ) ) {

            require( [ "mcomjs/components/gridView/GridViewController",
                'mcomProductThumbnail/ProductThumbnailLoader'
            ], function ( GridViewController, mcomProductThumbnailLoader ) {
                GridViewController.updateBGVLayout();
                mcomProductThumbnailLoader.loadProductThumbnails();
            } );

            return;
        }

        if ( this.macysFacetedUi.facetCtrl && this.macysFacetedUi.facetCtrl.dynamicFacet ) {
            this.macysFacetedUi.facetCtrl.updateFacetWidget = false;
        }

    };

    PaginationController.prototype.attachScroll = function () {

        if ( this.macysFacetedUi && this.macysFacetedUi.productsFetchedEvent && this.macysFacetedUi.productsFetchedEvent.unsubscribe && this.attachScroll ) {
            this.macysFacetedUi.productsFetchedEvent.unsubscribe( this.attachScroll, this );
        }
        if ( !this.scrollAttached ) {
            this.triggerInfiniteScroll( this );
            this.scrollAttached = true;
        }
    };

    PaginationController.prototype.updatePPP = function ( e ) {
        if ( this.isSeoFriendlyFeatureEnabled ) {
            e = e || {};
            this.dataSetUp();
            var notLoading = ( typeof e.isSwitchGridOnLoad === 'undefined' || e.isSwitchGridOnLoad !== true );
            var pageCountDoesNotEqualOnLoad = false;
            if ( !notLoading ) {
                if ( parseInt( $( '#productsPP' ).val(), 10 ) !== this.curPPP ) {
                    pageCountDoesNotEqualOnLoad = true;
                }
            }

            if ( notLoading || pageCountDoesNotEqualOnLoad ) {
                this.macysFacetedUi.userFacetUpdate.fire();
            }
        } else {
            this.dataSetUp();
            this.macysFacetedUi.userFacetUpdate.fire();
        }
    };

    PaginationController.prototype.updateBrandSize = function () {
        this.macysFacetedUi.userFacetUpdate.fire();
    };

    PaginationController.prototype.getBrowseGridLayoutMode = function () {
        if ( $( '.fourAcross ' ).hasClass( 'disabledGrid' ) ) {
            this.is4ColumnGrid = false;
            this.productsPerPage = $( this.productsPerPage3ColumnGrid );
        } else {
            this.is4ColumnGrid = true;
            this.productsPerPage = $( this.productsPerPage4ColumnGrid );
        }
    };

    PaginationController.prototype.fetchProducts = function ( isAllScroll, pageIndexOverride ) {
        Logger.log( "pageIndex", this.pageIndex );
        if ( this.isSeoFriendlyFeatureEnabled ) {
            //ELSE: Update every thumb to have the current PageUrl
            //if ( isAllScroll && typeof $( "ul#thumbnails li" ).data( 'pageUrl' ) === 'undefined' ) {
            if ( isAllScroll ) {
                $( 'ul#thumbnails li.productThumbnail' ).each( function ( idx, obj ) {
                    if ( typeof $( obj ).data( 'pageUrl' ) === 'undefined' ) {
                        $( obj ).data( 'pageUrl', location.href.replace( location.hash, '' ) );
                    }
                } );

                this.pageIndex = pageIndexOverride;
            }
        }
        // Ft#4419
        this.macysBrightTagUi.navigation.pageIndex = this.pageIndex;
        if ( this.pageIndex > this.pageCount ) {
            this.pageIndex = this.pageCount;
        }
        if ( this.pageIndex < 1 ) {
            this.pageIndex = 1;
        }
        // set facet widget to false to avoid heavy load in apollo
        this.macysFacetedUi.facetCtrl.updateFacetWidget = false;
        this.macysFacetedUi.facetCtrl.updateProducts( isAllScroll, isAllScroll ? ( pageIndexOverride ? pageIndexOverride : this.pageIndex ) : undefined );
        this.updateThumbnailTracking();
    };

    PaginationController.prototype.setInfiniteScroll = function ( val ) {
        return this.isInfiteScroll = val;
    };

    PaginationController.prototype.getInfiniteScroll = function () {
        return this.isInfiteScroll;
    };

    PaginationController.prototype.triggerInfiniteScroll = function ( self ) {
        if ( self.isSeoFriendlyFeatureEnabled ) {
            this.lastScrollTop = $( this ).scrollTop();
            $( window ).scroll( function () {
                // disable scroll when page index matches page count, items count not all and loading next set of products
                if ( self.pageCount === self.infiniteScrollPageIndexEnd || self.waiting || $( "li.productThumbnail" ).length === 0 || self.restrictScroll || self.showPrevItems || self.backToTopClick ) {
                    return;
                }
                var st = $( this ).scrollTop();
                if ( st > this.lastScrollTop ) {
                    // downscroll code
                    // load next set of products atleast 5 product rows away from the end of the results
                    if ( $( window ).scrollTop() >= ( $( "#macysGlobalLayout" ).outerHeight( true ) + $( "#macysGlobalLayout" ).offset().top - 2200 ) ) {
                        // remove all page index other than product selection
                        self.setAllPageIndexInSession( '' );
                        if ( self.pageIndex > self.infiniteScrollPageIndexEnd ) {
                            self.infiniteScrollPageIndexEnd = self.pageIndex;
                        }
                        self.fetchProductsOnScroll( self, true );
                    }

                }
                this.lastScrollTop = st;

            } );
        } else {
            $( window ).scroll( function () {
                // disable scroll when page index matches page count, items count not all and loading next set of products
                if ( self.pageCount === self.pageIndex || self.waiting || $( "li.productThumbnail" ).length === 0 || self.restrictScroll || self.showPrevItems || self.backToTopClick ) {
                    return;
                }
                // load next set of products atleast 5 product rows away from the end of the results
                if ( $( window ).scrollTop() >= ( $( "#macysGlobalLayout" ).outerHeight( true ) + $( "#macysGlobalLayout" ).offset().top - 2200 ) ) {
                    // remove all page index other than product selection
                    self.setAllPageIndexInSession( '' );
                    self.fetchProductsOnScroll( self, true );
                }
            } );
        }
    };

    PaginationController.prototype.fetchProductsOnScroll = function ( self, isOnScroll ) {
        if ( isOnScroll !== true ) {
            self = this;
            if ( this.stopLoading ) {
                return;
            }
            self.macysFacetedUi.productsFetchedEvent.unsubscribe( self.fetchProductsOnScroll, self );
            if ( ( self.pageCount === self.pageIndex && parseInt( self.productCount.innerHTML, 10 ) % 120 <= parseInt( self.getPPPForURL(), 10 ) ) ) {
                return;
            }
        }

        var maxCalls = 1;
        if ( ( self.productsPerPage.val() ).toUpperCase() === "ALL" ) {
            maxCalls = self.pageCount;
        }
        if ( self.callsMade < maxCalls ) {
            // set infinite scroll true in order to not remove the existing result set
            self.setInfiniteScroll( true );
            /** TODO: Need to refactor **/
            if ( ( self.productsPerPage.val() ).toUpperCase() === "ALL" ) {
                self.pageIndex++;
            }

            // set loader true to prevent continuos calls on scroll
            self.waiting = true;
            if ( !self.isSeoFriendlyFeatureEnabled ) {
                $( "ul#thumbnails" ).after( "<div class='paginationLoader'></div>" );
            }
            self.callsMade++;
            if ( self.isSeoFriendlyFeatureEnabled ) {
                self.fetchProducts( true, ++self.infiniteScrollPageIndexEnd );
            } else {
                self.fetchProducts( true );
            }
        }
    };

    PaginationController.prototype.setAllExpStartPageIndex = function ( val ) {
        this.allExpStartPageIndex = parseInt( val, 10 );
        if ( this.isSeoFriendlyFeatureEnabled ) {
            this.infiniteScrollPageIndexEnd = parseInt( val, 10 );
        }
    };

    PaginationController.prototype.getAllExpStartPageIndex = function () {
        return this.allExpStartPageIndex;
    };

    PaginationController.prototype.setProductState = function () {
        if ( ( this.productsPerPage.val() ).toUpperCase() === "120" && this.callsMade < 1 ) {
            return;
        }
        var selectedProductId = sessionStorage.getItem( 'selectedProductId' );
        var self = this;
        if ( selectedProductId ) {
            if ( window.MACYS.loading ) {
                window.MACYS.loading.show();
            }
            $( document ).ready( function () {
                setTimeout( function () {
                    selectedProductId = sessionStorage.getItem( 'selectedProductId' );
                    var selectedRecommendProductId = sessionStorage.getItem( 'selectedRecommendProductId' );
                    if ( selectedRecommendProductId && $( 'li#' + selectedProductId ).length > 0 ) {
                        self.macysFacetedUi.productsFetchedEvent.unsubscribe( self.setProductState, self );
                        $( window ).scrollTop( $( 'li#' + selectedProductId ).offset().top );
                        sessionStorage.removeItem( 'selectedRecommendProductId' );
                        sessionStorage.removeItem( 'selectedProductId' );
                    } else if ( selectedProductId && $( 'ul#thumbnails' ).find( 'li#' + selectedProductId ).length > 0 ) {
                        self.macysFacetedUi.productsFetchedEvent.unsubscribe( self.setProductState, self );
                        $( window ).scrollTop( $( 'ul#thumbnails' ).find( 'li#' + selectedProductId ).offset().top );
                        sessionStorage.removeItem( 'selectedProductId' );
                    }
                    if ( window.MACYS.loading ) {
                        window.MACYS.loading.hide();
                    }
                }, 500 );
            } );
        } else {
            this.macysFacetedUi.productsFetchedEvent.unsubscribe( this.setProductState, this );
        }
    };

    PaginationController.prototype.resetShowPreviousItems = function () {
        // default all page index to 1 on facet selection and remove show previous items button
        this.setAllExpStartPageIndex( 1 );
        if ( $( ".showPrevItems" ).length ) {
            $( ".showPrevItems" ).remove();
        }
    };

    PaginationController.prototype.setAllPageIndexInSession = function ( allPageIndex ) {

        var allPageIndexMap = {}, page = Globals.getValue( 'page.pageID' );
        if ( sessionStorage.getItem( 'allPageIndexMap' ) ) {
            allPageIndexMap = JSON.parse( sessionStorage.getItem( 'allPageIndexMap' ) );
        }
        allPageIndexMap[ page ] = allPageIndex;
        sessionStorage.setItem( 'allPageIndexMap', JSON.stringify( allPageIndexMap ) );
    };

    PaginationController.prototype.getAllPageIndexInSession = function () {

        var allPageIndexMap = {}, page = Globals.getValue( 'page.pageID' );
        if ( sessionStorage.getItem( 'allPageIndexMap' ) ) {
            allPageIndexMap = JSON.parse( sessionStorage.getItem( 'allPageIndexMap' ) );
        }
        return allPageIndexMap[ page ];
    };

    return PaginationController;
} );
