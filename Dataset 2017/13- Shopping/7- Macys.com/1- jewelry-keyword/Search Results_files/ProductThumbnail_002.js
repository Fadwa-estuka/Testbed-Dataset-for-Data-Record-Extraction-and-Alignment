//#MODULE - MCOM Product Thumbnail View
//> Author: Tiago Garcia
//> Create Date: June 18, 2014
//
//##DESCRIPTION: This is the Backbone view to display product thumbnails for MCOM.
define( [ 'jquery', 'underscore', 'backbone', 'pubsub', 'productThumbnail/views/ProductThumbnail', 'mcomColorSwatches/views/ColorSwatches', 'mcomColorSwatches/views/ColorSwatchesOverlay', 'mcomColorSwatches/views/ImageFader', 'mcomColorSwatches/views/JumboSwatch' ], function ( $, _, Backbone, PubSub, ProductThumbnailView, MCOMColorSwatchesView, MCOMColorSwatchesOverlayView, MCOMImageFaderView, MCOMJumboSwatchView ) {

    "use strict";

    // Ensuring global variables are made local to the module for coding consistency
    var MACYS = window.MACYS;

    var MCOMProductThumbnailView = ProductThumbnailView.extend( {

        //###Method - initialize
        //This method initializes this view.
        //> parameters
        //>
        //+ *options* - the options map provided by the client
        //
        //> returns
        //>
        //+ (none)
        initialize: function ( options ) {
            ProductThumbnailView.prototype.initialize.apply( this, [ options ] );

            this.registerInternalView( new MCOMColorSwatchesView( {
                model: this.model,
                el: this.$el.find( 'div.offers.crossfadeOffers' )
            } ) );
            this.registerInternalView( new MCOMColorSwatchesOverlayView( {
                model: this.model,
                el: this.$el.find( '.fullColorOverlayOff' )
            } ) );
            this.registerInternalView( new MCOMImageFaderView( {
                model: this.model,
                image: this.$el.find( '.thumbnailImage' )
            } ) );
            this.registerInternalView( new MCOMJumboSwatchView( {
                model: this.model,
                el: this.$el.find( '.overlayImgBox' )
            } ) );
        },

        //###Method - updateLinks
        //This method updates links on the product thumbnail to add a specific parameter.
        //> parameters
        //>
        //+ *message* - the message from pub/sub
        //
        //> returns
        //>
        //+ (none)
        updateLinks: function ( message ) {
            var links = this.$el.find( 'a.productThumbnailLink' );
            var parameter = '&' + message.parameter + '=';
            links.each( function ( index, element ) {
                $( element ).attr( 'href', function ( i, value ) {
                    if ( !value ) {
                        return value;
                    }

                    if ( value.indexOf( parameter ) === -1 ) {
                        return value + parameter + message.value;
                    }

                    var regex = new RegExp( '(' + parameter + ")[a-z]+", 'ig' );
                    return value.replace( regex, '$1' + message.value );
                } );
            } );
        },

        //###Method - updateProductCache
        //When a product's color swatch was selected in any page and user navigated
        //to other page through pagination we need to persist the color selection,
        //as we are getting products from cache when user comes back to the previous page.
        //Then we need to update the product cache, with user's selection thumbnail div.
        //> parameters
        //>
        //+ *message* - the message from pub/sub
        //
        //> returns
        //>
        //+ (none)
        updateProductCache: function ( message ) {
            if ( MACYS && MACYS.Faceted && MACYS.Faceted.facetCtrl && MACYS.Faceted.facetCtrl.productCache ) {
                var categoryId = $( '#categoryId' ).val();
                if ( categoryId ) {
                    MACYS.Faceted.facetCtrl.productCache.set(
                        categoryId + '_' + this.model.get( 'id' ), this.el.outerHTML );
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
            ProductThumbnailView.prototype.remove.call( this );
        }

    } );

    return MCOMProductThumbnailView;

} );
