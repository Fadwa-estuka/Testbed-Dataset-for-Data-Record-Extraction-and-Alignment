!function(e){"use strict";function t(e){var t=e.attr("id");if("undefined"==typeof t||""===t){do t="gigyaShareBar_"+k,k+=1;while(document.getElementById(t));e.attr("id",t)}return t}function n(e,t){if("function"==typeof window.trackMetrics)try{window.trackMetrics({type:"social-click",data:{clickObj:{socialType:"social: "+e+"_click",headline:t}}})}catch(n){}}function i(e,t){if("function"==typeof window.trackMetrics)try{window.trackMetrics({type:"social-click",data:{clickObj:{socialType:"social: facebook "+e+"_click",headline:t}}})}catch(n){}}function a(t,i){e.each(t.providers.split(","),function(a,o){n(o,i.title),e.ajax({url:CNN.SocialConfig.gigya.shareStatsPostURL||"",dataType:"json",type:"POST",data:{actionType:"socialShare",socialType:o||"",headline:i.title||"",shortUrl:t.targetURL||"",url:window.location.href||"",env:CNN.contentModel.env||""}})})}function o(e,t){var n=e.clone();return t&&t.url&&n.setLinkBack(t.url),n}function r(n,i){var o,r,s,c,d=CNN.accounts.cfg.gigya;i=i||{},"undefined"!=typeof i.elem&&"undefined"!=typeof i.elem.data("isshorturl")&&(C=i.elem.data("isshorturl")),r=e("<div>").attr("data-js-gigya-share","wrapper").appendTo("body"),s=t(r),c=C?"never":"whenRequired",o={deviceType:"auto",wrap:!0,operationMode:"simpleShare",containerID:s,userAction:n,moreEnabledProviders:d.primaryProviders+","+d.moreEnabledProviders,shortURLs:c,onSendDone:function(e){a(e,n)}},gigya.socialize.showShareUI(o),window.setTimeout(function(){r.attr("data-js-gigya-share-fade","")},10),window.setTimeout(function(){r.attr("data-js-gigya-share-active","")},300)}function s(e){var t=v||b;t?(t=o(t,e),r(t,e)):window.console&&window.console.error&&window.console.error("No canonical share widget has been defined")}function c(n,i){var o,r,s,c,d,l,h=CNN.accounts.cfg.gigya;i=i||{},"undefined"!=typeof i.elem&&null!==i.elem&&"function"==typeof i.elem.data&&"undefined"!=typeof i.elem.data("isshorturl")&&(C=i.elem.data("isshorturl")),r=e("<div>"),!Modernizr.mobile||Modernizr.ios&&Modernizr.tablet?r.appendTo(i.elem):(r.appendTo("body"),r.css("z-index","100")),s=t(r),c=C?"never":"whenRequired",o={deviceType:"auto",wrap:!0,operationMode:"simpleShare",containerID:s,userAction:n,moreEnabledProviders:h.primaryProviders+","+h.moreEnabledProviders,shortURLs:c,onSendDone:function(e){a(e,n)},onLoad:function(t){d=e(i.elem).offset(),l=e(i.elem).find(e("div.gig-simpleShareUI")),"undefined"!=typeof l&&d.left<320&&(!Modernizr.mobile||Modernizr.ios&&Modernizr.tablet?e(l).css("margin-left","35px"):e(l).css("margin-left","0px")),e("div.gig-simpleShareUI-caption").on("click",function(){return!1}),e("div.gig-simpleShareUI-button").on("click",function(){return e("div.gig-simpleShareUI").hide(),!1})}},gigya.socialize.showShareUI(o),window.setTimeout(function(){r.attr("data-js-gigya-share-fade","")},10),window.setTimeout(function(){r.attr("data-js-gigya-share-active","")},300)}function d(t){var n,i=t.attr("data-canonical"),a=t.attr("data-user-message"),o=t.attr("data-link"),r=t.attr("data-title"),s=t.attr("data-subtitle"),c=t.attr("data-description"),d=t.attr("data-twitter-account"),l=t.attr("data-image-src"),h=new gigya.socialize.UserAction;return a&&h.setUserMessage(a),o&&(h.setLinkBack(o),h.addActionLink("Read More",o)),r&&h.setTitle(e.trim(r)+(d?" @"+d:"")),s&&h.setSubtitle(s),c&&h.setDescription(c),l&&(n={type:"image",src:l},o&&(n.href=o),h.addMediaItem(n)),"undefined"!=typeof i&&(v=h),C=t.attr("data-isshorturl"),h}function l(n,i,o){var r,s,c=CNN.accounts.cfg.gigya,d=e("<div>"),l=t(d),h=c.showCounts,f="gigya-sharebar-element";N>3&&(f+=" gigya-element-large"),d.addClass(f).appendTo(i),N+=1,"none"===h&&"Facebook-Like"===n&&(h="right"),r=C?"never":"Facebook"===n?"never":"whenRequired",void 0!==c.providerCfg[n]?(c.providerCfg[n].provider=n,s=[c.providerCfg[n]]):s=n,gigya.socialize.showShareBarUI({deviceType:"auto",operationMode:"simpleShare",containerID:l,showCounts:h,userAction:o,shareButtons:s,moreEnabledProviders:c.moreEnabledProviders,shortURLs:r,useEmailCaptcha:!1,showEmailButton:!0,emailBody:"$userMsg$<br /><br />I thought you'd like this:<br />$URL$<br /><br />$title$<br />$description$<br />",useHTML:!0,onSendDone:function(e){a(e,o)}})}function h(e){var t,n=CNN.accounts.cfg.gigya.shareButtons.split(","),i=d(e),a=n.length;for(N=1,"undefined"==typeof b&&(b=i),t=0;a>t;t++)l(n[t],e,i)}function f(e){var t=d(e);e.on("click",function(){r(t,{elem:e})}),e.show()}function u(t){var n,i;t.on("click",function(a){i=e(this),n=d(i),c(n,{elem:t})})}function g(t,n,i,a){return!t&&window.console&&window.console.error?void window.console.error("Gigya not loaded -- share bar disabled."):(n.each(function(){h(e(this))}),i.each(function(){f(e(this))}),void a.each(function(){u(e(this))}))}function p(t){var n=e(".js-gigya-sharebar"),i=e(".js-gigya-share"),a=e(".js-gigya-share-collection");(n.length||i.length||a.length)&&(y=t,CNN.accounts.loadGigya(function(e){g(e,n,i,a)}))}function m(){var t,n,a,o,r,s=e("html").hasClass("mobile")&&e("html").hasClass("phone"),c=e(".m-share"),l=e(".fb-send-to-messenger-container").detach();for(e(document.body).append(l),t=0;t<c.length;t++)a=e(c[t]),o=a.find(".js-gigya-sharebar"),r=a.find(".share-bar-whatsapp-container").detach(),s&&(o.find(".gig-button-container-twitter").closest(".gigya-sharebar-element").after(r),r.show()),n=a.find(".share-bar-messenger-container").detach(),o.prepend(n),n.show(),n.click(function(t){var n,a,o,r=e(t.target).closest(".js-gigya-sharebar"),s=r.width(),c=e(window).width(),l=e(window).height(),h=e(".fb-send-to-messenger-container"),f=r.height(),u=r.offset(),g=u.left-20,p=u.top+f,m=u.left+s,w=d(r),y=e(".share-bar-messenger-container").data("social-media-name"),b=c-(u.left+s);h.show(),n=h.width(),i(y,w.title),u.left>n?(a=p,o=g-n):b>n?(a=u.top,o=m):(o=Math.max(0,(c-h.outerWidth())/2+e(window).scrollLeft()),a=p),(500>l&&1025>c||500>c)&&(o=Math.max(0,(c-h.outerWidth())/2+e(window).scrollLeft()),a=Math.max(0,(l-h.outerHeight())/2+e(window).scrollTop())),h.css({top:a,left:o,position:"absolute"}),CNN.Facebook.addToFBInitHandlers(function(){FB.init({appId:"989591237802489",xfbml:!0,version:"v2.5"}),function(e,t,n){var i,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(i=e.createElement(t),i.id=n,i.src="//connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(i,a))}(document,"script","facebook-jssdk")}),h.find(".close-button").click(function(t){var n=e(t.target).closest(".fb-send-to-messenger-container");n.length>0&&n.is(":visible")&&n.hide()})});e(document).click(function(t){e(t.target).closest(".fb-send-to-messenger-container, .share-bar-messenger-container").length||e(".fb-send-to-messenger-container").hide()})}function w(){var t,n,i,a=e(".js-gigya-sharebar"),o=e(".js-gigya-share"),r=e(".js-gigya-share-collection");if(a&&a.length>0){for(t=0;t<a.length;t++)n=e(a[t]).find("div.share-bar-whatsapp-container"),i=e(a[t]).find("div.share-bar-messenger-container"),"undefined"!=typeof n&&e(a[t]).before(e(n)),"undefined"!=typeof i&&e(a[t]).before(e(i));a.html("")}o&&o.length>0&&o.html(""),r&&r.length>0&&r.html(""),(a.length||o.length||r.length)&&CNN.accounts.loadGigya(function(e){g(e,a,o,r),m()})}var y,b,v,N,k=0,C=!1;e(window).load(m),e(function(){CNN.accounts.onInitialized(p)}),window.CNN=window.CNN||{},CNN.gigyaShareBar=function(){CNN.accounts.onInitialized(p)},CNN.share=CNN.share||{},CNN.share.popup=s,CNN.share.reloadShareBar=w}(jQuery);