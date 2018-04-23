//#MODULE - MCOM Color Swatches Overlay View
//> Author: Tiago Garcia
//> Create Date: June 13, 2014
//
//##DESCRIPTION: This is the Backbone view to display color swatches overlay for MCOM.
define( [ 'jquery', 'underscore', 'backbone' ], function ( $, _, Backbone ) {

    "use strict";

    return Backbone.View.extend( {

        //###Method - initialize
        //This method initializes this view.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        initialize: function () {
            this.span = this.$el.find( 'span' );
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
            var index = $( event.el ).index();

            if ( !this.model.isClickable( index ) ) {
                var thumb = this.model.get( 'swatchColorList' )[ index ];

                this.$el.addClass( 'overlayImgBoxShow' );

                this.span.css( {
                    backgroundImage: 'url("' + thumb.jumbo + '")',
                    backgroundPosition: thumb.jumboOffset + 'px 0'
                } );
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
            var index = $( event.el ).index();

            if ( !this.model.isClickable( index ) ) {
                if ( !this.selected ) {
                    this.$el.removeClass( 'overlayImgBoxShow' );
                }

                this.span.attr( 'style', this.style || '' );
            }
        },

        //###Method - activatePermanently
        //This method sets the behavior when a color swatch is permanently activated.
        //> parameters
        //>
        //+ *event* - the event from pub/sub
        //
        //> returns
        //>
        //+ (none)
        activatePermanently: function ( event ) {
            var el = $( event.el ),
                index = el.index(),
                thumb;

            if ( !this.model.isClickable( index ) ) {
                this.$el.addClass( 'overlayImgBoxShow' );

                this.selected = el;
                thumb = this.model.get( 'swatchColorList' )[ index ];

                this.span.css( {
                    backgroundImage: 'url("' + thumb.jumbo + '")',
                    backgroundPosition: thumb.jumboOffset + 'px 0'
                } );

                this.style = this.span.attr( 'style' );
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
            this.span = null;
            this.stopListening();
            return this;
        }

    } );

} );
