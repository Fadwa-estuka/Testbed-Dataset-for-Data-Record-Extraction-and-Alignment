var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.4.12',
  'files': '/trigger/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'ERcYlgQhMZgswME8lFVQJA==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'homedepot.com',
  'site_id': 'homedepot.com',
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
    'sp': 20 // CHANGE ONLY WHEN INCLUDING SESSION REPLAY
  }],
  'repools': [{
    path: '.',
    sp: 100
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
    name: 'tablet',
    invite: {
      when: 'onentry',
      dialogs: [
        [{
          reverseButtons: false,
          headline: "We would like your feedback.",
          blurb: "Can we email or text you a brief customer satisfaction survey so we can improve your experience?",
          attribution: "Conducted by ForeSee.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll help",
          locale: "en"
        }],
        [{
          reverseButtons: false,
          headline: "Thank you for helping!",
          blurb: "Please provide your email address or mobile phone number. After your visit we'll send you a link to the survey. Standard Message and Data Rates Apply.<br /><br />ForeSee's <a href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a><br /><br />",
          attribution: "Conducted by ForeSee.",
          declineButton: "Cancel",
          acceptButton: "email/text me",
          locale: "en",
          mobileExitDialog: {
            support: "b",
            //e for email only, s for sms only, b for both
            inputMessage: "email or Phone Number",
            emailMeButtonText: "email me",
            textMeButtonText: "text me",
            fieldRequiredErrorText: "Enter a phone number or email address",
            invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
          }
        }]
      ]
    },
    platform: 'mobile',
    pop: {
      when: 'later'
    },
    criteria: {
      sp: [40, 40],
      lf: 3
    },
    include: {
      urls: ['.']
    }
  },
  {
    name: 'blinds',
    pin: 1,
    invite: {
      when: 'onentry'
    },
    platform: 'desktop',
    pop: {
      when: 'later'
    },
    criteria: {
      sp: [50, 0],
      lf: 2
    },
    include: {
      urls: ['/SV_HS_Bathroom_Remodeling', '/IS_Shower_Door_Installation', '/SV_HS_Toilet_Installation', '/IS_Tub_Shower_Liner_Installation', '/IS_Walk_In_Tub_Installation', '/SV_HS_Water_Softeners_Filters', '/IS_Blinds_Shades_Installation', '/SV_HS_Interior_Shutters', '/SV_HS_Custom_Home_Organization', '/SV_HS_Door_Installation', '/SV_HS_Windows_Installation', '/SV_HS_Fencing_Installation', '/SV_HS_Garage_Doors_Openers_Installation', '/SV_HS_Garage_Doors_Openers_Installation', '/SV_HS_Garage_Doors_Openers_Installation', '/SV_HS_Custom_Home_Organization', '/SV_HS_Gutters_Leaf_Protection', '/SV_HS_Home_Insulation', '/SV_HS_Roofing', '/SV_HS_Sheds_Storage_Buildings_Installation', '/SV_HS_Siding', '/SV_HS_Solar_Power_Systems', '/SV_HS_Sunrooms_Screenrooms_Shade_Covers', '/SV_HS_Carpet_Installation', '/SV_HS_Wood_Flooring', '/IS_NHance_Wood_Renewal', '/SV_HS_Laminate_Flooring', '/c/SV_HS_Tile_Flooring', '/SV_HS_Vinyl_Flooring', '/IS_Express_Installation', '/SV_HS_HVAC_Replacement', '/SV_HS_HVAC_Maintenance', '/SV_HS_HVAC_Repair', '/SV_HS_Electrical_Services', '/SV_HS_Generator_Installation', '/SV_HS_Water_Heaters', '/IS_Water_Heater_Repair', '/SV_HS_Tankless_Water_Heaters', '/SV_HS_Kitchen_Cabinet_Installation', '/IS_Cabinet_Refacing', '/IS_NHance_Wood_Renewal', '/SV_HS_Countertop_Installation', '/SV_HS_Toilet_Installation', '/SV_HS_Water_Softeners_Filters']
    }
  },
  {
    name: 'browse',
    lock: 1,
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    platform: 'desktop',
    criteria: {
      sp: [0, 50],
      lf: 3
    },
    include: {
      urls: ['.']
    },
    links: {
      pause: [{
        tag: 'button',
        attribute: 'id',
        patterns: ['submitId1top']
      }],
      cancel: [{
        tag: 'input',
        attribute: 'value',
        patterns: ['ppContainer']
      }]
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: [90, 30],

    repeatoverride: false,

    altcookie: {
      name: 'foresee_survey',
      value: '1'
    },

    language: {
      locale: 'en'
    },

    exclude: {
      userAgents: ["Rigor"],
      cookies: [{
        name: "fsr.disable",
        value: "."
      },
      {
        name: "THD_INSTORE",
        value: "."
      }]
    },

    ignoreWindowTopCheck: false,

    ipexclude: 'fsr$ip',

    mobileHeartbeat: {
      delay: 60,
      /*mobile on exit heartbeat delay seconds*/
      max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },

    invite: {

      // For no site logo, comment this line:
      siteLogo: "sitelogo.gif",

      //alt text fore site logo img
      siteLogoAlt: "",

      /* Desktop */
      dialogs: [{
        reverseButtons: false,
        headline: "We'd welcome your feedback!",
        blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
        noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
        attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
        closeInviteButtonText: "Click to close.",
        declineButton: "No, thanks",
        acceptButton: "Yes, I'll give feedback",
        error: "Error",
        warnLaunch: "this will launch a new window"
      }],

      exclude: {
        urls: ['/OrderItemDisplayViewShiptoAssoc', '/CheckoutSignIn', '/ShippingInfo', '/ShippingMethod', '/PaymentMethod', '/OrderDisplay', '/THDMobileBopisOverLay', '/THDMobileBossOverlay', '/THDMobileBossOverlay', '/LogonForm', '/OrderItemDisplayViewShiptoAssoc', '/FasterCheckoutSignIn', '/THDShippingInfo', '/ShippingMethod', '/PickUpPersonUpdate', '/DeliveryCalendar', '/THDPaymentMethod', '/AOLPartsServicesView', '/Bopis2OverLay', '/THDPlsLocalize', '/PickUpOptions', '/OrderItemUpdate', '/MobileOrderItemDisplayViewShiptoAssoc', '/MobileCheckoutSignIn', '/RememberMeCheckoutSignIn', '/THDMobileShippingInfo', '/MobileShippingMethod', '/THDMobilePickUpPersonUpdate', '/MobileDeliveryCalendar', '/MobileAOLPartsServicesView', '/THDMobileBopis2OverLay', '/OrderProcess', '/OrderPrepare', '/OrderCalculate', '/UserRegistrationForm', '/UserRegistrationAdd', '/ResetPasswordForm', '/DeliveryDetails', '/DeliveryDetailsAjaxView', '/DeliveryDetailsCmd', '/FetchCityStatesByZipCode', '/THDShippingDetailsCmd', '/ShippingDetailsAjaxView', '/THDPreCheckoutCmd', '/PayPalExpress', '/PayPalReturn', '/PayPalOrderReview', '/PayPalOrderProcess', '/EReceiptSummaryJSONView', '/OrderDetailsView', '/MyAcctWriteReview', 'MobileOrderItemDisplayViewShiptoAssoc', 'MobileCheckoutSignIn', 'MobileShippingMethod', 'MobilePickUpOptionsView', 'THDMobileOrderDisplay', 'MobileDeliveryCalendar', 'cart', 'checkout', '/Ordering/Cart', '/Ordering/OrderConfirmation/Express', 'THDChangePassword', 'ResetPswdAccView', 'ScheduleDeliveryDisplayView', '/Auth/Logon', '/User/Register', '/Auth/ForgotPassword', '/Auth/ResetPassword', '/MyList/CreateList', '/Cart/ViewCart.do', '/Cart/UpdateCart.do', '/Cart/cartOp.do', '/Checkout.do', 'MCCCheckout', '/Checkout/Paypal/Express.do'],
        referrers: [],
        userAgents: [],
        browsers: [],
        cookies: [{
          name: 'fsr.disable',
          value: '.'
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

      //SurveyMutex: 'SurveyMutex'
    },

    tracker: {
      width: '690',
      height: '415',

      // Timeout is the normal between-page timeout
      timeout: 10,

      // Fast timeout is when we think there's a good chance we've closed the browser
      fasttimeout: 7,

      adjust: true,
      alert: {
        enabled: false,
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
      referrer: true,
      terms: true,
      ref_url: false,
      url: true,
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
      fulfillStoreID: {
        source: 'variable',
        name: '_hddata.fulfillStoreID1'
      },
      purchase: {
        source: 'url',
        init: 'N',
        patterns: [{
          regex: '/OrderOKView',
          value: 'Y'
        },
        {
          regex: '/Confirmation.do',
          value: 'Y'
        }]
      },
      beta: {
        init: 'null',
        source: 'cookie',
        name: 'HD_DC'
      },
      ClickTaleUID: {
        source: 'function',
        value: function () {
          try {
            if (ClickTaleGetUID && ClickTaleGetUID instanceof Function) {
              var ClickTaleUID = ClickTaleGetUID();
              return ClickTaleUID;
            }
          }
          catch (e) {
            return null;
          }
        }
      }
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