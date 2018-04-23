//#MODULE - Product Thumbnail Model
//> Author: Sergey Kilipko
//> Create Date: June 30, 2014
//
//##DESCRIPTION: Model for Product Thumbnail.
define( [ 'jquery', 'underscore', 'productThumbnail/models/ProductThumbnail', 'appController', 'globals' ], function ( $, _, ProductThumbnailModel, AppController, Globals ) {

    "use strict";

    var MACYS = window.MACYS,
        isChanel = Globals.getValue( 'isChanel' ),
        JUMBO_WIDTH = 64,
        dynamicTileWidth;

    var colorwayPrimaryImages;

    try {
        colorwayPrimaryImages = JSON.parse( MACYS.colorwayPrimaryImages )[ 0 ];
    } catch ( e ) {
        colorwayPrimaryImages = {};
    }

    return ProductThumbnailModel.extend( {
        TILE_WIDTH: ( ( AppController.isTabletBreakpoint() && !isChanel ) ? 32 : 16 ),

        thumbnailDomain: 'MCY',


        //###Method - initialize
        //This method initializes ProductThumbnail model.
        //> parameters
        //>
        //+ *data* = data to generate model from
        //
        //> returns
        //>
        //+ instance of ProductThumbnail model
        initialize: function ( data ) {
            var self = this;

            // Verifying for data
            if ( data ) {
                var swatches, pixies;
                var isChanel = false;
                var tileWidth = ( !isChanel ) ? 32 : 16;

                swatches = _.map( data.swatchColorList, function ( swatch, index, list ) {
                    return self.buildColorSwatchData( swatch, data, index, list );
                } );

                pixies = {
                    small: self.generateColorSwatchesPixie( swatches, tileWidth ),
                    jumbo: self.generateColorSwatchesPixie( swatches, JUMBO_WIDTH )
                };

                _.each( swatches, function ( swatch, index ) {
                    return self.generateColorSwatchUrls( swatch, data, index, pixies );
                } );

                this.set( 'swatchColorList', swatches );
            }
        },


        //###Method - width
        //This method returns width of product thumbnail.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ width of product thumbnail
        width: function () {
            var gridType = sessionStorage.getItem( 'gridType' );
            /*
             * D-25463 for B-35346 SNB: Blurry Images displayed when changing swatches on Browse and Search results
             */
            if ( gridType === null ) {
                var el = $( ".fourAcross.disabledGrid" );
                if ( el ) {
                    gridType = "3 Column Grid";
                }
            }
            if ( 'PDPZ1' === this.get( 'cmIO' ) ) {
                return 100;
            }
            if ( AppController.isTabletBreakpoint() || gridType === "3 Column Grid" ) {
                return 224;
            } else {
                return 170;
            }

        },

        //###Method - getAlternateImagePath
        //This method builds image path of alternate color swatch image.
        //This data is used by ImageFader component
        //> parameters
        //>
        //+ *color* = color to generate alternate image path for
        //
        //> returns
        //>
        //+ image path to alternate image of given color
        getAlternateImagePath: function ( color ) {
            if ( colorwayPrimaryImages[ this.id ] ) {
                return colorwayPrimaryImages[ this.id ][ color ];
            }

            return '';
        },

        //###Method - buildColorSwatchData
        //This method builds attributes to be consumed by the handlebars template.
        //> parameters
        //>
        //+ *data* = color swatch data
        //+ *model* = product thumbnail data for color swatch
        //+ *index* = index of color swatch in color swatch array
        //+ *list* = list of all color swatches
        //
        //> returns
        //>
        //+ hash with data going to handlebars template
        buildColorSwatchData: function ( data, model, index, list ) {
            var result, swatchCount, fullRows, lastTiles,
                row, mod, colors;

            this.set( {
                TILE_WIDTH: ( ( !isChanel ) ? 32 : 16 )
            } );

            this.TILE_WIDTH = ( ( !isChanel ) ? 32 : 16 );

            var MAX_TILES = 16,
                JUMBO_WIDTH = 64;

            result = {};
            swatchCount = list.length;
            fullRows = parseInt( ( swatchCount ) / MAX_TILES, 10 );
            lastTiles = swatchCount % MAX_TILES;

            row = parseInt( index / MAX_TILES, 10 );
            mod = index % MAX_TILES;

            colors = _.keys( data );

            result.title = colors[ 0 ];
            if ( model.colorFamily && model.colorFamily.hasOwnProperty( result.title ) ) {
                result.family = model.colorFamily[ result.title ];
            }

            result.tileWidth = this.TILE_WIDTH;

            result.path = data[ result.title ];

            result.altPath = this.getAlternateImagePath( result.title );

            // X-offset for background image displacing
            if ( row < fullRows ) {
                result.offset = MAX_TILES * this.TILE_WIDTH - ( mod * this.TILE_WIDTH );
            } else {
                result.offset = ( this.TILE_WIDTH * lastTiles ) - ( mod * this.TILE_WIDTH );
            }

            result.jumboOffset = parseInt( result.offset * JUMBO_WIDTH / this.TILE_WIDTH, 10 );

            return result;
        },

        //###Method - generateColorSwatchUrls
        //This method builds the complete URLs for 3 kind of images - for color swatches background
        //small images, fader and jumbo
        //> parameters
        //>
        //+ *swatch* = color swatch data to generate urls for
        //+ *model* = product model of current color swatch
        //+ *index* = index of color swatch in color swatch array
        //+ *pixies* = pixies hash to use for image urls generation
        //
        //> returns
        //>
        //+ (none)
        generateColorSwatchUrls: function ( swatch, model, index, pixies ) {

            var imageHost = Globals.getValue( 'props.imageHost' );
            swatch.thumb = imageHost + '/?&$b=' + this.thumbnailDomain + '/swatches/' + pixies.small[ 0 ];
            swatch.jumbo = imageHost + '/?&$b=' + this.thumbnailDomain + '/swatches/' + pixies.jumbo[ 0 ];

            if ( swatch.altPath ) {
                swatch.preview = imageHost + '/products/' + swatch.altPath + '?' + model.mediumFilter + '&wid=' + this.width();
            }
        },

        //###Method - updateColorwayPrimaryImages
        //This updates the colorway primary images
        //> parameters
        //>
        //+ *newColorwayPrimaryImages* - the new ColorwayPrimaryImages
        //
        //> returns
        //>
        //+ (none)
        updateColorwayPrimaryImages: function ( newColorwayPrimaryImages ) {
            colorwayPrimaryImages = _.extend( colorwayPrimaryImages, newColorwayPrimaryImages );
        },

        //###Method - isClickable
        //This method returns if a given swatch is clickable or not.
        //If clickable, it should trigger *ImageFader*. Otherwise, *JumboSwatch*.
        //> parameters
        //>
        //+ *index* - the swatch index
        //
        //> returns
        //>
        //+ *true* if the swatch is clickable, *false* otherwise
        isClickable: function ( index ) {
            var swatchColorList = this.get( 'swatchColorList' ),
                altPath;

            index = index || 0;
            altPath = swatchColorList && swatchColorList[ index ] && swatchColorList[ index ].altPath;

            return altPath !== undefined && altPath !== '';
        }

    } );

} );
