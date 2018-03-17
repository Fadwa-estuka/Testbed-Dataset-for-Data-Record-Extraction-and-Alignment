(function (w, d) {
  'use strict';
  var s1 = d.getElementsByTagName('script')[0],
      s = d.createElement('script'),
      types,
      attr,
      pageFn,
      onReady;

      types = {
        'Aricle': true,
        'Review': true,
        'video.other': true,
        'blog': true
      };

  s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';

  attr = function (domQ, name) {
    var l = document.querySelector(domQ);
    if (l) {
      // Use getAttribute() to avoid encoded strings.
      return l.getAttribute(name);
    }
    return undefined;
  };

  pageFn = function () {
    var l, u,
        ogtype = attr('meta[property="og:type"]', 'content');
    if (w.TRUE_ANTHEM.isValidPageType(ogtype) || types[ogtype]) {
      l = document.location;
      u = l.protocol + '//' + l.host + l.pathname;
      return {
        'canonical': attr('link[rel="canonical"]', 'href'),
        'og:type': 'article',
        'og:url': attr('meta[property="og:url"]', 'content')
      };
    }
    return {};
  };

  onReady = function () {
    var l = document.location,
        h = l.hostname.toLowerCase(),
        cid;
    if (h.indexOf('cnet.com') > -1) {
        cid = '699';
    } else if (h.indexOf('gamespot.com') > -1) {
        cid = '948';
    } else if (h.indexOf('techrepublic.com') > -1) {
        cid = '1071';
    } else if (h.indexOf('cbssports.com') > -1) {
        cid = '1074';
    } else if (h.indexOf('zdnet.com') > -1) {
        cid = '1082';
    } else if (h.indexOf('tvguide.com') > -1) {
        cid = '1080';
    } else if (h.indexOf('cbsnews.com') > -1) {
        cid = '1081';
    }
    if (cid) {
      w.TRUE_ANTHEM.configure(cid, {page: pageFn});
    }
  };
  if (s.addEventListener) {
    s.addEventListener('load', onReady, false);
  } else {
    s.onreadystatechange = function () {
      if (s.readyState in {loaded: 1, complete: 1}) {
        s.onreadystatechange = null;
        onReady();
      }
    };
  }
  s1.parentNode.insertBefore(s, s1);
}(window, document));
