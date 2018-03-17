(function(){var k,m=this;function aa(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ba(){}
function ca(a){a.ba=void 0;a.A=function(){return a.ba?a.ba:a.ba=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==da(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return t.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var pa=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&aa(b)?d[e]=b:d[e]&&Object.prototype.hasOwnProperty.call(d,e)?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var qa=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",qa);function ra(a){var b=arguments;if(1<b.length){var c=b[0];qa[c]=b[1]}else for(c in b=b[0],b)qa[c]=b[c]}
function x(a,b){return a in qa?qa[a]:b}
;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(sa,Error);sa.prototype.name="CustomError";var ta;var ua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},va=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function wa(a){a=aa(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return va("0",Math.max(0,2-b))+a}
function xa(a,b){return a<b?-1:a>b?1:0}
function ya(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function za(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Aa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ba=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Ca=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Da=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Ea(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Fa(a,b){return 0<=Aa(a,b)}
function Ga(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ha(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ia(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ja(a,b,c,d){return Array.prototype.splice.apply(a,Ka(arguments,1))}
function Ka(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function La(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==da(d))for(var e=0;e<d.length;e+=8192)for(var f=La.apply(null,Ka(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Ma(a,b,c){fa(a)?(this.date=Na(a,b||0,c||1),Oa(this,c||1)):ha(a)?(this.date=Na(a.getFullYear(),a.getMonth(),a.getDate()),Oa(this,a.getDate())):(this.date=new Date(pa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Oa(this,a))}
function Na(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=Ma.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
function Pa(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+wa(c)+":"+wa(b)}return a}
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.Y=function(a,b){return[this.getFullYear(),wa(this.getMonth()+1),wa(this.getDate())].join(a?"-":"")+(b?Pa(this):"")};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.Y()};
function Oa(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function Qa(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():pa())}
w(Qa,Ma);Qa.prototype.Y=function(a,b){var c=Ma.prototype.Y.call(this,a);return a?c+" "+wa(this.date.getHours())+":"+wa(this.date.getMinutes())+":"+wa(this.date.getSeconds())+(b?Pa(this):""):c+"T"+wa(this.date.getHours())+wa(this.date.getMinutes())+wa(this.date.getSeconds())+(b?Pa(this):"")};
Qa.prototype.equals=function(a){return this.getTime()==a.getTime()};
Qa.prototype.toString=function(){return this.Y()};function Ra(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function z(a,b){return a.classList?a.classList.contains(b):Fa(Ra(a),b)}
function B(a,b){a.classList?a.classList.add(b):z(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Sa(a,b){if(a.classList)y(b,function(b){B(a,b)});
else{var c={};y(Ra(a),function(a){c[a]=!0});
y(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function C(a,b){a.classList?a.classList.remove(b):z(a,b)&&(a.className=Ba(Ra(a),function(a){return a!=b}).join(" "))}
function Ta(a,b){a.classList?y(b,function(b){C(a,b)}):a.className=Ba(Ra(a),function(a){return!Fa(b,a)}).join(" ")}
function Ua(a,b,c){c?B(a,b):C(a,b)}
function Va(a,b,c){z(a,b)&&(C(a,b),B(a,c))}
function Wa(a,b){var c=!z(a,b);Ua(a,b,c)}
;function Xa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ya(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Za(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function $a(a){var b=ab,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db;a:{var eb=m.navigator;if(eb){var fb=eb.userAgent;if(fb){db=fb;break a}}db=""}function D(a){return-1!=db.indexOf(a)}
;function gb(){this.b="";this.f=hb}
gb.prototype.va=!0;gb.prototype.ra=function(){return this.b};
var ib=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,hb={};function jb(a){var b=new gb;b.b=a;return b}
jb("about:blank");function kb(){this.b="";this.f=lb}
kb.prototype.va=!0;kb.prototype.ra=function(){return this.b};
function mb(a){if(a instanceof kb&&a.constructor===kb&&a.f===lb)return a.b;da(a);return"type_error:SafeHtml"}
var lb={};function nb(a){var b=new kb;b.b=a;return b}
nb("<!DOCTYPE html>");nb("");nb("<br>");function E(a,b){this.j=aa(a)?a:0;this.l=aa(b)?b:0}
E.prototype.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function ob(a,b){return new E(a.j-b.j,a.l-b.l)}
E.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
E.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
E.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function pb(a,b){this.width=a;this.height=b}
k=pb.prototype;k.hb=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.hb()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function qb(a){qb[" "](a);return a}
qb[" "]=ba;function rb(a,b){var c=sb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var tb=D("Opera"),F=D("Trident")||D("MSIE"),ub=D("Edge"),vb=ub||F,wb=D("Gecko")&&!(-1!=db.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),xb=-1!=db.toLowerCase().indexOf("webkit")&&!D("Edge"),yb=D("Windows");function zb(){var a=m.document;return a?a.documentMode:void 0}
var Ab;a:{var Bb="",Cb=function(){var a=db;if(wb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ub)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xb)return/WebKit\/(\S+)/.exec(a);if(tb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Cb&&(Bb=Cb?Cb[1]:"");if(F){var Db=zb();if(null!=Db&&Db>parseFloat(Bb)){Ab=String(Db);break a}}Ab=Bb}var Eb=Ab,sb={};
function Fb(a){return rb(a,function(){for(var b=0,c=ua(String(Eb)).split("."),d=ua(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=xa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==g[2].length,0==h[2].length)||xa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var Gb;var Hb=m.document;Gb=Hb&&F?zb()||("CSS1Compat"==Hb.compatMode?parseInt(Eb,10):5):void 0;var Ib=!wb&&!F||F&&9<=Number(Gb)||wb&&Fb("1.9.1"),Jb=F&&!Fb("9");function Kb(a){return a?new Lb(Mb(a)):ta||(ta=new Lb)}
function G(a){return r(a)?document.getElementById(a):a}
function Nb(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Ob("*",a,b)}
function H(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=Ob("*",a,b)[0];return d||null}
function Ob(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&Fa(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c}
function Pb(a,b){Xa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Qb.hasOwnProperty(d)?a.setAttribute(Qb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Qb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Rb(a){a=a.document;a=Sb(a)?a.documentElement:a.body;return new pb(a.clientWidth,a.clientHeight)}
function Tb(a){var b=Ub(a);a=Vb(a);return F&&Fb("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ub(a){return a.scrollingElement?a.scrollingElement:!xb&&Sb(a)?a.documentElement:a.body||a.documentElement}
function Vb(a){return a.parentWindow||a.defaultView}
function Sb(a){return"CSS1Compat"==a.compatMode}
function Wb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Xb(a){return Ib&&void 0!=a.children?a.children:Ba(a.childNodes,function(a){return 1==a.nodeType})}
function Yb(a){return ha(a)&&1==a.nodeType}
function Zb(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Mb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function $b(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Mb(a).createTextNode(String(b)))}}
function ac(a,b){var c=[];return bc(a,b,c,!0)?c[0]:void 0}
function bc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||bc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var cc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},dc={IMG:" ",BR:"\n"};function ec(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!fc(a)||gc(a)):fc(a)&&gc(a))&&F){var c;!ga(a.getBoundingClientRect)||F&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function fc(a){return F&&!Fb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function gc(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function hc(a){if(Jb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ic(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Jb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ic(a,b,c){if(!(a.nodeName in cc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in dc)b.push(dc[a.nodeName]);else for(a=a.firstChild;a;)ic(a,b,c),a=a.nextSibling}
function jc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return kc(a,function(a){return(!e||a.nodeName==e)&&(!c||r(a.className)&&Fa(a.className.split(/\s+/),c))},!0,d)}
function I(a,b){return jc(a,null,b,void 0)}
function kc(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Lb(a){this.b=a||m.document||document}
Lb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Lb.prototype.createElement=function(a){return this.b.createElement(String(a))};
Lb.prototype.appendChild=function(a,b){a.appendChild(b)};
Lb.prototype.isElement=Yb;function lc(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
lc.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.i();return a};
function mc(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;function J(a,b){this.version=a;this.args=b}
function nc(a){if(!a.La){var b={};a.call(b);a.La=b.version}return a.La}
function oc(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=nc(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
J.prototype.Db=function(){return{version:this.version,args:this.args}};
function K(a,b){this.topic=a;this.U=b}
K.prototype.toString=function(){return this.topic};function pc(){this.i=this.i;this.o=this.o}
pc.prototype.i=!1;pc.prototype.W=function(){return this.i};
pc.prototype.dispose=function(){this.i||(this.i=!0,this.aa())};
pc.prototype.aa=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function rc(){this.f=this.b=null}
var tc=new lc(function(){return new sc},function(a){a.reset()},100);
rc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function sc(){this.next=this.scope=this.b=null}
sc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
sc.prototype.reset=function(){this.next=this.scope=this.b=null};function uc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){vc(b)}}:a}
function vc(a){var b=p("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=x("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),ra("ERRORS",b))}
;function L(a,b){ga(a)&&(a=uc(a));return window.setTimeout(a,b)}
;function wc(a){m.setTimeout(function(){throw a;},0)}
var xc;
function yc(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(aa(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function zc(a){var b=void 0;isNaN(b)&&(b=void 0);var c=p("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():L(a,b||0)}
;function Ac(a,b){Bc||Cc();Dc||(Bc(),Dc=!0);var c=Ec,d=tc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Bc;function Cc(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);Bc=function(){a.then(Gc)}}else Bc=function(){var a=Gc;
!ga(m.setImmediate)||m.Window&&m.Window.prototype&&!D("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(xc||(xc=yc()),xc(a)):m.setImmediate(a)}}
var Dc=!1,Ec=new rc;function Gc(){for(var a;a=Ec.remove();){try{a.b.call(a.scope)}catch(b){wc(b)}mc(tc,a)}Dc=!1}
;function M(a){pc.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
w(M,pc);k=M.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function Hc(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function Ic(a,b,c){if(b=a.f[b]){var d=a.b;(b=Ea(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.R(b)}}
k.R=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=ba;else{if(c){var d=Aa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.J=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Jc(this.b[g+1],this.b[g+2],d)}else{this.w++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;c=this.v.pop();)this.R(c)}}return 0!=e}return!1};
function Jc(a,b,c){Ac(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(y(b,this.R,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Kc(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=Kc(a,d);return c}
k.aa=function(){M.D.aa.call(this);this.clear();this.v.length=0};var Lc=p("yt.pubsub2.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.J;M.prototype.clear=M.prototype.clear;v("yt.pubsub2.instance_",Lc);var Mc=p("yt.pubsub2.subscribedKeys_")||{};v("yt.pubsub2.subscribedKeys_",Mc);var Nc=p("yt.pubsub2.topicToKeys_")||{};v("yt.pubsub2.topicToKeys_",Nc);var Oc=p("yt.pubsub2.isAsync_")||{};v("yt.pubsub2.isAsync_",Oc);v("yt.pubsub2.skipSubKey_",null);
function O(a,b){var c=Pc();return c?c.publish.call(c,a.toString(),a,b):!1}
function Qc(a,b,c){window.yt.pubsub2.skipSubKey_=a;O.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function P(a,b,c){var d=Pc();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Mc[e])try{if(g&&a instanceof K&&a!=d)try{g=oc(a.U,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){vc(l)}};
Oc[a.toString()]?p("yt.scheduler.instance")?zc(f):L(f,0):f()}});
Mc[e]=!0;Nc[a.toString()]||(Nc[a.toString()]=[]);Nc[a.toString()].push(e);return e}
function Rc(a){var b=Pc();b&&(fa(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete Mc[a]}))}
function Pc(){return p("yt.pubsub2.instance_")}
;function Sc(a){return eval("("+a+")")}
;function Tc(a,b,c){a&&(a.dataset?a.dataset[Uc(b)]=c:a.setAttribute("data-"+b,c))}
function Vc(a,b){return a?a.dataset?a.dataset[Uc(b)]:a.getAttribute("data-"+b):null}
function Wc(a,b){a&&(a.dataset?delete a.dataset[Uc(b)]:a.removeAttribute("data-"+b))}
var Xc={};function Uc(a){return Xc[a]||(Xc[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Yc=null;"undefined"!=typeof XMLHttpRequest?Yc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Yc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var Zc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $c(a){return a?decodeURI(a):a}
function ad(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function bd(a,b,c){if("array"==da(b))for(var d=0;d<b.length;d++)bd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function cd(a,b,c){for(c=c||0;c<b.length;c+=2)bd(b[c],b[c+1],a);return a}
function dd(a,b){for(var c in b)bd(c,b[c],a);return a}
function ed(a){a=dd([],a);a[0]="";return a.join("")}
function fd(a,b){return ad(2==arguments.length?cd([a],arguments[1],0):cd([a],arguments,1))}
;function gd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==da(b[f])?Ia(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function hd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=gd(d[1]||""),e;for(e in b)d[e]=b[e];return ad(dd([a],d))+c}
;var id="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function jd(){}
jd.prototype.next=function(){throw id;};
jd.prototype.T=function(){return this};
function kd(a){if(a instanceof jd)return a;if("function"==typeof a.T)return a.T(!1);if(ea(a)){var b=0,c=new jd;c.next=function(){for(;;){if(b>=a.length)throw id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ld(a,b){if(ea(a))try{y(a,b,void 0)}catch(c){if(c!==id)throw c;}else{a=kd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==id)throw c;}}}
function md(a){if(ea(a))return Ha(a);a=kd(a);var b=[];ld(a,function(a){b.push(a)});
return b}
;function nd(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=ba)try{var c=this;a.call(b,function(a){od(c,2,a)},function(a){od(c,3,a)})}catch(d){od(this,3,d)}}
function pd(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
pd.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var qd=new lc(function(){return new pd},function(a){a.reset()},100);
function rd(a,b,c){var d=qd.get();d.i=a;d.f=b;d.context=c;return d}
nd.prototype.then=function(a,b,c){return sd(this,ga(a)?a:null,ga(b)?b:null,c)};
nd.prototype.then=nd.prototype.then;nd.prototype.$goog_Thenable=!0;nd.prototype.cancel=function(a){0==this.b&&Ac(function(){var b=new td(a);ud(this,b)},this)};
function ud(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ud(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):vd(c),wd(c,e,3,b)))}a.i=null}else od(a,3,b)}
function xd(a,b){a.f||2!=a.b&&3!=a.b||yd(a);a.o?a.o.next=b:a.f=b;a.o=b}
function sd(a,b,c,d){var e=rd(null,null,null);e.b=new nd(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!aa(e)&&b instanceof td?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;xd(a,e);return e.b}
nd.prototype.K=function(a){this.b=0;od(this,2,a)};
nd.prototype.S=function(a){this.b=0;od(this,3,a)};
function od(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.K,g=a.S;if(e instanceof nd)xd(e,rd(f||ba,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){zd(e,l,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.B=c,a.b=b,a.i=null,yd(a),3!=b||c instanceof td||Ad(a,c))}}
function zd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function yd(a){a.w||(a.w=!0,Ac(a.F,a))}
function vd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
nd.prototype.F=function(){for(var a;a=vd(this);)wd(this,a,this.b,this.B);this.w=!1};
function wd(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,Bd(b,c,d);else try{b.o?b.i.call(b.context):Bd(b,c,d)}catch(e){Cd.call(null,e)}mc(qd,b)}
function Bd(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ad(a,b){a.v=!0;Ac(function(){a.v&&Cd.call(null,b)})}
var Cd=wc;function td(a){sa.call(this,a)}
w(td,sa);td.prototype.name="cancel";var Dd=p("yt.pubsub.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.J;M.prototype.clear=M.prototype.clear;v("yt.pubsub.instance_",Dd);var Ed=p("yt.pubsub.subscribedKeys_")||{};v("yt.pubsub.subscribedKeys_",Ed);var Fd=p("yt.pubsub.topicToKeys_")||{};v("yt.pubsub.topicToKeys_",Fd);var Gd=p("yt.pubsub.isSynchronous_")||{};v("yt.pubsub.isSynchronous_",Gd);var Hd=p("yt.pubsub.skipSubId_")||null;
v("yt.pubsub.skipSubId_",Hd);function Id(a,b,c){var d=Jd();if(d){var e=d.subscribe(a,function(){if(!Hd||Hd!=e){var d=arguments,g;g=function(){Ed[e]&&b.apply(c||window,d)};
try{Gd[a]?g():L(g,0)}catch(h){vc(h)}}},c);
Ed[e]=!0;Fd[a]||(Fd[a]=[]);Fd[a].push(e);return e}return 0}
function Kd(a){var b=Jd();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete Ed[a]}))}
function R(a,b){var c=Jd();return c?c.publish.apply(c,arguments):!1}
function Ld(a,b){Gd[a]=!0;var c=Jd();c&&c.publish.apply(c,arguments);Gd[a]=!1}
function Jd(){return p("yt.pubsub.instance_")}
;function Md(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&uc(b)(l)}
var l=Yc&&Yc();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=Nd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Nd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(Zc)[1]||null,e=$c(a.match(Zc)[3]||null);d&&e?(d=c,c=a.match(Zc),d=d.match(Zc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?$c(c.match(Zc)[3]||null)==e&&(Number(c.match(Zc)[4]||null)||null)==(Number(a.match(Zc)[4]||null)||null):!0;for(var f in Od){if((e=d=x(Od[f]))&&!(e=c)){var e=f,g=x("CORS_HEADER_WHITELIST")||{},h=$c(a.match(Zc)[3]||null);e=h?(g=g[h])?Fa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Pd(a,b){var c=x("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Vb&&(!$c(a.match(Zc)[3]||null)||b.withCredentials||$c(a.match(Zc)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.M&&b.M[c])}
function Qd(a,b){var c=b.format||"JSON";b.Wb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=x("XSRF_FIELD_NAME",void 0),e=x("XSRF_TOKEN",void 0),f=b.Ka;f&&(f[d]&&delete f[d],a=hd(a,f||{}));var g=b.postBody||"",f=b.M;Pd(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=gd(g),cb(d,f),g=b.Cb&&"JSON"==b.Cb?JSON.stringify(d):ed(d));var h=!1,l,n=Md(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Rd(c,a,b.Ub);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.ca&&b.ca.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.zb&&0<b.timeout&&(l=L(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.zb.call(b.context||m,n))},b.timeout))}
function Rd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Sc(a));break;case "XML":if(b=(b=b.responseXML)?Sd(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=Td(a)})}c&&Ud(d);
return d}
function Ud(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=nb(a[b]);a[c]=d}else Ud(a[b])}}
function Sd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Td(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Od={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Vd={},Wd=0;function Xd(a){var b=new Image,c=""+Wd++;Vd[c]=b;b.onload=b.onerror=function(){delete Vd[c]};
b.src=a}
;function Yd(a){J.call(this,1,arguments);this.b=a}
w(Yd,J);function Zd(a){J.call(this,1,arguments);this.b=a}
w(Zd,J);function $d(a,b,c){J.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
w($d,J);function ae(a,b,c,d,e){J.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
w(ae,J);function be(a,b,c){J.call(this,1,arguments);this.b=a;this.f=b}
w(be,J);function ce(a,b,c,d,e,f,g){J.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
w(ce,J);
var de=new K("subscription-batch-subscribe",Yd),ee=new K("subscription-batch-unsubscribe",Yd),fe=new K("subscription-subscribe",ae),ge=new K("subscription-subscribe-loading",Zd),he=new K("subscription-subscribe-loaded",Zd),ie=new K("subscription-subscribe-success",be),je=new K("subscription-subscribe-external",ae),ke=new K("subscription-unsubscribe",ce),le=new K("subscription-unsubscirbe-loading",Zd),me=new K("subscription-unsubscribe-loaded",Zd),ne=new K("subscription-unsubscribe-success",Zd),oe=
new K("subscription-external-unsubscribe",ce),pe=new K("subscription-enable-ypc",Zd),qe=new K("subscription-disable-ypc",Zd),re=new K("subscription-prefs",$d),se=new K("subscription-prefs-success",$d),te=new K("subscription-prefs-failure",$d);function ue(a){var b=a.__yt_uid_key;b||(b=ve(),a.__yt_uid_key=b);return b}
var ve=p("yt.dom.getNextId_");if(!ve){ve=function(){return++we};
v("yt.dom.getNextId_",ve);var we=0}function xe(a,b){a=G(a);b=G(b);return!!kc(a,function(a){return a===b},!0,void 0)}
function ye(a,b){var c=Ob(a,null,b);return c.length?c[0]:null}
function ze(){var a=document,b;Da(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Ae(){Ua(document.body,"hide-players",!1);y(Nb("preserve-players"),function(a){C(a,"preserve-players")})}
;function Be(){var a=ze();return a?a:null}
;function Ce(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in De||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ce.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ce.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ce.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var De={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ab=p("yt.events.listeners_")||{};v("yt.events.listeners_",ab);var Ee=p("yt.events.counter_")||{count:0};v("yt.events.counter_",Ee);function Fe(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return $a(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function S(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Fe(a,b,c,d);if(e)return e;var e=++Ee.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new Ce(d);if(!kc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ce(b);
b.currentTarget=a;return c.call(a,b)};
g=uc(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);ab[e]=[a,b,c,g,d];return e}
function Ge(a,b,c){return He(a,b,function(a){return z(a,c)})}
function He(a,b,c){var d=a||document;return S(d,"click",function(a){var e=kc(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function U(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in ab){var b=ab[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete ab[a]}}))}
function Ie(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Je(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
;function Ke(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Ke.prototype.getHeight=function(){return this.bottom-this.top};
Ke.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Ke.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Ke.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Le(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Le.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Le.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Le.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Me(a,b,c){if(r(b))(b=Ne(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ne(c,d);f&&(c.style[f]=e)}}
var Oe={};function Ne(a,b){var c=Oe[b];if(!c){var d=ya(b),c=d;void 0===a.style[d]&&(d=(xb?"Webkit":wb?"Moz":F?"ms":tb?"O":null)+za(d),void 0!==a.style[d]&&(c=d));Oe[b]=c}return c}
function Pe(a,b){var c=Mb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Qe(a,b){return Pe(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Re(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}F&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Se(a){if(F&&!(8<=Number(Gb)))return a.offsetParent;var b=Mb(a),c=Qe(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Qe(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Te(a){for(var b=new Ke(0,Infinity,Infinity,0),c=Kb(a),d=c.b.body,e=c.b.documentElement,f=Ub(c.b);a=Se(a);)if(!(F&&0==a.clientWidth||xb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Qe(a,"overflow")){var g=Ue(a),h=new E(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Rb(Vb(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ue(a){var b=Mb(a),c=new E(0,0),d;d=b?Mb(b):document;d=!F||9<=Number(Gb)||Sb(Kb(d).b)?d.documentElement:d.body;if(a==d)return c;a=Re(a);b=Tb(Kb(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function Ve(a){a=Re(a);return new E(a.left,a.top)}
function We(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Xe(a){var b=Ye;if("none"!=Qe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ye(a){var b=a.offsetWidth,c=a.offsetHeight,d=xb&&!b&&!c;return aa(b)&&!d||!a.getBoundingClientRect?new pb(b,c):(a=Re(a),new pb(a.right-a.left,a.bottom-a.top))}
function Ze(a){var b=Ue(a);a=Xe(a);return new Le(b.j,b.l,a.width,a.height)}
function $e(a){return"rtl"==Qe(a,"direction")}
function af(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function bf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?af(a,c):0}
var cf={thin:2,medium:4,thick:6};function df(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in cf?cf[c]:af(a,c)}
;function ef(a,b){(a=G(a))&&a.style&&(a.style.display=b?"":"none",Ua(a,"hid",!b))}
function ff(a){return(a=G(a))?"none"!=a.style.display&&!z(a,"hid"):!1}
function gf(a){y(arguments,function(a){!ea(a)||a instanceof Element?ef(a,!0):y(a,function(a){gf(a)})})}
function hf(a){y(arguments,function(a){!ea(a)||a instanceof Element?ef(a,!1):y(a,function(a){hf(a)})})}
;function jf(a,b,c,d,e,f,g){var h,l;if(h=c.offsetParent){var n="HTML"==h.tagName||"BODY"==h.tagName;n&&"static"==Qe(h,"position")||(l=Ue(h),n||(n=(n=$e(h))&&wb?-h.scrollLeft:!n||vb&&Fb("8")||"visible"==Qe(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,l=ob(l,new E(n,h.scrollTop))))}h=l||new E;l=Ze(a);if(n=Te(a)){var q=new Le(n.left,n.top,n.right-n.left,n.bottom-n.top),n=Math.max(l.left,q.left),N=Math.min(l.left+l.width,q.left+q.width);if(n<=N){var Q=Math.max(l.top,q.top),q=Math.min(l.top+
l.height,q.top+q.height);Q<=q&&(l.left=n,l.top=Q,l.width=N-n,l.height=q-Q)}}n=Kb(a);Q=Kb(c);if(n.b!=Q.b){var N=n.b.body,A;var Q=Vb(Q.b),q=new E(0,0),u;u=(u=Mb(N))?Vb(u):window;b:{try{qb(u.parent);A=!0;break b}catch(Fc){}A=!1}if(A){A=N;do{var la=u==Q?Ue(A):Ve(A);q.j+=la.j;q.l+=la.l}while(u&&u!=Q&&u!=u.parent&&(A=u.frameElement)&&(u=u.parent))}A=ob(q,Ue(N));!F||9<=Number(Gb)||Sb(n.b)||(A=ob(A,Tb(n.b)));l.left+=A.j;l.top+=A.l}a=kf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new E(b,l.top+(a&1?
l.height:0));b=ob(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var T;g&&(T=Te(c))&&(T.top-=h.l,T.right-=h.j,T.bottom-=h.l,T.left-=h.j);return lf(b,c,d,f,T,g,void 0)}
function lf(a,b,c,d,e,f,g){a=new E(a.j,a.l);var h=kf(b,c);c=Xe(b);g=g?new pb(g.width,g.height):new pb(c.width,c.height);a=new E(a.j,a.l);g=new pb(g.width,g.height);var l=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,l|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,l|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,l|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,l|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new Le(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new E(f.left,f.top);g instanceof E?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=We(a,!1);b.style.top=We(g,!1);g=new pb(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=Sb(Kb(Mb(b)).b),!F||Fb("10")||g&&Fb("8")?(b=b.style,wb?b.MozBoxSizing="border-box":xb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(F?(g=bf(b,"paddingLeft"),f=bf(b,"paddingRight"),d=bf(b,"paddingTop"),h=bf(b,"paddingBottom"),g=new Ke(d,f,h,g)):(g=Pe(b,"paddingLeft"),f=Pe(b,"paddingRight"),d=Pe(b,"paddingTop"),h=Pe(b,"paddingBottom"),g=new Ke(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(g))),!F||9<=Number(Gb)?(f=Pe(b,"borderLeftWidth"),d=Pe(b,"borderRightWidth"),h=Pe(b,"borderTopWidth"),b=Pe(b,"borderBottomWidth"),b=new Ke(parseFloat(h),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=df(b,"borderLeft"),d=df(b,"borderRight"),h=df(b,"borderTop"),b=df(b,"borderBottom"),b=new Ke(h,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function kf(a,b){return(b&8&&$e(a)?b^4:b)&-9}
;function mf(){}
;function nf(){}
w(nf,mf);nf.prototype.clear=function(){var a=md(this.T(!0)),b=this;y(a,function(a){b.remove(a)})};function of(a){this.b=a}
w(of,nf);k=of.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.T=function(a){var b=0,c=this.b,d=new jd;d.next=function(){if(b>=c.length)throw id;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function pf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(pf,of);function qf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(qf,of);var rf=p("yt.logging.transport.logsQueue_")||{};v("yt.logging.transport.logsQueue_",rf);(new pf).isAvailable();(new qf).isAvailable();var sf={},tf="ontouchstart"in document;function uf(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return kc(c,function(a){return z(a,b)},!0,d)}
function vf(a){var b="mouseover"==a.type&&"mouseenter"in sf||"mouseout"==a.type&&"mouseleave"in sf,c=a.type in sf||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=sf[b],d;for(d in c.f){var e=uf(b,d,a.target);e&&!kc(a.relatedTarget,function(a){return a==e},!0)&&c.J(d,e,b,a)}}if(b=sf[a.type])for(d in b.f)(e=uf(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
S(document,"blur",vf,!0);S(document,"change",vf,!0);S(document,"click",vf);S(document,"focus",vf,!0);S(document,"mouseover",vf);S(document,"mouseout",vf);S(document,"mousedown",vf);S(document,"keydown",vf);S(document,"keyup",vf);S(document,"keypress",vf);S(document,"cut",vf);S(document,"paste",vf);tf&&(S(document,"touchstart",vf),S(document,"touchend",vf),S(document,"touchcancel",vf));function wf(a){this.v=a;this.B={};this.K=[];this.F=[]}
k=wf.prototype;k.C=function(a){return I(a,V(this))};
function V(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
k.unregister=function(){Kd(this.K);this.K.length=0;Rc(this.F);this.F.length=0};
k.init=ba;k.dispose=ba;function xf(a,b,c){a.K.push(Id(b,c,a))}
function yf(a,b,c){a.F.push(P(b,c,a))}
function W(a,b,c,d){d=V(a,d);var e=t(c,a);b in sf||(sf[b]=new M);sf[b].subscribe(d,e);a.B[c]=e}
function X(a,b,c,d){if(b in sf){var e=sf[b];Ic(e,V(a,d),a.B[c]);0>=Kc(e)&&(e.dispose(),delete sf[b])}delete a.B[c]}
k.O=function(a,b,c){var d=this.g(a,b);if(d&&(d=p(d))){var e=Ka(arguments,2);Ja(e,0,0,a);d.apply(null,e)}};
k.g=function(a,b){return Vc(a,b)};
function zf(a,b){Tc(a,"tooltip-text",b)}
;function Af(){wf.call(this,"button");this.b=null;this.i=[];this.f={}}
w(Af,wf);ca(Af);k=Af.prototype;k.register=function(){W(this,"click",this.Ma);W(this,"keydown",this.wa);W(this,"keypress",this.xa);xf(this,"page-scroll",this.nb)};
k.unregister=function(){X(this,"click",this.Ma);X(this,"keydown",this.wa);X(this,"keypress",this.xa);Bf(this);this.f={};Af.D.unregister.call(this)};
k.Ma=function(a){a&&!a.disabled&&(Cf(this,a),this.click(a))};
k.wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Df(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=ac(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.ub:"table"==e&&(f=this.tb);f&&Ef(this,a,b,c,t(f,this))}}};
k.nb=function(){var a=this.f,b=0,c;for(c in a)b++;if(0!=b)for(var d in a){b=a[d];c=I(b.activeButtonNode||b.parentNode,V(this));if(void 0==c||void 0==b)break;Ff(this,c,b,!0)}};
function Ef(a,b,c,d,e){var f=ff(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Gf(a,c)){if(aa(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;a=b;if("a"==a.tagName.toLowerCase()){var h,l;h=void 0===h?{}:h;l=void 0===l?"":l;b=window.location;h=ad(dd([a.href],h))+l;h instanceof gb||h instanceof gb||(h=h.va?h.ra():String(h),ib.test(h)||(h="about:invalid#zClosurez"),h=jb(h));h instanceof gb&&h.constructor===gb&&h.f===hb?h=h.b:(da(h),h="type_error:SafeUrl");
b.href=h}else Je(a)}else g&&Hf(a,b);else f?27==d.keyCode?(Gf(a,c),Hf(a,b)):e(b,c,d):(h=z(b,V(a,"reverse"))?38:40,d.keyCode==h&&(Je(b),d.preventDefault()))}
k.xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Df(this,a),ff(a)&&c.preventDefault())};
function Gf(a,b){var c=V(a,"menu-item-highlight"),d=H(c,b);d&&C(d,c);return d}
function If(a,b,c){B(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.tb=function(a,b,c){var d=Gf(this,b);if(d){var e=ye("table",b);b=Ob("td",null,e);d=Jf(d,b,Ob("td",null,ye("tr",e)).length,c);-1!=d&&(If(this,a,b[d]),c.preventDefault())}};
k.ub=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Gf(this,b);d&&(b=Ba(Ob("li",null,b),ff),If(this,a,b[Jf(d,b,1,c)]),c.preventDefault())}};
function Jf(a,b,c,d){var e=b.length;a=Aa(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Kf(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=V(a,"menu-mask"),hf(c),b.iframeMask=c);return c}
function Ff(a,b,c,d){var e=I(b,V(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=Ze(b);if(z(b,V(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(q){}}z(b,"flip")&&(z(b,V(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=Se(e):a.g(b,"button-menu-root-container")&&(l=Lf(a,b));F&&!Fb("8")&&(l=null);var n;l&&(n=Ze(l),n=new Ke(-n.top,n.left,n.top,-n.left));l=new E(0,1);z(b,V(a,"center-menu"))&&(l.j-=Math.round((Xe(c).width-Xe(b).width)/
2));d&&(l.l+=Tb(document).l);if(a=Kf(a,b))b=Xe(c),a.style.width=b.width+"px",a.style.height=b.height+"px",jf(e,f,a,g,l,n,197),d&&Me(a,"position","fixed");jf(e,f,c,g,l,n,197)}
function Lf(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return I(b,c)}return document.body}
k.Oa=function(a){if(a){var b=Df(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=Lf(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Kf(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[ue(a).toString()]=b);Ff(this,a,b,c);Ld("yt-uix-button-menu-before-show",a,b);gf(b);d&&gf(d);
this.O(a,"button-menu-action",!0);B(a,V(this,"active"));b=t(this.Na,this,a,!1);d=t(this.Na,this,a,!0);c=t(this.Fb,this,a,void 0);this.b&&Df(this,this.b)==Df(this,a)||Bf(this);R("yt-uix-button-menu-show",a);U(this.i);this.i=[S(document,"click",d),S(document,"contextmenu",b),S(window,"resize",c)];this.b=a}}};
function Hf(a,b){if(b){var c=Df(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");hf(c);a.O(b,"button-menu-action",!1);var d=Kf(a,b),e=ue(c).toString();delete a.f[e];L(function(){d&&d.parentNode&&(hf(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=I(b,V(a,"group")),f=[V(a,"active")];
e&&f.push(V(a,"group-active"));Ta(b,f);R("yt-uix-button-menu-hide",b);U(a.i);a.i.length=0}}
k.Fb=function(a,b){var c=Df(this,a);if(c){b&&(b instanceof kb?c.innerHTML=mb(b):$b(c,b));var d=!!this.g(a,"button-menu-fixed");Ff(this,a,c,d)}};
k.Na=function(a,b,c){c=Ie(c);var d=I(c,V(this));if(d){var d=Df(this,d),e=Df(this,a);if(d==e)return}var d=I(c,V(this,"menu")),e=d==Df(this,a),f=z(c,V(this,"menu-item")),g=z(c,V(this,"menu-close"));if(!d||e&&(f||g))Hf(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=H(V(this,"content"),a))&&$b(a,hc(c)),Mf(this,d,c))};
function Mf(a,b,c){var d=V(a,"menu-item-selected");y(Nb(d,b),function(a){C(a,d)});
B(c.parentNode,d)}
function Df(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&G(c),d=V(a,"menu");c?Sa(c,[d,V(a,"menu-external")]):c=H(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return z(a,V(this,"toggled"))};
function Cf(a,b){if(a.g(b,"button-toggle")){var c=I(b,V(a,"group")),d=V(a,"toggled"),e=z(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");y(Nb(V(a),c),function(a){a!=b||"optional"==f&&e?(C(a,d),a.removeAttribute("aria-pressed")):(B(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Wa(b,d)}}
k.click=function(a){if(Df(this,a)){var b=Df(this,a);if(b){var c=I(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(Hf(this,c),L(t(this.Oa,this,a),1)):ff(b)?Hf(this,a):this.Oa(a)}a.focus()}this.O(a,"button-action")};
function Bf(a){a.b&&Hf(a,a.b)}
;function Nf(a){wf.call(this,a);this.i=null}
w(Nf,wf);k=Nf.prototype;k.C=function(a){var b=wf.prototype.C.call(this,a);return b?b:a};
k.register=function(){xf(this,"yt-uix-kbd-nav-move-out-done",this.H)};
k.dispose=function(){Nf.D.dispose.call(this);Of(this)};
k.g=function(a,b){var c=Nf.D.g.call(this,a,b);return c?c:(c=Nf.D.g.call(this,a,"card-config"))&&(c=p(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){B(b,V(this,"active"));var c=Pf(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Qf(this,a,c);var d=V(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.O(b,"card-action",a);this.i=a;hf(c);L(t(function(){e||(gf(c),R("yt-uix-card-show",b,a,c));Rf(c);B(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Pf(a,b,c){var d=c||b,e=V(a,"card");c=Sf(a,d);var f=G(V(a,"card")+ue(d));if(f)return a=H(V(a,"card-body"),f),Zb(a,c)||(Wb(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+ue(d);f.className=e;(d=a.g(d,"card-class"))&&Sa(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Wb(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Qf(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=H(V(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f,q,N;n&&l?(N=13,q=8):n&&!l?(N=12,q=9):!n&&l?(N=9,q=12):(N=8,q=13);var Q=$e(document.body),f=$e(b);Q!=f&&(N^=4);var A;d?(f=b.offsetHeight/2-12,A=new E(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,A=new E(b.offsetWidth+6,-12));var u=Xe(c),f=Math.min(f,(d?u.height:
u.width)-24-6);6>f&&(f=6,d?A.l+=12-b.offsetHeight/2:A.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=V(a,"card-flip");a=V(a,"card-reverse");Ua(c,b,n);Ua(c,a,l);u=jf(e,N,c,q,A,null,u);!g&&u&&(u&48&&(n=!n,N^=4,q^=4),u&192&&(l=!l,N^=1,q^=1),Ua(c,b,n),Ua(c,a,l),jf(e,N,c,q,A));h&&(e=parseInt(c.style.top,10),g=Tb(document).l,Me(c,"position","fixed"),Me(c,"top",e-g+"px"));Q&&(c.style.right="",e=Ze(c),e.left=e.left||parseInt(c.style.left,10),g=Rb(window),c.style.left="",c.style.right=g.width-e.left-e.width+"px");
e=H("yt-uix-card-body-arrow",c);g=H("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!Q&&n||Q&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=H("yt-uix-card-arrow",c);n=H("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Xe(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
k.H=function(a){if(a=this.C(a)){var b=G(V(this,"card")+ue(a));b&&(C(a,V(this,"active")),C(b,V(this,"card-visible")),hf(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Wb(b.cardMask),b.cardMask=null))}};
function Of(a){a.i&&a.H(a.i)}
k.Eb=function(a,b){var c=this.C(a);if(c){if(b){var d=Sf(this,c);if(!d)return;b instanceof kb?d.innerHTML=mb(b):$b(d,b)}z(c,V(this,"active"))&&(c=Pf(this,a,c),Qf(this,a,c),gf(c),Rf(c))}};
k.isActive=function(a){return(a=this.C(a))?z(a,V(this,"active")):!1};
function Sf(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.g(b,"card-id"))?G(c):H(d,b))||(c=document.createElement("div"));var f=c;C(f,d);B(f,e);b.cardContentNode=c}return c}
function Rf(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Sa(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;var Tf=!F&&!(D("Safari")&&!((D("Chrome")||D("CriOS"))&&!D("Edge")||D("Coast")||D("Opera")||D("Edge")||D("Silk")||D("Android")));function Uf(a,b){return Tf&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Vf(){wf.call(this,"kbd-nav")}
var Wf;w(Vf,wf);ca(Vf);k=Vf.prototype;k.register=function(){W(this,"keydown",this.ta);xf(this,"yt-uix-kbd-nav-move-in",this.Ca);xf(this,"yt-uix-kbd-nav-move-in-to",this.vb);xf(this,"yt-uix-kbd-move-next",this.Da);xf(this,"yt-uix-kbd-nav-move-to",this.V)};
k.unregister=function(){X(this,"keydown",this.ta);U(Wf)};
k.ta=function(a,b,c){var d=c.keyCode;if(a=I(a,V(this)))switch(d){case 13:case 32:this.Ca(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Uf(a,"kbdNavMoveOut");!c;){c=I(a.parentElement,V(this));if(!c)break a;c=Uf(c,"kbdNavMoveOut")}c=G(c);this.V(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&z(a,V(this,"list")))switch(d){case 40:this.Da(b,a);break;case 38:d=document.activeElement==a,a=Xf(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Yf(this,a[b]))}c.preventDefault()}};
k.Ca=function(a){var b=Uf(a,"kbdNavMoveIn"),b=G(b);Zf(this,a,b);this.V(b)};
k.vb=function(a){var b;a:{var c=document;try{b=c&&c.activeElement;break a}catch(d){}b=null}Zf(this,b,a);this.V(a)};
k.V=function(a){if(a)if(ec(a))a.focus();else{var b=ac(a,function(a){return Yb(a)?ec(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Zf(a,b,c){b&&c&&(B(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Tf&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.Da=function(a,b){var c=document.activeElement==b,d=Xf(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Yf(this,d[c]))};
function Yf(a,b){if(b){var c=jc(b,"LI");c&&(B(c,V(a,"highlight")),Wf=S(b,"blur",t(function(a){C(a,V(this,"highlight"));U(Wf)},a,c)))}}
function Xf(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ba(Xb(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ba(Ca(a,function(a){return ff(a)?ac(a,function(a){return Yb(a)?ec(a):!1}):!1}),function(a){return!!a})}
;function $f(){wf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
w($f,wf);ca($f);function ag(a){var b=$f.A();if(z(a,V(b)))return a;var c=b.C(a);return c?c:I(a,V(b,"content"))==b.b?b.f:null}
k=$f.prototype;k.register=function(){W(this,"click",this.sa);W(this,"mouseenter",this.lb);xf(this,"page-scroll",this.ob);xf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);bg(this,a)});
this.o=new M};
k.unregister=function(){X(this,"click",this.sa);this.f=this.b=null;U(La(Za(this.i)));this.i={};Xa(this.w,function(a){Wb(a)},this);
this.w={};qc(this.o);this.o=null;$f.D.unregister.call(this)};
k.sa=function(a,b,c){a&&(b=cg(this,a),!b.disabled&&xe(c.target,b)&&dg(this,a))};
k.lb=function(a,b,c){a&&z(a,V(this,"hover"))&&xe(c.target,cg(this,a))&&dg(this,a,!0)};
k.ob=function(){this.b&&this.f&&eg(this,this.f,this.b)};
function eg(a,b,c){var d=fg(a,b);if(d){var e=Xe(c),f;if(e instanceof pb)f=e.height,e=e.width;else throw Error("missing height argument");d.style.width=We(e,!0);d.style.height=We(f,!0)}c==a.b&&(e=9,f=8,z(b,V(a,"reversed"))&&(e^=1,f^=1),z(b,V(a,"flipped"))&&(e^=4,f^=4),a=new E(0,1),d&&jf(b,e,d,f,a,null,197),jf(b,e,c,f,a,null,197))}
function dg(a,b,c){gg(a,b)&&!c?bg(a,b):(hg(a,b),!a.b||xe(b,a.b)?a.Pa(b):Hc(a.o,t(a.Pa,a,b)))}
k.Pa=function(a){if(a){var b=ig(this,a);if(b){Ld("yt-uix-menu-before-show",a,b);this.b?xe(a,this.b)||bg(this,this.f):(this.f=a,this.b=b,z(a,V(this,"sibling-content"))||(Wb(b),document.body.appendChild(b)),b.style.minWidth=cg(this,a).offsetWidth-2+"px");var c=fg(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);C(b,V(this,"content-hidden"));eg(this,a,b);Sa(cg(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);jg(b);kg(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.Gb,this,a),e=t(this.rb,this,a),c=ia(a).toString();this.i[c]=[S(b,"click",e),S(document,"click",d)];z(a,V(this,"indicate-selected"))&&(d=t(this.sb,this,a),this.i[c].push(S(b,"click",d)));z(a,V(this,"hover"))&&(a=t(this.mb,this,a),this.i[c].push(S(document,"mousemove",a)))}}};
k.mb=function(a,b){var c=Ie(b);c&&(xe(c,cg(this,a))||lg(this,c)||mg(this,a))};
k.Gb=function(a,b){var c=Ie(b);if(c){if(lg(this,c)){var d=I(c,V(this,"content")),e=jc(c,"LI");e&&d&&Zb(d,e)&&Ld("yt-uix-menu-item-clicked",c);c=I(c,V(this,"close-on-select"));if(!c)return;d=ag(c)}bg(this,d||a)}};
function hg(a,b){if(b){var c=I(b,V(a,"content"));c&&y(Nb(V(a),c),function(a){!xe(a,b)&&gg(this,a)&&mg(this,a)},a)}}
function bg(a,b){if(b){var c=[];c.push(b);var d=ig(a,b);d&&(d=Nb(V(a),d),d=Ha(d),c=c.concat(d),y(c,function(a){gg(this,a)&&mg(this,a)},a))}}
function mg(a,b){if(b){var c=ig(a,b);Ta(cg(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);B(c,V(a,"content-hidden"));var d=ig(a,b);d&&Pb(d,{"aria-expanded":"false"});(d=fg(a,b))&&d.parentNode&&Wb(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.J("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=ia(b).toString();U(a.i[c]);delete a.i[c]}}
k.rb=function(a,b){var c=Ie(b);c&&ng(this,a,c)};
k.sb=function(a,b){var c=Ie(b);if(c){var d=cg(this,a);if(d&&(c=jc(c,"LI")))if(c=hc(c).trim(),d.hasChildNodes()){var e=Af.A();(d=H(V(e,"content"),d))&&$b(d,c)}else $b(d,c)}};
function kg(a,b){var c=ig(a,b);if(c){y(c.children,function(a){"LI"==a.tagName&&Pb(a,{role:"menuitem"})});
Pb(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ia(c),c.id=d);(c=cg(a,b))&&Pb(c,{"aria-controls":d})}}
function ng(a,b,c){var d=ig(a,b);d&&z(b,V(a,"checked"))&&(a=jc(c,"LI"))&&(a=H("yt-ui-menu-item-checked-hid",a))&&(y(Nb("yt-ui-menu-item-checked",d),function(a){Va(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Va(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function gg(a,b){var c=ig(a,b);return c?!z(c,V(a,"content-hidden")):!1}
function jg(a){y(Ob("UL",null,a),function(a){a.tabIndex=0;var b=Vf.A();Sa(a,[V(b),V(b,"list")])})}
function ig(a,b){var c=Vc(b,"menu-content-id");return c&&(c=G(c))?(Sa(c,[V(a,"content"),V(a,"content-external")]),c):b==a.f?a.b:H(V(a,"content"),b)}
function fg(a,b){var c=ia(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[V(a,"mask")];y(Ra(b),function(a){e.push(a+"-mask")});
Sa(d,e);a.w[c]=d}return d||null}
function cg(a,b){return H(V(a,"trigger"),b)}
function lg(a,b){return xe(b,a.b)||xe(b,a.f)}
;function og(){Nf.call(this,"clickcard");this.b={};this.f={}}
w(og,Nf);ca(og);k=og.prototype;k.register=function(){og.D.register.call(this);W(this,"click",this.oa,"target");W(this,"click",this.na,"close")};
k.unregister=function(){og.D.unregister.call(this);X(this,"click",this.oa,"target");X(this,"click",this.na,"close");for(var a in this.b)U(this.b[a]);this.b={};for(a in this.f)U(this.f[a]);this.f={}};
k.oa=function(a,b,c){c.preventDefault();b=jc(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=r(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(z(b,V(this,"active"))?(this.H(a),C(b,V(this,"active"))):(this.show(a),B(b,V(this,"active"))))}};
k.show=function(a){og.D.show.call(this,a);var b=this.C(a),c=ia(a).toString();if(!Vc(b,"click-outside-persists")){if(this.b[c])return;var b=S(document,"click",t(this.pa,this,a)),d=S(window,"blur",t(this.pa,this,a));this.b[c]=[b,d]}a=S(window,"resize",t(this.Eb,this,a,void 0));this.f[c]=a};
k.H=function(a){og.D.H.call(this,a);a=ia(a).toString();var b=this.b[a];b&&(U(b),this.b[a]=null);if(b=this.f[a])U(b),delete this.f[a]};
k.pa=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=I(b.target,c)||I(ag(b.target),c));(d=d||I(document.activeElement,c)||I(ag(document.activeElement),c))||this.H(a)};
k.na=function(a){(a=I(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.H(a)};function pg(){Nf.call(this,"hovercard")}
w(pg,Nf);ca(pg);k=pg.prototype;k.register=function(){W(this,"mouseenter",this.ya,"target");W(this,"mouseleave",this.Aa,"target");W(this,"mouseenter",this.za,"card");W(this,"mouseleave",this.Ba,"card")};
k.unregister=function(){X(this,"mouseenter",this.ya,"target");X(this,"mouseleave",this.Aa,"target");X(this,"mouseenter",this.za,"card");X(this,"mouseleave",this.Ba,"card")};
k.ya=function(a){if(qg!=a){qg&&(this.H(qg),qg=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=L(b,-1<c?c:200);Tc(a,"card-timer",b.toString());qg=a;a.alt&&(Tc(a,"card-alt",a.alt),a.alt="");a.title&&(Tc(a,"card-title",a.title),a.title="")}};
k.Aa=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;L(t(this.pb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
k.pb=function(a){this.C(a).isCardHidable&&(this.H(a),qg=null)};
k.za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Ba=function(a){a&&this.H(a.cardTargetNode)};
var qg=null;function rg(a,b,c,d,e,f){this.b=a;this.B=null;this.i=H("yt-dialog-fg",this.b)||this.b;if(a=H("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ia(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.S=H("yt-dialog-focus-trap",this.b);this.fa=!1;this.o=new M;this.F=[];this.F.push(Ge(this.b,t(this.wb,this),"yt-dialog-dismiss"));this.F.push(S(this.S,"focus",t(this.kb,this),!0));sg(this);this.Ua=b;this.ab=c;this.$a=d;this.K=e;this.bb=f;this.w=
this.v=null}
var tg={LOADING:"loading",Lb:"content",Sb:"working"};function ug(a,b){a.W()||a.o.subscribe("post-all",b)}
function sg(a){a=H("yt-dialog-fg-content",a.b);var b=[];Xa(tg,function(a){b.push("yt-dialog-show-"+a)});
Ta(a,b);B(a,"yt-dialog-show-content")}
k=rg.prototype;
k.show=function(){if(!this.W()){this.B=document.activeElement;if(!this.$a){this.f||(this.f=G("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=Rb(b).height,Sb(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.f.style.height=a+"px";gf(this.f)}this.ua();a=vg(this);wg(a);this.v=S(document,"keydown",t(this.qb,this));a=this.b;d=Id("player-added",this.ua,this);Tc(a,"player-ready-pubsub-key",d);this.ab&&(this.w=S(document,"click",t(this.Ab,this)));gf(this.b);this.i.setAttribute("tabindex","0");xg(this);this.K||B(document.body,"yt-dialog-active");Bf(Af.A());Of(og.A());Of(pg.A());R("yt-ui-dialog-show-complete",this)}};
function yg(){return Da(Nb("yt-dialog"),function(a){return ff(a)})}
k.ua=function(){if(!this.bb){var a=this.b;Ua(document.body,"hide-players",!0);a&&Ua(a,"preserve-players",!0)}};
function vg(a){var b=Ob("iframe",null,a.b);y(b,function(a){var b=Vc(a,"onload");b&&(b=p(b))&&S(a,"load",b);if(b=Vc(a,"src"))a.src=b},a);
return Ha(b)}
function wg(a){y(document.getElementsByTagName("iframe"),function(b){-1==Aa(a,b)&&B(b,"iframe-hid")})}
function zg(){y(Nb("iframe-hid"),function(a){C(a,"iframe-hid")})}
k.wb=function(a){a=a.currentTarget;a.disabled||(a=Vc(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.W()){this.o.J("pre-all");this.o.J("pre-"+a);hf(this.b);Of(og.A());Of(pg.A());this.i.setAttribute("tabindex","-1");yg()||(hf(this.f),this.K||C(document.body,"yt-dialog-active"),Ae(),zg());this.v&&(U(this.v),this.v=null);this.w&&(U(this.w),this.w=null);var b=this.b;if(b){var c=Vc(b,"player-ready-pubsub-key");c&&(Kd(c),Wc(b,"player-ready-pubsub-key"))}this.o.J("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.o&&this.o.J("post-"+
a);this.B&&this.B.focus()}};
k.setTitle=function(a){$b(H("yt-dialog-title",this.b),a)};
k.qb=function(a){L(t(function(){this.Ua||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&z(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Ab=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.W=function(){return this.fa};
k.dispose=function(){ff(this.b)&&this.dismiss("dispose");U(this.F);this.F.length=0;L(t(function(){this.B=null},this),0);
this.S=this.i=null;this.o.dispose();this.o=null;this.fa=!0};
k.kb=function(a){a.stopPropagation();xg(this)};
function xg(a){L(t(function(){this.i&&this.i.focus()},a),0)}
v("yt.ui.Dialog",rg);function Ag(){wf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
w(Ag,wf);ca(Ag);k=Ag.prototype;k.register=function(){W(this,"click",this.da,"target");W(this,"click",this.Qa,"close");Bg(this)};
k.unregister=function(){Ag.D.unregister.call(this);X(this,"click",this.da,"target");X(this,"click",this.Qa,"close");this.o&&(Kd(this.o),this.o=null);this.f&&(U(this.f),this.f=null)};
k.da=function(a){if(!this.b||!ff(this.b.b)){var b=this.C(a);a=Cg(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new rg(a,c);this.i=b;var e=H("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(V(this,g));f.push(V(this,h));Sa(e,f)}this.b.show();R("yt-uix-kbd-nav-move-to",e||a);Bg(this);c||
d||(c=t(function(a){z(a.target,"yt-dialog-base")&&Dg(this)},this),this.f=S(H("yt-dialog-base",a),"click",c));
this.O(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function Bg(a){a.o||(a.o=Id("yt-uix-overlay-hide",Eg));a.b&&ug(a.b,function(){var a=Ag.A();a.i=null;a.b.dispose();a.b=null})}
function Dg(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.O(b,"overlay-hidden");a.i=null;a.f&&(U(a.f),a.f=null);a.b=null}}
function Cg(a,b){var c;if(a)if(c=H("yt-dialog",a)){var d=G("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=I(b,"yt-dialog"));return c}
function Fg(){var a=Ag.A();if(a.i)a=H("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Nb("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=I(a[b],"yt-dialog");if(ff(c)){a=a[b];break a}}a=null}return a}
k.Qa=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function Eg(){Dg(Ag.A())}
k.show=function(a){this.da(a)};var Gg={},Hg=[];function Ig(a){a=I(a,"yt-uix-button-subscription-container");return H("yt-dialog",H("unsubscribe-confirmation-overlay-container",a))}
function Jg(a,b){U(Hg);Hg.length=0;Gg[b]||(Gg[b]=Ig(a));Ag.A().show(Gg[b]);var c=Fg();return new nd(function(a){Hg.push(Ge(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Kg(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=fd(b,"mode","subscribe"),b=fd("/signin?context=popup","next",b),b=fd(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Id("LOGGED_IN",function(b){Kd(x("LOGGED_IN_PUBSUB_KEY",void 0));ra("LOGGED_IN",!0);a(b)});
ra("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
v("yt.pubsub.publish",R);function Lg(){var a=x("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!x("SESSION_INDEX")&&!x("LOGGED_IN"))}
;function Mg(){wf.call(this,"tooltip");this.b=0;this.f={}}
w(Mg,wf);ca(Mg);k=Mg.prototype;k.register=function(){W(this,"mouseover",this.X);W(this,"mouseout",this.L);W(this,"focus",this.qa);W(this,"blur",this.la);W(this,"click",this.L);W(this,"touchstart",this.Ja);W(this,"touchend",this.Z);W(this,"touchcancel",this.Z)};
k.unregister=function(){X(this,"mouseover",this.X);X(this,"mouseout",this.L);X(this,"focus",this.qa);X(this,"blur",this.la);X(this,"click",this.L);X(this,"touchstart",this.Ja);X(this,"touchend",this.Z);X(this,"touchcancel",this.Z);this.dispose();Mg.D.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.L(this.f[a]);this.f={}};
k.X=function(a){if(!(this.b&&1E3>pa()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(Wc(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Ng(this,a);Wc(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=L(b,c);
Tc(a,"tooltip-show-timer",b.toString());a.title&&(zf(a,Og(this,a)),a.title="");b=ia(a).toString();this.f[b]=a}};
k.L=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Wc(a,"tooltip-show-timer"));b=t(function(){if(a){var b=G(Pg(this,a));b&&(Qg(b),Wb(b),Wc(a,"content-id"));b=G(Pg(this,a,"arialabel"));Wb(b)}Wc(a,"tooltip-hide-timer")},this);
b=L(b,50);Tc(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
k.qa=function(a){this.b=0;this.X(a)};
k.la=function(a){this.b=0;this.L(a)};
k.Ja=function(a,b,c){c.changedTouches&&(this.b=0,(a=uf(b,V(this),c.changedTouches[0].target))&&this.X(a))};
k.Z=function(a,b,c){c.changedTouches&&(this.b=pa(),(a=uf(b,V(this),c.changedTouches[0].target))&&this.L(a))};
function Rg(a,b,c){zf(b,c);a=a.g(b,"content-id");(a=G(a))&&$b(a,c)}
function Og(a,b){return a.g(b,"tooltip-text")||b.title}
function Ng(a,b){if(b){var c=Og(a,b);if(c){var d=G(Pg(a,b));if(!d){d=document.createElement("div");d.id=Pg(a,b);d.className=V(a,"tip");var e=document.createElement("div");e.className=V(a,"tip-body");var f=document.createElement("div");f.className=V(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=V(a,"tip-content");var h=Sg(a,b),l=Pg(a,b,"content");g.id=l;Tc(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=hc(b),l=Pg(a,b,"arialabel"),f=document.createElement("div");B(f,V(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;$b(f,n);b.setAttribute("aria-labelledby",l);l=Be()||document.body;l.appendChild(f);l.appendChild(d);Rg(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",B(g,V(a,"normal-wrap")));g=z(b,V(a,"reverse"));Tg(a,b,d,e,h,g)||Tg(a,b,d,e,h,!g);var q=V(a,"tip-visible");
L(function(){B(d,q)},0)}}}}
function Tg(a,b,c,d,e,f){Ua(c,V(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Xe(b);f=new E((h.width-10)/2,f?h.height:0);var l=Ue(b);lf(new E(l.j+f.j,l.l+f.l),c,g);f=Rb(window);var n;1==c.nodeType?n=Ve(c):(c=c.changedTouches?c.changedTouches[0]:c,n=new E(c.clientX,c.clientY));c=Xe(d);var q=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),l=!!(n.j<q);f=!!(f.width<n.j+q);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Pg(a,b,c){a=V(a)+ue(b);c&&(a+="-"+c);return a}
function Sg(a,b){var c=null;yb&&z(b,V(a,"masked"))&&((c=G("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),gf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=V(a,"tip-mask")));return c}
function Qg(a){var b=G("yt-uix-tooltip-shared-mask"),c=b&&kc(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),hf(b),document.body.appendChild(b))}
;function Ug(){wf.call(this,"subscription-button");this.b=this.f=!1}
w(Ug,wf);ca(Ug);Ug.prototype.register=function(){W(this,"click",this.ea);yf(this,ge,this.Fa);yf(this,he,this.Ea);yf(this,ie,this.Hb);yf(this,le,this.Fa);yf(this,me,this.Ea);yf(this,ne,this.Ib);yf(this,pe,this.yb);yf(this,qe,this.xb)};
Ug.prototype.unregister=function(){X(this,"click",this.ea);Ug.D.unregister.call(this)};
Ug.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var Vg={ga:"hover-enabled",Sa:"yt-uix-button-subscribe",Ta:"yt-uix-button-subscribed",Jb:"ypc-enabled",Va:"yt-uix-button-subscription-container",Wa:"yt-subscription-button-disabled-mask-container"},Wg={Kb:"channel-external-id",Xa:"subscriber-count-show-when-subscribed",Ya:"subscriber-count-tooltip",Za:"subscriber-count-title",Mb:"href",Nb:"insecure",ha:"is-subscribed",Ob:"parent-url",Pb:"clicktracking",cb:"show-unsub-confirm-dialog",Qb:"show-unsub-confirm-time-frame",eb:"style-type",ia:"subscribed-timestamp",
ja:"subscription-id",Rb:"target",fb:"ypc-enabled"};k=Ug.prototype;
k.ea=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=Lg(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=Xg(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new ce(b,f,e,a,d,c);Yg(this,a)?Jg(a,b).then(function(){O(ke,g)}):O(ke,g)}else O(fe,new ae(b,e,d,c));
else Zg(this,a)};
k.Fa=function(a){this.N(a.b,this.Ha,!0)};
k.Ea=function(a){this.N(a.b,this.Ha,!1)};
k.Hb=function(a){this.N(a.b,this.Ia,!0,a.f)};
k.Ib=function(a){this.N(a.b,this.Ia,!1)};
k.yb=function(a){this.N(a.b,this.jb)};
k.xb=function(a){this.N(a.b,this.ib)};
k.Ia=function(a,b,c){b?(Tc(a,Wg.ha,"true"),c&&Tc(a,Wg.ja,c),this.g(a,Wg.cb)&&(b=new Qa,Tc(a,Wg.ia,(b.getTime()/1E3).toString()))):(Wc(a,Wg.ha),Wc(a,Wg.ia),Wc(a,Wg.ja));$g(this,a)};
function Xg(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ha=function(a,b){var c=I(a,Vg.Va);Ua(c,Vg.Wa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function $g(a,b){var c=a.g(b,Wg.eb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=Vg.Ta+c;Ua(b,Vg.Sa+c,!d);Ua(b,e,d);a.g(b,Wg.Ya)&&!a.g(b,Wg.Xa)&&(c=V(Mg.A()),Ua(b,c,!d),b.title=d?"":a.g(b,Wg.Za));d?L(function(){B(b,Vg.ga)},1E3):C(b,Vg.ga)}
k.jb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(B(a,"ypc-enabled"),Tc(a,Wg.fb,"true"))};
k.ib=function(a){this.g(a,"ypc-enabled")&&(C(a,"ypc-enabled"),Wc(a,"ypc-enabled"))};
function ah(a,b){return Ba(Nb(V(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
k.gb=function(a,b,c){var d=Ka(arguments,2);y(a,function(a){b.apply(this,Ga(a,d))},this)};
k.N=function(a,b,c){var d=ah(this,a);this.gb.apply(this,Ga([d],Ka(arguments,1)))};
function Zg(a,b){var c=t(function(a){a.discoverable_subscriptions&&ra("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ea(b)},a);
Kg(c)}
function Yg(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Qa).getTime()<1E3*(c+600))?!0:!1}
;var bh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",bh);/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var ch=window,dh=document,eh=ch.location;function fh(){}
var gh=/\[native code\]/;function Y(a,b,c){return a[b]=a[b]||c}
function hh(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function ih(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function jh(){var a;if((a=Object.create)&&gh.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var kh=Y(ch,"gapi",{});var Z;Z=Y(ch,"___jsl",jh());Y(Z,"I",0);Y(Z,"hel",10);function lh(){var a=eh.href,b;if(Z.dpo)b=Z.h;else{b=Z.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function mh(a){var b=Y(Z,"PQ",[]);Z.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function nh(a){return Y(Y(Z,"H",jh()),a,jh())}
;var oh=Y(Z,"perf",jh());Y(oh,"g",jh());var ph=Y(oh,"i",jh());Y(oh,"r",[]);jh();jh();function qh(a,b,c){b&&0<b.length&&(b=rh(b),c&&0<c.length&&(b+="___"+rh(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Y(ph,"_p",jh()),Y(b,c,jh())[a]=(new Date).getTime(),b=oh.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function rh(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var sh=jh(),th=[];function uh(a){throw Error("Bad hint"+(a?": "+a:""));}
th.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Z[b]=Y(Z,b,[]).concat(c):Y(Z,b,c)}if(b=a.u)a=Y(Z,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var vh=/^(\/[a-zA-Z0-9_\-]+)+$/,wh=[/\/amp\//,/\/amp$/,/^\/amp$/],xh=/^[a-zA-Z0-9\-_\.,!]+$/,yh=/^gapi\.loaded_[0-9]+$/,zh=/^[a-zA-Z0-9,._-]+$/;function Ah(a,b,c,d){var e=a.split(";"),f=e.shift(),g=sh[f],h=null;g?h=g(e,b,c,d):uh("no hint processor for: "+f);h||uh("failed to generate load url");b=h;c=b.match(Bh);(d=b.match(Ch))&&1===d.length&&Dh.test(b)&&c&&1===c.length||uh("failed sanity: "+a);return h}
function Eh(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Fh(a);yh.test(c)||uh("invalid_callback");b=Gh(b);d=d&&d.length?Gh(d):null;return[encodeURIComponent(a.Bb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ka?"/am="+e(a.ka):"",a.Ga?"/rs="+e(a.Ga):"",a.Ra?"/t="+e(a.Ra):"","/cb=",e(c)].join("")}
function Fh(a){"/"!==a.charAt(0)&&uh("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))uh("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");vh.test(b)||uh("invalid_prefix");c=0;for(d=wh.length;c<d;++c)wh[c].test(b)&&uh("invalid_prefix");c=Hh(a,
"k",!0);d=Hh(a,"am");e=Hh(a,"rs");a=Hh(a,"t");return{Bb:b,version:c,ka:d,Ga:e,Ra:a}}
function Gh(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");zh.test(e)&&b.push(e)}return b.join(",")}
function Hh(a,b,c){a=a[b];!a&&c&&uh("missing: "+b);if(a){if(xh.test(a))return a;uh("invalid: "+b)}return null}
var Dh=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ch=/\/cb=/g,Bh=/\/\//g;function Ih(){var a=lh();if(!a)throw Error("Bad hint");return a}
sh.m=function(a,b,c,d){(a=a[0])||uh("missing_hint");return"https://apis.google.com"+Eh(a,b,c,d)};
var Jh=decodeURI("%73cript"),Kh=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Lh(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>hh.call(b,e)&&c.push(e)}return c}
function Mh(){var a=Z.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Kh)?a:Z.nonce=null;var b=Y(Z,"us",[]);if(!b||!b.length)return Z.nonce=null;for(var c=dh.getElementsByTagName(Jh),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Kh))return Z.nonce=a}}return null}
function Nh(a){if("loading"!=dh.readyState)Oh(a);else{var b=Mh(),c="";null!==b&&(c=' nonce="'+b+'"');dh.write("<"+Jh+' src="'+encodeURI(a)+'"'+c+"></"+Jh+">")}}
function Oh(a){var b=dh.createElement(Jh);b.setAttribute("src",a);a=Mh();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=dh.getElementsByTagName(Jh)[0])?a.parentNode.insertBefore(b,a):(dh.head||dh.body||dh.documentElement).appendChild(b)}
function Ph(a,b){var c=b&&b._c;if(c)for(var d=0;d<th.length;d++){var e=th[d][0],f=th[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Qh(a,b,c){Rh(function(){var c;c=b===lh()?Y(kh,"_",jh()):jh();c=Y(nh(b),"_",c);a(c)},c)}
function Sh(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ph(a,c);var d=a?a.split(":"):[],e=c.h||Ih(),f=Y(Z,"ah",jh());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,q=n;n&&n.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var N=g.length;if(1<N){var Q=c.callback;Q&&(c.callback=function(){0==--N&&Q()})}for(;d=g.shift();)Th(d.features,c,d.hint)}else Th(d||[],c,e)}
function Th(a,b,c){function d(a,b){if(N)return 0;ch.clearTimeout(q);Q.push.apply(Q,u);var d=((kh||{}).config||{}).update;d?d(f):f&&Y(Z,"cu",[]).push(f);if(b){qh("me0",a,A);try{Qh(b,c,n)}finally{qh("me1",a,A)}}return 1}
a=ih(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var q=null,N=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=Y(nh(c),"r",[]).sort(),Q=Y(nh(c),"L",[]).sort(),A=[].concat(l);0<g&&(q=ch.setTimeout(function(){N=!0;h()},g));
var u=Lh(a,Q);if(u.length){var u=Lh(a,l),la=Y(Z,"CP",[]),T=la.length;la[T]=function(a){function b(){var a=la[T+1];a&&a()}
function c(b){la[T]=null;d(u,a)&&mh(function(){e&&e();b()})}
if(!a)return 0;qh("ml1",u,A);0<T&&la[T-1]?la[T]=function(){c(b)}:c(b)};
if(u.length){var Fc="loaded_"+Z.I++;kh[Fc]=function(a){la[T](a);kh[Fc]=null};
a=Ah(c,u,"gapi."+Fc,l);l.push.apply(l,u);qh("ml0",u,A);b.sync||ch.___gapisync?Nh(a):Oh(a)}else la[T](fh)}else d(u)&&e&&e()}
function Rh(a,b){if(Z.hee&&0<Z.hel)try{return a()}catch(c){b&&b(c),Z.hel--,Sh("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
kh.load=function(a,b){return Rh(function(){return Sh(a,b)})};function Uh(a){a=ga(a)?{callback:a}:a||{};if(a.gapiHintOverride||x("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=gd(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&cb(a,{_c:{jsl:{h:b}}})}Sh("gapi.iframes:gapi.iframes.style.common",a)}
;function Vh(){return p("gapi.iframes.getContext")()}
function Wh(a){(Vh()||Vh()).connectIframes(a)}
function Xh(a,b){Vh().addOnConnectHandler("yt",a,void 0,b)}
function Yh(){return Vh().getParentIframe()}
;var Zh="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),$h=[ge,he,ie,le,me,ne,je,oe],ai=[ge,he,ie,le,me,ne,pe,qe];function bi(a){this.b=a;this.G=null;x("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(ci(this),S(this.b,"mouseover",t(this.o,this)),S(this.b,"mouseout",t(this.$,this)),S(this.b,"click",t(this.$,this)),P(ie,oa(this.f,!0),this),P(ne,oa(this.f,!1),this),di(this))}
function ci(a){var b={url:x("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.i,a);Vh().open(b,a)}
function di(a){Lg()||Id("LOGGED_IN",function(){this.G&&(this.$(),this.G.close(),this.G=null,ci(this))},a)}
bi.prototype.i=function(a){this.G=a;a=Ug.A().i(this.b);this.f(a)};
bi.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
bi.prototype.$=function(){this.G&&this.G.restyle({show:!1})};
bi.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=p("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};pa();function ei(a){if(ea(a))return fi(a);if(ha(a)&&!ga(a)&&!(ha(a)&&0<a.nodeType))return gi(a);try{return m.JSON.stringify(a),a}catch(b){}}
function gi(a){return Ya(a,function(a){return ei(a)})}
function fi(a){return Ca(a,function(a){return ei(a)})}
;function hi(a){this.f=null;this.b=a;a=Yh();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^pa()).toString(36);a&&(Wh({role:"ytsubscribe",iframe:a,data:{id:b}}),Xh(t(function(a){this.f=a},this),this.b))}
hi.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);Xh(c,this.b)}};
hi.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);Xh(c,this.b)}};function ii(){this.b=this.f=null}
function ji(a,b){var c=p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||ki(a),e=Yh();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
ii.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function ki(a){if(!a.f){var b;b=p("gapi.iframes.makeWhiteListIframesFilter")(Zh);a.f=b}return a.f}
;function li(){this.b=new ii;this.i=!1;this.f={}}
function mi(a){y($h,function(a){if(!this.f[a.toString()]){var b=P(a,function(b){var c=b?b.Db():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:ei(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
li.prototype.o=function(a,b){var c=Ea(ai,function(b){return b.toString()==a});
if(c&&(!c.U||b)){var d;if(c.U)try{d=oc(c.U,b)}catch(f){return}var e=this.f[c.toString()];e?Qc(e,c,d):O(c,d)}};
li.prototype.v=function(a){ni(this)&&ji(this.b,{eventType:"subscribe",channelExternalId:a.b})};
li.prototype.w=function(a){ni(this)&&ji(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function ni(a){return a.i||!!x("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function oi(){Uh(function(){var a;a=Xe(G("yt-subscribe"));a={width:a.width,height:a.height};var b=pi;Vh().ready(a,null,b)})}
function pi(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=G("yt-subscribe"),d=Ug.A(),c=H(V(d),c);a&&c&&(Ug.A(),Tc(c,"parent-url",a));qi()?(Ug.A().b=!0,b&&(Ug.A().f=!0)):c&&new bi(c);a=new li;P(ie,a.v,a);P(ne,a.w,a);if(qi()){b=a.b;b.b=new hi(ki(b));mi(a);b=a.b;c=t(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",oa(b.i,c))}catch(e){}a.i=!0}}}
function qi(){var a=Yh().getOrigin();return Fa(Zh,a)}
;function ri(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(x("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Md(c,void 0):Xd(c))}}
;function si(a){J.call(this,1,arguments);this.b=a}
w(si,J);function ti(a,b){J.call(this,2,arguments);this.f=a;this.b=b}
w(ti,J);function ui(a,b,c,d){J.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(ui,J);function vi(a,b){J.call(this,1,arguments);this.f=a;this.b=b||null}
w(vi,J);function wi(a){J.call(this,1,arguments)}
w(wi,J);var xi=new K("ypc-core-load",si),yi=new K("ypc-guide-sync-success",ti),zi=new K("ypc-purchase-success",ui),Ai=new K("ypc-subscription-cancel",wi),Bi=new K("ypc-subscription-cancel-success",vi),Ci=new K("ypc-init-subscription",wi);var Di=!1,Ei=[];function Fi(a){a.b?Di?O(je,a):O(xi,new si(function(){O(Ci,new wi(a.b))})):Gi(a.f,a.o,a.i,a.source)}
function Hi(a){a.b?Di?O(oe,a):O(xi,new si(function(){O(Ai,new wi(a.b))})):Ii(a.f,a.v,a.o,a.i,a.source)}
function Ji(a){Ki(Ha(a.b))}
function Li(a){Mi(Ha(a.b))}
function Ni(a){Oi(a.i,a.f,a.b)}
function Pi(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&O(ie,new be(b,c,a.b.channelInfo))}
function Qi(a){var b=a.b;Xa(a.f,function(a,d){O(ie,new be(d,a,b[d]))})}
function Ri(a){O(ne,new Zd(a.f.itemId));a.b&&a.b.length&&(Si(a.b,ne),Si(a.b,pe))}
function Gi(a,b,c,d){var e=new Zd(a);O(ge,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=x("PLAYBACK_ID"))&&(c.plid=d);(d=x("EVENT_ID"))&&(c.ei=d);b&&Ti(b,c);Qd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:f,M:c,P:function(b,c){var d=c.response;O(ie,new be(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&ri(d.actions)},
ca:function(){O(he,e)}})}
function Ii(a,b,c,d,e){var f=new Zd(a);O(le,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=x("PLAYBACK_ID"))&&(d.plid=a);(a=x("EVENT_ID"))&&(d.ei=a);c&&Ti(c,d);Qd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,M:d,P:function(a,b){var c=b.response;O(ne,f);c.actions&&ri(c.actions)},
ca:function(){O(me,f)}})}
function Oi(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new $d(a,b,c);Qd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",M:d,onError:function(){O(te,e)},
P:function(){O(se,e)}})}}
function Ki(a){if(a.length){var b=Ja(a,0,40);O("subscription-batch-subscribe-loading");Si(b,ge);var c={};c.a=b.join(",");var d=function(){O("subscription-batch-subscribe-loaded");Si(b,he)};
Qd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",M:c,P:function(c,f){d();var e=f.response,h=e.id;if("array"==da(h)&&h.length==b.length){var l=e.channel_info_map;y(h,function(a,c){var d=b[c];O(ie,new be(d,a,l[d]))});
a.length?Ki(a):O("subscription-batch-subscribe-finished")}},
onError:function(){d();O("subscription-batch-subscribe-failure")}})}}
function Mi(a){if(a.length){var b=Ja(a,0,40);O("subscription-batch-unsubscribe-loading");Si(b,le);var c={};c.c=b.join(",");var d=function(){O("subscription-batch-unsubscribe-loaded");Si(b,me)};
Qd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",M:c,P:function(){d();Si(b,ne);a.length&&Mi(a)},
onError:function(){d()}})}}
function Si(a,b){y(a,function(a){O(b,new Zd(a))})}
function Ti(a,b){var c=gd(a),d;for(d in c)b[d]=c[d]}
;v("yt.setConfig",ra);v("ytbin.www.subscribeembed.init",function(){Di=!0;Ei.push(P(fe,Fi),P(ke,Hi));Di||Ei.push(P(je,Fi),P(oe,Hi),P(de,Ji),P(ee,Li),P(re,Ni),P(zi,Pi),P(Bi,Ri),P(yi,Qi));var a=Ug.A(),b=V(a);b in bh||(a.register(),xf(a,"yt-uix-init-"+b,a.init),xf(a,"yt-uix-dispose-"+b,a.dispose),bh[b]=a);oi()});}).call(this);
