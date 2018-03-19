//bitly start
if (typeof (BitlyApi) == 'undefined') {
    var BitlyApi = {}; // BitlyApi namespace. You sholdn't need to access methods here. Instead, use an instance of BitlyApiClient().
}
if (typeof (BitlyCB) == 'undefined') {
    var BitlyCB = {}; // global namespace for your callback methods. Allows you to define callabacks from within other method calls.
}
BitlyApi.loadScript = function (_src) {
    var e = document.createElement('script');
    e.setAttribute('language', 'javascript');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('src', _src);
    document.body.appendChild(e);
};

BitlyApi.loadCss = function (u) {
    var e = document.createElement('link');
    e.setAttribute('type', 'text/css');
    e.setAttribute('href', u);
    e.setAttribute('rel', 'stylesheet');
    e.setAttribute('media', 'screen');
    try {
        document.getElementsByTagName('head')[0].appendChild(e);
    } catch (z) {
        document.body.appendChild(e);
    }
};

BitlyApi.call = function (method, params, callback_method_name) {
    var s = "http://api.bit.ly/" + method;
    var url_args = [];
    if (callback_method_name) {
        url_args.push("callback=" + callback_method_name);
    }

    for (var name in params) {
        url_args.push(name + "=" + encodeURIComponent(params[name]));
    }

    s += "?" + url_args.join("&");
    BitlyApi.loadScript(s);
};

var BitlyApiClient = function (login, apiKey, version) {
    this.login = login || "timedotcom";
    this.apiKey = apiKey || "R_d514a81e85b444dfbbc234f661e7c38a";
    this.version = version || "2.0.1";
};

BitlyApiClient.prototype.googleVisRequired = "This method requires the google visualization api. Please include javascript from: http://www.google.com/jsapi. More info: http://code.google.com/apis/visualization/documentation/index.html";
BitlyApiClient.prototype.availableModules = ['stats'];
BitlyApiClient.prototype.loadingModules = {};

BitlyApiClient.prototype.moduleLoaded = function (module_name, callback_method_name) {
    BitlyApiClient.prototype.loadingModules[module_name] = true;
    for (var mod in BitlyApiClient.prototype.loadingModules) {
        if (!BitlyApiClient.prototype.loadingModules[mod]) {
            return false;
        }
    }
    eval(callback_method_name + "();");
};

BitlyApiClient.prototype.loadModules = function (module_names, callback_method_name) {
    for (var i = 0; i < module_names.length; i++) {
        BitlyApiClient.prototype.loadingModules[module_names[i]] = false;
    }
    for (var i = 0; i < module_names.length; i++) {
        var name = module_names[i];
        var callback_name = "module_" + name + "_loaded";
        BitlyCB[callback_name] = function () {
            BitlyApiClient.prototype.moduleLoaded(name, callback_method_name);
        };
        var s = "http://bit.ly/app/modules/" + name + ".js?callback=BitlyCB." + callback_name;
        try {
            BitlyApi.loadScript(s);
        } catch (e) {
            BitlyClient.addPageLoadEvent(function () {
                BitlyApi.loadScript(s);
            });
        }
    }
    try {
        BitlyApi.loadCss("http://bit.ly/static/css/javascript-modules.css");
    } catch (e) {
        BitlyClient.addPageLoadEvent(function () {
            BitlyApi.loadCss("http://bit.ly/static/css/javascript-modules.css");
        });
    }
};

/*
# utils

*/
BitlyApiClient.prototype.addPageLoadEvent = function (func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        };
    }
};

BitlyApiClient.prototype.extractBitlyHash = function (bitly_url_or_hash) {
    if (bitly_url_or_hash == null) {
        return null;
    } else {
        var m = bitly_url_or_hash.match(/\/([^\/]+)$/);
        if (m) {
            return m[1];
        } else {
            return bitly_url_or_hash;
        }
    }
};

BitlyApiClient.prototype.createElement = function (element_type, attrs) {
    var el = document.createElement(element_type);
    for (var k in attrs) {
        if (k == "text") {
            el.appendChild(document.createTextNode(attrs[k]));
        } else {
            this.setAttribute(el, k, attrs[k]);
        }
    }
    return el;
};

BitlyApiClient.prototype.setAttribute = function (element, attribute_name, attribute_value) {
    if (attribute_name == "class") {
        element.setAttribute("className", attribute_value); // set both "class" and "className"
    }
    return element.setAttribute(attribute_name, attribute_value);
};

BitlyApiClient.prototype.listen = function (elem, evnt, func) {
    if (elem.addEventListener) { // W3C DOM
        elem.addEventListener(evnt, func, false);
    } else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on" + evnt, func);
        return r;
    }
};

BitlyApiClient.prototype.targ = function (e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ = e.target;
    } else if (e.srcElement) {
        targ = e.srcElement;
    }
    if (targ.nodeType == 3) { // defeat Safari bug
        targ = targ.parentNode;
    }
    return targ;
};

BitlyApiClient.prototype.toggle = function (el) {
    var e;
    if (typeof (el) == 'string') {
        e = document.getElementById(el);
        if (typeof (e) == undefined) {
            throw "toggle: No DOM element with id: " + el;
            return;
        }
    } else {
        e = el;
    }
    if (e.style.display == 'none') {
        e.style.display = '';
    } else {
        e.style.display = 'none';
    }
};

/*
# API
    
Generic API caller for more advanced API usage. Allows you to specify extra params for method calls with options. Eg, you can call the /info API and ask for a subset of data using the 'keys' param.
*/
BitlyApiClient.prototype.call = function (method, params, callback_method_name) {
    params['version'] = this.version;
    params['login'] = this.login;
    params['apiKey'] = this.apiKey;
    return BitlyApi.call(method, params, callback_method_name);
};

// shorten a long url
BitlyApiClient.prototype.shorten = function (longUrl, callback_method_name) {
    return this.call('shorten', {
        'longUrl': longUrl
    }, callback_method_name);
};

// expand a bitly url
BitlyApiClient.prototype.expand = function (shortUrl, callback_method_name) {
    return this.call('expand', {
        'shortUrl': shortUrl
    }, callback_method_name);
};

// get info about one or more bitly urls or hashes
BitlyApiClient.prototype.info = function (bitly_hash, callback_method_name) {
    var arr = bitly_hash.split(',');
    var hashes = [];
    for (var i = 0; i < arr.length && i < 1; i++) { // limit to 1 bitly_hash
        hashes.push(this.extractBitlyHash(arr[i]));
    }
    return this.call('info', {
        'hash': hashes.join(',')
    }, callback_method_name);
};

// get referrer data about a bilty url or hash
BitlyApiClient.prototype.stats = function (bitly_hash_or_url, callback_method_name) {
    bitly_hash_or_url = this.extractBitlyHash(bitly_hash_or_url);
    return this.call('stats', {
        'hash': bitly_hash_or_url
    }, callback_method_name);
};

/*
# TESTS
    
*/
BitlyApiClient.prototype.shortenTest = function () {
    this.shorten(document.location, 'shortenTestCB');
};

function shortenTestCB(data) {
    // this is how to get a result of shortening a single url
    var result;
    for (var r in data.results) {
        result = data.results[r];
        result['longUrl'] = r;
        break;
    }
    alert(result['longUrl'] + " shortened to " + result['shortUrl']);
}

BitlyApiClient.prototype.expandTest = function () {
    this.expand("http://bit.ly/3j4ir4", 'expandTestCB');
};

function expandTestCB(data) {
    // this is how to get a result of expanding a single url
    var result;
    for (var r in data.results) {
        result = data.results[r];
        result['hash'] = r;
        break;
    }
    alert(result['hash'] + " expanded to " + result['longUrl']);
}

BitlyApiClient.prototype.infoTest = function () {
    this.info("http://bit.ly/3j4ir4", 'infoTestCB');
};

function infoTestCB(data) {
    // this is how to get a doc of info call for a single url
    var doc;
    for (var r in data.results) {
        doc = data.results[r];
        break;
    }
    alert("got info for " + doc['hash'] + ". eg., longUrl is " + doc['longUrl'] + ", title is " + doc['htmlTitle']);
}

BitlyApiClient.prototype.statsTest = function () {
    this.stats("http://bit.ly/3j4ir4", 'statsTestCB');
};

function statsTestCB(data) {
    var stats = data.results;
    alert("stats for " + stats['hash'] + ". " + stats['clicks'] + " clicks");
}




/*
# INSTANTIATE CLIENT
    
*/
var BitlyClient = new BitlyApiClient();

/*
 */

//bitly end

/* jQuery elementReady plugin
 * Version 0.6
 * Copyright (C) 2007-08 Bennett McElwee.
 * Licensed under a Creative Commons Attribution-Share Alike 3.0 Unported License (http://creativecommons.org/licenses/by-sa/3.0/)
 */ (function ($) {
    var interval = null;
    var checklist = [];
    $.elementReady = function (id, fn) {
        checklist.push({
            id: id,
            fn: fn
        });
        if (!interval) {
            interval = setInterval(check, $.elementReady.interval_ms);
        }
        return this;
    };

    // Plugin settings
    $.elementReady.interval_ms = 23; // polling interval in ms

    // Private function
    function check() {
        var docReady = $.isReady; // check doc ready first; thus ensure that check is made at least once _after_ doc is ready
        for (var i = checklist.length - 1; 0 <= i; --i) {
            var el = document.getElementById(checklist[i].id);
            if ((el && (el.nextSibling || el.parentNode.nextSibling)) || docReady) {

                var fn = checklist[i].fn; // first remove from checklist, then call function
                checklist[i] = checklist[checklist.length - 1];
                checklist.pop();
                fn.apply(el, [$]);
            }
        }
        if (docReady) {
            clearInterval(interval);
            interval = null;
        }
    }

})(jQuery);


// Remove IE6 image flickering
try {
    document.execCommand('BackgroundImageCache', false, true);
} catch (error) {}


// Top Add Time News
var feedModuleFunc = function () {
    $("a.feedLinks").click(function () {
        $('<div class="border"></div>').insertBefore('ul#menu');
        $("ul#menu, div.border").slideDown({
            height: "show",
            opacity: "show"
        }, "slow");
        return false;
    });
    $("#menu").hover(function () {}, function () {
        $("ul#menu,div.border").hide({
            opacity: 1.0
        }, 4000).slideUp(800);
        return false;
    });
};
$.elementReady('feedModule', feedModuleFunc);

$(function () {
    /*
	var iframeFix = function(){
		$('iframe').each(function(){
		var $this = $(this),
				s = $this.attr('src');
				if(s){
						$this.attr('src',s+'#');
				}
		});	
	};

	
	setTimeout(iframeFix,1000);
	*/
    // Bottom Search
    //Bottom Add Time News
    $("a.feedLinks2").click(function () {
        $('<div class="border2"></div>').insertBefore('ul#menu2');
        $("ul#menu2, div.border2").slideDown({
            height: "show",
            opacity: "show"
        }, "slow");
        return false;
    });
    $("#menu2").hover(function () {}, function () {
        $("ul#menu2, div.border2").hide({
            opacity: 1.0
        }, 4000).slideUp(800);
        return false;
    });

    // New Most Popular
    (function () {
        var tb8 = $("#tabChange8");
        var tb9 = $("#tabChange9");
        var tb10 = $("#tabChange10");
        tb8.bind("click keydown keypress", function () {
            changeMultimediaTab(8);
            return false;
        });
        tb9.bind("click keydown keypress", function () {
            changeMultimediaTab(9);
            return false;
        });
        tb10.bind("click keydown keypress", function () {
            changeMultimediaTab(10);
            return false;
        });

        function changeMultimediaTab(num) {
            $("#tab8, #tab9, #tab10").attr("class", "off");
            $("#tabContent8, #tabContent9, #tabContent10").attr("class", "off");
            $("#tab" + num).attr("class", "");
            $("#tabContent" + num).attr("class", "");
        }
    })();

    // Most Popular
    $(".mpop ul > li:not(:first)").addClass("closed").find("ol").hide();
    $(".mpop h3").bind("click", function () {
        if ($(this).parent("li").hasClass("closed")) {
            $(".mpop li:has(ol:visible)").addClass("closed").find("ol").slideUp("normal");
            $(this).parent("li").removeClass("closed").find("ol").slideDown("normal");
        }
    });

    // Newsletter
    $("#nlEmail").attr("class", "nlEmailActive").val("Enter e-mail address").bind("focus", function () {
        $("#nlEmail[value='Enter e-mail address']").attr("class", "").val("");
    }).bind("blur", function () {
        $("#nlEmail[value='']").attr("class", "nlEmailActive").val("Enter e-mail address");
    });

    function nlRegister(url) {
        window.open(url, '', 'width=650,height=730,scrollbars=yes');
    }

    $("#nlForm").bind("submit", function () {
        nlRegister(this.action);
        return false;
    });

    function loadPage(timeSrc) {
        window.open('$("#newslFrm").attr("action")', 'newslPop', 'width=650,height=730,scrollbars=yes');
    }

    /*NL Registration for Photos module when email field is present*/
    $("#newslFrm").bind("submit", function () {
        return loadPage($("#newslFrm").find("input[@name='TIME_SOURCE']").val());
        return false;
    });

    /*NL Registration when only Sign Up button is present*/
    $("#newslForm").bind("submit", function () {
        newslRegister(this.action);
        return false;
    });

    /*NL Registration through Stay Connected module*/
    $("#nlStayCon").bind("click", function () {
        newslRegister(this.href);
        return false;
    });

    /* NL Popups when no email is passed */
    $("#n1").bind("click", function () {
        var nlPop = window.open('https://pages.email.time.com/newsletters/?source=header_tout', '', 'width=650,height=730,scrollbars=yes');
        $(nlPop).bind("load", function () {
            var nlPopDoc = nlPop.document;
            $(nlPopDoc).find("#closeBtn").bind("click", function () {
                nlPop.close();
            });
        });
        return false;
    });
    $("#n2").bind("click", function () {
        var nlPop = window.open('https://pages.email.time.com/newsletters/', '', 'width=650,height=730,scrollbars=yes');
        $(nlPop).bind("load", function () {
            var nlPopDoc = nlPop.document;
            $(nlPopDoc).find("#closeBtn").bind("click", function () {
                nlPop.close();
            });
        });
        return false;
    });
    $("#n3").bind("click", function () {
        var nlPop = window.open('https://pages.email.time.com/newsletters/?source=politics_tout', '', 'width=650,height=730,scrollbars=yes');
        $(nlPop).bind("load", function () {
            var nlPopDoc = nlPop.document;
            $(nlPopDoc).find("#closeBtn").bind("click", function () {
                nlPop.close();
            });
        });
        return false;
    });
    /*NL Registration when only Sign Up button is present*/
    function newslRegister(url) {
        var nlPop = window.open(url, '', 'width=650,height=730,scrollbars=yes');
        $(nlPop).bind("load", function () {
            var nlPopDoc = nlPop.document;
            $(nlPopDoc).find("#closeBtn").bind("click", function () {
                nlPop.close();
            });
            return false;
        });
    };


    $("#emailTo").bind("click", function () {
        var pageURL = escape(self.document.URL);
        var pageTitle = self.document.title;
        pageTitle = pageTitle.replace(/"/g, "");
        pageTitle = escape(pageTitle);
        pageURL = pageURL + '?artId=' + artId;
        //pageURL = pageURL+'?artId='+artId+'?contType='+contType+'?chn='+chn;
        var emailPop = window.open('http://pathfinder.com/r0/venue/partner/out?/cgi-bin/mail/mailurl2friend.cgi?path=/time/emailFriend&url=' + pageURL + '&amp;group=time&amp;title=' + pageTitle, '', 'width=675,height=630,scrollbars=yes');
        $(emailPop).bind("load", function () {
            var emailPopDoc = emailPop.document;
            $(emailPopDoc).find("#closeBtn").bind("click", function () {
                emailPop.close();
            });
        });
        return false;
    });

    // append linkedin share button js
    if ($('.linkedin-btn').length > 0) {
        $.ajax({
            url: 'http://platform.linkedin.com/in.js',
            dataType: 'script'
        });
    }

    if ($('#fb-friction-less').length > 0) {

        var liveEnv = document.domain === 'www.time.com';


        var FB_FRICTION_LESS_JS = (liveEnv ? 'http://img.timeinc.net' : 'http://v5.timeinc.net') + '/time/rd/trunk/www/web/feds/j/fb-friction-less.js?v=1';

        $.getScript(FB_FRICTION_LESS_JS, function () {
            if (!FB_FRICTION_LESS.hasFBOBJ()) {
                FB_FRICTION_LESS.loadFB();
                window.fbAsyncInit = FB_FRICTION_LESS.init;
            } else {
                FB_FRICTION_LESS.init();
            }
        });
    }


});

function isValidEmail(str) {
    var filter = /^([a-zA-Z0-9_.-/+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})$/;
    return (filter.test(str));
}

// Quigo 
function tiiQuigoSetEnabled(b) {
    _tiiQuigoEnabled = b;

}

function tiiQuigoIsEnabled() {
    if (typeof (_tiiQuigoEnabled) == "boolean") {
        return _tiiQuigoEnabled;
    }
    return true;
}

function tiiQuigoWriteAd(pid, placementId, zw, zh, ps) {
    if (tiiQuigoIsEnabled()) {
        qas_writeAd(placementId, pid, ps, zw, zh, 'ads.adsonar.com');
    }
}

function tabCloudChange(num) {
    document.getElementById("tabCloud1").className = (num <= 3) ? "on" : "";
    document.getElementById("tabCloud2").className = (num >= 4) ? "on" : "";
    document.getElementById("tabCloudContent1").className = (num == 1) ? "" : "off";
    document.getElementById("tabCloudContent2").className = (num == 2) ? "" : "off";
    document.getElementById("tabCloudContent3").className = (num == 3) ? "" : "off";
    document.getElementById("tabCloudContent4").className = (num == 4) ? "" : "off";
}

// Ad Tag Migration
var adConfig = new TiiAdConfig("3475.tim");
adConfig.setCmSitename("cm.tim");

// For Tacoda
var tcdacmd = "dt";
adConfig.setTacodaTracking(false);

// Interstitials and popups
function paramExists(param) {
    if (document.location.search.indexOf(param) > -1) return true;
    else return false;
}

//For revenue Science
adConfig.setRevSciTracking(true);
if (document.referrer.indexOf("cnn") >= 0 || document.referrer.indexOf("google") >= 0 || paramExists("partner") || paramExists("no_popup")) {
    adConfig.setPopups(false);
}


$(function () {
    //$('#digg-app').jsonpTabs();
    $("#spArchive #regularVote").click(function () {
        if ($("input[@name='choice']:checked").val()) {
            $("#recaptcha_div").show('normal');
        } else {
            alert("Please select a candidate for your vote before submitting.");
        }
    });
});
var TweetThisLink = {
    w: window,
    baseUrl: '',
    shorten: function (event) {

        event.preventDefault();
        var twitter_url = this.getAttribute('href').replace('home?status', 'intent/tweet?text'),
            times_url = twitter_url.match(/http:\/\/www\.time.*\.html\??[^ ]*/);

        if (times_url) {
            TweetThisLink.baseUrl = twitter_url;
            TweetThisLink.w = window.open();
            TweetThisLink.w.opener = null;
            BitlyClient.shorten(times_url[0], 'TweetThisLink.response');

        }
    },
    response: function (data) {
        var base_link = TweetThisLink.baseUrl.replace(/\u00a0/g, '%20');
        for (var r in data.results) {
            if (data.results[r]['shortUrl']) {
                base_link = base_link.replace(/http:\/\/www\.time.*\.html\??[^ ]*/, encodeURIComponent(data.results[r]['shortUrl']));
                TweetThisLink.w.document.location = base_link.replace(/#/g, '%23').replace(/%0D%0A/g, ' ').replace(/%0A/g, ' ').replace(/%0D/g, ' ');
            }

            break;
        }



        /*		if(navigator.userAgent.indexOf('AppleWebKit') > -1 ) {

			window.location.href = base_link;
		} else {

			window.open(base_link);

		}*/
    }
};


$.fn.extend({
    setPixel: function (options) {
        var options = options || {},
        t = options.tracker || 'emailthis',
            url = options.url || "http://pix04.revsci.net/H07710/b3/0/3/noscript.gif?D=DM_LOC%3Dhttp%253A%252F%252Fwww.time.com%253Fclick%253D",
            trim = url + jQuery.trim(t.toLowerCase());
        $(this).bind('click', function () {
            var d = new Date().getTime();
            $('<img src="' + trim + '&amp;timestamp=' + d + '" />').appendTo('body');
        });
    },
    tinyURL: function () {
        var $this = $(this),
            cUrl = $this.attr('href');
        if (!$this.attr('href')) {
            return false;
        }
        var urlBase = cUrl.slice(0, 49),
            urlExt = cUrl.slice(50),
            bLink = null,
            bty = {
                min: function (e) {
                    e.preventDefault();
                    BitlyClient.shorten(urlExt, 'bty.response');
                },
                response: function (data) {
                    var tinyUrl;
                    for (var r in data.results) {
                        bLink = data.results[r]['shortUrl'];
                        break;
                    }
                    tinyUrl = urlBase + ' ' + bLink;
                    if ($this.attr('href').indexOf('bit.ly') == -1) {
                        $this.attr('href', tinyUrl);
                    }
                }
            };
        bty.min();
    },
    setSearch: function (options) {
        var $form = $(this),
            frmId = $form.attr('id'),
            frmClass = $form.attr('class'),
            $searchList = $form.find('ul'),
            $searchBox = $form.find('input[type=text]'),
            $searchWrap = $form.parent(),
            $searchDefault = $form.find('input[type=radio]:first'),
            options = options || {},
            dTxt = options.defaultText || "SEARCH TIME.COM",
            vSrch = options.videoSearch || "http://www.time.com/time/video/search/0,32112,,00.html",
            dSrch = options.defaultSearch || "http://timeinc-search-app-prod.elasticbeanstalk.com/",
            $nVar = $form.find("input[name='N']"),
            srchStr;

        function setForm() {
            $form.attr('action', dSrch);
            $nVar.val("0");
            $searchDefault.click();
            $searchBox.val(dTxt);
            $form.bind("submit", function () {
                srchStr = $searchBox.val();
                if (srchStr == dTxt) {
                    $searchBox.val("");
                }
                return true;
            });
        }

        function init() {
            setForm();
        }
        init();
    }
});

function setSharePixels(articleTools) {
    var $storyTools = $(articleTools + ' .storyTools'),
        $socialTools = $(articleTools + ' .socialTools li a');
    $socialTools.each(function () {
        $(this).setPixel({
            tracker: 'sharethis'
        });
    });
    $storyTools.find('.email a').setPixel();
    $storyTools.find('.print a').setPixel({
        tracker: 'printthis',
        print: true
    });
}

function trackPixels() {
    $.elementReady('articleTools2Wrap', function () {
        if ($('#articleTools2Wrap').length > 0) {
            $('.articleTools2').find('.twitter a').bind('click', TweetThisLink.shorten);
        }
    });
    $.elementReady('contentTools', function () {

        setSharePixels('.articleTools');
        //		$('.articleTools').find('.twitter a').bind('click', TweetThisLink.shorten);
    });
    $.elementReady('articleFooter', function () {

        setSharePixels('.articleTools2');

        //		$('.articleTools2').find('.twitter a').bind('click', TweetThisLink.shorten);

    });

    $.elementReady('n1', function () {
        $('#n1').setPixel();
    });
    $.elementReady('n2', function () {
        $('#n2').setPixel();
    });
    $.elementReady('nl1', function () {
        $('#nl1').setPixel();
    });
    $.elementReady('nlStayCon', function () {
        $('#nlStayCon').setPixel();
    });
    $.elementReady('stayConnected', function () {
        $('.connectTwitter a, .connectFacebook a').each(function () {
            $(this).setPixel({
                tracker: 'sharethis'
            });
        });
    });

    $.elementReady('footer', function () {
        var footer = document.getElementById('footer').getElementsByTagName('div')[1].getElementsByTagName('a')[2];
        if (!footer) {
            return false;
        }
        $(footer).setPixel();
    });
    $.elementReady('shareMenu', function () {
        $(this).find('.toEmail').setPixel();
        $('#shareIt #wrap a').each(function () {
            $(this).setPixel({
                tracker: 'sharethis'
            });
        });
        $(this).find('.twitter a').bind('click', TweetThisLink.shorten);
    });
    $.elementReady('linksFooter', function () {
        $('#linksFooter').find('.newsletter a').setPixel();
    });
    $.elementReady('content', function () {
        $('.chiclets li a').each(function () {
            if ($(this).hasClass('email')) {
                $(this).setPixel();
            } else {
                $(this).setPixel({
                    tracker: 'sharethis'
                });
            }
        });
    });
}

function initSearch() {
	
	
    $.elementReady('frmSearch', function () {
        if ($('#frmSearch').length > 0) {
            $(this).setSearch();
        }
    });
    $.elementReady('frmSearch2', function () {
        if ($('#frmSearch2').length > 0) {
            $(this).setSearch();
        }

    });
    $.elementReady('frmSearchArticle', function () {
        if ($('#frmSearchArticle').length > 0) {
            $(this).setSearch();
        }
    });
}
initSearch();
//trackPixels();

function siteSearchInit() {
	$(document).ready(function() {
		var $ss = $('#site-search'),
			$ssLabel = $ss.find('label'),
			$ssInput = $('#header-search');
		
		if($ssInput.val() === '') {
			$ssLabel.show();
		}
		
		$ssInput.focus(function() {
			$ssLabel.fadeOut(200);
		});
		
		$ssInput.blur(function() {
			if($(this).val() === '') {
				$ssLabel.fadeIn(200);		
			}
		});
	});
}

	siteSearchInit();
	

if ((/nation/g).test($('meta[name="path"]').attr('content'))) {
    trackPixels();
}

(function (window, document, undefined) {
    jQuery.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && String(value) !== "[object Object]") {
            options = jQuery.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires //attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var result, decode = options.raw ? function (s) {
                return s;
            } : decodeURIComponent;
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
    };


	jQuery.cookie = function (key, value, options) {
	
		// key and at least value given, set cookie...
        if (arguments.length > 1 && String(value) !== "[object Object]") {
            options = jQuery.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires //attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var result, decode = options.raw ? function (s) {
                return s;
            } : decodeURIComponent;
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
    };

    window.LOGINBAR = (function () {
        var paidContentUrl = $('meta[name = "turl"]').attr('content') || ($('meta[name = "paid-content-url"]').attr('content') ? 'http://' + document.domain + $('meta[name = "paid-content-url"]').attr('content') : undefined),
            turl = paidContentUrl,
			isStage = !! document.domain.match('pw-stage.time.com'),
            logoutUrl = isStage ? 'https://qa-auth.time.com/logout.php' : 'https://auth.time.com/logout.php',
			allAccessDiv = '<div id="allAccess"><p class="constrain">You are logged into TIME magazine <em>ALL</em> ACCESS <a href="' + logoutUrl + '?turl=' + window.location + '">Log Out</a></p></div>',
            rurl = $('meta[name = "rurl"]').attr('content') || document.location.href + '#paid-wall',
            hasPaidContentUrl = paidContentUrl !== undefined,
            TimeCookie = $.cookie('TimeSub') || null,
            isLoggedIn = TimeCookie !== null,
            TimeOpenHouseCookie = $.cookie('TimeCpgn') || null,
            isTOC = $('meta[name = "magazine"]').attr('content') === 'toc',
            hasPromoOptIn = TimeOpenHouseCookie !== null,
            isOlderFF = $.browser.mozilla && parseFloat($.browser.version) < 4,
            errorCode = $.cookie('time-status') || null,
            TimeVisit = $.cookie('time_visit') || null,
            isFreqCapped = TimeVisit !== null,
			$html = $('html'),
            setFreqCookie = function () {
                $.cookie('time_visit', 'yes', { expires: 1, path: '/', domain: '.time.com' });
            },
           	deleteErrorCookie = function () {
                $.cookie('time-status', null, {
                    path: '/',
                    domain: '.time.com'
                });
            },
            gotToPaidContent = function () {
                window.location = paidContentUrl;
            },
			renderAllAccessDiv = function () {
                $(function () {
                    $('#site-header').prepend(allAccessDiv);
                });
            };

        return {
            paidContentUrl: paidContentUrl,
            isLoggedIn: isLoggedIn,
            isFreqCapped: isFreqCapped,
            init: function () {
				if (isLoggedIn) {
                    if (hasPaidContentUrl && !isTOC) {
                        gotToPaidContent();
                    } else {
                        renderAllAccessDiv();
                    }
                } else if (hasPromoOptIn) {
                    if (hasPaidContentUrl && !isTOC) {
                        gotToPaidContent();
                    } else {
                        renderAllAccessPromoDiv();
                    }

                }
                if (!isFreqCapped) {
                    setFreqCookie();
                } 
             }
        };

    })();
    window.LOGINBAR.init();

}(this, this.document));

/* connect-tools */
$('.second-tier-social-tools h4').live('click', function () {
    $(this).parent().toggleClass('open').find('ul').slideToggle();
});
/* connect-tools end*/