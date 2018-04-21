//#MODULE - MCOM Color Swatches Overlay View
//> Author: Tiago Garcia
//> Create Date: June 13, 2014
//
//##DESCRIPTION: This is the Backbone view to display color swatches overlay for MCOM.
define( [ 'jquery', 'underscore', 'backbone' ], function ( $, _, Backbone ) {

    "use strict";

    var MCOMColorSwatchesOverlayView = Backbone.View.extend( {

        //###Method - activateOverlay
        //This method sets the behavior when an overlay is activated.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        activateOverlay: function () {
            this.toggleOverlayClasses( true );
        },

        //###Method - deactivateOverlay
        //This method sets the behavior when an overlay is deactivated.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        deactivateOverlay: function () {
            this.toggleOverlayClasses( false );
        },

        ///###Method - toggleOverlayClasses
        // Toggle classes ***fullColorOverlayOff* and **fullColorOverlay**
        //> parameters
        //>
        //+ *toggle* - boolean for the question "should toggle classes on?"
        //
        //> returns
        //>
        //+ (none)
        toggleOverlayClasses: function ( toggle ) {
            var swatchesContainer = this.$el.find( 'ul.morecolors' ),
                swatchesLength = swatchesContainer.find( 'li.ipopSwatch' ).length,
                totalRows = Math.ceil( ( swatchesLength / 8 ) );

            // Set the UL's height based on the number of swatches
            if ( toggle ) {
                this.originalHeight = this.$el.find( 'ul.morecolors' ).css( 'height' );
                swatchesContainer.css( 'height', ( totalRows * 20 ) + 'px' );
            } else {
                swatchesContainer.css( 'height', this.originalHeight );
            }

            // Toggling 'morecolorsOverlay'
            swatchesContainer.toggleClass( 'morecolorsOverlay', toggle );
            if ( totalRows > 4 ) {
                swatchesContainer.toggleClass( 'morecolorsOverlayScroll', toggle );
            }

            // Toggling 'fullColorOverlay'
            this.$el.toggleClass( 'fullColorOverlayOff', !toggle );
            this.$el.toggleClass( 'fullColorOverlay', toggle );
        },

        //###Method - containsColorSwatch
        //This method checks if a color swatch belongs to this overlay.
        //> parameters
        //>
        //+ *element* - the element to be verified
        //
        //> returns
        //>
        //+ *true* if it belongs, *false* if it doesn't
        containsColorSwatch: function ( element ) {
            return this.$el.find( element ).length > 0;
        },

        remove: function () {
            this.stopListening();
            return this;
        }

    } );

    return MCOMColorSwatchesOverlayView;
} );
