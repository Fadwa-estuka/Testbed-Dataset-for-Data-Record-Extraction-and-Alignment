/*
 * Apptus eSales Notification JavaScript Library v2.0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software to use it without restriction, including without limitation the
 * rights to use, copy and modify the Software under the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * of the software.
 *
 * The software is provided "as is", without warranty of any kind.
 * The authors or copyright holders shall never be liable for any claim, damages or other
 * liability that arises from or in connection to this software.
 *
 *
 * Uses json2.js
 * 2008-01-17
 * Public Domain
 * No warranty expressed or implied. Use at your own risk.
 * See http://www.JSON.org/js.html
 *
 */

if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case'string':return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
if(typeof value.toJSON==='function'){return stringify(value.toJSON());}
a=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');}
return'['+a.join(',')+']';}
if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}
return'{'+a.join(',')+'}';}}
return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
return filter(k,v);}
if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
throw new SyntaxError('parseJSON');}};}();}
/* This module requires window.JSON */
if (typeof window.ApptusEsales == "undefined") {
    window.ApptusEsales = {};
}

/**
 * A storage mechanism using cookies as the backend for speed and persistence.
 * 
 * It only stores arrays and it will automatically prune the first elements of
 * the array if it is too large to store in cookies.
 * 
 * @param doc is an object exposing the cookie attribute of
 * the HTMLDocument interface. This is configurable for testing purposes,
 * normally use window.document.
 * @constructor
 */
ApptusEsales.CookieStorage = function (doc) {
    function trim(string) {
        return string.replace(/^\s+|\s+$/g, '');
    }

    this.load = function () {
        var keyValuePairs = doc.cookie.split(';'),
            i,
            keyValuePair,
            key,
            value;
        
        for (i = 0; i < keyValuePairs.length; ++i) {
            keyValuePair = keyValuePairs[i].split('=');
            if (keyValuePair.length != 2) {
                continue;
            }
            key = trim(keyValuePair[0]);
            value = trim(keyValuePair[1]);
            if (key != 'ApptusEsales') {
                continue;
            }
            return JSON.parse(decodeURIComponent(value));
        }
        return [];
    };

    /**
     * @param list An array.
     */
    this.save = function (list) {
        var copy = [],
            i,
            cookie = '',
            value;

        for (i = 0; i < list.length; ++i) {
            copy.push(list[i]);
        }

        do {
            value = encodeURIComponent(JSON.stringify(copy));
            cookie = 'ApptusEsales=' + value + ';Path=/;Version=1';
        } while (cookie.length > 1024 && copy.shift());
        doc.cookie = cookie;
    }; 
};
if (typeof ApptusEsales == "undefined") {
    var ApptusEsales = {};
}

/**
 * A queue which runs each item added to it through a runner function.
 * 
 * On instantiation the queue will load items from a storage and as items
 * are added they will be saved to storage.
 * 
 * Note that calling failure from the runner callback will cause an
 * immediate retry. This could easily put your frame in an infinite loop.
 * 
 * @param storage An object with a method load returning a list of items
 * and a method save taking a list of items as its argument.
 * @param runner A function taking three arguments. The first argument is
 * the current item in the queue.
 * The runner must call one and only one of the two last arguments:
 * the second argument if the running was successful and
 * the third argument if the running should be retried.
 * @constructor
 */
ApptusEsales.RunningQueue = function (storage, runner) {
    var items = [];

    function run() {
        if (items.length == 0) {
            return;
        }

        function next() {
            items.shift();
            storage.save(items);
            run();
        }

        function retry() {
            run();
        }

        runner(items[0], next, retry);
    }

    /**
     * @param item The value to be supplied as first argument to the runner function.
     */
    this.add = function (item) {
        items.push(item);
        storage.save(items);
        
        // only start the queue if it was previously empty
        if (items.length == 1) {
            run();
        }
    };

    items = storage.load();
    run();
};
// Define global ApptusEsales object
if (typeof window.ApptusEsales == "undefined") {
    window.ApptusEsales = {};
}

// Define global esales function with methods for notifications and some utility methods.
if (typeof window.ApptusEsales.Esales == "undefined") {
    window.ApptusEsales.Esales = function(settings) {
        var esales = this,
            defaultSettings,
            _mergeProperties,
            _param,
            _executeCallback,
            _ajaxFunction,
            storage,
            delay = 500,
            runner,
            queue,
            _notify,
            _getClassList,
            _automaticListener;

        /**********************/
        /** Default settings **/
        /**********************/

        defaultSettings = {
            pathToNotifier: $('lnkIKEALogoHeader').readAttribute('href')+"notifyesales",
            postJSON: false,
            clickSettings: {
                successCallback: function() {}
            },
            addingToCartSettings: {
                successCallback: function() {}
            }
        };


        /***********************/
        /** Private functions **/
        /***********************/

        // Merge the properties of obj2 into obj1 (overwrites existing properties in obj1)
        _mergeProperties = function (obj1, obj2) {
            for (var p in obj2) {
                if (obj2.hasOwnProperty(p)) {
                    if (typeof obj2[p] == "object") {
                        obj1[p] = _mergeProperties(obj1[p], obj2[p]);
                    } else {
                        obj1[p] = obj2[p];
                    }
                }
            }

            return obj1;
        };

        // Serialize an object of key -> value mapping to a uri string of parameter keys & values.
        _param = function(obj) {
            var s = new Array(),
                p;
            for(p in obj) {
                if(obj.hasOwnProperty(p)) {
                    s.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            }
            return s.join("&");
        };

        // Execute callbacks on a completed ajax request
        _executeCallback = function(ajaxRequest, successCallback, errorCallback) {
            if (ajaxRequest.status == 200) {
                return successCallback(ajaxRequest);
            }
            else {
                return errorCallback(ajaxRequest);
            }

        };

        // Send an ajax request and execute callbacks
        _ajaxFunction = function(parameters, successCallback, errorCallback) {

            var paramStr = settings.postJSON ? JSON.stringify(parameters) : _param(parameters),
                ajaxRequest;

            try {
                // Opera 8.0+, Firefox, Safari
                ajaxRequest = new XMLHttpRequest();
            } catch (e){
                // Internet Explorer Browsers
                try{
                    ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP.6.0");
                } catch (e) {
                    try{
                        ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP.3.0");
                    } catch (e) {
                        try{
                            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
                        } catch (e) {
                            try{
                                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                            } catch (e){
                                // Something went wrong
                                return false;
                            }
                        }
                    }
                }
            }

            ajaxRequest.open("POST", settings.pathToNotifier, true);
            if(settings.postJSON) {
                ajaxRequest.setRequestHeader("Content-type", "application/json");
            } else {
                ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }

            ajaxRequest.onreadystatechange = function() {

                if (ajaxRequest.readyState == 4) {
                    return _executeCallback(ajaxRequest, successCallback, errorCallback);
                }

            };
            ajaxRequest.send(paramStr);
        };

        settings = _mergeProperties(defaultSettings, settings);

        storage = new window.ApptusEsales.CookieStorage(document);

        runner = function (item, next, retry) {
            function errorCallback() {
                window.setTimeout(retry, delay);
                delay *= 2;
            }
            _ajaxFunction(item, next, errorCallback);
        };
        queue = new window.ApptusEsales.RunningQueue(storage, runner);

        // Notify an action to eSales using an ajax request
        _notify = function(parameters, successCallback) {
            if (!parameters.id) {
                parameters.id = new Date().getTime();
            }

            queue.add(parameters);

            if (typeof(successCallback) == "function") {
                successCallback.call(this);
            }
        };

        // Get the list of classes on a DOM element
        _getClassList = function(element) {
            var list = new Array(),
                classes = element.getAttribute("class"),
                cList,
                i;

            if(classes) {
                cList = classes.split(/\s+/);
                for (i = 0; i < cList.length; i++) {
                    if(cList[i]) {
                        list.push(cList[i]);
                    }
                }
            }
            return list;
        };

        // Automatic listener for eSales clicks and addingToCarts 
        _automaticListener = function(event) {
            var target = event.target || event.srcElement, // For IE below 9,
                _findListenedElement = function(element) {
                    var classList = _getClassList(element),
                        i;
                    for(i = 0; i < classList.length; i++) {
                        if(classList[i] === "eS-click" || classList[i] === "eS-addingToCart") {
                            return element;
                        }
                    }
    
                    if(element.nodeName !== "BODY" && element.parentElement) {
                        return _findListenedElement(element.parentElement);
                    }
                    else {
                        return null;
                    }
                },
                classList,
                i,
                clazz;

            target = _findListenedElement(target);

            if(target) {
                classList = _getClassList(target);
                for(i = 0; i < classList.length; i++) {
                    clazz = classList[i];
                    if(clazz === "eS-click") {
                        esales.notifyClick.call(
                                target,
                                esales.findTicket(target),
                                settings.clickSettings.successCallback
                        );
                    }
                    else if(clazz === "eS-addingToCart") {
                        esales.notifyAddingToCart.call(
                                target,
                                esales.findTicket(target),
                                settings.addingToCartSettings.successCallback
                        );
                    }
                }
            }
        };

        /**********************/
        /** Public functions **/
        /**********************/

        /**
         * Notify a click action on a product.
         *
         * @param ticket - Ticket of the product
         * @param successCallback - Callback to execute if notification was successful (optional)
         * @return {Object}
         */
        this.notifyClick = function(ticket, successCallback) {
            if(typeof ticket == "object") {
                ticket = esales.findTicket(ticket);
            }

            var parameters = {
                    type: "click",
                    ticket: ticket
            };

            return _notify.call(
                    this,
                    parameters,
                    successCallback
                );
        };

        /**
         * Notify a property.
         *
         * @param name - Name of the property
         * @param value - Value of the property
         * @param successCallback - Callback to execute if notification was successful (optional)
         * @return {Object}
         * 
         * @deprecated Use server side notifications instead
         */
        this.notifyProperty = function(name, value, successCallback) {
            throw new Error("Not allowed. Use server side notifications instead.");
        };

        /**
         * Notify an addingToCart action on a product.
         *
         * @param ticket - Ticket of the product
         * @param successCallback - Callback to execute if notification was successful (optional)
         * @return {Object}
         */
        this.notifyAddingToCart = function(ticket, successCallback) {
            if(typeof ticket == "object") {
                ticket = esales.findTicket(ticket);
            }

            var parameters = {
                type: "adding_to_cart",
                ticket: ticket
            };

            return _notify.call(
                    this,
                    parameters,
                    successCallback
            );
        };

        /**
         * Notify a rating.
         *
         * @param productKey - The product key
         * @param rating - The rating
         * @param successCallback - Callback to execute if notification was successful (optional)
         * @return {Object}
         */
        this.notifyRating = function(productKey, rating, successCallback) {
            var parameters = {
                    type: "rating",
                    productKey: productKey,
                    rating: rating
            };

            return _notify.call(
                    this,
                    parameters,
                    successCallback
                );
        };

        /**
         * Notify end of a session.
         *
         * @param successCallback - Callback to execute if notification was successful (optional)
         * @return {Object}
         */
        this.notifyEnd = function(successCallback) {
            var parameters = {
                    type: "end"
            };

            return _notify.call(
                    this,
                    parameters,
                    successCallback
                );
        };

        /**
         * Find a ticket on a DOM element.
         *
         * @param element - The DOM element
         * @return The found ticket as a string
         */
        this.findTicket = function(element) {
            if(element.jquery) {
                element = element[0];
            }

            if(element) {
                var prefix = "eS-t-",
                    classList = _getClassList(element),
                    i;
                for (i = 0; i < classList.length; i++) {
                    if(classList[i].length > prefix.length && classList[i].substr(0, prefix.length) == prefix) {
                        return classList[i].substr(prefix.length);
                    }
               }
            }

            return null;
        };

        /**
         * Start the automatic event listener that will listen for clicks on:
         * - Elements with the class '.es-click' and send click notifications upon click.
         * - Elements with the class '.es-addingToCart' and send addingToCart notifications upon click.
         */
        this.startAutomaticListeners = function() {
            if(document.addEventListener) {
                document.addEventListener("click", _automaticListener, false);
            }
            else if(document.attachEvent) {
                document.attachEvent("onclick", _automaticListener);
            }
        };

        /**
         * Stop the automatic event listener.
         */
        this.stopAutomaticListeners = function() {
            if(document.addEventListener) {
                document.removeEventListener("click", _automaticListener, false);
            }
            else if(document.detachEvent) {
                document.detachEvent("onclick", _automaticListener);
            }
        };

        return esales;
    };
}
