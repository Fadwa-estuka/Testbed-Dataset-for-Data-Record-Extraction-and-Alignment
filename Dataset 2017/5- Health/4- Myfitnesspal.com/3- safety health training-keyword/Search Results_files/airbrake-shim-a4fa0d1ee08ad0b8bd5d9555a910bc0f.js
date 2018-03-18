(function(c){c.Airbrake=[];c.Airbrake.wrap=function(a){if(a.__airbrake__)return a;var b=function(){var f;f=g(arguments);try{return a.apply(this,f)}catch(b){return f=Array.prototype.slice.call(arguments),c.Airbrake.push({error:b,params:{arguments:f}}),null}};b.__airbrake__=!0;b.__inner__=a;for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d]);return b};c.Airbrake.onload=function(){Airbrake.addReporter(Airbrake.consoleReporter)};c.onerror=function(a,b,d,f,k){"Script error."!==a&&(k?c.Airbrake.push({error:k}):
c.Airbrake.push({error:{message:a,fileName:b,lineNumber:d,columnNumber:f||0}}))};var h=function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.src="https://cdnjs.cloudflare.com/ajax/libs/airbrake-js/0.5.8/client.min.js";a.async=!0;b.parentNode.insertBefore(a,b)},g=function(a){var b;for(b=0;b<a.length;b++){var d=a[b],f=typeof d;"function"===f?a[b]=c.Airbrake.wrap(d):d&&d.length&&"string"!==f&&(a[b]=g(d))}return a},l=function(){var a=jQuery.event.add;jQuery.event.add=
function(b,d,e,g,h){e.handler?(e.handler.guid||(e.handler.guid=jQuery.guid++),e.handler=c.Airbrake.wrap(e.handler)):(e.guid||(e.guid=jQuery.guid++),e=c.Airbrake.wrap(e));return a(b,d,e,g,h)};var b=jQuery.Callbacks;jQuery.Callbacks=function(a){a=b(a);var c=a.add;a.add=function(){return c.apply(this,g(arguments))};return a};var d=jQuery.fn.ready;jQuery.fn.ready=function(a){return d(c.Airbrake.wrap(a))}};c.addEventListener?c.addEventListener("load",h,!1):c.attachEvent&&c.attachEvent("onload",h);c.jQuery?
l():c.console&&console.warn("airbrake-js: jQuery not found; skipping jQuery instrumentation.")})(this);
