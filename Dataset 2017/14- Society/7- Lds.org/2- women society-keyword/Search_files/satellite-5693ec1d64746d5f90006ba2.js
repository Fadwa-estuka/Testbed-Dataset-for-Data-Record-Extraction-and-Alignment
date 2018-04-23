_satellite.notify("--> Heartbeat Bridge Loaded",1);

//Initialize Heartbeat Variables
var Heartbeat = ADB.va.Heartbeat;
var HeartbeatConfig = ADB.va.HeartbeatConfig;
var VideoPlayerPlugin = ADB.va.plugins.videoplayer.VideoPlayerPlugin;
var VideoPlayerPluginConfig = ADB.va.plugins.videoplayer.VideoPlayerPluginConfig;
var AdobeAnalyticsPlugin = ADB.va.plugins.aa.AdobeAnalyticsPlugin;
var AdobeAnalyticsPluginConfig = ADB.va.plugins.aa.AdobeAnalyticsPluginConfig;
var AdobeHeartbeatPlugin = ADB.va.plugins.ah.AdobeHeartbeatPlugin;
var AdobeHeartbeatPluginConfig = ADB.va.plugins.ah.AdobeHeartbeatPluginConfig;
var VideoInfo = ADB.va.plugins.videoplayer.VideoInfo;
var AssetType = ADB.va.plugins.videoplayer.AssetType;
//var AdBreakInfo = ADB.va.plugins.videoplayer.AdBreakInfo;
//var AdInfo = ADB.va.plugins.videoplayer.AdInfo;
//var ChapterInfo = ADB.va.plugins.videoplayer.ChapterInfo;
//var QoSInfo = ADB.va.plugins.videoplayer.QoSInfo;

//Custom Heartbeat Delegate
var HeartbeatDelegate = ADB.va.HeartbeatDelegate;
$.extend(CustomHeartbeatDelegate.prototype, HeartbeatDelegate.prototype);
function CustomHeartbeatDelegate() {} 
CustomHeartbeatDelegate.prototype.onError = function(errorInfo) {
    _satellite.notify("Heartbeat error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
};

//Custom Adobe Heartbeat Plugin Delegate
var AdobeHeartbeatPluginDelegate = ADB.va.plugins.ah.AdobeHeartbeatPluginDelegate;
$.extend(CustomAdobeHeartbeatPluginDelegate.prototype, AdobeHeartbeatPluginDelegate.prototype);
function CustomAdobeHeartbeatPluginDelegate() {}
CustomAdobeHeartbeatPluginDelegate.prototype.onError = function(errorInfo) {
    _satellite.notify("AdobeHeartbeatPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
};

//Custom Adobe Analytics Delegate
var AdobeAnalyticsPluginDelegate = ADB.va.plugins.aa.AdobeAnalyticsPluginDelegate;
$.extend(CustomAdobeAnalyticsPluginDelegate.prototype, AdobeAnalyticsPluginDelegate.prototype);
function CustomAdobeAnalyticsPluginDelegate() {}
CustomAdobeAnalyticsPluginDelegate.prototype.onError = function(errorInfo) {
    _satellite.notify("AdobeAnalyticsPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
};

//Custom Video Player Delegate
var VideoPlayerPluginDelegate = ADB.va.plugins.videoplayer.VideoPlayerPluginDelegate;
$.extend(CustomVideoPlayerPluginDelegate.prototype, VideoPlayerPluginDelegate.prototype);
function CustomVideoPlayerPluginDelegate(player) {}
//Video Content Info Object
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.streamType;
videoInfo.playerName;
videoInfo.id; 
videoInfo.name; 
videoInfo.length; 
videoInfo.playhead; 
return videoInfo;
};  
/*
//Ad Break Info Object
CustomVideoPlayerPluginDelegate.prototype.getAdBreakInfo = function() {
var adBreakInfo = new AdBreakInfo();
adBreakInfo.playerName; 
adBreakInfo.name;
adBreakInfo.postion; 
adBreakInfo.startTime; 
return adBreakInfo;
};
//Ad Info Object
CustomVideoPlayerPluginDelegate.prototype.getAdInfo = function() {
var adInfo = new AdInfo();
adInfo.id; 
adInfo.length; 
adInfo.position; 
adInfo.name; 
return adInfo;
};
//Chapter Info Object
CustomVideoPlayerPluginDelegate.prototype.getChapterInfo = function() {
var chapterInfo = new ChapterInfo();
chapterInfo.name; 
chapterInfo.length; 
chapterInfo.position; 
chapterInfo.startTime;
return chapterInfo;
};
//QoS Info Object
CustomVideoPlayerPluginDelegate.prototype.getQoSInfo = function() {
var qosInfo = new QoSInfo();
qosInfo.bitrate; 
qosInfo.fps; 
qosInfo.droppedFrames; 
qosInfo.startupTime; 
return qosInfo;
};    
*/
  
// Video Player Plugin
var vpPluginDelegate = new CustomVideoPlayerPluginDelegate();
var vpPlugin = new VideoPlayerPlugin(vpPluginDelegate);
var vpPluginConfig = new VideoPlayerPluginConfig();
if(_satellite.settings.isStaging==true){     
vpPluginConfig.debugLogging = true; }
else {
vpPluginConfig.debugLogging = false;}    
vpPlugin.configure(vpPluginConfig);

// Adobe Analytics Plugin
var aaPluginDelegate = new CustomAdobeAnalyticsPluginDelegate();
var aaPlugin = new AdobeAnalyticsPlugin(s, aaPluginDelegate); //appMeasurement needs to have the same object name as in the AppMeasurement.js file
var aaPluginConfig = new AdobeAnalyticsPluginConfig();
aaPluginConfig.channel; 
if(_satellite.settings.isStaging==true){    
aaPluginConfig.debugLogging = true;}
else {
aaPluginConfig.debugLogging = false;}
aaPlugin.configure(aaPluginConfig);

// Adobe Heartbeat Plugin
var ahPluginDelegate = new CustomAdobeHeartbeatPluginDelegate();
var ahPlugin = new AdobeHeartbeatPlugin(ahPluginDelegate);
var ahPluginConfig = new AdobeHeartbeatPluginConfig("lds.hb.omtrdc.net", _satellite.getVisitorId().marketingCloudOrgID);
ahPluginConfig.ovp;
ahPluginConfig.sdk;
ahPluginConfig.ssl=true;
if(_satellite.settings.isStaging==true){      
ahPluginConfig.debugLogging = true; }
else {
ahPluginConfig.debugLogging = false;}    
ahPlugin.configure(ahPluginConfig);

// Heartbeat
var plugins = [vpPlugin, aaPlugin, ahPlugin];
var heartbeatDelegate = new CustomHeartbeatDelegate();
var heartbeat = new Heartbeat(heartbeatDelegate, plugins);
var heartbeatConfig = new HeartbeatConfig();
if(_satellite.settings.isStaging==true){    
heartbeatConfig.debugLogging = true; }
else {
heartbeatConfig.debugLogging = false;
}
heartbeat.configure(heartbeatConfig);
