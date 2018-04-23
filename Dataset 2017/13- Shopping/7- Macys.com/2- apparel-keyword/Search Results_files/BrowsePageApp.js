define( [ 'logger', 'jquery', 'underscore', 'pageApp', 'backbone', 'marionette', 'loader', 'pubsub' ], function ( Logger, $, _, PageApp, Backbone, Marionette, Loader, PubSub ) {

    var App = new Backbone.Marionette.Application();
    PageApp.setCurrent( App );

    App.on( "start", function ( options ) {
        //Set Options
        App.updateOptions( options );
        // Array to find ongoing process that depends on this page application.
        App.memory[ 'ongoing-process' ] = [];

        if ( Backbone.history ) {
            require( [ 'commonjs/features/refineByFacet/SubApp', 'browseGridApp' ], function ( FacetSubApplication, BrowseGridApp ) {

                //header, footer, grid, etc....
                FacetSubApplication.setup( 'mcomjs/features/refineByFacet/views/FacetCollectionView' );

                //NOTE: if browser doesn't support "pushstate" then backbone needs to be configured differently
                if ( !history.pushState ) {
                    // initialize router/Backbone.history, but turn off route parsing
                    Backbone.history.start( {
                        silent: true,
                        hashChange: true
                    } );

                } else {
                    var bool = Backbone.history.start( {
                        pushState: true,
                        silent: false
                    } );
                }
            } );
        }

        // This event can be used by other part of the page to identify the facet application is stared.
        PubSub.observe( "BROWSE_PAGE_APP_STARTED" ).publish( options );
    } );

    App.commands.setHandler( "redirectToURL", function ( url ) {
        window.location = url;
    } );

    //BEGIN - Page Level Feature - begin/end freezing the scroll page wide
    App.commands.setHandler( 'freezeScrollOn', function () {
        if ( App.memory[ 'previous-overflow' ] === undefined ) {
            //STEP: Grab the current scroll position in cross browser way
            var scrollPosition = [
                window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            ];
            var html = $( 'html' ); // it would make more sense to apply this to body, but IE7 won't have that

            //STEP: Remember the current scroll position for putting back afterwards
            App.memory[ 'scroll-position' ] = scrollPosition;
            App.memory[ 'previous-overflow' ] = html.css( 'overflow' );

            //STEP: Now apply the CSS/JS to freeze the scroll
            html.css( 'overflow', 'hidden' );
            window.scrollTo( scrollPosition[ 0 ], scrollPosition[ 1 ] );
        }
    } );

    App.commands.setHandler( 'freezeScrollOff', function () {
        // un-lock scroll position
        var html = $( 'html' );
        var scrollPosition = App.memory[ 'scroll-position' ];
        html.css( 'overflow', App.memory[ 'previous-overflow' ] );
        App.memory[ 'scroll-position' ] = undefined;
        App.memory[ 'previous-overflow' ] = undefined;
        window.scrollTo( scrollPosition[ 0 ], scrollPosition[ 1 ] );
    } );


    //END --- Page Level Feature - begin/end freezing the scroll page wide

    //BEGIN - Page Level Feature - show/hide page wide Loader
    App.commands.setHandler( 'showLoader', function ( process ) {
        if ( process ) {
            App.memory[ 'ongoing-process' ].push( process );
        }

        if ( $( '.loader' ).length === 0 ) {
            Loader._initiate( 'body' );
        }
        Loader.show( 'body' );
        App.execute( 'freezeScrollOn' );
    } );

    App.commands.setHandler( 'hideLoader', function ( process ) {
        if ( process ) {
            App.memory[ 'ongoing-process' ] = _.without( App.memory[ 'ongoing-process' ], process );
        }

        if ( !process || ( _.isEmpty( App.memory[ 'ongoing-process' ] ) && $( '.loader' ).length > 0 ) ) {
            Loader.destroy( 'body' );
            App.execute( 'freezeScrollOff' );
        }
    } );
    //END --- Page Level Feature - show/hide page wide Loader

    App.commands.setHandler( 'showError', function ( whichError ) {
        var _this = App;

        _this.execute( 'hideLoader' );

        if ( _this.errorOverlay ) {
            _this.errorOverlay.open();
        } else {
            require( [ 'mcomOverlay', 'mcomTemplates/component/error/serviceError' ], function ( Overlay, template ) {
                _this.errorOverlay = new Overlay( {
                    title: 'That wasn\'t supposed to happen...',
                    dialogClass: 'errorOverlay',
                    modal: true,
                    closeOnClick: true
                } );

                _this.errorOverlay.setBody( template() );

                _this.errorOverlay.open();

                $( '#serviceError button, body' ).click( function () {
                    _this.errorOverlay.close();
                } );
            } );
        }
    } );

    //page wide actions
    App.vent.on( "facet:updated", function ( meta ) {
        if ( !App.options.chanelCategory ) {
            require( [ 'commonjs/components/HtmlHead', 'mcomjs/components/SearchResultBreadcrumb' ], function ( HtmlHead, SearchResultBreadcrumb ) {
                HtmlHead.updateHtmlTitleTag( meta.pageTitle ).updateCanonicalMeta( meta.canonicalUrl );
                SearchResultBreadcrumb.updateBreadcrumbTitle( meta.facetTitle );
            } );
        }
        require( [ 'mcomjs/components/media/SubApp' ], function ( MediaSubApp ) {
            MediaSubApp.toggleCopyBlock( _.keys( meta.selectedFacets ).length );
        } );
    } );

    return App;
} );

/*
 * common: pageApp -> special alias defined in common -> these modules will throw an error if load: message stating need to overridden with concrete brand specific module */


/* mcom|bcom pageApp will override this */
