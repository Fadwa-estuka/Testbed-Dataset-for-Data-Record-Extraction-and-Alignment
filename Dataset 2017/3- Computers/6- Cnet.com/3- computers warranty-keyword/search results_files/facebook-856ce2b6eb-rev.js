define(["jquery","version!fly/managers/debug","managers/third-party/social-flags","managers/client-storage","managers/tealium","components/global-modal"],function(e,t,n,o,i){t=t.init("facebook");var a=!1,c={fbOptions:{appId:"16995676698",channelUrl:"//"+document.domain+"/html/facebook/channel.html",status:!0,cookie:!0,oauth:!0,xfbml:!0},onInit:null,debug:!1},l=-1;return{init:function(o){var i=this;n.enabled.facebook&&(e.extend(!0,c,o),a?c.onInit&&c.onInit():(window.fbAsyncInit=function(){FB.init(c.fbOptions),a=!0,i.setupEvents(),c.onInit&&c.onInit(),t.log("Initialized"),delete window.fbAsyncInit},require(["facebook"+(c.debug?"-debug":"")])))},parse:function(e){if(a)try{e?FB.XFBML.parse(e):FB.XFBML.parse()}catch(e){t.log("FB failed to parse the page",e)}else t.log("Parse failed -- not initialized yet")},isInitialized:function(){return a},promptLikeCnet:function(t){var n=this;if(!o.read("dontShowLikeCnet")){var i=e.cnet.globalModal({content:'                        <p>Join the conversation.</p>                        <p>Like CNET on Facebook for the latest in tech news and reviews.</p>                        <div class="fb-like" data-href="http://www.facebook.com/CNETenEspanol" data-layout="button_count" data-width="450" data-show-faces="false" ref="'+(t||"")+'"></div>                        <p><label><input type="checkbox" class="dont-show" /> Don\'t show this again</label></p>'});i.$element.on("modalopened",function(t){n.parse(i.$element[0]);var a=e(".dont-show",i.$element);a.on("click",function(e){o.write("dontShowLikeCnet",a[0].checked)})}),i.open()}},checkLikes:function(e,n){if(a)try{FB.api("/me/likes/"+e,n)}catch(e){t.log("FB failed to check likes for the user",e)}else t.log("Check likes failed -- not initialized yet")},setupEvents:function(){var n=this;FB.Event.subscribe("edge.create",function(o,i){t.log("Liked");var a={wdloc:i._attr.ref};"http://www.facebook.com/CNETenEspanol"===o?e.extend(a,{eventt:"fblikecnet"}):"http://www.facebook.com/CNETenEspanol#reg"===o?e.extend(a,{eventt:"fblikecnetreg"}):n.promptLikeCnet(),n.trackLike(a)}),FB.Event.subscribe("edge.remove",function(o,i){t.log("Unliked");var a={wdloc:i._attr.ref};"http://www.facebook.com/CNETenEspanol"===o&&e.extend(a,{eventt:"fbunlikecnet"}),n.trackUnlike(a)})},trackLike:function(t){i.trackSocial(e.extend({socialService:"facebook",event:"connect",levtEventType:"share",eventt:"fblike",socialId:2},t))},trackUnlike:function(t){i.trackSocial(e.extend({socialService:"facebook",event:"disconnect",eventt:"fbunlike"},t))},isLoggedIn:function(e){var n=this;a?l===-1?FB.getLoginStatus(function(t){l=t.status,e(n.authStatusToBoolean(l))},!0):e(n.authStatusToBoolean(l)):t.log("isLoggedIn failed -- not initialized yet")},getLoginStatus:function(e){a?l===-1?FB.getLoginStatus(function(t){l=t.status,e(l)},!0):e(l):t.log("getLoginInStatus failed -- not initialized yet")},isLoggedInSync:function(){var e=this;return a?(l===-1&&(l=FB.getAuthResponse().status),e.authStatusToBoolean(l)):void t.log("isLoggedInSync failed -- not initialized yet")},authStatusToBoolean:function(e){var t=!1;return t="connected"===e||"not_authorized"===e}}});