_satellite.notify("--> HTML5 Delegate Loaded",1);

function onVideoReady(){ 

  _satellite.notify("--> HTML5 Delegate running");
/*Heartbeat Variable Values*/
aaPluginConfig.channel = "Video 102";
ahPluginConfig.ovp = "HTML5";
ahPluginConfig.sdk = "VHB1.5.2";

/* Event Listeners */
myvideo = document.getElementById('movie');
myvideo.addEventListener('play',myHandler,false);
myvideo.addEventListener('seeked',myHandler,false);
myvideo.addEventListener('seeking',myHandler,false);
myvideo.addEventListener('pause',myHandler,false);
myvideo.addEventListener('ended',myHandler,false);

/* Player Events to Heartbeat Methods */
function myHandler(e) {
var video = document.getElementsByTagName('video')[0];
/*Define video offset*/
if (video.currentTime > 0) {
mediaOffset = Math.floor(video.currentTime);
} else {
mediaOffset = 0;
};
/*Call on video start*/
if (e.type == "play") {
if (mediaOffset ==0) {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.streamType = AssetType.ASSET_TYPE_VOD;
    videoInfo.playerName = "HTML5 Player";
    videoInfo.id = document.getElementsByTagName('video')[0].getAttribute("name"); 
    videoInfo.name = document.getElementsByTagName('video')[0].getAttribute("name");  
    videoInfo.length = video.duration;
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };   
    aaPlugin.setVideoMetadata({
    pageURL: document.location,
    });    
    vpPlugin.trackVideoLoad();
    vpPlugin.trackPlay();        
} else {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };   
    vpPlugin.trackPlay();
};
};
    
/*Call on scrub start*/
if (e.type == "seeking") {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };  
    vpPlugin.trackSeekStart();
};
    
/*Call on scrub stop*/
if (e.type == "seeked") {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };  
    vpPlugin.trackSeekComplete();
};
    
/*Call on pause*/
if (e.type == "pause") {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };  
    vpPlugin.trackPause();
};
    
/*Call on video complete*/
if (e.type == "ended") {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
    var videoInfo = new VideoInfo();
    videoInfo.playhead = video.currentTime; 
    return videoInfo;
    };  
    aaPlugin.setVideoMetadata(null); 
    vpPlugin.trackComplete();
    vpPlugin.trackVideoUnload();
    mediaOffset = 0;
};
};
  
};
