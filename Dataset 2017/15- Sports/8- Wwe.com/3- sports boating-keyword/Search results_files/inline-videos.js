/**
 * @file
 * Video rollover effects.
 * Used in:
 *  - Previews in contextual module (which animiates on hove).
 *    To expand this functionality you need to ensure that an item with a defined
 *    video preview gets the class 'js-video--rollover' and an attribute
 *    'data-video-loop' with a value of the video url.
 *  - Talent Cards (which animate when in view).
 *    To add this functionality elsewhere - see above but use class 'js-video--inview'.
 */

!(function($) {
  'use strict';

  Drupal.behaviors.inlineVideos = {
    /**
     * We have two types of inline videos - rollovers and inviews.
     * Rollovers animate on rollover and inviews animate when in the viewport.
     */
    $rollovers: null,
    $inviewVideos: null,
    inviews: [],
    context: undefined,

    attach: function(context, settings) {
      this.$rollovers = $('.js-video--rollover:not(img)', context);
      this.$inviewVideos = $('.js-video--inview', context).not('img');
      this.context = context;

      // Stops behavior if on mobile.
      if (typeof Drupal.behaviors.WWEAds !== 'undefined') {
        if (!Drupal.behaviors.WWEAds.wweBrowserDetect.initialized) {
          Drupal.behaviors.WWEAds.wweBrowserDetect.init();
        }
        if (Drupal.behaviors.WWEAds.wweBrowserDetect.mobile === true) {
          return;
        }
      }

      this.bindRolloverVideos();
      this.bindInviewVideos();
    },
    bindRolloverVideos: function() {
      if (this.$rollovers.length > 0) {
        this.bindRolloverEvents();
      }
    },

    bindInviewVideos: function () {
      var iv = this;
      iv.$inviewVideos.each(function(i) {
        iv.inviews.push($(this));
      });
    },
    /**
     * loadInlineVideo() replaces a jquery object with DOM that includes an inline video.
     */
    loadInlineVideo: function($obj, style) {
      var iv = this;

      if ($obj.isLoading === true) return;
      $obj.isLoading = true;

      var videoUrl = $obj.data('video-loop');
      var $newVideo = '';

      if (videoUrl !== '') {
        var video = document.createElement('video');
        video.setAttribute('height', '100%');
        video.setAttribute('width', '100%');
        video.setAttribute('class', 'processed contextual-video js-hide js-video--' + style);
        video.setAttribute('loop', '');
        video.setAttribute('mute', '');
        video.src = videoUrl;
        video.load();

        var videoButton = document.createElement('div');
        videoButton.setAttribute('class', 'inline-video-clip video-play-large-button');

        $obj.parent().append([video,videoButton]);

        video.addEventListener('loadeddata', function() {
          // Video is loaded and can be played.
          $(video).fadeIn('fast', function() {
            $(video).css({
              'display': 'block',
              'position': 'relative'
            });
            video.play();
            $obj.parent().addClass('inline-clip-playing');
            $obj.remove();
            $obj.isLoading = false;
            $obj.isLoaded = true;

            // You just removed the object we bound our hover events to, so you need to
            // rebind rollovers.
            if (style === 'rollover') {
              iv.$rollovers = $('.js-video--rollover:not(img)');
              iv.bindRolloverVideos();
            }
            else if (style === 'inview') {
              iv.$inviewVideos = $('.js-video--inview', iv.context).not('img').addClass('processed');

              $obj.addClass('processed');
              iv.bindInviewVideos();
            }
          });
        }, false);
      }
    },

    bindRolloverEvents: function() {
      var iv = this;
      if (iv.$rollovers) {
        iv.$rollovers.each(function() {
          var $rollover = $(this);
          // On mouseover either load the video or play it.
          $rollover.off('mouseover.inlineVideos').on('mouseover.inlineVideos', function() {
            var $this = $(this);
             // Load the video.
            if (!$this.hasClass('processed') && $this.prop("tagName") == 'PICTURE') {
              iv.loadInlineVideo($this, 'rollover');
            }
            // Or play it.
            else if ($this.hasClass('processed') && $this.prop("tagName") == 'VIDEO') {
              $this.parent().addClass('inline-clip-playing');
              $this.get(0).play();
            }
          });

          //Pause video on mouse leave.
          $rollover.off('mouseleave.inlineVideos').on('mouseleave.inlineVideos', function() {
            var $this = $(this);
            if ($this.hasClass('processed') && $this.prop("tagName") == 'VIDEO') {
              $this.get(0).pause();
            }
            $this.parent().removeClass('inline-clip-playing');
          });
        });
      }
    },
    /**
     * checkInView() is run within a the handle scroll event that is triggered in
     * wwe-video-explorer.js. It checks if an element is in view, if it is it starts it.
     * if not it stops it.
     */
    checkInView: function() {
      var iv = this;
      if (iv.$inviewVideos) {
        var i = 0;
        var itemsLength = iv.inviews.length;
        for (i; i < itemsLength; i++) {
          var elem = iv.inviews[i];
          if (iv.inviews[i].visible(false)) {
            if (!elem.hasClass('processed') && !elem.hasClass('loading')) {
              // Load elem.
              elem.addClass('loading');
              iv.loadInlineVideo(elem, 'inview');
            }
            else if (elem.hasClass('processed') && elem.prop('tagName') == 'VIDEO') {
             // Play.
              elem.get(0).play();
            }
          }
          else if (elem.hasClass('processed') && elem.prop('tagName') == 'VIDEO') {
            // Pause.
            elem.get(0).pause();
          }
        };
      }
    }
  };

})(jQuery);
