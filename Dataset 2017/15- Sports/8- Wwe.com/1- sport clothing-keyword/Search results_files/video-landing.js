!(function ($) {
  'use strict';

  /**
   * The primary Drupal behavior housing the video landing page.
   */

    Drupal.behaviors.WWEVideoLanding = {


      initialized : false,
      videoPlayerInstance : null,
      deferredJsToLoad : 0,
      deferredJsLoaded : 0,
      landingElementsInitialized : false,
      statePopHappened : false,
      hasFirstVideoPlayBegun: false,


      attach : function(context, settings) {

        if(!settings.WWEVideoLanding)
          return;

        if(this.initialized)
          return;

        this.initialized = true;

        var initialPlaylist = settings.WWEVideoLanding.initialPlaylist;
        var initialPlaylistId = settings.WWEVideoLanding.initialPlaylistId;
        var config = {
          playlist: initialPlaylist.playlist,
        };

        // If there is a playlist ID include it in config for ad settings.
        if(!!initialPlaylistId) {
          config.playlistId = initialPlaylistId;
        }

        /* Initialize the scrollbar */
        SimpleScrollbar.initEl(document.querySelector('.wwe-videobox--playlist--items'));

        this.videoPlayerInstance = wweVideo.create('wwe-videobox--videoarea', {
          config: config,
          adData : initialPlaylist.ad_data
        });

        this.buildPlaylist(initialPlaylist.playlist);
        this.attachPlayerEvents();
        this.attachPageEvents();
        this.watchStateChange();
        this.playlistTrackingEvent();

        // If there is an end card background image, show it.
        if(initialPlaylist.takeover_bg) {
          this.videoPlayerInstance.takeoverBg = initialPlaylist.takeover_bg;
        }

        // If mobile, we will load the rest of the page now.
        if(wweVideo.getBreakpoint().toLowerCase() !== 'desktop') {
          this.videoPlayerInstance.jw.on('ready',this.lazyLoadPageElements.bind(this));
        }

      },


      /**
       * Attaches events to video player needed for landing
       * page functionality.
       */
      attachPlayerEvents : function(){

        var playerInstance = this.videoPlayerInstance;
        playerInstance.jw.on('playlistItem',this.setPlaylistItem.bind(this));
        playerInstance.jw.once('adPlay',this.attachAdPlayEvents.bind(this));
        playerInstance.jw.once('firstFrame',this.attachFirstFrameEvents.bind(this));

      },


      /**
       * Attach JS events needed for fb landing page.
       */
      attachPageEvents : function(){

        // Handle scroll to comments on desktop.
        var commentLink = document.getElementById('fb-comments-link');
        commentLink.addEventListener('click', this.scrollToComments);

        // Handle comments toggle on mobile.
        this.$body = $('body');
        this.$commentsTab = $('.comments-tab');
        this.$playlistTitle = $('.wwe-videobox--playlist--title');
        this.$commentsTab.on('click',this.showCommentsTab.bind(this));
        this.$playlistTitle.on('click',this.showPlaylistTab.bind(this));

        // Handle description toggle on mobile devices.
        this.$descriptionToggle = $('.description-toggle');
        this.$description = $('.wwe-videobox--cap--description');
        this.$descriptionToggle.on('click', this.toggleDescription.bind(this));

        // Handle share toggle on mobile devices.
        this.$videoShareToggle = $('.video-share-toggle');
        this.$videoShareToggle.on('click', this.toggleVideoShare.bind(this));
        this.videoPlayerInstance.jw.on('share-overlay-closed', this.onVideoShareClose.bind(this));
        this.videoPlayerInstance.jw.on('share-overlay-open', this.onVideoShareOpen.bind(this));
      },


      showCommentsTab : function(event){
        this.$body.addClass('video-comments-active');
      },

      showPlaylistTab : function(event){
        this.$body.removeClass('video-comments-active');
      },

      toggleDescription : function(event){
        if(this.$description.hasClass('expanded')) {
          this.$descriptionToggle.removeClass('expanded');
          this.$description.removeClass('expanded');
        }else{
          this.$descriptionToggle.addClass('expanded');
          this.$description.addClass('expanded');
        }
      },

      onVideoShareOpen : function(){
        this.$videoShareToggle.addClass('open');
      },

      onVideoShareClose : function(){
        this.$videoShareToggle.removeClass('open');
      },

      toggleVideoShare : function(event){
        if(this.videoPlayerInstance.shareOverlayOpen) {
          wweVideo.wweVideoShare.close.bind(this.videoPlayerInstance)(event);
        }else{
          wweVideo.wweVideoShare.open.bind(this.videoPlayerInstance)(event);
        }
      },


      /**
       * Handles anchor click to fb comments
       *
       * @param e
       */
      scrollToComments : function(e){

        e.preventDefault();

        var fbCommentsEl = document.querySelector('.fb-comments');
        var headerHeight = $('#mini-panel-header_navigation').height();
        var additionalMargin = 50;
        var scrollTo = ($(fbCommentsEl).offset().top - (additionalMargin + headerHeight));

        $('html, body').animate({
          scrollTop: scrollTo
        }, 500);
      },


      setPlaylistItem : function(){
        var currentItem = this.videoPlayerInstance.jw.getPlaylistItem();
        var currentIndex = currentItem.index || 0;
        var videoIdx = this.videoPlayerInstance.jw.getPlaylistIndex();

        this.setVideoTitle(currentItem.title);
        this.setVideoDescription(currentItem.description);
        this.setPlaylistTitle(currentItem.playlist_title);
        this.setActiveVideos(currentIndex);
        this.setSponsors(currentItem);

        if(!!this.hasFirstVideoPlayBegun) {
          this.setBrowserState(videoIdx);
          this.updateFbComments(currentItem.abs_path);
        }else{
          this.setInitialBrowserState();
        }

        this.hasFirstVideoPlayBegun = true;

      },

      setVideoTitle : function(title){
        $('.wwe-videobox--cap--title').text(title);
      },

      setVideoDescription : function(desc){
        $('.wwe-videobox--cap--description').text(desc);
      },

      setPlaylistTitle : function(title){
        $('.wwe-videobox--playlist--title-copy').text(title)
      },

      setSponsors : function(currentItem) {
        var $sponsorContainer = $('.wwe-sponsored--track')
        if(!currentItem.sponsors) {
          return $sponsorContainer.html('');
        }
        return $sponsorContainer.html(currentItem.sponsors);
      },

      buildPlaylist : function(playlist){
        // Generating the playlist.

        var playlistItems = [];
        var $ssContent = $('.ss-content');

        $.each(playlist, function (index, el) {

          var playlistItemTpl = '<div class="wwe-videobox--playlist--item" data-video-index="' + index + '" data-vms-id="' + el.vms_id + '">' +
            '<div class="wwe-videobox--playlist--item--picture">' +
            '<div class="wwe-videobox--up-next">Up Next</div>' +
            '<div class="wwe-videobox--duration">${duration}</div>' +
            '<img src="${picture}" alt="${title}">' +
            '</div>' +
            '<div class="wwe-videobox--playlist--item--title"><h4>${title}</h4>' +
            '<div class="wwe-videobox--playlist--item--share">' +
            // '${share}' +
            '</div>' +
            '</div>' +
            '</div>';

          // Parsing the template for each of the playlist items.
          var tmpPlaylistItem = playlistItemTpl
            .replace('${picture}', el.image)
            .replace(/\$\{title}/g, el.title)
            .replace('${duration}', el.duration)
            .replace('${share}', el.share);

          playlistItems.push(tmpPlaylistItem);

        });

        // Adding items to the playlist.
        $ssContent.append(playlistItems);

        // Initialize the playlist as playing the 1st video
        this.setActiveVideos(0);
        this.attachPlaylistEvents($ssContent);

      },

      attachFirstFrameEvents : function(){
        this.videoPlayerInstance.entirePlaylistLoaded = true;
        if(!this.landingElementsInitialized) {
          this.lazyLoadPageElements();
        }
      },

      attachPlaylistEvents : function($playlistContainer){
        $playlistContainer
          .find('.wwe-videobox--playlist--item--picture, .wwe-videobox--playlist--item--title h4')
          .on('click',this.playlistHandleClick.bind(this));
      },


        /**
       * Playlist item click handler.
       */
      playlistHandleClick: function(event) {


        $('html, body').animate({
          scrollTop: 0
        }, 500);

        var videoIdx = $(event.currentTarget)
          .parents('.wwe-videobox--playlist--item')
          .data('video-index');

        this.videoPlayerInstance.jw.playlistItem(videoIdx);
      },

      /**
       * Set browser url for a video.
       * @param videoIdx
       */
      setBrowserState : function(videoIdx){
        if(!this.statePopHappened) {
          var clickedVideo = this.videoPlayerInstance.jw.getPlaylistItem(videoIdx);

          if(window.history) {
            window.history.pushState(JSON.parse(JSON.stringify(clickedVideo)), clickedVideo.title, clickedVideo.abs_path);
          }

          document.title = clickedVideo.title;
        }
        else {
          this.statePopHappened = false;
        }
      },

      /**
       * Set initial browser state for first video.
       * @param videoIdx
       */
      setInitialBrowserState : function(){
          var initialVideo = this.videoPlayerInstance.jw.getPlaylistItem(0);

          if(window.history) {
            window.history.pushState(JSON.parse(JSON.stringify(initialVideo)), initialVideo.title, location.pathname);
          }
      },

      /**
       * To be called when player moves automatically to the next video.
       */
      setActiveVideos: function (currentVideoIdx) {

        var playlistItems = $('.wwe-videobox--playlist--item');
        var $upNext = playlistItems.eq(currentVideoIdx + 1);

        playlistItems.removeClass('now-playing up-next');
        playlistItems.eq(currentVideoIdx).addClass('now-playing');
        $upNext.addClass('up-next');
        this.scrollToUpNext($upNext);
      },


      scrollToUpNext : function($el) {

        if(!$el.length) {
          return;
        }

        var $parentDiv = $el.parent();
        var scrollTo = $parentDiv.scrollTop() + $el.position().top;

        $('.ss-content').animate({
          scrollTop: scrollTo
        }, 500).promise().then(function(){

        });

      },

      watchStateChange : function(event){
        window.onpopstate = this.handleStateChange.bind(this);
      },

      handleStateChange : function(event){
        if(!!event.state && event.state.nid) {
          event.preventDefault();
          this.statePopHappened = true;
          this.videoPlayerInstance.jw.playlistItem(event.state.index);
        }
      },

      attachAdPlayEvents : function(){
        if(!this.landingElementsInitialized) {
          this.lazyLoadPageElements();
        }
      },

      lazyLoadPageElements : function(){
        this.loadDeferredJs();
        this.showHiddenElements();
        this.landingElementsInitialized = true;
      },

      loadDeferredJs : function () {
        var js = Drupal.settings.WWEVideoLanding.DeferredJs;
        var docFrag = document.createDocumentFragment();
        this.deferredJsToLoad = js.length;
        for(var i = 0; i < js.length; ++i) {
          var jsEl = document.createElement('script');
          jsEl.type = "text/javascript";
          jsEl.src = js[i];
          jsEl.defer = true;
          jsEl.onload = this.deferredJsFileLoaded.bind(this);
          docFrag.appendChild(jsEl);
        }
        document.body.appendChild(docFrag);
      },

      deferredJsFileLoaded : function(){
        ++this.deferredJsLoaded;
        if(this.deferredJsLoaded === this.deferredJsToLoad) {
          this.onDeferredLoaded();
        }
      },

      onDeferredLoaded : function(){
        if(!!Drupal.behaviors.wweThemeSocialShare) {
          Drupal.behaviors.wweThemeSocialShare.init();
        }
        this.initializeFbComments();
        this.renderAds();
        if(!!Drupal.behaviors.navigationPane) {
          Drupal.behaviors.navigationPane.attach(document);
        }
        if(!!Drupal.behaviors.wweThemeNav) {
          Drupal.behaviors.wweThemeNav.attach(document);
        }
      },

      showHiddenElements : function(){
        var $prePlayEls = $('.vlp-pre-play');
        $prePlayEls.addClass('loaded');
      },

      initializeFbComments : function(){
        Drupal.behaviors.fbInit.attach(document);
      },

      updateFbComments : function(url){

        // Comments.
        var $comments = $('.fb-comments');
        $comments.empty();
        $comments.attr('data-href',url);
        $comments.removeAttr('fb-xfbml-state');
        var $newComments = $comments.clone();
        $comments.replaceWith($newComments);

        // Comment count.
        var $commentsCount = $('.wwe-footer--comments--icon--count, .comments-count').find(' > *');
        $commentsCount.replaceWith($('<fb:comments-count href="' + url + '">0</fb:comments-count>'));

        // Re parse the page.
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse(document);
        }

      },

      renderAds : function(){
        if (typeof Drupal.behaviors.WWEAds !== "undefined" ) {

          Drupal.behaviors.WWEAds.attach(document);

          var ads = document.querySelectorAll('.wwe-ad--rail > div');

          for(var i = 0; i < ads.length; ++i) {

            var adEl = ads[i];
            var adId = adEl.id;

            var adData = {};

            adData[adId] = {
              type: 'rail-ad',
              target: adId,
              sizes: {
                desktop: '[[300,250],[300,600]]',
                phone: false,
                tablet: false
              },
              interstitial:false
            };

            // Render the ad.
            googletag.cmd.push(function() {
              Drupal.behaviors.WWEAds.attach(document);
              Drupal.behaviors.WWEAds.renderAds(adData);
            });

          }
        }
      },

      playlistTrackingEvent : function(){
        $('.wwe-videobox--playlist--item').click(function(){
          var user_Entitled = Drupal.behaviors.wweAnalytics.getEntitlementsUser();
          var video_position_x = $(this).attr('data-video-index');
          var trackingEventAction;
          var videoTitle = $((this)).find('.wwe-videobox--playlist--item--title').text();
          var label = videoTitle + ' | vms_id=' + $(this).attr('data-vms-id');
          if (video_position_x == '1') {
            trackingEventAction = 'click_top_playlist_position_'+ video_position_x;
          }
          else {
            trackingEventAction = 'click_bottom_playlist_position_'+ video_position_x;
          }
          wwe_ga_dataLayer.push({
            'event': 'analyticsEvent',
            'eventCategory': 'Video Player',
            'eventAction': trackingEventAction,
            'eventLabel': label,
            'eventValue': user_Entitled
          });
        });
      },

    };

})(jQuery);
