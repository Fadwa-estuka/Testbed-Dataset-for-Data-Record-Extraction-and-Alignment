/*
 * This module expects the header to be fully loaded, and "core" must be
 * passed when it is instantiated.  Example:
 *
 *     _M.ready(function(core) {
 *             window.livefyreAuth = new LivefyreAuth(core);
 *         })
 *
 */

(function ($, fyre, document, window) {
    'use strict';

    var LivefyreAuth = window.LivefyreAuth = function (headerCore, debug) {
        var flow = headerCore.flow,
            user = flow.getUser(),
            authDelegate = '';

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

        function extendAuthDelegate() {
            var authDelegate = new fyre.conv.RemoteAuthDelegate();

            $.extend(authDelegate, {
                login: function (handlers) {
                    var data = {
                        regReferrer: document.referrer || '',
                        regUrl: window.location.toString(),
                        regSource: '',
                        regCTA: 'signin',
                        regCampaign: 'mem_comments'
                    };

                    localStorage.removeItem('memFrag/RegSource');
                    localStorage.setItem('memFrag/RegSource',JSON.stringify(data));

                    $.when(flow.processFlow('signin', null, 'livefyre'))
                        .done(function () {
                            handlers.success();
                            return true;
                        })
                        .fail(function () {
                            handlers.failure();
                            return false;
                        });
                },
                logout: function (handlers) {
                    flow.processFlow('logout');
                    handlers.success();
                    return false;
                },
                viewProfile: function (handlers, author) {
                    if (author && author.profileUrl) {
                        document.location = author.profileUrl;
                    }
                    handlers.success();
                    return true;
                },
                editProfile: function (handlers) {
                    handlers.success();
                    return true;
                }
            });
            return authDelegate;
        }

        // Log a header user into LiveFyre
        function finishLogin() {
            var livefyreToken, message;
            $.when(user.isLoggedIn())
                .done(function (loggedIn) {
                    if (loggedIn) {
                        console.log(user.get('livefyreToken'));
                        log('User logged into header.' +
							'Logging in to LiveFyre...');
                        try {
                            livefyreToken = user.get('livefyreToken') || null;
                            fyre.conv.login(livefyreToken);
                            log('User is logged in to LiveFyre.');
                        } catch (e) {
                            message = 'User is NOT logged in to Livefyre. ' +
                                        'Error using token ' +
                                        user.get('livefyreToken') + '.  ' +
                                        'Error is: ' + e;
                            log(message, true);
                        }
                    } else {
                        log('User not logged into header.');
                    }
                })
                .fail(function () {
                    var message = 'Unable to get user\'s state from the ' +
                                    'header: isLoggedIn() method failed.';
                    log(message, true);
                });
        }

        authDelegate = extendAuthDelegate();
        user.loggedIn(finishLogin);

        return {
            finishLogin: finishLogin,
            log: log,
            authDelegate: authDelegate
        };
    };

    return LivefyreAuth;

}(jQuery, fyre, document, window));
