/* repo: scripts/release-2017-01-25@2.39.0-33-g8e2ff9c - Package Version: 2.40.0 - 2017-01-25 09:46 am - User: Lu, Ryan (Ryan Lu) */
if(webmd.expandable={init:function(){$("[data-toggle-selector],[data-toggle-alias]").click(function(){var a=$(this).data("toggle-size")||9999,b=$(this).data("toggle-selector"),c=$(this).data("toggle-relation"),d=$(this).data("toggle-mask")||!1,e=$(this).data("toggle-metrics")||!1,f=$(this).data("toggle-mask-click")||!0,g=$(this).data("toggle-alias")||!1,h=this;if(g)return void $(g).trigger("click");if($(window).width()<a){switch(d&&($(h).before('<div class="'+d+'"></div>'),$("body").attr("data-content-masked","true"),f&&$("."+d).click(function(){$(h).trigger("click")})),c){case"sibling":$(h).toggleClass("expanded").next(b).first().toggleClass("expanded");break;case"parent":$(h).toggleClass("expanded").parents(b).first().toggleClass("expanded");break;case"child":$(h).toggleClass("expanded").children(b).first().toggleClass("expanded");break;default:$(h).toggleClass("expanded"),$(b).toggleClass("expanded")}$(h).hasClass("expanded")?e&&wmdPageLink(e.split(",")[0]):($("."+d).remove(),$("body").removeAttr("data-content-masked"),e&&wmdPageLink(e.split(",")[1]))}})}},$(function(){webmd.expandable.init()}),webmd.popover={init:function(){var a=this;$("body").on("click","[data-popover-text]",function(b){var c=($(this).data("popover-method")||"overlay",$(this).data("popover-text")||"");"ajax"===c?(b.preventDefault(),$.get($(this).attr("href"),function(b){c=$(b).children().html(),a.handlePopover(a.method,c)})):a.handlePopover(a.method,c)})},handlePopover:function(a,b){webmd.overlay.open({html:b,innerWidth:500})}},$(function(){webmd.popover.init()}),/*! webmd.adViewability.js */
webmd.object.set("webmd.adViewability"),webmd.adViewability={init:function(){"use strict";webmd.debug("|||||||||| webmd.adViewability ----->","init");var a=$(".module.ad.ad-101"),b=window.s_sponsor_brand||"",c=window.s_sponsor_program||"",d=window.s_package_type||"",e=window.s_channel_health||null,f=$("#leftAd_rdr"),g={"Skin Problems and Treatments":!0,Lupus:!0,"Sleep Disorders":!0};this.addClassNoBanner(a),""===b&&""===c&&($("html").hasClass("ua_type_mobile")||$("html").hasClass("cookie-consent")||d.indexOf("answers")>=0||d.indexOf("search")>=0||(this.makeBannerSticky(a),!($(window).width()>=1350)||g[e]||b&&c||!f.length||this.makeLeftAdSticky(f)))},makeLeftAdSticky:function(a){var b=$("#masthead");a&&($("html").addClass("sticky-left-ad"),a.addClass("sticky-leftAd"),$(window).scroll(function(){var c=a.offset().top;window.pageYOffset>c-b.height()&&a.addClass("is-fixed").removeClass("sticky-leftAd")}))},addClassNoBanner:function(a){0===a.length&&$("html").addClass("no-banner")},makeBannerSticky:function(a){function b(b,c){b>c&&(b>e&&i>b?($("html").addClass("sticky-banner"),$("main").css("margin-top",a.css("height")),a.addClass("is-fixed")):b>i&&a.removeClass("is-fixed is-static").addClass("is-absolute"))}function c(b,c){c>b&&($("html").removeClass("sticky-banner"),$("main").removeAttr("style"),a.removeClass("is-fixed is-absolute").addClass("is-static"))}var d=$("html"),e=90,f="",g=0,h=0,i=1100,j="",k="";$("html").hasClass("legacy")&&(g=25),a.length>0&&(f=a.offset().top,Modernizr.touch&&($(window).on("touchstart",function(a){j=a.originalEvent.touches[0].pageY}),$(window).on("touchmove",function(d){var f=$(this).scrollTop(),g=a.offset().top,l="",m="";k=d.originalEvent.touches[0].pageY,l=Math.abs(k-j),m=i+g-e,a.hasClass("is-static")||a.hasClass("pushdown")||(j>k&&l>5?b(f,h):k>j&&l>5&&c(f,m),h=f)})),$(window).scroll(function(){var b=$(this).scrollTop();a.offset().top;a.hasClass("is-static")||a.hasClass("pushdown")||(b>h?b>e+g&&i>b?(d.addClass("sticky-banner"),$("main").css("margin-top",a.css("height")),a.addClass("is-fixed")):b>i&&a.removeClass("is-fixed is-static").addClass("is-absolute"):((e>b||b>i)&&(d.removeClass("sticky-banner"),$("main").removeAttr("style"),a.removeClass("is-fixed is-absolute")),b>i&&a.addClass("is-static")),h=b)}))}},$(function(){webmd.adViewability.init()}),$(function(){if(window.top!==window.self)return webmd.debug("pagefair adblocker not enabled in iframe."),!1;var a="https:"===document.location.protocol?"https://":"http://",b={"webmd.com":"50E60B3D09D14DE8","rxlist.com":"05C99B28E1504BE0","medicinenet.com":"2CB584DD547C43AF","emedicinehealth.com":"1BC88E33DABC4A6A"},c=document.location.hostname;return c.indexOf("onhealth.com")>-1?!1:($.each(b,function(a,b){return c.indexOf(a)>-1?void(window.bm_website_code=b):void 0}),window.pf_notify=function(a){return"mobile"===webmd.useragent.ua.type||"tablet"===webmd.useragent.ua.type?!1:void(a?(webmd.debug("PAGEFAIR: ADBLOCKER IS IN USE"),webmd.cookie.exists("gab")||(window.wmdSetContext("wb.adblocker","ab1"),window.wmdPageLink("")),"1"!==webmd.cookie.get("gab")&&webmd.cookie.set("gab",1,{expires:365})):(webmd.debug("PAGEFAIR: ADBLOCKER NOT IN USE"),"0"!==webmd.cookie.get("gab")&&webmd.cookie.set("gab",0,{expires:365})))},webmd.load({js:a+"asset.pagefair.com/measure.min.js"}),void webmd.load({js:a+"asset.pagefair.net/ads.min.js"}))}),/*! webmd.p.decisionSelect */
function(){var a=webmd.adsCookie.get("sess"),b=webmd.cookie.exists("ds_30");a&&a.ds&&a.ds.sp&&webmd.ads2.setPageTarget("dsf",a.ds.sp.match(/^dssp_(.+)x$/)[1]),webmd.p.decisionSelect=function(a){webmd.p.decisionSelect.sponsorId=a;var c=window.image_server_url||"http://img.webmd.com/dtmcms/live";!b&&webmd.p.pim.isAllowed()&&require([c+"/webmd/PageBuilder_Assets/JS_static/sponsored_programs/decision_select/survey-runner.min.js"])}}(),window.location!==window.parent.location&&window.location.search.indexOf("?asset=")>-1){var life=webmd.url.getLifecycle().substr(1)||"live",template="//img{lifecycle}{env}.{sld}/dtmcms/{life}/webmd/consumer_assets/site_images/amd_modules/embedded_assets/1/embed-iframe-helper.js",srcUrl=webmd.substitute(template,{lifecycle:webmd.url.getLifecycle(),life:life,env:webmd.url.getEnv(),sld:webmd.url.getSLD()}),helper;helper=document.createElement("script"),helper.type="text/javascript",helper.src=srcUrl,$("head").append(helper),window.s_not_pageview="y"}
//# sourceMappingURL=../JS_static/sourcemaps/responsive_scripts_sourcemap.js