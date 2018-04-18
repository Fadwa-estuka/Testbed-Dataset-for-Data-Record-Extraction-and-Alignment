_satellite.pushAsyncScript(function(event, target, $variables){
  $(function() {
	var $ytVideoLinks = $('a[href*="youtube.com"]');
	if ($ytVideoLinks.length > 0) {
		// load yt script
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		window.trackingPlayer;
		$ytVideoLinks.on('click', function() {
			if ($(this).attr('href').indexOf('enablejsapi=1') > -1) {
				window.checkForPlayer = setInterval(function() {
					if (document.getElementById('ytplayer')) {
						trackingPlayer = new YT.Player('ytplayer', {
							events: {
								'onReady': onPlayerReady
								,'onStateChange': onPlayerStateChange
							}
						});
						clearInterval(checkForPlayer);
					}
				}, 500);
			}
		});
		
		window.onPlayerReady = function(e) {};
		window.onPlayerStateChange = function(e) {
			// unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
			var player = e.target;
			if (!player.videoId) {
				player.videoId = player.getVideoUrl();
				if (player.videoId.indexOf('?v=') > -1) {
					player.videoId = player.videoId.substring(player.videoId.indexOf('?v=') + 3);
				}
			}
			
			window.videoData = {
				id			: player.videoId
				,position	: ''
				,duration	: player.getDuration() - 1
				,event		: ''
			};
						
			// access the elapsed and total time
			try {
				videoData.position = Math.round(parseFloat(player.getCurrentTime()));
			} catch(ex) {
				videoData.position = 0;
			}
				
			if (typeof(_satellite) == 'undefined') {
				return false;
			}
			
			switch(e.data) {
				case 5:
				case -1:
					// open play complete pause
					if (player.open) {
						player.open = false;
						s.Media.close(videoData.id);
					}
					break;
				case 1:
					if (!player.open){
						player.open = true;
						s.Media.open(videoData.id, videoData.duration, 'youtube');
					}
					s.Media.play(videoData.id, videoData.position);
					break;
				case 0:
					player.open = false;
					s.Media.stop(videoData.id, videoData.position);
					s.Media.close(videoData.id);
					break;
				case 2:
					s.Media.stop(videoData.id, videoData.position);
					break;
			}
		}
	}
});
});
