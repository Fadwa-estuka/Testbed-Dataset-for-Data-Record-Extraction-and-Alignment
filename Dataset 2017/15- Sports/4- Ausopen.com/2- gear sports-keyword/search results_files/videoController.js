var xmlVideoFile = "/en_AU/xml/gen/console/live_video.json";
//var xmlVideoFile = "/en_AU/xml/man/test_console/live_video.json";
var ustaVideoController = new VideoController();
var geoblock = "false";
function geoBlock(geo,geovalue){
if (geovalue)
geovalue = "true";
else{
geovalue = "false";
}
$.cookie("geo_cookie",geovalue,{ path: '/' });
geoblock = geovalue;
}
/********************************************************************
get or set geoblock cookie
********************************************************************/
$(function(){
if($.cookie("geo_cookie")){
geoblock = $.cookie("geo_cookie");
} else {
var g = document.createElement("script");
g.src = "http://aogeo.edgesuite.net/aotvgeo/geocheck.js";
g.type="text/javascript";
document.getElementsByTagName("head")[0].appendChild(g);
}
});
function initVideoController(callbackFunction){
registerCallback(callbackFunction);
checkVideoJson();
};
/*
* This method is called to update the XML object..
*/
function checkVideoJson(){
$.getJSON(xmlVideoFile, function(json){
ustaVideoController.loadData(json)
// Update again in 30 seconds
runCallbackFunction();
setTimeout("checkVideoJson()", 30000);
}
);
}
function updateVideoObject(jsonData){
ustaVideoController.loadData(jsonData)
}
function VideoController(){
this.channels = undefined;
this.callback = undefined;
this.registerCallback = registerCallback;
this.loadData = loadData;
this.checkCourtVideo = checkCourtVideo;
this.getChannel = getChannel;
}
function registerCallback(functionName){
this.callback = functionName;
}
function runCallbackFunction(){
if(this.callback != undefined){
eval(this.callback);
}
}
function loadData(jsonData){
this.channels = jsonData.channels;
}
function checkCourtVideo(courtId,promo){
var videoUrl = '';
if(this.channels != undefined){
for(var i = 0; i < this.channels.length; i++){
if(this.channels[i].courtId == courtId && this.channels[i].live){
if (!promo) {
// We matched the court and it's live
videoUrl = this.channels[i].launchUrl;
// Stop looping as we found the court
i = this.channels.length;
} else {
videoUrl = "javascript:launchLC('"+courtId+"','','','',"+false+",'"+promo+"')";
}
}
}
}
return videoUrl;
}
function getChannel(courtId){
var returnedChannel = undefined;
if(this.channels != undefined){
for(var i = 0; i < this.channels.length; i++){
if(this.channels[i].courtId == courtId){
returnedChannel = this.channels[i];
i = this.channels.length;
}
}
}
return returnedChannel;
}
/*
* This returns the highest channel from the array or a blank string if no channels are live
*/
VideoController.prototype.getDefaultChannel = function(){
var returnedCourtId = undefined;
if(this.channels != undefined){
for(var i = 0; i < this.channels.length; i++){
if(this.channels[i].live){
returnedCourtId = this.channels[i].courtId;
i = this.channels.length;
}
}
}
return returnedCourtId;
}