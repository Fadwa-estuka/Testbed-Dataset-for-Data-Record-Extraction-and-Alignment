//
// source/js/ads/karma-ads-init.js
//
window.adService=window.adService||{};(function(){if(Object.keys(adService).length===0){return}var f=adService.pageTargetingValues||{},g=(typeof window.Toggles==="object")?window.Toggles:false,a=(g)?g.AdTest:false;
if(a){adService.unitValues.adDomain=(adService.mobileAds)?"test.ar.mdp.mob":"test.ar.mdp.com"}if(f.status==="supportingloggedin"){adService.unitValues.adDomain=(adService.mobileAds)?"ar.supporting.mdp.mob":"ar.supporting.mdp.com"
}f.breakpoint=(adService.mobileAds)?"mobile":false||(window.innerWidth<1024)?"tablet-portrait":"desktop";window.adServiceQ=window.adServiceQ||[];
var h=window.location.search.match(/adTestEnv=([^&]+)/i),j=window.location.search.match(/adTestMin=([^&]+)/i);window.adService=window.adService||{};
adService.filePaths=adService.filePaths||{};adService.useSSL=adService.useSSL||(window.location.protocol==="https:");adService.environment=(h!==null&&h.length>1)?h[1]:adService.environment||"www";
if(window.adService.pageTargetingValues){if(window.dataLayer&&window.dataLayer.page&&window.dataLayer.page.category){window.adService.pageTargetingValues.contentType=window.dataLayer.page.category.contentType;
window.adService.pageTargetingValues.geo=window.dataLayer.page.attributes.country}}var c,e=(adService.environment!=="www"),d=(adService.environment==="local"),b=adService.environment,i=(j!=null)?(j[1]==="true"):!e;
c=document.createElement("script");if(adService.useSSL){adService.filePaths.adServiceRender="https://"+(e?b+".":"")+"secure.recipe.com/web/"+(i?"js-min/":"")+"js/mdp/app/gpt/gpt.adServiceRender.js"
}else{adService.filePaths.adServiceRender="http://"+(e?b+".":"")+"karma.mdpcdn.com"+(d?":9999":"")+"/service/"+(i?"js-min":"js")+"/karma.footer.js"
}c.src=adService.filePaths.adServiceRender;document.body.appendChild(c)})();
//
// source/js/ads/karma-ads-helper.js
//
(function(){window.googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];var a=function(){var i=document.getElementsByClassName("slider-container")[0];
var h=function(){if((pageYOffset||0)>99){i.className=i.className.replace(" ad-docked","");i.className+=" ad-hiding"}else{i.className=i.className.replace(" ad-docked","")
}};var j=function(){i.className=i.className.replace(" ad-hiding","")};var g=function(k){k=k||10000;i.className+=" ad-docked";
setTimeout(h,k)};d.addEventListener("transitionend",j,false);googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(k){if(k.slot.getSlotId().getDomId()==="div-gpt-leaderboard-fixed-1"&&!k.isEmpty){g(adService.undockLeaderboardTimeout)
}})})};var d=document.getElementById("docking-leaderboard-container");if(d&&window.TransitionEvent){a()}googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(g){f(g)
})});var e=0;var c=false;var b=function(){var g=0,j,h;if(adService.renderAds&&typeof adService.renderAds.getSlotCount==="function"){g=adService.renderAds.getSlotCount()
}else{j=adService.gptSlots;for(h in j){if(j.hasOwnProperty(h)){g++}}}return g};var f=function(h){e++;if(h){var g=$("#"+h.slot.getSlotId().getDomId());
if(h.isEmpty||g.clientHeight===0){var k=g.parents("[data-ad-container-autocollapse]");if(k.length){k.hide()}var i=g.parents("[data-ad-container-masonry-autocollapse]");
var j=g.data("sponsored-slot");if(i.length&&!j){i.hide();c=true}}}if(!c||b()!==e){return}window.pubsub.broadcast("MasonryGridReload");
if(window.console.error){window.console.error("Masonry grid is being reloaded due to an ad slot not being targeted.")}c=false
}})();
//
// vendor/angular-file-upload/angular-file-upload-shim.min.js
//
/*! 1.4.0 */
!function(){function a(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}}var b=function(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!=navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1},c=function(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])};if(window.XMLHttpRequest&&(window.FormData?c("setRequestHeader",function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}):(c("open",function(b){return function(c,d,e){a(this),this.__url=d,b.apply(this,[c,d,e])}}),c("getResponseHeader",function(a){return function(b){return this.__fileApiXHR?this.__fileApiXHR.getResponseHeader(b):a.apply(this,[b])}}),c("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),c("abort",function(a){return function(){return this.__fileApiXHR?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),c("setRequestHeader",function(b){return function(c,d){if("__setXHR_"===c){a(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[c]=d,b.apply(this,arguments)}}),c("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isShim){var d=arguments[0],e={url:c.__url,complete:function(a,b){!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==b.status&&Object.defineProperty(c,"status",{get:function(){return b.status}}),void 0!==b.statusText&&Object.defineProperty(c,"statusText",{get:function(){return b.statusText}}),Object.defineProperty(c,"readyState",{get:function(){return 4}}),void 0!==b.response&&Object.defineProperty(c,"response",{get:function(){return b.response}}),Object.defineProperty(c,"responseText",{get:function(){return b.responseText}}),c.__fileApiXHR=b,c.onreadystatechange()},fileprogress:function(a){a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else a.apply(c,arguments)}})),window.XMLHttpRequest.__isShim=!0),!window.FormData){var d=function(a){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';if(!a.__isWrapped&&(null!=a.getAttribute("ng-file-select")||null!=a.getAttribute("data-ng-file-select"))){var c=document.createElement("div");c.innerHTML='<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>',c=c.firstChild;var d=a.parentNode;d.insertBefore(c,a),d.removeChild(a),c.appendChild(a),a.__isWrapped=!0}},e=function(a){return function(b){var c=FileAPI.getFiles(b);b.target||(b.target={}),b.target.files=c,b.target.files.item=function(a){return b.target.files[a]||null},a(b)}},f=function(a,b){return("change"===b.toLowerCase()||"onchange"===b.toLowerCase())&&"file"==a.getAttribute("type")};HTMLInputElement.prototype.addEventListener&&(HTMLInputElement.prototype.addEventListener=function(a){return function(b,c,g,h){f(this,b)?(d(this),a.apply(this,[b,e(c),g,h])):a.apply(this,[b,c,g,h])}}(HTMLInputElement.prototype.addEventListener)),HTMLInputElement.prototype.attachEvent&&(HTMLInputElement.prototype.attachEvent=function(a){return function(b,c){f(this,b)?(d(this),a.apply(this,[b,e(c)])):a.apply(this,[b,c])}}(HTMLInputElement.prototype.attachEvent)),window.FormData=FormData=function(){return{append:function(a,b,c){this.data.push({key:a,val:b,name:c})},data:[],__isShim:!0}},function(){if(window.FileAPI||(window.FileAPI={}),!FileAPI.upload){var a,c,d,e,f,g=document.createElement("script"),h=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)a=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)c=window.FileAPI.jsPath;else for(d=0;d<h.length;d++)if(f=h[d].src,e=f.indexOf("angular-file-upload-shim.js"),-1==e&&(e=f.indexOf("angular-file-upload-shim.min.js")),e>-1){c=f.substring(0,e);break}null==FileAPI.staticPath&&(FileAPI.staticPath=c),g.setAttribute("src",a||c+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(g),FileAPI.hasFlash=b()}}()}window.FileReader||(window.FileReader=function(){function a(a,c){var d={type:a,target:b,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d}var b=this,c=!1;this.listeners={},this.addEventListener=function(a,c){b.listeners[a]=b.listeners[a]||[],b.listeners[a].push(c)},this.removeEventListener=function(a,c){b.listeners[a]&&b.listeners[a].splice(b.listeners[a].indexOf(c),1)},this.dispatchEvent=function(a){var c=b.listeners[a.type];if(c)for(var d=0;d<c.length;d++)c[d].call(b,a)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var d=function(d){if(c||(c=!0,b.onloadstart&&this.onloadstart(a("loadstart",d))),"load"===d.type){b.onloadend&&b.onloadend(a("loadend",d));var e=a("load",d);b.onload&&b.onload(e),b.dispatchEvent(e)}else if("progress"===d.type){var e=a("progress",d);b.onprogress&&b.onprogress(e),b.dispatchEvent(e)}else{var e=a("error",d);b.onerror&&b.onerror(e),b.dispatchEvent(e)}};this.readAsArrayBuffer=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsBinaryString=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}})}();
//
// vendor/angularjs/1.3.11/angular.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.11/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
oa&&a?!0:F(b)||D(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(D(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function H(){}function pa(b){return b}function da(b){return function(){return b}}function A(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function I(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function qa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(I(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(D(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;D(a)?a.length=
0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)D(b)?a=Ea(b,[],c,d):qa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):I(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function ra(b,a){if(D(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(I(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(D(b)){if(!D(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||D(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function nc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&
(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return F(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?D(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){D(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){I(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Nd(){var b;uc||((sa=M.jQuery)&&sa.fn.on?(B=sa,z(sa.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=sa.cleanData,sa.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=sa._data(e,"events"))&&c.$destroy&&sa(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ka("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&D(b)&&(b=b[b.length-1]);
Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,injector:Ob,noop:H,bind:nc,toJson:$a,
fromJson:oc,identity:pa,isUndefined:A,isDefined:y,isString:F,isFunction:G,isObject:I,isNumber:V,isElement:mc,isArray:D,version:Qd,isDate:qa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:ab,reloadWithDebugInfo:Kd});bb=Od(M);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",Rd)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,form:Ud,script:Vd,select:Wd,style:Xd,
option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function cb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===oa||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!I(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=D(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ra(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw F(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else D(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(I(b))s(b,kc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||D(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(A(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):D(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw D(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Vb(b,a,g),l,q,n;q=0;for(l=k.length;q<l;q++){n=k[q];if("string"!==
typeof n)throw Ga("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}D(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((D(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return I(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new db([],!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=n.$injector=h(n,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||H)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});C=b(N,
a)})()}function g(){h();l()}function h(){x=b.history.state;x=A(x)?null:x;fa(x,J)&&(x=J);J=x}function l(){if(E!==m.url()||P!==x)E=m.url(),P=x,s(W,function(a){a(m.url(),x)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,p={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],C;m.addPollFn=function(a){A(C)&&f(100,r);L.push(a);return a};var x,P,E=q.href,S=a.find("base"),X=null;h();P=x;m.url=function(a,c,e){A(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=P===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;P=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),P=x);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return x};var W=[],wa=!1,J=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?n.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==y)for(y=n.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};m.defer.cancel=function(a){return p[a]?(delete p[a],O(a),e(H),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!A(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};n=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){Ma(a,"directive");F(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";I(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(n));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,p,v,w,L,C,x){function P(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,n,p,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(n=h.length;q<n;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,p=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,p)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,n,r,p=0;p<a.length;p++){l=new Xb;k=W(a[p],[],l,0===p?d:t,e);(f=k.length?ea(k,a[p],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(p,f,l),n=!0,r=r||f;f=null}return n?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case oa:ca(b,ya(ua(a)),"E",d,g);for(var k,q,n,r=a.attributes,p=0,w=r&&r.length;p<w;p++){var O=!1,L=!1;k=r[p];l=k.name;q=U(k.value);k=ya(l);if(n=fb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");A(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Pa(a,b,q,k,n);ca(b,k,"A",d,g,O,L)}a=a.className;I(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==
oa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function J(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,n,r){function w(a,b,c,d){if(a){c&&(a=J(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=J(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});n.push(b)}}function L(a,
b,c,d){var e,f="data",g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}D(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);H&&(d=P);c||(c=H?W.parent():W);return h(a,
b,d,c,wa)}var r,w,u,x,P,eb,W,J;d===f?(J=e,W=e.$$element):(W=B(f),J=new Xb(W,e));S&&(x=c.$new(!0));h&&(eb=l,eb.$$boundTransclude=h);C&&(X={},P={},s(C,function(a){var b={$scope:a===S||a.$$isolateScope?x:c,$element:W,$attrs:J,$transclude:eb};u=a.controller;"@"==u&&(u=J[a.name]);b=p(u,b,!0,a.controllerAs);P[a.name]=b;H||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,x,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=x;g&&
g.identifier&&!0===S.bindToController&&(xa=g.instance);s(x.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":J.$observe(e,function(a){xa[d]=a});J.$$observers[e].$$scope=c;J[e]&&(xa[d]=b(J[e])(c));break;case "=":if(f&&!J[e])break;h=O(J[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",J[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);
return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(J[e],f):c.$watch(O(J[e],f),null,h.literal);x.$on("$destroy",f);break;case "&":h=O(J[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?x:c,W,J,w.require&&L(w.directiveName,w.require,W,P),eb);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=x);a&&a(wa,f.childNodes,t,h);for(g=n.length-1;0<=g;g--)w=n[g],$(w,w.isolateScope?x:c,W,J,w.require&&L(w.directiveName,w.require,
W,P),eb)}r=r||{};for(var x=-Number.MAX_VALUE,P,C=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,A=!1,H=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,fb=K.$$end;Pa&&(aa=wa(d,Pa,fb));N=t;if(x>K.priority)break;if(N=K.scope)K.templateUrl||(I(N)?(Oa("new/isolated scope",S||P,K,aa),S=K):Oa("new/isolated scope",S,K,aa)),P=P||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,
C=C||{},Oa("'"+z+"' controller",C[z],K,aa),C[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Oa("transclusion",ea,K,aa),ea=K),"element"==N?(H=!0,x=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Za.call(N,0),d),Aa=E(N,f,x,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(A=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];
d=N[0];if(1!=N.length||d.nodeType!==oa)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)A=!0,Oa("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,n,{controllerDirectives:C,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,fb):Q&&w(Q.pre,
Q.post,Pa,fb)}catch(qf){c(qf,va(aa))}K.terminal&&(v.terminal=!0,x=Math.max(x,K.priority))}v.scope=P&&!0===P.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=H;v.templateOnThisElement=A;v.transclude=Aa;r.hasElementTranscludeDirective=H;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,p=e.length;r<
p;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function A(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(P(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,n=b[0],p=a.shift(),w=z({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),O=G(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,u=p.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(p.replace){r=Rb.test(r)?Tc(Wb(u,
U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==oa)throw ja("tplrt",p.name,O);r={$attr:{}};V(d,b,L);var x=W(L,[],r);I(p.scope)&&y(x);a=x.concat(a);Qc(c,r)}else L=n,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,p,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var C=l.shift(),E=l.shift(),x=b[0];if(!r.$$destroyed){if(v!==n){var J=v.className;h.hasElementTranscludeDirective&&p.replace||(x=Tb(L));V(C,B(v),x);P(B(x),J)}v=k.transcludeOnThisElement?X(r,k.transclude,
E):E;k(q,r,x,d,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||E.$$addBindingClass(e);E.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,
h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<
h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());sa?(Pb=!0,sa.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,
va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=
Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=x(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+x(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=x(U(h[0]),!0);2===h.length&&
(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?pa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},fb=
/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];D(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;E.$$addBindingClass=k?function(a){P(a,"ng-binding")}:H;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;E.$$addScopeClass=k?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:H;return E}]}function ya(b){return cb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=
d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");I(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!I(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,
l,k){var m,n,q;l=!0===l;k&&F(k)&&(q=k);F(g)&&(k=g.match(c),n=k[1],q=q||k[3],g=b.hasOwnProperty(n)?b[n]:vc(h.$scope,n,!0)||(a?vc(e,n,!0):t),sb(g,n,!0));if(l)return l=(D(g)?g[g.length-1]:g).prototype,m=Object.create(l||null),q&&f(h,q,m,n||g.name),z(function(){d.invoke(g,m,h,n);return m},{instance:m,identifier:q});m=d.instantiate(g,h,n);q&&f(h,q,m,n||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(F(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=I(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,
a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return I(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(Zb),put:ra(Zb),patch:ra(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=
[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},
a);e.headers=function(a){var c=b.headers,e=z({},a.headers),f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);A(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});A(a.withCredentials)&&!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}P&&(200<=b&&300>b?P.put(X,[b,c,Wc(d),e]):P.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,
b,d,e){b=Math.max(b,0);(200<=b&&300>b?C.resolve:C.reject)({data:a,status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var C=h.defer(),x=C.promise,P,E,s=c.headers,X=n(c.url,c.params);k.pendingRequests.push(c);x.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=I(c.cache)?c.cache:I(b.cache)?b.cache:q);P&&(E=P.get(X),y(E)?E&&
G(E.then)?E.then(w,w):D(E)?m(E[1],E[0],ra(E[2]),E[3]):m(E,200,{},"OK"):P.put(X,x));A(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return x}function n(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||A(a)||(D(a)||(a=[a]),s(a,function(a){I(a)&&(a=qa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));
return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,
vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,
h,l,k,m,n,q,u){function r(){v&&v();w&&w.abort()}function O(a,d,e,f,g){C!==t&&c.cancel(C);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a;d[p].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){O(k,a,d[p].data,"",b);d[p]=H})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||
"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<n)var C=c(r,n);else n&&G(n.then)&&n.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):
a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function p(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,C=[],x=[],P=f.length,E=[],s=[];L<P;)if(-1!=(v=f.indexOf(b,L))&&-1!=
(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,v))),L=f.substring(v+h,w),C.push(L),x.push(c(L,p)),L=w+l,s.push(E.length),E.push("");else{L!==P&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||C.length){var X=function(a){for(var b=0,c=C.length;b<c;b++){if(r&&A(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=x[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,
b,c){var d;return a.$watchGroup(x,function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,n=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=
m(function(){r.notify(q++);0<l&&q>=l&&(r.resolve(q),n(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?
d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Fb("ipthprfx",
a,c);ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=
function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),A(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):
!1}}function cd(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(A(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):I(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),
f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var n=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(n),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(n,n);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&
!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=n&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,
b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===
b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(l){}return a?
function(){var a=[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ta(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===
b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function gb(b,a,c,d,e){ma(b,e);ma(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=ta(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=ma(h,e)}f=ta(c.shift(),e);ma(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ta(b,f);ta(a,f);ta(c,f);ta(d,f);ta(e,f);var h=function(a){return ma(a,
f)},l=g||Qa(b)?h:pa,k=g||Qa(a)?h:pa,m=g||Qa(c)?h:pa,n=g||Qa(d)?h:pa,q=g||Qa(e)?h:pa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=n(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ma,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=
6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){ta(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,
c,d){return gb(a,d,b,c,b)};return e[b]=f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===
typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,n=e.length;q<n;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,
c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&
c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var C=g?a:b;v=C[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new hb(v,
c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),C[L]=v);return n(v,f);case "function":return n(d,f);default:return n(H,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,
b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);
this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(I(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=
this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},
n=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=m;n.all=function(a){var b=new g,c=0,d=D(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};
return n}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector",
"$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}
function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);
d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),
e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(I(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==
a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,n=g(a,c),q=[],m={},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(l)if(I(e))if(Ta(e)){h=Array(e.length);
for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,J;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{J=O.shift(),J.scope.$eval(J.expression,J.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=
!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===n?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(A){f(A)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;p.length;)try{p.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=
function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){p.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;
}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},
l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){f(n)}else d.splice(k,1),k--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],p=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});
return a}function Te(){this.SCE_CONTEXTS=na;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[na.HTML]=e(g);h[na.CSS]=e(g);h[na.URL]=e(g);h[na.JS]=e(g);h[na.RESOURCE_URL]=e(h[na.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===na.RESOURCE_URL){var g=Ba(e.toString()),n,q,u=!1;n=0;for(q=b.length;n<q;n++)if(d(b[n],g)){u=!0;break}if(u)for(n=0,q=a.length;n<q;n++)if(d(a[n],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===na.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Ra)throw Ca("iequirks");var d=ra(na);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=pa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(na,function(a,b){var c=Q(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var n in l)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;D(g)?g=g.filter(function(a){return a!==
Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).finally(function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+
gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,n=(m?d:c).defer(),q=n.promise;l=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=n;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?
Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(I(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!D(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=I(b)&&"$"in b;!0===a?a=fa:G(a)||(a=function(a,b){if(I(a)||I(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});
return function(e){return d&&!I(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(D(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,
a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||I(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&
"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",n=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(n=k.length-q,m=0;m<n;m++)0===(n-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=n;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,
e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=
pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){A(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){V(b)&&(b=b.toString());return D(b)||F(b)?(a=Infinity===Math.abs(Number(a))?Number(a):ba(a))?0<a?b.slice(0,a):b.slice(a):F(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=D(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||pa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,null,a)});s(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(qa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?qa(a)?a:c(a):t}td(e,f,g,h);
ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!qa(a))throw Mb("datefmt",a);if(n(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||A(s)||c(a)>=s};
g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||A(p)||c(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=I(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!D(a)){if(F(a))return a.split(" ");if(I(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=ra(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return F(b)?b.toUpperCase():b},Ra,B,sa,Za=[].slice,rf=[].splice,Pf=[].push,Da=Object.prototype.toString,Ka=T("ng"),ga=M.angular||
(M.angular={}),bb,nb=0;Ra=Y.documentMode;H.$inject=[];pa.$inject=[];var D=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(y(ab.isActive_))return ab.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,oa=1,pb=3,Qd={full:"1.3.11",major:1,
minor:3,dot:11,codeName:"spiffy-manatee"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,inheritedData:Db,scope:function(b){return B.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=cb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===oa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(I(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===oa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===oa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===oa){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;A(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Tb,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=z(e,c)),c=ra(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:D(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:D(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=D(c)?c:c.split(" ");d=D(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:H,cancel:H}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(A(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(F(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(I(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=A(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var hb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};hb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});hb.prototype={constructor:hb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(hb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);ta(h,c);return g?ma(g[h],c):t},{assign:function(e,f,g){var h=ta(d(e,g),c),l=ma(a(e,g),c);l||a.assign(e,
l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||H;if(f)for(var m=d.length;m--;)f[m]=ma(d[m](g,h),e);ma(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ma(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),na={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in
g)){var l=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(gb(a,null,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(gb(a,null,m,t,m),m=c,gb(a,null,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&gb(a,null,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),
Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd=
{text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(qa(a))return a;if(F(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());
return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||A(h)||a>=h};d.$observe("min",function(a){y(a)&&
!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,
c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};
e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:H,button:H,submit:H,reset:H,file:H},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],ag=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return ag.test(c.ngValue)?function(a,c,f){f.$set("value",
a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];
g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Cc={},bg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};bg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,p,v,w,L=function(){v&&(v.remove(),v=null);p&&(p.$destroy(),p=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});p=c;w=a;p.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,
Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return D(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},kb="ng-valid",vd="ng-invalid",Sa="ng-pristine",Kb="ng-dirty",xd="ng-pending",Mb=new T("ngModel"),cg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var n=f(d.ngModel),q=n.assign,u=n,r=q,O=null,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=n(a);G(d)&&(d=c(a));return d};r=function(a,c){G(n(a))?g(a,{$$$p:p.$modelValue}):q(a,p.$modelValue)}}else if(!n.assign)throw Mb("nonassign",d.ngModel,va(e));
};this.$render=H;this.$isEmpty=function(a){return A(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Sa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(p.$error[p.$$parserName||"parse"]?!1:t,a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=
f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(p.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(p.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(p.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Mb("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},H):l(!0)}function h(a,c){m===
w&&p.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=p.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(p.$validators,function(a,c){h(c,null)}),s(p.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(O);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=
function(){var c=p.$$lastCommittedViewValue,d=A(c)?t:!0;if(d)for(var e=0;e<p.$parsers.length;e++)if(c=p.$parsers[e](c),A(c)){d=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var f=p.$modelValue,g=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;g&&(p.$modelValue=c,p.$modelValue!==f&&p.$$writeModelToScope());p.$$runValidators(d,c,p.$$lastCommittedViewValue,function(a){g||(p.$modelValue=a?c:t,p.$modelValue!==f&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,
p.$modelValue);s(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=
u(a);if(c!==p.$modelValue){p.$modelValue=p.$$rawModelValue=c;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(t,c,f,H))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:cg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(kb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);
l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],dg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=
this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(dg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||
0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+n+r,p=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-n));c===v||d&&isNaN(v)||(p(),p=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;
a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],n=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],
y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var p,v,w,A,z={$id:Na};u?p=a(u):(w=function(a,c){return Na(c)},A=function(a){return a});return function(a,f,g,k,m){p&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return p(a,z)});var u=ha();a.$watchCollection(n,function(g){var k,p,n=f[0],E,z=ha(),H,S,N,D,G,C,I;q&&(a[q]=g);if(Ta(g))G=g,p=v||w;else{p=v||A;G=[];for(I in g)g.hasOwnProperty(I)&&
"$"!=I.charAt(0)&&G.push(I);G.sort()}H=G.length;I=Array(H);for(k=0;k<H;k++)if(S=g===G?k:G[k],N=g[S],D=p(S,N,k),u[D])C=u[D],delete u[D],z[D]=C,I[k]=C;else{if(z[D])throw s(I,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,D,N);I[k]={id:D,scope:t,clone:t};z[D]=!0}for(E in u){C=u[E];D=tb(C.clone);c.leave(D);if(D[0].parentNode)for(k=0,p=D.length;k<p;k++)D[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<H;k++)if(S=g===G?k:G[k],N=g[S],C=I[k],C.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);C.clone[0]!=
E&&c.move(tb(C.clone),null,B(n));n=C.clone[C.clone.length-1];e(C.scope,k,r,N,y,S,H)}else m(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;C.clone=a;z[C.id]=C;e(C.scope,k,r,N,y,S,H)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,
d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;
for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;
l.init=function(a,c,d){m=a;n=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=
H})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&p.prop("selected",!0)):A(a)&&p?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=ra(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(M&&D(a)){c=new db([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new db(a);else M&&(a=h(M,null,a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,
c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=G?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var J=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(G&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(I,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);J=J||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):G?B[F]:F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!J}):J||a[""].unshift({id:"?",label:"",
selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:H.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));J=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(J=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),J.text(t.label=d.label),J.prop("label",t.label)),t.id!==d.id&&J.val(t.id=d.id),J[0].selected!==d.selected&&(J.prop("selected",t.selected=d.selected),Ra&&J.prop("selected",
t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),J?J.after(U):n.element.append(U),J=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",
r,va(f));var C=c(n[2]||n[1]),x=n[4]||n[6],A=/ as /.test(n[0])&&n[1],B=A?c(A):null,G=n[5],I=c(n[3]||""),F=c(n[2]?n[1]:x),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=
p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&D(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,z=!1,p,v=!1,w=B(Y.createElement("option")),H=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var x=g.children(),G=x.length;h<G;h++)if(""===x[h].value){p=z=x.eq(h);
break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?n(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&
(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,
d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

//
// vendor/angular-file-upload/angular-file-upload.min.js
//
/*! 1.4.0 */
!function(){var a=angular.module("angularFileUpload",[]);a.service("$upload",["$http","$timeout",function(a,b){function c(c){c.method=c.method||"POST",c.headers=c.headers||{},c.transformRequest=c.transformRequest||function(b,c){return window.ArrayBuffer&&b instanceof window.ArrayBuffer?b:a.defaults.transformRequest[0](b,c)},window.XMLHttpRequest.__isShim&&(c.headers.__setXHR_=function(){return function(a){a&&(c.__XHR=a,c.xhrFn&&c.xhrFn(a),a.upload.addEventListener("progress",function(a){c.progress&&b(function(){c.progress&&c.progress(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&c.progress&&c.progress(a)},!1))}});var d=a(c);return d.progress=function(a){return c.progress=a,d},d.abort=function(){return c.__XHR&&b(function(){c.__XHR.abort()}),d},d.xhr=function(a){return c.xhrFn=a,d},d.then=function(a,b){return function(d,e,f){c.progress=f||c.progress;var g=b.apply(a,[d,e,f]);return g.abort=a.abort,g.progress=a.progress,g.xhr=a.xhr,g.then=a.then,g}}(d,d.then),d}this.upload=function(b){b.headers=b.headers||{},b.headers["Content-Type"]=void 0,b.transformRequest=b.transformRequest||a.defaults.transformRequest;var d=new FormData,e=b.transformRequest,f=b.data;return b.transformRequest=function(a,c){if(f)if(b.formDataAppender)for(var d in f){var g=f[d];b.formDataAppender(a,d,g)}else for(var d in f){var g=f[d];if("function"==typeof e)g=e(g,c);else for(var h=0;h<e.length;h++){var i=e[h];"function"==typeof i&&(g=i(g,c))}a.append(d,g)}if(null!=b.file){var j=b.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(b.file))for(var k="[object String]"===Object.prototype.toString.call(j),h=0;h<b.file.length;h++)a.append(k?j+h:j[h],b.file[h],b.file[h].name);else a.append(j,b.file,b.file.name)}return a},b.data=d,c(b)},this.http=function(a){return c(a)}}]),a.directive("ngFileSelect",["$parse","$timeout",function(a,b){return function(c,d,e){var f=a(e.ngFileSelect);d.bind("change",function(a){var d,e,g=[];if(d=a.target.files,null!=d)for(e=0;e<d.length;e++)g.push(d.item(e));b(function(){f(c,{$files:g,$event:a})})}),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&d.bind("touchend",function(a){a.preventDefault(),a.target.click()})}}]),a.directive("ngFileDropAvailable",["$parse","$timeout",function(a,b){return function(c,d,e){if("draggable"in document.createElement("span")){var f=a(e.ngFileDropAvailable);b(function(){f(c)})}}}]),a.directive("ngFileDrop",["$parse","$timeout",function(a,b){return function(c,d,e){function f(a,b){if(b.isDirectory){var c=b.createReader();i++,c.readEntries(function(b){for(var c=0;c<b.length;c++)f(a,b[c]);i--})}else i++,b.file(function(b){i--,a.push(b)})}if("draggable"in document.createElement("span")){var g=null,h=a(e.ngFileDrop);d[0].addEventListener("dragover",function(a){b.cancel(g),a.stopPropagation(),a.preventDefault(),d.addClass(e.ngFileDragOverClass||"dragover")},!1),d[0].addEventListener("dragleave",function(){g=b(function(){d.removeClass(e.ngFileDragOverClass||"dragover")})},!1);var i=0;d[0].addEventListener("drop",function(a){a.stopPropagation(),a.preventDefault(),d.removeClass(e.ngFileDragOverClass||"dragover");var g=[],j=a.dataTransfer.items;if(j&&j.length>0&&j[0].webkitGetAsEntry)for(var k=0;k<j.length;k++)f(g,j[k].webkitGetAsEntry());else{var l=a.dataTransfer.files;if(null!=l)for(var k=0;k<l.length;k++)g.push(l.item(k))}!function m(d){b(function(){i?m(10):h(c,{$files:g,$event:a})},d||0)}()},!1)}}}])}();
//
// vendor/angularjs/1.3.11/angular-animate.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

//
// vendor/angularjs/1.3.11/angular-resource.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

//
// vendor/angularjs/1.3.11/angular-touch.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,u,z){'use strict';function s(h,k,p){n.directive(h,["$parse","$swipe",function(d,e){return function(l,m,f){function g(a){if(!c)return!1;var b=Math.abs(a.y-c.y);a=(a.x-c.x)*k;return q&&75>b&&0<a&&30<a&&.3>b/a}var b=d(f[h]),c,q,a=["touch"];u.isDefined(f.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,b){c=a;q=!0},cancel:function(a){q=!1},end:function(a,c){g(a)&&l.$apply(function(){m.triggerHandler(p);b(l,{$event:c})})}},a)}}])}var n=u.module("ngTouch",[]);n.factory("$swipe",
[function(){function h(d){var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||d.originalEvent&&d.originalEvent.changedTouches&&d.originalEvent.changedTouches[0]||e[0].originalEvent||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];u.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,
e,l){var m,f,g,b,c=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){g=h(a);c=!0;f=m=0;b=g;e.start&&e.start(g,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){c=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(c&&g){var d=h(a);m+=Math.abs(d.x-b.x);f+=Math.abs(d.y-b.y);b=d;10>m&&10>f||(f>m?(c=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){c&&(c=!1,e.end&&e.end(h(a),a))})}}}]);n.config(["$provide",function(h){h.decorator("ngClickDirective",
["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",["$parse","$timeout","$rootElement",function(h,k,p){function d(b,c,d){for(var a=0;a<b.length;a+=2){var e=b[a+1],f=d;if(25>Math.abs(b[a]-c)&&25>Math.abs(e-f))return b.splice(a,a+2),!0}return!1}function e(b){if(!(2500<Date.now()-m)){var c=b.touches&&b.touches.length?b.touches:[b],e=c[0].clientX,c=c[0].clientY;1>e&&1>c||g&&g[0]===e&&g[1]===c||(g&&(g=null),"label"===b.target.tagName.toLowerCase()&&(g=[e,c]),d(f,e,c)||(b.stopPropagation(),
b.preventDefault(),b.target&&b.target.blur()))}}function l(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;f.push(c,d);k(function(){for(var a=0;a<f.length;a+=2)if(f[a]==c&&f[a+1]==d){f.splice(a,a+2);break}},2500,!1)}var m,f,g;return function(b,c,g){function a(){n=!1;c.removeClass("ng-click-active")}var k=h(g.ngClick),n=!1,r,s,v,w;c.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);c.addClass("ng-click-active");s=Date.now();
a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];v=a.clientX;w=a.clientY});c.on("touchmove",function(c){a()});c.on("touchcancel",function(c){a()});c.on("touchend",function(b){var k=Date.now()-s,h=b.changedTouches&&b.changedTouches.length?b.changedTouches:b.touches&&b.touches.length?b.touches:[b],t=h[0].originalEvent||h[0],h=t.clientX,t=t.clientY,x=Math.sqrt(Math.pow(h-v,2)+Math.pow(t-w,2));n&&750>k&&12>x&&(f||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",
l,!0),f=[]),m=Date.now(),d(f,h,t),r&&r.blur(),u.isDefined(g.disabled)&&!1!==g.disabled||c.triggerHandler("click",[b]));a()});c.onclick=function(a){};c.on("click",function(a,c){b.$apply(function(){k(b,{$event:c||a})})});c.on("mousedown",function(a){c.addClass("ng-click-active")});c.on("mousemove mouseup",function(a){c.removeClass("ng-click-active")})}}]);s("ngSwipeLeft",-1,"swipeleft");s("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

//
// vendor/angularjs/1.3.11/angular-cookies.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

//
// vendor/angularjs/1.3.11/angular-sanitize.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function g(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function F(a,d){function c(a,b,c,l){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)e("",f.last());v[b]&&f.last()==b&&e("",b);(l=w[b]||!!l)||f.push(b);var m={};c.replace(G,function(a,b,d,c,e){m[b]=r(d||c||e||"")});d.start&&d.start(b,m,l)}function e(a,b){var c=0,e;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&x[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(y.test(a)){if(b=a.match(y))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,e),k=!1}else K.test(a)&&((b=a.match(A))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(A,c)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(r(l)))}if(a==m)throw L("badparse",a);m=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var c=d[3];if(d=d[2])q.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in q?q.textContent:q.innerText;return a+d+c}function B(a){return a.replace(/&/g,"&amp;").replace(N,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var c=!1,e=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!c&&x[a]&&(c=a);c||!0!==C[a]||(e("<"),e(a),h.forEach(k,function(c,f){var k=
h.lowercase(f),g="img"===a&&"src"===k||"background"===k;!0!==P[k]||!0===D[k]&&!d(c,g)||(e(" "),e(f),e('="'),e(B(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=h.lowercase(a);c||!0!==C[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,z=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,
J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,w=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var v=h.extend({},p,n),t=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var x=g("script,style"),C=h.extend({},w,t,u,v,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var P=h.extend({},D,p,n),q=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];F(d,s(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,c=/^mailto:/;return function(e,b){function k(a){a&&g.push(E(a))}
function f(a,c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!e)return e;for(var m,l=e,g=[],n,p;m=l.match(d);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(c,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

//
// vendor/angular-local-storage/angular-local-storage.min.js
//
/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.1.5 - 2014-11-04
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */!function(a,b){"use strict";function c(a){return/^-?\d+\.?\d*$/.test(a.replace(/["']/g,""))}var d=b.isDefined,e=b.isUndefined,f=b.isNumber,g=b.isObject,h=b.isArray,i=b.extend,j=b.toJson,k=b.fromJson,l=b.module("LocalStorageModule",[]);l.provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/"},this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){return this.prefix=a,this},this.setStorageType=function(a){return this.storageType=a,this},this.setStorageCookie=function(a,b){return this.cookie={expiry:a,path:b},this},this.setStorageCookieDomain=function(a){return this.cookie.domain=a,this},this.setNotify=function(a,b){return this.notify={setItem:a,removeItem:b},this},this.$get=["$rootScope","$window","$document","$parse",function(a,b,l,m){var n,o=this,p=o.prefix,q=o.cookie,r=o.notify,s=o.storageType;l?l[0]&&(l=l[0]):l=document,"."!==p.substr(-1)&&(p=p?p+".":"");var t=function(a){return p+a},u=function(){try{var c=s in b&&null!==b[s],d=t("__"+Math.round(1e7*Math.random()));return c&&(n=b[s],n.setItem(d,""),n.removeItem(d)),c}catch(e){return s="cookie",a.$broadcast("LocalStorageModule.notification.error",e.message),!1}}(),v=function(b,c){if(e(c)?c=null:(g(c)||h(c)||f(+c||c))&&(c=j(c)),!u||"cookie"===o.storageType)return u||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),r.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),B(b,c);try{(g(c)||h(c))&&(c=j(c)),n&&n.setItem(t(b),c),r.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:o.storageType})}catch(d){return a.$broadcast("LocalStorageModule.notification.error",d.message),B(b,c)}return!0},w=function(b){if(!u||"cookie"===o.storageType)return u||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),C(b);var d=n?n.getItem(t(b)):null;return d&&"null"!==d?"{"===d.charAt(0)||"["===d.charAt(0)||c(d)?k(d):d:null},x=function(b){if(!u||"cookie"===o.storageType)return u||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),r.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:"cookie"}),D(b);try{n.removeItem(t(b)),r.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:o.storageType})}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),D(b)}return!0},y=function(){if(!u)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),!1;var b=p.length,c=[];for(var d in n)if(d.substr(0,b)===p)try{c.push(d.substr(b))}catch(e){return a.$broadcast("LocalStorageModule.notification.error",e.Description),[]}return c},z=function(b){b=b||"";var c=p.slice(0,-1),d=new RegExp(c+"."+b);if(!u||"cookie"===o.storageType)return u||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),E();var e=p.length;for(var f in n)if(d.test(f))try{x(f.substr(e))}catch(g){return a.$broadcast("LocalStorageModule.notification.error",g.message),E()}return!0},A=function(){try{return b.navigator.cookieEnabled||"cookie"in l&&(l.cookie.length>0||(l.cookie="test").indexOf.call(l.cookie,"test")>-1)}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),!1}}(),B=function(b,c){if(e(c))return!1;if((h(c)||g(c))&&(c=j(c)),!A)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var d="",f=new Date,i="";if(null===c?(f.setTime(f.getTime()+-864e5),d="; expires="+f.toGMTString(),c=""):0!==q.expiry&&(f.setTime(f.getTime()+24*q.expiry*60*60*1e3),d="; expires="+f.toGMTString()),b){var k="; path="+q.path;q.domain&&(i="; domain="+q.domain),l.cookie=t(b)+"="+encodeURIComponent(c)+d+k+i}}catch(m){return a.$broadcast("LocalStorageModule.notification.error",m.message),!1}return!0},C=function(b){if(!A)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var c=l.cookie&&l.cookie.split(";")||[],d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t(b)+"=")){var f=decodeURIComponent(e.substring(p.length+b.length+1,e.length));try{var g=JSON.parse(f);return k(g)}catch(h){return f}}}return null},D=function(a){B(a,null)},E=function(){for(var a=null,b=p.length,c=l.cookie.split(";"),d=0;d<c.length;d++){for(a=c[d];" "===a.charAt(0);)a=a.substring(1,a.length);var e=a.substring(b,a.indexOf("="));D(e)}},F=function(){return s},G=function(a,b,c,e){e=e||b;var f=w(e);return null===f&&d(c)?f=c:g(f)&&g(c)&&(f=i(c,f)),m(b).assign(a,f),a.$watch(b,function(a){v(e,a)},g(a[b]))},H=function(){for(var a=0,c=b[s],d=0;d<c.length;d++)0===c.key(d).indexOf(p)&&a++;return a};return{isSupported:u,getStorageType:F,set:v,add:v,get:w,keys:y,remove:x,clearAll:z,bind:G,deriveKey:t,length:H,cookie:{isSupported:A,set:B,add:B,get:C,remove:D,clearAll:E}}}]})}(window,window.angular);
//
// vendor/angular-cookie/angular-cookie.min.js
//
angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){"use strict";function i(e){try{return decodeURIComponent(e)}catch(i){}}return function(){function t(t,n,r){var o,s,p,u,a,c,x,d,f;if(r=r||{},void 0!==n)return n="object"==typeof n?JSON.stringify(n):n+"","number"==typeof r.expires&&(f=r.expires,r.expires=new Date,-1===f?r.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==r.expirationUnit?"hours"===r.expirationUnit?r.expires.setHours(r.expires.getHours()+f):"minutes"===r.expirationUnit?r.expires.setMinutes(r.expires.getMinutes()+f):"seconds"===r.expirationUnit?r.expires.setSeconds(r.expires.getSeconds()+f):r.expires.setDate(r.expires.getDate()+f):r.expires.setDate(r.expires.getDate()+f)),e[0].cookie=[encodeURIComponent(t),"=",encodeURIComponent(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(s=[],d=e[0].cookie,d&&(s=d.split("; ")),o={},x=!1,p=0;s.length>p;++p)if(s[p]){if(u=s[p],a=u.indexOf("="),c=u.substring(0,a),n=i(u.substring(a+1)),angular.isUndefined(n))continue;if(void 0===t||t===c){try{o[c]=JSON.parse(n)}catch(g){o[c]=n}if(t===c)return o[c];x=!0}}return x&&void 0===t?o:void 0}return t.remove=function(e,i){var n=void 0!==t(e);return n&&(i||(i={}),i.expires=-1,t(e,"",i)),n},t}()}]);
//
// vendor/lodash.min.js
//
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);
//
// vendor/angular-masonry/angular-masonry.js
//
/*
 * angular-masonry 0.9.0
 * Pascal Hartig, weluse GmbH, http://weluse.de/
 * License: MIT
 */
(function(){angular.module("wu.masonry",[]).controller("MasonryCtrl",["$scope","$element","$timeout","$window",function a(e,d,f,g){var i={};
var o=[];var l=false;var r=this;var s=null;this.preserveOrder=false;this.loadImages=true;e.init=function(){g.pubsub.listen("MasonryGridReload","Masonry.Controller",function(){r.reload()
});g.pubsub.listen("MasonryGridDestroy","Masonry.Controller",function(){r.destroy();r.reload();l=false})};e.$on("ReloadMasonry",function(){r.reload()
});e.$on("ReloadMasonryFavoritesGrid",function(u,t,v){if(v){r.appendBrick(t,"")}else{r.removeBrick("",t)}r.reload()});this.scheduleMasonryOnce=function q(){var t=arguments;
var v=o.filter(function u(w){return w[0]===t[0]}).length>0;if(!v){this.scheduleMasonry.apply(null,arguments)}};this.scheduleMasonry=function p(){if(s){f.cancel(s)
}o.push([].slice.call(arguments));s=f(function t(){if(l){return}o.forEach(function u(v){d.masonry.apply(d,v)});o=[]},30)};function j(t){t.addClass("loaded")
}this.appendBrick=function h(v,w){if(l){return}function t(){if(Object.keys(i).length===0){d.masonry("resize")}if(i[w]===undefined){i[w]=true;
j(v);d.masonry("appended",v,true)}}function u(){r.scheduleMasonryOnce("layout")}t();u()};this.removeBrick=function n(u,t){if(l){return
}delete i[u];if(t){d.masonry("remove",t)}this.scheduleMasonryOnce("layout")};this.destroy=function k(){l=true;if(d.data("masonry")){d.masonry("destroy")
}e.$emit("masonry.destroyed");i=[]};this.reload=function m(){d.masonry(e.options);e.$emit("masonry.reloaded")}}]).directive("masonry",function c(){return{restrict:"AE",controller:"MasonryCtrl",link:{pre:function d(l,h,f,g){var e=l.$eval(f.masonry||f.masonryOptions);
l.options=angular.extend({itemSelector:f.itemSelector||".masonry-brick",columnWidth:parseInt(f.columnWidth,10)||f.columnWidth,transitionDuration:0},e||{});
h.masonry(l.options);var i=l.$eval(f.loadImages);g.loadImages=i!==false;var j=l.$eval(f.preserveOrder);g.preserveOrder=j!==false&&f.preserveOrder!==undefined;
var k=l.$eval(f.reloadOnShow);if(k!==false&&f.reloadOnShow!==undefined){l.$watch(function(){return h.prop("offsetParent")},function(m,n){if(m&&!n){g.reload()
}})}l.$emit("masonry.created",h);l.$on("$destroy",g.destroy)}}}}).directive("masonryBrick",function b(){return{restrict:"AC",require:"^masonry",scope:true,link:{pre:function d(j,g,e,f){var h=j.$id,i;
f.appendBrick(g,h);g.on("$destroy",function(){f.removeBrick(h,g)});j.$on("masonry.reload",function(){g.width="";f.scheduleMasonryOnce("reloadItems");
f.scheduleMasonryOnce("layout")});j.$watch("$index",function(){if(i!==undefined&&i!==j.$index){f.scheduleMasonryOnce("reloadItems");
f.scheduleMasonryOnce("layout")}i=j.$index;j.item.gridIndex=j.$index;j.item.pageIndex=j.page})}}}})}());
//
// vendor/salvattore.js
//
/*!
 * Salvattore 1.0.8 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 
 MODIFIED FOR ALLRECIPES USE:
     -Implemented ad refresh on grid recreation
     -Added helper methods to assist in ad "lazy" refresh
     -Initializing grid on document ready
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.salvattore = factory();
  }
}(this, function() {
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

if (!window.matchMedia) {
    window.matchMedia = function() {
        "use strict";

        // For browsers that support matchMedium api such as IE 9 and webkit
        var styleMedia = (window.styleMedia || window.media);

        // For those that don't support matchMedium
        if (!styleMedia) {
            var style       = document.createElement('style'),
                script      = document.getElementsByTagName('script')[0],
                info        = null;

            style.type  = 'text/css';
            style.id    = 'matchmediajs-test';

            script.parentNode.insertBefore(style, script);

            // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
            info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

            styleMedia = {
                matchMedium: function(media) {
                    var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                    // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                    if (style.styleSheet) {
                        style.styleSheet.cssText = text;
                    } else {
                        style.textContent = text;
                    }

                    // Test if media query is true or false
                    return info.width === '1px';
                }
            };
        }

        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || 'all'),
                media: media || 'all'
            };
        };
    }();
}

/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(){
    "use strict";

    // Bail out for browsers that have addListener support
    if (window.matchMedia && window.matchMedia('all').addListener) {
        return false;
    }

    var localMatchMedia = window.matchMedia,
        hasMediaQueries = localMatchMedia('only all').matches,
        isListening     = false,
        timeoutID       = 0,    // setTimeout for debouncing 'handleChange'
        queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
        handleChange    = function(evt) {
            // Debounce
            clearTimeout(timeoutID);

            timeoutID = setTimeout(function() {
                for (var i = 0, il = queries.length; i < il; i++) {
                    var mql         = queries[i].mql,
                        listeners   = queries[i].listeners || [],
                        matches     = localMatchMedia(mql.media).matches;

                    // Update mql.matches value and call listeners
                    // Fire listeners only if transitioning to or from matched state
                    if (matches !== mql.matches) {
                        mql.matches = matches;

                        for (var j = 0, jl = listeners.length; j < jl; j++) {
                            listeners[j].call(window, mql);
                        }
                    }
                }
            }, 30);
        };

    window.matchMedia = function(media) {
        var mql         = localMatchMedia(media),
            listeners   = [],
            index       = 0;

        mql.addListener = function(listener) {
            // Changes would not occur to css media type so return now (Affects IE <= 8)
            if (!hasMediaQueries) {
                return;
            }

            // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
            // There should only ever be 1 resize listener running for performance
            if (!isListening) {
                isListening = true;
                window.addEventListener('resize', handleChange, true);
            }

            // Push object only if it has not been pushed already
            if (index === 0) {
                index = queries.push({
                    mql         : mql,
                    listeners   : listeners
                });
            }

            listeners.push(listener);
        };

        mql.removeListener = function(listener) {
            for (var i = 0, il = listeners.length; i < il; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                }
            }
        };

        return mql;
    };
}());

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    "use strict";

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
            window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

if (typeof window.CustomEvent !== "function") {
  (function() {
    "use strict";
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
     }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  })();
}

/* jshint laxcomma: true */
var salvattore = (function (global, document, undefined) {
"use strict";

var self = {},
    grids = [],
    mediaRules = [],
    mediaQueries = [],
    gridAdsToRefresh = [],
    add_to_dataset = function(element, key, value) {
      // uses dataset function or a fallback for <ie10
      if (element.dataset) {
        element.dataset[key] = value;
      } else {
        element.setAttribute("data-" + key, value);
      }
      return;
    };

self.obtainGridSettings = function obtainGridSettings(element) {
  // returns the number of columns and the classes a column should have,
  // from computing the style of the ::before pseudo-element of the grid.

  var computedStyle = global.getComputedStyle(element, ":before")
    , content = computedStyle.getPropertyValue("content").slice(1, -1)
    , matchResult = content.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/)
    //AR specific default. If it cant calculate, draw two columns. This is for the right rail mostly, as it does html/css hiding.
    , numberOfColumns = 2 
    , columnClasses = []
  ;

  if (matchResult) {
    numberOfColumns = matchResult[1];
    columnClasses = matchResult[2];
    columnClasses = columnClasses? columnClasses.split(".") : ["column"];
  } else {
    matchResult = content.match(/^\s*\.(.+)\s+(\d+)\s*$/);
    if (matchResult) {
      columnClasses = matchResult[1];
      numberOfColumns = matchResult[2];
      if (numberOfColumns) {
            numberOfColumns = numberOfColumns.split(".");
      }
    }
  }

  return {
    numberOfColumns: numberOfColumns,
    columnClasses: columnClasses
  };
};


self.addColumns = function addColumns(grid, items) {
  // from the settings obtained, it creates columns with
  // the configured classes and adds to them a list of items.

  var settings = self.obtainGridSettings(grid)
    , numberOfColumns = settings.numberOfColumns
    , columnClasses = settings.columnClasses
    , columnsItems = new Array(+numberOfColumns)
    , columnsFragment = document.createDocumentFragment()
    , i = numberOfColumns
    , selector
  ;

  while (i-- !== 0) {
    selector = "[data-columns] > *:nth-child(" + numberOfColumns + "n-" + i + ")";
    columnsItems.push(items.querySelectorAll(selector));
  }

  columnsItems.forEach(function append_to_grid_fragment(rows) {
    var column = document.createElement("div")
      , rowsFragment = document.createDocumentFragment()
    ;

    column.className = columnClasses.join(" ");

    Array.prototype.forEach.call(rows, function append_to_column(row) {
      rowsFragment.appendChild(row);
    });
    column.appendChild(rowsFragment);
    columnsFragment.appendChild(column);
  });

  grid.appendChild(columnsFragment);
  add_to_dataset(grid, 'columns', numberOfColumns);
};


self.removeColumns = function removeColumns(grid) {
  // removes all the columns from a grid, and returns a list
  // of items sorted by the ordering of columns.

  var range = document.createRange();
  range.selectNodeContents(grid);

  var columns = Array.prototype.filter.call(range.extractContents().childNodes, function filter_elements(node) {
    return node instanceof global.HTMLElement;
  });

  var numberOfColumns = columns.length
    , numberOfRowsInFirstColumn = columns[0].childNodes.length
    , sortedRows = new Array(numberOfRowsInFirstColumn * numberOfColumns)
  ;

  Array.prototype.forEach.call(columns, function iterate_columns(column, columnIndex) {
    Array.prototype.forEach.call(column.children, function iterate_rows(row, rowIndex) {
      sortedRows[rowIndex * numberOfColumns + columnIndex] = row;
    });
  });

  var container = document.createElement("div");
  add_to_dataset(container, 'columns', 0);

  sortedRows.filter(function filter_non_null(child) {
    return !!child;
  }).forEach(function append_row(child) {
    container.appendChild(child);
  });

  return container;
};

self.getAdsToRefresh = function getAdsToRefresh() {
    return gridAdsToRefresh;
};

self.removeAdToRefresh = function removeAdToRefresh(elem) {
    var index = gridAdsToRefresh.indexOf(elem);
    if (index > -1) {
        gridAdsToRefresh.splice(index, 1);
    }
}

function findGridAdSlots(grid) {
    //Parent containers of the grid ad divs
    var adParentContainers = grid.getElementsByClassName("gridad");

    var adRefreshElements = [];

    //Check adService to see if we are serving mobile ads.
    var isMobileAdType = window.adService.mobileAds;

    //Ids that have "mob" in them are mobile slots
    var isCurrentAdSlotType = function(id) {
        if (isMobileAdType) {
            return (id.indexOf("mob") !== -1);
        } else {
            return (id.indexOf("mob") === -1);
        }
    };

    //Get ids of all grid ads to refresh (once that previously had an ad).
    Array.prototype.forEach.call(adParentContainers, function (adParentContainer) {
        var ads = adParentContainer.querySelectorAll("[id^=div-gpt-]");

        Array.prototype.forEach.call(ads, function (ad) {
            if (ad && isCurrentAdSlotType(ad.id)) {
                adRefreshElements.push(ad);
            }
        });
    });

    //Check for sponsored logo ad and then ad to refresh queue
    var sponsoredLogoSlots = [];
    sponsoredLogoSlots.push(document.getElementById("div-gpt-sponsorLogo"));
    sponsoredLogoSlots.push(document.getElementById("div-gpt-mob-sponsorLogo"));

    Array.prototype.forEach.call(sponsoredLogoSlots,
        function(sponsoredLogoSlot) {
            if (sponsoredLogoSlot && isCurrentAdSlotType(sponsoredLogoSlot.id)) {
                adRefreshElements.push(sponsoredLogoSlot);
            }
        });

    //Remove all ad frames.
    Array.prototype.forEach.call(adRefreshElements, function (el) {
        while (el && el.firstChild) {
            el.removeChild(el.firstChild);
        }
    });
    return adRefreshElements;
}

self.recreateColumns = function recreateColumns(grid) {
    // removes all the columns from the grid, and adds them again,
    // it is used when the number of columns change.

    global.requestAnimationFrame(function render_after_css_mediaQueryChange() {
        //Clear out the ads to refresh
        gridAdsToRefresh = [];

        var isAdServiceAvailable = window.adService && window.adService.renderAds;

        if (isAdServiceAvailable) {
            //Purge any refresh adslots
            window.adService.renderAds.purgeRefreshSlots();

            //Get list of all adslots in grid
            var adSlots = findGridAdSlots(grid);
        }

        //Salvattore Grid Recreation
        self.addColumns(grid, self.removeColumns(grid));
        var columnsChange = new CustomEvent("columnsChange");
        grid.dispatchEvent(columnsChange);

        if (isAdServiceAvailable) {
            //Add ids to refreshslots.
            Array.prototype.forEach.call(adSlots,
                function(el) {
                    if (self.isElementInViewport(el)) {
                        adService.renderAds.addToRefreshSlots(el.id);
                    } else {
                        gridAdsToRefresh.push(el);
                    }
                });

            //Refresh Ads
            window.refreshAdFrame();
        }
    });
}

/// Recreates the grid without explicitly reloading ads.
self.recreateColumnsOnDemand = function recreateColumnsOnDemand(grid) {
    // removes all the columns from the grid, and adds them again,
    // it is used when the number of columns change.

    global.requestAnimationFrame(function render_after_css_mediaQueryChange() {
        //Salvattore Grid Recreation
        self.addColumns(grid, self.removeColumns(grid));
        var columnsChange = new CustomEvent("columnsChange");
        grid.dispatchEvent(columnsChange);
    });
}

self.mediaQueryChange = function mediaQueryChange(mql) {
  // recreates the columns when a media query matches the current state
  // of the browser and refreshes ads within the grid.

    if (mql.matches) {
        //Salvattore grid recreation
        Array.prototype.forEach.call(grids, self.recreateColumns);
    }
};

self.isElementInViewport = function(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};

self.getCSSRules = function getCSSRules(stylesheet) {
  // returns a list of css rules from a stylesheet

  var cssRules;
  try {
    cssRules = stylesheet.sheet.cssRules || stylesheet.sheet.rules;
  } catch (e) {
    return [];
  }

  return cssRules || [];
};


self.getStylesheets = function getStylesheets() {
  // returns a list of all the styles in the document (that are accessible).

  var inlineStyleBlocks = Array.prototype.slice.call(document.querySelectorAll("style"));
  inlineStyleBlocks.forEach(function(stylesheet, idx) {
    if (stylesheet.type !== 'text/css' && stylesheet.type !== '') {
      inlineStyleBlocks.splice(idx, 1);
    }
  });

  return Array.prototype.concat.call(
    inlineStyleBlocks,
    Array.prototype.slice.call(document.querySelectorAll("link[rel='stylesheet']"))
  );
};


self.mediaRuleHasColumnsSelector = function mediaRuleHasColumnsSelector(rules) {
  // checks if a media query css rule has in its contents a selector that
  // styles the grid.

  var i, rule;

  try {
    i = rules.length;
  }
  catch (e) {
    i = 0;
  }

  while (i--) {
    rule = rules[i];
    if (rule.selectorText && rule.selectorText.match(/\[data-columns\](.*)::?before$/)) {
      return true;
    }
  }

  return false;
};


self.scanMediaQueries = function scanMediaQueries() {
  // scans all the stylesheets for selectors that style grids,
  // if the matchMedia API is supported.

  var newMediaRules = [];

  if (!global.matchMedia) {
    return;
  }

  self.getStylesheets().forEach(function extract_rules(stylesheet) {
    Array.prototype.forEach.call(self.getCSSRules(stylesheet), function filter_by_column_selector(rule) {
      // rule.media throws an 'not implemented error' in ie9 for import rules occasionally
      try {
        if (rule.media && rule.cssRules && self.mediaRuleHasColumnsSelector(rule.cssRules)) {
          newMediaRules.push(rule);
        }
      } catch (e) {}
    });
  });

  // remove matchMedia listeners from the old rules
  var oldRules = mediaRules.filter(function (el) {
      return newMediaRules.indexOf(el) === -1;
  });
  mediaQueries.filter(function (el) {
    return oldRules.indexOf(el.rule) !== -1;
  }).forEach(function (el) {
      el.mql.removeListener(self.mediaQueryChange);
  });
  mediaQueries = mediaQueries.filter(function (el) {
    return oldRules.indexOf(el.rule) === -1;
  });

  // add matchMedia listeners to the new rules
  newMediaRules.filter(function (el) {
    return mediaRules.indexOf(el) == -1;
  }).forEach(function (rule) {
      var mql = global.matchMedia(rule.media.mediaText);
      mql.addListener(self.mediaQueryChange);
      mediaQueries.push({rule: rule, mql:mql});
  });

  // swap mediaRules with the new set
  mediaRules.length = 0;
  mediaRules = newMediaRules;
};


self.rescanMediaQueries = function rescanMediaQueries() {
    self.scanMediaQueries();
    Array.prototype.forEach.call(grids, self.recreateColumns);
};


self.nextElementColumnIndex = function nextElementColumnIndex(grid, fragments) {
  // returns the index of the column where the given element must be added.

  var children = grid.children
    , m = children.length
    , lowestRowCount = 0
    , child
    , currentRowCount
    , i
    , index = 0
    , currentHeight = 0
    , lowestHeight = 0
  ;
  for (i = 0; i < m; i++) {
    child = children[i];
    currentHeight = child.children[child.children.length - 1].offsetTop + ((fragments[i].children || fragments[i].childNodes).length * 400);
    currentRowCount = child.children.length + (fragments[i].children || fragments[i].childNodes).length;
    if(lowestHeight === 0) {
        lowestHeight = currentHeight;
    }
    if (currentHeight < lowestHeight) {
        index = i;
        lowestRowCount = currentRowCount;
        lowestHeight = currentHeight;
    }
  }

  return index;
};


self.createFragmentsList = function createFragmentsList(quantity) {
  // returns a list of fragments

  var fragments = new Array(quantity)
    , i = 0
  ;

  while (i !== quantity) {
    fragments[i] = document.createDocumentFragment();
    i++;
  }

  return fragments;
};


self.appendElements = function appendElements(grid, elements) {
    // adds a list of elements to the end of a grid

  var columns = grid.children
    , numberOfColumns = columns.length
    , fragments = self.createFragmentsList(numberOfColumns)
  ;

  Array.prototype.forEach.call(elements, function append_to_next_fragment(element) {
    var columnIndex = self.nextElementColumnIndex(grid, fragments);
    fragments[columnIndex].appendChild(element);
  });

  Array.prototype.forEach.call(columns, function insert_column(column, index) {
    column.appendChild(fragments[index]);
  });
};


self.prependElements = function prependElements(grid, elements) {
  // adds a list of elements to the start of a grid

  var columns = grid.children
    , numberOfColumns = columns.length
    , fragments = self.createFragmentsList(numberOfColumns)
    , columnIndex = numberOfColumns - 1
  ;

  elements.forEach(function append_to_next_fragment(element) {
    var fragment = fragments[columnIndex];
    fragment.insertBefore(element, fragment.firstChild);
    if (columnIndex === 0) {
      columnIndex = numberOfColumns - 1;
    } else {
      columnIndex--;
    }
  });

  Array.prototype.forEach.call(columns, function insert_column(column, index) {
    column.insertBefore(fragments[index], column.firstChild);
  });

  // populates a fragment with n columns till the right
  var fragment = document.createDocumentFragment()
    , numberOfColumnsToExtract = elements.length % numberOfColumns
  ;

  while (numberOfColumnsToExtract-- !== 0) {
    fragment.appendChild(grid.lastChild);
  }

  // adds the fragment to the left
  grid.insertBefore(fragment, grid.firstChild);
};


self.registerGrid = function registerGrid (grid) {
  if (global.getComputedStyle(grid).display === "none") {
    return;
  }

  // retrieve the list of items from the grid itself
  var range = document.createRange();
  range.selectNodeContents(grid);

  var items = document.createElement("div");
  items.appendChild(range.extractContents());


  add_to_dataset(items, 'columns', 0);
  self.addColumns(grid, items);
  grids.push(grid);
};


self.init = function init() {
  // adds required CSS rule to hide 'content' based
  // configuration.

  var css = document.createElement("style");
  css.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}";
  document.head.appendChild(css);

  // scans all the grids in the document and generates
  // columns from their configuration.

  var gridElements = document.querySelectorAll("[data-columns]");
  Array.prototype.forEach.call(gridElements, self.registerGrid);
  self.scanMediaQueries();
};

//From https://github.com/rnmp/salvattore/pull/154/commits/4a351eec8d7dca5e640e824f622820f12b46585d
//Allows the media queries to load accross devices and retrieves correct number of columns to init with.
document.addEventListener('DOMContentLoaded', self.init);

return {
  appendElements: self.appendElements,
  prependElements: self.prependElements,
  registerGrid: self.registerGrid,
  recreateColumns: self.recreateColumns,
  rescanMediaQueries: self.rescanMediaQueries,
  init: self.init,
  isElementInViewport: self.isElementInViewport,
  getAdsToRefresh: self.getAdsToRefresh,
  removeAdToRefresh: self.removeAdToRefresh,
  recreateColumnsOnDemand: self.recreateColumnsOnDemand,

  // maintains backwards compatibility with underscore style method names
  append_elements: self.appendElements,
  prepend_elements: self.prependElements,
  register_grid: self.registerGrid,
  recreate_columns: self.recreateColumns,
  rescan_media_queries: self.rescanMediaQueries
};

})(window, window.document);

return salvattore;
}));

//
// vendor/angular-modal/js/ngDialog.js
//
(function(b,a){if(typeof module!=="undefined"&&module.exports){module.exports=a(require("angular"))}else{if(typeof define==="function"&&define.amd){define(["angular"],a)
}else{a(b.angular)}}}(this,function(b,k){var h=b.module("ngDialog",[]);var a=b.element;var g=b.isDefined;var j=(document.body||document.documentElement).style;
var d=g(j.animation)||g(j.WebkitAnimation)||g(j.MozAnimation)||g(j.MsAnimation)||g(j.OAnimation);var c="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend";
var e="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var f=false;var i;h.provider("ngDialog",function(){var m=this.defaults={className:"ngdialog-theme-default",plain:false,showClose:true,closeByDocument:true,closeByEscape:true,closeByNavigation:false,appendTo:false,preCloseCallback:false,overlay:true,cache:true,trapFocus:true,preserveFocus:true,ariaAuto:true,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null};
this.setForceBodyReload=function(q){f=q||false};this.setDefaults=function(q){b.extend(m,q)};var p=0,o=0,l,n={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller",function(t,y,r,w,v,x,z,A,s){var q=t.find("body");
var u=t.find("html");if(f){x.$on("$locationChangeSuccess",function(){q=t.find("body")})}var B={onDocumentKeydown:function(D){if(D.keyCode===27){C.close("$escape")
}},activate:function(D){var E=D.data("$ngDialogOptions");if(E.trapFocus){D.on("keydown",B.onTrapFocusKeydown);q.on("keydown",B.onTrapFocusKeydown)
}},deactivate:function(D){D.off("keydown",B.onTrapFocusKeydown);q.off("keydown",B.onTrapFocusKeydown)},deactivateAll:function(D){b.forEach(function(F){var E=b.element(F);
B.deactivate(E)})},setBodyPadding:function(E){var D=parseInt((q.css("padding-right")||0),10);q.css("padding-right",(D+E)+"px");
q.data("ng-dialog-original-padding",D)},resetBodyPadding:function(){var D=q.data("ng-dialog-original-padding");if(D){q.css("padding-right",D+"px")
}else{q.css("padding-right","")}},setBodyTopPosition:function(){var E;var F=q.css("top");if(F!="auto"&&F!=""){E=parseInt(F,10)
}else{E=0}var D=A.pageYOffset;q.css("top",-(E+D)+"px");q.data("ng-dialog-original-top",E);q.data("ng-dialog-original-scroll",D)
},resetBodyTopPosition:function(){var D=q.data("ng-dialog-original-top");var E=q.data("ng-dialog-original-scroll");if(D){q.css("top",D+"px")
}else{q.css("top","")}if(E){A.scrollTo(0,E)}},performCloseDialog:function(D,I){var G=D.attr("id");var E=a(document.getElementById(D.attr("id")+"Modal"));
if(typeof A.Hammer!=="undefined"){var F=i.hammerTime;F.off("tap",l);F.destroy&&F.destroy();delete i.hammerTime}else{D.unbind("click")
}if(o===1){q.unbind("keydown")}if(!D.hasClass("ngdialog-closing")){o-=1}var H=D.data("$ngDialogPreviousFocus");if(H){H.focus()
}x.$broadcast("ngDialog.closing",D);o=o<0?0:o;if(d){i.$destroy();D.unbind(c).bind(c,function(){D.remove();if(o===0){u.removeClass("ngdialog-open");
q.removeClass("ngdialog-open");q.find(".recipe-subNav").show();B.resetBodyPadding();B.resetBodyTopPosition();E.remove()}x.$broadcast("ngDialog.closed",D)
}).addClass("ngdialog-closing");E.unbind(c).bind(c,function(){E.remove()}).addClass("ngdialog-closing")}else{i.$destroy();D.remove();
E.remove();if(o===0){u.removeClass("ngdialog-open");q.removeClass("ngdialog-open");q.find(".recipe-subNav").show();B.resetBodyPadding();
B.resetBodyTopPosition()}x.$broadcast("ngDialog.closed",D)}if(n[G]){n[G].resolve({id:G,value:I,$dialog:D,remainingDialogs:o});
delete n[G]}},closeDialog:function(D,G){var E=D.data("$ngDialogPreCloseCallback");if(E&&b.isFunction(E)){var F=E.call(D,G);if(b.isObject(F)){if(F.closePromise){F.closePromise.then(function(){B.performCloseDialog(D,G)
})}else{F.then(function(){B.performCloseDialog(D,G)},function(){return})}}else{if(F!==false){B.performCloseDialog(D,G)}}}else{B.performCloseDialog(D,G)
}},onTrapFocusKeydown:function(G){var F=b.element(G.currentTarget);var D;if(F.hasClass("ngdialog")){D=F}else{D=B.getActiveDialog();
if(D===null){return}}var H=(G.keyCode===9);var E=(G.shiftKey===true);if(H){B.handleTab(D,G,E)}},handleTab:function(D,H,E){var I=B.getFocusableElements(D);
if(I.length===0){if(document.activeElement){document.activeElement.blur()}return}var G=document.activeElement;var J=Array.prototype.indexOf.call(I,G);
var L=(J===-1);var K=(J===0);var M=(J===I.length-1);var F=false;if(E){if(L||K){I[I.length-1].focus();F=true}}else{if(L||M){I[0].focus();
F=true}}if(F){H.preventDefault();H.stopPropagation()}},autoFocus:function(D){var H=D[0];var E=H.querySelector("*[autofocus]");
if(E!==null){E.focus();if(document.activeElement===E){return}}var I=B.getFocusableElements(D);if(I.length>0){I[0].focus();return
}var G=B.filterVisibleElements(H.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(G.length>0){var F=G[0];a(F).attr("tabindex","0");
F.focus()}},getFocusableElements:function(D){var E=D[0];var F=E.querySelectorAll(e);return B.filterVisibleElements(F)},filterVisibleElements:function(E){var G=[];
for(var F=0;F<E.length;F++){var D=E[F];if(D.offsetWidth>0||D.offsetHeight>0){G.push(D)}}return G},getActiveDialog:function(){var D=document.querySelectorAll(".ngdialog");
if(D.length===0){return null}return a(D[D.length-1])},applyAriaAttributes:function(D,F){if(F.ariaAuto){if(!F.ariaRole){var E=(B.getFocusableElements(D).length>0)?"dialog":"alertdialog";
F.ariaRole=E}if(!F.ariaLabelledBySelector){F.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"}if(!F.ariaDescribedBySelector){F.ariaDescribedBySelector="article,section,p"
}}if(F.ariaRole){D.attr("role",F.ariaRole)}B.applyAriaAttribute(D,"aria-labelledby",F.ariaLabelledById,F.ariaLabelledBySelector);
B.applyAriaAttribute(D,"aria-describedby",F.ariaDescribedById,F.ariaDescribedBySelector)},applyAriaAttribute:function(D,E,I,J){if(I){D.attr(E,I)
}if(J){var F=D.attr("id");var G=D[0].querySelector(J);if(!G){return}var H=F+"-"+E;a(G).attr("id",H);D.attr(E,H);return H}}};var C={open:function(J){var K=this;
var I=b.copy(m);J=J||{};b.extend(I,J);p+=1;K.latestID="ngdialog"+p;var F;n[K.latestID]=F=w.defer();i=b.isObject(I.scope)?I.scope.$new():x.$new();
var D,E;w.when(G(I.template||I.templateUrl)).then(function(Q){y.put(I.template||I.templateUrl,Q);if(I.showClose){Q+='<div class="ngdialog-close"></div>'
}K.$result=D=a('<div id="ngdialog'+p+'" class="ngdialog"></div>');D.html('<div class="ngdialog-content" role="document">'+Q+"</div>");
D.data("$ngDialogOptions",I);if(I.data&&b.isString(I.data)){var N=I.data.replace(/^\s*/,"")[0];i.ngDialogData=(N==="{"||N==="[")?b.fromJson(I.data):I.data
}else{if(I.data&&b.isObject(I.data)){i.ngDialogData=I.data}}if(I.controller&&(b.isString(I.controller)||b.isArray(I.controller)||b.isFunction(I.controller))){var M=s(I.controller,{$scope:i,$element:D});
D.data("$ngDialogControllerController",M)}if(I.className){D.addClass(I.className)}if(I.appendTo&&b.isString(I.appendTo)){E=b.element(document.querySelector(I.appendTo))
}else{E=q}B.applyAriaAttributes(D,I);var L;if(I.overlay){L=a('<div id="ngdialog'+p+'Modal" class="ngdialog-overlay"></div>');
D.after(L)}if(I.preCloseCallback){var P;if(b.isFunction(I.preCloseCallback)){P=I.preCloseCallback}else{if(b.isString(I.preCloseCallback)){if(i){if(b.isFunction(i[I.preCloseCallback])){P=i[I.preCloseCallback]
}else{if(i.$parent&&b.isFunction(i.$parent[I.preCloseCallback])){P=i.$parent[I.preCloseCallback]}else{if(x&&b.isFunction(x[I.preCloseCallback])){P=x[I.preCloseCallback]
}}}}}}if(P){D.data("$ngDialogPreCloseCallback",P)}}i.closeThisDialog=function(R){B.closeDialog(D,R)};z(function(){var R=document.querySelectorAll(".ngdialog");
B.deactivateAll(R);r(D)(i);var T=A.innerWidth-q.prop("clientWidth");B.setBodyTopPosition();q.addClass("ngdialog-open");u.addClass("ngdialog-open");
q.find(".recipe-subNav").hide();var S=T-(A.innerWidth-q.prop("clientWidth"));if(S>0){B.setBodyPadding(S)}E.append(D);B.activate(D);
if(I.trapFocus){B.autoFocus(D)}if(I.name){x.$broadcast("ngDialog.opened",{dialog:D,name:I.name})}else{x.$broadcast("ngDialog.opened",D)
}});if(I.closeByEscape){q.bind("keydown",B.onDocumentKeydown)}if(I.closeByNavigation){x.$on("$locationChangeSuccess",function(){B.closeDialog(D)
})}if(I.preserveFocus){D.data("$ngDialogPreviousFocus",document.activeElement)}l=function(R){var T=I.closeByDocument?a(R.target).hasClass("ngdialog-overlay")||a(R.target).hasClass("ngdialog"):false;
var S=a(R.target).hasClass("ngdialog-close");if(T||S){C.close(D.attr("id"),S?"$closeButton":"$document")}};if(typeof A.Hammer!=="undefined"){var O=i.hammerTime=A.Hammer(D[0]);
O.on("tap",l)}else{D.bind("click",l)}o+=1;return C});return{id:"ngdialog"+p,closePromise:F.promise,close:function(L){B.closeDialog(D,L)
}};function H(M,L){return v.get(M,(L||{})).then(function(N){return N.data||""})}function G(L){if(!L){return"Empty template"}if(b.isString(L)&&I.plain){return L
}if(typeof I.cache==="boolean"&&!I.cache){return H(L,{cache:false})}return y.get(L)||H(L,{cache:true})}},openConfirm:function(G){var D=w.defer();
var F={closeByEscape:false,closeByDocument:false};b.extend(F,G);F.scope=b.isObject(F.scope)?F.scope.$new():x.$new();F.scope.confirm=function(I){D.resolve(I);
var H=a(document.getElementById(E.id));B.performCloseDialog(H,I)};var E=C.open(F);E.closePromise.then(function(H){if(H){return D.reject(H.value)
}return D.reject()});return D.promise},close:function(E,F){var D=a(document.getElementById(E));if(D.length){B.closeDialog(D,F)
}else{C.closeAll(F)}return C},closeAll:function(G){var D=document.querySelectorAll(".ngdialog, .ngdialog-overlay");for(var F=D.length;
F>-1;F--){var E=D[F];B.closeDialog(a(E),G)}},getDefaults:function(){return m}};return C}]});h.directive("ngDialog",["ngDialog",function(l){return{restrict:"A",scope:{ngDialogScope:"="},link:function(o,n,m){n.on("click",function(q){q.preventDefault();
var r=b.isDefined(o.ngDialogScope)?o.ngDialogScope:"noScope";b.isDefined(m.ngDialogClosePrevious)&&l.close(m.ngDialogClosePrevious);
var p=l.getDefaults();l.open({template:m.ngDialog,className:m.ngDialogClass||p.className,controller:m.ngDialogController,scope:r,data:m.ngDialogData,showClose:m.ngDialogShowClose==="false"?false:(m.ngDialogShowClose==="true"?true:p.showClose),closeByDocument:m.ngDialogCloseByDocument==="false"?false:(m.ngDialogCloseByDocument==="true"?true:p.closeByDocument),closeByEscape:m.ngDialogCloseByEscape==="false"?false:(m.ngDialogCloseByEscape==="true"?true:p.closeByEscape),preCloseCallback:m.ngDialogPreCloseCallback||p.preCloseCallback})
})}}}]);return h}));
//
// source/angular/definitions.js
//
angular.module("allrecipes",["LocalStorageModule","ngAnimate","ngSanitize","ngCookies","ngResource","ngRoute","angularFileUpload","wu.masonry","ipCookie","ngDialog","ngTouch"]);
if(typeof adConfiguration!=="undefined"){angular.module("allrecipes").value("adConfiguration",adConfiguration)}if(typeof adService!=="undefined"){angular.module("allrecipes").value("adService",adService)
}if(typeof salvattore!=="undefined"){angular.module("allrecipes").value("salvattore",salvattore)}angular.module("allrecipes").config(["$routeProvider","$locationProvider","$httpProvider","$sceDelegateProvider","$compileProvider",function(d,c,b,e,a){var f=window.history&&window.history.pushState?true:false;
c.html5Mode({enabled:f,requireBase:false});b.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"};var g=window.location.host.indexOf("allrecipes.com")>=0?"http://images.media-allrecipes.com/":"http://images."+window.location.host+"/";
e.resourceUrlWhitelist(["self","**"]);if(window.location.href.toLowerCase().indexOf("jasminespecrunner.html")>-1||window.location.href.toLowerCase().indexOf("localhost")){a.debugInfoEnabled(true)
}else{a.debugInfoEnabled(false)}d.when("/cook/my/",{templateUrl:g+"assets/source/angular/templates/profile/private/favorites.html",controller:"ar_controllers_profile"}).when("/cook/my/collections/",{templateUrl:g+"assets/source/angular/templates/profile/private/favorites.html",controller:"ar_controllers_profile"}).when("/cook/my/favorites/",{templateUrl:g+"assets/source/angular/templates/profile/private/favorites.html",controller:"ar_controllers_profile"}).when("/cook/my/favorite-recipess/",{templateUrl:g+"assets/source/angular/templates/profile/private/favorites.html",controller:"ar_controllers_profile"}).when("/cook/my/friends/",{templateUrl:g+"assets/source/angular/templates/profile/private/friends.html",controller:"ar_controllers_profile"}).when("/cook/my/following/",{templateUrl:g+"assets/source/angular/templates/profile/private/friends.html",controller:"ar_controllers_profile"}).when("/cook/my/followers/",{templateUrl:g+"assets/source/angular/templates/profile/private/friends.html",controller:"ar_controllers_profile"}).when("/cook/my/made-it/",{templateUrl:g+"assets/source/angular/templates/profile/private/madeit.html",controller:"ar_controllers_profile"}).when("/cook/my/photos/",{templateUrl:g+"assets/source/angular/templates/profile/private/photos.html",controller:"ar_controllers_profile"}).when("/cook/my/recipes/",{templateUrl:g+"assets/source/angular/templates/profile/private/recipes.html",controller:"ar_controllers_profile"}).when("/cook/my/reviews/",{templateUrl:g+"assets/source/angular/templates/profile/private/reviews.html",controller:"ar_controllers_profile"}).when("/cook/my/findfriends/",{templateUrl:g+"assets/source/angular/templates/profile/private/friends.html",controller:"ar_controllers_profile"}).when("/cook/my/about-me/",{templateUrl:g+"assets/source/angular/templates/profile/private/AboutMe.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/",{templateUrl:g+"assets/source/angular/templates/profile/public/favorites.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/collections/",{templateUrl:g+"assets/source/angular/templates/profile/public/favorites.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/made-it/",{templateUrl:g+"assets/source/angular/templates/profile/public/madeit.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/favorites/",{templateUrl:g+"assets/source/angular/templates/profile/public/favorites.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/about-me/",{templateUrl:g+"assets/source/angular/templates/profile/public/aboutme.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/favorite-recipes/",{templateUrl:g+"assets/source/angular/templates/profile/public/favorites.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/following/",{templateUrl:g+"assets/source/angular/templates/profile/public/following.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/followers/",{templateUrl:g+"assets/source/angular/templates/profile/public/followers.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/recipes/",{templateUrl:g+"assets/source/angular/templates/profile/public/recipes.html",controller:"ar_controllers_profile"}).when("/cook/:cookId/reviews/",{templateUrl:g+"assets/source/angular/templates/profile/public/reviews.html",controller:"ar_controllers_profile"})
}]);
//
// source/angular/models/models.js
//
var ar=ar||{};(function(a){a.recipeboxPost=function(d,g,f,c,b,e){return{recipeID:d,type:g,title:f,imageUrl:c,deferredActionName:b,source:e}
};a.shoppingListIngredientPost=function(c,d,e,b){return{ingredientid:c,recipeid:d,servings:e,deferredActionName:b}};a.shoppingListRecipePost=function(c,d,b){return{recipeid:c,servings:d,deferredActionName:b}
};a.shoppingListWriteInPostItem=function(c,b){return{aisleid:b,displayvalue:c}};a.shoppingListWriteInPost=function(c,b){return{items:c,deferredActionName:b||"addtoshoppinglist"}
};a.shoppingListSaveRecipePostItem=function(b,c){return{recipeid:b,servings:c}};a.shoppingListSaveRecipePost=function(c,b){return{recipes:c,deferredActionName:b||"addRecipeToShoppingListFromAd"}
};a.recipeBoxSaveRecipePostItem=function(b,c){return{RecipeID:b,Type:c}};a.recipeBoxSaveRecipePost=function(c,b){return{recipes:c,deferredActionName:b||"addRecipeToRecipeBoxFromAd"}
};a.photoUploadPost=function(c,b){return{userid:c,recipeid:b}};a.reviewPost=function(b,c){return{rating:b,text:c}};a.madeItPost=function(c,b){return{recipeId:c,deferredActionName:b}
};a.madeItUndo=function(b){return{recipeId:b}};a.followPost=function(b,e,d,c){return{userID:b,deferredActionName:c,type:e,redirect:d}
};a.collectionPost=function(b,c,d){return{collectionId:b,name:c,deferredActionName:d}};a.navBarPost=function(b,c,d){return{categoryId:b,name:c,orderInList:d}
}})(ar.models=ar.models||{});
//
// source/js/foresee/foresee.js
//
var AR=AR||{};AR.Account=AR.Account||{};(function(b){var a=function(e){var c=window.adService;var d=c&&c.pageTargetingValues&&c.pageTargetingValues.hasOwnProperty(e);
var f=d?c.pageTargetingValues[e]:"";return f};b.VisitorId=function(){var c=a("oid");return c};b.VisitorStatus=function(){var c=a("status");
return c}})(AR.Account.VisitorInfo=AR.Account.VisitorInfo||{});(function(){var b=0;var c=100;var a=function(){if(document.getElementsByClassName("suppress-foresee").length>0){return
}if(!window.ArAdsHasInterstitial){var d=window.Toggles.AdTest===true;var g=RegExp("[?&]adtest=true").exec(window.location.search)||(d===true);
if(!g&&window.location.protocol!=="https:"){if(document.getElementById("foresee-js")){return}var e=document.createElement("script");
e.type="text/javascript";e.async=true;e.src="//images.media-allrecipes.com/ar/foresee/v0.7/foresee-trigger.js";e.id="foresee-js";
var h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(e,h);var f=setInterval(function(){if(window.FSR&&window.FSR.CPPS){window.FSR.CPPS.set("ovid",AR.Account.VisitorInfo.VisitorId());
window.FSR.CPPS.set("vstat",AR.Account.VisitorInfo.VisitorStatus());if(typeof(window.dataLayer)!=="undefined"){if(window.dataLayer.page){if(window.dataLayer.page.pageInfo&&window.dataLayer.page.pageInfo.variant){window.FSR.CPPS.set("variant",window.dataLayer.page.pageInfo.variant)
}if(window.dataLayer.page.pageInfo&&window.dataLayer.page.pageInfo.abTestName){window.FSR.CPPS.set("evar31_fs",window.dataLayer.page.pageInfo.abTestName+"|"+window.dataLayer.page.pageInfo.variant)
}if(window.dataLayer.page.attributes&&window.dataLayer.page.attributes.country){window.FSR.CPPS.set("country",window.dataLayer.page.attributes.country)
}}}i()}else{if(b>c){i()}else{b++}}},100);var i=function(){clearInterval(f)}}}};a()})();
//
// source/js/util/string-helper.js
//
"use strict";var StringHelper={};StringHelper.IsNullOrEmpty=function(a){return(a===null||a===undefined||a==="")};
//
// source/js/util/uid.js
//
"use strict";var UID={};UID.New=function(){var a=new Date().getTime();var b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(d){var e=(a+Math.random()*16)%16|0;
a=Math.floor(a/16);return(d=="x"?e:(e&3|8)).toString(16)});return b};
//
// source/js/global/Fallback-SVG-To-PNG.js
//
(function(b,a){function d(){return navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i)==null&&(navigator.userAgent.indexOf("Android")==-1||navigator.userAgent.indexOf("Chrome")>0)&&(!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)
}function c(){var g=document.getElementsByTagName("img");var e=/.*\.svg$/;for(var f=0;f!=g.length;++f){if(g[f].src.match(e)){g[f].src=g[f].src.slice(0,-3)+"png"
}}}if(!d()){c();pubsub.listen("AjaxLoad.Completed","svg-png-fallback-support",function(){c()})}})(AR.Global=AR.Global||{},jQuery,undefined);
//
// source/angular/directives/scrollToAnchor.js
//
"use strict";angular.module("allrecipes").directive("scrollToAnchor",["$anchorScroll",function(a){return{link:function(e,d,c){var b=c.scrollToAnchor;
d.click(function(){if(typeof b!=="undefined"&&b){var f=$("#"+b);var g=f.offset().top-60;var h=(g)<0?0:g;$("html, body").animate({scrollTop:h},"5000");
a()}})}}}]);
//
// source/angular/directives/showOnScroll.js
//
angular.module("allrecipes").directive("showOnScroll",["$window",function(a){return{link:function(d,c,b){d.yTrigger=false;angular.element(a).bind("scroll",_.debounce(function(){if(a.scrollY>=b.showOnScroll||document.documentElement.scrollTop>=b.showOnScroll){d.yTrigger=true
}else{d.yTrigger=false}d.$apply()},100))}}}]);
//
// source/angular/controllers/footerLinksCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_footerLinks",["$scope","$attrs","$window",function(b,a,c){b.arSites=[{name:"Argentina",url:"allrecipes.com.ar"},{name:"Australia & New Zealand",url:"allrecipes.com.au"},{name:"Brazil",url:"allrecipes.com.br"},{name:"Canada",url:a.siteurl+"?country=CA"},{name:"China",url:"allrecipes.com.cn"},{name:"France",url:"allrecipes.fr"},{name:"Germany",url:"de.allrecipes.com"},{name:"India",url:"allrecipes.co.in"},{name:"Italy",url:"allrecipes.it"},{name:"Korea",url:"allrecipes.kr"},{name:"Mexico",url:"allrecipes.com.mx"},{name:"Netherlands",url:"allrecipes.nl"},{name:"Poland",url:"allrecipes.pl"},{name:"Quebec",url:"qc.allrecipes.ca"},{name:"Russia",url:"allrecipes.ru"},{name:"SE Asia",url:"allrecipes.asia"},{name:"United Kingdom & Ireland",url:"allrecipes.co.uk"},{name:"United States",url:a.siteurl+"?country=US"}];
b.changeSite=function(){c.location.href="http://"+b.selectedItem.url}}]);
//
// source/angular/controllers/contentBlockCtrl.js
//
angular.module("allrecipes").controller("ar_controllers_content_block",["$scope","ipCookie","ar_services_environment",function(b,a,c){b.isHidden=false;
b.close=function(e,f){b.isHidden=true;var d=c.baseDomain;a(e,true,{domain:d,path:"/",expires:f,expirationUnit:"days"})}}]);
//
// source/angular/controllers/magSubscriptionCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_mag_subscription",["$scope",function(a){a.IsCanada=window.AR.Util.CountryCode==="Canada";
a.CtaSubscriptionUrl=a.IsCanada?"http://www.themeredithstore.ca/p-282-allrecipes-subscription.aspx?affiliateID=10750":"http://armagazine.com/get-the-magazine"
}]);
//
// source/angular/controllers/SliderCtrl.js
//
angular.module("allrecipes").controller("ar_controllers_slider",["$window","$scope","ipCookie","adService","ar_services_environment","perishableLocalstorage",function(c,b,a,d,e,g){var f="ARHideHubSlider";
b.slideOutClass="slideout";b.isHidden=false;angular.element(c).bind("scroll touchmove",_.debounce(function(){if(c.pageYOffset>=500){b.$apply(function(){b.slideOutClass=b.slideOutClass+" slidein"
})}else{b.$apply(function(){b.slideOutClass="slideout"})}},100));b.checkKrux=function(){var h=null;if(g.get("kxsegs")!=null){h=g.get("kxsegs")
}else{h=[]}return h.indexOf("n6pwpvl5t")>-1?true:false};b.decideSliderVisibility=function(){if(d.pageTargetingValues.type!=="sponsored_recipe_hub"){var h=a(f);
b.isHidden=typeof(h)!=="undefined";if(b.isHidden===false){b.isHidden=b.checkKrux()}}};b.decideSliderVisibility();b.close=function(i){var h=e.baseDomain;
a(f,true,{domain:h,path:"/",expires:i,expirationUnit:"days"});b.isHidden=true}}]);
//
// source/angular/controllers/socialShareCtrl.js
//
angular.module("allrecipes").controller("ar_controllers_share_item",["$scope","$window","arLogin","ar_services_email","datalayerEvent",function(a,b,d,c,f){a.showForm=false;
a.success=false;a.AddEmailEnabled=false;a.errorMessage="";a.toEmailAddress="";a.fromName="";a.emailNote="";a.emailPlaceholderText="Recipient's email";
a.toEmailList=[];a.toggleEmailForm=function(k){f.pushRegistrationSourceClick("rd_email");return d.ensureUserIsLoggedIn(function(){a.showForm=!a.showForm
})(k)};a.PinterestTargetParams="toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=750,height=700";
a.FacebookTargetParams="toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=555,height=300";a.StumbleTargetParams="toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=650,height=710";
a.TwitterTargetParams="toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=490,height=444";a.GoogleTargetParams="toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=700";
a.socialShareStart=function(l,k,m){pubsub.broadcast("SocialShareStart");if(m&&m.reviewSocial){f.push("recipe review detail social","recipe review detail - "+l+" button","Action Complete",m.reviewSocial.reviewId)
}else{f.push(k+" button",l,"Action Complete","social "+k)}};a.socialShareNavigate=function(k,m,l){b.open(k,m,l)};var h=angular.element("#ad-footer");
a.hideAds=function(){h.hide()};a.showAds=function(){h.show()};a.addEmail=function(){if(a.emailForm.txtEmail.$error.email){a.validationMessage="Sorry, that's not a working email address.";
a.$emit("notify",a.validationMessage,null,"failure");return}if(a.toEmailList.length==5){a.$emit("notify","Sorry! Only 5 at a time!",null,"failure");
return}var k={id:a.toEmailList.length+1,address:a.toEmailAddress};a.toEmailList.push(k);a.emailPlaceholderText="Add recipient (optional)";
a.toEmailAddress="";a.AddEmailEnabled=false};a.deleteEmail=function(l){for(var m=0;m<a.toEmailList.length;m++){var k=a.toEmailList[m];
if(k.address===l){a.toEmailList.splice(m,1);break}}};var j=function(m,n){var p="";for(var l=0;l<a.toEmailList.length;l++){if(l>0){p+=","
}p+=a.toEmailList[l].address}var k={itemType:n,id:m,toAddress:p,fromName:a.fromName,note:a.emailNote,};a.sendForm=c.send(k);var o=function(q){a.success=q;
a.errorMessage=q?"":"Oops! We couldn’t send your email. Try again in just a moment.";a.showForm=!q;a.successMessage=q?"Success! Thanks for sharing.":"";
if(q){a.$emit("notify",a.successMessage,null,"success");f.push("email ".concat(k.itemType),k.id,"Action Complete")}};a.sendForm.$promise.then(function(){o(true)
},function(){o(false)})};var i=function(){return a.emailForm.$valid&&a.toEmailList.length>0};var g=function(){var k=a.emailForm;
a.validationMessage=a.toEmailList.length===0?"Oops! What's the recipient's email address?":k.txtName.$error.required?"Oops, don't forget your name!":"Be sure to tap <strong>add</strong> for more than one recipient!";
a.$emit("notify",a.validationMessage,null,"failure")};a.sendEmail=function(k,l){if(a.toEmailAddress){a.addEmail()}if(i()){j(k,l)
}else{g()}};a.cancel=function(){a.showForm=false};var e={facebook:"?lnkid=ussfac",googlePlus:"?lnkid=ussgog",twitter:"?lnkid=usstwt",pinterest:"?lnkid=usspnt",stumbleUpon:"?lnkid=usssup"};
a.urlGenerators={getPinterestUrl:function(m,k,l){return"http://pinterest.com/pin/create/button/?url="+m+e.pinterest+"&media="+k+"&description="+l
},getFacebookUrl:function(k){return"https://facebook.com/sharer.php?u="+k+e.facebook},getTwitterUrl:function(l,k){return"https://twitter.com/intent/tweet?url="+l+e.twitter+"&text="+k+"&via=Allrecipes"
},getGooglePlusUrl:function(k){return"https://plus.google.com/share?url="+k+e.googlePlus},getStumbleUponUrl:function(k){return"https://www.stumbleupon.com/submit?url="+k+e.stumbleUpon
}}}]);
//
// vendor/angular-ellipsis/angular-ellipsis.js
//
/**
 *	Angular directive to truncate multi-line text to visible height
 *
 *	@param bind (angular bound value to append) REQUIRED
 *	@param ellipsisAppend (string) string to append at end of truncated text after ellipsis, can be HTML OPTIONAL
 *	@param ellipsisSymbol (string) string to use as ellipsis, replaces default '...' OPTIONAL
 *	@param ellipsisAppendClick (function) function to call if ellipsisAppend is clicked (ellipsisAppend must be clicked) OPTIONAL
 *
 *	@example <p data-ellipsis data-ng-bind="boundData"></p>
 *	@example <p data-ellipsis data-ng-bind="boundData" data-ellipsis-symbol="---"></p>
 *	@example <p data-ellipsis data-ng-bind="boundData" data-ellipsis-append="read more"></p>
 *	@example <p data-ellipsis data-ng-bind="boundData" data-ellipsis-append="read more" data-ellipsis-append-click="displayFull()"></p>
 *
 */

'use strict';

angular
    .module('allrecipes')
    .directive('ellipsis', function ($timeout, $window) {

        return {
            restrict: 'A',
            scope: {
                ngBind: '=',
                ellipsisAppend: '@',
                ellipsisAppendClick: '&',
                ellipsisSymbol: '@'
            },
            compile: function (elem, attr, linker) {

                return function (scope, element, attributes) {
                    /* Window Resize Variables */
                    attributes.lastWindowResizeTime = 0;
                    attributes.lastWindowResizeWidth = 0;
                    attributes.lastWindowResizeHeight = 0;
                    attributes.lastWindowTimeoutEvent = null;
                    /* State Variables */
                    attributes.isTruncated = false;
                    var originalText = '';

                    function buildEllipsis() {
                        var elementText = element.text();
                        if (typeof (scope.ngBind) !== 'undefined' || elementText !== '') {
                            if (originalText == '') {
                                originalText = typeof (scope.ngBind) !== 'undefined' ? scope.ngBind : elementText;
                            }
                            var bindArray = originalText.split(" "),
								i = 0,
								ellipsisSymbol = (typeof (attributes.ellipsisSymbol) !== 'undefined') ? attributes.ellipsisSymbol : '&hellip;',
								appendString = (typeof (scope.ellipsisAppend) !== 'undefined' && scope.ellipsisAppend !== '') ? ellipsisSymbol + '<span>' + scope.ellipsisAppend + '</span>' : ellipsisSymbol;

                            attributes.isTruncated = false;
                            element.html(originalText);

                            // If text has overflow
                            if (isOverflowed(element)) {
                                var bindArrayStartingLength = bindArray.length - 5,
									initialMaxHeight = element[0].clientHeight;

                               
                                // Set complete text and remove one word at a time, until there is no overflow
                                for (; i < bindArrayStartingLength; i++) {
                                    bindArray.pop();
                                    element.html(bindArray.join(" ").replace(/,/, '') + appendString);

                                    if (isOverflowed(element) === false) {
                                        attributes.isTruncated = true;
                                        break;
                                    }
                                }

                                // If append string was passed and append click function included
                                if (ellipsisSymbol != appendString && typeof (scope.ellipsisAppendClick) !== 'undefined' && scope.ellipsisAppendClick !== '') {
                                    element.find('span').bind("click", function (e) {
                                        scope.$apply(scope.ellipsisAppendClick);
                                    });
                                }
                            }
                        }
                    }

                    /**
                     *	Test if element has overflow of text beyond height or max-height
                     *
                     *	@param element (DOM object)
                     *
                     *	@return bool
                     *
                     */
                    function isOverflowed(thisElement) {
                       // return thisElement[0].scrollHeight > thisElement[0].clientHeight;
                        return thisElement.parent()[0].scrollHeight > thisElement.parent()[0].clientHeight;
                    }

                    /**
                     *	Watchers
                     */

                    /**
                     *	Execute ellipsis truncate on ngBind update
                     */
                    scope.$watch('ngBind', function () {
                        buildEllipsis();
                    });

                    /**
                     *	Execute ellipsis truncate on ngBind update
                     */
                    scope.$watch('ellipsisAppend', function () {
                        buildEllipsis();
                    });

                    /**
                     *	When window width or height changes - re-init truncation
                     */
                    angular.element($window).bind('resize', function () {
                        $timeout.cancel(attributes.lastWindowTimeoutEvent);

                        attributes.lastWindowTimeoutEvent = $timeout(function () {
                            if (attributes.lastWindowResizeWidth != window.innerWidth || attributes.lastWindowResizeHeight != window.innerHeight) {
                                buildEllipsis();
                            }

                            attributes.lastWindowResizeWidth = window.innerWidth;
                            attributes.lastWindowResizeHeight = window.innerHeight;
                        }, 75);
                    });


                    angular.element($window).bind('load', function () {
                        buildEllipsis();
                    });


                };
            }
        };
    });


//
// source/angular/services/snakecase-service.js
//
"use strict";angular.module("allrecipes").factory("snakeCase",[function(){var a=/[A-Z]/g;return function(b){return b.replace(a,function(c,d){return(d?"-":"")+c.toLowerCase()
})}}]);
//
// source/angular/services/focus-service.js
//
"use strict";angular.module("allrecipes").factory("focus",["$timeout","$document",function(b,a){return function(c){b(function(){var d=a.find("."+c);
if(d){d.focus()}})}}]);
//
// source/angular/services/environment-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_environment",["$window",function(a){var q=a.location.protocol;
var l=/^(m|next|usseamobile01|usseamobile02|usseamobile03|usseamobile04|usseamobile05|preview)\./i;var c="https://apps.";var f=a.location.host;
var n=c+"perf05-vm.allrecipes.corp/";var j=f==="localhost.allrecipes.corp";var h=/devaseweb\.p\.azurewebsites\.net$/.test(f);
var i=/^alpha\./.test(f)||/prodaseweb\.p\.azurewebsites\.net$/.test(f);var b;if(f.indexOf("perf01")>-1){b=n}else{if(h){b="https://allrecipeswebapi.devaseweb.p.azurewebsites.net/"
}else{if(i){b="https://allrecipeswebapi.prodaseweb.p.azurewebsites.net/"}else{if(l.test(f)){b=f.replace(l,c)+"/"}else{b=c+f+"/"
}}}}var e=f.indexOf(".corp")>=0?".allrecipes.corp":".allrecipes.com";var k=f.indexOf("allrecipes.com")>=0;var p,o;if(q==="http:"){p="http://images.media-allrecipes.com/";
o="http://images.preview.allrecipes.corp/"}else{p="https://secureimages.allrecipes.com/";o="https://images.preview.allrecipes.corp/"
}var g=k?p:o;var r=k?p:(f.indexOf("images.")>=0?q+"//"+f+"/":q+"//images."+f+"/");var m=j?"ci.allrecipes.corp":f;var d=h?"https://assetservice.devasemicroservice.p.azurewebsites.net/":i?"https://assetservice.prodasemicroservice.p.azurewebsites.net/":"https://assetservice."+m+"/";
return{url:b,baseDomain:e,imageServerUrl:g,scriptServerUrl:r,assetServiceUrl:d}}]);
//
// source/angular/directives/touchstart.js
//
"use strict";angular.module("allrecipes").directive("arTouchstart",["$parse","snakeCase",function(a,d){var b="arTouchstart";var c=d("ignore-"+b);
return{restrict:"A",scope:true,link:function(h,f,e){var g=a(e[b]);f.on("touchstart",function(j){var i=j.srcElement;if(i.hasAttribute("class")&&i.attributes["class"].value.split(" ").indexOf(c)!==-1){return
}h.$apply(function(k){g(h,{$event:j})})})}}}]);
//
// source/angular/directives/touchend.js
//
"use strict";angular.module("allrecipes").directive("arTouchend",["$parse","snakeCase",function(a,d){var b="arTouchend";var c=d("ignore-"+b);
return{restrict:"A",scope:true,link:function(h,f,e){var g=a(e[b]);f.on("touchend",function(j){var i=j.srcElement;if(i.hasAttribute("class")&&i.attributes["class"].value.split(" ").indexOf(c)!==-1){return
}h.$apply(function(k){g(h,{$event:j})})})}}}]);
//
// source/angular/directives/eventfocus.js
//
"use strict";angular.module("allrecipes").directive("arEventFocus",["focus",function(a){return function(d,c,b){c.on(b.arEventFocus,function(){a(b.arEventFocusId)
});d.$on("$destroy",function(){c.off(b.arEventFocus)})}}]);
//
// source/angular/directives/assignscrollableclasses.js
//
"use strict";angular.module("allrecipes").directive("arAssignScrollableClasses",["$parse","snakeCase",function(a,c){var b="arAssignScrollableClasses";
return{link:function(f,e,d){f.scrollableClassHeirarchy=f.$eval(d[b])}}}]);
//
// source/angular/constants/searchconstants.js
//
"use strict";angular.module("allrecipes").constant("SEARCH_CONSTANTS",{MaxAllowedIngredients:4,MaxIngredientLength:50,EnterKey:13,TabKey:9,BackspaceKey:8,DOM_Element:1,InclIngredHintText:"Include ingredients",ExclIngredHintText:"Exclude ingredients",AllrecipesTenantId:12});
//
// source/angular/controllers/searchCtrl.js
//
angular.module("allrecipes").controller("ar_controllers_search",["$scope","$window","$document","$timeout","ar_services_url","SEARCH_CONSTANTS","ar_services_search","ar_cookie_service",function(b,d,a,c,g,q,f,e){b.search=f.search;
b.includeIngredient=null;b.excludeIngredient=null;var t=function(){b.includeIngHitMax=(b.search.ingredientsInclude.length>=q.MaxAllowedIngredients);
b.excludeIngHitMax=(b.search.ingredientsExclude.length>=q.MaxAllowedIngredients);b.includeIngPlaceholderText=(b.search.ingredientsInclude.length>0?null:q.InclIngredHintText);
b.excludeIngPlaceholderText=(b.search.ingredientsExclude.length>0?null:q.ExclIngredHintText)};b.initialize=function(){var y=function(z){var A=g.getQueryStringValue(z);
return A?A:""};if(!b.search.keywords){b.search.keywords=y("wt")}var x=function(z){var A=g.getQueryStringValue(z);return A?A.split(","):[]
};b.search.ingredientsInclude=x("ingIncl");b.search.ingredientsExclude=x("ingExcl");t()};b.initialize();b.footerAd=angular.element("#ad-footer");
b.hideAds=function(){b.footerAd.hide()};b.showAds=function(){b.footerAd.show()};b.isEnterKey=function(x){return(x.which===q.EnterKey)
};b.isTabKey=function(x){return(x.which===q.TabKey)};b.isBackspaceKey=function(x){return(x.which===q.BackspaceKey)};b.addIngredientInclude=function(y){if(!b.includeIngredient){return
}var x=b.includeIngredient.trim();if(x.length>0){if(b.includeIngHitMax){b.$emit("notify","You can include up to "+q.MaxAllowedIngredients+" ingredients.");
b.includeIngredient=null;return}x=x.substring(0,q.MaxIngredientLength);if(!v(x,b.search.ingredientsInclude)){r(y);b.search.ingredientsInclude.push(x)
}}b.includeIngredient=null;t();c(function(){if(y){u()}})};b.addIngredientExclude=function(y){if(!b.excludeIngredient){return}var x=b.excludeIngredient.trim();
if(x.length>0){if(b.excludeIngHitMax){b.$emit("notify","You can exclude up to "+q.MaxAllowedIngredients+" ingredients.");b.excludeIngredient=null;
return}x=x.substring(0,q.MaxIngredientLength);if(!v(x,b.search.ingredientsExclude)){r(y);b.search.ingredientsExclude.push(x)}}b.excludeIngredient=null;
t();c(function(){if(y){u()}})};b.removeLastIngredientInclude=function(y){if(!b.includeIngredient){var x=b.search.ingredientsInclude;
if(x.length>0){b.removeIngredientInclude(x[x.length-1],y);c(function(){if(y){u()}})}}};b.removeIngredientInclude=function(y,A){for(var x=0;
x<b.search.ingredientsInclude.length;x++){var z=b.search.ingredientsInclude[x];if(z===y){r(A);b.search.ingredientsInclude.splice(x,1);
break}}t();c(function(){if(A){p()}})};b.removeLastIngredientExclude=function(y){if(!b.excludeIngredient){var x=b.search.ingredientsExclude;
if(x.length>0){b.removeIngredientExclude(x[x.length-1],y);c(function(){if(y){u()}})}}};b.removeIngredientExclude=function(y,A){for(var x=0;
x<b.search.ingredientsExclude.length;x++){var z=b.search.ingredientsExclude[x];if(z===y){r(A);b.search.ingredientsExclude.splice(x,1);
break}}t();c(function(){if(A){p()}})};b.performSearch=function(){if(!b.includeIngHitMax){b.addIngredientInclude()}b.includeIngredient=null;
if(!b.excludeIngHitMax){b.addIngredientExclude()}b.excludeIngredient=null;var z=b.search.keywords;var y=b.search.ingredientsInclude;
var x=b.search.ingredientsExclude;if(z.length===0&&y.length===0&&x.length===0){b.$emit("notify","Oops! Enter a recipe or ingredient to search for.",null,"failure")
}else{var A=g.getSearchUrl(z,y,x);e.setCookie("globalNavClick",null,-1);e.setCookie("globalNavClick","global nav|search",1);d.location.href=A
}};b.mouseDown=function(y){r(y);var x=b.currentDragElement;b.horizDisplacement=y.clientX-(x.style.left?parseInt(x.style.left):0);
d.addEventListener("mousemove",o,false);a.bind("mouseup",b.mouseUp);y.preventDefault()};b.mouseUp=function(){d.removeEventListener("mousemove",o,false);
a.unbind("mouseup",b.mouseUp)};b.touchStart=function(y){r(y);var x=b.currentDragElement;b.horizDisplacement=y.originalEvent.targetTouches[0].clientX-(x.style.left?parseInt(x.style.left):0);
d.addEventListener("touchmove",w,false);y.preventDefault()};b.touchEnd=function(){d.removeEventListener("touchmove",w,false)};
var v=function(z,y){for(var x=0;x<y.length;++x){if(y[x]===z){return true}}return false};var r=function(B){if(B){var A=B.target||B.srcElement;
var C=b.scrollableClassHeirarchy.draggableElement;var y=b.scrollableClassHeirarchy.outermostWrapper;var x=b.scrollableClassHeirarchy.clippingFrame;
var z=m(A,C,y);s(z,C,x)}};var s=function(z,y,x){b.currentDragElement=l(z,y);b.currentClippingFrame=l(z,x)};var l=function(y,x){var z=y;
while(z&&(!z.hasAttribute("class")||z.attributes["class"].value.split(" ").indexOf(x)===-1)){z=z.parentElement}return z};var m=function(z,A,x){var y=l(z,x);
var B=h(y,A);return B};var h=function(y,x){var B=[];B.push(y);while(B.length>0){var z=B.shift();if(z.hasAttribute("class")&&z.attributes["class"].value.split(" ").indexOf(x)!==-1){return z
}if(!z.hasChildNodes){continue}for(var A=0;A<z.childNodes.length;++A){if(z.childNodes[A].nodeType===q.DOM_Element){B.push(z.childNodes[A])
}}}return};var o=function(x){k(x.clientX)};var w=function(x){k(x.targetTouches[0].clientX);x.stopPropagation();x.preventDefault()
};var k=function(x){j(x);i();p()};var j=function(y){var x=b.currentDragElement;x.style.top="0px";x.style.left=(y-b.horizDisplacement)+"px"
};var i=function(){var z=n();var x=(z.clippingRect.left>z.dragRect.left?z.clippingRect.left-z.dragRect.left:0);var y=(z.dragRect.right>z.clippingRect.right?z.dragRect.right-z.clippingRect.right:0);
z.dragElement.style.clip="rect(0px,"+(z.dragRect.right-z.dragRect.left+1-y)+"px,"+(z.dragRect.bottom-z.dragRect.top+1)+"px,"+x+"px)"
};var p=function(){var z=n();var y=z.dragRect.right-z.dragRect.left;var x=z.clippingRect.right-z.clippingRect.left;var A=null;
if(y<=x){A=x-y}else{if(z.dragRect.right<z.clippingRect.right){A=x-y}else{if(z.dragRect.left>z.clippingRect.left){A=0}}}if(A!=null){z.dragElement.style.left=A+"px"
}};var u=function(){var z=n();var y=z.dragRect.right-z.dragRect.left;var x=z.clippingRect.right-z.clippingRect.left;if(y>x){var A=x-y;
z.dragElement.style.left=A+"px"}};var n=function(){return{dragElement:b.currentDragElement,dragRect:b.currentDragElement.getBoundingClientRect(),clippingElement:b.currentClippingFrame,clippingRect:b.currentClippingFrame.getBoundingClientRect()}
}}]);
//
// source/angular/directives/loadingIndicator.js
//
"use strict";angular.module("allrecipes").directive("loadingIndicator",["ar_services_environment","$timeout",function(b,a){var c=0;
return{restrict:"A",templateUrl:b.scriptServerUrl+"assets/source/angular/templates/loadingindicator.html",terminal:true,replace:false,link:function(f,d){var e=d.find("div").eq(0);
e.hide();a.cancel(c);f.$on("loadingindicator_show",function(){if(c!=0){a.cancel(c);c=0}c=a(function(){e.show();a.cancel(c)},500)
});f.$on("loadingindicator_hide",function(){e.hide();a.cancel(c)})}}}]);
//
// source/angular/services/apiInterceptor-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_apiInterceptor",["$q","$injector","$rootScope","arLogin",function(b,a,c,d){return{request:function(e){c.$broadcast("loadingindicator_show");
return e},requestError:function(e){c.$emit("notify","Oops! There was a problem. Try again in just a moment.",null,"failure");
c.$broadcast("loadingindicator_hide");return b.reject(e)},response:function(f){var e=a.get("$http");if(e.pendingRequests.length<1){c.$broadcast("loadingindicator_hide")
}return f},responseError:function(f){if(f&&f.status=="401"&&f.config.headers.Authorization.length>8){var e="";if(f.config.data.deferredActionName){e=((window.location.href.indexOf("?")<0)?"?":"&")+"deferred="+encodeURIComponent(JSON.stringify(f.config.data))
}d.goToAuthorizationWelcomePage(encodeURIComponent(window.location.href+e))}else{c.$emit("notify","Oops! There was a problem. Try again in just a moment.",null,"failure")
}c.$broadcast("loadingindicator_hide");return b.reject(f)}}}]);
//
// source/angular/services/cardTemplateCompiler.js
//
angular.module("allrecipes").factory("cardTemplateCompiler",["$compile","$sce","$q","ar_services_environment","$templateRequest",function(a,c,b,e,d){var f={};
var g=function(h){if(!Array.isArray(h)){h=[h]}return function(k){for(var j=0;j<h.length;j++){f[h[j]]=a('<article data-ad-container-masonry-autocollapse class="grid-col grid-col--fixed-tiles {{::item.adClass}}" ar-infinite-scroll-page="{{::item.pageMarker}}">'+k+"</article>")
}return f}};g("ad")('<sideloaded-ad ad-slot-type="::item.adType"></sideloaded-ad>');return b.all([d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/DefaultRecipeCard.html")).then(g(["recipe","Recipe"])),d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/CookRecommendation.html")).then(g("HalfCook")),d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/VideoGridCard.html")).then(g("Video")),d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/ArticleGridCard.html")).then(g("Article")),d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/PromotedBrandCard.html")).then(g("Brand")),d(c.getTrustedResourceUrl(e.scriptServerUrl+"assets/source/angular/templates/CreativeCard.html")).then(g("Creative"))])
}]);
//
// source/angular/directives/notification.js
//
"use strict";angular.module("allrecipes").directive("arNotification",["$compile","$timeout","$rootScope",function(a,c,b){return{restrict:"E",scope:{val:"@"},template:"<div id='msg-toolbar' class='notification hidden'><span class='notification__message'></span></div>",link:function(l,i,e,g){l.$watch("val",function(){if(l.val!=undefined&&l.val!=""&&l.val!=null){k();
h(l.val,"failure",5000,null,null,null,null)}});b.$on("notify",function(t,x,z,A,s,q,r,v,u,y,w){l.afterNotification=r;if(s){d(s,q)
}else{k()}h(x,A,z,v,u,y,w)});var n;b.$on("cancelNotification",function(){c.cancel(n);j()});var h=function(t,w,v,r,q,u,s){o(t);
p(w);if(r){f(r,q,u,s)}m();n=c(function(){j()},v!=null?v:3000)};var o=function(q){i.find("span").html(q)};var f=function(t,s,v,u){var r="";
if(t==="favorites"){r="<a href='/cook/my/collections'>"+t+"</a>";u=""}else{r="<a href='/collections/"+s+"'>"+t+"</a>";if(v>0){u=" + <a href='/cook/my/'>"+v+" more</a>"
}else{if(u==null){u=""}else{if(t==="favorites"){r="<a href='/cook/my/collections/>"+t+"</a>"}}}}var q=r+u;i.find("span").append(q);
i.addClass("notification-for-collections");a(i)(l)};var p=function(q){if(q==="success"){i.removeClass("failure--message");i.addClass("success--message")
}if(q==="failure"){i.removeClass("success--message");i.addClass("failure--message")}if(q==="progress"){i.removeClass("failure--message");
i.removeClass("success--message")}};var m=function(){i.removeClass("hidden");i.addClass("visible")};var j=function(){i.removeClass("visible");
i.addClass("hidden");k();if(l.afterNotification){l.afterNotification()}};var d=function(s,q){k();var r;if(q){r="<a href='javascript:void(0)' class='btns-one-small btn-made-it' data-ng-click='"+q+"()'>"+s+"</a>"
}else{r='<a href="javascript:void(0)" class="btns-one-small btn-made-it">'+s+"</a>"}i.find("span").after(r);i.addClass("notification-with-button");
a(i)(l)};var k=function(){i.find("a").remove();i.removeClass("notification-with-button");i.removeClass("notification-for-collections")
}},replace:true}}]);
//
// source/angular/directives/errorNotifyModal.js
//
"use strict";angular.module("allrecipes").directive("errorNotifyModal",["ar_services_environment","$window","ngDialog",function(b,a,c){return{restrict:"E",replace:true,link:function(e){var d=function(f){e.errorMessage=f;
e.errorHeader="Upload cover photo";var g={template:b.scriptServerUrl+"assets/source/angular/templates/ErrorNotifyModal.html",className:"ngdialog-theme-default ",scope:e};
c.openConfirm(g)};a.pubsub.listen("ErrorNotifyModal.ErrorMessage","ErrorNotifyModal.Directive",d);e.close=function(){c.close()
}}}}]);
//
// source/angular/directives/lazyload.js
//
"use strict";angular.module("allrecipes").directive("lazyLoad",["$window","$rootScope","$compile",function(c,b,a){var e=700;var d=function(f){var k=f.getBoundingClientRect();
var g=c.innerHeight||c.document.documentElement.clientHeight;var l=c.innerWidth||c.document.documentElement.clientWidth;var j=k.top>=-e&&k.top<=g+e;
var h=k.bottom>=-e&&k.bottom<=g+e;var i=k.left>=0&&k.left<=l;return(j||h)&&i};return{restrict:"A",scope:{originalSrc:"@",src:"@",container:"@"},link:function(f,h){var i=h[0];
var j=function(){var m=f.container?($("#"+f.container)).is(":visible"):true;b.$on("Container-Opened",function(q,p){if(f.container===p){a(h)(f)
}});if(!d(i)||!m){return}var o=angular.element(i);var n=f.originalSrc;var k=f.src;if(n!==k){var l=h[0].style.display;h[0].style.display="none";
o.attr("src",n);h.unbind("load",j);angular.element(c).unbind("scroll",g);angular.element(c).unbind("resize",j);h.parents().filter(function(){return $(this).css("overflow")=="scroll"
}).unbind("scroll",j);h[0].style.display=l}};h.bind("load",j);var g=_.debounce(j,50);angular.element(c).bind("scroll",g);angular.element(c).bind("resize",j);
h.parents().filter(function(){return $(this).css("overflow")=="scroll"}).bind("scroll",j);angular.element(document).ready(g)}}
}]);
//
// source/angular/directives/universalMasonryGridView.js
//
"use strict";angular.module("allrecipes").directive("universalMasonryGridView",["ar_services_environment",function(a){return{restrict:"A",templateUrl:a.scriptServerUrl+"assets/source/angular/templates/UniversalMasonryGridView.html",terminal:true,replace:false}
}]);
//
// source/angular/directives/publicProfileRightRail.js
//
"use strict";angular.module("allrecipes").directive("publicProfileRightRail",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/profile/public/publicProfileRightRail.html"}
}]);
//
// source/angular/directives/recipeGridCardSubmitterDetails.js
//
"use strict";angular.module("allrecipes").directive("recipeGridCardSubmitterDetails",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/RecipeGridCardSubmitterDetails.html"}
}]);
//
// source/angular/directives/reviewGridCard.js
//
"use strict";angular.module("allrecipes").directive("reviewGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/reviewGridCard.html"}
}]);
//
// source/angular/directives/collectionGridCard.js
//
"use strict";angular.module("allrecipes").directive("collectionGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/CollectionGridCard.html"}
}]);
//
// source/angular/directives/collectionGridCardOwnerDetail.js
//
"use strict";angular.module("allrecipes").directive("collectionGridCardOwnerDetail",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/CollectionGridCardOwnerDetail.html"}
}]);
//
// source/angular/directives/cookGridCard.js
//
"use strict";angular.module("allrecipes").directive("cookGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/cookgridcard.html"}
}]);
//
// source/angular/directives/hubGridCard.js
//
"use strict";angular.module("allrecipes").directive("hubGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/hubgridcard.html"}
}]);
//
// source/angular/directives/photoGridCard.js
//
"use strict";angular.module("allrecipes").directive("photoGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/PhotoGridCard.html"}
}]);
//
// source/angular/directives/weblinkGridCard.js
//
"use strict";angular.module("allrecipes").directive("weblinkGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/WeblinkGridCard.html"}
}]);angular.module("allrecipes").directive("errorImageSource",function(){return{link:function(c,b,a){b.bind("error",function(){b.attr("src",a.errorImageSource)
})}}});
//
// source/angular/directives/recipeGridCard.js
//
"use strict";angular.module("allrecipes").directive("recipeGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/RecipeGridCard.html"}
}]);
//
// source/angular/directives/marketingGridCard.js
//
"use strict";angular.module("allrecipes").directive("marketingGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/MarketingGridCard.html"}
}]);
//
// source/angular/directives/videoGridCard.js
//
"use strict";angular.module("allrecipes").directive("videoGridCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/VideoGridCard.html"}
}]);
//
// source/angular/directives/noFollowIfExternal.js
//
"use strict";angular.module("allrecipes").directive("noFollowIfExternal",[function(){return{restrict:"A",link:function(e,b,a){var d=true;
if(a.ngHref&&a.ngHref!==""){d=c(a.ngHref)}else{if(a.href&&a.href!==""){d=c(a.href)}}if(d){b.attr("rel","nofollow")}return;function c(f){var h=new RegExp("(http|https)://?(.*).allrecipes(.[a-zA-z]{2,3})");
var g=f.match(h);return(g===null)}}}}]);
//
// source/angular/directives/internalreferrerlink.js
//
angular.module("allrecipes").factory("internalReferrerLinker",["$window",function(a){return function(f,e,b){var d="";if(!b.href){b.href=b.url
}var c=b.href;if(b.internalReferrerLink==""){return c}if(b.href){if(b.href.indexOf("?")<0){d+="?"}else{d+="&"}}else{if(b["ng-href"]){if(b["ng-href"].indexOf("?")<0){d+="?"
}else{d+="&"}}else{if(b["data-ng-href"]){if(b["data-ng-href"].indexOf("?")<0){d+="?"}else{d+="&"}}}}d+="internalSource="+b.internalReferrerLink;
if(a.dataLayer.page.attributes.contentId){d+="&referringId="+dataLayer.page.attributes.contentId}if(a.dataLayer.page.category.contentType){d+="&referringContentType="+dataLayer.page.category.contentType
}if(e.parent("[data-list-item]").index()>=0){d+="&referringPosition="+(e.parent("[data-list-item]").index()+1)}else{if(b.referringPosition){d+="&referringPosition="+(b.referringPosition)
}}if(f.linkName){d+="&linkName="+f.linkName}if(f.clickId){d+="&clickId="+f.clickId}else{if(b.clickId){d+="&clickId="+b.clickId
}}if(b.eventName){d+="&EventName="+b.eventName}if(b.analyticsEvent){d+="&AnalyticsEvent="+b.analyticsEvent}var g=c+d;return g
}}]);angular.module("allrecipes").directive("internalReferrerLink",["internalReferrerLinker",function(a){return{restrict:"A",scope:{linkName:"@",clickId:"@"},priority:1,link:function(d,c,b){var e=a(d,c,b);
b.$set("href",e)}}}]);
//
// source/angular/directives/scrollleft.js
//
angular.module("allrecipes").directive("scrollLeft",["$timeout",function(a){return{restrict:"A",link:function(b,c){a(function(){c.scrollLeft(c.width())
})}}}]);
//
// source/angular/directives/cookRecommendationCard.js
//
"use strict";angular.module("allrecipes").directive("cookRecommendationCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/CookRecommendation.html"}
}]);
//
// source/angular/directives/aboutMePublic.js
//
"use strict";angular.module("allrecipes").directive("aboutMePublic",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/profile/shared/aboutme.html"}
}]);
//
// source/angular/directives/brandRecommendationCard.js
//
"use strict";angular.module("allrecipes").directive("brandRecommendationCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/PromotedBrandCard.html"}
}]);
//
// source/angular/directives/creativeCard.js
//
"use strict";angular.module("allrecipes").directive("creativeCard",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/CreativeCard.html"}
}]);
//
// source/angular/controllers/navBarCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_nav_bar_controller",["$window","$scope",function(b,a){a.clickNavBarMenu=function(c){b.pubsub.broadcast("NavBar.FromMenuBar.ClickEvent",[{selectedId:c}]);
b.pubsub.broadcast("NavBar.ClickEvent",[{selectedCategoryId:c}])};a.clickDropDownMenu=function(c){b.pubsub.broadcast("NavBar.DropDownMenu.ClickEvent",[{selectedId:c}]);
b.pubsub.broadcast("NavBar.ClickEvent",[{selectedCategoryId:c}])}}]);
//
// source/angular/directives/navBar.js
//
"use strict";angular.module("allrecipes").directive("arNavBar",["$timeout","$window","$filter","ar_services_environment",function(b,c,a,d){return{scope:{items:"@"},restrict:"E",replace:true,templateUrl:d.scriptServerUrl+"assets/source/angular/templates/NavBar.html",link:function(m,g){var h=function(){if(!m.selectedId){m.selectedId=0
}m.hideEllipsis=false;m.ulElement=g.find("#hub_nav_bar");m.navBarWidth=m.ulElement.context.clientWidth};var i=function(){m.showingCategories=m.$eval(m.items)
};var k=function(){for(var n=0;n<m.drowDownCategory.length;n++){m.showingCategories.push(m.drowDownCategory[n])}};var e=function(){m.hideEllipsis=false;
var u=m.ulElement.find("li");var n=0;var v=[];var p=[];var q=m.showingCategories.length;var o=false;for(var s=0;s<q;s++){var r=u[q].clientWidth;
var t=u[s];n=t.clientWidth+n;if(n<m.navBarWidth){v.push(m.showingCategories[s])}else{if(!(n-t.clientWidth+r<m.navBarWidth||o)){n=n+r;
v.pop(s--)}o=true;p.push(m.showingCategories[s])}}if(n<m.navBarWidth){m.hideEllipsis=true}m.showingCategories=v;m.drowDownCategory=p
};var l=function(){h();b(e,0)};var j=function(n){m.selectedId=n.selectedId};var f=function(t){var q=a("filter")(m.showingCategories,{categoryId:m.selectedId})[0];
var n=a("filter")(m.drowDownCategory,{categoryId:t.selectedId})[0];var o=m.drowDownCategory.indexOf(n);var r=m.showingCategories.indexOf(q);
var s=q.orderInList;var p=n.orderInList;q.orderInList=p;n.orderInList=s;m.showingCategories[r]=n;m.drowDownCategory[o]=q;k();
m.selectedId=t.selectedId;l()};i();l();$(window).on("resize",function(){b.cancel(l);b(function(){k();m.drowDownCategory=[];l()
},100)});c.pubsub.listen("NavBar.FromMenuBar.ClickEvent","NavBar.Directive",j);c.pubsub.listen("NavBar.DropDownMenu.ClickEvent","NavBar.Directive",f)
},controller:"ar_nav_bar_controller"}}]);
//
// source/angular/directives/starRating.js
//
"use strict";angular.module("allrecipes").directive("starRating",["ar_services_environment",function(a){return{restrict:"A",scope:{rating:"@",reviewCount:"@"},templateUrl:a.scriptServerUrl+"assets/source/angular/templates/starrating.html",link:function(i,d,b){var h,f,g,e,j;
b.$observe("rating",function(l){h=5;f="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star.png";g="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star.png";
e="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.png";j=c(l);i.stars=[];for(var k=0;k<5;k++){i.stars.push({src:j[k]})
}});function c(p){var r=[];var q=(Math.round(p*2)/2).toFixed(1);var o=Math.floor(q);for(var m=0;m<o;m++){r.push(f)}if(q!=o){r.push(g)
}var l=r.length;for(var n=0;n<h-l;n++){r.push(e)}return r}}}}]);
//
// source/angular/controllers/deferredActionCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_deferredAction",["$scope","$window","$interval","$location","ar_services_shopping_list","arRecipeSave","ar_services_made_it","datalayerEvent","arFollowingSave","arRecipeBoxStorage","ngDialog","$anchorScroll","$rootScope","arCollectionSave","arCollectionStorage","ar_services_environment","arFollowingStorage",function(e,f,b,c,s,y,r,z,v,x,D,a,d,t,u,q,w){var A;
var B=0;var C=50;e.destroyInterval=function(){if(angular.isDefined(A)){b.cancel(A);A=undefined}};var I=function(O){var P=[];O.items.forEach(function(R){P.push(ar.models.shoppingListWriteInPostItem(R.item,R.aisle))
});var Q=ar.models.shoppingListWriteInPost(P,O.deferredActionName);p(Q)};var H=function(O){var P=ar.models.shoppingListWriteInPost([ar.models.shoppingListWriteInPostItem(O.item,O.aisle)],O.deferredActionName);
p(P)};var K=function(O){var P=[];O.recipes.forEach(function(R){P.push(ar.models.shoppingListSaveRecipePostItem(R.recipeid,R.servings))
});var Q=ar.models.shoppingListSaveRecipePost(P,O.deferredActionName);n(Q)};var M=function(O){var P=ar.models.shoppingListSaveRecipePost([ar.models.shoppingListSaveRecipePostItem(O.recipeid,O.servings)],O.deferredActionName);
n(P)};var J=function(O){var Q=[];O.recipes.forEach(function(R){Q.push(ar.models.recipeBoxSaveRecipePostItem(R.RecipeID,R.Type))
});var P=ar.models.recipeBoxSaveRecipePost(Q,O.deferredActionName);l(P)};var L=function(O){var P=ar.models.recipeBoxSaveRecipePost([ar.models.recipeBoxSaveRecipePostItem(O.RecipeID,O.Type)],O.deferredActionName);
l(P)};e.wireupAdIntegrationListeners=function(){if(!f.pubsub.isListening("A.ShoppingList.Add.Event","DeferredAction.Controller")){f.pubsub.listen("A.ShoppingList.Add.Event","DeferredAction.Controller",H)
}if(!f.pubsub.isListening("A.ShoppingList.AddMultiple.Event","DeferredAction.Controller")){f.pubsub.listen("A.ShoppingList.AddMultiple.Event","DeferredAction.Controller",I)
}if(!f.pubsub.isListening("A.ShoppingList.AddRecipe.Event","DeferredAction.Controller")){f.pubsub.listen("A.ShoppingList.AddRecipe.Event","DeferredAction.Controller",M)
}if(!f.pubsub.isListening("A.ShoppingList.AddMultipleRecipe.Event","DeferredAction.Controller")){f.pubsub.listen("A.ShoppingList.AddMultipleRecipe.Event","DeferredAction.Controller",K)
}if(!f.pubsub.isListening("A.Recipe.Save.ClickEvent","DeferredAction.Controller")){f.pubsub.listen("A.Recipe.Save.ClickEvent","DeferredAction.Controller",o)
}if(!f.pubsub.isListening("A.Recipe.Remove.ClickEvent","DeferredAction.Controller")){f.pubsub.listen("A.Recipe.Remove.ClickEvent","DeferredAction.Controller",G)
}if(!f.pubsub.isListening("A.RecipeBox.AddRecipe.Event","DeferredAction.Controller")){f.pubsub.listen("A.RecipeBox.AddRecipe.Event","DeferredAction.Controller",L)
}if(!f.pubsub.isListening("A.RecipeBox.AddMultipleRecipe.Event","DeferredAction.Controller")){f.pubsub.listen("A.RecipeBox.AddMultipleRecipe.Event","DeferredAction.Controller",J)
}if(!f.pubsub.isListening("A.Cook.Save.ClickEvent","DeferredAction.Controller")){f.pubsub.listen("A.Cook.Save.ClickEvent","DeferredAction.Controller",h)
}if(!f.pubsub.isListening("Recipe.OpenCollectionModal","DeferredAction.Controller")){f.pubsub.listen("Recipe.OpenCollectionModal","DeferredAction.Controller",E)
}if(!f.pubsub.isListening("A.RecipeDetial.Rate.ClickEvent","DeferredAction.Controller")){f.pubsub.listen("A.RecipeDetial.Rate.ClickEvent","DeferredAction.Controller",F)
}if(!f.pubsub.isListening("A.Collection.Save.ClickEvent","DeferredAction.Controller")){f.pubsub.listen("A.Collection.Save.ClickEvent","DeferredAction.Controller",g)
}};e.executePostLoginEvents=function(){if(f.location.href.indexOf("/account")>=0){return}var T=f.location.search.split("&");if(T.length===0){return
}var P=T.filter(function(U){return U.indexOf("deferred")>=0});if(P.length===0){return}var R=P[0].split("=");if(R.length!==2){return
}var S;try{S=JSON.parse(decodeURIComponent(R[1].replace(/\+/g," ")))}catch(Q){S=null}if(!S||!S.deferredActionName){return}var O=S.deferredActionName.toLowerCase();
switch(O){case"addtorecipebox":o(S,true);break;case"addtoshoppinglist":p(S);break;case"addingredienttoshoppinglist":i(S);break;
case"addrecipetoshoppinglist":m(S);break;case"addpersonalrecipetoshoppinglist":k(S);break;case"addmadeit":j();break;case"addfollowing":h(S);
break;case"addrecipetoshoppinglistfromad":n(S);break;case"addrecipetorecipeboxfromad":l(S);break;case"openratingsection":F();
break;case"addcollection":g(S);break;case"uploadphotoonphotomodal":N(S);break}};function F(){f.pubsub.broadcast("A.Recipe.RateAndReview.ClickEvent",[true,{fromStickyNav:true}]);
c.url(c.path());c.hash("recipe-toolbar");a()}function G(O){y.remove(O.recipeID,O.type,{success:function(){f.pubsub.broadcast("Recipe.Heart.ClickEvent",[{recipeId:O.recipeID}]);
e.$emit("notify","Recipe removed from your favorites",null,"success")}})}function o(P,O){if(typeof(P.clicksource)==="string"){var Q=P.clicksource==="amp"?"amp save recipe":(P.clicksource==="recipe hero photo"?"rd_saver":"rc_saver");
z.pushRegistrationSourceClick(Q)}x.hasRecipeId(P.recipeID,P.type).then(function(R){if(R){f.pubsub.broadcast("Recipe.OpenCollectionModal",[{recipeId:P.recipeID,recipeType:P.type,recipeTitle:P.title,recipeImageUrl:P.imageUrl}])
}else{y.save(P.recipeID,P.type,P.title,P.imageUrl,P.source,{success:function(){f.pubsub.broadcast("Recipe.Heart.ClickEvent",[{recipeId:P.recipeID}]);
f.pubsub.broadcast("Recipe.AddToRecipeBox",[{recipeId:P.recipeID}]);f.pubsub.broadcast("Recipe.OpenCollectionModal",[{recipeId:P.recipeID,recipeType:P.type,recipeTitle:P.title,recipeImageUrl:P.imageUrl}]);
z.push("add to recipe box",P.recipeID,"Action Complete",P.source);c.url(c.path())},failure:function(){if(O){e.$emit("notify","Oops! We couldn’t add item to the Recipe Box. Try again in just a moment.",null,"failure")
}}})}})}function p(O){var P=s.saveWriteIns(O);P.$promise.then(function(){e.$emit("notify","Shopping list saved.",null,"success")
},function(){e.$emit("notify","Oops! We couldn’t add item to the Shopping List. Try again in just a moment.",null,"failure")})
}function n(O){var P=s.saveRecipeFromAd(O);P.$promise.then(function(){e.$emit("notify","Recipe(s) saved to shopping list.",null,"success")
},function(){e.$emit("notify","Oops! We couldn’t save the recipe(s) to the Shopping List. Try again in just a moment.",null,"failure")
})}function E(P){e.data=P;e.isPhoneViewPort=(f.innerWidth<768);var O={template:q.scriptServerUrl+"assets/source/angular/templates/RecipeSaveCollectionModal.html",className:"ngdialog-theme-default ngdialog-theme-collection",scope:e};
D.openConfirm(O)}function l(O){x.filterSavedRecipeIds(O.recipes).then(function(P){O.recipes=P;if(O.recipes.length==0){e.$emit("notify","Recipe(s) saved to recipe box.",null,"success")
}else{y.saveRecipeFromAd(O,{success:function(){e.$emit("notify","Recipe(s) saved to recipe box",null,"success");O.recipes.forEach(function(Q){f.pubsub.broadcast("Recipe.Heart.ClickEvent",[{recipeId:Q.recipeID}]);
f.pubsub.broadcast("Recipe.AddToRecipeBox",[{recipeId:Q.RecipeID}]);z.push("add to recipe box",Q.recipeId,"Action Complete",Q.source)
})},failure:function(){e.$emit("notify","Oops! We couldn’t add recipe(s) to the Recipe Box. Try again in just a moment.",null,"failure")
}})}})}function i(O){var P=s.saveIngredient(O);P.$promise.then(function(){A=b(function(){if(B>C){e.destroyInterval()}var Q=angular.element('input[data-id="'+O.ingredientid+'"]');
if(Q.length>0){Q.prop("checked",true);e.destroyInterval()}B++},100);e.$emit("notify","Added to shopping list.",null,"success")
},function(){e.$emit("notify","Oops! We couldn’t add ingredient to the Shopping List. Try again in just a moment.",null,"failure")
})}function m(O){var P=s.saveRecipe(O);P.$promise.then(function(){A=b(function(){if(B>C){e.destroyInterval()}var Q=angular.element('input[ name="slCheckbox"]');
if(Q.length>0){Q.prop("checked",true);e.destroyInterval()}B++},100);e.$emit("notify","Shopping list saved.",null,"success")},function(){e.$emit("notify","Oops! We couldn’t add recipe to the Shopping List. Try again in just a moment.",null,"failure")
})}function k(O){var P=s.savePersonalRecipe(O);P.$promise.then(function(){e.$emit("notify","Shopping list saved.",null,"success")
},function(){e.$emit("notify","Oops! We couldn’t add recipe to the Shopping List. Try again in just a moment.",null,"failure")
})}function j(){f.pubsub.broadcast("A.MadeIt.Add.Event",[])}function h(O){z.pushRegistrationSourceClick("ck_follow");w.hasCookId(O.userID).then(function(P){if(!P){v.save(O.userID,O.type,O.redirect,{success:function(){if(O.type=="brand"){f.location.href=O.redirect
}f.pubsub.broadcast("A.Cook.Save.ClickEvent",[{userID:O.userID}])},failure:function(){}})}})}function g(O){u.hasCollectionId(O.collectionId).then(function(P){if(P){e.$emit("notify",O.name+" saved to favorites",null,"success")
}else{t.save(O.collectionId,O.name,{success:function(){f.pubsub.broadcast("Collection.Heart.ClickEvent",[{collectionId:O.collectionId}]);
e.$emit("notify","",5000,"success",null,null,null,O.name,O.collectionId,null," saved to favorites");c.url(c.path())},failure:function(){}})
}})}function N(O){d.$broadcast("A.Recipe.PhotoModal.PhotoUpload.ClickEvent",O);c.url(c.path())}}]);
//
// source/angular/controllers/notificationsCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_notifications",["$scope","$rootScope","ar_services_notifications","arLogin","ar_services_environment","$filter","ar_cookie_service","$window","$timeout","popup_manager_service","ipCookie","datalayerEvent","impressionTrack","ar_services_url",function(c,b,i,j,h,a,g,e,d,v,t,m,s,x){c.service=i;
c.impressionList=[];var k=h.baseDomain;var f;c.anonMsg=function(){if(e.innerWidth>1024){var y=t("Notification.AnonMsgCount");
if(y!=null){f=parseInt(y)}else{f=0}if(!j.isLoggedIn()&&f<3){i.openAnonMsg();i.closeAnonMsg();t("Notification.AnonMsgCount",++f,{domain:k,path:"/",expires:365,expirationUnit:"days"})
}}};var l=e.localStorage.getItem("Notification.ClickCount");if(!l){l=0}c.notificationsOpen=false;c.notificationCount=1;c.notificationList=[];
c.displayCount=false;c.displayMsg=false;c.setNotificationsViewed=function(){if(!j.isLoggedIn()){i.cancelAnonMsg()}c.notificationsOpen=!c.notificationsOpen;
if(j.isLoggedIn()&&c.notificationsOpen){if(c.displayCount){var y=c.notificationList.map(function(z){return z.notificationId});
i.setNotificationViewed(j.userId,y)}c.displayCount=false;if(c.notificationList.length===0){e.localStorage.setItem("Notification.LoggedInMsgViewed",true)
}s.push("notification",c.impressionList);m.pushNotificationEvent("notification bell","bell")}if(!j.isLoggedIn()&&c.notificationsOpen){if(l<2){e.localStorage.setItem("Notification.ClickCount",++l)
}else{e.localStorage.setItem("Notification.AnonMsgViewed",true);c.displayCount=false}}};c.setNotificationClicked=function(y,z){i.setNotificationClicked(j.userId,y).$promise.then(function(A){e.location.href=z
});e.setTimeout(function(){e.location.href=z},250)};c.setAnalyticsCookie=function(y){if(y==="notification|sign up"){m.pushRegistrationSourceClick("hm_notifsignup")
}g.setCookie("globalNavClick",null,-1);g.setCookie("globalNavClick","global nav|"+y,1)};var r=function(y){return i.getUserNotifications({userid:y}).$promise.then(function(z){c.notificationCount=a("filter")(z,{viewedOn:null}).length;
if(z.length==0&&!e.localStorage.getItem("Notification.LoggedInMsgViewed")){c.notificationCount=1}if(z.length<10){c.displayMsg=true
}c.displayCount=c.notificationCount>0;w(z.length);c.notificationList=u(z);c.impressionList=z})};if(j.isLoggedIn()&&e.Toggles.SocialNotification){r(j.userId)
}else{c.displayCount=!e.localStorage.getItem("Notification.AnonMsgViewed")}var n=function(C,y,A){var B;switch(C){case"recipe":if(A){B="/personal-recipe/"+y
}else{B="/recipe/"+y}break;case"profile":B="/cook/"+y;break;case"collection":B="/collections/"+y;break;case"photo":var z=h.imageServerUrl;
if(!y){B=z+"mobile/allrecipes/images/icon-user-default_v2.png"}else{B=z+"userphotos/50x50/"+y+".jpg"}break}return B};var p=function(z,A,y){var B=x.getRecipeUrl({itemType:"recipe",title:A,recipeID:z})+"photos/"+y;
return B};var q=function(y,z,A){var B=x.getRecipeUrl({itemType:"recipe",title:z,recipeID:y})+"reviews/"+A;return B};var u=function(C){var B={};
var A=[];for(var z=0;z<C.length;z++){var D=C[z].properties;var y=D.Collections!=null?D.Collections[0]:null;switch(C[z].type){case"CookFollowed":B={action:"is now following you.",userName:D.ActionByUserName,userPhotoUrl:n("photo",D.ActionByUserPhotoId),destinationUrl:n("profile",D.ActionByUserId),profileUrl:n("profile",D.ActionByUserId),actionClass:"single-line-notification",notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"RecipeSaved":B={action:"saved your recipe,",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:(y!=null?n("collection",y.CollectionId):n("recipe",D.RecipeId,D.PersonalRecipe)),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type,subAction:(y!=null?"into":null),collection:(y!=null?y.DisplayName:null)};
break;case"RecipeMade":B={action:"made your recipe,",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:n("profile",D.UserId)+"/made-it/",profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"RecipeReviewed":B={action:"reviewed your recipe,",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:q(D.RecipeId,D.RecipeTitle,D.ReviewId),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"RecipeRated":B={action:"rated your recipe",subAction:D.Rating+" stars,",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:n("recipe",D.RecipeId,false),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"PhotoAdded":B={action:"added a photo of your recipe",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:p(D.RecipeId,D.RecipeTitle,D.PhotoId),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_CollectionCreated":B={action:"created a collection",userName:D.ActionByUserName,userPhotoUrl:n("photo",D.ActionByUserPhotoId),destinationUrl:n("collection",D.CollectionId),profileUrl:n("profile",D.ActionByUserId),followedUserId:D.FollowedUserId,recipeOrUserName:D.CollectionName,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_CookFollowed":B={action:"is now following",userName:D.ActionByUserName,userPhotoUrl:n("photo",D.ActionByUserPhotoId),destinationUrl:n("profile",D.FollowedUserId),profileUrl:n("profile",D.ActionByUserId),followedUserId:D.FollowedUserId,recipeOrUserName:D.FollowedUsername,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_RecipeSaved":B={action:"saved",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),destinationUrl:(y!=null?n("collection",y.CollectionId):n("recipe",D.RecipeId,D.PersonalRecipe)),profileUrl:n("profile",D.UserId),recipeOrUserName:D.RecipeTitle,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type,subAction:(y!=null?"into":null),collection:(y!=null?y.DisplayName:null)};
break;case"NotifyFollower_RecipeMade":B={action:"made",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),destinationUrl:n("profile",D.UserId)+"/made-it/",profileUrl:n("profile",D.UserId),recipeOrUserName:D.RecipeTitle,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_RecipeReviewed":B={action:"reviewed",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),destinationUrl:q(D.RecipeId,D.RecipeTitle,D.ReviewId),profileUrl:n("profile",D.UserId),recipeOrUserName:D.RecipeTitle,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_RecipeRated":B={action:"rated",subAction:D.Rating+" stars",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:n("recipe",D.RecipeId,false),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_CollectionSaved":var E="saved ";var G=D.CollectionName;var H=" by ";var F=D.CollectionOwnerName;if(!D.CollectionOwnerName){E="saved a collection";
G=D.CollectionName;H="";F=""}B={action:E,userName:D.ActionByUserName,userPhotoUrl:n("photo",D.ActionByUserPhotoId),destinationUrl:n("collection",D.CollectionId),profileUrl:n("profile",D.ActionByUserId),followedUserId:D.FollowedUserId,recipeOrUserName:G,subAction:H,collection:F,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyOwner_CollectionSaved":B={action:"saved your collection",userName:D.ActionByUserName,userPhotoUrl:n("photo",D.ActionByUserPhotoId),destinationUrl:n("collection",D.CollectionId),profileUrl:n("profile",D.ActionByUserId),followedUserId:D.FollowedUserId,recipeOrUserName:D.CollectionName,notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break;case"NotifyFollower_PhotoAdded":B={action:"added a photo of",userName:D.Username,userPhotoUrl:n("photo",D.UserPhotoId),recipeOrUserName:D.RecipeTitle,destinationUrl:p(D.RecipeId,D.RecipeTitle,D.PhotoId),profileUrl:n("profile",D.UserId),notificationId:C[z].notificationId,viewedOn:C[z].viewedOn,clicked:(C[z].clickedOn!=null),type:C[z].type};
break}A.push(B)}return A};c.getAnalyticsCookieValue=function(z){var y="view notification";switch(z.type){case"NotifyFollower_CollectionCreated":y="view collection";
break;case"NotifyFollower_CollectionSaved":case"NotifyOwner_CollectionSaved":y="save collection";break;case"RecipeSaved":case"NotifyFollower_RecipeSaved":if(z.collection!=null){y="save recipe to collection"
}break;case"RecipeReviewed":case"NotifyFollower_RecipeReviewed":y="reviews";break;case"RecipeRated":case"NotifyFollower_RecipeRated":y="ratings";
break;default:break}return"notification|"+y};c.menuItemCount;var w=function(y){c.menuItemCount=y};c.isActive=false;c.bellClick=function(){b.isActive=!b.isActive;
d(function(){b.isActive=false},4000)};c.loadMoreNotifications=function(){var y=o();if(c.oldestNotification!=y){c.oldestNotification=y;
i.loadMoreNotifications(j.userId,y,10).$promise.then(function(z){if(z){if(z.length<10){c.displayMsg=true}c.notificationList=c.notificationList.concat(u(z));
s.push("notification",z);m.pushNotificationEvent("noticitation bell","bell")}})}};var o=function(){return c.notificationList[c.notificationList.length-1].notificationId
}}]);
//
// source/angular/services/madeit-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_made_it",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/recipes/:recipeId/made";
return a(d,{recipeId:"@recipeId",userid:"@userid"},{save:{url:d,method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},remove:{url:d,method:"DELETE",isArray:false,headers:{Authorization:function(){var e=c.token();return e}}},query:{url:b.url+"v1/users/me/made-counts",method:"GET",isArray:true,headers:{Authorization:function(){var e=c.token();
return e}}},privateProfile:{url:b.url+"v1/users/me/made",method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},publicProfile:{url:b.url+"v1/users/:userid/made",method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}}})}]);
//
// source/angular/services/recipebox-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_recipebox",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var e=b.url+"v1/users/me/recipe-box/recipes";
var d=b.url+"v1/users/me/recipe-box/folders/";return a(e,{id:"@id",cookid:"@cookid"},{query:{url:e,method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},save:{url:e,method:"POST",isArray:false,headers:{Authorization:function(){var f=c.token();return f}}},remove:{url:b.url+"v1/users/me/recipe-box/recipe/:id",method:"DELETE",isArray:false,headers:{Authorization:c.token}},removeFavorite:{url:b.url+"v1/users/me/recipe-box/recipes/:id",method:"DELETE",isArray:false,headers:{Authorization:c.token}},queryFolder:{url:d+":folderId/recipes",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},getFolders:{url:d,method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();return f}}},getRecipeIds:{url:b.url+"v1/users/me/recipe-box/recipeids",method:"GET",isArray:true,headers:{Authorization:c.token}},getRecipeById:{url:b.url+"v1/users/me/recipe-box/recipe/:id",method:"GET",isArray:false,headers:{Authorization:c.token}},getRecipes:{url:b.url+"v1/users/me/recipes",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},getSharedRecipes:{url:b.url+"v1/users/:userId/recipe-box/shared-recipes",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},publicProfile:{url:b.url+"v1/users/:cookid/recipes",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},getRecipeBoxRecipes:{url:b.url+"v1/users/me/recipe-box/recipesonly",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}},saveRecipeFromAd:{url:b.url+"v1/users/me/recipe-box/multiplerecipes",method:"POST",isArray:true,headers:{Authorization:function(){var f=c.token();
return f}}},getMyWeblinks:{url:b.url+"v1/users/me/recipe-box/weblinks",method:"GET",isArray:false,headers:{Authorization:function(){var f=c.token();
return f}}}})}]);
//
// source/angular/services/notifications-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_notifications",["ar_services_environment","$resource","ar_services_token","$timeout","popup_manager_service",function(c,a,d,b,i){var j=c.url;
var g;var f=false;var e;var h=a(j,{userid:"@userid"},{getUserNotifications:{url:j+"v1/my/notifications",method:"GET",isArray:true,headers:{Authorization:d.token},data:{preventCache:new Date().getTime()}},setNotificationViewed:{url:j+"v1/my/notificationViewed",method:"POST",isArray:false,headers:{Authorization:d.token}},setNotificationClicked:{url:j+"v1/my/notificationClicked",method:"POST",isArray:false,headers:{Authorization:d.token}},loadMoreNotifications:{url:j+"v1/my/notificationsPaged",method:"GET",isArray:true,headers:{Authorization:d.token}}});
return{getUserNotifications:function(k){if(g==undefined){g=h.getUserNotifications(k)}return g},setNotificationViewed:function(k,l){return h.setNotificationViewed({UserId:k,WhenViewed:l,preventCache:new Date().getTime()})
},setNotificationClicked:function(l,k){return h.setNotificationClicked({UserId:l,Clicked:k,preventCache:new Date().getTime()})
},loadMoreNotifications:function(m,l,k){return h.loadMoreNotifications({u:m,id:l,n:k,preventCache:new Date().getTime()})},getMsgFadeOut:function(){return f
},openAnonMsg:function(){f=true;b(function(){i.triggerClicked.Fire("notifications")})},closeAnonMsg:function(){e=b(function(){i.triggerClicked.Fire("notifications")
},10000)},cancelAnonMsg:function(){if(e){f=false;b.cancel(e)}}}}]);
//
// source/angular/services/notifications-provider-stub.js
//
"use strict";angular.module("allrecipes").factory("ar_services_notifications_stub",["ar_services_environment","ar_services_token","$q",function(b,c,a){var f=b.url+"v1/my/notifications";
var e;function d(g){var h=a.defer();h.resolve([{CreatedAt:"2011-07-14T19:43:37+0100",EventId:"b388b64c-3910-4ad9-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.RecipeSaved",properties:{RecipeTitle:"Simple BBQ Sauce",EpochMicroseconds:123456789,RecipeId:14578,UserId:54321,Username:"John Doe",UserPhotoId:2739160,},Clicked:0,Viewed:1,},{CreatedAt:"2012-07-14T19:43:37+0100",EventId:"a388b64c-3910-5565-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.RecipeMade",properties:{RecipeTitle:"Taco Recipe",EpochMicroseconds:123456789,RecipeId:41565,UserId:3811326,Username:"Vburrito",UserPhotoId:1135117},Clicked:0,Viewed:1,},{CreatedAt:"2012-07-14T19:43:37+0100",EventId:"a388b64c-3910-5565-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.CookFollowed",properties:{UserId:177901,EpochMicroseconds:123456789,Username:"John Wison Chandlerson",UserPhotoId:1059381},Clicked:0,Viewed:1,},{CreatedAt:"2011-07-14T19:43:37+0100",EventId:"b388b64c-3910-4ad9-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.RecipeSaved",properties:{RecipeTitle:"Good dog food",EpochMicroseconds:123456789,RecipeId:14578,UserId:54321,Username:"Dee Dee Ramone",UserPhotoId:2739160},Clicked:0,Viewed:1,},{CreatedAt:"2011-07-14T19:43:37+0100",EventId:"b388b64c-3910-4ad9-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.RecipeSaved",properties:{RecipeTitle:"Good dog food",EpochMicroseconds:123456789,RecipeId:14578,UserId:117687,Username:"Johnny Ramone",UserPhotoId:2739160},Clicked:0,Viewed:0,},{CreatedAt:"2012-07-14T19:43:37+0100",EventId:"a388b64c-3910-5565-bae5-22b63e82ef18",type:"Allrecipes.Services.Timeline.Models.CookFollowedFanOut",properties:{UserId:177901,EpochMicroseconds:123456789,Username:"John W",UserPhotoId:1059381,FollowedUserId:14627454,FollowedUserName:"Patricia Guerra"},Clicked:0,Viewed:0,}]);
e=h.promise;return e}return{getUserNotifications:function(g){if(e==undefined){getNotifications(g)}return e},setNotificationViewed:function(g){}}
}]);
//
// source/angular/services/newsletter-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_newsletter",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/users/me/newsletters";
return a(d,{id:"@newsletterId"},{addSubscription:{url:b.url+"v1/users/me/newsletters/newsletter/:id",method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},getSubscriptions:{url:d,method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();return e}}},})
}]);
//
// source/angular/services/shoppinglist-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_shopping_list",["ar_services_environment","$resource","ar_services_token",function(b,a,c){return a(b.url+"v1/users/me/shopping-lists/default/recipes",{shoppinglistgroceryitemid:"@shoppinglistgroceryitemid",shoppinglistrecipeid:"@shoppinglistrecipeid",shoppinglistid:"@shoppinglistid",collectionId:"@collectionId"},{saveRecipe:{url:b.url+"v1/users/me/shopping-lists/default/recipes",method:"POST",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},savePersonalRecipe:{url:b.url+"v1/users/me/shopping-lists/default/personal-recipes",method:"POST",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},saveIngredient:{url:b.url+"v1/users/me/shopping-lists/default/ingredients",method:"POST",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},query:{url:b.url+"v1/users/me/shopping-lists/default",method:"GET",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},queryShoppingList:{url:b.url+"v1/users/me/shopping-lists/:shoppingListId",method:"GET",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},queryShoppingLists:{url:b.url+"v1/users/me/shopping-lists/",method:"GET",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},deleteIngredient:{url:b.url+"v1/users/me/shopping-lists/:shoppinglistid/grocery-items/:shoppinglistgroceryitemid",method:"DELETE",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},deleteRecipe:{url:b.url+"v1/users/me/shopping-lists/:shoppinglistid/recipes/:shoppinglistrecipeid",method:"DELETE",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},deletePersonalRecipe:{url:b.url+"v1/users/me/shopping-lists/:shoppinglistid/personal-recipes/:shoppinglistrecipeid",method:"DELETE",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}},saveWriteIns:{url:b.url+"v1/users/me/shopping-lists/default/write-ins",method:"POST",isArray:true,headers:{Authorization:function(){var d=c.token();
return d}}},saveRecipeFromAd:{url:b.url+"v1/users/me/shopping-lists/default/multiplerecipes",method:"POST",isArray:true,headers:{Authorization:function(){var d=c.token();
return d}}},saveCollection:{url:b.url+"v1/users/me/shopping-lists/default/:collectionId",method:"POST",isArray:false,headers:{Authorization:function(){var d=c.token();
return d}}}})}]);
//
// source/angular/services/token-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_token",["$cookies",function(a){return{token:function(){var b=a.ARToken;
var c="Bearer "+b;return c}}}]).config(["$provide","$httpProvider",function(b,a){a.interceptors.push("ar_services_apiInterceptor")
}]);
//
// source/angular/services/login-service.js
//
"use strict";angular.module("allrecipes").factory("arLogin",["$window",function(a){return{userId:((a.dataLayer&&a.dataLayer.user)?a.dataLayer.user[0].profile[0].profileInfo.profileId:0),goToAuthorizationWelcomePage:function(b){a.location.href="/account/authenticationwelcome/?loginreferrerurl="+b+"&actionsource="+a.dataLayer.page.category.contentType
},isLoggedIn:function(){return(a.dataLayer&&a.dataLayer.user&&a.dataLayer.user[0].segment.isLoggedIn)},ensureUserIsLoggedIn:function(b){var c=this;
return function(d){if(!d){c.goToAuthorizationWelcomePage(a.location.href);return null}else{if(typeof b==="function"){return b()
}else{return null}}}}}}]);
//
// source/angular/services/perishable-localstorage-service.js
//
"use strict";angular.module("allrecipes").factory("perishableLocalstorage",["$window","ipCookie","ar_services_environment",function(a,d,b){var g=1800000;
var e=function(h){return a.localStorage.getItem(h+"ExpirationDate")===null||Date.now()>a.localStorage.getItem(h+"ExpirationDate")
};var f=function(){try{var k="Check if local storage is available";var i="ar_localStorage_check";a.localStorage.setItem(i,k);
var j=a.localStorage.getItem(i)==k;localStorage.removeItem(i);return j}catch(h){return false}};var c=function(i){try{JSON.parse(i);
return true}catch(h){return false}};return{set:function(j,l,i){var k=g;if(typeof i!="undefined"){k=i}if(f()){a.localStorage.setItem(j,JSON.stringify(l));
if(e(j)){a.localStorage.setItem(j+"ExpirationDate",Date.now()+k)}}else{var h=b.baseDomain;d(j,JSON.stringify(l),{domain:h,path:"/",expires:30,expirationUnit:"minutes"})
}},get:function(h){if(f()){var i=a.localStorage.getItem(h);if(h==="kxsegs"){return i}i=((i==null)||(i===""))?null:(c(i)?JSON.parse(i):i);
return e(h)?null:i}else{return((d(h)==null)||(d(h)===""))?null:d(h)}},remove:function(h){if(f()){a.localStorage.remove(h+"ExpirationDate");
return a.localStorage.removeItem(h)}else{return d.remove(h)}}}}]);
//
// source/angular/services/followingsave-service.js
//
"use strict";angular.module("allrecipes").factory("arFollowingSave",["$window","ar_services_following","arFollowingStorage","ar_current_user_state_service","ar_public_profile_state_service",function(a,d,e,b,c){return{save:function(g,k,i,f){var h=ar.models.followPost(g,k,i,"AddFollowing");
var j=function(n){e.add(g);var l=b.getCurrentUser();if(l!==null&&l!==undefined){l.FollowingCount++;b.setCurrentUser(l);b.followingListChangedHandler.Fire();
var m=c.getProfileUser();if(m!==null&&m!==undefined){m.FollowersCount++;if(l.Id===m.Id){m.FollowingCount++}c.setProfileUser(m)
}}c.followingListChangedHandler.Fire();f.success(n)};d.save(h).$promise.then(j,f.failure)},remove:function(g,f){var h=function(k){e.remove(g);
var i=b.getCurrentUser();if(i!==null&&i!==undefined){i.FollowingCount--;b.setCurrentUser(i);b.followingListChangedHandler.Fire();
var j=c.getProfileUser();if(j!==null&&j!==undefined){j.FollowersCount--;if(i.Id===j.Id){j.FollowingCount--}c.setProfileUser(j)
}a.pubsub.broadcast("FollowingEvent")}c.followingListChangedHandler.Fire();f.success(k)};d.remove({id:g}).$promise.then(h,f.failure)
}}}]);
//
// source/angular/services/followingstorage-service.js
//
"use strict";angular.module("allrecipes").factory("arFollowingStorage",["perishableLocalstorage","ar_services_following","arLogin","$q",function(f,b,c,a){var e="FollowingItems"+c.userId;
var d=c.isLoggedIn()?(c.userId!==0?f.get(e):null):null;var g;if(d===null||d===undefined){d=[];if(c.isLoggedIn()){g=b.getAllFollowingIds().$promise;
g.then(function(h){f.set(e,h);d=h})}else{g=a.when(d)}}else{g=a.when(d)}return{hasCookId:function(h){return g.then(function(){if(Object.keys(d).length===0){return false
}var i=d.filter(function(j){return j===h});return i.length>0})},remove:function(h){var i=d.indexOf(h);if(i!=-1){d.splice(i,1)
}f.set(e,d)},add:function(h){d.push(h);f.set(e,d)}}}]);
//
// source/angular/services/recipesave-service.js
//
"use strict";angular.module("allrecipes").factory("arRecipeSave",["$window","ar_services_recipebox","arRecipeBoxStorage","ar_current_user_state_service","ar_public_profile_state_service",function(a,d,e,b,c){return{save:function(j,h,m,g,k,f){var i=ar.models.recipeboxPost(j,h,m,g,"AddToRecipeBox",k);
var l=function(p){e.add(j,h);var n=b.getCurrentUser();if(n!==null&&n!==undefined){n.FavoriteCount++;b.setCurrentUser(n);var o=c.getProfileUser();
if(o!==null&&o!==undefined&&n.Id===o.Id){o.FavoriteCount++;c.setProfileUser(o)}}f.success(p)};d.save(i).$promise.then(l,f.failure)
},remove:function(h,g,f){var i=function(l){e.remove(h,g);var j=b.getCurrentUser();if(j!==null&&j!==undefined){j.FavoriteCount--;
b.setCurrentUser(j);var k=c.getProfileUser();if(k!==null&&k!==undefined&&j.userId===k.userId){k.FavoriteCount--;c.setProfileUser(k)
}}f.success(l)};d.remove({id:h}).$promise.then(i,f.failure);a.pubsub.broadcast("Recipe.AddToRecipeBox",[{recipeId:h}])},removeFavorite:function(i,h,g,f){var j=function(m){e.remove(i,g);
var k=b.getCurrentUser();if(k!==null&&k!==undefined){k.FavoriteCount--;b.setCurrentUser(k);var l=c.getProfileUser();if(l!==null&&l!==undefined&&k.userId===l.userId){l.FavoriteCount--;
c.setProfileUser(l)}}f.success(m)};d.removeFavorite({id:h}).$promise.then(j,f.failure);a.pubsub.broadcast("Recipe.AddToRecipeBox",[{recipeId:i}])
},saveRecipeFromAd:function(h,f){var g=h;var i=function(l){h.recipes.forEach(function(m){e.add(m.RecipeID,m.Type)});var j=b.getCurrentUser();
if(j!==null&&j!==undefined){j.FavoriteCount++;b.setCurrentUser(j);var k=c.getProfileUser();if(k!==null&&k!==undefined&&j.Id===k.Id){k.FavoriteCount++;
c.setProfileUser(k)}}f.success(l)};d.saveRecipeFromAd(g).$promise.then(i,f.failure)}}}]);
//
// source/angular/services/recipeboxstorage-service.js
//
"use strict";angular.module("allrecipes").factory("arRecipeBoxStorage",["perishableLocalstorage","ar_services_recipebox","arLogin","$q",function(h,b,c,a){var g="RecipeBoxItems"+c.userId;
var f=c.isLoggedIn()?(c.userId!==0?h.get(g):null):null;var i;if(f===null){f={};if(c.isLoggedIn()){i=b.getRecipeIds().$promise;
i.then(function(j){h.set(g,j);f=j})}else{i=a.when(f)}}else{i=a.when(f)}var e=function(j){switch(j.toLowerCase()){case"recipes":case"recipe":return 1;
case"personal-recipes":case"personalrecipe":return 5;default:return 0}};var d=function(l,k){if(Object.keys(f).length===0){return false
}var j=f.filter(function(m){return m.type===e(k)&&m.id===l});return j.length>0};return{hasRecipeId:function(k,j){return i.then(function(){return d(k,j)
})},filterSavedRecipeIds:function(j){return i.then(function(){var k=[];j.forEach(function(l){if(!d(l.RecipeID,l.Type)){k.push(l)
}});return k})},remove:function(l,k){var j=[];if(f!==null&&f!==undefined){f.forEach(function(m){if(!(m.id===l&&m.type===e(k))){j.push(m)
}});f=j}h.set(g,f)},add:function(k,j){f.push({id:k,type:e(j)});h.set(g,f)}}}]);
//
// source/angular/services/datalayerevent.js
//
"use strict";angular.module("allrecipes").factory("datalayerEvent",["$window","$location",function(b,a){return{push:function(i,h,c,d,f,m,k,l,j,o){if(k==null){k={}
}if(l){b.dataLayer.page.pageInfo.parameters.referringContentType=l}var g=UID.New();var n=(a&&a.$$url)?a.$$url:null;var e={eventInfo:{eventName:i,eventAction:[c]},attributes:{itemId:(h)?h:null,paginatedUrl:StringHelper.IsNullOrEmpty(m)?n:m,clickId:d?d:null,internalSource:k.internalSource},eventType:f,uid:g,OmnitureOverride:j};
b.dataLayer.event.push(e);var p=o?o.page:null;var q=o?o.prevPage:null;b.pubsub.broadcast("An.Event.ToBe.Tracked",[g,e.eventInfo.eventName,p!=null?p:parseInt(a.search().page),q,m])
},pushLocalOffers:function(d){var e=UID.New();var c={eventInfo:{eventName:"local offers impression",eventAction:"Local Offers Loaded"},attributes:{clickId:" ",internalSource:" ",localOffers:d},uid:e};
b.dataLayer.event.push(c);b.pubsub.broadcast("An.Event.ToBe.Tracked",[e,c.eventInfo.eventName])},pushError:function(h,g,c,d){var f=UID.New();
var e={eventInfo:{eventName:h,eventAction:[c],errorText:d},attributes:{itemId:g?g:null},uid:f};b.dataLayer.event.push(e);b.pubsub.broadcast("An.Event.ToBe.Tracked",[f,e.eventInfo.eventName,parseInt(a.search().page)])
},pushNotificationEvent:function(d,c){b.pubsub.broadcast("notificationNavClick",[{eventName:d,eventElement:c,pageTraceList:b.dataLayer.pageImpressionTraceList}])
},pushTastePreferenceSaveEvent:function(d,c,e){b.dataLayer.page.pageInfo.parameters.preference=e;b.dataLayer.page.pageInfo.pageName+="taste-preference/";
b.dataLayer.pageInstanceId=a.absUrl();b.dataLayer.events="event15";b.pubsub.broadcast("saveTastePreferenceBtnClick",[{eventName:d,events:b.dataLayer.events,page:b.dataLayer.page}])
},pushRegistrationSourceClick:function(c){b.pubsub.broadcast("registrationSource",[c])}}}]);
//
// source/angular/services/impressionTrack.js
//
"use strict";angular.module("allrecipes").factory("impressionTrack",["$window",function(a){return{push:function(g,f){var d=function(){var h=[];
angular.forEach(f,function(i){if(i.itemType){switch(i.itemType.toLowerCase()){case"recipe":h.push("rc-"+i.id);break;case"halfcook":h.push("ck-"+i.id);
break;case"video":h.push("vd-"+i.id);break;case"article":h.push("at-"+i.articleID);break;case"brand":h.push("bd-"+i.id);break;
case"ad":break;default:h.push("uk-"+i.Id);break}}});return h.sort()};var c=function(){var h=[];angular.forEach(f,function(i){if(i.itemType){switch(i.itemType.toLowerCase()){case"recipe":h.push("rc-"+i.recipeID);
break;case"halfcook":h.push("ck-"+i.id);break;case"video":h.push("vd-"+i.videoID);break;case"article":h.push("at-"+i.articleID);
break;case"brand":h.push("bd-"+i.id);break;case"ad":break;case"collection":h.push("cl-"+i.collectionID);break;case"review":h.push("rw-"+i.reviewID);
break;case"photo":h.push("ph-"+i.photoID);break;default:h.push("uk-"+i.Id);break}}});return h.sort()};var b=function(){var h=[];
angular.forEach(f,function(i){if(i.type){switch(i.type.toLowerCase()){case"recipesaved":case"recipemade":case"notifyfollower_recipesaved":case"notifyfollower_recipemade":h.push("rc-"+i.properties.RecipeId);
break;case"cookfollowed":case"notifyfollower_cookfollowed":h.push("ck-"+i.properties.ActionByUserId);break;case"notifyfollower_collectioncreated":case"notifyfollower_collectionsaved":case"notifyowner_collectionsaved":h.push("cl-"+i.properties.CollectionId);
break;default:h.push("uk-"+i.properties);break}}});return h.sort()};var e=[];switch(g){case"homePage":case"hubPage":case"searchPage":e=d(f);
break;case"profilePage":e=c(f);break;case"notification":e=b(f);break}a.dataLayer.pageImpressionTraceList=e}}}]);
//
// source/angular/services/url-service.js
//
"use strict";angular.module("allrecipes").factory("ar_services_url",["$window","lowercaseNoSpacesFilter",function(a,d){var b=function(j,h,g){if(h&&h.length>0){var e=angular.copy(h);
for(var f=0;f<e.length;f++){e[f]=e[f].trim();if(e[f].length==0){e.shift();continue}e[f]=encodeURIComponent(e[f])}if(e.length>0){j+="&"+g+e.join()
}}return j};var c=function(g,f,e){var h=b("",[g],"wt=");h=b(h,f,"ingIncl=");h=b(h,e,"ingExcl=");return h.replace(/^&/,"")};return{getRecipeUrl:function(f){var i="";
var e="";var j="";var h="";if(f&&f.itemType){if(f.recipeDetailUrlPrefix){i=f.recipeDetailUrlPrefix}var g=f.itemType.toLowerCase();
switch(g){case"recipe":case"personalrecipe":e=(g=="recipe")?"recipe":"personal-recipe";j=f.slug||d(f.title);h=f.recipeID;break;
case"review":e=(f.recipe.itemType.toLowerCase()=="recipe")?"recipe":"personal-recipe";j=d(f.recipe.title);h=f.recipe.recipeID;
break;case"video":e="video";j=f.slug||d(f.recipe.title);h=f.videoID!==undefined?f.videoID:f.recipe.videoId;break}i+="/"+e+"/"+h+"/"+j+"/";
if(f.recipeDetailUrlSuffix){if(g!="review"){i+=f.recipeDetailUrlSuffix}}}return i},getSearchUrl:function(g,f,e,j){var h=c(g,f,e);
var k="&sort="+(j?j:"re");var i="/search/results?"+h+k;return i},getQueryStringValue:function(h){var g=a.location.search.substring(1);
var j=g.split("&");for(var e=0;e<j.length;e++){var f=j[e].split("=");if(decodeURIComponent(f[0].toLowerCase())===h.toLowerCase()){return decodeURIComponent(f[1])
}}return undefined},removeAllrecipesDomain:function(g){var e="allrecipes.com/";if(g.indexOf(e)>0){var f=e.length;g=g.substring(g.indexOf(e)+f,g.length)
}return g}}}]);
//
// source/angular/services/user-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_user",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/users";
return a(d,{userId:"@userId"},{getPrivate:{url:d+"/me",method:"GET",isArray:false,headers:{Authorization:c.token}},getPublic:{url:d+"/:userId",method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}}})}]);
//
// source/angular/services/viewport-service.js
//
"use strict";angular.module("allrecipes").factory("ar_view_port_service",["$window",function(a){var b=768;return{isPhoneViewPort:function(){return a.innerWidth<b
}}}]);
//
// source/angular/services/feed-provider.js
//
angular.module("allrecipes").factory("feedProvider",["ar_services_environment","ar_services_token","$http","$q","feedItems","feedItemConverter",function(d,e,a,b,g,f){var j=20;
var k={};var c=function(m){return !!k[m]};var h=g&&g.length>0;var i=function(m){var n=g.slice(m,m+j);return f.fromFeedItemViewModel(n,m)
};var l=function(o,n){var m=angular.fromJson(o);m.feed=f.fromFeedItemModel(m.feed,n);return m};return{get:function(o){var m;var n=(o.page-1)*j;
angular.extend({page:1,includeCookActivities:false},o);if(c(o.page)){return{then:function(){}}}else{k[o.page]=true;if(h){m=b.when({data:{feed:i(n)}})
}else{var p=d.url+"v1/user-feed?page="+o.page+"&includeCookActivities="+o.includeCookActivities;m=a.get(p,{headers:{Authorization:e.token},transformResponse:function(r,q){return l(r,q)
}})}return m}}}}]);
//
// source/angular/services/global-ui-event-service.js
//
"use strict";angular.module("allrecipes").service("global_ui_events_service",function(){this.globalClickEventHandler=new EventHandler("GlobalClick")
});
//
// source/angular/services/popupManagerService.js
//
"use strict";angular.module("allrecipes").service("popup_manager_service",[function(){var a={};this.GetPopups=function(){return a
};this.triggerClicked=new EventHandler();this.addTrigger=function(c,b){if(a[c]){a[c].trigger.push(b)}else{a[c]={trigger:[b],panel:undefined}
}};this.addPanel=function(c,b){if(a[c]){a[c].panel=b}else{a[c]={trigger:[],panel:b}}};this.triggerPopup=function(b){if(a[b]){this.triggerClicked.Fire(b)
}}}]);
//
// source/angular/services/email-provider.js
//
angular.module("allrecipes").factory("ar_services_email",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/email";
return a(d,{},{send:{url:d,method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();return e}}}})}]);
//
// source/angular/controllers/recipeSaveCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_recipe_save",["$scope","$window","arRecipeSave",function(a,b,c){var f=this;
a.recipeBoxId="";a.saved=false;a.init=function(g,h){f.id=g;f.type=h};var e=function(g){a.saved=!a.saved;a.recipeBoxItemID=g.recipeBoxItemID;
a.$emit("notify","Recipe "+(a.saved?"saved":"removed"),null,"success")};var d=function(){a.recipeBoxItemID=0};a.save=function(){if(a.saved){c.remove(a.recipeBoxItemID,f.id,{success:e,failure:d})
}else{c.save(f.id,f.type,null,null,"recipe button",{success:e,failure:d})}};a.btnSaveToRecipeBoxOnClick=function(g){b.pubsub.broadcast("A.Recipe.Save.ClickEvent",[{recipeID:f.id,type:f.type,source:"recipe button"}])
}}]);
//
// source/angular/controllers/collectionCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controller_collections",["$scope","$window","ngDialog","ar_services_collections","datalayerEvent","adsConstants",function(a,b,f,d,e,c){a.errorMessage="";
a.recipeDetail={};a.collectionList={};a.modalOpenLocation=null;a.subTitle="Now you can add it to collections.";a.title="Saved to favorites!";
a.init=function(h){a.recipeDetail=h;a.collectionList=a.getMyCollectionList();if(a.recipeDetail.recipeType!==undefined&&a.recipeDetail.recipeType.toLowerCase()=="savetocollection"){a.subTitle="";
a.title="Pick a collection"}};a.collectionOptionSelected=function(h){h.selected=!h.selected};a.createAndAddNewCollection=function(i){var h={collectionName:i,description:""};
a.submitCollection(h,true,false);a.form.collectionName=""};a.submitCollection=function(h,j,i){if(j){a.saved=d.saveCollection({collectionId:0,name:h.collectionName,description:h.description});
a.saved.$promise.then(function(l){var k="create collection";if(!StringHelper.IsNullOrEmpty(a.modalOpenLocation)){k+=" from "+a.modalOpenLocation
}e.push(StringHelper.IsNullOrEmpty(h.description)?"create collection":"create collection with description",l.collectionId,"Action Complete",k);
if(i){f.close();b.location.href="/collections/"+l.collectionId}else{g(h.collectionName,l.collectionId)}},function(k){if(k.status!==401){a.errorMessage=k.data.message
}})}};var g=function(i,h){var j={folderID:h,name:i,selected:true};a.collectionList.unshift(j)};a.getMyCollectionList=function(){a.saved=d.getMyCollectionSummaries();
a.saved.$promise.then(function(h){angular.forEach(h.collectionList,function(i){i.selected=false;angular.forEach(a.recipeDetail.folderIds,function(j){if(i.folderID==j){i.selected=true
}})});a.collectionList=h.collectionList},function(h){if(h.status!==401){a.errorMessage=h.data.message}})};a.submitCollectionList=function(){var h=[];
angular.forEach(a.collectionList,function(j){if(j.selected===true){var i={folderID:null,name:null};i.folderID=j.folderID;i.name=j.name;
h.push(i);c.adTrackingEvents.filter(function(k){return k.name===j.name}).map(function(k){b.pubsub.broadcast(k.topicName)});e.push("add recipe to collection",j.folderID,"Action Complete","add recipe to collection from recipe")
}});if(a.recipeDetail.recipeType!==undefined&&a.recipeDetail.recipeType.toLowerCase()=="savetocollection"){a.update=d.addRecipeToCollectionList({recipeId:a.recipeDetail.recipeId,recipeType:a.recipeDetail.recipeType,collectionList:h,savedItemId:a.recipeDetail.recipeboxItemId});
a.update.$promise.then(function(){if(h.length>0){a.$emit("notify","Added to ",5000,"success",null,null,null,h[0].name,h[0].folderID,h.length-1)
}else{a.$emit("notify","Removed from all collections",5000,"success",null,null,null,null)}f.close();b.pubsub.broadcast("Recipe.SaveToCollection.OnComplete",[{recipeId:a.recipeDetail.recipeId}])
},function(i){if(i.status!==401){a.errorMessage=i.data.message}})}else{if(h.length>0){a.update=d.addRecipeToCollectionList({recipeId:a.recipeDetail.recipeId,recipeType:a.recipeDetail.recipeType,collectionList:h,savedItemId:a.recipeDetail.recipeboxItemId});
a.update.$promise.then(function(){a.$emit("notify","Added to ",5000,"success",null,null,null,h[0].name,h[0].folderID,h.length-1);
f.close()},function(i){if(i.status!==401){a.errorMessage=i.data.message}})}else{a.$emit("notify","Recipe saved to your ",5000,"success",null,null,null,"favorites",null,null);
f.close()}}};a.submitEditCollection=function(h,i,j){if(j){a.update=d.saveCollection({collectionId:h.collectionId,name:h.collectionName,description:h.collectionDescription});
a.update.$promise.then(function(){if(!h.breadcrumbName){h.breadcrumbName=""}i.breadcrumbName=h.collectionName;i.collectionDescription=h.collectionDescription;
f.close()},function(k){if(k.status!==401){a.errorMessage=k.data.message}})}}}]);
//
// source/angular/controllers/collectionDetailsCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_collection_details_controller",["$scope","$window","$timeout","ar_services_collections","ar_services_recipebox","ar_current_user_state_service","ngDialog","ar_services_shopping_list","datalayerEvent","ads","arLogin","ar_services_environment","ar_meta_tag_service",function(a,c,b,j,k,h,m,g,l,d,i,f,e){a.user={};
a.isCollectionOwner=false;a.hasLoaded=false;a.hasBandLoaded=false;a.imageUrl=null;a.showMore=false;a.totalItemsInCollection=0;
a.adCount=0;a.itemList=[];a.sortType="dateAdded";a.bandItemList=[];a.allIdsInCollection=[];a.collectionOwner=null;a.currentPage=1;
a.currentBandPage=1;a.pageNumber=1;a.pageSize=20;a.collection={collectionName:null,collectionDescription:null,collectionId:0};
a.editFormCollection={collectionName:null,collectionDescription:null,collectionId:0};a.init=function(n){h.currentUserChangedHandler.Add(function(o){a.user=o
});a.user=h.getCurrentUser();a.collection.collectionId=n;a.getAllDetails(n);a.isUserSignedIn=i.isLoggedIn();if(a.isUserSignedIn){a.getRecipesForUser(a.user.Id,a.currentBandPage)
}};a.handleScroll=function(n){if(n.target.id==="recipe-scroll-band"&&n.target.scrollLeft===(n.target.scrollWidth-n.target.offsetWidth)){a.getNextBandPage()
}};a.handleRemoveItem=function(o){var n=a.allIdsInCollection.indexOf(parseInt(o,10));if(n>=0){a.allIdsInCollection.splice(n,1)
}a.enableBandItem(o);a.removeItemFromCollection(o,a.collection.collectionId)};a.getNextPage=function(){a.adCount=c.$(".gridad").length;
a.getCollectionRecipes(a.collection.collectionId)};a.getNextBandPage=function(){a.getRecipesForUser(a.user.Id,a.currentBandPage+1)
};a.addToCollection=function(n,p,o){a.allIdsInCollection.push(n);a.disableBandItem(n);a.addRecipeToCollection(p,n,a.collection.collectionId,o)
};a.updateBandRecipesIfInCollection=function(o,n){if(n===null||n===undefined||n.length===0||o===null||o===undefined||o.length===0){return
}angular.forEach(o,function(p){p.isInCollection=n.indexOf(p.savedItemId)!==-1})};a.disableBandItem=function(o){var n=0;for(;n<a.bandItemList.length;
n+=1){if(a.bandItemList[n].savedItemId===parseInt(o)){a.bandItemList[n].isInCollection=true}}};a.enableBandItem=function(o){var n=0;
for(;n<a.bandItemList.length;n+=1){if(a.bandItemList[n].savedItemId===parseInt(o)){a.bandItemList[n].isInCollection=false}}};
a.openShareCollectionModal=function(o){a.socialSharingData=o;var n={template:f.scriptServerUrl+"assets/source/angular/templates/SocialShareModal.html",className:"ngdialog-theme-default ngdialog-theme-share",scope:a,controller:"ar_controllers_share_item"};
m.openConfirm(n)};a.openEditCollectionModal=function(){a.collectionsTools="collapsed";var n={template:f.scriptServerUrl+"assets/source/angular/templates/CollectionEditModal.html",className:"ngdialog-theme-default ngdialog-theme-collection",scope:a};
m.openConfirm(n)};a.openDeleteModal=function(){var n={template:f.scriptServerUrl+"assets/source/angular/templates/CollectionDeleteModal.html",className:"ngdialog-theme-default ngdialog-theme-collection-delete",scope:a};
m.openConfirm(n);return n};a.handleNewBandRecipes=function(p){var o=p.recipes.map(function(q){q.recipeSummary.savedItemId=q.savedItemId;
return q.recipeSummary});var n=a.bandItemList.concat(o);a.bandItemList=n;a.currentBandPage=p.metaData.page;a.updateBandRecipesIfInCollection(a.bandItemList,a.allIdsInCollection);
a.hasBandLoaded=true};a.handleNewDetails=function(o){a.editFormCollection.collectionId=o.id;a.editFormCollection.collectionName=o.name;
a.editFormCollection.collectionDescription=o.description;a.editFormCollection.breadcrumbName=o.breadcrumbName;var n="";if(o.breadcrumbName){n=o.breadcrumbName
}a.collection.collectionId=o.id;a.collection.collectionName=o.name;a.collection.collectionDescription=o.description;a.collection.breadcrumbName=o.breadcrumbName;
a.collectionOwner=o.owner;a.isCollectionOwner=a.checkCollectionOwner();a.allIdsInCollection=o.allIds;a.handleNewRecipes(o.recipes);
a.imageUrl=o.owner.photo.urls[0].url;a.updateBandRecipesIfInCollection(a.bandItemList,a.allIdsInCollection);a.hasLoaded=true;
e.setMetaTitle(a.collection.collectionName+" - Recipes from "+a.collectionOwner.name);e.setMetaDescription(a.collection.collectionDescription?a.collection.collectionDescription:a.collection.collectionName+" - Recipes from "+a.collectionOwner.name)
};a.handleRecipeAdded=function(p,o){l.push("add recipe to collection",a.collection.collectionId,"Action Complete","add recipe to collection from collection page");
var n=0;for(;n<a.bandItemList.length;n+=1){if(a.bandItemList[n].savedItemId===parseInt(o)){a.bandItemList[n].subType="remove";
a.itemList.unshift(a.bandItemList[n]);break}}a.totalItemsInCollection+=1;b(function(){a.$emit("ReloadMasonry")},250).then(function(){window.scroll(0,1);
window.scroll(0,0)})};a.handleRecipeAddFailed=function(p,o){a.enableBandItem(o);var n=a.allIdsInCollection.indexOf(parseInt(o,10));
if(n>=0){a.allIdsInCollection.splice(n,1)}};a.handleRecipeRemoved=function(o){l.push("remove recipe from collection",a.collection.collectionId,"Action Complete","remove recipe from collection");
var n=0;for(;n<a.itemList.length;n+=1){if(a.itemList[n].savedItemId===parseInt(o)){break}}if(n<a.itemList.length){a.itemList.splice(n,1)
}a.totalItemsInCollection-=1};a.handleRecipeRemoveFailed=function(n){a.disableBandItem(n);a.allIdsInCollection.push(n)};a.handleNewRecipes=function(o){a.currentPage=o.metaData.page;
a.pageNumber=o.metaData.page+1;var n=o.recipes.map(function(p){p.recipeSummary.subType=a.isCollectionOwner===true?"remove":"share";
p.recipeSummary.savedItemId=p.savedItemId;return p.recipeSummary});n=(a.isCollectionOwner)?n:d.arrayWithAdsInserted(n);Array.prototype.push.apply(a.itemList,n);
angular.forEach(a.itemList,function(p){if(p.itemType!=="ad"){(p.submitter.userID==i.userId)?angular.extend(p,{profileLink:"/cook/my/"}):angular.extend(p,{profileLink:"/cook/"+p.submitter.userID+"/"})
}});a.showMore=o.metaData.totalCount>(o.metaData.page*o.metaData.pagesize);a.totalItemsInCollection=o.metaData.totalCount};a.handleCollectionDeleted=function(){l.push("delete collection",a.collection.collectionId,"Action Complete","delete collection");
c.location.href="/cook/my"};a.del=function(){a.deleteCollection(a.collection.collectionId)};a.checkCollectionOwner=function(){if(a.user!==null&&a.collectionOwner!==null&&a.user.Id===a.collectionOwner.userID){return true
}return false};a.getCollectionRecipes=function(n){j.getCollectionDetails({collectionId:n,page:a.pageNumber,start:a.itemList.length+1-a.adCount,pagesize:a.pageSize}).$promise.then(function(o){a.handleNewRecipes(o.recipes)
})["finally"](function(){})};a.getAllDetails=function(n){j.getCollectionDetails({collectionId:n,page:a.pageNumber,start:a.itemList.length+1,pagesize:a.pageSize}).$promise.then(function(o){a.handleNewDetails(o)
})["finally"](function(){})};a.deleteCollection=function(n){j.deleteCollection({collectionId:n}).$promise.then(function(o){a.handleCollectionDeleted(o)
})["finally"](function(){})};a.getRecipesForUser=function(o,n){k.getRecipeBoxRecipes({page:n,userId:o,sort:a.sortType}).$promise.then(function(p){a.handleNewBandRecipes(p)
})["finally"](function(){})};a.addRecipeToCollection=function(q,p,n,r){var o=[];o.push({folderID:n,name:""});a.added=j.addRecipeToCollectionList({collectionList:o,recipeId:q,recipeType:r});
a.added.$promise.then(function(){a.handleRecipeAdded(q,p)},function(){a.handleRecipeAddFailed(q,p)})};a.removeItemFromCollection=function(o,n){a.removed=j.removeRecipeFromCollection({collectionId:n,recipeId:o});
a.removed.$promise.then(function(){a.handleRecipeRemoved(o)},function(){a.handleRecipeRemoveFailed(o)})};a.addRecipesToShoppingList=function(){pubsub.broadcast("ShoppingListSave");
a.result=g.saveCollection({collectionId:a.collection.collectionId});a.result.$promise.then(function(){a.$emit("notify","Added!",null,"success")
},function(){a.$emit("notify","Sorry, that didn’t work. Please try again.",null,"failure")})}}]);
//
// source/angular/controllers/daughterHubsCtrl.js
//
angular.module("allrecipes").controller("ar_controller_daughter_hubs",["$scope","$window","$timeout","carousel_scroller_manager_service","hubCategories",function(a,c,b,d,e){a.allCategories=[];
a.selectedCategoryId=0;a.seoComplete=false;a.init=function(){var g=JSON.parse(e);for(var f=0;f<g.length;f++){var h=(g[f].BreadcrumbName===null||g[f].BreadcrumbName==="")?g[f].Title:g[f].BreadcrumbName;
a.allCategories.push(ar.models.navBarPost(g[f].Id,h,f))}a.seoComplete=true;angular.element($("#hubDaughtersDiv")).removeClass("hidden");
c.pubsub.listen("NavBar.ClickEvent","DaughterHubs.Controller",a.selectCategory);b(function(){d.triggerScrollToStart("hubs")})
};a.selectCategory=function(f){a.selectedCategoryId=f.selectedCategoryId;b(function(){d.triggerScrollToStart("hubs")})}}]);
//
// source/angular/directives/collectionDetails.js
//
"use strict";angular.module("allrecipes").directive("collectionDetails",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/CollectionDetails.html"}
}]);
//
// source/angular/directives/carouselScroller.js
//
angular.module("allrecipes").directive("carouselScrollLeft",["carousel_scroller_manager_service",function(a){return{restrict:"A",link:function(e,d,b){if(!d.context.id){d.context.id=UID.New()
}var c=b.carouselScrollLeft;d.bind("click",function(){a.triggerScrollLeft(c)})}}}]).directive("carouselScrollRight",["carousel_scroller_manager_service",function(a){return{restrict:"A",link:function(e,d,b){if(!d.context.id){d.context.id=UID.New()
}var c=b.carouselScrollRight;d.bind("click",function(){a.triggerScrollRight(c)})}}}]).directive("carouselScrollTarget",["$window","carousel_scroller_manager_service",function(a,b){return{restrict:"A",link:function(i,f,c){if(!f.context.id){f.context.id=UID.New()
}var h=f.context.id;var d=c.carouselScrollTarget;b.addScrollTarget(d,h);var e=f[0];var g=function(){var k=e.offsetWidth;var j=e.scrollWidth;
var l=e.scrollLeft;i[d+"_atLeftBound"]=l-k<=0;i[d+"_atRightBound"]=j===k||(l+k)>=e.scrollWidth-1;i.$evalAsync()};b.evaluateBoundsRequested.Add(function(j){if(j===d){g()
}});b.scrollToStartClicked.Add(function(m){if(m===d){var j=e.scrollWidth;var k=e.offsetWidth;var l=0;i[d+"_atLeftBound"]=true;
i[d+"_atRightBound"]=j===k||(l+k)>=e.scrollWidth-1;i.$evalAsync();$(e).animate({scrollLeft:0},0)}});b.scrollLeftClicked.Add(function(m){if(m===d){var j=e.scrollWidth;
var k=e.offsetWidth;var l=e.scrollLeft;i[d+"_atLeftBound"]=j===k||l-k<=0;i[d+"_atRightBound"]=j===k||(l)>=e.scrollWidth-1;i.$evalAsync();
$(e).animate({scrollLeft:l-(k)},800)}});b.scrollRightClicked.Add(function(m){if(m===d){var j=e.scrollWidth;var k=e.offsetWidth;
var l=e.scrollLeft;i[d+"_atLeftBound"]=j===k||l+(k)<=0;i[d+"_atRightBound"]=j===k||(l+k+k)>=e.scrollWidth-1;i.$evalAsync();$(e).animate({scrollLeft:l+(k)},800)
}});b.evaluateEndOfList.Add(function(m){var j=e.scrollWidth;var k=e.offsetWidth;var l=e.scrollLeft;i[d+"_atRightBound"]=j===k||(l+k)>=e.scrollWidth-1;
i.$evalAsync()});angular.element(a).bind("resize",function(){g()})}}}]);
//
// source/angular/directives/carouselLink.js
//
"use strict";angular.module("allrecipes").directive("carouselLink",["internalReferrerLinker",function(a){return{restrict:"A",link:function(d,c,b){if(b.internalReferrer){b.internalReferrerLink=b.internalReferrer;
var e=a(d,c,b);b.$set("href",e)}}}}]);
//
// source/angular/directives/recipeBand.js
//
"use strict";angular.module("allrecipes").directive("recipeBand",["ar_services_environment",function(a){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/RecipeBand.html"}
}]);
//
// source/angular/directives/salvattoreGrid.js
//
angular.module("allrecipes").directive("salvattoreGrid",["salvattore","cardTemplateCompiler","ar_services_url","lowercaseNoSpacesFilter","$window",function(f,c,h,e,a){var g=c;
var d=function(l,k){var i=l.$new(true);i.item={};for(var j in k){i.item[j]=k[j]}return i};var b=function(){var i=f.getAdsToRefresh();
var j=[];angular.forEach(i,function(k){if(f.isElementInViewport(k)){this.push(k)}},j);if(j.length>0){if(a.adService.renderAds){a.adService.renderAds.purgeRefreshSlots()
}angular.forEach(j,function(k){a.adService.renderAds.addToRefreshSlots(k.id);f.removeAdToRefresh(k)});a.refreshAdFrame()}};return{restrict:"C",link:function(j,i){a.addEventListener("scroll",a._.throttle(b,100));
j.$watch("itemList",function(k,l){if(!k){return}g.then(function(q){var m=q[0];var p=[];for(var o=l.length;o<k.length;o++){var n=d(j,k[o]);
n.item.slug=e(n.item.title);n.recipeDetailUrl=h.getRecipeUrl(n.item);m[n.item.itemType](n,function(r){p.push(r[0])})}f.appendElements(i[0],p)
})})}}}]);
//
// source/angular/directives/removeItem.js
//
"use strict";angular.module("allrecipes").directive("arRemoveItem",[function(){return{restrict:"E",template:'<a class="icon icon--clear" ng-click="clicked()"></a>',replace:true,controller:["$scope","$element",function(b,a){b.init=function(){};
b.clicked=function(){if(typeof b.handleRemoveItem==="function"){b.handleRemoveItem(b.id)}}}],link:function(c,b,a){c.id=a.id}}
}]);
//
// source/angular/directives/saveitem.js
//
"use strict";angular.module("allrecipes").directive("arSaveItem",["arSaveItemLink",function(a){return{restrict:"E",template:"<a ng-class='{ highlighted : saved }' title='{{ hoverText }}' data-ng-show='showHeart'><span>{{text}}</span></a>",scope:{id:"=?",type:"=?",recipeboxitemid:"=?",clickid:"=?",name:"=?",imageurl:"=?",collectioncreatorid:"=?",collectiontitle:"=?",page:"=?",brandid:"=?",text:"=?",redirect:"=?",anonymous:"=?",clicksource:"=?",folderids:"=?"},controller:["$scope","$element","$window",function(c,b,d){c.$on("cookChange",function(f,e){console.log(f);
console.log(e);c.id=e;c.type="cook";c.clickid="cook card";c.recipeboxitemid="";c.name="";c.imageurl="";a(c,b)});d.pubsub.listen("Recipe.Heart.ClickEvent","SaveItem.directive",function(e){if(c.id==e.recipeId){c.updateHeart=true;
c.hoverText="Remove this recipe from your favorites";c.saved=true;a(c,b)}});d.pubsub.listen("A.Cook.Save.ClickEvent","SaveItem.directive",function(e){if(c.id==e.userID){c.hoverText="Stop following this cook";
c.saved=true;a(c,b)}});d.pubsub.listen("Collection.Heart.ClickEvent","SaveItem.directive",function(e){if(c.id==e.collectionId){c.updateHeart=true;
c.hoverText="Remove this collection from my favorites";c.saved=true;a(c,b)}});d.pubsub.listen("Brand.Follow.ClickEvent","SaveItem.directive",function(e){if(c.id==e.brandId&&c.type=="brand"){c.text=c.hoverText="Learn more."
}});d.pubsub.listen("Brand.Unfollow.ClickEvent","SaveItem.directive",function(e){if(c.id==e.brandId&&c.type=="brand"){c.text=c.hoverText="Follow and learn more."
}})}],replace:true,link:a}}]);
//
// source/angular/directives/saveToCollection.js
//
"use strict";angular.module("allrecipes").directive("arSaveToCollection",["ar_services_environment","arSaveItemLink",function(a,b){return{restrict:"E",replace:true,templateUrl:a.scriptServerUrl+"assets/source/angular/templates/SaveToCollection.html",link:b,scope:{id:"=?",type:"=?",recipeboxitemid:"=?",clickid:"=?",name:"=?",imageurl:"=?",collectioncreatorid:"=?",collectiontitle:"=?",page:"=?",brandid:"=?",text:"=?",redirect:"=?",anonymous:"=?",clicksource:"=?",folderids:"=?"}}
}]);
//
// source/angular/directives/socialNotification.js
//
"use strict";angular.module("allrecipes").directive("socialNotification",["ar_services_environment","arLogin",function(a,b){return{restrict:"E",transclude:true,templateUrl:function(){if(b.isLoggedIn()){return a.scriptServerUrl+"assets/source/angular/templates/SocialNotification.html"
}return a.scriptServerUrl+"assets/source/angular/templates/SocialNotificationAnonymous.html"}}}]);
//
// source/angular/directives/infiniteScroll.js
//
"use strict";angular.module("allrecipes").factory("arInfiniteScrollPagination",["$window","$location","datalayerEvent","$rootScope",function(c,a,e,b){var d=parseInt(a.search().page)||1;
var f=[];var g=function(j){var i=null;if(parseInt(j)>d){i="infinite scroll down"}else{if(parseInt(j)<d){i="infinite scroll up"
}}d=j;b.$apply(function(){if(d==="1"){a.search("page",null).replace()}else{a.search("page",d).replace()}});if(i){e.push(i,null,"Action Complete")
}};var h=function(){for(var j=f.length-1;j>=0;j--){if(c.pageYOffset>=f[j].top()){var k=f[j].page;if(d!==k){g(k)}return}}if(f[0]&&d!==f[0].page){g(f[0].page)
}};angular.element(c).on("scroll",h);return{registerPageAnchor:function(i){f.push(i);f.sort(function(j,k){return j.page-k.page
})}}}]);angular.module("allrecipes").directive("a",function(){return{restrict:"E",link:function(c,b,a){if((a.href||a.ngHref)&&!a.target&&!b.data("spa")){b[0].target="_self"
}}}});angular.module("allrecipes").directive("arInfiniteScrollPage",["$window","arInfiniteScrollPagination","$timeout",function(b,c,a){var d=function(e){return function(){return e[0].getBoundingClientRect().top+window.pageYOffset-document.documentElement.clientTop
}};return{restrict:"A",priority:1,link:function(g,f,e){if(e.arInfiniteScrollPage){a(function(){var h=e.arInfiniteScrollPage;c.registerPageAnchor({top:d(f),page:h})
},100)}}}}]);angular.module("allrecipes").directive("arInfiniteScroll",["$window","$location",function(b,a){return{restrict:"A",link:function(f,e){var d=1600;
if(!f.viewportOffset){f.viewportOffset=d}var c=function(){var g=b.innerHeight||b.document.documentElement.clientHeight;if(f.infiniteCounter<f.infiniteScrollLimit&&f.hasMoreRecipes&&e[0].getBoundingClientRect().top<=g+f.viewportOffset){f.getMoreResults(false)
}};angular.element(b).on("scroll",_.debounce(c,300));angular.element(b.document).on("ready",function(){a.hash(a.search().page)
})}}}]);angular.module("allrecipes").directive("containerInfiniteScroll",function(){return function(d,b,a){var c=b[0];b.on("scroll",_.debounce(function(){if(c.scrollTop+c.offsetHeight>=c.scrollHeight-300){d.$apply(a.containerInfiniteScroll)
}},300))}});
//
// source/angular/directives/formatLargeNumber.js
//
"use strict";angular.module("allrecipes").directive("formatLargeNumber",["largeNumberDisplayFilter",function(b){var a=function(d){for(var c=d.length-3;
c>0;c-=3){d=d.slice(0,c)+","+d.slice(c,d.length)}return d};return{restrict:"E",link:function(e,d,c){switch(c.type){case"commas":d.replaceWith(a(d.text()));
break;default:d.replaceWith(b(c.number));break}return}}}]);
//
// source/angular/directives/recipeLink.js
//
"use strict";angular.module("allrecipes").directive("recipeLink",["ar_services_url","internalReferrerLinker",function(b,a){return{restrict:"A",scope:true,link:function(f,d,c){if(c&&c.subtype&&c.subtype==="video"){f.item.itemType="video";
if(!f.recipeVideoUrl){f.recipeVideoUrl=b.getRecipeUrl(f.item)}if(c.internalReferrer){c.href=f.recipeVideoUrl;c.internalReferrerLink=c.internalReferrer;
f.recipeVideoUrl=a(f,d,c)}}else{if(f.item&&f.item.itemType){var e=f.item.itemType.toLowerCase();if(!f.recipeDetailUrl){f.recipeDetailUrl=b.getRecipeUrl(f.item)
}if(e=="review"){f.recipeDetailEditReviewUrl=f.recipeDetailUrl+"?editReview=1"}if(c.internalReferrer){c.href=f.recipeDetailUrl;
c.internalReferrerLink=c.internalReferrer;f.recipeDetailUrl=a(f,d,c)}}}}}}]);
//
// source/angular/directives/scrollEvent.js
//
angular.module("allrecipes").directive("scrollEvent",function(){return function(c,b,a){b.on("scroll",_.debounce(function(d){if(typeof c.handleScroll==="function"){c.handleScroll(d)
}},300))}});
//
// source/angular/directives/nutritionLine.js
//
angular.module("allrecipes").directive("nutritionLine",["$document","ar_services_environment",function(a,b){return{restrict:"E",replace:true,scope:{nutrient:"=",plainname:"&",hideunits:"&",hidepercent:"&",boldvalue:"&"},templateUrl:function(){return b.scriptServerUrl+"assets/source/angular/templates/NutritionLine.html"
},}}]);
//
// source/angular/directives/globalUIEvents.js
//
angular.module("allrecipes").directive("globalUiEvents",["$document","global_ui_events_service",function(a,b){return{restrict:"A",link:function(f,e,c,d){a.bind("click",function(h){var g=h.target;
while(g){if(g.hasAttribute("unsubscribe-global-click-handler")){return}if(g.hasAttribute("do-not-fire-click-event")){h.stopPropagation();
return}g=g.parentElement}b.globalClickEventHandler.Handle(h.target)})}}}]);
//
// source/angular/directives/popupTrigger.js
//
angular.module("allrecipes").directive("popupTrigger",["$document","popup_manager_service",function(a,b){return{restrict:"A",link:function(g,d,c){if(!d.context.id){d.context.id=UID.New()
}var e=d.context.id;var f=c.popupTrigger;b.addTrigger(f,e);d.bind("click",function(){b.triggerClicked.Fire(f)})}}}]);
//
// source/angular/directives/popupPanel.js
//
angular.module("allrecipes").directive("popupPanel",["$document","$window","popup_manager_service","global_ui_events_service","$rootScope",function(a,c,e,d,b){return{restrict:"A",link:function(j,g,f){if(!g.context.id){g.context.id=UID.New()
}var h=g.context.id;var i=f.popupPanel;j[i+"_showing"]=false;e.addPanel(i,h);if(g.context.attributes.hideOnResize){angular.element(c).bind("resize",function(){g.context.classList.add("ng-hide")
})}e.triggerClicked.Add(function(k){if(k==i){if(j[i+"_showing"]===true){j.$apply(function(){j[i+"_showing"]=false;g.context.classList.add("ng-hide")
})}else{j.$apply(function(){j[i+"_showing"]=true;g.context.classList.remove("ng-hide")});b.$broadcast("Container-Opened",i)}}});
d.globalClickEventHandler.Add(function(l){if(f.ignoreGlobal!==true&&f.ignoreGlobal!=="true"){if(j[i+"_showing"]===true){var m=false;
var k=l;var n=e.GetPopups();while(k){if(k.attributes.hideWhenClicked!==null&&k.attributes.hideWhenClicked!==undefined){m=false;
break}if(k.id===h||(n[i]&&(n[i].trigger.indexOf(k.id)!==-1))){m=true;break}k=k.parentElement}if(m!==true){j.$apply(function(){j[i+"_showing"]=false;
g.context.classList.add("ng-hide")})}}}})}}}]);
//
// source/angular/filters/largeNumberDisplay-filter.js
//
"use strict";angular.module("allrecipes").filter("largeNumberDisplay",["$window",function(a){return function(c){if(!c){return 0
}var b=Math.abs(c);if(b>=Math.pow(10,12)){c=(c/Math.pow(10,12)).toFixed()+"t"}else{if(b<Math.pow(10,12)&&b>=Math.pow(10,9)){c=(c/Math.pow(10,9)).toFixed()+"b"
}else{if(b<Math.pow(10,9)&&b>=Math.pow(10,6)){c=(c/Math.pow(10,6)).toFixed()+"m"}else{if(b<Math.pow(10,6)&&b>=Math.pow(10,3)){c=(c/Math.pow(10,3)).toFixed()+"K"
}}}}return c}}]);
//
// source/angular/filters/lowercaseNoSpaces-filter.js
//
"use strict";angular.module("allrecipes").filter("lowercaseNoSpaces",function(){return function(g){if(!g){return""}var f;var a=[{base:"A",letters:"\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",letters:"\uA732"},{base:"AE",letters:"\u00C6\u01FC\u01E2"},{base:"AO",letters:"\uA734"},{base:"AU",letters:"\uA736"},{base:"AV",letters:"\uA738\uA73A"},{base:"AY",letters:"\uA73C"},{base:"B",letters:"\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"},{base:"C",letters:"\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E"},{base:"D",letters:"\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"},{base:"DZ",letters:"\u01F1\u01C4"},{base:"Dz",letters:"\u01F2\u01C5"},{base:"E",letters:"\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"},{base:"F",letters:"\u0046\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",letters:"\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"},{base:"H",letters:"\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",letters:"\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",letters:"\u004A\u24BF\uFF2A\u0134\u0248"},{base:"K",letters:"\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",letters:"\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",letters:"\u01C7"},{base:"Lj",letters:"\u01C8"},{base:"M",letters:"\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"},{base:"N",letters:"\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"},{base:"NJ",letters:"\u01CA"},{base:"Nj",letters:"\u01CB"},{base:"O",letters:"\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OI",letters:"\u01A2"},{base:"OO",letters:"\uA74E"},{base:"OU",letters:"\u0222"},{base:"OE",letters:"\u008C\u0152"},{base:"oe",letters:"\u009C\u0153"},{base:"P",letters:"\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",letters:"\u0051\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",letters:"\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",letters:"\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",letters:"\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"TZ",letters:"\uA728"},{base:"U",letters:"\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",letters:"\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",letters:"\uA760"},{base:"W",letters:"\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",letters:"\u0058\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",letters:"\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",letters:"\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",letters:"\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"},{base:"aa",letters:"\uA733"},{base:"ae",letters:"\u00E6\u01FD\u01E3"},{base:"ao",letters:"\uA735"},{base:"au",letters:"\uA737"},{base:"av",letters:"\uA739\uA73B"},{base:"ay",letters:"\uA73D"},{base:"b",letters:"\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"},{base:"c",letters:"\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",letters:"\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"},{base:"dz",letters:"\u01F3\u01C6"},{base:"e",letters:"\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"},{base:"f",letters:"\u0066\u24D5\uFF46\u1E1F\u0192\uA77C"},{base:"g",letters:"\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"},{base:"h",letters:"\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",letters:"\u006A\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",letters:"\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",letters:"\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"},{base:"lj",letters:"\u01C9"},{base:"m",letters:"\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",letters:"\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"},{base:"nj",letters:"\u01CC"},{base:"o",letters:"\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275"},{base:"oi",letters:"\u01A3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\uA74F"},{base:"p",letters:"\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"},{base:"q",letters:"\u0071\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",letters:"\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",letters:"\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"},{base:"t",letters:"\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"tz",letters:"\uA729"},{base:"u",letters:"\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",letters:"\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",letters:"\uA761"},{base:"w",letters:"\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",letters:"\u0078\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",letters:"\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",letters:"\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}];
var b={};for(var c=0;c<a.length;c++){var e=a[c].letters.split("");for(var d=0;d<e.length;d++){b[e[d]]=a[c].base}}f=g.replace(/[^\u0000-\u007E]/g,function(h){return b[h]||h
});f=f.replace(/[^a-z0-9\s-]/gi,"").toLowerCase();f=f.replace(/\s/gi,"-");return f}});
//
// source/angular/filters/entityHtml-filter.js
//
"use strict";angular.module("allrecipes").filter("entityHtml",["$sce",function(a){return a.trustAsHtml}]);
//
// source/angular/filters/stateAbbreviations-filter.js
//
"use strict";angular.module("allrecipes").filter("stateAbbreviations",function(){return function(a){if(!a){return""}switch(a){case"Alabama":return"AL";
case"Alaska":return"AK";case"Arizona":return"AZ";case"Arkansas":return"AR";case"California":return"CA";case"Colorado":return"CO";
case"Connecticut":return"CT";case"Delaware":return"DE";case"Florida":return"FL";case"Georgia":return"GA";case"Hawaii":return"HI";
case"Idaho":return"ID";case"Illinois":return"IL";case"Indiana":return"IN";case"Iowa":return"IA";case"Kansas":return"KS";case"Kentucky":return"KY";
case"Louisiana":return"LA";case"Maine":return"ME";case"Maryland":return"MD";case"Massachusetts":return"MA";case"Michigan":return"MI";
case"Minnesota":return"MN";case"Mississippi":return"MS";case"Missouri":return"MO";case"Montana":return"MT";case"Nebraska":return"NE";
case"Nevada":return"NV";case"New Hampshire":return"NH";case"New Jersey":return"NJ";case"New Mexico":return"NM";case"New York":return"NY";
case"North Carolina":return"NC";case"North Dakota":return"ND";case"Ohio":return"OH";case"Oklahoma":return"OK";case"Oregon":return"OR";
case"Pennsylvania":return"PA";case"Rhode Island":return"RI";case"South Carolina":return"SC";case"South Dakota":return"SD";case"Tennessee":return"TN";
case"Texas":return"TX";case"Utah":return"UT";case"Vermont":return"VT";case"Virginia":return"VA";case"Washington":return"WA";case"West Virginia":return"WV";
case"Wisconsin":return"WI";case"Wyoming":return"WY";default:return a}}});
//
// source/angular/controllers/topNavCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_top_nav",["$scope","$window","ar_cookie_service","datalayerEvent","popup_manager_service",function(a,b,c,e,f){var d=function(){c.setCookie("globalNavClick",null,-1)
};a.setAnalyticsData=function(g){d();b.pubsub.broadcast("globalNavClick",[{value:g}])};a.isActive=false;a.browseNav=function(){a.isActive=!a.isActive
};f.triggerClicked.Add(function(g){if(g!=="browseRecipePanel"){a.isActive=false}});a.setAnalyticsCookie=function(g,h){d();g=(g||"").toString().toLowerCase();
var i=h==="menu";if(i){if(g.indexOf("profile|")==0){e.pushRegistrationSourceClick("hm_navlinks")}}else{switch(g){case"create profile|sign up":e.pushRegistrationSourceClick("hm_createprofile");
break;case"profile|sign in ":case"profile|profile":e.pushRegistrationSourceClick("hm_profileicon");break;case"favorites":e.pushRegistrationSourceClick("hm_saver");
break}}c.setCookie("globalNavClick","global nav|"+g,1)};a.init=function(){d()}}]);
//
// vendor/angularjs/1.3.11/angular-route.min.js
//
/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

//
// source/angular/services/following-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_following",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var e=b.url+"v1/users/me/following";
var d=function(h){var f=JSON.parse(h);for(var g=0;g<f.users.length;g++){var j=f.users[g];f.users[g].itemType="HalfCook";f.users[g].imageUrl=(j.photo.urls[3]?j.photo.urls[3].url:j.photo.urls[0].url);
f.users[g].adClass="cook-tile";f.users[g].id=j.userID}return f};return a(e,{id:"@id"},{save:{url:e,method:"POST",isArray:false,headers:{Authorization:c.token}},remove:{url:e+"/:id",method:"DELETE",isArray:false,headers:{Authorization:c.token}},getAllFollowing:{url:e,method:"GET",isArray:false,headers:{Authorization:c.token},transformResponse:d},getPublicFollowing:{url:b.url+"v1/users/:id/following",method:"GET",isArray:false,headers:{Authorization:c.token},transformResponse:d},getAllFollowingIds:{url:e+"/userids",method:"GET",isArray:true,headers:{Authorization:c.token}}})
}]);
//
// source/angular/services/saveitemService-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_saveitem_service_provider",["arRecipeSave","arRecipeBoxStorage","arFollowingSave","arFollowingStorage","arCollectionSave","arCollectionStorage","$window",function(g,f,d,e,b,c,a){return{hasItem:function(h,j){var i={};
switch(j.toLowerCase()){case"cook":case"brand-cook":return e.hasCookId(h).then(function(k){angular.extend(i,{saved:k,hoverText:k?"Stop following this cook":"Follow this cook"});
return i});case"brand":return e.hasCookId(h).then(function(k){angular.extend(i,{saved:k,hoverText:k?"Learn more":"Follow and learn more"});
return i});case"collectionfeed":case"collection":return c.hasCollectionId(h).then(function(k){angular.extend(i,{saved:k,hoverText:k?"Remove this collection from my favorites":"Save a copy of this collection"});
return i});case"recipe":case"recipes":case"personalrecipe":case"personal-recipes":case"personal":case"custom":default:return f.hasRecipeId(h,j).then(function(k){angular.extend(i,{saved:k,hoverText:k?"Remove this recipe from your favorites":"Save this recipe",buttonText:k?"Remove from Favorites":"Save to Favorites"});
return i})}},removeItem:function(i,k,j,h){switch(k.toLowerCase()){case"cook":case"brand":case"brand-cook":d.remove(i,{success:h.success,failure:h.failure});
break;case"collectionfeed":case"collection":b.remove(i,{success:h.success,failure:h.failure});break;case"personalrecipe":case"personal-recipes":case"personal":return h.failure;
case"recipe":case"recipes":case"custom":default:if(j>0){g.removeFavorite(i,j,k,{success:h.success,failure:h.failure})}else{g.remove(i,k,{success:h.success,failure:h.failure})
}}},saveItem:function(i,k,j,h){switch(k.toLowerCase()){case"cook":case"brand":case"brand-cook":d.save(i,k,j,{success:h.success,failure:h.failure});
break;case"collectionfeed":case"collection":b.save(i,j,{success:h.success,failure:h.failure});break;case"personalrecipe":case"personal-recipes":case"personal":case"recipe":case"recipes":case"custom":default:g.save(i,k,null,null,"recipe button",{success:h.success,failure:h.failure})
}},broadcastDefferedActionEvent:function(j,n,l,k,i,m,h){switch(n.toLowerCase()){case"cook":case"brand-cook":case"brand":a.pubsub.broadcast("A.Cook.Save.ClickEvent",[{userID:j,type:n,redirect:m}]);
break;case"collectionfeed":case"collection":a.pubsub.broadcast("A.Collection.Save.ClickEvent",[{collectionId:j,name:i}]);break;
case"personalrecipe":case"personal-recipes":case"personal":case"recipe":case"recipes":case"custom":default:a.pubsub.broadcast("A.Recipe.Save.ClickEvent",[{recipeID:j,type:n,title:l,imageUrl:k,source:"recipe button",clicksource:h}]);
break}}}}]);
//
// source/angular/services/saveitemCallback-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_saveitem_callback_provider",["$window","$location","$rootScope","datalayerEvent","ar_services_url",function(c,a,b,g,d){var f={success:function(){},failure:function(){}};
function e(n,i){var h=n.clickid||"cook card";var k=i;var j="Action Complete";var l=n.brandid>0?{prop20:{createIfUndefined:true,value:n.brandid},prop24:{createIfUndefined:true,value:"promoted brand"}}:{prop20:{},prop24:{}};
if(n.page){var m=a.path();if(n.page==="photos"){if(m.indexOf("cook")>-1){n.page="cook photos"}else{n.page="recipe photos"}}else{if(n.page==="recommendation"){if(m.indexOf("my")>-1){n.page="private profile"
}else{if(m.length===0){n.page="home page"}else{n.page="public profile"}}}}angular.extend(l,{eVar7:{createIfUndefined:true,value:n.page}})
}g.push(k,n.id,j,h,null,null,null,null,l);n.hoverText=k=="follow cook"?"Stop following this cook":"Follow this cook"}return{getRemoveItemCallbacks:function(h){switch(h.type.toLowerCase()){case ("cook"):case ("brand"):f.success=function(){return e(h,"unfollow cook")
};break;case ("brand-cook"):f.success=function(){e(h,"unfollow cook");c.pubsub.broadcast("Brand.Unfollow.ClickEvent",[{brandId:h.id}])
};break;case ("collection"):f.success=function(){h.$emit("notify",h.collectiontitle+" removed from favorites",null,"success")
};f.failure=function(){h.$emit("notify","Uh oh, something went wrong. Please try again in a moment.",null,"failure")};break;case ("collectionfeed"):f.success=function(){h.$emit("notify","Collection removed from your favorites",null,"success");
h.hoverText="Save this collection"};break;case"recipe":case"recipes":case"personalrecipe":case"personal-recipes":case"personal":case"custom":default:f.success=function(){h.$emit("notify","Recipe removed from your favorites",null,"success");
c.pubsub.broadcast("Recipe.Heart.ClickEvent",[{recipeId:h.id}]);h.hoverText="Save this recipe"}}return f},getSaveItemCallbacks:function(h){switch(h.type.toLowerCase()){case ("cook"):f.success=function(){return e(h,"follow cook")
};break;case ("brand"):f.success=function(){var i=d.removeAllrecipesDomain(h.redirect);c.location.href=i+"?brandFollowed="+h.name
};break;case ("brand-cook"):f.success=function(){e(h,"follow cook");c.pubsub.broadcast("Brand.Follow.ClickEvent",[{brandId:h.id}])
};break;case ("collection"):f.success=function(){h.$emit("notify","",5000,"success",null,null,null,h.collectiontitle,h.id,null," saved to favorites")
};f.failure=function(){h.$emit("notify","Uh oh, something went wrong. Please try again in a moment.",null,"failure")};break;case ("collectionfeed"):f.success=function(){h.$emit("notify","",5000,"success",null,null,null,"Collection",h.id,null," saved to favorites");
c.pubsub.broadcast("Collection.Heart.ClickEvent",[{collectionId:h.id}])};f.failure=function(){h.$emit("notify","Uh oh, something went wrong. Please try again in a moment.",null,"failure")
};break;case"recipe":case"recipes":case"personalrecipe":case"personal-recipes":case"personal":case"custom":default:f.success=function(){c.pubsub.broadcast("Recipe.AddToRecipeBox",[{recipeId:h.id}]);
c.pubsub.broadcast("Recipe.OpenCollectionModal",[{recipeId:h.id,recipeType:h.type,recipeTitle:h.name,recipeImageUrl:h.imageurl}]);
g.push("add to recipe box",h.id,"Action Complete","recipe button");c.pubsub.broadcast("Recipe.Heart.ClickEvent",[{recipeId:h.id}]);
h.hoverText="Remove this recipe from your favorites"}}return f}}}]);
//
// source/angular/services/saveitemLink.js
//
"use strict";angular.module("allrecipes").factory("arSaveItemLink",["$rootScope","arLogin","ar_saveitem_service_provider","ar_saveitem_callback_provider","$window","datalayerEvent","$route",function(a,f,e,d,c,g,b){return function(l,j,i){l.showHeart=(l.type.toLowerCase()!="collection"||(l.collectioncreatorid!=f.userId)||!f.isLoggedIn())&&!l.anonymous;
function k(){e.hasItem(l.id,l.type.toLowerCase()).then(function(m){l.saved=m.saved;l.hoverText=m.hoverText})}k();var h=function(){if(l.saved==null){k()
}var m;if(l.saved){m=d.getRemoveItemCallbacks(l);e.removeItem(l.id,l.type,l.recipeboxitemid,m)}else{m=d.getSaveItemCallbacks(l);
e.saveItem(l.id,l.type,l.collectiontitle,m);AR.FacebookPixel.addToCartTrack({id:l.id,type:l.type})}l.saved=!l.saved};j.off().on("click",function(){var m=l.clicksource?l.clicksource:"";
if(l.type){var u=l.type.toString().toLowerCase();switch(u){case"collection":g.pushRegistrationSourceClick("pp_collection");break;
case"recipe":var s=m.toString().toLocaleLowerCase()==="recipe hero photo"?"rd_saver":"rc_saver";g.pushRegistrationSourceClick(s);
break}}if(!f.isLoggedIn()){var o=l.id;var v=l.type;var q=l.name?l.name:"";var p=l.imageurl?l.imageurl:"";var n=l.collectiontitle?l.collectiontitle:"";
var r=l.redirect?l.redirect:"";e.broadcastDefferedActionEvent(o,v,q,p,n,r,m)}else{if(l.type=="brand"&&l.text=="Learn more."){c.location.href=l.redirect
}else{if(l.type.toString().toLowerCase()=="savetocollection"){c.pubsub.broadcast("Recipe.OpenCollectionModal",[{recipeId:l.id,recipeType:l.type,recipeTitle:l.name,recipeImageUrl:l.imageurl,recipeboxItemId:l.recipeboxitemid,folderIds:l.folderids}]);
c.pubsub.listen("Recipe.SaveToCollection.OnComplete","SaveItem.directive",function(t){if(l.id==t.recipeId){b.reload()}})}else{h()
}}}})}}]);
//
// source/angular/apps.js
//
angular.module("allrecipes").directive("dynamic",["$compile",function(a){return{restrict:"A",replace:true,link:function(d,c,b){d.$watch(b.dynamic,function(e){c.html(e);
a(c.contents())(d)})}}}]).run(["$rootScope",function(a){a.Toggles=window.Toggles}]);angular.bootstrap(document.getElementById("searchGlobalApp"),["allrecipes"]);
angular.bootstrap(document.getElementById("messageBanner"),["allrecipes"]);
//
// source/angular/constants/ads-constant.js
//
"use strict";angular.module("allrecipes").constant("adsConstants",{reviewModalTargeting:{targeting:{type:"reviews",contentType:"reviews"}},photoModalTargeting:{targeting:{type:"photos",contentType:"photos"}},adTrackingEvents:[{name:"Salads",topicName:"Recipe.ATC.Salads"},{name:"Side Dishes",topicName:"Recipe.ATC.SideDishes"},{name:"Snacks",topicName:"Recipe.ATC.Snacks"},{name:"Soups",topicName:"Recipe.ATC.Soups"},{name:"Breads",topicName:"Recipe.ATC.Breads"},{name:"Desserts",topicName:"Recipe.ATC.Desserts"},{name:"Drinks",topicName:"Recipe.ATC.Drinks"},{name:"Main Dishes",topicName:"Recipe.ATC.MainDishes"},{name:"Appetizers",topicName:"Recipe.ATC.Appetizers"}]});
//
// source/angular/controllers/profilePhotoCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_profile_photo",["$scope","$rootScope","$window","$location","ar_services_profile_photos","ar_services_url","datalayerEvent",function(c,b,d,a,e,l,g){c.locationWithoutId=a.path().replace(/\d+\/?$/,"");
c.showSortFiltersStyle="collapsed";c.indicatorStyle="icon--chevron-down";c.toggleDisplayText="Sort";c.showEditTextArea=false;
c.showDescription=true;if(a.search().edit){c.showEditTextArea=true;c.showDescription=false}var i;var j=function(m){c.title=m.title;
c.description=m.description;c.originalDescription=m.description;c.imageUrl=m.urls[m.urls.length-1].url;c.cookId=m.submitter.userID;
c.cookDisplayName=m.submitter.name;c.cookImageURL=m.submitter.photo.urls[0].url;c.cookIsPro=m.submitter.isPro;c.followersCount=m.submitter.followersCount;
c.recipeId=m.recipeId;c.recipeTitle=m.recipeTitle;c.recipeDetailUrl=(c.recipeId&&c.recipeId>0)?l.getRecipeUrl({itemType:"recipe",title:c.recipeTitle,recipeID:c.recipeId}):null;
c.cookProfile=m.submitter.profileUrl};var f=function(o,p){d.dataLayer.page.pageInfo.pageId=o;d.dataLayer.page.pageInfo.pageName=a.path();
d.dataLayer.page.pageInfo.referringUrl=p;d.dataLayer.page.pageInfo.destinationUrl=a.absUrl();d.dataLayer.pageInstanceId=a.absUrl();
var m="public profile";var n=a.path().toLowerCase();if(n.indexOf("recipe/")>0){m="recipe photos"}else{if(n.indexOf("cook/my")>0){m="private profile"
}}g.push(m,"N/A","Action Complete",null,"spa_page_load",null,null,null,null,{page:o})};c.init=function(){var m=d.PhotoGalleryInitScope;
i=m.photoId;j(m);c.photoDictionary=m.photoCollection};c.loadPhoto=function(m){var n=a.absUrl();i=m;e.getPhoto({photoId:m}).$promise.then(function(o){j(o);
b.$broadcast("cookChange",c.cookId);if(typeof d.refreshAdFrame==="function"){d.refreshAdFrame()}});a.path(c.locationWithoutId+i+"/");
f(i,n)};c.deletePhoto=function(){if(confirm(" Are you sure you want to delete this image?")){e.deletePhoto({photoId:i}).$promise.then(function(m){c.model=m;
c.$emit("notify","Photo deleted",null,"success",null,null,function(){d.location.href="/cook/my/photos/"})})}};c.updateDesc=function(){e.updatePhoto({photoId:i,description:c.description,title:c.title}).$promise.then(function(m){c.model=m;
c.$emit("notify","Description updated",null,"success");c.enableEdit();c.loadPhoto(i)})};c.toggleShowMenuOptions=function(){if(c.showSortFiltersStyle=="collapsed"){k()
}else{h()}};c.next=function(){return c.photoDictionary[i]==undefined?-1:c.photoDictionary[i].NextPhoto};c.prev=function(){return c.photoDictionary[i]==undefined?-1:c.photoDictionary[i].PrevPhoto
};c.getCookId=function(){return c.cookId};var k=function(){c.filterDisplayStatus="visible";c.toggleDisplayText="Hide";c.showSortFiltersStyle="exposed";
c.indicatorStyle="icon--chevron-up"};var h=function(){c.filterDisplayStatus="hidden";c.toggleDisplayText="Sort";c.showSortFiltersStyle="collapsed";
c.indicatorStyle="icon--chevron-down"};c.enableEdit=function(){c.showEditTextArea=!c.showEditTextArea;c.showDescription=!c.showDescription;
c.showSortFiltersStyle="collapsed";c.indicatorStyle="icon--chevron-down"};c.cancel=function(){c.description=c.originalDescription;
c.enableEdit()};c.makeProfilePhoto=function(){c.$emit("notify","Profile photo updated",null,"success",null,null,function(){d.location.href="/account/updateprofilephoto/?photoid="+i
})}}]);
//
// source/angular/controllers/homeCtrl.js
//
"use strict";angular.module("allrecipes").controller("arControllersHome",["$scope","feedProvider","ads","$rootScope","$location","arLogin","impressionTrack",function(c,f,d,b,a,e,h){c.infiniteCounter=1;
c.infiniteScrollLimit=5;c.hasMoreRecipes=true;c.itemList=[];c.viewportOffset=1200;c.page=parseInt(a.search().page);c.isAnonymous=e.userId==null||e.userId<=0;
if(isNaN(c.page)){c.page=1}var g=function(){var j=parseInt(a.search().page);var i=isNaN(j)?c.page:j;return i};c.getMoreResults=function(){f.get({page:g()+1,includeCookActivities:b.Toggles.Activity}).then(function(j){c.infiniteCounter++;
c.page=g()+1;var i=d.arrayWithAdsInserted(j.data.feed);if(i.length>0){i[0].pageMarker=c.page}if(i.length<20){c.hasMoreRecipes=false
}angular.forEach(i,function(k){if(k.itemType==="Brand"){angular.extend(k,{isAnonymous:c.isAnonymous})}});h.push("homePage",i);
c.itemList=c.itemList.concat(i)})}}]);
//
// source/angular/services/profilePhotos-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_profile_photos",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/photos/:photoId";
return a(d,{},{getPhoto:{url:d,method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();return e}}},deletePhoto:{url:d,method:"DELETE",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},updatePhoto:{url:b.url+"v1/photos",method:"PUT",isArray:false,headers:{Authorization:function(){var e=c.token();return e
}}},privateProfile:{url:b.url+"v1/users/me/photos",method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},updateCoverPhoto:{url:b.url+"v1/me/coverPhoto/",method:"PUT",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},})}]);
//
// source/angular/directives/profileLink.js
//
"use strict";angular.module("allrecipes").directive("profileLink",["internalReferrerLinker",function(a){return{restrict:"A",scope:true,replace:false,transclude:true,link:function(f,c,b){var d=function(){return(f.item&&f.item.itemType&&(f.item.itemType.toLowerCase()=="cook"||f.item.itemType=="FacebookRecommendation"||f.item.itemType=="HalfCook"))
};var e=(d()&&f.item.submitter!=null&&f.item.submitter.profileUrl!="")?f.item.submitter.profileUrl:(d()&&f.item.profileUrl!="")?f.item.profileUrl:f.item.userID>0?"/cook/"+f.item.userID+"/":"";
f.publicProfileUrl=e;if(b.internalReferrer){b.href=e;b.internalReferrerLink=b.internalReferrer;f.publicProfileUrl=a(f,c,b)}}}
}]);
//
// source/angular/directives/headerLink.js
//
"use strict";angular.module("allrecipes").directive("headerLink",["internalReferrerLinker",function(a){return{restrict:"A",scope:true,replace:false,transclude:true,link:function(d,c,b){if(b.internalReferrer){b.href=d.item.headerLink;
b.internalReferrerLink=b.internalReferrer;d.item.headerLink=a(d,c,b)}}}}]);
//
// source/angular/services/current-user-state-service.js
//
"use strict";angular.module("allrecipes").service("ar_current_user_state_service",["perishableLocalstorage",function(b){var a=undefined;
this.currentUserChangedHandler=new EventHandler("CurrentUserState.CurrentUserChanged");this.followersListChangedHandler=new EventHandler("CurrentUserState.FollowersListChanged");
this.followingListChangedHandler=new EventHandler("CurrentUserState.FollowingListChanged");this.getCurrentUser=function(){if(a===undefined||a===null){var c=b.get("CurrentUserStateModel");
if(c!==""&&c!==undefined&&c!==null){a=c}else{a=null}}return a};this.setCurrentUser=function(c){this.currentUserState=c;this.currentUserChangedHandler.Handle(this.currentUserState)
}}]);
//
// source/angular/services/public-profile-state-service.js
//
"use strict";angular.module("allrecipes").service("ar_public_profile_state_service",["perishableLocalstorage",function(a){var b=undefined;
var c=undefined;this.publicProfileUserChangedHandler=new EventHandler("PublicProfile.PublicProfileUserChanged");this.publicProfileSubViewChangedHandler=new EventHandler("PublicProfile.PublicProfileSubViewChanged");
this.followersListChangedHandler=new EventHandler("PublicProfile.FollowersListChanged");this.followingListChangedHandler=new EventHandler("PublicProfile.FollowingListChanged");
this.getProfileUser=function(){if(b===undefined||b===null){var d=a.get("PublicProfileStateModel");if(d!==""&&d!==undefined&&d!==null){if(typeof(d)==="string"){b=JSON.parse(d.replace(/[\n\r]/g,"<br/>"))
}else{b=d}}else{b=null}}return b};this.setProfileUser=function(d){this.profileUserState=d;this.publicProfileUserChangedHandler.Handle(this.profileUserState)
};this.getPublicProfileSubView=function(){return c};this.setPublicProfileSubView=function(e){var d=c;c=e;this.publicProfileSubViewChangedHandler.Handle({currentView:c,previousView:d})
}}]);
//
// source/angular/services/collections-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_collections",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url;
return a(d,{collectionId:"@id"},{getCollectionDetails:{url:d+"v1/collections/:collectionId",method:"GET",isArray:false,headers:{Authorization:c.token}},deleteCollection:{url:d+"v1/collections/:collectionId",method:"DELETE",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},saveCollection:{url:d+"v1/collections/",method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},getMyCollections:{url:d+"v1/users/me/collections",mthod:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},getCollectionsForUser:{url:d+"v1/users/:userId/collections",mthod:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},getMyCollectionSummaries:{url:d+"v1/users/me/collections/summaries",method:"GET",isArray:false,headers:{Authorization:c.token}},getCollectionSummariesForUser:{url:d+"v1/users/:userId/collections/summaries",method:"GET",isArray:false,headers:{Authorization:c.token}},getMyFollowingCollections:{url:d+"v1/users/me/collections/following",method:"GET",isArray:true,headers:{Authorization:c.token}},followCollection:{url:d+"v1/users/me/collections/following/",method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},unfollowCollection:{url:d+"v1/users/me/collections/following/:collectionId",method:"DELETE",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},addRecipeToCollectionList:{url:d+"v1/collections/recipes/",method:"POST",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}},removeRecipeFromCollection:{url:d+"v1/collections/:collectionId/recipes/:recipeId",method:"DELETE",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}}})}]);
//
// source/angular/services/collectionsave-service.js
//
"use strict";angular.module("allrecipes").factory("arCollectionSave",["$window","ar_services_collections","arCollectionStorage",function(a,b,c){return{save:function(e,f,d){var g=ar.models.collectionPost(e,f,"AddCollection");
var h=function(i){c.add(e);d.success(i)};b.followCollection(g).$promise.then(h,d.failure)},remove:function(e,d){var f=function(g){c.remove(e);
d.success(g)};b.unfollowCollection({collectionId:e}).$promise.then(f,d.failure)}}}]);
//
// source/angular/services/carouselScrollerManagerService.js
//
"use strict";angular.module("allrecipes").service("carousel_scroller_manager_service",[function(){var a={};this.GetCarousels=function(){return a
};this.scrollLeftClicked=new EventHandler();this.scrollRightClicked=new EventHandler();this.scrollToStartClicked=new EventHandler();
this.evaluateBoundsRequested=new EventHandler();this.evaluateEndOfList=new EventHandler();this.addScrollTarget=function(c,b){if(a[c]){a[c].scrollTarget=b
}else{a[c]={scrollTarget:b}}};this.triggerScrollLeft=function(b){if(a[b]){this.scrollLeftClicked.Fire(b)}};this.triggerScrollRight=function(b){if(a[b]){this.scrollRightClicked.Fire(b)
}};this.triggerEvaluateEndOfList=function(b){if(a[b]){this.evaluateEndOfList.Fire(b)}};this.triggerScrollToStart=function(b){if(a[b]){this.scrollToStartClicked.Fire(b)
}};this.evaluateBounds=function(b){if(a[b]){this.evaluateBoundsRequested.Fire(b)}}}]);
//
// source/angular/services/collectionstorage-service.js
//
"use strict";angular.module("allrecipes").factory("arCollectionStorage",["perishableLocalstorage","ar_services_collections","arLogin","$q",function(f,b,c,a){var e="CollectionItems"+c.userId;
var d=c.isLoggedIn()?(c.userId!==0?f.get(e):null):null;var g;if(d===null||d===undefined){d=[];if(c.isLoggedIn()){g=b.getMyFollowingCollections().$promise;
g.then(function(h){f.set(e,h);d=h})}else{g=a.when(d)}}else{g=a.when(d)}return{hasCollectionId:function(h){return g.then(function(){if(Object.keys(d).length===0){return false
}var i=d.filter(function(j){return j===h});return i.length>0})},remove:function(h){var i=d.indexOf(h);if(i!=-1){d.splice(i,1)
}f.set(e,d)},add:function(h){d.push(h);f.set(e,d)}}}]);
//
// source/angular/services/user-provider.js
//
"use strict";angular.module("allrecipes").factory("ar_services_user",["ar_services_environment","$resource","ar_services_token",function(b,a,c){var d=b.url+"v1/users";
return a(d,{userId:"@userId"},{getPrivate:{url:d+"/me",method:"GET",isArray:false,headers:{Authorization:c.token}},getPublic:{url:d+"/:userId",method:"GET",isArray:false,headers:{Authorization:function(){var e=c.token();
return e}}}})}]);
//
// source/angular/models/event-handler.js
//
"use strict";EventHandler.prototype.Identifier="";function EventHandler(a){this.Identifier=a;this.Functions=[]}EventHandler.prototype.Fire=function(a){this.Handle(a)
};EventHandler.prototype.Handle=function(b){var a;for(a=0;a<this.Functions.length;a+=1){this.Functions[a].Function(b)}};EventHandler.prototype.Add=function(a,b){var c=b;
this.Functions.push({Name:c,Function:a});return c};EventHandler.prototype.Remove=function(a){var b,c=-1;for(b=0;b<this.Functions.length;
b+=1){if(this.Functions[b].Name===a){c=b;break}}if(c!==-1){this.Functions.splice(c,1)}};
//
// source/angular/services/fileReader-service.js
//
angular.module("allrecipes").factory("ar_services_file_reader",["$q","$window",function(a,b){var f=function(i,h,j){return function(){j.$apply(function(){h.resolve(i.result)
})}};var d=function(h,j){var i=new b.FileReader();i.onload=f(i,h,j);return i};var c=function(j){var h;if(j.split(",")[0].indexOf("base64")>=0){h=atob(j.split(",")[1])
}else{h=unescape(j.split(",")[1])}var m=j.split(",")[0].split(":")[1].split(";")[0];var l=new Uint8Array(h.length);for(var k=0;
k<h.length;k++){l[k]=h.charCodeAt(k)}return new Blob([l],{type:m})};var e=function(i,j){var h=c(i);h.name=j;return h};var g=function(i,k){var h=a.defer();
var j=d(h,k);j.readAsDataURL(i);return h.promise};return{readAsDataUrl:g,imageFileForDataUrl:e}}]);
//
// source/angular/directives/tabs.js
//
angular.module("allrecipes").controller("tabsCtrl",["$scope","$timeout","$window","datalayerEvent",function(a,b,c,d){var e=a.panes=[];
a.select=function(f){if(f.isEmpty){return}angular.forEach(e,function(g){g.selected=false});f.selected=true;b(function(){c.pubsub.broadcast("MasonryGridReload")
},1);b(function(){c.pubsub.broadcast("MasonryGridReload")},250)};a.biTracking=function(f){d.push("right rail nav",dataLayer.page.pageInfo.pageId,"Action Complete",f.toLowerCase())
};this.addPane=function(i){var h=a.pageType==="VideoViewModel";var g=i.title==="Videos";var f=e.length===0;if(h&&g){a.select(i)
}else{if(f){a.select(i)}}e.push(i)}}]).directive("tabs",[function(){return{restrict:"A",transclude:true,scope:{fourTabs:"@",pageType:"@tabs"},controller:"tabsCtrl",template:'<div class="tabbable"><ul class="nav nav-tabs"><li ng-repeat="pane in panes" ng-class="{\'active\':pane.selected}"><a href="" ng-click="biTracking(pane.title); select(pane);" ng-bind="pane.title"></a></li></ul><div class="tab-content" ng-transclude></div></div>',replace:true}
}]).directive("pane",[function(){return{require:"^tabs",restrict:"A",scope:{title:"@"},link:function(c,b,a,d){c.isEmpty=a.hasContent==="False";
d.addPane(c)},template:'<div class="tab-pane" ng-class="{active: selected}" class="active" ng-transclude></div>',replace:true,transclude:true,}
}]);
//
// source/angular/controllers/photoUploadCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_photo_upload",["$scope","$window","ar_services_photoupload","datalayerEvent","arLogin","$rootScope","$location","ngDialog","ar_services_file_reader","$document","ar_services_environment",function(d,e,h,k,i,c,b,q,g,a,f){d.rateRecipeButtonStyle="rateRecipe btns-two-small";
d.rateButtonIsHighlighted=false;d.enablePhotoUpload=i.ensureUserIsLoggedIn();d.hasUploadedPhoto=false;d.photoId=0;d.photoUrl=null;
d.isProfilePhoto=false;d.hasReviewedRecipe=false;d.init=function(w,u,t,v){d.userId=w||i.userId;d.recipeId=u||0;d.rateButtonIsHighlighted=d.hasReviewedRecipe=(t)?true:false;
d.uploadFrom=v||"recipe page";s();d.isProfilePhoto=(location.pathname.search("profile-settings")>0)?true:false};d.makeProfilePhoto=function(){d.isProfilePhoto=!d.isProfilePhoto
};var s=function(){e.pubsub.listen("A.Recipe.AddPhoto.ClickEvent","PhotoUpload.Controller",n)};var n=function(t){l(t.files)};
var l=function(t){var u=t[0];j();if(u.size>20971520){d.$emit("notify","Photo must be less than 20MB in size.",null,"failure");
return}g.readAsDataUrl(t[0],d).then(function(w){d.userSelectedPhoto=w});var v={template:f.scriptServerUrl+"assets/source/angular/templates/PhotoUploadModal.html",className:"ngdialog-theme-default",scope:d};
v.scope.description=null;if(d.recipeId==0){d.showMakeProfile=true}else{d.showMakeProfile=false}q.openConfirm(v).then(function(w){h.uploadPhoto({userId:d.userId,recipeId:d.recipeId,description:w.description,file:u}).then(o,m)
})};d.onFileSelect=l;var o=function(t){d.hasUploadedPhoto=true;d.photoUrl=t.smallPhotoUrl;d.largePhotoUrl=t.largePhotoUrl;d.$emit("notify","Photo added. Thank you!",null,"success",null,null,function(){if(b){if(d.isProfilePhoto){e.location.href="/account/updateprofilephoto/?photoid="+t.photoId
}else{if(d.recipeId==0){console.debug("Photo finish, changing location: /photos/"+t.photoId+"/");e.location=e.location+t.photoId
}else{e.location=b.path().replace(/\d+\/?$/,t.photoId)}}}});c.$broadcast("onPhotoUpload",d.largePhotoUrl);k.push("add a photo",d.recipeId,"Action Complete",d.uploadFrom)
};var m=function(t){d.$emit("notify",t,null,"failure")};var p=function(t){if(!d.rateButtonIsHighlighted){d.rateButtonIsHighlighted=t
}else{if(!d.hasReviewedRecipe){d.rateButtonIsHighlighted=t}}};d.uploadCoverPhoto=function(t){var u=t[0];j();var v={minHeight:120,minWidth:1270,maxSize:20971520};
h.readPhotoData(u,d,v).then(function(w){d.src=w.dataUrl;c.$emit("CoverPhoto.FileUpload.Event",w.dataUrl,u.name)},function(w){e.pubsub.broadcast("ErrorNotifyModal.ErrorMessage",[w.error])
})};c.$on("onRatingClick",function(t,u){p(u)});c.$on("onAddPhoto",function(t,u){d.onFileSelect(u)});c.$on("onReviewSaved",function(t,u){d.hasReviewedRecipe=u
});d.photoUploadToggleRating=i.ensureUserIsLoggedIn(function(){if(d.hasReviewedRecipe){r(true)}else{r(!d.rateButtonIsHighlighted)
}});var r=function(t){c.$emit("onRatingClick",t)};d.$on("onMadeItModalPhotoUpload",function(t,u){d.photoUrl=u;d.hasUploadedPhoto=true
});var j=function(){a.find("[ng-file-select]").val("")}}]);
//
// source/angular/services/photoupload-service.js
//
angular.module("allrecipes").service("ar_services_imagesizer",["$q",function(a){this.getImageSize=function(b){var c=a.defer();
var d=new Image();d.onload=function(){c.resolve({width:d.width,height:d.height})};d.src=b;return c.promise}}]).service("ar_services_photoupload",["$upload","datalayerEvent","ar_services_environment","ar_services_token","ar_services_file_reader","ar_services_imagesizer","$q",function(g,f,b,e,c,d,a){this.readPhotoData=function(k,m,l){var h=a.defer();
if(k.size>l.maxSize){var j=l.maxSize/(1024*1024);var i="Photo must be less than "+j+"MB in size.";h.reject({error:i})}else{c.readAsDataUrl(k,m).then(function(n){d.getImageSize(n).then(function(o){if(o.width<l.minWidth||o.height<l.minHeight){var p="Please choose an image that's at least "+l.minWidth+" pixels wide and at least "+l.minHeight+" pixels tall.";
h.reject({error:p})}else{h.resolve({dataUrl:n,dimensions:o})}})})}return h.promise};this.calculateOffsets=function(h,k){var j={xOffset:0,yOffset:0};
var l=h.width;var i=h.height;if(l>i){j.xOffset=-(k/i)*(l-i)/2}else{if(i>l){j.yOffset=-(k/l)*(i-l)/2}}return j};this.coverPhotoUpload=function(i){var h=a.defer();
g.upload({url:b.url+"v1/photos/cover",method:"POST",headers:{Authorization:function(){var j=e.token();return j}},file:i}).then(function(){h.resolve()
},function(){var j="We didn't get your photo. Try submitting it again.";h.reject(j)});return h.promise};this.uploadPhoto=function(i){var h=a.defer();
if(!i.description){i.description=""}g.upload({url:b.url+"v1/recipes/"+i.recipeId+"/photos",method:"POST",headers:{Authorization:function(){var j=e.token();
return j},"Content-Type":undefined},data:{userid:i.userId,description:i.description},file:i.file}).then(function(j){h.resolve({photoId:j.data.photoId,largePhotoUrl:b.imageServerUrl+"userphotos/250x250/"+j.data.photoId+".jpg",smallPhotoUrl:b.imageServerUrl+"userphotos/70x70/"+j.data.photoId+".jpg"})
},function(k){var l=k.status;var j="We didn't get your photo. Try submitting it again.";if(l!==401){if(k!=""&&k.data.message!="An error has occurred."){j=k.data.message;
f.pushError("add a photo",i.recipeId,"Error Message",k.data.exceptionMessage)}}h.reject(j)});return h.promise}}]);
//
// source/angular/services/ads-service.js
//
"use strict";angular.module("allrecipes").factory("ads",["adService","adConfiguration","$window",function(c,b,a){var g=function(){return Math.floor((Math.random()*3)-1)
};var e=function(n,m){if(n<=0){return[]}var l=(n/3);if(m>l){m=l}var j=2;if(m>0){j=Math.ceil(n/m)}var h=[2+g()];for(var k=1;k<m;
k++){h.push(h[h.length-1]+j+g())}return h};var f=b.settings.responsiveGridSlots;var d={desktop:["div-gpt-lazy-square-fixed-tier1","div-gpt-lazy-square-fixed-tier3","div-gpt-lazy-square-fixed-tier4"],mobile:["div-gpt-lazy-mob-square-fixed-tier1","div-gpt-lazy-mob-square-fixed-tier3","div-gpt-lazy-mob-square-fixed-tier4"]};
return{arrayWithAdsInserted:function(n){var j=e(n.length,b.settings.responsiveGridSlots);var m;var o;var k=(a.adService.mobileAds)?"mobile":"desktop";
for(var l=0;l<j.length;l++){var h="gridad";f+=1;m="ad-recipe-grid-responsive-"+(l+1).toString();o=d[k][l%3];n.splice(j[l],0,{type:"ad",adClass:h,id:m,adType:o,itemType:"ad"})
}return n},refreshResponsiveAdSlot:function(h,i,j){if((j&&!a.adService.isDesktop)||i===undefined){return}a.adServiceQ.push(function(){var k=b.settings.lazyLoadTargeting;
c.renderAds.createLazyLoadSlot(i,h,true,k)})}}}]);
//
// source/angular/directives/sideloadedad.js
//
"use strict";angular.module("allrecipes").directive("sideloadedAd",["ads","$timeout","ar_services_environment",function(b,a,c){var e=0;
function d(){return"sideLoadedSlotId"+(++e)}return{scope:{adSlotType:"=",adSlotHcType:"@",desktopOnly:"="},restrict:"E",replace:true,templateUrl:c.scriptServerUrl+"assets/source/angular/templates/ResponsiveGridAd.html",link:function(g){g.adSlotId=d();
var f=g.adSlotType||g.adSlotHcType;if(g.desktopOnly&&g.desktopOnly!==true){f="div-gpt-lazy-square-fixed-tier"+f.substring(f.length-1)
}a(function(){b.refreshResponsiveAdSlot(g.adSlotId,f,g.desktopOnly)})}}}]);
//
// source/angular/services/assetModelConverter.js
//
angular.module("allrecipes").factory("assetModelConverter",function(){var b=function(i){i.itemType="Community";i.imageUrl="http://images.media-allrecipes.com/images/"+i.imageUrl;
if(i.submitter.cookHandle!=undefined&&i.submitter.cookHandle!==null&&i.submitter.cookHandle.length>0){i.submitter.profileUrl="/cook/"+i.submitter.cookHandle+"/"
}else{i.submitter.profileUrl="/cook/"+i.submitter.id+"/"}return i};var a=function(i){i.title=i.title;i.sourceID=i.sourceID;i.typeID=i.typeID;
i.friendlyURL=i.friendlyURL;i.byLine=i.byLine;i.description=i.description;i.articleID=i.articleID;i.cacheId=i.cacheId;i.isCached=i.isCached;
i.imageID=i.imageID;i.relevancyScore=i.relevancyScore;i.itemType="Article";i.imageUrl="http://images.media-allrecipes.com/images/"+i.imageID+".jpg";
return i};var f=function(i){i.itemType="Video";if(i.associatedRecipeCook.cook.thumbnail==null||i.associatedRecipeCook.cook.thumbnail.length===0){i.associatedRecipeCook.cook.thumbnail="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
}i.playCount=i.playCount;i.recipe=new Object();i.recipe.title=i.title;i.activityText="videocard";i.submitter=new Object();i.submitter.followersCount=i.associatedRecipeCook.cook.followersCount;
i.submitter.favoritesCount=i.associatedRecipeCook.cook.favoriteCount;i.submitter.madeRecipesCount=i.associatedRecipeCook.cook.madeRecipesCount;
i.submitter.name=i.associatedRecipeCook.cook.displayName;i.submitter.userID=i.associatedRecipeCook.cook.id;if(i.associatedRecipeCook.cook.handle!==undefined&&i.associatedRecipeCook.cook.handle!==null&&i.associatedRecipeCook.cook.handle.length>0){i.submitter.profileUrl="/cook/"+i.associatedRecipeCook.cook.handle+"/"
}else{i.submitter.profileUrl="/cook/"+i.associatedRecipeCook.cook.id+"/"}i.submitter.photo=i.associatedRecipeCook.cook.thumbnail;
return i};function h(){function i(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return i()+i()+"-"+i()+"-"+i()+"-"+i()+"-"+i()+i()+i()
}function g(i){return"http://pubads.g.doubleclick.net/gampad/ad?iu=/3865/DFP_1x1_impression_tracker&sz=1x1&t=adpartner%3D"+i+"&c="+h()
}var c=function(i){i.itemType="Recipe";i.recipeID=i.id;i.title=i.title;i.ratingAverage=i.rating;i.reviewCount=i.reviewCount;i.videoID=i.videoId;
if(i.cook.thumbnail===undefined||i.cook.thumbnail===null||i.cook.thumbnail.length===0){i.cook.thumbnail="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
}if(i.earnedImpression!==undefined&&i.earnedImpression!==null){i.recipeTrackingPixelUrl=g(i.earnedImpression)}i.submitter=new Object();
i.submitter.followersCount=i.cook.followersCount;i.submitter.favoritesCount=i.cook.favoriteCount;i.submitter.madeRecipesCount=i.cook.madeRecipesCount;
i.submitter.name=i.cook.displayName;i.submitter.userID=i.cook.id;if(i.cook.handle!==undefined&&i.cook.handle!==null&&i.cook.handle.length>0){i.submitter.profileUrl="/cook/"+i.cook.handle+"/"
}else{i.submitter.profileUrl="/cook/"+i.cook.id+"/"}i.submitter.photo=new Object();i.submitter.photo.urls=[];var j=new Object();
j.url=i.cook.thumbnail;i.submitter.photo.urls.push(j);return i};var d=function(i){var j=c(i);j.analyticsType="rotd";j.isRotd=true;
return j};var e=function(i){var j=c(i);j.analyticsType="staff pick";j.isStaffPick=true;return j};return{convert:function(k,l){var m;
for(var j in k){if(k.hasOwnProperty(j)){var i=k[j];if(i.itemType==="Video"){i=f(i)}else{if(i.itemType==="Rotd"){i=d(i)}else{if(i.itemType==="Staffpick"){i=e(i)
}else{if(i.itemType==="Recipe"){i=c(i)}else{if(i.itemType==="CommunityBlock"){i=b(i)}else{if(i.itemType=="Article"){i=a(i)}}}}}}m=l+parseInt(j)+1;
angular.extend(i,{slotID:m});k[j]=i}}return(k)}}});
//
// source/angular/services/feedItemConverter.js
//
angular.module("allrecipes").factory("feedItemConverter",["ar_services_url",function(c){var j={FacebookRecommendation:"icon--fb-bug",CookRecommendation:"icon--ar-bug",AllstarRecommendation:"svg-icon--cook-card--Allstar_icon svg-icon--cook-card--Allstar_icon-dims"};
var i={FacebookRecommendation:"Follow your Facebook friend",CookRecommendation:"You have similar favorites",AllstarRecommendation:"We love this Allrecipes Allstar",Staffpick:"Staff Pick",RecipeRecommendationUserPreference:"Recommended based on your tastes"};
var h={FacebookRecommendation:"/cook/my/findfriends/",CookRecommendation:"/cook/my/findfriends/",AllstarRecommendation:"/cook/my/findfriends/",RecipeRecommendationSaved:"javascript:void(0);",Staffpick:"javascript:void(0);",RecipeOfTheDay:"javascript:void(0);",RecipeRecommendationViewed:"javascript:void(0);",RecipeRecommendationPopular:"javascript:void(0);",RecipeRecommendationUserPreference:"javascript:void(0);",SavedRecipeActivity:"javascript:void(0);",MadeRecipeActivity:"javascript:void(0);",};
var d={FacebookRecommendation:"cook-tile",CookRecommendation:"cook-tile",AllstarRecommendation:"cook-tile",BrandedCookRecommendation:"cook-tile brand"};
var k={FacebookRecommendation:"HalfCook",CookRecommendation:"HalfCook",AllstarRecommendation:"HalfCook",RecipeOfTheDay:"recipe",Staffpick:"recipe",RecipeRecommendationSaved:"recipe",RecipeRecommendationViewed:"recipe",RecipeRecommendationPopular:"recipe",RecipeRecommendationUserPreference:"recipe",SavedRecipeActivity:"recipe",MadeRecipeActivity:"recipe",BrandedCookRecommendation:"Brand"};
var b={FacebookRecommendation:"fb cook",CookRecommendation:"cook recommended",AllstarRecommendation:"allstar cook",RecipeOfTheDay:"rotd",Staffpick:"staff pick",RecipeRecommendationSaved:"previously saved",RecipeRecommendationViewed:"previously viewed",RecipeRecommendationPopular:"popular",RecipeRecommendationUserPreference:"user pref",SavedRecipeActivity:"followed cook saved",MadeRecipeActivity:"followed cook made"};
var a=function(l){switch(l){case"MadeRecipeActivity":return"Made by ";case"SavedRecipeActivity":return"Saved by ";default:return"Recipe by "
}};var e=function(l,m){return{iconClass:j[l.feedItemType],headerText:i[l.feedItemType],headerLink:h[l.feedItemType],analyticsType:b[l.feedItemType],activityText:a(l.feedItemType),submitter:{userID:l.cookId,name:l.cookDisplayName,followersCount:l.followersCount,favoritesCount:l.favoriteCount,madeRecipesCount:l.madeRecipesCount,photo:{urls:[{url:l.thumbnailUrl}]}},imageUrl:l.imageUrl,userID:l.userId||l.id,followersCount:l.followersCount,name:l.cookDisplayName,itemType:k[l.feedItemType],description:l.description,title:l.recipeTitle,recipeID:l.id,id:l.id,photo:{urls:[null,null,null,{url:l.imageUrl}]},ratingAverage:l.rating,reviewCount:l.reviewCount,videoID:l.videoId,adClass:d[l.feedItemType],type:k[l.feedItemType],isSponsored:l.isSponsored,sourceID:l.sourceId,slotID:m}
};var f=function(m,n){var l={"fb cook":"FacebookRecommendation","fb friend cook":"FacebookRecommendation","cook recommended":"CookRecommendation","allstar cook":"AllstarRecommendation",rotd:"RecipeOfTheDay","staff pick":"Staffpick","previously saved":"RecipeRecommendationSaved","previously viewed":"RecipeRecommendationViewed",popular:"RecipeRecommendationPopular","user pref":"RecipeRecommendationUserPreference","followed cook saved":"SavedRecipeActivity","followed cook made":"MadeRecipeActivity",brand:"BrandedCookRecommendation"};
m.feedItemType=l[m.analyticsType];if(!m.cook){m.cook={}}return{iconClass:j[m.feedItemType],headerText:i[m.feedItemType],headerLink:h[m.feedItemType],analyticsType:b[m.feedItemType],activityText:a(m.feedItemType),submitter:{userID:m.cook.id||0,name:m.cook.displayName,followersCount:m.cook.followersCount,favoritesCount:m.cook.favoriteCount,madeRecipesCount:m.cook.madeRecipesCount,profileUrl:m.cook.profileUrl,photo:{urls:[{url:m.cook.thumbnailUrl}]},location:m.cookLocation},recipeTrackingPixelUrl:m.trackingPixelUrl,imageUrl:m.imageUrl,userID:m.userId||m.id,followersCount:m.followersCount,name:m.cookName,itemType:k[m.feedItemType],description:m.description,title:m.title,recipeID:m.id,id:m.id,photo:{urls:[null,null,null,{url:m.imageUrl}]},ratingAverage:m.stars?m.stars.rating:null,reviewCount:m.reviewCount,videoID:m.videoId?m.videoId:0,adClass:d[m.feedItemType],type:k[m.feedItemType],isSponsored:m.isSponsored,sourceID:m.sourceId,slotID:n,ctaText:m.callToAction?m.callToAction:null,ctaLink:m.callToActionLink?c.removeAllrecipesDomain(m.callToActionLink):null,ctaTextAnonymous:m.callToActionNotLoggedIn?m.callToActionNotLoggedIn:null,copyText:m.copyText?m.copyText:null}
};var g=function(n,l,p){var o=[];var q;for(var m=0;m<n.length;m++){q=p+m+1;if(n[m].analyticsType==="creative"){n[m].slotID=q;
o.push(n[m])}else{o.push(l(n[m],q))}}return o};return{fromFeedItemModel:function(l,m){return g(l,e,m)},fromFeedItemViewModel:function(l,m){return g(l,f,m)
}}}]);
//
// source/angular/directives/reviewStickyNav.js
//
"use strict";angular.module("allrecipes").directive("arRecipeLinkScroll",["$window",function(a){return function(b){b.recipeNavClass="review-detail-nav__recipe-link";
angular.element(a).bind("scroll touchmove",_.debounce(function(){if(a.pageYOffset>=60){b.$apply(function(){b.recipeNavClass=b.recipeNavClass+" fixedPosition"
})}else{b.$apply(function(){b.recipeNavClass="review-detail-nav__recipe-link"})}},100))}}]);
//
// source/angular/filters/text-truncate.js
//
"use strict";angular.module("allrecipes").filter("strLimit",["$filter",function(a){return function(b,c){if(!b){return}if(b.length<=c){return b
}return a("limitTo")(b,c)+"..."}}]);
//
// source/angular/controllers/personalRecipeCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_create_personal_recipe",["$scope","$rootScope",function(b,a){b.showKADetails=false;
b.init=function(c){if(c!=null){b.errorDetails="Oops! We couldn't save your Personal Recipe"}};b.toggleKADetails=function(){b.showKADetails=!b.showKADetails
}}]);
//
// source/angular/services/search-service.js
//
"use strict";angular.module("allrecipes").factory("ar_services_search",[function(){return{search:{keywords:"",ingredientsInclude:[],ingredientsExclude:[]}}
}]);
//
// source/angular/directives/feedEducationalModal.js
//
"use strict";angular.module("allrecipes").directive("feedEducationalModal",["$window","ar_services_environment","ipCookie","arLogin","ngDialog","datalayerEvent","ar_view_port_service",function(a,b,f,d,g,e,c){return{restrict:"E",replace:true,link:function(k){var i="AR_Display_FeedEducationalModal_Cookie";
if(f(i)){g.close(null,"NA")}else{var h=b.baseDomain;f(i,true,{domain:h,path:"/",expires:365,expirationUnit:"days"})}var j=function(l){var m;
if(l.page.attributes){m=l.page.attributes.contentId}else{l.page.attributes={}}return m};k.feedMe=function(){var n="/account/authenticationWelcome/?actionsource="+(typeof dataLayer!=="undefined"?dataLayer.page.category.contentType:"");
var m=j(dataLayer);dataLayer.page.attributes.contentId="na";e.pushRegistrationSourceClick("hm_edudialog");var l="educational dialog CTA ("+(k.visitorIsRegistered?"registered":"anonymous")+")";
e.push("educational dialog CTA","na","Action Complete",l);dataLayer.page.attributes.contentId=m;g.close(null,"feedMe");if(!d.isLoggedIn()){location.href=n
}};k.CloseMe=function(n){if(n==="$closeButton"){var m=j(dataLayer);dataLayer.page.attributes.contentId="na";var l="educational dialog close ("+(k.visitorIsRegistered?"registered":"anonymous")+")";
e.push("educational dialog close","na","Action Complete",l);dataLayer.page.attributes.contentId=m}};k.visitorIsRegistered=!(AR.Account.VisitorInfo.VisitorStatus()==="unrecognized"||AR.Account.VisitorInfo.VisitorStatus()==="visitor");
if(!k.visitorIsRegistered){if(!c.isPhoneViewPort()){g.openConfirm({template:b.scriptServerUrl+"assets/source/angular/templates/AnonFeedEducationalModal.html",className:"ngdialog-theme-educational",scope:k,preCloseCallback:k.CloseMe})
}}else{if(!c.isPhoneViewPort()){g.openConfirm({template:b.scriptServerUrl+"assets/source/angular/templates/RecognizedFeedEducationModal.html",className:"ngdialog-theme-educational",scope:k,preCloseCallback:k.CloseMe})
}}},}}]);
//
// source/angular/directives/allStarNotification.js
//
"use strict";angular.module("allrecipes").directive("arAllStar",["ar_services_environment",function(a){return{restrict:"E",replace:true,scope:{togglerId:"@"},link:function(d,b){d.closeNotification=function(){d.isShowNotification=false
};d.clickClose=function(){d.closeNotification()};d.clickNotification=function(){showNotification()};d.showNotification=function(){d.isShowNotification=true
};d.isOnTop=false;var c=b[0].getBoundingClientRect().top+window.scrollY;angular.element(document).ready(function(){if(c<250){d.isOnTop=true
}})},templateUrl:a.scriptServerUrl+"assets/source/angular/templates/AllStarNotification.html"}}]);
//
// source/angular/services/featureVisitCount-service.js
//
"use strict";angular.module("allrecipes").service("ar_feature_visit_count_service",["ipCookie","ar_services_environment",function(d,a){var b={domain:a.baseDomain,path:"/",expires:180,expirationUnit:"days"};
function c(f){return"AR_Display_"+f+"_Cookie"}function e(f){return !f?0:parseInt(f)}return{incrementAndGetVisitCount:function(g){var h=c(g),f=e(d(h));
d(h,!f?1:++f,b);return f},setVisitCount:function(g,f){d(c(g),f,b)}}}]);
//
// source/angular/directives/sorting.js
//
"use strict";angular.module("allrecipes").directive("sorting",["ar_services_environment",function(a){return{restrict:"A",templateUrl:a.scriptServerUrl+"assets/source/angular/templates/sorting.html",terminal:true,replace:false}
}]);
//
// source/angular/directives/searchResultCount.js
//
"use strict";angular.module("allrecipes").directive("searchResultCount",["ar_services_environment",function(a){return{restrict:"A",templateUrl:a.scriptServerUrl+"assets/source/angular/templates/searchresultcount.html",terminal:true,replace:false}
}]);
//
// source/angular/services/cookie-service.js
//
"use strict";angular.module("allrecipes").factory("ar_cookie_service",["$document",function(a){return{setCookie:function(b,g,f){var e=new Date();
f=(f==null)?0:f;e.setDate(e.getDate()+f);e=e.toGMTString();var d=a.prop("domain");if(typeof d=="string"&&d.indexOf(".")==-1){d=""
}var c=b+"="+escape(g)+"; expires="+e+"; path=/"+((d=="")?";":("; domain="+d+";"));a[0].cookie=c}}}]);
//
// vendor/croppie/croppie.js
//
(function(b,a){if(typeof define==="function"&&define.amd){define(["exports","b"],a)}else{if(typeof exports==="object"&&typeof exports.nodeName!=="string"){a(exports,require("b"))
}else{a((b.commonJsStrict={}),b.b)}}}(this,function(I,x){if(typeof Promise!=="function"){
/*
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
         * @version   3.0.2
         */
(function(){function a5(a6){return typeof a6==="function"||typeof a6==="object"&&a6!==null
}function a3(a6){return typeof a6==="function"}function a4(a6){return typeof a6==="object"&&a6!==null}var a1;if(!Array.isArray){a1=function(a6){return Object.prototype.toString.call(a6)==="[object Array]"
}}else{a1=Array.isArray}var a2=a1;var ax=0;var aC={}.toString;var aI;var at;var an=function b(a7,a6){ay[ax]=a7;ay[ax+1]=a6;ax+=2;
if(ax===2){if(at){at(au)}else{az()}}};function aB(a6){at=a6}function aA(a6){an=a6}var ar=typeof window!=="undefined"?window:undefined;
var ap=ar||{};var aq=ap.MutationObserver||ap.WebKitMutationObserver;var av=typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";
var aw=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function aF(){return function(){process.nextTick(au)
}}function aH(){return function(){aI(au)}}function aE(){var a6=0;var a8=new aq(au);var a7=document.createTextNode("");a8.observe(a7,{characterData:true});
return function(){a7.data=a6=++a6%2}}function aD(){var a6=new MessageChannel;a6.port1.onmessage=au;return function(){a6.port2.postMessage(0)
}}function aG(){return function(){setTimeout(au,1)}}var ay=new Array(1000);function au(){for(var a8=0;a8<ax;a8+=2){var a7=ay[a8];
var a6=ay[a8+1];a7(a6);ay[a8]=undefined;ay[a8+1]=undefined}ax=0}function ao(){try{var a7=require;var a8=a7("vertx");aI=a8.runOnLoop||a8.runOnContext;
return aH()}catch(a6){return aG()}}var az;if(av){az=aF()}else{if(aq){az=aE()}else{if(aw){az=aD()}else{if(ar===undefined&&typeof require==="function"){az=ao()
}else{az=aG()}}}}function ab(){}var ac=void 0;var T=1;var ag=2;var U=new R;function ai(){return new TypeError("You cannot resolve a promise with itself")
}function Q(){return new TypeError("A promises callback cannot return that same promise.")}function V(a7){try{return a7.then}catch(a6){U.error=a6;
return U}}function am(a9,ba,a7,a8){try{a9.call(ba,a7,a8)}catch(a6){return a6}}function W(a6,a8,a7){an(function(ba){var bb=false;
var a9=am(a7,a8,function(bc){if(bb){return}bb=true;if(a8!==bc){ah(ba,bc)}else{S(ba,bc)}},function(bc){if(bb){return}bb=true;af(ba,bc)
},"Settle: "+(ba._label||" unknown promise"));if(!bb&&a9){bb=true;af(ba,a9)}},a6)}function Y(a6,a7){if(a7._state===T){S(a6,a7._result)
}else{if(a7._state===ag){af(a6,a7._result)}else{aj(a7,undefined,function(a8){ah(a6,a8)},function(a8){af(a6,a8)})}}}function X(a7,a6){if(a6.constructor===a7.constructor){Y(a7,a6)
}else{var a8=V(a6);if(a8===U){af(a7,U.error)}else{if(a8===undefined){S(a7,a6)}else{if(a3(a8)){W(a7,a6,a8)}else{S(a7,a6)}}}}}function ah(a6,a7){if(a6===a7){af(a6,ai())
}else{if(a5(a7)){X(a6,a7)}else{S(a6,a7)}}}function ae(a6){if(a6._onerror){a6._onerror(a6._result)}ad(a6)}function S(a6,a7){if(a6._state!==ac){return
}a6._result=a7;a6._state=T;if(a6._subscribers.length!==0){an(ad,a6)}}function af(a6,a7){if(a6._state!==ac){return}a6._state=ag;
a6._result=a7;an(ae,a6)}function aj(ba,a6,a8,a9){var bb=ba._subscribers;var a7=bb.length;ba._onerror=null;bb[a7]=a6;bb[a7+T]=a8;
bb[a7+ag]=a9;if(a7===0&&ba._state){an(ad,ba)}}function ad(ba){var bc=ba._subscribers;var bb=ba._state;if(bc.length===0){return
}var a7,a6,a8=ba._result;for(var a9=0;a9<bc.length;a9+=3){a7=bc[a9];a6=bc[a9+bb];if(a7){aa(bb,a7,a6,a8)}else{a6(a8)}}ba._subscribers.length=0
}function R(){this.error=null}var ak=new R;function al(a6,a7){try{return a6(a7)}catch(a8){ak.error=a8;return ak}}function aa(bc,bb,a6,a7){var ba=a3(a6),be,a8,bd,a9;
if(ba){be=al(a6,a7);if(be===ak){a9=true;a8=be.error;be=null}else{bd=true}if(bb===be){af(bb,Q());return}}else{be=a7;bd=true}if(bb._state!==ac){}else{if(ba&&bd){ah(bb,be)
}else{if(a9){af(bb,a8)}else{if(bc===T){S(bb,be)}else{if(bc===ag){af(bb,be)}}}}}}function Z(a7,ba){try{ba(function a9(bb){ah(a7,bb)
},function a8(bb){af(a7,bb)})}catch(a6){af(a7,a6)}}function aK(a6,a8){var a7=this;a7._instanceConstructor=a6;a7.promise=new a6(ab);
if(a7._validateInput(a8)){a7._input=a8;a7.length=a8.length;a7._remaining=a8.length;a7._init();if(a7.length===0){S(a7.promise,a7._result)
}else{a7.length=a7.length||0;a7._enumerate();if(a7._remaining===0){S(a7.promise,a7._result)}}}else{af(a7.promise,a7._validationError())
}}aK.prototype._validateInput=function(a6){return a2(a6)};aK.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")
};aK.prototype._init=function(){this._result=new Array(this.length)};var aJ=aK;aK.prototype._enumerate=function(){var a6=this;
var a9=a6.length;var ba=a6.promise;var a8=a6._input;for(var a7=0;ba._state===ac&&a7<a9;a7++){a6._eachEntry(a8[a7],a7)}};aK.prototype._eachEntry=function(a7,a9){var a8=this;
var a6=a8._instanceConstructor;if(a4(a7)){if(a7.constructor===a6&&a7._state!==ac){a7._onerror=null;a8._settledAt(a7._state,a9,a7._result)
}else{a8._willSettleAt(a6.resolve(a7),a9)}}else{a8._remaining--;a8._result[a9]=a7}};aK.prototype._settledAt=function(a9,a7,ba){var a6=this;
var a8=a6.promise;if(a8._state===ac){a6._remaining--;if(a9===ag){af(a8,ba)}else{a6._result[a7]=ba}}if(a6._remaining===0){S(a8,a6._result)
}};aK.prototype._willSettleAt=function(a8,a7){var a6=this;aj(a8,undefined,function(a9){a6._settledAt(T,a7,a9)},function(a9){a6._settledAt(ag,a7,a9)
})};function aS(a6){return new aJ(this,a6).promise}var aT=aS;function aV(a7){var a6=this;var bc=new a6(ab);if(!a2(a7)){af(bc,new TypeError("You must pass an array to race."));
return bc}var a9=a7.length;function ba(bd){ah(bc,bd)}function bb(bd){af(bc,bd)}for(var a8=0;bc._state===ac&&a8<a9;a8++){aj(a6.resolve(a7[a8]),undefined,ba,bb)
}return bc}var aU=aV;function aZ(a7){var a6=this;if(a7&&typeof a7==="object"&&a7.constructor===a6){return a7}var a8=new a6(ab);
ah(a8,a7);return a8}var aY=aZ;function aX(a8){var a6=this;var a7=new a6(ab);af(a7,a8);return a7}var aW=aX;var aN=0;function aQ(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}function aP(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}var aO=aR;function aR(a6){this._id=aN++;this._state=undefined;this._result=undefined;this._subscribers=[];if(ab!==a6){if(!a3(a6)){aQ()
}if(!(this instanceof aR)){aP()}Z(this,a6)}}aR.all=aT;aR.race=aU;aR.resolve=aY;aR.reject=aW;aR._setScheduler=aB;aR._setAsap=aA;
aR._asap=an;aR.prototype={constructor:aR,then:function(a8,a9){var ba=this;var bc=ba._state;if(bc===T&&!a8||bc===ag&&!a9){return this
}var a7=new this.constructor(ab);var bb=ba._result;if(bc){var a6=arguments[bc-1];an(function(){aa(bc,a7,a6,bb)})}else{aj(ba,a7,a8,a9)
}return a7},"catch":function(a6){return this.then(null,a6)}};function aM(){var a7;if(typeof global!=="undefined"){a7=global}else{if(typeof self!=="undefined"){a7=self
}else{try{a7=Function("return this")()}catch(a6){throw new Error("polyfill failed because global object is unavailable in this environment")
}}}var a8=a7.Promise;if(a8&&Object.prototype.toString.call(a8.resolve())==="[object Promise]"&&!a8.cast){return}a7.Promise=aO
}var aL=aM;var a0={Promise:aO,polyfill:aL};if(typeof define==="function"&&define.amd){define(function(){return a0})}else{if(typeof module!=="undefined"&&module.exports){module.exports=a0
}else{if(typeof this!=="undefined"){this["ES6Promise"]=a0}}}aL()}).call(this)}var D=["Webkit","Moz","ms"],H=document.createElement("div").style,A,B,C;
function P(R){if(R in H){return R}var b=R[0].toUpperCase()+R.slice(1),Q=D.length;while(Q--){R=D[Q]+b;if(R in H){return R}}}B=P("transform");
A=P("transformOrigin");C=P("userSelect");function F(S){S=S||{};for(var b=1;b<arguments.length;b++){var R=arguments[b];if(!R){continue
}for(var Q in R){if(R.hasOwnProperty(Q)){if(typeof R[Q]==="object"){S[Q]=F({},R[Q])}else{S[Q]=R[Q]}}}}return S}function E(b,S,Q){var R;
return function(){var V=this,T=arguments;var W=function(){R=null;if(!Q){b.apply(V,T)}};var U=Q&&!R;clearTimeout(R);R=setTimeout(W,S);
if(U){b.apply(V,T)}}}function G(b){if("createEvent" in document){var Q=document.createEvent("HTMLEvents");Q.initEvent("change",false,true);
b.dispatchEvent(Q)}else{b.fireEvent("onchange")}}function z(b,R,T){if(typeof(R)==="string"){var S=R;R={};R[S]=T}for(var Q in R){b.style[Q]=R[Q]
}}function L(b){var T=b.points,Q=document.createElement("div"),S=document.createElement("img"),U=T[2]-T[0],R=T[3]-T[1];Q.classList.add("croppie-result");
Q.appendChild(S);z(S,{left:(-1*T[0])+"px",top:(-1*T[1])+"px"});S.src=b.url;z(Q,{width:U+"px",height:R+"px"});return Q}function K(U,S){var Y=S.points,V=Y[0],Z=Y[1],aa=(Y[2]-Y[0]),T=(Y[3]-Y[1]),Q=S.circle,b=document.createElement("canvas"),R=b.getContext("2d"),X=aa,W=T;
if(S.outputWidth&&S.outputHeight){X=S.outputWidth;W=S.outputHeight}b.width=X;b.height=W;if(Q){R.save();R.beginPath();R.arc(X/2,W/2,X/2,0,Math.PI*2,true);
R.closePath();R.clip()}R.drawImage(U,V,Z,aa,T,0,0,X,W);return b.toDataURL()}function M(S,b){var Q=b||new Image(),R;R=new Promise(function(U,T){if(S.substring(0,4).toLowerCase()==="http"){Q.setAttribute("crossOrigin","anonymous")
}Q.onload=function(){setTimeout(function(){U(Q)},1)}});Q.src=S;return R}var r="translate3d",s=", 0px";var N=function(Q,R,b){this.x=parseFloat(Q);
this.y=parseFloat(R);this.scale=parseFloat(b)};N.parse=function(b){if(b.style){return N.parse(b.style[B])}else{if(b.indexOf("matrix")>-1||b.indexOf("none")>-1){return N.fromMatrix(b)
}else{return N.fromString(b)}}};N.fromMatrix=function(b){var Q=b.substring(7).split(",");if(!Q.length||b==="none"){Q=[1,0,0,1,0,0]
}return new N(parseInt(Q[4],10),parseInt(Q[5],10),parseFloat(Q[0]))};N.fromString=function(R){var S=R.split(") "),Q=S[0].substring(r.length+1).split(","),b=S.length>1?S[1].substring(6):1,T=Q.length>1?Q[0]:0,U=Q.length>1?Q[1]:0;
return new N(T,U,b)};N.prototype.toString=function(){return r+"("+this.x+"px, "+this.y+"px"+s+") scale("+this.scale+")"};var O=function(Q){if(!Q||!Q.style[A]){this.x=0;
this.y=0;return}var b=Q.style[A].split(" ");this.x=parseFloat(b[0]);this.y=parseFloat(b[1])};O.prototype.toString=function(){return this.x+"px "+this.y+"px"
};function f(){var U=this,Q=["croppie-container"],R=U.options.viewport.type?"cr-vp-"+U.options.viewport.type:null,b,S,V,T;U.data={};
U.elements={};b=U.elements.boundary=document.createElement("div");V=U.elements.viewport=document.createElement("div");S=U.elements.img=document.createElement("img");
T=U.elements.overlay=document.createElement("div");b.classList.add("cr-boundary");z(b,{width:U.options.boundary.width+"px",height:U.options.boundary.height+"px"});
V.classList.add("cr-viewport");if(R){V.classList.add(R)}z(V,{width:U.options.viewport.width+"px",height:U.options.viewport.height+"px"});
S.classList.add("cr-image");T.classList.add("cr-overlay");U.element.appendChild(b);b.appendChild(S);b.appendChild(V);b.appendChild(T);
U.element.classList.add(Q);if(U.options.customClass){U.element.classList.add(U.options.customClass)}k.call(this);if(U.options.enableZoom){l.call(U)
}}function q(b){if(this.options.enableZoom){this.elements.zoomer.value=J(b,2)}}function l(){var S=this,W=S.elements.zoomerWrap=document.createElement("div"),X=S.elements.zoomer=document.createElement("input"),Q,V,U;
W.classList.add("cr-slider-wrap");X.type="range";X.classList.add("cr-slider");X.step="0.01";X.value=1;X.style.display=S.options.showZoomer?"":"none";
S.element.appendChild(W);W.appendChild(X);S._currentZoom=1;function T(){u.call(S);Q=new O(S.elements.img);V=S.elements.viewport.getBoundingClientRect();
U=N.parse(S.elements.img)}function b(){n.call(S,{value:parseFloat(X.value),origin:Q||new O(S.elements.img),viewportRect:V||S.elements.viewport.getBoundingClientRect(),transform:U||N.parse(S.elements.img)})
}function R(Z){var Y,aa;if(Z.wheelDelta){Y=Z.wheelDelta/1200}else{if(Z.deltaY){Y=Z.deltaY/1060}else{if(Z.detail){Y=Z.detail/60
}else{Y=0}}}aa=S._currentZoom+Y;Z.preventDefault();T();q.call(S,aa);b()}S.elements.zoomer.addEventListener("mousedown",T);S.elements.zoomer.addEventListener("touchstart",T);
S.elements.zoomer.addEventListener("input",b);S.elements.zoomer.addEventListener("change",b);if(S.options.mouseWheelZoom){S.elements.boundary.addEventListener("mousewheel",R);
S.elements.boundary.addEventListener("DOMMouseScroll",R)}}function n(W){var S=this,V=W.transform,X=W.viewportRect,R=W.origin;
S._currentZoom=W.value;V.scale=S._currentZoom;var b=j.call(S,X),T=b.translate,Q=b.origin;if(V.x>=T.maxX){R.x=Q.minX;V.x=T.maxX
}if(V.x<=T.minX){R.x=Q.maxX;V.x=T.minX}if(V.y>=T.maxY){R.y=Q.minY;V.y=T.maxY}if(V.y<=T.minY){R.y=Q.maxY;V.y=T.minY}var U={};U[B]=V.toString();
U[A]=R.toString();z(S.elements.img,U);g.call(S);t.call(S)}function j(ah){var ag=this,af=ag._currentZoom,aj=ah.width,ai=ah.height,b=ag.options.boundary.width/2,Q=ag.options.boundary.height/2,aa=ag._originalImageWidth,Z=ag._originalImageHeight,S=aa*af,R=Z*af,U=aj/2,T=ai/2;
var V=((U/af)-b)*-1;var X=V-((S*(1/af))-(aj*(1/af)));var W=((T/af)-Q)*-1;var Y=W-((R*(1/af))-(ai*(1/af)));var ad=(1/af)*U;var ab=(S*(1/af))-ad;
var ae=(1/af)*T;var ac=(R*(1/af))-ae;return{translate:{maxX:V,minX:X,maxY:W,minY:Y},origin:{maxX:ab,minX:ad,maxY:ac,minY:ae}}
}function u(){var W=this,V=W._currentZoom,R=W.elements.img.getBoundingClientRect(),Z=W.elements.viewport.getBoundingClientRect(),Y=N.parse(W.elements.img.style[B]),U=new O(W.elements.img),X=(Z.top-R.top)+(Z.height/2),S=(Z.left-R.left)+(Z.width/2),Q={},b={};
Q.y=X/V;Q.x=S/V;b.y=(Q.y-U.y)*(1-V);b.x=(Q.x-U.x)*(1-V);Y.x-=b.x;Y.y-=b.y;var T={};T[A]=Q.x+"px "+Q.y+"px";T[B]=Y.toString();
z(W.elements.img,T)}function k(){var W=this,b=false,U,V,T,X;function Q(Y){Y.preventDefault();if(b){return}b=true;U=Y.pageX;V=Y.pageY;
if(Y.touches){var Z=Y.touches[0];U=Z.pageX;V=Z.pageY}transform=N.parse(W.elements.img);window.addEventListener("mousemove",R);
window.addEventListener("touchmove",R);window.addEventListener("mouseup",S);window.addEventListener("touchend",S);document.body.style[C]="none";
X=W.elements.viewport.getBoundingClientRect()}function R(ab){ab.preventDefault();var af=ab.pageX,ag=ab.pageY;if(ab.touches){var al=ab.touches[0];
af=al.pageX;ag=al.pageY}var Y=af-U,Z=ag-V,ac=W.elements.img.getBoundingClientRect(),ai=transform.y+Z,ad=transform.x+Y,ae={};if(ab.type=="touchmove"){if(ab.touches.length>1){var aj=ab.touches[0];
var ak=ab.touches[1];var aa=Math.sqrt((aj.pageX-ak.pageX)*(aj.pageX-ak.pageX)+(aj.pageY-ak.pageY)*(aj.pageY-ak.pageY));if(!T){T=aa/W._currentZoom
}var ah=aa/T;q.call(W,ah);G(W.elements.zoomer);return}}if(X.top>ac.top+Z&&X.bottom<ac.bottom+Z){transform.y=ai}if(X.left>ac.left+Y&&X.right<ac.right+Y){transform.x=ad
}ae[B]=transform.toString();z(W.elements.img,ae);v.call(W);V=ag;U=af}function S(){b=false;window.removeEventListener("mousemove",R);
window.removeEventListener("touchmove",R);window.removeEventListener("mouseup",S);window.removeEventListener("touchend",S);document.body.style[C]="";
u.call(W);t.call(W);T=0}W.elements.overlay.addEventListener("mousedown",Q);W.elements.overlay.addEventListener("touchstart",Q)
}function v(){var R=this,b=R.elements.boundary.getBoundingClientRect(),Q=R.elements.img.getBoundingClientRect();z(R.elements.overlay,{width:Q.width+"px",height:Q.height+"px",top:(Q.top-b.top)+"px",left:(Q.left-b.left)+"px"})
}var g=E(v,500);function t(){var b=this;if(m.call(b)){b.options.update.call(b,b.get())}}function m(){return this.elements.img.offsetHeight>0&&this.elements.img.offsetWidth>0
}function w(){var aa=this,Y=0,V=1.5,T=1,Q={},R=aa.elements.img,ad=aa.elements.zoomer,ab=new N(0,0,T),Z=new O(),U=m.call(aa),S,ac,b,X,W;
if(!U||aa.data.bound){return}aa.data.bound=true;Q[B]=ab.toString();Q[A]=Z.toString();z(R,Q);S=R.getBoundingClientRect();ac=aa.elements.viewport.getBoundingClientRect();
b=aa.elements.boundary.getBoundingClientRect();aa._originalImageWidth=S.width;aa._originalImageHeight=S.height;if(aa.options.enableZoom){X=ac.width/S.width;
W=ac.height/S.height;Y=Math.max(X,W);if(Y>=V){V=Y+1}ad.min=J(Y,2);ad.max=J(V,2);T=Math.max((b.width/S.width),(b.height/S.height));
q.call(aa,T);G(ad)}aa._currentZoom=ab.scale=T;Q[B]=ab.toString();z(R,Q);if(aa.data.points.length){d.call(aa,aa.data.points)}else{e.call(aa)
}v.call(aa)}function d(T){if(T.length!=4){throw"Croppie - Invalid number of points supplied: "+T}var W=this,U=T[2]-T[0],Z=W.elements.viewport.getBoundingClientRect(),b=W.elements.boundary.getBoundingClientRect(),aa={left:Z.left-b.left,top:Z.top-b.top},V=Z.width/U,S=T[1],R=T[0],Y=(-1*T[1])+aa.top,X=(-1*T[0])+aa.left,Q={};
Q[A]=R+"px "+S+"px";Q[B]=new N(X,Y,V).toString();z(W.elements.img,Q);q.call(W,V);W._currentZoom=V}function e(){var S=this,R=S.elements.img.getBoundingClientRect(),U=S.elements.viewport.getBoundingClientRect(),b=S.elements.boundary.getBoundingClientRect(),V=U.left-b.left,W=U.top-b.top,X=V-((R.width-U.width)/2),Q=W-((R.height-U.height)/2),T=new N(X,Q,S._currentZoom);
z(S.elements.img,B,T.toString())}function c(Q,b){var T=this,U,R=[];if(typeof(Q)==="string"){U=Q;Q={}}else{if(Array.isArray(Q)){R=Q.slice()
}else{if(typeof(Q)=="undefined"&&T.data.url){w.call(T);t.call(T);return null}else{U=Q.url;R=Q.points||[]}}}T.data.bound=false;
T.data.url=U||T.data.url;T.data.points=(R||T.data.points).map(function(V){return parseFloat(V)});var S=M(U,T.elements.img);S.then(function(){w.call(T);
t.call(T);if(b){b()}});return S}function J(Q,b){return parseFloat(Q).toFixed(b||0)}function i(){var R=this,b=R.elements.img.getBoundingClientRect(),S=R.elements.viewport.getBoundingClientRect(),T=S.left-b.left,V=S.top-b.top,U=T+S.width,W=V+S.height,Q=R._currentZoom;
if(Q===Infinity||isNaN(Q)){Q=1}T=Math.max(0,T/Q);V=Math.max(0,V/Q);U=Math.max(0,U/Q);W=Math.max(0,W/Q);return{points:[J(T),J(V),J(U),J(W)],zoom:Q}
}function p(Q){var T=this,b=i.call(T),R=Q||{type:"canvas",size:"viewport"},V=(typeof(R)==="string"?R:R.type),U=R.size||"viewport",W,S;
if(U==="viewport"){W=T.elements.viewport.getBoundingClientRect();b.outputWidth=W.width;b.outputHeight=W.height}b.circle=T.options.viewport.type==="circle";
b.url=T.data.url;S=new Promise(function(Y,X){if(V==="canvas"){M(b.url).then(function(Z){Y(K(Z,b))})}else{Y(L(b))}});return S}function o(){console.warn("Croppie.refresh() is deprecated.  Please use Croppie.bind() without any arguments instead.  refresh() will be removed in a later release.");
w.call(this)}function h(){var b=this;b.element.removeChild(b.elements.boundary);if(b.options.enableZoom){b.element.removeChild(b.elements.zoomerWrap)
}delete b.elements}if(this.jQuery){var a=this.jQuery;a.fn.croppie=function(Q){var R=typeof Q;if(R==="string"){var b=Array.prototype.slice.call(arguments,1);
var S=a(this).data("croppie");if(Q==="get"){return S.get()}else{if(Q==="result"){return S.result.apply(S,b)}}return this.each(function(){var T=a(this).data("croppie");
if(!T){return}var U=T[Q];if(a.isFunction(U)){U.apply(T,b);if(Q==="destroy"){a(this).removeData("croppie")}}else{throw"Croppie "+Q+" method not found"
}})}else{return this.each(function(){var T=new y(this,Q);a(this).data("croppie",T)})}}}function y(b,Q){this.element=b;this.options=F({},y.defaults,Q);
if(typeof(Q.showZoom)!="undefined"){this.options.enableZoom=this.options.showZoomer=Q.showZoom}f.call(this)}y.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},customClass:"",showZoomer:true,enableZoom:true,mouseWheelZoom:true,update:function(){}};
F(y.prototype,{bind:function(Q,b){return c.call(this,Q,b)},get:function(){return i.call(this)},result:function(b){return p.call(this,b)
},refresh:function(){return o.call(this)},setZoom:function(b){q.call(this,b);G(this.elements.zoomer)},destroy:function(){return h.call(this)
}});I.Croppie=window.Croppie=y}));
//
// source/angular/directives/croppie.js
//
"use strict";angular.module("allrecipes").directive("croppie",["ar_services_environment","$window",function(b,a){return{restrict:"E",replace:false,templateUrl:b.scriptServerUrl+"assets/source/angular/templates/croppie.html",scope:{cropWidth:"=",cropHeight:"=",displayWidth:"=",displayHeight:"=",margin:"=",customClass:"=",onBeginCrop:"=",onEndCrop:"=",src:"=",imagename:"="},link:function(f,e,c){var d;
f.isCroppieShown=false;f.loadImageForCrop=function(h){if(d!==undefined){d.destroy()}var g=$(e).find(".croppie-container")[0];
d=new Croppie(g,{viewport:{width:f.cropWidth,height:f.cropHeight},boundary:{width:f.displayWidth,height:f.displayHeight},margin:f.margin,customClass:f.customClass||"",showZoom:false,mouseWheelZoom:false});
return d.bind({url:h})};f.$watch("src",function(g){if(g){f.isCroppieShown=true;f.loadImageForCrop(g)}else{f.isCroppieShown=false
}},true);if(!a.pubsub.isListening("CoverPhoto.Crop","Croppie.Directive")){a.pubsub.listen("CoverPhoto.Crop","Croppie.Directive",function(){return d.result({type:"canvas",size:"original"}).then(function(g){f.onEndCrop(g,f.imagename)
})})}}}}]);
//
// source/angular/services/local-offers-service.js
//
"use strict";angular.module("allrecipes").factory("ar_services_local_offers",["$q","$window","$timeout","$rootScope","$sce","$filter","perishableSessionStorage","ar_localOffers_search_terms_service","ar_gsapi_service",function(b,f,e,c,d,a,J,F,g){var U,l,A=null,N=null,k={},M,Q=15000,R=99,O=10,v,t,D=null,T,H={byRetailerId:{},forAllRetailers:null},K=[],j,I,P,S=false,h;
if(E()){if(f.localStorage){if(f.localStorage.getItem("LocalOffers.SortingOption")){var G=f.localStorage.getItem("LocalOffers.SortingOption");
S=(G==="MostDeals")}}if(f.pubsub){f.pubsub.listen("JqueryCarousel.GoTo","",function(V){if(S){j=l[V].id}else{j=U[V].id}c.$broadcast("LocalOffers.RetailerChanged",j)
})}}function n(V){g.ensureGSAPI();v=b.defer();if(J.getObj("GrocerServer.Retailers")){A=J.getObj("GrocerServer.Retailers");N=A.map(function(W){return W.id
});m()}else{f.gsapi.location.getRetailerLocation(angular.extend({radius:"20",externalId:h},V),z);T=e(function(){v.reject("Error: Timeout exceeded waiting for gsapi.location.getRetailerLocation")
},Q)}return v.promise}function z(V){e.cancel(T);if(typeof V.retailers!=="undefined"){if(V.retailers.length===0){v.reject("Error: No retailers found")
}J.setObj("GrocerServer.Retailers",V.retailers);A=V.retailers;N=V.retailers.map(function(W){return W.id});m()}else{A=N=U=[];l=null;
v.reject("Error: No retailers found")}}function u(V){var W=[];W=V.recipes.map(function(X){return X.recipeIngredients}).reduce(function(Y,X){return Y.concat(X)
}).filter(function(X){return X.promotions}).map(function(X){X.promotions.forEach(function(Y){Y.recipeIngredientId=X.recipeIngredientId;
Y.arId=X.externalId});return X.promotions});if(W&&W.length>0){W=W.reduce(function(Y,X){return Y.concat(X)})}return W}function x(W){W=W||"";
I={zipCode:W};if(W.length>4){return n(I)}var V=b.defer();V.reject({msg:"zip code invalid"});return V.promise}function w(W,X){W=W||"";
X=X||"";if(W.length&&X.length){I={latitude:W,longitude:X};return n(I)}var V=b.defer();V.reject({msg:"Either lat or long is invalid"});
return V.promise}function L(W){var V=Math.random()*1000000|0;W=W.trim();W=W.replace(/\[RANDOM\]/,V);W=W.replace(/RANDOM/,V);W=W.replace(/\[RANDOMNUMBER\]/,V);
W=W.replace(/\[TIMESTAMP\]/,Date.now());return W}function o(W){var V="";if(W&&W.promotionPixel&&W.promotionPixel.length){var V=W.promotionPixel.filter(function(X){return X.pixelAction==="click"
}).map(function(X){return X.pixelUrl})}return V}function p(V){var W="";if(V&&V.displayType&&V.displayType.length&&V.promotionPixel.length){var W=V.promotionPixel.filter(function(X){return X.pixelAction==="impression"
}).map(function(X){return L(X.pixelUrl)})}return W}function C(){return J.getObj("LocalOffers.UserToggleEnabled")!=null?J.getObj("LocalOffers.UserToggleEnabled"):true
}function B(W){var V;e.cancel(T);if(!W||!W.recipes){if(v){v.reject("Error: No recipes received from recipe.getRecipeInformationByExternalId");
return}}var ae=u(W);U=[];var ad=window.moment();A.forEach(function(af){ae.forEach(function(ah){var ag=window.moment(ah.expirationDate).add("hours",23).add("minutes",59);
if($.inArray(af.id,ah.retailerLocationIdList)>=0&&ad._d<ag._d){af.promotions=af.promotions||[];af.smuCount=af.smuCount||0;if($.inArray(ah,af.promotions)<0){if(ah.displayType.length>0&&af.smuCount<R){af.smuCount++;
af.promotions.push(ah)}else{af.promotions.push(ah)}}}})});U=A.filter(function(af){return af.promotions!==undefined&&af.promotions.length>0
});U=U.splice(0,O);l=a("orderBy")(U,"name");l=a("orderBy")(l,function(af){return af.promotions.length},true);if(U.length>0){if(S){j=l[0].id
}else{j=U[0].id}}var Y;for(var aa=0;aa<U.length;aa++){k[U[aa].id]=[];M={};Y=[];for(var ab=0;ab<U[aa].promotions.length;ab++){V=U[aa].promotions[ab];
if(Y.indexOf(V.id)==-1){var Z=f.moment(V.expirationDate).add("days",1).from(new Date());if(!M[V.arId]){M[V.arId]=[]}var X={arId:V.arId,description:V.defaultDisplayDescription,price:d.trustAsHtml(V.title),priceWithExpiration:d.trustAsHtml(V.title+" - expires "+Z),imageUrl:V.originalImagUrl,expirationDate:V.expirationDate,clickPixels:o(V),actionUrl:V.actionUrl,clickThroughText:d.trustAsHtml(V.clickThroughText),isBIU:V.displayType.length>0};
if(X.isBIU){X.moatUrl=r(V.externalId)}X.originalTrackingUrls=[];if(V.displayType&&V.displayType.length&&V.promotionPixel&&V.promotionPixel.length){for(var ac=0;
ac<V.promotionPixel.length;ac++){if(V.promotionPixel[ac].pixelAction==="impression"){X.originalTrackingUrls.push(V.promotionPixel[ac].pixelUrl)
}}}Y.push(V.id);M[V.arId].push(X)}}k[U[aa].id]=M}if(U.length===0){v.reject("Error, no promotions found")}c.$broadcast("LocalOffers.RetailerChanged",j);
v.resolve(U);q(h)}function m(){P=angular.extend({retailerLocationIds:N,offset:"0",maxResult:"100"},I);var V=angular.extend({externalIds:[h],externalRecipeUrl:$("link[rel='canonical']").length>0?$("link[rel='canonical']").attr("href"):$("[data-local-offers-recipe-url]").data("local-offers-recipe-url"),version:f.dataLayer.page.pageInfo.version},P);
window.gsapi.recipe.getRecipeInformationByExternalId(V,B);T=e(function(){v.reject("Error: Timed out while waiting for GSAPI.getRecipeInformationByExternalId")
},Q)}function i(){J.removeObj("GrocerServer.Retailers")}function y(){var V=U;if(S){V=l}return V}function E(){var V;if(f.Toggles.LocalOffersSuppressSponsored){V=f.adService.pageTargetingValues.type.indexOf("sponsored_")===-1
}else{V=true}return f.Toggles.AngularLocalOffers&&V}function r(W){var X=null;var V=g.getClientIdForEnvironment();if(V&&W){X="https://z.moatads.com/meredithgroceryserver355539571021/moatad.js#moatClientLevel1="+V+"&moatClientLevel2="+W+"&moatClientLevel3=&moatClientLevel4=&moatClientSlicer1=SITE&moatClientSlicer2=PLACEMENT"
}return X}function q(V){if(!P){P=angular.extend({retailerLocationIds:N,offset:"0",maxResult:"100"},I)}var X=angular.extend({externalId:V},P);
var W=F.getLatLong();if(W){X.latitude=W.lat;X.longitude=W.lon}function Y(Z){var aa;H={byRetailerId:{},forAllRetailers:null};if(Z.categories){Z.categories.forEach(function(ab){if(ab.searchResult){ab.searchResult.forEach(function(ac){if(ac.upcItem&&ac.upcItem.promotions){ac.upcItem.promotions.forEach(function(ae){if(ae.contentType!="Product Card"){if(ae.retailerLocationIdList){for(var ad=0;
ad<ae.retailerLocationIdList.length;ad++){aa=ae.retailerLocationIdList[ad];H.byRetailerId[""+aa]=ae}}else{H.forAllRetailers=ae
}}})}})}})}c.$broadcast("LocalOffers.RetailerChanged",j)}window.gsapi.search.getContentPairings(X,Y)}function s(){var V=F.getBestLocator();
t=b.defer();g.ensureGSAPI();var X;switch(V){case"Zip":var aa=F.getZipCode();X={zipCode:aa};break;case"LatLong":var Z=F.getLatLong();
X={latitude:Z.lat,longitude:Z.lon};break}var Y=angular.extend({externalId:h,offset:0,maxResult:100,contentTypes:["product card"]},X);
function W(ab){if(ab.categories){ab.categories.forEach(function(ac){if(ac.searchResult){ac.searchResult.forEach(function(ad){if(ad.upcItem&&ad.upcItem.promotions){ad.upcItem.promotions.forEach(function(ae){K.push(ae)
})}})}})}if(K.length){angular.forEach(K,function(ad,ac){ad.randomizedTrackingPixels=p(ad);ad.rawClickPixels=o(ad)});t.resolve(K)
}else{t.reject("No Product Cards found")}}f.gsapi.recipe.getProductCards(Y,W);return t.promise}return{setArRecipeID:function(V){h=V
},setRetailers:function(V){gsapiCallback(V)},getRetailersByLatLong:w,getRetailersByZip:x,getRetailersByIP:function(X){var V=b.defer();
g.ensureGSAPI();f.gsapi.ip=X;function W(Y){x(Y).then(function(Z){localStorage.setItem("LocalOffers.UserZip",Y);V.resolve(Z)},function(Z){V.reject(Z)
})}f.gsapi.grocery.getZipCode(W);return V.promise},getDealsByRetailerID:function(W){var V="Error: client is requesting deals for a retailerId we don't have: "+W;
if(k[W]){return k[W]}else{return V}},getRetailersList:function(){return y()},toggleDeals:function(){D=!D;J.setObj("LocalOffers.UserToggleEnabled",D)
},localOffersUserEnabled:function(){if(D==null){D=C()}return D},localOffersFeatureEnabled:E,clearStoredRetailers:i,getMWS:function(W){var X=null,V=""+(W||j);
if(V&&H.byRetailerId[V]){X=H.byRetailerId[V]}else{if(H.forAllRetailers){X=H.forAllRetailers}}if(angular.isObject(X)){X.trackingPixels=p(X);
X.clickPixels=o(X);X.moatUrl=r(X.externalId)}return X},getProductCards:s,replacePlaceholdersWithValues:L,setSortOption:function(V){S=(V==="MostDeals");
localStorage.setItem("LocalOffers.SortingOption",V)},randomizeTrackingPixels:function(){var V;angular.forEach(k,function(aa,X){for(var Y in aa){for(var W=0;
W<aa[Y].length;W++){V=aa[Y][W];V.trackingPixels=[];for(var Z=0;Z<V.originalTrackingUrls.length;Z++){V.trackingPixels.push(L(V.originalTrackingUrls[Z]))
}}}})}}}]);
//
// source/angular/services/localOffers-searchTerms-service.js
//
"use strict";angular.module("allrecipes").factory("ar_localOffers_search_terms_service",["$window","ar_gsapi_service",function(a,b){var c;
return{getBestLocator:function(){var d="IpAddress";if(a.localStorage.getItem("LocalOffers.UserZip")){d="Zip"}else{if(a.localStorage.getItem("LocalOffers.Lat")&&a.localStorage.getItem("LocalOffers.Lon")){d="LatLong"
}}return d},getZipCode:function(){return a.localStorage.getItem("LocalOffers.UserZip")},setZipCode:function(d){a.localStorage.setItem("LocalOffers.UserZip",d);
a.localStorage.setItem("LocalOffers.TimeStamp",Date.now())},getLatLong:function(){if(a.localStorage.getItem("LocalOffers.Lat")&&a.localStorage.getItem("LocalOffers.Lon")){return{lat:a.localStorage.getItem("LocalOffers.Lat"),lon:a.localStorage.getItem("LocalOffers.Lon")}
}return null},setLatLong:function(d,e){a.localStorage.setItem("LocalOffers.Lat",d);a.localStorage.setItem("LocalOffers.Lon",e);
a.localStorage.setItem("LocalOffers.TimeStamp",Date.now())},getLastGeoLocateTimeStamp:function(){return a.localStorage.getItem("LocalOffers.TimeStamp")
},getClientIp:function(){return a.userInformation.clientIp},getZipCodeFromIpAndStoreIt:function(f,d){b.ensureGSAPI();function e(g){a.localStorage.setItem("LocalOffers.UserZip",g);
d(g)}a.gsapi.grocery.getZipCode(e)}}}]);
//
// source/angular/services/gsapi-service.js
//
"use strict";angular.module("allrecipes").factory("ar_gsapi_service",["$window",function(a){function c(){a.loadGsApi();a.gsapi.cid=d()
}var b={phone:"3c76b8ac5867dbf05b4bbd0c54e1ed03",tablet:"ee3975a3dd472846611e50cbdf1e2679",desktop:"bfeb1eb4e751f03bceffaa649e977927",print:"489e9ab043c0ffc26cb47cc80e42cb5a"};
function d(){var e=b.phone;var f=$(window).width();if(a.location.pathname.toLowerCase().indexOf("print/")>0){e=b.print}else{if(f>=1025){e=b.desktop
}else{if(f>=768){e=b.tablet}}}return e}return{ensureGSAPI:c,getClientIdForEnvironment:d}}]);
//
// source/angular/services/perishable-sessionstorage-service.js
//
"use strict";angular.module("allrecipes").factory("perishableSessionStorage",["$window",function(a){var b=a.sessionStorage;return{setObj:function(c,d){if(b&&b.setItem){b.setItem(c,JSON.stringify(d))
}},getObj:function(c){var d=null;if(b&&b.getItem){d=JSON.parse(b.getItem(c))}return d},removeObj:function(c){if(b&&b.removeItem){b.removeItem(c)
}}}}]);
//
// source/angular/controllers/productCardCtrl.js
//
"use strict";angular.module("allrecipes").controller("ar_controllers_ProductCard",["$scope","$attrs","$window","$q","$timeout","$resource","largeNumberDisplayFilter","ar_services_local_offers","ar_services_token","ar_services_environment","internalReferrerLinker",function(d,a,f,b,e,c,m,n,h,g,l){var p=g.url;
var k="";d.haveCtaText=true;d.haveProduct=false;d.haveCook=false;d.isOffSiteVendor=true;d.retailersList=[];d.trackingPixels=[];
d.rawClickPixelUrls=[];d.clickPixels=[];d.formatNumber=function(q){return m(q)};var o=function(u){var v=/^<img\b/i;var w=v.test(u.clickThroughText);
if(w){var q=/\balt=(["'])((?:\\\1|.)*?)\1/.exec(u.clickThroughText);k=q==null?d.haveCtaText=false:q[2]}else{k=u.clickThroughText
}var r=/\ballrecipes\.co/i;d.isOffSiteVendor=!r.test(u.actionUrl);var t={parent:function(){return{index:function(){return -1}}
}};var s={url:u.actionUrl,internalReferrerLink:"productcard"};u.actionUrl=d.isOffSiteVendor?u.actionUrl:l(d,t,s);d.productCard={ctaUrl:u.actionUrl,productImageUrl:u.originalImagUrl,heading:u.defaultDisplayDescription,description:u.additional,storeImage:u.retailer.imageUrl.replace(/\/\d+x\d+\//,"/122x34/"),onSalePrice:u.title,moment:f.moment(u.expirationDate).add("days",1).from(new Date()),arCookUrl:u.listingDeal,ctaText:k};
d.haveCook=!!u.listingDeal&&u.listingDeal.length>0;d.rawClickPixelUrls=u.rawClickPixels;d.trackingPixels=u.randomizedTrackingPixels;
d.haveProduct=true};var j=c(p,{cookid:"@cookid"},{getCookStats:{url:p+"v1/users/:cookid",method:"GET",isArray:false,headers:{Authorization:function(){var q=h.token();
return q}}}});var i=a.arRecipeId;n.setArRecipeID(i);n.getProductCards().then(function(r){if(r.length){o(r[0]);var q=/\d+$/.exec(d.productCard.arCookUrl.slice(0,-1));
if(Array.isArray(q)&&q.length>0){d.cookStats=j.getCookStats({cookid:q[0]},function(t){d.cookStatistics={cookPhoto:t.photo.urls[0].url,cookName:t.name,favoritesCount:d.formatNumber(t.favoritesCount),followersCount:d.formatNumber(t.followersCount),madeRecipesCount:d.formatNumber(t.madeRecipesCount)};
d.haveCook=true;var u={parent:function(){return{index:function(){return -1}}}};var s={url:d.productCard.arCookUrl,internalReferrerLink:"productcard"};
d.productCard.arCookUrl=l(d,u,s)},function(s){d.haveCook=false;console.log("---| Attempting to get cook statistics for the GroceryServer cook failed: "+s)
})}}f.pubsub.broadcast("MasonryGridReload");e(function(){var v=$(".product_card");var t=$(v[0]).css("top");var u=$(v[0]).closest("section").find("article").not(".product_card");
for(var s=0;s<u.length;s++){if($(u[s]).css("top")===t){console.log("~~~ superimposed card found ~~~~~~~~");f.pubsub.broadcast("MasonryGridReload");
break}}},1000)},function(q){console.info(q)});d.addClickPixel=function(){angular.forEach(d.rawClickPixelUrls,function(r,q){d.clickPixels.push(n.replacePlaceholdersWithValues(r))
})}}]);
//
// vendor/jquery/plugins/moment.js
//
(function(ak){var N,ao="2.2.1",ah=Math.round,u,A={},t=(typeof module!=="undefined"&&module.exports),d=/^\/?Date\((\-?\d+)/i,e=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,p=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,D=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,W=/\d\d?/,X=/\d{1,3}/,aa=/\d{3}/,V=/\d{1,4}/,Y=/[+\-]?\d{1,6}/,ad=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ac=/Z|[\+\-]\d\d:?\d\d/i,Z=/T/i,ab=/[\+\-]?\d+(\.\d{1,3})?/,x=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,w="YYYY-MM-DDTHH:mm:ssZ",y=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],U=/([\+\-]|\d\d)/gi,ae="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),am={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},al={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",W:"isoweek",M:"month",y:"year"},n={},R="DDD w W M D d".split(" "),S="M D H h m s w W".split(" "),q={M:function(){return this.month()+1
},MMM:function(i){return this.lang().monthsShort(this,i)},MMMM:function(i){return this.lang().months(this,i)},D:function(){return this.date()
},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(i){return this.lang().weekdaysMin(this,i)
},ddd:function(i){return this.lang().weekdaysShort(this,i)},dddd:function(i){return this.lang().weekdays(this,i)},w:function(){return this.week()
},W:function(){return this.isoWeek()},YY:function(){return B(this.year()%100,2)},YYYY:function(){return B(this.year(),4)},YYYYY:function(){return B(this.year(),5)
},gg:function(){return B(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return B(this.weekYear(),5)
},GG:function(){return B(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return B(this.isoWeekYear(),5)
},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)
},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12
},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return ~~(this.milliseconds()/100)},SS:function(){return B(~~(this.milliseconds()/10),2)
},SSS:function(){return B(this.milliseconds(),3)},Z:function(){var i=-this.zone(),aq="+";if(i<0){i=-i;aq="-"}return aq+B(~~(i/60),2)+":"+B(~~i%60,2)
},ZZ:function(){var i=-this.zone(),aq="+";if(i<0){i=-i;aq="-"}return aq+B(~~(10*i/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()
},X:function(){return this.unix()}};function T(aq,i){return function(ar){return B(aq.call(this,ar),i)}}function Q(i,aq){return function(ar){return this.lang().ordinal(i.call(this,ar),aq)
}}while(R.length){u=R.pop();q[u+"o"]=Q(q[u],u)}while(S.length){u=S.pop();q[u+u]=T(q[u],2)}q.DDDD=T(q.DDD,3);function z(){}function O(i){m(this,i)
}function k(aq){var ay=aq.years||aq.year||aq.y||0,av=aq.months||aq.month||aq.M||0,ax=aq.weeks||aq.week||aq.w||0,i=aq.days||aq.day||aq.d||0,ar=aq.hours||aq.hour||aq.h||0,au=aq.minutes||aq.minute||aq.m||0,aw=aq.seconds||aq.second||aq.s||0,at=aq.milliseconds||aq.millisecond||aq.ms||0;
this._input=aq;this._milliseconds=+at+aw*1000+au*60000+ar*3600000;this._days=+i+ax*7;this._months=+av+ay*12;this._data={};this._bubble()
}function m(aq,ar){for(var at in ar){if(ar.hasOwnProperty(at)){aq[at]=ar[at]}}return aq}function a(i){if(i<0){return Math.ceil(i)
}else{return Math.floor(i)}}function B(i,ar){var aq=i+"";while(aq.length<ar){aq="0"+aq}return aq}function b(ax,aq,au,at){var av=aq._milliseconds,i=aq._days,ay=aq._months,aw,ar;
if(av){ax._d.setTime(+ax._d+av*au)}if(i||ay){aw=ax.minute();ar=ax.hour()}if(i){ax.date(ax.date()+i*au)}if(ay){ax.month(ax.month()+ay*au)
}if(av&&!at){N.updateOffset(ax)}if(i||ay){ax.minute(aw);ax.hour(ar)}}function v(i){return Object.prototype.toString.call(i)==="[object Array]"
}function f(aq,ar){var av=Math.min(aq.length,ar.length),aw=Math.abs(aq.length-ar.length),at=0,au;for(au=0;au<av;au++){if(~~aq[au]!==~~ar[au]){at++
}}return at+aw}function P(i){return i?al[i]||i.toLowerCase().replace(/(.)s$/,"$1"):i}m(z.prototype,{set:function(aq){var at,ar;
for(ar in aq){at=aq[ar];if(typeof at==="function"){this[ar]=at}else{this["_"+ar]=at}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]
},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]
},monthsParse:function(at){var aq,ar,au;if(!this._monthsParse){this._monthsParse=[]}for(aq=0;aq<12;aq++){if(!this._monthsParse[aq]){ar=N.utc([2000,aq]);
au="^"+this.months(ar,"")+"|^"+this.monthsShort(ar,"");this._monthsParse[aq]=new RegExp(au.replace(".",""),"i")}if(this._monthsParse[aq].test(at)){return aq
}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]
},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]
},weekdaysParse:function(au){var aq,ar,at;if(!this._weekdaysParse){this._weekdaysParse=[]}for(aq=0;aq<7;aq++){if(!this._weekdaysParse[aq]){ar=N([2000,1]).day(aq);
at="^"+this.weekdays(ar,"")+"|^"+this.weekdaysShort(ar,"")+"|^"+this.weekdaysMin(ar,"");this._weekdaysParse[aq]=new RegExp(at.replace(".",""),"i")
}if(this._weekdaysParse[aq].test(au)){return aq}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(i){var aq=this._longDateFormat[i];
if(!aq&&this._longDateFormat[i.toUpperCase()]){aq=this._longDateFormat[i.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(ar){return ar.slice(1)
});this._longDateFormat[i]=aq}return aq},isPM:function(i){return((i+"").toLowerCase().charAt(0)==="p")},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(i,ar,aq){if(i>11){return aq?"pm":"PM"
}else{return aq?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(i,aq){var ar=this._calendar[i];
return typeof ar==="function"?ar.apply(aq):ar},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(aq,au,at,i){var ar=this._relativeTime[at];
return(typeof ar==="function")?ar(aq,au,at,i):ar.replace(/%d/i,aq)},pastFuture:function(i,ar){var aq=this._relativeTime[i>0?"future":"past"];
return typeof aq==="function"?aq(ar):aq.replace(/%s/i,ar)},ordinal:function(i){return this._ordinal.replace("%d",i)},_ordinal:"%d",preparse:function(i){return i
},postformat:function(i){return i},week:function(i){return ap(i,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}});function C(i,aq){aq.abbr=i;
if(!A[i]){A[i]=new z()}A[i].set(aq);return A[i]}function an(i){delete A[i]}function r(aq){if(!aq){return N.fn._lang}if(!A[aq]&&t){try{require("./lang/"+aq)
}catch(i){return N.fn._lang}}return A[aq]||N.fn._lang}function ag(i){if(i.match(/\[.*\]/)){return i.replace(/^\[|\]$/g,"")}return i.replace(/\\/g,"")
}function K(ar){var aq=ar.match(p),at,au;for(at=0,au=aq.length;at<au;at++){if(q[aq[at]]){aq[at]=q[aq[at]]}else{aq[at]=ag(aq[at])
}}return function(i){var av="";for(at=0;at<au;at++){av+=aq[at] instanceof Function?aq[at].call(i,ar):aq[at]}return av}}function o(aq,i){i=l(i,aq.lang());
if(!n[i]){n[i]=K(i)}return n[i](aq)}function l(aq,at){var ar=5;function au(i){return at.longDateFormat(i)||i}while(ar--&&(D.lastIndex=0,D.test(aq))){aq=aq.replace(D,au)
}return aq}function s(aq,i){switch(aq){case"DDDD":return aa;case"YYYY":return V;case"YYYYY":return Y;case"S":case"SS":case"SSS":case"DDD":return X;
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return ad;case"a":case"A":return r(i._l)._meridiemParse;case"X":return ab;
case"Z":case"ZZ":return ac;case"T":return Z;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return W;
default:return new RegExp(aq.replace("\\",""))}}function aj(ar){var at=(ac.exec(ar)||[])[0],aq=(at+"").match(U)||["-",0,0],i=+(aq[1]*60)+~~aq[2];
return aq[0]==="+"?-i:i}function c(au,at,aq){var i,ar=aq._a;switch(au){case"M":case"MM":if(at!=null){ar[1]=~~at-1}break;case"MMM":case"MMMM":i=r(aq._l).monthsParse(at);
if(i!=null){ar[1]=i}else{aq._isValid=false}break;case"D":case"DD":if(at!=null){ar[2]=~~at}break;case"DDD":case"DDDD":if(at!=null){ar[1]=0;
ar[2]=~~at}break;case"YY":ar[0]=~~at+(~~at>68?1900:2000);break;case"YYYY":case"YYYYY":ar[0]=~~at;break;case"a":case"A":aq._isPm=r(aq._l).isPM(at);
break;case"H":case"HH":case"h":case"hh":ar[3]=~~at;break;case"m":case"mm":ar[4]=~~at;break;case"s":case"ss":ar[5]=~~at;break;
case"S":case"SS":case"SSS":ar[6]=~~(("0."+at)*1000);break;case"X":aq._d=new Date(parseFloat(at)*1000);break;case"Z":case"ZZ":aq._useUTC=true;
aq._tzm=aj(at);break}if(at==null){aq._isValid=false}}function h(aq){var au,at,av=[],ar;if(aq._d){return}ar=g(aq);for(au=0;au<3&&aq._a[au]==null;
++au){aq._a[au]=av[au]=ar[au]}for(;au<7;au++){aq._a[au]=av[au]=(aq._a[au]==null)?(au===2?1:0):aq._a[au]}av[3]+=~~((aq._tzm||0)/60);
av[4]+=~~((aq._tzm||0)%60);at=new Date(0);if(aq._useUTC){at.setUTCFullYear(av[0],av[1],av[2]);at.setUTCHours(av[3],av[4],av[5],av[6])
}else{at.setFullYear(av[0],av[1],av[2]);at.setHours(av[3],av[4],av[5],av[6])}aq._d=at}function j(i){var aq=i._i;if(i._d){return
}i._a=[aq.years||aq.year||aq.y,aq.months||aq.month||aq.M,aq.days||aq.day||aq.d,aq.hours||aq.hour||aq.h,aq.minutes||aq.minute||aq.m,aq.seconds||aq.second||aq.s,aq.milliseconds||aq.millisecond||aq.ms];
h(i)}function g(i){var aq=new Date();if(i._useUTC){return[aq.getUTCFullYear(),aq.getUTCMonth(),aq.getUTCDate()]}else{return[aq.getFullYear(),aq.getMonth(),aq.getDate()]
}}function H(aq){var at=r(aq._l),av=""+aq._i,ar,au,aw;aw=l(aq._f,at).match(p);aq._a=[];for(ar=0;ar<aw.length;ar++){au=(s(aw[ar],aq).exec(av)||[])[0];
if(au){av=av.slice(av.indexOf(au)+au.length)}if(q[aw[ar]]){c(aw[ar],au,aq)}}if(av){aq._il=av}if(aq._isPm&&aq._a[3]<12){aq._a[3]+=12
}if(aq._isPm===false&&aq._a[3]===12){aq._a[3]=0}h(aq)}function G(ar){var aw,ax,aq,av=99,au,at;for(au=0;au<ar._f.length;au++){aw=m({},ar);
aw._f=ar._f[au];H(aw);ax=new O(aw);at=f(aw._a,ax.toArray());if(ax._il){at+=ax._il.length}if(at<av){av=at;aq=ax}}m(ar,aq)}function F(aq){var ar,au=aq._i,at=x.exec(au);
if(at){aq._f="YYYY-MM-DD"+(at[2]||" ");for(ar=0;ar<4;ar++){if(y[ar][1].exec(au)){aq._f+=y[ar][0];break}}if(ac.exec(au)){aq._f+=" Z"
}H(aq)}else{aq._d=new Date(au)}}function E(i){var aq=i._i,ar=d.exec(aq);if(aq===ak){i._d=new Date()}else{if(ar){i._d=new Date(+ar[1])
}else{if(typeof aq==="string"){F(i)}else{if(v(aq)){i._a=aq.slice(0);h(i)}else{if(aq instanceof Date){i._d=new Date(+aq)}else{if(typeof(aq)==="object"){j(i)
}else{i._d=new Date(aq)}}}}}}}function ai(at,ar,au,i,aq){return aq.relativeTime(ar||1,!!au,at,i)}function af(au,ax,at){var aw=ah(Math.abs(au)/1000),av=ah(aw/60),ar=ah(av/60),aq=ah(ar/24),ay=ah(aq/365),i=aw<45&&["s",aw]||av===1&&["m"]||av<45&&["mm",av]||ar===1&&["h"]||ar<22&&["hh",ar]||aq===1&&["d"]||aq<=25&&["dd",aq]||aq<=45&&["M"]||aq<345&&["MM",ah(aq/30)]||ay===1&&["y"]||["yy",ay];
i[2]=ax;i[3]=au>0;i[4]=at;return ai.apply({},i)}function ap(av,at,au){var ar=au-at,aq=au-av.day(),i;if(aq>ar){aq-=7}if(aq<ar-7){aq+=7
}i=N(av).add("d",aq);return{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}function M(i){var ar=i._i,aq=i._f;if(ar===null||ar===""){return null
}if(typeof ar==="string"){i._i=ar=r().preparse(ar)}if(N.isMoment(ar)){i=m({},ar);i._d=new Date(+ar._d)}else{if(aq){if(v(aq)){G(i)
}else{H(i)}}else{E(i)}}return new O(i)}N=function(aq,i,ar){return M({_i:aq,_f:i,_l:ar,_isUTC:false})};N.utc=function(aq,i,ar){return M({_useUTC:true,_isUTC:true,_l:ar,_i:aq,_f:i}).utc()
};N.unix=function(i){return N(i*1000)};N.duration=function(aq,au){var ar=N.isDuration(aq),at=(typeof aq==="number"),i=(ar?aq._input:(at?{}:aq)),av=e.exec(aq),ax,aw;
if(at){if(au){i[au]=aq}else{i.milliseconds=aq}}else{if(av){ax=(av[1]==="-")?-1:1;i={y:0,d:~~av[2]*ax,h:~~av[3]*ax,m:~~av[4]*ax,s:~~av[5]*ax,ms:~~av[6]*ax}
}}aw=new k(i);if(ar&&aq.hasOwnProperty("_lang")){aw._lang=aq._lang}return aw};N.version=ao;N.defaultFormat=w;N.updateOffset=function(){};
N.lang=function(i,aq){if(!i){return N.fn._lang._abbr}i=i.toLowerCase();i=i.replace("_","-");if(aq){C(i,aq)}else{if(aq===null){an(i);
i="en"}else{if(!A[i]){r(i)}}}N.duration.fn._lang=N.fn._lang=r(i)};N.langData=function(i){if(i&&i._lang&&i._lang._abbr){i=i._lang._abbr
}return r(i)};N.isMoment=function(i){return i instanceof O};N.isDuration=function(i){return i instanceof k};m(N.fn=O.prototype,{clone:function(){return N(this)
},valueOf:function(){return +this._d+((this._offset||0)*60000)},unix:function(){return Math.floor(+this/1000)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return o(N(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
},toArray:function(){var i=this;return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]},isValid:function(){if(this._isValid==null){if(this._a){this._isValid=!f(this._a,(this._isUTC?N.utc(this._a):N(this._a)).toArray())
}else{this._isValid=!isNaN(this._d.getTime())}}return !!this._isValid},invalidAt:function(){var at,aq=this._a,ar=(this._isUTC?N.utc(this._a):N(this._a)).toArray();
for(at=6;at>=0&&aq[at]===ar[at];--at){}return at},utc:function(){return this.zone(0)},local:function(){this.zone(0);this._isUTC=false;
return this},format:function(i){var aq=o(this,i||N.defaultFormat);return this.lang().postformat(aq)},add:function(aq,ar){var i;
if(typeof aq==="string"){i=N.duration(+ar,aq)}else{i=N.duration(aq,ar)}b(this,i,1);return this},subtract:function(aq,ar){var i;
if(typeof aq==="string"){i=N.duration(+ar,aq)}else{i=N.duration(aq,ar)}b(this,i,-1);return this},diff:function(ar,av,i){var au=this._isUTC?N(ar).zone(this._offset||0):N(ar).local(),aw=(this.zone()-au.zone())*60000,aq,at;
av=P(av);if(av==="year"||av==="month"){aq=(this.daysInMonth()+au.daysInMonth())*43200000;at=((this.year()-au.year())*12)+(this.month()-au.month());
at+=((this-N(this).startOf("month"))-(au-N(au).startOf("month")))/aq;at-=((this.zone()-N(this).startOf("month").zone())-(au.zone()-N(au).startOf("month").zone()))*60000/aq;
if(av==="year"){at=at/12}}else{aq=(this-au);at=av==="second"?aq/1000:av==="minute"?aq/60000:av==="hour"?aq/3600000:av==="day"?(aq-aw)/86400000:av==="week"?(aq-aw)/604800000:aq
}return i?at:a(at)},from:function(i,aq){return N.duration(this.diff(i)).lang(this.lang()._abbr).humanize(!aq)},fromNow:function(i){return this.from(N(),i)
},calendar:function(){var i=this.diff(N().zone(this.zone()).startOf("day"),"days",true),aq=i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse";
return this.format(this.lang().calendar(aq,this))},isLeapYear:function(){var i=this.year();return(i%4===0&&i%100!==0)||i%400===0
},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone())},day:function(aq){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(aq!=null){if(typeof aq==="string"){aq=this.lang().weekdaysParse(aq);if(typeof aq!=="number"){return this}}return this.add({d:aq-i})
}else{return i}},month:function(aq){var ar=this._isUTC?"UTC":"",i;if(aq!=null){if(typeof aq==="string"){aq=this.lang().monthsParse(aq);
if(typeof aq!=="number"){return this}}i=this.date();this.date(1);this._d["set"+ar+"Month"](aq);this.date(Math.min(i,this.daysInMonth()));
N.updateOffset(this);return this}else{return this._d["get"+ar+"Month"]()}},startOf:function(i){i=P(i);switch(i){case"year":this.month(0);
case"month":this.date(1);case"week":case"isoweek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);
case"second":this.milliseconds(0)}if(i==="week"){this.weekday(0)}else{if(i==="isoweek"){this.isoWeekday(1)}}return this},endOf:function(i){i=P(i);
return this.startOf(i).add((i==="isoweek"?"week":i),1).subtract("ms",1)},isAfter:function(i,aq){aq=typeof aq!=="undefined"?aq:"millisecond";
return +this.clone().startOf(aq)>+N(i).startOf(aq)},isBefore:function(i,aq){aq=typeof aq!=="undefined"?aq:"millisecond";return +this.clone().startOf(aq)<+N(i).startOf(aq)
},isSame:function(i,aq){aq=typeof aq!=="undefined"?aq:"millisecond";return +this.clone().startOf(aq)===+N(i).startOf(aq)},min:function(i){i=N.apply(null,arguments);
return i<this?this:i},max:function(i){i=N.apply(null,arguments);return i>this?this:i},zone:function(i){var aq=this._offset||0;
if(i!=null){if(typeof i==="string"){i=aj(i)}if(Math.abs(i)<16){i=i*60}this._offset=i;this._isUTC=true;if(aq!==i){b(this,N.duration(aq-i,"m"),1,true)
}}else{return this._isUTC?aq:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""
},hasAlignedHourOffset:function(i){if(!i){i=0}else{i=N(i).zone()}return(this.zone()-i)%60===0},daysInMonth:function(){return N.utc([this.year(),this.month()+1,0]).date()
},dayOfYear:function(aq){var i=ah((N(this).startOf("day")-N(this).startOf("year"))/86400000)+1;return aq==null?i:this.add("d",(aq-i))
},weekYear:function(i){var aq=ap(this,this.lang()._week.dow,this.lang()._week.doy).year;return i==null?aq:this.add("y",(i-aq))
},isoWeekYear:function(i){var aq=ap(this,1,4).year;return i==null?aq:this.add("y",(i-aq))},week:function(i){var aq=this.lang().week(this);
return i==null?aq:this.add("d",(i-aq)*7)},isoWeek:function(i){var aq=ap(this,1,4).week;return i==null?aq:this.add("d",(i-aq)*7)
},weekday:function(i){var aq=(this._d.getDay()+7-this.lang()._week.dow)%7;return i==null?aq:this.add("d",i-aq)},isoWeekday:function(i){return i==null?this.day()||7:this.day(this.day()%7?i:i-7)
},get:function(i){i=P(i);return this[i.toLowerCase()]()},set:function(i,aq){i=P(i);this[i.toLowerCase()](aq)},lang:function(i){if(i===ak){return this._lang
}else{this._lang=r(i);return this}}});function L(aq,i){N.fn[aq]=N.fn[aq+"s"]=function(ar){var at=this._isUTC?"UTC":"";if(ar!=null){this._d["set"+at+i](ar);
N.updateOffset(this);return this}else{return this._d["get"+at+i]()}}}for(u=0;u<ae.length;u++){L(ae[u].toLowerCase().replace(/s$/,""),ae[u])
}L("year","FullYear");N.fn.days=N.fn.day;N.fn.months=N.fn.month;N.fn.weeks=N.fn.week;N.fn.isoWeeks=N.fn.isoWeek;N.fn.toJSON=N.fn.toISOString;
m(N.duration.fn=k.prototype,{_bubble:function(){var at=this._milliseconds,aq=this._days,av=this._months,i=this._data,aw,au,ar,ax;
i.milliseconds=at%1000;aw=a(at/1000);i.seconds=aw%60;au=a(aw/60);i.minutes=au%60;ar=a(au/60);i.hours=ar%24;aq+=a(ar/24);i.days=aq%30;
av+=a(aq/30);i.months=av%12;ax=a(av/12);i.years=ax},weeks:function(){return a(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+~~(this._months/12)*31536000000
},humanize:function(ar){var i=+this,aq=af(i,!ar,this.lang());if(ar){aq=this.lang().pastFuture(i,aq)}return this.lang().postformat(aq)
},add:function(aq,ar){var i=N.duration(aq,ar);this._milliseconds+=i._milliseconds;this._days+=i._days;this._months+=i._months;
this._bubble();return this},subtract:function(aq,ar){var i=N.duration(aq,ar);this._milliseconds-=i._milliseconds;this._days-=i._days;
this._months-=i._months;this._bubble();return this},get:function(i){i=P(i);return this[i.toLowerCase()+"s"]()},as:function(i){i=P(i);
return this["as"+i.charAt(0).toUpperCase()+i.slice(1)+"s"]()},lang:N.fn.lang});function J(i){N.duration.fn[i]=function(){return this._data[i]
}}function I(aq,i){N.duration.fn["as"+aq]=function(){return +this/i}}for(u in am){if(am.hasOwnProperty(u)){I(u,am[u]);J(u.toLowerCase())
}}I("Weeks",604800000);N.duration.fn.asMonths=function(){return(+this-this.years()*31536000000)/2592000000+this.years()*12};N.lang("en",{ordinal:function(aq){var i=aq%10,ar=(~~(aq%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";
return aq+ar}});if(t){module.exports=N}if(typeof ender==="undefined"){this["moment"]=N}if(typeof define==="function"&&define.amd){define("moment",[],function(){return N
})}}).call(this);
//
// source/js/local-offers_v1/script_v02.js
//
function loadGsApi(){try{var cv=s3.cookie.getRaw("GS_IRIPANELIST");if((!cv||cv.length<=0)&&(document.location+"").indexOf("groceryserver.com")<0){s3.ajax.encOD("http://allrecipes.groceryserver.com/groceryserver/api/session/serviceBinder.jsp",{callback:function(d){var c;
if(d&&d.echo&&d.echo.length>0){for(var i=0;i<d.echo.length;i++){if((c=d.echo[i]).name=="GS_IRIPANELIST"){s3.cookie.setRaw("GS_IRIPANELIST",c.value,new Date(2015,1,1,1,1,1,1))
}}}}})}}catch(e){}var _globalResponseHandler=null;var s3={elemCache:new Object(),$:function(id,reload){if(!s3.elemCache[id]||reload){var e=document.getElementById(id);
s3.elemCache[id]=e;return e}else{return s3.elemCache[id]}},x$:function(id){s3.elemCache[id]=null},$$:function(id){return s3.$(id,true)
},pos:function(e,m){e=s3.c(e);if(!m){m={x:0,y:0}}var x=0,y=0;while(e){x+=e.offsetLeft;y+=e.offsetTop;try{e=e.offsetParent}catch(ex){e=null
}}return{x:x+m.x,y:y+m.y}},vp:function(){var w=window,d=document;var ox=0,oy=0;if(typeof(w.pageYOffset)=="number"){oy=w.pageYOffset;
ox=w.pageXOffset}else{if(d.body&&(d.body.scrollLeft||d.body.scrollTop)){oy=d.body.scrollTop;ox=d.body.scrollLeft}else{if(d.documentElement&&(d.documentElement.scrollLeft||d.documentElement.scrollTop)){oy=d.documentElement.scrollTop;
ox=d.documentElement.scrollLeft}}}return{w:(w.innerWidth||(d.documentElement.clientWidth||d.body.clientWidth)),h:(w.innerHeight||(d.documentElement.clientHeight||d.body.clientHeight)),x:ox,y:oy}
},modpos:function(p,t){return{x:p.x+t.x,y:p.y+t.y}},cpos:function(d){var vp=s3.vp();return{x:((vp.w/2)-((d.w)/2)+vp.x),y:((vp.h/2)-((d.h)/2)+vp.y),w:d.w,h:d.h}
},dim:function(e){e=s3.c(e);return(!e||!e.offsetWidth)?{w:0,h:0}:{w:e.offsetWidth,h:e.offsetHeight}},absolute:function(e){e=s3.c(e);
if(e.style.position=="absolute"){return}var p=s3.pos(e);var w=e.clientWidth;var h=e.clientHeight;e.style.position="absolute";
e.style.left=(document.all?p.x+1:p.x)+"px";e.style.top=(document.all?p.y+1:p.y)+"px"},inject:function(d,s){for(var p in s){d[p]=s[p]
}return d},extend:function(d,s){for(var p in s){if(!d[p]){d[p]=s[p]}}return d},create:function(id,cname){var e=document.createElement("div");
s3.absolute(e);s3.hide(e);if(cname){e.className=cname}if(id){e.id=id}document.body.insertBefore(e,document.body.childNodes[0]);
return e},img:function(id,src,cname){var e=document.createElement("img");e.src=src;s3.absolute(e);s3.hide(e);if(cname){e.className=cname
}if(id){e.id=id}document.body.insertBefore(e,document.body.childNodes[0]);return e},trim:function(str){return(""+str).replace(/^(\s)*/,"").replace(/(\s)*$/,"")
},empty:function(s){return s==null||s3.trim(s)==""},replaceAll:function(str,s1,s2){return(""+str).split(s1).join(s2)},escapeURI:function(s){var s2=""+s;
try{s2=encodeURIComponent(s2)}catch(ex){s2=escape(s2)}return s2.replace(/%20/g,"+")},getElementsByClassName:function(className,tag,elm){var tc=new RegExp("(^|\\s)"+className+"(\\s|$)");
tag=tag||"*";elm=elm||document;var es=(tag=="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag);var re=[];var l=es.length;for(var i=0;
i<l;i++){if(tc.test(es[i].className)){re.push(es[i])}}return re}};s3.obj=s3.inject(new Object(),{count:0,ects:new Object(),timeout:function(o,f,t){var id=s3.chr.fromNum(this.count++);
this.ects[id]=o;setTimeout('s3.obj.cb("'+id+'","'+f+'")',t)},cb:function(i,f){var o=s3.obj.ects[i];if(o!=null){o[f]();this.ects[i]=null
}}});s3._try=s3.inject(new Object(),{these:function(){for(var i=0,a=arguments;i<a.length;i++){try{return(a[i])()}catch(e){}}return null
}});s3.chr=s3.inject(new Object(),{chrs:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",fromNum:function(n){return this.base(n,10)
},toNum:function(s){return this.from(s,10)},base:function(n,b){var s="";while(n>=b){s=this.chrs.charAt(n%b)+s;n=Math.floor(n/b)
}return this.chrs.charAt(n)+s},from:function(s,b){if(!this.revc){this.revc=new Object();for(var i=0;i<this.chrs.length;i++){this.revc[this.chrs.charAt(i)]=i
}}var r=0,i=0;for(var p=0;i=s.length-p-1,p<s.length;p++){r+=this.revc[s.charAt(p)]*(i>0?Math.pow(b,i):1)}return r},guid:function(){return this.base(new Date().getTime(),62)+s3.rnd.str(8)
}});s3.rnd=s3.inject(new Object(),{num:function(x,y){return(Math.floor(Math.random()*(y-x)))+x},str:function(len){var s="";while(s.length<len){s+=s3.chr.chrs.charAt(this.num(0,62))
}return s}});s3.time=function(){return(new Date()).getTime()};s3.a={ary:function(o){if(o==null){return[]}return typeof(o)!="string"&&o.length!=null?o:[o]
},add:function(a,o){a[a.length]=o},addAll:function(a,a2){if(a){for(var i=0;i<a2.length;i++){a[a.length]=a2[i]}}},insert:function(a,p,o){if(p<0){p=0
}if(p>a.length){p=a.length}for(var i=a.length;i>p;i--){a[i]=a[i-1]}a[p]=o},removeAt:function(a,p){if(p==-1||!a||a.length<=0){return null
}var tmp=a[p];for(var i=p+1;i<a.length;i++){a[i-1]=a[i]}a.length=a.length-1;return tmp},remove:function(a,o){return s3.a.removeAt(a,s3.a.indexOf(a,o))
},indexOf:function(a,tst){for(var i=0;i<a.length;i++){if(a[i]==tst){return i}}return -1},call:function(a,f){if(a&&a.length>0){for(var i in a){f(a[i])
}}},runAll:function(a,f){for(var i=0;i<a.length;i++){f(a[i])}}};s3.ajax=s3.inject(new Object(),{odh:{},encOD:function(u,ha){var rid=s3.ajax.newId();
var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",u+"?!"+rid+"!xx");this.odh[rid]=ha;
document.getElementsByTagName("head")[0].appendChild(s)},count:1,asy:new Object(),callbackOD:function(d){s3.debug("response:"+s3.json.toString(d?d.dat:d));
if(s3.ajax.odh&&s3.ajax.odh[d.rid]){try{if(_globalResponseHandler){_globalResponseHandler(s3.json.toString(d.dat))}}catch(e){}s3.ajax.odh[d.rid].callback(d.dat);
s3.ajax.odh[d.rid]=null}},newId:function(){return s3.chr.fromNum(this.count++)},handle:function(i,h,c){return s3._try.these(function(){if(this.handlers){h[this.handlers[i]](c)
}})}});var _pop=function(s){alert(s3.json.toString(s))};s3.json={toString:function(o){if(typeof(o)=="array"){return s3.json.array(o)
}else{return s3.json.object(o)}},m:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},array:function(x){var a=["["],b,f,i,l=x.length,v;
for(i=0;i<l;i+=1){v=x[i];f=s3.json[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=","}a[a.length]=v;b=true}}}a[a.length]="]";
return a.join("")},"boolean":function(x){return String(x)},"null":function(x){return"null"},number:function(x){return isFinite(x)?String(x):"null"
},object:function(x){if(!x){return"null"}if(x instanceof Array){return s3.json.array(x)}var a=["{"],b,f,i,v;for(i in x){v=x[i];
f=s3.json[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=","}a.push(s3.json.string(i,true),":",v);b=true}}}a[a.length]="}";
return a.join("")},string:function(x,n){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=s3.json.m[b];
if(c){return c}c=b.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})}return(n&&x.match(/^([A-Za-z0-9_]+)$/))?x:'"'+x+'"'
},parse:function(s){try{if(s.charCodeAt(s.length-1)==0){s=s.substring(0,s.length-1)}return eval("("+s+")")}catch(e){s=s.substring(0,s.length-1);
try{return eval("("+s+")")}catch(ex){return"{}"}}}};s3.b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-~";
s3.cc=function(c){return String.fromCharCode(c)};s3.crypto={encode:function(k,t){return s3.crypto.enc(s3.crypto.rc4(k,t))},decode:function(k,t){return s3.crypto.rc4(k,s3.crypto.dec(t))
},enc:function(s){var o="";var c1,c2,c3,e1,e2,e3,e4;var i=0;s=s3.crypto.utf8enc(s);while(i<s.length){c1=s.charCodeAt(i++);c2=s.charCodeAt(i++);
c3=s.charCodeAt(i++);e1=c1>>2;e2=((c1&3)<<4)|(c2>>4);e3=((c2&15)<<2)|(c3>>6);e4=c3&63;if(isNaN(c2)){e3=e4=64}else{if(isNaN(c3)){e4=64
}}o+=s3.b64.charAt(e1)+s3.b64.charAt(e2)+s3.b64.charAt(e3)+s3.b64.charAt(e4)}return o},dec:function(s){var o="";var c1,c2,c3;
var e1,e2,e3,e4;var i=0;s=s.replace(/[^A-Za-z0-9\_\-\~]/g,"");while(i<s.length){e1=s3.b64.indexOf(s.charAt(i++));e2=s3.b64.indexOf(s.charAt(i++));
e3=s3.b64.indexOf(s.charAt(i++));e4=s3.b64.indexOf(s.charAt(i++));c1=(e1<<2)|(e2>>4);c2=((e2&15)<<4)|(e3>>2);c3=((e3&3)<<6)|e4;
o+=s3.cc(c1);if(e3!=64){o+=s3.cc(c2)}if(e4!=64){o+=s3.cc(c3)}}o=s3.crypto.utf8dnc(o);return o},utf8enc:function(s){s=s.replace(/\r\n/g,"\n");
var u="";for(var n=0;n<s.length;n++){var c=s.charCodeAt(n);if(c<128){u+=s3.cc(c)}else{if((c>127)&&(c<2048)){u+=s3.cc((c>>6)|192);
u+=s3.cc((c&63)|128)}else{u+=s3.cc((c>>12)|224);u+=s3.cc(((c>>6)&63)|128);u+=s3.cc((c&63)|128)}}}return u},utf8dnc:function(u){var s="";
var i=0;var c,c1,c2,c3;c=c1=c2=c3=0;while(i<u.length){c=u.charCodeAt(i);if(c<128){s+=s3.cc(c);i++}else{if((c>191)&&(c<224)){c2=u.charCodeAt(i+1);
s+=s3.cc(((c&31)<<6)|(c2&63));i+=2}else{c2=u.charCodeAt(i+1);c3=u.charCodeAt(i+2);s+=s3.cc(((c&15)<<12)|((c2&63)<<6)|(c3&63));
i+=3}}}return s},rc4:function(key,text){var i,x,y,t,x2;var s={};for(i=0;i<256;i++){s[i]=i}y=0;for(x=0;x<256;x++){y=(key.charCodeAt(x%key.length)+s[x]+y)%256;
t=s[x];s[x]=s[y];s[y]=t}x=0;y=0;var z="";for(x=0;x<text.length;x++){x2=x%256;y=(s[x2]+y)%256;t=s[x2];s[x2]=s[y];s[y]=t;z+=String.fromCharCode((text.charCodeAt(x)^s[(s[x2]+s[y])%256]))
}return z}};s3.debug=function(msg){try{var s=""+msg;var dbm=false;try{dbm=_debugMode}catch(e){}if(dbm){if(typeof console!=="undefined"&&"log" in console){var p=s.indexOf("\n");
if(console.groupCollapsed&&(s.length>130||p>0)){var sml=(s.substr(0,p>0&&p<130?p:130)+(p>0?"":"..."));console.groupCollapsed(sml);
s=s.replace("request: ","").replace("response:","");console.log(s);if(console.groupEnd){console.groupEnd()}}else{console.log("  "+s)
}}}}catch(ex){}};s3.cookie={get:function(n){var a=document.cookie.split(";");for(var i=0;i<a.length;i++){var t=a[i].split("=");
if(n==t[0].replace(/^\s+|\s+$/g,"")){if(t.length==1){return""}return s3.json.parse(s3.crypto.dec(t[1])).b}}return null},set:function(n,v,exp,p,d){document.cookie=n+"="+s3.crypto.enc(s3.json.toString({b:v}))+(exp?"; expires="+exp.toGMTString():"")+(p?"; path="+p:"; path=/")+(d?"; domain="+d:"")
},getRaw:function(n){var a=document.cookie.split(";");for(var i=0;i<a.length;i++){var t=a[i].split("=");if(n==t[0].replace(/^\s+|\s+$/g,"")){if(t.length==1){return""
}return t[1]}}return null},setRaw:function(n,v,exp,p,d){document.cookie=n+"="+v+(exp?"; expires="+exp.toGMTString():"")+(p?"; path="+p:"; path=/")+(d?"; domain="+d:"")
}};try{var cv=s3.cookie.getRaw("GS_IRIPANELIST");if((!cv||cv.length<=0)&&(document.location+"").indexOf("groceryserver.com")<0){s3.ajax.encOD("http://allrecipes.groceryserver.com/groceryserver/api/session/serviceBinder.jsp",{callback:function(d){var c;
if(d&&d.echo&&d.echo.length>0){for(var i=0;i<d.echo.length;i++){if((c=d.echo[i]).name=="GS_IRIPANELIST"){s3.cookie.setRaw("GS_IRIPANELIST",c.value,new Date(2015,1,1,1,1,1,1))
}}}}})}}catch(e){}var gsapi={};gsapi.call=function(req,handler){var r={path:req.path,post:req.post};s3.debug("request: "+req.path+(req.post?"\n"+s3.json.toString(req.post):""));
s3.ajax.encOD("http://allrecipes.groceryserver.com/groceryserver/service/"+s3.crypto.encode("obfuscate",s3.json.toString(r)),handler)
};gsapi.ack=function(req,handler){var r={path:req.path,post:req.post};s3.debug("request: "+req.path+(req.post?"\n"+s3.json.toString(req.post):""));
s3.ajax.encOD("http://allrecipes.groceryserver.com/groceryserver/ack/"+s3.crypto.encode("obfuscate",s3.json.toString(r)),handler)
};gsapi.logActivity=function(params,handler){if(typeof handler=="function"){handler={callback:handler}}var req={path:"/ack/logActivity"};
if(params){req.post=params}gsapi.ack(req,{callback:function(r){this.cb.callback(r)},cb:handler})};function listResultInjector(shoppingListId,handler){return{shoppingListId:shoppingListId,callback:function(r){gsapi.shoppingList.getShoppingListById(this.shoppingListId,this.cb.cb)
},cb:handler}}gsapi.escapeURI=function(s){var s2=""+s;try{s2=encodeURIComponent(s2)}catch(ex){s2=escape(s2)}return s2.replace(/%20/g,"+")
};var SEARCH={};gsapi.search=SEARCH;SEARCH.getPromotionsForSearchTerms=function(params,handler){var hasBrand=false;for(i in params){if(i=="brand"){hasBrand=true
}}if(!hasBrand){params.brand="true"}if(typeof handler=="function"){handler={callback:handler}}var req={SearchRequest:params};
gsapi.call({path:"/service/searchservice/rest/v10/clientId/"+gsapi.cid+"/getPromotionsForSearchTerms",post:req},{callback:function(r){this.cb.callback((r&&r.PromotionSearchResponse)?r.PromotionSearchResponse:null)
},cb:handler})};SEARCH.getContentPairings=function(params,handler){if(typeof handler=="function"){handler={callback:handler}}var req={GetContentPairingsRequest:params};
gsapi.call({path:"/service/retailerservice/rest/v10/clientId/"+gsapi.cid+"/getContentPairings",post:req},{callback:function(r){this.cb.callback((r&&r.PromotionSearchResponse)?r.PromotionSearchResponse:null)
},cb:handler})};var RECIPE={};gsapi.recipe=RECIPE;RECIPE.getRecipeInformationByExternalId=function(params,handler){if(typeof handler=="function"){handler={callback:handler}
}var req={request:params};gsapi.call({path:"/service/recipe/rest/v10/clientId/"+gsapi.cid+"/getRecipeInformationByExternalId",post:req},{callback:function(r){this.cb.callback((r&&r.getRecipeDetailsResponse)?r.getRecipeDetailsResponse:null)
},cb:handler})};RECIPE.getProductCards=function(params,handler){if(typeof handler=="function"){handler={callback:handler}}var req={GetContentPairingsRequest:params};
gsapi.call({path:"/service/retailerservice/rest/v10/clientId/"+gsapi.cid+"/getProductCards",post:req},{callback:function(r){this.cb.callback((r&&r.PromotionSearchResponse)?r.PromotionSearchResponse:null)
},cb:handler})};var LOCATION={};gsapi.location=LOCATION;LOCATION.getRetailerLocation=function(params,handler){if(typeof handler=="function"){handler={callback:handler}
}var req={GetRetailerRequest:params};gsapi.call({path:"/service/chainservice/rest/v10/clientId/"+gsapi.cid+"/getRetailerLocation",post:req},{callback:function(r){this.cb.callback((r&&r.getRetailersResponse)?r.getRetailersResponse:null)
},cb:handler})};var GROCERY={};gsapi.grocery=GROCERY;GROCERY.getZipCode=function(handler){if(typeof handler=="function"){handler={callback:handler}
}gsapi.call({path:"/service/location/rest/v10/getClosestZipCode/clientId/"+gsapi.cid},{callback:function(r){var t=""+r;if(t=="-1"){t="0"
}else{while(t.length<5){t="0"+t}}this.cb.callback(t)},cb:handler})};window.gsapi=gsapi;window.s3=s3};
//
// source/angular/services/metaTag-service.js
//
"use strict";angular.module("allrecipes").factory("ar_meta_tag_service",["$window",function(a){var b=function(d){var c=a.document.createElement("meta");
c.name=d;c.content="";a.document.getElementsByTagName("head")[0].appendChild(c)};return{setMetaTitle:function(c){a.document.title=c
},setMetaDescription:function(c){if(angular.isUndefined($("meta[name=description]").attr("content"))){b("description")}$("meta[name=description]").attr("content",c)
},setMetaRobots:function(c){if(angular.isUndefined($("meta[name=robots]").attr("content"))){b("robots")}$("meta[name=robots]").attr("content",c)
},setCanonical:function(c){$("link[id=canonicalUrl]").attr("href",c)},setMetaTags:function(c){this.setMetaTitle(c.title);this.setMetaDescription(c.description);
this.setMetaRobots(c.robots);this.setCanonical(c.canonical)}}}]);
