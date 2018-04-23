define( [
    'underscore',
    'mcomThumbnailCarousel/ProsContext',
    'thumbCarousel/BagItemHelper',
    'thumbCarouselHelpers',
    'thumbnailCarousel/pros/ProsEventHandler',
    'globals'
], function ( _, prosContext, bagItemHelper, thumbHelpers, ProsEventHandler, Globals ) {

    var phone = function () {
        var deviceType = Globals.getValue( 'DeviceType' );
        return deviceType && deviceType.toLowerCase() === 'phone';
    };

    return function () {

        return {
            recommendationsOpts: _.defaults( {
                requester: phone() ? 'MCOM-MMEW' : prosContext.recommendationsOpts.requester,
                maxRecommendations: 15
            }, prosContext.recommendationsOpts ),
            bagItemHelper: bagItemHelper,
            maxRecommendations: 15,
            thumbnailHelper: thumbHelpers,
            context: prosContext,
            customHandlers: new ProsEventHandler(),
            enhancedProsPanel: true,
            feed: {
                sender: prosContext.recommendationsOpts.requester,
                cts: prosContext.recommendationsOpts.cts
            }
        };
    };
} );
