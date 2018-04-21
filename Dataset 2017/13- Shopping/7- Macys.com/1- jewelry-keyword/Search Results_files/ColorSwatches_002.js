//#MODULE - MCOM Color Swatches View
//> Author: Tiago Garcia
//> Create Date: June 9, 2014
//
//##DESCRIPTION: This is the Backbone view to display color swatches for MCOM.

define( [ 'jquery', 'underscore', 'backbone', 'globals', 'pubsub', 'appController', 'colorSwatches/views/ColorSwatches', 'mcomColorSwatchesTemplates/colorSwatches' ], function ( $, _, Backbone, Globals, PubSub, AppController, ColorSwatchesView, template ) {

    "use strict";

    // Ensuring global variables are made local to the module for coding consistency
    var MACYS = window.MACYS;

    return ColorSwatchesView.extend( {

        ///### The current selected color swatch
        selectedColorSwatch: undefined,

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
            ColorSwatchesView.prototype.initialize.apply( this, [ options ] );
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
            var data = {},
                params,
                model = this.model.toJSON(),
                self = this,
                searchColor,
                preSelected = false,
                productIdToSearchColorMap,
                productIdToSearchColorMapDiv,
                searchColorEnabled = Globals.getValue( 'props.searchColorEnabled' );


            if ( !model || !model.moreColors ) {
                return;
            }

            data.id = model.elementId;
            data.uniqueId = model.uniqueId;

            if ( model.suppressColorSwatches || model.cmIO ) {
                params = data.morecolors = {};

                if ( 'PDPZ1' === model.cmIO ) {
                    params.text = 'more colors';
                } else if ( !model.suppressProductAttribute ) {
                    params.text = 'more colors';
                    params.available = ' available';
                }
            } else {
                params = data.swatches = {
                    items: []
                };

                if ( model.swatchColorList.length > 8 ) {
                    params.button = {
                        id: model.id + '_moreBtn_cat',
                        title: model.uniqueId
                    };
                }

                if ( model.swatchColorList.length >= 5 ) {
                    params.showMoreColorsArrows = true;
                } else {
                    params.showMoreColorsArrows = false;
                }

                params.items = model.swatchColorList.slice( 0 );


                if ( searchColorEnabled === 'true' ) {
                    productIdToSearchColorMapDiv = $( '#productIdToSearchColorMap' );
                    if ( productIdToSearchColorMapDiv.length > 0 ) {
                        productIdToSearchColorMap = JSON.parse( productIdToSearchColorMapDiv.text() );
                        searchColor = ( productIdToSearchColorMap[ model.id ] ) ? productIdToSearchColorMap[ model.id ].split( "," ) : [];
                    } else if ( model.searchColorOverride ) {
                        searchColor = model.searchColorOverride.split( "," );
                    }

                    _.some( searchColor, function ( color, i, colors ) {
                        if ( self.selectSearchColorOnColorSwatch( params.items, color ) ) {
                            preSelected = true;
                        }
                    } );
                }

                _.each( params.items, function ( item, index, items ) {
                    item.classes = ( item.classes ) ? item.classes : [ 'ipopSwatch' ];

                    if ( !( items.length <= 8 || index + 1 <= 5 ) ) {
                        item.classes.push( 'morecolorsHidden' );
                    }

                    if ( model.primaryColor && model.primaryColor === item.title && !preSelected ) {
                        item.classes.push( self.getSwatchSelectedClass() );
                    }

                    if ( !model.clickableSwatch ) {
                        item.classes.unshift( 'morecolorsli' );
                    }

                    item.id = model.uniqueId + '_li_' + ( index + 1 );
                    item.classes = item.classes.join( ' ' );
                } );
            }

            this.$el.html( template( data ) );

            this.selectedColorSwatch = this.$el.find( '.' + self.getSwatchSelectedClass() );

            if ( searchColorEnabled === 'true' && preSelected ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    facetSelection: true,
                    el: this.selectedColorSwatch,
                    event: 'activatePermanently'
                } );
            }
        },

        //###Method - selectSearchColorOnColorSwatch
        //This method selects the search color on colorswatch
        //> parameters
        //>
        //+ *swatchColor* - colorswatch array
        //+ *searchColor* - search color value (taken from service)
        //
        //> returns
        //>
        //+ (none)
        selectSearchColorOnColorSwatch: function ( swatchColor, searchColor ) {
            var colorMatch, matchedIndex, colorFlag;

            searchColor = searchColor.toLowerCase();
            colorMatch = _.find( swatchColor, function ( colorlist ) {
                return colorlist.title && colorlist.title.toLowerCase() === searchColor;
            } );

            if ( !colorMatch ) {
                colorMatch = _.find( swatchColor, function ( colorlist ) {
                    return colorlist.family && colorlist.family.toLowerCase() === searchColor;
                } );
            }

            if ( colorMatch ) {
                colorMatch.classes = [ 'ipopSwatch' ];
                colorMatch.classes.push( this.getSwatchSelectedClass() );
                matchedIndex = _.indexOf( swatchColor, colorMatch );
                swatchColor[ matchedIndex ] = colorMatch;
                colorFlag = true;
            }
            return colorFlag;
        },

        //###Method - activatePermanently
        //This method sets the behavior when a color swatch is permanently activated.
        //> parameters
        //>
        //+ *message* - the message from pub/sub
        //
        //> returns
        //>
        //+ (none)
        activatePermanently: function ( message ) {
            var $element = $( message.el );

            this.resetColorSwatches();

            if ( !message.facetSelection ) {
                this.createCmTagForSwatchActivation();
            }

            if ( this.selectedColorSwatch.length ) {
                this.selectedColorSwatch.removeClass( this.getSwatchSelectedClass() );
            }

            $element.addClass( this.getSwatchSelectedClass() );

            PubSub.observe( this.pubsubChannel ).publish( {
                parameter: 'swatchColor',
                value: $element.attr( 'title' ),
                event: 'updateLinks'
            } );

            Globals.setValue( 'selectedColorSwatchProdIDInBrowse', this.model.get( 'id' ) );

            // TODO to be removed after Quickview start consuming it from Globals
            if ( MACYS && MACYS.quickView ) {
                MACYS.quickView.selectedColorSwatchProdIDInBrowse = this.model.get( 'id' );
            }

            if ( $element.attr( 'id' ).indexOf( "_wr" ) === -1 ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    event: 'updateProductCache'
                } );
            }

            this.selectedColorSwatch = $element;
        },

        //###Method - getSwatchSelectedClass
        //This method returns the correct CSS class for a selected swatch.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        getSwatchSelectedClass: function () {
            return this.model.get( 'clickableSwatch' ) ?
                'clickableSwatchSelected' : 'nonClickableSwatchSelected';
        },

        //###Method - resetColorSwatches
        //Reset is needed as we are updating the product cache with the
        //thumbnail div having the *clickableSwatchSelected*/*nonClickableSwatchSelected*
        //class. When user is navigating back and forth using pagination,
        //we need to remove these classes manually.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        resetColorSwatches: function () {
            var colorSwatches = this.$el.find( 'li.color-swatch' );
            colorSwatches.each( function ( index, element ) {
                $( element ).removeClass( 'clickableSwatchHover' );
            } );
        },

        //###Method - createCmTagForSwatchActivation
        //This method creates a Coremetrics tag for a color swatch activation.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        createCmTagForSwatchActivation: function () {
            var cmCreatePageElementTag = window.cmCreatePageElementTag;

            if ( cmCreatePageElementTag && typeof cmCreatePageElementTag === 'function' ) {
                var tag = this.model.get( 'clickableSwatch' ) ?
                    'BROWSE CLICKABLE SWATCH' : 'BROWSE NONCLICKABLE SWATCH';

                cmCreatePageElementTag( Globals.getValue( 'breadcrumb' ), tag );
            }
        },

        //###Method - activateFacets
        //This method permanently activates color swatches selected by facets.
        //> parameters
        //>
        //+ *message* - the message from pub/sub
        //
        //> returns
        //>
        //+ (none)
        activateFacets: function ( message ) {
            var colorSwatchId,
                colorSwatches = this.model.get( 'swatchColorList' );

            colorSwatchId =
                _.flatten(
                    _.map(
                        message.facetValues,
                        function ( facetValue ) {
                            return _.pluck(
                                _.filter( colorSwatches, function ( colorSwatch ) {
                                    return colorSwatch.family && colorSwatch.family.toLowerCase() === facetValue.toLowerCase();
                                } ), 'id' );
                        } )
            )[ 0 ];

            if ( colorSwatchId ) {
                PubSub.observe( this.pubsubChannel ).publish( {
                    facetSelection: true,
                    el: this.$el.find( '#' + colorSwatchId ),
                    event: 'activatePermanently'
                } );
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
            this.selectedColorSwatch = null;
            this.undelegateEvents();
            ColorSwatchesView.prototype.remove.call( this );
        }

    } );

} );
