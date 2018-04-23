define( [ 'logger', 'jquery', 'backbone', 'stringUtil', 'redirectUtil', 'globals', 'clientSideStorage' ], function ( Logger, $, Backbone, StringUtil, RedirectUtil, Globals, ClientSideStorage ) {
    return Backbone.Router.extend( {
        start: function () {
            var facet = StringUtil.getURLParameter( 'debug' );
        },
        routes: {
            "*ALL": "handleRoute"
        },
        handleRoute: function ( obj ) {},
        navigateTo: function ( metaObj ) {
            var url = metaObj.baseUrl + metaObj.selectedFacetUrl + ( metaObj.querystring.length ? "?" + metaObj.querystring : '' ),
                index,
                paramKey,
                paramValue;

            Logger.log( 'Facets Router - Nav to: ' + url );

            //appending query params to url
            var queryParams = [ "ce", "debug", "EFCKEY" ];
            for ( index = 0; index < queryParams.length; index++ ) {
                paramKey = queryParams[ index ];
                paramValue = StringUtil.getURLParameter( paramKey );
                if ( paramValue && url.indexOf( paramKey + '=' ) < 0 ) {
                    url += ( url.indexOf( '?' ) > -1 ? '&' : '?' ) + paramKey + '=' + encodeURIComponent( paramValue );
                }
            }

            //STEP: LEGACY: The following Cookie set is a legacy feature and will hopefully be deprecated in the future
            require( [ 'cookie' ], function ( Cookie ) {
                Cookie.set( 'FORWARDPAGE_KEY', url );
            } );

            if ( !history.pushState ) {
                RedirectUtil.toLocation( url );
            } else if ( Globals.getValue( 'props.seoImprovements2016Enabled' ) && ( ClientSideStorage.getSession( 'onsiteSearch' ) === 'true' ) ) {
                this.historyPushState( {
                    "onsiteSearch": true
                }, document.title, url );
            } else {
                this.navigate( url );
            }
        },

        historyPushState: function ( datObject, title, url ) {
            window.history.pushState( datObject, title, url );
        }

    } );
} );
