_satellite.notify("--> Brightcove Smart Delegate Loaded",1);

/*Heartbeat Variable Values*/
aaPluginConfig.channel = "Media";
ahPluginConfig.ovp = "Brightcove";
ahPluginConfig.sdk = "VHB1.5.2";

/*Brightcove API*/
function brightcoveLoaded(experienceID) {
    player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    modCon = player.getModule(brightcove.api.modules.APIModules.CONTENT);
    modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, onTemplateReady);
}

function onTemplateReady(evt) {
    modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, onPlay);
    modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onStop);
	modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onProgress);
    modVP.addEventListener(brightcove.api.events.MediaEvent.SEEK_NOTIFY, onSeekNotify);
}

/*Player Events*/
function onPlay(evt){
var heartbeatContext = ',contextData.a.contentType,contextData.a.media.name,contextData.a.media.length,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.media.view,contextData.a.media.friendlyName'; 
s.linkTrackVars=s.linkTrackVars + heartbeatContext;
/* Check for start of video */
if (evt.position==0){
_satellite.notify('BrightcoveSmart-> start -> playhead: ' + evt.position,1);  
//Video Start
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.streamType = AssetType.ASSET_TYPE_VOD;
videoInfo.playerName = "Brightcove Smart Player";
videoInfo.id = (evt.media.id).toString(); 
videoInfo.name = evt.media.displayName; 
videoInfo.length = evt.duration; 
videoInfo.playhead = evt.position; 
return videoInfo;
};   
aaPlugin.setVideoMetadata({ 
referenceID: evt.media.referenceId || evt.media.referenceID, 
playerType: player.type
});    
vpPlugin.trackVideoLoad();
vpPlugin.trackPlay();    
}else{
_satellite.notify('BrightcoveSmart-> resume -> playhead: ' + evt.position,1);   
//Video Continue Playback    
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.streamType = AssetType.ASSET_TYPE_VOD;
videoInfo.playerName = "Brightcove Smart Player";
videoInfo.id = (evt.media.id).toString(); 
videoInfo.name = evt.media.displayName; 
videoInfo.length = evt.duration; 
videoInfo.playhead = evt.position; 
return videoInfo;
};   
vpPlugin.trackPlay();
}}

function onStop(evt){
if (evt.position==evt.duration) {
_satellite.notify('BrightcoveSmart-> complete by onStop -> playhead: ' + evt.position,1);  
//Video Complete
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.playhead = evt.position; 
return videoInfo;
};  
aaPlugin.setVideoMetadata(null); 
vpPlugin.trackComplete();
vpPlugin.trackVideoUnload();
}else{
_satellite.notify('BrightcoveSmart-> pause begin -> playhead: ' + evt.position,1);  
//Video Pause
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.playhead = evt.position; 
return videoInfo;
};  
vpPlugin.trackPause();
}}

function onSeekNotify(evt){
_satellite.notify('BrightcoveSmart-> seek -> playhead: ' + evt.position,1);  
//Video Complete
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.playhead = evt.position; 
return videoInfo;
}; 
vpPlugin.trackSeekStart();
vpPlugin.trackSeekComplete();
}

function onProgress(evt){
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.playhead = evt.position; 
return videoInfo;
};
}
