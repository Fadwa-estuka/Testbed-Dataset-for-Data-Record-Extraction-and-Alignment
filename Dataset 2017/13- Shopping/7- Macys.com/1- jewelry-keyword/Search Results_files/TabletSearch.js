//#MODULE - TabletMenuIcon
//> Author: Manoj Prabhakar
//>
//> Create Date: May 1, 2015
//>
//##DESCRIPTION: Introduced 15E. Encapsulates the Tablet Search experimentation

define( [ 'jquery', 'globals', 'cmElement', 'segmentation' ], function ( $, Globals, CmElement, Segmentation ) {
    function init( val ) {

        var baseUrlLegacyAssetsStylesMin = Globals.getValue( 'baseUrlLegacyAssetsStylesMin' ),
            breakpoint = Globals.getValue( 'props.tabletUIPixelWidthBreakpoint' );
        $( '#globalSearchInputField' ).after( $( '<div id="search_clear" hidden></div>' ) );
        //STEP: Event Creation: on typing in the input box, perform the search, this is the definition for that event
        if ( $( document ).width() <= breakpoint ) {
            $( document ).on( 'keyup', '#globalSearchInputField', function ( e ) {

                var _this = this;
                //STEP: Make certain that we are in readyState before firing "keyup"
                if ( $( _this ).val() === '' ) {
                    $( '#search_clear' ).fadeOut();
                } else {
                    $( '#search_clear' ).fadeIn();
                }

            } );
        }


        //STEP: Event Creation: click handler for the "clear all" button, this is the definition for that event
        $( document ).on( 'click', '#search_clear', function ( e ) {
            if ( $( '#globalSearchInputField' ).val().length > 0 ) {
                //STEP: Clear out the value of the input text box
                $( '#globalSearchInputField' ).val( '' );

                //STEP: Now fire the "keyup" event of the input text box
                $( '#globalSearchInputField' ).keyup();
                $( '#globalSearchInputField' ).focus();
            }
        } );

    }

    return {
        init: init
    };

} );
