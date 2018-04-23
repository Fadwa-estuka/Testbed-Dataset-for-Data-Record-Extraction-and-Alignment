//#MODULE - Product Thumbnail View
//> Author: Tiago Garcia
//> Create Date: June 17, 2014
//
//##DESCRIPTION: Product Thumbnail View view. It encompasses all color swatches views.
define( [ 'underscore', 'jquery', 'backbone', 'pubsub', 'pubsubMixin' ], function ( _, $, Backbone, PubSub, PubSubMixin ) {

    "use strict";

    var ProductThumbnailView = Backbone.View.extend( {

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
            // Note: These values are being defined *inside*
            // the initializer, because they are different
            // for every instance. If they were defined outside,
            // they'd be like 'class variables'.
            //
            //### The list of internal views
            this.internalViews = [];

            //### The pub/sub channel to be used for this product thumbnail
            this.pubsubChannel = 'productThumbnail:' + this.model.get( 'uniqueId' );

            this.registerSubscriber( this );
        },

        //###Method - registerSubscriber
        //Registers a view as a pub/sub subscriber by binding with PubSubMixin.
        //> parameters
        //>
        //+ *view* - The view to be registered as a subscriber
        //
        //> returns
        //>
        //+ (none)
        registerSubscriber: function ( view ) {
            var subscriber = _.bind( PubSubMixin.run, view );
            PubSub.observe( this.pubsubChannel ).subscribe( subscriber );

            return subscriber;
        },


        //###Method - activateSelectedFacets
        //This method permanently activates color swatches selected by facets.
        //> parameters
        //>
        //+ *selectedFacets* - A list of selected facets
        //
        //> returns
        //>
        //+ (none)
        activateSelectedFacets: function ( selectedFacets ) {
            PubSub.observe( this.pubsubChannel ).publish( {
                facetValues: selectedFacets,
                event: 'activateFacets'
            } );
        },

        //###Method - selectPersistedSwatches
        //This method permanently activates color swatches persisted in cache.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        selectPersistedSwatches: function () {
            PubSub.observe( this.pubsubChannel ).publish( {
                event: 'persistColorSwatches'
            } );
        },

        //###Method - registerInternalView
        //Registers an internal view as subscriber and then into the internal
        //list of views.
        //> parameters
        //>
        //+ *internalView* - The view to be registered
        //
        //> returns
        //>
        //+ (none)
        registerInternalView: function ( internalView ) {
            var subscriber = this.registerSubscriber( internalView );

            this.internalViews.push( {
                view: internalView,
                subscriber: subscriber
            } );
        },

        //###Method - render
        //This method renders this view.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        render: function () {
            _.each( this.internalViews, function ( item ) {
                item.view.render();
            } );
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
            var observer = PubSub.observe( this.pubsubChannel );
            _.each( this.internalViews, function ( item ) {
                observer.unsubscribe( item.subscriber );
                item.view.remove();
            } );

            observer.unsubscribe( this );

            // We are not calling this function because it would
            // remove the element from the dom. It is being done
            // by facetController.
            //
            //Backbone.View.prototype.remove.call( this );

            return this;
        }

    } );

    return ProductThumbnailView;

} );
