//#MODULE - Array Utils
//> Author: Joseph Acosta
//>
//> Create Date: August 13, 2015
//>
//##DESCRIPTION: A module that provides some utilities for doing more things with arrays
define( function () {

    //###Method - find( list, searchString, startsWith, contains, endsWith ) public method to search an array
    // uses indexOf for full key search, but when doing partial match
    // it will then fallback to look if the key starts with, contains, or endsWith
    // the searchString
    //
    //> parameters
    //>
    //+ *list - the list to search, works on a list not a map, so use array.keys if needed
    //+ *searchString - the string to search for
    //+ *startsWith
    //+ *contains
    //+ *endsWith
    //
    //> returns
    //>
    //+ object with property true or false and property of index found
    function find( list, searchString, startsWith, contains, endsWith ) {
        var i, j = -1,
            found = false,
            sw = ( typeof startsWith === 'undefined' ? false : startsWith ),
            ctns = ( typeof contains === 'undefined' ? false : contains ),
            ew = ( typeof endsWith === 'undefined' ? false : endsWith );

        // if we are not doing a partial match
        if ( !sw && !ctns && !ew ) {
            j = list.indexOf( searchString );
            if ( j > -1 ) {
                found = true;
            }
        }

        if ( sw || ctns || ew ) {
            i = 0;
            while ( !found && i < list.length ) {
                j = list[ i ].indexOf( searchString );
                // TODO verify ends with in a test :)
                if ( sw && j === 0 || ctns && j > -1 ) {
                    found = true;
                    break;
                } else if ( ew && j === list[ i ].length - searchString.length ) {
                    found = true;
                    break;
                }
                i++;
            }
        }

        return {
            found: found,
            index: j
        };
    }

    //Immediate Invoke Function (IIFE)
    //This function will be used add methods to Object object as soon as ObjectUtils.js is loaded
    //Since ObjectUtils.js is part of McomBase.js it will get executed before any page specfic modules are loaded, as long as they depend on
    //this module.
    //
    //> parameters
    //+ none
    //
    //> returns
    //+ none
    //
    ( function () {
        //POLYFILL: new Array().map - will put the map() method onto the Array prototype if it is not already there.
        // if arrays have no map set the prototype's map
        // Production steps of ECMA-262, Edition 5, 15.4.4.19
        // Reference: http://es5.github.com/#x15.4.4.19
        if ( !Array.prototype.map ) {
            Array.prototype.map = function ( callback, thisArg ) {

                var T, A, k;

                if ( this == null ) {
                    throw new TypeError( " this is null or not defined" );
                }

                // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
                var O = Object( this );

                // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
                // 3. Let len be ToUint32(lenValue).
                var len = O.length >>> 0;

                // 4. If IsCallable(callback) is false, throw a TypeError exception.
                // See: http://es5.github.com/#x9.11
                if ( typeof callback !== "function" ) {
                    throw new TypeError( callback + " is not a function" );
                }

                // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if ( thisArg ) {
                    T = thisArg;
                }

                // 6. Let A be a new array created as if by the expression new Array(len) where Array is
                // the standard built-in constructor with that name and len is the value of len.
                //BUT...this doesn't work for MCOM coding standards, so using [] instead...should be okay - A = new Array( len );
                A = [];

                // 7. Let k be 0
                k = 0;

                // 8. Repeat, while k < len
                while ( k < len ) {

                    var kValue, mappedValue;

                    // a. Let Pk be ToString(k).
                    //   This is implicit for LHS operands of the in operator
                    // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
                    //   This step can be combined with c
                    // c. If kPresent is true, then
                    if ( k in O ) {

                        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                        kValue = O[ k ];

                        // ii. Let mappedValue be the result of calling the Call internal method of callback
                        // with T as the this value and argument list containing kValue, k, and O.
                        mappedValue = callback.call( T, kValue, k, O );

                        // iii. Call the DefineOwnProperty internal method of A with arguments
                        // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
                        // and false.

                        // In browsers that support Object.defineProperty, use the following:
                        // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

                        // For best browser support, use the following:
                        A[ k ] = mappedValue;
                    }
                    // d. Increase k by 1.
                    k++;
                }

                // 9. return A
                return A;
            };
        }
    }() );

    return {
        find: find
    };
} );