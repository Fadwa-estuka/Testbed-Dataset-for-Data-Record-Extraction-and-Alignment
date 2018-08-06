!(function($) {
  'use strict';
  Drupal.WWEConviva = {
    customerKey: null,
    sessionId: null,
    touchstoneUrl: null,
    start: function (wweVideoInstance, customerKey, touchstoneUrl) {
      var self = this;
      self.customerKey = customerKey;
      self.touchstoneUrl = touchstoneUrl;
      self.init();
      wweVideoInstance.jw.on('playlistItem', function (event) {
        var currentItem = wweVideoInstance.jw.getPlaylistItem();
        self.createSession(currentItem, wweVideoInstance);
      });
      wweVideoInstance.jw.on('adPlay', function (event) {
        Conviva.LivePass.adStart(self.sessionId);
      });
      wweVideoInstance.jw.on('adComplete', function () {
        Conviva.LivePass.adEnd(self.sessionId);
      });
      wweVideoInstance.jw.on('firstFrame', function (event) {
        var streamer = new Conviva.ConvivaJwPlayerStreamerProxy(this);
        streamer.SetPlayingState('PLAYING');
        Conviva.LivePass.attachStreamer(self.sessionId, streamer);
      });
      wweVideoInstance.jw.on('beforeComplete', function () {
        self.cleanUpSession();
      });
      wweVideoInstance.jw.on('error', function (event) {
        Conviva.LivePass.reportError(self.sessionId, event.message);
        self.cleanUpSession();
      });
      wweVideoInstance.jw.on('remove', function () {
        self.cleanUpSession();
      });

      // Fired when player receives metadata.
      wweVideoInstance.jw.on('meta', function(meta) {
        // If segment data is received we have the current segment bitrate.
        if (meta && meta.metadata && meta.metadata.segment && meta.metadata.segment.httpStatus === 200) {
          Conviva.LivePass.setBitrate(self.sessionid, meta.metadata.segment.bitrate);
        }
      });
    },
    init: function () {
      var self = this;
      if (typeof self.touchstoneUrl !== 'undefined' && self.touchstoneUrl != '') {
        var settings = {};
        settings.gatewayUrl = (self.touchstoneUrl);
        Conviva.LivePass.initWithSettings(self.customerKey, settings);
      }
      else {
        Conviva.LivePass.init(self.customerKey);
      }
    },
    createSession: function (video, videoInstance) {
      var self = this;
      self.cleanUpSession();
      var videoPlayerType = videoInstance.isInline ? videoInstance.isInline : 'VideoLanding';
      var playerNameSites = self.getUserVideoPlayerName(videoPlayerType);
      var ipid ='';
      if (jQuery.cookie('ipid')) {
        ipid =jQuery.cookie('ipid');
      }
      var assetName = video === undefined ? type : video.title + ' | vms_id=' + video.vms_id; // required
      var tags = {
        VideoID: video.nid.toString(),
        Site: playerNameSites,
        PlayerVendor: "jw player",
        PlayerVersion: "7.8.2",
        IPID:ipid
      };
      var convivaMetadata = new Conviva.ConvivaContentInfo(assetName, tags);
      var expire_date = new Date(new Date().getTime() + 86400 * 365);
      convivaMetadata.defaultReportingCdnName = 'AKAMAI';
      convivaMetadata.streamUrl = video.file;
      convivaMetadata.playerName = "Jw " + playerNameSites;
      convivaMetadata.isLive = false;
      if (jQuery.cookie('wwe_Guid') == null) {
        jQuery.cookie('wwe_Guid', jQuery.cookie('_ga').split(".")[2], {
          expires: expire_date
        }, 'path=/', 'domain=.wwe.com;');
      }
      convivaMetadata.viewerId = jQuery.cookie('wwe_Guid');
      var options = {};
      // Enabling external bitrate reporting per WWEC-5155
      options[Conviva.LivePass.OPTION_EXTERNAL_BITRATE_REPORTING] = true;
      self.sessionId = Conviva.LivePass.createSession(null, convivaMetadata);
    },
    cleanUpSession: function () {
      var self = this;
      if (self.sessionId != null) {
        Conviva.LivePass.detachStreamer(self.sessionId);
        Conviva.LivePass.cleanupSession(self.sessionId);
        self.sessionId = null;
      }
    },
    getUserVideoPlayerName: function (type) {
      var webSiteByLanguage;
      if (Drupal.settings.WWE.language == 'de') {
        webSiteByLanguage = 'de.wwe.com';
      } else if (Drupal.settings.WWE.language == 'es') {
        webSiteByLanguage = 'espanol.wwe.com';
      } else if (Drupal.settings.WWE.language == 'en') {
        webSiteByLanguage = 'www.wwe.com';
      }
      return webSiteByLanguage + '_' + type;
    },
    generateGuid: function () {
      var result, i, j;
      result = '';
      for (j = 0; j < 32; j++) {
        if (j == 8 || j == 12 || j == 16 || j == 20)
          result = result + '-';
        i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
        result = result + i;
      }
      return result;
    }
  }
})(jQuery);
