/** Copyright © 2005-2017 Apple Inc. All Rights Reserved. **/
(function(){
var preview_loader = {};
var integrator = {};
var api = {};
var distributor = {};
var query = {};
var redirect = {};
var detect = {};
var directive = {};
var json = {};
var tracker = {};
var template = {};
var visitor = {};
var main = {};
var cookie = {};
var user = {};
var iapi = {};
var evaluator = {};
var data = {};
var condition = {
  "facade": {}
};
var segmenter = {};
var timer = {};
var optly = {
  "murmur3": {}, 
  "Visitor": {}, 
  "taint": {}, 
  "nativity": {}, 
  "timeAndDayInterval": {}, 
  "client": {
    "geolocation": {}, 
    "rum": {
      "RumCollector": {}
    }, 
    "storage": {
      "Storage": {}
    }, 
    "diagnostic": {}, 
    "Facade": {}, 
    "preview": {
      "Logger": {}
    }, 
    "third_party": {}
  }, 
  "CIDR": {}, 
  "Cleanse": {}, 
  "match": {}, 
  "hashing": {}
};
var common = {};
var behavior = {};
var useragent = {};
var plan = {};

geolocation = {};
// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client_geotargeting/geolocation_request.js

// This file runs before anything else in client.js and makes the request for geo2.js
// None of the util functions provided in client are available when this file runs.

/**
 * Adds the script tag to request geo data to the page.
 * @param {string} url The url to request geo from
 * @param {string} projectId The current projectId
 * @param {boolean} addParams If true first party cookies will be 
 *   sent with the request as query params
 */
optly.client.geolocation.makeRequest = function(url, projectId, addParams){
  // Record when geolocation request was made
  // Note(tyler): timestamp won't work if RUM starts using window.performance.now again
  geolocation['requested'] = +new Date();
  if(addParams){
    var params = optly.client.geolocation.readCookies();
    params["project"] = projectId;
    url += "?" + optly.client.geolocation.createQueryParams(params);
  }
  optly.client.geolocation.addScriptTag(url);
};

/**
 * @private
 * @param {Object} obj
 * @returns {string}
 */
optly.client.geolocation.createQueryParams = function(obj){
  var query = [];
  for(var p in obj){
    if(obj.hasOwnProperty(p)) {
      query.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return query.join("&");
};

/**
 * Creates an object containing all cookies and their values.
 * Optimizely cookies and cookies with large values are excluded.
 * @private
 * @returns {Object.<string,string>}
 */
optly.client.geolocation.readCookies = function(){
  var re = /([^\s;]*)=([^;]*)/ig,
    cookieStr = document.cookie,
    cookies = {};
  cookieStr.replace(re, function(match, name, value) {
    if(value.length <= 100 && name.indexOf("optimizely") !== 0) {
      cookies["c_" + name] = unescape(value);
    }
  });
  return cookies;
};

/**
 * @private
 * @param {string} url
 */
optly.client.geolocation.addScriptTag = function(url){
  var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  var scriptTag = document.createElement("script"); 
  scriptTag.type = "text/javascript"; 
  scriptTag.async = true; 
  scriptTag.src = url;
  head.insertBefore(scriptTag, head.firstChild);
};

geolocation["requestGeo"] = optly.client.geolocation.makeRequest;

})();
optimizelyCode = function(data){
var blankExperimentData={
  "admin_account_id": 252960880, 
  "api_host": "api.optimizely.com", 
  "blacklisted_experiments": [
    1469260793, 
    1380611449, 
    1767151173, 
    1376524086, 
    1773120103
  ], 
  "goal_expressions": {
    "2434760265": [
      "^engagement$"
    ]
  }, 
  "installation_verified": true, 
  "log_host": "log.optimizely.com", 
  "preview_host": "//optimizely.s3.amazonaws.com", 
  "project_id": 2441770024, 
  "revision": 2, 
  "segments": {
    "2407520818": {
      "api_name": "optimizely_mobile", 
      "id": 2407520818, 
      "name": "Mobile Visitors", 
      "segment_value_type": "mobile"
    }, 
    "2407710494": {
      "api_name": "optimizely_browser", 
      "id": 2407710494, 
      "name": "Browser", 
      "segment_value_type": "browser"
    }, 
    "2421780076": {
      "api_name": "optimizely_campaign", 
      "id": 2421780076, 
      "name": "Campaign", 
      "segment_value_type": "campaign"
    }, 
    "2429930774": {
      "api_name": "optimizely_source_type", 
      "id": 2429930774, 
      "name": "Source Type", 
      "segment_value_type": "source_type"
    }
  }, 
  "summary_revenue_goal_id": 2434850593, 
  "token_hash": "73b76e1201253043b565b8e8ab5704ffd304957879e64339601790ea2d5c57eb", 
  "version": "master-1840.382146629337035635", 
  "www_host": "www.optimizely.com"
};
var DATA = data || blankExperimentData;

var preview_loader = {};
var integrator = {};
var api = {};
var distributor = {};
var query = {};
var redirect = {};
var detect = {};
var directive = {};
var json = {};
var tracker = {};
var template = {};
var visitor = {};
var main = {};
var cookie = {};
var user = {};
var iapi = {};
var evaluator = {};
var data = {};
var condition = {
  "facade": {}
};
var segmenter = {};
var timer = {};
var optly = {
  "murmur3": {}, 
  "Visitor": {}, 
  "taint": {}, 
  "nativity": {}, 
  "timeAndDayInterval": {}, 
  "client": {
    "geolocation": {}, 
    "rum": {
      "RumCollector": {}
    }, 
    "storage": {
      "Storage": {}
    }, 
    "diagnostic": {}, 
    "Facade": {}, 
    "preview": {
      "Logger": {}
    }, 
    "third_party": {}
  }, 
  "CIDR": {}, 
  "Cleanse": {}, 
  "match": {}, 
  "hashing": {}
};
var common = {};
var behavior = {};
var useragent = {};
var plan = {};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/nativity.js

optly.nativity.getNativeGetElementsByClassName = function() {
  var nativeGetByClass = document.getElementsByClassName;

  // prototype.lite.js, which is part of moo.fx, sets
  // document.getElementsByClassName without checking if it already exists.
  // Its implementation doesn't play nice with jQuery.
  if (!optly.nativity.isNativeFunction(nativeGetByClass)) {
    var optimizely = window['optimizely'] || {};
    var optimizelyGetByClass = optimizely['getElementsByClassName'];
    var optly_ = window['optly'] || {};
    var optlyGetByClass = optly_['getElementsByClassName'];

    if (optly.nativity.isNativeFunction(optimizelyGetByClass)) {
      nativeGetByClass = optimizelyGetByClass;
    }
    else if (optly.nativity.isNativeFunction(optlyGetByClass)) {
      nativeGetByClass = optlyGetByClass;
    }
    else {
      nativeGetByClass = null;
    }
  }

  return nativeGetByClass;
};

/**
 * Check if function is native or has been replaced.
 *
 * @param {Object} function_
 */
optly.nativity.isNativeFunction = function(function_) {
  // Use String constructor for compatibility with MSIE since some
  // methods are objects and not functions so don't have toString().
  // http://stackoverflow.com/questions/6598945/detect-if-function-is-native-to-browser
  return function_ && String(function_).indexOf("[native code]") !== -1;
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/cleanse/main.js


/**
 * When properties are added to the prototypes of native Javascript types,
 * there's a possibility that jQuery and other libraries will not load properly.
 *
 * For example, defining Object.prototype.extend cripples jQuery from loading.
 *
 * Cleanse saves properties added by the page's scripts and removes them
 * temporarily while Optimizely is loading. Afterwards, those properties will
 * be restored.
 *
 *
 * 2014-11-06: Removed HTMLElement from list of prototypes checked because
 *             Safari 7.1+ (sometimes) logs an error each time a property of
 *             HTMLElement.prototype is accessed.
 * 2012-09-15: HTMLElement added to list of prototypes checked because
 *             prototype.js 1.5.1.1 was found to to add properties.
 * 2012-09-27: Change template (not this file) to make sure this is only
 *             loaded once.
 */

/**
 * Iterate over keys in an object excluding properties found on prototype.
 *
 * @param {Object} object
 * @param {Function} function_
 * @param {Object=} context
 */
optly.Cleanse.each = function(object, function_, context) {
  // Get references to getter and setter functions instead of their return
  // values using this deprecated functions if they're available:
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/lookupGetter
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/lookupSetter
  var hasLookupGetter = !!Object.prototype.__lookupGetter__;
  var hasLookupSetter = !!Object.prototype.__lookupSetter__;

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      // Look up the definition of a getter set using __defineGetter__().
      // If a page has defined getters on the prototype, then we need the
      // definition of the getter, not just the value it returns.
      var getter = hasLookupGetter ? object.__lookupGetter__(key) : null;
      var setter = hasLookupSetter ? object.__lookupSetter__(key) : null;

      // MSIE behaves abnormally when you try to access methods and
      // properties on protected JavaScript objects (like HTMLElement).
      // MSIE 9.0 started throwing "Invalid calling object" exceptions.
      try {
        // If we have a getter, then the value returned isn't useful.
        var value = !getter ? object[key] : null;

        function_.call(context, key, value, getter, setter);
      }
      catch (err) {}
    }
  }
};

/**
 * Restore prototypes.
 */
optly.Cleanse.finish = function() {
  if (optly.Cleanse.running) {
    optly.Cleanse.running = false;

    // Restore Javascript prototypes:  Object, Function, etc.
    optly.Cleanse.each(optly.Cleanse.types, function(typeName, type) {
        // Restore getters to prototypes.
        if (Object.prototype.__defineGetter__) {
          var getters = optly.Cleanse.getters[typeName];
          optly.Cleanse.each(getters, function(propertyName, getter) {
              type.prototype.__defineGetter__(propertyName, getter);
              optly.Cleanse.log("restored getter", typeName, propertyName);
            });
        }

        // Restore setters to prototypes.
        if (Object.prototype.__defineSetter__) {
          var setters = optly.Cleanse.setters[typeName];
          optly.Cleanse.each(setters, function(propertyName, setter) {
              type.prototype.__defineSetter__(propertyName, setter);
              optly.Cleanse.log("restored setter", typeName, propertyName);
            });
        }

        // Restore properties to prototypes.
        var properties = optly.Cleanse.properties[typeName];
        optly.Cleanse.each(properties, function(propertyName, property) {
            type.prototype[propertyName] = property;
            optly.Cleanse.log("restored property", typeName, propertyName);
          });
      });

    optly.Cleanse.unfixGetElementsByClassName();

    optly.Cleanse.log("finish");

    // Output log.
    var console = window.console;
    var param = "optimizely_log=true";
    var log = window.location.hash.indexOf(param) !== -1 ||
              window.location.search.indexOf(param) !== -1;
    if (log && console && console.log) {
      var logs = optly.Cleanse.logs;
      for (var i = 0; i < logs.length; i++) {
        console.log(logs[i]);
      }
    }
  }
};

/**
 * @param {string} action
 * @param {string=} typeName
 * @param {string=} propertyName
 */
optly.Cleanse.log = function(action, typeName, propertyName) {
  if (typeName) {
    typeName = typeName.replace(/_/g, "");
    optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " +
                            action + ": " + typeName + "." + propertyName);
  }
  else {
    optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + action);
  }
};

/**
 * Store properties and remove from prototypes.
 */
optly.Cleanse.start = function() {
  // Only run on non-Optimizely sites or on the editor proxy or clienttest
  var hostname = window.location.hostname;

  if (hostname.indexOf("optimizely") !== -1
      && hostname.indexOf("edit") === -1
      && hostname.indexOf("preview") === -1
      && hostname.indexOf("test") === -1) {
    return;
  }

  if (optly.Cleanse.running) {
    optly.Cleanse.log("already running so didn't start");
    return;
  }
  optly.Cleanse.log("start");
  optly.Cleanse.running = true;

  // Make sure type isn't undefined.
  // e.g. HTMLElement isn't accessible in MSIE before version 9.0.
  for (var type in optly.Cleanse.types) {
    if (!optly.Cleanse.types[type]) {
      delete optly.Cleanse.types[type];
    }
  }

  // Cleanse JavaScript prototypes: Object, Function, etc.
  optly.Cleanse.each(optly.Cleanse.types, function(typeName, type) {
      optly.Cleanse.getters[typeName] = {};
      optly.Cleanse.properties[typeName] = {};
      optly.Cleanse.setters[typeName] = {};

      // Save getters and properties and delete from prototypes.
      optly.Cleanse.each(type.prototype, function(propertyName, property, getter, setter) {
          if (optly.nativity.isNativeFunction(property) ||
              optly.nativity.isNativeFunction(getter) ||
              optly.nativity.isNativeFunction(setter)) {
            optly.Cleanse.log("ignore native code", typeName, propertyName);
            return;
          }

          if (getter) {
            optly.Cleanse.getters[typeName][propertyName] = getter;
            optly.Cleanse.log("cleansed getter", typeName, propertyName);
          }
          else {
            optly.Cleanse.properties[typeName][propertyName] = property;
            optly.Cleanse.log("cleansed property", typeName, propertyName);
          }

          if (setter) {
            optly.Cleanse.setters[typeName][propertyName] = setter;
            optly.Cleanse.log("cleansed setter", typeName, propertyName);
          }

          delete type.prototype[propertyName];
        });
    });

  optly.Cleanse.fixGetElementsByClassName();
  optly.Cleanse.hasRunStart = true;
};

/**
 * Restore native function if necessary and possible.
 */
optly.Cleanse.fixGetElementsByClassName = function() {
  if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
    var nativeGetElementsByClassName = optly.nativity.getNativeGetElementsByClassName();

    if (nativeGetElementsByClassName) {
      optly.Cleanse.getElementsByClassName = document.getElementsByClassName;
      document.getElementsByClassName = nativeGetElementsByClassName;
    }
    else {
      // Unable to find native implementation.
      optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing");
    }
  }
};

/**
 * Restore custom function.
 */
optly.Cleanse.unfixGetElementsByClassName = function() {
  if (optly.Cleanse.getElementsByClassName) {
    document.getElementsByClassName = optly.Cleanse.getElementsByClassName;
    optly.Cleanse.getElementsByClassName = null;
  }
};

/**
 * Stores function that replaced native JavaScript function.
 */
optly.Cleanse.getElementsByClassName = null;

/**
 * Stores getters that were added to native JavaScript types.
 *
 * @private
 */
optly.Cleanse.getters = {};

/**
 * Store logs.
 */
optly.Cleanse.logs = [];

/**
 * Stores properties that were added to native JavaScript types.
 *
 * @private
 */
optly.Cleanse.properties = {};

/**
 * Stores setters that were added to native JavaScript types.
 *
 * @private
 */
optly.Cleanse.setters = {};

/**
 * Prototypes to cleanse.
 *
 * @private
 */
optly.Cleanse.types = {
//  'Array_' : Array,
//  'DOMParser_' : DOMParser,
//  'Function_' : Function,
//  'Number_' : Number,
  'Object_' : Object
//  'String_' : String,
//  'XMLSerializer_' : XMLSerializer
};

window.optly = window.optly || {};
window.optly.Cleanse = {
  finish: optly.Cleanse.finish,
  logs: optly.Cleanse.logs,
  start: optly.Cleanse.start
};
optly.Cleanse.start();
var $=jQuery;
// File: /mnt/ephemeral0/workspace/optimizely-master/out/closure_library/closure/goog/base.js
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Bootstrap for the Google JS Library (Closure).
 *
 * In uncompiled mode base.js will write out Closure's deps file, unless the
 * global <code>CLOSURE_NO_DEPS</code> is set to true.  This allows projects to
 * include their own deps file(s) from different locations.
 *
 */


/**
 * @define {boolean} Overridden to true by the compiler when --closure_pass
 *     or --mark_as_compiled is specified.
 */
var COMPILED = false;


/**
 * Base namespace for the Closure library.  Checks to see goog is
 * already defined in the current scope before assigning to prevent
 * clobbering if base.js is loaded more than once.
 *
 * @const
 */
var goog = goog || {}; // Identifies this file as the Closure base.


/**
 * Reference to the global context.  In most cases this will be 'window'.
 */
goog.global = this;


/**
 * @define {boolean} DEBUG is provided as a convenience so that debugging code
 * that should not be included in a production js_binary can be easily stripped
 * by specifying --define goog.DEBUG=false to the JSCompiler. For example, most
 * toString() methods should be declared inside an "if (goog.DEBUG)" conditional
 * because they are generally used for debugging purposes and it is difficult
 * for the JSCompiler to statically determine whether they are used.
 */
goog.DEBUG = true;


/**
 * @define {string} LOCALE defines the locale being used for compilation. It is
 * used to select locale specific data to be compiled in js binary. BUILD rule
 * can specify this value by "--define goog.LOCALE=<locale_name>" as JSCompiler
 * option.
 *
 * Take into account that the locale code format is important. You should use
 * the canonical Unicode format with hyphen as a delimiter. Language must be
 * lowercase, Language Script - Capitalized, Region - UPPERCASE.
 * There are few examples: pt-BR, en, en-US, sr-Latin-BO, zh-Hans-CN.
 *
 * See more info about locale codes here:
 * http://www.unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers
 *
 * For language codes you should use values defined by ISO 693-1. See it here
 * http://www.w3.org/WAI/ER/IG/ert/iso639.htm. There is only one exception from
 * this rule: the Hebrew language. For legacy reasons the old code (iw) should
 * be used instead of the new code (he), see http://wiki/Main/IIISynonyms.
 */
goog.LOCALE = 'en';  // default to en


/**
 * Creates object stubs for a namespace.  The presence of one or more
 * goog.provide() calls indicate that the file defines the given
 * objects/namespaces.  Build tools also scan for provide/require statements
 * to discern dependencies, build dependency files (see deps.js), etc.
 * @see goog.require
 * @param {string} name Namespace provided by this file in the form
 *     "goog.package.part".
 */
goog.provide = function(name) {
  if (!COMPILED) {
    // Ensure that the same namespace isn't provided twice. This is intended
    // to teach new developers that 'goog.provide' is effectively a variable
    // declaration. And when JSCompiler transforms goog.provide into a real
    // variable declaration, the compiled JS should work the same as the raw
    // JS--even when the raw JS uses goog.provide incorrectly.
    if (goog.isProvided_(name)) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];

    var namespace = name;
    while ((namespace = namespace.substring(0, namespace.lastIndexOf('.')))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }

  goog.exportPath_(name);
};


/**
 * Marks that the current file should only be used for testing, and never for
 * live code in production.
 * @param {string=} opt_message Optional message to add to the error that's
 *     raised when used in production code.
 */
goog.setTestOnly = function(opt_message) {
  if (COMPILED && !goog.DEBUG) {
    opt_message = opt_message || '';
    throw Error('Importing test-only code into non-debug environment' +
                opt_message ? ': ' + opt_message : '.');
  }
};


if (!COMPILED) {

  /**
   * Check if the given name has been goog.provided. This will return false for
   * names that are available only as implicit namespaces.
   * @param {string} name name of the object to look for.
   * @return {boolean} Whether the name has been provided.
   * @private
   */
  goog.isProvided_ = function(name) {
    return !goog.implicitNamespaces_[name] && !!goog.getObjectByName(name);
  };

  /**
   * Namespaces implicitly defined by goog.provide. For example,
   * goog.provide('goog.events.Event') implicitly declares
   * that 'goog' and 'goog.events' must be namespaces.
   *
   * @type {Object}
   * @private
   */
  goog.implicitNamespaces_ = {};
}


/**
 * Builds an object structure for the provided namespace path,
 * ensuring that names that already exist are not overwritten. For
 * example:
 * "a.b.c" -> a = {};a.b={};a.b.c={};
 * Used by goog.provide and goog.exportSymbol.
 * @param {string} name name of the object that this file defines.
 * @param {*=} opt_object the object to expose at the end of the path.
 * @param {Object=} opt_objectToExportTo The object to add the path to; default
 *     is |goog.global|.
 * @private
 */
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split('.');
  var cur = opt_objectToExportTo || goog.global;

  // Internet Explorer exhibits strange behavior when throwing errors from
  // methods externed in this manner.  See the testExportSymbolExceptions in
  // base_test.html for an example.
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }

  // Certain browsers cannot parse code in the form for((a in b); c;);
  // This pattern is produced by the JSCompiler when it collapses the
  // statement above into the conditional loop below. To prevent this from
  // happening, use a for-loop and reserve the init logic as below.

  // Parentheses added to eliminate strict JS warning in Firefox.
  for (var part; parts.length && (part = parts.shift());) {
    if (!parts.length && goog.isDef(opt_object)) {
      // last part and we have an object; use it
      cur[part] = opt_object;
    } else if (cur[part]) {
      cur = cur[part];
    } else {
      cur = cur[part] = {};
    }
  }
};


/**
 * Returns an object based on its fully qualified external name.  If you are
 * using a compilation pass that renames property names beware that using this
 * function will not find renamed properties.
 *
 * @param {string} name The fully qualified name.
 * @param {Object=} opt_obj The object within which to look; default is
 *     |goog.global|.
 * @return {?} The value (object or primitive) or, if not found, null.
 */
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split('.');
  var cur = opt_obj || goog.global;
  for (var part; part = parts.shift(); ) {
    if (goog.isDefAndNotNull(cur[part])) {
      cur = cur[part];
    } else {
      return null;
    }
  }
  return cur;
};


/**
 * Globalizes a whole namespace, such as goog or goog.lang.
 *
 * @param {Object} obj The namespace to globalize.
 * @param {Object=} opt_global The object to add the properties to.
 * @deprecated Properties may be explicitly exported to the global scope, but
 *     this should no longer be done in bulk.
 */
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for (var x in obj) {
    global[x] = obj[x];
  }
};


/**
 * Adds a dependency from a file to the files it requires.
 * @param {string} relPath The path to the js file.
 * @param {Array} provides An array of strings with the names of the objects
 *                         this file provides.
 * @param {Array} requires An array of strings with the names of the objects
 *                         this file requires.
 */
goog.addDependency = function(relPath, provides, requires) {
  if (!COMPILED) {
    var provide, require;
    var path = relPath.replace(/\\/g, '/');
    var deps = goog.dependencies_;
    for (var i = 0; provide = provides[i]; i++) {
      deps.nameToPath[provide] = path;
      if (!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {};
      }
      deps.pathToNames[path][provide] = true;
    }
    for (var j = 0; require = requires[j]; j++) {
      if (!(path in deps.requires)) {
        deps.requires[path] = {};
      }
      deps.requires[path][require] = true;
    }
  }
};




// NOTE(nnaze): The debug DOM loader was included in base.js as an orignal
// way to do "debug-mode" development.  The dependency system can sometimes
// be confusing, as can the debug DOM loader's asyncronous nature.
//
// With the DOM loader, a call to goog.require() is not blocking -- the
// script will not load until some point after the current script.  If a
// namespace is needed at runtime, it needs to be defined in a previous
// script, or loaded via require() with its registered dependencies.
// User-defined namespaces may need their own deps file.  See http://go/js_deps,
// http://go/genjsdeps, or, externally, DepsWriter.
// http://code.google.com/closure/library/docs/depswriter.html
//
// Because of legacy clients, the DOM loader can't be easily removed from
// base.js.  Work is being done to make it disableable or replaceable for
// different environments (DOM-less JavaScript interpreters like Rhino or V8,
// for example). See bootstrap/ for more information.


/**
 * @define {boolean} Whether to enable the debug loader.
 *
 * If enabled, a call to goog.require() will attempt to load the namespace by
 * appending a script tag to the DOM (if the namespace has been registered).
 *
 * If disabled, goog.require() will simply assert that the namespace has been
 * provided (and depend on the fact that some outside tool correctly ordered
 * the script).
 */
goog.ENABLE_DEBUG_LOADER = true;


/**
 * Implements a system for the dynamic resolution of dependencies
 * that works in parallel with the BUILD system. Note that all calls
 * to goog.require will be stripped by the JSCompiler when the
 * --closure_pass option is used.
 * @see goog.provide
 * @param {string} name Namespace to include (as was given in goog.provide())
 *     in the form "goog.package.part".
 */
goog.require = function(name) {

  // if the object already exists we do not need do do anything
  // TODO(arv): If we start to support require based on file name this has
  //            to change
  // TODO(arv): If we allow goog.foo.* this has to change
  // TODO(arv): If we implement dynamic load after page load we should probably
  //            not remove this code for the compiled output
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      return;
    }

    if (goog.ENABLE_DEBUG_LOADER) {
      var path = goog.getPathFromDeps_(name);
      if (path) {
        goog.included_[path] = true;
        goog.writeScripts_();
        return;
      }
    }

    var errorMessage = 'goog.require could not find: ' + name;
    if (goog.global.console) {
      goog.global.console['error'](errorMessage);
    }


      throw Error(errorMessage);

  }
};


/**
 * Path for included scripts
 * @type {string}
 */
goog.basePath = '';


/**
 * A hook for overriding the base path.
 * @type {string|undefined}
 */
goog.global.CLOSURE_BASE_PATH;


/**
 * Whether to write out Closure's deps file. By default,
 * the deps are written.
 * @type {boolean|undefined}
 */
goog.global.CLOSURE_NO_DEPS = true;


/**
 * A function to import a single script. This is meant to be overridden when
 * Closure is being run in non-HTML contexts, such as web workers. It's defined
 * in the global scope so that it can be set before base.js is loaded, which
 * allows deps.js to be imported properly.
 *
 * The function is passed the script source, which is a relative URI. It should
 * return true if the script was imported, false otherwise.
 */
goog.global.CLOSURE_IMPORT_SCRIPT;


/**
 * Null function used for default values of callbacks, etc.
 * @return {void} Nothing.
 */
goog.nullFunction = function() {};


/**
 * The identity function. Returns its first argument.
 *
 * @param {*=} opt_returnValue The single value that will be returned.
 * @param {...*} var_args Optional trailing arguments. These are ignored.
 * @return {?} The first argument. We can't know the type -- just pass it along
 *      without type.
 * @deprecated Use goog.functions.identity instead.
 */
goog.identityFunction = function(opt_returnValue, var_args) {
  return opt_returnValue;
};


/**
 * When defining a class Foo with an abstract method bar(), you can do:
 *
 * Foo.prototype.bar = goog.abstractMethod
 *
 * Now if a subclass of Foo fails to override bar(), an error
 * will be thrown when bar() is invoked.
 *
 * Note: This does not take the name of the function to override as
 * an argument because that would make it more difficult to obfuscate
 * our JavaScript code.
 *
 * @type {!Function}
 * @throws {Error} when invoked to indicate the method should be
 *   overridden.
 */
goog.abstractMethod = function() {
  throw Error('unimplemented abstract method');
};


/**
 * Adds a {@code getInstance} static method that always return the same instance
 * object.
 * @param {!Function} ctor The constructor for the class to add the static
 *     method to.
 */
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      // NOTE: JSCompiler can't optimize away Array#push.
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return ctor.instance_ = new ctor;
  };
};


/**
 * All singleton classes that have been instantiated, for testing. Don't read
 * it directly, use the {@code goog.testing.singleton} module. The compiler
 * removes this variable if unused.
 * @type {!Array.<!Function>}
 * @private
 */
goog.instantiatedSingletons_ = [];


if (!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  /**
   * Object used to keep track of urls that have already been added. This
   * record allows the prevention of circular dependencies.
   * @type {Object}
   * @private
   */
  goog.included_ = {};


  /**
   * This object is used to keep track of dependencies and other data that is
   * used for loading scripts
   * @private
   * @type {Object}
   */
  goog.dependencies_ = {
    pathToNames: {}, // 1 to many
    nameToPath: {}, // 1 to 1
    requires: {}, // 1 to many
    // used when resolving dependencies to prevent us from
    // visiting the file twice
    visited: {},
    written: {} // used to keep track of script files we have written
  };


  /**
   * Tries to detect whether is in the context of an HTML document.
   * @return {boolean} True if it looks like HTML document.
   * @private
   */
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != 'undefined' &&
           'write' in doc;  // XULDocument misses write.
  };


  /**
   * Tries to detect the base path of the base.js script that bootstraps Closure
   * @private
   */
  goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else if (!goog.inHtmlDocument_()) {
      return;
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName('script');
    // Search backwards since the current script is in almost all cases the one
    // that has base.js.
    for (var i = scripts.length - 1; i >= 0; --i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf('?');
      var l = qmark == -1 ? src.length : qmark;
      if (src.substr(l - 7, 7) == 'base.js') {
        goog.basePath = src.substr(0, l - 7);
        return;
      }
    }
  };


  /**
   * Imports a script if, and only if, that script hasn't already been imported.
   * (Must be called at execution time)
   * @param {string} src Script source.
   * @private
   */
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT ||
        goog.writeScriptTag_;
    if (!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true;
    }
  };


  /**
   * The default implementation of the import function. Writes a script tag to
   * import the script.
   *
   * @param {string} src The script source.
   * @return {boolean} True if the script was imported, false otherwise.
   * @private
   */
  goog.writeScriptTag_ = function(src) {
    if (goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write(
          '<script type="text/javascript" src="' + src + '"></' + 'script>');
      return true;
    } else {
      return false;
    }
  };


  /**
   * Resolves dependencies based on the dependencies added using addDependency
   * and calls importScript_ in the correct order.
   * @private
   */
  goog.writeScripts_ = function() {
    // the scripts we need to write this time
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;

    function visitNode(path) {
      if (path in deps.written) {
        return;
      }

      // we have already visited this one. We can get here if we have cyclic
      // dependencies
      if (path in deps.visited) {
        if (!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path);
        }
        return;
      }

      deps.visited[path] = true;

      if (path in deps.requires) {
        for (var requireName in deps.requires[path]) {
          // If the required name is defined, we assume that it was already
          // bootstrapped by other means.
          if (!goog.isProvided_(requireName)) {
            if (requireName in deps.nameToPath) {
              visitNode(deps.nameToPath[requireName]);
            } else {
              throw Error('Undefined nameToPath for ' + requireName);
            }
          }
        }
      }

      if (!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path);
      }
    }

    for (var path in goog.included_) {
      if (!deps.written[path]) {
        visitNode(path);
      }
    }

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i]);
      } else {
        throw Error('Undefined script input');
      }
    }
  };


  /**
   * Looks at the dependency rules and tries to determine the script file that
   * fulfills a particular rule.
   * @param {string} rule In the form goog.namespace.Class or project.script.
   * @return {?string} Url corresponding to the rule, or null.
   * @private
   */
  goog.getPathFromDeps_ = function(rule) {
    if (rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule];
    } else {
      return null;
    }
  };

  goog.findBasePath_();

  // Allow projects to manage the deps files themselves.
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + 'deps.js');
  }
}



//==============================================================================
// Language Enhancements
//==============================================================================


/**
 * This is a "fixed" version of the typeof operator.  It differs from the typeof
 * operator in such a way that null returns 'null' and arrays return 'array'.
 * @param {*} value The value to get the type of.
 * @return {string} The name of the type.
 */
goog.typeOf = function(value) {
  var s = typeof value;
  if (s == 'object') {
    if (value) {
      // Check these first, so we can avoid calling Object.prototype.toString if
      // possible.
      //
      // IE improperly marshals tyepof across execution contexts, but a
      // cross-context object will still return false for "instanceof Object".
      if (value instanceof Array) {
        return 'array';
      } else if (value instanceof Object) {
        return s;
      }

      // HACK: In order to use an Object prototype method on the arbitrary
      //   value, the compiler requires the value be cast to type Object,
      //   even though the ECMA spec explicitly allows it.
      var className = Object.prototype.toString.call(
          /** @type {Object} */ (value));
      // In Firefox 3.6, attempting to access iframe window objects' length
      // property throws an NS_ERROR_FAILURE, so we need to special-case it
      // here.
      if (className == '[object Window]') {
        return 'object';
      }

      // We cannot always use constructor == Array or instanceof Array because
      // different frames have different Array objects. In IE6, if the iframe
      // where the array was created is destroyed, the array loses its
      // prototype. Then dereferencing val.splice here throws an exception, so
      // we can't use goog.isFunction. Calling typeof directly returns 'unknown'
      // so that will work. In this case, this function will return false and
      // most array functions will still work because the array is still
      // array-like (supports length and []) even though it has lost its
      // prototype.
      // Mark Miller noticed that Object.prototype.toString
      // allows access to the unforgeable [[Class]] property.
      //  15.2.4.2 Object.prototype.toString ( )
      //  When the toString method is called, the following steps are taken:
      //      1. Get the [[Class]] property of this object.
      //      2. Compute a string value by concatenating the three strings
      //         "[object ", Result(1), and "]".
      //      3. Return Result(2).
      // and this behavior survives the destruction of the execution context.
      if ((className == '[object Array]' ||
           // In IE all non value types are wrapped as objects across window
           // boundaries (not iframe though) so we have to do object detection
           // for this edge case
           typeof value.length == 'number' &&
           typeof value.splice != 'undefined' &&
           typeof value.propertyIsEnumerable != 'undefined' &&
           !value.propertyIsEnumerable('splice')

          )) {
        return 'array';
      }
      // HACK: There is still an array case that fails.
      //     function ArrayImpostor() {}
      //     ArrayImpostor.prototype = [];
      //     var impostor = new ArrayImpostor;
      // this can be fixed by getting rid of the fast path
      // (value instanceof Array) and solely relying on
      // (value && Object.prototype.toString.vall(value) === '[object Array]')
      // but that would require many more function calls and is not warranted
      // unless closure code is receiving objects from untrusted sources.

      // IE in cross-window calls does not correctly marshal the function type
      // (it appears just as an object) so we cannot use just typeof val ==
      // 'function'. However, if the object has a call property, it is a
      // function.
      if ((className == '[object Function]' ||
          typeof value.call != 'undefined' &&
          typeof value.propertyIsEnumerable != 'undefined' &&
          !value.propertyIsEnumerable('call'))) {
        return 'function';
      }


    } else {
      return 'null';
    }

  } else if (s == 'function' && typeof value.call == 'undefined') {
    // In Safari typeof nodeList returns 'function', and on Firefox
    // typeof behaves similarly for HTML{Applet,Embed,Object}Elements
    // and RegExps.  We would like to return object for those and we can
    // detect an invalid function by making sure that the function
    // object has a call method.
    return 'object';
  }
  return s;
};


/**
 * Returns true if the specified value is not |undefined|.
 * WARNING: Do not use this to test if an object has a property. Use the in
 * operator instead.  Additionally, this function assumes that the global
 * undefined variable has not been redefined.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */
goog.isDef = function(val) {
  return val !== undefined;
};


/**
 * Returns true if the specified value is |null|
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is null.
 */
goog.isNull = function(val) {
  return val === null;
};


/**
 * Returns true if the specified value is defined and not null
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is defined and not null.
 */
goog.isDefAndNotNull = function(val) {
  // Note that undefined == null.
  return val != null;
};


/**
 * Returns true if the specified value is an array
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is an array.
 */
goog.isArray = function(val) {
  return goog.typeOf(val) == 'array';
};


/**
 * Returns true if the object looks like an array. To qualify as array like
 * the value needs to be either a NodeList or an object with a Number length
 * property.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is an array.
 */
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == 'array' || type == 'object' && typeof val.length == 'number';
};


/**
 * Returns true if the object looks like a Date. To qualify as Date-like
 * the value needs to be an object and have a getFullYear() function.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a like a Date.
 */
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == 'function';
};


/**
 * Returns true if the specified value is a string
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a string.
 */
goog.isString = function(val) {
  return typeof val == 'string';
};


/**
 * Returns true if the specified value is a boolean
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is boolean.
 */
goog.isBoolean = function(val) {
  return typeof val == 'boolean';
};


/**
 * Returns true if the specified value is a number
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a number.
 */
goog.isNumber = function(val) {
  return typeof val == 'number';
};


/**
 * Returns true if the specified value is a function
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a function.
 */
goog.isFunction = function(val) {
  return goog.typeOf(val) == 'function';
};


/**
 * Returns true if the specified value is an object.  This includes arrays
 * and functions.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is an object.
 */
goog.isObject = function(val) {
  var type = typeof val;
  return type == 'object' && val != null || type == 'function';
  // return Object(val) === val also works, but is slower, especially if val is
  // not an object.
};


/**
 * Gets a unique ID for an object. This mutates the object so that further
 * calls with the same object as a parameter returns the same value. The unique
 * ID is guaranteed to be unique across the current session amongst objects that
 * are passed into {@code getUid}. There is no guarantee that the ID is unique
 * or consistent across sessions. It is unsafe to generate unique ID for
 * function prototypes.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {number} The unique ID for the object.
 */
goog.getUid = function(obj) {
  // TODO(arv): Make the type stricter, do not accept null.

  // In Opera window.hasOwnProperty exists but always returns false so we avoid
  // using it. As a consequence the unique ID generated for BaseClass.prototype
  // and SubClass.prototype will be the same.
  return obj[goog.UID_PROPERTY_] ||
      (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};


/**
 * Removes the unique ID from an object. This is useful if the object was
 * previously mutated using {@code goog.getUid} in which case the mutation is
 * undone.
 * @param {Object} obj The object to remove the unique ID field from.
 */
goog.removeUid = function(obj) {
  // TODO(arv): Make the type stricter, do not accept null.

  // DOM nodes in IE are not instance of Object and throws exception
  // for delete. Instead we try to use removeAttribute
  if ('removeAttribute' in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  /** @preserveTry */
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};


/**
 * Name for unique ID property. Initialized in a way to help avoid collisions
 * with other closure javascript on the same page.
 * @type {string}
 * @private
 */
goog.UID_PROPERTY_ = 'closure_uid_' +
    Math.floor(Math.random() * 2147483648).toString(36);


/**
 * Counter for UID.
 * @type {number}
 * @private
 */
goog.uidCounter_ = 0;


/**
 * Adds a hash code field to an object. The hash code is unique for the
 * given object.
 * @param {Object} obj The object to get the hash code for.
 * @return {number} The hash code for the object.
 * @deprecated Use goog.getUid instead.
 */
goog.getHashCode = goog.getUid;


/**
 * Removes the hash code field from an object.
 * @param {Object} obj The object to remove the field from.
 * @deprecated Use goog.removeUid instead.
 */
goog.removeHashCode = goog.removeUid;


/**
 * Clones a value. The input may be an Object, Array, or basic type. Objects and
 * arrays will be cloned recursively.
 *
 * WARNINGS:
 * <code>goog.cloneObject</code> does not detect reference loops. Objects that
 * refer to themselves will cause infinite recursion.
 *
 * <code>goog.cloneObject</code> is unaware of unique identifiers, and copies
 * UIDs created by <code>getUid</code> into cloned results.
 *
 * @param {*} obj The value to clone.
 * @return {*} A clone of the input value.
 * @deprecated goog.cloneObject is unsafe. Prefer the goog.object methods.
 */
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == 'object' || type == 'array') {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == 'array' ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }

  return obj;
};


/**
 * A native implementation of goog.bind.
 * @param {Function} fn A function to partially apply.
 * @param {Object|undefined} selfObj Specifies the object which |this| should
 *     point to when the function is run.
 * @param {...*} var_args Additional arguments that are partially
 *     applied to the function.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 * @private
 * @suppress {deprecated} The compiler thinks that Function.prototype.bind
 *     is deprecated because some people have declared a pure-JS version.
 *     Only the pure-JS version is truly deprecated.
 */
goog.bindNative_ = function(fn, selfObj, var_args) {
  return /** @type {!Function} */ (fn.call.apply(fn.bind, arguments));
};


/**
 * A pure-JS implementation of goog.bind.
 * @param {Function} fn A function to partially apply.
 * @param {Object|undefined} selfObj Specifies the object which |this| should
 *     point to when the function is run.
 * @param {...*} var_args Additional arguments that are partially
 *     applied to the function.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 * @private
 */
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error();
  }

  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      // Prepend the bound arguments to the current arguments.
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };

  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};


/**
 * Partially applies this function to a particular 'this object' and zero or
 * more arguments. The result is a new function with some arguments of the first
 * function pre-filled and the value of |this| 'pre-specified'.<br><br>
 *
 * Remaining arguments specified at call-time are appended to the pre-
 * specified ones.<br><br>
 *
 * Also see: {@link #partial}.<br><br>
 *
 * Usage:
 * <pre>var barMethBound = bind(myFunction, myObj, 'arg1', 'arg2');
 * barMethBound('arg3', 'arg4');</pre>
 *
 * @param {Function} fn A function to partially apply.
 * @param {Object|undefined} selfObj Specifies the object which |this| should
 *     point to when the function is run.
 * @param {...*} var_args Additional arguments that are partially
 *     applied to the function.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 * @suppress {deprecated} See above.
 */
goog.bind = function(fn, selfObj, var_args) {
  // TODO(nicksantos): narrow the type signature.
  if (Function.prototype.bind &&
      // NOTE(nicksantos): Somebody pulled base.js into the default
      // Chrome extension environment. This means that for Chrome extensions,
      // they get the implementation of Function.prototype.bind that
      // calls goog.bind instead of the native one. Even worse, we don't want
      // to introduce a circular dependency between goog.bind and
      // Function.prototype.bind, so we have to hack this to make sure it
      // works correctly.
      Function.prototype.bind.toString().indexOf('native code') != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};


/**
 * Like bind(), except that a 'this object' is not required. Useful when the
 * target function is already bound.
 *
 * Usage:
 * var g = partial(f, arg1, arg2);
 * g(arg3, arg4);
 *
 * @param {Function} fn A function to partially apply.
 * @param {...*} var_args Additional arguments that are partially
 *     applied to fn.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 */
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    // Prepend the bound arguments to the current arguments.
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs.unshift.apply(newArgs, args);
    return fn.apply(this, newArgs);
  };
};


/**
 * Copies all the members of a source object to a target object. This method
 * does not work on all browsers for all objects that contain keys such as
 * toString or hasOwnProperty. Use goog.object.extend for this purpose.
 * @param {Object} target Target.
 * @param {Object} source Source.
 */
goog.mixin = function(target, source) {
  for (var x in source) {
    target[x] = source[x];
  }

  // For IE7 or lower, the for-in-loop does not contain any properties that are
  // not enumerable on the prototype object (for example, isPrototypeOf from
  // Object.prototype) but also it will not include 'replace' on objects that
  // extend String and change 'replace' (not that it is common for anyone to
  // extend anything except Object).
};


/**
 * @return {number} An integer value representing the number of milliseconds
 *     between midnight, January 1, 1970 and the current time.
 */
goog.now = Date.now || (function() {
  // Unary plus operator converts its operand to a number which in the case of
  // a date is done by calling getTime().
  return +new Date();
});


/**
 * Evals javascript in the global scope.  In IE this uses execScript, other
 * browsers use goog.global.eval. If goog.global.eval does not evaluate in the
 * global scope (for example, in Safari), appends a script tag instead.
 * Throws an exception if neither execScript or eval is defined.
 * @param {string} script JavaScript string.
 */
goog.globalEval = function(script) {
  if (goog.global.execScript) {
    goog.global.execScript(script, 'JavaScript');
  } else if (goog.global.eval) {
    // Test to see if eval works
    if (goog.evalWorksForGlobals_ == null) {
      goog.global.eval('var _et_ = 1;');
      if (typeof goog.global['_et_'] != 'undefined') {
        delete goog.global['_et_'];
        goog.evalWorksForGlobals_ = true;
      } else {
        goog.evalWorksForGlobals_ = false;
      }
    }

    if (goog.evalWorksForGlobals_) {
      goog.global.eval(script);
    } else {
      var doc = goog.global.document;
      var scriptElt = doc.createElement('script');
      scriptElt.type = 'text/javascript';
      scriptElt.defer = false;
      // Note(user): can't use .innerHTML since "t('<test>')" will fail and
      // .text doesn't work in Safari 2.  Therefore we append a text node.
      scriptElt.appendChild(doc.createTextNode(script));
      doc.body.appendChild(scriptElt);
      doc.body.removeChild(scriptElt);
    }
  } else {
    throw Error('goog.globalEval not available');
  }
};


/**
 * Indicates whether or not we can call 'eval' directly to eval code in the
 * global scope. Set to a Boolean by the first call to goog.globalEval (which
 * empirically tests whether eval works for globals). @see goog.globalEval
 * @type {?boolean}
 * @private
 */
goog.evalWorksForGlobals_ = null;


/**
 * Optional map of CSS class names to obfuscated names used with
 * goog.getCssName().
 * @type {Object|undefined}
 * @private
 * @see goog.setCssNameMapping
 */
goog.cssNameMapping_;


/**
 * Optional obfuscation style for CSS class names. Should be set to either
 * 'BY_WHOLE' or 'BY_PART' if defined.
 * @type {string|undefined}
 * @private
 * @see goog.setCssNameMapping
 */
goog.cssNameMappingStyle_;


/**
 * Handles strings that are intended to be used as CSS class names.
 *
 * This function works in tandem with @see goog.setCssNameMapping.
 *
 * Without any mapping set, the arguments are simple joined with a
 * hyphen and passed through unaltered.
 *
 * When there is a mapping, there are two possible styles in which
 * these mappings are used. In the BY_PART style, each part (i.e. in
 * between hyphens) of the passed in css name is rewritten according
 * to the map. In the BY_WHOLE style, the full css name is looked up in
 * the map directly. If a rewrite is not specified by the map, the
 * compiler will output a warning.
 *
 * When the mapping is passed to the compiler, it will replace calls
 * to goog.getCssName with the strings from the mapping, e.g.
 *     var x = goog.getCssName('foo');
 *     var y = goog.getCssName(this.baseClass, 'active');
 *  becomes:
 *     var x= 'foo';
 *     var y = this.baseClass + '-active';
 *
 * If one argument is passed it will be processed, if two are passed
 * only the modifier will be processed, as it is assumed the first
 * argument was generated as a result of calling goog.getCssName.
 *
 * @param {string} className The class name.
 * @param {string=} opt_modifier A modifier to be appended to the class name.
 * @return {string} The class name or the concatenation of the class name and
 *     the modifier.
 */
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };

  var renameByParts = function(cssName) {
    // Remap all the parts individually.
    var parts = cssName.split('-');
    var mapped = [];
    for (var i = 0; i < parts.length; i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join('-');
  };

  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == 'BY_WHOLE' ?
        getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }

  if (opt_modifier) {
    return className + '-' + rename(opt_modifier);
  } else {
    return rename(className);
  }
};


/**
 * Sets the map to check when returning a value from goog.getCssName(). Example:
 * <pre>
 * goog.setCssNameMapping({
 *   "goog": "a",
 *   "disabled": "b",
 * });
 *
 * var x = goog.getCssName('goog');
 * // The following evaluates to: "a a-b".
 * goog.getCssName('goog') + ' ' + goog.getCssName(x, 'disabled')
 * </pre>
 * When declared as a map of string literals to string literals, the JSCompiler
 * will replace all calls to goog.getCssName() using the supplied map if the
 * --closure_pass flag is set.
 *
 * @param {!Object} mapping A map of strings to strings where keys are possible
 *     arguments to goog.getCssName() and values are the corresponding values
 *     that should be returned.
 * @param {string=} opt_style The style of css name mapping. There are two valid
 *     options: 'BY_PART', and 'BY_WHOLE'.
 * @see goog.getCssName for a description.
 */
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};


/**
 * To use CSS renaming in compiled mode, one of the input files should have a
 * call to goog.setCssNameMapping() with an object literal that the JSCompiler
 * can extract and use to replace all calls to goog.getCssName(). In uncompiled
 * mode, JavaScript code should be loaded before this base.js file that declares
 * a global variable, CLOSURE_CSS_NAME_MAPPING, which is used below. This is
 * to ensure that the mapping is loaded before any calls to goog.getCssName()
 * are made in uncompiled mode.
 *
 * A hook for overriding the CSS name mapping.
 * @type {Object|undefined}
 */
goog.global.CLOSURE_CSS_NAME_MAPPING;


if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  // This does not call goog.setCssNameMapping() because the JSCompiler
  // requires that goog.setCssNameMapping() be called with an object literal.
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}


/**
 * Abstract implementation of goog.getMsg for use with localized messages.
 * @param {string} str Translatable string, places holders in the form {$foo}.
 * @param {Object=} opt_values Map of place holder name to value.
 * @return {string} message with placeholders filled.
 */
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for (var key in values) {
    var value = ('' + values[key]).replace(/\$/g, '$$$$');
    str = str.replace(new RegExp('\\{\\$' + key + '\\}', 'gi'), value);
  }
  return str;
};


/**
 * Exposes an unobfuscated global namespace path for the given object.
 * Note that fields of the exported object *will* be obfuscated,
 * unless they are exported in turn via this function or
 * goog.exportProperty
 *
 * <p>Also handy for making public items that are defined in anonymous
 * closures.
 *
 * ex. goog.exportSymbol('public.path.Foo', Foo);
 *
 * ex. goog.exportSymbol('public.path.Foo.staticFunction',
 *                       Foo.staticFunction);
 *     public.path.Foo.staticFunction();
 *
 * ex. goog.exportSymbol('public.path.Foo.prototype.myMethod',
 *                       Foo.prototype.myMethod);
 *     new public.path.Foo().myMethod();
 *
 * @param {string} publicPath Unobfuscated name to export.
 * @param {*} object Object the name should point to.
 * @param {Object=} opt_objectToExportTo The object to add the path to; default
 *     is |goog.global|.
 */
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo);
};


/**
 * Exports a property unobfuscated into the object's namespace.
 * ex. goog.exportProperty(Foo, 'staticFunction', Foo.staticFunction);
 * ex. goog.exportProperty(Foo.prototype, 'myMethod', Foo.prototype.myMethod);
 * @param {Object} object Object whose static property is being exported.
 * @param {string} publicName Unobfuscated name to export.
 * @param {*} symbol Object the name should point to.
 */
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 * <pre>
 * function ParentClass(a, b) { }
 * ParentClass.prototype.foo = function(a) { }
 *
 * function ChildClass(a, b, c) {
 *   goog.base(this, a, b);
 * }
 * goog.inherits(ChildClass, ParentClass);
 *
 * var child = new ChildClass('a', 'b', 'see');
 * child.foo(); // works
 * </pre>
 *
 * In addition, a superclass' implementation of a method can be invoked
 * as follows:
 *
 * <pre>
 * ChildClass.prototype.foo = function(a) {
 *   ChildClass.superClass_.foo.call(this, a);
 *   // other code
 * };
 * </pre>
 *
 * @param {Function} childCtor Child class.
 * @param {Function} parentCtor Parent class.
 */
goog.inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
};


/**
 * Call up to the superclass.
 *
 * If this is called from a constructor, then this calls the superclass
 * contructor with arguments 1-N.
 *
 * If this is called from a prototype method, then you must pass
 * the name of the method as the second argument to this function. If
 * you do not, you will get a runtime error. This calls the superclass'
 * method with arguments 2-N.
 *
 * This function only works if you use goog.inherits to express
 * inheritance relationships between your classes.
 *
 * This function is a compiler primitive. At compile-time, the
 * compiler will do macro expansion to remove a lot of
 * the extra overhead that this function introduces. The compiler
 * will also enforce a lot of the assumptions that this function
 * makes, and treat it as a compiler error if you break them.
 *
 * @param {!Object} me Should always be "this".
 * @param {*=} opt_methodName The method name if calling a super method.
 * @param {...*} var_args The rest of the arguments.
 * @return {*} The return value of the superclass method.
 */
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if (caller.superClass_) {
    // This is a constructor. Call the superclass constructor.
    return caller.superClass_.constructor.apply(
        me, Array.prototype.slice.call(arguments, 1));
  }

  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for (var ctor = me.constructor;
       ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if (ctor.prototype[opt_methodName] === caller) {
      foundCaller = true;
    } else if (foundCaller) {
      return ctor.prototype[opt_methodName].apply(me, args);
    }
  }

  // If we did not find the caller in the prototype chain,
  // then one of two things happened:
  // 1) The caller is an instance method.
  // 2) This method was not called by the right caller.
  if (me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args);
  } else {
    throw Error(
        'goog.base called from a method of one name ' +
        'to a method of a different name');
  }
};


/**
 * Allow for aliasing within scope functions.  This function exists for
 * uncompiled code - in compiled code the calls will be inlined and the
 * aliases applied.  In uncompiled code the function is simply run since the
 * aliases as written are valid JavaScript.
 * @param {function()} fn Function to call.  This function can contain aliases
 *     to namespaces (e.g. "var dom = goog.dom") or classes
 *    (e.g. "var Timer = goog.Timer").
 */
goog.scope = function(fn) {
  fn.call(goog.global);
};



// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/storage.js

/**
 * A class used to access browser storage. The implementation should remain
 * transparent as far the rest of client is concerned so different browsers
 * can use different backing stores.
 * @constructor
 * @param {Storage} storageInterface
 */
optly.client.storage.Storage = function(storageInterface){
  /** @type {Storage} closure compilers built in storage extern:
   * https://code.google.com/p/closure-compiler/source/browse/externs/webstorage.js 
   */ 
  this.storage = storageInterface;
};

/**
 * Gets an item by key name
 * @param {string} key
 * @return {Object|null|boolean|undefined}
 */
optly.client.storage.Storage.prototype.get = function(key){
  try{
    var obj = json.parse(this.storage.getItem(optly.client.storage.LOCAL_STORAGE_KEY));
    return obj[key];
  }
  catch(err){
    return undefined;
  }
};

/**
 * Sets an item by key name. Passing undefined will delete the item.
 * @param {string} key
 * @param {Object|null|boolean|undefined} value
 * @return {undefined}
 */
optly.client.storage.Storage.prototype.set = function(key, value){
  try{
    var obj = json.parse(this.storage.getItem(optly.client.storage.LOCAL_STORAGE_KEY)) || {};
    obj[key] = value;
    this.storage.setItem(optly.client.storage.LOCAL_STORAGE_KEY, json.stringify(obj));
  }
  catch(err){ }
};

/**
 * Initialize localStorage, sessionStorage singletons from window interfaces. Fail silently if accessing
 * window interfaces throws an error.
 *
 * @private
 */
optly.client.storage.initialize = function() {
  // window.localStorage etc can error if cookies/storage disabled
  try {
    optly.client.storage.localStorage = new optly.client.storage.Storage(window.localStorage);
    optly.client.storage.sessionStorage = new optly.client.storage.Storage(window.sessionStorage);
  } catch(err) {
    // TODO(tyler): log to RUM
  }
};

/**
 * Mock storage interface used when storage is disabled
 */
optly.client.storage.MockStorageInterface = {
  get: function(key){},
  set: function(key, value){}
};

optly.client.storage.LOCAL_STORAGE_KEY = "optimizely_data";
optly.client.storage.localStorage = optly.client.storage.MockStorageInterface;
optly.client.storage.sessionStorage = optly.client.storage.MockStorageInterface;

optly.client.storage.initialize();

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/murmur3.js
// Modified from
// https://github.com/whitequark/murmurhash3-js/blob/3cf80e6b81cb3b7b99725c2fa4b81c30da30fe85/murmurhash3.js


/**
 *  The MurmurHash3 algorithm was created by Austin Appleby.  This JavaScript port was authored
 *  by Peter Zotov (based on Java port by Yonik Seeley) and is placed into the public domain.
 *  The author hereby disclaims copyright to this source code.
 *
 *  This produces exactly the same hash values as the final C++ version of MurmurHash3 and
 *  is thus suitable for producing the same hash values across platforms.
 *
 *  There are two versions of this hash implementation. First interprets the string as a
 *  sequence of bytes, ignoring most significant byte of each codepoint. The second one
 *  interprets the string as a UTF-16 codepoint sequence, and appends each 16-bit codepoint
 *  to the hash independently. The latter mode was not written to be compatible with
 *  any other implementation, but it should offer better performance for JavaScript-only
 *  applications.
 *
 *  See http://github.com/whitequark/murmurhash3-js for future updates to this file.
 *
 *  The changes in murmur3.js are:
 *  1. Addition of type annotations.
 *  2. The hashBytes function of the original is used here, with mul32 defined as a local function.
 *  3. The seed parameter defaults to 0.
 *
 * @param {string} data A byte string to run murmur on. A byte string has no characters with a
 *   code point > 255. When in doubt pass ASCII or pass the string through optly.hashing.toByteString.
 * @param {number} seed The seed to use for murmur defaults to 0.
 * @return {number} Hash value.
 */
optly.murmur3.hash32 = function(data, seed) {
  seed = seed || 0;
  function mul32(m, n) {
    var nlo = n & 0xffff;
    var nhi = n - nlo;
    return ((nhi * m | 0) + (nlo * m | 0)) | 0;
  }

  var c1 = 0xcc9e2d51, c2 = 0x1b873593;
  var len = data.length;
  var h1 = seed;
  var roundedEnd = len & ~0x3;
  var k1;

  for (var i = 0; i < roundedEnd; i += 4) {
    k1 = (data.charCodeAt(i)   & 0xff)        |
      ((data.charCodeAt(i + 1) & 0xff) << 8)  |
      ((data.charCodeAt(i + 2) & 0xff) << 16) |
      ((data.charCodeAt(i + 3) & 0xff) << 24);

    k1 = mul32(k1, c1);
    k1 = ((k1 & 0x1ffff) << 15) | (k1 >>> 17);  // ROTL32(k1,15);
    k1 = mul32(k1, c2);

    h1 ^= k1;
    h1 = ((h1 & 0x7ffff) << 13) | (h1 >>> 19);  // ROTL32(h1,13);
    h1 = (h1 * 5 + 0xe6546b64) | 0;
  }

  k1 = 0;

  switch(len % 4) {
    case 3:
      k1 = (data.charCodeAt(roundedEnd + 2) & 0xff) << 16;
    // fallthrough
    case 2:
      k1 |= (data.charCodeAt(roundedEnd + 1) & 0xff) << 8;
    // fallthrough
    case 1:
      k1 |= (data.charCodeAt(roundedEnd) & 0xff);
      k1 = mul32(k1, c1);
      k1 = ((k1 & 0x1ffff) << 15) | (k1 >>> 17);  // ROTL32(k1,15);
      k1 = mul32(k1, c2);
      h1 ^= k1;
  }

  // finalization
  h1 ^= len;

  // fmix(h1);
  h1 ^= h1 >>> 16;
  h1  = mul32(h1, 0x85ebca6b);
  h1 ^= h1 >>> 13;
  h1  = mul32(h1, 0xc2b2ae35);
  h1 ^= h1 >>> 16;

  return h1;
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/hashing.js


/**
 * Static seeds used to generate different types of "random" hashes.
 * Changing these WILL change existing bucketing decisions!
 *
 * @enum {number}
 */
optly.hashing.HashSeed = {
  IGNORING: 0,
  BUCKETING: 1,
  FALLBACK: 2
};

/**
 * Maximum number returned by optly.murmur3.hash32.
 * @type {number}
 * @const
 * @private
 */
optly.hashing.MAX_HASH_VALUE = Math.pow(2, 32);

/**
 * Returns a hash value in [0, 1.0) using optly.murmur3.hash32.
 * @param {string} data A byte string to run murmur on. A byte string has no characters with a
 *   code point > 255. When in doubt pass ASCII or pass the string through optly.hashing.toByteString.
 * @param {number} seed The seed to use for murmur.
 * @returns {number} A hash value in [0, 1).
 */
optly.hashing.hashToReal = function(data, seed) {
  var h1 = optly.murmur3.hash32(data, seed);
  return (h1 >>> 0) / optly.hashing.MAX_HASH_VALUE;
};

/**
 * Returns hashed value as a hex string.
 * @param {string} data A byte string to run murmur on. A byte string has no characters with a
 *   code point > 255. When in doubt pass ASCII or pass the string through optly.hashing.toByteString.
 * @param {number} seed The seed to use for murmur.
 * @return {string} Hashed value as a hexadecimal string.
 */
optly.hashing.hashToHex = function(data, seed) {
  var h1 = optly.murmur3.hash32(data, seed);
  return (h1 >>> 16).toString(16) + (h1 & 0x0000FFFF).toString(16);
};

/**
 * Returns a byte string version of the given string. Any characters with a code point of less than 255
 * will be converted into a single byte/character. All other characters will be converted into two or
 * three bytes/characters.
 * @param {string} string A string to convert to a byte string.
 * @return {string} A hexadecimal string.
 */
optly.hashing.toByteString = function(string) {
  var fromCharCode = String.fromCharCode;
  // Unicode comprises 1,114,112 code points in the range 0 to 0x10FFFF.
  return string.replace(/[\S\s]/gi, function(c){
    c = c.charCodeAt(0);
    var ret = fromCharCode(c & 0xFF);
    if(c > 0xFF){
      ret = fromCharCode((c >>> 8) & 0xFF) + ret;
    }
    if(c > 0xFFFF){
      ret = fromCharCode(c >>> 16) + ret;
    }
    return ret;
  });
};

/**
 * Returns a number in [0, 1), representing the hash of experimentId and current user ID.
 * The function hashToReal uses murmur3 to hash the userId + experimentId and
 * seed to a real number in [0, 1.0).
 * @param {string} userId
 * @param {string} experimentId Experiment ID.
 * @param {number} seed Seed for RNG.
 * @return {number} Random number in range [0, 1).
 */
optly.hashing.experimentUserHash = function(userId, experimentId, seed) {
  return optly.hashing.hashToReal(userId + experimentId, seed);
};

/**
 * Returns an integer in [0, maxInt), representing the hash of experimentId and the current user ID.
 * @param {string} userId
 * @param {string} experimentId Experiment ID.
 * @param {number} seed Seed for RNG.
 * @param {number} maxInt Maximum integer.
 * @return {number} Random integer in range [0, maxInt).
 */
optly.hashing.hashToInt = function(userId, experimentId, seed, maxInt) {
  return Math.floor(optly.hashing.experimentUserHash(userId, experimentId, seed) * maxInt);
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/constant.js

/**
 * @const
 * @type {string}
 */
var AUDIENCE_COOKIE_NAME = 'optimizelyAudiences';

/**
 * @const
 * @type {number}
 */
var DAY_IN_SECONDS = 60 * 60 * 24;

/**
 * @const
 * @type {number}
 */
var DEFAULT_TRACKING_COOKIE_EXPIRATION = DAY_IN_SECONDS * 365 * 10; //10 years

/**
 * @const
 * @type {number}
 */
var MINIMUM_TRACKING_COOKIE_EXPIRATION = DAY_IN_SECONDS * 90; //approx 3 months

/**
 * @const
 */
var BUCKET_COOKIE_NAME = "optimizelyBuckets";

/**
 * @const
 */
var CUSTOM_EVENTS_COOKIE_NAME = "optimizelyCustomEvents";

/**
 * @const
 */
var CUSTOM_EVENTS_STORAGE_NAME = "customEvents";

/**
 * Time (in milliseconds) between attempts to evaluate a step.
 *
 * @const
 */
var EVALUATION_WAIT_INTERVAL = 50;

/**
 * Time (in milliseconds) between the first and second attempts to evaluate a
 * step.
 *
 * @const
 */
var FIRST_EVALUATION_WAIT_INTERVAL = 10;

/**
 * @const
 */
var GLOBAL = "optimizely";

/**
 * @const
 */
var GLOBAL_DATA = "data";

/**
 * @const
 */
var GEO_CONDITION_WAIT_INTERVAL = 1000;

/**
 * The number of milliseconds before geo times out / fails.
 * @const
 */
var GEO_TIMEOUT = 2000;

/**
 * @const
 */
var IGNORED_VARIATION_ID = "0";

/**
 * @const
 */
var OPT_OUT_COOKIE_NAME = "optimizelyOptOut";

/**
 * @const
 */
var PENDING_LOG_EVENTS_COOKIE_AGE = 15;

/**
 * @const
 */
var PENDING_LOG_EVENTS_COOKIE_MAX_LENGTH = 1536;

/**
 * @const
 * Name of cookie containing a list of log events that need to be sent.
 */
var PENDING_LOG_EVENTS_COOKIE_NAME = "optimizelyPendingLogEvents";

/** @const */
var PREVIEW_COOKIE_NAME = "optimizelyPreview";

/** @const */
var REDIRECT_COOKIE_FALSE = "false";

/** @const */
var REDIRECT_COOKIE_SECONDS = 5;

/** @const */
var REDIRECT_COOKIE_TRUE = "true";

/**
 * Prevents redirect variations from being executed from any page except
 * the original page, for 5 seconds
 *
 * @const
 */
var REDIRECT_COOKIE_NAME = "optimizelyRedirect";

/**
 * @const
 */
var REFERRAL_CHARTBEAT_COOKIE_NAME = "optimizelyChartbeat";

/**
 * @const
 */
var REFERRER_REDIRECT_COOKIE_NAME = "optimizelyReferrer";

/**
 * @const
 */
var SEGMENTS_COOKIE_NAME = "optimizelySegments";

/**
 * @const
 */
var SELECTOR_DELIMITER = ",";

/**
 * @const Age in days
 */
var SOURCE_COOKIE_AGE = 3;

/**
 * @const
 */
var SOURCE_COOKIE_DELIMITER = "|||";

/**
 * @const Stores lead info that's tracked in Marketo like source, medium, etc.
 */
var SOURCE_COOKIE_NAME = "sourceCookie";

/**
 * @const
 */
var TEST_MODULE = window['OPTIMIZELY_TEST_MODULE'];

/**
 * @const
 */
var TOP_LEVEL_DOMAINS = ["com", "local", "net", "org",
                         "xxx", "edu", "es", "gov", "biz",
                         "info", "fr", "nl", "ca",
                         "de", "kr", "it", "me",
                         "ly", "tv", "mx", "cn",
                         "jp", "il", "in", "iq",
                         "test"];

/**
 * @const
 */
var USER_ID_COOKIE_NAME = "optimizelyEndUserId";

/**
 * @const
 * @type {string}
 */
var PPID_COOKIE_NAME = 'optimizelyPPID';

/**
 * @const
 */
var VARIATION_CODE_DELIMITER = "\n";

/**
 * @const
 */
var VARIATION_ID_DELIMITER = "_";

/**
 * @const
 */
var VARIATION_URL_DELIMITER = " ";

/**
 * @const
 */
var VARIATION_URL_START = "_optimizely_variation_url";

/**
 * @const
 */
var VARIATION_URL_START_RE = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;

/**
 * @const
 */
var VARIATION_URL_END = "/* _optimizely_variation_url_end */";

/**
 * @const
 */
var VARIATION_URL_END_RE = /\/\*\s*_optimizely_variation_url_end\s*\*\//;

/**
 * @const
 * @type {string}
 */
var SIGNED_IN_BODY_CLASS = 'signed-in';

/**
 * @const
 * @type {string}
 */
var HOTFIX_ENG_1636_COOKIE = 'optimizelyReportableFix';

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/directive.js


directive.delayPageviewTracking = 0;
directive.forceTracking = false;
directive.isEnabled = true;
directive.isEditor = false;

/** @type {boolean} */
directive.optOutThirdPartyCookies = false;

// Name of the client_preview javascript file for a given project (will be an
// md5 hash of account + salt). Set to the value of the optimizely_token
// parameter
directive.previewScriptName = "";
// api.push/initialize normally propagates errors, but just in case something changes default to safe.
directive.previewVerified = false;

// Flag to indicate that the page has been loaded with 'optimizely_x'
// parameters present and force parameters disabled for the project
directive.requestedInvalidForceParameters = false;

// Flag to indicate we should load the preview iframe (specified by
// optimizely_show_preview=true). Must be used in conjunction with
// the optimizely_token parameter
directive.shouldLoadPreview = false;
directive.shouldLog = false;
directive.shouldLogVerbosely = false;
directive.shouldOverrideThirdPartyCookie = false;

// Self explanatory, determines whether we should log tracking information to
// the backend. Can be set to true in a number of ways, including using force
// parameters and via api calls
directive.shouldSkipPageTracking = false;
directive.shouldTrackEvents = true;
directive.trackingCookieExpiration = DEFAULT_TRACKING_COOKIE_EXPIRATION;


// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/user.js


/**
 * @define {boolean}
 * Whether legacy "browser" conditions should be supported.
 */
user.LEGACY_BROWSER = true;

user.getBrowser = function() {
  user.detectionResults = user.detectionResults || detect.detect();
  return user.detectionResults;
};

user.getBrowserId = function() {
  return user.getBrowser().browserId;
};

user.getBrowserLanguage = function() {
  var language = "";

  try {
    language = navigator['userLanguage'] || window['navigator']['language'];
    language = language.toLowerCase();
  }
  catch (error) {
    language = "";
  }

  return language;
};

user.getBrowserVersion = function() {
  return user.getBrowser().browserVersion;
};

/**
 * Return the currentUrl as set by the API or the value of window.location.href
 * which is the default behavior.
 * @return {string}
 */
user.getCurrentUrl = function() {
  return user.currentUrl || window.location.href;
};

user.getDevice = function() {
  return user.getBrowser().device;
};

/**
 * Returns the domain, possibly stripped of www, www2, ww3, etc.
 *
 * This was taken from publically available code found at:
 * http://w3guru.blogspot.com/2009/01/how-to-get-domain-name-from-url-using.html
 *
 * Examples:
 * http://www.google.co.uk/?q=abc -> google.co.uk
 * http://mysubdomain.mydomain.com/mypage.html -> mysubdomain.mydomain.com
 */
user.getDomain = function(url) {
  if (!url) {
    return "";
  }
  try {
    return url.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1];
  }
  catch(err) {
    return "";
  }
};

user.getPlatform = function() {
  return user.getBrowser().platform;
};

user.getReferrer = function() {
  var cookiedReferrer = cookie.get(REFERRER_REDIRECT_COOKIE_NAME);
  // Referrer values of null & '' are conflated here as the cookie getter can return either
  return cookiedReferrer || document.referrer || "";
};

/**
 *
 * @return {string}
 */
user.getId = function() {
  var id = cookie.get(USER_ID_COOKIE_NAME);
  if (!id) {
    id = "oeu" + (+new Date()) + "r" + Math.random();
    cookie.set(USER_ID_COOKIE_NAME, id, directive.trackingCookieExpiration);
  }

  return id;
};

user.getPPID = function() {
  return cookie.get(PPID_COOKIE_NAME);
};

/**
 * Get current user's "personal" data for the given key. Data stored under other users' userId
 * will not be returned.
 *
 * @param {string=} key
 * @returns {*}
 */
user.getUserData = function(key) {
  var userId = user.getPPID() || user.getId();
  var userData = optly.client.storage.localStorage.get(userId) || {};
  if (key) {
    return userData[key];
  }
  return userData;
};

/**
 * Set "personal" data for the current user (keyed by userId, then the supplied key)
 *
 * @param {string} key
 * @param {*} data
 */
user.setUserData = function(key, data) {
  var userId = user.getPPID() || user.getId();
  var userData = user.getUserData();
  userData[key] = data;
  optly.client.storage.localStorage.set(userId, userData);
};

/**
 * Set PPID based on the specified value and return set value. Hashes with murmur3 and prepends "ppid".
 *
 * @param {?string} ppid
 */
user.setPPID = function(ppid) {
  if (!ppid) {
    cookie.remove(PPID_COOKIE_NAME);
  } else {
    cookie.set(PPID_COOKIE_NAME, ppid, directive.trackingCookieExpiration);
  }
};

/**
 * Returns true if PPID is set, false otherwise
 *
 * @returns {boolean}
 */
user.hasPPID = function() {
  return user.getPPID() !== null;
};

user.getIP = function() {
  var clientip = "";
  try {
    clientip = api.getAsyncInfo()["ip"];
  }
  catch (error){
    // pass
  }
  return user.formatGeoField(clientip);
};

user.getLocation = function() {
  var locationData = api.getAsyncInfo();
  locationData = (locationData && locationData["location"]) || {};
  return {
    'city': user.formatGeoField(locationData['city']),
    'continent': user.formatGeoField(locationData['continent']),
    'country': user.formatGeoField(locationData['country']),
    'region': user.formatGeoField(locationData['region'])
  };
};

/**
 * A utility function that processes geo fields standardizing its format.
 */
user.formatGeoField = function(value) {
  if(!value) { return ""; }
  value = value.toUpperCase();
  return value == "N/A" ? "" : value;
};

/**
 * Deprecated: get "mobileId" as returned by previous detect.js
 *
 * @returns {string|null|undefined}
 */
user.getMobileId = user.LEGACY_BROWSER ? function() {
  var browser = user.getBrowser();
  var mobileIds = ['android', 'blackberry', 'ipad', 'iphone', 'ipod', 'windows phone'];
  if (arrayContains(mobileIds, browser.device)) {
    return browser.device;
  }
  if (arrayContains(mobileIds, browser.platform.id)) {
    return browser.platform.id;
  }
  if (browser.mobile) {
    return 'mobile';
  }
  return 'unknown';
} : goog.nullFunction;

user.isMobile = function() {
  return user.getBrowser().mobile;
};

user.getNewVsReturning = function() {
  // Assumes user.initialize is called earlier, from main.
  return user.isReturningUser ? "returning" : "new";
};

user.isFirstSession = function() {
  // Assumes user.initialize is called earlier, from main.
  return !user.isReturningUser ? true : !!optly.client.storage.sessionStorage.get(user.FIRST_SESSION_KEY);
};

user.getPlatform = function() {
  return user.getBrowser().platform;
};

/**
 * Detects whether the visitor is a bot.
 * If it is a bot, we do not send its action to our log servers.
 * @param {string=} userAgentString User agent string.
 */
user.isBot = function(userAgentString) {
  // NOTE: This bot list must be kept in sync with that in backend/log.py
  var BOT_LIST = ["googlebot", "yahoo! slurp", "bingbot", "bingpreview", "msnbot", "keynote", "ktxn", "khte",
    "gomezagent", "alertsite", "yottaamonitor", "pingdom.com_bot", "aihitbot", "baiduspider", "adsbot-google",
    "mediapartners-google"];
  var userAgent = userAgentString || navigator.userAgent;
  userAgent = userAgent.toLowerCase();
  for (var i = 0; i < BOT_LIST.length; i++){
    var botSubstring = BOT_LIST[i];
    if (userAgent.indexOf(botSubstring) !== -1 ) {
      return true;
    }
  }
  return false;
};

user.initialize = function() {
  user.disableForOldBrowsers();
  if (directive.isEnabled) {
    // This must be called before the user.getId is called, or the cookie will get set anyway.
    var userIdCookie = cookie.get(USER_ID_COOKIE_NAME);
    user.isReturningUser = (userIdCookie !== undefined && userIdCookie !== null);
    if (user.isBot()) {
      directive.shouldTrackEvents = false;
    } else if (!user.isReturningUser) {
      optly.client.storage.sessionStorage.set(user.FIRST_SESSION_KEY, true);
    }
  }
};

/**
 * Disable for IE<8. Returns true if disabled.
 * @private
 */
user.disableForOldBrowsers = function() {
  var browserId = user.getBrowserId(),
      browserVersion = user.getBrowserVersion();
  if(browserId === 'ie' && browserVersion !== 'unknown' && Number(browserVersion) < 8) {
    directive.isEnabled = false;
  }
};

/**
 * Used to manually set the current page URL for targeting conditions
 * as opposed to using the hard-coded window.location.href.
 * @param url {string}
 */
user.setCurrentUrl = function(url) {
  log("User", "Setting current URL to %s", url);
  user.currentUrl = url;
};

user.FIRST_SESSION_KEY = 'first_session';
user.currentUrl = undefined;
user.detectionResults = undefined;
user.isReturningUser = undefined;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/behavior.js


/**
 * An Event in the behavioral store.
 *
 * t: timestamp
 * n: event name
 * y: event type
 * r: revenue
 * o: options
 *
 * @typedef {{t: number,
 *            n: string,
 *            y: string,
 *            r: (number|undefined),
 *            o: Object}}
 */
behavior.Event;

/**
 *
 * @param {{name: string, type: (string|undefined), options: Object}} event
 */
behavior.addEvent = function(event) {
  behavior.eventQueue.push(behavior.makeEvent(event));
  behavior.persistEvents();
};

/**
 * Concat stored events with event queue, return at most maxEvents of them
 *
 * @returns {Array.<behavior.Event>}
 */
behavior.getEvents = function() {
  var allEvents = (user.getUserData('events') || []).concat(behavior.eventQueue);
  // get the last behavior.maxEvents elements of allEvents. If allEvents.length < behavior.maxEvents then it will
  // return a shallow copy of allEvents
  return allEvents.slice(-behavior.maxEvents);
};

/**
 * Make a behavior event out of the log event.
 *
 * @private
 * @param {{name: string, type: (string|undefined), options: Object}} event
 * @returns {behavior.Event}
 */
behavior.makeEvent = function(event) {
  var behavioralEvent = {
    't': +new Date(),
    'n': event.name,
    'y': event.type
  };

  var options = extend({}, event.options);

  // Pull out the revenue key because it was added unquoted; therefore its "key name" is unpredictable.
  if (options.revenue) {
    behavioralEvent['r'] = options.revenue;
    delete options.revenue;
  }

  behavioralEvent['o'] = options;
  return /** @type behavior.Event */(behavioralEvent);
};

/**
 * Store current events in event store
 *
 * @private
 */
behavior.persistEvents = function() {
  var events = behavior.getEvents();
  user.setUserData('events', events);
  behavior.eventQueue = [];
};

/**
 * @private
 */
behavior.eventQueue = [];

/**
 * @private
 */
behavior.maxEvents = 1000;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/preview_logger.js

/**
 * @define {boolean} true if preview is enabled
 */
optly.client.preview.ENABLED = false;

/**
 * This class handles logging for preview's event tab. It is only included in the preview snippit.
 */
/** 
 * @type {Array.<string>} 
 */
optly.client.preview.Logger.log = [];

/** 
 * @private
 * @type {Object.<string, string>}
 */
optly.client.preview.Logger.reasons = {};

/**
 * Adds an event to the preview log
 * @param {string} event
 * @param {Object=} options
 */
optly.client.preview.Logger.addEvent = optly.client.preview.ENABLED ? function(event, options){
  options = extend(options||{}, {"message":event, "date":(new Date()).getTime() });
  optly.client.preview.Logger.log.push(options);
} : goog.nullFunction;

/**
 * Adds a reason for an event. The reason can be retrieved later using `getReason` and logged
 * using addEvent.
 *
 * @param {string} objectId
 * @param {string} reason
 */
optly.client.preview.Logger.setReason = optly.client.preview.ENABLED ? function(objectId, reason) {
  optly.client.preview.Logger.reasons[objectId] = reason;
} : goog.nullFunction;

/**
 * Returns the reason for an event that was set using `setReason`
 * @param {string} objectId
 */
optly.client.preview.Logger.getReason = optly.client.preview.ENABLED ? function(objectId) {
  return optly.client.preview.Logger.reasons[objectId];
} : goog.nullFunction;

/**
 * Removes a reason for an event. This is normally called after the event has been logged using
 * `addEvent` to cleanup.
 * @param {string} objectId
 */
optly.client.preview.Logger.deleteReason = optly.client.preview.ENABLED ? function(objectId) {
  delete optly.client.preview.Logger.reasons[objectId];
} : goog.nullFunction;

/**
 * Clears the preview log
 */
optly.client.preview.Logger.clear = optly.client.preview.ENABLED ? function(){
  optly.client.preview.Logger.log = [];
} : goog.nullFunction;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/tracker.js


/**
 * @param {string} name
 * @param {(string|number|Object)=} revenueOrOptions
 */
tracker.addLogEventFromAPI = function(name, revenueOrOptions) {
  var options = {};
  var fixedRevenue = undefined;
  var customRevenueGoals = data.getCustomRevenueGoals();
  if (customRevenueGoals && name in customRevenueGoals &&
    isNumberLike(customRevenueGoals[name])) {
    fixedRevenue = customRevenueGoals[name];
  }

  if (revenueOrOptions && isNumberLike(revenueOrOptions)) {
    // Revenue tracking uses trackEvent(name, value), so swap value with type
    options = {revenue: Number(revenueOrOptions) };
  }
  else if (revenueOrOptions && revenueOrOptions['revenue']) {
    options = /** @type {Object} */ {revenue: revenueOrOptions['revenue'] }
  }
  else if (fixedRevenue) {
    options = {revenue: fixedRevenue };
  }
  else {
    options = /** @type {Object} */ revenueOrOptions;
  }

  /* For custom goals with revenue to work as they used to in the past, we
  * explicitly add ids of all enabled experiments on this page to the custom
  * event so that tracker.sendLogEvents doesn't separate them.
  */
  var enabledExperiments = data.getEnabledExperimentIds();
  var experimentIds = {};
  each(enabledExperiments, function(experimentId) {
    experimentIds[experimentId] = true;
  });
  $.extend(options, { experimentIds: experimentIds });

  tracker.addLogEvent(name, "custom", options);
};

/**
 * @param {string} name
 * @param {string=} type
 * @param {Object=} options
 */
tracker.addLogEvent = function(name, type, options) {
  options = options || {};
  optly.client.preview.Logger.addEvent(name, options);

  if (!directive.shouldTrackEvents) {
    return;
  }

  var event = {
    name: name,
    type: type,
    options: options
  };

  tracker.logEvents.push(event);

  if (options.skipBehaviorTracking !== true) {
    behavior.addEvent(event);
  }
  delete options.skipBehaviorTracking;

  if (tracker.shouldSendLogEvents) {
    tracker.sendLogEvents();
    timer.addEvent("Tracker", "Tracking event '" + name + "'");
  }
  else {
    timer.addEvent("Tracker", "Queued tracking event '" + name + "'");
  }
};

// Listen for initial click events to detect engagement.
tracker.enableEngagementTracking = function() {
  tracker.cancelEngagementTracking();
  $("html").bind("mousedown", tracker.registerEngagement);
  $("html").bind("touchstart", tracker.confirmEngagement);
};

// Remove all of our engagement listeners.
tracker.cancelEngagementTracking = function() {
  // confirmEngagement listeners.
  $("html").unbind("touchstart", tracker.confirmEngagement);
  // registerEngagement listeners.
  $("html").unbind("mousedown touchend", tracker.registerEngagement);
  // enableEngagementTracking listeners.
  $("html").unbind("touchmove", tracker.enableEngagementTracking);
};

// Listen for secondary click-like events to confirm or reset engagement.
// Desktops & Android event order: mousedown, mouseup, click.
// iOS event order: touchstart, touchend.
tracker.confirmEngagement = function() {
  $("html").bind("touchend", tracker.registerEngagement);
  // iOS registers touchstart->touchmove->touchend for scrolling.
  // Scrolling does not count as engagement.
  $("html").bind("touchmove", tracker.enableEngagementTracking);
};

tracker.addPageviewEvent = function(url) {
  var pageview_revenue_goals = data.getPageviewRevenueGoals();
  if (pageview_revenue_goals && keys(pageview_revenue_goals) > 0) {
    each(keys(pageview_revenue_goals), function(key) {
      tracker.addLogEvent(url, "pageview", {
        revenue: key,
        experimentIds: pageview_revenue_goals[key]
      })
    })
  }
  else {
    tracker.addLogEvent(url, "pageview");
  }
}

/**
 * Match events with the goal ids.
 * @param event
 * @returns {Array}
 */
tracker.getMatchingGoalIds = function(event) {
  var goals = data.getGoalExpressions();
  var goal_ids = [];

  for (var goal_id in goals) {
    if (goals.hasOwnProperty(goal_id)) {
      var expressions = goals[goal_id];
      $.each(expressions, function(i, expression) {
        try {
          if(event.match(new RegExp(expression, 'i'))) {
            goal_ids.push(goal_id);
            return false;
          }
        }
        catch (error) {
          // Skip if regex is invalid
        }
        return true;
      });
    }
  }

  return goal_ids;
}

/**
 * @private
 * @returns {Array.<string>}
 */
tracker.getPendingLogEvents = function() {
  var pendingLogEventCookie = cookie.get(PENDING_LOG_EVENTS_COOKIE_NAME) || "[]";
  var values = [];
  try {
    values = /** @type {Array.<string>} */ json.parse(pendingLogEventCookie);
  } catch (e) {
    // there is the potential for the JSON to be malformed if the cookie
    // exceeded the max allowed size and was truncated
  }

  // some error checking for if the value becomes corrupted
  if (!isArrayLike(values)) {
    values = [];
  }
  else {
    for (var i = 0, nValues = values.length; i < nValues; i++) {
      var value = values[i];

      if (typeof value !== "string") {
        // each value in list of events should be a string
        values = [];
        break;
      }
      else {
        try {
          var parsed = json.parse(value);
          // the value should be a 'flat' event string, so attempting
          // to parse it as JSON should fail
          values = [];
          break;
        } catch (e) {}
      }
    }
  }

  return values;
};

/**
 * @param {string} query
 * @param {function()} doneCallback
 */
tracker.makeLogRequest = function(query, doneCallback) {
  timer.addEvent("Tracker", "Making a log request.");
  tracker.makeRequest(data.getLogUrlRoot() + "?" + query, doneCallback);
};

/**
 * @private
 * @param {string} fullUrl
 * @param {function()|null} doneCallback
 */
tracker.makeImageRequest = function(fullUrl, doneCallback) {
  var image = new Image();
  image.onload = doneCallback;

  fullUrl = tracker.stripXHRFlag(fullUrl);
  image.src = fullUrl;

  // Saves pending Image instances.  IE 6 and IE 7 abort image requests when
  // Image instances are garbage collected, which apparently happens when this
  // function exits.
  //
  // To consistently recreate an image abortion, quit IE 6 or IE 7.  Relaunch
  // and visit a page that makes a tracking request.  That tracking request
  // will be aborted.  Subsequent refreshes (with the same running IE process)
  // won't consistently have image abortions.  IE 6 aborts more frequently than
  // IE 7.
  //
  // Simply saving the Image instance appears to prevent these image abortions.
  tracker.images.push(image);
};

/**
 * Converts an object's keys and values to a query string
 * @param {Object} obj
 * @returns {string}
 */
tracker.objectToQuery = function(obj) {
   var str = [];
   for(var p in obj){
       if (Object.prototype.hasOwnProperty.call(obj, p)) {
           str.push(window["encodeURIComponent"](p) + "=" + window["encodeURIComponent"](obj[p]));
       }
   }
   return str.join("&");
};

/**
 * Make an XHR request to the URL provided and set the
 * callback function to execute when done (if any)
 *
 * @param {string} fullUrl
 * @param {function()|null} doneCallback
 */
tracker.makeRequest = function(fullUrl, doneCallback) {
  if(tracker.XHR_SUPPORTED){
    if (tracker.isXHRQuery(fullUrl)) {
      try {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
          xhr.onload = doneCallback;
          xhr.open("GET", fullUrl, true);
          xhr.withCredentials = true;
          xhr.send();

          // Upon success, return so we don't fall back to the image request.
          return;
        }
        else {
          tracker.XHR_SUPPORTED = false;
          timer.addEvent("Tracker", "Found that XHR with credentials is not supported in this browser.");
        }
      }
      catch (err) {
          // Fall back to image request below.
          timer.addEvent("Tracker", "XHR not supported");
          tracker.XHR_SUPPORTED = false;
      }
    }
  }

  // Fall back to an image request.
  tracker.makeImageRequest(fullUrl, doneCallback);
};

/**
 * @private
 * @param {string} query
 */
tracker.isXHRQuery = function(query) {
  return query.indexOf(tracker.XHR_FLAG) !== -1;
};

/**
 * @private
 * @param {string} query
 */
tracker.stripXHRFlag = function(query) {
  return query.replace("&" + tracker.XHR_FLAG, "");
};

/**
 * This function opts the visitor out of Optimizely for this domain
 * (or de-opt outs them by removing the opt out cookie).
 */
tracker.optOut = function(shouldOptOut) {
  shouldOptOut = (shouldOptOut === true || shouldOptOut === "true");
  var cookieValue = shouldOptOut ? "true" : "false";
  if (shouldOptOut) {
    cookie.set(OPT_OUT_COOKIE_NAME, cookieValue, directive.trackingCookieExpiration);
    cookie.set(BUCKET_COOKIE_NAME, cookieValue, directive.trackingCookieExpiration);
    alert("You have successfully opted out of Optimizely for this domain.");
  }
  else {
    cookie.set(OPT_OUT_COOKIE_NAME, cookieValue, directive.trackingCookieExpiration);
    alert("You are NOT opted out of Optimizely for this domain.");
  }
};

/**
 * @private
 * @param {Object} event
 * @this {Element}
 */
tracker.registerEngagement = function (event) {
  // Cancel any remaining engagement listeners.
  tracker.cancelEngagementTracking();
  tracker.addLogEvent("engagement");
};

/**
 * @private
 * @param {string} event
 */
tracker.removePendingLogEvent = function(event) {
  var pendingEvents = tracker.getPendingLogEvents();
  for (var i = 0, nEvents = pendingEvents.length; i < nEvents; i++) {
    if (pendingEvents[i] === event) {
      pendingEvents.splice(i, 1);
      break;
    }
  }
  tracker.setPendingLogEventsCookie(pendingEvents);
  timer.addEvent("Tracker", "Removed a pending log event from the pending events cookie.")
};

/** @private */ tracker.logEvents = [];
/** @private */ tracker.shouldSendLogEvents = false;

/**
 * Sends a logging event to the logging servers for all queued events.
 */
tracker.sendLogEvents = function() {
  var queryParameters = [
    "a=" + data.getProjectId(),
    "d=" + data.getAdminAccountId(),
    "y=" + data.getIPAnonymization(),
    "src=js"
  ];

  if (directive.shouldOverrideThirdPartyCookie) {
    queryParameters.push("override=true");
  }

  each(plan.getVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);
    queryParameters.push("x" + experimentId + "=" + variationId);
  });

  each(segmenter.getSegmentTrackingData(), function(segmentId, segmentValue) {
    queryParameters.push("s" + segmentId + "=" + segmentValue);
  });

  var individualQuerySubstrings = [];
  var userId = user.getId();
  var ppid = user.getPPID();

  each(tracker.logEvents, function(event) {
    var eventQueryParameters = [];
    var goal_ids = [];

    if (event.name) {
      eventQueryParameters.push("n=" + encodeURIComponent(event.name));
      goal_ids = goal_ids.concat(tracker.getMatchingGoalIds(event.name));
    }

    // Send along experiment impressions with the pageviews. This is used
    // For visitor count and experiment impressions on the backend.
    if (event.type && event.type === "pageview") {
      // For pageview events the "goalId" is the active experiment Id
      goal_ids = goal_ids.concat(evaluator.getActiveExperimentIds());
      var redirectVariationId = redirect.getRedirectVariationId();
      if (redirectVariationId) {
        var redirectExperimentId = data.getVariationExperimentId(redirectVariationId);
        goal_ids.push(redirectExperimentId);
      }
    }

    if (event.options['anonymous'] !== true) {
      eventQueryParameters.push("u=" + userId);

      // Add PPID if specified
      if (ppid) {
        eventQueryParameters.push('p=' + encodeURIComponent(ppid));
      }
    }

    if (tracker.XHR_SUPPORTED) {
      eventQueryParameters.push(tracker.XHR_FLAG);
    }

    eventQueryParameters.push("t=" + (+new Date()));  // coerce Date to number

    if (directive.optOutThirdPartyCookies) {
      eventQueryParameters.push("dtpc=" + directive.optOutThirdPartyCookies);
    }

    /* If an event has revenue, we don't want it to be sent for experiments
    that it's not targeted for WITH the revenue attribute. This is so that
    non-targeted experiments don't account for this revenue event and show it
    in "Revenue (Total Revenue)" goal. At the same time we want to send an
    event that contains all active experiments on page so that goals can
    continue to be added retroactively.
      The code below separates these two cases and creates 2 different events
    if necessary. One without the revenue, for experiments active on page but
    not targeted by this goal and one with the revenue, for experiments targeted
    by this goal.
     */

    // defaulting revenueExperiments to {} in the case of a non-revenue event greatly simplifies further logic
    var revenueExperiments = (!!event.options && !!event.options.revenue && event.options.experimentIds) || {};

    // split enabled experiments by whether or not they are targeted by revenue
    var revenueExperimentIds = keys(revenueExperiments);
    var nonRevenueExperimentIds = filter(data.getEnabledExperimentIds(), function(experiment) {
      return !revenueExperiments[experiment];
    });

    var eventExperimentSets = [
      {
        experiments: revenueExperimentIds,
        goals: goal_ids.concat([data.getSummaryRevenueGoalId()]), // add the revenue goal for revenue targeted events
        extraParameters: ["v=" + encodeURIComponent(event.options.revenue)] // and add the revenue
      },
      {
        experiments: nonRevenueExperimentIds,
        goals: goal_ids,
        extraParameters: []
      }
    ];

    each(eventExperimentSets, function(eventExperimentSet) {
      if (!eventExperimentSet.experiments.length && !directive.forceTracking) {
        return;
      }
      individualQuerySubstrings.push(
        eventQueryParameters
          .concat(eventExperimentSet.extraParameters)
          .concat([
                      "f=" + eventExperimentSet.experiments.join(","),
                      "g=" + eventExperimentSet.goals.join(",")
                  ])
          .join("&")
      );
    });

    if (event.type === "custom") {
      try {
        tracker.updateCustomEventList(event.name);
      }
      catch (e) {
      }
    }
  });

  var pendingQueries = individualQuerySubstrings.concat(tracker.getPendingLogEvents());
  tracker.setPendingLogEventsCookie(pendingQueries);

  var queryCommonSubstring = queryParameters.join("&");

  // We attempt to log all pending events the first time any event is
  // to be sent. After that, we only try to log new events.
  // This prevents attempting to send a potentially large number of
  // pending events repeatedly when a lot of events are triggered
  // in rapid succession and thus do not allow pending requests to
  // complete before attempting to send them again.
  var eventsToSend = tracker.sentPendingLogEvents ? individualQuerySubstrings : pendingQueries;
  tracker.sentPendingLogEvents = true;

  for (var i = 0, nEvents = eventsToSend.length; i < nEvents; i++) {
    var eventQuery = eventsToSend[i];
    tracker.makeLogRequest(queryCommonSubstring + "&" + eventQuery,
                           function() {
                             tracker.removePendingLogEvent(eventQuery);
                           });
  }

  tracker.logEvents = [];
  tracker.shouldSendLogEvents = true;
};

/**
 * Sends tracking request for installation verification.
 */
tracker.sendVerificationRequest = function() {
  if (!directive.shouldTrackEvents) {
    return;
  }

  var webHost = data.getWebHost();
  var fullUrl = "//" + webHost + "/account/snippet_installed?project_id=" +
    data.getProjectId() + "&wxhr=true";

  timer.addEvent("Tracker", "Making snippet verification request.");
  tracker.makeRequest(fullUrl, null)
}

/**
 * @private
 * @param {Array.<string>} events
 */
tracker.setPendingLogEventsCookie = function(events) {
  // we limit the length of the cookie by iteratively removing events
  // from being stored
  var value = json.stringify(events);
  while (value.length > PENDING_LOG_EVENTS_COOKIE_MAX_LENGTH) {
    // remove events from end of array since those are older
    events = events.slice(0, -1);
    value = json.stringify(events);
  }
  cookie.set(PENDING_LOG_EVENTS_COOKIE_NAME,
             value,
             PENDING_LOG_EVENTS_COOKIE_AGE);
};

/**
 * @param {string} eventName
 */
tracker.updateCustomEventList = function(eventName) {
  /**
   * We set a limit of 100 events because localStorage has a cap of 5 MB per
   * domain.
   */
  var MAX_EVENTS_TRACKED = 100;
  var userId = user.getId();
  var customEventList = optly.client.storage.localStorage.get(CUSTOM_EVENTS_STORAGE_NAME) || {};

  var eventArray = customEventList[userId] ||
                   (customEventList[userId] = []);
  // check for data corruption
  eventArray = /** @type {Array} */ (isArrayLike(eventArray) ? eventArray : []);

  if ($.inArray(eventName, eventArray) !== -1) {
    // remove the existing element, and re-add it at the end of the array
    eventArray.splice($.inArray(eventName, eventArray), 1);
    eventArray.push(eventName);
  }
  else {
    eventArray.push(eventName);
  }
  if (eventArray.length > MAX_EVENTS_TRACKED) {
    eventArray.shift();
  }
  customEventList[userId] = eventArray;

  optly.client.storage.localStorage.set(CUSTOM_EVENTS_STORAGE_NAME, customEventList);

  // TODO(Ricky): Remove this line and the associated constant after a reasonable amount of time.
  // Clearing out existing cookies to reduce HTTP request payload
  cookie.remove(CUSTOM_EVENTS_COOKIE_NAME);
};


/**
 * Sends a custom log event with error info.
 * Added in support of BUG-553 investigation.
 * @param error
 */
tracker.sendErrorLog = function(error) {
  // Log a custom event with part of the stack trace as the name.
  var name = 'EXCEPTION: ' + (error.name || 'no-name');
  var message = error.message || 'no-message';
  var trace = error.stack || 'error\nno stack';
  var topOfStack = trace.split('\n').slice(0, 2).join(' ');
  tracker.addLogEvent([name, message, topOfStack].join(', '), 'custom');
  tracker.sendLogEvents();
};

/** @private */
tracker.images = [];

/** @private */
tracker.sentPendingLogEvents = false;

/** @private */
tracker.XHR_FLAG = "wxhr=true";

/** @private */
tracker.XHR_SUPPORTED = true;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/thirdparty/uaparser.js

/**
 * @license
 *
 * UAParser.js v0.7.3
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2014 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

useragent = function() {};

(
  /**
   * @param {*} window
   * @param {*=} undefined
   */
  function(window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.3',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            for (var i in extensions) {
                if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {
                    regexes[i] = extensions[i].concat(regexes[i]);
                }
            }
            return regexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function () {

            var result, i = 0, j, k, p, q, matches, match, args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],       // even sequence (0,2,4,..)
                    props = args[i + 1];   // odd sequence (1,3,5,..)

                // construct object barebones
                if (typeof(result) === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        q = props[p];
                        if (typeof(q) === OBJ_TYPE) {
                            result[q[0]] = undefined;
                        } else {
                            result[q] = undefined;
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof(q) === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof(q[1]) == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                major : {
                    '1' : ['/8', '/1', '/3'],
                    '2' : '/4',
                    '?' : '/'
                },
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : 'NT 6.4',
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/((\d+)?[\w\.-]+)/i,                                 // Opera Mini
            /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,                // Opera Mobi/Tablet
            /(opera).+version\/((\d+)?[\w\.]+)/i,                               // Opera > 9.80
            /(opera)[\/\s]+((\d+)?[\w\.]+)/i                                    // Opera < 9.80

            ], [NAME, VERSION, MAJOR], [

            /\s(opr)\/((\d+)?[\w\.]+)/i                                         // Opera Webkit
            ], [[NAME, 'Opera'], VERSION, MAJOR], [

            // Mixed
            /(kindle)\/((\d+)?[\w\.]+)/i,                                       // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,                                  // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)((?:\/)[\w\.]+)*/i,                                        // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron
            ], [NAME, VERSION, MAJOR], [

            /(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i                   // IE11
            ], [[NAME, 'IE'], VERSION, MAJOR], [

            /(yabrowser)\/((\d+)?[\w\.]+)/i                                     // Yandex
            ], [[NAME, 'Yandex'], VERSION, MAJOR], [

            /(comodo_dragon)\/((\d+)?[\w\.]+)/i                                 // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION, MAJOR], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i
                                                                                //UCBrowser/QQBrowser
            ], [NAME, VERSION, MAJOR], [

            /(dolfin)\/((\d+)?[\w\.]+)/i                                        // Dolphin
            ], [[NAME, 'Dolphin'], VERSION, MAJOR], [

            /((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i                       // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION, MAJOR], [

            /version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i                 // Mobile Safari
            ], [VERSION, MAJOR, [NAME, 'Mobile Safari']], [

            /version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i              // Safari & Safari Mobile
            ], [VERSION, MAJOR, NAME], [

            /webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i                   // Safari < 3.0
            ], [NAME, [MAJOR, mapper.str, maps.browser.oldsafari.major], [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/((\d+)?[\w\.]+)/i,                                    // Konqueror
            /(webkit|khtml)\/((\d+)?[\w\.]+)/i
            ], [NAME, VERSION, MAJOR], [

            // Gecko based
            /(navigator|netscape)\/((\d+)?[\w\.-]+)/i                           // Netscape
            ], [[NAME, 'Netscape'], VERSION, MAJOR], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,                    // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf
            /(links)\s\(((\d+)?[\w\.]+)/i,                                      // Links
            /(gobrowser)\/?((\d+)?[\w\.]+)*/i,                                  // GoBrowser
            /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,                             // ICE Browser
            /(mosaic)[\/\s]((\d+)?[\w\.]+)/i                                    // Mosaic
            ], [NAME, VERSION, MAJOR]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION, MAJOR], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION, MAJOR], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION, MAJOR], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION, MAJOR], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION, MAJOR], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION, MAJOR], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION, MAJOR], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION, MAJOR], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION, MAJOR], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION, MAJOR], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION, MAJOR], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION, MAJOR], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION, MAJOR], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION, MAJOR], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION, MAJOR], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION, MAJOR], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION, MAJOR], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, MAJOR, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION, MAJOR], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION, MAJOR]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])/i                                           // Sony Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[3portablevi]+)/i                                    // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
                
            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,
            /(mot)[\s-]?(\w+)*/i
            ], [[VENDOR, 'Motorola'], MODEL, [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
            /(samsung);smarttv/i
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w-;]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /(mobile|tablet);.+rv\:.+gecko\//i                                  // Unidentifiable
            ], [[TYPE, util.lowerize], VENDOR, MODEL]
        ],

        engine : [[

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(haiku)\s(\w+)/i,                                                  // Haiku
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////

      /**
       *
       * @param uastring
       * @param extensions
       * @returns {*}
       * @constructor
       */
    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            return mapper.rgx.apply(this, rgxmap.browser);
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function() {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        this.setUA(ua);
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR,
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };


    ///////////
    // Export
    //////////
      
    window.UAParser = UAParser;

})(useragent);

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/detect.js


/**
 * Parse the userAgent string using the useragent library and return a subset of the data.
 *
 * @param {Object=} navigatorLike    An object to be interpreted as window.navigator-like (used for testing)
 * @returns {Object}
 */
detect.detect = function(navigatorLike) {
  var navigator = navigatorLike || window.navigator;
  var ua = new useragent.UAParser(navigator.userAgent);
  var browser = ua.getBrowser();
  var os = ua.getOS();
  var device = ua.getDevice();
  return {
    browserId: detect.getBrowserCode(browser['name']),
    browserVersion: browser['version'],
    platform: {
      id: detect.normalizePlatformName(os['name']),
      version: os['version']
    },
    device: detect.normalizeDevice(device),
    mobile: arrayContains(['mobile', 'tablet'], device['type'])
  }
};

/**
 * Determine the code for a given long browser name.
 *
 * @param {?string} name
 * @returns {string}
 */
detect.getBrowserCode = function(name) {
  name = (name || '').toLowerCase();
  if (name in detect.browserMap) {
    return /** @type string */(name);
  }

  for (var code in detect.browserMap) {
    if (any(detect.browserMap[code] || [], function(browserName) {
      return browserName.toLowerCase() === name;
    })) {
      return code;
    }
  }
  return 'unknown';
};

/**
 * Given a browser code, return the long representation of that browser's name.
 *
 * If multiple long names for a code, Use the first element of the matching entry,
 * which should be the canonical name of the browser family.
 *
 * @param {string} code
 * @returns {string}
 */
detect.getBrowserName = function(code) {
  return detect.browserMap[code] ? detect.browserMap[code][0] : code;
};

/**
 * Return the device model if one of the devices enumerated in deviceMap
 *
 * @param {{model: (string|undefined), vendor: string}} device
 * @returns {?string}
 */
detect.normalizeDevice = function(device) {
  if (device['model'] in detect.deviceMap) {
    return detect.deviceMap[device['model']];
  }
  return device['type'] || 'desktop';
};

/**
 * @private
 * @param {string} name
 * @returns {string}
 */
detect.normalizePlatformName = function(name) {
  return (name || "unknown").toLowerCase();
};

/**
 * Map browser code to long names (for compatibility with legacy browser conditions).
 * Multiple browsers can map to the same code; the first name is used for display purposes.
 *
 * @private
 * @type {Object.<string, Array.<string>>}
 */
detect.browserMap = {
  'gc': ['Chrome', 'chromium', 'silk', 'yandex', 'maxthon'],
  'ie': ['Internet Explorer', 'iemobile'],
  'ff': ['Firefox', 'iceweasel'],
  'opera': ['Opera', 'opera mini', 'opera tablet'],
  'safari': ['Safari', 'mobile safari', 'webkit'],
  'ucbrowser': ['UC Browser']
};

/**
 * @private
 * @type {Object.<string, string>}
 */
detect.deviceMap = {
  'iPhone': 'iphone',
  'iPad': 'ipad'
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/data.js


/**
 * @return {number}
 */
data.getAdminAccountId = function() {
  return data.getProperty("admin_account_id");
};

/**
 * @return {string}
 */
data.getApiUrlRoot = function() {
  return data.getUrlRoot("api_host");
};

data.getAudience = function(audienceId) {
  return data.getProperty('audiences', audienceId);
};

/**
 *
 * @param {string|number} audienceId
 * @param {string} property
 * @returns {*}
 */
data.getAudienceProperty = function(audienceId, property) {
  return data.getProperty('audiences', /** @type {string} */(audienceId), property);
};

/**
 *
 * @returns {?Array.<Object>}
 */
data.getAudiences = function() {
  return data.getProperty('audiences');
};

/**
 *
 * @param {string|number} audienceId
 * @returns {?number}
 */
data.getAudienceSegmentId = function(audienceId) {
  var result = data.getAudienceProperty(audienceId, 'segment_id');
  if (!result) {
    return null;
  }
  return /** @type {number} */(result);
};

/**
 * @return {Array.<Object>}
 */
data.getClickGoals = function() {
  if (!data.clickGoalsWithSeparatedSelectors) {
    var clickGoals = data.getProperty("click_goals") || [];
    data.clickGoalsWithSeparatedSelectors = [];

    // Selectors that are comma separated lists should be split up.
    // Otherwise, when we poll for the selector, some of the
    // elements might be ready while others are not.
    for (var i = 0, nClickGoals = clickGoals.length; i < nClickGoals; i++) {
      var goal = clickGoals[i];
      var selectors = goal['selector'].split(SELECTOR_DELIMITER);
      for (var j = 0, nSelectors = selectors.length; j < nSelectors; j++) {
        var selector = selectors[j];

        // ignore empty strings
        if (selector) {
          var goalData = {
            'event_name': goal['event_name'],
            'selector': selector
          };
          if ('experiments' in goal) {
            goalData['experiments'] = goal['experiments'];
          }
          else if ('url_conditions' in goal) {
            goalData['url_conditions'] = goal['url_conditions'];
          }

          if ('revenue' in goal) {
            goalData['revenue'] = goal['revenue'];
          }

          data.clickGoalsWithSeparatedSelectors.push(goalData);
        }
      }
    }
  }

  return data.clickGoalsWithSeparatedSelectors;
};

/**
 * @param {string} objectId
 * @param {string} objectType
 * @return {Array.<Object>}
 */
data.getConditions = function(objectId, objectType) {
  switch (objectType) {
    case "experiment":
      return data.getExperimentConditions(objectId);
    case "segment":
      return data.getSegmentConditions(objectId);
    default:
      return [];
  }
};

/**
 * Returns true if the object with the supplied id uses audiences
 * @returns {boolean}
 */
data.usesAudiences = function(objectId) {
  return !(data.getExperimentConditions(objectId) || data.getSegmentConditions(objectId));
}

/**
 * @returns {Object.<string, number>}
 */
data.getCustomRevenueGoals = function() {
  return data.getProperty("custom_revenue_goals");
};

/**
 * @returns {?number}
 */
data.getSummaryRevenueGoalId = function() {
  return data.getProperty('summary_revenue_goal_id') || null;
};

/**
 * @param {string|number} dimensionId
 * @returns {*}
 */
data.getDimension = function(dimensionId) {
  return data.getProperty('dimensions', /** @type {string} */(dimensionId));
};

data.getDimensions = function() {
  return data.getProperty('dimensions') || {};
};

/**
 *
 * @param {string|number} dimensionApiName
 * @returns {?number}
 */
data.getDimensionIdByApiName = function(dimensionApiName) {
  for (var dimensionId in data.getDimensions()) {
    if (dimensionApiName === data.getDimensionApiName(dimensionId)) {
      return /** @type {number} */(dimensionId);
    }
  }
  return null;
};

/**
 * @param {string|number} dimensionId
 * @param {string} property
 * @returns {*}
 */
data.getDimensionProperty = function(dimensionId, property) {
  return data.getProperty('dimensions', dimensionId.toString(), property);
};

/**
 * @param {string|number} dimensionId
 * @returns {?string}
 */
data.getDimensionApiName = function(dimensionId) {
  var result = data.getDimensionProperty(dimensionId, 'api_name');
  if (!result) {
    return null;
  }
  return /** @type {string} */(result);
};

/**
 *
 * @param {string|number} dimensionId
 * @returns {?string}
 */
data.getDimensionType = function(dimensionId) {
  var result = data.getDimensionProperty(dimensionId, 'condition_type');
  if (!result) {
    return null;
  }
  return /** @type {string} */(result);
};

/**
 * @param {string|number} dimensionId
 * @returns {?string}
 */
data.getDimensionName = function(dimensionId) {
  var result = data.getDimensionProperty(dimensionId, 'name');
  if (!result) {
    return null;
  }
  return /** @type {string} */(result);
};

/**
 * @param {string|number} dimensionId
 * @returns {?number}
 */
data.getDimensionSegmentId = function(dimensionId) {
  var result = data.getDimensionProperty(dimensionId, 'segment_id');
  if (!result) {
    return null;
  }
  return /** @type {number} */(result);
};

/**
 * @returns {Array.<string>}
 */
data.getEnabledExperimentIds = function() {
  if (!data.cachedEnabledExperimentIds) {
    data.cachedEnabledExperimentIds = filter(data.getExperimentIds(),
                                             data.isExperimentEnabled);
  }

  return data.cachedEnabledExperimentIds;
};

/**
 * @param {string} experimentId
 * @return {Array.<string>}
 */
data.getEnabledVariationIds = function(experimentId) {
  return data.getExperimentProperty(experimentId, "enabled_variation_ids")
         || [];
};

/**
 *
 * @param {string} experimentId
 * @returns {Array.<number>}
 */
data.getExperimentAudienceIds = function(experimentId) {
  return data.getExperimentProperty(experimentId, 'audiences') || [];
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getExperimentCode = function(experimentId) {
  return data.getExperimentProperty(experimentId, "code") || "";
};

/**
 * Returns an experiment's status (example "Running", "Paused", ect). This field is only included in
 * the data section of client for the preview version of client.
 * @param {string} experimentId
 * @return {string}
 */
 data.getExperimentStatus =  optly.client.preview.ENABLED ? function(experimentId) {
  return data.getExperimentProperty(experimentId, "status");
 } : goog.nullFunction;

/**
 * @param {string} experimentId
 * @return {Array.<Object>|null}
 */
data.getExperimentConditions = function(experimentId) {
  return data.getExperimentProperty(experimentId, "conditions");
};

/**
 *
 * @param {string} experimentId
 * @returns {Array.<Object>|null}
 */
data.getExperimentUrls = function(experimentId) {
  return data.getExperimentProperty(experimentId, "urls");
};

/**
 * Get all the goal regex expressions so we can attribute ids
 * to the log events client-side.
 * @return {Array.<Object>}
 */
data.getGoalExpressions = function() {
  return data.getProperty("goal_expressions");
};

/**
 * Gets click goals (with targeting conditions) if this project is using
 * ProjectGoals. Only returns click goals valid for current page that
 * are not targeted by experiment.
 * @returns {Array.<Object>}
 */
data.getProjectClickGoalsWithCustomTargeting = function() {
  var projectClickGoalsWithCustomTargeting = filter(
    data.getClickGoals(),
    function(goal) {
      if (goal['experiments']) {
        // this goal's targeting matches that of the experiments that
        // contain it
        return false;
      }
      return condition.testUrls(goal['url_conditions'] || []);
    }
  );

  return projectClickGoalsWithCustomTargeting;
};

/**
 * @param {string} segmentIdentifier
 * @return {string|null}
 */
data.getSegmentIdByIdentifier = function(segmentIdentifier) {
  var segments = data.getSegments();
  for (var segmentId in segments) {
    if (Object.prototype.hasOwnProperty.call(segments, segmentId)) {
      var segment = segments[segmentId];

      if (segment && segment['api_name'] === segmentIdentifier) {
        return String(segmentId);
      }
    }
  }
  return null;
};

/**
 * Returns if a segment is a built in default segment. This field is only available
 * in the preview version of client.
 * @param {string} segmentId
 * @return {boolean}
 */
data.getSegementIsDefault = optly.client.preview.ENABLED ? function(segmentId){
  return data.getSegmentProperty(segmentId, "is_default") || false;
} : goog.nullFunction;

data.getSegment = function(segmentId) {
  return data.getSegments()[segmentId];
};

/**
 * @param {string} segmentId
 * @return {boolean}
 */
data.getSegmentAPIOnly = function(segmentId) {
  return data.getSegmentProperty(segmentId, "is_api_only") || false;
};

/**
 * Get associated audience for the given segment, if applicable
 * @param segmentId
 * @returns {String|Number|null}
 */
data.getSegmentAudienceId = function(segmentId) {
  return data.getSegmentProperty(segmentId, 'audience_id');
};

/**
 * @param {string} segmentId
 * @return {Array.<Object>|null}
 */
data.getSegmentConditions = function(segmentId) {
  return data.getSegmentProperty(segmentId, "add_condition");
};

/**
 * @param {string} segmentId
 * @return {string}
 */
data.getSegmentIdentifier = function(segmentId) {
  return data.getSegmentProperty(segmentId, "api_name") || "";
};

/**
 * @param {string} segmentId
 * @return {string}
 */
data.getSegmentName = function(segmentId) {
  return data.getSegmentProperty(segmentId, "name") || ("Seg " + segmentId);
};

/**
 * @param {string} segmentId
 * @return {string}
 */
data.getSegmentValueType = function(segmentId) {
  return data.getSegmentProperty(segmentId, "segment_value_type") || "";
};

/**
 * @param {string} experimentId
 * @return {Array.<Object>}
 */
data.getUrlConditions = function(experimentId) {
  var conditions = data.getExperimentConditions(experimentId);
  var urlConditions = [];
  each(conditions, function(condition) {
    if (condition['type'] === 'url') {
      urlConditions.push(conditions);
    }
  });
  return urlConditions;
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getExperimentCss = function(experimentId) {
  return data.getExperimentProperty(experimentId, "css") || "";
};

/**
 * @param {string} experimentId
 * @return {Object}
 */
data.getExperimentEvents = function(experimentId) {
  var eventData = {};

  // click tracking from DashboardGoals (if the project hasn't migrated)
  var dashboardClickGoals = data.getExperimentProperty(experimentId, "events") || {};
  each(dashboardClickGoals, function(selector, eventName) {
    eventData[selector] = [eventName];
  });

  // click tracking from ProjectGoals
  // this does handle having more than one custom event per selector
  var projectClickGoalsTrackingThisExperiment = filter(
    data.getClickGoals(),
    function(goal) {
      if ('experiments' in goal) {
        return experimentId in goal['experiments'];
      }
      return false;
    }
  );
  for (var i = 0; i < projectClickGoalsTrackingThisExperiment.length; i++) {
    var goal = projectClickGoalsTrackingThisExperiment[i];
    if (!eventData[goal['selector']]) {
      eventData[goal['selector']] = [];
    }
    eventData[goal['selector']].push({
      'eventName': goal['event_name'],
      'revenue': goal['revenue'],
      'experimentIds': goal['experiments']
    });
  }

  return eventData;
};

/**
 * @return {Object}
 */
data.getExperiments = function() {
  return data.getProperty("experiments") || {};
};

/**
 * @return {Object}
 * Blacklisted experiments contain Archived and Deleted experiments
 */
data.getBlacklistedExperiments = function() {
  return data.getProperty("blacklisted_experiments") || {};
};

/**
 * @return {Array.<string>}
 */
data.getExperimentIds = function() {
  return keys(data.getProperty("experiments") || {});
};

/**
 * @param {string} experimentId
 * @return {number}
 */
data.getExperimentIgnorePercentage = function(experimentId) {
  return data.getExperimentProperty(experimentId, "ignore") || 0;
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isExperimentManuallyActivated = function(experimentId) {
  return data.getExperimentProperty(experimentId, 'activation_mode') === 'manual';
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isExperimentConditionallyActivated = function(experimentId) {
  return data.getExperimentProperty(experimentId, 'activation_mode') === 'conditional';
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getConditionalActivationCode = function(experimentId) {
  return data.getExperimentProperty(experimentId, 'conditional_code');
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getExperimentName = function(experimentId) {
  return data.getExperimentProperty(experimentId, "name") || ("Exp " + experimentId);
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getExperimentString = function(experimentId) {
  var experimentName = data.getExperimentName(experimentId);
  return "experiment \"" + experimentName + "\" (" + experimentId + ")";
};

/**
 * @param {string} experimentId
 * @return {Array.<string>}
 */
data.getExperimentSectionIds = function(experimentId) {
  return data.getExperimentProperty(experimentId, "section_ids") || [];
};

/**
 * @param {string} experimentId
 * @return {Array.<string>}
 */
data.getExperimentVariationIds = function(experimentId) {
  return data.getExperimentProperty(experimentId, "variation_ids") || [];
};

/**
 * @param {string} experimentId
 * @returns {Object.<string, number>}
 */
data.getExperimentVariationWeights = function(experimentId) {
  return data.getExperimentProperty(experimentId, "variation_weights") || {};
};

/**
 * @param {string} experimentId
 * @return {number}
 */
data.getGoogleAnalyticsSlot = function(experimentId) {
  var googleAnalytics = data.getGoogleAnalyticsProperty(experimentId);
  var slot = 0;

  if (isDefined(googleAnalytics)) {
    slot = googleAnalytics['slot'] || slot;
  }

  return slot;
};

/**
 * @param {string} experimentId
 * @return {string}
 */
data.getGoogleAnalyticsTracker = function(experimentId) {
  var googleAnalytics = data.getGoogleAnalyticsProperty(experimentId);
  var tracker = "";

  if (isDefined(googleAnalytics)) {
    tracker = googleAnalytics['tracker'] || tracker;
  }

  return tracker;
};

/**
 * @return {boolean}
 */
data.getIPAnonymization = function() {
  return !!data.getProperty("ip_anonymization");
};

/**
 * @return {string}
 */
data.getLogUrlRoot = function() {
  return data.getUrlRoot('log_host', false, data.getProjectId()) + "/event";
};

/**
 * Returns a dictionary of revenue values to a dictionary of experiment ids to
 * boolean (true). It's used to send a pageview event for a revenue to all the
 * experiments it is enabled for. 
 * @return {Object.<string, Object.<string, boolean>>}
 */
data.getPageviewRevenueGoals = function() {
  return data.getProperty("pageview_revenue_goals");
};

/**
 * Returns the URL where the preview snippet is hosted
 * @return {string}
 */
data.getPreviewHost = function() {
  return data.getProperty("preview_host");
}

/**
 * @return {number}
 */
data.getProjectId = function() {
  return data.getProperty("project_id");
};

/**
 * @return {string}
 */
data.getProjectCode = function() {
  return data.getProperty("project_js");
};

/**
 * @return {number}
 */
data.getRevision = function() {
  return data.getProperty("revision");
};

/**
 * @return {Array.<string>}
 */
data.getSectionIds = function() {
  return keys(data.getProperty("sections") || {});
};

/**
 * @return {Object}
 */
data.getSegments = function() {
  return data.getProperty("segments") || {};
};

/**
 * @return {Array.<string>}
 */
data.getSegmentIds = function() {
  return keys(data.getSegments());
};


/**
 * @param {string} experimentId
 * @param {string} variationPartial
 * @return {string}
 */
data.getExperimentVariationSectionId = function(experimentId, variationPartial) {
  var sectionIds = data.getExperimentSectionIds(experimentId);
  for (var i = 0; i < sectionIds.length; i++) {
    var variationIds = data.getSectionVariationIds(sectionIds[i]);
    if (arrayContains(variationIds, variationPartial)) {
      return sectionIds[i];
    }
  }
  return "";
};

/**
 * @param {string} domain
 * @return {string}
 */
data.getPublicSuffix = function(domain) {
  var domainToPublicSuffix = {};
  var publicSuffixes = data.getProperty("public_suffixes") || {};

  each(publicSuffixes, function(publicSuffix, domains) {
    each(domains, function(domain) {
      domainToPublicSuffix[domain] = publicSuffix;
    });
  });

  data.getPublicSuffix = function(domain) {
    return domainToPublicSuffix[domain] || "";
  };

  return data.getPublicSuffix.call(null, domain);
};

/**
 * @param {string} sectionId
 * @return {string}
 */
data.getSectionName = function(sectionId) {
  return data.getSectionProperty(sectionId, "name") || ("Sec " + sectionId);
};

/**
 * @param {string} sectionId
 * @return {Array.<string>}
 */
data.getSectionVariationIds = function(sectionId) {
  return data.getSectionProperty(sectionId, "variation_ids") || [];
};

/**
 * @param {string} experimentId
 * @return {?number}
 */
data.getSiteCatalystEVar = function(experimentId) {
  return data.getExperimentProperty(experimentId, "site_catalyst_evar")
         || null;
};

/**
 * @param {string} experimentId
 * @return {?number}
 */
data.getSiteCatalystProp = function(experimentId) {
  return data.getExperimentProperty(experimentId, "site_catalyst_prop")
         || null;
};

/**
 * Account specific token used for verification purposes
 *
 * @return {string}
 */
data.getTokenHash = function() {
  return data.getProperty("token_hash") || "";
};

/**
 * @return {Object}
 */
data.getVariations = function() {
  return data.getProperty("variations") || {};
};

/**
 * @return {Array.<string>}
 */
data.getVariationIds = function() {
  return keys(data.getProperty("variations") || {});
};

/**
 * @param {string} variationId
 * @return {string}
 */
data.getVariationCode = function(variationId) {
  var codes = [];
  var variationIds = variationId.split(VARIATION_ID_DELIMITER);

  each(variationIds, function(variationId) {
    var code = data.getVariationProperty(variationId, "code");

    if (code) {
      codes.push(code);
    }
  });

  return codes.join("\n");
};

/**
 * @param {string} variationId
 * @return {string}
 */
data.getVariationExperimentId = function(variationId) {
  if (!data.cachedVariationExperimentIds) {
    var experimentIds = {};

    each(data.getExperimentIds(), function(experimentId) {
      each(data.getExperimentSectionIds(experimentId), function(sectionId) {
        each(data.getSectionVariationIds(sectionId), function(variationId) {
          experimentIds[variationId] = experimentId;
        });
      });

      each(data.getExperimentVariationIds(experimentId), function(variationId) {
        experimentIds[variationId] = experimentId;
      });
    });

    data.cachedVariationExperimentIds = experimentIds;
  }

  var variationIds = variationId.split(VARIATION_ID_DELIMITER);

  return data.cachedVariationExperimentIds[variationIds[0]] || "";
};

data.getVariationIdByIndex = function(experimentId, variationIndex) {
  var variationIds = data.getExperimentVariationIds(experimentId);
  var variationId = null;
  try {
    variationId = variationIds[variationIndex];
  } catch(e) {
  }

  return variationId;
};

/**
 * @param {string} variationId
 * @return {number|Array.<number>}
 */
data.getVariationIndex = function(variationId) {
  var experimentId = data.getVariationExperimentId(variationId);
  var sectionIds = data.getExperimentSectionIds(experimentId);
  if (sectionIds.length === 0) {
    // Singlevariate experiment
    var expVariationIds = data.getExperimentVariationIds(experimentId);
    for (var i = 0; i < expVariationIds.length; i++) {
      if (expVariationIds[i] === variationId) {
        return i;
      }
    }
  }
  else {
    // Multivariate experiment
    var variationIdSplit = variationId.split(VARIATION_ID_DELIMITER);
    var variationsBySection = [];
    for (var j = 0; j < sectionIds.length; j++) {
      var sectionId = sectionIds[j];
      var sectionVariationIds = data.getSectionVariationIds(sectionId);
      for (var k = 0; k < sectionVariationIds.length; k++) {
        var thisVariationId = sectionVariationIds[k];
        if (thisVariationId === variationIdSplit[j]) {
          variationsBySection.push(k);
        }
      }
    }
    if (variationsBySection !== []) {
      return variationsBySection;
    }
  }
  return -1;
};

/**
 * @param {string} variationId
 * @param {string=} separator
 * @return {string}
 */
data.getVariationName = function(variationId, separator) {
  separator = separator || ", ";
  var namesArray = data.getVariationNamesArray(variationId)
  return namesArray.join(separator);
};

/**
 * @param {string} variationId
 * @return {Array}
 */
data.getVariationNamesArray = function(variationId) {
  var names = [];
  var variationIds = variationId.split(VARIATION_ID_DELIMITER);

  each(variationIds, function(variationId) {
    names.push(data.getVariationProperty(variationId, "name") || ("Var " + variationId));
  });

  return names;
};

/**
 * @param {string} variationId
 * @return {string}
 */
data.getVariationSectionId = function(variationId) {
  var sectionIds = {};

  each(data.getSectionIds(), function(sectionId) {
    each(data.getSectionVariationIds(sectionId), function(variationId) {
      sectionIds[variationId] = sectionId;
    });
  });

  data.getVariationSectionId = function(variationId) {
    var variationIds = variationId.split(VARIATION_ID_DELIMITER);

    return sectionIds[variationIds[0]] || "";
  };

  return data.getVariationSectionId.call(null, variationId);
};

/**
 * @return {string}
 */
data.getVersion = function() {
  return data.getProperty("version");
};

/**
 * @return {string}
 */
data.getWebHost = function() {
  return data.getProperty("www_host");
};

/**
 * returns a bool indicating if client.js was generated on a
 * production host (aka optimizely.com, optimizely.de, etc)
 * @return {boolean}
 */
data.isProductionHost = function() {
  return  (/\.optimizely\.(?!test)[^.]+$/).test(data.getWebHost());
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isExperimentEnabled = function(experimentId) {
  return !!data.getExperimentProperty(experimentId, "enabled");
};

/**
 * @return {boolean}
 */
data.isChartbeatEnabled = function(experimentId) {
  return !!data.getChartbeatProperty(experimentId);
};

/**
 * @return {boolean}
 */
data.isClickTaleEnabled = function(experimentId) {
  return !!data.getClickTaleProperty(experimentId);
};

/**
 * @return {boolean}
 */
data.isCrazyEggEnabled = function(experimentId) {
  return !!data.getCrazyEggProperty(experimentId);
};

/**
 * @return {boolean}
 */
data.isForceVariationEnabled = function() {
  return !!data.getProperty("force_variation");
};

/**
 * @param {string} experimentOrSegmentId
 * @return {boolean}
 */
data.isGeotargetingEnabled = function(experimentOrSegmentId) {
  return !!data.getGeotargetingProperty(experimentOrSegmentId);
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isGoogleAnalyticsEnabled = function(experimentId) {
  return !!data.getGoogleAnalyticsProperty(experimentId);
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isUniversalAnalyticsEnabled = function(experimentId) {
  return !!data.getUniversalAnalyticsProperty(experimentId, 'slot');
};

/**
 * @return {boolean}
 */
data.isInstallationVerified = function() {
  return !!data.getProperty("installation_verified");
};

/**
 * @return {boolean}
 */
data.isKissMetricsEnabled = function() {
  return !!data.getProperty("kissmetrics");
};

/**
 * @return {boolean}
 */
data.isMixpanelEnabled = function(experimentId) {
  return !!data.getMixpanelProperty(experimentId);
};

/**
 * @return {boolean}
 */
data.isMoatEnabled = function(experimentId) {
  return !!data.getMoatProperty(experimentId);
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
data.isATInternetEnabled = function(experimentId) {
  return !!data.getATInternetProperty(experimentId, 'acct_no');
};

/**
 * @return {boolean}
 */
data.isRemotePublicSuffixEnabled = function() {
  return !!data.getProperty("remote_public_suffix");
};

/**
 * @return {boolean}
 */
data.isStagingLogEnabled = function() {
  return !!data.getProperty("use_staging_log");
};

/**
 * @private
 * @param {string} experimentId
 * @param {string} propertyName
 */
data.getExperimentProperty = function(experimentId, propertyName) {
  return data.getProperty("experiments", experimentId, propertyName);
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getChartbeatProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "chartbeat");
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getClickTaleProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "clicktale");
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getCrazyEggProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "crazyegg");
};

/**
 * @private
 * @param experimentOrSegmentId
 * @return {*}
 */
data.getGeotargetingProperty = function(experimentOrSegmentId) {
  var property = "uses_geotargeting";
  return data.getExperimentProperty(experimentOrSegmentId, property) ||
    data.getSegmentProperty(experimentOrSegmentId, property);
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getGoogleAnalyticsProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "google_analytics");
};

/**
 * @param {string} experimentId
 * @param {string} property
 */
data.getUniversalAnalyticsProperty = function(experimentId, property) {
  var universalAnalytics = data.getExperimentProperty(experimentId, "universal_analytics");
  if (isDefined(universalAnalytics)) {
    return universalAnalytics[property];
  }

  return null;
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getMixpanelProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "mixpanel");
};

/**
 * @private
 * @param {string} experimentId
 * @return {number}
 */
data.getMoatProperty = function(experimentId) {
  return data.getExperimentProperty(experimentId, "moat");
};

/**
 * @param {string} experimentId
 * @param {string} property
 */
data.getATInternetProperty = function(experimentId, property) {
  var atInternet = data.getExperimentProperty(experimentId, "at_internet");
  if (isDefined(atInternet)) {
    return atInternet[property];
  }

  return null;
};

/**
 * @private
 * @param {...string} variableArguments
 */
data.getProperty = function(variableArguments) {
  var object = DATA;

  var result = each(arguments, function(key) {
    var value = object[key];

    if (isDefined(value)) {
      object = value;
    }
    else {
      return null;
    }
  });

  if (result !== null) {
    return object;
  }
};

/**
 * @private
 * @param {string} sectionId
 * @param {string} propertyName
 */
data.getSectionProperty = function(sectionId, propertyName) {
  return data.getProperty("sections", sectionId, propertyName);
};

/**
 * @private
 * @param {string} segmentId
 * @param {string} propertyName
 */
data.getSegmentProperty = function(segmentId, propertyName) {
  return data.getProperty("segments", segmentId, propertyName);
};

/**
 * @private
 * @param {string} key
 * @param {boolean=} secure
 * @param {(number|string)=} subdomain
 * @return {string}
 */
data.getUrlRoot = function(key, secure, subdomain) {
  var host = data.getProperty(key);

  if (subdomain) {
    host = subdomain.toString() + "." + host;
  }

  var protocol = document.location.protocol;

  if (protocol === "chrome-extension:") {
    protocol = "http:";
  }

  if (secure) {
    protocol = "https:";
  }

  return protocol + "//" + host;
};

/**
 * @private
 * @param {string} variationId
 * @param {string} propertyName
 */
data.getVariationProperty = function(variationId, propertyName) {
  return data.getProperty("variations", variationId, propertyName);
};

/**
 * The proportion of requests that are sampled for rum (runtime user metrics).
 * 1 means every request will be recorded.
 * @return {number}
 */
 data.rumSamplingRate = function(){
  var samplingRate = data.getProperty("rum_sampling_rate");
  return isDefined(samplingRate) ? samplingRate : .001;
 };

/** @private */
data.clickGoalsWithSeparatedSelectors = null;
/** @private */
data.cachedEnabledExperimentIds = null;
/** @private */
data.cachedVariationExperimentIds = null;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/rum.js


/**
 * @define {boolean} True if rum gathering is enabled
 */
optly.client.rum.ENABLED = true;

/**
 * Class collects rum (real user metrics) from client.js and sends them
 * to servers.
 * @constructor
 */
optly.client.rum.RumCollector = function() {
  /** 
   * Events recorded throughout client's execution and the time when they occurred.
   * @private
   * @type {Object.<string, number>}
   */
  this.events = {};
  /**
   * A bool indicating if collected rum data should be sent.
   * @private
   * @type {boolean}
   */
  this.inRumSample = Math.random() < data.rumSamplingRate();

  if (geolocation['requested']) {
    // This timestamp will be negative because it precedes RUM initialization
    this.events['geoRequest'] = geolocation['requested'] - optly.client.rum.timebase;
  }
};

/**
 * Returns the time in milliseconds since client.js was initially executed.
 *
 * TODO(tyler): re-enable support for window.performance.now when browser support is more robust
 * Note(tyler): geoRequest timestamp currently depends on this using new Date() only
 * @returns {number}
 */
optly.client.rum.now = function() {
  return  (new Date()).getTime() - (optly.client.rum.timebase || 0);
};

/**
 * The time when client.js initially ran. Used in calculating optly.client.rum.now.
 * In older browers it will be the number of milliseconds elapsed since 1 January 1970.
 * In newer browsers it will be the milliseconds since the PerformanceTiming.navigationStart.
 * Note: timebase is set when client is loaded (rather than in the constructor of RumCollector)
 * so that it is a good estimate of when client initially ran.
 * @type {number}
 */
optly.client.rum.timebase = optly.client.rum.now();

/**
 * Sends rum data to optimizely's servers
 */
optly.client.rum.RumCollector.prototype.sendRum = optly.client.rum.ENABLED ? function() {
  // We want to sample clients' executions... this line does that
  if(!this.inRumSample) { return; }
  tracker.makeRequest(this.createUrl(), null);
} : goog.nullFunction;

/**
 * @returns {string}
 * @private
 */
optly.client.rum.RumCollector.prototype.createUrl = function() {
  return "https://rum.optimizely.com/rum?" + tracker.objectToQuery(this.getRum());
};

/**
 * Adds an event and its time to the rum data
 * @param {string} eventName
 */
optly.client.rum.RumCollector.prototype.recordEvent = optly.client.rum.ENABLED ? function(eventName) {
  if(!this.events[eventName]) { // If the event has already been recorded ignore it.
    this.events[eventName] = optly.client.rum.now();
  }
} : function(eventName){};

/**
 * Returns all collected rum data.
 * @private
 * @returns {Object}
 */
optly.client.rum.RumCollector.prototype.getRum = optly.client.rum.ENABLED ? function() {
  var behaviorEvents = behavior.getEvents();

  var rum = {
    'user': user.getId(),
    'ppid': user.getPPID(),
    'project': data.getProjectId(),
    'sync': optly.client.rum.syncInstall,
    'timebase': optly.client.rum.timebase,
    'render': optly.client.rum.firstRenderTime,
    'sampleRate': data.rumSamplingRate(),
    'numExps': evaluator.getActiveExperimentIds().length,
    'numBehaviorEvents': behaviorEvents.length,
    'behaviorEventsSize': json.stringify(behaviorEvents).length,
    'codeVersion': data.getVersion(),
    'wxhr':true
  };
  // Add resourceTiming
  extend(rum, optly.client.rum.getResourceTiming() || {});
  // Add events
  extend(rum, this.events);
  // Add cookies
  extend(rum, optly.client.rum.getCookieData() || {});
  return rum;
} : function() { return {}; };

/**
 * A boolean indicating if client.js was installed synchronously in the head (as per Optimizely's recommendation)
 *
 * If client.js was installed synchronously in the head tag the body tag will not
 * exist when client first loads. If the body tag exists then client.js was installed in the body section
 * or installed asynchronously.
 * @type {boolean|null}
 * @private
 */
optly.client.rum.syncInstall =  optly.client.rum.ENABLED ? (function() {
  try { 
    return !document.getElementsByTagName("body")[0];
  } 
  catch(err) { return null; }
})() : null;

/**
 * Time when the first frame was rendered after client loaded as returned by optly.client.rum.now().
 * NOTE: This might not be the time of the first frame rendered for the page because client.js could have been
 * loaded after the first frame was rendered. In the case of a sync install this will always be the first frame
 * render for the page. 
 * @type {number|null}
 * @private
 */
optly.client.rum.firstRenderTime = null;
optly.client.rum.ENABLED && (function() {
  try{
    window["requestAnimationFrame"](function() {
      optly.client.rum.firstRenderTime = optly.client.rum.now();
    });
  }
  catch(err) { }
})();

/**
 * Get data about specific optimizely cookies, all optimizely cookies, and all cookies size
 * @private
 */
optly.client.rum.getCookieData = optly.client.rum.ENABLED ? function() {
  // These cookies can grow potentially without bound, keep track of their sizes
  var detailCookieNames = [
    AUDIENCE_COOKIE_NAME,
    BUCKET_COOKIE_NAME,
    CUSTOM_EVENTS_COOKIE_NAME,
    PENDING_LOG_EVENTS_COOKIE_NAME,
    REFERRER_REDIRECT_COOKIE_NAME,
    SEGMENTS_COOKIE_NAME];

  var data = {};
  var allOptimizelyTotal = 0;
  var allCookieTotal = 0;

  each(cookie.getAll(), function(cookie) {
    if (cookie.name.indexOf('optimizely') === 0) {
        if (arrayContains(detailCookieNames, cookie.name)) {
        // include the name of the cookie in the value
        timer.addEvent('RUM', 'Cookie size for ' + cookie.name + ': ' + cookie.raw.length);
        data[cookie.name + 'Len'] = cookie.raw.length;
      }
      allOptimizelyTotal += cookie.raw.length;
    }
    allCookieTotal += cookie.raw.length;
  });

  extend(data, {
    'allOptimizelyCookiesLen': allOptimizelyTotal,
    'allCookiesLen': allCookieTotal
  });
  return data;
} : goog.nullFunction;

/**
 * The regex used to determine which resource to return timing info for. Should match urls like
 * "//cdn.optimizely.com/js/123.js" and "//www.optimizely.test/api/client/123.js"
 * @private
 * @type {RegExp}
 */
optly.client.rum.resourceRegex = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;

/**
 * Returns resource timing info. Will return null on unsupported browsers, or if loaded from unexpected 
 * urls (e.g. if customers load it from their servers). 
 * Resource timing reference: http://www.w3.org/TR/resource-timing/
 * @private
 * @returns ({{
 *  redirectStart: (number|undefined),
 *  redirectEnd: (number|undefined),
 *  fetchStart: (number|undefined),
 *  domainLookupStart: (number|undefined),
 *  domainLookupEnd: (number|undefined),
 *  connectStart: (number|undefined),
 *  connectEnd: (number|undefined),
 *  secureConnectionStart: (number|undefined),
 *  requestStart: (number|undefined),
 *  responseStart: (number|undefined),
 *  responseEnd: (number|undefined)
 * }}|null)
 */
optly.client.rum.getResourceTiming = optly.client.rum.ENABLED ? function() {
  try {
    // Try to get the resource timing
    var timing = filter(window["performance"]["getEntries"](), function(timing) {
      return !!(optly.client.rum.resourceRegex).test(timing["name"]);
    })[0];
    if(!timing) { return null; }
    timing = extend({}, timing); // Clone timing info so we can safely modify it.
    // 0 in resource timing means no value... strip em
    // All the keys with string values provide useless info.. strip em
    for(var key in timing) {
      var value = timing[key];
      if(value === 0 || typeof(value) === "string") {
        delete timing[key];
      }
    }
    return timing;
  } catch(err){ return null; }
} : goog.nullFunction;

/** 
 * Singleton through which client accesses the RumCollector
 * @type {optly.client.rum.RumCollector} 
 */
optly.client.rum.instance = new optly.client.rum.RumCollector();

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/preview_loader.js
/**
 * Load Preview frame
 *
 * @author Tyler Brandt (tyler@optimizely.com)
 */


/**
 * Attempt to bootstrap client_preview via a synchronous load. This may or may not show the
 * preview iframe depending whether directive.shouldLoadPreview is set
 *
 */
preview_loader.loadPreview = function() {

  // Don't attempt to load preview if it is already loaded -- overwriting the window[GLOBAL] here will
  // break it
  if (!window['optimizelyPreview']) {
    // To prevent XSS attacks involving directing optimizely to load the "wrong" preview script, add an "API call" that
    // verifies that the preview script's projectId matches our own.
    if (!window[GLOBAL] || !window[GLOBAL].unshift) {
      window[GLOBAL] = [];
    }
    window[GLOBAL].unshift(['verifyPreviewProject', data.getProjectId()]);

    loadScript(
      [preview_loader.HOST, preview_loader.PATH, directive.previewScriptName, ".js"].join(""),
      // Attempt a synchronous load. Will fall back to asynchronous if that isn't possible.
      true
    );

    // Show the loading screen if doing an asynch load to give the user some indication of whats going on
    if (directive.shouldLoadPreview) {
      preview_loader.loadSplashScreen('Loading Preview<br /><img alt="loading" src="//www.optimizely.com/static/img/loading-32.gif" style="padding-top:20px" />');
    }
  }
};

/**
 * Show a mask with a message specified in splashScreenContent parameter
 *
 * @param {string} splashScreenContent
 */
preview_loader.loadSplashScreen = function(splashScreenContent) {
  // If body doesn't yet exist, call self recursively.
  if ($('body').length === 0) {
    setTimeout(function(){
      preview_loader.loadSplashScreen(splashScreenContent);
    }, 20);
    return;
  }

  // Append the overlay to the body.
  var splashScreenHtml = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;">'
    + '<h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">';
  splashScreenHtml = splashScreenHtml + splashScreenContent + '</h2></div>';
  $('#optimizely-loading').remove();
  $('body').append(splashScreenHtml);
};

// Where to find the preview script
preview_loader.HOST = data.getPreviewHost();
preview_loader.PATH = '/js/preview/';

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/integrator.js


/**
 * The integrator provides logic for all third party integrations.
 *
 * TODO(jon): This file is getting a bit big; look into splitting it up by integration type.
 */

/**
 * @define {boolean} Controls the build status for the
 *                   Universal Analytics Integration function
 */
var ENABLED_UNIVERSAL_ANALYTICS = true;

/**
 * @define {boolean} Controls the build status for the
 *                   AT Internet Integration function
 */
var ENABLED_AT_INTERNET = true;

/**
 * @define {boolean} Controls the build status for the
 *                   Moat Integration function
 */
var ENABLED_MOAT = true;

/**
 *  Defines the maximum length of the experiment name for the Universal
 *  Analytics Integration (leaves at least 49 chars for the variation name)
 */
var UA_EXPERIMENT_MAX_CHARACTERS = 80;

/**
 * Defines the maximum length of the integration value for the
 * Universal Analytics Integration (150bytes)
 *
 */
var UA_DIMENSION_MAX_CHARACTERS = 150;

/**
 * Activates SiteCatalyst integration.
 *
 * @param {Object=} options
 */
integrator.activateSiteCatalyst = function(options) {
  options = options || {};
  if (!directive.shouldTrackEvents) {
    return;
  }

  if (options && options['sVariable']) {
    integrator.setSiteCatalystSVar(options['sVariable']);
  }

  var siteCatalyst = integrator.getSiteCatalystSVar();
  if (!siteCatalyst) {
    timer.addEvent("Integrator", "Error with SiteCatalyst integration: 's' variable not defined");
    return;
  }

  if (!integrator.hasIntegratedThirdParties) {
    // If this function is called too early, wait until after the third party
    // integration would be called normally.
    integrator.alsoActivateSiteCatalyst = true;
    return;
  }

  integrator.fixSiteCatalystReferrer(siteCatalyst);

  log("Integrator", "Tracking with SiteCatalyst");
  each(integrator.getRelevantVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);
    var keyValue = integrator.makeSendableNames(experimentId, variationId, 100,
                                           100, 25, true);
    var value = keyValue.key + ": " + keyValue.value;

    each(integrator.getSiteCatalystKeys(experimentId), function(key) {
      log("Integrator", "Setting SiteCatalyst %s='%s'", key, value);
      siteCatalyst[key] = value;
    });
  });
};

/**
 * @param {number} scope
 */
integrator.googleAnalyticsCustomVariableScope = function(scope) {
  scope = isNumberLike(scope) ? Number(scope) : -1;

  if ([1, 2, 3].indexOf(scope) !== -1) {
    integrator._googleAnalyticsCustomVariableScope = scope;
  }
  else {
    return integrator._googleAnalyticsCustomVariableScope;
  }
};

/**
 * Load segments from third-party sources.
 * @param {optly.Visitor} visitor
 */
integrator.loadThirdPartySegments = function(visitor) {
  timer.addEvent("Integrator", "Loading third-party segments.");
  if (window['bk_results']) {
    integrator.loadBlueKaiSegments(window['bk_results'], visitor);
  }
};

integrator.makeThirdPartyRequests = function() {
  if (!directive.shouldTrackEvents) {
    return;
  }

  // Need to call _setReferrerOverride before custom variables are set:
  // http://drupal.org/node/1489552
  integrator.fixGoogleAnalyticsReferrer();

  each(integrator.getRelevantVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);

    if (data.isChartbeatEnabled(experimentId)) {
      integrator.makeChartbeatRequest(experimentId, variationId);
    }

    if (data.isCrazyEggEnabled(experimentId)) {
      integrator.makeCrazyEggRequest(experimentId, variationId);
    }

    if (data.isGoogleAnalyticsEnabled(experimentId)) {
      integrator.makeGoogleAnalyticsRequest(experimentId, variationId);
    }

    if (data.isKissMetricsEnabled()) {
      integrator.makeKissMetricsRequest(experimentId, variationId);
    }

    if (data.isMixpanelEnabled(experimentId)) {
      integrator.makeMixpanelRequest(experimentId, variationId);
    }

    if (data.isMoatEnabled(experimentId)) {
      integrator.makeMoatRequest(experimentId, variationId);
    }

    if (data.isATInternetEnabled(experimentId)) {
      integrator.makeATInternetRequest(experimentId, variationId);
    }
  });

  integrator.makeChartbeatReferralRequest();
  integrator.hasIntegratedThirdParties = true;

  if (integrator.alsoActivateUniversalAnalytics) {
    // If the Universal Analytics integration API call was made before the snippet loaded (too early),
    // this flag was set to true by the API call (but the integration was not run)
    // We then need to run it now along with all the other integrations
    integrator.activateUniversalAnalytics();
    integrator.alsoActivateUniversalAnalytics = false;
  }
  if (integrator.alsoActivateSiteCatalyst) {
    // If the SiteCatalyst integration API call was made before the snippet loaded (too early),
    // this flag was set to true by the API call (but the integration was not run)
    // We then need to run it now along with all the other integrations
    integrator.activateSiteCatalyst();
    integrator.alsoActivateSiteCatalyst = false;
  }
};

/**
 * Playback ClickTale integration.
 */
integrator.playbackClickTale = function() {
  // http://wiki.clicktale.com/Article/Playback_Time_JavaScript_API
  // since we're calling the activate API, this function should be called
  // after optimizely is defined in client.js.jinja2
  if (window['ClickTaleContext']) {
    try {
      window['ClickTaleContext']['getAggregationContextAsync']("1", function(context) {
        if (context['Location']) {
          window['optimizely'].push(["overrideUrl", context['Location']]);
        }
        for (var key in context['PageEvents']) {
          // Assumming the events are captured as:
          // "Optimizely Experiment Name: Variation Name (x9999=11111)"
          var combinations = context['PageEvents'][key][2].match(/x[0-9]+=[0-9_]+/g)
          log("Integrator", "Playback ClickTale Integration - %s", combinations);
          for(var key = 0; key < combinations.length; key++) {
            log("Integrator", "Playback ClickTale Integration - %s", combinations[key]);
            var experiment = combinations[key].split("=")[0].substr(1);
            var variations = combinations[key].split("=")[1].split("_");
            for(var variationIndex = 0; variationIndex < variations.length; variationIndex++) {
              if (!integrator.getRedirectURL(variations[variationIndex])) {
                window['optimizely'].push(["activate", experiment, variations[variationIndex],
                                            {'force': true} ]);
              } else {
                log("Integrator", "Skip activation for redirect.");
              }
            }
          }
        }
      });
    } catch (e) {
      log("Integrator", "Playback ClickTale Aggregation Integration failed.");
    }
    try {
      window['ClickTaleContext']['getRecordingContextAsync']("1.1", function(context) {
        if (context['inSingleRecordingScope']) {
          if (context['location']) {
            window['optimizely'].push(["overrideUrl", context['location']]);
          }
          log("Integrator", "Playback ClickTale getRecordingContextAsync callback");
          for (var key in context['fields']) {
            log("Integrator", "Playback ClickTale Integration - %s=%s", key, context['fields'][key]);
            if (!integrator.getRedirectURL(context['fields'][key])) {
              window['optimizely'].push(["activate", key, context['fields'][key], {'force': true} ]);
            } else {
              log("Integrator", "Skip activation for redirect.");
            }
          }
        }
      });
    } catch(e) {
      log("Integrator", "Playback ClickTale Recording Integration failed.");
    }
  } else {
    log("Integrator", "ClickTaleContext not defined.");
  }
};

/**
 * Records ClickTale integration.
 *
 * @param {Object=} options
 */
integrator.recordClickTale = function(options) {
  log("Integrator", "Tracking with ClickTale.");
  if (typeof window['ClickTaleField'] == 'function') {
    each(integrator.getRelevantVariationIds(), function(variationId) {
      var experimentId = data.getVariationExperimentId(variationId);
      var keyValue = integrator.makeSendableNames(experimentId, variationId, 100,
        100, 15, false);
      var value = keyValue.key + ": " + keyValue.value +
        " (x" + experimentId + "=" + variationId + ")";

      log("Integrator", "Setting ClickTale - %s", value);
      window['ClickTaleField'](experimentId, variationId);
      window['ClickTaleEvent'](value);
    });
  } else {
    log("Integrator", "ClickTaleField() not defined.");
  }
};

integrator.setPrefix = function(prefix) {
  integrator.prefix = prefix;
};

integrator.setSiteCatalystSVar = function(siteCatalystObject) {
  integrator.siteCatalystObject = siteCatalystObject;
};

/**
 * @param {string} input
 * @param {number} maxLength
 * @private
 */
integrator.cleanSegmentString = function(input, maxLength) {
  return input.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, maxLength);
};

/**
 * For redirect experiments, we need to update the Google Analytics referrer
 * to reflect the referrer from the original page (otherwise the referrer will always
 * be the page the redirect experiment was targeted to for redirected visitors)
 * @private
 */
integrator.fixGoogleAnalyticsReferrer = function() {
  var referrer = redirect.getRedirectReferrer();
  if (referrer !== null) {
    try {
      log("Integrator", "Fixing _gaq._setReferrerOverride with %s", referrer);
      // Todo:(jamesfox) This logic does not consider if a custom tracker was used by the redirecting experiment - should it?
      _gaq.push(['_setReferrerOverride', referrer]);
    }
    catch (exception) {
      log("Integrator", "Error setting Google Analytics referrer: %s",
          exception);
    }
  }
};

/**
 * For redirect experiments, we need to update the Universal Analytics referrer
 * to reflect the referrer from the original page (otherwise the referrer will always
 * be the page the redirect experiment was targeted to for redirected visitors)
 *
 * See Google Documentation for the method used here:
 *    https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#trafficsources
 *
 * @private
 */
integrator.fixUniversalAnalyticsReferrer = ENABLED_UNIVERSAL_ANALYTICS ? function() {
  var referrer = redirect.getRedirectReferrer();
  if (referrer !== null) {
    try {
      log("Integrator", "Fixing Universal Analytics set referrer with %s", referrer);

      var UAObjectName = window['GoogleAnalyticsObject'] || 'ga';
      var universalAnalytics = window[UAObjectName];

      // Todo:(jamesfox) This logic does not consider if a custom tracker was used by the redirecting experiment - should it?
      universalAnalytics('set', 'referrer', referrer);
    }
    catch (exception) {
      log("Integrator", "Error setting Universal Analytics referrer: %s",
          exception);
    }
  }
} : goog.nullFunction;

/**
 * @private
 */
integrator.fixSiteCatalystReferrer = function(siteCatalyst) {
  var referrer = redirect.getRedirectReferrer();
  if (referrer !== null && siteCatalyst) {
    try {
      log("Integrator", "Fixing SiteCatalyst referrer to %s", referrer);
      siteCatalyst.referrer = String(referrer);
    }
    catch (exception) {
      log("Integrator", "Error setting SiteCatalyst referrer: %s",
          exception);
    }
  }
};

/**
 * @private
 * @return {Array.<string>}
 */
integrator.getRelevantVariationIds = function() {
  var activeExperimentIds = evaluator.getActiveExperimentIds();
  var variationIds = [];

  each(plan.getVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);
    var relevant = false;

    if (data.isExperimentEnabled(experimentId)) {
      var variationName = data.getVariationName(variationId);

      if (arrayContains(activeExperimentIds, experimentId)) {
        log("Integrator", "\"%s\" relevant because experiment active",
            variationName);
        relevant = true;
      }
      if (relevant) {
        variationIds.push(variationId);
      }
    }
  });

  // Grab the variation id from the cookie if present
  var redirectVariationId = redirect.getRedirectVariationId();
  if (redirectVariationId) {
    variationIds.push(redirectVariationId);
  }

  return variationIds;
};

/**
 * @param {string} experimentId
 * @private
 * @return {Array.<string>}
 */
integrator.getSiteCatalystKeys = function(experimentId) {
  var keys = [];
  var eVar = data.getSiteCatalystEVar(experimentId);
  var prop = data.getSiteCatalystProp(experimentId);

  if (eVar !== null) {
    keys.push("eVar" + eVar);
  }

  if (prop !== null) {
    keys.push("prop" + prop);
  }

  return keys;
};

/**
 * @private
 */
integrator.getSiteCatalystSVar = function() {
  return integrator.siteCatalystObject ||
         (typeof window['s'] !== "undefined" ? window['s'] : null);
};

/**
 * @private
 * @param {string} variationId
 * @return {string|null}
 */
integrator.getRedirectURL = function(variationId) {
  var redirectURLMatch = redirect.getRedirectURL(data.getVariationCode(variationId));
  if (redirectURLMatch) {
    return redirectURLMatch[1];
  }
  return null;
};

/**
 * Loads segments from BlueKai.
 * @param {{campaigns: Array.<{seg_id: string}>}} bkData
 * @param {optly.Visitor} visitor
 * @private
 */
integrator.loadBlueKaiSegments = function(bkData, visitor) {
  timer.addEvent("Integrator", "Loading BlueKai segments.");
  try {
    each(bkData['campaigns'], function(campaign){
      var id = campaign['seg_id'];
      // BlueKai can return a Segment ID or Audience ID in seg_id, so we check both
      if (data.getSegment(id)) {
        segmenter.addToSegment(id, true);
      } else if (data.getAudience(id)) {
        visitor.addToAudience(id);
      }
    });
  } catch (e) {
    timer.addEvent("Integrator", "Error loading BlueKai segments.");
  }
}

/**
 * @private
 */
integrator.makeChartbeatReferralRequest = function() {
  var customValue = cookie.get(REFERRAL_CHARTBEAT_COOKIE_NAME) || "";
  try {
    /* _cbq is defined in client.js.jinja2
     * Cannot use window['_cbq'] to set a variable that will later be set by
     * var _cbq because some versions of IE lose reference of the variable.
     */
    if (customValue && integrator.currentChartbeatExperiment != customValue) {
      log("Integrator", "Calling _cbq.push for referral");
      _cbq.push(["_optlyr", customValue]);
    }
    if (integrator.currentChartbeatExperiment != customValue) {
      log("Integrator", "Set new Chartbeat referral cookie.");
      cookie.set(REFERRAL_CHARTBEAT_COOKIE_NAME, integrator.currentChartbeatExperiment);
    }
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending Chartbeat referral for " + customValue);
  }
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeChartbeatRequest = function(experimentId, variationId) {
  // Disable the prefix for now since string length is limited.
  var curPrefix = integrator.prefix;
  integrator.setPrefix("");
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 10, 10, 5, false);
  integrator.setPrefix(curPrefix);

  /* Use indexes to keep the names as small as possible. This is something that
   * chartbeat needs to add greater support for.
   */
  var variationIndex = data.getVariationIndex(variationId);
  integrator.currentChartbeatExperiment = keyValue.key + ': ' + String(variationIndex);

  try {
    /* _cbq is defined in client.js.jinja2
     * Cannot use window['_cbq'] to set a variable that will later be set by
     * var _cbq because some versions of IE lose reference of the variable.
     */
    log("Integrator", "Calling _cbq.push");
    _cbq.push(["_optlyx", integrator.currentChartbeatExperiment]);
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending Chartbeat data for " + data.getExperimentString(experimentId));
  }
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeCrazyEggRequest = function(experimentId, variationId) {
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 100, 100, 15, false);
  try {
    /*
     * Note that this will overwrite values if multiple tests are running.
     * So all heatmaps will be attributed to the last experiment.
     */
    log("Integrator", "Defining CE_SNAPSHOT_NAME");
    window['CE_SNAPSHOT_NAME'] = keyValue.key + ': ' + keyValue.value;
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending CrazyEgg data for " + data.getExperimentString(experimentId));
  }
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeGoogleAnalyticsRequest = function(experimentId, variationId) {
  var slot = data.getGoogleAnalyticsSlot(experimentId);
  var tracker = data.getGoogleAnalyticsTracker(experimentId);
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 28, 24, 5, true);

  try {
    /* _gaq is defined in client.template
     * Cannot use window['_gaq'] to set a variable that will later be set by
     * var _gaq because some versions of IE lose reference of the variable.
     */
    var prefix = "";
    if (tracker !== "") {
      prefix = tracker + ".";
    }

    log("Integrator",
        "Calling _gaq._setCustomVar for slot %d and scope %d",
        slot,
        integrator._googleAnalyticsCustomVariableScope);
    _gaq.push([prefix + "_setCustomVar", slot, keyValue.key, keyValue.value,
               integrator._googleAnalyticsCustomVariableScope]);
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending Google Analytics data for " + data.getExperimentString(experimentId));
  }
};

/**
 * Activates Universal Analytics integration.
 *
 */
integrator.activateUniversalAnalytics = ENABLED_UNIVERSAL_ANALYTICS ? function() {
  if (!directive.shouldTrackEvents) {
    return;
  }

  if (!integrator.hasIntegratedThirdParties) {
    // If this function is called too early, wait until after the third party
    // integration would be called normally.
    integrator.alsoActivateUniversalAnalytics = true;
    return;
  }

  var UAObjectName = window['GoogleAnalyticsObject'] || 'ga';
  var universalAnalytics = window[UAObjectName];
  if (!universalAnalytics) {
    timer.addEvent("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined");
    return;
  }

  /* Universal Analytics must be made with an API call
   *
   * Because there is no key/value pair (like GA), we send the
   * experiment ID along as well to make reporting per experiment easier
   *
   * There is a 150byte limit to the character string for the UA value
   * This is more than the 128 character limit to the GA key-value pair
   */

  integrator.fixUniversalAnalyticsReferrer();

  log('Integrator', 'Tracking with Universal Analytics');
  each(integrator.getRelevantVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);

    if(data.isUniversalAnalyticsEnabled(experimentId)) {
      var slot = data.getUniversalAnalyticsProperty(experimentId, 'slot');
      var tracker = data.getUniversalAnalyticsProperty(experimentId, 'tracker');
      var keyValue = integrator.makeSendableNames(experimentId, variationId, 100,
                                                  100, 25, true);

      var value = keyValue.key + ' (' + experimentId + '): ' + keyValue.value;
      if(value.length > UA_DIMENSION_MAX_CHARACTERS){
        // Truncate expName to a max of 80 characters, leaving up to 49 characters for the variation name
        // 80 (exp name) + 2 + 16 (exp id) + 3 + 49 (var name) = 150
        var expName = keyValue.key.substring(0,UA_EXPERIMENT_MAX_CHARACTERS);
        value = expName + ' (' + experimentId + '): ' + keyValue.value;
        value = value.substring(0,UA_DIMENSION_MAX_CHARACTERS - 1);
      }

      var prefix = tracker ? tracker + '.' : '';

      log('Integrator',
          'Calling ua set dimension - ga(%sset, dimension%d, %s)',
          prefix, slot, value);
      universalAnalytics(prefix+'set', 'dimension'+slot, value);
    }
  });
} : goog.nullFunction;

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeKissMetricsRequest = function(experimentId, variationId) {
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 100, 100, 15, true);

  var kissMetricsKeyValue = {};
  kissMetricsKeyValue[keyValue.key] = keyValue.value;
  try {
    /* _kmq is defined in client.template
     * Cannot use window['_kmq'] to set a variable that will later be set by
     * var _kmq because some versions of IE lose reference of the variable.
     */
    log("Integrator", "Calling _kmq.set");
    _kmq.push(['set', kissMetricsKeyValue]);
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending KISSmetrics data for " + data.getExperimentString(experimentId));
  }
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeMixpanelRequest = function(experimentId, variationId) {
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 100, 100, 15, false);

  var mixpanelKeyValue = {};
  mixpanelKeyValue[keyValue.key] = keyValue.value;
  try {
    /* mixpanel is defined in client.template
     * Cannot use window['mixpanel'] to set a variable that will later be set by
     * var mixpanel because some versions of IE lose reference of the variable.
     */
    log("Integrator", "Calling mixpanel.push");
    mixpanel.push(["register", mixpanelKeyValue]);
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending Mixpanel data for " + data.getExperimentString(experimentId));
  }
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeMoatRequest = ENABLED_MOAT ? function(experimentId, variationId) {
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 100, 100, 15, false);

  var value = keyValue.key + ': ' + keyValue.value;
  try {
    /* optimizelyMoat is defined in client.template
     * Cannot use window['optimizelyMoat'] to set a variable that will later be set by
     * var optimizelyMoat because IE 7/8 lose reference of the variable.
     * For more info, see:
     *   http://stackoverflow.com/questions/4606847/why-does-ie-nuke-window-abc-variables
     */
    log("Integrator", "Calling optimizelyMoat.push");
    optimizelyMoat.push(value);
  }
  catch(error) {
    timer.addEvent("Integrator", "Error sending Moat data for " + data.getExperimentString(experimentId));
  }
} : goog.nullFunction;

/**
 * Integration with AT Internet's analytics platform requires sending a wxhr/pixel network call to their
 * servers based on the acct no and log server URL specified in the Optimziely UI
 *
 * This information allows us to build a log call http request string in the following form:
 *   -[LOG_SERVER_URL]/hit.xiti?s=[ACCOUNT_ID]&abmvc=[[EXPERIMENT_ID]]-0-[VARIATION_INDEX][[VARIATION_NAME]]&type=mvt
 *
 * Example URL string for an AT Internet Log Call w/Optimizely integration:
 *   https://logws1334.ati-host.net/hit.xiti?s=530162&abmvc=220370499[HomePage]-0-2[Pink%20Text]&type=mvt
 *
 * This function utilizes tracker.makeRequest to send a wxhr/pixel request as appropriate
 *
 * @param {string} experimentId
 * @param {string} variationId
 * @private
 */
integrator.makeATInternetRequest = ENABLED_AT_INTERNET ? function(experimentId, variationId) {
  var acctNo = data.getATInternetProperty(experimentId, 'acct_no');
  var logServer = data.getATInternetProperty(experimentId, 'url');
  var keyValue = integrator.makeSendableNames(experimentId, variationId, 28, 24, 5, true);

  var abmvcValue = experimentId + '[' + encodeURIComponent(keyValue.key) + ']-0-' + variationId + '[' + encodeURIComponent(keyValue.value) + ']';

  var atInternetURL = logServer + "/hit.xiti?s=" + acctNo + "&abmvc=" + abmvcValue + "&type=mvt";

  try {
    log('Integrator',
        'Sending AT Internet log call for account %s',
        acctNo);
    tracker.makeRequest(atInternetURL, null);
  }
  catch(error) {
    timer.addEvent('Integrator', 'Error sending AT Internet data for ' + data.getExperimentString(experimentId));
  }
} : goog.nullFunction;

/**
 * Returns the name of the experiment and the name of the variation, both
 * with cleaned up characters and reduced length.  This processing is needed
 * before sending the data to external analytics services.
 *
 * Since Google Analytics, KissMetrics, and other services have different
 * max lengths, the experiment name length, variation name length, and
 * multivariate variation name length are all passed as additional parameters.
 *
 * @param {string} experimentId
 * @param {string} variationId
 * @param {number} expLength
 * @param {number} varLength
 * @param {number} mvtVarLength
 * @param {boolean} makeClean
 * @private
 */
integrator.makeSendableNames = function(experimentId, variationId,
                                   expLength, varLength, mvtVarLength,
                                   makeClean) {
  var expName = integrator.prefix + data.getExperimentName(experimentId);

  var varNamesArray = data.getVariationNamesArray(variationId);
  var varName;
  if (varNamesArray.length > 1) {
    // Multivariate experiment
    varNamesArray = $.map(varNamesArray, (function(str) {
                      return str.substr(0, mvtVarLength-1); }));
    varName = varNamesArray.join("~");
  }
  else {
    varName = varNamesArray[0];
  }

  if (makeClean) {
    expName = integrator.cleanSegmentString(expName, expLength);
    varName = integrator.cleanSegmentString(varName.replace("#", ""), varLength);
  }
  else {
    expName = expName.substring(0, expLength);
    varName = varName.substring(0, varLength);
  }

  return {
    'key': expName,
    'value': varName
  };
};

/**
 * Fetches all third-party data stored in local storage.
 *
 * @return {Object} object containing all third-party data keyed on third-party provider ID
 */
integrator.getAllThirdPartyData = function() {
  return optly.client.storage.localStorage.get(integrator.THIRD_PARTY_KEY) || {};
};

/**
 * Stores data retrieved from a third party in local storage.
 *
 * @param {string} thirdPartyId unique ID for the third party this data is coming from
 * @param {Object} thirdPartyData object containing the data retrieved from the third party
 * @return {undefined}
 */
integrator.storeThirdPartyData = function(thirdPartyId, thirdPartyData) {
  try {
    var thirdParty = integrator.getAllThirdPartyData();
    thirdParty[thirdPartyId] = thirdPartyData;
    optly.client.storage.localStorage.set(integrator.THIRD_PARTY_KEY, thirdParty);
  }
  catch(err){}
};

/**
 * Fetches data previously retrieved from a third party and stored in local storage.
 *
 * @private
 * @param {string} thirdPartyId unique ID for the third party this data is coming from
 * @return {Object|null|boolean|undefined} containing all data as previously retrieved from the third party
 */
integrator.getAllThirdPartyDataForProvider = function(thirdPartyId) {
  return integrator.getAllThirdPartyData()[thirdPartyId];
};

/**
 * Fetches data as per the condition name which is a combination of thirdPartyId and thirdPartyField
 *
 * @param {string} thirdPartyId unique ID for the third party this data is coming from
 * @param {Array} thirdPartyKeyPath path to the field whose value needs to be compared against
 * @return {Object|null|boolean|undefined} data corresponding to the thirdPartyId and conditionName
 */
integrator.getThirdPartyData = function(thirdPartyId, thirdPartyKeyPath) {
  var dataFromProvider = integrator.getAllThirdPartyDataForProvider(thirdPartyId);

  for (var i = 0, len = thirdPartyKeyPath.length; i < len; i++) {
    if (goog.isObject(dataFromProvider) && dataFromProvider.hasOwnProperty(thirdPartyKeyPath[i])) {
      dataFromProvider = dataFromProvider[thirdPartyKeyPath[i]];
    } else {
      return undefined;
    }
  }
  return dataFromProvider;
};

/**
 * Flag to indicate if the Universal Analytics integration function should be called
 * in makeThirdPartyRequests when all the other analytics integrations which don't
 * require an API call are made
 *
 * This covers the case when the Universal Analytics API call is made before
 * the Optimizely snippet loads
 * @private
 */
integrator.alsoActivateUniversalAnalytics = false;

/**
 * Flag to indicate if the SiteCatalyst integration function should be called
 * in makeThirdPartyRequests when all the other analytics integrations which don't
 * require an API call are made
 *
 * This covers the case when the SiteCatalyst API call is made before
 * the Optimizely snippet loads
 * @private
 */
integrator.alsoActivateSiteCatalyst = false;

/**
 * @private
 */
integrator.currentChartbeatExperiment = "";

/**
 * Default is session-level: 2.
 *
 * @private
 */
integrator._googleAnalyticsCustomVariableScope = 2;

/**
 * @private
 */
integrator.hasIntegratedThirdParties = false;

/**
 * @private
 */
integrator.prefix = "Optimizely ";

/**
 * @private
 */
integrator.siteCatalystObject = null;

/**
 * Key for the root third party data object stored in local storage.
 *
 * @private
 */
integrator.THIRD_PARTY_KEY = 'thirdParty';

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/api.js

// To retrieve third-party data in api.updateDataObject
// To check if preview is enabled
// Used by geo API to get/set data

/**
 * @define {boolean}
 * Whether we should include API used to hotfix ENG-1636
 */
api.includeRemoveFromAllReportable = true;

/**
 * Activate one or more experiments, with control over bucketing.
 *
 *  @param {?number|string} activateExperimentId ID of Experiment to activate, or all Manual-mode experiments if null
 *  @param {(number|string|boolean|Object)=} variationIdOrForcedActivation variationId, force bool, or options described below
 *  @param {(Object|boolean)=} options { force: Force experiment to be activated (ignore targeting/status),
 *                                       skip: Do not assign user to a bucket
 *                                       skipPageview: Prevent pageview tracking from getting sent
 *                                       enabledStatus: If specified the experiment's status (aka running, paused, etc) will be ignored
 *                                          and the specified bool will be used instead
 *                                      }
 */
api.activate = function(activateExperimentId, variationIdOrForcedActivation, options) {
  // This function has a lot of different "modes", based on which parameter(s) are passed.
  //
  // Here are the possible parameters:
  // * `'activate' or ['activate']` Activate all manual-mode experiments (runs variation code for selected bucket)
  // * `['activate', experimentId]` Activate experiment if targeting matches, works for both manual and automatic expts
  // * `['activate', experimentId, variationId]` Activate `experimentId` and bucket to `variationId` (or index).
  // * `['activate', experimentId, {force: true}]` Force-activates `experimentId` (works for both manual and automatic,
  //    regardless of targeting)
  // * `['activate', experimentId, true]` Force activates experiment (legacy mode).
  // * `['activate', experimentId, variationId, {options}]` Activate with `options`.

  // If client is disabled, do nothing.
  if (!directive.isEnabled) {
    return false;
  }

  // If second param is a number or string, consider it as the desired variation ID for bucketing.
  var preferredVariationId = (typeof variationIdOrForcedActivation === "number" ||
                              typeof variationIdOrForcedActivation === "string") ?
                             String(variationIdOrForcedActivation) : null;

  // If second param is a boolean or options.force is true, enabled forced activation mode.
  var forcedActivation = ((variationIdOrForcedActivation === true) ||
                          (variationIdOrForcedActivation &&
                           variationIdOrForcedActivation['force'] === true) ||
                          (options && options['force'] === true));

  options = (typeof(variationIdOrForcedActivation)==="object" ? variationIdOrForcedActivation : options) || {};

  // Some other options. Make sure to check for explicit `true`.
  var skipBucketing = options['skip']===true;
  var skipPageviewTracking = options['skipPageview']===true;
  // Override the "real" status of the experiment (intended for preview mode only).
  var enabledStatus = options['enabledStatus'];

  if (preferredVariationId) {
    try {
      // Don't send a tracking call during bucketUser since we're already
      // sending one as part of this API.
      var doNotSendPageViewTracking = true;
      // Note that bucketUser can interpret `activateExperimentId` as a variation index if it's a small int.
      api.bucketUser(/** @type {number|string} */(activateExperimentId),
                                                 preferredVariationId,
                                                 doNotSendPageViewTracking);
    }
    catch(err) {
      timer.addEvent("API", "Error while activating experiment " +
                     activateExperimentId + " for variation " + preferredVariationId +
                     " -- proceeding without bucketing user.");
    }
  }

  // Determine experiments/variations to activate.
  var pickedVariation = null;
  var experimentsToActivate = [];
  var experimentsToEvaluate = [];

  if (isNumberLike(activateExperimentId)) {
    // If there is an experimentId parameter, add it to experiments to activate.
    experimentsToActivate.push(activateExperimentId);
  }
  else {
    // Otherwise, activate ALL manual experiments
    each(data.getExperimentIds(), function(experimentId) {
      // Check if it is a manual experiment...
      if (data.isExperimentManuallyActivated(experimentId)) {
        // ...and activate it
        experimentsToActivate.push(experimentId);
      }
    });
  }

  // Test experiments to activate.
  timer.addEvent("API", "Testing experiments to activate");
  each(experimentsToActivate, function(experimentId) {
    // If not ready to test condition, throw onto `addGeoDelayedExperiment` queue.
    if (!forcedActivation && !condition.isReadyToTest(experimentId)) {
      api.addGeoDelayedExperiment(experimentId);
    }
    // Else if condition passes, distribute the experiment.
    else if (forcedActivation ||
        condition.passesTests(experimentId, {"manualMode": true, "objectType": "experiment", "enabledStatus": enabledStatus, "visitor": api.visitor})) {
      pickedVariation = distributor.distributeExperiment(experimentId, skipBucketing);
      if (pickedVariation) {
        experimentsToEvaluate.push(experimentId);
      }
    }
  });

  // Evaluate/activate queued experiments
  evaluator.evaluate(experimentsToEvaluate, experimentsToActivate);
  // Save buckets
  plan.writeCookie();
  // Update integrations
  integrator.makeThirdPartyRequests();

  if (directive.isEnabled && !skipPageviewTracking) {
    // Track a pageview event (since experiments are updated)
    tracker.addLogEvent(document.location.href, "pageview");
  }

  // Both of these conditions need to be true:
  //
  // * `optly.client.preview.ENABLED`: Ensure that this code is not compiled into standard client
  // * `directive.shouldLoadPreview`: Ensure that preview mode is enabled
  if (optly.client.preview.ENABLED && directive.shouldLoadPreview) {
    timer.addEvent('API', ' Activate - Updating preview data object asynchronously.');
    window["optimizelyPreview"] = window["optimizelyPreview"] || {};
    each(experimentsToActivate, function(experimentId) {
      window['optimizelyPreview']['updatePreviewData'](experimentId);
    });
  }
};

/**
 * Response from async info sources (geo.js, ODDS)
 *
 * @typedef {{
 *   location:{
 *     city:{string},
 *     continent:{string},
 *     country:{string},
 *     region:{string}
 *   },
 *   ip:{string},
 *   lists: Object.<string,Object>
 * }} asyncInfo
 */
api.AsyncInfo;

/**
 * Activate delayed experiments, as a result of timeout or async info arriving.
 *
 * @param {api.AsyncInfo=} asyncInfo
 */
api.activateGeoDelayedExperiments = function(asyncInfo) {
  // This function activates geo delayed experiments.

  // There are two ways this function can/should be called:
  // 1. By geo2.js in which case an api.AsyncInfo object is passed
  // 1. By main.js because geo has timed out in which case undefined is passed
  //
  // This function will only activate async experiments on its first invocation.
  // Subsequent invocations might update the cache but will not activate experiments.
  //
  // Loading geo can end in one of three mutually exclusive end conditions:
  // 1. "geoSuccess": geo2.js was downloaded in time and its data was used
  // 1. "geoCached": geo2.js did not download in time and cached data was used
  // 1. "geoFailed": geo2.js did not download and time and there was no cached data to use
  //
  // [Sequence diagram of how delayed targeting info/geo loads](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=UGFnZSAtPiBDbGllbnQ6IHJ1biBjAAcFCgANBiAtLT4gRWRnZTogcmVxdWVzdCBhc3luYyBkYXRhABsJADMObm9ybWFsbHkAFAtQYWdlOiB5aWVsZAoKYWx0IGJlZm9yZSB0aW1lb3V0CiAgIABhBQCAfw1lc3BvbmQAZAwgICAAgSQHLT4AgSsIImV2YWwgY29uZGl0aW9ucyxcbgCBQgVleHBlcmltZW50cyxcbnBlcnNpc3QATgdzZSIAbgVQYWdlAEAKAIEGByAoaWdub3JlKQplbHNlIGFmdGVyABMJZmlyc3QgbG9hZAAnGgCBHDIAgncMAIEaEAByFHN1YnNlcXVlbgBmJQCBfDZ1c2luZwCBBghlZACDbAUAgjAGRWQAgioMAIEeO25k&s=default)

  // If disabled, do nothing.
  if (!directive.isEnabled) {
    return false;
  }

  // Define a helper function to activate delayed experiments and segments based on the current value of api.asyncInfo
  //
  // TODO(tyler): this function is VERY similar to `api.activate` code, above, maybe refactor?
  function activateDelayed(){
    // Activate delayed segments.
    timer.addEvent("API", "Testing geodelayed segments");
    each(api.geoDelayedSegments, function(segmentId) {
      segmenter.evaluateSegment(segmentId);
    });
    // Activate delayed experiments. This code should match what happens in `api.activate`, except for `enabledStatus`.
    var experimentsToEvaluate = [];
    timer.addEvent("API", "Testing geodelayed experiments");
    each(api.geoDelayedExperiments, function(experimentId) {
      if (condition.passesTests(experimentId, {"manualMode": true, "objectType": "experiment", "visitor": api.visitor})) {
        var pickedVariation = distributor.distributeExperiment(experimentId);
        if (pickedVariation) {
          experimentsToEvaluate.push(experimentId);
        }
      }
    });
    // Evaluate queued experiments
    evaluator.evaluate(experimentsToEvaluate, api.geoDelayedExperiments);
    // Save bucket map
    plan.writeCookie();
    // Update integrations
    integrator.makeThirdPartyRequests();
    // Ensure there exists a page view event with any newly activated experiments
    if (!directive.shouldSkipPageTracking) {
      tracker.addLogEvent(document.location.href, "pageview", {skipBehaviorTracking: true});
    }
  }
  // Caches `asyncInfo` in `localStorage` with "asyncInfo" key.
  var cacheAsyncInfo = goog.bind(optly.client.storage.localStorage.set, optly.client.storage.localStorage, "asyncInfo");

  // If `asyncInfo` exists, then this function was called as a result of async (geo) data arriving.
  var calledByGeo = !!asyncInfo;
  if (calledByGeo) {
    // Record it arrived and cache the data.
    optly.client.rum.instance.recordEvent("geoArrive");
    cacheAsyncInfo(asyncInfo);
  }

  // Avoid activating delayed experiments multiple times (for instance, if geo.js calls and then timeout calls).
  if(!api.delayedExperimentsActivated) {
    api.delayedExperimentsActivated = true;

    // Set `api.asyncInfo` from argument data or current value.
    api.asyncInfo = asyncInfo || api.asyncInfo;

    if (api.asyncInfo) {
      // If we have the async data activate delayed experiments.
      activateDelayed();
      // Update `optimizely.data` to ensure it reflects geo changes
      api.setPublicObjects();
      // Record "geoSuccess" if called by geo.js or "geoCache" if called by timeout.
      optly.client.rum.instance.recordEvent(calledByGeo ? "geoSuccess" : "geoCache");
    } else if (geolocation['requested']) {
      // Otherwise record geo failed.
      optly.client.rum.instance.recordEvent("geoFailed");
    }
  }
  // TODO(tyler): return value apparently not used.
  return true;
};

/**
 * Check if the visitor has disabled Optimizely via query parameter or API.
 *
 */
api.checkForDisable = function() {
  var initialApiCalls = window['optimizely'];

  if (directive.isEnabled && isArrayLike(initialApiCalls)) {
    // Ignore anything which is not "disable"
    var functions = {
      'disable': api.disable
    };

    each(initialApiCalls, function(apiCall) {
      api.push(functions, apiCall, true);
    });
  }
};

/**
 * Store data fetched asynchronously from third parties in local storage.
 *
 * @param {string} thirdPartyId unique ID for the third party this data is coming from
 * @param {Object} thirdPartyData object containing the data retrieved from the third party
 */
api.storeThirdPartyData = function(thirdPartyId, thirdPartyData) {
  integrator.storeThirdPartyData(thirdPartyId, thirdPartyData);
};

/**
 * This function returns delayed info taking into consideration timeouts
 * and the async response.
 * @return {api.AsyncInfo|null}
 */
api.getAsyncInfo = function(){
  return api.asyncInfo || null;
};

/**
 * This function loads cached async info from local storage
 */
api.loadCachedAsyncInfo = function(){
  api.asyncInfo = /** @type {api.AsyncInfo|null} */(optly.client.storage.localStorage.get("asyncInfo") || null);
};

/**
 * This function returns the lists for the given user, or null if no asyncInfo exists.
 * @return {Object.<string,Object>|null}
 */
api.getLists = function(){
  return (api.getAsyncInfo() && api.getAsyncInfo()["lists"]) || null;
};

// Helper methods for adding to geo (async) delayed queues.
// TODO(tyler): these functions should be renamed to async
// TODO(tyler): refactor "experiment" to audience.
api.addGeoDelayedExperiment = function(experimentId) {
  api.geoDelayedExperiments.push(experimentId);
};

api.addGeoDelayedSegment = function(segmentId) {
  api.geoDelayedSegments.push(segmentId);
};

/**
 * Add visitor to segment with segmentValue, if specified, or `true` if not.
 *
 * @param segmentIdOrAPIName
 * @param segmentValue
 */
api.addToSegment = function(segmentIdOrAPIName, segmentValue) {
  var segmentId = data.getSegmentIdByIdentifier(segmentIdOrAPIName) || segmentIdOrAPIName;
  var segment = data.getSegment(segmentId);
  if (!segment) {
    timer.addEvent('API', 'Unable to find segment: ' + segmentId);
  }
  // This function has some branching behavior because a segment can be either:
  // 1. A segmentation audience "tracking" segment, in which case we add to the audience
  // 1. A `CustomDimension` "tracking" segment, in which case we add to the dimension
  // 1. A plain segment, in which case we add to the segment directly.
  else if (segment['audience_id']) {
    api.visitor.addToAudience(segment['audience_id']);
  } else if (segment['dimension_id']) {
    // Don't standardize in legacy API so values aren't truncated
    var standardize = false;
    api.visitor.setDimensionValue(segment['dimension_id'], segmentValue || true, standardize);
  } else {
    segmenter.addToSegment(segmentId, segmentValue);
  }
};

// Usage:
// * Bucket visitor into experiment 123 with variation 456
// `['bucketUser', 123, 456]`
// * Bucket visitor into experiment 123 with variation 0
// `['bucketUser', 123, 0]`
// * Bucket visitor into experiment 123 without sending tracking event
// `['bucketUser', 123, 0, false]`
/**
 * Bucket a user into a variation
 *
 * @param {number|string} experimentId
 * @param {number|string} variationIdOrIndex ID of variation to bucket into, or index of variation in variation list
 * @param {boolean=} doNotSendPageviewTracking If true, this visit will not be logged
 */
api.bucketUser = function(experimentId, variationIdOrIndex, doNotSendPageviewTracking) {
  // Default `doNotSendPageviewTracking` to `false` (do send).
  // TODO(tyler): get rid of double negative
  doNotSendPageviewTracking = (doNotSendPageviewTracking === true);

  // Ensure backend bucket map is overridden
  directive.shouldOverrideThirdPartyCookie = true;
  
  // Ensure a pageview event is sent
  if (directive.isEnabled && !doNotSendPageviewTracking) {
    tracker.addLogEvent(document.location.href);
  }

  experimentId = String(experimentId);
  variationIdOrIndex = String(variationIdOrIndex);

  var variationId = null;
  // Split up variation ID into sections (for MVT case).
  var variationIdParts = variationIdOrIndex.split(VARIATION_ID_DELIMITER);
  var sectionIds = data.getExperimentSectionIds(experimentId);
  // If the experiment has sections then it is an MVT experiment.
  var isMVT = sectionIds && sectionIds.length !== 0;
  // If `variationIdOrIndex` is greater than MAX_INDEX then we assume it's an ID
  // TODO(tyler): factor this out more.
  var MAX_INDEX = 256;
  
  // If `variationIdOrIndex` starts with -1, "unbucket" the visitor.
  if(variationIdParts[0] === "-1"){
    plan.removeExperiment(experimentId);
  }
  
  // If this is an MVT (aka it has sections) and the the number of `variationIdParts` equals
  // the number of sections then we loop through and map any indices to the proper variation.  
  else if(isMVT && variationIdParts.length == sectionIds.length){
    variationId = [];
    each(variationIdParts, function(value, index){
      // TODO(tyler): should this be strictly < since the max variations is 256 and the first index is 0?
      if(Number(value) <= MAX_INDEX){
        variationId.push(data.getSectionVariationIds(sectionIds[index])[value]);
      }
      else{
        variationId.push(value);
      }
    });
    variationId = variationId.join(VARIATION_ID_DELIMITER);
  }
  // If its not an MVT and there is only one `variationIdPart` which is an index then map it to the proper variation.
  else if(!isMVT && variationIdParts.length == 1 && Number(variationIdParts[0]) <= MAX_INDEX){
    variationId = String(data.getVariationIdByIndex(experimentId, variationIdParts[0]));
  }
  // If the number of `variationIdParts` equals one and all the other cases were false then the 1 idPart is a variation id
  else if(variationIdParts.length == 1){
    variationId = variationIdParts[0];
  }
  // Else log an error... we don't know what happened
  else{
    timer.addEvent("API", "Error: could not bucket user. Unknown arguments.");
  }

  if(variationId){
    // If the experiment is an MVT and we can not resolve the variation to a section then the variation is
    // not a partial variation and should be added straight to the plan.
    // TODO(tyler): Remove this legacy code
    if (isMVT && data.getExperimentVariationSectionId(experimentId, variationId)) {
      distributor.preferMVTVariation(experimentId, variationId);
    }
    else {
      // Don't automatically evaluate the experiment (which may not be running on the page). The experiment
      // will later be checked in the distributor and, if it passes the tests, be evaluated.
      var shouldEvaluate = false;
      // Do replace any existing bucket.
      var shouldReplace = true;
      plan.addVariation(variationId, "api.bucketUser", shouldEvaluate, shouldReplace);
    }
  }

  // Save the bucket map
  plan.writeCookie();
};

/**
 * Disable Tracking Events only or all Events
 * @param {string=} type
 */
api.disable = function(type) {
  // If `type` is "tracking" disable tracking events only; else disable everything.
  if (type && type === "tracking") {
    directive.shouldTrackEvents = false;
  }
  else {
    timer.addEvent("API", "Optimizely disabled");
    directive.isEnabled = false;
    directive.shouldTrackEvents = false;
  }
};

/**
 * Insert API objects into the page
 */
api.finalize = function() {
  timer.addEvent("API", "Finalizing API.");
  api.setPublicObjects();
  api.isFinalized = true;
};

api.getVariationNamesMap = function() {
  return api.variationNamesMap;
};

/**
 * Initialize the API global object and run initial APIs
 * @param {optly.Visitor} apiVisitor
 */
api.initialize = function(apiVisitor) {
  // Set the `Visitor` instance for `api` to use.
  api.visitor = apiVisitor;
  api.isFinalized = false;

  // Ensure that segmenter, plan changes cause `optimizely.data` to change as well.
  segmenter.addChangeHandler(api.setPublicObjects);
  plan.addChangeHandler(api.setPublicObjects);

  // Setup global properties (`window.optimizely.*`)
  var globals = {
    '$': $,
    'activeExperiments': evaluator.getEvaluatedExperimentIds() || [],
    'allExperiments': data.getExperiments(),
    'all_experiments': data.getExperiments(),
    'allVariations': data.getVariations(),
    'data': api.data,

    // Saves getElementsByClassName that hopefully hasn't been changed yet by
    // external code.
    'getElementsByClassName': document.getElementsByClassName,

    'revision': data.getRevision(),
    'variationIdsMap': api.variationIdsMap,
    'variation_map': api.variationMap,
    'variationMap': api.variationMap,
    'variationNamesMap': api.variationNamesMap
  };

  var globalFunctions = {};

  // `optimizely.push(arguments)` calls `api.push(globalFunctions, arguments)`
  var push = curry(api.push, globalFunctions);

  // Setup API functions available for `optimizely.push(['functionName', arguments])`.
  // Note that these functions are also available as `optimizely.functionName(arguments)` (once client loads).
  extend(globalFunctions, {
    'activate': api.activate,
    'activateGeoDelayedExperiments': api.activateGeoDelayedExperiments,
    'activateSiteCatalyst': integrator.activateSiteCatalyst,
    'activateUniversalAnalytics': integrator.activateUniversalAnalytics,
    'addToAudience': goog.bind(api.visitor.addToAudience, api.visitor),
    'addToSegment': api.addToSegment,
    'bindTrackElement': evaluator.bindTrackElementFromApi,
    'bucketUser': api.bucketUser,
    'bucketVisitor': api.bucketUser,
    'clickTaleRecord': integrator.recordClickTale,
    'clickTalePlayback': integrator.playbackClickTale,
    'customTag': api.registerCustomTag,
    'delayDomReadyEval': evaluator.setDelayDomExecute,
    'delayPageviewTracking': api.delayPageviewTracking,
    'disable': api.disable,
    'log': timer.enableLogging,
    'getAccountId': data.getAdminAccountId,
    'getProjectId': data.getProjectId,
    'googleAnalyticsCustomVariableScope': integrator.googleAnalyticsCustomVariableScope,
    'integrationPrefix': integrator.setPrefix,
    'optOut': tracker.optOut,
    'overrideUrl': user.setCurrentUrl,
    'push': push,
    'removeFromAllAudiences': goog.bind(api.visitor.removeFromAllAudiences, api.visitor),
    'removeFromAllSegments': api.removeFromAllSegments,
    'removeFromAudience': goog.bind(api.visitor.removeFromAudience, api.visitor),
    'removeFromSegment': api.removeFromSegment,
    'sc_activate': integrator.activateSiteCatalyst,
    'sc_svar': integrator.setSiteCatalystSVar,
    'setCookieDomain': cookie.setApiPublicSuffix,
    'skipPageTracking': api.skipPageTracking,
    'optOutThirdPartyCookies' : api.optOutThirdPartyCookies,
    'setCookieExpiration': api.setCookieExpiration,
    'setDimensionValue': goog.bind(api.visitor.setDimensionValue, api.visitor),
    'setUserId': api.setUserId,
    'storeThirdPartyData': api.storeThirdPartyData,
    'timeout': optly.client.preview.ENABLED ? goog.nullFunction : api.disable,
    'trackEvent': tracker.addLogEventFromAPI,
    'verbose': timer.enableVerboseLogging
  });

  // Add functions exclusively for preview mode
  if (optly.client.preview.ENABLED) {
    extend(globalFunctions, {
      'getPreviewLog': function() {
        return optly.client.preview.Logger.log;
      },
      'clearPreviewLog': function() {
        optly.client.preview.Logger.clear();
      },
      'configureConditionalModeExperiment': function(experimentId, options) {
        distributor.configureConditionalModeExperiment(experimentId, options);
        timer.addEvent('API', 'Configuring conditionally activated experiment for preview ' + experimentId);
      },
      /**
       * Check that the preview client (this script) has a projectId that matches the client that launched it.
       * @param projectId
       */
      'verifyPreviewProject': function(projectId) {
        if (data.getProjectId() !== projectId) {
          // TODO(tyler): actually send this somewhere (ODDS-405)
          timer.addEvent('API', 'Preview projectId (' + data.getProjectId() + ') ' +
                                'does not match expected (' + projectId + '), disabling.');
        } else {
          directive.previewVerified = true;
        }
      }
    });
  }

  // Add an API used only for a hotfix
  // TODO(tyler): remove this
  if (api.includeRemoveFromAllReportable) {
    globalFunctions['removeFromReportableAudiences'] = api.removeFromReportableAudiences;
  }

  // Make all `globalFunctions` available in the global object.
  extend(globals, globalFunctions);

  // Call existing API calls (`push`ed onto the `window.optimizely` array).
  var initialApiCalls = window['optimizely'];

  if (isArrayLike(initialApiCalls)) {
    each(initialApiCalls, function(apiCall) {
      push(apiCall);
    });
  }

  // Set `window.optimizely` to the global object.
  window[GLOBAL] = globals;
};

/**
 * Execute an API method.
 * @param {Object} globalFunctions Available functions to call
 * @param {Array|string} apiCall Function arguments (including function name), or just function name
 * @param {boolean=} suppressUnknownFunctions Disable error logging of unknown functions
 */
api.push = function(globalFunctions, apiCall, suppressUnknownFunctions) {
  // Usage:
  // api.push({'functionName': function(){...}}, ['functionName', ...])
  // Note that API consumers call the curried form `push(['functionName', ...])`, `globalFunctions`.

  var arguments_ = [];
  var functionName = apiCall;

  suppressUnknownFunctions = isDefined(suppressUnknownFunctions) ? suppressUnknownFunctions : false;

  // Function arguments as ['functionName', ...]
  if (isArrayLike(apiCall)) {
    // Break `apiCall` into function name and function arguments.
    functionName = apiCall[0];
    arguments_ = slice(/** @type {Array} */ (apiCall), 1);
  }

  // Get the appropriate function by name
  var function_ = globalFunctions[functionName];

  if (function_) {
    timer.addEvent("API", "Called function \"" + functionName + "\"");
    function_.apply(null, arguments_);
  }
  else {
    if (!suppressUnknownFunctions) {
      timer.addEvent("API", "Error for unknown function \"" + functionName + "\"");
    }
  }

  // Flush logs to console.
  timer.flushLogs();
};

/**
 * Add key/value pair(s) to the global custom tags object.
 * @private
 * @param {string|Object.<string, *>} keyOrKeyValueMap
 * @param {*=} value
 */
api.registerCustomTag = function(keyOrKeyValueMap, value) {
  if (api.isFinalized) {
    // Don't accept any more custom tags.
    timer.addEvent("API", "Error: can't add custom tags after Optimizely loads");
    return;
  }

  api.customTags = api.customTags || {};

  // If 2 arguments supplied, treat them as a key/value pair.
  if (arguments.length == 2) {
    api.customTags[keyOrKeyValueMap] = value;
  }
  // Else treat arguments as an object, and extend `api.customTags`.
  else if (arguments.length == 1) {
    $.extend(true, api.customTags, keyOrKeyValueMap);
  }
};

/**
 * Removes the user from the associated audience, dimension, or segment
 *
 * @param {string} segmentIdOrAPIName
 * @param {boolean=} saveChanges whether to call change handlers after saving (only respected by segment API)
 */
api.removeFromSegment = function(segmentIdOrAPIName, saveChanges) {
  var segmentId = data.getSegmentIdByIdentifier(segmentIdOrAPIName) || segmentIdOrAPIName;

  // `saveChanges` defaults to `true`.
  saveChanges = isDefined(saveChanges) ? saveChanges : true;

  var segment = data.getSegment(segmentId);
  if (!segment) {
    timer.addEvent('API', 'Unable find segment for: ' + segmentId);
  }
  // This function has some branching behavior because a segment can be either:
  // 1. A segmentation audience "tracking" segment, in which case we remove from the audience
  // 1. A `CustomDimension` "tracking" segment, in which case we remove the dimension value
  // 1. A plain segment, in which case we remove from the segment directly.
  else if (segment['audience_id']) {
    api.visitor.removeFromAudience(segment['audience_id']);
  } else if (segment['dimension_id']) {
    api.visitor.setDimensionValue(segment['dimension_id'], null);
  } else {
    segmenter.removeFromSegment(segmentId, saveChanges);
  }
};

/**
 * Remove visitor from all segments
 */
api.removeFromAllSegments = function() {
  var segmentIds = data.getSegmentIds();
  each(segmentIds, function(segmentId) {
    // Defer calling change handlers until all removed.
    var saveChanges = false;
    api.removeFromSegment(segmentId, saveChanges);
  });
  segmenter.callChangeHandlers();
};

/**
 * Add data to global object
 */
api.setPublicObjects = function() {
  api.variationIdsMap = {};
  api.variationMap = {};
  api.variationNamesMap = {};

  // Add bucketed variations.
  each(plan.getVariationIds(), function(variationId) {
    var experimentId = data.getVariationExperimentId(variationId);

    api.variationIdsMap[experimentId] = variationId.split(VARIATION_ID_DELIMITER);
    api.variationMap[experimentId] = data.getVariationIndex(variationId);
    api.variationNamesMap[experimentId] = data.getVariationName(variationId);
  });

  // Update internal data.
  api.updateDataObject();

  // Add properties to global object.
  extend(window[GLOBAL], {
    'activeExperiments': evaluator.getEvaluatedExperimentIds(),
    'allExperiments': data.getExperiments(),
    'all_experiments': data.getExperiments(),
    'data': api.data,
    'variationIdsMap': api.variationIdsMap,
    'variationMap': api.variationMap,
    'variationNamesMap': api.variationNamesMap,
    'variation_map': api.variationMap
  });
};

/**
 * Set directive to delay tracking.
 * @private
 * @param {number=} milliseconds
 */
api.delayPageviewTracking = function(milliseconds) {
  if (!isNumberLike(milliseconds)) {
    return false;
  }
  directive.delayPageviewTracking = Number(milliseconds);
};

/**
 * This method was added to allow customers to opt out
 * of 3rd party cookie tracking. Added as a fix for BUG-747
 * @private
 */
api.optOutThirdPartyCookies = function() {
 directive.optOutThirdPartyCookies = true;
};

/**
 * Overrides the default cookie expiration.
 * @param {number} days
 * @private
 */
api.setCookieExpiration = function(days){
  var errorMsg = "";
  var seconds;

  // If number of days is not a number emit an error and set to default.
  if(typeof(days) !== "number") {
    errorMsg = "must be a number.";
    seconds = DEFAULT_TRACKING_COOKIE_EXPIRATION;
  }
  // Otherwise set cookie expiration specified # days.
  else {
    seconds = Math.floor(DAY_IN_SECONDS * days);
  }
  // If the specified duration is < than minimum, emit an error and set to minimum.
  if(seconds < MINIMUM_TRACKING_COOKIE_EXPIRATION) {
    errorMsg = "less then minimum.";
    seconds = MINIMUM_TRACKING_COOKIE_EXPIRATION;
  }
  errorMsg = errorMsg && "Days argument " + errorMsg;
  timer.addEvent("API", errorMsg+" Cookie expiration set to " + seconds + " seconds.");
  // Set max-age for cookies.
  directive.trackingCookieExpiration = seconds;
  // Resave segments cookie since it's added before API is initialized.
  segmenter.saveSegmentsCookie();
};

/**
 * Opt out of page tracking.
 * @private
 */
api.skipPageTracking = function() {
  directive.shouldSkipPageTracking = true;
};

/**
 * Given an experimentId this function returns true if the experiment's url targeting
 * matches the current url. It is only used in preview.
 * @private
 * @param {string} experimentId
 * @return {boolean}
 */
api.doesExperimentTargetCurrentUrl = optly.client.preview.ENABLED ? function(experimentId) {
  var conditions = data.getExperimentUrls(experimentId);
  if (conditions) {
    // For audience-enabled experiments, check current URL against experiment conditions.
    return condition.testUrlDimensionValues(conditions, condition.facade.getCurrentUrl());
  } else {
    // Otherwise, check currentURL against include/exclude URL values in condition.
    conditions = data.getConditions(experimentId, "experiment");
    return filter(conditions, function(cond) {
      return cond["type"] === "url" && condition.testUrls(cond);
    }).length !== 0;
  }
// Do nothing if not preview mode.
} : goog.nullFunction;

/**
 * Update internal data.
 * @private
 */
api.updateDataObject = function() {
  // TODO(tyler): make this return an object and not set any state, since it isn't used?
  api.data = {};

  // First, add global objects (non visitor-specific).

  // Add all Audiences
  var audiences = data.getAudiences();
  if (audiences) {
    api.data['audiences'] = audiences;
  }

  api.data['experiments'] = {};
  api.data['sections'] = {};
  api.data['segments'] = {};
  api.data['state'] = {};
  api.data['variations'] = {};
  api.data['visitor'] = {};
  api.data['customTags'] = api.customTags;
  api.data['thirdParty'] = integrator.getAllThirdPartyData();

  // Add all Experiments
  var experimentIds = data.getExperimentIds();
  for (var i = 0; i < experimentIds.length; i++) {
    var experimentId = experimentIds[i];

    var experimentInfo = {};
    experimentInfo['code'] = data.getExperimentCode(experimentId);
    experimentInfo['name'] =  data.getExperimentName(experimentId);
    experimentInfo['conditional'] =  data.isExperimentConditionallyActivated(experimentId);
    experimentInfo['manual'] =  data.isExperimentManuallyActivated(experimentId);
    experimentInfo['section_ids'] =  data.getExperimentSectionIds(experimentId);
    experimentInfo['variation_ids'] = data.getExperimentVariationIds(experimentId);
    if (optly.client.preview.ENABLED) {
      experimentInfo['status'] = data.getExperimentStatus(experimentId);
      experimentInfo['targetsUrl'] = api.doesExperimentTargetCurrentUrl(experimentId);

      if (api.conditionallyActivatedExperiments[experimentId]) {
        experimentInfo['conditional_triggered'] = true;
      }
    }

    api.data['experiments'][experimentId] = experimentInfo;
  }

  // Add all Segments.
  var segmentIds = data.getSegmentIds();
  for (var i = 0; i < segmentIds.length; i++) {
    var segmentId = segmentIds[i];

    api.data['segments'][segmentId] = {
      'name': data.getSegmentName(segmentId)
    };
    if(optly.client.preview.ENABLED){
      extend(api.data['segments'][segmentId], {
        'is_default': data.getSegementIsDefault(segmentId)
      });
    }
  }

  // Add all Sections
  var sectionIds = data.getSectionIds();
  for (var i = 0; i < sectionIds.length; i++) {
    var sectionId = sectionIds[i];

    var sectionInfo = {};
    sectionInfo['name'] = data.getSectionName(sectionId);
    sectionInfo['variation_ids'] = data.getSectionVariationIds(sectionId);

    api.data['sections'][sectionId] = sectionInfo;
  }

  // Add all Variations
  var variationIds = data.getVariationIds();
  for (var i = 0; i < variationIds.length; i++) {
    var variationId = variationIds[i];

    var variationInfo = {};
    variationInfo['name'] = data.getVariationName(variationId);
    variationInfo['code'] = data.getVariationCode(variationId);

    api.data['variations'][variationId] = variationInfo;
  }

  // Now add Visitor-specific values at `data['visitor']`.
  var visitorData = {};
  // Map browser ID to "friendly" name.
  extend(visitorData, {
    'browser': detect.getBrowserName(user.getBrowserId()),
    'browserVersion': user.getBrowserVersion(),
    'device': user.getDevice(),
    'platform': user.getPlatform(),
    'mobile': user.isMobile(),
    'mobileId': user.getMobileId(),
    'os': user.getPlatform().id
  });
  // Add geolocation data.
  visitorData['location'] = user.getLocation();
  visitorData['ip'] = user.getIP();
  // Add query params.
  visitorData['params'] = {};
  if(optly.client.preview.ENABLED){
    visitorData['url'] = window.location.toString();
  }
  var urlParams = query.getAllParameters();
  // It is possible for a given url parameter to appear more than once
  // (e.g. ?foo=1&foo=2), in which case, we can either supply the first
  // value or all the values as a list. For now, we're supplying the
  // first.
  urlParams.reverse();
  for (var i = 0, nParams = urlParams.length; i < nParams; i++) {
    try {
      visitorData['params'][safeDecodeUriComponent(urlParams[i][0])] = safeDecodeUriComponent(urlParams[i][1]);
    } catch (e) {
      timer.addEvent('API', 'Failed to decode parameter ' + urlParams[i][0] + '=' + urlParams[i][1]);
    }
  }
  // Add misc other data.
  visitorData['referrer'] = String(document.referrer);
  visitorData['segments'] = segmenter.getSegmentTrackingData();
  visitorData['dimensions'] = api.visitor.getDimensionValues();
  visitorData['audiences'] = api.visitor.getAudiences();
  api.data['visitor'] = visitorData;

  // Add data about visitor state (experiments, bucketed, variations, etc).
  var state = {};
  state['activeExperiments'] = evaluator.getEvaluatedExperimentIds() || [];
  state['variationIdsMap'] = api.variationIdsMap;
  state['variationMap'] = api.variationMap;
  state['variationNamesMap'] = api.variationNamesMap;
  state['enabled'] = directive.isEnabled;
  api.data['state'] = state;
  // Don't return a value, this updates global state.
};

// Fix [ENG-1636](https://optimizely.atlassian.net/browse/ENG-1636) issue.
// TODO(tyler): remove this function
/**
 * @private
 * Remove from reportable audiences. This has the effect of "clearing" the erroneous reportable audiences, allowing
 * visitors to be reallocated to the audiences they should be in, starting with the next page load.
 */
api.removeFromReportableAudiences = function() {
  // If this visitor hasn't been "fixed" yet then remove from all reportable audiences.
  if (!cookie.get(HOTFIX_ENG_1636_COOKIE)) {
    each(data.getAudiences(), function(audienceId) {
      if (data.getAudienceSegmentId(audienceId)) {
        timer.addEvent('API', 'Removing from reportable audience: ' + audienceId);
        api.visitor.removeFromAudience(audienceId);
      }
    });

    // Set the "done" cookie to prevent this from happening again to the same visitor.
    cookie.set(HOTFIX_ENG_1636_COOKIE, '1', MINIMUM_TRACKING_COOKIE_EXPIRATION);
  } else {
    // Otherwise do nothing.
    timer.addEvent('API', 'skipping because cookie is set');
  }
};

/**
 * Set visitor's Publisher-provided ID (PPID). Setting to something falsy will delete the PPID.
 *
 * @param {?string} userId
 */
api.setUserId = function(userId) {
  // Check against existing PPID
  var oldPPID = user.getPPID();
  user.setPPID(userId);

  if (userId !== oldPPID) {
    // Clear plan
    plan.reset();
  }
  timer.addEvent('API', 'Set PPID to ' + userId);
};

/** @private */ api.data = {};
api.conditionallyActivatedExperiments = {};
/** @type {api.AsyncInfo|null} @private */
api.asyncInfo = null;
/** @type {boolean} @private */
api.delayedExperimentsActivated = false;
/** @type Array.<string> */ api.geoDelayedExperiments = [];
/** @type Array.<string> */ api.geoDelayedSegments = [];
/** @private */ api.variationIdsMap = {};
/** @private */ api.variationMap = {};
/** @private */ api.variationNamesMap = {};
/** @private */ api.visitor = null;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/distributor.js


distributor.distributeAll = function() {
  optly.client.rum.instance.recordEvent('distributeExperiments');
  each(data.getExperimentIds(), function(experimentId) {
    if (!evaluator.isInQueue(experimentId)) {
      if (data.isExperimentConditionallyActivated(experimentId) && data.isExperimentEnabled(experimentId)) {
        distributor.configureConditionalModeExperiment(experimentId);
      }
      else if (!condition.isReadyToTest(experimentId)) {

        // Add geo delayed experiment iff the experiment is not in manual mode
        // and it was not force activated (eg via optimizely_x params)
        if (!data.isExperimentManuallyActivated(experimentId)
            && !arrayContains(evaluator.getEvaluatedExperimentIds(), experimentId)) {
          api.addGeoDelayedExperiment(experimentId);
        }
      }
      else if (condition.passesTests(experimentId,  {"objectType": "experiment"})) {
        timer.addEvent("Distributor", "Going to distribute " + data.getExperimentString(experimentId));
        var shouldEnqueue = distributor.distributeExperiment(experimentId);

        if (shouldEnqueue) {
          evaluator.enqueue(experimentId);
        }
      }
    }
  });
};

/**
 * @param {string} experimentId
 * @param {boolean=} forceIgnored
 */
distributor.distributeExperiment = function(experimentId, forceIgnored) {
  forceIgnored = (forceIgnored === true);

  var preferredVariation = plan.getVariationId(experimentId);
  if (preferredVariation && preferredVariation.length > 0) {
    timer.addEvent("Distributor", "Not distributing experiment " + experimentId + " (already in plan)");
    return true;
  }

  if (forceIgnored || plan.isExperimentIgnored(experimentId)) {
    timer.addEvent("Distributor", "Not distributing experiment " + experimentId + " (is ignored)");
    optly.client.preview.Logger.setReason(experimentId, "it is ignored");
    return false;
  }

  var enabledVariationIds = data.getEnabledVariationIds(experimentId);

  if (enabledVariationIds.length === 0) {
    timer.addEvent("Distributor", "Permanently ignoring experiment " + experimentId + " (no enabled variations)");
    optly.client.preview.Logger.setReason(experimentId, "it has no enabled variations");
    plan.ignoreExperiment(experimentId);
    return false;
  }
  else {
    var ignorePercentage = data.getExperimentIgnorePercentage(experimentId);

    if (ignorePercentage > distributor.randomForIgnoring(experimentId)) {
      timer.addEvent("Distributor", "Permanently ignoring experiment " + experimentId +
                    "(" + (ignorePercentage / 100) + "% likelihood)");
      plan.ignoreExperiment(experimentId);
      return false;
    }
    else {
      var variationIds = enabledVariationIds;

      if (distributor.preferredBucketUserMapping[experimentId] !== undefined) {
        // We have to pick a random variation that is acceptable
        timer.addEvent("Distributor", "Taking into account bucketUser variations for experiment " + experimentId);
        variationIds = distributor.getPotentialPreferredMVTVariations(experimentId);
      }

      var randomIndex = distributor.pickRandomVariationIndex(experimentId,
                                                             variationIds);
      var variationId = variationIds[randomIndex];

      timer.addEvent("Distributor", "Picked variation " + variationId + " [index " +
                     randomIndex + " of " + enabledVariationIds.length + "]");
      plan.addVariation(variationId, "distributor", false);
      return true;
    }
  }
};

/**
 * Set up a Conditionally Activated Experiment
 *
 * The 2 ways the user can use the code box in the product to setup
 * conditional activation for an experiment:
 *
 *      Usage Option #1 - Polling
 *       - If the code provided is not a function, poll for the code
 *         condition to be true and then activate the experiment
 *
 *         Example: Activate when a selector is found
 *
 *           $('.greenButton').length
 *
 *
 *      Usage Option #2 - Callback Function
 *      - If the code provided is a function, it is expected to be of the form:
 *
 *          param {Function} activate - Activate the experiment
 *          param {Object=}  options {
 *                             isActive : Boolean indicating if this experiment is active
 *                             experimentId : This experiment's Id
 *                           }
 *
 *         Example: Activate if an ajax call contains a certain module
 *
 *           function(activate, options) {
 *             $( document ).ajaxComplete(function( event, xhr, settings ) {
 *               if (xhr.responseText.indexOf('rightRailModule') != -1) {
 *                 activate();
 *               }
 *             });
 *           }
 *
 *
 * See the developer docs for more examples:
 *   http://developers.optimizely.com/samples/#conditional
 *
 *
 * @param {string} experimentId Experiment ID.
 * @param {Object=} options
 */
distributor.configureConditionalModeExperiment = function(experimentId, options) {
  options = options || {};

  timer.addEvent('Distributor', 'Testing conditionally activated experiment for conditions: ' + experimentId);

  // Make sure the conditional experiment hasn't been setup yet via optly_x params.
  if (!api.conditionallyActivatedExperiments[experimentId]) {
    distributor.runConditionalCode(experimentId, options);

    if (api.isFinalized) {
      api.setPublicObjects();
    }
  }
};

/**
 * @param {string} experimentId
 * @param {Object=} options
 */
distributor.runConditionalCode = function(experimentId, options) {
  var code = data.getConditionalActivationCode(experimentId);
  var pollingType = true;
  var conditionalFunction;

  try {
    // IE8 returns undefined when eval is called with a string function,
    // so use a helper function to ensure a function is returned if the
    // string evals to a function.
    var evalString = '(' + code + ')';
    var conditionalCodeResult = eval('(function() {return ' + evalString + ';})()');
    if (typeof conditionalCodeResult === 'function') {
      pollingType = false;
      conditionalFunction = /** @type Function */ conditionalCodeResult;
    }
  }
  catch (error) {
    /* Code used for polling can error initially, so don't break here. */
  }

  var activationOptions = {
    'isActive': false,
    'experimentId': experimentId
  };
  var activationFunction = function() {
    api.activate(experimentId, options);
    activationOptions['isActive'] = arrayContains(evaluator.getActiveExperimentIds(), experimentId);
    timer.addEvent('Distributor', 'Activating conditionally activated experiment ' + experimentId);
  };

  if (!pollingType) {
    try {
      conditionalFunction(activationFunction, activationOptions);
      timer.addEvent('Distributor', 'Set up conditional callback for ' + experimentId);
      api.conditionallyActivatedExperiments[experimentId] = true;
    }
    catch (error) {
      timer.addEvent('Distributor', 'Error running conditional callback function for ' + experimentId);
    }
  }
  else {
    // Don't setup polling if we know right now that the test fails.
    // This minimizes the scope for which we set intervals to prevent
    // performance degredation, as we only configure conditional experiments
    // that are running and for which the visitor meets targeting.
    var testOptions = {
      'objectType': 'experiment',
      'enabledStatus': options['enabledStatus']
    };
    if (options['force'] || !condition.isReadyToTest(experimentId) || condition.passesTests(experimentId, testOptions)) {
      var pollForReady = function() {
        if (condition.isReadyToTest(experimentId) && (condition.testCodeResult(null, {'value': code}) || conditionalCodeResult)) {
          activationFunction();
        }
        else {
          setTimeout(pollForReady, EVALUATION_WAIT_INTERVAL);
        }
      };
      pollForReady();
      timer.addEvent('Distributor', 'Set up conditional polling for ' + experimentId);
      api.conditionallyActivatedExperiments[experimentId] = true;
    }
  }
};

/**
 * Get correct userId for use in bucketing. Prefer PPID first, and fallback to userId.
 * @return {string}
 */
distributor.getBucketingId = function() {
  return user.getPPID() || user.getId();
};

/**
 * Returns a random number for ignoring experiment.
 * @param {string} experimentId
 * @return {number} Random number for ignoring experiment.
 */
distributor.randomForIgnoring = function(experimentId) {
  // IMPORTANT: Always use seed optly.hashing.HashSeed.IGNORING for ignore random number.
  // Other calls to distributor.experimentUserHash or .randomInt must use other seeds.
  return optly.hashing.hashToInt(distributor.getBucketingId(),
                                 experimentId,
                                 optly.hashing.HashSeed.IGNORING,
                                 10000);
};

/**
 * Returns a bucketing number, based on Experiment ID and user ID, to decide which variation to bucket user into.
 * @param {string} experimentId
 * @return {number} Hash value between [0, 1) for bucketing experiment.
 */
distributor.randomForBucketing = function(experimentId) {
  // IMPORTANT: Always use seed optly.hashing.HashSeed.BUCKETING for bucketing random number.
  // Other calls to distributor.experimentUserHash or .randomInt must use other seeds.
  return optly.hashing.experimentUserHash(distributor.getBucketingId(),
                                          experimentId,
                                          optly.hashing.HashSeed.BUCKETING);
};

/**
 * Returns a "random" bucket in [0, numBuckets).
 * NOTE: This is different from randomForBucketing in that it simply returns a
 * random index of a bucket, whereas randomForBucketing returns a number in
 * [0, 1) which will be used to choose an index of a bucket from its weights
 * array.
 * @param {string} experimentId Experiment id to test for.
 * @param {number} numBuckets Number of buckets.
 */
distributor.getRandomBucketAsFallback = function(experimentId, numBuckets) {
  // IMPORTANT: Always use seed optly.hashing.HashSeed.FALLBACK for random bucketing.
  // Other calls to distributor.experimentUserHash or .randomInt must use other seeds.
  return optly.hashing.hashToInt(distributor.getBucketingId(),
                                 experimentId,
                                 optly.hashing.HashSeed.FALLBACK,
                                 numBuckets);
};

/**
 * Returns a random variation index given the variation weights.
 * @param {string} experimentId
 * @param {Array.<string>} possibleVariationIds
 * @return {?number}
 */
distributor.pickRandomVariationIndex = function(experimentId,
                                                possibleVariationIds) {
  var possibleWeights = [];
  var variationWeights = data.getExperimentVariationWeights(experimentId);

  each(possibleVariationIds, function(variationId) {
    possibleWeights.push(variationWeights[variationId]);
  });

  return distributor.chooseWeightedIndex(experimentId, possibleWeights);
};

/**
 * Randomly chooses an index given the weights associated with the indices
 * (Weights should be non-negative.)
 *
 * @param {string} experimentId
 * @param {Array.<number>} weights Weights assigned to the indices
 * @return {?number}
 */
distributor.chooseWeightedIndex = function(experimentId, weights) {
  var nElements = weights.length;

  if (nElements === 0) {
    return null;
  }
  if (nElements === 1) {
    return 0;
  }

  var sumWeight = 0;
  for (var i = 0; i < nElements; i++) {
    sumWeight += weights[i];
  }

  var random = distributor.randomForBucketing(experimentId) * sumWeight;
  for (var i = 0; i < nElements; i++) {
    if (random < weights[i]) {
      return i;
    }
    random -= weights[i];
  }

  // Unless nonsensical values are supplied, this only happens when all
  // weights are 0.
  return distributor.getRandomBucketAsFallback(experimentId, nElements);
};

/**
 * The following code is used with the bucketUser API.  The object
 * distributor.preferredBucketUserMapping is used remember preferred
 * section-variation mappings.  This is needed because experiment.js bucketed
 * users into variations based on their sectionId, not their experimentId.
 */

/**
 * @param {string} experimentId
 * @param {string} variationPartial
 */
distributor.preferMVTVariation = function(experimentId, variationPartial) {
  var sectionId = data.getExperimentVariationSectionId(experimentId, variationPartial);
  distributor.preferredBucketUserMapping[experimentId] = distributor.preferredBucketUserMapping[experimentId] || {};
  distributor.preferredBucketUserMapping[experimentId][sectionId] = variationPartial;
  timer.addEvent("Distributor", "Preferring variation partial " + variationPartial +
                                " of section " + sectionId + " of experiment " +
                                experimentId);

  var variationIds = distributor.getPotentialPreferredMVTVariations(experimentId);

  if (variationIds.length === 1) {
    plan.addVariation(variationIds[0], "api.bucketUser", false, true);
  }
};

/**
 * @param {string} experimentId
 */
distributor.getPotentialPreferredMVTVariations = function(experimentId) {
  var variationIds = [];

  each(data.getEnabledVariationIds(experimentId), function(variationId) {
    if (distributor.containsPreferredMVTVariations(experimentId,
                                                   variationId)) {
      variationIds.push(variationId);
    }
  });

  return variationIds;
};

/**
 * @param {string} experimentId
 * @param {string} variationId
 */
distributor.containsPreferredMVTVariations = function(experimentId, variationId) {
  var isAcceptable = true;
  for (var sectionId in distributor.preferredBucketUserMapping[experimentId]) {
    var variationPartial = distributor.preferredBucketUserMapping[experimentId][sectionId];
    if (variationId.indexOf(variationPartial) === -1) {
      isAcceptable = false;
    }
  }
  return isAcceptable;
};

/** @private */ distributor.preferredBucketUserMapping = {};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/query.js

/**
 * Gets all query parameters, regardless of whether they have our prefix.
 */
query.getAllParameters = function() {
  var queryString = window.location.search || "";
  if (queryString.indexOf("?") === 0) {
    queryString = queryString.substring(1);
  }

  var query = queryString.split("&");
  var nameValuePairs = [];
  for (var i = 0; i < query.length; i++) {
    // Pull out the name, value pair
    var name = "";
    var value = "";
    var nameAndValue = query[i].split("=");
    if (nameAndValue.length > 0) {
      name = nameAndValue[0];
    }
    if (nameAndValue.length > 1) {
      value = nameAndValue[1];
    }
    nameValuePairs.push([name, value]);
  }
  return nameValuePairs;
};

/**
 * Gets all the query parameters with a prefix of optimizely_, and returns an
 * associative array mapping keys to values.  Note that the optimizely_ is
 * stripped from the keys, e.g. instead of looking up "optimizely_log", you'd
 * look up "log".
 * @param {string} queryString
 * @return {Object}
 */
query.getParameters = function(queryString) {
  var match;
  var queryExpression = /optimizely_([^=]+)=([^&]*)/g;
  var queryParameters = {};

  while (match = queryExpression.exec(queryString)) {
    queryParameters[match[1]] = match[2];
  }

  return queryParameters;
};

/**
 * Returns the query param value associated with a query param, or null if it
 * does not exist. For use in targeting.
 * @param {string} queryParamName
 * @param {Array=} allQueryParams If specified query.getAllParameters() will not be called
 *   and the passed in value will be used instead
 * @return {string|null}
 */
query.getValue = function(queryParamName, allQueryParams) {
  allQueryParams = allQueryParams || query.getAllParameters();
  for (var i = 0; i < allQueryParams.length; i++) {
    var pair = allQueryParams[i];
    if (pair[0] === queryParamName) {
      var paramValue = pair[1];
      // Some browsers convert %20 to '+' in document.location, which doesn't get fixed
      // by decodeURIComponent, replace with a real space ' '.
      paramValue = paramValue.replace(/\+/g, ' ');
      // Decode and return value
      return safeDecodeUriComponent(paramValue);
    }
  }
  return null;
};

/** @private */
query.FORCE_PARAMETERS_REGEX = /x(\d+)/;

/**
 * processes and applies any experiment query parameters (aka optimizely_x params).
 */
query.processForceParameters = function() {

  // Force parameters should be disabled if:
  // 1) This is not the preview version of client. Force params are required to set the initial variations
  // 2) The user has opted out of using force parameters (which is default behavior) and does not have a
  //    valid token (which is used by success for testing purposes)
  //
  // Note: old browsers will not support force parameters even if the token is valid
  var ignoreForceParameters = !optly.client.preview.ENABLED && !data.isForceVariationEnabled();

  var queryParameters = query.getParameters(window.location.search);
  each(queryParameters, function(key, value) {
    var match = query.FORCE_PARAMETERS_REGEX.exec(key); // used for force parameters
    // e.g. optimizely_x4392=1
    if (match){
      if (ignoreForceParameters) {
        directive.requestedInvalidForceParameters = true;
        log("Query", "Ignored parameter %s", key);
        return;
      }
      //bucket visitor and force activate experiment
      var experimentId = match[1];
      api.bucketUser(experimentId, value, true);

      // If the experiment is conditionally activated, begin polling for it's
      // condition and then call api.activate when ready.
      if (data.isExperimentConditionallyActivated(experimentId)) {
        distributor.configureConditionalModeExperiment(experimentId, {'force' : true, 'skipPageviewTracking': true});
      }
      // If the experiment is not going to activate, force its activation.
      else if (!condition.passesTests(experimentId, {})) {
        api.activate(experimentId, {'force' : true, 'skipPageviewTracking': true});
      }
    }
  });
};

query.process = function() {
  var queryParameters = query.getParameters(window.location.search);
  var forceParametersPresent = false;
  for(var key in queryParameters){
    if(query.FORCE_PARAMETERS_REGEX.exec(key)){
      forceParametersPresent = true;
      break;
    }
  }

  if (queryParameters['opt_out'] === "true" ||
      queryParameters['opt_out'] === "false") {
    tracker.optOut(queryParameters['opt_out'] === "true");
  }

  directive.forceTracking = queryParameters['force_tracking'] === "true";
  if (queryParameters['disable'] === 'true' ||
      queryParameters['opt_out'] === 'true' ||
      cookie.get(OPT_OUT_COOKIE_NAME) === 'true') {
    directive.isEnabled = false;
  }
  directive.isEditor = queryParameters['editor'] === "true";
  directive.shouldLoadPreview = queryParameters['show_preview'] === 'true';

  var previewScriptName = queryParameters['token'];
  // Preview script should always be a hex string of length 32
  if (/^[0-9a-f]{32}$/.test(previewScriptName)) {
    directive.previewScriptName = previewScriptName;
  } else {
    timer.addEvent('Query', 'Blocked request to load unsafe script: ' + previewScriptName);
  }

  directive.shouldLog = queryParameters['log'] === "true";
  directive.shouldLogVerbosely = queryParameters['verbose'] === "true";
  directive.shouldTrackEvents = !(directive.shouldLoadPreview || forceParametersPresent) || directive.forceTracking;

  if (queryParameters['client'] === "false") {
    directive.isEnabled = false;
    directive.scriptToLoad = "js/" + data.getProjectId() + ".js";
  }
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/nativity.js

optly.nativity.getNativeGetElementsByClassName = function() {
  var nativeGetByClass = document.getElementsByClassName;

  // prototype.lite.js, which is part of moo.fx, sets
  // document.getElementsByClassName without checking if it already exists.
  // Its implementation doesn't play nice with jQuery.
  if (!optly.nativity.isNativeFunction(nativeGetByClass)) {
    var optimizely = window['optimizely'] || {};
    var optimizelyGetByClass = optimizely['getElementsByClassName'];
    var optly_ = window['optly'] || {};
    var optlyGetByClass = optly_['getElementsByClassName'];

    if (optly.nativity.isNativeFunction(optimizelyGetByClass)) {
      nativeGetByClass = optimizelyGetByClass;
    }
    else if (optly.nativity.isNativeFunction(optlyGetByClass)) {
      nativeGetByClass = optlyGetByClass;
    }
    else {
      nativeGetByClass = null;
    }
  }

  return nativeGetByClass;
};

/**
 * Check if function is native or has been replaced.
 *
 * @param {Object} function_
 */
optly.nativity.isNativeFunction = function(function_) {
  // Use String constructor for compatibility with MSIE since some
  // methods are objects and not functions so don't have toString().
  // http://stackoverflow.com/questions/6598945/detect-if-function-is-native-to-browser
  return function_ && String(function_).indexOf("[native code]") !== -1;
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/redirect.js

/**
 * Initialize redirect by storing values from the respective cookies.
 * This is done because the redirect cookies are only around for 5 seconds
 * and may be deleted by the time it is needed.
 */
redirect.initialize = function() {
  redirect.initializeRedirectVariationId();
  redirect.initializeRedirectReferrerUrl();
}

/**
 * @param {string} code
 */
redirect.getRedirectURL = function(code) {
  var redirectPattern = /_optimizely_redirect(?:_no_cookie)?=(\S+)/;
  return code.match(redirectPattern);
};

/**
 * Returns the referrer read from the referrer cookie.
 * @returns {String} variationId
 */
redirect.getRedirectReferrer = function() {
  return redirect.referrer;
};

/**
 * Returns the variationId read from the redirect cookie.
 * @returns {string} variationId
 */
redirect.getRedirectVariationId = function() {
  return redirect.variationId;
}

/**
 * If this cookie is set, then don't drop a cookie during redirect
 * (allows multiple redirects in a short time window)
 * @param {string} code
 */
redirect.detectNoCookieRedirect = function(code) {
  return containsString(code, "_optimizely_redirect_no_cookie");
};

/**
 * Ok to redirect if the no-cookie redirect is used or
 * there is no redirect cookie set
 *
 * @param {string=} code
 */
redirect.okToRedirect = function(code) {
  code = code || "";
  var redirectCookie = redirect.getRedirectCookie();

  //if redirect variation code has NoCookieRedirect
  if (redirect.detectNoCookieRedirect(code)) {
    return true;
  }
  //if redirect cookie does not exist
  if(!redirectCookie){
    return true;
  }
  //if redirect cookie was set with noRedirectCookie=true
  if(redirectCookie && redirectCookie.split("|")[1] === REDIRECT_COOKIE_TRUE){
   return true;
  }
  return false;
};

/**
 * @private
 * @returns {*}
 */
redirect.getRedirectCookie = function() {
  return cookie.get(REDIRECT_COOKIE_NAME);
};

/**
 * Pull the variation Id out of the cookie before it expires.
 *
 * @private
 */
redirect.initializeRedirectVariationId = function() {
  var redirectCookie = redirect.getRedirectCookie() || "|";
  redirect.variationId = redirectCookie.split("|")[0];
};

/**
 * Referrer cookie is set by redirect.setReferrerCookie before a redirect.
 * This info must override third party referrers on redirected URL even
 * if no experiment is running.
 *
 * Note: calling this function twice won't do any harm, because it clears
 * the redirect cookie after the first time.
 *
 * @private
 */
redirect.initializeRedirectReferrerUrl = function() {
  var referrer = cookie.get(REFERRER_REDIRECT_COOKIE_NAME);

  if (referrer !== null) {
    redirect.referrer = referrer.length == 0 ? '' : referrer;
    cookie.set(REFERRER_REDIRECT_COOKIE_NAME, "");
  }
};

/**
 * This function sets a cookie which contains the variationId that the user
 * was redirected from, also prevents redirect variations from being executed
 * from any page except the original page. This is to prevent redirect loops.
 * This behavior can be overridden by passing noRedirectCookie=True.
 * @param {boolean} noRedirectCookie
 * @param {string=} variationId
 */
redirect.setRedirectCookie = function(noRedirectCookie, variationId) {
  var noRedirectCookieString = noRedirectCookie ? REDIRECT_COOKIE_TRUE : REDIRECT_COOKIE_FALSE;
  cookie.set(REDIRECT_COOKIE_NAME,
             (variationId || "unknown variation") + "|" + noRedirectCookieString,
             REDIRECT_COOKIE_SECONDS);
};

/**
 * This function saves the referrer in a cookie before a redirect
 * occurs so that after the redirect we know where the user came from.
 * document.referrer is not useful after a redirect because we want to know
 * where the referrer was to the original experiment page.
 *
 * @param {string=} referrer Override referrer to use in place of document.referrer (for testing)
 */
redirect.setReferrerCookie = function(referrer) {
  referrer = isDefined(referrer) ? referrer : document.referrer;
  cookie.set(REFERRER_REDIRECT_COOKIE_NAME, /** @type {string} */ (referrer), REDIRECT_COOKIE_SECONDS);
};

/**
 * @private
 * @type {String}
 */
redirect.referrer = null;

/**
 * @private
 * @type {string}
 */
redirect.variationId = "";

/**
 * This regular expression attempts to verify if the standard Optimizely redirect code has been modified
 * such that it could possibly not result in a redirect.
 * This checks for the current redirect code without retaining query parameters (11/1/14):
 *
 *   /* _optimizely_redirect=http://example.local/example3?client_id=7&optimizely_log=true * /
 *   var _optly={redir:document.createElement("a")};
 *   _optly.redir.href="http://example.local/example3?client_id=7&optimizely_log=true";
 *   _optly.cur=window.location.search;
 *   if (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;}
 *   window.location.replace(_optly.redir.href);
 *
 *
 * @type {RegExp}
 */
redirect.redirectRegex = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/;

/**
 * This regular expression attempts to verify if the standard Optimizely redirect code has been modified
 * such that it could possibly not result in a redirect.
 * This checks for the current redirect code while retaining query parameters (11/1/14):
 *
 *   /* _optimizely_redirect=http://example.local/example3?client_id=7&optimizely_log=true * /
 *   window.location.replace("http://example.local/example3?client_id=7&optimizely_log=true");
 *
 *
 * @type {RegExp}
 */
redirect.redirectRegexParams = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href\=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?{.+}[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/;

/**
 * This regular expression attempts to verify if the standard Optimizely redirect code has been modified
 * such that it could possibly not result in a redirect.
 * This checks for the legacy redirect code:
 *
 *   /* _optimizely_redirect=http://?a=1 * /
 *   var query = window.location.search;
 *   query = query.indexOf('?') == 0 ? query.substring(1) : query;
 *   var redirectFirst = window.location.protocol + "//" + window.location.host + window.location.pathname;
 *   var redirectSecond = 'a=1';
 *   var questionMark = query.length || redirectSecond.length ? '?' : '';
 *   var ampersand = query.length && redirectSecond.length && redirectSecond[0] != '#' ? '&' : '';
 *   window.location.replace(redirectFirst + questionMark + query + ampersand + redirectSecond);
 *
 *
 * @type {RegExp}
 */
redirect.redirectRegexLegacy = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/json.js
// HAS BEEN MODIFIED to always use library supplied functions


/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

//var JSON;
//if (!JSON) {
//    JSON = {};
//}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

//    if (typeof Date.prototype.toJSON !== 'function') {
//
//        Date.prototype.toJSON = function (key) {
//
//            return isFinite(this.valueOf()) ?
//                this.getUTCFullYear()     + '-' +
//                f(this.getUTCMonth() + 1) + '-' +
//                f(this.getUTCDate())      + 'T' +
//                f(this.getUTCHours())     + ':' +
//                f(this.getUTCMinutes())   + ':' +
//                f(this.getUTCSeconds())   + 'Z' : null;
//        };
//
//        String.prototype.toJSON      =
//            Number.prototype.toJSON  =
//            Boolean.prototype.toJSON = function (key) {
//                return this.valueOf();
//            };
//    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

//        if (value && typeof value === 'object' &&
//                typeof value.toJSON === 'function') {
//            value = value.toJSON(key);
//        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }


    /**
     * @param {*} value
     * @param {(Array.<string>|(function(string,*):*)|null)=} replacer
     * @param {(number|string)=} space
     * @return {string}
     */
    json.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

        var i;
        gap = '';
        indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

        if (typeof space === 'number') {
            for (i = 0; i < space; i += 1) {
                indent += ' ';
            }

// If the space parameter is a string, it will be used as the indent string.

        } else if (typeof space === 'string') {
            indent = space;
        }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

        rep = replacer;
        if (replacer && typeof replacer !== 'function' &&
                (typeof replacer !== 'object' ||
                typeof replacer.length !== 'number')) {
            throw new Error('JSON.stringify');
        }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

        return str('', {'': value});
    };


    /**
     * @param {string} text
     * @param {(function(string,*):*)=} reviver
     * @return {*}
     */
    json.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

        var j;

        function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
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


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) {
            text = text.replace(cx, function (a) {
                return '\\u' +
                    ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            });
        }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

        if (/^[\],:{}\s]*$/
                .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

            j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

            return typeof reviver === 'function' ?
                walk({'': j}, '') : j;
        }

// If the text is not JSON parseable, then a SyntaxError is thrown.

        throw new SyntaxError('JSON.parse');
    };
}());
// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/template.js

/**
 * @param {string} templateString
 * @private
 * @return {string}
 */
template.evaluate = function(templateString) {
  templateString = $.trim(templateString);

  var evaluatedValue = "";

  if (window[GLOBAL] && window[GLOBAL][GLOBAL_DATA]) {
    // check if should be parsed as a url parameter
    var urlParamMatch = templateString.match(template.URL_PARAM_REGEX);
    if (urlParamMatch) {
      var paramName = urlParamMatch[1];
      var paramValue = window[GLOBAL][GLOBAL_DATA]['visitor']['params'][paramName];
      if (paramValue === undefined) {
        paramValue = "";
      }
      evaluatedValue = paramValue;
    }
    else {
      var path = templateString.split(".");
      var value = window[GLOBAL];
      for (var i = 0, nComponents = path.length; i < nComponents; i++) {
        value = value[path[i]];
        if (value === undefined || value === null) {
          value = "";
          break;
        }
      }

      evaluatedValue = "" + value;
    }
  }

  timer.addEvent("Template", templateString + " evaluated to: '" + evaluatedValue + "'");

  return evaluatedValue;
};

/**
 * @param {string} originalCode
 * @return {string}
 */
template.render = function(originalCode) {
  return originalCode.replace(template.TEMPLATE_REGEX, template.replacer);
};

/**
 * @param {string} matchedSubstring
 * @param {string} capturedSubstring
 * @private
 */
template.replacer = function(matchedSubstring, capturedSubstring) {
  return template.evaluate(capturedSubstring);
};

/**
 * @const
 * @private
 * A somewhat restrictive and somewhat optimized regular expression for
 * recognizing template tags. May want to check performance when making
 * updates, since all variation code gets run against this. Including
 * the space character in the negative character class drastically
 * decreases performance.
 */
template.TEMPLATE_REGEX = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g;


/**
 * @const
 * @private
 * Regex for templates specifying URL parameters. This overrides the
 * default path traversal in case users have keys involving the .
 * character.
 */
template.URL_PARAM_REGEX = /^data\.visitor\.params\.(.*)$/;
// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/segmenter.js

//Implicitly requires 'optly.Visitor' for initialize
//
/**
 *
 * @param {optly.Visitor=} visitor_ Optional visitor to use instead of globalVisitor (for testing)
 */
segmenter.initialize = function(visitor_) {
  var sVisitor = visitor_ || visitor;
  segmenter.loadSegmentsCookie(sVisitor);
  segmenter.evaluateSegments();
  segmenter.addChangeHandler(segmenter.saveSegmentsCookie);
  segmenter.callChangeHandlers();
  integrator.loadThirdPartySegments(sVisitor);
};

/**
 * Loads segments from the cookie which is simply a json dictionary of the form 
 * {segmentId: "segmentValue", segmentId2:"segmentValue2"}
 * @private
 * @param {optly.Visitor} visitor
 */
segmenter.loadSegmentsCookie = function(visitor) {
  timer.addEvent("Segmenter", "Loading segments cookie.");
  var segmentsFromCookie = cookie.get(SEGMENTS_COOKIE_NAME);
  if (!segmentsFromCookie) {
    return;
  }

  try {
    segmentsFromCookie = /** @type {Object} */ (json.parse(segmentsFromCookie));
  }
  catch (e) {
    // cookie JSON is malformed
    segmentsFromCookie = {};
  }

  each(segmentsFromCookie, function(id, value) {
    var segment = data.getSegment(id);
    timer.addEvent("Segmenter", "Segments cookie contains segment id: " + id);
    if (segment && segment['audience_id']) {
      // addToAudience will update associated segment
      visitor.addToAudience(segment['audience_id']);
    } else if (segment && segment['dimension_id']) {
      // setDimensionValue will update associated segment
      visitor.setDimensionValue(segment['dimension_id'], value, false);
    } else {
      segmenter.visitorSegments[id] = value;
    }
  });
};

/**
 * Saves segments to the cookie.
 */
segmenter.saveSegmentsCookie = function() {
  var prunedSegments = {};
  each(segmenter.visitorSegments, function(id, value) {
    if (value) {
      prunedSegments[id] = value;
    }
  });
  cookie.set(SEGMENTS_COOKIE_NAME, json.stringify(prunedSegments), directive.trackingCookieExpiration);
};

segmenter.addChangeHandler = function(subscriber) {
  segmenter.changeHandlers.push(subscriber);
};

/**
 * Adds the user to the specified segment with the passed segmentValue. If segmentValue is not supplied
 * the segmentValue will default to true. Used by the API and the integrator to explicitly set segment values.
 * @param {string} segmentId
 * @param {*} segmentValue
 */
segmenter.addToSegment = function(segmentId, segmentValue) {
  if (segmentId && !isNaN(parseInt(segmentId, 10))) {
    if (!segmentValue && segmentValue !== "") {
      segmentValue = true;
    }
    segmenter.visitorSegments[segmentId] = segmentValue;
    segmenter.callChangeHandlers();
  } else {
    timer.addEvent("Segmenter", "Unable to find segment for ID: " + segmentId);
  }
};

/**
 * Notifies subscribers that the user's segments have changed. Notable consumers
 * include the API and the segmenter.
 *
 */
segmenter.callChangeHandlers = function() {
  each(segmenter.changeHandlers, function(changeHandler) {
    changeHandler();
  });
};

/**
 * Evaluates and sets the value of a single segment iff its conditions are met.
 * @return {{addPasses: boolean, segmentValue: (string|null)}}
 */
segmenter.evaluateSegment = function(segmentId) {
  timer.addEvent("Segmenter", "Evaluating Segment " + segmentId);
  var addPasses = condition.passesTests(segmentId, {
    "objectType": "segment"
  });
  segmenter.tellPreviewAboutSegment(segmentId, "add");

  if (addPasses) {
    var segmentValue = segmenter.evaluateSegmentValue(segmentId);
    if (segmentValue !== null) {
      segmenter.addToSegment(segmentId, segmentValue);
    }
  }
  return {addPasses: addPasses, segmentValue: segmentValue};
};

/**
 * Evaluates all the segments, and puts the visitor in a segment
 * if they match the conditions.
 */
segmenter.evaluateSegments = function() {
  timer.addEvent("Segmenter", "Evaluating all segments.");
  var segmentIds = data.getSegmentIds();
  for (var i = 0; i < segmentIds.length; i++) {
    var segmentId = segmentIds[i];

    if (data.getSegmentAPIOnly(segmentId)) {
      timer.addEvent("Segmenter", "Not doing anything since segment " + segmentId + " is api only.");
    }
    else {
      timer.addEvent("Segmenter", "Testing whether to add to segment " + segmentId);
      if (condition.isReadyToTest(segmentId)) {
        segmenter.evaluateSegment(segmentId);
      }
      else {
        api.addGeoDelayedSegment(segmentId);
      }
    }
  }
};

/**
 * Returns the value for the specified segmentId. If the segmentValueType for the segment is
 * unknown then true is returned. If null is returned then the segment value has been set
 * previously and its value could not be determined when evaluated this time.
 *
 * @param {string} segmentId
 * @private
 */
segmenter.evaluateSegmentValue = function(segmentId) {
  var segmentValueType = data.getSegmentValueType(segmentId);
  var val = null, fallbackVal = null;
  switch (segmentValueType) {
    case "browser":
      val = condition.facade.getBrowserId();
      fallbackVal = "unknown";
      break;
    case "campaign":
      val = condition.facade.getCampaign();
      fallbackVal = "none";
      break;
    case "country":
      val = condition.facade.getLocation()['country'];
      fallbackVal = "unknown";
      break;
    case "language":
      val = condition.facade.getBrowserLanguage();
      fallbackVal = "none";
      break;
    case "mobile":
      val = condition.facade.getMobileId() !== "unknown";
      break;
    case "os":
      val = condition.facade.getPlatform().id;
      fallbackVal = "unknown";
      break;
    case "referrer":
      val = condition.facade.getReferringDomain();
      fallbackVal = "none";
      break;
    case "source_type":
      val = condition.facade.getSourceType();
      fallbackVal = "direct";
      break;
    default:
      return "true";
  }
  if (val === null) {
    if (!segmenter.visitorSegments.hasOwnProperty(segmentId)) {
      // only replace with fallback val if not already set
      val = fallbackVal;
    } else {
      return null;
    }
  }
  return segmenter.standardizeValue(val);
};


/**
 * Returns one of the following:
 *   "campaign" = comes from an ad campaign
 *   "referral" = comes from a third party non-search website
 *   "search" = comes from a search engine
 *   Otherwise null (use existing value or fallback value defined by caller)
 * @return {string|null}
 */
segmenter.getSourceType = function(){
  var referrer = condition.facade.getReferrer();

  if (condition.facade.getQueryParameter("utm_source") || condition.facade.getQueryParameter("gclid") || condition.facade.getQueryParameter("otm_source")) {
    return "campaign";
  }

  var SEARCH_TESTS = [
    // non-SSL google search
    "google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)",
    // SSL google search sets a referrer with no path
    "https://(www)?\\.google\\..*?/$",
    "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)",
    "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search",
    "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"
  ];
  for (var i = 0; i < SEARCH_TESTS.length; i++) {
    var searchRegExp = SEARCH_TESTS[i];
    var match = referrer.match(searchRegExp);
    if (match) {
      return "search";
    }
  }
  // Referrer values of null & '' are conflated here as the getter for referrer can return either
  if (referrer && user.getDomain(referrer) !== user.getDomain(condition.facade.getCurrentUrl())) {
    return "referral";
  }

  return null;
};

/**
 * Returns a list of all segmentsIds that the user has been bucket for(aka that the user has a value for). 
 * Used by conditions.
 *
 * @return {Array.<string>}
 */
segmenter.getSegmentsList = function() {
  var segmentsList = [];
  each(segmenter.visitorSegments, function(segmentId, segmentValue) {
    if (segmentValue) {
      segmentsList.push(segmentId);
    }
  });
  return segmentsList;
};

segmenter.getSegmentTrackingData = function() {
  var segmentsTrackingData = {};
  each(segmenter.visitorSegments, function(segmentId, segmentValue) {
    if (segmentValue) {
      segmentsTrackingData[String(segmentId)] = segmentValue;
    }
  });

  return segmentsTrackingData;
};

segmenter.getSegmentValue = function(segmentId) {
  return segmenter.visitorSegments[segmentId];
};

segmenter.getSegmentValueFromType = function(segmentValueType) {
  return each(segmenter.visitorSegments, function(segmentId, segmentValue) {
    if (data.getSegmentValueType(segmentId) == segmentValueType) {
      return segmentValue;
    }
  });
}

/**
 * Clears the visitorSegments object but does not update the cookie or the api.
 * It is used for testing and probably not what you want. You probably want removeFromAllSegments.
 */
segmenter.reset = function() {
  segmenter.visitorSegments = {};
};

/**
 * @private
 * @param {Object} data
 */
segmenter.handleOfflineSegmentResponse = function(data) {
  var segmentId;
  for (segmentId in data.map){
    log("Segmenter", "Offline segment request returned: %s, %s",
        segmentId, data.map[segmentId]);
    segmenter.addToSegment(segmentId, data.map[segmentId]);
  }
};
/**
 * Removes the user from a segment and notifies subscribers that the user's segments
 * have been change (aka saves the changes).
 *
 * @param {string} segmentIdOrAPIName
 * @param {boolean=} saveChanges If false is passed then segmenter change subscribers are not notified
 *   which has the effect of not saving the change.
 */
segmenter.removeFromSegment = function(segmentIdOrAPIName, saveChanges) {
  var segmentId = data.getSegmentIdByIdentifier(segmentIdOrAPIName) || segmentIdOrAPIName;

  if (segmenter.visitorSegments[segmentId]) {
    segmenter.visitorSegments[segmentId] = false;
    if (typeof saveChanges === "undefined" || saveChanges) {
      segmenter.callChangeHandlers();
    }
  } else {
    timer.addEvent("Segmenter", "Not removing " + segmentIdOrAPIName + ", not found");
  }
};

/**
 * @param {string} segmentValue
 * @param {boolean=} forceLower
 * @param {number=} maxLength
 */
segmenter.standardizeValue = function(segmentValue, forceLower, maxLength) {
  forceLower = isDefined(forceLower) ? forceLower : true;
  maxLength = maxLength || segmenter.MAX_VALUE_LENGTH;
  /* Decode the segment value so that we can take a substring of
     it without breaking the encoding. Otherwise this will cause
     errors on the backend when trying to interpret the value.

     For example:
       segmentvalue = "modelka_cz%C3%B3%C5%82enka_sukienka_pasek"
       segmentValue = String(segmentValue).toLowerCase().substring(0, 20)

     Results in:
       segmentValue == "modelka_cz%C3%B3%C5%" // Malformed URI

     Decoding first gives us:
       segmentValue == "modelka_cz%C3%B3%C5%82enka_suk" // Valid URI
   */
  segmentValue = safeDecodeUriComponent(segmentValue);
  segmentValue = String(segmentValue);
  if (forceLower) {
    segmentValue = segmentValue.toLowerCase();
  }
  segmentValue = segmentValue.substring(0, maxLength);
  return encodeURIComponent(segmentValue);
};

/**
 * @param {string} segmentId
 * @param {string} addOrRemove
 * @private
 */
segmenter.tellPreviewAboutSegment =  optly.client.preview.ENABLED ? function(segmentId, addOrRemove) {
  var addOrRemoveVerb = addOrRemove === "add" ? "adding" : "removing";
  var toOrFromPreposition = addOrRemove === "add" ? "to" : "from";

  var reason = optly.client.preview.Logger.getReason(segmentId);
  if (reason) {
    optly.client.preview.Logger.addEvent("Not " + addOrRemoveVerb + " visitor " +
               toOrFromPreposition + " segment " +
               data.getSegmentName(segmentId) +
               " because " + reason + ".",
               {'type': "explanation"});
    optly.client.preview.Logger.deleteReason(segmentId);
  }
  else {
    optly.client.preview.Logger.addEvent("Segment " + addOrRemove + " condition matches, " + addOrRemoveVerb +
                     toOrFromPreposition + " segment " + data.getSegmentName(segmentId),
                     {'type': "explanation"});
  }
} : goog.nullFunction;

/** @private */ segmenter.changeHandlers = [];

/**
 * A dictionay containing all the segments the user has been bucketed into in the format
 * {segmentId:segmentValue, segmentId2:segmentValue2}.
 *
 * @private 
 */ 
segmenter.visitorSegments = {};

/** @private */ segmenter.MAX_VALUE_LENGTH = 20;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/common.js

/***
 * Return true iff callback(value) returns true for every value in collection
 * @param collection
 * @param callback
 * @returns {boolean}
 */
var every = function(collection, callback) {
  var result = true;
  each(collection, function(item) {
    if (!callback(item)) {
      result = false;
      // short-circuit on fail
      return result;
    }
  });
  return result;
};

/***
 * Return true if callback(value) returns true for any value in collection
 * @param collection
 * @param callback
 * @returns {boolean}
 */
var any = function(collection, callback) {
  var result = false;
  each(collection, function(item) {
    if (callback(item)) {
      result = true;
      // short-circuit on pass
      return result;
    }
  });
  return result;
};

/**
 * What is the advantage of this over myArray.push?
 *
 * @param {Array} targetArray
 * @param {Array} sourceArray
 */
function appendArray(targetArray, sourceArray) {
  targetArray.push.apply(targetArray, sourceArray);
}

/**
 * @param {Array|undefined} targetArray
 * @return {boolean}
 */
function arrayContains(targetArray, key) {
  for (var i = 0; i < targetArray.length; i++) {
    if (key == targetArray[i]) {
      return true;
    }
  }
  return false;
}

/**
 * @param {string} string
 * @param {string} substring
 */
function containsString(string, substring) {
  return string.indexOf(substring) !== -1;
}

/**
 * @param {string} string
 * @param {RegExp} regEx
 */
function containsRegEx(string, regEx) {
  return Boolean(string.match(regEx));
}

/**
 * @param {Function} function_
 * @return {!Function}
 */
function curry(function_, variableArguments) {
  var boundArguments = slice(arguments, 1);

  return function() {
    var arguments_ = slice(arguments);

    prependArray(arguments_, boundArguments);

    return function_.apply(this, arguments_);
  };
}

/**
 * IMPORTANT! This each function is tricky in some subtle ways.
 *            Please use a for loop instead unless you have a good reason to
 *            prefer the each function.
 *
 * First, if you write code like this:
 *
 * function myFunction() {
 *   each([false, false, true, false], function(elem, index) {
 *     if (elem) {
 *       return true;
 *     }
 *   });
 * }
 *
 * Calling myFunction will NOT return true because the each function runs in its
 * own closure.
 *
 * Second, when iterating over arrays, the iterator function takes parameters
 * in the (elem, index) order, which is opposite of jQuery's each.
 *
 * For these reasons, it's recommended you use a for loop instead of each.
 *
 * @param {Array|Object} object
 * @param {Function} function_
 * @param {Object=} context
 */
function each(object, function_, context) {
  var value = null;

  if (isArrayLike(object)) {
    var length = object.length;

    for (var index = 0; index < length; ++index) {
      value = function_.call(context, object[index], index);

      if (isDefined(value)) {
        return value;
      }
    }
  }
  else {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        value = function_.call(context, key, object[key]);

        if (isDefined(value)) {
          return value;
        }
      }
    }
  }

  return value;
}

function map(arr, function_) {
  if (typeof arr.map === 'function') {
    return arr.map(function_);
  }
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(function_(arr[i], i));
  }
  return result;
}

function extend(target, source) {
  each(source, function(key, value) {
    target[key] = value;
  });
  return target;
}

/**
 * @param list {Array.<*>}
 * @param predicate {function(*): boolean}
 * @returns {Array.<*>}                    list of all elements in input
 *                                           list for which the predicate
 *                                           returns true; elements
 *                                           in returned list are *not*
 *                                           clones if input has objects
 */
function filter(list, predicate) {
  var filtered = [];
  for (var i = 0, len = list.length; i < len; i++) {
    var element = list[i];
    if (predicate(element)) {
      filtered.push(element);
    }
  }
  return filtered;
}

/**
 * @param {string} pattern
 * @param {...*} variableArguments
 */
function format(pattern, variableArguments) {
  var arguments_ = arguments;
  var index = 1;

  return pattern.replace(/%s/g, function() {
    return arguments_[index++];
  });
}

function inArray(value, array) {
  return each(array, function(item) {
    if (item === value) {
      return true;
    }
  }) || false;
}

function isArrayLike(object) {
  return object && typeof object === "object" &&
         object.length && typeof object.length === "number";
}

function isDefined(value) {
  return typeof value !== "undefined";
}

function isNumberLike(object) {
  return (typeof object === "number" || typeof object === "string") &&
          Number(object) == object;
}

/**
 * @param {Object} object
 * @return {Array.<string>}
 */
var keys = function(object) {
  keys = /** @type {Function} */ (Object.keys) || function(object) {
    var keys_ = [];

    each(object, function(key) {
      keys_.push(key);
    });

    return keys_;
  };

  return keys.call(null, object);
};

/**
 * Load the specified script URL asynchronously/synchronously
 *
 * @param {string} scriptUrl
 * @param {boolean=} attemptSynchronousLoad
 */
var loadScript = function(scriptUrl, attemptSynchronousLoad) {

  var loadScriptAsynchronously = function() {
    var head = document.head
               || document.getElementsByTagName('head')[0]
               || document.documentElement;
    var script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    head.appendChild(script);
  };

  if (attemptSynchronousLoad) {

    // Attempt to use document.write() to load the script (compatible with all browsers for text/html doctypes)
    try {

      if (safeToAttemptDocumentWrite()) {

        // Come up with a random id in case we add multiple scripts to the page asynchronously
        var id = 'optimizely_synchronous_script_' + Math.floor((Math.random() * 100000));

        // Prevent injection attacks (which prematurely close the quote)
        if (scriptUrl.indexOf('"') !== -1) {
          timer.addEvent('loadScript', 'Blocked attempt to load unsafe script: ' + scriptUrl);
          return;
        }

        // Splitting this up according to advice here http://javascript.info/tutorial/document-write
        // and here http://javascript.crockford.com/script.html
        document.write('<scrip' + 't id="' + id + '" src="' + scriptUrl + '"><\/scri' + 'pt>');

        // In Chrome (and possibly other browsers), there is a case when the document is safe to write to,
        // however document.write is blocked due to the invoking script being loaded asynchronously. This
        // outputs the following warning message in the console:
        //
        // "Failed to execute 'write' on 'Document': It isn't possible to write into a document from an
        // asynchronously-loaded external script unless it is explicitly opened."
        //
        // Unfortunately, this does not actually throw an error, so we have to explicitly check that the write
        // succeeded
        if ($('#' + id).length !== 1) {
          throw new Error(goog.DEBUG && 'Document.write failed to append script');
        }
      }
      else {
        throw new Error(goog.DEBUG && 'Not safe to attempt document.write');
      }

    // XHTML documents don't allow document.write(). Attempt to load via synchronous CORS
    // This is supported in all recent versions of Chrome, Firefox, Safari, IE 10+
    }
    catch (e) {
      try {
        // Using native XMLHttpRequest because jQuery does not support synchronous XDR
        var request = new XMLHttpRequest();

        request.open('GET', scriptUrl, false);
        request.onload = function() {
           eval(request.responseText);
        };
        request.onerror = function() {
          throw new Error();
        };
        request.send();

      // If CORS fails, fall back to loading asynchronously
      }
      catch (err) {
        log('Common', 'Failed to load %s synchronously', scriptUrl);
        loadScriptAsynchronously();
      }
    }
  }
  else {
    loadScriptAsynchronously();
  }
};

/**
 * @param {string} category
 * @param {string} message
 * @param {...*} variableArguments
 */
var log = function(category, message, variableArguments) {
  var console = window.console;

  if (directive.shouldLog && console && console.log) {
    var parameters = slice(arguments, 1);

    parameters[0] = "Optimizely / " + category + " / " + message;

    // IE doesn't like console.log.apply to be called directly.
    Function.prototype.apply.call(console.log, console, parameters);
  }
};

/**
 * @param {Array} targetArray
 * @param {Array} sourceArray
 */
function prependArray(targetArray, sourceArray) {
  targetArray.unshift.apply(targetArray, sourceArray);
}

/**
 * @param {string} string
 * @return {string}
 */
function quote(string) {
  return string.replace(/([\f\n\r\t\\'"])/g, "\\$1");
}

/**
 * @param {string} uriComponent
 * @return {string}
 */
function safeDecodeUriComponent(uriComponent) {
  try {
    return decodeURIComponent(uriComponent);
  }
  catch (e) {
    return uriComponent;
  }
}

/**
 * @param {Arguments|Array} array
 * @param {number=} start
 * @param {number=} end
 */
function slice(array, start, end) {
  return Array.prototype.slice.call(array, start || 0, end || array.length);
}

/**
 * @param {string} string
 * @return {string}
 */
function trim(string) {
  return string.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}

/**
 * Check to see if the document can be safely written to using document.write()
 *
 * See here for overview of document.readyState
 * http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness
 *
 * What happens when state is changed from "loading" to interactive:
 * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#stop-parsing
 *
 * @return {boolean}
 */
function safeToAttemptDocumentWrite() {
  return document.readyState === 'loading';
}

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/timer.js

/**
 * @param {string} category
 * @param {string} message
 * @param {boolean=} isVerbose
 */
timer.addEvent = function(category, message, isVerbose) {
  timer.eventQueue.push({
    date: new Date(),
    category: category,
    message: message,
    isVerbose: isVerbose || false
  });
  if (timer.shouldOutputImmediately) {
    timer.flushLogs();
  }
};

timer.enableLogging = function() {
  directive.shouldLog = true;
};

timer.enableVerboseLogging = function() {
  directive.shouldLog = true;
  directive.shouldLogVerbosely = true;
};


timer.flushLogs = function() {
  if (directive.shouldLog) {
    each(timer.eventQueue, function(event) {
      if (!event.logged && (!event.isVerbose ||
                            event.isVerbose === directive.shouldLogVerbosely)) {
        var time = +event.date;
        var lastTimeDifference = timer.lastTime ? time - timer.lastTime : 0;
        var startTimeDifference = timer.startTime ? time - timer.startTime : 0;
        var timeString = " [time " + startTimeDifference + " +" + lastTimeDifference + "]";

        log(event.category, event.message + timeString);

        timer.lastTime = time;
        if (!timer.startTime) {
          timer.startTime = time;
        }
        event.logged = true;
      }
    });
    timer.shouldOutputImmediately = true;
  }
};

/**
 * @private
 */
timer.lastTime = null;

/**
 * @private
 */
timer.startTime = null;

/** @private */ timer.eventQueue = [];
/** @private */ timer.shouldOutputImmediately = false;

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/cookie.js

/**
 * Semicolon optionally surrounded by whitespace. Suitable for splitting cookie name-value strings from document.cookie
 * Note(tyler): empty cookies have no = in IE6/7
 * @private
 */
cookie.delimiterPattern = /\s*;\s*/;
/**
 * Match the name, value for a cookie string as returned by string.split(cookie.delimiterPattern)
 * Groups: 1: cookie name, 2: cookie value
 * @private
 */
cookie.valuePattern = /^([^=]+)=?(.*)$/;

/**
 * This file contains general helper functions relating to performing operations
 * on cookies.  Any specific logic relating to running A/B tests should NOT be
 * placed in this file, since this file is intended to be a high-level cookie
 * library.
 *
 * To understand this code it is important to understand public suffixes. If you 
 * know nothing about public suffixes look at http://en.wikipedia.org/wiki/Public_Suffix_List.
 */

/**
 * Returns the cookie given by the name.
 * @param {string} name
 */
cookie.get = function(name) {
  var values = [];

  each(cookie.getAll(), function(cookie) {
    if (name === cookie.name) {
      values.push(safeDecodeUriComponent(cookie.value));
    }
  });

  if (values.length === 0) {
    return null;
  }
  if (values.length > 1) {
    log("Cookie", "Values found for %s: %s", name, values.length);
  }
  return values.pop();
};

cookie.initialize = function() {
  var hostname = document.location.hostname;

  cookie.guessedPublicSuffix = cookie.guessPublicSuffix(hostname);
  log("Cookie", "Guessed public suffix: %s", cookie.guessedPublicSuffix);
  cookie.publicSuffix = data.getPublicSuffix(hostname);
  log("Cookie", "Public suffix (from data): %s", cookie.publicSuffix);
  if (cookie.apiPublicSuffix) {
    log("Cookie", "Api public suffix (from api): %s", cookie.apiPublicSuffix);
  }
};

/**
 * Deletes a cookie from the current domain.
 * @param {string} name
 */
cookie.remove = function(name) {
  cookie.deleteFromDomain(name, cookie.getCurrentSuffix());
};

/**
 * Get all cookie name/value pairs, optionally filtered by name prefix
 * @param {string=} prefix
 * @returns {Array.<{name: string, value: string?, raw: string}>}
 */
cookie.getAll = function(prefix) {
  var results = [];
  prefix = prefix || '';

  each((document.cookie || "").split(cookie.delimiterPattern), function(cookieString) {
    var match = cookieString.match(cookie.valuePattern);
    if (match && match[1].indexOf(prefix) === 0) {
      results.push({
        name: match[1],
        value: match[2],
        raw: cookieString
      });
    }
  });

  return results;
};

/**
 * Sets a cookies value and expiration. We want to set the cookie on the highest level
 * domain(aka the public suffix). The domain on which the cookie is set is
 * resolved by:
 *   1. if a domain was specified via the api that is used
 *   2. else if a domain was sent in the "data" JSON then that is used
 *   3. else the domain is guessed using the logic in the function cookie.guessPublicSuffix
 * @param {string} name
 * @param {string} value
 * @param {number=} age time until expiration. If it's not specified the cookie will be a session cookie
 */
cookie.set = function(name, value, age) {
  var domain = cookie.getCurrentSuffix();
  var hostname = document.location.hostname;
  value = value || "";

  if (!cookie.publicSuffix && data.isRemotePublicSuffixEnabled()) {
    cookie.queue.push({
      age: age,
      name: name,
      value: value
    });
  }

  if (domain
      && domain === cookie.publicSuffix
      && domain !== cookie.guessedPublicSuffix) {
    cookie.deleteFromDomain(name, hostname);
    cookie.deleteFromDomain(name, cookie.guessedPublicSuffix);
  }

  cookie.setOnDomain(name, value, domain, age);

  var cookieValue = cookie.get(name);

  if (cookieValue === value) {
    log("Cookie", "Successful set %s=%s on %s", name, value, domain);
  }
  else {
    log("Cookie", "Setting %s on %s apparently failed (%s != %s)", name, domain,
        cookieValue, value);
    log("Cookie", "Setting %s on %s", name, hostname);
    cookie.setOnDomain(name, value, hostname, age);
    cookieValue = cookie.get(name);

    if (cookieValue === value) {
      log("Cookie", "Setting %s on %s worked; saving as new public suffix",
          name, hostname);
      cookie.guessedPublicSuffix = hostname;
    } else {
      log("Cookie", "Could not set cookie %s, disabling event tracking.", name);
      directive.shouldTrackEvents = false;
    }
  }
};

/**
 * @private
 * @param {string} name
 * @param {string} domain
 */
cookie.deleteFromDomain = function(name, domain) {
  log("Cookie", "Deleting %s on %s", name, domain);

  var parts = [
    name, "=",
    "; domain=.", domain,
    "; path=/",
    "; expires=", new Date(0).toUTCString()
  ];

  document.cookie = parts.join("");
};

/**
 * @private
 * @returns {string}
 */
cookie.getCurrentSuffix = function() {
  return cookie.apiPublicSuffix || cookie.publicSuffix || cookie.guessedPublicSuffix;
};

/**
 * Guesses the public suffix for cookies. Look at cookie.set for more info
 * on public suffix
 * @private
 * @param {string} hostname
 */
cookie.guessPublicSuffix = function(hostname) {
  var parts = hostname.split(".");
  var publicSuffix = hostname;
  var last = parts[parts.length - 1];

  if (parts.length > 2
      && parts[parts.length - 2] === "appspot"
      && last === "com") {
    publicSuffix = parts[parts.length - 3] + ".appspot.com";
  }
  else if (parts.length > 1 && inArray(last, TOP_LEVEL_DOMAINS)) {
    publicSuffix = parts[parts.length - 2] + "." + last;
  }

  return publicSuffix;
};

/**
 * @private
 * @param {string} name
 * @param {string} value
 * @param {string} domain
 * @param {number=} age
 */
cookie.setOnDomain = function(name, value, domain, age) {
  var parts = [
    name, "=", encodeURIComponent(value),
    "; domain=.", domain,
    "; path=/"
  ];

  if (age) {
    var futureDate = new Date(+new Date() + age * 1000);

    parts.push("; expires=", futureDate.toUTCString());
  }

  document.cookie = parts.join("");
};

/**
 * This function is called by the api to set the public suffix.
 * look at cookie.set for more info on the public suffix.
 * @param {string} newPublicSuffix
 */
cookie.setApiPublicSuffix = function(newPublicSuffix) {
  var currentSuffix = cookie.getCurrentSuffix();
  if (currentSuffix !== newPublicSuffix) {
    cookie.apiPublicSuffix = String(newPublicSuffix) || "";
    log("Cookie", "Api public suffix set to: %s", cookie.apiPublicSuffix);

    // reset segments cookie since it's added before API is initialized
    segmenter.saveSegmentsCookie();
    cookie.deleteFromDomain(SEGMENTS_COOKIE_NAME, currentSuffix);
  }
};

/** @private */ cookie.guessedPublicSuffix = "";
/** @private */ cookie.apiPublicSuffix = ""; // Set via API
/** @private */ cookie.publicSuffix = "";
/** @private */ cookie.queue = [];

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/facade.js


/**
 * @constructor
 * All the testFunctions call functions in this facade for their input. The segmenter also uses
 * this facade, specifically the function evaluateSegmentValue.
 * This allows the input to be mocked which is necessary for unit testing.
 * (FYI a facade is a design pattern: http://en.wikipedia.org/wiki/Facade_pattern)
 */
optly.client.Facade = function(){};
//extend was used below to make the code smaller and is equivalent to:
//optly.client.Facade.prototype.getBrowserId = user.getBrowserId;
//optly.client.Facade.prototype.getBrowserVersion = user.getBrowserVersion;
//...
extend(optly.client.Facade.prototype, /** @lends {optly.client.Facade.prototype} */{
  getBrowserId: user.getBrowserId,
  getBrowserVersion: user.getBrowserVersion,
  getMobileId: user.getMobileId,
  getBrowser: function() {
    return {
      'id': this.getBrowserId(),
      'version': this.getBrowserVersion(),
      'mobileId': this.getMobileId()
    };
  },
  /**
   * Returns the value of the url query parameter utm_campaign which is the
   * leading standard for specifying the ad campaign id
   * @return {string|null}
   */
  getCampaign: function () { return this.getQueryParameter('utm_campaign'); },
  getCookie: cookie.get,
  getDevice: user.getDevice,
  getIP: user.getIP,
  getBrowserLanguage: user.getBrowserLanguage,
  getLocation: user.getLocation,
  getCurrentUrl: user.getCurrentUrl,
  getNewVsReturning: user.getNewVsReturning,
  getIsFirstSession: user.isFirstSession,
  getAllQueryParameters: query.getAllParameters,
  getPlatform: user.getPlatform,
  getReferrer: user.getReferrer,
  getThirdPartyData: function(name) {
    var names = name.split('.');
    var thirdPartyId = names[0];
    var thirdPartyKeyPath = names.slice(1);
    return integrator.getThirdPartyData(thirdPartyId, thirdPartyKeyPath);
  },
  hasPPID: user.hasPPID,
  /**
   * Returns the referring domain, possibly stripped of www, www2, ww3, etc.
   * @return {string}
   */
  getReferringDomain: function(){
    return user.getDomain(this.getReferrer());
  },
  getSegmentsList: segmenter.getSegmentsList,
  getSourceType: segmenter.getSourceType,
  /**
   * Returns the referrer ignoring the REFERRER_REDIRECT_COOKIE_NAME cookie
   * @return {string}
   */
  getDocumentReferrer: function(){ return document.referrer; },
  /**
   * @param {string} name
   * @return {string|null}
   */
  getQueryParameter: function(name){ return query.getValue(name, this.getAllQueryParameters()); },
  getCustomTags: function(){ return api.customTags; },
  getCustomTagValue: function(tag) {
    return (this.getCustomTags() || {})[tag];
  },
  getTriggeredCustomEvents: function(){
    var customEventList = optly.client.storage.localStorage.get(CUSTOM_EVENTS_STORAGE_NAME) || {};
    var triggeredCustomEvents = /** @type Array */ customEventList[user.getId()] || [];
    // check for object data integrity (aka that it is an array)
    return isArrayLike(triggeredCustomEvents) ? triggeredCustomEvents : [];
  },
  hasSegment: function(segmentId) {
    var segments = this.getSegmentsList();
    return arrayContains(segments, segmentId);
  },
  triggeredCustomEvent: function(event) {
    return arrayContains(this.getTriggeredCustomEvents(), event);
  },
  getDate: function() {
    return new Date();
  },
  getLists: api.getLists,
  /**
   * @param {string} name
   * @return {Object|null} The list's value or null if the list's value is unknown
   */
  getListValue: function(name){
    var value = this.getLists() && this.getLists()[name];
    if(!isDefined(value)) {
      value = null;
    }
    return value;
  }
});

/** @type {optly.client.Facade} */
condition.facade = new optly.client.Facade();

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/visitor.js


/**
 *
 * @constructor
 */
optly.Visitor = function() {
  /**
   * Currently known values of each audience. If not persistent (see persistentAudiences, segmentationAudiences)
   * then value may be recalculated when isInAudience is called.
   * @type {Object.<string, boolean>}
   */
  this.audiences = {};
  /**
   * Currently known dimension values
   * @type {Object.<number, string>}
   */
  this.dimensions = {};
  /**
   * "Set" of audienceIds which are persistent (should be saved across page loads) but not derived from segments.
   * Currently only API-only audiences
   * The value is ignored.
   * @type {Object.<string, boolean>}
   * @private
   * */
  this.persistentAudiences = {};
  /**
   * "Set" of audienceIds which are derived from segments (should be persistent but not saved in persistent audiences
   * so that they are not added to the audiences cookie)
   * No audience should be in both persistentAudiences and segmentationAudiences.
   * The value is ignored.
   * @type {Object.<string, boolean>}
   */
  this.segmentationAudiences = {};
};

/**
 * Load audiences
 */
optly.Visitor.prototype.initialize = function() {
  timer.addEvent('Visitor', 'Initializing');
  this.loadPersistentAudiences();
  // Note(tyler): this apparently does a very similar thing to segmenter.loadSegmentsCookie.
  //              It may be possible to optimize it.
  each(segmenter.getSegmentsList(), goog.bind(function(segmentId) {
    timer.addEvent('Visitor', 'Found segment ' + segmentId);
    var segment = data.getSegment(segmentId);
    if (segment && segment['audience_id']) {
      timer.addEvent('Visitor', 'Adding to audience ' + segment['audience_id']);
      // don't update the segment because it is being read from a segment
      this.setInAudience(segment['audience_id'], true, {updateSegment: false});
    } else if (segment && segment['dimension_id']) {
      timer.addEvent('Visitor', 'Setting dimension value ' + segment['dimension_id']);
      this.saveDimensionValue(segment['dimension_id'], segmenter.getSegmentValue(segmentId), false);
    }
  }, this));
};

/**
 * Return whether the visitor is in the audience, or undefined if cannot be determined (error)
 * @param {string} audienceId
 * @returns {boolean|undefined}
 */
optly.Visitor.prototype.isInAudience = function(audienceId) {
  // if audience membership is either unknown or not persistent, recalculate
  var isPersistentAudience = this.persistentAudiences.hasOwnProperty(audienceId) ||
                             this.segmentationAudiences.hasOwnProperty(audienceId);
  if (!this.audiences.hasOwnProperty(audienceId) || !isPersistentAudience) {
    try {
      this.audiences[audienceId] = this.testAudienceConditions(audienceId);
    } catch(e) {
      timer.addEvent('Visitor', "Error: " + e.message);
    }
  }
  return this.audiences[audienceId];
};

/**
 * @private
 * @param {string} audienceId
 * @param {boolean} inAudience
 * @param {{persist: (boolean|undefined),
 *          savePersistentAudiences: (boolean|undefined),
 *          updateSegment: (boolean|undefined)}=} options
 */
optly.Visitor.prototype.setInAudience = function(audienceId, inAudience, options) {
  options = extend({
    /**
     * @type {boolean}
     * If true, add audience to persistentAudiences, else remove it from persistentAudiences.
     * Has no effect on segmentation audiences.
     * */
    persist: true,
    /** @type {boolean} If false, don't save the audience cookie (optimization for loops) */
    savePersistentAudiences: true,
    /** @type {boolean} If true, update associated segment (if it's a segment) */
    updateSegment: true
  }, options);

  if (!data.getAudience(audienceId)) {
    timer.addEvent('Visitor', 'Unable to find audience ' + audienceId);
    return;
  }
  this.audiences[audienceId] = inAudience;

  var segmentId = data.getAudienceSegmentId(audienceId);
  if (segmentId) {
    // add to segmentationAudiences
    this.segmentationAudiences[audienceId] = inAudience;
  } else if (options.persist) {
    this.persistentAudiences[audienceId] = inAudience;
  } else {
    delete this.persistentAudiences[audienceId];
  }

  if (segmentId && options.updateSegment) {
    this.updateSegment(segmentId, inAudience);
  }

  if (!segmentId && options.persist && options.savePersistentAudiences) {
    this.persistAudiences();
  }
};

/**
 *
 * @param audienceId
 */
optly.Visitor.prototype.addToAudience = function(audienceId) {
  this.setInAudience(audienceId, true);
};

/**
 *
 * @param audienceId
 */
optly.Visitor.prototype.removeFromAudience = function(audienceId) {
  this.setInAudience(audienceId, false);
};

/**
 *
 */
optly.Visitor.prototype.removeFromAllAudiences = function() {
  each(this.audiences, goog.bind(function(audienceId) {
    this.setInAudience(audienceId, false, {
      persist: !!this.persistentAudiences.hasOwnProperty(audienceId)
    });
  }, this));
};

optly.Visitor.prototype.getAudiences = function() {
  return this.audiences;
};

/**
 * @param dimensionId
 * @returns {*}
 */
optly.Visitor.prototype.getDimensionValue = function(dimensionId) {
  var result = undefined;
  if (this.dimensions.hasOwnProperty(dimensionId)) {
    result = this.dimensions[dimensionId];
  } else {
    try {
      result = this.calculateDimensionValue(dimensionId);
    } catch(e) {
      timer.addEvent('Visitor', "Error: " + e.message);
    }
  }
  return result;
};

optly.Visitor.prototype.getDimensionValues = function() {
  return this.dimensions;
};

/**
 * @private
 * @param {number} dimensionId
 * @param {string|null=} value
 * @param {boolean=} standardize Whether value should be cast/encoded/truncated (default true)
 * @returns {string|undefined}
 */
optly.Visitor.prototype.saveDimensionValue = function(dimensionId, value, standardize) {
  standardize = !isDefined(standardize) || standardize;
  if (isDefined(value) && value !== null && !!String(value)) {
    if (standardize) {
      value = segmenter.standardizeValue(String(value), false);
    }

    this.dimensions[dimensionId] = /** @type {string} */(value);
  } else {
    delete this.dimensions[dimensionId];
  }
  return this.dimensions[dimensionId];
};
/**
 *
 * @param {string|number} dimensionIdOrApiName
 * @param {string|null=} value If null, undefined or falsey string, will delete value, else set to standardized string value
 * @param {boolean=} standardize Whether value should be cast/encoded/truncated (default true)
 */
optly.Visitor.prototype.setDimensionValue = function(dimensionIdOrApiName, value, standardize) {
  var dimensionId = /** @type {number} */(data.getDimensionIdByApiName(dimensionIdOrApiName) || dimensionIdOrApiName);
  if (!data.getDimension(dimensionId)) {
    timer.addEvent('Visitor', 'Unable to find dimension ' + dimensionIdOrApiName);
    return;
  }

  if (data.getDimensionType(dimensionId) === 'custom_dimension') {
    value = this.saveDimensionValue(dimensionId, value, standardize);

    // update segments
    var segmentId = data.getDimensionSegmentId(dimensionId);
    if (segmentId) {
      this.updateSegment(segmentId, value);
    }
    timer.addEvent('Visitor', 'Set dimension "' + dimensionId + '" to "' + value + '"');
  } else {
    timer.addEvent('Visitor', 'Unknown dimension "' + dimensionId + '"');
  }
};

/**
 * Calculate dimension value (for non-custom dimensions only)
 * @param dimensionId
 * @returns {*}
 * @private
 */
optly.Visitor.prototype.calculateDimensionValue = function(dimensionId) {
  var conditionType =  data.getDimensionType(dimensionId) || "";
  var getterFn;
  var value;
  if (!data.getDimension(dimensionId)) {
    throw new Error(goog.DEBUG ? 'Unable to find dimension for id: ' + dimensionId : dimensionId);
  }

  if (conditionType === 'custom_dimension') {
    throw new Error(goog.DEBUG ? 'calculateDimensionValue called on custom dimension ' + dimensionId : dimensionId);
  } else {
    getterFn = optly.Visitor.getConditionGetter(conditionType);
    if (getterFn) {
      value = getterFn(data.getDimensionName(dimensionId));
    }
  }
  timer.addEvent('Visitor', 'Got dimension (' + conditionType + ') value ' + dimensionId + ': ' + json.stringify(value));
  return value;
};

/**
 * Check if the visitor is in the Audience according to audience conditions
 * @param audienceId
 * @returns {boolean}
 * @private
 */
optly.Visitor.prototype.testAudienceConditions = function(audienceId) {
  var audience = data.getAudience(audienceId);
  if (!audience) {
    throw new Error('Unable to find audience for id: ' + audienceId);
  }
  var result = condition.compoundTest(this, audience['conditions']);
  timer.addEvent('Visitor', 'Checking if in audience ' + audienceId + ': ' + result);
  return result;
};

/**
 * Add to segment if truthy, remove if falsy
 * @private
 * @param segmentId
 * @param value
 */
optly.Visitor.prototype.updateSegment = function(segmentId, value) {
  if (!!value) {
    segmenter.addToSegment(segmentId, value);
  } else {
    segmenter.removeFromSegment(segmentId);
  }
};

/**
 * Load audiences which are persisted in the audience cookie.
 * @private
 */
optly.Visitor.prototype.loadPersistentAudiences = function() {
  var audiencesCookie = cookie.get(AUDIENCE_COOKIE_NAME);
  if (audiencesCookie && audiencesCookie.length > 0) {
    each(audiencesCookie.split(','), goog.bind(function(audienceId) {
      // no need to save persistent audiences since we just read it out of the cookie
      this.setInAudience(audienceId, true, {
        persist: true,
        savePersistentAudiences: false
      });
    }, this));
  }
};


/**
 * Persist audiences that the user is a part of, that aren't already persisted by segments
 * @private
 */
optly.Visitor.prototype.persistAudiences = function() {
  var audiences = [];
  each(this.persistentAudiences, goog.bind(function(audienceId) {
    if (this.audiences[audienceId]) {
      audiences.push(audienceId);
    }
  }, this));
  audiences.sort();
  cookie.set(AUDIENCE_COOKIE_NAME, audiences.join(','), DEFAULT_TRACKING_COOKIE_EXPIRATION);
};

/**
 * Return the getter function associated with a dimension type
 * Since condition.facade gets overridden by spoofing data in preview this function
 * must not cache reference to `condition.facade`
 *
 * Note that campaign and source_type are values derived from the segementer
 * which in turn derives values from condition.facade
 *
 * @param {string} dimensionType
 */
optly.Visitor.getConditionGetter = function(dimensionType) {
  var getters = {
    'browser': goog.bind(condition.facade.getBrowser, condition.facade),
    'browser_version': goog.bind(condition.facade.getBrowser, condition.facade),
    // "code" intentionally omitted since there is no "static" way to determine the code result
    'campaign': goog.partial(segmenter.getSegmentValueFromType, 'campaign'),
    'cookies': goog.bind(condition.facade.getCookie, condition.facade),
    'custom_tag': goog.bind(condition.facade.getCustomTagValue, condition.facade),
    'device': goog.bind(condition.facade.getDevice, condition.facade),
    'event': goog.bind(condition.facade.triggeredCustomEvent, condition.facade),
    'first_session': goog.bind(condition.facade.getIsFirstSession, condition.facade),
    'has_ppid': goog.bind(condition.facade.hasPPID, condition.facade),
    'ip': goog.bind(condition.facade.getIP, condition.facade),
    'language': goog.bind(condition.facade.getBrowserLanguage, condition.facade),
    'list': goog.bind(condition.facade.getListValue, condition.facade),
    'location': goog.bind(condition.facade.getLocation, condition.facade),
    'query': goog.bind(condition.facade.getQueryParameter, condition.facade),
    'platform': goog.bind(condition.facade.getPlatform, condition.facade),
    'referrer': goog.bind(condition.facade.getReferrer, condition.facade),
    'segment': goog.bind(condition.facade.hasSegment, condition.facade),
    'source_type': goog.partial(segmenter.getSegmentValueFromType, 'source_type'),
    'third_party_dimension': goog.bind(condition.facade.getThirdPartyData, condition.facade),
    'time_and_day': goog.bind(condition.facade.getDate, condition.facade),
    'url': goog.bind(condition.facade.getCurrentUrl, condition.facade),
    'visitor': goog.bind(condition.facade.getNewVsReturning, condition.facade)
  };

  return getters[dimensionType];
}

/**
 * Global "Visitor" object to use if no override visitor is supplied (this is the default in production)
 * @type {optly.Visitor}
 */
var visitor = new optly.Visitor();

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/diagnostic.js

/** @define {boolean} */
optly.client.diagnostic.ENABLED = false;

// More to come...

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/iapi.js

/**
 * Methods that we can use to manipulate the behavior of optimizely from outside (like the normal API)
 * but which we don't want users to do.
 *
 * Granted, they can anyway, so make sure nothing in here is too dangerous
 */

/**
 * Helper method to reinitialize segments (for testing purposes only)
 * @param {optly.Visitor=} visitor
 */
iapi.evaluateSegments = function(visitor) {
  segmenter.reset();
  segmenter.initialize(visitor);
};

/**
 *
 * @param {optly.Visitor=} visitor
 */
iapi.initialize = function(visitor) {
  window[GLOBAL]['iapi'] = {
    'evaluateSegments': goog.partial(iapi.evaluateSegments, visitor)
  };
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/evaluator.js


/**
 * The below type def defines the fields of a "step" object. The typedef is currently not
 * enforced and is here for documenation purposes only.
 * typedef {eventName: (string|undefined), //the event name to register for on the element
 *            selector: (string|Array.<string>|undefined), //a single jquery selector or several jquery selectors that select the relevant element
 *            type: (string|undefined),
 *            waitUntilSelectorReady: (boolean|undefined), //a bool indicating if step can be done without waiting for selector to return something
 *            revenue: (number|undefined), //value of an event in cents
 *            experimentIds: (undefined),
 *            code: (undefined|string), //the code that should be ran. This may be multible lines but will always be a single string.
 *            variationId: (undefined)
 *            }
 *
 * There are effectivly two types of steps 
 * 1) A step that runs code. If the step runs code then the step.selector field may actually be an array of
 *    selectors rather than a single selector.
 * 2) A step that tracks(registers) an event on an element. If there is revenue associated with the event then
 *    then the step will two pieces of additional meta data, step.revenue and step.experimentIds
 */

/**
 * Check and wait for element to be available and then bind handlers.
 *
 * @param {string} elementSelector
 * @param {string} eventName
 */
evaluator.bindTrackElementFromApi = function(elementSelector, eventName) {
  if (!elementSelector || !eventName) {
    return;
  }

  if (evaluator.isDocumentReady) {
    // Add binding immediately because evaluator has already run.
    timer.addEvent("Evaluator", "Bound event " + eventName + " to selector " + elementSelector);
    evaluator.bindTrackElement(elementSelector, eventName);
  }
  else {
    // Add step to be included in evaluator.doSteps().
    var step = {
      eventName: eventName,
      selector: elementSelector,
      type: "event '" + eventName + "' (click goal)",
      waitUntilSelectorReady: true
    };

    timer.addEvent("Evaluator", "Add step to bind event " + step.eventName + " to selector " + step.selector);
    evaluator.steps.push(step);
  }
};

/**
 * @param {Array=} experimentIds
 * @param {Array=} activatedExperimentIds
 */
evaluator.evaluate = function(experimentIds, activatedExperimentIds) {
  if (!directive.isEnabled) {
    return;
  }

  if (!isArrayLike(experimentIds)) {
    experimentIds = [];
    evaluator.tellPreviewAboutExperiments(activatedExperimentIds);
  }
  else {
    evaluator.tellPreviewAboutExperiments(experimentIds);
  }

  experimentIds = experimentIds.concat(evaluator.evaluateQueue);
  evaluator.evaluateQueue = [];

  for (var i = 0; i < experimentIds.length; i++) {
    if (!arrayContains(evaluator.evaluatedExperimentIds, experimentIds[i])) {
      evaluator.evaluatedExperimentIds.push(experimentIds[i]);
    }
  }

  var newSteps = plan.getSteps(experimentIds);
  appendArray(evaluator.steps, newSteps);
  evaluator.doSteps();
};

evaluator.doSteps = function() {
  var shouldWait = false;

  evaluator.timeoutId = null;
  timer.addEvent("Evaluator", evaluator.waitCount + " times waited");

  while (!shouldWait && evaluator.steps.length > 0) {
    timer.addEvent("Evaluator", evaluator.steps.length + " steps remaining");

    var step = evaluator.steps.shift();

    shouldWait = evaluator.shouldWaitBeforeStep(step);

    if (shouldWait) {
      evaluator.steps.unshift(step);
    }
    else {
      if (step.eventName) {
        evaluator.doneWithSafeSteps();
        timer.addEvent("Evaluator", "Bound event " + step.eventName + " to selector " + step.selector);
        var options = {};
        if (step.revenue) {
          options = {
            revenue: step.revenue,
            experimentIds: step.experimentIds
          };
        }
        evaluator.bindTrackElement(step.selector, step.eventName, options);
      }
      else if (step.code) {
        timer.addEvent("Evaluator", "Run code: " + step.code);
        evaluator.evaluateCode(step.code, step.variationId);
      }
    }
  }

  if (shouldWait) {
    var waitInterval = evaluator.waitCount === 0
                       ? FIRST_EVALUATION_WAIT_INTERVAL
                       : EVALUATION_WAIT_INTERVAL;
    evaluator.timeoutId = setTimeout(evaluator.doSteps, waitInterval);
    evaluator.waitCount++;
  }
  else {
    timer.addEvent("Evaluator", evaluator.waitCount + " total times waited");
    evaluator.doneWithSafeSteps();
  }
};

/**
 * This function is called when all safeSteps (steps which might modify the dom and cause flash) 
 * have been executed. There may still be eventSteps (steps which only register click handlers and such)
 * that need to be executed. This function may be called several times (for example by geo) so ensure 
 * that any code changes work correctly on multiple invocations.
 * @private
 */
evaluator.doneWithSafeSteps = function() {
  // If we are currently "Potential Flash" timerange this call will end the time range.
  optly.client.rum.instance.recordEvent("flash");
  if(api.geoDelayedExperiments.length === 0){
    optly.client.rum.instance.recordEvent("flashGeo");
  }
};

/**
 * @param {string} experimentId
 */
evaluator.enqueue = function(experimentId) {
  evaluator.evaluateQueue = evaluator.evaluateQueue || [];
  evaluator.evaluateQueue.push(experimentId);
};

evaluator.getActiveExperimentIds = function() {
  return evaluator.evaluatedExperimentIds.concat(evaluator.evaluateQueue);
};

evaluator.getEvaluatedExperimentIds = function() {
  return evaluator.evaluatedExperimentIds;
};

/**
 * @param {string} experimentId
 */
evaluator.isInQueue = function(experimentId) {
  return inArray(experimentId, evaluator.evaluateQueue);
};

/**
 * Execute project level javascript
 */
evaluator.evaluateProjectCode = function() {
  var code = data.getProjectCode();

  if (code) {
    timer.addEvent("Evaluator", "Running project level javascript.");
    evaluator.evaluateCode(code);
  }
};

/**
 * @param {string} code
 * @param {string=} variationId
 */
evaluator.evaluateCode = function(code, variationId) {
  code = template.render(code);

  if (redirect.getRedirectURL(code)) {
    timer.addEvent("Evaluator", "Redirect detected");
    if (redirect.okToRedirect(code)) {
      timer.addEvent("Evaluator", "OK to redirect");
      var noCookieRedirect = redirect.detectNoCookieRedirect(code);
      timer.addEvent("Evaluator",
                     "setting a redirect cookie" + (variationId ? " for variation: " + variationId : ""));
      redirect.setRedirectCookie(noCookieRedirect, variationId);
      redirect.setReferrerCookie();
    }
    else {
      timer.addEvent("Evaluator", "NOT OK to redirect");
      return;
    }
  }

  eval("var $j = $;");
  try {
    // Chrome has a problem where you see JSON objects or unstyled DOM objects before doing a redirect. (BUG-541)
    // Hiding body makes it look better. This needs to be done as a style in head because the flash still happens
    // if we wait until we can access the body element. We then unhide the body if this page hasn't redirected in 1.7s
    // just in case redirecting wasn't intent in code after _optimizely_redirect comment for some strange reason
    if (!!redirect.getRedirectURL(code)) {
      $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
      timer.addEvent("Evaluator", "Hiding body before redirect");

      // Attempt to detect if the redirect is 'standard', meaning it's variation code has not been
      // altered or customized to potentially not redirect. In this case, we never want to unhide
      // the body because sites with slow response times will show horrible flash.
      var isStandardRedirect = redirect.redirectRegexParams.test(code) ||
                               redirect.redirectRegex.test(code) ||
                               redirect.redirectRegexLegacy.test(code);

      // Keeping the body hidden can be forced with this markup in the redirect comment: _keep_body_hidden=true
      var keepBodyHidden = /_keep_body_hidden=(\S+)/.test(code);
      if (isStandardRedirect || keepBodyHidden) {
        timer.addEvent("Evaluator", "Standard redirect detected - Will not unhide body.");
      }
      else {
        setTimeout(function () {
          if (document.body) {
            document.body.style.visibility = "visible";
            document.body.style.display = "block";
            timer.addEvent("Evaluator", "Unhiding body -- did not redirect");
            optly.client.rum.instance.recordEvent("bodyUnhidden");
          }
        }, 1700);
      }
    }
    eval(code);
  }
  catch (exception) {
    var shouldLog = directive.shouldLog;

    directive.shouldLog = true;
    timer.addEvent("Evaluator", "Error: " + exception.message);
    timer.addEvent("Evaluator", "Code: " + code);
    directive.shouldLog = shouldLog;
    timer.addEvent("Evaluator", "Failed to run code: " + exception.message);
  }
};

/**
 * @param {string} elementSelector
 * @param {string} eventName
 * @param {Object=} options
 */
evaluator.bindTrackElement = function(elementSelector, eventName, options) {
  options = options || {};
  if (evaluator.alreadyBoundClickTrackingEvents[elementSelector]) {
    if (evaluator.alreadyBoundClickTrackingEvents[elementSelector][eventName]) {
      // for a given selector, ensure that click tracking with a given
      // custom event only happens once
      return;
    }
  }

  var handler = function(e) {
    tracker.addLogEvent(eventName, "custom", options);
  };

  var eventsEnum = {
    cancel: "touchmove",
    confirm: "touchend",
    detect: "touchstart"
  };

  var elem = $(elementSelector);
  if (elem.length > 0) {
    // Use a bind selector to make it more likely to catch navigation clicks.
    // Remove confirmation event listeners.
    var cancel = function() {
      elem.unbind(eventsEnum.confirm, handler);
      elem.unbind(eventsEnum.cancel, cancel);
      // When a touchstart is detected, mousedown bind can be removed in order to prevent a double event to be triggered
      elem.unbind("mousedown", handler);
    };

    // Confirm next event is click-like and not scroll-like.
    var confirm = function() {
      // Remove any existing listeners.
      cancel();
      // Listen for scroll-like events and cancel click confirmation.
      elem.bind(eventsEnum.cancel, cancel);
      // Listen for valid click-like events and log them.
      elem.bind(eventsEnum.confirm, handler);
    };

    // Listen for initial click-like event.
    elem.bind("mousedown", handler);
    elem.bind(eventsEnum.detect, confirm);
  } else {
    elem = $("html");
    // Use a delegate selector to catch AJAX loaded elements.
    // Remove confirmation event listeners.
    var cancel = function() {
      elem.undelegate(elementSelector, eventsEnum.confirm, handler);
      elem.undelegate(elementSelector, eventsEnum.cancel, cancel);
      // When a touchstart is detected, mousedown bind can be removed in order to prevent a double event to be triggered
      elem.undelegate(elementSelector, "mousedown", handler);
    };

    // Confirm next event is click-like and not scroll-like.
    var confirm = function() {
      // Remove any existing listeners.
      cancel();
      // Listen for valid click-like events and log them.
      elem.delegate(elementSelector, eventsEnum.confirm, handler);
      // Listen for scroll-like events and cancel click confirmation.
      elem.delegate(elementSelector, eventsEnum.cancel, cancel);
    };

    // Listen for initial touch event
    elem.delegate(elementSelector, "touchstart", confirm);
    // Directly register the event in case is a mouse event
    elem.delegate(elementSelector, "mousedown", handler);
  }

  if (!evaluator.alreadyBoundClickTrackingEvents[elementSelector]) {
    evaluator.alreadyBoundClickTrackingEvents[elementSelector] = {};
  }
  evaluator.alreadyBoundClickTrackingEvents[elementSelector][eventName] =
    "mousedown touchstart";
};

/**
 * @param {string=} code
 */
evaluator.handleDocumentReady = function(code) {
  optly.client.rum.instance.recordEvent("docReady");
  evaluator.isDocumentReady = true;

  if (evaluator.timeoutId !== null) {
    timer.addEvent("Evaluator", "Document is ready");
    clearTimeout(evaluator.timeoutId);
    if (evaluator.delayDomExecuteMilliseconds > 0) {
      setTimeout(evaluator.doSteps, evaluator.delayDomExecuteMilliseconds);
    }
    else {
      evaluator.doSteps();
    }
  }
};

/**
 * @param {number} delay
 */
evaluator.setDelayDomExecute = function(delay) {
  evaluator.delayDomExecuteMilliseconds = delay;
};

/**
 * @param {Object} step
 */
evaluator.shouldWaitBeforeStep = function(step) {
  var shouldWait = false;

  if (step.waitUntilDocumentReady && !evaluator.isDocumentReady) {
    timer.addEvent("Evaluator", "Document not ready yet");
    shouldWait = true;
  }
  else if (step.waitUntilSelectorReady && !evaluator.isDocumentReady) {
    var selectors = step.selector;

    if (selectors) {
      selectors = isArrayLike(selectors) ? selectors : [selectors];

      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        if (selector === null || selector === undefined || !selector.length) {
          continue;
        }

        var selection = (selector == "document" ? $(document) : $(selector));
        if (selection.length === 0) {
          timer.addEvent("Evaluator", "'" + selector + "' not found");
          shouldWait = true;
        }
      }
    }
  }

  return shouldWait;
};

/**
 * @param {Array=} experimentIds
 * @private
 */
evaluator.tellPreviewAboutExperiments = function(experimentIds) {
  if (!experimentIds) {
    experimentIds = data.getExperimentIds();
  }
  for (var i = 0; i < experimentIds.length; i++) {
    var experimentId = experimentIds[i];
    var reason = optly.client.preview.Logger.getReason(experimentId);
    if (reason) {
      optly.client.preview.Logger.addEvent("Not activating " +
                 data.getExperimentString(experimentId) +
                 " because " + reason + ".",
                 {"type": "explanation"});
      optly.client.preview.Logger.deleteReason(experimentId);
    }
    else {
      optly.client.preview.Logger.addEvent("Activating " +
                 data.getExperimentString(experimentId) + ".",
                 {"type": "activation", "experimentId": experimentId});
    }
  }
};

/** @private */ evaluator.alreadyBoundClickTrackingEvents = {};
/** @private */ evaluator.evaluatedExperimentIds = [];
/** @private */ evaluator.evaluateQueue = evaluator.evaluateQueue || []; // contains an array of experiment ids to evaluate
/** @private */ evaluator.delayDomExecuteMilliseconds = 0;
/** @private */ evaluator.isDocumentReady = false;
/** @private */ evaluator.steps = [];
/** @private */ evaluator.timeoutId = null;
/** @private */ evaluator.waitCount = 0;

/**
 * Call Optimizely's DOM Ready handler after all other $(document).ready() events
 *
 * Many websites use the $(document).ready() function to run scripts on their site
 * that manipulate content. Since client runs at the top of the page, our $(document).ready()
 * event will end up at the top of the $(document).ready() stack if we don't pop it to the bottom
 * using a setTimeout call
 *
 * 50ms is an arbitrary timeout to wait a little bit after $(document).ready() to fire evaluator.handleDocumentReady
 */
$(function() {
  setTimeout(function() {
    evaluator.handleDocumentReady();
  }, 50);
});

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/time_and_day_interval.js
/**
 * Provides functionality for serializing/unserializing a time and day interval
 * Also used for testing whether a day is in an interval
 */

/**
 * @private
 * @type {string}
 */
optly.timeAndDayInterval.DELIM = '_';
/**
 * @private
 * @type {string}
 */
optly.timeAndDayInterval.DAYS_DELIM = ',';
/**
 * @private
 * @type {string}
 */
optly.timeAndDayInterval.TIME_DELIM = ':';

/**
 * Serializes a time interval
 *
 * start_time and end_time must be in 24 hour 'HH:MM' format
 * @param data { { start_time: string, end_time: string, days: array.<string> } }
 * @return {string} ex: '10:00_15:00_monday,tuesday,wednesday'
 */
optly.timeAndDayInterval.serialize = function(data) {
  return (
    data.start_time +
    optly.timeAndDayInterval.DELIM +
    data.end_time +
    optly.timeAndDayInterval.DELIM +
    data.days.join(optly.timeAndDayInterval.DAYS_DELIM)
  );
};

/**
 * Deserializes a time interval
 *
 * @param serialized {string} ex: '10:00_15:00_monday,tuesday,wednesday'
 * @return { { start_time: string, end_time: string, days: Array } }
 */
optly.timeAndDayInterval.deserialize = function(serialized) {
  var parts = serialized.split(optly.timeAndDayInterval.DELIM);
  if (parts.length !== 3) {
    throw new Error("Invalid time and day string " + serialized);
  }
  var days = parts[2].split(optly.timeAndDayInterval.DAYS_DELIM);

  return {
    start_time: parts[0],
    end_time: parts[1],
    days: days
  };
};

/**
 * Takes a 24h time string 'HH:MM' and converts it to minutes
 *
 * @param {string} timeStr
 * @return {number}
 */
optly.timeAndDayInterval.timeStringToMinutes = function(timeStr) {
  var parts = timeStr.split(optly.timeAndDayInterval.TIME_DELIM);
  if (parts.length !== 2) {
    throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + timeStr);
  }

  return (parseInt(parts[0], 10) * 60) + (parseInt(parts[1], 10));
};

/**
 * Tests whether the supplied date falls within the given interval
 * Uses local time
 *
 * Note: does not take into account seconds, so 1:00:30pm is equivalent
 * to 1:00pm in the comparison.
 *
 * @param intervalStr {string} serialized interval string
 * @param currentDate {Date}
 * @return {boolean}
 */
optly.timeAndDayInterval.test = function(intervalStr, currentDate) {
  var days        = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var interval    = optly.timeAndDayInterval.deserialize(intervalStr);
  var startTime   = optly.timeAndDayInterval.timeStringToMinutes(interval.start_time);
  var endTime     = optly.timeAndDayInterval.timeStringToMinutes(interval.end_time);
  var currentTime = (currentDate.getHours() * 60) + currentDate.getMinutes();
  var currentDay  = days[currentDate.getDay()];

  return (
    currentTime >= startTime &&
    currentTime <= endTime &&
    $.inArray(currentDay, interval.days) !== -1
  );
}

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/condition.js


/**
 * @typedef {{value: String, match: String, negate: (boolean|undefined)}}
 */
condition.DimensionCondition;

/**
 * returns true if the object with the specified id passes its conditions
 * @param {string} objectId
 * @param {{
 *     "manualMode": (boolean|undefined),
 *     "objectType": (string|undefined),
 *     "enabledOverride": (boolean|undefined),
 *     "visitor": (optly.Visitor|undefined)
 *   }} options
 *   The options do the following:
 *     "manualMode": if false or undefined passesTests will fail if the experiment is manually activated
 *     "objectType": the object's type. If not specified its assumed to be an experiment. Several of 
 *        the checks are only preformed for experiments
 *     "enabledStatus": Overrides data.isExperimentEnabled for the purpose of evaluating conditions
 *        allows you to ignore if an experiment is running, paused, etc
 *     "visitor": optly.Visitor instance to use to test audiences, in preference to the global visitor (for testing)
 * @return {boolean}
 */
condition.passesTests = function(objectId, options) {
  var manualMode = options['manualMode'] === true;
  var objectType = options['objectType'] ? options['objectType'] : "experiment";
  var isExperiment = objectType === "experiment";
  var enabledStatus = options['enabledStatus'];
  var testVisitor = options['visitor'] || visitor;

  timer.addEvent("Condition", "Testing " + objectType + " " + objectId);
  //set isEnabled if enabledStatus is defined we use that value otherwise we use data.isExperimentEnabled
  var isEnabled = isExperiment && (isDefined(enabledStatus) ? !!enabledStatus : data.isExperimentEnabled(objectId));
  var isManualExperiment = isExperiment && data.isExperimentManuallyActivated(objectId);
  var conditions = data.getConditions(objectId, objectType);

  //if the experiment is not enabled (aka it is paused or draft) then fail tests
  if (isExperiment && !isEnabled) {
    timer.addEvent("Condition", "Failed for " + objectType + " " + objectId + " (paused)");
    optly.client.preview.Logger.setReason(objectId, "it is paused");
    return false;
  }
  //if the experiment is set to manual activation then fail tests
  else if (isExperiment && !manualMode && isManualExperiment) {
    timer.addEvent("Condition", " Failed for " + objectType + " " + objectId + " (manual activation mode)");
    optly.client.preview.Logger.setReason(objectId, "it is set to use manual activation mode");
    return false;
  }
  //if the object fails conditions then return false
  if (conditions) {
    if (!condition.test(conditions, objectId, objectType)) {
      timer.addEvent("Condition", "Failed for " + objectType + " " + objectId + " (condition failed)");
      // reason set in condition.test
      return false;
    }
  } else if(!condition.testAudienceConditions(testVisitor, objectId, objectType)) {
      return false;
  }
  //object passes all tests... return true!
  return true;
};

/**
 * Whether the given object matches its audiences and/or urls for the given visitor
 * @param {optly.Visitor} testVisitor
 * @param {string} objectId
 * @param {string} objectType
 * @returns {boolean}
 */
condition.testAudienceConditions = function(testVisitor, objectId, objectType) {
  var audienceIds = [], urls = [];
  if (objectType === 'experiment') {
    audienceIds = data.getExperimentAudienceIds(objectId);
    urls = data.getExperimentUrls(objectId) || [];
  } else if (objectType === 'segment') {
    var segmentAudienceId = data.getSegmentAudienceId(objectId);
    if (segmentAudienceId) {
      audienceIds = [segmentAudienceId];
    }
  } else {
    timer.addEvent('Condition', 'Not a valid objectType: ' + objectType);
    return false;
  }
  if (audienceIds.length > 0) {
    timer.addEvent('Condition', 'Testing audiences for ' + objectType + ' ' + objectId + ': ' + audienceIds);
    if (!any(audienceIds, goog.bind(testVisitor.isInAudience, testVisitor))) {
      timer.addEvent('Condition', 'Failed to match any audiences for ' + objectType + ' ' + objectId);
      return false;
    }
  }
  if (urls.length > 0) {
    timer.addEvent('Condition', 'Testing URLs for ' + objectType + ' ' + objectId);
    if (!condition.testUrlDimensionValues(urls, condition.facade.getCurrentUrl())) {
      timer.addEvent('Condition', 'Failed to match any URL for ' + objectType + ' ' + objectId);
      return false;
    }
  }
  return true;
};

/**
 *
 * @param {Array.<condition.DimensionCondition>} urls
 * @param {string} currentUrl
 * @returns {boolean}
 */
condition.testUrlDimensionValues = function(urls, currentUrl) {
  var positiveConditions = [], negativeConditions = [];

  each(urls, function(url) {
    if (url['negate']) {
      negativeConditions.push(url);
    } else {
      positiveConditions.push(url);
    }
  });

  /**
   *
   * @param {Array.<condition.DimensionCondition>} urls
   * @returns {boolean}
   */
  var testUrls = function(urls) {
    return any(urls, function(urlCondition) {
      return condition.testUrl(currentUrl, urlCondition)
    });
  };

  return !testUrls(negativeConditions) && (positiveConditions.length === 0 || testUrls(positiveConditions));
};

/**
 * @param {Array} conditions
 * @param {string} objectId
 * @param {string=} objectType
 * @return {boolean}
 */
condition.test = function(conditions, objectId, objectType) {
  objectType = objectType || "experiment";
  var isExperiment = objectType === "experiment";
  var succeeded = true;
  var testFunctions = condition.testFunctions;

  each(conditions, function(condition) {

    var type = condition['type'];
    if (isExperiment && condition['only_first_time'] && plan.containsExperiment(objectId) && !optly.client.preview.ENABLED) {
      timer.addEvent("Condition", type + " condition passed because it only gets checked when bucketing", true);
    }
    else {
      var test = testFunctions[type];
      var shouldPass = !condition['not'];

      var passed = test(condition);
      var isUnacceptable = (passed !== shouldPass);
      var passVerb = passed ? "passed" : "failed";
      var shouldPassVerb = shouldPass ? "pass": "fail";
      var verboseReason = "the visitor " + passVerb + " a " + type + " targeting condition " +
                          " when it needed to " + shouldPassVerb;
      timer.addEvent("Condition", "Found that " + verboseReason, !isUnacceptable);
      if (isUnacceptable) {
        succeeded = false;
        optly.client.preview.Logger.setReason(objectId, verboseReason);
        return false;
      }
    }
  });

  return succeeded;
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testBrowsers = function(cond) {
  var browser = condition.facade.getBrowser();
  return any(cond['values'], function(targetedBrowser) {
    return condition.testBrowser(browser, {'value': targetedBrowser});
  });
};

/**
 * Compare an actual version against a targetedVersion; return -1 if the actual version is "semantically less"
 * than the targetedVersion, 1 if it is "semantically greater", and 0 if they are "semantically identical"
 * (similar to Array.prototype.sort compareFns).
 *
 * "Semantically" means the following: given both version numbers expressed in x.y.z... format, to the level of
 * precision of the targetedVersion, compare the corresponding version parts (e.g. major to major, minor to minor).
 *
 * @private
 * @param {string} version expressed as a string x.y.z...
 * @param {string} targetedVersion expressed as a string x.y.z...
 * @returns {number} -1 if version < targetedVersion, 1 if version > targetedVersion, 0 if they are approx. equal
 */
condition.compareVersion = function(version, targetedVersion) {
  if (!targetedVersion) {
    // Any version.
    return 0;
  }

  // Expect a version string of the form x.y.z
  var targetedVersionParts = targetedVersion.toString().split('.');
  var versionParts = version.toString().split('.');

  // Up to the precision of targetedVersion, expect version to match exactly.
  for (var i = 0; i < targetedVersionParts.length; i++) {
    if (!isDefined(versionParts[i])) {
      return -1;
    } else if (Number(versionParts[i]) < Number(targetedVersionParts[i])) {
      return -1;
    } else if (Number(versionParts[i]) > Number(targetedVersionParts[i])) {
      return 1;
    }
  }

  return 0;
};

/**
 * Legacy: compare "browser" condition based on browser 'id', 'version', and 'mobileId'
 *
 * @private
 * @param {{id: String, version: Number, mobileId: String}} browser Current browser data value
 * @param {{value: String}} cond Browser to compare against
 * @returns {boolean}
 */
condition.testBrowser = user.LEGACY_BROWSER ? function(browser, cond) {
  var targetedBrowser = cond['value'],
      browserId = browser['id'],
      browserVersion = browser['version'],
      mobileId = browser['mobileId'];
  if (mobileId && mobileId !== "unknown") {
    timer.addEvent("Condition", mobileId, true);
    return targetedBrowser === "mobile"
             || targetedBrowser === mobileId;
  }
  else if (targetedBrowser.indexOf(browserId) === 0) {
    var version = targetedBrowser.substr(browserId.length);

    return condition.compareVersion(browserVersion, version) === 0;
  }
  return false;
} : goog.nullFunction;

/**
 * Compare browser condition based on browser 'id' and 'version'
 *
 * @private
 * @param {{id: string, version: string}} browser
 * @param {{value: string}} cond
 * @returns {boolean}
 */
condition.testBrowserVersion = function(browser, cond) {
  var targetedBrowser = cond['value'],
      browserName = browser['id'],
      browserVersion = browser['version'];

  if (targetedBrowser.indexOf(browserName) === 0) {
    var targetedVersion = targetedBrowser.substr(browserName.length);
    return condition.compareVersion(browserVersion, targetedVersion) === 0;
  }
  return false;
};

/**
 * @private
 * @param {string|null} campaign
 * @param {{value: (string|undefined)}} cond
 * @return {boolean}
 */
condition.testCampaign = function(campaign, cond) {
  // 'none' is reserved as a value which indicates
  // that the utm_campaign parameter is not set
  if (campaign === 'none') {
    campaign = null;
  }
  return condition.hasMatch(cond['value'], cond['match'], campaign);
}

/**
 * @private
 * @param {{value: string}} cond
 * @return {boolean}
 */
condition.testCode = function(cond) {
  return condition.testCodeResult(null, cond);
};

/**
 * Check if code evaluates to true
 * @param {undefined|null} dimensionValue Not used, just here to conform to API
 * @param {{value: string}} cond Code to evaluate
 * @returns {boolean}
 */
condition.testCodeResult = function(dimensionValue, cond) {
  var code = cond['value'];
  if (code === undefined) {
    return true;
  }
  try {
    return Boolean(eval(code));
  }
  catch (error) {
    return false;
  }
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testCookies = function(cond) {
  var names = cond['names'] || [];
  var values = cond['values'] || [];
  var key;

  for (var i = 0; i < names.length; i++) {
    key = names[i];
    if(condition.testCookie(condition.facade.getCookie(key),
                            {'value': values[i] || undefined})) {
      return true;
    }
  }
  return false;
};

/**
 * @param {string|null} cookieValue
 * @param {{value: (string|undefined)}} cond
 * @returns {boolean}
 */
condition.testCookie = function(cookieValue, cond) {
  return condition.hasMatch(cond['value'], cond['match'], cookieValue);
};

/**
 * @param {Date} dateObj
 * @param {{value: string}} cond
 * @returns {boolean}
 */
condition.testTimeAndDay = function(dateObj, cond) {
  return optly.timeAndDayInterval.test(cond['value'], dateObj);
};

/**
 * Returns true if listValue matches the condition's value.
 * If the condition's value is undefined then true is returned
 * if the list has a value.
 * @param {string|boolean|null|undefined} listValue
 * @param {{value: (string|undefined)}} cond
 * @returns {boolean}
 */
condition.testList = function(listValue, cond) {
  // Lists evalate to null or undefined iff they are unavailable...
  if(listValue === null || !isDefined(listValue)) {
    return false;
  }
  var value = cond['value'];
  if (!isDefined(value)) {
    return listValue === "" || listValue !== false;
  }
  return listValue.toString() === value;
};

/**
 * @param {String} dimensionValue
 * @param {{value: (String|undefined)}} cond
 */
condition.testCustomDimension = function(dimensionValue, cond) {
  var value = cond['value'];
  if (!isDefined(value)) {
    return isDefined(dimensionValue);
  }
  // intentionally coerce values
  return value == dimensionValue;
};

/**
 * @private
 * @param {Object} tagCondition
 * @returns {boolean}
 */
condition.testCustomTags = function(tagCondition) {
  return any(tagCondition['values'], function(cond) {
    var key = cond['key'];
    return condition.testCustomTag(condition.facade.getCustomTagValue(key),
                                   {'value': cond['value']});
  });
};

/**
 * @private
 * @param {string|number|null} tagValue Current value for the tag
 * @param {{value: (string|undefined)}} cond Value to compare against
 * @returns {boolean}
 */
condition.testCustomTag = function(tagValue, cond) {
  return condition.hasMatch(cond['value'], cond['match'], tagValue);
};

/**
 * Test if the current device value matches the expected value.
 *
 * @private
 * @param {string} device
 * @param {{value: string}} cond
 * @returns {boolean}
 */
condition.testDevice = function(device, cond) {
  return cond['value'] === device;
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testEvents = function(cond) {
  return any(cond['values'], function(value) {
    var triggeredEvent = condition.facade.triggeredCustomEvent(value);
    return condition.testEvent(triggeredEvent);
  });
};

/**
 * @private
 * @param {boolean} isEventTriggered Whether the event triggered
 * @returns {boolean}
 */
condition.testEvent = function(isEventTriggered) {
  return isEventTriggered;
};

/**
 * @private
 * @param {boolean} isFirstSession
 * @returns {boolean}
 */
condition.testFirstSession = function(isFirstSession) {
  return isFirstSession;
};

/**
 * @private
 * @param {boolean} hasPPID
 * @returns {boolean}
 */
condition.testHasPPID = function(hasPPID) {
  return hasPPID;
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testIPs = function (cond){
  var userIp = condition.facade.getIP();
  return any(cond['values'], goog.partial(condition.testIP, userIp));
};

/**
 * @private
 * @param {string} userIp User's current IP
 * @param {{value: String, match: String}} cond IP condition to match against
 * @returns {boolean}
 */
condition.testIP = function(userIp, cond) {
  var matchString = cond['value'],
      type = cond['match'];
  switch (type) {
    case 'exact':
      if (userIp == matchString && userIp != ''){
        return true;
      }
      break;
    case 'prefix':
      if (userIp.indexOf(matchString) == 0){
        return true;
      }
      break;
    case 'regex':
      try {
        var regex = new RegExp(matchString);
      }
      catch (error){
        return false;
      }

      if (regex.test(userIp)){
        return true;
      }
      break;
    case 'cidr':
      try {
        var cidr = new optly.CIDR(matchString);
        return cidr.containsIP(userIp);
      }
      catch (error){
        return false;
      }
      break;
  }
  return false;
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testLanguages = function(cond) {
  var browserLanguage = condition.facade.getBrowserLanguage();
  return any(cond['values'], function(value) {
    return condition.testLanguage(browserLanguage, {'value': value});
  });
};

/**
 * @private
 * @param {string} browserLanguage User's browser language
 * @param {{value: String}} cond Language to test against
 * @returns {boolean}
 */
condition.testLanguage = function(browserLanguage, cond) {
  var language = cond['value'];
  return language === "any" || browserLanguage.indexOf(language) === 0;
};

/**
 * @private
 * @param {Object} cond
 * @return {boolean}
 */
condition.testLocations = function(cond) {
  var userLocation = condition.facade.getLocation();
  return any(cond['values'], function(value) {
    return condition.testLocation(userLocation, {'value': value});
  });
};

/**
 * @private
 * @param {{country: string, region: string, city: string, continent: string}} userLocation
 * @param {{value: string}} cond as [COUNTRY]|[REGION]|[CITY]|[CONTINENT]
 * @returns {boolean}
 */
condition.testLocation = function(userLocation, cond) {
  var loc = cond['value'],
      locSplit = loc.split("|"),
      country = $.trim(locSplit[0]),
      region = $.trim(locSplit[1]),
      city = $.trim(locSplit[2]),
      continent = $.trim(locSplit[3]);

  switch (locSplit.length) {
    case 1:
      if (user.formatGeoField(userLocation['country']) === country) {
        return true;
      }
      break;
    case 2:
      if (user.formatGeoField(userLocation['region']) === region &&
          user.formatGeoField(userLocation['country']) === country) {
        return true;
      }
      break;
    case 3:
      if (user.formatGeoField(userLocation['city']) === city &&
          (user.formatGeoField(userLocation['region']) === region ||
           "" === region) &&
          user.formatGeoField(userLocation['country']) === country) {
        return true;
      }
      break;
    case 4:
      // If "continent" is specified then all other fields are irrelevant
      if (user.formatGeoField(userLocation['continent']) === continent) {
        return true;
      }
      break;
  }
  return false;
};

/**
 * Match platform name/version
 *
 * @private
 * @param {string} platform
 * @param {{value: string}} cond platform/version condition specified as platformName[_version[_maxVersion]]
 * @returns {boolean}
 */
condition.testPlatform = function(platform, cond) {
  var targetedPlatform = cond['value'],
      // Split platform name from version.
      // If platform_minVersion_maxVersion are specified this will set targetedPlatformName to "platform"
      // and targetedOSVersion to ["minVersion", "maxVersion"].
      targetedPlatformParts = targetedPlatform.split('_'),
      targetedPlatformName = targetedPlatformParts[0],
      targetedOSVersion = targetedPlatformParts.slice(1);
  
  if (targetedPlatformName === platform.id) {
    if (targetedOSVersion.length === 0) {
      return true;
    }

    if (targetedOSVersion.length > 1) {
      // minVersion_maxVersion format
      return condition.compareVersion(platform.version, targetedOSVersion[0]) >= 0 &&
             condition.compareVersion(platform.version, targetedOSVersion[1]) <= 0;
    } else {
      // matchVersion format
      return condition.compareVersion(platform.version, targetedOSVersion[0]) === 0;
    }
  }

  return false;
};

/**
 * @param {{values: Array.<{key: string, value: (string|undefined)}>}} cond
 * @return {boolean}
 */
condition.testQueries = function(cond) {
  if (cond['values'].length === 0) {
    return true;
  }
  return any(cond['values'], function(queryCond) {
    var key = queryCond['key'];
    return condition.testQueryParam(condition.facade.getQueryParameter(key), {'value': queryCond['value']});
  });
};

/**
 * @private
 * @param {string|null} queryParamValue
 * @param {{value: (string|null|undefined)}} cond
 * @returns {boolean}
 */
condition.testQueryParam = function(queryParamValue, cond) {
  return condition.hasMatch(cond['value'], cond['match'], queryParamValue);
};

/**
 * @param {Object} cond
 * @return {boolean}
 */
condition.testReferrers = function(cond) {
  var url = condition.facade.getDocumentReferrer();
  return any(cond['values'], goog.partial(condition.testReferrer, url));
};

/**
 * @private
 * @param {string} url
 * @param {{value: string, match: string}} cond
 * @returns {boolean}
 */
condition.testReferrer = function(url, cond) {
  var value = cond['value'],
      type = cond['match'];
  timer.addEvent("Condition", "Testing referrer " + url + " against  " + value + " (" + type + ")", true);
  return optly.match.matchUrl(url, value, type);
};

/**
 * @param {Object} cond
 * @return {boolean}
 */
condition.testSegments = function(cond) {
  var segmentsList = condition.facade.getSegmentsList();
  return any(cond['values'], function(value) {
    return condition.testSegment(inArray(value, segmentsList));
  });
};

/**
 * @private
 * @param {string|boolean|undefined} segmentValue
 * @returns {boolean}
 */
condition.testSegment = function(segmentValue) {
  return !!segmentValue;
};

/**
 * @private
 * @param {string} sourceType
 * @param {{value: string}} cond
 * @return {boolean}
 */
condition.testSourceType = function(sourceType, cond) {
  return cond['value'] === sourceType;
};

/**
 * Tests whether or not the given visitor data fulfills the given third party dimension.
 *
 * If the provided visitor data is an array (for example, an array of IDs for third party audiences that the visitor is
 * in), this function looks for an exact match for the value for the dimension within the array. If a match is found,
 * true is returned. If no match is found, false is returned.
 *
 * @param {Array|string|number} visitorData
 * @param {Object} cond
 * @return {boolean}
 */
condition.testThirdPartyDimension = function(visitorData, cond) {
  if (isArrayLike(visitorData)) {
    return any(visitorData, goog.partial(condition.hasMatch, cond['value'], cond['match']));
  }

  // tell the Closure compiler that it can count on visitorData not being an Array at this point.
  /** @type {number|string} */(visitorData);

  // For a visitor data boolean value, exact match will be used by default which
  // would perform type coercion properly before matching
  return condition.hasMatch(cond['value'], cond['match'], visitorData);
};

/**
 * @param {Object} cond
 * @return {boolean}
 */
condition.testUrls = function(cond) {
  var url = condition.facade.getCurrentUrl();
  return any(cond['values'], goog.partial(condition.testUrl, url));
};

/**
 * @param {string} url
 * @param {{value: string, match: string}} cond
 * @returns {boolean}
 */
condition.testUrl = function(url, cond) {
  var value = cond['value'],
      type = cond['match'];
  timer.addEvent("Condition", "Testing URL " + url + " against  " + value + " (" + type + ")", true);
  return optly.match.matchUrl(url, value, type);
};

/**
 * @private
 * @param {{value: string}} cond
 * @return {boolean}
 */
condition.testVisitor = function(cond) {
  var newVsReturning = condition.facade.getNewVsReturning();
  return condition.testVisitorValue(newVsReturning, cond);
};

/**
 * @private
 * @param {string} newVsReturning
 * @param {{value: string}} cond
 * @returns {boolean}
 */
condition.testVisitorValue = function(newVsReturning, cond) {
  var conditionType = cond['value'];


  switch (conditionType) {
    case "new":
      if (newVsReturning === "returning") {
        return false;
      }
      return true;

    case "returning":
      return newVsReturning === "returning";
  }

  return true;
};

/**
 * Test condition like that returned by Audience._audience_properties_clientjs, e.g.
 * ["and", ["or", {...}, {...}], {...}]
 * @param {optly.Visitor} visitor
 * @param {Array|Object=} cond
 * @returns {boolean}
 */
condition.compoundTest = function(visitor, cond) {
  var operators = {
    'and': function(conditions) {
      return every(conditions, goog.partial(condition.compoundTest, visitor));
    },
    'or': function(conditions) {
      return any(conditions, goog.partial(condition.compoundTest, visitor));
    },
    'not': function(singleCondition) {
      if (singleCondition.length !== 1) {
        throw new Error(goog.DEBUG && '"not" argument too long: ' + json.stringify(singleCondition));
      }
      return !condition.compoundTest(visitor, singleCondition[0]);
    }
  };

  if (isArrayLike(cond)) {
    if (cond[0] in operators) {
      return operators[cond[0]](cond.slice(1));
    } else {
      throw new Error(goog.DEBUG && 'Not an operator');
    }
  }

  var dimensionId = cond['dimension_id'],
      dimensionType = data.getDimensionType(dimensionId),
      value = cond['value'];

  if (!dimensionType) {
    throw new Error(goog.DEBUG && 'No dimension type for dimension: ' + dimensionId);
  }

  var matcher = condition.matchers[dimensionType];
  if (!matcher) {
    throw new Error(goog.DEBUG && 'Unknown dimension type: ' + dimensionType);
  }

  return matcher(visitor.getDimensionValue(dimensionId), {
    'value': value,
    'match': cond['match'] || 'exact'
  });
};

/**
 * Returns true iff all async info (aka geo) necessary to test the supplied experiment or segment is available
 * @param experimentOrSegmentId
 * @return {boolean}
 */
condition.isReadyToTest = function(experimentOrSegmentId) {
  var readyToTest = true;
  // If its an audience based segment or experiment
  if(data.usesAudiences(experimentOrSegmentId)) {
    /** @type Array.<number|string> */
    var audienceIds = [data.getSegmentAudienceId(experimentOrSegmentId)];
    if(!audienceIds[0]){ // If its not segment
      audienceIds = data.getExperimentAudienceIds(experimentOrSegmentId);
    }
    readyToTest = every(audienceIds, function(audienceId){
      var audience = data.getAudience(audienceId);
      if(!audience['conditions']) {
        return true; // If we don't have any conditions we are ready to test
      }
      return condition.compoundReadyToTest(audience['conditions']);
    });
  }
  // If its a legacy condition based segment or experiment
  else if(data.isGeotargetingEnabled(experimentOrSegmentId)) {
    readyToTest = condition.matchersReadyToTest['ip'](null) || condition.matchersReadyToTest['location'](null);
  }
  if(!readyToTest) {
    timer.addEvent("Condition", "Not ready to test (geotargeting): " + experimentOrSegmentId); 
  }
  return readyToTest;
};

/**
 * Test condition like that returned by Audience._audience_properties_clientjs, e.g.
 * ["and", ["or", {...}, {...}], {...}] to determine if its ready to be tested. Aka all 
 * async operations necessary to evaluate the compound test have been completed.
 * @param {Array|Object=} cond
 * @returns {boolean}
 */
condition.compoundReadyToTest = function(cond){
  if(isArrayLike(cond)){ // If condition is an operator
    return every(cond.slice(1), condition.compoundReadyToTest);
  }
  else {
    var dimensionId = cond['dimension_id'],
      dimensionType = data.getDimensionType(dimensionId) || "",
      matcherReadyToTestFunc = condition.matchersReadyToTest[dimensionType];
    return matcherReadyToTestFunc ? matcherReadyToTestFunc(cond) : true;
  }
};

/**
 * @private
 */
condition.testFunctions = {
  'browser': condition.testBrowsers,
  'code': condition.testCode,
  'cookies': condition.testCookies,
  'custom_tag': condition.testCustomTags,
  'event': condition.testEvents,
  'ip': condition.testIPs,
  'language': condition.testLanguages,
  'location': condition.testLocations,
  'query': condition.testQueries,
  'referrer': condition.testReferrers,
  'segment': condition.testSegments,
  'url': condition.testUrls,
  'visitor': condition.testVisitor
};

/**
 * Each value is a function which takes the "visitor value" as the first parameter and the
 * condition value as the second parameter
 * @type {Object.<string, function(*, {value: (string|undefined), match: (string|undefined)}): boolean>}
 * @private
 */
condition.matchers = {
  'browser': condition.testBrowser,
  'browser_version': condition.testBrowserVersion,
  'campaign': condition.testCampaign,
  'code': condition.testCodeResult,
  'cookies': condition.testCookie,
  'custom_dimension': condition.testCustomDimension,
  'custom_tag': condition.testCustomTag,
  'device': condition.testDevice,
  'event': condition.testEvent,
  'first_session': condition.testFirstSession,
  'ip': condition.testIP,
  'language': condition.testLanguage,
  'list': condition.testList,
  'location': condition.testLocation,
  'query': condition.testQueryParam,
  'platform': condition.testPlatform,
  'referrer': condition.testReferrer,
  'segment': condition.testSegment,
  'source_type': condition.testSourceType,
  'time_and_day': condition.testTimeAndDay,
  'third_party_dimension': condition.testThirdPartyDimension,
  'url': condition.testUrl,
  'visitor': condition.testVisitorValue,
  'has_ppid': condition.testHasPPID
};

/**
 * Each value is a function which returns true if the corresponding matcher is ready to test.
 * If a matcher is not in this object it is assumed its always ready to test.
 * @type {Object.<string, function(*):boolean>}
 * @private
 */
condition.matchersReadyToTest = {
  'ip': function(cond) {
    optly.client.rum.instance.recordEvent('checkGeo');
    return !!condition.facade.getIP();
  },
  'location': function(cond) {
    var location = condition.facade.getLocation();
    optly.client.rum.instance.recordEvent('checkGeo');
    return !!(location && location["continent"] || location["country"] || location["region"] || location["city"]);
  },
  'list': function(cond) {
    var dimensionId = cond['dimension_id'];
    optly.client.rum.instance.recordEvent('checkGeo');
    return condition.facade.getListValue(data.getDimensionName(dimensionId) || "") !== null
  }
};

/**
 * Returns true if the value matches the  string
 * as defined by 'match' (ex: exists/exact/substring/regex)
 *
 * @param {string} value
 * @param {string} match
 * @param {null|string|number} userValue
 * @return {boolean}
 */
condition.hasMatch = function(value, match, userValue) {
  var isUserValueDefined = isDefined(userValue) && userValue !== null;
  var isConditionValueDefined = isDefined(value) && value !== null;
  var matchType = match || (isConditionValueDefined ? 'exact' : 'exists');
  switch (matchType) {
    case 'exists':
      return isUserValueDefined;
    case 'exact':
      return isUserValueDefined && String(userValue) === value;
    case 'substring':
      return isUserValueDefined && containsString(String(userValue), value);
    case 'regex':
      try {
        if (isConditionValueDefined && isUserValueDefined) {
          var regex = new RegExp(value);
          return containsRegEx(String(userValue), regex);
        }
        return false;
      }
      catch (error) {
        return false;
      }
    case 'range':
      // range match type is currently used only by third-party dimensions
      var rangeValues = value.split(':');
      var fromValue = parseFloat(rangeValues[0]);
      var toValue = parseFloat(rangeValues[1]);
      var currentValue = parseFloat(userValue);

      return (currentValue >= fromValue && currentValue <= toValue);
    default:
      return false;
  }
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/cidr.js
/**
 * An object for testing if an IP is in the range specified by a
 * Classless Inter-Domain Routing (CIDR) specification.
 * See:  http://tools.ietf.org/html/rfc4632#section-3.1
 * Example: 92.128.0.0/17 specifies a range of addresses each of
 * which must have the same leading 17 bits as those in 92.128.0.0.
 */

/**
 * @param {string} cidr The CIDR specification string.
 * @constructor
 * @throws {Error} If cidr is an invalid specification.
 */
optly.CIDR = function(cidr) {
  /**
   * @type {string}
   */
  this.cidrString = $.trim(cidr);

  var parsedCIDR = optly.CIDR.parseCIDR(this.cidrString);
  if (parsedCIDR === null) {
    throw new Error('Invalid CIDR specification');
  }

  /**
   * @type {optly.CIDR.IP}
   */
  this.maskedAddress = parsedCIDR.maskedAddress;

  /**
   * @type {optly.CIDR.IP}
   */
  this.mask = parsedCIDR.mask;
};

/** @typedef {Array.<number>} */
optly.CIDR.IP;

/** @typedef {Object.<string, optly.CIDR.IP>} */
optly.CIDR.NetworkMask;

/**
 * Number of bytes (octets) in an IP address.
 * @type {number}
 * @const
 */
optly.CIDR.NUM_IP_OCTETS = 4;

/**
 * Reports whether this CIDR specification contains this ip in its range.
 * @param {string} ip The IP to test.
 * @return {boolean} Whether this CIDR contains ip in its range.
 * @throws {Error} If ip is invalid.
 */
optly.CIDR.prototype.containsIP = function(ip) {
  var parsedIp = optly.CIDR.parseIP(ip);
  if (parsedIp === null) {
    throw new Error('Invalid ip: ' + ip);
  }

  for (var i = 0; i < optly.CIDR.NUM_IP_OCTETS; i++) {
    if ((parsedIp[i] & this.mask[i]) !== this.maskedAddress[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Parses the CIDR specification into its prefix ip and mask.
 * @param {string} cidr The CIDR specification string.
 * @return {optly.CIDR.NetworkMask} The network address and mask,
 *      or null if the specification is invalid.
 * @private
 */
optly.CIDR.parseCIDR = function(cidr) {
  var parts = cidr.split('/');
  if (parts.length != 2) {
    return null;
  }
  var numLeadingOnes = parseInt(parts[1], 10);
  if (isNaN(numLeadingOnes) || numLeadingOnes < 0 || numLeadingOnes > 32) {
    return null;
  }
  var ip = optly.CIDR.parseIP(parts[0]);
  if (ip === null) {
    return null;
  }
  var mask = optly.CIDR.makeMask(numLeadingOnes);
  for (var i = 0; i < optly.CIDR.NUM_IP_OCTETS; i++) {
    ip[i] = ip[i] & mask[i];
  }
  return {
    maskedAddress: ip,
    mask: mask
  };
};

/**
 * Parse ip string into an array of integers, one per octet.
 * @param {string} ip The ip string in n.n.n.n format.
 * @return {optly.CIDR.IP} The ip converted to an array of integers,
 *      one per octet, or null to indicate an invalid ip.
 * @private
 */
optly.CIDR.parseIP = function(ip) {
  var parts = ip.split('.');
  if (parts.length != optly.CIDR.NUM_IP_OCTETS) {
    return null;
  }

  var parsedIp = [];
  for (var i = 0; i < optly.CIDR.NUM_IP_OCTETS; i++) {
    var octet = optly.CIDR.parseOctet(parts[i]);
    if (octet === null) {
      return null;
    }
    parsedIp[i] = octet;
  }
  return parsedIp;
};

/**
 * Parse ip octet.
 * @param {string} octet The ip octet to parse.
 * @return {?number} The octet value in [0, 255],
 *      or null to indicate an invalid octet.
 * @private
 */
optly.CIDR.parseOctet = function(octet) {
  if (octet.length > 3) {
    return null;
  }
  var value = parseInt(octet, 10);
  if (isNaN(value)) {
    return null;
  }
  // Does octet have trailing non-numerals?
  if (octet !== value.toString()) {
    return null;
  }
  if (value < 0 || value > 255) {
    return null;
  }
  return value;
};

/**
 * Lookup table of leading ones in a byte. The index is the number
 * of leading ones required.
 * For example, optly.CIDR.ONES_LOOKUP_TABLE[2] = 11000000 (binary) = 0xc0.
 * @type {!Array.<number>}
 * @const
 * @private
 */
optly.CIDR.ONES_LOOKUP_TABLE = [
  0x00, 0x80, 0xc0, 0xe0, 0xf0, 0xf8, 0xfc, 0xfe, 0xff
];

/**
 * Returns a 32-bit mask with the specified number of leading ones.
 * @param {number} numLeadingOnes Number of leading ones. Must be in [0, 32].
 * @return {optly.CIDR.IP} The mask with the specified leading ones,
 *      or null if numLeadingOnes is out of bounds.
 * @private
 */
optly.CIDR.makeMask = function(numLeadingOnes) {
  if (numLeadingOnes < 0 || numLeadingOnes > 32) {
    return null;
  }
  var mask = [];
  for (var i = 0; i < optly.CIDR.NUM_IP_OCTETS; i++) {
    mask[i] = 0;
  }
  var numFullOctets = Math.floor(numLeadingOnes / 8);
  var numRemainingBits = numLeadingOnes % 8;
  for (var i = 0; i < numFullOctets; i++) {
    mask[i] = 0xff;
  }
  if (numFullOctets < optly.CIDR.NUM_IP_OCTETS) {
    mask[numFullOctets] = optly.CIDR.ONES_LOOKUP_TABLE[numRemainingBits];
  }
  return mask;
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/match.js

/**
 * @param {string} url
 * @param {string} string
 * @param {string} type
 * @return {boolean}
 */
optly.match.matchUrl = function(url, string, type) {
  url = optly.match.stripVarFromQuery(url);

  switch (type) {
    case "exact":
      url = optly.match.stripUrl(url);
      return url === optly.match.stripUrl(string);
    case "regex":
      try {
        return Boolean(url.match(string));
      }
      catch (error) {
        return false;
      }
    case "simple":
      url = optly.match.simplifyUrl(url);
      string = optly.match.simplifyUrl(string);
      return url === string;
    case "substring":
      url = optly.match.stripUrl(url, true);
      string = optly.match.stripUrl(string, true);
      return url.indexOf(string) !== -1;
    default:
      return false;
  }
};

/**
 * @param {string} url
 * @return {string}
 */
optly.match.removeParameters = function(url) {
  var index = url.indexOf("?");

  if (index !== -1) {
    url = url.substring(0, index);
  }

  index = url.indexOf("#");

  if (index !== -1) {
    url = url.substring(0, index);
  }

  return url;
};

/**
 * Get simple URL.
 */
optly.match.simplifyUrl = function(url) {
  return optly.match.stripUrl(optly.match.removeParameters(url));
};

/**
 * Remove protocol, edit/preview proxy URL and extraneous trailing
 * characters. Also remove "www." unless specified not to.
 *
 * @param {string} url
 * @param {boolean=} excludeOptionalPrefixesToStrip
 * @return {string}
 */
optly.match.stripUrl = function(url, excludeOptionalPrefixesToStrip) {
  url = url.replace('/?', '?');
  url = url.toLowerCase().replace(/[/&?]+$/, "");

  // Create a copy of the required prefixes
  var prefixesToStrip = optly.match.REQUIRED_PREFIXES_TO_STRIP.slice(0);
  if (!excludeOptionalPrefixesToStrip) {
    prefixesToStrip = prefixesToStrip.concat(optly.match.OPTIONAL_PREFIXES_TO_STRIP);
  }

  var length = prefixesToStrip.length;
  for (var i = 0; i < length; i++) {
    var prefixToStrip = prefixesToStrip[i];

    var prefixRegEx = new RegExp('^' + prefixToStrip);
    url = url.replace(prefixRegEx, '');
  }

  return url;
};

/**
 * Strip out any optimizely_... query parameters from a url.
 * @private
 * @param {string} url
 * @return {string}
 */
optly.match.stripVarFromQuery = function(url) {
  var urlParts = url.split('?');
  if (urlParts[1]) {
    var urlQueryParts = urlParts[1].split('&');
    var newQueryParts = [];
    $.each(urlQueryParts, function() {
      if (this.indexOf(optly.match.QUERY_PREFIX) !== 0) {
        newQueryParts.push(this);
      }
    });
    urlParts[1] = newQueryParts.join('&');
    return urlParts.join('?');
  }
  return url;
};

/**
 * Regexes to match against URL (always)
 *
 * @private
 */
optly.match.REQUIRED_PREFIXES_TO_STRIP = [
  "https?://.*?\.?optimizelyedit\.(com|test)/",
  "https?://.*\.?optimizelypreview\.(com|test)/",
  "https?://(edit|preview)(-hrd|-devel)?\.optimizely\.(com|test)/",
  "https?://.*?\.?optimizelyedit(-hrd)?\.appspot\.com/",
  "https?://"
];

/**
 * Regexes to match against URL if excludeOptionalPrefixesToStrip not set
 *
 * @private
 */
optly.match.OPTIONAL_PREFIXES_TO_STRIP = [
  "www\."
];

optly.match.QUERY_PREFIX = 'optimizely_';

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/shared/taint.js

/**
 * Given a function, this returns a new function that will behave the same as
 * the passed in function, except when given an Object.
 *
 * When the returned function is passed an Object, the original function is
 * called for every key/value contained in the Object that is passed in, with
 * the key and value as parameters.
 *
 * This behavior only occurs if Object.prototype has had things added to it,
 * otherwise the returned function behaves exactly like the passed in function.
 *
 * Example:
 * new = createDeconstructingFunction(old);
 * new({ a: 1, b: 2 }); => old(a, 1); old(b, 2);
 *
 * @param {Function} originalFunction
 */
optly.taint.createDeconstructingFunction = function(originalFunction) {
  return function(object) {
    var shouldDeconstruct = typeof object === "object"
                            && optly.taint.isObjectPrototypeTainted();

    if (!shouldDeconstruct) {
      return originalFunction.apply(this, arguments);
    }
    else {
      var result = null;

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          result = originalFunction.call(this, key, object[key]);
        }
      }

      return result;
    }
  };
};

/**
 * $.each() iterates over items found on Object.prototype. This intercepts calls
 * to $.each() and executes the loops while excluding extraneous properties.
 *
 * @param {Function} originalFunction
 * @param {Object} $
 */
optly.taint.createCleanJQueryEach = function(originalFunction, $) {
  // NOTE: $.each() will still break if there is a "length" property defined on
  // "object" or the prototype because we will try to loop through the object as
  // if it were an array.

  return function(object, callback, args) {
    var shouldClean = (object.length === undefined || $.isFunction(object))
                      && optly.taint.isObjectPrototypeTainted();

    if (!shouldClean) {
      originalFunction.apply(this, arguments);
    }
    else {
      // The for loops in jQuery with the addition of hasOwnProperty() check.
      if (args) {
        for (var name in object) {
          if (object.hasOwnProperty(name)
              && callback.apply(object[name], args) === false) {
            break;
          }
        }
      }
      else {
        for (var name in object) {
          if (object.hasOwnProperty(name)
              && !callback.call(object[name], name, object[name]) === false) {
            break;
          }
        }
      }
    }

    return object;
  };
};

/**
 * jQuery allows the construction of a new element with attributes by passing
 * two parameters to $. This breaks when Object is tainted because jQuery
 * detects that the object containing the attributes is not a "plain" object.
 * jQuery tries to construct the new element incorrectly and errors.
 *
 * Example of constructor:
 * var element = $("<div />", { 'class': "myClass" });
 *
 * @param {Function} originalFunction
 * @param {Object} $
 */
optly.taint.createCleanJQueryInit = function(originalFunction, $) {
  var callOriginalFunctionRaw = function(selector, context, rootJQuery) {
    return new originalFunction(selector, context, rootJQuery);
  };

  var nativeGetElementsByClassName = optly.nativity.getNativeGetElementsByClassName();

  return function(selector, context, rootJQuery) {
    var callOriginalFunction = callOriginalFunctionRaw;
    var currentGetByClass = document.getElementsByClassName;

    if (!optly.nativity.isNativeFunction(currentGetByClass) && nativeGetElementsByClassName) {
      callOriginalFunction = function(selector, context, rootJQuery) {
        document.getElementsByClassName = nativeGetElementsByClassName;
        var result = callOriginalFunctionRaw(selector, context, rootJQuery);
        document.getElementsByClassName = currentGetByClass;

        return result;
      };
    }

    var shouldClean = typeof selector === "string"
                      && context
                      && $.type(context) === "object"
                      && optly.taint.isObjectPrototypeTainted();

    if (!shouldClean) {
      return callOriginalFunction(selector, context, rootJQuery);
    }
    else {
      var result = callOriginalFunction(selector, undefined, rootJQuery);

      // Use deconstructed attr() to check for tainted prototype.
      result.attr(context);

      return result;
    }
  };
};

/**
 * Fixes jQuery functions that are susceptible to problems when
 * Object.prototype has had things added to it.
 *
 * An example of what can happen: attr() and css() both accept a function as a
 * "value" (second parameter).  When attr() and css() are given Objects, they
 * both iterate over the Object and effectively call attr()/css() with the key
 * and value as parameters for every key/value in the Object.
 *
 * When a function has been added to Object.prototype, attr()/css()'s
 * iteration of every key/value will include that function.  Therefore, calling
 * attr()/css() with an Object has a side-effect of executing any function that
 * had been added to Object.prototype.
 *
 * @param {Object} $
 */
optly.taint.fixJQueryTaintIssues = function($) {
  $['fn'].attr = optly.taint.createDeconstructingFunction($['fn'].attr);
  $['fn'].css = optly.taint.createDeconstructingFunction($['fn'].css);
  $['fn'].extend = optly.taint.createDeconstructingFunction($['fn'].extend);

  $.each = optly.taint.createCleanJQueryEach($.each, $);
  $['fn'].init = optly.taint.createCleanJQueryInit($['fn'].init, $);
};

/**
 * Detects whether Object.prototype has had anything added to it.  This
 * shouldn't be cached because Object.prototype can always have things added to
 * it.
 */
optly.taint.isObjectPrototypeTainted = function() {
  for (var key in {}) {
    return true;
  }

  return false;
};

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/plan.js


/**
 * The plan is client.js's version of the bucketMap.  Just because something is
 * in the plan does not mean it is active.
 */

/**
 * changeHandlers are functions that get called whenever there is a change in
 * the plan.  For example, the public API (including variationMap) is regenerated
 * each time the plan is changed.
 * @param {Function} changeHandler
 */
plan.addChangeHandler = function(changeHandler) {
  plan.changeHandlers.push(changeHandler);
};

/**
 * If shouldEvaluate is true, the variation is also enqueued with the evaluator.
 * If shouldReplace is true, the variation will replace any pre-existing variation
 * that may have been added to the plan already for the same experiment.
 *
 * @param {string} variationId
 * @param {string} source
 * @param {boolean=} shouldEvaluate
 * @param {boolean=} shouldReplace
 * @return {boolean}
 */
plan.addVariation = function(variationId, source, shouldEvaluate, shouldReplace) {
  shouldEvaluate = (shouldEvaluate === true);
  shouldReplace = (shouldReplace === true);

  var added = false;
  var experimentId = data.getVariationExperimentId(variationId);

  if (experimentId &&
      (shouldReplace || !plan.containsExperiment(experimentId))) {
    added = true;

    if (shouldReplace && plan.containsExperiment(experimentId)) {
      for (var i = 0; i < plan.variations.length; i++) {
        if (plan.variations[i].experimentId === experimentId) {
          plan.variations.splice(i, 1);
        }
      }
    }

    plan.variations.push({
      experimentId: experimentId,
      id: variationId,
      source: source
    });

    if (shouldEvaluate) {
      evaluator.enqueue(experimentId);
    }

    plan.variationExperimentIds[experimentId] = true;
    plan.callChangeHandlers();

    timer.addEvent("Plan", "Added experiment " + experimentId + " and variation id " +
                           variationId + " to the plan, source is " + source, true);
  }

  return added;
};

/**
 * @param {string} experimentId
 * @param {Object} mapping
 * @return {string}
 */
plan.buildMultivariateId = function(experimentId, mapping) {
  var variationIds = [];
  var sectionIds = data.getExperimentSectionIds(experimentId);

  for (var i = 0; i < sectionIds.length; i++) {
    var variationId = mapping[sectionIds[i]];
    if (variationId === IGNORED_VARIATION_ID) {
      return "";
    }
    variationIds.push(variationId);
  }

  return variationIds.join(VARIATION_ID_DELIMITER);
};

/**
 * @param {string} experimentId
 * @return {boolean}
 */
plan.containsExperiment = function(experimentId) {
  return experimentId in plan.ignoredExperimentIds
         || experimentId in plan.variationExperimentIds;
};

/**
 * - removes comments annotating url specific variation code
 * - removes non-applicable url specific code
 *
 * @param {string} code
 */
plan.filterUrlSpecificVariationCode = function(code) {
  var lines = code.split(VARIATION_CODE_DELIMITER);
  var filteredLines = [];

  var lineEligibleForInclusion = true;

  for (var i = 0, nLines = lines.length; i < nLines; i++) {
    var line = $.trim(lines[i]);

    if (line === VARIATION_URL_END) {
      // we just exited a URL specific code block, so next line is eligible
      lineEligibleForInclusion = true;
    }
    else if (line !== "") {
      // check if line is opening comment of a URL specific code block
      var matches = VARIATION_URL_START_RE.exec(line);

      if (matches && matches.length === 13) {
        var includes = matches[2] ? matches[2].split(VARIATION_URL_DELIMITER) : [];
        var excludes = matches[4] ? matches[4].split(VARIATION_URL_DELIMITER) : [];
        var match_type = matches[6] ? matches[6] : "substring";
        var include_types = matches[8] ? matches[8].split(VARIATION_URL_DELIMITER) : [];
        var exclude_types = matches[10] ? matches[10].split(VARIATION_URL_DELIMITER) : [];

        // if include conditions are specified, then the
        // block only applies if an include condition passes
        // otherwise, all pages apply unless excluded
        if (includes.length > 0) {
          var includeCondition = plan.zipConditions(includes, include_types, match_type);
          lineEligibleForInclusion = condition.testUrls(includeCondition);
        }

        // exclude conditions are overriding
        if (lineEligibleForInclusion && excludes.length > 0) {
          var excludeCondition = plan.zipConditions(excludes, exclude_types, match_type);
          lineEligibleForInclusion = !condition.testUrls(excludeCondition);
        }
      }
      else if (lineEligibleForInclusion) {
        // line is not URL specific code block comment & applicable
        filteredLines.push(line);
      }
    }
  }

  return filteredLines.join(VARIATION_CODE_DELIMITER);
};

/**
 * @param {Array} eventSteps
 */
plan.getProjectClickGoalWithCustomTargetingSteps = function(eventSteps) {
  var goalData = data.getProjectClickGoalsWithCustomTargeting();

  for (var i = 0, nGoals = goalData.length; i < nGoals; i++) {
    var goalStep = {
      eventName: goalData[i]['event_name'],
      selector: goalData[i]['selector'],
      type: "event '" + goalData[i]['event_name'] + "' (click goal)",
      waitUntilSelectorReady: true
    };
    if ('revenue' in goalData[i]) {
      goalStep['revenue'] = goalData[i]['revenue'];
    }
    eventSteps.push(goalStep);
  }
};

/**
 * @param {Array|Object=} experimentIds
 * @return {Array.<Object>}
 */
plan.getSteps = function(experimentIds) {
  if (experimentIds === undefined) {
    experimentIds = [];
  }
  else if (isNumberLike(experimentIds)) {
    experimentIds = [experimentIds];
  }

  experimentIds = /** @type {Array} */ experimentIds;
  var variationIds = plan.getVariationIds(experimentIds);

  /**
   * These arrays are passed to various functions and store the various steps that should be
   * evaluated the big diffrence between them is when they are executed. Their approximate purpose
   * and in what order they are executed is as follows:
   *   1) forcedSteps: contains steps that should be ran before any others like redirects or code 
   *     wrapped in a "_optimizely_evaluate=force" block
   *   2) globalSteps: at the moment the only thing every in this array is the steps nessary to
   *     run the "global css"
   *   3) safeSteps: contains steps that are "safe" in that the evaluator ensures that the element
   *     exists on the page before the step is ran. This array contains code steps.
   *   4) eventSteps: contains steps that are also "safe". All the steps in this array register for
   *     event handlers on the dom.
   */
  var eventSteps = [];
  var forcedSteps = [];
  var globalSteps = [];
  var safeSteps = [];

  plan.getProjectClickGoalWithCustomTargetingSteps(eventSteps);

  each(experimentIds, function(experimentId) {
    plan.getExperimentSteps(experimentId, eventSteps, globalSteps,
                                          forcedSteps, safeSteps);
  });

  each(variationIds, function(variationId) {
    plan.getVariationSteps(variationId, forcedSteps, safeSteps);
  });

  var steps = [];
  appendArray(steps, forcedSteps);
  appendArray(steps, globalSteps);
  appendArray(steps, safeSteps);
  appendArray(steps, eventSteps);

  return steps;
};

/**
 * @param {string} experimentId
 * @return {string|null}
 */
plan.getVariationId = function(experimentId) {
  var returnVariationId = null;
  each(plan.variations, function(variation) {
    if (experimentId == variation.experimentId) {
      returnVariationId = variation.id;
    }
  });
  return returnVariationId;
};

/**
 * @param {Array.<string>=} experimentIds
 * @return {Array.<string>}
 */
plan.getVariationIds = function(experimentIds) {
  var variationIds = [];
  var shouldAcceptAnyExperiment = !isDefined(experimentIds);
  experimentIds = experimentIds || [];

  each(plan.variations, function(variation) {
    if (shouldAcceptAnyExperiment || arrayContains(experimentIds, variation.experimentId)) {
      variationIds.push(variation.id);
    }
  });

  return variationIds;
};

/**
 * @param {string} experimentId
 * @param {boolean=} override
 */
plan.ignoreExperiment = function(experimentId, override) {
  override = (override === true);
  if (override || !plan.containsExperiment(experimentId)) {
    plan.ignoredExperimentIds[experimentId] = true;
    plan.callChangeHandlers();
  }
};

/**
 * @param {string} experimentId
 */
plan.isExperimentIgnored = function(experimentId) {
  return experimentId in plan.ignoredExperimentIds;
};

/**
 * @param {string} experimentId
 */
plan.removeExperiment = function(experimentId) {
  if (plan.ignoredExperimentIds[experimentId]) {
    delete plan.ignoredExperimentIds[experimentId];
  }
  if (plan.variationExperimentIds[experimentId]) {
    delete plan.variationExperimentIds[experimentId];
  }
  for (var i = 0; i < plan.variations.length; i++) {
    if (plan.variations[i].experimentId === experimentId) {
      plan.variations.splice(i, 1);
    }
  }
  plan.callChangeHandlers();
};

plan.log = function() {
  if (directive.shouldLog) {
    each(plan.ignoredExperimentIds, function(experimentId) {
      var experimentName = data.getExperimentName(experimentId);

      timer.addEvent("Plan", "Ignore experiment '" + experimentName +
                     "' (" + experimentId + ")");
    });

    each(plan.variations, function(variation, index) {
      var experimentId = data.getVariationExperimentId(variation.id);
      var variationName = data.getVariationName(variation.id);

      timer.addEvent("Plan", data.getExperimentString(experimentId) + " in variation \"" +
                             variationName + "\" (" + variation.id + ")");
    });
  }
};

plan.readCookie = function() {
  var bucketMap = cookie.get(BUCKET_COOKIE_NAME);
  if (!bucketMap) {
    return;
  }

  try {
    bucketMap = /** @type {Object} */ (json.parse(bucketMap));
  }
  catch (e) {
    // cookie JSON is malformed
    bucketMap = {};
  }
  var mvtExperiments = {}; // for backwards compatibility with experiment.js

  each(bucketMap, function(experimentId, variationId) {
    // Convert from a number, e.g. 1234, to a string, e.g. "1234",
    // for backwards compatibility with experiment.js
    variationId = String(variationId);
    /* Special logic for backwards compatibility with experiment.js
       * and mvt experiments.
       *
       * Specifically, experiment.js cookies like this:
       * section1Id: variation1Id, section2Id: variation2Id, ...
       * whereas client.js cookies like this:
       * experimentId: variation1Id_variation2Id_...
       */
    var masterExperimentId = data.getVariationExperimentId(variationId);
    var sectionIds = data.getExperimentSectionIds(masterExperimentId);
    if (sectionIds.length > 1 &&
        variationId.indexOf(VARIATION_ID_DELIMITER) === -1) {
      // We must observe the backwards compatibility with experiment.js
      // If the cookie read in was set by experiment.js, the value of
      // the experimentId variable is actually the section id, so we
      // create a mapping to be able to convert to the client.js form.
      // The cookie was set by experiment.js if there are no delimiter
      // characters in the variation id
      // for multivariate experiments with more than 1 section.
      mvtExperiments[masterExperimentId] = mvtExperiments[masterExperimentId] || {};
      mvtExperiments[masterExperimentId][experimentId] = variationId;
    }
    else {
      if (variationId !== IGNORED_VARIATION_ID) {
        var added = plan.addVariation(variationId, "cookie", false);

        if (!added) {
          plan.foreignBucketMap[experimentId] = variationId;
        }
      }
      else {
        plan.ignoreExperiment(experimentId);
      }
    }
  });

  // Finally, take care of the backwards compatibility information contained
  // in the mvtExperiments object.
  each(mvtExperiments, function(parentExperimentId, mapping) {
    var newId = plan.buildMultivariateId(parentExperimentId, mapping);
    if (newId.length > 0) {
      plan.addVariation(newId, "cookie", false);
    }
    else {
      plan.ignoreExperiment(parentExperimentId);
    }
  });
};

plan.writeCookie = function() {
  var bucketMap = {};

  each(plan.foreignBucketMap, function(experimentId, variationId) {
    bucketMap[experimentId] = variationId;
  });

  each(plan.variations, function(variation) {
    var experimentId = data.getVariationExperimentId(variation.id);

    bucketMap[experimentId] = variation.id;
  });

  each(plan.ignoredExperimentIds, function(experimentId) {
    bucketMap[experimentId] = IGNORED_VARIATION_ID;
  });

  // Deleting the Archived/Deleted experiments before setting the cookie
  each(data.getBlacklistedExperiments(), function(experimentId) {
    if(experimentId in bucketMap) {
      delete bucketMap[experimentId];
    }
  });

  cookie.set(BUCKET_COOKIE_NAME, json.stringify(bucketMap), directive.trackingCookieExpiration);
};

/**
 * @private
 */
plan.callChangeHandlers = function() {
  each(plan.changeHandlers, function(changeHandler) {
    changeHandler();
  });
};

/**
 * @param {string} experimentId
 * @param {Array} eventSteps
 * @param {Array} globalSteps
 * @param {Array} forcedSteps
 * @param {Array} safeSteps
 */
plan.getExperimentSteps = function(experimentId, eventSteps, globalSteps, forcedSteps, safeSteps) {
  var selectors = data.getExperimentEvents(experimentId);

  each(selectors, function(selector, events) {
    each(events, function(event) {
      eventSteps.push({
        eventName: event['eventName'],
        experimentIds: event['experimentIds'],
        revenue: event['revenue'],
        selector: selector,
        type: "event '" + event['eventName'] + "' (experiment " + experimentId + ")",
        waitUntilSelectorReady: true
      });
    });
  });

  var css = data.getExperimentCss(experimentId);
  var code = data.getExperimentCode(experimentId);

  if (css) {
    globalSteps.push({
      code: '$("body").append("<style>' + quote(css) + '</style>");',
      selector: "body",
      type: "global css (experiment " + experimentId + ")",
      waitUntilSelectorReady: true
    });
  }

  if (code) {
    plan.appendStepsFromCode(code, forcedSteps, safeSteps);
  }
};

/**
 * @param {string} variationId
 * @param {Array} forcedSteps
 * @param {Array} safeSteps
 */
plan.getVariationSteps = function(variationId, forcedSteps, safeSteps) {
  var code = data.getVariationCode(variationId);
  code = plan.filterUrlSpecificVariationCode(code);
  plan.appendStepsFromCode(code, forcedSteps, safeSteps, variationId);
};

/**
 * @param {string} code
 * @param {Array} forcedSteps
 * @param {Array} safeSteps
 * @param {string=} variationId
 */
plan.appendStepsFromCode = function(code, forcedSteps, safeSteps, variationId) {
  if (containsString(code, "_optimizely_redirect")) {
    forcedSteps.push({
      code: code,
      type: "code forced (redirect)",
      variationId: variationId
    });
  }
  else {
    var codeLines = code.split("\n");
    var isEditorOnly = false;
    var immediate = false;
    var immediateCodeLines = [];
    var jQueryExpression = plan.jQueryExpression;
    var rearrangeExpression = plan.rearrangeExpression;
    var nonJQueryCodeLines = [];

    while (codeLines.length > 0) {
      var codeLine = trim(codeLines.shift());
      var containsInvalidJQuery = nonJQueryCodeLines.length > 0;

      if (codeLine) {
        // The first parts set the state.
        if (containsRegEx(codeLine, /_optimizely_evaluate\s{0,9}=\s{0,9}force/i)) {
          immediate = true;
          continue;
        }
        else if (containsRegEx(codeLine, /_optimizely_evaluate\s{0,9}=\s{0,9}safe/i) ||
                 containsRegEx(codeLine, /_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i)) {
          immediate = false;
          continue;
        }
        else if (containsRegEx(codeLine, /_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i)) {
          isEditorOnly = true;
          continue;
        }
        else if (containsRegEx(codeLine, /_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i)) {
          isEditorOnly = false;
          continue;
        }
        //if the line is only a comment... skip it
        else if (plan.commentRegex.exec(codeLine)) {
          continue;
        }
        if (isEditorOnly) {
          continue;
        }

        if (immediate) {
          immediateCodeLines.push(codeLine);
        }
        else {
          if (!containsInvalidJQuery) {
            var jQueryMatch = jQueryExpression.exec(codeLine);
            var selectors = [];

            if (!jQueryMatch) {
              containsInvalidJQuery = true;
            }
            else {
              selectors.push(jQueryMatch[1].replace(/^['"]|['"]$/g, ""));

              // Rearrange generates JS with two selectors that both need to
              // be present before executing. The first selector is the element
              // being moved, and the second is the target.
              var rearrangeMatch = rearrangeExpression.exec(codeLine);

              if (rearrangeMatch && rearrangeMatch.length > 4) {
                selectors.push(rearrangeMatch[4]);
              }

              safeSteps.push({
                code: codeLine,
                selector: selectors,
                type: "safe jquery",
                waitUntilSelectorReady: true,
                variationId: variationId
              });
            }
          }

          if (containsInvalidJQuery) {
            nonJQueryCodeLines.push(codeLine);
          }
        }
      }
    }

    if (immediateCodeLines.length > 0) {
      forcedSteps.push({
        code: immediateCodeLines.join("\n"),
        type: "forced evaluation",
        variationId: variationId
      });
    }

    if (nonJQueryCodeLines.length > 0) {
      safeSteps.push({
        code: nonJQueryCodeLines.join("\n"),
        type: "safe non-jquery",
        waitUntilDocumentReady: true,
        variationId: variationId
      });
    }
  }
};

plan.reset = function() {
  timer.addEvent('Plan', 'Resetting visitor buckets');
  plan.foreignBucketMap = {};
  plan.ignoredExperimentIds = {};
  plan.variationExperimentIds = {};
  plan.variations = [];
  plan.writeCookie();
};

/**
 * Zips arrays of URLs and match types into match condition object.
 *
 * @param {Array.<string>} urls
 * @param {Array.<string>} matches
 * @param {string} defaultMatch
 * @private
 * @return {Object}
 */
plan.zipConditions = function(urls, matches, defaultMatch) {
  var conditions = { 'values': [] };

  for (var i = 0, nUrls = urls.length; i < nUrls; i++) {
    conditions['values'].push({
      value: urls[i],
      match: matches[i] || defaultMatch
    });
  }

  return conditions;
};

/** @private */ plan.changeHandlers = [];
/** @private */ plan.foreignBucketMap = {};
/** @private */ plan.ignoredExperimentIds = {};

/**
 * Matches Javascript generated by rearrange:
 * $("selector1").detach().insertBefore("selector2");
 *
 * @private
 */
plan.rearrangeExpression = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/;

// The commentRegex is not as confusing as it looks. It can be simplifed as follows.
// 1) Removing js escape characters: ^(?:\s|(?://.*|/*(?:[^*]|*(?!\/))**/))*$
// 2) Remove non capturing groups: ^(\s|(//.*|/*([^*]|*(?!\/))**/))*$
// 3) Replace complex negative look ahead with lazy .* (does not work in all casses): ^(\s|(//.*|/*.*?*/))*$
/** @private */ plan.commentRegex = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/;
/** @private */ plan.jQueryExpression = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/;

/** @private */ plan.variationExperimentIds = {};
/** @private */ plan.variations = [];

// File: /mnt/ephemeral0/workspace/optimizely-master/src/www/js/client/main.js


main = function() {
  if (!TEST_MODULE) {
    optly.taint.fixJQueryTaintIssues($);
  }
  timer.addEvent("Main", "Started, revision " + data.getRevision());
  query.process();
  api.checkForDisable();

  if (directive.isEnabled) {
    evaluator.evaluateProjectCode();
  }

  // Load the admin script if the token is provided
  // Ensure this happens before api.initialize.
  if (directive.previewScriptName && !optly.client.preview.ENABLED) {
    preview_loader.loadPreview();
    return;
  }
  // Handle deprecated links
  else if (!optly.client.preview.ENABLED && directive.shouldLoadPreview && !directive.previewScriptName) {
    preview_loader.loadSplashScreen('This preview link has expired. Please return to Optimizely and preview again to get a new link.');
    return;
  }

  // All other initializes should be called before api.initialize
  // (to ensure pre-pushed API calls are evaluated correctly)
  api.loadCachedAsyncInfo();
  cookie.initialize();
  user.initialize();
  plan.readCookie();
  segmenter.initialize();
  redirect.initialize();

  // now initialize the API
  visitor.initialize();
  api.initialize(visitor);
  optly.client.rum.instance.recordEvent('apiInitialize');

  // Make sure preview script matches. This must be immediately after api.initialize.
  if (optly.client.preview.ENABLED && !directive.previewVerified) {
    timer.addEvent('Main', 'Disabling because preview project not verified.');
    return;
  }

  iapi.initialize();

  // If there are any optimizely_x query params passed... process them now
  // This needs to run after api.initialize, otherwise condition.passesTests is inaccurate.
  query.processForceParameters();

  // If the user has made a request with force parameters without enabling them, let them know and exit main flow
  if (directive.requestedInvalidForceParameters) {
    preview_loader.loadSplashScreen('Force parameters are disabled for this project. See Project Code Settings.');
    return;
  }
  main.log();

  if (directive.isEditor) {
    // URL here must match innie.js serving path in www/app.yaml
    loadScript('https://' + data.getWebHost() + '/js/innie.js?_=' + (+new Date));
  }

  if (directive.isEnabled) {
    distributor.distributeAll();
    plan.writeCookie();
    tracker.enableEngagementTracking();
    if (!directive.shouldSkipPageTracking) {
      if (directive.delayPageviewTracking > 0) {
        setTimeout(function() {
          tracker.addPageviewEvent(document.location.href);
        }, directive.delayPageviewTracking);
      }
      else {
        tracker.addPageviewEvent(document.location.href);
      }
    }
    tracker.sendLogEvents();
    integrator.makeThirdPartyRequests();
  }

  plan.log();

  if (directive.isEditor) {
    api.finalize();
  }
  else if (directive.isEnabled) {
    optly.client.rum.instance.recordEvent('beginEvaluate');
    evaluator.evaluate();
    api.finalize();
    timer.flushLogs();

    if (!data.isInstallationVerified()) {
      tracker.sendVerificationRequest();
    }
  }

  setTimeout(function() {
    window['optimizelyCode'] = {};
  }, 0);
  // After GEO_TIMEOUT milliseconds give up on geo
  setTimeout(function() {
    api.activateGeoDelayedExperiments();
  }, GEO_TIMEOUT);
  // We send the rum data 1 second after GEO_TIMEOUT so geo has lots of time to fail
  setTimeout(function() {
    if (!optly.client.preview.ENABLED && directive.shouldTrackEvents) {
      optly.client.rum.instance.sendRum();
    }
  }, GEO_TIMEOUT + 1000);

  timer.addEvent("Main", "End of main");
  optly.client.rum.instance.recordEvent("mainEnd");
};

main.log = function() {
  timer.addEvent("Info", "Is enabled: " + directive.isEnabled);
  timer.addEvent("Info", "Diagnostic enabled: " + optly.client.diagnostic.ENABLED);
  timer.addEvent("Info", "Force variation enabled: " + data.isForceVariationEnabled());
  timer.addEvent("Info", "Script to load: " + (directive.scriptToLoad || "none"));
  timer.addEvent("Info", "Browser type: " + user.getBrowserId());
  timer.addEvent("Info", "Browser version: " + user.getBrowserVersion());
  var mobileBrowserType = user.getMobileId();
  if (mobileBrowserType !== "unknown") {
    timer.addEvent("Info", "Mobile browser type: " + mobileBrowserType);
  }
  timer.addEvent("Info", "New vs returning: " + user.getNewVsReturning());
  timer.addEvent("Info", "Source type: " + segmenter.getSourceType());
  timer.addEvent("Info", "User ID: " + user.getId());
};

var catchMain = optly.client.diagnostic.ENABLED ? function() {
  try {
    main();
  }
  catch(e) {
    tracker.sendErrorLog(e);
  }
}: main;

if (!optly.client.preview.ENABLED) {
  catchMain();
}
optly.Cleanse.finish();
};
optimizelyCode({
    "log_host": "log.optimizely.com",
    "goal_expressions": {
        "1342040577": ["^ipadeducationclicks$"],
        "1348180616": ["^ipadaccessoriesclicks$"],
        "1348180617": ["^ipadrefurbclicks$"],
        "1463362711": [".apple.com/us/checkout"],
        "2353300291": ["^golf\\_glove\\_clicks$"],
        "1348170647": ["^ipadnowtrendingclicks$"],
        "1459922713": ["^shiponlycount$"],
        "1460892699": ["^ppucount$"],
        "776980255": ["^(https?://)?(www\\.)?store\\.apple\\.com\\/us\\/cart/?(\\?.*)?(#.*)?$"],
        "708710945": ["^smallbento\\-link$"],
        "1344850599": [".apple.com/us/cart"],
        "749003052": ["^businessclicks$"],
        "2403650481": ["^ipad\\_air\\_2\\_button\\_clicks$"],
        "1698720052": ["^atc\\-us$"],
        "1007340085": ["^accessoriesclicks$"],
        "2447230984": ["^ipad\\_mini\\_3\\_button\\_clicks$"],
        "702255930": ["^nowtrendingclicks$"],
        "719385909": ["^refurbclicks$"],
        "721900742": ["^banner\\-click$"],
        "718030795": ["^ribbon\\_clicks$"],
        "2361520331": ["^wahoo\\_tickr\\_clicks$"],
        "2955870935": ["^macforbusinessclicks$"],
        "715790689": ["^smallbento\\_clicks$"],
        "1348190690": ["^ipadbusinessclicks$"],
        "703207792": ["^educationclicks$"],
        "341615730": ["^engagement$"],
        "1011150078": [".apple.com/us/checkout/thankyou"],
        "740081783": ["^banner\\-link\\_clicks$"],
        "746437369": ["^communityclicks$"],
        "2369490111": ["^oakley\\_airwave\\_clicks$"],
        "1344820606": ["^ipadcomparemodelsclicks$"],
        "1344820607": ["^ipadqaclicks$"]
    },
    "experiments": {
        "8160482939": {
            "audiences": [8155510910],
            "variation_weights": {
                "8156880708": 5000,
                "8160590073": 5000
            },
            "name": "USValentine'sDay20161209p",
            "enabled": true,
            "variation_ids": ["8156880708", "8160590073"],
            "site_catalyst_evar": 52,
            "urls": [{
                "match": "regex",
                "value": ".apple.com/shop/gifts($|\\?)"
            }],
            "enabled_variation_ids": ["8156880708", "8160590073"]
        },
        "8022400602": {
            "audiences": [8017182032],
            "variation_weights": {
                "8016520643": 10000
            },
            "name": "MOWSignInTest_Bootstrap",
            "enabled": true,
            "variation_ids": ["8016520643"],
            "urls": [{
                "match": "regex",
                "value": ".apple.com/shop/sign_in\\?c="
            }],
            "enabled_variation_ids": ["8016520643"]
        },
        "7975212227": {
            "audiences": [7947093739],
            "variation_weights": {
                "7975881650": 5000,
                "7953254947": 5000
            },
            "name": "MOWEmptyBag20161202p",
            "enabled": true,
            "variation_ids": ["7975881650", "7953254947"],
            "site_catalyst_evar": 52,
            "urls": [{
                "match": "regex",
                "value": ".apple.com/shop/bag"
            }, {
                "negate": true,
                "match": "regex",
                "value": ".apple.com/shop/bag/saved_bag"
            }],
            "enabled_variation_ids": ["7975881650", "7953254947"]
        },
        "8021181124": {
            "audiences": [8017182032],
            "conditional_code": "s.prop8 === \"AOS: checkout\"",
            "variation_weights": {
                "8019203267": 5000,
                "7999834618": 5000
            },
            "activation_mode": "manual",
            "name": "MOWSignInTest_US_Con_20161208p",
            "enabled": true,
            "variation_ids": ["7999834618", "8019203267"],
            "site_catalyst_evar": 52,
            "urls": [{
                "match": "regex",
                "value": ".apple.com/shop/sign_in\\?c="
            }],
            "enabled_variation_ids": ["7999834618", "8019203267"]
        },
        "8150894550": {
            "audiences": [8160164724],
            "variation_weights": {
                "8154424007": 5000,
                "8150934698": 5000
            },
            "name": "MOWUSValentine'sDay20161209p",
            "enabled": true,
            "variation_ids": ["8154424007", "8150934698"],
            "site_catalyst_evar": 52,
            "urls": [{
                "match": "regex",
                "value": ".apple.com/shop/gifts($|\\?)"
            }],
            "enabled_variation_ids": ["8154424007", "8150934698"]
        }
    },
    "audiences": {
        "862060009": {
            "conditions": ["and", {
                "dimension_id": 856271453,
                "value": "window.optimizely.push([\"activate\"]);\nfalse;"
            }],
            "name": "Trigger Manual Activation Call",
            "segment_id": 856540696
        },
        "8155510910": {
            "conditions": ["and", ["or", ["or", {
                    "dimension_id": 856271453,
                    "value": "var optlyaovtm = 0; //1 = ALWAYS ON, 0 = OBEY TIMER\nvar optlytmb = 1483488000000; //BEGIN TIME IN MILLISECONDS 01/04/2017 12:00:00 AM PST\nvar optlytme = 1487073599000; //END TIME IN MILLISECONDS 02/14/2017 11:59:59 PM PST\n\n// *** DO NOT MODIFY BELOW THIS LINE ***\n\n//soft time logic\u00a0\nvar optlytm = false;\u00a0\nif(window.optimizely_tm >= optlytmb && window.optimizely_tm <= optlytme){\n\toptlytm = true;\n}\u00a0\n\n//return val\u00a0\noptlytm || optlyaovtm;\n"
                }]],
                ["or", ["or", {
                        "dimension_id": 696316307,
                        "value": "ff"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ff2"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ff3"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ff4"
                    }, {
                        "dimension_id": 696316307,
                        "value": "gc"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ie10"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ie11"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ie8"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ie9"
                    }, {
                        "dimension_id": 696316307,
                        "value": "opera"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari3"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari4"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari5"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari6"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari7"
                    }, {
                        "dimension_id": 696316307,
                        "value": "safari8"
                    }, {
                        "dimension_id": 696316307,
                        "value": "ipad"
                    }],
                    ["or", {
                        "dimension_id": 856271453,
                        "value": "window.navigator.userAgent.indexOf('Version/9') !== -1"
                    }],
                    ["or", {
                        "dimension_id": 856271453,
                        "value": "window.navigator.userAgent.indexOf('Version/10') !== -1"
                    }],
                    ["or", {
                        "dimension_id": 7973551847,
                        "value": "tablet"
                    }]
                ],
                ["or", ["not", ["or", {
                    "dimension_id": 7973551847,
                    "value": "mobile"
                }, {
                    "dimension_id": 7973551847,
                    "value": "iphone"
                }]]]
            ],
            "name": "USValentine'sDay20161209t"
        },
        "7947093739": {
            "conditions": ["and", ["or", ["or", {
                    "dimension_id": 856271453,
                    "value": "var optlyaovtm = 0; //1 = ALWAYS ON, 0 = OBEY TIMER\nvar optlytmb = 1474502400000; //BEGIN TIME IN MILLISECONDS 09/22/2016 12:00:00 AM\nvar optlytme = 1481875199000; //END TIME IN MILLISECONDS 12/15/2016 11:59 PM PST\n\n// *** DO NOT MODIFY BELOW THIS LINE ***\n\n//soft time logic\u00a0\nvar optlytm = false;\u00a0\nif(window.optimizely_tm >= optlytmb && window.optimizely_tm <= optlytme){\n\toptlytm = true;\n}\u00a0\n\n//return val\u00a0\noptlytm || optlyaovtm;"
                }]],
                ["or", ["or", {
                    "dimension_id": 696316307,
                    "value": "android"
                }, {
                    "dimension_id": 696316307,
                    "value": "blackberry"
                }, {
                    "dimension_id": 696316307,
                    "value": "windows phone"
                }, {
                    "dimension_id": 696316307,
                    "value": "iphone"
                }, {
                    "dimension_id": 696316307,
                    "value": "mobile"
                }]],
                ["or", ["not", ["or", {
                    "dimension_id": 696316307,
                    "value": "ipad"
                }]]],
                ["or", ["not", ["or", {
                    "dimension_id": 7973551847,
                    "value": "ipad"
                }, {
                    "dimension_id": 7973551847,
                    "value": "tablet"
                }]]]
            ],
            "name": "MOW EmptyBag"
        },
        "8160164724": {
            "conditions": ["and", ["or", ["or", {
                    "dimension_id": 856271453,
                    "value": "var optlyaovtm = 0; //1 = ALWAYS ON, 0 = OBEY TIMER\nvar optlytmb = 1483488000000; //BEGIN TIME IN MILLISECONDS 01/04/2017 12:00:00 AM PST\nvar optlytme = 1487073599000; //END TIME IN MILLISECONDS 02/14/2017 11:59 PM PST\n\n// *** DO NOT MODIFY BELOW THIS LINE ***\n\n//soft time logic\u00a0\nvar optlytm = false;\u00a0\nif(window.optimizely_tm >= optlytmb && window.optimizely_tm <= optlytme){\n\toptlytm = true;\n}\u00a0\n\n//return val\u00a0\noptlytm || optlyaovtm;"
                }]],
                ["or", ["or", {
                    "dimension_id": 696316307,
                    "value": "android"
                }, {
                    "dimension_id": 696316307,
                    "value": "blackberry"
                }, {
                    "dimension_id": 696316307,
                    "value": "windows phone"
                }, {
                    "dimension_id": 696316307,
                    "value": "iphone"
                }, {
                    "dimension_id": 696316307,
                    "value": "mobile"
                }]],
                ["or", ["not", ["or", {
                    "dimension_id": 696316307,
                    "value": "ipad"
                }]]],
                ["or", ["not", ["or", {
                    "dimension_id": 7973551847,
                    "value": "ipad"
                }, {
                    "dimension_id": 7973551847,
                    "value": "tablet"
                }]]]
            ],
            "name": "MOWUSValentine'sDay20161209t"
        },
        "8017182032": {
            "conditions": ["and", ["or", ["or", {
                    "dimension_id": 856271453,
                    "value": "var optlyaovtm = 0; //1 = ALWAYS ON, 0 = OBEY TIMER\nvar optlytmb = 1474502400000; //BEGIN TIME IN MILLISECONDS 09/22/2016 12:00:00 AM\nvar optlytme = 1487318399000; //END TIME IN MILLISECONDS 2/16/2017 11:59 PM PST\n\n// *** DO NOT MODIFY BELOW THIS LINE ***\n\n//soft time logic\u00a0\nvar optlytm = false;\u00a0\nif(window.optimizely_tm >= optlytmb && window.optimizely_tm <= optlytme){\n\toptlytm = true;\n}\u00a0\n\n//return val\u00a0\noptlytm || optlyaovtm;"
                }]],
                ["or", ["or", {
                    "dimension_id": 696316307,
                    "value": "android"
                }, {
                    "dimension_id": 696316307,
                    "value": "blackberry"
                }, {
                    "dimension_id": 696316307,
                    "value": "windows phone"
                }, {
                    "dimension_id": 696316307,
                    "value": "iphone"
                }, {
                    "dimension_id": 696316307,
                    "value": "mobile"
                }]],
                ["or", ["not", ["or", {
                    "dimension_id": 7973551847,
                    "value": "ipad"
                }]]]
            ],
            "name": "MOWSignInBootstrap"
        }
    },
    "www_host": "app.optimizely.com",
    "public_suffixes": {
        "apple.com": ["secure1.store.apple.com", "www.apple.com"]
    },
    "dimensions": {
        "7973551847": {
            "condition_type": "device"
        },
        "1464880010": {
            "api_name": "LZ",
            "condition_type": "custom_dimension",
            "name": "Landing Zone",
            "segment_id": 1469580014
        },
        "696316307": {
            "condition_type": "browser"
        },
        "856271453": {
            "condition_type": "code"
        }
    },
    "version": "master-2730.398401548198777260",
    "admin_account_id": 199382811,
    "blacklisted_experiments": [7924692343, 4539909090, 8011241667, 7566681040, 657512648, 8016420539, 8015310796, 623530862, 5404060236, 8007890800, 6988561010, 7464602997, 6202340342, 4953140759, 7956321512, 8018710555, 7998701341],
    "project_id": 341800575,
    "revision": 612,
    "summary_revenue_goal_id": 341892035,
    "installation_verified": true,
    "preview_host": "//optimizely.s3.amazonaws.com",
    "api_host": "api.optimizely.com",
    "variations": {
        "8019203267": {
            "code": "/* _optimizely_evaluate=force */\n\nif (s.prop8.length > 0) {\n\tif(s.prop8 === \"AOS: checkout\") {\n\t\twindow.makeChanges = function() {\n\t\t\toptimizely.$('.accountbox').css({'padding':'0 18px'});\n\t\t\toptimizely.$('.accountbox #account-page-header').css({'border':'0','margin':'21px 0 9px','padding':'0'});\n\t\t\toptimizely.$('.accountbox #account-page-header h1').css({'border':'0','margin':'0','font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'32px','line-height':'36px','color':'#333','padding':'0','font-weight':'300'});\n\t\t\toptimizely.$('.accountbox #account-page-header h1').text('Please sign in.');\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form').css({'border':'0','padding-bottom':'4px'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in h2').text('Enter your Apple ID for faster checkout and to easily track or modify orders.');\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in h2').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'18px','line-height':'26px','font-weight':'400','color':'#333','padding':'0 0 11px 0'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .placeholder').css({'padding':'9px 9px 9px 16px'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .placeholder #username-label').text('Apple ID');\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .placeholder #password-label').text('Password');\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .placeholder #username-label').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'20px','color':'#999','font-weight':'300'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .placeholder #password-label').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'20px','color':'#999','font-weight':'300'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .login ').css({'margin':'0 0 15px 0','box-shadow':'inset 0 0px 0px #e6e6e6','border':'1px solid #d6d6d6'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in fieldset .field-with-placeholder .password ').css({'margin':'0 0 15px 0','box-shadow':'inset 0 0px 0px #e6e6e6','border':'1px solid #d6d6d6'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in .actions').css({'width':'100%','padding':'0','float':'none','margin':'1px 0 0 0'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in #iforgot-link').css({'width':'100%','padding':'0','margin-top':'16px'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in #iforgot-link #go-iforgot').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'24px','font-weight':'400','color':'#0070c9'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in .actions .button').css({'background-color':'#0070c9','background':'linear-gradient(#42a1ec,#0070c9)','border':'1px solid #07c','color':'#fff','font-size':'16px','line-height':'34px','font-weight':'300','font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','padding':'0'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in .actions .button span').css({'font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','font-size':'16px','line-height':'34px','font-weight':'300'});\n\t\t\tif(optimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in .mvtAppleidtext').length === 0) {\n\t\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in').append('<p class=\"mvtAppleidtext\">Your Apple ID is the name you use to sign in to iTunes, the App Store, and iCloud.</p>');\n\t\t\t}\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .returning-customer .form .sign-in .mvtAppleidtext').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'24px','font-weight':'400','color':'#333','padding':'0 0 10px 0','margin-top':'8px'});\n\t\t\tif(optimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider').length === 0) {\n\t\t\t\toptimizely.$('<div class=\"mvt-section-divider\"><hr class=\"lineleft\"/><span class=\"linetext\">Or</span><hr class=\"lineright\" /></div>').insertBefore('.accountbox #account-content .login-checkout .guest-checkout');\n\t\t\t}\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider').css({'width':'100%','text-align':'center'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider hr').css({'margin':' 10px auto 0 auto','width':'45%','border-top':'1px solid #d6d6d6'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider .lineleft').css({'float':'left'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider .lineright').css({'float':'right'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .mvt-section-divider .linetext').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'24px','font-weight':'400','color':'#333'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout h2').css({'display':'none'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout').css({'margin-bottom':'10px','padding-top':'14px'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout .actions button').css({'background-color':'#0070c9','background':'linear-gradient(#42a1ec,#0070c9)','border':'1px solid #07c','color':'#fff','font-size':'16px','line-height':'34px','font-weight':'300','font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','padding':'0'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout .actions button span').css({'font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','font-size':'16px','line-height':'34px','font-weight':'300'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout .actions button span.label').text('Use Guest Checkout');\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout p').css({'display':'none'});\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout .actions').css({'width':'100%','padding':'0','float':'none','margin-bottom':'16px'});\n\t\t\tif(optimizely.$('.accountbox #account-content .login-checkout .guest-checkout .mvtGuestIDtext').length === 0) {\n\t\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout').append('<span class=\"mvtGuestIDtext\">You can create an Apple ID at the end of checkout.</span>');\n\t\t\t}\n\t\t\toptimizely.$('.accountbox #account-content .login-checkout .guest-checkout .mvtGuestIDtext').css({'font-family':'Myriad Set Pro, Helvetica Neue,Helvetica,sans-serif','font-size':'16px','line-height':'24px','font-weight':'400','color':'#333','padding':'0 0 10px 0'});\n\t\t\toptimizely.$('.accountbox .cart-navigation').css({'background':'#fff','margin':'0 0 20px 0','padding':'20px 0'});\n\t\t\toptimizely.$('.accountbox .cart-navigation #cancel-button').css({'background-color':'#0070c9','background':'linear-gradient(#fff,#eee)','border':'1px solid #d6d6d6','color':'#0170c9','font-size':'16px','line-height':'34px','font-weight':'300','font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','margin':'0','width':'100%','padding':'0','float':'none'});\n\t\t\toptimizely.$('.accountbox .cart-navigation #cancel-button span').css({'font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','font-size':'16px','line-height':'34px','font-weight':'400'});\n\t\t\toptimizely.$('.as-footnotes.as-globalfooter-transparent .as-footnotes-content .as-footnotes-sosumi').css({'border-top':'1px solid transparent'});\n\t\t\toptimizely.$('body').attr('style', 'visibility:visible; display:block');\n\t\t};\n\t\twindow.makeChanges();\n\t\tvar oldXHR = window.XMLHttpRequest;\n\t\tfunction newXHR() {\n\t\t\tvar realXHR = new oldXHR();\n\t\t\trealXHR.addEventListener(\"readystatechange\", function() {\n\t\t\t\tif(realXHR.readyState==4 && realXHR.status==200){\n\t\t\t\t\twindow.makeChanges();\n\t\t\t\t}\n\t\t\t}, false);\n\t\t\treturn realXHR;\n\t\t}\n\t\twindow.XMLHttpRequest = newXHR;\n\t}\n\telse\n\t{}\n}\n\n\n/* _optimizely_evaluate=safe */",
            "name": "Variation #1"
        },
        "8156880708": {
            "name": "Original"
        },
        "8154424007": {
            "name": "Original"
        },
        "8150934698": {
            "code": "function callExperiment() {\n\n    if (jQuery('.pd-vday-spotlight').length > 0) {\n\n        jQuery('.accessories .as-l-fullwidth.as-pinwheel.as-pinwheel11').html('<div><div class=\"pd-billboard pd-vday-spotlight-accessories-2017\"><div class=\"pd-l-plate\"><div class=\"pd-billboard-info\"> <h2 class=\"pd-billboard-header\">Perfect matches.</h2> <p class=\"pd-billboard-link\"> <a href=\"/shop/accessories/all-accessories/made-by-apple\" data-slot-name=\"main8\" data-feature-name=\"Astro Link\" data-display-name=\"AOS:home/shop_accessories/all_accessories/made_by_apple\" class=\"category-link fwl more less-is-more\">Shop Made by Apple accessories</a>\t</p></div> <img alt=\"\" astro:size=\"natural\" class=\"pd-billboard-hero\" src=\"http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/v/da/vday/spotlight/vday-spotlight-airpods-2017?wid=600&amp;amp;hei=936&amp;amp;fmt=png-alpha&amp;amp;qlt=95&amp;amp;.v=1473705678057\" width=\"217\"> </div></div></div>');\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth.as-pinwheel.as-pinwheel11').removeClass('as-pinwheel as-pinwheel11');\n\t\tjQuery('.accessories .as-l-fullwidth.as-pinwheel.as-pinwheel11').removeAttr('data-template');\n\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017').css({'background-color':'#fafafa'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate').css({'min-height':'0','width':'84%'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info').css({'text-align': 'center','margin':'0 auto','padding':'70px 0 37px','width': '262px'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info .pd-billboard-header').css({'font-size':'32px','line-height':'1.125','font-weight':'300','letter-spacing':'0em','padding-top':'9px'});\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info .pd-billboard-link').css({'padding-top':'9px'});\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-hero').css({'position':'static','vertical-align':'bottom','left':'auto','display':'block','margin':'0 auto','margin-bottom':'-12px'});\n\n\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017\").css({'background-color':'#fafafa'});\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017 .pd-l-plate\").css({'border-top':'0'});\n\t\t\t\n\t\t\n    }\n}\ncallExperiment();",
            "name": "Variation #1"
        },
        "8016520643": {
            "code": "/* _optimizely_evaluate=force */\noptimizely.$('head').append('<style>body { visibility:hidden;display:\"\" }</style>');\nvar myInterval = setInterval(function() {\n  if (s.prop8.length > 0) {\n    if(s.prop8 === \"AOS: checkout\")\n    {\n      \n    \twindow.optimizely.push([\"activate\", 8021181124]);\n    }\n    else\n    {\n     \n      optimizely.$('body').attr('style', 'visibility:visible; display:block');\n    }\n    clearInterval(myInterval);\n  }\n}, 50);\n/* _optimizely_evaluate=safe */",
            "name": "bootstrap"
        },
        "7975881650": {
            "name": "Original"
        },
        "7953254947": {
            "code": "function callExperiment() {\n\n    if (jQuery('#cart-items').length === 0) {\n\n        jQuery(\"#primary #bag-banner\").css({'display':'none'});\n        jQuery(\"#primary .cart-level-messages\").html(\"\");\n        jQuery(\"#primary .inset-row .grid-row #page-header\").html(\"\");\n        jQuery(\"#primary .inset-row .grid-row #page-header\").css({'display':'none'});\n        jQuery(\"#primary #cart .empty-cart-container\").css({'padding':'0'});\n        jQuery(\"#primary #cart .empty-cart-container #cart-items-empty\").css({'display':'none'});\n        jQuery(\"#primary #cart .empty-cart-container .pvm.inset-row\").css({'padding':'0'});\n        jQuery(\"#primary #cart .empty-cart-container .pvm.inset-row\").html('<div class=\"section-content align-center\" data-analytics-region=\"buy strip\" style=\"padding: 43px 0 0 0; text-align: center;\"><div class=\"row\" style=\"position: relative;z-index: 1;margin-bottom: 42px;\"><h3 style=\"margin: 0 auto;font-size: 28px;line-height:32px;font-weight: 100;color: #333;font-family: Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif;\">Your bag is empty.</br> Shop and buy today.</h3><p class=\"align-center\" style=\"margin: 0; width: 100%; text-align: center;font-family: Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif;font-size: 18px; line-height: 26px;font-weight: 300;padding: 20px 0 0 0;color: #333;\">Place an order online and get free </br>two-day delivery. Or pickup your </br>items at the Apple Store.</p></div><div class=\"row store-links center\" style=\"font-size: 14px; line-height: 18px;font-weight: 400;font-family: Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif;color: #666;\"><div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"><a href=\"/mac/\" class=\"block\"><img src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/mac/shop-mac-icon?wid=144&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" style=\"width: 74px;height: 60px;margin-bottom: 8px;\" class=\"image-retail-find-a-store-buystrip-mac center\"><div class=\"figcaption\" style=\"color:#666;\">Shop Mac</div></a></div> <div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"> <a href=\"/ipad/\" class=\"block\"> <img class=\"center\" src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/ipad/shop-ipad-icon?wid=84&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" style=\"width: 44px;height: 60px;margin-bottom: 8px;\"> <div class=\"figcaption\" style=\"color:#666;\">Shop iPad</div> </a> </div> <div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"> <a href=\"/iphone/\" class=\"block\"> <img src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/iphone/shop-iphone-icon?wid=56&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" class=\"center\" style=\"width: 29px;height: 60px;margin-bottom: 8px;\"> <div class=\"figcaption\" style=\"color:#666;\">Shop iPhone</div> </a> </div> <div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"> <a href=\"/watch/\" class=\"block\"> <img class=\"center\" src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/watch/shop-watch-icon?wid=108&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" style=\"width: 55px;height: 60px;margin-bottom: 8px;\"> <div class=\"figcaption\" style=\"color:#666;\">Shop Apple Watch</div> </a> </div> <div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"> <a href=\"/appletv/\" class=\"block\"> <img class=\"center\" src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/appletv/shop-appletv-icon?wid=120&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" style=\"width: 62px;height: 60px;margin-bottom: 8px;\"> <div class=\"figcaption\" style=\"color:#666;\">Shop Apple TV</div> </a> </div> <div class=\"column large-1 medium-2 small-6\" style=\"margin-bottom: 42px; width: 150px;display: inline-block;\"> <a href=\"/us/shop/goto/buy_accessories\" class=\"block\"> <img class=\"center\" src=\"http://as-images.apple.com/is/image/AppleInc/aos/published/images/s/ho/shop/accessories/shop-accessories-icon?wid=124&hei=120&fmt=png-alpha&qlt=80&.v=1478552744849\" style=\"width: 64px;height: 60px;margin-bottom: 8px;\"> <div class=\"figcaption\" style=\"color:#666;\">Shop Accessories</div> </a> </div> </div> </div>');\n        jQuery(\"#primary #cart .empty-cart-container .pvm.inset-row .section-content.align-center .row.store-links.center a .figcaption\").css({'padding-top':'0.5px'});\n        jQuery(\"#primary #cart .empty-cart-container .pvm.inset-row .section-content.align-center .row.store-links.center a img\").css({'height':'60px'});\n        jQuery(\"#primary #cart .empty-cart-container .pvm.inset-row .section-content.align-center .row.store-links.center .column.large-1.medium-2.small-6\").css({'margin-bottom':'41px'});\n        jQuery(\"#primary #cart .empty-cart-action-container\").css({'background-color':'#fff','border-bottom':'1px solid #e6e6e6','margin':'0','padding-top':'0'});\n        jQuery(\"#primary #cart .empty-cart-action-container .empty-cart-action-group .pts.clearfix a\").addClass('button cart-action-checkout button button-transaction button-mvt');\n        jQuery(\"#primary #cart .empty-cart-action-container .empty-cart-action-group .pts.clearfix\").css({'padding-top':'7px'});\n        jQuery(\"#primary #cart .empty-cart-action-container .empty-cart-action-group .tac.clearfix.ptl.pbms\").css({'padding':'35px 0 13px 0'});\n        jQuery(\"#primary #cart .empty-cart-action-container .empty-cart-action-group .pts.clearfix .cart-action-checkout.button.button-transaction.button-mvt\").css({'background-color':'#0070c9','background':'linear-gradient(#42a1ec,#0070c9)','border':'1px solid #07c','color':'#fff','font-size':'16px','line-height':'34px','font-weight':'300','font-family':'Myriad Set Pro,Helvetica Neue,Helvetica,Arial,sans-serif','height':'34px'});\n    }\n}\ncallExperiment();\n\njQuery('#cart-actions').bind('DOMNodeRemoved', function() {\n    var myInterval = setInterval(function() {\n        //debugger;\n        callExperiment();\n        clearInterval(myInterval);\n    }, 200);\n});",
            "name": "Variation #1"
        },
        "8160590073": {
            "code": "function callExperiment() {\n\n    if (jQuery('.pd-vday-spotlight').length > 0) {\n\n        jQuery('.accessories .as-l-fullwidth.as-pinwheel.as-pinwheel11').html('<div><div class=\"pd-billboard pd-vday-spotlight-accessories-2017\"><div class=\"pd-l-plate\"><div class=\"pd-billboard-info\"> <h2 class=\"pd-billboard-header\">Perfect matches.</h2> <p class=\"pd-billboard-link\"> <a href=\"/shop/accessories/all-accessories/made-by-apple\" data-slot-name=\"main8\" data-feature-name=\"Astro Link\" data-display-name=\"AOS:home/shop_accessories/all_accessories/made_by_apple\" class=\"category-link fwl more less-is-more\">Shop Made by Apple accessories</a>\t</p></div> <img alt=\"\" astro:size=\"natural\" class=\"pd-billboard-hero\" src=\"http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/v/da/vday/spotlight/vday-spotlight-airpods-2017?wid=646&amp;amp;hei=936&amp;amp;fmt=png-alpha&amp;amp;qlt=95&amp;amp;.v=1473705678057\" width=\"310\"> </div></div></div>');\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth.as-pinwheel.as-pinwheel11').removeClass('as-pinwheel as-pinwheel11');\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017').css({'background-color':'#fafafa'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate').css({'min-height':'526px'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info').css({'padding':'219px 0 50px 492px'});\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info .pd-billboard-header').css({'font-size':'52px','line-height':'1.07724','font-weight':'200','letter-spacing':'-.016em','padding-top':'20px'});\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-info .pd-billboard-link').css({'padding-top':'16px'});\n\t\t\n\t\tjQuery('.accessories .as-l-fullwidth .pd-billboard.pd-vday-spotlight-accessories-2017 .pd-l-plate .pd-billboard-hero').css({'position':'absolute','bottom':'-10px','left':'9px'});\n\n\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017\").css({'background-color':'#fafafa'});\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017 .pd-l-plate\").css({'border-top':'0'});\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017 .pd-l-plate .pd-billboard-info\").css({'padding':'194px 0 50px 41px','width':'500px'});\n\t\tjQuery(\".accessories .as-l-fullwidth.pd-util-plate-line-top .pd-billboard.pd-vday-spotlight-music-2017 .pd-l-plate .pd-billboard-hero\").css({'left':'651px'});\n\t\t\n\t\t\n    }\n}\ncallExperiment();",
            "name": "Variation #1"
        },
        "7999834618": {
            "code": "/* _optimizely_evaluate=force */\noptimizely.$('body').attr('style', 'visibility:visible; display:block');\n/* _optimizely_evaluate=safe */",
            "name": "Original"
        }
    },
    "project_js": "\n",
    "segments": {
        "341793217": {
            "segment_value_type": "source_type",
            "api_name": "optimizely_source_type",
            "id": 341793217,
            "name": "Source Type"
        },
        "1469580014": {
            "api_name": "LZ",
            "is_api_only": true,
            "dimension_id": 1464880010,
            "id": 1469580014,
            "name": "Landing Zone"
        },
        "856540696": {
            "audience_id": 862060009,
            "api_name": "trigger_manual_activation_call_2_2_3_1",
            "id": 856540696,
            "name": "Trigger Manual Activation Call"
        },
        "341824156": {
            "segment_value_type": "browser",
            "api_name": "optimizely_browser",
            "id": 341824156,
            "name": "Browser"
        },
        "341794206": {
            "segment_value_type": "mobile",
            "api_name": "optimizely_mobile",
            "id": 341794206,
            "name": "Mobile Visitors"
        },
        "341932127": {
            "segment_value_type": "campaign",
            "api_name": "optimizely_campaign",
            "id": 341932127,
            "name": "Campaign"
        }
    },
    "click_goals": [{
        "event_name": "nowtrendingclicks",
        "experiments": {
            "996095837": true,
            "698469559": true
        },
        "selector": ".tiles-12 > .tile-8"
    }, {
        "event_name": "educationclicks",
        "experiments": {
            "996095837": true,
            "698469559": true
        },
        "selector": ".tiles-12 > .tile-11"
    }, {
        "event_name": "smallbento-link",
        "experiments": {
            "739950725": true
        },
        "selector": "#coherent_id_41"
    }, {
        "event_name": "smallbento_clicks",
        "experiments": {
            "739950725": true
        },
        "selector": "#coherent_id_40"
    }, {
        "event_name": "ribbon_clicks",
        "experiments": {
            "2908211473": true,
            "739950725": true
        },
        "selector": ".superlink-hover"
    }, {
        "event_name": "refurbclicks",
        "experiments": {
            "996095837": true,
            "698469559": true
        },
        "selector": ".tiles-12 > .tile-10"
    }, {
        "event_name": "banner-click",
        "experiments": {
            "739950725": true
        },
        "selector": "#coherent_id_16"
    }, {
        "event_name": "banner-link_clicks",
        "experiments": {
            "739950725": true
        },
        "selector": "#coherent_id_17"
    }, {
        "event_name": "communityclicks",
        "experiments": {
            "996095837": true,
            "698469559": true
        },
        "selector": ".tiles-12 > .tile-9"
    }, {
        "event_name": "businessclicks",
        "experiments": {
            "2908211473": true,
            "996095837": true,
            "698469559": true
        },
        "selector": ".tiles-12 > .tile-12"
    }, {
        "event_name": "AccessoriesClicks",
        "experiments": {
            "996095837": true
        },
        "selector": ".tiles-12 > .tile-6"
    }, {
        "event_name": "iPadEducationClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-10"
    }, {
        "event_name": "iPadCompareModelsClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-6"
    }, {
        "event_name": "iPadQAClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-8"
    }, {
        "event_name": "iPadNowTrendingClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-7"
    }, {
        "event_name": "iPadAccessoriesClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-5"
    }, {
        "event_name": "iPadRefurbClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-9"
    }, {
        "event_name": "iPadBusinessClicks",
        "experiments": {
            "1344830616": true
        },
        "selector": ".tiles-11 > .tile-11"
    }, {
        "event_name": "atc-us",
        "experiments": {
            "3119010084": true,
            "3105240360": true,
            "2908211473": true,
            "1685430802": true,
            "3068642131": true,
            "3142810488": true,
            "3049860825": true
        },
        "selector": "button[name='add-to-cart']"
    }, {
        "event_name": "golf_glove_clicks",
        "experiments": {
            "2362730385": true
        },
        "selector": ".pinwheel > .row > div:eq(0) > div:eq(0)"
    }, {
        "event_name": "wahoo_tickr_clicks",
        "experiments": {
            "2362730385": true
        },
        "selector": ".pinwheel > .row > div:eq(2) > div:eq(0)"
    }, {
        "event_name": "oakley_airwave_clicks",
        "experiments": {
            "2362730385": true
        },
        "selector": ".pinwheel > .row > div:eq(0) > div:eq(1)"
    }, {
        "event_name": "ipad_air_2_button_clicks",
        "experiments": {
            "2454550454": true
        },
        "selector": ".info > .button"
    }, {
        "event_name": "ipad_mini_3_button_clicks",
        "experiments": {
            "2454550454": true
        },
        "selector": "span.button"
    }, {
        "event_name": "macforbusinessclicks",
        "experiments": {
            "2908211473": true
        },
        "selector": ".tiles-more > li:eq(13) > a:eq(0)"
    }]
});
