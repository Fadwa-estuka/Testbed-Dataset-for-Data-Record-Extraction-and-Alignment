!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){t.exports={__pageCorrelator:"",GetCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},GetUSegs:function(){var e,t=[];return e=this.GetCookie("_g_m"),/^\.[0-9.]*\.$/.test(e)&&(t=e.split("."),t=t.slice(1,t.length-1)),t},GetZDBB:function(){var e;return e=this.GetCookie("h_zdbb"),/^[a-zA-Z0-9]{32}$/.test(e)?e:""},GetPSegs:function(){return"undefined"==typeof __ZD_SEG_?[]:__ZD_SEG_},PageCorrelator:function(){return""===this.__pageCorrelator&&(this.__pageCorrelator=this.NewCorrelator()),this.__pageCorrelator},RefreshPageCorrelator:function(){this.__pageCorrelator=this.NewCorrelator()},Init:function(){var e=document.cookie;if(""===this.GetZDBB()||e.indexOf("_g_m=")===-1){var t=window.location.hostname||window.location.host;void 0!==t&&(t=t.split(".").slice(-2).join("."));var n="https:"===document.location.protocol?"https://":"http://",r=n+"gurgle.zdbb.net/?domain=",o=r+t;n=(new Image).src=o}if("undefined"==typeof __ZD_SEG_){var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.src="//gurgle.zdbb.net/segments.js?url="+encodeURIComponent(window.location),a.type="text/javascript",i.appendChild(a)}},Event:function(e){var t={taboola:"gC3ekw7UEeWRqiIAC39GJQ"};if("object"==typeof e&&"string"==typeof e.signal&&"undefined"!=typeof t[e.signal]){var n=t[e.signal],r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return(new Image).src="//zdbb.net/n/"+n+"?"+r.join("&"),!0}return!1},GetDebugTag:function(){var e;return e=this.GetCookie("_g_q"),e.length>0?";netshelterqa="+e:""},GetAdString:function(e){var t,n,r="",o="",i="",a=";zcp="+this.PageCorrelator();return e=e||0,n=this.GetZDBB(),n.length&&(o=";zdbb="+n),t=this.GetUSegs(),t.length&&(e>0&&e<t.length&&(t.length=e),r=";s="+t.join(";s=")),t=this.GetPSegs(),t.length&&(e>0&&e<t.length&&(t.length=e),i=";p="+t.join(";p=")),a+r+i+this.GetDebugTag()}}},{}],2:[function(e,t,n){t.exports=function(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t.exports)}},{}],3:[function(e,t,n){(function(t){var n=e("../lib/guidish.js"),r=e("../lib/dmp.js");t.__ZDDMP=t.__ZDDMP||r,t.__ZDDMP.NewCorrelator=t.__ZDDMP.NewCorrelator||n,t.__ZDDMP.Init()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/dmp.js":1,"../lib/guidish.js":2}]},{},[3]);