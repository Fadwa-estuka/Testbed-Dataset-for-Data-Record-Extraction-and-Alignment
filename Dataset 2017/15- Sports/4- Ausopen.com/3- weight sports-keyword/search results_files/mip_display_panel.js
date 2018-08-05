var currentCourt = '';
var altCourt = "";
var prevCourt = "";
var flash_object;
var event_list = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'); //array of selectable event codes
var quals_list = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'); //array of court letters, court name, array of courts w/boolean (true if in use)
var video_list = "ABDLOS";
var courts = new Object(); // parent object holding all court objects;
var crt_status = new Object();
var crtPosition;
// call this after defining court_list in mip_names_[locale].js
function initStatusCheck() {
//holds match complete status
for (var i=0, l=court_list.length; i<l; i++){
crt_status[court_list[i]] = false;
}
//position of court divs
crtPosition = court_list.slice(0);
}
//visible events/courts list
var courtSel = 2;
//1 - show courts
//2 - all courts
//3 - ms
//4 - ws
//5 - md
//6 - wd
//7 - xd
var eventSel;
var courtObj; //current court object
//update court view with new data
function updateCourtData(courtId){
//traceDebug('updateCourtData: updating court data for court '+courtId);
var courtObj = courts[courtId];
var doubles = false;
var newCourtObj = false;
doubles = isDoublesMatch(courtObj);
//initialize vars for later use
var scores;
var curset;
var teamPoints = new Array(courtObj.getPoints(1), courtObj.getPoints(2));
var tb = new Array();
match_status = courtObj.getMatchStatus();
if(match_status == 'F' || match_status == 'G'){
teamPoints[0] = '';
teamPoints[1] = '';
}
var curCourt = courtObj.getCourtID();
var curEvent = courtObj.getEventName();
//traceDebug('updateCourtData: event name: ' + curEvent);
var curRound = courtObj.getRoundName();
if(curRound == undefined){ curRound = courtObj.getRoundName(); }
var $crt = $('#sbs_live #crt'+courtId);
var $crtMsg = $('#sbs_live #crt'+courtId+'msg');
// if court div has no html, and match status is not complete, then load court stuff
if($crt.html() == '' || courtObj.match_id != $crt.attr('data-match')) { //&& courtObj.getMatchOver() != 'complete'
var chk_crt = $.inArray(courtId,crtPosition);	//check to see if court is in crtPosition array
loadScoreCardHtml('#crt' + courtId);	//load court with html
$crt.attr('data-match',courtObj.match_id);	//set match attribute with match id
if(chk_crt > -1) {
$crtMsg.hide();	//hide court message div
}
}
crtTitle = curCourt + " - " + curEvent; //use for usopen
//crtTitle = curEvent + " - " + curRound;
//crtTitle = curEvent; //use for wimbledon
if(curRound != ""){
crtTitle+='<br/>'+curRound;
} else {
crtTitle+='';
}
$crt.find('.eventinfo').html(crtTitle);
$crt.find('.slamtracker-promo').html(getSlamtrackerLink(courtObj.match_id));
//$crt.find('.eventinfo').html(crtTitle);
var play1A = courtObj.teams[0].players[0];
var play1B = courtObj.teams[0].players[1];
var play2A = courtObj.teams[1].players[0];
var play2B = courtObj.teams[1].players[1];
var team1seed = "";
var team2seed = "";
if(courtObj.teams[0].seed != ''){
team1seed = ' <span class="seed">'+courtObj.teams[0].seed+'</span>';
}
if(courtObj.teams[1].seed != ''){
team2seed = ' <span class="seed">'+courtObj.teams[1].seed+'</span>';
}
// add first player name for each team
pname = getFormattedPlayerName(play1A.tour_id, play1A.TVname);
$('.teamOne .name', $crt).html(pname+' '+team1seed); //' ('+courtObj.teams[0].players[0].cntry+')'
pname = getFormattedPlayerName(play2A.tour_id, play2A.TVname);
$('.teamTwo .name', $crt).html(pname+' '+team2seed); //('+courtObj.teams[1].players[0].cntry+')
// check if doubles match or not
if(!doubles){
// Singles, make sure class names are correctly assigned
if(!$crt.find('.name').hasClass('singles')){
$crt.find('.name').removeClass('doubles').addClass('singles');
$crt.find('.flag').removeClass('doubles').addClass('singles');
}
// add first player flag for each team
if(usePlayerFlags){
$crt.find('.teamOne .flag').show().html(getFlagPath(courtObj.teams[0].players[0].cntry));
$crt.find('.teamTwo .flag').show().html(getFlagPath(courtObj.teams[1].players[0].cntry));
}
}else{
// Doubles, add second player name for each team, make sure class names are correctly assigned
if(usePlayerFlags){
$crt.find('.teamOne .flag').show().html(getFlagPath(courtObj.teams[0].players[0].cntry) + getFlagPath(courtObj.teams[0].players[1].cntry));
$crt.find('.teamTwo .flag').show().html(getFlagPath(courtObj.teams[1].players[0].cntry) + getFlagPath(courtObj.teams[1].players[1].cntry));
}
$crt.find('.teamOne .name').append("<br />" + getFormattedPlayerName(play1B.tour_id, play1B.TVname) + ' '+ team1seed); //(' +courtObj.teams[0].players[1].cntry +')
$crt.find('.teamTwo .name').append("<br />" + getFormattedPlayerName(play2B.tour_id, play2B.TVname) + ' '+ team2seed); //(' +courtObj.teams[1].players[1].cntry +')
if(!$crt.find('.name').hasClass('doubles')){
$crt.find('.name').removeClass('singles').addClass('doubles');
$crt.find('.flag').removeClass('singles').addClass('doubles');
}
}
// Loop over One/Two to handle data for both players
$.each(['One', 'Two'], function(a,b) {
j = a+1; // 0 => 1, 1 => 2
$cteam = $crt.find('.team' + b);
//bio photos
var imgHtml = "";
if(!doubles){
imgHtml = getBioPhotoHtml(courtObj.teams[a].players[0].tour_id, 'p'+j+'a', courtObj.teams[a].players[0].bio_photo, courtObj.teams[a].players[0].TVname, false); //'<img src="' + getBioPhotoUrl(courtObj.play1A_tour_id, 'p1', courtObj.play1A_bio_photo, true) + '" width="46" height="63" border="0" alt="' + courtObj.play1A_TVname + '" style="margin:0px 24px 3px 25px;"/>';
} else {
imgHtml = getBioPhotoHtml(courtObj.teams[a].players[0].tour_id, 'p'+j+'a', courtObj.teams[a].players[0].bio_photo, courtObj.teams[a].players[0].TVname, true); //'<img src="' + getBioPhotoUrl(courtObj.play1A_tour_id, 'p1', courtObj.play1A_bio_photo, true) + '" width="46" height="63" border="0" alt="' + courtObj.play1A_TVname + '" style="margin:0px 24px 3px 25px;"/>';
imgHtml += getBioPhotoHtml(courtObj.teams[a].players[1].tour_id, 'p'+j+'b', courtObj.teams[a].players[1].bio_photo, courtObj.teams[a].players[1].TVname, true); //'<img src="' + getBioPhotoUrl(courtObj.play1B_tour_id, 'p1', courtObj.play1B_bio_photo, true) + '" width="46" height="63" border="0" alt="' + courtObj.play1B_TVname + '" style="margin:0px 24px 0px 25px;" />';
}
//current server icon
if(courtObj.getServer() != '' && courtObj.getServer() >= j*2-1 && courtObj.getServer() <= j*2){
$cteam.find('.crticon').addClass('currentServer').addClass("icon-ball");
}else{
$cteam.find('.crticon').removeClass('currentServer').removeClass("icon-ball");
}
//determine number of sets
scores=courtObj.teams[j-1].set_scores;
curset=scores.length/2;
if(usesSet5){var max_sets = 5;}
else{var max_sets= 4;}
//assign set scores through current set
for (var s=1; s<max_sets; s++){
var setScore = courtObj.getSetScore(j, s);
if (isNaN(setScore)) { setScore = "&nbsp;"; }
tb_score = courtObj.getTiebreakScore(j, s);
tb1 = courtObj.getTiebreakScore(1,s);
tb2 = courtObj.getTiebreakScore(2,s);
if(tb_score >= 0 && courtObj.getTiebreakComplete(j, s, tb_score)) { // only show completed tiebreaks
setScore += '<sup class="tiebreak">' + tb_score + '</sup>';
}
/*
traceDebug(courtObj.winners[s] +' | '+j);
if(courtObj.winners[s] == b) {
$cteam.find('.set' +s).parent('.crtset').addClass('setwinner');
} else {
$cteam.find('.set' +s).parent('.crtset').removeClass('setwinner');
}*/
$cteam.find('.set' + s).html(setScore);
}
//assign game scores or current set score depending on which should get used
var curset_score = courtObj.getSetScore(j,curset);
if (isNaN(curset_score)) { curset_score = "&nbsp;"; }
/*
* if event uses games and the match status is not complete and the current
* set is not set 5, then put the pts for the current game in the game column
* otherwise, use the correct set column
*/
if(usesGms){
//if match status is not complete or curset is 5 then use game column
if(courtObj.getMatchOver() != 'complete' || curset == 5){
$cteam.find('.gms').html(curset_score);
}
//if match status is complete and curset is not 5 then clear the game column and put scores in set column
else if(courtObj.getMatchOver() == 'complete' && curset != 5) {
// ten point tie break display
if(curset == 3 && courtObj.brackets == '1'){
curset_score = '['+curset_score+']';
} else if(curset == 3 && courtObj.brackets != '1'){
curset_score = curset_score;
}
$cteam.find('.set' + curset).html(curset_score);
$cteam.find('.gms').html('');
}
} else {
tb_score = courtObj.getTiebreakScore(j, curset);
tb1 = courtObj.getTiebreakScore(1,curset);
tb2 = courtObj.getTiebreakScore(2,curset);
if(tb_score >= 0 && courtObj.getTiebreakComplete(j, curset, tb_score)) { // only show completed tiebreaks
curset_score += '<sup class="tiebreak">' + tb_score + '</sup>';
}
// ten point tie break display
if(curset == 3 && courtObj.brackets == '1'){
curset_score = '['+curset_score+']';
} else if(curset == 3 && courtObj.brackets != '1'){
curset_score = curset_score;
}
$cteam.find('.set' + curset).html(curset_score);
}
//if ten pt tiebreak event and match is not complete and this is the 3rd set, then no value for set score
if (TenPtTieBreakEvents.indexOf(courtObj.event_id)>-1 && courtObj.getMatchOver()!="complete" && curset == 3){
traceDebug('updateCourtData: TenPtTieBreakEvents for crt '+courtObj.court_id);
$cteam.find('.set' + curset).html("");
}
tb[0] = courtObj.getTiebreakScore(1,curset)
tb[1] = courtObj.getTiebreakScore(2,curset);
if (tb[0]>0 || tb[1]>0){
if(match_status < "F"){
teamPoints[0] = tb[0];
teamPoints[1] = tb[1];
} else {
teamPoints[0] = "";
teamPoints[1] = "";
}
}
//team points
var teamjPoints = teamPoints[a];
$cteam.find('.pts').html(teamjPoints);
//set latest score class if needed
if(courtObj.teams[a].prevPt != '' && courtObj.teams[a].prevPt != teamjPoints){
$cteam.find('.crtpts').addClass('latestScore');
}else{
$cteam.find('.crtpts').removeClass('latestScore');
}
});
// Set points for next time around
courtObj.teams[0].prevPt = teamPoints[0];
courtObj.teams[1].prevPt = teamPoints[1];
// Update status
updateCourtStatus(courtObj);
// Update win status
$crt.find('.crticon').removeClass('winner').removeClass('icon-tick');
if(courtObj.getMatchOver() == 'complete') {
$crt.find('.crtpts').removeClass('latestScore');
$crt.find('.crticon').removeClass('currentServer').removeClass("icon-ball");
if ("FHJL".indexOf(match_status) > -1){
// team 1 won
$crt.find('.teamOne .crticon').addClass('winner').addClass('icon-tick');
} else if ("GIKM".indexOf(match_status) > -1){
// team 2 won
$crt.find('.teamTwo .crticon').addClass('winner').addClass('icon-tick');
}
}
//vars to determine whether or not to display links bar
var useMatchStats = false;
var useServeStats = false;
var useSlamTracker = false;
var useVideo = false;
// Update stats link
if(courtObj.statsLink != "" && statsIcon){
var link = '<a href="javascript:openStats(\'' + courtId + '\',\'' + courtObj.match_id + '\');"><span class="icon-stats"></span><br/>'+statsText+'</a>';
$crt.find('.linkItem.matchstats').html(link).show();
useMatchStats = true;
}else{
$crt.find('.linkItem.matchstats').html('&nbsp;');
useMatchStats = false;
}
// Update radio link
if($.inArray(courtId,show_courts) !== -1) {
if(panel_radioLive) {
var link = '<a onclick="launchRadio(\'0\',\'\');"><span class="icon-radio"></span><br/>Radio</a>';
} else {
var link = '<a href="/en_AU/interactive/radio/index.html"><span class="icon-radio"></span><br/>Radio</a>';
}
$crt.find('.linkItem.radio').html(link).show();
} else {
$crt.find('.linkItem.radio').hide();
}
// Update slamtracker link
//if((courtObj.getEvent() == "ms" || courtObj.getEvent() == "ws") && stat_courts.indexOf(courtId) != -1 && sbIcon){
if(stIcon){
var link = '<a onclick="openSlamTracker(\''+courtObj.match_id+'\', \'\');">'+stText+'</a>';
//var link = '';
// This match is available in IBM Slamtracker
$crt.find('.linkItem.slamtracker').html(link).show();
useSlamTracker = true;
}else{
$crt.find('.linkItem.slamtracker').html('&nbsp;');
useSlamTracker = false;
}
// Update video link
if((!espnGeoBlock || espnGeoBlock == "false") && geoblock == "false" && videoIcon) {
var videoUrl = '/en_AU/video/live.html';
var link = '<a href="' + videoUrl + '"><span class="icon-tv"></span><br/>TV</a>';
$crt.find('.linkItem.watchvideo').html(link).show();
} else {
if(ustaVideoController.checkCourtVideo(courtId) != '' && videoIcon && geoblock == "false"){
var videoUrl = ustaVideoController.checkCourtVideo(courtId,"sidebar_live_scores");
//Video is currently live for this court
var link = '<a onclick="' + videoUrl + '"><span class="icon-tv"></span><br/>Watch Live</a>';
$crt.find('.linkItem.watchvideo').html(link).show();
useVideo = true;
}else{
$crt.find('.linkItem.watchvideo').hide();
useVideo = false;
}
}
//traceDebug('updateCourtData: finished updating court data for court '+courtId);
}
function updateCourtStatus(courtObj) {
//traceDebug('updateCourtStatus: entering function');
var $crt = $('#crt'+courtObj.court_id);
var crt_match_status = courtObj.getMatchStatus();
//traceDebug('updateCourtStatus: court - '+courtObj.court_id +' | match status = '+crt_match_status);
//$fmatch.find('.status').html('&nbsp;');
if(courtObj.serve_speed && crt_match_status == 'B'){
// match is in play, display serve speed
var status;
var speedSuffix = "";
var speed = '';
if (unit == "imp"){
speedSuffix = ' mph';
speed = courtObj.serve_speed_mph;
}
if (unit == "metric"){
speedSuffix = ' km/h';
speed = courtObj.serve_speed_kmh;
}
/*
AUS DOESN'T WANT SERVE SPEED IN PANEL
switch(langInd){
case("0"):status="Serve Speed: " + speed + speedSuffix; break;
case("1"):status="Vitesse du service: " + speed + speedSuffix; break;
case("2"):status="Servicio: " + speed + speedSuffix; break;
}
*/
//$crt.find('.status').html(status);
$crt.find('.statusmsg').html(status);
}else if (crt_match_status > "B" && crt_match_status != 'F' && crt_match_status != 'G'){
// show all statuses except in progress and completed
// Match has a status we need to display
//$crt.find('.status').html(courtObj.getMatchStatus('id'));
$crt.find('.statusmsg').html(courtObj.getMatchStatus('id'));
}else{
//$crt.find('.status').html('');
$crt.find('.statusmsg').html('');
}
//traceDebug('updateCourtStatus: leaving function');
}
function updateScoreCardData(crt){
updateCourtData(crt,'sc');
}
function removeDisplay(crt,fn){
//traceDebug('removeDisplay: currentCourt='+currentCourt+', crt '+crt);
// don't do anything if court has already been replaced by next match
// allow scoreUpdate2 to handle accordingly
//traceDebug('removeDisplay: crtPosition.length is '+crtPosition.length);
try {
if(courts[crt].getMatchOver() == 'in progress' || crtPosition.length == 0 || crtPosition.length == 1) {
crt_status[crt] = false;
return false;
} else {
if(fn){
traceDebug("removeDisplay: called from "+fn+", currentCourt-"+currentCourt+' ('+getCourtID(currentCourt)+"), crt-"+crt+' ('+getCourtID(crt)+')');
}
courts[crt] = new Court();
//Check to see if court is in crtPosition array
var chk_crt = $.inArray(crt,crtPosition);
if (eventSel > 2 || eventSel == 0){
if(chk_crt > -1) {
crtPosition.splice(chk_crt,1);
}
crtPosCnt();
}
reposition(3);
crt_status[crt] = false;
// hide the scorecard
$('#sbs_live #crt' + crt).attr('data-match','').html('').hide();
if(chk_crt > -1 && (eventSel == 1 || eventSel == 2)){ //main and all courts view
// show the message
$('#crt' + crt + 'msg').show();
//traceDebug('removeDisplay: show court msg div for crt'+crt+' ('+getCourtID(crt)+')');
} else {
// hide the message
$('#crt' + crt + 'msg').hide();
}
}
} catch (err) {
traceDebug('removeDisplay: Error - '+err);
}
}
function reposition(caller){
/*
* caller 1: called from scoreUpdate2
* caller 2: called from scoreUpdate2
* caller 3: called from removeDisplay
* caller 4: called from crtDisp
*/
crtPosition.sort();
for (var x=0, l=court_list.length; x<l; x++){ //remove all courts from view and remove right margin from courts
$('#sbs_live #crt' + court_list[x]).hide().removeClass('courtRtmargin');
$('#crt' + court_list[x] + 'msg').hide().removeClass('courtRtmargin');
}
//traceDebug("reposition: " + noSelect + " " + msgReceived + " crtPosition.length=" +crtPosition.length);
if (!noSelect){
$('#working').hide(); //hide working div (message div)
for (var x=0; x<crtPosition.length; x++){ //for each court in the crtPosition array (selected court view)
if(x%2 != 0){ var usemargin=false;} else{var usemargin=true;} //used to determine whether or not to add right margin
var $crt = $('#sbs_live #crt'+crtPosition[x]);
var $crtMsg = $('#crt'+crtPosition[x]+'msg');
$crt.show(); //show the court
if(usemargin){ $crt.addClass('courtRtmargin'); } //add right margin class
var obj = courts[crtPosition[x]];
//traceDebug('reposition: crt'+crtPosition[x]+' - event_id is: '+obj.event_id+', getMatchOver is: '+obj.getMatchOver());
//if the court object has no event id and status of match is = ""
if (obj.event_id=="" && obj.getMatchOver() == ""){
//traceDebug('reposition: show court msg div for crt'+crtPosition[x]);
$crt.hide();
$crtMsg.show();
if(usemargin){ $crtMsg.addClass('courtRtmargin'); } //add right margin class
}
}
$('#mipTables').show();
}
else if (msgReceived){
showNoSelect();
$('#mipTables').hide();
$('#working').show();
}
}
function crtDisp(which){
traceDebug('crtDisp: eventSel='+which);
eventSel = which;
var obj;
var val;
if (eventSel == 2){
crtPosition = court_list;
}
else if (eventSel == 1){
crtPosition = show_courts;
}
else if (eventSel == 0){
addMIP();
}
else if (eventSel > 2){
addCrt(eventSel);
}
crtPosCnt();
reposition(4);
}
function addCrt(which,clr){
var event = event_list[which-3];
var start = 0;
if (!clr){
crtPosition = new Array();
} else {
start = crtPosition.length;
}
for (var i=start; i<court_list.length; i++){
var val = court_list[i];
var obj = courts[val];
if (obj.event_id){
val = obj.event_id;
if (val == event && obj.active){
crtPosition[crtPosition.length] = court_list[i];
}
}
}
if (event == "A") addCrt(12,true); //add Qual Singles if Men's singles selected
if (event == "B") addCrt(13,true); //add Qual Singles if Women's singles selected
}
function addMIP(){
crtPosition = new Array();
for (var i=0, l=court_list.length; i<l; i++){
var obj = courts[court_list[i]];
//traceDebug('addMIP: court is '+court_list[i]);
if (obj.getMatchOver() == "in progress"){
crtPosition[crtPosition.length] = court_list[i];
}
}
}
function crtPosCnt(){
if (crtPosition.length == 0){
noSelect = true;
} else {
noSelect = false;
}
}
function genScorecardStatus() {
var scorecardHtml = '';
if(lang == 'en_GB'){
scorecardHtml += ' <div class="status">';
scorecardHtml += ' <span class="statusmsg"></span>';
scorecardHtml += ' <div class="setheaders">';
scorecardHtml += ' <div class="crtpts">Pts</div>';
scorecardHtml += ' <div class="crtset">1</div>';
scorecardHtml += ' <div class="crtset">2</div>';
scorecardHtml += ' <div class="crtset">3</div>';
scorecardHtml += ' <div class="crtset">4</div>';
if(usesSet5){scorecardHtml += ' <div class="crtset">5</div>';}
scorecardHtml += ' </div>';
scorecardHtml += ' </div>';
} else {
scorecardHtml += ' <div class="status"></div>';
}
return scorecardHtml;
}
function genScorecardLinks() {
var scorecardHtml = ' 	<div class="crtlinks">';
scorecardHtml += ' 		<div class="linkItem watchvideo" valign="middle"></div>';
scorecardHtml += ' 		<div class="linkItem radio" valign="middle"></div>';
//scorecardHtml += ' 		<div class="linkItem matchstats" valign="middle"></div>';
scorecardHtml += '		</div>';
return scorecardHtml;
}
function loadScoreCardHtml(elementIdOfCourt){
var scorecardHtml = '<div class="scoringtable">';
scorecardHtml += ' 	<div class="courtinfo">';
scorecardHtml += ' 		<div class="eventinfo"></div>';
scorecardHtml += ' 		<div class="statusmsg"></div>';
scorecardHtml += '		</div>';
scorecardHtml += '		<div class="courtContentContainer">';
if(usesHeaders){
scorecardHtml += ' 	<div class="headers">';
if(usesGms){scorecardHtml += '<div class="crtgms">GMS</div>';}
scorecardHtml += ' 		<div class="crtpts">Pts</div>';
scorecardHtml += ' 	<div class="crtset">1</div>';
scorecardHtml += ' 	<div class="crtset">2</div>';
scorecardHtml += ' 	<div class="crtset">3</div>';
scorecardHtml += ' 	<div class="crtset">4</div>';
if(usesSet5){scorecardHtml += '<div class="crtset">5</div>';}
scorecardHtml += ' 	</div>';
}
scorecardHtml += ' 	<div id="crtcontent">';
scorecardHtml += ' 		<div class="crtrow teamOne">';
if(usePlayerFlags){
scorecardHtml += '		 		<div class="flag"></div>';
}
scorecardHtml += ' 		<div class="name"></div>';
scorecardHtml += ' 		<div class="crticon"></div>';
if(usesGms){scorecardHtml += ' 	<div class="crtgms"><span class="gms"></span></div>';}
scorecardHtml += ' 		<div class="crtpts"><span class="pts"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set1"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set2"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set3"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set4"></span></div>';
if(usesSet5){scorecardHtml += '		<div class="crtset five"><span class="set5"></span></div>';}
scorecardHtml += ' 		</div>';
if(score_page != 'slamtracker' && usesStatusBar) {
//scorecardHtml += genScorecardStatus();
}
//scorecardHtml += ' 		<div class="courtstatusmsg"></div>';
scorecardHtml += ' 		<div class="crtrow teamTwo">';
if(usePlayerFlags){
scorecardHtml += '		 		<div class="flag"></div>';
}
scorecardHtml += ' 		<div class="name"></div>';
scorecardHtml += ' 		<div class="crticon"></div>';
if(usesGms){scorecardHtml += ' 	<div class="crtgms"><span class="gms"></span></div>';}
scorecardHtml += ' 		<div class="crtpts"><span class="pts"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set1"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set2"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set3"></span></div>';
scorecardHtml += ' 		<div class="crtset"><span class="set4"></span></div>';
if(usesSet5){scorecardHtml += ' 	<div class="crtset five"><span class="set5"></span></div>';}
scorecardHtml += ' 		</div>';
scorecardHtml += ' 	</div>';
scorecardHtml += '		</div>';
scorecardHtml += '		<div class="slamtracker-promo"></div>';
scorecardHtml += genScorecardLinks();
scorecardHtml += '	</div>';
//traceDebug('loadScoreCardHtml: We are updating court ' + elementIdOfCourt);
$(elementIdOfCourt).html(scorecardHtml);
}
function getFlagPath(playerCtry){
var flagHtml = '';
if(playerCtry != undefined && playerCtry != ''){
flagHtml = '<img src="/images/flags/'+playerCtry+'_h.gif" width="32" height="19" border="0" alt="'+playerCtry+'"/>';
}
return flagHtml;
}
function getFormattedPlayerName(playerId, playerName){
if(lang == "en_GB" && playerName.indexOf('(') > -1){
playerName = playerName.substring(0,playerName.indexOf('('));
}
var playerHtml = playerName;
if(playerId != undefined && playerId != ''){
playerHtml = '<a href="/'+lang+'/players/overview/' + playerId + '.html">' + playerName + '</a>';
}
return playerHtml;
}
function getBioPhotoHtml(playerId, playerNumber, playerPhoto, playerName, doubles){
var smallImage = "";
var imgWidth = "95";
var imgHeight = "131";
var imgStyle = "";
//traceDebug('getBioPhotoHtml: playerPhoto = '+playerPhoto);
if(doubles){
smallImage = "/small";
imgWidth = "46";
imgHeight = "63";
if(playerNumber.indexOf('a') > -1){imgStyle = "float:left; margin:1px 19px;";}
if(playerNumber.indexOf('b') > -1){imgStyle = "float:left; margin:1px 19px;";}
}
if(playerName == undefined || playerName == ''){
playerName = '';
}
var imageHtml = '<img src="'+playerImagePath+smallImage+'/not_available_e.gif" width="'+imgWidth+'" height="'+imgHeight+'" border="0" alt="'+playerName+'" style="'+imgStyle+'" />';
if(playerPhoto && playerId != ""){
imageHtml = '<img src="'+playerImagePath+smallImage+'/'+playerId+'.jpg" width="'+imgWidth+'" height="'+imgHeight+'" border="0" alt="'+playerName+'" style="'+imgStyle+'" />';
}
imageHtml = '<a href="/'+lang+'/players/overview/' + playerId + '.html">' + imageHtml + '</a>';
return imageHtml;
}
function openPlayerBio(url){
measureApp('Scores','Popout', 'Player Bio');
if(window.opener == undefined){
window.open(url + '?promo=liteScoreboard', 'scoreboardLink','width=1024,height=800,top=0,left=0,scrollbars=yes,resizeable=yes');
}else{
window.opener.location.href = url + '?promo=liteScoreboard';
window.opener.focus();
}
}
function openStats(crt,match_id){
var courtObj = courts[crt];
var crt_match_over = courtObj.getMatchOver();
var linkInfo = courtObj.statsLink;
document.location.href = linkInfo;
/*if(crt_match_over == "complete") {
document.location.href = courtObj.statsLink;
} else {
launchSlamTracker('',match_id, 'panel','','','stats');
}*/
}
function openSlamTracker(match_id){
// var courtObj = courts[crt];
// var linkInfo = courtObj.ptLink;
//linkInfo = linkInfo.split("|");
launchSlamTracker('',match_id, 'mip','','','stats');
}
function getSlamtrackerLink(match_id) {
var link = '<a href="/'+lang+'/scores/stats/'+match_id+'ms.html">Match Detail by <span class="strong">IBM SlamTracker</span></a>';
return link;
}
/*
* Go through court list, find completed courts that weren't updated/removed during
* scoreUpdate2 process (meaning it wasn't in the XML/mipMsg), and remove them
* using the same process
*/
function clearInactiveCourts() {
//traceDebug('clearInactiveCourts: currentMipCourts = '+currentMipCourts);
//traceDebug('clearInactiveCourts: crtPosition = '+crtPosition);
var crt, tempObj;
/*
* go from top down to avoid issues where currentCourt keeps getting reassigned to the next court
* about to be deleted, causing race conditions where only the first fcourt processed was hidden
*/
for(var i=court_list.length-1, l=0; i>=l; i--) {
crt = court_list[i];
tempObj = courts[crt];
/*
* if court is in the crtPosition array
*/
if($.inArray(crt,crtPosition) > -1){
/*
* and court is not in the currentMipCourts array or is not active
*/
if($.inArray(crt, currentMipCourts) == -1 || !tempObj.active){
removeDisplay(crt,'clearInactiveCourts');
}
}
}
}
function isDoublesMatch(courtObj) {
var test_str = courtObj.event_id.toString();
if($.inArray(test_str,doubles_events) > -1){
return true;
} else {
return false;
}
}