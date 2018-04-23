define( [
    'mcomjs/components/thumbCarousel/richRelevance/RRSearchPage',
    'jquery',
    'underscore',
    'globals',
    'mcomThumbnailCarousel/controller/zoneConfig/CommonConfig'
], function ( RRSearchPage, $, _, Globals, commonConfig ) {

    var initialize = function ( model ) {


        var rrSearchPage,
            options = {},
            items = model.returnedProductIds;

        options.searchTerms = model.searchTerms;
        options.products = items.length > 0 ? _.map( items, function ( obj ) {
            return {
                productId: obj
            };
        } ) : [];

        rrSearchPage = new RRSearchPage( options );
        rrSearchPage.callRichRelevance();

    };

    var feedProsRichRelevance = function ( model ) {
        var commonConf = commonConfig();
        RRSearchPage.prototype.feedProsRichRelevance( {
            sender: commonConf.recommendationsOpts.requester,
            searchTerm: model.searchTerms,
            productId: model.returnedProductIds ? model.returnedProductIds.join( "|" ) : "",
            responseType: "search_page",
            cts: commonConf.recommendationsOpts.cts
        } );
    };

    return function init( model, globalWindow, globalDocument ) {

        globalWindow = globalWindow || window;
        globalDocument = globalDocument || document;

        if ( Globals.getValue( "props.prosRREventsEnabled" ) === "true" ) {
            feedProsRichRelevance( model );
        } else {
            if ( globalWindow.R3_COMMON ) {
                initialize( model );
            } else {
                $( globalDocument ).on( 'R3_API_READY', function () {
                    initialize( model );
                } );
            }
        }
    };
} );
