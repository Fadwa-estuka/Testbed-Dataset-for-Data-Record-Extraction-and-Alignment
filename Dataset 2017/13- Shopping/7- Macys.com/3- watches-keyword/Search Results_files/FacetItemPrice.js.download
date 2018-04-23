define( [ 'underscore', 'jquery', 'commonjs/features/refineByFacet/views/BaseFacetView', 'mcomTemplates/features/refineByFacet/customprice' ], function ( _, $, BaseFacetView, template ) {

    var initialized = false,
        customPrice, selectedValues = [];

    function extractcustomPriceFromData( options ) {
        var retval = '',
            values = [];
        try {
            selectedValues = options.model.collection.meta.selectedFacets[ 'PRICE' ];
            values = options.model.attributes.values;

            if ( !_.isUndefined( selectedValues ) ) {
                $( selectedValues ).each( function ( x, aSelectedValue ) {
                    var match = false;
                    $( values ).each( function ( y, aValue ) {
                        if ( aSelectedValue === aValue.value ) {
                            match = true;
                            return false;
                        }
                        return true;
                    } );
                    if ( match ) {
                        return false;
                    }
                    retval = aSelectedValue;
                    return true;
                } );
            }
        } catch ( e ) {
            retval = '';
        }
        return retval;
    }

    function getCustomFacetDataFromDom( parentSelector ) {
        return {
            facetName: $( parentSelector ).attr( 'id' ),
            facetValue: $( 'li[data-custom=true] a', parentSelector ).data( 'value' ),
            facetType: $( parentSelector ).attr( 'id' ),
            selected: false
        };
    }

    function removeSelectedFromCustom( parentSelector ) {
        $( 'li[data-custom=true]', parentSelector ).removeClass( 'selected' ).children( 'a' ).removeClass( 'selected' );
    }

    return BaseFacetView.extend( {
        facetEvents: {
            "click #submitCustomPrice": "submitPrice",
            'click .facet_name': 'doTogglePrice',
            "click li > a": "triggerPriceClick",
            "click li[data-custom=true] > a": "deselectCustomFacet"
        },
        deselectCustomFacet: function ( eventName ) {
            removeSelectedFromCustom( this.el );
            this.trigger( eventName, getCustomFacetDataFromDom( this.el ) );
        },
        triggerPriceClick: function ( e ) {
            //STEP: If there is a Custom Price in the list, then we handle a little differently, cause "Custom Price" is "single select"
            if ( $( 'li[data-custom=true]', this.$el ).length > 0 ) {
                e.preventDefault();
                e.stopPropagation();
                this.facetItemClick( e );
                this.deselectCustomFacet( "facet:deselect" );
            } else {
                this.triggerItemClick( e );
            }
        },

        displayError: function ( msg, doTimer ) {
            var _this = this;
            var bTimer = doTimer || true;
            var errId = '#customPriceError',
                inputId = '#customPrice';
            if ( $( errId ).length === 0 ) {
                $( inputId ).before( '<span id="customPriceError" class="errorHiglight"></span>' );
            }
            $( errId ).empty();
            if ( msg.length > 0 ) {
                $( errId ).html( msg ).fadeIn( 'fast', function () {
                    _this.resetHeight();

                } );
                $( inputId ).addClass( 'error' );
            }
            if ( bTimer ) {
                setTimeout( function () {
                    $( errId ).fadeOut( 'slow', function () {
                        $( this ).empty();
                        $( inputId ).removeClass( 'error' );
                        _this.resetHeight();
                    } );
                }, 4000 );
            }
        },

        initialize: function ( options ) {
            customPrice = extractcustomPriceFromData( options );

            var _this = this;
            //STEP: lets allow a short delay to allow template to render our UL before we try to manipulate it
            _.delay( function () {
                if ( customPrice.length > 0 ) {
                    var parts = customPrice.split( '|' );
                    _this.updateCustomPrice( parts[ 1 ], parts[ 0 ], function () {
                        try {
                            // Removing the custom price value from the collection meta object once it rendered in the DOM.
                            options.model.collection.meta.selectedFacets[ 'PRICE' ] = selectedValues.remove( customPrice );
                        } catch ( exp ) {

                        }
                        _this.toggleClearButton();
                        _this.initSeq( options );
                        if ( _this.isCollapsed() ) {
                            _this.doToggle();
                        }
                    } );
                } else if ( !_this.isCollapsed() ) {
                    _this.initSeq( options );
                }

                //STEP: Run the "toggleClearButton" function for this facet because the base module will run it for only uncollapsed facets
                _this.toggleClearButton();

            }, 250 );
        },
        initSeq: function ( options ) {
            this.initialized = true;
            this._super( options );
            this.addInputs();
            this.trigger( 'facetnav:toggleClearAllButton' );
        },

        doTogglePrice: function ( e ) {
            if ( !this.initialized ) {
                this.initSeq( this.options );
            }
            this.doToggleSingle( e );
        },

        submitPrice: function ( e ) {
            //STEP: First clear out any selections already there for price:
            $( "a", this.$el ).removeClass( "selected" );

            function isValidInputs( to, from ) {
                to = parseInt( to, 10 );
                from = parseInt( from, 10 );
                if ( _.isNaN( to ) || _.isNaN( from ) ) {
                    return false;
                }
                if ( _.isNumber( to ) === false || _.isNumber( from ) === false ) {
                    return false;
                }
                if ( to < 1 || to > 9999 || from < 1 || from > 9999 ) {
                    return false;
                }
                if ( from >= to ) {
                    return false;
                }
                return true;
            }
            var from = $( "#fromValue", this.$el ).val();
            var to = $( "#toValue", this.$el ).val();

            //Quick validation: don't submit if it doesn't pass
            if ( isValidInputs( to, from ) ) {
                //STEP: Clear custom price if there is one:
                this.deselectCustomFacet( "facet:turnoff" );

                this.updateCustomPrice( to, from );
                var val = from + '|' + to;

                this.trigger( "facet:item:click", val, {
                    'facetValue': val,
                    'facetType': this.model.get( "name" )
                } );
            } else {
                this.displayError( "please enter a range from 1 to 9999", true );
            }
        },
        addInputs: function ( options ) {
            var model = {
                'min': 1,
                'max': 9999
            }, parts = [];
            if ( customPrice.length > 0 ) {
                parts = customPrice.split( '|' );
                model[ 'from' ] = parts[ 0 ];
                model[ 'to' ] = parts[ 1 ];
            }
            $( ".listbox", this.$el ).append( template( model ) );
            this.resetHeight();
        },
        updateCustomPrice: function ( to, from, callback ) {
            var _this = this;
            if ( $( '.listbox li[data-custom=true]', this.$el ).length === 0 ) {
                this.addCustomPriceToList( to, from );
                this.trigger( 'facetnav:toggleClearAllButton' );
            }

            require( [ 'iShip' ], function ( Intl ) {
                var dataValue = from + "|" + to,
                    curcode = Intl.getCurrencyCode(),
                    val = curcode + from + " - " + curcode + to,
                    aTag = $( '.listbox li[data-custom=true]', _this.$el ).addClass( 'selected' ).children( 'a' ).addClass( 'selected' );
                $( aTag ).data( 'value', dataValue ).children( '.item' ).text( 'Custom: ' + val );
                $( aTag ).children( 'span[class^=item]' ).attr( 'title', '' );
                $( aTag ).children( '.item_count' ).text( '' );

                if ( _.isFunction( callback ) ) {
                    callback();
                }
            } );
        },
        addCustomPriceToList: function ( to, from ) {
            var _this = this,
                copied;
            //STEP: Clone one of the existing line items already there for this facet,
            //...Update the correct values with this custom data,
            //...Add the cloned line item to the current list
            $( '.listbox ul', this.$el ).append( function () {
                copied = $( '.listbox li:has(a)', _this.$el ).first().clone();
                $( copied ).attr( {
                    'data-custom': 'true',
                    'id': 'custompriceitem'
                } );
                return copied;
            } );
        }
    } );
} );
