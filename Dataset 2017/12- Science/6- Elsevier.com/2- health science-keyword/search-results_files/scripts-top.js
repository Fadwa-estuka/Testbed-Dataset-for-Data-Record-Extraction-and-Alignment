/*! elsevier-matrix - v1.6.11 - 2017-02-08 */function getCookie(a){var b=new RegExp(a+"=([^;]+)"),c=b.exec(document.cookie);return null!=c?decodeURIComponent(c[1]):null}function setCookie(a,b,c){if(c=c||{},"number"==typeof c.expires){var d=c.expires,e=c.expires=new Date;e.setDate(e.getDate()+d)}var f=[a,"=",encodeURIComponent(b)];c.path=c.path||"/";for(var g in c)if(c.hasOwnProperty(g)){var h=c[g],i=["expires","domain","path"];i.indexOf(g)>-1&&(f=f.concat(["; ",g,"=",h]))}document.cookie=f.join("")}null==getCookie("referrerURL")&&(document.referrer?setCookie("referrerURL",document.referrer):setCookie("referrerURL","Direct")),"undefined"!=typeof r_windowLocation&&($.extend({getUrlVars:function(){for(var a,b=[],c=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),d=0;d<c.length;d++)a=c[d].split("="),b.push(a[0]),b[a[0]]=a[1];return b},getUrlVar:function(a){return $.getUrlVars()[a]}}),null==$.getUrlVar("rURL")&&null==$.getUrlVar("sb")&&getCookie("referrerURL")&&(null!=$.getUrlVar("utm_term")?window.location="?rURL="+getCookie("referrerURL")+"|"+$.getUrlVar("utm_term"):window.location="?rURL="+getCookie("referrerURL")));