(function(){var f=this;function g(a){a=a.split(".");for(var b=f,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function h(a,b,c){return a.call.apply(a.bind,arguments)}
function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}
var m=Date.now||function(){return+new Date};
function n(a,b){var c=a.split("."),d=f;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
;var p=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};n("yt.config_",p);n("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{});function r(){this.h=this.h;this.m=this.m}
r.prototype.h=!1;r.prototype.isDisposed=function(){return this.h};
r.prototype.dispose=function(){this.h||(this.h=!0,this.o())};
r.prototype.o=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function u(a){r.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];a=a||{};this.f=0;this.G=a.timeout||1;this.c={};this.l=u.a;this.w=this.b=this.j=0;this.s=this.i=!1;this.g=[];this.B=l(this.I,this);this.F=l(this.K,this);this.C=l(this.H,this);this.D=l(this.J,this);this.u=!1;this.A=!!window.requestIdleCallback;(this.v=!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.B)}
(function(){var a=u;function b(){}
b.prototype=r.prototype;a.M=r.prototype;a.prototype=new b;a.prototype.constructor=a;a.N=function(a,b,e){for(var c=Array(arguments.length-2),d=2;d<arguments.length;d++)c[d-2]=arguments[d];return r.prototype[b].apply(a,c)}})();
u.b=1E3/60;u.c=3E3;u.f=300;u.g=3;u.a=u.b-3;function v(a,b,c,d){++a.w;var e=a.w;a.c[e]=b;a.i&&!d?a.g.push({id:e,L:c}):(a.a[c].push(e),a.s||a.i||(0!=a.b&&w(a)!=a.j&&x(a),a.start()));return e}
function y(a){a.g.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};x(a)}
function w(a){for(var b=4;b>=a.f;b--)if(0<a.a[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function z(a){try{a()}catch(b){(a=g("yt.logging.errors.log"))&&a(b)}}
u.prototype.H=function(a){var b=void 0;a&&(b=a.timeRemaining());this.u=!0;A(this,b);this.u=!1};
u.prototype.K=function(){A(this)};
u.prototype.J=function(){A(this)};
u.prototype.I=function(){this.b&&(x(this),this.start())};
function A(a,b){x(a);a.i=!0;for(var c=m()+(b||a.l),d=a.a[4];d.length;){var e=d.shift(),q=a.c[e];delete a.c[e];q&&z(q)}d=a.u?0:1;d=a.f>d?a.f:d;if(!(m()>=c)){do{a:{for(var e=a,q=d,t=3;t>=q;t--)for(var B=e.a[t];B.length;){var C=B.shift(),D=e.c[C];delete e.c[C];if(D){e=D;break a}}e=null}e&&z(e)}while(e&&m()<c)}a.i=!1;c=0;for(d=a.g.length;c<d;c++)e=a.g[c],a.a[e.L].push(e.id);a.l=u.a;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.g.length)&&a.start();a.g.length=0}
u.prototype.start=function(){this.s=!1;if(0==this.b)switch(this.j=w(this),this.j){case 1:var a=this.C;this.b=this.A?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,300);break;case 2:this.b=window.setTimeout(this.F,this.G);break;case 3:this.b=window.requestAnimationFrame(this.D)}};
function x(a){if(a.b){switch(a.j){case 1:var b=a.b;a.A?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
u.prototype.o=function(){y(this);x(this);this.v&&document.removeEventListener("visibilitychange",this.B);u.M.o.call(this)};function E(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new u(("scheduler"in p?p.scheduler:void 0)||{}),n("yt.scheduler.instance.instance_",a);return a}
function F(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}
function G(){y(E())}
var H=g("yt.scheduler.instance.timerIdMap_")||{};function I(a,b,c){if(0==c||void 0===c)return c=void 0===c,-v(E(),a,b,c);var d=window.setTimeout(function(){var c=v(E(),a,b);H[d]=c},c);
return d}
function J(a){var b=E(),c=m();z(a);a=m()-c;b.i||(b.l-=a)}
function K(a){var b=E();if(0>a)delete b.c[-a];else{var c=H[a];c?(delete b.c[c],delete H[a]):window.clearTimeout(a)}}
function L(){E().start()}
function M(){var a=E();x(a);a.s=!0}
function N(a){var b=E();b.f=a;b.start()}
function O(a){var b=E();b.f>a&&(b.f=a,b.start())}
;g("yt.scheduler.initialized")||(n("yt.scheduler.instance.dispose",F),n("yt.scheduler.instance.addJob",I),n("yt.scheduler.instance.addImmediateJob",J),n("yt.scheduler.instance.cancelJob",K),n("yt.scheduler.instance.cancelAllJobs",G),n("yt.scheduler.instance.start",L),n("yt.scheduler.instance.pause",M),n("yt.scheduler.instance.setPriorityThreshold",N),n("yt.scheduler.instance.enablePriorityThreshold",O),n("yt.scheduler.initialized",!0));}).call(this);
