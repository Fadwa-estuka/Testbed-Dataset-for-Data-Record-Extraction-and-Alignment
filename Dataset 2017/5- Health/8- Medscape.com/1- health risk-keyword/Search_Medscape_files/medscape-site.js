//Last Updated 02/19/16 by JN
//Prev Updated 10/23/15 by JS
sessionTimeOut = {
    _timeSet: 60000*20,
    _userstate:"active",
    inactiveTime:"",
    init:function() {
        inactiveTime = setTimeout(sessionTimeOut.logoutUser,sessionTimeOut._timeSet);
        document.onmousemove = sessionTimeOut.resetTimer;
        document.onkeypress = sessionTimeOut.resetTimer;
        document.onscroll = sessionTimeOut.resetTimer;
        document.ontouch = sessionTimeOut.resetTimer;
    },
    logoutUser:function() {
        if(sessionTimeOut._userstate=="active") {
            sessionTimeOut._userstate="inactive";
            $.ajax({
                type:"GET",
                url:"https://login."+getDomain('profreg')+"medscape.com/login/sso/setNetworkAttribute/inactive/true",
                dataType:'jsonp',
                success:function(data) {
                    if(window.console){console.log('inactive');}
                }
            });
        }
    },
    resetTimer:function(){
        if(sessionTimeOut._userstate=="active") {
            clearTimeout(sessionTimeOut.inactiveTime);
            inactiveTime = setTimeout(sessionTimeOut.logoutUser,sessionTimeOut._timeSet);
        }
    }
}
var getDomain = function(profreg){
    var _domain ="";
    if (window.location.host.split('.').length == 4){
        _domain = window.location.host.split('.')[1] + ".";
    }
    if (window.location.host.split('.').length == 5){
        _domain = window.location.host.split('.')[1] + "."+ window.location.host.split('.')[2] + ".";
    }
    if(profreg=="profreg"||profreg=="login"){
        _domain = _domain.replace('staging.','').replace('proddev.','');
    }
    return _domain;
}
sessionTimeOut.init();

/* Legacy Tracker Marker Conversion to Omniture Link Scraper */
var trackerMarkerOmni = function(){
    if (typeof $(document).on != 'undefined') {
        $(document).on('click', 'a[href*="/px/tr"]', function(event) {
            var tm = "";
            var clkurl = "";
            if (this.href.match(/(svr|tracker)/) != null) {
                tm = 'trackerm:' + this.href.match(/\/px\/(trk\.svr|tracker)([^?]+)?/)[0];
            }
            if (this.href.match(/\?exturl=.+$/) != null) {
                clkurl = 'trackerm:' + this.href.match(/\?exturl=.+$/)[0].split("?")[1];
            }
            //this.href = this.href.replace(/https?:\/\/[^\/]+\/px\/(tracker|trk\.svr)(\/[^?]+)?\?exturl=/, '');
            wmdTrackerMarker(tm,clkurl);
        });
    }
}
if (typeof $ != 'undefined') {
    $(document).ready(function() {
        trackerMarkerOmni();
    });
} else {
    window.addEventListener("load", function() {
        if (typeof $ != 'undefined') {
            trackerMarkerOmni();
        }
    }, false);
}
/* /Legacy Tracker Marker Conversion to Omniture Link Scraper */
/* Code to search for the video tag marker and dynamically include the AMP player .js file
 * To Do: start using the new data attribute to search for the players instead of the hard-coded
  * id="cme-video-player"*/

if(document.getElementById('cme-video-player') != null && document.getElementById('video-bundle') == null) {
  var config = document.getElementById('cme-video-player').getAttribute('data-config'),
     fileref = document.createElement('script'),
    scriptEl = document.createElement('script');

  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute('id', 'video-bundle');
  fileref.setAttribute('src', 'http://img.' + getDomain() + 'medscapestatic.com/pi/core/corelib.bundle.js');

  window.storeConfig = function(obj) {
    if(obj && obj.config && obj.config.articleId) {
      window.storedConfigs = {};
      window.storedConfigs[obj.config.articleId] = obj;
      if(window.location.pathname.indexOf('cme-example') !== -1) {
        var fragment = window.location.hash.replace('#','');
        window.storedConfigs[fragment] = obj
      }
    }
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
  scriptEl.setAttribute('src','http://api.' + getDomain() + 'medscape.com/contentservice/video/content/' + config +  '?callback=storeConfig');
  document.body.appendChild(scriptEl);
}
