define( [ 'underscore' ], function ( _ ) {
    var currentPageApplication = {
        options: {
            pagetype: 'undefined'
        },
        getOptions: function () {
            return currentPageApplication.options;
        },
        updateOptions: function ( options ) {
            currentPageApplication.options = _.extend( currentPageApplication.options, options );
        },
        constants: {
            BROWSE: "browse",
            SUBSPLASH: "subsplash",
            SPLASH: "splash",
            SEARCH: "search"
        },
        memory: {}
    };

    //static
    function setCurrent( app ) {
        currentPageApplication = _.defaults( app, currentPageApplication );

    }

    function getApp() {
        return currentPageApplication;
    }


    //instance
    return {
        setCurrent: setCurrent,
        getApp: getApp
    };
} );
