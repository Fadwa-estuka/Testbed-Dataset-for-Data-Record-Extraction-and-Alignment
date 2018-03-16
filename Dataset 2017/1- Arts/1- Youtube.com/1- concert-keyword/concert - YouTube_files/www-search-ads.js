(function(){var n,p=this;function q(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function r(a){return"array"==ba(a)}
function ca(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function da(a){return"function"==ba(a)}
function ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return w.apply(null,arguments)}
var ha=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function z(a,b){function c(){}
c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.za=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ka(a){if(!la.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ra,"&#0;"));return a}
var ma=/&/g,na=/</g,oa=/>/g,pa=/"/g,qa=/'/g,ra=/\x00/g,la=/[\x00&<>"']/;function B(a){return-1!=a.indexOf("&")?"document"in p?sa(a):ta(a):a}
function sa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=p.document.createElement("div");return a.replace(ua,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function ta(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var ua=/&([^;\s<&]+);?/g,va=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function wa(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return va("0",Math.max(0,2-b))+a}
function xa(a,b){return a<b?-1:a>b?1:0}
;var ya=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=v(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Aa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ba(a,b){return 0<=ya(a,b)}
function Ca(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Da(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ea(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function Fa(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function Ga(a,b){return a.classList?a.classList.contains(b):Ba(Fa(a),b)}
function Ha(a,b){a.classList?a.classList.add(b):Ga(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ia(a){a.classList?a.classList.remove("contains-mute-survey"):Ga(a,"contains-mute-survey")&&(a.className=za(Fa(a),function(a){return"contains-mute-survey"!=a}).join(" "))}
;function Ja(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ka(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function La(a){var b=E,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ma(){var a=F,b;for(b in a)return!1;return!0}
var Na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Na.length;f++)c=Na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Pa={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var G;a:{var Qa=p.navigator;if(Qa){var Ra=Qa.userAgent;if(Ra){G=Ra;break a}}G=""}function H(a){return-1!=G.indexOf(a)}
;function I(){this.a=Sa}
I.prototype.w=!0;I.prototype.m=function(){return""};
I.prototype.toString=function(){return"Const{}"};
function Ta(a){return a instanceof I&&a.constructor===I&&a.a===Sa?"":"type_error:Const"}
var Sa={};function Ua(){this.a="";this.b=Va}
Ua.prototype.w=!0;var Va={};Ua.prototype.m=function(){return this.a};
function Wa(a){var b=new Ua;b.a=a;return b}
var Xa=Wa(""),Ya=/^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;function J(){this.a="";this.b=Za}
J.prototype.w=!0;J.prototype.m=function(){return this.a};
J.prototype.S=!0;J.prototype.F=function(){return 1};
var $a=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Za={};function ab(a){var b=new J;b.a=a;return b}
ab("about:blank");function K(){this.a=bb}
K.prototype.w=!0;K.prototype.m=function(){return""};
K.prototype.S=!0;K.prototype.F=function(){return 1};
var bb={};function L(){this.a="";this.f=cb;this.b=null}
L.prototype.S=!0;L.prototype.F=function(){return this.b};
L.prototype.w=!0;L.prototype.m=function(){return this.a};
function db(a){return a instanceof L&&a.constructor===L&&a.f===cb?a.a:"type_error:SafeHtml"}
var eb=/^[a-zA-Z0-9-]+$/,fb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},gb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function hb(a,b,c){var d=String(a);if(!eb.test(d))throw Error("Invalid tag name <"+d+">.");if(d.toUpperCase()in gb)throw Error("Tag name <"+d+"> is not allowed for SafeHtml.");a=String(a);var d=null,e,f="<"+a,g="";if(b)for(e in b){if(!eb.test(e))throw Error('Invalid attribute name "'+e+'".');var h=b[e];if(null!=h){var k,l=a;k=e;var m=h;if(m instanceof I)m=Ta(m);else if("style"==k.toLowerCase()){h=void 0;l=m;if(!ea(l))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+
typeof l+" given: "+l);if(!(l instanceof Ua)){m="";for(h in l){if(!/^[-_a-zA-Z0-9]+$/.test(h))throw Error("Name allows only [-_a-zA-Z0-9], got: "+h);var t=l[h];if(null!=t){if(t instanceof I)t=Ta(t);else if(Ya.test(t)){for(var A=!0,u=!0,y=0;y<t.length;y++){var C=t.charAt(y);"'"==C&&u?A=!A:'"'==C&&A&&(u=!u)}A&&u||(t="zClosurez")}else t="zClosurez";m+=h+":"+t+";"}}l=m?Wa(m):Xa}m=l instanceof Ua&&l.constructor===Ua&&l.b===Va?l.a:"type_error:SafeStyle"}else{if(/^on/i.test(k))throw Error('Attribute "'+
k+'" requires goog.string.Const value, "'+m+'" given.');if(k.toLowerCase()in fb)if(m instanceof K)m=m instanceof K&&m.constructor===K&&m.a===bb?"":"type_error:TrustedResourceUrl";else if(m instanceof J)m=m instanceof J&&m.constructor===J&&m.b===Za?m.a:"type_error:SafeUrl";else if(v(m))h=m,h instanceof J||(h=h.w?h.m():String(h),$a.test(h)||(h="about:invalid#zClosurez"),h=ab(h)),m=h.m();else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+
m+'" given.');}m.w&&(m=m.m());k=k+'="'+ka(String(m))+'"';g+=" "+k}}e=f+g;null!=c?r(c)||(c=[c]):c=[];!0===Pa[a.toLowerCase()]?e+=">":(c=ib(c),e+=">"+db(c)+"</"+a+">",d=c.F());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return M(e,d)}
function ib(a){function b(a){if(r(a))D(a,b);else{var e;a instanceof L?e=a:(e=null,a.S&&(e=a.F()),a=ka(a.w?a.m():String(a)),e=M(a,e));d+=db(e);e=e.F();0==c?c=e:0!=e&&c!=e&&(c=null)}}
var c=0,d="";D(arguments,b);return M(d,c)}
var cb={};function M(a,b){var c=new L;c.a=a;c.b=b;return c}
M("<!DOCTYPE html>",0);var jb=M("",0);M("<br>",0);function kb(a,b){var c=lb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var mb=H("Opera"),N=H("Trident")||H("MSIE"),nb=H("Edge"),ob=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),pb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");function qb(){var a=p.document;return a?a.documentMode:void 0}
var rb;a:{var sb="",tb=function(){var a=G;if(ob)return/rv\:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a);if(mb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tb&&(sb=tb?tb[1]:"");if(N){var ub=qb();if(null!=ub&&ub>parseFloat(sb)){rb=String(ub);break a}}rb=sb}var vb=rb,lb={};
function O(a){return kb(a,function(){for(var b=0,c=ja(String(vb)).split("."),d=ja(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=xa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==g[2].length,0==h[2].length)||xa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var wb;var xb=p.document;wb=xb&&N?qb()||("CSS1Compat"==xb.compatMode?parseInt(vb,10):5):void 0;var yb=!N||9<=Number(wb);!ob&&!N||N&&9<=Number(wb)||ob&&O("1.9.1");N&&O("9");var zb=N||mb||pb;function Ab(a,b){a.innerHTML=db(b)}
;function Bb(a){var b=document;return v(a)?b.getElementById(a):a}
function Cb(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Db(a,b)}
function P(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=Db(a,b)[0];return d||null}
function Db(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className;"function"==typeof h.split&&Ba(h.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function Eb(a,b){Ja(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Fb.hasOwnProperty(d)?a.setAttribute(Fb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Fb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Q(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!yb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ka(g.name),'"');if(g.type){f.push(' type="',ka(g.type),'"');var h={};Oa(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(v(g)?f.className=g:r(g)?f.className=g.join(" "):Eb(f,g));2<d.length&&Gb(e,f,d,2);return f}
function Gb(a,b,c,d){function e(c){c&&b.appendChild(v(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];if(!ca(f)||ea(f)&&0<f.nodeType)e(f);else{var g;a:{if(f&&"number"==typeof f.length){if(ea(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if(da(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Ca(f):f,e)}}}
function Hb(a,b){Gb(Ib(a),a,arguments,1)}
function Jb(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Kb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Lb(a){var b;if(zb&&!(N&&O("9")&&!O("10")&&p.SVGElement&&a instanceof p.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ea(b)&&1==b.nodeType?b:null}
function Ib(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Mb(a){var b=String.fromCharCode(215);if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Jb(a),a.appendChild(Ib(a).createTextNode(String(b)))}
function Nb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ob={V:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},ha:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},Pb=Ob,Pb=Ob;var Qb={AED:[2,"dh","\u062f.\u0625.","DH"],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,
"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"Rial","Rial"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var Rb={X:".",N:",",aa:"%",P:"0",oa:"+",la:"-",Y:"E",ba:"\u2030",O:"\u221e",ma:"NaN",W:"#,##0.###",pa:"#E0",na:"#,##0%",ia:"\u00a4#,##0.00",ja:"USD"},R=Rb,R=Rb;function Sb(a,b,c){this.B=b||R.ja;this.ka=c||0;this.H=40;this.b=1;this.M=0;this.g=3;this.I=this.f=0;this.$=!1;this.C=this.l="";this.h="-";this.o="";this.a=1;this.j=!1;this.i=[];this.J=this.Z=!1;this.A=0;if("number"==typeof a)switch(a){case 1:Tb(this,R.W);break;case 2:Tb(this,R.pa);break;case 3:Tb(this,R.na);break;case 4:a=R.ia;b=["0"];c=Qb[this.B][0]&7;if(0<c){b.push(".");for(var d=0;d<c;d++)b.push("0")}a=a.replace(/0.00/g,b.join(""));Tb(this,a);break;case 5:Ub(this,1);break;case 6:Ub(this,2);break;
default:throw Error("Unsupported pattern type.");}else Tb(this,a)}
function Tb(a,b){b.replace(/ /g,"\u00a0");var c=[0];a.l=Vb(a,b,c);for(var d=c[0],e=-1,f=0,g=0,h=0,k=-1,l=b.length,m=!0;c[0]<l&&m;c[0]++)switch(b.charAt(c[0])){case "#":0<g?h++:f++;0<=k&&0>e&&k++;break;case "0":if(0<h)throw Error('Unexpected "0" in pattern "'+b+'"');g++;0<=k&&0>e&&k++;break;case ",":0<k&&a.i.push(k);k=0;break;case ".":if(0<=e)throw Error('Multiple decimal separators in pattern "'+b+'"');e=f+g+h;break;case "E":if(a.J)throw Error('Multiple exponential symbols in pattern "'+b+'"');a.J=
!0;a.I=0;c[0]+1<l&&"+"==b.charAt(c[0]+1)&&(c[0]++,a.$=!0);for(;c[0]+1<l&&"0"==b.charAt(c[0]+1);)c[0]++,a.I++;if(1>f+g||1>a.I)throw Error('Malformed exponential pattern "'+b+'"');m=!1;break;default:c[0]--,m=!1}0==g&&0<f&&0<=e&&(g=e,0==g&&g++,h=f-g,f=g-1,g=1);if(0>e&&0<h||0<=e&&(e<f||e>f+g)||0==k)throw Error('Malformed pattern "'+b+'"');h=f+g+h;a.g=0<=e?h-e:0;0<=e&&(a.f=f+g-e,0>a.f&&(a.f=0));a.b=(0<=e?e:h)-f;a.J&&(a.H=f+a.b,0==a.g&&0==a.b&&(a.b=1));a.i.push(Math.max(0,k));a.Z=0==e||e==h;d=c[0]-d;a.C=
Vb(a,b,c);c[0]<b.length&&";"==b.charAt(c[0])?(c[0]++,1!=a.a&&(a.j=!0),a.h=Vb(a,b,c),c[0]+=d,a.o=Vb(a,b,c)):(a.h=a.l+a.h,a.o+=a.C)}
function Ub(a,b){a.A=b;Tb(a,R.W);a.f=0;a.g=2;if(0<a.f)throw Error("Can't combine significant digits and minimum fraction digits");a.M=2}
Sb.prototype.parse=function(a,b){var c=b||[0];if(0!=this.A)throw Error("Parsing of compact numbers is unimplemented");var d;a=a.replace(/ /g,"\u00a0");var e=a.indexOf(this.l,c[0])==c[0],f=a.indexOf(this.h,c[0])==c[0];e&&f&&(this.l.length>this.h.length?f=!1:this.l.length<this.h.length&&(e=!1));e?c[0]+=this.l.length:f&&(c[0]+=this.h.length);if(a.indexOf(R.O,c[0])==c[0])c[0]+=R.O.length,d=Infinity;else{d=a;var g=!1,h=!1,k=!1,l=1,m=R.X,t=R.N,A=R.Y;if(0!=this.A)throw Error("Parsing of compact style numbers is not implemented");
for(var u="";c[0]<d.length;c[0]++){var y=d.charAt(c[0]),C=Wb(y);if(0<=C&&9>=C)u+=C,k=!0;else if(y==m.charAt(0)){if(g||h)break;u+=".";g=!0}else if(y==t.charAt(0)&&("\u00a0"!=t.charAt(0)||c[0]+1<d.length&&0<=Wb(d.charAt(c[0]+1)))){if(g||h)break}else if(y==A.charAt(0)){if(h)break;u+="E";h=!0}else if("+"==y||"-"==y)u+=y;else if(1==this.a&&y==R.aa.charAt(0)){if(1!=l)break;l=100;if(k){c[0]++;break}}else if(1==this.a&&y==R.ba.charAt(0)){if(1!=l)break;l=1E3;if(k){c[0]++;break}}else break}1!=this.a&&(l=this.a);
d=parseFloat(u)/l}if(e){if(a.indexOf(this.C,c[0])!=c[0])return NaN;c[0]+=this.C.length}else if(f){if(a.indexOf(this.o,c[0])!=c[0])return NaN;c[0]+=this.o.length}return f?-d:d};
Sb.prototype.format=function(a){if(isNaN(a))return R.ma;var b=[],c;c=a;if(0==this.A)c=Xb;else{c=Math.abs(c);var d=Yb(this,1>=c?0:Zb(c)).R;c=Yb(this,d+Zb($b(this,c/Math.pow(10,d)).intValue))}a/=Math.pow(10,c.R);b.push(c.prefix);d=0>a||0==a&&0>1/a;b.push(d?this.h:this.l);if(isFinite(a))if(a=a*(d?-1:1)*this.a,this.J){var e=a;if(0==e)ac(this,e,this.b,b),bc(this,0,b);else{a=Math.floor(Math.log(e)/Math.log(10)+2E-15);var f=Math.pow(10,a);isFinite(f)&&0!==f?e/=f:(f=Math.pow(10,Math.floor(a/2)),e=e/f/f,1==
a%2&&(e=0<a?e/10:10*e));f=this.b;if(1<this.H&&this.H>this.b){for(;0!=a%this.H;)e*=10,a--;f=1}else 1>this.b?(a++,e/=10):(a-=this.b-1,e*=Math.pow(10,this.b-1));ac(this,e,f,b);bc(this,a,b)}}else ac(this,a,this.b,b);else b.push(R.O);b.push(d?this.o:this.C);b.push(c.fa);return b.join("")};
function $b(a,b){var c=Math.pow(10,a.g),d;if(0>=a.M)d=Math.round(b*c);else{d=b*c;var e=a.g;if(d){var f=a.M-Zb(d)-1;f<-e?(e=Math.pow(10,e),d=Math.round(d/e)*e):(e=Math.pow(10,f),d=Math.round(d*e)/e)}d=Math.round(d)}e=d;isFinite(e)?(d=Math.floor(e/c),c=Math.floor(e-d*c)):(d=b,c=0);return{intValue:d,sa:c}}
function ac(a,b,c,d){if(a.f>a.g)throw Error("Min value must be less than max value");d||(d=[]);b=$b(a,b);var e=Math.pow(10,a.g),f=b.intValue,g=b.sa,h=0<a.f||0<g||!1;b=a.f;h&&(b=a.f);for(var k="",l=f;1E20<l;)k="0"+k,l=Math.round(l/10);var k=l+k,m=R.X,l=R.P.charCodeAt(0),t=k.length,A=0;if(0<f||0<c){for(f=t;f<c;f++)d.push(String.fromCharCode(l));if(2<=a.i.length)for(c=1;c<a.i.length;c++)A+=a.i[c];c=t-A;if(0<c)for(var f=a.i,A=t=0,u,y=R.N,C=k.length,S=0;S<C;S++){if(d.push(String.fromCharCode(l+1*Number(k.charAt(S)))),
1<C-S)if(u=f[A],S<c){var Ad=c-S;(1===u||0<u&&1===Ad%u)&&d.push(y)}else A<f.length&&(S===c?A+=1:u===S-c-t+1&&(d.push(y),t+=u,A+=1))}else{c=k;k=a.i;f=R.N;u=c.length;y=[];for(t=k.length-1;0<=t&&0<u;t--){A=k[t];for(C=0;C<A&&0<=u-C-1;C++)y.push(String.fromCharCode(l+1*Number(c.charAt(u-C-1))));u-=A;0<u&&y.push(f)}d.push.apply(d,y.reverse())}}else h||d.push(String.fromCharCode(l));(a.Z||h)&&d.push(m);a=""+(g+e);for(e=a.length;"0"==a.charAt(e-1)&&e>b+1;)e--;for(f=1;f<e;f++)d.push(String.fromCharCode(l+1*
Number(a.charAt(f))))}
function bc(a,b,c){c.push(R.Y);0>b?(b=-b,c.push(R.la)):a.$&&c.push(R.oa);b=""+b;for(var d=R.P,e=b.length;e<a.I;e++)c.push(d);c.push(b)}
function Wb(a){a=a.charCodeAt(0);if(48<=a&&58>a)return a-48;var b=R.P.charCodeAt(0);return b<=a&&a<b+10?a-b:-1}
function Vb(a,b,c){for(var d="",e=!1,f=b.length;c[0]<f;c[0]++){var g=b.charAt(c[0]);if("'"==g)c[0]+1<f&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):e=!e;else if(e)d+=g;else switch(g){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<f&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.B;else switch(a.ka){case 0:d+=Qb[a.B][1];break;case 2:var g=a.B,h=Qb[g],d=d+(g==h[1]?g:g+" "+h[1]);break;case 1:d+=Qb[a.B][2]}break;case "%":if(!a.j&&1!=a.a)throw Error("Too many percent/permill");if(a.j&&
100!=a.a)throw Error("Inconsistent use of percent/permill characters");a.a=100;a.j=!1;d+=R.aa;break;case "\u2030":if(!a.j&&1!=a.a)throw Error("Too many percent/permill");if(a.j&&1E3!=a.a)throw Error("Inconsistent use of percent/permill characters");a.a=1E3;a.j=!1;d+=R.ba;break;default:d+=g}}return d}
var Xb={prefix:"",fa:"",R:0};function Yb(a,b){var c=1==a.A?Pb.V:Pb.ha;null==c&&(c=Pb.V);if(3>b)return Xb;b=Math.min(14,b);for(var d=c[Math.pow(10,b)],e=b-1;!d&&3<=e;)d=c[Math.pow(10,e)],e--;if(!d)return Xb;c=d.other;return c&&"0"!=c?(c=/([^0]*)(0+)(.*)/.exec(c))?{prefix:c[1],fa:c[3],R:e+1-(c[2].length-1)}:Xb:Xb}
function Zb(a){if(!isFinite(a))return 0<a?a:0;for(var b=0;1<=(a/=10);)b++;return b}
;var cc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",cc);x("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{});function dc(a){ec(arguments)}
function T(a,b){return a in cc?cc[a]:b}
function U(a){return T(a,void 0)}
function fc(a,b){da(a)&&(a=gc(a));return window.setTimeout(a,b)}
function gc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hc(b)}}:a}
function hc(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),dc("ERRORS",b))}
function ec(a){if(1<a.length){var b=a[0];cc[b]=a[1]}else for(b in a=a[0],a)cc[b]=a[b]}
var ic=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function jc(a){ec(arguments)}
function kc(a){return a in cc?cc[a]:void 0}
;function lc(a,b,c){this.h=c;this.f=a;this.i=b;this.b=0;this.a=null}
lc.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.f();return a};function mc(a){return eval("("+a+")")}
;function nc(a){this.a=a||{cookie:""}}
var oc=/\s*;\s*/;n=nc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(ha()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};
n.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(oc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
n.isEmpty=function(){return!this.a.cookie};
n.clear=function(){for(var a=(this.a.cookie||"").split(oc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};var pc=null;"undefined"!=typeof XMLHttpRequest?pc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(pc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function V(){this.h=this.h;this.i=this.i}
V.prototype.h=!1;V.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
V.prototype.D=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function qc(){this.b=this.a=null}
var sc=new lc(function(){return new rc},function(a){a.reset()},100);
qc.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function rc(){this.next=this.scope=this.a=null}
rc.prototype.set=function(a,b){this.a=a;this.scope=b;this.next=null};
rc.prototype.reset=function(){this.next=this.scope=this.a=null};var W=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a){return a?decodeURI(a):a}
function uc(a,b,c){if(r(b))for(var d=0;d<b.length;d++)uc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function vc(a,b){for(var c in b)uc(c,b[c],a);return a}
function wc(a){a=vc([],a);a[0]="";return a.join("")}
;function xc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?r(b[f])?Da(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function yc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=xc(d[1]||""),e;for(e in b)d[e]=b[e];e=vc([a],d);if(e[1]){var d=e[0],f=d.indexOf("#");0<=f&&(e.push(d.substr(f)),e[0]=d=d.substr(0,f));f=d.indexOf("?");0>f?e[1]="?":f==d.length-1&&(e[1]=void 0)}return e.join("")+c}
;function zc(a){p.setTimeout(function(){throw a;},0)}
var Ac;
function Bc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.ca;c.ca=null;a()}};
return function(a){d.next={ca:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;var Cc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Dc(){}
Dc.prototype.next=function(){throw Cc;};
Dc.prototype.K=function(){return this};
function Ec(a){if(a instanceof Dc)return a;if("function"==typeof a.K)return a.K(!1);if(ca(a)){var b=0,c=new Dc;c.next=function(){for(;;){if(b>=a.length)throw Cc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Fc(a,b){if(ca(a))try{D(a,b,void 0)}catch(c){if(c!==Cc)throw c;}else{a=Ec(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Cc)throw c;}}}
function Gc(a){if(ca(a))return Ca(a);a=Ec(a);var b=[];Fc(a,function(a){b.push(a)});
return b}
;function Hc(a){Ic||Jc();Kc||(Ic(),Kc=!0);var b=Lc,c=sc.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var Ic;function Jc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);Ic=function(){a.then(Mc)}}else Ic=function(){var a=Mc;
!da(p.setImmediate)||p.Window&&p.Window.prototype&&!H("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Ac||(Ac=Bc()),Ac(a)):p.setImmediate(a)}}
var Kc=!1,Lc=new qc;function Mc(){for(var a;a=Lc.remove();){try{a.a.call(a.scope)}catch(c){zc(c)}var b=sc;b.i(a);b.b<b.h&&(b.b++,a.next=b.a,b.a=a)}Kc=!1}
;function X(a){V.call(this);this.j=1;this.f=[];this.g=0;this.a=[];this.b={};this.l=!!a}
z(X,V);n=X.prototype;n.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.j;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.j=e+3;d.push(e);return e};
n.L=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.g)this.f.push(a),this.a[a+1]=aa;else{if(c){var d=ya(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
n.ea=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];Nc(this.a[g+1],this.a[g+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.a[g+1].apply(this.a[g+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.L(c)}}return 0!=e}return!1};
function Nc(a,b,c){Hc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.b[a];b&&(D(b,this.L,this),delete this.b[a])}else this.a.length=0,this.b={}};
n.D=function(){X.ga.D.call(this);this.clear();this.f.length=0};var Oc=q("yt.pubsub.instance_")||new X;X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.L;X.prototype.publish=X.prototype.ea;X.prototype.clear=X.prototype.clear;x("yt.pubsub.instance_",Oc);var Pc=q("yt.pubsub.subscribedKeys_")||{};x("yt.pubsub.subscribedKeys_",Pc);var Qc=q("yt.pubsub.topicToKeys_")||{};x("yt.pubsub.topicToKeys_",Qc);var Rc=q("yt.pubsub.isSynchronous_")||{};x("yt.pubsub.isSynchronous_",Rc);var Sc=q("yt.pubsub.skipSubId_")||null;
x("yt.pubsub.skipSubId_",Sc);function Tc(a,b){var c=q("yt.pubsub.instance_");if(c){var d=c.subscribe("dispose",function(){if(!Sc||Sc!=d){var c=arguments,f;f=function(){Pc[d]&&a.apply(b||window,c)};
try{Rc.dispose?f():fc(f,0)}catch(g){hc(g)}}},b);
Pc[d]=!0;Qc.dispose||(Qc.dispose=[]);Qc.dispose.push(d);return d}return 0}
function Uc(a,b){var c=Tc(function(d){a.apply(b,arguments);Vc(c)},b)}
function Vc(a){var b=q("yt.pubsub.instance_");b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete Pc[a]}))}
;function Wc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&gc(b)(k)}
var k=pc&&pc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Xc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Xc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(W)[1]||null,e=tc(a.match(W)[3]||null);d&&e?(d=c,c=a.match(W),d=d.match(W),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?tc(c.match(W)[3]||null)==e&&(Number(c.match(W)[4]||null)||null)==(Number(a.match(W)[4]||null)||null):!0;for(var f in Yc){if((e=d=T(Yc[f]))&&!(e=c)){var e=f,g=T("CORS_HEADER_WHITELIST")||{},h=tc(a.match(W)[3]||null);e=h?(g=g[h])?Ba(g,e):!1:!0}e&&(b[f]=d)}return b}
function Zc(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ba&&(!tc(a.match(W)[3]||null)||b.withCredentials||tc(a.match(W)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.G&&b.G[c])}
function $c(a,b){var c=b.format||"JSON";b.Ca&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.Da;f&&(f[d]&&delete f[d],a=yc(a,f||{}));var g=b.postBody||"",f=b.G;Zc(a,b)&&(f||(f={}),f[d]=e);f&&v(g)&&(d=xc(g),Oa(d,f),g=b.da&&"JSON"==b.da?JSON.stringify(d):wc(d));var h=!1,k,l=Wc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=ad(c,a,b.Aa);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.T&&b.T.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.wa&&b.wa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.U&&0<b.timeout&&(k=fc(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.U.call(b.context||p,l))},b.timeout))}
function ad(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=mc(a));break;case "XML":if(b=(b=b.responseXML)?bd(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=cd(a)})}c&&dd(d);
return d}
function dd(a){if(ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=M(a[b],null);a[c]=d}else dd(a[b])}}
function bd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function cd(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Yc={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var ed={},fd=0;function Y(a,b,c){a&&(c&&(c=G,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Q("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),Ib(a).body.appendChild(a)):T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Wc(a,b):gd(a,b))}
function gd(a,b){var c=new Image,d=""+fd++;ed[d]=c;c.onload=c.onerror=function(){b&&ed[d]&&b();delete ed[d]};
c.src=a}
;var hd=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,id=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function jd(a){if(a=Bb(a))a.style.visibility="visible"}
;function kd(a){this.b=a;this.a=null;a=ld(this.b);a=ia("__%s__","("+a.join("|")+")");this.a=new RegExp(a,"g");this.f={}}
var md=/__([a-z]+(?:_[a-z]+)*)__/g;function nd(a){a=Bb(a).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");return new kd(a)}
function ld(a){var b=[],c={};a.replace(md,function(a,e){e in c||(c[e]=!0,b.push(e))});
return b}
function od(a,b){var c=w(function(a,c){return b[c]||this.f[c]||""},a);
return a.b.replace(a.a,c)}
;function pd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function qd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],l,m,c=0;80>c;c++)40>c?20>c?(l=h^d&(f^h),m=1518500249):(l=d^f^h,m=1859775393):60>c?(l=d&f|h&(d|f),m=2400959708):(l=d^f^h,m=3395469782),l=((a<<5|a>>>27)&4294967295)+l+k+m+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=l;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,m+=64;for(;d<c;)if(f[l++]=a[d++],m++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,m+=64}
function d(){var a=[],d=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,qa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function rd(){}
;function sd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in td||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
sd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
sd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
sd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var td={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function ud(a,b){this.version=a;this.args=b}
function vd(a){this.topic=a}
vd.prototype.toString=function(){return this.topic};var Z=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function wd(a){return T("EXPERIMENT_FLAGS",{})[a]}
;function xd(a){ud.call(this,1,arguments)}
z(xd,ud);var yd=new vd("timing-sent");function zd(a,b,c){var d=[],e=[];if(1==(r(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Bd(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Bd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Bd(a){var b=qd();b.update(a);return b.qa().toLowerCase()}
;var Cd=ha().toString();N&&O("9");!pb||O("528");ob&&O("1.9b")||N&&O("8")||mb&&O("9.5")||pb&&O("528");ob&&!O("8")||N&&O("9");function Dd(){}
z(Dd,rd);Dd.prototype.clear=function(){var a=Gc(this.K(!0)),b=this;D(a,function(a){b.remove(a)})};function Ed(a){this.a=a}
z(Ed,Dd);n=Ed.prototype;n.isAvailable=function(){if(!this.a)return!1;try{return this.a.setItem("__sak","1"),this.a.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.a.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.a.removeItem(a)};
n.K=function(a){var b=0,c=this.a,d=new Dc;d.next=function(){if(b>=c.length)throw Cc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
n.clear=function(){this.a.clear()};
n.key=function(a){return this.a.key(a)};function Fd(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
z(Fd,Ed);function Gd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
z(Gd,Ed);var Hd=q("yt.dom.getNextId_");if(!Hd){Hd=function(){return++Id};
x("yt.dom.getNextId_",Hd);var Id=0};var Jd=q("yt.pubsub2.instance_")||new X;X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.L;X.prototype.publish=X.prototype.ea;X.prototype.clear=X.prototype.clear;x("yt.pubsub2.instance_",Jd);var Kd=q("yt.pubsub2.subscribedKeys_")||{};x("yt.pubsub2.subscribedKeys_",Kd);var Ld=q("yt.pubsub2.topicToKeys_")||{};x("yt.pubsub2.topicToKeys_",Ld);var Md=q("yt.pubsub2.isAsync_")||{};x("yt.pubsub2.isAsync_",Md);x("yt.pubsub2.skipSubKey_",null);
function Nd(a){var b=q("yt.pubsub2.instance_");b&&b.publish.call(b,yd.toString(),yd,a)}
;var E=q("yt.events.listeners_")||{};x("yt.events.listeners_",E);var Od=q("yt.events.counter_")||{count:0};x("yt.events.counter_",Od);function Pd(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function Qd(a,b){var c="click";if(a&&(a.addEventListener||a.attachEvent)){var d=Pd(a,c,b);if(!d){var d=++Od.count+"",e=!("mouseenter"!=c&&"mouseleave"!=c||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new sd(d);if(!Nb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=c,b.call(a,d)}:function(c){c=new sd(c);
c.currentTarget=a;return b.call(a,c)};
f=gc(f);a.addEventListener?("mouseenter"==c&&e?c="mouseover":"mouseleave"==c&&e?c="mouseout":"mousewheel"==c&&"MozBoxSizing"in document.documentElement.style&&(c="MozMousePixelScroll"),a.addEventListener(c,f,!1)):a.attachEvent("on"+c,f);E[d]=[a,c,b,f,!1]}}}
function Rd(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in E){var b=E[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete E[a]}}))}
function Sd(a){for(var b in E)E[b][0]==a&&Rd(b)}
function Td(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
;var Ud={log_event:"events",log_interaction:"interactions"},Vd={},Wd={},Xd=0,F=q("yt.logging.transport.logsQueue_")||{};x("yt.logging.transport.logsQueue_",F);
function Yd(){window.clearTimeout(Xd);if(!Ma()){for(var a in F){var b=Vd[a];if(!b){b=Wd[a];if(!b)continue;b=new b;Vd[a]=b}var c=b.a,c={client:{hl:c.va,gl:c.ua,clientName:c.ta,clientVersion:c.innertubeContextClientVersion}};T("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});var d={context:c};d.requestTimeMs=Math.round(ic());d[Ud[a]]=F[a];var c=a,e={},d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":T("VISITOR_DATA")},G:d,da:"JSON",U:e.U,T:e.T,onError:e.onError,
timeout:e.timeout,withCredentials:!0};a:{var e=[],f=pd(String(p.location.href)),g=p.__OVERRIDE_SID;null==g&&(g=(new nc(document)).get("SID"));if(g&&(f=(g=0==f.indexOf("https:")||0==f.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==f&&(f=(new nc(document)).get(g?"SAPISID":"APISID")),f)){var g=g?"SAPISIDHASH":"APISIDHASH",h=String(p.location.href),e=h&&f&&g?[g,zd(pd(h),f,e||null)].join(" "):null;break a}e=null}e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=T("SESSION_INDEX",0));
b="//"+b.a.xa+("/youtubei/"+b.a.innertubeApiVersion+"/"+c)+"?alt=json&key="+b.a.innertubeApiKey;c=d;c.method="POST";c.G||(c.G={});$c(b,c);delete F[a]}Ma()||Zd()}}
function Zd(){window.clearTimeout(Xd);Xd=fc(Yd,T("LOGGING_BATCH_TIMEOUT",1E4))}
;(new Fd).isAvailable();(new Gd).isAvailable();function $d(){this.a={apiaryHost:U("APIARY_HOST"),ya:U("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:T("GAPI_HINT_OVERRIDE"),gapiHintParams:U("GAPI_HINT_PARAMS"),innertubeApiKey:U("INNERTUBE_API_KEY"),innertubeApiVersion:U("INNERTUBE_API_VERSION"),ta:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),va:U("INNERTUBE_CONTEXT_HL"),ua:U("INNERTUBE_CONTEXT_GL"),xa:U("XHR_APIARY_HOST")}}
;function ae(a,b,c){V.call(this);this.a=a;this.g=b||0;this.b=c;this.f=w(this.ra,this)}
z(ae,V);n=ae.prototype;n.u=0;n.D=function(){ae.ga.D.call(this);this.isActive()&&p.clearTimeout(this.u);this.u=0;delete this.a;delete this.b};
n.start=function(a){this.isActive()&&p.clearTimeout(this.u);this.u=0;var b=this.f;a=void 0!==a?a:this.g;if(!da(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.u=2147483647<Number(a)?-1:p.setTimeout(b,a||0)};
n.isActive=function(){return 0!=this.u};
n.ra=function(){this.u=0;this.a&&this.a.call(this.b)};function be(a,b,c){var d={};d.eventTimeMs=Math.round(c||ic());d[a]=b;wd("web_gel_lact")&&(a=q("_lact",window),a=null==a?-1:Math.max(ha()-a,0),d.context={lastActivityMs:a});F.log_event=F.log_event||[];a=F.log_event;a.push(d);Wd.log_event=$d;a.length>=(Number(wd("web_logging_max_batch")||0)||20)?Yd():Zd()}
;var ce={vc:!0},de={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},ee="ap c cver ei yt_fss yt_li".split(" "),fe=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],ge=w(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||aa,Z);
function he(a,b){if(!b&&"_"!=a[0]){var c=a;Z.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Z.mark(c))}var c=ie(),d=b||ic();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(je()["tick_"+a]=b)||ic();wd("csi_on_gel")?(c=ke(),"_start"==a?be("latencyActionBaselined",{clientActionNonce:c},b):be("latencyActionTicked",{tickName:a,clientActionNonce:c},b),c=!0):c=!1;if(c=!c)c=!q("yt.timing.pingSent_");if(c&&(d=U("TIMING_ACTION"),c=ie(),q("yt.timing.ready_")&&d&&c._start&&le())){var d=!0,e=T("TIMING_WAIT",
[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&me()}}
function ne(){var a=oe().info.yt_lt="hot_bg";je().info_yt_lt=a;if(wd("csi_on_gel"))if("yt_lt"in de){var b={},c=de.yt_lt;Ba(fe,c)&&(a=!!a);b[c]=a;a=ke();b.clientActionNonce=a;be("latencyActionInfo",b)}else"yt_lt"in ee||hc(Error("Unknown label yt_lt logged with GEL CSI."))}
function le(){var a=ie();if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function me(){if(!wd("csi_on_gel")){var a=ie(),b=oe().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&r(a[d])){var e=d.slice(1);if(e in ce){var f=Aa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=q("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))pe(f,e),qe(),ge(),re(!1,void 0),jc("PREVIOUS_ACTION",T("TIMING_ACTION")),jc("TIMING_ACTION","")}else{var g=T("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:T("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+q("ytplayer.config.assets.js");(k=Z.getEntriesByName?Z.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):delete b.h5jse}a.aft=
le();se()&&"youtube"==g&&(ne(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var l in b)"_"!=l.charAt(0)&&(f[l]=b[l]);a.ps=ic();b={};l=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,l.push(d+"."+g));f.rt=l.join(",");(a=q("ytdebug.logTiming"))&&a(f,b);pe(f,e,void 0);Nd(new xd(b.aft+(h||0)))}}}
function pe(a,b,c){if(wd("debug_csi_data")){var d=q("yt.timing.csiData");d||(d=[],x("yt.timing.csiData",d));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Y(a,void 0)}catch(f){Y(a,void 0)}else Y(a);re(!0,c)}
function ke(){var a=oe().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=ha();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Cd)for(c=1,d=0;d<Cd.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Cd.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");oe().nonce=a}return a}
function ie(){return oe().tick}
function je(){var a=oe();"gel"in a||(a.gel={});return a.gel}
function oe(){return q("ytcsi.data_")||qe()}
function qe(){var a={tick:{},info:{}};x("ytcsi.data_",a);return a}
function re(a,b){x("yt.timing."+(b||"")+"pingSent_",a)}
function se(){var a=ie(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==oe().info.yt_pvis}
;new ae(te,1E3);function te(){he("vptl",0);he("vpl",0)}
;function ue(a,b,c,d){V.call(this);this.g=a;this.b=b;this.o=c;this.j=d;this.f=Q("DIV",{"class":"ads-mute-button"});Mb(this.f);this.a=Q("DIV");Ab(this.a,ve(this));this.l=P("ads-mute-undo",this.a);Qd(this.f,w(this.A,this));this.g.firstElementChild.appendChild(this.f);a=Ka(this.b.mute_survey);Ea(a);D(a,function(a){var b=Q("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),c=Q("SPAN",{"class":"yt-uix-form-input-radio-element"}),b=Q("SPAN",{"class":"yt-uix-form-input-radio-container"},b,c),b=Q("LABEL",
"ads-mute-option",b,a);Qd(b,w(this.B,this,this.b.mute_survey[a]));this.a.firstChild.appendChild(b)},this);
Qd(this.a,Td);Qd(this.l,w(this.C,this));Uc(this.dispose,this)}
z(ue,V);function ve(a){var b=a.b.mute_gone||jb,c=a.b.mute_question||jb;a=a.b.mute_undo||jb;return hb("div",{"class":"ads-mute-survey"},ib(hb("span",{"class":"ads-mute-check"}),hb("b",{},b)," ",c,hb("div",{"class":"ads-mute-undo"},a)))}
ue.prototype.D=function(){D(Cb("ads-mute-option",this.a),function(a){Sd(a)});
Sd(this.f);Kb(this.f);Sd(this.a);Kb(this.a);Sd(this.l)};
ue.prototype.A=function(a){a.stopPropagation();a.preventDefault();this.j&&Y(this.b.mute_url);this.g.firstElementChild.appendChild(this.a);Ha(Lb(this.a),"contains-mute-survey")};
ue.prototype.C=function(a){a.stopPropagation();a.preventDefault();this.b.mute_undo_url&&this.j&&Y(this.b.mute_undo_url);Ia(Lb(this.a));Kb(this.a)};
ue.prototype.B=function(a,b){b.stopPropagation();b.preventDefault();this.j&&Y(a);Kb(this.g);this.o();this.dispose()};var we,xe,ye=[];function ze(a,b){we=nd(a);xe=nd(b)}
function Ae(a){D(a,function(a){var b=a.media_template_data[0];a.line1=B(a.line1);a.line2=B(a.line2);a.line3=B(a.line3);a.url=B(a.url);b.imageUrl=B(b.imageUrl);a.display_name||"UC"!=b.channelName.substr(0,2)||(b.channelName="");b.channelName=B(a.display_name?a.display_name:b.channelName);b.imageUrl&&(b.imageUrl=b.imageUrl.replace(/http(s)?:/,""));b.imageUrl&&-1!=b.imageUrl.indexOf("/vi/")&&(b.imageUrl=b.imageUrl.replace(/([mh]q)?default\.jpg/,"mqdefault.jpg"),b.imageUrl=b.imageUrl.replace(/\/([mh]q)?([1-9])\.jpg/,
"/hq$2.jpg"));var d=a.duration/1E3,b=Math.floor(d/3600),e=d%3600,d=Math.floor(e/60),e=e%60,b=b?ia("%s:%s:%s",b.toString(),wa(d),wa(e)):ia("%s:%s",d.toString(),wa(e));a.duration=b})}
function Be(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0],f="";a.view_count&&(f=(new Sb(1)).format(a.view_count));d.innerHTML=od(we,{title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,views:f,length_seconds:a.duration,video_id:e.videoId,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl});var g=P("yt-lockup-meta-info",d);f||(g.lastElementChild.style.display="none");e.channelName||(e=P("yt-lockup-byline",d),f=P("ad-badge-byline",e),
null!=e&&(Jb(e),Hb(e,f)));a.view_url&&Y(a.view_url);b&&new ue(d,a,Ce,c);return d}
function Ce(){var a=P("pyv-afc-ads-container");0==Cb("ads-mute-button",a).length&&Kb(P("ad-info-container",a))}
function De(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0];d.innerHTML=od(xe,{title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl});b&&new ue(d,a,Ce,c);return d}
function Ee(a,b){ze(P("pyv-afc-ads-video-template",b),P("pyv-afc-ads-channel-template",b));var c=P("pyv-afc-ads-inner",b);D(a,function(a){var d=!kc("SEARCH_PYV_DISABLE_MUTE")&&a.mute_url&&a.mute_survey,f=!kc("SEARCH_PYV_DISABLE_MUTE_PINGS");d&&Ha(b,"pyv-afc-mute");a.media_template_data[0].videoId?c.appendChild(Be(a,d,f)):c.appendChild(De(a,d,f));d=a.creative_view_url;/^[\s\xa0]*$/.test(null==d?"":String(d))||(a=B(a.creative_view_url),Ba(ye,a)||ye.push(a))})}
function Fe(a){Ae(a);var b=P("pyv-afc-ads-container");if(b){if("results"==b.parentNode.id){var c=P("branded-page-v2-subnav-container",b.parentNode);if(c){var d=Q("LI");d.appendChild(b);c.parentNode&&c.parentNode.insertBefore(d,c.nextSibling)}}Ee(a,b);jd(b);D(ye,function(a){var b;b=hd.test(a)||id.test(a);Y(a,void 0,b)})}jd("results")}
;x("yt.www.ads.pyvsearch.pyvSearchTopAfcCallback",function(a){var b=P("pyv-afc-ads-container");a.length&&b?(he("afcs"),Fe(a)):jd("results");he("afc")});}).call(this);
