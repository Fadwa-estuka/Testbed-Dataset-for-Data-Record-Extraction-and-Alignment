(function() {/*
 Copyright (c) 2015 Glance Networks, Inc.
*/
var m;window.GLANCE=window.GLANCE||{};window.GLANCE.VERSION="3.4.1.15";window.GLANCE.PATCH="";var n=navigator.userAgent.toLowerCase(),q=navigator.platform.toLowerCase(),r=n.match(/(edge)[\s\/:]([\w\d\.]+)?/)||n.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||n.match(/(rv):([\w\d\.]+)/)||[null,"unknown",0];"rv"===r[1]&&(r[1]="ie");n.match(/ip(?:ad|od|hone)/)||n.match(/(?:webos|android)/)||q.match(/mac|win|linux/);void 0===m&&(m=function(a){return JSON.stringify(a)});
function t(a){window.addEventListener("focus",a,void 0)}function u(a,c){var b={};b.glance_load=c;9===document.documentMode&&(b=m(b));a.postMessage(b,"*")}function w(a){window.addEventListener("message",function(c){var b;if("string"===typeof c.data)try{b=JSON.parse(c.data)}catch(d){return!1}else b=c.data;void 0!==b.glance_load&&a(c.source,b.glance_load)})}window.Sarissa&&Sarissa._SARISSA_IS_IE&&new window.XMLHttpRequest;
function x(a,c){this.name=a;var b;if(!(b=c)){var d=new y(window);b=d.f.location.hostname;for(d=d.f;""===b&&d.parent!==d;)b=d.parent.location.hostname,d=d.parent;b=z(b)}this.domain=b}x.prototype.get=function(){return this.b()?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null};
x.prototype.c=function(){var a=new Date;a.setDate(a.getDate()-1);document.cookie=escape(this.name)+"=; expires="+a.toGMTString()+"; domain="+this.domain+"; path=/"};x.prototype.b=function(){return(new RegExp("(?:^|;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)};function B(a){this.name=a}B.prototype.get=function(){return this.b()?localStorage.getItem(this.name):null};
B.prototype.c=function(){localStorage.removeItem(this.name);localStorage.removeItem(this.name+"_exp")};B.prototype.b=function(){var a=localStorage.getItem(this.name+"_exp");if(!a)return!1;a=new Date(a);return a<new Date?(this.c(),!1):!0};function D(a,c){this.a=[new x(a,c),new B(a)]}D.prototype.get=function(){return this.a[0].get()||this.a[1].get()};D.prototype.c=function(){this.a[0].c();this.a[1].c()};D.prototype.b=function(){return this.a[0].b()||this.a[1].b()};
function y(a){this.a=a.document;this.f=a;var c=[["hidden","visibilitychange"],["mozHidden","mozvisibilitychange"],["webkitHidden","webkitvisibilitychange"],["msHidden","msvisibilitychange"],["oHidden","ovisibilitychange"]];for(a=0;a<c.length&&!(c[a][0]in document);a++);}
function E(a){function c(a,b,c){function d(h){h.keyCode===b&&h[a+"Key"]&&(h=c.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor",window.GLANCE.Cobrowse[h][c](),window.removeEventListener("keydown",d,!0))}return d}for(var b in a)if(a.hasOwnProperty(b)){var d=b.match(/(ctrl|alt|shift)-(\d*)/);!d||3>d.length||window.addEventListener("keydown",c(d[1],parseInt(d[2]),a[b]),!0)}}
function z(a){var c=new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^\:\?\/]*)/),b=a.match(/^\d+\.\d+.\d+.\d+$/),c=c.exec(a);if(b)return a;if(null===c||2!==c.length)return"about:"!==a&&F("ERR_DOMAINPARSE: "+a),null;b=c[1].split(".");return 1===b.length?(F("ERR_DOMAINPARSE: "+a),null):2===b.length?b.join("."):3===b.length?b.slice(1).join("."):b.slice(b.length-3).join(".")}y.prototype.getElementsByTagName=function(a){return this.a.getElementsByTagName(a)};
function G(a,c,b){a=a.a.createElement("script");b&&a.addEventListener("load",b);a.setAttribute("type","text/javascript");a.setAttribute("charset","UTF-8");for(b=0;b<c.length;b++)a.setAttribute(c[b][0],c[b][1]);document.head.appendChild(a)}y.prototype.head=function(){return void 0!==this.a.head?this.a.head:this.getElementsByTagName("head")[0]};
function H(a,c){a.f.addEventListener&&(document.readyState.match(/complete/)?c():(a.f.addEventListener("load",c),a.a.addEventListener("DOMContentLoaded",c,!1)))}y.prototype.addEventListener=function(a,c,b){this.a.addEventListener(a,c,b)};function F(a){window.console&&window.console.log&&window.console.log(a)}function J(){this.listeners=this.a={}}J.prototype.add=function(a,c){this.a[a]=this.a[a]||[];this.a[a].push(c)};
J.prototype.remove=function(a,c){var b,d=this.a[a];void 0!==d&&(b=d.indexOf(c),0<=b&&d.splice(b,1))};window.GLANCE=window.GLANCE||{};window.GLANCE.Cobrowse=window.GLANCE.Cobrowse||{};
(function(){function a(){function a(b){return function(a){var c=b.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor";e[c][b]();a.stopPropagation();a.preventDefault()}}for(var b=document.body.querySelectorAll("[glance_button]"),c=0;b&&c<b.length;c++){var d=b[c].getAttribute("glance_button");"start"===d&&(d="startSession");b[c].addEventListener("click",a(d))}}function c(){return e.Visitor}function b(a,b){e[b][a]=function(c){f(function(){e[b][a](c)},b)}}function d(a){cookie=new D(a);return cookie.b()}
function I(){if(document.body&&!h){h=!0;a();var b=JSON.parse(k.getAttribute("data-inputevents")||"{}");E(b);k.getAttribute("data-presence")&&!p&&G(g,[["src",l+"/GlancePresenceVisitor_"+A+".js"]])}}function f(a,b){b=b||"Visitor";if(g.a.getElementById(("glance_"+b).toLowerCase()))e[b].loaded?a&&a():a&&F("SCRIPT_NOT_LOADED:"+b);else if(a&&(C._onload[b]=a),p||"Visitor"!==b||k.getAttribute("data-ui")||f(null,"VisitorUI"),G(g,[["id",("glance_"+b).toLowerCase()],["src",l+"/GlanceCobrowse"+b+"_"+A+".js"]]),
"Visitor"===b){var c,d=document.getElementsByTagName("iframe");for(c=0;c<d.length;c++)d[c].contentWindow&&u(d[c].contentWindow,{g:!0})}}if(!window.addEventListener)return null;var p=window.parent!==window,g=new y(window),h=!1,k=g.a.getElementById("cobrowsescript"),A=["3","4","1","15"].slice(0,3).join(".")+"M",e=window.GLANCE.Cobrowse,l="string"===typeof k.src?k.src.substr(0,k.src.lastIndexOf("/")):k.getAttribute("data-scriptserver");0>l.indexOf("/js")&&(l+="/js");eventlisteners=new J;if(e.Loader)F("ERR_DUP_SCRIPTS");
else{var C={load:function(a){f(a)},loadScript:function(a,b){G(g,[["src",l+"/"+a+"_"+A+".js"]],b)},_eventListeners:eventlisteners,_onload:{}};w(function(a,b){a!==window.parent&&a.parent!==window?F("UNTRUSTED_LOAD_MSG"):(b.g&&f(),b.h&&null!==g.a.getElementById("glance_visitor")&&u(a,{g:!0}))});p&&u(window.parent,{h:!0});window.addEventListener("message",function(a){if("string"!==typeof a.data){if(c().loaded)return!0;a.data.glance_invoke&&(a.data.origin=a.origin,f(function(){window.postMessage(a.data,
window.location.href)}))}});t(function(){if(c().loaded)return!0;c().inSession()&&f()});e.Visitor={loaded:!1,inSession:function(){return d("glance_ssn_info")||d("glance_ssn_info_p")},addEventListener:function(a,b){eventlisteners.add(a,b)},removeEventListener:function(a,b){eventlisteners.remove(a,b)}};var v=["showButton","toggleButton","showTerms"];p||(e.VisitorUI={},v.forEach(function(a){b(a,"VisitorUI")}));v=v.concat(["startSession","setStartParams"]);v.forEach(function(a){b(a,"Visitor")});e.Loader=
C;p||!(c().inSession()||0<window.location.href.indexOf("GlanceSession=1"))||f();H(g,I)}})();}).call(window); //# sourceMappingURL=./GlanceCobrowseLoader_3.4.1M.js.map
