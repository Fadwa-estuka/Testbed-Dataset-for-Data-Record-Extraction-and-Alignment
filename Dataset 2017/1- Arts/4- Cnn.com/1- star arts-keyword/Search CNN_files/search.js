function CSIManager(e){"use strict";var t,n=this,a=navigator.userAgent.toLowerCase();if(e&&CSIManager.getInstance&&e!==CSIManager.getInstance&&-1===navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Opera"))throw new Error("There is no public constructor for CSIManager.");n.CSIObjects=[],n.delayedCSIList=[],n.domIDConfig=[],n.domOnLoad=[],n.domOnBeforeLoad=[],n.useDelayedCSI=!1,n.numberofRequests=0,n.iframeOffset=0,n.queueAllCalls=!1,n.queuedCallArray=[],n.eventTypes=[],n.currentEventType="",n.eventTypeFunctions=[],n.watchEventTypeNodes=[],n.isPolling=!1,n.pollingInterval=1e4,n.minimumInterval=9999,n.domRefreshHook=!1,n.pollingUrl=!1,a.indexOf("msie")>-1&&navigator.platform.indexOf("Mac")>-1&&(n.useDelayedCSI=!0),n.jQuerySupport="undefined"!=typeof jQuery,n.noFramework=!n.jQuerySupport,t=function(){n.initialize()},jQuery(document).onZonesAndDomReady(t)}function revertToCallObject(e,t){"use strict";CSIManager.getInstance().callObject(e,t)}CSIManager.__instance__=null,CSIManager.getInstance=function(){"use strict";return null===this.__instance__&&(this.__instance__=new CSIManager(CSIManager.getInstance)),this.__instance__},CSIManager.getInstance(),CSIManager.prototype.initialize=function(){"use strict";var e;this.useDelayedCSI||(this.queueAllCalls=!0,e=document.createElement("div"),e.setAttribute("id","csimanagerdiv"),document.body.appendChild(e),e=document.createElement("div"),e.setAttribute("id","csimanagerdivdelayed"),document.body.appendChild(e),this.useDelayedCSI=!0,this.queueAllCalls=!1,this.processAnyQueuedCalls(),this.queuedCallArray=null)},CSIManager.prototype.processAnyQueuedCalls=function(){"use strict";var e,t;if(this.queuedCallArray&&null!==this.queuedCallArray)for(e=0;e<this.queuedCallArray.length;e++)t=this.queuedCallArray[e],this.queuedCallArray[e]="",t&&this.call(t)},CSIManager.prototype.addOnLoadById=function(e,t){"use strict";var n=this.domOnLoad[e];n||(n=[]),n.push(t),this.domOnLoad[e]=n},CSIManager.prototype.addOnBeforeLoadById=function(e,t){"use strict";var n=this.domOnBeforeLoad[e];n||(n=[]),n.push(t),this.domOnBeforeLoad[e]=n},CSIManager.prototype.setConfigForId=function(e,t){"use strict";this.domIDConfig[e]=t},CSIManager.prototype.getConfigForId=function(e){"use strict";var t=this.domIDConfig[e];return t||(t={}),t},CSIManager.prototype.registerEventType=function(e,t){"use strict";e&&t&&(this.eventTypes[e]=t)},CSIManager.prototype.callObject=function(e,t){"use strict";var n,a,s,r,i,o,c,l,d,u,m,h,g,p,y,f,I,C,S,v;if(this.currentEventType=t,e)if(n=e,a=n.url,s=n.args,r=n.domId,i=n.funcObj,o=n.breakCache,c=n.overrideID,l=n.isIframeForced,this.queueAllCalls)d={},d.url=a,d.args=s,d.domId=r,d.funcObj=i,d.breakCache=o,d.overrideID=c,this.queuedCallArray.push(d);else{if(!this.useDelayedCSI&&document&&document.readyState&&"complete"===document.readyState&&this.initialize(),void 0!==l&&l!==!1||(l=!1,0===a.indexOf("http")&&(l=!0,a.indexOf(window.location.hostname)>-1&&(l=!1))),this.numberofRequests++,u="csi"+(this.iframeOffset+this.numberofRequests),c&&(u=c),m=[],h=[],-1===a.indexOf(document.domain)&&a.indexOf("http")>-1)return!1;if(r.join?m=r:m.push(r),i&&(i.join?h=i:h.push(i)),this.CSIObjects[u]={functionList:h,dom:m,url:a,args:s,csiRequestNum:this.numberofRequests,disableCache:o},g={},g.src=a,g.id=u,g.domId=m,g.args=s,g.breakCache=o,g.csiRequestNum=this.numberofRequests,this.delayedCSIList[this.delayedCSIList.length]=g,p=new Date,y=p.getTime()%60,f=o?"time="+y:"",""!==s&&(f+=(""!==f?"&":"")+s),l===!1)try{if(!i)throw new Error("NoCallBackFunction");try{I=this,jQuery.ajax(a,{method:"get",parameters:f+(""!==f?"&":"")+"csiID="+u,onComplete:function(n){var a,s,r,i;n&&n.responseText&&-1!==n.responseText.indexOf('<textarea id="jsCode">')&&(a='<textarea id="jsCode">',s=n.responseText.indexOf(a)+a.length,r=n.responseText.slice(s,n.responseText.indexOf("</textarea>")),i=jQuery.parseJSON(r),I.callBackJS(i,u)),n&&!n.responseText&&(e.isIframeForced=!0,CSIManager.getInstance().callObject(e,t))},onException:function(e,t){throw new Error("Exception for url ["+a+"]: "+t.messageText)},onFailure:function(){throw new Error("Failure")}})}catch(b){console.log("CatchFailure for url ["+a+"]: "+b.message)}}catch(b){l=!0}l&&(this.useDelayedCSI?(C=a.indexOf("?")<0?a+"?"+f+(""!==f?"&":"")+"csiID="+u:a+"&csiID="+u,S=document.createElement("iframe"),S.setAttribute("src",C),S.setAttribute("id","csiDataIframe"+u),S.setAttribute("name","csiDataIframe"+u),S.setAttribute("width","10"),S.setAttribute("height","10"),S.setAttribute("style","visibility:hidden;position:absolute;top:0px;left:-100px;"),S.style.top="0px",S.style.left="-100px",S.style.position="absolute",v=document.createElement("div"),v.setAttribute("id","csiIframeObjs"+u),v.appendChild(S),document.getElementById("csimanagerdiv")&&(document.getElementById("csimanagerdiv").appendChild(v),-1!==navigator.userAgent.indexOf("MSIE")&&window.setTimeout('var tmpIframObj=document.getElementById("csiDataIframe'+u+'");if(tmpIframObj.readyState==="uninitialized"){tmpIframObj.src=tmpIframObj.getAttribute("src");tmpIframObj.position="absolute";tmpIframObj.style.left="-100px";}',500))):(S=document.createElement("iframe"),S.setAttribute("src",a+"?"+f+(""!==f?"&":"")+"csiID="+u),S.setAttribute("id","csiDataIframe"+u),S.setAttribute("name","csiDataIframe"+u),S.setAttribute("width","10"),S.setAttribute("height","10"),S.setAttribute("style","visibility:hidden;position:absolute;top:0px;left:-100px;"),S.style.top="0px",S.style.left="-100px",S.style.position="absolute",v=document.createElement("div"),v.setAttribute("id","csiIframeObjs"+u),v.appendChild(S)))}},CSIManager.prototype.call=function(e,t,n){"use strict";var a={};a.url=e.url,a.args=e.args,a.domId=e.domId,a.funcObj=e.funcObj,a.breakCache=e.breakCache,a.overrideID=e.overrideID,a.isIframeForced=n,revertToCallObject(a,t)},CSIManager.prototype.callBackHtml=function(e,t){"use strict";var n,a=!1,s=0;document.getElementById?(a=document.getElementById(t),a||this.CSIObjects[t]&&this.CSIObjects[t].dom&&(t=this.CSIObjects[t].dom,a=document.getElementById(t))):document.all&&(a=document.all[t],a||this.CSIObjects[t]&&this.CSIObjects[t].dom&&(t=this.CSIObjects[t].dom,a=document.all[t])),a&&(a.innerHTML=e),s&&(n=s.style.top||"0px",s.style.top="1px",s.style.top=n)},CSIManager.prototype.callBackJS=function(e,t){"use strict";var n,a,s,r,i,o,c,l,d,u,m,h,g;if(this.CSIObjects[t]&&(n=this.CSIObjects[t].functionList,a=this.CSIObjects[t].dom,n)){if(s=n.length,r=a.length,s!==r)if(s>r){for(i=a[r-1],l=r;s>l;l++)a.push(i);r=a.length}else{for(o=n[s-1],l=s;r>l;l++)n.push(o);s=n.length}for(c=0;c<n.length;c++)if(d=n[c]){if(u=this.getConfigForId(a[c]),m=this.domOnBeforeLoad[a[c]])for(l=0;l<m.length;l++)(g=m[l])(e,a[c],u);if(this.callBackHtml(d(e,a[c],u,this.currentEventType),a[c]),h=this.domOnLoad[a[c]])for(l=0;l<h.length;l++)(g=h[l])(e,a[c],u)}this.CSIObjects[t]=""}},CSIManager.prototype.delayedProcessing=function(){"use strict";var e,t,n,a,s,r,i,o,c;if(document.body&&document.body.innerHTML&&this.useDelayedCSI){for(e=document.getElementById("csimanagerdivdelayed")||document.all.csimanagerdivdelayed,t="",n=0;n<this.delayedCSIList.length;n++)a=this.delayedCSIList[n].src,s=this.delayedCSIList[n].id,r=new Date,i=this.delayedCSIList[n].breakCache,o=r.getTime()%60,c=i?"&time="+o:"",""!==this.delayedCSIList[n].args&&(c=c+"&"+this.delayedCSIList[n].args),t+='<iframe src="'+a+"?csiID="+s+c+'" name="csiDataIframe'+s+'" id="csiDataIframe'+s+'" width="10" height="10" style="visibility:hidden;position:absolute;top:0px;left:-100px;"></iframe>';e&&(e.innerHTML=t)}},CSIManager.prototype.handleClientData=function(e,t){"use strict";var n,a,s,r,i,o,c=top,l="",d="";try{parent.CSIManager&&(c=parent)}catch(u){}for(n=e.location.hash,n||(n=e.location.search.substring(1)),a=n.split("&"),s=0;s<a.length;s++)r=a[s].split("="),"csiID"===r[0]&&(s=a.length+1);e.name&&0===e.name.indexOf("csiDataIframe")&&(d=e.name.substring(13)),""===d&&e.frameElement&&e.frameElement.id&&0===e.frameElement.id.indexOf("csiDataIframe")&&(d=e.frameElement.id.substring(13)),l=d,t.mainForm.htmlArea&&t.mainForm.htmlArea.value?(i=t.mainForm.htmlArea.value,i&&c.CSIManager.getInstance().callBackHtml(i,l)):t.mainForm.jsCode.value&&(o=t.mainForm.jsCode.value,o&&c.CSIManager.getInstance().callBackJS(jQuery.parseJSON(o),l))},CSIManager.prototype.registerEventTypeNode=function(e,t){"use strict";this.eventTypes[t]&&(this.watchEventTypeNodes[e]=t),this.isPolling||this.startPoll()},CSIManager.prototype.setPollingUrl=function(e,t){"use strict";this.pollingUrl=e,t&&t>this.minimumInterval&&(this.pollingInterval=t)},CSIManager.prototype.startPoll=function(){"use strict";!this.isPolling&&this.pollingUrl&&(this.pollingId=window.setTimeout(function(){CSIManager.getInstance().poll()},this.pollingInterval),this.isPolling=!0)},CSIManager.prototype.poll=function(){"use strict";var e;this.domRefreshHook||(e=document.createElement("iframe"),this.domRefreshHook=document.body.appendChild(e)),this.domRefreshHook.setAttribute("src",this.pollingUrl)},CSIManager.prototype.handleData=function(e){"use strict";var t,n,a,s;if(this.isPolling=!1,e.intervalTime&&e.intervalTime>this.minimumInterval&&(this.pollingInterval=e.intervalTime),e.entries)for(t=0;t<e.entries.length;t++)n=e.entries[t],a=this.watchEventTypeNodes[n],a&&(s=this.eventTypes[a])(a,n);this.startPoll()},CSIManager.prototype.reset=function(){"use strict";this.eventTypes=[],this.currentEventType="",this.eventTypeFunctions=[],this.watchEventTypeNodes=[]},function(e){"use strict";e.extend({urlParams:function(){var e,t,n=[],a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(t=0;t<a.length;t++)e=a[t].split("="),n.push(e[0]),n[e[0]]=e[1];return n},urlParam:function(t){return e.urlParams()[t]}}),e.extend({objectToString:function(t){var n="";return e.each(t,function(t,a){n+="number"==typeof t?e.objectToString(a):t+"~"+a+"&"}),n}}),String.prototype.toTitleCase=function(){return this.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}}(jQuery),function(e){"use strict";var t={};e(document).onZonesAndDomReady(function(){function n(){e(".sortOptions, .sectionOptions").find("li:not(.clicked)").hide()}function a(e,t){var n;for(n=0;n<t.subSections.length;n++)e===t.subSections[n]&&(T=t.name+","+t.subSections.join(","),w=t.name)}function s(e){var t;for(t=0;t<sectionList.length;t++)e===sectionList[t].name?(T=e,sectionList[t].subSections.length>0&&(T+=","+sectionList[t].subSections.join(","))):a(e,sectionList[t])}function r(){w&&(s(w),j.find("input[name=sections]").val(w),""!==T&&(t.args.section=decodeURIComponent(T),e(document.getElementById("left_"+w)).prop("checked",!0),e(".sectionOptions").find("li").hide(),e(document.getElementById(w)).addClass("clicked").show()))}function i(){""===T&&(document.getElementById("left_allcnn")?(e(document.getElementById("left_allcnn")).prop("checked",!0),e(document.getElementById("allcnn")).addClass("clicked").show()):(e(document.getElementById("left_news")).prop("checked",!0),e(document.getElementById("news")).addClass("clicked").show()))}function o(e){var t=new Date,n=t.getTime(),a=new Date(n-31536e6),s=new Date(n-2592e6),r=new Date(n-6048e5),i=new Date(n-864e5),o={yyyy:t.getFullYear(),mm:t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,dd:t.getDate()<10?"0"+t.getDate():t.getDate()},c={yyyy:a.getFullYear(),mm:a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,dd:a.getDate()<10?"0"+a.getDate():a.getDate()},l={yyyy:r.getFullYear(),mm:r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1,dd:r.getDate()<10?"0"+r.getDate():r.getDate()},d={yyyy:i.getFullYear(),mm:i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,dd:i.getDate()<10?"0"+i.getDate():i.getDate()},u={yyyy:s.getFullYear(),mm:s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,dd:s.getDate()<10?"0"+s.getDate():s.getDate()},m="PASTYEAR"===e?c.yyyy+"-"+c.mm+"-"+c.dd:"PASTMONTH"===e?u.yyyy+"-"+u.mm+"-"+u.dd:"PASTWEEK"===e?l.yyyy+"-"+l.mm+"-"+l.dd:"PASTDAY"===e?d.yyyy+"-"+d.mm+"-"+d.dd:"",h="Past years"===e?o.yyyy-1+"-"+o.mm+"-"+o.dd:"",g={start:m,end:h};return g}function c(t,n){var a,s,r,i,o=t?k:x||[],c=o.length||0,l=e(document.getElementById(n)).is(":checked")||!1;for(i=0;c>i;i++)r=e(document.getElementById(o[i])),s=o[i].substring(0,o[i].length-2)||"",a=e(document.getElementById(s)).is(":checked")||!1,n===s&&l?r.addClass("search-facet-bg-selected"):a||r.removeClass("search-facet-bg-selected")}function l(n){var a;e.each(t.filteredBy,function(e){a=t.filteredBy[e],delete t.args[a]}),delete t.args.startDate,delete t.args.endDate,t.filteredBy=[],t.filtered=!1,n?window.location.href="/search/?text="+encodeURIComponent(t.term):(I.args=d(),CSIManager.getInstance().callObject(I))}function d(){var n="",a="";return e.each(t.args,function(e,t){"dredate"!==e&&(n+=a+e+"="+encodeURIComponent(t),a="&")}),n}function u(){"undefined"!=typeof t.args.startDate&&null!==t.args.startDate||!e(document.getElementById("Everything")).prop("checked")?(e(document.getElementById("cnnDidYouMeanBlock")).hide(),e(document.getElementById("cnnTryDifferentOptionsBlock")).show()):(e(document.getElementById("cnnDidYouMeanBlock")).show(),e(document.getElementById("cnnTryDifferentOptionsBlock")).hide()),e(".display-no-results").show()}function m(){var n="<ul>";e('<li><a href="/search/?text='+t.term+'" id="cnnSearchRefineClearAll">Clear Any Search Filters</a></li>').insertBefore("div#cnnSearchTips ul li:first"),"object"!=typeof t.results&&(t.results={count:0,dym:{correctedResults:[]},term:""}),e.each(t.results.dym.correctedResults,function(e){var a,s,r=t.results.dym.correctedResults[e],i=r.mediaType,o=r.mediaDateUts.replace(/\//g,".");n+="<li>","gallery"===i&&(s=CNN.Host.assetPath+"/assets/photo-bnw.svg",a=r.metadata.media.thumbnail.url?r.metadata.media.thumbnail.url:s,n+='<div><a href="'+r.url+'"><span class="image">',n+='<img title="'+r.title+'" alt="'+r.title+'" src="'+a+'"/>',n+="</span></a></div>"),n+='<div><a href="'+r.url+'"><span class="title">'+r.title+"</span>",n+='<span class="date"> ('+o+")</span></a></div>",n+='<div><a href="'+r.url+'"><span class="desc">'+r.metadata.media.excerpt+"</span></a></div>",n+="</li>"}),n+="</ul>",e(document.getElementById("textResultsContainer")).html(n)}function h(){0===t.results.count?e('meta[name="cnn.omniture.search_results_count"]').attr("content","zero"):e('meta[name="cnn.omniture.search_results_count"]').attr("content",t.results.count),e('meta[name="cnn.omniture.search_term"]').attr("content",t.results.term),e('meta[name="cnn.omniture.search_results_page"]').attr("content",parseInt(t.args.page,10));try{trackMetrics({type:"cnnsearch-results",data:{search_results_count:t.results.count<=0?"zero":t.results.count,search_results_page:t.args.page,search_term:t.term}})}catch(n){}}function g(n){var a,s="",r=0,i=e(document.getElementById("cnnSearchDidYouMean")),o=e(document.getElementById("cnnSearchDYMLink")),c=e(document.getElementById("cnnSearchDidYouMeanWithResults")),d=e(document.getElementById("cnnSearchDYMWithResultsLink"));return e(document.getElementById("cnnSearchLoader")).hide("fast"),e(document.getElementById("cnnContentColumn")).show("fast"),t.results={count:n.metaResults.all,content:n.results[0],start:n.criteria[0].startAt,term:n.criteria[0].queries[0],end:n.criteria[0].maxResults,spotlights:n.spotlights,buckets:n.buckets,dym:n.didYouMean},t.spotlights=t.results.spotlights,"object"==typeof t.results.spotlights&&"object"==typeof t.results.spotlights[0]&&"undefined"!=typeof t.results.spotlights[0].id&&"cnnSpotlight"===t.results.spotlights[0].id&&Array.isArray(t.results.spotlights[0].items)&&t.results.spotlights[0].items.length>0&&e.each(t.results.spotlights[0].items,function(e,n){a={},a.id=n.id,a.mediaDateUts=n.mediaDateUts,a.title=n.title,a.description=n.title,a.url=n.url,"undefined"!=typeof n.metadata&&"undefined"!=typeof n.metadata.media&&"undefined"!=typeof n.metadata.media.image&&(a.thumbnail=n.metadata.media.image,"string"==typeof n.metadata.media.excerpt&&n.metadata.media.excerpt.length>0&&(a.description=n.metadata.media.excerpt)),t.results.content.splice(r,0,a),r++}),t.firstLoad&&(e(document.getElementById("Everything")).prop("checked",!0),e('input[name="dredate"][value="Anytime"]').prop("checked",!0),t.firstLoad=!1),t.results.count<1?(""===e.trim(t.term)?(e(document.getElementById("cnnSearchNoMatch")).hide("fast"),e(document.getElementById("cnnSearchEmpty")).show("fast")):(s=decodeURIComponent(t.term.replace(/\+/g," ")),e(document.getElementById("cnnSearchDidNotMatch")).text(s),e(document.getElementById("cnnSearchNoMatch")).show("fast"),e(document.getElementById("cnnSearchEmpty")).hide("fast"),""!==e.trim(t.results.dym.prompt)&&(o.attr("href","/search/?text="+t.results.dym.prompt),o.html(t.results.dym.prompt),i.css("display","block"))),e(".display-results").hide(),e(".display-no-results").show(),m(),u(),"object"==typeof CNN.Features&&CNN.Features.enableOmniture!==!1&&("function"==typeof e.fn.onAnalyticsMetadataReady?e(document).onAnalyticsMetadataReady(h):h()),e(document.getElementById("cnnSearchRefineClearAll")).click(function(){l(!0)})):(y(),f(),p(),"string"==typeof t.results.dym.prompt&&t.results.dym.prompt.length>0&&(d.attr("href","/search/?text="+t.results.dym.prompt),d.html(t.results.dym.prompt),c.css("display","block"))),""!==s?s+" did not match any documents":t.results.count+" Results"}function p(){var n,a=t.results.count<t.results.end?t.results.count:t.results.end;n="Displaying results "+t.results.start+"-"+a+" of "+t.results.count+' for <span class="cnnSearchTerm">'+t.query+"</span>","object"==typeof CNN.Features&&CNN.Features.enableOmniture!==!1&&("function"==typeof e.fn.onAnalyticsMetadataReady?e(document).onAnalyticsMetadataReady(h):h()),e(".display-no-results").hide(),e(document.getElementById("cnnSearchSummary")).html(n),e(".display-results").show()}function y(){var n="";e.each(t.results.content,function(e){var a=t.results.content[e];n+='<article class="cd cd--card cd--idx-0 cd--large cd--horizontal',a.thumbnail&&(n+=" cd--has-media","Videos"===a.collection&&(n+=" cd--video")),n+='"><div class="cd__wrapper" data-analytics="_cn-results_stack-large-horizontal_">',a.thumbnail&&(n+='<div class="cnnVRimgBGSearch" style="background-image: url('+a.thumbnail+')"><a href="'+a.url+'">',n+="Videos"===a.collection?'<span class="cnnVRimgLink"></span></a></div>':'<span class="cnnVRphotoLink"></span></a></div>'),n+='<div><h3 class="cd__headline"><a href="'+a.url+'"><span class="cd__headline-text">'+a.title+'</span></a></h3><span class="cd__timestamp">'+a.mediaDateUts+'</span><div class="cd__description">'+a.description+"</div></div></div></article></li>"}),e(document.getElementById("textResultsContainer")).html(n),e("html, body").scrollTop(0)}function f(){var n,a=t.args.npp,s=10,r=1,i=5,o=2,c=3,l=parseInt(t.args.page,s),u=l,m=u+o,h="",g=Math.ceil(parseInt(t.results.count,s)/a);for(c>=u?(l=r,m=m>=g?g:i):l=u-o,m>=g&&(l=i>=g?r:m-o,m=g),h+=u>r?'<div class="pagination-bar"><div class="pagination-arrow pagination-arrow-left"><a class="cnnSearchPageLink" name="cnnSearchPage'+(u-1)+'"><span class="left image image-left-active"/><span class="right text text-active">Previous</span></a></div><div class="pagination-digits">':'<div class="pagination-bar"><div class="pagination-arrow pagination-arrow-left"><span class="left image image-left-deactive"/><span class="right text text-deactive">Previous</span></div><div class="pagination-digits">',n=l;m>=n;n++)h+=(n===u?'<a class="cnnSearchPageLink cnnAlt"':'<a class="cnnSearchPageLink"')+'name="cnnSearchPage'+n+'">'+n+"</a>"+(m>n?" ":"");h+=g>u?'</div><div class="pagination-arrow pagination-arrow-right"><a class="cnnSearchPageLink" name="cnnSearchPage'+(u+1)+'"><span class="left text text-active">Next</span><span class="right image image-right-active"/></a></div></div></li>':'</div><div class="pagination-arrow pagination-arrow-right"><span class="left text text-deactive">Next</span><span class="right image image-right-deactive"/></a></div></div></li>',e(document.getElementById("cnnSearchPagination")).html(h),e(document.getElementById("cnnSearchPagination")).show(),e("a.cnnSearchPageLink").each(function(){var n=e(this),a=n.attr("name").substring(13);n.click(function(){t.args.page=a,t.args.start=a*t.args.npp-9,I.args=d(),e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I)})}),"undefined"!=typeof CNN&&null!==CNN&&"object"==typeof CNN.Features&&CNN.Features.enableShareButtons===!0&&"function"==typeof CNN.gigyaShareBar&&CNN.gigyaShareBar()}var I,C,S,v,b,E,O,B,D=e.urlParam("text")?e.trim(e.urlParam("text")):e.urlParam("query")?e.trim(e.urlParam("query")):"",w=e.urlParam("sections")||"",T="",M=e.trim(D),k=["Everything_P","STORIES_P","VIDEOS_P","PHOTOS_P","INTERACTIVES_P","IREPORT_P"],x=["Anytime_P","PASTDAY_P","PASTWEEK_P","PASTMONTH_P","PASTYEAR_P"],A=e(".search-cat-list .facet_list"),j=e(".filterHolder"),R=A[0].getBoundingClientRect().width,_=e(".display-facets .cn--adcontainer"),P=_.find("#adcontainer2"),L=e(".clearSearch"),N=jQuery("body");try{do C=M,M=decodeURIComponent(C);while(M!==C)}catch(q){window.location.href=CNN.Search.searchUrl,C=""}M=C.replace(/[\s<>]+/g,"+"),t={input:[e(document.getElementById("searchInputTop"))],term:M,url:CNN.Search.queryUrl,args:{page:1,npp:10,start:1,text:D,type:"all",bucket:!0,sort:"relevance"},filtered:!1,filteredBy:[],firstLoad:!0,emptyQuery:!1};try{t.query=e.trim(decodeURIComponent(t.term.replace(/\++/g," ")))}catch(q){t.query=""}n(),r(),i(),e("input[name=dredate]").click(function(){var n=e(this),a=n.attr("name"),s=n.attr("id"),r=[],i=!1;c(i,s),e(document.getElementById("timeDropList")).val(s.concat("_D")),"Anytime"===s?(delete t.args.startDate,delete t.args.endDate):(t.filtered=!0,t.filteredBy.push(a),r=o(s),t.dateSort=s,""!==r.start&&(t.args.startDate=r.start),""!==r.end&&(t.args.endDate=r.end),t.args[a]=s),t.args.page=1,t.args.start=1,I.args=d(),e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I)}),e(document.getElementById("timeDropList")).change(function(){var n,a=e(this),s=a.children(":selected").attr("name"),r=a.children(":selected").attr("id"),i=[],l=!1;r=r.substring(0,r.length-2),e.each(e("input[name=dredate]:radio"),function(){n=e(this),n.attr("id")===r?n.prop("checked",!0):n.prop("checked",!1)}),c(l,r),"Anytime"===r?(delete t.args.startDate,delete t.args.endDate):(t.filtered=!0,t.filteredBy.push(s),i=o(r),t.dateSort=r,""!==i.start&&(t.args.startDate=i.start),""!==i.end&&(t.args.endDate=i.end),t.args[s]=r),t.args.page=1,t.args.start=1,I.args=d(),e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I)}),e("input:radio").click(function(){var n=e(this),a=n.attr("value"),r=n.attr("name");"collection"===r&&"Everything"===a?a="STORIES,VIDEOS,PHOTOS,INTERACTIVES,IREPORT":"section"===r&&(e(".sectionOptions").find("li").hide(),e(document.getElementById(a)).addClass("clicked").show(),"allcnn"===a?(a="",j.find("input[name=sections]").val("")):(j.find("input[name=sections]").val(a),s(a),a=T)),t.filtered=!0,t.filteredBy.push(r),""!==a?t.args[r]=a:delete t.args[r],t.args.page=1,t.args.start=1,I.args=d(),"undefined"!=typeof t.query&&t.query.length>0&&(e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I))}),e(document.getElementById("catDropList")).change(function(){var n=e(this),a=n.children(":selected").attr("id"),s="collection",r="",i=a.substring(0,a.length-1),o=!0;switch(e.each(e("input[name=collection]:checkbox"),function(){n.attr("id")===i?n.prop("checked","checked"):n.attr("checked",!1)}),c(o,i),a){case"EverythingD":r="STORIES,VIDEOS,PHOTOS,INTERACTIVES,IREPORT";break;case"STORIESD":r="STORIES";break;case"VIDEOSD":r="VIDEOS";break;case"PHOTOSD":r="PHOTOS";break;case"INTERACTIVESD":r="INTERACTIVES";break;case"IREPORTD":r="IREPORT"}t.filtered=!0,t.filteredBy.push(s),t.args[s]=r,t.args.page=1,t.args.start=1,I.args=d(),"undefined"!=typeof t.query&&t.query.length>0&&(e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I))}),e(document.getElementById("cnn-sort")).change(function(){v=e(this).val(),e(document.getElementById("cnn-sort2")).val(v),t.args.sort=v,I.args=d(),"undefined"!=typeof t.query&&t.query.length>0&&(e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I))}),e(document.getElementById("cnn-sort2")).change(function(){v=e(this).val(),e(document.getElementById("cnn-sort")).val(v),t.args.sort=v,I.args=d(),"undefined"!=typeof t.query&&t.query.length>0&&(e(document.getElementById("cnnSearchLoader")).show("fast"),CSIManager.getInstance().callObject(I))}),I={url:t.url,args:"",domId:"cnnSearchSummaryResults",funcObj:g},"undefined"!=typeof t.query&&t.query.length>0?(e(document.getElementById("cnnSearchLoader")).show("fast"),I.args=d(),CSIManager.getInstance().callObject(I),e.each(t.input,function(){var n=e(this);n.val(t.query),L.show(),n.blur(function(){n.val(n.val().toLowerCase())})})):(e(document.getElementById("cnnSearchNoMatch")).hide("fast"),e(document.getElementById("cnnSearchEmpty")).show("fast"),e(".display-results").hide(),e(".display-no-results").show(),e("#cnnTryDifferentOptionsBlock").hide(),m(),u(),"object"==typeof CNN.Features&&CNN.Features.enableOmniture!==!1&&("function"==typeof e.fn.onAnalyticsMetadataReady?e(document).onAnalyticsMetadataReady(h):h()),e(document.getElementById("cnnSearchRefineClearAll")).click(function(){l(!0)})),e(".sortOptions, .sectionOptions").on("click",function(){var t=e(this);t.hasClass("dropExpand")?(t.removeClass("dropExpand").find("li:not(.clicked)").hide(),N.removeClass("noscroll")):(t.addClass("dropExpand").find("li").show(),t.hasClass("sectionOptions")&&N.addClass("noscroll"))}),e(".sortOptions, .sectionOptions").on("click","li",function(n){var a=e(this),r=a.parent();r.hasClass("dropExpand")?(r.removeClass("dropExpand"),N.removeClass("noscroll"),r.find("li").removeClass("clicked").hide(),a.addClass("clicked").show(),v=a.attr("id"),r.hasClass("sortOptions")?t.args.sort=v:(e(document.getElementById("left_"+v)).prop("checked",!0),"allcnn"===v?(v="",j.find("input[name=sections]").val("")):(j.find("input[name=sections]").val(v),s(v),v=T),t.args.section=v),I.args=d(),"undefined"!=typeof t.query&&t.query.length>0&&CSIManager.getInstance().callObject(I)):(r.addClass("dropExpand"),r.find("li").show(),r.hasClass("sectionOptions")&&N.addClass("noscroll")),n.stopPropagation()}),L.on("click",function(){e(document.getElementById("searchInputTop")).val(""),e(this).hide()}),e(document.getElementById("searchInputTop")).on("keyup",function(){""===e(this).val()?L.hide():L.show()}),jQuery(window).throttleEvent("scroll",function(){B=e(this).scrollTop(),b=jQuery(".appia-container.js-appia").length>0?jQuery(".appia-container.js-appia")[0]:jQuery("footer.l-footer")[0],E=b.getBoundingClientRect(),S=j[0].getBoundingClientRect().top+j[0].getBoundingClientRect().height,B>10?N.removeClass("scrollUp").addClass("scrollDown"):N.removeClass("scrollDown").addClass("scrollUp"),_[0].getBoundingClientRect().top<=S?P.addClass("el__locked").css({top:S+10,width:R}):P.removeClass("el__locked").css({left:"auto",top:"auto"}),O=P[0].getBoundingClientRect(),E.top<=O.top+O.height&&P.css({top:E.top-O.height-5})})})}(jQuery);