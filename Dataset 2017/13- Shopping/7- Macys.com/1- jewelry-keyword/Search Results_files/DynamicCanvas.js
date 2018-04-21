/**
 * This module is to render the canvas layout media after the facet meta call.
 */
define( [ 'jquery', 'logger', 'underscore', 'commonjs/features/refineByFacet/DynamicCanvas' ], function ( $, Log, _, DynamicCanvas ) {

    /**
     * To make rendered dynamic media responsive.
     */
    function makeMediaResponsive() {
        var $imageMap = $( '#catSplash img[usemap]' ),
            $bannerMachine = $( '#catSplash div[id^="bannerMachine"]' );

        // To make image map and image responsive.
        if ( $imageMap.length > 0 ) {
            require( [ 'commonjs/components/ResponsiveImageMaps' ], function ( RespIM ) {
                $imageMap.on( 'mouseover', function () {
                    RespIM.makeImageMapsResponsive( $( this ) );
                } );
            } );
        } else {
            $( window ).trigger( 'resize' );
        }

        // To make banner machine responsive.
        if ( $bannerMachine.length > 0 ) {
            require( [ 'mcomjs/components/media/BannerMachine' ], function ( BannerMachine ) {
                BannerMachine.resetComponents();
            } );
        }
    }

    /**
     * To reset the binding of rendered media.
     */
    function resetMediaBinding( canvasLayout ) {
        var $productCarousel = $( 'div.rowCarouselProductPool', canvasLayout );

        // To reset product carousel binding.
        if ( $productCarousel.length > 0 ) {
            require( [ 'mcomjs/components/media/CarouselController' ], function ( CarouselController ) {
                CarouselController.resetList();
            } );
        }
    }

    // Public Methods and Properties
    var module = _.extend( DynamicCanvas, {
        renderCanvasLayout: function ( result ) {
            try {
                var catSplash = $( '#catSplash' ),
                    canvasLayout = $( result.trim() );

                if ( $( 'div.row', canvasLayout ).length ) {
                    var canvasThumbnailGrid = $( 'div.rowThumbnail', canvasLayout );

                    // To reset the binding of rendered media before repainting the new canvas medias.
                    resetMediaBinding( canvasLayout );

                    if ( $( catSplash ).length ) {
                        var thumbnailGrid = $( 'div.rowThumbnail', catSplash );

                        if ( thumbnailGrid.length ) {
                            // Remove all the existing media except original thumbnail grid.
                            $( '> *:not(.rowThumbnail)', catSplash ).remove();

                            if ( canvasThumbnailGrid.length ) {
                                $( thumbnailGrid ).before( $( canvasThumbnailGrid ).prevAll().get().reverse() );
                                $( thumbnailGrid ).after( $( canvasThumbnailGrid ).nextAll() );
                            } else {
                                $( thumbnailGrid ).before( $( canvasLayout ).html() );
                            }
                        } else {
                            // Removing thumbnail grid from canvas response.
                            $( canvasThumbnailGrid ).remove();
                            $( catSplash ).html( $( canvasLayout ).html() );
                        }
                    } else {
                        // Removing thumbnail grid from canvas response.
                        $( canvasThumbnailGrid ).remove();
                        // If canvas layout not already present then insert the entire canvas layout. 
                        $( '#localContentContainer' ).prepend( canvasLayout );
                    }

                    // Invoke after injecting canvas layout in DOM to make media responsive.
                    makeMediaResponsive();
                } else {
                    // Remove all the existing media except thumbnail grid.
                    $( '> *:not(.rowThumbnail)', catSplash ).remove();
                }
            } catch ( ex ) {
                Log.error( "Error in processing dynamic facet canvas layout: ", ex );
            }
        }
    } );

    return module;
} );
