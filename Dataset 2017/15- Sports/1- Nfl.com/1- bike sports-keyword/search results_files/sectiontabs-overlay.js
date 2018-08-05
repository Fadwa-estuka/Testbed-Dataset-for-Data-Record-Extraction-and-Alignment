/**
 * @sectiontabs-overlay
 * if a sectiontab has a dropdown, insert an overlay over the page
 *
 */
(function ($) {

  Drupal.behaviors.leagueToggleSectionTabOverlay = {
    attach: function (context, settings) {
      var $context = $(context);
      $( '.sectiontabs li', $context ).mouseover( function() {
        if( $( this ).find( '.overlay' ).length > 0 ) {
          $( '.sectiontabs .reveal-overlay' ).show();
        }
      }).mouseout( function() {
        if( $( this ).find( '.overlay' ).length > 0 ) {
          $( '.sectiontabs .reveal-overlay' ).hide();
        }
      });
    }
  };

})(jQuery);
