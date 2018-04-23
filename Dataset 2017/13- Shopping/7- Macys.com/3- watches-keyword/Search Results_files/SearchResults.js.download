//#MODULE - Search
//> Author: Narendra Akula
//>
//> Create Date: July 12, 2016
//>
//##DESCRIPTION: this module used in NavApp\MacysNavApp\MacysNavAppWeb\src\main\webapp\web20\catalog\keywordsearch\responsive_body.jsp as part of search url pattern change: SEO Improvemnts 2016

define( [ 'jquery', 'stringUtil', 'globals', 'clientSideStorage' ], function ( $, StringUtil, Globals, ClientSideStorage ) {
    function init( searchMetaObj ) {
        var baseHostUrl = Globals.getValue( 'props.baseHost' ) || "";
        Globals.setValue( "searchResultUrl", baseHostUrl + searchMetaObj.baseUrl + searchMetaObj.selectedFacetUrl + ( searchMetaObj.queryString.length > 0 ? "?" + searchMetaObj.queryString : "" ) );
        if ( !searchMetaObj.isDLP || ( history.state && history.state.onsiteSearch ) ) {
            var url = searchMetaObj.kwsRestfulUrlPattern ? Globals.getValue( 'searchResultUrl' ) : null,
                data = {
                    "onsiteSearch": true
                };
            this.setOnsiteSearchInSession( true );
            this.navigateTo( data, document.title, url );
        } else {
            this.setOnsiteSearchInSession( false );
        }
    }

    function navigateTo( dataObj, title, url ) {
        window.history.replaceState( dataObj, title, url );
    }

    function setOnsiteSearchInSession( onsiteSearch ) {
        ClientSideStorage.setSession( 'onsiteSearch', onsiteSearch );
    }

    return {
        init: init,
        navigateTo: navigateTo,
        setOnsiteSearchInSession: setOnsiteSearchInSession
    };
} );
