/*
Copyright &copy; 2000-2017 by <a href=\"http:\/\/www.webcollage.com\/\">Webcollage Inc.<\/a> All rights reserved.
Protected by US Patent 6,865,593 and pending patent applications
*/
"undefined"==typeof window.Webcollage&&(window.Webcollage={});
(function(k){function p(b,c,a){if("undefined"!=typeof b)for(var e=0;e<a.length;++e)"undefined"!=typeof b[a[e]]&&(c[a[e]]=b[a[e]])}function m(b,c){var a=document.createElement("script");a.id=c;a.src=b;a.async=!0;document.getElementsByTagName("head").item(0).appendChild(a)}function r(){var b={},c=window.Webcollage.utils.findSectionsOnPage();if(c&&c.length){b.acssiteSig=window.Webcollage.utils.getAttr(c[0],"data-acssite-sig");b.minAcssiteSig=window.Webcollage.utils.getAttr(c[0],"data-min-acssite-sig");
if(b.acssiteSig&&b.minAcssiteSig)return b;b.compilerV=window.Webcollage.utils.getAttr(c[0],"data-compiler-v")}return b}var s=/(?:\.min)?\.(js|css)$/i;window.Webcollage.minOrMax=function(b){return 0<document.location.search.indexOf("webcollage-scripts=max")?b:b.replace(s,".min.$1")};window.Webcollage.utils={getElementsByClassName:getElementsByClassName=function(b,c,a){getElementsByClassName=document.getElementsByClassName?function(b,a,f){f=f||document;b=f.getElementsByClassName(b);a=a?new RegExp("\\b"+
a+"\\b","i"):null;f=[];for(var c,d=0,g=b.length;d<g;d+=1)c=b[d],a&&!a.test(c.nodeName)||f.push(c);return f}:document.evaluate?function(b,a,c){a=a||"*";c=c||document;var h=b.split(" "),d="",g="http://www.w3.org/1999/xhtml"===document.documentElement.namespaceURI?"http://www.w3.org/1999/xhtml":null;b=[];for(var n,l=0,k=h.length;l<k;l+=1)d+="[contains(concat(' ', @class, ' '), ' "+h[l]+" ')]";try{n=document.evaluate(".//"+a+d,c,g,0,null)}catch(m){n=document.evaluate(".//"+a+d,c,null,0,null)}for(;a=n.iterateNext();)b.push(a);
return b}:function(b,a,c){a=a||"*";c=c||document;var h=b.split(" ");b=[];a="*"===a&&c.all?c.all:c.getElementsByTagName(a);c=[];var d;d=0;for(var g=h.length;d<g;d+=1)b.push(new RegExp("(^|\\s)"+h[d]+"(\\s|$)"));for(var g=0,n=a.length;g<n;g+=1){h=a[g];d=!1;for(var l=0,k=b.length;l<k&&(d=b[l].test(h.className),d);l+=1);d&&c.push(h)}return c};return getElementsByClassName(b,c,a)},getAttr:function(b,c){var a=b.getAttribute&&b.getAttribute(c)||null;if(!a)for(var e=b.attributes,k=e.length,f=0;f<k;f++)e[f].nodeName===
c&&(a=e[f].nodeValue);return a},getModularFeedPieces:function(){return getElementsByClassName("wc-aplus-modular")},findSectionsOnPage:function(){return getElementsByClassName("wc-fragment","div")}};window.Webcollage.loadContent=function(b,c,a,e){window.Webcollage.requestedCpi=c;var q=a&&a.testMode&&!0===a.testMode,f=a&&a.source&&"page"===a.source,h=a&&a.reload&&!0===a.reload;(window.Webcollage.siteCode!=b||window.Webcollage.cpi!=c||f&&h)&&"function"==typeof window.Webcollage.terminatePowerPage&&window.Webcollage.terminatePowerPage();
window.Webcollage.siteCode=b;window.Webcollage.cpi=c;window.Webcollage.loadContentParams={options:{},callbacks:{}};p(a,window.Webcollage.loadContentParams,["containerSelector","reload"]);p(a,window.Webcollage.loadContentParams.options,["autoPlayAndStop","site","layout"]);p(a,window.Webcollage.loadContentParams.callbacks,"hasPowerPageContentCallback noPowerPageContentCallback resizeCallback ipiReadyToInject ipiInjected ipiDataError ipiHotspotHide ipiHotspotShow ipiHotspotsAdded ipiHotspotsRemoved".split(" "));
e&&"function"==typeof e&&(window.Webcollage.loadContentParams.callbacks.onContentLoad=e,window.Webcollage.loadContentOnLoadCallbackProvided=!0);try{b=b&&"string"==typeof b?encodeURIComponent(b):"",c=c&&"string"==typeof c?encodeURIComponent(c):"",""!=b&&""!=c&&window.setTimeout(function(){if(f){if(null!=document.getElementById("wc-loaded-acssite"))return;var a="true"===k.isSecured?"acssite@s.js":"acssite.js",d=r();if(d.acssiteSig&&d.minAcssiteSig)a=window.Webcollage.minOrMax(k.clcRoot+"/"+b+"/js/"+
a),a.lastIndexOf(".min.js")+7==a.length?m(a+"?ver="+encodeURIComponent(d.minAcssiteSig),"wc-loaded-acssite"):m(a+"?ver="+encodeURIComponent(d.acssiteSig),"wc-loaded-acssite");else{if(d.compilerV)var e="?ver="+encodeURIComponent(d.compilerV);m(window.Webcollage.minOrMax(k.cgRoot+"/"+b+"/resources/connections/aplus/js/"+a)+e,"wc-loaded-acssite")}}else null!=document.getElementById("wcpp-load-content")||m(k.serverRoot+"/"+b+"/api/js/method/load-content/type/ppp?environment=live&cpi="+
c+(q?"&site-mode=test":""),"wcpp-load-content");!q&&k.siteReporterRoot&&(window.Webcollage.reportPageView=function(a,d){var e=a||{};e["content-package"]="ppp";document.domain.length&&(e["page-domain"]=document.domain);document.referrer.length&&(e["referrer-domain"]=document.referrer.split("/")[2]);var f=k.siteReporterRoot+"?e=product-detail-page-view&site="+b+"&cpi="+c;if(d)for(var h=0;h<d.length;h++){var g=d[h];g.vendorName&&(f+="&mpn="+encodeURIComponent(g.vendorName));g.prodCategory&&(f+="&prod-category="+
encodeURIComponent(g.prodCategory))}window.setTimeout(function(){var a=f,b=e||{};b.localtimestamp=(new Date).valueOf()+"";for(var c in b)a+="&"+encodeURIComponent(c)+"="+encodeURIComponent(b[c]);"undefined"==typeof document.wcImgs&&(document.wcImgs=[]);b=new Image;b.src=a+"&_sof";document.wcImgs.push(b)},0)})},0)}catch(d){}}})({isSecured:"false",relRoot:"http:\/\/rel.webcollage.net\/apps\/el",siteReporterRoot:"",serverRoot:"http:\/\/content.webcollage.net",
cgRoot:"http:\/\/content.webcollage.net",clcRoot:"http:\/\/content.webcollage.net\/apps\/pp\/assets"});