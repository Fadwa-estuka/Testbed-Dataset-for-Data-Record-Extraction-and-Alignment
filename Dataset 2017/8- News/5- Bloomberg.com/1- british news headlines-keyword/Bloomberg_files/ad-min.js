"undefined"===typeof window.AMP&&(AMP={});"undefined"===typeof window.amp_ad_properties_list&&(amp_ad_properties_list=[]);
AMP.adTag=function(){function l(){for(var a=(new Date).getTime().toString().substr(5),b=0;2>b;b++)a+=Math.floor(65536*(1+Math.random())).toString();return a.substr(0,18)}var m={18064007:1};return{debugLog:function(a){if("undefined"!==typeof amp_ad_properties&&null!==amp_ad_properties&&"undefined"!==typeof amp_ad_properties._debug&&!0===amp_ad_properties._debug)try{var b=new Date,c=b.getFullYear(),d=b.getMonth()+1,e=b.getDate(),f=b.getHours(),h=b.getMinutes(),g=b.getSeconds(),k=a.join(" | ");console.log(c+
"-"+d+"-"+e+" "+f+":"+h+":"+g+" | "+k)}catch(q){}},getTopLevelDomain:function(a){if("localhost"==a)return"localhost";for(var b=a.split("."),c=b.length,d=c,e=b[b.length-1].length,f;f=b[--d];)if(0>"ac,ad,ae,aero,af,ag,ai,al,am,an,ao,aq,ar,arpa,as,asia,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,biz,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cat,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,com,coop,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,edu,ee,eg,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gov,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,info,int,io,iq,ir,is,it,je,jm,jo,jobs,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mil,mk,ml,mm,mn,mo,mobi,mp,mq,mr,ms,mt,mu,museum,mv,mw,mx,my,mz,na,name,nc,ne,net,nf,ng,ni,nl,no,np,nr,nu,nz,om,org,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pro,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sy,sz,tc,td,tel,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,travel,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,xn--0zwm56d,xn--11b5bs3a9aj6g,xn--3e0b707e,xn--45brj9c,xn--80akhbyknj4f,xn--90a3ac,xn--9t4b11yi5a,xn--clchc0ea0b2g2a9gcd,xn--deba0ad,xn--fiqs8s,xn--fiqz9s,xn--fpcrj9c3d,xn--fzc2c9e2c,xn--g6w251d,xn--gecrj9c,xn--h2brj9c,xn--hgbk6aj7f53bba,xn--hlcj6aya9esc7a,xn--j6w193g,xn--jxalpdlp,xn--kgbechtv,xn--kprw13d,xn--kpry57d,xn--lgbbat1ad8j,xn--mgbaam7a8h,xn--mgbayh7gpa,xn--mgbbh1a71e,xn--mgbc0a9azcg,xn--mgberp4a5d4ar,xn--o3cw4h,xn--ogbpf8fl,xn--p1ai,xn--pgbs0dh,xn--s9brj9c,xn--wgbh1c,xn--wgbl6a,xn--xkc2al3hye2a,xn--xkc2dl3a5ee0h,xn--yfro4i67o,xn--ygbi2ammx,xn--zckzah,xxx,ye,yt,za,zm,zw".indexOf(f)||
f.length<e||d<c-2||0===d){for(a=[];d++<c-1;)a.push(b[d]);return"."+f+"."+a.join(".")}return"."+a},getUserAgent:function(a,b,c){try{a=a||navigator.userAgent;b=b||navigator.appName;c=c||navigator.appVersion;var d,e=a.match(/(opera|chrome|safari|firefox|msie|trident|crios)\/?\s*([\d\.]+)/i)||[];if(null!=(d=a.match(/OPR\/([\.\d]+)/i)))return"Opera "+d[1];if(null!=(d=a.match(/IEMobile\/([\.\d]+)/i)))return"IEMobile "+d[1];if(null!=(d=a.match(/Trident\/7.*rv:([\.\d]+)/i)))return"MSIE "+d[1];if(null!=(d=
a.match(/Edge\/([\.\w]+)/i)))return"Edge "+d[1];if(0==e.length){if(null!=(d=a.match(/AppleWebKit\/([\.\d]+)/i)))return"AppleWebKit "+d[1];if(null!=(d=a.match(/Darwin\/([\.\d]+)/i)))return"Darwin "+d[1];AMP.adTag.notifyError("unknown_ua")}(e=e[2]?[e[1],e[2]]:[b,c,"-?"])&&null!=(d=a.match(/version\/([\.\d]+)/i))&&(e[2]=d[1]);return e.join(" ")}catch(f){return AMP.adTag.notifyError("ua_failed"),""}},getQueryStringValue:function(a){try{for(var b=window.top.location.search.substring(1).split("&"),c=0;c<
b.length;c++){var d=b[c].split("=");if(decodeURIComponent(d[0])==a)return decodeURIComponent(d[1])}}catch(e){}return null},addEvent:function(a,b,c,d){if(a.addEventListener)return a.addEventListener(b,function(a){null!=c&&c(a)},d),!0;if(a.attachEvent)return a.attachEvent("on"+b,function(a){null!=c&&c(a)});a["on"+b]=function(){null!=c&&c()}},getMaxSearchTerms:function(){return 15},getVersion:function(){return"2.27"},createRequestId:function(){return"amp_"+l()},getUriScheme:function(){return document.location.protocol},
getBaseServiceUrl:function(a){var b="https:"==AMP.adTag.getUriScheme();"undefined"===typeof a||null===a?a="adtag":(a=AMP.adTag.findProp(a),a=null===a?"adtag":a.tag_id+".adtag");a="${domain}.admarketplace.net/ad_tag/ad_display.htm".replace("${domain}",a);return(b?"https://":"http://")+a},getBaseDefaultAdUrl:function(){return("https:"==AMP.adTag.getUriScheme()?"https://":"http://")+"static.ampxchange.com/adtag/v1/default_ads"},getBaseRetargetServiceUrl:function(a){return AMP.adTag.getBaseServiceUrl(a).replace("ad_display.htm",
"retarget/register.service")},decodeBase64:function(a){var b="",c,d,e,f,h,g=0;if("undefined"===typeof a||null===a)return"";for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");g<a.length;)c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),
c=c<<2|d>>4,d=(d&15)<<4|f>>2,e=(f&3)<<6|h,b+=String.fromCharCode(c),64!=f&&(b+=String.fromCharCode(d)),64!=h&&(b+=String.fromCharCode(e));a=b;b="";for(c=g=h=f=0;f<a.length;)h=a.charCodeAt(f),128>h?(b+=String.fromCharCode(h),f++):191<h&&224>h?(g=a.charCodeAt(f+1),b+=String.fromCharCode((h&31)<<6|g&63),f+=2):(g=a.charCodeAt(f+1),c=a.charCodeAt(f+2),b+=String.fromCharCode((h&15)<<12|(g&63)<<6|c&63),f+=3);return b},encodeModifiedBase64:function(a){var b="",c,d,e,f,h,g,k=0;a=a.replace(/\r\n/g,"\n");d=
"";for(e=0;e<a.length;e++)f=a.charCodeAt(e),128>f?d+=String.fromCharCode(f):(127<f&&2048>f?d+=String.fromCharCode(f>>6|192):(d+=String.fromCharCode(f>>12|224),d+=String.fromCharCode(f>>6&63|128)),d+=String.fromCharCode(f&63|128));for(a=d;k<a.length;)c=a.charCodeAt(k++),d=a.charCodeAt(k++),e=a.charCodeAt(k++),f=c>>2,c=(c&3)<<4|d>>4,h=(d&15)<<2|e>>6,g=e&63,isNaN(d)?h=g=64:isNaN(e)&&(g=64),b=b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$".charAt(f)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$".charAt(c)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$".charAt(g);return b},makeUrlSafe:function(a){try{return"undefined"===typeof a||null===a?"":encodeURIComponent(a.toString())}catch(b){return""}},stopTimeoutTimer:function(a){if("undefined"===typeof a||null===a||""===a)throw"ERR: requestId missing for stopTimeoutTimer";a=AMP.adTag.findProp(a);null!=a&&"undefined"!==typeof a._timeoutTimer&&null!=a._timeoutTimer&&
(window.clearTimeout(a._timeoutTimer),a._timeoutTimer=null)},makeJsonpRequest:function(a,b,c,d){var e=l(),f=a+"_"+e;window[f]=function(a,b){var d="amp_"+b.callback.split("_")[1];c(d,a,b)};var h="https:"==AMP.adTag.getUriScheme()?1:0,g=document.createElement("script");g.id=f;g.src=b+"&ssl="+h.toString()+"&callback="+f+"&_="+e;g.onerror=function(){d(a)};document.getElementsByTagName("head")[0].appendChild(g)},registerRetarget:function(a,b,c,d){var e=l(),f=a+"_"+e;window[f]=function(b,d){a="amp_"+a.split("_")[1];
c(a,b,d)};var h="https:"==AMP.adTag.getUriScheme()?1:0,g=document.createElement("script");g.id=f;g.src=b+"&ssl="+h.toString()+"&callback="+f+"&_="+e;g.onerror=function(){d(a)};document.getElementsByTagName("head")[0].appendChild(g)},constructDefaultAdUrl:function(a,b,c,d){var e="",e=b.toString()+"x"+c.toString(),f=encodeURIComponent(AMP.adTag.getVersion());return e="300x250"==e||"460x20"==e||"728x90"==e||"120x20"==e||"320x50"==e||"780x400"==e?AMP.adTag.getBaseDefaultAdUrl()+"/"+e+"/2.html?tid="+a+
"&v="+f+"&sub2="+d:"0"===b||"0"===c?AMP.adTag.getBaseDefaultAdUrl()+"/dynamic-dimension.html?tid="+a+"&size="+e+"&v="+f+"&sub2="+d:AMP.adTag.getBaseDefaultAdUrl()+"/unsupported-dimension.html?tid="+a+"&size="+e+"&v="+f+"&sub2="+d},displayDefaultAd:function(a){if("undefined"===typeof a||null===a||""===a)throw"ERR: requestId missing for displayDefaultAd";var b=AMP.adTag.findProp(a);if(null==b)AMP.adTag.debugLog(["ERR",a,"displayDefaultAd failed - no property found"]);else if("undefined"!==typeof b.passback_url&&
null!=b.passback_url&&""!=b.passback_url)AMP.adTag.passBack(a);else if("undefined"!==typeof b._adDisplayed&&null!=b._adDisplayed&&!0==b._adDisplayed)AMP.adTag.debugLog(["INFO",a,"ad already displayed, so ignore the rest"]);else{AMP.adTag.debugLog(["INFO",a,"default ad"]);AMP.adTag.stopTimeoutTimer(a);var c=AMP.adTag.getAdUnitIframe(a);null!=c?(c.src=AMP.adTag.constructDefaultAdUrl(b.tag_id,b.width,b.height,b.sub2),AMP.adTag.postprocess(a,!1)):AMP.adTag.debugLog(["INFO",a,"displayDefaultAd failed - no element found"])}},
passBack:function(a){if("undefined"===typeof a||null===a||""===a)throw"ERR: requestId missing for passback";AMP.adTag.debugLog(["INFO",a,"passback"]);AMP.adTag.stopTimeoutTimer(a);var b=AMP.adTag.findProp(a);if(null==b)AMP.adTag.debugLog(["ERR",a,"passback failed - no property found"]);else if("undefined"!==typeof b.passback_url&&null!==b.passback_url&&""!==b.passback_url)if("undefined"!==typeof b._adDisplayed&&null!=b._adDisplayed&&!0==b._adDisplayed)AMP.adTag.debugLog(["INFO",a,"ad already displayed, so ignore the rest"]);
else{-1!=b.passback_url.indexOf("[timestamp]")&&(b.passback_url=b.passback_url.replace("[timestamp]",(new Date).getTime().toString()));var c=AMP.adTag.makeUrlSafe(b.tracer_id);AMP.adTag.place1x1Pixel(["c=3","rid="+a,"tid="+b.tag_id.toString(),"tracer_id="+c,"sub2="+b.sub2]);c=AMP.adTag.getAdUnitIframe(a);null!=c?(c.src=b.passback_url,AMP.adTag.postprocess(a,!1)):AMP.adTag.debugLog(["INFO",a,"passback failed - no element found"])}},writeOut:function(a){document.write(a)},cloneProp:function(a){var b=
{},c;for(c in a)b[c]=a[c];return b},addPropToList:function(a,b){if("undefined"===typeof a||null===a||""===a)return null;b="undefined"===typeof b?amp_ad_properties:b;var c=AMP.adTag.cloneProp(b);amp_ad_properties_list.push([a,c]);return c},emptyPropList:function(){amp_ad_properties_list.length=0},findProp:function(a){for(var b=0;b<amp_ad_properties_list.length;b++){var c=amp_ad_properties_list[b][1];if(a===amp_ad_properties_list[b][0])return c}return null},setBlacklist:function(a,b){m[a.toString()]=
b},getIframeMarkup:function(a,b,c,d){0==b&&(b="100%");0==c&&(c="100%");return'<iframe id="'+a+'" src="" width="'+b+'" height="'+c+'" frameBorder="0" scrolling="no" marginwidth="0" marginheight="0"'+(' style="display:'+(d?"none":"block")+';"')+"></iframe>"},init:function(a,b){if("undefined"===typeof a||null===a||""===a)throw"ERR: requestId missing for init";b="undefined"===typeof b||null===b?amp_ad_properties:b;AMP.adTag.debugLog(["INFO",a,"init"]);b.width="undefined"===typeof b.width?0:b.width;b.height=
"undefined"===typeof b.height?0:b.height;if(!1!==b.iframe){if(null!=document.getElementById(a))return null;var c=AMP.adTag.getIframeMarkup(a,b.width,b.height,b.hideOnStartup);if(null!=b.element_id){var d=document.getElementById(b.element_id);if(null==d)return!1;d.innerHTML=c}else AMP.adTag.writeOut(c)}AMP.adTag.stopTimeoutTimer(a);b._timeoutTimer=window.setTimeout(function(){var b=AMP.adTag.findProp(a);null==b?AMP.adTag.debugLog(["ERR",a,"setTimeout handler failed - no property found"]):(AMP.adTag.debugLog(["INFO",
a,"timed out"]),"undefined"!==typeof b.preprocess&&null!==b.preprocess?(b.preprocess(a,!1),AMP.adTag.postprocess(a,!1)):AMP.adTag.displayDefaultAd(a))},2E3);b._adDisplayed=!1;return null!=document.getElementById(a)&&null!=b._timeoutTimer||!1===b.iframe?AMP.adTag.addPropToList(a,b):null},evalAsJson:function(a){return a.match(/^\[\{.*\}\]$/)?eval(a):null},preprocessQueryTerm:function(a){var b="",b=Math.floor((new Date).getTime()/1E3);if("object"===typeof a){for(var c=[],d=0;d<a.length&&!(15<=d);d++){var e,
f,h;if("object"===typeof a[d]){e=a[d].k;h=a[d].t;f=a[d].f;if("string"!==typeof e)continue;if("undefined"===typeof h||null===h)h=b;if("undefined"===typeof f||null===f)f=1}else"string"===typeof a[d]&&(e=a[d],h=b,f=1);e=e.toString().replace(/^\s+|\s+$/g,"");c.push('{"k":"'+e+'","t":'+h.toString()+',"f":'+f.toString()+"}")}b=0==c.length?"":"["+c.join(",")+"]"}else if("string"===typeof a)if(a.match(/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$]+$/))a=a.replace(/\-/g,"+").replace(/_/g,
"/").replace(/\$/g,"="),b=AMP.adTag.decodeBase64(a),b=AMP.adTag.preprocessQueryTerm(eval(b));else throw"invalid_mb64";else throw"unrecognized_qt_format";return b},preprocessKeyword:function(a){var b="",b=null,c=!1;a.match(/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_$]+$/)&&(b=a.replace(/\-/g,"+").replace(/_/g,"/").replace(/\$/g,"="),b=AMP.adTag.decodeBase64(b),b=AMP.adTag.evalAsJson(b),null!==b&&(c=!0));!1===c&&(b=AMP.adTag.evalAsJson(a));if(null!==b){var d=[];for(a=0;a<b.length;a++)if(c=
b[a].k,"undefined"!==typeof c&&null!=c&&(c=c.replace(/^\s+|\s+$/g,""),""!=c)){var e=b[a].t;if("undefined"!==typeof e&&null!=e){var f=b[a].f;"undefined"!==typeof f&&null!=f&&d.push({k:c,t:e,f:f})}}b=d.sort(function(a,b){return b.t-a.t});a=[];for(c=0;c<b.length&&!(15<=c);c++)a.push('{"k":"'+b[c].k+'","t":'+b[c].t+',"f":'+b[c].f+"}");b=0==a.length?"":"["+a.join(",")+"]"}else{b=a.split(",");d=[];for(a=0;a<b.length;a++)c=b[a].replace(/^\s+|\s+$/g,""),""!=c&&d.push(c);b=d.slice(-15).join(",")}return b},
parseRequestIdFromAdHtml:function(a){var b="";a=a.match(/<meta\s{1,}name="requestID"\s{1,}content="(.*?)"/);null!=a&&(b=a[1]);return b},getAdUnitIframe:function(a){var b=AMP.adTag.findProp(a);return null==b?(AMP.adTag.debugLog(["ERR",a,"getAdUnitIframe failed - no property found"]),!1):"undefined"===typeof b.targetFrame||null===b.targetFrame?document.getElementById(a):b.targetFrame.document.getElementById(a)},getActualUnitHeight:function(a){a=AMP.adTag.getAdUnitIframe(a);if(null==a)return 0;a=a.contentDocument||
a.contentWindow.document;var b=a.documentElement||a.body;return"Microsoft Internet Explorer"==navigator.appName?a.body.scrollHeight:b.offsetHeight},getDomAttributeValue:function(a,b){if("undefined"===typeof a||null===a||"undefined"===typeof b||null==b)return null;var c=null;try{c=a.getAttribute(b)}catch(d){c=null}return""===c?null:c},makeAdUnitVisible:function(a){a=AMP.adTag.getAdUnitIframe(a);if(null==a)return!1;a.style.display="block";return!0},removeAdUnit:function(a){var b=AMP.adTag.findProp(a);
null==b?AMP.adTag.debugLog(["ERR",a,"removeAdUnit failed - no property found"]):(a=document.getElementById(null!=b.element_id?b.element_id:a),null!=a&&null!=a.parentNode&&a.parentNode.removeChild(a))},setTargetFrameByName:function(a,b){var c=AMP.adTag.findProp(a);null==c?AMP.adTag.debugLog(["ERR",a,"setTargetFrameByName failed - no property found"]):c.targetFrame=window.top.frames[b]},sendTargetingData:function(a,b){var c=AMP.adTag.findProp(a);if(null==c)AMP.adTag.debugLog(["ERR",a,"sendTargetingData failed - no property found"]);
else{var d=AMP.adTag.makeUrlSafe(c.tracer_id);AMP.adTag.place1x1Pixel(["rid="+a,"tid="+c.tag_id.toString(),"tracer_id="+d,"td="+b.toString(),"sub2="+c.sub2])}},getDynamicVariables:function(a){var b=[];try{for(var c in a){var d={};switch(c){case "target_window":d.toReplace="\\${targetWindow}",d.replaceWith=a.target_window,d.defaultValue="_blank",b.push(d)}}return b}catch(e){return AMP.adTag.debugLog(["ERROR",e.message,"getDynamicVariables"]),b}},populateDynamicVariables:function(a,b){try{for(var c=
0;c<b.length;c++){var d=0,e=RegExp(b[c].toReplace,"g"),d=null===a.match(e)?0:a.match(e).length;a=a.replace(e,"undefined"===typeof b[c].replaceWith?b[c].defaultValue:b[c].replaceWith);b[c].replaced=d}return a}catch(f){return AMP.adTag.debugLog(["ERROR",f.message,"populateDynamicVariables"]),a}},retrieveRealClickUrl:function(a,b){var c="";try{if(void 0!==typeof a&&0<a.length&&0===a.indexOf("http://admarketplace.com/adtag?")&&(c=a.replace("http://admarketplace.com/adtag?",""),c=decodeURIComponent(c),
"undefined"!==typeof b))return eval("window."+b+"('"+c+"')"),""}catch(d){return AMP.adTag.debugLog(["ERROR",d.message,"retrieveRealClickUrl"]),""}return c},modifyClickUrlBehaviour:function(a,b){for(var c=a.getElementsByTagName("a"),d=0;d<c.length;d++)!0===b.inapp_url_prefix&&(c[d].href="http://admarketplace.com/adtag?"+encodeURIComponent(c[d].href)),!0===b.use_window_open&&AMP.adTag.addEvent(c[d],"click",function(a){a.preventDefault();window.open("undefined"===typeof window.event?a.currentTarget.href:
window.event.srcElement.href,b.target_window,"location=yes,closebuttoncaption=Done")})},displayAd:function(a,b,c,d){d=AMP.adTag.findProp(a);if(null==d)AMP.adTag.debugLog(["ERR",a,"displayAd failed - no property found"]);else{if("undefined"===typeof b||null===b)b=d._rcvad;if("undefined"===typeof c||null===c)c=d._rcvinfo;AMP.adTag.stopTimeoutTimer(a);if("undefined"!==typeof d._adDisplayed&&null!==d._adDisplayed&&!0==d._adDisplayed)AMP.adTag.debugLog(["INFO",a,"ad already displayed, so ignore the rest"]);
else try{var e=AMP.adTag.decodeBase64(b),e=e.replace(/^\s+/g,""),f=AMP.adTag.getDynamicVariables(d);0<f.length&&(e=AMP.adTag.populateDynamicVariables(e,f));var h=AMP.adTag.getAdUnitIframe(a);if(null!=h)if(!0==c.defaultAd&&"undefined"!==typeof d.passback_url&&null!=d.passback_url&&""!=d.passback_url)AMP.adTag.passBack(a);else{var g=h.contentDocument||h.contentWindow.document;g.write(e);!0!==d.use_window_open&&!0!==d.inapp_url_prefix||AMP.adTag.modifyClickUrlBehaviour(g,d);g.close();var k=g.getElementsByTagName("body")[0];
AMP.adTag.getDomAttributeValue(k,"data-unit-width");AMP.adTag.getDomAttributeValue(k,"data-unit-height");if("true"===AMP.adTag.getDomAttributeValue(k,"data-unit-auto-fit")){AMP.adTag.addEvent(window,"resize",function(){var b=AMP.adTag.getActualUnitHeight(a);h.style.height=b.toString()+"px"});var l=AMP.adTag.getDomAttributeValue(k,"data-unit-auto-fit-delay")||10;window.setTimeout(function(){var b=AMP.adTag.getActualUnitHeight(a);h.style.height=b.toString()+"px"},l)}var n=AMP.adTag.makeUrlSafe(d.tracer_id);
!0==c.defaultAd?(AMP.adTag.place1x1Pixel(["c=4","rid="+a,"tid="+d.tag_id.toString(),"tracer_id="+n,"sub2="+d.sub2]),AMP.adTag.debugLog(["INFO",a,"default ad served"])):AMP.adTag.debugLog(["INFO",a,"ad served"]);if(!1==c.defaultAd&&(1==c.cookieAction||2==c.cookieAction)){b="";try{b=AMP.adTag.parseRequestIdFromAdHtml(e),AMP.adTag.debugLog(["INFO",a,"backend request ID",b])}catch(m){}try{AMP.adTag.registerRetarget(a,AMP.adTag.getBaseRetargetServiceUrl(a)+"?reqid="+b+"&tracer_id="+n,function(a,b,c){},
function(){})}catch(r){}}try{AMP.adTag.shouldEnableClickReferrerWorkaround(a)&&AMP.adTag.doClickReferrerWorkaround(a)}catch(s){AMP.adTag.notifyError("clk_ref_workaround_failed",a,d.tag_id.toString(),d.tracer_id,d.sub2)}AMP.adTag.postprocess(a,!c.defaultAd)}}catch(p){AMP.adTag.debugLog(["ERR",a,p.message]),AMP.adTag.displayDefaultAd(a)}}},getMetaTagContent:function(a,b){try{for(var c=document.getElementById(a),d=(c.contentDocument||c.contentWindow.document).getElementsByTagName("head")[0].getElementsByTagName("META"),
c=0;c<d.length;c++)if(AMP.adTag.getDomAttributeValue(d[c],"name")===b)return AMP.adTag.getDomAttributeValue(d[c],"content");return null}catch(e){return null}},containsUserAgent:function(a,b){for(var c=b.split(","),d=a.toLowerCase(),e=0;e<c.length;e++)if(0===d.indexOf(c[e].toLowerCase()))return!0;return!1},shouldEnableClickReferrerWorkaround:function(a){a=AMP.adTag.getMetaTagContent(a,"click-referrer-workaround-ua");return"undefined"!==typeof a&&null!==a&&0<a.length?(a=a.toLowerCase(),"all"===a?!0:
AMP.adTag.containsUserAgent(AMP.adTag.getUserAgent(),a)):!1},getElementByIdTraversingAncestors:function(a){for(var b=window;b;){var c=b.document.getElementById(a);if("undefined"!==typeof c&&null!==c)return c;if(window.top===b)break;b=b.parent}return null},doClickReferrerWorkaround:function(a){a=document.getElementById(a);a=(a.contentDocument||a.contentWindow.document).getElementsByTagName("body")[0].getElementsByTagName("A");for(var b=0;b<a.length;b++)if("ampAdClickUrl"===AMP.adTag.getDomAttributeValue(a[b],
"data-clickurl")){var c="amp-clk-"+l();a[b].setAttribute("data-clickurl-id",c);var d=window.parent.document.body,e=document.createElement("A");e.id=c;e.href=a[b].href;e.style.position="absolute";e.style.top="0px";e.style.left="0px";e.style.width="0px";e.style.height="0px";e.target=a[b].target;d.appendChild(e);AMP.adTag.addEvent(a[b],"click",function(a){var b=AMP.adTag.getDomAttributeValue("undefined"===typeof window.event?a.currentTarget:window.event.srcElement,"data-clickurl-id"),b=AMP.adTag.getElementByIdTraversingAncestors(b);
null!==b&&(a.preventDefault(),AMP.adTag.simulateClick(b))})}},simulateClick:function(a){var b;document.createEvent&&(b=document.createEvent("MouseEvents"),b.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null));b?a.dispatchEvent(b):a.click&&a.click()},place1x1Pixel:function(a){try{if("undefined"===typeof a||null===a||1>a.length)return null;for(var b="",c=0;c<a.length;c++){var d=a[c].split("=");2===d.length&&(d[1]=encodeURIComponent(d[1]),a[c]=d.join("="));b=c+1===a.length?b+a[c]:b+(a[c]+
"&")}var e=document.createElement("img"),f="https:"==AMP.adTag.getUriScheme()?"https://":"http://";e.src=f+"imp.admarketplace.net/imp?type=adtag&"+b+"&v="+encodeURIComponent(AMP.adTag.getVersion())+"&rnd="+l();e.style.position="absolute";e.style.top="0px";e.style.left="0px";e.style.width="1px";e.style.height="1px";document.getElementsByTagName("body")[0].appendChild(e);return e}catch(h){return null}},notifyError:function(a,b,c,d,e){try{if("undefined"===typeof a||null===a)a="";if("undefined"===typeof b||
null===b)b="";if("undefined"===typeof c||null===c)c="";if("undefined"===typeof e||null===e)e="";d=AMP.adTag.makeUrlSafe(d);AMP.adTag.place1x1Pixel(["tid="+c,"err="+a,"rid="+b,"tracer_id="+d,"sub2="+e]);AMP.adTag.debugLog(["ERR",b,a])}catch(f){}},postprocess:function(a,b,c){var d=AMP.adTag.findProp(a);if(null==d)AMP.adTag.debugLog(["ERR",a,"postprocess failed - no property found"]);else if(b&&AMP.adTag.makeAdUnitVisible(a),d._adDisplayed=!0,"undefined"!==typeof d.oncomplete&&null!==d.oncomplete)d.oncomplete(a,
b,c)},handleFailedJsonp:function(a){var b="",c="",d="",e=AMP.adTag.findProp(a);null!=e&&(b=e.tag_id,c=e.tracer_id,d=e.sub2);AMP.adTag.stopTimeoutTimer(a);AMP.adTag.notifyError("jsonp_failed",a,b,c,d);AMP.adTag.debugLog(["ERR",a,"JSONP failed"]);"undefined"!==typeof e.preprocess&&null!==e.preprocess?(e.preprocess(a,!1),AMP.adTag.postprocess(a,!1)):AMP.adTag.displayDefaultAd(a)},handleSuccessfulJsonp:function(a,b,c){var d=AMP.adTag.findProp(a);null==d?AMP.adTag.debugLog(["ERR",a,"displayAd failed - no property found"]):
(AMP.adTag.stopTimeoutTimer(a),"undefined"!==typeof d._adDisplayed&&null!==d._adDisplayed&&!0==d._adDisplayed?AMP.adTag.debugLog(["INFO",a,"ad already displayed, so ignore the rest"]):(d._rcvad=b,d._rcvinfo=c,"undefined"!==typeof d.preprocess&&null!==d.preprocess?d.preprocess(a,!c.defaultAd):AMP.adTag.displayAd(a,b,c)))},populateParams:function(a,b){try{for(var c="m-iostrack m-idfa m-anid-sha1 g-latlong g-cc g-pc m-vendor m-model m-operator m-network ua ip rfr ptype pubuid tracer_id sub2".split(" "),
d=0;d<c.length;d++){var e=b[c[d]];"undefined"!==typeof e&&""!==e&&null!==e&&0<e.toString().trim().length&&(a+="&"+c[d]+"="+encodeURIComponent(e))}return a}catch(f){return AMP.adTag.notifyError("invalid_params"),a}},requestAd:function(a,b){if("undefined"===typeof a||null===a||""===a){if("undefined"===typeof amp_ad_properties||null===amp_ad_properties||""===amp_ad_properties){var c="no_prop";try{var d=AMP.adTag.getTopLevelDomain(window.top.document.domain);"localhost"===d&&(d=".localhost");c+=d}catch(e){}AMP.adTag.notifyError(c);
return}a=amp_ad_properties}a.target_window="string"===typeof a.target_window&&0<a.target_window.length?a.target_window:"_blank";AMP.adTag.debugLog(["INFO",AMP.adTag.getUserAgent()]);try{"true"===AMP.adTag.getQueryStringValue("amp_debug")&&(a._debug=!0)}catch(f){}if("undefined"===typeof b||null===b||""===b)b=AMP.adTag.createRequestId();c=AMP.adTag.makeUrlSafe(a.tracer_id);if("undefined"===typeof a.sub2||null===a.sub2)a.sub2="";AMP.adTag.place1x1Pixel(["c=1","rid="+b,"tid="+a.tag_id.toString(),"tracer_id="+
c,"sub2="+a.sub2]);c=AMP.adTag.init(b,a);if("undefined"===typeof c||null===c||!1===c)AMP.adTag.notifyError("init_failed",b,a.tag_id.toString(),a.tracer_id,a.sub2);else{try{if(1===m[c.tag_id.toString()]){AMP.adTag.debugLog(["INFO",b,c.tag_id,"blacklisted"]);"undefined"!==typeof c.passback_url&&null!=c.passback_url&&""!=c.passback_url?AMP.adTag.passBack(b):AMP.adTag.displayDefaultAd(b);return}}catch(h){AMP.adTag.notifyError("invalid_blacklist",b,a.tag_id.toString(),a.tracer_id,a.sub2),AMP.adTag.debugLog(["ERR",
b,"invalid blacklist"])}d=AMP.adTag.getBaseServiceUrl(b)+"?tag_id="+c.tag_id+"&jsv="+encodeURIComponent(AMP.adTag.getVersion())+"&w="+c.width+"&h="+c.height;if("undefined"!==typeof c.qt&&null!==c.qt){var g="string"===typeof c.qt?c.qt:"unrecognized_qt_format";try{g=AMP.adTag.preprocessQueryTerm(c.qt)}catch(k){AMP.adTag.notifyError(k,b,c.tag_id.toString(),c.tracer_id,c.sub2)}d+="&kw="+encodeURIComponent(g)}else if("undefined"!==typeof c.keywords&&null!==c.keywords){g=c.keywords;try{g=AMP.adTag.preprocessKeyword(c.keywords)}catch(l){AMP.adTag.notifyError("invalid_keywords_format",
b,c.tag_id.toString(),c.tracer_id,c.sub2)}d+="&kw="+encodeURIComponent(g)}AMP.adTag.debugLog(["INFO",b,c.tag_id,c.sub2,d]);d=AMP.adTag.populateParams(d,c);AMP.adTag.makeJsonpRequest(b,d,function(a,b,c){AMP.adTag.handleSuccessfulJsonp(a,b,c)},function(a){AMP.adTag.handleFailedJsonp(a)})}}}}();
if("undefined"!==typeof AMP.adTagCmd){for(;0<AMP.adTagCmd.length;)try{AMP.adTagCmd.shift().call()}catch(ex$$7){AMP.adTag.notifyError("cmd_queue_call_failed")}AMP.adTagCmd.push=function(l){try{l.call()}catch(m){AMP.adTag.notifyError("cmd_queue_call_failed")}}}else"undefined"!==typeof AMP_ADTAG_DYNAMIC&&!1!==AMP_ADTAG_DYNAMIC||AMP.adTag.requestAd();