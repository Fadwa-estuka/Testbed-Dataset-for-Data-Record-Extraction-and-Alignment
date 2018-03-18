var ns_;
try{ ns_=ns_||{};ns_.PlatformAPIs=ns_.PlatformAPIs||{Standard:0,Trilithium:1,AppleTV:2,Chromecast:3},ns_.Utils=ns_.Utils||function(){return{uid:function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getString:function(e,t){var n=String(e);return e==null?t||"na":n},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return typeof e!="undefined"&&e!=null&&typeof e.length!="undefined"&&e.length>0},indexOf:function(e,t){var n=-1;return this.forEach(t,function(t,i){t==e&&(n=i)}),n},forEach:function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:null;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)e.hasOwnProperty(i)&&(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var s=0,o=e.length;s<o;s++)t.call(n,e[s],s)}}catch(u){}},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0},size:function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&t++;return t},log:function(e,t){if(typeof t!="undefined"&&t&&typeof console!="undefined"&&console){var n=new Date,r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log(r,e)}},isTrue:function(e){return typeof e=="undefined"?!1:typeof e=="string"?(e=e.toLowerCase(),e==="true"||e==="1"||e==="on"):!!e},toString:function(e){if(typeof e=="undefined")return"undefined";if(typeof e=="string")return e;if(Object.prototype.toString.call(e)==="[object Array]")return e.join(",");if(this.size(e)>0){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";");return t}return e.toString()},exists:function(e){return typeof e!="undefined"&&e!=null},firstGreaterThan0:function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(n>0)return n}return 0},cloneObject:function(e){if(null==e||"object"!=typeof e)return e;var t=function(){function e(){}function t(t){return typeof t=="object"?(e.prototype=t,new e):t}function r(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])}function i(){this.copiedObjects=[];var e=this;this.recursiveDeepCopy=function(t){return e.deepCopy(t)},this.depth=0}function s(e,t){var n=new i;return t&&(n.maxDepth=t),n.deepCopy(e)}function o(e){return typeof window!="undefined"&&window&&window.Node?e instanceof Node:e===document?!0:typeof e.nodeType=="number"&&e.attributes&&e.childNodes&&e.cloneNode}var n=[];return r.prototype={constructor:r,canCopy:function(){return!1},create:function(e){},populate:function(e,t,n){}},i.prototype={constructor:i,maxDepth:256,cacheResult:function(e,t){this.copiedObjects.push([e,t])},getCachedResult:function(e){var t=this.copiedObjects,n=t.length;for(var r=0;r<n;r++)if(t[r][0]===e)return t[r][1];return undefined},deepCopy:function(e){if(e===null)return null;if(typeof e!="object")return e;var t=this.getCachedResult(e);if(t)return t;for(var r=0;r<n.length;r++){var i=n[r];if(i.canCopy(e))return this.applyDeepCopier(i,e)}throw new Error("Unable to clone the following object "+e)},applyDeepCopier:function(e,t){var n=e.create(t);this.cacheResult(t,n),this.depth++;if(this.depth>this.maxDepth)throw new Error("Maximum recursion depth exceeded.");return e.populate(this.recursiveDeepCopy,t,n),this.depth--,n}},s.DeepCopier=r,s.deepCopiers=n,s.register=function(e){e instanceof r||(e=new r(e)),n.unshift(e)},s.register({canCopy:function(){return!0},create:function(e){return e instanceof e.constructor?t(e.constructor.prototype):{}},populate:function(e,t,n){for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}}),s.register({canCopy:function(e){return e instanceof Array},create:function(e){return new e.constructor},populate:function(e,t,n){for(var r=0;r<t.length;r++)n.push(e(t[r]));return n}}),s.register({canCopy:function(e){return e instanceof Date},create:function(e){return new Date(e)}}),s.register({canCopy:function(e){return o(e)},create:function(e){return e===document?document:e.cloneNode(!1)},populate:function(e,t,n){if(t===document)return document;if(t.childNodes&&t.childNodes.length)for(var r=0;r<t.childNodes.length;r++){var i=e(t.childNodes[r]);n.appendChild(i)}}}),{deepCopy:s}}();return t.deepCopy(e)},safeGet:function(e,t){return t=this.exists(t)?t:"",this.exists(e)?e:t},getBrowserName:function(){if(typeof navigator=="undefined"||!navigator.hasOwnProperty("userAgent")||!navigator.hasOwnProperty("appName"))return"";var e=navigator.userAgent,t=navigator.appName,n,r;return(r=e.indexOf("Opera"))!=-1||(r=e.indexOf("OPR/"))!=-1?t="Opera":(r=e.indexOf("Android"))!=-1?t="Android":(r=e.indexOf("Chrome"))!=-1?t="Chrome":(r=e.indexOf("Safari"))!=-1?t="Safari":(r=e.indexOf("Firefox"))!=-1?t="Firefox":(r=e.indexOf("IEMobile"))!=-1?t="Internet Explorer Mobile":t=="Microsoft Internet Explorer"||t=="Netscape"?t="Internet Explorer":(n=e.lastIndexOf(" ")+1)<(r=e.lastIndexOf("/"))&&(t=e.substring(n,r),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName)),t},getBrowserFullVersion:function(){if(typeof navigator=="undefined"||!navigator.hasOwnProperty("userAgent")||!navigator.hasOwnProperty("appName")||!navigator.hasOwnProperty("appVersion"))return"";var e=navigator.userAgent,t=navigator.appName,n=""+parseFloat(navigator.appVersion),r,i,s,o;return(i=e.indexOf("Opera"))!=-1?(n=e.substring(i+6),(i=e.indexOf("Version"))!=-1&&(n=e.substring(i+8))):(i=e.indexOf("OPR/"))!=-1?n=e.substring(i+4):(i=e.indexOf("Android"))!=-1?n=e.substring(i+11):(i=e.indexOf("Chrome"))!=-1?n=e.substring(i+7):(i=e.indexOf("Safari"))!=-1?(n=e.substring(i+7),(i=e.indexOf("Version"))!=-1&&(n=e.substring(i+8))):(i=e.indexOf("Firefox"))!=-1?n=e.substring(i+8):t=="Microsoft Internet Explorer"?(o=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),o.exec(e)!=null&&(n=parseFloat(RegExp.$1))):t=="Netscape"?(o=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),o.exec(e)!=null&&(n=parseFloat(RegExp.$1))):e.lastIndexOf(" ")+1<(i=e.lastIndexOf("/"))&&(n=e.substring(i+1)),n=n.toString(),(s=n.indexOf(";"))!=-1&&(n=n.substring(0,s)),(s=n.indexOf(" "))!=-1&&(n=n.substring(0,s)),(s=n.indexOf(")"))!=-1&&(n=n.substring(0,s)),r=parseInt(""+n,10),isNaN(r)&&(n=""+parseFloat(navigator.appVersion)),n},browserAcceptsLargeURLs:function(){return typeof window!="undefined"?window.ActiveXObject===null||!0:!0}}}(),ns_.StreamSense=ns_.StreamSense||function(){function w(t,n){var r=t||"",i="undefined",s=y.comScore||y.sitestat||function(t){var n="comScore=",r=b.cookie,s="",o="indexOf",u="substring",a="length",f=e.browserAcceptsLargeURLs()?N.URL_LENGTH_LIMIT:N.RESTRICTED_URL_LENGTH_LIMIT,l,c="&ns_",h="&",d,v,m,g,w=y.encodeURIComponent||escape;if(r[o](n)+1)for(m=0,v=r.split(";"),g=v[a];m<g;m++)d=v[m][o](n),d+1&&(s=h+unescape(v[m][u](d+n[a])));t+=c+"_t="+ +(new Date)+c+"c="+(b.characterSet||b.defaultCharset||"")+s,t.length>f&&t.indexOf(h)>0&&(l=t.substr(0,f-8).lastIndexOf(h),t=(t.substring(0,l)+c+"cut="+w(t.substring(l+1))).substr(0,f)),p.httpGet(t),typeof ns_p===i&&(ns_p={src:t}),ns_p.lastMeasurement=t};if(typeof n!==i){var o=[],u=y.encodeURIComponent||escape;for(var a in n)n.hasOwnProperty(a)&&o.push(u(a)+"="+u(n[a]));/[\?\&]$/.test(r)||(r+="&"),r+=o.join("&")}return s(r)}function E(t,n){var r,i=y.encodeURIComponent||escape,s=[],o=N.LABELS_ORDER,u=t.split("?"),a=u[0],f=u[1],l=f.split("&");for(var c=0,h=l.length;c<h;c++){var p=l[c].split("="),d=unescape(p[0]),v=unescape(p[1]);d&&(n[d]=v)}var m={};for(var g=0,w=o.length;g<w;g++){var E=o[g];if(n.hasOwnProperty(E)){var S=n[E];typeof S!="undefined"&&S!=null&&(m[E]=!0,s.push(i(E)+"="+i(n[E])))}}for(var x in n)if(n.hasOwnProperty(x)){if(m[x])continue;var T=n[x];typeof T!="undefined"&&T!=null&&s.push(i(x)+"="+i(n[x]))}r=a+"?"+s.join("&"),r=r+(r.indexOf("&c8=")<0?"&c8="+i(b.title):"")+(r.indexOf("&c7=")<0?"&c7="+i(b.URL):"")+(r.indexOf("&c9=")<0?"&c9="+i(b.referrer):"");var C=e.browserAcceptsLargeURLs()?N.URL_LENGTH_LIMIT:N.RESTRICTED_URL_LENGTH_LIMIT;if(r.length>C&&r.indexOf("&")>0){var k=r.substr(0,C-8).lastIndexOf("&");r=(r.substring(0,k)+"&ns_cut="+i(r.substring(k+1))).substr(0,C)}return r}var e=ns_.Utils,t=function(){var t="cs_";return function(){var n=typeof localStorage!="undefined"?localStorage:{};e.extend(this,{get:function(e){return n[t+e]},set:function(e,r){n[t+e]=r},has:function(e){return t+e in n},remove:function(e){delete n[t+e]},clear:function(){for(var e in n)n.hasOwnProperty(e)&&delete n[e]}})}}(),n=function(){var t="cs_",n=function(){var n=this,r=typeof atv!="undefined"&&typeof atv.localStorage!="undefined"&&atv.localStorage||null;e.extend(this,{get:function(e){return r&&e&&r.getItem(t+e)||null},set:function(e,n){r&&e&&(r[t+e]=n)},has:function(e){return r&&e&&r.getItem(t+e)!=null||!1},remove:function(e){r&&e&&r.removeItem(t+e)},clear:function(){}})};return n}(),r=function(e,t){if(typeof Image!="undefined"){var n=new Image;n.onload=function(){t&&t(200),n=null},n.onerror=function(){t&&t(),n=null},n.src=e}},i=function(e,t){typeof XMLHttpRequest!="undefined"&&t&&typeof setTimeout!="undefined"&&setTimeout(t,0);var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&(t&&t(n.status),n=null)},n.send()},s=function(e,t,n){typeof XMLHttpRequest!="undefined"&&n&&typeof setTimeout!="undefined"&&setTimeout(n,0);var r=new XMLHttpRequest;r.open("POST",e,!0),r.onreadystatechange=function(){r.readyState===4&&(n&&n(r.status),r=null)},r.send(t)},o=function(e,t){t&&typeof setTimeout!="undefined"&&setTimeout(t,0)},u=function(e,t,n){n&&typeof setTimeout!="undefined"&&setTimeout(n,0)},a=function(){function f(e){var t=r+e;s[t]="",o[t]=[]}function l(e,n){var i=r+e;s[i]+=u+t(n),o[i].push(n)}function c(n,a){var f=r+n,l=o[f];l.splice(e.indexOf(a,l),1);var c=[];for(var h=0,p=l.length;h<p;h++)c.push(t(l[h]));s[f]=c.join(u),delete s[i+n+a]}function h(e,t,n){s[i+e+t]=n}function p(e,t){return s[i+e+t]}var t=typeof encodeURIComponent!="undefined"?encodeURIComponent:escape,n=typeof decodeURIComponent!="undefined"?decodeURIComponent:unescape,r="cs_dir_",i="cs_file_",s=typeof localStorage!="undefined"?localStorage:{},o={},u="|";return{dir:function(e){var t=r+e,i=o[t];if(i)return i.slice();var a=s[t];if(a){a=a.split(u),i=[];for(var f=0,l=a.length;f<l;f++)a[f].length>0&&i.push(n(a[f]));return o[t]=i,i.slice()}return null},append:function(e,t,n){var r=a.read(e,t);r?r+=n:r=n,a.write(e,t,r)},write:function(t,n,r){var i=a.dir(t);i||(f(t),i=[]),e.indexOf(n,i)==-1&&l(t,n),h(t,n,r)},deleteFile:function(t,n){var r=a.dir(t);return r?e.indexOf(n,r)==-1?!1:(c(t,n),!0):!1},read:function(t,n){var r=a.dir(t);return r?e.indexOf(n,r)==-1?null:p(t,n):null}}}(),f=function(){return{dir:function(){return null},append:function(e,t,n){},write:function(e,t,n){},deleteFile:function(){return!1},read:function(){return null}}}(),l=function(e,t){typeof engine!="undefined"&&t&&typeof setTimeout!="undefined"&&setTimeout(t,0);var n=engine.createHttpClient(),r=n.createRequest("GET",e,null);r.start(),t&&setTimeout(t,0)},c=function(e,t){if(typeof atv!="undefined"&&typeof atv.setTimeout=="function"){typeof XMLHttpRequest!="undefined"&&t&&atv.setTimeout(t,0);var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&(t&&t(n.status),n=null)},n.send()}},h=function(e,t,n){if(typeof atv!="undefined"&&typeof atv.setTimeout=="function"){typeof XMLHttpRequest!="undefined"&&n&&atv.setTimeout(n,0);var r=new XMLHttpRequest;r.open("POST",e,!0),r.onreadystatechange=function(){r.readyState===4&&(n&&n(r.status),r=null)},r.send(t)}},p=function(){return{PLATFORM:"generic",httpGet:r,httpPost:u,Storage:t,IO:f,getCrossPublisherId:function(){return null},getAppName:function(){return Constants.UNKNOWN_VALUE},getAppVersion:function(){return Constants.UNKNOWN_VALUE},getVisitorId:function(){return this.getDeviceName()+ +(new Date)+~~(Math.random()*1e3)},getVisitorIdSuffix:function(){return"72"},getDeviceName:function(){return""},getPlatformVersion:function(){return""},getPlatformName:function(){return"js"},getRuntimeName:function(){return""},getRuntimeVersion:function(){return""},getResolution:function(){return""},getLanguage:function(){return""},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(e,t,n){return setTimeout(e,t,n)},clearTimeout:function(e){return clearTimeout(e)},getDeviceArchitecture:function(){return Constants.UNKNOWN_VALUE},getConnectionType:function(){return Constants.UNKNOWN_VALUE},getDeviceJailBrokenFlag:function(){return Constants.UNKNOWN_VALUE}}}(),d=function(){function s(){return typeof engine!="undefined"&&typeof engine.stats!="undefined"}function o(){return e.isNotEmpty(engine.stats.device.id)?engine.stats.device.id:e.isNotEmpty(engine.stats.network.mac)?engine.stats.network.mac:null}function a(){if(n==null){var e=o();e!=null?(n=e,r="31",i=e):(n=+(new Date)+~~(Math.random()*1e3),r="72",i=null)}}var n=null,r=null,i=null;return{PLATFORM:"trilithium",httpGet:l,httpPost:u,Storage:t,IO:f,getCrossPublisherId:function(){return a(),i},getAppName:function(){return e.isNotEmpty(engine.stats.application.name)?engine.stats.application.name:Constants.UNKNOWN_VALUE},getAppVersion:function(){return e.isNotEmpty(engine.stats.application.version)?engine.stats.application.version:Constants.UNKNOWN_VALUE},getVisitorId:function(){return a(),n},getVisitorIdSuffix:function(){return r},getDeviceName:function(){return e.safeGet(engine.stats.device.platform,"")},getPlatformVersion:function(){return e.safeGet(engine.stats.device.version,"")},getPlatformName:function(){return"js"},getRuntimeName:function(){return"trilithium"},getRuntimeVersion:function(){return""},getResolution:function(){return typeof screen!="undefined"&&typeof screen.height!="undefined"&&typeof screen.width!="undefined"?screen.height+"x"+screen.width:""},getLanguage:function(){return""},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},isCompatible:s}}(),v=function(){function s(){return typeof window=="undefined"&&typeof atv!="undefined"}function o(){t==null&&(typeof atv!="undefined"&&typeof atv.device!="undefined"&&atv.device.idForVendor?(t=e.safeGet(atv.device.idForVendor,""),r="62"):(t=+(new Date)+~~(Math.random()*1e3),r="72"),i=null)}var t=null,r=null,i=null;return{PLATFORM:"atv",httpGet:c,httpPost:h,Storage:n,IO:f,getCrossPublisherId:function(){return o(),i},getAppName:function(){return Constants.UNKNOWN_VALUE},getAppVersion:function(){return Constants.UNKNOWN_VALUE},getVisitorId:function(){return o(),t},getVisitorIdSuffix:function(){return r},getDeviceName:function(){return"Apple TV"},getPlatformVersion:function(){return typeof atv!="undefined"&&typeof atv.device!="undefined"&&e.safeGet(atv.device.softwareVersion,"")},getPlatformName:function(){return"js"},getRuntimeName:function(){return"atv"},getRuntimeVersion:function(){return typeof atv!="undefined"&&typeof atv.device!="undefined"&&e.safeGet(atv.device.softwareVersion,"")},getResolution:function(){return typeof atv.device!="undefined"&&typeof atv.device.screenFrame!="undefined"&&typeof atv.device.screenFrame.height!="undefined"&&typeof atv.device.screenFrame.width!="undefined"?atv.device.screenFrame.height+"x"+atv.device.screenFrame.width:""},getLanguage:function(){return typeof atv!="undefined"&&typeof atv.device!="undefined"&&e.safeGet(atv.device.language,"")},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},setTimeout:function(e,t,n){return typeof atv!="undefined"&&typeof atv.setTimeout!="undefined"&&atv.setTimeout(e,t,n)},clearTimeout:function(e){return typeof atv!="undefined"&&typeof atv.clearTimeout!="undefined"&&atv.clearTimeout(e)},isCompatible:s}}(),m=function(){function n(){return typeof window!="undefined"&&typeof document!="undefined"}return{PLATFORM:"chromecast",httpGet:r,httpPost:s,Storage:t,IO:a,getCrossPublisherId:function(){return null},getAppName:function(){return typeof document!="undefined"&&document.title||Constants.UNKNOWN_VALUE},getAppVersion:function(){return Constants.UNKNOWN_VALUE},getVisitorId:function(){return+(new Date)+~~(Math.random()*1e3)},getVisitorIdSuffix:function(){return"72"},getDeviceName:function(){return"chromecast"},getPlatformVersion:function(){return"5"},getPlatformName:function(){return"js"},getRuntimeName:function(){return"html"},getRuntimeVersion:function(){return e.safeGet(e.getBrowserName()+" "+e.getBrowserFullVersion(),Constants.UNKNOWN_VALUE)},getResolution:function(){var t=typeof window!="undefined"&&e.exists(window.screen)&&e.exists(window.screen.availWidth)?window.screen.availWidth:0,n=typeof window!="undefined"&&e.exists(window.screen)&&e.exists(window.screen.availHeight)?window.screen.availHeight:0;return t>0&&n>0?t+"x"+n:""},getLanguage:function(){return typeof window!="undefined"&&e.exists(window.navigator)&&e.safeGet(window.navigator.language,"")||""},getPackageName:function(){return typeof castReceiverManager!="undefined"&&castReceiverManager.getApplicationData&&typeof castReceiverManager.getApplicationData=="function"&&castReceiverManager.getApplicationData().namespaces&&castReceiverManager.getApplicationData().namespaces[0]||""},isConnectionAvailable:function(){return typeof window!="undefined"&&e.exists(window.navigator)&&e.safeGet(window.navigator.onLine,!0)||!0},isCompatible:n,getConnectionType:function(){return Constants.UNKNOWN_VALUE}}}();p.autoSelect=function(){d.isCompatible()?ns_.Utils.extend(p,d):v.isCompatible()&&ns_.Utils.extend(p,v)},p.setPlatformAPI=function(t){var n=!1;switch(t){case ns_.PlatformAPIs.Trilithium:ns_.Utils.extend(p,d),n=!0;break;case ns_.PlatformAPIs.AppleTV:ns_.Utils.extend(p,v),n=!0;break;case ns_.PlatformAPIs.Chromecast:e.extend(p,m),n=!0}n&&(p.autoSelect=function(){})};var g=typeof window!="undefined"&&typeof document!="undefined",y,b;g?(y=window,b=document):(y={},b={location:{href:""},title:"",URL:"",referrer:"",cookie:""});var e=e||{};e.filterMap=function(t,n){for(var r in t)t.hasOwnProperty(r)&&e.indexOf(r,n)==-1&&delete t[r]},e.getKeys=function(e,t){var n,r=[];for(n in e)(!t||t.test(n))&&e.hasOwnProperty(n)&&(r[r.length]=n);return r};var S=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),x=function(){var e=[S.END,S.PLAY,S.PAUSE,S.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),T={ADPLAY:S.AD_PLAY,ADPAUSE:S.AD_PAUSE,ADEND:S.AD_END,ADCLICK:S.AD_CLICK},N={STREAMSENSE_VERSION:"4.1505.18",DEFAULT_PLAYERNAME:"streamsense",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",RESTRICTED_URL_LENGTH_LIMIT:2048,URL_LENGTH_LIMIT:4096,LABELS_ORDER:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_cv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er"]},C=function(){return function(){function l(e,t){var n=t[e];n!=null&&(f[e]=n)}var t=this,n=0,r=0,i=0,s=0,o=0,u=0,a,f;e.extend(this,{reset:function(n){n!=null&&n.length>0?e.filterMap(f,n):f={},f.hasOwnProperty("ns_st_cl")||(f.ns_st_cl="0"),f.hasOwnProperty("ns_st_pn")||(f.ns_st_pn="1"),f.hasOwnProperty("ns_st_tp")||(f.ns_st_tp="1"),t.setPauses(0),t.setStarts(0),t.setBufferingTime(0),t.setBufferingTimestamp(-1),t.setPlaybackTime(0),t.setPlaybackTimestamp(-1)},setLabels:function(n,r){n!=null&&e.extend(f,n),t.setRegisters(f,r)},getLabels:function(){return f},setLabel:function(e,n){var r={};r[e]=n,t.setLabels(r,null)},getLabel:function(e){return f[e]},getClipId:function(){return(typeof a=="undefined"||a==null)&&t.setClipId("1"),a},setClipId:function(e){a=e},setRegisters:function(e,s){var u=e.ns_st_cn;u!=null&&(t.setClipId(u),delete e.ns_st_cn),u=e.ns_st_bt,u!=null&&(i=Number(u),delete e.ns_st_bt),l("ns_st_cl",e),l("ns_st_pn",e),l("ns_st_tp",e),l("ns_st_ub",e),l("ns_st_br",e);if(s==x.PLAYING||s==null)u=e.ns_st_sq,u!=null&&(r=Number(u),delete e.ns_st_sq);s!=x.BUFFERING&&(u=e.ns_st_pt,u!=null&&(o=Number(u),delete e.ns_st_pt));if(s==x.PAUSED||s==x.IDLE||s==null)u=e.ns_st_pc,u!=null&&(n=Number(u),delete e.ns_st_pc)},createLabels:function(i,s){var o=s||{};o.ns_st_cn=t.getClipId(),o.ns_st_bt=String(t.getBufferingTime());if(i==S.PLAY||i==null)o.ns_st_sq=String(r);if(i==S.PAUSE||i==S.END||i==S.KEEP_ALIVE||i==S.HEART_BEAT||i==null)o.ns_st_pt=String(t.getPlaybackTime()),o.ns_st_pc=String(n);return e.extend(o,t.getLabels()),o},incrementPauses:function(){n++},incrementStarts:function(){r++},getBufferingTime:function(){var e=i;return s>=0&&(e+=+(new Date)-s),e},setBufferingTime:function(e){i=e},getPlaybackTime:function(){var e=o;return u>=0&&(e+=+(new Date)-u),e},setPlaybackTime:function(e){o=e},getPlaybackTimestamp:function(){return u},setPlaybackTimestamp:function(e){u=e},getBufferingTimestamp:function(){return s},setBufferingTimestamp:function(e){s=e},getPauses:function(){return n},setPauses:function(e){n=e},getStarts:function(){return r},setStarts:function(e){r=e}}),f={},t.reset()}}(),k=function(){return function(){var t=this,n=null,r,i=0,s=0,o=0,u=0,a=0,f,l=0,c=!1;e.extend(this,{reset:function(n){n!=null&&n.length>0?e.filterMap(f,n):f={},t.setPlaylistId(+(new Date)+"_"+l),t.setBufferingTime(0),t.setPlaybackTime(0),t.setPauses(0),t.setStarts(0),t.setRebufferCount(0),c=!1},setLabels:function(n,r){n!=null&&e.extend(f,n),t.setRegisters(f,r)},getLabels:function(){return f},setLabel:function(e,n){var r={};r[e]=n,t.setLabels(r,null)},getLabel:function(e){return f[e]},getClip:function(){return n},getPlaylistId:function(){return r},setPlaylistId:function(e){r=e},setRegisters:function(e,t){var n=e.ns_st_sp;n!=null&&(i=Number(n),delete e.ns_st_sp),n=e.ns_st_bc,n!=null&&(o=Number(n),delete e.ns_st_bc),n=e.ns_st_bp,n!=null&&(u=Number(n),delete e.ns_st_bp),n=e.ns_st_id,n!=null&&(r=n,delete e.ns_st_id),t!=x.BUFFERING&&(n=e.ns_st_pa,n!=null&&(a=Number(n),delete e.ns_st_pa));if(t==x.PAUSED||t==x.IDLE||t==null)n=e.ns_st_pp,n!=null&&(s=Number(n),delete e.ns_st_pp)},createLabels:function(n,u){var a=u||{};a.ns_st_bp=String(t.getBufferingTime()),a.ns_st_sp=String(i),a.ns_st_id=String(r),o>0&&(a.ns_st_bc=String(o));if(n==S.PAUSE||n==S.END||n==S.KEEP_ALIVE||n==S.HEART_BEAT||n==null)a.ns_st_pa=String(t.getPlaybackTime()),a.ns_st_pp=String(s);if(n==S.PLAY||n==null)t.didFirstPlayOccurred()||(a.ns_st_pb="1",t.setFirstPlayOccurred(!0));return e.extend(a,t.getLabels()),a},incrementStarts:function(){i++},incrementPauses:function(){s++,n.incrementPauses()},setPlaylistCounter:function(e){l=e},incrementPlaylistCounter:function(){l++},addPlaybackTime:function(e){if(n.getPlaybackTimestamp()>=0){var r=e-n.getPlaybackTimestamp();n.setPlaybackTimestamp(-1),n.setPlaybackTime(n.getPlaybackTime()+r),t.setPlaybackTime(t.getPlaybackTime()+r)}},addBufferingTime:function(e){if(n.getBufferingTimestamp()>=0){var r=e-n.getBufferingTimestamp();n.setBufferingTimestamp(-1),n.setBufferingTime(n.getBufferingTime()+r),t.setBufferingTime(t.getBufferingTime()+r)}},getBufferingTime:function(){var e=u;return n.getBufferingTimestamp()>=0&&(e+=+(new Date)-n.getBufferingTimestamp()),e},setBufferingTime:function(e){u=e},getPlaybackTime:function(){var e=a;return n.getPlaybackTimestamp()>=0&&(e+=+(new Date)-n.getPlaybackTimestamp()),e},setPlaybackTime:function(e){a=e},getStarts:function(){return i},setStarts:function(e){i=e},getPauses:function(){return s},setPauses:function(e){s=e},getRebufferCount:function(){return o},incrementRebufferCount:function(){o++},setRebufferCount:function(e){o=e},didFirstPlayOccurred:function(){return c},setFirstPlayOccurred:function(e){c=e}}),n=new C,f={},t.reset()}}(),L=function(){var t=function(t,n,r){function q(e){var t=0;if(C!=null)for(var n=0;n<C.length;n++){var r=C[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function R(){X();var e=q(v.getClip().getPlaybackTime());if(e>0){var t=O>0?O:e;T=p.setTimeout(W,t)}O=0}function U(){X();var e=q(v.getClip().getPlaybackTime());O=e-v.getClip().getPlaybackTime()%e,T!=null&&X()}function z(){O=0,_=0,M=0}function W(){M++;var e=mt(S.HEART_BEAT,null);rt(e),O=0,R()}function X(){T!=null&&(p.clearTimeout(T),T=null)}function V(){J(),b=p.setTimeout($,L)}function $(){var e=mt(S.KEEP_ALIVE,null);rt(e),d++,V()}function J(){b!=null&&(p.clearTimeout(b),b=null)}function K(){G(),i.isPauseOnBufferingEnabled()&&at(x.PAUSED)&&(g=p.setTimeout(Q,A))}function Q(){if(P==x.PLAYING){v.incrementRebufferCount(),v.incrementPauses();var e=mt(S.PAUSE,null);rt(e),d++,P=x.PAUSED}}function G(){g!=null&&(p.clearTimeout(g),g=null)}function Y(e){return e==x.PLAYING||e==x.PAUSED}function Z(){l&&(p.clearTimeout(l),l=null)}function et(e){return e==S.PLAY?x.PLAYING:e==S.PAUSE?x.PAUSED:e==S.BUFFER?x.BUFFERING:e==S.END?x.IDLE:null}function tt(t,n,r){Z();if(r)l=p.setTimeout(function(e,t){return function(){tt(e,t)}}(t,n),r);else if(ct(t)){var i=pt(),s=a,o=lt(n),u=s>=0?o-s:0;ot(pt(),n),ut(t,n),dt(pt()),ht(t);for(var f=0,c=F.length;f<c;f++)F[f](i,t,n,u);nt(n),v.setRegisters(n,t),v.getClip().setRegisters(n,t);var m=mt(x.toEventType(t),n);e.extend(m,n),at(h)&&(rt(m),P=h,d++)}}function nt(e){var t=e.ns_st_mp;t!=null&&(H=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(B=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(d=Number(t),delete e.ns_st_ec)}function rt(e,t){t===undefined&&(t=!0),t&&st(e);var n=i.getPixelURL();if(m){if(!it()){var r=I.am,s=I.et,o=r.newApplicationMeasurement(m,s.HIDDEN,e,n);m.getQueue().offer(o)}}else n&&p.httpGet(E(n,e))}function it(){var e=m.getAppContext(),t=m.getSalt(),n=m.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function st(t){j=mt(null),e.extend(j,t)}function ot(t,n){var r=lt(n);if(t==x.PLAYING)v.addPlaybackTime(r),U(),J();else if(t==x.BUFFERING)v.addBufferingTime(r),G();else if(t==x.IDLE){var i=e.getKeys(v.getClip().getLabels());v.getClip().reset(i)}}function ut(e,t){var n=lt(t);f=ft(t),e==x.PLAYING?(R(),V(),v.getClip().setPlaybackTimestamp(n),at(e)&&(v.getClip().incrementStarts(),v.getStarts()<1&&v.setStarts(1))):e==x.PAUSED?at(e)&&v.incrementPauses():e==x.BUFFERING?(v.getClip().setBufferingTimestamp(n),y&&K()):e==x.IDLE&&z()}function at(e){return e!=x.PAUSED&&e!=x.IDLE||P!=x.IDLE&&P!=null?e!=x.BUFFERING&&P!=e:!1}function ft(t){var n=-1;return t.hasOwnProperty("ns_st_po")&&(n=e.getInteger(t.ns_st_po)),n}function lt(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function ct(e){return e!=null&&pt()!=e}function ht(e){h=e,a=+(new Date)}function pt(){return h}function dt(e){c=e}function vt(){return c}function mt(){var t,n;arguments.length==1?(t=x.toEventType(h),n=arguments[0]):(t=arguments[0],n=arguments[1]);var r={};if(typeof document!="undefined"){var s=document;r.c7=s.URL,r.c8=s.title,r.c9=s.referrer}return n!=null&&e.extend(r,n),r.hasOwnProperty("ns_ts")||(r.ns_ts=String(+(new Date))),t!=null&&!r.hasOwnProperty("ns_st_ev")&&(r.ns_st_ev=S.toString(t)),e.extend(r,i.getLabels()),gt(t,r),v.createLabels(t,r),v.getClip().createLabels(t,r),r.hasOwnProperty("ns_st_mp")||(r.ns_st_mp=H),r.hasOwnProperty("ns_st_mv")||(r.ns_st_mv=B),r.hasOwnProperty("ns_st_ub")||(r.ns_st_ub="0"),r.hasOwnProperty("ns_st_br")||(r.ns_st_br="0"),r.hasOwnProperty("ns_st_pn")||(r.ns_st_pn="1"),r.hasOwnProperty("ns_st_tp")||(r.ns_st_tp="1"),r.hasOwnProperty("ns_st_it")||(r.ns_st_it="c"),r.ns_st_sv=N.STREAMSENSE_VERSION,r.ns_type="hidden",r}function gt(t,n){var r=n||{};r.ns_st_ec=String(d);if(!r.hasOwnProperty("ns_st_po")){var i=f,s=lt(r);if(t==S.PLAY||t==S.KEEP_ALIVE||t==S.HEART_BEAT||t==null&&h==x.PLAYING)i+=s-v.getClip().getPlaybackTimestamp();r.ns_st_po=e.getInteger(i)}return t==S.HEART_BEAT&&(r.ns_st_hc=String(M)),r}function yt(e){var t=lt(e);t<0&&(e.ns_ts=String(+(new Date)))}function bt(e,t,n){t=t||{},t.ns_st_ad=1,e>=S.AD_PLAY&&e<=S.AD_CLICK&&i.notify(e,t,n)}function wt(e,t){i.notify(S.CUSTOM,e,t)}var i=this,s=500,o,u=null,a=0,f=0,l,c,h,d=0,v=null,m,g,y=!0,b,T,C=N.DEFAULT_HEARTBEAT_INTERVAL,L=N.DEFAULT_KEEP_ALIVE_INTERVAL,A=N.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,O=0,M=0,_=0,D=!1,P,H,B,j,F,I={};r?p.setPlatformAPI(r):p.autoSelect(),e.extend(this,{reset:function(t){v.reset(t),v.setPlaylistCounter(0),v.setPlaylistId(+(new Date)+"_1"),v.getClip().reset(t),t!=null&&!t.isEmpty()?e.filterMap(o,t):o={},d=1,M=0,U(),z(),J(),G(),Z(),h=x.IDLE,c=null,a=-1,P=null,H=N.DEFAULT_PLAYERNAME,B=N.STREAMSENSE_VERSION,j=null},setPauseOnBufferingInterval:function(e){A=e},getPauseOnBufferingInterval:function(){return A},setKeepAliveInterval:function(e){L=e},getKeepAliveInterval:function(){return L},setHeartbeatIntervals:function(e){C=e},notify:function(){var t,n,r,o;n=arguments[0],arguments.length==3?(r=arguments[1],o=arguments[2]):(r={},o=arguments[1]);if(!S.toString(n))return;t=et(n);var u=e.extend({},r);yt(u),u.hasOwnProperty("ns_st_po")||(u.ns_st_po=e.getInteger(o).toString());if(n==S.PLAY||n==S.PAUSE||n==S.BUFFER||n==S.END)i.isThrottlingEnabled()&&Y(h)&&Y(t)&&(h!=x.PLAYING||t!=x.PAUSED||!!l)?tt(t,u,s):tt(t,u);else{var a=mt(n,u);e.extend(a,u),rt(a,!1),d++}},getLabels:function(){return o},getState:function(){return h},setLabels:function(e){for(var t in e)e.hasOwnProperty(t)&&i.setLabel(t,e[t])},getLabel:function(e){return o[e]},setLabel:function(e,t){t==null?delete o[e]:o[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=decodeURIComponent||unescape,n=e.indexOf("?");if(n>=0){if(n<e.length-1){var r=e.substring(n+1).split("&");for(var s=0,o=r.length;s<o;s++){var a=r[s],f=a.split("=");f.length==2?i.setLabel(f[0],t(f[1])):f.length==1&&i.setLabel(N.PAGE_NAME_LABEL,t(f[0]))}e=e.substring(0,n+1)}}else e+="?";return u=e,u},getPixelURL:function(){return u?u:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?u=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?u=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPauseOnBufferingEnabled:function(){return y},setPauseOnBufferingEnabled:function(e){y=e},isThrottlingEnabled:function(){return D},setThrottlingEnabled:function(e){D=e},setThrottlingDelay:function(e){e&&e>0&&
    (s=e)},getThrottlingDelay:function(){return s},setClip:function(e,t){var n=!1;return h==x.IDLE&&(v.getClip().reset(),v.getClip().setLabels(e,null),t&&v.incrementStarts(),n=!0),n},setPlaylist:function(e){var t=!1;return h==x.IDLE&&(v.incrementPlaylistCounter(),v.reset(),v.getClip().reset(),v.setLabels(e,null),t=!0),t},importState:function(t){reset();var n=e.extend({},t);v.setRegisters(n,null),v.getClip().setRegisters(n,null),nt(n),d++},exportState:function(){return j},getVersion:function(){return N.STREAMSENSE_VERSION},addListener:function(e){F.push(e)},removeListener:function(t){F.splice(e.indexOf(t,F),1)},getClip:function(){return v.getClip()},getPlaylist:function(){return v},setHttpGet:function(e){typeof e=="function"&&(p.httpGet=e)},setHttpPost:function(e){typeof e=="function"&&(p.httpPost=e)}}),e.extend(this,{adNotify:bt,customNotify:wt,viewNotify:function(e,t){e=e||i.getPixelURL(),e&&w(e,t)}}),ns_.comScore&&(I=ns_.comScore.exports,m=I.c()),o={},d=1,h=x.IDLE,v=new k,g=null,y=!0,T=null,M=0,z(),b=null,l=null,D=!1,P=null,f=0,F=[],i.reset(),t&&i.setLabels(t),n&&i.setPixelURL(n)};return function(t){function s(e,t){return n[i]||u(e,t)}function o(){i=-1;for(var e=0;e<=r;e++)if(n.hasOwnProperty(String(e))){i=e;break}return ns_.StreamSense.activeIndex=i,i}function u(e,t){return e=e||null,t=t||null,e&&typeof e=="object"&&(t=e,e=null),n[++r]=new ns_.StreamSense(t,e),o(),n[r]}function a(){var e=!1,t=i;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))t=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var r in n)if(n.hasOwnProperty(r)&&n[r]===arguments[0]){t=r;break}return n.hasOwnProperty(String(t))&&(e=n[t],delete n[t],e.reset(),o()),e}function f(e){return e=e||{},s().setPlaylist(e),s().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),s().setClip(e,n),s().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},s().notify(e,t,n))}function h(e){typeof e!="undefined"&&s().setLabels(e)}function p(){return s().getLabels()}function d(e){typeof e!="undefined"&&s().getPlaylist().setLabels(e)}function v(){return s().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&s().getClip().setLabels(e)}function g(){return s().getClip().getLabels()}function y(e){return s().reset(e||{})}function b(e){return s().getPlaylist().reset(e||{})}function w(e){return s().getClip().reset(e||{})}function E(e){return e=e||{},s().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),s().customNotify(e,t)}function x(){return s().exportState()}function T(e){s().importState(e)}var n={},r=-1,i=-1;e.extend(t,{activeIndex:i,newInstance:u,"new":u,destroyInstance:a,destroy:a,newPlaylist:f,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return L.AdEvents=T,L.PlayerEvents=S,L.InternalStates=x,L.getPlatformAPI=function(){return p},L}(),ns_.StreamingTag=ns_.StreamingTag||function(){var e=ns_.Utils,t=ns_.StreamSense,n=ns_.StreamSense.PlayerEvents,r=ns_.StreamSense.AdEvents,i=ns_.StreamSense.InternalStates||null,s=ns_.StreamSense.InternalStates!=null;return function(){var r=function(r){function v(){if(!s)return;if(ns_.comScore)c=new t,c.setLabel("ns_st_it","r");else if(e.exists(r)){h=e.isTrue(r.debug);if(e.exists(r.customerC2)&&r.customerC2.length>0){var n=r.secure?"https://sb":"http"+(document.location.href.charAt(4)=="s"?"s://sb":"://b");c=new t,c.setPixelURL(n+".scorecardresearch.com/p?c1=2"),c.setLabel("c2",r.customerC2),c.setLabel("ns_st_it","r")}else h&&console&&console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")}}function m(t){return e.exists(t)||(t={}),e.exists(t.ns_st_ci)||(t.ns_st_ci="0"),e.exists(t.c3)||(t.c3="*null"),e.exists(t.c4)||(t.c4="*null"),e.exists(t.c6)||(t.c6="*null"),t}function g(e){return u>0&&e>=u?a+=e-u:a=0,a}function y(e){c.getState()!=i.IDLE&&c.getState()!=i.PAUSED?c.notify(n.END,g(e)):c.getState()==i.PAUSED&&c.notify(n.END,a)}function b(e){return w("ns_st_ci",f,e)&&w("c3",f,e)&&w("c4",f,e)&&w("c6",f,e)}function w(t,n,r){if(e.exists(t)&&e.exists(n)&&e.exists(r)){var i=n[t],s=r[t];return e.exists(i)&&e.exists(s)&&i===s}return!1}function E(t,r){y(t),o++;var i={ns_st_cn:o,ns_st_pn:"1",ns_st_tp:"0"};e.extend(i,r),c.setClip(i),f=r,u=t,a=0,c.notify(n.PLAY,a)}function S(t){var r=+(new Date);y(r),o++,t=m(t);var i={ns_st_cn:o,ns_st_pn:"1",ns_st_tp:"1",ns_st_ad:"1"};e.extend(i,t),c.setClip(i),a=0,c.notify(n.PLAY,a),u=r,l=!1}function x(e,t){var r=+(new Date);e=m(e),d==p.None&&(d=t),l&&d==t?b(e)?(c.getClip().setLabels(e),c.getState()!=i.PLAYING&&(u=r,c.notify(n.PLAY,a))):E(r,e):E(r,e),l=!0,d=t}var o=0,u=0,a=0,f=null,l=!1,c=null,h=!1,p={None:0,AudioContent:1,VideoContent:2},d=p.None;e.extend(this,{playAdvertisement:function(){if(!c)return;h&&console&&console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");var e={ns_st_ct:"va"};S(e)},playVideoAdvertisement:function(t){if(!c)return;var n={ns_st_ct:"va"};t&&e.extend(n,t),S(n)},playAudioAdvertisement:function(t){if(!c)return;var n={ns_st_ct:"aa"};t&&e.extend(n,t),S(n)},playContentPart:function(t){if(!c)return;h&&console&&console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");var n={ns_st_ct:"vc"};t&&e.extend(n,t),x(n,p.VideoContent)},playVideoContentPart:function(t){if(!c)return;var n={ns_st_ct:"vc"};t&&e.extend(n,t),x(n,p.VideoContent)},playAudioContentPart:function(t){if(!c)return;var n={ns_st_ct:"ac"};t&&e.extend(n,t),x(n,p.AudioContent)},stop:function(){if(!c)return;var e=+(new Date);c.notify(n.PAUSE,g(e))}}),v()};return function(e){}(r),r}()}();
}catch(err){
}

/**
 * @license
 * lodash (Custom Build) /license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="clone,pick,cloneDeep,debounce"`
 */
;(function(){function t(t,e){return t.set(e[0],e[1]),t}function e(t,e){return t.add(e),t}function r(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function n(t,e){for(var r=-1,n=t?t.length:0;++r<n&&false!==e(t[r],r,t););}function o(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}function c(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)r=e(r,t[n],n,t);return r}function u(t){
return t&&t.Object===Object?t:null}function a(t){var e=false;if(null!=t&&typeof t.toString!="function")try{e=!!(t+"")}catch(r){}return e}function i(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function f(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}function s(){}function l(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function b(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1]);
}}function p(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function y(t){this.__data__=new b(t)}function _(t,e,r){var n=t[e];Ot.call(t,e)&&N(n,r)&&(r!==et||e in t)||(t[e]=r)}function h(t,e){for(var r=t.length;r--;)if(N(t[r][0],e))return r;return-1}function j(t,e){return t&&S(e,Y(e),t)}function g(t,e,r,o,c,u,i){var f;if(o&&(f=u?o(t,c,u,i):o(t)),f!==et)return f;if(!G(t))return t;if(c=Yt(t)){if(f=$(t),!e)return O(t,f)}else{var s=k(t),l="[object Function]"==s||"[object GeneratorFunction]"==s;
if(Zt(t))return A(t,e);if("[object Object]"==s||"[object Arguments]"==s||l&&!u){if(a(t))return u?t:{};if(f=M(l?{}:t),!e)return x(t,j(f,t))}else{if(!lt[s])return u?t:{};f=D(t,s,g,e)}}if(i||(i=new y),u=i.get(t))return u;if(i.set(t,f),!c)var b=r?d(t,Y,I):Y(t);return n(b||t,function(n,c){b&&(c=n,n=t[c]),_(f,c,g(n,e,r,o,c,t,i))}),f}function v(t,e,r,n,c){var u=-1,a=t.length;for(r||(r=U),c||(c=[]);++u<a;){var i=t[u];e>0&&r(i)?e>1?v(i,e-1,r,n,c):o(c,i):n||(c[c.length]=i)}return c}function d(t,e,r){return e=e(t),
Yt(t)?e:o(e,r(t))}function w(t,e){return t=Object(t),c(e,function(e,r){return r in t&&(e[r]=t[r]),e},{})}function A(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}function m(t){var e=new t.constructor(t.byteLength);return new It(e).set(new It(t)),e}function O(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function S(t,e,r){r||(r={});for(var n=-1,o=e.length;++n<o;){var c=e[n];_(r,c,t[c])}return r}function x(t,e){return S(t,I(t),e)}function F(t,e){
var r=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r[typeof e=="string"?"string":"hash"]:r.map}function E(t,e){var r=null==t?et:t[e];return(!G(r)||At&&At in r?0:(C(r)||a(r)?xt:it).test(B(r)))?r:et}function I(t){return kt(Object(t))}function k(t){return St.call(t)}function $(t){var e=t.length,r=t.constructor(e);return e&&"string"==typeof t[0]&&Ot.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function M(t){return typeof t.constructor!="function"||P(t)?t={}:(t=Ut(Object(t)),
t=G(t)?$t(t):{}),t}function D(r,n,o,u){var a=r.constructor;switch(n){case"[object ArrayBuffer]":return m(r);case"[object Boolean]":case"[object Date]":return new a(+r);case"[object DataView]":return n=u?m(r.buffer):r.buffer,new r.constructor(n,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":
return n=u?m(r.buffer):r.buffer,new r.constructor(n,r.byteOffset,r.length);case"[object Map]":return n=u?o(i(r),true):i(r),c(n,t,new r.constructor);case"[object Number]":case"[object String]":return new a(r);case"[object RegExp]":return n=new r.constructor(r.source,ct.exec(r)),n.lastIndex=r.lastIndex,n;case"[object Set]":return n=u?o(f(r),true):f(r),c(n,e,new r.constructor);case"[object Symbol]":return Qt?Object(Qt.call(r)):{}}}function U(t){return Yt(t)||V(t)}function P(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||dt);
}function B(t){if(null!=t){try{return mt.call(t)}catch(e){}return t+""}return""}function T(){return Date.now()}function L(t,e){if(typeof t!="function")throw new TypeError("Expected a function");return e=Bt(e===et?t.length-1:Q(e),0),function(){for(var n=arguments,o=-1,c=Bt(n.length-e,0),u=Array(c);++o<c;)u[o]=n[e+o];switch(e){case 0:return t.call(this,u);case 1:return t.call(this,n[0],u);case 2:return t.call(this,n[0],n[1],u)}for(c=Array(e+1),o=-1;++o<e;)c[o]=n[o];return c[e]=u,r(t,this,c)}}function N(t,e){
return t===e||t!==t&&e!==e}function V(t){return R(t)&&Ot.call(t,"callee")&&(!Mt.call(t,"callee")||"[object Arguments]"==St.call(t))}function W(t){return null!=t&&z(Xt(t))&&!C(t)}function R(t){return q(t)&&W(t)}function C(t){return t=G(t)?St.call(t):"","[object Function]"==t||"[object GeneratorFunction]"==t}function z(t){return typeof t=="number"&&t>-1&&0==t%1&&9007199254740991>=t}function G(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function q(t){return!!t&&typeof t=="object"}function H(t){
return typeof t=="string"||!Yt(t)&&q(t)&&"[object String]"==St.call(t)}function J(t){return typeof t=="symbol"||q(t)&&"[object Symbol]"==St.call(t)}function K(t){return t?(t=X(t),t===rt||t===-rt?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function Q(t){t=K(t);var e=t%1;return t===t?e?t-e:t:0}function X(t){if(typeof t=="number")return t;if(J(t))return nt;if(G(t)&&(t=C(t.valueOf)?t.valueOf():t,t=G(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(ot,"");var e=at.test(t);return e||ft.test(t)?bt(t.slice(2),e?2:8):ut.test(t)?nt:+t;
}function Y(t){var e=P(t);if(!e&&!W(t))return Pt(Object(t));var r,n=t?t.length:et;if(z(n)&&(Yt(t)||H(t)||V(t))){r=String;for(var o=-1,c=Array(n);++o<n;)c[o]=r(o);n=c}else n=null;r=n,n=!!r,r=r||[];var u,o=r.length;for(u in t){var c=t,a=u;(c=!(null!=c&&(Ot.call(c,a)||typeof c=="object"&&a in c&&null===Ut(Object(c)))))||!(c=n)||(c="length"==u)||(c=u,a=o,a=null==a?9007199254740991:a,c=!!a&&(typeof c=="number"||st.test(c))&&c>-1&&0==c%1&&a>c),c||e&&"constructor"==u||r.push(u)}return r}function Z(){return[];
}function tt(){return false}var et,rt=1/0,nt=NaN,ot=/^\s+|\s+$/g,ct=/\w*$/,ut=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,it=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,st=/^(?:0|[1-9]\d*)$/,lt={};lt["[object Arguments]"]=lt["[object Array]"]=lt["[object ArrayBuffer]"]=lt["[object DataView]"]=lt["[object Boolean]"]=lt["[object Date]"]=lt["[object Float32Array]"]=lt["[object Float64Array]"]=lt["[object Int8Array]"]=lt["[object Int16Array]"]=lt["[object Int32Array]"]=lt["[object Map]"]=lt["[object Number]"]=lt["[object Object]"]=lt["[object RegExp]"]=lt["[object Set]"]=lt["[object String]"]=lt["[object Symbol]"]=lt["[object Uint8Array]"]=lt["[object Uint8ClampedArray]"]=lt["[object Uint16Array]"]=lt["[object Uint32Array]"]=true,
lt["[object Error]"]=lt["[object Function]"]=lt["[object WeakMap]"]=false;var bt=parseInt,pt=typeof exports=="object"&&exports,yt=pt&&typeof module=="object"&&module,_t=yt&&yt.exports===pt,ht=u(typeof self=="object"&&self),jt=u(typeof this=="object"&&this),gt=u(typeof global=="object"&&global)||ht||jt||Function("return this")(),vt=Array.prototype,dt=Object.prototype,wt=gt["__core-js_shared__"],At=function(){var t=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),mt=Function.prototype.toString,Ot=dt.hasOwnProperty,St=dt.toString,xt=RegExp("^"+mt.call(Ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ft=_t?gt.Buffer:et,Et=gt.Symbol,It=gt.Uint8Array,kt=Object.getOwnPropertySymbols,$t=Object.create,Mt=dt.propertyIsEnumerable,Dt=vt.splice,Ut=Object.getPrototypeOf,Pt=Object.keys,Bt=Math.max,Tt=Math.min,Lt=E(gt,"DataView"),Nt=E(gt,"Map"),Vt=E(gt,"Promise"),Wt=E(gt,"Set"),Rt=E(gt,"WeakMap"),Ct=E(Object,"create"),zt=B(Lt),Gt=B(Nt),qt=B(Vt),Ht=B(Wt),Jt=B(Rt),Kt=Et?Et.prototype:et,Qt=Kt?Kt.valueOf:et;
l.prototype.clear=function(){this.__data__=Ct?Ct(null):{}},l.prototype["delete"]=function(t){return this.has(t)&&delete this.__data__[t]},l.prototype.get=function(t){var e=this.__data__;return Ct?(t=e[t],"__lodash_hash_undefined__"===t?et:t):Ot.call(e,t)?e[t]:et},l.prototype.has=function(t){var e=this.__data__;return Ct?e[t]!==et:Ot.call(e,t)},l.prototype.set=function(t,e){return this.__data__[t]=Ct&&e===et?"__lodash_hash_undefined__":e,this},b.prototype.clear=function(){this.__data__=[]},b.prototype["delete"]=function(t){
var e=this.__data__;return t=h(e,t),0>t?false:(t==e.length-1?e.pop():Dt.call(e,t,1),true)},b.prototype.get=function(t){var e=this.__data__;return t=h(e,t),0>t?et:e[t][1]},b.prototype.has=function(t){return-1<h(this.__data__,t)},b.prototype.set=function(t,e){var r=this.__data__,n=h(r,t);return 0>n?r.push([t,e]):r[n][1]=e,this},p.prototype.clear=function(){this.__data__={hash:new l,map:new(Nt||b),string:new l}},p.prototype["delete"]=function(t){return F(this,t)["delete"](t)},p.prototype.get=function(t){
return F(this,t).get(t)},p.prototype.has=function(t){return F(this,t).has(t)},p.prototype.set=function(t,e){return F(this,t).set(t,e),this},y.prototype.clear=function(){this.__data__=new b},y.prototype["delete"]=function(t){return this.__data__["delete"](t)},y.prototype.get=function(t){return this.__data__.get(t)},y.prototype.has=function(t){return this.__data__.has(t)},y.prototype.set=function(t,e){var r=this.__data__;return r instanceof b&&200==r.__data__.length&&(r=this.__data__=new p(r.__data__)),
r.set(t,e),this};var Xt=function(t){return function(e){return null==e?et:e[t]}}("length");kt||(I=Z),(Lt&&"[object DataView]"!=k(new Lt(new ArrayBuffer(1)))||Nt&&"[object Map]"!=k(new Nt)||Vt&&"[object Promise]"!=k(Vt.resolve())||Wt&&"[object Set]"!=k(new Wt)||Rt&&"[object WeakMap]"!=k(new Rt))&&(k=function(t){var e=St.call(t);if(t=(t="[object Object]"==e?t.constructor:et)?B(t):et)switch(t){case zt:return"[object DataView]";case Gt:return"[object Map]";case qt:return"[object Promise]";case Ht:return"[object Set]";
case Jt:return"[object WeakMap]"}return e});var Yt=Array.isArray,Zt=Ft?function(t){return t instanceof Ft}:tt,te=L(function(t,e){var r;if(null==t)r={};else{r=v(e,1);for(var n=-1,o=r?r.length:0,c=Array(o);++n<o;){var u,a=n;if(u=r[n],typeof u!="string"&&!J(u)){var i=u+"";u="0"==i&&1/u==-rt?"-0":i}c[a]=u}r=w(t,c)}return r});s.debounce=function(t,e,r){function n(e){var r=i,n=f;return i=f=et,y=e,l=t.apply(n,r)}function o(t){var r=t-p;return t-=y,p===et||r>=e||0>r||h&&t>=s}function c(){var t=T();if(o(t))return u(t);
var r,n=setTimeout;r=t-y,t=e-(t-p),r=h?Tt(t,s-r):t,b=n(c,r)}function u(t){return b=et,j&&i?n(t):(i=f=et,l)}function a(){var t=T(),r=o(t);if(i=arguments,f=this,p=t,r){if(b===et)return y=t=p,b=setTimeout(c,e),_?n(t):l;if(h)return b=setTimeout(c,e),n(p)}return b===et&&(b=setTimeout(c,e)),l}var i,f,s,l,b,p,y=0,_=false,h=false,j=true;if(typeof t!="function")throw new TypeError("Expected a function");return e=X(e)||0,G(r)&&(_=!!r.leading,s=(h="maxWait"in r)?Bt(X(r.maxWait)||0,e):s,j="trailing"in r?!!r.trailing:j),
a.cancel=function(){y=0,i=p=f=b=et},a.flush=function(){return b===et?l:u(T())},a},s.keys=Y,s.pick=te,s.rest=L,s.clone=function(t){return g(t,false,true)},s.cloneDeep=function(t){return g(t,true,true)},s.eq=N,s.isArguments=V,s.isArray=Yt,s.isArrayLike=W,s.isArrayLikeObject=R,s.isBuffer=Zt,s.isFunction=C,s.isLength=z,s.isObject=G,s.isObjectLike=q,s.isString=H,s.isSymbol=J,s.stubArray=Z,s.stubFalse=tt,s.now=T,s.toFinite=K,s.toInteger=Q,s.toNumber=X,s.VERSION="4.13.1",(ht||{})._=s,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){
return s}):yt?((yt.exports=s)._=s,pt._=s):gt._=s}).call(this);
/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
function initMoatTracking(b,h,d){if(!1===h.hasOwnProperty("partnerCode"))return!1;var k=document.createElement("script");d=d||b&&("undefined"!==typeof b.O?b.O.parentNode:document.body)||document.body;var f=[],c={adsManager:b,ids:h,imaSDK:!0,events:[],dispatchEvent:function(a){var b=this.sendEvent,c=this.events;b?(c&&(c.push(a),a=c),b(a)):c.push(a)}},p={complete:"AdVideoComplete",firstquartile:"AdVideoFirstQuartile",impression:"AdImpression",loaded:"AdLoaded",midpoint:"AdVideoMidpoint",pause:"AdPaused",skip:"AdSkipped",start:"AdVideoStart",thirdquartile:"AdVideoThirdQuartile",volumeChange:"AdVolumeChange"};if(google&&google.ima&&b){var e="_moatApi"+Math.floor(1E8*Math.random()),l;for(l in google.ima.AdEvent.Type){var n=function(a){if(c.sendEvent){for(a=f.length-1;0<=a;a--)b.removeEventListener(f[a].type,f[a].func);c.sendEvent(c.events)}else c.events.push({type:p[a.type]||a.type,adVolume:b.getVolume()})};b.addEventListener(google.ima.AdEvent.Type[l],n);f.push({type:google.ima.AdEvent.Type[l],func:n})}}var e="undefined"!==typeof e?e:"",g,m;try{g=d.ownerDocument,m=g.defaultView||g.parentWindow}catch(a){g=document,m=window}m[e]=c;k.type="text/javascript";d&&d.appendChild(k);k.src="https://z.moatads.com/"+h.partnerCode+"/moatvideo.js#"+e;return c};

(function(h,j){"".trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")});var k,l;k={isUnsafe:!1,isXML:function(a){return"object"===typeof a&&a.nodeType!==j},getRoot:function(a){return 9===a.nodeType?a.documentElement:11===a.nodeType?a.firstChild:a},convert:function(a){var c={};if("string"===typeof a){var b=null,d=null,e=!0;try{b="DOMParser"in h?new DOMParser:new ActiveXObject("MSXML2.DOMDocument"),b.async=!1}catch(f){throw Error("XML Parser could not be instantiated");
}"parseFromString"in b?(d=b.parseFromString(a,"text/xml"),e="parsererror"!==d.documentElement.tagName):d=(e=b.loadXML(a))?b:!1;if(!e)throw Error("Error parsing XML string");a=d}else a=this.isXML(a)?a:j;if(!a)throw Error("Unable to parse XML");if(3===a.nodeType||4===a.nodeType)return a.nodeValue;a=this.getRoot(a);c[a.nodeName]={};this.process(a,c[a.nodeName]);return c},process:function(a,c){var b,d,e,f,g;if(a.hasChildNodes()){f=a.childNodes.length;for(e=0;e<f;e++)switch(b=a.childNodes[e],b.nodeType){case 3:c.Text=
c.Text?c.Text+b.nodeValue.trim():b.nodeValue.trim();break;case 4:b=b[b.text?"text":"nodeValue"];c.Text=c.Text?c.Text+b:b;break;case 1:d=b.nodeName,g={},d in c?c[d].length?(this.process(b,g),c[d].push(g)):(this.process(b,g),c[d]=[c[d],g]):(this.process(b,g),c[d]=g)}}if(a.attributes.length)for(f=a.attributes.length-1;0<=f;f--)b=a.attributes[f],e=b.name.trim(),b=b.value,c[(this.isUnsafe?"":"@")+e]=b}};l={xmlToJSON:function(a,c){k.isUnsafe=c!==j?c:!1;return k.convert(a)}};h.xml=h.xml||l})(window);
/**
 * @license
 * Video.js 5.12.6 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.videojs=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){return e(this,b),f(this,a.call(this,c,d))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-big-play-button"},b.prototype.handleClick=function(){this.player_.play()},b}(i["default"]);l.prototype.controlText_="Play Video",k["default"].registerComponent("BigPlayButton",l),c["default"]=l},{2:2,5:5}],2:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=a(85),m=d(l),n=a(136),o=d(n),p=function(a){function b(c,d){return e(this,b),f(this,a.call(this,c,d))}return g(b,a),b.prototype.createEl=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b=(0,o["default"])({className:this.buildCSSClass()},b),"button"!==a&&(m["default"].warn("Creating a Button with an HTML element of "+a+" is deprecated; use ClickableComponent instead."),b=(0,o["default"])({tabIndex:0},b),c=(0,o["default"])({role:"button"},c)),c=(0,o["default"])({type:"button","aria-live":"polite"},c);var d=k["default"].prototype.createEl.call(this,a,b,c);return this.createControlTextEl(d),d},b.prototype.addChild=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=this.constructor.name;return m["default"].warn("Adding an actionable (user controllable) child to a Button ("+c+") is not supported; use a ClickableComponent instead."),k["default"].prototype.addChild.call(this,a,b)},b.prototype.handleKeyPress=function(b){32!==b.which&&13!==b.which&&a.prototype.handleKeyPress.call(this,b)},b}(i["default"]);k["default"].registerComponent("Button",p),c["default"]=p},{136:136,3:3,5:5,85:85}],3:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(81),n=d(m),o=a(82),p=d(o),q=a(85),r=e(q),s=a(92),t=e(s),u=a(136),v=e(u),w=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.emitTapEvents(),e.on("tap",e.handleClick),e.on("click",e.handleClick),e.on("focus",e.handleFocus),e.on("blur",e.handleBlur),e}return h(b,a),b.prototype.createEl=function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c=(0,v["default"])({className:this.buildCSSClass(),tabIndex:0},c),"button"===b&&r["default"].error("Creating a ClickableComponent with an HTML element of "+b+" is not supported; use a Button instead."),d=(0,v["default"])({role:"button","aria-live":"polite"},d);var e=a.prototype.createEl.call(this,b,c,d);return this.createControlTextEl(e),e},b.prototype.createControlTextEl=function(a){return this.controlTextEl_=l.createEl("span",{className:"vjs-control-text"}),a&&a.appendChild(this.controlTextEl_),this.controlText(this.controlText_,a),this.controlTextEl_},b.prototype.controlText=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.el();if(!a)return this.controlText_||"Need Text";var c=this.localize(a);return this.controlText_=a,this.controlTextEl_.innerHTML=c,b.setAttribute("title",c),this},b.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+a.prototype.buildCSSClass.call(this)},b.prototype.addChild=function(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.prototype.addChild.call(this,b,c)},b.prototype.enable=function(){return this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),this},b.prototype.disable=function(){return this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),this},b.prototype.handleClick=function(){},b.prototype.handleFocus=function(){n.on(t["default"],"keydown",p.bind(this,this.handleKeyPress))},b.prototype.handleKeyPress=function(b){32===b.which||13===b.which?(b.preventDefault(),this.handleClick(b)):a.prototype.handleKeyPress&&a.prototype.handleKeyPress.call(this,b)},b.prototype.handleBlur=function(){n.off(t["default"],"keydown",p.bind(this,this.handleKeyPress))},b}(j["default"]);j["default"].registerComponent("ClickableComponent",w),c["default"]=w},{136:136,5:5,80:80,81:81,82:82,85:85,92:92}],4:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.controlText(d&&d.controlText||g.localize("Close")),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-close-button "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.trigger({type:"close",bubbles:!1})},b}(i["default"]);k["default"].registerComponent("CloseButton",l),c["default"]=l},{2:2,5:5}],5:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(93),h=e(g),i=a(80),j=d(i),k=a(82),l=d(k),m=a(84),n=d(m),o=a(81),p=d(o),q=a(85),r=e(q),s=a(89),t=e(s),u=a(86),v=e(u),w=function(){function a(b,c,d){if(f(this,a),!b&&this.play?this.player_=b=this:this.player_=b,this.options_=(0,v["default"])({},this.options_),c=this.options_=(0,v["default"])(this.options_,c),this.id_=c.id||c.el&&c.el.id,!this.id_){var e=b&&b.id&&b.id()||"no_player";this.id_=e+"_component_"+n.newGUID()}this.name_=c.name||null,c.el?this.el_=c.el:c.createEl!==!1&&(this.el_=this.createEl()),this.children_=[],this.childIndex_={},this.childNameIndex_={},c.initChildren!==!1&&this.initChildren(),this.ready(d),c.reportTouchActivity!==!1&&this.enableTouchActivity()}return a.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var a=this.children_.length-1;a>=0;a--)this.children_[a].dispose&&this.children_[a].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.off(),this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),j.removeElData(this.el_),this.el_=null},a.prototype.player=function(){return this.player_},a.prototype.options=function(a){return r["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),a?(this.options_=(0,v["default"])(this.options_,a),this.options_):this.options_},a.prototype.el=function(){return this.el_},a.prototype.createEl=function(a,b,c){return j.createEl(a,b,c)},a.prototype.localize=function(a){var b=this.player_.language&&this.player_.language(),c=this.player_.languages&&this.player_.languages();if(!b||!c)return a;var d=c[b];if(d&&d[a])return d[a];var e=b.split("-")[0],f=c[e];return f&&f[a]?f[a]:a},a.prototype.contentEl=function(){return this.contentEl_||this.el_},a.prototype.id=function(){return this.id_},a.prototype.name=function(){return this.name_},a.prototype.children=function(){return this.children_},a.prototype.getChildById=function(a){return this.childIndex_[a]},a.prototype.getChild=function(a){return this.childNameIndex_[a]},a.prototype.addChild=function(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.children_.length,e=void 0,f=void 0;if("string"==typeof b){f=b,c||(c={}),c===!0&&(r["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."),c={});var g=c.componentClass||(0,t["default"])(f);c.name=f;var h=a.getComponent(g);if(!h)throw new Error("Component "+g+" does not exist");if("function"!=typeof h)return null;e=new h(this.player_||this,c)}else e=b;if(this.children_.splice(d,0,e),"function"==typeof e.id&&(this.childIndex_[e.id()]=e),f=f||e.name&&e.name(),f&&(this.childNameIndex_[f]=e),"function"==typeof e.el&&e.el()){var i=this.contentEl().children,j=i[d]||null;this.contentEl().insertBefore(e.el(),j)}return e},a.prototype.removeChild=function(a){if("string"==typeof a&&(a=this.getChild(a)),a&&this.children_){for(var b=!1,c=this.children_.length-1;c>=0;c--)if(this.children_[c]===a){b=!0,this.children_.splice(c,1);break}if(b){this.childIndex_[a.id()]=null,this.childNameIndex_[a.name()]=null;var d=a.el();d&&d.parentNode===this.contentEl()&&this.contentEl().removeChild(a.el())}}},a.prototype.initChildren=function(){var b=this,c=this.options_.children;c&&!function(){var d=b.options_,e=function(a){var c=a.name,e=a.opts;if(void 0!==d[c]&&(e=d[c]),e!==!1){e===!0&&(e={}),e.playerOptions=b.options_.playerOptions;var f=b.addChild(c,e);f&&(b[c]=f)}},f=void 0,g=a.getComponent("Tech");f=Array.isArray(c)?c:Object.keys(c),f.concat(Object.keys(b.options_).filter(function(a){return!f.some(function(b){return"string"==typeof b?a===b:a===b.name})})).map(function(a){var d=void 0,e=void 0;return"string"==typeof a?(d=a,e=c[d]||b.options_[d]||{}):(d=a.name,e=a),{name:d,opts:e}}).filter(function(b){var c=a.getComponent(b.opts.componentClass||(0,t["default"])(b.name));return c&&!g.isTech(c)}).forEach(e)}()},a.prototype.buildCSSClass=function(){return""},a.prototype.on=function(a,b,c){var d=this;return"string"==typeof a||Array.isArray(a)?p.on(this.el_,a,l.bind(this,b)):!function(){var e=a,f=b,g=l.bind(d,c),h=function(){return d.off(e,f,g)};h.guid=g.guid,d.on("dispose",h);var i=function(){return d.off("dispose",h)};i.guid=g.guid,a.nodeName?(p.on(e,f,g),p.on(e,"dispose",i)):"function"==typeof a.on&&(e.on(f,g),e.on("dispose",i))}(),this},a.prototype.off=function(a,b,c){if(!a||"string"==typeof a||Array.isArray(a))p.off(this.el_,a,b);else{var d=a,e=b,f=l.bind(this,c);this.off("dispose",f),a.nodeName?(p.off(d,e,f),p.off(d,"dispose",f)):(d.off(e,f),d.off("dispose",f))}return this},a.prototype.one=function(a,b,c){var d=this,e=arguments;return"string"==typeof a||Array.isArray(a)?p.one(this.el_,a,l.bind(this,b)):!function(){var f=a,g=b,h=l.bind(d,c),i=function j(){d.off(f,g,j),h.apply(null,e)};i.guid=h.guid,d.on(f,g,i)}(),this},a.prototype.trigger=function(a,b){return p.trigger(this.el_,a,b),this},a.prototype.ready=function(a){var b=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a&&(this.isReady_?b?a.call(this):this.setTimeout(a,1):(this.readyQueue_=this.readyQueue_||[],this.readyQueue_.push(a))),this},a.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var a=this.readyQueue_;this.readyQueue_=[],a&&a.length>0&&a.forEach(function(a){a.call(this)},this),this.trigger("ready")},1)},a.prototype.$=function(a,b){return j.$(a,b||this.contentEl())},a.prototype.$$=function(a,b){return j.$$(a,b||this.contentEl())},a.prototype.hasClass=function(a){return j.hasElClass(this.el_,a)},a.prototype.addClass=function(a){return j.addElClass(this.el_,a),this},a.prototype.removeClass=function(a){return j.removeElClass(this.el_,a),this},a.prototype.toggleClass=function(a,b){return j.toggleElClass(this.el_,a,b),this},a.prototype.show=function(){return this.removeClass("vjs-hidden"),this},a.prototype.hide=function(){return this.addClass("vjs-hidden"),this},a.prototype.lockShowing=function(){return this.addClass("vjs-lock-showing"),this},a.prototype.unlockShowing=function(){return this.removeClass("vjs-lock-showing"),this},a.prototype.width=function(a,b){return this.dimension("width",a,b)},a.prototype.height=function(a,b){return this.dimension("height",a,b)},a.prototype.dimensions=function(a,b){return this.width(a,!0).height(b)},a.prototype.dimension=function(a,b,c){if(void 0!==b)return null!==b&&b===b||(b=0),(""+b).indexOf("%")!==-1||(""+b).indexOf("px")!==-1?this.el_.style[a]=b:"auto"===b?this.el_.style[a]="":this.el_.style[a]=b+"px",c||this.trigger("resize"),this;if(!this.el_)return 0;var d=this.el_.style[a],e=d.indexOf("px");return e!==-1?parseInt(d.slice(0,e),10):parseInt(this.el_["offset"+(0,t["default"])(a)],10)},a.prototype.currentDimension=function(a){var b=0;if("width"!==a&&"height"!==a)throw new Error("currentDimension only accepts width or height value");if("function"==typeof h["default"].getComputedStyle){var c=h["default"].getComputedStyle(this.el_);b=c.getPropertyValue(a)||c[a]}else if(this.el_.currentStyle){var d="offset"+(0,t["default"])(a);b=this.el_[d]}return b=parseFloat(b)},a.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},a.prototype.currentWidth=function(){return this.currentDimension("width")},a.prototype.currentHeight=function(){return this.currentDimension("height")},a.prototype.emitTapEvents=function(){var a=0,b=null,c=10,d=200,e=void 0;this.on("touchstart",function(c){1===c.touches.length&&(b={pageX:c.touches[0].pageX,pageY:c.touches[0].pageY},a=(new Date).getTime(),e=!0)}),this.on("touchmove",function(a){if(a.touches.length>1)e=!1;else if(b){var d=a.touches[0].pageX-b.pageX,f=a.touches[0].pageY-b.pageY,g=Math.sqrt(d*d+f*f);g>c&&(e=!1)}});var f=function(){e=!1};this.on("touchleave",f),this.on("touchcancel",f),this.on("touchend",function(c){if(b=null,e===!0){var f=(new Date).getTime()-a;f<d&&(c.preventDefault(),this.trigger("tap"))}})},a.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var a=l.bind(this.player(),this.player().reportUserActivity),b=void 0;this.on("touchstart",function(){a(),this.clearInterval(b),b=this.setInterval(a,250)});var c=function(c){a(),this.clearInterval(b)};this.on("touchmove",a),this.on("touchend",c),this.on("touchcancel",c)}},a.prototype.setTimeout=function(a,b){a=l.bind(this,a);var c=h["default"].setTimeout(a,b),d=function(){this.clearTimeout(c)};return d.guid="vjs-timeout-"+c,this.on("dispose",d),c},a.prototype.clearTimeout=function(a){h["default"].clearTimeout(a);var b=function(){};return b.guid="vjs-timeout-"+a,this.off("dispose",b),a},a.prototype.setInterval=function(a,b){a=l.bind(this,a);var c=h["default"].setInterval(a,b),d=function(){this.clearInterval(c)};return d.guid="vjs-interval-"+c,this.on("dispose",d),c},a.prototype.clearInterval=function(a){h["default"].clearInterval(a);var b=function(){};return b.guid="vjs-interval-"+a,this.off("dispose",b),a},a.registerComponent=function(b,c){return a.components_||(a.components_={}),a.components_[b]=c,c},a.getComponent=function(b){return a.components_&&a.components_[b]?a.components_[b]:h["default"]&&h["default"].videojs&&h["default"].videojs[b]?(r["default"].warn("The "+b+" component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"),h["default"].videojs[b]):void 0},a.extend=function(b){b=b||{},r["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");var c=b.init||b.init||this.prototype.init||this.prototype.init||function(){},d=function(){c.apply(this,arguments)};d.prototype=Object.create(this.prototype),d.prototype.constructor=d,d.extend=a.extend;for(var e in b)b.hasOwnProperty(e)&&(d.prototype[e]=b[e]);return d},a}();w.registerComponent("Component",w),c["default"]=w},{80:80,81:81,82:82,84:84,85:85,86:86,89:89,93:93}],6:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(36),i=d(h),j=a(5),k=d(j),l=a(7),m=d(l),n=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,b),d.tracks=c.audioTracks&&c.audioTracks();var g=f(this,a.call(this,c,d));return g.el_.setAttribute("aria-label","Audio Menu"),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-audio-button "+a.prototype.buildCSSClass.call(this)},b.prototype.createItems=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=this.player_.audioTracks&&this.player_.audioTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];a.push(new m["default"](this.player_,{track:d,selectable:!0}))}return a},b}(i["default"]);n.prototype.controlText_="Audio Track",k["default"].registerComponent("AudioTrackButton",n),c["default"]=n},{36:36,5:5,7:7}],7:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(48),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.track,h=c.audioTracks();d.label=e.label||e.language||"Unknown",d.selected=e.enabled;var i=g(this,a.call(this,c,d));return i.track=e,h&&!function(){var a=n.bind(i,i.handleTracksChange);h.addEventListener("change",a),i.on("dispose",function(){h.removeEventListener("change",a)})}(),i}return h(b,a),b.prototype.handleClick=function(b){var c=this.player_.audioTracks();if(a.prototype.handleClick.call(this,b),c)for(var d=0;d<c.length;d++){var e=c[d];e.enabled=e===this.track}},b.prototype.handleTracksChange=function(a){this.selected(this.track.enabled)},b}(j["default"]);l["default"].registerComponent("AudioTrackMenuItem",o),c["default"]=o},{48:48,5:5,82:82}],8:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(12),a(32),a(33),a(35),a(34),a(10),a(18),a(9),a(38),a(40),a(11),a(25),a(27),a(29),a(24),a(6),a(13),a(21);var j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"},{role:"group"})},b}(i["default"]);j.prototype.options_={children:["playToggle","volumeMenuButton","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subtitlesButton","captionsButton","audioTrackButton","fullscreenToggle"]},i["default"].registerComponent("ControlBar",j),c["default"]=j},{10:10,11:11,12:12,13:13,18:18,21:21,24:24,25:25,27:27,29:29,32:32,33:33,34:34,35:35,38:38,40:40,5:5,6:6,9:9}],9:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"fullscreenchange",g.handleFullscreenChange),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleFullscreenChange=function(){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},b.prototype.handleClick=function(){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},b}(i["default"]);l.prototype.controlText_="Fullscreen",k["default"].registerComponent("FullscreenToggle",l),c["default"]=l},{2:2,5:5}],10:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateShowing(),e.on(e.player(),"durationchange",e.updateShowing),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"</span>"+this.localize("LIVE")},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateShowing=function(){this.player().duration()===1/0?this.show():this.hide()},b}(j["default"]);j["default"].registerComponent("LiveDisplay",m),c["default"]=m},{5:5,80:80}],11:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(2),j=e(i),k=a(5),l=e(k),m=a(80),n=d(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"volumechange",e.update),c.tech_&&c.tech_.featuresVolumeControl===!1&&e.addClass("vjs-hidden"),e.on(c,"loadstart",function(){this.update(),c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}),e}return h(b,a),b.prototype.buildCSSClass=function(){return"vjs-mute-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.player_.muted(!this.player_.muted())},b.prototype.update=function(){var a=this.player_.volume(),b=3;0===a||this.player_.muted()?b=0:a<.33?b=1:a<.67&&(b=2);var c=this.player_.muted()?"Unmute":"Mute";this.controlText()!==c&&this.controlText(c);for(var d=0;d<4;d++)n.removeElClass(this.el_,"vjs-vol-"+d);n.addElClass(this.el_,"vjs-vol-"+b)},b}(j["default"]);o.prototype.controlText_="Mute",l["default"].registerComponent("MuteToggle",o),c["default"]=o},{2:2,5:5,80:80}],12:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(2),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"play",g.handlePlay),g.on(c,"pause",g.handlePause),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-play-control "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.player_.paused()?this.player_.play():this.player_.pause()},b.prototype.handlePlay=function(){this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},b.prototype.handlePause=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},b}(i["default"]);l.prototype.controlText_="Play",k["default"].registerComponent("PlayToggle",l),c["default"]=l},{2:2,5:5}],13:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(47),j=e(i),k=a(49),l=e(k),m=a(14),n=e(m),o=a(5),p=e(o),q=a(80),r=d(q),s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateVisibility(),e.updateLabel(),e.on(c,"loadstart",e.updateVisibility),e.on(c,"ratechange",e.updateLabel),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this);return this.labelEl_=r.createEl("div",{className:"vjs-playback-rate-value",innerHTML:1}),b.appendChild(this.labelEl_),b},b.prototype.buildCSSClass=function(){return"vjs-playback-rate "+a.prototype.buildCSSClass.call(this)},b.prototype.createMenu=function(){var a=new l["default"](this.player()),b=this.playbackRates();if(b)for(var c=b.length-1;c>=0;c--)a.addChild(new n["default"](this.player(),{rate:b[c]+"x"}));return a},b.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},b.prototype.handleClick=function(){for(var a=this.player().playbackRate(),b=this.playbackRates(),c=b[0],d=0;d<b.length;d++)if(b[d]>a){c=b[d];break}this.player().playbackRate(c)},b.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},b.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},b.prototype.updateVisibility=function(){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},b.prototype.updateLabel=function(){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},b}(j["default"]);s.prototype.controlText_="Playback Rate",p["default"].registerComponent("PlaybackRateMenuButton",s),c["default"]=s},{14:14,47:47,49:49,5:5,80:80}],14:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");
}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(48),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b);var g=d.rate,h=parseFloat(g,10);d.label=g,d.selected=1===h;var i=f(this,a.call(this,c,d));return i.label=g,i.rate=h,i.on(c,"ratechange",i.update),i}return g(b,a),b.prototype.handleClick=function(){a.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},b.prototype.update=function(){this.selected(this.player().playbackRate()===this.rate)},b}(i["default"]);l.prototype.contentElType="button",k["default"].registerComponent("PlaybackRateMenuItem",l),c["default"]=l},{48:48,5:5}],15:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.partEls_=[],e.on(c,"progress",e.update),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},b.prototype.update=function(){var a=this.player_.buffered(),b=this.player_.duration(),c=this.player_.bufferedEnd(),d=this.partEls_,e=function(a,b){var c=a/b||0;return 100*(c>=1?1:c)+"%"};this.el_.style.width=e(c,b);for(var f=0;f<a.length;f++){var g=a.start(f),h=a.end(f),i=d[f];i||(i=this.el_.appendChild(l.createEl()),d[f]=i),i.style.left=e(g,c),i.style.width=e(h-g,c)}for(var j=d.length;j>a.length;j--)this.el_.removeChild(d[j-1]);d.length=a.length},b}(j["default"]);j["default"].registerComponent("LoadProgressBar",m),c["default"]=m},{5:5,80:80}],16:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(93),j=e(i),k=a(5),l=e(k),m=a(80),n=d(m),o=a(82),p=d(o),q=a(83),r=e(q),s=a(98),t=e(s),u=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&(e.tooltip=n.createEl("div",{className:"vjs-time-tooltip"}),e.el().appendChild(e.tooltip),e.addClass("vjs-keep-tooltips-inside")),e.update(0,0),c.on("ready",function(){e.on(c.controlBar.progressControl.el(),"mousemove",(0,t["default"])(p.bind(e,e.handleMouseMove),25))}),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},b.prototype.handleMouseMove=function(a){var b=this.player_.duration(),c=this.calculateDistance(a)*b,d=a.pageX-n.findElPosition(this.el().parentNode).left;this.update(c,d)},b.prototype.update=function(a,b){var c=(0,r["default"])(a,this.player_.duration());if(this.el().style.left=b+"px",this.el().setAttribute("data-current-time",c),this.keepTooltipsInside){var d=this.clampPosition_(b),e=b-d+1,f=parseFloat(j["default"].getComputedStyle(this.tooltip).width),g=f/2;this.tooltip.innerHTML=c,this.tooltip.style.right="-"+(g-e)+"px"}},b.prototype.calculateDistance=function(a){return n.getPointerPosition(this.el().parentNode,a).x},b.prototype.clampPosition_=function(a){if(!this.keepTooltipsInside)return a;var b=parseFloat(j["default"].getComputedStyle(this.player().el()).width),c=parseFloat(j["default"].getComputedStyle(this.tooltip).width),d=c/2,e=a;return a<d?e=Math.ceil(d):a>b-d&&(e=Math.floor(b-d)),e},b}(l["default"]);l["default"].registerComponent("MouseTimeDisplay",u),c["default"]=u},{5:5,80:80,82:82,83:83,93:93,98:98}],17:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(82),l=d(k),m=a(83),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateDataAttr(),e.on(c,"timeupdate",e.updateDataAttr),c.ready(l.bind(e,e.updateDataAttr)),d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&e.addClass("vjs-keep-tooltips-inside"),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},b.prototype.updateDataAttr=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.el_.setAttribute("data-current-time",(0,n["default"])(a,this.player_.duration()))},b}(j["default"]);j["default"].registerComponent("PlayProgressBar",o),c["default"]=o},{5:5,82:82,83:83}],18:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(19),a(16);var j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},b}(i["default"]);j.prototype.options_={children:["seekBar"]},i["default"].registerComponent("ProgressControl",j),c["default"]=j},{16:16,19:19,5:5}],19:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(93),j=e(i),k=a(57),l=e(k),m=a(5),n=e(m),o=a(82),p=d(o),q=a(83),r=e(q);a(15),a(17),a(20);var s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateProgress),e.on(c,"ended",e.updateProgress),c.ready(p.bind(e,e.updateProgress)),d.playerOptions&&d.playerOptions.controlBar&&d.playerOptions.controlBar.progressControl&&d.playerOptions.controlBar.progressControl.keepTooltipsInside&&(e.keepTooltipsInside=d.playerOptions.controlBar.progressControl.keepTooltipsInside),e.keepTooltipsInside&&(e.tooltipProgressBar=e.addChild("TooltipProgressBar")),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":"progress bar"})},b.prototype.updateProgress=function(){if(this.updateAriaAttributes(this.el_),this.keepTooltipsInside){this.updateAriaAttributes(this.tooltipProgressBar.el_),this.tooltipProgressBar.el_.style.width=this.bar.el_.style.width;var a=parseFloat(j["default"].getComputedStyle(this.player().el()).width),b=parseFloat(j["default"].getComputedStyle(this.tooltipProgressBar.tooltip).width),c=this.tooltipProgressBar.el().style;c.maxWidth=Math.floor(a-b/2)+"px",c.minWidth=Math.ceil(b/2)+"px",c.right="-"+b/2+"px"}},b.prototype.updateAriaAttributes=function(a){var b=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();a.setAttribute("aria-valuenow",(100*this.getPercent()).toFixed(2)),a.setAttribute("aria-valuetext",(0,r["default"])(b,this.player_.duration()))},b.prototype.getPercent=function(){var a=this.player_.currentTime()/this.player_.duration();return a>=1?1:a},b.prototype.handleMouseDown=function(b){a.prototype.handleMouseDown.call(this,b),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause()},b.prototype.handleMouseMove=function(a){var b=this.calculateDistance(a)*this.player_.duration();b===this.player_.duration()&&(b-=.1),this.player_.currentTime(b)},b.prototype.handleMouseUp=function(b){a.prototype.handleMouseUp.call(this,b),this.player_.scrubbing(!1),this.videoWasPlaying&&this.player_.play()},b.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},b.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},b}(l["default"]);s.prototype.options_={children:["loadProgressBar","mouseTimeDisplay","playProgressBar"],barName:"playProgressBar"},s.prototype.playerEvent="timeupdate",n["default"].registerComponent("SeekBar",s),c["default"]=s},{15:15,17:17,20:20,5:5,57:57,82:82,83:83,93:93}],20:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(82),l=d(k),m=a(83),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.updateDataAttr(),e.on(c,"timeupdate",e.updateDataAttr),c.ready(l.bind(e,e.updateDataAttr)),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-tooltip-progress-bar vjs-slider-bar",innerHTML:'<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"});return this.tooltip=b.querySelector(".vjs-time-tooltip"),b},b.prototype.updateDataAttr=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(),b=(0,n["default"])(a,this.player_.duration());this.el_.setAttribute("data-current-time",b),this.tooltip.innerHTML=b},b}(j["default"]);j["default"].registerComponent("TooltipProgressBar",o),c["default"]=o},{5:5,82:82,83:83}],21:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(22),i=d(h),j=a(5),k=d(j),l=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+a.prototype.buildCSSClass.call(this)},b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,{className:this.buildCSSClass()});return b.innerHTML="&nbsp;",b},b}(i["default"]);k["default"].registerComponent("CustomControlSpacer",l),c["default"]=l},{22:22,5:5}],22:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-spacer "+a.prototype.buildCSSClass.call(this)},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b}(i["default"]);i["default"].registerComponent("Spacer",j),c["default"]=j},{5:5}],23:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(31),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b),d.track={player:c,kind:d.kind,label:d.kind+" settings",selectable:!1,"default":!1,mode:"disabled"},d.selectable=!1;var g=f(this,a.call(this,c,d));return g.addClass("vjs-texttrack-settings"),g.controlText(", opens "+d.kind+" settings dialog"),g}return g(b,a),b.prototype.handleClick=function(){this.player().getChild("textTrackSettings").show(),this.player().getChild("textTrackSettings").el_.focus()},b}(i["default"]);k["default"].registerComponent("CaptionSettingsMenuItem",l),c["default"]=l},{31:31,5:5}],24:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(30),i=d(h),j=a(5),k=d(j),l=a(23),m=d(l),n=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));return h.el_.setAttribute("aria-label","Captions Menu"),h}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-captions-button "+a.prototype.buildCSSClass.call(this)},b.prototype.update=function(){var b=2;a.prototype.update.call(this),this.player().tech_&&this.player().tech_.featuresNativeTextTracks&&(b=1),this.items&&this.items.length>b?this.show():this.hide()},b.prototype.createItems=function(){var b=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||b.push(new m["default"](this.player_,{kind:this.kind_})),a.prototype.createItems.call(this,b)},b}(i["default"]);n.prototype.kind_="captions",n.prototype.controlText_="Captions",k["default"].registerComponent("CaptionsButton",n),c["default"]=n},{23:23,30:30,5:5}],25:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(30),j=e(i),k=a(5),l=e(k),m=a(31),n=e(m),o=a(26),p=e(o),q=a(49),r=e(q),s=a(80),t=d(s),u=a(89),v=e(u),w=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));return h.el_.setAttribute("aria-label","Chapters Menu"),h}return h(b,a),b.prototype.buildCSSClass=function(){return"vjs-chapters-button "+a.prototype.buildCSSClass.call(this)},b.prototype.createItems=function(){var a=[],b=this.player_.textTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];d.kind===this.kind_&&a.push(new n["default"](this.player_,{track:d}))}return a},b.prototype.createMenu=function(){for(var a=this,b=this.player_.textTracks()||[],c=void 0,d=this.items||[],e=b.length-1;e>=0;e--){var f=b[e];if(f.kind===this.kind_){c=f;break}}var g=this.menu;if(void 0===g){g=new r["default"](this.player_);var h=t.createEl("li",{className:"vjs-menu-title",innerHTML:(0,v["default"])(this.kind_),tabIndex:-1});g.children_.unshift(h),t.insertElFirst(h,g.contentEl())}else d.forEach(function(a){return g.removeChild(a)}),d=[];if(c&&(null===c.cues||void 0===c.cues)){c.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(c);i&&i.addEventListener("load",function(b){return a.update()})}if(c&&c.cues&&c.cues.length>0)for(var j=c.cues,k=0,l=j.length;k<l;k++){var m=j[k],n=new p["default"](this.player_,{cue:m,track:c});d.push(n),g.addChild(n)}return d.length>0&&this.show(),this.items=d,g},b}(j["default"]);w.prototype.kind_="chapters",w.prototype.controlText_="Chapters",l["default"].registerComponent("ChaptersButton",w),c["default"]=w},{26:26,30:30,31:31,49:49,5:5,80:80,89:89}],26:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(48),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.track,h=d.cue,i=c.currentTime();d.label=h.text,d.selected=h.startTime<=i&&i<h.endTime;var j=g(this,a.call(this,c,d));return j.track=e,j.cue=h,e.addEventListener("cuechange",n.bind(j,j.update)),j}return h(b,a),b.prototype.handleClick=function(){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},b.prototype.update=function(){var a=this.cue,b=this.player_.currentTime();this.selected(a.startTime<=b&&b<a.endTime)},b}(j["default"]);l["default"].registerComponent("ChaptersTrackMenuItem",o),c["default"]=o},{48:48,5:5,82:82}],27:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(30),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m),o=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));h.el_.setAttribute("aria-label","Descriptions Menu");var i=c.textTracks();return i&&!function(){var a=n.bind(h,h.handleTracksChange);i.addEventListener("change",a),h.on("dispose",function(){i.removeEventListener("change",a)})}(),h}return h(b,a),b.prototype.handleTracksChange=function(a){for(var b=this.player().textTracks(),c=!1,d=0,e=b.length;d<e;d++){var f=b[d];if(f.kind!==this.kind_&&"showing"===f.mode){c=!0;break}}c?this.disable():this.enable()},b.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},b}(j["default"]);o.prototype.kind_="descriptions",o.prototype.controlText_="Descriptions",l["default"].registerComponent("DescriptionsButton",o),c["default"]=o},{30:30,5:5,82:82}],28:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(31),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d){e(this,b),d.track={player:c,kind:d.kind,label:d.kind+" off","default":!1,mode:"disabled"},d.selectable=!0;var g=f(this,a.call(this,c,d));return g.selected(!0),g}return g(b,a),b.prototype.handleTracksChange=function(a){for(var b=this.player().textTracks(),c=!0,d=0,e=b.length;d<e;d++){var f=b[d];if(f.kind===this.track.kind&&"showing"===f.mode){c=!1;break}}this.selected(c)},b}(i["default"]);k["default"].registerComponent("OffTextTrackMenuItem",l),c["default"]=l},{31:31,5:5}],29:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(30),i=d(h),j=a(5),k=d(j),l=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));return h.el_.setAttribute("aria-label","Subtitles Menu"),h}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+a.prototype.buildCSSClass.call(this)},b}(i["default"]);l.prototype.kind_="subtitles",l.prototype.controlText_="Subtitles",k["default"].registerComponent("SubtitlesButton",l),c["default"]=l},{30:30,5:5}],30:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(36),i=d(h),j=a(5),k=d(j),l=a(31),m=d(l),n=a(28),o=d(n),p=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,b),d.tracks=c.textTracks(),f(this,a.call(this,c,d))}return g(b,a),b.prototype.createItems=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];a.push(new o["default"](this.player_,{kind:this.kind_}));var b=this.player_.textTracks();if(!b)return a;for(var c=0;c<b.length;c++){var d=b[c];d.kind===this.kind_&&a.push(new m["default"](this.player_,{track:d,selectable:!0}))}return a},b}(i["default"]);k["default"].registerComponent("TextTrackButton",p),c["default"]=p},{28:28,31:31,36:36,5:5}],31:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},j=a(48),k=e(j),l=a(5),m=e(l),n=a(82),o=d(n),p=a(93),q=e(p),r=a(92),s=e(r),t=function(a){function b(c,d){f(this,b);var e=d.track,h=c.textTracks();d.label=e.label||e.language||"Unknown",d.selected=e["default"]||"showing"===e.mode;var j=g(this,a.call(this,c,d));return j.track=e,h&&!function(){var a=o.bind(j,j.handleTracksChange);h.addEventListener("change",a),j.on("dispose",function(){h.removeEventListener("change",a)})}(),h&&void 0===h.onchange&&!function(){var a=void 0;j.on(["tap","click"],function(){if("object"!==i(q["default"].Event))try{a=new q["default"].Event("change")}catch(b){}a||(a=s["default"].createEvent("Event"),a.initEvent("change",!0,!0)),h.dispatchEvent(a)})}(),j}return h(b,a),b.prototype.handleClick=function(b){var c=this.track.kind,d=this.player_.textTracks();if(a.prototype.handleClick.call(this,b),d)for(var e=0;e<d.length;e++){var f=d[e];f.kind===c&&(f===this.track?f.mode="showing":f.mode="disabled")}},b.prototype.handleTracksChange=function(a){this.selected("showing"===this.track.mode)},b}(k["default"]);m["default"].registerComponent("TextTrackMenuItem",t),c["default"]=t},{48:48,5:5,82:82,92:92,93:93}],32:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(83),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-current-time vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00'},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){var a=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(),b=this.localize("Current Time"),c=(0,n["default"])(a,this.player_.duration());c!==this.formattedTime_&&(this.formattedTime_=c,this.contentEl_.innerHTML='<span class="vjs-control-text">'+b+"</span> "+c)},b}(j["default"]);j["default"].registerComponent("CurrentTimeDisplay",o),c["default"]=o},{5:5,80:80,83:83}],33:[function(a,b,c){"use strict";
function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(83),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"durationchange",e.updateContent),e.on(c,"timeupdate",e.updateContent),e.on(c,"loadedmetadata",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-duration vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Duration Time")+"</span> 0:00"},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){var a=this.player_.duration();if(a&&this.duration_!==a){this.duration_=a;var b=this.localize("Duration Time"),c=(0,n["default"])(a);this.contentEl_.innerHTML='<span class="vjs-control-text">'+b+"</span> "+c}},b}(j["default"]);j["default"].registerComponent("DurationDisplay",o),c["default"]=o},{5:5,80:80,83:83}],34:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(83),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"timeupdate",e.updateContent),e.on(c,"durationchange",e.updateContent),e}return h(b,a),b.prototype.createEl=function(){var b=a.prototype.createEl.call(this,"div",{className:"vjs-remaining-time vjs-time-control vjs-control"});return this.contentEl_=l.createEl("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Remaining Time")+"</span> -0:00"},{"aria-live":"off"}),b.appendChild(this.contentEl_),b},b.prototype.updateContent=function(){if(this.player_.duration()){var a=this.localize("Remaining Time"),b=(0,n["default"])(this.player_.remainingTime());b!==this.formattedTime_&&(this.formattedTime_=b,this.contentEl_.innerHTML='<span class="vjs-control-text">'+a+"</span> -"+b)}},b}(j["default"]);j["default"].registerComponent("RemainingTimeDisplay",o),c["default"]=o},{5:5,80:80,83:83}],35:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},b}(i["default"]);i["default"].registerComponent("TimeDivider",j),c["default"]=j},{5:5}],36:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(47),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m),o=function(a){function b(c,d){f(this,b);var e=d.tracks,h=g(this,a.call(this,c,d));if(h.items.length<=1&&h.hide(),!e)return g(h);var i=n.bind(h,h.update);return e.addEventListener("removetrack",i),e.addEventListener("addtrack",i),h.player_.on("dispose",function(){e.removeEventListener("removetrack",i),e.removeEventListener("addtrack",i)}),h}return h(b,a),b}(j["default"]);l["default"].registerComponent("TrackButton",o),c["default"]=o},{47:47,5:5,82:82}],37:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(57),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m);a(39);var o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.on(c,"volumechange",e.updateARIAAttributes),c.ready(n.bind(e,e.updateARIAAttributes)),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":"volume level"})},b.prototype.handleMouseMove=function(a){this.checkMuted(),this.player_.volume(this.calculateDistance(a))},b.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},b.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},b.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},b.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},b.prototype.updateARIAAttributes=function(){var a=(100*this.player_.volume()).toFixed(2);this.el_.setAttribute("aria-valuenow",a),this.el_.setAttribute("aria-valuetext",a+"%")},b}(j["default"]);o.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},o.prototype.playerEvent="volumechange",l["default"].registerComponent("VolumeBar",o),c["default"]=o},{39:39,5:5,57:57,82:82}],38:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h);a(37);var j=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return c.tech_&&c.tech_.featuresVolumeControl===!1&&g.addClass("vjs-hidden"),g.on(c,"loadstart",function(){c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}),g}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control"})},b}(i["default"]);j.prototype.options_={children:["volumeBar"]},i["default"].registerComponent("VolumeControl",j),c["default"]=j},{37:37,5:5}],39:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},b}(i["default"]);i["default"].registerComponent("VolumeLevel",j),c["default"]=j},{5:5}],40:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(82),j=e(i),k=a(5),l=d(k),m=a(54),n=d(m),o=a(53),p=d(o),q=a(11),r=d(q),s=a(37),t=d(s),u=function(a){function b(c){function d(){c.tech_&&c.tech_.featuresVolumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden")}var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,b),void 0===e.inline&&(e.inline=!0),void 0===e.vertical&&(e.inline?e.vertical=!1:e.vertical=!0),e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=!!e.vertical;var h=g(this,a.call(this,c,e));return h.on(c,"volumechange",h.volumeUpdate),h.on(c,"loadstart",h.volumeUpdate),d.call(h),h.on(c,"loadstart",d),h.on(h.volumeBar,["slideractive","focus"],function(){this.addClass("vjs-slider-active")}),h.on(h.volumeBar,["sliderinactive","blur"],function(){this.removeClass("vjs-slider-active")}),h.on(h.volumeBar,["focus"],function(){this.addClass("vjs-lock-showing")}),h.on(h.volumeBar,["blur"],function(){this.removeClass("vjs-lock-showing")}),h}return h(b,a),b.prototype.buildCSSClass=function(){var b="";return b=this.options_.vertical?"vjs-volume-menu-button-vertical":"vjs-volume-menu-button-horizontal","vjs-volume-menu-button "+a.prototype.buildCSSClass.call(this)+" "+b},b.prototype.createPopup=function(){var a=new n["default"](this.player_,{contentElType:"div"}),b=new t["default"](this.player_,this.options_.volumeBar);return a.addChild(b),this.menuContent=a,this.volumeBar=b,this.attachVolumeBarEvents(),a},b.prototype.handleClick=function(){r["default"].prototype.handleClick.call(this),a.prototype.handleClick.call(this)},b.prototype.attachVolumeBarEvents=function(){this.menuContent.on(["mousedown","touchdown"],j.bind(this,this.handleMouseDown))},b.prototype.handleMouseDown=function(a){this.on(["mousemove","touchmove"],j.bind(this.volumeBar,this.volumeBar.handleMouseMove)),this.on(this.el_.ownerDocument,["mouseup","touchend"],this.handleMouseUp)},b.prototype.handleMouseUp=function(a){this.off(["mousemove","touchmove"],j.bind(this.volumeBar,this.volumeBar.handleMouseMove))},b}(p["default"]);u.prototype.volumeUpdate=r["default"].prototype.update,u.prototype.controlText_="Mute",l["default"].registerComponent("VolumeMenuButton",u),c["default"]=u},{11:11,37:37,5:5,53:53,54:54,82:82}],41:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=a(50),k=d(j),l=a(86),m=d(l),n=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.on(c,"error",g.open),g}return g(b,a),b.prototype.buildCSSClass=function(){return"vjs-error-display "+a.prototype.buildCSSClass.call(this)},b.prototype.content=function(){var a=this.player().error();return a?this.localize(a.message):""},b}(k["default"]);n.prototype.options_=(0,m["default"])(k["default"].prototype.options_,{fillAlways:!0,temporary:!1,uncloseable:!0}),i["default"].registerComponent("ErrorDisplay",n),c["default"]=n},{5:5,50:50,86:86}],42:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}c.__esModule=!0;var e=a(81),f=d(e),g=function(){};g.prototype.allowedEvents_={},g.prototype.on=function(a,b){var c=this.addEventListener;this.addEventListener=function(){},f.on(this,a,b),this.addEventListener=c},g.prototype.addEventListener=g.prototype.on,g.prototype.off=function(a,b){f.off(this,a,b)},g.prototype.removeEventListener=g.prototype.off,g.prototype.one=function(a,b){var c=this.addEventListener;this.addEventListener=function(){},f.one(this,a,b),this.addEventListener=c},g.prototype.trigger=function(a){var b=a.type||a;"string"==typeof a&&(a={type:b}),a=f.fixEvent(a),this.allowedEvents_[b]&&this["on"+b]&&this["on"+b](a),f.trigger(this,a)},g.prototype.dispatchEvent=g.prototype.trigger,c["default"]=g},{81:81}],43:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(85),g=d(f),h=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof b?"undefined":e(b)));a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(a.super_=b)},i=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=function(){a.apply(this,arguments)},d={};"object"===("undefined"==typeof b?"undefined":e(b))?("function"==typeof b.init&&(g["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."),b.constructor=b.init),b.constructor!==Object.prototype.constructor&&(c=b.constructor),d=b):"function"==typeof b&&(c=b),h(c,a);for(var f in d)d.hasOwnProperty(f)&&(c.prototype[f]=d[f]);return c};c["default"]=i},{85:85}],44:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;for(var e=a(92),f=d(e),g={},h=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=h[0],j=void 0,k=0;k<h.length;k++)if(h[k][1]in f["default"]){j=h[k];break}if(j)for(var l=0;l<j.length;l++)g[i[l]]=j[l];c["default"]=g},{92:92}],45:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=function(a){function b(){return e(this,b),f(this,a.apply(this,arguments))}return g(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})},b}(i["default"]);i["default"].registerComponent("LoadingSpinner",j),c["default"]=j},{5:5}],46:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){return a instanceof e?a:("number"==typeof a?this.code=a:"string"==typeof a?this.message=a:"object"===("undefined"==typeof a?"undefined":f(a))&&("number"==typeof a.code&&(this.code=a.code),(0,h["default"])(this,a)),void(this.message||(this.message=e.defaultMessages[this.code]||"")))}c.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=a(136),h=d(g);e.prototype.code=0,e.prototype.message="",e.prototype.status=null,e.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],e.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var i=0;i<e.errorTypes.length;i++)e[e.errorTypes[i]]=i,e.prototype[e.errorTypes[i]]=i;c["default"]=e},{136:136}],47:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(3),j=e(i),k=a(5),l=e(k),m=a(49),n=e(m),o=a(80),p=d(o),q=a(82),r=d(q),s=a(89),t=e(s),u=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,b);var e=g(this,a.call(this,c,d));return e.update(),e.enabled_=!0,e.el_.setAttribute("aria-haspopup","true"),e.el_.setAttribute("role","menuitem"),e.on("keydown",e.handleSubmenuKeyPress),e}return h(b,a),b.prototype.update=function(){var a=this.createMenu();this.menu&&this.removeChild(this.menu),this.menu=a,this.addChild(a),this.buttonPressed_=!1,this.el_.setAttribute("aria-expanded","false"),this.items&&0===this.items.length?this.hide():this.items&&this.items.length>1&&this.show()},b.prototype.createMenu=function(){var a=new n["default"](this.player_);if(this.options_.title){var b=p.createEl("li",{className:"vjs-menu-title",innerHTML:(0,t["default"])(this.options_.title),tabIndex:-1});a.children_.unshift(b),p.insertElFirst(b,a.contentEl())}if(this.items=this.createItems(),this.items)for(var c=0;c<this.items.length;c++)a.addItem(this.items[c]);return a},b.prototype.createItems=function(){},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b.prototype.buildCSSClass=function(){var b="vjs-menu-button";return b+=this.options_.inline===!0?"-inline":"-popup","vjs-menu-button "+b+" "+a.prototype.buildCSSClass.call(this)},b.prototype.handleClick=function(){this.one(this.menu.contentEl(),"mouseleave",r.bind(this,function(a){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},b.prototype.handleKeyPress=function(b){27===b.which||9===b.which?(this.buttonPressed_&&this.unpressButton(),9!==b.which&&b.preventDefault()):38===b.which||40===b.which?this.buttonPressed_||(this.pressButton(),b.preventDefault()):a.prototype.handleKeyPress.call(this,b)},b.prototype.handleSubmenuKeyPress=function(a){27!==a.which&&9!==a.which||(this.buttonPressed_&&this.unpressButton(),9!==a.which&&a.preventDefault())},b.prototype.pressButton=function(){this.enabled_&&(this.buttonPressed_=!0,this.menu.lockShowing(),this.el_.setAttribute("aria-expanded","true"),this.menu.focus())},b.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.el_.setAttribute("aria-expanded","false"),this.el_.focus())},b.prototype.disable=function(){return this.buttonPressed_=!1,this.menu.unlockShowing(),this.el_.setAttribute("aria-expanded","false"),this.enabled_=!1,a.prototype.disable.call(this)},b.prototype.enable=function(){return this.enabled_=!0,a.prototype.enable.call(this)},b}(j["default"]);l["default"].registerComponent("MenuButton",u),c["default"]=u},{3:3,49:49,5:5,80:80,82:82,89:89}],48:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=a(136),m=d(l),n=function(a){function b(c,d){e(this,b);var g=f(this,a.call(this,c,d));return g.selectable=d.selectable,g.selected(d.selected),g.selectable?g.el_.setAttribute("role","menuitemcheckbox"):g.el_.setAttribute("role","menuitem"),g}return g(b,a),b.prototype.createEl=function(b,c,d){return a.prototype.createEl.call(this,"li",(0,m["default"])({className:"vjs-menu-item",innerHTML:this.localize(this.options_.label),tabIndex:-1},c),d)},b.prototype.handleClick=function(){this.selected(!0)},b.prototype.selected=function(a){this.selectable&&(a?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected")):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(" ")))},b}(i["default"]);k["default"].registerComponent("MenuItem",n),c["default"]=n},{136:136,3:3,5:5}],49:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(82),n=d(m),o=a(81),p=d(o),q=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.focusedChild_=-1,e.on("keydown",e.handleKeyPress),e}return h(b,a),b.prototype.addItem=function(a){this.addChild(a),a.on("click",n.bind(this,function(){this.unlockShowing()}))},b.prototype.createEl=function(){var b=this.options_.contentElType||"ul";this.contentEl_=l.createEl(b,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var c=a.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return c.setAttribute("role","presentation"),c.appendChild(this.contentEl_),p.on(c,"click",function(a){a.preventDefault(),a.stopImmediatePropagation()}),c},b.prototype.handleKeyPress=function(a){37===a.which||40===a.which?(a.preventDefault(),this.stepForward()):38!==a.which&&39!==a.which||(a.preventDefault(),this.stepBack())},b.prototype.stepForward=function(){var a=0;void 0!==this.focusedChild_&&(a=this.focusedChild_+1),this.focus(a)},b.prototype.stepBack=function(){var a=0;void 0!==this.focusedChild_&&(a=this.focusedChild_-1),this.focus(a)},b.prototype.focus=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=this.children().slice(),c=b.length&&b[0].className&&/vjs-menu-title/.test(b[0].className);c&&b.shift(),b.length>0&&(a<0?a=0:a>=b.length&&(a=b.length-1),this.focusedChild_=a,b[a].el_.focus())},b}(j["default"]);j["default"].registerComponent("Menu",q),c["default"]=q},{5:5,80:80,81:81,82:82}],50:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(80),j=e(i),k=a(82),l=e(k),m=a(5),n=d(m),o="vjs-modal-dialog",p=27,q=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.opened_=e.hasBeenOpened_=e.hasBeenFilled_=!1,e.closeable(!e.options_.uncloseable),e.content(e.options_.content),e.contentEl_=j.createEl("div",{className:o+"-content"},{role:"document"}),e.descEl_=j.createEl("p",{className:o+"-description vjs-offscreen",id:e.el().getAttribute("aria-describedby")}),j.textContent(e.descEl_,e.description()),e.el_.appendChild(e.descEl_),e.el_.appendChild(e.contentEl_),e}return h(b,a),b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},b.prototype.buildCSSClass=function(){return o+" vjs-hidden "+a.prototype.buildCSSClass.call(this)},b.prototype.handleKeyPress=function(a){a.which===p&&this.closeable()&&this.close()},b.prototype.label=function(){return this.options_.label||this.localize("Modal Window")},b.prototype.description=function(){var a=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(a+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),a},b.prototype.open=function(){if(!this.opened_){var a=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!a.paused(),this.wasPlaying_&&a.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",l.bind(this,this.handleKeyPress)),a.controls(!1),this.show(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}return this},b.prototype.opened=function(a){return"boolean"==typeof a&&this[a?"open":"close"](),this.opened_},b.prototype.close=function(){if(this.opened_){var a=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&a.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",l.bind(this,this.handleKeyPress)),a.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.options_.temporary&&this.dispose()}return this},b.prototype.closeable=function c(a){if("boolean"==typeof a){var c=this.closeable_=!!a,b=this.getChild("closeButton");if(c&&!b){var d=this.contentEl_;this.contentEl_=this.el_,b=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=d,this.on(b,"close",this.close)}!c&&b&&(this.off(b,"close",this.close),this.removeChild(b),b.dispose())}return this.closeable_},b.prototype.fill=function(){return this.fillWith(this.content())},b.prototype.fillWith=function(a){var b=this.contentEl(),c=b.parentNode,d=b.nextSibling;return this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,c.removeChild(b),this.empty(),j.insertContent(b,a),this.trigger("modalfill"),d?c.insertBefore(b,d):c.appendChild(b),this},b.prototype.empty=function(){return this.trigger("beforemodalempty"),j.emptyEl(this.contentEl()),this.trigger("modalempty"),this},b.prototype.content=function(a){return"undefined"!=typeof a&&(this.content_=a),this.content_},b}(n["default"]);q.prototype.options_={temporary:!0},n["default"].registerComponent("ModalDialog",q),c["default"]=q},{5:5,80:80,82:82}],51:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}
function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(92),l=e(k),m=a(93),n=e(m),o=a(81),p=d(o),q=a(80),r=d(q),s=a(82),t=d(s),u=a(84),v=d(u),w=a(78),x=d(w),y=a(85),z=e(y),A=a(89),B=e(A),C=a(88),D=a(79),E=a(87),F=d(E),G=a(44),H=e(G),I=a(46),J=e(I),K=a(145),L=e(K),M=a(136),N=e(M),O=a(86),P=e(O),Q=a(69),R=e(Q),S=a(50),T=e(S),U=a(62),V=e(U),W=a(63),X=e(W),Y=a(76),Z=e(Y);a(61),a(59),a(55),a(68),a(45),a(1),a(4),a(8),a(41),a(71),a(60);var $=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","ratechange","volumechange","texttrackchange"],_=function(a){function b(c,d,e){if(f(this,b),c.id=c.id||"vjs_video_"+v.newGUID(),d=(0,N["default"])(b.getTagSettings(c),d),d.initChildren=!1,d.createEl=!1,d.reportTouchActivity=!1,!d.language)if("function"==typeof c.closest){var h=c.closest("[lang]");h&&(d.language=h.getAttribute("lang"))}else for(var i=c;i&&1===i.nodeType;){if(r.getElAttributes(i).hasOwnProperty("lang")){d.language=i.getAttribute("lang");break}i=i.parentNode}var j=g(this,a.call(this,null,d,e));if(!j.options_||!j.options_.techOrder||!j.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");j.tag=c,j.tagAttributes=c&&r.getElAttributes(c),j.language(j.options_.language),d.languages?!function(){var a={};Object.getOwnPropertyNames(d.languages).forEach(function(b){a[b.toLowerCase()]=d.languages[b]}),j.languages_=a}():j.languages_=b.prototype.options_.languages,j.cache_={},j.poster_=d.poster||"",j.controls_=!!d.controls,c.controls=!1,j.scrubbing_=!1,j.el_=j.createEl();var k=(0,P["default"])(j.options_);return d.plugins&&!function(){var a=d.plugins;Object.getOwnPropertyNames(a).forEach(function(b){"function"==typeof this[b]?this[b](a[b]):z["default"].error("Unable to find plugin:",b)},j)}(),j.options_.playerOptions=k,j.initChildren(),j.isAudio("audio"===c.nodeName.toLowerCase()),j.controls()?j.addClass("vjs-controls-enabled"):j.addClass("vjs-controls-disabled"),j.el_.setAttribute("role","region"),j.isAudio()?j.el_.setAttribute("aria-label","audio player"):j.el_.setAttribute("aria-label","video player"),j.isAudio()&&j.addClass("vjs-audio"),j.flexNotSupported_()&&j.addClass("vjs-no-flex"),x.IS_IOS||j.addClass("vjs-workinghover"),b.players[j.id_]=j,j.userActive(!0),j.reportUserActivity(),j.listenForUserActivity_(),j.on("fullscreenchange",j.handleFullscreenChange_),j.on("stageclick",j.handleStageClick_),j}return h(b,a),b.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&this.styleEl_.parentNode.removeChild(this.styleEl_),b.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&this.tech_.dispose(),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var b=this.el_=a.prototype.createEl.call(this,"div"),c=this.tag;c.removeAttribute("width"),c.removeAttribute("height");var d=r.getElAttributes(c);if(Object.getOwnPropertyNames(d).forEach(function(a){"class"===a?b.className=d[a]:b.setAttribute(a,d[a])}),c.playerId=c.id,c.id+="_html5_api",c.className="vjs-tech",c.player=b.player=this,this.addClass("vjs-paused"),n["default"].VIDEOJS_NO_DYNAMIC_STYLE!==!0){this.styleEl_=F.createStyleElement("vjs-styles-dimensions");var e=r.$(".vjs-styles-defaults"),f=r.$("head");f.insertBefore(this.styleEl_,e?e.nextSibling:f.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var g=c.getElementsByTagName("a"),h=0;h<g.length;h++){var i=g.item(h);r.addElClass(i,"vjs-hidden"),i.setAttribute("hidden","hidden")}return c.initNetworkState_=c.networkState,c.parentNode&&c.parentNode.insertBefore(b,c),r.insertElFirst(c,b),this.children_.unshift(c),this.el_=b,b},b.prototype.width=function(a){return this.dimension("width",a)},b.prototype.height=function(a){return this.dimension("height",a)},b.prototype.dimension=function(a,b){var c=a+"_";if(void 0===b)return this[c]||0;if(""===b)this[c]=void 0;else{var d=parseFloat(b);if(isNaN(d))return z["default"].error('Improper value "'+b+'" supplied for for '+a),this;this[c]=d}return this.updateStyleEl_(),this},b.prototype.fluid=function(a){return void 0===a?!!this.fluid_:(this.fluid_=!!a,void(a?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid")))},b.prototype.aspectRatio=function(a){if(void 0===a)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(a))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=a,this.fluid(!0),this.updateStyleEl_()},b.prototype.updateStyleEl_=function(){if(n["default"].VIDEOJS_NO_DYNAMIC_STYLE===!0){var a="number"==typeof this.width_?this.width_:this.options_.width,b="number"==typeof this.height_?this.height_:this.options_.height,c=this.tech_&&this.tech_.el();return void(c&&(a>=0&&(c.width=a),b>=0&&(c.height=b)))}var d=void 0,e=void 0,f=void 0,g=void 0;f=void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9";var h=f.split(":"),i=h[1]/h[0];d=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/i:this.videoWidth()||300,e=void 0!==this.height_?this.height_:d*i,g=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(g),F.setTextContent(this.styleEl_,"\n      ."+g+" {\n        width: "+d+"px;\n        height: "+e+"px;\n      }\n\n      ."+g+".vjs-fluid {\n        padding-top: "+100*i+"%;\n      }\n    ")},b.prototype.loadTech_=function(a,b){var c=this;this.tech_&&this.unloadTech_(),"Html5"!==a&&this.tag&&(V["default"].getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=a,this.isReady_=!1;var d=(0,N["default"])({source:b,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+a+"_api",videoTracks:this.videoTracks_,textTracks:this.textTracks_,audioTracks:this.audioTracks_,autoplay:this.options_.autoplay,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),"vtt.js":this.options_["vtt.js"]},this.options_[a.toLowerCase()]);this.tag&&(d.tag=this.tag),b&&(this.currentType_=b.type,b.src===this.cache_.src&&this.cache_.currentTime>0&&(d.startTime=this.cache_.currentTime),this.cache_.src=b.src);var e=V["default"].getTech(a);e||(e=j["default"].getComponent(a)),this.tech_=new e(d),this.tech_.ready(t.bind(this,this.handleTechReady_),!0),R["default"].jsonToTextTracks(this.textTracksJson_||[],this.tech_),$.forEach(function(a){c.on(c.tech_,a,c["handleTech"+(0,B["default"])(a)+"_"])}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"canplay",this.handleTechCanPlay_),this.on(this.tech_,"canplaythrough",this.handleTechCanPlayThrough_),this.on(this.tech_,"playing",this.handleTechPlaying_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"seeked",this.handleTechSeeked_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===a&&this.tag||r.insertElFirst(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},b.prototype.unloadTech_=function(){this.videoTracks_=this.videoTracks(),this.textTracks_=this.textTracks(),this.audioTracks_=this.audioTracks(),this.textTracksJson_=R["default"].textTracksToJson(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1},b.prototype.tech=function(a){if(a&&a.IWillNotUseThisInPlugins)return this.tech_;var b="\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";throw n["default"].alert(b),new Error(b)},b.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},b.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},b.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused()){try{delete this.tag.poster}catch(a){(0,z["default"])("deleting tag.poster throws in some browsers",a)}this.play()}},b.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},b.prototype.hasStarted=function(a){return void 0!==a?(this.hasStarted_!==a&&(this.hasStarted_=a,a?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started")),this):!!this.hasStarted_},b.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},b.prototype.handleTechWaiting_=function(){var a=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return a.removeClass("vjs-waiting")})},b.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},b.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},b.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},b.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},b.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},b.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&this.currentTime(this.options_.starttime),this.addClass("vjs-has-started"),this.trigger("firstplay")},b.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},b.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},b.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},b.prototype.handleTechClick_=function(a){0===a.button&&this.controls()&&(this.paused()?this.play():this.pause())},b.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},b.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},b.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},b.prototype.handleTechTouchEnd_=function(a){a.preventDefault()},b.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},b.prototype.handleStageClick_=function(){this.reportUserActivity()},b.prototype.handleTechFullscreenChange_=function(a,b){b&&this.isFullscreen(b.isFullscreen),this.trigger("fullscreenchange")},b.prototype.handleTechError_=function(){var a=this.tech_.error();this.error(a)},b.prototype.handleTechTextData_=function(){var a=null;arguments.length>1&&(a=arguments[1]),this.trigger("textdata",a)},b.prototype.getCache=function(){return this.cache_},b.prototype.techCall_=function(a,b){if(this.tech_&&!this.tech_.isReady_)this.tech_.ready(function(){this[a](b)},!0);else try{this.tech_&&this.tech_[a](b)}catch(c){throw(0,z["default"])(c),c}},b.prototype.techGet_=function(a){if(this.tech_&&this.tech_.isReady_)try{return this.tech_[a]()}catch(b){throw void 0===this.tech_[a]?(0,z["default"])("Video.js: "+a+" method not defined for "+this.techName_+" playback technology.",b):"TypeError"===b.name?((0,z["default"])("Video.js: "+a+" unavailable on "+this.techName_+" playback technology element.",b),this.tech_.isReady_=!1):(0,z["default"])(b),b}},b.prototype.play=function(){return this.src()||this.currentSrc()?this.techCall_("play"):this.tech_.one("loadstart",function(){this.play()}),this},b.prototype.pause=function(){return this.techCall_("pause"),this},b.prototype.paused=function(){return this.techGet_("paused")!==!1},b.prototype.scrubbing=function(a){return void 0!==a?(this.scrubbing_=!!a,a?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing"),this):this.scrubbing_},b.prototype.currentTime=function(a){return void 0!==a?(this.techCall_("setCurrentTime",a),this):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},b.prototype.duration=function(a){return void 0===a?this.cache_.duration||0:(a=parseFloat(a)||0,a<0&&(a=1/0),a!==this.cache_.duration&&(this.cache_.duration=a,a===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange")),this)},b.prototype.remainingTime=function(){return this.duration()-this.currentTime()},b.prototype.buffered=function c(){var c=this.techGet_("buffered");return c&&c.length||(c=(0,C.createTimeRange)(0,0)),c},b.prototype.bufferedPercent=function(){return(0,D.bufferedPercent)(this.buffered(),this.duration())},b.prototype.bufferedEnd=function(){var a=this.buffered(),b=this.duration(),c=a.end(a.length-1);return c>b&&(c=b),c},b.prototype.volume=function(a){var b=void 0;return void 0!==a?(b=Math.max(0,Math.min(1,parseFloat(a))),this.cache_.volume=b,this.techCall_("setVolume",b),this):(b=parseFloat(this.techGet_("volume")),isNaN(b)?1:b)},b.prototype.muted=function(a){return void 0!==a?(this.techCall_("setMuted",a),this):this.techGet_("muted")||!1},b.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},b.prototype.isFullscreen=function(a){return void 0!==a?(this.isFullscreen_=!!a,this):!!this.isFullscreen_},b.prototype.requestFullscreen=function(){var a=H["default"];return this.isFullscreen(!0),a.requestFullscreen?(p.on(l["default"],a.fullscreenchange,t.bind(this,function b(c){this.isFullscreen(l["default"][a.fullscreenElement]),this.isFullscreen()===!1&&p.off(l["default"],a.fullscreenchange,b),this.trigger("fullscreenchange")})),this.el_[a.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange")),this},b.prototype.exitFullscreen=function(){var a=H["default"];return this.isFullscreen(!1),a.requestFullscreen?l["default"][a.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange")),this},b.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=l["default"].documentElement.style.overflow,p.on(l["default"],"keydown",t.bind(this,this.fullWindowOnEscKey)),l["default"].documentElement.style.overflow="hidden",r.addElClass(l["default"].body,"vjs-full-window"),this.trigger("enterFullWindow")},b.prototype.fullWindowOnEscKey=function(a){27===a.keyCode&&(this.isFullscreen()===!0?this.exitFullscreen():this.exitFullWindow())},b.prototype.exitFullWindow=function(){this.isFullWindow=!1,p.off(l["default"],"keydown",this.fullWindowOnEscKey),l["default"].documentElement.style.overflow=this.docOrigOverflow,r.removeElClass(l["default"].body,"vjs-full-window"),this.trigger("exitFullWindow")},b.prototype.canPlayType=function(a){for(var b=void 0,c=0,d=this.options_.techOrder;c<d.length;c++){var e=(0,B["default"])(d[c]),f=V["default"].getTech(e);if(f||(f=j["default"].getComponent(e)),f){if(f.isSupported()&&(b=f.canPlayType(a)))return b}else z["default"].error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return""},b.prototype.selectSource=function(a){var b=this,c=this.options_.techOrder.map(B["default"]).map(function(a){return[a,V["default"].getTech(a)||j["default"].getComponent(a)]}).filter(function(a){var b=a[0],c=a[1];return c?c.isSupported():(z["default"].error('The "'+b+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),d=function(a,b,c){var d=void 0;return a.some(function(a){return b.some(function(b){if(d=c(a,b))return!0})}),d},e=void 0,f=function(a){return function(b,c){return a(c,b)}},g=function(a,c){var d=a[0],e=a[1];if(e.canPlaySource(c,b.options_[d.toLowerCase()]))return{source:c,tech:d}};return e=this.options_.sourceOrder?d(a,c,f(g)):d(c,a,g),e||!1},b.prototype.src=function(a){if(void 0===a)return this.techGet_("src");var b=V["default"].getTech(this.techName_);return b||(b=j["default"].getComponent(this.techName_)),Array.isArray(a)?this.sourceList_(a):"string"==typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!b.canPlaySource(a,this.options_[this.techName_.toLowerCase()])?this.sourceList_([a]):(this.cache_.src=a.src,this.currentType_=a.type||"",this.ready(function(){b.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",a):this.techCall_("src",a.src),"auto"===this.options_.preload&&this.load(),this.options_.autoplay&&this.play()},!0))),this},b.prototype.sourceList_=function(a){var b=this.selectSource(a);b?b.tech===this.techName_?this.src(b.source):this.loadTech_(b.tech,b.source):(this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),this.triggerReady())},b.prototype.load=function(){return this.techCall_("load"),this},b.prototype.reset=function(){return this.loadTech_((0,B["default"])(this.options_.techOrder[0]),null),this.techCall_("reset"),this},b.prototype.currentSrc=function(){return this.techGet_("currentSrc")||this.cache_.src||""},b.prototype.currentType=function(){return this.currentType_||""},b.prototype.preload=function(a){return void 0!==a?(this.techCall_("setPreload",a),this.options_.preload=a,this):this.techGet_("preload")},b.prototype.autoplay=function(a){return void 0!==a?(this.techCall_("setAutoplay",a),this.options_.autoplay=a,this):this.techGet_("autoplay",a)},b.prototype.loop=function(a){return void 0!==a?(this.techCall_("setLoop",a),this.options_.loop=a,this):this.techGet_("loop")},b.prototype.poster=function(a){return void 0===a?this.poster_:(a||(a=""),this.poster_=a,this.techCall_("setPoster",a),this.trigger("posterchange"),this)},b.prototype.handleTechPosterChange_=function(){!this.poster_&&this.tech_&&this.tech_.poster&&(this.poster_=this.tech_.poster()||"",this.trigger("posterchange"))},b.prototype.controls=function(a){return void 0!==a?(a=!!a,this.controls_!==a&&(this.controls_=a,this.usingNativeControls()&&this.techCall_("setControls",a),a?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_())),this):!!this.controls_},b.prototype.usingNativeControls=function(a){return void 0!==a?(a=!!a,this.usingNativeControls_!==a&&(this.usingNativeControls_=a,a?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols"))),this):!!this.usingNativeControls_},b.prototype.error=function(a){return void 0===a?this.error_||null:null===a?(this.error_=a,this.removeClass("vjs-error"),this.errorDisplay&&this.errorDisplay.close(),this):(this.error_=new J["default"](a),this.addClass("vjs-error"),z["default"].error("(CODE:"+this.error_.code+" "+J["default"].errorTypes[this.error_.code]+")",this.error_.message,this.error_),this.trigger("error"),this)},b.prototype.reportUserActivity=function(a){this.userActivity_=!0},b.prototype.userActive=function(a){return void 0!==a?(a=!!a,a!==this.userActive_&&(this.userActive_=a,a?(this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),this.trigger("useractive")):(this.userActivity_=!1,this.tech_&&this.tech_.one("mousemove",function(a){a.stopPropagation(),a.preventDefault()}),this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive"))),this):this.userActive_},b.prototype.listenForUserActivity_=function(){var a=void 0,b=void 0,c=void 0,d=t.bind(this,this.reportUserActivity),e=function(a){a.screenX===b&&a.screenY===c||(b=a.screenX,c=a.screenY,d())},f=function(){d(),this.clearInterval(a),a=this.setInterval(d,250)},g=function(b){d(),this.clearInterval(a)};this.on("mousedown",f),this.on("mousemove",e),this.on("mouseup",g),this.on("keydown",d),this.on("keyup",d);var h=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(h);var a=this.options_.inactivityTimeout;a>0&&(h=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},a))}},250)},b.prototype.playbackRate=function(a){return void 0!==a?(this.techCall_("setPlaybackRate",a),this):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("playbackRate"):1},b.prototype.isAudio=function(a){return void 0!==a?(this.isAudio_=!!a,this):!!this.isAudio_},b.prototype.videoTracks=function(){return this.tech_?this.tech_.videoTracks():(this.videoTracks_=this.videoTracks_||new Z["default"],this.videoTracks_)},b.prototype.audioTracks=function(){return this.tech_?this.tech_.audioTracks():(this.audioTracks_=this.audioTracks_||new X["default"],this.audioTracks_)},b.prototype.textTracks=function(){if(this.tech_)return this.tech_.textTracks()},b.prototype.remoteTextTracks=function(){if(this.tech_)return this.tech_.remoteTextTracks()},b.prototype.remoteTextTrackEls=function(){if(this.tech_)return this.tech_.remoteTextTrackEls()},b.prototype.addTextTrack=function(a,b,c){if(this.tech_)return this.tech_.addTextTrack(a,b,c)},b.prototype.addRemoteTextTrack=function(a){if(this.tech_)return this.tech_.addRemoteTextTrack(a)},b.prototype.removeRemoteTextTrack=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=a.track,c=void 0===b?arguments[0]:b;if(this.tech_)return this.tech_.removeRemoteTextTrack(c)},b.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},b.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},b.prototype.language=function(a){return void 0===a?this.language_:(this.language_=String(a).toLowerCase(),this)},b.prototype.languages=function(){return(0,P["default"])(b.prototype.options_.languages,this.languages_)},b.prototype.toJSON=function(){var a=(0,P["default"])(this.options_),b=a.tracks;a.tracks=[];for(var c=0;c<b.length;c++){var d=b[c];d=(0,P["default"])(d),d.player=void 0,a.tracks[c]=d}return a},b.prototype.createModal=function(a,b){var c=this;b=b||{},b.content=a||"";var d=new T["default"](this,b);return this.addChild(d),d.on("dispose",function(){c.removeChild(d)}),d.open()},b.getTagSettings=function(a){var b={sources:[],tracks:[]},c=r.getElAttributes(a),d=c["data-setup"];if(null!==d){var e=(0,L["default"])(d||"{}"),f=e[0],g=e[1];f&&z["default"].error(f),(0,N["default"])(c,g)}if((0,N["default"])(b,c),a.hasChildNodes())for(var h=a.childNodes,i=0,j=h.length;i<j;i++){var k=h[i],l=k.nodeName.toLowerCase();"source"===l?b.sources.push(r.getElAttributes(k)):"track"===l&&b.tracks.push(r.getElAttributes(k))}return b},b.prototype.flexNotSupported_=function(){var a=l["default"].createElement("i");return!("flexBasis"in a.style||"webkitFlexBasis"in a.style||"mozFlexBasis"in a.style||"msFlexBasis"in a.style||"msFlexOrder"in a.style)},b}(j["default"]);_.players={};var aa=n["default"].navigator;_.prototype.options_={techOrder:["html5","flash"],html5:{},flash:{},defaultVolume:0,inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings"],language:aa&&(aa.languages&&aa.languages[0]||aa.userLanguage||aa.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(a){_.prototype[a]=function(){return this.techGet_(a)}}),$.forEach(function(a){_.prototype["handleTech"+(0,B["default"])(a)+"_"]=function(){return this.trigger(a)}}),j["default"].registerComponent("Player",_),c["default"]=_},{1:1,136:136,145:145,4:4,41:41,44:44,45:45,46:46,5:5,50:50,55:55,59:59,60:60,61:61,62:62,63:63,68:68,69:69,71:71,76:76,78:78,79:79,8:8,80:80,81:81,82:82,84:84,85:85,86:86,87:87,88:88,89:89,92:92,93:93}],52:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e=a(51),f=d(e),g=function(a,b){f["default"].prototype[a]=b};c["default"]=g},{51:51}],53:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(3),i=d(h),j=a(5),k=d(j),l=function(a){function b(c){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,b);var g=f(this,a.call(this,c,d));return g.update(),g}return g(b,a),b.prototype.update=function(){var a=this.createPopup();this.popup&&this.removeChild(this.popup),this.popup=a,this.addChild(a),this.items&&0===this.items.length?this.hide():this.items&&this.items.length>1&&this.show()},b.prototype.createPopup=function(){},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},b.prototype.buildCSSClass=function(){var b="vjs-menu-button";return b+=this.options_.inline===!0?"-inline":"-popup","vjs-menu-button "+b+" "+a.prototype.buildCSSClass.call(this)},b}(i["default"]);k["default"].registerComponent("PopupButton",l),c["default"]=l},{3:3,5:5}],54:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(82),n=d(m),o=a(81),p=d(o),q=function(a){function b(){return f(this,b),g(this,a.apply(this,arguments))}return h(b,a),b.prototype.addItem=function(a){this.addChild(a),a.on("click",n.bind(this,function(){this.unlockShowing()}))},b.prototype.createEl=function(){var b=this.options_.contentElType||"ul";this.contentEl_=l.createEl(b,{className:"vjs-menu-content"});var c=a.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return c.appendChild(this.contentEl_),p.on(c,"click",function(a){a.preventDefault(),a.stopImmediatePropagation()}),c},b}(j["default"]);j["default"].registerComponent("Popup",q),c["default"]=q},{5:5,80:80,81:81,82:82}],55:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(3),j=e(i),k=a(5),l=e(k),m=a(82),n=d(m),o=a(80),p=d(o),q=a(78),r=d(q),s=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.update(),c.on("posterchange",n.bind(e,e.update)),e}return h(b,a),b.prototype.dispose=function(){this.player().off("posterchange",this.update),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var a=p.createEl("div",{className:"vjs-poster",tabIndex:-1});return r.BACKGROUND_SIZE_SUPPORTED||(this.fallbackImg_=p.createEl("img"),a.appendChild(this.fallbackImg_)),a},b.prototype.update=function(){var a=this.player().poster();this.setSrc(a),a?this.show():this.hide()},b.prototype.setSrc=function(a){if(this.fallbackImg_)this.fallbackImg_.src=a;else{var b="";a&&(b='url("'+a+'")'),this.el_.style.backgroundImage=b}},b.prototype.handleClick=function(){this.player_.paused()?this.player_.play():this.player_.pause()},b}(j["default"]);l["default"].registerComponent("PosterImage",s),c["default"]=s},{3:3,5:5,78:78,80:80,82:82}],56:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){b&&(n=b),setTimeout(o,a)}c.__esModule=!0,c.hasLoaded=c.autoSetupTimeout=c.autoSetup=void 0;var g=a(81),h=e(g),i=a(92),j=d(i),k=a(93),l=d(k),m=!1,n=void 0,o=function(){var a=j["default"].getElementsByTagName("video"),b=j["default"].getElementsByTagName("audio"),c=[];if(a&&a.length>0)for(var d=0,e=a.length;d<e;d++)c.push(a[d]);if(b&&b.length>0)for(var g=0,h=b.length;g<h;g++)c.push(b[g]);if(c&&c.length>0)for(var i=0,k=c.length;i<k;i++){var l=c[i];if(!l||!l.getAttribute){f(1);break}if(void 0===l.player){var o=l.getAttribute("data-setup");null!==o&&n(l);
}}else m||f(1)};"complete"===j["default"].readyState?m=!0:h.one(l["default"],"load",function(){m=!0});var p=function(){return m};c.autoSetup=o,c.autoSetupTimeout=f,c.hasLoaded=p},{81:81,92:92,93:93}],57:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(5),j=e(i),k=a(80),l=d(k),m=a(136),n=e(m),o=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.bar=e.getChild(e.options_.barName),e.vertical(!!e.options_.vertical),e.on("mousedown",e.handleMouseDown),e.on("touchstart",e.handleMouseDown),e.on("focus",e.handleFocus),e.on("blur",e.handleBlur),e.on("click",e.handleClick),e.on(c,"controlsvisible",e.update),e.on(c,e.playerEvent,e.update),e}return h(b,a),b.prototype.createEl=function(b){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.className=c.className+" vjs-slider",c=(0,n["default"])({tabIndex:0},c),d=(0,n["default"])({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},d),a.prototype.createEl.call(this,b,c,d)},b.prototype.handleMouseDown=function(a){var b=this.bar.el_.ownerDocument;a.preventDefault(),l.blockTextSelection(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(b,"mousemove",this.handleMouseMove),this.on(b,"mouseup",this.handleMouseUp),this.on(b,"touchmove",this.handleMouseMove),this.on(b,"touchend",this.handleMouseUp),this.handleMouseMove(a)},b.prototype.handleMouseMove=function(){},b.prototype.handleMouseUp=function(){var a=this.bar.el_.ownerDocument;l.unblockTextSelection(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(a,"mousemove",this.handleMouseMove),this.off(a,"mouseup",this.handleMouseUp),this.off(a,"touchmove",this.handleMouseMove),this.off(a,"touchend",this.handleMouseUp),this.update()},b.prototype.update=function(){if(this.el_){var a=this.getPercent(),b=this.bar;if(b){("number"!=typeof a||a!==a||a<0||a===1/0)&&(a=0);var c=(100*a).toFixed(2)+"%";this.vertical()?b.el().style.height=c:b.el().style.width=c}}},b.prototype.calculateDistance=function(a){var b=l.getPointerPosition(this.el_,a);return this.vertical()?b.y:b.x},b.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},b.prototype.handleKeyPress=function(a){37===a.which||40===a.which?(a.preventDefault(),this.stepBack()):38!==a.which&&39!==a.which||(a.preventDefault(),this.stepForward())},b.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},b.prototype.handleClick=function(a){a.stopImmediatePropagation(),a.preventDefault()},b.prototype.vertical=function(a){return void 0===a?this.vertical_||!1:(this.vertical_=!!a,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal"),this)},b}(j["default"]);j["default"].registerComponent("Slider",o),c["default"]=o},{136:136,5:5,80:80}],58:[function(a,b,c){"use strict";function d(a){return a.streamingFormats={"rtmp/mp4":"MP4","rtmp/flv":"FLV"},a.streamFromParts=function(a,b){return a+"&"+b},a.streamToParts=function(a){var b={connection:"",stream:""};if(!a)return b;var c=a.search(/&(?!\w+=)/),d=void 0;return c!==-1?d=c+1:(c=d=a.lastIndexOf("/")+1,0===c&&(c=d=a.length)),b.connection=a.substring(0,c),b.stream=a.substring(d,a.length),b},a.isStreamingType=function(b){return b in a.streamingFormats},a.RTMP_RE=/^rtmp[set]?:\/\//i,a.isStreamingSrc=function(b){return a.RTMP_RE.test(b)},a.rtmpSourceHandler={},a.rtmpSourceHandler.canPlayType=function(b){return a.isStreamingType(b)?"maybe":""},a.rtmpSourceHandler.canHandleSource=function(b,c){var d=a.rtmpSourceHandler.canPlayType(b.type);return d?d:a.isStreamingSrc(b.src)?"maybe":""},a.rtmpSourceHandler.handleSource=function(b,c,d){var e=a.streamToParts(b.src);c.setRtmpConnection(e.connection),c.setRtmpStream(e.stream)},a.registerSourceHandler(a.rtmpSourceHandler),a}c.__esModule=!0,c["default"]=d},{}],59:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a){var b=a.charAt(0).toUpperCase()+a.slice(1);B["set"+b]=function(b){return this.el_.vjs_setProperty(a,b)}}function j(a){B[a]=function(){return this.el_.vjs_getProperty(a)}}c.__esModule=!0;for(var k=a(62),l=e(k),m=a(80),n=d(m),o=a(90),p=d(o),q=a(88),r=a(58),s=e(r),t=a(5),u=e(t),v=a(93),w=e(v),x=a(136),y=e(x),z=w["default"].navigator,A=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return c.source&&e.ready(function(){this.setSource(c.source)},!0),c.startTime&&e.ready(function(){this.load(),this.play(),this.currentTime(c.startTime)},!0),w["default"].videojs=w["default"].videojs||{},w["default"].videojs.Flash=w["default"].videojs.Flash||{},w["default"].videojs.Flash.onReady=b.onReady,w["default"].videojs.Flash.onEvent=b.onEvent,w["default"].videojs.Flash.onError=b.onError,e.on("seeked",function(){this.lastSeekTarget_=void 0}),e}return h(b,a),b.prototype.createEl=function(){var a=this.options_;if(!a.swf){var c="5.1.0";a.swf="//vjs.zencdn.net/swf/"+c+"/video-js.swf"}var d=a.techId,e=(0,y["default"])({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.preload,loop:a.loop,muted:a.muted},a.flashVars),f=(0,y["default"])({wmode:"opaque",bgcolor:"#000000"},a.params),g=(0,y["default"])({id:d,name:d,"class":"vjs-tech"},a.attributes);return this.el_=b.embed(a.swf,e,f,g),this.el_.tech=this,this.el_},b.prototype.play=function(){this.ended()&&this.setCurrentTime(0),this.el_.vjs_play()},b.prototype.pause=function(){this.el_.vjs_pause()},b.prototype.src=function(a){return void 0===a?this.currentSrc():this.setSrc(a)},b.prototype.setSrc=function(a){var b=this;a=p.getAbsoluteURL(a),this.el_.vjs_src(a),this.autoplay()&&this.setTimeout(function(){return b.play()},0)},b.prototype.seeking=function(){return void 0!==this.lastSeekTarget_},b.prototype.setCurrentTime=function(b){var c=this.seekable();c.length&&(b=b>c.start(0)?b:c.start(0),b=b<c.end(c.length-1)?b:c.end(c.length-1),this.lastSeekTarget_=b,this.trigger("seeking"),this.el_.vjs_setProperty("currentTime",b),a.prototype.setCurrentTime.call(this))},b.prototype.currentTime=function(a){return this.seeking()?this.lastSeekTarget_||0:this.el_.vjs_getProperty("currentTime")},b.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.vjs_getProperty("currentSrc")},b.prototype.duration=function c(){if(0===this.readyState())return NaN;var c=this.el_.vjs_getProperty("duration");return c>=0?c:1/0},b.prototype.load=function(){this.el_.vjs_load()},b.prototype.poster=function(){this.el_.vjs_getProperty("poster")},b.prototype.setPoster=function(){},b.prototype.seekable=function(){var a=this.duration();return 0===a?(0,q.createTimeRange)():(0,q.createTimeRange)(0,a)},b.prototype.buffered=function(){var a=this.el_.vjs_getProperty("buffered");return 0===a.length?(0,q.createTimeRange)():(0,q.createTimeRange)(a[0][0],a[0][1])},b.prototype.supportsFullScreen=function(){return!1},b.prototype.enterFullScreen=function(){return!1},b}(l["default"]),B=A.prototype,C="rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),D="networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","),E=0;E<C.length;E++)j(C[E]),i(C[E]);for(var F=0;F<D.length;F++)j(D[F]);A.isSupported=function(){return A.version()[0]>=10},l["default"].withSourceHandlers(A),A.nativeSourceHandler={},A.nativeSourceHandler.canPlayType=function(a){return a in A.formats?"maybe":""},A.nativeSourceHandler.canHandleSource=function(a,b){function c(a){var b=p.getFileExtension(a);return b?"video/"+b:""}var d=void 0;return d=a.type?a.type.replace(/;.*/,"").toLowerCase():c(a.src),A.nativeSourceHandler.canPlayType(d)},A.nativeSourceHandler.handleSource=function(a,b,c){b.setSrc(a.src)},A.nativeSourceHandler.dispose=function(){},A.registerSourceHandler(A.nativeSourceHandler),A.formats={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"},A.onReady=function(a){var b=n.getEl(a),c=b&&b.tech;c&&c.el()&&A.checkReady(c)},A.checkReady=function(a){a.el()&&(a.el().vjs_getProperty?a.triggerReady():this.setTimeout(function(){A.checkReady(a)},50))},A.onEvent=function(a,b){var c=n.getEl(a).tech;c.trigger(b,Array.prototype.slice.call(arguments,2))},A.onError=function(a,b){var c=n.getEl(a).tech;return"srcnotfound"===b?c.error(4):void c.error("FLASH: "+b)},A.version=function(){var a="0,0,0";try{a=new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(b){try{z.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(z.plugins["Shockwave Flash 2.0"]||z.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(c){}}return a.split(",")},A.embed=function(a,b,c,d){var e=A.getEmbedCode(a,b,c,d),f=n.createEl("div",{innerHTML:e}).childNodes[0];return f},A.getEmbedCode=function(a,b,c,d){var e='<object type="application/x-shockwave-flash" ',f="",g="",h="";return b&&Object.getOwnPropertyNames(b).forEach(function(a){f+=a+"="+b[a]+"&amp;"}),c=(0,y["default"])({movie:a,flashvars:f,allowScriptAccess:"always",allowNetworking:"all"},c),Object.getOwnPropertyNames(c).forEach(function(a){g+='<param name="'+a+'" value="'+c[a]+'" />'}),d=(0,y["default"])({data:a,width:"100%",height:"100%"},d),Object.getOwnPropertyNames(d).forEach(function(a){h+=a+'="'+d[a]+'" '}),""+e+h+">"+g+"</object>"},(0,s["default"])(A),u["default"].registerComponent("Flash",A),l["default"].registerTech("Flash",A),c["default"]=A},{136:136,5:5,58:58,62:62,80:80,88:88,90:90,93:93}],60:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){return a.raw=b,a}function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function i(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k=f(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),l=a(62),m=e(l),n=a(5),o=e(n),p=a(80),q=d(p),r=a(90),s=d(r),t=a(82),u=d(t),v=a(85),w=e(v),x=a(146),y=e(x),z=a(78),A=d(z),B=a(92),C=e(B),D=a(93),E=e(D),F=a(136),G=e(F),H=a(86),I=e(H),J=a(89),K=e(J),L=function(a){function b(c,d){g(this,b);var e=h(this,a.call(this,c,d)),f=c.source,i=!1;if(f&&(e.el_.currentSrc!==f.src||c.tag&&3===c.tag.initNetworkState_)?e.setSource(f):e.handleLateInit_(e.el_),e.el_.hasChildNodes()){for(var j=e.el_.childNodes,l=j.length,m=[];l--;){var n=j[l],o=n.nodeName.toLowerCase();"track"===o&&(e.featuresNativeTextTracks?(e.remoteTextTrackEls().addTrackElement_(n),e.remoteTextTracks().addTrack_(n.track),i||e.el_.hasAttribute("crossorigin")||!s.isCrossOrigin(n.src)||(i=!0)):m.push(n))}for(var p=0;p<m.length;p++)e.el_.removeChild(m[p])}var q=["audio","video"];return q.forEach(function(a){var b=e.el()[a+"Tracks"],c=e[a+"Tracks"](),d=(0,K["default"])(a);e["featuresNative"+d+"Tracks"]&&b&&b.addEventListener&&(e["handle"+d+"TrackChange_"]=function(a){c.trigger({type:"change",target:c,currentTarget:c,srcElement:c})},e["handle"+d+"TrackAdd_"]=function(a){return c.addTrack(a.track)},e["handle"+d+"TrackRemove_"]=function(a){return c.removeTrack(a.track)},b.addEventListener("change",e["handle"+d+"TrackChange_"]),b.addEventListener("addtrack",e["handle"+d+"TrackAdd_"]),b.addEventListener("removetrack",e["handle"+d+"TrackRemove_"]),e["removeOld"+d+"Tracks_"]=function(a){return e.removeOldTracks_(c,b)},e.on("loadstart",e["removeOld"+d+"Tracks_"]))}),e.featuresNativeTextTracks&&(i&&w["default"].warn((0,y["default"])(k)),e.handleTextTrackChange_=u.bind(e,e.handleTextTrackChange),e.handleTextTrackAdd_=u.bind(e,e.handleTextTrackAdd),e.handleTextTrackRemove_=u.bind(e,e.handleTextTrackRemove),e.proxyNativeTextTracks_()),(A.TOUCH_ENABLED||A.IS_IPHONE||A.IS_NATIVE_ANDROID)&&c.nativeControlsForTouch===!0&&e.setControls(!0),e.proxyWebkitFullscreen_(),e.triggerReady(),e}return i(b,a),b.prototype.dispose=function(){var c=this;["audio","video","text"].forEach(function(a){var b=(0,K["default"])(a),d=c.el_[a+"Tracks"];d&&d.removeEventListener&&(d.removeEventListener("change",c["handle"+b+"TrackChange_"]),d.removeEventListener("addtrack",c["handle"+b+"TrackAdd_"]),d.removeEventListener("removetrack",c["handle"+b+"TrackRemove_"])),d&&c.off("loadstart",c["removeOld"+b+"Tracks_"])}),b.disposeMediaElement(this.el_),a.prototype.dispose.call(this)},b.prototype.createEl=function(){var a=this.options_.tag;if(!a||this.movingMediaElementInDOM===!1){if(a){var c=a.cloneNode(!0);a.parentNode.insertBefore(c,a),b.disposeMediaElement(a),a=c}else{a=C["default"].createElement("video");var d=this.options_.tag&&q.getElAttributes(this.options_.tag),e=(0,I["default"])({},d);A.TOUCH_ENABLED&&this.options_.nativeControlsForTouch===!0||delete e.controls,q.setElAttributes(a,(0,G["default"])(e,{id:this.options_.techId,"class":"vjs-tech"}))}a.playerId=this.options_.playerId}for(var f=["autoplay","preload","loop","muted"],g=f.length-1;g>=0;g--){var h=f[g],i={};"undefined"!=typeof this.options_[h]&&(i[h]=this.options_[h]),q.setElAttributes(a,i)}return a},b.prototype.handleLateInit_=function(a){var b=this;if(0!==a.networkState&&3!==a.networkState){if(0===a.readyState){var c=function(){var a=!1,c=function(){a=!0};b.on("loadstart",c);var d=function(){a||this.trigger("loadstart")};return b.on("loadedmetadata",d),b.ready(function(){this.off("loadstart",c),this.off("loadedmetadata",d),a||this.trigger("loadstart")}),{v:void 0}}();if("object"===("undefined"==typeof c?"undefined":j(c)))return c.v}var d=["loadstart"];d.push("loadedmetadata"),a.readyState>=2&&d.push("loadeddata"),a.readyState>=3&&d.push("canplay"),a.readyState>=4&&d.push("canplaythrough"),this.ready(function(){d.forEach(function(a){this.trigger(a)},this)})}},b.prototype.proxyNativeTextTracks_=function(){var a=this.el().textTracks;if(a){for(var b=0;b<a.length;b++)this.textTracks().addTrack_(a[b]);a.addEventListener&&(a.addEventListener("change",this.handleTextTrackChange_),a.addEventListener("addtrack",this.handleTextTrackAdd_),a.addEventListener("removetrack",this.handleTextTrackRemove_)),this.on("loadstart",this.removeOldTextTracks_)}},b.prototype.handleTextTrackChange=function(a){var b=this.textTracks();this.textTracks().trigger({type:"change",target:b,currentTarget:b,srcElement:b})},b.prototype.handleTextTrackAdd=function(a){this.textTracks().addTrack_(a.track)},b.prototype.handleTextTrackRemove=function(a){this.textTracks().removeTrack_(a.track)},b.prototype.removeOldTracks_=function(a,b){var c=[];if(b){for(var d=0;d<a.length;d++){for(var e=a[d],f=!1,g=0;g<b.length;g++)if(b[g]===e){f=!0;break}f||c.push(e)}for(var h=0;h<c.length;h++){var i=c[h];a.removeTrack_(i)}}},b.prototype.removeOldTextTracks_=function(){var a=this.textTracks(),b=this.el().textTracks;this.removeOldTracks_(a,b)},b.prototype.play=function(){var a=this.el_.play();void 0!==a&&"function"==typeof a.then&&a.then(null,function(a){})},b.prototype.setCurrentTime=function(a){try{this.el_.currentTime=a}catch(b){(0,w["default"])(b,"Video is not ready. (Video.js)")}},b.prototype.duration=function(){return this.el_.duration||0},b.prototype.width=function(){return this.el_.offsetWidth},b.prototype.height=function(){return this.el_.offsetHeight},b.prototype.proxyWebkitFullscreen_=function(){var a=this;if("webkitDisplayingFullscreen"in this.el_){var b=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},c=function(){this.one("webkitendfullscreen",b),this.trigger("fullscreenchange",{isFullscreen:!0})};this.on("webkitbeginfullscreen",c),this.on("dispose",function(){a.off("webkitbeginfullscreen",c),a.off("webkitendfullscreen",b)})}},b.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var a=E["default"].navigator&&E["default"].navigator.userAgent||"";if(/Android/.test(a)||!/Chrome|Mac OS X 10.5/.test(a))return!0}return!1},b.prototype.enterFullScreen=function(){var a=this.el_;a.paused&&a.networkState<=a.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){a.pause(),a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()},b.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},b.prototype.src=function(a){return void 0===a?this.el_.src:void this.setSrc(a)},b.prototype.reset=function(){b.resetMediaElement(this.el_)},b.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},b.prototype.setControls=function(a){this.el_.controls=!!a},b.prototype.addTextTrack=function(b,c,d){return this.featuresNativeTextTracks?this.el_.addTextTrack(b,c,d):a.prototype.addTextTrack.call(this,b,c,d)},b.prototype.addRemoteTextTrack=function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.featuresNativeTextTracks)return a.prototype.addRemoteTextTrack.call(this,b);var c=C["default"].createElement("track");return b.kind&&(c.kind=b.kind),b.label&&(c.label=b.label),(b.language||b.srclang)&&(c.srclang=b.language||b.srclang),b["default"]&&(c["default"]=b["default"]),b.id&&(c.id=b.id),b.src&&(c.src=b.src),this.el().appendChild(c),this.remoteTextTrackEls().addTrackElement_(c),this.remoteTextTracks().addTrack_(c.track),c},b.prototype.removeRemoteTextTrack=function(b){if(!this.featuresNativeTextTracks)return a.prototype.removeRemoteTextTrack.call(this,b);var c=this.remoteTextTrackEls().getTrackElementByTrack_(b);this.remoteTextTrackEls().removeTrackElement_(c),this.remoteTextTracks().removeTrack_(b);for(var d=this.$$("track"),e=d.length;e--;)b!==d[e]&&b!==d[e].track||this.el().removeChild(d[e])},b}(m["default"]);L.TEST_VID=C["default"].createElement("video");var M=C["default"].createElement("track");M.kind="captions",M.srclang="en",M.label="English",L.TEST_VID.appendChild(M),L.isSupported=function(){try{L.TEST_VID.volume=.5}catch(a){return!1}return!!L.TEST_VID.canPlayType},L.canControlVolume=function(){try{var a=L.TEST_VID.volume;return L.TEST_VID.volume=a/2+.1,a!==L.TEST_VID.volume}catch(b){return!1}},L.canControlPlaybackRate=function(){if(A.IS_ANDROID&&A.IS_CHROME)return!1;try{var a=L.TEST_VID.playbackRate;return L.TEST_VID.playbackRate=a/2+.1,a!==L.TEST_VID.playbackRate}catch(b){return!1}},L.supportsNativeTextTracks=function(){var a=void 0;return a=!!L.TEST_VID.textTracks,a&&L.TEST_VID.textTracks.length>0&&(a="number"!=typeof L.TEST_VID.textTracks[0].mode),a&&A.IS_FIREFOX&&(a=!1),!a||"onremovetrack"in L.TEST_VID.textTracks||(a=!1),a},L.supportsNativeVideoTracks=function(){var a=!!L.TEST_VID.videoTracks;return a},L.supportsNativeAudioTracks=function(){var a=!!L.TEST_VID.audioTracks;return a},L.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","volumechange"],L.prototype.featuresVolumeControl=L.canControlVolume(),L.prototype.featuresPlaybackRate=L.canControlPlaybackRate(),L.prototype.movingMediaElementInDOM=!A.IS_IOS,L.prototype.featuresFullscreenResize=!0,L.prototype.featuresProgressEvents=!0,L.prototype.featuresTimeupdateEvents=!0,L.prototype.featuresNativeTextTracks=L.supportsNativeTextTracks(),L.prototype.featuresNativeVideoTracks=L.supportsNativeVideoTracks(),L.prototype.featuresNativeAudioTracks=L.supportsNativeAudioTracks();var N=void 0,O=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,P=/^video\/mp4/i;L.patchCanPlayType=function(){A.ANDROID_VERSION>=4&&!A.IS_FIREFOX&&(N||(N=L.TEST_VID.constructor.prototype.canPlayType),L.TEST_VID.constructor.prototype.canPlayType=function(a){return a&&O.test(a)?"maybe":N.call(this,a)}),A.IS_OLD_ANDROID&&(N||(N=L.TEST_VID.constructor.prototype.canPlayType),L.TEST_VID.constructor.prototype.canPlayType=function(a){return a&&P.test(a)?"maybe":N.call(this,a)})},L.unpatchCanPlayType=function(){var a=L.TEST_VID.constructor.prototype.canPlayType;return L.TEST_VID.constructor.prototype.canPlayType=N,N=null,a},L.patchCanPlayType(),L.disposeMediaElement=function(a){if(a){for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src"),"function"==typeof a.load&&!function(){try{a.load()}catch(b){}}()}},L.resetMediaElement=function(a){if(a){for(var b=a.querySelectorAll("source"),c=b.length;c--;)a.removeChild(b[c]);a.removeAttribute("src"),"function"==typeof a.load&&!function(){try{a.load()}catch(b){}}()}},["paused","currentTime","buffered","volume","muted","poster","preload","autoplay","controls","loop","error","seeking","seekable","ended","defaultMuted","playbackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(a){L.prototype[a]=function(){return this.el_[a]}}),["volume","muted","src","poster","preload","autoplay","loop","playbackRate"].forEach(function(a){L.prototype["set"+(0,K["default"])(a)]=function(b){this.el_[a]=b}}),["pause","load"].forEach(function(a){L.prototype[a]=function(){return this.el_[a]()}}),m["default"].withSourceHandlers(L),L.nativeSourceHandler={},L.nativeSourceHandler.canPlayType=function(a){try{return L.TEST_VID.canPlayType(a)}catch(b){return""}},L.nativeSourceHandler.canHandleSource=function(a,b){if(a.type)return L.nativeSourceHandler.canPlayType(a.type);if(a.src){var c=s.getFileExtension(a.src);return L.nativeSourceHandler.canPlayType("video/"+c)}return""},L.nativeSourceHandler.handleSource=function(a,b,c){b.setSrc(a.src)},L.nativeSourceHandler.dispose=function(){},L.registerSourceHandler(L.nativeSourceHandler),o["default"].registerComponent("Html5",L),m["default"].registerTech("Html5",L),c["default"]=L},{136:136,146:146,5:5,62:62,78:78,80:80,82:82,85:85,86:86,89:89,90:90,92:92,93:93}],61:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var h=a(5),i=d(h),j=a(62),k=d(j),l=a(89),m=d(l),n=function(a){function b(c,d,g){e(this,b);var h=f(this,a.call(this,c,d,g));if(d.playerOptions.sources&&0!==d.playerOptions.sources.length)c.src(d.playerOptions.sources);else for(var j=0,l=d.playerOptions.techOrder;j<l.length;j++){var n=(0,m["default"])(l[j]),o=k["default"].getTech(n);if(n||(o=i["default"].getComponent(n)),o&&o.isSupported()){c.loadTech_(n);break}}return h}return g(b,a),b}(i["default"]);i["default"].registerComponent("MediaLoader",n),c["default"]=n},{5:5,62:62,89:89}],62:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b,c,d){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},f=a.textTracks();e.kind=b,c&&(e.label=c),d&&(e.language=d),e.tech=a;var g=new s["default"](e);return f.addTrack_(g),g}c.__esModule=!0;var j=a(5),k=e(j),l=a(66),m=e(l),n=a(65),o=e(n),p=a(86),q=e(p),r=a(72),s=e(r),t=a(70),u=e(t),v=a(76),w=e(v),x=a(63),y=e(x),z=a(82),A=d(z),B=a(85),C=e(B),D=a(88),E=a(79),F=a(46),G=e(F),H=a(93),I=e(H),J=a(92),K=e(J),L=function(a){function b(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};f(this,b),c.reportTouchActivity=!1;var e=g(this,a.call(this,null,c,d));return e.hasStarted_=!1,e.on("playing",function(){this.hasStarted_=!0}),e.on("loadstart",function(){this.hasStarted_=!1}),e.textTracks_=c.textTracks,e.videoTracks_=c.videoTracks,e.audioTracks_=c.audioTracks,e.featuresProgressEvents||e.manualProgressOn(),e.featuresTimeupdateEvents||e.manualTimeUpdatesOn(),c.nativeCaptions!==!1&&c.nativeTextTracks!==!1||(e.featuresNativeTextTracks=!1),e.featuresNativeTextTracks||e.on("ready",e.emulateTextTracks),e.initTextTrackListeners(),e.initTrackListeners(),e.emitTapEvents(),e}return h(b,a),b.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},b.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},b.prototype.trackProgress=function(){this.stopTrackingProgress(),this.progressInterval=this.setInterval(A.bind(this,function(){var a=this.bufferedPercent();this.bufferedPercent_!==a&&this.trigger("progress"),this.bufferedPercent_=a,1===a&&this.stopTrackingProgress()}),500)},b.prototype.onDurationChange=function(){this.duration_=this.duration()},b.prototype.buffered=function(){return(0,D.createTimeRange)(0,0)},b.prototype.bufferedPercent=function(){return(0,E.bufferedPercent)(this.buffered(),this.duration_)},b.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},b.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},b.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},b.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},b.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},b.prototype.dispose=function(){this.clearTracks(["audio","video","text"]),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),a.prototype.dispose.call(this)},b.prototype.clearTracks=function(a){var b=this;a=[].concat(a),a.forEach(function(a){for(var c=b[a+"Tracks"]()||[],d=c.length;d--;){var e=c[d];"text"===a&&b.removeRemoteTextTrack(e),c.removeTrack_(e)}})},b.prototype.reset=function(){},b.prototype.error=function(a){return void 0!==a&&(this.error_=new G["default"](a),this.trigger("error")),this.error_},b.prototype.played=function(){return this.hasStarted_?(0,D.createTimeRange)(0,0):(0,D.createTimeRange)()},b.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},b.prototype.initTextTrackListeners=function(){var a=A.bind(this,function(){this.trigger("texttrackchange")}),b=this.textTracks();b&&(b.addEventListener("removetrack",a),b.addEventListener("addtrack",a),this.on("dispose",A.bind(this,function(){b.removeEventListener("removetrack",a),b.removeEventListener("addtrack",a)})))},b.prototype.initTrackListeners=function(){var a=this,b=["video","audio"];b.forEach(function(b){var c=function(){a.trigger(b+"trackchange")},d=a[b+"Tracks"]();d.addEventListener("removetrack",c),d.addEventListener("addtrack",c),a.on("dispose",function(){d.removeEventListener("removetrack",c),d.removeEventListener("addtrack",c)})})},b.prototype.emulateTextTracks=function(){var a=this,b=this.textTracks();if(b){I["default"].WebVTT||null===this.el().parentNode||void 0===this.el().parentNode||!function(){var b=K["default"].createElement("script");b.src=a.options_["vtt.js"]||"https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js",b.onload=function(){a.trigger("vttjsloaded")},b.onerror=function(){a.trigger("vttjserror")},a.on("dispose",function(){b.onload=null,b.onerror=null}),I["default"].WebVTT=!0,a.el().parentNode.appendChild(b)}();var c=function(){return a.trigger("texttrackchange")},d=function(){c();for(var a=0;a<b.length;a++){var d=b[a];d.removeEventListener("cuechange",c),"showing"===d.mode&&d.addEventListener("cuechange",c)}};d(),b.addEventListener("change",d),this.on("dispose",function(){b.removeEventListener("change",d)})}},b.prototype.videoTracks=function(){return this.videoTracks_=this.videoTracks_||new w["default"],this.videoTracks_},b.prototype.audioTracks=function(){return this.audioTracks_=this.audioTracks_||new y["default"],this.audioTracks_},b.prototype.textTracks=function(){return this.textTracks_=this.textTracks_||new u["default"],this.textTracks_},b.prototype.remoteTextTracks=function(){return this.remoteTextTracks_=this.remoteTextTracks_||new u["default"],this.remoteTextTracks_},b.prototype.remoteTextTrackEls=function(){return this.remoteTextTrackEls_=this.remoteTextTrackEls_||new o["default"],this.remoteTextTrackEls_},b.prototype.addTextTrack=function(a,b,c){if(!a)throw new Error("TextTrack kind is required but was not provided");
return i(this,a,b,c)},b.prototype.addRemoteTextTrack=function(a){var b=(0,q["default"])(a,{tech:this}),c=new m["default"](b);return this.remoteTextTrackEls().addTrackElement_(c),this.remoteTextTracks().addTrack_(c.track),this.textTracks().addTrack_(c.track),c},b.prototype.removeRemoteTextTrack=function(a){this.textTracks().removeTrack_(a);var b=this.remoteTextTrackEls().getTrackElementByTrack_(a);this.remoteTextTrackEls().removeTrackElement_(b),this.remoteTextTracks().removeTrack_(a)},b.prototype.setPoster=function(){},b.prototype.canPlayType=function(){return""},b.isTech=function(a){return a.prototype instanceof b||a instanceof b||a===b},b.registerTech=function(a,c){if(b.techs_||(b.techs_={}),!b.isTech(c))throw new Error("Tech "+a+" must be a Tech");return b.techs_[a]=c,c},b.getTech=function(a){return b.techs_&&b.techs_[a]?b.techs_[a]:I["default"]&&I["default"].videojs&&I["default"].videojs[a]?(C["default"].warn("The "+a+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),I["default"].videojs[a]):void 0},b}(k["default"]);L.prototype.textTracks_,L.prototype.audioTracks_,L.prototype.videoTracks_,L.prototype.featuresVolumeControl=!0,L.prototype.featuresFullscreenResize=!1,L.prototype.featuresPlaybackRate=!1,L.prototype.featuresProgressEvents=!1,L.prototype.featuresTimeupdateEvents=!1,L.prototype.featuresNativeTextTracks=!1,L.withSourceHandlers=function(a){a.registerSourceHandler=function(b,c){var d=a.sourceHandlers;d||(d=a.sourceHandlers=[]),void 0===c&&(c=d.length),d.splice(c,0,b)},a.canPlayType=function(b){for(var c=a.sourceHandlers||[],d=void 0,e=0;e<c.length;e++)if(d=c[e].canPlayType(b))return d;return""},a.selectSourceHandler=function(b,c){for(var d=a.sourceHandlers||[],e=void 0,f=0;f<d.length;f++)if(e=d[f].canHandleSource(b,c))return d[f];return null},a.canPlaySource=function(b,c){var d=a.selectSourceHandler(b,c);return d?d.canHandleSource(b,c):""};var b=["seekable","duration"];b.forEach(function(a){var b=this[a];"function"==typeof b&&(this[a]=function(){return this.sourceHandler_&&this.sourceHandler_[a]?this.sourceHandler_[a].apply(this.sourceHandler_,arguments):b.apply(this,arguments)})},a.prototype),a.prototype.setSource=function(b){var c=a.selectSourceHandler(b,this.options_);return c||(a.nativeSourceHandler?c=a.nativeSourceHandler:C["default"].error("No source hander found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),c!==a.nativeSourceHandler&&(this.currentSource_=b,this.off(this.el_,"loadstart",a.prototype.firstLoadStartListener_),this.off(this.el_,"loadstart",a.prototype.successiveLoadStartListener_),this.one(this.el_,"loadstart",a.prototype.firstLoadStartListener_)),this.sourceHandler_=c.handleSource(b,this,this.options_),this.on("dispose",this.disposeSourceHandler),this},a.prototype.firstLoadStartListener_=function(){this.one(this.el_,"loadstart",a.prototype.successiveLoadStartListener_)},a.prototype.successiveLoadStartListener_=function(){this.currentSource_=null,this.disposeSourceHandler(),this.one(this.el_,"loadstart",a.prototype.successiveLoadStartListener_)},a.prototype.disposeSourceHandler=function(){this.sourceHandler_&&this.sourceHandler_.dispose&&(this.off(this.el_,"loadstart",a.prototype.firstLoadStartListener_),this.off(this.el_,"loadstart",a.prototype.successiveLoadStartListener_),this.sourceHandler_.dispose(),this.sourceHandler_=null)}},k["default"].registerComponent("Tech",L),k["default"].registerComponent("MediaTechController",L),L.registerTech("Tech",L),c["default"]=L},{46:46,5:5,63:63,65:65,66:66,70:70,72:72,76:76,79:79,82:82,85:85,86:86,88:88,92:92,93:93}],63:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(78),l=d(k),m=a(92),n=e(m),o=function(a,b){for(var c=0;c<a.length;c++)b.id!==a[c].id&&(a[c].enabled=!1)},p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);for(var h=void 0,i=e.length-1;i>=0;i--)if(e[i].enabled){o(e,e[i]);break}if(l.IS_IE8){h=n["default"].createElement("custom");for(var k in j["default"].prototype)"constructor"!==k&&(h[k]=j["default"].prototype[k]);for(var m in b.prototype)"constructor"!==m&&(h[m]=b.prototype[m])}return h=c=g(this,a.call(this,e,h)),h.changing_=!1,d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){var c=this;b.enabled&&o(this,b),a.prototype.addTrack_.call(this,b),b.addEventListener&&b.addEventListener("enabledchange",function(){c.changing_||(c.changing_=!0,o(c,b),c.changing_=!1,c.trigger("change"))})},b.prototype.addTrack=function(a){this.addTrack_(a)},b.prototype.removeTrack=function(b){a.prototype.removeTrack_.call(this,b)},b}(j["default"]);c["default"]=p},{74:74,78:78,92:92}],64:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(73),j=a(75),k=e(j),l=a(86),m=e(l),n=a(78),o=d(n),p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var h=(0,m["default"])(e,{kind:i.AudioTrackKind[e.kind]||""}),j=c=g(this,a.call(this,h)),k=!1;if(o.IS_IE8)for(var l in b.prototype)"constructor"!==l&&(j[l]=b.prototype[l]);return Object.defineProperty(j,"enabled",{get:function(){return k},set:function(a){"boolean"==typeof a&&a!==k&&(k=a,this.trigger("enabledchange"))}}),h.enabled&&(j.enabled=h.enabled),j.loaded_=!0,d=j,g(c,d)}return h(b,a),b}(k["default"]);c["default"]=p},{73:73,75:75,78:78,86:86}],65:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(78),h=e(g),i=a(92),j=d(i),k=function(){function a(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,a);var c=this;if(h.IS_IE8){c=j["default"].createElement("custom");for(var d in a.prototype)"constructor"!==d&&(c[d]=a.prototype[d])}c.trackElements_=[],Object.defineProperty(c,"length",{get:function(){return this.trackElements_.length}});for(var e=0,g=b.length;e<g;e++)c.addTrackElement_(b[e]);if(h.IS_IE8)return c}return a.prototype.addTrackElement_=function(a){this.trackElements_.push(a)},a.prototype.getTrackElementByTrack_=function(a){for(var b=void 0,c=0,d=this.trackElements_.length;c<d;c++)if(a===this.trackElements_[c].track){b=this.trackElements_[c];break}return b},a.prototype.removeTrackElement_=function(a){for(var b=0,c=this.trackElements_.length;b<c;b++)if(a===this.trackElements_[b]){this.trackElements_.splice(b,1);break}},a}();c["default"]=k},{78:78,92:92}],66:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(78),j=e(i),k=a(92),l=d(k),m=a(42),n=d(m),o=a(72),p=d(o),q=0,r=1,s=2,t=3,u=function(a){function b(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var d=g(this,a.call(this)),e=void 0,h=d;if(j.IS_IE8){h=l["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(h[i]=b.prototype[i])}var k=new p["default"](c);if(h.kind=k.kind,h.src=k.src,h.srclang=k.language,h.label=k.label,h["default"]=k["default"],Object.defineProperty(h,"readyState",{get:function(){return e}}),Object.defineProperty(h,"track",{get:function(){return k}}),e=q,k.addEventListener("loadeddata",function(){e=s,h.trigger({type:"load",target:h})}),j.IS_IE8){var m;return m=h,g(d,m)}return d}return h(b,a),b}(n["default"]);u.prototype.allowedEvents_={load:"load"},u.NONE=q,u.LOADING=r,u.LOADED=s,u.ERROR=t,c["default"]=u},{42:42,72:72,78:78,92:92}],67:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=a(78),h=e(g),i=a(92),j=d(i),k=function(){function a(b){f(this,a);var c=this;if(h.IS_IE8){c=j["default"].createElement("custom");for(var d in a.prototype)"constructor"!==d&&(c[d]=a.prototype[d])}if(a.prototype.setCues_.call(c,b),Object.defineProperty(c,"length",{get:function(){return this.length_}}),h.IS_IE8)return c}return a.prototype.setCues_=function(a){var b=this.length||0,c=0,d=a.length;this.cues_=a,this.length_=a.length;var e=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.cues_[a]}})};if(b<d)for(c=b;c<d;c++)e.call(this,c)},a.prototype.getCueById=function(a){for(var b=null,c=0,d=this.length;c<d;c++){var e=this[c];if(e.id===a){b=e;break}}return b},a}();c["default"]=k},{78:78,92:92}],68:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+b+")"}function j(a,b,c){try{a.style[b]=c}catch(d){return}}c.__esModule=!0;var k=a(5),l=e(k),m=a(82),n=d(m),o=a(93),p=e(o),q="#222",r="#ccc",s={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'},t=function(a){function b(c,d,e){f(this,b);var h=g(this,a.call(this,c,d,e));return c.on("loadstart",n.bind(h,h.toggleDisplay)),c.on("texttrackchange",n.bind(h,h.updateDisplay)),c.ready(n.bind(h,function(){if(c.tech_&&c.tech_.featuresNativeTextTracks)return void this.hide();c.on("fullscreenchange",n.bind(this,this.updateDisplay));for(var a=this.options_.playerOptions.tracks||[],b=0;b<a.length;b++)this.player_.addRemoteTextTrack(a[b]);var d={captions:1,subtitles:1},e=this.player_.textTracks(),f=void 0,g=void 0;if(e){for(var h=0;h<e.length;h++){var i=e[h];i["default"]&&("descriptions"!==i.kind||f?i.kind in d&&!g&&(g=i):f=i)}g?g.mode="showing":f&&(f.mode="showing")}})),h}return h(b,a),b.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},b.prototype.createEl=function(){return a.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"assertive","aria-atomic":"true"})},b.prototype.clearDisplay=function(){"function"==typeof p["default"].WebVTT&&p["default"].WebVTT.processCues(p["default"],[],this.el_)},b.prototype.updateDisplay=function(){var a=this.player_.textTracks();if(this.clearDisplay(),a){for(var b=null,c=null,d=a.length;d--;){var e=a[d];"showing"===e.mode&&("descriptions"===e.kind?b=e:c=e)}c?this.updateForTrack(c):b&&this.updateForTrack(b)}},b.prototype.updateForTrack=function(a){if("function"==typeof p["default"].WebVTT&&a.activeCues){for(var b=this.player_.textTrackSettings.getValues(),c=[],d=0;d<a.activeCues.length;d++)c.push(a.activeCues[d]);p["default"].WebVTT.processCues(p["default"],c,this.el_);for(var e=c.length;e--;){var f=c[e];if(f){var g=f.displayState;if(b.color&&(g.firstChild.style.color=b.color),b.textOpacity&&j(g.firstChild,"color",i(b.color||"#fff",b.textOpacity)),b.backgroundColor&&(g.firstChild.style.backgroundColor=b.backgroundColor),b.backgroundOpacity&&j(g.firstChild,"backgroundColor",i(b.backgroundColor||"#000",b.backgroundOpacity)),b.windowColor&&(b.windowOpacity?j(g,"backgroundColor",i(b.windowColor,b.windowOpacity)):g.style.backgroundColor=b.windowColor),b.edgeStyle&&("dropshadow"===b.edgeStyle?g.firstChild.style.textShadow="2px 2px 3px "+q+", 2px 2px 4px "+q+", 2px 2px 5px "+q:"raised"===b.edgeStyle?g.firstChild.style.textShadow="1px 1px "+q+", 2px 2px "+q+", 3px 3px "+q:"depressed"===b.edgeStyle?g.firstChild.style.textShadow="1px 1px "+r+", 0 1px "+r+", -1px -1px "+q+", 0 -1px "+q:"uniform"===b.edgeStyle&&(g.firstChild.style.textShadow="0 0 4px "+q+", 0 0 4px "+q+", 0 0 4px "+q+", 0 0 4px "+q)),b.fontPercent&&1!==b.fontPercent){var h=p["default"].parseFloat(g.style.fontSize);g.style.fontSize=h*b.fontPercent+"px",g.style.height="auto",g.style.top="auto",g.style.bottom="2px"}b.fontFamily&&"default"!==b.fontFamily&&("small-caps"===b.fontFamily?g.firstChild.style.fontVariant="small-caps":g.firstChild.style.fontFamily=s[b.fontFamily])}}}},b}(l["default"]);l["default"].registerComponent("TextTrackDisplay",t),c["default"]=t},{5:5,82:82,93:93}],69:[function(a,b,c){"use strict";c.__esModule=!0;var d=function(a){var b=["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(b,c,d){return a[c]&&(b[c]=a[c]),b},{cues:a.cues&&Array.prototype.map.call(a.cues,function(a){return{startTime:a.startTime,endTime:a.endTime,text:a.text,id:a.id}})});return b},e=function(a){var b=a.$$("track"),c=Array.prototype.map.call(b,function(a){return a.track}),e=Array.prototype.map.call(b,function(a){var b=d(a.track);return a.src&&(b.src=a.src),b});return e.concat(Array.prototype.filter.call(a.textTracks(),function(a){return c.indexOf(a)===-1}).map(d))},f=function(a,b){return a.forEach(function(a){var c=b.addRemoteTextTrack(a).track;!a.src&&a.cues&&a.cues.forEach(function(a){return c.addCue(a)})}),b.textTracks()};c["default"]={textTracksToJson:e,jsonToTextTracks:f,trackToJson_:d}},{}],70:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(82),l=d(k),m=a(78),n=d(m),o=a(92),p=e(o),q=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);var h=void 0;if(n.IS_IE8){h=p["default"].createElement("custom");for(var i in j["default"].prototype)"constructor"!==i&&(h[i]=j["default"].prototype[i]);for(var k in b.prototype)"constructor"!==k&&(h[k]=b.prototype[k])}return h=c=g(this,a.call(this,e,h)),d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){a.prototype.addTrack_.call(this,b),b.addEventListener("modechange",l.bind(this,function(){this.trigger("change")}))},b.prototype.removeTrack_=function(a){for(var b=void 0,c=0,d=this.length;c<d;c++)if(this[c]===a){b=this[c],b.off&&b.off(),this.tracks_.splice(c,1);break}b&&this.trigger({track:b,type:"removetrack"})},b.prototype.getTrackById=function(a){for(var b=null,c=0,d=this.length;c<d;c++){var e=this[c];if(e.id===a){b=e;break}}return b},b}(j["default"]);c["default"]=q},{74:74,78:78,82:82,92:92}],71:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function i(a,b,c){var d='\n    <div role="document">\n      <div role="heading" aria-level="1" id="'+b+'" class="vjs-control-text">Captions Settings Dialog</div>\n      <div id="'+c+'" class="vjs-control-text">Beginning of dialog window. Escape will cancel and close the window.</div>\n      <div class="vjs-tracksettings">\n        <div class="vjs-tracksettings-colors">\n          <fieldset class="vjs-fg-color vjs-tracksetting">\n            <legend>Text</legend>\n            <label class="vjs-label" for="captions-foreground-color-'+a+'">Color</label>\n            <select id="captions-foreground-color-'+a+'">\n              <option value="#FFF" selected>White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-foreground-opacity-'+a+'">Transparency</label>\n              <select id="captions-foreground-opacity-'+a+'">\n                <option value="1" selected>Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n          </fieldset>\n          <fieldset class="vjs-bg-color vjs-tracksetting">\n            <legend>Background</legend>\n            <label class="vjs-label" for="captions-background-color-'+a+'">Color</label>\n            <select id="captions-background-color-'+a+'">\n              <option value="#000" selected>Black</option>\n              <option value="#FFF">White</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-background-opacity-'+a+'">Transparency</label>\n              <select id="captions-background-opacity-'+a+'">\n                <option value="1" selected>Opaque</option>\n                <option value="0.5">Semi-Transparent</option>\n                <option value="0">Transparent</option>\n              </select>\n            </span>\n          </fieldset>\n          <fieldset class="window-color vjs-tracksetting">\n            <legend>Window</legend>\n            <label class="vjs-label" for="captions-window-color-'+a+'">Color</label>\n            <select id="captions-window-color-'+a+'">\n              <option value="#000" selected>Black</option>\n              <option value="#FFF">White</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-window-opacity-'+a+'">Transparency</label>\n              <select id="captions-window-opacity-'+a+'">\n                <option value="0" selected>Transparent</option>\n                <option value="0.5">Semi-Transparent</option>\n                <option value="1">Opaque</option>\n              </select>\n            </span>\n          </fieldset>\n        </div> <!-- vjs-tracksettings-colors -->\n        <div class="vjs-tracksettings-font">\n          <div class="vjs-font-percent vjs-tracksetting">\n            <label class="vjs-label" for="captions-font-size-'+a+'">Font Size</label>\n            <select id="captions-font-size-'+a+'">\n              <option value="0.50">50%</option>\n              <option value="0.75">75%</option>\n              <option value="1.00" selected>100%</option>\n              <option value="1.25">125%</option>\n              <option value="1.50">150%</option>\n              <option value="1.75">175%</option>\n              <option value="2.00">200%</option>\n              <option value="3.00">300%</option>\n              <option value="4.00">400%</option>\n            </select>\n          </div>\n          <div class="vjs-edge-style vjs-tracksetting">\n            <label class="vjs-label" for="captions-edge-style-'+a+'">Text Edge Style</label>\n            <select id="captions-edge-style-'+a+'">\n              <option value="none" selected>None</option>\n              <option value="raised">Raised</option>\n              <option value="depressed">Depressed</option>\n              <option value="uniform">Uniform</option>\n              <option value="dropshadow">Dropshadow</option>\n            </select>\n          </div>\n          <div class="vjs-font-family vjs-tracksetting">\n            <label class="vjs-label" for="captions-font-family-'+a+'">Font Family</label>\n            <select id="captions-font-family-'+a+'">\n              <option value="proportionalSansSerif" selected>Proportional Sans-Serif</option>\n              <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n              <option value="proportionalSerif">Proportional Serif</option>\n              <option value="monospaceSerif">Monospace Serif</option>\n              <option value="casual">Casual</option>\n              <option value="script">Script</option>\n              <option value="small-caps">Small Caps</option>\n            </select>\n          </div>\n        </div> <!-- vjs-tracksettings-font -->\n        <div class="vjs-tracksettings-controls">\n          <button class="vjs-default-button">Defaults</button>\n          <button class="vjs-done-button">Done</button>\n        </div>\n      </div> <!-- vjs-tracksettings -->\n    </div> <!--  role="document" -->\n  ';return d}function j(a){var b=void 0;return a.selectedOptions?b=a.selectedOptions[0]:a.options&&(b=a.options[a.options.selectedIndex]),b.value}function k(a,b){if(b){var c=void 0;for(c=0;c<a.options.length;c++){var d=a.options[c];if(d.value===b)break}a.selectedIndex=c}}c.__esModule=!0;var l=a(5),m=e(l),n=a(81),o=d(n),p=a(82),q=d(p),r=a(85),s=e(r),t=a(145),u=e(t),v=a(93),w=e(v),x=function(a){function b(c,d){f(this,b);var e=g(this,a.call(this,c,d));return e.hide(),void 0===d.persistTextTrackSettings&&(e.options_.persistTextTrackSettings=e.options_.playerOptions.persistTextTrackSettings),o.on(e.$(".vjs-done-button"),"click",q.bind(e,function(){this.saveSettings(),this.hide()})),o.on(e.$(".vjs-default-button"),"click",q.bind(e,function(){this.$(".vjs-fg-color > select").selectedIndex=0,this.$(".vjs-bg-color > select").selectedIndex=0,this.$(".window-color > select").selectedIndex=0,this.$(".vjs-text-opacity > select").selectedIndex=0,this.$(".vjs-bg-opacity > select").selectedIndex=0,this.$(".vjs-window-opacity > select").selectedIndex=0,this.$(".vjs-edge-style select").selectedIndex=0,this.$(".vjs-font-family select").selectedIndex=0,this.$(".vjs-font-percent select").selectedIndex=2,this.updateDisplay()})),o.on(e.$(".vjs-fg-color > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-bg-color > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".window-color > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-text-opacity > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-bg-opacity > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-window-opacity > select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-font-percent select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-edge-style select"),"change",q.bind(e,e.updateDisplay)),o.on(e.$(".vjs-font-family select"),"change",q.bind(e,e.updateDisplay)),e.options_.persistTextTrackSettings&&e.restoreSettings(),e}return h(b,a),b.prototype.createEl=function(){var b=this.id_,c="TTsettingsDialogLabel-"+b,d="TTsettingsDialogDescription-"+b;return a.prototype.createEl.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:i(b,c,d),tabIndex:-1},{role:"dialog","aria-labelledby":c,"aria-describedby":d})},b.prototype.getValues=function(){var a=j(this.$(".vjs-edge-style select")),b=j(this.$(".vjs-font-family select")),c=j(this.$(".vjs-fg-color > select")),d=j(this.$(".vjs-text-opacity > select")),e=j(this.$(".vjs-bg-color > select")),f=j(this.$(".vjs-bg-opacity > select")),g=j(this.$(".window-color > select")),h=j(this.$(".vjs-window-opacity > select")),i=w["default"].parseFloat(j(this.$(".vjs-font-percent > select"))),k={fontPercent:i,fontFamily:b,textOpacity:d,windowColor:g,windowOpacity:h,backgroundOpacity:f,edgeStyle:a,color:c,backgroundColor:e};for(var l in k)(""===k[l]||"none"===k[l]||"fontPercent"===l&&1===k[l])&&delete k[l];return k},b.prototype.setValues=function(a){k(this.$(".vjs-edge-style select"),a.edgeStyle),k(this.$(".vjs-font-family select"),a.fontFamily),k(this.$(".vjs-fg-color > select"),a.color),k(this.$(".vjs-text-opacity > select"),a.textOpacity),k(this.$(".vjs-bg-color > select"),a.backgroundColor),k(this.$(".vjs-bg-opacity > select"),a.backgroundOpacity),k(this.$(".window-color > select"),a.windowColor),k(this.$(".vjs-window-opacity > select"),a.windowOpacity);var b=a.fontPercent;b&&(b=b.toFixed(2)),k(this.$(".vjs-font-percent > select"),b)},b.prototype.restoreSettings=function(){var a=void 0,b=void 0;try{var c=(0,u["default"])(w["default"].localStorage.getItem("vjs-text-track-settings"));a=c[0],b=c[1],a&&s["default"].error(a)}catch(d){s["default"].warn(d)}b&&this.setValues(b)},b.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var a=this.getValues();try{Object.getOwnPropertyNames(a).length>0?w["default"].localStorage.setItem("vjs-text-track-settings",JSON.stringify(a)):w["default"].localStorage.removeItem("vjs-text-track-settings")}catch(b){s["default"].warn(b)}}},b.prototype.updateDisplay=function(){var a=this.player_.getChild("textTrackDisplay");a&&a.updateDisplay()},b}(m["default"]);m["default"].registerComponent("TextTrackSettings",x),c["default"]=x},{145:145,5:5,81:81,82:82,85:85,93:93}],72:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(67),j=e(i),k=a(82),l=d(k),m=a(73),n=a(85),o=e(n),p=a(93),q=e(p),r=a(75),s=e(r),t=a(90),u=a(147),v=e(u),w=a(86),x=e(w),y=a(78),z=d(y),A=function(a,b){var c=new q["default"].WebVTT.Parser(q["default"],q["default"].vttjs,q["default"].WebVTT.StringDecoder()),d=[];c.oncue=function(a){b.addCue(a)},c.onparsingerror=function(a){d.push(a)},c.onflush=function(){b.trigger({type:"loadeddata",target:b})},c.parse(a),d.length>0&&(q["default"].console&&q["default"].console.groupCollapsed&&q["default"].console.groupCollapsed("Text Track parsing errors for "+b.src),d.forEach(function(a){return o["default"].error(a)}),q["default"].console&&q["default"].console.groupEnd&&q["default"].console.groupEnd()),c.flush()},B=function(a,b){var c={uri:a},d=(0,t.isCrossOrigin)(a);d&&(c.cors=d),(0,v["default"])(c,l.bind(this,function(a,c,d){return a?o["default"].error(a,c):(b.loaded_=!0,void("function"!=typeof q["default"].WebVTT?b.tech_&&!function(){var a=function(){return A(d,b)};b.tech_.on("vttjsloaded",a),b.tech_.on("vttjserror",function(){o["default"].error("vttjs failed to load, stopping trying to process "+b.src),b.tech_.off("vttjsloaded",a)})}():A(d,b)))}))},C=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(f(this,b),!e.tech)throw new Error("A tech was not provided.");var h=(0,x["default"])(e,{kind:m.TextTrackKind[e.kind]||"subtitles",language:e.language||e.srclang||""}),i=m.TextTrackMode[h.mode]||"disabled",k=h["default"];"metadata"!==h.kind&&"chapters"!==h.kind||(i="hidden");var n=c=g(this,a.call(this,h));if(n.tech_=h.tech,z.IS_IE8)for(var o in b.prototype)"constructor"!==o&&(n[o]=b.prototype[o]);n.cues_=[],n.activeCues_=[];var p=new j["default"](n.cues_),q=new j["default"](n.activeCues_),r=!1,s=l.bind(n,function(){
this.activeCues,r&&(this.trigger("cuechange"),r=!1)});return"disabled"!==i&&n.tech_.on("timeupdate",s),Object.defineProperty(n,"default",{get:function(){return k},set:function(){}}),Object.defineProperty(n,"mode",{get:function(){return i},set:function(a){m.TextTrackMode[a]&&(i=a,"showing"===i&&this.tech_.on("timeupdate",s),this.trigger("modechange"))}}),Object.defineProperty(n,"cues",{get:function(){return this.loaded_?p:null},set:function(){}}),Object.defineProperty(n,"activeCues",{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return q;for(var a=this.tech_.currentTime(),b=[],c=0,d=this.cues.length;c<d;c++){var e=this.cues[c];e.startTime<=a&&e.endTime>=a?b.push(e):e.startTime===e.endTime&&e.startTime<=a&&e.startTime+.5>=a&&b.push(e)}if(r=!1,b.length!==this.activeCues_.length)r=!0;else for(var f=0;f<b.length;f++)this.activeCues_.indexOf(b[f])===-1&&(r=!0);return this.activeCues_=b,q.setCues_(this.activeCues_),q},set:function(){}}),h.src?(n.src=h.src,B(h.src,n)):n.loaded_=!0,d=n,g(c,d)}return h(b,a),b.prototype.addCue=function(a){var b=this.tech_.textTracks();if(b)for(var c=0;c<b.length;c++)b[c]!==this&&b[c].removeCue(a);this.cues_.push(a),this.cues.setCues_(this.cues_)},b.prototype.removeCue=function(a){for(var b=!1,c=0,d=this.cues_.length;c<d;c++){var e=this.cues_[c];e===a&&(this.cues_.splice(c,1),b=!0)}b&&this.cues.setCues_(this.cues_)},b}(s["default"]);C.prototype.allowedEvents_={cuechange:"cuechange"},c["default"]=C},{147:147,67:67,73:73,75:75,78:78,82:82,85:85,86:86,90:90,93:93}],73:[function(a,b,c){"use strict";c.__esModule=!0;c.VideoTrackKind={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},c.AudioTrackKind={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},c.TextTrackKind={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},c.TextTrackMode={disabled:"disabled",hidden:"hidden",showing:"showing"}},{}],74:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(42),j=e(i),k=a(78),l=d(k),m=a(92),n=e(m),o=function(a){function b(){var c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;f(this,b);var h=g(this,a.call(this));if(!e&&(e=h,l.IS_IE8)){e=n["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(e[i]=b.prototype[i])}e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var j=0;j<d.length;j++)e.addTrack_(d[j]);return c=e,g(h,c)}return h(b,a),b.prototype.addTrack_=function(a){var b=this.tracks_.length;""+b in this||Object.defineProperty(this,b,{get:function(){return this.tracks_[b]}}),this.tracks_.indexOf(a)===-1&&(this.tracks_.push(a),this.trigger({track:a,type:"addtrack"}))},b.prototype.removeTrack_=function(a){for(var b=void 0,c=0,d=this.length;c<d;c++)if(this[c]===a){b=this[c],b.off&&b.off(),this.tracks_.splice(c,1);break}b&&this.trigger({track:b,type:"removetrack"})},b.prototype.getTrackById=function(a){for(var b=null,c=0,d=this.length;c<d;c++){var e=this[c];if(e.id===a){b=e;break}}return b},b}(j["default"]);o.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var p in o.prototype.allowedEvents_)o.prototype["on"+p]=null;c["default"]=o},{42:42,78:78,92:92}],75:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(78),j=e(i),k=a(92),l=d(k),m=a(84),n=e(m),o=a(42),p=d(o),q=function(a){function b(){var c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var e=g(this,a.call(this)),h=e;if(j.IS_IE8){h=l["default"].createElement("custom");for(var i in b.prototype)"constructor"!==i&&(h[i]=b.prototype[i])}var k={id:d.id||"vjs_track_"+n.newGUID(),kind:d.kind||"",label:d.label||"",language:d.language||""},m=function(a){Object.defineProperty(h,a,{get:function(){return k[a]},set:function(){}})};for(var o in k)m(o);return c=h,g(e,c)}return h(b,a),b}(p["default"]);c["default"]=q},{42:42,78:78,84:84,92:92}],76:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(74),j=e(i),k=a(78),l=d(k),m=a(92),n=e(m),o=function(a,b){for(var c=0;c<a.length;c++)b.id!==a[c].id&&(a[c].selected=!1)},p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];f(this,b);for(var h=void 0,i=e.length-1;i>=0;i--)if(e[i].selected){o(e,e[i]);break}if(l.IS_IE8){h=n["default"].createElement("custom");for(var k in j["default"].prototype)"constructor"!==k&&(h[k]=j["default"].prototype[k]);for(var m in b.prototype)"constructor"!==m&&(h[m]=b.prototype[m])}return h=c=g(this,a.call(this,e,h)),h.changing_=!1,Object.defineProperty(h,"selectedIndex",{get:function(){for(var a=0;a<this.length;a++)if(this[a].selected)return a;return-1},set:function(){}}),d=h,g(c,d)}return h(b,a),b.prototype.addTrack_=function(b){var c=this;b.selected&&o(this,b),a.prototype.addTrack_.call(this,b),b.addEventListener&&b.addEventListener("selectedchange",function(){c.changing_||(c.changing_=!0,o(c,b),c.changing_=!1,c.trigger("change"))})},b.prototype.addTrack=function(a){this.addTrack_(a)},b.prototype.removeTrack=function(b){a.prototype.removeTrack_.call(this,b)},b}(j["default"]);c["default"]=p},{74:74,78:78,92:92}],77:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}c.__esModule=!0;var i=a(73),j=a(75),k=e(j),l=a(86),m=e(l),n=a(78),o=d(n),p=function(a){function b(){var c,d,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,b);var h=(0,m["default"])(e,{kind:i.VideoTrackKind[e.kind]||""}),j=c=g(this,a.call(this,h)),k=!1;if(o.IS_IE8)for(var l in b.prototype)"constructor"!==l&&(j[l]=b.prototype[l]);return Object.defineProperty(j,"selected",{get:function(){return k},set:function(a){"boolean"==typeof a&&a!==k&&(k=a,this.trigger("selectedchange"))}}),h.selected&&(j.selected=h.selected),d=j,g(c,d)}return h(b,a),b}(k["default"]);c["default"]=p},{73:73,75:75,78:78,86:86}],78:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.BACKGROUND_SIZE_SUPPORTED=c.TOUCH_ENABLED=c.IE_VERSION=c.IS_IE8=c.IS_CHROME=c.IS_EDGE=c.IS_FIREFOX=c.IS_NATIVE_ANDROID=c.IS_OLD_ANDROID=c.ANDROID_VERSION=c.IS_ANDROID=c.IOS_VERSION=c.IS_IOS=c.IS_IPOD=c.IS_IPHONE=c.IS_IPAD=void 0;var e=a(92),f=d(e),g=a(93),h=d(g),i=h["default"].navigator&&h["default"].navigator.userAgent||"",j=/AppleWebKit\/([\d.]+)/i.exec(i),k=j?parseFloat(j.pop()):null,l=c.IS_IPAD=/iPad/i.test(i),m=c.IS_IPHONE=/iPhone/i.test(i)&&!l,n=c.IS_IPOD=/iPod/i.test(i),o=(c.IS_IOS=m||l||n,c.IOS_VERSION=function(){var a=i.match(/OS (\d+)_/i);return a&&a[1]?a[1]:null}(),c.IS_ANDROID=/Android/i.test(i)),p=c.ANDROID_VERSION=function(){var a=i.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!a)return null;var b=a[1]&&parseFloat(a[1]),c=a[2]&&parseFloat(a[2]);return b&&c?parseFloat(a[1]+"."+a[2]):b?b:null}(),q=(c.IS_OLD_ANDROID=o&&/webkit/i.test(i)&&p<2.3,c.IS_NATIVE_ANDROID=o&&p<5&&k<537,c.IS_FIREFOX=/Firefox/i.test(i),c.IS_EDGE=/Edge/i.test(i));c.IS_CHROME=!q&&/Chrome/i.test(i),c.IS_IE8=/MSIE\s8\.0/.test(i),c.IE_VERSION=function(a){return a&&parseFloat(a[1])}(/MSIE\s(\d+)\.\d/.exec(i)),c.TOUCH_ENABLED=!!("ontouchstart"in h["default"]||h["default"].DocumentTouch&&f["default"]instanceof h["default"].DocumentTouch),c.BACKGROUND_SIZE_SUPPORTED="backgroundSize"in f["default"].createElement("video").style},{92:92,93:93}],79:[function(a,b,c){"use strict";function d(a,b){var c=0,d=void 0,f=void 0;if(!b)return 0;a&&a.length||(a=(0,e.createTimeRange)(0,0));for(var g=0;g<a.length;g++)d=a.start(g),f=a.end(g),f>b&&(f=b),c+=f-d;return c/b}c.__esModule=!0,c.bufferedPercent=d;var e=a(88)},{88:88}],80:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){return a.raw=b,a}function g(a){return"string"==typeof a&&/\S/.test(a)}function h(a){if(/\s/.test(a))throw new Error("class has illegal whitespace characters")}function i(a){return new RegExp("(^|\\s)"+a+"($|\\s)")}function j(a){return!!a&&"object"===("undefined"==typeof a?"undefined":H(a))&&1===a.nodeType}function k(a){return function(b,c){if(!g(b))return K["default"][a](null);g(c)&&(c=K["default"].querySelector(c));var d=j(c)?c:K["default"];return d[a]&&d[a](b)}}function l(a){return 0===a.indexOf("#")&&(a=a.slice(1)),K["default"].getElementById(a)}function m(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=K["default"].createElement(a);return Object.getOwnPropertyNames(b).forEach(function(a){var c=b[a];a.indexOf("aria-")!==-1||"role"===a||"type"===a?(Q["default"].warn((0,S["default"])(I,a,c)),d.setAttribute(a,c)):d[a]=c}),Object.getOwnPropertyNames(c).forEach(function(a){d.setAttribute(a,c[a])}),d}function n(a,b){"undefined"==typeof a.textContent?a.innerText=b:a.textContent=b}function o(a,b){b.firstChild?b.insertBefore(a,b.firstChild):b.appendChild(a)}function p(a){var b=a[U];return b||(b=a[U]=O.newGUID()),T[b]||(T[b]={}),T[b]}function q(a){var b=a[U];return!!b&&!!Object.getOwnPropertyNames(T[b]).length}function r(a){var b=a[U];if(b){delete T[b];try{delete a[U]}catch(c){a.removeAttribute?a.removeAttribute(U):a[U]=null}}}function s(a,b){return h(b),a.classList?a.classList.contains(b):i(b).test(a.className)}function t(a,b){return a.classList?a.classList.add(b):s(a,b)||(a.className=(a.className+" "+b).trim()),a}function u(a,b){return a.classList?a.classList.remove(b):(h(b),a.className=a.className.split(/\s+/).filter(function(a){return a!==b}).join(" ")),a}function v(a,b,c){var d=s(a,b);if("function"==typeof c&&(c=c(a,b)),"boolean"!=typeof c&&(c=!d),c!==d)return c?t(a,b):u(a,b),a}function w(a,b){Object.getOwnPropertyNames(b).forEach(function(c){var d=b[c];null===d||"undefined"==typeof d||d===!1?a.removeAttribute(c):a.setAttribute(c,d===!0?"":d)})}function x(a){var b={},c=",autoplay,controls,loop,muted,default,";if(a&&a.attributes&&a.attributes.length>0)for(var d=a.attributes,e=d.length-1;e>=0;e--){var f=d[e].name,g=d[e].value;"boolean"!=typeof a[f]&&c.indexOf(","+f+",")===-1||(g=null!==g),b[f]=g}return b}function y(){K["default"].body.focus(),K["default"].onselectstart=function(){return!1}}function z(){K["default"].onselectstart=function(){return!0}}function A(a){var b=void 0;if(a.getBoundingClientRect&&a.parentNode&&(b=a.getBoundingClientRect()),!b)return{left:0,top:0};var c=K["default"].documentElement,d=K["default"].body,e=c.clientLeft||d.clientLeft||0,f=M["default"].pageXOffset||d.scrollLeft,g=b.left+f-e,h=c.clientTop||d.clientTop||0,i=M["default"].pageYOffset||d.scrollTop,j=b.top+i-h;return{left:Math.round(g),top:Math.round(j)}}function B(a,b){var c={},d=A(a),e=a.offsetWidth,f=a.offsetHeight,g=d.top,h=d.left,i=b.pageY,j=b.pageX;return b.changedTouches&&(j=b.changedTouches[0].pageX,i=b.changedTouches[0].pageY),c.y=Math.max(0,Math.min(1,(g-i+f)/f)),c.x=Math.max(0,Math.min(1,(j-h)/e)),c}function C(a){return!!a&&"object"===("undefined"==typeof a?"undefined":H(a))&&3===a.nodeType}function D(a){for(;a.firstChild;)a.removeChild(a.firstChild);return a}function E(a){return"function"==typeof a&&(a=a()),(Array.isArray(a)?a:[a]).map(function(a){return"function"==typeof a&&(a=a()),j(a)||C(a)?a:"string"==typeof a&&/\S/.test(a)?K["default"].createTextNode(a):void 0}).filter(function(a){return a})}function F(a,b){return E(b).forEach(function(b){return a.appendChild(b)}),a}function G(a,b){return F(D(a),b)}c.__esModule=!0,c.$$=c.$=void 0;var H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I=f(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);c.isEl=j,c.getEl=l,c.createEl=m,c.textContent=n,c.insertElFirst=o,c.getElData=p,c.hasElData=q,c.removeElData=r,c.hasElClass=s,c.addElClass=t,c.removeElClass=u,c.toggleElClass=v,c.setElAttributes=w,c.getElAttributes=x,c.blockTextSelection=y,c.unblockTextSelection=z,c.findElPosition=A,c.getPointerPosition=B,c.isTextNode=C,c.emptyEl=D,c.normalizeContent=E,c.appendContent=F,c.insertContent=G;var J=a(92),K=e(J),L=a(93),M=e(L),N=a(84),O=d(N),P=a(85),Q=e(P),R=a(146),S=e(R),T={},U="vdata"+(new Date).getTime();c.$=k("querySelector"),c.$$=k("querySelectorAll")},{146:146,84:84,85:85,92:92,93:93}],81:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a,b){var c=n.getElData(a);0===c.handlers[b].length&&(delete c.handlers[b],a.removeEventListener?a.removeEventListener(b,c.dispatcher,!1):a.detachEvent&&a.detachEvent("on"+b,c.dispatcher)),Object.getOwnPropertyNames(c.handlers).length<=0&&(delete c.handlers,delete c.dispatcher,delete c.disabled),0===Object.getOwnPropertyNames(c).length&&n.removeElData(a)}function g(a,b,c,d){c.forEach(function(c){a(b,c,d)})}function h(a){function b(){return!0}function c(){return!1}return a&&a.isPropagationStopped||!function(){var d=a||t["default"].event;a={};for(var e in d)"layerX"!==e&&"layerY"!==e&&"keyLocation"!==e&&"webkitMovementX"!==e&&"webkitMovementY"!==e&&("returnValue"===e&&d.preventDefault||(a[e]=d[e]));if(a.target||(a.target=a.srcElement||v["default"]),a.relatedTarget||(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement),a.preventDefault=function(){d.preventDefault&&d.preventDefault(),a.returnValue=!1,d.returnValue=!1,a.defaultPrevented=!0},a.defaultPrevented=!1,a.stopPropagation=function(){d.stopPropagation&&d.stopPropagation(),a.cancelBubble=!0,d.cancelBubble=!0,a.isPropagationStopped=b},a.isPropagationStopped=c,a.stopImmediatePropagation=function(){d.stopImmediatePropagation&&d.stopImmediatePropagation(),a.isImmediatePropagationStopped=b,a.stopPropagation()},a.isImmediatePropagationStopped=c,null!==a.clientX&&void 0!==a.clientX){var f=v["default"].documentElement,g=v["default"].body;a.pageX=a.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=a.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)}a.which=a.charCode||a.keyCode,null!==a.button&&void 0!==a.button&&(a.button=1&a.button?0:4&a.button?1:2&a.button?2:0)}(),a}function i(a,b,c){if(Array.isArray(b))return g(i,a,b,c);var d=n.getElData(a);d.handlers||(d.handlers={}),d.handlers[b]||(d.handlers[b]=[]),c.guid||(c.guid=p.newGUID()),d.handlers[b].push(c),d.dispatcher||(d.disabled=!1,d.dispatcher=function(b,c){if(!d.disabled){b=h(b);var e=d.handlers[b.type];if(e)for(var f=e.slice(0),g=0,i=f.length;g<i&&!b.isImmediatePropagationStopped();g++)try{f[g].call(a,b,c)}catch(j){r["default"].error(j)}}}),1===d.handlers[b].length&&(a.addEventListener?a.addEventListener(b,d.dispatcher,!1):a.attachEvent&&a.attachEvent("on"+b,d.dispatcher))}function j(a,b,c){if(n.hasElData(a)){var d=n.getElData(a);if(d.handlers){if(Array.isArray(b))return g(j,a,b,c);var e=function(b){d.handlers[b]=[],f(a,b)};if(b){var h=d.handlers[b];if(h){if(!c)return void e(b);if(c.guid)for(var i=0;i<h.length;i++)h[i].guid===c.guid&&h.splice(i--,1);f(a,b)}}else for(var k in d.handlers)e(k)}}}function k(a,b,c){var d=n.hasElData(a)?n.getElData(a):{},e=a.parentNode||a.ownerDocument;if("string"==typeof b&&(b={type:b,target:a}),b=h(b),d.dispatcher&&d.dispatcher.call(a,b,c),e&&!b.isPropagationStopped()&&b.bubbles===!0)k.call(null,e,b,c);else if(!e&&!b.defaultPrevented){var f=n.getElData(b.target);b.target[b.type]&&(f.disabled=!0,"function"==typeof b.target[b.type]&&b.target[b.type](),f.disabled=!1)}return!b.defaultPrevented}function l(a,b,c){if(Array.isArray(b))return g(l,a,b,c);var d=function e(){j(a,b,e),c.apply(this,arguments)};d.guid=c.guid=c.guid||p.newGUID(),i(a,b,d)}c.__esModule=!0,c.fixEvent=h,c.on=i,c.off=j,c.trigger=k,c.one=l;var m=a(80),n=e(m),o=a(84),p=e(o),q=a(85),r=d(q),s=a(93),t=d(s),u=a(92),v=d(u)},{80:80,84:84,85:85,92:92,93:93}],82:[function(a,b,c){"use strict";c.__esModule=!0,c.bind=void 0;var d=a(84);c.bind=function(a,b,c){b.guid||(b.guid=(0,d.newGUID)());var e=function(){return b.apply(a,arguments)};return e.guid=c?c+"_"+b.guid:b.guid,e}},{84:84}],83:[function(a,b,c){"use strict";function d(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;a=a<0?0:a;var c=Math.floor(a%60),d=Math.floor(a/60%60),e=Math.floor(a/3600),f=Math.floor(b/60%60),g=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(e=d=c="-"),e=e>0||g>0?e+":":"",d=((e||f>=10)&&d<10?"0"+d:d)+":",c=c<10?"0"+c:c,e+d+c}c.__esModule=!0,c["default"]=d},{}],84:[function(a,b,c){"use strict";function d(){return e++}c.__esModule=!0,c.newGUID=d;var e=1},{}],85:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.logByType=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(93),g=d(f),h=a(78),i=void 0,j=c.logByType=function(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!!h.IE_VERSION&&h.IE_VERSION<11;"log"!==a&&b.unshift(a.toUpperCase()+":"),i.history.push(b),b.unshift("VIDEOJS:");var d=g["default"].console&&g["default"].console[a];d&&(c&&(b=b.map(function(a){if(a&&"object"===("undefined"==typeof a?"undefined":e(a))||Array.isArray(a))try{return JSON.stringify(a)}catch(b){return String(a)}return String(a)}).join(" ")),d.apply?d[Array.isArray(b)?"apply":"call"](g["default"].console,b):d(b))};i=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];j("log",b)},i.history=[],i.error=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return j("error",b)},i.warn=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return j("warn",b)},c["default"]=i},{78:78,93:93}],86:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){return!!a&&"object"===("undefined"==typeof a?"undefined":h(a))&&"[object Object]"===a.toString()&&a.constructor===Object}function f(a,b){return e(b)?e(a)?void 0:g(b):b}function g(){var a=Array.prototype.slice.call(arguments);return a.unshift({}),a.push(f),j["default"].apply(null,a),a[0]}c.__esModule=!0;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};c["default"]=g;var i=a(131),j=d(i)},{131:131}],87:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.setTextContent=c.createStyleElement=void 0;var e=a(92),f=d(e);c.createStyleElement=function(a){var b=f["default"].createElement("style");return b.className=a,b},c.setTextContent=function(a,b){a.styleSheet?a.styleSheet.cssText=b:a.textContent=b}},{92:92}],88:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b,c){if(b<0||b>c)throw new Error("Failed to execute '"+a+"' on 'TimeRanges': The index provided ("+b+") is greater than or equal to the maximum bound ("+c+").")}function f(a,b,c,d){return void 0===d&&(j["default"].warn("DEPRECATED: Function '"+a+"' on 'TimeRanges' called without an index argument."),d=0),e(a,d,c.length-1),c[d][b]}function g(a){return void 0===a||0===a.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:a.length,start:f.bind(null,"start",0,a),end:f.bind(null,"end",1,a)}}function h(a,b){return Array.isArray(a)?g(a):void 0===a||void 0===b?g():g([[a,b]])}c.__esModule=!0,c.createTimeRange=void 0,c.createTimeRanges=h;var i=a(85),j=d(i);c.createTimeRange=h},{85:85}],89:[function(a,b,c){"use strict";function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}c.__esModule=!0,c["default"]=d},{}],90:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0,c.isCrossOrigin=c.getFileExtension=c.getAbsoluteURL=c.parseUrl=void 0;var e=a(92),f=d(e),g=a(93),h=d(g),i=c.parseUrl=function(a){var b=["protocol","hostname","port","pathname","search","hash","host"],c=f["default"].createElement("a");c.href=a;var d=""===c.host&&"file:"!==c.protocol,e=void 0;d&&(e=f["default"].createElement("div"),e.innerHTML='<a href="'+a+'"></a>',c=e.firstChild,e.setAttribute("style","display:none; position:absolute;"),f["default"].body.appendChild(e));for(var g={},h=0;h<b.length;h++)g[b[h]]=c[b[h]];return"http:"===g.protocol&&(g.host=g.host.replace(/:80$/,"")),"https:"===g.protocol&&(g.host=g.host.replace(/:443$/,"")),d&&f["default"].body.removeChild(e),g};c.getAbsoluteURL=function(a){if(!a.match(/^https?:\/\//)){var b=f["default"].createElement("div");b.innerHTML='<a href="'+a+'">x</a>',a=b.firstChild.href}return a},c.getFileExtension=function(a){if("string"==typeof a){var b=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,c=b.exec(a);if(c)return c.pop().toLowerCase()}return""},c.isCrossOrigin=function(a){var b=h["default"].location,c=i(a),d=":"===c.protocol?b.protocol:c.protocol,e=d+c.host!==b.protocol+b.host;return e}},{92:92,93:93}],91:[function(b,c,d){"use strict";function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a){return a&&a.__esModule?a:{"default":a}}function g(a,b,c){var d=void 0;if("string"==typeof a){if(0===a.indexOf("#")&&(a=a.slice(1)),g.getPlayers()[a])return b&&O["default"].warn('Player "'+a+'" is already initialised. Options will not be applied.'),c&&g.getPlayers()[a].ready(c),g.getPlayers()[a];d=Q.getEl(a)}else d=a;if(!d||!d.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return d.player||x["default"].players[d.playerId]||new x["default"](d,b,c)}d.__esModule=!0;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i=b(93),j=f(i),k=b(92),l=f(k),m=b(56),n=e(m),o=b(87),p=e(o),q=b(5),r=f(q),s=b(42),t=f(s),u=b(81),v=e(u),w=b(51),x=f(w),y=b(52),z=f(y),A=b(86),B=f(A),C=b(82),D=e(C),E=b(72),F=f(E),G=b(64),H=f(G),I=b(77),J=f(I),K=b(88),L=b(83),M=f(L),N=b(85),O=f(N),P=b(80),Q=e(P),R=b(78),S=e(R),T=b(90),U=e(T),V=b(43),W=f(V),X=b(131),Y=f(X),Z=b(147),$=f(Z),_=b(62),aa=f(_);if("undefined"==typeof HTMLVideoElement&&j["default"].document&&j["default"].document.createElement&&(l["default"].createElement("video"),l["default"].createElement("audio"),l["default"].createElement("track")),j["default"].VIDEOJS_NO_DYNAMIC_STYLE!==!0){var ba=Q.$(".vjs-styles-defaults");if(!ba){ba=p.createStyleElement("vjs-styles-defaults");var ca=Q.$("head");ca&&ca.insertBefore(ba,ca.firstChild),p.setTextContent(ba,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}n.autoSetupTimeout(1,g),g.VERSION="5.12.6",g.options=x["default"].prototype.options_,g.getPlayers=function(){return x["default"].players},g.players=x["default"].players,g.getComponent=r["default"].getComponent,g.registerComponent=function(a,b){aa["default"].isTech(b)&&O["default"].warn("The "+a+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),r["default"].registerComponent.call(r["default"],a,b)},g.getTech=aa["default"].getTech,g.registerTech=aa["default"].registerTech,g.browser=S,g.TOUCH_ENABLED=S.TOUCH_ENABLED,g.extend=W["default"],g.mergeOptions=B["default"],g.bind=D.bind,g.plugin=z["default"],g.addLanguage=function(a,b){var c;return a=(""+a).toLowerCase(),(0,Y["default"])(g.options.languages,(c={},c[a]=b,c))[a]},g.log=O["default"],g.createTimeRange=g.createTimeRanges=K.createTimeRanges,g.formatTime=M["default"],g.parseUrl=U.parseUrl,g.isCrossOrigin=U.isCrossOrigin,g.EventTarget=t["default"],g.on=v.on,g.one=v.one,g.off=v.off,g.trigger=v.trigger,g.xhr=$["default"],g.TextTrack=F["default"],g.AudioTrack=H["default"],g.VideoTrack=J["default"],g.isEl=Q.isEl,g.isTextNode=Q.isTextNode,g.createEl=Q.createEl,g.hasClass=Q.hasElClass,g.addClass=Q.addElClass,g.removeClass=Q.removeElClass,g.toggleClass=Q.toggleElClass,g.setAttributes=Q.setElAttributes,g.getAttributes=Q.getElAttributes,g.emptyEl=Q.emptyEl,g.appendContent=Q.appendContent,g.insertContent=Q.insertContent,"function"==typeof a&&a.amd?a("videojs",[],function(){return g}):"object"===("undefined"==typeof d?"undefined":h(d))&&"object"===("undefined"==typeof c?"undefined":h(c))&&(c.exports=g),d["default"]=g},{131:131,147:147,42:42,43:43,5:5,51:51,52:52,56:56,62:62,64:64,72:72,77:77,78:78,80:80,81:81,82:82,83:83,85:85,86:86,87:87,88:88,90:90,92:92,93:93}],92:[function(a,b,c){(function(c){var d="undefined"!=typeof c?c:"undefined"!=typeof window?window:{},e=a(94);if("undefined"!=typeof document)b.exports=document;else{var f=d["__GLOBAL_DOCUMENT_CACHE@4"];f||(f=d["__GLOBAL_DOCUMENT_CACHE@4"]=e),b.exports=f}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{94:94}],93:[function(a,b,c){(function(a){"undefined"!=typeof window?b.exports=window:"undefined"!=typeof a?b.exports=a:"undefined"!=typeof self?b.exports=self:b.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],94:[function(a,b,c){},{}],95:[function(a,b,c){var d=a(111),e=d(Date,"now"),f=e||function(){return(new Date).getTime()};b.exports=f},{111:111}],96:[function(a,b,c){function d(a,b,c){function d(){r&&clearTimeout(r),n&&clearTimeout(n),t=0,n=r=s=void 0}function i(b,c){c&&clearTimeout(c),n=r=s=void 0,b&&(t=f(),o=a.apply(q,m),r||n||(m=q=void 0))}function j(){var a=b-(f()-p);a<=0||a>b?i(s,n):r=setTimeout(j,a)}function k(){i(v,r)}function l(){if(m=arguments,p=f(),q=this,s=v&&(r||!w),u===!1)var c=w&&!r;else{n||w||(t=p);var d=u-(p-t),e=d<=0||d>u;e?(n&&(n=clearTimeout(n)),t=p,o=a.apply(q,m)):n||(n=setTimeout(k,d))}return e&&r?r=clearTimeout(r):r||b===u||(r=setTimeout(j,b)),c&&(e=!0,o=a.apply(q,m)),!e||r||n||(m=q=void 0),o}var m,n,o,p,q,r,s,t=0,u=!1,v=!0;if("function"!=typeof a)throw new TypeError(g);if(b=b<0?0:+b||0,c===!0){var w=!0;v=!1}else e(c)&&(w=!!c.leading,u="maxWait"in c&&h(+c.maxWait||0,b),v="trailing"in c?!!c.trailing:v);return l.cancel=d,l}var e=a(124),f=a(95),g="Expected a function",h=Math.max;b.exports=d},{124:124,95:95}],97:[function(a,b,c){function d(a,b){if("function"!=typeof a)throw new TypeError(e);return b=f(void 0===b?a.length-1:+b||0,0),function(){for(var c=arguments,d=-1,e=f(c.length-b,0),g=Array(e);++d<e;)g[d]=c[b+d];switch(b){case 0:return a.call(this,g);case 1:return a.call(this,c[0],g);case 2:return a.call(this,c[0],c[1],g)}var h=Array(b+1);for(d=-1;++d<b;)h[d]=c[d];return h[b]=g,a.apply(this,h)}}var e="Expected a function",f=Math.max;b.exports=d},{}],98:[function(a,b,c){function d(a,b,c){var d=!0,h=!0;if("function"!=typeof a)throw new TypeError(g);return c===!1?d=!1:f(c)&&(d="leading"in c?!!c.leading:d,h="trailing"in c?!!c.trailing:h),e(a,b,{leading:d,maxWait:+b,trailing:h})}var e=a(96),f=a(124),g="Expected a function";b.exports=d},{124:124,96:96}],99:[function(a,b,c){function d(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}b.exports=d},{}],100:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}b.exports=d},{}],101:[function(a,b,c){function d(a,b,c){c||(c={});for(var d=-1,e=b.length;++d<e;){var f=b[d];c[f]=a[f]}return c}b.exports=d},{}],102:[function(a,b,c){var d=a(109),e=d();b.exports=e},{109:109}],103:[function(a,b,c){function d(a,b){return e(a,b,f)}var e=a(102),f=a(130);b.exports=d},{102:102,130:130}],104:[function(a,b,c){function d(a,b,c,m,n){if(!i(a))return a;var o=h(b)&&(g(b)||k(b)),p=o?void 0:l(b);return e(p||b,function(e,g){if(p&&(g=e,e=b[g]),j(e))m||(m=[]),n||(n=[]),f(a,b,g,d,c,m,n);else{var h=a[g],i=c?c(h,e,g,a,b):void 0,k=void 0===i;k&&(i=e),void 0===i&&(!o||g in a)||!k&&(i===i?i===h:h!==h)||(a[g]=i)}}),a}var e=a(100),f=a(105),g=a(121),h=a(112),i=a(124),j=a(117),k=a(127),l=a(129);b.exports=d},{100:100,105:105,112:112,117:117,
121:121,124:124,127:127,129:129}],105:[function(a,b,c){function d(a,b,c,d,l,m,n){for(var o=m.length,p=b[c];o--;)if(m[o]==p)return void(a[c]=n[o]);var q=a[c],r=l?l(q,p,c,a,b):void 0,s=void 0===r;s&&(r=p,h(p)&&(g(p)||j(p))?r=g(q)?q:h(q)?e(q):[]:i(p)||f(p)?r=f(q)?k(q):i(q)?q:{}:s=!1),m.push(p),n.push(r),s?a[c]=d(r,p,l,m,n):(r===r?r!==q:q===q)&&(a[c]=r)}var e=a(99),f=a(120),g=a(121),h=a(112),i=a(125),j=a(127),k=a(128);b.exports=d},{112:112,120:120,121:121,125:125,127:127,128:128,99:99}],106:[function(a,b,c){function d(a){return function(b){return null==b?void 0:e(b)[a]}}var e=a(119);b.exports=d},{119:119}],107:[function(a,b,c){function d(a,b,c){if("function"!=typeof a)return e;if(void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)};case 5:return function(c,d,e,f,g){return a.call(b,c,d,e,f,g)}}return function(){return a.apply(b,arguments)}}var e=a(133);b.exports=d},{133:133}],108:[function(a,b,c){function d(a){return g(function(b,c){var d=-1,g=null==b?0:c.length,h=g>2?c[g-2]:void 0,i=g>2?c[2]:void 0,j=g>1?c[g-1]:void 0;for("function"==typeof h?(h=e(h,j,5),g-=2):(h="function"==typeof j?j:void 0,g-=h?1:0),i&&f(c[0],c[1],i)&&(h=g<3?void 0:h,g=1);++d<g;){var k=c[d];k&&a(b,k,h)}return b})}var e=a(107),f=a(115),g=a(97);b.exports=d},{107:107,115:115,97:97}],109:[function(a,b,c){function d(a){return function(b,c,d){for(var f=e(b),g=d(b),h=g.length,i=a?h:-1;a?i--:++i<h;){var j=g[i];if(c(f[j],j,f)===!1)break}return b}}var e=a(119);b.exports=d},{119:119}],110:[function(a,b,c){var d=a(106),e=d("length");b.exports=e},{106:106}],111:[function(a,b,c){function d(a,b){var c=null==a?void 0:a[b];return e(c)?c:void 0}var e=a(123);b.exports=d},{123:123}],112:[function(a,b,c){function d(a){return null!=a&&f(e(a))}var e=a(110),f=a(116);b.exports=d},{110:110,116:116}],113:[function(a,b,c){var d=function(){try{Object({toString:0}+"")}catch(a){return function(){return!1}}return function(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}}();b.exports=d},{}],114:[function(a,b,c){function d(a,b){return a="number"==typeof a||e.test(a)?+a:-1,b=null==b?f:b,a>-1&&a%1==0&&a<b}var e=/^\d+$/,f=9007199254740991;b.exports=d},{}],115:[function(a,b,c){function d(a,b,c){if(!g(c))return!1;var d=typeof b;if("number"==d?e(c)&&f(b,c.length):"string"==d&&b in c){var h=c[b];return a===a?a===h:h!==h}return!1}var e=a(112),f=a(114),g=a(124);b.exports=d},{112:112,114:114,124:124}],116:[function(a,b,c){function d(a){return"number"==typeof a&&a>-1&&a%1==0&&a<=e}var e=9007199254740991;b.exports=d},{}],117:[function(a,b,c){function d(a){return!!a&&"object"==typeof a}b.exports=d},{}],118:[function(a,b,c){function d(a){for(var b=j(a),c=b.length,d=c&&a.length,k=!!d&&h(d)&&(f(a)||e(a)||i(a)),m=-1,n=[];++m<c;){var o=b[m];(k&&g(o,d)||l.call(a,o))&&n.push(o)}return n}var e=a(120),f=a(121),g=a(114),h=a(116),i=a(126),j=a(130),k=Object.prototype,l=k.hasOwnProperty;b.exports=d},{114:114,116:116,120:120,121:121,126:126,130:130}],119:[function(a,b,c){function d(a){if(g.unindexedChars&&f(a)){for(var b=-1,c=a.length,d=Object(a);++b<c;)d[b]=a.charAt(b);return d}return e(a)?a:Object(a)}var e=a(124),f=a(126),g=a(132);b.exports=d},{124:124,126:126,132:132}],120:[function(a,b,c){function d(a){return f(a)&&e(a)&&h.call(a,"callee")&&!i.call(a,"callee")}var e=a(112),f=a(117),g=Object.prototype,h=g.hasOwnProperty,i=g.propertyIsEnumerable;b.exports=d},{112:112,117:117}],121:[function(a,b,c){var d=a(111),e=a(116),f=a(117),g="[object Array]",h=Object.prototype,i=h.toString,j=d(Array,"isArray"),k=j||function(a){return f(a)&&e(a.length)&&i.call(a)==g};b.exports=k},{111:111,116:116,117:117}],122:[function(a,b,c){function d(a){return e(a)&&h.call(a)==f}var e=a(124),f="[object Function]",g=Object.prototype,h=g.toString;b.exports=d},{124:124}],123:[function(a,b,c){function d(a){return null!=a&&(e(a)?l.test(j.call(a)):g(a)&&(f(a)?l:h).test(a))}var e=a(122),f=a(113),g=a(117),h=/^\[object .+?Constructor\]$/,i=Object.prototype,j=Function.prototype.toString,k=i.hasOwnProperty,l=RegExp("^"+j.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");b.exports=d},{113:113,117:117,122:122}],124:[function(a,b,c){function d(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}b.exports=d},{}],125:[function(a,b,c){function d(a){var b;if(!h(a)||m.call(a)!=j||g(a)||f(a)||!l.call(a,"constructor")&&(b=a.constructor,"function"==typeof b&&!(b instanceof b)))return!1;var c;return i.ownLast?(e(a,function(a,b,d){return c=l.call(d,b),!1}),c!==!1):(e(a,function(a,b){c=b}),void 0===c||l.call(a,c))}var e=a(103),f=a(120),g=a(113),h=a(117),i=a(132),j="[object Object]",k=Object.prototype,l=k.hasOwnProperty,m=k.toString;b.exports=d},{103:103,113:113,117:117,120:120,132:132}],126:[function(a,b,c){function d(a){return"string"==typeof a||e(a)&&h.call(a)==f}var e=a(117),f="[object String]",g=Object.prototype,h=g.toString;b.exports=d},{117:117}],127:[function(a,b,c){function d(a){return f(a)&&e(a.length)&&!!D[F.call(a)]}var e=a(116),f=a(117),g="[object Arguments]",h="[object Array]",i="[object Boolean]",j="[object Date]",k="[object Error]",l="[object Function]",m="[object Map]",n="[object Number]",o="[object Object]",p="[object RegExp]",q="[object Set]",r="[object String]",s="[object WeakMap]",t="[object ArrayBuffer]",u="[object Float32Array]",v="[object Float64Array]",w="[object Int8Array]",x="[object Int16Array]",y="[object Int32Array]",z="[object Uint8Array]",A="[object Uint8ClampedArray]",B="[object Uint16Array]",C="[object Uint32Array]",D={};D[u]=D[v]=D[w]=D[x]=D[y]=D[z]=D[A]=D[B]=D[C]=!0,D[g]=D[h]=D[t]=D[i]=D[j]=D[k]=D[l]=D[m]=D[n]=D[o]=D[p]=D[q]=D[r]=D[s]=!1;var E=Object.prototype,F=E.toString;b.exports=d},{116:116,117:117}],128:[function(a,b,c){function d(a){return e(a,f(a))}var e=a(101),f=a(130);b.exports=d},{101:101,130:130}],129:[function(a,b,c){var d=a(111),e=a(112),f=a(124),g=a(118),h=a(132),i=d(Object,"keys"),j=i?function(a){var b=null==a?void 0:a.constructor;return"function"==typeof b&&b.prototype===a||("function"==typeof a?h.enumPrototypes:e(a))?g(a):f(a)?i(a):[]}:g;b.exports=j},{111:111,112:112,118:118,124:124,132:132}],130:[function(a,b,c){function d(a){if(null==a)return[];k(a)||(a=Object(a));var b=a.length;b=b&&j(b)&&(g(a)||f(a)||l(a))&&b||0;for(var c=a.constructor,d=-1,e=h(c)&&c.prototype||y,n=e===a,o=Array(b),p=b>0,r=m.enumErrorProps&&(a===x||a instanceof Error),s=m.enumPrototypes&&h(a);++d<b;)o[d]=d+"";for(var u in a)s&&"prototype"==u||r&&("message"==u||"name"==u)||p&&i(u,b)||"constructor"==u&&(n||!A.call(a,u))||o.push(u);if(m.nonEnumShadows&&a!==y){var D=a===z?v:a===x?q:B.call(a),E=C[D]||C[t];for(D==t&&(e=y),b=w.length;b--;){u=w[b];var F=E[u];n&&F||(F?!A.call(a,u):a[u]===e[u])||o.push(u)}}return o}var e=a(100),f=a(120),g=a(121),h=a(122),i=a(114),j=a(116),k=a(124),l=a(126),m=a(132),n="[object Array]",o="[object Boolean]",p="[object Date]",q="[object Error]",r="[object Function]",s="[object Number]",t="[object Object]",u="[object RegExp]",v="[object String]",w=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],x=Error.prototype,y=Object.prototype,z=String.prototype,A=y.hasOwnProperty,B=y.toString,C={};C[n]=C[p]=C[s]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},C[o]=C[v]={constructor:!0,toString:!0,valueOf:!0},C[q]=C[r]=C[u]={constructor:!0,toString:!0},C[t]={constructor:!0},e(w,function(a){for(var b in C)if(A.call(C,b)){var c=C[b];c[a]=A.call(c,a)}}),b.exports=d},{100:100,114:114,116:116,120:120,121:121,122:122,124:124,126:126,132:132}],131:[function(a,b,c){var d=a(104),e=a(108),f=e(d);b.exports=f},{104:104,108:108}],132:[function(a,b,c){var d=Array.prototype,e=Error.prototype,f=Object.prototype,g=f.propertyIsEnumerable,h=d.splice,i={};!function(a){var b=function(){this.x=a},c={0:a,length:a},d=[];b.prototype={valueOf:a,y:a};for(var f in new b)d.push(f);i.enumErrorProps=g.call(e,"message")||g.call(e,"name"),i.enumPrototypes=g.call(b,"prototype"),i.nonEnumShadows=!/valueOf/.test(d),i.ownLast="x"!=d[0],i.spliceObjects=(h.call(c,0,1),!c[0]),i.unindexedChars="x"[0]+Object("x")[0]!="xx"}(1,0),b.exports=i},{}],133:[function(a,b,c){function d(a){return a}b.exports=d},{}],134:[function(a,b,c){"use strict";var d=a(141);b.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var a={},b=Symbol("test"),c=Object(b);if("string"==typeof b)return!1;if("[object Symbol]"!==Object.prototype.toString.call(b))return!1;if("[object Symbol]"!==Object.prototype.toString.call(c))return!1;var e=42;a[b]=e;for(b in a)return!1;if(0!==d(a).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(a).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(a).length)return!1;var f=Object.getOwnPropertySymbols(a);if(1!==f.length||f[0]!==b)return!1;if(!Object.prototype.propertyIsEnumerable.call(a,b))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var g=Object.getOwnPropertyDescriptor(a,b);if(g.value!==e||g.enumerable!==!0)return!1}return!0}},{141:141}],135:[function(a,b,c){"use strict";var d=a(141),e=a(140),f=function(a){return"undefined"!=typeof a&&null!==a},g=a(134)(),h=Object,i=e.call(Function.call,Array.prototype.push),j=e.call(Function.call,Object.prototype.propertyIsEnumerable),k=g?Object.getOwnPropertySymbols:null;b.exports=function(a,b){if(!f(a))throw new TypeError("target must be an object");var c,e,l,m,n,o,p,q=h(a);for(c=1;c<arguments.length;++c){e=h(arguments[c]),m=d(e);var r=g&&(Object.getOwnPropertySymbols||k);if(r)for(n=r(e),l=0;l<n.length;++l)p=n[l],j(e,p)&&i(m,p);for(l=0;l<m.length;++l)p=m[l],o=e[p],j(e,p)&&(q[p]=o)}return q}},{134:134,140:140,141:141}],136:[function(a,b,c){"use strict";var d=a(137),e=a(135),f=a(143),g=a(144),h=f();d(h,{implementation:e,getPolyfill:f,shim:g}),b.exports=h},{135:135,137:137,143:143,144:144}],137:[function(a,b,c){"use strict";var d=a(141),e=a(138),f="function"==typeof Symbol&&"symbol"==typeof Symbol(),g=Object.prototype.toString,h=function(a){return"function"==typeof a&&"[object Function]"===g.call(a)},i=function(){var a={};try{Object.defineProperty(a,"x",{enumerable:!1,value:a});for(var b in a)return!1;return a.x===a}catch(c){return!1}},j=Object.defineProperty&&i(),k=function(a,b,c,d){(!(b in a)||h(d)&&d())&&(j?Object.defineProperty(a,b,{configurable:!0,enumerable:!1,value:c,writable:!0}):a[b]=c)},l=function(a,b){var c=arguments.length>2?arguments[2]:{},g=d(b);f&&(g=g.concat(Object.getOwnPropertySymbols(b))),e(g,function(d){k(a,d,b[d],c[d])})};l.supportsDescriptors=!!j,b.exports=l},{138:138,141:141}],138:[function(a,b,c){var d=Object.prototype.hasOwnProperty,e=Object.prototype.toString;b.exports=function(a,b,c){if("[object Function]"!==e.call(b))throw new TypeError("iterator must be a function");var f=a.length;if(f===+f)for(var g=0;g<f;g++)b.call(c,a[g],g,a);else for(var h in a)d.call(a,h)&&b.call(c,a[h],h,a)}},{}],139:[function(a,b,c){var d="Function.prototype.bind called on incompatible ",e=Array.prototype.slice,f=Object.prototype.toString,g="[object Function]";b.exports=function(a){var b=this;if("function"!=typeof b||f.call(b)!==g)throw new TypeError(d+b);for(var c,h=e.call(arguments,1),i=function(){if(this instanceof c){var d=b.apply(this,h.concat(e.call(arguments)));return Object(d)===d?d:this}return b.apply(a,h.concat(e.call(arguments)))},j=Math.max(0,b.length-h.length),k=[],l=0;l<j;l++)k.push("$"+l);if(c=Function("binder","return function ("+k.join(",")+"){ return binder.apply(this,arguments); }")(i),b.prototype){var m=function(){};m.prototype=b.prototype,c.prototype=new m,m.prototype=null}return c}},{}],140:[function(a,b,c){var d=a(139);b.exports=Function.prototype.bind||d},{139:139}],141:[function(a,b,c){"use strict";var d=Object.prototype.hasOwnProperty,e=Object.prototype.toString,f=Array.prototype.slice,g=a(142),h=Object.prototype.propertyIsEnumerable,i=!h.call({toString:null},"toString"),j=h.call(function(){},"prototype"),k=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(a){var b=a.constructor;return b&&b.prototype===a},m={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},n=function(){if("undefined"==typeof window)return!1;for(var a in window)try{if(!m["$"+a]&&d.call(window,a)&&null!==window[a]&&"object"==typeof window[a])try{l(window[a])}catch(b){return!0}}catch(b){return!0}return!1}(),o=function(a){if("undefined"==typeof window||!n)return l(a);try{return l(a)}catch(b){return!1}},p=function(a){var b=null!==a&&"object"==typeof a,c="[object Function]"===e.call(a),f=g(a),h=b&&"[object String]"===e.call(a),l=[];if(!b&&!c&&!f)throw new TypeError("Object.keys called on a non-object");var m=j&&c;if(h&&a.length>0&&!d.call(a,0))for(var n=0;n<a.length;++n)l.push(String(n));if(f&&a.length>0)for(var p=0;p<a.length;++p)l.push(String(p));else for(var q in a)m&&"prototype"===q||!d.call(a,q)||l.push(String(q));if(i)for(var r=o(a),s=0;s<k.length;++s)r&&"constructor"===k[s]||!d.call(a,k[s])||l.push(k[s]);return l};p.shim=function(){if(Object.keys){var a=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!a){var b=Object.keys;Object.keys=function(a){return b(g(a)?f.call(a):a)}}}else Object.keys=p;return Object.keys||p},b.exports=p},{142:142}],142:[function(a,b,c){"use strict";var d=Object.prototype.toString;b.exports=function(a){var b=d.call(a),c="[object Arguments]"===b;return c||(c="[object Array]"!==b&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===d.call(a.callee)),c}},{}],143:[function(a,b,c){"use strict";var d=a(135),e=function(){if(!Object.assign)return!1;for(var a="abcdefghijklmnopqrst",b=a.split(""),c={},d=0;d<b.length;++d)c[b[d]]=b[d];var e=Object.assign({},c),f="";for(var g in e)f+=g;return a!==f},f=function(){if(!Object.assign||!Object.preventExtensions)return!1;var a=Object.preventExtensions({1:2});try{Object.assign(a,"xy")}catch(b){return"y"===a[1]}return!1};b.exports=function(){return Object.assign?e()?d:f()?d:Object.assign:d}},{135:135}],144:[function(a,b,c){"use strict";var d=a(137),e=a(143);b.exports=function(){var a=e();return d(Object,{assign:a},{assign:function(){return Object.assign!==a}}),a}},{137:137,143:143}],145:[function(a,b,c){function d(a,b){var c,d=null;try{c=JSON.parse(a,b)}catch(e){d=e}return[d,c]}b.exports=d},{}],146:[function(a,b,c){function d(a){return a.replace(/\n\r?\s*/g,"")}b.exports=function(a){for(var b="",c=0;c<arguments.length;c++)b+=d(a[c])+(arguments[c+1]||"");return b}},{}],147:[function(a,b,c){"use strict";function d(a,b){for(var c=0;c<a.length;c++)b(a[c])}function e(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function f(a,b,c){var d=a;return l(b)?(c=b,"string"==typeof a&&(d={uri:a})):d=n(b,{uri:a}),d.callback=c,d}function g(a,b,c){return b=f(a,b,c),h(b)}function h(a){function b(){4===j.readyState&&f()}function c(){var a=void 0;if(j.response?a=j.response:"text"!==j.responseType&&j.responseType||(a=j.responseText||j.responseXML),u)try{a=JSON.parse(a)}catch(b){}return a}function d(a){clearTimeout(o),a instanceof Error||(a=new Error(""+(a||"Unknown XMLHttpRequest Error"))),a.statusCode=0,h(a,i)}function f(){if(!n){var b;clearTimeout(o),b=a.useXDR&&void 0===j.status?200:1223===j.status?204:j.status;var d=i,e=null;0!==b?(d={body:c(),statusCode:b,method:q,headers:{},url:p,rawRequest:j},j.getAllResponseHeaders&&(d.headers=m(j.getAllResponseHeaders()))):e=new Error("Internal XMLHttpRequest Error"),h(e,d,d.body)}}var h=a.callback;if("undefined"==typeof h)throw new Error("callback argument missing");h=k(h);var i={body:void 0,headers:{},statusCode:0,method:q,url:p,rawRequest:j},j=a.xhr||null;j||(j=a.cors||a.useXDR?new g.XDomainRequest:new g.XMLHttpRequest);var l,n,o,p=j.url=a.uri||a.url,q=j.method=a.method||"GET",r=a.body||a.data||null,s=j.headers=a.headers||{},t=!!a.sync,u=!1;if("json"in a&&(u=!0,s.accept||s.Accept||(s.Accept="application/json"),"GET"!==q&&"HEAD"!==q&&(s["content-type"]||s["Content-Type"]||(s["Content-Type"]="application/json"),r=JSON.stringify(a.json))),j.onreadystatechange=b,j.onload=f,j.onerror=d,j.onprogress=function(){},j.ontimeout=d,j.open(q,p,!t,a.username,a.password),t||(j.withCredentials=!!a.withCredentials),!t&&a.timeout>0&&(o=setTimeout(function(){n=!0,j.abort("timeout");var a=new Error("XMLHttpRequest timeout");a.code="ETIMEDOUT",d(a)},a.timeout)),j.setRequestHeader)for(l in s)s.hasOwnProperty(l)&&j.setRequestHeader(l,s[l]);else if(a.headers&&!e(a.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in a&&(j.responseType=a.responseType),"beforeSend"in a&&"function"==typeof a.beforeSend&&a.beforeSend(j),j.send(r),j}function i(){}var j=a(93),k=a(149),l=a(148),m=a(152),n=a(153);b.exports=g,g.XMLHttpRequest=j.XMLHttpRequest||i,g.XDomainRequest="withCredentials"in new g.XMLHttpRequest?g.XMLHttpRequest:j.XDomainRequest,d(["get","put","post","patch","head","delete"],function(a){g["delete"===a?"del":a]=function(b,c,d){return c=f(b,c,d),c.method=a.toUpperCase(),h(c)}})},{148:148,149:149,152:152,153:153,93:93}],148:[function(a,b,c){function d(a){var b=e.call(a);return"[object Function]"===b||"function"==typeof a&&"[object RegExp]"!==b||"undefined"!=typeof window&&(a===window.setTimeout||a===window.alert||a===window.confirm||a===window.prompt)}b.exports=d;var e=Object.prototype.toString},{}],149:[function(a,b,c){function d(a){var b=!1;return function(){if(!b)return b=!0,a.apply(this,arguments)}}b.exports=d,d.proto=d(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return d(this)},configurable:!0})})},{}],150:[function(a,b,c){function d(a,b,c){if(!h(b))throw new TypeError("iterator must be a function");arguments.length<3&&(c=this),"[object Array]"===i.call(a)?e(a,b,c):"string"==typeof a?f(a,b,c):g(a,b,c)}function e(a,b,c){for(var d=0,e=a.length;d<e;d++)j.call(a,d)&&b.call(c,a[d],d,a)}function f(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a.charAt(d),d,a)}function g(a,b,c){for(var d in a)j.call(a,d)&&b.call(c,a[d],d,a)}var h=a(148);b.exports=d;var i=Object.prototype.toString,j=Object.prototype.hasOwnProperty},{148:148}],151:[function(a,b,c){function d(a){return a.replace(/^\s*|\s*$/g,"")}c=b.exports=d,c.left=function(a){return a.replace(/^\s*/,"")},c.right=function(a){return a.replace(/\s*$/,"")}},{}],152:[function(a,b,c){var d=a(151),e=a(150),f=function(a){return"[object Array]"===Object.prototype.toString.call(a)};b.exports=function(a){if(!a)return{};var b={};return e(d(a).split("\n"),function(a){var c=a.indexOf(":"),e=d(a.slice(0,c)).toLowerCase(),g=d(a.slice(c+1));"undefined"==typeof b[e]?b[e]=g:f(b[e])?b[e].push(g):b[e]=[b[e],g]}),b}},{150:150,151:151}],153:[function(a,b,c){function d(){for(var a={},b=0;b<arguments.length;b++){var c=arguments[b];for(var d in c)e.call(c,d)&&(a[d]=c[d])}return a}b.exports=d;var e=Object.prototype.hasOwnProperty},{}]},{},[91])(91)}),function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return!!b&&a.toLowerCase()}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return!!b&&a.toLowerCase()}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";if(Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(a<0||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(a<0||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i)return h}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return!!b&&a.toLowerCase()}function d(a){return"number"==typeof a&&a>=0&&a<=100}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return++d*-1}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}""===b.vertical?this.applyStyles({left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}):this.applyStyles({top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=n<0?-1:1,n*=Math.ceil(o/m)*m),h<0&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return!!((c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&b<=100))&&(this.set(a,b),!0)}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];
j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",j.indexOf("-->")===-1){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=j.indexOf("-->")!==-1;if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Hls=e()}}(function(){var e;return function e(t,r,i){function a(s,o){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(n)return n(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[s]={exports:{}};t[s][0].call(d.exports,function(e){var r=t[s][1][e];return a(r?r:e)},d,d.exports,e,t,r,i)}return r[s].exports}for(var n="function"==typeof require&&require,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t,r){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(e){return"function"==typeof e}function n(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!n(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,r,i,n,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(r=this._events[e],o(r))return!1;if(a(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:n=Array.prototype.slice.call(arguments,1),r.apply(this,n)}else if(s(r))for(n=Array.prototype.slice.call(arguments,1),u=r.slice(),i=u.length,l=0;l<i;l++)u[l].apply(this,n);return!0},i.prototype.addListener=function(e,t){var r;if(!a(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,"function"==typeof console.trace)),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!a(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},i.prototype.removeListener=function(e,t){var r,i,n,o;if(!a(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],n=r.length,i=-1,r===t||a(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(o=n;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){i=o;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],a(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?a(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(a(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(t,r,i){!function(t){var a={buildAbsoluteURL:function(e,t){if(t=t.trim(),/^[a-z]+:/i.test(t))return t;var r=null,i=null,n=/^([^#]*)(.*)$/.exec(t);n&&(i=n[2],t=n[1]);var s=/^([^\?]*)(.*)$/.exec(t);s&&(r=s[2],t=s[1]);var o=/^([^#]*)(.*)$/.exec(e);o&&(e=o[1]);var l=/^([^\?]*)(.*)$/.exec(e);l&&(e=l[1]);var u=/^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(e);if(!u)throw new Error("Error trying to parse base URL.");var d=u[2]||"",f=u[1]||"",h=u[4],c=null;return c=/^\/\//.test(t)?d+"//"+a.buildAbsolutePath("",t.substring(2)):/^\//.test(t)?f+"/"+a.buildAbsolutePath("",t.substring(1)):a.buildAbsolutePath(f+h,t),r&&(c+=r),i&&(c+=i),c},buildAbsolutePath:function(e,t){for(var r,i,a=t,n="",s=e.replace(/[^\/]*$/,a.replace(/(\/|^)(?:\.?\/+)+/g,"$1")),o=0;i=s.indexOf("/../",o),i>-1;o=i+r)r=/^\/(?:\.\.\/)*/.exec(s.slice(i))[0].length,n=(n+s.substring(o,i)).replace(new RegExp("(?:\\/+[^\\/]*){0,"+(r-1)/3+"}$"),"/");return n+s.substr(o)}};"object"==typeof i&&"object"==typeof r?r.exports=a:"function"==typeof e&&e.amd?e([],function(){return a}):"object"==typeof i?i.URLToolkit=a:t.URLToolkit=a}(this)},{}],3:[function(e,t,r){var i=arguments[3],a=arguments[4],n=arguments[5],s=JSON.stringify;t.exports=function(e,t){function r(e){p[e]=!0;for(var t in a[e][1]){var i=a[e][1][t];p[i]||r(i)}}for(var o,l=Object.keys(n),u=0,d=l.length;u<d;u++){var f=l[u],h=n[f].exports;if(h===e||h&&h.default===e){o=f;break}}if(!o){o=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var c={},u=0,d=l.length;u<d;u++){var f=l[u];c[f]=f}a[o]=[Function(["require","module","exports"],"("+e+")(self)"),c]}var v=Math.floor(Math.pow(16,8)*Math.random()).toString(16),g={};g[o]=o,a[v]=[Function(["require"],"var f = require("+s(o)+");(f.default ? f.default : f)(self);"),g];var p={};r(v);var y="("+i+")({"+Object.keys(p).map(function(e){return s(e)+":["+a[e][0]+","+s(a[e][1])+"]"}).join(",")+"},{},["+s(v)+"])",m=window.URL||window.webkitURL||window.mozURL||window.msURL,E=new Blob([y],{type:"text/javascript"});if(t&&t.bare)return E;var b=m.createObjectURL(E),R=new Worker(b);return R.objectURL=b,R}},{}],4:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(30),c=i(h),v=e(26),g=e(45),p=e(9),y=i(p),m=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.FRAG_LOADING,u.default.FRAG_LOADED,u.default.FRAG_BUFFERED,u.default.ERROR));return r.lastLoadedFragLevel=0,r._autoLevelCapping=-1,r._nextAutoLevel=-1,r.hls=e,r.onCheck=r.abandonRulesCheck.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){this.clearTimer(),f.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag;if("main"===t.type){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this.bwEstimator){var r=this.hls,i=e.frag.level,a=r.levels[i].details.live,n=r.config,s=void 0,o=void 0;a?(s=n.abrEwmaFastLive,o=n.abrEwmaSlowLive):(s=n.abrEwmaFastVoD,o=n.abrEwmaSlowVoD),this.bwEstimator=new y.default(r,o,s,n.abrEwmaDefaultEstimate)}this.fragCurrent=t}}},{key:"abandonRulesCheck",value:function(){var e=this.hls,t=e.media,r=this.fragCurrent,i=r.loader,a=this.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return g.logger.warn("frag loader destroy or aborted, disarm abandonRules"),void this.clearTimer();var n=i.stats;if(t&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var s=performance.now()-n.trequest,o=Math.abs(t.playbackRate);if(s>500*r.duration/o){var l=e.levels,d=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/s),f=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*l[r.level].bitrate/8)),h=t.currentTime,v=(f-n.loaded)/d,p=(c.default.bufferInfo(t,h,e.config.maxBufferHole).end-h)/o;if(p<2*r.duration/o&&v>p){var y=void 0,m=void 0;for(m=r.level-1;m>a&&(y=r.duration*l[m].bitrate/(6.4*d),!(y<p));m--);y<v&&(g.logger.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+y.toFixed(1)+"<"+v.toFixed(1)+":"+p.toFixed(1)),e.nextLoadLevel=m,this.bwEstimator.sample(s,n.loaded),i.abort(),this.clearTimer(),e.trigger(u.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if("main"===t.type&&(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,e.frag.bitrateTest)){var r=e.stats;r.tparsed=r.tbuffered=r.tload,this.onFragBuffered(e)}}},{key:"onFragBuffered",value:function(e){var t=e.stats,r=e.frag;if(t.aborted!==!0&&1===r.loadCounter&&"main"===r.type&&(!r.bitrateTest||t.tload===t.tbuffered)){var i=t.tparsed-t.trequest;g.logger.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this.bwEstimator.sample(i,t.loaded),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}}},{key:"onError",value:function(e){switch(e.details){case v.ErrorDetails.FRAG_LOAD_ERROR:case v.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}}},{key:"clearTimer",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"findBestLevel",value:function(e,t,r,i,a,n,s,o,l){for(var u=a;u>=i;u--){var d=l[u],f=d.details,h=f?f.totalduration/f.fragments.length:t,c=!!f&&f.live,v=void 0;v=u<=e?s*r:o*r;var p=l[u].bitrate,y=p*h/v;if(g.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+u+"/"+Math.round(v)+"/"+p+"/"+h+"/"+n+"/"+y),v>p&&(!y||c||y<n))return u}return-1}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){this._autoLevelCapping=e}},{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this.bwEstimator,r=this.hls,i=r.levels,a=r.config.minAutoBitrate;if(!(e===-1||t&&t.canEstimate()))return Math.min(e,this.maxAutoLevel);var n=this.nextABRAutoLevel;if(e!==-1&&(n=Math.min(e,n)),void 0!==a)for(;i[n].bitrate<a;)n++;return n},set:function(e){this._nextAutoLevel=e}},{key:"minAutoLevel",get:function(){for(var e=this.hls,t=e.levels,r=e.config.minAutoBitrate,i=t?t.length:0,a=0;a<i;a++)if(t[a].bitrate>r)return a;return 0}},{key:"maxAutoLevel",get:function(){var e,t=this.hls.levels,r=this._autoLevelCapping;return e=r===-1&&t&&t.length?t.length-1:r}},{key:"nextABRAutoLevel",get:function(){var e=this.hls,t=this.maxAutoLevel,r=e.levels,i=e.config,a=this.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,u=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,d=this.bwEstimator?this.bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,f=(c.default.bufferInfo(n,l,i.maxBufferHole).end-l)/u,h=this.findBestLevel(s,o,d,a,t,f,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(h>=0)return h;g.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var v=i.maxStarvationDelay,p=i.abrBandWidthFactor,y=i.abrBandWidthUpFactor;if(0===f){var m=this.bitrateTestDelay;m&&(v=i.maxLoadingDelay-m,g.logger.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),p=y=1)}return h=this.findBestLevel(s,o,d,a,t,f+v,p,y,r),Math.max(h,0)}}]),t}(f.default);r.default=m},{26:26,27:27,28:28,30:30,45:45,9:9}],5:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(41),u=i(l),d=e(30),f=i(d),h=e(22),c=i(h),v=e(28),g=i(v),p=e(27),y=i(p),m=e(31),E=i(m),b=e(46),R=i(b),_=e(26),k=e(45),A={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR"},T=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,g.default.MEDIA_ATTACHED,g.default.MEDIA_DETACHING,g.default.AUDIO_TRACKS_UPDATED,g.default.AUDIO_TRACK_SWITCH,g.default.AUDIO_TRACK_LOADED,g.default.KEY_LOADED,g.default.FRAG_LOADED,g.default.FRAG_PARSING_INIT_SEGMENT,g.default.FRAG_PARSING_DATA,g.default.FRAG_PARSED,g.default.ERROR,g.default.BUFFER_CREATED,g.default.BUFFER_APPENDED,g.default.BUFFER_FLUSHED));return r.config=e.config,r.audioCodecSwap=!1,r.ticks=0,r.ontick=r.tick.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),y.default.prototype.destroy.call(this),this.state=A.STOPPED}},{key:"startLoad",value:function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.fragLoadError=0,t>0&&e===-1?(k.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=A.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=A.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=A.STOPPED}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=A.STOPPED}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){var e,t,r,i=this.hls,a=i.config;switch(this.state){case A.ERROR:case A.PAUSED:break;case A.STARTING:this.state=A.WAITING_TRACK,this.loadedmetadata=!1;break;case A.IDLE:if(!this.media&&(this.startFragRequested||!a.startFragPrefetch))break;e=this.loadedmetadata?this.media.currentTime:this.nextLoadPosition;var n=this.mediaBuffer?this.mediaBuffer:this.media,s=f.default.bufferInfo(n,e,a.maxBufferHole),o=s.len,l=s.end,d=this.fragPrevious,h=a.maxMaxBufferLength;if(o<h&&this.trackId<this.tracks.length){if(r=this.tracks[this.trackId].details,"undefined"==typeof r){this.state=A.WAITING_TRACK;break}if(!r.live&&d&&d.sn===r.endSN&&(!this.media.seeking||this.media.duration-l<d.duration/2)){this.hls.trigger(g.default.BUFFER_EOS,{type:"audio"}),this.state=A.ENDED;break}var c=r.fragments,v=c.length,p=c[0].start,y=c[v-1].start+c[v-1].duration,m=void 0;if(l<p?m=c[0]:!function(){var e=void 0,t=a.maxFragLookUpTolerance;l<y?(l>y-t&&(t=0),e=u.default.search(c,function(e){return e.start+e.duration-t<=l?1:e.start-t>l?-1:0})):e=c[v-1],e&&(m=e,p=e.start,d&&m.level===d.level&&m.sn===d.sn&&(m.sn<r.endSN?(m=c[m.sn+1-r.startSN],k.logger.log("SN just loaded, load next one: "+m.sn)):m=null))}(),m)if(null!=m.decryptdata.uri&&null==m.decryptdata.key)k.logger.log("Loading key for "+m.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+this.trackId),this.state=A.KEY_LOADING,i.trigger(g.default.KEY_LOADING,{frag:m});else{if(k.logger.log("Loading "+m.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+this.trackId+", currentTime:"+e+",bufferEnd:"+l.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,m.loadCounter){m.loadCounter++;var E=a.fragLoadingLoopThreshold;if(m.loadCounter>E&&Math.abs(this.fragLoadIdx-m.loadIdx)<E)return void i.trigger(g.default.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:m})}else m.loadCounter=1;m.loadIdx=this.fragLoadIdx,this.fragCurrent=m,this.startFragRequested=!0,this.nextLoadPosition=m.start+m.duration,i.trigger(g.default.FRAG_LOADING,{frag:m}),this.state=A.FRAG_LOADING}}break;case A.WAITING_TRACK:t=this.tracks[this.trackId],t&&t.details&&(this.state=A.IDLE);break;case A.FRAG_LOADING_WAITING_RETRY:var b=performance.now(),R=this.retryDate;n=this.media;var T=n&&n.seeking;(!R||b>=R||T)&&(k.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=A.IDLE);break;case A.STOPPED:case A.FRAG_LOADING:case A.PARSING:case A.PARSED:case A.ENDED:}}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(k.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.tracks;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){this.state===A.ENDED&&(this.state=A.IDLE),this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()}},{key:"onMediaEnded",value:function(){this.startPosition=this.lastCurrentTime=0}},{key:"onAudioTracksUpdated",value:function(e){k.logger.log("audio tracks updated"),this.tracks=e.audioTracks}},{key:"onAudioTrackSwitch",value:function(e){var t=!!e.url;this.trackId=e.id,this.state=A.IDLE,this.fragCurrent=null,this.state=A.PAUSED,t?this.timer||(this.timer=setInterval(this.ontick,100)):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.hls.trigger(g.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),this.tick()}},{key:"onAudioTrackLoaded",value:function(e){var t=e.details,r=e.id,i=this.tracks[r],a=t.totalduration;if(k.logger.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),t.PTSKnown=!1,i.details=t,!this.startFragRequested){if(this.startPosition===-1){var n=t.startTimeOffset;isNaN(n)?this.startPosition=0:(k.logger.log("start time offset found in playlist, adjust startPosition to "+n),this.startPosition=n)}this.nextLoadPosition=this.startPosition}this.state===A.WAITING_TRACK&&(this.state=A.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===A.KEY_LOADING&&(this.state=A.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent;if(this.state===A.FRAG_LOADING&&t&&"audio"===e.frag.type&&e.frag.level===t.level&&e.frag.sn===t.sn){this.state=A.PARSING,this.stats=e.stats;var r=this.tracks[this.trackId],i=r.details,a=i.totalduration,n=t.start,s=t.level,o=t.sn,l=this.config.defaultAudioCodec||r.audioCodec;this.pendingAppending=0,this.demuxer||(this.demuxer=new c.default(this.hls,"audio")),k.logger.log("Demuxing "+o+" of ["+i.startSN+" ,"+i.endSN+"],track "+s);var u=i.PTSKnown||!i.live;this.demuxer.push(e.payload,l,null,n,t.cc,s,o,a,t.decryptdata,u)}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent;if(t&&"audio"===e.id&&e.sn===t.sn&&e.level===t.level&&this.state===A.PARSING){var r=e.tracks,i=void 0;if(i=r.audio){i.levelCodec="mp4a.40.2",i.id=e.id,this.hls.trigger(g.default.BUFFER_CODECS,r),k.logger.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var a=i.initSegment;a&&(this.pendingAppending++,this.hls.trigger(g.default.BUFFER_APPENDING,{type:"audio",data:a,parent:"audio",content:"initSegment"})),this.tick()}}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent;if(r&&"audio"===e.id&&e.sn===r.sn&&e.level===r.level&&this.state===A.PARSING){var i=this.tracks[this.trackId],a=this.fragCurrent;k.logger.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),E.default.updateFragPTSDTS(i.details,a.sn,e.startPTS,e.endPTS),[e.data1,e.data2].forEach(function(r){r&&(t.pendingAppending++,t.hls.trigger(g.default.BUFFER_APPENDING,{type:e.type,data:r,parent:"audio",content:"data"}))}),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent;t&&"audio"===e.id&&e.sn===t.sn&&e.level===t.level&&this.state===A.PARSING&&(this.stats.tparsed=performance.now(),this.state=A.PARSED,this._checkAppendedParsed())}},{key:"onBufferCreated",value:function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0)}},{key:"onBufferAppended",value:function(e){if("audio"===e.parent)switch(this.state){case A.PARSING:case A.PARSED:this.pendingAppending--,this._checkAppendedParsed()}}},{key:"_checkAppendedParsed",value:function(){if(this.state===A.PARSED&&0===this.pendingAppending){var e=this.fragCurrent,t=this.stats;if(e){this.fragPrevious=e,t.tbuffered=performance.now(),this.hls.trigger(g.default.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var r=this.mediaBuffer?this.mediaBuffer:this.media;k.logger.log("audio buffered : "+R.default.toString(r.buffered)),this.state=A.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case _.ErrorDetails.FRAG_LOAD_ERROR:case _.ErrorDetails.FRAG_LOAD_TIMEOUT:if(!e.fatal){var r=this.fragLoadError;r?r++:r=1;var i=this.config;if(r<=i.fragLoadingMaxRetry){this.fragLoadError=r,t.loadCounter=0;var a=Math.min(Math.pow(2,r-1)*i.fragLoadingRetryDelay,i.fragLoadingMaxRetryTimeout);k.logger.warn("audioStreamController: frag loading failed, retry in "+a+" ms"),this.retryDate=performance.now()+a,this.state=A.FRAG_LOADING_WAITING_RETRY}else k.logger.error("audioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.hls.trigger(g.default.ERROR,e),this.state=A.ERROR}break;case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case _.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case _.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case _.ErrorDetails.KEY_LOAD_ERROR:case _.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==A.ERROR&&(this.state=e.fatal?A.ERROR:A.IDLE,k.logger.warn("audioStreamController: "+e.details+" while loading frag,switch to "+this.state+" state ..."))}}},{key:"onBufferFlushed",value:function(){this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=A.IDLE,this.fragPrevious=null,this.tick()}}]),t}(y.default);r.default=T},{22:22,26:26,27:27,28:28,30:30,31:31,41:41,45:45,46:46}],6:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(45),c=function(e){function t(e){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MANIFEST_LOADING,u.default.MANIFEST_LOADED,u.default.AUDIO_TRACK_LOADED))}return s(t,e),o(t,[{key:"destroy",value:function(){f.default.prototype.destroy.call(this)}},{key:"onManifestLoading",value:function(){this.tracks=[],this.trackId=-1}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.audioTracks||[],i=!1;this.tracks=r,this.hls.trigger(u.default.AUDIO_TRACKS_UPDATED,{audioTracks:r});var a=0;r.forEach(function(e){return e.default?(t.audioTrack=a,void(i=!0)):void a++}),i===!1&&r.length&&(h.logger.log("no default audio track defined, use first audio track as default"),this.audioTrack=0)}},{key:"onAudioTrackLoaded",value:function(e){e.id<this.tracks.length&&(h.logger.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.timer&&(this.timer=setInterval(this.ontick,1e3*e.details.targetduration)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))}},{key:"setAudioTrackInternal",value:function(e){if(e>=0&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,h.logger.log("switching to audioTrack "+e);var t=this.tracks[e],r=t.type,i=t.url;this.hls.trigger(u.default.AUDIO_TRACK_SWITCH,{id:e,type:r,url:i});var a=t.details;!i||void 0!==a&&a.live!==!0||(h.logger.log("(re)loading playlist for audioTrack "+e),this.hls.trigger(u.default.AUDIO_TRACK_LOADING,{url:i,id:e}))}}},{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this.trackId},set:function(e){this.trackId===e&&void 0!==this.tracks[e].details||this.setAudioTrackInternal(e)}}]),t}(f.default);r.default=c},{27:27,28:28,45:45}],7:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(45),c=e(26),v=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MEDIA_ATTACHING,u.default.MEDIA_DETACHING,u.default.MANIFEST_PARSED,u.default.BUFFER_RESET,u.default.BUFFER_APPENDING,u.default.BUFFER_CODECS,u.default.BUFFER_EOS,u.default.BUFFER_FLUSHING,u.default.LEVEL_PTS_UPDATED,u.default.LEVEL_UPDATED));return r._msDuration=null,r._levelDuration=null,r.onsbue=r.onSBUpdateEnd.bind(r),r.onsbe=r.onSBUpdateError.bind(r),r.pendingTracks={},r.tracks={},r}return s(t,e),o(t,[{key:"destroy",value:function(){f.default.prototype.destroy.call(this)}},{key:"onLevelPtsUpdated",value:function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio,a=Math.abs(i.timestampOffset-e.start);if(a>.1){var n=i.updating;try{i.abort()}catch(e){n=!0,h.logger.warn("can not abort audio buffer: "+e)}n?this.audioTimestampOffset=e.start:(h.logger.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}}},{key:"onManifestParsed",value:function(e){var t=e.audio,r=e.video,i=0;e.altAudio&&(t||r)&&(i=(t?1:0)+(r?1:0),h.logger.log(i+" sourceBuffer(s) expected")),this.sourceBufferNb=i}},{key:"onMediaAttaching",value:function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=URL.createObjectURL(r)}}},{key:"onMediaDetaching",value:function(){h.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){h.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(URL.revokeObjectURL(this.media.src),this.media.removeAttribute("src"),this.media.load()),this.mediaSource=null,this.media=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(u.default.MEDIA_DETACHED)}},{key:"onMediaSourceOpen",value:function(){h.logger.log("media source opened"),this.hls.trigger(u.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()}},{key:"checkPendingTracks",value:function(){var e=this.pendingTracks,t=Object.keys(e).length;t&&(this.sourceBufferNb<=t||0===this.sourceBufferNb)&&(this.createSourceBuffers(e),this.pendingTracks={},this.doAppending())}},{key:"onMediaSourceClose",value:function(){h.logger.log("media source closed")}},{key:"onMediaSourceEnded",value:function(){h.logger.log("media source ended")}},{key:"onSBUpdateEnd",value:function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;h.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1,this.hls.trigger(u.default.BUFFER_APPENDED,{parent:this.parent}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()}},{key:"onSBUpdateError",value:function(e){h.logger.error("sourceBuffer error:"+e),this.hls.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferReset",value:function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}},{key:"onBufferCodecs",value:function(e){if(0===Object.keys(this.sourceBuffer).length){for(var t in e)this.pendingTracks[t]=e[t];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}}},{key:"createSourceBuffers",
value:function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var i in e)if(!t[i]){var a=e[i],n=a.levelCodec||a.codec,s=a.container+";codecs="+n;h.logger.log("creating sourceBuffer("+s+")");try{var o=t[i]=r.addSourceBuffer(s);o.addEventListener("updateend",this.onsbue),o.addEventListener("error",this.onsbe),this.tracks[i]={codec:n,container:a.container},a.buffer=o}catch(e){h.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(u.default.BUFFER_CREATED,{tracks:e})}},{key:"onBufferAppending",value:function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())}},{key:"onBufferAppendFail",value:function(e){h.logger.error("sourceBuffer error:"+e.event),this.hls.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1,frag:this.fragCurrent})}},{key:"onBufferEos",value:function(e){var t=this.sourceBuffer,r=e.type;for(var i in t)r&&i!==r||t[i].ended||(t[i].ended=!0,h.logger.log(i+" sourceBuffer now EOS"));this.checkEos()}},{key:"checkEos",value:function(){var e=this.sourceBuffer,t=this.mediaSource;if(!t||"open"!==t.readyState)return void(this._needsEos=!1);for(var r in e){var i=e[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}h.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){h.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}},{key:"onBufferFlushing",value:function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()}},{key:"onLevelUpdated",value:function(e){var t=e.details;0!==t.fragments.length&&(this._levelDuration=t.totalduration+t.fragments[0].start,this.updateMediaElementDuration())}},{key:"updateMediaElementDuration",value:function(){var e=this.media,t=this.mediaSource,r=this.sourceBuffer,i=this._levelDuration;if(null!==i&&e&&t&&r&&0!==e.readyState&&"open"===t.readyState){for(var a in r)if(r[a].updating)return;null===this._msDuration&&(this._msDuration=t.duration),i>this._msDuration&&i>e.duration&&(h.logger.log("Updating mediasource duration to "+i.toFixed(3)),this._msDuration=t.duration=i)}}},{key:"doFlush",value:function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r)t+=r[i].buffered.length}catch(e){h.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(u.default.BUFFER_FLUSHED)}}},{key:"doAppending",value:function(){var e=this.hls,t=this.sourceBuffer,r=this.segments;if(Object.keys(t).length){if(this.media.error)return this.segments=[],void h.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var i=r.shift();try{var a=i.type;t[a]?(t[a].ended=!1,this.parent=i.parent,t[a].appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(t){h.logger.error("error while trying to append buffer:"+t.message),r.unshift(i);var n={type:c.ErrorTypes.MEDIA_ERROR};if(22===t.code)return this.segments=[],n.details=c.ErrorDetails.BUFFER_FULL_ERROR,void e.trigger(u.default.ERROR,n);if(this.appendError?this.appendError++:this.appendError=1,n.details=c.ErrorDetails.BUFFER_APPEND_ERROR,n.frag=this.fragCurrent,this.appendError>e.config.appendErrorMaxRetry)return h.logger.log("fail "+e.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],n.fatal=!0,void e.trigger(u.default.ERROR,n);n.fatal=!1,e.trigger(u.default.ERROR,n)}}}}},{key:"flushBuffer",value:function(e,t,r){var i,a,n,s,o,l,u=this.sourceBuffer;if(Object.keys(u).length){if(h.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var d in u)if(!r||d===r){if(i=u[d],i.ended=!1,i.updating)return h.logger.warn("cannot flush, sb updating in progress"),!1;try{for(a=0;a<i.buffered.length;a++)if(n=i.buffered.start(a),s=i.buffered.end(a),navigator.userAgent.toLowerCase().indexOf("firefox")!==-1&&t===Number.POSITIVE_INFINITY?(o=e,l=t):(o=Math.max(n,e),l=Math.min(s,t)),Math.min(l,s)-o>.5)return this.flushBufferCounter++,h.logger.log("flush "+d+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+this.media.currentTime),i.remove(o,l),!1}catch(e){h.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else h.logger.warn("abort flushing too many retries");h.logger.log("buffer flushed")}return!0}}]),t}(f.default);r.default=v},{26:26,27:27,28:28,45:45}],8:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=function(e){function t(e){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.FPS_DROP_LEVEL_CAPPING,u.default.MEDIA_ATTACHING,u.default.MANIFEST_PARSED))}return s(t,e),o(t,[{key:"destroy",value:function(){this.hls.config.capLevelToPlayerSize&&(this.media=this.restrictedLevels=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))}},{key:"onFpsDropLevelCapping",value:function(e){this.restrictedLevels||(this.restrictedLevels=[]),this.isLevelRestricted(e.droppedLevel)||this.restrictedLevels.push(e.droppedLevel)}},{key:"onMediaAttaching",value:function(e){this.media=e.media instanceof HTMLVideoElement?e.media:null}},{key:"onManifestParsed",value:function(e){this.hls.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=e.levels,this.hls.firstLevel=this.getMaxLevel(e.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}},{key:"detectPlayerSize",value:function(){if(this.media){var e=this.levels?this.levels.length:0;e&&(this.hls.autoLevelCapping=this.getMaxLevel(e-1),this.hls.autoLevelCapping>this.autoLevelCapping&&this.hls.streamController.nextLevelSwitch(),this.autoLevelCapping=this.hls.autoLevelCapping)}}},{key:"getMaxLevel",value:function(e){var t=0,r=void 0,i=void 0,a=this.mediaWidth,n=this.mediaHeight,s=0,o=0;for(r=0;r<=e&&(i=this.levels[r],!this.isLevelRestricted(r))&&(t=r,s=i.width,o=i.height,!(a<=s||n<=o));r++);return t}},{key:"isLevelRestricted",value:function(e){return!(!this.restrictedLevels||this.restrictedLevels.indexOf(e)===-1)}},{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}},{key:"mediaWidth",get:function(){var e=void 0;return this.media&&(e=this.media.width||this.media.clientWidth||this.media.offsetWidth,e*=this.contentScaleFactor),e}},{key:"mediaHeight",get:function(){var e=void 0;return this.media&&(e=this.media.height||this.media.clientHeight||this.media.offsetHeight,e*=this.contentScaleFactor),e}}]),t}(f.default);r.default=h},{27:27,28:28}],9:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(44),o=i(s),l=function(){function e(t,r,i,n){a(this,e),this.hls=t,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new o.default(r),this.fast_=new o.default(i)}return n(e,[{key:"sample",value:function(e,t){e=Math.max(e,this.minDelayMs_);var r=8e3*t/e,i=e/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)}},{key:"canEstimate",value:function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_}},{key:"getEstimate",value:function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}},{key:"destroy",value:function(){}}]),e}();r.default=l},{44:44}],10:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(45),c=function(e){function t(e){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MEDIA_ATTACHING))}return s(t,e),o(t,[{key:"destroy",value:function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1}},{key:"onMediaAttaching",value:function(e){this.hls.config.capLevelOnFPSDrop&&(this.video=e.media instanceof HTMLVideoElement?e.media:null,"function"==typeof this.video.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),this.hls.config.fpsDroppedMonitoringPeriod))}},{key:"checkFPS",value:function(e,t,r){var i=performance.now();if(t){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/a;if(this.hls.trigger(u.default.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),o>0&&n>this.hls.config.fpsDroppedMonitoringThreshold*s){var l=this.hls.currentLevel;h.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+l),l>0&&(this.hls.autoLevelCapping===-1||this.hls.autoLevelCapping>=l)&&(l-=1,this.hls.trigger(u.default.FPS_DROP_LEVEL_CAPPING,{level:l,droppedLevel:this.hls.currentLevel}),this.hls.autoLevelCapping=l,this.hls.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}},{key:"checkFPSInterval",value:function(){if(this.video)if(this.isVideoPlaybackQualityAvailable){var e=this.video.getVideoPlaybackQuality();this.checkFPS(this.video,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(this.video,this.video.webkitDecodedFrameCount,this.video.webkitDroppedFrameCount)}}]),t}(f.default);r.default=c},{27:27,28:28,45:45}],11:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(45),c=e(26),v=e(30),g=i(v),p=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MANIFEST_LOADED,u.default.LEVEL_LOADED,u.default.ERROR));return r.ontick=r.tick.bind(r),r._manualLevel=r._autoLevelCapping=-1,r}return s(t,e),o(t,[{key:"destroy",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this._manualLevel=-1}},{key:"startLoad",value:function(){this.canload=!0,this.timer&&this.tick()}},{key:"stopLoad",value:function(){this.canload=!1}},{key:"onManifestLoaded",value:function(e){var t,r=[],i=[],a={},n=!1,s=!1,o=this.hls,l=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),d=function(e,t){return MediaSource.isTypeSupported(e+"/mp4;codecs="+t)};if(e.levels.forEach(function(e){e.videoCodec&&(n=!0),l&&e.audioCodec&&e.audioCodec.indexOf("mp4a.40.34")!==-1&&(e.audioCodec=void 0),(e.audioCodec||e.attrs&&e.attrs.AUDIO)&&(s=!0);var t=a[e.bitrate];void 0===t?(a[e.bitrate]=r.length,e.url=[e.url],e.urlId=0,r.push(e)):r[t].url.push(e.url)}),n&&s?r.forEach(function(e){e.videoCodec&&i.push(e)}):i=r,i=i.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||d("audio",t))&&(!r||d("video",r))}),i.length){t=i[0].bitrate,i.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=i;for(var f=0;f<i.length;f++)if(i[f].bitrate===t){this._firstLevel=f,h.logger.log("manifest loaded,"+i.length+" level(s) found, first bitrate:"+t);break}o.trigger(u.default.MANIFEST_PARSED,{levels:i,firstLevel:this._firstLevel,stats:e.stats,audio:s,video:n,altAudio:e.audioTracks.length>0})}else o.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:o.url,reason:"no level with compatible codecs found in manifest"})}},{key:"setLevelInternal",value:function(e){var t=this._levels;if(e>=0&&e<t.length){this.timer&&(clearTimeout(this.timer),this.timer=null),this._level!==e&&(h.logger.log("switching to level "+e),this._level=e,this.hls.trigger(u.default.LEVEL_SWITCH,{level:e}));var r=t[e],i=r.details;if(!i||i.live===!0){var a=r.urlId;this.hls.trigger(u.default.LEVEL_LOADING,{url:r.url[a],level:e,id:a})}}else this.hls.trigger(u.default.ERROR,{type:c.ErrorTypes.OTHER_ERROR,details:c.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})}},{key:"onError",value:function(e){if(!e.fatal){var t=e.details,r=this.hls,i=void 0,a=void 0,n=!1,s=r.abrController,o=s.minAutoLevel;switch(t){case c.ErrorDetails.FRAG_LOAD_ERROR:case c.ErrorDetails.FRAG_LOAD_TIMEOUT:case c.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case c.ErrorDetails.KEY_LOAD_ERROR:case c.ErrorDetails.KEY_LOAD_TIMEOUT:i=e.frag.level;break;case c.ErrorDetails.LEVEL_LOAD_ERROR:case c.ErrorDetails.LEVEL_LOAD_TIMEOUT:i=e.context.level,n=!0;break;case c.ErrorDetails.REMUX_ALLOC_ERROR:i=e.level}if(void 0!==i)if(a=this._levels[i],a.urlId<a.url.length-1)a.urlId++,a.details=void 0,h.logger.warn("level controller,"+t+" for level "+i+": switching to redundant stream id "+a.urlId);else{var l=this._manualLevel===-1&&i;if(l)h.logger.warn("level controller,"+t+": switch-down for next fragment"),s.nextAutoLevel=Math.max(o,i-1);else if(a&&a.details&&a.details.live)h.logger.warn("level controller,"+t+" on live stream, discard"),n&&(this._level=void 0);else if(t===c.ErrorDetails.LEVEL_LOAD_ERROR||t===c.ErrorDetails.LEVEL_LOAD_TIMEOUT){var d=r.media,f=d&&g.default.isBuffered(d,d.currentTime)&&g.default.isBuffered(d,d.currentTime+.5);if(f){var v=r.config.levelLoadingRetryDelay;h.logger.warn("level controller,"+t+", but media buffered, retry in "+v+"ms"),this.timer=setTimeout(this.ontick,v)}else h.logger.error("cannot recover "+t+" error"),this._level=void 0,this.timer&&(clearTimeout(this.timer),this.timer=null),e.fatal=!0,r.trigger(u.default.ERROR,e)}}}}},{key:"onLevelLoaded",value:function(e){if(e.level===this._level){var t=e.details;if(t.live){var r=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),i=this._levels[e.level],a=i.details;a&&t.endSN===a.endSN&&(r/=2,h.logger.log("same live playlist, reload twice faster")),r-=performance.now()-e.stats.trequest,r=Math.max(1e3,Math.round(r)),h.logger.log("live playlist, reload in "+r+" ms"),this.timer=setTimeout(this.ontick,r)}else this.timer=null}}},{key:"tick",value:function(){var e=this._level;if(void 0!==e&&this.canload){var t=this._levels[e],r=t.urlId;this.hls.trigger(u.default.LEVEL_LOADING,{url:t.url[r],level:e,id:r})}}},{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this._level},set:function(e){var t=this._levels;t&&t.length>e&&(this._level===e&&void 0!==t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this._manualLevel},set:function(e){this._manualLevel=e,void 0===this._startLevel&&(this._startLevel=e),e!==-1&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){e!==-1&&(e=Math.max(e,this.hls.abrController.minAutoLevel)),this._startLevel=e}},{key:"nextLoadLevel",get:function(){return this._manualLevel!==-1?this._manualLevel:this.hls.abrController.nextAutoLevel},set:function(e){this.level=e,this._manualLevel===-1&&(this.hls.abrController.nextAutoLevel=e)}}]),t}(f.default);r.default=p},{26:26,27:27,28:28,30:30,45:45}],12:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(41),u=i(l),d=e(30),f=i(d),h=e(22),c=i(h),v=e(28),g=i(v),p=e(27),y=i(p),m=e(31),E=i(m),b=e(46),R=i(b),_=e(26),k=e(45),A={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR"},T=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,g.default.MEDIA_ATTACHED,g.default.MEDIA_DETACHING,g.default.MANIFEST_LOADING,g.default.MANIFEST_PARSED,g.default.LEVEL_LOADED,g.default.KEY_LOADED,g.default.FRAG_LOADED,g.default.FRAG_LOAD_EMERGENCY_ABORTED,g.default.FRAG_PARSING_INIT_SEGMENT,g.default.FRAG_PARSING_DATA,g.default.FRAG_PARSED,g.default.ERROR,g.default.AUDIO_TRACK_SWITCH,g.default.BUFFER_CREATED,g.default.BUFFER_APPENDED,g.default.BUFFER_FLUSHED));return r.config=e.config,r.audioCodecSwap=!1,r.ticks=0,r.ontick=r.tick.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),y.default.prototype.destroy.call(this),this.state=A.STOPPED}},{key:"startLoad",value:function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;i===-1&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&e===-1&&(k.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=A.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else k.logger.warn("cannot start loading as manifest not parsed yet"),this.state=A.STOPPED}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=A.STOPPED}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){switch(this.state){case A.ERROR:break;case A.BUFFER_FLUSHING:this.fragLoadError=0;break;case A.IDLE:if(!this._doTickIdle())return;break;case A.WAITING_LEVEL:var e=this.levels[this.level];e&&e.details&&(this.state=A.IDLE);break;case A.FRAG_LOADING_WAITING_RETRY:var t=performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(k.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=A.IDLE);break;case A.ERROR:case A.PAUSED:case A.STOPPED:case A.FRAG_LOADING:case A.PARSING:case A.PARSED:case A.ENDED:}this._checkBuffer(),this._checkFragmentChanged()}},{key:"_doTickIdle",value:function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&!r&&(this.startFragRequested||!t.startFragPrefetch))return!0;var i=void 0;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,n=this.levels[a],s=n.bitrate,o=void 0;o=s?Math.max(8*t.maxBufferSize/s,t.maxBufferLength):t.maxBufferLength,o=Math.min(o,t.maxMaxBufferLength);var l=f.default.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,t.maxBufferHole),u=l.len;if(u>=o)return!0;k.logger.trace("buffer length of "+u.toFixed(3)+" is below max of "+o.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var d=n.details;if("undefined"==typeof d||d.live&&this.levelLastLoaded!==a)return this.state=A.WAITING_LEVEL,!0;var h=this.fragPrevious;if(!d.live&&h&&h.sn===d.endSN&&(!r.seeking&&l.len||r.duration-l.end<=h.duration/2)){var c={};return this.altAudio&&(c.type="video"),this.hls.trigger(g.default.BUFFER_EOS,c),this.state=A.ENDED,!0}return this._fetchPayloadOrEos({pos:i,bufferInfo:l,levelDetails:d})}},{key:"_fetchPayloadOrEos",value:function(e){var t=e.pos,r=e.bufferInfo,i=e.levelDetails,a=this.fragPrevious,n=this.level,s=i.fragments,o=s.length;if(0===o)return!1;var l=s[0].start,u=s[o-1].start+s[o-1].duration,d=r.end,f=void 0;if(i.live){var h=this.config.initialLiveManifestSize;if(o<h)return k.logger.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+h),!1;if(f=this._ensureFragmentAtLivePoint({levelDetails:i,bufferEnd:d,start:l,end:u,fragPrevious:a,fragments:s,fragLen:o}),null===f)return!1}else d<l&&(f=s[0]);return f||(f=this._findFragment({start:l,fragPrevious:a,fragLen:o,fragments:s,bufferEnd:d,end:u,levelDetails:i})),!f||this._loadFragmentOrKey({frag:f,level:n,levelDetails:i,pos:t,bufferEnd:d})}},{key:"_ensureFragmentAtLivePoint",value:function(e){var t=e.levelDetails,r=e.bufferEnd,i=e.start,a=e.end,n=e.fragPrevious,s=e.fragments,o=e.fragLen,l=this.hls.config,u=this.media,d=void 0,f=void 0!==l.liveMaxLatencyDuration?l.liveMaxLatencyDuration:l.liveMaxLatencyDurationCount*t.targetduration;if(r<Math.max(i,a-f)){var h=this.liveSyncPosition=this.computeLivePosition(i,t);k.logger.log("buffer end: "+r.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+h.toFixed(3)),r=h,u&&u.readyState&&u.duration>h&&(u.currentTime=h)}if(t.PTSKnown&&r>a&&u&&u.readyState)return null;if(this.startFragRequested&&!t.PTSKnown){if(n){var c=n.sn+1;c>=t.startSN&&c<=t.endSN&&(d=s[c-t.startSN],k.logger.log("live playlist, switching playlist, load frag with next SN: "+d.sn))}d||(d=s[Math.min(o-1,Math.round(o/2))],k.logger.log("live playlist, switching playlist, unknown, load middle frag : "+d.sn))}return d}},{key:"_findFragment",value:function(e){var t=e.start,r=e.fragPrevious,i=e.fragLen,a=e.fragments,n=e.bufferEnd,s=e.end,o=e.levelDetails,l=this.hls.config,d=void 0,f=void 0,h=l.maxFragLookUpTolerance;if(n<s?(n>s-h&&(h=0),f=u.default.search(a,function(e){return e.start+e.duration-h<=n?1:e.start-h>n&&e.start?-1:0})):f=a[i-1],f&&(d=f,t=f.start,r&&d.level===r.level&&d.sn===r.sn))if(d.sn<o.endSN){var c=r.deltaPTS,v=d.sn-o.startSN;c&&c>l.maxBufferHole&&r.dropped&&v?(d=a[v-1],k.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"),r.loadCounter--):(d=a[v+1],k.logger.log("SN just loaded, load next one: "+d.sn))}else d=null;return d}},{key:"_loadFragmentOrKey",value:function(e){var t=e.frag,r=e.level,i=e.levelDetails,a=e.pos,n=e.bufferEnd,s=this.hls,o=s.config;if(null==t.decryptdata.uri||null!=t.decryptdata.key){if(k.logger.log("Loading "+t.sn+" of ["+i.startSN+" ,"+i.endSN+"],level "+r+", currentTime:"+a.toFixed(3)+",bufferEnd:"+n.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,t.loadCounter){t.loadCounter++;var l=o.fragLoadingLoopThreshold;if(t.loadCounter>l&&Math.abs(this.fragLoadIdx-t.loadIdx)<l)return s.trigger(g.default.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:t}),!1}else t.loadCounter=1;return t.loadIdx=this.fragLoadIdx,this.fragCurrent=t,this.startFragRequested=!0,this.nextLoadPosition=t.start+t.duration,t.autoLevel=s.autoLevelEnabled,t.bitrateTest=this.bitrateTest,s.trigger(g.default.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new c.default(s,"main")),this.state=A.FRAG_LOADING,!0}k.logger.log("Loading key for "+t.sn+" of ["+i.startSN+" ,"+i.endSN+"],level "+r),this.state=A.KEY_LOADING,s.trigger(g.default.KEY_LOADING,{frag:t})}},{key:"getBufferRange",value:function(e){var t,r,i=this.bufferRange;if(i)for(t=i.length-1;t>=0;t--)if(r=i[t],e>=r.start&&e<=r.end)return r;return null}},{key:"followingBufferRange",value:function(e){return e?this.getBufferRange(e.end+.5):null}},{key:"_checkFragmentChanged",value:function(){var e,t,r=this.media;if(r&&r.readyState&&r.seeking===!1&&(t=r.currentTime,t>r.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=t),f.default.isBuffered(r,t)?e=this.getBufferRange(t):f.default.isBuffered(r,t+.1)&&(e=this.getBufferRange(t+.1)),e)){var i=e.frag;i!==this.fragPlaying&&(this.fragPlaying=i,this.hls.trigger(g.default.FRAG_CHANGED,{frag:i}))}}},{key:"immediateLevelSwitch",value:function(){if(k.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e=this.media,t=void 0;e?(t=e.paused,e.pause()):t=!0,this.previouslyPaused=t}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=A.BUFFER_FLUSHING,this.hls.trigger(g.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY})}},{key:"immediateLevelSwitchEnd",value:function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,f.default.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())}},{key:"nextLevelSwitch",value:function(){var e=this.media;if(e&&e.readyState){var t=void 0,r=void 0,i=void 0;if(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,r=this.getBufferRange(e.currentTime),r&&r.start>1&&(this.state=A.BUFFER_FLUSHING,this.hls.trigger(g.default.BUFFER_FLUSHING,{startOffset:0,endOffset:r.start-1})),e.paused)t=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],s=this.fragLastKbps;t=s&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*s)+1:0}if(i=this.getBufferRange(e.currentTime+t),i&&(i=this.followingBufferRange(i))){var o=this.fragCurrent;o&&o.loader&&o.loader.abort(),this.fragCurrent=null,this.state=A.BUFFER_FLUSHING,this.hls.trigger(g.default.BUFFER_FLUSHING,{startOffset:i.start,endOffset:Number.POSITIVE_INFINITY})}}}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(k.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){var e=this.media,t=e?e.currentTime:void 0,r=this.config;if(k.logger.log("media seeking to "+t.toFixed(3)),this.state===A.FRAG_LOADING){var i=f.default.bufferInfo(e,t,this.config.maxBufferHole),a=this.fragCurrent;if(0===i.len&&a){var n=r.maxFragLookUpTolerance,s=a.start-n,o=a.start+a.duration+n;t<s||t>o?(a.loader&&(k.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=A.IDLE):k.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===A.ENDED&&(this.state=A.IDLE);e&&(this.lastCurrentTime=t),this.state!==A.FRAG_LOADING&&void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*r.fragLoadingLoopThreshold),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=t),this.tick()}},{key:"onMediaSeeked",value:function(){k.logger.log("media seeked to "+this.media.currentTime.toFixed(3)),this.tick()}},{key:"onMediaEnded",value:function(){k.logger.log("media ended"),this.startPosition=this.lastCurrentTime=0}},{key:"onManifestLoading",value:function(){k.logger.log("trigger BUFFER_RESET"),this.hls.trigger(g.default.BUFFER_RESET),this.bufferRange=[],this.stalled=!1,this.startPosition=this.lastCurrentTime=0}},{key:"onManifestParsed",value:function(e){var t,r=!1,i=!1;e.levels.forEach(function(e){t=e.audioCodec,t&&(t.indexOf("mp4a.40.2")!==-1&&(r=!0),t.indexOf("mp4a.40.5")!==-1&&(i=!0))}),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&k.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startLevelLoaded=!1,this.startFragRequested=!1;var a=this.config;a.autoStartLoad&&this.hls.startLoad(a.startPosition)}},{key:"onLevelLoaded",value:function(e){var t=e.details,r=e.level,i=this.levels[r],a=t.totalduration,n=0;if(k.logger.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),this.levelLastLoaded=r,t.live){var s=i.details;s&&t.fragments.length>0?(E.default.mergeDetails(s,t),n=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(n,s),t.PTSKnown?k.logger.log("live playlist sliding:"+n.toFixed(3)):k.logger.log("live playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,
k.logger.log("live playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(i.details=t,this.hls.trigger(g.default.LEVEL_UPDATED,{details:t,level:r}),this.startFragRequested===!1){if(this.startPosition===-1||this.lastCurrentTime===-1){var o=t.startTimeOffset;isNaN(o)?t.live?(this.startPosition=this.computeLivePosition(n,t),k.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(o<0&&(k.logger.log("negative start time offset "+o+", count from end of last fragment"),o=n+a+o),k.logger.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===A.WAITING_LEVEL&&(this.state=A.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===A.KEY_LOADING&&(this.state=A.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===A.FRAG_LOADING&&t&&"main"===r.type&&r.level===t.level&&r.sn===t.sn){var i=e.stats,a=this.levels[t.level],n=a.details;if(k.logger.log("Loaded  "+t.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+t.level),this.bitrateTest=!1,r.bitrateTest===!0&&this.hls.nextLoadLevel)this.state=A.IDLE,this.startFragRequested=!1,i.tparsed=i.tbuffered=performance.now(),this.hls.trigger(g.default.FRAG_BUFFERED,{stats:i,frag:t,id:"main"}),this.tick();else{this.state=A.PARSING,this.stats=i;var s=n.totalduration,o=isNaN(t.startDTS)?t.start:t.startDTS,l=t.level,u=t.sn,d=this.config.defaultAudioCodec||a.audioCodec;this.audioCodecSwap&&(k.logger.log("swapping playlist audio codec"),void 0===d&&(d=this.lastAudioCodec),d&&(d=d.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5")),this.pendingAppending=0,k.logger.log("Parsing "+u+" of ["+n.startSN+" ,"+n.endSN+"],level "+l+", cc "+t.cc);var f=this.demuxer;f||(f=this.demuxer=new c.default(this.hls,"main"));var h=n.PTSKnown||!n.live;f.push(e.payload,d,a.videoCodec,o,t.cc,l,u,s,t.decryptdata,h)}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent;if(t&&"main"===e.id&&e.sn===t.sn&&e.level===t.level&&this.state===A.PARSING){var r,i,a=e.tracks;if(a.audio&&this.altAudio&&delete a.audio,i=a.audio){var n=this.levels[this.level].audioCodec,s=navigator.userAgent.toLowerCase();n&&this.audioCodecSwap&&(k.logger.log("swapping playlist audio codec"),n=n.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==i.metadata.channelCount&&s.indexOf("firefox")===-1&&(n="mp4a.40.5"),s.indexOf("android")!==-1&&"audio/mpeg"!==i.container&&(n="mp4a.40.2",k.logger.log("Android: force audio codec to "+n)),i.levelCodec=n,i.id=e.id}if(i=a.video,i&&(i.levelCodec=this.levels[this.level].videoCodec,i.id=e.id),e.unique){var o={codec:"",levelCodec:""};for(r in e.tracks)i=a[r],o.container=i.container,o.codec&&(o.codec+=",",o.levelCodec+=","),i.codec&&(o.codec+=i.codec),i.levelCodec&&(o.levelCodec+=i.levelCodec);a={audiovideo:o}}this.hls.trigger(g.default.BUFFER_CODECS,a);for(r in a){i=a[r],k.logger.log("main track:"+r+",container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var l=i.initSegment;l&&(this.pendingAppending++,this.hls.trigger(g.default.BUFFER_APPENDING,{type:r,data:l,parent:"main",content:"initSegment"}))}this.tick()}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent;if(r&&"main"===e.id&&e.sn===r.sn&&e.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===A.PARSING){var i=this.levels[this.level],a=this.fragCurrent;k.logger.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0));var n=E.default.updateFragPTSDTS(i.details,a.sn,e.startPTS,e.endPTS,e.startDTS,e.endDTS),s=this.hls;s.trigger(g.default.LEVEL_PTS_UPDATED,{details:i.details,level:this.level,drift:n,type:e.type,start:e.startPTS,end:e.endPTS}),"video"===e.type&&(a.dropped=e.dropped),[e.data1,e.data2].forEach(function(r){r&&(t.pendingAppending++,s.trigger(g.default.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))}),this.bufferRange.push({type:e.type,start:e.startPTS,end:e.endPTS,frag:a}),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent;t&&"main"===e.id&&e.sn===t.sn&&e.level===t.level&&this.state===A.PARSING&&(this.stats.tparsed=performance.now(),this.state=A.PARSED,this._checkAppendedParsed())}},{key:"onAudioTrackSwitch",value:function(e){var t=!!e.url;if(t)this.videoBuffer&&this.mediaBuffer!==this.videoBuffer&&(k.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=this.videoBuffer);else if(this.mediaBuffer!==this.media){k.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var r=this.fragCurrent;r.loader&&(k.logger.log("switching to main audio track, cancel main fragment load"),r.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=A.IDLE}this.altAudio=t}},{key:"onBufferCreated",value:function(e){var t=e.tracks,r=void 0,i=void 0,a=!1;for(var n in t){var s=t[n];"main"===s.id?(i=n,r=s,"video"===n&&(this.videoBuffer=t[n].buffer)):a=!0}a&&r?(k.logger.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media}},{key:"onBufferAppended",value:function(e){if("main"===e.parent)switch(this.state){case A.PARSING:case A.PARSED:this.pendingAppending--,this._checkAppendedParsed()}}},{key:"_checkAppendedParsed",value:function(){if(this.state===A.PARSED&&0===this.pendingAppending){var e=this.fragCurrent,t=this.stats;if(e){this.fragPrevious=e,t.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*t.total/(t.tbuffered-t.tfirst)),this.hls.trigger(g.default.FRAG_BUFFERED,{stats:t,frag:e,id:"main"});var r=this.mediaBuffer?this.mediaBuffer:this.media;k.logger.log("main buffered : "+R.default.toString(r.buffered)),this.state=A.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=this.media,i=r&&f.default.isBuffered(r,r.currentTime)&&f.default.isBuffered(r,r.currentTime+.5);switch(e.details){case _.ErrorDetails.FRAG_LOAD_ERROR:case _.ErrorDetails.FRAG_LOAD_TIMEOUT:case _.ErrorDetails.KEY_LOAD_ERROR:case _.ErrorDetails.KEY_LOAD_TIMEOUT:if(!e.fatal){var a=this.fragLoadError;a?a++:a=1;var n=this.config;if(a<=n.fragLoadingMaxRetry||i||t.autoLevel&&t.level){this.fragLoadError=a,t.loadCounter=0;var s=Math.min(Math.pow(2,a-1)*n.fragLoadingRetryDelay,n.fragLoadingMaxRetryTimeout);k.logger.warn("mediaController: frag loading failed, retry in "+s+" ms"),this.retryDate=performance.now()+s,this.state=A.FRAG_LOADING_WAITING_RETRY}else k.logger.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.hls.trigger(g.default.ERROR,e),this.state=A.ERROR}break;case _.ErrorDetails.FRAG_LOOP_LOADING_ERROR:e.fatal||(i?(this._reduceMaxBufferLength(t.duration),this.state=A.IDLE):t.autoLevel&&0!==t.level||(e.fatal=!0,this.hls.trigger(g.default.ERROR,e),this.state=A.ERROR));break;case _.ErrorDetails.LEVEL_LOAD_ERROR:case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==A.ERROR&&(e.fatal?(this.state=A.ERROR,k.logger.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):this.state===A.WAITING_LEVEL&&(this.state=A.IDLE));break;case _.ErrorDetails.BUFFER_FULL_ERROR:this.state!==A.PARSING&&this.state!==A.PARSED||(i?(this._reduceMaxBufferLength(t.duration),this.state=A.IDLE):(k.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.state=A.PAUSED,this.hls.trigger(g.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY})))}}}},{key:"_reduceMaxBufferLength",value:function(e){var t=this.config;t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,k.logger.warn("reduce max buffer length to "+t.maxMaxBufferLength+"s and switch to IDLE state"),this.fragLoadIdx+=2*t.fragLoadingLoopThreshold)}},{key:"_checkBuffer",value:function(){var e=this.media;if(e&&e.readyState){var t=e.currentTime,r=e.buffered;if(this.loadedmetadata||!r.length||e.seeking)if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var i=f.default.bufferInfo(e,t,0),a=!(e.paused||e.ended||0===e.buffered.length),n=.5,s=t>e.playbackRate*this.lastCurrentTime,o=this.config;if(this.stalled&&s&&(this.stalled=!1,k.logger.log("playback not stuck anymore @"+t)),a&&i.len<=n&&(s?(n=0,this.seekHoleNudgeDuration=0):this.stalled?this.seekHoleNudgeDuration+=o.seekHoleNudgeDuration:(this.seekHoleNudgeDuration=0,k.logger.log("playback seems stuck @"+t),this.hls.trigger(g.default.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1}),this.stalled=!0),i.len<=n)){var l=i.nextStart,u=l-t;if(l&&u<o.maxSeekHole&&u>0){k.logger.log("adjust currentTime from "+e.currentTime+" to next buffered @ "+l+" + nudge "+this.seekHoleNudgeDuration);var d=l+this.seekHoleNudgeDuration-e.currentTime;e.currentTime=l+this.seekHoleNudgeDuration,this.hls.trigger(g.default.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,hole:d})}}}else{this.loadedmetadata=!0;var h=this.startPosition,c=f.default.isBuffered(e,h);t===h&&c||(k.logger.log("target start position:"+h),c||(h=r.start(0),k.logger.log("target start position not buffered, seek to buffered.start(0) "+h)),k.logger.log("adjust currentTime from "+t+" to "+h),e.currentTime=h)}}}},{key:"onFragLoadEmergencyAborted",value:function(){this.state=A.IDLE,this.loadedmetadata||(this.startFragRequested=!1),this.tick()}},{key:"onBufferFlushed",value:function(){var e=this.mediaBuffer?this.mediaBuffer:this.media,t=this.bufferRange,r=[],i=void 0,a=void 0;for(a=0;a<t.length;a++)i=t[a],f.default.isBuffered(e,(i.start+i.end)/2)&&r.push(i);this.bufferRange=r,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=A.IDLE,this.fragPrevious=null}},{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}},{key:"computeLivePosition",value:function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,k.logger.log("engine state transition from "+t+" to "+e),this.hls.trigger(g.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferRange(e.currentTime);if(t)return t.frag.level}return-1}},{key:"nextBufferRange",get:function(){var e=this.media;return e?this.followingBufferRange(this.getBufferRange(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferRange;return e?e.frag.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}]),t}(y.default);r.default=T},{22:22,26:26,27:27,28:28,30:30,31:31,41:41,45:45,46:46}],13:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(42),c=i(h),v=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MEDIA_ATTACHING,u.default.MEDIA_DETACHING,u.default.FRAG_PARSING_USERDATA,u.default.MANIFEST_LOADING,u.default.FRAG_LOADED,u.default.LEVEL_SWITCH));if(r.hls=e,r.config=e.config,r.enabled=!0,r.Cues=e.config.cueHandler,r.config.enableCEA708Captions){var i=r,s=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){r=document.createEvent("Event"),r.initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},o={newCue:function(e,t,r){if(!i.textTrack1){var a=i.getExistingTrack("1");a?(i.textTrack1=a,i.clearCurrentCues(i.textTrack1),s(i.textTrack1,i.media)):(i.textTrack1=i.createTextTrack("captions","English","en"),i.textTrack1.textTrack1=!0)}i.Cues.newCue(i.textTrack1,e,t,r)}},l={newCue:function(e,t,r){if(!i.textTrack2){var a=i.getExistingTrack("2");a?(i.textTrack2=a,i.clearCurrentCues(i.textTrack2),s(i.textTrack2,i.media)):(i.textTrack2=i.createTextTrack("captions","Spanish","es"),i.textTrack2.textTrack2=!0)}i.Cues.newCue(i.textTrack2,e,t,r)}};r.cea608Parser=new c.default(0,o,l)}return r}return s(t,e),o(t,[{key:"clearCurrentCues",value:function(e){if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}},{key:"getExistingTrack",value:function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r],a="textTrack"+e;if(i[a]===!0)return i}return null}},{key:"createTextTrack",value:function(e,t,r){if(this.media)return this.media.addTextTrack(e,t,r)}},{key:"destroy",value:function(){f.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(e){this.media=e.media}},{key:"onMediaDetaching",value:function(){this.clearCurrentCues(this.textTrack1),this.clearCurrentCues(this.textTrack2)}},{key:"onManifestLoading",value:function(){this.lastPts=Number.NEGATIVE_INFINITY}},{key:"onLevelSwitch",value:function(){"NONE"===this.hls.currentLevel.closedCaptions?this.enabled=!1:this.enabled=!0}},{key:"onFragLoaded",value:function(e){if("main"===e.frag.type){var t=e.frag.start;t<=this.lastPts&&(this.clearCurrentCues(this.textTrack1),this.clearCurrentCues(this.textTrack2)),this.lastPts=t}}},{key:"onFragParsingUserdata",value:function(e){if(this.enabled&&this.config.enableCEA708Captions)for(var t=0;t<e.samples.length;t++){var r=this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts,r)}}},{key:"extractCea608Data",value:function(e){for(var t,r,i,a,n,s=31&e[0],o=2,l=[],u=0;u<s;u++)t=e[o++],r=127&e[o++],i=127&e[o++],a=0!==(4&t),n=3&t,0===r&&0===i||a&&0===n&&(l.push(r),l.push(i));return l}}]),t}(f.default);r.default=v},{27:27,28:28,42:42}],14:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(t,r){i(this,e),this.subtle=t,this.aesIV=r}return a(e,[{key:"decrypt",value:function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}]),e}();r.default=n},{}],15:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(){i(this,e),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[],this.subMix[0]=new Uint32Array(256),this.subMix[1]=new Uint32Array(256),this.subMix[2]=new Uint32Array(256),this.subMix[3]=new Uint32Array(256),this.invSubMix=[],this.invSubMix[0]=new Uint32Array(256),this.invSubMix[1]=new Uint32Array(256),this.invSubMix[2]=new Uint32Array(256),this.invSubMix[3]=new Uint32Array(256),this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return a(e,[{key:"uint8ArrayToUint32Array_",value:function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<r.length;i++)r[i]=t.getUint32(4*i);return r}},{key:"initTable",value:function(){var e=this.sBox,t=this.invSBox,r=this.subMix[0],i=this.subMix[1],a=this.subMix[2],n=this.subMix[3],s=this.invSubMix[0],o=this.invSubMix[1],l=this.invSubMix[2],u=this.invSubMix[3],d=new Uint32Array(256),f=0,h=0,c=0;for(c=0;c<256;c++)c<128?d[c]=c<<1:d[c]=c<<1^283;for(c=0;c<256;c++){var v=h^h<<1^h<<2^h<<3^h<<4;v=v>>>8^255&v^99,e[f]=v,t[v]=f;var g=d[f],p=d[g],y=d[p],m=257*d[v]^16843008*v;r[f]=m<<24|m>>>8,i[f]=m<<16|m>>>16,a[f]=m<<8|m>>>24,n[f]=m,m=16843009*y^65537*p^257*g^16843008*f,s[v]=m<<24|m>>>8,o[v]=m<<16|m>>>16,l[v]=m<<8|m>>>24,u[v]=m,f?(f=g^d[d[d[y^g]]],h^=d[d[h]]):f=h=1}}},{key:"expandKey",value:function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n=this.ksRows=4*(a+6+1),s=void 0,o=void 0,l=this.keySchedule=new Uint32Array(this.ksRows),u=this.invKeySchedule=new Uint32Array(this.ksRows),d=this.sBox,f=this.rcon,h=this.invSubMix[0],c=this.invSubMix[1],v=this.invSubMix[2],g=this.invSubMix[3],p=void 0,y=void 0;for(s=0;s<n;s++)s<a?p=l[s]=t[s]:(y=p,s%a===0?(y=y<<8|y>>>24,y=d[y>>>24]<<24|d[y>>>16&255]<<16|d[y>>>8&255]<<8|d[255&y],y^=f[s/a|0]<<24):a>6&&s%a===4&&(y=d[y>>>24]<<24|d[y>>>16&255]<<16|d[y>>>8&255]<<8|d[255&y]),l[s]=p=(l[s-a]^y)>>>0);for(o=0;o<n;o++)s=n-o,y=3&o?l[s]:l[s-4],o<4||s<=4?u[o]=y:u[o]=h[d[y>>>24]]^c[d[y>>>16&255]]^v[d[y>>>8&255]]^g[d[255&y]],u[o]=u[o]>>>0}}},{key:"networkToHostOrderSwap",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"decrypt",value:function(e,t,r){for(var i,a,n=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,l=this.invSubMix[0],u=this.invSubMix[1],d=this.invSubMix[2],f=this.invSubMix[3],h=this.uint8ArrayToUint32Array_(r),c=h[0],v=h[1],g=h[2],p=h[3],y=new Int32Array(e),m=new Int32Array(y.length),E=void 0,b=void 0,R=void 0,_=void 0,k=void 0,A=void 0,T=void 0,S=void 0,L=void 0,D=void 0,w=void 0,O=void 0;t<y.length;){for(L=this.networkToHostOrderSwap(y[t]),D=this.networkToHostOrderSwap(y[t+1]),w=this.networkToHostOrderSwap(y[t+2]),O=this.networkToHostOrderSwap(y[t+3]),k=L^s[0],A=O^s[1],T=w^s[2],S=D^s[3],i=4,a=1;a<n;a++)E=l[k>>>24]^u[A>>16&255]^d[T>>8&255]^f[255&S]^s[i],b=l[A>>>24]^u[T>>16&255]^d[S>>8&255]^f[255&k]^s[i+1],R=l[T>>>24]^u[S>>16&255]^d[k>>8&255]^f[255&A]^s[i+2],_=l[S>>>24]^u[k>>16&255]^d[A>>8&255]^f[255&T]^s[i+3],k=E,A=b,T=R,S=_,i+=4;E=o[k>>>24]<<24^o[A>>16&255]<<16^o[T>>8&255]<<8^o[255&S]^s[i],b=o[A>>>24]<<24^o[T>>16&255]<<16^o[S>>8&255]<<8^o[255&k]^s[i+1],R=o[T>>>24]<<24^o[S>>16&255]<<16^o[k>>8&255]<<8^o[255&A]^s[i+2],_=o[S>>>24]<<24^o[k>>16&255]<<16^o[A>>8&255]<<8^o[255&T]^s[i+3],i+=3,m[t]=this.networkToHostOrderSwap(E^c),m[t+1]=this.networkToHostOrderSwap(_^v),m[t+2]=this.networkToHostOrderSwap(R^g),m[t+3]=this.networkToHostOrderSwap(b^p),c=L,v=D,g=w,p=O,t+=4}return m.buffer}},{key:"destroy",value:function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0}}]),e}();r.default=n},{}],16:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(14),o=i(s),l=e(17),u=i(l),d=e(15),f=i(d),h=e(26),c=e(45),v=function(){function e(t){a(this,e),this.hls=t;try{var r=window?window.crypto:crypto;this.subtle=r.subtle||r.webkitSubtle}catch(e){}this.disableWebCrypto=!this.supportsWebCrypto()}return n(e,[{key:"supportsWebCrypto",value:function(){return this.subtle&&"https:"===window.location.protocol}},{key:"decrypt",value:function(e,t,r,i){var a=this;this.disableWebCrypto&&this.hls.config.enableSoftwareAES?(c.logger.log("decrypting by JavaScript Implementation"),this.decryptor||(this.decryptor=new f.default),this.decryptor.expandKey(t),i(this.decryptor.decrypt(e,0,r))):!function(){c.logger.log("decrypting by WebCrypto API");var n=a.subtle;a.key!==t&&(a.key=t,a.fastAesKey=new u.default(n,t)),a.fastAesKey.expandKey().then(function(t){var a=new o.default(n,r);a.decrypt(e,t).then(function(e){i(e)})}).catch(function(n){a.onWebCryptoError(n,e,t,r,i)})}()}},{key:"onWebCryptoError",value:function(e,t,r,i,a){var n=this.hls;n.config.enableSoftwareAES?(c.logger.log("disabling to use WebCrypto API"),this.disableWebCrypto=!0,this.decrypt(t,r,i,a)):(c.logger.error("decrypting error : "+e.message),n.trigger(Event.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))}},{key:"destroy",value:function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)}}]),e}();r.default=v},{14:14,15:15,17:17,26:26,45:45}],17:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(t,r){i(this,e),this.subtle=t,this.key=r}return a(e,[{key:"expandKey",value:function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}]),e}();r.default=n},{}],18:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(19),o=i(s),l=e(45),u=e(24),d=i(u),f=function(){function e(t,r,i,n,s){a(this,e),this.observer=t,this.id=r,this.remuxerClass=i,this.config=n,this.remuxer=new this.remuxerClass(t,r,n,s),this.insertDiscontinuity()}return n(e,[{key:"insertDiscontinuity",value:function(){this._aacTrack={container:"audio/adts",type:"audio",id:-1,sequenceNumber:0,isAAC:!0,samples:[],len:0}}},{key:"push",value:function(e,t,r,i,a,n,s,u,f){var h,c,v,g,p,y,m,E,b,R,_=new d.default(e),k=90*_.timeStamp,A=!1;for(a!==this.lastCC?(l.logger.log(this.id+" discontinuity detected"),this.lastCC=a,this.insertDiscontinuity(),this.remuxer.switchLevel(),this.remuxer.insertDiscontinuity()):n!==this.lastLevel?(l.logger.log("audio track switch detected"),this.lastLevel=n,this.remuxer.switchLevel(),this.insertDiscontinuity()):s===this.lastSN+1&&(A=!0),h=this._aacTrack,this.lastSN=s,this.lastLevel=n,y=_.length,b=e.length;y<b-1&&(255!==e[y]||240!==(240&e[y+1]));y++);for(h.audiosamplerate||(c=o.default.getAudioConfig(this.observer,e,y,t),h.config=c.config,h.audiosamplerate=c.samplerate,h.channelCount=c.channelCount,h.codec=c.codec,h.duration=u,l.logger.log("parsed codec:"+h.codec+",rate:"+c.samplerate+",nb channel:"+c.channelCount)),p=0,g=9216e4/h.audiosamplerate;y+5<b&&(m=1&e[y+1]?7:9,v=(3&e[y+3])<<11|e[y+4]<<3|(224&e[y+5])>>>5,v-=m,v>0&&y+m+v<=b);)for(E=k+p*g,R={unit:e.subarray(y+m,y+m+v),pts:E,dts:E},h.samples.push(R),h.len+=v,y+=v+m,p++;y<b-1&&(255!==e[y]||240!==(240&e[y+1]));y++);this.remuxer.remux(n,s,this._aacTrack,{samples:[]},{samples:[{pts:k,dts:k,unit:_.payload}]},{samples:[]},i,A,f)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){var t,r,i=new d.default(e);if(i.hasTimeStamp)for(t=i.length,r=e.length;t<r-1;t++)if(255===e[t]&&240===(240&e[t+1]))return!0;return!1}}]),e}();r.default=f},{19:19,24:24,45:45}],19:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=e(45),s=e(26),o=function(){function e(){i(this,e)}return a(e,null,[{key:"getAudioConfig",value:function(e,t,r,i){var a,o,l,u,d,f=navigator.userAgent.toLowerCase(),h=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return a=((192&t[r+2])>>>6)+1,o=(60&t[r+2])>>>2,o>h.length-1?void e.trigger(Event.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+o}):(u=(1&t[r+2])<<2,u|=(192&t[r+3])>>>6,n.logger.log("manifest codec:"+i+",ADTS data:type:"+a+",sampleingIndex:"+o+"["+h[o]+"Hz],channelConfig:"+u),/firefox|OPR/i.test(f)?o>=6?(a=5,d=new Array(4),l=o-3):(a=2,d=new Array(2),l=o):f.indexOf("android")!==-1?(a=2,d=new Array(2),l=o):(a=5,d=new Array(4),i&&(i.indexOf("mp4a.40.29")!==-1||i.indexOf("mp4a.40.5")!==-1)||!i&&o>=6?l=o-3:((i&&i.indexOf("mp4a.40.2")!==-1&&o>=6&&1===u||!i&&1===u)&&(a=2,d=new Array(2)),l=o)),d[0]=a<<3,d[0]|=(14&o)>>1,d[1]|=(1&o)<<7,d[1]|=u<<3,5===a&&(d[1]|=(14&l)>>1,d[2]=(1&l)<<7,d[2]|=8,d[3]=0),{config:d,samplerate:h[o],channelCount:u,codec:"mp4a.40."+a})}}]),e}();r.default=o},{26:26,45:45}],20:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(28),o=i(s),l=e(26),u=e(18),d=i(u),f=e(25),h=i(f),c=e(38),v=i(c),g=e(39),p=i(g),y=function(){function e(t,r,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a(this,e),this.hls=t,this.id=r,this.config=this.hls.config||n,this.typeSupported=i}return n(e,[{key:"destroy",value:function(){var e=this.demuxer;e&&e.destroy()}},{key:"push",value:function(e,t,r,i,a,n,s,u,f){var c=this.demuxer;if(!c){var g=this.hls,y=this.id,m=this.config,E=this.typeSupported;if(h.default.probe(e))c=this.typeSupported.mp2t===!0?new h.default(g,y,p.default,m,E):new h.default(g,y,v.default,m,E);else{if(!d.default.probe(e))return void g.trigger(o.default.ERROR,{type:l.ErrorTypes.MEDIA_ERROR,id:y,details:l.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});c=new d.default(g,y,v.default,m,E)}this.demuxer=c}c.push(e,t,r,i,a,n,s,u,f)}}]),e}();r.default=y},{18:18,25:25,26:26,28:28,38:38,39:39}],21:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=e(20),n=i(a),s=e(28),o=i(s),l=e(45),u=e(1),d=i(u),f=function(e){var t=new d.default;t.trigger=function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.emit.apply(t,[e,e].concat(i))},t.off=function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.removeListener.apply(t,[e].concat(i))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",function(i){var a=i.data;switch(a.cmd){case"init":var s=JSON.parse(a.config);e.demuxer=new n.default(t,a.id,a.typeSupported,s);try{(0,l.enableLogs)(s.debug===!0)}catch(e){}r("init",null);break;case"demux":e.demuxer.push(new Uint8Array(a.data),a.audioCodec,a.videoCodec,a.timeOffset,a.cc,a.level,a.sn,a.duration,a.accurateTimeOffset)}}),t.on(o.default.FRAG_PARSING_INIT_SEGMENT,r),t.on(o.default.FRAG_PARSED,r),t.on(o.default.ERROR,r),t.on(o.default.FRAG_PARSING_METADATA,r),t.on(o.default.FRAG_PARSING_USERDATA,r),t.on(o.default.FRAG_PARSING_DATA,function(t,r){var i=r.data1.buffer,a=r.data2.buffer;delete r.data1,delete r.data2,e.postMessage({event:t,data:r,data1:i,data2:a},[i,a])})};r.default=f},{1:1,20:20,28:28,45:45}],22:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(28),o=i(s),l=e(20),u=i(l),d=e(21),f=i(d),h=e(45),c=e(16),v=i(c),g=e(26),p=function(){function t(r,i){a(this,t),this.hls=r,this.id=i;var n={mp4:MediaSource.isTypeSupported("video/mp4"),mp2t:r.config.enableMP2TPassThrough&&MediaSource.isTypeSupported("video/mp2t"),mpeg:MediaSource.isTypeSupported("audio/mpeg"),mp3:MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')};if(r.config.enableWorker&&"undefined"!=typeof Worker){h.logger.log("demuxing in webworker");var s=void 0;try{var l=e(3);s=this.w=l(f.default),this.onwmsg=this.onWorkerMessage.bind(this),s.addEventListener("message",this.onwmsg),s.onerror=function(e){r.trigger(o.default.ERROR,{type:g.ErrorTypes.OTHER_ERROR,details:g.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:e.message+" ("+e.filename+":"+e.lineno+")"}})},s.postMessage({cmd:"init",typeSupported:n,id:i,config:JSON.stringify(r.config)})}catch(e){h.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),s&&URL.revokeObjectURL(s.objectURL),this.demuxer=new u.default(r,i,n)}}else this.demuxer=new u.default(r,i,n);this.demuxInitialized=!0}return n(t,[{key:"destroy",value:function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.decrypter;r&&(r.destroy(),this.decrypter=null)}},{key:"pushDecrypted",value:function(e,t,r,i,a,n,s,o,l){var u=this.w;if(u)u.postMessage({cmd:"demux",data:e,audioCodec:t,videoCodec:r,timeOffset:i,cc:a,level:n,sn:s,duration:o,accurateTimeOffset:l},[e]);else{var d=this.demuxer;d&&d.push(new Uint8Array(e),t,r,i,a,n,s,o,l)}}},{key:"push",value:function(e,t,r,i,a,n,s,l,u,d){if(e.byteLength>0&&null!=u&&null!=u.key&&"AES-128"===u.method){null==this.decrypter&&(this.decrypter=new v.default(this.hls));var f=this,h=performance.now();this.decrypter.decrypt(e,u.key.buffer,u.iv.buffer,function(e){f.hls.trigger(o.default.FRAG_DECRYPTED,{level:n,sn:s,stats:{tstart:h,tdecrypt:performance.now()}}),f.pushDecrypted(e,t,r,i,a,n,s,l,d)})}else this.pushDecrypted(e,t,r,i,a,n,s,l,d)}},{key:"onWorkerMessage",value:function(e){var t=e.data,r=this.hls;switch(t.event){case"init":URL.revokeObjectURL(this.w.objectURL);break;case o.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data.data2=new Uint8Array(t.data2);default:r.trigger(t.event,t.data)}}}]),t}();r.default=p},{16:16,20:20,21:21,26:26,28:28,3:3,45:45}],23:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,
i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=e(45),s=function(){function e(t){i(this,e),this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}return a(e,[{key:"loadWord",value:function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a}},{key:"skipBits",value:function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}},{key:"readBits",value:function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&n.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!==(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){return this.readBits(8)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"skipScalingList",value:function(e){var t,r,i=8,a=8;for(t=0;t<e;t++)0!==a&&(r=this.readEG(),a=(i+r+256)%256),i=0===a?i:a}},{key:"readSPS",value:function(){var e,t,r,i,a,n,s,o,l,u=0,d=0,f=0,h=0,c=1,v=this.readUByte.bind(this),g=this.readBits.bind(this),p=this.readUEG.bind(this),y=this.readBoolean.bind(this),m=this.skipBits.bind(this),E=this.skipEG.bind(this),b=this.skipUEG.bind(this),R=this.skipScalingList.bind(this);if(v(),e=v(),t=g(5),m(3),r=v(),b(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var _=p();if(3===_&&m(1),b(),b(),m(1),y())for(o=3!==_?8:12,l=0;l<o;l++)y()&&R(l<6?16:64)}b();var k=p();if(0===k)p();else if(1===k)for(m(1),E(),E(),i=p(),l=0;l<i;l++)E();if(b(),m(1),a=p(),n=p(),s=g(1),0===s&&m(1),m(1),y()&&(u=p(),d=p(),f=p(),h=p()),y()&&y()){var A=void 0,T=v();switch(T){case 1:A=[1,1];break;case 2:A=[12,11];break;case 3:A=[10,11];break;case 4:A=[16,11];break;case 5:A=[40,33];break;case 6:A=[24,11];break;case 7:A=[20,11];break;case 8:A=[32,11];break;case 9:A=[80,33];break;case 10:A=[18,11];break;case 11:A=[15,11];break;case 12:A=[64,33];break;case 13:A=[160,99];break;case 14:A=[4,3];break;case 15:A=[3,2];break;case 16:A=[2,1];break;case 255:A=[v()<<8|v(),v()<<8|v()]}A&&(c=A[0]/A[1])}return{width:Math.ceil((16*(a+1)-2*u-2*d)*c),height:(2-s)*(n+1)*16-(s?2:4)*(f+h)}}},{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}]),e}();r.default=s},{45:45}],24:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=e(45),s=function(){function e(t){i(this,e),this._hasTimeStamp=!1;for(var r,a,s,o,l,u,d,f,h=0;;)if(d=this.readUTF(t,h,3),h+=3,"ID3"===d)h+=3,r=127&t[h++],a=127&t[h++],s=127&t[h++],o=127&t[h++],l=(r<<21)+(a<<14)+(s<<7)+o,u=h+l,this._parseID3Frames(t,h,u),h=u;else{if("3DI"!==d)return h-=3,f=h,void(f&&(this.hasTimeStamp||n.logger.warn("ID3 tag found, but no timestamp"),this._length=f,this._payload=t.subarray(0,f)));h+=7,n.logger.log("3DI footer found, end: "+h)}}return a(e,[{key:"readUTF",value:function(e,t,r){var i="",a=t,n=t+r;do i+=String.fromCharCode(e[a++]);while(a<n);return i}},{key:"_parseID3Frames",value:function(e,t,r){for(var i,a,s,o,l;t+8<=r;)switch(i=this.readUTF(e,t,4),t+=4,a=e[t++]<<24+e[t++]<<16+e[t++]<<8+e[t++],o=e[t++]<<8+e[t++],s=t,i){case"PRIV":if("com.apple.streaming.transportStreamTimestamp"===this.readUTF(e,t,44)){t+=44,t+=4;var u=1&e[t++];this._hasTimeStamp=!0,l=((e[t++]<<23)+(e[t++]<<15)+(e[t++]<<7)+e[t++])/45,u&&(l+=47721858.84),l=Math.round(l),n.logger.trace("ID3 timestamp found: "+l),this._timeStamp=l}}}},{key:"hasTimeStamp",get:function(){return this._hasTimeStamp}},{key:"timeStamp",get:function(){return this._timeStamp}},{key:"length",get:function(){return this._length}},{key:"payload",get:function(){return this._payload}}]),e}();r.default=s},{45:45}],25:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(19),o=i(s),l=e(28),u=i(l),d=e(23),f=i(d),h=e(45),c=e(26),v=function(){function e(t,r,i,n,s){a(this,e),this.observer=t,this.id=r,this.remuxerClass=i,this.config=n,this.typeSupported=s,this.lastCC=0,this.remuxer=new this.remuxerClass(t,r,n,s)}return n(e,[{key:"switchLevel",value:function(){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack={container:"video/mp2t",type:"video",id:-1,sequenceNumber:0,samples:[],len:0,dropped:0},this._audioTrack={container:"video/mp2t",type:"audio",id:-1,sequenceNumber:0,samples:[],len:0,isAAC:!0},this._id3Track={type:"id3",id:-1,sequenceNumber:0,samples:[],len:0},this._txtTrack={type:"text",id:-1,sequenceNumber:0,samples:[],len:0},this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.remuxer.switchLevel()}},{key:"insertDiscontinuity",value:function(){this.switchLevel(),this.remuxer.insertDiscontinuity()}},{key:"push",value:function(e,t,r,i,a,n,s,o,l){var d,f,v,g,p,y,m=e.length,E=this.remuxer.passthrough,b=!1;this.audioCodec=t,this.videoCodec=r,this._duration=o,this.contiguous=!1,this.accurateTimeOffset=l,a!==this.lastCC&&(h.logger.log("discontinuity detected"),this.insertDiscontinuity(),this.lastCC=a),n!==this.lastLevel?(h.logger.log("level switch detected"),this.switchLevel(),this.lastLevel=n):s===this.lastSN+1&&(this.contiguous=!0),this.lastSN=s;var R=this.pmtParsed,_=this._avcTrack,k=this._audioTrack,A=this._id3Track,T=_.id,S=k.id,L=A.id,D=this._pmtId,w=_.pesData,O=k.pesData,C=A.pesData,P=this._parsePAT,I=this._parsePMT,M=this._parsePES,x=this._parseAVCPES.bind(this),F=this._parseAACPES.bind(this),N=this._parseMPEGPES.bind(this),U=this._parseID3PES.bind(this);for(m-=m%188,d=0;d<m;d+=188)if(71===e[d]){if(f=!!(64&e[d+1]),v=((31&e[d+1])<<8)+e[d+2],g=(48&e[d+3])>>4,g>1){if(p=d+5+e[d+4],p===d+188)continue}else p=d+4;switch(v){case T:if(f){if(w&&(y=M(w))&&(x(y,!1),E&&_.codec&&(S===-1||k.codec)))return void this.remux(n,s,e,i);w={data:[],size:0}}w&&(w.data.push(e.subarray(p,d+188)),w.size+=d+188-p);break;case S:if(f){if(O&&(y=M(O))&&(k.isAAC?F(y):N(y),E&&k.codec&&(T===-1||_.codec)))return void this.remux(n,s,e,i);O={data:[],size:0}}O&&(O.data.push(e.subarray(p,d+188)),O.size+=d+188-p);break;case L:f&&(C&&(y=M(C))&&U(y),C={data:[],size:0}),C&&(C.data.push(e.subarray(p,d+188)),C.size+=d+188-p);break;case 0:f&&(p+=e[p]+1),D=this._pmtId=P(e,p);break;case D:f&&(p+=e[p]+1);var G=I(e,p,this.typeSupported.mpeg===!0||this.typeSupported.mp3===!0);T=G.avc,T>0&&(_.id=T),S=G.audio,S>0&&(k.id=S,k.isAAC=G.isAAC),L=G.id3,L>0&&(A.id=L),b&&!R&&(h.logger.log("reparse from beginning"),b=!1,d=-188),R=this.pmtParsed=!0;break;case 17:case 8191:break;default:b=!0}}else this.observer.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,id:this.id,details:c.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});w&&(y=M(w))?(x(y,!0),_.pesData=null):_.pesData=w,O&&(y=M(O))?(k.isAAC?F(y):N(y),k.pesData=null):(O&&O.size&&h.logger.log("last AAC PES packet truncated,might overlap between fragments"),k.pesData=O),C&&(y=M(C))?(U(y),A.pesData=null):A.pesData=C,this.remux(n,s,null,i)}},{key:"remux",value:function(e,t,r,i){for(var a=this._avcTrack,n=a.samples,s=0,o=0,l=0;l<n.length;l++){for(var u=n[l],d=u.units.units,f=d.length,h=0,c=0;c<f;c++)h+=d[c].data.length;o+=h,s+=f,u.length=h}a.len=o,a.nbNalu=s,this.remuxer.remux(e,t,this._audioTrack,this._avcTrack,this._id3Track,this._txtTrack,i,this.contiguous,this.accurateTimeOffset,r)}},{key:"destroy",value:function(){this.switchLevel(),this._initPTS=this._initDTS=void 0,this._duration=0}},{key:"_parsePAT",value:function(e,t){return(31&e[t+10])<<8|e[t+11]}},{key:"_parsePMT",value:function(e,t,r){var i,a,n,s,o={audio:-1,avc:-1,id3:-1,isAAC:!0};for(i=(15&e[t+1])<<8|e[t+2],a=t+3+i-4,n=(15&e[t+10])<<8|e[t+11],t+=12+n;t<a;){switch(s=(31&e[t+1])<<8|e[t+2],e[t]){case 15:o.audio===-1&&(o.audio=s);break;case 21:o.id3===-1&&(o.id3=s);break;case 27:o.avc===-1&&(o.avc=s);break;case 3:case 4:r?o.audio===-1&&(o.audio=s,o.isAAC=!1):h.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:h.logger.warn("HEVC stream type found, not supported for now");break;default:h.logger.log("unkown stream type:"+e[t])}t+=((15&e[t+3])<<8|e[t+4])+5}return o}},{key:"_parsePES",value:function(e){var t,r,i,a,n,s,o,l,u,d=0,f=e.data;if(!e||0===e.size)return null;for(;f[0].length<19&&f.length>1;){var h=new Uint8Array(f[0].length+f[1].length);h.set(f[0]),h.set(f[1],f[0].length),f[0]=h,f.splice(1,1)}if(t=f[0],i=(t[0]<<16)+(t[1]<<8)+t[2],1===i){if(a=(t[4]<<8)+t[5],a&&a>e.size-6)return null;for(r=t[7],192&r&&(o=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2,o>4294967295&&(o-=8589934592),64&r?(l=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2,l>4294967295&&(l-=8589934592)):l=o),n=t[8],u=n+9,e.size-=u,s=new Uint8Array(e.size);f.length;){t=f.shift();var c=t.byteLength;if(u){if(u>c){u-=c;continue}t=t.subarray(u),c-=u,u=0}s.set(t,d),d+=c}return a&&(a-=n+3),{data:s,pts:o,dts:l,len:a}}return null}},{key:"pushAccesUnit",value:function(e,t){e.units.units.length&&e.frame&&(!this.config.forceKeyFrameOnDiscontinuity||e.key===!0||t.sps&&(t.samples.length||this.contiguous)?t.samples.push(e):t.dropped++),e.debug.length&&h.logger.log(e.pts+"/"+e.dts+":"+e.debug+","+e.units.length)}},{key:"_parseAVCPES",value:function(e,t){var r,i,a,n=this,s=this._avcTrack,o=this._parseAVCNALu(e.data),l=!1,u=this.avcSample;e.data=null,o.forEach(function(t){switch(t.type){case 1:i=!0,l&&u&&(u.debug+="NDR "),u.frame=!0;var o=t.data;if(o.length>1){var d=new f.default(o).readSliceType();2!==d&&4!==d&&7!==d&&9!==d||(u.key=!0)}break;case 5:i=!0,u||(u=n.avcSample=n._createAVCSample(!0,e.pts,e.dts,"")),l&&(u.debug+="IDR "),u.key=!0,u.frame=!0;break;case 6:i=!0,l&&u&&(u.debug+="SEI "),r=new f.default(n.discardEPB(t.data)),r.readUByte();for(var h=0,c=0,v=!1,g=0;!v&&r.bytesAvailable>1;){h=0;do g=r.readUByte(),h+=g;while(255===g);c=0;do g=r.readUByte(),c+=g;while(255===g);if(4===h&&0!==r.bytesAvailable){v=!0;var p=r.readUByte();if(181===p){var y=r.readUShort();if(49===y){var m=r.readUInt();if(1195456820===m){var E=r.readUByte();if(3===E){var b=r.readUByte(),R=r.readUByte(),_=31&b,k=[b,R];for(a=0;a<_;a++)k.push(r.readUByte()),k.push(r.readUByte()),k.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:k})}}}}}else if(c<r.bytesAvailable)for(a=0;a<c;a++)r.readUByte()}break;case 7:if(i=!0,l&&u&&(u.debug+="SPS "),!s.sps){r=new f.default(t.data);var A=r.readSPS();s.width=A.width,s.height=A.height,s.sps=[t.data],s.duration=n._duration;var T=t.data.subarray(1,4),S="avc1.";for(a=0;a<3;a++){var L=T[a].toString(16);L.length<2&&(L="0"+L),S+=L}s.codec=S}break;case 8:i=!0,l&&u&&(u.debug+="PPS "),s.pps||(s.pps=[t.data]);break;case 9:i=!1,u&&n.pushAccesUnit(u,s),u=n.avcSample=n._createAVCSample(!1,e.pts,e.dts,l?"AUD ":"");break;case 12:i=!1;break;default:i=!1,u&&(u.debug+="unknown NAL "+t.type+" ")}if(u&&i){var D=u.units;D.units.push(t)}}),t&&u&&(this.pushAccesUnit(u,s),this.avcSample=null)}},{key:"_createAVCSample",value:function(e,t,r,i){return{key:e,pts:t,dts:r,units:{units:[],length:0},debug:i}}},{key:"_insertSampleInOrder",value:function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)}},{key:"_getLastNalUnit",value:function(){var e=this.avcSample,t=void 0;if(!e||0===e.units.units.length){var r=this._avcTrack,i=r.samples;e=i[i.length-1]}if(e){var a=e.units.units;t=a[a.length-1]}return t}},{key:"_parseAVCNALu",value:function(e){for(var t,r,i,a,n,s=0,o=e.byteLength,l=this._avcTrack,u=l.naluState||0,d=u,f=[],h=-1;s<o;)if(t=e[s++],u)if(1!==u)switch(u){case 2:case 3:if(0===t)u=3;else if(1===t){if(h>=0)i={data:e.subarray(h,s-u-1),type:n},f.push(i);else{var c=this._getLastNalUnit();if(c&&(d&&s<=4-d&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-d)),r=s-u-1,r>0)){var v=new Uint8Array(c.data.byteLength+r);v.set(c.data,0),v.set(e.subarray(0,r),c.data.byteLength),c.data=v}}s<o?(a=31&e[s],h=s,n=a,u=0):u=-1}else u=0;break;case-1:h=0,n=31&t,u=0}else u=t?0:2;else u=t?0:1;if(h>=0&&u>=0&&(i={data:e.subarray(h,o),type:n,state:u},f.push(i)),0===f.length){var g=this._getLastNalUnit();if(g){var p=new Uint8Array(g.data.byteLength+e.byteLength);p.set(g.data,0),p.set(e,g.data.byteLength),g.data=p}}return l.naluState=u,f}},{key:"discardEPB",value:function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===a[0]&&(s++,a.shift()),r[n]=e[s];return r}},{key:"_parseAACPES",value:function(e){var t,r,i,a,n,s,l,d,f,v=this._audioTrack,g=e.data,p=e.pts,y=0,m=this.aacOverFlow,E=this.aacLastPTS;if(m){var b=new Uint8Array(m.byteLength+g.byteLength);b.set(m,0),b.set(g,m.byteLength),g=b}for(n=y,d=g.length;n<d-1&&(255!==g[n]||240!==(240&g[n+1]));n++);if(n){var R,_;if(n<d-1?(R="AAC PES did not start with ADTS header,offset:"+n,_=!1):(R="no ADTS header found in AAC PES",_=!0),h.logger.warn("parsing error:"+R),this.observer.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,id:this.id,details:c.ErrorDetails.FRAG_PARSING_ERROR,fatal:_,reason:R}),_)return}if(v.audiosamplerate||(t=o.default.getAudioConfig(this.observer,g,n,this.audioCodec),v.config=t.config,v.audiosamplerate=t.samplerate,v.channelCount=t.channelCount,v.codec=t.codec,v.duration=this._duration,h.logger.log("parsed codec:"+v.codec+",rate:"+t.samplerate+",nb channel:"+t.channelCount)),a=0,i=9216e4/v.audiosamplerate,m&&E){var k=E+i;Math.abs(k-p)>1&&(h.logger.log("AAC: align PTS for overlapping frames by "+Math.round((k-p)/90)),p=k)}for(;n+5<d&&(s=1&g[n+1]?7:9,r=(3&g[n+3])<<11|g[n+4]<<3|(224&g[n+5])>>>5,r-=s,r>0&&n+s+r<=d);)for(l=p+a*i,f={unit:g.subarray(n+s,n+s+r),pts:l,dts:l},v.samples.push(f),v.len+=r,n+=r+s,a++;n<d-1&&(255!==g[n]||240!==(240&g[n+1]));n++);m=n<d?g.subarray(n,d):null,this.aacOverFlow=m,this.aacLastPTS=l}},{key:"_parseMPEGPES",value:function(e){for(var t,r=e.data,i=e.pts,a=r.length,n=0,s=0;s<a&&(t=this._parseMpeg(r,s,a,n++,i))>0;)s+=t}},{key:"_onMpegFrame",value:function(e,t,r,i,a,n){var s=1152/r*1e3,o=n+a*s,l=this._audioTrack;l.config=[],l.channelCount=i,l.audiosamplerate=r,l.duration=this._duration,l.samples.push({unit:e,pts:o,dts:o}),l.len+=e.length}},{key:"_onMpegNoise",value:function(e){h.logger.warn("mpeg audio has noise: "+e.length+" bytes")}},{key:"_parseMpeg",value:function(e,t,r,i,a){var n=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],s=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3];if(t+2>r)return-1;if(255===e[t]||224===(224&e[t+1])){if(t+24>r)return-1;var o=e[t+1]>>3&3,l=e[t+1]>>1&3,u=e[t+2]>>4&15,d=e[t+2]>>2&3,f=!!(2&e[t+2]);if(1!==o&&0!==u&&15!==u&&3!==d){var h=3===o?3-l:3===l?3:4,c=1e3*n[14*h+u-1],v=3===o?0:2===o?1:2,g=s[3*v+d],p=f?1:0,y=e[t+3]>>6===3?1:2,m=3===l?(3===o?12:6)*c/g+p<<2:(3===o?144:72)*c/g+p|0;return t+m>r?-1:(this._onMpegFrame&&this._onMpegFrame(e.subarray(t,t+m),c,g,y,i,a),m)}}for(var E=t+2;E<r;){if(255===e[E-1]&&224===(224&e[E]))return this._onMpegNoise&&this._onMpegNoise(e.subarray(t,E-1)),E-t-1;E++}return-1}},{key:"_parseID3PES",value:function(e){this._id3Track.samples.push(e)}}],[{key:"probe",value:function(e){return e.length>=564&&71===e[0]&&71===e[188]&&71===e[376]}}]),e}();r.default=v},{19:19,23:23,26:26,28:28,45:45}],26:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},r.ErrorDetails={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",INTERNAL_EXCEPTION:"internalException"}},{}],27:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=e(45),l=e(26),u=e(28),d=i(u),f=function(){function e(t){a(this,e),this.hls=t,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,i=Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];this.handledEvents=i,this.useGenericHandler=!0,this.registerListeners()}return s(e,[{key:"destroy",value:function(){this.unregisterListeners()}},{key:"isEventHandler",value:function(){return"object"===n(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}},{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if("hlsEventGeneric"===e)throw new Error("Forbidden event name: "+e);this.hls.on(e,this.onEvent)}.bind(this))}},{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)}.bind(this))}},{key:"onEvent",value:function(e,t){this.onEventGeneric(e,t)}},{key:"onEventGeneric",value:function(e,t){var r=function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)};try{r.call(this,e,t).call()}catch(t){o.logger.error("internal error happened while processing "+e+":"+t.message),this.hls.trigger(d.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}}}]),e}();r.default=f},{26:26,28:28,45:45}],28:[function(e,t,r){"use strict";t.exports={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVEL_SWITCH:"hlsLevelSwitch",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCH:"hlsAudioTrackSwitch",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},{}],29:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(){i(this,e)}return a(e,null,[{key:"getSilentFrame",value:function(e){return 1===e?new Uint8Array([0,200,0,128,35,128]):2===e?new Uint8Array([33,0,73,144,2,25,0,35,128]):3===e?new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]):4===e?new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]):5===e?new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]):6===e?new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]):null}}]),e}();r.default=n},{}],30:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(){i(this,e)}return a(e,null,[{key:"isBuffered",value:function(e,t){if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0;return!1}},{key:"bufferInfo",value:function(e,t,r){if(e){var i,a=e.buffered,n=[];for(i=0;i<a.length;i++)n.push({start:a.start(i),end:a.end(i)});return this.bufferedInfo(n,t,r)}return{len:0,start:0,end:0,nextStart:void 0}}},{key:"bufferedInfo",value:function(e,t,r){var i,a,n,s,o,l=[];for(e.sort(function(e,t){var r=e.start-t.start;return r?r:t.end-e.end}),o=0;o<e.length;o++){var u=l.length;if(u){var d=l[u-1].end;e[o].start-d<r?e[o].end>d&&(l[u-1].end=e[o].end):l.push(e[o])}else l.push(e[o])}for(o=0,i=0,a=n=t;o<l.length;o++){var f=l[o].start,h=l[o].end;if(t+r>=f&&t<h)a=f,n=h,i=n-t;else if(t+r<f){s=f;break}}return{len:i,start:a,end:n,nextStart:s}}}]),e}();r.default=n},{}],31:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=e(45),s=function(){function e(){i(this,e)}return a(e,null,[{key:"mergeDetails",value:function(t,r){var i,a=Math.max(t.startSN,r.startSN)-r.startSN,s=Math.min(t.endSN,r.endSN)-r.startSN,o=r.startSN-t.startSN,l=t.fragments,u=r.fragments,d=0;if(s<a)return void(r.PTSKnown=!1);for(var f=a;f<=s;f++){var h=l[o+f],c=u[f];c&&h&&(d=h.cc-c.cc,isNaN(h.startPTS)||(c.start=c.startPTS=h.startPTS,c.endPTS=h.endPTS,c.duration=h.duration,i=c))}if(d)for(n.logger.log("discontinuity sliding from playlist, take drift into account"),f=0;f<u.length;f++)u[f].cc+=d;if(i)e.updateFragPTSDTS(r,i.sn,i.startPTS,i.endPTS,i.startDTS,i.endDTS);else if(o>=0&&o<l.length){var v=l[o].start;for(f=0;f<u.length;f++)u[f].start+=v}r.PTSKnown=t.PTSKnown}},{key:"updateFragPTSDTS",value:function(t,r,i,a,n,s){var o,l,u,d;if(!t||r<t.startSN||r>t.endSN)return 0;if(o=r-t.startSN,l=t.fragments,u=l[o],!isNaN(u.startPTS)){var f=Math.abs(u.startPTS-i);isNaN(u.deltaPTS)?u.deltaPTS=f:u.deltaPTS=Math.max(f,u.deltaPTS),i=Math.min(i,u.startPTS),a=Math.max(a,u.endPTS),n=Math.min(n,u.startDTS),s=Math.max(s,u.endDTS)}var h=i-u.start;for(u.start=u.startPTS=i,u.endPTS=a,u.startDTS=n,u.endDTS=s,u.duration=a-i,d=o;d>0;d--)e.updatePTS(l,d,d-1);for(d=o;d<l.length-1;d++)e.updatePTS(l,d,d+1);return t.PTSKnown=!0,h}},{key:"updatePTS",value:function(e,t,r){var i=e[t],a=e[r],s=a.startPTS;isNaN(s)?r>t?a.start=i.start+i.duration:a.start=i.start-a.duration:r>t?(i.duration=s-i.start,i.duration<0&&n.logger.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-s,a.duration<0&&n.logger.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"))}}]),e}();r.default=s},{45:45}],32:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(28),o=i(s),l=e(26),u=e(36),d=i(u),f=e(34),h=i(f),c=e(4),v=i(c),g=e(7),p=i(g),y=e(8),m=i(y),E=e(5),b=i(E),R=e(12),_=i(R),k=e(11),A=i(k),T=e(13),S=i(T),L=e(10),D=i(L),w=e(6),O=i(w),C=e(45),P=e(47),I=i(P),M=e(1),x=i(M),F=e(35),N=i(F),U=e(43),G=i(U),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e);var r=e.DefaultConfig;if((t.liveSyncDurationCount||t.liveMaxLatencyDurationCount)&&(t.liveSyncDuration||t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var i in r)i in t||(t[i]=r[i]);if(void 0!==t.liveMaxLatencyDurationCount&&t.liveMaxLatencyDurationCount<=t.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==t.liveMaxLatencyDuration&&(t.liveMaxLatencyDuration<=t.liveSyncDuration||void 0===t.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0,C.enableLogs)(t.debug),this.config=t;var n=this.observer=new x.default;n.trigger=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n.emit.apply(n,[e,e].concat(r))},n.off=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n.removeListener.apply(n,[e].concat(r))},this.on=n.on.bind(n),this.off=n.off.bind(n),this.trigger=n.trigger.bind(n),this.playlistLoader=new d.default(this),this.fragmentLoader=new h.default(this),this.levelController=new A.default(this),this.abrController=new t.abrController(this),this.bufferController=new t.bufferController(this),this.capLevelController=new t.capLevelController(this),this.fpsController=new t.fpsController(this),this.streamController=new t.streamController(this),this.audioStreamController=new t.audioStreamController(this),this.timelineController=new t.timelineController(this),this.audioTrackController=new O.default(this),this.keyLoader=new N.default(this)}return n(e,null,[{key:"isSupported",value:function(){return window.MediaSource=window.MediaSource||window.WebKitMediaSource,window.MediaSource&&"function"==typeof window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}},{key:"version",get:function(){return"0.6.14"}},{key:"Events",get:function(){return o.default}},{key:"ErrorTypes",get:function(){return l.ErrorTypes}},{key:"ErrorDetails",get:function(){return l.ErrorDetails}},{key:"DefaultConfig",get:function(){return e.defaultConfig||(e.defaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,seekHoleNudgeDuration:.01,stalledInBufferedNudgeThreshold:10,maxFragLookUpTolerance:.2,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,enableLazyURLResolve:!1,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:I.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,fetchSetup:void 0,abrController:v.default,bufferController:p.default,capLevelController:m.default,fpsController:D.default,streamController:_.default,audioStreamController:b.default,timelineController:S.default,cueHandler:G.default,enableCEA708Captions:!0,enableMP2TPassThrough:!1,stretchShortVideoTrack:!1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0}),e.defaultConfig},set:function(t){e.defaultConfig=t}}]),n(e,[{key:"destroy",value:function(){C.logger.log("destroy"),this.trigger(o.default.DESTROYING),this.detachMedia(),this.playlistLoader.destroy(),this.fragmentLoader.destroy(),this.levelController.destroy(),this.abrController.destroy(),this.bufferController.destroy(),this.capLevelController.destroy(),this.fpsController.destroy(),this.streamController.destroy(),this.audioStreamController.destroy(),this.timelineController.destroy(),this.audioTrackController.destroy(),this.keyLoader.destroy(),this.url=null,this.observer.removeAllListeners()}},{key:"attachMedia",value:function(e){C.logger.log("attachMedia"),this.media=e,this.trigger(o.default.MEDIA_ATTACHING,{media:e})}},{key:"detachMedia",value:function(){C.logger.log("detachMedia"),this.trigger(o.default.MEDIA_DETACHING),this.media=null;
}},{key:"loadSource",value:function(e){C.logger.log("loadSource:"+e),this.url=e,this.trigger(o.default.MANIFEST_LOADING,{url:e})}},{key:"startLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;C.logger.log("startLoad("+e+")"),this.levelController.startLoad(),this.streamController.startLoad(e),this.audioStreamController.startLoad(e)}},{key:"stopLoad",value:function(){C.logger.log("stopLoad"),this.levelController.stopLoad(),this.streamController.stopLoad(),this.audioStreamController.stopLoad()}},{key:"swapAudioCodec",value:function(){C.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}},{key:"recoverMediaError",value:function(){C.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)}},{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){C.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){C.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){C.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.abrController.minAutoLevel)},set:function(e){C.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){C.logger.log("set startLevel:"+e),this.levelController.startLevel=e}},{key:"autoLevelCapping",get:function(){return this.abrController.autoLevelCapping},set:function(e){C.logger.log("set autoLevelCapping:"+e),this.abrController.autoLevelCapping=e}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"audioTracks",get:function(){return this.audioTrackController.audioTracks}},{key:"audioTrack",get:function(){return this.audioTrackController.audioTrack},set:function(e){this.audioTrackController.audioTrack=e}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}}]),e}();r.default=B},{1:1,10:10,11:11,12:12,13:13,26:26,28:28,34:34,35:35,36:36,4:4,43:43,45:45,47:47,5:5,6:6,7:7,8:8}],33:[function(e,t,r){"use strict";t.exports=e(32).default},{32:32}],34:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(26),c=e(45),v=e(2),g=i(v),p=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.FRAG_LOADING));return r.loaders={},r}return s(t,e),o(t,[{key:"destroy",value:function(){var e=this.loaders;for(var t in e){var r=e[t];r&&r.destroy()}this.loaders={},f.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag,r=t.type,i=this.loaders[r],a=this.hls.config;t.loaded=0,i&&(c.logger.warn("abort previous fragment loader for type:"+r),i.abort()),i=this.loaders[r]=t.loader="undefined"!=typeof a.fLoader?new a.fLoader(a):new a.loader(a);var n=void 0,s=void 0,o=void 0,l=t.url?t.url:g.default.buildAbsoluteURL(t.baseurl,t.relurl);n={url:l,frag:t,responseType:"arraybuffer",progressData:!1};var u=t.byteRangeStartOffset,d=t.byteRangeEndOffset;isNaN(u)||isNaN(d)||(n.rangeStart=u,n.rangeEnd=d),s={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},o={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},i.load(n,s,o)}},{key:"loadsuccess",value:function(e,t,r){var i=e.data,a=r.frag;a.loader=void 0,this.loaders[a.type]=void 0,this.hls.trigger(u.default.FRAG_LOADED,{payload:i,frag:a,stats:t})}},{key:"loaderror",value:function(e,t){var r=t.loader;r&&r.abort(),this.loaders[t.type]=void 0,this.hls.trigger(u.default.ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.loader;r&&r.abort(),this.loaders[t.type]=void 0,this.hls.trigger(u.default.ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag})}},{key:"loadprogress",value:function(e,t,r){var i=t.frag;i.loaded=e.loaded,this.hls.trigger(u.default.FRAG_LOAD_PROGRESS,{frag:i,stats:e})}}]),t}(f.default);r.default=p},{2:2,26:26,27:27,28:28,45:45}],35:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(28),u=i(l),d=e(27),f=i(d),h=e(26),c=e(45),v=e(2),g=i(v),p=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.KEY_LOADING));return r.loaders={},r.decryptkey=null,r.decrypturl=null,r}return s(t,e),o(t,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},f.default.prototype.destroy.call(this)}},{key:"onKeyLoading",value:function(e){var t=e.frag,r=t.type,i=this.loaders[r],a=t.decryptdata,n=a.uri?a.uri:g.default.buildAbsoluteURL(a.baseuri,a.reluri);if(n!==this.decrypturl||null===this.decryptkey){var s=this.hls.config;i&&(c.logger.warn("abort previous key loader for type:"+r),i.abort()),t.loader=this.loaders[r]=new s.loader(s),this.decrypturl=n,this.decryptkey=null;var o=void 0,l=void 0,d=void 0;o={url:n,frag:t,responseType:"arraybuffer"},l={timeout:s.fragLoadingTimeOut,maxRetry:s.fragLoadingMaxRetry,retryDelay:s.fragLoadingRetryDelay,maxRetryDelay:s.fragLoadingMaxRetryTimeout},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(o,l,d)}else this.decryptkey&&(a.key=this.decryptkey,this.hls.trigger(u.default.KEY_LOADED,{frag:t}))}},{key:"loadsuccess",value:function(e,t,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(u.default.KEY_LOADED,{frag:i})}},{key:"loaderror",value:function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(u.default.ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(u.default.ERROR,{type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})}}]),t}(f.default);r.default=p},{2:2,26:26,27:27,28:28,45:45}],36:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),l=e(2),u=i(l),d=e(28),f=i(d),h=e(27),c=i(h),v=e(26),g=e(40),p=i(g),y=e(45),m=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,E=/#EXT-X-MEDIA:(.*)/g,b=/(?:#EXT(INF): *(\d*(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(BYTERANGE): *(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g,R=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,f.default.MANIFEST_LOADING,f.default.LEVEL_LOADING,f.default.AUDIO_TRACK_LOADING));return r.loaders={},r}return s(t,e),o(t,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},c.default.prototype.destroy.call(this)}},{key:"onManifestLoading",value:function(e){this.load(e.url,{type:"manifest"})}},{key:"onLevelLoading",value:function(e){this.load(e.url,{type:"level",level:e.level,id:e.id})}},{key:"onAudioTrackLoading",value:function(e){this.load(e.url,{type:"audioTrack",id:e.id})}},{key:"load",value:function(e,t){var r=this.loaders[t.type];if(r){var i=r.context;if(i&&i.url===e)return void y.logger.trace("playlist request ongoing");y.logger.warn("abort previous loader for type:"+t.type),r.abort()}var a=this.hls.config,n=void 0,s=void 0,o=void 0,l=void 0;"manifest"===t.type?(n=a.manifestLoadingMaxRetry,s=a.manifestLoadingTimeOut,o=a.manifestLoadingRetryDelay,l=a.manifestLoadingMaxRetryTimeout):(n=a.levelLoadingMaxRetry,s=a.levelLoadingTimeOut,o=a.levelLoadingRetryDelay,l=a.levelLoadingMaxRetryTimeout,y.logger.log("loading playlist for level "+t.level)),r=this.loaders[t.type]=t.loader="undefined"!=typeof a.pLoader?new a.pLoader(a):new a.loader(a),t.url=e,t.responseType="";var u=void 0,d=void 0;u={timeout:s,maxRetry:n,retryDelay:o,maxRetryDelay:l},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},r.load(t,u,d)}},{key:"resolve",value:function(e,t){return u.default.buildAbsoluteURL(t,e)}},{key:"parseMasterPlaylist",value:function(e,t){var r=[],i=void 0;for(m.lastIndex=0;null!=(i=m.exec(e));){var a={},n=a.attrs=new p.default(i[1]);a.url=this.resolve(i[2],t);var s=n.decimalResolution("RESOLUTION");s&&(a.width=s.width,a.height=s.height),a.bitrate=n.decimalInteger("AVERAGE-BANDWIDTH")||n.decimalInteger("BANDWIDTH"),a.name=n.NAME;var o=n.CODECS;if(o){o=o.split(/[ ,]+/);for(var l=0;l<o.length;l++){var u=o[l];u.indexOf("avc1")!==-1?a.videoCodec=this.avc1toavcoti(u):a.audioCodec=u}}r.push(a)}return r}},{key:"parseMasterPlaylistMedia",value:function(e,t,r){var i=void 0,a=[];for(E.lastIndex=0;null!=(i=E.exec(e));){var n={},s=new p.default(i[1]);s.TYPE===r&&(n.groupId=s["GROUP-ID"],n.name=s.NAME,n.type=r,n.default="YES"===s.DEFAULT,n.autoselect="YES"===s.AUTOSELECT,n.forced="YES"===s.FORCED,s.URI&&(n.url=this.resolve(s.URI,t)),n.lang=s.LANGUAGE,n.name||(n.name=n.lang),a.push(n))}return a}},{key:"createInitializationVector",value:function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t}},{key:"fragmentDecryptdataFromLevelkey",value:function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&(r=this.cloneObj(e),r.iv=this.createInitializationVector(t)),r}},{key:"avc1toavcoti",value:function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t}},{key:"cloneObj",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"parseLevelPlaylist",value:function(e,t,r,i){var a,n,s,o=0,l=0,u={type:null,version:null,url:t,fragments:[],live:!0,startSN:0},d={method:null,key:null,iv:null,uri:null},f=0,h=null,c=null,v=null,g=null,m=null,E=null,R=[],_=this.hls.config,k=!!_&&_.enableLazyURLResolve;for(b.lastIndex=0;null!==(n=b.exec(e));){for(s=1;s<n.length&&void 0===n[s];s++);var A=n[s],T=n[s+1],S=n[s+2];switch(A){case"PLAYLIST-TYPE":u.type=T.toUpperCase();break;case"MEDIA-SEQUENCE":o=u.startSN=parseInt(T);break;case"TARGETDURATION":u.targetduration=parseFloat(T);break;case"VERSION":u.version=parseInt(T);break;case"EXTM3U":break;case"ENDLIST":u.live=!1;break;case"DIS":f++,R.push([A]);break;case"DISCONTINUITY-SEQ":f=parseInt(T);break;case"BYTERANGE":var L=T.split("@");E=1===L.length?m:parseInt(L[1]),m=parseInt(L[0])+E;break;case"INF":v=parseFloat(T),g=S?S:null,R.push(S?[A,T,S]:[A,T]);break;case"":if(!isNaN(v)){var D=o++;a=this.fragmentDecryptdataFromLevelkey(d,D),c={type:i,duration:v,title:g,start:l,sn:D,level:r,cc:f,decryptdata:a,programDateTime:h,tagList:R},k?(c.relurl=T,c.baseurl=t):c.url=T?this.resolve(T,t):null,null!==E&&(c.byteRangeStartOffset=E,c.byteRangeEndOffset=m),u.fragments.push(c),l+=v,v=null,g=null,E=null,h=null,R=[]}break;case"KEY":var w=T,O=new p.default(w),C=O.enumeratedString("METHOD"),P=O.URI,I=O.hexadecimalInteger("IV");C&&(d={method:null,key:null,iv:null,uri:null},P&&"AES-128"===C&&(d.method=C,k?(d.baseuri=t,d.reluri=P):d.uri=this.resolve(P,t),d.key=null,d.iv=I));break;case"START":var M=T,x=new p.default(M),F=x.decimalFloatingPoint("TIME-OFFSET");isNaN(F)||(u.startTimeOffset=F);break;case"PROGRAM-DATE-TIME":h=new Date(Date.parse(T)),R.push([A,T]);break;case"#":R.push(S?[T,S]:[T]);break;default:y.logger.warn("line parsed but not handled: "+n)}}return!c||c.url||c.relurl||(u.fragments.pop(),l-=c.duration),u.totalduration=l,u.averagetargetduration=l/u.fragments.length,u.endSN=o-1,u}},{key:"loadsuccess",value:function(e,t,r){var i=e.data,a=e.url,n=r.type,s=r.id,o=r.level,l=this.hls;if(this.loaders[n]=void 0,void 0!==a&&0!==a.indexOf("data:")||(a=r.url),t.tload=performance.now(),0===i.indexOf("#EXTM3U"))if(i.indexOf("#EXTINF:")>0){var u="audioTrack"!==n,d=this.parseLevelPlaylist(i,a,(u?o:s)||0,u?"main":"audio");"manifest"===n&&l.trigger(f.default.MANIFEST_LOADED,{levels:[{url:a,details:d}],audioTracks:[],url:a,stats:t}),t.tparsed=performance.now(),d.targetduration?u?l.trigger(f.default.LEVEL_LOADED,{details:d,level:o||0,id:s||0,stats:t}):l.trigger(f.default.AUDIO_TRACK_LOADED,{details:d,id:s,stats:t}):l.trigger(f.default.ERROR,{type:v.ErrorTypes.NETWORK_ERROR,details:v.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:a,reason:"invalid targetduration"})}else{var h=this.parseMasterPlaylist(i,a);if(h.length){var c=this.parseMasterPlaylistMedia(i,a,"AUDIO");if(c.length){var g=!1;c.forEach(function(e){e.url||(g=!0)}),g===!1&&h[0].audioCodec&&!h[0].attrs.AUDIO&&(y.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),c.unshift({type:"main",name:"main"}))}l.trigger(f.default.MANIFEST_LOADED,{levels:h,audioTracks:c,url:a,stats:t})}else l.trigger(f.default.ERROR,{type:v.ErrorTypes.NETWORK_ERROR,details:v.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:a,reason:"no level found in manifest"})}else l.trigger(f.default.ERROR,{type:v.ErrorTypes.NETWORK_ERROR,details:v.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:a,reason:"no EXTM3U delimiter"})}},{key:"loaderror",value:function(e,t){var r,i,a=t.loader;switch(t.type){case"manifest":r=v.ErrorDetails.MANIFEST_LOAD_ERROR,i=!0;break;case"level":r=v.ErrorDetails.LEVEL_LOAD_ERROR,i=!1;break;case"audioTrack":r=v.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,i=!1}a&&(a.abort(),this.loaders[t.type]=void 0),this.hls.trigger(f.default.ERROR,{type:v.ErrorTypes.NETWORK_ERROR,details:r,fatal:i,url:a.url,loader:a,response:e,context:t})}},{key:"loadtimeout",value:function(e,t){var r,i,a=t.loader;switch(t.type){case"manifest":r=v.ErrorDetails.MANIFEST_LOAD_TIMEOUT,i=!0;break;case"level":r=v.ErrorDetails.LEVEL_LOAD_TIMEOUT,i=!1;break;case"audioTrack":r=v.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT,i=!1}a&&(a.abort(),this.loaders[t.type]=void 0),this.hls.trigger(f.default.ERROR,{type:v.ErrorTypes.NETWORK_ERROR,details:r,fatal:i,url:a.url,loader:a,context:t})}}]),t}(c.default);r.default=R},{2:2,26:26,27:27,28:28,40:40,45:45}],37:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(){i(this,e)}return a(e,null,[{key:"init",value:function(){e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var t;for(t in e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,l,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))}},{key:"box",value:function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for(t=new Uint8Array(i),t[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,r){return r*=t,e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24,r>>16&255,r>>8&255,255&r,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))}},{key:"moof",value:function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))}},{key:"moov",value:function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))}},{key:"mvex",value:function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))}},{key:"mvhd",value:function(t,r){r*=t;var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,i)}},{key:"sdtp",value:function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var r,i,a,n=[],s=[];for(r=0;r<t.sps.length;r++)i=t.sps[r],a=i.byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)i=t.pps[r],a=i.byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l=t.width,u=t.height;return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}},{key:"mp4a",value:function(t){var r=t.audiosamplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"mp3",value:function(t){var r=t.audiosamplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))}},{key:"stsd",value:function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var r=t.id,i=t.duration*t.timescale,a=t.width,n=t.height;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))}},{key:"traf",value:function(t,r){var i=e.sdtp(t),a=t.id;return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),e.box(e.types.tfdt,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r])),e.trun(t,i.length+16+16+8+16+8+8),i)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(t,r){var i,a,n,s,o,l,u=t.samples||[],d=u.length,f=12+16*d,h=new Uint8Array(f);for(r+=8+f,h.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)a=u[i],n=a.duration,s=a.size,o=a.flags,l=a.cts,h.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,h)}},{key:"initSegment",value:function(t){e.types||e.init();var r,i=e.moov(t);return r=new Uint8Array(e.FTYP.byteLength+i.byteLength),r.set(e.FTYP),r.set(i,e.FTYP.byteLength),r}}]),e}();r.default=n},{}],38:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(29),o=i(s),l=e(28),u=i(l),d=e(45),f=e(37),h=i(f),c=e(26),v=function(){function e(t,r,i,n){a(this,e),this.observer=t,this.id=r,this.config=i,this.typeSupported=n,this.ISGenerated=!1,this.PES2MP4SCALEFACTOR=4,this.PES_TIMESCALE=9e4,this.MP4_TIMESCALE=this.PES_TIMESCALE/this.PES2MP4SCALEFACTOR}return n(e,[{key:"destroy",value:function(){}},{key:"insertDiscontinuity",value:function(){this._initPTS=this._initDTS=void 0}},{key:"switchLevel",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(e,t,r,i,a,n,s,o,l){if(this.level=e,this.sn=t,this.ISGenerated||this.generateIS(r,i,s),this.ISGenerated)if(r.samples.length){var d=this.remuxAudio(r,s,o,l);if(i.samples.length){var f=void 0;d&&(f=d.endPTS-d.startPTS),this.remuxVideo(i,s,o,f)}}else{var h=void 0;i.samples.length&&(h=this.remuxVideo(i,s,o)),h&&r.codec&&this.remuxEmptyAudio(r,s,o,h)}a.samples.length&&this.remuxID3(a,s),n.samples.length&&this.remuxText(n,s),this.observer.trigger(u.default.FRAG_PARSED,{id:this.id,level:this.level,sn:this.sn})}},{key:"generateIS",value:function(e,t,r){var i,a,n=this.observer,s=e.samples,o=t.samples,l=this.PES_TIMESCALE,f=this.typeSupported,v="audio/mp4",g={},p={id:this.id,level:this.level,sn:this.sn,tracks:g,unique:!1},y=void 0===this._initPTS;y&&(i=a=1/0),e.config&&s.length&&(e.timescale=e.audiosamplerate,e.timescale*e.duration>Math.pow(2,32)&&!function(){var t=function e(t,r){return r?e(r,t%r):t};e.timescale=e.audiosamplerate/t(e.audiosamplerate,e.isAAC?1024:1152)}(),d.logger.log("audio mp4 timescale :"+e.timescale),e.isAAC||(f.mpeg?(v="audio/mpeg",e.codec=""):f.mp3&&(e.codec="mp3")),g.audio={container:v,codec:e.codec,initSegment:!e.isAAC&&f.mpeg?new Uint8Array:h.default.initSegment([e]),metadata:{channelCount:e.channelCount}},y&&(i=a=s[0].pts-l*r)),t.sps&&t.pps&&o.length&&(t.timescale=this.MP4_TIMESCALE,g.video={container:"video/mp4",codec:t.codec,initSegment:h.default.initSegment([t]),metadata:{width:t.width,height:t.height}},y&&(i=Math.min(i,o[0].pts-l*r),a=Math.min(a,o[0].dts-l*r))),Object.keys(g).length?(n.trigger(u.default.FRAG_PARSING_INIT_SEGMENT,p),this.ISGenerated=!0,y&&(this._initPTS=i,this._initDTS=a)):n.trigger(u.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,id:this.id,details:c.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})}},{key:"remuxVideo",value:function(e,t,r,i){var a,n,s,o,l,f,v,g,p=8,y=this.PES_TIMESCALE,m=this.PES2MP4SCALEFACTOR,E=e.samples,b=[],R=this._PTSNormalize,_=this._initDTS;E.sort(function(e,t){return e.dts-t.dts});var k=E.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(k<0){d.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(k/90)+" ms to overcome this issue");for(var A=0;A<E.length;A++)E[A].dts+=k}var T=void 0;T=r?this.nextAvcDts:t*y;var S=E[0];l=Math.max(R(S.dts-_,T),0),o=Math.max(R(S.pts-_,T),0);var L=Math.round((l-T)/90);r&&L&&(L>1?d.logger.log("AVC:"+L+" ms hole between fragments detected,filling it"):L<-1&&d.logger.log("AVC:"+-L+" ms overlapping between fragments detected"),l=T,E[0].dts=l+_,o=Math.max(o-L,T),E[0].pts=o+_,d.logger.log("Video/PTS/DTS adjusted: "+Math.round(o/90)+"/"+Math.round(l/90)+",delta:"+L+" ms")),f=l,S=E[E.length-1],g=Math.max(R(S.dts-_,T),0),v=Math.max(R(S.pts-_,T),0),v=Math.max(v,g);var D=navigator.vendor,w=navigator.userAgent,O=D&&D.indexOf("Apple")>-1&&w&&!w.match("CriOS");O&&(a=Math.round((g-l)/(m*(E.length-1))));for(var C=0;C<E.length;C++){var P=E[C];O?P.dts=l+C*m*a:(P.dts=Math.max(R(P.dts-_,T),l),P.dts=Math.round(P.dts/m)*m),P.pts=Math.max(R(P.pts-_,T),P.dts),P.pts=Math.round(P.pts/m)*m}var I=e.len+4*e.nbNalu+8;try{n=new Uint8Array(I)}catch(e){return void this.observer.trigger(u.default.ERROR,{type:c.ErrorTypes.MUX_ERROR,level:this.level,id:this.id,details:c.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:I,reason:"fail allocating video mdat "+I})}var M=new DataView(n.buffer);M.setUint32(0,n.byteLength),n.set(h.default.types.mdat,4);for(var x=0;x<E.length;x++){for(var F=E[x],N=0,U=void 0;F.units.units.length;){var G=F.units.units.shift();M.setUint32(p,G.data.byteLength),p+=4,n.set(G.data,p),p+=G.data.byteLength,N+=4+G.data.byteLength}if(O)U=Math.max(0,a*Math.round((F.pts-F.dts)/(m*a)));else{if(x<E.length-1)a=E[x+1].dts-F.dts;else{var B=this.config,j=F.dts-E[x>0?x-1:x].dts;if(B.stretchShortVideoTrack){var H=B.maxBufferHole,K=B.maxSeekHole,V=Math.floor(Math.min(H,K)*y),W=(i?o+i*y:this.nextAudioPts)-F.pts;W>V?(a=W-j,a<0&&(a=j),d.logger.log("It is approximately "+W/90+" ms to the next segment; using duration "+a/90+" ms for the last video frame.")):a=j}else a=j}a/=m,U=Math.round((F.pts-F.dts)/m)}b.push({size:N,duration:a,cts:U,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:F.key?2:1,isNonSync:F.key?0:1}})}this.nextAvcDts=g+a*m;var Y=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,b.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var q=b[0].flags;q.dependsOn=2,q.isNonSync=0}e.samples=b,s=h.default.moof(e.sequenceNumber++,l/m,e),e.samples=[];var X={id:this.id,level:this.level,sn:this.sn,data1:s,data2:n,startPTS:o/y,endPTS:(v+m*a)/y,startDTS:l/y,endDTS:this.nextAvcDts/y,type:"video",nb:b.length,dropped:Y};return this.observer.trigger(u.default.FRAG_PARSING_DATA,X),X}},{key:"remuxAudio",value:function(e,t,r,i){var a,n,s,l,f,v,g,p,y,m,E,b,R,_,k,A,T=this.PES_TIMESCALE,S=e.timescale,L=T/S,D=e.timescale*(e.isAAC?1024:1152)/e.audiosamplerate,w=D*L,O=this._PTSNormalize,C=this._initDTS,P=!e.isAAC&&this.typeSupported.mpeg,I=P?0:8,M=[],x=[];if(e.samples.sort(function(e,t){return e.pts-t.pts}),x=e.samples,A=this.nextAudioPts,r|=x.length&&A&&(Math.abs(t-A/T)<.1||Math.abs(x[0].pts-A-this._initDTS)<20*w),r||(A=t*T),i&&e.isAAC)for(var F=0,N=A;F<x.length;){var U=x[F],G=O(U.pts-C,A),B=G-N;if(B<=-w)d.logger.warn("Dropping 1 audio frame @ "+Math.round(N/90)/1e3+"s due to "+Math.round(Math.abs(B/90))+" ms overlap."),x.splice(F,1),e.len-=U.unit.length;else if(B>=w){var j=Math.round(B/w);d.logger.warn("Injecting "+j+" audio frame @ "+Math.round(N/90)/1e3+"s due to "+Math.round(B/90)+" ms gap.");for(var H=0;H<j;H++)k=N+C,k=Math.max(k,C),_=o.default.getSilentFrame(e.channelCount),_||(d.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),_=U.unit.subarray()),x.splice(F,0,{unit:_,pts:k,dts:k}),e.len+=_.length,N+=w,F+=1;U.pts=U.dts=N+C,N+=w,F+=1}else Math.abs(B)>.1*w,N+=w,0===F?U.pts=U.dts=C+A:U.pts=U.dts=x[F-1].pts+w,F+=1}for(;x.length;){if(n=x.shift(),l=n.unit,m=n.pts-C,E=n.dts-C,void 0!==y)b=O(m,y),R=O(E,y),s.duration=Math.round((R-y)/L);else{b=O(m,A),R=O(E,A);var K=Math.round(1e3*(b-A)/T),V=0;if(r&&e.isAAC&&K){if(K>0)V=Math.round((b-A)/w),d.logger.log(K+" ms hole between AAC samples detected,filling it"),V>0&&(_=o.default.getSilentFrame(e.channelCount),_||(_=l.subarray()),e.len+=V*_.length);else if(K<-12){
d.logger.log(-K+" ms overlapping between AAC samples detected, drop frame"),e.len-=l.byteLength;continue}b=R=A}if(g=Math.max(0,b),p=Math.max(0,R),!(e.len>0))return;var W=P?e.len:e.len+8;try{f=new Uint8Array(W)}catch(e){return void this.observer.trigger(u.default.ERROR,{type:c.ErrorTypes.MUX_ERROR,level:this.level,id:this.id,details:c.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:W,reason:"fail allocating audio mdat "+W})}P||(a=new DataView(f.buffer),a.setUint32(0,f.byteLength),f.set(h.default.types.mdat,4));for(var Y=0;Y<V;Y++)k=b-(V-Y)*w,_=o.default.getSilentFrame(e.channelCount),_||(d.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),_=l.subarray()),f.set(_,I),I+=_.byteLength,s={size:_.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},M.push(s)}f.set(l,I),I+=l.byteLength,s={size:l.byteLength,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},M.push(s),y=R}var q=0,X=M.length;if(X>=2&&(q=M[X-2].duration,s.duration=q),X){this.nextAudioPts=b+L*q,e.len=0,e.samples=M,v=P?new Uint8Array:h.default.moof(e.sequenceNumber++,p/L,e),e.samples=[];var z={id:this.id,level:this.level,sn:this.sn,data1:v,data2:f,startPTS:g/T,endPTS:this.nextAudioPts/T,startDTS:p/T,endDTS:(R+L*q)/T,type:"audio",nb:X};return this.observer.trigger(u.default.FRAG_PARSING_DATA,z),z}return null}},{key:"remuxEmptyAudio",value:function(e,t,r,i){var a=this.PES_TIMESCALE,n=e.timescale?e.timescale:e.audiosamplerate,s=a/n,l=this.nextAudioPts,u=(void 0!==l?l:i.startDTS*a)+this._initDTS,f=i.endDTS*a+this._initDTS,h=1024,c=s*h,v=Math.ceil((f-u)/c),g=o.default.getSilentFrame(e.channelCount);if(d.logger.warn("remux empty Audio"),!g)return void d.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");for(var p=[],y=0;y<v;y++){var m=u+y*c;p.push({unit:g,pts:m,dts:m}),e.len+=g.length}e.samples=p,this.remuxAudio(e,t,r)}},{key:"remuxID3",value:function(e,t){var r,i=e.samples.length;if(i){for(var a=0;a<i;a++)r=e.samples[a],r.pts=(r.pts-this._initPTS)/this.PES_TIMESCALE,r.dts=(r.dts-this._initDTS)/this.PES_TIMESCALE;this.observer.trigger(u.default.FRAG_PARSING_METADATA,{id:this.id,level:this.level,sn:this.sn,samples:e.samples})}e.samples=[],t=t}},{key:"remuxText",value:function(e,t){e.samples.sort(function(e,t){return e.pts-t.pts});var r,i=e.samples.length;if(i){for(var a=0;a<i;a++)r=e.samples[a],r.pts=(r.pts-this._initPTS)/this.PES_TIMESCALE;this.observer.trigger(u.default.FRAG_PARSING_USERDATA,{id:this.id,level:this.level,sn:this.sn,samples:e.samples})}e.samples=[],t=t}},{key:"_PTSNormalize",value:function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}},{key:"passthrough",get:function(){return!1}}]),e}();r.default=v},{26:26,28:28,29:29,37:37,45:45}],39:[function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=e(28),o=i(s),l=function(){function e(t,r){a(this,e),this.observer=t,this.id=r,this.ISGenerated=!1}return n(e,[{key:"destroy",value:function(){}},{key:"insertDiscontinuity",value:function(){}},{key:"switchLevel",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(e,t,r,i,a,n){var s=this.observer;if(!this.ISGenerated){var l={},u={id:this.id,tracks:l,unique:!0},d=t,f=d.codec;f&&(u.tracks.video={container:d.container,codec:f,metadata:{width:d.width,height:d.height}}),d=e,f=d.codec,f&&(u.tracks.audio={container:d.container,codec:f,metadata:{channelCount:d.channelCount}}),this.ISGenerated=!0,s.trigger(o.default.FRAG_PARSING_INIT_SEGMENT,u)}s.trigger(o.default.FRAG_PARSING_DATA,{id:this.id,data1:n,startPTS:a,startDTS:a,type:"audiovideo",nb:1,dropped:0})}},{key:"passthrough",get:function(){return!0}}]),e}();r.default=l},{28:28}],40:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=/^(\d+)x(\d+)$/,s=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o=function(){function e(t){i(this,e),"string"==typeof t&&(t=e.parseAttrList(t));for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r])}return a(e,[{key:"decimalInteger",value:function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"hexadecimalInteger",value:function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null}},{key:"hexadecimalIntegerAsNumber",value:function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"decimalFloatingPoint",value:function(e){return parseFloat(this[e])}},{key:"enumeratedString",value:function(e){return this[e]}},{key:"decimalResolution",value:function(e){var t=n.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}}],[{key:"parseAttrList",value:function(e){var t,r={};for(s.lastIndex=0;null!==(t=s.exec(e));){var i=t[2],a='"';0===i.indexOf(a)&&i.lastIndexOf(a)===i.length-1&&(i=i.slice(1,-1)),r[t[1]]=i}return r}}]),e}();r.default=o},{}],41:[function(e,t,r){"use strict";var i={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){a=(r+i)/2|0,n=e[a];var s=t(n);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null}};t.exports=i},{}],42:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},s=function(e){var t=e;return n.hasOwnProperty(e)&&(t=n[e]),String.fromCharCode(t)},o=15,l=32,u={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},d={17:2,18:4,21:6,22:8,23:10,19:13,20:15},f={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},h={25:2,26:4,29:6,30:8,31:10,27:13,28:15},c=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],v={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(e){this.time=e},log:function(e,t){var r=this.verboseFilter[e];this.verboseLevel>=r}},g=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},p=function(){function e(t,r,a,n,s){i(this,e),this.foreground=t||"white",this.underline=r||!1,this.italics=a||!1,this.background=n||"black",this.flash=s||!1}return a(e,[{key:"reset",value:function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}},{key:"setStyles",value:function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}},{key:"isDefault",value:function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash}},{key:"equals",value:function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}},{key:"copy",value:function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}},{key:"toString",value:function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}]),e}(),y=function(){function e(t,r,a,n,s,o){i(this,e),this.uchar=t||" ",this.penState=new p(r,a,n,s,o)}return a(e,[{key:"reset",value:function(){this.uchar=" ",this.penState.reset()}},{key:"setChar",value:function(e,t){this.uchar=e,this.penState.copy(t)}},{key:"setPenState",value:function(e){this.penState.copy(e)}},{key:"equals",value:function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}},{key:"copy",value:function(e){this.uchar=e.uchar,this.penState.copy(e.penState)}},{key:"isEmpty",value:function(){return" "===this.uchar&&this.penState.isDefault()}}]),e}(),m=function(){function e(){i(this,e),this.chars=[];for(var t=0;t<l;t++)this.chars.push(new y);this.pos=0,this.currPenState=new p}return a(e,[{key:"equals",value:function(e){for(var t=!0,r=0;r<l;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<l;t++)this.chars[t].copy(e.chars[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<l;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}},{key:"setCursor",value:function(e){this.pos!==e&&(this.pos=e),this.pos<0?(v.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>l&&(v.log("ERROR","Too large cursor position "+this.pos),this.pos=l)}},{key:"moveCursor",value:function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}},{key:"backSpace",value:function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}},{key:"insertChar",value:function(e){e>=144&&this.backSpace();var t=s(e);return this.pos>=l?void v.log("ERROR","Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),void this.moveCursor(1))}},{key:"clearFromPos",value:function(e){var t;for(t=e;t<l;t++)this.chars[t].reset()}},{key:"clear",value:function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}},{key:"clearToEndOfRow",value:function(){this.clearFromPos(this.pos)}},{key:"getTextString",value:function(){for(var e=[],t=!0,r=0;r<l;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")}},{key:"setPenStyles",value:function(e){this.currPenState.setStyles(e);var t=this.chars[this.pos];t.setPenState(this.currPenState)}}]),e}(),E=function(){function e(){i(this,e),this.rows=[];for(var t=0;t<o;t++)this.rows.push(new m);this.currRow=o-1,this.nrRollUpRows=null,this.reset()}return a(e,[{key:"reset",value:function(){for(var e=0;e<o;e++)this.rows[e].clear();this.currRow=o-1}},{key:"equals",value:function(e){for(var t=!0,r=0;r<o;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<o;t++)this.rows[t].copy(e.rows[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<o;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}},{key:"backSpace",value:function(){var e=this.rows[this.currRow];e.backSpace()}},{key:"clearToEndOfRow",value:function(){var e=this.rows[this.currRow];e.clearToEndOfRow()}},{key:"insertChar",value:function(e){var t=this.rows[this.currRow];t.insertChar(e)}},{key:"setPen",value:function(e){var t=this.rows[this.currRow];t.setPenStyles(e)}},{key:"moveCursor",value:function(e){var t=this.rows[this.currRow];t.moveCursor(e)}},{key:"setCursor",value:function(e){v.log("INFO","setCursor: "+e);var t=this.rows[this.currRow];t.setCursor(e)}},{key:"setPAC",value:function(e,t){v.log("INFO","pacData = "+JSON.stringify(e));var r=e.row-1;if(this.nrRollUpRows&&r<this.nrRollUpRows-1&&(r=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==r){for(var i=0;i<o;i++)this.rows[i].clear();var a=this.currRow+1-this.nrRollUpRows,n=t.rows[a].cueStartTime;if(n&&n<v.time)for(i=0;i<this.nrRollUpRows;i++)this.rows[r-this.nrRollUpRows+i+1].copy(t.rows[a+i])}this.currRow=r;var s=this.rows[this.currRow];if(null!==e.indent){var l=e.indent,u=Math.max(l-1,0);s.setCursor(e.indent),e.color=s.chars[u].penState.foreground}var d={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(d)}},{key:"setBkgData",value:function(e){v.log("INFO","bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}},{key:"setRollUpRows",value:function(e){this.nrRollUpRows=e}},{key:"rollUp",value:function(){if(null===this.nrRollUpRows)return void v.log("DEBUG","roll_up but nrRollUpRows not set yet");v.log("TEXT",this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),v.log("INFO","Rolling up")}},{key:"getDisplayText",value:function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<o;a++){var n=this.rows[a].getTextString();n&&(i=a+1,e?t.push("Row "+i+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r}},{key:"getTextAndFormat",value:function(){return this.rows}}]),e}(),b=function(){function e(t,r){i(this,e),this.chNr=t,this.outputFilter=r,this.mode=null,this.verbose=0,this.displayedMemory=new E,this.nonDisplayedMemory=new E,this.lastOutputScreen=new E,this.currRollUpRow=this.displayedMemory.rows[o-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}return a(e,[{key:"reset",value:function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[o-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null}},{key:"getHandler",value:function(){return this.outputFilter}},{key:"setHandler",value:function(e){this.outputFilter=e}},{key:"setPAC",value:function(e){this.writeScreen.setPAC(e,this.lastOutputScreen)}},{key:"setBkgData",value:function(e){this.writeScreen.setBkgData(e)}},{key:"setMode",value:function(e){e!==this.mode&&(this.mode=e,v.log("INFO","MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset(),this.lastOutputScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}},{key:"insertChars",value:function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";v.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(v.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}},{key:"ccRCL",value:function(){v.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}},{key:"ccBS",value:function(){v.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}},{key:"ccAOF",value:function(){}},{key:"ccAON",value:function(){}},{key:"ccDER",value:function(){v.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}},{key:"ccRU",value:function(e){v.log("INFO","RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}},{key:"ccFON",value:function(){v.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})}},{key:"ccRDC",value:function(){v.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}},{key:"ccTR",value:function(){v.log("INFO","TR"),this.setMode("MODE_TEXT")}},{key:"ccRTD",value:function(){v.log("INFO","RTD"),this.setMode("MODE_TEXT")}},{key:"ccEDM",value:function(){v.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate()}},{key:"ccCR",value:function(){v.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate()}},{key:"ccENM",value:function(){v.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}},{key:"ccEOC",value:function(){if(v.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,v.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate()}},{key:"ccTO",value:function(e){v.log("INFO","TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}},{key:"ccMIDROW",value:function(e){var t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[r]}v.log("INFO","MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}},{key:"outputDataUpdate",value:function(){var e=v.time;null!==e&&this.outputFilter&&(this.outputFilter.updateData&&this.outputFilter.updateData(e,this.displayedMemory),null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.lastOutputScreen),this.cueStartTime=this.displayedMemory.isEmpty()?null:e):this.cueStartTime=e,this.lastOutputScreen.copy(this.displayedMemory))}},{key:"cueSplitAtTime",value:function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}]),e}(),R=function(){function e(t,r,a){i(this,e),this.field=t||1,this.outputs=[r,a],this.channels=[new b(1,r),new b(2,a)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}return a(e,[{key:"getHandler",value:function(e){return this.channels[e].getHandler()}},{key:"setHandler",value:function(e,t){this.channels[e].setHandler(t)}},{key:"addData",value:function(e,t){var r,i,a,n=!1;this.lastTime=e,v.setTime(e);for(var s=0;s<t.length;s+=2)if(i=127&t[s],a=127&t[s+1],0!==i||0!==a){if(v.log("DATA","["+g([t[s],t[s+1]])+"] -> ("+g([i,a])+")"),r=this.parseCmd(i,a),r||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r&&(n=this.parseChars(i,a)))if(this.currChNr&&this.currChNr>=0){var o=this.channels[this.currChNr-1];o.insertChars(n)}else v.log("WARNING","No channel found yet. TEXT-MODE?");r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,v.log("WARNING","Couldn't parse cleaned data "+g([i,a])+" orig: "+g([t[s],t[s+1]])))}else this.dataCounters.padding+=2}},{key:"parseCmd",value:function(e,t){var r=null,i=(20===e||28===e)&&32<=t&&t<=47,a=(23===e||31===e)&&33<=t&&t<=35;if(!i&&!a)return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,v.log("DEBUG","Repeated command ("+g([e,t])+") is dropped"),!0;r=20===e||23===e?1:2;var n=this.channels[r-1];return 20===e||28===e?32===t?n.ccRCL():33===t?n.ccBS():34===t?n.ccAOF():35===t?n.ccAON():36===t?n.ccDER():37===t?n.ccRU(2):38===t?n.ccRU(3):39===t?n.ccRU(4):40===t?n.ccFON():41===t?n.ccRDC():42===t?n.ccTR():43===t?n.ccRTD():44===t?n.ccEDM():45===t?n.ccCR():46===t?n.ccENM():47===t&&n.ccEOC():n.ccTO(t-32),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"parseMidrow",value:function(e,t){var r=null;if((17===e||25===e)&&32<=t&&t<=47){if(r=17===e?1:2,r!==this.currChNr)return v.log("ERROR","Mismatch channel in midrow parsing"),!1;var i=this.channels[r-1];return i.ccMIDROW(t),v.log("DEBUG","MIDROW ("+g([e,t])+")"),!0}return!1}},{key:"parsePAC",value:function(e,t){var r=null,i=null,a=(17<=e&&e<=23||25<=e&&e<=31)&&64<=t&&t<=127,n=(16===e||24===e)&&64<=t&&t<=95;if(!a&&!n)return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,!0;r=e<=23?1:2,i=64<=t&&t<=95?1===r?u[e]:f[e]:1===r?d[e]:h[e];var s=this.interpretPAC(i,t),o=this.channels[r-1];return o.setPAC(s),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"interpretPAC",value:function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1===(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i}},{key:"parseChars",value:function(e,t){var r=null,i=null,a=null;if(e>=25?(r=2,a=e-8):(r=1,a=e),17<=a&&a<=19){var n=t;n=17===a?t+80:18===a?t+112:t+144,v.log("INFO","Special char '"+s(n)+"' in channel "+r),i=[n]}else 32<=e&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var o=g(i);v.log("DEBUG","Char codes =  "+o.join(",")),this.lastCmdA=null,this.lastCmdB=null}return i}},{key:"parseBackgroundAttributes",value:function(e,t){var r,i,a,n,s=(16===e||24===e)&&32<=t&&t<=47,o=(23===e||31===e)&&45<=t&&t<=47;return!(!s&&!o)&&(r={},16===e||24===e?(i=Math.floor((t-32)/2),r.background=c[i],t%2===1&&(r.background=r.background+"_semi")):45===t?r.background="transparent":(r.foreground="black",47===t&&(r.underline=!0)),a=e<24?1:2,n=this.channels[a-1],n.setBkgData(r),this.lastCmdA=null,this.lastCmdB=null,!0)}},{key:"reset",value:function(){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].reset();this.lastCmdA=null,this.lastCmdB=null}},{key:"cueSplitAtTime",value:function(e){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].cueSplitAtTime(e)}}]),e}();r.default=R},{}],43:[function(e,t,r){"use strict";var i={newCue:function(e,t,r,i){for(var a,n,s,o,l,u=window.VTTCue||window.TextTrackCue,d=0;d<i.rows.length;d++)if(a=i.rows[d],s=!0,o=0,l="",!a.isEmpty()){for(var f=0;f<a.chars.length;f++)a.chars[f].uchar.match(/\s/)&&s?o++:(l+=a.chars[f].uchar,s=!1);a.cueStartTime=t,n=new u(t,r,l.trim()),o>=16?o--:o++,navigator.userAgent.match(/Firefox\//)?n.line=d+1:n.line=d>7?d-2:d+1,n.align="left",n.position=Math.max(0,Math.min(100,100*(o/32)+(navigator.userAgent.match(/Firefox\//)?50:0))),e.addCue(n)}}};t.exports=i},{}],44:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(t){i(this,e),this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=0,this.totalWeight_=0}return a(e,[{key:"sample",value:function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}},{key:"getTotalWeight",value:function(){return this.totalWeight_}},{key:"getEstimate",value:function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_}}]),e}();r.default=n},{}],45:[function(e,t,r){"use strict";function i(){}function a(e,t){return t="["+e+"] > "+t}function n(e){var t=self.console[e];return t?function(){for(var r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];i[0]&&(i[0]=a(e,i[0])),t.apply(self.console,i)}:i}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];r.forEach(function(t){u[t]=e[t]?e[t].bind(e):n(t)})}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l={trace:i,debug:i,log:i,warn:i,info:i,error:i},u=l;r.enableLogs=function(e){if(e===!0||"object"===("undefined"==typeof e?"undefined":o(e))){s(e,"debug","log","info","warn","error");try{u.log()}catch(e){u=l}}else u=l},r.logger=u},{}],46:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(){i(this,e)}return a(e,null,[{key:"toString",value:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}}]),e}();r.default=n},{}],47:[function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=e(45),s=function(){function e(t){i(this,e),t&&t.xhrSetup&&(this.xhrSetup=t.xhrSetup)}return a(e,[{key:"destroy",value:function(){this.abort(),this.loader=null}},{key:"abort",value:function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null}},{key:"load",value:function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()}},{key:"loadInternal",value:function(){var e,t=this.context;e="undefined"!=typeof XDomainRequest?this.loader=new XDomainRequest:this.loader=new XMLHttpRequest,e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.open("GET",t.url,!0),t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.responseType=t.responseType;var r=this.stats;r.tfirst=0,r.loaded=0,this.xhrSetup&&this.xhrSetup(e,t.url),this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()}},{key:"readystatechange",value:function(e){var t=e.currentTarget,r=t.readyState,i=this.stats,a=this.context,s=this.config;if(!i.aborted&&(window.clearTimeout(this.requestTimeout),r>=2&&(0===i.tfirst&&(i.tfirst=Math.max(performance.now(),i.trequest),this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout-(i.tfirst-i.trequest))),4===r))){var o=t.status;if(o>=200&&o<300){i.tload=Math.max(i.tfirst,performance.now());var l=void 0,u=void 0;"arraybuffer"===a.responseType?(l=t.response,u=l.byteLength):(l=t.responseText,u=l.length),i.loaded=i.total=u;var d={url:t.responseURL,data:l};this.callbacks.onSuccess(d,i,a)}else i.retry>=s.maxRetry||o>=400&&o<499?(n.logger.error(o+" while loading "+a.url),this.callbacks.onError({code:o,text:t.statusText},a)):(n.logger.warn(o+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),i.retry++)}}},{key:"loadtimeout",value:function(){n.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context)}},{key:"loadprogress",value:function(e){var t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total);var r=this.callbacks.onProgress;r&&r(t,this.context,null)}}]),e}();r.default=s},{45:45}]},{},[33])(33)});

var loadConviva = typeof ConvivaPrivateLoader === 'undefined';

function convivaBrowserSupportsVideoElement() {
  try {
    return !!document.createElement('video').canPlayType;
  } catch (e) {
    return false;
  }
}
function convivaBrowserSupportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

var convivaSupportedBrowser = (convivaBrowserSupportsVideoElement() && convivaBrowserSupportsLocalStorage());

loadConviva = loadConviva && convivaSupportedBrowser;
if (loadConviva) {
  var ConvivaPrivateLoader = (typeof ConvivaPrivateLoader !== 'undefined') ? ConvivaPrivateLoader : (function() {});
  (function() {

    function registerName(cls, clsname) {
      if (typeof(ConvivaPrivateModule) != "undefined") {
        ConvivaPrivateModule[clsname] = cls;
      } else if (typeof(ConvivaPrivateTestingModule) != "undefined") {
        ConvivaPrivateTestingModule[clsname] = cls;
      } else {

        ConvivaPrivateLoader[clsname] = cls;
      }
    }

    registerName(registerName, "registerName");

    function __id(x) {return x;}

    registerName(__id, "__id");

    function getConvivaType(className) {
      if (typeof(ConvivaPrivateModule) != "undefined" && ConvivaPrivateModule.hasOwnProperty(className)) {
        return ConvivaPrivateModule[className];
      } else if (typeof(ConvivaPrivateTestingModule) != "undefined" && ConvivaPrivateTestingModule.hasOwnProperty(className)) {
        return ConvivaPrivateTestingModule[className];
      } else if (ConvivaPrivateLoader.hasOwnProperty(className)) {
        return ConvivaPrivateLoader[className];
      } else {
        return null;
      }
    }

    registerName(getConvivaType, "getConvivaType");

    function importConvivaPrivateProgram(fromWhere, fromWhereName) {
      var res = "";
      var p;
      for (p in fromWhere) {
        if (fromWhere.hasOwnProperty(p)) {
          res += "var " + p + "=" + __id(fromWhereName) + "." + p + ";"
        }
      }
      return res;
    }

    registerName(importConvivaPrivateProgram, "importConvivaPrivateProgram");

    function STAT_INIT() {
      return "STAT_INIT";
    }

    registerName(STAT_INIT, "STAT_INIT");

    function statInit(cls, clsname) {
      cls.call(STAT_INIT);
      registerName(cls, clsname);
    }

    registerName(statInit, "statInit");

    function defPubMeth(obj, name, m) {
      if (obj != STAT_INIT) {
        if (obj[name] == undefined) {
          obj[name] = m;
        } else {

          obj["super_" + name] = m;
        }
      }
    }

    registerName(defPubMeth, "defPubMeth");

    function defPrivMeth(obj, name, m) {
      if (obj != STAT_INIT)obj[name] = m;
    }

    registerName(defPrivMeth, "defPrivMeth");

    function defStatMeth(obj, cls, name, m) {
      if (obj == STAT_INIT)cls[name] = m;
    }

    registerName(defStatMeth, "defStatMeth");

    function defGet(obj, name, m) {
      if (obj != STAT_INIT) {
        if (typeof(Object.defineProperty) != 'undefined') {
          Object.defineProperty(obj, name, {
            configurable: true,
            enumerable: true,
            get: m
          });
        } else {
          obj.__defineGetter__(name, m);
        }
      }
    }

    registerName(defGet, "defGet");

    function defSet(obj, name, m) {
      if (obj != STAT_INIT) {
        if (typeof(Object.defineProperty) != 'undefined') {
          Object.defineProperty(obj, name, {
            configurable: true,
            set: m
          });
        } else {
          obj.__defineSetter__(name, m);
        }
      }
    }

    registerName(defSet, "defSet");

    function defStatGet(obj, cls, name, m) {
      if (obj == STAT_INIT)defGet(cls, name, m);
    }

    registerName(defStatGet, "defStatGet");

    function defStatSet(obj, cls, name, m) {
      if (obj == STAT_INIT)defSet(cls, name, m);
    }

    registerName(defStatSet, "defStatSet");

    function slIsArray(inObj) {

      if (inObj.constructor == Array) {
        return true;
      } else if (typeof(inObj.length) == 'undefined') {
        return false;
      } else {
        return true;
      }
    }

    registerName(slIsArray, "slIsArray");

    function slForEachPropValue(a, f) {
      var ist = slIsArray(a);
      if (slIsArray(a)) {
        for (var i = 0; i < a.length; i++) {
          f(a[i]);
        }
      } else {
        for (var p in a) {
          if (a.hasOwnProperty(p))f(a[p]);
        }
      }
    }

    registerName(slForEachPropValue, "slForEachPropValue");

    function slForEachProp(a, f) {
      if (slIsArray(a)) {
        for (var i = 0; i < a.length; i++) {
          f(i);
        }
      } else {
        for (var p in a) {
          if (a.hasOwnProperty(p))f(p);
        }
      }
    }

    registerName(slForEachProp, "slForEachProp");

    function declTestClass(obj, name, cls, meta) {
      if (obj == STAT_INIT)jstest.DeclareTestClass(name, cls, meta);
    }

    registerName(declTestClass, "declTestClass");

    function declTestMethod(obj, clsname, mname, mcode, meta) {
      if (obj == STAT_INIT) {
        jstest.DeclareTestMethod(clsname, mname, meta);
      } else {
        jstest.SetTestMethodClosure(clsname, mname, mcode);
      }
    }

    registerName(declTestMethod, "declTestMethod");

    function sluint() {
      sluint.two32 = 0x100000000;

      sluint.Cast = function(v) {
        var vi = parseInt(v);
        if (vi > sluint.MaxValue) {
          vi = vi % sluint.two32;
        } else if (vi < 0) {
          vi = (-vi) % sluint.two32;
          vi = sluint.two32 - vi;
        }
        return vi;
      };

      sluint.uintRegex = new RegExp("^[0-9]+$");
      sluint.Parse = function(v) {
        Lang.parseChecker(v, sluint.uintRegex);
        return sluint.Cast(v);
      }

      sluint.MaxValue = sluint.two32 - 1;
      sluint.MinValue = 0;
    }

    statInit(sluint, "sluint");

    function slint() {
      slint.Cast = function(v) {

        var vu = sluint.Cast(v);
        if (vu > slint.MaxValue) {
          vu = vu - sluint.two32;
        }
        return vu;
      };

      slint.intRegex = new RegExp("^[+-]?[0-9]+$");
      slint.Parse = function(v) {
        Lang.parseChecker(v, slint.intRegex);
        return slint.Cast(v);
      }

      slint.MaxValue = 0x7FFFFFFF;
      slint.MinValue = -0x80000000;
    }

    statInit(slint, "slint");

    function Int64() {
      var _s = this;

      if (_s == STAT_INIT)Int64.TWO_TO_32 = 4294967296.0;

      function __constr() {
        _s._l = 0;
        _s._h = 0;
      };

      defStatMeth(_s, Int64, "fromUnsignedInt", __fromUnsignedInt);
      function __fromUnsignedInt(i) {
        var res = new Int64();
        res._h = 0;
        res._l = i;
        return res;
      };

      defStatMeth(_s, Int64, "fromInt", __fromInt);
      function __fromInt(i) {
        var res = new Int64();
        if (i >= 0) {
          res._h = 0;
          res._l = sluint.Cast(i);
        } else {
          res._h = -1;
          res._l = sluint.Cast(i);
        }
        return res;
      };

      defStatMeth(_s, Int64, "fromNumber", __fromNumber);
      function __fromNumber(n) {
        var l1 = n % Int64.TWO_TO_32;

        if (l1 < 0) {
          l1 = Number(sluint.MaxValue) + 1.0 + l1;
        }
        var res = new Int64();
        res._l = sluint.Cast(l1 + 0.5);
        res._h = slint.Cast((n - l1) / Int64.TWO_TO_32);

        return res;
      };

      defGet(_s, "asNumber", __asNumber);
      function __asNumber() {
        return Number(_s._h) * Int64.TWO_TO_32 + Number(_s._l);
      };

      if (_s != STAT_INIT) {
        this.toString = function() {
          return _s.asNumber.toString();
        }
      }

      if (_s != STAT_INIT)__constr.apply(this, arguments);

    };
    statInit(Int64, "Int64");

    function UInt64() {

      var _s = this;

      function __constr() {

        Int64.call(_s);
        _s._l = 0;
        _s._h = 0;
      }

      defStatMeth(_s, UInt64, "fromUnsignedInt", __fromUnsignedInt);
      function __fromUnsignedInt(i) {
        var res = new UInt64();
        res._h = 0;
        res._l = i;
        return res;
      };

      defStatMeth(_s, UInt64, "fromNumber", __fromNumber);
      function __fromNumber(n) {
        var res = new UInt64();
        res._h = Math.floor(n / Int64.TWO_TO_32);
        res._l = n % Int64.TWO_TO_32;
        return res;
      };

      if (_s != STAT_INIT)__constr.apply(arguments);
    };
    statInit(UInt64, "UInt64");

    function CandidateStream() {
      var _s = this;

      function _constr(id, bitrate, resource) {
        _s.id = id;
        _s.bitrate = bitrate;
        _s.resource = resource;
      }

      defPubMeth(_s, "Cleanup", __Cleanup);
      defPubMeth(_s, "Cleanup", __Cleanup);
      function __Cleanup() {
        _s.id = null;
        _s.bitrate = 0;
        _s.resource = null;
      }

      if (_s != STAT_INIT)_s.__auto_id = undefined;
      defGet(_s, "id", __get_id);
      defGet(_s, "id", __get_id);
      function __get_id() {return _s.__auto_id;}

      defSet(_s, "id", __set_id);
      defSet(_s, "id", __set_id);
      function __set_id(value) {_s.__auto_id = value;}

      if (_s != STAT_INIT)_s.__auto_bitrate = undefined;
      defGet(_s, "bitrate", __get_bitrate);
      defGet(_s, "bitrate", __get_bitrate);
      function __get_bitrate() {return _s.__auto_bitrate;}

      defSet(_s, "bitrate", __set_bitrate);
      defSet(_s, "bitrate", __set_bitrate);
      function __set_bitrate(value) {_s.__auto_bitrate = value;}

      if (_s != STAT_INIT)_s.__auto_resource = undefined;
      defGet(_s, "resource", __get_resource);
      defGet(_s, "resource", __get_resource);
      function __get_resource() {return _s.__auto_resource;}

      defSet(_s, "resource", __set_resource);
      defSet(_s, "resource", __set_resource);
      function __set_resource(value) {_s.__auto_resource = value;}

      defPubMeth(_s, "CheckValidity", __CheckValidity);
      defPubMeth(_s, "CheckValidity", __CheckValidity);
      function __CheckValidity() {

        if (_s.id != null && !((typeof _s.id === "string"))) {
          return "CandidateStream.id is not a string";
        } else if (_s.bitrate != null && !((typeof _s.bitrate === "number"))) {
          return "CandidateStream.bitrate is not an int";
        } else if (_s.resource != null && !((typeof _s.resource === "string"))) {
          return "CandidateStream.resource is not a string";
        }
        return null;
      }

      defStatMeth(_s, CandidateStream, "ConstructClone", __ConstructClone);
      defStatMeth(_s, CandidateStream, "ConstructClone", __ConstructClone);
      function __ConstructClone(fromObj) {
        if (fromObj == null)return null;
        var res = new CandidateStream("", -1, null);
        res.id = NativeLang.GetStringField("id", fromObj);
        res.bitrate = slint.Cast(NativeLang.GetField("bitrate", fromObj));
        res.resource = NativeLang.GetStringField("resource", fromObj);
        return res;
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(CandidateStream, "CandidateStream");

    function ConvivaContentInfo() {
      var _s = this;

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_AKAMAI = "AKAMAI";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_AMAZON = "AMAZON";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_ATT = "ATT";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_BITGRAVITY = "BITGRAVITY";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_BT = "BT";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_CDNETWORKS = "CDNETWORKS";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_CHINACACHE = "CHINACACHE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_EDGECAST = "EDGECAST";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_HIGHWINDS = "HIGHWINDS";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_INTERNAP = "INTERNAP";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_LEVEL3 = "LEVEL3";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_LIMELIGHT = "LIMELIGHT";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_OCTOSHAPE = "OCTOSHAPE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_SWARMCAST = "SWARMCAST";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_VELOCIX = "VELOCIX";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_TELEFONICA = "TELEFONICA";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_MICROSOFT = "MICROSOFT";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_CDNVIDEO = "CDNVIDEO";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_QBRICK = "QBRICK";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_NGENIX = "NGENIX";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_IPONLY = "IPONLY";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_TALKTALK = "TALKTALK";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_INHOUSE = "INHOUSE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_COMCAST = "COMCAST";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_NICE = "NICE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_TELENOR = "TELENOR";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_FASTLY = "FASTLY";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_TELIA = "TELIA";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_CHINANETCENTER = "CHINANETCENTER";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_MIRRORIMAGE = "MIRRORIMAGE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_SONIC = "SONIC";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_ATLAS = "ATLAS";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_OOYALA = "OOYALA";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_TATA = "TATA";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_GOOGLE = "GOOGLE";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_INSTARTLOGIC = "INSTARTLOGIC";

      if (_s == STAT_INIT)ConvivaContentInfo.CDN_NAME_OTHER = "OTHER";

      if (_s == STAT_INIT)ConvivaContentInfo.FRAMEWORK_NAME_BRIGHTCOVE = "Brightcove";

      if (_s == STAT_INIT)ConvivaContentInfo.FRAMEWORK_NAME_KALTURA = "Kaltura";

      if (_s == STAT_INIT)ConvivaContentInfo.FRAMEWORK_NAME_OOYALA = "Ooyala";

      if (_s == STAT_INIT)ConvivaContentInfo.FRAMEWORK_NAME_OSMF = "OSMF";

      if (_s == STAT_INIT)ConvivaContentInfo.FRAMEWORK_NAME_THE_PLATFORM = "thePlatform";

      if (_s == STAT_INIT)ConvivaContentInfo.DEVICE_TYPE_CONSOLE = "Console";

      if (_s == STAT_INIT)ConvivaContentInfo.DEVICE_TYPE_MOBILE = "Mobile";

      if (_s == STAT_INIT)ConvivaContentInfo.DEVICE_TYPE_PC = "PC";

      if (_s == STAT_INIT)ConvivaContentInfo.DEVICE_TYPE_SET_TOP_BOX = "Settop";

      if (_s == STAT_INIT)ConvivaContentInfo.PLUGIN_NAME_KALTURA = "ConvivaKalturaPlugin";

      if (_s == STAT_INIT)ConvivaContentInfo.NO_RESOURCE = "no_resource";

      if (_s != STAT_INIT)_s.assetName = undefined;

      if (_s != STAT_INIT)_s._tags = null;

      defGet(_s, "tags", __get_tags);
      defGet(_s, "tags", __get_tags);
      function __get_tags() {return Lang.StringDictionaryToRepr(_s._tags);}

      defSet(_s, "tags", __set_tags);
      defSet(_s, "tags", __set_tags);
      function __set_tags(value) {_s._tags = Lang.DictionaryFromRepr(value);}

      if (_s != STAT_INIT)_s.defaultReportingBitrateKbps = -1;

      if (_s != STAT_INIT)_s.defaultReportingCdnName = ConvivaContentInfo.CDN_NAME_OTHER;

      if (_s != STAT_INIT)_s.defaultReportingResource = null;

      if (_s != STAT_INIT)_s.frameworkName = null;

      if (_s != STAT_INIT)_s.frameworkVersion = null;

      if (_s != STAT_INIT)_s.pluginName = null;

      if (_s != STAT_INIT)_s.pluginVersion = null;

      if (_s != STAT_INIT)_s.viewerId = null;

      if (_s != STAT_INIT)_s.deviceId = null;

      if (_s != STAT_INIT)_s.deviceType = null;

      if (_s != STAT_INIT)_s.playerName = null;

      if (_s != STAT_INIT)_s.streamUrl = null;

      if (_s != STAT_INIT)_s._isLive = false;

      defGet(_s, "isLive", __get_isLive);
      defGet(_s, "isLive", __get_isLive);
      function __get_isLive() {return _s._isLive;}

      defSet(_s, "isLive", __set_isLive);
      defSet(_s, "isLive", __set_isLive);
      function __set_isLive(value) {
        if (value === "true") {value = true;}
        if (value === "false") {value = false;}
        if (value !== true && value !== false) {
          var utils = Utils.getInstance();
          utils.err("Invalid value for ConvivaContentInfo.isLive, expected boolean. Defaulting to false.");
          value = false;
        }
        _s._isLive = value;
      }

      function _constr(assetName, tags) {
        _s.assetName = assetName;
        _s.tags = tags;
        if (_s._tags == null) {
          _s._tags = new DictionaryCS();
        }

      }

      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_AKAMAI", ConvivaContentInfo.CDN_NAME_AKAMAI);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_AMAZON", ConvivaContentInfo.CDN_NAME_AMAZON);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_ATLAS", ConvivaContentInfo.CDN_NAME_ATLAS);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_ATT", ConvivaContentInfo.CDN_NAME_ATT);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_BITGRAVITY", ConvivaContentInfo.CDN_NAME_BITGRAVITY);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_BT", ConvivaContentInfo.CDN_NAME_BT);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_CDNETWORKS", ConvivaContentInfo.CDN_NAME_CDNETWORKS);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_CDNVIDEO", ConvivaContentInfo.CDN_NAME_CDNVIDEO);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_CHINACACHE", ConvivaContentInfo.CDN_NAME_CHINACACHE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_CHINANETCENTER", ConvivaContentInfo.CDN_NAME_CHINANETCENTER);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_COMCAST", ConvivaContentInfo.CDN_NAME_COMCAST);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_EDGECAST", ConvivaContentInfo.CDN_NAME_EDGECAST);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_FASTLY", ConvivaContentInfo.CDN_NAME_FASTLY);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_GOOGLE", ConvivaContentInfo.CDN_NAME_GOOGLE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_HIGHWINDS", ConvivaContentInfo.CDN_NAME_HIGHWINDS);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_INHOUSE", ConvivaContentInfo.CDN_NAME_INHOUSE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_INSTARTLOGIC", ConvivaContentInfo.CDN_NAME_INSTARTLOGIC);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_INTERNAP", ConvivaContentInfo.CDN_NAME_INTERNAP);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_IPONLY", ConvivaContentInfo.CDN_NAME_IPONLY);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_LEVEL3", ConvivaContentInfo.CDN_NAME_LEVEL3);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_LIMELIGHT", ConvivaContentInfo.CDN_NAME_LIMELIGHT);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_MICROSOFT", ConvivaContentInfo.CDN_NAME_MICROSOFT);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_MIRRORIMAGE", ConvivaContentInfo.CDN_NAME_MIRRORIMAGE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_NGENIX", ConvivaContentInfo.CDN_NAME_NGENIX);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_NICE", ConvivaContentInfo.CDN_NAME_NICE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_OCTOSHAPE", ConvivaContentInfo.CDN_NAME_OCTOSHAPE);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_OOYALA", ConvivaContentInfo.CDN_NAME_OOYALA);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_OTHER", ConvivaContentInfo.CDN_NAME_OTHER);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_QBRICK", ConvivaContentInfo.CDN_NAME_QBRICK);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_SONIC", ConvivaContentInfo.CDN_NAME_SONIC);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_SWARMCAST", ConvivaContentInfo.CDN_NAME_SWARMCAST);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_TALKTALK", ConvivaContentInfo.CDN_NAME_TALKTALK);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_TATA", ConvivaContentInfo.CDN_NAME_TATA);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_TELEFONICA", ConvivaContentInfo.CDN_NAME_TELEFONICA);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_TELENOR", ConvivaContentInfo.CDN_NAME_TELENOR);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_TELIA", ConvivaContentInfo.CDN_NAME_TELIA);
      defStatMeth(_s, ConvivaContentInfo, "CDN_NAME_VELOCIX", ConvivaContentInfo.CDN_NAME_VELOCIX);
      defStatMeth(_s, ConvivaContentInfo, "DEVICE_TYPE_CONSOLE", ConvivaContentInfo.DEVICE_TYPE_CONSOLE);
      defStatMeth(_s, ConvivaContentInfo, "DEVICE_TYPE_MOBILE", ConvivaContentInfo.DEVICE_TYPE_MOBILE);
      defStatMeth(_s, ConvivaContentInfo, "DEVICE_TYPE_PC", ConvivaContentInfo.DEVICE_TYPE_PC);
      defStatMeth(_s, ConvivaContentInfo, "DEVICE_TYPE_SET_TOP_BOX", ConvivaContentInfo.DEVICE_TYPE_SET_TOP_BOX);
      defStatMeth(_s, ConvivaContentInfo, "FRAMEWORK_NAME_BRIGHTCOVE", ConvivaContentInfo.FRAMEWORK_NAME_BRIGHTCOVE);
      defStatMeth(_s, ConvivaContentInfo, "FRAMEWORK_NAME_KALTURA", ConvivaContentInfo.FRAMEWORK_NAME_KALTURA);
      defStatMeth(_s, ConvivaContentInfo, "FRAMEWORK_NAME_OOYALA", ConvivaContentInfo.FRAMEWORK_NAME_OOYALA);
      defStatMeth(_s, ConvivaContentInfo, "FRAMEWORK_NAME_OSMF", ConvivaContentInfo.FRAMEWORK_NAME_OSMF);
      defStatMeth(_s, ConvivaContentInfo, "FRAMEWORK_NAME_THE_PLATFORM", ConvivaContentInfo.FRAMEWORK_NAME_THE_PLATFORM);
      defStatMeth(_s, ConvivaContentInfo, "NO_RESOURCE", ConvivaContentInfo.NO_RESOURCE);
      defStatMeth(_s, ConvivaContentInfo, "PLUGIN_NAME_KALTURA", ConvivaContentInfo.PLUGIN_NAME_KALTURA);
      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(ConvivaContentInfo, "ConvivaContentInfo");

    function ConvivaStreamerProxy() {
      var _s = this;

      if (_s != STAT_INIT)_s._notifiers = new ListCS();

      if (_s != STAT_INIT)_s._stream = new StreamInfo(-1, ConvivaContentInfo.CDN_NAME_OTHER, ConvivaContentInfo.NO_RESOURCE, -1, -1, -1);
      if (_s != STAT_INIT)_s._playingState = ConvivaStreamerProxy.UNKNOWN;

      if (_s != STAT_INIT)_s._lastMetadata = null;

      if (_s != STAT_INIT)_s._lastError = null;

      if (_s != STAT_INIT)_s._pendingErrors = new ListCS();

      if (_s != STAT_INIT)_s._displayWidth = -1;

      if (_s != STAT_INIT)_s._displayHeight = -1;

      if (_s != STAT_INIT)_s._availableStreams = null;

      if (_s != STAT_INIT)_s._currentLoadingStatus = null;

      if (_s != STAT_INIT)_s.isProxyInitialized = undefined;

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE = "PlayingStateChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_STREAMINFOCHANGE = "StreamInfoChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE = "AvailableStreamInfoChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_PROXYINITIALIZED = "ProxyInitialized";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_METADATACHANGE = "MetadataChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE = "LoadingStatusChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE = "DownloadStateChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE = "DisplaySizeChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_ERRORCHANGE = "ErrorChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_LOG = "Log";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_RESOURCE_ERROR = "ResourceError";

      if (_s == STAT_INIT)ConvivaStreamerProxy.REASON_PRESENTATION_CHANGE = "PresentationChange";

      if (_s == STAT_INIT)ConvivaStreamerProxy.STOPPED = "STOPPED";

      if (_s == STAT_INIT)ConvivaStreamerProxy.PLAYING = "PLAYING";

      if (_s == STAT_INIT)ConvivaStreamerProxy.BUFFERING = "BUFFERING";

      if (_s == STAT_INIT)ConvivaStreamerProxy.PAUSED = "PAUSED";

      if (_s == STAT_INIT)ConvivaStreamerProxy.NOT_MONITORED = "NOT_MONITORED";

      if (_s == STAT_INIT)ConvivaStreamerProxy.ERROR = "ERROR";

      if (_s == STAT_INIT)ConvivaStreamerProxy.UNKNOWN = "UNKNOWN";

      if (_s == STAT_INIT)ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE = 1;

      if (_s == STAT_INIT)ConvivaStreamerProxy.DOWNLOADSTATE_INACTIVE = 0;

      if (_s == STAT_INIT)ConvivaStreamerProxy.METADATA_DURATION = "duration";

      if (_s == STAT_INIT)ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE = "framerate";

      if (_s == STAT_INIT)ConvivaStreamerProxy.BOOLEAN_TRUE = 1;
      if (_s == STAT_INIT)ConvivaStreamerProxy.BOOLEAN_FALSE = -1;
      if (_s == STAT_INIT)ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE = 0;

      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_VIDEO = 1;
      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS = 2;
      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS = 4;

      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_BITRATE_SWITCHING = 8;
      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_CDN_SWITCHING = 16;

      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_BITRATE_EXTERNAL = 16;

      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_SOURCE_HTTP = 32;
      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_SOURCE_CHUNKED = 64;
      if (_s == STAT_INIT)ConvivaStreamerProxy.CAPABILITY_SOURCE_STREAMING = 128;

      function _constr() {

      }

      defPubMeth(_s, "Cleanup", __Cleanup);
      defPubMeth(_s, "Cleanup", __Cleanup);
      function __Cleanup() {
        if (_s._notifiers != null) {
          _s._notifiers.Clear();
        }
      }

      defPubMeth(_s, "GetCapabilities", __GetCapabilities);
      defPubMeth(_s, "GetCapabilities", __GetCapabilities);
      function __GetCapabilities() {
        return 0;
      }

      defPubMeth(_s, "GetPlayheadTimeMs", __GetPlayheadTimeMs);
      defPubMeth(_s, "GetPlayheadTimeMs", __GetPlayheadTimeMs);
      function __GetPlayheadTimeMs() {
        return -1;
      }

      defPubMeth(_s, "GetIsPHTAccurate", __GetIsPHTAccurate);
      defPubMeth(_s, "GetIsPHTAccurate", __GetIsPHTAccurate);
      function __GetIsPHTAccurate() {
        return true;
      }

      defPubMeth(_s, "GetBufferLengthMs", __GetBufferLengthMs);
      defPubMeth(_s, "GetBufferLengthMs", __GetBufferLengthMs);
      function __GetBufferLengthMs() {
        return -1;
      }

      defPubMeth(_s, "GetVideoBufferLengthMs", __GetVideoBufferLengthMs);
      defPubMeth(_s, "GetVideoBufferLengthMs", __GetVideoBufferLengthMs);
      function __GetVideoBufferLengthMs() {
        return -1;
      }

      defPubMeth(_s, "GetAudioBufferLengthMs", __GetAudioBufferLengthMs);
      defPubMeth(_s, "GetAudioBufferLengthMs", __GetAudioBufferLengthMs);
      function __GetAudioBufferLengthMs() {
        return -1;
      }

      defPubMeth(_s, "GetStartingBufferLengthMs", __GetStartingBufferLengthMs);
      defPubMeth(_s, "GetStartingBufferLengthMs", __GetStartingBufferLengthMs);
      function __GetStartingBufferLengthMs() {
        return -1;
      }

      defPubMeth(_s, "SetStartingBufferLengthMs", __SetStartingBufferLengthMs);
      defPubMeth(_s, "SetStartingBufferLengthMs", __SetStartingBufferLengthMs);
      function __SetStartingBufferLengthMs(ms) {

      }

      defPubMeth(_s, "GetIsStartingBufferFull", __GetIsStartingBufferFull);
      defPubMeth(_s, "GetIsStartingBufferFull", __GetIsStartingBufferFull);
      function __GetIsStartingBufferFull() {
        return false;
      }

      defPubMeth(_s, "GetRenderedFrameRate", __GetRenderedFrameRate);
      defPubMeth(_s, "GetRenderedFrameRate", __GetRenderedFrameRate);
      function __GetRenderedFrameRate() {
        return -1.0;
      }

      defPubMeth(_s, "GetSourceFrameRate", __GetSourceFrameRate);
      defPubMeth(_s, "GetSourceFrameRate", __GetSourceFrameRate);
      function __GetSourceFrameRate() {
        return -1.0;
      }

      defPubMeth(_s, "GetDroppedFrames", __GetDroppedFrames);
      defPubMeth(_s, "GetDroppedFrames", __GetDroppedFrames);
      function __GetDroppedFrames() {
        return -1;
      }

      defPubMeth(_s, "GetCpuPercent", __GetCpuPercent);
      defPubMeth(_s, "GetCpuPercent", __GetCpuPercent);
      function __GetCpuPercent() {
        return -1.0;
      }

      defPubMeth(_s, "GetMemoryAvailable", __GetMemoryAvailable);
      defPubMeth(_s, "GetMemoryAvailable", __GetMemoryAvailable);
      function __GetMemoryAvailable() {
        return -1.0;
      }

      defPubMeth(_s, "GetCapacityKbps", __GetCapacityKbps);
      defPubMeth(_s, "GetCapacityKbps", __GetCapacityKbps);
      function __GetCapacityKbps(resource) {
        return -1;
      }

      defPubMeth(_s, "GetServerAddress", __GetServerAddress);
      defPubMeth(_s, "GetServerAddress", __GetServerAddress);
      function __GetServerAddress() {
        return null;
      }

      defPubMeth(_s, "GetIsLive", __GetIsLive);
      defPubMeth(_s, "GetIsLive", __GetIsLive);
      function __GetIsLive() {
        return ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE;
      }

      defPubMeth(_s, "GetStreamerVersion", __GetStreamerVersion);
      defPubMeth(_s, "GetStreamerVersion", __GetStreamerVersion);
      function __GetStreamerVersion() {
        return -1;
      }

      defPubMeth(_s, "FetchCandidateStreams", __FetchCandidateStreams);
      defPubMeth(_s, "FetchCandidateStreams", __FetchCandidateStreams);
      function __FetchCandidateStreams(resource) {

      }

      defPubMeth(_s, "Play", __Play);
      defPubMeth(_s, "Play", __Play);
      function __Play(destination) {
      }

      defPubMeth(_s, "GetApiVersion", __GetApiVersion);
      defPubMeth(_s, "GetApiVersion", __GetApiVersion);
      function __GetApiVersion() {
        return ConvivaStreamerProxy.API_VERSION;
      }

      if (_s == STAT_INIT)ConvivaStreamerProxy.API_VERSION = 1;

      defPubMeth(_s, "SetMonitoringNotifier", __SetMonitoringNotifier);
      defPubMeth(_s, "SetMonitoringNotifier", __SetMonitoringNotifier);
      function __SetMonitoringNotifier(notifier) {

        if (notifier == null)return;

        var previousNotifiers = _s._notifiers;

        var newNotifiers = new ListCS();
        newNotifiers.Add(notifier);
        _s._notifiers = newNotifiers;

        if (_s._notifiers != null) {

          if (_s.isProxyInitialized) {
            notifier(ConvivaStreamerProxy.REASON_PROXYINITIALIZED, null);
          }

          _s.SetDownloadStateChange(StreamInfo.VIDEO, ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE);
          _s.SetDownloadStateChange(StreamInfo.AUDIO, ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE);

          var newInfo = _s._stream;
          _s._stream = new StreamInfo(-1, ConvivaContentInfo.CDN_NAME_OTHER, ConvivaContentInfo.NO_RESOURCE, -1, -1, -1);
          _s.SetStream(newInfo);

          var newState = _s._playingState;
          _s._playingState = ConvivaStreamerProxy.UNKNOWN;
          _s.SetPlayingState(newState);

          var newMetadata = _s._lastMetadata;
          _s._lastMetadata = null;
          _s.SetMetadata(newMetadata);

          var _for_array_1 = _s._pendingErrors.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var strErr = _for_array_1[_for_idx_2];

            _s.SetError(strErr);
          }

          var newStreams = _s._availableStreams;
          _s._availableStreams = null;
          _s.SetAvailableStreams(newStreams);

          var newChunkDownloadStatus = (_s._currentLoadingStatus);
          _s._currentLoadingStatus = null;
          _s.SetLoadingStatus(newChunkDownloadStatus);

          var newDiplayWidth = _s._displayWidth;
          var newDisplayHeight = _s._displayWidth;
          _s._displayWidth = -1;
          _s._displayHeight = -1;
          _s.SetDisplaySize(newDiplayWidth, newDisplayHeight);
        }

        previousNotifiers.Add(notifier);
        _s._notifiers = previousNotifiers;
      }

      defPubMeth(_s, "GetLoadingStatus", __GetLoadingStatus);
      defPubMeth(_s, "GetLoadingStatus", __GetLoadingStatus);
      function __GetLoadingStatus() {
        return _s._currentLoadingStatus;
      }

      defPubMeth(_s, "GetPlayingState", __GetPlayingState);
      defPubMeth(_s, "GetPlayingState", __GetPlayingState);
      function __GetPlayingState() {
        return _s._playingState;
      }

      defPubMeth(_s, "GetBitrateKbps", __GetBitrateKbps);
      defPubMeth(_s, "GetBitrateKbps", __GetBitrateKbps);
      function __GetBitrateKbps() {
        return _s._stream.bitrateKbps;
      }

      defPubMeth(_s, "GetCdnName", __GetCdnName);
      defPubMeth(_s, "GetCdnName", __GetCdnName);
      function __GetCdnName() {
        return _s._stream.cdnName;
      }

      defPubMeth(_s, "GetResource", __GetResource);
      defPubMeth(_s, "GetResource", __GetResource);
      function __GetResource() {
        return _s._stream.resource;
      }

      defPubMeth(_s, "GetStream", __GetStream);
      defPubMeth(_s, "GetStream", __GetStream);
      function __GetStream() {
        return _s._stream;
      }

      defPubMeth(_s, "GetStreams", __GetStreams);
      defPubMeth(_s, "GetStreams", __GetStreams);
      function __GetStreams() {
        return null;
      }

      defPubMeth(_s, "GetLastError", __GetLastError);
      defPubMeth(_s, "GetLastError", __GetLastError);
      function __GetLastError() {
        return _s._lastError;
      }

      defPubMeth(_s, "GetLastMetadata", __GetLastMetadata);
      defPubMeth(_s, "GetLastMetadata", __GetLastMetadata);
      function __GetLastMetadata() {
        return _s._lastMetadata;
      }

      defPubMeth(_s, "GetDisplayWidth", __GetDisplayWidth);
      defPubMeth(_s, "GetDisplayWidth", __GetDisplayWidth);
      function __GetDisplayWidth() {
        return _s._displayWidth;
      }

      defPubMeth(_s, "GetDisplayHeight", __GetDisplayHeight);
      defPubMeth(_s, "GetDisplayHeight", __GetDisplayHeight);
      function __GetDisplayHeight() {
        return _s._displayHeight;
      }

      defPubMeth(_s, "GetStreamerType", __GetStreamerType);
      defPubMeth(_s, "GetStreamerType", __GetStreamerType);
      function __GetStreamerType() {
        return null;
      }

      defPubMeth(_s, "GetLoadedBytes", __GetLoadedBytes);
      defPubMeth(_s, "GetLoadedBytes", __GetLoadedBytes);
      function __GetLoadedBytes() {
        return -1;
      }

      defPubMeth(_s, "SetDownloadStateChange", __SetDownloadStateChange);
      defPubMeth(_s, "SetDownloadStateChange", __SetDownloadStateChange);
      function __SetDownloadStateChange(type, state) {
        var downloadStateChange = new ListCS();
        downloadStateChange.Add(type);
        downloadStateChange.Add(state);
        var _for_array_1 = _s._notifiers.Values;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var notifier = _for_array_1[_for_idx_2];

          _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE, downloadStateChange);
        }
      }

      defPubMeth(_s, "SetStream", __SetStream);
      defPubMeth(_s, "SetStream", __SetStream);
      function __SetStream(updatedStream) {

        if (updatedStream.bitrateKbps <= -2)updatedStream.bitrateKbps = _s._stream.bitrateKbps;
        if (updatedStream.cdnName == null)updatedStream.cdnName = _s._stream.cdnName;
        if (updatedStream.resource == null)updatedStream.resource = _s._stream.resource;
        if (!_s._stream.equals(updatedStream)) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_STREAMINFOCHANGE, updatedStream);
          }
        }
        _s._stream = updatedStream;
      }

      defPubMeth(_s, "SetError", __SetError);
      defPubMeth(_s, "SetError", __SetError);
      function __SetError(error) {

        _s._lastError = error;

        if (_s._notifiers != null && _s._notifiers.Count > 0) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_ERRORCHANGE, error);
          }
        } else {
          _s._pendingErrors.Add(error);
        }
      }

      defPubMeth(_s, "SetMetadata", __SetMetadata);
      defPubMeth(_s, "SetMetadata", __SetMetadata);
      function __SetMetadata(metadata) {

        _s._lastMetadata = metadata;

        if (metadata != null) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_METADATACHANGE, metadata);
          }
        }

      }

      defPubMeth(_s, "Log", __Log);
      defPubMeth(_s, "Log", __Log);
      function __Log(message) {
        var _for_array_1 = _s._notifiers.Values;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var notifier = _for_array_1[_for_idx_2];

          _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOG, message);
        }

      }

      defPubMeth(_s, "LogError", __LogError);
      defPubMeth(_s, "LogError", __LogError);
      function __LogError(message) {
        var _for_array_1 = _s._notifiers.Values;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var notifier = _for_array_1[_for_idx_2];

          _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOG, "ERROR:" + message);
        }
      }

      defPubMeth(_s, "GetTotalLoadedBytes", __GetTotalLoadedBytes);
      defPubMeth(_s, "GetTotalLoadedBytes", __GetTotalLoadedBytes);
      function __GetTotalLoadedBytes() {
        return null;
      }

      defPubMeth(_s, "SetLoadingStatus", __SetLoadingStatus);
      defPubMeth(_s, "SetLoadingStatus", __SetLoadingStatus);
      function __SetLoadingStatus(loadingStatus) {
        _s._currentLoadingStatus = loadingStatus;
        if (loadingStatus != null) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE, loadingStatus);
          }
        }
      }

      defPubMeth(_s, "SetPlayingState", __SetPlayingState);
      defPubMeth(_s, "SetPlayingState", __SetPlayingState);
      function __SetPlayingState(newState) {

        if (newState != _s._playingState) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE, newState);
          }
        }
        _s._playingState = newState;
      }

      defPubMeth(_s, "SetBitrateKbps", __SetBitrateKbps);
      defPubMeth(_s, "SetBitrateKbps", __SetBitrateKbps);
      function __SetBitrateKbps(updatedBitrateKbps) {
        var updatedStream = new StreamInfo(updatedBitrateKbps, null, null, -1, -1, -1);
        _s.SetStream(updatedStream);
      }

      defPubMeth(_s, "SetCdnName", __SetCdnName);
      defPubMeth(_s, "SetCdnName", __SetCdnName);
      function __SetCdnName(updatedCdnName) {
        var updatedStream = new StreamInfo(-2, updatedCdnName, null, -1, -1, -1);
        _s.SetStream(updatedStream);
      }

      defPubMeth(_s, "SetResource", __SetResource);
      defPubMeth(_s, "SetResource", __SetResource);
      function __SetResource(updatedResource) {
        var updatedStream = new StreamInfo(-2, null, updatedResource, -1, -1, -1);
        _s.SetStream(updatedStream);
      }

      defPubMeth(_s, "SetDisplaySize", __SetDisplaySize);
      defPubMeth(_s, "SetDisplaySize", __SetDisplaySize);
      function __SetDisplaySize(displayWidth, displayHeight) {

        if (displayWidth != -1 && displayHeight != -1) {

          _s._displayWidth = displayWidth;
          _s._displayHeight = displayHeight;

          var displaySize = new ListCS();
          displaySize.Add(displayWidth);
          displaySize.Add(displayHeight);
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE, displaySize);
          }
        }
      }

      defPubMeth(_s, "SetAvailableStreams", __SetAvailableStreams);
      defPubMeth(_s, "SetAvailableStreams", __SetAvailableStreams);
      function __SetAvailableStreams(streams) {
        _s._availableStreams = streams;
        if (streams != null) {
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE, streams);
          }
        }
      }

      defPubMeth(_s, "SetProxyInitialized", __SetProxyInitialized);
      defPubMeth(_s, "SetProxyInitialized", __SetProxyInitialized);
      function __SetProxyInitialized() {
        if (!_s.isProxyInitialized) {
          _s.isProxyInitialized = true;
          var _for_array_1 = _s._notifiers.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var notifier = _for_array_1[_for_idx_2];

            _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_PROXYINITIALIZED, null);
          }
        }
      }

      defPrivMeth(_s, "notifyListeners", __notifyListeners);
      function __notifyListeners(notifier, reason, arg) {
        try {
          notifier(reason, arg);
        } catch (e) {
          notifier(ConvivaStreamerProxy.REASON_LOG, "ConvivaStreamerProxy : uncaught exception " + e);
        }
      }

      defStatMeth(_s, ConvivaStreamerProxy, "API_VERSION", ConvivaStreamerProxy.API_VERSION);
      defStatMeth(_s, ConvivaStreamerProxy, "BOOLEAN_FALSE", ConvivaStreamerProxy.BOOLEAN_FALSE);
      defStatMeth(_s, ConvivaStreamerProxy, "BOOLEAN_TRUE", ConvivaStreamerProxy.BOOLEAN_TRUE);
      defStatMeth(_s, ConvivaStreamerProxy, "BOOLEAN_UNAVAILABLE", ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE);
      defStatMeth(_s, ConvivaStreamerProxy, "BUFFERING", ConvivaStreamerProxy.BUFFERING);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_BITRATE_EXTERNAL", ConvivaStreamerProxy.CAPABILITY_BITRATE_EXTERNAL);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_BITRATE_METRICS", ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_BITRATE_SWITCHING", ConvivaStreamerProxy.CAPABILITY_BITRATE_SWITCHING);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_CDN_SWITCHING", ConvivaStreamerProxy.CAPABILITY_CDN_SWITCHING);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_QUALITY_METRICS", ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_SOURCE_CHUNKED", ConvivaStreamerProxy.CAPABILITY_SOURCE_CHUNKED);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_SOURCE_HTTP", ConvivaStreamerProxy.CAPABILITY_SOURCE_HTTP);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_SOURCE_STREAMING", ConvivaStreamerProxy.CAPABILITY_SOURCE_STREAMING);
      defStatMeth(_s, ConvivaStreamerProxy, "CAPABILITY_VIDEO", ConvivaStreamerProxy.CAPABILITY_VIDEO);
      defStatMeth(_s, ConvivaStreamerProxy, "DOWNLOADSTATE_ACTIVE", ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE);
      defStatMeth(_s, ConvivaStreamerProxy, "DOWNLOADSTATE_INACTIVE", ConvivaStreamerProxy.DOWNLOADSTATE_INACTIVE);
      defStatMeth(_s, ConvivaStreamerProxy, "ERROR", ConvivaStreamerProxy.ERROR);
      defStatMeth(_s, ConvivaStreamerProxy, "METADATA_DURATION", ConvivaStreamerProxy.METADATA_DURATION);
      defStatMeth(_s, ConvivaStreamerProxy, "METADATA_ENCODED_FRAMERATE", ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE);
      defStatMeth(_s, ConvivaStreamerProxy, "NOT_MONITORED", ConvivaStreamerProxy.NOT_MONITORED);
      defStatMeth(_s, ConvivaStreamerProxy, "PAUSED", ConvivaStreamerProxy.PAUSED);
      defStatMeth(_s, ConvivaStreamerProxy, "PLAYING", ConvivaStreamerProxy.PLAYING);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_AVAILABLESTREAMINFOCHANGE", ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_DISPLAYSIZECHANGE", ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_DOWNLOADSTATECHANGE", ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_ERRORCHANGE", ConvivaStreamerProxy.REASON_ERRORCHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_LOADINGSTATUSCHANGE", ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_LOG", ConvivaStreamerProxy.REASON_LOG);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_METADATACHANGE", ConvivaStreamerProxy.REASON_METADATACHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_PLAYINGSTATECHANGE", ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_PRESENTATION_CHANGE", ConvivaStreamerProxy.REASON_PRESENTATION_CHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_PROXYINITIALIZED", ConvivaStreamerProxy.REASON_PROXYINITIALIZED);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_RESOURCE_ERROR", ConvivaStreamerProxy.REASON_RESOURCE_ERROR);
      defStatMeth(_s, ConvivaStreamerProxy, "REASON_STREAMINFOCHANGE", ConvivaStreamerProxy.REASON_STREAMINFOCHANGE);
      defStatMeth(_s, ConvivaStreamerProxy, "STOPPED", ConvivaStreamerProxy.STOPPED);
      defStatMeth(_s, ConvivaStreamerProxy, "UNKNOWN", ConvivaStreamerProxy.UNKNOWN);
      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(ConvivaStreamerProxy, "ConvivaStreamerProxy");

    function LivePass() {
      var _s = this;

      if (_s == STAT_INIT)LivePass.READY = "READY";

      if (_s == STAT_INIT)LivePass.STREAM_SELECTION_SUCC = 0;

      if (_s == STAT_INIT)LivePass.STREAM_SELECTION_FAILURE = 1;

      if (_s == STAT_INIT)LivePass.STREAM_SELECTION_TIMEOUT = 2;

      if (_s == STAT_INIT)LivePass.OPTION_EXTERNAL_BITRATE_REPORTING = "externalBitrateReporting";

      if (_s == STAT_INIT)LivePass.readyState = false;

      if (_s == STAT_INIT)LivePass._settings = null;

      if (_s == STAT_INIT)LivePass._utils = null;

      if (_s == STAT_INIT)LivePass._sessionFactory = null;

      if (_s == STAT_INIT)LivePass._toggleTracesUsed = false;

      if (_s == STAT_INIT)LivePass._toggleTracesValue = false;

      if (_s == STAT_INIT)LivePass._globalSessionId = -1;

      defStatMeth(_s, LivePass, "init", __init);
      function __init(customerKey) {
        if (LivePass.readyState) {
          LivePass._utils.log("LivePass.init(): already initialized.");
          return;
        }
        if (LivePass._utils == null) {

          LivePass._utils = Utils.CreateUtils(null);
        }
        if (customerKey == null || customerKey.length == 0) {
          LivePass._utils.err("LivePass.init(): invalid customerKey: " + customerKey);
          return;
        }
        LivePass._utils.runProtectedSync(
          function() {
            LivePass._settings = LivePass._utils.getSettings();

            if (LivePass._toggleTracesUsed) {
              LivePass._settings.enableLogging = LivePass._toggleTracesValue;
            }

            LivePass._settings.clientInstanceId = LivePass._utils.randUInt();

            LivePass._settings.customerKey = customerKey;
            LivePass._utils.log("LivePass.init(): url=" + LivePass._settings.gatewayUrl + " customerKey=" + LivePass._settings.customerKey);
            LivePass._utils.startFetchClientId();
            PlayerStates.init();
            LivePass._sessionFactory = new SessionFactory();
            LivePass.readyState = true;
            LivePass._utils.log("LivePass.init(): done.");
          }, "LivePass.init");
      }

      defStatMeth(_s, LivePass, "initWithSettings", __initWithSettings);
      function __initWithSettings(customerKey, settings) {

        if (LivePass.readyState) {
          LivePass._utils.log("LivePass.initWithSettings(): already initialized.");
          return;
        }
        LivePass._utils = Utils.CreateUtils(settings);
        LivePass.init(customerKey);
      }

      defStatMeth(_s, LivePass, "cleanup", __cleanup);
      function __cleanup() {
        if (LivePass._utils != null) {
          LivePass._utils.runProtected(
            function() {
              LivePass._utils.log("LivePass.cleanup()");
              if (LivePass._sessionFactory != null) {
                LivePass._sessionFactory.cleanup();
              }
              LivePass._sessionFactory = null;
              LivePass._globalSessionId = -1;
              if (LivePass._utils != null) {
                LivePass._utils.cleanup();
              }
              LivePass._utils = null;
              LivePass._settings = null;
            }, "LivePass.cleanup");
        }
        LivePass.readyState = false;
      }

      defStatMeth(_s, LivePass, "createSession", __createSession);
      function __createSession(streamer, contentInfo, options) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.createSession before LivePass.init");
          return -1;
        }
        return LivePass.createSessionWithGlobal(streamer, contentInfo, options, false);
      }

      defStatMeth(_s, LivePass, "createSessionWithGlobal", __createSessionWithGlobal);
      function __createSessionWithGlobal(streamer, contentInfo, options, global) {

        var sid = LivePass._sessionFactory.newSessionId();
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.makeSession(streamer, contentInfo, options, sid, global);
          }, "LivePass.createSession");
        return sid;
      }

      defStatMeth(_s, LivePass, "reportError", __reportError);
      function __reportError(sessionId, errorMsg) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.reportError before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {

              session.reportError(StreamerError.makeUnscopedError(errorMsg, StreamerError.SEVERITY_FATAL));
            }
          }, "LivePass.reportError");
      }

      defStatMeth(_s, LivePass, "setBitrate", __setBitrate);
      function __setBitrate(sessionId, bitrateKbps) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.setBitrate before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.setBitrate(bitrateKbps);
            }
          }, "LivePass.setBitrate");
      }

      defStatMeth(_s, LivePass, "setCurrentStreamMetadata", __setCurrentStreamMetadata);
      function __setCurrentStreamMetadata(sessionId, metadata) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.setCurrentStreamMetadata before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.setCurrentStreamMetadata(metadata);
            }
          }, "LivePass.setCurrentStreamMetadata");
      }

      defStatMeth(_s, LivePass, "setCdnNameOrResource", __setCdnNameOrResource);
      function __setCdnNameOrResource(sessionId, resource) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.setCdnNameOrResource before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.setCdnNameOrResource(resource);
            }
          }, "LivePass.setCdnNameOrResource");
      }

      defStatMeth(_s, LivePass, "detachStreamer", __detachStreamer);
      function __detachStreamer(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.detachStreamer before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.detachStreamer();
            }
          }, "LivePass.detachStreamer");
      }

      defStatMeth(_s, LivePass, "attachStreamer", __attachStreamer);
      function __attachStreamer(sessionId, streamer) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.attachStreamer before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.attachStreamer(streamer);
            }
          }, "LivePass.attachStreamer");
      }

      defStatMeth(_s, LivePass, "sendSessionEvent", __sendSessionEvent);
      function __sendSessionEvent(sessionId, eventName, eventAttributes) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.sendSessionEvent before LivePass.init");
          return;
        }
        var eventAttrDictCS = null;
        eventAttrDictCS = Lang.DictionaryFromRepr(eventAttributes);
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.sendCustomEvent(eventName, eventAttrDictCS);
            }
          }, "LivePass.sendSessionEvent");
      }

      defStatMeth(_s, LivePass, "sendEvent", __sendEvent);
      function __sendEvent(eventName, eventAttributes) {

        if (!LivePass.readyState) {
          LivePass.ping("LivePass.sendEvent before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {

            if (LivePass._globalSessionId < 0) {
              var cci = new ConvivaContentInfo("", new DictionaryCS());
              LivePass._globalSessionId = LivePass.createSessionWithGlobal(null, cci, null, true);
            }
            LivePass.sendSessionEvent(LivePass._globalSessionId, eventName, eventAttributes);
          }, "LivePass.sendEvent"
        );

      }

      defStatMeth(_s, LivePass, "cleanupSession", __cleanupSession);
      function __cleanupSession(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.cleanupSession before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            LivePass._sessionFactory.cleanupSession(sessionId);
          }, "Livepass.cleanupSession");
      }

      defStatMeth(_s, LivePass, "pauseJoinTime", __pauseJoinTime);
      function __pauseJoinTime(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.pauseJoinTime before LivePass.init");
          return;
        }
        LivePass.adStart(sessionId);
      }

      defStatMeth(_s, LivePass, "resumeJoinTime", __resumeJoinTime);
      function __resumeJoinTime(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.resumeJoinTime before LivePass.init");
          return;
        }
        LivePass.adEnd(sessionId);
      }

      defStatMeth(_s, LivePass, "adStart", __adStart);
      function __adStart(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.adStart before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.adStart();
            }
          }, "LivePass.adStart");
      }

      defStatMeth(_s, LivePass, "adEnd", __adEnd);
      function __adEnd(sessionId) {
        if (!LivePass.readyState) {
          LivePass.ping("LivePass.adEnd before LivePass.init");
          return;
        }
        LivePass._utils.runProtected(
          function() {
            var session = LivePass._sessionFactory.getSession(sessionId);
            if (session != null) {
              session.adEnd();
            }
          }, "LivePass.adEnd");
      }

      defStatMeth(_s, LivePass, "toggleTraces", __toggleTraces);
      function __toggleTraces(b) {

        LivePass._toggleTracesUsed = true;
        if (LivePass._settings != null) {
          LivePass._settings.enableLogging = b;
        } else {
          LivePass._toggleTracesValue = b;
        }
      }

      defStatMeth(_s, LivePass, "ping", __ping);
      function __ping(msg) {
        if (LivePass._utils != null) {
          LivePass._utils.ping(msg);
        }
      }

    }

    statInit(LivePass, "LivePass");

    function PlayerStates() {
      var _s = this;

      if (_s == STAT_INIT)PlayerStates.stateToInt = null;

      if (_s == STAT_INIT)PlayerStates.intToState = null;

      if (_s == STAT_INIT)PlayerStates.UNINITIALIZED = "UNINITIALIZED";
      if (_s == STAT_INIT)PlayerStates.eUninitialized = 0;

      if (_s == STAT_INIT)PlayerStates.PLAYING = "PLAYING";
      if (_s == STAT_INIT)PlayerStates.ePlaying = 3;
      if (_s == STAT_INIT)PlayerStates.STOPPED = "STOPPED";
      if (_s == STAT_INIT)PlayerStates.eStopped = 1;
      if (_s == STAT_INIT)PlayerStates.PAUSED = "PAUSED";
      if (_s == STAT_INIT)PlayerStates.ePaused = 12;
      if (_s == STAT_INIT)PlayerStates.BUFFERING = "BUFFERING";
      if (_s == STAT_INIT)PlayerStates.eBuffering = 6;
      if (_s == STAT_INIT)PlayerStates.NOT_MONITORED = "NOT_MONITORED";
      if (_s == STAT_INIT)PlayerStates.eNotMonitored = 98;
      if (_s == STAT_INIT)PlayerStates.UNKNOWN = "UNKNOWN";
      if (_s == STAT_INIT)PlayerStates.eUnknown = 100;

      defStatMeth(_s, PlayerStates, "init", __init);
      function __init() {
        PlayerStates.stateToInt = new DictionaryCS();
        PlayerStates.intToState = new DictionaryCS();
        PlayerStates.stateToInt.SetValue(PlayerStates.UNINITIALIZED, PlayerStates.eUninitialized);
        PlayerStates.intToState.SetValue(PlayerStates.eUninitialized, PlayerStates.UNINITIALIZED);
        PlayerStates.stateToInt.SetValue(PlayerStates.PLAYING, PlayerStates.ePlaying);
        PlayerStates.intToState.SetValue(PlayerStates.ePlaying, PlayerStates.PLAYING);
        PlayerStates.stateToInt.SetValue(PlayerStates.STOPPED, PlayerStates.eStopped);
        PlayerStates.intToState.SetValue(PlayerStates.eStopped, PlayerStates.STOPPED);
        PlayerStates.stateToInt.SetValue(PlayerStates.PAUSED, PlayerStates.ePaused);
        PlayerStates.intToState.SetValue(PlayerStates.ePaused, PlayerStates.PAUSED);
        PlayerStates.stateToInt.SetValue(PlayerStates.BUFFERING, PlayerStates.eBuffering);
        PlayerStates.intToState.SetValue(PlayerStates.eBuffering, PlayerStates.BUFFERING);
        PlayerStates.stateToInt.SetValue(PlayerStates.NOT_MONITORED, PlayerStates.eNotMonitored);
        PlayerStates.intToState.SetValue(PlayerStates.eNotMonitored, PlayerStates.NOT_MONITORED);
        PlayerStates.stateToInt.SetValue(PlayerStates.UNKNOWN, PlayerStates.eUnknown);
        PlayerStates.intToState.SetValue(PlayerStates.eUnknown, PlayerStates.UNKNOWN);
      }

      defStatMeth(_s, PlayerStates, "stringToInt", __stringToInt);
      function __stringToInt(stateStr) {
        if (PlayerStates.stateToInt == null) {
          PlayerStates.init();
        }
        if (PlayerStates.stateToInt.ContainsKey(stateStr)) {
          return PlayerStates.stateToInt.GetValue(stateStr);
        } else {
          return PlayerStates.eUnknown;
        }
      }

      defStatMeth(_s, PlayerStates, "intToString", __intToString);
      function __intToString(stateInt) {
        if (PlayerStates.intToState == null) {
          PlayerStates.init();
        }
        if (PlayerStates.intToState.ContainsKey(stateInt)) {
          return PlayerStates.intToState.GetValue(stateInt);
        } else {
          return PlayerStates.UNKNOWN;
        }
      }

      defStatMeth(_s, PlayerStates, "cleanup", __cleanup);
      function __cleanup() {
        PlayerStates.stateToInt = null;
      }

    }

    statInit(PlayerStates, "PlayerStates");

    function StreamInfo() {
      var _s = this;

      if (_s == STAT_INIT)StreamInfo.UNKNOWN = -1;

      if (_s == STAT_INIT)StreamInfo.AUDIO = 0;

      if (_s == STAT_INIT)StreamInfo.VIDEO = 1;

      if (_s == STAT_INIT)StreamInfo.TEXT = 2;

      if (_s == STAT_INIT)StreamInfo.RESOURCE = 3;

      if (_s == STAT_INIT)StreamInfo.UNKNOWN_RESOURCE = "";

      if (_s == STAT_INIT)StreamInfo.MAX_BITRATE = 2147483647;

      if (_s != STAT_INIT)_s.__auto_type = undefined;
      defGet(_s, "type", __get_type);
      defGet(_s, "type", __get_type);
      function __get_type() {return _s.__auto_type;}

      defSet(_s, "type", __set_type);
      defSet(_s, "type", __set_type);
      function __set_type(value) {_s.__auto_type = value;}

      if (_s != STAT_INIT)_s.__auto_sourceHeightPixels = undefined;
      defGet(_s, "sourceHeightPixels", __get_sourceHeightPixels);
      defGet(_s, "sourceHeightPixels", __get_sourceHeightPixels);
      function __get_sourceHeightPixels() {return _s.__auto_sourceHeightPixels;}

      defSet(_s, "sourceHeightPixels", __set_sourceHeightPixels);
      defSet(_s, "sourceHeightPixels", __set_sourceHeightPixels);
      function __set_sourceHeightPixels(value) {_s.__auto_sourceHeightPixels = value;}

      if (_s != STAT_INIT)_s.__auto_sourceWidthPixels = undefined;
      defGet(_s, "sourceWidthPixels", __get_sourceWidthPixels);
      defGet(_s, "sourceWidthPixels", __get_sourceWidthPixels);
      function __get_sourceWidthPixels() {return _s.__auto_sourceWidthPixels;}

      defSet(_s, "sourceWidthPixels", __set_sourceWidthPixels);
      defSet(_s, "sourceWidthPixels", __set_sourceWidthPixels);
      function __set_sourceWidthPixels(value) {_s.__auto_sourceWidthPixels = value;}

      if (_s != STAT_INIT)_s.__auto_bitrateKbps = undefined;
      defGet(_s, "bitrateKbps", __get_bitrateKbps);
      defGet(_s, "bitrateKbps", __get_bitrateKbps);
      function __get_bitrateKbps() {return _s.__auto_bitrateKbps;}

      defSet(_s, "bitrateKbps", __set_bitrateKbps);
      defSet(_s, "bitrateKbps", __set_bitrateKbps);
      function __set_bitrateKbps(value) {_s.__auto_bitrateKbps = value;}

      if (_s != STAT_INIT)_s.__auto_resource = undefined;
      defGet(_s, "resource", __get_resource);
      defGet(_s, "resource", __get_resource);
      function __get_resource() {return _s.__auto_resource;}

      defSet(_s, "resource", __set_resource);
      defSet(_s, "resource", __set_resource);
      function __set_resource(value) {_s.__auto_resource = value;}

      if (_s != STAT_INIT)_s.__auto_cdnName = undefined;
      defGet(_s, "cdnName", __get_cdnName);
      defGet(_s, "cdnName", __get_cdnName);
      function __get_cdnName() {return _s.__auto_cdnName;}

      defSet(_s, "cdnName", __set_cdnName);
      defSet(_s, "cdnName", __set_cdnName);
      function __set_cdnName(value) {_s.__auto_cdnName = value;}

      function _constr(_bitrateKbps, _cdnName, _resource, type, widthPixels, heightPixels) {
        _s.bitrateKbps = _bitrateKbps;
        _s.cdnName = _cdnName;
        _s.resource = _resource;
        _s.type = type;
        _s.sourceHeightPixels = heightPixels;
        _s.sourceWidthPixels = widthPixels;
      }

      defPubMeth(_s, "GetBitrateKbps", __GetBitrateKbps);
      defPubMeth(_s, "GetBitrateKbps", __GetBitrateKbps);
      function __GetBitrateKbps() {
        return _s.bitrateKbps;
      }

      defPubMeth(_s, "GetCdnName", __GetCdnName);
      defPubMeth(_s, "GetCdnName", __GetCdnName);
      function __GetCdnName() {
        return _s.cdnName;
      }

      defPubMeth(_s, "GetResource", __GetResource);
      defPubMeth(_s, "GetResource", __GetResource);
      function __GetResource() {
        return _s.resource;
      }

      defPubMeth(_s, "equals", __equals);
      defPubMeth(_s, "equals", __equals);
      function __equals(other) {
        if (other == null)return false;

        return _s.cdnName == other.cdnName && _s.resource == other.resource && _s.bitrateKbps == other.bitrateKbps && _s.type == other.type
          && _s.sourceHeightPixels == other.sourceHeightPixels && _s.sourceWidthPixels == other.sourceWidthPixels;
      }

      defStatMeth(_s, StreamInfo, "ConstructClone", __ConstructClone);
      defStatMeth(_s, StreamInfo, "ConstructClone", __ConstructClone);
      function __ConstructClone(fromObj) {
        if (fromObj == null)return null;
        var res = new StreamInfo(-1, ConvivaContentInfo.CDN_NAME_OTHER, null, -1, -1, -1);
        res.type = slint.Cast(NativeLang.GetField("type", fromObj));
        res.bitrateKbps = slint.Cast(NativeLang.GetField("bitrateKbps", fromObj));
        res.resource = NativeLang.GetStringField("resource", fromObj);
        res.cdnName = NativeLang.GetStringField("cdnName", fromObj);
        res.sourceHeightPixels = slint.Cast(NativeLang.GetField("sourceHeightPixels", fromObj));
        res.sourceWidthPixels = slint.Cast(NativeLang.GetField("sourceWidthPixels", fromObj));
        return res;
      }

      defPubMeth(_s, "ToStr", __ToStr);
      defPubMeth(_s, "ToStr", __ToStr);
      function __ToStr() {
        var typeString = null;

        switch (_s.type) {
        case StreamInfo.UNKNOWN:
          typeString = "UNKNOWN";
          break;
        case StreamInfo.VIDEO:
          typeString = "VIDEO";
          break;
        case StreamInfo.AUDIO:
          typeString = "AUDIO";
          break;
        case StreamInfo.TEXT:
          typeString = "TEXT";
          break;
        case StreamInfo.RESOURCE:
          typeString = "RESOURCE";
          break;
        default:
          throw new Error("Unknown stream type " + _s.type);
        }

        return "type=" + typeString +
          ", bitrateKbps=" + _s.bitrateKbps +
          ", resource=" + (_s.resource != null ? _s.resource : "null") +
          ", cdnName=" + (_s.cdnName != null ? _s.cdnName : "null") +
          ", sourceHeightPixels=" + _s.sourceHeightPixels +
          ", sourceWidthPixels=" + _s.sourceWidthPixels;
      }

      defStatMeth(_s, StreamInfo, "AUDIO", StreamInfo.AUDIO);
      defStatMeth(_s, StreamInfo, "MAX_BITRATE", StreamInfo.MAX_BITRATE);
      defStatMeth(_s, StreamInfo, "RESOURCE", StreamInfo.RESOURCE);
      defStatMeth(_s, StreamInfo, "TEXT", StreamInfo.TEXT);
      defStatMeth(_s, StreamInfo, "UNKNOWN", StreamInfo.UNKNOWN);
      defStatMeth(_s, StreamInfo, "UNKNOWN_RESOURCE", StreamInfo.UNKNOWN_RESOURCE);
      defStatMeth(_s, StreamInfo, "VIDEO", StreamInfo.VIDEO);
      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(StreamInfo, "StreamInfo");

    function StreamSwitch() {
      var _s = this;

      if (_s == STAT_INIT)StreamSwitch._nextId = 0;

      if (_s == STAT_INIT)StreamSwitch.PENDING = "PENDING";

      if (_s == STAT_INIT)StreamSwitch.IN_PROGRESS = "IN_PROGRESS";

      if (_s == STAT_INIT)StreamSwitch.SUCCEEDED = "SUCCEEDED";

      if (_s == STAT_INIT)StreamSwitch.FAILED = "FAILED";

      if (_s == STAT_INIT)StreamSwitch.INTERRUPTED = "INTERRUPTED";

      defStatMeth(_s, StreamSwitch, "MakeSwitch", __MakeSwitch);
      defStatMeth(_s, StreamSwitch, "MakeSwitch", __MakeSwitch);
      function __MakeSwitch(source, target, status) {
        return new StreamSwitch(StreamSwitch.GetNextId(false), source, target, -1, null, status);
      }

      defStatMeth(_s, StreamSwitch, "MakeSwitchToStream", __MakeSwitchToStream);
      defStatMeth(_s, StreamSwitch, "MakeSwitchToStream", __MakeSwitchToStream);
      function __MakeSwitchToStream(target, status) {
        return new StreamSwitch(StreamSwitch.GetNextId(false), null, target, -1, null, status);
      }

      defPubMeth(_s, "Cleanup", __Cleanup);
      defPubMeth(_s, "Cleanup", __Cleanup);
      function __Cleanup() {
      }

      if (_s != STAT_INIT)_s.__auto_id = undefined;
      defGet(_s, "id", __get_id);
      defGet(_s, "id", __get_id);
      function __get_id() {return _s.__auto_id;}

      defSet(_s, "id", __set_id);
      defSet(_s, "id", __set_id);
      function __set_id(value) {_s.__auto_id = value;}

      if (_s != STAT_INIT)_s.__auto_timeoutMs = undefined;
      defGet(_s, "timeoutMs", __get_timeoutMs);
      defGet(_s, "timeoutMs", __get_timeoutMs);
      function __get_timeoutMs() {return _s.__auto_timeoutMs;}

      defSet(_s, "timeoutMs", __set_timeoutMs);
      defSet(_s, "timeoutMs", __set_timeoutMs);
      function __set_timeoutMs(value) {_s.__auto_timeoutMs = value;}

      if (_s != STAT_INIT)_s.__auto_sourceStream = undefined;
      defGet(_s, "sourceStream", __get_sourceStream);
      defGet(_s, "sourceStream", __get_sourceStream);
      function __get_sourceStream() {return _s.__auto_sourceStream;}

      defSet(_s, "sourceStream", __set_sourceStream);
      defSet(_s, "sourceStream", __set_sourceStream);
      function __set_sourceStream(value) {_s.__auto_sourceStream = value;}

      if (_s != STAT_INIT)_s.__auto_targetStream = undefined;
      defGet(_s, "targetStream", __get_targetStream);
      defGet(_s, "targetStream", __get_targetStream);
      function __get_targetStream() {return _s.__auto_targetStream;}

      defSet(_s, "targetStream", __set_targetStream);
      defSet(_s, "targetStream", __set_targetStream);
      function __set_targetStream(value) {_s.__auto_targetStream = value;}

      if (_s != STAT_INIT)_s.__auto_mode = undefined;
      defGet(_s, "mode", __get_mode);
      defGet(_s, "mode", __get_mode);
      function __get_mode() {return _s.__auto_mode;}

      defSet(_s, "mode", __set_mode);
      defSet(_s, "mode", __set_mode);
      function __set_mode(value) {_s.__auto_mode = value;}

      if (_s != STAT_INIT)_s.__auto_status = undefined;
      defGet(_s, "status", __get_status);
      defGet(_s, "status", __get_status);
      function __get_status() {return _s.__auto_status;}

      defSet(_s, "status", __set_status);
      defSet(_s, "status", __set_status);
      function __set_status(value) {_s.__auto_status = value;}

      function _constr(id, sourceStream, targetStream, timeoutMs, mode, status) {
        _s.id = id;
        _s.sourceStream = sourceStream;
        _s.targetStream = targetStream;
        _s.timeoutMs = timeoutMs;
        _s.mode = mode;
        _s.status = status;
      }

      defPubMeth(_s, "CheckValidity", __CheckValidity);
      defPubMeth(_s, "CheckValidity", __CheckValidity);
      function __CheckValidity() {
        if (_s.id == null) {
          return "StreamSwitch.id is null (and must be non-null)";
        }

        if (_s.id != null && !((typeof _s.id === "string"))) {
          return "StreamSwitch.id is not a string";
        } else if (_s.timeoutMs != null && !((typeof _s.timeoutMs === "number"))) {
          return "StreamSwitch.timeoutMs is not an int";
        } else if (_s.mode != null && !((typeof _s.mode === "string"))) {
          return "StreamSwitch.mode is not a string";
        } else if (_s.status != null && !((typeof _s.status === "string"))) {
          return "StreamSwitch.status is not a string";
        } else if (_s.sourceStream != null && !(_s.sourceStream instanceof CandidateStream)) {
          return "StreamSwitch.sourceStream is not a CandidateStream";
        } else if (_s.targetStream != null && !(_s.targetStream instanceof CandidateStream)) {
          return "StreamSwitch.targetStream is not a CandidateStream";
        }
        var sourceStreamError = (_s.sourceStream != null ? _s.sourceStream.CheckValidity() : null);
        if (sourceStreamError != null) {
          return sourceStreamError;
        }
        var targetStreamError = (_s.targetStream != null ? _s.targetStream.CheckValidity() : null);
        if (targetStreamError != null) {
          return targetStreamError;
        }
        return null;
      }

      defStatMeth(_s, StreamSwitch, "ConstructClone", __ConstructClone);
      defStatMeth(_s, StreamSwitch, "ConstructClone", __ConstructClone);
      function __ConstructClone(fromObj) {
        var res = new StreamSwitch(null, null, null, -1, "", "");
        res.id = NativeLang.GetStringField("id", fromObj);
        res.sourceStream = CandidateStream.ConstructClone(NativeLang.GetField("sourceStream", fromObj));
        res.targetStream = CandidateStream.ConstructClone(NativeLang.GetField("targetStream", fromObj));
        res.timeoutMs = slint.Cast(NativeLang.GetField("timeoutMs", fromObj));
        res.mode = NativeLang.GetStringField("mode", fromObj);
        res.status = NativeLang.GetStringField("status", fromObj);
        return res;
      }

      defStatMeth(_s, StreamSwitch, "StaticInit", __StaticInit);
      defStatMeth(_s, StreamSwitch, "StaticInit", __StaticInit);
      function __StaticInit() {
        StreamSwitch._nextId = 0;
      }

      defStatMeth(_s, StreamSwitch, "StaticCleanup", __StaticCleanup);
      defStatMeth(_s, StreamSwitch, "StaticCleanup", __StaticCleanup);
      function __StaticCleanup() {
        StreamSwitch._nextId = 0;
      }

      defStatMeth(_s, StreamSwitch, "GetNextId", __GetNextId);
      defStatMeth(_s, StreamSwitch, "GetNextId", __GetNextId);
      function __GetNextId(useInternalNamespace) {
        var id = StreamSwitch._nextId;
        StreamSwitch._nextId += 1;
        if (useInternalNamespace) {
          return "c3." + Lang.ToString(id);
        } else {
          return Lang.ToString(id);
        }
      }

      defStatMeth(_s, StreamSwitch, "FAILED", StreamSwitch.FAILED);
      defStatMeth(_s, StreamSwitch, "INTERRUPTED", StreamSwitch.INTERRUPTED);
      defStatMeth(_s, StreamSwitch, "IN_PROGRESS", StreamSwitch.IN_PROGRESS);
      defStatMeth(_s, StreamSwitch, "PENDING", StreamSwitch.PENDING);
      defStatMeth(_s, StreamSwitch, "SUCCEEDED", StreamSwitch.SUCCEEDED);
      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(StreamSwitch, "StreamSwitch");

    function StreamerError() {
      var _s = this;

      if (_s == STAT_INIT)StreamerError.ERROR_SCOPE_UNKNOWN = 0;

      if (_s == STAT_INIT)StreamerError.ERROR_SCOPE_STREAM_SEGMENT = 1;

      if (_s == STAT_INIT)StreamerError.ERROR_SCOPE_STREAM = 2;

      if (_s == STAT_INIT)StreamerError.ERROR_SCOPE_RESOURCE = 3;

      if (_s == STAT_INIT)StreamerError.SEVERITY_WARNING = 0;

      if (_s == STAT_INIT)StreamerError.SEVERITY_FATAL = 1;

      if (_s != STAT_INIT)_s.__auto_errorCode = undefined;
      defGet(_s, "errorCode", __get_errorCode);
      defGet(_s, "errorCode", __get_errorCode);
      function __get_errorCode() {return _s.__auto_errorCode;}

      defSet(_s, "errorCode", __set_errorCode);
      defSet(_s, "errorCode", __set_errorCode);
      function __set_errorCode(value) {_s.__auto_errorCode = value;}

      if (_s != STAT_INIT)_s.__auto_severity = undefined;
      defGet(_s, "severity", __get_severity);
      defGet(_s, "severity", __get_severity);
      function __get_severity() {return _s.__auto_severity;}

      defSet(_s, "severity", __set_severity);
      defSet(_s, "severity", __set_severity);
      function __set_severity(value) {_s.__auto_severity = value;}

      if (_s != STAT_INIT)_s.__auto_stream = undefined;
      defGet(_s, "stream", __get_stream);
      defGet(_s, "stream", __get_stream);
      function __get_stream() {return _s.__auto_stream;}

      defSet(_s, "stream", __set_stream);
      defSet(_s, "stream", __set_stream);
      function __set_stream(value) {_s.__auto_stream = value;}

      if (_s != STAT_INIT)_s.__auto_index = undefined;
      defGet(_s, "index", __get_index);
      defGet(_s, "index", __get_index);
      function __get_index() {return _s.__auto_index;}

      defSet(_s, "index", __set_index);
      defSet(_s, "index", __set_index);
      function __set_index(value) {_s.__auto_index = value;}

      if (_s != STAT_INIT)_s.__auto_scope = undefined;
      defGet(_s, "scope", __get_scope);
      defGet(_s, "scope", __get_scope);
      function __get_scope() {return _s.__auto_scope;}

      defSet(_s, "scope", __set_scope);
      defSet(_s, "scope", __set_scope);
      function __set_scope(value) {_s.__auto_scope = value;}

      defStatMeth(_s, StreamerError, "makeUnscopedError", __makeUnscopedError);
      defStatMeth(_s, StreamerError, "makeUnscopedError", __makeUnscopedError);
      function __makeUnscopedError(errorCode, severity) {
        return new StreamerError(errorCode, null, -1, severity, StreamerError.ERROR_SCOPE_UNKNOWN);
      }

      defStatMeth(_s, StreamerError, "makeStreamError", __makeStreamError);
      defStatMeth(_s, StreamerError, "makeStreamError", __makeStreamError);
      function __makeStreamError(errCode, severity, stream) {
        return new StreamerError(errCode, stream, -1, severity, StreamerError.ERROR_SCOPE_STREAM);
      }

      defStatMeth(_s, StreamerError, "makeResourceError", __makeResourceError);
      defStatMeth(_s, StreamerError, "makeResourceError", __makeResourceError);
      function __makeResourceError(errCode, severity, stream) {
        return new StreamerError(errCode, stream, -1, severity, StreamerError.ERROR_SCOPE_RESOURCE);
      }

      defStatMeth(_s, StreamerError, "makeStreamSegmentError", __makeStreamSegmentError);
      defStatMeth(_s, StreamerError, "makeStreamSegmentError", __makeStreamSegmentError);
      function __makeStreamSegmentError(errCode, severity, stream, idx) {
        return new StreamerError(errCode, stream, idx, severity, StreamerError.ERROR_SCOPE_STREAM_SEGMENT);
      }

      function _constr(_errorCode, _stream, _index, _severity, _scope) {
        _s.errorCode = _errorCode;

        _s.stream = _stream;
        _s.index = _index;
        _s.severity = _severity;
        _s.scope = _scope;
      }

      defStatMeth(_s, StreamerError, "ConstructClone", __ConstructClone);
      defStatMeth(_s, StreamerError, "ConstructClone", __ConstructClone);
      function __ConstructClone(fromObj) {
        if (fromObj == null)return null;
        var res = new StreamerError("", null, 0, 0, 0);
        res.errorCode = NativeLang.GetStringField("errorCode", fromObj);
        res.severity = slint.Cast(NativeLang.GetField("severity", fromObj));
        res.stream = StreamInfo.ConstructClone(NativeLang.GetField("stream", fromObj));
        res.scope = slint.Cast(NativeLang.GetField("scope", fromObj));
        res.index = slint.Cast(NativeLang.GetField("index", fromObj));
        return res;
      }

      defPubMeth(_s, "ToStr", __ToStr);
      defPubMeth(_s, "ToStr", __ToStr);
      function __ToStr() {
        return "errorCode=" + (_s.errorCode != null ? _s.errorCode : "null") +
          ", index=" + _s.index +
          ", severity=" + _s.severity +
          ", scope=" + _s.scope +
          ", stream=(" + _s.stream.ToStr() + ")";
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(StreamerError, "StreamerError");

    function Monitor() {
      var _s = this;

      if (_s != STAT_INIT)_s._sessionId = 0;

      if (_s != STAT_INIT)_s._externalBitrateReporting = false;

      if (_s != STAT_INIT)_s._streamer = null;

      if (_s != STAT_INIT)_s._streamerObject = null;

      if (_s != STAT_INIT)_s._eventQueue = null;
      if (_s != STAT_INIT)_s._contentInfo = null;
      if (_s != STAT_INIT)_s._nextHeartbeat = null;
      if (_s != STAT_INIT)_s._utils = null;

      if (_s != STAT_INIT)_s._playingState = ConvivaStreamerProxy.UNKNOWN;
      if (_s != STAT_INIT)_s._streamInfo = null;
      if (_s != STAT_INIT)_s._sessionFlags = 1;

      if (_s != STAT_INIT)_s._startTimeMs = 0;
      if (_s != STAT_INIT)_s._lastStateUpdateTimeMs = 0;

      if (_s != STAT_INIT)_s._pauseJoinTimeStartTimeMs = 0;
      if (_s != STAT_INIT)_s._pauseJointTimeTotalMs = 0;

      if (_s != STAT_INIT)_s._cumulativeTimePerState = null;

      if (_s != STAT_INIT)_s._joinTimeMs = -1;
      if (_s != STAT_INIT)_s._bufferingEventCount = 0;

      if (_s != STAT_INIT)_s._nominalPlayingBitsTotal = 0;

      if (_s != STAT_INIT)_s._encodedFps = -1;
      if (_s != STAT_INIT)_s._contentLengthSec = -1;

      if (_s != STAT_INIT)_s._playingFpsObservationCount = 0;

      if (_s != STAT_INIT)_s._playingFpsTotal = 0;

      function _constr(streamer, eventQueue, contentInfo, options, sessionId) {

        _s._eventQueue = eventQueue;
        _s._utils = Utils.getInstance();
        _s._contentInfo = contentInfo;
        _s._sessionId = sessionId;
        _s._nextHeartbeat = new DictionaryCS();
        _s._streamerObject = streamer;

        _s._startTimeMs = 0;
        _s._lastStateUpdateTimeMs = 0;

        _s._pauseJoinTimeStartTimeMs = 0;
        _s._pauseJointTimeTotalMs = 0;

        _s._cumulativeTimePerState = new DictionaryCS();
        var _for_array_1 = PlayerStates.stateToInt.KeyValuePairs;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var statePair = _for_array_1[_for_idx_2];

          _s._cumulativeTimePerState.SetValue(statePair.Value, 0);
        }

        _s._joinTimeMs = -1;
        _s._bufferingEventCount = 0;

        _s._nominalPlayingBitsTotal = 0;

        _s._encodedFps = -1;
        _s._contentLengthSec = -1;
        _s._playingFpsObservationCount = 0;
        _s._playingFpsTotal = 0;

        if (options != null) {
          var optionsDict = Lang.DictionaryFromRepr(options);
          if (optionsDict.ContainsKey(LivePass.OPTION_EXTERNAL_BITRATE_REPORTING)) {
            _s._externalBitrateReporting = optionsDict.GetValue(LivePass.OPTION_EXTERNAL_BITRATE_REPORTING);
          }
        }
      }

      defPubMeth(_s, "start", __start);
      function __start(nowMs) {
        _s._startTimeMs = nowMs;
        _s._lastStateUpdateTimeMs = nowMs;
        _s.buildInitialStreamInfo();

        _s.attachStreamer(_s._streamerObject);
        _s._streamerObject = null;
      }

      defPubMeth(_s, "attachStreamer", __attachStreamer);
      function __attachStreamer(streamerObject) {
        _s._utils.logSession("Monitor.attachStreamer()", _s._sessionId);
        if (_s._streamer != null) {
          _s._utils.logSession("Monitor.attachStreamer(): detach current streamer first", _s._sessionId);
          return;
        }
        if (streamerObject == null) {
          _s._utils.logSession("Monitor.attachStreamer(): received a null streamer", _s._sessionId);
          _s.SetPlayingState(ConvivaStreamerProxy.NOT_MONITORED);
          return;
        }

        _s._streamer = Monitor.wrapInConvivaStreamerProxy(streamerObject, _s._sessionId);

        _s._sessionFlags = _s._streamer.GetCapabilities();
        if (_s._externalBitrateReporting) {
          _s._sessionFlags |= ConvivaStreamerProxy.CAPABILITY_BITRATE_EXTERNAL;
        }

        _s.SetPlayingState(ConvivaStreamerProxy.UNKNOWN);

        _s._streamer.SetMonitoringNotifier(_s.notificationFromStreamerProxy);

        _s._lastStateUpdateTimeMs = _s._utils.epochTimeMs();
      }

      defPubMeth(_s, "detachStreamer", __detachStreamer);
      function __detachStreamer() {
        _s._utils.logSession("Monitor.detachStreamer()", _s._sessionId);
        _s.updateMetrics();
        if (_s._streamer != null) {
          _s._streamer.Cleanup();
          _s.SetPlayingState(ConvivaStreamerProxy.NOT_MONITORED);
          _s._streamer = null;
        }
      }

      defPubMeth(_s, "pauseJoinTime", __pauseJoinTime);
      function __pauseJoinTime() {
        _s._utils.logSession("Monitor.pauseJoinTime()", _s._sessionId);
        if (_s._pauseJoinTimeStartTimeMs == 0) {
          _s._pauseJoinTimeStartTimeMs = _s._utils.epochTimeMs();

          var newState = new DictionaryCS();
          var oldState = new DictionaryCS();
          newState.SetValue("pj", true);
          oldState.SetValue("pj", false);
          _s.declareStateChange(newState, oldState);
        }

      }

      defPubMeth(_s, "resumeJoinTime", __resumeJoinTime);
      function __resumeJoinTime(addEvent) {
        _s._utils.logSession("Monitor.resumeJoinTime()", _s._sessionId);
        if (_s._pauseJoinTimeStartTimeMs > 0) {
          _s._pauseJointTimeTotalMs += (_s._utils.epochTimeMs() - _s._pauseJoinTimeStartTimeMs);
          if (addEvent) {
            var newState = new DictionaryCS();
            var oldState = new DictionaryCS();
            newState.SetValue("pj", false);
            oldState.SetValue("pj", true);
            _s.declareStateChange(newState, oldState);
          }
        }
        _s._pauseJoinTimeStartTimeMs = 0;
      }

      defGet(_s, "streamer", __get_streamer);
      function __get_streamer() {return _s._streamer;}

      defPrivMeth(_s, "buildInitialStreamInfo", __buildInitialStreamInfo);
      function __buildInitialStreamInfo() {
        var initialBitrateKbps = -1;
        var initialResource = null;
        var initialCdnName = ConvivaContentInfo.CDN_NAME_OTHER;

        if (_s._contentInfo != null) {
          initialCdnName = _s._contentInfo.defaultReportingCdnName;

          if (_s._contentInfo.defaultReportingResource == null ||
            _s._contentInfo.defaultReportingResource == ConvivaContentInfo.NO_RESOURCE) {
            initialResource = initialCdnName;
          } else {
            initialResource = _s._contentInfo.defaultReportingResource;
          }
          initialBitrateKbps = _s._contentInfo.defaultReportingBitrateKbps;
        }

        _s._streamInfo = new StreamInfo(initialBitrateKbps, initialCdnName, initialResource, -1, -1, -1);
      }

      defPrivMeth(_s, "notificationFromStreamerProxy", __notificationFromStreamerProxy);
      function __notificationFromStreamerProxy(notificationName, arg) {
        _s._utils.runProtected(
          function() {
            switch (notificationName) {
            case "PlayingStateChange":
              var newState = (arg);
              _s.OnPlayingStateChange(newState);
              break;
            case "StreamInfoChange":
              var newInfo = (arg);
              _s.SetStream(newInfo);
              break;
            case "ErrorChange":
              var newError = (arg);
              _s.OnError(newError);
              break;
            case "MetadataChange":
              _s.OnMetadata(arg);
              break;
            case "Log":
              var logMsg = (arg);
              _s._utils.logSession(logMsg, _s._sessionId);
              break;
            }
          }, "notificationFromStreamerProxy");
      }

      defPrivMeth(_s, "OnPlayingStateChange", __OnPlayingStateChange);
      function __OnPlayingStateChange(newPlayingState) {
        _s.updateStateCumulativeTime();
        if (_s._playingState == newPlayingState) {
          return;
        }

        var hasJoined = _s._joinTimeMs >= 0;
        var newState = new DictionaryCS();
        var oldState = new DictionaryCS();
        newState.SetValue("ps", PlayerStates.stringToInt(newPlayingState));
        oldState.SetValue("ps", PlayerStates.stringToInt(_s._playingState));

        if (!hasJoined && newPlayingState == ConvivaStreamerProxy.PLAYING) {

          _s._cumulativeTimePerState.SetValue(PlayerStates.eBuffering, 0);

          if (_s._pauseJoinTimeStartTimeMs > 0) {
            _s.resumeJoinTime(false);
            newState.SetValue("pj", false);
            oldState.SetValue("pj", true);
          }

          _s._joinTimeMs = slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs - _s._pauseJointTimeTotalMs);

          if (_s._joinTimeMs < 0) {
            _s._joinTimeMs = 0;
          }
        }
        if (hasJoined && newPlayingState == ConvivaStreamerProxy.BUFFERING) {
          _s._bufferingEventCount++;
        }
        _s._utils.logSession("Monitor: change playing state to " + newPlayingState, _s._sessionId);
        _s._playingState = newPlayingState;
        _s.declareStateChange(newState, oldState);
      }

      defPrivMeth(_s, "SetPlayingState", __SetPlayingState);
      function __SetPlayingState(newState) {
        if (_s._playingState == newState) {
          return;
        }
        _s.OnPlayingStateChange(newState);
      }

      defPubMeth(_s, "SetStream", __SetStream);
      function __SetStream(targetStream) {
        if (targetStream == null) {
          return;
        }

        if (_s._streamer != null) {
          if (targetStream.bitrateKbps == _s._streamer.GetBitrateKbps()) {

            targetStream.bitrateKbps = -2;
          }
          if (targetStream.cdnName == _s._streamer.GetCdnName()) {

            targetStream.cdnName = null;
          }
          if (targetStream.resource == _s._streamer.GetResource()) {

            targetStream.resource = null;
          }
        }

        if (targetStream.resource == null && targetStream.cdnName != null && _s._streamInfo.cdnName == _s._streamInfo.resource) {
          targetStream.resource = targetStream.cdnName;
        }
        if (!_s._externalBitrateReporting && targetStream.bitrateKbps <= -2)targetStream.bitrateKbps = _s._streamInfo.bitrateKbps;
        if (targetStream.cdnName == null)targetStream.cdnName = _s._streamInfo.cdnName;
        if (targetStream.resource == null || targetStream.resource == ConvivaContentInfo.NO_RESOURCE)targetStream.resource = _s._streamInfo.resource;
        if (!_s._streamInfo.equals(targetStream)) {
          _s.updateStateCumulativeTime();
          _s.enqueueStreamChangeEvent(_s._streamInfo, targetStream);
          _s._streamInfo = targetStream;
        }
      }

      defPubMeth(_s, "setBitrate", __setBitrate);
      function __setBitrate(newBitrateKbps) {
        if (_s._externalBitrateReporting) {
          var newStream = StreamInfo.ConstructClone(_s._streamInfo);
          newStream.bitrateKbps = newBitrateKbps;
          _s.SetStream(newStream);
        } else {
          _s._utils.logSession("setBitrate() call ignored, enable external bitrate reporting first.", _s._sessionId);
        }
      }

      defPubMeth(_s, "OnError", __OnError);
      function __OnError(e) {

        _s.declareError(e.errorCode, (e.severity == StreamerError.SEVERITY_FATAL));
      }

      defPrivMeth(_s, "OnMetadata", __OnMetadata);
      function __OnMetadata(metadata) {

        var metadataDict = Lang.DictionaryFromRepr(metadata);
        if (metadataDict.ContainsKey(ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE)) {
          _s._encodedFps = slint.Cast(_s._utils.parseNumber(metadataDict.GetValue(ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE), -1));
          _s._utils.logSession("Monitor: received " + ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE + " metadata: " + _s._encodedFps, _s._sessionId);
        }
        if (metadataDict.ContainsKey(ConvivaStreamerProxy.METADATA_DURATION)) {
          _s._contentLengthSec = slint.Cast(_s._utils.parseNumber(metadataDict.GetValue(ConvivaStreamerProxy.METADATA_DURATION), -1));
          _s._utils.logSession("Monitor: received " + ConvivaStreamerProxy.METADATA_DURATION + " metadata: " + _s._contentLengthSec, _s._sessionId);
        }
      }

      defPubMeth(_s, "updateHeartbeat", __updateHeartbeat);
      function __updateHeartbeat(heartbeat) {
        _s.updateMetrics();

        var playingTime = _s._cumulativeTimePerState.GetValue(PlayerStates.ePlaying);
        var hasJoined = (_s._joinTimeMs >= 0);
        var bufferingTime = 0;
        if (hasJoined) {
          bufferingTime = _s._cumulativeTimePerState.GetValue(PlayerStates.eBuffering);

        }

        var averageBitrateKbps = -1;
        if (hasJoined) {
          averageBitrateKbps = slint.Cast((_s._nominalPlayingBitsTotal + 0.0) / playingTime);
        }
        var averageFps = -1;
        if (_s._playingFpsObservationCount > 0) {
          averageFps = slint.Cast((_s._playingFpsTotal + 0.0) / _s._playingFpsObservationCount);
        }
        NativeLang.setDictValue(heartbeat, "ps", PlayerStates.stringToInt(_s._playingState));
        NativeLang.setDictValue(heartbeat, "pj", (_s._pauseJoinTimeStartTimeMs > 0 ? true : false));
        NativeLang.setDictValue(heartbeat, "sf", _s._sessionFlags);
        NativeLang.setDictValue(heartbeat, "tpt", playingTime);
        NativeLang.setDictValue(heartbeat, "tbt", bufferingTime);
        NativeLang.setDictValue(heartbeat, "tpst", _s._cumulativeTimePerState.GetValue(PlayerStates.ePaused));
        NativeLang.setDictValue(heartbeat, "tst", _s._cumulativeTimePerState.GetValue(PlayerStates.eStopped));
        NativeLang.setDictValue(heartbeat, "jt", _s._joinTimeMs);
        NativeLang.setDictValue(heartbeat, "tbe", _s._bufferingEventCount);
        if (_s._contentLengthSec > 0) {
          NativeLang.setDictValue(heartbeat, "cl", _s._contentLengthSec);
        }
        if (_s._streamInfo.GetBitrateKbps() > 0) {
          NativeLang.setDictValue(heartbeat, "cbr", _s._streamInfo.GetBitrateKbps());
          NativeLang.setDictValue(heartbeat, "br", _s._streamInfo.GetBitrateKbps());
        }
        if (averageBitrateKbps > 0) {
          NativeLang.setDictValue(heartbeat, "abr", averageBitrateKbps);
        }
        NativeLang.setDictValue(heartbeat, "rs", _s._streamInfo.GetResource());
        NativeLang.setDictValue(heartbeat, "cdn", _s._streamInfo.GetCdnName());

        if (_s._encodedFps >= 0) {
          NativeLang.setDictValue(heartbeat, "efps", _s._encodedFps);
        }
        if (averageFps >= 0) {
          NativeLang.setDictValue(heartbeat, "afps", averageFps);
        }
      }

      defPubMeth(_s, "cleanup", __cleanup);
      function __cleanup() {
        if (_s._streamer != null) {
          _s._streamer.Cleanup();
        }
        _s._streamer = null;
        _s._streamerObject = null;
        _s._eventQueue = null;
        _s._contentInfo = null;
        _s._nextHeartbeat = null;
        _s._streamInfo = null;
        _s._cumulativeTimePerState = null;
        _s._utils = null;
      }

      defPrivMeth(_s, "updateMetrics", __updateMetrics);
      function __updateMetrics() {
        if (_s._streamer == null)return;
        if (_s._playingState == ConvivaStreamerProxy.PLAYING) {
          var fps = _s._streamer.GetRenderedFrameRate();
          if (fps >= 0) {
            _s._playingFpsTotal += fps;
            _s._playingFpsObservationCount++;
          }
        }
        _s.updateStateCumulativeTime();
      }

      defPrivMeth(_s, "enqueueEvent", __enqueueEvent);
      function __enqueueEvent(type, eventData) {
        _s._eventQueue.enqueueEvent(type, eventData, slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs));
      }

      defPrivMeth(_s, "enqueueStreamChangeEvent", __enqueueStreamChangeEvent);
      function __enqueueStreamChangeEvent(oldStream, newStream) {
        var newState = new DictionaryCS();
        var oldState = new DictionaryCS();
        if (oldStream.GetBitrateKbps() != newStream.GetBitrateKbps() && newStream.GetBitrateKbps() > 0) {
          oldState.SetValue("br", oldStream.GetBitrateKbps());
          newState.SetValue("br", newStream.GetBitrateKbps());
          _s._utils.logSession("Monitor: change bitrate from " + oldState.GetValue("br") + " to " + newState.GetValue("br"), _s._sessionId);
        }
        if (oldStream.GetCdnName() != newStream.GetCdnName()) {
          oldState.SetValue("cdn", oldStream.GetCdnName());
          newState.SetValue("cdn", newStream.GetCdnName());
          _s._utils.logSession("Monitor: change cdnName from " + oldState.GetValue("cdn") + " to " + newState.GetValue("cdn"), _s._sessionId);
        }
        if (oldStream.GetResource() != newStream.GetResource()) {
          oldState.SetValue("rs", oldStream.GetResource());
          newState.SetValue("rs", newStream.GetResource());
          _s._utils.logSession("Monitor: change resource from " + oldState.GetValue("rs") + " to " + newState.GetValue("rs"), _s._sessionId);
        }
        _s.declareStateChange(newState, oldState);
      }

      defPrivMeth(_s, "updateStateCumulativeTime", __updateStateCumulativeTime);
      function __updateStateCumulativeTime() {
        var now = _s._utils.epochTimeMs();
        var playingStateInt = PlayerStates.stringToInt(_s._playingState);
        if (_s._playingState != ConvivaStreamerProxy.UNKNOWN) {
          var delta = slint.Cast(now - _s._lastStateUpdateTimeMs);
          _s._cumulativeTimePerState.SetValue(playingStateInt, _s._cumulativeTimePerState.GetValue(playingStateInt) + delta);

          var bitrateKbps = _s._streamInfo.GetBitrateKbps();
          if (_s._playingState == ConvivaStreamerProxy.PLAYING && bitrateKbps != -1) {
            _s._nominalPlayingBitsTotal += (delta * bitrateKbps);
          }
        }
        _s._lastStateUpdateTimeMs = now;
      }

      defPrivMeth(_s, "declareError", __declareError);
      function __declareError(errorMsg, isFatal) {
        if (_s._joinTimeMs < 0 && isFatal) {

          _s._joinTimeMs = -2;
        }
        var data = new DictionaryCS();
        data.SetValue("ft", isFatal);
        data.SetValue("err", errorMsg);
        _s.enqueueEvent("CwsErrorEvent", data);
      }

      defPrivMeth(_s, "declareStateChange", __declareStateChange);
      function __declareStateChange(newState, oldState) {

        var newStateNative = Lang.StringDictionaryToRepr(newState);
        var oldStateNative = Lang.StringDictionaryToRepr(oldState);
        var data = new DictionaryCS();
        data.SetValue("new", newStateNative);
        if (oldState != null) {
          data.SetValue("old", oldStateNative);
        }
        _s.enqueueEvent("CwsStateChangeEvent", data);
      }

      defStatMeth(_s, Monitor, "wrapInConvivaStreamerProxy", __wrapInConvivaStreamerProxy);
      function __wrapInConvivaStreamerProxy(streamer, sessionId) {

        var realSamsungStreamerProxy = null;
        try {
          if (streamer.getAttribute && streamer.getAttribute("classid").indexOf("clsid:SAMSUNG-INFOLINK") >= 0) {
            realSamsungStreamerProxy = new SamsungStreamerProxy(streamer);
            realSamsungStreamerProxy.startMonitoring();
          }
        } catch (e) {}
        if (realSamsungStreamerProxy) {
          return realSamsungStreamerProxy;
        } else if (streamer.hasOwnProperty('getStreamerType') && streamer.getStreamerType() == 'Samsung') {
          return SamsungStreamerProxy.createSamsungStreamerProxy(streamer);
        } else if (streamer.setQosData !== undefined && streamer.licenseResponse !== undefined) {
          return new PlayStationTouchFactorStreamerProxy();
        } else if (streamer.codecs !== undefined && streamer.maxBufferLength !== undefined) {
          return new PlayStationLibjscriptStreamerProxy();
        } else if (streamer.textTrackDisplay !== undefined && streamer.mediaLoader !== undefined) {
          return new ConvivaVideojsStreamerProxy(streamer);
        } else if (streamer.networkState !== undefined && streamer.readyState !== undefined) {
          return new Html5ConvivaStreamerProxy(streamer);
        } else if (streamer.currentPTS !== undefined && streamer.availableAudioStreams !== undefined) {
          return new PlayStationTrilithiumStreamerProxy(streamer);
        } else if (streamer.mediaElementAdapter !== undefined) {
          return new Xbox1ConvivaStreamerProxy(streamer);
        } else if (streamer.MbId !== undefined && streamer.blockedParams !== undefined) {
          return new ConvivaOoyalaStreamerProxy(streamer);
        } else if (streamer.mb !== undefined && (streamer.mb.MbId !== undefined && streamer.mb.blockedParams !== undefined)) {
          return new ConvivaOoyalaStreamerProxy(streamer.mb);

        } else {
          return streamer;
        }
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Monitor, "Monitor");

    function EventQueue() {
      var _s = this;

      if (_s != STAT_INIT)_s._events = null;
      if (_s != STAT_INIT)_s._nextSeqNumber = 0;

      function _constr() {
        _s._events = NativeLang.makeList();
      }

      defPubMeth(_s, "enqueueEvent", __enqueueEvent);
      function __enqueueEvent(type, data, timeSinceSessionStart) {
        data.SetValue("t", type);
        data.SetValue("st", timeSinceSessionStart);
        data.SetValue("seq", _s._nextSeqNumber);
        _s._nextSeqNumber++;
        NativeLang.addListValue(_s._events, Lang.StringDictionaryToRepr(data));
      }

      defPubMeth(_s, "flushEvents", __flushEvents);
      function __flushEvents() {
        var currentEvents = _s._events;
        _s._events = NativeLang.makeList();
        return currentEvents;
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(EventQueue, "EventQueue");

    function Session() {
      var _s = this;

      if (_s != STAT_INIT)_s._contentInfo = null;

      if (_s != STAT_INIT)_s._nativeReprTags = null;
      if (_s != STAT_INIT)_s._utils = null;
      if (_s != STAT_INIT)_s._settings = null;

      if (_s != STAT_INIT)_s._monitor = null;

      if (_s != STAT_INIT)_s._eventQueue = null;

      if (_s != STAT_INIT)_s._clientIdWaiter = null;
      if (_s != STAT_INIT)_s._heartbeatTimer = null;
      if (_s != STAT_INIT)_s._encodeHeartbeatTimer = null;

      if (_s == STAT_INIT)Session._sendLogs = false;

      if (_s != STAT_INIT)_s._sessionId = 0;

      if (_s != STAT_INIT)_s._startTimeMs = 0;
      if (_s != STAT_INIT)_s._heartbeatSequenceNumber = 0;

      function _constr(streamer, contentInfo, options, global) {
        _s._contentInfo = contentInfo;
        _s._utils = Utils.getInstance();
        _s._settings = _s._utils.getSettings();
        _s._sessionId = _s._utils.randInt();

        var langTags = Lang.DictionaryFromRepr(_s._contentInfo.tags);
        var keysToCorrect = new ListCS();
        var _for_array_1 = langTags.Keys;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var tkey = _for_array_1[_for_idx_2];

          if (langTags.GetValue(tkey) == null) {
            keysToCorrect.Add(tkey);
          }
        }
        var _for_array_3 = keysToCorrect.Values;
        for (var _for_idx_4 = 0; _for_idx_4 < _for_array_3.length; _for_idx_4++) {
          var tkey1 = _for_array_3[_for_idx_4];

          _s.log("WARNING: correcting null value for tag " + tkey1);
          NativeLang.setDictValue(_s._contentInfo.tags, tkey1, "null");
        }
        _s._nativeReprTags = Lang.StringDictionaryToRepr(_s._contentInfo.tags);

        _s._eventQueue = new EventQueue();

        if (!global) {
          _s._monitor = new Monitor(streamer, _s._eventQueue, _s._contentInfo, options, _s._sessionId);
        }
      }

      defPubMeth(_s, "start", __start);
      function __start() {
        if (_s._monitor != null) {
          _s.log("Session.start(): assetName=" + _s._contentInfo.assetName);
        }
        _s._startTimeMs = _s._utils.epochTimeMs();
        if (_s._monitor != null) {
          _s._monitor.start(_s._startTimeMs);
        }
        _s._heartbeatSequenceNumber = 0;

        if (_s._utils.clientIdLoadingDone == null) {

          _s.sendHeartbeat();
        } else {

          _s._clientIdWaiter = _s.onClientIdLoaded;
          _s._utils.clientIdLoadingDone.AddHandler(_s._clientIdWaiter);
        }
        _s._heartbeatTimer = null;
        _s.resetHeartbeatTimer();
      }

      defPubMeth(_s, "cleanup", __cleanup);
      function __cleanup() {
        _s.log("Session.cleanup()" + _s.sessionTypeTag());
        if (_s._heartbeatTimer != null) {
          _s._heartbeatTimer.cleanup();
        }
        _s._heartbeatTimer = null;
        _s._utils.logSession("Schedule the last hb before session cleanup" + _s.sessionTypeTag(), _s._sessionId);

        if (_s._monitor != null) {
          _s.enqueueSessionEndEvent();
        }

        var urgentHb = _s.makeHeartbeat();
        if (urgentHb != null) {
          _s.encodeAndPostHeartbeat(urgentHb,
            function() {

              _s.cleanupAll();
            });
        } else {

          _s.cleanupAll();
        }
      }

      defPrivMeth(_s, "enqueueSessionEndEvent", __enqueueSessionEndEvent);
      function __enqueueSessionEndEvent() {
        var eventData = new DictionaryCS();
        _s._eventQueue.enqueueEvent("CwsSessionEndEvent", eventData, slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs));
      }

      defPubMeth(_s, "pauseJoinTime", __pauseJoinTime);
      function __pauseJoinTime() {
        if (_s._monitor != null) {
          _s._monitor.pauseJoinTime();
        }
      }

      defPubMeth(_s, "resumeJoinTime", __resumeJoinTime);
      function __resumeJoinTime() {
        if (_s._monitor != null) {
          _s._monitor.resumeJoinTime(true);
        }
      }

      defPubMeth(_s, "adStart", __adStart);
      function __adStart() {

        _s.pauseJoinTime();
      }

      defPubMeth(_s, "adEnd", __adEnd);
      function __adEnd() {

        _s.resumeJoinTime();
      }

      defPubMeth(_s, "detachStreamer", __detachStreamer);
      function __detachStreamer() {
        _s._monitor.detachStreamer();
      }

      defPubMeth(_s, "attachStreamer", __attachStreamer);
      function __attachStreamer(streamer) {
        _s._monitor.attachStreamer(streamer);
      }

      defPrivMeth(_s, "resetHeartbeatTimer", __resetHeartbeatTimer);
      function __resetHeartbeatTimer() {
        if (_s._heartbeatTimer != null) {
          _s._heartbeatTimer.cleanup();
        }
        _s._heartbeatTimer = _s._utils.createTimer(_s.sendHeartbeat, _s._settings.heartbeatIntervalMs, "sendHeartbeat");
      }

      defPrivMeth(_s, "cleanupAll", __cleanupAll);
      function __cleanupAll() {
        if (_s._clientIdWaiter != null) {
          _s._utils.clientIdLoadingDone.DeleteHandler(_s._clientIdWaiter);
          _s._clientIdWaiter = null;
        }
        if (_s._monitor != null) {
          _s._monitor.cleanup();
          _s._monitor = null;
        }
        if (_s._encodeHeartbeatTimer != null) {
          _s._encodeHeartbeatTimer.cleanup();
          _s._encodeHeartbeatTimer = null;
        }
        if (_s._eventQueue != null) {
          _s._eventQueue.flushEvents();
          _s._eventQueue = null;
        }
        _s._contentInfo = null;
        _s._nativeReprTags = null;
        _s._settings = null;
        _s._utils = null;
      }

      defPrivMeth(_s, "log", __log);
      function __log(message) {
        _s._utils.logSession(message, _s._sessionId);
      }

      defPubMeth(_s, "reportError", __reportError);
      function __reportError(err) {
        _s.log("Session.reportError()");
        if (_s._monitor != null) {

          _s._monitor.OnError(err);
        }
      }

      defPubMeth(_s, "setBitrate", __setBitrate);
      function __setBitrate(bitrateKbps) {
        _s.log("Session.setBitrate(): bitrateKbps=" + bitrateKbps);
        if (_s._monitor != null) {
          _s._monitor.setBitrate(bitrateKbps);
        }
      }

      defPubMeth(_s, "setCurrentStreamMetadata", __setCurrentStreamMetadata);
      function __setCurrentStreamMetadata(metadata) {
        _s.log("Session.setCurrentStreamMetadata()");
        if (_s._monitor != null && _s._monitor.streamer != null) {

          _s._monitor.streamer.SetMetadata(metadata);
        }
      }

      defPubMeth(_s, "setCdnNameOrResource", __setCdnNameOrResource);
      function __setCdnNameOrResource(resource) {
        _s.log("Session.setCdnNameOrResource()");
        if (_s._monitor != null) {
          var newStream = new StreamInfo(-2, resource, resource, -1, -1, -1);
          _s._monitor.SetStream(newStream);
        }
      }

      defPubMeth(_s, "sendCustomEvent", __sendCustomEvent);
      function __sendCustomEvent(name, eventAttrs) {
        _s.log("Session.sendEvent(): eventName=" + name + _s.sessionTypeTag());
        var eventData = new DictionaryCS();
        eventData.SetValue("name", name);

        var eventAttrsNative = Lang.StringDictionaryToRepr(eventAttrs);

        eventData.SetValue("attr", eventAttrsNative);
        _s._eventQueue.enqueueEvent("CwsCustomEvent", eventData, slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs));
      }

      defPrivMeth(_s, "sendHeartbeat", __sendHeartbeat);
      function __sendHeartbeat() {
        var heartbeat = null;
        if (_s._encodeHeartbeatTimer != null) {
          _s._encodeHeartbeatTimer.cleanup();
        }
        _s._encodeHeartbeatTimer = _s._utils.scheduleAction(
          function() {
            heartbeat = _s.makeHeartbeat();
            if (heartbeat != null) {
              _s._encodeHeartbeatTimer = _s._utils.scheduleAction(
                function() {
                  _s.encodeAndPostHeartbeat(heartbeat, null);
                  _s._encodeHeartbeatTimer = null;
                }, 1, "encodeAndSendHeartbeat");
            }
          }, 1, "makeHeartbeat");
      }

      defPrivMeth(_s, "makeHeartbeat", __makeHeartbeat);
      function __makeHeartbeat() {
        var heartbeat = {};
        NativeLang.setDictValue(heartbeat, "t", "CwsSessionHb");
        NativeLang.setDictValue(heartbeat, "cid", _s._settings.customerKey);
        NativeLang.setDictValue(heartbeat, "clid", _s._utils.clientId);
        NativeLang.setDictValue(heartbeat, "sid", _s._sessionId);
        NativeLang.setDictValue(heartbeat, "seq", _s._heartbeatSequenceNumber);
        NativeLang.setDictValue(heartbeat, "pver", _s._settings.protocolVersion);
        NativeLang.setDictValue(heartbeat, "clv", _s._settings.clientVersion);
        NativeLang.setDictValue(heartbeat, "iid", _s._settings.clientInstanceId);
        var platformMetadata = Lang.StringDictionaryToRepr(_s._settings.platformApi.getPlatformMetadata());
        if (platformMetadata != null) {
          NativeLang.setDictValue(heartbeat, "pm", platformMetadata);
        }
        if (_s._utils.device != null) {
          NativeLang.setDictValue(heartbeat, "dv", _s._utils.device);
        }
        if (_s._utils.deviceVersion != null) {
          NativeLang.setDictValue(heartbeat, "dvv", _s._utils.deviceVersion);
        }
        if (_s._utils.deviceType != null) {
          NativeLang.setDictValue(heartbeat, "dvt", _s._utils.deviceType);
        } else if (_s._contentInfo.deviceType != null) {
          NativeLang.setDictValue(heartbeat, "dvt", _s._contentInfo.deviceType);
        }
        if (_s._utils.os != null) {
          NativeLang.setDictValue(heartbeat, "os", _s._utils.os);
        }
        if (_s._utils.osVersion != null) {
          NativeLang.setDictValue(heartbeat, "osv", _s._utils.osVersion);
        }
        if (_s._utils.platform != null) {
          NativeLang.setDictValue(heartbeat, "pt", _s._utils.platform);
        }
        if (_s._contentInfo.viewerId != null) {
          NativeLang.setDictValue(heartbeat, "vid", _s._contentInfo.viewerId);
        }
        if (_s._contentInfo.streamUrl != null) {
          NativeLang.setDictValue(heartbeat, "url", _s._contentInfo.streamUrl);
        }
        if (_s._contentInfo.playerName != null) {
          NativeLang.setDictValue(heartbeat, "pn", _s._contentInfo.playerName);
        }
        NativeLang.setDictValue(heartbeat, "tags", _s._nativeReprTags);

        if (_s._monitor != null) {
          NativeLang.setDictValue(heartbeat, "an", _s._contentInfo.assetName);
          NativeLang.setDictValue(heartbeat, "lv", _s._contentInfo.isLive);
          _s._monitor.updateHeartbeat(heartbeat);
        } else {

          NativeLang.setDictValue(heartbeat, "sf", 0);
        }
        var currentEvents = _s._eventQueue.flushEvents();
        NativeLang.setDictValue(heartbeat, "evs", currentEvents);

        if (_s._monitor == null && NativeLang.listCount(currentEvents) == 0) {
          return null;
        }

        if (Session._sendLogs) {
          NativeLang.setDictValue(heartbeat, "lg", Lang.ListToRepr(_s._utils.getLogs(_s._sessionId)));
        }

        var currentTime = _s._utils.epochTimeMs();
        NativeLang.setDictValue(heartbeat, "st", slint.Cast(currentTime - _s._startTimeMs));
        NativeLang.setDictValue(heartbeat, "cts", (currentTime / 1000.0));
        _s._heartbeatSequenceNumber++;
        return heartbeat;
      }

      defPrivMeth(_s, "sessionTypeTag", __sessionTypeTag);
      function __sessionTypeTag() {
        if (_s._monitor == null)
          return " (global session)";
        return "";
      }

      defPrivMeth(_s, "encodeAndPostHeartbeat", __encodeAndPostHeartbeat);
      function __encodeAndPostHeartbeat(heartbeat, afterPostCbk) {
        var jsonHeartbeat = _s._utils.jsonEncode(heartbeat);
        var url = _s._settings.gatewayUrl + _s._settings.gatewayPath;
        var contentType = "application/json";
        _s.log("Send HB[" + (_s._heartbeatSequenceNumber - 1) + "]" + _s.sessionTypeTag());
        _s._utils.httpRequest(true, url, jsonHeartbeat, contentType, _s.onHeartbeatResponse);
        if (afterPostCbk != null) {
          afterPostCbk();
        }
      }

      defPrivMeth(_s, "onHeartbeatResponse", __onHeartbeatResponse);
      function __onHeartbeatResponse(isSuccess, jsonResponse) {
        if (_s._utils != null) {
          _s._utils.runProtected(
            function() {
              if (isSuccess) {
                var decodedResponse = _s._utils.jsonDecode(jsonResponse);
                if (decodedResponse != null) {
                  if (decodedResponse.ContainsKey("clid")) {
                    _s._utils.setClientIdFromServer(Lang.ToString((decodedResponse.GetValue("clid"))), false);
                  }
                  var newSendLogs = (decodedResponse.ContainsKey("slg") && Boolean(decodedResponse.GetValue("slg")));
                  if (newSendLogs != Session._sendLogs) {
                    _s.log("Turning " + (newSendLogs ? "on" : "off") + " sending of logs");
                    Session._sendLogs = newSendLogs;
                  }
                  if (decodedResponse.ContainsKey("hbi")) {
                    var heartbeatIntervalSec = slint.Cast(decodedResponse.GetValue("hbi"));
                    if (1000 * heartbeatIntervalSec != _s._settings.heartbeatIntervalMs) {
                      _s.log("Received hbInterval from server " + heartbeatIntervalSec);
                      _s._settings.heartbeatIntervalMs = 1000 * heartbeatIntervalSec;
                      if (_s._heartbeatTimer != null) {
                        _s.resetHeartbeatTimer();
                      }
                    }
                  }
                  if (decodedResponse.ContainsKey("gw")) {
                    var gatewayUrl = (decodedResponse.GetValue("gw"));
                    if (gatewayUrl != _s._settings.gatewayUrl) {
                      _s.log("Received gatewayUrl from server " + gatewayUrl);
                      _s._settings.gatewayUrl = gatewayUrl;
                    }
                  }
                } else {
                  _s.log("Decoded heartbeat response is null.");
                }
              } else {
                _s.log("Received no response (or a bad response) to heartbeat POST request.");
              }
            }, "onHeartbeatResponse");
        }
      }

      defPrivMeth(_s, "onClientIdLoaded", __onClientIdLoaded);
      function __onClientIdLoaded() {

        _s._utils.clientIdLoadingDone.DeleteHandler(_s._clientIdWaiter);
        _s._clientIdWaiter = null;
        _s.sendHeartbeat();
      }

      defPubMeth(_s, "initialResourceBitrateSelection", __initialResourceBitrateSelection);
      function __initialResourceBitrateSelection() {
        var proxy = _s._monitor.streamer;
        throw new Error("Not implemented");
      }

      defPubMeth(_s, "midStreamResourceBitrateSelection", __midStreamResourceBitrateSelection);
      function __midStreamResourceBitrateSelection(switchTriggers) {

        throw new Error("Not implemented");
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Session, "Session");

    function SessionFactory() {
      var _s = this;
      if (_s != STAT_INIT)_s.lastSessionId = 0;

      if (_s != STAT_INIT)_s._utils = null;
      if (_s != STAT_INIT)_s._settings = null;
      if (_s != STAT_INIT)_s._nextSessionId = 0;
      if (_s != STAT_INIT)_s._sessionsById = null;

      function _constr() {
        _s._utils = Utils.getInstance();
        _s._settings = _s._utils.getSettings();
        _s._nextSessionId = 0;
        _s._sessionsById = new DictionaryCS();
        _s.lastSessionId = 0;
      }

      defPubMeth(_s, "cleanup", __cleanup);
      function __cleanup() {
        _s._utils = null;
        _s._settings = null;
        if (_s._sessionsById != null) {
          var _for_array_1 = _s._sessionsById.KeyValuePairs;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var sessionPair = _for_array_1[_for_idx_2];

            var sess = sessionPair.Value;
            sess.cleanup();
          }
        }
        _s._sessionsById = null;
        _s._nextSessionId = 0;
      }

      defPubMeth(_s, "newSessionId", __newSessionId);
      function __newSessionId() {
        var sessionId = _s._nextSessionId;
        _s._nextSessionId++;
        return sessionId;
      }

      defPubMeth(_s, "makeSession", __makeSession);
      function __makeSession(streamer, contentInfo, options, sessionId, global) {
        var session = new Session(streamer, contentInfo, options, global);
        _s.addSession(sessionId, session);
        _s.lastSessionId = sessionId;
        session.start();
        return session;
      }

      defPubMeth(_s, "getSession", __getSession);
      function __getSession(sessionId) {
        if (_s._sessionsById.ContainsKey(sessionId)) {
          return _s._sessionsById.GetValue(sessionId);
        }
        if (sessionId == -1) {
          _s._utils.err("LivePass: invalid sessionId. LivePass not properly initialized yet?");
        } else {
          _s._utils.err("LivePass: invalid sessionId. Did you cleanup that session previously?");
        }
        return null;
      }

      defPubMeth(_s, "addSession", __addSession);
      function __addSession(sessionId, session) {
        _s._sessionsById.SetValue(sessionId, session);
      }

      defPubMeth(_s, "removeSession", __removeSession);
      function __removeSession(sessionId) {
        _s._sessionsById.Remove(sessionId);
      }

      defPubMeth(_s, "cleanupSession", __cleanupSession);
      function __cleanupSession(sessionId) {
        var session = _s.getSession(sessionId);
        if (session != null) {
          _s.removeSession(sessionId);
          session.cleanup();
        }
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(SessionFactory, "SessionFactory");

    function ArrayCS() {
      var _s = this;

      if (_s != STAT_INIT)_s.arr = undefined;
      function _constr(size) {
        if (size == undefined)size = 0;
        _s.arr = new Array(size);
      }

      defStatMeth(_s, ArrayCS, "Create", __Create);
      function __Create() {
        var res = new ArrayCS();
        var l = [];

        for (var i = 0; i < arguments.length; i++) {
          l.push(arguments[i]);
        }
        res.arr = l;
        return res;
      }

      defStatMeth(_s, ArrayCS, "FromRepr", __FromRepr);
      function __FromRepr(a) {
        if (a == null)return null;
        var res = new ArrayCS();
        res.arr = a;
        return res;
      }

      defPubMeth(_s, "ToRepr", __ToRepr);
      function __ToRepr() {
        return _s.arr;
      }

      defGet(_s, "Length", __Length);
      function __Length() {
        return _s.arr.length;
      }

      defPubMeth(_s, "GetValue", __GetValue);
      function __GetValue(idx) {
        if (idx >= _s.arr.length) {
          throw new Error("Index out of bounds: " + idx + " (length " + _s.arr.length + ")");
        } else if (idx < 0) {
          throw new Error("Index out of bounds: " + idx);
        }
        return _s.arr[idx];
      }

      defPubMeth(_s, "SetValue", __SetValue);
      function __SetValue(idx, v) {
        if (idx >= _s.arr.length) {
          throw new Error("Index out of bounds: " + idx + " (length " + _s.arr.length + ")");
        } else if (idx < 0) {
          throw new Error("Index out of bounds: " + idx);
        }
        _s.arr[idx] = v;
      }

      defGet(_s, "Values", __Values);
      function __Values() {
        return _s.arr;
      }

      if (_s != STAT_INIT)_constr.apply(this, arguments);

    }

    statInit(ArrayCS, "ArrayCS");

    function Cleanable() {
      var _s = this;

      if (_s != STAT_INIT)_s._cleanupAction = null;

      if (_s == STAT_INIT)Cleanable._nextCleanupId = 0;
      if (_s != STAT_INIT)_s._id = 0;
      if (_s != STAT_INIT)_s._cleanupCollection = null;

      function _constr(cleanupCollection) {
        _s._cleanupCollection = cleanupCollection;
        _s._id = Cleanable._nextCleanupId;
        Cleanable._nextCleanupId++;
        _s._cleanupCollection.SetValue(_s._id, _s);
      }

      defPubMeth(_s, "setCleanupAction", __setCleanupAction);
      function __setCleanupAction(cleanupAction) {
        _s._cleanupAction = cleanupAction;
      }

      defPubMeth(_s, "cleanup", __cleanup);
      function __cleanup() {
        if (_s._cleanupAction != null) {
          _s._cleanupAction();
        }
        _s._cleanupCollection.Remove(_s._id);
      }

      defStatMeth(_s, Cleanable, "cleanupCollection", __cleanupCollection);
      function __cleanupCollection(collection) {

        Utils.getInstance().log("cleanupCollection");
        var toClean = new ListCS();
        var _for_array_1 = collection.Values;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var o = _for_array_1[_for_idx_2];

          toClean.Add(o);
        }
        var _for_array_3 = toClean.Values;
        for (var _for_idx_4 = 0; _for_idx_4 < _for_array_3.length; _for_idx_4++) {
          var o = _for_array_3[_for_idx_4];

          o.cleanup();
        }
        collection.Clear();
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Cleanable, "Cleanable");

    function DictionaryCS() {
      var _s = this;

      if (_s != STAT_INIT)_s.obj = undefined;
      function _constr(size) {
        _s.obj = {};
      }

      defStatMeth(_s, DictionaryCS, "FromRepr", __FromRepr);
      function __FromRepr(o) {
        if (o == null)return null;
        if (o instanceof DictionaryCS) {
          return o;
        }
        if (o.hasOwnProperty("ToObject")) {
          o = o.ToObject();
        }
        var res = new DictionaryCS();

        slForEachProp(o, function(k) {
          res.obj[k] = o[k];
        });
        return res;
      }

      defPubMeth(_s, "ToObject", __ToObject);
      function __ToObject() {
        return _s.obj;
      }

      defStatMeth(_s, DictionaryCS, "Create", __Create);
      function __Create() {
        var res = new DictionaryCS();
        for (var i = 0; i + 1 < arguments.length; i += 2) {
          res.obj[arguments[i]] = arguments[i + 1];
        }
        return res;
      };

      defPubMeth(_s, "CopyToObject", __CopyToObject);
      function __CopyToObject(obj) {
        slForEachProp(_s.obj, function(k) {
          obj[k] = _s.obj[k];
        });
      }

      defPubMeth(_s, "GetValue", __GetValue);
      function __GetValue(key) {
        return _s.obj[key];
      }

      defPubMeth(_s, "SetValue", __SetValue);
      function __SetValue(key, v) {
        _s.obj[key] = v;
      }

      defPubMeth(_s, "Clear", __Clear);
      function __Clear() {
        slForEachProp(_s.obj, function(p) {
          delete _s.obj[p];
        });
      }

      defPubMeth(_s, "ContainsKey", __ContainsKey);
      function __ContainsKey(key) {
        return (_s.obj[key] !== undefined);
      }

      defPubMeth(_s, "Contains", __Contains);
      function __Contains(key) {
        return ContainsKey(key);
      }

      defGet(_s, "Keys", __Keys);
      function __Keys() {
        var res = new Array();
        slForEachProp(_s.obj, function(p) {
          res.push(p);
        });
        return res;
      }

      defGet(_s, "Values", __Values);
      function __Values() {
        var res = new Array();
        slForEachProp(_s.obj, function(p) {
          res.push(_s.obj[p]);
        });
        return res;
      }

      defGet(_s, "KeyValuePairs", __KeyValuePairs);
      function __KeyValuePairs() {
        var res = new Array();
        slForEachProp(_s.obj, function(p) {
          res.push(new KeyValuePairCS(p, _s.obj[p]));
        });
        return res;
      }

      defGet(_s, "Count", __Count);
      function __Count() {
        var res = 0;
        slForEachProp(_s.obj, function(p) {
          res++;
        });
        return res;
      }

      defPubMeth(_s, "Add", __SetValue);

      defPubMeth(_s, "Remove", __Remove);
      function __Remove(key) {
        if (_s.ContainsKey(key)) {
          delete _s.obj[key];
          return true;
        } else
          return false;
      }

      if (_s != STAT_INIT)_constr.apply(this, arguments);

    }

    statInit(DictionaryCS, "DictionaryCS");

    function Eventer() {
      var _s = this;
      if (_s != STAT_INIT)_s._handlers = undefined;

      function _constr() {
        _s._handlers = new ListCS();
      }

      defPubMeth(_s, "Cleanup", __Cleanup);
      function __Cleanup() {
        _s._handlers = new ListCS();
      }

      defPubMeth(_s, "AddHandler", __AddHandler);
      function __AddHandler(handler) {
        _s._handlers.Add(handler);
      }

      defPubMeth(_s, "DeleteHandler", __DeleteHandler);
      function __DeleteHandler(handler) {
        _s._handlers.Remove(handler);
      }

      defPubMeth(_s, "DispatchEvent", __DispatchEvent);
      function __DispatchEvent() {
        var _for_array_1 = _s._handlers.Values;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var h = _for_array_1[_for_idx_2];

          h();
        }
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Eventer, "Eventer");

    function KeyValuePairCS() {
      var _s = this;

      if (_s != STAT_INIT)_s.key = undefined;
      if (_s != STAT_INIT)_s.val = undefined;
      function _constr(key, val) {
        _s.key = key;
        _s.val = val;
      }

      defGet(_s, "Key", __Key);
      function __Key() {
        return _s.key;
      }

      defGet(_s, "Value", __Value);
      function __Value() {
        return _s.val;
      }

      if (_s != STAT_INIT)_constr.apply(this, arguments);

    }

    statInit(KeyValuePairCS, "KeyValuePairCS");

    function Lang() {
      Lang.StringIndexOf = function(s1, s2) {
        return s1.indexOf(s2);
      };

      Lang.StringStartsWith = function(s1, s2) {
        return (0 == s1.indexOf(s2));
      };

      Lang.StringContains = function(s1, s2) {
        return (0 <= s1.indexOf(s2));
      };

      Lang.StringGetChar = function(s, where) {
        if (where < 0 || where >= s.length) {
          throw new Error("ArgumentOutOfRange");
        }
        return s[where];
      };

      Lang.StringSubstring = function(str, startIndex, count) {
        if (startIndex < 0 || startIndex >= str.length || (count != undefined && (count < 0 || startIndex + count > str.length))) {
          throw new Error("ArgumentOutOfRange");
        }
        if (count == undefined) {
          return str.substr(startIndex);
        } else {
          return str.substr(startIndex, count);
        }
      };

      Lang.StringSplit = function(s1, sep) {
        var res = s1.split(sep);
        return ArrayCS.FromRepr(res);
      };

      Lang.StringEnumerator = function(s) {
        return s.split("");
      };

      Lang.StringCompareTo = function(str1, str2) {
        if (str1 == null) {
          if (str2 == null)return 0;
          return -1;
        }
        if (str2 == null)return 1;

        if (str1 < str2)return -1;
        if (str1 == str2)return 0;
        return 1;
      };

      Lang.StringTrim = function(s) {
        return s.replace(/^\s*/, "").replace(/\s*$/, "");
      };

      Lang.StringReplace = function(str1, strsearch, strreplace) {
        if (strsearch == null || strsearch == "" || strreplace == null) {
          throw new Error("InvalidArgument");
        }

        var searchIdx = str1.indexOf(strsearch);
        if (searchIdx >= 0) {
          var searchLen = strsearch.length;

          return str1.substr(0, searchIdx) + strreplace + Lang.StringReplace(str1.substr(searchIdx + searchLen), strsearch, strreplace);
        } else {
          return str1;
        }
      };

      Lang.StringLastIndexOf = function(str1, strsearch) {
        if (strsearch == null || strsearch == "") {
          throw new Error("InvalidArgument");
        }
        return str1.lastIndexOf(strsearch);
      }

      Lang.ListFromRepr = function(a) {
        return ListCS.FromRepr(a);
      };

      Lang.ArrayFromRepr = function(repr) {
        return ArrayCS.FromRepr(repr);
      };

      Lang.ArrayToRepr = function(a) {
        if (a == null)return null;
        return a.ToRepr();
      };

      Lang.ListFromRepr = function(repr) {
        return ListCS.FromRepr(repr);
      };

      Lang.ListToRepr = function(l) {
        if (l == null)return null;
        return l.ToRepr();
      };

      Lang.DictionaryFromRepr = function(repr) {
        var tmp = DictionaryCS.FromRepr(repr);

        return tmp;
      };

      Lang.StringDictionaryToRepr = function(dict) {
        if (dict == null)return null;
        if (dict.hasOwnProperty("ToObject")) {
          return dict.ToObject();
        } else {
          return dict;
        }
      };

      Lang.DictionaryCopyToObject = function(dict, obj) {
        if (dict == null)return;
        dict.CopyToObject(obj);
      };

      Lang.StringFromRepr = function(s) {
        return s;
      }

      Lang.StringToXml = function(str) {
        try {
          if (window.DOMParser) {
            var xmlobject = (new DOMParser()).parseFromString(str, "text/xml");
            return xmlobject.documentElement;
          } else {

            var xmlobject = new ActiveXObject("Microsoft.XMLDOM");
            xmlobject.async = "false";
            xmlobject.loadXML(str);
            return xmlobject.documentElement;
          }
        } catch (e) {
          return null;
        }
      };

      Lang.XmlToString = function(oXML) {
        try {
          if (window.XMLSerializer) {
            return (new XMLSerializer()).serializeToString(oXML);
          } else {
            return oXML.xml;
          }
        } catch (e) {
          return null;
        }
      };

      Lang.ToString = function(o) {
        if (o == null)return null;

        if (typeof(o.ToString) == "function") {
          return o.ToString();
        } else {
          return o.toString();
        }
      }

      Lang.StringToLower = function(s) {
        return s.toLowerCase();
      }

      Lang.StringToInt = function(s) {
        return parseInt(s);
      }

      Lang.AsDouble = function(v) {
        if (v instanceof Int64) {
          return v.asNumber;
        } else if (v instanceof UInt64) {
          return v.asNumber;
        } else {
          return Number(v);
        }
      }

      Lang.doubleRegex = new RegExp("^([+-]?[0-9]*\\.?[0-9]+)((e|E)[+-]?[0-9]+)?$");
      Lang.parseDouble = function(v) {

        Lang.parseChecker(v, Lang.doubleRegex, "double");
        return parseFloat(v);
      }

      Lang.parseChecker = function(s, pattern, what) {
        if (!pattern.test(s)) {
          throw new Error("Invalid string for " + what + ": " + s);
        }
      }
    }

    statInit(Lang, "Lang");

    function ListCS() {
      var _s = this;

      if (_s != STAT_INIT)_s.arr = undefined;
      function _constr() {

        if (arguments.length > 1) {
          Ping.Send("Error: Instantiate ListCS with too many arguments");
        } else if (arguments.length == 0) {
          ArrayCS.call(_s, 0);
        } else if (arguments[0] instanceof Number) {
          ArrayCS.call(_s, arguments[0]);
        } else if (arguments[0] instanceof Array) {
          ArrayCS.call(_s, arguments[0].length);
          _s.arr = arguments[0];
        } else if (arguments[0] instanceof ArrayCS) {
          ArrayCS.call(_s, arguments[0].length);
          _s.arr = arguments[0].arr;
        } else {
          Ping.Send("Error: Instantiate ListCS with inappropriate arguments");
        }
      }

      defStatMeth(_s, ListCS, "Create", __Create);
      function __Create(a) {
        var res = new ListCS();
        for (var i = 0; i < arguments.length; i++) {
          res.arr.push(arguments[i]);
        }
        return res;
      }

      defStatMeth(_s, ListCS, "FromRepr", __FromRepr);
      function __FromRepr(a) {
        if (a == null) {
          return a;
        }
        if (a instanceof ListCS) {
          return a;
        }
        var res = new ListCS();
        res.arr = a;
        return res;
      }

      defPubMeth(_s, "ToRepr", __ToRepr);
      function __ToRepr() {
        return _s.arr;
      }

      defGet(_s, "Count", __Count);
      function __Count() {
        return _s.arr.length;
      }

      defGet(_s, "Values", __Values);
      function __Values() {
        return _s.arr;
      }

      defPubMeth(_s, "Add", __Add);
      function __Add(e) {
        _s.arr.push(e);
      }

      defPubMeth(_s, "Clear", __Clear);
      function __Clear(e) {
        _s.arr.length = 0;
      }

      defPubMeth(_s, "IndexOf", __IndexOf);
      function __IndexOf(e) {
        var startIndex = arguments[1];
        if (startIndex == null) {
          startIndex = 0;
        } else if (startIndex < 0 || startIndex >= _s.arr.length) {
          throw new Error("Starting index out of bound");
        }

        for (var i = startIndex; i < _s.arr.length; i++) {
          if (_s.arr[i] == e)return i;
        }
        return -1;
      }

      defPubMeth(_s, "Contains", __Contains);
      function __Contains(e) {
        return _s.IndexOf(e) >= 0;
      }

      defPubMeth(_s, "Insert", __Insert);
      function __Insert(idx, e) {
        _s.arr.splice(idx, 0, e);
      }

      defPubMeth(_s, "Remove", __Remove);
      function __Remove(e) {
        var idx = _s.IndexOf(e);
        if (idx < 0)return false;
        _s.RemoveAt(idx);
        return true;
      }

      defPubMeth(_s, "RemoveRange", __RemoveRange);
      function __RemoveRange(where, count) {
        _s.arr.splice(where, count);
      }

      defPubMeth(_s, "RemoveAt", __RemoveAt);
      function __RemoveAt(where) {
        _s.arr.splice(where, 1);
      }

      defPubMeth(_s, "GetRange", __GetRange);
      function __GetRange(startidx, len) {
        var res = new ListCS();
        res.arr = _s.arr.slice(startidx, startidx + len);
        return res;
      }

      defPubMeth(_s, "Sort", __Sort);
      function __Sort() {
        _s.arr.sort.apply(_s.arr, arguments);
      }

      defPubMeth(_s, "ToArray", __ToArray);
      function __ToArray() {
        return ArrayCS.FromRepr(_s.arr.slice());
      }

      if (_s != STAT_INIT)_constr.apply(this, arguments);

    }

    statInit(ListCS, "ListCS");

    function NativeLang() {
      var _s = this;

      defStatMeth(_s, NativeLang, "setDictValue", __setDictValue);
      function __setDictValue(dict, key, value) {
        dict[key] = value;
      }

      defStatMeth(_s, NativeLang, "makeList", __makeList);
      function __makeList() {
        return [];
      }

      defStatMeth(_s, NativeLang, "listCount", __listCount);
      function __listCount(lst) {
        return lst.length;
      }

      defStatMeth(_s, NativeLang, "addListValue", __addListValue);
      function __addListValue(list, value) {
        list.push(value);
      }

      defStatMeth(_s, NativeLang, "removeListValueAt", __removeListValueAt);
      function __removeListValueAt(list, idx) {
        list.splice(idx, 1);
      }

      defStatMeth(_s, NativeLang, "GetField", __GetField);
      function __GetField(propName, obj) {
        return obj[propName];
      }

      defStatMeth(_s, NativeLang, "GetStringField", __GetStringField);
      function __GetStringField(propName, obj) {
        var o = NativeLang.GetField(propName, obj);
        if (o) {
          return o.toString();
        }
        return null;
      }
    }

    statInit(NativeLang, "NativeLang");

    function Settings() {
      var _s = this;

      if (_s != STAT_INIT)_s.heartbeatIntervalMs = 20000;

      if (_s != STAT_INIT)_s.customerKey = null;

      if (_s != STAT_INIT)_s.gatewayUrl = "https://cws.conviva.com";
      if (_s != STAT_INIT)_s.gatewayPath = "/0/wsg";

      if (_s != STAT_INIT)_s.protocolVersion = "1.7";

      if (_s != STAT_INIT)_s.clientVersion = "2.112.0.30553";

      if (_s != STAT_INIT)_s.clientInstanceId = 0;

      if (_s != STAT_INIT)_s.loadDataTimeoutMs = 10000;

      if (_s != STAT_INIT)_s.enableLogging = false;

      if (_s != STAT_INIT)_s.platformApi = null;

      if (_s != STAT_INIT)_s.allowUncaughtExceptions = false;

      if (_s != STAT_INIT)_s.pingComponentName = "jscws";
      if (_s != STAT_INIT)_s.pingUrl = "https://pings.conviva.com/ping.ping";

      defPubMeth(_s, "changeSettings", __changeSettings);
      function __changeSettings(settings) {
        if (settings == null)return;
        var sobj = Lang.DictionaryFromRepr(settings);
        var _for_array_1 = sobj.Keys;
        for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
          var key = _for_array_1[_for_idx_2];

          var v = sobj.GetValue(key);
          switch (key) {
          case "platformApi":
            _s.platformApi = (v);
            break;
          case "gatewayUrl":
            _s.gatewayUrl = (sobj.GetValue(key));
            break;
          case "heartbeatIntervalMs":
            _s.heartbeatIntervalMs = slint.Cast(sobj.GetValue(key));
            break;
          case "enableLogging":
            _s.enableLogging = Boolean(sobj.GetValue(key));
            break;
          case "allowUncaughtExceptions":
            _s.allowUncaughtExceptions = Boolean(sobj.GetValue(key));
            break;
          default:
            throw new Error("Unsupported settings: " + key);
          }
        }
      }
    }

    statInit(Settings, "Settings");

    function Utils() {
      var _s = this;

      if (_s == STAT_INIT)Utils._instance = null;
      if (_s != STAT_INIT)_s._referenceCount = 0;

      if (_s != STAT_INIT)_s._settings = null;

      if (_s == STAT_INIT)Utils.DEFAULT_CLIENT_ID = "0";

      if (_s != STAT_INIT)_s._loadClientIdTimeout = null;
      if (_s != STAT_INIT)_s.clientId = Utils.DEFAULT_CLIENT_ID;
      if (_s != STAT_INIT)_s.clientIdLoadingDone = null;

      if (_s != STAT_INIT)_s._pingUrl = null;
      if (_s != STAT_INIT)_s._cachedPingUrl = false;
      if (_s != STAT_INIT)_s._isSendingPing = false;

      if (_s != STAT_INIT)_s.protocolVersion = null;

      if (_s != STAT_INIT)_s.device = null;
      if (_s != STAT_INIT)_s.os = null;
      if (_s != STAT_INIT)_s.osVersion = null;
      if (_s != STAT_INIT)_s.deviceVersion = null;
      if (_s != STAT_INIT)_s.deviceType = null;
      if (_s != STAT_INIT)_s.platform = null;

      if (_s != STAT_INIT)_s._cleanables = null;

      if (_s == STAT_INIT)Utils.MAX_SIZE_LOGBUFFER = 32;
      if (_s == STAT_INIT)Utils.logBuffer = new ListCS();

      function _constr(settings) {
        _s._settings = settings;
        _s._referenceCount = 1;
        _s._pingUrl = null;
        _s._isSendingPing = false;
        _s.protocolVersion = _s._settings.protocolVersion;

        _s._cleanables = new DictionaryCS();

        if (_s._settings.platformApi == null) {
          if (typeof PlayStationWebmafApi !== "undefined") {
            _s._settings.platformApi = new PlayStationWebmafApi();
          } else if (typeof PlayStationTouchFactorApi !== "undefined") {
            _s._settings.platformApi = new PlayStationTouchFactorApi();
          } else if (typeof PlayStationLibjscriptApi !== "undefined") {
            _s._settings.platformApi = new PlayStationLibjscriptApi();
          } else if (typeof ConvivaVideojsPlatformApi != "undefined") {
            _s._settings.platformApi = new ConvivaVideojsPlatformApi();
          } else if (typeof Html5PlatformApi !== "undefined") {
            _s._settings.platformApi = new Html5PlatformApi();
          } else if (typeof PlayStationTrilithiumApi !== "undefined") {
            _s._settings.platformApi = new PlayStationTrilithiumApi();
          } else if (typeof Xbox1PlatformApi !== "undefined") {
            _s._settings.platformApi = new Xbox1PlatformApi();
          }

        }
        if (_s._settings.platformApi == null) {
          throw new Error("PlatformApi is null");
        }

        _s.device = _s._settings.platformApi.getDevice();
        _s.deviceVersion = _s._settings.platformApi.getDeviceVersion();
        _s.deviceType = _s._settings.platformApi.getDeviceType();
        _s.os = _s._settings.platformApi.getOS();
        _s.osVersion = _s._settings.platformApi.getOSVersion();

        _s.platform = "Js";

      }

      defStatMeth(_s, Utils, "CreateUtils", __CreateUtils);
      function __CreateUtils(settings) {
        if (Utils._instance == null) {
          var s = new Settings();
          s.changeSettings(settings);
          Utils._instance = new Utils(s);
          Utils._instance._start();
        } else {
          Utils._instance.getSettings().changeSettings(settings);
          Utils._instance._referenceCount++;
        }
        return Utils._instance;
      }

      defStatMeth(_s, Utils, "getInstance", __getInstance);
      function __getInstance() {
        if (Utils._instance == null) {
          throw new Error("CreateUtils module has not been called");
        }
        return Utils._instance;
      }

      defPubMeth(_s, "getPlatformApi", __getPlatformApi);
      function __getPlatformApi() {
        return _s._settings.platformApi;
      }

      defPubMeth(_s, "getSettings", __getSettings);
      function __getSettings() {
        return _s._settings;
      }

      defPrivMeth(_s, "_start", ___start);
      function ___start() {

      }

      defPubMeth(_s, "cleanup", __cleanup);
      function __cleanup() {
        _s._referenceCount--;
        if (_s._referenceCount > 0) {
          return;
        }
        if (_s.clientIdLoadingDone != null) {
          _s.clientIdLoadingDone.Cleanup();
          _s.clientIdLoadingDone = null;
        }
        if (_s._cleanables != null) {
          Cleanable.cleanupCollection(_s._cleanables);
          _s._cleanables = null;
        }
        if (_s._settings != null && _s._settings.platformApi != null) {
          _s._settings.platformApi.cleanup();
        }
        _s._settings = null;
        Utils._instance = null;
      }

      defPubMeth(_s, "logNoBuffer", __logNoBuffer);
      function __logNoBuffer(msg) {
        var timeMsec = _s.epochTimeMs();
        var theTime = undefined;
        theTime = (timeMsec / 1000.0).toFixed(3).toString();

        msg = "[" + theTime + "] " + msg;

        var isError = Lang.StringContains(msg, "ERROR:");

        if (_s._settings.enableLogging) {
          if (isError) {
            _s._settings.platformApi.consoleErr(msg);
          } else {
            _s._settings.platformApi.consoleLog(msg);
          }
        }
        return msg;
      }

      defPubMeth(_s, "log", __log);
      function __log(msg) {
        msg = _s.logNoBuffer(msg);

        if (Utils.logBuffer.Count >= Utils.MAX_SIZE_LOGBUFFER) {
          Utils.logBuffer.RemoveAt(0);
        }
        Utils.logBuffer.Add(msg);
      }

      defPubMeth(_s, "logSession", __logSession);
      function __logSession(msg, sessionId) {
        _s.log("sid=" + sessionId + " " + msg);
      }

      defPubMeth(_s, "err", __err);
      function __err(message) {
        _s.log("ERROR: " + message);
      }

      defPubMeth(_s, "getLogs", __getLogs);
      function __getLogs(sessionId) {

        var res = Utils.logBuffer;
        Utils.logBuffer = new ListCS();
        return res;
      }

      defPubMeth(_s, "assert", __assert);
      function __assert(condition, msg) {
        if (!condition) {
          throw new Error("Assertion failure: " + msg);
        }
      }

      defPubMeth(_s, "runProtected", __runProtected);
      function __runProtected(func, message) {
        _s.runProtectedSync(func, message);
      }

      defPubMeth(_s, "runProtectedSync", __runProtectedSync);
      function __runProtectedSync(func, message) {
        var allowUncaughtExceptions = _s._settings.allowUncaughtExceptions;

        if (allowUncaughtExceptions) {
          func();
        } else {
          try {
            func();
          } catch (e) {
            _s.onUncaughtException(message, e);
          }
        }
      }

      defPrivMeth(_s, "onUncaughtException", __onUncaughtException);
      function __onUncaughtException(msg, e) {
        try {
          _s.ping("Uncaught exception: " + msg + ": " + Lang.ToString(e));
        } catch (eping) {
          _s.err("Caught exception while sending ping: " + Lang.ToString(eping));
        }
      }

      defPubMeth(_s, "ping", __ping);
      function __ping(msg) {
        if (_s._isSendingPing) {
          return;
        }
        _s._isSendingPing = true;
        _s.initPing();
        var pingUrl = _s._pingUrl + "&d=" + _s.urlEncodeString(Lang.ToString(msg));
        _s.err("Ping: " + pingUrl);
        _s.httpRequest(false, pingUrl, null, null, null);
        _s._isSendingPing = false;

      }

      defPrivMeth(_s, "initPing", __initPing);
      function __initPing() {

        if (!_s._cachedPingUrl) {

          var componentName = "jscws";

          var metadataSchema = null;

          try {
            var platformMetadata = Lang.DictionaryFromRepr(_s._settings.platformApi.getPlatformMetadata());
            if (platformMetadata != null && platformMetadata.ContainsKey("sch")) {
              metadataSchema = platformMetadata.GetValue("sch");
            }
          } catch (e) {
          }

          _s._pingUrl = _s._settings.pingUrl + "?"
            + "comp=" + componentName
            + "&clv=" + _s._settings.clientVersion
            + "&cid=" + _s._settings.customerKey
            + "&uuid=" + _s.clientId;

          if (metadataSchema != null) {
            _s._pingUrl += "&sch=" + metadataSchema;
          }

          if (_s.clientId != Utils.DEFAULT_CLIENT_ID && metadataSchema != null) {
            _s._cachedPingUrl = true;
          }
        }
      }

      defPrivMeth(_s, "urlEncodeString", __urlEncodeString);
      function __urlEncodeString(rawString) {
        return escape(rawString);
      }

      defPubMeth(_s, "epochTimeMs", __epochTimeMs);
      function __epochTimeMs() {
        return _s._settings.platformApi.epochTimeMs();
      }

      defPubMeth(_s, "createTimer", __createTimer);
      function __createTimer(timerAction, intervalMs, actionName) {
        var cleanable = new Cleanable(_s._cleanables);
        var wrappedAction = null;
        wrappedAction = (
          function() {
            _s.runProtected(timerAction, actionName);
          });
        cleanable.setCleanupAction(_s._settings.platformApi.createTimer(wrappedAction, intervalMs, actionName));
        return cleanable;
      }

      defPubMeth(_s, "scheduleAction", __scheduleAction);
      function __scheduleAction(action, delayMs, actionName) {
        var cleanable = new Cleanable(_s._cleanables);
        var actionHappened = false;
        var wrappedAction = null;
        wrappedAction = (
          function() {
            if (cleanable != null) {
              cleanable.cleanup();
            }
            action();
            actionHappened = true;
          });
        cleanable.setCleanupAction(_s._settings.platformApi.createTimer(wrappedAction, delayMs, actionName));

        if (actionHappened) {
          cleanable.cleanup();
        }
        return cleanable;
      }

      defPubMeth(_s, "parseInt", __parseInt);
      function __parseInt(decimalInt, defaultResult) {
        var result = defaultResult;
        try {
          result = slint.Parse(decimalInt);
        } catch (e) {
        }
        return result;
      }

      defPubMeth(_s, "parseNumber", __parseNumber);
      function __parseNumber(numberStr, defaultResult) {
        var result = defaultResult;
        try {
          result = Lang.parseDouble(numberStr);
        } catch (e) {
        }
        return result;
      }

      defPubMeth(_s, "startFetchClientId", __startFetchClientId);
      function __startFetchClientId() {

        _s.clientId = Utils.DEFAULT_CLIENT_ID;
        _s.clientIdLoadingDone = new Eventer();

        _s._loadClientIdTimeout = _s.scheduleAction(
          function() {
            _s.log("Timeout in reading clientId. Using " + Utils.DEFAULT_CLIENT_ID + ".");
            _s.ping("Timeout in reading clientId. IGNORE waited " + _s._settings.loadDataTimeoutMs + "ms.");
            if (_s.clientIdLoadingDone != null) {
              _s.clientIdLoadingDone.DispatchEvent();
            }
            _s._loadClientIdTimeout = null;
          },
          _s._settings.loadDataTimeoutMs,
          "utils.readClientId timeout callback");

        var onLoad = undefined;
        onLoad = (
          function(fSuccess, loadedData) {
            _s.runProtected(
              function() {
                if (_s._loadClientIdTimeout != null) {
                  _s._loadClientIdTimeout.cleanup();
                  _s._loadClientIdTimeout = null;
                }
                var result = null;
                if (fSuccess) {
                  try {
                    result = _s.jsonDecode(loadedData);
                  } catch (e) {
                    result = null;
                  }
                }
                var loadedClientId = null;
                if (fSuccess && result != null && result.ContainsKey("clId")) {
                  loadedClientId = result.GetValue("clId");
                }
                if (loadedClientId != null && loadedClientId != Utils.DEFAULT_CLIENT_ID && loadedClientId != "null") {
                  _s.clientId = loadedClientId;
                  _s.log("Setting the client id to " + loadedClientId + " (from local storage)");
                } else {
                  _s.log("Failed to load the client id from local storage");
                }
                if (_s.clientIdLoadingDone != null) {
                  _s.clientIdLoadingDone.DispatchEvent();
                  _s.clientIdLoadingDone = null;
                }
              },
              "utils.fetchClientId onLoad");
          });
        _s._settings.platformApi.loadLocalData(onLoad);
      }

      defPubMeth(_s, "setClientIdFromServer", __setClientIdFromServer);
      function __setClientIdFromServer(newClientId, fromStorage) {

        if (_s._loadClientIdTimeout != null) {
          _s._loadClientIdTimeout.cleanup();
          _s._loadClientIdTimeout = null;
        }
        _s.clientIdLoadingDone = null;
        if (_s.clientId != newClientId) {
          _s.clientId = newClientId;
          _s.log("Setting the client id to " + newClientId + " (from server)");
          _s.writeClientId();
        }
      }

      defPrivMeth(_s, "writeClientId", __writeClientId);
      function __writeClientId() {
        var dataToSave = new DictionaryCS();
        dataToSave.SetValue("clId", _s.clientId);
        var onSaved = undefined;
        onSaved = (
          function(fSuccess) {
            _s.runProtected(
              function() {
                if (!fSuccess) {
                  _s.err("An error occurred while saving the clientId.");
                }
              }, "utils.writeClientId onSaved");
          });
        var dataObject = Lang.StringDictionaryToRepr(dataToSave);
        var dataStr = _s.jsonEncode(dataObject);
        _s._settings.platformApi.saveLocalData(dataStr, onSaved);
      }

      defPubMeth(_s, "randInt", __randInt);
      function __randInt() {

        return Math.floor(Math.random() * 4294967295) - 2147483648;
      }

      defPubMeth(_s, "randUInt", __randUInt);
      function __randUInt() {

        var uInt = _s.randInt();
        uInt = Math.abs(uInt);
        if (uInt < 0)uInt = 0;
        return uInt;
      }

      defPubMeth(_s, "httpRequest", __httpRequest);
      function __httpRequest(isPOST, url, data, contentType, callback) {
        var cleanable = new Cleanable(_s._cleanables);
        cleanable.setCleanupAction(_s._settings.platformApi.httpRequest(isPOST, url, data, contentType,
          function(isSuccess, response) {

            cleanable.cleanup();
            if (callback != null) {
              callback(isSuccess, response);
            }
          }));
        return cleanable;
      }

      defPubMeth(_s, "jsonEncode", __jsonEncode);
      function __jsonEncode(obj) {
        var res = null;
        _s.runProtectedSync(
          function() {
            res = _s._settings.platformApi.jsonEncode(obj);
          },
          "utils.jsonEncode");
        return res;
      }

      defPubMeth(_s, "jsonDecode", __jsonDecode);
      function __jsonDecode(json) {
        var res = null;
        _s.runProtectedSync(
          function() {
            var decodedJson = _s._settings.platformApi.jsonDecode(json);
            res = Lang.DictionaryFromRepr(decodedJson);
          },
          "utils.jsonDecode");
        return res;
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Utils, "Utils");

    function DataLoader() {
      var _s = this;

      if (_s == STAT_INIT) {
        DataLoader.frameId = 'conviva_iframe';
        DataLoader.frameUrl = '/cws_iframe.html';
        DataLoader.TESTAPI_forTouchstone = true;

        DataLoader.referenceCount = 0;

        DataLoader.nextConvivaRequestId = 0;
        DataLoader.callbacks = {};
        DataLoader.communicationFramesIds = {};

        if (typeof window !== 'undefined') {
          if (window.addEventListener) {
            window.addEventListener('message', handleResp, false);
          } else if (window.attachEvent) {
            window.attachEvent('onmessage', handleResp);
          }
        }
      }

      function _constr() {
        DataLoader.referenceCount++;
      }

      this.cleanup = function() {
        DataLoader.referenceCount--;
        if (DataLoader.referenceCount == 0) {

          DataLoader.nextConvivaRequestId = 0;
          DataLoader.callbacks = {};
          slForEachPropValue(DataLoader.communicationFramesIds,
            function(communicationFrameId) {
              _s.removeIFrame(communicationFrameId);
            }
          );
          DataLoader.communicationFramesIds = {};
        }
      }

      this.findFrameById = function(remoteFrameId) {
        return (remoteFrameId ? document.getElementById(remoteFrameId) : null);
      }

      this.findFrameForDomain = function(forDomain) {

        var remoteFrameId = DataLoader.communicationFramesIds[forDomain];
        return _s.findFrameById(remoteFrameId);
      }

      this.makeRequest = function(isPOST, url, data, contentType, callback) {

        var m = url.match(/^(https?:\/\/[^\/]*)(\/.*)$/);
        if (!m) {
          Utils.getInstance().log("ERROR: UrlLoader: cannot parse url: " + url);
          return null;
        }
        var forDomain = m[1];

        var remoteFrame = _s.findFrameForDomain(forDomain);
        if (remoteFrame && remoteFrame.loaded) {

          var convivaRequestId = DataLoader.nextConvivaRequestId++;
          var method = isPOST ? "POST" : "GET";
          var evt = {
            'url': url,
            'method': method,
            'data': data,
            'contentType': contentType,
            'requestId': convivaRequestId,
            'convivaRequestId': convivaRequestId
          };

          DataLoader.callbacks[convivaRequestId] = [forDomain, callback];

          remoteFrame.contentWindow.postMessage(evt, DataLoader.TESTAPI_forTouchstone ? "*" : forDomain);
        } else if (remoteFrame && !remoteFrame.loaded) {

          setTimeout(function() {_s.makeRequest(isPOST, url, data, contentType, callback);}, 500);
        } else {

          _s.insertIFrame(forDomain,
            function() {
              var remoteFrame = _s.findFrameForDomain(forDomain);
              if (remoteFrame) {
                remoteFrame.loaded = true;
                _s.makeRequest(isPOST, url, data, contentType, callback);
              }
            }
          );
        }
        return null;
      }

      this.insertIFrame = function(forDomain, callback) {

        var remoteFrame = document.createElement("iframe");
        remoteFrame.id = "_conviva_iframe_" + forDomain + "_" + DataLoader.frameId;

        remoteFrame.style.height = "0px";
        remoteFrame.style.width = "0px";
        remoteFrame.style.top = "-50px";
        remoteFrame.style.left = "-50px";
        remoteFrame.style.borderWidth = "0px";
        remoteFrame.height = 0;
        remoteFrame.width = 0;
        remoteFrame.src = forDomain + DataLoader.frameUrl;
        remoteFrame.onload = callback;
        DataLoader.communicationFramesIds[forDomain] = remoteFrame.id;
        var body = document.body || document.getElementsByTagName('body')[0];
        if (body) {
          body.appendChild(remoteFrame);
        }
      }

      this.removeIFrame = function(communicationFrameId) {
        var remoteFrame = _s.findFrameById(communicationFrameId);
        if (remoteFrame != null) {
          var body = document.body || document.getElementsByTagName('body')[0];
          body.removeChild(remoteFrame);
        }
      }

      function handleResp(e) {

        try {
          var d = e.data;

          if (typeof d !== 'object')return;
          if (typeof d.convivaRequestId === 'undefined') {

            if (typeof d.requestId !== 'undefined') {
              d.convivaRequestId = d.requestId;
            } else {
              return;
            }
          }

          var domain_callback = DataLoader.callbacks[d.convivaRequestId];
          if (!domain_callback) {
            Utils.getInstance().log('Received response for unknown request');
            return;
          }
          if (!DataLoader.TESTAPI_forTouchstone && e.origin != domain_callback[0]) {
            Utils.getInstance().log('ERROR: Bad origin:' + e.origin);
            return;
          }

          delete DataLoader.callbacks[d.convivaRequestId];
          var bytes = d.bytes;
          if (!d.post_err || d.post_err != 'ok') {
            Utils.getInstance().log('ERROR: Error posting to ' + e.origin + ' (' + bytes + ')');
            domain_callback[1](false, d.post_err);
          } else {
            domain_callback[1](true, bytes);
          }
        } catch (e) {}
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(DataLoader, "DataLoader");

    function Infer() {
      var _s = this;

      if (_s == STAT_INIT)Infer.MOVING_STATE = "MOVING";
      if (_s == STAT_INIT)Infer.NOT_MOVING_STATE = "NOT_MOVING";

      if (_s != STAT_INIT)_s.movingMinimumSamples = 3;
      if (_s != STAT_INIT)_s.notMovingMinimumSamples = 3;

      if (_s != STAT_INIT)_s.movingExpectedSpeed = 1;
      if (_s != STAT_INIT)_s.notMovingExpectedSpeed = 0;
      if (_s != STAT_INIT)_s.movingSpeedTolerance = 0.25;

      if (_s != STAT_INIT)_s.resetAfter = false;

      if (_s != STAT_INIT)_s._lastPlayHeadTimeSpeeds = undefined;
      if (_s != STAT_INIT)_s._lastPlayHeadTime = 0;
      if (_s != STAT_INIT)_s._lastPollTime = 0;

      function _constr() {
        _s.Reset();
      }

      defPubMeth(_s, "Update", __Update);
      function __Update(phtNow) {
        var now = Utils.getInstance().epochTimeMs();
        if (_s._lastPollTime > 0 && now > _s._lastPollTime) {
          _s._lastPlayHeadTimeSpeeds.Insert(0, (Lang.AsDouble(phtNow - _s._lastPlayHeadTime)) / (now - _s._lastPollTime));
        }
        _s._lastPollTime = now;
        _s._lastPlayHeadTime = Lang.AsDouble(phtNow);
        if (_s._lastPlayHeadTimeSpeeds.Count > Math.max(_s.movingMinimumSamples, _s.notMovingMinimumSamples)) {
          _s._lastPlayHeadTimeSpeeds.RemoveAt(_s._lastPlayHeadTimeSpeeds.Count - 1);
        }
        return _s.InferState();
      }

      defPrivMeth(_s, "InferState", __InferState);
      function __InferState() {
        var inferredState = null;
        var numPhSpeedSamples = _s._lastPlayHeadTimeSpeeds.Count;
        if (numPhSpeedSamples >= Math.min(_s.movingMinimumSamples, _s.notMovingMinimumSamples)) {
          var avgSpeed = 0.0;
          var _for_array_1 = _s._lastPlayHeadTimeSpeeds.Values;
          for (var _for_idx_2 = 0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
            var phSpeed = _for_array_1[_for_idx_2];

            avgSpeed += phSpeed;
          }
          avgSpeed /= numPhSpeedSamples;

          if (numPhSpeedSamples >= _s.movingMinimumSamples
            && Math.abs(avgSpeed - _s.movingExpectedSpeed) < _s.movingSpeedTolerance) {
            inferredState = Infer.MOVING_STATE;
          }
          if (numPhSpeedSamples >= _s.notMovingMinimumSamples
            && avgSpeed == _s.notMovingExpectedSpeed) {
            inferredState = Infer.NOT_MOVING_STATE;
          }
        }
        if (_s.resetAfter && inferredState != null) {
          _s.Reset();
        }
        return inferredState;
      }

      defPubMeth(_s, "Reset", __Reset);
      function __Reset() {
        _s._lastPlayHeadTimeSpeeds = new ListCS();
        _s._lastPlayHeadTime = -1;
        _s._lastPollTime = 0;
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Infer, "Infer");

    function ConvivaVideojsStreamerProxy() {
      var _s = this;

      if (_s != STAT_INIT) {
        _s._capabilities = ConvivaStreamerProxy.CAPABILITY_VIDEO +
          ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS +
          ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS;
        _s._duration = -1;

      }

      function _constr(vjsPlayer) {

        ConvivaStreamerProxy.call(_s);
        _s.Log('ConvivaVideojsStreamerProxy._constr()');
        _s._vjsPlayer = vjsPlayer;
        _s._infer = new Conviva.Infer();

        _s._setAllEventListeners();
        _s._startPolling();
        _s.firstPlay = true;
        _s.tech = null;
        var requestTech = new Object();
        requestTech.IWillNotUseThisInPlugins = true;
        _s.requestTech = requestTech;
        if ((_s.tech = _s._vjsPlayer.tech(_s.requestTech)) !== null) {
          console.log('Found TECH...');
        } else {
          console.log('DID NOT FIND TECH !!');
        }
        if (_s.tech.hls) {
          var bandW = Math.round(_s.tech.hls.bandwidth / 1024);
          var updatedStream = new StreamInfo(bandW, null, null, -1, -1, -1);
          _s.SetStream(updatedStream);
          console.log('Ctor : BANDWIDTH: ' + bandW);
        } else {
          console.log('Ctor : Player is not ready! ');
        }
      }

      defPubMeth(_s, "Cleanup", __Cleanup);
      function __Cleanup() {

        _s.Log('ConvivaVideojsStreamerProxy.Cleanup()');
        _s.Log('ConvivaVideojsStreamer: leave the inference in...');

        _s.Log('ConvivaVideojsStreamer: leave the event listeners and player in...');

        _s._duration = -1;

        _s.super_Cleanup();

      }

      defPubMeth(_s, "GetCapabilities", __GetCapabilities);
      function __GetCapabilities() {

        return _s._capabilities;
      }

      this.GetDuration = function() {
        return _s._duration;
      };

      this.GetBufferLengthMs = function() {
        return _s._bufferLengthMs;
      };

      this.GetEncodedFrameRate = function() {
        return _s._encodedFrameRate;
      };

      this.GetPlayheadTimeMs = function() {
        return _s._playheadTimeMs;
      };

      this.SetDuration = function(duration) {
        if (isFinite(duration) && duration > 0) {
          var durationSec = duration;

          if (_s.GetDuration() != durationSec) {
            _s._duration = durationSec;
            var meta = {};
            meta[ConvivaStreamerProxy.METADATA_DURATION] = _s._duration;
            _s.SetMetadata(meta);
          }
        }
      };

      this.SetPlayheadTimeMs = function(pht) {
        if (isFinite(pht) && pht > 0) {
          var phtMs = pht * 1000;
          if (_s.GetPlayheadTimeMs() != phtMs) {
            _s._playheadTimeMs = phtMs;
          }
          _s.InferState();
        }
      };

      this.SetPlayerState = function(convivaState) {
        if (_s.GetPlayingState() !== convivaState) {
          _s.SetPlayingState(convivaState);
          _s._infer.Reset();
        }
      };

      this.InferState = function() {
        if (_s._infer) {
          var newState = _s._infer.Update(_s.GetPlayheadTimeMs());
          if (newState) {
            if (newState === Conviva.Infer.MOVING_STATE &&
              _s.GetPlayingState() !== Conviva.ConvivaStreamerProxy.PLAYING) {
              _s.Log('ConvivaVideojsStreamerProxy.InferState(): PLAYING');
              _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PLAYING);
            }
            if (newState === Conviva.Infer.NOT_MOVING_STATE &&
              _s.GetPlayingState() === Conviva.ConvivaStreamerProxy.PLAYING) {
              _s.Log('ConvivaVideojsStreamerProxy.InferState(): BUFFERING');
              _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
            }
          }
        }
      };

      this._startPolling = function() {
        _s._polling = true;
        _s._cancelTimer =
          Utils.getInstance()._settings.platformApi.createTimer(
            _s._poll, 100, 'ConvivaVideojsStreamerProxy._poll');

      };

      this._poll = function() {
        Utils.getInstance().runProtected(function() {

          if (!_s._polling || !_s._vjsPlayer) {
            _s.SetPlayheadTimeMs(0);
            return;
          }
          _s.SetPlayheadTimeMs(_s._vjsPlayer.currentTime());
        }, 'ConvivaVideojsStreamerProxy._poll');
      };

      this._stopPolling = function() {
        if (!_s._polling && typeof _s._cancelTimer === 'function') {
          _s._cancelTimer();
        }
        _s._polling = false;
      };

      this._declareError = function(errMsg) {
        _s.Log('ConvivaVideojsStreamerProxy._declareError: ' + errMsg);
        _s.SetError(StreamerError.makeUnscopedError(
          errMsg, StreamerError.SEVERITY_FATAL));
      };

      this._setAllEventListeners = function() {
        _s.Log('ConvivaVideojsStreamerProxy._setAllEventListeners()');

        if (_s._vjsPlayer) {
          _s._vjsPlayer.on('ended', _s.onEnded);
          _s._vjsPlayer.on('loadedmetadata', _s.onLoadedMetadata);
          _s._vjsPlayer.on('loadstart', _s.onLoadstart);
          _s._vjsPlayer.on('pause', _s.onPause);
          _s._vjsPlayer.on('durationchange', _s.onDurationchange);
          _s._vjsPlayer.on('emptied', _s.onEmptied);

          _s._vjsPlayer.on('stalled', _s.onStalled);
          _s._vjsPlayer.on('waiting', _s.onWaiting);
          _s._vjsPlayer.on('play', _s.onPlay);

          _s._vjsPlayer.on('error', _s.onError);
          _s._vjsPlayer.on('mediachange', _s.onMediaChange);
          _s._vjsPlayer.on('progress', _s.onProgress);

        }
      };

      this._removeAllEventListeners = function() {
        _s.Log('ConvivaVideojsStreamerProxy._removeAllEventListeners()');

        if (_s._vjsPlayer) {
          _s._vjsPlayer.off('ended', _s.onEnded);
          _s._vjsPlayer.off('loadedmetadata', _s.onLoadedMetadata);
          _s._vjsPlayer.off('loadstart', _s.onLoadstart);
          _s._vjsPlayer.off('pause', _s.onPause);
          _s._vjsPlayer.off('durationchange', _s.onDurationchange);
          _s._vjsPlayer.off('emptied', _s.onEmptied);
          _s._vjsPlayer.off('stalled', _s.onStalled);
          _s._vjsPlayer.off('waiting', _s.onWaiting);
          _s._vjsPlayer.off('play', _s.onPlay);

          _s._vjsPlayer.off('error', _s.onError);
          _s._vjsPlayer.off('mediachange', _s.onMediaChange);
        }
      };

      this.onPause = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onPause');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PAUSED);
        }, 'ConvivaVideojsStreamerProxy.onPause');
      };

      this.onLoadedMetadata = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onLoadedMetadata');
          if (!_s._vjsPlayer.duration()) {
            return;
          }
          if (_s._vjsPlayer) {
            _s.SetDuration(_s._vjsPlayer.duration());
          }

        }, 'ConvivaVideojsStreamerProxy.onLoadedMetadata');
      };

      this.onEnded = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onEnded');
          if (_s._vjsPlayer)
            _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
        }, 'ConvivaVideojsStreamerProxy.onEnded');
      };

      this.onDurationchange = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onDurationchange');
          if (_s._vjsPlayer) {
            _s.SetDuration(_s._vjsPlayer.duration());
          }
        }, 'ConvivaVideojsStreamerProxy.onDurationchange');
      };

      this.onLoadstart = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onLoadstart');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
        }, 'ConvivaVideojsStreamerProxy.onLoadstart');
      };

      this.onPlay = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onPlay');
          if (_s.firstPlay) {
            _s.Log('ConvivaVideojsStreamerProxy.onPlay :First Play IGNORED!!');
            _s.firstPlay = false;
            return;
          }
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PLAYING);

        }, 'ConvivaVideojsStreamerProxy.onPlay');
      };

      this.onStalled = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onStalled NO STATE CHANGE');

        }, 'ConvivaVideojsStreamerProxy.onStalled');
      };

      this.onEmptied = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onEmptied');
          _s.Log('ConvivaVideojsStreamerProxy.onEmptied');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
        }, 'ConvivaVideojsStreamerProxy.onEmptied');
      };

      this.onWaiting = function(event, p1, p2) {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onWaiting');
          _s.Log('ConvivaVideojsStreamerProxy.onWaiting');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
        }, 'ConvivaVideojsStreamerProxy.onWaiting');
      };

      this.onError = function() {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onError');
          if (_s._vjsPlayer) {
            var errorEvent = _s._vjsPlayer.error();
            var reportedError = _s._convertError(
              errorEvent ? errorEvent.code : 99);
            _s.Log("MediaError: " + errorEvent.message);
            _s._declareError(reportedError);

          }
        }, 'ConvivaVideojsStreamerProxy.onError');
      };

      this.onProgress = function() {
        Utils.getInstance().runProtected(function() {

          if (_s._vjsPlayer && _s._vjsPlayer.tech(_s.requestTech).hls && _s._vjsPlayer.tech(_s.requestTech).hls.playlists.media() && _s._vjsPlayer.tech(_s.requestTech).hls.playlists.media().attributes) {
            var updatedStream = new StreamInfo(Math.round(_s._vjsPlayer.tech(_s.requestTech).hls.playlists.media().attributes.BANDWIDTH / 1024), null, null, -1, -1, -1);
            _s.SetStream(updatedStream);
          }
        }, 'ConvivaVideojsStreamerProxy.onProgress');
      };

      this.onMediaChange = function() {
        Utils.getInstance().runProtected(function() {
          _s.Log('ConvivaVideojsStreamerProxy.onMediaChange');
          if (_s._vjsPlayer && _s._vjsPlayer.tech(_s.requestTech).hls && _s._vjsPlayer.tech(_s.requestTech).hls.playlists.media() && _s._vjsPlayer.tech(_s.requestTech).hls.playlists.media().attributes) {
            var updatedStream = new StreamInfo(Math.round(_s._vjsPlayer.tech(_s.requestTech).hls.playlists.media().attributes.BANDWIDTH / 1024), null, null, -1, -1, -1);
            _s.SetStream(updatedStream);
          }
        }, 'ConvivaVideojsStreamerProxy.onMediaChange');
      };

      this._convertError = function(code) {
        switch (code) {
        case 0:
          errStr = 'MEDIA_ERR_CUSTOM';
          break;
        case 1:
          errStr = 'MEDIA_ERR_ABORTED';
          break;
        case 2:
          errStr = 'MEDIA_ERR_NETWORK';
          break;
        case 3:
          errStr = 'MEDIA_ERR_DECODE';
          break;
        case 4:
          errStr = 'MEDIA_ERR_SRC_NOT_SUPPORTED';
          break;
        default:
          errStr = 'MEDIA_ERR_UNKNOWN';
        }

        _s.Log("MediaError: code " + code + " " + errStr);
        return errStr;
      };

      if (_s != STAT_INIT)_constr.apply(_s, arguments);

    }

    statInit(ConvivaVideojsStreamerProxy, "ConvivaVideojsStreamerProxy");

    function Html5PlatformApi() {
      var _s = this;
      var _persistentData = null;
      var _convivaKey = "convivaPersistent";

      function _constr() {
        _s._dataLoader = new DataLoader();

        _s.platform = (navigator && navigator.platform && (navigator.platform.toString ? navigator.platform.toString() : null));
      }

      this.cleanup = function() {
        if (_s._dataLoader != null) {
          _s._dataLoader.cleanup();
          _s._dataLoader = null;
        }
      }

      this.saveLocalData = function(data, callback) {
        try {
          localStorage.setItem(_convivaKey, data);
        } catch (e) {
          callback(false);
          return;
        }
        callback(true);
      }

      this.loadLocalData = function(callback) {
        try {
          var data = localStorage.getItem(_convivaKey);
          callback(true, data);
        } catch (e) {
          callback(false, "");
        }
      }

      this.deleteLocalData = function() {
        try {
          var data = localStorage.clear();
        } catch (e) {
        }
      }

      this.httpRequest = function(isPOST, url, data, contentType, callback) {
        if (typeof(data) !== "string") {
          data = _s.jsonEncode(data, null);
        }
        return _s._dataLoader.makeRequest(isPOST, url, data, contentType, callback);
      }

      this.epochTimeMs = function() {
        var d = new Date();
        return d.getTime();
      }

      this.createTimer = function(timerAction, intervalMs, actionName) {

        var timerId = setInterval(timerAction, intervalMs);
        return (function() {
          if (timerId != -1) {
            clearInterval(timerId);
            timerId = -1;
          }
        });
      }

      this.jsonEncode = function(obj) {
        var jsonString = null;
        jsonString = JSON.stringify(obj);
        return jsonString;
      }

      this.jsonDecode = function(json) {
        var parsedJson = null;
        parsedJson = JSON.parse(json);
        return parsedJson;
      }

      this.consoleLog = function(message) {
        if (typeof console != 'undefined' && console.log) {
          console.log(message);
        }
      }

      this.consoleErr = function(errMsg) {
        if (typeof console != 'undefined' && console.error) {
          console.error(errMsg);
        }
      }

      this.getDevice = function() {
        return 'browser';
      }

      this.getDeviceVersion = function() {
        return null;
      }

      this.getDeviceType = function() {
        return "PC";
      }

      this.getOS = function() {
        return _s._getPlatformName();
      }

      this.getOSVersion = function() {
        return null;
      }

      defPubMeth(_s, "getPlatformMetadata", __getPlatformMetadata);
      function __getPlatformMetadata() {
        var res = { "sch": "html5.1" };
        res['np'] = (navigator && navigator.platform && (navigator.platform.toString ? navigator.platform.toString() : null));
        res['nua'] = (navigator && navigator.userAgent && (navigator.userAgent.toString ? navigator.userAgent.toString() : null));
        return res;
      }

      this._getPlatformName = function() {
        if (_s.platform == null) {
          return null;
        }
        var stringContains = function(haystack, needle) {
          return haystack.indexOf(needle) >= 0;
        };
        if (stringContains(_s.platform, "iPad")
          || stringContains(_s.platform, "iPhone")
          || stringContains(_s.platform, "iPod")) {
          return "IOS";
        } else if (stringContains(_s.platform, "Mac")) {
          return "MAC";
        } else if (stringContains(_s.platform, "Win")) {
          return "WIN";
        } else if (stringContains(_s.platform, "Linux")
          || stringContains(_s.platform, "SunOS")
          || stringContains(_s.platform, "HP-UX")
          || stringContains(_s.platform, "BSD")) {
          return "UNIX";
        } else if (stringContains(_s.platform, "PLAYSTATION 3")) {
          return "PS3";
        } else if (stringContains(_s.platform, "XBOX")) {
          return "XBOX";
        } else {
          return null;
        }
      }

      if (_s != STAT_INIT)_constr.apply(_s, arguments);
    }

    statInit(Html5PlatformApi, "Html5PlatformApi");

    function ConvivaVideojsPlatformApi() {
      var _s = this;

      function _constr() {
        Html5PlatformApi.call(_s);
      }

      this.getPlatformMetadata = function() {
        var res = _s.super_getPlatformMetadata();
        res['sch'] = 'videojs.1';
        res['fw'] = 'Video JS';
        res['fwv'] = videojs.VERSION;
        return res;
      };

      _constr.apply(_s, arguments);
    }

    statInit(ConvivaVideojsPlatformApi, "ConvivaVideojsPlatformApi");
  })();
  var Conviva = (typeof Conviva !== 'undefined') ? Conviva : (function() {});
  Conviva.LivePass = ConvivaPrivateLoader.LivePass;
  Conviva.ConvivaContentInfo = ConvivaPrivateLoader.ConvivaContentInfo;
  Conviva.StreamerError = ConvivaPrivateLoader.StreamerError;
  Conviva.ConvivaStreamerProxy = ConvivaPrivateLoader.ConvivaStreamerProxy;
  Conviva.Settings = ConvivaPrivateLoader.Settings;
  Conviva.StreamInfo = ConvivaPrivateLoader.StreamInfo;
  Conviva.Utils = ConvivaPrivateLoader.Utils;
  Conviva.ConvivaVideojsStreamerProxy = ConvivaPrivateLoader.ConvivaVideojsStreamerProxy;
  Conviva.ConvivaVideojsPlatformApi = ConvivaPrivateLoader.ConvivaVideojsPlatformApi;
  Conviva.Infer = ConvivaPrivateLoader.Infer;
}
