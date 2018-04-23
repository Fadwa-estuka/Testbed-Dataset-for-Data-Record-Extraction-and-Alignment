 //#MODULE - TextBoxAnimatePlaceholder.js
 //> Author: Allen Chuang
 //>
 //> Create Date: Oct 5, 2016
 //>
 //##DESCRIPTION:
 //This module will attach to a text box element, and then simulate typing animation based on the parameters defined
 //and cycle through the array of strings.
 define( [ 'jquery', 'underscore' ], function ( $, _ ) {
     //STEP: Local variables to this module
     var $this; //quick reference to jQuery object of input field

     // default options
     var defaults = {
         // default placeholder text
         defaultText: 'What are you looking for?',
         // default phrases, can hold as many phrases as needed
         phrases: [ 'Message 1', 'Message 2', 'Message 3' ],
         // time in milliseconds before cycling through phrases
         startDelay: 2000,
         // typing speed of each character in milliseconds
         typeSpeed: 50,
         // pause time before cycling through the next phrase, in multiples of typeSpeed.
         pauseDelay: 30
     };

     //###Method: animatePlaceholder(elementSelector, options)
     //Public method that takes in the elementSelector of the input
     //field that we want to attach this component to.  It will attach itself to the input and initialize
     //the correct parameters and state.
     //
     //> parameters
     //>
     //+ *elementSelector* - The CSS selector of the input element that we want this attached to (i.e. #searchBar or .searchField)
     //
     //+ *options* - object of optional parameters to pass through -  see above for options
     //
     //> returns
     //>
     //+ Nothing.  This sets up events, and has no return value.
     var animatePlaceholder = function ( elementSelector, options ) {
         var input = $( elementSelector ),
             cmds = [];

         // if not explicitly passed, pass in empty object
         if ( options === undefined ) {
             options = {};
         }

         // Setting options and applying defaults
         _.defaults( options, defaults );

         // Apply default text
         input.attr( 'placeholder', options.defaultText );

         var start = setTimeout( function () {

             doLoop();

             var cyclePlaceholder = setInterval( function () {
                 //is there a cmd waiting, pop it and run it.
                 var cmd = cmds.shift();
                 if ( cmd ) {
                     cmd();
                 }
             }, options.typeSpeed );

             input.focus( function () {
                 clearInterval( cyclePlaceholder );
                 cmds = [];
                 input.attr( 'placeholder', options.defaultText );
             } );

         }, options.startDelay );

         function doLoop() {
             cmds = [];

             function pushLetterToArray( letter, index ) {
                 cmds.push( addLetter( letter ) );
             }

             for ( var i = 0; i < options.phrases.length; i++ ) {
                 cmds.push( clear );
                 var sentence = options.phrases[ i ];
                 sentence.split( "" ).forEach( pushLetterToArray );
                 //at the end of each sentence, there is a pause
                 // time paused = pauseDelay * typeSpeed
                 for ( var nn = 0; nn < options.pauseDelay; nn++ ) {
                     cmds.push( 0 );
                 }
             }
             cmds.push( doLoop );
         }

         function clear() {
             input.attr( 'placeholder', '' );
         }

         function addLetter( a ) {
             return function () {
                 input.attr( 'placeholder', input.attr( 'placeholder' ) + a );
             };
         }
     };

     return {
         animatePlaceholder: animatePlaceholder
     };

 } );
