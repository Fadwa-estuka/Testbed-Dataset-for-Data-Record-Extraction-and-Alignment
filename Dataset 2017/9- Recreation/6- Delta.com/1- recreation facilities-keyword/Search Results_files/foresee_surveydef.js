var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': false,
  'version': '18.1.21',
  'files': '/foresee/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'OBo48qFC6uSXhexFMN2yHg==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'delta.com',
  'site_id': 'delta.com',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': 'type=iPad%20App',
    'sp': 0 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  },
  {
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'path': '.',
    'domain': 'default'
  }],
  'storageOption': 'cookie',
  'nameBackup': window.name,
  'iframeHrefs': ["frameWorker.html"],
  'acceptableorigins': []
};

$$FSR.FSRCONFIG = {};

(function (config) {

  var FSR, supports_amd = !! config.enableAMD && typeof(_4c.global["define"]) === 'function' && !! _4c.global["define"]["amd"];

  if (!supports_amd) FSR = window.FSR;
  else FSR = {};
/*
 * ForeSee Survey Def(s)
 */
  FSR.surveydefs = [{
    name: 'browse_tablet',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Can we email or text you later a brief customer satisfaction survey so we can improve your  delta.com experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          error: "Error"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping",
          blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
          attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            // e for email only, s for sms
            // only, b for both
            inputMessage: "email or mobile number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a mobile number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: (typeof(delta) == 'undefined') ? 5 : delta.fstsp,
      // 5,
      lf: 4
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'browse',
    //map to regular Browse MID
    section: 'egift-fulfill',
    platform: 'desktop',
    pin: 1,
    invite: {
      when: 'onentry'
/*,
		 dialogs : [[{
		 reverseButtons : false,
		 headline : "We'd welcome your feedback!",
		 blurb : "Thank you for visiting Delta Air Lines. You've been randomly chosen to take part in a brief survey to let us know what we're doing well and where we can improve the SkyMiles section of the site.<br><br>Please take a few minutes to share your opinions, which are essential in helping us provide the best airline loyalty program experience possible.",
		 noticeAboutSurvey : "The survey is designed to measure your experience on the SkyMiles section of the site, however, please look for it at the <u>conclusion</u> of your visit to delta.com.",
		 attribution : "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
		 closeInviteButtonText : "Click to close.",
		 declineButton : "No, thanks",
		 acceptButton : "Yes, I'll give feedback",
		 error : "Error",
		 warnLaunch : "this will launch a new window"

		 }]]*/

    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 8,
      lf: 1 //2
    },
    include: {
      urls: ['egift/eGiftFulfill.action']
    }
  },
/*{
	name : 'browse', //map to new MID
	section : 'egift-abandon',
	platform : 'desktop',
	pin : 1,
	invite : {
		when : 'onentry'

	},
	pop : {
		when : 'later'
		//when : 'now'
	},
	criteria : {
		sp : 8,
		lf : 1 //2
	},
	include : {
		variables : [{
			name : ['window.location.href'],
			value : ['si.delta.com/egift/eGiftPurchase.action?icid=PROD_eGift_Launch', 'www.delta.com/egift/eGiftPurchase.action?icid=PROD_eGift_Launch']}],
		urls : ['egift/eGiftPurchase.action', 'egift/eGiftPurchase.action?icid=PROD_eGift_Launch', 'shop/gift-card.html']

	}
},*/
  {
    name: 'browse',
    section: 'functional-MER',
    platform: 'desktop',
    pin: 1,
    invite: {
      when: 'onentry'
/*,
		 siteLogo : "sitelogo_delta-vac.gif",
		 dialogs : [[{
		 reverseButtons : false,
		 headline : "We'd welcome your feedback!",
		 blurb : "Thank you for visiting Delta Air Lines. You've been randomly chosen to take part in a brief survey to let us know what we're doing well and where we can improve the Delta Vacations experience.<br><br>Please take a few minutes to share your opinions, which will help us provide the best online experience possible.",
		 noticeAboutSurvey : "The survey is designed to measure your Delta Vacations site experience, please look for it at the <u>conclusion</u> of your visit.",
		 attribution : "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
		 closeInviteButtonText : "Click to close.",
		 declineButton : "No, thanks",
		 acceptButton : "Yes, I'll give feedback",
		 error : "Error",
		 warnLaunch : "this will launch a new window"

		 }]]*/
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 0.5,
      lf: 2
    },
    include: {
      urls: ['/mytrips/', '/refunds/cancelTrip.action', '/booking/getItinForEdit', '/booking/editItin', '/booking/availableFlights', '/booking/pricedItinerary', '/booking/passengerInfo']
    }
  },
  {
    name: 'browse',
    platform: 'desktop',
    pin: 1,
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: (typeof(delta) == 'undefined') ? 1 : delta.fssp,
      // 1,
      lf: 4
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 180,

    repeatoverride: false,

    altcookie: {},

    language: {
      locale: 'en'
    },

    exclude: {},

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /* mobile on exit heartbeat delay seconds */
      max: 3600 /* mobile on exit heartbeat max run time seconds */
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      // alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We'd welcome your feedback!",
          blurb: "Thank you for visiting delta.com. You have been selected to participate in a customer satisfaction survey to let us know how we can improve your delta.com experience.",
          noticeAboutSurvey: "The survey is designed to measure your entire experience and so will appear at the end of your visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window"

        }]
      ],

      exclude: {
        urls: ['/profile/enrollprocess.action', '/findFlights.do', '/availableFlights.do', '/air-shopping/searchAction.action', '/pricedItineraries.do', '/passengerInfo.do', '/cart/', '/awards/', '/air-shopping/findFlights.action', '/polarisItin.do', '/pricedItinerary.do', '/verify_and_purchase_from_ism.do', '/booking/editItin.do ', '/cart/activity/jsp/fareRules.jsp', '/cart/activity/tripsummary', '/cart/activity/passengerinfo.action', '/cart/activity/reviewFlight.action', '/seat/RetrieveLSMAction', '/seat/RetrieveISMAction', '/cart/activity/expCkoReviewFlight.action', '/cart/activity/expCkoPwmAction.action', '/vacations/search.action', '/vacations/loadResults.action', '/vacations/loadOutBoundFlightResults.action', '/vacations/loadReturnFlightResults.action', '/vacations/loadChooseYourExtra.action', '/vacations/loadAllGroundTransportation.action', '/vacations/loadAllRentalCar.action', '/vacations/loadAllActivity.action', '/assign/activity/travelerinfo.action', '/book/activity/reviewpurchase.action', '/book/activity/completePurchase.action', '/contactus/pages/comment_complaint/', 'es.delta.com', 'pt.delta.com', 'zh.delta.com', 'zt.delta.com', 'ja.delta.com', 'de.delta.com', 'fr.delta.com', 'ru.delta.com', 'ko.delta.com', 'it.delta.com'],
        referrers: [],
        userAgents: ['Fly Delta iPad, iOS'],
        browsers: [],
        cookies: [{
          name: 'p23101_delta_cookie',
          value: ['1']
        }],
        variables: []
      },
      include: {
        local: ['.']
      },

      delay: 0,
      timeout: 0,

      hideOnClick: false,

      hideCloseButton: false,

      css: 'foresee_dhtml.css',

      hide: [],

      hideFlash: false,

      type: 'dhtml',
      /* desktop */
      // url: 'invite.html'
      /* mobile */
      url: 'invite-mobile.html',
      back: 'url'

      // SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the
      // browser
      fasttimeout: 10,

      adjust: false,
      alert: {
        enabled: true,
        message: 'The survey is now available.'
      },
      url: 'tracker.html'
    },

    survey: {
      width: 690,
      height: 600
    },

    qualifier: {
      footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
        accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee_dhtml.css',
      url: 'qualifying.html'
    },

    cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
    },

    pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
    },

    meta: {
      referrer: false,
      terms: false,
      ref_url: false,
      url: false,
      url_params: false,
      user_agent: false,
      entry: false,
      entry_params: false
    },

    events: {
      enabled: true,
      id: true,
      codes: {
        purchase: 800,
        items: 801,
        dollars: 802,
        followup: 803,
        information: 804,
        content: 805
      },
      pd: 7,
      custom: {}
    },

    previous: false,

    analytics: {
      google_local: false,
      google_remote: false
    },

    cpps: {
      TLSessionID: {
        source: 'cookie',
        name: 'TLTSID',
        init: 'none'
      },
      OptimostCreativeID: {
        source: 'cookie',
        name: 'opForeseeCreative',
        init: 'none'
      },
      fsLoc: {
        source: 'variable',
        name: 'window.location.href',
        init: 'none' // initial value of CPP if no variable exists
      },
      smNumber: {
        source: 'variable',
        name: 'CustomerInfo.getSkyMilesNumber()',
        init: 'none' // initial value of CPP if no variable exists
      },
      CampaignData: {
        source: 'variable',
        name: 'window.targetCtx',
        init: 'none'
      },
/*mbox : {
		 source : 'variable',
		 name : 'mbox.name',
		 init : 'none'
		 },
		 campaign : {
		 source : 'variable',
		 name : 'campaign.name',
		 init : 'none'
		 },
		 experience : {
		 source : 'variable',
		 name : 'campaign.recipe.name',
		 init : 'none'
		 },
		 offer : {
		 source : 'variable',
		 name : 'offer.name',
		 init : 'none'
		 },*/
      OMTR_BEACON: {
        source: 'function',
        value: function getAABeacon() {
          function getQueryValue(args, str) {
            var res = "",
                strb = str.split('&');
            for (var p = 0; p < strb.length; p++) {
              var bts = strb[p].split('=');
              for (var h = 0; h < args.length; h++) {
                if (args[h] == bts[0]) {
                  res += bts[0] + '=' + bts[1] + '&';
                  break;
                }
              }
            }
            if (res.substr(res.length - 1) == '&') {
              res = res.substr(0, res.length - 1);
            }
            return res;
          }

          var whitelist = ['AQB', 'mid', 'aid', 'vid', 'fid', 'AQE'],
              foundSrc = '';
          for (var p in window) {
            if ((p.substring(0, 4) == 's_i_') && (window[p].src)) {
              var src = window[p].src;
              if (src.indexOf('/b/ss/') >= 0) {
                foundSrc = src;
                break;
              }
            }
          }
          // TODO: also loop through document.images just in case
          if (!foundSrc && window.document.images) {
            for (var image_num = 0; image_num < window.document.images.length; image_num++) {
              var src = window.document.images[image_num].src;
              if (src.indexOf('/b/ss/') >= 0) {
                foundSrc = src;
                break;
              }
            }
          }
          if (!foundSrc && localStorage) {
            return (localStorage.getItem("fsr_om") || "");
          }

          var mainURL = foundSrc.substring(0, foundSrc.indexOf('?')),
              query = foundSrc.substring(foundSrc.indexOf('?') + 1),
              filteredQuery = '';
          filteredQuery = getQueryValue(whitelist, query);
          if (s && s.trackingServerSecure) {
            var mainURL = "https://" + s.trackingServerSecure + foundSrc.substring(foundSrc.indexOf('/b/ss/'), foundSrc.indexOf('?')),
                query = foundSrc.substring(foundSrc.indexOf('?') + 1),
                filteredQuery = '';
            filteredQuery = getQueryValue(whitelist, query);
          }
          var finalval = mainURL + '?' + filteredQuery;
          try {
            if (finalval && finalval.length > 0) {
              localStorage.setItem("fsr_om", finalval);
            } else {
              finalval = localStorage.getItem("fsr_om") || "";
            }
          } catch (e) {}
          return finalval;
        }
      }

    },

    mode: 'first-party'
  };

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);