//#MODULE - Security
//> Author: Michael Moir
//>
//> Create Date: December 26, 2013
//>
//##DESCRIPTION: This module will contain the specialized encoding/decoding functions that our brands use.
define( [ 'commonUtil/StringUtil' ], function ( stringUtil ) {

    //###Method - preventXss(str) public method that takes in string, and returns the same string, but with the 
    // Cross-Site Scripting offending characters replaced with entities.
    //
    //> parameters
    //>
    //+ *str* - this is the string that we want to prevent XSS
    //
    //> returns
    //>
    //+ The same inputted string, but with the characters that could cause XSS encoded to entities
    function preventXss( str ) {
        var out = str;
        if ( !stringUtil.isEmpty( str ) ) {
            out = out.replace( /</g, "&#60;" );
            out = out.replace( />/g, "&#62;" );
        } else {
            out = "";
        }
        return out;
    }

    //###Method - attemptedScript(str) public method that takes in string, and returns true/false if 
    //any combination of '<script' is detected in the string.
    //
    //> parameters
    //>
    //+ *str* - this is the string that we want to examine
    //
    //> returns
    //>
    //+ Boolean - true if we detect the combination and false if we do not
    function attemptedScript( str ) {
        var r = false;
        if ( str.toLowerCase().indexOf( 'script' ) > 0 ) {
            //STEP: Create the regexp...note the escaped '\' which is necessary cause we are passing a string
            r = new RegExp( "(<|&lt;|&#60;|%3C)\\s*script", 'gi' ).test( str );
        }
        return r;
    }

    return {
        preventXss: preventXss,
        attemptedScript: attemptedScript
    };
} );