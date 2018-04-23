define( [ "jquery", "underscore", "globals", "cookie", "pubsub", "mcomjs/components/HookLogic", "siteMoneyTemplates/hookLogicPlaceHolder", "siteMoneyJS/ClickTracking", "siteMoneyJS/SortAndFilterProperty" ], function ( $, _, Globals, Cookie, Pubsub, hookLogic, hookLogicPlaceHolderTemplate, clickTracking, SortAndFilterProperty ) {

    var experienceData = {
        "selector": "hl-1",
        "placeHolder": "#search_landing_pageRegion",
        "position": "above_grid"
    },
        globalSmSearch,
        filterSortProps = {};

    Pubsub.observe( "HookLogicProperty" ).subscribe( function ( data ) {
        filterSortProps = SortAndFilterProperty.format( data );
        start();
    } );


    //### Private Method  injectAdsFromHL( experienceData );
    // This method will make necessary calls to HLLLibrary with required values to get ads from the,
    //
    //> parameters
    //>
    //+ *experienceData* : *Object* : Data related to experience that we need to display
    //
    //> return
    //>
    //+ *none*
    //
    function injectAdsFromHL() {
        var hookLogicSettings = {},
            HLL;

        hookLogicSettings = globalSmSearch;

        if ( _.isEmpty( filterSortProps ) ) {
            hookLogicSettings.properties.organicSKUs = hookLogicSettings.properties.organicSKUs.join( "|" );
            hookLogicSettings.properties.view = "default";
        } else {
            hookLogicSettings.properties = filterSortProps.properties;
            hookLogicSettings.filters = filterSortProps.filters;
        }

        hookLogicSettings.properties.hlPageType = "S";
        hookLogicSettings.module = "ListingPage";
        hookLogicSettings.properties.platform = "web";

        hookLogic.start().done( function ( HookLogic ) {
            HLL = new HookLogic( hookLogicSettings, experienceData.selector );
            HLL.newRequest();
        } );
    }

    //### Private Method  showHLDiv();
    // This method will insert a div element with id hl-1 based for experiment cookies other than control.
    //
    //> parameters
    //>
    // 
    //
    //
    //> return
    //>
    //+ *none*
    //

    function showHLDiv() {
        $( experienceData.placeHolder ).before( hookLogicPlaceHolderTemplate( experienceData ) );
    }

    //### Public Method  start();
    // This function is called when keyword search page is loaded
    //
    //> parameters
    //>
    //+ none
    //
    //> return
    //>
    //+ nothing
    //
    function start() {
        var shippingCountry = Cookie.get( "shippingCountry" ) || 'US';
        globalSmSearch = Globals.getValue( "smSearch" );
        clickTracking.linkClickonAds( "search" );
        if ( globalSmSearch.registryMode === "" && ( shippingCountry === 'US' ) ) {
            if ( experienceData !== undefined ) {
                showHLDiv();
                injectAdsFromHL();
            }
        }
    }

    return {
        start: start
    };

} );
