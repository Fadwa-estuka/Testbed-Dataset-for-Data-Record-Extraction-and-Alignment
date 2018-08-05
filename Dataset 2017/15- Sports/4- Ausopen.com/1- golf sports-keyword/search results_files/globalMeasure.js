ffdebug = false;	// turn console messages off
var mArgs;
var mUrl;
var cArgs;
var cURL;
/*******
* This function should be used for measuring application clicks within the site. Unlimited parameters may be passed.
* parameters may be string or 1 single array of values.
*
* example of use:
* 		measureApp('home page','personalization','edit');
* 							OR
* 		measureApp(['home page','personalization','edit']);
*
* formatted url will look like this: http://domain/home_page_personalization_edit.html
*
*
* @return
*/
function measureApp() {
var id = '';
mArgs = arguments;
//alert(mArgs.length + " actual parameters");
// If only 1 parameter was passed in, and that
// parameter contains an array, treat that array
// as the arguments array.
fflog('debug',"'globalMeasure measureApp: parameter[0] type: ',mArgs[0].constructor");
if (mArgs.length == 1 && mArgs[0].constructor==Array) {
mArgs = mArgs[0];
}
fflog('debug',"'globalMeasure measureApp: interpreted parameters: ' , mArgs.length");
if (mArgs[0] == 'home page') { mArgs[0]='Home' }
id="";
for (i=0; i < mArgs.length; i++) {
if (mArgs[i].constructor !== Array){
fflog('debug',"'globalMeasure measureApp: mArgs[%d] type: ', i, mArgs[i].constructor, ' value: ', mArgs[i]");
if (i==0) {
id += mArgs[i];
} else {
id += ':' + mArgs[i];
}
}
else {
fflog('error',"'globalMeasure measureApp: parameter[%d] is an invalid type: ', i, mArgs[i].constructor");
return;
}
}
// if iPad App then we want to do something different
if(mArgs[0].search('iPad App') != -1) {
var newid = id.replace('iPad App:','/ios/metrics/');
newid = newid.split(' ').join('+');
// iPad App will catch this url and do the measurement calls inside the app
location.href=newid;
//console.info(newid);
// get me out of here!
return;
}
onClick='';
s.prop11=s.pageName;
if(document.location.href.indexOf('/mobile/') > -1){
s.prop12=s.prop2;
s.prop13='Mobile';
} else {
s.prop12=page_section;
s.prop13='www';
}
//console.log(s.prop11+', '+s.prop12+', '+s.prop13);
s.events='event11';
s.linkTrackVars='events,prop11,prop12,prop13';
s.linkTrackEvents='event11';
if(document.location.href.indexOf('/video/') > -1) {
s.linkTrackVars+=',prop33';
}
if(document.location.href.indexOf('/galleries/') > -1) {
s.linkTrackVars+=',prop16,prop31';
}
s.tl(this,'o',id);
//fflog('debug',"'globalMeasure: ',id");
fflog('debug','"globalMeasure measureApp: id value: '+id+'"');
if(id.indexOf(":") != -1){
var measureAppCMCategory = id.substring(0, id.indexOf(":"));
var measureAppCMElement = id.substring(id.indexOf(":") + 1);
//if(typeof(cmCreateElementTag) == 'function'){
//alert("measureAppCMElement: " + measureAppCMElement + " measureAppCMCategory: " + measureAppCMCategory);
//cmCreateElementTag(measureAppCMElement, measureAppCMCategory);
//}
}
}
function measureScoring(){
s.suppressEvent2='event58'
measureApp.apply(this, arguments);
s.suppressEvent2='no';
}
/*******
* This function should be used for measuring clicks that take the user away from the site. One parameter may be passed.
* This function should ONLY be called from another function where measureApp will not work.
*
* example of use:
* 		measureClick('http://www.facebook.com');
* OR
* 		measureClick('/click/.....');
* OR
* 		measureClick(url);
*
* @return
*/
function clickMeasure() {
cArgs = arguments;
//alert(cArgs.length + " actual parameters");
// If only 1 parameter was passed in, and that
// parameter contains an array, treat that array
// as the arguments array.
fflog('debug',"'globalMeasure: parameter[0] type: ',cArgs[0].constructor");
if (cArgs.length == 1 && cArgs[0].constructor==Array) {
cArgs = cArgs[0];
}
fflog('debug',"'globalMeasure: interpreted parameters: ' , cArgs.length");
if(cArgs[0].indexOf('http://') == 0){
cUrl = cArgs;
} else {
cUrl = 'http://'+siteURL+cArgs[0];
}
fflog('debug',"'globalMeasure: ',cUrl");
}
/***
* function: uptimeMeasure
* measurement function to measure uptime. Used in conjunction with uptime.js
*/
function uptimeMeasure(info){
var page = "";
var refPage = escape(document.location.href);
var randomnumber=Math.floor(Math.random()*9999999999);
var ck = "";
ck = getCookieValue("sauid");
ck = ck ? ck : "";
page = escape(info);
clickMeasure(url);
}
/*******
* function: nextPrevMeasure
* measurement function for next and previous arrows in gallery
* @param dir - values are "next" or "print", using "next" to measure both next and previous clicks
*/
var newsImg = new Image();
function nextPrevMeasure(dir){
var rannum = Math.random();
var site = "www";
if(location.hostname){
site = location.hostname + "";
}
var loc = document.location + "";
loc = loc.substring(loc.indexOf("/en_AU"),loc.indexOf(".html"));
var pag = loc + "_" + dir + ".html";
clickMeasure(url);
}
/***
* function: fflog
* Just a quick function to allow for logging to firebug console.
*
* @param type - type of log msg (error, info, debug, warn)
* @param msg - message to log
*
* Note: errors always get logged.
*
* @return
*/
function fflog (type,msg) {
if (ffdebug || type == 'error') {
eval('console.'+type+'('+msg+');');
}
}