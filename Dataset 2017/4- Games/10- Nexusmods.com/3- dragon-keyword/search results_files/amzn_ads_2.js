/* amazon-dtb-javascript-api - v1.0.0 - 2017-01-20 6:26:53 PM */"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function amzn_ads(a){try{amznads.updateAds(a)}catch(b){try{}catch(c){}}}function aax_write(a,b){a.write(b),a.close()}function amznMatchCookie(a){function b(a){if(!c){c=!0;var b=document.createElement("iframe");b.style.display="none",b.src=a,document.body.appendChild(b)}}var c=!1;document.readyState&&"loading"==document.readyState?document.addEventListener?document.addEventListener("DOMContentLoaded",function(){b(a)},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&b(a)}):b(a)}function aax_render_ad(a){var b,c,d,e,f,g,h,i;if(a&&a.cmp&&""!=a.cmp&&"undefined"!=a.cmp&&amznMatchCookie(a.cmp),a.passback)return void aax_write(document,a.html);if(b=a.slotSize,!b)return void aax_write(document,a.html);c=b.indexOf("x"),d=b.substring(0,c),e=b.substring(c+1),f="amznad"+Math.round(1e6*Math.random()),aax_write(document,'<iframe id="'+f+'" width="'+d+'" height="'+e+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');try{g=document.getElementById(f),h=g.contentWindow||g.contentDocument,h.document&&(h=h.document),aax_write(h,a.html);try{a.iid&&(document.write('<script type="text/javascript" src="'+amznpassback.CSM_JS+'"></script>'),document.write('<script type="text/javascript">'),i="aax.amazon-adsystem.com",document.write('  amzncsm.host="'+i+'";\n'),document.write('  amzncsm.rmC(document.getElementById("'+f+'"), "'+a.iid+'", window, document);'),document.write("</script>"),document.close())}catch(j){console&&console.log}}catch(k){g&&(g.style.display="none")}}var amznads,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},_extends=Object.assign||function(a){var b,c,d;for(b=1;b<arguments.length;b++){c=arguments[b];for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},amznpassback=amznpassback||{};amznpassback.CPM_JS||(amznpassback.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz"),Date.now||(Date.now=function(){return(new Date).getTime()}),amznads=function(a,b,c){function d(b,c,e){this.startTime=null,this.stopTime=null,this.sourceId=c,this.sync=b,this.mode=e,this.latency=null,d.prototype.startTimer=function(){this.startTime=Date.now()},d.prototype.stopTimer=function(){this.stopTime=Date.now()},d.prototype.stopTimerAndReportLatency=function(){this.stopTimer(),this.calculateLatency(),this.isThrottled()||this.reportLatency()},d.prototype.calculateLatency=function(){this.latency=this.stopTime-this.startTime},d.prototype.isThrottled=function(){var b,c=parseInt(a.latencySamplingRate,10);if(!isNaN(c)){if(0==c)return!0;if(100==c)return!1;if(b=100*Math.random(),c>=b)return!1}return!0},d.prototype.reportLatency=function(){var b,c;null!=this.latency&&this.latency>0&&(b='/{"c":"dtb","src":"'+this.sourceId+'","'+(this.sync?"bls":"bla")+'":"'+this.latency+'","m":"'+this.mode+'"}',c=a.protocol+a.host+a.px_svc+"PH"+b,(new Image).src=c)}}function e(){this.metrics={},this.t0=Date.now(),this.i=0,this.addTimer=function(a,b){b||(b=Date.now()),this.metrics[a]=b-this.t0},this.set=function(a,b){this.metrics[a]=b},this.schedule=function(b,c){var d=this;b||(b=5e3),c||(c="PH"),c+="/",setTimeout(function(){var b,e;d.metrics.i=d.i,d.metrics.t0=d.t0,d.metrics.site=d.getTopDomain(a),b=JSON.stringify(d.metrics),e=a.protocol+a.host+a.px_svc+c+encodeURIComponent(b),(new Image).src=e,d.metrics={},d.t0=Date.now(),d.i++},b)},this.getTopDomain=function(a){var b,c=decodeURIComponent(a.getReferrerURL());return b=c.indexOf("://")>-1?c.split("/")[2]:c.split("/")[0],b=b.split(":")[0]}}var f,g,h,i="https:"===b.location.protocol;return a.latencyUtil=a.latencyUtil||null,a.protocol=i?"https://":"http://",a.DEFAULT_HOST="aax.amazon-adsystem.com",a.host=a.DEFAULT_HOST,a.dtb_svc="/e/dtb/bid",a.pb_svc="/x/getad",a.px_svc="/x/px/",a.debug_mode=a.debug_mode||!1,a.MIN_TIMEOUT=0,a.DEFAULT_TIMEOUT=1e3,a.targetingKey="amznslots",a.latencySamplingRate=1,a.vidKey="amzn_vid",a.tasks=a.tasks||[],a.VIEWABILITY_CUTOFF_AREA=a.VIEWABILITY_CUTOFF_AREA||.5,a.VIEWABILITY_CUTOFF_DURATION_SEC=a.VIEWABILITY_CUTOFF_DURATION_SEC||1,a.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz",a.vads={},a.AAXRequests=[],a.slotBids={},a.DFPState={firstFetchRequested:!1,slots:[]},a.lastSlotSamplingPixelJSON={},a.pid,a.slotV,a.doOnceDone=!1,f="_d",g=!1,h=new e,h.addTimer("tlt"),a.ads||(a.ads={}),a.updateAds=function(b){try{a.fireCookieMatch(b),g=!0,a.slotV=1,a.ads=b.ads,a.ev=b.ev,b.vads&&a.handleVideoAds(b),a.doAfterAAXResponse(b)}catch(c){}},a.handleVideoAds=function(b){var c,d;try{a.vads=b.vads,a.ads||(a.ads={}),d=!1;for(c in b.vads)b.vads.hasOwnProperty(c)&&-1!=c.indexOf(f)&&(a.ads[c]=b.vads[c],a.amzn_vid=b.vads[c],d=!0);if(!d)for(c in b.vads)b.vads.hasOwnProperty(c)&&(a.ads[c]=b.vads[c],a.amzn_vid=b.vads[c])}catch(e){}},a.doAfterAAXResponse=function(b){try{a.doAllTasks(),a.tasks.push=function(b){a.doTask(b)},a.sampleLatency(b),a.sampleGPTSlotsDefined(b)}catch(c){}},a.sampleLatency=function(b){try{b.lsr&&(a.latencySamplingRate=b.lsr),b.rm&&(h.addTimer("br"),h.set("brs","1"),h.schedule(b.to,b.id)),null!=a.latencyUtil&&a.latencyUtil.stopTimerAndReportLatency()}catch(c){}},a.pixel=function(a){try{(new Image).src=a}catch(b){}},a.sampleGPTSlotsDefined=function(b){var d=5e3;try{if(!b.hasOwnProperty("dp")||1!=b.dp)return;a.slotDiscoveryInterval=c.setInterval(function(){var b={src:a.src_id,ws:a.getWindowDimensions(),pid:a.pid,u:a.getReferrerURL(),t:"sd"};a.DFPState.slots.map(function(a){return a.slotID}).forEach(function(c){var d,e,f=_extends(a.getDFPSlotState(c),b);Object.keys(f).filter(function(a){return"string"==typeof f[a]&&f[a].indexOf("/")>-1}).forEach(function(a){return f[a]=encodeURIComponent(f[a])}),d=encodeURIComponent(JSON.stringify(f)),e=""+a.protocol+a.host+a.px_svc+"0/"+d,d!==a.lastSlotSamplingPixelJSON[c]&&(a.pixel(e),a.lastSlotSamplingPixelJSON[c]=d)})},d)}catch(e){}},a.aaxPunt=function(b){try{a.fireCookieMatch(b),g=!0,h.addTimer("br"),h.set("brs","0"),b&&b.rm&&h.schedule(b.to,b.id),a.sampleGPTSlotsDefined(b)}catch(c){}},a.fireCookieMatch=function(a){try{a&&a.cmp&&""!=a.cmp&&"undefined"!=a.cmp&&amznMatchCookie(a.cmp)}catch(b){}},a.saveAds=function(b){try{a.saved_ads=b.ads,a.updateAds(b)}catch(c){}},a.getAdForSlot=function(c,d,e){var f,g,h,i;a.src_id=c,f=f||{},g=f.u,a.host=3e3==c?"aax-cpm.amazon-adsystem.com":a.host,g||(g=a.getReferrerURL()),g&&-1!==g.indexOf("amzn_debug_mode")&&(a.debug_mode=!0),h="src="+a.src_id+"&slot_uuid="+d+"&c=100&u="+g+"&cb="+Math.round(1e7*Math.random()),i=a.protocol+a.host+a.pb_svc+"?jsd=1&"+h,e?a.appendScriptTag(i):aax_write(b,"<script type='text/javascript' src='"+i+"'></script>")},a.getAdsCallback=function(b,c,d,e,f){var g=null;f=f||{};try{c&&"function"==typeof c&&(g=a.handleCallBack(c,d))}catch(h){}f.to||(f.to=d),a.doGetAdsAsync(b,e,f,g)},a.getVideoAdsCallback=function(b,c,d,e,f){var f=f||{};f.mt="V",a.getAdsCallback(b,c,d,e,f)},a.getDisplayAdsCallback=function(b,c,d,e,f){var f=f||{};f.mt="D",a.getAdsCallback(b,c,d,e,f)},a.getAdsAsync=function(b,c,d){a.doGetAdsAsync(b,c,d)},a.getVideoAdsAsync=function(b,c,d){var d=d||{};d.mt="V",a.getAdsAsync(b,c,d)},a.getDisplayAdsAsync=function(b,c,d){var d=d||{};d.mt="D",a.getAdsAsync(b,c,d)},a.handleCallBack=function(b,d){var e=!1,f=null,g=function(a){if(!e){try{b(a),f&&clearTimeout(f),a||h.set("to","1")}catch(c){}e=!0}},i=a.getValidMilliseconds(d);return f=i?c.setTimeout(g,i):c.setTimeout(g,a.DEFAULT_TIMEOUT),g},a.getValidMilliseconds=function(b){if(!b)return!1;try{var c=~~Number(b);if(c>a.MIN_TIMEOUT)return c}catch(d){return!1}return!1},a.getAds=function(c,e,f,i){if(g=!1,i)return void a.doGetAdsAsync(c,e,f);var j=a.getScriptSource(c,e,f);try{a.latencyUtil=new d(!0,c,f&&f.mt?f.mt:"DV"),a.latencyUtil.startTimer(),h.addTimer("sb"),h.set("src",c)}catch(k){}j&&aax_write(b,"<script type='text/javascript' src='"+j+"'></script>")},a.getVideoAds=function(b,c,d,e){var d=d||{};d.mt="V",a.getAds(b,c,d,e)},a.getDisplayAds=function(b,c,d,e){var d=d||{};d.mt="D",a.getAds(b,c,d,e)},a.doGetAdsAsync=function(b,c,e,f){g=!1;var i=a.getScriptSource(b,c,e);try{a.latencyUtil=new d(!1,b,e&&e.mt?e.mt:"DV"),a.latencyUtil.startTimer(),h.addTimer("ab"),h.set("src",b)}catch(j){}a.appendScriptTag(i,f)},a.getScriptSource=function(c,d,e){var f,g,i,j,k,l,m,n,o,p,q;try{if(!a.ssb){if(a.src_id=c,e=e||{},f=e.u,g=e.d,i=e.to,j=e.mt,k=e.hasOwnProperty("host")?e.host:null,l=k||a.host,m=e.forceSlotsVersion||a.slotV,f||(f=a.getReferrerURL()),f&&-1!==f.indexOf("amzn_debug_mode")&&(a.debug_mode=!0),e.mt&&"V"!=e.mt&&"DV"!=e.mt||a.vads&&(a.vads={},delete a.amzn_vid),a.ads&&(a.clearTargetingFromGPTAsync(),a.ads={}),a.startTime&&_typeof("number"==a.startTime)&&h.addTimer("st",a.startTime),a.saved_ads&&(a.ads=a.saved_ads),g)try{b.domain=g}catch(r){}return n=a.getRnd(),o=a.getWindowDimensions(),a.recordAAXRequest({bidReqID:n,ws:o,url:f,rqTs:Date.now()}),p="src="+c,p+="&u="+f,p+="&pid="+a.pid,p+="&cb="+n,p+="&ws="+o,d&&(p+="&sz="+d),i&&(p+="&t="+i),j&&(p+="&mt="+j),m&&(p+="&sv="+m),q=a.protocol+l+a.dtb_svc+"?"+p}a.ssb=!1}catch(r){}},a.recordAAXRequest=function(b){b&&a.AAXRequests.push(b)},a.areTwoURlsTheSame=function(a,b){return a&&b?decodeURIComponent(a).split("?")[0].split("#")[0]===decodeURIComponent(b).split("?")[0].split("#")[0]:void 0},a.getReferrerURL=function(){var d=encodeURIComponent(b.documentURI);try{d=encodeURIComponent(c.top.location.href),d&&"undefined"!=d||(d=a.detectIframeAndGetURL())}catch(e){d=a.detectIframeAndGetURL()}return d},a.detectIframeAndGetURL=function(){try{if(c.top!==c.self)return encodeURIComponent(b.referrer)}catch(a){return encodeURIComponent(b.documentURI)}},a.appendScriptTag=function(a,c){var d,e;if(!a&&c&&"function"==typeof c)return void c.apply(this,[!0]);d=b.getElementsByTagName("script")[0],e=b.createElement("script"),e.type="text/javascript",e.async=!0,a&&(e.src=a);try{c&&"function"==typeof c&&(e.readyState?e.onreadystatechange=function(){("loaded"==e.readyState||"complete"==e.readyState)&&(e.onreadystatechange=null,c(!0))}:e.onload=function(){c(!0)})}catch(f){}d.parentNode.insertBefore(e,d)},a.renderAd=function(b,c){var d,e,f,g,i,j;if(a.ads[c])h.addTimer("imp"),d=a.ads[c],a.ev&&(e="amznad"+Math.round(1e6*Math.random()),d=d.replace("window.top.amznads.detectViewability","window.amzncsm.rmD"),d=d.replace(/id=[^ ]*/,'id="'+e+'"'),f="<script type='text/javascript' src='"+a.CSM_JS+"'></script>\n",a.host!=a.DEFAULT_HOST&&(f+="<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}</script>\n"),d=f+d),aax_write(b,d);else{h.set("kvm","1"),g=new Object,g.c="dtb",g.src=a.src_id,g.kvmismatch=1,g.pubReturnedKey=c,g.aaxReturnedKeys=a.getTokens(),g.cb=Math.round(1e7*Math.random());try{g.u=encodeURIComponent(location.host+location.pathname),navigator&&(g.ua=encodeURIComponent(navigator.userAgent))}catch(k){}i=encodeURIComponent(JSON.stringify(g)),j=a.protocol+a.host+"/x/px/p/0/"+i,aax_write(b,"<img src='"+j+"'/>")}},a.hasAds=function(b){var c;if(!b)try{return Object.keys(a.ads).length>0}catch(d){for(c in a.ads)if(a.ads.hasOwnProperty(c))return!0}for(c in a.ads)if(a.ads.hasOwnProperty(c)&&c.indexOf(b)>0)return!0;return!1},a.getTargeting=function(b){var c={},d=0;a.getTokens()&&a.getTokens().length>0?(d=1,c[a.targetingKey]=a.getTokens(),a.amzn_vid&&(c[a.vidKey]=a.amzn_vid)):g||(d=2);try{h.addTimer("gk"),h.set("gks",d)}catch(e){}return c},a.setTargeting=function(b,c){var d;for(d in a.ads)if(a.ads.hasOwnProperty(d)){if(c&&d.indexOf(c)<0)continue;b(d,"1")}},a.setTargetingForGPTAsync=function(b){var c,d;try{2===a.slotV?googletag.cmd.push(function(){a.applyAllSlotTargeting()}):null}catch(e){}try{if(b)a.targetingKey=b,c=a.getTokens(),"undefined"!=typeof c&&c.length>0&&googletag.cmd.push(function(){googletag.pubads().setTargeting(b,c),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid)});else for(d in a.ads)a.ads.hasOwnProperty(d)&&!function(){var b=d;googletag.cmd.push(function(){amznads.debug_mode,googletag.pubads().setTargeting(b,"1"),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid)})}()}catch(e){}},a.setTargetingForGPTSync=function(b){var c,d;try{2===a.slotV?a.applyAllSlotTargeting():null}catch(e){}try{if(b)a.targetingKey=b,c=a.getTokens(),"undefined"!=typeof c&&c.length>0&&(googletag.pubads().setTargeting(b,c),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid));else for(d in a.ads)a.ads.hasOwnProperty(d)&&(googletag.pubads().setTargeting(d,"1"),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid))}catch(e){}},a.clearTargetingFromGPTAsync=function(){try{googletag&&googletag.pubads()&&googletag.pubads().clearTargeting(a.targetingKey),googletag.pubads().clearTargeting(a.vidKey)}catch(b){}},a.appendTargetingToAdServerUrl=function(b){var c;try{-1===b.indexOf("?")&&(b+="?");for(c in a.ads)a.ads.hasOwnProperty(c)&&(b+="&"+c+"=1")}catch(d){}return b},a.appendTargetingToQueryString=function(b){var c;try{for(c in a.ads)a.ads.hasOwnProperty(c)&&(b+="&"+c+"=1")}catch(d){}return b},a.getTokens=function(b){var c,d=[];try{for(c in a.ads)if(a.ads.hasOwnProperty(c)){if(b&&c.indexOf(b)<0)continue;d.push(c)}}catch(e){}return d},a.getKeys=a.getTokens,a.getVid=function(){return a.amzn_vid},a.doAllTasks=function(){for(;a.tasks.length>0;){var b=a.tasks.shift();a.doTask(b)}},a.doTask=function(a){try{a.call()}catch(b){}},a.tryGetAdsAsync=function(){a.ssb&&a.__ads&&a.updateAds(a.__ads),a.asyncParams&&(a.startTime=a.asyncParams.startTime,a.getAdsCallback(a.asyncParams.id,a.asyncParams.callbackFn,a.asyncParams.timeout,a.asyncParams.size,a.asyncParams.data))},a.findSlotBidByBidID=function(b){var c,d;try{return c=a.slotBids,Object.keys(c).forEach(function(a){c[a].forEach(function(a){a.amzniid===b&&(d=a)})}),d}catch(e){}},a.findBidIDSetBySlotID=function(b){var c,d;try{return c=a.slotBids,Object.keys(c).forEach(function(a){a===b&&c[a].forEach(function(a){a.bidSetOnSlot===!0&&(d=a.amzniid)})}),d}catch(e){}},a.renderImp=function(b,d){var e,f,g,i,j,k,l,m,n,o,p=a.findSlotBidByBidID(d);if(p){a.updateSlotBidProps(d,{rendered:!0}),e=p.slotID,f=p.size,g=p.amznbid,i=p.host,j=a.ev?"window.amzncsm.rmD(this, '"+d+"', window, document, "+a.src_id+");":"void(0);",k=f.split("x").map(function(a){return parseInt(a)}),l='<iframe src="'+i+"/e/dtb/impi?b="+d+"&pp="+g+"&rnd="+parseInt(1e8*Math.random())+'" id="amznad'+parseInt(1e8*Math.random())+'" onload="'+j+'" width="'+k[0]+'" height="'+k[1]+'"  FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true"></iframe>',h.addTimer("imp"),a.ev&&(m="amznad"+Math.round(1e6*Math.random()),l=l.replace("window.top.amznads.detectViewability","window.amzncsm.rmD"),n="<script type='text/javascript' src='"+a.CSM_JS+"'></script>\n",a.host!=a.DEFAULT_HOST&&(n+="<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}</script>\n"),l=n+l),aax_write(b,l);try{o=b.defaultView&&b.defaultView.frameElement?b.defaultView.frameElement:c.frameElement,o.width=k[0],o.height=k[1]}catch(q){}a.isValidDFPSize(e,k)||amznads.DFPState.slots.length===a._safe_googletag_getSlots().length}},a.isValidDFPSize=function(b,c){var d,e,f,g;try{return d=a.DFPState.slots.filter(function(a){return a.slotID===b})[0],d.hasOwnProperty("sizeMappings")?(f=a.getWindowDimensions().split("x"),g=d.sizeMappings.filter(function(a){return a[0][0]<=f[0]&&a[0][1]<=f[1]}),e=g.length>0?g[0][1]:d.sizes):e=d.sizes,e.filter(function(a){return a.toString()===c.toString()}).length>0}catch(h){}},a.getWindowDimensions=function(){var a,d;try{return a=c.innerWidth||b.documentElement.clientWidth||b.body.clientWidth,d=c.innerHeight||b.documentElement.clientHeight||b.body.clientHeight,a+"x"+d}catch(e){}},a.clearTargetingFromGPTSlot=function(b){var d,e=["amznbid","amzniid"];try{a.hasGoogletagLoaded(c.googletag)&&(d=a._safe_googletag_getSlots().filter(function(a){return a.getSlotElementId()===b})[0],e.forEach(function(a){return d.setTargeting(a,"")}))}catch(f){}},a.applyTargetingToGPTSlot=function(b){var c,d,e,f;try{c=a.getCurrentSlotBids(),c.hasOwnProperty(b)&&(d=c[b],e=["amznbid","amzniid"],f=a._safe_googletag_getSlots().filter(function(a){return a.getSlotElementId()===b})[0],f&&(Object.keys(d).filter(function(a){return e.includes(a)}).forEach(function(a){return f.setTargeting(a,d[a])}),a.updateSlotBidProps(d.amzniid,{bidSetOnSlot:!0})))}catch(g){}},a.updateSlotBids=function(b){try{a.fireCookieMatch(b),g=!0,a.slotV=2,a.AAXRequests=a.AAXRequests.map(function(a){return a.bidReqID===b.cb&&(a.resTs=Date.now()),a});var c=a.mapBidResponseKeysToEachSlotBid(b);a.appendNewSlotBids(c),a.ev=b.ev,b.vads&&a.handleVideoAds(b),a.doAfterAAXResponse(b)}catch(d){}},a.mapBidResponseKeysToEachSlotBid=function(a){var b,c,d,e,f,g;try{for(b=a.slots,c=["host","ev","cb","cmp"],Object.keys(b).forEach(function(d){c.forEach(function(c){var e,f;a.hasOwnProperty(c)&&(e=a[c],f=c,"cb"===c&&(f="bidReqID"),b[d][f]=e)})}),d=JSON.parse(JSON.stringify(b)),e=Object.keys(d),f=0;f<e.length;f++)g=e[f],d[g]=_extends(d[g],{slotID:g});return d}catch(h){}},a.appendNewSlotBids=function(b){try{var c=a.slotBids;Object.keys(b).forEach(function(a){c.hasOwnProperty(a)?c[a].push(b[a]):c[a]=[b[a]]}),a.slotBids=c}catch(d){}},a.updateSlotBidProps=function(b,c){try{Object.keys(a.slotBids).forEach(function(d){a.slotBids[d]=a.slotBids[d].map(function(a){return a.amzniid===b?_extends(a,c):a})})}catch(d){}},a.applyAllSlotTargeting=function(){try{var b=a.getCurrentSlotBids();Object.keys(b).forEach(function(b){a.applyTargetingToGPTSlot(b)})}catch(c){}},a.getCurrentSlotBids=function(){try{var b={};return Object.keys(a.slotBids).forEach(function(d){var e,f,g,h=a.slotBids[d];if(!(h.filter(function(a){return a.bidSetOnSlot}).length>0)){if(e=amznads.DFPState.slots.filter(function(a){return a.slotID===d})[0]){if(e.hasOwnProperty("renderedAt")&&e.renderedAt.length>1&&(f=e.renderedAt[0],Date.now()-f<5e3))return}else;g=h.filter(function(b){return Date.now()-a.AAXRequests.filter(function(a){return a.bidReqID===b.bidReqID})[0].rqTs<8e4}).filter(function(b){return amznads.areTwoURlsTheSame(c.hasOwnProperty("data")&&c.data.hasOwnProperty("u")?c.data.u:amznads.getReferrerURL(),a.AAXRequests.filter(function(a){return a.bidReqID===b.bidReqID})[0].url)}).filter(function(a){return a.rendered!==!0}),g.length>0&&(b[d]=g.map(function(b){var c=a.AAXRequests.filter(function(a){return a.bidReqID===b.bidReqID})[0].rqTs;return _extends(b,{rqTs:c})}).reduce(function(a,b){return a.rqTs>b.rqTs?a:b}))}}),b}catch(d){}},a.clearbidSetOnSlot=function(b){try{var c=a.findBidIDSetBySlotID(b);a.updateSlotBidProps(c,{bidSetOnSlot:!1})}catch(d){}},a._safe_googletag_getSlots=function(){try{return"undefined"==typeof googletag.getSlots?googletag.pubads().getSlots():googletag.getSlots()}catch(a){}},a.isAutoGPTTargetingEnabled=function(){var b=!0;return a.asyncParams&&a.asyncParams.disableAutoGPTTargeting===!0&&(b=!1),b},a.overwriteGoogletagMethods=function(b){try{!function(){var c,d,e,f,g,h=b.enableServices;b.enableServices=function(){for(var b=arguments.length,c=Array(b),d=0;b>d;d++)c[d]=arguments[d];return a.DFPState.servicesEnabled=!0,h.apply(this,arguments)},c=b.display,b.display=function(){var b,d,e,f;for(b=arguments.length,d=Array(b),e=0;b>e;e++)d[e]=arguments[e];return arguments.length>0&&(a.DFPState.disableInitialLoad||(f=arguments[0],a.DFPState.enableSingleRequest!==!0&&a.isAutoGPTTargetingEnabled()?a.applyTargetingToGPTSlot(f):a.DFPState.firstFetchRequested===!1&&(a.DFPState.firstFetchRequested=!0,a.isAutoGPTTargetingEnabled()&&a.applyAllSlotTargeting()))),c.apply(c,arguments)},b.pubads().addEventListener("slotRenderEnded",function(b){a.clearTargetingFromGPTSlot(b.slot.getSlotElementId()),a.recordDFPSlotRender(b.slot,Date.now()),a.clearbidSetOnSlot(b.slot.getSlotElementId())}),d=b.pubads().disableInitialLoad,b.pubads().disableInitialLoad=function(){for(var b=arguments.length,c=Array(b),e=0;b>e;e++)c[e]=arguments[e];return a.DFPState.disableInitialLoad=!0,d.apply(this,arguments)},e=b.pubads().enableSingleRequest,b.pubads().enableSingleRequest=function(){for(var b=arguments.length,c=Array(b),d=0;b>d;d++)c[d]=arguments[d];return a.DFPState.enableSingleRequest=a.DFPState.servicesEnabled?null:!0,e.apply(this,arguments)},f=b.pubads().refresh,b.pubads().refresh=function(){for(var b=arguments.length,c=Array(b),d=0;b>d;d++)c[d]=arguments[d];return a.DFPState.disableInitialLoad&&!a.DFPState.firstFetchRequested?(a.DFPState.firstFetchRequested=!0,a.isAutoGPTTargetingEnabled()&&a.applyAllSlotTargeting()):arguments.length>0&&arguments[0].length>0?a.isAutoGPTTargetingEnabled()&&arguments[0].map(function(a){return a.getSlotElementId()}).forEach(function(b){return a.applyTargetingToGPTSlot(b)}):a.isAutoGPTTargetingEnabled()&&a.applyAllSlotTargeting(),f.apply(this,arguments)},g=b.defineSlot,b.defineSlot=function(){var b,c,d,e,f,h,i,j;for(b=arguments.length,c=Array(b),d=0;b>d;d++)c[d]=arguments[d];return e=arguments[0],f=arguments[1],h=arguments[2],a.recordDFPDefineSlotArguments({slotPath:e,slotID:h,sizes:f,definedAt:Date.now()}),i=g.apply(this,arguments),j=i.defineSizeMapping,i.defineSizeMapping=function(){for(var b=arguments.length,c=Array(b),d=0;b>d;d++)c[d]=arguments[d];return a.recordDFPSizeMapping({slotID:h,sizes:arguments[0]}),j.apply(this,arguments),i},i}}()}catch(c){}},a.hasGoogletagLoaded=function(a){return"undefined"!=typeof a&&a.hasOwnProperty("apiReady")&&a.apiReady===!0},a.hasGoogletagCmdBeenDefined=function(a){return"undefined"!=typeof a?"undefined"!=typeof a.cmd:!1},a.applyGoogletagOverwrites=function(b){var d,e;try{d=c.googletag,a.hasGoogletagLoaded(d)?a.overwriteGoogletagMethods(d):a.hasGoogletagCmdBeenDefined(d)?d.cmd=[function(){a.overwriteGoogletagMethods(d)}].concat(_toConsumableArray(d.cmd)):(b+=1,e=.1,c.setTimeout(function(){a.applyGoogletagOverwrites(b)},e))}catch(f){}},a.normalizeDFPSizeMapping=function(a){try{return a[1][0]instanceof Array?a:[a[0],[a[1]]]}catch(b){}},a.recordDFPSizeMapping=function(b){try{a.DFPState.slots=a.DFPState.slots.map(function(c){if(c.slotID===b.slotID){var d=b.sizes.map(a.normalizeDFPSizeMapping);return c.hasOwnProperty("sizeMappings")?_extends({sizeMappings:[].concat(_toConsumableArray(c.sizes),[d])},c):_extends({sizeMappings:d},c)}return c})}catch(c){}},a.recordDFPDefineSlotArguments=function(b){try{if(!(b.sizes[0]instanceof Array))var b=_extends(b,{sizes:[b.sizes]});a.DFPState.slots.push(b)}catch(c){}},a.getDFPSlotState=function(b){try{return a.DFPState.slots.filter(function(a){return a.slotID===b})[0]}catch(c){}},a.recordDFPSlotRender=function(b,c){try{var d=b.getSlotElementId();a.DFPState.slots=a.DFPState.slots.map(function(a){return a.slotID===d?a.hasOwnProperty("renderedAt")?_extends(a,{renderedAt:[c].concat(_toConsumableArray(a.renderedAt))}):_extends(a,{renderedAt:[c]}):a})}catch(e){}},a.getRnd=function(){var a=Math.round(1e9*Math.random());return""+a+Date.now()},a.generatePageloadID=function(){if(!a.pid){var b=a.getRnd();a.pid=b}},a.doOnceOnLibrayLoad=function(){try{a.doOnceDone||(a.doOnceDone=!0,amznads.generatePageloadID(),amznads.applyGoogletagOverwrites(0),amznads.tryGetAdsAsync())}catch(b){}},a}(amznads||{},document,window),amznads.doOnceOnLibrayLoad(),window.amzn_ads=amzn_ads,window.amznads=amznads;