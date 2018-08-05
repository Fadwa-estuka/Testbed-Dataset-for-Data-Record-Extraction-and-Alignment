//NBA2 AdFuel Modules
//
//Deployed: 2017-01-27 16:23:51

////////////////////////////////////////////
//Amazon 2.1
////////////////////////////////////////////

/*! Amazon AdFuel Module - Version 2.1
 - Implementation of MetricAPI returned from AdFuel when registering module
 - Add Custom Target when Amazon hits timeout
 - Secure Pathing
 - Single ADMB Inclusion
!*/
window.AmazonDirectMatchBuy = (function CreateAmazonModule() {

    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;

    var hasOwnProperty = objectProto.hasOwnProperty;
    var slice = arrayProto.slice;
    var toString = objectProto.toString;

    var noop = function() { return false; };
    var metricApi = { metrics: {}, addMetric: noop, getMetricById: noop, getMetricsByType: noop, getMetricTypes: noop };

    function hasOwn(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function once(fn) {
        return function() {
            if (fn) {
                fn.apply(this, arguments);
                fn = null;
            }
        };
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function( /* arguments */ ) {
            var args = ['[AdFuelModule - Amazon]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        };
    }

    var amznkey = window.location.hostname.toLowerCase().match(/^edition\.cnn\.com/) ? "3288" : "3159";
    var timeoutForGetAdsCallback = 1000; //1 second
    var initialized = false;

    function isAmazonApiAvailable() {
        return !!window.amznads;
    }

    function refreshAdFuelPageLevelTargets(callback) {
        //remove amznslots
        log('removing PageLevelTarget: amznslots');
        window.AdFuel.removePageLevelTarget('amznslots');

        if (!isAmazonApiAvailable()) {
            return (callback ? callback() : true);
        }

        var callbackWrapper = once(function() {
            //amazon has refreshed, update AdFuel targeting
            var targeting = window.amznads.getTargeting();

            log('setting amazon targeting', targeting);
            metricApi.addMetric({ type: 'modules', id: 'Amazon', data: { targeting: targeting } });

            window.AdFuel.setBulkTargeting(targeting);
            window.AdFuel.removePageLevelTarget('azn_to', '1');
            window.AdFuel.addPageLevelTarget('azn_to', '0');

            return (callback ? callback() : true);
        });

        try {
            window.amznads.getAdsCallback(amznkey, callbackWrapper, timeoutForGetAdsCallback);
        } catch (e) {
            log('Exception thrown while requesting Amazon ads:', e);
            // manually execute callback if it hasn't run
            window.AdFuel.removePageLevelTarget('azn_to', '1');
            window.AdFuel.addPageLevelTarget('azn_to', '0');
            callbackWrapper();
        }
    }

    function getTargetingData() {
        var data = {};

        if (isAmazonApiAvailable()) {
            data = window.amznads.getTargeting();
            if (!isObject(data)) {
                data = {};
            }
        }

        return data;
    }

    var keyMap = (function() {
        var map = {};

        function has(id) {
            return id in map;
        }

        function addKey(id, key) {
            if (!has(id)) {
                map[id] = [];
            }

            map[id].push(key);
        }

        function getKeys(id) {
            return has(id) ? slice.call(map[id]) : [];
        }

        function clearKeys(id) {
            if (has(id)) {
                map[id].length = 0;
                return true;
            }
            return false;
        }

        return ({
            has: has,
            clearKeys: clearKeys,
            getKeys: getKeys,
            addKey: addKey
        });
    }());

    function clearPreviousKeyValuePairs(player) {
        var playerId = player.getId();

        if (keyMap.has(playerId)) {
            var keys = keyMap.getKeys(playerId);
            if (keys.length) {
                log('clearing previous ad key-values: ' + keys.join(', '));

                for (var i = 0, endi = keys.length; i < endi; ++i) {
                    player.setAdKeyValue(keys[i], null);
                }

                keyMap.clearKeys(playerId);
            }
        }
    }

    function setAdKeyValue(player, key, value) {
        log('setting ad key-value: ' + key + ' = "' + value + '"');

        keyMap.addKey(player.getId(), key);
        player.setAdKeyValue(key, value);
    }

    function handleTargetingData(player) {
        var targeting = getTargetingData();

        // Clear previous key-value pairs.
        clearPreviousKeyValuePairs(player);

        // Set new key-value pairs.
        for (var key in targeting) {
            if (!hasOwn(targeting, key)) continue;

            var val = targeting[key];

            if (val instanceof Array) {
                // val = val.join(',');
                for (var i = 0, endi = val.length; i < endi; ++i) {
                    setAdKeyValue(player, val[i], "1");
                }
            } else {
                setAdKeyValue(player, key, val);
            }
        }
    }

    //this is only called by the CVP object
    function setAdKeyValuePairs(player) {
        if (player.getPlayerType() !== CVP.FLASH) return;

        log('setAdKeyValuePairs(player)');
        handleTargetingData(player);
    }

    /* allows optional configuration:

     amznkey: Turner's Amazon key (default is '3159')
     timeout: duration in milliseconds for Amazon to call GetAdsCallback (default is 2000)
     */
    function init(config) {
        log('initializing', config);

        if (config) {
            //allow overrides
            amznkey = config.amznkey || amznkey;
            timeoutForGetAdsCallback = config.timeout || timeoutForGetAdsCallback;
        }

        if (!initialized) {
            //only do this once
            initialized = true;

            function registerModuleWithAdFuel() {
                metricApi = window.AdFuel.registerModule('Amazon', {
                    //when dispatching or refreshing slots, set amazon targeting
                    preDispatchCallback: function(builtSlots, asyncCallback) {
                        try {
                            log('preDispatch');
                            refreshAdFuelPageLevelTargets(asyncCallback);
                        } catch (err) {
                            log('error setting targeting prior to dispatch', err);
                            asyncCallback(err);
                        }
                    },

                    preRefreshCallback: function(slotsIdsToRefresh, asyncCallback) {
                        try {
                            log('preRefresh');
                            refreshAdFuelPageLevelTargets(asyncCallback);
                        } catch (err) {
                            log('error refreshing targeting prior to refresh', err);
                            asyncCallback(err);
                        }
                    }
                });
                window.AdFuel.addPageLevelTarget('azn_to', '1');
            }

            if (window.AdFuel) {
                //AdFuel loaded first
                registerModuleWithAdFuel();
            } else {
                //wait for AdFuel to load
                if (document.addEventListener) {
                    document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
                } else if (document.attachEvent) {
                    document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
                }
            }
        }
    }

    function requireInit(fn) {
        return function() {
            if (!initialized) {
                log('ERROR: init() must be called first!');
                return;
            }

            fn.apply(this, arguments);
        };
    }

    return ({
        requestAdRefresh: requireInit(refreshAdFuelPageLevelTargets),
        getTargetingData: requireInit(getTargetingData),
        setAdKeyValuePairs: requireInit(setAdKeyValuePairs),
        isAmazonApiAvailable: isAmazonApiAvailable,
        init: init
    });

}());
(function(callback) {
    var a = document,
        b = a.createElement("script"),
        c = a.getElementsByTagName("script")[0],
        d = /^(complete|loaded)$/,
        e = false;
    b.type = "text/javascript";
    b.async = true;
    b.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//c.amazon-adsystem.com/aax2/amzn_ads.js';
    b.onload = b.onreadystatechange = function() {
        if (!e && !(('readyState' in b) && d.test(b.readyState))) {
            b.onload = b.onreadystatechange = null;
            e = true;
            callback();
        }
    };
    if (window.amznads) {
        callback();
    } else {
        c.parentNode.insertBefore(b, c);
    }
})(function() {
    window.AmazonDirectMatchBuy.init();
});

////////////////////////////////////////////
//Console Tool 2.0
////////////////////////////////////////////

(function createConsoleToolModule() {
    var noop = function() {
        return false;
    };
    var metricApi = {
        metrics: {},
        addMetric: noop,
        getMetricById: noop,
        getMetricsByType: noop,
        getMetricTypes: noop
    };

    var _consoleRendered = false;
    var _consoleOpenButtonHandler = null;
    var _consoleCloseButtonHandler = null;
    var _consoleOverlayButtonHandler = null;
    var _registeredTabs = [];
    var _timelineGrid;
    var overlaysHidden = true;
    //var h2cCanvas;
    //var h2cDone = false;
    //var _screenshotGenerated = false;
    var fullConsole = false;

    // Check for the various File API support.
    var fileUploadOK = (window.File && window.FileReader && window.FileList && window.Blob);

    var fileUpload = null;
    var _showTempAds = [];
    var _hideTempAds = [];


    function addEvent(element, event, fn) {
        if (element.addEventListener) {
            return element.addEventListener(event, fn, true);
        } else if (element.attachEvent) {
            return element.attachEvent('on' + event, fn);
        }
    }

    function removeEvent(element, event, fn) {
        if (element.removeEventListener) {
            return element.removeEventListener(event, fn, true);
        } else if (element.detachEvent) {
            return element.detachEvent('on' + event, fn);
        }
    }

    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function emptyElements( el ) {
        var item;
        while( (( item = el.firstChild ) !== null ? el.removeChild( item ) : false) ) {}
    }

    function checkbox( name, value, text ) {
        var el = document.createElement("div");
        el.style.width = "48%";
        el.style['float'] = "left";
        el.style.display = "inline-block";
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.name = name;
        cb.id = name +"_"+ value;
        cb.style['float'] = "left";
        cb.style['margin-right'] = "2px";
        cb.style['position'] = "relative";
        cb.style['top'] = "3px";
        cb.value = value;
        var lab = document.createElement("div");
        lab.style.width = "calc(100% - 18px)";
        lab.appendChild( document.createTextNode( text ) );
        el.appendChild(cb);
        el.appendChild(lab);
        return el;
    }
    
    function element( name, text ) {
        var el = document.createElement( name );
        el.appendChild( document.createTextNode( text ) );
        return el;
    }

    function button( item ){
        var el = document.createElement("button");
        el.onclick = item.action;        
        el.id = item.name;
        el.appendChild( document.createTextNode( item.value ) );
        el.className = "btn btn-sm btn-primary";
        return el;
    }

    function compare(a, b) {
        if (a.data[2] < b.data[2])
            return -1;
        else if (a.data[2] > b.data[2])
            return 1;
        else
            return 0;
    }

    function isValidURL(str) {
        var pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
        if (!pattern.test(str)) {
            return false;
        } else {
            return true;
        }
    }

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function( /* arguments */ ) {
            var args = ['[AdFuelModule - Console Tool]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        };
    }

    function _renderAdFuelConsole() {
        if (!_consoleRendered) {
            var head = document.getElementsByTagName('head')[0];
            var body = document.getElementsByTagName('body')[0];
            var protocol = "https:" === document.location.protocol;

            var iconStylesheet = document.createElement('link');
            iconStylesheet.type = "text/css";
            iconStylesheet.rel = "stylesheet";
            iconStylesheet.href = (protocol ? "https:" : "http:") + "//fonts.googleapis.com/icon?family=Material+Icons";
            iconStylesheet.id = "material-icons-font";

            var consoleStylesheet = document.createElement("link");
            consoleStylesheet.rel = "stylesheet";
            consoleStylesheet.href = (protocol ? "https:" : "http:") + "//ssl.cdn.turner.com/ads/adfuel/modules/consoleTool-2.0.css";
            consoleStylesheet.id = "adfuel-console-stylesheet";

            var dataTableStylesheet = document.createElement("link");
            dataTableStylesheet.rel = "stylesheet";
            dataTableStylesheet.href = (protocol ? "https:" : "http:") + "//ssl.cdn.turner.com/ads/adfuel/modules/dhtmlxgrid.css";
            dataTableStylesheet.id = "adfuel-console-table-stylesheet";

            var container = document.createElement("div");
            container.className = "adfuel-console-button-container adfuel-open-console-button-container";

            var actionButton = document.createElement('a');
            actionButton.className = "adfuel-console-button";

            var buttonIcon = document.createElement('i');
            buttonIcon.className = "adfuel-console-button-icon material-icons";
            buttonIcon.innerHTML = "view_module";
            buttonIcon.innerText = "view_module";

            var adFuelConsoleFiller = document.createElement('div');
            adFuelConsoleFiller.className = "adfuel-console-filler";

            var adFuelConsoleContainer = document.createElement('div');
            adFuelConsoleContainer.className = "adfuel-console";

            actionButton.appendChild(buttonIcon);
            container.appendChild(actionButton);
            head.appendChild(iconStylesheet);
            head.appendChild(consoleStylesheet);
            head.appendChild(dataTableStylesheet);
            body.appendChild(container);
            body.appendChild(adFuelConsoleFiller);
            body.appendChild(adFuelConsoleContainer);
            (function(callback) {
                "use strict";
                var a = document,
                    b = a.createElement("script"),
                    c = a.getElementsByTagName("script")[0],
                    d = /^(complete|loaded)$/,
                    e = false,
                    f = "https:" === document.location.protocol;
                b.type = "text/javascript";
                b.async = true;
                b.src = (f ? "https:" : "http:") + "//www.geoplugin.net/javascript.gp";
                b.onload = b.onreadystatechange = function() {
                    if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                        b.onload = b.onreadystatechange = null;
                        e = true;
                        callback();
                    }
                };
                c.parentNode.insertBefore(b, c);
            })(function() {
                var geoCountry, geoCity, geoRegion, geoLat, geoLong;
                var valueSet = false;
                if (window.geoplugin_countryCode) {
                    geoCountry = window.geoplugin_countryCode();
                    valueSet = true;
                }
                if (window.geoplugin_city) {
                    geoCity = window.geoplugin_city();
                    valueSet = true;
                }
                if (window.geoplugin_region) {
                    geoRegion = window.geoplugin_region();
                    valueSet = true;
                }
                if (window.geoplugin_latitude) {
                    geoLat = window.geoplugin_latitude();
                    valueSet = true;
                }
                if (window.geoplugin_longitude) {
                    geoLong = window.geoplugin_longitude();
                    valueSet = true;
                }
                if (valueSet == true) {
                    metricApi.addMetric({
                        type: 'configuration',
                        id: 'actual_user_location',
                        data: {
                            city: geoCity,
                            region: geoRegion,
                            country: geoCountry,
                            latitude: geoLat,
                            longitude: geoLong
                        }
                    });
                }
            });

            _buildAdFuelConsoleContainer(adFuelConsoleContainer);

            _consoleOpenButtonHandler = addEvent(actionButton, 'click', _openAdFuelConsole);
            _consoleRendered = true;
        } else {
            var head = document.getElementsByTagName("head")[0];
            var body = document.getElementsByTagName("body")[0];

            var iconStylesheet = document.getElementById("material-icons-font");
            var consoleStylesheet = document.getElementById("adfuel-console-stylesheet");

            var container = document.querySelector("div.adfuel-console-button-container");
            var adFuelConsoleFiller = document.querySelector("div.adfuel-console-filler");
            var adFuelConsoleContainer = document.querySelector("div.adfuel-console");

            head.removeChild(iconStylesheet);
            head.removeChild(consoleStylesheet);

            body.removeChild(container);
            body.removeChild(adFuelConsoleFiller);
            body.removeChild(adFuelConsoleContainer);
            _consoleRendered = false;
        }
    }

/*
    function scriptLoader( script, func ){
        if (script.onload === undefined) {
            // IE lack of support for script onload

            if( script.onreadystatechange !== undefined ) {

                var intervalFunc = function() {
                    if (script.readyState !== "loaded" && script.readyState !== "complete") {
                        window.setTimeout( intervalFunc, 250 );
                    } else {
                        // it is loaded
                        func();
                    }
                };

                window.setTimeout( intervalFunc, 250 );

            } else {
                log("ERROR: We can't track when script is loaded");
            }

        } else {
            return func;
        }

    }
    
    function renderScreenshotToCanvas(e) {
        if (confirm("Generating the screenshot will take a few seconds during which the AdFuel Console will disappear.  Please do not do anything until the AdFuel Console reappears.")){
            if(e)
                e.preventDefault();
            var script;
            var options = {};
            var $this = {};
            $this.h2cCanvas = h2cCanvas;
            $this.h2cDone = h2cDone;
            $this.log = log; 
            var runH2c = function(){
                $this.log("Running HTML2Canvas...");
                _closeAdFuelConsole();
                for (var fIndex = 0; fIndex < _showTempAds.length; fIndex++){
                    var func = _showTempAds[fIndex];
                    func();
                }
                // _toggleOverlays();
                try {
                    options.useCORS = true;
                    options.proxy = "http://jl6727.turner.com:3050/api/images";
                    options.enableJavascript = true;
                    // options.onrendered = options.onrendered || function( canvas ) {
                    //     console.log("post-h2cCanvas:", h2cCanvas);
                    //     h2cCanvas = canvas;
                    //     h2cDone = true;
                    // };
                    window.html2canvas([ document.body ], options).then(function( canvas ) {
                        $this.h2cCanvas = canvas;
                        h2cCanvas = canvas;
                        $this.h2cDone = true;
                        // window.open(canvas.toDataURL(), '_blank');
                        // _toggleOverlays();
                        _openAdFuelConsole();
                        for (var fIndex = 0; fIndex < _hideTempAds.length; fIndex++){
                            var func = _hideTempAds[fIndex];
                            func();
                        }
                        document.querySelector("a[rel='creative review']").click();
                        var scrBtn = document.querySelector("#generate_screenshot");
                        var btnParent = scrBtn.parentNode;
                        btnParent.removeChild(scrBtn);
                        var prvBtn = document.createElement("button");
                        prvBtn.appendChild(document.createTextNode("Preview Screenshot"));
                        prvBtn.className = "btn btn-sm btn-primary";
                        prvBtn.onclick = function(e){
                            if (e){
                                e.preventDefault();
                            }
                            window.open(renderScreenshotToURL(), '_blank');
                        }
                        btnParent.appendChild(prvBtn);
                        _screenshotGenerated = true;
                    });
                } catch( e ) {
                    $this.h2cDone = true;
                    $this.log("Error in html2canvas: " + e.message);
                }
            };

            if ( window.html2canvas === undefined && script === undefined ) {
                // let's load html2canvas library while user is writing message
                script = document.createElement("script");
                script.src = "http://i.cdn.turner.com/ads/adfuel/modules/html2canvas.js";
                script.onerror = function() {
                    log("Failed to load html2canvas library, check that the path is correctly defined");
                };
                script.onload = scriptLoader(script, function() {
                    if (window.html2canvas === undefined) {
                        log("Loaded html2canvas, but library not found");
                        return;
                    }
                    window.html2canvas.logging = true;
                    runH2c();
                });
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(script, s);
            } else {
                // html2canvas already loaded, just run it then
                log("HTML2Canvas already loaded...");
                runH2c();
            }
        }
    }

    function renderScreenshotToURL(){
        if ( h2cCanvas !== undefined ) {
            var ctx = h2cCanvas.getContext("2d");
            var canvasCopy, copyCtx;
            var radius = 5;

            // to avoid security error break for tainted canvas
            try {
                // cache and return data
                // window.open(h2cCanvas.toDataURL(), '_blank');
                return ( h2cCanvas.toDataURL() );
            } catch( e ) {
                log("Error exporting canvas to DataURL...", e);
            }
        }        
    }
*/

    function _openAdFuelConsole() {
        _consoleOpenButtonHandler = null;

        var head = document.getElementsByTagName('head')[0];
        var body = document.getElementsByTagName('body')[0];

        var adFuelConsoleFiller = document.querySelector("div.adfuel-console-filler");
        var adFuelConsoleContainer = document.querySelector("div.adfuel-console");

        var openContainer = document.querySelector("div.adfuel-console-button-container");
        var closeContainer = document.querySelector("div#adfuel-close-console-button-container");

        openContainer.style.display = "none";
        closeContainer.style.display = "inline-block";
        adFuelConsoleFiller.style.display = "block";
        adFuelConsoleFiller.className = adFuelConsoleFiller.className + " resizable";
        adFuelConsoleContainer.style.display = "inline-block";
        adFuelConsoleContainer.style.resize = "both";
        adFuelConsoleContainer.className = adFuelConsoleContainer.className + " resizable";

        _buildAdFuelConsoleTabs(document.getElementsByClassName('adfuel-console-tab-link-container')[0]);
        _buildAdFuelConsoleContent(adFuelConsoleContainer);
        _showAdFuelConsoleContent(fullConsole ? 'configuration' : "creative review");

        return;
    }

    function _showAdFuelConsoleHelp() {
        window.open('http://docs.turner.com/display/DAD/AdFuel+Console+Documentation', 'ConsoleHelp');
    }

    function _toggleOverlays() {
        if (overlaysHidden) {
            var adElements = document.querySelectorAll('.adfuel-rendered');

            var len = adElements.length;

            for (i = 0; i < len; i++) {
                var pId = adElements[i].id;

                var p = document.getElementById(pId);
                p.style.position = 'relative';

                var width = p.firstElementChild.firstElementChild ? p.firstElementChild.firstElementChild.width : p.firstElementChild.width;
                var height = p.firstElementChild.firstElementChild ? p.firstElementChild.firstElementChild.height : p.firstElementChild.height;

                p.style.width = width + "px";
                p.style.height = height + "px";

                var pos = pId.substring(pId.indexOf('_') + 1);

                var d = document.createElement('div');
                var text = document.createElement('p');
                text.innerHTML = 'Pos: ' + pos + '<br />Width: ' + width + '<br />Height: ' + height;

                d.className = 'pos_overlay';
                d.style.position = 'absolute';
                d.style.top = '0';
                d.style.left = '0';
                d.style.right = '0';
                d.style.bottom = '0';
                d.style.textAlign = 'left';
                d.style.padding = '3px';
                d.style.fontFamily = 'Verdana';
                d.style.fontSize = '12px';
                d.style.fontWeight = 'normal';
                d.style.lineHeight = '12px';
                d.style.background = 'rgba(0,100,0,0.7)';
                d.style.color = '#ffffff';
                d.style.zIndex = '1000';

                d.appendChild(text);
                p.appendChild(d);

                //elements[i].style.border = "5px solid red";
            }
            overlaysHidden = false;
        } else {
            var o_els = document.querySelectorAll('.pos_overlay');
            var len = o_els.length;

            for (i = 0; i < len; i++) {
                o_els[i].parentNode.removeChild(o_els[i]);
            }
            overlaysHidden = true;
        }
    }

    var metricTypes = metricApi.getMetricTypes() || {};

    function capitalizeFirstLetter(string) {
        string = string.toString();
        var splitString = string.split(" ");
        var returnString = "";
        if (splitString.length > 1) {
            for (var x = 0; x < splitString.length; x++) {
                var temp = splitString[x].charAt(0).toUpperCase() + splitString[x].slice(1);
                splitString[x] = temp;
            }
            returnString = splitString.join(" ");
        } else {
            returnString = string.charAt(0).toUpperCase() + string.slice(1);
        }
        return returnString;
    }

    function _buildAdFuelConsoleTabs(container) {
        log("Building Console Tabs...", container);
        if (!container) {
            container = document.getElementsByClassName('adfuel-console-tab-link-container')[0];
        }
        if (!container) {
            log("Error: No tab link container.");
            return false;
        }
        var tabList = document.getElementsByClassName('adfuel-console-tab-list')[0];
        if (tabList) {
            var parent = tabList.parentNode;
            parent.removeChild(tabList);
        }

        var consoleTabList = document.createElement("ul");
        consoleTabList.className = "adfuel-console-tab-list";
        metricTypes = metricApi.getMetricTypes();
        metricTypes.sort();
        for (var i = 0; i < metricTypes.length; i++) {
            if (metricTypes[i].indexOf("_") != 0) {
                var consoleTabItem = document.createElement("li");
                //consoleTabItem.style.display = "inline-block";
                consoleTabItem.style.display = fullConsole ? "inline-block" : "none";
                if (metricTypes[i] == "creative review") {
                    consoleTabItem.style.display = "none";
                }
                consoleTabItem.style.marginLeft = "15px";
                consoleTabItem.style.marginRight = "auto";
                consoleTabItem.style.fontSize = ".8em";
                consoleTabItem.style.paddingBottom = "10px";
                var consoleTabLink = document.createElement("a");
                consoleTabLink.className = "afcTab";
                if (i == 0) consoleTabLink.className = "activeAFCTab afcTab";
                consoleTabLink.rel = metricTypes[i];

                function showContent(event) {
                    var tabname = event.srcElement ? event.srcElement.rel : event.target.rel;
                    _showAdFuelConsoleContent(tabname);
                }

                addEvent(consoleTabLink, 'click', showContent);
                consoleTabLink.appendChild(document.createTextNode(capitalizeFirstLetter(metricTypes[i])));
                consoleTabItem.appendChild(consoleTabLink);
                consoleTabList.appendChild(consoleTabItem);
            }
        }

        container.appendChild(consoleTabList);
    }

    function _buildAdFuelConsoleContainer(container) {

        var closeContainer = document.createElement("div");
        closeContainer.className = "adfuel-console-button-container";
        closeContainer.id = "adfuel-close-console-button-container";

        var actionButton = document.createElement('a');
        actionButton.className = "adfuel-console-button-plain";
        actionButton.id = "adfuel-close-console-button";

        var buttonIcon = document.createElement('i');
        buttonIcon.className = "adfuel-console-button-icon material-icons";
        buttonIcon.innerHTML = buttonIcon.innerText = "close";

        var resizeButton = document.createElement('a');
        resizeButton.className = "adfuel-console-button-plain";
        resizeButton.id = "adfuel-resize-console-button";

        var resizeIcon = document.createElement('i');
        resizeIcon.className = "adfuel-console-button-icon material-icons";
        resizeIcon.innerHTML = resizeIcon.innerText = "help_outline";

        var overlayButton = document.createElement('a');
        overlayButton.className = "adfuel-console-button-plain";
        overlayButton.id = "adfuel-show-overlay-button";

        var overlayIcon = document.createElement('i');
        overlayIcon.className = "adfuel-console-button-icon material-icons";
        overlayIcon.innerHTML = overlayIcon.innerText = "vignette";

        var consoleBanner = document.createElement("div");
        consoleBanner.id = "adfuel-console-banner";

        var consoleTabContainer = document.createElement("div");
        consoleTabContainer.className = "adfuel-console-tab-link-container";
        //_buildAdFuelConsoleTabs(consoleTabContainer);

        overlayButton.appendChild(overlayIcon);
        resizeButton.appendChild(resizeIcon);
        actionButton.appendChild(buttonIcon);
        closeContainer.appendChild(overlayButton);
        closeContainer.appendChild(resizeButton);
        closeContainer.appendChild(actionButton);

        _consoleCloseButtonHandler = addEvent(actionButton, 'click', _closeAdFuelConsole);
        _consoleHelpButtonHandler = addEvent(resizeButton, 'click', _showAdFuelConsoleHelp);
        _consoleOverlayButtonHandler = addEvent(overlayButton, 'click', _toggleOverlays);

        consoleBanner.appendChild(closeContainer);

        var title = document.createElement('div');
        title.className = "adfuel-console-banner-title";
        var titleText = fullConsole ? "AdFuel Console Tool" : "AdFuel Creative Review";
        title.appendChild(document.createTextNode(titleText));

        consoleBanner.appendChild(title);
        consoleBanner.appendChild(consoleTabContainer);

        container.appendChild(consoleBanner);

        return;
    }

    function _refreshAdFuelConsoleContent(changes) {
        if (!changes.type)
            return;
        if (_registeredTabs.indexOf(changes.type) < 0) {
            _buildAdFuelConsoleTabs();
            _registeredTabs.push(changes.type);
        }
        var panel = document.getElementById('adfuel-console-panel-' + changes.type.replace(/ /g, '-'));
        if (changes.type == "counts") {
            _buildCountsContent(panel);
        } else if (changes.type == "creative review"){
            _buildCreativeReviewForm(panel);
        } else if (changes.type == "timeline") {
            _addGridBox(panel);
        } else {
            _buildPanelContent(panel, true);
        }
    }

    function _showAdFuelConsoleContent(name) {
        var x;
        var allTabs = document.getElementsByClassName('afcTab');
        var activeTab = document.querySelector("li > a[rel='" + name + "']");
        for (x = 0; x < allTabs.length; x++) {
            allTabs[x].className = allTabs[x].className.replace("activeAFCTab", "");
        }
        activeTab.className = activeTab.className + " activeAFCTab";
        var activePanel = document.getElementById('adfuel-console-panel-' + name.replace(/ /g, '-'));
        if (!activePanel) {
            var panelName = name;
            var panel = document.createElement("div");
            var container = document.getElementsByClassName('adfuel-console')[0];
            panel.id = "adfuel-console-panel-" + panelName.replace(/ /g, '-');
            panel.style.display = "none";
            panel.className = "adfuel-console-panel adfuel-console-content";
            panel.style.width = "100%";
            panel.style.padding = "0";
            panel.style.margin = "0";
            panel.style.height = "80%";
            panel.style.minHeight = "250px";
            panel.style.overflowY = "auto";
            container.appendChild(panel);
            activePanel = panel;
        }
        if (name == "timeline") {
            var timelineData = _buildTimelineData();
            _addGridBox(activePanel, timelineData);
        }
        var allPanels = document.getElementsByClassName('adfuel-console-panel');
        for (x = 0; x < allPanels.length; x++) {
            allPanels[x].style.display = "none";
        }
        activePanel.style.display = "block";
        if (fullConsole && name == "configuration") {
            _showConsolePanelTabContent({
                target: {
                    dataset: {
                        panel: activePanel.id,
                        tab: "adfuel_initialization_options",
                        content: "adfuel-console-panel-configuration-tabContent-adfuel_initialization_options"
                    }
                }
            });
        }
    }

    function _buildAdFuelConsoleContent(container) {
        if (!container) {
            container = document.getElementsByClassName('adfuel-console')[0];
        }
        if (!container) {
            log("Error: No AdFuel-Console container.");
            return false;
        }
        for (var typeId = 0; typeId < metricTypes.length; typeId++) {
            if (metricTypes[typeId].indexOf("_") != 0) {
                var panelName = metricTypes[typeId];
                var panel = document.createElement("div");
                panel.id = "adfuel-console-panel-" + panelName.replace(/ /g, '-');
                panel.style.display = "none";
                panel.className = "adfuel-console-panel adfuel-console-content";
                panel.style.width = "100%";
                panel.style.padding = "0";
                panel.style.margin = "0";
                panel.style.height = "80%";
                panel.style.minHeight = "250px";
                container.appendChild(panel);

                // only show CR panel if not the full console
                if (!fullConsole && panelName != "creative review") { continue; }

                switch (panelName) {
                    case "creative review":
                        _buildCreativeReviewForm(panel);
                        break;
                    case "counts":
                        _buildCountsContent(panel);
                        break;
                    case "configuration":
                    case "modules":
                    case "page":
                    case "registries":
                    case "requests":
                    case "slots":
                        panel.style.display = "block";                        
                        _buildPanelContent(panel, true);
                        break;
                    case "timeline":
                        var timelineData = _buildTimelineData();
                        _addGridBox(panel, timelineData);
                        break;
                    default:
                        _buildPanelContent(panel, true);
                        break;
                }
            }
        }

    }

    function _addGridBox(container, data) {
        if (!container || !data) return;

        var gridBox = document.createElement("div");
        gridBox.id = "gridbox";
        gridBox.style.width = "100%";
        gridBox.style.height = "95%";
        gridBox.style.backgroundColor = "#ABABAB";
        gridBox.style.margin = "0";
        gridBox.style.padding = "0";
        gridBox.style.position = "relative";
        gridBox.style.top = "-12px";

        try {
            container.removeChild(gridBox);
        } catch (e) {}

        container.style.height = "90%";
        container.appendChild(gridBox);

        try {
            _timelineGrid = new dhtmlXGridObject('gridbox');
            _timelineGrid.setImagePath((document.location.protocol === 'https:' ? 'https:' : 'http:') + '//ssl.cdn.turner.com/ads/adfuel/modules/');
            gridBox.style.position = "relative";
            gridBox.style.top = "-12px";
            gridBox.style.left = "2px";
            _timelineGrid.setHeader("Name, Type, Timestamp, Start, End, Time From Previous, Time From Initial, Duration,");
            _timelineGrid.setInitWidths("350,100,200,200,200,150,150,100");
            _timelineGrid.setColAlign("left, left, left, left, left, left, left, left");
            // TODO: Figure out why column sorting is only working for the name
            //_timelineGrid.setColSorting("str, str, int, date, date, str");
            _timelineGrid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro");
            _timelineGrid.enableColumnAutoSize(true);
            _timelineGrid.enableDragAndDrop(false);
            _timelineGrid.init();
            _timelineGrid.clearAll();
            _timelineGrid.parse(data, "json");
        } catch (e) {}
    }

    function _showConsolePanelTabContent(e) {

        var target = e.target;
        var data = target.dataset;
        var panel = data.panel;
        var tab = data.tab;
        var content = data.content;
        var panelTabContents = document.querySelectorAll("div#" + panel + " .adfuel-console-panel-tab-content");
        var panelTabs = document.querySelectorAll("div#" + panel + " ul.nav-stacked li");
        var activeTab = document.querySelector("div#" + panel + " ul.nav-stacked li#" + data.tab.replace(/ /g, "_"));
        var x = 0;
        for (x = 0; x < panelTabContents.length; x++) {
            panelTabContents[x].style.display = "none";
        }
        for (x = 0; x < panelTabs.length; x++) {
            panelTabs[x].className = "";
        }
        if (activeTab) activeTab.className = activeTab.className + " active";
        var contentEl = document.getElementById(content);
        contentEl.style.display = "block";
        return false;
    }

    function _buildCountsContent(panel) {
        if (!panel) return;

        panel.innerHTML = "";
        var countsContainer = document.createElement("div");
        countsContainer.style.width = "100%";
        countsContainer.style.height = "100%";
        countsContainer.style.display = "inline-block";
        countsContainer.style.padding = "5px";
        countsContainer.style.margin = "0";

        var countList = document.createElement("ul");
        countList.className = "nav nav-pills nav-stacked";
        countList.style.listStyleType = "none";
        countList.style.margin = "0";
        countList.style.padding = "5px";
        countList.style.height = "100%";
        countList.style.minHeight = "250px";
        countList.style.overflow = "auto";

        var countNames = [];
        if (metricApi.metrics && metricApi.metrics.counts) {
            countNames = Object.getOwnPropertyNames(metricApi.metrics.counts);
        }

        for (var x = 0; x < countNames.length; x++) {
            var countListItem = document.createElement("li");
            countListItem.style.margin = "5px";
            countListItem.style.padding = "5px";
            countListItem.style.fontSize = "1em";
            countListItem.style.width = "15%";
            countListItem.style.display = "inline-block";
            countListItem.style['float'] = "left";
            countListItem.style.borderRight = "solid 1px #BCBCBC";
            countListItem.id = countNames[x].replace(/ /g, "_");
            countListItem.innerHTML = capitalizeFirstLetter(countNames[x].replace(/_/g, " "));
            var countListBadge = document.createElement("span");
            countListBadge.style['float'] = "right";
            countListBadge.className = "badge";
            countListBadge.style.width = "15%";
            countListBadge.innerHTML = metricApi.metrics.counts[countNames[x]];
            countListItem.appendChild(countListBadge);
            countList.appendChild(countListItem);
        }
        countsContainer.appendChild(countList);

        panel.appendChild(countsContainer);
    }

    function _buildTimelineData() {

        /* Sample Data Structure
         data={
         rows:[
         { id:1, data: ["A Time to Kill", "John Grisham", "100"]},
         { id:2, data: ["Blood and Smoke", "Stephen King", "1000"]},
         { id:3, data: ["The Rainmaker", "John Grisham", "-200"]}
         ]
         };
         */

        var browserEvents = ["connection_start", "document_request_start", "domContentLoaded", "dom_load_start", "domain_lookup_start", "fetch_start", "navigation_start", "window_load"];
        var adFuelEvents = ["_rendered", "adfuel_initialized", "building_gpt_slots", "dispatch_queue"];
        var dfpEvents = ["request_to_dfp"];
        var moduleEvents = ["_preQueue", "_postQueue", "_preDispatch", "_postDispatch", "_preRefresh", "_postRefresh"];
        var metrics = metricApi.metrics.timeline;
        var eventCategory = "";
        var timelineData = {
            rows: []
        };
        for (var metricEvent in metrics) {
            if (metrics.hasOwnProperty(metricEvent)) {
                if (browserEvents.indexOf(metricEvent) >= 0) {
                    eventCategory = "Browser";
                } else if (adFuelEvents.indexOf(metricEvent) >= 0 || metricEvent.indexOf("_rendered") > 0 || metricEvent.indexOf("building_gpt_slot_") >= 0) {
                    eventCategory = "AdFuel";
                } else if (dfpEvents.indexOf(metricEvent) >= 0) {
                    eventCategory = "DFP";
                } else {
                    for (var me = 0; me < moduleEvents.length; me++) {
                        if (metricEvent.indexOf(moduleEvents[me]) > 0) {
                            eventCategory = "Module";
                        }
                    }
                    if (eventCategory == "")
                        eventCategory = "UNKNOWN";
                }

                for (var x = 0; x < metrics[metricEvent].length; x++) {
                    var actualMetric = metrics[metricEvent][x];
                    var datePieces, dateDate, dateTime;
                    if (actualMetric.timestamp) {
                        var actualTime = new Date();
                        actualTime.setTime(actualMetric.timestamp);
                        datePieces = actualTime.toISOString().split("T");
                        dateDate = datePieces[0];
                        dateTime = datePieces[1].replace("Z", "");
                        actualTime = dateTime;
                        var namePieces = metricEvent.split("_");
                        for (var x = 0; x < namePieces.length; x++) {
                            namePieces[x] = capitalizeFirstLetter(namePieces[x]);
                        }
                        var metricName = namePieces.join(" ");
                        var eventData = {
                            id: metricEvent + "_" + x,
                            data: [
                                metricName,
                                eventCategory,
                                metrics[metricEvent][0].timestamp,
                                actualTime,
                                "",
                                "",
                                "",
                                0
                            ]
                        };
                        timelineData.rows.push(eventData);
                    } else if (actualMetric.start && actualMetric.end) {
                        var actualStartTime = new Date();
                        actualStartTime.setTime(actualMetric.start);
                        datePieces = actualStartTime.toISOString().split("T");
                        dateDate = datePieces[0];
                        dateTime = datePieces[1].replace("Z", "");
                        actualStartTime = dateTime;
                        var actualEndTime = new Date();
                        actualEndTime.setTime(actualMetric.end);
                        datePieces = actualEndTime.toISOString().split("T");
                        dateDate = datePieces[0];
                        dateTime = datePieces[1].replace("Z", "");
                        actualEndTime = dateTime;
                        var duration = (parseInt(actualMetric.end) - parseInt(actualMetric.start)) + "ms";
                        var namePieces = metricEvent.split("_");
                        for (var x = 0; x < namePieces.length; x++) {
                            namePieces[x] = capitalizeFirstLetter(namePieces[x]);
                        }
                        var metricName = namePieces.join(" ");
                        var eventData = {
                            id: metricEvent + "_" + x,
                            data: [
                                metricName,
                                eventCategory,
                                metrics[metricEvent][0].start,
                                actualStartTime,
                                actualEndTime,
                                "",
                                "",
                                duration
                            ],
                            endStamp: actualMetric.end
                        };
                        timelineData.rows.push(eventData);
                    } else if (actualMetric.start) {
                        var actualStartTime = new Date();
                        actualStartTime.setTime(actualMetric.start);
                        datePieces = actualStartTime.toISOString().split("T");
                        dateDate = datePieces[0];
                        dateTime = datePieces[1].replace("Z", "");
                        actualStartTime = dateTime;
                        var namePieces = metricEvent.split("_");
                        for (var x = 0; x < namePieces.length; x++) {
                            namePieces[x] = capitalizeFirstLetter(namePieces[x]);
                        }
                        var metricName = namePieces.join(" ");
                        var eventData = {
                            id: metricEvent + "_" + x,
                            data: [
                                metricName,
                                eventCategory,
                                metrics[metricEvent][0].start,
                                actualStartTime,
                                "",
                                "",
                                "",
                                ""
                            ]
                        };
                        timelineData.rows.push(eventData);
                    }
                }
            }
        }
        timelineData.rows.sort(compare);
        var initialTimestamp = timelineData.rows[0].data[2];
        for (var rowIndex = 1; rowIndex < timelineData.rows.length; rowIndex++) {
            var row = timelineData.rows[rowIndex];
            var previousTimestamp = timelineData.rows[rowIndex - 1].data[2];
            row.data[5] = row.data[2] - previousTimestamp + "ms";
            row.data[6] = row.data[2] - initialTimestamp + "ms";
        }
        var lastRow = timelineData.rows[timelineData.rows.length - 1];
        var latestTimestamp = lastRow.endStamp ? lastRow.endStamp : lastRow.data[2];
        var elapsedTimeToDate = latestTimestamp - initialTimestamp + "ms";
        var eventData = {
            id: 'elapsed_time',
            data: [
                "Total Elapsed Time",
                "",
                "",
                "",
                "",
                "",
                "",
                elapsedTimeToDate
            ]
        };
        timelineData.rows.push(eventData);
        return timelineData;
    }

    function _buildPanelTabs(panel, tabNames) {
        var tabContainer = document.createElement("div");
        tabContainer.style.width = "27%";
        tabContainer.style.maxWidth = "400px";
        tabContainer.style.height = "100%";
        tabContainer.style.display = "inline-block";
        tabContainer.style.margin = "0";
        tabContainer.style['float'] = "left";
        tabContainer.style.borderRight = "solid 1px #0052e7";

        panel.appendChild(tabContainer);

        var tabList = document.createElement("ul");
        tabList.className = "nav nav-pills nav-stacked";
        tabList.style.listStyleType = "none";
        tabList.style.margin = "0";
        tabList.style.padding = "5px";
        tabList.style.height = "100%";
        tabList.style.minHeight = "250px";
        tabList.style.overflow = "auto";

        for (var x = 0; x < tabNames.length; x++) {
            if (!isNaN(parseInt(tabNames[x]))) {
                tabNames[x] = "request_" + tabNames[x];
            }
            var contentContainer = document.createElement("div");
            contentContainer.id = panel.id + "-tabContent-" + tabNames[x].replace(/ /g, "_");
            contentContainer.className = "adfuel-console-panel-tab-content";
            contentContainer.style.width = "72%";
            contentContainer.style.height = "100%";
            contentContainer.style.display = "inline-block";
            contentContainer.style.padding = "0";
            contentContainer.style.margin = "5px";
            contentContainer.style['float'] = "left";
            if (x != 0) {
                contentContainer.style.display = "none";
            }

            var tabListItem = document.createElement("li");
            if (x == 0) {
                tabListItem.className = tabListItem.className + " active";
            }
            tabListItem.id = tabNames[x].replace(/ /g, "_");
            var tabListAnchor = document.createElement("a");
            tabListAnchor.rel = tabNames[x];
            tabListAnchor.dataset.panel = panel.id;
            tabListAnchor.dataset.tab = tabNames[x];
            tabListAnchor.dataset.content = contentContainer.id;
            tabListAnchor.innerHTML = capitalizeFirstLetter(tabNames[x].replace(/_/g, " "));

            tabListItem.appendChild(tabListAnchor);
            tabList.appendChild(tabListItem);

            _buildTabContent(contentContainer, tabNames[x]);

            addEvent(tabListAnchor, 'click', _showConsolePanelTabContent);
            panel.appendChild(contentContainer);
        }

        tabContainer.appendChild(tabList);
    }

    function _buildCreativeReviewForm(panel){
        if (!panel) return;

        var firstPanelElements = [
            {
                type: "input",
                name: "Name",
                value: "",
                label: "Your Name",
                required: true
            },
            {
                type: "input",
                name: "Email",
                value: "",
                label: "Your Email",
                required: true
            },
            {
                type: "fileUpload",
                name: "Screenshot",
                value: "",
                label: "Upload Screenshot",
                required: false
            }
        ];

        var secondPanelElements = [
            {
                type: "listLabel",
                name: "Reason",
                label: "What is the issue you are reporting?",
                required: false
            },
            {
                type: "list",
                name: "Issue(s)",
                //label: "Why are you reporting this ad?",
                required: false,
                items: [
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "block list violation",
                        label: "Ad violates site block list",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "video plays in display ad",
                        label: "Video plays in display ad",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "ad disrupts content",
                        label: "Ad disrupts content",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "ad incorrectly sized",
                        label: "Ad incorrectly sized",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "download initiated",
                        label: "Ad attempts to initiate download",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "blank ad",
                        label: "Blank ad",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "low quality",
                        label: "Low-quality ad",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "audio autostarts",
                        label: "Audio starts automatically",
                        required: false
                    },
                    {
                        type: "checkbox",
                        name: "Issue",
                        value: "broken ad",
                        label: "Broken ad",
                        required: false
                    }
                ]
            }
        ];

        var thirdPanelElements = [
            {
                type: "textarea",
                name: "Comments",
                label: "Please describe the issue you are reporting",
                required: true,
            }
        ];

        function buildPanel(panel, container, elements){
            for (var i= 0; i < elements.length; i++) {
                var item = elements[ i ];
                switch( item.type ) {
                    case "textarea":
                        var textareaLabel = element("div", item.label + ":" + (( item.required === true ) ? " *" : ""));
                        textareaLabel.style.fontWeight = "bolder";
                        panel.appendChild( textareaLabel );
                        panel.appendChild( ( item.element = document.createElement("textarea")) );
                        item.element.name = item.name || "";
                        if (item.required === true) { item.element.attributes.required = "required"; }
                        item.element.width = "95%";
                        item.element.cols = "60";
                        item.element.rows = "5";
                        break;
                    case "input":
                        var inputLabel = element("div", item.label + ": " + ((item.required === true) ? " *" : ""));
                        inputLabel.className = inputLabel.className + " fixed";
                        inputLabel.style.fontWeight = "bolder";
                        inputLabel.style.marginRight = "5px";
                        panel.appendChild( inputLabel );
                        item.element = document.createElement("input");
                        item.element.name = item.name || "";
                        if (item.required === true) { item.element.setAttribute("required", "required"); }
                        panel.appendChild( item.element );
                        var clearDiv = document.createElement("div");
                        clearDiv.style.clear = "both";
                        panel.appendChild( clearDiv );
                        panel.appendChild(document.createElement("br"));
                        break;
                    case "listLabel":
                        var listLabel = element("div", item.label + ":" + (( item.required === true ) ? " *" : ""));
                        listLabel.style.fontWeight = "bolder";
                        panel.appendChild( listLabel );
                        break;
                    case "list":
                        var listEl = document.createElement("div");
                        for (var x = 0; x < item.items.length; x++){
                            var listItem = item.items[x];
                            var checkboxWrapper = checkbox( listItem.name, listItem.value, listItem.label );
                            var checkboxEl = checkboxWrapper.firstChild;
                            item.items[x].element = checkboxEl;
                            listEl.appendChild( checkboxWrapper );
                        }
                        panel.appendChild( listEl );
                        var clearDiv = document.createElement("div");
                        clearDiv.style.clear = "both";
                        panel.appendChild( clearDiv );
                        panel.appendChild(document.createElement("br"));
                        break;
                    case "select":
                        panel.appendChild( element("div", item.label + ": " + ((item.required === true) ? " *" : "")) );
                        panel.appendChild( ( item.element = document.createElement("select")) );
                        break;
                    case "button":
                        panel.appendChild( button(item) );
                        break;
                    case "fileUpload":
                        if (fileUploadOK) {
                            var inputLabel = element("div", item.label + ": " + ((item.required === true) ? " *" : ""));
                            inputLabel.className = inputLabel.className + " fixed";
                            inputLabel.style.fontWeight = "bolder";
                            inputLabel.style.marginRight = "5px";
                            panel.appendChild(inputLabel);
                            item.element = document.createElement("input");
                            item.element.name = item.name || "";
                            item.element.type = "file";
                            item.element.accept = "image/*";
                            panel.appendChild(item.element);
                            var clearDiv = document.createElement("div");
                            clearDiv.style.clear = "both";
                            panel.appendChild(clearDiv);
                            panel.appendChild(document.createElement("br"));
                        }
                        break;
                }
            } 
            container.appendChild(panel);
        }

        panel.innerHTML = "";
        panel.style.padding = "0";
        var formContainer = document.createElement("div");
        formContainer.style.width = "100%";
        formContainer.style.height = "100%";
        formContainer.style.display = "inline-block";
        formContainer.style.padding = "5px";
        formContainer.style.margin = "0";

        var header = document.createElement("div");
        header.style.width = "99%";
        header.style.borderBottom = "solid 1px black";

        var headerText = document.createElement("p");
        headerText.style.padding = "0";
        headerText.style.fontWeight = "bolder";
        headerText.style.margin = "auto";
        headerText.innerHTML = "You can report an issue on this page by submitting the information below. A copy of the report will be sent to the email address specified.<br /><span style='color: red'>* Denotes required fields.</span>";

        header.appendChild(headerText);

        formContainer.appendChild(header);

        var formElement = document.createElement("form");
        formElement.style.padding = "0";
        formElement.style.margin = "0";

        formContainer.appendChild(formElement);    

        var panel1 = document.createElement("div");
        panel1.style.width = "25%";
        panel1.style.height = "60%";
        panel1.style.display = "inline-block";
        panel1.style.padding = "5px 5px";
        panel1.style.margin = "0";
        panel1.style['float'] = "left";

        buildPanel(panel1, formElement, firstPanelElements);

        var panel2 = document.createElement("div");
        panel2.style.width = "39%";
        panel2.style.height = "60%";
        panel2.style.display = "inline-block";
        panel2.style.padding = "5px 5px";
        panel2.style.margin = "0";
        panel2.style['float'] = "left";

        buildPanel(panel2, formElement, secondPanelElements);

        var panel3 = document.createElement("div");
        panel3.style.width = "32%";
        panel3.style.height = "60%";
        panel3.style.display = "inline-block";
        panel3.style.padding = "5px 5px";
        panel3.style.margin = "0";
        panel3.style['float'] = "left";

        buildPanel(panel3, formElement, thirdPanelElements);

        var clearDiv = document.createElement("div");
        clearDiv.style.clear = "both";
        formContainer.appendChild(clearDiv);

        var footer = document.createElement("div");
        footer.style.width = "99%";
        footer.style.height = "10%";
        footer.style.padding = "0";
        footer.style.margin = "0";

        var submitContainer = document.createElement("div");
        submitContainer.style.display = "inline-block";
        submitContainer.style['float'] = "right";

        var submitMessage = document.createElement("div");
        submitMessage.style.cssText = "float: left; margin-right: 14px; margin-top: 7px; color: #ff0000; font-style: italic; font-weight: bold; font-size: 12px;";

        function setSubmitMessage (message) {
            // set the message
            submitMessage.innerHTML = message;
            //clear the message after 3 sec.
            window.setTimeout(function(){
                submitMessage.innerHTML = '';
            }, 3000);
        };

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

        // submit confirmation alert box
        var confirmAlert = document.createElement("div");
        confirmAlert.className = "cr-confirm-alert";
        confirmAlert.style.visibility = "hidden";
        var confirmAlertText = document.createElement("div");
        confirmAlertText.className = "cr-confirm-alert-text";

        var today = new Date();
        var dayOfWeek = today.getDay();
        var hour = today.getHours();
        var offHours = dayOfWeek == 0 || dayOfWeek == 6 || hour < 8 || hour > 17;
        var responseTime = offHours ? "2 hours outside of" : "1 hour during";

        confirmAlertText.innerHTML = "Your report has been successfully submitted to Ad Operations. If you do not get a response within " + responseTime + " normal business hours (8am - 6pm Eastern), further contact information can be found in the confirmation email that has been sent to you.";
        confirmAlert.appendChild(confirmAlertText);
        confirmAlert.appendChild(document.createElement("br"));
        var confirmAlertBtn = document.createElement("button");
        confirmAlertBtn.className = "btn btn-primary btn-sm";
        confirmAlertBtn.innerHTML = "OK";
        confirmAlertBtn.onclick = function(e) {
            e.preventDefault();
            _closeAdFuelConsole();
            confirmAlert.style.visibility = "hidden";
            // clear all inputs
            formElement.reset();
        };
        confirmAlert.appendChild(confirmAlertBtn);
        panel.appendChild(confirmAlert);

        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.className = "btn btn-primary btn-sm cr-confirm-alert-btn";
        submitButton.onclick = function(e){
            e.preventDefault();

            // validate inputs
            if (formElement.elements["Name"].value == '' ||
                formElement.elements["Comments"].value == '' ||
                formElement.elements["Email"].value == '') {
                setSubmitMessage("Please fill out all required fields.");
                return;
            } else if (!validateEmail(formElement.elements["Email"].value)) {
                setSubmitMessage("Email address is not valid.");
                return;
            } else {
                submitCreativeReviewForm(formElement, function () {
                    //alert("Form Submitted!");
                    confirmAlert.style.visibility = "visible";
                });
            }
        };

        submitContainer.appendChild(submitMessage);
        submitContainer.appendChild(submitButton);
        footer.appendChild(submitContainer);

        formContainer.appendChild(footer);

        panel.insertBefore(formContainer, confirmAlert);
    }

    var _appliedTargeting = [];

    function parseMessage(msg){
        var data = {};
        if (msg.data.indexOf("{") == 0 && msg.data.indexOf("googMsgType") < 0){
            try{
                data = JSON.parse(msg.data);
                if (data.pos){
                    // console.log("CREATEREV MESSAGE: ", {data: data});
                }
            }catch(err){
                // console.error("CREATEREV MESSAGE: ", err, msg);
                return;
            }
        }
        if (data.divId){
            if (Array.isArray(data.divId) && data.divId.length > 1){
                data.divId = data.divId[0];
            }
            if (data.filteredSources.length > 0){
                for (var z = 0; z < data.filteredSources.length; z++){
                    var filteredSource = data.filteredSources[z];
                    if (filteredSource.indexOf("javascript:") < 0){
                        var showTempAd = function(){
                            var imgSrc = filteredSource;
                            var imgEl = document.createElement('img');
                            var adWrapper = document.getElementById(data.divId);
                            var childIframes = document.querySelectorAll("div[id='"+data.divId+"'] div[id^='google_ads_iframe']");
                            imgEl.className = "adfuel-temp-image";
                            imgEl.src = imgSrc;
                            if (imgSrc.indexOf("http://") == 0 || imgSrc.indexOf("https://") == 0 || imgSrc.indexOf("//") == 0){
                                adWrapper.appendChild(imgEl);
                                for(var x = 0; x < childIframes.length; x++){
                                    var iframe = childIframes[x];
                                    iframe.style.display = "none";
                                }
                            }
                        };
                        var hideTempAd = function(){
                            var adWrapper = document.getElementById(data.divId);
                            var childImages = document.querySelectorAll("div[id='"+data.divId+"'] img.adfuel-temp-image");
                            var childIframes = document.querySelectorAll("div[id='"+data.divId+"'] div[id^='google_ads_iframe']");
                            for (var y = 0; y < childImages.length; y++){
                                var childImage = childImages[y];
                                try{
                                    adWrapper.removeChild(childImage);
                                }catch(err){
                                }
                            }
                            for(var x = 0; x < childIframes.length; x++){
                                var iframe = childIframes[x];
                                iframe.style.display = "block";
                            }                    
                        };
                        _showTempAds.push(showTempAd);
                        _hideTempAds.push(hideTempAd);
                    }
                }
            }
            metricApi.addMetric({type: 'creatives', id: data.divId, data: data});
        }
    }

    function serialize(form) {
        if (!form || form.nodeName !== "FORM") {
            return;
        }
        var i, j, q = [], t= {};
        var screenshotFile = null;
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "") {
                continue;
            }
            switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                case 'text':
                case 'hidden':
                case 'password':
                case 'button':
                case 'reset':
                case 'submit':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    t[form.elements[i].name] = form.elements[i].value;
                    break;
                case 'file':
                    if (form.elements[i].files.length > 0) {
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        t[form.elements[i].name] = form.elements[i].files[0]; // FileList object
                        t[form.elements[i].name + "FileName"] = t[form.elements[i].name].name;
                    }
                    break;
                case 'checkbox':
                    if (form.elements[i].checked) {
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        // to support multiple checkboxes in a group, store the values as an array
                        if (t[form.elements[i].name]) {
                            t[form.elements[i].name].push(form.elements[i].value);
                        } else {
                            t[form.elements[i].name] = [form.elements[i].value];
                        }
                    }
                    break;
                case 'radio':
                    if (form.elements[i].checked) {
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        t[form.elements[i].name] = form.elements[i].value;
                    }						
                    break;
                }
                break;			 
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                t[form.elements[i].name] = form.elements[i].value;
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                case 'select-one':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    t[form.elements[i].name] = form.elements[i].value;
                    break;
                case 'select-multiple':
                    for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                        if (form.elements[i].options[j].selected) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            t[form.elements[i].name] = form.elements[i].options[j].value;
                        }
                    }
                    break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                case 'reset':
                case 'submit':
                case 'button':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    t[form.elements[i].name] = form.elements[i].value;
                    break;
                }
                break;
            }
        }
        // return q.join("&");
        return t;
    }

    /*
    function retrieveFormData(form){
        if ( this._data !== undefined ) {
            // return cached value
            return this._data;
        }
        var i = 0, len = form.elements.length, item, data = {};
        for (; i < len; i++) {
            item = form.elements[ i ];
            if (item.items){
                var j = 0, innerLen = item.items.length, innerItem;
                for(; j < innerLen; j++){
                    innerItem = item.items[j];
                    if (innerItem.element.checked){
                        data[innerItem.name] = data[innerItem.name] ? data[innerItem.name] + ", " + innerItem.element.value : innerItem.element.value;
                    }
                }
            }else {
                if (item.element)
                    data[item.name] = item.element.value;
            }
        }
        // cache and return data
        return ( this._data = data );        
    }

    */

    function submitCreativeReviewForm(form, callback){
/*
        console.log("h2cCanvas:", h2cCanvas);
        if (!_screenshotGenerated){
            if (!confirm("You have not yet generated the screenshot. Are you sure you want to submit the form?")){      
                return;
            }
        }      
*/

        var data = serialize(form);

        //var canvasData = h2cCanvas ? renderScreenshotToURL() : "";
        // window.open(data[1], '_blank');

        var processData = function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    callback((xhr.status === 200));
                }
            };

            /*
             function b64toBlob(b64Data, contentType, sliceSize) {
             contentType = contentType || '';
             sliceSize = sliceSize || 512;

             var byteCharacters = atob(b64Data);
             var byteArrays = [];

             for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
             var slice = byteCharacters.slice(offset, offset + sliceSize);

             var byteNumbers = new Array(slice.length);
             for (var i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
             }

             var byteArray = new Uint8Array(byteNumbers);

             byteArrays.push(byteArray);
             }

             var blob = new Blob(byteArrays, {type: contentType});
             return blob;
             }
             */

            var formBlob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
            //var screenshotBlob = b64toBlob(canvasData.replace("data:image/png;base64,",""), "image/png", 512);
            var requestBlob = new Blob([JSON.stringify(window.AdFuel.requestScriptText, null, 2)], {type: 'application/json'});
            var registryBlob = new Blob([JSON.stringify(window.AdFuel.registry, null, 2)], {type: 'application/json'});
            var browserData = {
                availHeight: screen.availHeight,
                availLeft: screen.availLeft,
                availTop: screen.availTop,
                availWidth: screen.availWidth,
                colorDepth: screen.colorDepth,
                height: screen.height,
                orientation: {
                    angle: screen.orientation.angle,
                    onchange: screen.orientation.onchange,
                    type: screen.orientation.type
                },
                pixelDepth: screen.pixelDepth,
                width: screen.width
            };
            var slotData = JSON.parse(JSON.stringify(window.AdFuel.metrics.slots));
            for (var x in slotData) {
                if (slotData.hasOwnProperty(x)) {
                    delete slotData[x].build_end;
                    delete slotData[x].build_start;
                    delete slotData[x].display;
                    delete slotData[x].queued;
                    delete slotData[x].render_start;
                    delete slotData[x].render_end;
                }
            }
            var creativeBlob = new Blob([JSON.stringify(window.AdFuel.metrics.creatives, null, 2)], {type: 'application/json'});
            var slotsBlob = new Blob([JSON.stringify(slotData, null, 2)], {type: 'application/json'});
            var cookiesBlob = new Blob([JSON.stringify(document.cookie, null, 2)], {type: 'application/json'});
            var browserBlob = new Blob([JSON.stringify(browserData, null, 2)], {type: 'application/json'});
            var timelineBlob = new Blob([JSON.stringify(window.AdFuel.metrics.timeline, null, 2)], {type: 'application/json'});
            var urlBlob = new Blob([JSON.stringify(window.location.href, null, 2)], {type: 'application/json'});

            var fdata = new FormData();
            fdata.append('formData', formBlob);
            //fdata.append('screenshot', screenshotBlob);
            fdata.append('request', requestBlob);
            fdata.append('registry', registryBlob);
            fdata.append('slots', slotsBlob);
            fdata.append('creative', creativeBlob);
            fdata.append('cookies', cookiesBlob);
            fdata.append('browser', browserBlob);
            fdata.append('timeline', timelineBlob);
            fdata.append('url', urlBlob);

            var url = 'http://ams-adfuel-services.prod.services.ec2.dmtio.net:80/api/email';
            if (url.indexOf('adfuel-services-host') != -1) { // for testing
                url = 'http://localhost:3050/api/email';
            }
            xhr.open("POST", url, true);
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xhr.setRequestHeader("Content-type", "multipart/mixed; boundary=AaB03x");
            xhr.send(fdata);
            // xhr.send( "formData=" + encodeURIComponent( window.JSON.stringify( data[0] ) ) );
            // xhr.send( "captureData=" + encodeURIComponent( window.JSON.stringify( data[1] ) ) );
            // xhr.send( "registryData=" + encodeURIComponent( window.JSON.stringify( data[2] ) ) );
            //metricApi.addMetric({type: 'modules', id: 'Creative Review', data: { reported_information: data[0], screenshot: data[1] } } );
            metricApi.addMetric({type: 'modules', id: 'Creative Review', data: {reported_information: data[0]}});
        };

        if (data.Screenshot) {
            // Only process image files.
            if (!data.Screenshot.type.match('image.*')) {
                processData();
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    data.Screenshot = e.target.result;
                    processData();
                };
            })(data.Screenshot);

            // Read in the image file as a data URL.
            reader.readAsDataURL(data.Screenshot);
        } else {
            processData();
        }
    };

    function _buildTabContent(container, tabName, index) {
        var collectionContainer = document.createElement("div");
        //collectionContainer.className = "adfuel-console-collection-container";
        if (tabName.indexOf("request_") == 0) {
            tabName = tabName.replace("request_", "");
        }
        var collectionId = container.id.split("-")[3];
        var collection = metricApi.metrics[collectionId][tabName];
        var collectionItems = document.createElement("ul");
        collectionItems.id = "adfuel_console_" + collectionId + "_items";
        //collectionItems.className = "adfuel-console-collection-list";
        collectionItems.style.listStyleType = "none";
        collectionItems.style.padding = "0";
        collectionItems.style.margin = "0";
        for (var collectionItemName in collection) {
            if (collection.hasOwnProperty(collectionItemName)) {
                var collectionItem = collection[collectionItemName];
                if (!isNaN(parseInt(collectionItemName))) {
                    collectionItemName = "request_" + (parseInt(collectionItemName) + 1);
                }
                var collectionListItem = document.createElement("li");
                collectionListItem.id = "adfuel-console-" + collectionId + "-" + collectionItemName;
                collectionListItem.style.display = "block";
                //collectionListItem.className = "adfuel-console-collection-list-item";

                var collectionListItemContainer = document.createElement('div');
                //collectionListItemContainer.className = "adfuel-console-collection-list-item-container";

                var collectionListItemLabelHeading = document.createElement("span");
                collectionListItemLabelHeading.style.display = "inline-block";
                collectionListItemLabelHeading.style.width = "25%";
                collectionListItemLabelHeading.style.minWidth = "150px";
                collectionListItemLabelHeading.style.textAlign = "left";
                collectionListItemLabelHeading.style.margin = "0";
                collectionListItemLabelHeading.style.padding = "0";
                collectionListItemLabelHeading.style.paddingRight = "10px";
                collectionListItemLabelHeading.style['float'] = "left";
                collectionListItemLabelHeading.style.fontWeight = "bolder";
                collectionListItemLabelHeading.style.borderBottom = "solid 1px #BCBCBC";
                collectionListItemLabelHeading.innerHTML = capitalizeFirstLetter(collectionItemName.replace(/_/g, " ") + ": ");

                collectionListItemContainer.appendChild(collectionListItemLabelHeading);

                if (collectionItem == null) {
                    collectionItem = "N/A";
                } else if (!collectionItem) {
                    collectionItem = "False";
                }

                var collectionItemDetailFields = Object.getOwnPropertyNames(collectionItem);
                var collectionType = typeof collectionItem;


                if (collectionType == "string" || collectionType == "boolean" || collectionType == "number" || (Array.isArray(collectionItem) && collectionItem.length == 1)) {
                    var propName = "";
                    var prop;
                    var isURL = false;
                    if (Array.isArray(collectionItem)) {
                        isURL = isValidURL(collectionItem[0]);
                        propName = isURL ? collectionItem[0] : capitalizeFirstLetter(collectionItem[0]);
                        prop = collectionItem[0];
                    } else {
                        isURL = isValidURL(collectionItem);
                        propName = isURL ? collectionItem : capitalizeFirstLetter(collectionItem);
                        prop = collectionItem;
                    }

                    var propSpan = document.createElement("div");
                    propSpan.style.margin = "0";
                    propSpan.style.padding = "0";
                    propSpan.style.display = "block";
                    propSpan.style.width = "65%";
                    propSpan.style.maxWidth = "800px";
                    propSpan.style['float'] = "left";
                    propSpan.style.borderBottom = "solid 1px #BCBCBC";
                    propSpan.style.textOverflow = "ellipsis";
                    propSpan.style.whiteSpace = "nowrap";
                    propSpan.style.overflow = "hidden";

                    if (isURL) {
                        var propAnchor = document.createElement("a");
                        propAnchor.href = propName;
                        propAnchor.target = "_blank";
                        propAnchor.title = propName;
                        propAnchor.appendChild(document.createTextNode(propName));
                        propSpan.appendChild(propAnchor);
                    } else {
                        propSpan.appendChild(document.createTextNode(propName));
                    }

                    collectionListItemContainer.appendChild(propSpan);

                    var clearEl = document.createElement("div");
                    clearEl.style.clear = "both";
                    collectionListItemContainer.appendChild(clearEl);

                } else if (Array.isArray(collectionItem)) {
                    var collectionDetailListContainer = document.createElement("div");
                    collectionDetailListContainer.style.width = "65%";
                    collectionDetailListContainer.style.margin = "0";
                    collectionDetailListContainer.style.position = "relative";
                    collectionDetailListContainer.style['float'] = "left";
                    collectionDetailListContainer.style.textOverflow = "ellipsis";
                    collectionDetailListContainer.style.whiteSpace = "nowrap";
                    collectionDetailListContainer.style.overflowX = "hidden";
                    var collectionDetailList = document.createElement("ul");
                    collectionDetailList.style.listStyleType = "none";
                    collectionDetailList.style.margin = "0";
                    collectionDetailList.style.padding = "0";
                    for (var x = 0; x < collectionItem.length; x++) {
                        var detailListItem = document.createElement("li");
                        detailListItem.style.marginLeft = "0";
                        detailListItem.style.paddingLeft = "0";
                        detailListItem.style.borderBottom = "solid 1px #BCBCBC";
                        detailListItem.style.margin = "0";
                        detailListItem.style.padding = "0";
                        detailListItem.style.display = "block";
                        detailListItem.style.width = "100%";
                        detailListItem.style.maxWidth = "800px";
                        detailListItem.style['float'] = "left";
                        detailListItem.style.borderBottom = "solid 1px #BCBCBC";
                        detailListItem.style.textOverflow = "ellipsis";
                        detailListItem.style.whiteSpace = "nowrap";
                        detailListItem.style.overflow = "hidden";
                        var isURL = isValidURL(collectionItem[x]);
                        var propName = "";
                        if (isURL) {
                            propName = collectionItem[x];
                            var propAnchor = document.createElement("a");
                            propAnchor.href = propName;
                            propAnchor.target = "_blank";
                            propAnchor.title = propName;
                            propAnchor.appendChild(document.createTextNode(propName));
                            detailListItem.appendChild(propAnchor);
                        } else {
                            propName = capitalizeFirstLetter(collectionItem[x]);
                            detailListItem.appendChild(document.createTextNode(propName));
                        }
                        collectionDetailList.appendChild(detailListItem);
                    }
                    collectionDetailListContainer.appendChild(collectionDetailList);
                    collectionListItemContainer.appendChild(collectionDetailListContainer);
                    var clearEl = document.createElement("div");
                    clearEl.style.clear = "both";
                    collectionListItemContainer.appendChild(clearEl);
                } else {
                    var collectionDetailListContainer = document.createElement("div");
                    collectionDetailListContainer.style.width = "65%";
                    collectionDetailListContainer.style.maxWidth = "800px";
                    collectionDetailListContainer.style.margin = "0";
                    collectionDetailListContainer.style.position = "relative";
                    collectionDetailListContainer.style.left = "5px";
                    //collectionDetailListContainer.style['float'] = "right";
                    collectionDetailListContainer.style.borderBottom = "solid 1px #BCBCBC";
                    collectionDetailListContainer.style.textOverflow = "ellipsis";
                    collectionDetailListContainer.style.whiteSpace = "nowrap";
                    collectionDetailListContainer.style.overflowX = "hidden";
                    var collectionDetailList = document.createElement("ul");
                    collectionDetailList.style.listStyleType = "none";
                    collectionDetailList.style.margin = "0";
                    collectionDetailList.style.padding = "0";
                    for (var x = 0; x < collectionItemDetailFields.length; x++) {
                        var detailListItem = document.createElement("li");
                        detailListItem.style.padding = "0";
                        detailListItem.style.margin = "0";
                        var isURL = isValidURL(collectionItemDetailFields[x]);
                        var propName = "";
                        if (isURL) {
                            propName = collectionItemDetailFields[x];
                        } else {
                            propName = capitalizeFirstLetter(collectionItemDetailFields[x]);
                        }
                        var value = collectionItem[collectionItemDetailFields[x]];
                        if (typeof value !== "undefined") {
                            var propLabel = document.createElement("label");
                            propLabel.style.width = "25%";
                            propLabel.appendChild(document.createTextNode(propName + ": "));
                            detailListItem.appendChild(propLabel);
                            var valueType = typeof value;
                            if (valueType == "object") {
                                if (Array.isArray(value)) {
                                    value = value.join(", ");
                                } else {
                                    value = JSON.stringify(value);
                                }
                            }
                            var propSpan = document.createElement("span");
                            propSpan.title = value;
                            propSpan.appendChild(document.createTextNode(value));
                            detailListItem.appendChild(propSpan);
                        } else {
                            detailListItem.appendChild(document.createTextNode(propName));
                        }
                        collectionDetailList.appendChild(detailListItem);
                    }
                    collectionDetailListContainer.appendChild(collectionDetailList);
                    collectionListItemContainer.appendChild(collectionDetailListContainer);
                    //var clearEl = document.createElement("div");
                    //clearEl.style.clear = "both";
                    //collectionListItemContainer.appendChild(clearEl);
                }

                collectionListItem.appendChild(collectionListItemContainer);
                collectionItems.appendChild(collectionListItem);
            }
        }
        collectionContainer.style.overflowY = "auto";
        collectionContainer.style.height = "80%";
        collectionContainer.style.minHeight = "250px";

        collectionContainer.appendChild(collectionItems);

        container.appendChild(collectionContainer);
    }

    function _buildPanelContent(panel, tabs) {
        if (!panel) return;

        panel.innerHTML = "";
        var containerId = panel.id.replace('adfuel-console-panel-', '');
        var collection = metricApi.metrics[containerId];
        if (tabs) {
            tabNames = Object.getOwnPropertyNames(collection);
            _buildPanelTabs(panel, tabNames);
        } else {
            // Old Style Panels
            var collectionContainer = document.createElement("div");
            collectionContainer.className = "adfuel-console-collection-container";

            var collectionItems = document.createElement("ul");
            collectionItems.id = "adfuel_console_" + containerId + "_items";
            collectionItems.className = "adfuel-console-collection-list";
            collectionItems.style.listStyleType = "none";
            collectionItems.style.padding = "0";
            collectionItems.style.margin = "0";

            for (var collectionItemName in collection) {
                if (collection.hasOwnProperty(collectionItemName)) {
                    var collectionItem = collection[collectionItemName];
                    var collectionListItem = document.createElement("li");
                    collectionListItem.id = "adfuel-console-" + containerId + "-" + collectionItemName;
                    collectionListItem.className = "adfuel-console-collection-list-items";

                    var collectionListItemContainer = document.createElement('div');
                    collectionListItemContainer.className = "adfuel-console-collection-list-item-container";

                    var collectionListItemLabel = document.createElement("label");
                    collectionListItemLabel.className = 'adfuel-console-collection-list-item-label';

                    var collectionListItemLabelHeading = document.createElement("span");

                    collectionListItemLabel.appendChild(collectionListItemLabelHeading);
                    collectionListItemLabel.appendChild(document.createTextNode(capitalizeFirstLetter(collectionItemName.replace(/_/g, " "))));
                    collectionListItemContainer.appendChild(collectionListItemLabel);

                    var separator = document.createElement("hr");
                    separator.className = 'adfuel-console-separator';

                    collectionListItemContainer.appendChild(separator);

                    function filterPrivate(value) {
                        return value.indexOf("_") < 0 || value.indexOf("_") > 0;
                    }

                    function buildConsolePanelCollectionItem(collectionItem, nested) {
                        var collectionDetailList = document.createElement("ul");
                        collectionDetailList.className = 'adfuel-console-collection-list-item-detail-list';

                        var collectionItemDetailFields = Object.getOwnPropertyNames(collectionItem).filter(filterPrivate);

                        for (var y = 0; y < collectionItemDetailFields.length; y++) {
                            var collectionDetailListItem = document.createElement("li");
                            collectionDetailListItem.className = "adfuel-console-collection-list-item-detail-list-item";

                            var collectionDetailListItemContainer = document.createElement('div');
                            collectionDetailListItemContainer.className = "adfuel-console-collection-list-item-detail-list-item-container";

                            var collectionDetailListItemLabel = document.createElement("label");
                            collectionDetailListItemLabel.className = "adfuel-console-collection-list-item-detail-list-item-label";

                            var propKey = collectionItemDetailFields[y];
                            var propName = capitalizeFirstLetter(propKey.replace(/_/g, " "));

                            collectionDetailListItemLabel.appendChild(document.createTextNode(propName));
                            collectionDetailListItem.appendChild(collectionDetailListItemLabel);

                            if (Array.isArray(collectionItem[propKey]) && collectionItem[propKey].length > 1) {
                                collectionItem[propKey] = collectionItem[propKey].join("<br>");
                                collectionItem[propKey] = collectionItem[propKey] + "<br><br>";
                            }

                            var clearDiv = document.createElement("div");
                            clearDiv.style.clear = "both";

                            var valueWrapper = document.createElement("div");
                            if (!Array.isArray(collectionItem[propKey]) && typeof collectionItem[propKey] === "object" && collectionItem[propKey] !== null) {
                                var objectList = buildConsolePanelCollectionItem(collectionItem[propKey], true);
                                var clear = document.createElement("div");
                                clear.style.clear = "both";
                                valueWrapper.appendChild(clear);
                                valueWrapper.appendChild(objectList);
                            } else {
                                valueWrapper.className = "truncate";
                                valueWrapper.innerText = collectionItem[propKey];
                                valueWrapper.innerHTML = collectionItem[propKey];
                                valueWrapper.title = collectionItem[propKey];
                            }
                            if (nested) collectionDetailListItem.appendChild(clearDiv);
                            collectionDetailListItem.appendChild(valueWrapper);
                            collectionDetailListItem.appendChild(clearDiv);


                            collectionDetailList.appendChild(collectionDetailListItem);
                        }
                        return collectionDetailList;
                    }

                    var collectionDetailList;

                    if (Array.isArray(collectionItem)) {
                        for (var arrayIndex = 0; arrayIndex < collectionItem.length; arrayIndex++) {
                            collectionItem = collectionItem[arrayIndex];
                            collectionDetailList = buildConsolePanelCollectionItem(collectionItem);
                            collectionListItemContainer.appendChild(collectionDetailList);
                        }
                    } else {
                        collectionDetailList = buildConsolePanelCollectionItem(collectionItem);
                        collectionListItemContainer.appendChild(collectionDetailList);
                    }

                    collectionListItem.appendChild(collectionListItemContainer);
                    collectionItems.appendChild(collectionListItem);
                }
            }

            collectionContainer.appendChild(collectionItems);

            panel.appendChild(collectionContainer);
        }
    }

    function _closeAdFuelConsole() {
        _consoleCloseButtonHandler = null;

        var body = document.getElementsByTagName('body')[0];
        var openContainer = document.querySelector("div.adfuel-console-button-container");
        var closeContainer = document.querySelector("div#adfuel-close-console-button-container");
        var openButton = document.querySelector("body > div.adfuel-console-button-container > a");

        var consoleFiller = document.querySelector("div.adfuel-console-filler");
        var consoleContainer = document.querySelector("div.adfuel-console");
        var consoleBanner = document.querySelector("div#adfuel-console-banner");

        consoleFiller.style.display = "none";
        consoleContainer.style.display = "none";

        if (openContainer && openButton) {
            openContainer.style.display = "inline-block";
            _consoleOpenButtonHandler = addEvent(openButton, 'click', _openAdFuelConsole);
            window.AdFuel.openConsole = _openAdFuelConsole;
        }
        return;
    }

    function setRenderCompleteListener() {
        window.googletag.cmd.push(function() {
            window.googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                try {
                    var detail = {};
                    var el = null;
                    if (event.slot) {
                        detail.asset = event.slot;
                    }
                    if (event.slot.getTargeting("pos")) {
                        detail.pos = event.slot.getTargeting("pos");
                    }
                    if (event.isEmpty) {
                        detail.empty = true;
                    } else {
                        detail.empty = false;
                    }
                    if (event.size) {
                        detail.renderedSize = event.size;
                    }
                    if (event.creativeId) {
                        detail.creativeId = event.creativeId;
                    }
                    if (event.lineItemId) {
                        detail.lineItemId = event.lineItemId;
                    }
                    if (event.serviceName) {
                        detail.serviceName = event.serviceName;
                    }
                    if (event.slot.getSlotElementId()) {
                        detail.divId = event.slot.getSlotElementId();
                        el = document.getElementById(detail.divId);
                    }
                    var info = _pageSlots[detail.divId].getResponseInformation();
                    detail.campaignId = info.campaignId;
                    detail.advertiserId = info.advertiserId;
                    metricApi.addMetric({
                        type: 'slots',
                        id: detail.divId,
                        data: {
                            advertiserId: detail.advertiserId,
                            campaignId: detail.campaignId,
                            creativeId: detail.creativeId,
                            lineItemId: detail.lineItemId
                        }
                    });
                    if (window.googletag) {
                        var slotManager = googletag.slot_manager_instance;
                        if (slotManager.l) {
                            for (var slotId in slotManager.l) {
                                if (slotManager.l.hasOwnProperty(slotId)) {
                                    if (slotId == detail.divId) {
                                        var deliveryDiagnosticsInfo = null;
                                        for (var lKey in slotManager.l[slotId]) {
                                            if (slotManager.l[slotId].hasOwnProperty(lKey)) {
                                                if (slotManager.l[slotId][lKey] != null && typeof slotManager.l[slotId][lKey] == "string" && slotManager.l[slotId][lKey].split("?")) {
                                                    deliveryDiagnosticsInfo = slotManager.l[slotId][lKey].split("?");
                                                }
                                            }
                                        }
                                        if (deliveryDiagnosticsInfo != null) {
                                            addMetric({
                                                type: 'slots',
                                                id: detail.divId,
                                                data: {
                                                    diagnostics_url: 'https://www.google.com/dfp/inventory#diagnostics/' + deliveryDiagnosticsInfo[1] + '&base_url=' + encodeURIComponent(deliveryDiagnosticsInfo[0])
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (ex) {
                    _errLog('error reading slotRenderEnded event', {
                        error: ex
                    });
                }
            });
        });
    }

    function _addTargetingForCreativeExtraction(slots, callback){
        for (var slotIndex = 1; slotIndex < slots.length; slotIndex++){
            var slot = slots[slotIndex];
            if (_appliedTargeting.indexOf(slot.rktr_slot_id) < 0){
                window.AdFuel.addSlotLevelTarget(slot.rktr_slot_id, 'elemId', slot.rktr_slot_id);
                _appliedTargeting.push(slot.rktr_slot_id);
            }
        }
        window.AdFuel.addEvent(document, 'SlotIdChange', function(e){
            if (e.detail.newId != e.detail.originalId){
                if (_appliedTargeting.indexOf(e.detail.newId) < 0){
                    window.AdFuel.addSlotLevelTarget(e.detail.newId, 'elemId', e.detail.newId);
                    _appliedTargeting.push(e.detail.newId);
                }
            }
        });
        callback();
    }

    function registerModuleWithAdFuel() {
        metricApi = window.AdFuel.registerModule('AdFuel Console Tool', {
            preQueueCallback: _addTargetingForCreativeExtraction,
            metricUpdateCallback: _refreshAdFuelConsoleContent
        });
        window.AdFuel.renderAdFuelConsole = _renderAdFuelConsole;
        metricApi.addMetric({type: 'creative review', id: 'Form', data: {} } );
        window.AdFuel.addEvent(window, 'message', parseMessage);
        addKeypressModule();
        addDHTMLGridModule();
        setRenderCompleteListener();
        //window.AdFuel.renderAdFuelConsole();
        _refreshAdFuelConsoleContent({});
    }

    function addKeypressModule() {
        var renderFullConsole = function() {
            fullConsole = true;
            window.AdFuel.renderAdFuelConsole();
        };
        var renderCreativeReviewConsole = function() {
            fullConsole = false;
            window.AdFuel.renderAdFuelConsole();
        };

        var initializeKeypressListeners = function () {
            // Ctrl-Shift-Z to open full console
            var defaults = {
                prevent_default: false,
                prevent_repeat: false,
                is_sequence: false,
                is_exclusive: true,
                is_solitary: true
            };
            var options = {
                keys: "ctrl shift z",
                on_keydown: renderFullConsole
            };
            var consoleListener = new window.keypress.Listener(window, defaults);
            consoleListener.register_combo(options);

            // d-o-h to open just Creative Review
            defaults = {
                prevent_default: false,
                prevent_repeat: false,
                is_sequence: true,
                is_exclusive: true,
                is_solitary: true
            };
            options = {
                keys: "d o h",
                on_keydown: renderCreativeReviewConsole
            };
            var feedbackListener = new window.keypress.Listener(window, defaults);
            feedbackListener.register_combo(options);
        };

        if (!window.keypress) {
            var a = document,
                b = a.createElement("script"),
                c = a.getElementsByTagName("script")[0],
                d = /^(complete|loaded)$/,
                e = false,
                f = "https:" === document.location.protocol;
            b.type = "text/javascript";
            b.async = true;
            b.src = (f ? "https:" : "http:") + "//ssl.cdn.turner.com/ads/adfuel/modules/keypress.js";
            b.onload = b.onreadystatechange = function() {
                if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                    b.onload = b.onreadystatechange = null;
                    e = true;
                    initializeKeypressListeners();
                }
            };
            c.parentNode.insertBefore(b, c);
        } else {
            initializeKeypressListeners();
        }
    }

    function addDHTMLGridModule() {
        var a = document,
            b = a.createElement("script"),
            c = a.getElementsByTagName("script")[0],
            d = /^(complete|loaded)$/,
            e = false,
            f = "https:" === document.location.protocol;
        b.type = "text/javascript";
        b.async = true;
        b.src = (f ? "https:" : "http:") + "//ssl.cdn.turner.com/ads/adfuel/modules/dhtmlxgrid.js";
        c.parentNode.insertBefore(b, c);
    }

    function init() {
        if (window.AdFuel) {
            registerModuleWithAdFuel();
        } else {
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }
        }
    }

    init();
})();


////////////////////////////////////////////
//Criteo 2.1
////////////////////////////////////////////

/*!
 Criteo AdFuel Module - Version 2.1
 - Implementation of MetricAPI returned from AdFuel when registering module
 - Add Custom Target when Criteo hits timeout
 - Fix: Prevent multiple requests on a single page view 
 !*/
(function createAdFuelCriteoModule(){
    var priorTargetings = {};

    //backward compatibility- support registry files which reference window.crtg_content
    //if registries are executed prior to the criteo script below completing, they will need to
    //access this value, so make sure it exists
    window.crtg_content = '';

    var objectProto = Object.prototype;
    var toString = objectProto.toString;
    var noop = function(){return false;};
    var metricApi = { metrics: {}, addMetric: noop, getMetricById: noop, getMetricsByType: noop, getMetricTypes: noop };
    var scriptLoaded = false;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Criteo]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        };
    }

    function setTargetingForCriteo(callback) {

        var crtg_cookiename = 'crtg_trnr';
        var crtg_varname = 'crtg_content';
        var crtg_nid = '4157';
        var crtg_rnd = Math.floor(Math.random() * 99999999999);

        function crtg_getCookie(c_name) {
            var i, x, y, ARRCookies = document.cookie.split(";");
            for (i = 0; i < ARRCookies.length; i++) {
                x = ARRCookies[i].substr(0, ARRCookies[i].indexOf("="));
                y = ARRCookies[i].substr(ARRCookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return decodeURIComponent(y);
                }
            }
            return '';
        }

        function processCookie() {
            //script has executed, grab cookie
            var targetings = {};

            var crtg_content = crtg_getCookie(crtg_cookiename);

            //backward compatibility- support registry files which reference window.crtg_content
            window.crtg_content = crtg_content;

            if (crtg_content) {
                var crtg_split = crtg_content.split(";");
                for (var i = 0; i < crtg_split.length-1; i++) {
                    var pieces = crtg_split[i].split("=");
                    var key = pieces[0];
                    var value = pieces[1];

                    //save targeting
                    targetings[key] = value;

                    //add new targeting
                    if (!priorTargetings.key) {
                        window.AdFuel.addPageLevelTarget(key, value);
                    }
                }
            }

            //remove targetings no longer valid
            for (var targetingKey in priorTargetings) {
                if (priorTargetings.hasOwnProperty(targetingKey) && !targetings[targetingKey]) {
                    window.AdFuel.removePageLevelTarget(targetingKey);
                }
            }
            metricApi.addMetric({type: 'modules', id: 'Criteo', data: {targeting: targetings} } );

            log('set criteo targeting', targetings);

            //save targetings, so we can reconcile them on subsequent calls
            priorTargetings = targetings;

            if (callback) {
                window.AdFuel.removePageLevelTarget('crt_to', '1');
                window.AdFuel.addPageLevelTarget('crt_to', '0');
                callback();
            }
        }

        if (!scriptLoaded){
            scriptLoaded = true;
            //add script to set Criteo cookie based on user's other cookies
            (function(callback) {
                var crtg_url = location.protocol + '//rtax.criteo.com/delivery/rta/rta.js?netId=' + encodeURIComponent(crtg_nid);
                crtg_url += '&cookieName=' + encodeURIComponent(crtg_cookiename);
                crtg_url += '&rnd=' + crtg_rnd;
                crtg_url += '&varName=' + encodeURIComponent(crtg_varname);

                var a = document,
                    b = a.createElement("script"),
                    c = a.getElementsByTagName("script")[0],
                    d = /^(complete|loaded)$/,
                    e = false;
                b.type = "text/javascript";
                b.async = true;
                b.src = crtg_url;
                b.onload = b.onreadystatechange = function() {
                    if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                        b.onload = b.onreadystatechange = null;
                        e = true;
                        callback();
                    }
                };

                c.parentNode.insertBefore(b, c);
            })(processCookie);
        }else{
            processCookie();
        }
    }

    function init() {

        function registerModuleWithAdFuel() {
            metricApi = window.AdFuel.registerModule('Criteo', {
                //when dispatching or refreshing slots, set criteo targeting
                preDispatchCallback: function(builtSlots, asyncCallback) {
                    try {
                        log('preDispatch');
                        setTargetingForCriteo(asyncCallback);
                    } catch(err){
                        log('error setting targeting prior to dispatch', err);
                        asyncCallback(err);
                    }
                },

                preRefreshCallback: function(slotsIdsToRefresh, asyncCallback) {
                    try {
                        log('preRefresh');
                        setTargetingForCriteo(asyncCallback);
                    } catch(err){
                        log('error setting targeting prior to refresh', err);
                        asyncCallback(err);
                    }
                }
            });
            window.AdFuel.addPageLevelTarget('crt_to', '1');
        }

        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }
        }
    }

    init();

})();


////////////////////////////////////////////
//Fastlane 2.2
////////////////////////////////////////////

/*! Fastlane AdFuel Module - Version 2.2
  - Improved: Logic for handling slots sent to auction
  - Improved: Add Custom Target when Fastlane hits timeout
  - Improved: Changed invalidSizes to validSizes
  - Improved: countryCode || CG cookie value parsing
 !*/
(function createFastlaneModule() {
    window.rubicontag = window.rubicontag || {};
    window.rubicontag.cmd = window.rubicontag.cmd || [];
    var objectProto = Object.prototype;
    var toString = objectProto.toString;
    var noop = function() {
        return false;
    };
    var metricApi = {
        metrics: {},
        addMetric: noop,
        getMetricById: noop,
        getMetricsByType: noop,
        getMetricTypes: noop
    };

    var preQueueTimeouts = [];

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    function getViewport() {
        var viewportWidth;
        var viewportHeight;
        if (typeof window.innerWidth != 'undefined') {
            viewPortWidth = window.innerWidth,
                viewPortHeight = window.innerHeight;
        } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            viewPortWidth = document.documentElement.clientWidth,
                viewPortHeight = document.documentElement.clientHeight;
        } else {
            viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
        }
        return [viewPortWidth, viewPortHeight];
    }

    function readCookie(name) {
        if (!document.cookie) {
            // there is no cookie, so go no further
            return null;
        } else { // there is a cookie
            var ca = document.cookie.split(';');
            var nameEQ = name + "=";
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    //delete spaces
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function( /* arguments */ ) {
            var args = ['[AdFuelModule - Fastlane/Rubicon]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        };
    }

    function addFastlaneScript() {
        var hostname = window.location.hostname.toLowerCase();
        var account_id = 11078;
        var countryCode = readCookie('countryCode') || (readCookie('CG') ? readCookie('CG').substr(0, readCookie('CG').indexOf(':')) : '');
        if ((countryCode !== 'US' && countryCode !== 'CA' && countryCode.length === 2) || hostname.search(/^(edition|arabic|cnnespanol)\./) >= 0) {
            // User location is international (or unknown and the site is international)
            account_id = 11016;
        }
        log("Rubicon Account ID: " + account_id);
        var rct = document.createElement('script');
        rct.type = 'text/javascript';
        rct.async = true;
        rct.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//ads.rubiconproject.com/header/' + account_id + '.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.appendChild(rct);
    }


    window.rubiconSlotDictionary = {};
    window.refreshableRubiconSlots = {};

    function clearSlotsAndTimeout(timeout){
        clearTimeout(timeout);
        preQueueTimeouts.length = 0;
    }

    function buildSlotsForFastlane(registry, callback){
        log("Building slots for Fastlane", JSON.stringify(registry));
        var topBannerAdUnit = "";
        var preQueueTimeout = setTimeout(function(){
            // Track the timeout.
            log("PreQueue Timeout Occurred.");
            window.AdFuel.addPageLevelTarget('fln_pqto', '1');
        }, 1000);
        window.rubicontag.cmd.push(function() {
            var rubiconSlots = [];

            for(var i = 1; i < registry.length; i++) {
                log("Checking Slot: ", registry[i].rktr_slot_id);
                var rocketeerSlot = registry[i];
                var rubiconSlot;
                if (topBannerAdUnit == "" || rocketeerSlot.rktr_slot_id.indexOf("bnr_atf_01") > 0){                    
                    log("Setting KW Ad Unit: ", rocketeerSlot.rktr_ad_id);
                    topBannerAdUnit = rocketeerSlot.rktr_ad_id;
                }
                // Any slot that is not _atf_ or _btf_ will be excluded from the request to Fastlane.
                var validMappings = {
                    '_atf_': 'atf',
                    '_btf_': 'btf',
                    '_mod_': 'atf',
                };
                // Only sizes in this array will be sent in the request to Fastlane.
                var validSizes = [ '160x600', '300x250', '300x600', '320x50', '728x90', '970x90', '970x250' ];
                // Any slot id with any of the following slot types will be excluded from the request to Fastlane.
                var invalidMappings = [ '_ns_', '_nfs_' ];
                // Any slot with any of the following ad unit segments in the slot ad unit will be excluded from the request to Fastlane.
                var invalidAdUnitSegments = [ 'super-ad-zone', 'super_ad_zone' ];
                // Any slot with an ad unit that matches any of the following ad units will be excluded from the request to Fastlane.
                var invalidAdUnits = [ 'CNN/health', 'CNN/health/healthgrades', 'CNN/health/leaf', 'CNN/health/list', 'CNN/health/photos', 'CNN/health/specials', 'CNN/health/video', 'CNN/student-news' ];

                //require valid mapping match
                for (var validMapping in validMappings) {
                    if (validMappings.hasOwnProperty(validMapping)) {
                        if (rocketeerSlot.rktr_slot_id && rocketeerSlot.rktr_slot_id.indexOf(validMapping) >= 0) {
                            var isValid = true;
                            var viewportChecked = false;
                            //exclude invalid mapping matches
                            for (var invalidMapping in invalidMappings) {
                                if (rocketeerSlot.rktr_slot_id.indexOf(invalidMappings[invalidMapping]) >= 0) {
                                    log("Filtering out invalid slot type: ", invalidMappings[invalidMapping], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            for (var invalidAdUnitSegment in invalidAdUnitSegments){
                                if (rocketeerSlot.rktr_ad_id.indexOf(invalidAdUnitSegments[invalidAdUnitSegment]) >= 0) {
                                    log("Filtering out invalid ad unit segment: ", invalidAdUnitSegments[invalidAdUnitSegment], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            for (var invalidAdUnit in invalidAdUnits){
                                if (rocketeerSlot.rktr_ad_id == invalidAdUnitSegments[invalidAdUnitSegment]) {
                                    log("Filtering out invalid ad unit: ", invalidAdUnits[invalidAdUnit], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            var responsiveSizes = [];
                            for (var viewportId = 0; viewportId < rocketeerSlot.responsive.length; viewportId++){
                                var browser = getViewport();
                                var viewport = rocketeerSlot.responsive[viewportId];
                                if (!viewportChecked && viewport[0][0] < browser[0] && viewport[0][1] < browser[1]){
                                    viewportChecked = true;
                                    responsiveSizes = viewport[1];
                                    if (viewport[1][0] == "suppress" || responsiveSizes == "suppress"){ 
                                        isValid = false;
                                    }
                                }
                            }
                            if (isValid && responsiveSizes.length > 0){
                                log("Setting Sizes To Responsive Sizes: ", responsiveSizes);
                                rocketeerSlot.sizes = responsiveSizes;
                            }
                            if (isValid) {
                                for (var rocketeerSize = 0; rocketeerSize < rocketeerSlot.sizes.length; rocketeerSize++){
                                    var matchingSize = rocketeerSlot.sizes[rocketeerSize];
                                    if (matchingSize !== "suppress"){
                                        matchingSize = matchingSize.join('x');
                                    }
                                    if (validSizes.indexOf(matchingSize) < 0) {
                                        log("Filtering out invalid size: ", matchingSize, rocketeerSlot);
                                        rocketeerSlot.sizes.splice(rocketeerSize, 1);
                                    }
                                }
                            }
                            if (rocketeerSlot.sizes.length == 0){
                                isValid = false;
                                log("Filtering out slot with no valid sizes.", rocketeerSlot.rktr_slot_id, rocketeerSlot.rktr_ad_id);
                            }
                            if (isValid) {
                                log("Slot is a valid item for Rubicon Fastlane.");
                                var foldPosition = validMappings[validMapping];
                                var alreadyRendered = document.getElementById(rocketeerSlot.rktr_slot_id) ? document.getElementById(rocketeerSlot.rktr_slot_id).className.indexOf("adfuel-rendered") >= 0 : false;
                                log("Checking for cached Fastlane response for: ", rocketeerSlot.rktr_slot_id);                                                                        
                                if (typeof window.rubiconSlotDictionary[rocketeerSlot.rktr_slot_id] == "undefined" && !alreadyRendered){
                                    log("Cached response not found. Defining Slot: ", "/8664377/" + rocketeerSlot.rktr_ad_id, rocketeerSlot.sizes, rocketeerSlot.rktr_slot_id);
                                    rubiconSlot = window.rubicontag.defineSlot("/8664377/" + rocketeerSlot.rktr_ad_id, rocketeerSlot.sizes, rocketeerSlot.rktr_slot_id);
                                    log("Setting Position: ", foldPosition);
                                    rubiconSlot.setPosition(foldPosition);
                                    var slotTargets = rocketeerSlot.targeting;
                                    for (var tIndex = 0; tIndex < slotTargets.length; tIndex++){
                                        var target = slotTargets[tIndex];
                                        if (target[0] == "pos") {
                                            if (Array.isArray(target[1])) {
                                                log('Setting POS Keyword For '+ rocketeerSlot.rktr_slot_id, target[1][0]);
                                                rubiconSlot.setFPI('pos', target[1][0]);
                                            } else {
                                                log('Setting POS Keyword For '+ rocketeerSlot.rktr_slot_id, target[1]);
                                                rubiconSlot.setFPI('pos', target[1]);
                                            }
                                        }
                                    }
                                    log('Setting Keyword For ' + rocketeerSlot.rktr_slot_id, rocketeerSlot.rktr_ad_id);
                                    rubiconSlot.addKW(rocketeerSlot.rktr_ad_id);
                                    rubiconSlots.push(rubiconSlot);
                                    window.rubiconSlotDictionary[rocketeerSlot.rktr_slot_id] = rubiconSlot;
                                }else if (typeof window.rubiconSlotDictionary[rocketeerSlot.rktr_slot_id] == "undefined" && alreadyRendered){
                                    log("Element has already been rendered with an ad.  Skipping Fastlane auction for: ", rocketeerSlot.rktr_slot_id);
                                }else{ 
                                    log("Using cached Fastlane response for: ", rocketeerSlot.rktr_slot_id);
                                }
                            }
                        }
                    }
                }
            }
            var adUnitPieces = topBannerAdUnit.split("/");
            var adUnitPieceNames = ['site', 'section', 'subsection'];
            for (var y = 0; y < adUnitPieces.length && y < 3; y++) {
                log('Setting FPI', adUnitPieceNames[y], adUnitPieces[y]);
                window.rubicontag.setFPI(adUnitPieceNames[y], adUnitPieces[y]);
            }
            window.rubicontag.run(function() {                 
                clearSlotsAndTimeout(preQueueTimeout);
                callback(); 
            }, {slots: rubiconSlots});
        });
    }


    function setTargetingForFastlane(slots) {
        log("setting fastlane targeting");
        window.googletag.cmd.push(function(){
            var gptSlots = window.AdFuel.pageSlots;
            log({slots: slots, gptSlots: gptSlots});
            var addedTargeting = {};
            for (var x = 0; x < slots.length; x++) {
                var slot = slots[x];
                log("Slot ID: ", slot.rktr_slot_id);
                if (gptSlots[slot.rktr_slot_id]) {
                    var gptSlot = gptSlots[slot.rktr_slot_id];
                    log("calling window.rubicontag.setTargetingForGPTSlot...");
                    window.rubicontag.setTargetingForGPTSlot(gptSlot);
                    window.refreshableRubiconSlots[slot.rktr_slot_id] = window.rubiconSlotDictionary[slot.rktr_slot_id];
                    delete window.rubiconSlotDictionary[slot.rktr_slot_id];
                    var targeting = gptSlot.getTargetingKeys();
                    var data = {};
                    var timeoutTargetSet = false;
                    for (var y = 0; y < targeting.length; y++) {
                        if (targeting[y].indexOf("rpfl_") >= 0) {
                            log("removing fln_to=1 and setting fln_to=0 for "+gptSlot.getSlotElementId());
                            if (!timeoutTargetSet){
                                window.AdFuel.addSlotLevelTarget(gptSlot.getSlotElementId(), 'fln_to', '0');
                                timeoutTargetSet = true;
                            }
                            log("Setting Fastlane Targeting...", {
                                slot: gptSlot.getSlotElementId(),
                                target: {key: targeting[y], value: gptSlot.getTargeting(targeting[y])}
                            });
                            data[targeting[y]] = gptSlot.getTargeting(targeting[y]);
                        }
                    }
                    addedTargeting[slot.rktr_slot_id] = data;
                }
            }
            metricApi.addMetric({
                type: 'modules',
                id: 'Fastlane',
                data: {
                    targeting: addedTargeting
                }
            });
        });
    }

    function preDispatch(slots, callback) {
        var preDispatchTimeout = setTimeout(function(){
            
        }, 1000);
        log('preDispatch');
        setTargetingForFastlane(slots);
        clearTimeout(preDispatchTimeout);
        callback();
    }

    function preRefresh(slotIds, callback) {
        log('preRefresh');
        var rubiconSlots = [];
        var pseudoRocketeerSlots = [];
        var gptSlots = window.AdFuel.pageSlots;
        if (!slotIds) {
            slotIds = Object.getOwnPropertyNames(gptSlots);
        }
        for (var x = 0; x < slotIds.length; x++) {
            var slotId = slotIds[x];
            log("Slot ID: ", slotId);
            if (gptSlots[slotId]) {
                var gptSlot = gptSlots[slotId];
                //clear fastlane slot level targeting
                var slotTargets = gptSlot.getTargetingKeys();
                for (var targetId in slotTargets) {
                    if (slotTargets.hasOwnProperty(targetId)) {
                        var key = slotTargets[targetId];
                        if (key.indexOf("rpfl") >= 0) {
                            window.AdFuel.removeSlotLevelTarget(slotId, key);
                        }
                    }
                }
                metricApi.addMetric({
                    type: 'modules',
                    id: 'Fastlane',
                    data: {
                        targeting: {}
                    }
                });

                if (window.rubiconSlotDictionary[slotId])
                    rubiconSlots.push(window.rubiconSlotDictionary[slotId]);
                pseudoRocketeerSlots.push({
                    rktr_slot_id: slotId
                });
            }

        }

        log('refreshing slots', {
            slotsToRefresh: rubiconSlots
        });
        window.rubicontag.run(function() {
            setTargetingForFastlane(pseudoRocketeerSlots);
            callback()
        }, {
            slots: rubiconSlots
        });
    }

    function registerModuleWithAdFuel() {
        window.AdFuel.setOptions({
            queueCallbackTimeoutInMilliseconds: 1200,
            dispatchCallbackTimeoutInMilliseconds: 1200,
            refreshCallbackTimeoutInMilliseconds: 1200
        });
        metricApi = window.AdFuel.registerModule('Fastlane', {
            preQueueCallback: buildSlotsForFastlane,
            preDispatchCallback: preDispatch,
            preRefreshCallback: preRefresh
        });
    }

    function init() {
        addFastlaneScript();

        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener("AdFuelCreated", registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }
        }
    }

    init();
})();

////////////////////////////////////////////
//GUID 2.1
////////////////////////////////////////////

/*!
 GUID AdFuel Module - Version 2.1
 - Implementation of MetricAPI returned from AdFuel when registering module
 - CSD-1129: Protocol-less url for GUID cookie
  !*/

(function createGUIDModule() {

    var noop = function() {
        return false;
    };
    var metricApi = {
        addMetric: noop,
        getMetricById: noop,
        getMetricsByType: noop,
        getMetricTypes: noop
    };

    //todo: may be privatized
    window.cnnad_haveCookie = function(name) {
        return document.cookie && (document.cookie.indexOf("; " + name + "=") >= 0 || document.cookie.indexOf(name + "=") == 0);
    };

    //todo: may be privatized
    window.cnnad_readCookie = function(name) {
        if (document.cookie) {
            var ca = document.cookie.split(';');
            var nameEQ = name + "=";
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length); //delete spaces
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }
    };

    //used by freewheel helper
    window.turner_getGuid = function() {
        return window.cnnad_readCookie("ug");
    };

    (function cnnad_ugsync() {

        var objectProto = Object.prototype;
        var toString = objectProto.toString;

        function isFunction(object) {
            return toString.call(object) === '[object Function]';
        }

        function isObject(object) {
            var type = typeof object;
            return type === 'function' || type === 'object' && !!object;
        }

        function getURLParam(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            if (document.location.search) {
                var results = regex.exec(document.location.search);
                if (results) {
                    return results[1];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        }

        var log = function() {}; //noop

        if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
            log = function( /* arguments */ ) {
                var args = ['[AdFuelModule - Guid]'];
                args.push.apply(args, arguments);
                window.console.log.apply(window.console, args);
            };
        }

        function processCookie() {

            function registerModuleWithAdFuel() {
                //todo: remove AdFuel.readCookie("ug") once everyone is on new ais.js
                var guid = window.turner_getGuid();
                metricApi = window.AdFuel.registerModule('GUID', {});
                log('setting guid targeting', {
                    guid: guid
                });
                metricApi.addMetric({
                    type: 'modules',
                    id: 'GUID',
                    data: {
                        targeting: {
                            guid: guid
                        }
                    }
                });
                window.AdFuel.addPageLevelTarget('guid', guid);
            }

            if (window.AdFuel) {
                //AdFuel loaded first
                registerModuleWithAdFuel();
            } else {
                //wait for AdFuel to load
                if (document.addEventListener) {
                    document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
                } else if (document.attachEvent) {
                    document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
                }
            }
        }

        if (window.cnnad_haveCookie('ugs')) {
            processCookie();
        } else {
            //execute script to set cookie
            var guid_url = "//www.ugdturner.com/xd.sjs";

            var a = document,
                b = a.createElement("script"),
                c = a.getElementsByTagName("script")[0],
                d = /^(complete|loaded)$/,
                e = false;

            b.type = "text/javascript";
            b.async = true;
            b.src = guid_url;

            b.onload = b.onreadystatechange = function() {
                if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                    b.onload = b.onreadystatechange = null;
                    e = true;
                    processCookie();
                }
            };

            c.parentNode.insertBefore(b, c);
        }

    })();
})();

////////////////////////////////////////////
//Krux 2.0
////////////////////////////////////////////

/*
   <arguments>
        {
            "controlTag" : {
                "isRequired": false,
                "isBoolean": false,
                "defaultValue": ""
            }
        }
   </arguments>
*/
/*!
 Krux AdFuel Module - Version 2.0
 - Implementation of MetricAPI returned from AdFuel when registering module
 !*/
(function createKruxModule(){

    var noop = function(){return false;};
    var metricApi = { addMetric: noop, getMetricById: noop, getMetricsByType: noop, getMetricTypes: noop };

    window.Krux || ((window.Krux = function() {
        window.Krux.q.push(arguments);
    }).q = []);
    window.kvs = [];
    (function getKruxData() {
        function retrieve(n) {
            var m, k = 'kx' + n;
            if (window.localStorage) {
                return window.localStorage[k] || "";
            } else if (navigator.cookieEnabled) {
                m = document.cookie.match(k + '=([^;]*)');
                return (m && decodeURIComponent(m[1])) || "";
            } else {
                return '';
            }
        }
        window.Krux.user = retrieve('user');
        window.Krux.segments = retrieve('segs') && retrieve('segs').split(',') || [];
        for (var i = 0; i < window.Krux.segments.length; i++) {
            if (window.kvs.length < 20) {
                window.kvs.push(window.Krux.segments[i]);
            }
        }
    })();

    window.krux_getDESegments = function() {
        var segmentString = "&kxid=";
        if (window.Krux.user) {
            segmentString += window.Krux.user;
        }
        segmentString += '&kxseg=' + window.kvs.join(",");
        return segmentString;
    };

    window.krux_getFWSegments = function() {
        return 'kxseg=' + window.kvs.join(",kxseg=");
    };

    window.krux_getUser = function() {
        return window.Krux.user;
    };

    window.krux_getFWKeyValues = function(prefix, limit) {
        var segPrefix = prefix || "_fwu:386123:";
        var segLimit = limit || 35;
        var fwKVP = {};
        for (var x = 0; x < window.Krux.segments.length; x++) {
            if (x < segLimit) fwKVP[segPrefix + window.Krux.segments[x]] = 1;
        }
        return fwKVP;
    };

    window.Krux.setControlTag = function(controlTagId) {

        var objectProto = Object.prototype;
        var toString = objectProto.toString;

        function isFunction(object) {
            return toString.call(object) === '[object Function]';
        }

        function isObject(object) {
            var type = typeof object;
            return type === 'function' || type === 'object' && !!object;
        }

        function getURLParam(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            if (document.location.search) {
                var results = regex.exec(document.location.search);
                if (results) {
                    return results[1];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        }

        var log = function() {}; //noop

        if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
            log = function(/* arguments */) {
                var args = ['[AdFuelModule - Krux]'];
                args.push.apply(args, arguments);
                window.console.log.apply(window.console, args);
            }
        }

        function processCookie() {

            function registerModuleWithAdFuel() {
                var kuid = window.Krux.user;
                var ksg = window.Krux.segments;

                log('setting krux targeting', {kuid: kuid, ksg: ksg});
                metricApi = window.AdFuel.registerModule('Krux', {});
                window.AdFuel.addPageLevelTarget('kuid',kuid);
                window.AdFuel.addPageLevelTarget('ksg', ksg);
                metricApi.addMetric({type: 'modules', id: 'Krux', data: { targeting: { kuid: kuid, ksg: ksg } } } );
            }

            if (window.AdFuel) {
                //AdFuel loaded first
                registerModuleWithAdFuel();
            } else {
                //wait for AdFuel to load
                if (document.addEventListener) {
                    document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
                } else if (document.attachEvent) {
                    document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
                }
            }
        }

        //execute script to set cookie
        var a = document,
            b = a.createElement("script"),
            c = a.getElementsByTagName("script")[0],
            d = /^(complete|loaded)$/,
            e = false;

        b.type = "text/javascript";
        b.async = true;

        var m, src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
        b.src = /^https?:\/\/([^\/]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
        (location.protocol==="https:"?"https:":"http:") + "//cdn.krxd.net/controltag?confid=" + controlTagId;

        b.onload = b.onreadystatechange = function() {
            if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                b.onload = b.onreadystatechange = null;
                e = true;
                processCookie();
            }
        };

        c.parentNode.insertBefore(b, c);
    };

    if ("ITcATbN4") {
        //set based on site
        window.Krux.setControlTag("ITcATbN4");
    }
})();


////////////////////////////////////////////
//Transaction ID 2.0
////////////////////////////////////////////

/*!
 TransactionID AdFuel Module - Version 2.0
 - Implementation of MetricAPI returned from AdFuel when registering module
 !*/
(function createTransactionIDModule() {
    var noop = function(){return false;};
    var metricApi = { addMetric: noop, getMetricById: noop, getMetricsByType: noop, getMetricTypes: noop };

    window.cnnad_transactionID = null;

    //referenced by registries
    window.cnnad_getTransactionID = function () {
        if (!window.cnnad_transactionID) {
            window.cnnad_transactionID = Math.round((new Date()).getTime() / 1000) + '' + Math.floor(Math.random() * 9007199254740992);
        }
        return window.cnnad_transactionID;
    };

    window.turner_getTransactionId = window.cnnad_getTransactionID;

    window.turner_getTransactionId();


    function init() {

        var objectProto = Object.prototype;
        var toString = objectProto.toString;

        function isFunction(object) {
            return toString.call(object) === '[object Function]';
        }

        function isObject(object) {
            var type = typeof object;
            return type === 'function' || type === 'object' && !!object;
        }

        function getURLParam(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            if (document.location.search) {
                var results = regex.exec(document.location.search);
                if (results) {
                    return results[1];
                } else {
                    return "";
                }
            } else {
                return "";
            }
        }

        var log = function () {
        }; //noop

        if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
            log = function (/* arguments */) {
                var args = ['[AdFuelModule - TransactionId]'];
                args.push.apply(args, arguments);
                window.console.log.apply(window.console, args);
            };
        }

        function registerModuleWithAdfuel() {
            var transId = window.turner_getTransactionId();
            metricApi = AdFuel.registerModule('Transaction Id', {});
            metricApi.addMetric({type: 'modules', id: 'Transaction Id', data: { targeting: { transId: transId } } } );
            window.AdFuel.addPageLevelTarget('transId', transId);
        }

        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdfuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdfuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdfuel);
            }
        }
    }

    init();
})();

