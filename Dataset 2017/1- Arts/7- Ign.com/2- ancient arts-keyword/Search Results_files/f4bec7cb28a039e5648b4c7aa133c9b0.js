/* 22:14:33 03/09/2016 [http://oystatic.ignimgs.com/src/ignmedia/js/ignsearch/index.js, http://oystatic.ignimgs.com/src/ignmedia/js/ignsearch/history.js, http://oystatic.ignimgs.com/src/ignmedia/js/ignsearch/history.adapter.jquery.js, http://oystatic.ignimgs.com/src/core/js/widgets/global/page/optimizely.js, http://oystatic.ignimgs.com/src/core/js/widgets/global/page/globalheader/global-header.js, http://oystatic.ignimgs.com/src/core/js/widgets/global/page/globalheader/section_layout.js, http://oystatic.ignimgs.com/src/core/js/widgets/global/page/footer.js, http://oystatic.ignimgs.com/src/core/js/widgets/global/page/localeselector.js]*/
(function(c){c(document).ready(function(){function k(){var a="search?";c.each(b,function(c,b){void 0!==b&&""!==b&&(a+=c+"="+b+"&")});e.enabled?e.pushState(b,'Search Results for "'+b.q+'" - IGN',a):g(b)}function g(a,f){if(!("undefined"===typeof a.q&&"undefined"===typeof a.query)){var d={};b=a;f||(f=q);h&&h.abort();c.each(a,function(a,b){b&&""!==b&&(d[a]=b)});h=c.ajax({type:"GET",url:"/ajax/search/results",data:d,success:function(b){f.call(null,b);i.find("[data-filter="+a.filter+"]").addClass("selected")}})}}
function r(a){c(".load-more-border").remove();l.append(a);m()}function m(){d=c("#load-more-button").click(n);var a=d.length?d.data("total"):c("#load-more-data").data("total");0<a?o.text("Displaying "+a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" results."):o.text("Your search returned no matches.")}function q(a){j.removeClass("selected loading");l.html(a);m();d.data("page",0);p.val(b.q)}function n(a){b.page++;a.preventDefault();g(b,r);d.text("Loading...")}var e=window.History;e.Adapter.bind(window,
"statechange",function(){var a=e.getState();g(a.data)});var d=c("#load-more-button"),l=c("#search-list"),j=c(".menu-bar .menu-item"),i=c(".menu-bar"),p=c("#query-input"),o=c(".total-results"),b,h;b={q:c("#search-page").data("query"),page:d.data("page"),count:10,type:"",objectType:"",filter:i.data("filter")};i.find("[data-filter="+b.filter+"]").addClass("selected");d.click(n);j.click(function(a){var d=c(this);if(!d.hasClass("selected"))b.filter=d.data("filter"),j.removeClass("loading"),d.addClass("loading"),
a.preventDefault(),b.type=d.data("type"),b.objectType=d.data("objecttype"),b.page=0,k()});p.keypress(function(a){if(13==a.which&&(a=c(this).val(),a=a.replace(/#/g," "),b.q!=a))c(".menu-bar .selected").addClass("loading"),b.q=a,b.page=0,k()})})})(jQuery);
(function(f,l){var k=f.console||l,h=f.document,j=f.navigator,g=!1,n=f.setTimeout,o=f.clearTimeout,p=f.setInterval,r=f.clearInterval,i=f.JSON,s=f.alert,a=f.History=f.History||{},m=f.history;try{g=f.sessionStorage,g.setItem("TEST","1"),g.removeItem("TEST")}catch(t){g=!1}i.stringify=i.stringify||i.encode;i.parse=i.parse||i.decode;if("undefined"!=typeof a.init)throw Error("History.js Core has already been loaded...");a.init=function(){return"undefined"==typeof a.Adapter?!1:("undefined"!=typeof a.initCore&&
a.initCore(),"undefined"!=typeof a.initHtml4&&a.initHtml4(),!0)};a.initCore=function(){if("undefined"!=typeof a.initCore.initialized)return!1;a.initCore.initialized=!0;a.options=a.options||{};a.options.hashChangeInterval=a.options.hashChangeInterval||100;a.options.safariPollInterval=a.options.safariPollInterval||500;a.options.doubleCheckInterval=a.options.doubleCheckInterval||500;a.options.disableSuid=a.options.disableSuid||!1;a.options.storeInterval=a.options.storeInterval||1E3;a.options.busyDelay=
a.options.busyDelay||250;a.options.debug=a.options.debug||!1;a.options.initialTitle=a.options.initialTitle||h.title;a.options.html4Mode=a.options.html4Mode||!1;a.options.delayInit=a.options.delayInit||!1;a.intervalList=[];a.clearAllIntervals=function(){var b,c=a.intervalList;if("undefined"!=typeof c&&null!==c){for(b=0;b<c.length;b++)r(c[b]);a.intervalList=null}};a.debug=function(){a.options.debug&&a.log.apply(a,arguments)};a.log=function(){var a="undefined"!=typeof k&&"undefined"!=typeof k.log&&"undefined"!=
typeof k.log.apply,c=h.getElementById("log"),d,e,f,g;a?(e=Array.prototype.slice.call(arguments),d=e.shift(),"undefined"!=typeof k.debug?k.debug.apply(k,[d,e]):k.log.apply(k,[d,e])):d="\n"+arguments[0]+"\n";for(e=1,f=arguments.length;e<f;++e){g=arguments[e];if("object"==typeof g&&"undefined"!=typeof i)try{g=i.stringify(g)}catch(j){}d+="\n"+g+"\n"}return c?(c.value+=d+"\n-----\n",c.scrollTop=c.scrollHeight-c.clientHeight):a||s(d),!0};a.getInternetExplorerMajorVersion=function(){var b=a.getInternetExplorerMajorVersion,
c;if("undefined"!=typeof a.getInternetExplorerMajorVersion.cached)c=a.getInternetExplorerMajorVersion.cached;else{c=3;for(var d=h.createElement("div"),e=d.getElementsByTagName("i");(d.innerHTML="<\!--[if gt IE "+ ++c+"]><i></i><![endif]--\>")&&e[0];);c=4<c?c:!1}return b.cached=c};a.isInternetExplorer=function(){return a.isInternetExplorer.cached="undefined"!=typeof a.isInternetExplorer.cached?a.isInternetExplorer.cached:Boolean(a.getInternetExplorerMajorVersion())};a.options.html4Mode?a.emulated=
{pushState:!0,hashChange:!0}:a.emulated={pushState:!Boolean(f.history&&f.history.pushState&&f.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(j.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(j.userAgent)),hashChange:Boolean(!("onhashchange"in f||"onhashchange"in h)||a.isInternetExplorer()&&8>a.getInternetExplorerMajorVersion())};a.enabled=!a.emulated.pushState;a.bugs={setHash:Boolean(!a.emulated.pushState&&"Apple Computer, Inc."===j.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(j.userAgent)),
safariPoll:Boolean(!a.emulated.pushState&&"Apple Computer, Inc."===j.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(j.userAgent)),ieDoubleCheck:Boolean(a.isInternetExplorer()&&8>a.getInternetExplorerMajorVersion()),hashEscape:Boolean(a.isInternetExplorer()&&7>a.getInternetExplorerMajorVersion())};a.isEmptyObject=function(a){for(var c in a)if(a.hasOwnProperty(c))return!1;return!0};a.cloneObject=function(a){var c,d;return a?(c=i.stringify(a),d=i.parse(c)):d={},d};a.getRootUrl=function(){var a=h.location.protocol+
"//"+(h.location.hostname||h.location.host);h.location.port&&(a+=":"+h.location.port);return a+="/",a};a.getBaseHref=function(){var a=h.getElementsByTagName("base"),c="";return 1===a.length&&(a=a[0],c=null.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c};a.getBaseUrl=function(){return a.getBaseHref()||a.getBasePageUrl()||a.getRootUrl()};a.getPageUrl=function(){var b;return b=((a.getState(!1,!1)||{}).url||a.getLocationHref()).replace(/\/+$/,"").replace(/[^\/]+$/,function(a){return/\./.test(a)?
a:a+"/"}),b};a.getBasePageUrl=function(){return a.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/"};a.getFullUrl=function(b,c){var d=b,e=b.substring(0,1);return c="undefined"==typeof c?!0:c,/[a-z]+\:\/\//.test(b)||("/"===e?d=a.getRootUrl()+b.replace(/^\/+/,""):"#"===e?d=a.getPageUrl().replace(/#.*/,"")+b:"?"===e?d=a.getPageUrl().replace(/[\?#].*/,"")+b:c?d=a.getBaseUrl()+b.replace(/^(\.\/)+/,""):d=a.getBasePageUrl()+b.replace(/^(\.\/)+/,
"")),d.replace(/\#$/,"")};a.getShortUrl=function(b){var c=a.getBaseUrl(),d=a.getRootUrl();return a.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),a.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b};a.getLocationHref=function(a){return a=a||h,a.URL===a.location.href?a.location.href:a.location.href===decodeURIComponent(a.URL)?a.URL:a.location.hash&&decodeURIComponent(a.location.href.replace(/^[^#]+/,""))===a.location.hash?a.location.href:-1==a.URL.indexOf("#")&&
-1!=a.location.href.indexOf("#")?a.location.href:a.URL||a.location.href};a.store={};a.idToState=a.idToState||{};a.stateToId=a.stateToId||{};a.urlToId=a.urlToId||{};a.storedStates=a.storedStates||[];a.savedStates=a.savedStates||[];a.normalizeStore=function(){a.store.idToState=a.store.idToState||{};a.store.urlToId=a.store.urlToId||{};a.store.stateToId=a.store.stateToId||{}};a.getState=function(b,c){"undefined"==typeof b&&(b=!0);"undefined"==typeof c&&(c=!0);var d=a.getLastSavedState();return!d&&c&&
(d=a.createStateObject()),b&&(d=a.cloneObject(d),d.url=d.cleanUrl||d.url),d};a.getIdByState=function(b){var c=a.extractId(b.url),d;if(!c)if(d=a.getStateString(b),"undefined"!=typeof a.stateToId[d])c=a.stateToId[d];else if("undefined"!=typeof a.store.stateToId[d])c=a.store.stateToId[d];else{for(;!(c=(new Date).getTime()+(""+Math.random()).replace(/\D/g,""),"undefined"==typeof a.idToState[c]&&"undefined"==typeof a.store.idToState[c]););a.stateToId[d]=c;a.idToState[c]=b}return c};a.normalizeState=function(b){var c,
d;if(!b||"object"!=typeof b)b={};if("undefined"!=typeof b.normalized)return b;if(!b.data||"object"!=typeof b.data)b.data={};return c={},c.normalized=!0,c.title=b.title||"",c.url=a.getFullUrl(b.url?b.url:a.getLocationHref()),c.hash=a.getShortUrl(c.url),c.data=a.cloneObject(b.data),c.id=a.getIdByState(c),c.cleanUrl=c.url.replace(/\??\&_suid.*/,""),c.url=c.cleanUrl,d=!a.isEmptyObject(c.data),(c.title||d)&&!0!==a.options.disableSuid&&(c.hash=a.getShortUrl(c.url).replace(/\??\&_suid.*/,""),/\?/.test(c.hash)||
(c.hash+="?"),c.hash+="&_suid="+c.id),c.hashedUrl=a.getFullUrl(c.hash),(a.emulated.pushState||a.bugs.safariPoll)&&a.hasUrlDuplicate(c)&&(c.url=c.hashedUrl),c};a.createStateObject=function(b,c,d){b={data:b,title:c,url:d};return b=a.normalizeState(b),b};a.getStateById=function(b){b=""+b;return a.idToState[b]||a.store.idToState[b]||l};a.getStateString=function(b){var c,d,e;return c=a.normalizeState(b),d={data:c.data,title:b.title,url:b.url},e=i.stringify(d),e};a.getStateId=function(b){var c,d;return c=
a.normalizeState(b),d=c.id,d};a.getHashByState=function(b){var c,d;return c=a.normalizeState(b),d=c.hash,d};a.extractId=function(a){var c,d,e;return-1!=a.indexOf("#")?e=a.split("#")[0]:e=a,d=/(.*)\&_suid=([0-9]+)$/.exec(e),c=d?""+(d[2]||""):"",c||!1};a.isTraditionalAnchor=function(a){return!/[\/\?\.]/.test(a)};a.extractState=function(b,c){var d=null,e,f;return c=c||!1,e=a.extractId(b),e&&(d=a.getStateById(e)),d||(f=a.getFullUrl(b),e=a.getIdByUrl(f)||!1,e&&(d=a.getStateById(e)),!d&&c&&!a.isTraditionalAnchor(b)&&
(d=a.createStateObject(null,null,f))),d};a.getIdByUrl=function(b){return a.urlToId[b]||a.store.urlToId[b]||l};a.getLastSavedState=function(){return a.savedStates[a.savedStates.length-1]||l};a.getLastStoredState=function(){return a.storedStates[a.storedStates.length-1]||l};a.hasUrlDuplicate=function(b){var c=!1,d;return d=a.extractState(b.url),c=d&&d.id!==b.id,c};a.storeState=function(b){return a.urlToId[b.url]=b.id,a.storedStates.push(a.cloneObject(b)),b};a.isLastSavedState=function(b){var c,d,e;
return a.savedStates.length&&(c=b.id,d=a.getLastSavedState(),e=d.id,b=c===e),!1};a.saveState=function(b){return a.isLastSavedState(b)?!1:(a.savedStates.push(a.cloneObject(b)),!0)};a.getStateByIndex=function(b){var c;return"undefined"==typeof b?c=a.savedStates[a.savedStates.length-1]:0>b?c=a.savedStates[a.savedStates.length+b]:c=a.savedStates[b],null};a.getCurrentIndex=function(){var b;return 1>a.savedStates.length?b=0:b=a.savedStates.length-1,null};a.getHash=function(b){var b=a.getLocationHref(b),
c;return c=a.getHashByUrl(b),c};a.unescapeHash=function(b){b=a.normalizeHash(b);return b=decodeURIComponent(b),b};a.normalizeHash=function(a){return a.replace(/[^#]*#/,"").replace(/#.*/,"")};a.setHash=function(b,c){var d,e;return!1!==c&&a.busy()?(a.pushQueue({scope:a,callback:a.setHash,args:arguments,queue:c}),!1):(a.busy(!0),d=a.extractState(b,!0),d&&!a.emulated.pushState?a.pushState(d.data,d.title,d.url,!1):a.getHash()!==b&&(a.bugs.setHash?(e=a.getPageUrl(),a.pushState(null,null,e+"#"+b,!1)):h.location.hash=
b),a)};a.escapeHash=function(b){b=a.normalizeHash(b);return b=f.encodeURIComponent(b),a.bugs.hashEscape||(b=b.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),b};a.getHashByUrl=function(b){b=(""+b).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=a.unescapeHash(b),b};a.setTitle=function(b){var c=b.title,d;c||(d=a.getStateByIndex(0),d&&d.url===b.url&&(c=d.title||a.options.initialTitle));try{h.getElementsByTagName("title")[0].innerHTML=c.replace("<","&lt;").replace(">",
"&gt;").replace(" & "," &amp; ")}catch(e){}return h.title=c,a};a.queues=[];a.busy=function(b){"undefined"!=typeof b?a.busy.flag=b:"undefined"==typeof a.busy.flag&&(a.busy.flag=!1);if(!a.busy.flag){o(a.busy.timeout);var c=function(){var b,e,f;if(!a.busy.flag)for(b=a.queues.length-1;0<=b;--b)if(e=a.queues[b],0!==e.length)f=e.shift(),a.fireQueueItem(f),a.busy.timeout=n(c,a.options.busyDelay)};a.busy.timeout=n(c,a.options.busyDelay)}return a.busy.flag};a.busy.flag=!1;a.fireQueueItem=function(b){return b.callback.apply(b.scope||
a,b.args||[])};a.pushQueue=function(b){return a.queues[b.queue||0]=a.queues[b.queue||0]||[],a.queues[b.queue||0].push(b),a};a.queue=function(b,c){return"function"==typeof b&&(b={callback:b}),"undefined"!=typeof c&&(b.queue=c),a.busy()?a.pushQueue(b):a.fireQueueItem(b),a};a.clearQueue=function(){return a.busy.flag=!1,a.queues=[],a};a.stateChanged=!1;a.doubleChecker=!1;a.doubleCheckComplete=function(){return a.stateChanged=!0,a.doubleCheckClear(),a};a.doubleCheckClear=function(){return a.doubleChecker&&
(o(a.doubleChecker),a.doubleChecker=!1),a};a.doubleCheck=function(b){return a.stateChanged=!1,a.doubleCheckClear(),a.bugs.ieDoubleCheck&&(a.doubleChecker=n(function(){return a.doubleCheckClear(),a.stateChanged||b(),!0},a.options.doubleCheckInterval)),a};a.safariStatePoll=function(){var b=a.extractState(a.getLocationHref());if(!a.isLastSavedState(b))return b||a.createStateObject(),a.Adapter.trigger(f,"popstate"),a};a.back=function(b){return!1!==b&&a.busy()?(a.pushQueue({scope:a,callback:a.back,args:arguments,
queue:b}),!1):(a.busy(!0),a.doubleCheck(function(){a.back(!1)}),m.go(-1),!0)};a.forward=function(b){return!1!==b&&a.busy()?(a.pushQueue({scope:a,callback:a.forward,args:arguments,queue:b}),!1):(a.busy(!0),a.doubleCheck(function(){a.forward(!1)}),m.go(1),!0)};a.go=function(b,c){var d;if(0<b)for(d=1;d<=b;++d)a.forward(c);else{if(!(0>b))throw Error("History.go: History.go requires a positive or negative integer passed.");for(d=-1;d>=b;--d)a.back(c)}return a};if(a.emulated.pushState){var q=function(){};
a.pushState=a.pushState||q;a.replaceState=a.replaceState||q}else a.onPopState=function(b,c){var d=!1,e=!1,g,h;return a.doubleCheckComplete(),g=a.getHash(),g?(h=a.extractState(g||a.getLocationHref(),!0),h?a.replaceState(h.data,h.title,h.url,!1):(a.Adapter.trigger(f,"anchorchange"),a.busy(!1)),a.expectedStateId=!1,!1):(d=a.Adapter.extractEventData("state",b,c)||!1,d?e=a.getStateById(d):a.expectedStateId?e=a.getStateById(a.expectedStateId):e=a.extractState(a.getLocationHref()),e||(e=a.createStateObject(null,
null,a.getLocationHref())),a.expectedStateId=!1,a.isLastSavedState(e)?(a.busy(!1),!1):(a.storeState(e),a.saveState(e),a.setTitle(e),a.Adapter.trigger(f,"statechange"),a.busy(!1),!0))},a.Adapter.bind(f,"popstate",a.onPopState),a.pushState=function(b,c,d,e){if(a.getHashByUrl(d)&&a.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==e&&a.busy())return a.pushQueue({scope:a,callback:a.pushState,args:arguments,queue:e}),!1;a.busy(!0);
var g=a.createStateObject(b,c,d);return a.isLastSavedState(g)?a.busy(!1):(a.storeState(g),a.expectedStateId=g.id,m.pushState(g.id,g.title,g.url),a.Adapter.trigger(f,"popstate")),!0},a.replaceState=function(b,c,d,e){if(a.getHashByUrl(d)&&a.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==e&&a.busy())return a.pushQueue({scope:a,callback:a.replaceState,args:arguments,queue:e}),!1;a.busy(!0);var g=a.createStateObject(b,c,d);return a.isLastSavedState(g)?
a.busy(!1):(a.storeState(g),a.expectedStateId=g.id,m.replaceState(g.id,g.title,g.url),a.Adapter.trigger(f,"popstate")),!0};if(g){try{a.store=i.parse(g.getItem("History.store"))||{}}catch(t){a.store={}}a.normalizeStore()}else a.store={},a.normalizeStore();a.Adapter.bind(f,"unload",a.clearAllIntervals);a.saveState(a.storeState(a.extractState(a.getLocationHref(),!0)));g&&(a.onUnload=function(){var b,c;try{b=i.parse(g.getItem("History.store"))||{}}catch(d){b={}}b.idToState=b.idToState||{};b.urlToId=b.urlToId||
{};b.stateToId=b.stateToId||{};for(c in a.idToState)a.idToState.hasOwnProperty(c)&&(b.idToState[c]=a.idToState[c]);for(c in a.urlToId)a.urlToId.hasOwnProperty(c)&&(b.urlToId[c]=a.urlToId[c]);for(c in a.stateToId)a.stateToId.hasOwnProperty(c)&&(b.stateToId[c]=a.stateToId[c]);a.store=b;a.normalizeStore();b=i.stringify(b);try{g.setItem("History.store",b)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;g.length&&(g.removeItem("History.store"),g.setItem("History.store",b))}},a.intervalList.push(p(a.onUnload,
a.options.storeInterval)),a.Adapter.bind(f,"beforeunload",a.onUnload),a.Adapter.bind(f,"unload",a.onUnload));if(!a.emulated.pushState&&(a.bugs.safariPoll&&a.intervalList.push(p(a.safariStatePoll,a.options.safariPollInterval)),"Apple Computer, Inc."===j.vendor||"Mozilla"===(j.appCodeName||"")))a.Adapter.bind(f,"hashchange",function(){a.Adapter.trigger(f,"popstate")}),a.getHash()&&a.Adapter.onDomLoad(function(){a.Adapter.trigger(f,"hashchange")})};(!a.options||!a.options.delayInit)&&a.init()})(window);
(function(e,g){var d=e.History=e.History||{},f=e.jQuery;if("undefined"!=typeof d.Adapter)throw Error("History.js Adapter has already been loaded...");d.Adapter={bind:function(a,b,c){f(a).bind(b,c)},trigger:function(a,b,c){f(a).trigger(b,c)},extractEventData:function(a,b,c){return b&&b.originalEvent&&b.originalEvent[a]||c&&c[a]||g},onDomLoad:function(a){f(a)}};"undefined"!=typeof d.init&&d.init()})(window);
var IGN=IGN||{};IGN.External=IGN.External||{};
IGN.External.Optimizely=function(){return{_settings:{},init:function(){var b="",a=document.getElementById("ign-optimizely");"undefined"!==typeof a&&"SCRIPT"!=a.nodeName&&"undefined"!==typeof a.getAttribute("data-project-id")&&(b=a.getAttribute("data-project-id"));if(""!==b){var c="https:"==document.location.protocol?"https://":"http://",a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=c+"cdn.optimizely.com/js/"+b+".js";b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,
b)}}}}();window.addEventListener("load",function(){IGN.External.Optimizely.init()});
(function(a){function e(a){a.stopPropagation();a.stopImmediatePropagation();a.preventDefault();b.hasClass("col-2")||b.hasClass("col-3")?(c.html("more shows"),c.removeClass("icon-pointy-before icon-back").addClass("icon-pointy"),b.removeClass("col-2 col-3")):(c.html("fewer shows"),c.removeClass("icon-pointy").addClass("icon-pointy-before icon-back"),0<d[2].length?b.addClass("col-3"):b.addClass("col-2"))}function f(b){a.ajax({url:(b?"https://s.ign.com/widgets/":"http://"+GlobalHeaderOptions.renderDomain+
"/")+"social/shared/evousertools.jsonp?enable_ssl="+b+"&globalheader=true&callback=?",dataType:"jsonp",jsonpCallback:"socialSharedGlobalHeaderUsertoolsCallback",cache:!0,success:function(b){$toolsContainer=a("#user-tools-container");$toolsContainer.html(b);b=$toolsContainer.find(".user-tools");b.fadeIn("fast");b.delegate(".authReturnUrl","click",function(){var b=escape(location.href),c=a(this).attr("href");a(this).attr("href",c+"?r="+b)})}})}var b,d,c;a(document).ready(function(){b=a("#ign-shows .ign-shows-list-container");
a("#ign-shows .more-shows");c=a("#ign-shows .more-shows a");d=[a("#ign-shows .show-column-0"),a("#ign-shows .show-column-1"),a("#ign-shows .show-column-2")];d[1].length&&c.click(e);f(GlobalHeaderOptions.enable_ssl);a("#header-container").removeClass("hidden-opacity")})})(jQuery);
(function(a){var l,q,g,h,m,i,r;function w(){n=a("header#ign-header");a("#header-container");b=a("#header-nav");a("#search-input");s=a("#ign-shows");e=!0;o=a("#spine-container").height()||b.offset().top;j=a(".trending");c=a(".dpad-container").addClass("hidden");d&&(d.appendTo(c),c.css("background-image","none"));a("#search-container");l=a("#search-input");q=a("#search-button");g=a(".promoted .content");h=a(".promoted .image");m=a(".promoted .tile.promo");i="collapsed";r=0!==a(".promoted.expandable").length?
!0:!1;j=a(".trending");x();a("body").bind("sidekickStateChange",y);b.hasClass("spine")||b.hasClass("watchread")?(k(a(this).scrollTop()),a(window).scroll(function(){k(a(this).scrollTop())})):(c.removeClass("hidden"),d&&t())}function y(p,b){b.action&&"expand"===b.action?(window.scrollTo(0,0),n.addClass("fixed"),k(0),e=!1):b.action&&"collapse"===b.action&&setTimeout(function(){n.removeClass("fixed");e=!0;k(a(window).scrollTop())},2500)}function k(p){e&&p>o&&!b.hasClass("fixed")?(f&&console.log("set sticky state"),
b.addClass("fixed"),a("#chaos").addClass("chaosf"),c.hasClass("hidden")&&(c.removeClass("hidden"),d&&t())):e&&p<=o&&b.hasClass("fixed")&&(f&&console.log("remove sticky state"),b.removeClass("fixed"),a("#chaos").removeClass("chaosf"),c.addClass("hidden"))}function t(){d[0].pauseAnimations();d[0].setCurrentTime(0);d[0].unpauseAnimations()}function z(a){13===a.keyCode&&u()}function u(){var a=l.val();""===a||"Search"===a?alert("Please type in your search query."):document.location="http://www.ign.com/search?q="+
encodeURIComponent(a)}function v(a){a.preventDefault();switch(i){case "collapsed":m.removeClass("hidden");g.addClass("hidden");h.addClass("expanded");j.addClass("hidden");i="expanded";f&&console.log("expanding promoted content");break;case "expanded":m.addClass("hidden"),g.removeClass("hidden"),h.removeClass("expanded"),j.removeClass("hidden"),i="collapsed",f&&console.log("collapsing promoted content")}}function x(){s.on("mouseover",function(){var b,c;a("#ign-shows .ign-show").each(function(){b=a(this).find(".ign-show-image");
b.attr("src",b.data("image"));c=a(this).find(".ign-show-branding");c.attr("src",c.data("image"))})})}var f=!1,d=a("<svg version='1.1' baseProfile='tiny' id='svg-dpad' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='40px' viewBox='0 0 40 40' xml:space='preserve' fill='#d3222a'><g transform='translate(20, 20)'><path d='M-6.618-4.354c0.594-0.899,1.365-1.671,2.264-2.264c0.13-1.182,0.307-2.261,0.525-3.214 C-6.573-8.76-8.76-6.573-9.833-3.829C-8.878-4.047-7.799-4.224-6.618-4.354z'><animateTransform attributeName='transform' type='scale' values='0;1.5;1.2;1' dur='0.25s' repeatCount='\u00cf'/><animate attributeName='opacity' values='0;1' dur='0.25s'/></path><path d='M4.347-6.644C4.35-6.636,4.35-6.628,4.351-6.62c0.9,0.594,1.672,1.366,2.267,2.266 c1.181,0.13,2.26,0.306,3.214,0.524c-1.075-2.751-3.27-4.941-6.024-6.01C4.028-8.891,4.211-7.819,4.347-6.644z'><animateTransform attributeName='transform' type='scale' values='0;1.5;1.2;1' dur='0.25s' repeatCount='1'/><animate attributeName='opacity' values='0;1' dur='0.25s'/></path><path d='M-4.354,6.617c-0.9-0.594-1.672-1.366-2.265-2.266c-0.009-0.002-0.017-0.002-0.026-0.004 c-1.19-0.14-2.255-0.32-3.193-0.537c1.07,2.752,3.259,4.946,6.009,6.02C-4.047,8.878-4.224,7.8-4.354,6.617z'><animateTransform attributeName='transform' type='scale' values='0;1.6;1.2;1' dur='0.25s' repeatCount='1'/><animate attributeName='opacity' values='0;1' dur='0.25s'/></path><path d='M6.645,4.348C6.635,4.35,6.628,4.35,6.619,4.352C6.025,5.253,5.252,6.025,4.351,6.62 C4.349,6.629,4.349,6.637,4.347,6.646C4.21,7.821,4.028,8.892,3.807,9.84c2.759-1.071,4.957-3.269,6.03-6.027 C8.899,4.03,7.833,4.209,6.645,4.348z'><animateTransform attributeName='transform' type='scale' values='0;1.2;1.1;1' dur='0.25s' repeatCount='1'/><animate attributeName='opacity' values='0;1' dur='0.25s'/></path><path d='M-1.961-12h3.9c0.853,1.845,1.195,4.594,1.302,5.522c0.042,0.224,0.063,0.432,0.063,0.635L0-2.887 l-3.303-2.956c0-0.169,0.016-0.349,0.05-0.547C-3.152-7.34-2.826-10.136-1.961-12z'><animateTransform attributeName='transform' type='scale' values='0;1.5;1.2;1;1;1;1' dur='0.25s' repeatCount='1'/></path><path d='M-3.303,5.843c0,0.17,0.016,0.35,0.05,0.548c0.102,0.95,0.428,3.745,1.292,5.609h3.9 c0.853-1.844,1.195-4.594,1.302-5.522c0.042-0.224,0.063-0.433,0.063-0.635L0,2.887L-3.303,5.843z'><animateTransform attributeName='transform' type='scale' values='0;1.2;1.1;1;1' dur='0.25s' repeatCount='1'/></path><path d='M-5.842-3.304c-0.171,0-0.349,0.017-0.549,0.05c-0.95,0.101-3.745,0.429-5.61,1.292v3.9 c1.845,0.854,4.595,1.194,5.523,1.302c0.223,0.042,0.433,0.062,0.636,0.062l2.955-3.303L-5.842-3.304z'><animateTransform attributeName='transform' type='scale' values='0;1.3;1.2;1;1' dur='0.25s' repeatCount='1'/></path><path d='M12-1.962c-1.864-0.863-4.66-1.19-5.61-1.291c-0.198-0.034-0.377-0.05-0.548-0.05L2.888,0l2.956,3.303 c0.203,0,0.412-0.02,0.636-0.062c0.928-0.108,3.677-0.449,5.522-1.301v-3.902H12z'><animateTransform attributeName='transform' type='scale' values='0;1.4;1.1;1' dur='0.25s' repeatCount='1'/></path></g></svg>"),
c,n,b,s,o,j,e;f&&console.log("IGN Global Header 2014");a(document).ready(function(){w();l.keypress(z);q.click(u);r&&(h.click(v),g.click(v))})})(IGN.jQuery);
jQuery(document).ready(function(){var a=jQuery("#ignFooter-container .emailInput");a.val("Enter Email...");a.focusin(function(){"Enter Email..."===jQuery(this).val()&&jQuery(this).val("")});a.focusout(function(){""===jQuery(this).val()&&jQuery(this).val("Enter Email...")});jQuery("#ignFooter-container .emailSubmit").click(function(){if("Enter Email..."===a.val())return!1})});
(function(b){var j,e,h,c,a,i;function k(){b.each(i.primary,function(a,d){var c=b('<a href="http://www.ign.com/?setccpref='+a+'">           <li class="locale-primary">             <span class="locale-code">'+a+'</span>             <span class="locale-region">'+d.label+"</span>           </li>         </a>");e.append(c)});e.append(b('<li class="locale-dropdown-label">International Editions</li>'));b.each(i.secondary,function(a,d){if("undefined"!==typeof d.regions){f&&console.log(d.regions);var c=b('          <li class="locale-secondary">             <span class="locale-code">'+
a+'</span>             <a class="locale-region locale-regions-primary"   href="'+d.regions[0].url+'">'+d.regions[0].label+'</a>             <span class="locale-region-divider"> / </span>             <a class="locale-region locale-regions-secondary" href="'+d.regions[1].url+'">'+d.regions[1].label+"</a>           </li>")}else c=b('          <a href="http://www.ign.com/?setccpref='+a+'">             <li class="locale-secondary">               <span class="locale-code">'+a+'</span>               <span class="locale-region">'+
d.label+"</span>             </li>           </a>");e.append(c)});e.append(b('<li class="locale-dropdown-label">More coming soon</li>       <li class="locale-world-ign">         <a class="locale-region" href="http://world.ign.com/">world.ign.com</a>         <span class="locale-region">See </span>       </li>'));a.elem.unbind("click",k);j.click(g);a.elem.click(g);g()}function g(){"collapsed"===c?(b("html").addClass("disable-scroll"),e.removeClass("hidden"),h.removeClass("hidden"),b(document).keydown(l),
f&&console.log("expanding locale selector")):(b("html").removeClass("disable-scroll"),e.addClass("hidden"),h.addClass("hidden"),f&&console.log("collapsing locale selector"));c="collapsed"===c?"expanded":"collapsed"}function l(a){27===a.keyCode&&"expanded"===c&&(b(document).unbind("keydown",l),g(),f&&console.log("Collapsed modal with keyCode="+a.keyCode))}var f=!1;b(document).ready(function(){j=b(".locale-selector-container");e=b(".locale-selector-container .locale-dropdown");h=b(".locale-selector-container .locale-dropdown-bg");
c="collapsed";a={elem:b(".locale-shortcode"),hoverText:b(".locale-shortcode").data("hover-text"),initVal:b(".locale-shortcode").text()};i={primary:{US:{label:"United States"},UK:{label:"United Kingdom"},AU:{label:"Australia"}},secondary:{ZA:{label:"Africa"},AD:{regions:[{label:"Adria",url:"http://adria.ign.com/"},{label:"Slovenia",url:"http://adria.ign.com/sl"}]},AU:{label:"Australia"},NL:{label:"Benelux"},BR:{label:"Brazil"},CA:{label:"Canada"},DK:{label:"Denmark"},FI:{label:"Finland"},FR:{label:"France"},
DE:{label:"Germany"},GR:{label:"Greece"},HU:{label:"Hungary"},IN:{label:"India"},IE:{label:"Ireland"},IL:{label:"Israel"},IT:{label:"Italy"},JP:{label:"Japan"},LA:{label:"Latin America"},AR:{regions:[{label:"En",url:"http://me.ign.com/en"},{label:"Middle East",url:"http://me.ign.com/ar"}]},NO:{label:"Norway"},PK:{label:"Pakistan"},PL:{label:"Poland"},PT:{label:"Portugal"},RO:{label:"Romania"},RU:{label:"Russia"},AP:{label:"Southeast Asia"},ES:{label:"Spain"},SE:{label:"Sweden"},TR:{label:"Turkey"},
UK:{label:"United Kingdom"},US:{label:"United States"}}};a.elem.click(k);a.elem.mouseenter(function(){a.elem.text(a.hoverText)}).mouseleave(function(){a.elem.text(a.initVal)})})})(jQuery);