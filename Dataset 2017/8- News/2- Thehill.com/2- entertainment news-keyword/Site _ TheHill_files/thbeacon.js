window.addEventListener('load', beaconInit, false);
//window.addEventListener('beforeunload', beaconEnd, false);
//var intervalID = window.setInterval(beaconInit, 45000);
//2016-12-21 4:57 am




function beaconPing(){
  var c = new ClientJS();
  var userId = c.getFingerprint();
  var userOS = c.getOS();
  var userBrowser = c.getBrowser();

  var analyticsData = {};
  //console.log(analyticsData);
  var client = new XMLHttpRequest();
  //var client_2 = new XMLHttpRequest();
  var currenturl = window.location.href;
  //var referer = document.referrer;
  analyticsData.starttime = Date.now();
  analyticsData.url = currenturl;
  //analyticsData.site = 'The Hill';
  analyticsData.userId = userId;
  //analyticsData.referer = referer;
  //analyticsData.useragent = navigator.userAgent;
  //analyticsData.dynamic_args = {};
  //if( typeof beacon_conf !== 'undefined'){
  //    analyticsData.dynamic_args = beacon_conf;
  //}
  console.log(analyticsData);
  //client.open("POST", "http://tab.thehill.com/api/ping", true);
  //client.setRequestHeader("Content-Type", "text/plain");
  //client.send(JSON.stringify(analyticsData));
}

/**
* function beaconEnd() fires one last event when leaving the page giving info about where the user clicked.
*/
function beaconEnd(){
  var c = new ClientJS();
  var userId = c.getFingerprint();
  var userOS = c.getOS();
  var userBrowser = c.getBrowser();
  var client = new XMLHttpRequest();
  var client_2 = new XMLHttpRequest();
  var currenturl = window.location.href;
  var referer = document.referrer;
  analyticsData.starttime = Date.now();
  analyticsData.url = currenturl;
  analyticsData.site = 'The Hill';
  analyticsData.userId = userId;
  analyticsData.userOS = userOS;
  analyticsData.userBrowser = userBrowser;
  analyticsData.referer = referer;
  analyticsData.useragent = navigator.userAgent;
  analyticsData.dynamic_args = {};
  if( typeof beacon_conf !== 'undefined'){
      analyticsData.dynamic_args = beacon_conf;
  }
  console.log(analyticsData);
  //client.open("POST", "http://tab.thehill.com/api/save", true);
  //client_2.open("POST", "http://104.196.125.157:3000/api/save", true); // third parameter indicates sync xhr
  //client.setRequestHeader("Content-Type", "application/json");
  //client_2.setRequestHeader("Content-Type", "application/json");
  //client.send("endtime="+Date.now()+"author=tim&url="+currenturl+"&site=hill&userid="+userId+"&referer="+referer+"&useragent="+navigator.userAgent+"&browsername="+navigator.appName);
  alert(client.responseText);
}

/**
* function beaconInit() fires immediately when page is called.
*/
function beaconInit() {
    var c = new ClientJS();
    var userId = c.getFingerprint();
    var userOS = c.getOS()+' '+c.getOSVersion();
    var userBrowser = c.getBrowser()+' '+c.getBrowserMajorVersion();
    var client = new XMLHttpRequest();
    //var client_2 = new XMLHttpRequest();
    var currenturl = window.location.href;
    var path_sections  = window.location.pathname.split( '/' );
    var referer = document.referrer;

    var analyticsData = {};
    if(document.querySelector("[property=author]")){
      var author = document.head.querySelector("[property=author]").content;
      analyticsData.contributor = author;
    }
    if(document.querySelector("[property=createdAtMonth]")){
      var createdAtMonth = document.head.querySelector("[property=createdAtMonth]").content;
      analyticsData.createdAtMonth = createdAtMonth;
    }
    if(document.querySelector("[property=createdAtWeek]")){
      var createdAtWeek = document.head.querySelector("[property=createdAtWeek]").content;
      analyticsData.createdAtWeek = createdAtWeek;
    }
    if(document.querySelector("[property=section_hash]")){
      var section_hash = document.head.querySelector("[property=section_hash]").content;
      analyticsData.section_hash = section_hash;
    }
    if(document.querySelector("[property=page_hash]")){
      var page_hash = document.head.querySelector("[property=page_hash]").content;
      analyticsData.page_hash = page_hash;
    }
    if(document.querySelector("[property=slug]")){
      var slug = document.head.querySelector("[property=slug]").content;
      analyticsData.slug = slug;
    }

    analyticsData.starttime = Date.now();
    analyticsData.url = currenturl;
    analyticsData.site = 'The Hill';
    analyticsData.userId = userId;
    analyticsData.userOS = userOS;
    analyticsData.userBrowser = userBrowser;
    analyticsData.referer = referer;
    //analyticsData.refererDomain = refererDomain;
    analyticsData.useragent = navigator.userAgent;
    analyticsData.section = path_sections[2];
    if(typeof beacon_conf !== 'undefined'){
      analyticsData.dynamic_args = beacon_conf;
    }else{
        //analyticsData.dynamic_args = {};
    }
    console.log(analyticsData);

    client.onreadystatechange = function() {
      if (client.readyState == XMLHttpRequest.DONE) {
          var apiResult = JSON.parse(client.responseText);
          console.log(client.responseText);
          if(!userId){
            setCookie("userid",apiResult.message,7);
          }

      }
    }

    //analyticsData = extend(analyticsData,beacon_conf);
    console.log("merged",analyticsData);
    //client.open("POST", "http://tab.thehill.com/api/save", true);
    //client.setRequestHeader("Content-Type", "text/plain");
    //client.send(JSON.stringify(analyticsData));

    client.open("POST", "http://lb-beacon-1-416458574.us-east-2.elb.amazonaws.com/api/save", true);
    client.setRequestHeader("Content-Type", "text/plain");
    client.send(JSON.stringify(analyticsData));
}
/**
* function getCookie ... sets a cookie you know :)
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; ";
}

/**
* function getCookie ... gets a cookie you know :)
*/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
* function extend merges two objects into one. That way we can have dynamic arguments
*/

function extend(a, b){
   for(var key in b)
       if(b.hasOwnProperty(key))
           a[key] = b[key];
   return a;
}
