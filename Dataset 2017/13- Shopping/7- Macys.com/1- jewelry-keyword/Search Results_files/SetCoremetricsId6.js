define( [ 'globals', 'clientSideStorage' ], function ( Globals, clientSideStorage ) {

    if ( clientSideStorage.getSession( 'cmCoreId6' ) === null ) {
        var script = document.createElement( 'script' );
        script.setAttribute( 'type', 'text/javascript' );
        var url = window.document.location.hostname;
        var production = Globals.getValue( 'props.production' );

        if ( !production ) {
            script.setAttribute( 'src', '//testdata.coremetrics.com/cookie-id.js?fn=MACYS.CMCOREI6.setCoremetricsCoreId6InGlobals' );
        } else {
            if ( url.indexOf( 'macys' ) > -1 ) {
                script.setAttribute( 'src', '//www3.macys.com/cookie-id.js?fn=MACYS.CMCOREI6.setCoremetricsCoreId6InGlobals' );
            }
        }

        var MACYS = window.MACYS;
        if ( MACYS.namespace ) {
            var coreSpace = MACYS.namespace( "MACYS.CMCOREI6" );

            coreSpace.setCoremetricsCoreId6InGlobals = function ( value ) {
                clientSideStorage.setSession( 'cmCoreId6', value );
            };
        }

        if ( script.src !== "" ) {
            document.body.appendChild( script );
        }
    }
} );
