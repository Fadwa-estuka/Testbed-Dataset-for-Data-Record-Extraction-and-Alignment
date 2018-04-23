//#MODULE - TextBoxClearable
//> Author: Michael Moir
//>
//> Create Date: Jan 3, 2014
//>
//##DESCRIPTION:
//This module will attach to a text box element, and then show/hide an "x" depending on if the input has text
//in it.  The "x" will be clickable and will clear the text box of input when clicked.  It will hide itself when clicked and reappear
//if new text is inserted.
define( [ 'jquery' ], function ( $ ) {
    //STEP: Local variables to this module
    var $this, //quick reference to jQuery object of input field
        clearTitle = 'Click to clear this textbox'; //the title we will use for the clear link

    //###Method: clearable(elementId)
    //Public method that takes in the elementId of the input
    //field that we want to attach this component to.  It will attach itself to the input and initialize
    //the correct parameters and state.
    //
    //> parameters
    //>
    //+ *elementId* - The ID of the input element that we want this attached to
    //
    //+ *callback* - A function that will run after the clearable link is clicked
    //
    //> returns
    //>
    //+ Nothing.  This sets up events, and has no return value.
    var clearable = function ( elementId, callback ) {
        $this = $( '#' + elementId );
        var inputId = $this.attr( 'id' );
        var width = $this.width(),
            containerId = 'clearable_' + inputId,
            shown = $this.val() !== undefined && $this.val().length > 0 ? '' : 'display:none;';

        //STEP: Manipulate the INPUT control, setting necessary CSS, events and containers
        $this.css( {
                'padding-right': '22px',
                'display': 'inline-block'
            } )
            .wrap( '<div id="' + containerId + '" style="position:relative;"></div>' )
            .after( '<div class="clearlink icon-ui-close-gr-small" style="' + shown + ' ">&nbsp;</div>' )
            .on( 'keyup', function () {
                var o = $( '#' + containerId + ' > .clearlink' );
                if ( $( this ).val() === '' ) {
                    o.fadeOut();
                } else {
                    o.fadeIn().css( 'display', 'inline-block' );
                }
            } )
            //STEP: Tell the parent to have a "nowrap" whitespace style
            .parent().css( 'white-space', 'nowrap' );

        //STEP: Now that we have the clear link in the DOM, we can manipulate its style and attach events.
        $( '.clearlink' )
            //STEP: Give the clear button a title so users can hover to read it.
            .attr( 'title', clearTitle )
            //STEP: The Click Event that will clear the input and hide the clear button.
            .on( 'click', function () {
                $( $( this ).parent().children()[ 0 ] ).val( '' ).focus();
                $( this ).hide();
                if ( $.isFunction( callback ) ) {
                    callback();
                }
            } );
    };

    //###Method: unbind(elementId)
    //Public method that takes in the elementId and unbinds
    //events from corrosponding element. Optionally takes event
    //types for unbinding specific events
    //
    //> parameters
    //>
    //+ *elementId* - The ID of the input element that we want to unbind
    //
    //+ *eventType* - The type of event we want unbinded
    //
    //> returns
    //>
    //+ Updated element without events binded.
    var unbind = function ( elementId, eventType ) {
        $this = $( '#' + elementId );
        if ( eventType ) {
            $this.unbind( eventType );
        } else {
            $this.unbind();
        }
        return $this;
    };

    return {
        makeClearable: clearable,
        unbindClearable: unbind
    };

} );