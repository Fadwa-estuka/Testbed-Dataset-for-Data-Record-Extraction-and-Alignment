!(function ($) {
  'use strict';

  /**
   * The primary Drupal behavior housing the video hiighlights.
   */
  Drupal.behaviors.WWEVideoHighlights = {

    $window: false,
    $highlights: null,
    isScrolling: false,
    direction: '',
    scrolledUp: '',
    previousScrollTop: null,
    $highlightsCarousel : null,
    isDragging : false,
    dragTimer : null,
    UP: 'UP',
    DOWN: 'DOWN',
    disabled: false,

    // Called upon initial load to instantiate the player.
    attach: function (context, settings) {

      var self = this;

      this.$window = $(window);
      this.$highlights = $('.wwe-highlights-videos--wrapper');
      this.$highlights.removeClass('js-hide');

      // Bind scroll to monitor when to collapse $highlights.
      this.$window.on('scroll', function( ) {
        self.isScrolling = true;
      });

      // Store the interval checking for scroll so you can remove it, if necessary.
      self.scrollInterval = self.triggerInterval(self.handlePageScroll);

      // Call a check for the duration
      Drupal.behaviors.WWEVideoDuration.checkForDurations();
      /*
       * The hightlights carousel is draggable. So we need to differentiate
       * between drag and click.
       * We store a boolean value. It is checked on click events and
       * returns false if value is true.
       */
      this.$highlightsCarousel = this.$highlights.find('.js-carousel--highlights');
      // A boolean to store if user is dragging.
      // If true, clicks return false.
      this.isDragging = false;

      this.$highlightsCarousel.mousedown(function() {
        self.isDragging = false;
        self.dragTimer = setTimeout(function() {
          self.isDragging = false;
        }, 200);
      }).mouseup(function() {
        clearTimeout(self.dragTimer);
      });


    },


    /**
     * Offloads this function call to an interval, rather than scroll event.
     * We clear this interval when not needed.
     *
     * scrollHandler - a function to fire at interval.
     */
    triggerInterval: function(scrollHandler) {
      var self = this;
      return window.setInterval(function() {
        if (self.isScrolling) {
          self.isScrolling = false;
          scrollHandler(self);
        }
      }, 10);
    },



    handlePageScroll: function(context) {
      var self = context;
      var scrollTop = self.$window.scrollTop();
      self.direction = (scrollTop > self.previousScrollTop) ? self.DOWN : self.UP;
      self.previousScrollTop = scrollTop;

      /**
       * When we are at the top, to ensure that the highlights show, we set its
       * isAnimating property to false. That way it will open again.
       * There is a check to see how far has been scrolled up before firing WWE-3423.
       */
      if (scrollTop <= 60) {
        self.$highlights.isAnimating = false;
        self.showHighlights(true);
      }
      else if (self.direction === self.UP) {

        // On first scroll up, store the pixel amount.
        if (self.scrolledUp === 0) {
          self.scrolledUp = scrollTop;
        }
        // Adjusting this value is how you alter the tolerance.
        var tolerance = 100;
        if (typeof Drupal.settings.ct_video.tolerance !== 'undefined') {
          tolerance = Drupal.settings.ct_video.tolerance;
        }
        if ((self.scrolledUp - scrollTop) >= tolerance) {
          self.showHighlights();
        }
      }

      else if (self.direction === self.DOWN) {
        self.hideHighlights();
        self.scrolledUp = 0;
      }

      // Monitor inline videos.
      Drupal.behaviors.inlineVideos.checkInView();
    },

    showHighlights: function(force) {
      if(!this.disabled || force) {
        this.$highlights.removeClass('js-hide');
      }
    },

    hideHighlights: function() {
      this.$highlights.addClass('js-hide');
    },

    disableHighlights : function(){
      this.disabled = true;
      this.hideHighlights();
    },
    enableHighlights : function(){
      this.disabled = false;
    },

  };

})(jQuery);
