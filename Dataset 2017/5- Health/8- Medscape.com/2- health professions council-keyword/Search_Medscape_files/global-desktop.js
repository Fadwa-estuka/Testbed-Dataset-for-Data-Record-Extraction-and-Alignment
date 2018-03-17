/* ******************************************************
 // Last Updated 11/30/16 by ML - PPE-85046
 // Last Updated 9/14/16 by sc
 // Last Updated 8/12/16 by JS
 // Last Updated 7/12/16 by ML - Remove dupe 'searchCp' function - PPE-58872
 ****************************************************** */
/* Set Vars For Moving Layers */
var theTop = 70;
var old = theTop;
var headerh = 0;
var windowhost = "http://" + (window.location.host);
var trackurl;
var locale = "us";

/* For scroll header transform */
$(window).scroll(function() {});




/*Header Dropdown Function*/
$(document).ready(function() {

	//Adding the slideshow byline
	$('#imgCollections .byline').html('Slideshow');

    $(".is-www .header-specialty-menu-link ").eq(-5).css("margin-top","3rem");
    $(".is-cme .header-specialty-menu-link ").eq(-4).css("margin-top","3rem");

	//add tracking to slideshow list items on reference homepage
    if ($('.medscape_ref').length != 0 && $('.homestar').length != 0) {
		$('#imgCollections .bucketContent ul li').each(function(index) {
			$(this).find('a').attr("onclick","wmdTrack('slide_" + (index+1) + "')");
		});

		$('#featured .bucketContent ul.listLeft li').each(function(index) {
			if (!$(this).hasClass('brandAlert')) {
				$(this).find('a').attr("onclick","wmdTrack('feat_" + (index+1) + "')");
			}
		});
		$('#featured .bucketContent ul.listRight li').each(function(index) {
			if (!$(this).hasClass('brandAlert')) {
				$(this).find('a').attr("onclick","wmdTrack('feat_" + (index+3) + "')");
			}
		});
	};

    var links = window.document.getElementsByTagName('link');
    $(links).each(function() {
        if ($(this).attr('rel') == "canonical") {
            trackurl = $(this).attr('href');
        }
    });

    addBrandAlert();

    if (navigator.userAgent.match(/msie 8.0/i)) {
        $("body").addClass('isIE8');
    }
    //code for backwards compatibility
    $('#rightheaderlinks').bind('click', function() {
        $('#headerrightlinkdd').removeClass('hidesetingdd');
        $('#headerrightlinkdd').addClass('showsetingdd');
    });
    $('#rightheaderlinks').bind('mouseover', function() {
        $('#headerrightlinkdd').removeClass('hidesetingdd');
        $('#headerrightlinkdd').addClass('showsetingdd');
    });
    $('#rightheaderlinks').bind('mouseout', function() {
        $('#headerrightlinkdd').removeClass('showsetingdd');
        $('#headerrightlinkdd').addClass('hidesetingdd');
    });


    $('.whiteout-header-dropdown, .header-specialty-close-button').bind('click', function() {
        if($("body").hasClass("dropdown-view")) {
            $("body").removeClass("dropdown-view");
            $('.header-specialty-menu').removeClass('is-expanded');
			$('.header-specialty-toggle').find('.sp-arrow').removeClass('is-rotated');
        } else {
            $("body").addClass("dropdown-view")
        }
       // $('#specialtyDropDown').show();
    });
    $('.header-specialty-toggle').bind('click', function() {
        if($("body").hasClass("dropdown-view")) {
            $("body").removeClass("dropdown-view");
        } else {
            $("body").addClass("dropdown-view")
        }
        // $('#specialtyDropDown').show();
    });

    $('#currentSpecialty, #headertopright .btn-close').bind('click', function() {
        if($("body").hasClass("dropdown-view")) {
            $("body").removeClass("dropdown-view")
        } else {
            $("body").addClass("dropdown-view")
        }
        // $('#specialtyDropDown').show();
    });


    $('#currentSpecialty, #specialtyDropDown').bind('mouseout', function() {
     //   $('#specialtyDropDown').hide();
    });
    /* View Pub Hack For Right Rial Links */
    if (document.getElementById('viewpub_publisher')) {
        var vp_pub_a = $('#pubintro a#viewpub_publisher').attr('href');
        var vp_pub_txt = $('#pubintro a#viewpub_publisher').html();
        $('#journalnav ul:nth-child(2)').append('<li><a href="' + vp_pub_a + '">' + vp_pub_txt + '</a></li>');
    }
    if (document.getElementById('viewpub_subscribe')) {
        var vp_scribe_a = $('#pubintro a#viewpub_subscribe').attr('href');
        var vp_scribe_txt = $('#pubintro a#viewpub_subscribe').html();
        $('#journalnav ul:nth-child(2)').append('<li><a href="' + vp_scribe_a + '">' + vp_scribe_txt + '</a></li>');
    }
    if (document.getElementById('viewpub_submit')) {
        var vp_sub_a = $('#pubintro a#viewpub_submit').attr('href');
        var vp_sub_txt = $('#pubintro a#viewpub_submit').html();
        $('#journalnav ul:nth-child(2)').append('<li><a href="' + vp_sub_a + '">' + vp_sub_txt + '</a></li>');
    }


    //    if (!$.cookie("todaylayershow")) {
    //        setTimeout(function(){
    //            if($("#maincolboxdrugdbheader").length!=1  && $("#whiteoutlayer").length!=1 && $("#layerAd1").length!=1 && $("#layerAd2").length!=1 && $("#nDlayer_modal").length!=1) {
    //                $("#todaylayer").show();
    //                var expDate=new Date();
    //                expDate.setFullYear(2030,0,1);
    //                $.cookie("todaylayershow", "false", {domain: '.medscape.com', expires: expDate, path: '/'});
    //                $('body').bind('click').click(function(event) {
    //                    $("#todaylayer").hide();
    //                    //	return false;
    //                });
    //            }
    //        },1000)
    //    }
    //Quick temporary fix to remove ads anytime a URL has "medline" in it.
    // if ($('link[rel=canonical]').attr("href")) {
    //                 var con_part = window.location.href.split('/');
    //                 var medcheck = con_part[3];
    //                 if (medcheck == "medline") {
    // 							$("body > *").each(function () {
    // 			if ($(this).hasClass('prWrap')) {
    // 				$(this).remove();
    // 			}
    // 		});

    //                                 $('#bodypadding').css('margin-top', '10px');
    //                                 $('#adtagheader').hide();
    //                                 $('#adtagfooter').hide();
    //                                 $('#textAd1').hide();
    //                                 $('#textAd2').hide();
    //                                 $('#sponsorad').hide();
    //                                 $('.rightcolad').each(function() {$(this).hide();});
    //                                 $('.mobile_adlabelleft').each(function() {$(this).hide();});
    //                 }
    // }

    /* make the whole area of div#layer2 clickable */
    $("body").on('click', "#layerAd2 .adContent", function(e) {
        window.open($(this).find(".adTitle a").attr("href"));
    });

    /* avoid propagating the event to prevent div#layer2 click event from being called */
    $("body").on('click', "#layerAd2 .adContent a", function(e) {
        e.stopPropagation();
    });

    // PPE-43892 - Fix All text layer ads broken in iPad/Safari browser view
    var ua = navigator.userAgent.toLowerCase();
    var check = function(r) { return r.test(ua); };
    var isChrome = check(/chrome/);
    var isSafari = !isChrome && check(/safari/);
    if(isSafari) {
        var interval = setInterval(function(){
            if($("#layerAd2").length > 0) {
                var AdNode = document.getElementById("layerAd2").cloneNode(true);
                $("#layerAd2").remove();
                window.document.body.appendChild(AdNode);
                clearInterval(interval);
            } // end if
        }, 500);

        // stop checking if the parent window is loaded
        $(window).load(function(){
            clearInterval(interval);
        });
    }
});
/* Global Ad Refreshing Script */
/* medscape.core.js $Revision: 1916 $ */
this.medscape = {
    p: {},
    m: {},
    load: function(b, a) {
        return $.xLazyLoader(b, a)
    },
    substitute: function(a, b) {
        return a.replace(/\{([^{}]*)\}/g, function(d, c) {
            var e = b[c];
            return typeof e === "string" || typeof e === "number" ? e : d
        })
    },
    htmlEncode: function(a) {
        return a.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;")
    },
    openWindow: function(d, c) {
        var h, g, b, e, a;
        if (!c) {
            c = {}
        }
        h = {
            name: "",
            focus: true
        };
        if (c.standard) {
            h = $.extend(h, {
                location: 1,
                menubar: 1,
                resizable: 1,
                scrollbars: 1,
                status: 1,
                toolbar: 1
            })
        }
        c = $.extend(h, c);
        e = {
            name: 1,
            focus: 1,
            standard: 1
        };
        b = [];
        for (g in c) {
            if (c.hasOwnProperty(g)) {
                if (e[g]) {
                    continue
                }
                b.push(g + "=" + c[g])
            }
        }
        a = window.open(d, c.name, b.join(","));
        if (c.focus && a) {
            a.focus()
        }
        return a
    },
    object: (function() {
        function a() {}
        return function(d, c) {
            a.prototype = d;
            var b = new a();
            if (c) {
                $.extend(b, c)
            }
            return b
        }
    })()
};
$(function() {
    window.document.write = function(a) {
        throw ("INVALID document.write: " + a)
    }
});

/* refreshes the banner and right side ads*/
medscape.ads = {

    // Object to contain ad server URL parameters
    params: {},


    init: function() {
        var re = new RegExp('(.*/)(.*)');
        var paramsObj = {};
        // Find real ad modules

        $("[id*='ad1']").each(function() {
            splitParams(this, paramsObj);
        });

        // Find interactive ad modules
        $.each(medscape.ads.refresh.defaults.src, function() {
            splitParams(this, paramsObj);
        });

        function splitParams(adframe, paramsObj) {
            var fullParams, paramsArray, i, nvSplit, name, value;
            var adsurl = $(adframe).attr("src");
            var m = re.exec(adsurl);
            if (m !== null) {
                fullParams = m[2] === undefined ? "" : m[2];
            }
            if (fullParams) {
                fullParams = fullParams.replace(/amp;/g, ""); // Clean up messy &amp; parameters in the fullParams string
                paramsArray = fullParams.split('&');
                for (i = 0; i < paramsArray.length; i++) {
                    nvSplit = paramsArray[i].split('=');
                    name = decodeURIComponent(nvSplit[0]);
                    value = decodeURIComponent(nvSplit[1]);
                    value = value.replace(/\//g, "%2f");
                    // If the current param is not the pos value, or pos doesnt exist in the medscape.ads.params object
                    if (name != "pos" || !(paramsObj[name])) {
                        // set current param name-value pair
                        paramsObj[name] = value;
                        // If the current param is the pos value and pos already has a value in the medscape.ads.params object
                    } else {
                        // Add current pos value to comma-delimited list of pos values
                        paramsObj[name] = paramsObj[name] + "," + value;
                    }
                }
            }
            return true;
        }

        medscape.ads.params = paramsObj;
    },

    refresh: function(options) {

        // Set default options, and let passed-in options override them
        var o = $.extend({}, medscape.ads.refresh.defaults, options);

        //  medscape.ads.segnum set elsewhere, if needed, or default to 0
        var transTileId = Math.round(99999999 * Math.random());

        // getting the date, getting the seconds from epoch, slicing off the first two characters as we only want 11 here
        var timestamp = new Date().getTime().toString().slice(2);

        // making an 8 digit random number
        var randomNumber = Math.random().toString().substr(2, 8);

        // set the global variable to the 19 digit page view id
        var s_pageview_id = timestamp + randomNumber;

        // Grab the top divs for all possible ad elements on the page
        $(o.selector).each(function() {
            if ($(this).children().size() > 0) {
                var ad, src;
                var adifilabelid = $(this).attr('id');
                $('#' + adifilabelid + ' .adlabelifi').removeClass('adlabelifi'); //remove 'Information from industry label' //
                $('#' + adifilabelid + ' .adlabelblank').removeClass('adlabelblank'); //remove blank label //

                // Remove all children of the original medscape iframe and possible expandable divs
                var adFrame = $(this).children("[id*='ad1']");
                $(this).children("*").not("[id*='ad1'], div[class*='adlabel']").remove();
                $(this).children('[class*="adlabel"]').children("*").not("[id*='ad1']").remove();
                adFrame.empty();

                // Look for the existence of an ad element
                ad = $(this).find("[id]");

                // If no ad element is found in the current selector, it may be an interactive ad module
                if (!ad[0]) {

                    // Look in the object to find any properties of the o.src object that match the current id
                    var adTag = o.src[$(this).attr("id")];
                    // Grab the src attribute of adTag iframe for manipulation
                    src = $(adTag).attr("src");
                    // If they're found, then it's an interactive ad module that needs an initial ad load
                    if (src) {
                        // Clean up messy &amp; parameters in the http query string
                        src = src.replace(/amp;/g, "");


                        src = replaceAdParam(src, "transactionid", transTileId);
                        src = replaceAdParam(src, "tile", transTileId);
                        src = replaceAdParam(src, "pvid", s_pageview_id);
                        src = replaceAdParam(src, "ep", "0");

                        // replace and/or add params & filter for initial ad load
                        $.each(o.params, function(i, val) {
                            // Replace the param value if it exists
                            src = replaceAdParam(src, i, val);
                            // Add the param if it's not already there
                            if (src.indexOf(i + "%3D") < 0) {
                                src = src + "&" + i + "%3D" + val;
                            }
                        });

                        if ($.isFunction(o.filter)) {
                            src = o.filter(src);
                        }

                        // Update the adTag iframe's src value
                        $(adTag).attr("src", src);

                        // Laboriously convert the entire tag to a string, because IE sucks at createElement for iframes
                        adTag = '<iframe id="' + $(adTag).attr("id") + '" width="' + $(adTag).attr("width") + '" height="' + $(adTag).attr("height") + '" src="' + $(adTag).attr("src") + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style=""></iframe>';
                        // Append the tag to the placeholder div
                        $(this).children("div.ad_placeholder").append(adTag);
                        return;
                    } else {
                        // no ad found, and no Interactive ad module vars so remove ad frame

                        $(this).parent().remove();

                        return;
                    }
                } else {

                    src = ad.attr("src");

                    // ad element was found, but it has no src. Danger, Will Robinson! Dump out of ad refresh
                    if (!src) {
                        return;
                    }


                    src = replaceAdParam(src, "tile", transTileId);
                    src = replaceAdParam(src, "transactionid", transTileId);
                    src = replaceAdParam(src, "pvid", s_pageview_id);
                    src = replaceAdParam(src, "ep", "0");

                    // replace and/or add params & filter
                    $.each(o.params, function(i, val) {
                        src = replaceAdParam(src, i, val);


                        // Add the param if it's not already there
                        if (src.indexOf(i + "%3D") < 0) {
                            src = src + "&" + i + "%3D" + val;
                        }
                    });

                    if ($.isFunction(o.filter)) {
                        src = o.filter(src);
                    }

                    // clear the style tag on the iframe in case 3rd part people have added inline styles to it
                    $(ad).attr('style', '');

                    // Update the iframe
                    if (ad[0].contentWindow) {
                        // To avoid adding to the page history and messing up the back button,
                        // use location.replace instead of changing the src of the iframe
                        ad[0].contentWindow.location.replace(src);
                    } else {
                        ad.attr({
                            src: src
                        });
                    }
                }
            }
        });


        function replaceAdParam(srcStr, pName, pValue) {
            var paramRegEx = new RegExp("\\b" + pName + "%3D[^&#\"']*");
            srcStr = srcStr.replace(paramRegEx, pName + "%3D" + pValue);
            return srcStr;
        }

    }

};

/* Blank defaults reset on a product level page, exmaple news article or ref article */
medscape.ads.refresh.defaults = {
    selector: "",
    src: {},
    params: {}
};

$(function() {
    medscape.ads.init();
});

/* /Header Dropdown Function*/
function hideTodayLayer() {
    $("#todaylayer").hide();
}

/* Random List of li */
function showuniquelist(thelist, numselect) {
    var listitems = new Array();
    listitems = document.getElementById(thelist).getElementsByTagName('li');
    var totallist = listitems.length;
    var numofitems = listitems.length - 1;

    if (totallist <= numselect) {} else {
        var Count = 0;
        var NumUnique = numselect;
        var Current = new Array(NumUnique);
        for (i = 0; Count < NumUnique; Count++) {
            var Found = false;
            var rndValue = get_random(numofitems);
            for (j = 0; j < Current.length; j++) {
                if (Current[j] == rndValue) {
                    Found = true;
                    break;
                }
            }
            if (Found) {
                Count--;
            } else {
                Current[Count] = rndValue;
            }
        }
        for (i = 0; i < listitems.length; i++) {
            listitems[i].style.display = "none";
        }
        for (yi = 0; yi <= numselect; yi++) {
            listitems[yi].style.display = "block";
        }
    }
}

/* NEW Random List function allows for any child elements in a parent to be randomized and limited */
$.fn.randomli = function(listEl,numDis){
    var $allChild = listEl ? $(this).find(listEl) : $(this).children(),
        $theParent = $allChild.parent();
    $theParent.each(function(){
        $(this).children(listEl).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).detach().appendTo(this);
    });
    $(this).find($(this).children()).slice( numDis ).detach();
    return this;
};


/* Utility Functions */
function get_random(numofitems) {
    var MaxValue = numofitems;
    var ranNum = Math.round(MaxValue * Math.random());
    return ranNum;
}

function getElementClass(element) {
    if (element.getAttribute("class")) {
        return element.getAttribute("class");
    } else if (element.getAttribute("className")) {
        return element.getAttribute("className");
    }
}

function setElementClass(element, classValue) {
    if (element.setAttribute("class", classValue)) {
        element.setAttribute("class", classValue);
    } else if (element.setAttribute("className", classValue)) {
        element.setAttribute("className", classValue);
    }
}

function OpenPopup(newLoc, newHeight, newWidth) {
    newWin = open("", newLoc, "scrollbars=yes,resizable=yes,height=" + newHeight + ",width=" + newWidth);
}

function resizeWin(newLoc, newHeight, newWidth) {
    newWin = open("", newLoc, "scrollbars=yes,resizable=yes,height=" + newHeight + ",width=" + newWidth);
}

/* Utility Function Move Layers */
function movelayers(num) {
    if (window.innerHeight) {
        pos = window.pageYOffset
    } else if (document.documentElement && document.documentElement.scrollTop) {
        pos = document.documentElement.scrollTop
    } else if (document.body) {
        pos = document.body.scrollTop
    }

    if (pos < theTop) {
        pos = theTop;
    } else {
        pos += 50;
    }

    if (pos == old) {
        document.getElementById(num).style.top = (pos + 'px');
    } else {
        old = pos;
        movelayers(num);
    }
}



/* Layer and Src iframe loader */
function loadidetailiframe(idetailurl, detailiframewidth, detailiframeheight, detailiframetop, detailiframeleft) {
    var newDiv2 = parent.document.createElement("div");
    newDiv2.setAttribute("id", "whiteoutlayer");
    newDiv2.innerHTML = " ";
    var my_div2 = parent.document.getElementById("bodypadding");
    parent.document.body.insertBefore(newDiv2, my_div2);
    var framecover = document.getElementById("idetailiframewrapper");
    setElementClass(framecover, 'active');
    parent.document.getElementById("idetailiframe").src = idetailurl;
    parent.document.getElementById("idetailwinbg").style.position = "absolute";
    parent.document.getElementById("idetailwinbg").style.zIndex = 2000;
    parent.document.location = "#";
    var add24px = 24;
    var add48px = 48;
    var idetailwinbgwidth = (detailiframewidth * 1) + (add24px * 1);
    var idetailwinbgheight = (detailiframeheight * 1) + (add48px * 1);
    parent.document.getElementById("idetailwinbg").style.width = (idetailwinbgwidth + 'px');
    parent.document.getElementById("idetailwinbg").style.height = (idetailwinbgheight + 'px');
    parent.document.getElementById("idetailwinbg").style.top = detailiframetop;
    parent.document.getElementById("idetailwinbg").style.left = detailiframeleft;
    parent.document.getElementById("idetailiframe").style.width = (detailiframewidth + 'px');
    parent.document.getElementById("idetailiframe").style.height = (detailiframeheight + 'px');
}

function removeidetailiframe() {
    if ((window.pixnumtrack) && (pixnumtrack <= 6)) {
        var oIframe = document.getElementById("idetailiframe");
        var oDoc = oIframe.contentWindow || oIframe.contentDocument;
        if (oDoc.document) {
            oDoc = oDoc.document;
        }
        var timespentpxval = oDoc.getElementById("pxcntnum").value;
        var rornval = oDoc.getElementById("rorn").value;
        var cnttrack = "http://bi.medscape.com/pi/1x1/bi_action_tracking.gif?company=0&department=0&series=0&promo_act=0&action=" + rornval + "_CLOSE&action_id=" + timespentpxval + "&ccid=&eguid=&is_test=0&" + new Date().getTime();
        preload_image = new Image(1, 1);
        preload_image.src = cnttrack;
    }
    if ($('#rollover_ad').length > 0) {
        setTimeout("adRollTime=0", 500);
        var rotrack = "http://bi.medscape.com/pi/1x1/bi_action_tracking.gif?company=0&department=0&series=0&promo_act=0&action=ro-to-play&action_id=ro-close&ccid=&eguid=&is_test=&nocache=" + new Date().getTime();
        preload_image = new Image(1, 1);
        preload_image.src = rotrack;
    }
    parent.document.getElementById("idetailiframe").src = "http://www.medscape.com/files/public/blank.html";
    var framecover = document.getElementById("idetailiframewrapper");
    setElementClass(framecover, 'inactive');
    if (document.getElementById("whiteoutlayer")) {
        var element = document.getElementById("whiteoutlayer");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById("whiteoutlayer").id = "";
    }
}

/* Remove OSUN Notice */
function removeosun(state) {
        if (document.getElementById) {
            var osunid = document.getElementById("medlayerad");
            setElementClass(osunid, state);
        }
    }
    /* NEW Remove OSUN Notice (generic to all new layer ads) */
function removeosun2(state, layid) {
    if (document.getElementById) {
        var osunid = document.getElementById(layid);
        setElementClass(osunid, state);
    }
}

function togglesearchdbtext(searchdb, value) {
    if (document.getElementById) {
        var swapsearchdb = searchdb;
        changeSeachDB('searchdbtext', swapsearchdb);
        $("#searchdbvalue").val(value);
        togglesearchdb('inactive');
        $("#searchInput").focus();
    }
}

function togglesearchdb(state) {
    if (state == "active") {
        $('#searchdblayer').show();
    } else if (state == "inactive") {
        $('#searchdblayer').hide();
    }
}

function changeSeachDB(id, str) {
    if (document.getElementById(id)) {
        document.getElementById(id).innerHTML = str;
    }
}

function addBrandAlert() {
    var locDir;
    if (locale == "us") {
        locDir = '';
    } else if (locale == "de") {
        locDir = 'de/';
    } else if (locale == "es") {
        locDir = 'es/';
    } else if (locale == "fr") {
        locDir = 'fr/';
    } else if (locale == "pt") {
        locDir = 'pt/';
    } else {
        locDir = '';
    }

    if (($(".homestar").length != 0 || $("#home-news-content-articles").length != 0) && $(".medscape_today").length == 0 && $("#cardiology").length == 0 && $('.medscape_ref').length == 0) { // News homepages
        if (window.location.hostname.indexOf('.org') === -1) {

            var url = windowhost + "/noscan/public/brandalert/"+locDir+"merge-desktop-l.json" //left col
            $.ajax({
                url: url,
                type: "GET"
            }).done(function(data) {
                if (data.length != 0) {
                    var cpEventTrack;
					var hlImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
                    if (data[0].activityId != "") {
                        cpEventTrack = '<script type="text/javascript">cpHlPush({"tcid": "' + data[0].tcid + '", "activityId": "' + data[0].activityId + '", "pvId": "' + s_pageview_id + '", "impId": "' + hlImpId + '"});</script>';
                    } else {
                        cpEventTrack = '';
                    }
                    if (data[0].hasOwnProperty("tiarray")) {
                        var fHeadti = data[0].tiarray[Math.round(Math.random() * (data[0].tiarray.length - 1))]
                    } else {
                        var fHeadti = data[0].ti;
                    }
                    if (data[0].hasOwnProperty("pub")) {
                        if (data[0]["pub"] !== "") {
                            var fPubLine = data[0]["pub"]
                        } else {
                            var fPubLine = data[0].pu
                        }
                    } else {
                        var fPubLine = data[0].pu
                    }
                    if (data[0].uri.indexOf('?') !== -1) {
                        var queryamp = "&";
                    } else { var queryamp = "?"; }
                    var bavpurl = data[0].uri.replace("browser", "headline");
					var qaDomain = '';
					if (typeof getDomain != 'undefined') {
						qaDomain = getDomain('profreg');
					}
                    if (data[0].dom.indexOf('wp') !== -1) {
                        if (data[0].dom.indexOf('staging') !== -1) {
                            var vpDom = "www.staging." + qaDomain + "medscape.com";
                        } else {
                            var vpDom = "www." + qaDomain + "medscape.com";
                        }
                    } else {
						if (data[0].dom.indexOf('.qa') == -1) {
							var vpDom = data[0].dom.replace(/(staging\.)?medscape/, '$1' + qaDomain + 'medscape');
						} else {
							var vpDom = data[0].dom;
						}
                    }
                    if (locale == "us") {
                        $('#middle .bucketL ul li:eq(0)').after('<li style="padding-top:0"></li><li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_left"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp +'src=desktop_hp_left&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">'+data[0].jc+'</span></div><div class="spacer">&nbsp;</div></a></li>');
                    } else {
                        $('#home-news-content-articles .bucketContent .split ul.colLeft li:eq(0)').after('<li style="padding-top:0"></li><li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_left"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp +'src=desktop_hp_left&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">'+data[0].jc+'</span></div><div class="spacer">&nbsp;</div></a></li>');
                    }
                    if (data.length == 2) {
                        var cpEventTrack;
						var hlImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
                        if (data[1].activityId != "") {
                            cpEventTrack = '<script type="text/javascript">cpHlPush({"tcid": "' + data[1].tcid + '", "activityId": "' + data[1].activityId + '", "pvId": "' + s_pageview_id + '", "impId": "' + hlImpId + '"});</script>';
                        } else {
                            cpEventTrack = '';
                        }
                        if (data[1].hasOwnProperty("tiarray")) {
                            var fHeadti = data[1].tiarray[Math.round(Math.random() * (data[1].tiarray.length - 1))]
                        } else {
                            var fHeadti = data[1].ti;
                        }
                        if (data[1].hasOwnProperty("pub")) {
                            if (data[1]["pub"] !== "") {
                                var fPubLine = data[1]["pub"]
                            } else {
                                var fPubLine = data[1].pu
                            }
                        } else {
                            var fPubLine = data[1].pu
                        }
                        if (data[1].uri.indexOf('?') !== -1) {
                            var queryamp = "&";
                        } else { var queryamp = "?"; }
                        var bavpurl = data[1].uri.replace("browser", "headline");
						var qaDomain = '';
						if (typeof getDomain != 'undefined') {
							qaDomain = getDomain('profreg');
						}
						if (data[1].dom.indexOf('wp') !== -1) {
							if (data[1].dom.indexOf('staging') !== -1) {
								var vpDom = "www.staging." + qaDomain + "medscape.com";
							} else {
								var vpDom = "www." + qaDomain + "medscape.com";
							}
						} else {
							if (data[1].dom.indexOf('.qa') == -1) {
								var vpDom = data[1].dom.replace(/(staging\.)?medscape/, '$1' + qaDomain + 'medscape');
							} else {
								var vpDom = data[1].dom;
							}
						}
                        if (locale == "us") {
                            $('#middle .bucketR ul li:eq(0)').after('<li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[1].dom + bavpurl + '/desktop_hp_center"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[1].dom + data[1].uri + queryamp + 'src=desktop_hp_center&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[1].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[1].jc + '</span></div><div class="spacer">&nbsp;</div></a></li>');
                        }
                        else {
                            $('#home-news-content-articles .bucketContent .split ul.colRight li:eq(0)').after('<li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[1].dom + bavpurl + '/desktop_hp_center"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[1].dom + data[1].uri + queryamp + 'src=desktop_hp_center&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[1].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[1].jc + '</span></div><div class="spacer">&nbsp;</div></a></li>');
                            }
                    }
                }
            });
            var url = windowhost + "/noscan/public/brandalert/"+locDir+"merge-desktop-r.json" //right col
            $.ajax({
                url: url,
                type: "GET"
            }).done(function(data) {
                if (data.length != 0) {
                    var cpEventTrack;
					var hlImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
                    if (data[0].activityId != "") {
                        cpEventTrack = '<script type="text/javascript">cpHlPush({"tcid": "' + data[0].tcid + '", "activityId": "' + data[0].activityId + '", "pvId": "' + s_pageview_id + '", "impId": "' + hlImpId + '"});</script>';
                    } else {
                        cpEventTrack = '';
                    }
                    if (data[0].hasOwnProperty("tiarray")) {
                        var fHeadti = data[0].tiarray[Math.round(Math.random() * (data[0].tiarray.length - 1))]
                    } else {
                        var fHeadti = data[0].ti;
                    }
                    if (data[0].hasOwnProperty("pub")) {
                        if (data[0]["pub"] !== "") {
                            var fPubLine = data[0]["pub"]
                        } else {
                            var fPubLine = data[0].pu
                        }
                    } else {
                        var fPubLine = data[0].pu
                    }
                        if (data[0].uri.indexOf('?') !== -1) {
                            var queryamp = "&";
                        } else { var queryamp = "?"; }
                    var bavpurl = data[0].uri.replace("browser", "headline");
					var qaDomain = '';
					if (typeof getDomain != 'undefined') {
						qaDomain = getDomain('profreg');
					}
                    if (data[0].dom.indexOf('wp') !== -1) {
                        if (data[0].dom.indexOf('staging') !== -1) {
                            var vpDom = "www.staging." + qaDomain + "medscape.com";
                        } else {
                            var vpDom = "www." + qaDomain + "medscape.com";
                        }
                    } else {
						if (data[0].dom.indexOf('.qa') == -1) {
							var vpDom = data[0].dom.replace(/(staging\.)?medscape/, '$1' + qaDomain + 'medscape');
						} else {
							var vpDom = data[0].dom;
						}
                    }
                    if (locale == "us") {
                        $('.businessmedicine #right #specialtyNews').after('<div class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_right"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp + 'src=desktop_hp_right&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[0].jc + '</span></div><div class="spacer">&nbsp;</div></a></div>');
                        $('#right #perspective').after('<div class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_right"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp + 'src=desktop_hp_right&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[0].jc + '</span></div><div class="spacer">&nbsp;</div></a></div>');
                    } else if (locale == "de") {
                        $('#editorial_sidebar').after('<div class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_right"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp + 'src=desktop_hp_right&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[0].jc + '</span></div><div class="spacer">&nbsp;</div></a></div>');
                    }
                    else {
                            $('#home-consultation').after('<div class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_hp_right"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp + 'src=desktop_hp_right&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[0].jc + '</span></div><div class="spacer">&nbsp;</div></a></div>');
                        }

                }
            });
        }
    }
if ($('.medscape_ref').length != 0 && $('.homestar').length != 0) { // Reference homepages
        var url = windowhost + "/noscan/public/brandalert/merge-desktop-ref.json"
        $.ajax({
            url: url,
            type: "GET"
        }).done(function(data) {
            if (data.length != 0) {
                var cpEventTrack;
				var hlImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
                if (data[0].activityId != "") {
                    cpEventTrack = '<script type="text/javascript">cpHlPush({"tcid": "' + data[0].tcid + '", "activityId": "' + data[0].activityId + '", "pvId": "' + s_pageview_id + '", "impId": "' + hlImpId + '"});</script>';
                } else {
                    cpEventTrack = '';
                }
				if (data[0].hasOwnProperty("tiarray")) {
                    var fHeadti = data[0].tiarray[Math.round(Math.random() * (data[0].tiarray.length - 1))]
                } else {
                    var fHeadti = data[0].ti;
                }
				if (data[0].hasOwnProperty("pub")) {
					if (data[0]["pub"] !== "") {
						var fPubLine = data[0]["pub"]
					} else {
						var fPubLine = data[0].pu
					}
				} else {
					var fPubLine = data[0].pu
				}
					if (data[0].uri.indexOf('?') !== -1) {
						var queryamp = "&";
					} else { var queryamp = "?"; }
                var bavpurl = data[0].uri.replace("browser", "headline");
					var qaDomain = '';
					if (typeof getDomain != 'undefined') {
						qaDomain = getDomain('profreg');
					}
                    if (data[0].dom.indexOf('wp') !== -1) {
                        if (data[0].dom.indexOf('staging') !== -1) {
                            var vpDom = "www.staging." + qaDomain + "medscape.com";
                        } else {
                            var vpDom = "www." + qaDomain + "medscape.com";
                        }
                    } else {
						if (data[0].dom.indexOf('.qa') == -1) {
							var vpDom = data[0].dom.replace(/(staging\.)?medscape/, '$1' + qaDomain + 'medscape');
						} else {
							var vpDom = data[0].dom;
						}
                    }
				var brandAlertTrack = "wmdTrack('feat_ifi')"
                $('#featured .bucketContent ul.listLeft li:eq(1)').replaceWith('<li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_refhp_left"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp+'src=desktop_refhp_left&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '" onclick="' + brandAlertTrack + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">'+data[0].jc+'</span></div><div class="spacer">&nbsp;</div></a></li><li></li>');
            }
        });
    }
    if ($("#featurebarcontainer").length != 0 && trackurl.indexOf('reference') === -1) { //news article
        //if ($.isEmptyObject(DFPTargetKeys.exclusionCategories)) {
            var url = windowhost + "/noscan/public/brandalert/merge-desktop-news-article.json"
            $.ajax({
                url: url,
                type: "GET"
            }).done(function (data) {
                if (data.length != 0) {
                    var cpEventTrack;
					var hlImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
                    if (data[0].activityId != "") {
                        cpEventTrack = '<script type="text/javascript">cpHlPush({"tcid": "' + data[0].tcid + '", "activityId": "' + data[0].activityId + '", "pvId": "' + s_pageview_id + '", "impId": "' + hlImpId + '"});</script>';
                    } else {
                        cpEventTrack = '';
                    }
                    if (data[0].hasOwnProperty("tiarray")) {
                        var fHeadti = data[0].tiarray[Math.round(Math.random() * (data[0].tiarray.length - 1))]
                    } else {
                        var fHeadti = data[0].ti;
                    }
                    if (data[0].hasOwnProperty("pub")) {
                        if (data[0]["pub"] !== "") {
                            var fPubLine = data[0]["pub"]
                        } else {
                            var fPubLine = data[0].pu
                        }
                    } else {
                        var fPubLine = data[0].pu
                    }
                    if (data[0].uri.indexOf('?') !== -1) {
                        var queryamp = "&";
                    } else {
                        var queryamp = "?";
                    }
                    var bavpurl = data[0].uri.replace("browser", "headline");
                    $('#featurebarcontainer ul li:eq(3)').remove();
					var qaDomain = '';
					if (typeof getDomain != 'undefined') {
						qaDomain = getDomain('profreg');
					}
                    if (data[0].dom.indexOf('wp') !== -1) {
                        if (data[0].dom.indexOf('staging') !== -1) {
                            var vpDom = "www.staging." + qaDomain + "medscape.com";
                        } else {
                            var vpDom = "www." + qaDomain + "medscape.com";
                        }
                    } else {
						if (data[0].dom.indexOf('.qa') == -1) {
							var vpDom = data[0].dom.replace(/(staging\.)?medscape/, '$1' + qaDomain + 'medscape');
						} else {
							var vpDom = data[0].dom;
						}
                    }
                    $('#featurebarcontainer ul').prepend('<li class="brandAlert"><div style="display:none;"><iframe src="http://' + vpDom + '/public/vptrack.wxml?desturl=http://' + data[0].dom + bavpurl + '/desktop_fb"  height="1" width="1" scrolling="no"></iframe>' + cpEventTrack + '</div><a href="http://' + data[0].dom + data[0].uri + queryamp + 'src=desktop_fb&pvId=' + s_pageview_id +  '&impId=' + hlImpId + '"><div class="spacer">&nbsp;</div><div class="ifithumb"><img src="' + data[0].thumb + '" border="0" alt="" \/></div><div class="ifititle">' + fHeadti + '<span class="ifibyline">' + fPubLine + '</span><span class="ifibjc">' + data[0].jc + '</span></div><div class="spacer">&nbsp;</div></a></li>');
                }
            });
        //}
    }
}

// Virtual Page Tracking
function BItrack(thisURL) {
    window.VPTrackFrame.getFile("desturl=" + trackurl + "%5f" + thisURL);
}


/* SWFObject v2.1 <http://code.google.com/p/swfobject/>	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis*/
var swfobject = function() {
    var b = "undefined",
        Q = "object",
        n = "Shockwave Flash",
        p = "ShockwaveFlash.ShockwaveFlash",
        P = "application/x-shockwave-flash",
        m = "SWFObjectExprInst",
        j = window,
        K = document,
        T = navigator,
        o = [],
        N = [],
        i = [],
        d = [],
        J, Z = null,
        M = null,
        l = null,
        e = false,
        A = false;
    var h = function() {
        var v = typeof K.getElementById != b && typeof K.getElementsByTagName != b && typeof K.createElement != b,
            AC = [0, 0, 0],
            x = null;
        if (typeof T.plugins != b && typeof T.plugins[n] == Q) {
            x = T.plugins[n].description;
            if (x && !(typeof T.mimeTypes != b && T.mimeTypes[P] && !T.mimeTypes[P].enabledPlugin)) {
                x = x.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                AC[0] = parseInt(x.replace(/^(.*)\..*$/, "$1"), 10);
                AC[1] = parseInt(x.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                AC[2] = /r/.test(x) ? parseInt(x.replace(/^.*r(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof j.ActiveXObject != b) {
                var y = null,
                    AB = false;
                try {
                    y = new ActiveXObject(p + ".7")
                } catch (t) {
                    try {
                        y = new ActiveXObject(p + ".6");
                        AC = [6, 0, 21];
                        y.AllowScriptAccess = "always"
                    } catch (t) {
                        if (AC[0] == 6) {
                            AB = true
                        }
                    }
                    if (!AB) {
                        try {
                            y = new ActiveXObject(p)
                        } catch (t) {}
                    }
                }
                if (!AB && y) {
                    try {
                        x = y.GetVariable("$version");
                        if (x) {
                            x = x.split(" ")[1].split(",");
                            AC = [parseInt(x[0], 10), parseInt(x[1], 10), parseInt(x[2], 10)]
                        }
                    } catch (t) {}
                }
            }
        }
        var AD = T.userAgent.toLowerCase(),
            r = T.platform.toLowerCase(),
            AA = /webkit/.test(AD) ? parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
            q = false,
            z = r ? /win/.test(r) : /win/.test(AD),
            w = r ? /mac/.test(r) : /mac/.test(AD); /*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/
        return {
            w3cdom: v,
            pv: AC,
            webkit: AA,
            ie: q,
            win: z,
            mac: w
        }
    }();
    var L = function() {
        if (!h.w3cdom) {
            return
        }
        f(H);
        if (h.ie && h.win) {
            try {
                K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");
                J = C("__ie_ondomload");
                if (J) {
                    I(J, "onreadystatechange", S)
                }
            } catch (q) {}
        }
        if (h.webkit && typeof K.readyState != b) {
            Z = setInterval(function() {
                if (/loaded|complete/.test(K.readyState)) {
                    E()
                }
            }, 10)
        }
        if (typeof K.addEventListener != b) {
            K.addEventListener("DOMContentLoaded", E, null)
        }
        R(E)
    }();

    function S() {
        if (J.readyState == "complete") {
            J.parentNode.removeChild(J);
            E()
        }
    }

    function E() {
        if (e) {
            return
        }
        if (h.ie && h.win) {
            var v = a("span");
            try {
                var u = K.getElementsByTagName("body")[0].appendChild(v);
                u.parentNode.removeChild(u)
            } catch (w) {
                return
            }
        }
        e = true;
        if (Z) {
            clearInterval(Z);
            Z = null
        }
        var q = o.length;
        for (var r = 0; r < q; r++) {
            o[r]()
        }
    }

    function f(q) {
        if (e) {
            q()
        } else {
            o[o.length] = q
        }
    }

    function R(r) {
        if (typeof j.addEventListener != b) {
            j.addEventListener("load", r, false)
        } else {
            if (typeof K.addEventListener != b) {
                K.addEventListener("load", r, false)
            } else {
                if (typeof j.attachEvent != b) {
                    I(j, "onload", r)
                } else {
                    if (typeof j.onload == "function") {
                        var q = j.onload;
                        j.onload = function() {
                            q();
                            r()
                        }
                    } else {
                        j.onload = r
                    }
                }
            }
        }
    }

    function H() {
        var t = N.length;
        for (var q = 0; q < t; q++) {
            var u = N[q].id;
            if (h.pv[0] > 0) {
                var r = C(u);
                if (r) {
                    N[q].width = r.getAttribute("width") ? r.getAttribute("width") : "0";
                    N[q].height = r.getAttribute("height") ? r.getAttribute("height") : "0";
                    if (c(N[q].swfVersion)) {
                        if (h.webkit && h.webkit < 312) {
                            Y(r)
                        }
                        W(u, true)
                    } else {
                        if (N[q].expressInstall && !A && c("6.0.65") && (h.win || h.mac)) {
                            k(N[q])
                        } else {
                            O(r)
                        }
                    }
                }
            } else {
                W(u, true)
            }
        }
    }

    function Y(t) {
        var q = t.getElementsByTagName(Q)[0];
        if (q) {
            var w = a("embed"),
                y = q.attributes;
            if (y) {
                var v = y.length;
                for (var u = 0; u < v; u++) {
                    if (y[u].nodeName == "DATA") {
                        w.setAttribute("src", y[u].nodeValue)
                    } else {
                        w.setAttribute(y[u].nodeName, y[u].nodeValue)
                    }
                }
            }
            var x = q.childNodes;
            if (x) {
                var z = x.length;
                for (var r = 0; r < z; r++) {
                    if (x[r].nodeType == 1 && x[r].nodeName == "PARAM") {
                        w.setAttribute(x[r].getAttribute("name"), x[r].getAttribute("value"))
                    }
                }
            }
            t.parentNode.replaceChild(w, t)
        }
    }

    function k(w) {
        A = true;
        var u = C(w.id);
        if (u) {
            if (w.altContentId) {
                var y = C(w.altContentId);
                if (y) {
                    M = y;
                    l = w.altContentId
                }
            } else {
                M = G(u)
            }
            if (!(/%$/.test(w.width)) && parseInt(w.width, 10) < 310) {
                w.width = "310"
            }
            if (!(/%$/.test(w.height)) && parseInt(w.height, 10) < 137) {
                w.height = "137"
            }
            K.title = K.title.slice(0, 47) + " - Flash Player Installation";
            var z = h.ie && h.win ? "ActiveX" : "PlugIn",
                q = K.title,
                r = "MMredirectURL=" + j.location + "&MMplayerType=" + z + "&MMdoctitle=" + q,
                x = w.id;
            if (h.ie && h.win && u.readyState != 4) {
                var t = a("div");
                x += "SWFObjectNew";
                t.setAttribute("id", x);
                u.parentNode.insertBefore(t, u);
                u.style.display = "none";
                var v = function() {
                    u.parentNode.removeChild(u)
                };
                I(j, "onload", v)
            }
            U({
                data: w.expressInstall,
                id: m,
                width: w.width,
                height: w.height
            }, {
                flashvars: r
            }, x)
        }
    }

    function O(t) {
        if (h.ie && h.win && t.readyState != 4) {
            var r = a("div");
            t.parentNode.insertBefore(r, t);
            r.parentNode.replaceChild(G(t), r);
            t.style.display = "none";
            var q = function() {
                t.parentNode.removeChild(t)
            };
            I(j, "onload", q)
        } else {
            t.parentNode.replaceChild(G(t), t)
        }
    }

    function G(v) {
        var u = a("div");
        if (h.win && h.ie) {
            u.innerHTML = v.innerHTML
        } else {
            var r = v.getElementsByTagName(Q)[0];
            if (r) {
                var w = r.childNodes;
                if (w) {
                    var q = w.length;
                    for (var t = 0; t < q; t++) {
                        if (!(w[t].nodeType == 1 && w[t].nodeName == "PARAM") && !(w[t].nodeType == 8)) {
                            u.appendChild(w[t].cloneNode(true))
                        }
                    }
                }
            }
        }
        return u
    }

    function U(AG, AE, t) {
        var q, v = C(t);
        if (v) {
            if (typeof AG.id == b) {
                AG.id = t
            }
            if (h.ie && h.win) {
                var AF = "";
                for (var AB in AG) {
                    if (AG[AB] != Object.prototype[AB]) {
                        if (AB.toLowerCase() == "data") {
                            AE.movie = AG[AB]
                        } else {
                            if (AB.toLowerCase() == "styleclass") {
                                AF += ' class="' + AG[AB] + '"'
                            } else {
                                if (AB.toLowerCase() != "classid") {
                                    AF += " " + AB + '="' + AG[AB] + '"'
                                }
                            }
                        }
                    }
                }
                var AD = "";
                for (var AA in AE) {
                    if (AE[AA] != Object.prototype[AA]) {
                        AD += '<param name="' + AA + '" value="' + AE[AA] + '" />'
                    }
                }
                v.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + AF + ">" + AD + "</object>";
                i[i.length] = AG.id;
                q = C(AG.id)
            } else {
                if (h.webkit && h.webkit < 312) {
                    var AC = a("embed");
                    AC.setAttribute("type", P);
                    for (var z in AG) {
                        if (AG[z] != Object.prototype[z]) {
                            if (z.toLowerCase() == "data") {
                                AC.setAttribute("src", AG[z])
                            } else {
                                if (z.toLowerCase() == "styleclass") {
                                    AC.setAttribute("class", AG[z])
                                } else {
                                    if (z.toLowerCase() != "classid") {
                                        AC.setAttribute(z, AG[z])
                                    }
                                }
                            }
                        }
                    }
                    for (var y in AE) {
                        if (AE[y] != Object.prototype[y]) {
                            if (y.toLowerCase() != "movie") {
                                AC.setAttribute(y, AE[y])
                            }
                        }
                    }
                    v.parentNode.replaceChild(AC, v);
                    q = AC
                } else {
                    var u = a(Q);
                    u.setAttribute("type", P);
                    for (var x in AG) {
                        if (AG[x] != Object.prototype[x]) {
                            if (x.toLowerCase() == "styleclass") {
                                u.setAttribute("class", AG[x])
                            } else {
                                if (x.toLowerCase() != "classid") {
                                    u.setAttribute(x, AG[x])
                                }
                            }
                        }
                    }
                    for (var w in AE) {
                        if (AE[w] != Object.prototype[w] && w.toLowerCase() != "movie") {
                            F(u, w, AE[w])
                        }
                    }
                    v.parentNode.replaceChild(u, v);
                    q = u
                }
            }
        }
        return q
    }

    function F(t, q, r) {
        var u = a("param");
        u.setAttribute("name", q);
        u.setAttribute("value", r);
        t.appendChild(u)
    }

    function X(r) {
        var q = C(r);
        if (q && (q.nodeName == "OBJECT" || q.nodeName == "EMBED")) {
            if (h.ie && h.win) {
                if (q.readyState == 4) {
                    B(r)
                } else {
                    j.attachEvent("onload", function() {
                        B(r)
                    })
                }
            } else {
                q.parentNode.removeChild(q)
            }
        }
    }

    function B(t) {
        var r = C(t);
        if (r) {
            for (var q in r) {
                if (typeof r[q] == "function") {
                    r[q] = null
                }
            }
            r.parentNode.removeChild(r)
        }
    }

    function C(t) {
        var q = null;
        try {
            q = K.getElementById(t)
        } catch (r) {}
        return q
    }

    function a(q) {
        return K.createElement(q)
    }

    function I(t, q, r) {
        t.attachEvent(q, r);
        d[d.length] = [t, q, r]
    }

    function c(t) {
        var r = h.pv,
            q = t.split(".");
        q[0] = parseInt(q[0], 10);
        q[1] = parseInt(q[1], 10) || 0;
        q[2] = parseInt(q[2], 10) || 0;
        return (r[0] > q[0] || (r[0] == q[0] && r[1] > q[1]) || (r[0] == q[0] && r[1] == q[1] && r[2] >= q[2])) ? true : false
    }

    function V(v, r) {
        if (h.ie && h.mac) {
            return
        }
        var u = K.getElementsByTagName("head")[0],
            t = a("style");
        t.setAttribute("type", "text/css");
        t.setAttribute("media", "screen");
        if (!(h.ie && h.win) && typeof K.createTextNode != b) {
            t.appendChild(K.createTextNode(v + " {" + r + "}"))
        }
        u.appendChild(t);
        if (h.ie && h.win && typeof K.styleSheets != b && K.styleSheets.length > 0) {
            var q = K.styleSheets[K.styleSheets.length - 1];
            if (typeof q.addRule == Q) {
                q.addRule(v, r)
            }
        }
    }

    function W(t, q) {
        var r = q ? "visible" : "hidden";
        if (e && C(t)) {
            C(t).style.visibility = r
        } else {
            V("#" + t, "visibility:" + r)
        }
    }

    function g(s) {
        var r = /[\\\"<>\.;]/;
        var q = r.exec(s) != null;
        return q ? encodeURIComponent(s) : s
    }
    var D = function() {
        if (h.ie && h.win) {
            window.attachEvent("onunload", function() {
                var w = d.length;
                for (var v = 0; v < w; v++) {
                    d[v][0].detachEvent(d[v][1], d[v][2])
                }
                var t = i.length;
                for (var u = 0; u < t; u++) {
                    X(i[u])
                }
                for (var r in h) {
                    h[r] = null
                }
                h = null;
                for (var q in swfobject) {
                    swfobject[q] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(u, q, t) {
            if (!h.w3cdom || !u || !q) {
                return
            }
            var r = {};
            r.id = u;
            r.swfVersion = q;
            r.expressInstall = t ? t : false;
            N[N.length] = r;
            W(u, false)
        },
        getObjectById: function(v) {
            var q = null;
            if (h.w3cdom) {
                var t = C(v);
                if (t) {
                    var u = t.getElementsByTagName(Q)[0];
                    if (!u || (u && typeof t.SetVariable != b)) {
                        q = t
                    } else {
                        if (typeof u.SetVariable != b) {
                            q = u
                        }
                    }
                }
            }
            return q
        },
        embedSWF: function(x, AE, AB, AD, q, w, r, z, AC) {
            if (!h.w3cdom || !x || !AE || !AB || !AD || !q) {
                return
            }
            AB += "";
            AD += "";
            if (c(q)) {
                W(AE, false);
                var AA = {};
                if (AC && typeof AC === Q) {
                    for (var v in AC) {
                        if (AC[v] != Object.prototype[v]) {
                            AA[v] = AC[v]
                        }
                    }
                }
                AA.data = x;
                AA.width = AB;
                AA.height = AD;
                var y = {};
                if (z && typeof z === Q) {
                    for (var u in z) {
                        if (z[u] != Object.prototype[u]) {
                            y[u] = z[u]
                        }
                    }
                }
                if (r && typeof r === Q) {
                    for (var t in r) {
                        if (r[t] != Object.prototype[t]) {
                            if (typeof y.flashvars != b) {
                                y.flashvars += "&" + t + "=" + r[t]
                            } else {
                                y.flashvars = t + "=" + r[t]
                            }
                        }
                    }
                }
                f(function() {
                    U(AA, y, AE);
                    if (AA.id == AE) {
                        W(AE, true)
                    }
                })
            } else {
                if (w && !A && c("6.0.65") && (h.win || h.mac)) {
                    A = true;
                    W(AE, false);
                    f(function() {
                        var AF = {};
                        AF.id = AF.altContentId = AE;
                        AF.width = AB;
                        AF.height = AD;
                        AF.expressInstall = w;
                        k(AF)
                    })
                }
            }
        },
        getFlashPlayerVersion: function() {
            return {
                major: h.pv[0],
                minor: h.pv[1],
                release: h.pv[2]
            }
        },
        hasFlashPlayerVersion: c,
        createSWF: function(t, r, q) {
            if (h.w3cdom) {
                return U(t, r, q)
            } else {
                return undefined
            }
        },
        removeSWF: function(q) {
            if (h.w3cdom) {
                X(q)
            }
        },
        createCSS: function(r, q) {
            if (h.w3cdom) {
                V(r, q)
            }
        },
        addDomLoadEvent: f,
        addLoadEvent: R,
        getQueryParamValue: function(v) {
            var u = K.location.search || K.location.hash;
            if (v == null) {
                return g(u)
            }
            if (u) {
                var t = u.substring(1).split("&");
                for (var r = 0; r < t.length; r++) {
                    if (t[r].substring(0, t[r].indexOf("=")) == v) {
                        return g(t[r].substring((t[r].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (A && M) {
                var q = C(m);
                if (q) {
                    q.parentNode.replaceChild(M, q);
                    if (l) {
                        W(l, true);
                        if (h.ie && h.win) {
                            M.style.display = "block"
                        }
                    }
                    M = null;
                    l = null;
                    A = false
                }
            }
        }
    }
}();

/* JSON Parser for IE 8 and Below (executed only when JSON object is not natively supported) */
/* json2.js by Douglas Crockford, 2012-10-08, Public Domain */
if (typeof JSON !== "object") {
    JSON = {};
}(function() {
    function f(n) {
        return n < 10 ? "0" + n : n;
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null";
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }
            } else {
                if (typeof space === "string") {
                    indent = space;
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }
            return str("", {
                "": value
            });
        };
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j;
            }
            throw new SyntaxError("JSON.parse");
        };
    }
}());
