(function (w) {
// Begin doc

var is_dev = false;

if ( false ) {
  is_dev = true;
}

/**
 * Globals
 **/
var globals = {
  load_num: 0,
  init: false,
  addr: is_dev ? "http://192.168.50.4" : "https://east.srv.stackadapt.com",
  aid: "",
  impid: "",
  default_params: "",
  landing_page: "",
  secs_passed: 0,
  tec_secs_passed: 0,
  hidden: false,
  host: window.location.protocol + '//' + window.location.host
};

/**
 * Page Visibility API
 **/

var hidden = "hidden";
var window_status = "visible"

// Standards:
if (hidden in document)
  document.addEventListener("visibilitychange", onhiddenchange);
else if ((hidden = "mozHidden") in document)
  document.addEventListener("mozvisibilitychange", onhiddenchange);
else if ((hidden = "webkitHidden") in document)
  document.addEventListener("webkitvisibilitychange", onhiddenchange);
else if ((hidden = "msHidden") in document)
  document.addEventListener("msvisibilitychange", onhiddenchange);
// IE 9 and lower:
else if ("onfocusin" in document)
  document.onfocusin = document.onfocusout = onhiddenchange;
// All others:
else
  window.onpageshow = window.onpagehide
  = window.onfocus = window.onblur = onhiddenchange;

function onhiddenchange (evt) {
  var v = "visible", h = "hidden",
    evtMap = {
      focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
    };

  evt = evt || window.event;
  if (evt.type in evtMap)
    window_status = evtMap[evt.type];
  else
    window_status = this[hidden] ? "hidden" : "visible";
}

if( document[hidden] !== undefined )
    onhiddenchange({type: document[hidden] ? "blur" : "focus"});


/**
 * Cookies library
 **/

var Cookies = function (key, value, options) {
  return arguments.length === 1 ?
      Cookies.get(key) : Cookies.set(key, value, options);
};

Cookies._document = document;
Cookies._navigator = navigator;
Cookies.defaults = {
  path: '/'
};

Cookies.get = function (key) {
  if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
      Cookies._renewCache();
  }

  return Cookies._cache[key];
};

Cookies.set = function (key, value, options) {
  options = Cookies._getExtendedOptions(options);
  options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);
  Cookies._document.cookie = Cookies._generateCookieString(key, value, options);
  return Cookies;
};

Cookies.expire = function (key, options) {
  return Cookies.set(key, undefined, options);
};

Cookies._getExtendedOptions = function (options) {
  return {
      path: options && options.path || Cookies.defaults.path,
      domain: options && options.domain || Cookies.defaults.domain,
      expires: options && options.expires || Cookies.defaults.expires,
      secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure
  };
};

Cookies._isValidDate = function (date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

Cookies._getExpiresDate = function (expires, now) {
  now = now || new Date();
  switch (typeof expires) {
      case 'number': expires = new Date(now.getTime() + expires * 1000); break;
      case 'string': expires = new Date(expires); break;
  }

  if (expires && !Cookies._isValidDate(expires)) {
      throw new Error('`expires` parameter cannot be converted to a valid Date instance');
  }

  return expires;
};

Cookies._generateCookieString = function (key, value, options) {
    key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
    key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
    value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
    options = options || {};

    var cookieString = key + '=' + value;
    cookieString += options.path ? ';path=' + options.path : '';
    cookieString += options.domain ? ';domain=' + options.domain : '';
    cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
    cookieString += options.secure ? ';secure' : '';

    return cookieString;
};

Cookies._getCookieObjectFromString = function (documentCookie) {
    var cookieObject = {};
    var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

    for (var i = 0; i < cookiesArray.length; i++) {
        var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

        if (cookieObject[cookieKvp.key] === undefined) {
            cookieObject[cookieKvp.key] = cookieKvp.value;
        }
    }

    return cookieObject;
};

Cookies._getKeyValuePairFromCookieString = function (cookieString) {
    // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
    var separatorIndex = cookieString.indexOf('=');

    // IE omits the "=" when the cookie value is an empty string
    separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

    try {
      return {
        key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
        value: decodeURIComponent(cookieString.substr(separatorIndex + 1))
      };
    } catch (e){
      return {
        key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
        value: cookieString.substr(separatorIndex + 1)
      };
    }
};

Cookies._renewCache = function () {
    Cookies._cache = Cookies._getCookieObjectFromString(Cookies._document.cookie);
    Cookies._cachedDocumentCookie = Cookies._document.cookie;
};

Cookies._areEnabled = function () {
    var testKey = 'cookies.js';
    var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
    Cookies.expire(testKey);
    return areEnabled;
};

Cookies.enabled = Cookies._areEnabled();

/**
 * Conversion
 **/

function loadConv(args){
    var img = new Image();

    function remove() {
        document.body.removeChild(img);
    }

    if (!args) return;
    img.onerror = remove;
    img.onload = remove;
    img.src = sa_url + "/conv?cid=" + args;
    document.body.appendChild(img);
    return true;
}

/**
 * Retargeting
 **/

function loadRt(args){
    loadRtHelper(sa_url, args)
    loadRtHelper(sa_url_uw, args)
    loadRtHelper(sa_url_eu, args)
    return true;
}

function loadRtHelper(url, args) {
    var img = new Image();

    function remove() {
        document.body.removeChild(img);
    }

    //console.log(url);

    if (!args) return;
    img.onerror = remove;
    img.onload = remove;
    img.src = url + "/rt?sid=" + args;
    document.body.appendChild(img);
}

/**
 * Time on site
 **/

function loadTs(args){
  if (!document.tsPixelLoaded) {
    document.tsPixelLoaded = {}
  }
  if (!document.tsPixelLoaded['sa_pixel_loaded']) {
    document.tsPixelLoaded['sa_pixel_loaded'] = true
  } else {
    return
  }

  var uid = args;

  var aid = "";
  var sid = "";
  var adurl = "";
  var send_pv = false;

  if (!aid || !sid) {
    aid = Cookies.get("sa_aid_pv");
    sid = Cookies.get('sa_' + aid + "_sid");
    adurl = Cookies.get('sa_' + aid + "_adurl");
    send_pv = true;
  }

  if (is_dev) {
     adurl = "http://192.168.50.4";
  }

  if (adurl && !is_dev) {
    if (adurl.indexOf("eu.srv.stackadapt.com") > -1) {
      globals.addr = "https://eu.srv.stackadapt.com";
    } else if (adurl.indexOf("uw.srv.stackadapt.com") > -1) {
      globals.addr = "https://uw.srv.stackadapt.com";
    } else {
      globals.addr = "https://east.srv.stackadapt.com";
    }
  }

  ////////////////////////////////////////////////
  // The engagement curve call
  // Should we combine tec_secs_passed and sec_passed? Does that affect the number of times /ifr_ts is called?

  // Check if you are iframe
  if (!document.referrer) {
    document.referrer = ""
  }

  var referrer = document.referrer || "none"
  if (window.self !== window.top) {
    var landing_url = document.referrer.split(/\?(.+)?/)[0]
    var current_window_url_param = document.referrer.split(/\?(.+)?/)[1] || "prev_window_param=none"
  } else {
    var landing_url = window.location.href.split(/\?(.+)?/)[0]
    var current_window_url_param = window.location.href.split(/\?(.+)?/)[1] || "prev_window_param=none"
  }

  current_window_url_param = current_window_url_param.replace(/#/g, "")
  uid = uid.replace(/#/g, "")
  landing_url = landing_url.replace(/#/g, "")

  var tec_increment = function () {
    if (window_status != "visible") return;
    if (globals.tec_secs_passed > 3600) return;

    globals.tec_secs_passed++;
    if (is_dev) {
      makeCorsRequest('http://192.168.50.4' + '/tec_ts?' + current_window_url_param + "&uid="+ uid + "&landing_url=" + landing_url + "&host=" + globals.host +"&sec=" + globals.tec_secs_passed + "&referrer=" + referrer);
    } else {
      makeCorsRequest('https://srv.stackadapt.com' + '/tec_ts?' + current_window_url_param + "&uid="+ uid + "&landing_url=" + landing_url + "&host=" + globals.host +"&sec=" + globals.tec_secs_passed + "&referrer=" + referrer);
    }
  };

// Checking if the click was redirected from the a different domain than the domain the user is on
  if ((referrer == "none" || !document.referrer.includes(window.location.hostname)) && current_window_url_param.indexOf("utm_source") >= 0){
    setInterval(tec_increment, 1000);
    if (is_dev) {
      makeCorsRequest('http://192.168.50.4' + '/tec_ts?' + current_window_url_param + "&uid="+ uid + "&landing_url=" + landing_url + "&host=" + globals.host + "&sec=0" + "&referrer=" + referrer);
    } else {
      makeCorsRequest('https://srv.stackadapt.com' + '/tec_ts?' + current_window_url_param + "&uid="+ uid + "&landing_url=" + landing_url + "&host=" + globals.host + "&sec=0" + "&referrer=" + referrer);
    }
  }
  ////////////////////////////////////////////////

  if (referrer == "none" || !document.referrer.includes(window.location.hostname)) {
    jsPing(uid);
  }

  if (!aid || !sid) {
    return;
  }

  globals.default_params = "aid=" + aid + "&imp=" + sid;

  var ts_request = function() {

    if (globals.secs_passed > 3600) return;

    if (window_status != "visible") return;

    globals.secs_passed++;
    url = globals.addr + "/ifr_ts?" + globals.default_params + "&first=false&is_js=true&host=" + globals.host;

    makeCorsRequest(url);
  };

  setInterval(ts_request, 1000);

  if (send_pv) {
    makeCorsRequest(globals.addr + "/ifr_pv?" + globals.default_params + "&is_js=true&host="  + globals.host);
  } else {
    Cookies.set("sa_aid_pv", aid, { expires: 3600 });
    Cookies.set('sa_' + aid + "_sid", sid, { expires: 3600 });
    Cookies.set('sa_' + aid + "_adurl", globals.addr, { expires: 3600 });
  }

  makeCorsRequest(globals.addr + "/ifr_ts?" + globals.default_params + "&first=true&is_js=true&host="  + globals.host + "&uid=" + encodeURIComponent(uid));
}

function jsPing(uid) {
  // Check if you are iframe
  if (window.self !== window.top) {
    var landing_url = document.referrer.split(/\?(.+)?/)[0]
  } else {
    var landing_url = window.location.href.split(/\?(.+)?/)[0]
  }

  var url = "https://tags.srv.stackadapt.com/js_tracking?url=" + encodeURIComponent(landing_url) + "&uid=" + encodeURIComponent(uid) + "&host=" + globals.host;

  if (is_dev) {
    url = globals.addr + "/js_tracking?url=" + encodeURIComponent(landing_url) + "&uid=" + encodeURIComponent(uid);
  }

  makeCorsRequest(url);
}

/***
 * Request helpers
 */

function createCORSRequest(method, url, success, err) {
  var xhr;

  try {
    xhr = new XMLHttpRequest();
  } catch(e) {
  }

  if (xhr && "withCredentials" in xhr){
    xhr.open(method, url, true);
    xhr.withCredentials = true;
  } else if (typeof XDomainRequest != "undefined"){
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else if (typeof ActiveXObject != "undefined"){
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(method, url);
  } else {
    xhr = null;
  }

  if (xhr) {

    xhr.onload = function() {
      success(xhr);
    };

    xhr.onerror = function() {
      err(xhr);
    };

    setTimeout(function () {
        xhr.send();
    }, 0);
  }
}


function makeCorsRequest(url) {
  var success = function(xhr) {
  };

  var err = function(xhr) {
  };

  //console.log("sending request");
  createCORSRequest('GET', url, success, err);
}


/**
 * Main execution
 **/

try {
  var sa_url = "https://srv.stackadapt.com";
  var sa_url_uw = "https://uw.srv.stackadapt.com";
  var sa_url_eu = "https://eu.srv.stackadapt.com";

  if (is_dev) {
    sa_url = "http://192.168.50.4";
    sa_url_uw = "http://192.168.50.5";
    sa_url_eu = "http://192.168.50.6";
  }
  var sa_params = w.saq;
  var bus = Array.prototype.slice;

  sa_params.callMethod = function(events) {
    var args = bus.call(arguments),
        single_arg = args.length === 1 && i.isArray(args[0]);
    if (single_arg) args = args[0];

    var events = args.shift();

    switch (events) {
      case 'conv':
        return loadConv.apply(this, args);
      case 'rt':
        return loadRt.apply(this, args);
      case 'ts':
        return loadTs.apply(this,args);
      default:
        console.log("unknown function");
    }
  }

  var x = sa_params.queue.slice();
  for (var y = 0, z = x.length; y < z; y++) sa_params.callMethod.apply(sa_params, x[y]);

}catch(err){
  console.log(err.stack);
}


// End doc
})(window,document,location,history);

