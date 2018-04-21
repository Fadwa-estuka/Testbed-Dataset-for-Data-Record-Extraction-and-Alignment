define( [ 'logger', 'commonjs/components/TrackingPixel', 'cookie', 'globals' ], function ( logger, pixel, cookie, Globals ) {
    function onAjaxErrorYui( result, obj, args ) {

        var connObj = args.handleTransactionResponse[ "arguments" ];
        var event = {},
            xhr = {
                'status': obj[ 0 ].status,
                'statusText': obj[ 0 ].statusText,
                'result': result,
                'readyState': connObj[ 0 ].conn.readyState
            },
            settings = {
                'url': connObj[ 0 ].conn.responseURL
            },
            thrownError = {};

        //TODO: Map the input parameters appropriately the above variables so they can be passed into the base function

        onAjaxError( event, xhr, settings, thrownError );
    }


    function onAjaxErrorJquery( event, xhr, settings, thrownError ) {

        onAjaxError( event, xhr, settings, thrownError );
    }

    function onAjaxError( event, xhr, settings, thrownError ) {
        var querystring,
            options,
            query;

        /*
         * If MCOM > cookie - macys_online_uid
         * If BCOM > cookie - bloomingdales_online_uid
         * */
        var onlineUidKey, onlineUidValue;

        try {
            if ( Globals ) {
                var domain = Globals.getValue( 'props.cookieDomain' );
                if ( domain && domain.indexOf( 'macys' ) > -1 ) {
                    onlineUidKey = 'macys_online_uid';
                } else if ( domain && domain.indexOf( 'bloomingdales' ) > -1 ) {
                    onlineUidKey = 'bloomingdales_online_uid';
                }
            }
        } catch ( ex ) {
            onlineUidValue = "";
            onlineUidKey = "";
        }

        onlineUidValue = cookie.get( onlineUidKey );
        //TODO: Fill in querystring with the input parameters
        querystring = {
            'status': xhr.status,
            'statusText': xhr.statusText,
            'XMLHttpreadyState': xhr.readyState,
            'locationUrl': encodeURIComponent( document.location.href ),
            'failedUrl': settings.url,
            'referrer': document.referrer,
            'OS': navigator.platform,
            'browserNameAndVersion': detectBrowser(),
            'onlineUid': onlineUidValue,
            'onlineUidKey': onlineUidKey,
            'source': ( this.navigation && this.navigation.pageName ) ? this.navigation.pageName : ""
        };

        //TODO: Fill in options with the correct config
        options = {
            'pathToPixel': '/web20/assets/img/oopsTracker/oopsTracker.gif',
            'pixelHost': Globals.getValue( 'props.assetsHost' ),
            'append': false
        };


        query = queryBuilder( querystring );

        //STEP: With the querystring now filled, next step is to call the track() method.
        pixel.track( query, options );
    }

    function onThrownError( errObj ) {
        var querystring, options;

        //TODO: Fill in querystring with the parsed errObj parameters


        //TODO: Fill in options with the correct config
        options = {
            'pathToPixel': '',
            'pixelHost': '',
            'append': false
        };

        //STEP: With the querystring now filled, next step is to call the track() method.
        pixel.track( querystring, options );
    }

    function detectBrowser() {
        var N = navigator.appName,
            UA = navigator.userAgent,
            temp,
            browserVersion = UA.match( /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i );

        if ( browserVersion && ( temp = UA.match( /version\/([\.\d]+)/i ) ) != null ) {
            browserVersion[ 2 ] = temp[ 1 ];
        }

        browserVersion = browserVersion ? [ browserVersion[ 1 ], browserVersion[ 2 ] ] : [ N, navigator.appVersion, '-?' ];

        return browserVersion;
    }

    function queryBuilder( querystring ) {
        var formattedQuery = "";

        if ( querystring !== null ) {
            formattedQuery = "status=" + querystring.status + "&statusText=" + querystring.statusText + "&XMLHttpreadyState=" + querystring.XMLHttpreadyState + "&OS=" + querystring.OS + "&browserNameAndVersion=" + querystring.browserNameAndVersion + "&" + querystring.onlineUidKey + "=" + querystring.onlineUid + "&source=" + querystring.source + "&locationUrl=" + querystring.locationUrl + "&failedUrl=" + querystring.failedUrl + "&referrer=" + querystring.referrer;
        }
        return formattedQuery;
    }

    return {
        onAjaxErrorJquery: onAjaxErrorJquery,
        onAjaxErrorYui: onAjaxErrorYui,
        onThrownError: onThrownError,
        detectBrowser: detectBrowser,
        queryBuilder: queryBuilder,
        onAjaxError: onAjaxError

    };

} );
