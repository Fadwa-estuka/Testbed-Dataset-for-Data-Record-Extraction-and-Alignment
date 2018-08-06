!(function ($) {
  'use strict';

  /**
   * The primary Drupal behavior housing the video explorer.
   */
   Drupal.behaviors.WWEVideoDuration = {
    checkForDurations:function() {

      this.$videoDuration = $('.wwe-display-duration');

      // If the selector doesn't exist. Return false.
      if (this.$videoDuration.length === 0) {
        return false;
      }

      // If the selector is available.
      else {
        window.monetateQ = window.monetateQ || [];
        window.monetateQ.push([
          "setPageType",
          "newpagestate"]);
        window.monetateQ.push([
          "trackData"]);

        // Loop over the classes, and extract information.
        this.$videoDuration.each(function() {

          var $wweDisplayDurationItem = $(this);

          // Check if this item has a data-duration attribute.
          var dataDuration = $wweDisplayDurationItem.attr('data-duration');

          // Continue process if item has no data-duration attribute,
          // or if attribute is empty.
          if (dataDuration === undefined || !dataDuration.length) {
            return true;
          }

          // Check if this item has children with the class .js-video-duration,
          // continue loop if so.
          if ($wweDisplayDurationItem.children('.js-video-duration').length) {
            return true;
          }

          // Define duration element.
          var $durationContainer = $('<div/>').addClass('js-video-duration').html(dataDuration);

          // Append duration element to container.
          $wweDisplayDurationItem.append($durationContainer);

        });
      }
    } 
  };
})(jQuery);
