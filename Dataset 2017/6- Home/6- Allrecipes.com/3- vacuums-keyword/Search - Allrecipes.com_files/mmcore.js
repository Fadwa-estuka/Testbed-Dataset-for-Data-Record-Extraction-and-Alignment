/*! Copyright ? 2015, 2016, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.9 */
/*v1.9.20.8757*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(c,E){function J(a){this.enableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(d)||(d=d.split(","),d.push(c),a.setParam("un",d.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(d)&&(d=d.replace(new RegExp("(^|,)"+c+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),a.setParam("un",d,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}function R(a){var c=
this,d=a.domain,x=a.secure,q=encodeURIComponent,v=decodeURIComponent;c.set=function(a,k,l,v){v||(k=q(k));a=q(a)+"="+k+";domain="+d+";path=/";l?(k=new Date,k.setTime(k.getTime()+864E5*l),l=";expires="+k.toGMTString()):l="";document.cookie=a+l+(x?";secure":"");return c};c.remove=function(a){c.set(a,"",-1);return c};c.get=function(a,c){var d=new RegExp("(?:^|; )"+q(a).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),d=(document.cookie.match(d)||[,""])[1];return c?d:v(d)}}function W(a){function c(a){for(var B=
{},d="",m=0,f;f=w.get(a+m++,!0);)d+=f;d=decodeURIComponent(d);try{B=JSON.parse(d)}catch(k){}return B}function d(){t=c(G);k=c(H);var a=(new Date).getTime(),d=t[p],z;for(z in d)d.hasOwnProperty(z)&&v(d[z]).e<=a&&delete d[z];q();t[p]=t[p]||{};k[p]=k[p]||{}}function x(a,c,d){c=JSON.stringify(c);var k="{}"===c,f=0;for(c=encodeURIComponent(c);w.get(a+f,!0);)w.remove(a+f++);if(!k)for(f=0;k=c.substr(3E3*f,3E3);)w.set(a+f++,k,d==E?365:d,!0)}function q(){x(G,t);x(H,k,0)}function v(a){var c=a.indexOf("|");return{v:JSON.parse(a.substring(c+
1,a.length)),e:a.substring(0,c)}}if(!/^((cookie)|(cookie-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var t,k,l=a.cprefix+".",G=l+"store.p.",H=l+"store.s.",w=new R({domain:a.domain,secure:"cookie-secure"===a.type}),p=a.namespace||"def";this.get=function(a){d();var c=t[p],l=k[p],m={},f;for(f in c)c.hasOwnProperty(f)&&(m[f]=c[f]);for(f in l)l.hasOwnProperty(f)&&(m[f]=l[f]);if(!a){a={};for(var q in m)m.hasOwnProperty(q)&&(a[q]=v(m[q]).v);return a}return(m[a]?v(m[a]):
0).v};this.set=function(a,c,l){d();var m=t[p],f=k[p];delete m[a];delete f[a];null!==c&&c!==E&&(l?(f=new Date,f.setTime(f.getTime()+864E5*l),c=f.getTime()+"|"+JSON.stringify(c),m[a]=c):f[a]="0|"+JSON.stringify(c));q();return this};this.removeAll=function(){d();t[p]={};k[p]={};q();return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);w.set(l+"tst",a,10);a=w.get(l+"tst",!0)===a?1:0;w.remove(l+"tst");return a};d()}function L(a){function F(b,e){return b.hasOwnProperty(e)&&"string"===
typeof b[e]}function d(b,e,g){try{"function"===typeof b&&b.apply(e,g)}catch(a){M&&M.log(a)}}function x(b,e){if(y[b])for(var g=y[b].length-1;0<=g;g--)y[b][g].call({},e)}function q(b){C="boolean"===typeof b?b:!1}function v(b){if(C){var e=document.getElementsByTagName("head")[0];e.insertBefore(b,e.lastChild)}else document.write(b.outerHTML||(new XMLSerializer).serializeToString(b))}function t(b,e){var g=document.createElement("script");g.type="text/javascript";g.id=e;g.src=b;return g}function k(b){if("object"!==
typeof b)return b;if(b.constructor===Array)return b.join(";");var e=[],g;for(g in b)if(b.hasOwnProperty(g))if(b[g].constructor===Array)for(var a in b[g])b[g].hasOwnProperty(a)&&e.push(g+"="+b[g][a]);else e.push(g+"="+encodeURIComponent(b[g]));return e.join(";")}function l(b){b=b?z(b):{};var e={};"string"===typeof b["mm-dlp-api"]&&(e.fv={ref:b["original-ref"].substring(0,256),url:b["original-url"].substring(0,1024)},e.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(e.fv.url)[0]);for(var a in b){var u=b[a];
b.hasOwnProperty(a)&&"mmcore."===a.substring(0,7)&&(e[a.substring(7)]=u)}return e}function G(){var b="mmRequestCallbacks["+D+"]",e={},g=c.screen;e.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:g.width,scrh:g.height,clrd:g.colorDepth,cok:r[n.persistent].testStorage()};e.lver="1.9";e.jsncl=b;e.ri=D;e.lto=-(new Date).getTimezoneOffset();return e}function H(b,e){var g=b&&b.Packages||[],u=g.length;if(0<u){c.mmInitCallback=function(a){a(h,b,{skipResponseProcessing:!0,
skipPersistentData:!0,useLoaderStorage:!0,debug:X});0===--u&&(e(),c.mmInitCallback=E)};for(var d=0;d<g.length;d++){var Y=t(0===g[d].indexOf("//")?g[d]:a.baseContentUrl+g[d],"mmpack."+d);v(Y)}}else e()}function w(b){b=document.getElementById(b);b.parentNode?b.parentNode.removeChild(b):b&&b.removeAttribute("src")}function p(b,e,a){b=(S[b-1]=e)&&e.PersistData||[];for(var u=b.length;u--;)h.setParam(b[u].Name,b[u].Value,n.persistent,b[u].Expiration);if(F(e,"mmcoreResponse")&&c.hasOwnProperty("mmcore"))try{Function(e.mmcoreResponse).call(c)}catch(d){M.log(d)}x("response",
e);a(!!e);x("responseExecuted",e)}function J(b,e){var a=t(b,"mmrequest."+D);(function(b,e){c.mmRequestCallbacks[b]=function(d){w(a.id);1===b?H(d,function(){p(b,d,e);C=!0;var a=l(document.location.search).origin;a&&c.parent&&c.parent.postMessage&&c.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),a)}):p(b,d,e);delete c.mmRequestCallbacks[b]}})(D,e);a.setAttribute("onerror","window['mmRequestCallbacks']["+D+"](false);");v(a);D++}function B(){var b={};return{get:function(e){return e?
b[e]:b},set:function(e,a){b[e]=a},removeAll:function(){b={}}}}function z(b){b=b.split(/\?|&/);for(var e={},a,c,d=0;d<b.length;d++)if(b[d]){a=b[d].split("=");try{c=decodeURIComponent(a[1]||"")}catch(h){c=a[1]||""}e[a[0]]=c}return e}function m(b){function a(b,e,h){var f,l;if(f=d[b]){c[b]=e;f=f.split(/;/);for(var k=0;k<f.length;k++)l=f[k].split("="),(b=l[0].replace(/^\s+|\s+$/gm,""))&&h(e,b,l[1]||"")}}var c={},d=z(b);I||(c.pageid=d.pageid);c.jsver=d.jsver;a("uv",{},function(b,a,e){b.hasOwnProperty(a)||
(b[a]=[]);b[a].push(e)});a("uat",{},function(b,a,e){b[a]=decodeURIComponent(e)});a("ids",{},function(b,a,e){e&&(b[a]=decodeURIComponent(e))});a("rul",[],function(b,a,e){b.push(a)});return c}function f(){if(c.hasOwnProperty("mmcore")){var b=c.mmcore;b.server=a.srv;h.CGRequestInternal=h.CGRequest;h.CGRequest=function(a,e){I=!0;N=a;O=e;b.CGRequest()};var e=b._Tag;b._Tag=function(c){if(-1==c.indexOf(a.srv))e.apply(b,arguments);else{b._Clear.call(b);var d=h.mergeParams(O,m(c));T=C;I||(C=b._async);h.CGRequestInternal(N,
d);C=T;O=N=E;I=!1}};var d=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||d.apply(b,arguments)}}}function K(b){return b||c.location.hostname.replace(/^www\./i,"")}function P(b,a,c){var d="";0<a.length&&"."!=a.substring(a.length-1)&&(d=".");a=a+d+c;d=b.get(a);"string"===typeof d&&d&&(h.setParam(c,d,n.persistent,365),b.remove(a))}function U(b){var a;a=c.hasOwnProperty("mmcore")&&c.mmcore.cookie_domain?c.mmcore.cookie_domain:F(b,"mmcoreCookieDomain")?b.mmcoreCookieDomain:b.cookie_domain;
b=c.hasOwnProperty("mmcore")&&c.mmcore.cprefix?c.mmcore.cprefix:F(b,"mmcoreCprefix")?b.mmcoreCprefix:b.cprefix+".";a=new R({domain:K(a)});P(a,b,"pd");P(a,b,"srv");P(a,"","mmid")}function L(b){var a=h.getParam,c=function(b,a,e,c){h.setParam(b,a,"undefined"===typeof e?1:e,c)};d(b.beforeInit,{},[a,c,{getParam:a,setParam:c,disable:function(){A[n.page].set("disabled",1)},setAsync:q}]);V()||(h.on("request",function(){d(b.beforeRequest,{},[a,c])}),h.on("response",function(u){d(b.afterResponse,{},[a,c,u])}),
h.on("responseExecuted",function(u){d(b.afterResponseExecution,{},[a,c,u])}))}function Q(b){c.mmcoreInitCallback=function(a){U(b);f();h.CGRequest(function(){"function"===typeof a&&a.apply(c.mmcore,arguments)},{});delete c.mmcoreInitCallback};"local"!==b.mmcoreUrl&&v(t(b.mmcoreUrl,"mmcoreIntegration"))}function V(){return 1==A[n.persistent].get("disabled")||1==A[n.page].get("disabled")}this.version="1.9";var h=this,S=[],D=1,C=!1,y={},X={},r=[],A=[],n={persistent:0,deferredRequest:1,request:2,page:3},
N,O,T,I=!1;this.baseStorage=function(b){return new W({type:a.storageType,namespace:b,domain:K(a.cookie_domain),cprefix:a.cprefix})};this.baseStorage.storeStrategy=n;this.baseStorage.isSecure="cookie-secure"===a.storageType;this.mergeParams=function(b,a){b="undefined"===typeof b?{}:b;a="undefined"===typeof a?{}:a;if("object"!==typeof a)return a;var c={},d;if("object"===typeof b)for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);for(d in a)a.hasOwnProperty(d)&&(c[d]=c[d]?c[d].constructor===Array&&a[d].constructor===
Array?c[d].concat(a[d]):h.mergeParams(c[d],a[d]):a[d]);return c};this.CGRequest=function(b,d){b=b||function(){};d=d||{};c.mmRequestCallbacks=c.mmRequestCallbacks||{};x("request");var g=h.mergeParams(G(),h.mergeParams(h.mergeParams(r[n.persistent].get(),h.mergeParams(r[n.deferredRequest].get(),h.mergeParams(r[n.page].get(),r[n.request].get()))),l(location.search))),f=[],q=a.srv,g=h.mergeParams(g,d),m;for(m in g)g.hasOwnProperty(m)&&f.push(encodeURIComponent(m)+"="+encodeURIComponent(k(g[m])));r[n.deferredRequest].removeAll();
r[n.request].removeAll();J(q+f.join("&"),b);return this};this.getResponses=function(){return S};this.setParam=function(a,c,d,f){r[d].set(a,c,f);return this};this.getParam=function(a,c){return r[c].get(a)};this.removeParam=function(a,c){r[c].set(a,null,-1);return this};this.on=function(a,c){y[a]&&y[a].push(c);return h};this.disable=function(){A[n.persistent].set("disabled",1,0);return this};this.enable=function(){A[n.persistent].set("disabled",null,-1);return this};(function(a){function d(){L(a);V()||
(F(a,"mmcoreUrl")&&a.mmcoreUrl?Q(a):(U(a),h.CGRequest(E,{})))}for(var g in a)a.hasOwnProperty(g)&&(h[g]=a[g]);var f=l(document.location.search);if(1!=f.disabled){h.calcCookieDomain=K(h.cookie_domain);q(a.async);A[n.persistent]=h.baseStorage("ls");A[n.page]=B();r[n.persistent]=h.baseStorage("mmparams.p");r[n.deferredRequest]=h.baseStorage("mmparams.d");r[n.request]=B();r[n.page]=B();y.request=[];y.response=[];y.responseExecuted=[];g=l(document.referrer).pruh;var f=f.pruh,k=c.mmpruh,m=h.getParam("pruh",
0),p=(g?g+",":"")+(f?f+",":"")+(k?k+",":"")+(m?m:"");p?(c.mmInitCallback=function(a){a(h,p,d)},v(t(a.baseContentUrl+"utils/pruh.js","MM.PRUH"))):d()}})(a);return this}if(!c.mmsystem){var M=c.console||{log:function(){},error:function(){}},Q=new L({
 storageType:'cookie',
 cprefix:'mmapi',
 domain:'allrecipes.com',
 baseContentUrl:'//service.maxymiser.net/platform/us/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0] || ('.' + (location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5us/?',
 async:false,
 mmcoreUrl:'',
 mmcoreCookieDomain:'',
 mmcoreCprefix:'',
 beforeInit:function(getParam,setParam){},
 beforeRequest:function(getParam,setParam){},
 afterResponse:function(getParam,setParam,genInfo){},
 afterResponseExecution:function(getParam,setParam,genInfo){}
});c.mmsystem=new J(Q)}})(window);
