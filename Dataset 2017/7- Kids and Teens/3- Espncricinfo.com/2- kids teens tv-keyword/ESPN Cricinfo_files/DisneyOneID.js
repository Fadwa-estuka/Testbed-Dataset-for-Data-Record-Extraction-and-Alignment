window.espni=window.espni||{},espni.disneyOneIDUtils=function(e){function n(){var e=(window.location.hostname,window.location.pathname,"ESPN-CRICINFO.WEB"),n="en-US",i="https://secure.espncdn.com/combiner/c?css=disneyid/core.css,disneyid/cricinfo.css",o="https://ssl.espncricinfo.com/disneyid/responder";return{clientId:e,langPref:n,cssOverride:i,responderPage:o,blueCookie:!0,initialize:!0}}function i(){void 0===window.DisneyID?window.setTimeout(i,100):(e(".nav_grp_usr").show(),did=DisneyID.get(),did.on("login",o),did.on("logout",a),did.on("init",t))}function o(n){if(n){var i=n.profile.firstName,o=n.displayName.displayName,t="";n.displayName.proposedDisplayName&&(t=n.displayName.proposedDisplayName),p.user.displayName=o,p.user.username=i,p.user.proposedDisplayName=t,p.user.swid=n.profile.swid,u.loggedIn=!0,p.isLoggedIn=!0,e("#disney_oneid .hide-for-device span").addClass("sp sp_usr"),e("#disney_oneid .hide-for-device span").removeClass("nav_login"),e("#disney_oneid .hide-for-device span").text(""),e(".espni-profile-msg").text("Welcome "+i+"! "),u.userInfo.swid=n.profile.swid,"disneyid"==n.token.authenticator?(u.userInfo.signin_source_id=1,p.user.signin_source_id=1):(u.userInfo.signin_source_id=5,p.user.signin_source_id=5),d(i,o,t)}}function t(n){e(".disney_profile").hide(),u.loggedIn=n.loggedIn,s(),n.loggedIn?o(n.guest):a()}function s(){e("#disney_oneid, #comment-login").off("click").on("click",function(n){n.preventDefault();var i=e(this).parents(u.navGrpItm);u.loggedIn?(i.hasClass(u.activeClass)?i.removeClass(u.activeClass):i.addClass(u.activeClass),e(".disney_profile").show()):(did.launchLogin(),e("html, body").removeClass(u.navSlide),e("#viewport").css({height:"auto",width:"auto"}))}),e(".espni-edit-profile").on("click",function(){did.launchProfile(),e("#disney_oneid").parents(u.navGrpItm).removeClass(u.activeClass),isMobile.phone||isMobile.tablet||e(".disney_profile").hide()}),e("#edit_displayname").on("click",function(e){e.preventDefault(),did.launchDisplayName()}),e(".espni-profile-signout").on("click",function(){did.logout(),e("html, body").removeClass(u.navSlide),e("#viewport").css({height:"auto",width:"auto"}),e(u.navGrpItm).removeClass(u.activeClass)})}function a(){u.loggedIn=!1,e("#disney_oneid .hide-for-device span").removeClass("sp sp_usr"),e("#disney_oneid .hide-for-device span").addClass("nav_login"),e("#disney_oneid .hide-for-device span").text("Log In"),"undefined"==typeof _CONTENTTYPE||"story"!=_CONTENTTYPE&&"video"!==_CONTENTTYPE?"undefined"!=typeof _CONTENTTYPE&&"awards"==_CONTENTTYPE&&(e("#login-wrapper").show(),e("#loggedin-wrapper").hide()):(e("#hp-login-form-for-comments .log_msg").text("Login to Post Your Comments"),e("#comment-login").show(),e(".comment-form-wrap").hide(),e("#hp-login-form-for-comments .espni-logged-in-wrap").hide());var n=e(".espni-edit-profile").parents(u.navGrpItm);e(".disney_profile").hide(),e(".espni-profile-msg").text(""),n.removeClass(u.activeClass)}function r(){if(document.querySelector('script[src$="/outer/DisneyID.js"]'))return!0;var e="https://cdn.registerdisney.go.com/v2/outer/DisneyID.js",o=document.createElement("script");o.src=e,o.onload=function(){window.did=DisneyID.get(n()),i()},(document.head||document.body).appendChild(o)}function d(n,i,o){"undefined"==typeof _CONTENTTYPE||"story"!=_CONTENTTYPE&&"video"!==_CONTENTTYPE?"undefined"!=typeof _CONTENTTYPE&&"awards"==_CONTENTTYPE&&(e("#login-wrapper").hide(),e("#loggedin-wrapper").show(),e("#username_field").val(n)):(e("#hp-login-form-for-comments .log_msg").text("Post Your Comments"),e("#comment-login").hide(),e("#hp-login-form-for-comments .espni-logged-in-wrap").show(),o.length>0?e("#hp-login-form-for-comments .espni-profile-name").html("Welcome <b>"+n+"!</b>"):(e("#hp-login-form-for-comments .espni-profile-name span").html("Welcome <b>"+n+"</b>"),e("#hp-login-form-for-comments .espni-profile-name i").text(i)),e(".comment-form-wrap").show(),e(".comment-form").on("submit",function(n){n.preventDefault(),e(".comment-submit-btn").prop("disabled",!0),c()}),m())}function c(){var n=!0,i=e(".comment-textbox").val(),o=e(".comment-form input[name=object_id]").val(),t=e(".comment-form input[name=content_type_id]").val(),s="http://"+endpoint+"/ci/content/submit/comment/confirm_new.html";if(e("li.hys").length>0){var a=e("li.hys input[name=comment_type_id]:checked").val();if("undefined"==typeof a)return alert("Please select an option"),e("li.hys input[name=comment_type_id]").focus(),n=!1,!1;a=parseInt(a,10)}(0===i.length||i.length<25)&&(alert("Please enter minimum of 25 characters."),e(".comment-textbox").focus(),e(".comment-submit-btn").prop("disabled",!1),n=!1),i.length>1e3&&(alert("The text size you entered exceeds 1000 characters. Please reduce the text size to 1000 characters."),e(".comment-textbox").focus(),e(".comment-submit-btn").prop("disabled",!1),n=!1);var r={};return r.text=i,r.comment_type_id=t,r.object_id=o,r.swid=u.userInfo.swid,r.signin_source_id=u.userInfo.signin_source_id,e.cookie("espncricinfo_s2")&&(r.s2_cookie=encodeURIComponent(e.cookie("espncricinfo_s2"))),!!n&&void(u.userInfo.swid&&e.ajax({url:s,data:r,type:"POST",dataType:"jsonp",jsonpCallback:"jsonCallback",success:function(n){e(".comment-submit-btn").prop("disabled",!1),1===n.status&&e(".comment-form").html('<p class="thanks-msg">Thank you for your comment.<br>  It will be moderated by ESPNcricinfo and published soon.</p>')}}))}function m(){e(".comment-form").find("#char-count").text(u.maxChar),e(".comment-textbox").on("keydown keyup",function(e){l(e)}),e(".comment-textbox").on("paste",function(e){var n=window.setTimeout(function(){l(e),window.clearTimeout(n)},200)})}function l(){var n=e(".comment-textbox").val(),i=n.length,o=u.maxChar-i;i>=u.maxChar&&e(".comment-textbox").val(n.substring(0,u.maxChar)),e(".comment-form").find("#char-count").text(o>=0?o:0)}var p={};p.isLoggedIn=!1,p.user={};var u={loggedIn:!1,navGrpItm:".nav_grpitm",navSlide:"nav_slide",activeClass:"active",maxChar:1e3,userInfo:{}};return p.init=function(){r(),e(".comment-form-wrap").hide(),e(".comment-tabs-wrap .container-tab").hide(),e(".comment-tabs li a").click(function(n){n.preventDefault();var i=e(this).attr("data-type");e(".comment-tabs li").removeClass("active1"),e(".comment-tabs li a").each(function(){e(this).attr("data-type")===i&&e(this).parent().addClass("active1")}),e(".comment-tabs-wrap .container-tab").hide();var o=".container-tab."+e(this).attr("data-type");e(o).fadeIn("fast")}),e(".comment-tabs-wrap").find("ul#featured").size()>0?e(".comment-tabs li").find("a[data-type='featured']").trigger("click"):e(".comment-tabs li").find("a[data-type='latest']").trigger("click")},p}(jQuery),jQuery(function(){espni.disneyOneIDUtils.init()});