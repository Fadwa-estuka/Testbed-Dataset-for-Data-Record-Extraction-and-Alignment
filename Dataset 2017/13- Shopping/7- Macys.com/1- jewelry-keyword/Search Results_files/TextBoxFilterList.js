//#MODULE - TextBoxFilterList
//> Authors: Michael Moir
//>
//> Create Date: November, 2013
//>
//##DESCRIPTION: This module can be used to enable the filtering of a list via user input.  Typical use case is a text box for the input, and then
//an element that implement a list collection (LIs) to be filtered given the user input.
define( [ 'jquery', 'commonUtil/StringUtil' ], function ( $, strUtil ) {


    function self() {

        var charReplace = [
                [ 'é', 'e' ],
                [ 'è', 'e' ],
                [ 'ê', 'e' ],
                [ 'ñ', 'n' ],
                [ 'ó', 'o' ],
                [ 'ô', 'o' ],
                [ '²', '2' ],
                [ 'ä', 'a' ],
                [ 'É', 'E' ],
                [ 'ö', 'o' ],
                [ 'Ü', 'U' ],
                [ 'ü', 'u' ],
                [ '®', '|r' ],
                [ '·', '|dot' ],
                [ '\\(\\d+', '|#' ],
                [ '\\(', '|||' ]
            ],
            i,
            countS = 0,
            countH = 0,
            eleContainer = "",
            filterComplete = false,
            shown = -1,
            hidden = -1,
            config = {
                globalMatch: true,
                casesensitive: true,
                highlight: true,
                initialNoFilterIfNoMatch: true,
                highlightClass: "filter-highlight"
            },
            charReplaceRegx = [],
            countTotal,
            countShown,
            countHidden,
            configRgxpModifiers,
            onFilterComplete;

        // do regex here instead of every time the replaceSpecChars characters function is called
        // the replaceSpecChars loop function went from .111-.210ms to less than .008ms
        // so a bit smoother on larger lists
        for ( i = 0; i < charReplace.length; i++ ) {
            charReplaceRegx[ i ] = new RegExp( charReplace[ i ][ 0 ], 'gi' );
        }

        //###Method - onFilterComplete
        //This is a callback function that can be set by the caller.  This function will fire upon completion of the filtering
        //and it is set to blank (to do nothing) by default.
        //> parameters
        //>
        //+ none
        //
        //> returns
        //>
        //+ Nothing.  Unless the caller passes in a function that returns something, and that is up to the caller.
        onFilterComplete = function () {

        };

        //###Method - countTotal
        //This is a private function that will return the total line items in the given list.  This is accessed via the "getProperty()" function.
        //> parameters
        //>
        //+ none
        //
        //> returns
        //>
        //+ *Integer* - This is the count of total line items in the element.
        countTotal = function () {
            return -1;
        };

        //###Method - countShown
        //Private function that will return the amount of line items that are shown after the filtering is complete.  This is accessed via the "getProperty()" function.
        //
        //> parameters
        //>
        //+ none
        //
        //> returns
        //>
        //+ *Integer* - Amount of line items that are "shown" due to matching the algorithm of filtering.
        countShown = function () {
            return -1;
        };

        //###Method - countHidden
        //Private function that will return the amount of line items that are hidden after the filtering is complete.  This is accessed via the "getProperty()" function.
        //
        //> parameters
        //>
        //+ none
        //
        //> returns
        //>
        //+ *Integer* - Amount of line items that are "hidden" due to not matching the algorithm of filtering.     This is accessed via the "getProperty()" function.
        countHidden = function () {
            return -1;
        };

        //###Method - replaceSpecChars( str )
        //Private function that will use the replaceCharacters matrix in this module and apply the replacement to
        //the given string ("str").  This is used for replacing accented characters, etc.
        //
        //> parameters
        //>
        //+ *str* - the string that will get its characters replaced (for those that match in the matrix)
        //
        //> returns
        //>
        //+ *String* - the same inputted string but with the replacement characters replaced.
        function replaceSpecChars( str ) {
            var i;
            for ( i = 0; i < charReplace.length; i++ ) {
                str = str.replace( charReplaceRegx[ i ], charReplace[ i ][ 1 ] );
            }
            return str;
        }

        //###Method - akeIdIfUnknown( str )
        //An internal helper function that will put a "#" in front of the word if a "#" or "." does not already appear.  This
        //makes it so that a caller could pass in the word without these identifiers and this would help the module to assume that
        //it is being selected by ID.
        //
        //> parameters
        //>
        //+ *str* - The identifier of the element.
        //
        //> returns
        //>
        //+ *String* - the same inputted string but with a "#" prepended if "#" or "." is not already there.
        function makeIdIfUnknown( str ) {
            if ( typeof str === 'string' ) {
                if ( str.substring( 0, 1 ) !== '#' && str.substring( 0, 1 ) !== '.' ) {
                    str = '#' + str;
                }
            }
            return str;
        }

        //###Method: unbind(element)
        //Public method that takes in the element and unbinds
        //events from corrosponding element. Optionally takes event
        //types for unbinding specific events
        //
        //> parameters
        //>
        //+ *element* - The ID of the input element that we want to unbind
        //
        //+ *eventType* - The type of event we want unbinded
        //
        //> returns
        //>
        //+ Updated element without events binded.
        var unbind = function ( element, eventType ) {
            var el = makeIdIfUnknown( element );
            if ( eventType ) {
                el.unbind( eventType );
            } else {
                el.unbind();
            }
            return el;
        };

        //###Method - showHide( arShow, arHide )
        //Private helper function that will loop through the inputted arrays and apply the "fadeIn()" for items in arShow, and
        //the "fadeOut()" for items in arHide.  This will also set the counter properties for the caller to read upon completion of filtering.
        //
        //> parameters
        //>
        //+ *arShow* - An array of LIs that are to be shown.
        //+ *arHide* - An array of LIs that are to be hidden.
        //
        //> returns
        //>
        //+ Nothing.
        function showHide( arShow, arHide ) {
            var i;
            //PROPERTIES: These are properties of module that caller can refer to
            shown = arShow.length;
            hidden = arHide.length;

            //STEP: Loop through the hide and show arrays performing a fadeIn/fadeOut and counting in the callback for identifying onComplete
            for ( i = 0; i < shown; i++ ) {
                arShow[ i ].fadeIn();
            }
            countS = shown;
            for ( i = 0; i < hidden; i++ ) {
                arHide[ i ].fadeOut();
            }
            countH = hidden;
        }

        //###Method - getRgxpModifiers( )
        //Private function that will return the RegExp modifiers in the correct syntax, given which properties are set.  Main use
        //case is the setting of case sensitivity.
        //
        //> parameters
        //>
        //+ none.
        //
        //> returns
        //>
        //+ Nothing.
        function getRgxpModifiers() {
            if ( !configRgxpModifiers ) {
                if ( config.casesensitive && config.globalMatch ) {
                    configRgxpModifiers = 'gm';
                } else if ( config.casesensitive && !config.globalMatch ) {
                    configRgxpModifiers = 'm';
                } else if ( !config.casesensitive && config.globalMatch ) {
                    configRgxpModifiers = 'gim';
                } else if ( !config.casesensitive && !config.globalMatch ) {
                    configRgxpModifiers = 'im';
                }
            }
            return configRgxpModifiers;
        }

        //###Method - analyzeElement( listitem, value, whichone, arShow, arHide )
        //Private helper function that focuses the filtering algorithm to one LI.
        //
        //> parameters
        //>
        //+ *listitem* - The LI element being examined.
        //+ *value* - The value inputted that is to be examined against the text in the LI
        //+ *whichone* - The identifier of which algorithm to use (contains vs starts with)
        //+ *arShow* - A "pass by reference", this array will be filled with the LIs that are to be shown
        //+ *arHide* - A "pass by reference", this array will be filled with the LIs that are to be hidden
        //
        //> returns
        //>
        //+ Nothing.
        function analyzeElement( listitem, value, whichone, arShow, arHide ) {
            var listItemSel = $( listitem ),
                modifiers = getRgxpModifiers(),
                elementWithText = listItemSel.find( config.textSelector ),
                srcText, term, pattern, classes;

            srcText = String( elementWithText.length > 0 ? elementWithText.text() : $( listitem ).text() ).trim();

            term = strUtil.escapeForRegEx( replaceSpecChars( value ) );
            pattern = ( whichone === 'start' ) ? new RegExp( "^(" + term + ")", modifiers ) : pattern = new RegExp( "(" + term + ")", modifiers );
            classes = ( config.highlight ? config.highlightClass : undefined );

            if ( replaceSpecChars( srcText ).match( pattern ) ) {
                if ( listItemSel.children().length > 0 ) {
                    if ( elementWithText.length > 0 ) {
                        strUtil.highlightInsert( elementWithText, value, pattern, replaceSpecChars( $( elementWithText ).text() ), classes );
                    } else {
                        listItemSel.children().each( function () {
                            strUtil.highlightInsert( this, value, pattern, replaceSpecChars( $( this ).text() ), classes );
                        } );
                    }
                } else {
                    strUtil.highlightInsert( listitem, value, pattern, replaceSpecChars( listItemSel.text() ), classes );
                }

                arShow[ arShow.length ] = listItemSel;

            } else {
                arHide[ arHide.length ] = listItemSel;
            }
        }

        //###Method - filterContainsOrStartsWith( value, container, whichone )
        //Private helper function that runs the filtering algorithm given the inputs.
        //
        //> parameters
        //>
        //+ *value* - The inputted text we are evaluating against.
        //+ *container* - This is the container of the LI tags that are being evaluated.  The only requirement is that this is a
        //direct parent of an LI collection.
        //+ *whichone* - internally identifies the algorithm as searching from start of string or from anywhere within string.
        //
        //> returns
        //>
        //+ Nothing.
        function filterContainsOrStartsWith( value, container, whichone ) {
            var listItems = $( container + ' > li' ),
                count, arShow = [],
                arHide = [],
                completeOverride,
                intId, isComplete;
            strUtil.highlightRemove( container );

            if ( value === '' ) {
                count = 0;
                listItems.fadeIn( function () {
                    count++;
                    //STEP: Run onFilterComplete once and only after all filtering is complete
                    if ( count === $( container + ' > li' ).length ) {
                        filterComplete = true;
                        shown = count;
                        hidden = 0;
                        if ( $.isFunction( onFilterComplete ) ) {
                            onFilterComplete();
                        }
                    }
                } );
            } else {

                //STEP: Gonna loop here through all the LI items, and evaluate each one in loop...adding to either show or hide array
                listItems.each( function () {
                    analyzeElement( this, value, whichone, arShow, arHide );
                } );

                completeOverride = false;
                countS = 0;
                countH = 0;
                //STEP: We have analyzed the list and put ones to hide/show in arHide/arShow.  Now, we hide/show them, but only under certain conditions.
                if ( ( arShow.length === 0 && whichone === 'start' && config.initialNoFilterIfNoMatch ) === false ) {
                    showHide( arShow, arHide );
                } else if ( whichone === 'start' && arShow.length === 0 && config.initialNoFilterIfNoMatch ) {
                    //STEP: Tricky!!! Under this condition, we actually need to reverse the show/hide arrays, cause we want to show everything and not hide everything.
                    showHide( arHide, arShow );
                } else {
                    shown = arHide.length + arShow.length;
                    hidden = 0;
                    completeOverride = true;
                }

                //STEP: Finally, run onFilterComplete, if the caller defined one
                intId = setInterval( function () {
                    isComplete = countS === shown && countH === hidden;

                    if ( isComplete || completeOverride ) {
                        clearInterval( intId );
                        if ( $.isFunction( onFilterComplete ) ) {
                            onFilterComplete();
                        }
                        filterComplete = true;
                    }
                }, 100 );
            }
        }

        //###Method - filterContains( value, container )
        //Private helper function that explicitly calls the "contains" method of the filter algorithm
        //
        //> parameters
        //>
        //+ *value* - The inputted text we are evaluating against.
        //+ *container* - This is the container of the LI tags that are being evaluated.  The only requirement is that this is a
        //direct parent of an LI collection.
        //
        //> returns
        //>
        //+ Nothing.
        function filterContains( value, container ) {
            filterContainsOrStartsWith( value, container, 'contains' );
        }

        //###Method - filterStartsWith( value, container )
        //Private helper function that explicitly calls the "starts with" method of the filter algorithm
        //
        //> parameters
        //>
        //+ *value* - The inputted text we are evaluating against.
        //+ *container* - This is the container of the LI tags that are being evaluated.  The only requirement is that this is a
        //direct parent of an LI collection.
        //
        //> returns
        //>
        //+ Nothing.
        function filterStartsWith( value, container ) {
            filterContainsOrStartsWith( value, container, 'start' );
        }

        //###Method - filter(element, container)
        //This is the main public function that performs the filtering.  This is either directly attached to an event
        //by the caller, or it is attached to an element via the "attachTo()" function.  Either way, this function is the entry
        //point to perform the filtering
        //
        //> parameters
        //>
        //+ *element* - This is the HTML element that has the text to evaluate.  Typically, this would be a textbox element, but it can
        //be any element that has a $().val() property.
        //+ *container* - This is the container of the LI tags that are being evaluated.  The only requirement is that this is a
        //direct parent of an LI collection.
        //
        //> returns
        //>
        //+ Nothing.
        this.filter = function ( element, container ) {
            eleContainer = container;
            element = makeIdIfUnknown( element );
            container = makeIdIfUnknown( container );
            filterComplete = false;
            countTotal = function () {
                return $( container + ' > li' ).length;
            };
            countShown = function () {
                return shown;
            };
            countHidden = function () {
                return hidden;
            };

            var value = $.trim( $( element ).val() );

            if ( value.length > 1 ) {
                filterContains( value, container );
            } else {
                filterStartsWith( value, container );
            }
        };

        //###Method - getProperty( key )
        //This is the public function that gives the caller access to the "properties" of this module.  Rather than exposing
        //each property publicly, this is the only public method for getting properties.  This will help to reduce the payload and
        //will create a common way to access properties for the caller.  Certain properties are actually fetched via a function,
        //while others are fetched via property name.  This abstracts that to fetch either by property name.
        //
        //> parameters
        //>
        //+ *key* - the name of the property the caller wants to retrieve.
        //
        //> returns
        //>
        //+ *String* - the value of the property for the given "key".
        this.getProperty = function ( key ) {
            switch ( key ) {
            case 'total':
                return countTotal();
            case 'shown':
                return countShown();
            case 'hidden':
                return countHidden();
            case 'filterComplete':
                return filterComplete;
            case 'container':
                return eleContainer;
            default:
                return config[ key ];
            }
        };


        //###Method - attachTo( element, container )
        //Public function that will attach the module to an element and a container list.
        //
        //> Example:
        //> thisModule.attachTo('#textbox','#listContainer');
        //
        //> parameters
        //>
        //+ *element* - This is the HTML element that has the text to evaluate.  Typically, this would be a textbox element, but it can
        //be any element that has a $().val() property.
        //+ *container* - This is the container of the LI tags that are being evaluated.  The only requirement is that this is a
        //direct parent of an LI collection.
        //
        //> returns
        //>
        //+ Nothing.
        this.attachTo = function ( element, container ) {
            eleContainer = container;
            var _this = this;
            var el = makeIdIfUnknown( element );
            var co = makeIdIfUnknown( container );
            $( el ).bind( 'keyup', function () {
                _this.filter( el, co );
            } );
        };

        //###Method - setEvent( event, fn )
        //Public function to allow the setting of callback functions per specific events.  By going this route, we can expose
        //just this one function publically, which can handle "n" number of events and callbacks.
        //
        //> parameters
        //>
        //+ *event* - The event to attach the callback function to. Current events are: ['onFilterComplete']
        //+ *fn* - The function to be called for the given event.
        //
        //> returns
        //>
        //+ Nothing.
        this.setEvent = function ( event, fn ) {
            if ( $.isFunction( fn ) && event.toLowerCase() === 'onfiltercomplete' ) {
                onFilterComplete = fn;
            }
        };

        //###Method - setConfig( obj )
        //Public function to allow the overriding of config properties.  This expects an obj, and it will replace the value of
        //of the "config.propertyname" with the "obj.propertyname" when match is found, otherwise it will add the property to config.
        //
        //> parameters
        //>
        //+ *obj* - a JSON object where the property names match the property names of the properties that the caller wants to alter.
        //
        //> returns
        //>
        //+ Nothing.
        this.setConfig = function ( obj ) {
            var key;
            for ( key in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, key ) ) {
                    config[ key ] = obj[ key ];
                }
            }
            // if the config changes make sure to update configRgxpModifiers
            configRgxpModifiers = undefined;
            getRgxpModifiers();
        };

    }
    return self;

} );