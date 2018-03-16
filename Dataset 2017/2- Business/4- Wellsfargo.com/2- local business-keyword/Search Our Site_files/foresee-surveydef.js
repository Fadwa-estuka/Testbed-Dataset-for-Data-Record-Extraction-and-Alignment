(function(){

    var FSR;

    // Do we support AMD?
    var supports_amd =
        typeof(window.define) === 'function' && window.define.amd &&
            (!window.FSR || window.FSR.supportsAMD);

    if(!supports_amd)
        FSR = window.FSR;
    else
        FSR = {};

    FSR.surveydefs = [{
    name: 'mobile_web', //0 Phone-TPB
    platform: 'phone',
    section: 'tpb',
    pin: 1,
    invite: {
        when: 'onentry',
        siteLogo: "sitelogo_tpb.gif",
        // Mobile On Exit
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            error: "Error"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email me",
            error: "Error",
            mobileExitDialog: {
                support: "e", //e for email only, s for sms only, b for both
                inputMessage: "email",
                emailMeButtonText: "email me",
                textMeButtonText: "email me",
                fieldRequiredErrorText: "Enter an email address",
                invalidFormatErrorText: "Format should be: name@domain.com"
            }
        }]]
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['/the-private-bank/', '/the-private-bank', '/the-private-bank/index.htm', '/investing', '/goals-retirement/', '/goals-retirement', '/goals-retirement-income/', '/goals-retirement-income', '/goals-investing/', '/goals-investing']
    }
}, {
    name: 'tablet_web', //1 Tablet-TPB
    platform: 'tablet',
    section: 'tpb',
    pin: 1,
    invite: {
        when: 'onentry',
        siteLogo: "sitelogo_tpb.gif",
        // Mobile On Exit
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            error: "Error"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email me",
            error: "Error",
            mobileExitDialog: {
                support: "e", //e for email only, s for sms only, b for both
                inputMessage: "email",
                emailMeButtonText: "email me",
                textMeButtonText: "email me",
                fieldRequiredErrorText: "Enter an email address",
                invalidFormatErrorText: "Format should be: name@domain.com"
            }
        }]]
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['/the-private-bank/', '/the-private-bank', '/the-private-bank/index.htm', '/investing', '/goals-retirement/', '/goals-retirement', '/goals-retirement-income/', '/goals-retirement-income', '/goals-investing/', '/goals-investing']
    }
}, {
    name: 'browse', //2 Desktop-TPB
    platform: 'desktop',
    section: 'tpb',
    pin: 1,
    invite: {
        when: 'onentry',
        siteLogo: "sitelogo_tpb.gif"
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    tracker: {
        url: 'tracker_tpb.html'
    },
    qualifier: {
        url: 'reminder_tpb.html'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['/the-private-bank/', '/the-private-bank', '/the-private-bank/index.htm', '/investing', '/goals-retirement/', '/goals-retirement', '/goals-retirement-income/', '/goals-retirement-income', '/goals-investing/', '/goals-investing']
    }
}, {
    name: 'mobile_web', //3 Phone-WWW
    platform: 'phone',
    invite: {
        when: 'onentry',
        // Mobile On Exit
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            error: "Error"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email me",
            error: "Error",
            mobileExitDialog: {
                support: "e", //e for email only, s for sms only, b for both
                inputMessage: "email",
                emailMeButtonText: "email me",
                textMeButtonText: "email me",
                fieldRequiredErrorText: "Enter an email address",
                invalidFormatErrorText: "Format should be: name@domain.com"
            }
        }]]
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['atm', 'auto-loans', 'credit-cards', 'financial-education', 'financial-health', 'goals-credit', 'mobile', 'mobile-payments', 'online-banking', 'personal-credit', 'search', 'student', 'tax-center', 'go-far-rewards', 'locator', 'about', 'biz', 'checking', 'chip-card', 'debit-card', 'equity','financial-assistance', 'foreign-exchange', 'gift-card', 'goals-banking-made-easy', 'goals-childs-future', 'goals-going-to-college', 'goals-protect-what-counts','goals-retirement-income', 'goals-retirement', 'help', 'home-center', 'insurance', 'insurance-identity-theft-protection', 'insurance-property', 'insurance-why', 'international-remittances', 'military', 'mortgage', 'prepaid', 'privacy-security', 'private-foundations', 'retirement-plan', 'rewards', 'savings-cds', 'student-center','wealth-management-services' , 'about','privacy-security','private-foundations', 'retirement-plan','rewards','savings-cds', 'student-center','wealth-management-services']    
    }
    }, {
    name: 'tablet_web', //4 Tablet-WWW
    platform: 'tablet',
    invite: {
        when: 'onentry',
        // Mobile On Exit
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email you later a brief customer satisfaction survey so we can improve your mobile experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            error: "Error"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address. After your visit we'll send you a link to the survey.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email me",
            error: "Error",
            mobileExitDialog: {
                support: "e", //e for email only, s for sms only, b for both
                inputMessage: "email",
                emailMeButtonText: "email me",
                textMeButtonText: "email me",
                fieldRequiredErrorText: "Enter an email address",
                invalidFormatErrorText: "Format should be: name@domain.com"
            }
        }]]
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['atm', 'auto-loans', 'credit-cards', 'financial-education', 'financial-health', 'goals-credit', 'mobile', 'mobile-payments', 'online-banking', 'personal-credit', 'search', 'student', 'tax-center', 'go-far-rewards', 'locator', 'about', 'biz', 'checking', 'chip-card', 'debit-card', 'equity','financial-assistance', 'foreign-exchange', 'gift-card', 'goals-banking-made-easy', 'goals-childs-future', 'goals-going-to-college', 'goals-protect-what-counts','goals-retirement-income', 'goals-retirement', 'help', 'home-center', 'insurance', 'insurance-identity-theft-protection', 'insurance-property', 'insurance-why', 'international-remittances', 'military', 'mortgage', 'prepaid', 'privacy-security', 'private-foundations', 'retirement-plan', 'rewards', 'savings-cds', 'student-center','wealth-management-services' , 'about','privacy-security','private-foundations', 'retirement-plan','rewards','savings-cds', 'student-center','wealth-management-services']    
    }
}, {
    name: 'browse', //5 Desktop-WWW
    platform: 'desktop',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 25,
        lf: 3
    },
    include: {
        urls: ['atm', 'auto-loans', 'credit-cards', 'financial-education', 'financial-health', 'goals-credit', 'mobile', 'mobile-payments', 'online-banking', 'personal-credit', 'search', 'student', 'tax-center', 'go-far-rewards', 'locator', 'about', 'biz', 'checking', 'chip-card', 'debit-card', 'equity','financial-assistance', 'foreign-exchange', 'gift-card', 'goals-banking-made-easy', 'goals-childs-future', 'goals-going-to-college', 'goals-protect-what-counts','goals-retirement-income', 'goals-retirement', 'help', 'home-center', 'insurance', 'insurance-identity-theft-protection', 'insurance-property', 'insurance-why', 'international-remittances', 'military', 'mortgage', 'prepaid', 'privacy-security', 'private-foundations', 'retirement-plan', 'rewards', 'savings-cds', 'student-center','wealth-management-services' , 'about','privacy-security','private-foundations', 'retirement-plan','rewards','savings-cds', 'student-center','wealth-management-services']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    repeatoverride: false,
    
    altcookie: {},
    
    language: {
        locale: 'en'
    },
    
    exclude: {},
    /* Invite branding sample property
     brands : [{"c":"Foresee","p":33}, {"c":"Answers", "p":33}, {"c":"ForeseeByAnswers", "p":33}],
     */
    zIndexPopup: 10000,
    
    ignoreWindowTopCheck: false,
    
    ipexclude: 'fsr$ip',
    
    mobileHeartbeat: {
        delay: 60, /*mobile on exit heartbeat delay seconds*/
        max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },
    
    invite: {
    
        // For no site logo, comment this line:
        siteLogo: "sitelogo.gif",
        
        //alt text fore site logo img
        siteLogoAlt: "",
        
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting wellsfargo.com. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting. For your security, do not enter sensitive information such as account numbers, Social Security Number (SSN), etc. We cannot address customer service questions here.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback",
            error: "Error",
            warnLaunch: "this will launch a new window"
        
        
            /*	,quizContent: {
             question: "Did you shop today at the store?",
             answers:[
             {
             answer:"Yes, absolutely.",
             proceedWithSurvey:true
             },
             {
             answer:"No, I didn't, actually",
             proceedWithSurvey:false,
             cancelTitle: "Thank you.",
             cancelText: "Thank you for your willingness to help, but we're not collecting surveys for non-shoppers.<br><br>Please visit again soon!"
             }
             ]
             }*/
        }]],
        
        /* invite positioning */
        /*
         position: {
         offset :{
         h: "0px",
         v: "0px"
         },
         pin:{
         left: false,
         right: false,
         top: false,
         bottom: false
         }
         },
         */
        // Mobile
        /*dialogs : [[{
         reverseButtons: false,
         headline: "We'd welcome your feedback!",
         blurb: "You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
         attribution: "Conducted by ForeSee.",
         declineButton: "No, thanks",
         acceptButton: "Yes, I'll help",
         error: "Error",
         warnLaunch: "this will launch a new window"
         }]],*/
        // Mobile On Exit
        /*dialogs : [
         [ {
         reverseButtons: false,
         headline: "We'd welcome your feedback!",
         blurb: "Can we email or text you later a brief customer satisfaction survey so we can improve your mobile experience?",
         attribution: "Conducted by ForeSee.",
         declineButton: "No, thanks",
         acceptButton: "Yes, I'll help",
         error: "Error"
         } ],
         [ {
         reverseButtons: false,
         headline: "Thank you for helping!",
         blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
         attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
         declineButton: "Cancel",
         acceptButton: "email/text me",
         error: "Error",
         mobileExitDialog: {
         support:"b", //e for email only, s for sms only, b for both
         inputMessage:"email or mobile number",
         emailMeButtonText:"email me",
         textMeButtonText:"text me",
         fieldRequiredErrorText:"Enter a mobile number or email address",
         invalidFormatErrorText:"Format should be: name@domain.com or 123-456-7890"
         }
         } ] ],*/
        exclude: {
                urls: ['wellsfargo.com/com/', '/com/', '/the-private-bank/connect/', '/the-private-bank/connect', '/investing/guidance/consultation', '/investing/guidance/consultation/', 'wellsfargo.com/$', 'wellsfargo.com/biz', '/biz', 'wellsfargo.com/es', '/es', 'wellsfargo.com/spanish', 'language=es', '/spanish', '/biz/payroll/contact-us/', '/help/questions-concerns/', 'com/com', 'financial-assistance', 'gift-card', 'goals-childs-future', 'insurance-identity-theft-protection', 'insurance-property', 'insurance-why', 'international-remittances', 'prepaid', 'private-foundations', 'student-center', 'wealth-management-services',  'biz', 'chip-card', 'debit-card', 'equity', 'foreign-exchange', 'goals-banking-made-easy', 'goals-going-to-college', 'goals-protect-what-counts', 'help', 'home-center', 'military', 'privacy-security', 'retirement-plan', 'savings-cds', '/help/questions-concerns/assistance-thank-you', '/help/questions-concerns/complaint-thank-you', ' /help/questions-concerns/feedback-thank-you', '/mortgage/rates', '/mortgage/rates/calculator', '/mortgage/rates/calculator/purchase-results', '/mortgage/rates/compare-loans/buy-a-home', '/about/investor-relations/', '/about/investor-relations/annual-reports/', '/about/investor-relations/basel-pillar-3-disclosures/', '/about/investor-relations/cnb-investment-trust-ii/', '/about/investor-relations/debt-rating/', '/about/investor-relations/events/', '/about/investor-relations/events/2012-investor-day/', '/about/investor-relations/events/2012-terms/', '/about/investor-relations/events/2014-investor-day/', '/about/investor-relations/events/2014-terms/', '/about/investor-relations/events/2016-investor-day/', '/about/investor-relations/events/2016-terms/', '/about/investor-relations/filings/', '/about/investor-relations/investment-profile/', '/about/investor-relations/legal-disclaimers/', '/about/investor-relations/preferred-stock/', '/about/investor-relations/quarterly-earnings/', '/about/investor-relations/stock-price-and-dividends/', '/about/investor-relations/stock-price-and-dividends/wachovia/', '/about/investor-relations/stress-test-reports/', '/privacy-security/fraud/protect-yourself/', '/privacy-security/guarantee/', '/privacy-security/fraud/', '/privacy-security/fraud/report/', '/privacy-security/fraud/report/phish/', '/privacy-security/fraud/protect/', '/privacy-security/fraud/protect/fraud-tips/', '/privacy-security/fraud/bank-scams/', '/privacy-security/fraud/recognize-email-scams/', '/privacy-security/fraud/report/identity-theft/', '/privacy-security/fraud/articles/', '/privacy-security/fraud/protect/quiz/', '/privacy-security/fraud/cyber-threats/', '/privacy-security/fraud/articles/protecting-elderly-article/', '/privacy-security/fraud/small-business/', '/privacy-security/fraud/articles/tax-scams-article/', '/privacy-security/fraud/articles/social-media-scams/', '/privacy-security/fraud/articles/online-banking-security/', '/privacy-security/fraud/articles/cyber-threats/', '/privacy-security/fraud/protect/quiz/results/', '/privacy-security/fraud/repair-kit/'],
            referrers: [],
            userAgents: [],
            browsers: [],
            cookies: [],
            variables: []
            // [name (content), http-equiv (content), itemprop (content),  charset] possible attributes for meta tag element http://devdocs.io/html/meta
            // metas:[{"name":{"key":"value", "content":"value"}}, {"http-equiv":{"key":"value", "content":"value"}}, {"itemprop":{"key":"value", "content":"value"}}, {"charset":{"key":"value"}}]
        
        },
        include: {
            local: ['.']
        },
        
        delay: 0,
        timeout: 0,
        
        hideOnClick: false,
        
        hideCloseButton: false,
        
        css: 'foresee-dhtml.css',
        
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
        timeout: 3,
        //pu: false,
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
        css: 'foresee-dhtml.css',
        url: 'reminder.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '690',
        height: '400'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: true,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false,
        user_agent: false,
        entry: false,
        entry_params: false,
        viewport_size: false,
        document_size: false,
        scroll_from_top: false,
        invite_URL: false
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
    
    cpps: {},
    
    mode: 'first-party'
};


    if(supports_amd)
        define(function(){ return FSR; })
})();
