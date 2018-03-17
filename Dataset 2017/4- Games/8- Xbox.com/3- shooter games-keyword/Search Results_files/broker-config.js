/*
Copyright (c) 2017, comScore Inc. All rights reserved.
version: 5.1.3
*/
COMSCORE.SiteRecruit.Broker.config = {
	version: "5.1.3",
	cddsDomains: 'www.windowsphone.com|www.microsoftstore.com|(msdn|technet|azure|www|windows|support).microsoft.com|office.com',
	cddsInProgress: 'cddsinprogress',
	domainSwitch: 'tracking3p',
	domainMatch: '([\\da-z\.-]+\.com)',
	delay: 0,
	cddsIntervalMax: 10,

	crossDomainCheck: function() {
		if (this.cddsIntervalMax > 1) {
			this.cddsIntervalMax --;

			if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(this.cddsInProgress) != false ) {
				setInterval(function() { COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie()}, 1000);
				COMSCORE.SiteRecruit._halt = true;
				COMSCORE.SiteRecruit.Utils.UserPersistence.createCookie("srCDDS", "1", {path:'/',domain:COMSCORE.SiteRecruit.Broker.config.cookie.domain,duration:'s'});
				this.clearCrossDomainCheck();
			}
		}
		else {
			this.clearCrossDomainCheck();
		}
	},

	clearCrossDomainCheck: function() {
		window.clearInterval(crossDomainInterval);
	},

	isolateDomain: function(a) {
		a = a.substring(a.indexOf("//")+2,a.length);
		a = a.substring(0,a.indexOf("/"));
		return a;
	},

	testMode: false,
	addEventDelay: 1000,
	
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.xbox.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	tracker:{
		std:'http://live.xbox.com/shell/siterecruit_tracker_v2_ssl.htm?',
		ssl:'https://live.xbox.com/shell/siterecruit_tracker_v2_ssl.htm?'
	},
	mobile:{
		match: 'iphone|ipad|ipod|android|opera mini|blackberry|windows (phone|ce)|iemobile|htc|nokia|bb10|mobile safari|mobile',
		kmatch: '(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?',
		halt: true
	},
	graceIncr:{
		name: 'graceIncr',
		initDelay: 0,
		clickDelay: 5000,
		match: 'https:\/\/(account|accounts|billing|commerce|support|login|live)\.(microsoft|live|xbox)\.(com)',
		altTag: 'class',
		htmlMatch: 'sign in'
	},
	
	prefixUrl: "",
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: 'xboxdesignlab.xbox.com/($|en-us)', c: 'inv_c_p346776863-en-us.js', f: 0.01, p: 0  ,prereqs:{content:[{'element':'meta','attrib':'content','attribValue':'en-(us|US)'}],cookie:[]}}
],

	//events
	Events: {
		beforeRecruit: function() {
							// ADD shortcuts
			var csbc = COMSCORE.SiteRecruit.Broker.config;
			var csuu = COMSCORE.SiteRecruit.Utils.UserPersistence;

			// IF TRACKING3P EXISTS, REMOVE IT
			if (csuu.getCookieValue(csbc.domainSwitch) != false) {
				csuu.createCookie(csbc.domainSwitch, '', {path:'/',domain:csbc.cookie.domain,duration:-1});
			}

			COMSCORE.SiteRecruit.Broker.custom = {
				captLinks: function(u) {
					var v = csuu.getCookieValue('captLinks');
					var c = "";

					if (v == false) {
						c = escape(u) + ';';
					}
					else {
						if (c.length + v.length < 1440) {
							c = v + escape(u) + ';';
						}
					}

					if (c != "") {
						csuu.createCookie('captLinks', c, {path:'/',domain:csbc.cookie.domain,duration:'s'});
					}
				},

				allTags: function(x,x1,y,z) {
					/*
						x:  Tag type
						x1: Alt Match pattern
						y:  Match pattern
						z: 
		  	  				1 - CDDS
		  	  				2 - graceIncr
		  	  				3 - captLinks
					*/

					if (x == 'class') {
						if (/msie (8|7)/i.test(navigator.userAgent)) { return; }
						var aTags = document.getElementsByClassName(x1);
					}
					else {
						var aTags = document.getElementsByTagName(x);
					}

					var sr_r = new RegExp(y,'i');
					for (var i = 0; i < aTags.length; i++) {
				 		if ( (x == 'a' && sr_r.test(aTags[i].href)) || (x == 'class' && sr_r.test(aTags[i].innerHTML))	) {
							if (aTags[i].addEventListener) {
								this.href = aTags[i].href;
								if (z == 1) {
									aTags[i].addEventListener('click', function(event) {
										if (sr_r.test(this.href)) {	csuu.createCookie(csbc.domainSwitch, csbc.isolateDomain(this.href), {path:'/',domain:csbc.cookie.domain,duration:'s'})	}
									}, false);
								}
								else if (z == 2) {
									aTags[i].addEventListener('click',function(event){	csuu.createCookie("graceIncr", 1, {path:'/',domain:csbc.cookie.domain,duration:'s'})	},false);
								}
								else if (z == 3 && COMSCORE.isDDInProgress()) {
									aTags[i].addEventListener('click',function(event){ COMSCORE.SiteRecruit.Broker.custom.captLinks(this.href)	},false);	
								}
							}
							else if (aTags[i].attachEvent) {								
								if (z == 1) {
									aTags[i].attachEvent('onclick', function(e) {	
										if (sr_r.test(e.srcElement)) {	csuu.createCookie(csbc.domainSwitch, e.srcElement, {path:'/',domain:csbc.cookie.domain,duration:'s'})		}
								 });
								}
								else if (z == 2) {
									aTags[i].attachEvent('onclick',function()	{	csuu.createCookie("graceIncr", 1, {path:'/',domain:csbc.cookie.domain,duration:'s'})	});
								}
								else if (z == 3 && COMSCORE.isDDInProgress()) {
									aTags[i].attachEvent('onclick',function()	{ 	COMSCORE.SiteRecruit.Broker.custom.captLinks(e.srcElement)	} );	
								}
							}
						}
 					}
				}
			};

			// Initialize graceIncr cookie
			var gIdelay = 0;
			if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr") == 1) {	gIdelay = 5000;	}
			setTimeout(function(){COMSCORE.SiteRecruit.Utils.UserPersistence.createCookie("graceIncr", 0, {path:'/',domain:csbc.cookie.domain,duration:'s'})},gIdelay);

			// ADD onclick EVENTS FOR CDDS
			setTimeout(function() { COMSCORE.SiteRecruit.Broker.custom.allTags('a','',csbc.cddsDomains,1) }, csbc.addEventDelay );
			setTimeout(function() { COMSCORE.SiteRecruit.Broker.custom.allTags('a','',csbc.graceIncr.match,2) }, csbc.addEventDelay );
			setTimeout(function() { COMSCORE.SiteRecruit.Broker.custom.allTags(csbc.graceIncr.altTag,"msame_Header_name msame_TxtTrunc",csbc.graceIncr.htmlMatch,2) }, csbc.addEventDelay );

			// CUSTOM CDDS FUNCTIONALITY TO TRACK TO MSFTSTORE
			if (document.getElementById("cartButton")) {
				var sr_id = document.getElementById("cartButton");
				if (sr_id.addEventListener) {
					sr_id.addEventListener('click',function(event){ csuu.createCookie(csbc.domainSwitch, ".microsoftstore.com", {path:'/',domain:csbc.cookie.domain,duration:'s'})	},false);
				}
				else {
					sr_id.attachEvent('onclick',function()	{	csuu.createCookie(csbc.domainSwitch, ".microsoftstore.com", {path:'/',domain:csbc.cookie.domain,duration:'s'})	});
				}
			}
		}
	}
};

//CUSTOM - CHECK FOR THE CROSS-DOMAIN COOKIE. IF PRESENT, HALT RECRUITMENT AND SET DD TRACKING COOKIE
var crossDomainInterval = window.setInterval('COMSCORE.SiteRecruit.Broker.config.crossDomainCheck()', '1000');
//END CROSS_DOMAIN DEPARTURE FUNCTIONALITY

//CUSTOM - ADD 5 SECOND DELAY ON CALLING BROKER.RUN()
if (COMSCORE.SiteRecruit.Broker.delayConfig == true)  {
	COMSCORE.SiteRecruit.Broker.config.delay = 5000;
}
window.setTimeout('COMSCORE.SiteRecruit.Broker.run()', COMSCORE.SiteRecruit.Broker.config.delay);
//END CUSTOM