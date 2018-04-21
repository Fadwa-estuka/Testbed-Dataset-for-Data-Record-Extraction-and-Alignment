define( [
    'logger',
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'globals',
    'commonjs/features/refineByFacet/Utility',
    'segmentation'
], function ( Logger, $, _, Backbone, Marionette, Globals, Utility, Segmentation ) {

    return Backbone.Model.extend( {
        initialize: function ( data ) {
            var atLeastOneSelected = false,
                _this = this,
                asJsonForBops = '',
                preventRobots = data.indexable === false || data.isIndexable === false,
                arr = [],
                selectedValues,
                groupName;
            var setProperAttributes = function ( facetValues, setGroupName ) {
                if ( facetValues ) {
                    if ( !setGroupName ) {
                        groupName = facetValues.name;
                        facetValues = facetValues.values;
                    }

                    $.each( facetValues, function ( index, obj ) {
                        if ( obj.selected === true ) {
                            atLeastOneSelected = true;
                        }

                        //data.baseUrl and data.querystring coming from meta node in service
                        if ( obj.url && obj.url.indexOf( "?" + data.querystring ) === -1 ) {
                            obj.url = data.baseUrl ? data.baseUrl + obj.url + "?" + data.querystring : obj.url;
                        }

                        obj.aClass = obj.selected === true ? "selected" : "";

                        obj.listItemClass = ( obj.count === 0 ? " disabled" : "" ) + ( obj.selected === true ? " selected" : "" );
                        if ( obj.count > 0 ) {
                            obj.enabled = true;
                        }

                        //STEP: Set the "indexable" property at the value level for easy rendering
                        if ( preventRobots ) {
                            obj.nofollow = true;
                        }

                        //STEP: generate a JSON as string of the name/value pairs...this is for BOPS but could be useful for others

                        if ( data.name === 'UPC_BOPS_PURCHASABLE' ) {
                            asJsonForBops += ( '"' + obj.displayName + '": ' + obj.count ) + ( index + 1 !== data.values.length ? ", " : "" );
                        }

                        if ( obj.facetType ) {
                            groupName = obj.facetType;
                        } else if ( obj.groupName ) {
                            groupName = obj.groupName;
                        }

                        //Setting selected facet values object at each model once we get response from API
                        //This is needed so we can get all selected facet values for each model at any time instead of looping thru DOM.
                        if ( obj.selected === true ) {
                            arr.push( {
                                val: obj.value,
                                href: obj.url,
                                facetType: data.children ? groupName : data.name,
                                facetTabName: data.name,
                                name: obj.displayName
                            } );
                        }

                    } );
                }
            };
            var setChildAttributes = function ( model ) {
                if ( model.children && model.children.length ) {
                    _.each( model.children, function ( child ) {
                        if ( child.children ) {
                            setChildAttributes( child );
                        } else {
                            setProperAttributes( child );
                        }
                    } );
                } else {
                    setProperAttributes( model );
                }

            };
            setChildAttributes( data );
            setProperAttributes( data.selectedFacets, true );


            selectedValues = Utility.excludeDuplication( arr, 'href' );


            this.set( 'selectedValues', data.facetType === 'MULTISELECTFLYOUT' ? _.sortBy( selectedValues, function ( facet ) {
                return facet.val.toUpperCase();
            } ) : selectedValues );

            if ( data.name === 'UPC_BOPS_PURCHASABLE' ) {
                if ( asJsonForBops.length > 0 ) {
                    this.set( 'valuesAsJson', "{" + asJsonForBops + "}" );
                } else {
                    var storeJson = $( '#bops_store_data' ).data( 'stores' );
                    if ( !_.isUndefined( storeJson ) ) {
                        this.set( 'valuesAsJson', JSON.stringify( storeJson ) );
                    }
                }
            }

            var str = ( data.collapsed && !atLeastOneSelected ) ? 'collapsed' : '';
            this.set( "collapsedClass", str );
            str = !atLeastOneSelected ? "hidden" : "";
            this.set( "hiddenClass", str );
            if ( data.children ) {
                if ( !data.selectedFacets ) {
                    data.selectedFacets = [];
                }
                this.splitSelectedFacets( data, data );
            }

        },

        splitSelectedFacets: function ( obj, model, name ) {
            _.each( obj.children, function ( child ) {
                if ( child.children && child.children.length ) {
                    this.splitSelectedFacets( child, model, child.name );
                } else {
                    _.each( child.values, function ( o ) {
                        _.extend( o, {
                            groupName: child.name,
                            fullGroupName: name ? name.concat( '-', child.name ) : child.name
                        } );
                    } );

                    var selectedValues = _.where( child.values, {
                        selected: true
                    } );

                    model.selectedFacets = model.selectedFacets.concat( selectedValues );
                }
            }, this );
            this.set( 'selectedFacets', Utility.excludeDuplication( model.selectedFacets, 'href' ) );
        },

        getMergedFacets: function ( selectedValues ) {
            var merged = [];
            var facetTypes = _.uniq( _.pluck( selectedValues, 'facetType' ) );
            _.each( facetTypes, function ( type ) {
                var facetWithType = _.where( selectedValues, {
                    facetType: type
                } );
                merged.push( {
                    facetTypeName: type,
                    selectedFacetItems: facetWithType
                } );
            } );
            return merged;
        }
    } );
} );
