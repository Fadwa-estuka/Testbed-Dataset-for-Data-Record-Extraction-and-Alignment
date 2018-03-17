/* repo: SFE2.0/HEAD@65a1308 - Package Version: 0.2.0 - 2017-01-12 05:32 pm - User:  */
'use strict';

! function(a, b, c, d, e, f) {
    a[d] = a[d] || function() {
        (a[d].q = a[d].q || []).push(arguments)
    }, a[d].t = 1 * new Date, e = b.createElement(c), f = b.getElementsByTagName(c)[0], e.async = 1, e.src = "//www.google.com/adsense/search/async-ads.js", f.parentNode.insertBefore(e, f)
}(window, document, "script", "_googCsa");


webmd.object.set('webmd.sfe.google.adsense');
webmd.sfe.google.adsense = {
    getLocationUrl: function() {
        return window.location.href;
    },
    getPageOptions: function(searchQuery, isDesktop) {
        return {
            "pageOptions": {
                "adtest": location.host === "www.webmd.com" ? "off" : "on",
                "colorTitleLink": "#006699",
                "colorDomainLink": "#006699",
                "colorBackground": navigator.appVersion.indexOf("Win") !== -1 ? "#FFF8E7" : "#FDF6E5",
                "detailedAttribution": !1,
                "fontSizeTitle": 14,
                "hl": "en",
                "linkTarget": "_blank",
                "noTitleUnderline": !0,
                "pubId": "partner-webmd_core",
                "query": unescape(searchQuery[1]),
                "siteLinks": !1,
                "sellerRatings": !0
            },
            "adblocktop": {
                "container": "adContainer-top",
                "channel": "webmd_top_ad2",
                "lines": 3,
                "longerHeadlines": !0,
                "number": isDesktop === false ? 1 : 3
            },
            "adblockbottom": {
                "container": "adContainer-bottom",
                "lines": 3,
                "channel": "webmd_bottom_ad2",
                "longerHeadlines": !0,
                "number": isDesktop === false ? 2 : 3,
            }
        };
    },
    initialize: function() {
        var locationurl = this.getLocationUrl(),
            searchQuery = locationurl.match('query=(.*)&'),
            isDesktop = webmd.useragent.getType() === 'desktop',
            options = null;
        if (searchQuery === null) {
            searchQuery = locationurl.match('query=(.*)$');
        }
        if (searchQuery && searchQuery !== null && searchQuery[1]) {
            options = this.getPageOptions(searchQuery, isDesktop);
            if ($("#adContainer-top").length > 0 || $("#adContainer-bottom").length > 0) {
                _googCsa('ads', options.pageOptions, options.adblocktop, options.adblockbottom);
            }

        }
    }
};
$(document).ready(function() {
    webmd.sfe.google.adsense.initialize();
});
