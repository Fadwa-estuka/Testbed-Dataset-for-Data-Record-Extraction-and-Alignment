//#MODULE - BrowseGridApp
//> Author: Clodel Gosuico
//>
//> Create Date: October 9, 2014
//>
//##DESCRIPTION: This extends a Backbone View for the BrowseGridApp on Responsive experience.
define( [ "logger", "jquery", 'backbone', 'marionette', "globals", "pageApp", "segmentation", "appController", "mcomProductThumbnail/ProductThumbnailLoader", "pubsub", "commonjs/components/FacetBreadCrumb", "clientSideStorage", "stringUtil", "nlsExperimentationUtility", "underscore" ], function ( Logger, $, Backbone, Marionette, Globals, _PageApp, Segmentation, AppController, mcomProductThumbnailLoader, Pubsub, FacetBreadCrumb, ClientSideStorage, StringUtil, NlsExperimentationUtility, _ ) {
    var PageApp = _PageApp.getApp();
    var SortByView, ProductsPerPageView, PageIndexView;
    //STEP: Protect the code base if this feature is not available...
    //NOTE: Because this function is instantiated within the block below, it is conditional, but it needs to be returned with the module
    //...so I am making an "empty" function right here, so the defintion will always be there
    var getSelectedBrowseGridModifiers, setSelectedBrowseGridModifiers, getSelectedBrowseGridModifiersFromAddress,
        slpPhase2CoreEnabled = Globals.getValue( 'props.slpPhase2CoreEnabled' ),
        searchColorEnabled = Globals.getValue( 'props.searchColorEnabled' ),
        hookLogicProperty = {};
    if ( PageApp && PageApp.vent ) {
        //NOTE: Eventually, we want Backbone Views for each of the features: sortBy, ProductsPerPage, PageIndex
        //Right now, I am going to set up vars that will stand in for those views until we get there.
        SortByView = Backbone.Marionette.ItemView.extend( {
            'el': '#sortBy',
            'getSelected': function () {
                var $el = $( this.el );
                if ( $el.length > 0 && $el.val ) {
                    return $el.val();
                } else {
                    return "ORIGINAL";
                }
            }
        } );
        ProductsPerPageView = Backbone.Marionette.ItemView.extend( {
            'el': '#itemsPP',
            'getSelected': function () {
                var $el = $( this.el );
                if ( $el.length > 0 && $el.val ) {
                    return $el.val();
                } else {
                    return "60";
                }
            }
        } );
        PageIndexView = Backbone.Marionette.ItemView.extend( {
            'el': ".pagination .currentPage",
            'getSelected': function () {
                var $el = $( this.el ).first();
                if ( $el.length > 0 && $el.text().length > 0 && !isNaN( $el.text() ) ) {
                    return $el.text();
                } else {
                    return "1";
                }
            }
        } );
        PageApp.vent.on( "facet:updated", function ( meta, selectedFacets ) {
            //STEP: IMPORTANT: This is the heart of the product fetching.  If this function "heard" that facets have updated,
            //then it expects a list of productIds sent to it.  It will then pass into facetController (legacy) the data.
            if ( window.MACYS && window.MACYS.Faceted && window.MACYS.Faceted.facetController ) {
                //STEP: Set the inifiniteScroll option which will tell the renderer to not replace the grid
                window.MACYS.Pagination.paginationCtrl.setInfiniteScroll( ( ProductsPerPageView.prototype.getSelected().toUpperCase() === 'ALL' ) );
                window.MACYS.Faceted.facetController.getProductsBridgeToFuture( meta, selectedFacets );
            }
            //STEP: Update the Product Count
            FacetBreadCrumb.updateProductCount( meta.productCount );
            //STEP: Update the Partial Match Message
            FacetBreadCrumb.updatePartialMatch( meta );
            //STEP: Update the Display Message
            FacetBreadCrumb.updateDisplayMessage( meta );
            //STEP: Update NLS feedback api params
            if ( Globals.getValue( 'props.nlsSearchExperimentEnabled' ) === "true" && meta.reportingRecordsInfo ) {
                NlsExperimentationUtility.updateNLSFeedbackAPIParams( meta.reportingRecordsInfo );
                setTimeout( function () {
                    NlsExperimentationUtility.triggerInitialNLSFeedbackAPIFromSession( new Backbone.Model() );
                }, 500 );
            }
            //STEP: Publish through pubsub that facets have updated so legacy apps can listenTo it
            Pubsub.observe( "updateFacetItems" ).publish( selectedFacets );
            hookLogicProperty = {
                meta: meta,
                sortBy: SortByView.prototype.getSelected(),
                productsPerPage: ProductsPerPageView.prototype.getSelected(),
                pageIndex: PageIndexView.prototype.getSelected()
            };
            Pubsub.observe( "HookLogicProperty" ).publish( hookLogicProperty );
        } );
        PageApp.vent.on( "facetBreadCrumb:update", function ( selectedFacets ) {
            FacetBreadCrumb.updateBreadCrumbFacetItems( selectedFacets, function ( data ) {
                if ( !data.selected ) {
                    PageApp.channel.vent.trigger( "facet:deselect", data );
                }
            } );
        } );
        PageApp.vent.on( "facetsLoaded", function ( selectedFacets ) {
            if ( window.MACYS && window.MACYS.onload && window.MACYS.Faceted ) {
                window.MACYS.onload( window.MACYS.Faceted[ 'facet_init' ] );
            }
            return true;
        } );
        PageApp.vent.on( 'facet:clear', function () {
            //NOTE: The below is a legacy support of pagination...a lot of features rely on paginationController.pageIndex to be the correct value
            //and since we default back to pageIndex = 1 when clearing the facet or breadcrumb removal, we will let this module reset the value upon listening.
            window.MACYS.Pagination.paginationCtrl.pageIndex = 1;
            window.MACYS.Pagination.paginationCtrl.infiniteScrollPageIndexEnd = 1;
            window.MACYS.Pagination.paginationCtrl.callsMade = 0;
        } );
        PageApp.vent.on( 'facet:item:click', function ( facetValue, data ) {
            //NOTE: The below is a legacy support of pagination...a lot of features rely on paginationController.pageIndex to be the correct value
            //and since we default back to pageIndex = 1 when faceting, we will let this module reset the value upon listening.
            window.MACYS.Pagination.paginationCtrl.pageIndex = 1;
            window.MACYS.Pagination.paginationCtrl.infiniteScrollPageIndexEnd = 1;
            window.MACYS.Pagination.paginationCtrl.callsMade = 0;
            window.MACYS.Pagination.paginationCtrl.renderPagination();
            //NOTE: The below is a legacy thing: filling a DIV that other code depends on for tracking the selected color swatch
            Logger.log( 'set the current selected color swatch hidden element' );
            var colors = PageApp.request( "getSelectedFacetValuesByType", "COLOR_NORMAL" );
            // selectedColorValue hidden field should be created only for browser page. It will override searchColorOverride functionality in 
            // search page if we haven't suppress this filed
            if ( ( searchColorEnabled === 'true' && $( '#keywordSearch' ).length === 0 ) || searchColorEnabled === 'false' ) {
                var $selectedFacetColorDiv = $( '#selectedColorValue' ).length > 0 ? $( '#selectedColorValue' ) : $( '<div>' ).attr( {
                    'id': 'selectedColorValue',
                    'class': 'selectedColorValue hidden'
                } );
                $( '#facets' ).after( $( $selectedFacetColorDiv ).html( colors.join( ';;' ) ) );
            }
        } );
        PageApp.reqres.setHandler( "getSelectedBrowseGridModifiers", function () {
            return getSelectedBrowseGridModifiers();
        } );
        //NOTE: This is called by tobedeprecated/facetController to complete actions after the thumbs load...should be deprecated and marionette pubsub used instead once Facetcontroller is updated
        Pubsub.observe( 'browseGridRenderComplete' ).subscribe( function () {
            //Step: Publish to page to update Product Links with the selected size
            Pubsub.observe( 'updateLinksWithSizes' ).publish();
            //STEP: Require the ProductThumbnail Loader...
            require( [ 'mcomProductThumbnail/ProductThumbnailLoader' ], function ( mcomProductThumbnailLoader ) {
                //STEP: .. and then have it select the right swatch based on the selected facet colors
                if ( searchColorEnabled === 'true' && $( '#keywordSearch' ).length > 0 ) {
                    mcomProductThumbnailLoader.loadProductThumbnails();
                } else {
                    mcomProductThumbnailLoader.loadProductThumbnails( PageApp.request( "getSelectedFacetValuesByType", "COLOR_NORMAL" ) );
                }
                //STEP: Finally fire off a "hideLoader" just in case there is one showing right now
                PageApp.execute( 'hideLoader', 'FACET_PROCESS' );
            } );
        } );
        //BEGIN: C2Geo Add Selected Size to product URLs
        Pubsub.observe( 'updateLinksWithSizes' ).subscribe( function () {
            if ( Globals.getValue( "props.sizeFacetPassingEnabled" ) ) {
                var selectedSizesParameter = '&selectedSize=';
                var selectedSizesValue = PageApp.request( "getSelectedFacetValuesByType", "SIZE_NORMAL" ).join( "%7C" );
                $( 'a.productThumbnailLink' ).each( function ( index, element ) {
                    $( element ).attr( 'href', function ( i, value ) {
                        if ( !value ) {
                            return value;
                        }
                        if ( value.indexOf( selectedSizesParameter ) === -1 ) {
                            return value + selectedSizesParameter + selectedSizesValue;
                        }
                        var regex = new RegExp( '(' + selectedSizesParameter + ")[a-z]+", 'ig' );
                        return value.replace( regex, '$1' + selectedSizesValue );
                    } );
                } );
            }
        } );
        //END: C2GEO
        //NOTE: This is called by tobedeprecated/facetController to make a call for sortby, ppp, and pageIndex...should be deprecated and marionette pubsub used instead once Facetcontroller is updated
        Pubsub.observe( 'makeFacetCallFromGrid' ).subscribe( function ( data ) {
            PageApp.channel.vent.trigger( 'sortByOrPagination:select', data );
        } );
        //NOTE: This is called by tobedeprecated/facetController when there are zero ProductIds in the response data...should be deprecated and marionette pubsub used instead once Facetcontroller is updated
        Pubsub.observe( 'zeroProductIdsForGrid' ).subscribe( function ( data ) {
            PageApp.execute( 'hideLoader', 'FACET_PROCESS' );
        } );
        getSelectedBrowseGridModifiers = function () {
            return {
                sortBy: SortByView.prototype.getSelected(),
                productsPerPage: ProductsPerPageView.prototype.getSelected(),
                pageIndex: PageIndexView.prototype.getSelected()
            };
        };
    }
    var baseUrlLegacyAssetsStylesMin = Globals.getValue( 'baseUrlLegacyAssetsStylesMin' ),
        render = {},
        refactoredBrowsePageEnabled = Globals.getValue( 'props.refactoredBrowsePageEnabled' ),
        largeThumb = '224',
        smallThumb = '170',
        smallThumbWidth = 'wid=' + smallThumb,
        largeThumbWidth = 'wid=' + largeThumb,
        startingViewportWidth,
        isStartingViewportTablet,
        isEndingViewportTablet,
        breakpoint = Globals.getValue( 'props.tabletUIPixelWidthBreakpoint' );
    //Experiment segments
    var TABLETPAGINATION15C = parseInt( 297, 10 ),
        BACKTOTOP15C = parseInt( 338, 10 ),
        ALL15C = parseInt( 341, 10 ),
        ALLFEATURES15D = parseInt( 375, 10 ),
        TABLETQUICKVIEW15F = [ parseInt( 430, 10 ), parseInt( 431, 10 ) ],
        TABLETQVLAUNCHERA15F = parseInt( 427, 10 ),
        TABLETQVLAUNCHERB15F = parseInt( 428, 10 ),
        TABLETQVLAUNCHERC15F = parseInt( 429, 10 );
    render.TabletPagination15C = function () {
        $( 'head' ).append( '<link href="' + baseUrlLegacyAssetsStylesMin + '/mcom/components/browseGrid/browseGrid_tablet_297.css" type="text/css" rel="stylesheet">' );
    };
    render.TabletQuickView15F = function () {
        var quickviewTreatmentPersistenceEnabled = Globals.getValue( 'props.quickviewTreatmentPersistenceEnabled' );
        if ( ( quickviewTreatmentPersistenceEnabled === "true" ) && $( "#thumbnails" ).length > 0 && $( document ).width() <= breakpoint && ( $( 'body' ).hasClass( "searchResults" ) || $( 'body' ).hasClass( "browse" ) || $( 'body' ).hasClass( "subSplash" ) ) ) {
            $( 'head' ).append( '<link href="' + baseUrlLegacyAssetsStylesMin + '/mcom/components/browseGrid/browseGrid_tablet_429.css" type="text/css" rel="stylesheet">' );
            $( 'head' ).append( '<link href="' + baseUrlLegacyAssetsStylesMin + '/mcom/components/quickView/qvTablet.css" type="text/css" rel="stylesheet">' );
        }
    };

    function isExperimentEnabled() {
        return Globals.getValue( "props.nlsSearchExperimentEnabled" ) === "true" && ( window.location.href.indexOf( '/shop/search' ) > -1 || window.location.href.indexOf( '/shop/featured' ) > -1 ) && StringUtil.getURLParameter( 'ce' );
    }

    function init() {
        $( "body" ).on( 'click', "a[name^='p'].productThumbnailLink", function ( e ) {
            var loc = $( e.currentTarget ).closest( 'li' ).data( 'pageUrl' );
            if ( loc && loc.length && loc.length > 0 && history.pushState ) {
                history.pushState( {}, "", loc );
            }
            /* =============================================== NLS Feedback API =========================================== */
            if ( isExperimentEnabled() ) {
                PageApp.model = new Backbone.Model();
                var productName = $( e.currentTarget ).closest( 'li' ).find( '.shortDescription' ).find( 'a' ).text().trim();
                var productUrl = $( e.currentTarget ).attr( 'href' );
                require( [ 'nlsExperimentationUtility' ], function ( NlsExperimentationUtility ) {
                    NlsExperimentationUtility.setNLSSessionAndTriggerFeedbackAPI( PageApp.model, e.currentTarget.name.replace( 'p', '' ), productName, productUrl );
                } );
            }
            /* =========================================================================================================== */
        } );
        var quickviewTreatmentPersistenceEnabled = Globals.getValue( 'props.quickviewTreatmentPersistenceEnabled' );
        // tablet bottom pagination
        render.TabletPagination15C();
        //Quickview button on product browse thumbnails for Tablet 15F - css
        //if visitor is part of the panel experiment, detect which launcher button experiment they are in
        if ( quickviewTreatmentPersistenceEnabled === "true" ) {
            browseGridImageWindowResize();
            render.TabletQuickView15F();
        }
        $( document ).ready( function () {
            isStartingViewportTablet = AppController.isTabletBreakpoint();
            isEndingViewportTablet = AppController.isTabletBreakpoint();
            mcomProductThumbnailLoader.loadProductThumbnails();
            browseGridImageWindowResize();
            if ( slpPhase2CoreEnabled === 'true' ) {
                Pubsub.observe( 'copyBlockToggle' ).publish();
            }
            if ( isExperimentEnabled() ) {
                require( [ 'nlsExperimentationUtility' ], function ( NlsExperimentationUtility ) {
                    setTimeout( function () {
                        NlsExperimentationUtility.triggerInitialNLSFeedbackAPIFromSession( new Backbone.Model() );
                    }, 500 );
                } );
            }
            //STEP: The server-side rendered UI might not have rendered the modifiers properly...
            //...client-side will step in an ensure proper setting
            if ( window.MACYS.Pagination.paginationCtrl && _.isFunction( window.MACYS.Pagination.paginationCtrl.renderPagination ) ) {
                window.MACYS.Pagination.paginationCtrl.renderPagination();
            }
        } );
    }

    function browseGridImagesReload() {
        mcomProductThumbnailLoader.loadProductThumbnails();
    }

    function browseGridImageWindowResize() {
        $( window ).resize( function () {
            var originalWindowSize = 0,
                currentWidth = 0;
            var setSize = function () {
                originalWindowSize = $( window ).width();
            };
            // Check every 0.5 seconds whether user has stopped resizing, else don't initiate reload yet
            // Avoids continuous reloading during resize
            var checkSize = function () {
                currentWidth = $( window ).width();
                if ( currentWidth === originalWindowSize ) {
                    isEndingViewportTablet = AppController.isTabletBreakpoint();
                    if ( isStartingViewportTablet !== isEndingViewportTablet ) {
                        var quickviewTreatmentPersistenceEnabled = Globals.getValue( 'props.quickviewTreatmentPersistenceEnabled' );
                        if ( quickviewTreatmentPersistenceEnabled === "true" ) {
                            $( "#quickView_v2.qvMember .container-close" ).click();
                        }
                        render.TabletQuickView15F();
                    }
                }
                setTimeout( function () {
                    currentWidth = $( window ).width();
                    if ( currentWidth === originalWindowSize ) {
                        isEndingViewportTablet = AppController.isTabletBreakpoint();
                        if ( isStartingViewportTablet !== isEndingViewportTablet ) {
                            browseGridImagesReload();
                            isStartingViewportTablet = AppController.isTabletBreakpoint();
                        }
                    }
                }, 500 );
            };
            setSize();
            checkSize();
        } );
    }
    Pubsub.observe( 'copyBlockToggle' ).subscribe( function () {
        var linktext = '...more';
        $( 'body' ).on( 'click', '.toggle', function () {
            var $clicked = $( this ),
                $copyblock = $clicked.closest( '.copy-block' );
            $copyblock.toggleClass( 'more less' );
            $clicked.parent().toggleClass( 'expand collapse' );
            linktext = $clicked.parent().hasClass( 'collapse' ) ? 'less' : '...more';
            $clicked.text( linktext );
        } );
    } );
    return {
        init: init,
        render: render
    };
} );
