!function(){function t(t,e){for(var n=t.document.getElementsByTagName("link"),r=t.location.href,i=null,a=0;a<n.length;a++)if("canonical"===n[a].rel){i=n[a].href;break}e.teamIds="",e.matchId="",e.competitionIds="";var c=t.document.getElementById("fresh8-data-container");return c&&(e.teamIds=c.getAttribute("data-teamids"),e.matchId=c.getAttribute("data-matchids"),e.competitionIds=c.getAttribute("data-competitionids")),o.inApp?e.ref="about:blank":e.ref=encodeURIComponent(i||r),e}function e(t){var e="?";return Object.keys(t).forEach(function(n){var r=t[n];r&&""!==r&&(e+=n+"="+r+"&")}),e}function n(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,n.async="async",e.body.appendChild(n)}function r(t){var e=window;if(t)try{for(;e!==e.top;)e.parent.location.href,e=e.parent}catch(n){}return e}function i(t){t.__f8||(t.__f8={}),t.__f8[a]||(t.__f8[a]={}),t.__f8[a].setUndefinedProperty=function(e,n){if(t.__f8[a][e])return t.__f8[a][e];if(n)return"function"==typeof n?(t.__f8[a][e]=n(),t.__f8[a][e]):(t.__f8[a][e]=n,n);throw new Error("Trying to access f8 v"+a+" property "+e+", but its not defined")}}var o={endpoint:"https://fresh8.co/487799/load.js",shouldBreak:false,clickUrl:"",view:"homepage",advertisingID:"",inApp:false,apiVersion:"1.0.0",sport:"",competitor:"",competition:"",articleID:""},a=o.apiVersion,c=r(o.shouldBreak);i(c);var f={};f=t(c,f),f.f8URL=window.f8_url||"",f.f8Sport=window.f8_sport||"",f.adServer=o.adServer,f.clickUrl=o.clickUrl,f.view=o.view,f.advertisingID=o.advertisingID,f.articleID=o.articleID,f.inApp=o.inApp,f.sport=o.sport,f.competitor=o.competitor,f.competition=o.competition,f.cacheBusting=(new Date).getTime();var d=o.endpoint+e(f);n(d,c.document)}();