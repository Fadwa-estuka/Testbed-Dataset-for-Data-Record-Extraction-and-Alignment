// JS Shims
(function () {
    function isFunction(o) {
        return typeof o === 'function';
    }

    // es5 shims
    (function () {
        // shim [].forEach
        if (!isFunction(Array.forEach)) {
            Array.forEach = function (self, callback, thisArg) {
                var len = self.length,
                    i;

                for (i = 0; i < len; i++) {
                    if (i in self) {
                        callback.call(thisArg, self[i], i, self);
                    }
                }
            };
        }

        // shim [].map
        if (!isFunction(Array.map)) {
            Array.map = function (self, callback, thisArg) {
                var len = self.length,
                    i,
                    result = [];

                for (i = 0; i < len; i++) {
                    if (i in self) {
                        result[i] = callback.call(thisArg, self[i]);
                    }
                }

                return result;
            };
        }

        // shim [].filter
        if (!isFunction(Array.filter)) {
            Array.filter = function (self, callback, thisArg) {
                var len = self.length,
                    i,
                    result = [];

                for (i = 0; i < len; i++) {
                    if (i in self) {
                        callback.call(thisArg, self[i]) && result.push(self[i]);
                    }
                }

                return result;
            };
        }

        // shim ().bind
        if (!isFunction(Function.bind)) {
            Function.bind = function (self, thisArg) {
                var slice = Array.prototype.slice,
                    boundArgs = slice.call(arguments, 2);
                // are empty arrays treated the same across all browsers during concat?
                // [].concat([1,2,3] always ==> [1,2,3]? (also [1,2,3].concat([]))...
                return function () {
                    var args = boundArgs.concat(slice.call(arguments, 0));
                    return self.apply(thisArg, args);
                };
            };
        }

    })();

    // augment String
    (function () {
        if (!isFunction(String.formatcsharp)) {
            String.formatcsharp = function (self) {
                var args = Array.prototype.slice.call(arguments, 1);
                return self.replace(/\{(\d+)\}/g, function (match, index) {
                    if (args[index] !== undefined) {
                        return args[index];
                    } else {
                        return '{' + index + '}';
                    }
                });
            };
        }
    })();

    // augment Date
    (function () {
        if (!isFunction(Date.MvcDate)) {
            Date.MvcDate = function (mvcDate) {
                return new Date(parseInt(mvcDate.replace(/\/Date\((-?\d+)\)\//gi, '$1'), 10));
            };
        }

        function pad2(number) {
            return (number < 10 ? '0' + number : number);
        }

        if (!isFunction(Date.getIso8601Offset)) {
            Date.getIso8601Offset = function (self, includeSeparator) {
                var offsetInMinutes = self.getTimezoneOffset(),
                    offsetSeparator = offsetInMinutes > 0 ? '-' : '+',
                    offsetHours,
                    remainingMinutes;

                offsetInMinutes = Math.abs(offsetInMinutes);
                offsetHours = pad2(Math.floor((offsetInMinutes / 60)));
                remainingMinutes = pad2(offsetInMinutes % 60);

                return ((!!includeSeparator) ? offsetSeparator : '')
                    + offsetHours + ':' + remainingMinutes;
            };
        }

        if (!isFunction(Date.toIso8601String)) {
            // ISO 8601 DateTime format: YYYY-MM-DDTHH:MM:SS±hh:mm
            Date.toIso8601String = function (self) {
                var date = String.formatcsharp('{0}-{1}-{2}', self.getFullYear(), pad2(self.getMonth() + 1), pad2(self.getDate())),
                    time = String.formatcsharp('{0}:{1}:{2}', pad2(self.getHours()), pad2(self.getMinutes()), pad2(self.getSeconds()));

                return String.formatcsharp('{0}T{1}{2}', date, time, Date.getIso8601Offset(self, true));
            };
        }
    })();
})();

// AMD
(function(log, undefined) {

    var isArray = function(o) {
        return o &&
            typeof o === 'object' &&
            typeof o.length === 'number' &&
            typeof o.splice === 'function' &&
            !(o.propertyIsEnumerable ('length'));
    };

    var isFunction = function(o) {
        return typeof o === 'function';
    };

    function Deferred() {
        var slice = Array.prototype.slice,
            status = 'pending',
            callbacks = {
                ok: [],
                fail: []
            },
            values;

        function resolveInternal(state, args) {
            if (status !== 'pending') {
                throw new Error('Deferred has already been resolved');
            }
            status = state;
            values = slice.call(args, 0);
            Array.forEach(callbacks[state], function(e) {
                e.apply(e, values);
            });
        }

        return {
            resolve: function() {
                resolveInternal('ok', arguments);
            },
            reject: function() {
                resolveInternal('fail', arguments);
            },
            promise: function() {
                var self;

                function promiseInternal(state, func) {
                    if (!isFunction(func)) {
                        throw new Error('Callback argument must be a Function');
                    }

                    if (status === state) {
                        func.apply(func, values);
                    } else {
                        callbacks[state].push(func);
                    }
                    return self;
                }

                self = {
                    done: function(func) {
                        return promiseInternal('ok', func);
                    },
                    fail: function(func) {
                        return promiseInternal('fail', func);
                    },
                    then: function(done, error) {
                        return this.done(done).fail(error);
                    }
                };

                return self;
            }
        };
    }

    var pageReady = (function() {
        var ready = new Deferred();

        // TODO: remove dependency on jQuery
        jQuery(function() {
            ready.resolve();
        });
        
        return ready.promise();
    })();
        
    // global modules container; maybe a LifetimeManager? (singleton vs instance?)
    this.modules = { };
    this.factories = { };
    this.dependencyGraph = { };

    var define = (function() {
         var define = function(id, dependencies, factory) {
            // technically AMD spec allows anonymous defines
            if (typeof id !== 'string') {
                log ('define() must be called with an identifier');
                return;
            }

            if (factories[id]) {
                // not sure if we should allow for redefinition..
                throw new Error(id + ' has already been defined');
            }

            if (!isArray(dependencies)) {
                // assume it's the factory function
                factory = dependencies;


                if (!isFunction(factory)) {
                    // potential support for raw objects as well; e.g., define('foo', {});
                    log ('define() must be called with factory function');
                    return;
                }

                // default dependencies per spec.
                // dependencies = ['require', 'exports', 'module'];

                // make an empty dependency list
                dependencies = ['require'];

                // Not implementing the dynamic code scan for require withing the factory
            }
             
            // factories[id] = { factory: factory, dependencies: dependencies };
            factories[id] = function() {
                return factory.apply(this, Array.map(dependencies, function(e) {
                    if (!modules[e]) {
                        throw new Error(e + ' has not been resolved');
                    }
                    return modules[e];
                }));
            };

            // initialize dependency graph
            dependencyGraph[id] = [];

            // map dependencies
            Array.forEach(Array.filter(dependencies, function(e) {
                        var result = false;
                        switch (e) {
                        case 'require':
                        case 'exports':
                        case 'module':
                            break;
                        default:
                            result = true;
                        }
                        return result;
                    }),
                function(e) {
                    dependencyGraph[id].push(e);
                });
        };

        // sort of AMD-ish...
        define.amd = {
            jQuery: true // flagged otherwise jquery doesn't load
        };
        return define;
    })();

    var require = (function() {
        return function(ids, callback) {
            if(!isArray(ids)) {
                throw new Error("require(...) takes an array of module ids. Specified:" + ids);
            }

            var requireOne = function(id) {
                var deferOne = new Deferred();
                if(modules[id]) {
                    deferOne.resolve(modules[id]);
                    return deferOne.promise();
                }

                var resolve = function() {
                    if(modules[id]) {
                        deferOne.resolve(modules[id]);
                        return;
                    }
                    var dependencies = dependencyGraph[id],
                        reqs = [];

                    // TODO: Support adding additional script tags to the document to load up modules that aren't loaded
                    if(!dependencies) {
                        throw new Error('require(' + id + '): ' + id + ' has not been defined');
                    }

                    if(dependencies.length === 0) {
                        modules[id] = factories[id]();
                        deferOne.resolve(modules[id]);
                        return;
                    }

                    var visited = { };
                    var visit = function(node) {
                        if(!visited[node]) {
                            visited[node] = true;
                            var nodes = dependencyGraph[node];
                            if(!nodes) {
                                throw new Error(node + ' is missing from dependency graph');
                            }

                            Array.forEach(nodes, function(e) {
                                if(!dependencyGraph[e]) {
                                    throw new Error(e + ' is missing from dependency graph');
                                }

                                visit(e);
                            });
                            reqs.push(node);
                        }
                    };

                    Array.forEach(dependencies, function(e) {
                        visit(e);
                    });


                    // requirements array
                    this.reqs = reqs;
                    Array.forEach(Array.filter(reqs, function(e) {
                            return !!!modules[e];
                        }), function(e) {
                            modules[e] = factories[e]();
                        });

                    modules[id] = factories[id]();
                    deferOne.resolve(modules[id]);
                };

                // TODO: Fix this defer, should be done internally to resolve if the dependency doesn't exist yet.
                pageReady.done(resolve);

                return deferOne.promise();
            };

            var doneCount = 0;
            var callbackArguments = [];
            var allDone = new Deferred();
            var checkAll = function(position) {
                return function(data) {
                    doneCount++;
                    callbackArguments[position] = data;
                    if(doneCount < ids.length) {
                        return;
                    }

                    if(callback && isFunction(callback)) {
                        callback.apply(this, callbackArguments); // TODO: what 'this' to use?
                    }
                    allDone.resolve(callbackArguments);
                };
            };
            for(var i = 0; i < ids.length; i++) {
                callbackArguments.push(undefined);
                requireOne(ids[i])
                    .done(checkAll(i));
            }
            return allDone.promise();
        };
    })();

    modules['require'] = require;
    this.define = define;
    this.require = require;
})(function (msg) { window.console && console.log(msg); });

// AMD Shims
define('window', [], function() {
    return window;
});

define('jquery', ['window'], function(window) {
    return window.jQuery;
});

define('console', ['window'], function(window) {
    return window.console || {
        log: function() { }
    };
});

define('document', [], function () {
    return document;
});

define('navigator', [], function () {
    return navigator;
});
