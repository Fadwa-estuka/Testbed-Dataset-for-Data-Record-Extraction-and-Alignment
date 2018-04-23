//#MODULE - Responsive Image Maps
//> Author: Michael Moir
//> Create Date: June 9, 2014
//
//##DESCRIPTION: 
//AMD module to make all image maps of a given page be responsive.  It is a simple two step process:
//1. Instantiate the module through require
//2. Call the modules "make responsive" function, passing in the collection of image maps
define( [ 'jquery' ], function ( $ ) {
    //###Method - makeResponsive
    //This is the main and only "public" function, though its exposed name will be more descriptive.
    //> parameters
    //>
    //+ imageMapCollection - a jQuery collection of images to apply the resposiveness to
    //
    //> returns
    //>
    //+ Nothing.
    var makeResponsive = function ( imageMapCollection ) {
        var $imgs = imageMapCollection;

        //###Method - oneImageMap
        //This is a private method that act upon each image map element.  This is used on
        //load and is re-used as a method for each image upon window.resize()
        //> parameters
        //>
        //+ None.
        //
        //> returns
        //>
        //+ Nothing.
        var oneImageMap = function () {
            //STEP: Loop through all the images in the collection of images passed in, and then act upon each one in the loop.
            $imgs.each( function () {
                //STEP: Quick check: if this does not have an attribute of "usemap" then it is not
                //an image map, therefore end quickly by "returning".
                if ( typeof ( $( this ).attr( 'usemap' ) ) === 'undefined' ) {
                    return;
                }

                //STEP: Make local convenience references to "this".
                var $img = $( this );

                //STEP: The responsive-ness of the image element itself will be handled via
                //very simple CSS.  Ensure that this is applied to each image.
                $img.css( {
                    'max-width': '100%',
                    'width': '100%',
                    'height': 'auto'
                } );

                //STEP: Because of WebKit: we don't know the height of the image until after it is loaded.
                //Therefore, we will make a copy of the image using jquery, and then perform the subsequent
                //actions in the "load()" function of the image object...which ensures it fires after the image is loaded.
                $( '<img />' ).load( function () {
                    var w = $img.attr( 'width' ),
                        h = $img.attr( 'height' );

                    //STEP: Another case, in certain browsers, where we were not able to grab the width/height from the image.
                    //In this case, we make a new Native Image, set its "src" and then we can capture its width/height.
                    if ( !w || !h ) {
                        var temp = new Image();
                        temp.src = $img.attr( 'src' );
                        if ( !w ) {
                            w = temp.width;
                        }
                        if ( !h ) {
                            h = temp.height;
                        }
                    }

                    //STEP: Now get some more local variables, esp the "percent" we will be scaling in each direction (meaning width/height).
                    var wPercent = $img.width() / 100,
                        hPercent = $img.height() / 100,
                        map = $img.attr( 'usemap' ).replace( '#', '' ),
                        c = 'coords';

                    //STEP: We are ready to iterate through the collection of the Image Maps given "areas".
                    //We got the "map" from the "usemap" attribute of the image.  We can iterate through each "area" element of the "map" element.
                    $( 'map[name="' + map + '"]' ).find( 'area' ).each( function () {
                        var $area = $( this );

                        //STEP: This checks that our element has a "coords" attribute for the given "area" element in the "data" attribute.
                        //If it does not, then set it for the given "area" element.
                        if ( !$area.data( c ) ) {
                            $area.data( c, $area.attr( c ) );
                        }

                        //STEP: Create an array of the coordinates, and establish another array which will hold the calculated values at the same index locations.
                        var coords = $area.data( c ).split( ',' ),
                            calc = []; //new Array(coords.length);//[];//[ coords.length ];

                        //STEP: Loop through the array of "coordinates", applying the percent scale to each and capturing the result in the temp array.
                        //NOTE: The pattern for image maps always dictates w,h, and this is 
                        //why we are using "modulus" 2...we are applying the "width" scaling when its a width value and "height" scaling when its a height value.
                        for ( var i = 0; i < coords.length; ++i ) {
                            if ( i % 2 === 0 ) {
                                calc[ i ] = parseInt( ( ( coords[ i ] / w ) * 100 ) * wPercent, 10 );
                            } else {
                                calc[ i ] = parseInt( ( ( coords[ i ] / h ) * 100 ) * hPercent, 10 );
                            }
                        }

                        //STEP: Now reset this "area" element's "coords" attribute with the calculated values.
                        $area.attr( c, calc.toString() );
                    } );
                } ).attr( 'src', $img.attr( 'src' ) );

                //STEP: For unit testing and human testing, we are setting a "data-mapped=y" attribute on the image.  This can be used to verify that this was run on a given image.  Could also be used later to select all the images maps that are responsive.
                $img.attr( 'data-mapped', 'y' );
            } );
        };

        //STEP: Establish a window.resize event and trigger the calling of "oneImageMap".
        $( window ).resize( oneImageMap ).trigger( 'resize' );
    };

    //STEP: Now return the module, which exposed the public methods.
    return {
        makeImageMapsResponsive: makeResponsive
    };

} );
