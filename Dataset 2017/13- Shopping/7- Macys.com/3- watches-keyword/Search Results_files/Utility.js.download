define( [ 'jquery', 'logger', 'underscore', 'arrayUtils', 'globals', 'stringUtil' ], function ( $, Logger, _, ArrayUtils, Globals, StringUtil ) {
    var defaultSortBy = "ORIGINAL",
        defaultProductsPerPage = "60",
        defaultPageIndex = "1",
        loc = location.pathname;

    // ========================================================================================
    // BCOM CLEAN & FAST NAV LEAN LAB TEST: Browse Performance
    // ========================================================================================
    if ( Globals.getValue( "props" ).bcomNavBrowsePerf ) {
        defaultProductsPerPage = "90";
    }
    // ========================================================================================

    function urlContainsSearch() {
        var retval = false;
        if ( loc.indexOf( '/shop/search' ) > -1 || loc.indexOf( '/search/index.ognc' ) > -1 || loc.indexOf( '/wedding/search' ) > -1 || loc.indexOf( '/shop/featured' ) > -1 || loc.indexOf( '/buy/' ) === 0 ) {
            retval = true;
        }
        return retval;
    }

    function isRegistryMode() {
        //LEGACY: Below is the current logic for this
        //this._registryMode && this._registryMode.value=="wedding"
        //IMPLEMENT THIS: WEDDING_REGISTRY_REGEX = "(.*)(\\/wedding-registry|\\/registry\\/wedding|\\&registry\\=wedding|\\&registry\\=true|application\\=REGISTRY|mode\\=wedding)(.*)";
        var retval = new RegExp( "(wedding-registry|registry\/wedding|\&registry\=wedding|mode\=wedding|application\=registry)", "i" ).test( window.location.href );
        //if ( loc.indexOf( '/shop/registry' ) > -1 || loc.indexOf( '/shop/wedding-registry' ) > -1 ) {
        //retval = true;
        //}
        return retval;
    }


    return {
        //NOTE: Because BCOM and MCOM doesn't have a common element in DOM to identify browse or search, using URL to identify the same.
        isSearch: urlContainsSearch(),
        isRegistry: isRegistryMode(),
        getCategoryInfoObject: function () {
            if ( $( '#currentCategoryId' ).length === 0 || isNaN( $( '#currentCategoryId' ).val() ) ) {
                //THE MCOM WAY OF GETTING THE VALUES...
                return {
                    categoryId: $( "div.current.cat" ).attr( "id" ),
                    parentCategoryId: $( "div.parentCategories.cat" ).attr( "id" )
                };
            } else {
                //THE BCOM WAY OF GETTING THE VALUES...
                return {
                    categoryId: $( '#currentCategoryId' ).val(),
                    parentCategoryId: 'undefined' //NOTE: in production as of 8/4/2015, BCOM always passes "undefined" for parentCategoryId
                };
            }
        },

        excludeDuplication: function ( arr, excludedProperty ) {
            var cleaned = [];
            arr.forEach( function ( itm ) {
                var unique = true;
                cleaned.forEach( function ( itm2 ) {
                    if ( _.isEqual( _.omit( itm, excludedProperty ), _.omit( itm2, excludedProperty ) ) ) {
                        unique = false;
                    }
                } );
                if ( unique ) {
                    cleaned.push( itm );
                }
            } );
            return cleaned;
        },

        getFacetServiceUrl: function ( selectedFacetsArray, selectedBrowseGridModifiersObject, callWithNoFacets, selectedPreviewParams ) {
            var url = this.isSearch ? '/api/navigation/search/facet' : '/api/navigation/categories/facet';
            var searchCriteria = this.getSearchCriteria();

            var serviceQueryString = this.getServiceQueryString( selectedFacetsArray, selectedBrowseGridModifiersObject, callWithNoFacets, selectedPreviewParams );

            var queryStringExtras = this.getQueryStringExperimentAndSwitches();

            /* B-40312 : Pass NLS Query String Parameter in New Facet API Call */
            var nlsQueryString = "";
            if ( String( Globals.getValue( 'props.nlsSearchExperimentEnabled' ) ) === "true" && ( window.location.href.indexOf( '/shop/search' ) > -1 || window.location.href.indexOf( '/shop/featured' ) > -1 ) ) {
                nlsQueryString = StringUtil.getURLParameter( "ce" );
                if ( nlsQueryString && nlsQueryString !== null ) {
                    nlsQueryString = "&ce=" + nlsQueryString;
                }
            }
            var kwsRestfulUrlPattern = "";
            if ( Globals.getValue( 'props.seoImprovements2016Enabled' ) ) {
                kwsRestfulUrlPattern = "&kwsNewUrlPattern=" + ( window.location.href.indexOf( '/shop/search' ) > -1 ? false : true );
            }
            return url + '?' + searchCriteria + ( serviceQueryString.substr( 0, 1 ) === '&' ? '' : '&' ) + serviceQueryString + queryStringExtras + ( nlsQueryString && nlsQueryString !== "" ? nlsQueryString : "" ) + kwsRestfulUrlPattern;
        },
        getSearchCriteria: function () {
            var retval = '';
            if ( this.isSearch ) {
                retval = 'keyword=' + encodeURIComponent( !_.isEmpty( $( '#keywordSearch' ).val() ) ? $( '#keywordSearch' ).val() : $( '#keywordSearchText' ).val() );
            } else {
                //TODO: Clean up below parameters...not certain what "id" is supposed to be filled with
                var obj = this.getCategoryInfoObject();
                retval = 'categoryId=' + obj.categoryId;
                //NOTE: We believe these are not needed...remove code when verified + '&id=' + obj.parentCategoryId + '&parentCategoryId=' + obj.parentCategoryId;
            }
            return retval;
        },
        getServiceQueryString: function ( selectedFacetsArray, selectedBrowseGridModifiersObject, callWithNoFacets, selectedPreviewParams ) {
            var itemDelimiter = ';;';
            var names = [];
            var facets = [];
            var str = "";
            var tmp = {};

            if ( Globals.getValue( 'props.cnfNavPromoCodeFacetsEnabled' ) && $( "ul#facets li#PROMOS_SPECIAL_OFFERS" ).length > 0 ) {
                selectedFacetsArray = _.filter( selectedFacetsArray, function ( item ) {
                    return ( item.facetTypeName !== "SPECIAL_OFFERS" && item.facetTypeName !== "PROMO_CODES" );
                } );
            }

            //NOTE: The below combines the "server-selected" facets with the UI selected facets.  Map does not work in IE <= 9
            //and so we will skip the combine at the expense of those rare combinations
            if ( [].map ) {
                selectedFacetsArray.map( function ( obj ) {
                    tmp[ obj.facetTypeName ] = [];

                    obj.selectedFacetItems.map( function ( map ) {
                        tmp[ obj.facetTypeName ].push( encodeURIComponent( map.val ) );
                    } );
                } );
            } else {
                tmp = selectedFacetsArray;
            }
            Logger.log( tmp );
            for ( var facet in tmp ) {
                facets.push( "facetName=" + facet );
                str += facet + "=" + tmp[ facet ].join( ";;" ) + "&";
            }
            str = str + facets.join( "&" );

            var isPreviewParamsAvailable = selectedPreviewParams && selectedPreviewParams.length ? true : false;

            //STEP: If this was called with "callWithNoFacets=true" then set the flag to not return facets. Not applicable for preview mode.
            if ( callWithNoFacets === true && isPreviewParamsAvailable === false ) {
                str += "&facet=false";
            }

            //STEP: Now add the selectedBrowseGridModifiers
            if ( typeof selectedBrowseGridModifiersObject !== 'undefined' ) {
                str += ( selectedBrowseGridModifiersObject.sortBy !== undefined && selectedBrowseGridModifiersObject.sortBy !== defaultSortBy ? "&sortBy=" + selectedBrowseGridModifiersObject.sortBy : "" ) + ( selectedBrowseGridModifiersObject.productsPerPage !== undefined && selectedBrowseGridModifiersObject.productsPerPage !== defaultProductsPerPage ? "&productsPerPage=" + selectedBrowseGridModifiersObject.productsPerPage : "" ) + ( selectedBrowseGridModifiersObject.pageIndex !== undefined && selectedBrowseGridModifiersObject.pageIndex !== defaultPageIndex ? "&pageIndex=" + selectedBrowseGridModifiersObject.pageIndex : "" );
            }

            //STEP: Now add the selectedPreviewParams if its available.
            if ( isPreviewParamsAvailable === true ) {
                str += "&" + selectedPreviewParams.join( "&" );
            }

            return str;
        },
        getQueryStringExperimentAndSwitches: function () {
            //DEVELOPERS NOTE: Put the random and non-essential extra QS parameters to the service in here...that way one place to implement, one place to clean
            var serviceUrl = "";

            // Append registry parameters to the AJAX url to return registry specific products "&registry=<registryType>"
            if ( this.isRegistry ) {
                serviceUrl = serviceUrl + "&registry=" + 'true'; //this._registryMode.value;
            }

            /*
TODO:

IMPORTANT: we need to also pass into the service call the shipping mode...here is the current code:
VERIFIED: 12/10/15 that this is not needed.  Keeping for after 15K release, delete afterwards
    if(shippingCountry && shippingCountry!="US"){
        if(lcacheIshipEnabled.value){
            urlArgs.push("shipingCountry="+shippingCountry);
        }else{
            urlArgs.push("intl=true");
        }

    }

IMPORTANT:  This is an experiment for RDPP...thus we need to pass in this value but I have no idea how it is captured...this is
the current code:
VERIFIED: 12/10/15 that this is not needed.  Keeping for after 15K release, delete afterwards

    //Append the 'rdppRuleId' to the facet meta URL
    if(this.rdppRuleId && this.rdppRuleId.value) {
        urlArgs.push("rdppRuleId=" + this.rdppRuleId.value);
    }

IMPORTANT: We need to deal with this...PREVIEW MODE

    //PREVIEWMODE: Add preview QS if in preview mode: determined by presence of object...making certain no issues here
    try {
        if(this.previewCtrl && this.previewCtrl.getPreviewParmArray) {
            urlArgs = urlArgs.concat(this.previewCtrl.getPreviewParmArray());
        }
    }
    catch(e) {
        Logger.log("Got error while getting the preview info: " + e);
    }

*/

            // For identifying whether keyword search is canvas flow or not.
            //if(this.canvasBannerFlow) {
            //    serviceUrl += "&canvasFlow=true";
            //}
            if ( $( '#canvasBannerFlow' ).length > 0 && $( '#canvasBannerFlow' ).val && $( '#canvasBannerFlow' ).val() === 'true' ) {
                serviceUrl += "&canvasFlow=true";
            }



            //STEP: Add the querystring parameter
            //NOTE: We are disabling this for now as we need to cache the service URL and this can make it uncacheable (too much variability)
            // if ( location.search ) {
            //     serviceUrl += "&querystring=" + escape( location.search );
            // }

            //Handle EFCKEY query param for ServerSide Experimentation Testing
            if ( location.search.indexOf( 'EFCKEY' ) > -1 ) {
                serviceUrl += "&EFCKEY=" + encodeURIComponent( StringUtil.getURLParameter( 'EFCKEY' ) );
            } else if ( Globals.getValue( 'props.cnfNavPromoCodeFacetsEnabled' ) && typeof Globals.getValue( "props.cnfNavPromoSegment" ) !== 'undefined' && Globals.getValue( "props.cnfNavPromoSegment" ) !== '0' ) {
                serviceUrl += '&EFCKEY=' + encodeURIComponent( '{"EXPERIMENT":[' + Globals.getValue( "props.cnfNavPromoSegment" ) + ']}' );
            }

            //BCOM Clean n Fast Navigation - add the products per page preference
            if ( Globals.getValue( 'props.bcomNavBrowsePerf' ) ) {
                serviceUrl += "&bcomNavPPP=" + Globals.getValue( 'props.bcomNavPPP' );
            }

            return serviceUrl;
        }
    };
} );
