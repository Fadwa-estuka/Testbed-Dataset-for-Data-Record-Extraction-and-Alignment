if (typeof tmntag==='undefined') tmntag={};
tmntag.pubtargets = [];
tmntag.pubtargets.push(['partner', 'n']);
tmntag.pubtargets.push(['site', 'tmn.thus']);
tmntag.pubtargets.push(['TUUID', '6DEB79CAAF02496EA25873E431ACCE63']);
tmntag.pubtargets.push(['_rid', '6397982223142507']);
tmntag.pubtargets.push(['stype', 'SF_SEARCH']);
tmntag.pubtargets.push(['ctype', 'allSiteSearch_index']);
tmntag.pubtargets.push(['_rid', '6397982223142507']);
tmntag.pubtargets.push(['ccat1', 'other']);
tmntag.pubtargets.push(['_c', '1']);
tmntag.pubtargets.push(['kw', 'power_tools']);
tmntag.pubtargets.push(['_pmxPublisherId', '156007']);
tmntag.pubtargets.push(['_pgid', '14b2600c']);
tmntag.adtargets=[];
tmntag.vadtargets=[];
tmntag.markups=tmntag.markups||[];
tmntag.markupsInfo=tmntag.markupsInfo||[];
tmntag.adtargets['purchrtb-zonepub1']=[];
tmntag.adtargets['purchrtb-zonepub1'].push(['_wb', '1']);
tmntag.adtargets['purchrtb-zonepub1'].push(['divid', 'purchrtb-zonepub1']);
tmntag.adtargets['purchrtb-zonepub16']=[];
tmntag.adtargets['purchrtb-zonepub16'].push(['_wb', '3']);
tmntag.adtargets['purchrtb-zonepub16'].push(['divid', 'purchrtb-zonepub16']);
tmntag.adparams=tmntag.adparams||{};
tmntag.pubtargets.push(['_sw1440', '1']);
tmntag.pubtargets.push(['_sh768', '1']);
tmntag.pubtargets.push(['_ex', '|4|']);
/* Purch Ad Tag V1.2 */
TMNTAG_READY=1;
if (typeof window.context=='undefined' || !window.context) top.window.requestid='6397982223142507';
if (typeof tmntag.pubtargets!='undefined' && tmntag.pubtargets) {
  if (typeof tmntag_referrer!='undefined') {
	var ref = tmntag_referrer();
	if (ref.indexOf("google")>0) {
      tmntag.pubtargets.push(["_ts", "gs"]);
    } else if (ref.indexOf("yahoo")>0) {
    	tmntag.pubtargets.push(["_ts", "ys"]);
    } else if (ref.indexOf("bing")>0) {
    	tmntag.pubtargets.push(["_ts", "bs"]);
    }
  }
}
if (tmntag.timing) {
	tmntag.timing.startTag=(new Date().getTime());
}
if (typeof googletag!='undefined') {
  googletag.cmd.push(function() {
   if(typeof tmntag_defineSlot === "function" && typeof tmntag!='undefined' && typeof tmntag.a!='undefined') {
	  if (tmntag && tmntag.f==1) {
		  if (tmntag.adtargets) for (var divId in tmntag.adtargets) {
			  if (tmntag.adtargets.hasOwnProperty(divId)) {
				  tmntag_defineAdUnit(divId);
			  }
		  }
	  } else {
	      for (var i=0; i<tmntag.a.length; i++) {
	    	 var divId = tmntag.a[i].d;
	    	 tmntag_defineAdUnit(divId);
	      }
	  }
   } else {
      tmntag_defineSlots();
   }
	
	if(typeof tmntag!='undefined' && typeof tmntag.pubtargets!='undefined') {
		for (var i=0; i<tmntag.pubtargets.length; i++) {
			googletag.pubads().setTargeting(tmntag.pubtargets[i][0], tmntag.pubtargets[i][1]);
		}
	}

	if(typeof tmntag!='undefined' && typeof tmntag.su!='undefined' && tmntag.su===1 && typeof tmntag.l!='undefined') {
		googletag.pubads().set("page_url", decodeURIComponent(tmntag.l));
	}

	if(tmntag.f!==1 && typeof tmntag!='undefined' && typeof tmntag.sr!='undefined' && tmntag.sr==true) {
		 googletag.pubads().enableSingleRequest();
	}
	
	if(tmntag.f!==1 && typeof tmntag!='undefined' && typeof tmntag_il!='undefined' && tmntag_il==false) {
		googletag.pubads().disableInitialLoad();
	}
	
	if(tmntag.f!==1 && typeof tmntag!='undefined' && typeof tmntag.ced!='undefined' && tmntag.ced==true) {
		 googletag.pubads().collapseEmptyDivs();
	}

	if (tmntag.f!==1) {
		if (tmntag.timing) {tmntag.timing.startEnableServices=(new Date().getTime());}
		googletag.enableServices();
		tmntag_setGptLoaded();
		tmntag_callbacks.executeCallbacks();
		if (tmntag.timing) {tmntag.timing.endEnableServices=(new Date().getTime());}
	}
  });
  if (tmntag.f!==1) {
	for (divid in tmntag.slots) {
		var e = document.getElementById(divid);
		if (e && typeof e !='undefined' && tmntagDisplayed && tmntagDisplayed[divid]==1) {
			googletag.cmd.push(function() { googletag.display(divid); });
		}
	}

	if(typeof tmntag!='undefined' && typeof tmntag_il!='undefined' && tmntag_il==false){
		googletag.cmd.push(function() { googletag.pubads().refresh(); });
	}	
  }
}
if (tmntag.timing) {
	tmntag.timing.endTag=(new Date().getTime());
}
/* /Purch Ad Tag V1.2 */
tmntag_ready(function() {

(function(){try{var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol=="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//ads.pubmatic.com/AdServer/js/user_sync.html?r='+b+"&p=46338&predirect="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+b+'%26svc%3Dus%26id%3D5%26uid%3D"></iframe>';document.body.appendChild(a)}catch(d){console.error(d)}})();

});

(function(){var a="18904";if(a==""||a.indexOf("$")==0)a="20915";window.bk_async=function(){var c="6DEB79CAAF02496EA25873E431ACCE63";if(c!=""&&c.indexOf("$")!=0)bk_addPageCtx("pid","6DEB79CAAF02496EA25873E431ACCE63");BKTAG.doTag(a,4)};(function(){var a=encodeURIComponent(document.referrer?document.referrer:""),d=document.getElementsByTagName("script")[0],b=document.createElement("script");b.async=true;b.src="//tags.bkrtx.com/js/bk-coretag.js?referer="+a;d.parentNode.insertBefore(b,d)})()})();

tmntag_ready(function() {

!function(){try{var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";a.innerHTML='<iframe style="display:none" src="//eb2.3lift.com/getuid?redir=%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D'+b+'%26svc%3Dus%26id%3D14%26uid%3D%24UID"></iframe>';document.body.appendChild(a)}catch(c){console.error(c)}}();

});

tmntag_ready(function() {

function _tmnSyncAPX(){try{if(document.body){var c="26",a=document.createElement("iframe"),d=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol=="http:"?"http":"https";a.defer=true;a.src=b+"://ib.adnxs.com/getuid?"+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+d+"%26svc%3Dus%26id%3D"+c+"%26uid%3D$UID";document.body.appendChild(a)}else setTimeout(_tmnSyncAPX,1E3)}catch(e){console.error(e)}}_tmnSyncAPX();

});

tmntag_ready(function() {

function _tmnSyncAPX(){try{if(document.body){var c="29",a=document.createElement("iframe"),d=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol=="http:"?"http":"https";a.defer=true;a.src=b+"://ib.adnxs.com/getuid?"+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+d+"%26svc%3Dus%26id%3D"+c+"%26uid%3D$UID";document.body.appendChild(a)}else setTimeout(_tmnSyncAPX,1E3)}catch(e){console.error(e)}}_tmnSyncAPX();

});

tmntag_ready(function() {

try{(function(){var a="9";if(a==""||a.indexOf("$")==0)return;var c=(new Date).getTime(),b=document.createElement("script");b.defer=true;b.src="//tag.crsspxl.com/s1.js?d="+a+"&cb="+c;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})()}catch(a){console.log(a)};

});

tmntag_ready(function() {

/* Sovrn User Sync */
(function(){
  function __tmnIsJsonEmpty(obj) {
    return obj === '{}';
  }
  
  function __tmnsyncpartner(response) {  
      if (__tmnIsJsonEmpty(response)) {
        return;
      }
      try{
        var s = document.createElement("span");
        s.style.display='none';
        var p =(document.location.protocol=="https:"?"https":"http");
        s.innerHTML = "<iframe style=\"display:none\" src=\"" + p + ":\/\/ads.servebom.com\/partner?svc=us&id=24&uid=" + encodeURIComponent(response) + "\"><\/iframe>";
        document.body.appendChild(s);
      }catch(e){
        console.error(e)
      }
  };
  
  function __tmnsovrn(callback)
  {
      var p =(document.location.protocol=="https:"?"https":"http");
      var referrer = document.domain;
      referrer = encodeURIComponent(referrer);
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.withCredentials = true;
      if ("withCredentials" in xmlHttp) {
        xmlHttp.open("GET", "//ap.lijit.com/readerinfo?loc=" + referrer, true);
      } else if (typeof XDomainRequest != "undefined") {
        xmlHttp = new XDomainRequest();
        xmlHttp.open("GET", "//ap.lijit.com/readerinfo?loc=" + referrer);
      } else {
        xmlHttp = null;
      }
      xmlHttp.onreadystatechange = function() { 
          if (this.readyState == 4 && this.status == 200)
              callback(this.responseText);
      }
      /*xmlHttp.setRequestHeader("Accept","text/plain");
      xmlHttp.setRequestHeader("Content-Type","text/plain");*/
      xmlHttp.send(null);
  }
  
  __tmnsovrn(__tmnsyncpartner);
})();
/* /Sovrn User Sync */

});

tmntag_ready(function() {

function _tmnSyncAPX(){try{if(document.body){var c="23",a=document.createElement("iframe"),d=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol=="http:"?"http":"https";a.defer=true;a.src=b+"://ib.adnxs.com/getuid?"+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+d+"%26svc%3Dus%26id%3D"+c+"%26uid%3D$UID";document.body.appendChild(a)}else setTimeout(_tmnSyncAPX,1E3)}catch(e){console.error(e)}}_tmnSyncAPX();

});

tmntag_ready(function() {

function _tmnSyncAPX(){try{if(document.body){var a=document.createElement("iframe"),d=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol;a.defer=true;var c="ib.adnxs.com/getuid";if(document.location.protocol=="https:")c="ib.adnxs.com/getuid";a.src=b+"//"+c+"?"+b+"%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+d+"%26svc%3Dus%26id%3D33%26uid%3D$UID";document.body.appendChild(a)}else setTimeout(_tmnSyncAPX,1E3)}catch(e){console.error(e)}}_tmnSyncAPX();

});

/* Quantum Pixel */
try {
   (function() {
      var s = document.createElement("script");
      s.id = "ean-native-embed-tag";
      s.src = "//cdn.elasticad.net/native/serve/js/nativeEmbed.gz.js";
      var s0 = document.getElementsByTagName('script')[0];
      s0.parentNode.insertBefore(s, s0);
   })();
} catch (e) {console.log(e);}

/* /Quantum Pixel */

(function(){var a=document.createElement("iframe"),b=Math.floor(Math.random()*11E3),c=document.location.protocol=="https:"?"https":"http";a.style.display="none";a.defer=true;a.src=c+"://sync.c1exchange.com/sync/user?cb="+b+"&pid=p17&url="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+b+"%26svc%3Dus%26id%3D20%26uid%3D$C1XUID";document.body.appendChild(a)})();

tmntag_ready(function() {

!function(){try{var b=document.location.protocol=="https:"?"https":"http",a=document.createElement("span");a.style.display="none";a.innerHTML="<iframe style='display:none' src='"+b+"://bh.contextweb.com/bh/sync/purch?rurl="+b+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fsvc%3Dus%26id%3D17%26uid%3D%25%25VGUID%25%25'></iframe>";document.body.appendChild(a)}catch(c){console.error(c)}}();

});

tmntag_ready(function() {

var _mag=_mag||{};
(function(a){try{var b="";a.kw="";if(typeof tmntag.pubtargets!="undefined"&&tmntag.pubtargets)for(var d=tmntag.pubtargets.length-1;d>=0;d--){b=tmntag.pubtargets[d];if(b[0]==="kw")a.kw=b[1].toString().replace(/-/g," ").replace(/_/g," ")}a.kw_encoded=0;a.shortName="purch-electronics";a.default_protocol="https:"==document.location.protocol?"https:":"http:";a.startTime=(new Date).getTime();if(a.kw!==""){var b=document,f=a.default_protocol+"//d3ezl4ajpp2zy8.cloudfront.net/purch-electronics_tag.js",c=b.createElement("script");
c.type="text/javascript";c.async=true;c.src=f;var e=b.getElementsByTagName("head")[0]||b.documentElement;e.insertBefore(c,e.firstChild)}}catch(g){console.log(g)}})(_mag);

});

tmntag_ready(function() {

(function(){try{var a="538495077";if(a==""||a.indexOf("$")==0)a="538535676";var b=document.createElement("span"),c=Math.floor(Math.random()*11E3);b.style.display="none";var d=document.location.protocol;b.innerHTML="<iframe id='4451dc03ec' name='4451dc03ec' src='"+d+"//tmn-d.openx.net/w/1.0/afr?auid="+a+"&cb="+c+"' frameBorder='0' frameSpacing='0' scrolling='no' width='1' height='1'></iframe>";document.body.appendChild(b)}catch(e){console.error(e)}})();

});

tmntag_ready(function() {

!function(){try{if(document.location.protocol!="http:")return;var b=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src="//sync.go.sonobi.com/uc.js";b.parentNode.insertBefore(a,b)}catch(c){console.error(c)}}();!function(){try{var b=Math.floor(Math.random()*11E3),a=document.createElement("img"),c=document.location.protocol=="https:"?"https":"http";a.src=c+"://purch-sync.go.sonobi.com/us?"+c+"://ads.servebom.com/partner?cb="+b+"&svc=us&id=9&uid=[UID]";document.body.appendChild(a)}catch(d){console.error(d)}}();

});

/* Clickstream Data Pixel  */
window.Purch = window.Purch || {};
Purch.cs_data = Purch.cs_data || {};
Purch.cs_data["country"] = "CA";
Purch.cs_data["page"] = "http%3A%2F%2Fwww.tomshardware.com%2Fs%2Fpower+tools%2F";
Purch.cs_data["page_domain"] = "www.tomshardware.com";
Purch.cs_data["visitor_id"] = "6DEB79CAAF02496EA25873E431ACCE63";
Purch.cs_data["user_ip"] = "142.244.63.135";
Purch.cs_data["UA"] = "Firefox";
Purch.cs_data["OS"] = "Windows 7";
Purch.cs_data["device"] = "Computer";
Purch.cs_data["RID"] = "6397982223142507";

Purch.cs_extradata = Purch.cs_extradata || {};
Purch.cs_extradata["COOKIES"] = "false";
Purch.cs_extradata["COUNTRY"] = "CA";
Purch.cs_extradata["PAGE"] = "http%3A%2F%2Fwww.tomshardware.com%2Fs%2Fpower+tools%2F";
Purch.cs_extradata["PAGE_DOMAIN"] = "www.tomshardware.com";
Purch.cs_extradata["VISITOR_ID"] = "6DEB79CAAF02496EA25873E431ACCE63";
Purch.cs_extradata["USER_IP"] = "142.244.63.135";
Purch.cs_extradata["UA"] = "Firefox";
Purch.cs_extradata["OS"] = "Windows 7";
Purch.cs_extradata["DEVICE"] = "Computer";
Purch.cs_extradata["RID"] = "6397982223142507";

Purch.trimcsdata = function(obj) {
	for (var key in obj) {
	    if (obj[key].indexOf('${')>=0){
	    	obj[key] = undefined;
	    }
	}
	return obj;
};
Purch.cs_data = Purch.trimcsdata(Purch.cs_data);
/* /Clickstream Data Pixel  */

tmntag_ready(function() {

function _tmnSyncAPX(){try{if(document.body){var c="25",a=document.createElement("iframe"),d=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol=="http:"?"http":"https";a.defer=true;a.src=b+"://ib.adnxs.com/getuid?"+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+d+"%26svc%3Dus%26id%3D"+c+"%26uid%3D$UID";document.body.appendChild(a)}else setTimeout(_tmnSyncAPX,1E3)}catch(e){console.error(e)}}_tmnSyncAPX();

});

/* CrazyEgg THA*/
(function(){
  var crazyeggState = '${PAGE:CRAZYEGG_STATE}';
  if (crazyeggState.indexOf('$')===0) return;

 setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0012/7153.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
})();
/* /CrazyEgg THA*/ 

tmntag_ready(function() {

function _tmnSyncCAX(){try{if(document.body){var a=document.createElement("iframe"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol;a.defer=true;var d="ssum.casalemedia.com";if(document.location.protocol=="https:")d="ssum-sec.casalemedia.com";a.src=c+"//"+d+"/usermatch?r="+b+"&s=181869&cb="+c+"%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+b+"%26svc%3Dus%26id%3D2%26uid%3D";document.body.appendChild(a)}else setTimeout(_tmnSyncCAX,1E3)}catch(e){console.error(e)}}
_tmnSyncCAX();

});

/* WOX UM(0) */!(function(){try{var e = document.createElement('iframe');e.id='WOX_0';e.style.display='none';e.width='0';e.height='0';e.border='0';e.frameborder='0';e.src='http://sync.mathtag.com/sync/img?mt_exid=37&redir=http%3A%2F%2Fp296.atemda.com%2FUserMatch.ashx%3Fbidderid%3D45%26bidderuid%3D%5BMM_UUID%5D';document.body.appendChild(e); }catch(e){ console.error(e) } })();/* /WOX UM(0) */
/* WOX UM(1) */!(function(){try{var e = document.createElement('iframe');e.id='WOX_1';e.style.display='none';e.width='0';e.height='0';e.border='0';e.frameborder='0';e.src='http://rtb.gumgum.com/usync/admeta00?r=http%3A%2F%2Fp296.atemda.com%2FUserMatch.ashx%3Fbidderid%3D64%26bidderuid%3D';document.body.appendChild(e); }catch(e){ console.error(e) } })();/* /WOX UM(1) */
/* WOX UM(2) */!(function(){try{var e = document.createElement('img');e.id='WOX_2';e.style.display='none';e.width='0';e.height='0';e.border='0';e.src='http://match.adsrvr.org/track/cmf/generic?ttd_pid=admeta-us&ttd_tpi=1';document.body.appendChild(e); }catch(e){ console.error(e) } })();/* /WOX UM(2) */