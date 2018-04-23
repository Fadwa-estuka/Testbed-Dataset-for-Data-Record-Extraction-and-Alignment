define( [
    'iShip',
    'handlebars',
    'jquery',
    'globals',
    'underscore',
    'registryUtil',
    'prosTrackingHelper',
    'thumbnailCarousel/hbsHelpers/ThumbnailHelper'
], function ( iShip, Handlebars, $, Globals, _, RegistryUtil, ProsTrackingHelper, CommonThumbnailHelper ) {

    var self = this,
        ishipInit = function () {
            if ( window.MACYS && window.MACYS.IntlShipping ) {
                iShip.init(
                    window.MACYS.IntlShipping.countryMap,
                    window.MACYS.IntlShipping.currencyMap
                );
            }
        },
        formatPrice = CommonThumbnailHelper.formatPrice,
        isTabletDevice = CommonThumbnailHelper.isTabletDevice,
        outputPrice = CommonThumbnailHelper.outputPrice;

    ishipInit();
    return {
        ishipInit: ishipInit,
        formatPrice: formatPrice,
        isTabletDevice: isTabletDevice,
        outputPrice: outputPrice
    };

} );
