var liveChannelsFile = "/en_AU/cms/feeds/live_video/live_video_iphone.json";
var panel_radioLive = false
function initChannelController(){
getChannels();
};
/*
* This method is called to update the XML object..
*/
function getChannels(){
$.getJSON(liveChannelsFile, function(data){
var channels = data.live_channels;
// Update again in 30 seconds
checkRadioChannel(channels);
setTimeout("getChannels()", 60000);
}
);
}
function checkRadioChannel(channels){
$.each(channels, function(){
if(this.channel_type == "radio") {
if(this.live == true) {
panel_radioLive = true;
if(document.location.href.indexOf("/mobile/") > -1){
$("#fullMenu .radioLink").addClass("live");
}
} else {
panel_radioLive = false;
if(document.location.href.indexOf("/mobile/") > -1){
$("#fullMenu .radioLink").removeClass("live");
}
}
}
});
}