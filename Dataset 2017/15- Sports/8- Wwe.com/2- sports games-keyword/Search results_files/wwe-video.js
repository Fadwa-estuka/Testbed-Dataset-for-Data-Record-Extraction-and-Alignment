/**
 * WWE Video
 *
 * Main File for playing videos on wwe.com.
 *
 * Usage:
 * wweVideo.create(inlineElement[0],{
 *   config : {
 *     playlist : [*]
 *   },
 *   adData : {},
 *   ...
 * });
 *
 */
!(function ($) {

  /**
   * JW Player License Key
   * @type {string}
   */
  jwplayer.key = (function(D) {
    return 'ehgj2B1MMvcFTbn597RBhW2iw/XZLW3gGHCRRQ==';
  }(Drupal));

  var wweVideo = {

    /**
     * videoPlayers will house all currently initialized jwplayer
     * instances.
     *
     * We do this so that we have the opportunity to play and control
     * multiple players at the same time.
     */
    videoPlayers: [],


    /**
     * Phone breakpoint
     */
    phoneBreakpoint: 767,

    /**
     * Tablet breakpoint
     */
    tabletBreakpoint: 1024,

    /**
     * Netowrk ID
     */
    networkId: '/4675',


    /**
     * Create a new wweVideoInstance to handle controlling
     * multiple videos.
     *
     * @param element
     * @param videoConfig
     * @returns {wweVideo.wweVideoInstance}
     */
    create: function (element, videoConfig) {
      var instance = new WWEVideoInstance(element, videoConfig, this);
      this.addVideoInstance(instance);
      return instance;
    },


    /**
     * Not sure if we use this right now.
     */
    getCustomAdDataStr : function(videoAdData, settings, videoId){

      var customParams = {};

      // Replace default params with data from the playlist.
      if (typeof videoAdData !== 'undefined' && !!videoAdData) {
        for (var key in videoAdData) {
          if (typeof videoAdData[key] === 'string') {
            if (key == 'dtemplate') {
              customParams.dtemplate = 'video';
            }
            else {
              customParams[key] = videoAdData[key];
            }
          }
          // Special tag for videos.
          if (key === 'dnetwork') {
            customParams.dwwenetwork = videoAdData[key];
          }
        }
        customParams.dplaylistid = settings.customParams.dplaylistid;
      }else{
        customParams = settings.customParams;
      }

      // Add explorer key if exists.
      if (settings.adspath != '') {
        customParams.dexplorer = settings.adspath;
      }


      // Update the duniqueid with the id of the next video.
      customParams.duniqueid = videoId;

      // Add Monetate ab test values.
      if (typeof Drupal.behaviors.wweVideoPreRollTest !== 'undefined') {
        var dMonetate = Drupal.behaviors.wweVideoPreRollTest.createKeyValue();
        if (typeof dMonetate.key !== 'undefined') {
          customParams[dMonetate.key] = dMonetate.value;
        }
      }

      // Map customParams to a string for sending to DFP.
      var customParamsStr = Object.keys(customParams).map(function (key) {
        return key + '=' + customParams[key];
      }).join('&');

      // Add dynamic video to video values to the ad tag.
      var dynamicValues = [
        'cust_params=' + encodeURIComponent(customParamsStr),
        'vid=' + videoId
      ];

      // TODO: Abstract this out so it it set on wweVideoInstance.
      this.customAdParams = customParams;

      return dynamicValues.join('&');

    },


    /**
     * Get ad unit name for ad tags.
     *
     * @returns {string}
     */
    getAdTags : function(){
      var adTags = '';
      if (!!Drupal.behaviors.WWEAds) {
        if (!!Drupal.behaviors.WWEAds.unitName) {
          adTags = Drupal.behaviors.WWEAds.unitName;
        }else{
          Drupal.behaviors.WWEAds.setAdUnit();
          adTags = Drupal.behaviors.WWEAds.unitName;
        }
      }
      return adTags;
    },


    /**
     * Determine browser breakpoint.
     *
     * NOTE: extracted from WWEAds, must keep both modules up to dat
     *
     * @returns {*}
     */
    getBreakpoint : function(){

      var width;

      // These calls are made outside DOMready so their data is ready right away.
      if (typeof(window.innerHeight) !== 'undefined') {
        width = parseInt(window.innerWidth);
      }
      else if (typeof(document.documentElement.clientHeight) !== 'undefined') {
        width = document.documentElement.clientWidth;
      }

      // Are we a mobile browser?
      this.mobile = this.isMobile();

      // Copied the width numbers from wwe_widget_base.js. Above width numbers werent right.
      if (width <= this.phoneBreakpoint && this.mobile) {
        return 'PHONE';
      }
      else if (width <= this.tabletBreakpoint && this.mobile) {
        return 'TABLET';
      }
      else if (width <= this.tabletBreakpoint) {
        return 'SM-DESKTOP';
      }
      return 'DESKTOP';
    },


    getOs : function(){

      var osDatas = {
        'ios': {test: /iPhone|iPad|iPod/i, against: 'userAgent'},
        'nexus': {test: 'Nexus', against: 'userAgent'},
        'Android': {test: 'Android', against: 'platform'},
        'Blackberry': {test: 'Blackberry', against: 'userAgent'},
        'Windows': {test: 'Win', against: 'platform'},
        'Mac': {test: 'Mac', against: 'platform'},
        'Linux': {test: 'Linux', against: 'platform'},
        'Windows Phone': {test: 'Windows Phone', against: 'userAgent'},
        'Asha': {test: 'Asha', against: 'platform'}
      };

      for (var os in osDatas) {
        if(osDatas.hasOwnProperty(os)) {
          var osData = osDatas[os];
          if(navigator[osData.against].indexOf(osData.test) >= 0) {
            return os;
          }
        }
      }

      return 'unknown'

    },

    /**
     * Is this a mobile device?
     *
     * @returns {boolean}
     */
    isMobile : function (){
      var ua = navigator.userAgent.toLowerCase();
      return (/iphone|ipod|ipad|android|xoom|sch-i800|playbook|silk|tablet|kindle|smartphone|iemobile|palm|mini|blackberry|bb10|windows\sce/i.test(ua));
    },


    getAdUnit: function(adUnit) {

      if (typeof adUnit === 'undefined') {
        adUnit = Drupal.settings.WWEAds;
      }

      var unitName;
      var adUnitName;
      var breakpoint = this.getBreakpoint();

      // If we have small desktop, the adunit is still desktop.
      if (breakpoint == 'sm-desktop') {
        breakpoint = 'tablet';
        if (parseInt(window.innerWidth) < this.phoneBreakpoint) {
          breakpoint = 'phone';
        }
      }

      // Set base unitName.
      // Hamburger is an event click, so this cannot update dynamically;
      // Store different unit names for navigation.
      var isMobile = this.isMobile();
      if (isMobile) {
        unitName = 'MobileWeb/' + breakpoint +
          '/' + this.getOs() +
          '/' + adUnit.ddesktop2;
        var three = adUnit.ddesktop3;
        if (three != 'NONE') {
          unitName += '/' + three;
        }
      }
      else {
        unitName = 'desktop';
        for (var i = 2; i < 5; i++) {
          var c = 'ddesktop' + i;
          var d = adUnit[c];
          if (d != 'NONE') {
            unitName += '/' + d;
          }
        }
      }

      adUnitName = this.networkId + '/' + unitName;
      return adUnitName.toLowerCase();
    },


    /**
     * Gets current breakpoint.
     *
     * @returns {string}
     */
    // getBreakpoint : function(){
    //   var breakpoint = 'desktop';
    //   if (typeof Drupal.behaviors.WWEAds !== 'undefined') {
    //     // Get the breakpoint.
    //     if (typeof Drupal.behaviors.WWEAds.browserBreakpoint !== 'undefined') {
    //       breakpoint = Drupal.behaviors.WWEAds.browserBreakpoint;
    //     }
    //   }
    //   return breakpoint;
    // },


    /**
     * Gets CMS id.
     *
     * @returns {string}
     */
    getCmsId : function(){
      var cmsID = '';
      if (typeof Drupal.behaviors.WWEAds !== 'undefined') {
        // DFP cms setting.
        if (typeof Drupal.settings.WWEAds.cmsID !== 'undefined') {
          cmsID = Drupal.settings.WWEAds.cmsID;
        }
      }
      return cmsID;
    },

    /**
     * Gets current language.
     *
     * @returns {string}
     */
    getLanguage : function(){
      var language = 'en';
      // Get the current language.
      if (typeof Drupal.settings.WWE !== 'undefined') {
        if (typeof Drupal.settings.WWE.language !== 'undefined') {
          language = Drupal.settings.WWE.language;
        }
      }
      return language;
    },

    /**
     * Build custom params object for ad tag creation.
     *
     * @returns {{}}
     */
    getCustomParams : function(){

      var customParams = {};//this.getAdDataCustomParams(adData);

      // Load the default advertising custom params.
      if (typeof Drupal.settings.WWEAds !== 'undefined') {
        var keyValues = Drupal.settings.WWEAds;
        for (var key in keyValues) {
          if(keyValues.hasOwnProperty(key)) {
            if (typeof keyValues[key] === 'string') {
              if (key == 'dtemplate') {
                customParams.dtemplate = 'video';
              }
              else {
                customParams[key] = keyValues[key];
              }
            }
          }
        }
      }
      return customParams;
    },


    getAdSettings : function(){

      var adTags = this.getAdTags();
      var customParams = this.getCustomParams();
      var breakpoint = this.getBreakpoint();
      var language = this.getLanguage();
      var cmsID = this.getCmsId();
      var adspath = customParams.path;

      // Special tag for videos.
      customParams.dwwenetwork = customParams.dnetwork;
      delete customParams.dnetwork;

      // Gather the adSettings as an object.
      return {
        adspath : adspath,
        customParams : customParams,
        language : language,
        adTags : adTags,
        breakpoint : breakpoint,
        cmsID : cmsID
      };

    },

    /**
     * This is carried over from original video functionality.  It
     * overwrites and appends config data which was set previously
     * based on various factors.
     *
     * @param adData
     * @param playlistId
     * @param videoId
     * @param disabled
     * @returns {{client: string, companiondiv: (*|{id, width, height})}}
     */
    getAdData: function (adData, playlistId, videoId, disabled) {

      var adSettings = this.getAdSettings();

      // Set the playlist ID
      adSettings.customParams.dplaylistid = playlistId || '0';

      // Return JW advertising settings.
      var adConfig = {
        client: 'googima'
      };

      // If ad is not disabled, attach the tag.
      if(!disabled) {
        adConfig.tag = this.getAdTag(adSettings, adData, videoId);
      }

      return adConfig;
    },

    /**
     * Determine companion object based on breakpoint.
     *
     * @param breakpoint
     * @returns {*}
     */
    getCompanion : function(breakpoint){
      if (breakpoint === 'tablet') {
        return {
          id: 'wwe-video--companion-leader',
          width: 728,
          height: 90
        };
      }
      return {
        id: 'wwe-video--companion',
        width: 300,
        height: 250
      };
    },

    /**
     * Determine companion sizes based on browser breakpoint.
     *
     * @param breakpoint
     * @returns {*}
     */
    getCompanionSizes : function(breakpoint){
      if (breakpoint === 'tablet') {
        return '728x90'
      }
      return '300x250,970x90';
    },

    /**
     * Build the video ad tag.
     *
     * @param settings
     * @returns {*}
     */
    // getAdTag : function(settings, adData, videoId){
    //
    //   // German site uses a different preroll.
    //   if (settings.language == 'de') {
    //     if (typeof window.myAd !== 'undefined') {
    //       return window.myAd.videoAdRequest('preroll1', {});
    //     }
    //   }
    //
    //   // If not german site, go ahead and build the tag.
    //   var url = encodeURIComponent(document.domain);
    //   var descriptionURL = encodeURIComponent(window.location.href);
    //   var correlator = Date.now();
    //
    //   // Different companion ads for different breakpoints.
    //   var companionSizes = this.getCompanionSizes(settings.breakpoint);
    //
    //   // Default parameters for ad tags. Any values that change on a per
    //   // video basis should be set in the beforePlay call below.
    //   var adTagParams = [
    //     'sz=320x302',
    //     'iu=' + settings.adTags,
    //     'ciu_szs=' + companionSizes,
    //     'impl=s',
    //     'gdfp_req=1',
    //     'env=vp',
    //     'output=vast',
    //     'unviewed_position_start=1',
    //     'url=' + url,
    //     'description_url=' + descriptionURL,
    //     'correlator=' + correlator,
    //     'cmsid=' + settings.cmsID
    //   ];
    //
    //   var adTagParamsStr = adTagParams.join('&');
    //
    //   var customAdData = this.getCustomAdDataStr(adData, settings, videoId);
    //
    //   if(!!customAdData)
    //     adTagParamsStr = adTagParamsStr + '&' + customAdData;
    //
    //   return '//pubads.g.doubleclick.net/gampad/ads?' + adTagParamsStr;
    // },


    extendObject: function () {

      var obj = arguments[0];

      for(var i = 1; i < arguments.length; ++i) {
        var props = arguments[i];

        for (var prop in props) {
          if (props.hasOwnProperty(prop)) {
            obj[prop] = props[prop];
          }
        }

      }

      return obj;
    },

    addVideoInstance: function (videoInstance) {
      this.videoPlayers.push(videoInstance);
    },

    removeVideoInstance: function (videoInstance) {
      this.videoPlayers.filter(function (item) {
        return item.id != videoInstance.id;
      });
    },

    // Method for replacing query string parameters in the adTag.
    generateNewAdTag: function (url, param, value) {
      var self = this;
      var re = new RegExp('[\\?&]' + param + '=([^&#]*)'), match = re.exec(url), delimiter, newAdTag;
      if (match === null) {
        // Append new parameters.
        var hasQuestionMark = /\?/.test(url);
        delimiter = hasQuestionMark ? '&' : '?';
        newAdTag = url + delimiter + param + '=' + value;
      } else {
        delimiter = match[0].charAt(0);
        newAdTag = url.replace(re, delimiter + param + '=' + value);
      }
      // Assign the new adTag to self.
      // self.adTag = newAdTag;

      return newAdTag;
    },


    /**
     * Attaches default events to the video instance.
     *
     * @param videoInstance JWPlayer instance.
     */
    attachVideoEvents: function (videoInstance) {

      var videoEvents = this.videoEvents;

      for (var key in videoEvents) {
        // Exclude ready event, it is hardcoded in already.
        if (videoEvents.hasOwnProperty(key) && key !== 'ready') {
          videoInstance.jw.on(key, videoEvents[key].bind(videoInstance));
        }
      }

      // videoInstance.jw.on('all',function(event){
      //   console.log('[WWE VIDEO] TIME TIL  ' + event + ': ' + (new Date().getTime() - videoInit)/1000 + ' seconds');
      // });


    },


    /**
     * Generate the preroll ad tag.
     * @param video
     * @param playlistId
     * @param adData
     * @returns {*}
     */
    getNewAdTag : function(video, playlistId, adData){

      // German site uses a different preroll.
      if (Drupal.settings.WWE.language == 'de') {
        if (typeof window.myAd !== 'undefined') {
          return window.myAd.videoAdRequest('preroll1', {});
        }
      }

      var breakpoint = this.getBreakpoint();

      // Default parameters for ad tags. Any values that change on a per
      // video basis should be set in the beforePlay call below.
      var adTagParams = {
        'sz': '320x302',
        'iu': this.getAdUnit(),
        'ciu_szs': this.getCompanionSizes(breakpoint),
        'impl': 's',
        'gdfp_req':  '1',
        'env' : 'vp',
        'output' : 'vast',
        'unviewed_position_start':'1',
        'url' : this.videoAdTag.getUrl(),
        'description_url' : this.videoAdTag.getDescriptionUrl(),
        'correlator' : this.videoAdTag.getCorrelator(),
        'cmsid' : this.videoAdTag.getCmsID(),
        'vid' : video.nid,
        'cust_params' : this.getNewAdCustomParams(video, playlistId, adData),
      };

      var adTagParamsStr = this.stringifyAdTag(adTagParams);

      return '//pubads.g.doubleclick.net/gampad/ads?' + adTagParamsStr;
    },


    /**
     * Need a special function to strpingify ad tag since certain params do not get encoded.
     *
     * obj
     *
     */
    stringifyAdTag: function(obj){

      var paramsToExcludeFromEncode = ['cust_params','iu'];
      var paramValue = function(key){
        return (wweVideo.inArray(key,paramsToExcludeFromEncode)) ? obj[key] : encodeURIComponent(obj[key]);
      };

      var str = [];
      for(var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + paramValue(p))
        }
      return str.join("&");
    },

    /**
     * Helper to determine if value is in array.
     *
     * @param key
     * @param array
     * @returns {boolean}
     */
    inArray : function(key, array) {
      return array.indexOf(key) !== -1;
    },

    getNewAdObject : function(video, playlistId, adData){

      var adObject;

      if(adData) {

        adObject = {
          denv: adData.denv || this.videoAdTag.getEnv(),
          dtemplate: adData.dtemplate || this.videoAdTag.getTemplate(),
          duniqueid: adData.duniqueid || this.videoAdTag.getUniqueId(video.nid),
          dnetwork: adData.dnetwork || this.videoAdTag.getNetwork(),
          ddiva: adData.ddiva || this.videoAdTag.getDiva(),
          dppv: adData.dppv || this.videoAdTag.getPpv(),
          dregion: adData.dregion || this.videoAdTag.getRegion(),
          dplaylistid: this.videoAdTag.getPlaylistId(playlistId),
          cmsID: this.videoAdTag.getCmsID(),
          vid: this.videoAdTag.getVid(video),
          dmonetate: this.videoAdTag.getMonetate(),
          dvideotype: this.videoAdTag.getVideoType(),
        };

        for (var key in adData) {
          if(adData.hasOwnProperty(key)) {
            if(!adObject[key]) {
              adObject[key] = adData[key];
            }
          }
        }

      }else{

        adObject = {
          denv: this.videoAdTag.getEnv(),
          dtemplate: this.videoAdTag.getTemplate(),
          duniqueid: this.videoAdTag.getUniqueId(video.nid),
          dnetwork: this.videoAdTag.getNetwork(),
          ddiva: this.videoAdTag.getDiva(),
          dppv: this.videoAdTag.getPpv(),
          dregion: this.videoAdTag.getRegion(),
          dplaylistid: this.videoAdTag.getPlaylistId(playlistId),
          cmsID: this.videoAdTag.getCmsID(),
          vid: this.videoAdTag.getVid(video),
          dmonetate: this.videoAdTag.getMonetate(),
          dvideotype: this.videoAdTag.getVideoType(),
        };

      }

      return adObject;

    },


    getNewAdCustomParams : function(video, playlistId, adData){

      var adObj = this.getNewAdObject(video, playlistId, adData);

      return encodeURIComponent( this.stringifyObject(adObj) );

    },

    stringifyObject : function(obj) {
      var str = [];
      for(var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    },

    getContentType : function(jw){
      var config = jw.getConfig();
      if(!!config.playlistId) return 'video_playlist';
      return 'video';
    },

    videoAdTag : {

      getEnv : function () {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.denv !== 'undefined') {
            return Drupal.settings.WWEAds.denv;
          }
        }
        return 'dev';
      },
      getTemplate : function () {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.dtemplate !== 'undefined') {
            return Drupal.settings.WWEAds.dtemplate;
          }
        }
        return 'video';
      },
      getUniqueId : function (videoId) {
        return videoId || 0;
      },
      getNetwork : function (video) {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.dnetwork !== 'undefined') {
            return Drupal.settings.WWEAds.dnetwork;
          }
        }
        return 0;
      },
      getDiva : function () {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.ddiva !== 'undefined') {
            return Drupal.settings.WWEAds.ddiva;
          }
        }
        return 'N';
      },
      getPpv : function (video) {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.dppv !== 'undefined') {
            return Drupal.settings.WWEAds.dppv;
          }
        }
        return 'N';
      },
      getRegion : function () {
        return location.hostname;
      },
      getPlaylistId : function(playlistId){
        return playlistId || 0;
      },
      getCmsID : function () {
        if (!!Drupal.settings.WWEAds) {
          if (typeof Drupal.settings.WWEAds.cmsID !== 'undefined') {
            return Drupal.settings.WWEAds.cmsID;
          }
        }
        return 0;
      },
      getVid : function (video) {
        return video.nid || 0;
      },
      getMonetate : function () {
        if (typeof Drupal.behaviors.wweVideoPreRollTest !== 'undefined') {
          var dMonetate = Drupal.behaviors.wweVideoPreRollTest.createKeyValue();
          if (typeof dMonetate.key !== 'undefined') {
            return dMonetate.value;
          }
        }
      },
      getVideoType : function () {
        return !!Drupal.settings.WWEVideoLanding ? 'landing' : 'inline';
      },
      getCorrelator : function () {
        return Date.now();
      },
      getUrl : function() {
        return encodeURIComponent(document.domain);
      },
      getDescriptionUrl : function() {
        return encodeURIComponent(window.location.href);
      },
      getIu : function () {

      }

    },

    /**
     * Determine if one video in the current wweVideoInstance
     * has completed.
     *
     * @returns {boolean}
     */
    getFirstVideoCompleted : function(){
      return this.firstVideoCompleted;
    },

    /**
     * Loop through playlist and setup ad schedule for each item.
     *
     * @param playlist
     * @param playlistId
     * @param adData
     * @returns {*}
     */
    appendAdTagsToPlaylists : function(playlist, playlistId, adData){

      for(var i = 0; i < playlist.length; ++i) {

        // Only setup ad tags for videos with ads enabled.
        if(!playlist[i].ads_disabled) {

          var tag = this.getNewAdTag(playlist[i], playlistId, adData);

          playlist[i].adschedule = {
            adbreak1: {
              offset: "pre",
              ad: {
                tag: tag,
                autoplayadsmuted : (navigator.userAgent.toLowerCase().indexOf("android") > -1)
              }
            }
          };

        }

      }

      return playlist;

    },


    /**
     * Get parsed pageview path to track.
     *
     * Per WWEC-4682, worldwide videos should have wordwide in the path
     * when tracked in GA
     *
     * @param videoUrl
     * @returns {*}
     */
    getPageviewUrl : function(videoUrl){

      var trackUrl = videoUrl;

      if (location.pathname.search(/worldwide/i) > -1) {
        var hasFullDomain = videoUrl.search(/wwe\.com/i);
        if (hasFullDomain > -1) {
          var domainLen = 7;
          var splitPath = videoUrl.substring(hasFullDomain + domainLen);
          trackUrl = this.trimSlashes(splitPath[0]) + '/worldwide/' + this.trimSlashes(splitPath[1]);
        }
        else {
          trackUrl = '/worldwide/'+ this.trimSlashes(videoUrl);
        }
      }
      return trackUrl;
    },



    /**
     * Trims slashed from start and end of a string.
     *
     * @param str
     * @returns {*}
     */
    trimSlashes : function(str){
      return str.replace(/^\/+|\/+$/g, '');
    },


    /**
     * We create our own custom share button in the player controls.
     *
     * @param playerInstance
     */
    addShareButtonToPlayer : function(playerInstance){

      var shareBtn = document.createElement('div');
      shareBtn.setAttribute('class','jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-share');
      shareBtn.innerHTML = this.getShareButtonTemplate();
      var parentElement = document.getElementsByClassName('jw-controlbar-right-group')[0];
      var insertPosition = parentElement.children.length - 2;
      parentElement.insertBefore(shareBtn, parentElement.children[insertPosition]);

      // Attach share open to icon click/touch
      shareBtn.addEventListener('touchstart',this.wweVideoShare.open.bind(playerInstance));
      shareBtn.addEventListener('click',this.wweVideoShare.open.bind(playerInstance));

    },


    /**
     * Template for custom share button.
     *
     * @returns {string}
     */
    getShareButtonTemplate : function(){
      return '<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="icon-svg--share" viewBox="0 0 63.3 64">' +
        '<rect class="crs-bar" y="56.2" fill="#D7182A" width="63.3" height="7.8"></rect>' +
        '<rect class="uprgt-lft" y="30.5" fill="#7D7B80" width="7.4" height="26"></rect>' +
        '<rect class="uprgt-rgt" x="55.8" y="30.5" fill="#7D7B80" width="7.4" height="26"></rect>' +
        '<path class="arrow" fill="#7D7B80" d="M31.6,0L16,15.6h11.9v24.6c0,1.5,1.5,3.7,3.7,3.7s3.7-1.5,3.7-3.7V15.6h11.9L31.6,0z"></path>' +
        '</svg>';
    },

    initializeComscore : function(){

      // When Comscore is called ensure that the stop() method exists before
      // reinitiializing the object. Comscore should be initializied on each
      // video play.
      if (typeof Drupal.behaviors.wweAnalytics !== undefined) {
        if (Drupal.behaviors.wweAnalytics.comScore !== undefined && Drupal.behaviors.wweAnalytics.comScore !== null) {
          Drupal.behaviors.wweAnalytics.comScore.stop();
        }
        // Initialize new comscore object for tracking.
        Drupal.behaviors.wweAnalytics.initializeComscore();
      }

    },


    beforeEachVideo : function(nextVideo){

      var self = this;

      // Hide share overlay in case it is open
      wweVideo.wweVideoShare.close.bind(this)();

      // Initialize Comscore for each video.
      wweVideo.initializeComscore();

      // Only attach play ads if ads are not disabled.
      // var nextVideo = self.jw.getPlaylistItem();
      var nextVideoIndex = self.jw.getPlaylistIndex();

      // If we aren't in the first video, generate a new ad tag.
      // We check to make sure ads are not disabled, then check
      // to see that playlist index is either > 0 or entire
      // playlist has been loaded.  (Inline video only loads
      // first video initially)

      // console.log('BEFORE EACH VIDEO', !nextVideo.ads_disabled && ( nextVideoIndex > 0 || self.entirePlaylistLoaded ), !nextVideo.ads_disabled, nextVideoIndex > 0 , self.entirePlaylistLoaded );

      // if (!nextVideo.ads_disabled && ( nextVideoIndex > 0 || self.entirePlaylistLoaded ) ) {
      //   // if (!nextVideo.ads_disabled) {
      //
      //   // Get playlist and video ID.
      //   var playlistId = self.config.playlistId || '0';
      //   var videoId = (self.config.playlist && self.config.playlist[nextVideo.index]) ? self.config.playlist[nextVideo.index].nid : '0';
      //
      //   // Get the ad tag.
      //   // var advertising = wweVideo.getAdData(self.adData, playlistId, videoId);
      //   var adTag = wweVideo.getNewAdTag(nextVideo, playlistId);
      //
      //   console.log('jw.playAd Parameter: ', adTag);
      //
      //   // Play the ad.
      //   self.jw.playAd(adTag);
      // }

    },

    videoEvents: {

      ready: function () {

        var self = this;

        // Conviva tracking
        if (typeof Drupal.settings.WWEVideoExplorer.conviva_id !== 'undefined' && Drupal.settings.WWEVideoExplorer.conviva == 1) {
          Drupal.WWEConviva.start(self, Drupal.settings.WWEVideoExplorer.conviva_id, Drupal.settings.WWEVideoExplorer.conviva_touchstone_url);
        }

        // Add video button.
        wweVideo.addShareButtonToPlayer(self);

      },

      error: function (event) {
        console.warn('[WWE Video]', event);
      },

      adError: function (event) {
        console.warn('[WWE Video]', '[adError]', event);
      },

      play : function(event){

        var currentItem = this.jw.getPlaylistItem();

        if (event.oldstate === "paused"){
          wweVideo.trackVideoState.bind(this)('videoResume', currentItem, null, null, {isClick : true});
        }else {
          //wweVideo.trackVideoState.bind(this)('play', currentItem, event, null, {isClick : true});
        }
      },

      pause : function(){

        var currentItem = this.jw.getPlaylistItem();
        wweVideo.trackVideoState.bind(this)('videoPause', currentItem, null, null, {isClick : true});

      },

      fullscreen : function(event){

        var currentItem = this.jw.getPlaylistItem();
        var state = event.fullscreen ? 'fullscreen' : 'minimize fullscreen';

        wweVideo.trackVideoState.bind(this)(state, currentItem);

      },

      visualQuality : function(event) {

        var currentItem = this.jw.getPlaylistItem();
        var videoBitRatePlay = event.level.label;

        wweVideo.trackVideoState.bind(this)('video_bit_rate', currentItem, event, videoBitRatePlay);

      },

      playlistItem: function (event) {

        var self = this;
        var currentItem = self.jw.getPlaylistItem();

        this.jw.once('beforePlay', function(){
          wweVideo.beforeEachVideo.bind(self)(currentItem);
        });

        // Apply monetate a/b testing setup.
        if (typeof Drupal.behaviors.wweVideoPreRollTest.init !== undefined) {
          Drupal.behaviors.wweVideoPreRollTest.init();
        }
        if (typeof Drupal.behaviors.wweVideoPreRollTest.incrementCookie !== undefined) {
          Drupal.behaviors.wweVideoPreRollTest.incrementCookie();
        }

        // Update the object path as a potential new video has loaded.
        if (typeof currentItem.path !== 'undefined') {
          self.link = currentItem.path;
        }

        var firstItem = self.jw.getPlaylistItem(0);
        if (typeof wwe_ga_dataLayer != 'undefined') {
          if (Drupal.behaviors.wweAnalytics.contentType == 'video' ||
            Drupal.behaviors.wweAnalytics.contentType == 'video_playlist') {
            // If we are in a video or gallery node, track a pageview just from the 2nd
            // video, because a 1st pageview was tracked when the page loaded.
            if (firstItem.nid != currentItem.nid) {
              // Track a pageview each time a new video plays.
              wwe_ga_dataLayer.push({
                'event': 'virtualPageview',
                'virtualPageURL': wweVideo.getPageviewUrl(self.link),
                'virtualPageTitle': currentItem.title
              });
            }
          }
          else {
            // Track a pageview each time a new video plays.
            wwe_ga_dataLayer.push({
              'event': 'virtualPageview',
              'virtualPageURL': wweVideo.getPageviewUrl(self.link),
              'virtualPageTitle': currentItem.title
            });
          }
        }

        // IVW tracking (iom is not undefined only on the German site).
        if (typeof(iom) !== 'undefined') {
          // We track the first video, but only if we are not in a video or
          // playlist node.
          // If we are in a video or playlist node, we already tracked it
          // during page load.
          if (Drupal.behaviors.wweAnalytics.contentType != 'video' &&
            Drupal.behaviors.wweAnalytics.contentType != 'video_playlist') {
            if (firstItem.nid == currentItem.nid) {
              iom.c({
                'st': 'wwedeu',
                'cp': 'videoPlay',
                'co': 'videoPlay',
                'mg': 'yes',
                'sv': 'in'
              }, 1);
            }
          }
        }

      },

      beforePlay: function (event) {

      },

      playlist: function (event) {

      },


      time: function(event){

        var self = this;
        var currentItem = self.jw.getPlaylistItem();
        self.duration = event.duration;
        if ((self.currentVideoNid === undefined) || (self.currentVideoNid != currentItem.nid)) {
          wweVideo.trackVideoState.bind(self)('play', currentItem, event);
        }

        var videoQ1 = event.duration*0.25;
        var videoQ2 = event.duration*0.5;
        var videoQ3 = event.duration*0.75;

        switch (true) {
          case event.position > videoQ1 && event.position <= videoQ2
          && ((self.videoQ1CurrentVideoNid === undefined) || (self.videoQ1CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('video_25_watched', currentItem, event);
            self.videoQ1CurrentVideoNid = currentItem.nid;
            break;
          case event.position > videoQ2 && event.position <= videoQ3
          && ((self.videoQ2CurrentVideoNid === undefined) || (self.videoQ2CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('video_50_watched', currentItem, event);
            self.videoQ2CurrentVideoNid = currentItem.nid;
            break;
          case event.position > videoQ3
          && ((self.videoQ3CurrentVideoNid === undefined) || (self.videoQ3CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('video_75_watched', currentItem, event);
            self.videoQ3CurrentVideoNid = currentItem.nid;
            break;
        }

      },


      idle : function(){

        if (Drupal.behaviors.wweAnalytics !== undefined) {
          // Report comscore.
          Drupal.behaviors.wweAnalytics.comScore.stop();
        }

      },

     // Record ad pause for tracking.
      adPause: function(event) {

        var self = this;

        var currentItem = self.jw.getPlaylistItem();
        wweVideo.trackVideoState.bind(self)('adPause', currentItem);
      },

      complete: function (event) {

        var self = this;

        var playlist = self.jw.getPlaylist();
        var index = self.jw.getPlaylistIndex();
        var currentItem = self.jw.getPlaylistItem(index);
        var playlistCount = playlist.length;

        // Track video state
        wweVideo.trackVideoState.bind(self)('complete', currentItem);

        // Track the end of the video playback.
        wweVideo.trackVideoPlayback.bind(self)('complete', wweVideo.customAdParams);

        // Don't show the network card for mobile.
        var breakpoint = wweVideo.getBreakpoint();

        // If end cards are displayed, show them on desktop.
        if (currentItem.end_card_logged_in && currentItem.end_card_logged_out && breakpoint.toLowerCase() == 'desktop') {
          // Display the take over.

          var overlayContent;

          if ($.cookie('entpc')) {
            // Display the logged in template.
            var self = this;
            var currentItem = self.jw.getPlaylistItem();
            overlayContent = currentItem.end_card_logged_in;
            wweVideo.trackVideoState.bind(self)('wwe_network_endcard_watchnow', currentItem);
            wweVideo.trackVideoStateLight.bind(self)('WWE Network Click', currentItem);
          }
          else {
            // Display the logged out template.i
            var self = this;
            var currentItem = self.jw.getPlaylistItem();
            overlayContent = currentItem.end_card_logged_out;
            wweVideo.trackVideoState.bind(self)('wwe_network_endcard_startyourfreemonth', currentItem);
            wweVideo.trackVideoStateLight.bind(self)('WWE Network Click', currentItem);
          }

          self.showVideoOverlay(overlayContent);

          var overlayInterval = self.overlayCountdown();

          // Add bindings.
          $('.video-network-card-logged-out .next-video').each(function (i, object) {
            $(object).on('click', function (e) {
              self.hideVideoOverlay();
              self.jw.playlistItem(index + 1);
              clearInterval(overlayInterval);
              return false;
            });
          });

        }

        self.firstVideoCompleted = true;

      },


      firstFrame : function(event){

        var currentItem = this.jw.getPlaylistItem();

        // Tracking for comScore or other GA states.
        wweVideo.trackVideoState.bind(this)('firstFrame', currentItem, event);

        // Tracking playback
        wweVideo.trackVideoPlayback.bind(this)('start', this.customAdParams);
      },

      adComplete: function (event) {

        var self = this;

        var currentItem = self.jw.getPlaylistItem();
        wweVideo.trackVideoState.bind(self)('adComplete', currentItem);
        if (Drupal.behaviors.wweAnalytics !== undefined) {
          // Report comscore.
          Drupal.behaviors.wweAnalytics.comScore.stop();
        }
      },


      adPlay: function (event) {

        var self = this;
        var currentItem = self.jw.getPlaylistItem();

        // Record ad resume for tracking.
        if (event.oldstate == 'paused') {
          wweVideo.trackVideoState.bind(self)('adResume', currentItem, null, null, {isClick : true});
        }else {
          //wweVideo.trackVideoState.bind(self)('adPlay', currentItem, event, null, {isClick : true});
        }

        // Report comscore on Ad Play.
        if (Drupal.behaviors.wweAnalytics !== undefined && !!Drupal.behaviors.wweAnalytics.comScore) {
          Drupal.behaviors.wweAnalytics.comScore.playVideoAdvertisement();
        }

      },

      adTime : function(event){

        var self = this;
        var currentItem = self.jw.getPlaylistItem();
        // This is to be used in adComplete event tracking.
        self.adDuration = event.duration;
        // Track adPlay just once.
        if ((self.adCurrentVideoNid === undefined) || (self.adCurrentVideoNid != currentItem.nid)) {
          wweVideo.trackVideoState.bind(self)('adPlay', currentItem, event);
        }

        var adQ1 = event.duration*0.25;
        var adQ2 = event.duration*0.5;
        var adQ3 = event.duration*0.75;

        switch (true) {
          case event.position > adQ1 && event.position <= adQ2
          && ((self.adQ1CurrentVideoNid === undefined) || (self.adQ1CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('ad_25_watched', currentItem, event);
            self.adQ1CurrentVideoNid = currentItem.nid;
            break;
          case event.position > adQ2 && event.position <= adQ3
          && ((self.adQ2CurrentVideoNid === undefined) || (self.adQ2CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('ad_50_watched', currentItem, event);
            self.adQ2CurrentVideoNid = currentItem.nid;
            break;
          case event.position > adQ3
          && ((self.adQ3CurrentVideoNid === undefined) || (self.adQ3CurrentVideoNid != currentItem.nid)):
            wweVideo.trackVideoState.bind(self)('ad_75_watched', currentItem, event);
            self.adQ3CurrentVideoNid = currentItem.nid;
            break;
        }

      },


    },


    /**
     * Creates data to track the start and stop of a video play.
     *
     * @param event string The event that is happening, start or complete.
     * @param customParams array Custom parameters of the current video.
     */
    trackVideoPlayback: function(event, customParams) {
      if (Drupal.settings.WWE.language === 'de') {
        return;
      }
      var sizes = {};
      // Define a non-active DOM for defaults.
      var target = 'wwe-video-explorer--track-playback';
      if (event === 'start') {
        sizes = {
          desktop: '[100,1]',
          tablet: '[100,1]',
          phone: '[100,1]'
        };
        target = 'wwe-video-explorer--track-playback-start';
      }
      else if (event === 'complete') {
        sizes = {
          desktop: '[100,2]',
          tablet: '[100,2]',
          phone: '[100,2]'
        };
        target = 'wwe-video-explorer--track-playback-end';
      }
      var slot = {
        type: 'playback-track',
        target: target,
        sizes: sizes,
        interstitial: false,
        customvars: customParams
      };
      // if (typeof Drupal.behaviors.WWEAds.adSlots[target] !== 'undefined') {
      //   for (var key in customParams) {
      //     Drupal.behaviors.WWEAds.adSlots[target].setTargeting(key, customParams[key]);
      //   }
      // }
      // else {
      //   Drupal.behaviors.WWEAds.defineSlot(slot);
      // }
      // Drupal.behaviors.WWEAds.displaySlot(target, true);
    },

    /**
     * Function trackVideoState() passes data so we can run it through our custom tracking event.
     *
     * @param type <string> represents what the video player did - play, pause, etc.
     * @param video <obj> data about the video we may need to pass to track.
     * @param event
     * @param options
     * @param eventDetail
     */
    trackVideoState: function(type, video, event, options, eventDetail) {
      var self = this;
      var eventCategory = self.isEventCategory ? self.isEventCategory : 'Video Player';

      var playType;
      var playerSize;
      var playTypeAd;
      var playTypeVideo;
      var playTypeAdComplete;
      var playTypeVideoComplete;

      if(!eventDetail) {
         eventDetail = {};
       }

      if (self.jw.getFullscreen()) {
        playerSize = 'fullscreen';
      }
      else {
        playerSize = 'standard';
      }

      // Just the first video comes with extra data such as the playlist info.
      // @see ct_video_playlist_items().
      var firstVideo = self.jw.getPlaylistItem(0);
      var isFirstVideo = !wweVideo.getFirstVideoCompleted.bind(self)();

      if (firstVideo.nid != video.nid || !isFirstVideo) {
        playType = 'autoPlay';
        playTypeAd = 'ad_start_advance';
        playTypeVideo = 'video_start_advance';
        playTypeAdComplete = 'ad_end_advance';
        playTypeVideoComplete = 'video_end_advance';
      }
      else {
        if (isFirstVideo) {
          playType = 'clickPlay';
          playTypeAd = 'ad_start_click';
          playTypeVideo = 'video_start_click';
          playTypeAdComplete = 'ad_end_click';
          playTypeVideoComplete = 'video_end_click';
        }
        else if(document.referrer.indexOf("facebook.com") > -1) {
          playType = 'autoPlay';
          playTypeAd = 'ad_start_auto';
          playTypeVideo = 'video_start_auto';
          playTypeAdComplete = 'ad_end_click';
          playTypeVideoComplete = 'video_end_click';
        }
        else if(document.referrer.indexOf("twitter.com") > -1) {
          playType = 'autoPlay';
          playTypeAd = 'ad_start_auto';
          playTypeVideo = 'video_start_auto';
          playTypeAdComplete = 'ad_end_auto';
          playTypeVideoComplete = 'video_end_auto';
        }
        else if(document.referrer.indexOf("tumblr.com") > -1) {
          playType = 'autoPlay';
          playTypeAd = 'ad_start_auto';
          playTypeVideo = 'video_start_auto';
          playTypeAdComplete = 'ad_end_auto';
          playTypeVideoComplete = 'video_end_auto';
        }
        else if(document.referrer.indexOf("pinterest.com") > -1) {
          playType = 'autoPlay';
          playTypeAd = 'ad_start_auto';
          playTypeVideo = 'video_start_auto';
          playTypeAdComplete = 'ad_end_auto';
          playTypeVideoComplete = 'video_end_auto';
        }
        else if(video.path == location.pathname) {
          playType = 'autoPlay';
          playTypeAd = 'ad_start_auto';
          playTypeVideo = 'video_start_auto';
          playTypeAdComplete = 'ad_end_auto';
          playTypeVideoComplete = 'video_end_auto';
        }
        else {
          // We're in a video or playlist page.
          playType = 'autoStart';
          playTypeAd = 'ad_start_advance';
          playTypeVideo = 'video_start_advance';
          playTypeAdComplete = 'ad_end_advance';
          playTypeVideoComplete = 'video_end_advance';
        }

        if (self.breakpoint === 'mobile' || self.breakpoint === 'tablet') {
          if (playTypeVideo == 'video_start_auto') {
            playTypeVideo = 'video_start_click';
          }

          if (playTypeAd == 'ad_start_auto') {
            playTypeAd = 'ad_start_click';
          }
        }
      }

      // German site prohibits autostarting and auto advancing.
      if (Drupal.settings.WWE.language == 'de') {
        playTypeAd = 'ad_start_click';
        playTypeVideo = 'video_start_click';
        playTypeAdComplete = 'ad_end_click';
        playTypeVideoComplete = 'video_end_click';
      }

      // Set metadata based on video type for comscore.
      var comscoreMetadata = {
        // Content ID.
        ns_st_ci: video.nid,
        // Video Title.
        c3: video.title,
        // Bitrate Value.
        c4: '*null',
        c5: '*null',
        // Station Title.
        ns_st_st: 'WWE.com',
        // Program Title.
        ns_st_pr: video.show_name,
        // Episode Title.
        ns_st_ep: video.episode_name,
        // Season Number.
        ns_st_sn: '*null',
        // Episode Number.
        ns_st_en: '*null',
        // Content Genre.
        ns_st_ge: '*null',
        // TMS/Gracenote ID.
        ns_st_ti: '*null',
        // Ad Load Flag.
        ns_st_ia: '*null',
        // Complete Episode Flag.
        ns_st_ce: '*null',
        // Digital Air Date.
        ns_st_ddt: '*null',
        // TV Airdate.
        ns_st_tdt: '*null'
      };

      var contentType = wweVideo.getContentType(self.jw);
      var label = video === undefined ? type : video.title + ' | vms_id=' + video.vms_id;

      if (typeof options == 'undefined') {
        var options = [];
      }

      if (typeof(wwe_ga_dataLayer) != 'undefined') {
        switch (type) {
          case 'adPlay':
            wwe_ga_dataLayer.push({
              'contentType': contentType,
              'videoAdPrerollDuration': Math.round(event.duration),
              'videoInitPrerollTitle': video.title,
              'videoAdPlayerSize': playerSize,
              'event': 'videoAdPlayEvent',
              'eventCategory': eventCategory,
              'eventAction': playTypeAd,
              'eventLabel': label,
              'eventValue': 0
            });

            // ad duration, we're tracking it from adTime event, which fires many times.
            self.adCurrentVideoNid = video.nid;
            break;
          case 'adComplete':
            wwe_ga_dataLayer.push({
              'videoAdDurationEnd': Math.round(self.adDuration),
              'videoInitPrerollTitleEnd': video.title,
              'event': 'videoAdCompleteEvent',
              'eventCategory': eventCategory,
              'eventAction': playTypeAdComplete,
              'eventLabel': label,
              'eventValue': 0
            });
            self.adCurrentVideoNid = video.nid;
            break;
          case 'play':
            wwe_ga_dataLayer.push({
              'contentType': contentType,
              'videoPlayDuration': Math.round(event.duration),
              'videoPlayTitle': video.title,
              'videoPlaylist': firstVideo.playlist_title,
              'videoPlayerSize': playerSize,
              'event': 'videoPlayEvent',
              'eventCategory': eventCategory,
              'eventAction': playTypeVideo,
              'eventLabel': label,
              'eventValue': 0
            });
            // This is to track play just once, same as adPlay above.
            self.currentVideoNid = video.nid;
            // Convert duration from milliseconds to seconds.
            comscoreMetadata.ns_st_cl = Math.round(event.duration * 1000);

            if (!!Drupal.behaviors.wweAnalytics && !!Drupal.behaviors.wweAnalytics.comScore) {
              // Ensure previous event was stopped prior to initializing.
              Drupal.behaviors.wweAnalytics.comScore.stop();
              // Report comscore after GA to build a complete metadata object.
              Drupal.behaviors.wweAnalytics.comScore.playVideoContentPart(comscoreMetadata);
            };
            break;
          case 'videoResume':
            if (!!Drupal.behaviors.wweAnalytics && !!Drupal.behaviors.wweAnalytics.comScore) {
              // Report comscore after GA to build a complete metadata object.
              Drupal.behaviors.wweAnalytics.comScore.playVideoContentPart(comscoreMetadata);
            };
            break;
          case 'complete':
            wwe_ga_dataLayer.push({
              'event': 'analyticsEvent',
              'eventCategory': eventCategory,
              'eventAction': playTypeVideoComplete,
              'eventLabel': label,
              'eventValue': 0
            });
            self.adCurrentVideoNid = video.nid;
            if (!!Drupal.behaviors.wweAnalytics && !!Drupal.behaviors.wweAnalytics.comScore) {
              // Send a stop event on video stop to Comscore.
              Drupal.behaviors.wweAnalytics.comScore.stop();
            }
            break;
          case 'firstFrame':
            // Start fires on JW firstFrame API. Ensure on first frame we reset
            // the comscore tracking parameters.
            if (!!Drupal.behaviors.wweAnalytics && !!Drupal.behaviors.wweAnalytics.comScore) {
              // Send a stop event on video stop to Comscore.
              Drupal.behaviors.wweAnalytics.comScore.stop();
            }
            break;
          case 'videoPause':
            // Send a stop event on video pause to Comscore.
            if (!!Drupal.behaviors.wweAnalytics && !!Drupal.behaviors.wweAnalytics.comScore) {
              Drupal.behaviors.wweAnalytics.comScore.stop();
            }
            break;
          case 'video_bit_rate':
            wwe_ga_dataLayer.push({
              'videoBitRatePlay': options,
              'event': 'videoBitRatePlayEvent',
              'eventCategory': eventCategory,
              'eventAction': type,
              'eventLabel': label,
              'eventValue': 0
            });
            // This is to track video bit rate.
            break;
          default:
            break;
        }

        var quartilesTypes = [
          'ad_25_watched',
          'ad_50_watched',
          'ad_75_watched',
          'video_25_watched',
          'video_50_watched',
          'video_75_watched'
        ];
        var duration = 0;
        if ($.inArray(type, quartilesTypes) !== -1) {
          duration = Math.round(event.duration);
        }

        // This is to track other video_explorer type of event stop,complete other etc.
        if (type != 'adPlay' && type != 'adComplete' && type != 'play' && type != 'video_bit_rate' && type != 'complete' && type !== 'firstFrame') {
          wwe_ga_dataLayer.push({
            'event': 'analyticsEvent',
            'eventCategory': eventCategory,
            'eventAction': type,
            'eventLabel': label,
            'eventValue': duration
          });
        }
      }
    },

    /**
     * Function trackVideoStateLight() passes data so we can run it through our custom tracking event.
     *
     * @param type <string> represents what the video player did - play, pause, etc.
     * @param video <obj> data about the video we may need to pass to track.
     * @param event
     * @param options
     * @param eventDetail
     */
    trackVideoStateLight: function(type, video, event, options, eventDetail) {
      var self = this;
      var eventCategory = self.isEventCategory ? self.isEventCategory : 'Video Player';
      var user_Entitled = Drupal.behaviors.wweAnalytics.getEntitlementsUser();

      if(!eventDetail) {
        eventDetail = {};
      }

      var label = video === undefined ? type : video.title + ' | vms_id=' + video.vms_id;

      if (typeof options == 'undefined') {
        var options = [];
      }
      /*wwe_ga_dataLayer.push({
        'event': 'analyticsEvent',
        'eventCategory': eventCategory,
        'eventAction': type,
        'eventLabel': label,
        'eventValue': user_Entitled
      });*/

      if (typeof(wwe_ga_dataLayer) != 'undefined') {
        switch (type) {
          case 'WWE Network Click':
            wwe_ga_dataLayer.push({
              'event': 'analyticsEvent',
              'eventCategory': type,
              'eventAction': 'Video End Card',
              'eventLabel': 'Button',
              'eventValue': user_Entitled
            });
            break;
          case 'video_share_attempt':
            wwe_ga_dataLayer.push({
              'event': 'analyticsEvent',
              'eventCategory': eventCategory,
              'eventAction': type,
              'eventLabel': label,
              'eventValue': user_Entitled
            });

          default:
            break;
        }
      }
    },

    /**
     * Fire event when wweVideo is available.
     */
    setWweVideoReady : function(){
      var event = new Event('wweVideoReady');
      document.dispatchEvent(event);
    },


    wweVideoShare : {

      open : function (event) {

        var playerInstance = this;
        var currentVideo = this.jw.getPlaylistItem();

        // Set state of player before share.
        this.preShareState = this.jw.getState();

        // Pause the player.
        this.jw.pause(true);

        var playerEl = document.getElementById(this.jw.id);
        playerEl.classList.add('jw-flag-overlay-open-sharing');
        var shareOverlay = wweVideo.wweVideoShare.showShareOverlay(playerEl, currentVideo);
        wweVideo.wweVideoShare.attachShareActions(shareOverlay, currentVideo, playerInstance);
        Drupal.behaviors.wweThemeSocialShare.init();
        this.shareOverlayOpen = true;
        this.jw.dispatchEvent('share-overlay-open');
      },
      close : function (event) {
        var playerEl = document.getElementById(this.jw.id);

        if(this.preShareState === 'playing') {
          this.jw.pause(false);
        }
        wweVideo.wweVideoShare.hideShareOverlay(playerEl);
        playerEl.classList.remove('jw-flag-overlay-open-sharing');
        this.shareOverlayOpen = false;
        this.jw.dispatchEvent('share-overlay-closed');
      },
      overlayClassSelector : 'wwe-video-share-overlay',
      clipboardInitialized : false,
      getShareTitle : function(video){
        return video.title || document.title;
      },
      getShareDescription : function(video){
        return video.description || document.title;
      },
      getShareLink : function(video){
        return video.abs_path || location.href;
      },
      getShareImage : function(video){
        if(video.image) {
          if(video.image.indexOf('http') < 0) {
            return location.protocol + '//' + location.host + video.image;
          }
          return video.image;
        }
        return '';
      },
      getPlayerWidth: function(){},

      hideShareOverlay : function(jwEl){
        var shareOverlay = jwEl.querySelector('.'+this.overlayClassSelector);
        if(shareOverlay) {
          shareOverlay.classList.add('share-overlay-hidden');
        }
      },
      showShareOverlay : function(jwEl, currentVideo){

        var shareOverlay = jwEl.querySelector('.'+this.overlayClassSelector);

        if(!shareOverlay) {
          shareOverlay = this.createShareOverlay(jwEl);
        }

        // If not desktop, add class to make experience mobile.
        if(wweVideo.getBreakpoint().toLowerCase() !== 'desktop') {
          shareOverlay.classList.add('mobile');
        }

        // Setup the new overlay html.
        shareOverlay.innerHTML = this.videoShareTpl(currentVideo);

        // Add clipboard.js
        this.requireClipboard();

        // Remove hidden class in the case that it has been added.
        shareOverlay.classList.remove('share-overlay-hidden');

        return shareOverlay;
      },

      requireClipboard : function(){
        if(!this.clipboardInitialized) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js';
          script.onload = this.attachClipboard;
          document.body.appendChild(script);
        }else{
          this.attachClipboard();
        }
        this.clipboardInitialized = true;
      },

      attachClipboard : function(){
        if(typeof Clipboard !== 'undefined') {
          new Clipboard('.share-button--copy-link');
        }
      },

      attachShareActions : function(overlay, currentVideo, playerInstance){
        var $overlay = $(overlay);
        var closeBtn = $overlay.find('.share-overlay--close-button');
        closeBtn.on('click', this.close.bind(playerInstance));
      },

      createShareOverlay : function (jwEl) {
        var overlayEl = document.createElement('div');
        overlayEl.classList.add(this.overlayClassSelector);
        jwEl.appendChild(overlayEl);
        return overlayEl;
      },

      getFacebookShareLink : function(video){

        var link = 'https://www.facebook.com/dialog/share?';
        var fb_id = Drupal.settings.wwe_social_media.fbAppId;
        var shareLink = this.getShareLink(video);

        var params = {
          app_id : fb_id,
          href : shareLink,
          redirect_uri : shareLink,
        };

        return link + wweVideo.stringifyObject(params);

      },

      getTwitterShareLink : function(video){

        var link = 'https://twitter.com/intent/tweet?';

        var params = {
          url : this.getShareLink(video),
          text : this.getShareTitle(video),
          via : 'wwe'
        };

        return link + wweVideo.stringifyObject(params);

      },


      getEmailShareLink : function(video){

        var link = 'mailto:?';
        var title = this.getShareTitle(video);
        var shareLink = this.getShareLink(video);
        var body = "Check this out on WWE.com:\n\n"
          + title + "\n\n"
          + shareLink;
        var params = {
          subject : title,
          body : body
        };

        return link + wweVideo.stringifyObject(params);

      },

      getDataTrackingLabel : function(title,provider){
        return title + "|social|channel=" + provider;
      },

      videoShareTpl : function(video){
        var self = this;
        var title = this.getShareTitle(video);
        var description = this.getShareDescription(video);
        var link = this.getShareLink(video);
        var image = this.getShareImage(video);
        var facebookShareLink = this.getFacebookShareLink(video);
        var twitterShareLink = this.getTwitterShareLink(video);
        var emailShareLink = this.getEmailShareLink(video);
        wweVideo.trackVideoStateLight.bind(self)('video_share_attempt',video);
        var trackingLabel = function(provider){
          return self.getDataTrackingLabel(title,provider)
        };

        var tpl = '<div class="share-actions">' +
            '<div class="share-actions--header">' +
              '<span class="share-actions--title">Share video</span>' +
              '<button class="share-overlay--close-button">&times;</button>' +
            '</div>' +
            '<div class="share-actions--body">' +
              '<div class="share-actions--buttons">' +
                '<button class="share-button--copy-link" data-clipboard-target="#wwe-video-share-copy-input">Copy Link</button>' +
                '<a class="share-button--facebook js-fb-share js-track" data-fb-url="' + encodeURIComponent(link) + '" data-fb-img="' + encodeURIComponent(image) + '" data-fb-title="' + title + '" href="' + facebookShareLink + '" data-tracking-label="' + trackingLabel('facebook') + '"></a>' +
                '<a class="share-button--twitter js-track icon-twitter" href="' + twitterShareLink + '" target="_blank" data-tracking-label="' + trackingLabel('twitter') + '"></a>' +
                '<a class="share-button--email js-track" href="' + emailShareLink + '" data-tracking-label="' + trackingLabel('email') + '"></a>' +
              '</div>' +
              '<div class="share-link-box"><input id="wwe-video-share-copy-input" class="share-link--textarea" readonly value="' + link + '"/></div>' +
            '</div>' +
          '</div>' +
          '<div class="share-copy">' +
            '<div class="share-title">' + title + '</div>' +
            '<div class="share-description">' + description + '</div>' +
          '</div>';
        return tpl;
      },

    },


  };

  // Make sure wweVideo is bound to window scope.
  window.wweVideo = wweVideo;

  // Fire video ready event.
  wweVideo.setWweVideoReady();

})(jQuery);
