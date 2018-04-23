var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.4.6',
  'files': '/trigger/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'XnN2LQkjLzuDfUly/WsSkA==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'macys.com',
  'site_id': 'macys.com',
  'attach': false,
  'renderer': 'W3C',
  // or "ASRECORDED"
  'layout': 'CENTERFIXED',
  // or "LEFTFIXED" or "LEFTSTRETCH" or "CENTERSTRETCH"
  'triggerDelay': 0,
  'heartbeat': true,
  'enableAMD': false,
  'pools': [{
    'path': '.',
    'sp': 100 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'sites': [{
    'name': 'macys',
    'path': /\w+-?\w+\.(com|org|edu|gov|net|co\.uk)/
  },
  {
    'name': 'macys',
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
  FSR.surveydefs = [
  //Carey 4/25/2016 Enabled cxreplay for mobile and enabled phone def
  // Kyle 3/3/2016 Phone definitions have been commented out for production.
  // Client unable to test changes prior to this morning's push to produciton
  // Mobile definitions **are** live in staging. Waiting to move
  // to Prod when the client is live with responsive desktop

  {
    site: 'macys',
    name: 'mobile_web',
    platform: 'phone',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Tell us what you think!",
          blurb: "Can we email or text you later for a brief survey so we can improve your mobile experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No thanks",
          acceptButton: "Yes, I'll help"
        }],
        [{
          reverseButtons: false,
          headline: "Thanks for helping!",
          blurb: "Please enter your mobile phone number or email address.  After your visit, we'll send you a link to a brief survey.  Text messaging rates apply.<br /><br />ForeSee's <a href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a><br /><br />",
          attribution: "Conducted by ForeSee.",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            // e for email only, s for sms
            // only, b for both
            inputMessage: "mobile number or email",
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
      sp: 20,
      // 20
      lf: 3
    },
    include: {
      urls: ['.']
    }
  },


  {
    site: 'macys',
    name: 'tablet_web',
    platform: 'tablet',
    invite: {
      when: 'onentry',
      // Mobile On Exit
      dialogs: [
        [{
          reverseButtons: false,
          headline: "Tell us what you think!",
          blurb: "Can we email or text you later for a brief survey so we can improve your tablet experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No thanks",
          acceptButton: "Yes, I'll help"
        }],
        [{
          reverseButtons: false,
          headline: "Thanks for helping!",
          blurb: "Please enter your email address or mobile phone number.  After your visit, we'll send you a link to a brief survey.  Text messaging rates apply.<br /><br />ForeSee's <a href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a><br /><br />",
          attribution: "Conducted by ForeSee.",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          error: "Error",
          mobileExitDialog: {
            support: "b",
            // e for email only, s for sms
            // only, b for both
            inputMessage: "mobile number or email",
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
      sp: 25,
      // 25
      lf: 5
    },
    include: {
      urls: ['.']
    }
  },
  {
    site: 'macys',
    name: 'browse',
    section: 'pu',
    platform: 'desktop',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later',
      pu: true,
    },
    tracker: {
      alert: {
        enabled: false,
        message: 'The survey is now available.'
      }
    },
    criteria: {
      sp: 3,
      lf: 1
    },
    include: {
      urls: ['/bag/', 'expressPaypal', '/chkout/startcheckout', '/creditservice/main', '/account/profile', '/creditservice/marketing/benefits', '/creditservice/gateway', '/account/myaccount']
    }
  },
  {
    site: 'macys',
    name: 'browse',
    platform: 'desktop',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 3,
      lf: 5
    },
/*
			 * links: { pop: [{ tag: 'img', attribute: 'id', patterns:
			 * ['checkoutWithPayPal'], pu: true }, { tag: 'img', attribute:
			 * 'id', patterns: ['submitPaypal'], pu: true }] },
			 */
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: [120, 90],

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
          blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
          // noticeAboutSurvey: "The survey is designed to measure your entire
          // experience, please look for it at the <u>conclusion</u> of your
          // visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window"

/*
		 * ,quizContent: { question: "Did you shop today at the store?",
		 * answers:[ { answer:"Yes, absolutely.", proceedWithSurvey:true }, {
		 * answer:"No, I didn't, actually", proceedWithSurvey:false,
		 * cancelTitle: "Thank you.", cancelText: "Thank you for your
		 * willingness to help, but we're not collecting surveys for
		 * non-shoppers.<br><br>Please visit again soon!" } ] }
		 */
        }]
      ],

      /* invite positioning */

      position: {
        offset: {
          h: "0px",
          v: "0px"
        },
        pin: {
          left: false,
          right: true,
          top: false,
          bottom: true
        }
      },

      // Mobile
/*
		 * dialogs : [[{ reverseButtons: false, headline: "We'd welcome your
		 * feedback!", blurb: "You have been selected to participate in a brief
		 * customer satisfaction survey to let us know how we can improve your
		 * experience.", attribution: "Conducted by ForeSee.", declineButton:
		 * "No, thanks", acceptButton: "Yes, I'll help", error: "Error",
		 * warnLaunch: "this will launch a new window" }]],
		 */
      // Mobile On Exit
/*
		 * dialogs : [ [ { reverseButtons: false, headline: "We'd welcome your
		 * feedback!", blurb: "Can we email or text you later a brief customer
		 * satisfaction survey so we can improve your mobile experience?",
		 * attribution: "Conducted by ForeSee.", declineButton: "No, thanks",
		 * acceptButton: "Yes, I'll help", error: "Error" } ], [ {
		 * reverseButtons: false, headline: "Thank you for helping!", blurb:
		 * "Please provide your email address or mobile number (US and CA only).
		 * After your visit we'll send you a link to the survey. Text Messaging
		 * rates apply.", attribution: "ForeSee's <a class='fsrPrivacy'
		 * href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy
		 * Policy</a>", declineButton: "Cancel", acceptButton: "email/text me",
		 * error: "Error", mobileExitDialog: { support:"b", //e for email only,
		 * s for sms only, b for both inputMessage:"email or mobile number",
		 * emailMeButtonText:"email me", textMeButtonText:"text me",
		 * fieldRequiredErrorText:"Enter a mobile number or email address",
		 * invalidFormatErrorText:"Format should be: name@domain.com or
		 * 123-456-7890" } } ] ],
		 */
      exclude: {
        urls: ['/myinfo', '/signin', '/account/profile', '/account/wallet', '/chkout/', '/checkout/', '/bag/', '/shippingfees/', '/checkoutswf/', '/registrycaptureemail', '/registrysearch', '/registrysignin'],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [],
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
      fasttimeout: 4,

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
/*
		 * isAuthenticated: { init: 'none', source: 'variable', name: 'isAuth' },
		 * MEW_2_0: { source: 'cookie', name: 'm_sl', init: 'false' }, Currency: {
		 * source: 'cookie', name: 'auth', init: 'false' }, Shipping_Country: {
		 * source: 'cookie', name: 'auth', init: 'false' }, SEGMENT: { source:
		 * 'cookie', name: 'SEGMENT', init: '0' },
		 */
      Coremetrics_ID: {
        source: 'cookie',
        name: 'CoreID6'
      },
      Coremetrics_ID: {
        source: 'variable',
        name: '_$cV1'
      }
/*
	 * , Reg_Manage: { source: 'url', init: 'n', patterns: [{ regex:
	 * 'macys.com/registry/wedding/registrymanager', value: 'y' }] }, CO_Guest: {
	 * source: 'url', init: 'n', patterns: [{ regex:
	 * 'macys.com/chkout/shipping', value: 'y' }] }, CO_Signin: { source: 'url',
	 * init: 'n', patterns: [{ regex: 'macys.com/chkout/shippingpayment', value:
	 * 'y' }] }, Order_Confirm: { source: 'url', init: 'n', patterns: [{ regex:
	 * 'macys.com/chkout/confirm', value: 'y' }] }, Bag: { source: 'url', init:
	 * 'n', patterns: [{ regex: 'macys.com/bag/index.ognc', value: 'y' }] },
	 * Account: { source: 'url', init: 'n', patterns: [{ regex:
	 * 'macys.com/account/myaccount', value: 'y' }] }, PDP_ID: { source:
	 * 'parameter', name: 'ID', init: 'n' }, PDP_Cat_ID: { source: 'parameter',
	 * name: 'CategoryID', init: 'n' }, Cats_ID: { source: 'parameter', name:
	 * 'id', init: 'n' }
	 */
    },

    mode: 'first-party'
  };
  FSR.CPPS.set('cxreplayaws', 'true');
  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);