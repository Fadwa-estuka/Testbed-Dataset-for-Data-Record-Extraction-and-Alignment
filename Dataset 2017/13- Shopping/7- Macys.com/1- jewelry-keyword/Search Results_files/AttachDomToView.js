define( [ 'logger', 'jquery', 'underscore' ], function ( Logger, $, _ ) {
    var common = {
        //NOTE TO DEVELOPERS: The facet app is responsible for "refining" the product results
        //as such, it needs to act as the "service" for even the BrowseGridModifiers (ProductsPerPage, SortBy, PageIndex)
        //So we initialize the app, regardless of whether or not facets were actually rendered from the page.
        //add the following overrides/methods and jump start the Facet Sub App Marionette app	
        initView: function ( options ) {
            this._initChildViewStorage();
            this.childView = this.childView || options.childView;
            this.createChildren( options );
            //NOTE TO DEVELOPERS: This comes from "CollectionView._initialEvents" and is the one we need to manually set here onload.
            //Once the view loads, it will also call this once, and so we are going to use listenToOnce to ensure we only listen once
            //Without this we cannot render going from server-side to client-side rendering and yet with listenTo we render twice on client after first render
            this.listenToOnce( this.collection, 'reset', this.render );
        },

        createChildren: function ( options ) {
            this.collection.each( function ( model ) {
                var _opts = {};
                if ( typeof this.childViewOptions !== "undefined" ) {
                    if ( typeof this.childViewOptions === 'function' ) {
                        _opts = this.childViewOptions();
                    } else {
                        _opts = this.childViewOptions;
                    }
                }
                _opts.bopsLookupInstance = window.bopslookup;
                var View = this.getChildView( model );
                var view = new View( {
                    el: this.$el.selector + " #" + model.get( 'name' ),
                    model: _.extend( model, _opts )
                } );
                this.initializeChild( view );
            }, this );
        },

        initializeChild: function ( view ) {
            this.proxyChildEvents( view );
            this.children.add( view );
            if ( view.onRender ) {
                view.onRender();
            }
        }
    };

    return common;
} );
