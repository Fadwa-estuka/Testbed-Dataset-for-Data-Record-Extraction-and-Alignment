/**
 * WWE Video Instance
 *
 * Main File for WWE video instances
 *
 */
var testVideoTime = new Date();
!(function($){

  var WWEVideoInstance = function(element, videoConfig) {

    var _instance = {


      /**
       * House the jw instance here.
       */
      jw : null,

      /**
       * The default config for JW Player.
       *
       * A `file` or `playlist` param must also be provided at a minimum.
       */
      config : {
        allowscriptaccess: 'always',
        autostart: 'true',
        type: 'hls',
        width: '100%',
        height: '100%',
        aspectratio: '16:9',
        stagevideo: 'false',
        abouttext: 'WWE, Inc.',
        aboutlink: 'http://www.wwe.com',
        stretching: 'uniform',
        androidhls: 'true',
        hlshtml: 'true',
        flashplayer: '/sites/all/modules/custom/ct_video/assets/jw_player/jwplayer.flash.swf',
        primary: 'flash',
        cast: {
          appid: 'C6E6F44B',
          loadscreen: '//cdn1.wwe.com/hd_video1/wwe/vod_assets/wwe_ccbg01.png',
          endscreen: '//cdn1.wwe.com/hd_video1/wwe/vod_assets/wwe_ccbg01.png',
          logo: '//cdn1.wwe.com/hd_video1/wwe/vod_assets/wwe_cc_bug02.png'
        }
      },

      /**
       * Set to true to print debugging to screen.
       */
      debug: location.search.indexOf('debug') >= 0,

      adTag: null,
      isShowingEndCard : false,
      entirePlaylistLoaded : false,
      takeoverBg : 'about:blank',
      shareOverlayOpen : false,
      firstVideoCompleted : false,


      /**
       * Initialize wweVideoInstance, return a new video instance.
       *
       * @returns {*}
       */
      init : function(){

        if(!element)
          return console.warn('[WWE Video]', 'No element provided.');

        // Setup the variables we need to instantiate.
        var videoEl = element;
        var playlistId = videoConfig.config.playlistId || '0';
        var initialVideo = (videoConfig.config.playlist && videoConfig.config.playlist[0]) ? videoConfig.config.playlist[0] : {};
        var videoId = initialVideo.nid;
        var initialAdDisabled = !!initialVideo.ads_disabled;

        // Set the element
        this.element = element;

        // Set the element
        this.takeoverBg = videoConfig.takeoverBg;

        // Set Ad Data on the instance so we can use it again.
        this.adData = videoConfig.adData || {};

        // Set breakpoint so we can use it again.
        this.breakpoint = wweVideo.getBreakpoint();

        // Attach the ad config.
        this.config.advertising = {
          client: "googima"
        };

        // We set special autoplay property for android ads.
        if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
          this.config.advertising.autoplayadsmuted = true;
        }

        // Setup ad tags for each video in the playlist.
        this.config.playlist = wweVideo.appendAdTagsToPlaylists(videoConfig.config.playlist, playlistId, videoConfig.adData);

        // Merge the config.
        this.config = wweVideo.extendObject(this.config, videoConfig.config || {});

        // Initialize JW Player.
        this.jw = jwplayer(videoEl)
          .setup(this.config)
          .onReady(wweVideo.videoEvents.ready.bind(this));

        // Attach events to video player.
        wweVideo.attachVideoEvents(this);

        return this;
      },

      /**
       * Show a video overlay.
       *
       * @param content
       */
      showVideoOverlay : function(content){
        var $overlayDiv = this.getOverlayDiv();
        $overlayDiv.html(content);
      },

      /**
       * Hide video overlay.
       */
      hideVideoOverlay : function(){
        var $overlayDiv = this.getOverlayDiv();
        if(!$overlayDiv) return;
        $overlayDiv.remove();
      },

      /**
       * Return or create and return an overlay element.
       * @returns {*}
       */
      getOverlayDiv : function () {
        var playerEl = document.getElementById(this.jw.id);
        var $playerParent = $(playerEl);
        var $overlayDiv = $playerParent.find('.wwe-video-take-over--network-card');
        if(!$overlayDiv.length) {
          $overlayDiv = $('<div class="wwe-video-take-over--network-card"></div>').css('background-image','url(' + this.takeoverBg + ')');
          $playerParent.append($overlayDiv);
        }
        return $overlayDiv;
      },


      /**
       * Getter for determining if end card is being shown.
       *
       * @returns {boolean}
       */
      getIsShowingEndCard : function(){
        return !!this.isShowingEndCard;
      },


      /**
       * Return the current playlist count.
       *
       * @returns {*|number}
       */
      getPlaylistCount : function(){
        var playlist = this.jw.getPlaylist();
        return playlist.length || 0;
      },


      /**
       * Run a countdown on video end cards.
       */
      overlayCountdown : function(){

        var self = this;
        var index = self.jw.getPlaylistIndex();

        // Begin the countdown.
        this.isShowingEndCard = true;
        var $count = $('#next-video-countdown');
        var intid = setInterval(function () {
          var n = $count.text();
          n--;

          if (n === 0) {

            self.isShowingEndCard = false;
            clearInterval(intid);
            self.hideVideoOverlay();

            if ((index + 1) < self.getPlaylistCount()) {
              // Set the jw value to play.
              self.jw.play(true);
            }

          }
          else {
            $count.text(n);
            // We need to pause the video, when the count is going on.
            self.jw.pause(true);
          }
        }, 1000);

        return intid;

      }

    };


    // Initialize the WWEVideoPlayer
    return _instance.init();


  };

  // Make sure wweVideo is bound to window scope.
  window.WWEVideoInstance = WWEVideoInstance;

})(jQuery);
