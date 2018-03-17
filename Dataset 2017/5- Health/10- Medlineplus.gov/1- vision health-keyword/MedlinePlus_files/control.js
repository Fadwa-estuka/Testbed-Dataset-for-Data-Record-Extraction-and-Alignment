var MedlinePlus = (function _mp(undefined) {
  var protocol = window.location.protocol;
  var _root = $("html").attr("data-root");
  var _taggingURL = "//wtsdc.nlm.nih.gov/dcsutpzmv10000gkm7ykazpb0_2x3w/njs.gif?dcsuri=/nojavascript&WT.js=No&WT.tv=9.4.0&dcssip=medlineplus.gov&dcsid=dcsutpzmv10000gkm7ykazpb0_2x3w"+"&token=" + encodeURIComponent(rand(1,100000));
  var _pcss = {};
  var js1 = [];
  var acnjs = [
    protocol+"//www.nlm.nih.gov/core/nlm-notifyExternal/1.0/nlm-notifyExternal.js",
    protocol+"//www.nlm.nih.gov/core/nlm-autocomplete/1.0/nlm-autocomplete.js",
    _root+"/jslib/jquery-ui-1.10.4.min.js"];

  var acncss = [
    _root+"/css/jquery-ui/jquery-ui.css|screen"];
  var foresee = {
         "en":(protocol+"//medlineplus.gov/jslib/foresee2/foresee-trigger.js"),
         "es":(protocol+"//medlineplus.gov/jslib/foresee2/foresee-trigger.js")};
  var _pid = $("html").attr("id");
  var _langiso = $("html").attr("lang");
  var _lang = (_langiso=="en")?"us":"esm";
  var _lang_also = (_lang=="us")?"esm":"us";

  var bmapjs={"tpgp":[ _root+"/jslib/_tpgp.js", _root+"/jslib/jquery.maphilight.js" ]};
  var pjs={"static-share-rss":[_root+"/jslib/_rss.js"],"static-share-drug":[_root+"/jslib/_druglanding.js"]};
  var commonjs = [];
  var notTouchCnt= document.referrer.indexOf('nlmgis01.nlm.nih.gov') < 0;
  var notTouchCnt2= document.referrer.indexOf('nlmgis02.nlm.nih.gov') < 0;
  var notTouchCnt3= document.referrer.indexOf('www.bing.com/toolbox/seo-analyzer') < 0;

  function rand(l,u) {
    return Math.floor((Math.random() * (u-l+1))+l);
  }

  function gup( name ) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=(.*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
      return null;
    else
      return results[1];
  }
  function _loadanother(type,list) {
    if (0<list.length) {
      _multiload(type,list);
    }
    else {
      init();
    }
  }
  function getScriptCached(url, callback)
  {
    jQuery.ajax({
      type: "GET",
      url: url,
      success: callback,
      dataType: "script",
      cache: true
    });
  }
  function checkCOOPFlag() {
    var createCookie = function(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
      }
      else var expires = '';
      document.cookie = name + '=' + value + expires + '; path=/';
    };
    var readCookie = function(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    };
    var eraseCookie = function(name) {
      createCookie(name, '', -1);
    };
    $.getScript("//www.nlm.nih.gov/coop_all.js", function() {
      if (!readCookie("coop")) {
        if (_lang == "us" && typeof coopMessageALL !== 'undefined') {
          $("#mplus-content").prepend("<div id='coop'>" + coopMessageALL + "</div>");
        }
        else if (_lang == "esm" && typeof coopMessageAllSpanish !== 'undefined') {
         $("#mplus-content").prepend("<div id='coop'>" + coopMessageAllSpanish + "</div>");
       }
     }
     $("#coop #hide").click(function() {
      $("#coop").hide();
      createCookie("coop", "hidden");
    });
   });
  }
  function _multiload(type,list) {
    if ("js"==type) {
      getScriptCached(list.pop(), function() {_loadanother(type,list);});
    }
    else {
      while(0<list.length) {
        var _item = (list.pop()).split("|");
        $('head').append( $('<link rel="stylesheet" type="text/css" href="' + _item[0] + '"/>').attr('media', _item[1]) );
      }
    }
  }

  $(document).ready(function _IIFE() {

    var obj;
    obj = $("button[aria-controls='az-section2']");
    if (!$.isEmptyObject(obj)) {
      $(obj).trigger("click");
    }
    // Body Map maphilight js lib files only work after the
    // https://www.nlm.nih.gov/core/jquery/1.4/jquery.min.js is loaded.
    if (bmapjs[_pid]) {
      js1 = js1.concat(bmapjs[_pid]);
    }

    js1 = js1.concat(acnjs);

    _multiload("css",acncss);
    /* load commonly used js files */
    js1 = js1.concat(commonjs);
    if (pjs[_pid]) {
      js1 = js1.concat(pjs[_pid]);
    }
    _multiload("js",js1);

    //Remove any old Share Code
    $(".addthis_toolbox").html("");

    //Check COOP Flag and display message if necessary
    checkCOOPFlag();
  });

  function init() {
    if (top.location != self.location && notTouchCnt && notTouchCnt2 && notTouchCnt3) {
      if ((!/\/spanish\//.test(self.location)) && (!/project=medlineplus-spanish/.test(self.location))) {
        location.replace(protocol+'//medlineplus.gov/framing.html?rf=' + self.location);
      }
      else {
        location.replace(protocol+'//medlineplus.gov/spanish/framing.html?rf=' + self.location);
      }
    }

    if ("undefined"!=typeof nlm) {
      (function($,nlm) {
        $(document).ready(function() {
            nlm.autocomplete.add({
                element: "#searchtext_primary",
                dictionary: ("en"===_langiso)?"medlineplus-ac-dictionary":"medlineplus-spanish-ac-dictionary",
                width: 0
          });
        });
      }(jQuery,nlm));
    }
  }

  return {
    rand: rand,
    _taggingURL: _taggingURL
  };
})();
