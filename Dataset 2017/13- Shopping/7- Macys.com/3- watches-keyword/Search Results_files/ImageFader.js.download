//#MODULE - MCOM Image Fader View
//> Author: Tiago Garcia
//> Create Date: June 13, 2014
//
//##DESCRIPTION: This is the Backbone view to display image fader for MCOM.

define( [ 'jquery', 'underscore', 'backbone' ], function ( $, _, Backbone ) {

    "use strict";

    return Backbone.View.extend( {

        //###Method - initialize
        //This method initializes this view.
        //> parameters
        //>
        //+ *options* - the options map provided by the client
        //
        //> returns
        //>
        //+ (none)
        initialize: function ( data ) {
            this.image = data.image;
            this.original = this.image.data( 'src' );
        },

        //###Method - activateTemporarily
        //This method sets the behavior when a color swatch is temporarily activated.
        //> parameters
        //>
        //+ *event* - the event from pub/sub
        //
        //> returns
        //>
        //+ (none)
        activateTemporarily: function ( event ) {
            var el = $( event.el ),
                index = el.index(),
                image;

            this.original = this.image.attr( 'src' );

            if ( this.model.isClickable( index ) ) {
                if ( !el.hasClass( 'clickableSwatchSelected' ) ) {
                    el.addClass( 'clickableSwatchHover' );
                    image = this.model.get( 'swatchColorList' )[ index ].preview;
                } else {
                    image = this.original;
                }

                if ( image ) {
                    this.image.attr( 'src', image );
                    this.image.attr( 'data-src', image );
                    this.image.data( 'src', image );
                }
            }
        },

        //###Method - deactivateTemporarily
        //This method sets the behavior when a color swatch is temporarily deactivated.
        //> parameters
        //>
        //+ *event* - the event from pub/sub
        //
        //> returns
        //>
        //+ (none)
        deactivateTemporarily: function ( event ) {
            var el = $( event.el ),
                index = el.index();

            if ( this.model.isClickable( index ) ) {
                el.removeClass( 'clickableSwatchHover' );

                if ( this.image.attr( 'src' ) !== this.original ) {
                    this.image.attr( 'src', this.original );
                }
            }
        },

        //###Method - activatePermanently
        //This method sets the behavior when a color swatch is permanently activated.
        //> parameters
        //>
        //+ *message* - the message from pub/sub
        //
        //> returns
        //>
        //+ (none)
        activatePermanently: function ( event ) {
            var el = $( event.el ),
                index = el.index(),
                image;

            this.original = this.image.attr( 'src' );

            if ( this.model.isClickable( index ) ) {
                image = this.model.get( 'swatchColorList' )[ index ].preview;

                if ( image ) {
                    this.original = image;
                    this.image.attr( 'src', image );
                    this.image.attr( 'data-src', image );
                    this.image.data( 'src', image );
                }
            }
        },

        ///###Method - remove
        // Remove this view by taking the element out of the DOM, and removing
        // any applicable Backbone.Events listeners.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        remove: function () {
            this.image = null;
            this.original = null;

            Backbone.View.prototype.remove.call( this );
        }

    } );

} );
