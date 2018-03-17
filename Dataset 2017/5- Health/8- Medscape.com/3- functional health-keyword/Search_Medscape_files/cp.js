//Last Updated 9/28/2016 by JS
//Last Updated 6/15/2015 @ 10:26AM by ML
//Last Updated 6/27/2013 @ 1:10AM by ML

function postCp(cpdata,callback) {
    if (typeof cpdata != 'undefined') {
        if (typeof s_registered_user_id != 'undefined' || typeof cpdata.uid != 'undefined') {
            if (typeof cpdata.uid == 'undefined') {
                cpdata.uid = s_registered_user_id;
            }
            if (typeof cpdata.url == 'undefined') {
                cpdata.url = encodeURIComponent(window.location.href.split("?")[0]);
            }
            cpdata.date = new Date().getTime();
            var cpJSON = JSON.stringify(cpdata);
            var stagingChk = "";
            if (window.location.href.indexOf(".staging.") != -1) {
                stagingChk = ".staging";
            }
            if (window.location.href.match(/\.qa\d\d/) != null) {
                stagingChk = stagingChk + window.location.href.match(/\.qa\d\d/)[0];
            }

            $.ajax({
                type: "GET",
                contentType: "application/jsonp",
                url: "http://api" + stagingChk + ".medscape.com/cp/events.json",
                data: 'event=' + cpJSON,
                dataType: "jsonp",
                timeout: 2000,
                complete: callback
            });

            /* if (window.XMLHttpRequest)
             {
             xmlhttp = new XMLHttpRequest();
             }
             else
             {
             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
             }

             if (typeof callback != 'undefined')
             {
             xmlhttp.onreadystatechange=function()
             {
             if (xmlhttp.readyState==4 && xmlhttp.status==201)
             {
             callback();
             }
             }
             }

             xmlhttp.open("GET", "http://api" + stagingChk + ".medscape.com/cp/events.json?" + "event=" + cpJSON, true);
             xmlhttp.send(); */

        }
        else if (typeof callback != 'undefined') {
            callback();
        }
    }

}

var tk1stCll = true;

function imLstnng(medEvnt) {
    if (medEvnt.origin !== "http://ds.serving-sys.com") {
        return;
    }

    if (tk1stCll) {
        if (!jQuery.isEmptyObject(medEvnt.data) && medEvnt.data.indexOf('send-pos') != -1) {
            tk1stCll = false;
            window.removeEventListener("message", imLstnng);

            if (window.addEventListener) {
                window.addEventListener("message", msgBack, false);
            } else {
                window.attachEvent("onmessage", msgBack);
            }

            setTimeout(function () {
                $("div[id^='ads-pos-']").each(function () {
                    if ($(this).find("iframe[name^='ebBannerIFrame']").length > 0) {
                        var ifrm = document.getElementById($(this).find("iframe[name^='ebBannerIFrame']").attr('id')).contentWindow;
                        var msgToSend = $(this).attr('id');
                        ifrm.postMessage("ifrm-pos-"+msgToSend, "http://ds.serving-sys.com");
                    }
                });
            }, 1000);
        }
    }
}

function msgBack(medEvnt) {
    // Do we trust the sender of this message?
    if (medEvnt.origin !== "http://ds.serving-sys.com") {
        return;
    }
    // Assuming you've verified the origin of the received message (which
    // you must do in any case), a convenient idiom for replying to a
    // message is to call postMessage on event.source and provide
    // event.origin as the targetOrigin.
    if (!jQuery.isEmptyObject(medEvnt.data) && medEvnt.data.hasOwnProperty('pos')) {
        var cpAdData = new Object();
        cpAdData.appname = "ad";
        cpAdData.activityName = "adimpr";
        cpAdData.impr = new Array();
        cpAdData.impr.push(medEvnt.data);
        postCp(cpAdData);
    }

}

if (window.addEventListener) {
    window.addEventListener("message", imLstnng, false);
} else {
    window.attachEvent("onmessage", imLstnng);
}

