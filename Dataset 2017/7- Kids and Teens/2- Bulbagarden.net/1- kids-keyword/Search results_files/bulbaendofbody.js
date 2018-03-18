ga('send', {
    hitType: 'event',
    eventCategory: 'Ads',
    eventAction: 'eob',
    eventLabel: 'Loading eob'
});

function showAds() {
    return !(window.location.search.includes('@') || window.location.search.includes('%40'));
}

//kixer ad slots
var __kx_ad_slots = __kx_ad_slots || [];
var __kx_desktop = __kx_desktop || [];

//(function () {
//    window._taboola = window._taboola || [];
//    _taboola.push({ flush: true });
//})();

if (location.search.split('disableMobileView=')[1] != 1) {
    //console.log('this is mobile');
    function mobilifyLeftColumn() {
        //console.log('running funce');

        var mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-hamburger';
        mobileMenu.style.display = 'none';

        var colOne = document.getElementById('column-one');
        colOne.style.paddingTop = '0px';
        colOne.appendChild(mobileMenu);

        //var caTalk = document.getElementById('ca-talk');
        //caTalk.style.marginRight = '1em';

        //document.getElementById('p-cactions').style.left = '2.5em';

        var pLogo = document.getElementById("p-logo");
        pLogo.parentNode.removeChild(pLogo);

        var pCactions = document.getElementById("p-cactions");
        pCactions.parentNode.removeChild(pCactions);

        var localNotice = document.getElementById("localNotice");
        localNotice.parentNode.removeChild(localNotice);

        var pSearch = document.getElementById('p-search');
        var searchHeader = pSearch.getElementsByTagName('h3')[0];
        pSearch.removeChild(searchHeader);
        var searchIcon = document.createElement('img');
        searchIcon.setAttribute('src', 'http://ahost.bulbagarden.net/Content/searchicon.png');
        searchIcon.setAttribute('id', 'searchicon');
        pSearch.insertBefore(searchIcon, pSearch.firstChild);
        pSearch.className = 'p-search-mobile';
        var searchBody = document.getElementById('searchBody');
        searchBody.className = '';
        //searchBody.style.fontSize = '590%';
        var goButton = searchBody.querySelector('input[name="go"]');
        goButton.parentNode.removeChild(goButton);
        var searchButton = searchBody.querySelector('input[name="fulltext"]');
        searchButton.parentNode.removeChild(searchButton);
        var searchInput = document.getElementById('searchInput');
        searchInput.style.border = 'none';
        searchInput.style.fontSize = '250%';
        searchInput.style.outline = 'none';
        searchInput.style.paddingTop = '18px';
        searchInput.setAttribute('placeholder', 'Search Bulbapedia');

        var pNavigation = document.getElementById('p-navigation');
        if (pNavigation == null) {
            pNavigation = document.getElementById('p-Navigation');
        }
        if (pNavigation != null) {
            document.getElementById('mobile-hamburger').appendChild(pNavigation);
            pNavigation.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pBulbagarden = document.getElementById('p-Bulbagarden');
        if (pBulbagarden != null) {
            document.getElementById('mobile-hamburger').appendChild(pBulbagarden);
            pBulbagarden.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pTb = document.getElementById('p-tb');
        if (pTb != null) {
            document.getElementById('mobile-hamburger').appendChild(pTb);
            pTb.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pLang = document.getElementById('p-lang');
        if (pLang != null) {
            document.getElementById('mobile-hamburger').appendChild(pLang);
            pLang.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        function someParentHasId(element, id) {
            if (element.id == id) return true;
            return element.parentNode && someParentHasId(element.parentNode, id);
        }

        document.addEventListener("click", function (e) {
            if (!someParentHasId(e.target, 'mobile-hamburger') && e.target.id != 'mobile-menu-button') {
                document.getElementById('mobile-hamburger').style.display = 'none';
            }
        });

        var mobileMenuButton = document.createElement('div');
        mobileMenuButton.id = 'mobile-menu-button';
        mobileMenuButton.onclick = function () {
            if (mobileMenu.style.display == 'none') {
                mobileMenu.style.display = 'block';
            } else if (mobileMenu.style.display == 'block') {
                mobileMenu.style.display = 'none';
            }
        }
        mobileMenu.onblur = function () {
            mobileMenu.style.display = 'none';
        }
        colOne.appendChild(mobileMenuButton);



    }

    function testMobileStuff() {
        if (location.search.split('forceMobileView=')[1] == 1) {
            return true;
        }
    }

    if (isMobileOrTablet() || testMobileStuff()) {
        document.getElementsByTagName('body')[0].style.background = 'white';

        var content = document.getElementById('content');
        content.style.margin = '6.0em 0 0 0em';
        if (document.readyState == "complete") {
            mobilifyLeftColumn();
        }
        else {
            document.addEventListener("DOMContentLoaded", function () { mobilifyLeftColumn(); }, false);
        }

        (function () {
            //if (location.search.split('testAnchor=')[1] == 1) {
                if (isMobileOrTablet()) {
                    var randomAnchor = 1; // Math.random();
                    var closedAnchorCookie = getCookie('clsanchor');
                    if (closedAnchorCookie != 'true') {
                        if (randomAnchor <= 0.8) {                        
                            var fontLink = document.createElement('link');
                            fontLink.rel = 'stylesheet';
                            fontLink.type = 'text/css';
                            fontLink.href = 'http://fonts.googleapis.com/css?family=Roboto:400,500,700,100,300,900';
                            document.getElementsByTagName('head')[0].appendChild(fontLink);

                            var anchorWrap = document.createElement('div');
                            anchorWrap.className = 'ad-wrap';
                            anchorWrap.id = 'smad';

                            var anchorLink = document.createElement('a');
                            anchorLink.className = 'hb-a';
                            anchorLink.href = 'https://goo.gl/GKl3Hs';
                            anchorLink.target = '_blank';
                            anchorWrap.appendChild(anchorLink);

                            var adHeader2 = document.createElement('h2');
                            adHeader2.className = 'hb-h2';
                            var adSpanSun = document.createElement('span');
                            adSpanSun.className = 'sun';
                            adSpanSun.innerText = 'Sun';
                            var adSpanMoon = document.createElement('span');
                            adSpanMoon.className = 'moon';
                            adSpanMoon.innerText = 'Moon';
                            adHeader2.appendChild(adSpanSun);
                            var sam = document.createTextNode('&');
                            adHeader2.appendChild(sam);
                            adHeader2.appendChild(adSpanMoon);
                            anchorLink.appendChild(adHeader2);

                            var adHeader3 = document.createElement('h3');
                            adHeader3.className = 'hb-h3';
                            adHeader3.innerText = 'The Bulba Handbook';
                            anchorLink.appendChild(adHeader3);

                            var descText = document.createElement('div');
                            descText.className = 'subtext';
                            descText.innerText = 'Pokedex · Guides  · Walkthrough ';
                            anchorLink.appendChild(descText);
                            //var hLinks = document.createElement('div');
                            //hLinks.className = 'subtext';
                            //var pokedexLink = document.createElement('div');
                            //pokedexLink.innerText = 'Pokédex';
                            //hLinks.appendChild(pokedexLink);
                            //var spacer1 = document.createElement('div');
                            //spacer1.innerText = ' · ';
                            //hLinks.appendChild(spacer1);
                            //var guideLink = document.createElement('div');
                            //guideLink.innerText = 'Guides';
                            //hLinks.appendChild(guideLink);
                            //var spacer2 = document.createElement('div');
                            //spacer2.innerText = ' · ';
                            //hLinks.appendChild(spacer1);
                            //var walkthroughLink = document.createElement('div');
                            //hLinks.appendChild(walkthroughLink);
                            //anchorLink.appendChild(hLinks);

                            var closeBtn = document.createElement('div');
                            closeBtn.className = 'close-btn';
                            closeBtn.innerText = 'x';
                            closeBtn.onclick = function () {
                                document.getElementById('smad').outerHTML = '';
                                setCookie('clsanchor', 'true', 1);
                            };
                            anchorWrap.appendChild(closeBtn);

                            var goToButton = document.createElement('div');
                            goToButton.className = 'ad-button';
                            goToButton.innerText = 'Enter';
                            anchorLink.appendChild(goToButton);

                            globalWrapper = document.getElementById('globalWrapper');
                            globalWrapper.parentNode.insertBefore(anchorWrap, globalWrapper.nextSibling);                        
                        }
                        else if (randomAnchor > 0.8 && randomAnchor <= 0.9) {
                            var zergId = '44549'; // paid
                            var bottomBannerZerg = document.createElement('div');
                            bottomBannerZerg.id = 'zergnet-widget-' + zergId;
                            globalWrapper = document.getElementById('globalWrapper');
                            globalWrapper.parentNode.insertBefore(bottomBannerZerg, globalWrapper.nextSibling);

                            var zergnet = document.createElement('script');
                            zergnet.type = 'text/javascript'; zergnet.async = true;
                            zergnet.src = (document.location.protocol == "https:" ? "https:" : "http:") + '//www.zergnet.com/zerg.js?id=' + zergId;
                            var znscr = document.getElementsByTagName('script')[0];
                            znscr.parentNode.insertBefore(zergnet, znscr);

                            window.addEventListener('load', function () {
                                var closeButton = document.createElement('div');
                                closeButton.textContent = 'x';
                                closeButton.style.position = 'absolute';
                                closeButton.style.textAlign = 'center';
                                closeButton.style.right = '3px';
                                closeButton.style.top = '-20px';
                                closeButton.style.borderRadius = '15px';
                                closeButton.style.border = '1px solid #333';
                                closeButton.style.lineHeight = '100%';
                                closeButton.style.color = '#333';
                                closeButton.style.background = '#fff';
                                closeButton.style.fontSize = '29px';
                                closeButton.style.width = '30px';
                                closeButton.style.height = '30px';
                                closeButton.onclick = function () {
                                    document.getElementById('zergnet-widget-' + zergId).outerHTML = '';
                                    setCookie('clsanchor', 'true', 1);
                                };
                                document.getElementById('zergnet-widget-' + zergId).appendChild(closeButton);
                            }, false);
                        }
                        else if (randomAnchor > 0.9) {
                            var bottomBannerKx = document.createElement('div');
                            bottomBannerKx.id = '__kx_ad_6180';
                            globalWrapper = document.getElementById('globalWrapper');
                            globalWrapper.parentNode.insertBefore(bottomBannerKx, globalWrapper.nextSibling);
                            (function () {
                                var slot = 6180;
                                var h = false;
                                var doc = document;
                                __kx_ad_slots.push(slot);
                                if (typeof __kx_ad_start == 'function') {
                                    __kx_ad_start();
                                } else {
                                    if (top == self) {
                                        var s = doc.createElement('script');
                                        s.type = 'text/javascript';
                                        s.async = true;
                                        s.src = '//cdn.kixer.com/ad/load.js';
                                        s.onload = s.onreadystatechange = function () {
                                            if (!h && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                                                h = true;
                                                s.onload = s.onreadystatechange = null;
                                                __kx_ad_start();
                                            }
                                        };
                                        var x = doc.getElementsByTagName('script')[0];
                                        x.parentNode.insertBefore(s, x);
                                    } else {
                                        var tag = doc.getElementById('__kx_tag_' + slot);
                                        var win = window.parent;
                                        doc = win.document;
                                        var top_div = doc.createElement("div");
                                        top_div.id = '__kx_ad_' + slot;
                                        doc.body.appendChild(top_div);
                                        var top_tag = doc.createElement("script");
                                        top_tag.id = '__kx_top_tag_' + slot;
                                        top_tag.innerHTML = tag.innerHTML;
                                        doc.body.appendChild(top_tag);
                                    }
                                }
                            })();
                            //var bottomBannerScript = document.createElement('script');
                            //bottomBannerScript.id = '__kx_tag_6180';
                            //bottomBannerScript.src = "var __kx_ad_slots = __kx_ad_slots || [];(function () {    var slot = 6180;    var h = false;    var doc = document;    __kx_ad_slots.push(slot);    if (typeof __kx_ad_start == 'function') {        __kx_ad_start();    } else {        if (top == self) {            var s = doc.createElement('script');            s.type = 'text/javascript';            s.async = true;            s.src = '//cdn.kixer.com/ad/load.js';            s.onload = s.onreadystatechange = function(){                if (!h && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {                    h = true;                    s.onload = s.onreadystatechange = null;                    __kx_ad_start();                }            };            var x = doc.getElementsByTagName('script')[0];            x.parentNode.insertBefore(s, x);        } else {            var tag = doc.getElementById('__kx_tag_'+slot);            var win = window.parent;            doc = win.document;            var top_div = doc.createElement('div');            top_div.id = '__kx_ad_'+slot;            doc.body.appendChild(top_div);            var top_tag = doc.createElement('script');            top_tag.id = '__kx_top_tag_'+slot;            top_tag.innerHTML = tag.innerHTML;            doc.body.appendChild(top_tag);        }    }})();";
                            //bottomBannerKx.parentNode.insertBefore(bottomBannerScript, bottomBannerKx.nextSibling);
                        }
                    }

                }
            //}
            //else {
            //    var zergId = '44553'; // traffic exchange
            //    //var zergId = '44549'; // paid
            //    var bottomBannerZerg = document.createElement('div');
            //    bottomBannerZerg.id = 'zergnet-widget-' + zergId;
            //    globalWrapper = document.getElementById('globalWrapper');
            //    globalWrapper.parentNode.insertBefore(bottomBannerZerg, globalWrapper.nextSibling);

            //    var zergnet = document.createElement('script');
            //    zergnet.type = 'text/javascript'; zergnet.async = true;
            //    zergnet.src = (document.location.protocol == "https:" ? "https:" : "http:") + '//www.zergnet.com/zerg.js?id=' + zergId;
            //    var znscr = document.getElementsByTagName('script')[0];
            //    znscr.parentNode.insertBefore(zergnet, znscr);

            //    window.addEventListener('load', function () {
            //        var closeButton = document.createElement('div');
            //        closeButton.textContent = 'x';
            //        closeButton.style.position = 'absolute';
            //        closeButton.style.textAlign = 'center';
            //        closeButton.style.right = '3px';
            //        closeButton.style.top = '-20px';
            //        closeButton.style.borderRadius = '15px';
            //        closeButton.style.border = '1px solid #333';
            //        closeButton.style.lineHeight = '100%';
            //        closeButton.style.color = '#333';
            //        closeButton.style.background = '#fff';
            //        closeButton.style.fontSize = '29px';
            //        closeButton.style.width = '30px';
            //        closeButton.style.height = '30px';
            //        closeButton.onclick = function () {
            //            document.getElementById('zergnet-widget-' + zergId).outerHTML = '';
            //        };
            //        document.getElementById('zergnet-widget-' + zergId).appendChild(closeButton);
            //    }, false);
            //}
        })();
    }
    else {
        document.getElementsByClassName('mw-body')[0].style.marginLeft = '160px';
        var colOne = document.getElementById('column-one');
        var sideBarAd = document.createElement('div');
        sideBarAd.style.positon = 'absolute';
        
        if (showAds()) {
            if (window.adcode == 'komoona') {
                console.log('komoona widesky');
                sideBarAd.id = 'kmni_8265c3cb150a422a96ebca60f1faea45';
                colOne.appendChild(sideBarAd);
                kmn_placement = '8265c3cb150a422a96ebca60f1faea45';
                var kmn_tags = window.kmn_tags || [];
                kmn_tags.push('8265c3cb150a422a96ebca60f1faea45');
            }
            //else if (window.adcode == 'q1') {
            //    //sideBarAd.id = 'q1-adset-119828';
            //    //var q1Ads = q1Ads || [];
            //    //unit = { id: "119828", slot: "q1-adset-119828" };
            //    //q1Ads.push(unit);
            //}
            else {
                //console.log('sortable widesky');
                sideBarAd.className = 'ad-tag';
                sideBarAd.setAttribute('data-ad-name', 'widesky_1');
                sideBarAd.setAttribute('data-ad-size', '160x600');
                colOne.appendChild(sideBarAd);

                ////widesky 
                //colOne.appendChild(sideBarAd);
                //var script = document.createElement('script');
                //script.onload = function () {
                //    sideBarAd.id = '4316565';
                //    var nsNode = document.createElement('noscript');
                //    var adLink = document.createElement('a');
                //    adLink.href = 'http://ads.intergi.com/adlink|3.0|5205.1|4316565|0|154|ADTECH;loc=300;key=key1+key2+key3+key4;alias=';
                //    adLink.target = '_blank';
                //    var imgNode = document.createElement('img');
                //    imgNode.src = 'http://ads.intergi.com/adserv|3.0|5205.1|4316565|0|154|ADTECH;loc=300;key=key1+key2+key3+key4;alias=';
                //    imgNode.border = '0';
                //    imgNode.width = '160';
                //    imgNode.height = '600';

                //    adLink.appendChild(imgNode);
                //    nsNode.appendChild(adLink);
                //    sideBarAd.appendChild(nsNode);

                //    ADTECH.config.page = { protocol: 'http', server: 'ads.intergi.com', network: '5205.1', pageid: 0, params: { loc: '100' } };
                //    ADTECH.config.placements[4316565] = { sizeid: 154, params: { alias: '', target: '_blank' } };
                //    ADTECH.loadAd(4316565);
                //    sideBarAd.style.position = 'absolute';
                //};
                //document.head.appendChild(script);
                //script.src = '//aka-cdn-ns.adtechus.com/dt/common/DAC.js';
                //script.type = 'text/javascript';                
            }
        }
                
    }
}

function showRightRail() {
    return window.innerWidth > 1439;
}

function isFrontPage() {
    return window.location.pathname == "/wiki/Main_Page";
}

(function () {
    if (showRightRail()) {
        function insertSortableAdRightCol(adNum) {
            if (document.querySelector('[data-ad-name="med_rec' + adNum + '"]') == null) {

                var adPos = (window.innerHeight * ((adNum * 2) + 1));
                if (adPos < document.getElementById("bodyContent").offsetHeight) {
                    var adContainer = document.createElement('div');
                    adContainer.id = 'scrollad' + adNum;
                    adContainer.style.position = 'absolute';
                    adContainer.style.top = adPos + 'px';
                    adContainer.style.right = '25px';

                    var rcbox = document.getElementById('rightcolbox');
                    if (rcbox != null) {
                        rcbox.appendChild(adContainer);
                    }

                    var adElement = document.createElement('div');
                    adElement.setAttribute('data-ad-name', 'med_rec_' + adNum);
                    adElement.setAttribute('data-ad-size', '300x250');
                    adContainer.appendChild(adElement);
                }
            }
        }

        //insertSortableAdRightCol(1);
        //insertSortableAdRightCol(2);

        function insertOutstreamAdRightCol() {
            if (document.getElementById('slidein') == null) {

                var adPos = (window.innerHeight * ((1 * 2) + 1));
                if (adPos < document.getElementById("bodyContent").offsetHeight) {
                    var adContainer = document.createElement('div');
                    adContainer.id = 'slidein';
                    //adContainer.style.position = 'absolute';
                    //adContainer.style.top = adPos + 'px';
                    //adContainer.style.right = '25px';
                    //adContainer.style.width = '350px';
                    //adContainer.style.height = '250px';

                    var rcbox = document.getElementById('rightcolbox');
                    if(rcbox != null) {
                        rcbox.appendChild(adContainer);
                    }                    

                    //var adElement = document.createElement('div');
                    //adElement.id = '__kx_ad_7162';
                    //adContainer.appendChild(adElement);
                }
            }
        }
        insertOutstreamAdRightCol();

        function insertKixerAdRightCol(adNum) {
            if (document.getElementById('scrollad' + adNum) == null) {

                var adPos = (window.innerHeight * ((adNum * 2) + 1)) - 1390;
                if (adPos < document.getElementById("bodyContent").offsetHeight) {
                    var adContainer = document.createElement('div');
                    adContainer.id = 'scrollad' + adNum;
                    adContainer.style.position = 'absolute';
                    adContainer.style.top = adPos + 'px';
                    //adContainer.style.right = '25px';
                    adContainer.style.width = '350px';
                    adContainer.style.height = '250px';

                    var rcbox = document.getElementById('rightcolbox');
                    if (rcbox != null) {
                        rcbox.appendChild(adContainer);
                    }

                    var adElement = document.createElement('script');
                    adElement.src = 'https://Q1MediaHydraPlatform.com/ads/video/controller.php?qid=57d6d4bcdbcb6cda37200d1d&qz=1';
                    adContainer.appendChild(adElement);
                    //var adElement = document.createElement('div');
                    //adElement.id = '__kx_ad_7162';
                    //adContainer.appendChild(adElement);

                    ////Kixer video
                    //(function () {
                    //    var slot = 7162;
                    //    var h = false;
                    //    __kx_ad_slots.push(slot);
                    //    __kx_desktop[slot] = true;
                    //    if (typeof __kx_ad_start == 'function') {
                    //        __kx_ad_start();
                    //    } else {
                    //        var s = document.createElement('script');
                    //        s.type = 'text/javascript';
                    //        s.async = true;
                    //        s.src = '//cdn.kixer.com/ad/load.js';
                    //        s.onload = s.onreadystatechange = function () {
                    //            if (!h && (!this.readyState || this.readyState == 'loaded' ||
                    //            this.readyState == 'complete')) {
                    //                h = true;
                    //                s.onload = s.onreadystatechange = null;
                    //                __kx_ad_start();
                    //            }
                    //        };
                    //        var x = document.getElementsByTagName('script')[0];
                    //        x.parentNode.insertBefore(s, x);
                    //    }
                    //})();
                    //Kixer video
                }
            }
        }
        insertKixerAdRightCol(2);
    }

    function insertSortableAdLeftCol(adNum) {
        if (document.querySelector('[data-ad-name="widesky_' + adNum + '"]') == null) {

            var adPos = ((window.innerHeight+600) * ((adNum * 2) + 1)) - 2500;
            if (adPos < document.getElementById("bodyContent").offsetHeight) {
                //console.log('widesky ad ' + adNum + 'pos' + adPos + 'offset ' + document.getElementById("bodyContent").scrollHeight);
                var adContainer = document.createElement('div');
                adContainer.id = 'scrollad_widesky_' + adNum;
                adContainer.style.position = 'absolute';
                adContainer.style.top = adPos + 'px';
                adContainer.style.left = '0px';

                var colone = document.getElementById('column-one');
                if (colone != null) {
                    colone.appendChild(adContainer);
                }

                var adElement = document.createElement('div');
                adElement.setAttribute('data-ad-name', 'widesky_' + adNum);
                adElement.setAttribute('data-ad-size', '160x600');
                adContainer.appendChild(adElement);
            }
        }
    }

    //if (location.search.split('testWidesky=')[1] == 1) {
        insertSortableAdLeftCol(2);
        insertSortableAdLeftCol(3);
        insertSortableAdLeftCol(4);
        insertSortableAdLeftCol(5);
        insertSortableAdLeftCol(6);
        insertSortableAdLeftCol(7);
        insertSortableAdLeftCol(8);
        insertSortableAdLeftCol(9);
        insertSortableAdLeftCol(10);
        insertSortableAdLeftCol(11);
        insertSortableAdLeftCol(12);
        insertSortableAdLeftCol(13);
        insertSortableAdLeftCol(14);
        insertSortableAdLeftCol(15);
        insertSortableAdLeftCol(16);
        insertSortableAdLeftCol(17);
        insertSortableAdLeftCol(18);
        insertSortableAdLeftCol(19);
        insertSortableAdLeftCol(20);

    //}

}());

window.apd_options = { 'websiteId': 6398, 'runFromFrame': false };
if (showAds()) {   
    
    (function () {
        var w = window.apd_options.runFromFrame ? window.top : window;
        if (window.apd_options.runFromFrame && w != window.parent) w = window.parent;
        if (w.location.hash.indexOf('apdAdmin') != -1) { if (typeof (Storage) !== 'undefined') { w.localStorage.apdAdmin = 1; } }
        var adminMode = ((typeof (Storage) == 'undefined') || (w.localStorage.apdAdmin == 1));
        w.apd_options = window.apd_options;
        var apd = w.document.createElement('script'); apd.type = 'text/javascript'; apd.async = true;
        apd.src = '//' + (adminMode ? 'cdn' : 'ecdn') + '.firstimpression.io/' + (adminMode ? 'fi.js?id=' + window.apd_options.websiteId : 'fi_client.js');
        apd.onload = function () {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Ads',
                eventAction: 'firstimpression-load',
                eventLabel: 'First impression ad run'
            });
        };
        var s = w.document.getElementsByTagName('head')[0]; s.appendChild(apd);
        ga('send', {
            hitType: 'event',
            eventCategory: 'Ads',
            eventAction: 'firstimpression',
            eventLabel: 'First impression ad loaded'
        });
    })();

    (function () {
        var bulbaComm = document.createElement('iframe');
        bulbaComm.width = '1';
        bulbaComm.height = '1';
        bulbaComm.frameBorder = '0';
        bulbaComm.scrolling = 'no';
        bulbaComm.src = 'http://ahost.bulbagarden.net/zones/bulbacomm';
        document.body.appendChild(bulbaComm);

        window.addEventListener('message', function (e) {
            if (e.origin !== "http://ahost.bulbagarden.net")
                return;

            //console.log(e.data.countrycode);
            if (e.data.countrycode == 'US') {
                var jpUs = document.createElement('script');
                jpUs.type = 'text/javascript';
                jpUs.src = 'http://us.ads.justpremium.com/adserve/js.php?zone=30746';
                document.body.appendChild(jpUs);
            }
            else if (e.data.countrycode == 'UK') {
                var jpUk = document.createElement('script');
                jpUk.type = 'text/javascript';
                jpUk.src = 'http://uk.ads.justpremium.com/adserve/js.php?zone=30748';
                document.body.appendChild(jpUk);
            }
        }, false);


        //get('foo.txt')
        //.then((data) => {
            
        //})
        //.catch((err) => {
            
        //});
    })();

//AdZones
if (window.adcode == 'playwire') {
    console.log('playwire');
    function loadAdScript(callback) {
        var script = document.createElement('script');
        document.head.appendChild(script);
        script.onload = callback;
        script.src = '//aka-cdn-ns.adtechus.com/dt/common/DAC.js';
        script.type = 'text/javascript';        
    }

    function injectAd(adZone, adId, adSize) {
        var adNode = document.getElementById(adZone);
        if (adNode != null) {
            adNode.id = adId;
            var nsNode = document.createElement('noscript');
            var adLink = document.createElement('a');
            adLink.href = 'http://ads.intergi.com/adlink|3.0|5205.1|' + adId + '|0|' + adSize + '|ADTECH;loc=300;key=key1+key2+key3+key4;alias=';
            adLink.target = '_blank';
            var imgNode = document.createElement('img');
            imgNode.src = 'http://ads.intergi.com/adserv|3.0|5205.1|' + adId + '|0|' + adSize + '|ADTECH;loc=300;key=key1+key2+key3+key4;alias=';
            imgNode.border = '0';
            if (adSize == 225) {
                imgNode.width = '728';
                imgNode.height = '90';
            }
            else if (adSize == 170) {
                imgNode.width = '300';
                imgNode.height = '250';
            }
            else if (adSize == 3055) {
                imgNode.width = '320';
                imgNode.height = '50';
            }
            else if (adSize == 154) {
                imgNode.width = '160';
                imgNode.height = '600';
            }
            adLink.appendChild(imgNode);
            nsNode.appendChild(adLink);
            adNode.appendChild(nsNode);

            ADTECH.config.page = { protocol: 'http', server: 'ads.intergi.com', network: '5205.1', pageid: 0, params: { loc: '100' } };
            ADTECH.config.placements[adId] = { sizeid: adSize, params: { alias: '', target: '_blank' } };
            ADTECH.loadAd(adId);
        }
    }

    var loadAds = function() {
        if (showRightRail()) {
            injectAd('atf-leaderboard', 4249043, 225);
            injectAd('atf-square-rr', 4249045, 170);
            injectAd('btf-square-rr', 4249049, 170);
        } else {
            injectAd('atf-square-left', 4249047, 170);
            injectAd('atf-square-right', 4249045, 170);
            injectAd('btf-square-right', 4249048, 170);
        }

        if (isFrontPage()) {
            injectAd('btf-square-right', 4249048, 170);
        }

        injectAd('btf-square-left', 4249050, 170);
        injectAd('btf-leaderboard', 4249044, 225);
    }

    loadAdScript(loadAds);
}

if (window.adcode == 'komoona') {
    console.log('komoona');

    function injectAd(adZone, adId) {
        var adNode = document.getElementById(adZone);
        if(adNode != null) {
            adNode.id = 'kmni_' + adId;
            kmn_placement = adId;

            var script = document.createElement('script');
            script.src = '//cdn.komoona.com/scripts/kmn_sa.js';
            script.type = 'text/javascript';
            adNode.parentNode.insertBefore(script, adNode);

            var kmn_tags = window.kmn_tags || [];
            kmn_tags.push(adId);
        }        
    }

    var loadAds = function () {
        if (showRightRail()) {
            injectAd('atf-leaderboard', '8d27727f1129b1d94938b01381c77593');
            injectAd('atf-square-rr', 'af7494c6ea1cc0752b41bbce09ce0160');
            injectAd('btf-square-rr', '3dbc55a06c60fbc4a6b65cef5b46d501');
        } else {
            injectAd('atf-square-left', 'af7494c6ea1cc0752b41bbce09ce0160');
            injectAd('atf-square-right', '61b6b2ef0599feab08a306538c9e5496');
            injectAd('btf-square-right', '16259d1e630ef6d82722abb6d713eb83');
        }

        if (isFrontPage()) {
            injectAd('btf-square-right', '16259d1e630ef6d82722abb6d713eb83');
        }

        injectAd('btf-square-left', '4015ca855a7408a6c97af3aac1d82e5e');
        injectAd('btf-leaderboard', '8eca3b74748b785299f5a1c3ed3c6928');
    }

    loadAds();
}

if (window.adcode == 'q1') {
    console.log('q1');
    function injectAd(adZone, adId) {
        var adNode = document.getElementById(adZone);
        if (adNode != null) {
            adNode.id = 'q1-adset-' + adId;
            adNode.style.width = '300px';
            adNode.style.height = '250px';
            adNode.style.margin = '0';
            adNode.style.padding = '0';

            var q1Ads = q1Ads || [];
            unit = { id: adId, slot: "q1-adset-" + adId };
            q1Ads.push(unit);
        }
    }

    function InjectAdScript(adId) {
        var sc = document.createElement('script');
        sc.src = '//Q1MediaHydraPlatform.com/ads/video/controller.php?qid=54f36c4cad1d148132957a46&qz=0';
        sc.type = 'text/javascript';
        var referenceNode = document.getElementById('q1-adset-' + adId);
        referenceNode.parentNode.insertBefore(sc, referenceNode.nextSibling);
    }

    if (showRightRail()) {
        injectAd('atf-leaderboard', '119587');
        InjectAdScript('119587');
        injectAd('atf-square-rr', '119593');
        InjectAdScript('119593');
        injectAd('btf-square-rr', '119592');
        InjectAdScript('119592');
    } else {
        injectAd('atf-square-left', '119592');
        InjectAdScript('119592');
        injectAd('atf-square-right', '119593');
        InjectAdScript('119593');
        injectAd('btf-square-right', '119595');
        InjectAdScript('119595');
    }
    if (isFrontPage()) {
        injectAd('btf-square-right', '119595');
        InjectAdScript('119595');
    }
    injectAd('btf-square-left', '119594');
    InjectAdScript('119594');
    injectAd('btf-leaderboard', '119588');
    InjectAdScript('119588');

}

if (window.adcode == 'insticator') {
    console.log('insticator');
    function injectAd(adZone, adId) {
        var adNode = document.getElementById(adZone);
        if(adNode != null) {
            adNode.id = adId;
            Insticator.ad.loadAd(adId);
        }                
    }

    if (showRightRail()) {
        injectAd('atf-leaderboard', 'div-insticator-ad-4');
        injectAd('atf-square-rr', 'div-insticator-ad-2');
        injectAd('btf-square-rr', 'div-insticator-ad-1');
    } else {
        injectAd('atf-square-left', 'div-insticator-ad-1');
        injectAd('atf-square-right', 'div-insticator-ad-2');
        injectAd('btf-square-right', 'div-insticator-ad-6');
    }
    if (isFrontPage()) {
        injectAd('btf-square-right', 'div-insticator-ad-6');
    }
    injectAd('btf-square-left', 'div-insticator-ad-5');
    injectAd('btf-leaderboard', 'div-insticator-ad-3');
}

if (window.adcode == 'sortable') {
    console.log('sortable');

    function injectAd(adZone, adId, adSize) {
        var sortableAd = document.getElementById(adZone);
        if (sortableAd != null) {
            sortableAd.className = 'ad-tag';
            sortableAd.setAttribute("data-ad-name", adId);
            sortableAd.setAttribute("data-ad-size", adSize);
            (deployads = window.deployads || []).push({});
        }
    }

    if (showRightRail()) {
        injectAd('atf-leaderboard', "leaderboard_1", "728x90");
        injectAd('atf-square-rr', "med_rec_1", "300x250");
        injectAd('btf-square-rr', "med_rec_2", "300x250");
    } else {
        injectAd('atf-square-left', "med_rec_1", "300x250");
        injectAd('atf-square-right', "med_rec_2", "300x250");
        injectAd('btf-square-right', "med_rec_4", "300x250");
    }
    if (isFrontPage()) {
        injectAd('btf-square-right', "med_rec_4", "300x250");
    }
    injectAd('btf-square-left', "med_rec_3", "300x250");
    injectAd('btf-leaderboard', "leaderboard_2", "728x90");
}

if (window.adcode == 'curse') {
    console.log('curse');
    function injectAd(adZone, adId) {
        var adNode = document.getElementById(adZone);
        if(adNode != null) {
            adNode.id = adId;
        }        
    }
    if (showRightRail()) {
        injectAd('atf-leaderboard', 'cdm-zone-01');
        injectAd('atf-square-rr', 'cdm-zone-02');
        injectAd('btf-square-rr', 'cdm-zone-06');
    } else {
        injectAd('atf-square-left', 'cdm-zone-02');
        injectAd('atf-square-right', 'cdm-zone-08');
        injectAd('btf-square-right', 'cdm-zone-06');
    }
    if (isFrontPage()) {
        injectAd('btf-square-right', 'cdm-zone-06');
    }
    injectAd('btf-square-left', 'cdm-zone-03');
    injectAd('btf-leaderboard', 'cdm-zone-04');
}

if (window.adcode == 'dfp') {
    console.log('dfp-01');
    dfp1 = document.getElementById('div-gpt-ad-1471266728068-3-loading');
    dfp1.id = 'div-gpt-ad-1471266728068-3';
    googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-3'); });

    if (window.innerWidth > 1439) {
        console.log('dfp-06');
        if (window.location.pathname == "/wiki/Main_Page") {
            var dfpElem6 = document.getElementById('div-gpt-ad-1471266728068-2-lowres');
            dfpElem6.id = 'div-gpt-ad-1471266728068-2';
            googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-2'); });
        }
        else {
            var dfpElem6 = document.getElementById('div-gpt-ad-1471266728068-2-desktop');
            dfpElem6.id = 'div-gpt-ad-1471266728068-2';
            googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-2'); });
        }
    }
    if (window.innerWidth <= 1439) {
        console.log('dfp-06 lowres');
        var dfpElem6 = document.getElementById('div-gpt-ad-1471266728068-2-lowres');
        dfpElem6.id = 'div-gpt-ad-1471266728068-2';
        googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-2'); });
    }
    console.log('dfp-03');
    dfp3 = document.getElementById('div-gpt-ad-1471266728068-0-loading');
    dfp3.id = 'div-gpt-ad-1471266728068-0';
    googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-0'); });

    console.log('dfp-04');
    var dfpElem4 = document.createElement('div');
    dfpElem4.id = 'div-gpt-ad-1471266728068-1';
    var dfpElem4Script = document.createElement('script');
    dfpElem4Script.innerText = "googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-1'); });";
    dfpElem4.appendChild(dfpElem4Script);
    globalWrapper = document.getElementById('globalWrapper');
    globalWrapper.parentNode.insertBefore(dfpElem4, globalWrapper.nextSibling);

    if (window.innerWidth > 1439) {
        console.log('dfp-02 desktop');
        cdm2 = document.getElementById('div-gpt-ad-1471266728068-4-desktop');
        if (cdm2 != null) {
            cdm2.id = 'div-gpt-ad-1471266728068-4';
        }
    }
    if (window.innerWidth <= 1439) {
        console.log('dfp-02 lowres');
        cdm2 = document.getElementById('div-gpt-ad-1471266728068-4-mobile');
        if (cdm2 != null) {
            cdm2.id = 'div-gpt-ad-1471266728068-4';
        }
    }
    googletag.cmd.push(function () { googletag.display('div-gpt-ad-1471266728068-4'); });
}

//increase spacing for nativo ad on the frontpage
if (isFrontPage()) {
    window.addEventListener("load", function () {
        if (document.getElementById('headerad').querySelector('#lbcontainer') == null) {
            document.getElementById('headerad').style.paddingBottom = '167px';
        }
    });
}

    //load curse
//if (location.search.split('enableCurse=')[1] == 1) {
    var script = document.createElement('script');
    var tstamp = new Date();
    script.id = 'factorem';
    script.src = 'http://cdm.cursecdn.com/js/bulbagarden/cdmfactorem_min.js?misc=' + tstamp.getTime();
    script.async = false;
    script.type = 'text/javascript';
    document.head.appendChild(script);
//}

//window.onload = function () {
//    console.log('everything is loaded');
//    if (window.adcode == 'curse') {
//        function noFill(adId) {
//            var adNode = document.getElementById(adId);
//            var frameId = adNode.querySelector('[title="3rd party ad content"]').id;
//            window.frames[frameId].document
//            //window.frames[jall.children[0].children[0].id].document.getElementsByTagName('body')[0].childNodes[0]
//        }
//    }
//    else if (window.adcode == 'sortable') {
//        function noFill(adId) {
//            //window.frames[jall.children[0].children[0].id].document.getElementsByTagName('body')[0].childNodes[0]
//        }
//    }

//};
}

//TILLER END OF BODY
(function () {
    //(window._1god4cx || (window._1god4cx = [])).push({ ready: 1 });
}());
