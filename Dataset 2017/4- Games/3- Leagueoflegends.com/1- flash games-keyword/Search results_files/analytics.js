;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module.exports) {
    module.exports = {};
    module.client = module.component = true;
    module.call(this, module.exports, require.relative(resolved), module);
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("avetisk-defaults/index.js", function(exports, require, module){
'use strict';

/**
 * Merge default values.
 *
 * @param {Object} dest
 * @param {Object} defaults
 * @return {Object}
 * @api public
 */
var defaults = function (dest, src, recursive) {
  for (var prop in src) {
    if (recursive && dest[prop] instanceof Object && src[prop] instanceof Object) {
      dest[prop] = defaults(dest[prop], src[prop], true);
    } else if (! (prop in dest)) {
      dest[prop] = src[prop];
    }
  }

  return dest;
};

/**
 * Expose `defaults`.
 */
module.exports = defaults;

});
require.register("component-clone/index.js", function(exports, require, module){

/**
 * Module dependencies.
 */

var type;

try {
  type = require('type');
} catch(e){
  type = require('type-component');
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj){
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}

});
require.register("component-cookie/index.js", function(exports, require, module){
/**
 * Encode.
 */

var encode = encodeURIComponent;

/**
 * Decode.
 */

var decode = decodeURIComponent;

/**
 * Set or get cookie `name` with `value` and `options` object.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {Mixed}
 * @api public
 */

module.exports = function(name, value, options){
  switch (arguments.length) {
    case 3:
    case 2:
      return set(name, value, options);
    case 1:
      return get(name);
    default:
      return all();
  }
};

/**
 * Set cookie `name` to `value`.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @api private
 */

function set(name, value, options) {
  options = options || {};
  var str = encode(name) + '=' + encode(value);

  if (null == value) options.maxage = -1;

  if (options.maxage) {
    options.expires = new Date(+new Date + options.maxage);
  }

  if (options.path) str += '; path=' + options.path;
  if (options.domain) str += '; domain=' + options.domain;
  if (options.expires) str += '; expires=' + options.expires.toGMTString();
  if (options.secure) str += '; secure';

  document.cookie = str;
}

/**
 * Return all cookies.
 *
 * @return {Object}
 * @api private
 */

function all() {
  return parse(document.cookie);
}

/**
 * Get cookie `name`.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function get(name) {
  return all()[name];
}

/**
 * Parse cookie `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parse(str) {
  var obj = {};
  var pairs = str.split(/ *; */);
  var pair;
  if ('' == pairs[0]) return obj;
  for (var i = 0; i < pairs.length; ++i) {
    pair = pairs[i].split('=');
    obj[decode(pair[0])] = decode(pair[1]);
  }
  return obj;
}

});
require.register("component-each/index.js", function(exports, require, module){

/**
 * Module dependencies.
 */

var type = require('type');

/**
 * HOP reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Iterate the given `obj` and invoke `fn(val, i)`.
 *
 * @param {String|Array|Object} obj
 * @param {Function} fn
 * @api public
 */

module.exports = function(obj, fn){
  switch (type(obj)) {
    case 'array':
      return array(obj, fn);
    case 'object':
      if ('number' == typeof obj.length) return array(obj, fn);
      return object(obj, fn);
    case 'string':
      return string(obj, fn);
  }
};

/**
 * Iterate string chars.
 *
 * @param {String} obj
 * @param {Function} fn
 * @api private
 */

function string(obj, fn) {
  for (var i = 0; i < obj.length; ++i) {
    fn(obj.charAt(i), i);
  }
}

/**
 * Iterate object keys.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

function object(obj, fn) {
  for (var key in obj) {
    if (has.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

/**
 * Iterate array-ish.
 *
 * @param {Array|Object} obj
 * @param {Function} fn
 * @api private
 */

function array(obj, fn) {
  for (var i = 0; i < obj.length; ++i) {
    fn(obj[i], i);
  }
}
});
require.register("component-indexof/index.js", function(exports, require, module){
module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
});
require.register("component-emitter/index.js", function(exports, require, module){

/**
 * Module dependencies.
 */

var index = require('indexof');

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  fn._off = on;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var i = index(callbacks, fn._off || fn);
  if (~i) callbacks.splice(i, 1);
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

});
require.register("component-event/index.js", function(exports, require, module){

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  if (el.addEventListener) {
    el.addEventListener(type, fn, capture || false);
  } else {
    el.attachEvent('on' + type, fn);
  }
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  if (el.removeEventListener) {
    el.removeEventListener(type, fn, capture || false);
  } else {
    el.detachEvent('on' + type, fn);
  }
  return fn;
};

});
require.register("component-inherit/index.js", function(exports, require, module){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
});
require.register("component-object/index.js", function(exports, require, module){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
});
require.register("component-trim/index.js", function(exports, require, module){

exports = module.exports = trim;

function trim(str){
  if (str.trim) return str.trim();
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  if (str.trimLeft) return str.trimLeft();
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  if (str.trimRight) return str.trimRight();
  return str.replace(/\s*$/, '');
};

});
require.register("component-querystring/index.js", function(exports, require, module){

/**
 * Module dependencies.
 */

var trim = require('trim');

/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if ('string' != typeof str) return {};

  str = trim(str);
  if ('' == str) return {};

  var obj = {};
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    obj[parts[0]] = null == parts[1]
      ? ''
      : decodeURIComponent(parts[1]);
  }

  return obj;
};

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

exports.stringify = function(obj){
  if (!obj) return '';
  var pairs = [];
  for (var key in obj) {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return pairs.join('&');
};

});
require.register("component-type/index.js", function(exports, require, module){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

});
require.register("component-url/index.js", function(exports, require, module){

/**
 * Parse the given `url`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(url){
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    host: a.host,
    port: a.port,
    hash: a.hash,
    hostname: a.hostname,
    pathname: a.pathname,
    protocol: a.protocol,
    search: a.search,
    query: a.search.slice(1)
  }
};

/**
 * Check if `url` is absolute.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isAbsolute = function(url){
  if (0 == url.indexOf('//')) return true;
  if (~url.indexOf('://')) return true;
  return false;
};

/**
 * Check if `url` is relative.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isRelative = function(url){
  return ! exports.isAbsolute(url);
};

/**
 * Check if `url` is cross domain.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isCrossDomain = function(url){
  url = exports.parse(url);
  return url.hostname != location.hostname
    || url.port != location.port
    || url.protocol != location.protocol;
};
});
require.register("ianstormtaylor-callback/index.js", function(exports, require, module){
var next = require('next-tick');


/**
 * Expose `callback`.
 */

module.exports = callback;


/**
 * Call an `fn` back synchronously if it exists.
 *
 * @param {Function} fn
 */

function callback (fn) {
  if ('function' === typeof fn) fn();
}


/**
 * Call an `fn` back asynchronously if it exists. If `wait` is ommitted, the
 * `fn` will be called on next tick.
 *
 * @param {Function} fn
 * @param {Number} wait (optional)
 */

callback.async = function (fn, wait) {
  if ('function' !== typeof fn) return;
  if (!wait) return next(fn);
  setTimeout(fn, wait);
};


/**
 * Symmetry.
 */

callback.sync = callback;

});
require.register("component-bind/index.js", function(exports, require, module){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

});
require.register("segmentio-bind-all/index.js", function(exports, require, module){

try {
  var bind = require('bind');
  var type = require('type');
} catch (e) {
  var bind = require('bind-component');
  var type = require('type-component');
}

module.exports = function (obj) {
  for (var key in obj) {
    var val = obj[key];
    if (type(val) === 'function') obj[key] = bind(obj, obj[key]);
  }
  return obj;
};
});
require.register("ianstormtaylor-bind/index.js", function(exports, require, module){

var bind = require('bind')
  , bindAll = require('bind-all');


/**
 * Expose `bind`.
 */

module.exports = exports = bind;


/**
 * Expose `bindAll`.
 */

exports.all = bindAll;


/**
 * Expose `bindMethods`.
 */

exports.methods = bindMethods;


/**
 * Bind `methods` on `obj` to always be called with the `obj` as context.
 *
 * @param {Object} obj
 * @param {String} methods...
 */

function bindMethods (obj, methods) {
  methods = [].slice.call(arguments, 1);
  for (var i = 0, method; method = methods[i]; i++) {
    obj[method] = bind(obj, obj[method]);
  }
  return obj;
}
});
require.register("ianstormtaylor-is-empty/index.js", function(exports, require, module){

/**
 * Expose `isEmpty`.
 */

module.exports = isEmpty;


/**
 * Has.
 */

var has = Object.prototype.hasOwnProperty;


/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty (val) {
  if (null == val) return true;
  if ('number' == typeof val) return 0 === val;
  if (undefined !== val.length) return 0 === val.length;
  for (var key in val) if (has.call(val, key)) return false;
  return true;
}
});
require.register("ianstormtaylor-is/index.js", function(exports, require, module){

var isEmpty = require('is-empty')
  , typeOf = require('type');


/**
 * Types.
 */

var types = [
  'arguments',
  'array',
  'boolean',
  'date',
  'element',
  'function',
  'null',
  'number',
  'object',
  'regexp',
  'string',
  'undefined'
];


/**
 * Expose type checkers.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


/**
 * Add alias for `function` for old browsers.
 */

exports.fn = exports['function'];


/**
 * Expose `empty` check.
 */

exports.empty = isEmpty;


/**
 * Expose `nan` check.
 */

exports.nan = function (val) {
  return exports.number(val) && val != val;
};


/**
 * Generate a type checker.
 *
 * @param {String} type
 * @return {Function}
 */

function generate (type) {
  return function (value) {
    return type === typeOf(value);
  };
}
});
require.register("jkroso-type/index.js", function(exports, require, module){

/**
 * refs
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(v){
  // .toString() is slow so try avoid it
  return typeof v === 'object'
    ? types[toString.call(v)]
    : typeof v
};

var types = {
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Arguments]': 'arguments',
  '[object Array]': 'array',
  '[object String]': 'string',
  '[object Null]': 'null',
  '[object Undefined]': 'undefined',
  '[object Number]': 'number',
  '[object Boolean]': 'boolean',
  '[object Object]': 'object',
  '[object Text]': 'textnode',
  '[object Uint8Array]': '8bit-array',
  '[object Uint16Array]': '16bit-array',
  '[object Uint32Array]': '32bit-array',
  '[object Uint8ClampedArray]': '8bit-array',
  '[object Error]': 'error'
}

if (typeof window != 'undefined') {
  for (var el in window) if (/^HTML\w+Element$/.test(el)) {
    types['[object '+el+']'] = 'element'
  }
}

module.exports.types = types

});
require.register("jkroso-equals/index.js", function(exports, require, module){

var type = require('type')

/**
 * assert all values are equal
 *
 * @param {Any} [...]
 * @return {Boolean}
 */

module.exports = function(){
	var i = arguments.length - 1
	while (i > 0) {
		if (!compare(arguments[i], arguments[--i])) return false
	}
	return true
}

// (any, any, [array]) -> boolean
function compare(a, b, memos){
	// All identical values are equivalent
	if (a === b) return true
	var fnA = types[type(a)]
	if (fnA !== types[type(b)]) return false
	return fnA ? fnA(a, b, memos) : false
}

var types = {}

// (Number) -> boolean
types.number = function(a){
	// NaN check
	return a !== a
}

// (function, function, array) -> boolean
types['function'] = function(a, b, memos){
	return a.toString() === b.toString()
		// Functions can act as objects
	  && types.object(a, b, memos) 
		&& compare(a.prototype, b.prototype)
}

// (date, date) -> boolean
types.date = function(a, b){
	return +a === +b
}

// (regexp, regexp) -> boolean
types.regexp = function(a, b){
	return a.toString() === b.toString()
}

// (DOMElement, DOMElement) -> boolean
types.element = function(a, b){
	return a.outerHTML === b.outerHTML
}

// (textnode, textnode) -> boolean
types.textnode = function(a, b){
	return a.textContent === b.textContent
}

// decorate `fn` to prevent it re-checking objects
// (function) -> function
function memoGaurd(fn){
	return function(a, b, memos){
		if (!memos) return fn(a, b, [])
		var i = memos.length, memo
		while (memo = memos[--i]) {
			if (memo[0] === a && memo[1] === b) return true
		}
		return fn(a, b, memos)
	}
}

types['arguments'] =
types.array = memoGaurd(compareArrays)

// (array, array, array) -> boolean
function compareArrays(a, b, memos){
	var i = a.length
	if (i !== b.length) return false
	memos.push([a, b])
	while (i--) {
		if (!compare(a[i], b[i], memos)) return false
	}
	return true
}

types.object = memoGaurd(compareObjects)

// (object, object, array) -> boolean
function compareObjects(a, b, memos) {
	var ka = getEnumerableProperties(a)
	var kb = getEnumerableProperties(b)
	var i = ka.length

	// same number of properties
	if (i !== kb.length) return false

	// although not necessarily the same order
	ka.sort()
	kb.sort()

	// cheap key test
	while (i--) if (ka[i] !== kb[i]) return false

	// remember
	memos.push([a, b])

	// iterate again this time doing a thorough check
	i = ka.length
	while (i--) {
		var key = ka[i]
		if (!compare(a[key], b[key], memos)) return false
	}

	return true
}

// (object) -> array
function getEnumerableProperties (object) {
	var result = []
	for (var k in object) if (k !== 'constructor') {
		result.push(k)
	}
	return result
}

// expose compare
module.exports.compare = compare

});
require.register("segmentio-after/index.js", function(exports, require, module){

module.exports = function after (times, func) {
  // After 0, really?
  if (times <= 0) return func();

  // That's more like it.
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
};
});
require.register("segmentio-alias/index.js", function(exports, require, module){

var type = require('type');


/**
 * Expose `alias`.
 */

module.exports = alias;


/**
 * Alias an `object`.
 *
 * @param {Object} obj
 * @param {Mixed} method
 */

function alias (obj, method) {
  switch (type(method)) {
    case 'object': return aliasByDictionary(obj, method);
    case 'function': return aliasByFunction(obj, method);
  }
}


/**
 * Convert the keys in an `obj` using a dictionary of `aliases`.
 *
 * @param {Object} obj
 * @param {Object} aliases
 */

function aliasByDictionary (obj, aliases) {
  for (var key in aliases) {
    if (undefined === obj[key]) continue;
    obj[aliases[key]] = obj[key];
    delete obj[key];
  }
}


/**
 * Convert the keys in an `obj` using a `convert` function.
 *
 * @param {Object} obj
 * @param {Function} convert
 */

function aliasByFunction (obj, convert) {
  for (var key in obj) {
    obj[convert(key)] = obj[key];
    delete obj[key];
  }
}
});
require.register("segmentio-canonical/index.js", function(exports, require, module){
module.exports = function canonical () {
  var tags = document.getElementsByTagName('link');
  for (var i = 0, tag; tag = tags[i]; i++) {
    if ('canonical' == tag.getAttribute('rel')) return tag.getAttribute('href');
  }
};
});
require.register("segmentio-convert-dates/index.js", function(exports, require, module){

var is = require('is');

try {
  var clone = require('clone');
} catch (e) {
  var clone = require('clone-component');
}


/**
 * Expose `convertDates`.
 */

module.exports = convertDates;


/**
 * Recursively convert an `obj`'s dates to new values.
 *
 * @param {Object} obj
 * @param {Function} convert
 * @return {Object}
 */

function convertDates (obj, convert) {
  obj = clone(obj);
  for (var key in obj) {
    var val = obj[key];
    if (is.date(val)) obj[key] = convert(val);
    if (is.object(val)) obj[key] = convertDates(val, convert);
  }
  return obj;
}
});
require.register("segmentio-extend/index.js", function(exports, require, module){

module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};
});
require.register("segmentio-is-email/index.js", function(exports, require, module){

/**
 * Expose `isEmail`.
 */

module.exports = isEmail;


/**
 * Email address matcher.
 */

var matcher = /.+\@.+\..+/;


/**
 * Loosely validate an email address.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isEmail (string) {
  return matcher.test(string);
}
});
require.register("segmentio-is-meta/index.js", function(exports, require, module){
module.exports = function isMeta (e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return true;

    // Logic that handles checks for the middle mouse button, based
    // on [jQuery](https://github.com/jquery/jquery/blob/master/src/event.js#L466).
    var which = e.which, button = e.button;
    if (!which && button !== undefined) {
      return (!button & 1) && (!button & 2) && (button & 4);
    } else if (which === 2) {
      return true;
    }

    return false;
};
});
require.register("segmentio-isodate/index.js", function(exports, require, module){

/**
 * Matcher, slightly modified from:
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 */

var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;


/**
 * Convert an ISO date string to a date. Fallback to native `Date.parse`.
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 *
 * @param {String} iso
 * @return {Date}
 */

exports.parse = function (iso) {
  var numericKeys = [1, 5, 6, 7, 8, 11, 12];
  var arr = matcher.exec(iso);
  var offset = 0;

  // fallback to native parsing
  if (!arr) return new Date(iso);

  // remove undefined values
  for (var i = 0, val; val = numericKeys[i]; i++) {
    arr[val] = parseInt(arr[val], 10) || 0;
  }

  // allow undefined days and months
  arr[2] = parseInt(arr[2], 10) || 1;
  arr[3] = parseInt(arr[3], 10) || 1;

  // month is 0-11
  arr[2]--;

  // allow abitrary sub-second precision
  if (arr[8]) arr[8] = (arr[8] + '00').substring(0, 3);

  // apply timezone if one exists
  if (arr[4] == ' ') {
    offset = new Date().getTimezoneOffset();
  } else if (arr[9] !== 'Z' && arr[10]) {
    offset = arr[11] * 60 + arr[12];
    if ('+' == arr[10]) offset = 0 - offset;
  }

  var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
  return new Date(millis);
};


/**
 * Checks whether a `string` is an ISO date string. `strict` mode requires that
 * the date string at least have a year, month and date.
 *
 * @param {String} string
 * @param {Boolean} strict
 * @return {Boolean}
 */

exports.is = function (string, strict) {
  if (strict && false === /^\d{4}-\d{2}-\d{2}/.test(string)) return false;
  return matcher.test(string);
};
});
require.register("segmentio-isodate-traverse/index.js", function(exports, require, module){

var is = require('is');
var isodate = require('isodate');

var clone;
var each;

try {
  clone = require('clone');
  each = require('each');
} catch (err) {
  clone = require('clone-component');
  each = require('each-component');
}

/**
 * Expose `traverse`.
 */

module.exports = traverse;


/**
 * Traverse an object, parsing all ISO strings into dates and returning a clone.
 *
 * @param {Object} obj
 * @return {Object}
 */

function traverse (obj, strict) {
  obj = clone(obj);
  if (strict === undefined) strict = true;
  each(obj, function (key, val) {
    if (isodate.is(val, strict)) {
      obj[key] = isodate.parse(val);
    } else if (is.object(val)) {
      obj[key] = traverse(val);
    }
  });
  return obj;
}
});
require.register("component-json-fallback/index.js", function(exports, require, module){
/*
    json2.js
    2014-02-04

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

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

(function () {
    'use strict';

    var JSON = module.exports = {};

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
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

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

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

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
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

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

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
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {

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

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

});
require.register("segmentio-json/index.js", function(exports, require, module){

module.exports = 'undefined' == typeof JSON
  ? require('json-fallback')
  : JSON;

});
require.register("segmentio-load-date/index.js", function(exports, require, module){


/*
 * Load date.
 *
 * For reference: http://www.html5rocks.com/en/tutorials/webperformance/basics/
 */

var time = new Date()
  , perf = window.performance;

if (perf && perf.timing && perf.timing.responseEnd) {
  time = new Date(perf.timing.responseEnd);
}

module.exports = time;
});
require.register("segmentio-load-script/index.js", function(exports, require, module){
var type = require('type');


module.exports = function loadScript (options, callback) {
    if (!options) throw new Error('Cant load nothing...');

    // Allow for the simplest case, just passing a `src` string.
    if (type(options) === 'string') options = { src : options };

    var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

    // If you use protocol relative URLs, third-party scripts like Google
    // Analytics break when testing with `file:` so this fixes that.
    if (options.src && options.src.indexOf('//') === 0) {
        options.src = https ? 'https:' + options.src : 'http:' + options.src;
    }

    // Allow them to pass in different URLs depending on the protocol.
    if (https && options.https) options.src = options.https;
    else if (!https && options.http) options.src = options.http;

    // Make the `<script>` element and insert it before the first script on the
    // page, which is guaranteed to exist since this Javascript is running.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = options.src;

    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // If we have a callback, attach event handlers, even in IE. Based off of
    // the Third-Party Javascript script loading example:
    // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
    if (callback && type(callback) === 'function') {
        if (script.addEventListener) {
            script.addEventListener('load', function (event) {
                callback(null, event);
            }, false);
            script.addEventListener('error', function (event) {
                callback(new Error('Failed to load the script.'), event);
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function (event) {
                if (/complete|loaded/.test(script.readyState)) {
                    callback(null, event);
                }
            });
        }
    }

    // Return the script element in case they want to do anything special, like
    // give it an ID or attributes.
    return script;
};

});
require.register("segmentio-new-date/lib/index.js", function(exports, require, module){

var is = require('is');
var isodate = require('isodate');
var milliseconds = require('./milliseconds');
var seconds = require('./seconds');


/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native Date constructor.
 *
 * @param {Date|String|Number} val
 */

module.exports = function newDate (val) {
  if (is.date(val)) return val;
  if (is.number(val)) return new Date(toMs(val));

  // date strings
  if (isodate.is(val)) return isodate.parse(val);
  if (milliseconds.is(val)) return milliseconds.parse(val);
  if (seconds.is(val)) return seconds.parse(val);

  // fallback to Date.parse
  return new Date(val);
};


/**
 * If the number passed val is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param {Number} num
 */

function toMs (num) {
  if (num < 31557600000) return num * 1000;
  return num;
}
});
require.register("segmentio-new-date/lib/milliseconds.js", function(exports, require, module){

/**
 * Matcher.
 */

var matcher = /\d{13}/;


/**
 * Check whether a string is a millisecond date string.
 *
 * @param {String} string
 * @return {Boolean}
 */

exports.is = function (string) {
  return matcher.test(string);
};


/**
 * Convert a millisecond string to a date.
 *
 * @param {String} millis
 * @return {Date}
 */

exports.parse = function (millis) {
  millis = parseInt(millis, 10);
  return new Date(millis);
};
});
require.register("segmentio-new-date/lib/seconds.js", function(exports, require, module){

/**
 * Matcher.
 */

var matcher = /\d{10}/;


/**
 * Check whether a string is a second date string.
 *
 * @param {String} string
 * @return {Boolean}
 */

exports.is = function (string) {
  return matcher.test(string);
};


/**
 * Convert a second string to a date.
 *
 * @param {String} seconds
 * @return {Date}
 */

exports.parse = function (seconds) {
  var millis = parseInt(seconds, 10) * 1000;
  return new Date(millis);
};
});
require.register("segmentio-on-body/index.js", function(exports, require, module){
var each = require('each');


/**
 * Cache whether `<body>` exists.
 */

var body = false;


/**
 * Callbacks to call when the body exists.
 */

var callbacks = [];


/**
 * Export a way to add handlers to be invoked once the body exists.
 *
 * @param {Function} callback  A function to call when the body exists.
 */

module.exports = function onBody (callback) {
  if (body) {
    call(callback);
  } else {
    callbacks.push(callback);
  }
};


/**
 * Set an interval to check for `document.body`.
 */

var interval = setInterval(function () {
  if (!document.body) return;
  body = true;
  each(callbacks, call);
  clearInterval(interval);
}, 5);


/**
 * Call a callback, passing it the body.
 *
 * @param {Function} callback  The callback to call.
 */

function call (callback) {
  callback(document.body);
}
});
require.register("segmentio-on-error/index.js", function(exports, require, module){

/**
 * Expose `onError`.
 */

module.exports = onError;


/**
 * Callbacks.
 */

var callbacks = [];


/**
 * Preserve existing handler.
 */

if ('function' == typeof window.onerror) callbacks.push(window.onerror);


/**
 * Bind to `window.onerror`.
 */

window.onerror = handler;


/**
 * Error handler.
 */

function handler () {
  for (var i = 0, fn; fn = callbacks[i]; i++) fn.apply(this, arguments);
}


/**
 * Call a `fn` on `window.onerror`.
 *
 * @param {Function} fn
 */

function onError (fn) {
  callbacks.push(fn);
  if (window.onerror != handler) {
    callbacks.push(window.onerror);
    window.onerror = handler;
  }
}
});
require.register("segmentio-store.js/store.js", function(exports, require, module){
;(function(win){
	var store = {},
		doc = win.document,
		localStorageName = 'localStorage',
		namespace = '__storejs__',
		storage

	store.disabled = false
	store.set = function(key, value) {}
	store.get = function(key) {}
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		var val = store.get(key)
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (typeof val == 'undefined') { val = defaultVal || {} }
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key) { return store.deserialize(storage.getItem(key)) }
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			for (var i=0; i<storage.length; ++i) {
				var key = storage.key(i)
				ret[key] = store.get(key)
			}
			return ret
		}
	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<s' + 'cript>document.w=window</s' + 'cript><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		function withIEStorage(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys may not contain special chars. See all of https://github.com/marcuswestin/store.js/issues/40
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		function ieKeyFix(key) {
			return key.replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			return store.deserialize(storage.getAttribute(key))
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=0, attr; attr=attributes[i]; i++) {
				storage.removeAttribute(attr.name)
			}
			storage.save(localStorageName)
		})
		store.getAll = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			var ret = {}
			for (var i=0, attr; attr=attributes[i]; ++i) {
				var key = ieKeyFix(attr.name)
				ret[attr.name] = store.deserialize(storage.getAttribute(key))
			}
			return ret
		})
	}

	try {
		store.set(namespace, namespace)
		if (store.get(namespace) != namespace) { store.disabled = true }
		store.remove(namespace)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	if (typeof module != 'undefined' && module.exports) { module.exports = store }
	else if (typeof define === 'function' && define.amd) { define(store) }
	else { win.store = store }
})(this.window || global);

});
require.register("segmentio-to-unix-timestamp/index.js", function(exports, require, module){

/**
 * Expose `toUnixTimestamp`.
 */

module.exports = toUnixTimestamp;


/**
 * Convert a `date` into a Unix timestamp.
 *
 * @param {Date}
 * @return {Number}
 */

function toUnixTimestamp (date) {
  return Math.floor(date.getTime() / 1000);
}
});
require.register("segmentio-top-domain/index.js", function(exports, require, module){

var url = require('url');

// Official Grammar: http://tools.ietf.org/html/rfc883#page-56
// Look for tlds with up to 2-6 characters.

module.exports = function (urlStr) {

  var host     = url.parse(urlStr).hostname
    , topLevel = host.match(/[a-z0-9][a-z0-9\-]*[a-z0-9]\.[a-z\.]{2,6}$/i);

  return topLevel ? topLevel[0] : host;
};
});
require.register("timoxley-next-tick/index.js", function(exports, require, module){
"use strict"

if (typeof setImmediate == 'function') {
  module.exports = function(f){ setImmediate(f) }
}
// legacy node.js
else if (typeof process != 'undefined' && typeof process.nextTick == 'function') {
  module.exports = process.nextTick
}
// fallback for other environments / postMessage behaves badly on IE8
else if (typeof window == 'undefined' || window.ActiveXObject || !window.postMessage) {
  module.exports = function(f){ setTimeout(f) };
} else {
  var q = [];

  window.addEventListener('message', function(){
    var i = 0;
    while (i < q.length) {
      try { q[i++](); }
      catch (e) {
        q = q.slice(i);
        window.postMessage('tic!', '*');
        throw e;
      }
    }
    q.length = 0;
  }, true);

  module.exports = function(fn){
    if (!q.length) window.postMessage('tic!', '*');
    q.push(fn);
  }
}

});
require.register("yields-prevent/index.js", function(exports, require, module){

/**
 * prevent default on the given `e`.
 * 
 * examples:
 * 
 *      anchor.onclick = prevent;
 *      anchor.onclick = function(e){
 *        if (something) return prevent(e);
 *      };
 * 
 * @param {Event} e
 */

module.exports = function(e){
  e = e || window.event
  return e.preventDefault
    ? e.preventDefault()
    : e.returnValue = false;
};

});
require.register("yields-slug/index.js", function(exports, require, module){

/**
 * Generate a slug from the given `str`.
 *
 * example:
 *
 *        generate('foo bar');
 *        // > foo-bar
 *
 * @param {String} str
 * @param {Object} options
 * @config {String|RegExp} [replace] characters to replace, defaulted to `/[^a-z0-9]/g`
 * @config {String} [separator] separator to insert, defaulted to `-`
 * @return {String}
 */

module.exports = function (str, options) {
  options || (options = {});
  return str.toLowerCase()
    .replace(options.replace || /[^a-z0-9]/g, ' ')
    .replace(/^ +| +$/g, '')
    .replace(/ +/g, options.separator || '-')
};

});
require.register("visionmedia-debug/index.js", function(exports, require, module){
if ('undefined' == typeof window) {
  module.exports = require('./lib/debug');
} else {
  module.exports = require('./debug');
}

});
require.register("visionmedia-debug/debug.js", function(exports, require, module){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

});
require.register("analytics/lib/index.js", function(exports, require, module){
/**
 * Analytics.js
 *
 * (C) 2013 Segment.io Inc.
 */

var Analytics = require('./analytics')
  , bind = require('bind');


/**
 * Expose an `analytics` singleton.
 */

module.exports = new Analytics();


/**
 * Bind methods on `analytics` to itself.
 */

bind.methods(
  module.exports,
  'init',
  'initialize',
  'identify',
  'user',
  'group',
  'track',
  'trackClick',
  'trackLink',
  'trackSubmit',
  'trackForm',
  'pageview',
  'alias',
  'ready',
  '_options',
  '_callback',
  '_invoke',
  '_parseQuery'
);
});
require.register("analytics/lib/analytics.js", function(exports, require, module){

var after = require('after')
  , bind = require('event').bind
  , callback = require('callback')
  , clone = require('clone')
  , cookie = require('./cookie')
  , createIntegration = require('./integration')
  , debug = require('debug')
  , each = require('each')
  , Emitter = require('emitter')
  , group = require('./group')
  , Integrations = require('./integrations')
  , is = require('is')
  , isEmail = require('is-email')
  , isMeta = require('is-meta')
  , newDate = require('new-date')
  , prevent = require('prevent')
  , querystring = require('querystring')
  , size = require('object').length
  , store = require('./store')
  , traverse = require('isodate-traverse')
  , user = require('./user');


/**
 * Expose `Analytics`.
 */

module.exports = exports = Analytics;


/**
 * Expose `VERSION`.
 */

exports.VERSION =
Analytics.prototype.VERSION = '0.18.4';


/**
 * Expose `Integrations`.
 */

exports.Integrations =
Analytics.prototype.Integrations = Integrations;


/**
 * Expose `createIntegration`.
 */

exports.createIntegration =
Analytics.prototype.createIntegration = createIntegration;


/**
 * Define a new `Integration`.
 *
 * @param {Function} Integration
 * @return {Analytics}
 */

exports.addIntegration =
Analytics.prototype.addIntegration = function (Integration) {
  var name = Integration.prototype.name;
  Integrations[name] = Integration;
  return this;
};


/**
 * Initialize a new `Analytics` instance.
 */

function Analytics () {
  this._callbacks = [];
  this._integrations = {};
  this._readied = false;
  this._timeout = 300;
  this._user = user; // BACKWARDS COMPATIBILITY
}


/**
 * Event Emitter.
 */

Emitter(Analytics.prototype);


/**
 * Initialize with the given integration `settings` and `options`. Aliased to
 * `init` for convenience.
 *
 * @param {Object} settings
 * @param {Object} options (optional)
 * @return {Analytics}
 */

Analytics.prototype.init =
Analytics.prototype.initialize = function (settings, options) {
  settings || (settings = {});
  options || (options = {});

  this._options(options);
  this._readied = false;
  this._integrations = {};

  // load user now that options are set
  user.load();
  group.load();

  // clean unknown integrations from settings
  var self = this;
  each(settings, function (name) {
    var Integration = self.Integrations[name];
    if (!Integration) delete settings[name];
  });

  // make ready callback
  var ready = after(size(settings), function () {
    self._readied = true;
    var callback;
    while (callback = self._callbacks.shift()) callback();
    self.emit('ready');
  });

  // initialize integrations, passing ready
  each(settings, function (name, options) {
    var Integration = self.Integrations[name];
    var integration = new Integration(clone(options), ready, self);
    self._integrations[name] = integration;
  });

  // call any querystring methods if present
  this._parseQuery();

  // backwards compat with angular plugin.
  // TODO: remove
  this.initialized = true;

  this.emit('initialize');

  return this;
};


/**
 * Identify a user by optional `id` and `traits`.
 *
 * @param {String} id (optional)
 * @param {Object} traits (optional)
 * @param {Object} options (optional)
 * @param {Function} fn (optional)
 * @return {Analytics}
 */

Analytics.prototype.identify = function (id, traits, options, fn) {
  if (is.fn(options)) fn = options, options = undefined;
  if (is.fn(traits)) fn = traits, traits = undefined;
  if (is.object(id)) options = traits, traits = id, id = user.id();

  user.identify(id, traits);

  // clone traits before we manipulate so we don't do anything uncouth, and take
  // from `user` so that we carryover anonymous traits
  id = user.id();
  traits = cleanTraits(id, user.traits());

  this._invoke('identify', id, traits, options);
  this._callback(fn);
  return this;
};


/**
 * Return the current user.
 *
 * @return {Object}
 */

Analytics.prototype.user = function () {
  return user;
};


/**
 * Identify a group by optional `id` and `properties`. Or, if no arguments are
 * supplied, return the current group.
 *
 * @param {String} id (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 * @param {Function} fn (optional)
 * @return {Analytics|Object}
 */

Analytics.prototype.group = function (id, properties, options, fn) {
  if (0 === arguments.length) return group;
  if (is.fn(options)) fn = options, options = undefined;
  if (is.fn(properties)) fn = properties, properties = undefined;
  if (is.object(id)) options = properties, properties = id, id = group.id();

  group.identify(id, properties);

  // grab from group again to make sure we're taking from the source
  id = group.id();
  properties = group.properties();

  // convert a create date to a date
  if (properties.created) properties.created = newDate(properties.created);

  this._invoke('group', id, properties, options);
  this._callback(fn);
  return this;
};


/**
 * Track an `event` that a user has triggered with optional `properties`.
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 * @param {Function} fn (optional)
 * @return {Analytics}
 */

Analytics.prototype.track = function (event, properties, options, fn) {
  if (is.fn(options)) fn = options, options = undefined;
  if (is.fn(properties)) fn = properties, properties = undefined;

  properties = traverse(clone(properties)) || {};

  this._invoke('track', event, properties, options);
  this._callback(fn);
  return this;
};


/**
 * Helper method to track an outbound link that would normally navigate away
 * from the page before the analytics calls were sent.
 *
 * BACKWARDS COMPATIBILITY: aliased to `trackClick`.
 *
 * @param {Element|Array} links
 * @param {String|Function} event
 * @param {Object|Function} properties (optional)
 * @return {Analytics}
 */

Analytics.prototype.trackClick =
Analytics.prototype.trackLink = function (links, event, properties) {
  if (!links) return this;
  if (is.element(links)) links = [links]; // always arrays, handles jquery

  var self = this;
  each(links, function (el) {
    bind(el, 'click', function (e) {
      var ev = is.fn(event) ? event(el) : event;
      var props = is.fn(properties) ? properties(el) : properties;
      self.track(ev, props);

      if (el.href && el.target !== '_blank' && !isMeta(e)) {
        prevent(e);
        self._callback(function () {
          window.location.href = el.href;
        });
      }
    });
  });

  return this;
};


/**
 * Helper method to track an outbound form that would normally navigate away
 * from the page before the analytics calls were sent.
 *
 * BACKWARDS COMPATIBILITY: aliased to `trackSubmit`.
 *
 * @param {Element|Array} forms
 * @param {String|Function} event
 * @param {Object|Function} properties (optional)
 * @return {Analytics}
 */

Analytics.prototype.trackSubmit =
Analytics.prototype.trackForm = function (forms, event, properties) {
  if (!forms) return this;
  if (is.element(forms)) forms = [forms]; // always arrays, handles jquery

  var self = this;
  each(forms, function (el) {
    function handler (e) {
      prevent(e);

      var ev = is.fn(event) ? event(el) : event;
      var props = is.fn(properties) ? properties(el) : properties;
      self.track(ev, props);

      self._callback(function () {
        el.submit();
      });
    }

    // support the events happening through jQuery or Zepto instead of through
    // the normal DOM API, since `el.submit` doesn't bubble up events...
    var $ = window.jQuery || window.Zepto;
    if ($) {
      $(el).submit(handler);
    } else {
      bind(el, 'submit', handler);
    }
  });

  return this;
};


/**
 * Manually trigger a pageview, useful for single-page apps.
 *
 * @param {String} url (optional)
 * @param {Object} options (optional)
 * @return {Analytics}
 */

Analytics.prototype.pageview = function (url, options) {
  this._invoke('pageview', url, options);
  return this;
};


/**
 * Merge two previously unassociated user identities.
 *
 * @param {String} newId
 * @param {String} oldId
 * @param {Object} options
 * @return {Analytics}
 */

Analytics.prototype.alias = function (newId, oldId, options) {
  if (is.object(oldId)) options = oldId, oldId = undefined;

  this._invoke('alias', newId, oldId, options);
  return this;
};


/**
 * Register a `fn` to be fired when all the analytics services are ready.
 *
 * @param {Function} fn
 * @return {Analytics}
 */

Analytics.prototype.ready = function (fn) {
  if (!is.fn(fn)) return this;
  this._readied
    ? callback.async(fn)
    : this._callbacks.push(fn);
  return this;
};


/**
 * Set the `timeout` (in milliseconds) used for callbacks.
 *
 * @param {Number} timeout
 */

Analytics.prototype.timeout = function (timeout) {
  this._timeout = timeout;
};

/**
 * Enable / disable debug.
 *
 * @param {String|Boolean} str
 */

Analytics.prototype.debug = function(str){
  if (0 == arguments.length || str) {
    debug.enable('analytics:' + (str || '*'));
  } else {
    debug.disable();
  }
};

/**
 * Apply options.
 *
 * @param {Object} options
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._options = function (options) {
  options || (options = {});
  cookie.options(options.cookie);
  store.options(options.localStorage);
  user.options(options.user);
  group.options(options.group);
  return this;
};


/**
 * Callback a `fn` after our defined timeout period.
 *
 * @param {Function} fn
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._callback = function (fn) {
  callback.async(fn, this._timeout);
  return this;
};


/**
 * Call a `method` on all of initialized integrations, passing clones of arguments
 * along to keep each integration isolated.
 *
 * TODO: check integration enabled
 *
 * @param {String} method
 * @param {Mixed} args...
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._invoke = function (method, args) {
  args = [].slice.call(arguments, 1);
  args.unshift(method);
  var options = args[args.length-1]; // always the last one
  each(this._integrations, function (name, integration) {
    if (!isEnabled(integration, options)) return;
    var clonedArgs = clone(args)
    integration.invoke.apply(integration, clonedArgs);
  });
  this.emit.apply(this, clone(args));
  return this;
};


/**
 * Parse the query string for callable methods.
 *
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._parseQuery = function () {
  // Identify and track any `ajs_uid` and `ajs_event` parameters in the URL.
  var q = querystring.parse(window.location.search);
  if (q.ajs_uid) this.identify(q.ajs_uid);
  if (q.ajs_event) this.track(q.ajs_event);
  return this;
};


/**
 * Determine whether a `integration` is enabled or not based on `options`.
 *
 * @param {Object} integration
 * @param {Object} options
 * @return {Boolean}
 */

function isEnabled (integration, options) {
  var enabled = true;
  if (!options || !options.providers) return enabled;

  // Default to the 'all' or 'All' setting.
  var map = options.providers;
  if (map.all !== undefined) enabled = map.all;
  if (map.All !== undefined) enabled = map.All;

  // Look for this integration's specific setting.
  var name = integration.name;
  if (map[name] !== undefined) enabled = map[name];

  return enabled;
}


/**
 * Clean up traits, default some useful things both so the user doesn't have to
 * and so we don't have to do it on a integration-basis.
 *
 * @param {Object} traits
 * @return {Object}
 */

function cleanTraits (userId, traits) {
  // Add the `email` trait if it doesn't exist and the `userId` is an email.
  if (!traits.email && isEmail(userId)) traits.email = userId;

  // Create the `name` trait if it doesn't exist and `firstName` and `lastName`
  // are both supplied.
  if (!traits.name && traits.firstName && traits.lastName) {
    traits.name = traits.firstName + ' ' + traits.lastName;
  }

  // Convert dates from more types of input into Date objects.
  if (traits.created) traits.created = newDate(traits.created);
  if (traits.company && traits.company.created) {
    traits.company.created = newDate(traits.company.created);
  }

  return traits;
}

});
require.register("analytics/lib/cookie.js", function(exports, require, module){

var bind = require('bind')
  , cookie = require('cookie')
  , clone = require('clone')
  , defaults = require('defaults')
  , json = require('json')
  , topDomain = require('top-domain');


function Cookie (options) {
  this.options(options);
}

/**
 * Get or set the cookie options
 *
 * @param  {Object} options
 *   @field {Number}  maxage (1 year)
 *   @field {String}  domain
 *   @field {String}  path
 *   @field {Boolean} secure
 */

Cookie.prototype.options = function (options) {
  if (arguments.length === 0) return this._options;

  options || (options = {});

  var domain = '.' + topDomain(window.location.href);

  // localhost cookies are special: http://curl.haxx.se/rfc/cookie_spec.html
  if (domain === '.localhost') domain = '';

  defaults(options, {
    maxage  : 31536000000, // default to a year
    path    : '/',
    domain  : domain
  });

  this._options = options;
};


/**
 * Set a value in our cookie
 *
 * @param  {String} key
 * @param  {Object} value
 * @return {Boolean} saved
 */

Cookie.prototype.set = function (key, value) {
  try {
    value = json.stringify(value);
    cookie(key, value, clone(this._options));
    return true;
  } catch (e) {
    return false;
  }
};


/**
 * Get a value from our cookie
 * @param  {String} key
 * @return {Object} value
 */

Cookie.prototype.get = function (key) {
  try {
    var value = cookie(key);
    value = value ? json.parse(value) : null;
    return value;
  } catch (e) {
    return null;
  }
};


/**
 * Remove a value from the cookie
 *
 * @param  {String}  key
 * @return {Boolean} removed
 */

Cookie.prototype.remove = function (key) {
  try {
    cookie(key, null, clone(this._options));
    return true;
  } catch (e) {
    return false;
  }
};


/**
 * Expose singleton cookie.
 */

module.exports = bind.all(new Cookie());


/**
 * Expose `Cookie` constructor.
 */

module.exports.Cookie = Cookie;
});
require.register("analytics/lib/store.js", function(exports, require, module){

var bind = require('bind')
  , defaults = require('defaults')
  , store = require('store');


function Store (options) {
  this.options(options);
}


/**
 * Sets the options for the store
 *
 * @param  {Object} options
 *   @field {Boolean} enabled (true)
 */

Store.prototype.options = function (options) {
  if (arguments.length === 0) return this._options;

  options || (options = {});
  defaults(options, { enabled : true });

  this.enabled  = options.enabled && store.enabled;
  this._options = options;
};


/**
 * Sets a value in local storage
 *
 * @param  {String} key
 * @param  {Object} value
 */

Store.prototype.set = function (key, value) {
  if (!this.enabled) return false;
  return store.set(key, value);
};


/**
 * Gets a value from local storage
 *
 * @param  {String} key
 * @return {Object}
 */

Store.prototype.get = function (key) {
  if (!this.enabled) return null;
  return store.get(key);
};


/**
 * Removes a value from local storage
 *
 * @param  {String} key
 */

Store.prototype.remove = function (key) {
  if (!this.enabled) return false;
  return store.remove(key);
};


/**
 * Expose a store singleton.
 */

module.exports = bind.all(new Store());


/**
 * Expose the `Store` constructor.
 */

module.exports.Store = Store;
});
require.register("analytics/lib/integrations.js", function(exports, require, module){

var each = require('each');


/**
 * A list all of our integration slugs.
 */

var integrations = [
/*  'adroll',
  'amplitude',
  'awesm',
  'awesomatic',
  'bugherd',*/
  'chartbeat',
/*'clicktale',
  'clicky',
  'comscore',
  'crazy-egg',
  'customerio',
  'evergage',
  'errorception',
  'foxmetrics',
  'gauges',
  'get-satisfaction',*/
  'google-analytics',
/*'gosquared',
  'heap',
  'hittail',
  'hubspot',
  'improvely',
  'inspectlet',
  'intercom',
  'keen-io',
  'kissmetrics',
  'klaviyo',
  'leadlander',
  'livechat',
  'lytics',
  'mixpanel',
  'mousestats',
  'olark',
  'optimizely',
  'perfect-audience',
  'pingdom',
  'preact',
  'qualaroo',
  'quantcast',
  'rollbar',
  'sentry',
  'snapengage',
  'spinnakr',
  'tapstream',
  'trakio',
  'usercycle',
  'userfox',*/
  'uservoice',
/*'vero',
  'visual-website-optimizer',
  'woopra',
  'yandex-metrica',*/
  'dradis'
];


/**
 * Expose the integrations, using their own `name` from their `prototype`.
 */

each(integrations, function (slug) {
  var Integration = require('./integrations/' + slug);
  exports[Integration.prototype.name] = Integration;
});

});
require.register("analytics/lib/user.js", function(exports, require, module){

var debug = require('debug')('analytics:user')
  , bind = require('bind')
  , clone = require('clone')
  , cookie = require('./cookie')
  , defaults = require('defaults')
  , extend = require('extend')
  , store = require('./store')
  , traverse = require('isodate-traverse');


/**
 * Initialize a new `User`.
 *
 * @param {Object} options
 */

function User (options) {
  this.options(options);
  this.id(null);
  this.traits({});
}


/**
 * Get or set storage `options`.
 *
 * @param {Object} options
 *   @property {Object} cookie
 *   @property {Object} localStorage
 *   @property {Boolean} persist (default: `true`)
 */

User.prototype.options = function (options) {
  if (arguments.length === 0) return this._options;
  options || (options = {});

  defaults(options, {
    persist: true,
    cookie: {
      key: 'ajs_user_id',
      oldKey: 'ajs_user'
    },
    localStorage: {
      key: 'ajs_user_traits'
    }
  });

  this._options = options;
};


/**
 * Get or set the user's `id`.
 *
 * @param {String} id
 */

User.prototype.id = function (id) {
  switch (arguments.length) {
    case 0: return this._getId();
    case 1: return this._setId(id);
  }
};


/**
 * Get the user's id.
 *
 * @return {String}
 */

User.prototype._getId = function () {
  var ret = this._options.persist
    ? cookie.get(this._options.cookie.key)
    : this._id;
  return ret === undefined ? null : ret;
};


/**
 * Set the user's `id`.
 *
 * @param {String} id
 */

User.prototype._setId = function (id) {
  if (this._options.persist) {
    cookie.set(this._options.cookie.key, id);
  } else {
    this._id = id;
  }
};


/**
 * Get or set the user's `traits`.
 *
 * @param {String} traits
 */

User.prototype.traits = function (traits) {
  switch (arguments.length) {
    case 0: return this._getTraits();
    case 1: return this._setTraits(traits);
  }
};


/**
 * Get the user's traits. Always convert ISO date strings into real dates, since
 * they aren't parsed back from local storage.
 *
 * @return {Object}
 */

User.prototype._getTraits = function () {
  var ret = this._options.persist
    ? store.get(this._options.localStorage.key)
    : this._traits;
  return ret ? traverse(clone(ret)) : {};
};


/**
 * Set the user's `traits`.
 *
 * @param {Object} traits
 */

User.prototype._setTraits = function (traits) {
  traits || (traits = {});
  if (this._options.persist) {
    store.set(this._options.localStorage.key, traits);
  } else {
    this._traits = traits;
  }
};


/**
 * Idenfity the user with an `id` and `traits`. If we it's the same user, extend
 * the existing `traits` instead of overwriting.
 *
 * @param {String} id
 * @param {Object} traits
 */

User.prototype.identify = function (id, traits) {
  traits || (traits = {});
  var current = this.id();
  if (current === null || current === id) traits = extend(this.traits(), traits);
  if (id) this.id(id);
  debug('identify %o, %o', id, traits);
  this.traits(traits);
  this.save();
};


/**
 * Save the user to local storage and the cookie.
 *
 * @return {Boolean}
 */

User.prototype.save = function () {
  if (!this._options.persist) return false;
  cookie.set(this._options.cookie.key, this.id());
  store.set(this._options.localStorage.key, this.traits());
  return true;
};


/**
 * Log the user out, reseting `id` and `traits` to defaults.
 */

User.prototype.logout = function () {
  this.id(null);
  this.traits({});
  cookie.remove(this._options.cookie.key);
  store.remove(this._options.localStorage.key);
};


/**
 * Reset all user state, logging out and returning options to defaults.
 */

User.prototype.reset = function () {
  this.logout();
  this.options({});
};


/**
 * Load saved user `id` or `traits` from storage.
 */

User.prototype.load = function () {
  if (this._loadOldCookie()) return;
  this.id(cookie.get(this._options.cookie.key));
  this.traits(store.get(this._options.localStorage.key));
};


/**
 * BACKWARDS COMPATIBILITY: Load the old user from the cookie.
 *
 * @return {Boolean}
 * @api private
 */

User.prototype._loadOldCookie = function () {
  var user = cookie.get(this._options.cookie.oldKey);
  if (!user) return false;

  this.id(user.id);
  this.traits(user.traits);
  cookie.remove(this._options.cookie.oldKey);
  return true;
};


/**
 * Expose the user singleton.
 */

module.exports = bind.all(new User());


/**
 * Expose the `User` constructor.
 */

module.exports.User = User;

});
require.register("analytics/lib/group.js", function(exports, require, module){

var debug = require('debug')('analytics:group')
  , bind = require('bind')
  , clone = require('clone')
  , cookie = require('./cookie')
  , defaults = require('defaults')
  , extend = require('extend')
  , store = require('./store')
  , traverse = require('isodate-traverse');


/**
 * Initialize a new `Group`.
 *
 * @param {Object} options
 */

function Group (options) {
  this.options(options);
  this.id(null);
  this.properties({});
}


/**
 * Get or set storage `options`.
 *
 * @param {Object} options
 *   @property {Object} cookie
 *   @property {Object} localStorage
 *   @property {Boolean} persist (default: `true`)
 */

Group.prototype.options = function (options) {
  if (arguments.length === 0) return this._options;
  options || (options = {});

  defaults(options, {
    persist: true,
    cookie: {
      key: 'ajs_group_id'
    },
    localStorage: {
      key: 'ajs_group_properties'
    }
  });

  this._options = options;
};


/**
 * Get or set the group's `id`.
 *
 * @param {String} id
 */

Group.prototype.id = function (id) {
  switch (arguments.length) {
    case 0: return this._getId();
    case 1: return this._setId(id);
  }
};


/**
 * Get the group's id.
 *
 * @return {String}
 */

Group.prototype._getId = function () {
  var ret = this._options.persist
    ? cookie.get(this._options.cookie.key)
    : this._id;
  return ret === undefined ? null : ret;
};


/**
 * Set the group's `id`.
 *
 * @param {String} id
 */

Group.prototype._setId = function (id) {
  if (this._options.persist) {
    cookie.set(this._options.cookie.key, id);
  } else {
    this._id = id;
  }
};


/**
 * Get or set the group's `properties`.
 *
 * @param {String} properties
 */

Group.prototype.properties = function (properties) {
  switch (arguments.length) {
    case 0: return this._getProperties();
    case 1: return this._setProperties(properties);
  }
};


/**
 * Get the group's properties. Always convert ISO date strings into real dates,
 * since they aren't parsed back from local storage.
 *
 * @return {Object}
 */

Group.prototype._getProperties = function () {
  var ret = this._options.persist
    ? store.get(this._options.localStorage.key)
    : this._properties;
  return ret ? traverse(clone(ret)) : {};
};


/**
 * Set the group's `properties`.
 *
 * @param {Object} properties
 */

Group.prototype._setProperties = function (properties) {
  properties || (properties = {});
  if (this._options.persist) {
    store.set(this._options.localStorage.key, properties);
  } else {
    this._properties = properties;
  }
};


/**
 * Idenfity the group with an `id` and `properties`. If we it's the same group,
 * extend the existing `properties` instead of overwriting.
 *
 * @param {String} id
 * @param {Object} properties
 */

Group.prototype.identify = function (id, properties) {
  properties || (properties = {});
  var current = this.id();
  if (current === null || current === id) properties = extend(this.properties(), properties);
  if (id) this.id(id);
  debug('identify %o, %o', id, properties);
  this.properties(properties);
  this.save();
};


/**
 * Save the group to local storage and the cookie.
 *
 * @return {Boolean}
 */

Group.prototype.save = function () {
  if (!this._options.persist) return false;
  cookie.set(this._options.cookie.key, this.id());
  store.set(this._options.localStorage.key, this.properties());
  return true;
};


/**
 * Log the group out, reseting `id` and `properties` to defaults.
 */

Group.prototype.logout = function () {
  this.id(null);
  this.properties({});
  cookie.remove(this._options.cookie.key);
  store.remove(this._options.localStorage.key);
};


/**
 * Reset all group state, logging out and returning options to defaults.
 */

Group.prototype.reset = function () {
  this.logout();
  this.options({});
};


/**
 * Load saved group `id` or `properties` from storage.
 */

Group.prototype.load = function () {
  this.id(cookie.get(this._options.cookie.key));
  this.properties(store.get(this._options.localStorage.key));
};


/**
 * Expose the new group as a singleton.
 */

module.exports = bind.all(new Group());


/**
 * Expose the `Group` constructor.
 */

module.exports.Group = Group;

});
require.register("analytics/lib/integration/index.js", function(exports, require, module){

var debug = require('debug')('analytics:integration')
  , each = require('each')
  , extend = require('extend')
  , is = require('is')
  , protos = require('./protos')
  , statics = require('./statics');


/**
 * Expose `createIntegration`.
 */

module.exports = createIntegration;


/**
 * Create a new Integration constructor.
 *
 * @param {String} name
 */

function createIntegration (name) {

  /**
   * Initialize a new `Integration`.
   *
   * @param {Object} options
   * @param {Function} ready
   * @param {Object} analytics
   */

  function Integration (options, ready, analytics) {
    options = resolveOptions(options, this.key);
    this.options = extend({}, this.defaults, options);
    this.analytics = analytics;
    this.queue = [];
    this.ready = false;

    // augment ready to replay the queue and then set ready state
    var self = this;
    function dequeue () {
      each(self.queue, function (call) {
        self[call.method].apply(self, call.args);
      });
      self.ready = true;
      self.queue = [];
      ready();
    }

    debug('initialize %s with %o', name, this.options);
    this.initialize(this.options, dequeue);
  }

  // statics
  for (var key in statics) Integration[key] = statics[key];

  // protos
  Integration.prototype.name = name;
  for (var key in protos) Integration.prototype[key] = protos[key];

  return Integration;
}


/**
 * Resolve `options` with an optional `key`.
 *
 * @param {Object} options
 * @param {String} key (optional)
 */

function resolveOptions (options, key) {
  if (is.object(options)) return options;
  if (options === true) return {}; // BACKWARDS COMPATIBILITY
  if (key && is.string(options)) {
    var value = options;
    options = {};
    options[key] = value;
    return options;
  }
}

});
require.register("analytics/lib/integration/protos.js", function(exports, require, module){

var debug = require('debug')('analytics:integration');

/**
 * Initialize.
 *
 * @param {Object} options
 * @param {Function} ready
 */

exports.initialize = function (options, ready) {
  ready();
};


/**
 * Invoke a method, queueing or not depending on our ready state.
 *
 * @param {String} method
 * @param {Mixed} args...
 */

exports.invoke = function (method, args) {
  if (!this[method]) return;
  args = [].slice.call(arguments, 1);
  if (this.ready) {
    debug('%s %s %o', this.name, method, args);
    this[method].apply(this, args);
  } else {
    this.queue.push({
      method: method,
      args: args
    });
  }
};

});
require.register("analytics/lib/integration/statics.js", function(exports, require, module){

var extend = require('extend');


/**
 * BACKWARDS COMPATIBILITY: inheritance helper.
 *
 * Modeled after Backbone's `extend` method:
 * https://github.com/documentcloud/backbone/blob/master/backbone.js#L1464
 *
 * @param {Object} protos
 */

exports.extend = function (protos) {
  var parent = this;
  var child = function () { return parent.apply(this, arguments); };
  var Surrogate = function () { this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  extend(child.prototype, protos);
  return child;
};
});
require.register("analytics/lib/integrations/chartbeat.js", function(exports, require, module){

var integration = require('../integration')
  , onBody = require('on-body')
  , load = require('load-script');


/**
 * Expose `Chartbeat` integration.
 */

var Chartbeat = module.exports = integration('Chartbeat');


/**
 * Default options.
 */

Chartbeat.prototype.defaults = {
  // the domain of the site your installing chartbeat on (required)
  domain: '',
  // your chartbeat uid (required)
  uid: null
};


/**
 * Initialize.
 *
 * http://chartbeat.com/docs/adding_the_code/
 * http://chartbeat.com/docs/configuration_variables/
 *
 * @param {Object} options
 * @param {Function} ready
 */

Chartbeat.prototype.initialize = function (options, ready) {
  window._sf_async_config = options;
  onBody(function () {
    window._sf_endpt = new Date().getTime();
    load({
      https: 'https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/js/chartbeat.js',
      http: 'http://static.chartbeat.com/js/chartbeat.js'
    }, ready);
  });
};


/**
 * Pageview.
 *
 * http://chartbeat.com/docs/handling_virtual_page_changes/
 *
 * @param {String} url (optional)
 */

Chartbeat.prototype.pageview = function (url) {
  window.pSUPERFLY.virtualPage(url || window.location.pathname);
};
});
require.register("analytics/lib/integrations/google-analytics.js", function(exports, require, module){
var callback = require('callback')
  , canonical = require('canonical')
  , each = require('each')
  , integration = require('../integration')
  , is = require('is')
  , load = require('load-script')
  , type = require('type')
  , url = require('url');


/**
 * Expose `GA` integration.
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/
 */

var GA = module.exports = integration('Google Analytics');


/**
 * Required key.
 */

GA.prototype.key = 'trackingId';


/**
 * Default options.
 */

GA.prototype.defaults = {
  // whether to anonymize the IP address collected for the user
  anonymizeIp : false,
  // whether you're using the old classic analytics or not
  classic: false,
  // restrict analytics to only come from the a single `domain`
  domain : 'none',
  // whether to enable google's doubleclick remarketing feature
  doubleClick : false,
  // whether to enabled enhanced link attribution
  // http://support.google.com/analytics/bin/answer.py?hl=en&answer=2558867
  enhancedLinkAttribution : false,
  // a list of domains to ignore referrals from
  ignoreReferrer : null,
  // whether or not to track and initial pageview on load
  initialPageview : true,
  // the ratio to show in site speed samples
  // https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration#_gat.GA_Tracker_._setSiteSpeedSampleRate
  siteSpeedSampleRate : null,
  // your google analytics tracking id (required)
  trackingId: ''
};


/**
 * Initialize.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
 *
 * @param {Object} options
 * @param {Function} ready
 */

GA.prototype.initialize = function (options, ready) {
  if (options.classic) {
    this.track = this.trackClassic;
    this.pageview = this.pageviewClassic;
    return this.initializeClassic(options, ready);
  }

  // setup the tracker globals
  window.GoogleAnalyticsObject = 'ga';
  window.ga || (window.ga = function () {
    window.ga.q || (window.ga.q = []);
    window.ga.q.push(arguments);
  });
  window.ga.l = new Date().getTime();

  window.ga('create', options.trackingId, {
    cookieDomain: options.domain || GA.prototype.defaults.domain, // to protect against empty string
    siteSpeedSampleRate: options.siteSpeedSampleRate,
    allowLinker: true
  });

  // anonymize after initializing, otherwise a warning is shown
  // in google analytics debugger
  if (options.anonymizeIp) window.ga('set', 'anonymizeIp', true);

  // track a pageview with the canonical url
  if (options.initialPageview) {
    var path, canon = canonical();
    if (canon) path = url.parse(canon).pathname;
    this.pageview(path);
  }

  callback.async(ready);
  load('//www.google-analytics.com/analytics.js');
};


/**
 * Track.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

GA.prototype.track = function (event, properties, options) {
  options || (options = {});
  window.ga('send', 'event', {
    eventAction: event,
    eventCategory: properties.category || 'All',
    eventLabel: properties.label,
    eventValue: formatValue(properties.value || properties.revenue),
    nonInteraction: properties.noninteraction || options.noninteraction
  });
};


/**
 * Pageview.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 *
 * @param {String} url (optional)
 */

GA.prototype.pageview = function (args) {
  switch (type(args)) {
    case 'object':
      window.ga('send', 'pageview', args);
      break;
    case 'string':
      window.ga('send', 'pageview', {
        page: url
      });  
      break
    case 'undefined':
      ga('send', 'pageview');
      break;
  }
};


/**
 * Initialize (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 *
 * @param {Object} options
 * @param {Function} ready
 */

GA.prototype.initializeClassic = function (options, ready) {
  window._gaq || (window._gaq = []);
  push('_setAccount', options.trackingId);
  push('_setAllowLinker', true);

  var anonymize = options.anonymizeIp;
  var db = options.doubleClick;
  var domain = options.domain;
  var enhanced = options.enhancedLinkAttribution;
  var ignore = options.ignoreReferrer;
  var initial = options.initialPageview;
  var sample = options.siteSpeedSampleRate;

  if (anonymize) push('_gat._anonymizeIp');
  if (domain) push('_setDomainName', domain);
  if (sample) push('_setSiteSpeedSampleRate', sample);

  if (enhanced) {
    var protocol = 'https:' === document.location.protocol ? 'https:' : 'http:';
    var pluginUrl = protocol + '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
    push('_require', 'inpage_linkid', pluginUrl);
  }

  if (ignore) {
    if (!is.array(ignore)) ignore = [ignore];
    each(ignore, function (domain) {
      push('_addIgnoredRef', domain);
    });
  }

  if (initial) {
    var path, canon = canonical();
    if (canon) path = url.parse(canon).pathname;
    this.pageview(path);
  }

  if (db) {
    load('//stats.g.doubleclick.net/dc.js', ready);
  } else {
    load({
      http: 'http://www.google-analytics.com/ga.js',
      https: 'https://ssl.google-analytics.com/ga.js'
    }, ready);
  }
};


/**
 * Track (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

GA.prototype.trackClassic = function (event, properties, options) {
  options || (options = {});
  var category = properties.category || 'All';
  var label = properties.label;
  var value = formatValue(properties.revenue || properties.value);
  var noninteraction = properties.noninteraction || options.noninteraction;

  push('_trackEvent', category, event, label, value, noninteraction);
};


/**
 * Pageview (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 *
 * @param {String} url (optional)
 */

GA.prototype.pageviewClassic = function (url) {
  push('_trackPageview', url);
};


/**
 * Helper to push onto the classic Google Analytics queue.
 *
 * @param {Mixed} args...
 */

function push (args) {
  args = [].slice.call(arguments);
  window._gaq.push.call(window._gaq, args);
}


/**
 * Format the value property to Google's liking.
 *
 * @param {Number} value
 * @return {Number}
 */

function formatValue (value) {
  if (!value || value < 0) return 0;
  return Math.round(value);
}

});
require.register("analytics/lib/integrations/uservoice.js", function(exports, require, module){

var alias = require('alias')
  , callback = require('callback')
  , clone = require('clone')
  , convertDates = require('convert-dates')
  , integration = require('../integration')
  , load = require('load-script')
  , unix = require('to-unix-timestamp');


/**
 * Expose `UserVoice` integration.
 */

var UserVoice = module.exports = integration('UserVoice');


/**
 * Required key.
 */

UserVoice.prototype.key = 'apiKey';


/**
 * Default options.
 */

UserVoice.prototype.defaults = {
  // your uservoice api key (or "widget id") (required)
  apiKey: '',
  // whether you are using the classic uservoice widget or not
  classic: false,
  // your uservoice forum id
  forumId: null,
  // whether to show the uservoice widget on load
  showWidget: true,
  // the mode for the widget
  mode: 'contact',
  // the widget's accent color
  accentColor: '#448dd6',
  // a custom uservoice trigger for the widget
  trigger: null,
  // the widget trigger's position
  triggerPosition: 'bottom-right',
  // the widget trigger's question mark color
  triggerColor: '#ffffff',
  // the widget trigger's background color
  triggerBackgroundColor: 'rgba(46, 49, 51, 0.6)',
  // BACKWARDS COMPATIBILITY: classic options
  classicMode: 'full',
  primaryColor: '#cc6d00',
  linkColor: '#007dbf',
  defaultMode: 'support',
  tabLabel: 'Feedback & Support',
  tabColor: '#cc6d00',
  tabPosition: 'middle-right',
  tabInverted: false
};


/**
 * Initialize.
 *
 * @param {Object} options
 * @param {Function} ready
 */

UserVoice.prototype.initialize = function (options, ready) {
  if (options.classic) {
    this.identify = this.identifyClassic;
    delete this.group;
    return this.initializeClassic(options, ready);
  }

  window.UserVoice || (window.UserVoice = []);
  var opts = formatOptions(options);
  push('set', opts);
  push('autoprompt', {});
  if (options.showWidget) {
    options.trigger
      ? push('addTrigger', options.trigger, opts)
      : push('addTrigger', opts);
  }

  callback.async(ready);
  load('//widget.uservoice.com/' + options.apiKey + '.js');
};


/**
 * Identify.
 *
 * @param {String} id (optional)
 * @param {Object} traits (optional)
 * @param {Object} options (optional)
 */

UserVoice.prototype.identify = function (id, traits, options) {
  if (id) traits.id = id;
  traits = convertDates(traits, unix);
  alias(traits, { created: 'created_at' });
  push('identify', traits);
};


/**
 * Group.
 *
 * @param {String} id (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

UserVoice.prototype.group = function (id, properties, options) {
  if (id) properties.id = id;
  properties = convertDates(properties, unix);
  alias(properties, { created: 'created_at' });
  push('identify', { account: properties });
};


/**
 * Initialize (classic).
 *
 * @param {Object} options
 * @param {Function} ready
 */

UserVoice.prototype.initializeClassic = function (options, ready) {
  window.UserVoice || (window.UserVoice = []);
  window.showClassicWidget = showClassicWidget; // part of public api
  if (options.showWidget) showClassicWidget('showTab', formatClassicOptions(options));
  callback.async(ready);
  load('//widget.uservoice.com/' + options.apiKey + '.js');
};


/**
 * Identify (classic).
 *
 * @param {String} id (optional)
 * @param {Object} traits (optional)
 * @param {Object} options (optional)
 */

UserVoice.prototype.identifyClassic = function (id, traits, options) {
  if (id) traits.id = id;
  push('setCustomFields', traits);
};


/**
 * Push a UserVoice call onto their queue.
 *
 * @param {Mixed} args...
 */

function push (args) {
  args = [].slice.call(arguments);
  window.UserVoice.push(args);
}


/**
 * Format the options for UserVoice.
 *
 * @param {Object} options
 * @return {Object}
 */

function formatOptions (options) {
  var cloned = clone(options);
  alias(cloned, {
    forumId: 'forum_id',
    accentColor: 'accent_color',
    triggerColor: 'trigger_color',
    triggerBackgroundColor: 'trigger_background_color',
    triggerPosition: 'trigger_position'
  });
  return cloned;
}


/**
 * Format the classic options for UserVoice.
 *
 * @param {Object} options
 * @return {Object}
 */

function formatClassicOptions (options) {
  var cloned = clone(options);
  alias(cloned, {
    forumId: 'forum_id',
    classicMode: 'mode',
    primaryColor: 'primary_color',
    tabPosition: 'tab_position',
    tabColor: 'tab_color',
    linkColor: 'link_color',
    defaultMode: 'default_mode',
    tabLabel: 'tab_label',
    tabInverted: 'tab_inverted'
  });
  return cloned;
}


/**
 * Show the classic version of the UserVoice widget. This method is usually part
 * of UserVoice classic's public API.
 *
 * @param {String} type ('showTab' or 'showLightbox')
 * @param {Object} options (optional)
 */

function showClassicWidget (type, options) {
  type || (type = 'showLightbox');
  push(type, 'classic_widget', options);
}
});
require.register("analytics/lib/integrations/dradis.js", function(exports, require, module){
// https://confluence.riotgames.com/display/DARCH/DRADIS
// https://confluence.riotgames.com/display/DARCH/Dradis+JavaScript+SDK

var alias       = require('alias')
  , integration = require('../integration')
  , extend      = require('extend')
  , type        = require('type')
  , each        = require('each')
  , load        = require('load-script');


/**
 * Expose integration.
 */

var Drds = module.exports = integration('Dradis');

Drds.prototype.defaults = {
  key: 'messageType',
  // Table to log events to in Dradis
  messageType: 'web_analytics',
  // Whether to track pageviews to Dradis.
  pageview: true,
  // Whether to track an initial pageview on initialize.
  initialPageview: true
};

/**
 * Initialize.
 *
*/

Drds.prototype.initialize = function (options, ready) {
  var self = this;

  load('//riot-dradis-assets-oregon.s3.amazonaws.com/dradis-0.5.0-prod.min.js', function () {
    window.dradis = new Dradis.Analytics( options.messageType );
    if (options.initialPageview) self.pageview();
    ready();
  });
};

  
/**
 * Identify
 *
 */

Drds.prototype.identify = function (userId, traits) {
  traits = extend(traits, { 'userId': userId });
  each(traits, function (trait, value) {
    window.dradis.setPii(trait, value);
  });
};


/**
 * Track
 *
 */

Drds.prototype.track = function (event, args) {
  switch (type(args)) {
    case 'object':
      args = extend(args, { 'event': event });
      window.dradis.trackEvent(args); 
      break;
    case 'array':
      args.push(event);
      window.dradis.trackEvent(args); 
      break;
    case 'string':
      window.dradis.trackEvent([event, args]); 
      break
    case 'undefined':
      window.dradis.trackEvent([event]);
      break;
  }
};


/**
 * Pageview
 *
 */

Drds.prototype.pageview = function (args) {
  if (!this.options.pageview) return;

  switch (type(args)) {
    case 'object':
      window.dradis.trackPageview(args); 
      break;
    case 'string':
      window.dradis.trackPageview({path: args}); 
      break
    case 'undefined':
      window.dradis.trackPageview();
      break;
  }
};
});





































require.alias("avetisk-defaults/index.js", "analytics/deps/defaults/index.js");
require.alias("avetisk-defaults/index.js", "defaults/index.js");

require.alias("component-clone/index.js", "analytics/deps/clone/index.js");
require.alias("component-clone/index.js", "clone/index.js");
require.alias("component-type/index.js", "component-clone/deps/type/index.js");

require.alias("component-cookie/index.js", "analytics/deps/cookie/index.js");
require.alias("component-cookie/index.js", "cookie/index.js");

require.alias("component-each/index.js", "analytics/deps/each/index.js");
require.alias("component-each/index.js", "each/index.js");
require.alias("component-type/index.js", "component-each/deps/type/index.js");

require.alias("component-emitter/index.js", "analytics/deps/emitter/index.js");
require.alias("component-emitter/index.js", "emitter/index.js");
require.alias("component-indexof/index.js", "component-emitter/deps/indexof/index.js");

require.alias("component-event/index.js", "analytics/deps/event/index.js");
require.alias("component-event/index.js", "event/index.js");

require.alias("component-inherit/index.js", "analytics/deps/inherit/index.js");
require.alias("component-inherit/index.js", "inherit/index.js");

require.alias("component-object/index.js", "analytics/deps/object/index.js");
require.alias("component-object/index.js", "object/index.js");

require.alias("component-querystring/index.js", "analytics/deps/querystring/index.js");
require.alias("component-querystring/index.js", "querystring/index.js");
require.alias("component-trim/index.js", "component-querystring/deps/trim/index.js");

require.alias("component-type/index.js", "analytics/deps/type/index.js");
require.alias("component-type/index.js", "type/index.js");

require.alias("component-url/index.js", "analytics/deps/url/index.js");
require.alias("component-url/index.js", "url/index.js");

require.alias("ianstormtaylor-callback/index.js", "analytics/deps/callback/index.js");
require.alias("ianstormtaylor-callback/index.js", "callback/index.js");
require.alias("timoxley-next-tick/index.js", "ianstormtaylor-callback/deps/next-tick/index.js");

require.alias("ianstormtaylor-bind/index.js", "analytics/deps/bind/index.js");
require.alias("ianstormtaylor-bind/index.js", "bind/index.js");
require.alias("component-bind/index.js", "ianstormtaylor-bind/deps/bind/index.js");

require.alias("segmentio-bind-all/index.js", "ianstormtaylor-bind/deps/bind-all/index.js");
require.alias("component-bind/index.js", "segmentio-bind-all/deps/bind/index.js");

require.alias("component-type/index.js", "segmentio-bind-all/deps/type/index.js");

require.alias("ianstormtaylor-is/index.js", "analytics/deps/is/index.js");
require.alias("ianstormtaylor-is/index.js", "is/index.js");
require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js");

require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js");

require.alias("jkroso-equals/index.js", "analytics/deps/equals/index.js");
require.alias("jkroso-equals/index.js", "equals/index.js");
require.alias("jkroso-type/index.js", "jkroso-equals/deps/type/index.js");

require.alias("segmentio-after/index.js", "analytics/deps/after/index.js");
require.alias("segmentio-after/index.js", "after/index.js");

require.alias("segmentio-alias/index.js", "analytics/deps/alias/index.js");
require.alias("segmentio-alias/index.js", "alias/index.js");
require.alias("component-type/index.js", "segmentio-alias/deps/type/index.js");

require.alias("segmentio-canonical/index.js", "analytics/deps/canonical/index.js");
require.alias("segmentio-canonical/index.js", "canonical/index.js");

require.alias("segmentio-convert-dates/index.js", "analytics/deps/convert-dates/index.js");
require.alias("segmentio-convert-dates/index.js", "convert-dates/index.js");
require.alias("component-clone/index.js", "segmentio-convert-dates/deps/clone/index.js");
require.alias("component-type/index.js", "component-clone/deps/type/index.js");

require.alias("ianstormtaylor-is/index.js", "segmentio-convert-dates/deps/is/index.js");
require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js");

require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js");

require.alias("segmentio-extend/index.js", "analytics/deps/extend/index.js");
require.alias("segmentio-extend/index.js", "extend/index.js");

require.alias("segmentio-is-email/index.js", "analytics/deps/is-email/index.js");
require.alias("segmentio-is-email/index.js", "is-email/index.js");

require.alias("segmentio-is-meta/index.js", "analytics/deps/is-meta/index.js");
require.alias("segmentio-is-meta/index.js", "is-meta/index.js");

require.alias("segmentio-isodate-traverse/index.js", "analytics/deps/isodate-traverse/index.js");
require.alias("segmentio-isodate-traverse/index.js", "isodate-traverse/index.js");
require.alias("component-clone/index.js", "segmentio-isodate-traverse/deps/clone/index.js");
require.alias("component-type/index.js", "component-clone/deps/type/index.js");

require.alias("component-each/index.js", "segmentio-isodate-traverse/deps/each/index.js");
require.alias("component-type/index.js", "component-each/deps/type/index.js");

require.alias("ianstormtaylor-is/index.js", "segmentio-isodate-traverse/deps/is/index.js");
require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js");

require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js");

require.alias("segmentio-isodate/index.js", "segmentio-isodate-traverse/deps/isodate/index.js");

require.alias("segmentio-json/index.js", "analytics/deps/json/index.js");
require.alias("segmentio-json/index.js", "json/index.js");
require.alias("component-json-fallback/index.js", "segmentio-json/deps/json-fallback/index.js");

require.alias("segmentio-load-date/index.js", "analytics/deps/load-date/index.js");
require.alias("segmentio-load-date/index.js", "load-date/index.js");

require.alias("segmentio-load-script/index.js", "analytics/deps/load-script/index.js");
require.alias("segmentio-load-script/index.js", "load-script/index.js");
require.alias("component-type/index.js", "segmentio-load-script/deps/type/index.js");

require.alias("segmentio-new-date/lib/index.js", "analytics/deps/new-date/lib/index.js");
require.alias("segmentio-new-date/lib/milliseconds.js", "analytics/deps/new-date/lib/milliseconds.js");
require.alias("segmentio-new-date/lib/seconds.js", "analytics/deps/new-date/lib/seconds.js");
require.alias("segmentio-new-date/lib/index.js", "analytics/deps/new-date/index.js");
require.alias("segmentio-new-date/lib/index.js", "new-date/index.js");
require.alias("ianstormtaylor-is/index.js", "segmentio-new-date/deps/is/index.js");
require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js");

require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js");

require.alias("segmentio-isodate/index.js", "segmentio-new-date/deps/isodate/index.js");

require.alias("segmentio-new-date/lib/index.js", "segmentio-new-date/index.js");
require.alias("segmentio-on-body/index.js", "analytics/deps/on-body/index.js");
require.alias("segmentio-on-body/index.js", "on-body/index.js");
require.alias("component-each/index.js", "segmentio-on-body/deps/each/index.js");
require.alias("component-type/index.js", "component-each/deps/type/index.js");

require.alias("segmentio-on-error/index.js", "analytics/deps/on-error/index.js");
require.alias("segmentio-on-error/index.js", "on-error/index.js");

require.alias("segmentio-store.js/store.js", "analytics/deps/store/store.js");
require.alias("segmentio-store.js/store.js", "analytics/deps/store/index.js");
require.alias("segmentio-store.js/store.js", "store/index.js");
require.alias("segmentio-store.js/store.js", "segmentio-store.js/index.js");
require.alias("segmentio-to-unix-timestamp/index.js", "analytics/deps/to-unix-timestamp/index.js");
require.alias("segmentio-to-unix-timestamp/index.js", "to-unix-timestamp/index.js");

require.alias("segmentio-top-domain/index.js", "analytics/deps/top-domain/index.js");
require.alias("segmentio-top-domain/index.js", "analytics/deps/top-domain/index.js");
require.alias("segmentio-top-domain/index.js", "top-domain/index.js");
require.alias("component-url/index.js", "segmentio-top-domain/deps/url/index.js");

require.alias("segmentio-top-domain/index.js", "segmentio-top-domain/index.js");
require.alias("timoxley-next-tick/index.js", "analytics/deps/next-tick/index.js");
require.alias("timoxley-next-tick/index.js", "next-tick/index.js");

require.alias("yields-prevent/index.js", "analytics/deps/prevent/index.js");
require.alias("yields-prevent/index.js", "prevent/index.js");

require.alias("yields-slug/index.js", "analytics/deps/slug/index.js");
require.alias("yields-slug/index.js", "slug/index.js");

require.alias("visionmedia-debug/index.js", "analytics/deps/debug/index.js");
require.alias("visionmedia-debug/debug.js", "analytics/deps/debug/debug.js");
require.alias("visionmedia-debug/index.js", "debug/index.js");

require.alias("analytics/lib/index.js", "analytics/index.js");if (typeof exports == "object") {
  module.exports = require("analytics");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("analytics"); });
} else {
  this["analytics"] = require("analytics");
}})();