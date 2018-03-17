/**
 * Lotame BCP Data Collection Call
 * This call creates more scripts that go off and make calls over to Lotame that tell Lotame the user audience
 * This call also creates a Lotame API that we will use via personal.js to pass extra values to Lotame when
 * our users use an application like Symptom Checker and provide us segmentation details.
 *
 * This runs on document ready so it won't blow up the page completely if it fails
*/
$(function(){

	// if we are on iOS or inside the webmd app, disable lotame
	// I'm not reusing the webmd.useragent code as I'm not sure exactly where ldcc.js is added
	// so I'm writing specific user agent sniffing here just in case
	if (navigator.userAgent.match(/(webmdapp)/i)) {
		webmd.debug('Lotame beacons not fired within webmd app.');
		return false;
	}

	// If we are on a secure page, we will remove lotame (new rule on 10/22/13)
	// unless we are on the member newsletter page: https://jira.webmd.net/browse/PPE-35530
	if (window.location.protocol === 'https:' && !(/webmd.com\/subscribe/.test(window.location.href))) {
		webmd.debug('Lotame beacons not fired for https pages');
		return false;
	}

	// Script needs to be loaded in this manner so as to assign the attribute cc.id='LOTCC_932' for dynamic data collection
	var cc = document.createElement('script'), visitorId;
	cc.type = 'text/javascript';
	cc.id = 'LOTCC_932';
	cc.src = '//tags.crwdcntrl.net/c/932/cc.js?ns=_cc932&autobcp=1';
	cc.onload = function() {
		/*
		 * https://jira.webmd.net/browse/PPE-12630
		 * add visitor's omniture id to the data collection call.
		 */
		visitorID = webmd.cookie.get('VisitorId');

		// pass USER ID using Advanced Lotame script tags and fire the Lotame BCP
		if (window._cc932) {
			window._cc932.add("tp","WBMD");
			window._cc932.add("tpid", visitorID);
			window._cc932.bcp();
		}
	};

	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(cc, s);

});