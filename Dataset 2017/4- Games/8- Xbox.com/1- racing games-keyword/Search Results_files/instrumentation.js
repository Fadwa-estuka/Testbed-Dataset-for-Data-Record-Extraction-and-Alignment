
/*************************************************
Splash pages Omniture Tracking
*************************************************/
if ("undefined" == typeof siteCatalystTracking) {
    var siteCatalystTracking = new Object();
};

var siteCatalystTracking = {
    track: function (obj, propList, custom_link_type) {

        // Default link tracking type if not present
        custom_link_type = custom_link_type ? custom_link_type : 'o';

        if (BusinessTracking.isOmnitureEnabled()) {

            // Clear variables
            s.linkTrackVars = '';
            s.linkTrackEvents = 'None';

            // Loop thru propList & concatenate
            for (prop in propList) {

                s.linkTrackVars += prop + ",";
                s[prop] = propList[prop];
            }
            try {
                s.tl(obj, custom_link_type, '');
            } catch (e) {
            }
        }
    }
};


/*************************************************
Tracking
*************************************************/

//Business Intelligence API
var BusinessTracking = {

    _cleanProductId: function (prodId) {
        var newProdId = (typeof prodId == undefined || prodId == null) ? "" : prodId;
        newProdId = $.trim(newProdId);
        if (newProdId.charAt(0) == ";") { newProdId = newProdId.substr(1); }
        return newProdId;
    },

    isOmnitureEnabled: function () {
        return (typeof (s) != "undefined");
    },

     //*************************************************/
    activateIsVisibleTracking: function (label, position) {
        var self = this;
        var w = $(window);
        var doc = $(document);
        var scrollHandler = function () {
            var scrollArea = doc.outerHeight(true) - w.height();
            var scrollTarget = position.top;
            var scrolled = w.scrollTop() + w.height();
            

            if (scrolled >= scrollTarget) {
                
                BusinessTracking.recordScroll(label);
               
                w.off("scroll", scrollHandler);
            }
        };
        w.on("scroll", scrollHandler);
    },

    activateScrollTracking: function (mode) {
        if (mode == "true") {
            var self = this;
            var w = $(window);
            var doc = $(document);
            var scrollHandler = function () {
                var scrollArea = doc.outerHeight(true) - w.height();
                var scrolled = w.scrollTop() / scrollArea;


                if (!self.oScroll25 && scrolled > 0.25) {
                    self.oScroll25 = true;
                    BusinessTracking.recordScroll('25');
                }
                if (!self.oScroll50 && scrolled > 0.5) {
                    self.oScroll50 = true;
                    BusinessTracking.recordScroll('50');
                }
                if (!self.oScroll75 && scrolled > 0.75) {
                    self.oScroll75 = true;
                    BusinessTracking.recordScroll('75');
                }
                if (!self.oScroll100 && scrolled === 1) {
                    self.oScroll100 = true;
                    BusinessTracking.recordScroll('100');
                    w.off("scroll", scrollHandler);
                }
            };
            w.on("scroll", scrollHandler);
        }
    },

    recordScroll: function(scroll) {
        if (!BusinessTracking.isOmnitureEnabled()) {
            return;
        }

        s.prop53 = s.eVar53 = scroll.toString();
        s.linkTrackEvents = '';
        s.linkTrackVars = 'channel,prop1,prop53,eVar2,eVar53,eVar73';
        try {
            s.tl(true, 'o', 'recordScroll');
        } catch (e) {
        }
    },

    extendPageViewData: function () {
        if (BusinessTracking.isOmnitureEnabled()) {
            if (!s.eVar6) {
                var subscriptionTier = getCookie('xbox_info');
                if (subscriptionTier) {
                    s.eVar6 = subscriptionTier.toLowerCase();
                } else {
                    s.eVar6 = "unknown";
                }
                s.prop6 = s.eVar6;
            }
            if (!s.eVar20) {
                var visitorConsole = getCookie('console_info');
                if (visitorConsole) {
                    s.eVar20 = visitorConsole.toLowerCase();
                } else {
                    s.eVar20 = "unkown";
                }
            }
        }
    },

    dispatchAtlas: function (data) {
        var prefix = "https://view.atdmt.com/jaction/";
        var url = prefix + data;
        $.get(url);
    },
    
    recordInPageNavClick: function (data) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.events = "";
            data = data.toLowerCase();

            var prev = s.pageName;
            s.pageName = prev + "/" + data;
            try {
                s.t();
            } catch (e) {
            }
            s.pageName = prev;
        }
    },

    recordHeroClick: function (data) {
        if (BusinessTracking.isOmnitureEnabled()) {
            data += ":" + s.pageName;
            data = data.toLowerCase();
            s.events = 'event23';
            s.products = ";" + data;
            s.eVar4 = data;

            s.linkTrackEvents = 'event23';
            s.linkTrackVars = 'events,eVar2,eVar4,eVar73,products';
            try {
                s.tl(true, 'o', 'recordHeroClick');
            } catch (e) {
            }
        }
    },

    recordImpression: function (data) {
        if (BusinessTracking.isOmnitureEnabled()) {

            function convertData(rawData, pageName) {
                if (typeof (rawData) === "string") {
                    rawData = rawData + ":" + pageName;
                } else {
                    var result = [];
                    for (var i = 0; i < rawData.length; i++) {
                        result.push(rawData[i] + ":" + pageName);
                    }
                    rawData = result.join(",;");
                }
                return rawData.toLowerCase();
            }

            data = convertData(data, s.pageName);
            s.events = 'event4';
            s.products = ";" + data;

            s.linkTrackEvents = 'event4';
            s.linkTrackVars = 'events,eVar2,eVar73,products';
            try {
                s.tl(true, 'o', data);
            } catch (e) {
            }
        }
    },

    recordToutClick: function (data) {
        if (BusinessTracking.isOmnitureEnabled()) {
            data += ":" + s.pageName;
            data = data.toLowerCase();
            s.events = 'event23';
            s.products = ";" + data;
            s.eVar4 = data;

            s.linkTrackEvents = 'event23';
            s.linkTrackVars = 'events,eVar2,eVar4,eVar73,products';
            try {
                s.tl(true, 'o', 'recordToutClick');
            } catch (e) {
            }
        }
    },

    recordJoinLive: function (catguid) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.products = ";" + catguid;
            s.events = 'event2';
            s.eVar32 = catguid;
            s.linkTrackEvents = 'event2';
            s.linkTrackVars = 'events,eVar2,eVar32,eVar73,products';
            try {
                s.tl(true, 'o', 'recordJoinLive');
            } catch (e) {
            }
        }
    },

    recordProductView: function (catId, prodId) {

        //ternary to set up default empty strings if a parameter is undefined or null
        var currCatId = (typeof catId == undefined || catId == null) ? "" : catId;
        var currProdId = BusinessTracking._cleanProductId(prodId);

        var product = currCatId + ';' + currProdId;

        if (BusinessTracking.isOmnitureEnabled()) {
            s.products = s.products ? s.products + ',' + product : product;

            if (s.events.indexOf("prodView") == -1) {
                s.events = s.events ? s.events + ',prodView' : 'prodView';
            }
        }
    },

    recordCartAdd: function (catId, prodId) {

        //ternary to set up default empty strings if a parameter is undefined or null
        var currCatId = (typeof catId == undefined || catId == null) ? "" : catId;
        var currProdId = BusinessTracking._cleanProductId(prodId);

        if (BusinessTracking.isOmnitureEnabled()) {
            s.products = currCatId + ';' + currProdId + ';';
            s.events = 'scAdd';
            s.linkTrackEvents = 'scAdd';
            s.linkTrackVars = 'events,eVar2,eVar73,products';
            try {
                s.tl(true, 'o', 'recordCartAdd');
            } catch (e) {
            }
        }
    },

    recordPreOrder: function (prodId,clickname) {
        if (BusinessTracking.isOmnitureEnabled()) {
            if (typeof clickname != 'undefined') {
                s.prop36 = clickname;
            } else {
                s.prop36 = '';
            }
            s.products = ';' + BusinessTracking._cleanProductId(prodId);
            s.linkTrackVars = 'events,eVar2,eVar73,products,prop36';
            s.linkTrackEvents = 'event32';
            s.events = 'event32';
            try {
                s.tl(true, 'o', 'preorder link');
            } catch (e) {
            }
        }
    },

    recordBuyNow: function (prodId, clickname) {
        if (BusinessTracking.isOmnitureEnabled()) {
            if (typeof clickname != 'undefined') {
                s.prop36 = clickname;
            } else {
                s.prop36 = '';
            }
            s.products = ';' + BusinessTracking._cleanProductId(prodId);
            s.linkTrackVars = 'events,eVar2,eVar73,products,prop36';
            s.linkTrackEvents = 'event2';
            s.events = 'event2';
            try {
                s.tl(true, 'o', 'intent to purchase click');
            } catch (e) {
            }
        }
    },

    recordBuyFromRetailer: function (retailerName, prodId, clickname) {
        if (BusinessTracking.isOmnitureEnabled()) {
            if (typeof clickname != 'undefined') {
                s.prop36 = clickname;
            } else {
                s.prop36 = '';
            }
            s.products = ';' + BusinessTracking._cleanProductId(prodId);
            s.linkTrackVars = 'events,eVar2,eVar36,eVar73,products,prop36';
            s.linkTrackEvents = 'event16';
            s.eVar36 = retailerName.toLowerCase();
            s.events = 'event16';
            try {
                s.tl(true, 'e', 'exit to ' + retailerName);
            } catch (e) {
            }
            s.events = '';
            s.prop36 = '';
            s.eVar36 = '';
            s.products = '';
        }
    },

    recordClickName: function (clickname, preorder, buynow, retailer) {
        if (BusinessTracking.isOmnitureEnabled()) {
            if ((typeof preorder != 'undefined') || (typeof buynow != 'undefined') || (typeof retailer != 'undefined')) {
                // do nothing
            } else {
                s.prop36 = clickname;
                s.linkTrackVars = 'prop36';
                s.linkTrackEvents = '';
                try {
                    s.tl(true, 'e', 'clickname: ' + clickname);
                } catch (e) {
                }
                s.prop36 = '';
            }
        }
    },

    recordAutoRenewalSaveLink: function (linkName) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.events = 'event23';
            s.eVar46 = linkName;
            s.linkTrackEvents = 'event23';
            s.linkTrackVars = 'events,eVar2,eVar46,eVar73';
            try {
                s.tl(true, 'o', 'recordAutoRenewalSaveLink');
            } catch (e) {
            }
        }
    },

    recordAutoRenewalOffer: function (offerName) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.events = 'event23';
            s.eVar46 = offerName;
            s.linkTrackEvents = 'event23';
            s.linkTrackVars = 'events,eVar2,eVar46,eVar73';
            try {
                s.tl(true, 'o', 'recordAutoRenewalOffer');
            } catch (e) {
            }
        }
    },

    recordAutoRenewalPollAnswer: function (answer) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.events = 'event23';
            s.eVar49 = answer;
            s.linkTrackEvents = 'event23';
            s.linkTrackVars = 'events,eVar2,eVar49,eVar73';
            try {
                s.tl(true, 'o', 'recordAutoRenewalPollAnswer');
            } catch (e) {
            }
        }
    },

    recordPurchaseSubscription: function (data) {
        if (BusinessTracking.isOmnitureEnabled()) {
            var receipt = JSON.parse(data.receipt);
            if (receipt) {
                var productCat = 'Xbox Live Subscription';
                var productId = data.title;
                var tax = receipt.payments.paymentsMade[0].amount.taxAmount;
                var price = receipt.payments.paymentsMade[0].amount.totalAmount - tax;
                var paymentType = receipt.payments.paymentsMade[0].paymentInstrumentReference.type;
                var paymentTypeEvent = '';
                var atlasString = '';
                if (price == 0) {
                    atlasString = 'FY15_XBOX_JoinGoldTrialPurchased_PFX';
                    paymentTypeEvent = ',event35';
                    productId = productId + ' - Free Trial';
                } else {
                    atlasString = 'FY15_XBOX_JoinGoldPurchased_PFX';
                    price = price.toFixed(2).toString();
                    paymentTypeEvent = ',event34';
                }

                s.currencyCode = receipt.payments.paymentsMade[0].amount.currencyCode;
                s.products = productCat + ';' + productId + ';1;' + price + ';event10=' + tax;
                s.eVar10 = data.title;
                s.eVar11 = productCat;
                s.eVar12 = price;
                s.eVar13 = paymentType;
                s.events = 'purchase,event10' + paymentTypeEvent;
                var prev = s.pageName;
                s.pageName = prev + '/purchase-complete';
                s.t();
                s.events = '';
                s.products = '';
                s.pageName = prev;
                BusinessTracking.dispatchAtlas(atlasString);
            }
        }
    },

    recordPurchaseXboxOneGame: function (data) {
        var receipt = JSON.parse(data.receipt);
        if (receipt) {
            var productCat = 'Xbox One Game';
            var productId = data.title;
            var tax = receipt.payments.paymentsMade[0].amount.taxAmount;
            var price = receipt.payments.paymentsMade[0].amount.totalAmount - tax;
            var paymentType = receipt.payments.paymentsMade[0].paymentInstrumentReference.type;

            var paymentTypeEvent = '';
            if (price == 0) {
                paymentTypeEvent = ',event35';
                s.eVar12 = price.toString();
            } else if (paymentType == 5) {
                // CSV
                paymentTypeEvent = ',event33';
                s.eVar15 = price.toString();
            } else {
                // cash payment
                paymentTypeEvent = ',event34';
                s.eVar12 = price.toString();
            }

            s.currencyCode = receipt.payments.paymentsMade[0].amount.currencyCode;
            s.products = productCat + ';' + productId + ';1;' + price + ';event10=' + tax;

            s.eVar10 = data.title;
            s.eVar11 = productCat;
            s.eVar13 = paymentType;
            s.eVar14 = 'game';
            s.events = 'purchase,event10' + paymentTypeEvent;

            var prev = s.pageName;
            s.pageName = prev + '/purchase-complete';
            s.t();
            s.events = '';
            s.products = '';
            s.pageName = prev;
        }
    },


    recordRedeemCodeSuccess: function (isGoldUpgrade, store, offerName, offerType) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.events = 'purchase';
            if (isGoldUpgrade) {
                s.events += ',event9';
            }
            s.eVar13 = 'token';
            s.eVar14 = store;
            s.eVar10 = offerName;
            if (offerType.length > 0) {
                s.evar11 = offerType;
            }
            s.linkTrackVars = 'events,eVar2,eVar10,eVar13,eVar14,eVar73';
            s.linkTrackEvents = 'purchase';
            try {
                s.tl(true, 'o', 'recordRedeemCodeSuccess');
            } catch (e) {
            }
        }
    },

    recordIntentToPurchase: function (prodId) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.products = ';' + BusinessTracking._cleanProductId(prodId);
            s.linkTrackVars = 'events,eVar2,eVar73,products';
            s.linkTrackEvents = 'event2';
            s.events = 'event2';
            try {
                s.tl(true, 'o', 'intent to purchase click');
            } catch (e) {
            }
        }
    },

    recordReturnUrl: function () {
        if (BusinessTracking.isOmnitureEnabled()) {

            var result = RegExp('[?&]' + "returnUrl" + '=([^&]*)').exec(window.location.search);
            var returnUrl = decodeURIComponent(result ? result[1] : "");
            returnUrl = returnUrl.replace(/https?\:\/\//, '').replace(/^([^\?\#]+).*/, '$1').replace(/\/..\-../, '');
            s.eVar43 = s.pageName + "|" + returnUrl;
        }

    },

    _eventGateCheck: function (n) {

        if (BusinessTracking.isOmnitureEnabled()) {
            var event_gate = s.getAndPersistValue('', 's_egate', 0);
            event_gate = event_gate == '' ? 50 : event_gate;
            if (n > event_gate) {
                s.events = s.events ? s.events + ",event" + n : "event" + n;
                s.getAndPersistValue(n, 's_egate', 0);
            }
        }
    },

    trackEvents: function (e, a, b, c) {

        var event_gate = 50;

        switch (e) {

            case 'signup_start':
                BusinessTracking._eventGateCheck(51);
                break;
            case 'xuid_create':
                BusinessTracking._eventGateCheck(52);
                //s_t.eVar23 = a;  // Records if user is signed in: true/false
                break;
            case 'signin_success':
                BusinessTracking._eventGateCheck(53);
                if (BusinessTracking.isOmnitureEnabled()) {
                    s.eVar34 = b;
                    s.eVar35 = c;
                }
                break;
            case 'membership_selection':
                BusinessTracking._eventGateCheck(54);
                if (BusinessTracking.isOmnitureEnabled()) {
                    s.eVar40 = a;
                }
                break;
            case 'billing_info':
                BusinessTracking._eventGateCheck(55);
                break;
            case 'cc_info':
                BusinessTracking._eventGateCheck(56);
                break;
            case 'complete_purchase_page':
                BusinessTracking._eventGateCheck(57);
                break;
            case 'cc interstitial':
                BusinessTracking._eventGateCheck(58);
                break;
            case 'gold_upgrade_success':
                BusinessTracking._eventGateCheck(59);
                break;
        }
    },

    trackValidationError: function (errString) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.eVar41 = errString;
            s.linkTrackVars = 'eVar41';
            try {
                s.tl(true, 'o', 'trackValidationError');
            } catch (e) {
            }
        }
    },

    trackAuxiliaryPage: function (pageName) {
        if (BusinessTracking.isOmnitureEnabled()) {
            s.eVar42 = pageName;
            s.linkTrackVars = 'eVar42';
            try {
                s.tl(true, 'o', 'trackAuxiliaryPage');
            } catch (e) {
            }
        }
    },

    recordBKPageView: function () {
        if (!BusinessTracking.isOmnitureEnabled()) {
            return;
        }
        if (typeof (bk_doJSTag) !== 'undefined') {
            /* Begin BlueKai provided ANON cookie collection method */
            var __bk_a = document.cookie.match(/ANON=A=(.*?)&/);
            if (__bk_a != null) {
                if (__bk_a.length > 0) {
                    var aa = __bk_a[1];
                    bk_addPageCtx("anid", aa);
                    if (window.location.protocol == 'http:') {
                        bk_pixel_url = 'https://tags.bluekai.com/';
                        bk_pixel_secure = 'https://tags.bluekai.com/';
                    }
                }
            }
            /* End BlueKai provided Code */

            var muid = getCookie("MUID");
            if (muid != null) {
                if (muid.length > 0) {
                    bk_addPageCtx("muid", muid);
                }
            }

            var env = BusinessTracking.getEnvironment();
            bk_addPageCtx("env", env);

            if (s.eVar8) {
                bk_addPageCtx("auth", s.eVar8);
            }
            if (s.eVar6) {
                bk_addPageCtx("tier", s.eVar6);
            }
            if (s.eVar1) {
                bk_addPageCtx("loc", s.eVar1);
            }

            // Setup bk config values for coreTag.js
            bk_allow_multiple_calls = true;
            bk_use_multiple_iframes = true;
            var site_id = 21481;
            var max_ext_beacons = 4;
            bk_doJSTag(site_id, max_ext_beacons);
        }
    },

    getEnvironment: function () {
        var xhost = window.location.hostname.replace(/\.xbox\.com$/i, '');
        var env = 'test';
        if (xhost.match(/\./g)) {
            env = 'test';
        } else if (window.location.hostname.match(/\.xbox\.com$/i)) {
            env = 'prod';
        }
        return env;
    },


    registerMouseupByAttribute: function (recordActionName, primaryAttribute, secondaryAttribute) {
        $("[" + primaryAttribute + "]").each(function () {
            $(this).mouseup(function () {
                if (typeof (secondaryAttribute) === "undefined") {
                    BusinessTracking[recordActionName]($(this).attr(primaryAttribute));
                } else {
                    BusinessTracking[recordActionName]($(this).attr(primaryAttribute), $(this).attr(secondaryAttribute));
                }
            });
        });
    }
};

if (window.define) {
    define("xbox.tracking", [], function() {
        return BusinessTracking;
    });
}

require(['xbox.tracking', 'jquery'], function (businessTracking, $) {
    $(function () {

        businessTracking.recordBKPageView();
        
        var scrollAttrName = "data-scroll-tracking";
        $("[" + scrollAttrName + "]").each(function () {
            businessTracking.activateScrollTracking($(this).attr(scrollAttrName));
        });

        var isVisibleAttrName = 'data-is-visible';
        $("[" + isVisibleAttrName + "]").each(function () {
            businessTracking.activateIsVisibleTracking($(this).attr(isVisibleAttrName), $(this).position());
        });

        var inpageAttrName = "data-inpagenav";
        $("[" + inpageAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordInPageNavClick($(this).attr(inpageAttrName));
            });
        });

        var heroAttrName = "data-hero-metro";
        $("[" + heroAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordHeroClick($(this).attr(heroAttrName));
            });
        });

        var toutAttrName = "data-tout";
        $("[" + toutAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordToutClick($(this).attr(toutAttrName));
            });
        });

        var joinLiveAttrName = "data-joinLive";
        $("[" + joinLiveAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordJoinLive($(this).attr(joinLiveAttrName));
            });
        });

        var autoRenewSaveAttrName = "data-arsave";
        $("[" + autoRenewSaveAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordAutoRenewalSaveLink($(this).attr(autoRenewSaveAttrName));
            });
        });

        var autoRenewOfferAttrName = "data-aroffer";
        $("[" + autoRenewOfferAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordAutoRenewalOffer($(this).attr(autoRenewOfferAttrName));
            });
        });

        var preOrderAttrName = "data-preorder";
        $("[" + preOrderAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordPreOrder($(this).attr(preOrderAttrName),$(this).attr("data-clickname"));
            });
        });

        var buyNowAttrName = "data-buynow";
        $("[" + buyNowAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordBuyNow($(this).attr(buyNowAttrName),$(this).attr("data-clickname"));
            });
        });

        var retailerSelectedAttrName = "data-retailer";
        $("[" + retailerSelectedAttrName + "]").each(function() {
            $(this).mousedown(function() {
                businessTracking.recordBuyFromRetailer($(this).attr(retailerSelectedAttrName), $(this).attr("data-productId"), $(this).attr("data-clickname"));
            });
        });

        var clickNameAttrName = "data-clickname";
        $("[" + clickNameAttrName + "]").each(function () {
            $(this).mousedown(function () {
                businessTracking.recordClickName($(this).attr(clickNameAttrName), $(this).attr("data-preorder"), $(this).attr("data-buynow"), $(this).attr("data-retailer"));
            });
        });
    });
});