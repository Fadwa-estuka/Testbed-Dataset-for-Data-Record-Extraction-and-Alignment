/* Updated 9/16/16 PageFair Omniture Adjustments ML */
/* Previously updated 9/12/16 Elvis Adding PageFair Pixel and Omniture Integration */

var tcArray, tcSliceG; //the letter after tcSlice is an abbreviated vendor name in case we need more than one.

if ($.cookie('gab') != null) { // Check for Ad-block cookie + set variable for initial Pageview call if existing
	if (typeof window.s_context != 'object') {
		window.s_context = {};
	}
	if ($.cookie('gab') == '1') {
		window.s_context['wb.adblocker'] = 'ab1';
	}
	else if ($.cookie('gab') == '0') {
		window.s_context['wb.adblocker'] = 'ab0';
	}
}

$(function() {
    // This takes the tactics string from DFPTargetKeys and slices the first 20 items out of it for the Google Retargeting pixel in the footer.
    if (typeof DFPTargetKeys !== "undefined") {
        tcArray = DFPTargetKeys.userSegVars.tc.split(",");
        tcSliceG = tcArray.slice(0, 19);
    } else {
        tcSliceG = null;
    }

    // load Experian Match Back Pixel only once per session
    if (!$.cookie("expMatchBkPxl")) {
        $.cookie("expMatchBkPxl", "true", {domain: '', path: ''});
        $("body").append('<img height="1" width="1" src="//d.turn.com/r/dd/id/L21rdC84MTYvY2lkLzI4NTg2NTM1L3QvMg/kv/profession=' + s_user_group + '">');
    }

    //pagefair code - Enables adblock detection and measurement
    function async_load(script_url){
        var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
        var s = document.createElement('script'); s.src = protocol + script_url;
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
    bm_website_code = 'DCA5BC05D88E412E';
    jQuery(document).ready(function(){async_load('asset.pagefair.com/measure.min.js')});
    jQuery(document).ready(function(){async_load('asset.pagefair.net/ads.min.js')});
    
    window.pf_notify = function (status) {

        // don't execute this inside an iframe
        if (window.top !== window.self) {
            return false;
        }
		
		try {
			if (DFPTargetKeys.reqHeaders.device == 'MOBILE' || DFPTargetKeys.reqHeaders.device == 'IPAD') {
				return false;
			}
		}
		catch(e) {
				console.log(e);
		}

        if (status) { // if ad-blocker is in use
            if (!$.cookie('gab')) { // If cookie was never set, AND ad-blocker turned on
                // set context variable when adblock is detected.
                window.wmdSetContext("wb.adblocker", "ab1");
                // add new context variable to following ad-hoc/module call
                window.addLinkTrackVars('wb.adblocker');
                // make ad-hoc call to record adblock usage for "one-hit-wonder" visitors
                window.wmdPageLink('pagefair');
                // remove new context variable for all subsequent ad-hoc/module calls
                window.remLinkTrackVars('wb.adblocker');

            }
            if ($.cookie('gab') !== '1') {
                // omniture code will check this cookie to determine use of adblock
                $.cookie("gab", 1, {path: '/', expires: 365});
            }
        } else {
            if ($.cookie('gab') !== '0') {
                $.cookie("gab", 0, {path: '/', expires: 365});
            }
        }
    };

});
