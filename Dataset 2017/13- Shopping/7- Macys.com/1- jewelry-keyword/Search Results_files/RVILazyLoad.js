//#MODULE - Recently view lazy load
//> Author: Shahabuddin Kadri
//> Create Date: June 14, 2016
//##DESCRIPTION: This module should be used to lazy load recently view.
//
define( [ 'lazyLoad/ViewLoader', 'pubsub', 'logger', 'jquery', 'cookie' ], function ( ViewLoader, pubsub, Logger, $, Cookie ) {
    var $window = $( window ),
        cookieName = "rvi",
        cookieVal = "MISCGCs";

    return {
        init: function () {
            var products = [],
                RviItems = [];

            products = Cookie.get( cookieName, cookieVal );

            if ( products ) {
                RviItems = products.split( "," );
            }

            Logger.info( "RVI items", RviItems.length );
            return ViewLoader.conditionalLazyLoadOnScroll( ( RviItems.length > 0 ), '#recentlyViewedContainerNew', 'commonjs/components/thumbCarousel/recentlyViewed/InitRecentlyViewed', function ( InitRecentlyViewed ) {
                Logger.info( "RVI got lazy loaded...." );
                return new InitRecentlyViewed( {} );
            } );
        }
    };
} );
