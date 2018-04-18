var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var positionDataTag = "positiondata";

// Used for answers (runs client side) and used for static itjobs header/footer
var adUnitIdsMap = {
    'cfo': '/8456/IDG.US_E_CFOWorld.com',
    'pcw': '/8456/IDG.US_CSMB_PCWorld.com',
    'cio': '/8456/IDG.US_E_CIO.com',
    'cit': '/8456/IDG.US_E_CITEworld.com',
    'cso': '/8456/IDG.US_E_CSOOnline.com',
    'grb': '/8456/IDG.US_CSMB_Greenbot.com',
    'itn': '/8456/IDG.US_E_ITNews.com',
    'jvw': '/8456/IDG.US_E_JavaWorld.com',
    'mw' : '/8456/IDG.US_CSMB_Macworld.com',
    'nww': '/8456/IDG.US_E_NetworkWorld.com',
    'th' : '/8456/IDG.US_CSMB_TechHive.com',
    'ans': '/8456/IDG.US_E_IDGAnswers.com',
    'ifw': '/8456/IDG.US_E_Infoworld.com',
    'itw': '/8456/IDG.US_E_ITworld.com',
    'ctw': '/8456/IDG.US_E_Computerworld.com'
};

//IDGAnswers.com needs this to overwrite the ad unit id
function getSrcCookie() {
    var nameEQ = "src=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function isElementAboveTheFold(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function isElementInViewport (elementId) {
    var el = document.getElementById(elementId);
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function defineFold(slotName, element){
    IDG.GPT.log("Defining Fold for " + slotName);
    let unwanted= ['gpt-skin', 'gpt-hero','gpt-pin', 'gpt-overlay'];
    if (unwanted.indexOf(slotName)<0) {
        let currentAd = IDG.GPT.slotDefinitions[slotName];
        let fold = element ? isElementAboveTheFold(element) ? "atf" : "btf" : "atf";
        let counter = currentAd ? IDG.GPT.dfpAdManager.getCounter(currentAd.getSizes(), fold) : 1;
        if (currentAd) {
            currentAd.setTargeting("pos", fold + counter);
            IDG.GPT.positionedAds.push(slotName);
            IDG.GPT.log("buildFoldingDefinition: " + slotName + " " + fold + counter);
        }
        else {
            console.log("Ad Not found: " + slotName);
        }
    }
}


function buildFoldingDefinitions(){
    let unwanted= ['gpt-skin', 'gpt-hero','gpt-pin', 'gpt-overlay'];
    for(let slotName in IDG.GPT.filterSlotArray(IDG.GPT.slots)) {
        if (unwanted.indexOf(slotName)<0) {
            let element = document.getElementById(slotName);
            if (element) {
                let currentAd = IDG.GPT.slotDefinitions[slotName];
                let fold = element ? isElementAboveTheFold(element) ? "atf" : "btf" : "atf";
                let counter = currentAd ? IDG.GPT.dfpAdManager.getCounter(currentAd.getSizes(), fold) : 1;
                if (currentAd) {
                    currentAd.setTargeting("pos", fold + counter);
                    IDG.GPT.positionedAds.push(slotName);
                    IDG.GPT.log("buildFoldingDefinition: " + slotName + " " + fold + counter);
                }
                else {
                    console.log("Not found: " + slotName);
                }
            }
            else {
                IDG.GPT.log("Locking -- " + slotName);
                $(document).arrive("#"+slotName, function() {
                    defineFold(slotName,$(this)[0]);
                });
            }
        }
    }
}

function buildPositionData(adposition) {
    if (adLayer && adLayer["itemType"]) {
        var type = adLayer["itemType"];
        var result = type + "_" + IDG.DEVICE.type + "_" + adposition;
        IDG.GPT.log(positionDataTag + " = " + result);
        return result;
    }
}

var IDG = IDG || {};
IDG.GPT = {
    unitName: "",
    localIsMoble: false,
    isSlideshow: false,
    otherAds:{},
    positionedAds:[],
    googleCommandPush: function(functionToExecute, arg1, arg2, arg3) {
        googletag.cmd.push(function() {
            functionToExecute(arg1, arg2, arg3);
        });
    },
    addOtherAd: function(key, value) {
        IDG.GPT.otherAds[key] = value;
    },
    getOtherAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.otherAds, delimiter);
    },
    extIMUCounter: 1,
    addExtIMU: function() {
        IDG.GPT.extIMUCounter = IDG.GPT.extIMUCounter + 1;
        IDG.GPT.addOtherAd('imu' + IDG.GPT.extIMUCounter, true);
    },
    trackOmniture: function() {
        if (typeof(s) != 'undefined') {
            if (typeof(s.prop41) != 'undefined') {
                var currentSlotSet = IDG.GPT.getDisplayedAds(',') + ',' + IDG.GPT.getOtherAds(',');
                if (s.prop41 != currentSlotSet) {
                    s.linkTrackEvents = s.events = "event38";
                    s.linkTrackVars = "prop41,events";
                    s.prop41 = currentSlotSet;
                    s.event38 = currentSlotSet;
                    s.tl(true, 'o', 'Article DRR IMUs:' + IDG.GPT.getOtherAds(','));
                }
            }
        }
    },
    IMUCounter: 1,
    getIMUSlotName: function() {
        return "imu" + IDG.GPT.IMUCounter;
    },
    getDelimiterData: function(dataSet, delimiter) {
        var delimiterData = "";
        for (var data in dataSet) {
            delimiterData += data + delimiter;
        }
        return delimiterData.slice(0, delimiterData.lastIndexOf(delimiter));
    },
    modules:{},
    addModule: function(key, value) {
        IDG.GPT.modules[key] = value;
    },
    getModules: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.modules, delimiter);
    },
    displayedads:{},
    addDisplayedAd: function(key, value) {
        IDG.GPT.displayedads[key] = value;
    },
    getDisplayedAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.displayedads, delimiter);
    },
    lazyloadedads:{},
    addLazyloadedAd: function(key, value) {
        IDG.GPT.lazyloadedads[key] = value;
    },
    getLazyloadedAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.lazyloadedads, delimiter);
    },
    getLazyAdCode: function() {
        var adString = "<code type=\"text\/javascript\">" +
            "<!--IDG.GPT.IMUCounter = IDG.GPT.IMUCounter + 1;IDG.GPT.addLazyloadedAd(IDG.GPT.getIMUSlotName(), \"true\");" +
            "document.write('<div id=\"' +IDG.GPT.getIMUSlotName() + '\" class=\"ad-container\">');" +
            "IDG.GPT.defineGoogleTagSlot(IDG.GPT.getIMUSlotName(), [[300,250],[300,50]]);" +
            "document.write('</div>');" +
            "$('#' + IDG.GPT.getIMUSlotName()).responsiveAd({screenSize:'971 1115', scriptTags: []});" +
            "if (Object.keys(IDG.GPT.companions).length > 0) { IDG.GPT.refreshAd(IDG.GPT.getIMUSlotName());}//--></code>";
        return adString;
    },
    slots: {},
    slotsOutOfPage: {},
    slotDefinitions: {},
    companions:{},
    refreshAd: function(slotName) {
        //IDG.GPT.log("refreshing ad: " + slotName)
        if(typeof(slotName) == "undefined") {
            googletag.pubads().refresh();
        }
        else {
            googletag.pubads().refresh([IDG.GPT.slotDefinitions[slotName]]);
        }
    },
    addSlot: function(key, value) {
        IDG.GPT.slots[key] = value;
    },
    addSlotOutOfPage: function(key, value) {
        IDG.GPT.addSlot(key, value);
        IDG.GPT.slotsOutOfPage[key] = value;
    },
    addCompanion: function(slotName, slotAdSize, wrapperSelector) {
        IDG.GPT.companions[slotName] = {
            "size": slotAdSize,
            "wrapperSelector": wrapperSelector || "#" + slotName
        };
    },
    targets: {},
    addTarget: function(key, value) {
        IDG.GPT.targets[key] = value;
    },
    defineGoogleTagSlot: function(slotName, slotAdSize, adSlotRefreshes) {
        if (IDG.GPT.adIsContained(slotName)) {
            //IDG.GPT.log("Inside defineGoogleTagSlot with " + slotName);
            if (IDG.GPT.unitName != null && IDG.GPT.unitName != "" && slotName != "") {
                IDG.GPT.addDisplayedAd(slotName, "true");
                IDG.GPT.googleCommandPush(IDG.GPT._defineGoogleTagSlot, slotName, slotAdSize, adSlotRefreshes);
            }
        }
    },
    _defineGoogleTagSlot: function(slotName, slotAdSize, adSlotRefreshes) {
        IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, slotAdSize, slotName).addService(googletag.pubads());
        if (adSlotRefreshes) {
            setInterval(function() {
                if (isElementInViewport(slotName)){
                    googletag.pubads().refresh([IDG.GPT.slotDefinitions[slotName]])
                }
            }, 15000);
        }
    },
    displayGoogleTagSlot: function(slotName) {
        if (IDG.GPT.unitName != null && IDG.GPT.unitName != "" && slotName != "") {
            IDG.GPT.googleCommandPush(IDG.GPT._displayGoogleTagSlot, slotName);
        }
    },
    _displayGoogleTagSlot: function(slotName) {
        googletag.display(slotName);
    },
    defineAllGoogleTagSlots: function() {
        if (IDG.GPT.unitName != null && IDG.GPT.unitName != "") {
            IDG.GPT.googleCommandPush(IDG.GPT._defineAllGoogleTagSlots, IDG.GPT.slots);
        }
    },
    _defineAllGoogleTagSlots: function(slotArray) {
        slotArray = IDG.GPT.filterSlotArray(slotArray);
        for (let slotName in slotArray) {
            if (IDG.GPT.slots[slotName] != null && IDG.GPT.slots[slotName] != "") {
                var isCompanion = typeof IDG.GPT.companions[slotName] != 'undefined';
                if (IDG.GPT.slotsOutOfPage[slotName] !== "undefined" && IDG.GPT.slotsOutOfPage[slotName]) {
                    IDG.GPT.slotDefinitions[slotName] = googletag.defineOutOfPageSlot(IDG.GPT.unitName, slotName).
                    addService(googletag.pubads()).setTargeting("pos",slotName).
                    setTargeting(positionDataTag, buildPositionData(slotName));
                }
                else {
                    //needed now that gpt-skin isn't an out-of-page ad slot - it used to get the pos targeting from that conditional
                    if (slotName == 'gpt-skin' || slotName == 'gpt-pin' || slotName == 'inread') {
                        if (isCompanion) {
                            IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.companions[slotName].size, slotName).
                            addService(googletag.companionAds()).
                            addService(googletag.pubads()).setTargeting("pos",slotName).
                            setTargeting(positionDataTag, buildPositionData(slotName));
                        } else {
                            IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.slots[slotName], slotName).
                            addService(googletag.pubads()).
                            setTargeting(positionDataTag, buildPositionData(slotName)).setTargeting("pos",slotName);
                        }
                    }
                    else {
                        if (isCompanion) {
                            IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.companions[slotName].size, slotName).
                            addService(googletag.companionAds()).
                            setTargeting(positionDataTag, buildPositionData(slotName)).setTargeting("pos",slotName).
                            addService(googletag.pubads());
                        } else {
                            IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.slots[slotName], slotName).
                            setTargeting(positionDataTag, buildPositionData(slotName)).setTargeting("pos",slotName).
                            addService(googletag.pubads());
                        }
                    }
                }
            }

        }
        IDG.GPT.googleCommandPush(buildFoldingDefinitions);
        //buildFoldingDefinitions();
    },
    setAllGoogleTagTargetings: function() {
        IDG.GPT.googleCommandPush(IDG.GPT._setAllGoogleTagTargetings);
    },
    _setAllGoogleTagTargetings: function() {
        for (var targetName in IDG.GPT.targets) {
            if (IDG.GPT.targets[targetName] != null && IDG.GPT.targets[targetName] != "") {
                googletag.pubads().setTargeting(targetName, IDG.GPT.targets[targetName]);
            }
        }
    },
    initGoogleTagService: function() {
        IDG.GPT.googleCommandPush(IDG.GPT._initGoogleTagService);
    },
    _canDoSRA: function () {
        //if it belongs to a slideshow, it's true
        return !$("#slideshowCarousel").length;
    },
    _initGoogleTagService: function() {
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().collapseEmptyDivs();
        if (Object.keys(IDG.GPT.companions).length > 0) {
            googletag.companionAds().setRefreshUnfilledSlots(false);
            googletag.pubads().disableInitialLoad();
            googletag.pubads().enableVideoAds()
        }
        //if (IDG.GPT._canDoSRA())  {
        googletag.pubads().enableSingleRequest();
        //}
        if (typeof pbjs != "undefined") {
            pbjs.que.push(function() {
                /* Set query string targeting on all GPT ad units. The logic for deciding query strings is described in the section Configure AdServer Targeting. Note that this function has to be called after all ad units on page are defined.
                 */
                pbjs.setTargetingForGPTAsync();
            });
        }
        else {
            //googletag.enableServices(); //Header Bidding is not working. No need to wait 500ms
        }

    },
    _responsiveAdDisplay: function(id, fold) {
        let currentAd = IDG.GPT.slotDefinitions[id];
        if (currentAd != undefined) {
            let counter = IDG.GPT.dfpAdManager.getCounter(currentAd.getSizes(),fold);
            if (IDG.GPT.positionedAds.length>0 && IDG.GPT.positionedAds.indexOf(id)<0) {
                IDG.GPT.log("_resonsiveAdDisplay: " + id + ' ' + fold + counter);
                currentAd.setTargeting("pos", fold + counter);
                currentAd.setTargeting(positionDataTag, buildPositionData(id));
            }
            googletag.display(id);
        }
        else {
            //console.log("currentAd was undefined so no slot Definition for " + id);
        }
    },
    getParameterValue: function(paramString, paramName) {
        var paramValue = "";
        if (paramString && paramString != 'undefined') {
            var searchChars = "[\\?&]"+paramName+"=([^&#]*)";
            var regularExp = new RegExp(searchChars);
            var searchResults = regularExp.exec(paramString);
            if (searchResults != null && searchResults.length >= 1)
                paramValue = searchResults[1];
        }
        return paramValue;
    },
    getReferrerDomain: function() {
        var referrerDomain = "";
        if (document.referrer && document.referrer != 'undefined') {
            var referrerString = document.referrer;
            referrerDomain = referrerString.match(/^http[s]?:\/\/[a-zA-Z0-9-_\.]+[\:]?[0-9]*?\//);
        }
        return String(referrerDomain);
    },
    getSearchEngineQuery: function() {
        var sQuery = "";
        var referrerDomain = IDG.GPT.getReferrerDomain();
        if (referrerDomain != "") {
            var documentReferrer = document.referrer;
            if (referrerDomain.indexOf("google.com") != -1) {
                documentReferrer = documentReferrer.replace("#q=", "?q=");
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "q");
            }
            else if (referrerDomain.indexOf("bing.com") != -1)
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "q");
            else if (referrerDomain.indexOf("yahoo.com") != -1)
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "p");
            else if (referrerDomain.indexOf("nww.com") != -1) {
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "hpg1");
            }
        }
        sQuery = sQuery.replace("+", " ");
        return sQuery;
    },
    userAgentValue: function() {
        var browser = "";
        if (/(iPad|iPhone)/.test(navigator.userAgent)) {
            browser = RegExp.$1;
        }
        return browser;
    },
    setIDGExtraTargetings: function() {
        try {
            IDG.GPT.addTarget("referrer", IDG.GPT.getReferrerDomain());

            var temp_browser=navigator.userAgent;
            if(temp_browser!=null && temp_browser.indexOf('@') == -1 && temp_browser.indexOf('%40') == -1
                && temp_browser.indexOf('%2540') == -1 ){
                IDG.GPT.addTarget("browser", temp_browser);
            }

            var tmp_squery=IDG.GPT.getSearchEngineQuery();
            if(temp_squery!=null && tmp_squery.indexOf('@') == -1 && tmp_squery.indexOf('%40') == -1
                && tmp_squery.indexOf('%2540') == -1){
                IDG.GPT.addTarget("squery", IDG.GPT.getSearchEngineQuery());
            }

            IDG.GPT.addTarget("nlsource", IDG.GPT.getParameterValue(window.location.href, "source"));

            if (document.cookie.indexOf("nsdr") > -1)
                IDG.GPT.addTarget("insiderauth", "yes");
            else
                IDG.GPT.addTarget("insiderauth", "no");

            IDG.GPT.addTarget("env", IDG.GPT.getParameterValue(window.location.href, "env"));

            if (typeof(isMobile) != "undefined")
                IDG.GPT.localIsMoble = isMobile;
            if (IDG.GPT.localIsMoble) {
                IDG.GPT.addTarget("mobile", "true");
            }

            if (typeof(dogfish_type) != "undefined" && dogfish_type != "(none)") {
                IDG.GPT.addTarget("type", dogfish_type);
            }
        } catch(e) {
            //console.log(e);

        }
    },
    getQsVal: function(name) {
        if (window.location.search != "") {
            var qs = window.location.search.substring(1);
            var pairs = qs.split("&");
            for (var i=0;i<pairs.length;i++) {
                var pair = pairs[i].split("=");
                if (pair[0] == name) {
                    return pair[1];
                    break;
                }
            }
        }
        return "";
    },
    getAdUnitIdBySrc: function(src) {
        var rtnValue = adUnitIdsMap["ans"];
        if (src) {
            var adUnitIdBySrc = adUnitIdsMap[src];
            if (adUnitIdBySrc) rtnValue = adUnitIdBySrc;
        }
        return rtnValue;
    },
    isValidSource: function(src) {
        var rtnValue = false;
        if (src) {
            if (adUnitIdsMap[src]) rtnValue = true;
        }
        return rtnValue;
    },
    addBiddingParams: function(name, param){
        IDG.GPT.params=IDG.GPT.params || {};
        IDG.GPT.params[name]=param;
    },
    backfillCompanionIfEmpty: function(slotName) {
        // if slot hasn't been filled as a companion, refresh to backfill with another ad
        if (IDG.GPT.companions && IDG.GPT.companions.hasOwnProperty(slotName) && googletag.pubadsReady && !$.trim($(IDG.GPT.companions[slotName].wrapperSelector).html())) {
            IDG.GPT.refreshAd(slotName);
        }
    },
    backfillCompanionIfAllEmpty: function(slotName) {
        if (IDG.GPT.companions && Object.keys(IDG.GPT.companions).length > 0 && googletag.pubadsReady) {
            var allCompanionsEmpty = true;
            $.each(IDG.GPT.companions, function(k, v) {
                if($.trim($(v.wrapperSelector).html())) {
                    allCompanionsEmpty = false;
                    return false;
                }
            });
            if (allCompanionsEmpty) {
                IDG.GPT.refreshAd(slotName);
            }
        }
    },
    filterSlotArray: function(slotArray) {
        let returnArray={};
        for (slot in slotArray){
            if (IDG.GPT.adIsContained(slot)) {
                returnArray[slot]=slot;
            }
        }
        //IDG.GPT.slotDefinitions = returnArray;
        return returnArray;
    },
    getPlace:function(){
        let url = document.URL;
        if (url.toString().indexOf("article")!=-1) {
            if ($('#slideshowCarousel').length) return "slideshow";
            else return "article";
        }
        else if (url.toString().indexOf("slideshow")!=-1) return "slideshow";
        else if (url.toString().indexOf("index")!=-1) return "index";
        else if (url.toString().indexOf("category")!=-1){
            if ($('.tentpole').length) return "tentpole";
            else return "index";
        }
        else if (url.toString().indexOf("resource")!=-1) return "resources";
        else if (url.toString().indexOf("video")!=-1) {
            if (/\/video\/\d/.test(url.toString())) return "video";
            else return "video_index";
        }
        else return "homepage";
    },
    adIsContained: function(slot){
        let place = IDG.GPT.getPlace();
        let filter = IDG.GPT.getFilter($thm.deviceWidth(), place);
        if (filter.includes(slot)) return true;
        else return false;
    },
    getFilter:function(width, place){
        let array=$thm.ads();
        let size = IDG.GPT.getSize(width);
        return array[place][size];
    },
    getSize:function(width){
        if (width > $thm.deviceBreakpoints.desktop) {
            //also tablet landscape
            return "desktop";
        }
        else if (width > $thm.deviceBreakpoints.mobile) {
            return "tablet";
        }
        else {
            return "mobile";
        }
    },
    startGPTServices: function(){
        multitry = function(time, tries, func, callback) {
            let counter  = 0;
            let timer    = setInterval(function() {
                counter++;
                var value = func(counter);
                if (value || counter >= tries) {
                    clearInterval(timer);
                    callback(value, counter);
                }
            }, time);
        };
        multitry(250,5,function(try_number) {
                try {
                    googletag.enableServices();
                }
                catch (e){
                    IDG.GPT.log("EnableServices Not Ready - " + e);
                    return false;
                }
                setTimeout(function() {
                    if (googletag.pubadsReady) {
                        googletag.pubads().refresh();
                        IDG.GPT.log("Ads activated");
                        wait = false;
                    }},350-(try_number*50));
                return true;},
            function (success) {IDG.GPT.log('Successfully enabledServices - ', success);}
        );
    },
    getUrlParameter : function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },
    /* GPT Logger */
    log: function (text){
        let log_on=this.getUrlParameter("log");
        if (log_on && log_on.toUpperCase()=="TRUE") {
            console.log("%cIDG.GPT.LOG%c - %s", "background:  #ff9900; color: #ffe6cc; font-weight: bold; padding: 3px", "", text);
        }
    }
};

// IDG.GPT.dfpAdManager Keeps track of what ad sizes already present on this page
// seperate counters for Above and Below the Fold
IDG.GPT.dfpAdManager = {
    "constructor" : IDG.GPT.dfpAdManager,
    "init" : function(){
        this.adsizes = {};
        this.adsizes.atf = {};
        this.adsizes.btf = {};
    },
    "push" : function(key, fold){ // add to adsizes, increment if already there
        if(this.has(key, fold))
        {
            this.adsizes[fold + ''][key + ''] = this.adsizes[fold + ''][key + ''] + 1;
        }
        else
        {
            this.adsizes[fold + ''][key + ''] = 1;
        }
    },
    "has" : function(key,fold){
        if(this.adsizes[fold+''].hasOwnProperty(key))
        {
            return true;
        }
        return false;
    },
    "get" : function(key, fold) {
        return this.adsizes[fold][key];
    },
    "all" : function(fold) {
        if(fold == 'atf' || fold == 'btf')
        {
            return this.adsizes[fold];
        }
        return this.adsizes;
    },
    "getCounter" : function(sizes, fold){
        // check how many sizes already there
        var counter = 1;
        for (var i = 0; i < sizes.length; i++) {
            // getWidth() and getHeight() are methods on the object return from the googletag.pubads()
            var key = sizes[i].getWidth() + "x" + sizes[i].getHeight();
            // add sizes
            this.push(key, fold);
            // try for a count
            var c = this.get(key, fold);
            // ads can have multiple sizes, 
            // irrespective of their order on the page
            // avoid resetting counter to a lower number
            if(c > counter){
                counter = c;
            }
        }
        return counter;
    }
};

/* Responsive ads  */
(function($){
    $.fn.responsiveAd = function(options) {
        var opts = $.extend({
            "screenSize": 'all',
            "counter" : 1
        },options);

        this.placeAds = function(screenSize) {
            var id = this.attr('id');
            var placeAd = true;
            var debugmsg = 'placeAd:' + placeAd + ", screenSize:" + screenSize + ", id:" + id;

            if (placeAd == true) {
                var targetElement = document.getElementById(id);
                if (targetElement) {
                    var fold = 'btf'; // defaults to BelowTheFold
                    if (opts.forceFold != undefined) { // can force a fold by setting opts.forceFold
                        fold = opts.forceFold;
                    }
                    else if (true === isElementAboveTheFold(targetElement)){
                        fold = 'atf';
                    }
                    // Grab reference to defined slot inside func scope sent to googletag.cmd.push
                    IDG.GPT.googleCommandPush(IDG.GPT._responsiveAdDisplay, id, fold);

                } else {
                    //console.log('Looking for ' + id + ', but no element found');
                }
            }
        }
        return this.placeAds(opts.screenSize);
    };
})(jQuery);