define( [ 'jquery',
    'underscore',
    'marionette',
    'handlebars',
    'loader',
    'contextFramework',
    'clientSideStorage',
    'security',
    'stringUtil',
    'mcomBopsCoreMetrics',
    'commonjs/features/refineByFacet/views/BaseFacetView',
    'hbsCommonTemplates/features/refineByFacet/BopsLocationUnknown',
    'hbsCommonTemplates/features/refineByFacet/BopsNoStores',
    'hbsCommonTemplates/features/refineByFacet/BopsStoresFound',
    'hbsCommonTemplates/features/refineByFacet/BaseFacetViewList',
    'globals',
    'backboneradio',
    'commonBops/BopsSelectedStore'
], function ( $, _, Marionette, Handlebars, Loader, context, Storage, Security, StringUtil, bopsCoreMetrics, BaseFacetView, bopsTemplateLocationUnknown, bopsTemplateNoStores, bopsTemplateStoresFound, BaseFacetViewList, Globals, Radio, BopsSelectedStore ) {
    Handlebars.registerPartial( 'BaseFacetViewList', BaseFacetViewList );
    var storeLookupChannel = Radio.channel( 'storeLookup' );

    // Method - set initial preferred location
    // @return undefined
    function setInitialType() {
        //NOTE: This is all about getting the default values from the cookie (Akamai sets this),
        //but this only happens when the "preferred" location is not already saved for a user.
        if ( context.user.getPreferred() === '' ) {
            var zip = context.geoIpLocation.getPostalCode();
            var latlng = context.geoIpLocation.getLatLng();

            if ( zip !== '' ) {
                context.user.setPreferred( zip );
                var loc = context.user.getLocation( zip );
                if ( loc.address === undefined ) {
                    loc.address = {};
                }
                loc.address.postalCode = zip;
                loc.lat = latlng.lat;
                loc.lng = latlng.lng;
                context.user.setLocation( loc, zip );
            }
        }
    }

    function displayError( msg, doTimer, timeout ) {
        var bTimer = doTimer || true;
        bTimer = timeout ? !timeout : bTimer;
        var errId = '#bopsError',
            inputId = '#input_postal_code, #bopsLocationBox';
        if ( $( errId ).length === 0 ) {
            if ( $( inputId ).length > 0 ) {
                $( inputId ).after( '<div id="bopsError" class="error"></div>' );
            } else {
                $( '#bops_store_data' ).append( '<div id="bopsError" class="error"></div>' );
            }
        }
        $( errId ).empty();
        if ( msg.length > 0 ) {
            $( errId ).html( msg ).fadeIn( 'fast' );
            $( inputId ).addClass( 'error' );
        }
        if ( bTimer ) {
            setTimeout( function () {
                $( errId ).fadeOut( 'slow', function () {
                    $( this ).empty();
                    $( inputId ).removeClass( 'error' );
                } );

            }, 4000 );
        }
    }

    //###Method - will retrieve the user's currently selected mileage radius
    function getSelectedRadius( radiusDefault ) {
        var i = parseInt( Storage.getPersistent( 'bops_selected_radius' ), 10 );
        if ( _.isNaN( i ) === false && _.isNumber( i ) ) {
            return i;
        } else {
            return parseInt( radiusDefault, 10 );
        }
    }
    //###Method - will set the user's currently selected mileage radius
    function setSelectedRadius( val ) {
        Storage.setPersistent( 'bops_selected_radius', val );
    }

    function cleanseInput( str ) {
        return Security.preventXss( str );
    }

    function isScriptTagPresent( str ) {
        return Security.attemptedScript( str );
    }

    return BaseFacetView.extend( {
        //model: FacetStoreModel,
        radiusArray: [ 5, 10, 25, 50, 100 ],
        radiusDefault: 10,
        //theDivContainingTheList: null,
        storeData: {},
        facetEvents: {
            "click #input_postal_code_go": "searchForLocation",
            "keyup #input_postal_code": "searchForLocation",
            "change #bopsByMiles": "refineByRadius",
            "click #bopsLocation": "launchOverlay",
            "click li > a": "triggerItemClick"
        },
        triggerItemClick: function ( e ) {
            $( 'a', this.$el ).removeClass( 'selected' );
            $( this.$el ).removeClass( 'selected' );
            this.facetItemClick( e );
            var value = $( e.currentTarget ).data( "value" );
            this.trigger( "facet:item:click", value, {
                'facetValue': value,
                'facetType': this.model.get( "name" )
            } );

            if ( value !== "" && this.bopsCXStoreFinderComponentEnabled === 'true' ) {
                BopsSelectedStore.setSelectedStore( value );
            }
            this.toggleClearButton();
        },

        launchOverlay: function ( e ) {
            e.preventDefault();
            e.stopPropagation();

            this.showBopsOverlay();
            bopsCoreMetrics.trackBopsConversionEvents( bopsCoreMetrics.trackingData.SHOW_BOPS_OVERLAY.eventName );
        },
        refineByRadius: function ( e ) {
            var radius = e.currentTarget.value;
            setSelectedRadius( radius );
            this.model.set( 'listAvailableStores', false );
            this.searchForStores( context.user.getPreferred() );
            bopsCoreMetrics.trackBopsFacetSearchEvents( bopsCoreMetrics.trackingData.SELECTED_RADIUS.eventName );
        },
        searchForLocation: function ( e ) {
            if ( ( e.type === "keyup" && e.keyCode === 13 ) || e.type === "click" ) {
                var searchTerm = cleanseInput( $( '#input_postal_code' ).length > 0 ? $( '#input_postal_code' ).val() : '' );
                //NOTE: Check for bad input
                if ( !isScriptTagPresent( searchTerm ) && StringUtil.validatePostalCode( searchTerm ) ) {

                    this.searchForStores( searchTerm );
                } else {
                    var msg = !StringUtil.validatePostalCode( searchTerm ) ? 'You must enter a valid Zip Code' : searchTerm + ' is not a recognized zip code. Please try again.';
                    displayError( msg );
                    bopsCoreMetrics.trackBopsFacetSearchEvents( bopsCoreMetrics.trackingData.DATA_ENTRY_ERROR.eventName );
                }
            }
        },
        initialize: function ( options ) {
            var _this = this;
            this.bopsCXStoreFinderComponentEnabled = Globals.getValue( 'props.bopsCXStoreFinderComponentEnabled' );
            var collection = ( options.model && options.model.collection ) ? options.model.collection : {};
            // It holds all the selectedFacets on page load
            this.selectedFacets = ( collection.meta && collection.meta.selectedFacets ) ? collection.meta.selectedFacets : {};
            //STEP: Since we are extending BaseFacetView, be certain to call its "initialize" function
            this._super( options );

            //NOTE: This is just for development...Akamai set this...
            //context.user.setPreferred( '93940' );

            var modelStores = this.model.get( "valuesAsJson" ) || "{}";
            this.storeData = $( '#bops_store_data', this.$el ).data( 'stores' ) || JSON.parse( modelStores );
            //no data retured from server; hide entire facetType
            if ( _.isEmpty( this.storeData ) ) {
                this.$el.hide();
            }

            if ( !this.isCollapsed() ) {
                this.initBops();
            } else {
                this.on( "facetType:toggle", this.initBops );
            }

            storeLookupChannel.reply( 'render:facets', this.reRenderFacets.bind( this ) );
            storeLookupChannel.reply( 'selectAndTrigger:facets', this.selectAndTriggerFacets.bind( this ) );
        },
        initBops: function ( e ) {
            if ( $( "#bops_store_data", this.$el ).children().length === 0 ) {
                $( "#bops_store_data", this.$el ).height( '150px' ).removeClass( "hidden" );

                //STEP: Set the initial type of search for the user: Postal Code or City/State
                setInitialType();
                this.display();
            }
        },
        display: function () {
            //STEP: Show the loader...remember to hide it when the result of the flow is complete
            Loader.show( '#bops_store_data' );

            //IMPORTANT: display() - this was the BopsSelect.display function
            //STEP: Apply Rule: if there is at least one BOPS store from the server, and the user has a Postal Code set, then we show the "Stores in your Area" UI
            if ( context.user.getPreferred() !== "" ) {
                //THIS BRANCH OF THIS IF WILL RESULT IN EITHER AN "A" OR A "B" view (A = list of facets, b = "No stores in your area")
                //STEP: We have a PostalCode, so make the service call
                this.searchForStores( context.user.getPreferred() );
                if ( this.bopsCXStoreFinderComponentEnabled === "true" ) {
                    this.model.set( 'listAvailableStores', true );
                }
            } else {
                this.renderSearchBox();
                bopsCoreMetrics.trackBopsFacetSearchEvents( bopsCoreMetrics.trackingData.LOCATION_UNKNOWN.eventName );
            }
        },

        selectAndTriggerFacets: function ( locationNumber ) {
            var $facetCheckbox = this.$el.find( "a[data-value=" + locationNumber + "]" );

            if ( $facetCheckbox.length && !$facetCheckbox.hasClass( 'selected' ) ) {
                $facetCheckbox.trigger( 'click' );
            }
        },

        reRenderFacets: function ( searchValue, itemSelected ) {
            if ( searchValue && itemSelected ) {
                this.model.set( 'itemSelected', itemSelected );
                this.selectAndTriggerFacets( itemSelected.locationNumber );
                this.setSelectedValues();
            }
        },

        setSelectedValues: function () {
            var arr = [],
                _this = this,
                selectedValues,
                storesArray = _this.model.get( 'values' );
            $( "div#bops_store_data li > a.selected", this.$el ).each( function ( index ) {
                var atag = $( this );
                var href = atag.attr( "href" );
                var val = atag.data( "value" );
                var name = ( atag.find( '.item' ).text() ).trim();
                arr.push( {
                    val: val,
                    href: href,
                    facetType: _this.model.get( "name" ),
                    name: name
                } );
            } );
            selectedValues = _.uniq( arr, function ( a ) {
                return a.val;
            } );

            _.each( storesArray, function ( val, key ) {
                _.extend( val, {
                    selected: false,
                    listItemClass: "",
                    aClass: ""
                } );
            } );
            this.model.set( 'values', storesArray );
            this.model.set( 'selectedValues', selectedValues );

        },

        searchForStores: function ( searchTerm ) {
            var _this = this,
                radiusToSearch = getSelectedRadius( this.radiusDefault );

            require( [ 'commonjs/collections/Stores' ], function ( StoreCollection ) {
                var storeCollection = new StoreCollection(),
                    itemSelected = _this.model.get( 'itemSelected' );

                var location = {
                    'searchTerm': searchTerm
                };

                //STEP: we need to determine if we got any stores
                _this.listenTo( storeCollection, storeCollection.ON_STORES_DATA, function ( data ) {
                    var values = [],
                        msg,
                        errorTimeout = false,
                        noStoreErrorMsg = "We're sorry, these items aren't available for pick up within ";

                    if ( this.bopsCXStoreFinderComponentEnabled === 'true' ) {
                        errorTimeout = true;
                    }
                    //STEP: if we got stores, then, do they "marry up" to the store:productCount
                    if ( data.stores.length > 0 ) {
                        values = _this.mergeData( data, _this.storeData, radiusToSearch );


                        //A: IF DATA IS RETURNED THEN DISPLAY THE BOPS FACET
                        //STEP: If we have data, then recreate a "facetCollection" for the BopsFacet, and render the ItemView for Bops (BaseFacetView)
                        //STEP: Because this was a successful search, now save the searchTerm as the "preferred" location for the user
                        context.user.setPreferred( searchTerm );

                        //STEP: For the display of the template, the model needs a "postalCode" property added to it
                        _this.model.set( 'postalCode', searchTerm );
                        _this.model.set( "values", values );

                        //STEP: Render the template
                        $( "#bops_store_data", _this.$el ).html( bopsTemplateStoresFound( _this.model.toJSON() ) );

                        //This param is used to check the facets checkbox after the render.
                        if ( itemSelected && itemSelected.locationNumber ) {
                            this.selectAndTriggerFacets( itemSelected.locationNumber );
                        }

                        //BEGIN - this is all about setting the correct height for the facet
                        $( "#bops_store_data", _this.$el ).css( 'height', 'auto' );

                        //END --- this is all about setting the correct height for the facet
                        if ( values.length === 0 ) {
                            if ( this.bopsCXStoreFinderComponentEnabled === 'true' ) {
                                if ( _this.model.get( 'setSelectedRadius' ) ) {
                                    radiusToSearch = _this.model.get( 'setSelectedRadius' );
                                    _this.model.set( 'setSelectedRadius', null );
                                }
                                msg = noStoreErrorMsg + radiusToSearch + " miles of " + searchTerm;
                            } else {
                                msg = 'Sorry, no stores in ' + searchTerm + ' within ' + radiusToSearch + ' miles offer pick up in-store.';
                            }
                            displayError( msg, true, errorTimeout );
                        }

                        _this.resetHeight();
                    } else { //B: ELSE DISPLAY THE "NO STORES IN YOUR AREA" view
                        if ( this.bopsCXStoreFinderComponentEnabled === 'true' ) {
                            this.renderBopsSearch( data, searchTerm, radiusToSearch );
                            if ( _this.model.get( 'setSelectedRadius' ) ) {
                                radiusToSearch = _this.model.get( 'setSelectedRadius' );
                                _this.model.set( 'setSelectedRadius', null );
                            }
                            msg = noStoreErrorMsg + radiusToSearch + " miles of " + searchTerm;
                        } else {
                            msg = 'Sorry, no stores in ' + searchTerm + ' offer pick up in-store.';
                        }
                        displayError( msg, false, errorTimeout );
                    }
                } );

                _this.listenTo( storeCollection, storeCollection.ON_STORES_ERROR, function ( data ) {
                    $( "#bops_store_data", this.$el ).html( bopsTemplateLocationUnknown() );
                    displayError( 'There was a problem searching for stores. Please try again.' );
                    Loader.hide( '#bops_store_data' );
                } );

                _this.listenTo( storeCollection, storeCollection.GEOCODE_ERROR, function ( data ) {
                    if ( data.requireType === 'timeout' ) {
                        displayError( 'There was a timeout in talking with the service.  Please try again later.' );
                    } else {
                        displayError( 'We could not find a valid location for ' + searchTerm + '. Please try another Zip Code.' );
                    }
                    this.renderSearchBox();
                    Loader.hide( '#bops_store_data' );
                } );

                storeCollection.handleSearchRequest( location, {} );
            } );
        },

        renderBopsSearch: function ( data, searchTerm, selectedradius ) {

            var rad = [],
                retval = [],
                radius = this.radiusArray,
                _this = this,
                radiusToSearch = getSelectedRadius( this.radiusDefault );

            _this.getlistofStores( data.stores, selectedradius, _this.storeData, retval );

            if ( _this.model.get( 'setSelectedRadius' ) ) {
                radiusToSearch = _this.model.get( 'setSelectedRadius' );
            }
            _.each( this.radiusArray, function ( val, id ) {
                if ( radius[ id ].toString() === radiusToSearch.toString() ) {
                    rad.push( {
                        'size': radius[ id ],
                        'selected': true
                    } );
                } else {
                    rad.push( {
                        'size': radius[ id ]
                    } );
                }
            } );

            this.model.set( 'radius', rad );
            this.model.set( 'postalCode', searchTerm );
            $( "#bops_store_data", _this.$el ).html( bopsTemplateStoresFound( _this.model.toJSON() ) );
        },


        renderSearchBox: function () {
            $( "#bops_store_data", this.$el ).prepend( bopsTemplateLocationUnknown() );
        },
        getlistofStores: function ( stores, selectedRad, storeToProductCount, retval ) {
            var storeDetails;

            if ( this.bopsCXStoreFinderComponentEnabled === 'true' && this.model.get( 'listAvailableStores' ) ) {
                var _this = this,
                    radValRadiusArray = this.radiusArray.slice();
                storeDetails = _this.getstoreDetails( stores, selectedRad, storeToProductCount, retval );

                if ( !storeDetails.length ) {
                    radValRadiusArray.reverse().splice( radValRadiusArray.indexOf( selectedRad ), radValRadiusArray.length );
                    radValRadiusArray.reverse();
                    var hasStoreDetails = false;
                    _.each( radValRadiusArray, function ( id, val ) {
                        if ( !hasStoreDetails ) {
                            storeDetails = _this.getstoreDetails( stores, id, storeToProductCount, retval );
                            if ( storeDetails.length > 0 ) {
                                hasStoreDetails = true;
                                _this.model.set( 'listAvailableStores', false );
                                setSelectedRadius( id );
                                _this.model.set( 'setSelectedRadius', id );
                            }
                            if ( id === 100 && storeDetails.length === 0 ) {
                                _this.model.set( 'listAvailableStores', false );
                                setSelectedRadius( id );
                                _this.model.set( 'setSelectedRadius', id );
                            }
                        }
                    } );
                } else {
                    setSelectedRadius( selectedRad );
                    _this.model.set( 'setSelectedRadius', selectedRad );
                }
            } else {
                storeDetails = this.getstoreDetails( stores, selectedRad, storeToProductCount, retval );
                this.model.set( 'setSelectedRadius', null );
            }

            return storeDetails;
        },

        getstoreDetails: function ( stores, selectedRad, storeToProductCount, retval ) {
            var radiusArray = this.radiusArray;

            //NOTE: This collection is refined by one other criteria...the "radius" as selected by the user.
            //...so capture the selectedRadius, and only process stores that are under it.
            $( stores ).each( function ( idx, store ) {
                if ( storeToProductCount[ store.locationNumber ] !== undefined && store.distance <= selectedRad ) {
                    retval.push( {
                        "value": store.locationNumber,
                        "displayName": store.storeName,
                        "count": storeToProductCount[ store.locationNumber ]
                    } );
                }
            } );
            return retval;
        },

        mergeData: function ( storesMeta, storeToProductCount, radius ) {
            var retval = [];
            var stores = storesMeta.stores;
            var _this = this;
            var rad = [],
                selectedRad = radius,
                radTemp, i,
                selectedBopsFacets = [];


            retval = _this.getlistofStores( stores, selectedRad, storeToProductCount, retval );

            var selectedValues = this.model.get( 'selectedValues' );
            if ( _this.bopsCXStoreFinderComponentEnabled === "true" ) {
                if ( selectedValues.length ) {
                    this.selectedFacets[ 'UPC_BOPS_PURCHASABLE' ] = [ selectedValues[ 0 ].val.toString() ];
                }
                if ( _this.model.get( 'setSelectedRadius' ) ) {
                    selectedRad = _this.model.get( 'setSelectedRadius' );
                }
            }

            // Set the bopsSelectedFacets if any and setting as undefined in collection.meta.selectedFacets for BOPS as to make
            // this selected bops facet value not part of the subsequent facet call as it is a Single Select Facet.
            if ( this.selectedFacets[ "UPC_BOPS_PURCHASABLE" ] ) {
                selectedBopsFacets = this.selectedFacets[ "UPC_BOPS_PURCHASABLE" ];
                this.selectedFacets[ "UPC_BOPS_PURCHASABLE" ] = undefined;
            }

            // Note: As BOPS selected value is not returned from server on pageLoad, Update the facet values selected and aClass attribute
            // based on "selectedBopsFactes" values to pre-select the facet value values to pre-select the facet value
            if ( selectedBopsFacets.length > 0 ) {
                $( retval ).each( function ( id, facet ) {
                    if ( selectedBopsFacets.indexOf( facet.value.toString() ) !== -1 ) {
                        retval[ id ].selected = true;
                        retval[ id ].aClass = 'selected';
                    }
                } );

                $( ".clearall", _this.$el ).removeClass( "hidden" );
            }

            //NOTE: The following are needed for rendering the values of the template
            this.model.set( 'indexable', false );
            for ( i = 0; i < this.radiusArray.length; i++ ) {
                radTemp = {
                    'size': this.radiusArray[ i ]
                };
                if ( this.radiusArray[ i ].toString() === selectedRad.toString() ) {
                    radTemp.selected = true;
                }
                rad.push( radTemp );
            }
            this.model.set( 'radius', rad );
            this.model.set( 'postalCode', context.user.getPreferred() );

            var att = _this.model.get( 'values' );

            //STEP: Now set the returned values (that have been merged) into the model.
            for ( i = 0; i < retval.length; i++ ) {
                for ( var k = 0; k < att.length; k++ ) {
                    if ( retval[ i ].value.toString() === att[ k ].value.toString() ) {
                        _.defaults( retval[ i ], att[ k ] );
                    }
                }
                _.defaults( retval[ i ], {
                    "selected": false,
                    "url": '',
                    'enabled': true
                } );
            }


            return retval;
        },

        showBopsOverlay: function () {
            var _this = this,
                bopsOverlay = _this.model.bopsLookupInstance;
            if ( _this.bopsCXStoreFinderComponentEnabled === "true" ) {
                $( 'body' ).addClass( 'noScroll' ).css( "overflow", "hidden" );
                require( [ 'mcomBops/storeLookup/StoreLookupApp', 'mcomBopsGME' ], function ( StoreLookupApp, BopsGme ) {
                    var BopsCXStoreChangeSuccessEvent = "bops_storeChangeSuccessful";

                    $( document ).off( BopsCXStoreChangeSuccessEvent ).one( BopsCXStoreChangeSuccessEvent, function ( ev, selectedStoreData ) {
                        setSelectedRadius( selectedStoreData.radius );

                        //update facets with new search criteria.
                        _this.searchForStores( selectedStoreData.search || selectedStoreData.address.zipCode );
                    } );

                    _this.overlay = new StoreLookupApp( _.extend( {
                        distance: getSelectedRadius( _this.radiusDefault ),
                        searchField: context.user.getPreferred(),
                        storeAvailability: $( "#bops_store_data" ).data( "stores" ),
                        pageType: "browse"
                    } ) );

                    $( '.ui-dialog.bopsOverlay.bopsoNewTitle' ).wrap( "<div class='scrollableQV' style='opacity: 1;'></div>" );

                } );

            } else {
                if ( bopsOverlay ) {
                    bopsOverlay.open();
                } else {
                    require( [ 'mcomOverlay', 'mcomjs/features/stores-lookup/Application', 'mcomTemplates/features/stores-lookup/Container' ], function ( Overlay, StoreApp, template ) {
                        function closeOverlay() {
                            if ( StoreApp.getLastSearchTerm().length > 0 ) {
                                context.user.setPreferred( StoreApp.getLastSearchTerm() );
                                _this.display();
                            }
                        }

                        function openOverlay() {
                            StoreApp.launch( context.user.getPreferred() );
                        }

                        bopsOverlay = new Overlay( {
                            title: 'pick up in-store',
                            dialogClass: 'bopsOverlay',
                            modal: true,
                            closeOnClick: true,
                            close: closeOverlay,
                            open: openOverlay
                        } );
                        _this.model.bopsLookupInstance = bopsOverlay;
                        bopsOverlay.setBody( template() );
                        bopsOverlay.open();
                    } );
                }
            }
        }
    } );
} );
