eventSel = 0; //set default sort
var selected = 0; //set default selected
var firstRun = true;
var quals = false;
var msgReceived = false;
var dataError = true;
var mipMode;
var xmlInterval = "";
var currentMipCourts;
var relatedCrtContent;
var relatedCrtInterval;
//override variables set in scores_name_en_AU.js
useCounter = false;
usesStatusBar = false;
usePlayerFlags = true;
stIcon = false;
statsText = "Statistics";
videoText = "TV";
useRelatedContent = false;
var selections = new Object();
selections["mip"] = 0;
selections["show"] = 1;
selections["all"] = 2;
selections["ms"] = 3;
selections["ws"] = 4;
selections["ls"] = 4;
selections["md"] = 5;
selections["wd"] = 6;
selections["ld"] = 6;
selections["xd"] = 7;
selections["mx"] = 7;
selections["qs"] = 12;
selections["us"] = 14;
$(document).ready(function(){
//formUpdate();
});
function activityTimeout(){
showError();
msgReceived = false;
}
function showLoading(){
$('#working #messageDiv').addClass('msg2');
$('#working #messageDiv').html(loadMsg);
}
function showError(){
traceDebug('showError');
$('#working #messageDiv').addClass('msg2');
$('#working #messageDiv').html(errorMsg + " " + errorLink);
}
function showNoSelect(){
traceDebug('showNoSelect');
$('#working #messageDiv').addClass('msg2');
$('#working #messageDiv').html(matchMsg1 + matchMsg2);
$('#working').show();
//traceDebug("msg.innerHTML: " + $("#working #messageDiv").html());
}
function unitChange(which){
if (which == unit) {
return;
} else {
unit = which;
$.each(courts, function(){
if(this.active){
updateCourtStatus(this);
}
});
}
if(which == "metric"){var uVal = "KM/H";}
if(which == "imp"){var uVal = "MPH";}
measureApp('Scores Panel','Live Scores','Serve Speed Toggle',uVal);
}
function mip_setMode(which){
mipMode = which;
}
function formChange(which){
var val;
if (which){
selected = selections[which];
if (!dataError){
crtDisp(selected);
}
} else {
val = $('#limit').val();
selected = selections[val];
if (!dataError){
crtDisp(selected);
}
}
var eVal = which.toUpperCase();
measureApp('Scores Panel','Live Scores','Filter by Event',eVal);
}
function formUpdate(){
try {
if (selected == ""){
$('#limit option').each(function(){
if($(this).attr('value') == "mip"){
$(this).attr("selected", "selected");
}
});
}
$('.selectsdisp a').each(function(){
$(this).removeClass('selected');
if( $(this).attr('ref') == unit ){
$(this).addClass('selected');
}
});
//if(isDiv("sponsorDiv")){writeRMA();}
/*
** force slamtracker to use messagesight or
** load the regular way
*/
var connectMode="";
connectMode = qsParse.get("cmode")
switch (connectMode) {
case "ms" :
st_messagesight = true;
st_polling = false;
break;
case "pl" :
st_messagesight = false;
st_polling = true;
break;
default :
break;
}
//traceDebug('formUpdate: '+st_messagesight+'|'+st_polling);
if(st_messagesight || (!st_polling && !st_messagesight)){
//traceDebug('formUpdate: st_messagesight is true or all options are false');
/**
* The code below is used to decide which connection to use
*/
// Do we have websocket support @see ms_connect.js for this function
var websocket = webSocketsSupport();
//var websocket = false; //use this for now. messagesight not working yet
//traceDebug('WebSocket = ' + websocket + ', WebSocket = ' + typeof WebSocket + ', useragent = ' + navigator.userAgent);
if(websocket){
// If we do then check the config file to see if we want to balance to MS or not
//traceDebug ('Websocket support available will check MS Load balance.');
$.ajax({
url: '/'+xml_lang+'/xml/man/scores/messagesight-balance.panel.xml',
dataType: 'xml'
}).done(function(data){
// generate our balance number and check against config, it we match then run MS otherwise go traditional
var randomnumber = Math.floor(Math.random()*10);
if($(data).find('ms-balance').text().indexOf(randomnumber) != -1){
//traceDebug('MS balance was ' + randomnumber + ', will proceeed with MS connection.');
connectScoring(true);
}else{
//traceDebug('MS balance was ' + randomnumber + ', will proceeed with regular scoring connection.');
connectScoring(false);
}
}).fail(function(jqXHR, textStatus, errorThrown){
//traceDebug('Failed to read in the MS config file, will use traditional scoring instead.: ' + textStatus);
connectScoring(false);
});
}else{
//traceDebug("No Websocket support, will use traditional scoring instead.");
connectScoring(false);
}
} else {
connectScoring(false);
}
} catch (e) {
console.log('formUpdate: '+e);
//traceDebug('formUpdate: ' + e.message);
connectScoring(false);
}
}
/*
* Use to connect scoring to the right system on messagesight
* connection failure
*/
function msConnectFailure(){
if(typeof mip_setMode == 'function'){
mip_setMode("xml");
}
$('#page-system').html('...');
xmlRetrieve();
try {
//measureScoring('Scores Panel','MIP','Polling Failover');
}catch(err){
// User has cached JS, did not get new globalMeasure.js yet.
}
}
/*
* Use to connect scoring to the right system
*/
function connectScoring(useMessageSight){
traceDebug('connectScoring useMessageSight=' + useMessageSight);
if(useMessageSight || st_messagesight){
$('#page-system').html('.');
mip_setMode("ms");
connectToMessageSight();
try {
//measureScoring('Scores Panel','MIP','MessageSight Config');
}catch(err){
// User has cached JS, did not get new globalMeasure.js yet.
}
}else{
//traceDebug('connectScoring: polling');
$('#page-system').html('...');
mip_setMode("xml");
xmlRetrieve();
try {
//measureScoring('Scores Panel','MIP','Polling Config');
}catch(err){
// User has cached JS, did not get new globalMeasure.js yet.
}
}
}
function stopMIP(){
if(xmlInterval != "") {
clearInterval(xmlInterval);
} else {
//TODO: add code to disconnect from messagesight
client.unsubscribe('events/'+siteMessagePath+'/tennis/score/#');
client.disconnect();
}
//clearInterval(relatedCrtInterval);
}
function initMIP(){
traceDebug('initMIP');
var courtTemp = new Court();
var courtName = "";
if (quals){
court_list = quals_list;
}
for (var i=0, l=court_list.length; i<l; i++){
courtTemp.court_id = court_list[i];
if (quals){
courtTemp.court_id = String.fromCharCode(court_list[i].charCodeAt(0)+32);
}
courtName = courtTemp.getCourtID();
//initialize message tables
var msgTbl = "";
msgTbl += ' <div class="messagetable">';
msgTbl += ' <div class="msgheader">' + courtName + '</div>';
msgTbl += ' <div class="bar"></div>';
msgTbl += ' <div class="msgcontent">' + matchMsg1 + '</div>';
msgTbl += ' <div class="bottombar"></div>';
msgTbl += ' </div>';
$('#crt' + court_list[i] + 'msg').html(msgTbl);
$('#crt' + court_list[i]).css('display','block');
}
// fetch related content information for all courts
/*
relatedCrtInterval = setInterval(function() {
relatedContentRetrieve();
}, 60000);
relatedContentRetrieve();
*/
$('#working').css('display','block');
crtDisp(selected); //set default display to mip
}
/** make these calls whether user has flash or not **/
showLoading();
initMIP();
var loadTimer = setTimeout(function() { activityTimeout(); },20000);
/*
* used for pub sub to get mip message with
* current matches in progress
*/
function mipUpdate(textMsg){
try{
//traceDebug('mipUpdate: Mip called:' + textMsg);
/*
* set some vars
*/
var newString = new String(textMsg); //set message as js string
var mips = newString.split("^^"); //split string into individual court strings
var isCourtChanged = false;
currentMipCourts = [];
for(var r=0; r<mips.length; r++){
traceDebug('mipUpdate: '+mips[r]);
}
/*
* loop through court strings, for each one, split
* the string, set the court variable and set the
* match id variable
*/
for (var x=0, l=mips.length-1; x<l; x++){
var tmp = mips[x].split("|");
var crt = tmp[0];
var match = tmp[1];
//traceDebug('Working court ' + crt);
/*
* if we have data in the original message for this item and a court letter,
* get the court object and load the message data into the object
*/
if (mips[x]!="" && crt!=""){
var checkMatchCourt = courts[crt];
if(match != checkMatchCourt.match_id){
courts[crt] = new Court(); // make sure the court gets re-initialized before loading mip data - just in case it didn't get removed before a new match started.
traceDebug('mipUpdate: just re-initialzed court'+crt+', match - '+match);
/*if(relatedCrtContent[crt] === 'true') {
courts[crt].RC = 'true';
}*/
}
var tempObj = courts[crt];
traceDebug('mipUpdate: team 1 seed - '+tempObj.teams[0].seed+', team 2 seed - '+tempObj.teams[1].seed);
tempObj.loadMipData(mips[x]);
tempObj.active = true;
currentMipCourts[currentMipCourts.length] = crt; //add current crts into array to check later
//traceDebug('Loaded MIP data for ' + crt + ', tempObj team1 = ' + tempObj.teams[0].players[0].TVname);
/*
* if the currentCourt var is not set or is not equal to ZZZ then
* set the currentCourt var with this court and set isCourtChanged
* var to true indicating a new currentCourt
*/
if(currentCourt == '' || currentCourt == 'ZZZ'){
currentCourt = crt;
isCourtChanged = true;
}
//traceDebug('mipUpdate: selected currentCourt ' + currentCourt);
}
}
/*
* call clearInactiveCourts to clear all courts
* not currently in the mip message or courts
* that are inactive
*/
clearInactiveCourts();
/*
* if this is the first time through, set firstrun var to false
*/
if(firstRun){
firstRun = false;
}	
} catch (e){
traceError('mipUpdate ERROR: '+e);
}
}
/*
* used for pub sub to get score court specific
* score message with up to date score data
*/
function scoreUpdate(textMsg,topic){
try{
traceDebug('scoreUpdate: '+ textMsg + " " + topic);
/*
* get court from topic passed to function,
* evaluate court object, set textMsg
* to javascript string and split string
*/
var crt = topic.substr(topic.lastIndexOf("/")+1);
var tempObj = courts[crt];
var newString = new String(textMsg);
var tmp = newString.split("|");
/*
* if court match id is the same as the id in the
* string (just a check), then load the court object
* with the data and call scoreUpdate2
*/
if (tempObj.match_id == tmp[0]){
tempObj.loadData(newString,'mess');
scoreUpdate2(tempObj,crt);
}
} catch(e) {
traceError('scoreUpdate: ERROR - '+e);
}
}
function scoreUpdateXMLPoll(data){
//traceDebug("scoreUpdateXMLPoll");
var isCourtChanged = false;
currentMipCourts = [];
$(data).find("m").each(function(x,val) {
var mText = $(this).text();
//mText = decrypt(mText);
//mText = decodeURIComponent(escape(window.atob(mText))); //Base64 decryption
mText = base64_decode(mText);
var tmp = mText.split("|");
//traceDebug("scoreUpdateXMLPoll: "+mText);
if(tmp[2]){	//make sure there is a court id, otherwise it all fails
var crt = tmp[2];
var tempObj = courts[crt];
tempObj.loadData(mText,'file');
tempObj.active = true;
currentMipCourts[currentMipCourts.length] = crt; //add current crts into array to check later
if(tempObj.getMatchOver() == 'in progress' && (currentCourt == '' || currentCourt == 'ZZZ')){
traceDebug("new currentCourt: " + crt );
currentCourt = crt;
isCourtChanged = true;
}else {
if(x==0 && (currentCourt == '' || currentCourt == 'ZZZ')){
traceDebug("scoreUpdateXMLPoll: no current matches, new currentCourt: " + crt );
currentCourt = crt;
isCourtChanged = true;
}
}
scoreUpdate2(tempObj,crt);
}
});
clearInactiveCourts();
/*if(api != '') {
api.reinitialise();
}*/
if(firstRun){
firstRun = false;
}
}
function scoreUpdate2(tempObj,crt){
try {
/*
* set msgReceived to true, indicating no error, so
* set dataError to false and clear load timer
*/
if (!msgReceived){
msgReceived = true;
dataError = false;
clearTimeout(loadTimer);
}
/*
* set fnd var to false and get matchover var from
* court object passed to function
*/
var fnd = false;
var matchover = tempObj.getMatchOver();
//traceDebug('scoreUpdate2: court points ' + tempObj.teams[0].points + ', ' + tempObj.teams[1].points);
/*
* set active property of court to true, indicating
* is is a current match in progress
*/
tempObj.active = true;
if (selected > 2){ // viewing matches in specific draw
var event = court_list[eventSel-3];
var val = tempObj.event_id;
var crtPosVal = $.inArray(crt, crtPosition);
if(crtPosVal > -1) {
fnd = true;
}
// add court to visible events if its same type, in progress, and not already visible
if (val == event && !fnd && this.active){
crtPosition[crtPos.length] = crt;
crtPosCnt();
reposition(1);
} else if (val != event && fnd && this.active) {
// remove from crtPos if match in progress isn't of the same event and it is visible
crtPosition.splice(crtPosVal, 1);
crtPosCnt();
reposition(1);
} // always check if match in progress since completed matches will be handled by removeDisplay
}
if (selected == 0){ // matches in progress
/*
* if court is in crtPosition array, then set fnd to true
*/
if($.inArray(crt,crtPosition) > -1) {
fnd = true;
}
/*
* if court is not found in crtPosition array and match is in
* progress, then add to crtPosition array, then call crtPosCnt
* and reposition functions
*/
if (!fnd){
//traceDebug('scoreUpdate2: court '+crt+' ('+getCourtID(crt)+') not found in crtPosition: ' + matchover);
//if (matchover == "in progress"){
//traceDebug('scoreUpdate2: adding court '+crt+' ('+getCourtID(crt)+') to crtPosition');
crtPosition[crtPosition.length] = crt;
crtPosCnt();
reposition(2);
//}
}
}
/*
* if no matches, then call showNoSelect function
* and then updateCourtData to set all the data in
* the court
*/
if (crtPosition.length == 0){
traceDebug("noMatches");
showNoSelect();
}
updateCourtData(crt);
//Yong, I added another qualification to this check. This may fix the double highlight issue and still allow for the
//first court to be highlighted if there is not a match passed to the app.
if(currentCourt == ''){
traceDebug('scoreUpdate2: currentCourt is not set, setting crt ' + crt + ' to selected');
$('#crt' + crt).addClass('selected');
currentCourt = crt;
}
} catch(e) {
traceError('scoreUpdate2: ERROR - '+e);
}
}
/*
* get xml data
*/
function xmlRetrieve(){
traceDebug("xmlRetrieve: retrieving XML");
// use scores.ps.unc.xml for decrypted file
$('#page-system').html('...');
$.ajax({
url: '/'+xml_lang+'/xml/gen/scores/scores.xml',
type: 'GET',
dataType: 'xml'
})
.fail(function(jqXHR, textStatus, errorThrown){
traceError("error retrieving XML" + textStatus);
})
.done(function(xml){
scoreUpdateXMLPoll(xml);
});
if(xmlInterval == "") {
xmlInterval = setInterval('xmlRetrieve()', 20000);
}
}
/*
* get related content true/false data for active courts
*/
function relatedContentRetrieve() {
$.getJSON('/en_AU/xml/gen/scores/watch.json', function(data) {
relatedCrtContent = data;
$.each(data, function(key) {
if(data[key] === 'true') {
courts[key].RC = 'true';
} else {
courts[key].RC = '';
}
});
});
}