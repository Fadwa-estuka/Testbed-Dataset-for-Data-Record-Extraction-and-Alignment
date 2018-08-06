!(function ($) {
  'use strict';

  /**
   * The primary Drupal behavior housing the inline video player.
   */
  Drupal.behaviors.WWEVideoInline = {

    initialized: false,
    inlineVideoClickSelector: '.js-video-inline--btn',

    attach : function(context){

      if(this.initialized)
        return;

      this.initialized = true;

      this.bindInlineVideoListeners();
    },

    bindInlineVideoListeners : function(){
      $(document.body).on('click', this.inlineVideoClickSelector, this.inlineVideoEventHandler.bind(this));
    },


    inlineVideoEventHandler : function(event){

      event.preventDefault();

      var self = this;
      var $target = $(event.currentTarget);
      var nid = $target.attr('data-nid');
      var playlistId = $target.attr('data-playlist-id');
      var id = this.getInlineContainerId(nid);
      var inlineElement = this.createInlineElement(event.currentTarget, id);
      var videoData = JSON.parse($target.attr('data-video'));
      var adData = videoData.ad_data;
      var takeoverBg = videoData.takeover_bg;
      var src = videoData.playlist;

      // Stop all other players.
      this.stopAllPlayers();

      // Create the video player.
      var videoInstance = wweVideo.create(inlineElement.find('.wwe-video--inline-player')[0],{
        config: this.applyConfig({
          playlist: src,
          playlistId: playlistId
        }, $target),
        adData: adData,
        takeoverBg: takeoverBg
      });


      /**
       * We need to add a play event to fix a bug with the first pre-roll
       * on iOS devices not playing.
       */
      videoInstance.jw.once('play',function(){

        var currentItem = videoInstance.jw.getPlaylistItem();

        // If first ad didn't play, trigger it here:
        if(!currentItem.ads_disabled && !videoInstance.initialAdPlayed) {

          this.pause(true);

          // Get the ad tag that was already set so we don't
          // have to make another.
          if(currentItem.adschedule.adbreak1.ad.tag) {
            this.play(true);
            this.playAd(currentItem.adschedule.adbreak1.ad.tag);
          }
        }

      });

      /**
       * For above `play` event callback, we need to set a variable
       * when an inline ad is first played.
       */
      videoInstance.jw.on('adPlay',function(){
        videoInstance.initialAdPlayed = true;
      });

      // Let instance know this is an inline video.  Right now
      // this is strictly for conviva player name tracking.
      videoInstance.isInline = 'HomePage';
      videoInstance.isEventCategory = 'Video Player_inline';

      // Get the rest of the playlist.
      self.getEntirePlaylist(event, videoInstance);

      // Apply video active class.
      self.setInlineVideoActive(event.currentTarget);

    },


    /**
     * Scroll to inline element.
     *
     * @param $el
     */
    // scrollToInlineVideo : function($el) {
    //
    //   var headerHeight = $('#mini-panel-header_navigation').height();
    //   var additionalMargin = 50;
    //   var scrollTo = ($el.offset().top - (additionalMargin + headerHeight));
    //
    //   // Hide Video Highlights
    //   Drupal.behaviors.WWEVideoHighlights.hideHighlights();
    //
    //   $('html, body').animate({
    //     scrollTop: scrollTo
    //   }, 500).promise().then(function(){
    //     // Set timeout because wweVideoHighlights listens on a timeout.
    //     // Trick WWEVideoHighlights in case we scrolled down.
    //     setTimeout(function(){
    //       Drupal.behaviors.WWEVideoHighlights.scrollTop = $(window).scrollTop();
    //       Drupal.behaviors.WWEVideoHighlights.hideHighlights();
    //     });
    //   });
    //
    // },


    /**
     * This is where we apply any previously saved config, as well
     * as some static config like share settings.
     *
     * @param config
     * @param $target
     */
    applyConfig : function(config, $target){

      var startConfig = {};

      /*
        ===============================================================
        [START] Comment out this code for initial inline player release
        ===============================================================

      // If there is a previously set playlist item index, set it.
      var prevPlaylistIndex = $target.data('video-playlist-index');
      if(!!prevPlaylistIndex) {
        startConfig.startIndex = prevPlaylistIndex;
      }

      // If the is a previous start position, set it.
      var prevPosition = $target.data('video-playlist-index');
      if(!!prevPlaylistIndex) {
        startConfig.startPosition = prevPosition;
      }

      // If there is a previously set config, just use that.
      var prevConfig = $target.data('video-config');
      if(!!prevConfig) {
        return $.extend(prevConfig,startConfig);
      }
       ===============================================================
       [END] Comment out this code for initial inline player release
       ===============================================================
      */

      return $.extend(config,startConfig);
    },


    /**
     * This is bound to player ready event, it is needed
     * because we only store initial video for playlist
     * in the dom.
     *
     * @param event
     * @param videoInstance
     */
    getEntirePlaylist : function(event, videoInstance){
      var url = this.getPlaylistUrl(videoInstance);
      var self = this;
      var entirePlaylist = [];

      $.getJSON(url)
        .then(function(data){

          var playlistData = data.playlist;
          playlistData.shift();

          var jwConfig = videoInstance.jw.getConfig();
          var playlistId = jwConfig.playlistId || 0;

          // Setup ad tags for all videos.
          entirePlaylist = wweVideo.appendAdTagsToPlaylists(playlistData, playlistId, data.ad_data);

          // On playlist complete we need to add the rest
          // of the playlist that we got from the json call.
          videoInstance.jw.on('playlistComplete',function(event){

            if(!videoInstance.entirePlaylistLoaded) {

              // One time only, when a new playlist is loaded, play the video.
              videoInstance.jw.once('playlist', function() {

                setTimeout(function(){
                  if(!videoInstance.getIsShowingEndCard()) {
                    videoInstance.jw.play(true);
                  }
                },1000);

              });

              // Load the new playlsit
              videoInstance.entirePlaylistLoaded = true;
              videoInstance.jw.load(entirePlaylist);

              videoInstance.entirePlaylistLoaded = true;
            }
          });

        });

    },


    getPlaylistUrl : function(videoInstance){
      var index = 0;
      var playlist = videoInstance.jw.getPlaylist();
      var videoId = playlist[index].nid;
      var playlistId = videoInstance.config.playlistId || '0';
      var playlistOffset = 0;
      var parentPlaylistId = 0;
      var videoOffset = 0;
      return '/api/video-playlist/' + videoId + '/' + playlistId + '/' + playlistOffset + '/' + parentPlaylistId + '/' + videoOffset;
    },

    /**
     * Create an ID for the player.
     *
     * @param nid
     * @returns {string}
     */
    getInlineContainerId : function(nid){
      return 'InlineVideo_' + nid;
    },

    getParentContainer : function($childEl){

      var feedCard = $childEl.parents('.wwe-feed-cards--card__video');
      if(feedCard.length) {
        return feedCard;
      }

      var newsBreaker = $childEl.parents('.wwe-breaker--item-wrapper');
      if(newsBreaker.length) {
        return newsBreaker;
      }

      var videoBreaker = $childEl.parents('.wwe-breaker--item-wrapper');
      if(videoBreaker.length) {
        return videoBreaker;
      }

      var showContextualHero = $childEl.parents('.show-contextual__item--0');
      if(showContextualHero.length) {
        return showContextualHero.find('.show-contextual__item__image');
      }

      var showContextual = $childEl.parents('.show-contextual__item');
      if(showContextual.length) {
        return showContextual;
      }

      var embeddedVideo = $childEl.parents('.wwe-embed--item');
      if(embeddedVideo.length) {
        return embeddedVideo.find('.content');
      }

      return $childEl.parent();
    },

    isInBreaker : function($childEl){
      var breaker = $childEl.parents('.wwe-breaker--content');
      if(breaker.length) {
        return breaker;
      }
      var videoBreaker = $childEl.parents('.video-breaker--content');
      if(videoBreaker.length) {
        return videoBreaker;
      }
      var showContextualBreaker = $childEl.parents('.show-contextual--items-wrapper');
      if(showContextualBreaker.length) {
        return showContextualBreaker;
      }
      return null;
    },

    createInlineElement : function(thumbElement, id){
      var $childEl = $(thumbElement);
      var parent = this.getParentContainer($childEl);
      var $inlineContainer = $(this.getInlineElementTpl(id));
      // if(parent.hasClass('wwe-feed-cards--card__video') || parent.hasClass('wwe-feed-cards--card__video_playlist')) {
      //   $inlineContainer.insertBefore(parent.find('.wwe-feed-cards--copy'));
      // }else{
      $inlineContainer.appendTo(parent);
      // }
      return $inlineContainer;
    },

    getInlineElementTpl : function(id){
      return '<div class="wwe-video--inline-container">' +
          '<div class="wwe-video--inline-player" id="' + id + '"><video autoplay preload="auto" src="about:blank"></video></div>' +
          '<div id="wwe-video--companion"></div>' +
        '</div>';
    },

    setInlineVideoActive : function(el){
      var $childEl = $(el);
      this.getParentContainer($childEl)
        .data('video-original-target',el)
        .addClass('inline-player--active');

      var inBreaker = this.isInBreaker($childEl);
      if(inBreaker) {
        inBreaker.addClass('inline-player--active-breaker')
      }

      // Disable video highlights
      Drupal.behaviors.WWEVideoHighlights.disableHighlights();
    },

    setInlineVideoInactive : function(player,$childEl){
      this.getParentContainer($childEl).removeClass('inline-player--active');
      var inBreaker = this.isInBreaker($childEl);
      if(inBreaker) {
        inBreaker.removeClass('inline-player--active-breaker')
      }

      // Set player shutdown data.
      if(player) {
        var currentConfig = player.getConfig();
        var currentPlaylistItem = player.getPlaylistIndex();
        var currentVideoPosition = player.getPosition();
        player.remove();
        if (currentPlaylistItem > -1) {
          $childEl.data('video-config', currentConfig);
          $childEl.data('video-playlist-index', currentPlaylistItem);
          $childEl.data('video-position', currentVideoPosition);
        }
      }

      // Enable video highlights
      Drupal.behaviors.WWEVideoHighlights.enableHighlights();

    },


    stopAllPlayers : function(){
      var $activePlayers = $('.inline-player--active');
      for(var i = 0; i < $activePlayers.length; ++i) {
        var $curParent = $($activePlayers[i])
        var $curPlayer = $curParent.find('.jwplayer');
        var curPlayerOrigTarget = $curParent.data('video-original-target');
        var $curPlayerOrigTarget = $(curPlayerOrigTarget);
        var playerId = $curPlayer.attr('id');
        var _jwplayer = jwplayer(playerId);

        // Remove the JW Player.
        this.setInlineVideoInactive(_jwplayer, $curPlayerOrigTarget);

        // Remove the actual player element.
        $curParent.find('.wwe-video--inline-container').remove();
      }
    },

    playInlineVideo : function(){},

    expandVideo : function(){},

    collapseVideos : function(){},

    collapseVideo : function(){},

    initializeVideo : function(){}

  };
})(jQuery);
