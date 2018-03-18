/*
 Nielsen SDK package v0.9.18 
 (c) 2016 The Nielsen Company 
*/
/* PLDCR build v5.0.0.9*/
window.NOLCMB.registerLib("PLDCR",function(e){"use strict";function i(e,i){var t={};return t.set=function(e,i){return t.init=!0,t.elapsed=0,t.startTimeStamp=0,"function"==typeof e&&(t.funcCall=e),isNaN(i)||(t.intervalTime=i),t},t.play=function(e){return t.isActive||(e?(t.startTimeStamp=0,t.elapsed=0,t.setTimer()):t.setTimer(t.remaining),t.isActive=!0),t},t.pause=function(){return t.isActive&&(t.isActive=!1,t.remaining-=Date.now()-t.last,t.clearTimer()),t},t.stop=function(){return t.isActive=!1,t.remaining=t.intervalTime,t.clearTimer(),t},t.clearTimer=function(){window.clearTimeout(t.timeoutObject)},t.setTimer=function(e){var i=t;"function"==typeof t.funcCall&&(isNaN(e)&&(e=t.intervalTime),t.remaining=e,t.last=Date.now(),t.clearTimer(),t.timeoutObject=window.setTimeout(function(){i.tick()},e))},t.tick=function(){t.isActive&&(t.elapsed++,t.funcCall(),t.setTimer())},t.init?t:(t.set(e,i),t)}function t(){m=d.elapsed,e._listeners.fireEvent("dcrHeartbeat",d.elapsed)}function n(i){e.globalHasFocus&&!e.globalHasFocus()&&(e._listeners.fireEvent("info",{type:"info",msg:"Page onBlur fired and stopped static timer: "+JSON.stringify(i,function(e,i){if("string"==typeof i)return i})}),d.pause())}function r(i){e._listeners.fireEvent("info",{type:"info",msg:"Page onFocus fired and playing static timer: "+JSON.stringify(i,function(e,i){if("string"==typeof i)return i})}),d.play()}function s(i){!document.hidden&&e.globalHasFocus&&e.globalHasFocus()?(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - VISIBLE"}),d.play()):(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - HIDDEN"}),d.pause())}function a(e){d.stop()}var o=e.PLDCR=e.PLDCR||{},u="5.0.0",c="9",l=window.NOLCMB,f=e.getBaseBuildVer?e.getBaseBuildVer()+c:u+c,d,p=0,m=0;return o.startDcrTick=function(){},o.latestDcrTick=function(){return m},o.init=function(o){var u=!e.globalHasFocus||e.globalHasFocus();l.browserSafeAddEventListener({element:window,eventType:"blur",func:n,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"focus",func:r,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"beforeunload",func:a,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"pagehide",func:a,useCapture:!1}),document.addEventListener&&document.addEventListener("visibilitychange",s),void 0===d&&(d=u?i(t,1e3).play(!0):i(t,1e3))},o.built||(o.built=!0,o.BUILDVERSION=f,e.bindPlayers(o,"PLDCR")),o});