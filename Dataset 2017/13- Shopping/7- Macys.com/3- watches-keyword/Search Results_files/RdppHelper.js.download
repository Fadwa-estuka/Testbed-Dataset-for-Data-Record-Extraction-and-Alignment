define( [ 'jquery', 'logger', 'globals', 'pageApp', 'pubsub' ], function ( $, Logger, Globals, _PageApp, PubSub ) {
    var self = {},
        PageApp = _PageApp.getApp(),
        boostTypeMap = {
            'BA': 'BOOST ATTRIBUTE',
            'AS': 'ADD SAVED SET',
            'BS': 'BOOST SAVED SET',
            'RS': 'REPLACE SAVED SET'
        };

    /**
     * To set the application instance, if its not already available during the initialization.
     */
    self.setPageApp = function ( pageApp ) {
        PageApp = pageApp;
    };

    /**
     * To get the page RDPP Rule Id.
     */
    self.getPageRuleId = function () {
        return ( PageApp.getOption && PageApp.getOption( 'pageRuleId' ) ) || '';
    };

    /**
     * To get the page RDPP Boost Type.
     */
    self.getPageBoostType = function () {
        return ( PageApp.getOption && PageApp.getOption( 'pageBoostType' ) ) || '';
    };

    /**
     * To get the RDPP Acronym Tag.
     */
    self.getRdppAcronymTag = function ( rdppTag ) {
        return self.getRdppTag( ( rdppTag ) ? rdppTag : '', true );
    };

    /**
     * To get the RDPP Tag or Acronym Tag.
     */
    self.getRdppTag = function ( rdppTag, acronym ) {
        var value = ( rdppTag ) ? rdppTag : self.getPageRuleId();

        // If rdppTag value not passed by the caller then take the value from Page application option.
        if ( !rdppTag && self.getPageBoostType() ) {
            value = ( value ) ? value.concat( '|', self.getPageBoostType() ) : self.getPageBoostType();
        }

        $.each( boostTypeMap, function ( key, val ) {
            if ( acronym ) {
                value = value.replace( val, key );
            } else {
                value = value.replace( key, val );
            }
        } );
        return value;
    };

    return self;
} );
