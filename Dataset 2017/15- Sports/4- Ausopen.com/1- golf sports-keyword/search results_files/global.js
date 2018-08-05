//********************** Global lang */
var defaultLang = "en_AU";
/**************************** Language Detect */
var lang;
var site = location.pathname;
var fullSitePath = location.href;
if (site.indexOf("/en_FR/") == 0){
lang = "en_FR";
} else if (site.indexOf("/fr_FR/") == 0) {
lang = "fr_FR";
} else if (site.indexOf("/es_FR/") == 0) {
lang = "es_FR";
} else if (site.indexOf("/en_GB/") == 0) {
lang = "en_GB";
} else if (site.indexOf("/en_AU/") == 0) {
lang = "en_AU";
} else if (window.defaultLang){
lang = defaultLang;
}
/**************************** Page Section Detect */
var page_section = "";
//if(site.indexOf("/en_AU/") != -1) {page_section = "Home";}
// Fixing to deal with the fact that home is just index.html.
if(fullSitePath.indexOf("ausopen.com/index.html") != -1) {page_section = "Home";}
if(site.indexOf("ausopen.com/index.html") != -1) {page_section = "Home";}
if(fullSitePath == "ausopen.com/index.html") {page_section = "Home";}
//if(fullSitePath == "localhost:8091") {page_section = "Home";}
if(site.indexOf("/scores/") != -1){page_section = "Scores";}
if(site.indexOf("/slamtracker/") != -1){page_section = "Scores";}
if(site.indexOf("/widget/") != -1){page_section = "Scores";}
if(site.indexOf("/interactive/mobile/") != -1){page_section = "News & Photos";}
if(site.indexOf("/ibmrealtime/index.html") != -1){page_section = "Scores";}
if(site.indexOf("/event_guide/history/draws/") != -1) {page_section = "Draws";}
if(site.indexOf("/scores/draws/") != -1) {page_section = "Draws";}
if(site.indexOf("/scores/schedule/") != -1) {page_section = "Schedule";}
if(site.indexOf("/players/") != -1) {page_section = "Players";}
if(site.indexOf("/news/") != -1) {page_section = "News & Photos";}
if(site.indexOf("/news/galleries/") != -1) {page_section = "Photos";}
if(site.indexOf("/news/photos/") != -1) {page_section = "Photos";}
if(site.indexOf("/captionit/") != -1) {page_section = "News & Photos";}
if(site.indexOf("/yoursay/") != -1) {page_section = "News & Photos";}
if(site.indexOf("/twitter/") != -1) {page_section = "News & Photos";}
if(site.indexOf("/video/") != -1) {page_section = "Video";}
if(site.indexOf("/interactive/radio/") != -1) {page_section = "News & Photos";}
if(site.indexOf("/social/") != -1) {page_section = "Social";}
if(site.indexOf("/event-guide") != -1) {page_section = "Event Guide:EventGuide";}
if(site.indexOf("/tickets") != -1) {page_section = "Tickets:Tickets";}
if(site.indexOf("/hospitality") != -1) {page_section = "Tickets:Tickets";}
if(site.indexOf("/membership") != -1) {page_section = "Tickets:Tickets";}
if(site.indexOf("/en_AU/info/") != -1) {page_section = "Site Functions";}
if(site.indexOf("/en_AU/search/") != -1) {page_section = "Site Functions";}
if(site.indexOf("/en_AU/feedback/") != -1) {page_section = "Site Functions";}
if(site.indexOf("/search.jsp") != -1) {page_section = "Site Functions";}
if(site.indexOf("/news/rss/") != -1) {page_section = "Site Functions";}
if(site.indexOf("/social/email") != -1) {page_section = "Social";}
if(site.indexOf("/console/") != -1) {page_section = "Video";}
if(site.indexOf("/console/ipadLiveVideo") != -1){page_Section = "Video & Photos"}
if(site.indexOf("/contact") != -1) {page_section = "Site Functions:Contact";}
if(site.indexOf("/sponsors") != -1) {page_section = "Sponsors:Sponsors";}
//********************** Browser Detect
function BrowserDetect() {
var ua = navigator.userAgent.toLowerCase();
//alert(ua);
// browser engine name
this.isGecko = (ua.indexOf('gecko') != -1);
this.isAppleWebKit = (ua.indexOf('applewebkit') != -1);
// browser name
this.isKonqueror = (ua.indexOf('konqueror') != -1);
this.isSafari = (ua.indexOf('safari') != - 1);
this.isOmniweb = (ua.indexOf('omniweb') != - 1);
this.isOpera = (ua.indexOf('opera') != -1);
this.isIcab = (ua.indexOf('icab') != -1);
this.isAol = (ua.indexOf('aol') != -1);
this.isIE = (ua.indexOf('msie') != -1 && !this.isOpera && (ua.indexOf('webtv') == -1) );
this.isMozilla = (this.isGecko && ua.indexOf('gecko/') + 14 == ua.length);
this.isFirebird = (ua.indexOf('firebird/') != -1);
this.isFirefox = (ua.indexOf('firefox') != -1);
this.isNS = ( (this.isGecko) ? (ua.indexOf('netscape') != -1) : ( (ua.indexOf('mozilla') != -1) && !this.isOpera && !this.isSafari && (ua.indexOf('spoofer') == -1) && (ua.indexOf('compatible') == -1) && (ua.indexOf('webtv') == -1) && (ua.indexOf('hotjava') == -1) ) );
this.isSeamonkey = (ua.indexOf('seamonkey/') != -1);
this.isIPad		 = (ua.indexOf('ipad') != -1);
this.isIPhone	 = (ua.indexOf('ipod') != -1) || (ua.indexOf('iphone') != -1);
// spoofing and compatible browsers
this.isIECompatible = ( (ua.indexOf('msie') != -1) && !this.isIE);
this.isNSCompatible = ( (ua.indexOf('mozilla') != -1) && !this.isNS && !this.isMozilla);
// rendering engine versions
this.geckoVersion = ( (this.isGecko) ? ua.substring( (ua.lastIndexOf('gecko/') + 6), (ua.lastIndexOf('gecko/') + 14) ) : -1 );
this.equivalentMozilla = ( (this.isGecko) ? parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) ) : -1 );
this.appleWebKitVersion = ( (this.isAppleWebKit) ? parseFloat( ua.substring( ua.indexOf('applewebkit/') + 12) ) : -1 );
//alert(ua + " |||| " + this.equivalentMozilla);
// browser version
this.versionMinor = parseFloat(navigator.appVersion);
// correct version number
if (this.isGecko && !this.isMozilla && !this.isSeamonkey) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('/', ua.indexOf('gecko/') + 6) + 1 ) );
}
else if (this.isMozilla) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('rv:') + 3 ) ) ;
this.versionRevision = ua.substring( ua.indexOf('rv:') + 3, ua.indexOf(")",ua.indexOf('rv:') ) ) ;
}
else if (this.isIE && this.versionMinor >= 4) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('msie ') + 5 ) );
}
else if (this.isKonqueror) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('konqueror/') + 10 ) );
}
else if (this.isSafari) {
this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('safari/') + 7 ) );
}
else if (this.isOmniweb) {
this.versionMinor = parseFloat( ua.substring( ua.lastIndexOf('omniweb/') + 8 ) );
}
else if (this.isOpera) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('opera') + 6 ) );
}
else if (this.isIcab) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('icab') + 5 ) );
}
else if (this.isGecko && this.isSeamonkey) {
this.versionMinor = parseFloat( ua.substring( ua.indexOf('seamonkey/') + 10 ) );
}
this.versionMajor = parseInt(this.versionMinor);
// dom support
this.isDOM1 = (document.getElementById);
this.isDOM2Event = (document.addEventListener && document.removeEventListener);
// css compatibility mode
this.mode = document.compatMode ? document.compatMode : 'BackCompat';
// platform
this.isWin = (ua.indexOf('win') != -1);
this.isWin32 = (this.isWin && ( ua.indexOf('95') != -1 || ua.indexOf('98') != -1 || ua.indexOf('nt') != -1 || ua.indexOf('win32') != -1 || ua.indexOf('32bit') != -1 || ua.indexOf('xp') != -1) );
this.isMac = (ua.indexOf('mac') != -1);
this.isUnix = (ua.indexOf('unix') != -1 || ua.indexOf('sunos') != -1 || ua.indexOf('bsd') != -1 || ua.indexOf('x11') != -1)
this.isLinux = (ua.indexOf('linux') != -1);
//alert(this.versionMajor + " | " + this.versionMinor + " | " + this.versionRevision );
// specific browser shortcuts
this.isNS4x = (this.isNS && this.versionMajor == 4);
this.isNS40x = (this.isNS4x && this.versionMinor < 4.5);
this.isNS47x = (this.isNS4x && this.versionMinor >= 4.7);
this.isNS4up = (this.isNS && this.versionMinor >= 4);
this.isNS6x = (this.isNS && this.versionMajor == 6);
this.isNS6up = (this.isNS && this.versionMajor >= 6);
this.isNS7x = (this.isNS && this.versionMajor == 7);
this.isNS7up = (this.isNS && this.versionMajor >= 7);
this.isNS8x = (this.isNS && this.versionMajor == 8);
this.isNS8up = (this.isNS && this.versionMajor >= 8);
this.isIE4x = (this.isIE && this.versionMajor == 4);
this.isIE4up = (this.isIE && this.versionMajor >= 4);
this.isIE5x = (this.isIE && this.versionMajor == 5);
this.isIE55 = (this.isIE && this.versionMinor == 5.5);
this.isIE5up = (this.isIE && this.versionMajor >= 5);
this.isIE6x = (this.isIE && this.versionMajor == 6);
this.isIE6up = (this.isIE && this.versionMajor >= 6);
this.isIE7up = (this.isIE && this.versionMajor >= 7);
this.isIE8up = (this.isIE && this.versionMajor >= 8);
this.isIE8down = (this.isIE && this.versionMajor <= 8);
this.isIE9up = (this.isIE && this.versionMajor >= 9);
this.isMoz17up = (this.isMozilla && this.versionMinor >= 1.7);
this.isMoz175 = (this.isMozilla && this.versionRevision == "1.7.5");
this.isGecko17up = (this.isGecko && this.versionMinor >= 1.7);
this.isSaf13 = (this.isSafari && this.versionMinor >= 1.3);
this.isOpera9up = (this.isOpera && this.versionMajor >= 9);
this.isSeamonkey11up = (this.isSeamonkey && this.versionMinor >= 1.1);
this.isIE4xMac = (this.isIE4x && this.isMac);
this.isIE5xMac = (this.isIE5x && this.isMac);
}
var browser = new BrowserDetect();
var isFF = false;
var isMoz = false;
var isMacintosh = false;
var isNav = false;
var isNS6 = false;
var isDom = false;
var isIE = false;
var isScores = false;
var isIPad = false;
var browserId;
var NPRuntime = true;
var isWin = browser.isWin;
var isWin32 = browser.isWin32;
//these browser os combinations support the Flash 8 ExternalInterface API that we are using
if (browser.isWin && (browser.isIE5up || browser.isNS7up || browser.isMoz17up || browser.isFirefox || browser.isGecko17up || browser.isOpera9up || browser.isSeamonkey11up)){
NPRuntime = true;
}
if (browser.isMac && ( browser.isNS8up || browser.isMoz17up || browser.isFirefox || browser.isGecko17up || browser.isSaf13 || browser.isOpera9up || browser.isSeamonkey11up)){
NPRuntime = true;
}
if (browser.isLinux && (browser.isMoz17up || browser.isFirefox || browser.isGecko17up || browser.isOpera9up || browser.isSeamonkey11up)){
NPRuntime = true;
}
function isTabletDevice(){
var d_ua = navigator.userAgent.toLowerCase(); //get device user agent - all lower case
//ipad - iPad device
//silk - Kindle Fire device
//android - Android device
if(d_ua.match(/ipad/i) || d_ua.match(/silk/i) || d_ua.match(/android/i)){
return true;
} else {
return false
}
}
var tabletSite = isTabletDevice();
/************************** NS Resize Script */
if (isNav){
origWidth = innerWidth;
origHeight = innerHeight;
}
function resizeDetected(){
if (isNav){
if (innerWidth != origWidth || innerHeight != origHeight){
location.href = location.href;
}
}
}
/***************************** pulldown redirect */
/* function _go(fName,sName) {
if (eval("document." + fName + "." + sName + ".options[document." + fName + "." + sName + ".selectedIndex].value"))
location.href=eval("document." + fName + "." + sName + ".options[document." + fName + "." + sName + ".selectedIndex].value");
} */
function _go(sName) {
if( $('#'+sName).length > 0 ){
location.href = $('#'+sName).val();
}
}
/***************************** search direct */
var search = true; //change to true to turn on search
function go_search(val){
$("#"+val + " #ksearch").submit();
}
/***************************** shop navigation */
/*function openShopExternal(){
openExternal(externalShopURL,true);
}*/
function openShop(){
if(externalShop){
openExternal(externalShopURL,true);
} else {
location.href=internalShopURL;
}
}
/***************************** Surfaid external navigation */
function openExternal(lnk,newWindow,w,h,shared){
if (lnk.indexOf("http://" == -1)){
switch(lnk){
case "ibm": lnk = "http://www.ibm.com/"; break;
case "tix1": lnk = "https://oss.ticketmaster.com/html/outsider.htmI?CAMEFROM=&GOTO=https%3A%2F%2Foss.ticketmaster.com%2Fhtml%2Frequest.htmI%3Fl%3DEN%26team%3Dusopentennis%26STAGE%3D1%26PROC%3DBUY%26EventName%3D11DEPSIT";break;
default: break;
}
}
// measurement code
s.prop11=s.pageName;
s.prop12=page_section;
s.prop13='www';
s.events='event9';
s.eVar25=lnk;
s.linkTrackVars='events,eVar25,prop11,prop12,prop13';
s.linkTrackEvents='event9';
s.tl(this,'e',lnk);
if (newWindow){
if (w && h){
newWindow = window.open(lnk,"consoleWindow","width=" + w + ",height=" + h + ",resizable=yes,status=yes,toolbar=yes,menubar=yes,location=yes");
}
else{
newWindow = window.open(lnk,"newWindow","menubar=1,toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1");
}
}
else {
document.location.href = lnk;
}
}
/***************************** Surfaid internal navigation */
function openPDF(loc) {
//PDF download measurement
s.prop11=s.pageName;
s.prop12=page_section;
s.prop13='www';
s.events='event5';
s.eVar24=loc;
s.linkTrackVars='events,eVar24,prop11,prop12,prop13';
s.linkTrackEvents='event5';
s.tl(this,'d',loc);
openInternal(loc,true);
}
function openInternal(loc,newWindow) {
if(loc) {
if (newWindow){
newWindow = window.open(loc);
} else {
location.href = loc;
}
}
}
/**************************** IBM banner reanimation */
function reanimate(langLet){
var source = "";
if (typeof src_server !== "undefined") {
source = src_server;
}
document.getElementById("ibm_ban").src = source + "/images/nav/ibmRibbon.gif";
}
function launchLanding(newWindow,siteLoc){
// measurement code
s.events='event9';
s.eVar25='/ibm/index.html';
s.linkTrackVars='events,eVar25';
s.linkTrackEvents='event9';
s.tl(this,'e','/ibm/index.html');
var url = "/ibm/index.html";
if(newWindow){
opener.location.href = url;
}else{
location.href = url;
}
//location.href = "/ibm/index.html"
//var landingWwindow=window.open('http://www.ibm.com/innovation/uk/wimbledon/index.html?ca=neiotuk_wbdn-q22010&me=a&met=fft_top_right&re=wbdn','landingWindow');
}
//************************************************************/
// Client-side access to querystring name=value pairs
// Version 1.2.3
// 22 Jun 2005
// Adam Vandenberg
//************************************************************/
function Querystring(qs) { // optionally pass a querystring to parse
this.params = new Object()
this.get=Querystring_get
if (qs == null)
qs=location.search.substring(1,location.search.length)
if (qs.length == 0) return
// Turn <plus> back to <space>
// See: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
qs = qs.replace(/\+/g, ' ')
var args = qs.split('&') // parse out name/value pairs separated via &
// split out each name=value pair
for (var i=0;i<args.length;i++) {
var value;
var pair = args[i].split('=')
var name = unescape(pair[0])
if (pair.length == 2)
value = unescape(pair[1])
else
value = name
this.params[name] = value
}
}
function Querystring_get(key, default_) {
// This silly looking line changes UNDEFINED to NULL
if (default_ == null) default_ = null;
var value=this.params[key]
if (value==null) value=default_;
return value
}
var qsParse = new Querystring();
/***************************** On Load Event */
function addLoadEvent(func)
{
var oldonload = window.onload;
if (typeof window.onload != 'function')
{
window.onload = func;
}
else
{
window.onload = function()
{
if (oldonload)
{
oldonload();
}
func();
}
}
}
//for loading videos in hidden iframe, prevents new window from opening
function loadVideo(vidFile){
frames['videoLaunch'].location.href = vidFile;
}
//***********************************
// add social media buttons functions
// data format: 
// { "service":"facebook | pinterest | twitter | plusone",
// "element": "container name",
// "url": "full page url",
// "title": " page title",
// "photourl": "full image path - optional",
// "type":"layout: horiz | vert -- needs to be implemented" }
//***********************************
function addSocial(data) {
network = data.service;
type = data.type;
// console.log(network);
$('#' + data.element).each(function(){
// console.log(this);
switch (network) {
case "facebook":
// Share only
$(this).append('<div class="share fb-share-button" data-type="button_count" data-href="'+data.url+ '" style="margin-bottom:5px;"></div>');
//FB.XFBML.parse();
//$(this).append('<div class="share btn_fb"><iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(data.url) + '&amp;send=false&amp;layout=button_count&amp;width=85&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=134137079648" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:85px; height:21px;" allowTransparency="true"></iframe></div>');
break;
case "twitter":
var twTitle = data.title;
if (twTitle.length > 90) {
twTitle = twTitle.substring(0,86);
twTitle = twTitle.substring(0,twTitle.lastIndexOf(" ")) + "...";
}
$(this).append('<div class="share btn_tw" style="margin-bottom:5px;"><a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-url="' + data.url + '" data-text="' + twTitle + ' #AusOpen" data-via="australianopen" data-related="australianopen">Tweet</a></div>');
$.getScript("http://platform.twitter.com/widgets.js");
break;
case "pinterest":
$(this).append('<div class="share btn_pn" style="margin-bottom:5px;"><a href="http://pinterest.com/pin/create/button/?url=' + data.url + '&media=' + data.photourl + '&description=' + escape(data.title) + '" class="pin-it-button" count-layout="horizontal" always-show-count="1"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>');
$.getScript("http://assets.pinterest.com/js/pinit.js");
break;
case "plusone":
(function(){
var po = document.createElement('script');
po.type = 'text/javascript';
po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
//var s = document.getElementsByTagName('script')[0];
//s.parentNode.insertBefore(po, s);
document.getElementsByTagName("head")[0].appendChild(po);
})();
$(this).append('<div class="share btn_po" style="margin-bottom:5px;"><div class="g-plusone" data-size="medium" data-href="' + data.url + '" width="85"></div></div>');
window.___gcfg = {
lang: 'en-US'
};
break;
}
});
}
/* in the name of expiediency i've created a 2nd function to load vertical social media buttons */
function addSocialVert(data) {
network = data.service;
type = data.type;
// console.log(network);
$('#' + data.element).each(function(){
// console.log(this);
switch (network) {
case "facebook":
// Share only
//$(this).append('<div class="share fb-like" data-type="box_count" data-href="'+data.url+ '"></div>');
//like
$(this).append('<div class="share fb-like" data-href="'+data.url+ '" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false"></div>');
//$(this).append('<div class="share btn_fb"><iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(data.url) + '&amp;send=false&amp;layout=box_count&amp;width=55&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=65&amp;appId=134137079648" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:55px; height:65px;" allowTransparency="true"></iframe></div>');
break;
case "twitter":
var twTitle = data.title;
if (twTitle.length > 90) {
twTitle = twTitle.substring(0,86);
twTitle = twTitle.substring(0,twTitle.lastIndexOf(" ")) + "...";
}
$(this).append('<div class="share btn_tw"><a href="https://twitter.com/share" data-count="vertical" class="twitter-share-button" data-lang="en" data-url="' + data.url + '" data-text="' + twTitle + ' #AusOpen" data-via="australianopen" data-related="australianopen">Tweet</a></div>');
$.getScript("http://platform.twitter.com/widgets.js");
break;
case "pinterest":
$(this).append('<div class="share btn_pn"><a href="http://pinterest.com/pin/create/button/?url=' + data.url + '&media=' + data.photourl + '&description=' + escape(data.title) + '" class="pin-it-button" count-layout="none"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>');
$.getScript("http://assets.pinterest.com/js/pinit.js");
break;
case "plusone":
(function(){
var po = document.createElement('script');
po.type = 'text/javascript';
po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
//var s = document.getElementsByTagName('script')[0];
//s.parentNode.insertBefore(po, s);
document.getElementsByTagName("head")[0].appendChild(po);
})();
$(this).append('<div class="share btn_po"><div class="g-plusone" data-size="tall" data-href="' + data.url + '" width="55"></div></div>');
window.___gcfg = {
lang: 'en-US'
};
break;
}
});
}
/*************************************************/
/** new getScript override allows you to specify caching **/
/*************************************************/
$.getScript = function(url, callback, cache, async){
$.ajax({
type: "GET",
url: url,
success: callback,
dataType: "script",
cache: cache,
async: async
});
};
/*************************************************/
/** uppercase the first letter of the string passed in **/
/*************************************************/
function toTitleCase(str)
{
return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
/*************************************************/
/** related content - reverse sort rel cont results **/
/*************************************************/
function sortByDate(a, b){
var aDate = a.date;
var bDate = b.date; 
return ((aDate > bDate) ? -1 : ((aDate < bDate) ? 1 : 0));
}
/*************************************************/
/** related content - retrieve related content using embedded pid or page name **/
/*************************************************/
function getRelatedContent() {
var pid = "0"; // default value for the player id
if (typeof profile_playerid !== "undefined") {
pid = profile_playerid;
} else {
var player_page = window.location.pathname.split('/').pop();
pid = player_page.substr(0, player_page.lastIndexOf('.'));
}
// Articles, Interviews, Match Reports
//$.getJSON( "/relatedcontent/rest/ausopen_2017/en/tags/"+pid+"?total=50&types=articles&types=interviews&types=match_reports", function( data ) {
$.getJSON("/relatedcontent/rest/ausopen_2017/en/tags/"+pid+"?total=50&type=articles&type=interviews&type=match_reports", function( data ) {
var html = "";
data.results.sort(sortByDate); 
if (data.results.length > 0) {
$.each( data.results, function() {
if (this.type != 'photo' && this.type != 'video') {
var type_label = "Article";
var type_icon = "icon-article";
switch (this.type) {
case 'articles':
type_label = "Article";
type_icon = "icon-article";
break;
case 'interviews':
type_label = "Interview";
type_icon = "icon-article";
break;
case 'match_reports':
type_label = "Report";
type_icon = "icon-article";
break;
case 'photo':
type_label = "Photo";
type_icon = "icon-gallery";
break;
case 'video':
type_label = "Video";
type_icon = "icon-playvideo";
break;
}
html += '<div class="listitem">';
html += ' <div class="text">';
html += ' <div class="type">'+type_label+'</div>';
html += ' <a href="'+this.url+'" class="title">'+this.title+'</a>';
html += ' </div>';
html += ' <a href="'+this.url+'" class="image"><img src="'+this.thumb+'" width="100" height="56" border="0" alt="'+this.title+'" title="'+this.title+'">';
html += ' <div class="icon '+type_icon+'"></div>';
html += ' </a>';
html += '</div>';
}
});
} else {
html = "No news for this player.";
}
if (html == "") {
html = "No news for this player.";
}
$('#newsIndexContainer').html('<div class="list">'+html+'</div>');
});
// Videos
$.getJSON( "/relatedcontent/rest/ausopen_2017/en/tags/"+pid+"?total=50&type=video", function( data ) {
var html = "";
data.results.sort(sortByDate); 
if (data.results.length > 0) {
$.each( data.results, function() {
if (this.type == 'video') {
var type_label = "Video";
var type_icon = "icon-playvideo";
html += '<div class="listitem">';
html += ' <div class="text">';
html += ' <div class="type">'+type_label+'</div>';
html += ' <a href="'+this.url+'" class="title">'+this.title+'</a>';
html += ' </div>';
html += ' <a href="'+this.url+'" class="image"><img src="'+this.thumb+'" width="100" height="56" border="0" alt="'+this.title+'" title="'+this.title+'">';
html += ' <div class="icon '+type_icon+'"></div>';
html += ' </a>';
html += '</div>';
}
});
} else {
html = "No videos for this player.";
}
if (html == "") {
html = "No videos for this player.";
}
$('#playerProfileVideos').html('<div class="list">'+html+'</div>');
});
}
