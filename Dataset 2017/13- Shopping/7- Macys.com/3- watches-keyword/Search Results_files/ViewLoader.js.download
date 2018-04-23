//
// ATTENTION! Before making changes on this file, make sure you have read the instructions at MacysUI/macysJS/src/mcom/features/leanProduct/README_BEFORE_TOUCHING_THE_RADICAL_PDP.md
//
define( [ 'lazyLoad/LazyView' ], function ( LazyView ) {

    //accepts function or boolean
    function runQuery( query ) {
        if ( typeof query === 'function' ) {
            return query();
        }
        return query;
    }

    function newLazyView( modulePath, loadViewCallback ) {
        return new LazyView( {
            modulePath: modulePath,
            loadViewCallback: loadViewCallback
        } );
    }

    function conditionalLoad( query, loadViewCallback ) {
        var result = ( typeof query === 'function' ) ? runQuery( query ) : query;

        if ( result ) {
            return loadViewCallback();
        }
        return null;
    }

    function conditionalLazyLoad( query, modulePath, loadViewCallback ) {
        if ( runQuery( query ) ) {
            return lazyLoadView( modulePath, loadViewCallback );
        }
        return null;
    }

    function lazyLoadOnScroll( containerXpath, modulePath, loadViewCallback ) {
        var lazyView = newLazyView( modulePath, loadViewCallback );

        lazyView.loadWhenVisible( containerXpath );

        return lazyView;
    }

    function conditionalLazyLoadOnScroll( query, containerXpath, modulePath, loadViewCallback ) {
        if ( runQuery( query ) ) {
            return lazyLoadOnScroll( containerXpath, modulePath, loadViewCallback );
        }
        return null;
    }

    function lazyLoadView( modulePath, loadViewCallback ) {
        var lazyView = newLazyView( modulePath, loadViewCallback );
        lazyView.loadModule();
        return lazyView;
    }

    return {
        conditionalLoad: conditionalLoad,
        conditionalLazyLoad: conditionalLazyLoad,
        lazyLoadOnScroll: lazyLoadOnScroll,
        conditionalLazyLoadOnScroll: conditionalLazyLoadOnScroll
    };
} );
