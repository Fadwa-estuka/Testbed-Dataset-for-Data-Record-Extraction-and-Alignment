//*********************** Site Variables */
var eventName = "aus";
var lang = "en_AU";
var infoImg = new Image();
var staticSB = 0;
var ptOn = 0;
var sbOn = 1;
var ajaxRefresh = 300000;
var newsRefresh = 900000;
var messageRefresh = 900000;
var overlayOpen = false;
var contentOverlayOpen = false;
var mediawallOverlayOpen = false;
//********************** Content Shedding Variables */
var useFlashNewsApp = true;
/**************************** IBM banner link */
function openIBMFlash(nav) {
if(nav) {
var url = "www.ibm.com/ausopen?promo=" + nav;
} else {
var url = "www.ibm.com/ausopen";
}
s.events='event9';
s.eVar25=url;
s.linkTrackVars='events,eVar25';
s.linkTrackEvents='event9';
s.tl(this,'e',url);
window.open("http://"+url,'ibmflash','resizable=1,scrollbars=1,location=1,toolbar=1,status=1,');
//window.open("http://"+url,'ibmflash','height=570,width=760,resizable=0,scrollbars=0,location=0,toolbar=0,status=0,left=100,top=100,screenX=100,screenY=100');
}
//for loading videos in hidden iframe, prevents new window from opening
function loadVideo(vidFile){
frames['videoLaunch'].location.href = vidFile;
}
/*
* Custom Event Triggers
*
* Window Size
* - windowsize.global.enter
* - windowsize.global.exit
* - windowsize.tablet.enter
* - windowsize.desktop.enter
* - windowsize.extended.enter
* - windowsize.extended.exit
*/
var windowSize;
var windowLoad = true;
/* define specific actions to take when screen is at various sizes */
$(function(){
$(window).on('windowsize.extended.enter', function() {
//console.info('window entered extended size');
/** things to do when screen enters extended size **/
//measureApp('Extended Panel Opened');
if(!gallery_page){
$('#pageWrapper:not(.wide)').removeClass('regular').addClass('expanded');
//$('#pageWrapper.scores').removeClass('expanded').addClass('regular');
$('body.ms_page #pageWrapper').removeClass('regular').addClass('expanded');
panel_initContent();
}
});
$(window).on('windowsize.extended.exit', function() {
//console.info('window exited extended size');
/** things to do when screen enters extended size **/
//measureApp('Extended Panel Closed');
if(!gallery_page){
$('#pageWrapper:not(.wide)').removeClass('expanded').addClass('regular');
//$('#pageWrapper.scores').removeClass('expanded').addClass('regular');
$('body.ms_page #pageWrapper').removeClass('expanded').addClass('regular');
}
});
$(window).on('windowsize.desktop.enter', function() {
//console.info('window entered desktop size');
/** things to do when screen enters desktop size **/
});
$(window).on('windowsize.tablet.enter', function() {
//console.info('window entered tablet size');
/** things to do when screen enters tablet size **/
});
$(window).on('windowsize.global.enter', function() {
//console.info('window entered gloabl size');
/** things to do when screen enters global/mobile size **/
});
});
//*************** get or set ESPN geo cookie **********************
var espnGeoBlock;
var currentTime = new Date();
var expiresTime_ms = currentTime.getTime() + 7200000; //2 hours
var expiresTime = new Date(expiresTime_ms);
//$(function(){
if($.cookie("espnGeoCookie")){
espnGeoBlock = $.cookie("espnGeoCookie") === "true"?true:false;
} else {
$.ajax({
url: "http://broadband.espn.go.com/espn3/auth/feeds/tennis",
dataType: 'jsonp'
}).done(function(data){
try {
if(data.isInUnitedStates == "true"){
espnGeoBlock = false;
}else{
espnGeoBlock = true
}
$.cookie('espnGeoCookie', espnGeoBlock.toString(), { expires: expiresTime });
}catch(err){
espnGeoBlock = true;
}
}).fail(function(err){
espnGeoBlock = true;
});
}
//});
/************************ Jquery functions */
$(document).ready(function(){
//setWingPlayers('left');
//setWingPlayers('right');
//setWingPlayers();
//setSubBanner();	
if(!gallery_page){
windowSize = getWindowSize();
if(windowSize == 'extended') { 
//$(window).trigger('windowsize.extended.enter'); 
$('#pageWrapper:not(.wide)').removeClass('regular').addClass('expanded');
//$('#pageWrapper.scores').removeClass('expanded').addClass('regular');
$('body.ms_page #pageWrapper').removeClass('regular').addClass('expanded');
} else {
//$(window).trigger('windowsize.extended.exit');
$('#pageWrapper:not(.wide)').removeClass('expanded').addClass('regular');
//$('#pageWrapper.scores').removeClass('expanded').addClass('regular');
$('body.ms_page #pageWrapper').removeClass('expanded').addClass('regular');
}
}
var urlPath = location.pathname.substring(0);
var queryPath = location.search.substring(1);
if (urlPath.indexOf('/scores/index.manual.html') != -1) {urlPath = "/"+lang+"/scores/index.html";}
if (urlPath.indexOf('/scores/pointstream/') != -1) {urlPath = "/"+lang+"/scores/pointstream/index.html?promo=ps_sublevel_nav";}
if (urlPath.indexOf('/scores/schedule/schedule') != -1) {urlPath = "/"+lang+"/scores/schedule/index.html";}
if (urlPath.indexOf('/scores/stats/') != -1) {urlPath = "/"+lang+"/scores/extrastats/index.html";}
if (urlPath.indexOf('/scores/extrastats/') != -1) {urlPath = "/"+lang+"/scores/extrastats/index.html";}
/* TV schedule for the Schedule Section */
if (urlPath.indexOf('/event_guide/tv_schedule.html') != -1) {urlPath = "/"+lang+"/event_guide/tv_schedule.html";}
if (urlPath.indexOf('/scores/schedule/tv_schedule.html') != -1) {urlPath = "/"+lang+"/scores/schedule/tv_schedule.html";}
if (urlPath.indexOf('/scores/schedule/tournament_schedule.html') != -1) {urlPath = "/"+lang+"/scores/schedule/tournament_schedule.html";}
if (urlPath.indexOf('/scores/schedule/entertainment_schedule.html') != -1) {urlPath = "/"+lang+"/scores/schedule/entertainment_schedule.html";}
//if (urlPath.indexOf('/ibmrealtime/index.html') != -1) {urlPath = "/"+lang+"/scores/index.html";}
if (urlPath.indexOf('/scores/draws/bs/') != -1) {urlPath = "/"+lang+"/scores/draws/bs/index.html";}
if (urlPath.indexOf('/scores/draws/bd/') != -1) {urlPath = "/"+lang+"/scores/draws/bs/index.html";}
if (urlPath.indexOf('/scores/draws/gs/') != -1) {urlPath = "/"+lang+"/scores/draws/bs/index.html";}
if (urlPath.indexOf('/scores/draws/gd/') != -1) {urlPath = "/"+lang+"/scores/draws/bs/index.html";}
if (urlPath.indexOf('/scores/draws/ms/') != -1) {urlPath = "/"+lang+"/scores/draws/ms/index.html";}
if (urlPath.indexOf('/scores/draws/md/') != -1) {urlPath = "/"+lang+"/scores/draws/md/index.html";}
if (urlPath.indexOf('/scores/draws/ws/') != -1) {urlPath = "/"+lang+"/scores/draws/ws/index.html";}
if (urlPath.indexOf('/scores/draws/wd/') != -1) {urlPath = "/"+lang+"/scores/draws/wd/index.html";}
if (urlPath.indexOf('/scores/draws/xd/') != -1) {urlPath = "/"+lang+"/scores/draws/xd/index.html";}
if (urlPath.indexOf('/scores/draws/qs/') != -1) {urlPath = "/"+lang+"/scores/draws/qs/index.html";}
if (urlPath.indexOf('/scores/draws/us/') != -1) {urlPath = "/"+lang+"/scores/draws/qs/index.html";}
if (urlPath.indexOf('/scores/draws/cs/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/cd/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/ds/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/dd/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/sq/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/dq/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/xy/') != -1) {urlPath = "/"+lang+"/scores/draws/cs/index.html";}
if (urlPath.indexOf('/scores/draws/live.html') != -1) {urlPath = "/"+lang+"/scores/draws/ms/index.html";}
if (urlPath.indexOf('/scores/cmatch/') != -1) {urlPath = "/"+lang+"/scores/cmatch/index.html";}
if (urlPath.indexOf('/scores/completed_matches/') != -1) {urlPath = "/"+lang+"/scores/completed_matches/index.html";}
if (urlPath.indexOf('/scores/records/') != -1) {urlPath = "/"+lang+"/scores/records/index.html";}
if (urlPath.indexOf('/players/atp') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/wta') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/cmatch/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/overview/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/profile/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/related/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/stats/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/w') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/playerSearch') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
if (urlPath.indexOf('/players/nations/') != -1) {urlPath = "/"+lang+"/players/nations/index.html";}
if (urlPath.indexOf('/players/photos/') != -1) {urlPath = "/"+lang+"/news/photos/players/index.html";} 
if (urlPath.indexOf('/interactive/slideshow/') != -1) {urlPath = "/"+lang+"/interactive/slideshow/index.html";}
if (urlPath.indexOf('/interactive/radio/') != -1) {urlPath = "/"+lang+"/interactive/radio/index.html";}
if (urlPath.indexOf('/news/20') != -1) {urlPath = "/"+lang+"/news/index.html";}
if (urlPath.indexOf('/news/articles/') != -1) {urlPath = "/"+lang+"/news/articles/index.html";}
if (urlPath.indexOf('/news/matchcentre/') != -1) {urlPath = "/"+lang+"/news/matchcentre/index.html";}
if (urlPath.indexOf('/news/blogs/') != -1) {urlPath = "/"+lang+"/fanzone/index.html";}
if (urlPath.indexOf('/news/live_blog/') != -1) {urlPath = "/"+lang+"/news/live_blog/index.html";}
if (urlPath.indexOf('/news/interviews/') != -1) {urlPath = "/"+lang+"/news/interviews/index.html";}
if (urlPath.indexOf('/news/match_reports/') != -1) {urlPath = "/"+lang+"/news/match_reports/index.html";}
if (urlPath.indexOf('/news/match_analysis/') != -1) {urlPath = "/"+lang+"/news/match_analysis/index.html";}
if (urlPath.indexOf('/news/photos/kia/') != -1) {urlPath = "/"+lang+"/news/photos/index.html";}
if (urlPath.indexOf('/news/photos/players/') != -1) {urlPath = "/"+lang+"/news/photos/players/index.html";} 
else if (urlPath.indexOf('/news/photos/') != -1) {urlPath = "/"+lang+"/news/photos/index.html";}
if (urlPath.indexOf('/news/galleries/') != -1) {urlPath = "/"+lang+"/news/photos/index.html";}
if (urlPath.indexOf('/news/juniors/') != -1) {urlPath = "/"+lang+"/news/juniors/index.html";}
//if(urlPath.indexOf('/photos/players/') != -1) {urlPath = "/"+lang+"/players/profiles.html";}
/*Event Guide*/
if (urlPath.indexOf('/event_guide/maps.html') != -1) {urlPath = "/"+lang+"/event_guide/the_basics.html";}
if (urlPath.indexOf("/event_guide/prize_money") != -1) {urlPath = "/"+lang+"/event_guide/tournament_facts.html";}
if (urlPath.indexOf('/event_guide/grand_slam_oval.html') != -1) {urlPath = "/"+lang+"/event_guide/entertainment.html";}
if (urlPath.indexOf('/event_guide/garden_square.html') != -1) {urlPath = "/"+lang+"/event_guide/entertainment.html";}
if (urlPath.indexOf('/event_guide/entertainment_performer_biographies.html') != -1) {urlPath = "/"+lang+"/event_guide/entertainment.html";}
/*Sponsors Section of Event Guide*/
if (urlPath.indexOf('/event_guide/kia_motors.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/garnier.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/ibm.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/rolex.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/aviva.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/optus.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/victorian_government.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/australia_post.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/evian.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/lacoste.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/heineken.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/wilson.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/qantas.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/seven_sport.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/fox_sports.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/anz.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/v_australia.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/jacob_s_creek.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/mount_franklin.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/maxxis.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/powerade.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
if (urlPath.indexOf('/event_guide/mlc.html') != -1) {urlPath = "/"+lang+"/event_guide/sponsors.html";}
/*Social*/
if (urlPath.indexOf('/social/index.html') != -1) {urlPath = "/"+lang+"/social/index.html";}
if (urlPath.indexOf('/social/leaderboard/index.html') != -1) {urlPath = "/"+lang+"/social/leaderboard/index.html";}
if (urlPath.indexOf('/interactive/mobile/') != -1) {urlPath = "/"+lang+"/interactive/mobile/index.html";}
/*Video pages for open drive, daily wrap*/
if (urlPath.indexOf('/video/open-drive.html') != -1) {urlPath = "/"+lang+"/video/open-drive.html";}
if (urlPath.indexOf('/video/daily-wrap.html') != -1) {urlPath = "/"+lang+"/video/daily-wrap.html";}
if (urlPath.indexOf('/video/live.html') != -1) {urlPath = "/"+lang+"/video/live.html";}
if (urlPath.indexOf('/video/live.draw.html') != -1) {urlPath = "/"+lang+"/video/live.draw.html";}
if (queryPath.indexOf('match_highlights') != -1) {urlPath = "/"+lang+"/video/index.html?tabName=highlights_videos";}
if (queryPath.indexOf('interviews') != -1) {urlPath = "/"+lang+"/video/index.html?tabName=interviews_videos";}
if (queryPath.indexOf('features') != -1) {urlPath = "/"+lang+"/video/index.html?tabName=features_videos";}
if (queryPath.indexOf('kia_open_drive') != -1) {urlPath = "/"+lang+"/video/index.html?tabName=open_videos";}
/*Explore Melbourne Section of Event Guide*/
if (urlPath.indexOf('/event_guide/play_melbourne') != -1) {urlPath = "/"+lang+"/event_guide/play_melbourne.html";}
/*Tickets Section of Event Guide*/
if (urlPath.indexOf('/tickets/travel_packages') != -1) {urlPath = "/"+lang+"/tickets/packages.html";}
if (urlPath.indexOf('/tickets/membership/index.html') != -1) {urlPath = "/"+lang+"/tickets/membership/index.html";}
if (urlPath.indexOf('/event_guide/employment_applications.html') != -1) {urlPath = "/"+lang+"/event_guide/employment.html";}
if (urlPath.indexOf('/event_guide/trophy_tour.html') != -1) {urlPath = "/"+lang+"/event_guide/trophy_tour.html";}
if (urlPath.indexOf('/event_guide/prize_money.html') != -1) {urlPath = "/"+lang+"/event_guide/prize_money.html";} 
/*Historical Database section of event guide */
if(urlPath.indexOf('/event_guide/history/') != -1) {urlPath = "/" + lang + "/event_guide/history/players/search.html";}
else if(urlPath == '/index.html') {urlPath += 'index.html';}
// Adjust for /en_AU/ not registering as 'Home'
if (urlPath == '/'+lang+'/') {urlPath += 'index.html';}
/*Super Tennis Site*/
if(location.href == "http://www.supertennis.com.au/"){
urlPath = "http://www.supertennis.com.au/";
//urlPath = "http://www.ausopen.com/en_AU/event_guide/event_guide.html";
}
$('#subnav a[href$="' + urlPath + '"]').addClass('active');
$('#subNav_menu a[href$="' + urlPath + '"]').parents("div.menu").siblings('a').addClass('active');
$('#subnav a[href$="' + urlPath + '"]').parents("li").addClass('active');
// awt: adding this here because social leaderboard is in two subnavs. I don't know how else to fix this.
// adding this allows for the parent nav item to be social and not both social and scores
if (urlPath.indexOf('/social/leaderboard/index.html') != -1) {urlPath = "/"+lang+"/social/index.html";}
$('#nav a[href$="' + urlPath + '"]').addClass('active');
$('#nav a[href$="' + urlPath + '"]').parents("li").addClass('active');
$('#nav a[href$="' + urlPath + '"]').parents("ul").prev("ul li a").addClass('active');
//jquery code to add hover state for day nav that displays date for day being hovered over
//and hides date of current day
$("#day_nav li:not(.current)").has('div.date').children('a').hover(
function(){
$('#day_nav li.current').children('div.date').hide();
$(this).siblings('div.date').show();
},
function(){
$('#day_nav li.current').children('div.date').show();
$(this).siblings('div.date').hide();
}
);
$("#scheduleNav li:not(.current)").has('div.date').children('a').hover(
function(){
$('#scheduleNav li.current').children('div.date').hide();
$(this).siblings('div.date').show();
},
function(){
$('#scheduleNav li.current').children('div.date').show();
$(this).siblings('div.date').hide();
}
);
$("#nav .nav_item").hover(
function() {
$('.nav_item').not(this).addClass('inactive');
},
function() {
$('.nav_item').not(this).removeClass('inactive');
}
);
$('#nav > ul > li:has(.menu)').doubleTapToGo(); //jquery to prevent default on mainnav on touch. // see plugin added to bottom of this file.
$("img.tpButton").click(function(){
$("img.tpButton").each(function(){this.src = this.src.replace("_on","_off"); this.width="125"; this.height="19"; this.style.marginTop="4px";});
this.src = this.src.replace("_off","_on");
this.width="133";
this.height="27";
this.style.marginTop="0px";
});
// jquery code for deselectable text
$.fn.extend({
disableSelection: function() {
this.each(function() {
if (typeof this.onselectstart != 'undefined') {
this.onselectstart = function() { return false; };
} else if (typeof this.style.MozUserSelect != 'undefined') {
this.style.MozUserSelect = 'none';
} else {
this.onmousedown = function() { return false; };
}
});
}
});
// geocheck for espen video in nav
if(espnGeoBlock){
$('#nav').find('.watchESPNlink').remove();
$('.watchESPNlink').remove();
}
// load Facebook JS SDK
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
//js.asyc=false;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0&appId=134137079648";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// AO Daily email subscribe submit measureApp
// /en_AU/social/email/index.html
$('.emailContent iframe').contents().find('#aoDaily #quicksub #subscribe').click(function(){
measureApp('Site Functions','AO Update Subscribe'); 
});
});// ends dom ready
//jquery code for top navigation
$.fn.hoverClass = function(c) {
return this.each(function(){
$(this).hover(
function() { $(this).addClass(c); },
function() { $(this).removeClass(c); }
);
});
};
// set the background players for left|right wings
function setWingPlayers() {
var path = '';
var i = Math.floor(Math.random()*8) - 1;
$.getJSON('/en_AU/xml/gen/bg_wings_left.json', function(data) {
path = data[i];
if (path == undefined)
path = data[0];
$('#leftWing').css('background-image', 'url("'+path+'")');
});
$.getJSON('/en_AU/xml/gen/bg_wings_right.json', function(data) {
path = data[i];
if (path == undefined)
path = data[0];
$('#rightWing').css('background-image', 'url("'+path+'")');
});
}
//set the background sub banner at top
function setSubBanner() {
var path = '';
$.getJSON('/en_AU/xml/gen/banners/sub_banner.json', function(data) {
i = Math.floor(Math.random()*data.length) - 1;
path = data[i];
if (path == undefined)
path = data[0];
$('#bgImage').css('background-image', 'url("'+path+'")');
});
}
function setFlexPromo(num) {
num = (typeof num == undefined ? '1' : ''+num);
$.getJSON('/en_AU/xml/gen/flex_promos/flex_promo_'+num+'.json', function(data) {
i = Math.floor(Math.random()*data.length);
promo = data[i];
ad = '<a href="'+promo.link+'"><img src="'+promo.image+'" width="498" height="178" /></a>';
$('#flexpromo'+num).html(ad);
})
}
function setRailPromo() {
$.getJSON('/en_AU/xml/gen/flex_promos/rail_promo.json', function(data) {
i = Math.floor(Math.random()*data.length);
promo = data[i];
ad = '<a href="'+promo.link+'"><img src="'+promo.image+'" width="300" height="83" /></a>';
$('#railPromo').html(ad);
})
}
//***************launch SlamTracker********************************
var slamtrackerWindow = "";
var slamtrackerLaunchPage = "";
function launchSlamTracker(syn, matchid, promo, cmatchid, courtid, view){
slamtrackerLaunchPage = 'http://'+siteURL;
if (promo == undefined||promo=="") {
promo = "";
} else if (promo == 'debug'){
promo="debug=true";
} else {
promo="promo="+promo;
}
if (st_tournStarted || promo=="debug=true") {
slamtrackerLaunchPage += '/'+lang+'/slamtracker/slamtracker.html';
if(matchid == undefined){
matchid = "";
}
var d = new Date();
var t = d.getTime();
slamtrackerLaunchPage += "?ts=" + t;
slamtrackerLaunchPage += "&ref=" + document.location.host + document.location.pathname;
slamtrackerLaunchPage += (syn)?"&syn="+syn:"&syn=none";
slamtrackerLaunchPage += (matchid)?"&matchid="+matchid:"";
slamtrackerLaunchPage += "&"+promo;
slamtrackerLaunchPage += (cmatchid)?"&cmatchid="+cmatchid:"";
slamtrackerLaunchPage += (courtid)?"&courtid="+courtid:"";
slamtrackerLaunchPage += (view)?"&view="+view:"";
if (syn=="" || syn==null||syn=="none") {
height = navigator.appVersion.indexOf('Safari')>0 && navigator.appVersion.indexOf('Chrome')==-1?'717':'672';
} else {
height = navigator.appVersion.indexOf('Safari')>0 && navigator.appVersion.indexOf('Chrome')==-1?'717':'672';
}
if (slamtrackerWindow.closed || slamtrackerWindow==""){
//consoleWindow = window.open(consolelaunchPage,"consoleWindow","width=510,height=" + mcWindowHeight + ",top=50,left=50")
slamtrackerWindow = window.open(slamtrackerLaunchPage, "pointstreamWindow", "width=1024,height=672,top=50,left=50,location=no,status=no,toolbar=no,resizable=no");
if (slamtrackerWindow.opener == null) slamtrackerWindow.opener=self;
}
slamtrackerWindow.focus(); 
} else {
slamtrackerLaunchPage += '/'+lang+'/slamtracker/index.html';
slamtrackerLaunchPage += "?"+promo;
location.href=slamtrackerLaunchPage;
}
}
function launch(syn,matchid,promo,version){
launchSlamTracker(syn,matchid,promo,version);
}
/******************************Live Video Console */
var lcWindow = "";
function launchLC(video_ref,syn,debug,alt,test){
var lcLaunchPage = "http://"+siteURL+"/en_AU/console/console.html?";
if (test) lcLaunchPage = "/en_AU/console/console.html?";
if (browser.isIPad) {
document.location.href = "http://"+siteURL+"/en_AU/console/ipadLiveVideo.html?courtId=" + video_ref;
}
else if (hasReqestedFlashVersionLC && NPRuntime){
var d = new Date()
var t = d.getTime()
lcLaunchPage += "ts=" + t;
if ((video_ref == 'A') || (video_ref == 'B') || (video_ref == 'C') || (video_ref == 'D') || 
(video_ref == 'E') || (video_ref == 'G') || (video_ref == 'H') || (video_ref == 'I') ||
(video_ref == 'J') || (video_ref == 'K') || (video_ref == 'L') || (video_ref == 'M') ||
(video_ref == 'O') || (video_ref == 'P') || (video_ref == 'Q') || (video_ref == 'c') ||
(video_ref == 'd') || (video_ref == 'f')) {
lcLaunchPage += '&video=' + video_ref;
}
else{
lcLaunchPage += '&video=';
}
lcLaunchPage += (syn && syn != '')?"&syn="+syn:"&syn=site";
lcLaunchPage += (debug && debug.indexOf("debug")>-1)?"&db=true":"&db=false";
lcLaunchPage += "&ref=" + document.location.host + document.location.pathname;
lcLaunchPage += (alt)?"&alt="+alt:"&alt=";
if (lcWindow.closed || lcWindow==""){
lcWindow = window.open(lcLaunchPage,"lcWindow","width=960,height=680,top=0,left=0,resizable=no,location=no")
if (lcWindow.opener == null) lcWindow.opener=self;
}
lcWindow.focus();
} else {
//user doesn't have flash9:
document.location.href = "http://"+siteURL+"/en_AU/flashupgrade.html?fl=" + hasReqestedFlashVersionLC + "&br=" + NPRuntime;
}
}
//*****************************/
// ESPN page
//*****************************/
function launchESPN(){
var lcLaunchPage = "http://"+siteURL+"/en_AU/console/espn.html";
if (lcWindow.closed || lcWindow==""){
lcWindow = window.open(lcLaunchPage,"lcWindow","width=960,height=900,top=0,left=0,resizable=no,location=no")
if (lcWindow.opener == null) lcWindow.opener=self;
}
lcWindow.focus();
}
//*****************************/
//launch standalone radio
//*****************************/
var radioWindow = "";
var radiolaunchPage;
function launchRadio(stream,debug){// where stream in("0") debug in(true,false)
var radioLaunchPage = "http://"+siteURL+"/en_AU/interactive/radio/radio.html?"; //
if (browser.isIPad || navigator.userAgent.toLowerCase().indexOf("android 4") != -1)
{
window.open("http://"+siteURL+"/en_AU/interactive/radio/radio.html", "_blank");
measureApp("News & Photos", "AO Radio", "Android Launch"); 
//document.location.href = "http://"+siteURL+"/en_AU/interactive/radio/ipad.html";
} else if (browser.isIPhone) {
window.open("http://ibm-ausopen-radio.akacast.akamaistream.net/7/316/32049/v1/auth.akacast.akamaistream.net/ibm-ausopen-radio.mp3");
measureApp("News & Photos", "AO Radio", "iPhone Launch"); 
} else {
//if (hasReqestedFlashVersion && NPRuntime){
s.events='event21';
s.linkTrackVars='events';
s.linkTrackEvents='event21';
var d = new Date()
var t = d.getTime()
radioLaunchPage += "ts=" + t;
radioLaunchPage += (debug && debug.indexOf("debug")>-1)?"&db=true":"&db=false";
radioLaunchPage += "&ref=" + document.location.host + document.location.pathname;
radioLaunchPage += "&lang=en_AU";// + lang;
radioLaunchPage += "&stream=" + stream + "&syn=";
if (radioWindow.closed || radioWindow==""){
radioWindow = window.open(radioLaunchPage,"radioWindow","width=419,height=165,top=50,left=50");
measureApp("News & Photos", "AO Radio", "Launch");
if (radioWindow.opener == null) radioWindow.opener=self;
}
radioWindow.focus();
/*	} else {
//user doesn't have flash9:
document.location.href = "http://"+siteURL+"/en_AU/flashupgrade.html?fl=" + hasReqestedFlashVersion + "&br=" + NPRuntime + "&sh=true";
} */
}
}
/*****************************
launch scoreboard
******************************/
function launchScoreboard(court){
if(court == undefined){
court = "";
}
var d = new Date();
var t = d.getTime();
var scoreboardLaunchPage = 'http://'+siteURL+'/en_AU/liteScores/scoreboard.html?court=' + court;
scoreboardLaunchPage += "&ts=" + t;
scoreboardLaunchPage += "&ref=" + document.location.host + document.location.pathname;
var wh = 741;
height = navigator.appVersion.indexOf('Chrome')>0?'684':'681';
scoreboardWindow = window.open(scoreboardLaunchPage, "scoresWindow", "width=936,height="+height+",top=50,left=50,location=no,status=no,toolbar=no,resizable=no,scrollbars=no");
if (scoreboardWindow.opener == null) scoreboardWindow.opener=self;
}
function openOverlayPhoto(image,width,height,capcred){
$('#fade').show();
$('#light').show();
$('#otherPlayer').hide();
$('#overlayPhotoContent').show();
$('#overlayPhoto').show();
$('#overlayPhoto').css('width',width+'px');
$('#overlayPhoto .image').html('<img src="'+image+'" width="'+width+'" height="'+height+'" border="0" alt=""/>');
if(capcred){
var tmp = capcred.split('|');
$('#overlayPhoto .caption').html(tmp[0]);
$('#overlayPhoto .credit').html(tmp[1]);
}
$('#overlayPhoto .image').bind("contextmenu",function(e){ return false; });
}
function closeOverlayPhoto(){
$('#overlayPhotoContent .image').html('');
$('#overlayPhotoContent .caption').html('');
$('#overlayPhotoContent .credit').html('');
$('#overlayPhotoContent').hide();
$('#overlayPhoto').hide();
$('#overlayHtmlContentWrapper').html('');
$('#overlayHtml').hide();
//$('#overlayPhotoContent .close').hide();
$('#fade').hide();
$('#light').hide();
overlayOpen = false;
contentOverlayOpen = false;
mediawallOverlayOpen = false;
}
/**********************************************************************
This function is called when a user clicks a more link in the history
timeline and it should show the content in a light box
**********************************************************************/
function openContentOverlay(urlToContent){
if(!contentOverlayOpen){
$('#fade').show();
$('#light').show();
$('#otherPlayer').hide();
$('#overlayPhoto').hide();
$('#overlayHtml').show();
} else {
$('#overlayHtml #overlayHtmlContentWrapper').html('');
}
$('#overlayHtml #overlayHtmlContentWrapper').load(urlToContent, function(){
$('#pagecontent.overlay .scroll-pane').jScrollPane({showArrows: true});
});
contentOverlayOpen = true;
}
function closeContentOverlay(){
$('#overlayHtml #overlayHtmlContentArea').html('');
$('#overlayHtml').hide();
$('#fade').hide();
$('#light').hide();
contentOverlayOpen = false;
overlayOpen = false;
mediawallOverlayOpen = false;
}
/**********************************************************************
This function is called when a user clicks play in the media wall
and it should show the content in a light box
**********************************************************************/
function openMediawallOverlay(urlToContent){
if(!contentOverlayOpen){
$('#fade').show();
$('#light').show();
$('#otherPlayer').hide();
$('#overlayPhoto').hide();
$('#overlayHtml').hide();
$('#overlayMediawall').show();
} else {
$('#overlayMediawall #overlayMediawallContentWrapper').html('');
}
mediawallOverlayOpen = true;
}
function closeMediawallOverlay(){
document.getElementById('mw_player').pauseMovie();
$('#overlayMediawall #overlayMediawallContentArea').html('');
$('#overlayMediawall').hide();
$('#fade').hide();
$('#light').hide();
contentOverlayOpen = false;
overlayOpen = false;
mediawallOverlayOpen = false;
}
// Measurement stuff:
function getCookie(name) {
var dc = document.cookie;
var prefix = name + "=";
var begin = dc.indexOf("; " + prefix);
if (begin == -1) {
begin = dc.indexOf(prefix);
if (begin != 0) { return null; }
} else { begin += 2; }
var end = document.cookie.indexOf(";", begin);
if (end == -1) { end = dc.length; }
return unescape(dc.substring(begin + prefix.length, end));
}
//****************twitter favs**********************
function parseDate(str) {
var v=str.split(' ');
return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
}
function loadFavs(data) {
// alert(data.length);
if (data.length > 0){
$('#favtwt').empty();
// alert(data[0].user.profile_image_url);
$('#favtwt').append(
'<a href="javascript:openExternal(\'http://www.twitter.com/'+data[0].user.screen_name+'\',true)">'
+'<img class="thumb" src="'+data[0].user.profile_image_url+'" width="72" height="72" alt="'+data[0].user.name+'" border="0" />'
+'</a>'
+'<div class="tweet">'
+'<a class="lgBlueBoldLink" href="javascript:openExternal(\'http://www.twitter.com/'+data[0].user.screen_name+'\',true)">'+data[0].user.name+'</a><br/>'
+ data[0].text
+' <div><span class="grayText date">'+jQuery.timeago(data[0].created_at)+'</span></div>'
+'</div>'
);
}
}
/*
* Twita@talinkahashifyer
* http://www.dustindiaz.com
* http://www.dustindiaz.com/basement/ify.html
*
* Copyright (c) 2009 Dustin Diaz
* licensed under public BSD
*/
var ify=function(){return{"link":function(t){return t.replace(/(^|\s+)(https*\:\/\/\S+[^\.\s+])/g,function(m,m1,link){return((m1!='')?' ':'')+'<a href="javascript:openExternal(\''+link+'\',true)">'+((link.length>25)?link.substr(0,24)+'...':link)+'</a>';});},"at":function(t){return t.replace(/(^|\s+)\@([a-zA-Z0-9_]{1,15})/g,function(m,m1,m2){return((m1!='')?' ':'')+'@<a href="javascript:openExternal(\'http://twitter.com/'+m2+'\',true)">'+m2+'</a>';});},"hash":function(t){return t.replace(/(^|\s+)\#([a-zA-Z0-9_]+)/g,function(m,m1,m2){return((m1!='')?' ':'')+'#<a href="javascript:openExternal(\'http://search.twitter.com/search?q=%23'+m2+'\',true)">'+m2+'</a>';});},"clean":function(tweet){return this.hash(this.at(this.link(tweet)));}};}();
//curvycorners rules
var CC_round_10 = {
tl: { radius: 10 },
tr: { radius: 10 },
bl: { radius: 10 },
br: { radius: 10 },
antiAlias: true
}
var CC_roundTop_10 = {
tl: { radius: 10 },
tr: { radius: 10 },
bl: { radius: 0 },
br: { radius: 0 },
antiAlias: true
}
var CC_roundBottom_10 = {
tl: { radius: 0 },
tr: { radius: 0 },
bl: { radius: 10 },
br: { radius: 10 },
antiAlias: true
}
/** function to open interactive map **/
function openInteractiveMap(){
height = navigator.appVersion.indexOf('Safari')>0?'411':'459';
mapWindow = window.open('/en_AU/event_guide/interactive-map.html', "InteractiveMap", "width=1000,"+height+",top=50,left=50,location=no,status=no,toolbar=no,resizable=no");
}
/*** trending players ***/
/*** return a comma formatted number, 1000000 returns 1,000,000 ***/
$.fn.digits = function(){ 
return this.each(function(){ 
$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
})
}
/*** request the trending players data file ***/
function getTrendingPlayers() {
$.ajax({
type: "GET",
url: "/en_AU/xml/gen/social/trending_www.json",
success: loadTrendingPlayers,
dataType: "json"
}); 
}
/*** update the trending players div ***/
function loadTrendingPlayers(data) {
var trending_html = "";
var trending_loc = "rail";
if ($('#hmTrending').length) {
trending_loc = 'hp';
trending_url = $('#hmTrending #top .more a').attr("href") + "?promo=" + trending_loc;
$('#hmTrending #top .more a').attr("href", trending_url);
} else {
trending_url = $('#railTrending #top .more a').attr("href") + "?promo=" + trending_loc;
$('#railTrending #top .more a').attr("href", trending_url);
}
var player_photos_cnt = 0;
$.each(data.trendingPlayers, function(index, value) {
// if (index >= 3) {
// return false; 
// }
if (player_photos_cnt > 2) {
return false; 
}
if (value.player_photo.indexOf("not_available") == -1) { // added this for testing to strip not existent players
trending_html += '<div class="trending_player">';
trending_html += ' <a href="/en_AU/social/leaderboard/index.html?promo='+trending_loc+'">';
trending_html += ' <div class="trending_image">';
if (value.player_photo_special == "false") { // standard player photo
trending_html += ' <img src="'+value.player_photo+'" height="70" border="0" alt="'+value.player_name+'" style="margin-left: 30px"/>';
} else {
trending_html += ' <img src="'+value.player_photo+'" height="70" border="0" alt="'+value.player_name+'"/>';
}
trending_html += ' </div>';
trending_html += ' <div class="trending_data">';
trending_html += ' <div class="trending_name">'+value.player_name+'</div>';
trending_html += ' <div class="trending_tweets">';
trending_html += ' <span class="trending_tweet_count">'+value.tweet_count+'</span> <span class="trending_tweet_label">tweets</span>';
trending_html += ' </div>';
trending_html += ' <div class="trending_sentiment">';
trending_html += ' <div class="trending_sentiment_bar"><div class="trending_sentiment_bar_pos" style="width:'+value.sentiment+'%;"><span>+</span></div><div class="trending_sentiment_bar_neg" style="width:'+(100 - value.sentiment)+'%;"><span>-</span></div></div> <span class="trending_sentiment_label">sentiment</span>';
trending_html += ' </div>';
trending_html += ' </div>';
trending_html += ' </a>';
trending_html += '</div>';
player_photos_cnt++;
} // added this for testing to strip not existent players
});
$('.trending_players').html(trending_html);
$('.trending_tweet_count').digits();
}
/*** new getScript allows you to specify caching ****/
$.getScript = function(url, callback, cache){
$.ajax({
type: "GET",
url: url,
success: callback,
dataType: "script",
cache: cache,
async:false
});
};
/*** new getScript allows you to specify caching ****/
$.load = function(url, callback, cache){
$.ajax({
type: "GET",
url: url,
success: callback,
dataType: "html",
cache: cache,
async:false
});
};
/* get the current window size and add listeners for when the window size changes */
function getWindowSize() {
var xsmall = '20em', // 320px
small = '40em', // 640px
medium = '48em', // 768px
large = '63.8em', // 1024px
xlarge = '85.4em'; // 1366px
// these will always trigger in the order in which they're defined
// so mqlmedium will still trigger after mqllarge when maximizing to > large from size < medium
var mqlxlarge = window.matchMedia('screen and (min-width:' + xlarge + ')');
var mqllarge = window.matchMedia('screen and (min-width:' + large + ')');
var mqlmedium = window.matchMedia('screen and (min-width:' + medium + ')');
mqlxlarge.addListener(function(mql) {
if (mql.matches) {
windowSize = 'extended';
$(window).trigger('windowsize.extended.enter');
} else {
windowSize = 'desktop';
$(window).trigger('windowsize.extended.exit').trigger('windowsize.desktop.enter');
}
//console.info('extended listener');
});
mqllarge.addListener(function(mql) {
if(windowSize !== 'extended') {
if (mql.matches) {
windowSize = 'desktop';
$(window).trigger('windowsize.desktop.enter');
} else {
windowSize = 'tablet';
$(window).trigger('windowsize.tablet.enter');
}
//console.info('desktop listener');
}
});
mqlmedium.addListener(function(mql) {
if(windowSize !== 'extended' && windowSize !== 'desktop') {
if (mql.matches) {
// don't run if this gets called because we've skipped from desktop down to global
windowSize = 'tablet';
$(window).trigger('windowsize.global.exit').trigger('windowsize.tablet.enter');
} else {
windowSize = 'global';
$(window).trigger('windowsize.global.enter');
}
//console.info('tablet listener');
}
});
/*var mqlorientation = window.matchMedia('screen and (orientation:portrait)');
mqlorientation.addListener(function(mql) {
if (mql.matches) {
windowOrientation = 'portrait';
$(window).trigger('windowsize.orientation.portrait');
} else {
windowOrientation = 'landscape';
$(window).trigger('windowsize.orientation.landscape');
}
});
windowOrientation = 'landscape';
if (mqlorientation.matches) {
windowOrientation = 'portrait';
}*/
var c = 'global';
if (mqlxlarge.matches) {
c = 'extended';
} else if (mqllarge.matches) {
c = 'desktop';
} else if (mqlmedium.matches) {
c = 'tablet';
}
// // global | tablet | desktop
// // var c = window.getComputedStyle(document.body,':after').getPropertyValue('content');
// // replace any extra quotes (FF)
return c; //.replace(/"/g,'');
}
/*
By Osvaldas Valutis, www.osvaldas.info
Available for use under the MIT License
https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly
*/
;(function( $, window, document, undefined )
{
$.fn.doubleTapToGo = function( params )
{
if( !( 'ontouchstart' in window ) &&
!navigator.msMaxTouchPoints &&
!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;
this.each( function()
{
var curItem = false;
$( this ).on( 'click', function( e )
{
var item = $( this );
if( item[ 0 ] != curItem[ 0 ] )
{
e.preventDefault();
curItem = item;
}
});
$( document ).on( 'click touchstart MSPointerDown', function( e )
{
var resetItem = true,
parents = $( e.target ).parents();
for( var i = 0; i < parents.length; i++ )
if( parents[ i ] == curItem[ 0 ] )
resetItem = false;
if( resetItem )
curItem = false;
});
});
return this;
};
})( jQuery, window, document );
