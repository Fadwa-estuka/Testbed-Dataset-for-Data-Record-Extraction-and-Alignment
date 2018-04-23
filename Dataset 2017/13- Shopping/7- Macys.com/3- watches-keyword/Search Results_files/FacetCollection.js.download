define( [
    'logger',
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'commonjs/features/refineByFacet/models/FacetModel'
], function ( Logger, $, _, Backbone, Marionette, FacetModel ) {

    var FacetsCollection = Backbone.Collection.extend( {
        model: FacetModel,
        metaData: {},
        getMetaData: function () {
            return this.metaData;
        },
        applyFacet: function ( url ) {
            var _this = this;
            this.url = url;
            return this.fetch( {
                reset: true,
                dataType: 'json',
                error: function ( e ) {
                    _this.trigger( "response:error", e );
                }
            } );
        },
        parse: function ( response, options ) {
            if ( response.hasOwnProperty( "errors" ) ) {
                if ( response.FacetResponse && response.FacetResponse.meta ) {
                    this.metaData = response.FacetResponse.meta;
                }
                this.trigger( "response:error", response );
                return this.convertPrevModelsToResponse( options.previousModels );
            } else {
                var resp = response.FacetResponse;
                this.metaData = resp.meta;

                // If facet meta response has redirect URL then fire this event.
                if ( this.metaData.redirectURL ) {
                    this.trigger( "response:redirectURL" );
                    return this.convertPrevModelsToResponse( options.previousModels );
                }

                //STEP: Override: the baseUrl is always /shop/search in the case of search.
                //...however, both MCOM and BCOM have "DLP"s which are also search pages with differing routes
                //But the service does not know when the user is on that route...we will handle client-side here
                if ( this.metaData.baseUrl.indexOf( '/shop/search' ) > -1 || this.metaData.baseUrl.indexOf( '/wedding/search' ) > -1 ) {
                    if ( this.meta.baseUrlOverride !== null ) {
                        this.metaData.baseUrl = this.meta.baseUrlOverride;
                    }
                }

                //Check for search values
                if ( 'undefined' !== typeof this.meta.searchParams && null !== this.meta.searchParams ) {
                    if ( this.metaData.querystring !== "" ) {
                        this.metaData.querystring += "&" + this.meta.searchParams;
                    } else {
                        this.metaData.querystring = this.meta.searchParams;
                    }
                }

                //STEP: Formatting of Facet collection, AND handling of intentional server-side suppression of facet data
                if ( resp.meta.facetsRequested !== false ) {
                    if ( resp.facets && resp.facets.length > 0 ) {
                        this.parseFacets( resp.facets );
                    } else {
                        resp.facets = [];
                    }
                } else {
                    resp.facets = this.convertPrevModelsToResponse( options.previousModels );
                    this.parseFacets( resp.facets );
                }

                //STEP: Fill out the meta.selectedFacets property...this is for handling the situation where selected facets are not in the facet data from the server
                this.meta.selectedFacets = this.mergeSelectedFacets( resp.facets, resp.meta.selectedFacets );

                return resp.facets;
            }
        },
        convertPrevModelsToResponse: function ( obj ) {
            var a = [];
            for ( var i = 0; i < obj.length; i++ ) {
                a[ a.length ] = obj[ i ].attributes;
            }
            return a;
        },
        parseFacets: function ( facets ) {
            for ( var i = 0; i < facets.length; i++ ) {
                this.parseFacet( facets[ i ] );
            }
        },
        parseFacet: function ( facet ) {
            facet.baseUrl = this.metaData.baseUrl;
            facet.querystring = this.metaData.querystring;

            if ( facet.children && facet.children.length > 0 ) {
                for ( var i = 0; i < facet.children.length; i++ ) {
                    this.parseFacet( facet.children[ i ] );
                }
            } else if ( facet.facetType === 'MULTISELECTBUTTON' && facet.values && facet.values.length > 0 ) {
                var splitterExp = new RegExp( ",\\s*(.+)" );
                for ( var j = 0; j < facet.values.length; j++ ) {
                    // Split facet value in first comma for size button facet.
                    var displayNames = ( facet.values[ j ].displayName ) ? facet.values[ j ].displayName.toString().split( splitterExp, 2 ) : [];

                    if ( displayNames.length > 1 ) {
                        facet.values[ j ].displayNames = displayNames;
                    }
                }
            }
        },

        mergeSelectedFacets: function ( uiCollection, serverModel ) {
            var item = {}, pushed = {};
            item = this.retrieveSelectedFacets( uiCollection );
            for ( var itm in serverModel ) {
                var diff = _.difference( serverModel[ itm ], item[ itm ] );
                if ( diff.length ) {
                    pushed[ itm ] = diff;
                }
            }

            return pushed;
        },

        // Retrieve the selected facets from the uicollection
        retrieveSelectedFacets: function ( uiCollection ) {
            var uiSel, _this = this,
                item = {}, popArray, model;
            for ( var k = 0; k < uiCollection.length; k++ ) {
                var uiChildren = uiCollection[ k ].children || ( uiCollection[ k ].attributes ? uiCollection[ k ].attributes.children : [] );
                if ( uiChildren && uiChildren.length > 0 ) {
                    // Recursive invocation for nested facet.
                    item = $.extend( item, _this.retrieveSelectedFacets( uiChildren ) );
                } else {
                    model = uiCollection[ k ].attributes || uiCollection[ k ];

                    uiSel = _.where( model.values, {
                        'selected': true
                    } );
                    if ( uiSel.length > 0 ) {
                        popArray = [];
                        for ( var h = 0; h < uiSel.length; h++ ) {
                            popArray.push( uiSel[ h ].value.toString() );
                        }
                        item[ model.name ] = popArray;
                    }
                }
            }
            return item;
        }
    } );

    return FacetsCollection;
} );
