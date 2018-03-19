/**
 * @fileOverview - TGX Ads Library
 * @author - Matt Miritello, Jeremy Chou, Payal Joshi 
 * @version - 2.3
 * @date - 09/23/2015
 * @since - 1.4.9
 * @requires - GPT API
 * @see - {@link https://tools.timeinc.net/wiki/display/DCMS/TGX+Implementation+Guide | Confluence}
 */

/**
 * BEGINNING OF TII ADS CLASSIC CODE
 */

/**
 * @description - A Class to define site level properties for ad serving.
 * @public 
 * @class
 * @constructor
 * @param - {string} sitename
 */
function TiiAdConfig(sitename) {
	this.sitename	= sitename;
	this.cmSitename	= sitename;

	this.popups		= true;
	this.useBehaviorTracking	= false;
	
	this.setSitename	= TiiAdConfigSetSitename;
	this.setCmSitename	= TiiAdConfigSetCmSitename;
	this.setPopups		= TiiAdConfigSetPopups;
	this.setBehaviorTracking	= TiiAdConfigSetBehaviorTracking;

	this.useRevSciTracking = false;
	this.setRevSciTracking = TiiAdConfigSetRevSciTracking;

	this.useTacodaTracking = false;
	this.setTacodaTracking = TiiAdConfigSetTacodaTracking;
        
        this.useQuantcastTracking = false;
	this.setQuantcastTracking = TiiAdConfigSetQuantcastTracking;
        
        this.disableInitLoad = false;
        this.setdisableInitLoad = TiiAdConfigSetDisableInitLoad;
        
        this.singleRequestMode = false;
        this.setsingleRequestMode = TiiAdConfigSetSingleRequestMode;
        
        this.useDequeueAds = false;
        this.setDequeueAds = TiiAdConfigSetDequeueAds;

	this.convertHyphens = false
	this.stripNonAlphaNumeric = false
	this.setConvertHyphens = TiiAdConfigSetConvertHyphens;
	this.setStripNonAlphaNumeric = TiiAdConfigStripNonAlphaNumeric;
}
/**
 * @description - A Function to turn on HAT for the sites
 * @function 
 * @param {string} sitename
 */
function TimeHatConfig(sitename){
        var js = document.createElement('script');
        js.type = 'text/javascript';
        if (TiiAd_isSecure()) {
            js.src = 'https://a248.e.akamai.net/f/1016/606/2d/img5.timeinc.net/hat/js/time-hat.js';
        } else {
            js.src = 'http://img5.timeinc.net/hat/js/time-hat.js';
        }
        document.getElementsByTagName('head')[0].appendChild(js);
        var css = document.createElement("link");
        css.type = 'text/css';
        css.rel = 'stylesheet';
        if (TiiAd_isSecure()) {
            css.href = 'https://a248.e.akamai.net/f/1016/606/2d/img5.timeinc.net/hat/css/style.min.css';
        } else {
            css.href = 'http://img5.timeinc.net/hat/css/style.min.css';
        }
        document.getElementsByTagName("head")[0].appendChild(css);
        var hatId = document.getElementById('time_inc_hat');
        var hatUrl;
        if (TiiAd_isSecure()) {
            hatUrl = "https://a248.e.akamai.net/f/1016/606/2d/img5.timeinc.net/hat/" + sitename + ".html";
        } else {
            hatUrl = "http://img5.timeinc.net/hat/" + sitename + ".html";
        }
        if(hatId && sitename) {
            try {
                var request;
                request = new XMLHttpRequest();
                if ("withCredentials" in request) {
                    request.open('GET', hatUrl, true);
                }
                else if (typeof XDomainRequest !== "undefined") {
                    request.open('GET', hatUrl, true);                  
                } 
                else {
                    request = null;
                }
                if(!request){
                    console.log("Error");  
                    hatId.style.display = "none";
                    return;
                }
                request.onload = function() {
                    var response = request.responseText;
                    var responseBody = response.match('<body[^>]*>((?:.|\n)*)<\/body>')[0];
                    hatId.innerHTML = responseBody;
                };
                request.onerror = function() {
                    hatId.style.display = "none";
                    console.log("Error");
                };
                request.send();
            }
            catch(e){
                console.log(e);
                hatId.style.display = "none";
            }
        }
}

function _quantgc(n) {
	var c=document.cookie;if(!c)return '';
	var i=c.indexOf(n+"=");if(-1==i)return '';
	var len=i+n.length+1;
	var end=c.indexOf(";", len);
	return c.substring(len,end<0?c.length:end);
}
function TiiAdGetQuantcastSegments() {
	var _qsegs = _quantgc('__qseg').split('|');
	var segLen = _qsegs.length;
	var segArray = new Array(); var segs = new Array();
	segs[0] = "";
	for (var i = 0; i < segLen && i < 10; i++ )
	{
		segArray = _qsegs[i].split("_");
		if (segArray.length>1){segs[i]=segArray[1];}
	}
	return segs;	
}
function TiiAdConfigSetTacodaTracking(value) {
	this.useTacodaTracking = value;
}
function TiiAdConfigSetRevSciTracking(value) {
	this.useRevSciTracking = value;
}
function TiiAdConfigSetQuantcastTracking(value) {
	this.useQuantcastTracking = false;
}
function TiiAdConfigSetConvertHyphens(value) {
	this.convertHyphens = value;
}
function TiiAdConfigStripNonAlphaNumeric(value) {
	this.stripNonAlphaNumeric = value;
}
function TiiAdConfigSetSitename(value) {
	this.sitename = value;
}
function TiiAdConfigSetCmSitename(value) {
	this.cmSitename = value;
}
function TiiAdConfigSetPopups(value) {
	this.popups = value;
}
function TiiAdConfigSetBehaviorTracking(value) {
	this.useBehaviorTracking = value;
}
function TiiAdConfigSetDisableInitLoad(value) {
        this.disableInitLoad = value;
}
function TiiAdConfigSetSingleRequestMode(value) {
        this.singleRequestMode = value;
}
function TiiAdConfigSetDequeueAds(value) {
        this.useDequeueAds = value;
}
/**
 * @description - A class for generating TiiAd objects
 * @public 
 * @class
 * @constructor
 * @param - {string} sitename
 */
function TiiAdFactory() {
	// Detect if first argument is a string or an array
	var first = arguments[0];

	if (typeof(first) == "string") {
		this.sitename		= first;
		this.cmSitename		= first;

	} else if (typeof(first) == "object") {
		this.config		= first;
		this.sitename		= first.sitename;
		this.cmSitename		= first.cmSitename;
	}

	if (TiiAd_isSecure()) {
		this.adServer		= "https://ad.doubleclick.net/";
	} else {
		this.adServer		= "http://ad.doubleclick.net/";
	}
	
	this.randomNumber	= TiiAdsGetRandomNumber();
	this.tileCounter	= 1;
	this.params		= new Array();
	this.zone		= "";
	this.dcopt		= false;
	this.behaviorTracked    = false;

	if (arguments.length == 2) {
		this.zone = arguments[1];
	}
	
	this.createAd		= TiiAdFactoryCreateAd;
	this.refreshAds		= TiiAdFactoryRefreshAds;
        this.clearRefreshAds    = TiiAdFactoryClearRefreshAds;
        this.refreshBatchAds    = TiiAdFactoryRefreshBatchAds;
        this.clearRefreshBatchAds= TiiAdFactoryClearRefreshBatchAds;
        this.resetOOP           = TiiAdFactoryResetOOP;
	this.getAd		= TiiAdFactoryGetAd;
	this.getCmAd		= TiiAdFactoryGetCmAd;
	this.getMultiCmAd	= TiiAdFactoryGetMultiCmAd;
	this.getMultiAd		= TiiAdFactoryGetMultiAd;
	this.getTransitionalAd	= TiiAdFactoryGetTransitionalAd;
	this.setArticleId	= TiiAdFactorySetArticleId;
	this.setChannel		= TiiAdFactorySetChannel;
	this.setChannelPage	= TiiAdFactorySetChannelPage;
	this.setContentPage	= TiiAdFactorySetContentPage;
	this.setContentType	= TiiAdFactorySetContentType;
	this.setPackageId	= TiiAdFactorySetPackageId;
	this.setParam		= TiiAdFactorySetParam;
        this.clearParam		= TiiAdFactoryClearParam;
	this.setSubchannel	= TiiAdFactorySetSubchannel;
	this.setZone		= TiiAdFactorySetZone;
	this.trackBehaviour	= TiiAdTrackBehavior;
	this.updateCorrelator = TiiAdUpdateCorrelator;
        this.slotRenderEnded    = TiiAdFactorySlotRenderEnded;
	
	if (this.config.useBehaviorTracking || this.config.useRevSciTracking) {
		var revSciSegments = TiiAdGetRevSciSegments();
		this.setParam("rsseg", revSciSegments)
	}
	
        if (this.config.useQuantcastTracking) {
                var quantSegs = TiiAdGetQuantcastSegments();
                this.setParam("qc", quantSegs);
        }
	
	if (this.config.useTacodaTracking) {
		var tacodaSegments = TiiAdGetTacodaSegments();
		this.setParam("tcseg", tacodaSegments);
	}
        
        if (this.config.disableInitLoad) {
                tgxDo.disableinitMode = this.config.disableInitLoad;
	}
        
        if (this.config.singleRequestMode) {
                tgxDo.singlerequestMode = this.config.singleRequestMode;
        }
        
        if (this.config.useDequeueAds) {
                TiiAdFactoryDequeueAds(this.config.useDequeueAds);
	}
        
        if (document.referrer != "") {
            this.setParam("rhost", document.referrer.split("/")[2]);
        }
        
        var referrerDomain = document.referrer.split("/")[2];
        var domain = document.URL.split("/")[2];
        if (typeof(referrerDomain) == "undefined" || referrerDomain != domain) {
            this.setParam("pu", 0);
        }
}
function TiiAdFactoryRefreshAds(slots) {
        TiiAdTagReload();
	var tgx = new TgxAdBridge(this);
        tgx.refreshSlots(slots);
}
/**
 * @description - A Function to load Ads with Batch SRA
 * @function 
 * @public
 * @param {array} slots
 * @param {string} val number of slots to refresh in same batch
 */
function TiiAdFactoryRefreshBatchAds(slots) {
        TiiAdTagReload();
        var oopslotflag, cmslots, paidslots;
        cmslots = new Array();
        paidslots = new Array();
        if(typeof TGX_SITE_CONFIG.refresh_oop_slot != 'undefined' && TGX_SITE_CONFIG.refresh_oop_slot){
            oopslotflag = true;
        }
        for(var p = 0; p < slots.length; p++){
            var slotname = tgxDo.slots[slots[p]].getAdUnitPath();
            var cmslot = slotname.search("cm.");
            if(cmslot !== -1) {
                cmslots.push(slots[p]);
            }
            else{
                paidslots.push(slots[p]);
            }
        }
        googletag.pubads().updateCorrelator();
        var tgx = new TgxAdBridge(this);
        tgx.refreshSlots(paidslots,false);
        tgx.refreshSlots(cmslots,false);
        if(oopslotflag){
            TGX_SITE_CONFIG.refresh_oop_slot = true;
        }
}
function TiiAdFactoryClearRefreshAds(slots,slotkeys) {
        TiiAdTagReload();
        var tgx = new TgxAdBridge(this);
        tgx.clearRefreshSlots(slots,slotkeys);
}
/**
 * @description - A Function to load Ads with Batch SRA
 * @function 
 * @public
 * @param {array} slots
 * @param {array} slotkeys keys need to pass as slot targeting
 * @param {string} val number of slots to refresh in same batch
 */
function TiiAdFactoryClearRefreshBatchAds(slots,slotkeys,val) {
        TiiAdTagReload();
        var oopslotflag, cmslots, paidslots;
        cmslots = new Array();
        paidslots = new Array();
        if(typeof TGX_SITE_CONFIG.refresh_oop_slot != 'undefined' && TGX_SITE_CONFIG.refresh_oop_slot){
            oopslotflag = true;
        }
        for(var p = 0; p < slots.length; p++){
            var slotname = tgxDo.slots[slots[p]].getAdUnitPath();
            var cmslot = slotname.search("cm.");
            if(cmslot !== -1) {
                cmslots.push(slots[p]);
            }
            else{
                paidslots.push(slots[p]);
            }
        }
        googletag.pubads().updateCorrelator();
        var tgx = new TgxAdBridge(this);
        tgx.clearRefreshSlots(paidslots,slotkeys,false);
        tgx.clearRefreshSlots(cmslots,slotkeys,false);
        if(oopslotflag){
            TGX_SITE_CONFIG.refresh_oop_slot = true;
        }
}
function TiiAdFactoryResetOOP(slot){
        if (this.dcopt == true) {
            this.dcopt = false;
        }
        var tgx = new TgxAdBridge(this);
        tgx.resetOOPSlot(slot);
}
function TiiAdFactoryFlushAdQueue(parentDivId) {
	var tgx = new TgxAdBridge(this);
        tgx.flushAdQueue(parentDivId);
}
function TiiAdFactoryDequeueAds(setdequeue) {
        var slotrendered = 0;
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            slotrendered++;
            if (setdequeue == true) {
                if (slotrendered < 2) {
                    TiiAdFactoryFlushAdQueue();
                }
                else {
                    return;
                }
            }
    });
}
function TiiAdFactorySlotRenderEnded(callback, adslots) {
        try {
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var divId = event.slot.getSlotId().getDomId();
                if(divId) {
                    var addiv = document.getElementById(divId);
                }
                var adsize = event.size;
                if (event.isEmpty) {
                    document.getElementById(divId).style.display = "none";
                } else if(addiv && adslots.length > 0) {
                    for (i = 0; i < adslots.length; i++) {
                        if (addiv.parentNode.id == adslots[i]) {
                            callback(adslots[i], adsize);
                        }
                    }
                }
            });
        } catch (e) {
        }
}
function TiiAdTrackRevSci() {
	if (typeof(DM_tag) == "function" && typeof(s_time) == "object") {
		rsCategory = s_time.channel + " > " + s_time.prop16 + " > " + s_time.prop11;
		DM_cat(rsCategory);
		DM_addEncToLoc("referrer", document.referrer.split("/")[2]);
		DM_tag();
	}
    if (!(typeof(TGX_SITE_CONFIG) !=='undefined' && (TGX_SITE_CONFIG.bluekai_init === false || TGX_SITE_CONFIG.bluekai === false))) {
        TiiAdQuantBlueKaiMindsetImpl();
    }
    if(!(typeof(TGX_SITE_CONFIG) !== 'undefined' && TGX_SITE_CONFIG.comscore === false)){
	   TiiAdWriteComScoreTag();
    }
}
function TiiAdWriteComScoreTag() {
    adTag = '<scr' + 'ipt type="text/javascript" src="'+window.location.protocol+'//b.scorecardresearch.com/beacon.js?c1=2&c2=6035728"></scr' + 'ipt>';
	document.write(adTag);	
}
function TiiRefreshComScoreTag() {
	if (typeof(COMSCORE) == "object") {
		url = (arguments.length == 1 ? arguments[0] : document.location);
		COMSCORE.beacon({
			c1:2,
			c2:6035728,
			c4: url
		});
	}	
}
/**
 * @description - A Function to enable Bluekai and Quantcast
 * @function 
 * @param {string} sitename
 */
function TiiAdQuantBlueKaiMindsetImpl() {
        //Removing Quantcast
        /*document.write('<scr'+'ipt src="'+window.location.protocol+'//pixel.quantserve.com/seg/p-5dyPa639IrgIw.js;fpa='+_quantgc('__qca')+';r='+Math.ceil(new Date().getTime()/600000)+'" type="text/javascript"></scr'+'ipt>');*/
        // BlueKai Beacon 03.14.2013
        if (bk.enabled) {
            bk.bkFireBeacon();
        }
}
function TiiAdFactorySetParam(key, value) {
        if (key === "dcopt") {
            key = "oop";
            value = "yes";
        }
        if (key === "slotname") {
            var slot = value;
            tgxDo.slotparams[slot] = this.params;
        } else {
            if ((typeof key !== "undefined") && (typeof value !== "undefined")) {
                if (typeof (value) == "object") {
                    this.params[key] = value;
                    tgxDo.params[key] = this.params[key];
                } else {
                    if (value.toString() != "") {
                        this.params[key] = value;
                        tgxDo.params[key] = this.params[key];
                    }
                }
            }
        }
}
function TiiAdFactorySetbkParam(key, value) {
        if ((typeof key !== "undefined") && (typeof value !== "undefined")) {
            if (typeof (value) == "object") {
                tgxDo.bkparams[key] = value;
            } else {
                if (value.toString() != "") {
                    tgxDo.bkparams[key] = value;
                }
            }
        }
}

function TiiAdFactoryClearParam(keyremove) {
        if (keyremove) {
            var deletekey = keyremove;
            delete this.params[deletekey];
            delete tgxDo.params[deletekey];
            delete tgxDo.slotparams[deletekey];
        }
        else {
            for (var key in this.params) {
                delete this.params[key];
                if(key!=="qc" && key!=="rsseg" && key!=="tcseg" && key!=="rhost" && key !=="pu"){
                    delete tgxDo.params[key];
                }
            }    
        }
}
function TiiAdFactoryCreateAd() {
	var width, height, zone, ad;

	if (arguments.length == 2) {
		width = arguments[0];
		height = arguments[1];

	} else {
		// Assume 3 arguments
		width = arguments[0];
		height = arguments[1];
		zone = arguments[2];

	}

	ad = new TiiAd(this, width, height, this.tileCounter);

	if (null != zone) {
		ad.setZone(zone);
	}

	// Copy Factory params to this specific ad
	for (var key in this.params) {
		ad.setParam(key, this.params[key]);	
	}

	ad.setParam("sz", width + "x" + height);

	var paths = window.location.pathname.split("/");
        if(!paths[paths.length -1]) {
            paths = paths.slice(1, paths.length -1);
        }
        else {
             paths = paths.slice(1, paths.length);
        }
	ad.setParam("path", paths);
	
	ad.setParam("dcove", "d");
        var asiparam = new Array();
        if ((typeof window["ASPQ_DrULO1"] !== "undefined") && (typeof asiPlacements !== "undefined")) {
            if(window["ASPQ_DrULO1"].length > 0) {
                asiparam.push(window["ASPQ_DrULO1"]);
            }
        }
        if ((typeof window["ASPQ_tzFgKb"] !== "undefined") && (typeof asiPlacements !== "undefined")) {
            if(window["ASPQ_tzFgKb"].length > 0) {
                asiparam.push(window["ASPQ_tzFgKb"]);
            }
        }
        if(asiparam.length > 0) {  
		ad.setParam("gwd", asiparam);
        }
        if(typeof onebotkeyval != 'undefined' && typeof onebotkeyval['trend'] != 'undefined'){
            ad.setParam("trend","yes");
        }
        if (TiiAdsIsTestMode()) {
		var testValue = TiiAdsParseQueryString("testads");
		ad.setParam("test", (isNaN(testValue) ? 1 : testValue));
	}

	if (this.config.useBehaviorTracking && this.behaviorTracked == false) {
		this.trackBehaviour();
	}

	this.tileCounter++;

	return ad;
}
function TiiAdFactoryGetAd() {
	var width, height, zone, ad;
	
	if (arguments.length == 2) {
		width = arguments[0];
		height = arguments[1];

		ad = this.createAd(width, height);	
	
	} else {
		width = arguments[0];
		height = arguments[1];
		zone = arguments[2];
	
		ad = this.createAd(width, height, zone);
	}

	if (this.dcopt == false) {
		ad.setParam("oop", "yes");
		this.dcopt = true;
	}
        
	return ad;
}
function TiiAdFactoryGetCmAd(width, height, position, type) {
	ad = this.createAd(width, height);
	ad.setParam("cmpos", position);
	ad.setParam("cmtyp", type);
	ad.sitename = this.cmSitename;

	return ad;
}
function TiiAdFactoryGetMultiCmAd(sizes, position, type) {
	var width = sizes[0].split("x")[0];
	var height = sizes[0].split("x")[1];
	var ad = this.getCmAd(width, height, position, type);
	var sizeValue = sizes.join(",");
	ad.setParam("sz", sizeValue);

	return ad;	
}
function TiiAdFactoryGetTransitionalAd() {
	ad = this.getAd(0,0);
	return ad;
}
function TiiAdFactoryGetMultiAd(sizes) {
	var width = sizes[0].split("x")[0];
	var height = sizes[0].split("x")[1];
	var ad = this.getAd(width, height);
	var sizeValue = sizes.join(",");
	ad.setParam("sz", sizeValue);
	
	return ad;
}
function TiiAdFactorySetArticleId(articleId) {
	this.setParam("aid", articleId);
}
function TiiAdFactorySetChannel(channel) {
	this.setParam("ch", channel);
}
function TiiAdFactorySetPackageId(packageId) {
	this.setParam("pid", packageId);
}
function TiiAdFactorySetSubchannel(subchannel) {
	this.setParam("sch", subchannel);
}
function TiiAdFactorySetContentPage() {
	this.setParam("ptype", "content");
}
function TiiAdFactorySetChannelPage() {
	this.setParam("ptype", "channel");
}
function TiiAdFactorySetContentType(ctype) {
	this.setParam("ctype", ctype);
}
function TiiAdFactorySetZone(zone) {
	this.zone = zone;
}
function TiiAd(factory, width, height, tileNumber) {
	this.tileNumber		= tileNumber;
	this.width		= width;
	this.height		= height;
	this.params		= new Array();

	// Methods
	this.setParam		= TiiAdFactorySetParam;
	this.setMagicNumber	= TiiAdSetMagicNumber;
	this.setPosition	= TiiAdSetPosition;
	this.setZone		= TiiAdSetZone;
	this.write		= TiiAdWrite; 
        this.updateCorrelator   = TiiAdUpdateCorrelator;


	// Private Methods
	this._formatParams	= TiiAd_formatParams;
	this._getAdParams	= TiiAd_getAdParams;
	this._getAdTag		= TiiAd_getAdTag;
	this._getAdUrl		= TiiAd_getAdUrl;
	this._getImageUrl	= TiiAd_getImageUrl;
	this._getClickUrl	= TiiAd_getClickUrl;
	this._getDebugHtml	= TiiAd_getDebugHtml;
	this._getSecureAdTag	= TiiAd_getSecureAdTag;
	this._cleanValue = TiiAd_cleanValue;
	
	// Copy factory settings
	this.randomNumber	= factory.randomNumber;
	this.adServer		= factory.adServer;
	this.tileNumber		= factory.tileCounter;
	this.zone		= factory.zone;
	this.sitename		= factory.sitename;
	this.config		= factory.config;
        
        // Set data object
        tgxDo.zone             = this.zone;
}
function TiiAdSetMagicNumber(mn) {
	this.setParam("mn", mn);
}
function TiiAdSetPosition(pos) {
	this.setParam("pos", pos);
}
function TiiAdSetZone(zone) {
	this.zone = zone;
}
function TiiAd_cleanValue(value) {
	if (typeof(value) == "string") {
		if (this.config.convertHyphens) {
			value = value.replace(/-/ig, "_");
		}
		
		if (this.config.stripNonAlphaNumeric) {
			value = value.replace(/[^\w\s]/ig, "");
		}
	}
	return value;
}
function TiiAd_formatParams() {
	var adParams = "";
	for (var key in this.params) {
		var value = this.params[key];
		
		if (typeof(value) == "function") {
			continue;
		}

		if (typeof(value) == "string" || typeof(value) == "number") {
			adParams += ";" + key + "=" + escape(this._cleanValue(value)).toLowerCase();
		} else {
			for (var i = 0; i < value.length; i++) {
				if (value[i] != "") {
					adParams += ";" + key + "=" + escape(this._cleanValue(value[i])).toLowerCase();
				}
			}
		}
	}
	
	return adParams;
}
function TiiAd_getAdParams() {
	var adParams	= this._formatParams();
	var tileParam	= ";tile=" + this.tileNumber;

	var secureParam = "";
	if (TiiAd_isSecure()) {
		secureParam = ";sec=1";
	}

	var puParam = "";
	if (!this.config.popups) {
		puParam = ";pu=0";
	}

	var ordParam	= ";ord=" + this.randomNumber;
	var rhost	= document.referrer.split("/")[2];
	var rhostParam	= "";
	if (typeof(rhost) != "undefined") rhostParam	= ";rhost=" + rhost;
	var pageParam	= ";pgurl=1";
	
	return this.sitename + "/" + this.zone.toLowerCase() + adParams + pageParam + rhostParam + tileParam + puParam + secureParam + ordParam + "?";
}
function TiiAd_getSecureAdTag() {
	return '<a href="' + this._getClickUrl() + '" target="_blank"><img src="' + this._getImageUrl() + '" width="' + this.width + '" height="' + this.height + '" border="0" /></a>';
}
function TiiAd_getImageUrl() {
	return this.adServer + "ad/" + this._getAdParams();
}
function TiiAd_getClickUrl() {
	return this.adServer + "jump/" + this._getAdParams();
}
function TiiAd_getDebugHtml() {
	var output = '<input style="font-family: courier new; font-size: small; width:' + this.width + 'px; margin: 0; padding: 0" value="' + this._getAdUrl() + '"/>';

	return output;
}
// Support Functions
function TiiAdsParseQueryString(sParam) {
	var sQueryString = window.location.search;

	
	
	if (!sQueryString) {
        	
		return;
    	
	} else {
		
		sQueryString = decodeURI(sQueryString.substring(1));
	
	}

	
	
	var aPairs = sQueryString.split("&");
	var aParams = new Array();
	var aKeyValue = new Array();
	
	for (var i = 0; i < aPairs.length; i++) {
		aKeyValue = aPairs[i].split("=");
		if (aKeyValue.length>1){aParams[aKeyValue[0]]=aKeyValue[1];}
	
	}
	return aParams[sParam];
}
/**
 * @description - A Function to detect visitor's platform
 * @function 
 * @param {string} 
 */
function TiiAdsParseCookieString(sVal) {
    var cookieString=document.cookie;
    var stringVal = sVal;
    if(!cookieString) {
        return '';
    }
    var checkString = cookieString.indexOf(stringVal+"=");
    if(-1===checkString) {
        return '';
    }
    var stringLen = checkString + stringVal.length+1;
    var stringEnd = cookieString.indexOf(";", stringLen);
    return cookieString.substring(stringLen,stringEnd<0?cookieString.length:stringEnd);
}
function TiiAdsIsDebugMode() {
	return window.location.search.indexOf("debugads") >= 0;
}
function TiiAdsIsTestMode() {
	return window.location.search.indexOf("testads") >= 0;
}
function TiiAdshascid() {
	return window.location.search.indexOf("cid") >= 0;
}
function TiiAdsGetRandomNumber() {
	return Math.ceil(1+1E12*Math.random());
}
function TiiAd_isSecure() {
	return (document.location.protocol == "https:");
}
function TiiAdsSetCookie(sName, sValue, sExpires, sPath, sDomain, bSecure) {
 	var sCookieText =	escape(sName) + '=' + escape(sValue);
	sCookieText +=		(sExpires ? '; EXPIRES=' + sExpires.toGMTString() : '');
	sCookieText +=		(sPath ? '; PATH=' + sPath : '');
	sCookieText +=		(sDomain ? '; DOMAIN=' + sDomain : '');
	sCookieText +=		(bSecure ? '; SECURE' : '');
	
	document.cookie = sCookieText;
}
// Behavior Targeting
function TiiAdTrackBehavior() {
	if (typeof(DM_tag) == "function" && typeof(s_time) == "object") {
		rsCategory = s_time.channel + " > " + s_time.prop16 + " > " + s_time.prop11;
		DM_cat(rsCategory);
		DM_tag();		
		this.behaviorTracked = true;
	}
}
function TiiAdGetTacodaSegments() {
	
	var tcd_segs = [];
	var segs_beg = document.cookie.indexOf('AxData=');
	if (segs_beg >= 0) {
		segs_beg = document.cookie.indexOf('=',segs_beg)+1;

		if (segs_beg > 0){
			var segs_end = document.cookie.indexOf(';',segs_beg);
			if (segs_end == -1) segs_end=document.cookie.length;
			tcd_segs=document.cookie.substring(segs_beg,segs_end);
                        if(tcd_segs.length <=0 ) {
                                var retVal = new Array(); // Will return empty value if there is no cookie
                                return retVal;
                        }

			//tcd_segs = "1#50977|51051|55210"; @value for testing purpose 

			tcd_segs = tcd_segs.split("#");
			if(tcd_segs[1].indexOf("|") > 0) {
				tcd_segs = tcd_segs[1].split("|");	
			} else {
				tcd_segs = tcd_segs[1];	
				return tcd_segs;
			}
			var segLen = "", segArr = new Array()
			segLen = tcd_segs.length;
			var segs = new Array();
			for (var i = 0; i < segLen; i++){
    				segs[i] = tcd_segs[i];
    			}
			return segs;
		} 
	} 
	
	var retVal = new Array(); // Will return empty value if there is no cookie
	return retVal;
}
function TiiAdGetRevSciSegments() {
	var rsi_segs = [];
	var segs_beg = document.cookie.indexOf('rsi_segs=');
	if (segs_beg >= 0) {
		segs_beg = document.cookie.indexOf('=',segs_beg)+1;
		if (segs_beg > 0){
			var segs_end = document.cookie.indexOf(';',segs_beg);
			if (segs_end == -1) segs_end=document.cookie.length;
			rsi_segs=document.cookie.substring(segs_beg,segs_end).split('|');
		}
	}

	var segLen = 10
	var segQS = "", segArr = new Array()
	
	if (rsi_segs.length < segLen){
		segLen = rsi_segs.length
	}

	var segs = new Array();
	for (var i = 0; i < segLen; i++){
		segArr = rsi_segs[i].split("_")
		if (segArr.length > 1) {
    		segs[i] = segArr[1];
    		segQS += ("rsi" + "=" + segArr[1] + ";")
    	}
	}
	
	return segs;
}
function TiiAdsGetVideoTestParam() {
	if (TiiAdsIsTestMode()) {
		return ";test=1"
	}
	return ""
}
// Redirect Functions
function tiiAdSetType() {}
function tiiAdSetTarget() {}
function tiiHtmlAdWH(mn, width, height) {
	adFactory.getAd(width, height).write();
}
/**
 * BlueKai Implementation 03.14.2013
 */
 var TIICONSTANTS = {
    'bk_allow_deny_mode': (typeof(TGX_SITE_CONFIG) != "undefined" && TGX_SITE_CONFIG.bluekai == false)? 'deny':'allow',
    'bk_enabled_root_domains': 'content.timeinc.net,people.com,peoplestylewatch.com,celebritybabies.com,peoplepets.com,realsimple.com,ew.com,peopleenespanol.com,essence.com,instyle.com,time.com,timeforkids.com,sportsillustrated.cnn.com,si.com,sikids.com,golf.com,fannation.com,allyou.com,coastalliving.com,cookinglight.com,myrecipes.com,southernliving.com,thisoldhouse.com,myhomeideas.com,health.com,foodandwine.com,travelandleisure.com,departures.com,fortune.com,money.com',
    'bk_disabled_root_domains': 'eskyguide.com,executivetravelmagazine.com,sunset.com',
    'bk_enabled_sub_domains': 'westphoria.sunset.com',
    'bk_id': '13731',
    'bk_pixel_limit': '6',
    'bk_keys': 'aid, ch, ctype, path, oid, ptype, sch, rhost',
    'onebot_allow_deny_mode': (typeof(TGX_SITE_CONFIG) != "undefined" && TGX_SITE_CONFIG.onebot == false)? 'deny':'allow',
    'onebot_enabled_root_domains' : 'content.timeinc.net,people.com,peoplestylewatch.com,celebritybabies.com,peoplepets.com,realsimple.com,ew.com,peopleenespanol.com,essence.com,instyle.com,time.com,timeforkids.com,sportsillustrated.cnn.com,si.com,sikids.com,golf.com,fannation.com,allyou.com,coastalliving.com,cookinglight.com,myrecipes.com,southernliving.com,sunset.com,thisoldhouse.com,myhomeideas.com,health.com,foodandwine.com,travelandleisure.com,departures.com,fortune.com,money.com',
    'tile_counter': 1
 };
function TiiBkBeacon() {
    this.zone = "";
    this.bkFireBeacon = TiiBkFireBeacon;
    this.enabled = 0;
}
function TiiBkFireBeacon() {

    if (document.referrer == "") {
        bk_addPageCtx("ref","n");
    } else {
        bk_addPageCtx("ref", document.referrer.toString().substring(0,250));
    }
    for (var key in tgxDo.params) {
                if (TIICONSTANTS.bk_keys.indexOf(key) >= 0) {bk_addPageCtx(key, tgxDo.params[key]);}
    }
    
    if (typeof (tgxDo.bkparams) != 'undefined') {
        for (var key in tgxDo.bkparams) {
            if(tgxDo.bkparams.hasOwnProperty(key)){
                bk_addPageCtx(key, (typeof(tgxDo.bkparams[key])!= 'undefined')?tgxDo.bkparams[key] :'');
            }
        }
    }
    
    if (typeof(s_time) != 'undefined') {
        bk_addPageCtx("channel", (typeof(s_time.channel)!='undefined')?s_time.channel:'');
        bk_addPageCtx("p16", (typeof(s_time.prop16)!='undefined')?s_time.prop16:'');
        bk_addPageCtx("p11", (typeof(s_time.prop11)!='undefined')?s_time.prop11:'');
        bk_addPageCtx("e23", (typeof(s_time.eVar23)!='undefined')?s_time.eVar23:'');
        bk_addPageCtx("p12", (typeof(s_time.prop12)!='undefined')?s_time.prop12:'');
        bk_addPageCtx("p15", (typeof(s_time.prop15)!='undefined')?s_time.prop15:'');
        bk_addPageCtx("p20", (typeof(s_time.prop20)!='undefined')?s_time.prop20:'');
        bk_addPageCtx("p5", (typeof(s_time.prop5)!='undefined')?s_time.prop5:'');
        bk_addPageCtx("p7", (typeof(s_time.prop7)!='undefined')?s_time.prop7:'');
        
        bk_addPageCtx("e30", (typeof(s_time.eVar30)!='undefined')?s_time.eVar30:'');
        bk_addPageCtx("e31", (typeof(s_time.eVar31)!='undefined')?s_time.eVar31:'');
        bk_addPageCtx("e32", (typeof(s_time.eVar32)!='undefined')?s_time.eVar32:'');
        bk_addPageCtx("e33", (typeof(s_time.eVar33)!='undefined')?s_time.eVar33:'');
        bk_addPageCtx("e34", (typeof(s_time.eVar34)!='undefined')?s_time.eVar34:'');
        bk_addPageCtx("e38", (typeof(s_time.eVar38)!='undefined')?s_time.eVar38:'');
        
        bk_addPageCtx("events", (typeof(s_time.events)!='undefined')?s_time.events:'');
	bk_addPageCtx("pgname", (typeof(s_time.pageName)!='undefined')?s_time.pageName:'');
	bk_addPageCtx("e6", (typeof(s_time.eVar6)!='undefined')?s_time.eVar6:'');
	bk_addPageCtx("campaign", (typeof(s_time.campaign)!='undefined')?s_time.campaign:'');
	bk_addPageCtx("s_acct", (typeof(s_account)!='undefined')?s_account:'');
	bk_addPageCtx("p3", (typeof(s_time.prop3)!='undefined')?s_time.prop3:'');
	bk_addPageCtx("device", navigator.userAgent);
    }
    bk_allow_multiple_calls = true;
    bk_doJSTag(TIICONSTANTS.bk_id,TIICONSTANTS.bk_pixel_limit);

}
function _Tii_init() {
    var domain = tgxUtil.getRootDomain();
    var subdomain = tgxUtil.getSubDomain();
    if (TIICONSTANTS.bk_allow_deny_mode == "allow") {
        if (TIICONSTANTS.bk_enabled_root_domains.indexOf(domain) >= 0 || TIICONSTANTS.bk_enabled_sub_domains.indexOf(subdomain) >= 0) {
            document.writeln('<iframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none" src="javascript:void(0)"></iframe>');
            if (TiiAd_isSecure()) {
                document.writeln('<scr' + 'ipt type="text/javascript" src="https://a248.e.akamai.net/f/1016/606/2d/tiads-ssl.timeinc.net/ads/tii_bk-coretag.js"></scr' + 'ipt>');
                document.writeln('<scr' + 'ipt type="text/javascript" src="https://a248.e.akamai.net/f/1016/606/2d/tiads-ssl.timeinc.net/ads/subsbk.js"></scr' + 'ipt>');

          } else {
                document.writeln('<scr' + 'ipt type="text/javascript" src="http://tiads.timeinc.net/ads/tii_bk-coretag.js"></scr' + 'ipt>');
                document.writeln('<scr' + 'ipt type="text/javascript" src="http://tiads.timeinc.net/ads/subsbk.js"></scr' + 'ipt>');

            }
            bk.enabled = 1;
        }
    }
}
function _Tii_revsciinit() {
    var cb = new Date().getTime();
    var asiPqTag = false;
    revscicounter = 0;
    if((typeof(TGX_SITE_CONFIG) == "undefined") || (typeof(TGX_SITE_CONFIG) != "undefined" && typeof(TGX_SITE_CONFIG.pggateway) == "undefined") || (typeof(TGX_SITE_CONFIG) != "undefined" && typeof(TGX_SITE_CONFIG.pggateway) != "undefined" && TGX_SITE_CONFIG.pggateway == true) ) {

        try {
            document.write("<sc" + "ript type='text/javascript' language='JavaScript' src='//pq-direct.revsci.net/pql?placementIdList=DrULO1,tzFgKb&cb=" + cb + "'></sc" + "ript>"); 
        } catch (err) {
            console.log(err.message);
        }
        TiiAdrevssciwrite();
    }
}
function TiiAdrevssciwrite() {
    if (typeof (asiPlacements) === 'undefined' && revscicounter < 7) {
        revscicounter++;
        revscitimer = window.setTimeout(TiiAdrevssciwrite, revscicounter * 50);
        return revscitimer;
    } else if (typeof asiPlacements !== 'undefined') {
        try {
            for(var p in asiPlacements) {
                window["ASPQ_"+p]="";
                for(var key in asiPlacements[p].data) {
                    window["ASPQ_"+p] += "PQ_"+p+"_"+key;
                }
            }
        }
        catch(e) {
            console.log(e.message);
        }
    } else {
        //console.log('No Ads are qualified');
    }
        window.clearTimeout(revscitimer);
}
function TiiAmazonReload() {
    (function() {
        googletag.cmd.push(function() {
            googletag.pubads().clearTargeting('amznslots'); //clear custom targeting value by key
            var amazonCallbackFunction = function() {
                amznads.setTargetingForGPTAsync('amznslots');  //reset custom targeting value by key
            };
            amznads.getAdsCallback('3042', amazonCallbackFunction);
        });
    })();
}
function TiiAdTagReload() {
    TiiAmazonReload();
}
function TgxUtil() {
    this.getRootDomain = TgxUtilGetRootDomain;
    this.getSubDomain = TgxUtilGetSubDomain;
}   
function TgxUtilGetRootDomain() {

    var arr = window.location.hostname.split('.');  
    if (typeof(arr[1]) == "undefined") {
        return(window.location.hostname);
    }else if (arr.length == 1) {
        return(window.location.hostname);
    }else {
        return(arr[arr.length-2]+'.'+arr[arr.length-1]);
    }
}
function TgxUtilGetSubDomain() {
    return document.domain;
}
function TgxData() {
    this.params = new Array();
    this.bkparams = new Array();
    this.pageparams = new Array();
    this.slotparams = new Array();
    this.refreshSlot = null;
    this.istSlot = null;
    this.istCmSlot = null;
    this.parentDiv = null;
    this.zone = "";
    this.slotQueue = new Array();
    this.renderingMode = null;
    this.processMode = null;
    this.disableinitMode = null;
    this.singlerequestMode = null;
    this.slots = new Array();
    this.slotkeys = new Array();
    this.oopslots = new Array();
} 
/**
 * BEGINNING OF Overridden TII ADS CODE
 */
function TiiAd_getAdTag() {

    var adTag; var tgx = new TgxAdBridge(this);
    adTag = '<div id="' + tgx._getSlotTarget() + '"><scr' + 'ipt type="text/javascript">' + tgx.getSlotScript(tgxDo.renderingMode, 1, 0, tgx._getSlotUnitName(), tgx._getSlotSizes(), tgx._getSlotTarget(), 1, 1 ) + '</scr' + 'ipt></div>';
    return adTag;

}
function TiiAd_getAdUrl() {

    return this.adServer + (this.params['pfadx'] ? "pfadx" : "adj") + "/" + this._getAdParams();
}

function TiiAdWrite(parentDivId, isCompanion) {
        var slotname = parentDivId;
        if (slotname) {
            this.setParam("slotname", parentDivId);
        }
        if ((typeof(TGX_SITE_CONFIG) != "undefined") && (TGX_SITE_CONFIG.tileOverride == true)) {
        } else {
            var cmad = this.sitename.search("cm.");
            if (cmad !== -1) {
            } else {
                this.setParam('tile', TIICONSTANTS.tile_counter);
                TIICONSTANTS.tile_counter++;
            }
        }
        var tgx = new TgxAdBridge(this);
        if ((!tgxDo.renderingMode)) {
            if ((typeof(TGX_SITE_CONFIG) != "undefined") && (TGX_SITE_CONFIG.gpt_sync_mode == 'async')) {
                tgxDo.renderingMode = "async";
            } else {
                tgxDo.renderingMode = "sync";
            }
        }
        var scripts = document.getElementsByTagName("script");
        if (!parentDivId) {
            tgxDo.parentDiv = scripts[scripts.length - 1].parentNode;            
        }
        if (tgxDo.processMode == "dequeue") {
            for (i = 0; i < tgxDo.slotQueue.length; i++) {
                tgx._getScript(tgxDo.slotQueue[i].divId, tgxDo.slotQueue[i].code);
            }
        }
        tgx.writeDebugInfoDiv(parentDivId);
        if ((typeof(isCompanion) != "undefined") && (isCompanion == "companion")) {
            tgx.writeAdSlot(parentDivId, 1);
        } else {
            tgx.writeAdSlot(parentDivId);
        }
        tgx.setProcessMode();
        tgx.writeOopSlot(parentDivId);
        //tgx.writeRefreshSlot(parentDivId);
        tgx.setProcessMode();
}

function TiiAdUpdateCorrelator() {
    if (typeof googletag != 'undefined') { 
        googletag.pubads().updateCorrelator();
    }
}
    
/**
 * BEGINNING OF TGX CORE CODE
 */   
    
/**
 * TGX PUBLIC METHODS
 */

function TgxAdBridge(ad) {

/**
 * TGX Public Methods
 */
    this.getSlotFormattedParams     = TgxAdBridgeGetSlotFormattedParams;
    this.getPageFormattedParams     = TgxAdBridgeGetPageFormattedParams;
    this.getSlotScript              = TgxAdBridgeGetSlotScript;
    this.setProcessMode             = TgxAdBridgeSetProcessMode;
    this.writeRefreshSlot           = TgxAdBridgeWriteRefreshSlot;
    this.writeAdSlot                = TgxAdBridgeWriteAdSlot;
    this.writeOopSlot               = TgxAdBridgeWriteOopSlot;
    this.writeDebugInfoDiv          = TgxAdBridgeWriteDebugInfoDiv;
    this.refreshSlots               = TgxAdBridgeRefreshSlots;
    this.refreshBatchSlots          = TgxAdBridgeRefreshBatchSlots;
    this.refreshBatchOOPSlots       = TgxAdBridgeRefreshBatchOOPSlots;
    this.clearRefreshSlots          = TgxAdBridgeClearRefreshSlots;
    this.clearRefreshBatchSlots     = TgxAdBridgeClearRefreshBatchSlots;
    this.clearRefreshBatchOOPSlots   = TgxAdBridgeClearRefreshBatchOOPSlots;
    this.resetOOPSlot               = TgxAdBridgeResetOOPSlot;
    this.flushAdQueue               = TgxAdBridgeFlushAdQueue;

/**
 * TGX Private Methods
 */
    this._getSlotSizes              = TgxAdBridge_getSlotSizes;
    this._getSlotZone               = TgxAdBridge_getSlotZone;
    this._getSlotSiteName           = TgxAdBridge_getSlotSiteName;
    this._getSlotFilteredSiteName   = TgxAdBridge_getSlotFilteredSiteName;
    this._getInterstitial           = TgxAdBridge_getInterstitial;
    this._getSlotUnitName           = TgxAdBridge_getSlotUnitName;
    this._getSlotTarget             = TgxAdBridge_getSlotTarget;
    this._getTextBox                = TgxAdBridge_getTextBox;
    this._placeDebugHtml            = TgxAdBridge_placeDebugHtml;
    this._getDiv                    = TgxAdBridge_getDiv;
    this._getScript                 = TgxAdBridge_getScript;

/**
 * TGX Properties
 */
    this.width                      = ad.width;
    this.height                     = ad.height;
    this.sitename                   = ad.sitename;
    this.tileNumber                 = ad.tileNumber;
    this.params                     = ad.params;
    this.zone                       = ad.zone;

}
function TgxAdBridgeFlushAdQueue(parentDivId) {
    var scripts = document.getElementsByTagName("script");
    if (!parentDivId) {
        tgxDo.parentDiv = scripts[scripts.length - 1].parentNode;            
    }
    if (tgxDo.processMode == "dequeue") {
        for (i = 0; i < tgxDo.slotQueue.length; i++) {
           this._getScript(tgxDo.slotQueue[i].divId, tgxDo.slotQueue[i].code);
        }
    }
    this.setProcessMode();
}
function TgxAdBridgeGetSlotFormattedParams() {

    var paramsCode = "";
    for (var key in this.params) {
        var tempParamsVals = this.params[key].toString();
        if (typeof(this.params[key]) != "function") {
            if (tempParamsVals.indexOf(",") != -1) {
                tempParamsVals = " ['" + this.params[key].toString().replace(/'/g, "").replace(/,/g, "','")  + "']";
            } else {
                tempParamsVals = " '" + this.params[key].toString().replace(/'/g, "") + "'"
            }
            paramsCode += ".setTargeting('" + key + "'," + tempParamsVals + ")";   
        }

    }
    paramsCode += ".setTargeting('ch','";
    if (typeof(this.params.ch) != "undefined") {
        paramsCode += this.params.ch;
    }
    return paramsCode;
}
function TgxAdBridgeGetPageFormattedParams() {

    var pageparamsCode = "";
    for (var key in tgxDo.pageparams) {
        var tempParamsVals = tgxDo.pageparams[key].toString();
        if (typeof(tgxDo.pageparams[key]) != "function") {
            if (tempParamsVals.indexOf(",") != -1) {
                tempParamsVals = " ['" + tgxDo.pageparams[key].toString().replace(/,/g, "','")  + "']";
            } else {
                tempParamsVals = " '" + tgxDo.pageparams[key].toString() + "'"
            }
            pageparamsCode += ".setTargeting('" + key + "'," + tempParamsVals + ")";   
        }

    }
    return pageparamsCode;
}
function TgxAdBridgeGetSlotScript(setMode, enableServices, oop, slotName, slotSize, slotTarget, targetAd, display, parentDivId, companion) {

     var codePayload = '';
     if (setMode == 'sync') {
         codePayload += "googletag.pubads().enableSyncRendering();";
     } 
     if (!tgxDo.processMode) {
        codePayload += "googletag.pubads().collapseEmptyDivs();";
     }
     if (oop && parentDivId && (tgxDo.renderingMode == 'async') && (typeof(TGX_SITE_CONFIG) != "undefined") && TGX_SITE_CONFIG.refresh_oop_slot) {
         codePayload += "tgxDo.oopslots['" + parentDivId + "'] = googletag.defineOutOfPageSlot('" + slotName + "',";
     } else if (oop) {
         codePayload += "googletag.defineOutOfPageSlot('" + slotName + "',";
     } else if (parentDivId) {
         codePayload += "tgxDo.slots['" + parentDivId + "'] = googletag.defineSlot('" + slotName + "',";
         codePayload += slotSize + ","; 
     } else {
         codePayload += "googletag.defineSlot('" + slotName + "',";
         codePayload += slotSize + ",";      
     }
     codePayload += "'" + slotTarget + "')";
     if (companion) {
         codePayload += ".addService(googletag.companionAds())";
     }
     if (targetAd) {
         codePayload += ".addService(googletag.pubads())" + this.getSlotFormattedParams() + "');";
         codePayload += "googletag.pubads()" + this.getPageFormattedParams() +";";
     } else {
         codePayload += ";";
     }
     if (tgxDo.singlerequestMode && tgxDo.singlerequestMode == true) {
            codePayload += "googletag.pubads().enableSingleRequest();";
     }
     if(tgxDo.disableinitMode && tgxDo.disableinitMode == true){
            codePayload += "googletag.pubads().disableInitialLoad();";
     }
     if (enableServices) {
         codePayload += "googletag.enableServices();";
     }
     if (display) {
         codePayload += "googletag.display('" + slotTarget + "');"; 
     } else {
         codePayload = "tgxDo.refreshSlot = " + codePayload + "googletag.pubads().noFetch();";
     }
     return codePayload;
}
function TgxAdBridgeRefreshSlots(slots,correlatorflag) {
    var slotsToRefresh = new Array();
    if(typeof(this.params.pu) != "undefined"){
        this.params["pu"]++;
    }
    for  (i=0; i < slots.length; i++) {
	for (var key in this.params) {
		var tempParamsVals = this.params[key].toString();
		if (typeof(this.params[key]) != "function") {
			tgxDo.slots[slots[i]].setTargeting(key,this.params[key]);   
		}
        }
	if (typeof(this.params.ch) != "undefined") {
            tgxDo.slots[slots[i]].setTargeting('ch',this.params.ch);
	}
		slotsToRefresh.push(tgxDo.slots[slots[i]]);
    }
    if ((typeof(TGX_SITE_CONFIG) != "undefined") && TGX_SITE_CONFIG.refresh_oop_slot) {
        for (var key in tgxDo.oopslots) {
            var oopkey = key;
            if (typeof tgxDo.oopslots[oopkey] !== "function") {
                for (var key in this.params) {
                    if (typeof (this.params[key]) != "function") {
                        tgxDo.oopslots[oopkey].setTargeting(key, this.params[key]);
                    }
                }
                slotsToRefresh.push(tgxDo.oopslots[oopkey]);
            }
        }
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        TGX_SITE_CONFIG.refresh_oop_slot = false;
        googletag.pubads().refresh(slotsToRefresh, {changeCorrelator: false});
    }
    else {
        googletag.pubads().refresh(slotsToRefresh);
    }
}  
/**
 * @description - A Function to refresh Ads with Batch SRA
 * @function 
 * @public
 * @param {array} slots
 * @param {string} correlatorflag 
 */
function TgxAdBridgeRefreshBatchSlots(slots,correlatorflag) {
    var slotsToRefresh = new Array();
    if(typeof(this.params.pu) != "undefined"){
        this.params["pu"]++;
    }
    for  (i=0; i < slots.length; i++) {
	for (var key in this.params) {
		var tempParamsVals = this.params[key].toString();
		if (typeof(this.params[key]) != "function") {
			tgxDo.slots[slots[i]].setTargeting(key,this.params[key]);   
		}
        }
	if (typeof(this.params.ch) != "undefined") {
            tgxDo.slots[slots[i]].setTargeting('ch',this.params.ch);
	}
		slotsToRefresh.push(tgxDo.slots[slots[i]]);
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        
        googletag.pubads().refresh(slotsToRefresh, {changeCorrelator: false});
    }
    else {
        googletag.pubads().refresh(slotsToRefresh);
    }
}
function TgxAdBridgeRefreshBatchOOPSlots(correlatorflag){
    var slotsToOOPRefresh = new Array();
    if ((typeof(TGX_SITE_CONFIG) != "undefined") && TGX_SITE_CONFIG.refresh_oop_slot) {
        for (var key in tgxDo.oopslots) {
            var oopkey = key;
            if (typeof tgxDo.oopslots[oopkey] !== "function") {
                for (var key in this.params) {
                    if (typeof (this.params[key]) != "function") {
                        tgxDo.oopslots[oopkey].setTargeting(key, this.params[key]);
                    }
                }
                slotsToOOPRefresh.push(tgxDo.oopslots[oopkey]);
            }
        }
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        TGX_SITE_CONFIG.refresh_oop_slot = false;
        googletag.pubads().refresh(slotsToOOPRefresh, {changeCorrelator: false});
    }
    else {
        googletag.pubads().refresh(slotsToOOPRefresh);
    }
}
function TgxAdBridgeClearRefreshSlots(slots,slotkeys,correlatorflag) {
    var slotsToRefresh = new Array();
    for (i = 0; i < slots.length; i++) {
        tgxDo.slots[slots[i]].clearTargeting();
        for (var key in tgxDo.slotparams) {
            if (key == slots[i]) {
                for (var key in this.params) {
                    if(key !== "pu") {
                        tgxDo.slots[slots[i]].setTargeting(key, this.params[key]);
                    }
                }
                if (slotkeys.length > 0) {
                    for (j = 0; j < slotkeys.length; j++) {
                        var slotkey = slotkeys[j];
                        if (typeof tgxDo.slotparams[slots[i]][slotkey] !== "undefined") {
                            tgxDo.slots[slots[i]].setTargeting(slotkey, tgxDo.slotparams[slots[i]][slotkey]);
                        }
                    }
                }
            }
        }
        if (typeof (this.params.ch) != "undefined") {
            tgxDo.slots[slots[i]].setTargeting('ch', this.params.ch);
        }
        slotsToRefresh.push(tgxDo.slots[slots[i]]);
    }
    if ((typeof (TGX_SITE_CONFIG) != "undefined") && TGX_SITE_CONFIG.refresh_oop_slot) {
        for (var key in tgxDo.oopslots) {
            var oopkey = key;
            if (typeof tgxDo.oopslots[oopkey] !== "function") {
                tgxDo.oopslots[oopkey].clearTargeting();
                for (var key in tgxDo.slotparams) {
                    if (key == oopkey) {
                        for (var key in this.params) {
                            if (key !== "pu") {
                                tgxDo.oopslots[oopkey].setTargeting(key, this.params[key]);
                            }
                        }
                        if (slotkeys.length > 0) {
                            for (j = 0; j < slotkeys.length; j++) {
                                var slotkey = slotkeys[j];
                                if (typeof tgxDo.slotparams[oopkey][slotkey] !== "undefined") {
                                    tgxDo.oopslots[oopkey].setTargeting(slotkey, tgxDo.slotparams[oopkey][slotkey]);
                                }
                            }
                        }
                    }

                }
                slotsToRefresh.push(tgxDo.oopslots[oopkey]);
            }
        }
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        TGX_SITE_CONFIG.refresh_oop_slot = false;
        googletag.pubads().refresh(slotsToRefresh, {changeCorrelator: false});
    }
    else {
        googletag.pubads().refresh(slotsToRefresh);

    }
}
/**
 * @description - A Function to refresh Ads with Batch SRA
 * @function 
 * @public
 * @param {array} slots
 * @param {string} slotkeys
 * @param {string} correlatorflag 
 */
function TgxAdBridgeClearRefreshBatchSlots(slots,slotkeys,correlatorflag) {
    var slotsToRefresh = new Array();
    for (i = 0; i < slots.length; i++) {
        tgxDo.slots[slots[i]].clearTargeting();
        for (var key in tgxDo.slotparams) {
            if (key == slots[i]) {
                for (var key in this.params) {
                    if(key !== "pu") {
                        tgxDo.slots[slots[i]].setTargeting(key, this.params[key]);
                    }
                }
                if (slotkeys.length > 0) {
                    for (j = 0; j < slotkeys.length; j++) {
                        var slotkey = slotkeys[j];
                        if (typeof tgxDo.slotparams[slots[i]][slotkey] !== "undefined") {
                            tgxDo.slots[slots[i]].setTargeting(slotkey, tgxDo.slotparams[slots[i]][slotkey]);
                        }
                    }
                }
            }
        }
        if (typeof (this.params.ch) != "undefined") {
            tgxDo.slots[slots[i]].setTargeting('ch', this.params.ch);
        }
        slotsToRefresh.push(tgxDo.slots[slots[i]]);
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        googletag.pubads().refresh(slotsToRefresh, {changeCorrelator: false});
    } else {
        googletag.pubads().refresh(slotsToRefresh);
    }
}
function TgxAdBridgeClearRefreshBatchOOPSlots(slotkeys, correlatorflag) {
    var slotsToOOPRefresh = new Array();
    if ((typeof (TGX_SITE_CONFIG) != "undefined") && TGX_SITE_CONFIG.refresh_oop_slot) {
        for (var key in tgxDo.oopslots) {
            var oopkey = key;
            if (typeof tgxDo.oopslots[oopkey] !== "function") {
                tgxDo.oopslots[oopkey].clearTargeting();
                for (var key in tgxDo.slotparams) {
                    if (key == oopkey) {
                        for (var key in this.params) {
                            if (key !== "pu") {
                                tgxDo.oopslots[oopkey].setTargeting(key, this.params[key]);
                            }
                        }
                        if (slotkeys.length > 0) {
                            for (j = 0; j < slotkeys.length; j++) {
                                var slotkey = slotkeys[j];
                                if (typeof tgxDo.slotparams[oopkey][slotkey] !== "undefined") {
                                    tgxDo.oopslots[oopkey].setTargeting(slotkey, tgxDo.slotparams[oopkey][slotkey]);
                                }
                            }
                        }
                    }

                }
                slotsToOOPRefresh.push(tgxDo.oopslots[oopkey]);
            }
        }
    }
    if (typeof correlatorflag !== 'undefined' && !correlatorflag) {
        TGX_SITE_CONFIG.refresh_oop_slot = false;
        googletag.pubads().refresh(slotsToOOPRefresh , {changeCorrelator: false});
    } else {
        googletag.pubads().refresh(slotsToOOPRefresh);
    }
}
function TgxAdBridgeResetOOPSlot(slot) {
    if(slot){
        var slottarget = document.getElementById(slot);
        var oopdiv = slottarget.children[1];
        if(slottarget && oopdiv){
        }
    }
    if (tgxDo.istSlot == null) {
        return;
    }
    else if (tgxDo.istSlot === true) {
        tgxDo.istSlot = null;
    }
}
function TgxAdBridgeWriteRefreshSlot(parentDivId) {
     if ((parentDivId) && (TGX_SITE_CONFIG.gpt_sync_mode == 'async') && (tgxDo.refreshSlot == null)) {
         var refreshSlotName = this._getSlotTarget() + "_refresh";
         tgxDo.refreshSlot = this._getDiv(refreshSlotName, 1, 1, parentDivId);
         this._getScript(refreshSlotName, this.getSlotScript(tgxDo.renderingMode, 0, 0, '/8484/refreshslot', "[2, 2]", refreshSlotName, 0, 0 ));
     } 
} 
function TgxAdBridgeSetProcessMode(mode) {
    if (mode) {
        tgxDo.processMode = mode;
    } else {
        if (!tgxDo.processMode) {
            tgxDo.processMode = "queue";
        } else if (tgxDo.processMode == "queue") {
            tgxDo.processMode = "dequeue";
        } else if (tgxDo.processMode == "dequeue") {
            tgxDo.processMode = "run";
        }
    }      
} 
function TgxAdBridgeWriteAdSlot(parentDivId, companion) {

    this._getDiv(this._getSlotTarget(), this.width, this.height, parentDivId);
    this._getScript(this._getSlotTarget(), this.getSlotScript(tgxDo.renderingMode, 1, 0, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget(), 1, 1, parentDivId, companion));
    if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(tgxDo.renderingMode, 1, 0, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget(), 1, 1, '', companion ))};

}      
function TgxAdBridgeWriteOopSlot(parentDivId) {
    if ((this.params.oop == "yes") && (this._getSlotSiteName().search("cm")+1) && (tgxDo.istCmSlot == null)) {
        this._getDiv(this._getSlotTarget() + "-oop", this.width, this.height, parentDivId);
        this._getScript(this._getSlotTarget() + "-oop", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1, parentDivId ));
        if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ))};
        tgxDo.istCmSlot = true;
    }
    if ((this.params.oop == "yes") && (this._getSlotSiteName().search("cm") == -1) && (tgxDo.istSlot == null)) {
        this._getDiv(this._getSlotTarget() + "-oop", this.width, this.height, parentDivId);
        this._getScript(this._getSlotTarget() + "-oop", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1, parentDivId ));
        if (TiiAdsIsDebugMode()) {this._getTextBox(this._getSlotTarget() + "_debug", this.getSlotScript(0, 1, 1, this._getSlotUnitName(), this._getSlotSizes(), this._getSlotTarget()  + "-oop", 1, 1 ))};
        tgxDo.istSlot = true;
    }
}   
function TgxAdBridgeWriteDebugInfoDiv(parentDivId) {
    if (TiiAdsIsDebugMode()) {this._getDiv(this._getSlotTarget() + "_debug", this.width, this.height, parentDivId)};
}    
/**
 * TGX PRIVATE METHODS    
 */
function TgxAdBridge_getDiv(divId, width, height, parentDivId) {

        var div = document.createElement('div');      
        div.id = divId;
        //Next two lines commented out to address display issues on IE8
        //div.style.width = width;
        //div.style.height = height;
        if (parentDivId) {
            document.getElementById(parentDivId).appendChild(div);
        } else {
            tgxDo.parentDiv.appendChild(div);
        }
        return div;
    }
function TgxAdBridge_getScript(divId, code) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        try {
           script.appendChild(document.createTextNode(code)); 
        } catch (e) {
           script.text = code; 
        }
        
        if (tgxDo.processMode == "queue") {
            var queuedScript = new Object;
            queuedScript.divId = divId;
            queuedScript.code = code;
            tgxDo.slotQueue.push(queuedScript);
        } else {
            document.getElementById(divId).appendChild(script); 
        }
    }
function TgxAdBridge_getTextBox(divId, content) {

        var textbox = document.createElement('textarea');
        textbox.style.width = this.width;
        textbox.style.height = "20px";
        textbox.style.font = "12px courier";
        textbox.style.backgroundColor = "#FFFFBD";
        textbox.style.border = "1px solid black";
        textbox.style.zIndex = "auto";
        textbox.value = content;
        document.getElementById(divId).appendChild(textbox); 
}
function TgxAdBridge_getSlotSizes() {

    var adSizes = "";
    var adSizeArray = new Array();
    if (this.params.sz.search(",")) {
        adSizeArray = this.params.sz.split(",")  
    }
    for (var a = 0; a < adSizeArray.length; a++) {
        var sep = ",";
        if ((adSizeArray.length - 1) == a) {
            sep = "";
        };
        adSizeWH = adSizeArray[a].split("x");
        adSizes += "[" + adSizeWH[0] + "," + adSizeWH[1] + "]" + sep;
    }
    if (adSizeArray.length > 0) {
        adSizes = "[" + adSizes + "]";
    }
    return adSizes;

}
function TgxAdBridge_getSlotZone() {

    var adZone = this.zone.replace(/[^A-Za-z0-9_\/]/g, "");
    adZone = adZone.replace(/^\/|\/$/g, '');
    if (adZone) {
        adZone = "/" + adZone;
    }
    return adZone;

}
function TgxAdBridge_getSlotUnitName() {

    var slotUnit;
    if (TGX_CORE_CONFIG.gpt_mode == "test") {
        slotUnit = '/' + TGX_CORE_CONFIG.gpt_test_id + '/' + TGX_CORE_CONFIG.gpt_test_network + '_' + TGX_CORE_CONFIG.test_run_id + "_" + this._getSlotSiteName() +  this._getSlotZone();               
    } else if (TGX_CORE_CONFIG.gpt_mode == "prod") {
        slotUnit = '/' + TGX_CORE_CONFIG.gpt_prod_id + '/' + this._getSlotSiteName() +  this._getSlotZone();                           
    }
    slotUnit = slotUnit.replace(/(\/)\1/g, '/');
    return slotUnit;

}    
function TgxAdBridge_getSlotFilteredSiteName() {

    var filteredSitename = this.sitename.replace(TGX_CORE_CONFIG.legacy_network_id + ".", "");
    filteredSitename = filteredSitename.replace(TGX_CORE_CONFIG.legacy_network_id, ""); 
    var mobflag = filteredSitename.search("_mob|_tablet");
    if (mobflag !== -1) {
	filteredSitename = filteredSitename.replace(/_mob.*|_tablet/i, "");
    }
    if (TGX_CORE_CONFIG.alpha_numeric_site_ids.indexOf(filteredSitename) + 1) {
            filteredSitename = filteredSitename.replace(/[0-9]/g, '');
    }
    return filteredSitename;

}
function TgxAdBridge_getInterstitial() {

    var interstitial = "";
    if (this.params.oop == "yes") {
        interstitial = "googletag.defineOutOfPageSlot('" + this._getSlotUnitName() + "', '" + this._getSlotTarget() + "-oop').addService(googletag.pubads())"
    }
    return interstitial;

}
function TgxAdBridge_getSlotSiteName() {


    return this._getSlotFilteredSiteName();

}
function TgxAdBridge_getSlotTarget() {

    return this._getSlotSiteName() + '_' + this.tileNumber;

}

function TgxAdBridge_placeDebugHtml(parentDivName) {
    var divPlaced = false;

    return divPlaced;

}
/**
 * TGX UTIL METHODS    
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
          "use strict";
          if (this == null) {
              throw new TypeError();
          }
          var t = Object(this);
          var len = t.length >>> 0;
          if (len === 0) {
              return -1;
          }
          var n = 0;
          if (arguments.length > 1) {
              n = Number(arguments[1]);
              if (n != n) { // shortcut for verifying if it's NaN
                  n = 0;
              } else if (n != 0 && n != Infinity && n != -Infinity) {
                  n = (n > 0 || -1) * Math.floor(Math.abs(n));
              }
          }
          if (n >= len) {
              return -1;
          }
          var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
          for (; k < len; k++) {
              if (k in t && t[k] === searchElement) {
                  return k;
              }
          }
          return -1;
      }
}
/**
 * @description - A Function to turn on Visual Revenu Script on sites.
 * @function 
 * @public  
*/
function Tgx_vrinit() {
    //TGX-36 Migrate Visual Revenue to tealium already defined. if there is no config like TGX_SITE_CONFIG.VR_CONFIG visual revnue will not load.
    if(typeof TGX_SITE_CONFIG != 'undefined' && typeof TGX_SITE_CONFIG.VR_CONFIG != 'undefined' && typeof TGX_SITE_CONFIG.VR_CONFIG.enabled != 'undefined' && TGX_SITE_CONFIG.VR_CONFIG.enabled) {
        var head = document.head || document.getElementsByTagName('head')[0]
        var a, b , s = document.getElementsByTagName("script")[0];
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = (TiiAd_isSecure()) ? "https://a248.e.akamai.net/f/1016/606/2d/tiads-ssl.timeinc.net/ads/tgxvrs.js" : "http://tiads.timeinc.net/ads/tgxvrs.js" ;
        head.appendChild(a);
    }
}
/**
 * @description - A Function to track if article is trending or not from OneBot API.
 * @function
 * @returns {JSON data}
 * @public
 */
function Tgx_OneBotinit(){
    var domain = tgxUtil.getRootDomain();
    if (TIICONSTANTS.onebot_allow_deny_mode == "allow") {
        if (TIICONSTANTS.onebot_enabled_root_domains.indexOf(domain) >= 0) {
            try {
            var request,currentUrl,cleanUrl,OneBotUrl;
            currentUrl = document.URL;
            // For the benefit of testing, remove on deploy
            if(currentUrl.indexOf('test-tiads.timeinc.net') > -1){
                currentUrl = currentUrl.replace('test-tiads.timeinc.net/dev/test/alchemy-contextual/ads/test/','');
            } else if (currentUrl.indexOf('tiads.timeinc.net') > -1){;
                currentUrl = currentUrl.replace('tiads.timeinc.net/ads/test/','');
            }
            onebotkeyval = new Array();
            if (currentUrl.indexOf("?") > 0) {
                cleanUrl = currentUrl.substring(0, currentUrl.indexOf("?"));
            }
            else {
                cleanUrl = encodeURIComponent(currentUrl);
            }
            if(TiiAd_isSecure()) {
                OneBotUrl = "https://d1oggnumqrlfic.cloudfront.net/trending.json?url=" + cleanUrl + '&tags=all';
            }
            else{
                OneBotUrl = "http://cdn.api.onebot.timeinc.com/trending.json?url=" + cleanUrl + '&tags=all';
            }
            
            request = new XMLHttpRequest();
            if ("withCredentials" in request) {
                request.open('GET', OneBotUrl, true);
            }
            else if (typeof XDomainRequest !== "undefined") {
                request.open('GET', OneBotUrl, true);                  
            } 
            else {
                request = null;
            }
            if(!request){
                if(window.console){console.log("Error")}  
                return;
            }
            request.onload = function() {
                var response = request.responseText;
                var data = JSON.parse(response);
                if(typeof data.trending !== 'undefined' && data.trending){
                    onebotkeyval['trend']= 'yes';
                }
                if(data.message !== 'not found'){
                    console.debug(data);
                    var tags; // Reuse defined variables as much as possible
                    googletag.cmd.push(function(){
                        if(data.socialtags && data.socialtags.length > 0){
                            tags = new Array();
                            for(var i=0; i < data.socialtags.length; i++){
                                tags.push(data.socialtags[i]);
                            }
                            googletag.pubads().setTargeting('Social_Tags',tags);
                        }
                        if(data.taxons && data.taxons.length > 0){
                            tags = new Array();
                            for(var i=0; i < data.taxons.length; i++){
                                if(data.taxons[i].score >= 0.5){
                                    tags.push(data.taxons[i].name.replace(/\s+/g,'').replace(/:/g,'').replace(/\?/g,''));
                                }
                            }
                            googletag.pubads().setTargeting('Taxons',tags);
                        }
                        if(data.concepts && data.concepts.length > 0){
                            tags = new Array();
                            for(var i=0; i < data.concepts.length; i++){
                                if(data.concepts[i].relevance >= 0.5){
                                    tags.push(data.concepts[i].name.replace(/\s+/g,'').replace(/:/g,'').replace(/\?/g,''));
                                }
                            }
                            googletag.pubads().setTargeting('Concepts',tags);
                        }
                        if(data.sentiment && data.sentiment.length > 0){
                            var simpleSentiment;
                            if(data.sentiment[0] >= 0.75){
                                simpleSentiment = 'Very Positive';
                            } else if(data.sentiment[0] >= 0.5){
                                simpleSentiment = 'Positive';
                            } else if(data.sentiment[0] >= 0){
                                simpleSentiment = 'Neutral';
                            } else if(data.sentiment[0] >= -0.5) {
                                simpleSentiment = 'Negative';
                            } else {
                                simpleSentiment = 'Very Negative';
                            }
                            googletag.pubads().setTargeting('Sentiment',simpleSentiment);
                        }
                    });
                }
            };
            request.onerror = function() {
                if(window.console){console.log("Error")};
            };
            request.send();
            }
            catch(e){
                if(window.console){console.log(e)};
            }
        }
    }
} 
/**
 * @description - A Function to Set Page Level Targeting.
 * @function
 * @public
 */
function Tgx_PageParaminit(){
    if (TiiAdshascid()) {
        var cidValue = TiiAdsParseQueryString("cid");
	tgxDo.pageparams['cid'] = (isNaN(cidValue) ? 1 : cidValue);
    }
    var domain = document.URL.split("/")[2];
    if (domain) {
        tgxDo.pageparams['domain'] = domain;
    }
    var platformVal = TiiAdsParseCookieString('TI_PREFS');
    if (navigator.userAgent.match(/iPad/i)) {
	tgxDo.pageparams['plat'] = 'tablet';
    }
    else if (platformVal === 'default') {
        tgxDo.pageparams['plat'] = 'desktop';
    }
    else if (platformVal === 'phone' || platformVal === 'iphone') {
        tgxDo.pageparams['plat'] = 'mobile';
    }
    else if (platformVal === 'tablet') {
        tgxDo.pageparams['plat'] = 'tablet';
    }
    else if (navigator.userAgent.match(/Mobi/)) {
	tgxDo.pageparams['plat'] = 'mobile';
    }
    else {
	tgxDo.pageparams['plat'] = 'desktop';
    }
}
/**
 * @description - A Function to enable evidon script.
 * @function
 * @public
 */
function Tgx_Evidoninit() {
    //TGX-35 Migrate Evidon to tealium. Configuration is  TGX_SITE_CONFIG.evidon = false;
    if(!(typeof TGX_SITE_CONFIG !== 'undefined' && TGX_SITE_CONFIG.evidon === false)) {
        (function () {
            var evidonscript = document.createElement("script");
            evidonscript.async = true;
            evidonscript.type = "text/javascript";
            if (TiiAd_isSecure()) {
                evidonscript.src = 'https://a248.e.akamai.net/f/1016/606/2d/tiads-ssl.timeinc.net/ads/evidon.js';
            } else {
                evidonscript.src = 'http://tiads.timeinc.net/ads/evidon.js';
            }
            var evidonnode = document.getElementsByTagName("script")[0];
            evidonnode.parentNode.insertBefore(evidonscript, evidonnode);
        })();
    }
}
/**
 * @description - A Function to enable Amazon script.
 * @function
 * @public
 */
function Tgx_Amazon_init() {
    var amznads = amznads || {};
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    amznads.asyncParams = {
        'id': '3042',
        'callbackFn': function() {
            try {
                amznads.setTargetingForGPTAsync('amznslots');
            } catch (e) { /*ignore*/ }
	    /* Continue your DFP call here (optional) */
        },
        'timeout': 2e3
    };
    (function() {
        var a, s = document.getElementsByTagName("script")[0];
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = "//c.amazon-adsystem.com/aax2/amzn_ads.js";
        document.head.appendChild(a); //append after gpt.js
    })();

    return amznads;
}
/**
 * @description - A Function to enable GPT.
 * @function
 * @public
 */
function Tgx_init() {
    //GPT Boilerplate - Synchronous
    (function() {
        var useSSL = 'https:' == document.location.protocol;
        var src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    })();
}

/**
 * INLINE TGX CODE      
 */

var TGX_CORE_CONFIG = {
    'legacy_network_id': '3475',
    'test_run_id': '0329',
    'gpt_test_id': '9209926',
    'gpt_test_network': 'test',
    'gpt_prod_id': '8484',
    'gpt_mode' : 'prod',
    'alpha_numeric_site_ids' : ['mre2', 'hlt2', 'toh2', 'tim2', 'si2', 'golf2', 'cm.mre2', 'cm.hlt2', 'cm.toh2', 'cm.tim2', 'cm.si2', 'cm.golf2']
};
var bk = new TiiBkBeacon();
var tgxDo = new TgxData();
var tgxUtil = new TgxUtil();
_Tii_init();
Tgx_init();
var amznads = Tgx_Amazon_init();
Tgx_vrinit();
_Tii_revsciinit();
Tgx_OneBotinit();

if(!(typeof(TGX_SITE_CONFIG) !== 'undefined' && TGX_SITE_CONFIG.evidon === false)){
	Tgx_Evidoninit();
}
Tgx_PageParaminit();
