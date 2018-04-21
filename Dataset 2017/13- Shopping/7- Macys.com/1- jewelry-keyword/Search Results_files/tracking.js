define( [ 'logger' ], function ( logger ) {
    'use strict';

    var macysCoreMetrics = null;

    if ( typeof window.MACYS !== 'undefined' ) {
        if ( window.MACYS && window.MACYS.coremetrics ) {
            macysCoreMetrics = window.MACYS.coremetrics;
        }
    }

    var createPageElementTag = function ( elementId, elementCategory, expAttr ) {
        logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
        if ( macysCoreMetrics !== null ) {
            if ( expAttr ) {
                macysCoreMetrics.cmCreatePageElementTag( elementId, elementCategory, expAttr.toString() );
            } else {
                macysCoreMetrics.cmCreatePageElementTag( elementId, elementCategory );
            }
        } else {
            logger.log( "createPageElementTag: not implemented, macys namespace not available" );
        }
    };

    var createConversionEventTag = function ( eventId, eventCategoryId, actionType ) {
        logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
        if ( macysCoreMetrics !== null ) {
            macysCoreMetrics.cmCreateConversionEventTag( eventId, actionType, eventCategoryId );
        } else {
            logger.log( "createConversionEventTag: not implemented, macys namespace not available" );
        }
    };

    /**
     * NOTE: This code was ported from MacysAssets /MacysWar/MacysAssets/macys.war/web20/assets/script/macys/base/cmFunctions.js
     * @param {Object} arg - An Object of the form {1: "value1", 13: "value13"}, where indexes start from 1.
     */
    function exploreAttributes( arg ) {

        var _list = [],
            self = {};

        /**
         * @param {Object} obj - An Object of the form {1: "value1", 13: "value13"}, where indexes start from 1.
         */
        self.add = function ( obj ) {
            var ele;
            for ( ele in obj ) {
                _list[ ele - 1 ] = obj[ ele ];
            }
            logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
            return this;
        };

        self.get = function ( key ) {
            logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
            return _list[ key - 1 ];
        };

        self.toString = function () {
            logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
            return ( _list.join( '-_-' ) );
        };
        if ( arg ) {
            self.add( arg );
        }
        logger.log( "This code is deprecated, use AnalyticsBase, PublishSubscribe, and mcomjs/components/analytics/Coremetrics.js" );
        return self;
    }


    return {
        createPageElementTag: createPageElementTag,
        createConversionEventTag: createConversionEventTag,
        exploreAttributes: exploreAttributes
    };




} );
