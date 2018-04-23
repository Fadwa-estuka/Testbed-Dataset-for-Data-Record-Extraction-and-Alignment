define( [ 'logger', 'jquery', 'underscore', 'backbone', 'commonjs/features/refineByFacet/models/FacetModel', 'commonjs/features/refineByFacet/collections/FacetCollection', 'mcomjs/features/refineByFacet/views/FacetCompositeView', 'commonjs/features/refineByFacet/views/BaseFacetView', 'mcomjs/features/refineByFacet/views/FacetItemBrand', 'mcomjs/features/refineByFacet/views/FacetItemPrice', 'mcomjs/features/refineByFacet/views/FacetItemBops', 'commonjs/features/refineByFacet/AttachDomToView', 'stringUtil', 'objectUtil' ], function ( Logger, $, _, Backbone, FacetModel, FacetCollection, FacetCompositeView, BaseFacetView, FacetItemBrand, FacetItemPrice, FacetItemBops, AttachDomToView, StringUtil, ObjectUtil ) {

    var common = {
        defaultChildSelector: 'li',

        getChildView: function ( item ) {
            var name = item.get( 'name' ) === 'UPC_BOPS_PURCHASABLE' ? item.get( 'name' ) : item.get( 'facetType' );

            if ( item.get( 'children' ) ) {
                name = "MULTISELECTGROUPING";
            }

            var map = {
                MULTISELECTRANGE: FacetItemPrice,
                MULTISELECTSCROLLBAR: FacetItemBrand,
                UPC_BOPS_PURCHASABLE: FacetItemBops,
                MULTISELECTGROUPING: FacetCompositeView
            };
            return map[ name ] || BaseFacetView;
        },

        childViewOptions: function () {
            return {
                brand: "mcom"
            };
        },

        initialize: function ( options ) {
            this.render();
        },

        clearAllFacets: function () {
            this.collection.meta.selectedFacets = [];
            this.children.each( function ( child ) {
                child.clearFacet();
            } );
        },

        childEvents: {
            "facet:clear": function ( v ) {
                var total = this.getTotalSelections();
                this.trigger( "facet:clear", total );
            }
        },

        collectionEvents: {
            'response:error': function ( e ) {
                this.trigger( "facetCollection:error", e );
            },
            'reset': function ( e ) {
                Logger.log( "on reset" );
            }
        },

        getModelFromDom: function ( selector ) {
            var _this = this,
                facets = [],
                facetIndex = 0;
            $( selector ).each( function ( index, obj ) {
                facets[ facetIndex ] = {
                    "name": obj.id,
                    "displayName": $( obj ).children( 'h2' ).text().trim(),
                    "collapsed": $( obj ).hasClass( 'collapsed' ),
                    "facetType": $( obj ).data( 'uitype' ),
                    "collapseDisabled": $( obj ).hasClass( 'collapseDisabled' )
                };

                facets[ facetIndex ].values = [];
                if ( $( obj ).hasClass( 'groupFacet' ) ) {
                    facets[ facetIndex ].children = _this.getModelFromDom( '#' + obj.id + '> .listbox > ul > li' );
                } else {
                    facets[ facetIndex ].values = _this.getFacetValues( obj );
                }
                facetIndex++;
            } );
            return facets;
        },

        getFacetValues: function ( obj ) {
            var facetValues = [];
            $( '#' + obj.id + '> .listbox > ul > li' ).each( function ( idx, val ) {
                if ( obj.id === "UPC_BOPS_PURCHASABLE" ) {
                    return;
                }
                var itemCount = $( val ).find( ".item_count" ).length > 0 ? $( val ).find( ".item_count" ).text() : '';
                var numWeWant = itemCount.match( /\d+/ );
                if ( numWeWant.length > 0 ) {
                    itemCount = numWeWant[ 0 ];
                }
                facetValues[ idx ] = {
                    "displayName": $( val ).find( ".item" ).data( 'displayname' ),
                    "value": $( val ).find( "a" ).data( 'value' ) || '',
                    "selected": $( val ).hasClass( "selected" ),
                    "count": Number( itemCount )
                };
            } );
            return facetValues;
        },

        //###Method - getAllSelectedFacets(type)
        //IMPORTANT FUNCTION - This is the heart of figuring out what is the set of selected facets.
        //There are two sets of selected facets. 1) That the Server sends, 2) That the user selects in the UI.
        //This function will merge those two sets together, removing duplicates and applying the right logic in order
        //to handle the situations where selectedFacets do not appear in the DOM.
        //
        //> parameters
        //>
        //+ *type* - (optional) Will return only the UI selected ones of that type
        //
        //> returns
        //>
        //+ Object.  A model of the selected facets
        getAllSelectedFacets: function ( type ) {
            var selected = this.getAllSelectedFacetsFromUi( type );
            var selectedFacetType = _.pluck( selected, 'facetTypeName' );

            //STEP: Now add to the UI selected facets, the "selected facets" that the server says are selected
            $( this.collection.meta.selectedFacets ).each( function ( idx, obj ) {
                var key = Object.keys( obj )[ 0 ];

                if ( typeof key !== 'undefined' && typeof obj[ key ] !== 'undefined' && ( key === type || typeof type === 'undefined' ) ) {
                    var vals = [],
                        selectedFacet = selected[ selectedFacetType.indexOf( key ) ];
                    $( obj[ key ] ).each( function ( idx, str ) {
                        vals.push( {
                            'facetType': key,
                            'name': str,
                            'val': str,
                            'url': '#'
                        } );
                    } );
                    if ( selectedFacet && selectedFacet.selectedFacetItems ) {
                        selectedFacet.selectedFacetItems = selectedFacet.selectedFacetItems.concat( vals );
                    } else {
                        selected.push( {
                            facetTypeName: key,
                            selectedFacetItems: vals
                        } );
                    }
                }
            } );


            return selected;
        },
        getAllSelectedFacetsFromUi: function ( type ) {
            var selected = [];

            //STEP: Make an array of selected object from the DOM selected facets
            this.children.each( function ( child ) {
                var selectedOptions = child.getSelected();
                //Additional check if type is not present or type equals the selected facet
                if ( selectedOptions.length > 0 && ( typeof type === 'undefined' || type === child.model.get( "name" ) ) ) {
                    if ( child.model.get( "children" ) ) {
                        selected = selected.concat( selectedOptions );
                    } else {
                        selected.push( {
                            facetTypeName: child.model.get( "name" ),
                            selectedFacetItems: selectedOptions
                        } );
                    }
                }
            } );

            return selected;
        },
        deselectFacet: function ( obj ) {
            var _this = this;
            this.children.each( function ( child ) {
                if ( child.model.get( "name" ) === obj.facetType || child.model.get( "children" ) ) {
                    child.deselectFacet( obj );
                }
            } );
            if ( this.collection && this.collection.meta && this.collection.meta.selectedFacets ) {
                this.collection.meta.selectedFacets[ obj.facetType ] = _.without( this.collection.meta.selectedFacets[ obj.facetType ], _.findWhere( this.collection.meta.selectedFacets[ obj.facetType ], obj.facetValue ) );
                if ( this.collection.meta.selectedFacets[ obj.facetType ].length === 0 ) {
                    delete this.collection.meta.selectedFacets[ obj.facetType ];
                }
            }
        },
        getAllSelectedFacetValues: function () {
            var selected = this.getAllSelectedFacets();
            var retval = [],
                vals = 0;
            $( selected ).each( function ( idx, obj ) {
                $( obj.selectedFacetItems ).each( function ( k, o ) {
                    retval[ vals++ ] = {
                        "facetName": o.name,
                        "facetValue": o.val,
                        "facetType": o.facetType
                    };
                } );
            } );


            return retval;
        },

        getSelectedFacetValuesByType: function ( type ) {
            var selected = this.getAllSelectedFacets( type );
            var retval = [],
                vals = 0;
            $( selected ).each( function ( idx, obj ) {
                $( obj.selectedFacetItems ).each( function ( k, o ) {
                    retval[ vals++ ] = o.val;
                } );
            } );
            return retval;
        },

        getTotalSelections: function () {
            var totalSelected = 0;
            this.children.each( function ( child ) {
                totalSelected += child.getSelected().length;
            } );
            return totalSelected;
        },
        getBaseUrlOverride: function ( path ) {
            var retval = null;
            try {
                var parts = path.split( '/' );
                if ( parts[ 1 ] === 'shop' && parts[ 2 ] === 'featured' ) {
                    retval = '/shop/featured/' + parts[ 3 ];
                }
                if ( parts[ 1 ] === 'buy' ) {
                    retval = '/buy/' + parts[ 2 ];
                }
            } catch ( e ) {}
            return retval;
        }
    };

    //NOTE TO DEVELOPERS: The facet app is responsible for "refining" the product results
    //as such, it needs to act as the "service" for even the BrowseGridModifiers (ProductsPerPage, SortBy, PageIndex)
    //So we initialize the app, regardless of whether or not facets were actually rendered from the page.
    //add the following overrides/methods and jump start the Facet Sub App Marionette app
    common.initialize = function ( options ) {
        //populate collection from pre-existing DOM structure
        var _this = this;
        this.collection = new FacetCollection( this.getModelFromDom( '#facets > li' ) );

        //STEP: This is the meta property of the currently selected facets which may or may not be in the facet data
        var pushed = this.collection.mergeSelectedFacets( this.collection.models, JSON.parse( ( $( '#selectedFacets' ).val() !== '' && typeof $( '#selectedFacets' ).val() !== 'undefined' ) ?
            decodeURIComponent( $( '#selectedFacets' ).val().replace( /\\'/g, "'" ) ) : '{}' ) );

        //STEP: For the different possible routes, capture here what the current base URL is...this will be used later
        var baseUrl = this.getBaseUrlOverride( location.pathname );

        //Get all possible Search params and return as a & delimited string of key=value
        this.getSearchParams = function () {
            var retList = [],
                paramList = [ "cm_kws", "cm_kws_ac", "mode", "application" ];

            while ( paramList.length > 0 ) {
                var key = paramList.shift(),
                    val = StringUtil.getURLParameter( key );

                if ( null !== val ) {
                    retList.push( key + "=" + val );
                }
            }

            if ( retList.length > 0 ) {
                return retList.join( "&" );
            } else {
                return null;
            }
        };

        this.collection.meta = {
            'selectedFacets': pushed,
            'baseUrlOverride': baseUrl,
            'searchParams': this.getSearchParams()
        };

        this.listenTo( this.collection, "response:error", function ( e ) {
            _this.trigger( 'facetCollection:error' );
        } );

        this.listenTo( this.collection, "response:redirectURL", function () {
            _this.trigger( 'facetCollection:redirectURL' );
        } );

        // Invoking method in the AttachDomToView common object.
        this.initView( options );
    };

    // Extending the Attach DOM to View methods in current collection view object.
    $.extend( common, AttachDomToView );

    return Backbone.Marionette.CollectionView.extend( common );
} );
