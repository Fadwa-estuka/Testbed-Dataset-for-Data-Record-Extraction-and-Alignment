/*
 * This module expects the header to be fully loaded, and "core" must be
 * passed when it is instantiated.  Example:
 *
 *     _M.ready(function (core) {
 *             window.livefyreManager = new LivefyreManager(core);
 *         })
 *
 */

(function ($, fyre, LivefyreAuth, window) {
    'use strict';

    var LivefyreManager = window.LivefyreManager = function (hCore, debug) {
        var _livefyreLoaded = new $.Deferred(),
            auth = null,
            config;

        /*
         * Uses the error handler library in ngs-header when available
         * isError is boolean.  If false, it's just a debug log.
         */
        function log(message, data, isError)  {
            if (typeof _E !== 'undefined') {
                if (isError) {
                    _E.warn(message, 'LivefyreManager', data);
                } else {
                    _E.log(message, 'LivefyreManager', data);
                }
            } else {
                if (isError) {
                    console.warn(message);
                } else {
                    if (debug) {
                        console.log(message);
                    }
                }
            }
        }

        function livefyreLoaded() {
            return _livefyreLoaded.promise();
        }

        function livefyreReady() {
            var dfd = new $.Deferred(),
                intervals = 5000, // every five seconds
                timeout = 1000 * 60, // a minute
                cnt = 0,
                intervalId = null;

            function doChecks() {

                cnt++;

                // if livefyre variables NOT set on page
                if (('undefined' === typeof fyre) ||
                     ('undefined' === typeof window.livefyreConfig) ||
                     ('undefined' === typeof window.livefyreConfig.streams) ||
                     (!window.livefyreConfig.streams.length)) {

                    if ('undefined' === typeof fyre) {
                        log('LiveFyre script not loaded.');
                    } else {
                        log('LiveFyre config values not found.');
                    }

                    // if we're doing intervals and  reached our timeout:
                    if (intervalId) {
                        if (cnt * intervals >= timeout) {
                            dfd.reject();
                            clearInterval(intervalId);
                        }
                    }
                    return false;

                } else {

                    // found livefyre variables set on page.
                    log('LiveFyre script loaded.  Config values found.');
                    dfd.resolve();
                    if (intervalId) {
                        clearInterval(intervalId);
                    }
                    return true;
                }
            }
            if (!doChecks()) {
                intervalId = setInterval(doChecks, intervals);
            }
            return dfd.promise();
        }

        function loadStreams() {
            // Calls fyre.conv.load to load any streams configured on the page.
            log('Loading stream(s)...');
            fyre.conv.load(
                config.global,
                config.streams,
                function (widget) {
                    _livefyreLoaded.resolve(widget);
                    log('Stream(s) loaded.');
                    auth.finishLogin(auth);
                });
        }

        function getLivefyreWidget() {
            return $.when(livefyreLoaded())
                .pipe(function (widget) {
                    return widget;
                }, function () {
                    return null;
                });
        }

        // INIT
        $.when(livefyreReady())
            .done(function () {
                config = window.livefyreConfig;
                auth = new LivefyreAuth(hCore);
                config.global.authDelegate = auth.authDelegate;
                loadStreams();
            });

        return {
            auth: auth,
            debug: debug,
            getLivefyreWidget: getLivefyreWidget,
            livefyreLoaded: livefyreLoaded,
            livefyreReady: livefyreReady,
            log: log
        };

    };

    return LivefyreManager;

}(jQuery, fyre, window.LivefyreAuth, window));
