//#MODULE - Color Swatches View
//> Author: Cristopher Moreira da Silva
//> Create Date: June 5, 2014
//
//##DESCRIPTION: Color Swatches view. It gets the hover and click events
// and uses pubsub to notify specific bcom/mcom views for custom behaviour.
define( [ 'jquery', 'underscore', 'backbone', 'pubsub' ], function ( $, _, Backbone, PubSub ) {

    "use strict";

    var ColorSwatchesView = Backbone.View.extend( {

        //### The pub/sub channel to be used for this product thumbnail
        pubsubChannel: undefined,

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
            this.pubsubChannel = 'productThumbnail:' + this.model.get( 'uniqueId' );
        },

        //### The events object
        events: {

            //###Method
            //This method fires *activateTemporarily* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'mouseenter li.color-swatch': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'activateTemporarily'
                } );
            },

            //###Method
            //This method fires *deactivateTemporarily* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'mouseleave li.color-swatch': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'deactivateTemporarily'
                } );
            },

            //###Method
            //This method fires *activatePermanently* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'click li.color-swatch': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'activatePermanently'
                } );
            },

            //###Method
            //This method fires *activateOverlay* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'mouseenter .more-button': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'activateOverlay'
                } );
            },

            //###Method
            //This method fires *clickMoreButton* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'click .more-button': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'clickMoreButton'
                } );
            },

            //###Method
            //This method fires *deactivateOverlay* event in pubsub.
            //> parameters
            //>
            //+ *event* - the event object
            //
            //> returns
            //>
            //+ (none)
            'mouseleave': function ( event ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    el: event.currentTarget,
                    event: 'deactivateOverlay'
                } );
            }
        },

        remove: function () {
            this.stopListening();
            return this;
        }

    } );

    return ColorSwatchesView;

} );
