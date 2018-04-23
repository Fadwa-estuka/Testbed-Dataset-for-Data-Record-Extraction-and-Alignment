//#MODULE - MCOM Product Thumbnail Loader
//> Author: Tiago Garcia
//> Create Date: July 2, 2014
//
//##DESCRIPTION: This is used to load Product Thumbnails from JSON script tags for MCOM.

define( [ 'jquery', 'underscore', 'globals', 'productThumbnail/ProductThumbnailLoader', 'mcomProductThumbnail/models/ProductThumbnail', 'mcomProductThumbnail/views/ProductThumbnail', "mcomjs/components/gridView/GridViewController" ], function ( $, _, Globals, productThumbnailLoader, MCOMProductThumbnailModel, MCOMProductThumbnailView, GridViewController ) {

    "use strict";

    var breakpoint = ( Globals.getValue( 'props' ) ) ? Globals.getValue( 'props' ).tabletUIPixelWidthBreakpoint : 1024,
        RESPONSIVE = parseInt( 70, 10 ),
        NONRESPONSIVE = parseInt( 71, 10 );

    var largeThumb = '224',
        smallThumb = '170',
        smallThumbWidth = 'wid=' + smallThumb,
        largeThumbWidth = 'wid=' + largeThumb;

    //probably don't need: breakpoint = Globals.getValue( 'props.tabletUIPixelWidthBreakpoint' ),

    //Experiment segments
    var TABLETPAGINATION15C = parseInt( 297, 10 ),
        BACKTOTOP15C = parseInt( 287, 10 );

    //###Method - loadProductThumbnail
    //This method coordinates the whole process of loading product thumbnails.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function loadProductThumbnails( selectedColorFacetsString ) {
        updateColorwayPrimaryImages();
        buildBreadCrumb();
        productThumbnailLoader.loadProductThumbnails( MCOMProductThumbnailModel, MCOMProductThumbnailView, '#macysGlobalLayout', getProductThumbnailEl );
        productThumbnailLoader.activateSelectedFacets( selectedColorFacetsString !== undefined ? selectedColorFacetsString : getSelectedColorFacets() );
        initSwatchWrapper();
        sizeThumbnails();
    }

    function sizeThumbnails() {
        var gridType = GridViewController.getUserStoredSelectedOptions().gridSelectedLayout;
        $( '.thumbnails .thumbnailImage' ).each( function () {
            var _this = $( this );
            var dataSrc = _this.data( 'src' );
            if ( dataSrc !== undefined ) {

                if ( $( document ).width() <= breakpoint || gridType === 3 ) {
                    dataSrc = dataSrc.replace( smallThumbWidth, largeThumbWidth );
                } else {
                    dataSrc = dataSrc.replace( largeThumbWidth, smallThumbWidth );
                }

                if ( ( _this.attr( 'src' ) !== dataSrc ) ) {
                    _this.attr( 'src', dataSrc );
                    _this.data( 'src', dataSrc );

                    //This covers the thumbnail.jsp image code that is still in navapp, in which
                    //data-src in html must be updated in addition to the jquery data-src above
                    _this.attr( 'data-src', dataSrc );
                }
            }

        } );

        $( '.thumbnails INPUT.image_org' ).each( function () {
            var _this = $( this );
            var newValue = _this.attr( 'value' );
            if ( $( document ).width() <= breakpoint || gridType === 3 ) {
                newValue = newValue.replace( smallThumbWidth, largeThumbWidth );
            } else {
                newValue = newValue.replace( largeThumbWidth, smallThumbWidth );
            }
            _this.attr( 'value', newValue );

        } );
    }

    //###Method - initSwatchWrapper
    //This method initializes the swatch wrapper
    //> parameters
    //>
    //+ (val)
    //
    //> returns
    //>
    //+ (none)
    function initSwatchWrapper( val ) {

        var isChanel = Globals.getValue( 'isChanel' );
        if ( !isChanel ) {
            setSwatchWrapperWidth();
            $( window ).resize( function () {
                setSwatchWrapperWidth();
            } );
        }
    }

    //###Method - setSwatchWrapperWidth
    //This method sets the wrapper width
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function setSwatchWrapperWidth() {
        //QuickFix1: Use better selector >  .morecolors
        $.each( $( '.morecolors' ), function ( i, val ) {
            var gridType = GridViewController.getUserStoredSelectedOptions().gridSelectedLayout;
            var tabletView = false;
            var swatches2 = $( val ).children( '.color-swatch' );
            var morecolorswrapper = $( val ).parent( '.morecolorswrapper' );
            var swatchScrollWidth = 32;
            if ( $( document ).width() <= breakpoint ) {
                tabletView = true;
                gridType = 3;
                swatchScrollWidth = ( /Android|iPhone|iPad|iPod/i.test( navigator.userAgent ) ) ? 38 : 36;
            } else {
                if ( gridType === 3 ) {
                    swatchScrollWidth = swatchScrollWidth + 4;
                }
            }
            var newWidth2 = Math.round( swatches2.length * swatchScrollWidth );
            var morecolorscontrol = morecolorswrapper.parent( '.morecolorscontrol' );
            var morecolorsleft = morecolorswrapper.siblings( '.moreleft' );
            var morecolorsright = morecolorswrapper.siblings( '.moreright' );

            // After resizing show the buttons and remove already binded listeners
            morecolorsleft.show();
            morecolorsright.show();
            morecolorsleft.off( 'click' );
            morecolorsright.off( 'click' );
            $( val ).css( {
                'left': '0',
                'width': 'auto'
            } );
            // 28 is the width of the color swatch. If new width is greater than one swatch width from the container width
            if ( newWidth2 >= ( ( $( val ).width() * 0.945 ) ) ) {
                $( val ).width( newWidth2 );
                morecolorscontrol.addClass( 'hidearrowsleft' );
                morecolorsleft.hide();
                morecolorswrapper.scroll( function () {
                    var left = $( this ).scrollLeft();
                    if ( left === 0 ) {
                        morecolorscontrol.addClass( 'hidearrowsleft' );
                        morecolorsleft.hide();
                    } else if ( left > 0 ) {
                        morecolorscontrol.removeClass( 'hidearrowsleft' );
                        morecolorsleft.show();
                        if ( left >= ( $( val ).width() - morecolorscontrol.width() - 1 ) ) {
                            morecolorscontrol.addClass( 'hidearrowsright' );
                            morecolorsright.hide();
                        } else {
                            morecolorscontrol.removeClass( 'hidearrowsright' );
                            morecolorsright.show();
                        }
                    }
                } );
            } else {
                //hide arrows
                morecolorscontrol.addClass( 'hidearrowsleft' ).addClass( 'hidearrowsright' );
                morecolorsleft.hide();
                morecolorsright.hide();
            }
            var firstSwatch = $( val ).find( "li:first" ).index();
            var lastSwatch = $( val ).find( "li:last" ).index();

            if ( $( val ).find( "li:last" ).hasClass( 'more-button' ) ) {
                lastSwatch -= 1;
            }
            var currentSwatch = firstSwatch;
            var nextSwatch;
            var prevSwatch = lastSwatch;
            var marginLeft = 0;
            var numSwatchesToScroll = 1;
            if ( gridType === 3 ) {
                nextSwatch = firstSwatch + 4;
            } else {
                nextSwatch = firstSwatch + 3;
            }
            morecolorsleft.on( "click", function () {

                if ( gridType === 3 ) {
                    prevSwatch = currentSwatch - 4;

                    if ( prevSwatch > 0 ) {
                        numSwatchesToScroll = 4;
                        currentSwatch = prevSwatch;
                        morecolorsright.show();
                        nextSwatch = nextSwatch - numSwatchesToScroll;
                    } else {
                        numSwatchesToScroll = currentSwatch;
                        prevSwatch = firstSwatch;
                        currentSwatch = firstSwatch;
                        morecolorsleft.hide();
                        morecolorsright.show();
                        nextSwatch = firstSwatch + 4;

                    }

                } else {
                    prevSwatch = currentSwatch - 3;

                    if ( prevSwatch > 0 ) {
                        numSwatchesToScroll = 3;
                        currentSwatch = prevSwatch;
                        morecolorsright.show();
                        nextSwatch = nextSwatch - numSwatchesToScroll;
                    } else {
                        numSwatchesToScroll = currentSwatch;
                        prevSwatch = firstSwatch;
                        currentSwatch = firstSwatch;
                        morecolorsleft.hide();
                        morecolorsright.show();
                        nextSwatch = firstSwatch + 3;

                    }
                }

                $( val ).animate( {
                    left: ( "+=" + numSwatchesToScroll * ( swatchScrollWidth ) )
                }, "fast" );
            } );
            morecolorsright.on( "click", function () {
                if ( gridType === 3 ) {
                    if ( nextSwatch + 4 < lastSwatch ) {
                        currentSwatch += 4;
                        nextSwatch = nextSwatch + 4;
                        numSwatchesToScroll = 4;

                    } else {
                        numSwatchesToScroll = lastSwatch - nextSwatch;
                        nextSwatch = lastSwatch;
                        currentSwatch = currentSwatch + numSwatchesToScroll;
                        morecolorsright.hide();
                    }
                } else {

                    if ( nextSwatch + 3 < lastSwatch ) {
                        currentSwatch += 3;
                        nextSwatch = nextSwatch + 3;
                        numSwatchesToScroll = 3;
                    } else {
                        numSwatchesToScroll = lastSwatch - nextSwatch;
                        nextSwatch = lastSwatch;
                        currentSwatch = currentSwatch + numSwatchesToScroll;
                        morecolorsright.hide();
                        morecolorsleft.show();
                    }

                }

                $( val ).animate( {
                    left: ( "-=" + numSwatchesToScroll * ( swatchScrollWidth ) )
                }, "fast" );

                marginLeft = nextSwatch * swatchScrollWidth;

                morecolorsleft.show();



            } );
            // center align swatches if 2 or 3 swatches available
            var morecontrolwidth = "94.5%";
            if ( $( document ).width() <= breakpoint || gridType === 3 ) {
                morecontrolwidth = "95%";
            }
            switch ( swatches2.length ) {
            case 2:
                morecontrolwidth = ( gridType === 3 ) ? ( tabletView ? "40%" : "39%" ) : "50%";
                morecolorscontrol.css( {
                    "width": morecontrolwidth,
                    "margin-left": "auto",
                    "margin-right": "auto"
                } );
                break;
            case 3:
                morecontrolwidth = ( gridType === 3 ) ? ( tabletView ? "63%" : "56%" ) : "75%";
                morecolorscontrol.css( {
                    "width": morecontrolwidth,
                    "margin-left": "auto",
                    "margin-right": "auto"
                } );
                break;
            case 4:
                if ( gridType === 3 ) {
                    morecolorscontrol.css( {
                        "width": ( tabletView ? "86%" : "80%" ),
                        "margin-left": "auto",
                        "margin-right": "auto"
                    } );
                }
                break;
            default:
                morecolorscontrol.css( {
                    "width": morecontrolwidth,
                    "margin-left": "auto",
                    "margin-right": "auto"
                } );
                break;
            }
        } );
    }

    //###Method - updateColorwayPrimaryImages
    //This method updates the colorway primary images response from AJAX requests.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function updateColorwayPrimaryImages() {
        var newColorwayPrimaryImages,
            newColorwayPrimaryImagesEl = $( '#colorwayPrimaryImagesAjax' );

        if ( newColorwayPrimaryImagesEl.length ) {
            newColorwayPrimaryImages = parseColorwayJSON( newColorwayPrimaryImagesEl.html() )[ 0 ];
            MCOMProductThumbnailModel.prototype.updateColorwayPrimaryImages( newColorwayPrimaryImages );
        }
    }

    //###Method - parseColorwayJSON
    //This method parses the colorway JSON response from AJAX requests.
    //> parameters
    //>
    //+ *jsonString* - the string representation of the JSON
    //
    //> returns
    //>
    //+ an object representation of the JSON
    function parseColorwayJSON( jsonString ) {
        var jsonObject;

        jsonString = jsonString
            .replace( /\n/g, '' )
            .replace( /\r/g, '' )
            .replace( /\t/g, ' ' )
            .replace( /<!--[^(-->)]+-->/g, '' )
            .replace( /\\\'/g, '\'' );

        try {
            jsonObject = JSON.parse( jsonString );
        } catch ( e ) {
            jsonObject = {};
        }
        return jsonObject;
    }

    //###Method - buildBreadCrumb
    //This method builds the bread crumb to be consumed by coremetric tags
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function buildBreadCrumb() {
        var breadCrumbEl = $( '#breadcrumb' );
        if ( breadCrumbEl.length ) {
            Globals.setValue( 'breadcrumb', breadCrumbEl.val().replace( /-[\w]+-/, "-" ).replace( /-/g, " - " ) );
        }
    }

    //###Method - getProductThumbnailEl
    //This method gets the product thumbnail et
    //> parameters
    //>
    //+ *productThumbnailModel* - the brand-specific model instance for product thumbnails
    //
    //> returns
    //>
    //+ the el for the product thumbnail
    function getProductThumbnailEl( productThumbnailModel ) {
        var thumbCat, thumbCatSelector,
            uniqueId = productThumbnailModel.get( 'uniqueId' );

        if ( uniqueId && uniqueId.split( '_' )[ 2 ] ) {
            thumbCat = productThumbnailModel.get( 'uniqueId' ).split( '_' )[ 2 ];
            thumbCatSelector = 'ul.thumbnails[data-thumb-cat=' + thumbCat + ']';
        }

        return $( '#' + productThumbnailModel.get( 'elementId' ), thumbCatSelector );
    }

    //###Method - getSelectedColorFacets
    //This method gets the list of color swatches selected on facets
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ a list of selected colors
    function getSelectedColorFacets() {
        var selectedFacetEl = $( '#selectedColorValue' ),
            selectedFacets = [];

        if ( selectedFacetEl.length ) {
            selectedFacets = selectedFacetEl.text().split( ";;" );
        }

        return selectedFacets;
    }

    return {
        loadProductThumbnails: loadProductThumbnails,
        sizeThumbnails: sizeThumbnails
    };

} );
