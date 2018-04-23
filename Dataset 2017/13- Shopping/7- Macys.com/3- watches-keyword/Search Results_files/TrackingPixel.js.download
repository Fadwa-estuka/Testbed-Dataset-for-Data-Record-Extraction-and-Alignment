//#MODULE - TrackingPixel
//> Author: Michael Moir
//>
//> Create Date: March 11, 2015
//>
//##DESCRIPTION: This simple module will make an image element.  This img can have a querystring appended to 
//its src attribute in order to send data to the webserver.  This is dependent on the web server end point being 
//set up to receive and respond to http GET requests.
define( [ 'jquery', 'globals' ], function ( $, globals ) {
    //STEP: First, est some variables used by the module
    var pagePixelIndex = 0;

    //STEP: This will be the base domain for the pixel.  It is hard coded here.  But we are also checking in Globals
    // for the value.  This way, in the future, should it change, it only need be added to Globals to make the configurable
    var pixelHost = typeof globals.getValue( 'pixelHost' ) === undefined ? globals.getValue( 'pixelHost' ) : '//assets.macys.com';
    var pathToPixel = "/navapp/img/spacer.gif";

    //###Method - track
    //This is the public method to track for a given querystring.  The formatting of the string is the 
    //responsibility of the caller.
    //> parameters
    //>
    //+ querystring (string) - this is the querystring formatted key/value pairs to track.
    //+ options (obj) - this is a generic object to pass in more information. Can be used in future for more
    //parameters.
    //
    //> returns
    //>
    //+ boolean true.
    function track( querystring, options ) {
        var path = pathToPixel,
            dom = pixelHost,
            append = false;

        //STEP: Check the "options" input parameter.  If it is there, then check possible properties and use them if there
        if ( typeof options === 'object' ) {
            path = options[ 'pathToPixel' ] ? options[ 'pathToPixel' ] : path;
            dom = options[ 'pixelHost' ] ? options[ 'pixelHost' ] : dom;
            if ( options[ 'append' ] && ( options[ 'append' ].toLowerCase() === 'true' || options[ 'append' ] === true ) ) {
                append = true;
            }
        }
        var i = $( "<img/>", {
            "id": 'trk' + ( pagePixelIndex++ ).toString(),
            "class": "no-stretch",
            "width": "1px",
            "height": "1px",
            "src": dom + path + '?' + querystring
        } );

        if ( append ) {
            $( 'body' ).append( i );
        }

        return true;
    }

    return {
        track: track
    };
} );
