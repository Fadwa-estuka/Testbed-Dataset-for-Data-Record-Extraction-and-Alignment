
_satellite.notify("--> YouTube iFrame Delegate Loaded",1);


var ytvids = {};
// YouTube Player Mapping for single embedded video (https://developers.google.com/youtube/iframe_api_reference) 
window.onYouTubeIframeAPIReady = function() {
  
  _satellite.notify("onYouTubeIframeAPIReady");
  /*Heartbeat Variable Values*/
aaPluginConfig.channel = "Live Events";
ahPluginConfig.ovp = "YouTube";
ahPluginConfig.sdk = "VHB1.5.2";
  
var heartbeatContext = ',contextData.a.contentType,contextData.a.media.name,contextData.a.media.length,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.media.view,contextData.a.media.friendlyName'; 
s.linkTrackVars=s.linkTrackVars + heartbeatContext; 
    jQuery('iframe[src*="youtube"]').each(function(){
      var ifr = $(this),
      id = '';
      if (!ifr.attr('id')) {
          var vid = ifr.attr('src').match(/h?t?t?p?s?\:?\/\/www\.youtube(-nocookie)?\.com\/embed\/([\w-]{11})(?:\?.*)?/);
          id = (vid.length > 2 ? vid[2] : '');
          ifr.attr('id',id);
      } else {
          id = ifr.attr('id');
      }
      if(!ifr.attr('src').match(/origin/)){
        var srcOri = ifr.attr('src');
        ifr.attr('src',srcOri + (srcOri.indexOf('?')>-1 ? '&' : '?') + 'origin='+document.location.protocol+'//'+document.location.host);
      }
      if (!ifr.attr('src').match(/enablejsapi=1/)) {
          var src = ifr.attr('src');
          ifr.attr('src',src + (src.indexOf('?') > -1 ? '&' : '?') + 'enablejsapi=1');
      }
      ytvids[id] = {};
       ytvids[id].player = new YT.Player(id, {
            events: {
                'onStateChange': onYTPlayerStateChange
            }
        });
    });
}

function onYTPlayerStateChange(event) {
  _satellite.notify("onYTPlayerStateChange");
  //console.log(event); 
  var vData = event.target.getVideoData();
  var id = vData.video_id;
  var vid = ytvids[id];
  var player = vid.player;
  if (event.data == YT.PlayerState.PLAYING) {
    CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
					var videoInfo = new VideoInfo();
					videoInfo.streamType = AssetType.ASSET_TYPE_VOD;
					videoInfo.playerName = "YouTube";
					videoInfo.name = event.target.getVideoData().title;
					videoInfo.id = event.target.getVideoData().video_id;
					videoInfo.length = Math.floor(event.target.getDuration());
					videoInfo.playhead = Math.floor(event.target.getCurrentTime());
					return videoInfo;
					};   
    aaPlugin.setVideoMetadata({ 
      pageURL: window.location.href,
      playerHeigh: event.target.getVideoData().width, 
      playerWidth: event.target.getVideoData().height,
      tagName: event.target.getVideoData().title,
      videoURL: event.target.getVideoUrl()
    });    
    
    if (!vid.started) {
        vid.started = true;
        _satellite.notify("***HB Start",1);      
				
				vpPlugin.trackVideoLoad();
				vpPlugin.trackPlay(); 
				} 
				else {
        _satellite.notify("***HB Play",1);				   
				vpPlugin.trackPlay();
				};
}

    if (event.data == YT.PlayerState.PAUSED) {
		CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
		var videoInfo = new VideoInfo();
		videoInfo.playhead = Math.floor(event.target.getCurrentTime()); 
		return videoInfo;
		};

    _satellite.notify("***HB Pause",1); 
		vpPlugin.trackPause();
    }
	
    if (event.data == YT.PlayerState.BUFFERING) {
		CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
		var videoInfo = new VideoInfo();
		videoInfo.playhead = Math.floor(event.target.getCurrentTime()); 
		return videoInfo;
		};
    _satellite.notify("***HB Buffering",1); 
		vpPlugin.trackPause();
    }

    if (event.data == YT.PlayerState.ENDED) {
		CustomVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
		var videoInfo = new VideoInfo();
		videoInfo.playhead = Math.floor(event.target.getCurrentTime()); 
		return videoInfo;
		};
    _satellite.notify("***HB Ended",1); 
		aaPlugin.setVideoMetadata(null); 
		vpPlugin.trackComplete();
		vpPlugin.trackVideoUnload();
		}		
}
  

