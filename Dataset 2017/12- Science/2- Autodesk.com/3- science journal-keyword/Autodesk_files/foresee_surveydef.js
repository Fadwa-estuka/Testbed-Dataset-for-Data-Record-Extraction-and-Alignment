var $$FSR = {
  'enabled': true,
  'frames': false,
  'sessionreplay': true,
  'auto': true,
  'encode': true,
  'version': '18.1.21',
  'files': '/trigger/',
  // The 'swf_files' attribute needs to be set when foresee_transport.swf is not located at 'files'
  //'swf_files': '/some/other/location/'
  'id': 'uI65JZ5KGzlsjw4QMmQaUw==',
  'definition': 'foresee_surveydef.js',
  'swf': {
    'fileName': 'foresee_transport.swf',
    'scriptAccess': 'always'
  },
  'worker': 'foresee_worker.js',
  'embedded': false,
  'replay_id': 'autodesk.com',
  'site_id': 'autodesk.com',
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
    name: 'browse',
    section: 'student',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 2,
      lf: 2
    },
    include: {
      urls: ['students.autodesk.com', 'www.autodesk.com/education']
    }
  },
  {
    name: 'browse',
    invite: {
      when: 'onentry'
    },
    pop: {
      when: 'later'
    },
    criteria: {
      sp: 15,
      lf: 2
    },
    include: {
      urls: ['.']
    }
  }];

/*
 * ForeSee Properties
 */
  FSR.properties = {
    repeatdays: 90,

    repeatoverride: false,

    altcookie: {
      name: 'fsr.survey'
    },

    language: {
      locale: 'en',
      src: 'location',
      locales: [{
        match: '/de/',
        locale: 'de'
      },
      {
        match: '/ja/',
        locale: 'jp'
      }]
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
          noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
          attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
          closeInviteButtonText: "Click to close.",
          declineButton: "No, thanks",
          acceptButton: "Yes, I'll give feedback",
          error: "Error",
          warnLaunch: "this will launch a new window",

          locales: {
            "de": {
              headline: "Wir freuen uns auf Ihr Feedback!",
              blurb: "Vielen Dank für Ihren Besuch auf unserer Website. Sie wurden ausgewählt, um an einer kurzen Umfrage zur Kundenzufriedenheit teilzunehmen und uns mitzuteilen, was wir noch besser machen könnten.",
              noticeAboutSurvey: "Mit dieser Umfrage wird Ihr Gesamteindruck gemessen. Bitte halten Sie am <u>Ende</u> Ihres Besuchs danach Ausschau.",
              attribution: "Diese Umfrage wird von ForeSee, einem unabhängigen Unternehmen, im Auftrag der von Ihnen besuchten Website durchgeführt.",
              closeInviteButtonText: "Zum Schließen hier klicken",
              declineButton: "Nein, danke",
              acceptButton: "Ja, ich gebe gern Feedback",
              error: "Fehler",
              warnLaunch: "Dadurch wird ein neues Fenster geöffnet",
            },
            "jp": {
              headline: "ご意見をお聞かせください！",
              blurb: "弊社のウェブサイトにアクセスいただきありがとうございます。このたび、お客様の体験を改善するプロジェクトの一環として、お客様の満足度に関するアンケートへのご案内を送信させていただきました。お時間は取らせません。",
              noticeAboutSurvey: "このアンケート調査はお客様の全体的な体験を測定することを目的としています。本サイトの閲覧終了時に<u>結果</u>をご覧ください。",
              attribution: "このアンケート調査は、完全独立会社である ForeSee が、ご覧いただいているサイトを代表して実施します。",
              closeInviteButtonText: "閉じる。",
              declineButton: "お断りします",
              acceptButton: "はい。調査に参加します",
              error: "エラー",
              warnLaunch: "新しいウィンドウが開きます",
            }
          }
        }]
      ],

      exclude: {
        urls: ['knowledge-staging.autodesk.com', 'autodesk.co.jp', 'autodesk.de', '/diamond-club/welcome', '/platinum-club/welcome', /shop\.autodesk\.com/, /store\.autodesk/, /mexico\.autodesk\.com/, /latinoamerica\.autodesk\.com/, /asean\.autodesk\.com/, /saarc\.autodesk\.com/, /south-apac\.autodesk\.com/, /romania\.autodesk\.com/, /greece\.autodesk\.com/, /south-east-europe\.autodesk\.com/, /turkey\.autodesk\.com/, /\.ca/, /\.br/, /com\.au/, /\.cn/, /\.hk/, /\.in/, /\.kr/, /\.my/, /\.nz/, /\.sg/, /\.tw/, /\.cz/, /\.hu/, /\.pl/, /\.ru/, /\.za/, /\.dk/, /\.fi/, /\.nl/, /\.no/, /\.se/, /\.uk/, /\.es/, /\.fr/, /\.it/, /\.pt/, /\.tr/, /\.mx/, '/store', '/cart', /360/, /area./, /blogs./, /cadmanager./, /cart./, /events./, /gallery./, /images./, /international./, /imp./, /jobs./, /latinoamerica./, /students./, /sustainabilityworkshop./, /updatesdl./, /wam./, /\.be/, /aem\-qa\-ww\-author/, 'knowledge.autodesk.com', 'knowledge-int.autodesk.com/'],
        referrers: [],
        userAgents: ['HUBSCAN', 'autodeskAKNUiAutomation'],
        browsers: [],
        cookies: [],
        variables: []
      },
      include: {
        local: ['.']
      },

      delay: 10,
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

      adjust: true,
      alert: {
        enabled: true,
        message: 'The survey is now available.',
        locales: [{
          locale: 'de',
          alert: {
            enabled: true,
            message: 'Die Umfrage steht jetzt zur Verfügung.'
          }
        },
        {
          locale: 'jp',
          alert: {
            enabled: true,
            message: 'アンケート調査は現在受けていただくことができます。'
          }
        }]
      },
      url: 'tracker.html',
      locales: [{
        locale: 'de',
        url: 'tracker_de.html'
      },
      {
        locale: 'jp',
        url: 'tracker_jp.html'
      }]
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
      nm: {
        source: 'url',
        patterns: [{
          // regex: 'autodesk.com',
          regex: 'www.autodesk.com(?!((.)*education(.)*))',
          value: 'Y'
        },
        {
          regex: 'usa.autodesk.com',
          value: 'Y'
        }]
      },
      ne: {
        source: 'url',

        patterns: [{
          regex: 'students.autodesk.com',
          value: 'Y'
        },
        {
          regex: 'www.autodesk.com/education',
          value: 'Y'
        }]
      },
      nau: {
        source: 'url',
        patterns: [{
          regex: 'au.autodesk.com',
          value: 'Y'
        }]
      },
      nf: {
        source: 'url',
        patterns: [{
          regex: 'forums.autodesk.com',
          value: 'Y'
        }]
      },
      nakn: {
        source: 'url',
        patterns: [{
          regex: 'knowledge.autodesk.com',
          value: 'Y'
        }]
      },
      v31: {
        source: 'variable',
        name: 'eVar31'
      },
      v47: {
        source: 'variable',
        name: 'eVar47'
      },
      event2: {
        source: 'variable',
        name: 'event2'
      },
      e8: {
        source: 'variable',
        name: 'event8'
      },
      e28: {
        source: 'variable',
        name: 'event28'
      },
      e37: {
        source: 'variable',
        name: 'event37'
      },
      ch: {
        source: 'variable',
        name: 'channel'
      },
      prod: {
        source: 'variable',
        name: 'products'
      }
    },

    mode: 'first-party'
  };
  // FSR.CPPS.set('cxreplayaws', 'true');

  if (supports_amd) {
    define(function () {
      return FSR
    });
  }

})($$FSR);