define( [ 'logger', 'jquery', 'underscore', 'backbone', 'pageApp', 'marionette', 'commonjs/features/refineByFacet/Utility', 'commonjs/features/refineByFacet/views/FacetNavView', 'facetAnalytics', 'commonjs/features/refineByFacet/Router', 'globals', 'segmentation' ], function ( Logger, $, _, Backbone, _PageApp, Marionette, Utility, FacetNavView, FacetAnalytics, Router, Globals, Segmentation ) {
    var iid,
        DELAY = 1000,
        facetCollectionView,
        _this = this,
        PageApp = _PageApp.getApp(),
        router = new Router(),
        pageLoad = false,
        pageInfo = PageApp.getOptions() || {};

    //SECTION - BEGIN - ROUTER - set up the router listener and then start the router
    router.on( 'route', function ( route, params ) {
        if ( pageLoad ) {
            PageApp.execute( "redirectToURL", location.href );
        } else {
            pageLoad = true;
        }
    } );

    //STEP: Begin the Facet Application Router
    router.start();
    //SECTION - END   - ROUTER - set up the router listener and then start the router

    //responsible for top clear all button only
    var facetNavView = new FacetNavView( {
        el: "#facet_nav"
    } );

    facetNavView.on( "facets:clearall", function ( view ) {
        facetCollectionView.clearAllFacets();
        facetNavView.toggleClearButton( 0 );
    } );

    function setup( facetCollectionViewAlias ) {
        //STEP: Allow a hidden element on the page to dictate the time delay interval...or go with default if not defined
        if ( $( '#facetPulseRateDelay' ).length > 0 && $( '#facetPulseRateDelay' ).val ) {
            DELAY = $( '#facetPulseRateDelay' ).val();
        }

        // To identify the page is DLP registry or not. This logic will be removed once the DLP registry fix happens.
        try {
            pageInfo.pageMode = Utility.isRegistry ? "registry" : "site";
        } catch ( ex ) {
            Logger.error( "Facet Sub App failed to define page info", ex );
        }

        require( [ facetCollectionViewAlias ], function ( FacetCollectionView ) {

            facetCollectionView = new FacetCollectionView( {
                el: "#facets"
            } );

            //BEGIN - This section is to have Facet Sub App define what the PageApp needs to listen to on its behalf
            PageApp.reqres.setHandler( "getSelectedFacetValuesByType", function ( type ) {
                return getSelectedFacetValuesByType( type );
            } );

            //BEGIN - This section is to return selected facets to navapp - category controller to update prod thumnail URL
            PageApp.reqres.setHandler( "getSelectedFacetsToLegacy", function () {
                return facetCollectionView.getAllSelectedFacets();
            } );

            PageApp.channel.vent.on( "facet:deselect", function ( data ) {
                facetCollectionView.deselectFacet( data );
                PageApp.channel.vent.trigger( 'facet:clear' );
                clearTimeout( iid );
                doRequest();

                //ANALYTICS:
                FacetAnalytics.trackFacetValueDeselect( data );
            } );

            PageApp.channel.vent.on( "facet:select", function ( data ) {
                //TODO --> make a function to selectFacets with data ...facetCollectionView.selectFacet( data );
                clearTimeout( iid );
                doRequest();
            } );

            PageApp.channel.vent.on( "sortByOrPagination:select", function ( data ) {
                //Triggered when sort-by or pagination is selected. Triggered by facetController
                var pageIndexOverride = data && data.pageIndex ? data.pageIndex : undefined;
                sendRequest( true, pageIndexOverride );
            } );
            //END --- This section is to have Facet Sub App define what the PageApp needs to listen to on its behalf


            //BEGIN - This section is to have Facet Sub App define wha the facetCollectionView needs to listen to
            facetCollectionView.on( 'childview:facet:deselect', function ( view, data ) {
                PageApp.channel.vent.trigger( "facet:deselect", data );
            } );

            facetCollectionView.on( 'childview:facet:turnoff', function ( view, data ) {
                facetCollectionView.deselectFacet( data );
                //ANALYTICS:
                FacetAnalytics.trackFacetValueDeselect( data );
            } );

            facetCollectionView.on( "childview:facet:item:click", function ( view, facetValue, data ) {
                clearTimeout( iid );
                PageApp.channel.vent.trigger( "facet:item:click", facetValue, data );
                doRequest();

                //ANALYTICS:
                FacetAnalytics.trackFacetValueClick( facetCollectionView.getAllSelectedFacets(), $.extend( data, pageInfo ) );
            } );

            facetCollectionView.on( "childview:facet:item:apply", function ( view, facetValue, data ) {
                sendRequest();
                FacetAnalytics.trackFacetApply( data );
            } );

            facetCollectionView.on( "facet:clearAll", function ( data ) {
                //Analytics tracking for bcom only and NOT mcom !!!
                FacetAnalytics.trackFacetClearAll( data );
            } );

            facetCollectionView.on( "childview:facet:clear", function ( view, data ) {
                PageApp.channel.vent.trigger( 'facet:clear' );
                facetCollectionView.deselectFacet( data );
                clearTimeout( iid );
                doRequest();
            } );

            facetCollectionView.on( "childview:update:breadcrumbs", function () {
                // This will run only on pageLoad or deeplink, or browser back and if url contains BOPS facet.
                // Becaue bops facet is built completely in JS, server will not send store-name to display in breadcrumb on pageload
                PageApp.channel.vent.trigger( "facetBreadCrumb:update", facetCollectionView.getAllSelectedFacetValues() );
            } );

            facetCollectionView.on( "facetCollection:redirectURL", function () {
                var meta = facetCollectionView.collection.getMetaData();
                if ( meta.redirectURL ) {
                    Logger.log( "facetCollection:redirectURL in subapp: ", meta.redirectURL );

                    if ( pageInfo.previewMode ) {
                        PageApp.channel.vent.trigger( 'facet:update:redirectURL', meta.redirectURL, meta );
                    } else {
                        PageApp.execute( "redirectToURL", meta.redirectURL );
                    }
                }
            } );

            facetCollectionView.on( "facetCollection:error", function ( view, data ) {
                Logger.log( "facetCollection:error in subapp" );
                PageApp.execute( "showError" );
            } );

            facetCollectionView.on( "render", function ( view, data ) {
                //STEP: after facetTypes re-render; do a fresh count on what's selcted and udpate clear all button in FacetNavView
                var total = view.getTotalSelections();
                facetNavView.toggleClearButton( total );

                //STEP: grab the meta data and then trigger to the PageApp that facets have updated.
                var meta = facetCollectionView.collection.getMetaData();
                var selectedFacetValues = facetCollectionView.getAllSelectedFacetValues();
                PageApp.channel.vent.trigger( "facet:updated", meta, selectedFacetValues );

                //STEP: update url via router
                router.navigateTo( meta );

            } );

            facetCollectionView.on( 'childview:facetnav:toggleClearAllButton', function ( view ) {
                facetNavView.toggleClearButton( facetCollectionView.getTotalSelections() );
            } );

            //BEGIN - Analytics - set the events for the PageApp to be listening to
            facetCollectionView.on( "childview:facetType:toggle", function ( view, data ) {
                //AnalyticsCaller.elementTag( FacetAnalytics.getDataForFacetTypeToggle( data ) );

                //testing router
                FacetAnalytics.trackFacetTypeToggle( $.extend( data, pageInfo ) );
            } );
            //END - Analytics - set the events for the PageApp to be listening to
            //END --- This section is to have Facet Sub App define wha the facetCollectionView needs to listen to

            //STEP: Now the we have instantiated FacetCollectionView and set all its listeners, lets fire to PageApp that it is initialized
            PageApp.channel.vent.trigger( "facetBreadCrumb:update", facetCollectionView.getAllSelectedFacetValues() );
            facetNavView.toggleClearButton( facetCollectionView.getAllSelectedFacetValues().length );

            PageApp.channel.vent.trigger( "facetsLoaded", facetCollectionView.getAllSelectedFacetValues() );

            // To enable dynamic canvas rendering functionality for facet action.
            if ( Globals.getValue( 'props.dynamicCanvasEnabled' ) && _.contains( [ "dlp", "keyword", "browse", "subsplash" ], pageInfo.pageName ) ) {
                require( [ 'dynamicCanvas' ], function ( DymanicCanvas ) {
                    DymanicCanvas.init( PageApp, pageInfo );

                    PageApp.channel.vent.on( "facet:updated", function ( facetMeta ) {
                        DymanicCanvas.getFacetCanvasLayout( facetMeta.canvasIds );
                    } );
                } );
            }

            //STEP: Return to the caller SubApp info, which can be used, among other things, for Unit Testing
            return {
                pageInfo: pageInfo,
                'appInfo': {}
            };
        } );
    }

    function sendRequest( callWithNoFacets, pageIndexOverride ) {
        //STEP: Update the Breadcrumb
        PageApp.execute( 'showLoader', 'FACET_PROCESS' );
        PageApp.channel.vent.trigger( 'facetBreadCrumb:update', facetCollectionView.getAllSelectedFacetValues() );
        var selectedBrowseGridModifiers = PageApp.request( "getSelectedBrowseGridModifiers" );
        if ( typeof callWithNoFacets === 'undefined' ) {
            selectedBrowseGridModifiers.pageIndex = "1";
        }
        //STEP: Allow for a forced PageNumber.  This helps with infinite scroll.
        if ( 'undefined' !== typeof pageIndexOverride ) {
            selectedBrowseGridModifiers.pageIndex = pageIndexOverride;
        }

        //Note: If app runs in preview mode the 'getPreviewParams' will be set by previewWidget.js.
        var url = Utility.getFacetServiceUrl( facetCollectionView.getAllSelectedFacets(), selectedBrowseGridModifiers, callWithNoFacets, PageApp.request( "getPreviewParams" ) );
        facetCollectionView.collection.applyFacet( url );
    }

    function doRequest() {
        iid = setTimeout( function () {
            sendRequest();
        }, DELAY );
    }

    //Pass facetTypeName and get returned a list of selected values
    function getSelectedFacetValuesByType( facetTypeName ) {
        var selFacets = facetCollectionView.getSelectedFacetValuesByType( facetTypeName );

        return selFacets;
    }

    return {
        setup: setup,
        getSelectedFacetValuesByType: getSelectedFacetValuesByType
    };
} );
