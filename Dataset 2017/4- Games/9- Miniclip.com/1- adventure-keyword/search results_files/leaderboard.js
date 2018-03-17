MC.Leaderboard=new function(){var a=this;this.selections={type:"global",period:"month",custom_leaderboard_id:0};this.level=null;this.user_callback=null;this.countdown=null;this.countdown_started=false;this.storage={};this.offsets={};this.current_limit=null;this.hide_top_load_button=false;this.hide_bottom_load_button=false;this.saveScore=function(e,b){try{if((typeof(e)==="string")||(typeof(e)==="number")){if((typeof(game_data)!="undefined")&&(typeof(game_data.game_id)==="number")){var d={game_id:game_data.game_id,data:e};if((typeof(challenge_data)!="undefined")&&(typeof(challenge_data.chuid)!="undefined")){d.chuid=challenge_data.chuid}$.ajax({url:"/games/highscore/save",type:"POST",dataType:"JSON",data:d,success:function(f){if(f.success===true){stats_manager.trackerLeaderboard("score_save")}if(typeof(b)==="function"){b(f)}else{throw ("Error: The callback provided is not a function")}if((typeof f.challenge_data!="undefined")&&(f.challenge_data)){MC.Challenge.updateChallengeBox(f.challenge_data)}},error:function(f){if(typeof(b)==="function"){b("Error: Error in ajax call, see JS console.")}else{throw ("Error: The callback provided is not a function")}console.log("Leaderboard.saveScore - Error: Error in ajax call",f)}})}else{throw ("Leaderboard.saveScore - Error: 'game_data' or 'game_data.game_id' is not defined")}}else{throw ("Leaderboard.saveScore - Error: The data parameter has the wrong type")}}catch(c){if(typeof(b)==="function"){b("Error in save score: "+c)}else{throw ("Error: The callback provided is not a function")}throw (c)}};this.show=function(d,c){try{a.user_callback=c;if(typeof(d)==="number"){a.storage={};a.level=d;a.changeSelection(a.selections.type,a.selections.period,null,true);a._setupCustomLeaderboardLinks();$("#game-container").css("z-index",-1)}else{throw ("Leaderboard.show - Error: The level parameter must be a number")}}catch(b){if(typeof(c)!=="function"){throw ("Leaderboard.show - Error: The callback provided is not a function")}a.hide()}};this.changeSelection=function(d,e,b,c){if(a.level===null){throw ("MC.Leaderboard.show() must be called before MC.Leaderboard.changeSelection()")}if(typeof(c)==="undefined"&&c!=true){c=false}if(typeof(d)!=="undefined"){if(d!==null){a.selections.type=d}}if(typeof(e)!=="undefined"){if(e!==null){a.selections.period=e}}if(typeof(b)!=="undefined"){if(b!==null){a.selections.custom_leaderboard_id=b}}a.offsets={};a.current_limit=null;a.hide_top_load_button=false;a.hide_bottom_load_button=false;$("#highscores-tab-content").html($("#loader-holder").html());if(a.selections.type==="top"){$(".countdown").html('Updated in: <span id="leaderboard-clearing-time"></span>');$("#leaderboard_period").hide();a._setupLeaderboardClearingTime("month")}else{$(".countdown").html('Reset in: <span id="leaderboard-clearing-time"></span>');$("#leaderboard_period").show();a._setupLeaderboardClearingTime(a.selections.period)}$(".leaderboard-modal").fadeIn(300);$(".body-overlay").fadeIn(300);a._getData(a.level,a.selections.type,a.selections.period,a.user_callback,c,null)};this.hide=function(){$(".leaderboard-modal").fadeOut(300);$(".body-overlay").fadeOut(300);$("#game-container").css("z-index",0);$("#game-container").css("z-index",0);if(typeof(a.user_callback)==="function"){a.user_callback(2)}};this.loadMore=function(b){if(b<0){a.offsets.above=b}if(b>0){a.offsets.below=b}a._getData(a.level,a.selections.type,a.selections.period,a.user_callback,false,b)};this.getRawLeaderboard=function(i,h,b){if(typeof(h)!=="function"){throw ("Error: The callback provided is not a function")}if(typeof(i)!=="number"){throw ("Error: The level param must be an integer")}var d="global";var f="month";var e=0;var c=null;if(typeof b!=="undefined"&&(typeof b==="object"||typeof b==="array")){if(typeof b[0]!=="undefined"&&b[0]!==null){d=b[0]}if(typeof b[1]!=="undefined"&&b[1]!==null){f=b[1]}if(typeof b[2]!=="undefined"&&b[2]!==null){e=b[2]}if(typeof b[3]!=="undefined"&&b[3]!==null){c=b[3]}}a.raw_data_user_callback=h;var g=function(k){var j=[];var l=k.leaderboard_data;for(row in l){l[row]=a._formatExternalScores(l[row])}j.data=l;j.message=k.message;j.success=k.success;a.raw_data_user_callback(j)};a._getData(i,d,f,g,true,e,"callback",c)};this._formatExternalScores=function(b){delete b.facebook_id;delete b.friend_button_html;delete b.avatar_override;if(typeof b.rank_img!=="undefined"){delete b.rank_img}return b};this.getUserHighscore=function(d,c){var b={game_id:game_data.game_id,level:d};$.ajax({url:"/games/highscore/get-user-highscore",type:"POST",dataType:"JSON",data:b,success:function(e){if(typeof(c)!=="function"){throw ("MC.Leaderboard.getUserHighscore - Error: provided callback is not a valid callback")}e.data=a._formatExternalScores(e.data);c(e)}})};this._populatePopup=function(D){var q=D.message;var A=JSON.parse(JSON.stringify(D.leaderboard_data));var m=D.game_data;if(D.offset===0){$("#highscores-tab-content").html("");a.offsets={above:0,below:0};a.current_limit=A.length}else{if(D.offset<0){A.reverse()}}for(row in A){if(A[row].rank==1){a.hide_top_load_button=true}var y=$("<div />").addClass("ranking cell rank-"+A[row].rank);y.html(A[row].rank);if(A[row].nickname===null){continue}var l=$("<div />").addClass("user-img cell");l.append($("<img />").addClass("avatar").attr("src",A[row].avatar).attr("width","32").attr("height","32"));l.append($("<span />").addClass("country-flag").attr("style","background: url('/content/images/dynamic/flag_"+A[row].country.toLowerCase()+"_18.png');background-position:center;"));if(A[row].rank==1){l.append($("<img />").addClass("crown").attr("src","/images/leaderboards/crown.png"))}var x=$("<div />").addClass("friend-button cell");x.html(A[row].friend_button_html);x.append('<div id="player_blob_'+A[row].user_id+'" class="toolbox bottom" style="margin-left: -40px; margin-top: 0px;width:100px;display: none;text-align: center;">Add Friend</div>');var B=$("<div />").addClass("user-name cell");if(A[row].score==="?"){var s=A[row].nickname+" <small>- You need to beat your highscore to show up here!</small>";B.attr("style","width:auto;")}else{var s=A[row].nickname}B.append($("<a />").attr("href","/user/"+A[row].user_id+"#t-lb-r"+A[row].rank).attr("target","__blank").html(s));var o=$("<div />").addClass("country-flag cell");o.append($("<img />").attr("src","/content/images/dynamic/flag_"+A[row].country.toLowerCase()+"_18.png"));var t="";if(A[row].is_guest_score){var k=$("<a />").html("Signup to Save!").addClass("button hot action small").addClass("leaderboard-signup").attr("style","cursor:pointer;");$(".leaderboard-modal").off("click",".leaderboard-signup");$(".leaderboard-modal").on("click",".leaderboard-signup",function(){MC.login()});t=$("<div />").addClass("challenge cell").append(k)}else{if(!A[row].is_logged_in_user){var k=$("<a />").attr("href","?chuid="+A[row].user_id+"#t-lb-ch-r"+A[row].rank).html("Challenge").addClass("button hot action small");t=$("<div />").addClass("challenge cell").append(k)}else{if(A[row].score!=="?"){var e=$("<ul />").addClass("social-sites");var p={message:"I just got a highscore of "+A[row].score+" in "+m.name+". Challenge my score!",link:window.location.origin+"/games/"+m.game_url_key,link_picture:window.location.origin+"/"+m.big_icon.path,link_title:"Beat my score in "+m.name};var d=function(){MC.Share.postCustomMessage(function(E){var F=JSON.parse(E);if(F.success=="true"){$(".leaderboard-modal ul.social-sites").html('<div class="social-response">Posted</div>')}else{$(".leaderboard-modal ul.social-sites").html('<div class="social-response">Error</div>')}var G=setTimeout(function(){$(".leaderboard-modal ul.social-sites").html(a.social_tmp_store);clearTimeout(G)},3000)},JSON.stringify(p),"facebook");a.social_tmp_store=$(".leaderboard-modal ul.social-sites").html();$(".leaderboard-modal ul.social-sites").html('<img class="social-loader" src="'+static_path+'images/loading/waiting32.gif" />')};var b=$("<li />").append($("<a />").attr("href","#").addClass("facebook").html('<span class="screen-reader">Share your Score</span>'));$(".leaderboard-modal").off("click",".social-sites .facebook");$(".leaderboard-modal").on("click",".social-sites .facebook",d);var r="http://twitter.com/intent/tweet?text="+encodeURI(p.message)+"@miniclip&amp;url="+encodeURI(p.link)+"%3Futm_source%3Dgame-page%26utm_medium%3Dshare-button-twitter%26utm_campaign%3Dsocial-share";var j=$("<li />").append($("<a />").addClass("twitter").html('<span class="screen-reader">Tweet this score</span>').attr("href",r).attr("target","__blank"));var i="mailto:?subject="+encodeURI(p.link_title)+"&body="+encodeURI(p.message)+" : "+encodeURI(p.link);var v=$("<li />").append($("<a />").addClass("email").html('<span class="screen-reader">Share by email</span>').attr("href",i).attr("target","__blank"));var n="https://plus.google.com/share?url="+encodeURI(p.link);var f=$("<li />").append($("<a />").html('<span class="screen-reader">Share on Google+</span>').addClass("google-plus").attr("href",n).attr("target","__blank"));t=$("<div />").addClass("challenge cell").append(e.append(b).append(j).append(v).append(f))}}}if(A[row].score!=="?"){var w=$("<div />").addClass("score cell").html(A[row].score)}else{var w=""}var C=$("<div />").addClass("highscore-row").append(y).append(l).append(x).append(B).append(w).append(o).append(t);if(A[row].is_logged_in_user||A[row].is_guest_score){C.addClass("me")}var h=$("<div />").append(C);if(D.offset<0){$("#highscores-tab-content").prepend(h.html())}else{$("#highscores-tab-content").append(h.html())}}if(A.length===0&&D.offset===0){if(typeof(q)!=="undefined"&&q!==""){var z=q}else{var z="No submitted scores to show!"}$("#highscores-tab-content").html('<div class="notification info">'+z+"</div>")}else{$(".load-more").remove();if(D.offset>=0&&A.length!==8){a.hide_bottom_load_button=true}if(A[row].rank=="?"){a.hide_bottom_load_button=true}if(!a.hide_bottom_load_button){var c=$("<div />").addClass("highscore-row load-more").html('<a href="#" class="button greedy">Load More</a>');c.on("click","a",function(E){MC.Leaderboard.loadMore(a.offsets.below+a.current_limit);E.preventDefault()});$("#highscores-tab-content").append(c)}if(!a.hide_top_load_button){var g=$("<div />").addClass("highscore-row load-more").html('<span class="action-button blue aligned-leaderboard-big-button"><a href="#" class="button greedy">Load More</a></span>');g.on("click","a",function(E){MC.Leaderboard.loadMore(a.offsets.above-a.current_limit);E.preventDefault()});$("#highscores-tab-content").prepend(g);var u=$(".highscore-row:first-child").outerHeight();$("#highscores-tab-content").scrollTop(u)}}$(".highscore-row.me").hide();$(".highscore-row.me").delay(200).show("bounce",null,800);$(".challenge a").click(function(){if($(this).attr("href").split("#")[0]==window.location.search){window.location.reload()}});$(".challenge").click(function(){stats_manager.trackerChallenges("newChallenge")})};this._setupLeaderboardClearingTime=function(n,e){var l=new Date();var b=l.getMonth();var o=l.getFullYear();if(typeof e!=="undefined"){var m=e.split(" ");var h=m[0].split("-");var g=m[1].split(":");var q=Date.UTC(h[0],h[1],h[2],g[0],g[1],g[0])}else{if(n==="month"){var q=Date.UTC(o,b+1,1)}else{if(n==="week"){var j=new Date(o,b+1,0).getDate();var f=l.getDate();var i=l.getDay();var k=(f-i)+1;var d=k+7;if(d>j){b=b+1;d=(d-j)}var q=Date.UTC(o,b,d)}else{var q=Date.UTC(o,b+1,1)}}}var c=l.getTime();var p=Math.ceil((q-c)/1000);a.countdown=p;if(a.countdown_started===false){window.setInterval(function(){a.countdown--;var y=a.countdown;var x=Math.floor(y/86400);y-=x*86400;var s=Math.floor(y/3600)%24;var t=(s<10)?("0"+s):s;y-=s*3600;var u=Math.floor(y/60)%60;var v=(u<10)?("0"+u):u;y-=u*60;var w=y%60;var r=(w<10)?("0"+w):w;$("#leaderboard-clearing-time").html(x+" days "+t+":"+v+":"+r)},1000);a.countdown_started=true}};this._setupCustomLeaderboardLinks=function(){$.ajax({url:"/games/highscore/active-leaderboards",type:"POST",dataType:"JSON",data:{game_id:game_data.game_id,level:a.level},success:function(b){if(typeof b.success==="undefined"){throw ("Leaderboard._setupCustomLeaderboardLinks - Error: Can't get custom leaderboards")}if(!b.success){throw ("Leaderboard._setupCustomLeaderboardLinks - Error: "+b.message)}$("#custom_leaderboard_tabs").html("");for(index in b.active_leaderboards){if(b.active_leaderboards[index].is_default==="0"){var c=$("<span />").addClass("action-button tab");c.data("nav","custom").data("leaderboard-id",b.active_leaderboards[index].leaderboard_id);var d=$("<a />").attr("href","#").html(b.active_leaderboards[index].event_name);$("#custom_leaderboard_tabs").append(c.html(d))}}},error:function(b){console.log("Leaderboard._setupCustomLeaderboardLinks - Error: Error in ajax call",b)}})};this._getData=function(b,h,g,j,c,e,k,d){var i=game_data.game_id+h+b+g+a.selections.custom_leaderboard_id+e+":"+d;if(h==="custom"){f.custom_leaderboard_id=a.selections.custom_leaderboard_id}if(typeof e==="undefined"||e===null){e=0}if(typeof k==="undefined"){k="local"}var f={game_id:game_data.game_id,type:h,level:b,period:g,offset:e};if(typeof d!=="undefined"||typeof d!==null){f.limit=d}if(typeof(a.storage[i])==="undefined"){$.ajax({url:"/games/highscore/leaderboard",type:"POST",dataType:"JSON",data:f,success:function(l){try{if(typeof l.success==="undefined"){throw ("Leaderboard._getData - Error: Wrongly formatted response")}if(!l.success){throw ("Leaderboard._getData - Error: "+l.message)}if(typeof(j)!=="function"){throw ("Leaderboard._getData - Error: The callback provided is not a function")}a.storage[i]=l;if(k==="local"){a._populatePopup(l);if(c===true){j(1)}}else{if(k==="callback"){j(l)}else{throw ("Leaderboard._getData - Error: Unknown return_type")}}}catch(m){if(k==="local"){a.hide()}throw (m)}},error:function(l){if(k==="local"){a.hide()}console.log("Leaderboard._getData - Error: Error in ajax call",l)}})}else{if(typeof(j)!=="function"){throw ("Leaderboard._getData - Error: The callback provided is not a function")}if(k==="local"){a._populatePopup(a.storage[i]);if(c===true){a.user_callback(1)}}else{if(k==="callback"){j(a.storage[i])}else{throw ("Leaderboard._getData - Error: Unknown return_type")}}}};return{saveScore:this.saveScore,show:this.show,hide:this.hide,changeSelection:this.changeSelection,loadMore:this.loadMore,getRawLeaderboard:this.getRawLeaderboard,getUserHighscore:this.getUserHighscore}};