(function() {
  var cb = function(e) {
    var e = window.e || e;
    var el;

    if (e.target.tagName !== 'A') {
      if (e.target.parentNode && e.target.parentNode.tagName === 'A') {
        el = e.target.parentNode;
      } else {
        return;
      }
    } else {
      el = e.target;
    }

    if (el.href &&
        el.href.indexOf(location.host) === -1 &&
        (el.href.match(/^http:/i) || el.href.match(/^https:/i))) {
      var i = new Image().src = '//zdbb.net/n/MzAzMTY1MzktMzY2Ni02Mw?t=' + encodeURIComponent(el.href) + '&or=' + encodeURIComponent(document.referrer);
      var dm = window.location.hostname || window.location.host;
      if (dm.indexOf("pcmag.co") >= 0) {
        try {
          if (window._gaq) window._gaq.push(['_trackEvent', 'outbound', 'click', el.href, undefined, true]);
          if (window.ga) window.ga('send', 'event', 'outbound', 'click', el.href);
        } catch (e) { console.log(e); }
      }
    }
  };

  if (document.addEventListener) {
    document.addEventListener('click', cb, false);
  } else {
    document.attachEvent('onclick', cb, false);
  }
  console.log('ZD Core :: Outbound Link Tracking Initialized');
})();
