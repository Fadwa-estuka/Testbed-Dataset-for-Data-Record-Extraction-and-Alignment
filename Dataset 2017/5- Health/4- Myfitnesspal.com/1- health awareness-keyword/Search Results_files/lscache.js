!function(f,k){"function"==typeof define&&define.amd?define([],k):"undefined"!=typeof module&&module.exports?module.exports=k():f.lscache=k()}(this,function(){function f(){if(void 0!==g)return g;try{p("__lscachetest__","__lscachetest__"),l("__lscachetest__"),g=!0}catch(a){g=k(a)?!0:!1}return g}function k(a){return a&&"QUOTA_EXCEEDED_ERR"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name||"QuotaExceededError"===a.name?!0:!1}function p(a,b){localStorage.removeItem(h+d+a);localStorage.setItem(h+d+a,b)}
function l(a){localStorage.removeItem(h+d+a)}function s(a){for(var b=new RegExp("^"+h+d+"(.*)"),c=localStorage.length-1;0<=c;--c){var e=localStorage.key(c);(e=(e=e&&e.match(b))&&e[1])&&0>e.indexOf(m)&&a(e,e+m)}}function t(a){var b=a+m;l(a);l(b)}function q(a){var b=a+m,c=localStorage.getItem(h+d+b);if(c&&(c=parseInt(c,u),Math.floor((new Date).getTime()/v)>=c))return l(a),l(b),!0}function w(a,b){z&&"console"in window&&"function"==typeof window.console.warn&&(window.console.warn("lscache - "+a),b&&window.console.warn("lscache - The error was: "+
b.message))}var g,n,h="lscache-",m="-cacheexpiration",u=10,v=6E4,A=Math.floor(864E13/v),d="",z=!1;return{set:function(a,b,c){if(f()){if("string"!=typeof b){if(void 0===n&&(n=null!=window.JSON),!n)return;try{b=JSON.stringify(b)}catch(e){return}}try{p(a,b)}catch(g){if(!k(g))return void w("Could not add item with key '"+a+"'",g);var x,r=[];s(function(a,b){var c=localStorage.getItem(h+d+b),c=c?parseInt(c,u):A;r.push({key:a,size:(localStorage.getItem(h+d+a)||"").length,expiration:c})});r.sort(function(a,
b){return b.expiration-a.expiration});for(var y=(b||"").length;r.length&&0<y;)x=r.pop(),w("Cache is full, removing item with key '"+a+"'"),t(x.key),y-=x.size;try{p(a,b)}catch(q){return void w("Could not add item with key '"+a+"', perhaps it's too big?",q)}}c?p(a+m,(Math.floor((new Date).getTime()/v)+c).toString(u)):l(a+m)}},get:function(a){if(!f()||q(a))return null;a=localStorage.getItem(h+d+a);if(!a||(void 0===n&&(n=null!=window.JSON),!n))return a;try{return JSON.parse(a)}catch(b){return a}},remove:function(a){f()&&
t(a)},supported:function(){return f()},flush:function(){f()&&s(function(a){t(a)})},flushExpired:function(){f()&&s(function(a){q(a)})},setBucket:function(a){d=a},resetBucket:function(){d=""},enableWarnings:function(a){z=a}}});