//#MODULE - Header
//> Author: Narendra Akula
//>
//> Create Date: August 12th, 2016
//>
//##DESCRIPTION: this module used to encode search keyword as per SEO rules.


define( [ 'jquery', 'underscore' ], function ( $, _ ) {

    function encodeSearchPhrase( searchMetaObj ) {
        // escape function does not encode reserved characters @-*_+./
        // SEO encoding rules: 1. Trimming leading and trailing spaces , 2. Changing to lower case, 3. escaping characters
        // 4. enocoding reserverd characters by escape (@+/) , 5. Replacing - by ~~ and %20 by -
        searchMetaObj.searchInput = escape( searchMetaObj.searchInput.trim().toLowerCase() );
        return this.encodeEscapeReservedChar( searchMetaObj ).replace( /(%20)+/g, '-' );
    }

    function encodeEscapeReservedChar( searchMetaObj ) {
        // not encoding *_. as these characters were not encoded in production (16G)

        function encodedChar( reservedChar ) {
            return charSet[ reservedChar ];
        }

        var charSet = searchMetaObj.seoSplCharReplacementList,
            regExpKeys = "[" + Object.keys( charSet ).join( "" ) + "]",
            regExp = new RegExp( regExpKeys, "g" ),
            encodedKeyword = searchMetaObj.searchInput.replace( regExp, encodedChar ),
            specialCharsRemovedSearchPhrase = this.removeSpecialChars( encodedKeyword );

        return specialCharsRemovedSearchPhrase;
    }

    function removeSpecialChars( searchPhrase ) {
        var specialCharRegExp = /(%u)[A-Z\d]{4}/g;
        return searchPhrase.replace( specialCharRegExp, "" );
    }

    function checkForRestfulPatternRedirection( searchMetaObj ) {
        var charsArray = searchMetaObj.seoSplCharList.replace( /{|}/g, "" ).split( "," ),
            searchKeyword = searchMetaObj.searchInput,
            containsSpecialChar = _.any( charsArray, function ( specialChar ) {
                return specialChar && searchKeyword.indexOf( specialChar ) >= 0;
            } );
        return !containsSpecialChar;
    }


    return {
        encodeSearchPhrase: encodeSearchPhrase,
        encodeEscapeReservedChar: encodeEscapeReservedChar,
        removeSpecialChars: removeSpecialChars,
        checkForRestfulPatternRedirection: checkForRestfulPatternRedirection

    };
} );
