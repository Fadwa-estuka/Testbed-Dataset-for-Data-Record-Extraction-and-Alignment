/**
* summary_scores.js Let's get started!
*/
var scoreboard_itemList;
var ssb_timeoutid;
var ssb_url=json_server+'/en_AU/xml/gen/sumScores/sumScores_jsonp.json?callback=?';
var sidebar_itemList;
var sidebar_timeoutid;
var sidebar_url=json_server+'/en_AU/xml/gen/sumScores/sumScoresAll.json?callback=?';
var tourn_sb_state;
var sidebar_prevcrt;
$(document).ready(function(){
if(ssb_tournStarted){
if (!mip_page) {
// create the tabs
$("#ssb_tabs").tabs(
{
create : function (event, ui) {},
activate : function (event, ui) {},
disabled : true,
collapsible : false,
active : false
}
);
// initialize the carousels and load the data
ssb_initcarousels();
//ssb_loaddata_jsonp(); 
ssb_loadJson();
$("#ssb_tabs > ul li:not(.ui-state-disabled) a").click(function() {
measureApp("Site Functions","Summary Scoreboard",$(this).html()); 
});
$("#ssb_tabs .ssb_prev").click(function(){
measureApp("Site Functions","Summary Scoreboard",$(this).attr("id").split("_")[1],$(this).attr("id").split("_")[2]);
});
$("#ssb_tabs .ssb_next").click(function(){
measureApp("Site Functions","Summary Scoreboard",$(this).attr("id").split("_")[1],$(this).attr("id").split("_")[2]);
});
} else {
$("#ssbContainer").hide();
}
sidebar_loadJson();
$("#sidebarScores .radio").css("display","block");
}
});
/**
* function ssb_loaddata()
* 
* loads the ajax data
*/
function ssb_loadJson() {
$.ajax({
url : ssb_url,
cache : true,
jsonpCallback : 'ssb_callback',
dataType : 'jsonp',
crossDomain : true
});
}
function ssb_callback(json, textStatus) {
scoreboard_itemList = json;
/*
if (scoreboard_itemList.ssb_state.tournState == "pre") {
scoreboard_itemList.sumScoresC.match = [];
}*/
if(scoreboard_itemList.ssb_state != "pre") {
$("#summaryScoreboard #ssbContainer").show();
}
ssb_handlePromos(scoreboard_itemList.ssb_state);
ssb_createItems(scoreboard_itemList.ssb_state);
if (isAusWrapper) {
Cufon.replace('#ssb_tabs .ui-tabs-anchor, #ssb_tabs .event, #ssb_tabs .round, .match_actions');
}
if (scoreboard_itemList.ssb_state.tournState != "end" && scoreboard_itemList.ssb_state.tournState != "post") {
ssb_timeoutid = setTimeout( function(){ ssb_loadJson(); },30000);
}
}
/**
* function ssb_initcarousels()
* 
* initializes the carousels
*/
function ssb_initcarousels() {
var width = 592;
var height = 114;
$("#ssb_live_carousel").carouFredSel({
auto : false,
circular:false,
infinite:false,
scroll : {fx:"fade"},
prev : "#ssb_live_prev",
next : "#ssb_live_next",
width : width,
height : height,
items : {
visible : 1,
width:width,
height:height
}
}, {
wrapper : {classname:"ssb_live_carousel_wrapper"}
});
$("#ssb_completed_carousel").carouFredSel({
auto : false,
circular:false,
infinite:false,
scroll : {fx:"fade"},
prev : "#ssb_completed_prev",
next : "#ssb_completed_next",
width : width,
height : height,
items : {
visible : 1,
width:width,
height:height
}
}, {
wrapper : {classname:"ssb_completed_carousel_wrapper"}
});
$("#ssb_upcoming_carousel").carouFredSel({
auto : false,
circular:false,
infinite:false,
scroll : {fx:"fade"},
prev : "#ssb_upcoming_prev",
next : "#ssb_upcoming_next",
width : width,
height : height,
items : {
visible : 1,
width:width,
height:height
}
}, {
wrapper : {classname:"ssb_upcoming_carousel_wrapper"}
});
}
/**
* function ssb_removeItems
* removes carousel items that are no longer in the json data
* 
* @param idlist
* @param selector
*/
function ssb_removeItems(jsonList, selector) {
// list of carousel items on the page
var pageDivs = $(selector + " .ssb_scoreboard");
// loop the items and remove if not in the jsonList
for (var i=0; i<pageDivs.length; i++) {
if (jsonList == "all") {
var rmId = "#"+$(pageDivs[i]).attr("id");
$(selector).trigger("removeItem",rmId);
} else if (jsonList.join().indexOf($(pageDivs[i]).attr("id")) == -1) {
var rmId = "#"+$(pageDivs[i]).attr("id");
$(selector).trigger("removeItem",rmId);
}
}
}
/**
* function ssb_createItems
* creates the carousel items
*/
function ssb_createItems(stateObj) {
// json data
var live_data = scoreboard_itemList.sumScores.match;
var completed_data = scoreboard_itemList.sumScoresC.match;
var upcoming_data = scoreboard_itemList.sumScoresU.match;
var superIdList = new Array(); // array of live and completed ids
// if there's data then update the carousel
if (live_data.length > 0) {
var idlist = new Array();
for (var i=0; i < live_data.length; i++) {
var html = "";
var item = live_data[i];
idlist.push("ssb_"+item.id);
superIdList.push("ssb_"+item.id);
html = ssb_getHtml(item,"live");
ssb_updateCarousel("#ssb_live_carousel",item.id,html);
} 
ssb_removeItems(idlist, "#ssb_live_carousel");
}
// if there's data then update the carousel
if (completed_data.length > 0) {
var idlist = new Array();
for (var i=0; i < completed_data.length; i++) {
var html = "";
var item = completed_data[i];
idlist.push("ssb_"+item.id);
superIdList.push("ssb_"+item.id);
html = ssb_getHtml(item,"completed");
ssb_updateCarousel("#ssb_completed_carousel",item.id,html);
} 
ssb_removeItems(idlist, "#ssb_completed_carousel");
}
// if there's data then update the carousel
if (upcoming_data.length > 0) {
var idlist = new Array();
//idlist.push("ssb_stub");
for (var i=0; i < upcoming_data.length; i++) {
var html = "";
var item = upcoming_data[i];
// if the id is not in live or completed then add to upcoming caorusel
if ($.inArray("ssb_"+item.id, superIdList) == -1) {
idlist.push("ssb_"+item.id);
html = ssb_getHtml(item,"upcoming");
ssb_updateCarousel("#ssb_upcoming_carousel",item.id,html);
}
}
ssb_removeItems(idlist, "#ssb_upcoming_carousel");
//$("#ssb_upcoming_carousel").trigger("removeItem","#ssb_stub");
} else if (stateObj.tournState == "pre") {
ssb_removeItems("all", "#ssb_upcoming_carousel");
html = "<div id='ssb_stub' class='ssb_message'>Check back on 13 January for schedule of play</div>";
if (!document.getElementById("ssb_stub")) {
ssb_updateCarousel("#ssb_upcoming_carousel","stub",html);
}
}
// enable and select the appropriate tab
ssb_enableTabs(stateObj);
}
/**
* function ssb_getHtml
* creates the html for a carousel item. if its an update to an existing element, then exclude the outer div
* with the match id.
* 
* @param item
* @param type
* @returns {String}
*/
function ssb_getHtml(item, type) {
var html='';
var isSingles = (ssb_getEventType(item) == "singles")?true:false;
// don't add this div if the match is already on the page.
if (!document.getElementById("ssb_"+item.id)) {
html += '<div id="ssb_'+item.id+'" class="ssb_scoreboard">'; // begin ssb_scoreboard
}
html += '<div class="scoreboard">'; // begin scoreboard
html += ' <div class="match_info">'+ssb_getMatchInfo(item)+'</div>';
//html += '<div class="event_info">';
//item.event.split(" ").join("<br />");
//html += ' <span class="event">'+item.event.replace(/ /,"<br />")+'</span>';
//html += ' <span class="event">'+ssb_getEventName(item.eventType)+'</span>';
//html += ' <span class="round"><br />'+ssb_getRound(item.round)+'</span>';
//html += '</div>';
html += ' <div class="match_data">';
if(isSingles) {
html += ' <div class="photo">'+ssb_getPlayerPhotos(item,0)+'</div>';
}
html += ' <div class="teamContainer '+ ssb_getEventType(item)+'">';
for (var i=0; i<2; i++) {
html += ' <div class="team team'+(i+1)+' '+ssb_getEventType(item)+'">';
html += ' <div class="flag">'+ssb_getFlags(item, i)+'</div>';
html += ' <div class="name">'+ssb_getPlayerNames(item,i)+'</div>';
if (item.status != "upcoming") {
html += ' <div class="icon '+ssb_getIconClass(item,i )+'"></div>';
}
html += ' <div class="scores">';
if (type != "upcoming") {
html += ' <div class="set">'+item.team[i].set1+'<sup>'+ssb_getTieBreak(item.team[i].tb1)+'</sup></div>';
html += ' <div class="set">'+item.team[i].set2+'<sup>'+ssb_getTieBreak(item.team[i].tb2)+'</sup></div>';
html += ' <div class="set">'+item.team[i].set3+'<sup>'+ssb_getTieBreak(item.team[i].tb3)+'</sup></div>';
html += ' <div class="set">'+item.team[i].set4+'<sup>'+ssb_getTieBreak(item.team[i].tb4)+'</sup></div>';
html += ' <div class="set">'+item.team[i].set5+'<sup>'+ssb_getTieBreak(item.team[i].tb5)+'</sup></div>';
}
html += ' </div>';
html += ' </div>'; // end team
if(i == 0) {
html += ' <div class="team_divider"></div>';
}
}
html += ' </div>';
if(isSingles) {
html += ' <div class="photo">'+ssb_getPlayerPhotos(item,1)+'</div>';
}
html += ' </div>'; // end match_data
//html += ' <div class="match_actions">';
//html += ssb_getMatchActions(item,type);
//html += ' </div>';
html += '</div>'; // end scoreboard
// don't add this closing div if the match is already on the page.
if (!document.getElementById("ssb_"+item.id)) {
html += '</div>';
}
return html;
}
function ssb_getTieBreak(tbScore) {
if (tbScore=="" || tbScore=="0" || tbScore == undefined) {
return "";
} else {
return tbScore;
}
}
function ssb_getMatchActions(item,type) {
var html = "";
if (type=="upcoming") {
html += ' <div class="action"><a class="action_lg action_upc" href="'+json_server+'/'+lang+'/scores/schedule/index.html?promo=sumscores">Full Schedule</a></div>';
} else if (type=="completed") {
html += ' <div class="action"><a class="action_lg" href="'+json_server+'/'+lang+'/scores/completed_matches/index.html?promo=sumscores">More Scores</a></div>';
//html += ' <div class="action"><a class="action_lg" href="'+json_server+'/'+lang+'/scores/stats/day'+item.day+'/'+item.id+'ms.html?promo=sumscores">Match Stats</a></div>';
} else if (type=="live") {
html += '<div class="slamtrackerActions">';
html += ' <div class="slamtrackerLabel">Slamtracker</div>';
html += ' <div class="action"><a class="action_sm" href="'+ssb_getSlamtrackerLink(item.id, "Summary Scoreboard:live_scores")+'">Live Scores</a></div>';
html += ' <div class="action"><a class="action_sm" href="'+ssb_getSlamtrackerLink(item.id, "Summary Scoreboard:match_stats")+'">Match Stats</a></div>';
html += '</div>';
} 
return html;
}
function ssb_getSlamtrackerLink(match_id,court_id,button) {
return "javascript:launchSlamTracker('','','"+button+"','cmatchid="+match_id+"','courtid="+court_id+"')";
}
function ssb_isShowCourt(crt) {
var showCourts = new Array('A','B','C','D','E','H','J');
if ($.inArray(crt, showCourts) > 0) {
return true;
} else {
return false;
}
}
/**
* function ssb_getEventType
* determines if match is doubles or singles.
* 
* @param item
* @returns {String}
*/
function ssb_getEventType(item) {
if (item.team[0].playerNameB != undefined && item.team[0].playerNameB != "") {
return "doubles";
} else {
return "singles";
}
}
function ssb_getEventName(key) {
var val = eventTranslation[key.toLowerCase()];
if (val == undefined) {
return key;
} else {
return eventNames[val]; //.replace(/ /,"<br />");
}
}
/**
* function ssb_getPlayerPhotos
* returns player photos html
* 
* @param item
* @param teamIndex
* @returns
*/
function ssb_getPlayerPhotos(item,teamIndex) {
var item_eventType = ssb_getEventType(item);
var smallImage = "/square";
var imgWidth = "73";
var imgHeight = "73";
var imgStyle = "";
if(lang == 'fr_FR'){
notAvailablePic = 'not_available_f.jpg';
} else {
notAvailablePic = 'not_available_e.jpg';
}
var imageHtml = '<a href="'+json_server+'/en_AU/players/overview/'+item.team[teamIndex].playerIdA+'.html"><img src="'+playerImagePath+smallImage+'/'+notAvailablePic+'" width="'+imgWidth+'" height="'+imgHeight+'" border="0" alt="'+item.team[teamIndex].playerNameA+'" style="'+imgStyle+'" /></a>';
if(item.team[teamIndex].imgA != ""){
imageHtml = '<a href="'+json_server+'/en_AU/players/overview/'+item.team[teamIndex].playerIdA+'.html"><img src="'+playerImagePath+smallImage+'/'+item.team[teamIndex].imgA+'" width="'+imgWidth+'" height="'+imgHeight+'" border="0" alt="'+item.team[teamIndex].playerNameA+'" style="'+imgStyle+'" /></a>';
//imageHtml = '<a href="javascript:openPlayerBio(\'http://'+site+'/'+lang+'/players/overview/' + playerId + '.html\');">' + imageHtml + '</a>';
}
return imageHtml;
}
/**
* function ssb_getPlayerNames
* returns player names text
* 
* @param item
* @param teamIndex
* @returns
*/
function ssb_getPlayerNames(item,teamIndex) {
if (ssb_getEventType(item) == "singles") {
return '<a href="'+json_server+'/en_AU/players/overview/'+item.team[teamIndex].playerIdA+'.html">' + item.team[teamIndex].playerNameA+"</a> <span class='seed'>"+ssb_getTeamSeed(item,teamIndex)+"</span>";
} else {
return '<a href="'+json_server+'/en_AU/players/overview/'+item.team[teamIndex].playerIdA+'.html">' + item.team[teamIndex].playerNameA+"</a> <span class='seed'>"+ssb_getTeamSeed(item,teamIndex)+"</span><br />" + '<a href="'+json_server+'/en_AU/players/overview/'+item.team[teamIndex].playerIdB+'.html">'+item.team[teamIndex].playerNameB+"</a> <span class='seed'>"+ssb_getTeamSeed(item,teamIndex)+"</span>";
}
}
function ssb_getMatchStatus(item) {
if (item.status && (item.status != "B" && item.status != "F" && item.status != "G")) {
//console.info(item.status);
return statusNames[item.status];
} else {
return "";
}
/*
if (item.status == "B") {
return "Upcoming"
} else {
return item.status;
}
*/
}
function ssb_getMatchInfo(item) {
var court = courtTranslation[item.crt];
var status = ssb_getMatchStatus(item);
var event_name = ssb_getEventName(item.eventType);
var round = ssb_getRound(item.round);
if (status != "") {
return '<span class="court">'+court+'</span>&nbsp;-&nbsp;<span class="event">'+event_name+'</span>&nbsp;-&nbsp;<span class="round">'+round+'</span>&nbsp;-&nbsp;<span class="status">'+status+'</span>';
} else {
return '<span class="court">'+court+'</span>&nbsp;-&nbsp;<span class="event">'+event_name+'</span>';
}
}
/**
* function ssb_getTeamSeed
* returns team seed text
* 
* @param item
* @param teamIndex
* @returns {String}
*/
function ssb_getTeamSeed(item,teamIndex) {
if (item.team[teamIndex].teamSeed == "") {
return "";
} else {
return "["+item.team[teamIndex].teamSeed+"]";
}
}
/**
* function ssb_getIconClass
* returns icon class for winner or server
* 
* @param item
* @param teamIndex
* @returns {String}
*/
function ssb_getIconClass(item,teamIndex) {
var team = teamIndex+1;
if (item.winner==team){
return "winner icon-tick"
} else if (item.server==team) {
return "server icon-ball"
} else {
return "";
}
}
/**
* function ssb_getFlags
* returns flag html
* 
* @param item
* @param teamIndex
* @returns {String}
*/
function ssb_getFlags(item,teamIndex) {
var html = '<img src="/images/flags/'+item.team[teamIndex].playerNationA+'_sm.gif" width="20" height="14" border="0" alt="'+item.team[teamIndex].playerNationA+'" />';
if (ssb_getEventType(item) == "doubles") {
html += '<img src="/images/flags/'+item.team[teamIndex].playerNationB+'_sm.gif" width="20" height="14" border="0" alt="'+item.team[teamIndex].playerNationB+'" />';
}
return html;
}
/**
* function ssb_updateCarousel
* updates existing carousel item or inserts new carousel item
* 
* @param selector
* @param id
* @param html
*/
function ssb_updateCarousel(selector,id,html) {
if (document.getElementById("ssb_"+id)) {
// update item html
$("#ssb_"+id).html(html);
} else {
// insert new item in carousel
$(selector).trigger("insertItem",html);
}
}
/**
* function ssb_enableTabs()
* enables and selects appropriate tab
* 
*/
function ssb_enableTabs(stateObj) {
// json data
var live_data = scoreboard_itemList.sumScores.match;
var completed_data = scoreboard_itemList.sumScoresC.match;
var upcoming_data = scoreboard_itemList.sumScoresU.match;
var tab = -1;
// enable the tab if there's data
if (live_data.length > 0) {
$( "#ssb_tabs" ).tabs( "enable", 0 );
}
if (completed_data.length > 0) {
$( "#ssb_tabs" ).tabs( "enable", 1 );
}
if (upcoming_data.length > 0 || stateObj.tournState == "pre") {
$( "#ssb_tabs" ).tabs( "enable", 2 );
}
// disable the tab if there's no data
if (live_data.length == 0) {
$( "#ssb_tabs" ).tabs( "disable", 0 );
} 
if (completed_data.length == 0) {
$( "#ssb_tabs" ).tabs( "disable", 1 );
} 
if (upcoming_data.length == 0 && stateObj.tournState != "pre") {
$( "#ssb_tabs" ).tabs( "disable", 2 );
}
// if no tabs are active, which is the case on page load then determine
// which tab to activate. order is live, completed, upcoming
var active = $( "#ssb_tabs" ).tabs( "option", "active" );
if (!active) {
if (live_data.length > 0) {
$( "#ssb_tabs" ).tabs( "option", "active", 0);
} else if (completed_data.length > 0) {
$( "#ssb_tabs" ).tabs( "option", "active", 1);
} else if (upcoming_data.length > 0 || stateObj.tournState == "pre") {
$( "#ssb_tabs" ).tabs( "option", "active", 2);
}
} else {}
}
/**
* function ssb_getRound
* Returns html text for round
* @param key
* @returns
*/
function ssb_getRound(key) {
if (key) {
return roundNames[key];
} else {
return "";
}
}
function ssb_handlePromos(stateObj) {
$(".ssb_promoLayout").hide();
switch (stateObj.tournState) {
case "pre":
break;
case "post" :
//slamtracker button
//$("#ssb_promoContainer .slamtracker.on").hide();
//$("#ssb_promoContainer .slamtracker.off").show();
//$("#ssb_promoContainer .slamtracker.disabled").hide();
//sidebar slamtracker button
$("#sidebarScores .slamtracker.on").hide();
$("#sidebarScores .slamtracker.off").show();
$("#sidebarScores .slamtracker.disabled").hide();
//tv button
//$("#ssb_promoContainer .tv.on").hide();
//$("#ssb_promoContainer .tv.off").show();
break;
case "live" :
//slamtracker button
//$("#ssb_promoContainer .slamtracker.on").show();
//$("#ssb_promoContainer .slamtracker.off").hide();
//$("#ssb_promoContainer .slamtracker.disabled").hide();
$("#ssb_promoContainer .tickets").show();
$("#ssb_promoContainer .schedule").show();
//sidebar slamtracker button
$("#sidebarScores .slamtracker.on").show();
$("#sidebarScores .slamtracker.off").hide();
$("#sidebarScores .slamtracker.disabled").hide();
//tv button
//$("#ssb_promoContainer .tv.on").show();
//$("#ssb_promoContainer .tv.off").hide();
break;
case "end" :
//slamtracker button
//$("#ssb_promoContainer .slamtracker.on").hide();
//$("#ssb_promoContainer .slamtracker.off").show();
//$("#ssb_promoContainer .slamtracker.disabled").hide();
$("#sidebarScores .slamtracker.on").hide();
$("#sidebarScores .slamtracker.off").show();
$("#sidebarScores .slamtracker.disabled").hide();
//tv button
//$("#ssb_promoContainer .tv.on").hide();
//$("#ssb_promoContainer .tv.off").show();
break;
default:
break;
}
}
/******
SIDEBAR SCORES Functions
*******/
function sidebar_loadJson(json, textStatus) {
scoreboard_itemList = json;
// get sidebar scores json
$.ajax({
url : sidebar_url,
cache : true,
jsonpCallback : 'sidebar_callback',
dataType : 'jsonp',
crossDomain : true,
});
}
function sidebar_callback(json, textStatus) {
sidebar_itemList = json;
tourn_sb_state = sidebar_itemList.ssb_state;
sidebar_createItems();
if (tourn_sb_state.tournState != "end" && tourn_sb_state.tournState != "post") {
sidebar_timeoutid = setTimeout( function(){ sidebar_loadJson(); },30000);
// add video button
if (espnGeoBlock || parseInt(tourn_sb_state.tournDay,10) < 6) {
// show aotv live if geoblocked or qualifying
$("#sidebarScores").find(".video").attr("href","/en_AU/video/live.aotv.html").removeClass("off").addClass("on");
} else {
// show espn live
$("#sidebarScores").find(".video").attr("href","/en_AU/video/live.espn.html").removeClass("off").addClass("on"); 
}
} else {
$("#sidebarScores").find(".video").removeAttr("href").removeClass("on").addClass("off");
}
}
/**
* function sidebar_createItems
* creates the carousel items
*/
function sidebar_createItems(stateObj) {
//sidebar scores
var sb_completed_data = sidebar_itemList.sumScoresCall.match;
var sb_upcoming_data = sidebar_itemList.sumScoresUall.match;
//update content of completed tab in sidebar scores
if (sb_completed_data.length > 0) {
var completedList = new Array();
$.each(sb_completed_data, function(){
var html = "";
completedList.push("crt"+this.crt);
html = sidebar_getHtml("#sbs_completed",this,'c');
sidebar_updateContent("#sbs_completed",this.crt,html);
});
sidebar_removeItems(completedList,"#sbs_completed");
}
//update content of upcoming tab in sidebar scores
if (sb_upcoming_data.length > 0) {
var upcomingList = new Array();
$.each(sb_upcoming_data, function(i,v){
var html = "";
upcomingList.push("crt"+this.crt);
html = sidebar_getHtml("#sbs_upcoming",this,'u');
sidebar_updateContent("#sbs_upcoming",this.crt,html);
});
sidebar_removeItems(upcomingList,"#sbs_upcoming");
}
// enable and select the appropriate tab
sidebar_enableTabs();
}
/**
* function ssb_getHtml
* creates the html for a carousel item. if its an update to an existing element, then exclude the outer div
* with the match id.
* 
* @param item
* @param type
* @returns {String}
*/
function sidebar_getHtml(selector, item, status) {
var html='';
var isSingles = (ssb_getEventType(item) == "singles")?true:false;
// don't add this div if the match is already on the page.
if ($(selector+" #crt"+item.crt).length == 0) {
if(status == 'c') {
html += '<div id="crt'+item.crt+'" class="courts completed">'; // begin ssb_scoreboard
} else {
html += '<div id="crt'+item.crt+'" class="courts">'; // begin ssb_scoreboard
}
}
html += ' <div class="scoringtable">';
html += ' <div class="courtname">'+courtTranslation[item.crt]+'</div>';
html += ' <div class="courtinfo">';
html += ' <div class="eventinfo">'+sidebar_getMatchInfo(item)+'</div>';
html += ' <div class="statusmsg">'+ssb_getMatchStatus(item)+'</div>';
html += ' </div>';
html += ' <div class="courtContentContainer">';
if(usesHeaders){
html += ' <div class="headers">';
if(usesGms){html += '<div class="crtgms">GMS</div>';}
html += ' <div class="crtpts">Pts</div>';
html += ' <div class="crtset">1</div>';
html += ' <div class="crtset">2</div>';
html += ' <div class="crtset">3</div>';
html += ' <div class="crtset">4</div>';
if(usesSet5){html += '<div class="crtset">5</div>';}
html += ' </div>';
}
html += ' <div id="crtcontent">';
for (var i=0; i<2; i++) {
if(i == 0) {
html += ' <div class="crtrow teamOne">';
} else if(i == 1) {
html += ' <div class="crtrow teamTwo">';
}
//if(usePlayerFlags){
html += ' <div class="flag '+ ssb_getEventType(item)+'">'+ssb_getFlags(item, i)+'</div>';
//}
html += ' <div class="name '+ ssb_getEventType(item)+'">'+ssb_getPlayerNames(item,i)+'</div>';
html += ' <div class="crticon '+ssb_getIconClass(item,i)+'"></div>';
html += ' <div class="crtpts"><span class="pts"></span></div>';
html += ' <div class="crtset"><span class="set1">'+item.team[i].set1+'<sup>'+ssb_getTieBreak(item.team[i].tb1)+'</span></div>';
html += ' <div class="crtset"><span class="set2">'+item.team[i].set2+'<sup>'+ssb_getTieBreak(item.team[i].tb2)+'</span></div>';
html += ' <div class="crtset"><span class="set3">'+item.team[i].set3+'<sup>'+ssb_getTieBreak(item.team[i].tb3)+'</span></div>';
html += ' <div class="crtset"><span class="set4">'+item.team[i].set4+'<sup>'+ssb_getTieBreak(item.team[i].tb4)+'</span></div>';
if(usesSet5){html += ' <div class="crtset five"><span class="set5">'+item.team[i].set5+'<sup>'+ssb_getTieBreak(item.team[i].tb5)+'</span></div>';}
html += ' </div>';
//var stm = ssb_getMatchStatus(item);
//if (i==0) {
// html += ' <div class="courtstatusmsg">'+stm+'</div>';
//}
}
html += ' </div>'; 
html += ' </div>';
if(selector == "#sbs_completed") {
html += '<div class="slamtracker-promo"><a href="/'+lang+'/scores/stats/'+item.id+'ms.html">Match Detail by <span class="strong">IBM SlamTracker</span></a></div>';
html += ' <div class="crtlinks">';
html += ' <div class="linkItem matchstats" valign="middle"><a href="'+sidebar_getStatsLink(item, "Sidebar_Completed_Scores:match_stats")+'"><span class="icon-stats"></span><br/>STATISTICS</a></div>';
//html += ' <div class="linkItem matchstats" valign="middle"><a href="/en_AU/scores/completed_matches/index.html"><span class="icon-stats"></span><br/>STATISTICS</a></div>';
html += ' <div class="linkItem watchvideo" valign="middle"></div>';
html += ' </div>';
} else if (selector == "#sbs_upcoming") {
html += '<div class="slamtracker-promo disabled"><a>Match Detail by <span class="strong">IBM SlamTracker</span></a></div>';
}
html += ' </div>';
if ($("#sbs_completed #crt"+item.crt).length == 0) {
html += '</div>'; // begin ssb_scoreboard
}
return html;
}
/**
* function sidebar_updateContent
* updates existing court item or inserts new court item
* 
* @param selector
* @param id
* @param html
*/
function sidebar_updateContent(selector,id,html) {
if ($(selector+" #crt"+id).length > 0) {
// update item html
$(selector+" #crt"+id).html(html);
} else {
// insert new item in panel
if($(selector).html() == "") {
$(selector).append(html);
} else {
if(sidebar_prevcrt != undefined) {
$(html).insertAfter(sidebar_prevcrt);
}
}
}
sidebar_prevcrt = selector+" #crt"+id;
}
/**
* function sidebar_removeItems
* removes court items that are no longer in the json data
* 
* @param idlist
* @param selector
*/
function sidebar_removeItems(jsonList, selector) {
// list of court items on the page
var pageDivs = $(selector+" .courts");
// loop the items and remove if not in the jsonList
//if (jsonList == "all") {
// $(selector).html("");
//} else {
$.each(pageDivs, function(){
if($.inArray($(this).attr('id'), jsonList) == -1){
$(this).remove();
}
});
//}
}
function sidebar_getMatchInfo(item) {
var court = courtTranslation[item.crt];
var event_name = ssb_getEventName(item.eventType);
var round = ssb_getRound(item.round);
if (round != "") {
if (item.status != "") {
return court+'&nbsp;-&nbsp;'+event_name+'<br />'+round;
} else {
return event_name+'&nbsp;-&nbsp;'+round;
}
} else {
return court+'&nbsp;-&nbsp;'+event_name;
}
}
/**
* function sidebar_enableTabs()
* enables and selects appropriate tab
* 
*/
function sidebar_enableTabs() {
// json data
var sb_completed_data = sidebar_itemList.sumScoresCall.match;
var sb_upcoming_data = sidebar_itemList.sumScoresUall.match;
var tab = -1;
// enable the live tab if the tournament state is live
if (tourn_sb_state.tournState == "live" && !mip_page) {
$( ".sidebarTabs" ).tabs( "enable", 0 );
}
// enable the completed tab if there's data
if (sb_completed_data.length > 0) {
$( ".sidebarTabs" ).tabs( "enable", 1 );
}
// enable the upcoming tab if there's data or the tournament stat is pre or end
if (sb_upcoming_data.length > 0 || tourn_sb_state.tournState == "pre" || tourn_sb_state.tournState == "end") {
$( ".sidebarTabs" ).tabs( "enable", 2 );
}
// disable the live tab if there's no data
if (tourn_sb_state.tournState == "pre" || tourn_sb_state.tournState == "post" || mip_page) {
$( ".sidebarTabs" ).tabs( "disable", 0 );
} 
// disable the completed tab if theres no data
if (sb_completed_data.length == 0) {
$( ".sidebarTabs" ).tabs( "disable", 1 );
} 
// disable the upcoming tab if there's no data and the tournament state is not pre
if (sb_upcoming_data.length == 0 && tourn_sb_state.tournState != "pre") {
$( ".sidebarTabs" ).tabs( "disable", 2 );
}
// if no tabs are active, which is the case on page load then determine
// which tab to activate. order is live, completed, upcoming
var active = $( ".sidebarTabs" ).tabs( "option", "active" );
if (!active) {
if (tourn_sb_state.tournState == "live" && !mip_page) {
$( ".sidebarTabs" ).tabs( "option", "active", 0);
} else if (sb_completed_data.length > 0 && tourn_sb_state.tournState != "end") {
$( ".sidebarTabs" ).tabs( "option", "active", 1);
} else if (sb_upcoming_data.length > 0 || tourn_sb_state.tournState == "pre" || tourn_sb_state.tournState == "end") { //|| tourn_sb_state.tournState == "end"
$( ".sidebarTabs" ).tabs( "option", "active", 2);
} /*else if (sb_completed_data.length > 0 && sb_upcoming_data.length == 0 && tourn_sb_state.tournState == "end") { //hack for end of tournament for 2015
$( ".sidebarTabs" ).tabs( "option", "active", 1);
}*/
} else {}
}
function sidebar_getStatsLink(item) {
//return "javascript:launchSlamTracker('','','"+button+"','"+match_id+"','"+court_id+"','stats')";
//return "javascript:launchSlamTracker('','','debug','"+match_id+"','"+court_id+"','stats')";
return "/en_AU/scores/stats/day"+item.day+"/"+item.id+"ms.html";
}