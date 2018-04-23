//This code only works on the first player found on the page
_satellite.notify("--> JWPlayer Delegate Loaded",1);

/*Heartbeat Variable Values*/
aaPluginConfig.channel = "Live Streams";
ahPluginConfig.ovp = "JWPlayer6.12";
ahPluginConfig.sdk = "VHB1.5.2";

/*JW Player API*/
var triesJW = 0;
function checkJW() {
if(typeof(jwplayer) != "undefined") {
  if(typeof(jwplayer(0)) != "undefined") {
    _satellite.notify('--> JWPlayer Found!');
    trackHeartbeat()
  }
} else {
  triesJW++;
  if (triesJW < 10) {
    _satellite.notify('--> Attempt '+triesJW+': JWPlayer not found, retrying in 0.3 seconds...');
    window.setTimeout(checkJW,300);
  } else {
    _satellite.notify('--> JWPlayer not found after 10 tries, aborting...');
  }
}
}

var JWduration = null;
var JWstart    = null;
var JWend      = null;
function trackHeartbeat() {  
_satellite.notify("--> JWPlayer Tracking Started",1);
var heartbeatContext = ',contextData.a.contentType,contextData.a.media.name,contextData.a.media.length,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.media.view,contextData.a.media.friendlyName'; 
s.linkTrackVars=s.linkTrackVars + heartbeatContext;
LDS.track.initialPlay = false;

//get current video title   
function mediaName(){
  var current = jwplayer(0).getPlaylistItem();
  return(current.title);
}   
  
function mediaID(){
	var current = jwplayer(0).getPlaylistItem();
	return(current.file);
} 

function timezoneAdjustMilliseconds(h,z) {  
    var d = new Date();
    z = z ? z : 0;
		z = parseFloat(z);
		if (s._tpDST) {
			var dso = s._tpDST[d.getFullYear()].split(/,/);
			ds = new Date(dso[0] + '/' + d.getFullYear());
			de = new Date(dso[1] + '/' + d.getFullYear());
			if (h == 'n' && d > ds && d < de) {
				z = z + 1;
			} else if (h == 's' && (d > de || d < ds)) {
				z = z + 1;
			}
		}
    return z*60*60*1000;
}
  
function mediaPosition() {
  var events = LDS.track.liveEvents||{};
  var tza = timezoneAdjustMilliseconds('n','-7');
  var cd = new Date();
  //cd = new Date(cd.getTime() + (cd.getTimezoneOffset()*60*1000));
  var vst = cd;
  if(window.JWstart) {
	  vst = window.JWstart;
	  var et = window.JWend||new Date(vst.getTime()+(mediaDuration()*1000));
  } else {
	  for(i in events) {
		var st = new Date(events[i].year,events[i].month-1,events[i].day,events[i].startHour,events[i].startMin,0,0);
			st = new Date(st.getTime() - (st.getTimezoneOffset()*60*1000) - tza);
		var et = new Date(events[i].year,events[i].month-1,events[i].day,events[i].endHour  ,events[i].endMin  ,0,0);
			et = new Date(et.getTime() - (et.getTimezoneOffset()*60*1000) - tza);
			//_satellite.notify("--> Event "+i+"\r\n ST: "+st+"\r\n ET: "+et);
		if(cd > st && cd < et) {
		  vst = st;
		  window.JWstart = st;
		  window.JWend   = et;
		  _satellite.notify("--> Event "+i+"\r\n VST: "+vst+"\r\n CD: "+cd+"\r\n ET: "+et);
		}
	  }
  }
	var ts = new Date(new Date().getTime() + (jwplayer(0).getPosition()*1000));
	//var ts = new Date(new Date().getTime() + (new Date().getTimezoneOffset()*60*1000) + (jwplayer(0).getPosition()*1000));
  if(vst < cd) {
    var fts = new Date(ts.getTime() - vst.getTime());
    _satellite.notify("--> Calculated Position: "+Math.round(fts.getTime()/1000)+"\r\n TS: "+ts+"\r\n CD: "+cd+"\r\n VST: "+vst,1);
    if(fts > 0) return Math.round(fts.getTime()/1000);
  }
  _satellite.notify("--> Fallback mediaPosition: "+Math.abs(Math.round(jwplayer(0).getDuration() + jwplayer(0).getPosition()))+"\r\n VST: "+vst+"\r\n CD: "+cd,1);
	return Math.abs(Math.round(jwplayer(0).getDuration() + jwplayer(0).getPosition()));
}

function mediaDuration() {
  if(window.JWduration) {
	  _satellite.notify("Duration previously calculated: "+window.JWduration);
	  return window.JWduration;
  }
  var events = LDS.track.liveEvents||{};
  var tza = timezoneAdjustMilliseconds('n','-7');
  var cd = new Date();
  //cd = new Date(cd.getTime() + (cd.getTimezoneOffset()*60*1000));
  for(i in events) {
    var st = new Date(events[i].year,events[i].month-1,events[i].day,events[i].startHour,events[i].startMin,0,0);
		st = new Date(st.getTime() - (st.getTimezoneOffset()*60*1000) - tza);
    var et = new Date(events[i].year,events[i].month-1,events[i].day,events[i].endHour  ,events[i].endMin  ,0,0);
		et = new Date(et.getTime() - (et.getTimezoneOffset()*60*1000) - tza);
    if(cd > st && cd.getTime() < (et.getTime()+(6*60*60*1000))) {
	  window.JWstart = st;
	  window.JWend   = et;
	  var dur = (et.getTime() - st.getTime()) / 1000;
	  _satellite.notify("--> Event "+i+"\r\n Duration: "+dur+"\r\n ST: "+st+"\r\n ET: "+et+"\r\n CD: "+cd);
	  window.JWduration = dur;
	  return dur;
    }
  }
_satellite.notify("--> Hard-coded mediaDuration",1); 
var hardcodeduration = 60*60*12; //12 hours in seconds
window.JWduration = hardcodeduration;
return hardcodeduration; 
}

jwplayer(0).onPlay( function(event){
/* Check for start of video */
if(LDS.track.initialPlay == false){    
//Video Start
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.streamType = "live"; //hardcoded  
videoInfo.playerName = "JWPlayer6.12";
videoInfo.id = mediaID(); 
videoInfo.name = mediaName(); 
videoInfo.length = mediaDuration();     
videoInfo.playhead = mediaPosition(); 
return videoInfo;
};   
aaPlugin.setVideoMetadata({ 
});    
vpPlugin.trackVideoLoad();
vpPlugin.trackPlay();    
_satellite.notify("--> JW HB Start",1); 
LDS.track.initialPlay = true;    
}else{
//Video Continue Playback    
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.streamType = "live"; //hardcoded
videoInfo.playerName = "JWPlayer6.12";
videoInfo.id = mediaID(); 
videoInfo.name = mediaName(); 
videoInfo.length = mediaDuration();          
videoInfo.playhead = mediaPosition();
return videoInfo;
};   
vpPlugin.trackPlay();
_satellite.notify("--> JW HB Play",1);
}
})

jwplayer(0).onComplete( function(event) {  
//Video Complete
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.length = mediaDuration();        
videoInfo.playhead = mediaPosition();
return videoInfo;
};  
aaPlugin.setVideoMetadata(null); 
vpPlugin.trackComplete();
vpPlugin.trackVideoUnload();
_satellite.notify("--> JW HB Ended",1);
})

jwplayer(0).onPause( function(event){
//Video Pause
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.length = mediaDuration();          
videoInfo.playhead = mediaPosition();
return videoInfo;
};  
vpPlugin.trackPause();
_satellite.notify("--> JW HB Pause",1);
})

jwplayer(0).onBuffer( function(event){
//Video Pause
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.length = mediaDuration();          
videoInfo.playhead = mediaPosition();
return videoInfo;
};  
vpPlugin.trackBufferStart();
_satellite.notify("--> JW HB Buffering",1);
vpPlugin.trackBufferComplete();
})                    

jwplayer(0).onSeek( function(event){
//Video Complete
CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
var videoInfo = new VideoInfo();
videoInfo.length = mediaDuration();         
videoInfo.playhead = mediaPosition();
return videoInfo;
}; 
vpPlugin.trackSeekStart();
_satellite.notify("--> JW HB Seeking",1);
vpPlugin.trackSeekComplete();
})
    
};

$( "[data-omniture*='Video']" ).click(function() {
 checkJW()
});
