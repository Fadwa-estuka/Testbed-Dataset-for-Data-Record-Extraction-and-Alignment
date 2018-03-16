define(function () {

  var ie8Utils = {
    isIE8: false,

    polyfill: function () {
      if (!document.getElementsByClassName) {
        this.isIE8 = true;
        document.getElementsByClassName = function (className) {
          return document.querySelectorAll('.' + className);
        };

        // http://compatibility.shwups-cms.ch/en/polyfills/?&id=81
        Object.defineProperty(Element.prototype, 'firstElementChild', {
          get: function () { // faster then this.children[0]
            var el = this.firstChild;
            do {
              if (el.nodeType === 1) {
                return el;
              }
              el = el.nextSibling;
            } while (el);
            return null;
          }
        });

        Object.defineProperty(Element.prototype, 'nextElementSibling', {
          get: function () {
            var el = this.nextSibling;
            while (el) {
              if (el.nodeType === 1) {
                return el;
              }
              el = el.nextSibling;
            }
            ;
            return null;
          }
        });
      }
    },

    // IE8 needs to repaint to render :before and :after pseudo elements
    // see https://gist.github.com/tedw/6888794
    repaint: function () {
      var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

      style.type = 'text/css';
      style.styleSheet.cssText = ':before, :after {content: none !important}';
      head.appendChild(style);
      setTimeout(function () {
        head.removeChild(style);
      }, 0);
    },

    init: function () {
      this.polyfill();
    }
  };

  ie8Utils.init();
  if (ie8Utils.isIE8) {
    ie8Utils.repaint();
  }
  return ie8Utils;
});