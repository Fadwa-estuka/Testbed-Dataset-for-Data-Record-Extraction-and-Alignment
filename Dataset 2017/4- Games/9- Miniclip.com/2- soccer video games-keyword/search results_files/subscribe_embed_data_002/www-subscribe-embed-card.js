(function(){var k=this;function l(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function p(a){return"string"==typeof a}
function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return q.apply(null,arguments)}
function r(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&Object.prototype.hasOwnProperty.call(d,e)?d=d[e]:d=d[e]={}:d[e]=b}
;var da=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ea(a,b){return a<b?-1:a>b?1:0}
;var fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ga=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ha=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var n=g[h];
b.call(c,n,h,a)&&(e[f++]=n)}return e};
function ia(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=m(d);if("array"==e||"object"==e&&"number"==typeof d.length){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ja(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function ka(a,b){var c;a.classList?c=a.classList.contains(b):(c=ja(a),c=0<=fa(c,b));return c}
function ma(a,b){a.classList?a.classList.add(b):ka(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function na(a,b){a.classList?a.classList.remove(b):ka(a,b)&&(a.className=ha(ja(a),function(a){return a!=b}).join(" "))}
;var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<oa.length;f++)c=oa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var t;a:{var qa=k.navigator;if(qa){var ra=qa.userAgent;if(ra){t=ra;break a}}t=""}function u(a){return-1!=t.indexOf(a)}
;function v(a,b){this.b=a;this.a=b}
v.prototype.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};
v.prototype.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};
v.prototype.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};function sa(a,b){var c=ta;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var ua=u("Opera"),x=u("Trident")||u("MSIE"),va=u("Edge"),wa=u("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),xa=-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge");function ya(){var a=k.document;return a?a.documentMode:void 0}
var za;a:{var Aa="",Ba=function(){var a=t;if(wa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(va)return/Edge\/([\d\.]+)/.exec(a);if(x)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xa)return/WebKit\/(\S+)/.exec(a);if(ua)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ba&&(Aa=Ba?Ba[1]:"");if(x){var Ca=ya();if(null!=Ca&&Ca>parseFloat(Aa)){za=String(Ca);break a}}za=Aa}var Da=za,ta={};
function Ea(a){sa(a,function(){for(var b=0,c=da(String(Da)).split("."),d=da(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=ea(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||ea(0==g[2].length,0==h[2].length)||ea(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var Fa;var Ga=k.document;Fa=Ga&&x?ya()||("CSS1Compat"==Ga.compatMode?parseInt(Da,10):5):void 0;var Ha;if(!(Ha=!wa&&!x)){var Ia;if(Ia=x)Ia=9<=Number(Fa);Ha=Ia}Ha||wa&&Ea("1.9.1");x&&Ea("9");function Ja(){var a=document;return p("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;function Ka(a){var b=a.offsetWidth,c=a.offsetHeight,d=xa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}x&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new v(e.right-e.left,e.bottom-e.top)}return new v(b,c)}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var A=window,B=document,La=A.location;function Ma(){}
var Na=/\[native code\]/;function C(a,b,c){return a[b]=a[b]||c}
function Oa(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Pa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function D(){var a;if((a=Object.create)&&Na.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var E=C(A,"gapi",{});var Qa=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",Qa);var F;F=C(A,"___jsl",D());C(F,"I",0);C(F,"hel",10);function Ra(){var a=La.href,b;if(F.dpo)b=F.h;else{b=F.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Sa(a){var b=C(F,"PQ",[]);F.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ta(a){return C(C(F,"H",D()),a,D())}
;var J=C(F,"perf",D());C(J,"g",D());var Ua=C(J,"i",D());C(J,"r",[]);D();D();function K(a,b,c){b&&0<b.length&&(b=Va(b),c&&0<c.length&&(b+="___"+Va(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=C(Ua,"_p",D()),C(b,c,D())[a]=(new Date).getTime(),b=J.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Va(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Wa=D(),L=[];function M(a){throw Error("Bad hint"+(a?": "+a:""));}
L.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?F[b]=C(F,b,[]).concat(c):C(F,b,c)}if(b=a.u)a=C(F,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Xa=/^(\/[a-zA-Z0-9_\-]+)+$/,Ya=[/\/amp\//,/\/amp$/,/^\/amp$/],Za=/^[a-zA-Z0-9\-_\.,!]+$/,$a=/^gapi\.loaded_[0-9]+$/,ab=/^[a-zA-Z0-9,._-]+$/;function bb(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Wa[f],h=null;g?h=g(e,b,c,d):M("no hint processor for: "+f);h||M("failed to generate load url");b=h;c=b.match(cb);(d=b.match(db))&&1===d.length&&eb.test(b)&&c&&1===c.length||M("failed sanity: "+a);return h}
function fb(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=gb(a);$a.test(c)||M("invalid_callback");b=hb(b);d=d&&d.length?hb(d):null;return[encodeURIComponent(a.D).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.o?"/am="+e(a.o):"",a.A?"/rs="+e(a.A):"",a.C?"/t="+e(a.C):"","/cb=",e(c)].join("")}
function gb(a){"/"!==a.charAt(0)&&M("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))M("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Xa.test(b)||M("invalid_prefix");c=0;for(d=Ya.length;c<d;++c)Ya[c].test(b)&&M("invalid_prefix");c=O(a,"k",
!0);d=O(a,"am");e=O(a,"rs");a=O(a,"t");return{D:b,version:c,o:d,A:e,C:a}}
function hb(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ab.test(e)&&b.push(e)}return b.join(",")}
function O(a,b,c){a=a[b];!a&&c&&M("missing: "+b);if(a){if(Za.test(a))return a;M("invalid: "+b)}return null}
var eb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,db=/\/cb=/g,cb=/\/\//g;function ib(){var a=Ra();if(!a)throw Error("Bad hint");return a}
Wa.m=function(a,b,c,d){(a=a[0])||M("missing_hint");return"https://apis.google.com"+fb(a,b,c,d)};
var P=decodeURI("%73cript"),jb=/^[-+_0-9\/A-Za-z]+={0,2}$/;function kb(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Oa.call(b,e)&&c.push(e)}return c}
function lb(){var a=F.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(jb)?a:F.nonce=null;var b=C(F,"us",[]);if(!b||!b.length)return F.nonce=null;for(var c=B.getElementsByTagName(P),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(jb))return F.nonce=a}}return null}
function mb(a){if("loading"!=B.readyState)nb(a);else{var b=lb(),c="";null!==b&&(c=' nonce="'+b+'"');B.write("<"+P+' src="'+encodeURI(a)+'"'+c+"></"+P+">")}}
function nb(a){var b=B.createElement(P);b.setAttribute("src",a);a=lb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=B.getElementsByTagName(P)[0])?a.parentNode.insertBefore(b,a):(B.head||B.body||B.documentElement).appendChild(b)}
function ob(a,b){var c=b&&b._c;if(c)for(var d=0;d<L.length;d++){var e=L[d][0],f=L[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function pb(a,b,c){qb(function(){var c;c=b===Ra()?C(E,"_",D()):D();c=C(Ta(b),"_",c);a(c)},c)}
function rb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ob(a,c);var d=a?a.split(":"):[],e=c.h||ib(),f=C(F,"ah",D());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var n=h.split("."),n=f[h]||f[n[1]&&"ns:"+n[0]||""]||e,G=g.length&&g[g.length-1]||null,H=G;G&&G.hint==n||(H={hint:n,v:[]},g.push(H));H.v.push(h)}var N=g.length;if(1<N){var I=c.callback;I&&(c.callback=function(){0==--N&&I()})}for(;d=g.shift();)sb(d.v,c,d.hint)}else sb(d||[],c,e)}
function sb(a,b,c){function d(a,b){if(N)return 0;A.clearTimeout(H);I.push.apply(I,w);var e=((E||{}).config||{}).update;e?e(f):f&&C(F,"cu",[]).push(f);if(b){K("me0",a,U);try{pb(b,c,G)}finally{K("me1",a,U)}}return 1}
a=Pa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,n=b.onerror,G=void 0;"function"==typeof n&&(G=n);var H=null,N=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var n=C(Ta(c),"r",[]).sort(),I=C(Ta(c),"L",[]).sort(),U=[].concat(n);0<g&&(H=A.setTimeout(function(){N=!0;h()},g));
var w=kb(a,I);if(w.length){var w=kb(a,n),y=C(F,"CP",[]),z=y.length;y[z]=function(a){function b(){var a=y[z+1];a&&a()}
function c(b){y[z]=null;d(w,a)&&Sa(function(){e&&e();b()})}
if(!a)return 0;K("ml1",w,U);0<z&&y[z-1]?y[z]=function(){c(b)}:c(b)};
if(w.length){var la="loaded_"+F.I++;E[la]=function(a){y[z](a);E[la]=null};
a=bb(c,w,"gapi."+la,n);n.push.apply(n,w);K("ml0",w,U);b.sync||A.___gapisync?mb(a):nb(a)}else y[z](Ma)}else d(w)&&e&&e()}
function qb(a,b){if(F.hee&&0<F.hel)try{return a()}catch(c){b&&b(c),F.hel--,rb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
E.load=function(a,b){return qb(function(){return rb(a,b)})};function tb(){return l("gapi.iframes.getContext")()}
function ub(){return l("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function vb(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
vb.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};function Q(){this.c=this.c;this.f=this.f}
Q.prototype.c=!1;Q.prototype.dispose=function(){this.c||(this.c=!0,this.l())};
Q.prototype.l=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function wb(){this.b=this.a=null}
var yb=new vb(function(){return new xb},function(a){a.reset()},100);
wb.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function xb(){this.next=this.b=this.a=null}
xb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
xb.prototype.reset=function(){this.next=this.b=this.a=null};function zb(a){k.setTimeout(function(){throw a;},0)}
var Ab;
function Bb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!u("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=q(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!u("Trident")&&!u("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.s;c.s=null;a()}};
return function(a){d.next={s:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function Cb(a){R||Db();Eb||(R(),Eb=!0);var b=Fb,c=yb.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var R;function Db(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);R=function(){a.then(Gb)}}else R=function(){var a=Gb;
"function"!=m(k.setImmediate)||k.Window&&k.Window.prototype&&!u("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Ab||(Ab=Bb()),Ab(a)):k.setImmediate(a)}}
var Eb=!1,Fb=new wb;function Gb(){for(var a;a=Fb.remove();){try{a.a.call(a.b)}catch(c){zb(c)}var b=yb;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}Eb=!1}
;function S(a){Q.call(this);this.w=1;this.g=[];this.i=0;this.a=[];this.b={};this.F=!!a}
(function(){function a(){}
a.prototype=Q.prototype;S.a=Q.prototype;S.prototype=new a;S.prototype.constructor=S;S.b=function(a,c,d){for(var b=Array(arguments.length-2),f=2;f<arguments.length;f++)b[f-2]=arguments[f];return Q.prototype[c].apply(a,b)}})();
S.prototype.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.w;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.w=e+3;d.push(e);return e};
S.prototype.j=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.g.push(a),this.a[a+1]=aa;else{if(c){var d=fa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
S.prototype.B=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Hb(this.a[g+1],this.a[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.a[g+1].apply(this.a[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.j(c)}}return 0!=e}return!1};
function Hb(a,b,c){Cb(function(){a.apply(b,c)})}
S.prototype.clear=function(a){if(a){var b=this.b[a];b&&(ga(b,this.j,this),delete this.b[a])}else this.a.length=0,this.b={}};
S.prototype.l=function(){S.a.l.call(this);this.clear();this.g.length=0};var Ib=l("yt.pubsub2.instance_")||new S;S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.j;S.prototype.publish=S.prototype.B;S.prototype.clear=S.prototype.clear;r("yt.pubsub2.instance_",Ib);var Jb=l("yt.pubsub2.subscribedKeys_")||{};r("yt.pubsub2.subscribedKeys_",Jb);var Kb=l("yt.pubsub2.topicToKeys_")||{};r("yt.pubsub2.topicToKeys_",Kb);var Lb=l("yt.pubsub2.isAsync_")||{};r("yt.pubsub2.isAsync_",Lb);r("yt.pubsub2.skipSubKey_",null);var Mb=l("yt.pubsub.instance_")||new S;S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.j;S.prototype.publish=S.prototype.B;S.prototype.clear=S.prototype.clear;r("yt.pubsub.instance_",Mb);var Nb=l("yt.pubsub.subscribedKeys_")||{};r("yt.pubsub.subscribedKeys_",Nb);var Ob=l("yt.pubsub.topicToKeys_")||{};r("yt.pubsub.topicToKeys_",Ob);var Pb=l("yt.pubsub.isSynchronous_")||{};r("yt.pubsub.isSynchronous_",Pb);var Qb=l("yt.pubsub.skipSubId_")||null;
r("yt.pubsub.skipSubId_",Qb);function Rb(a){try{var b=Sb,c=ub();a.register("msg-hovercard-subscription",b,c)}catch(d){}}
function Sb(a){if(a){a=!!a.isSubscribed;var b=Ja();a?na(b,"subscribe"):ma(b,"subscribe");a?ma(b,"subscribed"):na(b,"subscribed")}}
;var T;
function Tb(){var a;a=Ja();var b;b:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Ka(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Ka(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.b,height:a.a};tb().ready(a,null,void 0);a=ub();tb().addOnOpenerHandler(Rb,null,a)}
T="function"==m(Tb)?{callback:Tb}:Tb||{};
if(T.gapiHintOverride||"GAPI_HINT_OVERRIDE"in Qa&&Qa.GAPI_HINT_OVERRIDE){var Ub;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],Vb=V.split("?",2),W=1<Vb.length?Vb[1]:Vb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var Wb=W.split("&"),X={},Xb=0,Yb=Wb.length;Xb<Yb;Xb++){var Y=Wb[Xb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),Zb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==m(X[Z])?ia(X[Z],Zb):
X[Z]=[X[Z],Zb]:X[Z]=Zb}}Ub=X}else Ub={};var $b=Ub.gapi_jsh;$b&&pa(T,{_c:{jsl:{h:$b}}})}rb("gapi.iframes:gapi.iframes.style.common",T);}).call(this);
