 window.suggestmeyes_loaded = true;

$gsm = {
    // Tool for creating tags
    tag: function (name, attributes, innerHTML, parent) {
        var el = document.createElement(name);
        for (var attr in attributes) el.setAttribute(attr, attributes[attr]);
        if (innerHTML) el.innerHTML = innerHTML;
        if (parent) parent.appendChild(el);
        return el;
    },

    // Class tools
    hasClass: function (element, clas) {
        if (element) return (new RegExp("\\b" + clas + "\\b")).test(element.className);
    },

    addClass: function (element, clas) {
        if (!$gsm.hasClass(element, clas)) element.className += " " + clas;
    },

    removeClass: function (element, clas) {
        element.className = element.className.replace(new RegExp("\\s*\\b" + clas + "\\b"), "");
    },

    toggleClass: function (element, clas, flag) {
        if (typeof flag == "undefined") flag = !$gsm.hasClass(element, clas);
        if (flag) $gsm.addClass(element, clas);
        else $gsm.removeClass(element, clas)
    },

    // event tools
    addEventListener: function (element, event, handler, useCapture) {
        var eventList = event.split(/\s+/);
        for (var i = 0; i < eventList.length; i++) { 
            if (window.addEventListener) {
                element.addEventListener(eventList[i], handler, useCapture);
            } else {
                element.attachEvent("on" + eventList[i], handler);
            }
        }
    },

    onload: function (handler) {
        var doneLoading = false;

        function load() {
            if (doneLoading) return;
            doneLoading = true;
            handler();
        }

        $gsm.addEventListener(document, "DOMContentLoaded", load);
        $gsm.addEventListener(window, "load", load);
    },

    // XHR tool
    xhr: function (type, url, callback, data, fail, noParse) {
        var request;

        // get XMLHttpRequest, the cross-browser way
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(ex) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch(ex) {
                    return;
                }
            }
        }

        if (data) {
            var arr = [];
            for (var k in data) arr.push(k + "=" + data[k]);
            url += "?" + arr.join("&");
        }

        request.open(type, url, true);

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                var data; 

                if (!noParse) {
                    if (window.JSON) {
                        // try to parse JSON natively
                        data = JSON.parse(request.responseText);
                    } else {
                        // use eval() if no JSON is available
                        data = eval("(" + request.responseText + ")");
                    }

                    callback(data);
                } else {
                    callback(request.responseText);
                }                
            } else if (request.readyState == 4 && request.status > 400) {
                // got error, call handler function (if any)
                if (fail) fail(request);
            } 
        }

        try {
            request.send();
        } catch (ex) {
            fail(request, ex);
        }
    },

    // cookie tools
    setCookie: function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }, 

    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
}

/******* IE 8 etc. fix **********/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');

if (!("flex" in document.body.style)) {
    $gsm.addEventListener(window, "load", function () {
        $gsm.addClass(document.querySelector(".brandmenu-v2"), "ie8");
    });
}
/******* IE 8 etc. fix **********/



/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

if ("bind" in Object) { // damn IE8
    !function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);
}


// social network share/tweets counts
function countUp($item){
    return setTimeout(function() {
        var current, newCount, target;
        current = $item.attr("data-current-count") * 1;
        target = $item.attr("data-target-count") * 1;
        newCount = current + Math.ceil((target - current) / 2);
        $item.attr("data-current-count", newCount);
        $item.html(newCount);
        
        if (newCount < target) {
            return countUp($item);
        }
    }, 100);
};

function getSocialCount(url){
    
    $.getJSON("http://graph.facebook.com/" + url, function(json) {
        return setCount($(".fbCount"), json.shares);
    });

    $.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=" + url + "&callback=?", function(json) {
        return setCount($(".twCount"), json.count);
    });

    $.getJSON('https://count.donreach.com/?url=' + url + "&callback=?", function (json) {
        return setCount($(".goCount"), json.shares.google);
    });
}

function setCount($item, count) {
    if (count == null) {
        count = null;
    }
    $item.attr("data-target-count", count);
    $item.attr("data-current-count", 0);
    return countUp($item);
};


$gsm.onload(function () {
    // Uncomment to see the numbers
    // getSocialCount(sURLSocialE);

    // open/close nav menu
    var menuButton = document.querySelector('.lines-button');
    if (menuButton) menuButton.onclick = function () {
        var close = !$gsm.hasClass(menuButton, "open");
        $gsm.toggleClass(menuButton, "open", close);
        $gsm.toggleClass(document.querySelector('#menu'), "open", close);
        $gsm.toggleClass(document.querySelector("#header"), "open", close);

        $gsm.setCookie("sSubmenuState", close? "open" : "close", 7);
        
        stickyAdScrollEventHandler();
    }

    if ("Headroom" in window) { // damn IE8
        // configure sticky header
        new Headroom(document.getElementById("header"), {
            tolerance: {
                down : 10,
                up : 20
            },
            offset : 52,
            classes: {
                initial: "slide",
                pinned: "slide--reset",
                unpinned: "slide--up"
            }
        }).init();
    }

    // toggle extra reviews on home page
    var elem = document.querySelector(".more-reviews-list-container");
    var link = document.querySelector(".more-reviews-list-toggle");

    if (link) link.onclick = function() {
        if (elem.style.display == "block") {
            elem.style.display = "none";
            link.innerHTML = "&#9650;";
        } else {
            elem.style.display = "block";
            link.innerHTML = "&#9660;";
        }
        return false;
    }

    // become a fan
    var loggedIn = $gsm.hasClass(document.querySelector('a.signup-icon i'), "icon-signout");
    var becomeAFan = document.querySelector(".specs-fans");

    if (becomeAFan) { // do nothing on non-specs pages        
        var phoneId = window.location.toString().match(/-(\d+)(?:p\d+)?\.php/)[1];
        if (phoneId) becomeAFan.onclick = function () {
            var fan = !$gsm.hasClass(becomeAFan.parentNode, "active");
            if (!loggedIn) {
                $gsm.addClass(becomeAFan.parentNode, "not-logged");
                setTimeout(function () {
                    $gsm.removeClass(becomeAFan.parentNode, "not-logged");
                }, 4000);
            } else{
                $gsm.xhr("GET", "becomeafan-js.php3", function (data) {
                    // toggle class as needed
                    $gsm.toggleClass(becomeAFan.parentNode, "active", data == "1" && fan);
                    // update score and labels
                    if (data == "1") {
                        var strong = becomeAFan.querySelector("strong");
                        var score = parseInt(strong.lastChild.nodeValue, 10);
                        score += fan? 1 : -1;
                        strong.replaceChild(document.createTextNode("" + score), strong.lastChild);
                        becomeAFan.querySelector("span").innerHTML = fan? "You're a fan" : "Become a fan";
                    }
                }, {idPhone: phoneId, nFan: fan? 1 : 0}, function () {
                    $gsm.removeClass(becomeAFan.parentNode, "active");
                }, true);
            }

            return false;
        }
    }

    var loginLink = document.querySelector("#login-active"); 
    var loginPopup = document.querySelector("#login-popup");
    if (loginLink) loginLink.onclick =function (event) {
        if (loggedIn) return;
        event.preventDefault();
        loginPopup.style.display = loginPopup.style.display == "block"?  "none" : "block";
    };

    var header = document.querySelector("#header");
    var footerLeft = document.querySelector("#footer-side");
    var stickyAd = document.querySelector(".adv.sticky");
    if (stickyAd) {
        var elementBeforeStickyAd = stickyAd.previousElementSibling;
        var MIN_WINDOW_HEIGHT_FOR_STICKY_AD;

        function _calculateMinWindowHeightForStickyAd() {
            MIN_WINDOW_HEIGHT_FOR_STICKY_AD = stickyAd.offsetHeight + 
                                            (footerLeft? footerLeft.offsetHeight : 0) +
                                            header.offsetHeight +
                                            30; // some extra padding

            if (window.innerHeight < MIN_WINDOW_HEIGHT_FOR_STICKY_AD) {
                stickyAd.style.position = "";
                stickyAd.style.top = "";
            }

        }
        _calculateMinWindowHeightForStickyAd();
        $gsm.addEventListener(window, "resize", _calculateMinWindowHeightForStickyAd);

        function stickyAdScrollEventHandler(event) {
            if (stickyAd.style.position !== "" && elementBeforeStickyAd.getBoundingClientRect().bottom > 0) {
                stickyAd.style.position = "";
                stickyAd.style.top = "";
            } else if (window.innerHeight > MIN_WINDOW_HEIGHT_FOR_STICKY_AD && 
                       stickyAd.style.position !== "fixed" && stickyAd.getBoundingClientRect().top < 10) {
                stickyAd.style.position = "fixed";
                stickyAd.style.top = "8px";
            }

            if (stickyAd.style.position == "fixed") {
                stickyAd.style.top = (8 + (header.getBoundingClientRect().bottom > 0? header.offsetHeight : 0)) + "px";
            }
        }
        $gsm.addEventListener(window, "scroll", stickyAdScrollEventHandler);
    }
});

var ImagePopup = function () {};
(function () {
    var serverUrl = "";

    ImagePopup = function (baseUrl, url) {
        serverUrl = baseUrl;
        _ShowImg(url);
    }

    var overlay = $gsm.tag("div", {"class": "overlay", "style": "display: none;"}, "", document.body);
    var imageGalleryWrap = $gsm.tag("div", {"class": "image-gallery-wrap", "style": "display: none;"}, "", document.body);
    var imageGalleryContainer = $gsm.tag("div", {"class": "image-gallery-container"}, "", imageGalleryWrap);
    var imageGalleryContainerRow = $gsm.tag("div", {"class": "image-gallery-container-row"}, "", imageGalleryContainer);
    var imageGalleryContainerCell = $gsm.tag("div", {"class": "image-gallery-container-cell"}, "", imageGalleryContainerRow);
    var imageGalleryBox = $gsm.tag("div", {"class": "image-gallery-box"}, "", imageGalleryContainerCell);
    var imageGallery = $gsm.tag("div", {"class": "image-gallery"}, "", imageGalleryBox);

    var imageGalleryClose = $gsm.tag("span", {"class": "image-gallery-close", "title": "Close gallery"}, "&#10006;", imageGallery);
    var imageGalleryExpand = $gsm.tag("span", {"class": "image-gallery-expand", "title": "Expand image"}, '<i class="head-icon icon-actual-size-7"></i>', imageGallery);
    var imageGalleryFit = $gsm.tag("span", {"class": "image-gallery-fit", "title": "Fit image to screen"}, '<i class="head-icon icon-minify-2"></i>', imageGallery);
    var map = $gsm.tag("img", {"class": "image-gallery-map"}, "", imageGallery);
    var mapWindow = $gsm.tag("div", {"class": "image-gallery-map-window"}, "", imageGallery);
    var imageContainer = $gsm.tag("div", {"class": "gallery-image-container"}, "", imageGallery);
    var image = $gsm.tag("img", {}, "", imageContainer);
    var loadingLabel = $gsm.tag("span", {"class": "image-gallery-loading"}, "<i class='head-icon icon-spinner'></i> Loading", imageContainer);
    var next = $gsm.tag("a", {"href": "#next", "class": "gallery-nav-item gallery-nav-next"}, "&rsaquo;", imageGallery);
    var prev = $gsm.tag("a", {"href": "#prev", "class": "gallery-nav-item gallery-nav-prev"}, "&lsaquo;", imageGallery);

    var imageGalleryNavThumb = $gsm.tag("div", {"class": "image-gallery-nav-thumb"}, "", imageGalleryBox);
    var navThumbArrows = $gsm.tag("div", {"class": "nav-thumb-arrows"}, "", imageGalleryNavThumb);
    var nextThumbs = $gsm.tag("a", {"href": "#next", "class": "gallery-nav-thumb-item gallery-nav-next"}, "&rsaquo;", navThumbArrows);
    var prevThumbs = $gsm.tag("a", {"href": "#prev", "class": "gallery-nav-thumb-item gallery-nav-prev"}, "&lsaquo;", navThumbArrows);

    var imageGalleryThumbWrap = $gsm.tag("div", {"class": "image-gallery-thumb-wrap"}, "", imageGalleryNavThumb);
    var imageGalleryThumbContainer = $gsm.tag("div", {"class": "image-gallery-thumb-container"}, "", imageGalleryThumbWrap);
    var dots = $gsm.tag("span", {"class": "position", "id": "slider-position-news"}, "", imageGalleryThumbWrap);

    var zoomable, zoomedIn, fitToScreen = false;
    var thumbLinks = false;
    var activeDot = 0;

    function computedStyle(element, style) {
        if (window.getComputedStyle) {
            return parseInt(window.getComputedStyle(element)[style], 10);
        } else {
            return parseInt(element.currentStyle[style], 10);
        }
    }

    function findActiveDot() {
        var wrapWidth = imageGalleryThumbWrap.offsetWidth;
        var activeThumb = document.querySelector("a.image-gallery-thumb-active");
        
        dots.children[activeDot].className = ""; // remove old dot highlight
        activeDot = Math.floor(activeThumb.offsetLeft / wrapWidth); // calculate new active dot based on active thumb location
        dots.children[activeDot].className = "on"; // highlight new active dot
    }

    function scrollThumbContainer(fineTunePosition) {
        var wrapWidth = imageGalleryThumbWrap.offsetWidth;
        var activeThumb = document.querySelector("a.image-gallery-thumb-active");

        var position = activeDot * wrapWidth;
        if (fineTunePosition && activeThumb.offsetLeft < position) position = activeThumb.offsetLeft;
        imageGalleryThumbContainer.style.transform = "translateX(-" + position + "px)";
        imageGalleryThumbContainer.style.webkitTransform = "translateX(-" + position + "px)";
    }

    var doAltTags = parseInt((window.location.href.toString().match(/-review-(\d+)(?:p\d+)?\.php/) || [0])[1]) >= 1338; // Nexus 5X review. Disable alts for older reviews
    doAltTags = doAltTags || (window.location.href.toString().match(/-news-(\d+)\.php/)) || (window.location.href.toString().match(/-blog-(\d+)\.php/));

    function findThumbLinks(url) {
        thumbLinks = {};
        // find all links that call ShowImg
        var linksElements = document.querySelectorAll("a[onclick^='javascript:ShowImg']");
        // delete all thumbs in lightbox and dots
        imageGalleryThumbContainer.innerHTML = "";
        dots.innerHTML = "";
        // list of thumb links
        var list = [];
        // thumb wrap width, total width of thumbnails
        var wrapWidth = imageGalleryThumbWrap.offsetWidth;
        var totalThumbnailWidth = 0;

        for (var i = 0; i < linksElements.length; i++) {
            (function(link) {
                var onclick = link.getAttribute("onclick");
                var bigUrl = onclick.match(/ShowImg2?\(["']([^"']+?)["']\)/)[1];
                var smallUrl = link.children[0].getAttribute("src");
                var alt = link.children[0].getAttribute("alt");
                alt = alt.replace(/ - (?:[^-]|\w-\w)+$/, "");
                alt = alt.replace(/^[a-z][^A-Z]/, function (s) {
                    return s.charAt(0).toUpperCase() + s.slice(1);
                });
                if (!doAltTags) alt = "";

                var a = $gsm.tag("a", {"href": "#"}, "", imageGalleryThumbContainer);
                var img = $gsm.tag("img", {"src": smallUrl}, "", a);
                a.onclick = function () { _ShowImg(bigUrl, this); return false; };

                totalThumbnailWidth += computedStyle(img, "width") + computedStyle(a, "marginRight");

                thumbLinks[bigUrl] = {
                    thumbLink: a,
                    bigUrl: bigUrl,
                    smallUrl: smallUrl,
                    alt: alt
                };
            })(linksElements[i]);
        }

        // scale thumb container with some safety
        // var links = imageGalleryThumbContainer.querySelectorAll("a");
        // var thumbWidth = links[0].querySelector("img").naturalWidth;
        // imageGalleryThumbContainer.style.width = links.length * (thumbWidth + 10) + "px";
        imageGalleryThumbContainer.style.width = totalThumbnailWidth + 1000 + "px";

        // make dots for each page
        for (var i = 0; i < totalThumbnailWidth / wrapWidth; i++) {
            $gsm.tag("em", {}, "&bull;", dots);
        }
    }
    
    function showLightbox(on) {
        overlay.style.display = on? "" : "none";
        imageGalleryWrap.style.display = on? "" : "none";
    }

    function closeGallery() { 
        zoomable = zoomedIn = fitToScreen = false;
        
        prepareZoom();

        showLightbox(false); 
    };
    imageGalleryClose.onclick = closeGallery;

    imageGalleryContainerCell.onclick = function (event) {
        if (event.target !== imageGalleryContainerCell) return;
        closeGallery();
    }

    function _ShowImg(url, link) {
        loadingLabel.style.display = "block";
        imageGalleryExpand.style.display = "none";
        showLightbox(true);
        if (!thumbLinks) findThumbLinks();
        // change image
        image.src = serverUrl + url;
        // show placeholder
        try {
            imageContainer.style.background = "url(" + serverUrl + url + ") no-repeat center / contain," + 
                                              "url(" + thumbLinks[url].smallUrl + ") no-repeat center / contain";  
        } catch (ex) {
            // Damn IE8
            imageContainer.style.background = "url(" + serverUrl + url + ") no-repeat center / contain";
        }
        // add alt tag of image as title on div
        imageContainer.setAttribute("title", thumbLinks[url].alt);
        // remove 'active' from old thumb
        (document.querySelector(".image-gallery-thumb-active") || {}).className = "";
        // add 'active' to new thumb
        (link || thumbLinks[url].thumbLink).className = "image-gallery-thumb-active";
        // find active dot
        findActiveDot();
        // scroll the thumb container so that the active thumb is visible
        scrollThumbContainer(true);
        // setup camera samples for zoom
        zoomedIn = false;
        zoomable = !!url.match(/\/camera\//);
        map.src = thumbLinks[url].smallUrl;
        prepareZoom();

        return false;
    }

    image.onload = function () {
        // remove "loading" label and show "expand" label if necessary
        loadingLabel.style.display = "none";
        imageGalleryExpand.style.display = "";

        if (!image.naturalWidth) { // damn IE8
            image.naturalWidth = image.width;
            image.naturalHeight = image.height;
        }

        imageContainer.style.background = "url(" + image.src + ") no-repeat center / contain";

        if (image.width > 1024 || image.height > 768) zoomable = true;
        $gsm.toggleClass(imageGallery, "zoomable", zoomable);

        calculateMapWindowSize();
    }

    function nextPrevImage(event, direction) {
        var current = document.querySelector(".image-gallery-thumb-active");
        var dir = direction || this.getAttribute("href").replace("#", "");
        
        var then = dir == "next"? current.nextSibling : current.previousSibling;     
        if (!then) then = dir == "next"? current.parentElement.firstChild : current.parentElement.lastChild;
        then.onclick();
        // find active dot
        findActiveDot();
        // scroll the thumb container so that the active thumb is visible
        scrollThumbContainer(true);
        
        var preloadImage = new Image();
        //preloadImage.src = serverUrl + thumbLinks[thumbLinks[currentUrl][dir]][dir];

        return false;
    }
    next.onclick = nextPrevImage;
    prev.onclick = nextPrevImage;

    $gsm.addEventListener(document, "keyup", function (event) {
        if (overlay.style.display == "none") return;

        if (event.which == 27) {
            // ESCAPE
            closeGallery();
        } else if (event.which == 37 || event.which == 39) {
            // LEFT/RIGHT
            nextPrevImage(null, event.which == 37? "prev" : "next");
        }
    });

    function nextPrevThumbs() {
        var dir = this.getAttribute("href").replace("#", "");
        // turn old dot off
        dots.children[activeDot].className = "";
        // calculate new dot
        activeDot = (dots.children.length + activeDot + ((dir == "next")? 1 : -1)) % dots.children.length;
        // turn new dot on
        dots.children[activeDot].className = "on";
        // scroll to that page of thumbnails
        scrollThumbContainer();

        return false;
    }
    nextThumbs.onclick = nextPrevThumbs;
    prevThumbs.onclick = nextPrevThumbs;

    function calculateMapWindowSize() {
        // calculate mapwindow dimensions
        try {
            mapWindow.style.width = Math.round((map.width * (innerWidth / image.naturalWidth)) / scale) + "px";
            mapWindow.style.height = Math.round((map.height * (innerHeight / image.naturalHeight)) / scale) + "px";
        } catch (ex) {
            // Damn IE8
            mapWindow.style.width = "20px";
            mapWindow.style.height = "20px";
        }
    }

    function prepareZoom() {
        $gsm.toggleClass(imageGallery, "zoomable", zoomable);
        $gsm.toggleClass(imageGallery, "zoomed-in", zoomedIn);   
        $gsm.toggleClass(imageGallery, "fit", fitToScreen);

        with (imageContainer.style) {
            position = fitToScreen? "fixed" : "";
            top = fitToScreen? "0" : "";
            left = fitToScreen? "0" : "";
            width = fitToScreen? "100%" : "";
        }

        imageGalleryNavThumb.style.display = fitToScreen? "none" : "";

        imageGalleryFit.innerHTML = fitToScreen? '<i class="head-icon icon-minify-2"></i>' : '<i class="head-icon icon-expand-2"></i>';
        imageGalleryExpand.innerHTML = zoomedIn? '<i class="head-icon icon-no-actual-size"></i>' : '<i class="head-icon icon-actual-size-7"></i>';
    }
    $gsm.addEventListener(imageGalleryExpand, "click", function () {
        zoomedIn = !zoomedIn && zoomable;
        fitToScreen = false;

        prepareZoom();
    });

    $gsm.addEventListener(imageGalleryFit, "click", function () {
        fitToScreen = !fitToScreen;
        zoomedIn = false;

        prepareZoom();
    });

    var scale = ("devicePixelRatio" in window)? 1 / (devicePixelRatio /* * screen.width / innerWidth */) : 1;
    var originalLeft = 0;
    var originalTop = 0;
    $gsm.addEventListener(document, "touchstart", function (event) {
        var tx = image.style.transform.match(/translateX\((-?\d+px)\)/);
        var ty = image.style.transform.match(/translateY\((-?\d+px)\)/);
        originalLeft = parseInt(tx? tx[1] : "0") - event.touches[0].clientX;
        originalTop = parseInt(ty? ty[1] : "0") - event.touches[0].clientY;
    });
    $gsm.addEventListener(document, "mousemove", function (event) {
        // do nothing if image is not zoomable or we've locked the zoom
        if (!zoomable || !zoomedIn || fitToScreen) return;

        // work out position in relative coordinates
        var px = (event.clientX / innerWidth);
        var py = (event.clientY / innerHeight);
        px *= 1 - screen.width / (image.naturalWidth);
        py *= 1 - screen.height / (image.naturalHeight);

        // move green map window
        mapWindow.style.left = Math.round(px * map.width) + "px";
        mapWindow.style.top = Math.round(py * map.height) + "px";

        // move zoomed-in image
        image.style.transform = "translateX(" + Math.round(-px * image.naturalWidth * scale) + "px) " +
                                "translateY(" + Math.round(-py * image.naturalHeight * scale) + "px)";
    });

    image.ontouchmove = function (event) {
        event.preventDefault();
        event.stopPropagation();

        var x = originalLeft + event.touches[0].clientX;
        var y = originalTop + event.touches[0].clientY;
        x = Math.round(Math.min(0, Math.max((-image.width + innerWidth), x)));
        y = Math.round(Math.min(0, Math.max((-image.height + innerHeight), y)));

        image.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        image.style.webkitTransform = "translateX(" + x + "px) translateY(" + y + "px)";

        mapWindow.style.left = (-x) * (map.width / image.width) + "px";
        mapWindow.style.top = (-y) * (map.height / image.height) + "px";
    };

    $gsm.addEventListener(window, "resize", function () {
        calculateMapWindowSize();
    });
    $gsm.addEventListener(window, "orientationchange", function () {
        image.style.top = "0px";
        image.style.left = "0px";
        mapWindow.style.top = "0px";
        mapWindow.style.left = "0px";
    });
})();

    (function () {
        var speedos;
        window.addEventListener("DOMContentLoaded", function () {
            speedos = document.querySelectorAll(".speedo");
        });

        window.addEventListener("scroll", function () {
            for (var i = 0; speedos && i < speedos.length; i++) {
                var speedo = speedos[i];

                if (speedo.getClientRects()[0].bottom < window.innerHeight) {
                    var rotation = parseInt(speedo.getAttribute("data-value"), 10) * 1.8;
                    speedo.querySelector("#needle").style.transform = "rotate(" + rotation + "deg)";
                }
            }
        });
    })();