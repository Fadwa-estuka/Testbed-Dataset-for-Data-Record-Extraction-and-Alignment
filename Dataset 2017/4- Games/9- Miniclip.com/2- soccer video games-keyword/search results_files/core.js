$(function(){(function(e,a,f){var c,b=e.getElementsByTagName(a)[0];if(e.getElementById(f)){return}c=e.createElement(a);c.id=f;c.src="//connect.facebook.com/en_GB/sdk.js#xfbml=1&version=v2.1";b.parentNode.insertBefore(c,b)}(document,"script","facebook-jssdk"));window.___gcfg={lang:"en-GB"};(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="https://apis.google.com/js/plusone.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()});$(function(){$("a.game-icon.big-icon img").error(function(){$(this).attr("src",static_path+"layout/icons/default-game-icon.png")});$("a.game-icon.game-smartphone img").error(function(){$(this).attr("src",static_path+"layout/icons/default-smartphonegame-icon.png")});$(document).ready(function(){$("img.lazy").each(function(){var a=$(this);var b=a.data("src");if(b){a.attr("src",b)}})})});(function(a){a.fn.lazyLoad=function(b){var d=false;var c={frequency:750};b=a.extend(c,b);a(window).scroll(function(){d=true});return this.each(function(){var g=[];var e=function(){var j=a(window).scrollTop();var h=a(window).height()*1.5;var l=g.length;while(l--){var i=g[l];if(i.offset().top<(j+h)){if(typeof(i)!=="undefined"){var k=i.data("src");if(k!==""){i.attr("src",k);i.data("src","");g.splice(l,1)}}}}if(g.length<=0){clearInterval(f)}};a("img.lazyload").each(function(){g.push(a(this))});var f=setInterval(function(){if(d){e()}d=false},b.frequency);e()})};a("#site-container").lazyLoad()})(jQuery);(function(){var c=false;var b=false;if(!$(".third-party")[0]){$(".toolbox-trigger").on("click",function(){var e=$(this).data("toolboxType");var f=$(".toolbox-"+e);if(!f.is(":visible")){d(f,$(this))}a(f);$(".toolbox").not(f).fadeOut();$(f).fadeToggle("fast");return false});$("#language-selector.toolbox-trigger").on("click",function(){if(!c){$(".language-list img.flag").each(function(){$(this).attr("src",$(this).data("src"))});c=true}return false});$(".toolbox-stats-trigger").hover(function(){var e=$(".toolbox-stats");if(!$(this).hasClass("loaded")){$.ajax({url:"/user/get-experience",dataType:"json"}).done(function(h){var i=$(".toolbox-stats");var f=h.message.experience;var g=h.message.reputation;i.find("a.level img").attr("src","/layout/icons/xp/xp-badge-"+f.level+".png");i.find(".progress.experience .rank").html(f.points+" / "+f.next_level_points);i.find(".progress.reputation .rank").html(g.points+" / "+g.next_level_points);i.find(".progress.reputation .bar").css("width",g.percentage+"%");i.find(".progress.experience .bar").css("width",f.percentage+"%");i.addClass("loaded")})}d(e,$(this));e.stop().fadeIn(250);a(e)},function(){var e=$(".toolbox-stats");e.stop().fadeOut(250)});$("body").on("click",function(){$(".toolbox").fadeOut()})}$(".toolbox .button-close").on("click",function(f){f.preventDefault();$(this).parent().fadeOut()});function d(f,e){var h=e.position().left+(e.width()/2)-(f.outerWidth()/2);var g=e.position().top+e.height()+8;f.css({left:h,top:g})}function a(e){$(".toolbox").not(e).fadeOut()}})();function animateLevel(d){var a=$('<div class="level_up_animation level_icon level_'+d+'">');var c=$('<div class="level_up_animation level_icon_glow">');if(typeof d==="undefined"){var b=$('<div class="level_up_animation level_text">').html("Congratulations!</br> You have leveled up")}else{var b=$('<div class="level_up_animation level_text">').html("Congratulations!</br> You are now level "+d)}$("body").append(c);$("body").append(a);$("body").append(b);$("#site-container").animate({opacity:0.3},700,function(){a.addClass("fadeIn");window.setTimeout(function(){a.addClass("tossing").removeClass("fadeIn");b.css("display","block");b.addClass("slideUp")},2000);a.css("display","block");c.addClass("show");window.setTimeout(function(){c.removeClass("show").css("display","block").addClass("pulse");window.setTimeout(function(){deanimateLevel()},4000)},4000)})}function deanimateLevel(){var a=$(".level_up_animation.level_icon");var c=$(".level_up_animation.level_icon_glow");var b=$(".level_up_animation.level_text");a.css("top","-500px");c.css("top","-500px");b.css("top","500px");c.css("opacity","0");b.css("opacity","0");a.css("opacity","0");$("#site-container").animate({opacity:1},700,function(){});window.setTimeout(function(){c.remove();a.remove();b.remove()},1000)}function updateLoginBox(){$.ajax({type:"GET",dataType:"json",async:false,cache:false,url:"/games/ajax/getLoginHtml"}).done(function(a){$("body").attr("data-user-id",a.result.user_id);$(".login-container").replaceWith(a.result.html);var b=$("body").data("point-system");if(b){window.setTimeout(function(){Notifications.init()},2000);var c=setInterval(function(){var e=$("#notifications-dropdown-content .leveled_up");var d=$("#notifications-dropdown-content .earned_experience_first_gameplay");if(e.length>0&&d.length>0){$.each($("#notifications-dropdown-content .earned_experience_first_gameplay"),function(){Notifications.toaster_loaf.push($(this).clone())});$.each($("#notifications-dropdown-content .leveled_up"),function(){Notifications.toaster_loaf.push($(this).clone())});Notifications.toasterToast();clearInterval(c)}},1000)}return true})}$(function(){$(".drawer").prependTo("body");if(top===self){$(".drawer-open-login").on("click",function(){$(".drawer").slideUp(250);$("body").scrollTop(0);$("#drawer-login-signup").slideDown(250);return false})}$(".open-drawer.signup").on("click",function(){var a={};if(urlParam("register")==1){a.register=true}a.iu=urlParam("iu");MC.login(a);return false})});function transferField(){document.getElementById("login-username").focus();$("#login-username").removeClass("pseudofocus")}$(function(){function b(){$(".users-online").each(function(){var e=$(this);var d=e.data("online");var c=d+Math.floor((Math.random()*50)-20);e.data("online",c);e.html(a(c))})}function a(d){d+="";x=d.split(".");x1=x[0];x2=x.length>1?"."+x[1]:"";var c=/(\d+)(\d{3})/;while(c.test(x1)){x1=x1.replace(c,"$1,$2")}return x1+x2}setInterval(b,1500)});(function(b){var a=1;if(typeof(screen.deviceXDPI)!=="undefined"){a=screen.deviceXDPI/screen.logicalXDPI}if(typeof(document.width)!=="undefined"){a=document.width/jQuery(document).width()}if(a!==1){var c='<div id="zoom-warning-bar" class="drop-top"><div class="drop-top-inner"><div class="notification-bar error">This site is optimized for 100% zoom. Reset your browser zoom level for the best experience.</div><span class="close-droptop-action action-button small grey" style="padding: 7px;"><a class="drop-top-close" href="#">x</a></span></div></div>';b("body").prepend(c);b("#zoom-warning-bar").slideDown(250);b(".drop-top-close").click(function(d){d.preventDefault();b(".drop-top").slideUp()})}return false})(jQuery);(function(a){a.fn.elementalSlides=function(b){var d=0;var c={interval:4000,group_selector:"article",nav_arrows:false};b=a.extend(c,b);return this.each(function(){var i=function(){clearInterval(f);f=setInterval(function(){k()},g)};var o=function(r){var u=r.data("slide")?r.data("slide"):r.attr("href");if(typeof(u)!=="undefined"){var t=u.replace("#","");var s=e.data("previous");e.addClass("selected_"+t).removeClass("selected_"+s).data("previous",t)}j.fadeOut(500).removeClass("current").filter(u).fadeIn(500).addClass("current");e.find(".selected").removeClass("selected");r.addClass("selected")};var k=function(){var r=e.find(".selected").next();if(r.length===0){r=e.find("a:first")}r.addClass("selected");o(r)};var l=function(){var r=e.find(".selected").prev();if(r.length===0){r=e.find("a:last")}r.addClass("selected");o(r)};var p=a(this);var f;var h=0;p.children(b.group_selector).filter(function(){return a.trim(this.innerHTML).length<1}).remove();var j=p.children(b.group_selector);var e=p.find("nav");var g=p.data("interval")||b.interval;if(j.length<=1){j.fadeIn();return}if(e.length===0){e=a("<nav></nav>");p.prepend(e)}var n=(e.find("a").length<=0);j.each(function(){h++;d++;a(this).attr("id","slide_"+d);if(n){var r=a('<a href="#slide_'+d+'">'+h+"</a>");e.append(r)}});e.find("a").click(function(s){var r=a(this);if(!r.hasClass("selected")){s.preventDefault();o(r);i()}});p[(a.fn.hoverIntent)?"hoverIntent":"hover"](function(){clearInterval(f)},function(){i()});if(c.nav_arrows){var q=a('<a href="#next" class="arrow arrow-next"><span>'+translate.next+"</span></a>");q.click(function(){k();i();return false});p.append(q);var m=a('<a href="#prev" class="arrow arrow-prev"><span>'+translate.prev+"</span></a>");m.click(function(){l();i();return false});p.append(m)}o(e.find(":first"));i()})};a(".blog-slideshow").elementalSlides({interval:6000});a(".widget-game-scroller, .widget-game-scroller-2").elementalSlides({interval:5000,nav_arrows:true})})(jQuery);$(function(){var b=0;setTimeout(function(){if(typeof PushAd==="undefined"){return}var c=true;$(".container-300x250, .container-728x90").each(function(){var d=a($(this));if(d){c=false}});if(!c&&typeof push_ads!=="undefined"){PushAd.init(push_ads)}},5000);function a(d){var c=d.outerHeight();if(c<60){var e=d.attr("class").replace("container","filler");if(typeof push_ads[e]!="undefined"){var f=$('<div class="miniclip-internal"><div id="miniclipInternal-'+b+'" class="mc-push count-1" data-refresh="600000" data-type="'+e+'"></div></div>');d.before(f);b++;return true}}return false}});function openExtraNav(a){$(a+", .extras.open").animate({opacity:"toggle",height:"toggle","margin-top":"toggle"},200,"swing").toggleClass("open");$(".hm-overlay").show()}function hideExtraNav(){$(".extras").slideUp(200).removeClass("open");$(".hm-overlay").hide()}$(function(){$(".extras").hide();$("nav.main-menu a.button.more, nav.main-menu a.button.faves").click(function(){var c=$(this);var a=c.data("target");if(!$(a).hasClass("open")){openExtraNav(a)}else{hideExtraNav()}if(a==="#my-faves"){var b="#my-faves .loader";if($(b).length){$.get("/games/ajax/getFavorites",{},function(d){$("#my-faves .loader").html(d).removeClass("loader")})}}return false})});
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(a){a.fn.hoverIntent=function(m,d,h){var j={interval:100,sensitivity:7,timeout:0};if(typeof m==="object"){j=a.extend(j,m)}else{if(a.isFunction(d)){j=a.extend(j,{over:m,out:d,selector:h})}else{j=a.extend(j,{over:m,out:m,selector:d})}}var l,k,g,f;var e=function(n){l=n.pageX;k=n.pageY};var c=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if((Math.abs(g-l)+Math.abs(f-k))<j.sensitivity){a(n).off("mousemove.hoverIntent",e);n.hoverIntent_s=1;return j.over.apply(n,[o])}else{g=l;f=k;n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}};var i=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);n.hoverIntent_s=0;return j.out.apply(n,[o])};var b=function(p){var o=jQuery.extend({},p);var n=this;if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)}if(p.type=="mouseenter"){g=o.pageX;f=o.pageY;a(n).on("mousemove.hoverIntent",e);if(n.hoverIntent_s!=1){n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}}else{a(n).off("mousemove.hoverIntent",e);if(n.hoverIntent_s==1){n.hoverIntent_t=setTimeout(function(){i(o,n)},j.timeout)}}};return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},j.selector)}})(jQuery);$(function(){$(".tooltip").hoverIntent(function(){var d="center";var f="";var a="bottom";var g=$(this);if(typeof g.data("tip-position")!="undefined"){a=g.data("tip-position")}if(typeof g.data("tip")!="undefined"){d="left";f=f+g.data("tip")}if(typeof $(this).data("tip-gameicon")!="undefined"){f='<img class="game-icon" src="'+g.data("tip-gameicon")+'" />'+f}if(f!=""){var e=$('<div id="tooltip" class="toolbox">'+f+"</div>");e.prependTo("body").fadeIn(100);var c=g.offset().top+g.height()+8;var b=g.offset().left+(g.outerWidth()/2)-(e.outerWidth()/2);if(a=="top"){var c=g.offset().top-e.outerHeight(true)-8}e.css({top:c+"px",left:b+"px","text-align":d}).addClass("tooltip-"+a);$(this).attr("title","")}},function(){$("#tooltip").fadeOut(250,function(){$(this).remove()})})});$(function(){$(".search-form input.search-query").first().focus();$(".search-form").submit(function(a){if($(this).find(".search-query").val().length>0){window.location=$(this).attr("action")+"?query="+encodeURI($(this).find(".search-query").val().toLowerCase())+"#t-sd"}else{window.location=$(this).attr("action")+"?query="+encodeURI($(this).find(".search-query").attr("placeholder").toLowerCase())+"#t-sd"}a.preventDefault()})});$(function(){if($(".game-animation").length>=1){var b={};var d={menu:"false",scale:"noScale",allowFullscreen:"true",allowScriptAccess:"always",wmode:"opaque",bgcolor:"#ffffff"};var c={id:"AnimationManager",align:"middle"};var a=("https:"==document.location.protocol?"https://":"http://");swfobject.embedSWF("/swf/applications/animation-rotatorv3.swf","animation-rotator","345","266","10.0.0","expressInstall.swf",b,d,c);$(".game-animation .alt-img").hide();$(".game-animation .rotator").show()}});function debug(a){if(window.console!=undefined){console.log(a)}}var previous_idx=0;function traceImpress(a){$("#animation-"+previous_idx).removeClass("current");$("#animation-"+a).addClass("current");previous_idx=a}function traceClick(a){}function getAssets(){var a=[];var b=static_path+"swfcontent/game-animations/";$(".latest-games ul li").each(function(c){var d=$(this);a.push(new makeAsset(b+d.data("animation")+".swf",d.children("a").attr("href"),d.data("id")))});return a}function makeAsset(a,b,c){this.animurl=a;this.clickurl=b;this.id=c}$("a.feedback").click(function(a){window.open("/ads/feedback_form.php","open_feedback_form","width=420,height=475,resizable=1,scrollbars=1");a.stopPropagation();a.preventDefault()});$(function(){$("textarea.copy").click(function(){$(this).focus().select()})});$(function(){$("a.fullscreen").on("click",function(){return confirm(translate.confirm_focus_mode)})});$(function(){$.fn.elementalTabs=function(a){var b={};a=$.extend(b,a);return this.each(function(){var e=$(this);var g=e.children(".panel");var f=e.find("nav");var d=e.data("current-tab")?".button."+e.data("current-tab"):"a:first";if(f.length<=0){e.find(".tab-content").show();return}f.find("a").not(".classic").on("click",function(){var h=$(this).data("panel");var i=e.data("cookie");g.hide().filter(".panel-"+h).show();f.find("a").removeClass("selected");$(this).addClass("selected");if(i){$.cookie(i,h,{expires:24*7*52})}return false});if(f.find(d).length===0){d="a:first"}if(window.location.hash){var c="a[href="+window.location.hash+"]";if(f.find(c).length>0){d=c}}f.find(d).click()})};$(".tab-wrapper").elementalTabs()});function plusOneCallback(a){if(a.state==="on"){$.ajax({type:"POST",url:"/games/ajax/plusoneadd/"});if(typeof stats_manager!=="undefined"){stats_manager.trackerSocialEngagement("google","plusone",a.href)}}else{$.ajax({type:"POST",url:"/games/ajax/plusoneremove/"})}}$(function(){var c=translate.password_reset_error_email;var d=translate.password_reset_error_username;var b=translate.password_reset_success;$("form#password-reminder").submit(function(e){e.preventDefault();var f=$("input#password-reminder-username").val();if(f){if(validateEmail(f)){$.ajax({type:"POST",dataType:"json",url:"/games/user/sendpasswordreset/",data:{username:f},success:function(g){if(g.success){$("form#password-reminder").hide();$("form#password-reminder").before($('<div class="notification-bar alert"></div>').html(b).fadeIn())}else{a(g.error)}},error:function(i,g,h){}})}else{a(d)}}else{a(c)}});function a(e){$("form#password-reminder .notification-bar").remove();$("form#password-reminder fieldset").before($('<div class="notification-bar error"></div>').html(e).fadeIn())}});function validateEmail(a){var b=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return b.test(a)}function LoginBoxNotification(d){var f=false;switch(d){case"user_logged_in":f=true;break;case"user_logged_out":f=true;break}if(f===true){var e=urlParam("from");var c=urlParam("challenge_uid");var b=decodeURIComponent(urlParam("challenge_url"));var a="";if(e==="challenge"){a=b+"?challenge="+c+"&from="+e}else{if(typeof(redirect_new)!=="undefined"){a=redirect_new}}if(a!==""){window.location.href=a}else{window.location.reload()}}}function urlParam(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+b+"=([^&#]*)";var d=new RegExp(a);var c=d.exec(window.location.href);if(c===null){return""}else{return c[1]}}function detectUnityWebPlayer(){var a=false;if(navigator.appVersion.indexOf("MSIE")!==-1&&navigator.appVersion.toLowerCase().indexOf("win")!==-1){a=detectUnityWebPlayerActiveX()}else{if(navigator.mimeTypes&&navigator.mimeTypes["application/vnd.unity"]){if(navigator.mimeTypes["application/vnd.unity"].enabledPlugin&&navigator.plugins&&navigator.plugins["Unity Player"]){a=true}}}return a}var PushAd={push_ads:{},counter:{},timers:{},init:function(a){this.push_ads=a;this.firstRun()},firstRun:function(){$(".widget-push-ads").each(function(b){var a=$(this);var c=a.data("type");if(typeof PushAd.counter[c]=="undefined"){PushAd.showAds(a)}})},showAds:function(a){var i=false;var d=a.data("type");if(typeof PushAd.push_ads[d]=="undefined"){return}if(!PushAd.counter[d]||parseInt(PushAd.counter[d])+1>PushAd.push_ads[d].length){PushAd.counter[d]=0}if(PushAd.push_ads[d][PushAd.counter[d]]){i=PushAd.push_ads[d][PushAd.counter[d]];if(i.token==d){var e=a.find("a");var b=a.find("img");var g="_self";var h=new RegExp(location.host+"|/games/");if(!h.test(i.url)){g="_blank"}var f=i.url+"#t-p-"+i.push_ad_type_id+"-"+i.push_ad_id+"-"+site_tag_location;var c=i.token+"/"+i.image_file;e.attr("href",f);e.attr("target",g);b.attr("src",static_path+"content/push-ads/"+i.push_ad_type_id+"/"+i.image_file);if(i.keep_visible==1){PushAd.push_ads[d].splice(PushAd.counter[d],1);clearTimeout(this.timers[d])}else{PushAd.counter[d]=parseInt(PushAd.counter[d])+1}}}if(!i||(i&&i.keep_visible==0)){this.timers[d]=setTimeout(function(){PushAd.showAds(a)},a.data("refresh"))}return false}};$(document).ready(function(){PushAd.init(push_ads)});function friendButtonHover(){$("button.remove-friend").off("mouseenter mouseleave");$("button.unblock").off("mouseenter mouseleave");$("button.add-friend").off("mouseenter mouseleave");$("button.remove-friend").on("mouseenter",function(a){$(this).removeClass("disabled-button green");$(this).addClass("action-button red red-hover");if($(this).hasClass("graphic")){$(this).html('<img class="button-icon" src="/images/players/friends/cross16.png" />')}else{$(this).html('<img class="button-icon" src="/images/players/friends/cross16.png" /> Unfriend')}}).on("mouseleave",function(a){$(this).removeClass("action-button red red-hover");$(this).addClass("disabled-button green");if(!$(this).hasClass("graphic")){$(this).html("Friends")}else{$(this).html('<img class="button-icon" src="/images/leaderboards/friend-white.png" />')}});$("button.unblock").on("mouseenter",function(a){$(this).removeClass("disabled-button red");$(this).addClass("action-button green green-hover");if($(this).hasClass("graphic")){$(this).html('<img class="button-icon" src="/images/players/friends/block16.png" />')}else{$(this).html('<img class="button-icon" src="/images/players/friends/block16.png" /> Unblock')}}).on("mouseleave",function(a){$(this).addClass("disabled-button red");$(this).removeClass("action-button green green-hover");if(!$(this).hasClass("graphic")){$(this).html("Blocked")}else{$(this).html('<img class="button-icon" src="/images/leaderboards/friend-white.png" />')}})}jQuery(function(){$("body").on("click",".friend-ajax-button",function(b){b.preventDefault();var a=$(this).find("button");if(a.hasClass("not-logged-in")){$(".signup").click();return false}else{return toggleFriendAjax(a)}});$("body").on("click",".block-ajax-button",function(a){a.preventDefault();stats_manager.trackerFriends("block");return blockAjax($(this).find("button"))});friendButtonHover()});function toggleFriendAjax(a){var c=a.data("friend");var d=a.data("action");var b=a.data("success-message");if(a.hasClass("small")){a.parent().append('<img class="loader-small" src="'+static_path+'/images/loading/waiting32.gif" style="width:16px;height:16px;" />')}else{a.parent().append('<img class="loader" src="'+static_path+'/images/loading/waiting32.gif" />')}a.hide();if(typeof c!=="undefined"){$.ajax({type:"POST",dataType:"json",async:true,cache:false,url:"/user/friend-toggle-ajax/",data:{user_id:c,action:d}}).done(function(e){if(e.success){if(typeof b!=="undefined"){a.parent().html(b)}else{if(d==="remove"){newAction="add"}else{newAction="remove"}if(!a.hasClass("graphic")){if(d==="remove"){buttonText="Add Friend"}else{buttonText="Friends"}}else{buttonText='<img class="button-icon" src="/images/leaderboards/friend-white.png" />'}a.show();a.addClass(newAction+"-friend");a.removeClass(d+"-friend unblock");a.data("action",newAction);a.html(buttonText);a.parent().find("img.loader").remove();a.parent().find("img.loader-small").remove();if(d==="remove"){if(a.hasClass("negative")){blockButton=$("span.block-ajax-button");if(typeof blockButton!=="undefined"){blockButton.show()}stats_manager.trackerFriends("unblock")}else{stats_manager.trackerFriends("remove")}a.removeClass("negative disabled-button");a.addClass("positive action-button")}else{a.addClass("disabled-button positive");a.removeClass("action-button negative");stats_manager.trackerFriends("add")}friendButtonHover()}}else{if(!a.hasClass("graphic")){if(d==="remove"){buttonText="Friends"}else{buttonText="Add Friend"}}else{buttonText='<img class="button-icon" src="/images/leaderboards/friend-white.png" />'}a.parent().html('<button class="'+d+'-friend" data-friend="'+c+'" data-action="'+d+'">'+buttonText+"</button>")}})}else{throw ("data-friend attribute is required on a friend button")}return false}function blockAjax(a){var c=a.data("friend");var b=a.data("success-message");if(a.hasClass("small")){a.parent().append('<img src="'+static_path+'images/loading/waiting32.gif" style="width:16px;height:16px;" />')}else{a.parent().append('<img src="'+static_path+'images/loading/waiting32.gif" />')}a.hide();if(typeof c!=="undefined"){$.ajax({type:"POST",dataType:"json",async:true,cache:false,url:"/user/block-ajax/",data:{user_id:c}}).done(function(d){if(d.success){if(typeof b!=="undefined"){a.html(b)}else{a.parent().hide();$(".friend-ajax-button button").addClass("disabled-button added-friend negative").removeClass("positive action-button");friendButton=$("span button[data-friend='"+c+"']");friendButton.removeClass("add-friend remove-friend").addClass("unblock");friendButton.data("action","remove");friendButton.html("Blocked");a.parent().find("img").remove();friendButtonHover()}}a.parent().html('<button class="block-friend" data-friend="'+c+'" data-action="block">Block</button>')})}else{throw ("data-friend attribute is required on a block button")}return false}jQuery(function(){$(".user-relationship button").hover(function(){$(this).parent().find("div.toolbox").fadeToggle("fast")});if(window.location.hash){if(window.location.hash.indexOf("add-friend")!="-1"){$(window.location.hash).click()}}});$(document).ready(function(){$(".user-icon").on("hover",function(){var b=$("#player_blob_"+$(this).data("user-id")+"_"+$(this).data("type"));var a=$(this).position();var c=Math.abs(($(this).outerWidth()-b.outerWidth())/2);b.css({left:(a.left-c),top:(a.top-(b.outerHeight()+8))});b.stop().fadeToggle(100)})});jQuery(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length?a:$("[name="+this.hash.slice(1)+"]");if(a.length){$("html,body").animate({scrollTop:a.offset().top},1000);return false}}})});function loadImages(){$(".image-loader").each(function(){var a=$("<img/>").hide();$(a).load(function(){$(this).show()});$(a).attr("src",$(this).data("image"));if($(this).data("class")){$(a).addClass($(this).data("class"));$(this).removeAttr("data-class")}$(this).append(a);$(this).removeAttr("data-image").removeClass("image-loader")})}jQuery(loadImages);var KillSwitch=new function(){this.check=function(a){if($.inArray(a,KILLSWITCH_ENABLED)>-1){return true}else{return false}}};window.overrideableMiniclipFBInitCfg=window.overrideableMiniclipFBInitCfg||{appId:fb_app.id,channelUrl:"//www.miniclip.com/xd_receiver.htm",status:true,cookie:true,xfbml:true,version:"v2.1"};window.fbAsyncInit=function(){FB.init(window.overrideableMiniclipFBInitCfg);FB.Event.subscribe("edge.create",function(a){if(a=="http://www.facebook.com/miniclip"){jQuery.ajax({type:"POST",url:"/games/ajax/likefacebookpage/"});if(typeof stats_manager!=="undefined"){stats_manager.trackerSocialEngagement("facebook","like",a)}}});FB.Event.subscribe("edge.remove",function(a){if(a=="http://www.facebook.com/miniclip"){jQuery.ajax({type:"POST",url:"/games/ajax/unlikefacebookpage/"})}})};(function(b){var a,c="facebook-jssdk";if(b.getElementById(c)){return}a=b.createElement("script");a.id=c;a.async=true;a.src="//connect.facebook.com/en_US/sdk.js";b.getElementsByTagName("head")[0].appendChild(a)}(document));(function(){jQuery("#fb-login, #third-party-fb-login, #fb-login-button").click(function(){fb_login(false)})})();function fb_login(b,a){FB.login(function(d){var c="",g="";try{c=d.status;g=d.authResponse.accessToken}catch(f){}if(c==="connected"&&g.length>0){if(b===true){notifyFlash(g)}else{$.ajax({url:"/games/ajax/facebooklogin",type:"POST",dataType:"json",data:{access_token:g}}).done(function(e){if(e.success===true){location.reload()}else{location.href=e.msg}})}}if(typeof a==="function"){a(d.authResponse!==null)}},{scope:"email,user_birthday,publish_actions"})}function notifyFlash(b){var a=null;window.postMessage("fb_login:"+b,"*")}function sendEvent(g,a){var b=document.getElementsByTagName("link");for(var f=0;f<b.length;f++){if(b[f].getAttribute("rel")==="canonical"){canonical=b[f].getAttribute("href")}}var d;switch(g){case"score":d="/me/"+fb_app.namespace+":score?game="+canonical;break;case"play":d="/me/"+fb_app.namespace+":play?game="+canonical+"&expires_in=600";break;case"achieve":d="/me/"+fb_app.namespace+":achieve?award=http://apps.fb.miniclip.com/open-graph/award/id/"+a+"/app_id/"+fb_app.id;break;case"buy":d="/me/"+fb_app.namespace+":buy?game="+canonical;break}var e=document.URL;var c=e.search(/\?b/);if(fb_app.id===111411968896241&&game_data.is_visible===1&&game_data.is_internal!==1&&c===-1){FB.api(d,"post",function(h){if(!h||h.error){return false}else{stats_manager.trackerSocialEngagement("facebook","frictionless: "+g,canonical);return true}})}};