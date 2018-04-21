//#MODULE - CitiSignOut
//
//> Author: Cristopher Moreira da Silva  
//>
//> Create Date: March - 2014
//>
//##DESCRIPTION: This module's purpose is to set an event on the sign-out link provided.
// This event stops the local signout, signout from citi (if the user is logged there),
// and only then signs out from local.
// The signout call is tried (parameter times) times before giving up. If in (times) tries
// the citi server doesn't respond successfuly we give up and signout from local anyway.
//
define( [ "cookie", "jquery", "globals", "logger" ], function ( Cookie, $, Globals, Logger ) {
    "use strict";

    var location,
        props = Globals.getValue( "props" ) || {};


    function signOut( signOutURL ) {
        location.href = signOutURL;
    }

    //###Method  handleCitiSignOut()
    //try to signout from citi, then signs out from local.
    //
    //> parameters
    //>
    //+ none
    //
    //> returns
    //>
    //+ nothing
    function handleCitiSignOut( citiSignOutURL, signOutURL ) {

        // This cookie means we are logged on citi as well
        if ( Cookie.get( 'isvict', 'SNSGCs' ) === "Y" ) {
            $.ajax( {
                url: citiSignOutURL,
                dataType: "jsonp",
                cache: true,
                jsonpCallback: 'Callback',
                data: {
                    mode: 'signoff'
                },
                timeout: 1000 // It is enforced, jsonp requests fail silently without a timeout.
                // It always signs out, no matter whether the ajax succeeded or not.
            } ).always( function () {
                signOut( signOutURL );
            } );

        } else {
            signOut( signOutURL );
        }
    }

    //###Method  setEvent( options )
    // Initialize the options and set the event to call handleCitiSignout
    //
    //> parameters
    //>
    //+ *location* - Allow dependency injection of a location object, if one
    //+ doesn't want to use window.location, in tests, for instance.
    //+ *signoutSelector* - The css selector of the signout button
    //
    //> returns
    //>
    //+ nothing
    return function ( options ) {
        options = options || {};
        location = options.location || window.location;

        if ( !options.signoutSelector ) {
            Logger.error( "Citi SignOut error. The signout button selector wasn't provided." );
            return;
        }
        $( options.signoutSelector ).on( 'click', function ( e ) {
            e.preventDefault();
            var signOutURL = $( this ).attr( 'href' ),
                citiSignOutURL = props.partnerFusionBaseURL + "/RSnextgen/svc/launch/signon.action";
            handleCitiSignOut( citiSignOutURL, signOutURL );
        } );
    };
} );
