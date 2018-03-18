window.require(['nativeadPartnerData'], function (nativeadPartnerData) {
  var EXPTIME = 604800000;    // 7 days
  var EXPTIMEERROR = 3600000; // 1 hour
  var LSIDKEY = 'outbrain-msn-uid';
  var LSLASTUPKEY = 'outbrain-msn-last-update';
  var LSLASTERRKEY = 'outbrain-msn-last-error';
  var OBURL = location.protocol + '//sync.outbrain.com/uidmap';

  var post = function (data, callback) {
    var xmlReq = getXHR();
    xmlReq.withCredentials = true;
    xmlReq.open('post', OBURL, true);
    xmlReq.responseType = 'json';
    xmlReq.onreadystatechange = function () {
      if (xmlReq.readyState === 4) {
        callback(xmlReq.response);
      }
    };
    xmlReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlReq.send(data);
  };

  var fire = function (newId, timestamp) {
    post('user_id=' + newId, function (res) {
      if (res.status === "ok") {
        localStorage[LSIDKEY] = newId;
        localStorage[LSLASTUPKEY] = timestamp;
      }
      else {
        localStorage[LSLASTERRKEY] = timestamp;
      }
    });
  };

  var getXHR = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    }
    var versions = [
      "MSXML2.XmlHttp.6.0", // the latest MSXML
      "MSXML2.XmlHttp.3.0"  // support IE8.0
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch (e) {
      }
    }
    return xhr;
  };

  var init = function() {
    if (nativeadPartnerData) {
      var timestamp = Date.now();
      var dataObject = nativeadPartnerData.getData();

      if (typeof(Storage) !== 'undefined' && window.localStorage) {
        var newId = dataObject['cid'];
        var oldId = localStorage[LSIDKEY];
        var lastUpdate = parseInt(localStorage[LSLASTUPKEY] || 0);
        var lastError = parseInt(localStorage[LSLASTERRKEY] || 0);

        if ((lastUpdate + EXPTIME) > timestamp || (lastError + EXPTIMEERROR) > timestamp) { // check expired time, or last time error occurred
          return;
        }
        if (oldId && oldId !== newId) {
          localStorage.removeItem(LSIDKEY);
          localStorage.removeItem(LSLASTUPKEY);
          localStorage.removeItem(LSLASTERRKEY);
        }
        fire(newId, timestamp);
      }
    }
  };

  init();
});