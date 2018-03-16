define(['../core/events', '../core/raf'], function (events, raf) {

  "use strict";

  var scroll = (function() {

    var animationId,
      totalIterations,
      iterationCount,
      startValue,
      changeInValue,
      scrolling = false,
      initialised = false;

    var resetAnimationCount = function () {
      scrolling = true;
      totalIterations = 25;
      iterationCount = 0;
    };

    var scrollRight = function (pageSize, callback) {
      checkIfInitialised();

      // debounce
      if (scrolling) {
        return;
      }

      resetAnimationCount();
      animateScroll(pageSize, callback);
    };

    var scrollLeft = function (pageSize, callback) {
      checkIfInitialised();

      // debounce
      if (scrolling) {
        return;
      }

      resetAnimationCount();
      animateScroll(pageSize * -1, callback);
    };

    var animateScroll = function (deltaScroll, callback) {
      startValue = scroll.scrollBox.scrollLeft;

      var to = scroll.scrollBox.scrollLeft + deltaScroll;
      to = to < 0 ? 0 : to;
      to = to > maxLeftScroll() ? maxLeftScroll() : to;
      changeInValue = to - startValue;

      scrollAnimation(function (interval) {
        var newPosition = easeOutCubic(iterationCount, startValue, changeInValue, totalIterations);

        iterationCount++;

        scroll.scrollBox.scrollLeft = newPosition;

        if(iterationCount >= totalIterations) {
          scroll.scrollBox.scrollLeft = to;
          scrolling = false;
          return false;
        }
      }, scroll.scrollBox, callback);
    };

    function scrollAnimation(render, element, callback) {
      var running,
        lastFrame = new Date().getTime();

      function loop(now) {
        if (running !== false) {
          animationId = requestAnimationFrame(loop, element);
          var interval = now - lastFrame;
          // if browser tab is inactive, requestAnimationFrame may be throttled by the browser vendor
          if (interval < 160 && interval > 0) {
            running = render(interval);
          }
          lastFrame = now;
        }
        else {
          cancelAnimationFrame(animationId);
          scrolling = false;
          if (typeof(callback) != "undefined") {
            callback();
          }
        }
      }

      loop(lastFrame);
    }

    function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
      return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
    }

    function maxLeftScroll() {
        return scroll.scrollBox.scrollWidth - scroll.scrollBox.clientWidth;
    }

    function cancelScroll() {
      checkIfInitialised();

      if(animationId) {
        cancelAnimationFrame(animationId);
        scrolling = false;
      }
    }

    function checkIfInitialised () {
      if (!initialised) {
        throw Error('Instance not initialised');
      }
    }

    function init(theScrollBox) {
      this.scrollBox = theScrollBox;

      // cancel any scrolling if carousel is clicked
      events.addEvent('click', cancelScroll, this.scrollBox);

      initialised = true;
    }

    // public interface
    return {
      init: init,
      scrollRight: scrollRight,
      scrollLeft: scrollLeft
    };
  })();

  return scroll;
});
