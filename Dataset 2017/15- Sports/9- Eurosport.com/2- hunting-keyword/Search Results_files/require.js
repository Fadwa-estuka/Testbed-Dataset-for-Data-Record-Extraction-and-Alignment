/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

var requirejs,require,define;(function(global){function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,t){if(e){var n;for(n=0;n<e.length;n+=1)if(e[n]&&t(e[n],n,e))break}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1;n-=1)if(e[n]&&t(e[n],n,e))break}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){if(n||!hasProp(e,i))r&&typeof t=="object"&&t&&!isArray(t)&&!isFunction(t)&&!(t instanceof RegExp)?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function m(e){var t,n;for(t=0;t<e.length;t++){n=e[t];if(n===".")e.splice(t,1),t-=1;else if(n===".."){if(t===0||t===1&&e[2]===".."||e[t-1]==="..")continue;t>0&&(e.splice(t-1,2),t-=2)}}}function g(e,t,n){var r,i,s,u,a,f,l,c,h,p,d,v,g=t&&t.split("/"),y=o.map,b=y&&y["*"];e&&(e=e.split("/"),l=e.length-1,o.nodeIdCompat&&jsSuffixRegExp.test(e[l])&&(e[l]=e[l].replace(jsSuffixRegExp,"")),e[0].charAt(0)==="."&&g&&(v=g.slice(0,g.length-1),e=v.concat(e)),m(e),e=e.join("/"));if(n&&y&&(g||b)){s=e.split("/");e:for(u=s.length;u>0;u-=1){f=s.slice(0,u).join("/");if(g)for(a=g.length;a>0;a-=1){i=getOwn(y,g.slice(0,a).join("/"));if(i){i=getOwn(i,f);if(i){c=i,h=u;break e}}}!p&&b&&getOwn(b,f)&&(p=getOwn(b,f),d=u)}!c&&p&&(c=p,h=d),c&&(s.splice(0,h,c),e=s.join("/"))}return r=getOwn(o.pkgs,e),r?r:e}function y(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName)return t.parentNode.removeChild(t),!0})}function b(e){var t=getOwn(o.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),r.require.undef(e),r.makeRequire(null,{skipMap:!0})([e]),!0}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e,t,n,i){var s,o,u,a,f=null,l=t?t.name:null,h=e,p=!0,m="";return e||(p=!1,e="_@r"+(d+=1)),a=w(e),f=a[0],e=a[1],f&&(f=g(f,l,i),o=getOwn(c,f)),e&&(f?o&&o.normalize?m=o.normalize(e,function(e){return g(e,l,i)}):m=e.indexOf("!")===-1?g(e,l,i):e:(m=g(e,l,i),a=w(m),f=a[0],m=a[1],n=!0,s=r.nameToUrl(m))),u=f&&!o&&!n?"_unnormalized"+(v+=1):"",{prefix:f,name:m,parentMap:t,unnormalized:!!u,url:s,originalName:h,isDefine:p,id:(f?f+"!"+m:m)+u}}function S(e){var t=e.id,n=getOwn(u,t);return n||(n=u[t]=new r.Module(e)),n}function x(e,t,n){var r=e.id,i=getOwn(u,r);hasProp(c,r)&&(!i||i.defineEmitComplete)?t==="defined"&&n(c[r]):(i=S(e),i.error&&t==="error"?n(i.error):i.on(t,n))}function T(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=getOwn(u,t);n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function N(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];typeof t=="string"&&(r.defQueueMap[t]=!0),l.push(e)}),globalDefQueue=[])}function C(e){delete u[e],delete a[e]}function k(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var s=r.id,o=getOwn(u,s);o&&!e.depMatched[i]&&!n[s]&&(getOwn(t,s)?(e.defineDep(i,c[s]),e.check()):k(o,t,n))}),n[r]=!0)}function L(){var e,n,i=o.waitSeconds*1e3,u=i&&r.startTime+i<(new Date).getTime(),f=[],l=[],c=!1,h=!0;if(t)return;t=!0,eachProp(a,function(e){var t=e.map,r=t.id;if(!e.enabled)return;t.isDefine||l.push(e);if(!e.error)if(!e.inited&&u)b(r)?(n=!0,c=!0):(f.push(r),y(r));else if(!e.inited&&e.fetched&&t.isDefine){c=!0;if(!t.prefix)return h=!1}});if(u&&f.length)return e=makeError("timeout","Load timeout for modules: "+f,null,f),e.contextName=r.contextName,T(e);h&&each(l,function(e){k(e,{},{})}),(!u||n)&&c&&(isBrowser||isWebWorker)&&!s&&(s=setTimeout(function(){s=0,L()},50)),t=!1}function A(e){hasProp(c,e[0])||S(E(e[0],null,!0)).init(e[1],e[2])}function O(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function M(e){var t=e.currentTarget||e.srcElement;return O(t,r.onScriptLoad,"load","onreadystatechange"),O(t,r.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function _(){var e;N();while(l.length){e=l.shift();if(e[0]===null)return T(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));A(e)}r.defQueueMap={}}var t,n,r,i,s,o={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},u={},a={},f={},l=[],c={},h={},p={},d=1,v=1;return i={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?c[e.map.id]=e.exports:e.exports=c[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(o.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},n=function(e){this.events=getOwn(f,e.id)||{},this.map=e,this.shim=getOwn(o.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},n.prototype={init:function(e,t,n,r){r=r||{};if(this.inited)return;this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check()},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(this.fetched)return;this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))},load:function(){var e=this.map.url;h[e]||(h[e]=!0,r.load(this.map.id,e))},check:function(){if(!this.enabled||this.enabling)return;req.onResourceCheck&&req.onResourceCheck(r,this.map,this.depMaps);var e,t,n=this.map.id,i=this.depExports,s=this.exports,o=this.factory;if(!this.inited)hasProp(r.defQueueMap,n)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{s=r.execCb(n,o,i,s)}catch(u){e=u}else s=r.execCb(n,o,i,s);this.map.isDefine&&s===undefined&&(t=this.module,t?s=t.exports:this.usingExports&&(s=this.exports));if(e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",T(this.error=e)}else s=o;this.exports=s,this.map.isDefine&&!this.ignore&&(c[n]=s,req.onResourceLoad&&req.onResourceLoad(r,this.map,this.depMaps)),C(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var e=this.map,t=e.id,n=E(e.prefix);this.depMaps.push(n),x(n,"defined",bind(this,function(n){var i,s,a,f=getOwn(p,this.map.id),l=this.map.name,c=this.map.parentMap?this.map.parentMap.name:null,h=r.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){n.normalize&&(l=n.normalize(l,function(e){return g(e,c,!0)})||""),s=E(e.prefix+"!"+l,this.map.parentMap),x(s,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),a=getOwn(u,s.id),a&&(this.depMaps.push(s),this.events.error&&a.on("error",bind(this,function(e){this.emit("error",e)})),a.enable());return}if(f){this.map.url=r.nameToUrl(f),this.load();return}i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(u,function(e){e.map.id.indexOf(t+"_unnormalized")===0&&C(e.map.id)}),T(e)}),i.fromText=bind(this,function(n,s){var u=e.name,a=E(u),f=useInteractive;s&&(n=s),f&&(useInteractive=!1),S(a),hasProp(o.config,t)&&(o.config[u]=o.config[t]);try{req.exec(n)}catch(l){return T(makeError("fromtexteval","fromText eval for "+t+" failed: "+l,l,[t]))}f&&(useInteractive=!0),this.depMaps.push(a),r.completeLoad(u),h([u],i)}),n.load(e.name,h,i,o)})),r.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){a[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,s,o;if(typeof e=="string"){e=E(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,o=getOwn(i,e.id);if(o){this.depExports[t]=o(this);return}this.depCount+=1,x(e,"defined",bind(this,function(e){if(this.undefed)return;this.defineDep(t,e),this.check()})),this.errback?x(e,"error",bind(this,this.errback)):this.events.error&&x(e,"error",bind(this,function(e){this.emit("error",e)}))}n=e.id,s=u[n],!hasProp(i,n)&&s&&!s.enabled&&r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(u,e.id);t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),e==="error"&&delete this.events[e]}},r={config:o,contextName:e,registry:u,defined:c,urlFetched:h,defQueue:l,defQueueMap:{},Module:n,makeModuleMap:E,nextTick:req.nextTick,onError:T,configure:function(e){e.baseUrl&&e.baseUrl.charAt(e.baseUrl.length-1)!=="/"&&(e.baseUrl+="/");var t=o.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(o[t]||(o[t]={}),mixin(o[t],e,!0,!0)):o[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(p[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,n){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=r.makeShimExports(e)),t[n]=e}),o.shim=t),e.packages&&each(e.packages,function(e){var t,n;e=typeof e=="string"?{name:e}:e,n=e.name,t=e.location,t&&(o.paths[n]=e.location),o.pkgs[n]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(u,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=E(t,null,!0))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function s(o,a,f){var l,h,p;return n.enableBuildCallback&&a&&isFunction(a)&&(a.__requireJsBuild=!0),typeof o=="string"?isFunction(a)?T(makeError("requireargs","Invalid require call"),f):t&&hasProp(i,o)?i[o](u[t.id]):req.get?req.get(r,o,t,s):(h=E(o,t,!1,!0),l=h.id,hasProp(c,l)?c[l]:T(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(_(),r.nextTick(function(){_(),p=S(E(null,t)),p.skipMap=n.skipMap,p.init(o,a,f,{enabled:!0}),L()}),s)}return n=n||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var n,i=e.lastIndexOf("."),s=e.split("/")[0],o=s==="."||s==="..";return i!==-1&&(!o||i>1)&&(n=e.substring(i,e.length),e=e.substring(0,i)),r.nameToUrl(g(e,t&&t.id,!0),n,!0)},defined:function(e){return hasProp(c,E(e,t,!1,!0).id)},specified:function(e){return e=E(e,t,!1,!0).id,hasProp(c,e)||hasProp(u,e)}}),t||(s.undef=function(e){N();var n=E(e,t,!0),i=getOwn(u,e);i.undefed=!0,y(e),delete c[e],delete h[n.url],delete f[e],eachReverse(l,function(t,n){t[0]===e&&l.splice(n,1)}),delete r.defQueueMap[e],i&&(i.events.defined&&(f[e]=i.events),C(e))}),s},enable:function(e){var t=getOwn(u,e.id);t&&S(e).enable()},completeLoad:function(e){var t,n,i,s=getOwn(o.shim,e)||{},a=s.exports;N();while(l.length){n=l.shift();if(n[0]===null){n[0]=e;if(t)break;t=!0}else n[0]===e&&(t=!0);A(n)}r.defQueueMap={},i=getOwn(u,e);if(!t&&!hasProp(c,e)&&i&&!i.inited){if(o.enforceDefine&&(!a||!getGlobal(a))){if(b(e))return;return T(makeError("nodefine","No define call for "+e,null,[e]))}A([e,s.deps||[],s.exportsFn])}L()},nameToUrl:function(e,t,n){var i,s,u,a,f,l,c,h=getOwn(o.pkgs,e);h&&(e=h),c=getOwn(p,e);if(c)return r.nameToUrl(c,t,n);if(req.jsExtRegExp.test(e))f=e+(t||"");else{i=o.paths,s=e.split("/");for(u=s.length;u>0;u-=1){a=s.slice(0,u).join("/"),l=getOwn(i,a);if(l){isArray(l)&&(l=l[0]),s.splice(0,u,l);break}}f=s.join("/"),f+=t||(/^data\:|\?/.test(f)||n?"":".js"),f=(f.charAt(0)==="/"||f.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+f}return o.urlArgs?f+((f.indexOf("?")===-1?"?":"&")+o.urlArgs):f},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=M(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=M(e);if(!b(t.id))return T(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},r.require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(e){if(e.readyState==="interactive")return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.20",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,isBrowser=typeof window!="undefined"&&typeof navigator!="undefined"&&!!window.document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(e,t,n,r){var i,s,o=defContextName;return!isArray(e)&&typeof e!="string"&&(s=e,isArray(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),i=getOwn(contexts,o),i||(i=contexts[o]=req.s.newContext(o)),s&&i.configure(s),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick=typeof setTimeout!="undefined"?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,n){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,n){var r=e&&e.config||{},i;if(isBrowser)return i=req.createNode(r,t,n),r.onNodeCreated&&r.onNodeCreated(i,r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),i.attachEvent&&!(i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)):(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(n),e.completeLoad(t)}catch(s){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,s,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){head||(head=e.parentNode),dataMain=e.getAttribute("data-main");if(dataMain)return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,n){var r,i;typeof e!="string"&&(n=t,t=e,e=null),isArray(t)||(n=t,t=null),!t&&isFunction(n)&&(t=[],n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(n.length===1?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),i?(i.defQueue.push([e,t,n]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg),requirejs.onResourceCheck=function(e,t,n){if(window.location.search.indexOf("debugjs")==-1)return;var r=[];for(var i=0;i<n.length;i++)r.push(n[i].id);if(r.length>0){console.log("Check : "+t.id+" (deps : "+r.join(", ")+")");for(var i=0;i<r.length;i++){var s=r[i];console.log("Dep "+s+" : ",e.defined[s])}}else console.log("Check : "+t.id);console.log("---------------------------------------------------------")},requirejs.onResourceLoad=function(e,t,n){if(window.location.search.indexOf("debugjs")==-1)return;var r=[];for(var i=0;i<n.length;i++)r.push(n[i].id);if(r.length>0){console.log("Loaded : "+t.id+" (deps : "+r.join(", ")+")");for(var i=0;i<r.length;i++){var s=r[i];console.log("Dep "+s+" : ",e.defined[s])}}else console.log("Loaded : "+t.id);console.log("---------------------------------------------------------")}})(this);