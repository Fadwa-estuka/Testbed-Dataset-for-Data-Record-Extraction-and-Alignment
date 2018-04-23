//
// ATTENTION! Before making changes on this file, make sure you have read the instructions at MacysUI/macysJS/src/mcom/features/leanProduct/README_BEFORE_TOUCHING_THE_RADICAL_PDP.md
//
define( [
    'marionette',
    'jquery',
    'underscore',
    'pubsub',
    'logger'
], function (
    Marionette,
    $,
    _,
    pubsub,
    Logger
) {

    'use strict';

    //some diff to load the content before the user actually sees it, for better user experience
    var LOAD_BEFORE_USER_SEES_DIFF = 200;

    return Marionette.Object.extend( {

        initialize: function ( options ) {
            _.extend( this, options );
            this.loadPromise = $.Deferred();
        },

        loadModule: function () {
            var _this = this;
            require( [ this.modulePath ], function ( View ) {
                _this.actualView = _this.loadViewCallback( View );
                _this.loadPromise.resolve();
            } );
            return this;
        },

        loadWhenVisible: function ( containerXpath ) {
            this.whenVisible( containerXpath, _.bind( function () {
                this.loadModule();
            }, this ) );
        },

        whenVisible: function ( containerXpath, callback ) {
            var $container = $( containerXpath ),
                $window = $( window );

            function watchScroll() {
                var $windowHeight = $window.height(),
                    $scrollTop = $window.scrollTop();

                if ( $windowHeight + $scrollTop > $container.offset().top - LOAD_BEFORE_USER_SEES_DIFF ) {
                    pubsub.observe( 'layout.sidebar.mutated' ).unsubscribe( watchScroll );
                    callback();
                    $window.off( 'scroll touchmove', watchScroll );
                }
            }

            if ( $container.length ) {
                $window.on( 'scroll touchmove', watchScroll );
                pubsub.observe( 'layout.sidebar.mutated' ).subscribe( watchScroll );

                watchScroll();
            }
        },

        render: function () {
            this.loadPromise.promise().done( _.bind( function () {
                this.actualView.render();
            }, this ) );
        }

    } );

} );
