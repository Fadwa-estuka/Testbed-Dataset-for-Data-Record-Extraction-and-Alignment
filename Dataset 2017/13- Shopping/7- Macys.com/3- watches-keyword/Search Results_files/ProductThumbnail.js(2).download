//#MODULE - Product Thumbnail Model
//> Author: Cristopher Moreira da Silva
//> Create Date: June 5, 2014
//
//##DESCRIPTION: Model for Product Thumbnail.
define( [ 'underscore', 'jquery', 'backbone', 'globals', 'registryUtil' ], function ( _, $, Backbone, Globals, RegistryUtil ) {

    "use strict";

    var MAX_TILES = 16,
        JUMBO_WIDTH = 64,
        isNewAPI;


    return Backbone.Model.extend( {

        TILE_WIDTH: 16,

        thumbnailDomain: '',

        defaults: {
            loaded: false
        },

        url: function () {
            if ( Globals.getValue( 'props.optimizedThumbnailEnabled' ) === 'true' && RegistryUtil.isRegistry() === false ) {
                isNewAPI = true;
                return '/api/navigation/products/thumbnail/' + this.id;
            } else {
                return '/shop/catalog/product/newthumbnail/json?productId=' + this.id + '&source=118' + ( RegistryUtil.isRegistry() ? '&registry=true' : '' );
            }
        },
        parse: function ( product ) {
            if ( isNewAPI && product ) {
                return product.ProductThumbnailData;
            } else if ( product && product.productThumbnail ) {
                product.productThumbnail.id = product.productThumbnail.ID;
                return product;
            }
        },
        isValid: function () {
            if ( this.attributes.errorMessage ) {
                return false;
            }

            if ( !this.attributes.productThumbnail ) {
                return false;
            }

            if ( Globals.getValue( 'props.colorwayPricingEnabled' ) ) {
                if ( !this.attributes.productThumbnail.colorwayPrice ) {
                    return false;
                }
            } else if ( !this.attributes.priceInfo ) {
                return false;
            }

            return true;
        },

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

                swatches = _.map( data.swatchColorList, function ( swatch, index, list ) {
                    return self.buildColorSwatchData( swatch, data, index, list );
                } );

                pixies = {
                    small: self.generateColorSwatchesPixie( swatches ),
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
            return 170;
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

        //###Method - generateColorSwatchesPixie
        //This method builds the background URLs to be used on the Handlebars template.
        //> parameters
        //>
        //+ *swatches* = array of swathces to generate pixie for
        //+ *tileWidth* = width of each tile in pixie
        //
        //> returns
        //>
        //+ array of generated pixies urls (each url can contain only MAX_TILES tiles)
        generateColorSwatchesPixie: function ( swatches, tileWidth ) {
            var batchIndex = 0,
                currentBatchSize,
                entry,
                entryIndex = 0,
                fullbatchCount,
                innerBatchIndex = 0,
                listLength = swatches.length,
                urlBuffer = '',
                urlList = [];

            if ( !tileWidth ) {
                tileWidth = this.TILE_WIDTH;
            }

            fullbatchCount = parseInt( ( listLength / MAX_TILES ), 10 );

            for ( ; entryIndex < listLength; entryIndex++ ) {
                entry = swatches[ entryIndex ];

                if ( batchIndex < fullbatchCount ) {
                    currentBatchSize = MAX_TILES;
                } else {
                    currentBatchSize = listLength % MAX_TILES;
                }

                if ( innerBatchIndex === 0 ) {
                    urlBuffer += '&layer=0&size=' + parseInt( currentBatchSize * tileWidth, 10 ) + "," + tileWidth +
                        "&src=is{$b$" + entry.path + "}&cropN=0,0," + currentBatchSize + ",1&anchor=0,0";
                    innerBatchIndex += 1;
                } else if ( innerBatchIndex < currentBatchSize ) {
                    urlBuffer += '&layer=' + innerBatchIndex + "&size=" + tileWidth + "," + tileWidth +
                        "&src=is{$b$" + entry.path + "}&anchor=0,0&posN=" + ( 1.0 / currentBatchSize * innerBatchIndex ).toFixed( 3 ) + ",0";

                    innerBatchIndex += 1;
                }

                if ( innerBatchIndex === currentBatchSize ) {
                    innerBatchIndex = 0;
                    batchIndex += 1;

                    urlBuffer += '&layer=' + currentBatchSize + "&op_sharpen=1&fmt=jpeg&qlt=90,0&hei=" + tileWidth;

                    urlList.push( urlBuffer );
                    urlBuffer = '';
                }
            }

            return urlList;
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
            var offset = parseInt( index / MAX_TILES, 10 ),
                imageHost = Globals.getValue( 'props.imageHost' );

            swatch.thumb = imageHost + '/?&$b=' + this.thumbnailDomain + '/swatches/' + pixies.small[ offset ];
            swatch.jumbo = imageHost + '/?&$b=' + this.thumbnailDomain + '/swatches/' + pixies.jumbo[ offset ];

            if ( swatch.altPath ) {
                swatch.preview = imageHost + '/products/' + swatch.altPath + '?' + model.mediumFilter + '&wid=' + this.width();
            }
        }

    } );

} );
