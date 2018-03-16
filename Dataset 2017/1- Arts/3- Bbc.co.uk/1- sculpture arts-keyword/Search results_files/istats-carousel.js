define(['istats-1', 'core/events'], function(istats) {
  'use strict';

  var scrollThreshold;
  var scrollBox;
  var oldPage;
  var scrollTrackDelay = 200;
  var timer = null;

  var requireField = function(options, key) {
    if (options[key] == undefined) {
      throw 'Key "' + key + '" is required when initialising istats-carousel';
    }
    return options[key];
  };

  var logSwipeNext = function() {
    istats.log('click', 'swipe-next');
  };

  var logSwipePrev = function() {
    istats.log('click', 'swipe-prev');
  };

  var logClickPrev = function() {
    istats.log('click', 'click-prev');
  };

  var logClickNext = function() {
    istats.log('click', 'click-next');
  };

  /**
   * The carousel is split up into thresholds whereby when passing a threshold
   * will trigger an istats call.
   */
  var calcCurrentPage = function(currentOffset, pageSize) {
    return Math.round(currentOffset / pageSize);
  };

  var trackScroll = function(isSwiping) {
    var currentPage = calcCurrentPage(scrollBox.scrollLeft, scrollThreshold);
    var pageDelta = currentPage - oldPage;

    if (pageDelta != 0) {
      var trackScroll = function() {
        oldPage = currentPage;
        if (pageDelta > 0) {
          isSwiping ? logSwipeNext() : logClickNext();
        } else if (pageDelta < 0) {
          isSwiping ? logSwipePrev() : logClickPrev();
        }
      };

      if (isSwiping) {
        debounce(trackScroll, scrollTrackDelay);
      } else {
        trackScroll();
      }
    }
  };

  function debounce(fn, delay) {
    var context = this,
        args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }

  return {
    init: function(options) {
      scrollThreshold = requireField(options, 'swipeThreshold');
      scrollBox = requireField(options, 'scrollBox');
      oldPage = calcCurrentPage(scrollBox.scrollLeft, scrollThreshold);
    },
    trackScroll: trackScroll
  };
});
