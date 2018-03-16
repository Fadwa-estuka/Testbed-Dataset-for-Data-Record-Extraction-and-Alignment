define(function () {
  'use strict';

  return {
    addEvent: function (type, listener, element) {
      if (!element) {
        element = window;
      }
      if (element.addEventListener) {
        element.addEventListener(type, listener, false);
      }
      else if (element.attachEvent) {
        element.attachEvent('on' + type, listener);
      }
    },

    removeEvent: function (type, listener, element) {
      if(element.removeEventListener) {
        element.removeEventListener(type, listener, false);
      }
      else if(element.detachEvent()) {
        element.detachEvent ('on'+type, handler);
      }
    }
  };
});
