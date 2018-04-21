define( [ 'jquery', 'mcomAnalytics', 'globals', 'mcomjs/components/gridView/ProductsPerPageDropDownView' ], function ( $, cmAnalytics, Globals, PPPDropDownView ) {
    var self = {

        init: function ( options ) {

            if ( self.initCalled ) {
                return;
            }
            self.isBgvAstraDrivenBrowseGridEnabled = options.isBgvAstraDrivenBrowseGridEnabled;
            self.primaryGridExp = options.primaryGridExp;
            self.isInfiniteScrollEnabled = options.isInfiniteScrollEnabled;

            self.pppDropDownView = new PPPDropDownView( {
                "el": $( "#filters, #filtersBottom" ),
                "PaginationController": options.PaginationController
            } );
            self.initCalled = true;
        },

        renderFromSession: function ( initOptions ) {
            if ( !self.initCalled ) {
                self.init( initOptions );
            }
            var fourColumnPPPValues = [ "20", "40", "100" ],
                threeColumnPPPValues = [ "30", "60", "120" ],
                noSelection = !self.oldBGVLayout && !self.newBGVLayout,
                optionalPPP = $( '#itemsPP' ).val();

            if ( self.isInfiniteScrollEnabled ) {
                fourColumnPPPValues = [ "40", "100", "All" ];
                threeColumnPPPValues = [ "60", "120", "All" ];
            }

            self.is4ColumnGrid = true;

            if ( sessionStorage.getItem( 'gridType' ) === "3 Column Grid" || ( !sessionStorage.getItem( 'gridType' ) && self.primaryGridExp === '3_COL' ) ) {
                self.is4ColumnGrid = false;
                self.oldBGVLayout = 'large-block-grid-4';
                self.newBGVLayout = 'large-block-grid-3';
                self.render( $( '.threeAcross .acrossCtr' ), true );
            } else if ( sessionStorage.getItem( 'gridType' ) === "4 Column Grid" || ( !sessionStorage.getItem( 'gridType' ) && self.primaryGridExp === '4_COL' ) ) {
                self.is4ColumnGrid = true;
                self.oldBGVLayout = 'large-block-grid-3';
                self.newBGVLayout = 'large-block-grid-4';
                self.render( $( '.fourAcross .acrossCtr' ), true );
            } else if ( !sessionStorage.getItem( 'gridType' ) && noSelection ) {
                //should get values such as URL parameters (stored in DOM) in case there is no preset user option
                // if no preset is there, default view is four column view so that it has high priority
                if ( $.inArray( optionalPPP, fourColumnPPPValues ) > -1 ) {
                    self.is4ColumnGrid = true;
                    self.oldBGVLayout = 'large-block-grid-3';
                    self.newBGVLayout = 'large-block-grid-4';
                    self.render( $( '.fourAcross .acrossCtr' ), true );
                } else if ( $.inArray( optionalPPP, threeColumnPPPValues ) > -1 ) {
                    self.is4ColumnGrid = false;
                    self.oldBGVLayout = 'large-block-grid-4';
                    self.newBGVLayout = 'large-block-grid-3';
                    self.render( $( '.threeAcross .acrossCtr' ), true );
                }
            }

            require( [ 'appController' ], function ( AppController ) {
                if ( AppController.isTabletBreakpoint() ) {
                    self.renderRecommendationPool( 3 );
                }
            } );
        },

        //###Method - updateBGVLayout() updates the browse grid to reflect the correct layout grid mode.
        //>parameters
        //>
        //+ (none)
        //>returns
        //>
        //+ (none)
        updateBGVLayout: function () {
            $( "ul.thumbnails" ).removeClass( self.oldBGVLayout );
            $( "ul.thumbnails" ).addClass( self.newBGVLayout );
        },

        render: function ( el, isOnLoad ) {

            var prodsPerRow,
                gridType = sessionStorage.getItem( 'gridType' ),
                containerRowEl = $( el ).closest( '.row' );

            if ( !isOnLoad && ( ( gridType === "3 Column Grid" && $( el ).parent().hasClass( 'threeAcross' ) ) || ( gridType === "4 Column Grid" && $( el ).parent().hasClass( 'fourAcross' ) ) ) ) {
                self.pppDropDownView.updatePPPDropDown( self.is4ColumnGrid, isOnLoad );
                return;
            }

            if ( $( el ).parent().hasClass( 'threeAcross' ) ) {
                self.oldBGVLayout = 'large-block-grid-4';
                self.newBGVLayout = 'large-block-grid-3';
                if ( !isOnLoad ) {
                    sessionStorage.setItem( "gridType", "3 Column Grid" );
                }

                self.is4ColumnGrid = false;
                prodsPerRow = 3;
            } else if ( $( el ).parent().hasClass( 'fourAcross' ) ) {
                self.oldBGVLayout = 'large-block-grid-3';
                self.newBGVLayout = 'large-block-grid-4';
                if ( !isOnLoad ) {
                    sessionStorage.setItem( "gridType", "4 Column Grid" );
                }
                self.is4ColumnGrid = true;
                prodsPerRow = 4;
            }
            self.disabledGridIcon( $( el ).parent() );

            //reorder media-ads
            self.reorderMediaAds( containerRowEl );

            //show appropriate drop down
            self.pppDropDownView.updatePPPDropDown( self.is4ColumnGrid, isOnLoad );

            // Render recommendation Pool
            self.renderRecommendationPool( prodsPerRow );

            if ( !isOnLoad ) {
                self.fireElementTag();
            }
            self.updateBGVLayout();
        },

        disabledGridIcon: function ( imgCtr ) {
            imgCtr.removeClass( 'disabledGrid' );
            imgCtr.siblings().addClass( 'disabledGrid' );
        },

        fireElementTag: function () {

            var categoryMap = {}, page = Globals.getValue( 'page.pageID' );

            if ( sessionStorage.getItem( 'categoryMap' ) ) {
                categoryMap = JSON.parse( sessionStorage.getItem( 'categoryMap' ) );
            }

            if ( categoryMap[ page ] && categoryMap[ page ].indexOf( sessionStorage.getItem( 'gridType' ) ) >= 0 ) {
                return;
            }

            var attrs = [];
            attrs[ 0 ] = Globals.getValue( 'page.pageName' );
            attrs[ 6 ] = Globals.getValue( 'page.pageID' );
            var trackingInfo = {
                elementID: sessionStorage.getItem( 'gridType' ),
                elementCategory: "Grid Columns",
                attributes: attrs
            };

            cmAnalytics.elementTag( trackingInfo );

            if ( !categoryMap[ page ] ) {
                categoryMap[ page ] = [];
            }
            categoryMap[ page ].push( sessionStorage.getItem( 'gridType' ) );
            sessionStorage.setItem( 'categoryMap', JSON.stringify( categoryMap ) );
        },

        //###Method - reorderMediaAds( containerRowEl ) will reorder media ad positioning on the 3-column grid.
        // On a 4-column browse grid, the ads will be rendered on the following positions: 4, 13, 27, 38 (1-based count).
        // On a 3-column browse grid, the ads should be rendered on new positions, as follows: 3, 10, 21 (1-based count).
        // Ads may be inexistent. Nonetheless #38 should be hidden on 3-column grid version.
        //>parameters
        //>
        //+ *containerRowEl* - container row element of bgv button clicked
        //>returns
        //>
        //+ Null. Will only change position of existent media ads on the grid.
        reorderMediaAds: function ( containerRowEl ) {
            var fourColumnGridIndexes = [ 3, 12, 27, 36 ],
                threeColumnGridIndexes = [ 2, 9, 20 ],
                noOfPositions = 4,
                $thumbnails = $( containerRowEl ).find( '#thumbnails' ).children(),
                $mediaAds = $thumbnails.filter( ".thumbnailGridMedia" ),
                newPosition;

            var count = 0;
            for ( var i = 0; i < noOfPositions; i++ ) {
                newPosition = self.is4ColumnGrid ? fourColumnGridIndexes[ i ] : threeColumnGridIndexes[ i ];
                var $media = $mediaAds.filter( 'li#gridMedia' + i );
                if ( $media.length > 0 && newPosition ) {
                    $thumbnails.not( '.thumbnailGridMedia' ).eq( newPosition - count ).before( $media );
                    count++;
                    $media.show();
                }
                if ( !newPosition && $media ) {
                    $media.hide();
                }
            }
        },

        renderRecommendationPool: function ( prodsPerRow ) {

            var noOfProds = $( '#weRecommendThumbnails li.productThumbnail' ).length;

            if ( noOfProds <= 0 ) {
                return;
            }

            var remaining = noOfProds % prodsPerRow;

            $( '#weRecommendThumbnails li.productThumbnail' ).show();
            for ( var i = noOfProds; i > ( noOfProds - remaining ); i-- ) {
                $( '#weRecommendThumbnails li.productThumbnail' ).eq( i - 1 ).hide();
            }
        },

        renderItemsPerPage: function ( itemsIn3Col, itemsIn4Col ) {

            if ( sessionStorage.getItem( 'gridType' ) === "3 Column Grid" ) {
                self.renderThreeColumn( itemsIn3Col );
            } else if ( sessionStorage.getItem( 'gridType' ) === "4 Column Grid" ) {
                self.renderFourColumn( itemsIn4Col );
            }
        },

        renderThreeColumn: function ( itemsIn3Col ) {
            var persisted3ColumnGridOption = window.sessionStorage.getItem( 'ppp3ColumnGrid' );
            $( '.threeColumnGridClass' ).removeClass( 'hidden' );
            $( '.fourColumnGridClass' ).addClass( 'hidden' );
            self.disabledGridIcon( $( ".threeAcross" ) );
            if ( persisted3ColumnGridOption ) {
                $( "#itemsPP" ).val( persisted3ColumnGridOption );
                if ( $( '.pppOption' ).length <= 0 ) {
                    $( '#ppp3ColumnGrid' ).val( persisted3ColumnGridOption );
                    $( "#itemsPP" ).val( $( '#ppp3ColumnGrid' ).val() );
                }
            } else {
                $( "#itemsPP" ).val( itemsIn3Col );
            }
            $( '.threeColumnGridClass' ).find( '.pppOption' ).removeClass( 'selectedPPP' );
            self.oldBGVLayout = 'large-block-grid-4';
            self.newBGVLayout = 'large-block-grid-3';
            $( '.threeColumnGridClass' ).find( '#' + $( "#itemsPP" ).val() + "_items" ).addClass( 'selectedPPP' );
            self.renderRecommendationPool( 3 );
        },

        renderFourColumn: function ( itemsIn4Col ) {

            var persisted4ColumnGridOption = window.sessionStorage.getItem( 'ppp' );
            $( '.threeColumnGridClass' ).addClass( 'hidden' );
            $( '.fourColumnGridClass' ).removeClass( 'hidden' );
            self.disabledGridIcon( $( ".fourAcross" ) );
            if ( persisted4ColumnGridOption ) {
                $( "#itemsPP" ).val( persisted4ColumnGridOption );
                if ( $( '.pppOption' ).length <= 0 ) {
                    $( '#ppp' ).val( persisted4ColumnGridOption );
                    $( "#itemsPP" ).val( $( '#ppp' ).val() );
                }
            } else {
                $( "#itemsPP" ).val( itemsIn4Col );
            }
            $( '.fourColumnGridClass' ).find( '.pppOption' ).removeClass( 'selectedPPP' );
            self.oldBGVLayout = 'large-block-grid-3';
            self.newBGVLayout = 'large-block-grid-4';
            $( '.fourColumnGridClass' ).find( '#' + $( "#itemsPP" ).val() + "_items" ).addClass( 'selectedPPP' );
            self.renderRecommendationPool( 4 );
        },

        //###Method - getUserStoredSelectedOptions( optionalPrimaryGridExpParam ) returns the user selected options stored on session storage.
        //>parameters
        //>
        //+ *optionalPrimaryGridExpParam* - 'primaryGridExp' optional parameter
        //>returns
        //>
        //+ object containing user selected gridSelectedLayout mode, and user selected products per page value
        getUserStoredSelectedOptions: function ( optionalPrimaryGridExpParam ) {
            var gridSelectedLayout,
                primaryGridExp = optionalPrimaryGridExpParam || self.primaryGridExp || '';

            if ( sessionStorage.getItem( 'gridType' ) === "3 Column Grid" || ( !sessionStorage.getItem( 'gridType' ) && primaryGridExp === '3_COL' ) ) {
                gridSelectedLayout = 3;
            } else {
                gridSelectedLayout = 4; //default grid layout
            }

            return {
                gridSelectedLayout: gridSelectedLayout,
                pppSelectedValue: $( "#itemsPP" ).val()
            };
        },

        renderFromHistory: function ( is4column, pppValue ) {

            if ( is4column ) {
                self.renderFourColumn( pppValue );
            } else {
                self.renderThreeColumn( pppValue );
            }
            self.updateBGVLayout();
            self.pppDropDownView.mapOptionToAnotherGrid( $( "div.ppp" ), $( "div.ppp:visible" ).find( '.ppp' + pppValue ).index() );
        },

        clearInitCalled: function ( initOptions ) {
            self.initCalled = false;
            self.init( initOptions );
        }

    };

    return {
        init: self.init,
        renderFromSession: self.renderFromSession,
        render: self.render,
        renderItemsPerPage: self.renderItemsPerPage,
        updateBGVLayout: self.updateBGVLayout,
        getUserStoredSelectedOptions: self.getUserStoredSelectedOptions,
        renderFromHistory: self.renderFromHistory,
        clearInitCalled: self.clearInitCalled
    };
} );
