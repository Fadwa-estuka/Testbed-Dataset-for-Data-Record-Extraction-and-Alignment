function initQuantcastValues(e){"use strict";var t,n,a,i,o,r,c,l="no value set";try{t=_jsmd.init().mdata}catch(s){console.log(s)}c="domestic"===e?"CNN Domestic":"CNN International";try{o=(t.business.cnn.page.section[0]||l).toLowerCase()}catch(s){o="QC Tag Error"}try{r=((t.business.cnn.page.section[1]||"").split(":")[1]||l).toLowerCase()}catch(s){r="QC Tag Error"}try{i=(t.business.cnn.page.branding_content_partner.replace(/^.:/,"")||l).toLowerCase()}catch(s){i="QC Tag Error"}a=location.pathname.replace(/(?:index)?\..*$/,"").toLowerCase(),n=function(){var e,n,i,c="",l=0;try{if(e=t.business.cnn.page.author,!e)return",By Author>Section>Sub-Section>Page.no value set."+o+"."+r+"."+a;for(n=e.replace(/[^a-zA-Z]and[^a-zA-Z]|([^,;]+)?([^a-zA-Z]|^)by[^a-zA-Z]|;|&/g,",").replace(/,[^,]*cnn[^,]*/g,"").replace(/\./g,"").split(","),i=0;i<n.length;i++)n[i].match(/[a-zA-Z]/)&&(c+=",By Author>Section>Sub-Section>Page."+n[i].trim().toLowerCase()+"."+o+"."+r+"."+a,l++);return 0===l?",By Author>Section>Sub-Section>Page."+e+"."+o+"."+r+"."+a:c}catch(s){return",By Author>Section>Sub-Section>Page.QC Tag Error."+o+"."+r+"."+a}},ezt.push({qacct:"p-D1yc5zQgjmqr5",labels:"By Network>Section>Sub-Section>Page."+c+"."+o+"."+r+"."+a+n()+",By Branding Partner>Network>Section."+i+"."+c+"."+o+",By Section>Network."+o+"."+c,uid:"",event:"refresh"})}function twttrWidgetTweetButtonClickHandler(e){"use strict";if(e&&"function"==typeof window.trackMetrics)try{window.trackMetrics({type:"social-click",data:{clickObj:{socialType:"social: twitter"}}})}catch(t){}}function initAnalytics(){"use strict";var e=CNN.Analytics.utils;e.addMetadataObject(),e.jsmdTracking(),e.addTrackingTags(document),e.addSocialMediaInteractionMetrics(),CNN.Gallery.analytics.init(document),jQuery(document).on("jumbotron-initialization-complete",CNN.Gallery.analytics.initJumbotronTracking),videoLeafGoInteraction(),initQuantcastValues(CNN.contentModel.edition||"domestic")}function videoLeafGoInteraction(){"use strict";var e;"video"===CNN.contentModel.pageType&&(e=jQuery(".cnngo-logo"),"function"==typeof window.trackMetrics&&e.length>0&&e.closest("a").on("click",function(){try{window.trackMetrics({type:"user-interaction",data:{interaction:"videoleaf:cnngo"}})}catch(e){}}))}var CNN=window.CNN||{},ezt=window.ezt||[];CNN.Analytics=CNN.Analytics||{},CNN.contentModel=CNN.contentModel||{},CNN.Gallery=CNN.Gallery||{},CNN.Analytics.utils=function(){"use strict";function e(){var e=CNN.CurrentSize.getClientWidth(),t=640,n=960,a=1120,i="no-value-set";return i=e>=a?"14col":a>e&&e>=n?"12col":n>e&&e>=t?"8col":"4col"}function t(e){var t={};return t.section="section front",t.special="specials",t.videos="video","string"==typeof e&&e in t&&(e=t[e]),"undefined"==typeof CNN.contentModel||"undefined"==typeof CNN.contentModel.sectionName||"homepage"!==CNN.contentModel.sectionName&&"intl_homepage"!==CNN.contentModel.sectionName||(e="index"),e}function n(e,t,n){var a=e.split(";"),i=0;for(t="string"==typeof t&&t.length>0?";expires="+t:"",n="string"==typeof n&&n.length>0?";path="+n:";path=/";i<a.length;i++)document.cookie=a[i]+n+t+";"}function a(e,t){"string"==typeof t&&t.length>0&&n(t),e.currentTarget.attributes.hasOwnProperty("data-vr-track")&&window._vrtrack({track_url:e.currentTarget.href,event_type:"partner"})}function i(){var n,a,i,r,c,l=CNN.contentModel.pageType,s="no-value-set",d=s,u=e(),p=jQuery(CNN.Carousel.carouselSelector).first(),g=jQuery("div[data-analytics-pivit]").length>0,h=s,y=s,_=s,m=jQuery(".js-media__video").length,f=CNN.contentModel.env||s,N=CNN.contentModel.analytics&&CNN.contentModel.analytics.showName||"",b=CNN.contentModel.title||s,C=[],v=s,w=s,k=s,j=s,M=s,T=s,Q="none",z=0,S="";if("undefined"==typeof CNN.contentModel||"undefined"==typeof CNN.contentModel.pageType||"undefined"==typeof CNN.contentModel.sectionName||"section"!==CNN.contentModel.pageType&&"homepage"!==CNN.contentModel.sectionName&&"intl_homepage"!==CNN.contentModel.sectionName||(b=s),"undefined"!=typeof CNN.contentModel&&"undefined"!=typeof CNN.contentModel.layout&&"error"===CNN.contentModel.layout&&(l="error"),p.length)switch(l){case"article":h=p.data("galleryname"),y=p.find("[data-slidename]").first().data("slidename");break;case"gallery":h=b,y=p.find("[data-slidename]").first().data("slidename"),z=1}"undefined"!=typeof CNN.contentModel.analytics&&("undefined"!=typeof CNN.contentModel.analytics.publishDate&&(_=CNN.contentModel.analytics.publishDate,C=CNN.contentModel.analytics.publishDate.split("T")[0].split("-"),3===C.length&&(_=C[0]+"/"+C[1]+"/"+C[2])),v=CNN.contentModel.analytics.author||s,w=CNN.contentModel.analytics.cap_genre||s,k=CNN.contentModel.analytics.cap_franchise||s,j=CNN.contentModel.analytics.cap_mediaType||s,M=CNN.contentModel.analytics.cap_topics||s,T=CNN.contentModel.pageType||s,r=CNN.contentModel.analytics.branding_content_page||s,n=CNN.contentModel.analytics.branding_content_zone||s,a=CNN.contentModel.analytics.branding_content_container||s,i=CNN.contentModel.analytics.branding_content_card||s,c=CNN.contentModel.analytics.contentId||s,"gallery"===T&&"string"==typeof CNN.contentModel.analytics.branding_content_page&&"default"!==CNN.contentModel.analytics.branding_content_page&&(S=CNN.contentModel.analytics.branding_content_page),g&&(Q="pivit widget")),jQuery.extend(CNN.omniture,{branding_ad_page:s,branding_ad_zone:s,branding_ad_container:s,branding_ad_card:s,branding_content_page:r,branding_content_zone:n,branding_content_container:a,branding_content_card:i,branding_gallery:S,cap_author:v,cap_content_type:T,cap_genre:w,cap_franchise:k,cap_media_type:j,cap_show_name:N,cap_topic:M,video_opportunity:m,content_id:c,content_type:Q,friendly_name:d,full_gallery:z,gallery_name:h,gallery_slide:y,grid_size:u,headline:b,ireport_assignment:s,publish_date:_,rs_flag:f,section:o(CNN.contentModel),template_type:t(l)}),"error"===CNN.omniture.template_type&&(CNN.omniture.section=["error",s]),"function"==typeof jQuery.fn.triggerAnalyticsMetadataReady?jQuery(document).triggerAnalyticsMetadataReady():jQuery(document).trigger("cnn-analytics-metadata-added")}function o(e){var t="",n="",a="",i=e,o=e.analytics||{};return a="undefined"!=typeof i.sectionName?i.sectionName:"undefined"!=typeof o.parentPath?o.parentPath.indexOf("/")>-1?o.parentPath.split("/")[1]:o.parentPath:"undefined"!=typeof i.layout&&"search"===i.layout?"search":"no-value-set",d[a]?(t=d[a].section,n=d[a].subsection||""):(t=a,n=""),"undefined"!=typeof o.subSectionName&&""!==o.subSectionName&&(n=o.subSectionName),[t,n]}function r(){var e;try{e=location.href.toLowerCase(),window.jsmd=_jsmd.init(),-1===e.indexOf("/.element/ssi/ads.iframes/")&&-1===e.indexOf("/doubleclick/dartiframe.html")&&-1===e.indexOf("/search/")&&(_jsmd.plugin.gQuery("refresh")?jsmd.trackMetrics("dynamic-autoRefresh","autorefresh","cnn-autorefresh"):"gallery"!==CNN.omniture.template_type_content&&jsmd.send())}catch(t){console.log("JSMD/Analytics error: ",t)}}function c(e){var t=jQuery(".nav--plain-header"),n=jQuery("footer.l-footer"),a=CNN.Analytics.hpt;jQuery(e).find("a").each(function(){var e,i=jQuery(this),o=i.attr("href");"string"==typeof o&&(e="page",i.closest(".nav",t).length>0?e="header":i.closest(".nav-flyout__menu-item",t).length>0?e="header":i.closest(".l-footer",n).length>0&&(e="footer"),a.getHptValues(i,e).done(function(e){var t;"object"==typeof e&&-1===o.indexOf(e.hptValue)?(t="hpt="+e.hptValue+";hpt2="+e.hpt2Value,i.click(jQuery.proxy(function(e,t){CNN.Analytics.utils.clickEventTracker(t,e)},this,t))):"string"==typeof i.data("vr-track")&&o.length>1&&i.click(CNN.Analytics.utils.clickEventTracker)}))})}function l(){var e=jQuery("a","div.metadata-header__follow-icon"),t=jQuery("div.share-bar-whatsapp-container"),n=jQuery("a","div.nav-flyout-footer__social");e.click(function(){return s(this,!1)}),t.click(function(){var e=document.querySelector(".share-bar-whatsapp-container").dataset,t=e.url+" "+e.title+" "+e.storyurl;return jQuery("html").hasClass("phone")&&(document.location=t),s(this,!1)}),n.click(function(){return s(this,!0)})}function s(e,t){var n=e.getAttribute("data-social-media-name");if("function"==typeof window.trackMetrics)try{window.trackMetrics({type:"social-click",data:{clickObj:{socialType:"social: "+n,isMainNav:t}}})}catch(a){}return!0}var d={videos:{section:"videos"},"watch-cnn":{section:"watch-cnn"},intl_homepage:{section:"cnn homepage",subsection:""},homepage:{section:"cnn homepage",subsection:""},us:{section:"us",subsection:""},world:{section:"world",subsection:""},politics:{section:"politics",subsection:""},tech:{section:"tech",subsection:""},health:{section:"health",subsection:""},entertainment:{section:"entertainment",subsection:""},living:{section:"living",subsection:""},aviation:{section:"travel",subsection:"aviation"},destinations:{section:"travel",subsection:"destinations"},foodanddrink:{section:"travel",subsection:"foodanddrink"},hotels:{section:"travel",subsection:"hotels"},intl_travel:{section:"travel",subsection:""},travel:{section:"travel",subsection:""},china:{section:"world",subsection:"china"},africa:{section:"world",subsection:"africa"},americas:{section:"world",subsection:"americas"},asia:{section:"world",subsection:"asia"},europe:{section:"world",subsection:"europe"},middleeast:{section:"world",subsection:"middleeast"},football:{section:"sport",subsection:"football"},motorsport:{section:"sport",subsection:"motorsport"},sailing:{section:"sport",subsection:"sailing"},golf:{section:"sport",subsection:"golf"},tennis:{section:"sport",subsection:"tennis"},horseracing:{section:"sport",subsection:"horseracing"},equestrian:{section:"sport",subsection:"equestrian"},skiing:{section:"sport",subsection:"skiing"},architecture:{section:"style",subsection:"architecture"},arts:{section:"style",subsection:"arts"},autos:{section:"style",subsection:"autos"},design:{section:"style",subsection:"design"},fashion:{section:"style",subsection:"fashion"},luxury:{section:"style",subsection:"luxury"},style:{section:"style",subsection:""}};return CNN.omniture=CNN.omniture||{},{gridSize:e,renamingTemplateType:t,addMetadataObject:i,jsmdTracking:r,addTrackingTags:c,setCookie:n,clickEventTracker:a,addSocialMediaInteractionMetrics:l}}(),CNN.Analytics.hpt=function(){"use strict";function e(e){var t="";return e="undefined"==typeof e?"":e.replace(/^zn-/,""),t=c[e]?c[e]:"no-value-set"}function t(e){var t="";return e="undefined"==typeof e?"":e.replace(/^cn-/,""),t=r[e]?r[e]:"no-value-set"}function n(n,a){var i,o={},r="no-value-set",c=r,l=CNN.contentModel.pageType,s=CNN.contentModel.sectionName||r,d=CNN.contentModel.type||r,u=r,p=r,g=r,h=r,y=r,_=r,m="zone-level",f=[],N=r,b=r,C=r,v=n.closest("[data-analytics]"),w=n.closest("[class^='zn zn-']"),k=n.closest("section.zn"),j=n.closest(".cn"),M=n.closest("[data-analytics-header]"),T=r,Q=r,z=r,S=[],A=CNN.Analytics.utils;return m=n.text().length>0?n.text().toLowerCase():"zone-level",w.length&&"A"!==w[0].tagName&&w[0].className&&(i=w[0].className,"undefined"!=typeof i&&(h=i.split(" ").length>1?i.split(" ")[2]:r)),k.length&&(i=k.data("zone-label"),"undefined"!=typeof i&&i.length&&(g=i),i=k.data("vr-zone"),"undefined"!=typeof i&&i.length&&(y=i)),i=v.length?v.data("analytics"):n[0].className.indexOf("cd-banner")>=0?n.nextAll("[data-analytics]").data("analytics"):void 0,"undefined"!=typeof i&&i.length&&(c=i.split("_"),c=c.length?c:[],N=c[0].length>0?c[0]:r,N=N.replace(/\s/g,"-"),b=c[1],c.length>=4&&c[3].length>0?_=c[3]:0===n.text().length||n.text().indexOf("<img")>=0?(_="image",m="image"):_="text"),n.eq(0).text()&&(p=n.eq(0).text(),p=p.replace(/[ ]/g,"-"),p.indexOf("<img")>=0&&(p="image-file")),i=M.data("analytics-header"),"header"===a&&"string"==typeof i&&i.split("_").length&&(u="header",S=i.split("_"),S=S.length?S:[],T="main-menu"===S[0]||"flyout-menu"===S[0]?S[1].toLowerCase():r,Q="flyout-submenu"===S[0]?S[1].toLowerCase():r,z=r),i=v.data("analytics"),"footer"===a&&"string"==typeof i&&i.split("_").length&&(S=i.split("_"),S=S.length?S:[],1===S.length&&(u="footer",T=S[0].toLowerCase(),Q=r,z=r),2===S.length&&(u=S[0].toLowerCase(),T=S[1].toLowerCase(),Q=r,z=r),3===S.length&&(u=S[0].toLowerCase(),T=S[1].toLowerCase(),Q=S[2].toLowerCase(),z=r)),"page"===a&&j.length&&(i=j[0].className,"undefined"!=typeof i&&(f=i.split(/\s+/),f.length&&(C=f[f.length-1],C=C.replace(/_/g,"-")))),o={linkText:m,hpt_page_pageIndicator:d,hpt_page_gridSize:A.gridSize(),hpt_page_section:s,hpt_page_template:A.renamingTemplateType(l),hpt_page_zoneId:y,hpt_page_zoneLabel:g,hpt_page_containerId:C,hpt_page_containerLabel:N,hpt2_page_pageIndicator:d,hpt2_page_gridSize:A.gridSize(),hpt2_page_section:s,hpt2_page_template:A.renamingTemplateType(l),hpt2_page_zoneId:y,hpt2_page_zoneType:e(h),hpt2_page_containerId:C,hpt2_page_containerType:t(b),hpt_header_globalIndicator:u,hpt_header_gridSize:A.gridSize(),hpt_header_section:s,hpt_header_template:A.renamingTemplateType(l),hpt_header_level1:T,hpt_header_level2:Q,hpt_header_level3:z,hpt_header_linkElement:m,hpt_header_linkType:_,hpt2_header_globalIndicator:u,hpt2_header_gridSize:A.gridSize(),hpt2_header_section:s,hpt2_header_template:A.renamingTemplateType(l),hpt2_header_level1:T,hpt2_header_level2:Q,hpt2_header_level3:z,hpt2_header_linkElement:m,hpt2_header_linkType:_}}function a(e,t,n){var a=jQuery.Deferred();return fastdom.measure(function(){var i,o,r,c=t.data("filter-hpt"),l=t.data("filter-"+e),s="string"==typeof c,d="string"==typeof l,u="",p=n.split("_");if(d||s){for(u=d?l:c,i=u.split("_"),o=0,r=i.length;r>o;o+=1)p[o]&&""!==i[o]&&(p[o]=i[o]);n=p.join("_")}a.resolve(n)}),a.promise()}function i(e,t){return{hptValue:CNN.Utils.b64Encode(e.replace("…","")).replace(/\r\n/g,""),hpt2Value:CNN.Utils.b64Encode(t.replace("…","")).replace(/\r\n/g,"")}}function o(e,t){var o=n(e,t),r="",c="";return"page"===t?(r=o.hpt_page_pageIndicator+"_"+o.hpt_page_gridSize+"_"+o.hpt_page_section+"_"+o.hpt_page_template+"_"+o.hpt_page_zoneId+"_"+o.hpt_page_zoneLabel+"_"+o.hpt_page_containerId+"_"+o.hpt_page_containerLabel,c=o.hpt2_page_pageIndicator+"_"+o.hpt2_page_gridSize+"_"+o.hpt2_page_section+"_"+o.hpt2_page_template+"_"+o.hpt2_page_zoneId+"_"+o.hpt2_page_zoneType+"_"+o.hpt2_page_containerId+"_"+o.hpt2_page_containerType):(r=o.hpt_header_globalIndicator+"_"+o.hpt_header_gridSize+"_"+o.hpt_header_section+"_"+o.hpt_header_template+"_"+o.hpt_header_level1+"_"+o.hpt_header_level2+"_"+o.hpt_header_linkElement+"_"+o.hpt_header_linkType,c=o.hpt2_header_globalIndicator+"_"+o.hpt2_header_gridSize+"_"+o.hpt2_header_section+"_"+o.hpt2_header_template+"_"+o.hpt2_header_level1+"_"+o.hpt2_header_level2+"_"+o.hpt2_header_linkElement+"_"+o.hpt2_header_linkType),jQuery.when(a("hpt1",e,r),a("hpt2",e,c)).then(i)}var r={"list-hierarchical-small-horizontal":"lead+list:lead+headlines-w/images","list-hierarchical-xs":"lead+list:lead+headlines","list-large-horizontal":"list:full-cards","list-large-vertical":"vertical-strip:full-cards","list-small-horizontal":"list:headlines+images","list-small-vertical":"vertical-strip:headlines+images","list-xs":"headlines","grid-medium":"grid:grid(spaced)","grid-small":"grid:grid","stack-large-horizontal":"list:full-cards(spaced)","stack-large-vertical":"vertical-strip:full-cards(spaced)","stack-medium-horizontal":"list:headlines+images(spaced)","stack-medium-vertical":"vertical-strip:headlines+images(spaced)","carousel-large-strip":"carousel:large","carousel-medium-matrix":"carousel:double-deck","carousel-medium-strip":"carousel:standard","stack-ul":"unknown name","section-preview":"unknown name"},c={"left-fluid-right-stack":"hero-3","left-fluid-bg-bleed":"superhero","left-fluid":"priority+2","right-stack-bg-inline":"hero-plus","right-stack-bg-bleed":"full-bleed",staggered:"staggered",balanced:"balanced","60-40":"priority+1","30-70":"grid-right","40-60":"unknown name","70-30":"unknown name",body:"unknown name","single-column":"unknown name","zone-background":"unknown name","zone-banner":"unknown name","zone-header":"unknown name"};return{getHptValues:o}}(),CNN.Gallery.analytics=function(){"use strict";function e(e,t){var n=jQuery(e),a={},i=[],o="",r={},c=!1,l=[],s="",d="",u=1;for(c="boolean"==typeof n.data("is-gallery")?n.data("is-gallery"):!1,a={video:0,article:0,gallery:0,image:0,hyperlink:0,matched:0},jQuery("div.owl-item div[data-analytics]",e).each(function(){var e,t=jQuery(this);e=t.data("analytics").split("_"),l.push(e[2]||""),d=e[1]}),s=l.length>0?l[0]:s;u<l.length;u++)if(l[u]!==s){s="multimedia";break}return"boolean"==typeof t&&t&&(o="owl-nav"===e.className?e.offsetParent.id.split("_")[1]:e.id.split("_")[1],r=document.getElementById("cn-jumbotron-details-container_"+o),jQuery.each(jQuery(r).find(".js-jumbotron-card-wrapper.jumbotron-card-wrapper.active-card"),function(e,t){i=t.firstChild.className.match(/cd\-\-article/),null===i&&(i=t.firstChild.className.match(/cd\-\-(video|image|gallery|hyperlink)/))}),jQuery.each(jQuery(r).find("article.cd"),function(e,t){t.className.indexOf("cd--video")>-1?a.video++:t.className.indexOf("cd--article")>-1?a.article++:t.className.indexOf("cd--image")>-1?a.image++:t.className.indexOf("cd--gallery")>-1?a.gallery++:t.className.indexOf("cd--hyperlink")>-1&&a.hyperlink++}),a.video>0&&(s="video",a.matched++),a.article>0&&(s="article",a.matched++),a.image>0&&(s="image",a.matched++),a.hyperlink>0&&(s="hyperlink",a.matched++),a.gallery>0&&(s="gallery",a.matched++),a.matched>1&&(s="multimedia")),s=s.length>0?"carousel_"+s:s,{contentType:s,carouselType:d,isGallery:c}}function t(e){return"undefined"!=typeof jQuery(e).data(u)?jQuery(e).data(u):""}function n(e){var t=-1,n="",a=jQuery(e),i=a.find(p)||[];return t=a.data("active")||"",jQuery.isNumeric(t)&&t>0&&(n=jQuery(i[t-1]).find("img").attr("src"),n="undefined"!=typeof n?n.substring(n.lastIndexOf("/")+1):""),n}function a(e,t){var n=[],a=0;return t?(n=jQuery(CNN.Jumbotron.Constants.CONST_SMALL_CAROUSEL_SELECTOR),n.find(".owl-item").each(function(e,t){jQuery(t).hasClass("cloned")||a++})):a="undefined"!=typeof jQuery(e).data(g)?jQuery(e).data(g):"",a}function i(e){var t=jQuery(".owl-stage",e).find(".owl-item.active .el__resize img:first").attr("alt");return"string"!=typeof t?"":t.replace(/[\u0250-\ue007]/g,"").substr(0,40)}function o(e,t){var n=[],a=0;return t?(n=jQuery(CNN.Jumbotron.Constants.CONST_SMALL_CAROUSEL_SELECTOR),n.find(".owl-item").each(function(e,t){return!jQuery(t).hasClass("cloned")&&(a++,jQuery(t).hasClass("active"))?!1:void 0})):a=i(e),a}function r(i,r){var c={};return c=e(i,r),c.galleryName=t(i),c.galleryType=c.isGallery?"photo gallery":"carousel",c.imageName="carousel"!==c.galleryType?n(i):"",c.slideCount=a(i,r),c.slideNumber=o(i,r),"carousel"!==c.galleryType&&(c.carouselType=""),c}function c(e,t){"undefined"!=typeof t.isJumbotron&&t.isJumbotron===!0&&(e.data.page_view=!0,e.data.carousel_type="jumbotron")}function l(e){var t=CNN.CurrentSize.getClientWidth()*CNN.CurrentSize.getClientHeight(),n=t/2+1,a=e.target.clientWidth*e.target.clientHeight,i=r(e.currentTarget,e.isJumbotron),o=CNN.Analytics.hpt;o.getHptValues(jQuery(e.currentTarget),"page").done(function(t){var o={type:"cnngallery-click",data:{page_view:!1,gallery_name:i.galleryName,image_name:i.imageName,content_type:i.contentType,carousel_type:i.carouselType,gallery_type:i.galleryType,gallery_slide_count:i.slideCount,gallery_slide:i.slideNumber,hpt:t.hptValue,hpt2:t.hpt2Value}};o.data.page_view=a>=n,c(o,e),CNN.ads.events.refreshGalleryRailAd(e),null!==window.trackMetrics&&void 0!==window.trackMetrics&&window.trackMetrics(o)})}function s(e){jQuery(CNN.Carousel.carouselSelector,e).off("carousel-action-event").on("carousel-action-event",l)}function d(){var e,t,n=0;try{if(t=function(e,t){"undefined"!=typeof t&&t.actionType===CNN.Jumbotron.Constants.CONST_EVENT_CAROUSEL_ACTION_TYPE_CLICK?(e.isJumbotron=!0,l(e)):"click"!==e.type&&"changed"!==e.type&&"dragged"!==e.type||(e.isJumbotron=!0,l(e))},window.cnnJumbotronManager&&window.cnnJumbotronManager.getJumbotrons)for(e=window.cnnJumbotronManager.getJumbotrons();n<e.length;n++)e[n]instanceof CNN.Jumbotron.Container&&"undefined"!=typeof e[n].jumbotronElementRaw&&(jQuery(e[n].jumbotronElementRaw).on("carousel-action-event",t),Modernizr.touchevents?jQuery(e[n].jumbotronElementRaw).find(".cn-jumbotron-card-details").on(CNN.Carousel.events.changed,t):(jQuery(e[n].jumbotronElementRaw).find(".owl-nav").on("click",t),jQuery(e[n].jumbotronElementRaw).find(".jumbotron-small-carousel").on(CNN.Carousel.events.dragged,t)))}catch(a){console.log("Error caught in initJumbotronTracking: %s",a.message)}}var u="galleryname",p="[data-slidename]",g="slide-count";return{init:s,initJumbotronTracking:d,trackGalleryClick:l}}(),"object"==typeof CNN.contentModel&&CNN.contentModel.lazyLoad?(jQuery(document).onZonesAndDomReady(function(e){"use strict";initAnalytics()}),CNN.contentModel.enableIntelligentLoad&&jQuery(document).on("onIZSecondaryLoad",function(e,t){"use strict";"string"==typeof t&&(CNN.Analytics.utils.addTrackingTags("#"+t),CNN.Gallery.analytics.init("#"+t))})):jQuery(document).ready(function(){"use strict";initAnalytics()}),jQuery(window).on("load",function(){"use strict";window.hasOwnProperty("twttr")&&window.twttr.hasOwnProperty("widgets")&&window.twttr.ready(function(){window.twttr.events.bind("click",twttrWidgetTweetButtonClickHandler)})});