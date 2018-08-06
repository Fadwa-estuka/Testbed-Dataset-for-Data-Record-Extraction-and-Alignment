/**
 * @file
 * Behaviors for video preroll testing.
 */

!(function ($) {
  'use strict';

  /**
   * Behaviors for Monetate's A/B testing for video pre-rolls
   */
  Drupal.behaviors.wweVideoPreRollTest = {

    // Variable to contain ab_segment cookie value.
    abSegment: '',

    /**
     * Run initial setup tasks.
     */
    init: function (context) {
      // Setup ab_track cookie for use.
      if (!$.cookie('ab_track')) {
        this.abTrackSetup(context);
      }

      // When the unique ID changes run the setup again.
      var abTrack = JSON.parse($.cookie('ab_track'));
      if (typeof Drupal.settings.ct_video.monetate_uuid !== undefined && typeof abTrack.id !== undefined) {
        if (Drupal.settings.ct_video.monetate_uuid !== abTrack.id) {
          this.abTrackSetup(context);
        }
      }
    },

    /**
     * Setup ab_segment cookie for use.
     */
    abSegmentSetup: function (context) {
      // Get cookie for ab_segment.
      if ($.cookie('ab_segment')) {
        this.abSegment = JSON.parse($.cookie('ab_segment'));
      }
      else {
        // Default DFP value to dmonetate=null_.
        this.abSegment = {
          'Segment': 'Default Value',
          'DFP': 'dmonetate=null_'
        };
      }
    },

    /**
     * Setup ab_track cookie for use.
     */
    abTrackSetup: function (context) {

      this.abSegmentSetup(context);

      // Get current unique ID.
      var uniqueID = 0;
      if (typeof Drupal.settings.ct_video.monetate_uuid !== undefined) {
        uniqueID = Drupal.settings.ct_video.monetate_uuid;
      }

      var monetateSegment = '';
      // Capture the segment value from the monetate cookie.
      if (typeof this.abSegment.DFP !== undefined) {
        monetateSegment = this.abSegment.DFP;
      }

      // Default videos to one on setup.
      var videoCount = 0;

      // Compile json value for cookie.
      var cookieValue = {
        'id': uniqueID,
        'segment': monetateSegment,
        'vid_count': videoCount
      };

      // Create/Update cookie.
      $.cookie('ab_track', JSON.stringify(cookieValue), {path: '/'});

    },

    /**
     * Function reads the 'ab_track' cookie and returns count.
     */
    getVideoCount: function (context) {

      // Worst case, we assume starting at 0.
      if (!$.cookie('ab_track')) {
        return 0;
      }

      // Since we have a cookie, to a variable and process.
      var abTrackCookie = $.cookie('ab_track');
      var cookieStructure = JSON.parse(abTrackCookie);

      // Sanity check to ensure we are working with an object.
      if (typeof cookieStructure === 'object') {

        // If the key 'vid_count' exists, return it.
        if ('vid_count' in cookieStructure) {
          return cookieStructure.vid_count;
        }
      }

      // If you made it this far, you get a default.
      return 0;
    },

    /**
     * Reads Monetate's 'ab_segment' cookie and increments video counter.
     */
    incrementCookie: function (context) {

      // Default the counter to zero.
      var videoCount = 0;

      // Get the existing cookie value if available.
      if ($.cookie('ab_track')) {
        videoCount = this.getVideoCount();
      }

      // Get our cookie so we can update it.
      var abTrackCookie = JSON.parse($.cookie('ab_track'));

      // Sanity check to ensure we are working with an object.
      if (typeof abTrackCookie !== 'object') {
        return false;
      }

      // Increase the counter. The videoCount must be increased separately from
      // the property set otherwise it will not increase in the abTrackCookie.
      videoCount++;
      abTrackCookie.vid_count = videoCount;

      // Update cookie to new string value.
      $.cookie('ab_track', JSON.stringify(abTrackCookie), {path: '/'});

    },

    /**
     * Creates DFP key/value pair for monetate a/b testing.
     */
    createKeyValue: function (context) {
      if (!$.cookie('ab_track')) {
        this.abTrackSetup(context);
      }
      var abTrack = JSON.parse($.cookie('ab_track'));

      var obj = {};
      obj.value = '';
      if (typeof abTrack.segment !== 'undefined') {
        var keyValue = abTrack.segment + abTrack.vid_count;
        var keyArr = keyValue.split('=');
        obj.key = keyArr[0];
        obj.value = keyArr[1];
      }
      return obj;
    }
  };
})(jQuery);
