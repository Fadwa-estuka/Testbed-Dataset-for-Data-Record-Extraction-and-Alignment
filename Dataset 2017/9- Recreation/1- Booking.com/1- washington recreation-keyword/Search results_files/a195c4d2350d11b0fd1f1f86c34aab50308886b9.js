var _i_ = window._i_ || function() {}, _r_ = window._r_ || function(e) {
return e;
};

booking.env.enable_scripts_tracking && ("www" === booking.env.b_site_type && (booking.env.scripts_tracking.jquery = {
loaded:!!window.jQuery,
run:!!window.jQuery
}), booking.env.scripts_tracking.main = {
loaded:!0,
run:!1
}), "function" != typeof booking.debug && (booking.debug = function() {
return _i_("18c:279"), _r_(new function() {
_i_("18c:960"), this.log = this.debug = this.info = this.warn = this.error = this.assert = this.dir = this.table = this.profile = this.trace = this.time = this.timeEnd = function() {}, _r_();
}());
}, booking.debug.enabled = function() {}), booking.console = booking.debug("booking"), window.console = window.console || booking.console, B.tools = {
inherits:function(e, t, i) {
_i_("18c:281");
var n = function() {};
n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n(), e.prototype.constructor = e, i && $.extend(e.prototype, i), _r_();
},
base:function(e, t, i) {
_i_("18c:282");
var n = arguments.callee.caller;
if (!n) throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
if (n.superClass_) return _r_(n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1)));
for (var r = Array.prototype.slice.call(arguments, 2), o = !1, a = e.constructor; a; a = a.superClass_ && a.superClass_.constructor) if (a.prototype[t] === n) o = !0; else if (o) return _r_(a.prototype[t].apply(e, r));
if (e[t] === n) return _r_(e.constructor.prototype[t].apply(e, r));
throw Error("tools.base called from a method of one name to a method of a different name");
},
addSingletonGetter:function(e) {
_i_("18c:283"), e.getInstance = function() {
return _i_("18c:962"), e.__instance__ || (e.__instance__ = new e()), _r_(e.__instance__);
}, _r_();
},
abstractMethod:function() {
throw _i_("18c:284"), Error("unimplemented abstract method");
},
parseInt:function(e) {
return _i_("18c:285"), _r_(parseInt(e, 10));
},
string:{
substitute:function(e, t) {
_i_("18c:600");
for (var i = 1; i < arguments.length; i++) {
var n = String(arguments[i]).replace(/\$/g, "$$$$");
e = e.replace(/%s/, n);
}
return _r_(e);
},
htmlEncode:function(e) {
return _i_("18c:601"), _r_($("<textarea />").text(e).html());
},
htmlDecode:function(e) {
return _i_("18c:602"), _r_($("<textarea />").html(e).text());
}
},
object:{
clone:function(e) {
_i_("18c:603");
var t = $.type(e);
if ("object" === t || "array" === t) {
if ("function" == typeof e.clone) return _r_(e.clone());
var i = "array" === t ? [] :{};
for (var n in e) e.hasOwnProperty(n) && (i[n] = B.tools.object.clone(e[n]));
return _r_(i);
}
return _r_(e);
},
keys:Object.keys,
defaults:function(e, t) {
_i_("18c:604");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
},
getByName:function(e, t) {
_i_("18c:605");
for (var i, n = e.split("."), r = t || window; i = n.shift(); ) {
if (null === r[i] || void 0 === r[i]) return _r_(null);
r = r[i];
}
return _r_(r);
},
pick:function(e, t) {
_i_("18c:606");
var i = [].slice.call(arguments, 1), n = {};
return i.forEach(function(t) {
_i_("18c:1576"), t in e && (n[t] = e[t]), _r_();
}), _r_(n);
}
},
array:{
toObject:function(e) {
_i_("18c:607");
for (var t = {}, i = 0, n = e.length; n > i; i++) t[e[i]] = !0;
return _r_(t);
},
indexOf:function(e, t, i) {
_i_("18c:608");
for (var n = i || 0, r = e.length; r > n; n++) if (e[n] == t) return _r_(n);
return _r_(-1);
}
},
math:{
getRandomInt:function(e, t) {
return _i_("18c:609"), _r_(Math.round(Math.random() * (t - e)) + e);
}
},
dom:{
window:$(window),
getBlockWidth:function(e) {
return _i_("18c:610"), _r_(e.width());
},
getBlockHeight:function(e) {
return _i_("18c:611"), _r_(e.height());
},
getBlockOffset:function(e, t) {
_i_("18c:612");
var i = e.offset(), n = {
left:0,
top:0
};
return t && (n = t.offset()), _r_({
left:i.left - n.left,
top:i.top - n.top
});
},
getBounds:function(e) {
_i_("18c:613");
var t = $(e), i = t.offset(), n = t.outerWidth(), r = t.outerHeight();
return _r_({
left:i.left,
right:i.left + n,
top:i.top,
bottom:i.top + r,
width:n,
height:r
});
},
boundsOverlap:function(e, t) {
return _i_("18c:614"), _r_(e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top);
},
getWindowWidth:function() {
return _i_("18c:615"), _r_(B.tools.dom.getBlockWidth(B.tools.dom.window));
},
getWindowHeight:function() {
return _i_("18c:616"), _r_(B.tools.dom.getBlockHeight(B.tools.dom.window));
},
getWindowScrollLeft:function() {
return _i_("18c:617"), _r_(B.tools.dom.window.scrollLeft());
},
getWindowScrollTop:function() {
return _i_("18c:618"), _r_(B.tools.dom.window.scrollTop());
},
watchIfBlockVisibleInViewport:function(e, t, i, n) {
_i_("18c:619");
function r() {
_i_("18c:963"), B.tools.dom.isBlockVisibleInViewport(e, i) && (t(), n || o()), _r_();
}
function o() {
_i_("18c:964"), B.tools.dom.window.unbind("resize scroll", r), _r_();
}
return B.tools.dom.window.bind("resize scroll", r), setTimeout(r, 0), _r_({
forceCheck:r,
stopWatch:o
});
},
isBlockVisibleInViewport:function(e, t) {
if (_i_("18c:620"), !e || 0 === e.length || !e.is(":visible")) return _r_(!1);
var i = e.offset().top, n = {
top:i,
bottom:i + e.innerHeight()
}, r = B.tools.dom.getWindowScrollTop(), o = {
top:r,
bottom:r + B.tools.dom.getWindowHeight()
};
if (t) return _r_(n.top >= o.top && n.bottom <= o.bottom);
return _r_(n.top >= o.top && n.top <= o.bottom || n.bottom >= o.top && n.bottom <= o.bottom || n.top < o.top && n.bottom > o.bottom);
},
popupCancel:function(e) {
return _i_("18c:621"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200"), _r_(!1);
}
},
css:{
CSS_OPACITY_SUPPORT:"opacity" in document.body.style
},
url:{
parse:function(e) {
_i_("18c:622");
var t = {};
if ("string" != typeof e) return _r_(t);
return e.split(/[;&]/g).forEach(function(e) {
_i_("18c:1577");
var i = e.indexOf("="), n = e.substr(0, i);
void 0 === t[n] && (t[n] = e.substr(i + 1)), _r_();
}), _r_(t);
},
stringify:function(e, t, i) {
_i_("18c:623"), t = t || "&", i = i || "=";
var n = [];
return e && Object.keys(e).forEach(function(t) {
_i_("18c:1850"), n.push(t + i + e[t]), _r_();
}), _r_(n.join(t));
}
},
functions:{
throttle:function(e, t, i) {
_i_("18c:624");
var n, r, o, a = null, s = 0, _ = i || {}, c = function() {
_i_("18c:1578"), s = _.leading === !1 ? 0 :+new Date(), a = null, o = e.apply(n || {}, r || []), n = r = null, _r_();
};
return _r_(function() {
_i_("18c:1387");
var i = +new Date();
s || _.leading !== !1 || (s = i);
var l = t - (i - s);
return n = this, r = arguments, 0 >= l ? (clearTimeout(a), a = null, s = i, o = e.apply(n, r), n = r = null) :a || _.trailing === !1 || (a = setTimeout(c, l)), _r_(o);
});
}
},
jsStaticUrl:function(e) {
return _i_("18c:286"), _r_(B.tools.getStaticHost(e) + e);
},
getStaticHost:function(e) {
if (_i_("18c:287"), !B.env.static_hostnames || !B.env.static_hostnames.length) return _r_(document.location.protocol + "//q.bstatic.com");
if (1 === B.env.static_hostnames.length || !e) return _r_(B.env.static_hostnames[0]);
var t = B.tools.getHashCode(e.toString()), i = Math.abs(t) % B.env.static_hostnames.length;
return _r_(B.env.static_hostnames[i]);
},
getHashCode:function(e) {
_i_("18c:288");
var t, i, n, r = 0;
if (0 === e.length) return _r_(r);
for (t = 0, n = e.length; n > t; t++) i = e.charCodeAt(t), r = (r << 5) - r + i, r |= 0;
return _r_(r);
}
}, B.tools.dom.Bounds, "undefined" != typeof B.define && B.define("tools", B.tools), /* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
function(e) {
_i_("18c:4"), e.CSS || (e.CSS = {});
var t = e.CSS, i = function(e) {
_i_("18c:625"), this.message = e, _r_();
};
i.prototype = new Error(), i.prototype.name = "InvalidCharacterError", t.escape ? e.CSS_escape = t.escape :t.escape = e.CSS_escape = function(e) {
_i_("18c:1388");
for (var t, n = String(e), r = n.length, o = -1, a = "", s = n.charCodeAt(0); ++o < r; ) {
if (t = n.charCodeAt(o), 0 == t) throw new i("Invalid character: the input contains U+0000.");
if (t >= 1 && 31 >= t || 127 == t || 0 == o && t >= 48 && 57 >= t || 1 == o && t >= 48 && 57 >= t && 45 == s) {
a += "\\" + t.toString(16) + " ";
continue;
}
if (t >= 128 || 45 == t || 95 == t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t) {
a += n.charAt(o);
continue;
}
a += "\\" + n.charAt(o);
}
return _r_(a);
}, _r_();
}("undefined" != typeof global ? global :window), function(e, t) {
_i_("18c:5");
function i() {
_i_("18c:289");
var e = "string", t = arguments;
if (typeof t[0] === e && (!t[1] || typeof t[1] === e)) return _r_(i.get.apply(i, t));
return _r_(i.define.apply(i, t));
}
t.extend(i, {
define:function() {
_i_("18c:965");
var e = {}, t = arguments;
return e = "object" == typeof t[0] ? t[0] :{
name:t[0],
handler:t[1]
}, "string" == typeof e.name && "function" == typeof e.handler && (this._list[this._key(e)] = this.create(e)), _r_(this);
},
get:function(e, t) {
return _i_("18c:966"), t = t || "", _r_(this._list[this._key(e, t)]);
},
register:function(e, i) {
_i_("18c:967");
var n = this;
function r(r) {
_i_("18c:1579");
var o = t(this).attr(e), a = n.get(o, i) || n.get(o);
a && a.run(n.params(this, e), r), _r_();
}
t(document.body).delegate("[" + e + "]", i, r), _r_();
},
create:function(e) {
_i_("18c:968");
var i = new this._onea();
return t.extend(i, e), _r_(i);
},
params:function(e, i, n) {
_i_("18c:969"), "string" == typeof i && (n = i, i = void 0);
var r = (n || "data-command") + "-params";
if ("object" != typeof i) return _r_(this._parse(t(e).attr(r)));
var o = [];
t.each(i, function(e, t) {
_i_("18c:2080"), o.push(e + "=" + encodeURIComponent(t)), _r_();
}), t(e).attr(r, o.join(";")), _r_();
},
_list:{},
_onea:n,
_key:function(e, t) {
_i_("18c:970");
var i = "object" == typeof e ? e :{
name:e,
type:t
};
return _r_(i.name + (i.type ? " " + i.type :""));
},
_parse:function(e) {
_i_("18c:971");
var i = {};
return e && t.each(e.split(";"), function(e, t) {
_i_("18c:2081");
var n = t.split("=");
try {
i[n.shift()] = decodeURIComponent(n.join("="));
} catch (r) {}
_r_();
}), _r_(i);
}
}), t.each([ "bind", "unbind", "one", "trigger" ], function(n, r) {
_i_("18c:626"), i[r] = function() {
_i_("18c:1580");
var i = t.makeArray(arguments);
return i[0] = "command:" + i[0], _r_(e.eventEmitter[r].apply(e.eventEmitter, i));
}, _r_();
});
function n() {}
n.prototype = {
name:"",
type:"",
run:function() {
_i_("18c:972");
var e = t.makeArray(arguments);
return e[0] = e[0] || {}, i.trigger.apply(i, [ this.name ].concat(e)), _r_(this.handler.apply(this, e));
},
handler:function() {}
}, booking.command = i, i.register("data-command", "click"), _r_();
}(window.booking, window.jQuery), function(e) {
"use strict";
_i_("18c:6");
var t = "function", i = "object", n = "reject", r = "fulfill", o = 0, a = typeof module === i && module.exports && "function" != typeof __webpack_require__;
function s() {
_i_("18c:291"), this._act = o, this._cbs = [], this._ebs = [], _r_();
}
s.tick = function(e) {
_i_("18c:627"), a ? process.nextTick(e) :setTimeout(e, 0), _r_();
}, s.prototype = {
_exec:function(e) {
_i_("18c:974");
var i = this._val, n = this._act;
s.tick(function() {
_i_("18c:1851");
for (var r, o, a; r = e.shift(); ) if (o = r.pr, a = r.cb, typeof a === t) try {
o.fulfill(a(i));
} catch (s) {
o.reject(s);
} else o[n](i);
_r_();
}), _r_();
},
reject:function(e) {
_i_("18c:975");
var t = this;
t._act === o && (t._val = e, t._act = n, t._exec(t._ebs)), _r_();
},
fulfill:function(e) {
_i_("18c:976");
var n, a, s = this, _ = 1;
if (s._act === o) {
try {
if (e === s) throw TypeError();
a = e && typeof e, n = (a === t || a === i) && e.then;
} catch (c) {
return s.reject(c), _r_();
}
if (typeof n === t) try {
n.call(e, function(e) {
_i_("18c:2295"), _ = _ && s.fulfill(e), _r_();
}, function(e) {
_i_("18c:2296"), _ = _ && s.reject(e), _r_();
});
} catch (c) {
_ = _ && s.reject(c);
} else s._val = e, s._act = r, s._exec(s._cbs);
}
_r_();
},
then:function(e, t) {
_i_("18c:977");
var i = this, r = new s();
return i._act === o ? (i._cbs.push({
cb:e,
pr:r
}), i._ebs.push({
cb:t,
pr:r
})) :i._exec([ {
cb:i._act === n ? t :e,
pr:r
} ]), _r_(r);
}
}, a ? module.exports = s :e.p0 = s, _r_();
}(booking), booking.promise = function() {
return _i_("18c:7"), _r_(new booking.p0());
}, booking.promise.when = function(e) {
_i_("18c:8");
var t, i, n;
if (t = e.length, i = [], n = booking.promise(), !t) return n.fulfill([]), _r_(n);
return e.forEach(function(e, r) {
_i_("18c:628");
var o = function(e) {
_i_("18c:1581"), t--, i[r] = e, t || n.fulfill(i), _r_();
};
booking.promise.is(e) ? e.then(o, function(e) {
_i_("18c:1852"), n.reject(e), _r_();
}) :o(e), _r_();
}), _r_(n);
}, booking.promise.is = function(e) {
return _i_("18c:9"), _r_(e && "function" == typeof e.then);
}, booking.p0.prototype.pipe = function(e) {
return _i_("18c:10"), _r_(booking.promise.is(e) ? this.then(function(t) {
_i_("18c:876"), e.fulfill(t), _r_();
}, function(t) {
_i_("18c:877"), e.reject(t), _r_();
}) :this);
}, booking.p0.prototype.log = function(e) {
_i_("18c:11"), e = e || "";
var t = function(t, i) {
return _i_("18c:629"), _r_(function(n) {
if (_i_("18c:1389"), window.console && console.log && console.log([ e, t ].join(" "), n), i) {
var r = B.promise();
return r.reject(n), _r_(r);
}
return _r_(n);
});
};
return _r_(this.then(t("resolved - "), t("rejected - ", !0)));
}, booking.p0.prototype.finishChain = function() {
_i_("18c:12"), this.then(null, function(e) {
_i_("18c:630"), e instanceof Error && setTimeout(function() {
throw _i_("18c:1853"), e;
}, 0), _r_();
}), _r_();
}, window.goog = {}, goog.inherits = B.tools.inherits, goog.base = B.tools.base, goog.abstractMethod = B.tools.abstractMethod, goog.addSingletonGetter = B.tools.addSingletonGetter, goog.isBoolean = function(e) {
return _i_("18c:13"), _r_("boolean" == typeof e);
}, goog.isNumber = function(e) {
return _i_("18c:14"), _r_("number" == typeof e);
}, goog.isString = function(e) {
return _i_("18c:15"), _r_("string" == typeof e);
}, goog.isObject = function(e) {
_i_("18c:16");
var t = typeof e;
return _r_("object" === t && null != e || "function" === t);
}, goog.isArray = function(e) {
return _i_("18c:17"), _r_("array" === $.type(e));
}, goog.isFunction = function(e) {
return _i_("18c:18"), _r_("function" === $.type(e));
}, $.ajaxSetup && $.ajaxSetup({
cache:!1,
beforeSend:function(e, t) {
if (_i_("18c:631"), e.setRequestHeader("X-Booking-Pageview-Id", booking.env.pageview_id), e.setRequestHeader("X-Booking-AID", booking.env.aid), e.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid), booking.env.b_site_type_id && e.setRequestHeader("X-Booking-SiteType-Id", booking.env.b_site_type_id), booking.env.b_partner_channel_id && e.setRequestHeader("X-Partner-Channel-Id", booking.env.b_partner_channel_id), booking.env.b_label && e.setRequestHeader("X-Booking-Label", encodeURIComponent(booking.env.b_label)), booking.env.b_csrf_token && e.setRequestHeader("X-Booking-CSRF", booking.env.b_csrf_token), booking.env.b_lang_for_url && e.setRequestHeader("X-Booking-Language-Code", booking.env.b_lang_for_url), booking.env.b_extra_ajax_headers) for (var i in booking.env.b_extra_ajax_headers) booking.env.b_extra_ajax_headers.hasOwnProperty(i) && e.setRequestHeader(i, booking.env.b_extra_ajax_headers[i]);
var n = $("#req_info");
n.size && n.html() && e.setRequestHeader("X-Booking-Info", n.html()), _r_();
}
}), window.bookmark = function(e, t, i) {
if (_i_("18c:19"), window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(t, e, ""); else if (window.external) try {
window.external.AddToFavoritesBar(e, t);
} catch (n) {
window.external.AddFavorite(e, t);
} else window.opera && window.print && (i.title = t);
return _r_(!1);
}, window.addBookmark = function(e, t) {
_i_("18c:20"), window.sidebar ? window.sidebar.addPanel(e, t, "") :document.all ? window.external.AddFavorite(t, e) :alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D"), _r_();
}, window.hideFrameContainer = function(e) {
if (_i_("18c:21"), document.getElementById) {
var t = document.getElementById(e);
t.style.display = "none", document.getElementById("headline_newsletter").style.display = "block", document.getElementById("headline_createprofile").style.display = "none";
}
_r_();
}, window.changeHeadline = function() {
_i_("18c:22"), document.getElementById("headline_newsletter").style.display = "none", document.getElementById("headline_createprofile").style.display = "block", _r_();
}, window.hideEl = function e(t) {
_i_("18c:23"), $.isArray(t) && $.each(t, function() {
_i_("18c:978"), e(this), _r_();
}), $("#" + t).hide(), _r_();
}, window.showEl = function(e) {
_i_("18c:24"), $("#" + e).show(), _r_();
}, window.showFrameContainer = function(e, t, i, n, r, o, a, s) {
if (_i_("18c:25"), document.getElementById) {
var _ = document.getElementById(e), c = document.getElementById(t), l = document.getElementById(i);
if ("block" === c.style.display) return c.style.display = "none", _r_(!1);
l.src !== n && (l.src = n), c.style.visibility = "hidden", c.style.display = "block";
var u = $(_).position() || {}, d = u.left, h = u.top;
a && (d += a), s && (h += s), r || (r = c.offsetWidth);
var p = document.getElementById("bodyconstraint").offsetWidth;
return d + r > p && (d = p - r - 40), c.style.left = d + "px", c.style.top = h + "px", c.style.visibility = "visible", _r_(!1);
}
window.open(n), _r_();
}, window.sSc = function(e, t, i) {
_i_("18c:26"), document.getElementById && (document.getElementById("rsc_" + e).innerHTML = i), _r_();
}, window.sSc3 = function(e, t) {
_i_("18c:27"), $("li[id^=" + e + "]").attr("style", "display: none; "), $("li[id^=" + t + "]").removeAttr("style"), _r_();
}, window.sSc2 = function(e, t, i) {
if (_i_("18c:28"), document.getElementById) {
document.getElementById("rnr") && (document.getElementById("rnr").innerHTML = e);
for (var n = -1; 10 > n; n++) {
var r = document.getElementById("rl" + n);
r && (r.style.color = "", r.style.textDecoration = "underline");
}
t.style.color = "#003580", t.style.textDecoration = "none", t.blur(), $("#gr_profile_chooser ul").removeClass().addClass(i), $(".review_filter_sub").text($(t).find(".key").text());
var o;
o = "group" === i || "review_category_group_of_friends" === i ? "group_big" :"solo_traveller" === i ? "solo_big" :"family_with_young_children" === i || "review_category_family" === i ? "youngchildren_big" :"mature_couple" === i ? "maturecouple_big" :"family_with_older_children" === i ? "oldchildren_big" :"with_friends" === i ? "withfriends_big" :"young_couple" === i || "review_category_couple" === i ? "youngcouple_big" :"global_big", $(".review_user_type").attr("class", "review_user_type type_" + o);
}
_r_();
}, $(function() {
_i_("18c:29"), $(".newsletter_ajax_error").hide(), $('input#to[type="text"]').css({
backgroundColor:"#FFFFFF"
}), $('input#to[type="text"]').focus(function() {
_i_("18c:632"), $(this).css({
color:"#003580"
}), this.value === this.defaultValue && (this.value = ""), this.value !== this.defaultValue && this.select(), _r_();
}), $("input.text-input").blur(function() {
_i_("18c:633"), $(this).css({
backgroundColor:"#FFFFFF"
}), _r_();
}), _r_();
}), function(e, t) {
_i_("18c:30"), t = t || {};
var i = e.console || {};
i.warn = i.warn || function() {};
var n = {
_list:{},
get:function(e) {
return _i_("18c:979"), _r_(n._list[e]);
},
set:function(e, t) {
_i_("18c:980"), e = e || "", t = t || "", "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, "")), "string" == typeof t && (t = t.replace(/^\s+|\s+$/g, "")), e.length > 0 && "string" == typeof e || "string" != typeof e ? ("undefined" != typeof n._list[e] && i.warn("Booking Strings: replacing string with id: " + e), n._list[e] = t) :i.warn("Booking Strings: trying to insert string with empty id"), _r_();
}
}, r = function(e, t) {
return _i_("18c:634"), _r_(n["undefined" != typeof t ? "set" :"get"](e, t));
};
t.strings = r, t.strings.get = n.get, t.strings.set = n.set, _r_();
}(window, booking), B.define("search-config", [ "tmpl_data", "event-emitter" ], function(e, t, i) {
"use strict";
_i_("18c:31");
function n(e) {
if (_i_("18c:292"), !(this instanceof n)) return _r_(new n(e));
this.adults = Number(e.b_adults) || 0, this.children = Number(e.b_children) || 0, this.childrenAges = this.children ? e.b_children_ages.map(Number) :[], this.order = Number(e.b_room_order), _r_();
}
n.prototype.toString = function() {
_i_("18c:635");
for (var e = [], t = 0; t < this.adults; t++) e.push("A");
return e = e.concat(this.childrenAges), _r_(e.join(","));
};
function r(r) {
_i_("18c:293"), r === i && (r = e("b_search_config")), r ? this._set(r) :(this.isDefault = !0, this.isGroupSearch = !1, this.adults = 2, this.children = 0, this.rooms = [ n({
b_adults:2,
b_children:0,
b_children_ages:[],
b_room_order:1
}) ], this.childrenAges = []), t.extend(this), _r_();
}
return r.prototype._set = function(e) {
_i_("18c:636"), this.isDefault = !1, this.isGroupSearch = Boolean(Number(e.b_is_group_search)), this.adults = Number(e.b_adults_total), this.children = Number(e.b_children_total) || 0, this.pets = Number(e.b_pets_total) || 0, this.rooms = e.b_rooms.map(n), this.childrenAges = this.rooms.reduce(function(e, t) {
return _i_("18c:1752"), _r_(e.concat(t.childrenAges));
}, []), _r_();
}, r.prototype.set = function(e) {
_i_("18c:637"), this._set(e), this.emit("change"), _r_();
}, r.prototype.toArray = function(e) {
return _i_("18c:638"), _r_(e ? new r(e).toArray() :this.rooms.map(Function.prototype.call, n.prototype.toString));
}, r.prototype.toObject = function(e) {
return _i_("18c:639"), _r_(this.toArray(e).reduce(function(e, t, i) {
return _i_("18c:1582"), e["room" + (i + 1)] = t, _r_(e);
}, {}));
}, r.prototype.getRawValue = function() {
return _i_("18c:640"), _r_({
b_adults_total:this.adults,
b_nr_rooms_needed:this.rooms.length,
b_children_total:this.children,
b_is_group_search:this.isGroupSearch ? 1 :0,
b_pets_total:this.pets,
b_rooms:this.rooms.map(function(e) {
_i_("18c:1854");
var t = {
b_adults:e.adults,
b_room_order:e.order
};
return e.children && (t.b_children = e.children, t.b_children_ages = e.childrenAges), _r_(t);
})
});
}, _r_(new r());
}), booking.formatter = booking.formatter || {}, booking.formatter.date = B.require("formatting/date").compat, B.define("fragment", [ "jquery", "promise" ], function(e, t) {
_i_("18c:32");
var i, n, r = B.debug("fragment"), o = 15, a = 200, s = 50, _ = 0, c = [], l = function() {
_i_("18c:641");
var t, i, n = [], o = !0;
if (1 === c.length) i = c[0], i.args.tmpl && (o = !1), t = Object.assign({
name:i.name
}, i.args), n.push(i); else {
for (var a = {}, s = 0, _ = c.length; _ > s; s++) i = c[s], n.push(i), i.name in a || (a[i.name] = {}), a[i.name][i.id] = i.args;
t = {
batch:JSON.stringify(a)
};
}
var l = o ? B.env.b_fragment_url_json :B.env.b_fragment_url_html;
c = [], r.info("Request", l, t), e.ajax({
url:l,
data:t,
type:"POST",
cache:!1
}).done(function(e) {
if (_i_("18c:1855"), r.info("Resolve", e, n), 1 === n.length) n[0].resolve(e); else for (var t, i = 0, o = n.length; o > i; i++) t = n[i], t.resolve(e[t.name] ? e[t.name][t.id] :void 0);
_r_();
}).fail(function(e) {
_i_("18c:1583"), r.info("Reject", e, n);
for (var t = 0, i = n.length; i > t; t++) n[t].reject();
_r_();
}), _r_();
}, u = function(e, r) {
if (_i_("18c:642"), !e) throw new Error("Fragment name cannot be undefined.");
return _r_(new t(function(t, u) {
_i_("18c:1584"), clearTimeout(n), 0 === c.length && (i = Date.now()), c.push({
id:"frg-" + _++,
name:e,
args:r,
resolve:t,
reject:u
}), c.length > 1 && Date.now() - i > a || c.length === s ? l() :n = setTimeout(l, o), _r_();
}));
}, d = function(e) {
_i_("18c:643");
var t = {};
if (e) for (var i in e) if (e.hasOwnProperty(i)) {
var n = e[i];
t[i] = "object" == typeof n ? JSON.stringify(n) :n;
}
return _r_(t);
}, h = function(e, t) {
return _i_("18c:644"), _r_(u(e, d(t)));
};
return _r_({
call:h
});
}), booking.define("squeak", function() {
"use strict";
_i_("18c:33");
var e = 10, t = !1, i = [], n = {};
function r() {
_i_("18c:294"), i.length ? setTimeout(a, 1e3) :t = !1, _r_();
}
function o(r) {
if (_i_("18c:295"), n.hasOwnProperty(r) || (n[r] = 0), ++n[r] > e) return _r_();
if (i.push(r), t) return _r_();
t = !0, setTimeout(a, 1e3), _r_();
}
function a() {
_i_("18c:296"), $.ajax({
url:"/squeak",
type:"GET",
success:r,
error:r,
data:{
pid:booking.env.pageview_id,
stid:booking.env.b_stid,
sqk:"1:" + i.join(",")
}
}), i = [], _r_();
}
return _r_(o);
}), booking.squeak = booking.require("squeak"), B.define("et_deprecation_warnings", function(e, t, i) {
_i_("18c:34");
var n, r = {
EXP:"exp",
GET_VARIANT:"get_variant",
STAGE:"stage",
GOAL:"goal",
CUSTOM_GOAL:"custom_goal"
}, o = "et_deprecation_warnings_filter", a = [], s = !1;
try {
s = window.localStorage && window.sessionStorage ? !0 :!1, s && window.localStorage.setItem("btest", "1");
} catch (_) {
s = !1;
}
function c(e) {
_i_("18c:297"), "undefined" != typeof e && s && localStorage.setItem(o, e), _r_();
}
function l() {
_i_("18c:298");
var e = s && localStorage.getItem(o), t = e && new RegExp(e);
return _r_(function(e) {
return _i_("18c:879"), _r_(!t || t.test(e));
});
}
function u(e) {
return _i_("18c:299"), _r_(B.jsdt && "undefined" != typeof B.jsdt[e] && B.jsdt[e]);
}
function d(e) {
return _i_("18c:300"), _r_(e.replace("__hashed", ""));
}
function h(e) {
_i_("18c:301"), a.push(e), _r_();
}
function p() {
_i_("18c:302");
var e = a;
a = [], e.filter(l()).forEach(function(e) {
_i_("18c:981"), console && console.log(e[0], e[1], e[2], e[3]), _r_();
}), _r_();
}
function f(e) {
_i_("18c:303");
var t = new Error(), i = t.stack && t.stack.split && t.stack.split("\n").map(function(e) {
if (_i_("18c:1585"), "string" == typeof e) {
var t = e.match(/(http[\/\w\.\-\:]*)/);
return _r_(t && t[1] ? t[1] :"");
}
return _r_("");
});
return _r_(i && i[e] ? i[e] :"");
}
function g(e, t, i) {
_i_("18c:304");
var o, a = u(t), s = d(t), _ = [ "%c" + s, "font-weight: bold;" ];
e === r.EXP ? o = a ? "B.track.exp is deprecated. v" + a + " went fullon. Please, cleanup." :"B.track.exp is deprecated, but used for tracking. Please use B.et.track instead." :e === r.GET_VARIANT ? o = a ? "B.track.getVariant is deprecated. v" + a + " of went fullon. Please, cleanup." :"B.track.getVariant method is deprecated, but used for tracking. Please, use B.et.track instead." :e === r.STAGE ? o = a ? "B.track.stage is deprecated. v" + a + " went fullon. Please, cleanup." :"B.track.stage method is deprecated, but used for tracking. Please, use B.et.stage instead." :e === r.GOAL ? o = "B.track.goal method is deprecated, but used for tracking. Please, use B.et.goal instead." :e === r.CUSTOM_GOAL && (o = a ? "B.track.custom_goal is deprecated. v" + a + " went fullon. Please, cleanup." :"B.track.custom_goal method is deprecated, but used for tracking. Please, use B.et.customGoal instead."), o && (_.push(o), _.push(f(4)), h(_)), n && window.clearTimeout(n), n = window.setTimeout(p, 1e3), _r_();
}
t.DEPRECATED = r, t.showDeprecationWarning = g, t.setFilter = c, _r_();
}), function(e, t, i) {
_i_("18c:35");
var n, r = "experiments", o = "startup", a = "experiments_load", s = "startup_load", _ = t.env, c = _ && _.b_site_type_id || "", l = i(document), u = _ && _.reportJSTracking || !1, d = function(e) {
return _i_("18c:645"), _r_("function" == typeof e);
}, h = function(e) {
_i_("18c:646");
var i = "b_site_experiment_" + e, n = t.jst && t.jst[e] > 0;
return _r_(i in _ && +_[i] > 0 || n);
};
if (B.env.et_deprecation_warnings) var p = B.require("et_deprecation_warnings").showDeprecationWarning, f = B.require("et_deprecation_warnings").DEPRECATED;
var g = t.require("request_info");
t.ensureNamespaceExists(r), t.ensureNamespaceExists(o), t.ensureNamespaceExists(a), t.ensureNamespaceExists(s), n = t[o], n.init = function(e) {
_i_("18c:647");
var n, c, l, u, p, f, g, m, v, b, w, y, k, S = [], C = 9, x = "ready" === e;
if (t.env.b_inc_filters) {
var B = t.env.b_inc_filters;
for (var E in B) {
var T = B[E];
for (var $ in T) t.jst[$] = T[$];
}
}
n = x ? r :a, l = t[n];
for (var D in l) {
if (t.b_disable_run && isNaN(_["b_site_experiment_" + D]) && t.jst && void 0 === t.jst[D]) continue;
l[D] && S.push([ l[D].priority || C, D, n, !h(D) ]);
}
c = x ? o :s, u = t[c];
for (p in u) b = u[p], S.push([ b.priority || C, p, c, !1 ]);
if (S.length > 0) for (S.sort(), y = 0, k = S.length; k > y; y += 1) f = S[y], g = f[1], m = f[2], b = t[m][g], i.extend(b, {
strings:t.strings
}), v = f[3] ? b.initElse :b.init, b.ns = "booking." + m, b.name = g, d(v) && setTimeout(function(e, t, i) {
return _i_("18c:2269"), _r_(function() {
_i_("18c:2325"), w = e.execute(t, i), w === !0 && (i.init = i.initElse = null), _r_();
});
}(this, v, b), 0);
i(document).trigger(e + ":finished"), _r_();
}, n.execute = function(e, t) {
return _i_("18c:648"), _r_(e.call(t));
}, _.amTracking = [], function() {
_i_("18c:649");
var n = 20, r = Object.prototype.toString, o = Array.prototype.slice, a = i(e), s = i(document), l = function(e) {
_i_("18c:1586");
var t, n = e.offset(), r = "function" == typeof n.constructor ? n.constructor :{
name:"OtherConstructor"
};
if ("ClientRect" === r.name) {
if (t = i(e.trackingSelector).eq(0).offset()) return _r_(t.top);
return _r_(!1);
}
return _r_(n.top);
}, d = function(e) {
_i_("18c:1587");
var t = l(e);
if (t === !1) return _r_(!1);
return _r_(a.scrollTop() + a.height() > t + n && e.is(":visible"));
}, h = function(e, t) {
_i_("18c:1588");
try {
a.trigger(e, t);
} catch (i) {}
_r_();
}, m = {
css:jQuery.fn.css,
show:jQuery.fn.show,
hide:jQuery.fn.hide,
toggle:jQuery.fn.toggle
}, v = {
show:/block|inline|list-item|inline-block/,
hide:/none/
};
jQuery.fn.css = function(e, t) {
_i_("18c:1589");
var i = m.css.apply(this, o.apply(arguments));
return this.selector && ("undefined" != typeof t && "display" === e ? h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:t
}) :"[object Object]" === r.apply(e) && "display" in e && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:e.display
})), _r_(i);
}, i.each("show hide toggle".split(" "), function(e, t) {
_i_("18c:1590"), jQuery.fn[t] = function() {
_i_("18c:2082");
var e = m[t].apply(this, o.apply(arguments));
return this.selector && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:this.css("display")
}), _r_(e);
}, _r_();
});
var b, w, y, k, S, C = [], x = [], E = [], T = [], $ = {}, D = _.b_action || "fixme";
k = function() {
_i_("18c:1591"), S = !1, _r_();
}, w = function() {
_i_("18c:1592");
var n, r, o = "", s = "";
if (b = !1, S || t.sending_logo) return b = setTimeout(w, 50), _r_();
if (C.length > 0 || x.length > 0 || E.length > 0 || T.length > 0) {
if (S = !0, a.trigger("ClickTale:TrackDynamic", {
experiments:C
}), n = x.length ? ";what=" + x.join(",") :"", E.length) {
o = ";custom=";
for (var l = 0, d = E.length; d > l; l++) o += E[l].join("|"), d > l + 1 && (o += ",");
}
if (T.length) {
s = ";stage=";
for (var l = 0, d = T.length; d > l; l++) s += T[l].join("|"), d > l + 1 && (s += ",");
}
g.populate(C), g.populate(T.map(function(e) {
return _i_("18c:2270"), _r_(e.join("|"));
}));
var h = "/js_tracking?ver=1" + n + o + s + ";ref_action=" + D + ";sid=" + _.b_sid + ";aid=" + _.b_aid + ";lang=" + _.b_lang_for_url + ";new=1;pid=" + _.pageview_id + ";exps=" + C.join(",") + ";stype=" + c;
try {
i.ajax({
url:h,
async:!0,
type:"GET",
complete:k
});
} catch (p) {
r = new Image(), r.onload = r.onerror = k, r.src = h, u && (u = !1, e.onerror("3rd_js_tracking_report: " + h, h, 1));
}
B.devTools && B.devTools.trackedExperimentsFilter && B.eventEmitter.trigger("TRACKING.js_exp_tracking_request", {
exps:C,
jsGoals:x,
jsCustomGoals:E,
jsStages:T
}), _.b_js_tracking_info_to_console && e.console && (C.length && e.console.info("JS exp tracking triggered: " + C.join(", ")), x.length && e.console.info("JS goal tracking triggered: " + x.join(", ")), E.length && e.console.info("JS custom goal tracking triggered: " + E.join(", ")), T.length && e.console.info("JS stage tracking triggered: " + T.join(", "))), C = [], x = [], E = [], T = [];
}
_r_();
}, y = function(n, r, o) {
if (_i_("18c:1593"), "undefined" == typeof n || null === n || "bot" === _.b_browser) return _r_();
var a, s, c, l, u, d = i.isArray(n) ? n :n.split && n.length ? n.split(",") :[], h = t.env.js_experiment_tracking || {};
if (d.length && !isNaN(o)) {
if (1 > o || o > 9) return _r_();
u = d[0], l = t.jst && "undefined" != typeof t.jst[u] && t.jsdt && !t.jsdt[u];
var g = u + ":stage" + o;
l && "undefined" == typeof _.amTracking[g] && (n = !0, T.push([ u, o ]), _.amTracking[g] = 1), o = void 0, d.length = 0;
}
for (a = 0, s = d.length; s > a; a += 1) u = d[a], t.checkExpTagHashed && t.checkExpTagHashed(u), B.env.et_deprecation_warnings && p(f.EXP, u), l = t.jst && "undefined" != typeof t.jst[u] && t.jsdt && !t.jsdt[u], c = (isNaN(+u) && h ? h[u] :u) || (l ? u :!1), (/^[0-9]+$/.test(c) || l) && "undefined" == typeof _.amTracking["e" + c] && (C.push(c), _.amTracking["e" + c] = 1);
if (r && (o || "undefined" != typeof _.amTracking["g" + r] || (x.push(r), _.amTracking["g" + r] = 1), !o || $[r] && $[r][o] || (E.push([ r, o ]), $[r] || ($[r] = []), $[r][o] = 1)), n !== !0 && !C.length) return _r_(!1);
h && h.njst && /^[0-9]+$/.test(h.njst) && "undefined" == typeof _.amTracking["e" + h.njst] && (C.push(h.njst), _.amTracking["e" + h.njst] = 1), b && (e.clearTimeout(b), b = !1), b = e.setTimeout(w, 50), _r_();
}, t.track = {
exp:y,
stage:function(e, i) {
if (_i_("18c:1856"), !e || 0 > +i || +i > 9 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_(!0);
return y(e, void 0, i), _r_(!0);
},
goal:function(e) {
if (_i_("18c:1857"), B.env.et_deprecation_warnings && p(f.GOAL, e), !e) return _r_();
y(!0, e), _r_();
},
custom_goal:function(e, i) {
if (_i_("18c:1858"), B.env.et_deprecation_warnings && p(f.CUSTOM_GOAL, e, i), !e || 1 > +i || +i > 5 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_();
y(!0, e, i), _r_();
},
getVariant:function(e) {
if (_i_("18c:1859"), t.checkExpTagHashed && t.checkExpTagHashed(e), B.env.et_deprecation_warnings && p(f.GET_VARIANT, e), e && t.jst && !isNaN(t.jst[e])) return _r_(t.jst[e]);
return _r_(!1);
},
onView:function(e) {
_i_("18c:1860");
var n = i(e).eq(0), s = this.exp, _ = this.stage;
n.trackingSelector = e;
var c = function() {
_i_("18c:2208");
var s = o.apply(arguments), _ = s.shift(), c = i.proxy(function() {
_i_("18c:2338");
var o;
d(n) && (o = "ONVIEW:" + ("[object String]" === r.apply(e) ? e :i(e).selector), a.trigger(o, {
source:e
}), _.apply(t.track, this.args), a.unbind("resize scroll", c)), _r_();
}, {
args:s
});
n.length && ("none" === n.css("display") && n.css({
display:"block",
visibility:"hidden"
}), a.bind("resize scroll", c), c()), _r_();
};
return _r_({
exp:function() {
_i_("18c:2271");
var e = o.apply(arguments);
e.unshift(s), c.apply(t.track, e), _r_();
},
stage:function() {
_i_("18c:2272");
var e = o.apply(arguments);
e.unshift(_), c.apply(t.track, e), _r_();
}
});
},
onNav:function() {
return _i_("18c:1861"), _r_({
exp:function() {},
stage:function() {}
});
}
}, i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("18c:1594");
var r = n.slice(0, 1), a = n.replace(r, r.toUpperCase());
t.track[n] = t.track["on" + a] = function(e) {
_i_("18c:2177");
var r = i(e), a = function() {
_i_("18c:2315");
var e = o.apply(arguments), a = e.shift(), s = i.proxy(function() {
_i_("18c:2363"), a.apply(t.track, this.args), r.unbind(n, s), _r_();
}, {
args:e
});
r.bind(n, s), _r_();
};
return _r_({
exp:function() {
_i_("18c:2326");
var e = o.apply(arguments);
e.unshift(t.track.exp), a.apply(t.track, e), _r_();
},
stage:function() {
_i_("18c:2327");
var e = o.apply(arguments);
e.unshift(t.track.stage), a.apply(t.track, e), _r_();
}
});
}, t.track["live" + a] = function(e) {
_i_("18c:2083");
var r = function() {
_i_("18c:2297");
var r = o.apply(arguments), a = r.shift(), _ = i.proxy(function() {
_i_("18c:2358"), a.apply(t.track, this.args), s.undelegate(e, n, _), _r_();
}, {
args:r
});
s.delegate(e, n, _), _r_();
};
return _r_({
exp:function() {
_i_("18c:2316");
var e = o.apply(arguments);
e.unshift(t.track.exp), r.apply(t.track, e), _r_();
},
stage:function() {
_i_("18c:2317");
var e = o.apply(arguments);
e.unshift(t.track.stage), r.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("show hide".split(" "), function(e, n) {
_i_("18c:1595"), t.track[n] = function(e) {
_i_("18c:2084");
var r = i(e);
if (!r.selector) return _r_({
exp:function() {},
stage:function() {}
});
var s = function() {
_i_("18c:2298");
var e = o.apply(arguments), s = e.shift(), _ = i.proxy(function(e, i) {
_i_("18c:2359"), v[n].test(i.value) && (i.elem.selector === r.selector || 1 === r.length && i.elem[0] === r[0]) && (s.apply(t.track, this.args), a.unbind("ELEMENT_DISPLAY:" + r.selector, _)), _r_();
}, {
args:e
});
a.bind("ELEMENT_DISPLAY:" + r.selector, _), _r_();
};
return _r_({
exp:function() {
_i_("18c:2318");
var e = o.apply(arguments);
e.unshift(t.track.exp), s.apply(t.track, e), _r_();
},
stage:function() {
_i_("18c:2319");
var e = o.apply(arguments);
e.unshift(t.track.stage), s.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("18c:1596");
var r = "[data-track-on-" + n + "]", o = function() {
_i_("18c:2085"), t.track.exp.call(t.track, i(this).data("track-on-" + n) + ""), _r_();
};
s.delegate(r, n, o), _r_();
});
var N = {
mouseenter:"hover",
click:"click"
};
s.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
_i_("18c:1597");
var n = (i(this).data("google-track") || "").split("/");
n[0].toLowerCase() === N[e.type] && t.google.trackEvent.apply(t.google, n), _r_();
}), s.delegate("[data-ga-track]", "click", function(e) {
_i_("18c:1598");
var n = (i(this).data("ga-track") || "").split(":");
n[0].toLowerCase() === N[e.type] && t.google.trackPageview.apply(t.google, n), _r_();
}), _r_();
}(), _.trackExperiment = function() {
_i_("18c:650"), t.track.exp.apply(this, Array.prototype.slice.apply(arguments)), _r_();
}, i(function() {
_i_("18c:651"), l.trigger("ready:before"), t[o].init("ready"), _r_();
}), i(e).on("load", function() {
_i_("18c:652"), t[o].init("load"), _r_();
}), t.run = function(e) {
return _i_("18c:653"), _r_({
afterReady:function(e) {
_i_("18c:1753"), this.onReady(function() {
_i_("18c:2178"), l.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("18c:1754"), t[o][e] = {
priority:9,
init:i
}, _r_();
},
onLoad:function(i) {
_i_("18c:1755"), t[s][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.runExp = function(e) {
return _i_("18c:654"), _r_({
beforeReady:function(e) {
_i_("18c:1756"), l.bind("ready:before", e), _r_();
},
afterReady:function(e) {
_i_("18c:1757"), this.onReady(function() {
_i_("18c:2179"), l.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("18c:1758"), t[r][e] = {
priority:9,
init:i
}, _r_();
},
afterLoad:function(e) {
_i_("18c:1759"), this.onLoad(function() {
_i_("18c:2180"), l.bind("load:finished", e), _r_();
}), _r_();
},
onLoad:function(i) {
_i_("18c:1760"), t[a][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.env.b_occupancy = function() {
_i_("18c:880");
var e, i, n, r, o = t.env.b_group, a = 0, s = 0, _ = {
adults:2,
children:0,
guests:2
};
if ("[object Array]" !== Object.prototype.toString.apply(o)) return _r_(_);
if (i = o.length, n = o[0], r = i > 1 || 1 === i && (1 === n.guests || n.guests > 2 || n.children > 0), !r) return _r_(_);
for (e = 0; i > e; e += 1) n = o[e], a += n.guests, s += n.children;
return _r_({
adults:a,
children:s,
guests:a + s
});
}(), t.eventEmitter = i(e), e.sNSExperiments = r, e.sNSStartup = o, e.sNSExperimentsLoad = a, e.sNSStartupLoad = s, _r_();
}(window, window.booking, window.jQuery), B.define("component", function() {
"use strict";
_i_("18c:36");
function e() {}
return e.prototype.prepare = function(e) {
_i_("18c:655");
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
_r_();
}, e.prototype.init = function() {}, e.prototype.destroy = function() {}, e.prototype.render = function() {}, e.extend = function(t, i) {
_i_("18c:659");
var n = function() {}, r = i ? new i() :new e();
for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
return n.prototype = r, n.extend = function(t) {
return _i_("18c:1600"), _r_(e.extend.call(null, t, n));
}, _r_(n);
}, _r_(e);
}), B.define("component/legacy", function(e, t, i) {
"use strict";
_i_("18c:37");
var n = {};
function r(e, t) {
_i_("18c:306"), t.legacy = !0, B.define("component/" + e, function() {
return _i_("18c:982"), _r_(t);
}), _r_();
}
function o(e, t, i) {
_i_("18c:307");
var r = B.require("component/" + e);
if (!r.legacy) throw new Error("Illegal legacy B.components.require of non-legacy component " + e + ".");
var o = t ? t.data("component-instance-" + e) :n[e];
return (i || void 0 === o) && (o = "function" == typeof r ? new r(B, $) :library[e], i || (t ? t.data("component-instance-" + e, o) :n[e] = o, o.init && o.init(t))), _r_(o);
}
function a(e) {
_i_("18c:308");
for (var t, i = 1, n = arguments.length; n > i; i++) t = o(arguments[i], void 0, !0), t.extend ? t.extend(e) :$.extend(e, t);
_r_();
}
function s(e, t) {
_i_("18c:309");
var i = o(t, void 0, !0);
$.extend(e, i, {
parent:i
}), _r_();
}
t.register = function(e) {
_i_("18c:660"), e.components = e.components || {}, e.components.define = r, e.components.extend = a, e.components.inherit = s, e.components.require = o, _r_();
}, _r_();
}), B.define("component/loader", function(e, t, i) {
"use strict";
_i_("18c:38");
var n = e("jquery");
function r(t, i) {
_i_("18c:310");
var r = e("component/" + t), o = i.data("component-instance-" + t);
return void 0 === o && (r.legacy ? (o = new r(B, n), o.init && o.init(i)) :(o = new r(), o.prepare({
el:i[0],
$el:i
}), o.init && o.init()), i.data("component-instance-" + t, o)), _r_(o);
}
function o(e, t) {
_i_("18c:311"), setTimeout(r.bind(null, e, t), 4), _r_();
}
function a(e) {
if (_i_("18c:312"), 0 == this.length) throw new Error("No element found with selector, unable to look for component.");
if (1 != this.length) throw new Error("Multiple elements found with selector, refusing to look for component.");
return _r_(r(e, this));
}
function s() {
return _i_("18c:313"), t.loadComponents(this), _r_(this);
}
t.loadComponents = function(e) {
_i_("18c:661");
var t, i, r, a, s, _, c;
e = e || n("html");
var s = e.find("[data-component]");
for (e.is("[data-component]") && (s = e.length > 1 ? s.add(e) :s.add(e.filter("[data-component]"))), t = 0, r = s.length; r > t; t++) for (_ = s.eq(t), c = n.trim(_.attr("data-component")).split(/\s+/g), i = 0, a = c.length; a > i; i++) o(c[i], _);
_r_();
}, t.getComponent = function(e) {
_i_("18c:662");
var t = n(e), i = t.attr("data-component");
return _r_(i ? t.data("component-instance-" + i) :null);
}, t.registerJQuery = function() {
_i_("18c:663"), n.fn.component = a, n.fn.loadComponents = s, _r_();
}, _r_();
}), function(e, t) {
"use strict";
_i_("18c:39");
var i = e.require("component/loader"), n = e.require("component/legacy");
i.registerJQuery(), n.register(e), window.sNSStartup && e[sNSStartup] ? e[sNSStartup].bComponents = {
priority:100,
init:i.loadComponents
} :t(function() {
_i_("18c:983"), i.loadComponents(), _r_();
}), _r_();
}(booking, jQuery), function() {
_i_("18c:40");
var e = B.require("jquery");
booking[sNSStartup].popups = {
priority:9,
popups:[],
tempTar:null,
sizes:{
s:{
width:300,
height:400
},
m:{
width:400,
height:400
},
l:{
width:600,
height:580
},
xl:{
width:850,
height:600
}
},
init:function() {
_i_("18c:984");
var t = this;
e(document).on("click.popup_win", ".popup_s, .popup_m, .popup_l, .popup_xl", function() {
_i_("18c:1862");
for (var i = "l", n = e(this).attr("class").split(" "), r = 0; r < n.length; r++) n[r].indexOf("popup_") > -1 && (i = n[r].split("_")[1]);
return t.tempTar = e(this).attr("href") || e(this).data("url"), t.openPopup(i), _r_(!1);
}), _r_();
},
openPopup:function(e) {
_i_("18c:985");
var t = this.sizes[e];
this.popups.push(window.open(this.tempTar, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + t.width + ",height=" + t.height + ",left=200,top=200")), this.popups.length > 1 && (this.popups[0].close(), this.popups.shift(), this.tempTar = null), _r_();
}
}, _r_();
}(), B.define("component/track", function(e, t, i) {
_i_("18c:41");
var n = e("component"), r = e("et");
i.exports = n.extend({
init:function() {
_i_("18c:1390");
var e = this.$el.attr("data-hash"), t = this.$el.attr("data-track") || "click", i = this.$el.attr("data-custom-goal"), n = this.$el.attr("data-stage");
if (!e) return _r_();
i ? r.on(t, this.$el).customGoal(e, i) :n ? r.on(t, this.$el).stage(e, n) :r.on(t, this.$el).track(e), _r_();
}
}), _r_();
}), B.define("component/fragment", function(e, t, i) {
_i_("18c:42");
var n = e("component"), r = e("fragment"), o = e("events");
i.exports = n.extend({
fragmentName:void 0,
fragmentTemplate:void 0,
fragmentIsCS:void 0,
fragmentArgs:{},
init:function() {
_i_("18c:1391");
var e = void 0 !== this.$el.attr("data-fragment-lazy");
e ? (this._fragmentId = this.$el.attr("id"), this._fragmentOnActivateFragment = this._fragmentOnActivateFragment.bind(this), o.on("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment)) :this.fragmentLoadFragment(), _r_();
},
_fragmentOnActivateFragment:function(e) {
_i_("18c:1392"), e && e.id && e.id === this._fragmentId && (o.off("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment), this.fragmentLoadFragment()), _r_();
},
fragmentParamAttrs:function() {
_i_("18c:1393");
for (var e, t, i = {}, n = this.el.attributes, r = 0, o = n.length; o > r; r++) e = n[r], t = e.nodeName, t && t.length > 5 && 0 === t.indexOf("data-param-") && (i[t.slice(11)] = e.nodeValue);
return _r_(i);
},
fragmentLoadFragment:function() {
_i_("18c:1394");
var e = this.fragmentParamAttrs(), t = this.$el.attr("data-fragment-source"), i = this.$el.attr("data-fragment-name");
void 0 === i && (i = this.fragmentName);
var n, r, o = this.$el.attr("data-fragment-tmpl"), a = this.$el.attr("data-fragment-cs-tmpl");
void 0 !== o && void 0 !== a && B.env.b_is_dev_server && console.error("Fragment component cannot have both `fragment-tmpl` and `fragment-cs-tmpl` defined."), void 0 !== o ? (r = o, n = !1) :void 0 !== a ? (r = a, n = !0) :(r = this.fragmentTemplate, n = this.fragmentIsCS);
var s = Object.assign({}, this.fragmentArgs, e), _ = {
soruce:t,
tmpl:r,
isCS:n,
args:s
};
if (!1 !== this.fragmentBeforeRequest(_)) {
s = _.args, !n && r && (s.tmpl = r);
var c = this;
this.fragmentRequest(i, s).then(function(e) {
_i_("18c:2181");
var i = {
source:t,
data:e,
ctx:{},
args:s
};
if (!1 !== c.fragmentBeforeRender(i) && r) {
var o;
o = n ? B.jstmpl(r).render(Object.assign(i.ctx, i.data ? {
data:i.data
} :{})) :i.data || "", i.$targetEl ? i.$targetEl.html(o) :c.$el.html(o), c.fragmentAfterRender(i);
}
_r_();
}, function(e) {
_i_("18c:2182");
var i = {
source:t,
error:e
};
c.fragmentRequestError(i), _r_();
});
}
_r_();
},
fragmentRequest:function(e, t) {
return _i_("18c:1395"), _r_(r.call(e, t));
},
fragmentBeforeRequest:function() {},
fragmentRequestError:function() {},
fragmentBeforeRender:function() {},
fragmentAfterRender:function() {}
}), _r_();
}), booking.components.define("sh", function(e, t) {
"use strict";
_i_("18c:43");
var i = "SH", n = t(window);
function r(t) {
_i_("18c:314"), t.map(function(t) {
_i_("18c:986"), e.eventEmitter.triggerHandler(i + ":" + t), _r_();
}), _r_();
}
function o(e) {
return _i_("18c:315"), _r_(n.scrollTop() + n.height() > e);
}
this.init = function(e) {
_i_("18c:664");
var i = e.offset().top, a = function() {
_i_("18c:1601"), o(i) && (r([ "seen" ]), n.unbind("scroll", a)), _r_();
};
n.bind("scroll", a), e.delegate(".lp-search-history-list-item", "click", function(e) {
_i_("18c:1602");
var i = t(this), n = i.find(".lp-search-history-list-item-link");
if (!n.length) return _r_();
var o = i.get(0).className.match(/sh-timestamp[^ \n]*/g) || [];
o.push("clicked"), r(o), _r_();
}), e.find(".lp-sh-hide-search").bind("click", function(e) {
_i_("18c:1603"), r([ "removed" ]), _r_();
}), a(), _r_();
}, _r_();
}), B.define("component/company/ga", function(e, t, i) {
_i_("18c:44");
var n = e("component"), r = e("utils");
i.exports = n.extend({
init:function() {
_i_("18c:1400"), this.options = r.nodeData(this.$el), this.options.trackEvents && this.$el.delegate("[data-track-event]", this.options.trackEvents, this.handleDOMEvent.bind(this)), this.options.trackOninit && this.track(this.split(this.options.trackOninit)), this.options.trackOnviewEvents && this.addOnViewElements(this.$el), _r_();
},
addOnViewElements:function(e) {
_i_("18c:1401");
var t = B.google[this.options.tracker];
e.find("[data-track-event-onview]").each(function(e, i) {
_i_("18c:2183");
var n = $(i);
B.tools.dom.watchIfBlockVisibleInViewport(n, function() {
_i_("18c:2341");
var e = this.split(n.data("track-event-onview"));
this.track.call(this, [ t ].concat(e)), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
},
handleDOMEvent:function(e) {
_i_("18c:1402");
var t = B.google[this.options.tracker];
if (!t) throw new Error("Tracker is not defined: " + this.options.tracker);
var i = ($(e.currentTarget).data("track-event") || "").split(/\s*\/\s*/);
e.type.toLowerCase() === i[0].toLowerCase() && this.track.call(this, [ t ].concat(i.slice(1))), _r_();
},
split:function(e) {
return _i_("18c:1403"), _r_((e || "").split(/\s*\/\s*/));
},
track:function(e) {
_i_("18c:1404"), B.google.trackEvent.apply(B.google, e), _r_();
}
}), _r_();
}), B.define("user-left-client", function(e, t, i) {
"use strict";
_i_("18c:45");
var n = e("user-left-tab"), r = e("user-left-store"), o = e("utils/simple-unique-id"), a = "lastSeen";
i.exports = {
enabled:r.enabled,
onHideTab:function(e) {
_i_("18c:987"), r.set(a, new Date().getTime()), _r_();
},
onShowTab:function(e) {
_i_("18c:988"), r.set(a, 0), _r_();
},
addEventListeners:function() {
_i_("18c:989"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), n.addListener("show", this._onShowTab), n.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("18c:990"), this._onShowTab && n.removeListener("show", this._onShowTab), this._onHideTab && n.removeListener("hide", this._onHideTab), _r_();
},
register:function(e) {
_i_("18c:991"), this.tabId = e + "_" + o(), this.addEventListeners(), _r_();
}
}, _r_();
}), B.define("user-left-master", function(e, t, i) {
"use strict";
_i_("18c:46");
var n = e("event-emitter"), r = e("user-left-tab"), o = e("user-left-store"), a = e("utils/simple-unique-id"), s = "lastSeen", _ = booking.env.bp_has_left_threshold ? booking.env.bp_has_left_threshold :7, c = 1e3, l = "(1) ";
i.exports = n.extend({
enabled:o.enabled,
didUserLeft:function() {
if (_i_("18c:1405"), this.halt) return _r_();
this.checkSessionMarker() || (this.stopCounting(), this.removeEventListeners());
var e = parseInt(o.get(s), 10);
if (!e) return _r_();
var t = new Date().getTime(), i = (t - e) / 1e3;
i >= _ && (this.stopCounting(), this.showNotification()), _r_();
},
removeNotification:function() {
_i_("18c:1406"), this.originalFavicon && this.changeFavicon(this.originalFavicon), document.title = this.originalTitle, _r_();
},
changeFavicon:function(e) {
_i_("18c:1407"), this.$favicon && this.$favicon.attr("href", e), _r_();
},
setNotifyFavicon:function(e) {
_i_("18c:1408"), this.$favicon = $('link[rel="shortcut icon"]').first(), this.$favicon.length && (this.originalFavicon = this.$favicon.attr("href"), this.notifyFavicon = e), _r_();
},
setNotificationStatus:function(e) {
_i_("18c:1409"), this.notificationStatus = e === !1 ? !1 :!0, _r_();
},
showNotification:function() {
_i_("18c:1410"), this.notified = !0, this.notificationStatus !== !1 && (this.notifyFavicon && this.changeFavicon(this.notifyFavicon), document.title = l + document.title), _r_();
},
startCounting:function() {
if (_i_("18c:1411"), this.notified) return _r_();
this.halt = !1, this.counterId = setInterval(this.didUserLeft.bind(this), c), _r_();
},
stopCounting:function() {
_i_("18c:1412"), this.halt = !0, clearInterval(this.counterId), _r_();
},
onShowTab:function(e) {
_i_("18c:1413"), this.stopCounting(), o.set(s, 0), this.notified && !this.cameBack && (this.cameBack = !0, this.removeEventListeners(), this.removeNotification(), this.trigger("back")), _r_();
},
onHideTab:function(e) {
_i_("18c:1414"), o.set(s, new Date().getTime()), this.startCounting(), _r_();
},
addEventListeners:function() {
_i_("18c:1415"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), r.addListener("show", this._onShowTab), r.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("18c:1416"), this._onShowTab && r.removeListener("show", this._onShowTab), this._onHideTab && r.removeListener("hide", this._onHideTab), _r_();
},
setSessionMarker:function() {
if (_i_("18c:1417"), !booking.browserStorageHandler) return _r_();
booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey, this.tabId, !1), _r_();
},
checkSessionMarker:function() {
if (_i_("18c:1418"), this.tabId != booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey, !1)) return _r_(!1);
return _r_(!0);
},
register:function(e, t) {
_i_("18c:1419"), this.originalTitle = document.title, this.tabId = e + "_" + a(), this.sessionMarkerKey = t, this.setSessionMarker(), o.set(s, 0), this.addEventListeners(), _r_();
}
}), _r_();
}), B.define("user-left-store", function(e, t, i) {
"use strict";
_i_("18c:47");
var n = e("jquery");
i.exports = {
enabled:1,
encode:function(e) {
return _i_("18c:992"), _r_(e);
},
decode:function(e) {
return _i_("18c:993"), _r_(e);
},
get:function(e) {
return _i_("18c:994"), _r_(this.decode(n.cookie(e)));
},
set:function(e, t) {
return _i_("18c:995"), _r_(n.cookie(e, this.encode(t), {
expires:null,
path:"/",
domain:"booking.com"
}));
}
}, _r_();
}), B.define("user-left-tab", function(e, t, i) {
"use strict";
_i_("18c:48");
var n = e("window-visibilitychange"), r = e("event-emitter"), o = r.extend({
init:function() {
_i_("18c:1420"), this.didInit || ($(window).focus(this.show.bind(this)), $(window).blur(this.hide.bind(this)), $(window).bind("load", this.onLoad.bind(this)), n.on("visibilitychange", this.visibilityChange.bind(this)), this.didInit = !0), _r_();
},
visibilityChange:function(e) {
_i_("18c:1421"), n.hidden ? this.emit("hide", e) :this.emit("show", e), _r_();
},
onLoad:function(e) {
_i_("18c:1422"), n.hidden || this.show(e), _r_();
},
show:function(e) {
_i_("18c:1423"), this.emit("show", e), _r_();
},
hide:function(e) {
_i_("18c:1424"), this.emit("hide", e), _r_();
}
});
o.addListener = o.on = function() {
_i_("18c:881"), o.init(), r.prototype.addListener.apply(o, arguments), _r_();
}, i.exports = o, _r_();
}), B.define("component/popup-open", function(e, t, i) {
_i_("18c:49");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("18c:1425"), this.$el.click(this.click.bind(this)), _r_();
},
click:function(e) {
_i_("18c:1426"), e.preventDefault();
var t = this.$el.attr("href"), i = Math.floor(this.$el.attr("data-width")) || 400, n = Math.floor(this.$el.attr("data-height")) || 400, r = screen.availTop || 0, o = screen.availLeft || 0, a = screen.width / 2 - i / 2 + o, s = screen.height / 2 - n / 2 + r, _ = window, c = "open", l = _[c];
l.call(_, t, "_blank", "width=" + i + ",height=" + n + ",top=" + s + ",left=" + a + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes"), _r_();
}
}), _r_();
}), function(e, t) {
_i_("18c:50"), t.define("core/fly-content-tooltip/fly-content-tooltip", function(e, i, n) {
"use strict";
_i_("18c:665"), n.exports = function() {
_i_("18c:1761");
var i = e("jquery"), n = "data-content-tooltip", r = "data-content-tooltip-element", o = ".js-fly-content-tooltip", a = "fly-content-tooltip--wrap", s = i.fly.tooltip.extend({
dataAttr:n,
defaults:{
baseClass:"fly-dropdown",
extraClass:"fly-content-tooltip",
hideClass:"fly-dropdown_hidden",
showDelay:100,
hideDelay:100,
arrowSize:5,
content:_
},
init:function() {
_i_("18c:2299");
var e, n = this.handle();
n.attr("data-position-tooltip") && (this.options.position = this.handle().attr("data-position-tooltip")), n.attr("data-position-tooltip-align") && (this.options.positionAlign = this.handle().attr("data-position-tooltip-align")), n.attr("data-extra-class-tooltip") && (this.options.extraClass = this.handle().attr("data-extra-class-tooltip"));
var r = n.attr("data-track-on-tooltip-shown-hash"), o = n.attr("data-track-on-tooltip-shown-stage");
"TAeKPFWFDSFSefVbHC" === r && this.bind("show", function() {
_i_("18c:2364"), t.et.stage("TAeKPFWFDSFSefVbHC", o), t.et.stage("TAeKPFWFDSFSefVbHC", 4), _r_();
}), i(".breakfast_hp_rating_tracking_proxy").length && i("#js--hp-gallery-scorecard").mouseover(function() {
_i_("18c:2365"), t.et.stage("adUAVGZTQHFcFfFAeFYbEfcWfZWe", 2), _r_();
}), e = n.attr("data-require-tooltip-class"), e && (this.options.requireTooltipClass = e), _r_();
},
timeout:null
});
function _(e) {
_i_("18c:2016");
var t = this.handle().attr(r), n = t ? i(t).html() :this.handle().attr(this.dataAttr);
n && e(c(n)), _r_();
}
function c(e) {
return _i_("18c:2017"), _r_('<div class="' + a + '">' + e + "</div>");
}
return _r_({
flyContentTooltip:s,
init:function(e) {
_i_("18c:2209"), e && (s = s.extend(e)), e = e || {}, s.delegate(e.delegateTo ? e.delegateTo :o), _r_();
}
});
}(), _r_();
}), t.require([ "require" ], function(e) {
_i_("18c:666"), e("core/fly-content-tooltip/fly-content-tooltip").init(), e("core/fly-content-tooltip/fly-content-tooltip").init({
defaults:{
extraClass:"fly-content-tooltip ge-fly-content-tooltip"
},
dataAttr:"data-ge-fly-tooltip",
delegateTo:".js-fly-content-tooltip[data-ge-fly-tooltip]"
}), _r_();
}), _r_();
}(jQuery, booking), B.define("component/dropdown-onload-shower", function(e, t, i) {
_i_("18c:51");
var n = e("component"), r = e("jquery");
i.exports = n.extend({
init:function() {
if (_i_("18c:1427"), this.isDisabled()) return _r_();
var e = r.fly.dropdown.create(this.$el, {
content:this.getContent(),
position:this.getPosition(),
extraClass:"fly-dropdown--onload-shower " + this.getExtraClass()
});
e.bind(e.events.rootready, function() {
_i_("18c:2018"), e.root().delegate("[data-command]", "click", function() {
_i_("18c:2275"), setTimeout(e.hide.bind(e), 0), _r_();
}), e.bind(e.events.hide, e._destroy.bind(e)), _r_();
}), setTimeout(function() {
_i_("18c:2019"), e.show(), _r_();
}, +this.$el.attr("data-component-delay") || 0), _r_();
},
isDisabled:function() {
_i_("18c:1428");
var e = this.$el.attr("data-component-show-once-key");
if (e) {
if (r.cookie(e)) return _r_(!0);
r.cookie(e, 1);
}
_r_();
},
getExtraClass:function() {
return _i_("18c:1429"), _r_(this.$el.attr("data-component-extra-class") || "");
},
getPosition:function() {
return _i_("18c:1430"), _r_(this.$el.attr("data-component-position"));
},
getContent:function() {
_i_("18c:1431");
var e = this.$el.attr("data-component-content");
return _r_(/^[a-z0-9_]+$/.test(e) ? booking.jstmpl(e).render(booking.env["component/dropdown-onload-shower/" + e]) :e);
}
}), _r_();
}), B.define("component/tt-fancy", function(e, t, i) {
"use strict";
_i_("18c:52");
var n = e("component"), r = {
delay:300,
width:300,
id:"tt-fancy",
content:"",
triggerOn:"hover"
};
i.exports = n.extend({
init:function() {
_i_("18c:1432"), this.domHelper = {}, this._getOptions(), this._createDomNodes(), this._attachEvents(), this.isMouseIn = !1, _r_();
},
_getOptions:function() {
_i_("18c:1433"), $.extend(this, r, {
width:this.$el.data("width"),
id:this.$el.data("id"),
content:this.$el.data("content"),
triggerOn:this.$el.data("trigger")
}), _r_();
},
_createDomNodes:function() {
_i_("18c:1434");
var e = $("#" + this.id);
if (e.length > 0) this.domHelper = {
$parent:e,
$content:e.find(".tt-fancy-content"),
$pointer:e.find(".tt-fancy-pointer")
}; else {
var t = $('<div class="tt-fancy-pointer"></div>'), i = $('<div class="tt-fancy-content"></div>');
this.domHelper = {
$parent:$('<div id="' + this.id + '" style="width: ' + this.width + 'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(t).append(i).appendTo(document.body),
$pointer:t,
$content:i
};
}
_r_();
},
_attachEvents:function() {
switch (_i_("18c:1435"), this.triggerOn) {
case "textSelect":
var e = this;
e.$el.bind("mouseup.fancyTT", function() {
_i_("18c:2184");
var t = $.trim(e._getSelectedText()), i = $.trim(e.$el.text());
t && i.search && i.search(t) > -1 && (e._showTT.call(e), setTimeout(function() {
_i_("18c:2342"), $("body").on("mouseup.fancyTTclose", function() {
_i_("18c:2367"), e._hideTT.call(e), $("body").off("mouseup.fancyTTclose"), _r_();
}), _r_();
}, 200)), _r_();
});
break;

case "hover":
default:
this.$el.bind("mouseenter.fancyTT", $.proxy(this._showTT, this)).bind("mouseleave.fancyTT", $.proxy(this._hideTT, this));
}
_r_();
},
_showTT:function() {
_i_("18c:1436");
var e = this;
e.isMouseIn = !0, setTimeout(function() {
_i_("18c:2020"), e.isMouseIn && (e.domHelper.$content.html(e.content), e._position_tt(), e.domHelper.$parent.css({
display:"block"
}), setTimeout(function() {
_i_("18c:2320"), e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:show"), _r_();
}, 10)), _r_();
}, this.delay), _r_();
},
_hideTT:function() {
_i_("18c:1437"), this.isMouseIn = !1, this.domHelper.$parent.css({
display:"none"
}).addClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:hide"), _r_();
},
_position_tt:function() {
_i_("18c:1438");
var e = $(window).width(), t = this.$el, i = this.width && "number" == typeof this.width, n = (i ? this.width :this.domHelper.$parent.width()) / 2, r = t.offset().left + t.outerWidth() / 2, o = t.offset().top + t.outerHeight() + 7, a = r - n, s = 15, _ = "auto", c = !1;
r + n > e ? (a = "auto", _ = s, c = !0, this.domHelper.$pointer.css({
right:e - r - s - 6 + "px",
left:"auto"
})) :s > r - n && (a = s, _ = "auto", c = !0, this.domHelper.$pointer.css({
left:r - s + "px",
right:"auto"
})), this.domHelper.$parent.css({
left:a,
right:_,
top:o
}), c || this.domHelper.$pointer.attr("style", ""), _r_();
},
_getSelectedText:function() {
_i_("18c:1439");
var e = "";
return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() :"undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), _r_($.trim(e));
}
}), _r_();
}), B.define("hijri-calendar", function() {
_i_("18c:53");
var e = 10631 / 30, t = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function r(r) {
_i_("18c:316");
var o = r.day, a = r.month, s = r.year, _ = a + 1, c = s;
3 > _ && (c -= 1, _ += 12);
var l = Math.floor(c / 100), u = 2 - l + Math.floor(l / 4);
1583 > c && (u = 0), 1582 === c && (_ > 10 && (u = -10), 10 == _ && (u = 0, o > 4 && (u = -10)));
var d = Math.floor(365.25 * (c + 4716)) + Math.floor(30.6001 * (_ + 1)) + o + u - 1524;
u = 0, d > 2299160 && (l = Math.floor((d - 1867216.25) / 36524.25), u = 1 + l - Math.floor(l / 4));
var h = d + u + 1524, p = Math.floor((h - 122.1) / 365.25), f = Math.floor(365.25 * p), g = Math.floor((h - f) / 30.6001);
o = h - f - Math.floor(30.6001 * g), a = g - 1, g > 13 && (p += 1, a = g - 13), s = p - 4716;
var m = d - t, v = Math.floor(m / 10631);
m -= 10631 * v;
var b = Math.floor((m - i) / e), w = 30 * v + b;
m -= Math.floor(b * e + i);
var y = Math.floor((m + 28.5001) / 29.5);
13 == y && (y = 12);
var k = m - Math.floor(29.5001 * y - 29), S = {
gregorian_day:o,
gregorian_month:a - 1,
gregorian_year:s,
julian_day:d - 1,
hijri_day:k,
hijri_month:y - 1,
hijri_year:w,
hijri_month_tag:n[y - 1]
};
return _r_(S);
}
var o = "1" === $.cookie("hijri_enabled") ? !0 :!1, a = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("18c:882"), a && !o && (o = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("18c:883"), a && o && (o = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("18c:884"), _r_(o);
},
available:function() {
return _i_("18c:885"), _r_(a);
},
convert:r
});
}), B.define("utils", function(e, t, i) {
_i_("18c:54"), t.assertExists = function(e, t) {
if (_i_("18c:667"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("18c:668");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("18c:2086"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("18c:669"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, r = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (r[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(r));
}, _r_();
}), B.define("utils/simple-unique-id", function(e, t, i) {
_i_("18c:55");
function n(e, t) {
return _i_("18c:317"), _r_(Math.floor(Math.random() * (t - e)) + e);
}
i.exports = function() {
return _i_("18c:670"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(e, t, i) {
"use strict";
_i_("18c:56");
var n = e("event-emitter"), r = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("18c:1440"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(e) {
_i_("18c:1441"), e = e || window.event;
var t = this.visibilityState;
e.type in r ? (this.hidden = "hidden" == r[e.type], this.visibilityState = r[e.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), t != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("18c:886"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(e, t) {
_i_("18c:57");
var i = e(window), n = jQuery({
progress:0
}), r = 10, o = 700, a = 5;
function s(e, n, o, a) {
_i_("18c:318");
var s, _ = "number" == typeof a ? a :r;
if (!e || !e.length) return _r_(new t(function(e) {
_i_("18c:1604"), e(), _r_();
}));
if (n) s = u(e).top - _; else {
var c = l(e, _);
null === c && (c = i.scrollTop()), s = c;
}
return _r_(this.scrollToOffset(s, o));
}
function _(e, r) {
_i_("18c:319"), n.stop(!0);
var o = i.scrollTop(), s = e;
return _r_(new t(function(e) {
_i_("18c:996"), Math.abs(o - s) < a ? e() :c(o, s, r, e), _r_();
}));
}
function c(e, t, r, a) {
_i_("18c:320"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("18c:1605"), i.scrollTop(e + n * (t - e)), _r_();
},
duration:"number" == typeof r ? r :o,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:a
}), _r_();
}
function l(e, t) {
if (_i_("18c:321"), 0 === e.height()) return _r_(null);
var i = u(e), n = d(), r = i.top < n.top, o = i.bottom > n.bottom, a = e.outerHeight() + t > h();
return _r_(r || o ? a || r ? i.top - t :i.bottom + t - h() :null);
}
function u(e) {
_i_("18c:322");
var t = e.offset().top;
return _r_({
top:t,
bottom:t + e.outerHeight()
});
}
function d() {
_i_("18c:323");
var e = i.scrollTop();
return _r_({
top:e,
bottom:e + h()
});
}
function h() {
return _i_("18c:324"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:s,
scrollToOffset:_
});
}), B.define("countdown", [ "jquery", "event-emitter", "et" ], function(e, t, i) {
_i_("18c:58");
var n = function(t, n) {
if (_i_("18c:671"), !t) throw i && i.track && i.track("YPNBeEfcWfRVNIfNFO"), new Error("You did not pass proper date for countdown");
return this.dimensionsToCheck = [ "seconds", "minutes", "hours", "days" ], this.defaults = {
updateInterval:1e3,
callback:!1,
expiredCallback:!1,
callbacks:!1,
leadingZeroes:{
seconds:!0,
minutes:!0,
hours:!0,
days:!1
}
}, "number" == typeof t ? this.endTime = new Date(t) :this.endTime = Date.parse(t), this.options = e.extend(!0, {}, this.defaults, n), this._processOptions(), this._init(), _r_(this);
};
return e.extend(n.prototype, {
_processOptions:function() {
_i_("18c:997");
var e = this.options.leadingZeroes;
if ("boolean" == typeof e) for (var t = 0; t < this.dimensionsToCheck.length; t++) this.options.leadingZeroes[this.dimensionsToCheck[t]] = e;
_r_();
},
_init:function() {
_i_("18c:998"), t.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("18c:999"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("18c:1000"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("18c:1001");
var e = this._getRemainingTime();
e.total >= 0 ? (this._fireEvents(e), this.previousTime = e) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("18c:1002");
var e = this.endTime - Date.parse(new Date()), t = Math.floor(e / 1e3 % 60), i = Math.floor(e / 1e3 / 60 % 60), n = Math.floor(e / 36e5 % 24), r = Math.floor(e / 864e5);
return _r_({
total:e,
days:r,
hours:n,
minutes:i,
seconds:t
});
},
_fireEvents:function(e) {
if (_i_("18c:1003"), !this.previousTime) return _r_();
e ? (this._fireProgressEvents(e), this._fireEveryTickEvent(e)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(e) {
_i_("18c:1004");
for (var t = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(e, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:t._formatDate(e)
});
_r_();
},
_fireEveryTickEvent:function(e) {
_i_("18c:1005"), this.trigger("ticked", {
remainingTime:this._formatDate(e)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("18c:1006"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(e, t) {
return _i_("18c:1007"), _r_(!!(e[t] - this.previousTime[t]));
},
_setCallbacks:function() {
_i_("18c:1008");
var e = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(t) {
_i_("18c:2087"), e.options.callback(e._formatDate(t.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(t) {
_i_("18c:2088"), e.options.expiredCallback.call(e._formatDate(t.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(t) {
_i_("18c:2089"), e.options.callbacks[t.type] && "function" == typeof e.options.callbacks[t.type] && e.options.callbacks[t.type].call(e._formatDate(t.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(e) {
_i_("18c:1009");
var t;
for (var i in e) this.options.leadingZeroes[i] && e.hasOwnProperty(i) && (t = "" + e[i], t.length <= 1 && (e[i] = "0" + t));
return _r_(e);
},
getStartRemainingTime:function() {
return _i_("18c:1010"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("18c:1011"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("18c:1012"), this._start(), _r_();
}
}), _r_(n);
}), B.Search = B.Search || {}, B.Search.Events = {
DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",
DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",
TRAVEL_PURPOSE_CHANGED:"SEARCH:travel_purpose_changed",
DATE_CHANGED:"SEARCH:date_changed",
DATE_MONTH_CHANGED:"SEARCH:month_changed",
DATE_MODE_CHANGED:"SEARCH:mode_changed",
DATE_INVALID:"SEARCH:dates_invalid",
DATE_VALID:"SEARCH:dates_valid",
FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",
FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",
FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",
FLEXIBLE_VALID:"SEARCH:monthyear_valid",
MULTI_GROUP_CHANGED:"SEARCH:multi_group_changed",
GROUP_CHANGED:"SEARCH:group_changed",
GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",
GROUP_VALID:"SEARCH:group_valid",
GROUP_INVALID:"SEARCH:group_invalid",
ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled",
POPULAR_BUSINESS_FILTERS_OPENED:"SEARCH:pouplar_business_filters_opened",
POPULAR_BUSINESS_FILTERS_DISABLED:"SEARCH:pouplar_business_filters_closed"
}, B.Search.TrackingEvents = {
DESTINATION_CHANGED:"destination_changed",
CHECKOUT_DATEPICKER:"checkout_changed_datepicker",
CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",
CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",
CHECKIN_DATEPICKER:"checkin_changed_datepicker",
CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",
CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",
NO_DATES_SELECTED:"no_dates_selected",
FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",
FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",
GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",
GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",
GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",
GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",
GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",
GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",
GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",
ADVANCED_SEARCH_CHANGED:"advanced_search_changed",
ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",
FORM_SUBMITTED:"form_submitted"
}, B.Search.TravelTypeModes = {
BUSINESS:"business",
LEISURE:"leisure"
}, B.Search.DateModes = {
REGULAR:"regular",
NODATES:"no-dates",
FLEXIBLE:"flexible"
}, B.Search.GroupModes = {
REGULAR:"basic",
CUSTOM:"custom"
}, B.Search.rawGroupConfiguration, B.Search.groupConfiguration, B.Search.childrenConfiguration, B.Search.createGroup = function(e) {
if (_i_("18c:59"), !e || "object" != typeof e) return _r_(new B.Search.InvalidGroup());
return _r_(new B.Search.Group(e));
}, B.Search.AbstractGroup = function() {}, B.Search.AbstractGroup.prototype.parseChildrenConfig = function(e) {
_i_("18c:61");
var t, i = [];
return !e.childrenAges && e.childrenages && (e.childrenAges = e.childrenages), e.childrenAges instanceof Array ? i = e.childrenAges :"number" == typeof e.childrenAges ? i = [ e.childrenAges ] :"string" == typeof e.childrenAges ? i = e.childrenAges.split(",") :e.children instanceof Array ? i = e.children :"undefined" != typeof e.children ? (t = parseInt(e.children, 10), i = isNaN(t) ? [] :new Array(t)) :i = [], _r_({
childrenAges:i,
children:i.length
});
}, B.Search.AbstractGroup.prototype.parseConfig = function(e, t) {
_i_("18c:62");
var i = {};
return e.adults && (i.adults = e.adults), e.rooms && (i.rooms = e.rooms), 0 === i.rooms && (i.rooms = 1), $.extend(i, this.parseChildrenConfig(e)), e.name && (i.name = e.name), e.type && (i.type = e.type), t && t.useDefaults && (i = $.extend({
adults:2,
rooms:1,
children:0,
childrenAges:[]
}, i)), _r_(i);
}, B.Search.AbstractGroup.prototype.applyConfig = function(e) {
_i_("18c:63");
var t;
e.name !== t && (this.name = e.name), e.type !== t && (this.type = e.type), e.rooms !== t && (this.rooms = e.rooms), e.adults !== t && (this.adults = e.adults), e.children !== t && (this.children = e.children), e.childrenAges !== t && (this.childrenAges = e.childrenAges), _r_();
}, B.Search.InvalidGroup = function() {}, B.Search.InvalidGroup.prototype = new B.Search.AbstractGroup(), B.Search.InvalidGroup.prototype.valueOf = function() {
return _i_("18c:65"), _r_(null);
}, B.Search.Group = function(e) {
_i_("18c:66");
var t = this.parseConfig(e, {
useDefaults:!0
});
this.applyConfig(t), _r_();
}, B.Search.Group.prototype = new B.Search.AbstractGroup(), B.Search.Group.prototype.update = function(e) {
_i_("18c:67");
var t = this.parseConfig(e);
return this.applyConfig(t), _r_(this);
}, B.Search.Group.prototype.toString = function() {
return _i_("18c:68"), _r_(this.valueOf());
}, B.Search.Group.prototype.valueOf = function() {
_i_("18c:69");
var e = [ "Group:" ];
return this.name && e.push("Name: " + this.name), this.type && e.push("Type: " + this.type), e.push(this.rooms), e.push(this.adults), e.push(this.children), e.push(this.childrenAges.join("|")), _r_(e.join(","));
}, B.Search.ONE_DAY = 864e5, B.Search.createDate = function(e) {
_i_("18c:70");
var t, i, n, r, o, a, s, _, c;
switch (typeof e) {
case "string":
c = e.split("-"), c.length > 1 && (t = parseInt(c[0], 10), i = parseInt(c[1], 10) - 1), 3 === c.length && (n = parseInt(c[2], 10));
break;

case "object":
t = parseInt(e.year, 10), i = parseInt(e.month, 10), n = parseInt("day" in e ? e.day :e.date, 10);
break;

case "number":
s = e * B.Search.ONE_DAY, _ = new Date(s), t = _.getFullYear(), i = _.getMonth(), n = _.getDate();
break;

case "undefined":
r = "invalid";
}
return a = "number" == typeof t && !isNaN(t) && "number" == typeof i && !isNaN(i), o = a && "number" == typeof n && !isNaN(n) && 0 !== n, _r_(o ? new B.Search.Date({
year:t,
month:i,
date:n
}) :a ? new B.Search.MonthDate({
year:t,
month:i
}) :new B.Search.InvalidDate());
}, B.Search.AbstractDate = function() {}, B.Search.AbstractDate.prototype.initValue_ = function() {
_i_("18c:72"), this.dateObject_ = new Date(Date.UTC(this.year, this.month, this.date || 1)), this.value_ = Math.floor(this.dateObject_.valueOf() / B.Search.ONE_DAY), _r_();
}, B.Search.AbstractDate.toString = function() {
throw _i_("18c:73"), "Abstract method should be override in child classes";
}, B.Search.AbstractDate.prototype.valueOf = function() {
return _i_("18c:74"), this.value_ || this.initValue_(), _r_(this.value_);
}, B.Search.Date = function(e) {
_i_("18c:75"), this.year = e.year, this.month = e.month, this.date = e.date, this.type = "valid", _r_();
}, B.Search.Date.prototype = new B.Search.AbstractDate(), B.Search.Date.prototype.toString = function() {
_i_("18c:76");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), this.date <= 9 ? e.push("0" + this.date) :e.push(this.date), _r_(e.join("-"));
}, B.Search.Date.prototype.addDays = function(e) {
return _i_("18c:77"), _r_(B.Search.createDate(this + e));
}, B.Search.MonthDate = function(e) {
_i_("18c:78"), this.year = e.year, this.month = e.month, this.type = "month", _r_();
}, B.Search.MonthDate.prototype = new B.Search.AbstractDate(), B.Search.MonthDate.prototype.toString = function() {
_i_("18c:79");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), _r_(e.join("-"));
}, B.Search.InvalidDate = function() {
_i_("18c:80"), this.type = "invalid", _r_();
}, B.Search.InvalidDate.prototype = new B.Search.AbstractDate(), B.Search.InvalidDate.prototype.toString = function() {
return _i_("18c:81"), _r_("");
}, B.Search.AbstractWidget = function() {}, B.Search.AbstractWidget.prototype.initialize = function(e, t) {
_i_("18c:83"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractWidget.prototype.setOptions = function(e) {
_i_("18c:84"), this.options || (this.options = {}), this.options = $.extend(this.options, e), _r_();
}, B.Search.AbstractWidget.prototype.initEvents = function() {
throw _i_("18c:85"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("18c:86"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.getConfig = function() {
throw _i_("18c:87"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.trigger = function(e) {
_i_("18c:88"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractWidget.prototype.onInit = function() {
_i_("18c:89");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("18c:1013"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractWidget.prototype.onChange = function() {
_i_("18c:90"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractWidget.prototype.tryCallback = function(e, t, i) {
_i_("18c:91");
var n;
if (!e) return _r_();
t = t || [], "function" == typeof this.options[e] ? n = this.options[e] :"function" == typeof i && (n = i), n && n.apply(this, t), _r_();
}, B.Search.AbstractWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractWidget.prototype.hide = function() {
_i_("18c:92"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractWidget.prototype.show = function() {
_i_("18c:93"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.createWidgetPlugin = function(e, t) {
if (_i_("18c:94"), $.fn[e]) throw "Jquery plugin " + e + " is already defined";
return $.fn[e] = function(e, t) {
_i_("18c:887");
var i = [];
return _r_(function(n) {
if (_i_("18c:1606"), "notify" === n) for (var r = arguments[1], o = arguments[2], a = 0; a < i.length; a++) i[a].trigger(r, o);
return _r_(this.each(function() {
_i_("18c:2090");
var r = e, o = $(this), a = o.data(), s = a[r];
s ? s.setOptions(n) :(s = new t(o, n), o.data(r, s), i.push(s)), _r_();
}));
});
}(e, t), _r_($.fn[e]);
}, B.Search.validators = {
storage_:[]
}, B.Search.Validator = function() {}, B.Search.Validator.prototype.name = "general", B.Search.Validator.prototype.type = "general", B.Search.Validator.prototype.success = void 0, B.Search.Validator.prototype.fail = void 0, B.Search.Validator.prototype.test = function() {}, B.Search.Validator.prototype.validate = function() {
_i_("18c:97");
var e = this.test(), t = e ? "fail" :"success", i = {
name:this.name,
status:t
}, n = t + "Callback";
return "function" == typeof this[t] ? i.message = this[t]() :"undefined" != typeof this[t] && (i.message = this[t]), "function" == typeof this[n] && (i.callback = this[n]), this.validationParameters && (i.validationParameters = this.validationParameters), _r_(new B.Search.ValidationResult(i));
}, B.Search.ValidationResult = function(e) {
_i_("18c:98"), this.setOptions_(e), _r_();
}, B.Search.ValidationResult.prototype.status = void 0, B.Search.ValidationResult.prototype.message = void 0, B.Search.ValidationResult.prototype.callback = function() {}, B.Search.ValidationResult.prototype.valueOf = function() {
return _i_("18c:100"), _r_("fail" !== this.status);
}, B.Search.ValidationResult.prototype.toString = function() {
return _i_("18c:101"), _r_(this.message || "");
}, B.Search.ValidationResult.prototype.setOptions_ = function(e) {
if (_i_("18c:102"), !e) return _r_(this);
return e.name && (this.name = e.name), e.status && (this.status = e.status), e.message && (this.message = e.message), "function" == typeof e.callback && (this.callback = e.callback), e.validationParameters && (this.validationParameters = e.validationParameters), _r_(this);
}, B.Search.validators.create = function(e) {
_i_("18c:103");
var t = new B.Search.Validator();
if (!e) return _r_(t);
return e.name && (t.name = e.name), e.type && (t.type = e.type), e.success && (t.success = e.success), e.fail && (t.fail = e.fail), e.failCallback && (t.failCallback = e.failCallback), e.successCallback && (t.successCallback = e.successCallback), e.test && (t.test = e.test), B.Search.validators.storage_.push(t), _r_(t);
}, B.Search.validators.all = function() {
return _i_("18c:104"), _r_(this.storage_);
}, B.Search.validators.allOfType = function(e) {
_i_("18c:105");
for (var t = [], i = 0; i < this.storage_.length; i++) this.storage_[i].type === e && t.push(this.storage_[i]);
return _r_(t);
}, B.Search.DEFAULT_GROUP_COFIGURATION = {
adults:2,
rooms:1,
children:0
}, B.Search.Interface = function() {
_i_("18c:106");
var e = this;
this.datesStorage = {
checkin:B.Search.createDate(),
checkout:B.Search.createDate(),
mode:"regular"
}, this.groupStorage = {
value:B.Search.createGroup()
}, this.flexibleDatesStorage = {
interval:null,
monthYear:B.Search.createDate()
}, this.destinationStorage = {
value:null
}, this.advancedSearchStorage = {
state:"disabled"
}, this.dates = function() {
_i_("18c:672");
var t;
switch (arguments.length) {
case 0:
return _r_({
checkin:this.getDate_("checkin"),
checkout:this.getDate_("checkout"),
mode:this.getDatesMode_(),
validate:function() {
return _i_("18c:2021"), _r_(e.validateDates_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("18c:2022"), _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 0)));
},
validationResults:function() {
return _i_("18c:2023"), _r_(e.validationResults);
}
});

case 1:
return _r_(this.getDate_(arguments[0]));

case 2:
return "mode" === arguments[0] ? _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 1))) :(t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t)));

default:
return t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t));
}
_r_();
}, this.flexibleDates = function() {
return _i_("18c:673"), _r_({
interval:function() {
return _i_("18c:1762"), _r_(1 === arguments.length ? e.setInterval_.apply(e, [].slice.call(arguments, 0)) :e.getInterval_());
},
monthYear:function() {
return _i_("18c:1763"), _r_(1 === arguments.length ? e.setMonthYear_.apply(e, [].slice.call(arguments, 0)) :e.getMonthYear_());
},
validate:function() {
return _i_("18c:1764"), _r_(e.validateFlexibleDates_.apply(e, [].slice.call(arguments, 0)));
}
});
}, this.destination = function() {
switch (_i_("18c:674"), arguments.length) {
case 0:
return _r_(this.getDestination_());

default:
return _r_(this.setDestination_(arguments[0]));
}
_r_();
}, this.group = function() {
switch (_i_("18c:675"), arguments.length) {
case 0:
return _r_({
value:this.getGroup_(),
mode:function(t) {
return _i_("18c:2024"), _r_(t ? e.setGroupMode_.apply(e, [].slice.call(arguments, 0)) :e.getGroupMode_.apply(e, [].slice.call(arguments, 0)));
},
validate:function() {
return _i_("18c:2025"), _r_(e.validateGroup_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("18c:2026"), _r_(e.setGroupMode_.apply(e, [].slice.call(arguments, 0)));
}
});

case 1:
return _r_("reset" === arguments[0] ? this.setGroup_("config", B.Search.DEFAULT_GROUP_COFIGURATION) :"value" === arguments[0] ? this.getGroup_() :"string" == typeof arguments[0] ? this.getGroup_(arguments[0]) :this.setGroup_("config", arguments[0]));

default:
if ("reset" === arguments[0]) return _r_(this.setGroup_("config", arguments[1]));
return _r_(this.setGroup_(arguments[0], arguments[1]));
}
_r_();
}, this.advanced = function() {
return _i_("18c:676"), _r_({
mode:function(t) {
return _i_("18c:1765"), _r_(t ? e.setAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)) :e.getAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)));
},
enable:function() {
return _i_("18c:1766"), _r_(e.setAdvancedSearchMode_.apply(e, [ "enabled" ]));
},
disable:function() {
return _i_("18c:1767"), _r_(e.setAdvancedSearchMode_.apply(e, [ "disabled" ]));
}
});
}, _r_();
}, B.Search.Interface.prototype = {
constructor:B.Search.Interface,
sanitizeDateType_:function(e) {
return _i_("18c:325"), _r_("checkin" === e || "checkout" === e ? e :null);
},
getDate_:function(e) {
_i_("18c:326");
var t = this.sanitizeDateType_(e);
return _r_(this.datesStorage[t]);
},
setDate_:function(e, t, i) {
_i_("18c:327");
var n = B.Search.createDate(t), r = "valid" === n.type ? B.Search.Events.DATE_CHANGED :B.Search.Events.DATE_MONTH_CHANGED, o = this.sanitizeDateType_(e), a = this.datesStorage[o];
return i = i || {}, o ? (n.type !== a.type || n.valueOf() !== a.valueOf()) && (this.datesStorage[o] = n, B.eventEmitter.trigger(r, {
type:o,
value:n,
search:this,
referrer:i.referrer
})) :window.onerror("attempt_to_set_date_with_wrong_type:_" + e, window.location), _r_(n);
},
validateDates_:function(e, t) {
if (_i_("18c:328"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.DATE_VALID), _r_(!0);
var i = B.Search.validators.allOfType("dates"), n = i.map(function(e) {
return _i_("18c:1442"), _r_(e.validate());
}), r = n.every(function(e) {
return _i_("18c:1443"), _r_("success" === e.status);
});
return r ? this.validationResults = null :this.validationResults = n, t && t.silent || B.eventEmitter.trigger(r ? B.Search.Events.DATE_VALID :B.Search.Events.DATE_INVALID, {
validators:n
}), _r_(r);
},
sanitizeDatesMode_:function(e) {
return _i_("18c:329"), _r_("regular" === e || "no-dates" === e || "flexible" === e ? e :null);
},
getDatesMode_:function() {
return _i_("18c:330"), _r_(this.datesStorage.mode);
},
setDatesMode_:function(e) {
_i_("18c:331");
var t = this.sanitizeDatesMode_(e);
return t && this.datesStorage.mode !== t && (this.datesStorage.mode = t, B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED, {
mode:t
})), _r_(this);
},
getMonthYear_:function() {
return _i_("18c:332"), _r_(this.flexibleDatesStorage.monthYear);
},
setMonthYear_:function(e) {
_i_("18c:333");
var t = B.Search.createDate(e), i = this.flexibleDatesStorage.monthYear;
return t.valueOf() !== i.valueOf() && (this.flexibleDatesStorage.monthYear = t, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED, {
value:t
})), _r_(t);
},
getInterval_:function() {
return _i_("18c:334"), _r_(this.flexibleDatesStorage.interval);
},
setInterval_:function(e) {
return _i_("18c:335"), "weekend" !== e && "week" !== e && (e = "any"), this.flexibleDatesStorage.interval !== e && (this.flexibleDatesStorage.interval = e, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED, {
value:e
})), _r_(this);
},
validateFlexibleDates_:function() {
_i_("18c:336");
var e = B.Search.validators.allOfType("flexible"), t = e.map(function(e) {
return _i_("18c:1444"), _r_(e.validate());
}), i = t.every(function(e) {
return _i_("18c:1445"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(i ? B.Search.Events.FLEXIBLE_VALID :B.Search.Events.FLEXIBLE_INVALID, {
validators:t
}), _r_(i);
},
getDestination_:function() {
return _i_("18c:337"), _r_(this.destinationStorage.value);
},
setDestination_:function(e) {
_i_("18c:338");
var t = e && e.data, i = this.destinationStorage && this.destinationStorage.value && this.destinationStorage.value;
t && (!i || i && i.dest_id !== t.dest_id) && (this.destinationStorage.value = t, B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED, this.destinationStorage.value)), _r_();
},
getGroup_:function(e) {
return _i_("18c:339"), _r_(e ? this.groupStorage.value[e] :this.groupStorage.value);
},
setGroup_:function(e, t) {
_i_("18c:340");
var i, n;
if ("rooms" === e || "adults" === e || "children" === e || "childrenAges" === e || "type" === e || "name" === e) this.setGroupValue_(e, t); else if ("config" === e) {
i = t instanceof B.Search.Group ? t :B.Search.createGroup(t);
for (var r = 0, o = i.childrenAges.length; o > r; r++) i.childrenAges[r] === n && (i.childrenAges[r] = this.groupStorage.value.childrenAges[r]);
i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent());
}
_r_();
},
setGroupValue_:function(e, t) {
_i_("18c:341");
var i, n = {};
n[e] = t, i = B.Search.createGroup(this.groupStorage.value), i.update(n), i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent()), _r_();
},
getGroupMode_:function() {
return _i_("18c:342"), _r_(this.groupStorage.mode);
},
setGroupMode_:function(e) {
return _i_("18c:343"), "basic" !== e && "custom" !== e && (e = "custom"), e && this.groupStorage.mode !== e && (this.groupStorage.mode = e, B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED, {
mode:e
})), _r_(this);
},
triggerGroupEvent:function() {
_i_("18c:344"), B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED, this.groupStorage.value), _r_();
},
validateGroup_:function(e) {
if (_i_("18c:345"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.GROUP_VALID), _r_(!0);
var t = B.Search.validators.allOfType("group"), i = t.map(function(e) {
return _i_("18c:1446"), _r_(e.validate());
}), n = i.every(function(e) {
return _i_("18c:1447"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(n ? B.Search.Events.GROUP_VALID :B.Search.Events.GROUP_INVALID, {
validators:i
}), _r_(n);
},
setAdvancedSearchMode_:function(e) {
_i_("18c:346"), e === this.advancedSearchStorage.state || "enabled" !== e && "disabled" !== e || (this.advancedSearchStorage.state = e, B.eventEmitter.trigger("enabled" === e ? B.Search.Events.ADVANCED_SEARCH_ENABLED :B.Search.Events.ADVANCED_SEARCH_DISABLED)), _r_();
},
getAdvancedSearchMode_:function() {
return _i_("18c:347"), _r_(this.advancedSearchStorage.state);
}
}, B.search = new B.Search.Interface(), booking[sNSStartup].initSearchValues = {
init:function() {
_i_("18c:348"), this.initDestination(), this.initDates(), this.initGroup(), _r_();
},
initDates:function() {
_i_("18c:349");
var e, t;
function i(e, t) {
_i_("18c:677");
var i = t.split("-"), n = new Date(i[0], i[1] - 1, e, 0, 0, 0, 0);
if (isNaN(n.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:i[0],
month:i[1] - 1,
date:e
}));
}
function n(e) {
_i_("18c:678");
var t = e.split("-"), i = new Date(t[0], t[1] - 1, t[2], 0, 0, 0, 0);
if (isNaN(i.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:t[0],
month:t[1] - 1,
date:t[2]
}));
}
B.env.s_value_checkin_monthday && B.env.s_value_checkin_year_month ? (e = i(B.env.s_value_checkin_monthday, B.env.s_value_checkin_year_month), e && B.search.dates("checkin", e)) :B.env.b_checkin_date ? (e = n(B.env.b_checkin_date), e && B.search.dates("checkin", e)) :B.env.b_session_checkin_date && (B.env.b_has_valid_dates_not_in_past && B.et.track("UBKeJEKAcBOLEHJebbCEWWe"), e = n(B.env.b_session_checkin_date), e && B.search.dates("checkin", e)), B.env.s_value_checkout_monthday && B.env.s_value_checkout_year_month ? (t = i(B.env.s_value_checkout_monthday, B.env.s_value_checkout_year_month), t && B.search.dates("checkout", t)) :B.env.b_checkout_date ? (t = n(B.env.b_checkout_date), t && B.search.dates("checkout", t)) :B.env.b_session_checkout_date && (t = n(B.env.b_session_checkout_date), B.env.b_has_valid_dates_not_in_past && B.et.track("UBKeJEKAcBOLEHJebbCEWWe"), t && B.search.dates("checkout", t)), B.env.b_no_dates_mode && B.search.dates("mode", B.Search.DateModes.NODATES), _r_();
},
initGroup:function() {
_i_("18c:350");
try {
var e = B.env.b_group && B.env.b_group[0], t = B.env.b_group_rooms_wanted, i = [];
if (e && t) {
if (e.ages) for (var n = 0; n < e.ages.length; n++) "undefined" != typeof e.ages[n].age && i.push(e.ages[n].age);
B.search.group({
adults:e.guests,
childrenAges:i,
rooms:t
});
} else B.search.group("value") instanceof B.Search.InvalidGroup && B.search.group({
adults:2,
rooms:1,
type:B.Search.GroupModes.REGULAR
});
} catch (r) {
throw "Unable to set group";
}
_r_();
},
initDestination:function() {
_i_("18c:351");
var e = {
name:void 0,
data:{}
};
B && B.env && (B.env.sess_dest_id && (e.data.dest_id = B.env.sess_dest_id), B.env.sess_dest_type && (e.data.dest_type = B.env.sess_dest_type), B.env.sess_dest_fullname && (e.data.name = B.env.sess_dest_fullname, e.term = B.env.sess_dest_fullname)), e.data.dest_id && e.data.dest_type && e.data.name && B.search.destination(e), _r_();
},
priority:5
}, function(e, t) {
_i_("18c:107");
function i(t, i) {
_i_("18c:352");
var n = this;
this.$element = t, this.$inputs = t.find("select, input"), this.options = i || {}, this.$element.data("always-enabled") && (this.options.alwaysEnabled = !0);
var r = t.find(".b-date-selector__control-dayselector select, .js--sb-dates__select-day"), o = t.find(".b-date-selector__control-monthselector select, .js--sb-dates__select-month-year");
function a(e) {
if (_i_("18c:679"), "string" != typeof e) return _r_(!1);
var t = e.split("-");
if (2 !== t.length) return _r_(!1);
return _r_({
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1
});
}
this.lastMonth = a(o.find("option:last").val());
function s(e) {
_i_("18c:680");
var t = document.createElement("option");
return t.innerHTML = e.text, t.selected = e.selected, t.value = e.value, _r_(t);
}
function _(t, n) {
_i_("18c:681");
var r = e.env.b_lang;
return _r_(isNaN(n) ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day :t :"ja" == r || "zh" == r || "ko" == r || "hu" == r ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day + " " + i.dayNames[n] :t + " " + i.dayNames[n] :i.dayNames[n] + " " + t);
}
function c(e, t) {
_i_("18c:682");
var i;
switch (e.month) {
case 1:
i = e.year % 4 === 0 && e.year % 100 !== 0 || e.year % 400 === 0 ? 29 :28;
break;

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
i = 31;
break;

case 3:
case 5:
case 8:
case 10:
i = 30;
}
return "checkin" === t && e.month === n.lastMonth.month && e.year === n.lastMonth.year && (i -= 1), _r_(i);
}
function l(t, i) {
_i_("18c:683");
var n, o, a, l, u = r.get(0), d = r.val();
if (t.year && t.month % 1 === 0) n = new Date(t.year, t.month, 1).getDay(), l = c(t, i), d = t.date; else {
if (t) return _r_();
l = 31;
}
for (;u.firstChild; ) u.removeChild(u.firstChild);
o = document.createDocumentFragment(), a = document.createElement("option"), a.innerHTML = e.env.sbox_day, a.value = 0, o.appendChild(a);
for (var h = 1; l >= h; h++) o.appendChild(s({
text:_(h, (n - 1 + h) % 7),
selected:d == h,
value:h
}));
u.appendChild(o), _r_();
}
function u(e) {
_i_("18c:684");
var t = e.year + "-" + (e.month + 1);
o.val(t), _r_();
}
function d(t) {
_i_("18c:685"), l(g(), i.type), p(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)), _r_();
}
function h(t) {
_i_("18c:686"), p(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_DAY_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)), _r_();
}
function p() {
_i_("18c:687");
var t = g();
if (!t) return _r_();
"checkin" === i.type ? e.search.dates("checkin", t) :"checkout" === i.type && e.search.dates("checkout", t), _r_();
}
function f(e) {
_i_("18c:688"), l(e), u(e), _r_();
}
function g() {
_i_("18c:689");
var e = a(o.val());
if (e.date = r.val(), !e || isNaN(e.date)) return _r_(!1);
return _r_(e);
}
function m(e, t) {
if (_i_("18c:690"), !t) return _r_();
t.type === i.type && f(t.value), _r_();
}
o.bind("change.dateSelector", d), r.bind("change.dateSelector", h), o.trigger("change.dateSelector"), t.bind("dateSelected", m), _r_();
}
i.prototype.setOptions = function(e) {
if (_i_("18c:691"), !e) return _r_(this);
return e.disabled ? this.$inputs.attr("disabled", !0) :this.$inputs.removeAttr("disabled"), _r_(this);
}, i.prototype.getOption = function(e) {
if (_i_("18c:692"), !e) return _r_(this.options);
return _r_(this.options[e] ? this.options[e] :null);
}, i.prototype.trigger = function(e) {
if (_i_("18c:693"), !e) return _r_(this);
return "disable" !== e || this.options.alwaysEnabled ? "enable" === e && this.setOptions({
disabled:!1
}) :this.setOptions({
disabled:!0
}), _r_(this);
};
function n() {
_i_("18c:353"), this.instances_ = [], _r_();
}
n.prototype.create = function(e, t) {
_i_("18c:694");
var n = new i(e, t);
return this.add(n), _r_(n);
}, n.prototype.add = function(e) {
return _i_("18c:695"), this.instances_.push(e), _r_(e);
}, n.prototype.all = function() {
return _i_("18c:696"), _r_(this.instances_);
}, n.prototype.notifyAll = function() {
_i_("18c:697");
for (var e = this.all(), t = 0; t < e.length; t++) e[t].trigger.apply(e[t], [].slice.call(arguments, 0));
return _r_(this.instances_);
};
var r = e.Search.datePickerController = new n();
t.fn.dateSelector = function(i) {
_i_("18c:698");
var n = e.env.b_simple_weekdays_for_js.slice(0);
return n.unshift(n.pop()), _r_(this.each(function() {
_i_("18c:1607");
var e = t(this), o = e.data(), a = o.calendar2;
a ? a.setOptions(i) :r.create(e, t.extend({
dayNames:n
}, i, o)), _r_();
}));
}, _r_();
}(B, $), booking[sNSStartup].search_utilities = {
init:function() {
_i_("18c:354"), B.Search = B.Search || {}, B.Search.getShiftedDate = function(e, t) {
if (_i_("18c:1014"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}, B.Search.openDatepicker = function(e) {
_i_("18c:1015");
var t, i, n, r = B.require("window-scroller"), o = {
selector:null,
duration:null
}, a = $.extend({}, o, e);
i = a.selector, n = a.duration, $.fn.calendar2("each", function(e) {
if (_i_("18c:1863"), !i) return t = e, _r_(!1);
if (e.$input.is(i)) return t = e, _r_(!1);
_r_();
}), t && r.scrollToBlock(t.$input, void 0, n).then(function() {
_i_("18c:2091"), t.show(), _r_();
}), _r_();
}, $(window).delegate(".js-open-datepicker", "click", function(e) {
_i_("18c:1016"), e.preventDefault();
var t = $(this), i = t.data(), n = {};
"undefined" != typeof i.selector && (n.selector = i.selector), "undefined" != typeof i.duration && (n.duration = i.duration), B.Search.openDatepicker(n), _r_();
}), _r_();
},
priority:5
}, function(e) {
_i_("18c:108"), e.events = e.require("events"), _r_();
}(booking), B.define("utils/wait-for-event", function(e, t, i) {
_i_("18c:109");
var n = e("promise");
function r(e, t, i) {
return _i_("18c:355"), _r_(new n(function(n) {
if (_i_("18c:1017"), i) {
var r = function() {
_i_("18c:2092"), i.apply(this, arguments) && (e.off(r), n()), _r_();
};
e.on(t, r);
} else e.once(t, n);
_r_();
}));
}
i.exports = r, _r_();
}), function() {
_i_("18c:110");
var e = {
_count:0,
_mixin:{},
_instances:[]
};
e._base = {
events:{
hide:"hide",
show:"show",
rootready:"rootready"
},
_cuid:e._count++,
_ctor:function() {},
_$root:null,
_$handle:null,
_emitter:null,
defaults:{
content:"",
redrawOnShow:!0
},
ens:"",
options:null,
create:function(t, i) {
_i_("18c:1019");
var n = this.extend({
ens:".ns" + e._count++,
_$handle:$(t),
_emitter:$({})
});
return n.options = $.extend({}, n.defaults, i), e._instances.push(n), _r_(n._init());
},
extend:function(t) {
_i_("18c:1020"), this._ctor.prototype = this, t && "defaults" in t && (t.defaults = $.extend({}, this.defaults, t.defaults));
var i = $.extend(new this._ctor(), t);
return i._cuid = e._count++, t.register$ && e.register$(t.register$, i), _r_(i);
},
delegate:function(e, t) {
_i_("18c:1021");
var i = this, n = "fly_delegated_" + i._cuid;
$.each(i.actions, function(r) {
_i_("18c:1864"), $(document.body).delegate(e, r, function() {
if (_i_("18c:2210"), $(this).data(n)) return _r_();
var e = i.create(this, t);
e.handle().data(n, 1), e._actionHandler(e.actions[r]).apply(e, arguments), _r_();
}), _r_();
}), _r_();
},
onrootready:function() {},
root:function() {
if (_i_("18c:1023"), !this._$root) {
var e = this.options;
this._$root = $("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body"), this.trigger(this.events.rootready);
}
return _r_(this._$root);
},
handle:function() {
return _i_("18c:1024"), _r_(this._$handle);
},
_init:function() {
return _i_("18c:1025"), this._action(!0), this.bind(this.events.rootready, $.proxy(this.onrootready, this)), this.init(), _r_(this);
},
_destroy:function() {
_i_("18c:1026"), this.destroy(), this._$root && (this._$root.remove(), this._$root = null), this._action(!1);
for (var t = 0, i = e._instances.length; i > t; t++) if (e._instances[t] === this) {
e._instances.splice(t, 1);
break;
}
_r_();
},
_action:function(e, t, i) {
_i_("18c:1027"), i = i || this.handle(), t = t || this.actions;
for (var n in t) e ? i.bind(n + this.ens, this._actionHandler(t[n])) :i.unbind(n + this.ens);
_r_();
},
_actionHandler:function(e) {
return _i_("18c:1028"), _r_("string" == typeof e ? $.proxy(this[e], this) :$.proxy(e, this));
},
_content:function(e) {
_i_("18c:1029");
var t = this.options.content;
"function" == typeof t ? t.length ? t.call(this, e) :e(t.call(this)) :e(t), _r_();
},
_render:function(e) {
_i_("18c:1030"), this.root().html(e || ""), this._rendered = !0, _r_();
},
_modCss:function() {
_i_("18c:1031");
var e = this.options.position.split(" "), t = this.options.baseClass;
return _r_([ t + "_" + e[0], t + "_arrow-" + e[1] ].join(" "));
},
_position:function() {},
init:function() {},
destroy:function() {},
show:function(e) {
_i_("18c:1035");
var t = this.options.redrawOnShow || !this._rendered;
if (t && !arguments.length) return _r_(this._content($.proxy(this.show, this)));
arguments.length && this._render(e), this.trigger(this.events.show), this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass), _r_();
},
hide:function() {
if (_i_("18c:1036"), this.hidden()) return _r_();
this.trigger(this.events.hide), this.root().addClass(this.options.hideClass), _r_();
},
redraw:function(e) {
_i_("18c:1037");
var t = this;
this._content(function(i) {
_i_("18c:1865"), t._render(i), "function" == typeof e && e(i), _r_();
}), _r_();
},
toggle:function(e) {
_i_("18c:1038"), e = arguments.length ? e :this.hidden(), this[e ? "show" :"hide"](), _r_();
},
hidden:function() {
return _i_("18c:1039"), _r_(!this._$root || this.root().hasClass(this.options.hideClass));
}
}, $.each([ "bind", "unbind", "one", "trigger" ], function(t, i) {
_i_("18c:699"), e._base[i] = function() {
return _i_("18c:1608"), this._emitter[i].apply(this._emitter, arguments), _r_(this);
}, _r_();
}), e._mixin.rect = function(e) {
_i_("18c:700");
var t = e[0].getBoundingClientRect();
return "width" in t || (t = $.extend({}, t), t.width = e.outerWidth(), t.height = e.outerHeight()), _r_(t);
}, e._mixin.position = function() {
_i_("18c:701");
var e = {}, t = $(window), i = this.options.position.split(" "), n = this.options.arrowSize, r = i.shift(), o = i.shift(), a = {}, s = 0, _ = this._rect(this.root()), c = this._rect(this.handle()), l = "fixed" === this.root().css("position"), u = l ? {
top:0,
left:0
} :{
top:t.scrollTop(),
left:t.scrollLeft()
};
switch (o) {
case "top":
a.top = c.height / 2 - 1.5 * n;
break;

case "left":
a.left = c.width / 2 - 1.5 * n;
break;

case "right":
a.left = c.width / 2 - _.width + 1.5 * n;
break;

case "bottom":
a.top = c.height / 2 - _.height + 1.5 * n;
break;

default:
a.top = (c.height - _.height) / 2, a.left = (c.width - _.width) / 2;
}
switch (s = "right" === this.options.positionAlign || "left" === this.options.positionAlign ? 0 :a.left, r) {
case "left":
e.top = u.top + c.top + a.top, e.left = u.left + c.left - _.width - n;
break;

case "right":
e.top = u.top + c.top + a.top, e.left = u.left + c.left + c.width + n;
break;

case "top":
e.top = u.top + c.top - _.height - n, "right" === this.options.positionAlign ? e.left = u.left + c.right - _.width + s :e.left = u.left + c.left + s;
break;

default:
e.top = u.top + c.top + c.height + n, "right" === this.options.positionAlign ? e.left = u.left + c.right - _.width + s :e.left = u.left + c.left + s;
}
return _r_(e);
}, e.tooltip = e._base.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave"
},
_showTimeout:null,
_hideTimeout:null,
onmouseenter:function() {
_i_("18c:1448");
var e = this;
if (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), this.options.requireTooltipClass && this.options.requireTooltipClass.length > 0 && this._$handle && !this._$handle.hasClass(this.options.requireTooltipClass)) return _r_();
this.hidden() && (this._showTimeout = setTimeout(function() {
_i_("18c:2211"), e.show(), _r_();
}, this.options.showDelay)), _r_();
},
onmouseleave:function() {
_i_("18c:1449");
var e = this;
this._showTimeout && (clearTimeout(this._showTimeout), this._showTimeout = null), this._hideTimeout = setTimeout(function() {
_i_("18c:2093"), e.hide(), _r_();
}, this.options.hideDelay), _r_();
},
_action:function(t) {
_i_("18c:1450"), e._base._action.apply(this, arguments), this.options.keepOnContent && this._keepOnContent(t), _r_();
},
_keepOnContent:function(t) {
_i_("18c:1451");
var i = this, n = this.events.rootready + "._keepOnContent";
t ? this.bind(n, function() {
_i_("18c:2185"), e._base._action.call(i, t, i.actions, i.root()), _r_();
}) :(this.unbind(n), e._base._action.call(this, t, this.actions, this.root())), _r_();
},
defaults:{
baseClass:"fly-tooltip",
hideClass:"fly-tooltip_hidden",
extraClass:"",
position:"bottom center",
positionAlign:"",
requireTooltipClass:"",
arrowSize:10,
showDelay:300,
hideDelay:300
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.dropdown = e._base.extend({
actions:{
click:"onclick"
},
onclick:function() {
_i_("18c:1452"), this.toggle(), _r_();
},
onresize:function() {
if (_i_("18c:1453"), this.hidden()) return _r_();
this.root().css(this._position()), _r_();
},
_action:function(t) {
_i_("18c:1454"), e._base._action.apply(this, arguments), e._base._action.call(this, t, {
resize:"onresize"
}, $(window)), this._autohide(t), _r_();
},
_autohide:function(e) {
_i_("18c:1455");
var t = this, i = "click" + t.ens + " keydown" + t.ens + " touchstart" + t.ens;
if (!e) return _r_();
this.bind(this.events.show, function() {
_i_("18c:2186"), setTimeout(n, 0), _r_();
}).bind(this.events.hide, function() {
_i_("18c:2027"), $(document).unbind(i), _r_();
});
function n() {
_i_("18c:1768"), $(document).bind(i, function(e) {
_i_("18c:2187");
var i = e.target, n = t.root()[0], r = t.handle()[0];
("keydown" === e.type && 27 === e.which || ("click" === e.type || "touchstart" === e.type) && i !== n && !$.contains(n, i) && i !== r && !$.contains(r, i)) && t.hide(), _r_();
}), _r_();
}
_r_();
},
defaults:{
baseClass:"fly-dropdown",
hideClass:"fly-dropdown_hidden",
extraClass:"",
position:"bottom center",
arrowSize:10
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.hideAll = function() {
_i_("18c:702");
for (var t = 0, i = e._instances.length; i > t; t++) "function" == typeof e._instances[t].hide && e._instances[t].hide();
_r_();
}, $.fly = e, e.register$ = function(t, i) {
if (_i_("18c:703"), i === e._base || !(i instanceof e._base._ctor) || $.fn[t]) return _r_();
var n = "fly_" + t + "_" + +new Date();
$.fn[t] = function(e) {
_i_("18c:1609");
var t;
return this.each(function(o) {
if (_i_("18c:2094"), t) return _r_(!1);
var a = $(this), s = a.data(n);
switch (e) {
case "instance":
t = s;
break;

case "destroy":
r(s);
break;

default:
r(s), a.data(n, i.create(a, e));
}
_r_();
}), _r_(t || this);
function r(e) {
_i_("18c:1866"), e && (e.handle().removeData(n), e._destroy()), _r_();
}
}, _r_();
}, $.each(e, e.register$), _r_();
}(), B.define("lists/lists-api/lists-api", function(e, t, i) {
"use strict";
_i_("18c:111");
var n = e("jquery");
function r(e) {
return _i_("18c:356"), _r_(n.extend({}, e || {}, {
aid:B.env.aid || B.env.b_aid,
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
stype:B.env.b_site_type_id || "",
currency:B.env.b_selected_currency,
label:B.env.b_label,
partner_channel_id:B.env.partner_id,
stid:B.env.b_stid
}, B.env.b_is_bbtool_admin ? {
user_is_bbtool_admin:1
} :{}));
}
function o(e) {
return _i_("18c:357"), e.data = r(e.data), _r_(n.ajax(n.extend(e, {
type:"POST"
})));
}
i.exports = {
API:{
_prepareParams:r,
request:function(e, t, i) {
return _i_("18c:1610"), _r_(o({
url:e,
data:n.extend({}, t),
success:function(e) {
return _i_("18c:2212"), _r_((i || n.noop)(e));
}
}));
},
list:function(e, t) {
return _i_("18c:1611"), _r_(o({
url:"/wishlist/get",
data:n.extend({
with_hotels:1,
include_availability:1
}, e),
success:function(e) {
return _i_("18c:2213"), _r_((t || n.noop)(e));
}
}));
},
listById:function(e, t) {
return _i_("18c:1612"), _r_(o({
url:"/wishlist/get",
data:{
with_hotels:1,
include_availability:1,
id:e
},
success:function(e) {
return _i_("18c:2214"), _r_((t || n.noop)(e));
}
}));
},
updateHotels:function(e, t) {
return _i_("18c:1613"), _r_(o({
url:"/wishlist/save_hotels",
data:{
list:e.list_id,
hotel_ids:e.hotel_ids.join(","),
new_states:e.states.join(",")
},
success:function(e) {
_i_("18c:2215"), (t || n.noop)(e), _r_();
}
}));
},
updateList:function(e, t) {
return _i_("18c:1614"), _r_(o({
url:"/wishlist/update",
data:e,
success:function(i) {
_i_("18c:2216"), i.success && (B.eventEmitter.trigger("lists:api:update", e), (t || n.noop)(i)), _r_();
}
}));
},
createList:function(e, t) {
return _i_("18c:1615"), _r_(o({
url:"/wishlist/create",
data:n.extend(e, {
name:String(e.name),
privacy:String(e.privacy)
}),
success:function(e) {
_i_("18c:2217"), (t || n.noop)(e), _r_();
}
}));
},
removeList:function(e, t) {
return _i_("18c:1616"), B.listmap && B.listmap.trigger("del_list"), _r_(o({
url:"/wishlist/delete",
data:{
list_id:e.list_id
},
success:function(e) {
_i_("18c:2218"), (t || n.noop)(e), _r_();
}
}));
},
updateTag:function(e, t) {
return _i_("18c:1617"), B.listmap && B.listmap.trigger(e.is_deleted ? "del_tag" :"added_tag"), _r_(o({
url:"/tag_item",
data:{
item_id:e.list_id,
tags:e.tags,
is_deleted:e.is_deleted || 0,
type:e.type
},
success:function(e) {
_i_("18c:2219"), (t || n.noop)(e), _r_();
}
}));
},
updateNote:function(e, t) {
return _i_("18c:1618"), B.listmap && B.listmap.trigger("save_note"), _r_(o({
url:"/wishlist/add_note",
data:{
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
},
success:function(e) {
_i_("18c:2220"), (t || n.noop)(e), _r_();
}
}));
},
removeHotel:function(e, t) {
return _i_("18c:1619"), _r_(o({
url:"/wishlist/save_hotel",
data:{
hotel_id:e.hotel_id,
lists:e.lists,
new_state:0
},
success:function(e) {
_i_("18c:2221"), (t || n.noop)(e), _r_();
}
}));
},
getRecentlyViewed:function(e, t) {
return _i_("18c:1620"), _r_(o({
url:"/wishlist/recently_viewed_hotel",
data:{
limit:e.limit,
list_id:e.list_id
},
success:function(e) {
_i_("18c:2222"), (t || n.noop)({
hotels:e
}), _r_();
}
}));
},
getAvailability:function(e, t) {
return _i_("18c:1621"), _r_(o({
url:"/wishlist/get_or_update_wishlist_hotels_dates",
data:n.extend({
hotel_ids:e.hotel_ids.join(","),
checkin:e.checkin,
checkout:e.checkout,
list_id:e.list_id || ""
}, e.additional),
success:function(e) {
_i_("18c:2223"), (t || n.noop)(e), _r_();
}
}));
}
},
type:{
RECENTLY_VIEWED:"3"
},
currentHotel:function() {
_i_("18c:1040");
var e = {
b_hotel_id:B.env.b_hotel_id,
b_hotel_name:B.env.b_hotel_name,
b_hotel_image_url_square60:B.env.b_hotel_image_url_square60,
b_hotel_url:"",
b_hotel_image_url_square150:""
};
return e.b_hotel_image_url_square60 && (e.b_hotel_image_url_square150 = e.b_hotel_image_url_square60.replace("square60", "square150")), !e.b_hotel_image_url_square150 && B.env.b_hotel_image_url_square90 && (e.b_hotel_image_url_square150 = B.env.b_hotel_image_url_square90.replace("square90", "square150")), "hotel" === B.env.b_action && (e.b_hotel_url = location.href), _r_(e);
},
getIdFromUrl:function(e) {
_i_("18c:1041");
var t = /wl_id=([a-zA-Z0-9-_]+)/, i = e.match(t);
return _r_(String(i && i[1]));
},
getLastChangedListId:function() {
_i_("18c:1042");
var e = B.env.b_reg_user_last_used_wishlist;
if (e) return _r_(e && e[0] && e[0].b_reg_user_detail_list_id);
return _r_("0");
},
storedProperty:function(e, t) {
return _i_("18c:1043"), window.b && window.b.storage ? ("undefined" != typeof t && window.b.storage({
key:e,
value:String(t),
location:"cookies"
}), _r_(String(window.b.storage({
key:e,
location:"cookies"
})))) :("undefined" != typeof t && n.cookie(e, String(t), {
domain:"booking.com",
path:"/"
}), _r_(n.cookie(e)));
}
}, _r_();
}), B.define("lists/lists-tools/lists-tools", function(e, t, i) {
"use strict";
_i_("18c:112"), i.exports = {
pick:function(e) {
_i_("18c:1044");
var t = {};
return $.each(Array.prototype.slice.call(arguments, 1), function(i, n) {
_i_("18c:1867"), t[n] = e[n], _r_();
}), _r_(t);
},
stringifyUrl:function(e, t, i) {
_i_("18c:1045"), t = t || "&", i = i || "=";
var n = [];
for (var r in e) e.hasOwnProperty(r) && n.push(r + i + e[r]);
return _r_(n.join(t));
},
keys:Object.keys,
throttle:function() {
_i_("18c:1456");
var e = function() {};
try {
e = B.tools.functions.throttle;
} catch (t) {
e = function(e) {
return _i_("18c:2224"), _r_(e());
};
}
return _r_(e);
}(),
ellipsis:function(e, t) {
if (_i_("18c:1046"), e.length < t) return _r_(e);
return _r_(e.slice(0, t) + "&hellip;");
},
htmlEncode:function() {
_i_("18c:1457");
var e = function() {};
try {
e = B.tools.string.htmlEncode;
} catch (t) {
e = function(e) {
return _i_("18c:2225"), _r_(e);
};
}
return _r_(e);
}(),
htmlDecode:function() {
_i_("18c:1458");
var e = function() {};
try {
e = B.tools.string.htmlDecode;
} catch (t) {
e = function(e) {
return _i_("18c:2226"), _r_(e);
};
}
return _r_(e);
}()
}, _r_();
}), B.define("lists/lists-store/lists-store", function(e, t, i) {
"use strict";
_i_("18c:113");
var n = e("jquery"), r = e("../lists-api/lists-api").API, o = booking.promise;
o = booking.promise ? booking.promise :function() {
_i_("18c:1047");
var e = n.Deferred();
return e.fulfill = e.resolve, _r_(e);
};
function a(e) {
_i_("18c:358");
var t = booking[sNSStartup].wlData;
if (!t) return _r_();
setTimeout(function() {
_i_("18c:1048"), t.clearCache(), B.eventEmitter.trigger(t.EVENTS.EDITHOTEL, e), _r_();
}, 0), _r_();
}
function s(e) {
return _i_("18c:359"), _r_(String(e.b_id || e.b_hotel_id || e.hotel_id || e.id));
}
function _(e, t) {
_i_("18c:360"), e.on = function(e, i) {
return _i_("18c:1049"), B.eventEmitter.bind(t + e, function() {
_i_("18c:1868");
var e = Array.prototype.slice.call(arguments, 1);
i.apply(B.eventEmitter, e), _r_();
}), _r_(this);
}, e.emit = function(e) {
_i_("18c:1050");
var i = Array.prototype.slice.call(arguments, 1);
B.eventEmitter.trigger(t + e, i), _r_();
}, _r_();
}
function c() {
_i_("18c:361");
var e = [];
this._lists = e, this._requestsInProgress = {}, this._fetchedHotelIds = {}, this._backCompatibility = !0, _(this, "listStore_"), _r_();
}
c.prototype.getHotelId = s, c.prototype.backCompatibility = function(e) {
_i_("18c:704"), this._backCompatibility = e, _r_();
}, c.prototype._prepareHotelsData = function(e) {
_i_("18c:705");
var t = this;
return e.forEach(function(e, i, n) {
_i_("18c:1622"), e.index = i, e.index_is_first = 0 === i, e.index_is_last = i === n.length - 1, t.emit("hotel:init", e), _r_();
}), _r_(e);
}, c.prototype._prepareListsData = function(e, t) {
_i_("18c:706");
var i = this;
return t = t || {}, e.forEach(function(e) {
_i_("18c:1623"), e.hotels_count = e.hotels_count || 0, t.hotel_id && (e.hotels || (e.hotels = []), e.selected && e.hotels.push({
id:t.hotel_id
})), i._prepareHotelsData(e.hotels || []), _r_();
}), _r_(e);
}, c.prototype.getListById = function(e) {
_i_("18c:707");
var t = {};
return this._lists.forEach(function(e) {
_i_("18c:1624"), t[e.id] = e, _r_();
}), _r_(t[e]);
}, c.prototype.getListByDefaultListId = function(e) {
_i_("18c:708");
var t = null;
return this._lists.forEach(function(i) {
_i_("18c:1625"), i.default_list && parseFloat(i.default_list) === e && (t = i), _r_();
}), _r_(t);
};
function l(e, t) {
return _i_("18c:362"), _r_(new Array(e + 1).join(String(t)).split(""));
}
c.prototype.toggleHotel = function(e) {
_i_("18c:709");
var t = o(), i = this.getHotelById(e);
return i ? this.removeHotels({
hotels:[ i ],
list_id:e.list_id
}).then(function(e) {
_i_("18c:1869"), t.fulfill({
res:e,
state:!1
}), _r_();
}) :this.addHotels({
hotels:[ {
hotel_id:e.hotel_id
} ],
list_id:e.list_id
}).then(function(e) {
_i_("18c:1870"), t.fulfill({
res:e,
state:!0
}), _r_();
}), _r_(t);
}, c.prototype.addHotels = function(e) {
_i_("18c:710");
var t = this, i = o(), n = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:n,
states:l(e.hotels.length, 1)
}, function(r) {
_i_("18c:1626");
var o = t.getListById(e.list_id);
if (o.hotels = o.hotels || [], Array.prototype.push.apply(o.hotels, t._prepareHotelsData(r.hotels_data)), "undefined" != typeof o.hotels_count && (o.hotels_count += 1), B.eventEmitter.trigger("lists:hotels:added", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", o, {
hotel_ids:n
}), i.fulfill(r), !t._backCompatibility) return _r_();
a({
params:{
hotel_id:n[0],
lists:e.list_id
},
result:r
}), _r_();
}), _r_(i);
}, c.prototype.getListByIndex = function(e) {
return _i_("18c:711"), _r_(this._lists[e]);
}, c.prototype.removeHotels = function(e) {
_i_("18c:712");
var t = this, i = o(), n = t.getListById(e.list_id);
e.hotels.forEach(function(e) {
_i_("18c:1627");
var i = t.getHotelIndexById({
hotel_id:s(e),
list_id:n.id
});
-1 !== i && n.hotels.splice(i, 1), _r_();
}), B.eventEmitter.trigger("hotels:before:removed", e);
var _ = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:_,
states:l(e.hotels.length, 0)
}, function(r) {
if (_i_("18c:1628"), n.hotels_count && (n.hotels_count -= e.hotels.length), B.eventEmitter.trigger("hotels:removed", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", n, {
hotel_ids:_
}), i.fulfill(r), !t._backCompatibility) return _r_();
a({
params:{
hotel_id:_[0],
lists:e.list_id,
new_state:0
},
result:r
}), _r_();
}), _r_(i);
}, c.prototype.createList = function(e) {
_i_("18c:713");
var t = this, i = o();
return r.createList(n.extend(e, {
name:e.name
}), function(n) {
if (_i_("18c:1629"), !n.success || !n.id) return _r_(i.reject(n));
t._lists.push(n), n.hotels = [], n.hotels_count = 0, e.hotel_id && (n.hotels.push({
hotel_id:e.hotel_id
}), n.hotels_count++), t.emit("list:created", n, {
hotel_ids:[ e.hotel_id ]
}), B.eventEmitter.trigger("lists:created", e), i.fulfill(n), _r_();
}), _r_(i);
}, c.prototype.updateList = function(e) {
_i_("18c:714");
var t = o(), i = this.getListById(e.list_id);
return n.extend(i, e), r.updateList(e, function(e) {
_i_("18c:1630"), t.fulfill(e), _r_();
}), _r_(t);
}, c.prototype.getHotels = function(e) {
_i_("18c:715");
var t = this, i = o();
if (e.hotels && e.hotels.length > 0 && Number(e.hotels_count) === e.hotels.length && e.hotels[0].name) return i.fulfill(e), _r_(i);
return t.emit("list:hotels:loading", !0), r.list({
id:e.id,
with_hotels:1,
include_availability:1
}, function(n) {
if (_i_("18c:1631"), !n.success) return _r_(i.reject(n));
var r = n.lists[0];
e.hotels = t._prepareHotelsData(r.hotels), r && r.travel_group && (e.travel_group = r.travel_group), t.emit("list:hotels:loading", !1), i.fulfill(e), _r_();
}), _r_(i);
}, c.prototype.removeList = function(e) {
_i_("18c:716");
var t = this, i = -1;
if (this._lists.forEach(function(t, n) {
_i_("18c:1632"), String(e.list_id) === String(t.id) && (i = n), _r_();
}), -1 === i) return _r_();
this._lists.splice(i, 1), r.removeList({
list_id:e.list_id
}, function() {
_i_("18c:1633"), t.emit("list:removed", e), _r_();
}), _r_();
}, c.prototype._find = function(e) {
_i_("18c:717");
var t = this, i = null, n = -1, r = t.getListById(e.list_id);
return e.list_id ? r.hotels.forEach(function(t, r) {
_i_("18c:1871"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}) :t._lists.forEach(function(t) {
_i_("18c:1872"), t.hotels.forEach(function(t, r) {
_i_("18c:2227"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}), _r_();
}), _r_({
index:n,
res:i
});
}, c.prototype.getHotelById = function(e) {
return _i_("18c:718"), _r_(this._find(e).res);
}, c.prototype.getHotelIndexById = function(e) {
return _i_("18c:719"), _r_(this._find(e).index);
}, c.prototype.fetch = function(e) {
_i_("18c:720"), e = e || {};
var t = this, i = o();
if (this._requestsInProgress[JSON.stringify(e)]) return _r_(this._requestsInProgress[JSON.stringify(e)]);
if (t._lists.length > 0) {
if (!e.hotel_id) return i.fulfill({
lists:t._lists
}), _r_(i);
if (t._fetchedHotelIds[e.hotel_id]) return i.fulfill({
lists:t._lists
}), _r_(i);
}
this._requestsInProgress[JSON.stringify(e)] = i, e.hotel_id || t.emit("liststore:loading", !0);
function a(n) {
if (_i_("18c:1051"), t._lists.length = 0, null === n) return _r_();
Array.prototype.push.apply(t._lists, t._prepareListsData(n.lists, e)), t.emit("liststore:loading", !1), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
function s(n) {
_i_("18c:1052"), t._fetchedHotelIds[e.hotel_id] = !0;
var r = t._prepareListsData(n.lists, e);
r.forEach(function(e) {
_i_("18c:1873");
var i = t.getListById(e.id);
i ? (i.hotels || (i.hotels = []), e.hotels.forEach(function(e) {
_i_("18c:2300");
var n = t.getHotelById({
list_id:i.id,
hotel_id:t.getHotelId(e)
});
n || i.hotels.push(e), _r_();
})) :t._lists.push(e), _r_();
}), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
return e.hotel_id ? r.list(n.extend({}, e), s) :r.list(n.extend({}, e), a), _r_(i);
}, c.prototype.clearCache = function() {
_i_("18c:721"), this._lists.length = 0, _r_();
}, i.exports = new c(), _r_();
}), B.define("lists/listview-header/listview-header", function(e, t, i) {
"use strict";
_i_("18c:114");
var n = e("../listview-dropdown/listview-dropdown"), r = e("../lists-store/lists-store");
function o() {
_i_("18c:363");
var e = this, t = {
RENAME:".js-listview-header-list-rename",
REMOVE:".js-listview-header-list-remove"
};
function i() {
_i_("18c:722");
var i = r._lists.length <= 1;
e.el.find(t.REMOVE).toggleClass("g-hidden", i), _r_();
}
r.on("list:removed", $.proxy(i, e)), r.on("list:created", $.proxy(i, e)), this.el.delegate(t.RENAME, "click", function(t) {
_i_("18c:1053"), t.preventDefault(), n.renameList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(t.REMOVE, "click", function(t) {
_i_("18c:1054"), t.preventDefault(), n.removeList.call(e, e.getCurrentList()), _r_();
}), _r_();
}
i.exports = o, _r_();
}), B.define("lists/listview-touch/listview-touch", function(e, t, i) {
"use strict";
_i_("18c:115");
function n() {
_i_("18c:364"), $(document.body).toggleClass("listview--is-tablet", B.env.b_is_tdot_traffic), B.eventEmitter.bind("foldout:login:success", function() {
if (_i_("18c:1055"), !window.listView) return _r_();
window.listView.clearCache(), _r_();
}), _r_();
}
n.isEnabled = function() {
return _i_("18c:723"), _r_(B.env.b_is_tdot_traffic);
}, i.exports = n, _r_();
}), B.define("lists/listview-dropdown/listview-dropdown", function(e, t, i) {
"use strict";
_i_("18c:116");
var n = e("jquery"), r = e("../lists-tools/lists-tools"), o = e("../lists-store/lists-store"), a = e("../listview-touch/listview-touch");
function s() {
_i_("18c:365");
var e = this, t = "listview__dropdown";
a.isEnabled() && (t += " listview__dropdown--touch"), n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:t,
content:function() {
return _i_("18c:2095"), _r_(B.jstmpl("listview_dropdown").render({
lists:n.map(o._lists, function(e) {
return _i_("18c:2343"), _r_(n.extend({
name_short:r.ellipsis(e.name, 18)
}, e));
}),
lists_count:o._lists.length,
currentList:e.getCurrentList(),
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
b_lang:B.env.b_lang
}));
}
},
onrootready:function() {
_i_("18c:1874");
var t = 10004, i = this;
i.bind("show", function() {
_i_("18c:2228"), B.eventEmitter.trigger("listview:open-dropdown"), _r_();
}), i.root().css("z-index", t).delegate(".js-listview-change-list", "click", function(t) {
_i_("18c:2351"), t.preventDefault();
var r = n(t.currentTarget).data("id");
e.setCurrentList({
id:r
}), i.hide(), _r_();
}).delegate(".js-listview-rename-list", "click", function(t) {
_i_("18c:2329"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id"), o = e.getListById(r);
s.renameList.call(e, o), i.hide(), _r_();
}).delegate(".js-listview-remove-list", "click", function(t) {
_i_("18c:2301"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id");
s.removeList.call(e, {
id:r
}, function() {
_i_("18c:2350"), i.hide(), _r_();
}), _r_();
}).delegate(".js-listview-create-list", "click", function(t) {
_i_("18c:2229"), t.preventDefault(), t.stopPropagation();
var r = n.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"), ""));
if (!r) return _r_();
o.createList({
name:r
}).then(function(t) {
_i_("18c:2328"), e.setCurrentList({
id:t.id
}), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).delegate(".js-listview-header-dropdown"), _r_();
}
s.renameList = function(e) {
_i_("18c:724");
var t = n.trim(window.prompt(B.jstmpl.translations("dsf_rename_list_dialogue"), e.name));
if (!t) return _r_();
o.updateList({
list_id:e.id,
name:r.htmlEncode(t)
}), this.renderHeader(), _r_();
}, s.removeList = function(e, t) {
_i_("18c:725");
var i = n.trim(B.jstmpl.translations("wishlist_delete_prompt"));
window.confirm(i) && (o.removeList({
list_id:e.id
}), B.eventEmitter.trigger("listview:remove-list"), t && t()), _r_();
}, i.exports = s, _r_();
}), B.define("lists/listview-travel-party/listview-travel-party", function(e, t, i) {
"use strict";
_i_("18c:117");
var n = e("jquery"), r = e("../lists-tools/lists-tools");
function o(e) {
_i_("18c:366"), setTimeout(function() {
_i_("18c:1056"), e.resizeLightbox(), _r_();
}, 300), _r_();
}
function a() {
_i_("18c:367");
var e = this;
B.env.b_is_wishlist_singlepage || e.el.find(".b-selectbox__groupselection").bind("change", function() {
_i_("18c:1634"), o(e), _r_();
}), B.eventEmitter.bind("change:list:hotels", function(t, i) {
_i_("18c:1057");
var r = i.travel_group;
if ((!r || n.isEmptyObject(r)) && (r = {
rooms:1,
adults:2,
children:0
}), 1 === Number(r.rooms) && 0 === Number(r.children) && B.search.group("adults") === Number(r.adults)) return _r_();
B.search.group(r), B.env.b_is_wishlist_singlepage || o(e), _r_();
}), _r_();
}
a.buildUrlPart = function() {
_i_("18c:726");
var e = B.env.b_query_params_delimiter, t = n.map(B.search.group("childrenAges"), function(e) {
return _i_("18c:2031"), _r_("age=" + e);
}).join(e), i = e + r.stringifyUrl({
group_rooms:B.search.group("rooms"),
group_adults:B.search.group("adults"),
group_children:B.search.group("children")
}, e) + e + t;
return _r_(i);
}, a.buildAvailabilityParams = function() {
_i_("18c:727");
var e = r.pick(B.search.group("value"), "rooms", "adults", "children", "childrenAges");
return e.childrenAges && (e.childrenAges = e.childrenAges.join(" ")), _r_({
additional:e
});
}, i.exports = a, _r_();
}), B.define("lists/listview-calendar/listview-calendar", function(e, t, i) {
"use strict";
_i_("18c:118");
var n = e("../lists-tools/lists-tools"), r = e("../listview-hotel/listview-hotel"), o = e("../listview-availability/listview-availability");
function a() {
_i_("18c:368"), B.calendar2 && a._bindEvents.call(this), _r_();
}
a._bindEvents = function() {
_i_("18c:728");
function e(e, t, i) {
_i_("18c:1058"), e.availability[t] = i.toString(), e.availability[t + "_localized_date_short"] = B.formatter.date(i.toString(), "short_date_without_year"), _r_();
}
var t = 0, i = this, s = null;
this.el.find(".b-form-checkin .b-datepicker").calendar2($.extend({}, B.calendar2.checkinOptions, {
lazy:!1
})), this.el.find(".b-form-checkout .b-datepicker").calendar2($.extend({}, B.calendar2.checkoutOptions, {
lazy:!1
})), B.eventEmitter.bind("SEARCH:date_changed", function(r, _) {
if (_i_("18c:1635"), !s) return _r_();
"checkin" === _.type && e(s, "checkin", _.value), "checkout" === _.type && e(s, "checkout", _.value), s.availability.checkout || (a.ensureDates(), e(s, "checkout", B.search.dates("checkout"))), s.availability.checkin || (a.ensureDates(), e(s, "checkin", B.search.dates("checkin"))), t = setTimeout(function() {
if (_i_("18c:2188"), t && window.clearTimeout(t), !s) return _r_();
o.checkAvailability({
list:i.getCurrentList(),
hotels:[ s ],
dates:n.pick(s.availability, "checkin", "checkout")
}), B.eventEmitter.trigger("listview:check-single-hotel-availability"), s = null, _r_();
}, 100), _r_();
}), this.el.delegate(".js-listview-toggle-calendar", "click", function(e) {
_i_("18c:1636"), e.preventDefault(), s = i.getHotelFromEvent(e), r.setHotelProperty(s, "edit", !0);
var t = $(e.currentTarget).attr("data-type");
setTimeout(function() {
_i_("18c:2096"), i.el.find(".b-form-" + t + " .b-datepicker").trigger("showCalendar"), _r_();
}, 0), _r_();
}), _r_();
}, a.ensureDates = function() {
if (_i_("18c:729"), !(B.search.dates("checkin") instanceof B.Search.Date && B.search.dates("checkout") instanceof B.Search.Date)) {
var e = new Date();
B.search.dates("checkin", {
date:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}), B.search.dates("checkout") instanceof B.Search.MonthDate && B.search.dates("checkout", {
date:1,
month:B.search.dates("checkout").month,
year:B.search.dates("checkout").year
});
}
_r_();
}, i.exports = a, _r_();
}), B.define("lists/listview-note/listview-note", function(e, t, i) {
"use strict";
_i_("18c:119");
var n = e("../lists-api/lists-api").API;
function r(e) {
_i_("18c:369"), $(e).find("textarea").each(function() {
_i_("18c:1637"), this.setAttribute("style", "height:" + (this.scrollHeight - 5) + "px; overflow-y:hidden;"), _r_();
}).bind("input", function() {
_i_("18c:1059"), this.style.height = "auto", this.style.height = this.scrollHeight - 5 + "px", _r_();
}), _r_();
}
function o() {
return _i_("18c:370"), $.extend(this, {
noteInput:function(e, t) {
_i_("18c:1638");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-text");
return "string" == typeof t && n.val(t), _r_(n.val());
},
toggleNote:function(e, t) {
_i_("18c:1639");
var i = this.getHotelNodeById(e.id);
i.find(".js-listview-note").toggleClass("g-hidden", !t), t && i.find(".js-listview-note-text").focus(), r(i), _r_();
},
toggleWrapper:function(e, t) {
_i_("18c:1640");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-toggle-wrapper");
n.css("visibility", t ? "visible" :"hidden"), _r_();
},
toggleNoteControls:function(e, t, i) {
_i_("18c:1641");
var n = this.getHotelNodeById(e.id);
n.find(".listview-note__controls").toggleClass("g-hidden", !t), i && i.blur && n.find(".js-listview-note-text").blur(), _r_();
},
showSavedConfirmation:function(e) {
if (_i_("18c:1642"), "" === e.note) return _r_();
var t = this.getHotelNodeById(e.id), i = "listview-note__saved--showing", n = t.find(".js-listview-note-saved");
n.addClass(i), setTimeout(function() {
_i_("18c:2097"), n.removeClass(i), _r_();
}, 2e3), _r_();
},
setHotelNote:function(e) {
_i_("18c:1643");
var t = this, i = this.getHotelById(e);
i.note = e.note, this.noteInput(i, e.note), n.updateNote({
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
}, function() {
_i_("18c:2098"), t.showSavedConfirmation(i), _r_();
}), _r_();
},
_bindNoteEvents:function() {
_i_("18c:1644");
var e = this;
this.delegateEvents({
"click .js-listview-note-toggle":function(e) {
_i_("18c:2230"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !1), this.toggleNote(t, !0), _r_();
},
"mousedown .js-listview-note-save":function(e) {
_i_("18c:2231"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:this.noteInput(t)
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"mousedown .js-listview-note-remove":function(e) {
_i_("18c:2232"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !0), this.toggleNote(t, !1), this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:""
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"blur .js-listview-note-text":function(e) {
_i_("18c:2233");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).removeClass("listview-note__text--active"), this.toggleNoteControls(t, !1), t.note || this.noteInput(t) || (this.toggleNote(t, !1), this.toggleWrapper(t, !0)), _r_();
},
"focus .js-listview-note-text":function(e) {
_i_("18c:2234");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).addClass("listview-note__text--active"), this.toggleNoteControls(t, !0), _r_();
}
}), B.eventEmitter.bind("listview:rendered:hotels", function() {
_i_("18c:2099"), r(e.el), _r_();
}), B.eventEmitter.bind("listview:rendered:hotel", function(e, t) {
_i_("18c:2100"), r(t), _r_();
}), _r_();
}
}), _r_(this);
}
i.exports = o, _r_();
}), B.define("lists/listview-tabs/listview-tabs", function(e, t, i) {
"use strict";
_i_("18c:120");
function n(e) {
if (_i_("18c:371"), this._el = e.el, 0 === this._el.length) return _r_();
this._currentTab = null, this.currentTab(e.current), this.onSwitch = e.onSwitch, _r_();
}
n.prototype.currentTab = function(e) {
if (_i_("18c:730"), "undefined" == typeof e) return _r_(this._currentTab);
var t = this._el.find('[data-tab="' + e + '"]');
if (0 === t.length) throw new Error("[listview-tabs] No such tab");
this._currentTab = e;
var i = t.data("tab-template");
i && 0 === t.children().length && t.html(B.jstmpl(i).render()), "function" == typeof this.onSwitch && this.onSwitch(e, t), this._el.find("[data-tab]").not(t).addClass("g-hidden"), t.removeClass("g-hidden"), _r_();
}, i.exports = n, _r_();
}), B.define("lists/listview-share/listview-share", function(e, t, i) {
"use strict";
_i_("18c:121");
var n = e("jquery");
function r() {
_i_("18c:372");
var e = this;
if ("0" === B.env.auth_level) return this.delegateEvents({
"click .js-listview-share-link":function(e) {
_i_("18c:1875"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}
}), _r_();
var t = n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:"listview-share",
content:function() {
return _i_("18c:2032"), _r_(B.jstmpl("listview_share").render(e.getCurrentList()));
}
},
selectInput:function() {
_i_("18c:1769");
function e() {
_i_("18c:2033"), this.root().find(".js-listview-share-url").select(), _r_();
}
setTimeout(e.bind(this), 100), _r_();
},
handleClick:function(e) {
_i_("18c:1770"), e.preventDefault(), this.selectInput(), _r_();
},
onrootready:function() {
_i_("18c:1771");
var e = 10004;
this.bind("show", this.selectInput.bind(this)), this.root().css("z-index", e).delegate(".js-listview-share-url", "click", this.handleClick.bind(this)), B.et.goal("wl_invite_friends"), _r_();
}
});
t.delegate(".js-listview-share-link"), _r_();
}
i.exports = r, _r_();
}), B.define("lists/lists-listview/lists-listview", function(e, t, i) {
"use strict";
_i_("18c:122");
var n = e("../lists-tools/lists-tools"), r = e("../lists-api/lists-api"), o = e("../lists-api/lists-api").API, a = e("../lists-store/lists-store"), s = e("../listview-dropdown/listview-dropdown"), _ = e("../listview-travel-party/listview-travel-party"), c = e("../listview-calendar/listview-calendar"), l = e("../listview-header/listview-header"), u = e("../listview-touch/listview-touch"), d = e("../listview-tabs/listview-tabs"), h = (e("../listview-note/listview-note"), e("../listview-share/listview-share")), p = e("../listview-header/listview-create-list"), f = e("../listview-template/listview-template"), g = e("../listview-hotel/listview-hotel"), m = e("../listview-availability/listview-availability");
function v(e) {
_i_("18c:373");
this.el = e.el, this._currentList = {
id:"",
hotels:[],
name:"",
url:"",
privacy:"",
hotels_count:0
}, this.store = a, this._isShown = !1, a.on("hotel:init", function(e) {
_i_("18c:1060"), m.setHotelAvailability(e, e.availability || {}, {
updateNights:!0,
silent:!0
}), _r_();
}), u.isEnabled() && u.call(this), this.tabs = new d({
el:this.el,
current:"main",
onSwitch:function(e) {}
}), _r_();
}
v.prototype.renderHeader = function() {
_i_("18c:731");
var e = B.jstmpl("listview_header").render($.extend({
currentList:this.getCurrentList(),
currentTabName:this.tabs.currentTab()
}, f.getEnv()));
this.el.find(".js-listview-header-wrapper").html(e).loadComponents(), _r_();
}, v.prototype.getHotelById = function(e) {
return _i_("18c:732"), e.list_id = e.list_id || this.getCurrentList().id, _r_(a.getHotelById(e));
}, v.prototype.getHotelNodeById = function(e) {
return _i_("18c:733"), _r_(this.el.find('.listview-hotel[data-id="' + String(e) + '"]'));
}, v.prototype.getHotelFromEvent = function(e) {
_i_("18c:734");
var t = $(e.currentTarget).closest(".listview-hotel"), i = t.attr("data-id");
return _r_(t && this.getHotelById({
hotel_id:i
}));
}, v.prototype.delegateEvents = function(e) {
_i_("18c:735");
for (var t in e) {
var i = t.split(" ");
this.el.delegate(i[1], i[0], e[t].bind(this));
}
return _r_(this);
}, v.prototype._bindEvents = function() {
_i_("18c:736");
var e = this;
a.on("list:hotels:loading", function(t) {
_i_("18c:1645"), e.tabs.currentTab(t ? "loader" :"main"), _r_();
}), a.on("list:removed", function(t) {
if (_i_("18c:1646"), String(e.getCurrentList().id) !== String(t.list_id)) return _r_();
var i = a.getListByIndex(0);
if (!i) return _r_();
e.setCurrentList(i), _r_();
}), a.on("change:hotel_b_undo", function(t) {
_i_("18c:1647"), e.renderHotel(t), o.updateHotels({
list_id:e.getCurrentList().id,
hotel_ids:[ t.hotel_id ],
states:[ t.b_undo ? 0 :1 ]
}), _r_();
}), a.on("change:hotel_loading", function(t) {
_i_("18c:1648"), e.getHotelNodeById(t.id).toggleClass("listview-hotel--loading", t.loading), _r_();
}), a.on("change:hotel_hidden", function(t) {
_i_("18c:1649"), setTimeout(function() {
_i_("18c:2101");
var i = e.getHotelNodeById(t.id);
t.hidden ? i.hide() :i.slideDown(), _r_();
}, 0), _r_();
}), B.eventEmitter.bind("change:list", function(t, i) {
_i_("18c:1650"), i && (a.getHotels(i).then(function() {
_i_("18c:2235"), e.renderHotels(i), B.eventEmitter.trigger("change:list:hotels", i), _r_();
}), e.renderHeader()), _r_();
}), B.eventEmitter.bind("lists:hotels:added", function() {
_i_("18c:1651"), e.setCurrentList({
id:e.getCurrentList().id
}), _r_();
}), B.eventEmitter.bind("hotels:before:removed", function(t, i) {
_i_("18c:1652");
var n = i.hotels[0];
e.getHotelNodeById(n.id).slideUp(function() {
_i_("18c:2102"), e.updateRootClassNames(), e.renderHeader(), _r_();
}), _r_();
}), B.eventEmitter.bind("change:hotel", function(t, i) {
_i_("18c:1653"), e.renderHotel(i), _r_();
});
var t = !1;
this.delegateEvents({
"click .js-go-to-list":function() {
_i_("18c:1876"), B.eventEmitter.trigger("listview:go-to-listmap-page"), _r_();
},
"click .js-listview-hotel-title":function() {
_i_("18c:1877"), B.eventEmitter.trigger("listview:click-on-hotel-link"), _r_();
},
"click .js-listview-hotel-image":function() {
_i_("18c:1878"), B.eventEmitter.trigger("listview:click-on-hotel-image"), _r_();
},
"click .js-listview-book":function() {
_i_("18c:1879"), B.eventEmitter.trigger("listview:book-now-clicked"), _r_();
},
"click .js-check-availability":function(e) {
_i_("18c:1880"), e.preventDefault(), c.ensureDates(), t || (t = !0), B.eventEmitter.trigger("listview:check-all-hotels-availability"), m.checkAvailability({
list:this.getCurrentList(),
dates:{
checkin:B.search.dates("checkin").toString(),
checkout:B.search.dates("checkout").toString()
}
}), _r_();
},
"click .js-listview-add":function(e) {
_i_("18c:1881"), e.preventDefault(), a.addHotels({
hotels:[ r.currentHotel() ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-listview-add-hotel":function(e) {
_i_("18c:1882"), e.preventDefault();
var t = $(e.currentTarget).attr("data-hotel-id");
a.addHotels({
hotels:[ {
b_hotel_id:t
} ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-remove-hotel":function(e) {
_i_("18c:1883"), e.preventDefault();
var t = this.getHotelFromEvent(e);
g.setHotelProperty(t, "b_undo", !0), _r_();
},
"click .js-listview-undo":function(e) {
_i_("18c:1884"), e.preventDefault();
var t = this.getHotelFromEvent(e);
g.setHotelProperty(t, "b_undo", !1), _r_();
},
"click .js-listview-footer-signin-link":function(e) {
_i_("18c:1885"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
},
"click .js-listview-footer-remove-msg":function(t) {
_i_("18c:1886"), t.preventDefault(), e.toggleSigninBlock(!1), _r_();
},
"click .js-listview-tab-toggle-map":function(e) {
_i_("18c:1887"), e.preventDefault(), "main" === this.tabs.currentTab() ? this.tabs.currentTab("map") :this.tabs.currentTab("main"), _r_();
},
"click .js-listview-signin-banner-remove":function(e) {
_i_("18c:1888"), e.preventDefault(), $.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), this.renderHotels(this.getCurrentList()), _r_();
}
}), B.env.b_is_shared_wishlist && ($(".js-listview-footer-signin-link").on("click", function(e) {
_i_("18c:1889"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}), $(".js-listview-signin-banner-remove").on("click", function(e) {
_i_("18c:1890"), e.preventDefault(), $.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), $(this).closest(".listview-signin-banner").remove(), _r_();
})), B.env.b_is_wishlist_singlepage || $(window).resize(n.throttle(function() {
_i_("18c:2034"), e.resizeLightbox(), _r_();
}, 1e3)), c.call(this), s.call(this), u.isEnabled() || _.call(this), l.call(this), h.call(this), p.call(this), this._bindGA(), _r_();
}, v.prototype.toggleSigninBlock = function(e) {
_i_("18c:737"), this.el.find(".js-listview-footer-signin").toggleClass("g-hidden", !e), e || $.cookie("tfl_listview_lightbox_show_signin_block", 1, {
expires:999,
path:"/"
}), B.env.b_is_wishlist_singlepage || this.resizeLightbox(), _r_();
}, v.prototype._bindGA = function() {
_i_("18c:738");
var e = [ "listview:show", "listview:hide", "listview:open-dropdown", "listview:go-to-listmap-page", "listview:remove-hotel", "listview:check-single-hotel-availability", "listview:check-all-hotels-availability", "listview:remove-list", "listview:book-now-clicked", "listview:click-on-hotel-link", "listview:click-on-hotel-image" ];
B.eventEmitter.bind(e.join(" "), function(e) {
_i_("18c:1891");
var t = {
loggedIn:B.env.b_user_auth_level_is_low ? "logged_in" :"logged_out",
pb:B.env.b_reg_user_detail_bookings_count,
ac:B.env.b_action
};
this.getCurrentList() && this.getCurrentList().hotels && $.extend(t, {
L:a._lists.length,
H:this.getCurrentList().hotels.length,
pr:this.getCurrentList().privacy
}), B.google.trackEvent("Listview", e.type.toString(), n.stringifyUrl(t, " : ")), _r_();
}.bind(this)), _r_();
}, v.prototype.clearCache = function() {
return _i_("18c:739"), _r_(a.clearCache());
}, v.prototype.getLists = function() {
_i_("18c:740");
var e = {};
$.extend(e, {
with_hotels:0,
include_availability:0
});
var t = a.fetch(e);
return _r_(t);
}, v.prototype.getListById = function(e) {
return _i_("18c:741"), _r_(a.getListById(e));
}, v.prototype.getCurrentList = function() {
return _i_("18c:742"), _r_(this._currentList);
}, v.prototype.setCurrentList = function(e) {
_i_("18c:743");
var t = this;
if (this._currentList = this.getListById(e.id), !this._currentList) return _r_(null);
return setTimeout(function() {
_i_("18c:1654"), B.env.b_is_shared_wishlist || B.eventEmitter.trigger("change:list", t._currentList), t.lastSelectedListId = t._currentList.id, _r_();
}, 0), _r_(this._currentList);
}, v.prototype.removeRackRateLoadingIcon = function(e) {
if (_i_("18c:744"), !e) return _r_();
setTimeout(function() {
_i_("18c:1655"), e.find(".js-listview-rack-rate-animated, .js-listview-price-animated").removeClass("listview-rack-rate-animated listview-price-animated"), _r_();
}, 1500), _r_();
}, v.prototype.renderHotel = function(e) {
_i_("18c:745");
var t = B.jstmpl("listview_hotel").render(f.prepare(e));
this.getHotelNodeById(e.id).replaceWith(t), B.eventEmitter.trigger("listview:rendered:hotel", this.getHotelNodeById(e.id)), this.removeRackRateLoadingIcon(this.getHotelNodeById(e.id)), _r_();
}, v.prototype.renderHotels = function(e) {
_i_("18c:746");
var t = this, i = $.extend({
hotels_count:e.hotels_count,
hotels:e.hotels.map(function(e) {
return _i_("18c:2103"), _r_(f.prepare(e));
}),
showListsSurvey:B.env.showListsSurvey,
b_show_bbtool_sr_admin_favourite_hotel_badge:B.env.b_show_bbtool_sr_admin_favourite_hotel_badge ? 1 :0
}, f.getEnv(), r.currentHotel()), n = this.el.find(".js-listview-hotels"), o = B.jstmpl("listview_hotels").render(i);
return n.html(o), "function" == typeof n.loadComponents && n.loadComponents(), this.updateRootClassNames(), B.env.b_is_wishlist_singlepage || setTimeout(function() {
_i_("18c:1892"), t.resizeLightbox(), _r_();
}, 0), B.eventEmitter.trigger("listview:rendered:hotels"), this.removeRackRateLoadingIcon(n), _r_(this);
}, v.prototype.updateRootClassNames = function() {
_i_("18c:747");
var e = this.getCurrentList(), t = B.jstmpl("listview_root_classnames").render({
b_action:B.env.b_action,
shown:this._isShown,
isEmpty:e.hotels && 0 === e.hotels.length,
currentList:e,
singlePage:B.env.b_is_wishlist_singlepage
});
this.el.get(0).className = t, _r_();
}, v.prototype.show = function() {
_i_("18c:748");
var e = this;
this._binded || (this._bindEvents(), this._binded = !0), e._isShown = !0, B.eventEmitter.trigger("listview:show", this), B.events.trigger("listview:show", this);
var t = "listview_lightbox";
this.updateRootClassNames(), this.renderHeader(), B.env.b_is_wishlist_singlepage || B.lightbox.show(e.el, {
bAnimation:!0,
customWrapperClassName:t,
hideCallBack:function() {
_i_("18c:2104"), B.eventEmitter.trigger("listview:hide"), e._isShown = !1, e.updateRootClassNames(), _r_();
}
}), $(".user_center_popover").hide(), "myreservations" === B.env.b_action && setTimeout(function() {
_i_("18c:1893"), $(".modal-mask").css("zIndex", 10003), _r_();
}, 0), B.env.auth_level < 1 && !$.cookie("tfl_listview_lightbox_show_signin_block") && this.getCurrentList().hotels_count > 2 && this.toggleSigninBlock(!0), _r_();
}, v.prototype.isShown = function() {
return _i_("18c:749"), _r_(this._isShown);
}, v.prototype.resizeLightbox = function() {
_i_("18c:750");
var e = this.el.find(".listview-footer").outerHeight();
e = e > 0 ? e + 15 :e;
var t = $(".listview_lightbox").height(), i = this.el.find(".listview__controls"), n = i.is(":visible") ? this.el.find(".listview__controls").outerHeight() :0;
this.el.find(".js-listview-hotels").height(t - (75 + n) - e), _r_();
}, i.exports = v, _r_();
}), B.define("component/lists/listview-empty-list", function(e, t, i) {
"use strict";
_i_("18c:123");
var n = e("../lists-api/lists-api").API, r = {
_hotels:[],
get:function(e) {
_i_("18c:1061");
var t = this;
n.getRecentlyViewed({
limit:5
}, function(i) {
_i_("18c:1894"), t._hotels = i.hotels, e(null, t._hotels), _r_();
}), _r_();
}
};
i.exports = e("component").extend({
tmpl:B.jstmpl("listview_empty_list_recently_viewed"),
state:{
recentlyViewedHotels:[]
},
setState:function(e) {
_i_("18c:1459"), $.extend(this.state, e), this.render(), _r_();
},
fetch:function() {
_i_("18c:1460");
var e = this;
r.get(function(t, i) {
_i_("18c:2035"), e.setState({
recentlyViewedHotels:i
}), _r_();
}), _r_();
},
render:function() {
_i_("18c:1461");
var e = this.tmpl.render(this.state);
this.$el.html(e), this.$el.find(".js-listview-empty-list-recently-viewed").hide().slideDown(), _r_();
},
init:function() {
_i_("18c:1462"), this.render(), this.fetch(), _r_();
}
}), _r_();
}), B.define("lists/listview-template/listview-template", function(e, t, i) {
"use strict";
_i_("18c:124");
var n = e("../lists-tools/lists-tools"), r = e("../listview-travel-party/listview-travel-party"), o = e("../listview-touch/listview-touch"), a = e("../lists-store/lists-store");
i.exports = {
getEnv:function() {
return _i_("18c:1062"), _r_({
b_action:B.env.b_action,
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
has_cookie_tfl_listview_show_signin_banner:Boolean($.cookie("tfl_listview_show_signin_banner")),
is_desktop:"1" === B.env.b_site_type_id,
is_logged_in:B.env.auth_level > 0,
b_lang_is_rtl:B.env.rtl,
is_inside_listview:1,
b_reg_user_wishlist_remaining:B.env.b_reg_user_wishlist_remaining,
b_wishlist_referrer:B.env.b_wishlist_referrer
});
},
buildHotelLink:function(e, t) {
_i_("18c:1063");
var i = "maxotel_rooms", a = "editDates", s = 0 === e.url.indexOf("http") ? e.url :B.env.b_nonsecure_hostname + e.url, _ = B.env.b_query_params_delimiter, c = e.availability && e.availability.checkin && e.availability.checkout;
return c && (s = s + _ + n.stringifyUrl(n.pick(e.availability, "checkin", "checkout"), _)), o.isEnabled() || (s += r.buildUrlPart()), t && t.from_list && (s = s + _ + "from_list=1"), B.env.b_label && (s = s + _ + "label=" + B.env.b_label), B.env.b_aid && !/aid=/.test(s) && (s = s + _ + "aid=" + B.env.b_aid), t && t.goToRoomTable && (s = s + "#" + (c ? i :a)), _r_(s);
},
prepare:function(e, t) {
_i_("18c:1064");
var i = {
from_list:1
}, n = 35;
$.extend(i, {
goToRoomTable:!0
});
var r = $.extend({}, e, {
id:a.getHotelId(e),
b_guest_country:B.env.b_guest_country,
b_countrycode:e.cc1,
b_bookings_owned:B.env.b_bookings_owned,
b_partner_channel_id:B.env.b_partner_channel_id,
absolute_url:this.buildHotelLink(e),
book_now_url:this.buildHotelLink(e, i),
has_availability:!$.isEmptyObject(e.availability) && "undefined" != typeof e.availability.is_available,
available:Boolean(e.availability.is_available),
edit:Boolean(e.edit),
hotel_min_rate_num:parseFloat(e.hotel_min_rate_num),
hotel_review_score_non_localized:parseFloat(e.hotel_review_score_non_localized ? e.hotel_review_score_non_localized :e.hotel_review_score),
name_ellipsis:e.name && e.name.length > n ? e.name.slice(0, n) + "&hellip;" :e.name
}, this.getEnv(), t);
return r.availability && (r.availability.checkin && r.availability.checkout && (r.availability.nights = B.Search.createDate(r.availability.checkout).valueOf() - B.Search.createDate(r.availability.checkin).valueOf()), r.min_rate_availability = r.availability.is_available ? r.availability.price :void 0, r.b_rooms_left = r.availability.rooms_available), _r_(r);
}
}, _r_();
}), B.define("lists/listview-hotel/listview-hotel", function(e, t, i) {
"use strict";
_i_("18c:125");
var n = e("../lists-store/lists-store");
i.exports = {
setHotelProperty:function(e, t, i) {
return _i_("18c:1065"), e[t] = i, n.emit("change:hotel_" + t, e, t), _r_(e);
}
}, _r_();
}), B.define("lists/listview-availability/listview-availability", function(e, t, i) {
"use strict";
_i_("18c:126");
var n = e("../lists-api/lists-api").API, r = e("../lists-store/lists-store"), o = e("../listview-hotel/listview-hotel"), a = e("../listview-touch/listview-touch"), s = e("../listview-travel-party/listview-travel-party");
i.exports = {
setHotelAvailability:function(e, t, i) {
_i_("18c:1066"), e.availability = t, i && i.silent || B.eventEmitter.trigger("change:hotel", e), _r_();
},
checkAvailability:function(e, t) {
_i_("18c:1067");
var i = this, _ = e.list, c = e.dates, l = e.hotels || _.hotels;
l.forEach(function(e) {
_i_("18c:1895"), o.setHotelProperty(e, "loading", !0), _r_();
});
var u = $.extend({
hotel_ids:l.map(r.getHotelId),
list_id:_.id
}, c);
a.isEnabled() || $.extend(u, s.buildAvailabilityParams()), n.getAvailability(u, function(e) {
_i_("18c:1896"), l.forEach(function(t) {
_i_("18c:2236"), o.setHotelProperty(t, "edit", !1), o.setHotelProperty(t, "loading", !1);
var n = r.getHotelId(t);
e[n] && i.setHotelAvailability(t, e[n], {
updateNights:!0
}), _r_();
}), t && t(), _r_();
}), _r_();
}
}, _r_();
}), B.define("lists/listview-header/listview-create-list", function(e, t, i) {
"use strict";
_i_("18c:127");
var n = (e("../lists-tools/lists-tools"), e("../lists-store/lists-store"));
e("../listview-touch/listview-touch");
function r() {
_i_("18c:374");
var e = this;
$(".js-listview-header-wrapper").on("click", ".js-listview-create-list", function(t) {
_i_("18c:1068"), t.preventDefault(), t.stopPropagation();
var i = ($(t.target), $.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"), "")));
if (!i) return _r_();
n.createList({
name:i
}).then(function(t) {
_i_("18c:1897"), e.setCurrentList({
id:t.id
}), t.remaining < 1 && (B.env.b_reg_user_wishlist_remaining = 0), _r_();
}), _r_();
}), _r_();
}
i.exports = r, _r_();
}), B.define("require_absolute", function(e, t, i) {
_i_("18c:128"), i.exports = function(t) {
return _i_("18c:751"), _r_(e(t.replace(/^.*components\//g, "")));
}, _r_();
});

function init() {
_i_("18c:1"), B.require([ "require_absolute" ], function(e) {
_i_("18c:375");
var t = B.env.b_is_tdot_traffic, i = e("../../components/lists/lists-api/lists-api"), n = e("../../components/lists/lists-store/lists-store"), r = e("../../components/lists/lists-listview/lists-listview");
function o(e) {
_i_("18c:752"), e.getLists().then(function() {
_i_("18c:1656");
var t = e.getListById(i.getLastChangedListId());
e.lastSelectedListId ? e.setCurrentList({
id:e.lastSelectedListId
}) :t ? e.setCurrentList({
id:t.id
}) :e.setCurrentList({
id:n.getListByIndex(0).id
}), e.show(), _r_();
}), _r_();
}
if (t) return _r_();
if (!B.env.is_listview_page) return _r_();
var a = new r({
el:$(".listview_lightbox__container")
});
window.listView = a, $(".js-uc-listview-lightbox").click(function(e) {
_i_("18c:1069"), e.preventDefault(), t && $(".select_foldout").hide(), o(a), _r_();
}), B.env.b_run_tfl_move_away_from_lightbox && $(".js-uc-wishlists-trigger").click(function(e) {
return _i_("18c:1657"), e.preventDefault(), window.location.href = B.env.b_wishlist_singlepage_url, _r_();
});
var s = function() {
_i_("18c:1070"), a && !a.isShown() && a.clearCache(), _r_();
};
B.eventEmitter.bind("wl:create", s), B.eventEmitter.bind("wl:edithotel", s);
var _ = $.grep([ ".js-wishlist-added-to-name-link", ".js-open-list", '.js-uc-notification-link[href*="wl_id="]', 'a[href*="/mywishlist"][href*="wl_id="]' ], Boolean);
if ($(document.body).undelegate(".wl-dropdown-link", "click"), $(document.body).delegate(_.join(","), "click", function(e) {
if (_i_("18c:1071"), !B.env.is_listview_page) return _r_();
if (B.env.b_run_tfl_move_away_from_lightbox) return window.location.href = e.target.href, _r_();
var t = i.getIdFromUrl($(e.currentTarget).attr("href"));
t && (e.preventDefault(), a.getLists().then(function() {
_i_("18c:2105"), a.setCurrentList({
id:t
}), a.show(), _r_();
})), _r_();
}), B.env.b_is_wishlist_singlepage) {
var c = i.getIdFromUrl(window.location.href);
"null" != c && B.env.auth_level > 0 ? a.getLists().then(function() {
_i_("18c:1898"), a.setCurrentList({
id:c
}), a.show(), _r_();
}) :o(a), $(".listview__controls").stick_in_parent({
sticky_class:"listview__controls--sticky"
});
}
_r_();
}), _r_();
}

B[sNSStartup].listView = {
init:init
}, booking[sNSStartup].wlData = function(e) {
_i_("18c:247");
var t = e.require("jquery"), i = {}, n = {
EDIT:"wl:edit",
FETCH:"wl:fetch",
CREATE:"wl:create",
REMOVE:"wl:remove",
EDITHOTEL:"wl:edithotel",
EDITHOTELSTART:"wl:edithotelstart",
EDITHOTELS:"wl:edithotels",
EDITHOTELSSTART:"wl:edithotelsstart",
LOADINGSTART:"wl:loadingstart",
LOADINGEND:"wl:loadingend"
}, r = {
RECENTLY_VIEWED:3
};
function o(e) {
return _i_("18c:542"), _r_(t.extend(e || {}, {
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id,
stid:booking.env.b_stid,
label:booking.env.b_label
}));
}
function a(e, r) {
_i_("18c:543"), r = o(r);
var a = e + t.param(r);
if (a in i) return _r_(i[a]);
var _ = booking.promise();
return s(n.LOADINGSTART, {
params:r
}), t.ajax({
type:"POST",
url:e,
data:r,
success:function(e) {
_i_("18c:1773"), _.fulfill({
params:r,
result:e
}), _r_();
},
error:function(e) {
_i_("18c:1774"), _.reject(e), _r_();
},
complete:function() {
_i_("18c:1775"), s(n.LOADINGEND, {
params:r
}), _r_();
}
}), i[a] = _, _r_(_);
}
function s(t, i) {
return _i_("18c:544"), e.eventEmitter.trigger(t, i), _r_(i);
}
function _(e) {
_i_("18c:545");
var i = "is_new", n = "creation_timestamp", r = [ "is_collaborated", "privacy", "selected" ];
t.each(e, function(e, o) {
_i_("18c:1463"), t.each(r, function(e, t) {
_i_("18c:2036"), t in o && (o[t] = Boolean(Number(o[t]))), _r_();
}), n in o && (o[i] = 1e3 * o[n] > new Date() - 864e5), _r_();
}), _r_();
}
return _r_({
init:function() {},
EVENTS:n,
TYPE:r,
edit:function() {},
fetch:function(e) {
return _i_("18c:1074"), _r_(a("/wishlist/get", e).then(function(e) {
return _i_("18c:1899"), _(e.result.lists), _r_(s(n.FETCH, e));
}));
},
create:function(e) {
return _i_("18c:1075"), this.clearCache(), _r_(a("/wishlist/create", e).then(function(i) {
if (_i_("18c:1900"), _([ i.result ]), "string" == typeof e.hotel_ids) {
var r = e.hotel_ids.split(",");
t.each(r, function(e, r) {
_i_("18c:2302"), s(n.EDITHOTEL, {
params:t.extend({
hotel_id:r,
lists:i.result.id
}, i.params),
result:i.result
}), _r_();
});
}
return _r_(s(n.CREATE, i));
}));
},
remove:function() {},
editHotels:function(e) {
_i_("18c:1077"), this.clearCache(), s(n.EDITHOTELSSTART, e);
var i = e.hotel_ids, r = new Array(i.length + 1).join("1").split("");
return t.isArray(i) && (e.hotel_ids = i.join(",")), _r_(a("/wishlist/save_hotels", t.extend({
new_states:r.join(",")
}, e)).then(function(e) {
return _i_("18c:1901"), t.each(i, function(i, r) {
_i_("18c:2237"), s(n.EDITHOTELS, {
params:t.extend({
hotel_id:r
}, e.params),
result:e.result
}), _r_();
}), _r_(e);
}));
},
editHotel:function(e) {
return _i_("18c:1078"), this.clearCache(), s(n.EDITHOTELSTART, e), _r_(a("/wishlist/save_hotel", e).then(function(e) {
return _i_("18c:1902"), _r_(s(n.EDITHOTEL, e));
}));
},
checkWishlisted:function(e) {
return _i_("18c:1079"), this.clearCache(), _r_(a("/wishlist/wishlisted_hotels", e));
},
clearCache:function() {
_i_("18c:1080"), i = {}, _r_();
},
bind:function(t, i, n) {
_i_("18c:1081"), e.eventEmitter.bind(t, function() {
_i_("18c:1903"), i.apply(n, arguments), _r_();
}), _r_();
}
});
}(booking), B.define("lists/lists-recently-viewed/lists-recently-viewed", function(e, t, i) {
"use strict";
_i_("18c:129");
var n = e("../lists-api/lists-api"), r = e("../lists-api/lists-api").API, o = e("../lists-store/lists-store"), a = [];
i.exports = {
recentlyViewedHotels:a,
addHotelsToList:function(e) {
_i_("18c:1082");
var t = this;
o.addHotels({
list_id:e.id,
hotels:t.recentlyViewedHotels
}).then(function() {
_i_("18c:1904"), t.onAddedtoList(e), _r_();
}), _r_();
},
onAddedtoList:function(e) {
if (_i_("18c:1083"), this.renderAddRecentlyViewedToList({
success:1,
recently_viewed_list_name:e.name,
recently_viewed_list_url:e.url
}), window.listView && !B.env.b_run_tfl_move_away_from_lightbox) {
var t = window.listView;
t.setCurrentList({
id:e.id
}), t.show();
}
_r_();
},
toggleLoader:function(e) {
_i_("18c:1084"), $(".js-add-recently-viewed-to-list-loader").toggleClass("g-hidden", !e), _r_();
},
addBinds:function() {
_i_("18c:1085");
var e = this;
function t() {
_i_("18c:1658");
var t = o.getListByDefaultListId(n.type.RECENTLY_VIEWED);
B.env.auth_level < 1 && (t = o.getListById("0"));
var i = booking.promise();
if (t) i.fulfill(t); else {
var r = $.trim($(".js-uc-viewed-hotels-trigger").text());
i.fulfill(o.createList({
name:r,
default_list:n.type.RECENTLY_VIEWED
}));
}
i.then(function(t) {
_i_("18c:2106"), e.addHotelsToList(t), _r_();
}), _r_();
}
$(".uc_viewedhotels").delegate(".js-save-recently-viewed", "click", function() {
_i_("18c:1905");
var i = {};
2 != B.et.track("fERXeNRJTBYbBeaPbPELXVC") && (i.limit = 5), e.toggleLoader(!0), r.getRecentlyViewed(i, function(i) {
_i_("18c:2238"), e.recentlyViewedHotels = i.hotels, o.fetch({}).then(t), _r_();
}), _r_();
}), _r_();
},
renderAddRecentlyViewedToList:function(e) {
_i_("18c:1086");
var t = $(".uc_viewedhotels .user_search_item:not(.no_listing)").length;
if (0 === t) return _r_();
var i = $.extend(e, {
wl_recently_viewed_loader:B.tools.jsStaticUrl("/static/img/wl-recently-viewed-loader.gif"),
properties_length:t
});
$(".save-recently-viewed-container").remove(), $(".popover_footer_add_to_list").prepend(B.jstmpl("lists_recently_viewed").render(i)), B.eventEmitter.trigger("recently_viewed_properties_nav_trigger"), _r_();
},
init:function() {
_i_("18c:1087"), booking.eventEmitter.bind("uc_recently_viewed_loaded", this.renderAddRecentlyViewedToList.bind(this)), this.addBinds(), _r_();
}
}, _r_();
}), B.define("lists/lists-header-button/lists-header-button", function(e, t, i) {
"use strict";
_i_("18c:130");
var n = e("../lists-store/lists-store"), r = e("../listview-touch/listview-touch");
i.exports = B.require("component").extend({
init:function() {
_i_("18c:1464");
var e = booking[sNSStartup].wlData, t = this.$el.find(".js-lists-header-button"), i = "lists-header-button--flash", o = [ e.EVENTS.EDITHOTEL ];
B.eventEmitter.bind(o.join(" "), function(e, n) {
_i_("18c:2037"), t.addClass(i), setTimeout(function() {
_i_("18c:2276"), t.removeClass(i), _r_();
}, 600), _r_();
}), n.on("liststore:loading", function(e) {
_i_("18c:2038"), $(".lists-header-button").toggleClass("lists-header-button--loading", e), r.isEnabled() && $(".js-uc-listview-lightbox").toggleClass("uc-listview-loading", e), _r_();
}), _r_();
}
}), _r_();
}), B.require([ "require" ], function(e) {
_i_("18c:131");
var t = e("lists/lists-recently-viewed/lists-recently-viewed");
t.init(), B.define("component/lists-header-button", function() {
return _i_("18c:753"), _r_(e("lists/lists-header-button/lists-header-button"));
}), _r_();
}), /* @preserve
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
function(e, t) {
_i_("18c:132");
var i = {};
i.version = "0.3.2", i.settings = {
currency:{
symbol:"$",
format:"%s%v",
decimal:".",
thousand:",",
precision:2,
grouping:3
},
number:{
precision:0,
grouping:3,
thousand:",",
decimal:"."
}
};
var n = Array.prototype.map, r = Array.isArray, o = Object.prototype.toString;
function a(e) {
return _i_("18c:376"), _r_(!!("" === e || e && e.charCodeAt && e.substr));
}
function s(e) {
return _i_("18c:377"), _r_(r ? r(e) :"[object Array]" === o.call(e));
}
function _(e) {
return _i_("18c:378"), _r_(e && "[object Object]" === o.call(e));
}
function c(e, t) {
_i_("18c:379");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
}
function l(e, t, i) {
_i_("18c:380");
var r, o, a = [];
if (!e) return _r_(a);
if (n && e.map === n) return _r_(e.map(t, i));
for (r = 0, o = e.length; o > r; r++) a[r] = t.call(i, e[r], r, e);
return _r_(a);
}
function u(e, t) {
return _i_("18c:381"), e = Math.round(Math.abs(e)), _r_(isNaN(e) ? t :e);
}
function d(e) {
_i_("18c:382");
var t = i.settings.currency.format;
if ("function" == typeof e && (e = e()), a(e) && e.match("%v")) return _r_({
pos:e,
neg:e.replace("-", "").replace("%v", "-%v"),
zero:e
});
if (!e || !e.pos || !e.pos.match("%v")) return _r_(a(t) ? i.settings.currency.format = {
pos:t,
neg:t.replace("%v", "-%v"),
zero:t
} :t);
return _r_(e);
}
var h = i.unformat = i.parse = function(e, t) {
if (_i_("18c:1088"), s(e)) return _r_(l(e, function(e) {
return _i_("18c:2107"), _r_(h(e, t));
}));
if (e = e || 0, "number" == typeof e) return _r_(e);
t = t || i.settings.number.decimal;
var n = new RegExp("[^0-9-" + t + "]", [ "g" ]), r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
return _r_(isNaN(r) ? 0 :r);
}, p = i.toFixed = function(e, t) {
_i_("18c:888"), t = u(t, i.settings.number.precision);
var n = Math.pow(10, t);
return _r_((Math.round(i.unformat(e) * n) / n).toFixed(t));
}, f = i.formatNumber = function(e, t, n, r) {
if (_i_("18c:889"), s(e)) return _r_(l(e, function(e) {
return _i_("18c:2039"), _r_(f(e, t, n, r));
}));
e = h(e);
var o = c(_(t) ? t :{
precision:t,
thousand:n,
decimal:r
}, i.settings.number), a = u(o.precision), d = 0 > e ? "-" :"", g = parseInt(p(Math.abs(e || 0), a), 10) + "", m = g.length > 3 ? g.length % 3 :0;
return _r_(d + (m ? g.substr(0, m) + o.thousand :"") + g.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + o.thousand) + (a ? o.decimal + p(Math.abs(e), a).split(".")[1] :""));
}, g = i.formatMoney = function(e, t, n, r, o, a) {
if (_i_("18c:890"), s(e)) return _r_(l(e, function(e) {
return _i_("18c:2040"), _r_(g(e, t, n, r, o, a));
}));
e = h(e);
var p = c(_(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:o,
format:a
}, i.settings.currency), m = d(p.format), v = e > 0 ? m.pos :0 > e ? m.neg :m.zero;
return _r_(v.replace("%s", p.symbol).replace("%v", f(Math.abs(e), u(p.precision), p.thousand, p.decimal)));
};
i.formatColumn = function(e, t, n, r, o, p) {
if (_i_("18c:754"), !e) return _r_([]);
var g = c(_(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:o,
format:p
}, i.settings.currency), m = d(g.format), v = m.pos.indexOf("%s") < m.pos.indexOf("%v") ? !0 :!1, b = 0, w = l(e, function(e, t) {
if (_i_("18c:1777"), s(e)) return _r_(i.formatColumn(e, g));
e = h(e);
var n = e > 0 ? m.pos :0 > e ? m.neg :m.zero, r = n.replace("%s", g.symbol).replace("%v", f(Math.abs(e), u(g.precision), g.thousand, g.decimal));
return r.length > b && (b = r.length), _r_(r);
});
return _r_(l(w, function(e, t) {
if (_i_("18c:1659"), a(e) && e.length < b) return _r_(v ? e.replace(g.symbol, g.symbol + new Array(b - e.length + 1).join(" ")) :new Array(b - e.length + 1).join(" ") + e);
return _r_(e);
}));
}, i.noConflict = function(n) {
return _i_("18c:891"), _r_(function() {
return _i_("18c:1660"), e.accounting = n, i.noConflict = t, _r_(i);
});
}(e.accounting), e.accounting = i, _r_();
}(window), function() {
if (_i_("18c:133"), !window.accounting || !booking.env.accounting_config) return _r_();
var e = window.accounting, t = booking.env.accounting_config, i = {
init:function(e) {
_i_("18c:1089"), this._current = e, _r_();
},
formatMoney:function(i, o, a) {
if (_i_("18c:1090"), "number" != typeof i && isNaN(parseFloat(i)) && ("function" == typeof B.debug && B.debug("jstmpl").warn("formatMoney expected a number but got a string.", arguments), "function" == typeof B.squeak && B.squeak("MMZXZAQUfUfWcZZYTRXO")), "undefined" != typeof o ? "object" == typeof o && (a = o, o = this._current) :o = this._current, "undefined" == typeof o) throw "The module hasn't been initiated, so you have to provide currencyCode";
i % 1 === 0 && (a = a || {}, a.precision = "undefined" != typeof a.precision ? a.precision :"integer");
var s = a && "undefined" != typeof a.is_arabic_number ? a.is_arabic_number :"undefined" != typeof t.is_arabic_number ? t.is_arabic_number :!1, _ = n(o, a), c = e.formatMoney(i, _);
return s && (c = r(c)), _r_(c);
},
formatDistanceNumber:function(t, i) {
_i_("18c:1091");
var r = this._current, o = n(r, i), a = o.symbol, s = e.formatMoney(t, o), _ = new RegExp(a, "g");
return s = s.replace(_, ""), s = s.replace(/[^0-9\.\,]/g, ""), _r_(s);
},
formatDistance:function(e, t) {
_i_("18c:1092");
var i, n = booking.env, r = {
number:e,
unit:"m",
isImperial:n.distance_config && "metric" != n.distance_config
}, o = " ";
return t = t || {}, t.unit = t.unit || r.unit, t.hasOwnProperty("precision") || (t.precision = 1), this.changeDistanceToMetricUnit(r, t), r.isImperial && this.convertDistanceToImperial(r, t), i = this.formatDistanceNumber(r.number, t), _r_(i + o + r.unit);
},
changeDistanceToMetricUnit:function(e, t) {
_i_("18c:1093");
var i = e.number;
if (t.unit) switch (t.unit) {
case "m":
e.unit = "m", e.number = e.number;
break;

case "km":
e.number = .001 * i, !e.isImperial && t.autoUnit && Math.floor(e.number) < 1 ? (e.number = i, t.precision = 0, e.unit = "m") :e.unit = "km";
}
_r_();
},
convertDistanceToImperial:function(e, t) {
_i_("18c:1094");
var i = e.number;
switch (t.unit) {
case "m":
e.unit = "yd", e.number = 1.0936133 * i;
break;

case "km":
e.number = .621371192 * i, e.unit = "mi";
}
_r_();
},
getOptions:function() {
return _i_("18c:1095"), _r_(n(this._current));
}
};
i.init(booking.env.b_selected_currency || booking.env.b_hotel_currencycode), booking.utils = booking.utils || {}, booking.utils.accounting = i;
function n(e, i) {
_i_("18c:383"), i = $.extend(i, {
symbolFormat:"%s",
valueFormat:"%s"
}), i.valueFormat = i.valueFormat.replace("%s", "%v");
var n, r = i.symbolFormat, o = i.valueFormat, a = "undefined" != typeof t.html_symbol[e] ? t.html_symbol[e] :e, s = "undefined" != typeof t.decimal_separator[e] ? t.decimal_separator[e] :"undefined" != typeof t.decimal_separator["default"] ? t.decimal_separator["default"] :".", _ = "undefined" != typeof t.group_separator[e] ? t.group_separator[e] :"undefined" != typeof t.group_separator["default"] ? t.group_separator["default"] :",", c = function(e, t) {
return _i_("18c:1465"), _r_("before" === t ? r + e + o :o + e + r);
}("undefined" != typeof t.currency_separator[e] ? t.currency_separator[e] :"undefined" != typeof t.currency_separator["default"] && e ? t.currency_separator["default"] :" ", "undefined" != typeof t.symbol_position[e] ? t.symbol_position[e] :"undefined" != typeof t.symbol_position["default"] ? t.symbol_position["default"] :"before");
return "undefined" != typeof t.num_decimals && (n = t.num_decimals["default"]), "undefined" != typeof t.num_decimals && (n = "undefined" != typeof t.num_decimals[e] ? t.num_decimals[e] :n), "integer" === i.precision && (n = 0), isNaN(parseInt(i.precision, 10)) || (n = i.precision), _r_({
symbol:a,
decimal:s,
thousand:_,
format:c,
precision:n
});
}
function r(e) {
_i_("18c:384");
var t = [ "&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;" ], i = "";
return i = e.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g, function(e, i, n, r) {
return _i_("18c:1466"), _r_(t[parseInt(e, 10)]);
}), _r_(i);
}
_r_();
}(), $(function() {
_i_("18c:134"), booking.jstmpl && booking.jstmpl.setup(function(e) {
if (_i_("18c:1467"), !e || !e.formatMoney) return _r_({});
function t(t, i) {
if (_i_("18c:1778"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, _r_(e.formatMoney(t, "", i));
}
function i(t, i) {
if (_i_("18c:1779"), isNaN(t)) return _r_(t);
if (i = i || {}, i && !i.precision) {
var n = ("" + t).split("."), r = (n.length > 1 ? n[1] :"").length;
i.precision = r;
}
return _r_(e.formatMoney(t, "", i));
}
function n(e) {
_i_("18c:1780");
var t, i = Math.abs;
if (i(e) < 50) return _r_(e);
if (t = i(e) < 100 ? 5 :i(e) < 500 ? 10 :i(e) < 1e3 ? 50 :i(e) < 5e3 ? 100 :i(e) < 1e4 ? 500 :i(e) < 5e4 ? 1e3 :i(e) < 1e5 ? 5e3 :1e4, e % t === 0) return _r_(e);
var n = 1;
return 0 > e && (n = 0), e = Math.floor(e / t), e *= t, n && (e += t), _r_(e);
}
function r(t, i) {
if (_i_("18c:1781"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, t = n(t), _r_(e.formatMoney(t, "", i));
}
function o(t, i) {
return _i_("18c:1782"), _r_(e.formatMoney(t, i));
}
return _r_({
fn:{
format_number:t,
format_number_decimal:i,
format_number_rounded:r,
format_price:o
}
});
}(booking && booking.utils && booking.utils.accounting)), _r_();
}), function(e, t) {
if (_i_("18c:135"), !t) return _r_();
t.easing.jswing = t.easing.swing, t.extend(t.easing, {
def:"easeOutQuad",
swing:function(e, i, n, r, o) {
return _i_("18c:1096"), _r_(t.easing[t.easing.def](e, i, n, r, o));
},
easeInQuad:function(e, t, i, n, r) {
return _i_("18c:1097"), _r_(n * (t /= r) * t + i);
},
easeOutQuad:function(e, t, i, n, r) {
return _i_("18c:1098"), _r_(-n * (t /= r) * (t - 2) + i);
},
easeInOutQuad:function(e, t, i, n, r) {
if (_i_("18c:1099"), (t /= r / 2) < 1) return _r_(n / 2 * t * t + i);
return _r_(-n / 2 * (--t * (t - 2) - 1) + i);
},
easeInCubic:function(e, t, i, n, r) {
return _i_("18c:1100"), _r_(n * (t /= r) * t * t + i);
},
easeOutCubic:function(e, t, i, n, r) {
return _i_("18c:1101"), _r_(n * ((t = t / r - 1) * t * t + 1) + i);
},
easeInOutCubic:function(e, t, i, n, r) {
if (_i_("18c:1102"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t + 2) + i);
},
easeInQuart:function(e, t, i, n, r) {
return _i_("18c:1103"), _r_(n * (t /= r) * t * t * t + i);
},
easeOutQuart:function(e, t, i, n, r) {
return _i_("18c:1104"), _r_(-n * ((t = t / r - 1) * t * t * t - 1) + i);
},
easeInOutQuart:function(e, t, i, n, r) {
if (_i_("18c:1105"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t + i);
return _r_(-n / 2 * ((t -= 2) * t * t * t - 2) + i);
},
easeInQuint:function(e, t, i, n, r) {
return _i_("18c:1106"), _r_(n * (t /= r) * t * t * t * t + i);
},
easeOutQuint:function(e, t, i, n, r) {
return _i_("18c:1107"), _r_(n * ((t = t / r - 1) * t * t * t * t + 1) + i);
},
easeInOutQuint:function(e, t, i, n, r) {
if (_i_("18c:1108"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t * t * t + 2) + i);
},
easeInSine:function(e, t, i, n, r) {
return _i_("18c:1109"), _r_(-n * Math.cos(t / r * (Math.PI / 2)) + n + i);
},
easeOutSine:function(e, t, i, n, r) {
return _i_("18c:1110"), _r_(n * Math.sin(t / r * (Math.PI / 2)) + i);
},
easeInOutSine:function(e, t, i, n, r) {
return _i_("18c:1111"), _r_(-n / 2 * (Math.cos(Math.PI * t / r) - 1) + i);
},
easeInExpo:function(e, t, i, n, r) {
return _i_("18c:1112"), _r_(0 == t ? i :n * Math.pow(2, 10 * (t / r - 1)) + i);
},
easeOutExpo:function(e, t, i, n, r) {
return _i_("18c:1113"), _r_(t == r ? i + n :n * (-Math.pow(2, -10 * t / r) + 1) + i);
},
easeInOutExpo:function(e, t, i, n, r) {
if (_i_("18c:1114"), 0 == t) return _r_(i);
if (t == r) return _r_(i + n);
if ((t /= r / 2) < 1) return _r_(n / 2 * Math.pow(2, 10 * (t - 1)) + i);
return _r_(n / 2 * (-Math.pow(2, -10 * --t) + 2) + i);
},
easeInCirc:function(e, t, i, n, r) {
return _i_("18c:1115"), _r_(-n * (Math.sqrt(1 - (t /= r) * t) - 1) + i);
},
easeOutCirc:function(e, t, i, n, r) {
return _i_("18c:1116"), _r_(n * Math.sqrt(1 - (t = t / r - 1) * t) + i);
},
easeInOutCirc:function(e, t, i, n, r) {
if (_i_("18c:1117"), (t /= r / 2) < 1) return _r_(-n / 2 * (Math.sqrt(1 - t * t) - 1) + i);
return _r_(n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i);
},
easeInElastic:function(e, t, i, n, r) {
_i_("18c:1118");
var o = 1.70158, a = 0, s = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (a || (a = .3 * r), s < Math.abs(n)) {
s = n;
var o = a / 4;
} else var o = a / (2 * Math.PI) * Math.asin(n / s);
return _r_(-(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + i);
},
easeOutElastic:function(e, t, i, n, r) {
_i_("18c:1119");
var o = 1.70158, a = 0, s = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (a || (a = .3 * r), s < Math.abs(n)) {
s = n;
var o = a / 4;
} else var o = a / (2 * Math.PI) * Math.asin(n / s);
return _r_(s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n + i);
},
easeInOutElastic:function(e, t, i, n, r) {
_i_("18c:1120");
var o = 1.70158, a = 0, s = n;
if (0 == t) return _r_(i);
if (2 == (t /= r / 2)) return _r_(i + n);
if (a || (a = r * (.3 * 1.5)), s < Math.abs(n)) {
s = n;
var o = a / 4;
} else var o = a / (2 * Math.PI) * Math.asin(n / s);
if (1 > t) return _r_(-.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + i);
return _r_(s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + n + i);
},
easeInBack:function(e, t, i, n, r, o) {
return _i_("18c:1121"), void 0 == o && (o = 1.70158), _r_(n * (t /= r) * t * ((o + 1) * t - o) + i);
},
easeOutBack:function(e, t, i, n, r, o) {
return _i_("18c:1122"), void 0 == o && (o = 1.70158), _r_(n * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + i);
},
easeInOutBack:function(e, t, i, n, r, o) {
if (_i_("18c:1123"), void 0 == o && (o = 1.70158), (t /= r / 2) < 1) return _r_(n / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i);
},
easeInBounce:function(e, i, n, r, o) {
return _i_("18c:1124"), _r_(r - t.easing.easeOutBounce(e, o - i, 0, r, o) + n);
},
easeOutBounce:function(e, t, i, n, r) {
return _i_("18c:1125"), _r_((t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i :2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i :2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i :n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i);
},
easeInOutBounce:function(e, i, n, r, o) {
if (_i_("18c:1126"), o / 2 > i) return _r_(.5 * t.easing.easeInBounce(e, 2 * i, 0, r, o) + n);
return _r_(.5 * t.easing.easeOutBounce(e, 2 * i - o, 0, r, o) + .5 * r + n);
}
}), _r_();
}(window.booking, window.jQuery), /* @preserve
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e, t, i) {
_i_("18c:136");
var n, r = "hashchange", o = document, a = e.event.special, s = o.documentMode, _ = "on" + r in t && (s === i || s > 7);
function c(e) {
return _i_("18c:385"), e = e || location.href, _r_("#" + e.replace(/^[^#]*#?(.*)$/, "$1"));
}
e.fn[r] = function(e) {
return _i_("18c:755"), _r_(e ? this.bind(r, e) :this.trigger(r));
}, e.fn[r].delay = 50, a[r] = e.extend(a[r], {
setup:function() {
if (_i_("18c:1468"), _) return _r_(!1);
e(n.start), _r_();
},
teardown:function() {
if (_i_("18c:1469"), _) return _r_(!1);
e(n.stop), _r_();
}
}), n = function() {
_i_("18c:892");
var n, a = {}, s = c(), l = function(e) {
return _i_("18c:1783"), _r_(e);
}, u = l, d = l;
a.start = function() {
_i_("18c:1784"), n || h(), _r_();
}, a.stop = function() {
_i_("18c:1785"), n && clearTimeout(n), n = i, _r_();
};
function h() {
_i_("18c:1470");
var i = c(), o = d(s);
i !== s ? (u(s = i, o), e(t).trigger(r)) :o !== s && (location.href = location.href.replace(/#.*/, "") + o), n = setTimeout(h, e.fn[r].delay), _r_();
}
return "msie" === B.env.b_browser && !_ && function() {
_i_("18c:1906");
var t, i;
a.start = function() {
_i_("18c:2239"), t || (i = e.fn[r].src, i = i && i + c(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
_i_("18c:2370"), i || u(c()), h(), _r_();
}).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, o.onpropertychange = function() {
_i_("18c:2352");
try {
"title" === event.propertyName && (t.document.title = o.title);
} catch (e) {}
_r_();
}), _r_();
}, a.stop = l, d = function() {
return _i_("18c:2240"), _r_(c(t.location.href));
}, u = function(i, n) {
_i_("18c:2241");
var a = t.document, s = e.fn[r].domain;
i !== n && (a.title = o.title, a.open(), s && a.write('<script>document.domain="' + s + '"</script>'), a.close(), t.location.hash = i), _r_();
}, _r_();
}(), _r_(a);
}(), _r_();
}(jQuery, window), function(e) {
_i_("18c:137"), e.fn.hint = function(t) {
return _i_("18c:756"), t || (t = "blur"), _r_(this.each(function() {
_i_("18c:1661");
var i = e(this), n = i.attr("title"), r = e(this.form), o = e(window);
function a() {
_i_("18c:1907"), i.val() === n && i.hasClass(t) && i.val("").removeClass(t), _r_();
}
n && (i.blur(function() {
_i_("18c:2330"), "" === this.value && i.val(n).addClass(t), _r_();
}).focus(a).blur(), r.submit(a), o.unload(a)), _r_();
}));
}, _r_();
}(jQuery), booking.env.no_search_placeholder_ie || $("input#keyword.faq_search_input").hint(), function() {
_i_("18c:138");
var e = B.require("jquery"), t = B.env.b_is_tdot_traffic ? "click touchstart" :"click", i = 0;
e.extend({
noticeAdd:function(r) {
_i_("18c:1127");
var o = !1;
if (booking.events.on("growl:growlClosedManually", function(t) {
_i_("18c:1908"), t && t.type.indexOf("abandoned-cart-growl-notification") && e.cookie("fscag01", null, {
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}), "abandoned_cart_growl_notification" == r.textLabel) {
var a = "AEJPEOCFREATIKbINFTBIIEFIMNJbZJae";
if (B.et.stage(a, 1), B.et.track(a) && e.cookie("fscag01")) ; else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !o) return _r_(!1);
} else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !o) return _r_(!1);
i++;
var r, s, _, c, l, u, d = {
inEffect:{
opacity:"show"
},
inEffectDuration:600,
stayTime:3e3,
text:"",
stay:!1,
type:"notice",
destination:"",
platform:"mac",
addClassName:"",
injectHTML:!1,
zindex:!1,
isAutomatic:!1,
textLabel:null,
wrapperClass:"",
fullyClickable:!1
}, h = !1;
r = e.extend({}, d, r);
var p = navigator && navigator.platform && -1 == navigator.platform.indexOf("Mac") && -1 == navigator.platform.indexOf("iPad") && -1 == navigator.platform.indexOf("iPhone"), f = " ", g = "";
-1 !== r.type.indexOf("abandoned-cart-growl-notification") && B.et.track("HBVXGYVVPdcLDDDSGaT") && (g = 'target="_blank"'), p && (r.platform = "win");
var m = " ", v = "notice-wrap " + m + r.platform;
B.env.b_is_tablet && "book" === B.env.b_action && B.et.track("PNHafDcaRDPNZJQAZFO") && (v += " growl_font_stack"), e(".notice-wrap").length ? s = e(".notice-wrap") :(s = e("<div></div>").addClass(v).addClass(r.wrapperClass).appendTo("body"), s[0].id = "growl_squash"), r.zindex === !1 || isNaN(r.zindex) || s.css("z-index", r.zindex), "win" === r.platform && (h = "__placement1");
var b, w;
if ("hotel" === B.env.b_action && "win" !== r.platform && (B.env.b_has_abandoned_cart_data && B.et.track("HBVXGYVVPBNRGePTVXBUHDDSC") || s.addClass("growls_no_scroll")), B.env.rtl && b && w && (h = "__placement_" + w), h && s.addClass(h), _ = e("<div></div>").addClass("notice-item-wrapper"), u = "" == r.destination || r.fullyClickable ? "<p>" + r.text + "</p>" :"<p><a " + g + ' href="' + r.destination + '">' + r.text + "</a></p>", c = e("" !== r.destination && r.fullyClickable ? "<a " + g + ' class="notice-item-clickable" href="' + r.destination + '"></a>' :"<div></div>"), c.hide(), c.addClass("notice-item " + f + r.type + " " + r.addClassName).appendTo(s).html(u).animate(r.inEffect, r.inEffectDuration).wrap(_).bind(t, function(t) {
if (_i_("18c:1909"), "hotel" === booking.env.b_action) {
var i = JSON.parse(e.cookie("bs")) || {};
i.gc = 1, "undefined" != typeof JSON && e.cookie("bs", JSON.stringify(i), {
path:"/",
domain:booking.env.b_domain_end
});
}
if (booking.google.trackEvent(booking.google.clickTracker, "growl_removed", t && t.target && e(t.target).closest(".notice-item-close-x").length ? "x" :"message"), e.noticeRemove(c, r.addClassName, !1, !0), "" !== r.destination && r.fullyClickable && e(t.target).is(".notice-item-close-x")) return _r_(!1);
return _r_(!!r.destination);
}), l = e("<div></div>").addClass("notice-item-close-x").prependTo(c), r.injectHTML && c.prepend(r.injectHTML), "language" == r.type && (e(".notice-item p").css("cursor", "pointer"), e(".notice-item p").bind(t, function() {
return _i_("18c:2108"), e("#langselectformlist").val(booking.env.browser_lang), e("#languageselect")[0].submit(), e.noticeRemove(c), _r_(!1);
})), !r.stay) {
var y = r.stayTime;
setTimeout(function() {
_i_("18c:2109"), e.noticeRemove(c, "", 1), _r_();
}, y);
}
return booking.eventEmitter.triggerHandler("growl:show", r), booking.events.trigger("growl:show", r), n(1), _r_(c);
},
noticeRemove:function(t, i, r, o) {
_i_("18c:1128"), o && e.setCookieOnClose(), o && B.env.b_growls_close_fast || "tdot" === B.env.b_site_type && "book" === B.env.b_action && 2 === B.env.b_stage ? t.parent().remove() :t.animate({
opacity:"0"
}, 600, function() {
_i_("18c:2110"), t.parent().animate({
height:"0px"
}, 300, function() {
_i_("18c:2303"), t.parent().remove(), _r_();
}), _r_();
}), i && "" != i && e("." + i).removeClass(i), booking.eventEmitter.triggerHandler("growl:close", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:o
}), o && (booking.events.emit("growl:growlClosedManually", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:o
}), n(2)), _r_();
},
canShowNotice:function() {
_i_("18c:1129");
var t = !0, i = parseInt(e.cookie("gcmdt")) || !1;
if (i !== !1) {
var n = (new Date().getTime() - i) / 1e3 / 60;
20 >= n && (t = !1);
}
return _r_(t);
},
isNoticesDisabled:function() {
return _i_("18c:1130"), _r_(!!(B && B.env && B.env.disableNotices));
},
setCookieOnClose:function() {
return _i_("18c:1131"), booking.env.b_paid_traffic || e.cookie("gcmdt", new Date().getTime(), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}
});
function n(e) {
_i_("18c:386");
var t = 1, i = 2;
if ("searchresults" !== B.env.b_action) return _r_();
e == t ? (B.et.stage("BOeaUSKKMTfTLKGBfC", 1), B.et.stage("BOeaUJeaILYDVTbaebRRDXe", 1)) :e == i && (B.et.customGoal("BOeaUSKKMTfTLKGBfC", 1), B.et.customGoal("BOeaUJeaILYDVTbaebRRDXe", 1)), _r_();
}
_r_();
}(), B.define("growl", function(e, t, i) {
"use strict";
_i_("18c:139");
function n(e) {
_i_("18c:387"), e && booking.env.growl_triggers && booking.env.growl_triggers[e] && $.noticeAdd(booking.env.growl_triggers[e]), _r_();
}
i.exports = {
show:$.noticeAdd,
trigger:n
}, _r_();
}), function(e) {
_i_("18c:140"), e.fn.placeholder = function(t) {
_i_("18c:757");
var i = e.extend({
attr:"placeholder",
emptyClass:"empty"
}, t);
if ("placeholder" === i.attr && "placeholder" in document.createElement("input")) return _r_(this);
return _r_(this.each(function() {
_i_("18c:1662");
var t, n = e(this), r = n.attr(i.attr), o = "password" === n.attr("type"), a = "placeholder-polyfill";
if (!r || n.hasClass(a)) return _r_();
n.addClass(a), o && (t = e('<input type="text" />').attr({
value:r,
className:n[0].className
}).insertAfter(n.hide())), n.closest("form").submit(function() {
_i_("18c:2111"), n.trigger("focus"), _r_();
}), "" === n.val() && n.val(r).addClass(i.emptyClass), n.focus(function() {
_i_("18c:2112"), n.val() == r && n.val("").removeClass(i.emptyClass), _r_();
}), n.blur(function() {
if (_i_("18c:2113"), "" !== e.trim(this.value)) return _r_();
o ? n.after(t).hide() :n.val(r).addClass(i.emptyClass), _r_();
}), o && t.addClass(i.emptyClass).focus(function() {
_i_("18c:2242"), t.detach(), n.show().focus(), _r_();
}), _r_();
}));
}, _r_();
}(jQuery), function(e) {
"use strict";
_i_("18c:141"), e([ "jquery" ], function(e) {
_i_("18c:758");
var t = e.scrollTo = function(t, i, n) {
return _i_("18c:1786"), _r_(e(window).scrollTo(t, i, n));
};
t.defaults = {
axis:"xy",
duration:0,
limit:!0
}, t.window = function(t) {
return _i_("18c:1663"), _r_(e(window)._scrollable());
}, e.fn._scrollable = function() {
return _i_("18c:1664"), _r_(this.map(function() {
_i_("18c:2114");
var t = this, i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), [ "iframe", "#document", "html", "body" ]);
if (!i) return _r_(t);
var n = (t.contentWindow || t).document || t.ownerDocument || t;
return _r_(/webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body :n.documentElement);
}));
}, e.fn.scrollTo = function(n, r, o) {
return _i_("18c:1665"), "object" == typeof r && (o = r, r = 0), "function" == typeof o && (o = {
onAfter:o
}), "max" == n && (n = 9e9), o = e.extend({}, t.defaults, o), r = r || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (r /= 2), o.offset = i(o.offset), o.over = i(o.over), _r_(this._scrollable().each(function() {
if (_i_("18c:2243"), null == n) return _r_();
var a, s = this, _ = e(s), c = n, l = {}, u = _.is("html,body");
switch (typeof c) {
case "number":
case "string":
if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
c = i(c);
break;
}
if (c = u ? e(c) :e(c, this), !c.length) return _r_();

case "object":
(c.is || c.style) && (a = (c = e(c)).offset());
}
var d = e.isFunction(o.offset) && o.offset(s, c) || o.offset;
e.each(o.axis.split(""), function(e, i) {
_i_("18c:2331");
var n = "x" == i ? "Left" :"Top", r = n.toLowerCase(), p = "scroll" + n, f = s[p], g = t.max(s, i);
if (a) l[p] = a[r] + (u ? 0 :f - _.offset()[r]), o.margin && (l[p] -= parseInt(c.css("margin" + n)) || 0, l[p] -= parseInt(c.css("border" + n + "Width")) || 0), l[p] += d[r] || 0, o.over[r] && (l[p] += c["x" == i ? "width" :"height"]() * o.over[r]); else {
var m = c[r];
l[p] = m.slice && "%" == m.slice(-1) ? parseFloat(m) / 100 * g :m;
}
o.limit && /^\d+$/.test(l[p]) && (l[p] = l[p] <= 0 ? 0 :Math.min(l[p], g)), !e && o.queue && (f != l[p] && h(o.onAfterFirst), delete l[p]), _r_();
}), h(o.onAfter);
function h(e) {
_i_("18c:2304"), _.animate(l, r, o.easing, e && function() {
_i_("18c:2360"), e.call(this, c, o), _r_();
}), _r_();
}
_r_();
}).end());
}, t.max = function(t, i) {
_i_("18c:1666");
var n = "x" == i ? "Width" :"Height", r = "scroll" + n;
if (!e(t).is("html,body")) return _r_(t[r] - e(t)[n.toLowerCase()]());
var o = "client" + n, a = t.ownerDocument.documentElement, s = t.ownerDocument.body;
return _r_(Math.max(a[r], s[r]) - Math.min(a[o], s[o]));
};
function i(t) {
return _i_("18c:1132"), _r_(e.isFunction(t) || e.isPlainObject(t) ? t :{
top:t,
left:t
});
}
return _r_(t);
}), _r_();
}("function" == typeof define && define.amd ? define :function(e, t) {
_i_("18c:248"), "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) :t(jQuery), _r_();
}), booking[sNSStartup].aff_new_header_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("18c:388");
var e = this, t = $(".aff_languages_popover"), i = $(".aff_currency_popover");
$(".b_msie_6").length && (this.is_ie = 6), $(".b_msie_7").length && (this.is_ie = 7), $(".aff_select_box").mouseenter(function() {
_i_("18c:1133"), $(this).addClass("sel_hover"), _r_();
}), $(".aff_select_box").mouseleave(function() {
_i_("18c:1134"), $(this).removeClass("sel_hover"), _r_();
}), $("body").click(function(t) {
if (_i_("18c:1135"), 2 == e.opening_state) {
var i = $(t.target);
$(i).length && e.closeSelect();
}
_r_();
}), t.css({
width:e.getPopoverWidth($(".aff_language_flags")) + "px"
}), i.css({
width:e.getPopoverWidth($("#currency_dropdown_all .currency_list")) + "px"
}), $(".aff_select_box").click(function(t) {
_i_("18c:1136"), 0 == e.opening_state ? e.openSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.cur_open != $(this).attr("data-target") ? e.closeSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.closeSelect(), _r_();
}), _r_();
},
openSelect:function(e, t) {
_i_("18c:389"), oThat = this, this.cur_open = e;
var i = $("." + t), n = 0, r = 0, o = 0, a = 0, s = 0, _ = 0, c = 0, l = 0, u = 0, d = 0, h = 0, p = 0, f = 0, g = 0, m = 0, v = 0, b = 0, w = 0, y = i.parent(), k = $("." + e), S = oThat.getScreenSize()[0], C = (oThat.getScreenSize()[1], parseInt(y.width() / 2, 10)), x = $("#partner_branding3"), B = $(".hybrid-header #aff_personal_form"), E = $($(".uc_top_arrow", k)), T = parseInt(k.outerWidth(!0) / 2, 10), D = T - C, N = T - 8, A = oThat.getLeftPos(B)[0], I = oThat.getLeftPos(B)[1], M = oThat.getRightPos(B)[0], O = oThat.getRightPos(B)[1], a = parseInt(B.css("marginLeft"), 10), s = parseInt(B.css("marginRight"), 10), L = parseInt(y.offset().left, 10) - parseInt(x.offset().left, 10), j = parseInt(x.width(), 10), H = j - (T + C + L), P = L + C - T, R = $(".language_select_button"), q = $(".currency_select_button"), F = $(".affiliate_mybooking"), G = parseInt(q.outerWidth(), 10), V = parseInt(G / 2, 10), W = parseInt(R.outerWidth(), 10), U = parseInt(W / 2, 10), Y = parseInt(F.outerWidth(), 10), z = parseInt(q.css("marginLeft"), 10), J = parseInt(q.css("marginRight"), 10), X = parseInt(R.css("marginLeft"), 10), K = parseInt(R.css("marginRight"), 10), Z = parseInt(q.css("paddingLeft"), 10), Q = parseInt(q.css("paddingRight"), 10), ee = parseInt(R.css("paddingLeft"), 10), te = parseInt(R.css("paddingRight"), 10), ie = parseInt(F.css("marginLeft"), 10), ne = parseInt(F.css("marginRight"), 10), re = parseInt(F.css("paddingLeft"), 10), oe = parseInt(F.css("paddingRight"), 10), ae = oThat.getHeight($(".aff_select_box"));
$(".aff_select_wrap").hasClass("currency_select_button") && ((z > 0 || J > 0) && (c = z + J), (Z > 0 || Q > 0) && (u = Z + Q, d = Z / 2 + Q / 2), btnClear = oThat.getClearCSS(q), r = G + c), $(".aff_select_wrap").hasClass("language_select_button") && ((X > 0 || K > 0) && (_ = X + K), (ee > 0 || te > 0) && (h = ee + te, p = ee / 2 + te / 2), btnClear = oThat.getClearCSS(R), o = W + _), $(".aff_select_wrap").hasClass("affiliate_mybooking") && ((ie > 0 || ne > 0) && (l = ie + ne), (re > 0 || oe > 0) && (f = re + oe), btnClear = oThat.getClearCSS(F), n = Y + l);
var se = oThat.getDistanceBetweenCenterElements(x, B);
(1625 >= S && se >= -285 || S > 1626 && se >= -410 || 0 > se && se >= -150) && (b = 1), (1625 >= S && 285 >= se || S > 1626 && 410 >= se || se > 0 && 150 >= se) && (w = 1), oThat.isrtlLang() ? A && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = n + o + c + u, v = I + a + n + o + d + V - 6) :k.hasClass("aff_languages_popover") && (g = n + _ + h, v = I + a + n + p + U - 6), g >= 0 && (m = g + I + a), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:ae + "px"
}), E.css({
left:v
})) :M && 0 == w ? (k.hasClass("aff_currency_popover") ? (g = O, v = k.width() - O - s + d - V - 6) :k.hasClass("aff_languages_popover") && (g = O + r, v = k.width() - O - s + p - r - U - 6), g >= 0 && (m = g + s), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:ae + "px"
}), E.css({
left:v
})) :(b || w) && (0 > H && P > 0 ? (D -= H, N -= H) :H > 0 && 0 > P && (D += P, N += P), k.css({
left:-Math.round(D),
top:ae + "px"
}), $(".aff_user_popover .uc_top_arrow", y).css("left", N)) :A && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = I, v = I + a + V - d - 6) :k.hasClass("aff_languages_popover") && (g = I + c + G, v = I + a + r + U - p - 6), g >= 0 && (m = g + a), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:ae + "px"
}), E.css({
left:v
})) :M && 0 == w ? (k.hasClass("aff_currency_popover") ? (g = O + (btnClear ? 0 :n) + (btnClear ? 0 :o) + c + u, v = k.width() - O - s - (btnClear ? 0 :n) - (btnClear ? 0 :o) - c - d - V - 6) :k.hasClass("aff_languages_popover") && (g = O + (btnClear ? 0 :n) + _ + h, v = k.width() - O - s - (btnClear ? 0 :n) - _ - p - U - 9), g >= 0 && (m = g + s), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:ae + "px"
}), E.css({
left:v
})) :(b || w) && (0 > H && P > 0 ? (D -= H, N -= H) :H > 0 && 0 > P && (D += P, N += P), k.css({
left:-Math.round(D),
top:ae + "px"
}), $(".aff_user_popover .uc_top_arrow", y).css("left", N)), $("." + t).addClass("sel_open"), this.opening_state = 1, k.css({
display:"block",
opacity:"1"
}), this.openSlow ? (this.openSlow = !1, k.animate({
height:iNewHeight + "px"
}, 800)) :k.css({
height:"auto"
}), setTimeout(function() {
_i_("18c:1137"), oThat.opening_state = 2, _r_();
}, 200), _r_();
},
getScreenSize:function() {
_i_("18c:390");
var e = parseInt($("#partner_branding3").width(), 10);
return screenHW = e / 2, restCal = screenHW - 150, 1625 >= e ? restCal = screenHW - 285 :e > 1626 && (restCal = screenHW - 410), _r_([ e, restCal ]);
},
getHeight:function(e) {
_i_("18c:391");
var t = parseInt(e.height(), 10);
return _r_(t);
},
getClearCSS:function(e) {
if (_i_("18c:392"), "both" == $(e).css("clear")) return _r_(!0);
return _r_(!1);
},
getLeftPos:function(e) {
_i_("18c:393");
var t = parseInt(e.css("left"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
getRightPos:function(e) {
_i_("18c:394");
var t = parseInt(e.css("right"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
isrtlLang:function() {
if (_i_("18c:395"), $("body").hasClass("lang_is_rtl")) return _r_(!0);
return _r_(!1);
},
getPopoverWidth:function(e) {
_i_("18c:396");
var t = e.length;
switch (t) {
case 4:
columns = 802;
break;

case 3:
columns = 602;
break;

case 2:
columns = 402;
break;

default:
columns = 202;
}
return _r_(columns);
},
getDistanceBetweenCenterElements:function(e, t) {
_i_("18c:397");
var i = e.width(), n = t.width(), r = e.offset().left, o = t.offset().left, a = parseInt(r) + parseInt(i) / 2, s = parseInt(o) + parseInt(n) / 2;
return _r_(s - a);
},
closeSelect:function(e, t) {
_i_("18c:398");
var i = this;
2 == this.opening_state && ($(".aff_user_popover").animate({
height:"0px"
}, 200, function() {
_i_("18c:1667"), $(".aff_user_popover").css({
display:"none"
}), $(".aff_select_box").removeClass("sel_open"), e && null != e && i.openSelect(e, t), _r_();
}), this.opening_state = 0), _r_();
}
}, booking[sNSStartup].anchorJump = {
priority:9,
init:function() {
_i_("18c:399"), $("#newsletterbox .error").length && (window.location.href = window.location.href + "#errormsg"), $(".forgotten a, a.forgotten").click(function() {
return _i_("18c:1138"), window.open(this.href, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200"), _r_(!1);
}), _r_();
}
}, B.authLightbox = {
init:function() {
_i_("18c:400");
var e = this;
if (e.ready) return _r_();
B.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab", function(t, i) {
_i_("18c:1139"), i = i || {};
var n = "user_access_menu_login_tab" === t.type;
e.form(i.mode).toggleClass("user-access-menu-lightbox--signin", n).toggleClass("user-access-menu-lightbox--signup", !n), B.env.b_run_prefill_login_email && B.et.stage("MRLLeJIRBcIGDDBae", 1), booking.env.b_is_tdot_traffic || (B.env.b_run_prefill_login_email && B.et.track("MRLLeJIRBcIGDDBae") ? e.form(i.mode).find(".user_access_password, .user_signup_password").select() :e.form(i.mode).find(".user_access_email").select()), _r_();
}), e.ready = !0, _r_();
},
show:function(e) {
_i_("18c:401");
var t = this.form(e.mode);
this.rewrite(e);
var i = "user-access-menu-lightbox";
e.extraClass && (i += " " + e.extraClass), $("#ng-overlay").hide(), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), $(".user_center_popover").hide(), B.lightbox.hide(), $(".js-user-access-menu-lightbox--embedded").hide(), B.lightbox.show(t, {
bAnimation:!booking.env.b_is_tdot_traffic,
customWrapperClassName:i,
hideCallBack:function() {
_i_("18c:1668"), t.find(".form-loading").hide(), $(".js-user-access-menu-lightbox--embedded").show(), B.eventEmitter.trigger("auth-dialog:hide", e), _r_();
}
}), this.initManageBooking(t, e), t.find("[data-target=user_access_" + e.tab + "_menu]").trigger("click", e), "manage_booking" === e.tab && this.showBNPForm(t), e.check_bs2 && B.et.stage("acc_signin_intead_of_signup_in_bs2", 1), B.eventEmitter.trigger("auth-dialog:show", e);
var n = B.require("events");
n.trigger("auth-dialog-second:show", e), _r_();
},
hide:function() {
_i_("18c:402"), B.lightbox.hide(), _r_();
},
form:function(e) {
return _i_("18c:403"), e = e ? "--" + e :"", _r_($(".js-user-access-menu-lightbox" + e));
},
rewrite:function(e) {
_i_("18c:404");
var t = this, i = t.form(e.mode);
$.each(t.rewrites, function(n, r) {
_i_("18c:1140");
var o = t.defaults[n];
o || (t.defaults[n] = o = r.call(t, i)), r.call(t, i, n in e ? e[n] :o), _r_();
}), _r_();
},
defaults:{},
rewrites:{
titleSignin:function(e, t) {
_i_("18c:759");
var i = e.find(".js-user-access-menu-lightbox__title--signin");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
titleSignup:function(e, t) {
_i_("18c:760");
var i = e.find(".js-user-access-menu-lightbox__title--signup");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
targetSignin:function(e, t) {
_i_("18c:761");
var i = e.find(".user_access_signin_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
targetSignup:function(e, t) {
_i_("18c:762");
var i = e.find(".user_access_signup_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
_fbFinalUrl:function(e, t) {
_i_("18c:763");
var i = booking.command.params(e);
if (2 !== arguments.length) return _r_(i.finalUrl);
"string" == typeof t ? i.finalUrl = t :delete i.finalUrl, booking.command.params(e, i), _r_();
},
fbFinalUrlSignin:function(e, t) {
_i_("18c:764");
var i = e.find(".user_access_signin_menu *[data-command=facebook-connect]");
return _r_(this.rewrites._fbFinalUrl(i, t));
},
fbFinalUrlSignup:function(e, t) {
_i_("18c:765");
var i = e.find(".user_access_signup_menu *[data-command=facebook-connect]");
return _r_(this.rewrites._fbFinalUrl(i, t));
}
},
showBNPForm:function(e) {
_i_("18c:405"), e.find(".form-section").addClass("form-hidden-section"), e.find(".user_access_resend_confirmation").removeClass("form-hidden-section"), e.find(".user_access_manage_booking_menu").removeClass("form-hidden-section"), e.find(".resend-conf").addClass("resend-conf--absolute"), _r_();
},
initManageBooking:function(e, t) {
_i_("18c:406");
var i = e.find(".user_access_menu"), n = this;
i.unbind(".init-manage-booking"), i.delegate(".js-booking-nr-pin-link", "click.init-manage-booking", function() {
_i_("18c:1141"), n.showBNPForm(e), _r_();
}), i.delegate(".js-resend-conf__signin-link", "click.init-manage-booking", function() {
_i_("18c:1142"), e.find("[data-target=user_access_" + t.tab + "_menu]").trigger("click", t), _r_();
}), _r_();
}
}, B.when({
condition:$(".js-user-access-menu-lightbox--embedded").length,
experiment:"MRLQLOLOLOCLJbYROfdAHFeMaFeZKAfWe"
}).run(function() {
_i_("18c:142");
var e = $(".js-user-access-menu-lightbox--embedded"), t = B.authLightbox;
t.init(), t.initManageBooking(e, {
tab:"signin"
}), _r_();
}), B.when({
events:"ready"
}).run(function() {
_i_("18c:143"), B.when({
condition:$(".js_show_password_button").length,
experiment:"MRLLWLeUINIQAMRKe"
}).run(function(e) {
_i_("18c:766");
var t = e("jquery");
t(".js_show_password_button").click(function() {
_i_("18c:1669");
var e = t(this).siblings(".js_password_input"), i = "text" === e.attr("type");
e.attr("type", i ? "password" :"text"), t(this).toggleClass("show_password_button--active"), _r_();
}), t(".js-user-access-form--signin, .js-user-access-form--signup").submit(function() {
return _i_("18c:1670"), t(this).find(".js_password_input").attr("type", "password"), t(this).find(".js_show_password_button").removeClass("show_password_button--active"), _r_(!0);
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_run_MRLLaMCVCMDEUWEVSGFGPOAeUC
}).run(function(e) {
_i_("18c:144");
var t = "MRLLaMCVCMDEUWEVSGFGPOAeUC", i = function() {
_i_("18c:767"), window.fbAsyncInit = function() {
_i_("18c:1671");
var e = 0 === parseInt(B.env.auth_level, 10), i = "mdot" === B.env.b_site_type;
FB.init({
appId:"210068525731476",
xfbml:!0,
version:"v2.2"
});
function n(n) {
_i_("18c:1910"), "connected" === n.status ? e ? i ? B.et.stage(t, 5) :B.et.stage(t, 1) :i ? B.et.stage(t, 6) :B.et.stage(t, 2) :"not_authorized" === n.status && (e ? i ? B.et.stage(t, 7) :B.et.stage(t, 3) :i ? B.et.stage(t, 8) :B.et.stage(t, 4)), _r_();
}
FB.getLoginStatus(function(e) {
_i_("18c:2115"), n(e), _r_();
}), _r_();
}, function(e, t, i) {
_i_("18c:1672");
var n, r = e.getElementsByTagName(t)[0];
e.getElementById(i) || (n = e.createElement(t), n.id = i, n.src = "//connect.facebook.net/en_US/sdk.js", r.parentNode.insertBefore(n, r)), _r_();
}(document, "script", "facebook-jssdk"), _r_();
};
B.when({
events:"auth-dialog-second:show",
experiment:t
}).run(i), B.when({
action:[ "mysettings", "myreservations", "login", "mydashboard", "myreports", "reviewtimeline", "insiderguides", "mybooking" ],
experiment:t
}).run(i), _r_();
}), function(e, t) {
_i_("18c:145"), t.ensureNamespaceExists(sNSStartup), t[sNSStartup].bookingSticker = function() {
_i_("18c:768");
var i, n, r, o, a, s, _, c, l, u, d, h, p, f, g = 0;
t[sNSStartup].bookingSticker.stickToZIndex = "undefined" == typeof t[sNSStartup].bookingSticker.stickToZIndex ? 999 :t[sNSStartup].bookingSticker.stickToZIndex, t[sNSStartup].bookingSticker.stickedElements = "undefined" == typeof t[sNSStartup].bookingSticker.stickedElements ? [] :t[sNSStartup].bookingSticker.stickedElements, t[sNSStartup].bookingSticker.stickers = "undefined" == typeof t[sNSStartup].bookingSticker.stickers ? [] :t[sNSStartup].bookingSticker.stickers;
var m = function(e) {
_i_("18c:1673"), o.scrollTop() + g > p - n.data("stick-to-offset") && b(), o.scrollTop() + g <= p - n.data("stick-to-offset") && w(), _r_();
}, v = function(e) {
_i_("18c:1674"), n.css("width", "auto"), r.css("width", "auto").html(n.html()), r.is(":visible") ? (n.css("width", r.width()), E(r)) :(n.css("width", n.width()), E(n)), x(), m(), _r_();
}, b = function() {
if (_i_("18c:1675"), (-parseInt(n.css("top"), 10) || 0) < parseInt(n.height(), 10) && -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (y(), C()), o.scrollTop() + parseInt(n.height(), 10) + n.data("stick-to-offset") > x()) return n.css({
top:-(o.scrollTop() + parseInt(n.height(), 10) - x())
}), -parseInt(n.css("top"), 10) > parseInt(n.height(), 10) && (k(), C()), _r_();
if (f) return n.css({
top:n.data("stick-to-offset")
}), _r_();
return E(n), n.addClass("sticked").css({
top:n.data("stick-to-offset"),
"z-index":t[sNSStartup].bookingSticker.stickToZIndex
}).before(r), t[sNSStartup].bookingSticker.stickToZIndex--, f = !0, y(), C(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_STUCK, n), _r_();
}, w = function() {
if (_i_("18c:1676"), !f) return _r_();
return n.removeClass("sticked").css({
top:d,
"z-index":h
}), r.remove(), t[sNSStartup].bookingSticker.stickToZIndex++, f = !1, k(), C(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_RELEASE, n), _r_();
}, y = function() {
_i_("18c:1677"), -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (t[sNSStartup].bookingSticker.stickedElements.push(n), S()), _r_();
}, k = function() {
_i_("18c:1678");
var e = t[sNSStartup].bookingSticker.stickedElements.indexOf(n);
-1 !== e && (t[sNSStartup].bookingSticker.stickedElements.splice(e, 1), S()), _r_();
}, S = function() {
_i_("18c:1679"), t[sNSStartup].bookingSticker.stickedElements.sort(function(e, t) {
if (_i_("18c:2116"), e.data("elem-original-offset-top") > t.data("elem-original-offset-top")) return _r_(1);
if (e.data("elem-original-offset-top") < t.data("elem-original-offset-top")) return _r_(-1);
return _r_(0);
}), _r_();
}, C = function() {
if (_i_("18c:1680"), t[sNSStartup].bookingSticker.stickedElements.length > 0) for (var e = 0; e < t[sNSStartup].bookingSticker.stickedElements.length; e++) {
var i = t[sNSStartup].bookingSticker.stickedElements[e], n = i.data("initial-offset") || 0;
if (i.data("stick-to-offset", n), e > 0) {
for (var r = e, o = e - 1, a = n; o >= 0; ) a += t[sNSStartup].bookingSticker.stickedElements[o].outerHeight(), o--;
t[sNSStartup].bookingSticker.stickedElements[r].data("stick-to-offset", a);
}
}
_r_();
}, x = function() {
_i_("18c:1681");
var e = i && i.offset && i.offset();
return l = e ? "html" === i.selector ? 0 :parseInt(e.top, 10) :0, a = parseInt(i.css("border-bottom-width"), 10), _ = parseInt(i.css("padding-bottom"), 10), s = l + parseInt(i.height(), 10) + _ + a, _r_(s);
}, E = function(t) {
_i_("18c:1682");
var i = e(t), r = [ "inline", "inline-block", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group" ];
n.css({
width:i.width()
}), r.indexOf(i.css("display")) > 1 && n.find("td, th").each(function(t, n) {
_i_("18c:2244");
var r = e(i.find("td, th").get(t));
e(n).css({
width:r.width()
}), _r_();
}), _r_();
}, T = function() {
_i_("18c:1683"), o.bind({
scroll:m,
resize:v,
load:v
}), _r_();
}, $ = function() {
_i_("18c:1684"), p = r.is(":visible") ? parseInt(r.offset().top, 10) :parseInt(n.offset().top, 10), v(), C(), m(), _r_();
}, D = function(a, s, _) {
if (_i_("18c:1685"), i = e(s ? s :"html"), c = parseInt(i.height(), 10), n = e(a), u = parseInt(n.height(), 10), _ = _ || {}, !n.length) return _r_();
if (u >= c) return _r_();
var l = t[sNSStartup].bookingSticker.stickers;
-1 === l.indexOf(this) && l.push(this), o = e(window), elemOriginalCSSDisplay = n.css("display"), emOriginalCSSTop = n.css("top"), h = n.css("z-index"), x(), p = parseInt(n.offset().top, 10), n.data("elem-original-offset-top", p), n.data("stick-to-offset", 0), n.data("initial-offset", _.initialOffset), r = n.clone(!1).css({
visibility:"hidden"
}).addClass("sticked-placeholder"), E(n), T(), y(), C(), m(), _r_();
};
return _r_({
priority:9,
init:D,
restartPosition:$
});
}, t[sNSStartup].bookingSticker.update = function() {
_i_("18c:769");
var i = t[sNSStartup].bookingSticker.stickers || [];
if (!i.length) return _r_();
e.each(i, function(e, t) {
_i_("18c:1686"), t.restartPosition(), _r_();
}), t.events.emit("booking_sticker:update"), _r_();
}, _r_();
}(window.jQuery, window.booking), function() {
_i_("18c:146");
var e = B.require("jquery");
function t() {
_i_("18c:407");
var t = function(t, i) {
if (_i_("18c:1143"), 1 === booking.env.disableLegacySubscribeBounceIntent) return _r_();
var n = {
aggressive:!1,
sensitivity:20,
timer:500,
callback:function() {}
}, r = e("html");
i = e.extend({}, n, i), "hotel" === B.env.b_action && "413084" === B.env.b_partner_id && (i.timer = 3e4), setTimeout(o, i.timer);
function o() {
_i_("18c:1687"), r.bind("mouseleave", a), r.bind("keydown", _), _r_();
}
function a(e) {
if (_i_("18c:1688"), e.clientY > i.sensitivity || c("viewedBCheckBounce", "true") && !i.aggressive) return _r_();
var t = window.pageYOffset || document.documentElement.scrollTop || window.document.body.scrollTop, n = 50;
if (t > n) return _r_();
l(), i.callback(), _r_();
}
var s = !1;
function _(e) {
if (_i_("18c:1689"), s || c("viewedBCheckBounce", "true") && !i.aggressive) return _r_();
if (!e.metaKey || 76 != e.which) return _r_();
s = !0, l(), i.callback(), _r_();
}
function c(t, i) {
return _i_("18c:1690"), _r_(e.cookie(t) === i);
}
function l() {
_i_("18c:1691"), t && (t.style.display = "block"), u(), _r_();
}
function u() {
_i_("18c:1692"), e.cookie("viewedBCheckBounce", "true", {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), r.unbind("mouseleave", a), r.unbind("keydown", _), _r_();
}
return _r_({
fireBCheckBounce:l,
disableBCheckBounce:u
});
};
booking.env.showCheckBounceLightBox = 1, "hotel" !== booking.env.b_action && e(document).delegate("a", "click contextmenu", function() {
_i_("18c:1693"), booking.env.showCheckBounceLightBox = 0, _r_();
}), t(!1, {
callback:function() {
if (_i_("18c:1694"), 0 == booking.env.showCheckBounceLightBox || B.env.lp_sr_new_lightbox_open) return _r_();
var t = e("#notification_lightbox"), i = t.find(".linedinput"), n = i.val();
e(".user_center_popover, #inspire_filter_block").hide(), booking[sNSStartup].lightbox.show(t, {
customWrapperClassName:booking.env.notificationLightboxContainerClass || "notification-lightbox-container"
}), t.trigger("show-up"), booking.env.b_exclude_lang_firstname = 1, i.click(function() {
_i_("18c:2118");
var t = e(this);
t.val() === n ? t.val("") :t.select(), _r_();
}), i.blur(function() {
_i_("18c:2119");
var t = e(this);
"" === t.val() && t.val(n), _r_();
}), _r_();
}
}), _r_();
}
booking[sNSStartup].bounce_intent = {
priority:9,
init:function() {
_i_("18c:1144");
var i = e("#notification_lightbox").find("input[name=dest_id]");
i.length && t(), _r_();
}
}, _r_();
}(), booking.browserStorageHandler = function(e, t, i, n) {
_i_("18c:249");
var r = !1;
try {
r = e.localStorage && e.sessionStorage ? !0 :!1, r && e.localStorage.setItem("btest", "1");
} catch (o) {
r = !1;
}
var a = {
_readCookie:function(e) {
_i_("18c:1471");
var t = {};
try {
"undefined" != typeof JSON && (t = JSON.parse(n.cookie(e)) || {});
} catch (i) {}
return _r_(t);
},
_modifySingleValue:function(t, o, a, s, _) {
if (_i_("18c:1472"), !o || !a) return _r_(!1);
if (r && !_) {
var c = "session" === t ? e.sessionStorage :e.localStorage;
if ("delete" === o) c.removeItem(a); else try {
c.setItem(a, s);
} catch (l) {}
} else {
var u, d, h, p;
"session" === t ? u = "bs" :(u = "b", p = 30), d = this._readCookie(u), "delete" === o ? delete d[a] :d[a] = s, h = n.isEmptyObject(d) ? null :JSON.stringify(d), n.cookie(u, h, {
expires:p,
path:"/",
domain:i.b_domain_end
});
}
_r_();
},
_getValue:function(t, i, n) {
if (_i_("18c:1473"), !i) return _r_(void 0);
if (r && !n) {
var o = "session" === t ? e.sessionStorage :e.localStorage;
return _r_(o.getItem(i));
}
var a, s;
return a = "session" === t ? "bs" :"b", s = this._readCookie(a), _r_(s[i]);
}
};
return _r_({
addSessionValue:function(e, t, i) {
return _i_("18c:1145"), _r_(a._modifySingleValue("session", "add", e, t, i));
},
deleteSessionValue:function(e, t) {
return _i_("18c:1146"), _r_(a._modifySingleValue("session", "delete", e, void 0, t));
},
getSessionValue:function(e, t) {
return _i_("18c:1147"), _r_(a._getValue("session", e, t));
},
addPermanentValue:function(e, t, i) {
return _i_("18c:1148"), _r_(a._modifySingleValue("permanent", "add", e, t, i));
},
deletePermanentValue:function(e, t) {
return _i_("18c:1149"), _r_(a._modifySingleValue("permanent", "delete", e, void 0, t));
},
getPermanentValue:function(e, t) {
return _i_("18c:1150"), _r_(a._getValue("permanent", e, t));
},
isLocalStorageSupported:function() {
return _i_("18c:1151"), _r_(r);
}
});
}(window, document, booking.env, window.jQuery), function() {
_i_("18c:147");
var e = B.require("jquery"), t = booking.env, i = "", n = 1e3 * t.b_timestamp, r = Math.abs(+new Date() - new Date(n)) >= 864e5, o = r, a = booking[sNSStartup].calendar = {
priority:9,
version:1.4,
datefmt:"YYYY MM DD",
minimalDays:1,
maximalDays:30,
oldDays:1,
from:{
date:null,
day:null,
month:null,
year:null
},
till:{
date:null,
day:null,
month:null,
year:null
},
viewDateFrom:o ? new Date(n) :new Date(),
viewDateTill:o ? new Date(n) :new Date(),
oneDayInMS:864e5,
calendars:[],
calendarTypes:{
checkin_day:{
isTill:!1,
isDay:!0
},
checkin_monthday:{
isTill:!1,
isDay:!0
},
checkin_year_month:{
isTill:!1,
isDay:!1
},
pre_checkin_year_month:{
isTill:!1,
isDay:!1
},
checkout_day:{
isTill:!0,
isDay:!0
},
checkout_monthday:{
isTill:!0,
isDay:!0
},
checkout_year_month:{
isTill:!0,
isDay:!1
},
pre_checkout_year_month:{
isTill:!0,
isDay:!1
},
start_monthday:{
isTill:!1,
isDay:!0
},
start_year_month:{
isTill:!1,
isDay:!1
},
end_monthday:{
isTill:!0,
isDay:!0
},
end_year_month:{
isTill:!0,
isDay:!1
}
},
maxMonthsInFuture:12,
maxDaysInFuture:365,
maxDaysInThePast:1,
syncDate:null,
userServDate:!1,
hasDataRange:!1,
dateFormat:function(e, i, n) {
_i_("18c:1474");
var r = /D{1,4}|M{1,4}|YY(?:YY)?/g, o = function(e, t) {
for (_i_("18c:2041"), e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
return _r_(e);
}, a = this;
if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (i = e, e = void 0), e = e ? new Date(e) :new Date(), isNaN(e)) throw SyntaxError("invalid date");
i = String(i || a.datefmt), "UTC:" == i.slice(0, 4) && (i = i.slice(4), n = !0);
var s = n ? "getUTC" :"get", _ = e[s + "Date"](), c = e[s + "Day"](), l = e[s + "Month"](), u = e[s + "FullYear"](), d = (e[s + "Hours"](), e[s + "Minutes"](), e[s + "Seconds"](), {
D:_,
DD:o(_),
DDD:t.b_simple_weekdays_for_js[(c + 6) % 7],
DDDD:t.b_long_weekdays[(c + 6) % 7],
M:l + 1,
MM:o(l + 1),
MMM:t.b_short_months_abbr[l],
MMMM:t.b_short_months[l],
YY:String(u).slice(2),
YYYY:u
});
return _r_(i.replace(r, function(e) {
return _i_("18c:2042"), _r_(e in d ? d[e] :e.slice(1, e.length - 1));
}));
},
searchMinDays:function(e) {
_i_("18c:1475"), this.minimalDays = e, _r_();
},
maxYearsInFuture:function() {
_i_("18c:1476"), this.today = o ? this.noHourDate(new Date(n)) :this.noHourDate(null), this.maxMonthsInFuture = 12, this.maxDaysInFuture = parseInt(t.calendar_days_allowed_number), this.tomorrow = this.dateAfterDays(this.today, 1), this.endOfYear1 = this.dateAfterDays(this.today, this.maxDaysInFuture), this.endOfYear2 = this.dateAfterDays(this.today, this.maxDaysInFuture - 1), _r_();
},
setPast:function(e) {
_i_("18c:1477"), this.maxDaysInThePast = e, _r_();
},
syncDates:function(t, i, n, r, o) {
_i_("18c:1478"), e(".b_check_blocked").removeClass("b_check_blocked"), o || (e("#availcheck").attr("checked", !1), e("#define_group input, #define_group select").removeAttr("disabled"), e("#define_group").removeClass("disableme")), t ? (this.till.day = null == i ? this.till.day :i, this.till.month = null == n ? this.till.month :n, this.till.year = null == r ? this.till.year :r, null != this.till.day && null != this.till.month && null != this.till.year && (this.till.date = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"))) :(this.hasDataRange = !0, this.from.day = null == i ? this.from.day :i, this.from.month = null == n ? this.from.month :n, this.from.year = null == r ? this.from.year :r, null != this.from.day && null != this.from.month && null != this.from.year && (this.from.date = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00"), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")));
var a = !1;
t || null == this.from.date ? t && null != this.till.date && null == this.from.date && (o || (this.from.date = this.dateAfterDays(this.till.date, ~(this.minimalDays - 1)), a = !0)) :null != this.till.date ? this.till.date <= this.from.date ? (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.oldDays), a = !0) :booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckOutAvailable(this.from, this.till) === !1 && (this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00"), a = !0) :o || (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.minimalDays), a = !0), a && (t ? (this.from.year = this.from.date.getFullYear(), this.from.month = this.from.date.getMonth() + 1, this.from.day = this.from.date.getDate(), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")) :(this.till.year = this.till.date.getFullYear(), this.till.month = this.till.date.getMonth() + 1, this.till.day = this.till.date.getDate(), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00")));
for (var s = 0; s < this.calendars.length; s++) e(this.calendars[s]).trigger("changed_date", [ t, a ]);
booking.eventEmitter.trigger("CALENDAR:dates_changed", {
type:t ? "checkout" :"checkin",
otherChanged:a,
oldApi:this
}), _r_();
},
updateCalendarTables:function(t) {
_i_("18c:1479"), e(t).hasClass("calendarTill") ? this.rebuildCalendarTable(e("table", t).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear()) :this.rebuildCalendarTable(e("table", t).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear()), _r_();
},
init:function() {
if (_i_("18c:1480"), "hotel" == booking.env.b_action) return _r_();
if (this.calendarReady) return _r_();
this.calendarReady = !0, this.maxYearsInFuture(), this.initAddHandlers(), _r_();
},
initAddHandlers:function() {
_i_("18c:1481");
var t = this;
e("select").each(function() {
if (_i_("18c:2043"), "1" == this.getAttribute("data-no-old-calendar")) return _r_(!0);
var i = e(this).attr("name");
if (i && t.calendarTypes[i]) {
t.calendars.push(this), B.et.track("cDPRVQCLBMcaT");
var n = e(this).val();
if ("0" != n) {
var r = t.calendarTypes[i];
if (r.isDay) r.isTill ? t.till.day = n :t.from.day = n; else {
var o = n ? n.split("-") :"";
o.length && o.length > 0 && (r.isTill ? (t.till.year = o[0], t.till.month = o[1]) :(t.from.year = o[0], t.from.month = o[1]));
}
}
e(this).bind("changed_date", function(i, n, r) {
_i_("18c:2321"), e("input", this.parentNode).each(function() {
if (_i_("18c:2361"), t.calendarTypes[e(this).attr("name")]) {
var i = t.calendarTypes[e(this).attr("name")];
i.isDay && i.isTill && null != t.till.day && e(this).val(t.till.day), i.isDay && !i.isTill && null != t.from.day && e(this).val(t.from.day), !i.isDay && i.isTill && null != t.till.month && null != t.till.year && e(this).val(t.till.year + "-" + t.till.month), i.isDay || i.isTill || null == t.from.month || null == t.from.year || e(this).val(t.from.year + "-" + t.from.month);
}
_r_();
});
var o = t.calendarTypes[e(this).attr("name")];
((n || r) && o.isTill || (!n || r) && !o.isTill) && (o.isDay ? (o.isTill && null != t.till.year && null != t.till.month || !o.isTill && null != t.from.year && null != t.from.month) && t.rebuildDaySelect(this, o.isTill) :o.isTill && null != t.till.year && null != t.till.month ? t.selectOption(this, t.till.year + "-" + t.till.month) :o.isTill || null == t.from.year || null == t.from.month || t.selectOption(this, t.from.year + "-" + t.from.month)), _r_();
}), e(this).change(function() {
_i_("18c:2322");
var i = t.calendarTypes[e(this).attr("name")], n = e(this).val(), r = n.split("-");
if ("0" != n) if (e(this).parents(".newcalendar").length) {
var o = e(this).parents(".newcalendar");
r.length && r.length > 1 && (e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(r[0] + "/" + r[1] + "/" + t.viewDateTill.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", o).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = new Date(r[0] + "/" + r[1] + "/" + t.viewDateFrom.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", o).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear())));
} else t.syncDates(i.isTill, i.isDay ? n :null, i.isDay ? null :r.length && r.length > 1 ? r[1] :null, i.isDay ? null :r[0]);
_r_();
});
}
_r_();
}), e(".newcalendar").each(function() {
_i_("18c:2044"), B.et.track("cDPRVQCLBMcaT"), e(this).hasClass("calendarTill") ? t.rebuildCalendarTable(e("table", this).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.rebuildCalendarTable(e("table", this).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.calendars.push(this), e(this).bind("changed_date", function(i, n, r) {
if (_i_("18c:2277"), e(this).hasClass("calendarTill")) {
if (null != t.till.month && null != t.till.year) {
var o = t.till.day ? t.till.day :1;
t.viewDateTill = new Date(t.till.year + "/" + t.till.month + "/" + o + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !0, t.till.month, t.till.year);
}
} else if (null != t.from.month && null != t.from.year) {
var o = t.from.day ? t.from.day :1;
t.viewDateFrom = new Date(t.from.year + "/" + t.from.month + "/" + o + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !1, t.from.month, t.from.year);
}
t.updateLabels(), _r_();
});
var i = e(this);
i.undelegate("td", "click").delegate("td", "click", function() {
_i_("18c:2278");
var t = e(this).text();
return e("a", this).length && n(t), _r_(!1);
});
function n(n, r) {
if (_i_("18c:2189"), !parseInt(n)) return _r_();
i.hasClass("calendarTill") ? t.syncDates(!0, n, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.syncDates(!1, n, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.closePopupCalendar();
var o = booking.formatter.date(t.from.year + "-" + t.from.month + "-" + t.from.day, "short_date"), a = booking.formatter.date(t.till.year + "-" + t.till.month + "-" + t.till.day, "short_date");
e(".checkinDateSection .selected_date").text(o), e(".checkoutDateSection .selected_date").text(a), t.checkFormPost(), _r_();
}
e(".nextmonth", this).bind("click", function() {
if (_i_("18c:2279"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e(".prevmonth", this).bind("click", function() {
if (_i_("18c:2280"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e("select", this).each(function() {
_i_("18c:2281");
var i = e(this).attr("name"), n = e(this).val();
t.calendarTypes[i] ? t.calendarTypes[i].isDay || (e(this).attr("name", "pre_" + i), e(this.parentNode).append('<input type="hidden" name="' + i + '" value="' + n + '" />')) :e(this).change(function() {
_i_("18c:2362");
var i = e(this).val();
if ("0" != i) {
var n = i.split("-");
n.length && n.length > 0 && (oCalendar = e(this).parents(".newcalendar"), e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !0, n[1], n[0])) :(t.viewDateFrom = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !1, n[1], n[0])));
}
_r_();
}), _r_();
}), _r_();
}), B.env.b_calendar2 || e(".calendarLink").bind("click.calendar", function() {
return _i_("18c:2190"), window.calendarRef = e(this).parent().attr("class"), t.openPopupCalendar(this), _r_(!1);
}), e(".calendar_close").click(function() {
return _i_("18c:2045"), t.closePopupCalendar(), _r_(!1);
}), null != this.from.year && null != this.from.month && null != this.from.day && t.syncDates(!1, this.from.day, this.from.month, this.from.year, !0), null != this.till.year && null != this.till.month && null != this.till.day && t.syncDates(!0, this.till.day, this.till.month, this.till.year, !0), "#auto_open_checkout" == window.location.hash && e("#auto_open_checkout a").click(), _r_();
},
checkFormPost:function() {
if (_i_("18c:1482"), i && e("." + i + " .submit_on_change").length) if ("hotel" == booking.env.b_action) {
if ("dealCheckinDate" == i && e("#hotelpage_availform").attr("action").indexOf("#") > -1) {
var t = e("#hotelpage_availform").attr("action").split("#")[0];
e("#hotelpage_availform").attr("action", t);
}
e("#hotelpage_availform").submit();
} else e("#frm").submit();
_r_();
},
updateLabels:function() {
_i_("18c:1483");
var i = Math.round((this.noHourDate(this.till.date) - this.noHourDate(this.from.date)) / this.oneDayInMS);
if (i > 0 && t.night && t.nights) {
var n = 1 == i ? "1 " + t.night :t.nights.replace("{amount}", i);
n.indexOf(i) < 0 && (n = i + " " + n), e(".dayamount").length && e(".dayamount").text(n), e(".no_nights_helper").length && e(".no_nights_helper").text("(" + n + ")");
}
e(".calendarFrom").length && (e(".calendarFrom .ct_month").text(t.b_short_months[parseInt(this.from.month) - 1]), e(".calendarFrom .ct_day").text(this.from.day), e(".calendarTill").length && (e(".calendarTill .ct_month").text(t.b_short_months[parseInt(this.till.month) - 1]), e(".calendarTill .ct_day").text(this.till.day))), _r_();
},
updatePrevNextLinks:function(t, i) {
_i_("18c:1484");
var n = this, r = this.dateAfterDays(this.tomorrow, this.maxDaysInFuture - 2), o = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.tomorrow, ~this.maxDaysInThePast) :this.tomorrow, a = e(i).parents(".calendarTill").length ? this.viewDateTill :this.viewDateFrom;
e(".nextmonth", i.parentNode).each(function() {
_i_("18c:2046"), n.dateAfterDays(a, 0, 1, !0) > r ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), e(".prevmonth", i.parentNode).each(function() {
_i_("18c:2047"), n.dateAfterDays(a, 0, -1, !0) < o ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), this.selectOption(e("select", i.parentNode), a.getFullYear() + "-" + (a.getMonth() + 1)), _r_();
},
rebuildCalendarTable:function(i, n, r, o) {
_i_("18c:1485");
var a = e(i).parents(".newcalendar"), s = document.createElement("table");
e(s).html(i.innerHTML);
var _ = booking.env.b_site_experiment_av_calendar && a.hasClass("avCalendar");
n && _ && this.from.date && (e(".avCalendar_pick_checkin").hide(), e(".avCalendar.calendarTill").show());
var c = parseInt(new Date(o + "/" + r + "/1").getDay()) - 2;
t.sunday_first ? c += 1 :0 > c && (c = 7 + c);
for (var l = s.getElementsByTagName("td"), u = 0; 42 > u; u++) {
var d = u - c, h = l[u];
if (d > 0 && d <= this.getDaysInMonth(r, o)) {
var p = new Date(o + "/" + r + "/" + d + " 00:00:00");
if (this.isValidDate(p, n)) {
var f = "";
if (_ ? ((p - this.till.date == 0 && n || p - this.from.date == 0 && !n) && (f += " selected"), !n && booking.avCalendar.isDateInRange({
year:o,
month:r,
day:d
}) && (f += booking.avCalendar.isCheckInAvailable({
year:o,
month:r,
day:d
}) ? " has_av" :" no_av"), n && this.from.day && booking.avCalendar.isDateInRange(this.from) && (f += booking.avCalendar.isCheckOutAvailable(this.from, {
year:o,
month:r,
day:d
}) ? " has_av" :" no_av")) :(p - this.today == 0 && (f += " today"), p - this.till.date == 0 && (f += n ? " selected" :" endsel"), p - this.from.date == 0 && (f += n ? " endsel" :" selected"), p < this.till.date && p > this.from.date && (f += " inbetween")), booking.env.b_fd_hotel_dates) for (var g = 0; g < booking.env.b_fd_hotel_dates.length; g++) if (booking.env.b_fd_hotel_dates[g]) {
e.lst = booking.env.b_fd_hotel_dates[g].split("-");
var m = new Date(Number(e.lst[0]), Number(e.lst[1]) - 1, Number(e.lst[2]));
p - m == 0 && (f += " flashdeals");
}
h.innerHTML = '<a href="#" class="' + f + '">' + d + "</a>";
} else p - this.today != 0 || _ ? h.innerHTML = "<span>" + d + "</span>" :h.innerHTML = '<span class="today">' + d + "</span>";
} else h.innerHTML = "&nbsp;";
}
e(i).html(s.innerHTML), this.updatePrevNextLinks(!0, i), _r_();
},
isValidDate:function(e, t) {
_i_("18c:1486");
var i = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.today, ~this.maxDaysInThePast) :this.today;
return _r_(!(i > e || t && e < this.tomorrow && this.maxDaysInThePast < 2 || e > this.endOfYear1 || !t && e > this.endOfYear2));
},
rebuildDaySelect:function(i, n) {
_i_("18c:1487");
var r = "&nbsp;";
if (n) {
var o = this.till.month, a = this.till.year, s = this.till.day;
this.from.month, this.from.year, this.from.day;
(null == s || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
} else {
var o = this.from.month, a = this.from.year, s = this.from.day;
(null == s || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
}
e(i).html(r);
var _ = this.getDaysInMonth(o, a);
function c(e, t, i) {
_i_("18c:1787");
var n = new Date(Date.UTC(e, t - 1, i)), i = n.getUTCDay();
return i = i > 0 ? i - 1 :6, _r_(i);
}
for (var l = 1; _ >= l; l++) {
var u = c(a, o, l), d = t.b_simple_weekdays_for_js[u] + " " + l;
("ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang || "hu" == t.b_lang) && (d = "ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang ? l + B.env.sbox_day + " " + t.b_simple_weekdays_for_js[u] :l + " " + t.b_simple_weekdays_for_js[u]), e(i).append('<option value="' + l + '"' + (s == l ? ' selected="selected"' :"") + ">" + d + "</option>");
}
_r_();
},
noHourDate:function(e) {
_i_("18c:1488");
var t = "undefined" == typeof e || null === e ? this.userServDate ? new Date(this.syncDate) :new Date() :e;
return t.setHours(0), t.setMilliseconds(0), t.setMinutes(0), t.setSeconds(0), _r_(t);
},
getDaysInMonth:function(e, t) {
_i_("18c:1489");
var i = [ 31, function() {
return _i_("18c:2191"), _r_(t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 29 :28);
}(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
return _r_(i[e - 1]);
},
selectOption:function(t, i, n) {
_i_("18c:1490");
for (var r, o, a, s = e(t).parents(".newcalendar"), _ = booking.env.b_site_experiment_av_calendar && s.hasClass("avCalendar"), c = !1, l = e("option", t), u = 0; u < l.length; u++) r = l[u], o = e(r), a = o.text(), i && "" != i && (o.val() == i ? (r.selected = !0, c = !0, _ && s.find(".avCalendar_month").text(a)) :l[u].selected = !1), n && "" != n && (a == i ? (r.selected = !0, c = !0, _ && s.find(".avCalendar_month").text(a)) :r.selected = !1);
return _r_(c);
},
dateAfterDays:function(e, t, i, n) {
_i_("18c:1491");
var r = this.oneDayInMS * t, o = 12;
if (n && e.setDate(1), i) {
this.noHourDate(e);
if ((i > o || -1 * o > i) && (e.setFullYear(e.getFullYear() + parseInt(i / o)), i %= o), 0 != i) {
var a = e.getMonth();
a + i > o ? (e.setFullYear(e.getFullYear() + 1), e.setMonth(a + i - o)) :0 > a + i ? (e.setFullYear(e.getFullYear() - 1), e.setMonth(a + i + o)) :e.setMonth(a + i);
}
}
var s = new Date(1 * this.noHourDate(e) + r);
if (e.getTimezoneOffset() != s.getTimezoneOffset()) {
var _ = e.getTimezoneOffset() - s.getTimezoneOffset();
_ = 60 * (0 > _ ? ~_ + 1 :_) * 1e3, _ > 0 && (s = new Date(1 * this.noHourDate(e) + r + _));
}
return _r_(s);
},
setPosition:function(i) {
_i_("18c:1492");
var n = e(i).offset(), r = 10, o = n.top + r;
leftPos = n.left, $window = e(window), windowHeight = $window.height(), windowWidth = $window.width(), documentScrollTop = e(document).scrollTop(), t.rtl && (leftPos -= 211), windowWidth < leftPos + 230 && windowWidth - 230 > 0 && (leftPos = windowWidth - 230), windowHeight + documentScrollTop < o + 230 && (o - documentScrollTop - 250 > 0 ? o -= 250 :o = windowHeight + documentScrollTop - 250), e("#calendar_popup").css({
top:o + "px",
left:leftPos + "px"
}), _r_();
},
scrollHandlers:[],
openPopupCalendar:function(t) {
_i_("18c:1493");
var i, n = e("#calendar_popup").get(0), r = e(window), o = this, a = "";
switch (t.nodeName.toLowerCase()) {
case "a":
a = t.href.split("#")[1];
break;

case "input":
a = t.name;
break;

case "select":
a = t.name;
break;

case "label":
a = t.getAttribute("data-title");
}
i = function() {
_i_("18c:2048"), o.setPosition(t), _r_();
}, this.scrollHandlers.push(i), this.setPosition(t), r.bind("scroll resize", i), e("#calendar_popup").show(), this.calendarTypes[a] && this.calendarTypes[a].isTill ? (e(n).addClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear())) :(e(n).removeClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear())), e("body").bind("close_calendar", this.closeHandler), booking.eventEmitter.trigger("CALENDAR:datepicker_opened", this), _r_();
},
closeHandler:function() {
_i_("18c:1494"), a.closePopupCalendar(), _r_();
},
closePopupCalendar:function() {
_i_("18c:1495");
var t, i, n;
for (e("#calendar_popup").removeClass("calendarTill").hide(), e("body").unbind("close_calendar", this.closeHandler), t = 0, i = this.scrollHandlers.length; i > t; t += 1) n = this.scrollHandlers[t], "function" == typeof n && $window.unbind("scroll resize", n);
this.scrollHandlers = [], _r_();
}
};
_r_();
}(), booking[sNSStartupLoad].change_dates = {
priority:9,
init:function() {
_i_("18c:408"), "undefined" != typeof trigger_error_template_event_tracking && trigger_error_template_event_tracking === !0 && (booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Aggregate)", b_errors), "" != b_this_referer && booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Referrer)", b_this_referer + " - " + b_errors), booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (RequestURL)", b_this_url + " - " + b_errors)), "send_change_dates" == booking.env.b_page && ($("#message_changing-dates").fadeIn(), $("#change_dates").submit(function() {
_i_("18c:1695");
var e = $("input[name=do]"), t = $("#change_dates input[name=checkin_date]").val(), i = $("#change_dates input[name=checkout_date]").val();
t && i && (t.length > 0 || i.length > 0) && (cin_yymm = $("#checkin_year_month").val(), cin_dd = $("#checkin_day").val(), cin_yymmdd = cin_yymm + "-" + cin_dd, cout_yymm = $("#checkout_year_month").val(), cout_dd = $("#checkout_monthday").val(), cout_yymmdd = cout_yymm + "-" + cout_dd, a = t.replace(/-0/g, "-"), b = i.replace(/-0/g, "-"), (a != cin_yymmdd || b != cout_yymmdd) && e.val("dochangedates")), _r_();
})), "mybooking" == booking.env.b_action && $("#message_changing-dates").fadeIn(), _r_();
}
}, booking.command("lightbox-hide", function() {
_i_("18c:148"), booking.lightbox.hide(), _r_();
}), booking.command.define({
name:"show-auth-lightbox",
handler:function(e) {
if (_i_("18c:409"), B.env.b_run_redirect_from_app_to_book_for_login) {
var t = B.env.b_login_page_url, i = e ? e.tab :"";
i && (t += B.env.b_query_params_delimiter + "auth_tab=" + i), window.location.href = t;
} else {
if (B.authLightbox.init(), e.tab || (e.tab = "signin"), e.mode && e.mode in this.modes) return _r_(this.modes[e.mode].apply(this, arguments));
B.authLightbox.show(e);
}
_r_();
},
modes:{
"raise-auth":function(e) {
_i_("18c:770");
var t = B.promise();
return B.authLightbox.show(e), B.eventEmitter.one("auth-dialog:hide", n).one("UA:got_auth_level_high", r), t.then(i, i), _r_(t);
function i() {
_i_("18c:1152"), B.eventEmitter.unbind("auth-dialog:hide", n).unbind("UA:got_auth_level_high", r), _r_();
}
function n() {
_i_("18c:1153"), t.reject(), _r_();
}
function r(e, i) {
_i_("18c:1154");
var n = $.grep(B.env.b_user_emails, function(e) {
return _i_("18c:2049"), _r_(e.email === i.username);
});
n.length ? t.fulfill() :t.reject({
error:"different_email"
}), B.authLightbox.hide(), _r_();
}
}
}
}), booking.command("show-profile-menu", function() {}), booking.command.define({
name:"show-currency-selector",
handler:function(e) {
_i_("18c:410"), $(".user_center_option[data-id=currency_selector] .popover_trigger").click(), _r_();
}
}), booking.command.define("social-disconnect", function(e) {
_i_("18c:150");
var t = B.require("lightbox"), i = $(".js-social-connect-dialog--" + e.provider + "-disconnect");
i.length && t.show(i, {
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}), B.command("profile-add-email", function(e) {
if (_i_("18c:151"), !B.require("mysettings-model-emails") || "mysettings" != booking.env.b_action) return _r_();
B.require("mysettings-model-emails").getInstance().save({
b_is_new:!0,
b_email:e.email
}), _r_();
}), booking[booking.env && booking.env.cookie_warning_v2 ? sNSStartupLoad :sNSStartup].cookie_warning = {
priority:10,
init:function() {
_i_("18c:411");
var e, t, i = window.jQuery;
if (window.self !== window.top && !+B.env.b_bookings_owned) return _r_();
if (booking.env && booking.env.cookie_warning_v2 && (/(^|;)\s*cws=/.test(document.cookie) || (e = new Date(), e.setTime(e.getTime() + 31536e6), t = B.env.b_domain_end || ".booking.com", document.cookie = "cws=true; domain=" + t + "; path=/; expires=" + e.toGMTString(), B.env.cookie_warning = !0)), B.env.cookie_warning) {
i(window).height() < 768 && i(window).width() < 1024 && B.et.stage("AEJPOQYINTIaAWbLBLcVT", 1);
var n = i("#cookie_warning"), r = function() {
_i_("18c:1696"), B.env.cookie_warning_excluded_country || i(document).unbind("click.cookieMessage"), i(document).unbind("keydown.cookieMessage"), i(window).unbind("scroll.cookieMessage"), _r_();
}, o = function(e) {
if (_i_("18c:1697"), i(e).hasClass("close_warning")) return n.fadeOut("1000", function() {
_i_("18c:2245"), i(e).remove(), i(document).unbind("click.cookieMessage"), _r_();
}), booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Close"), _r_(!1);
booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Read"), _r_();
}, a = function() {
_i_("18c:1698"), B.env.cookie_warning_excluded_country || n.fadeOut(1e3), r(), _r_();
};
i(document).bind({
"click.cookieMessage":function(e) {
_i_("18c:1911");
var t = e.target ? e.target :e.srcElement;
i(t).parents("#cookie_warning").length && "a" === t.tagName.toLowerCase() ? (o(t), r()) :i(t).parents("#cookie_warning").length || B.env.cookie_warning_excluded_country ? !i(t).parents("#cookie_warning").length && B.env.cookie_warning_excluded_country && (n.fadeOut(1e3), r()) :a(), _r_();
},
"keydown.cookieMessage":function() {
_i_("18c:1912"), a(), _r_();
}
}), i(window).bind({
"scroll.cookieMessage":function() {
_i_("18c:1913"), i(this).scrollTop() && (B.env.cookie_warning_excluded_country ? a() :i(window).unbind("scroll.cookieMessage")), _r_();
}
}), n.show();
}
_r_();
}
}, B.when({
events:"ready"
}).run(function() {
_i_("18c:152");
var e, t = {
DOM_CHANGED:"GENERAL:dom_changed",
LAYOUT_CHANGED:"GENERAL:layout_changed",
THROTTLED_SCROLL:"GENERAL:throttled_scroll",
THROTTLED_RESIZE:"GENERAL:throttled_resize",
HP_TAB_OPENED:"tab-opened",
HEADER_LOGIN_TAB_SELECTED:"user_access_menu_register_tab",
HEADER_REGISTER_TAB_SELECTED:"user_access_menu_login_tab",
HEADER_POPOVER_SHOWN:"uc_popover_showed",
HP_RT_LIGHTBOX_OPENED:"rt-lightbox-open",
HP_RT_LIGHTBOX_CLOSED:"rt-lightbox-closed"
};
i.prototype.track = function() {
return _i_("18c:771"), this.tracked = !0, _r_(B.et.track(this.hash));
}, i.prototype.storeOffset = function() {
return _i_("18c:772"), this.offsetTop = this.$element.offset().top, _r_(this.offsetTop);
};
function i(e, t) {
_i_("18c:412"), this.hash = e, this.node = t, this.$element = $(t), this.tracked = !1, this.storeOffset(), _r_();
}
({
$window:$(window),
bindEvents:function() {
_i_("18c:1496");
var e = this.$window;
e.scroll(B.tools.functions.throttle(function(e) {
_i_("18c:2120"), B.eventEmitter.trigger(t.THROTTLED_SCROLL, e), _r_();
}, 200, {
leading:!1,
trailing:!0
})), e.resize(B.tools.functions.throttle(function(e) {
_i_("18c:2121"), B.eventEmitter.trigger(t.THROTTLED_RESIZE, e), _r_();
}, 500, {
leading:!1,
trailing:!0
})), B.eventEmitter.bind(t.THROTTLED_RESIZE, $.proxy(this.onScroll, this)), B.eventEmitter.bind(t.THROTTLED_SCROLL, $.proxy(this.onResize, this)), B.eventEmitter.bind([ t.LAYOUT_CHANGED, t.HP_TAB_OPENED, t.HEADER_POPOVER_SHOWN, t.HEADER_LOGIN_TAB_SELECTED, t.HEADER_REGISTER_TAB_SELECTED, t.HEADER_REGISTER_TAB_SELECTED, t.HP_RT_LIGHTBOX_OPENED, t.HP_RT_LIGHTBOX_CLOSED ].join(" "), $.proxy(this.onLayoutChanges, this)), B.eventEmitter.bind(t.DOM_CHANGED, $.proxy(this.onDOMChanges, this)), _r_();
},
createExperimentsList:function() {
_i_("18c:1497");
var e = $.makeArray(document.scripts);
this.experiments = e.reduce(function(e, t) {
return _i_("18c:2122"), "tracking" === t.type && e.push(new i(t.getAttribute("data-id"), t.parentNode)), _r_(e);
}, []), _r_();
},
updateExperimentPositions:function() {
_i_("18c:1498"), this.experiments.forEach(function(e) {
_i_("18c:2050"), e.tracked || e.storeOffset(), _r_();
}), _r_();
},
checkAndTrack:function() {
_i_("18c:1499");
var e = this.$window.scrollTop() + this.$window.height();
this.experiments.forEach(function(t) {
_i_("18c:2051"), !t.tracked && t.offsetTop < e && (t.storeOffset(), t.$element.is(":visible") && t.offsetTop < e && t.track()), _r_();
}), _r_();
},
onScroll:function() {
_i_("18c:1500"), this.checkAndTrack(), _r_();
},
onResize:function() {
_i_("18c:1501"), this.updateExperimentPositions(), this.checkAndTrack(), _r_();
},
onLayoutChanges:function() {
_i_("18c:1502"), this.updateExperimentPositions(), this.checkAndTrack(), _r_();
},
onDOMChanges:function() {
_i_("18c:1503"), this.createExperimentsList(), this.checkAndTrack(), _r_();
},
scan:function() {
_i_("18c:1504"), e && this.createExperimentsList(), this.updateExperimentPositions(), this.checkAndTrack(), _r_();
},
init:function() {
_i_("18c:1505"), this.createExperimentsList(), this.bindEvents(), this.checkAndTrack(), e = B.et.track("YdVbLFNSUMfTdFO"), B.env && B.env.b_run_loc_ce_update_timer_v2 || setInterval(this.scan.bind(this), 1e3), _r_();
}
}).init(), _r_();
}), function(e, t) {
_i_("18c:153"), e("et_copy_tracking", [ "et", "jquery" ], function(e, t) {
_i_("18c:773");
var i = B.env && B.env.b_run_loc_ce_update_timer_v2, n = null, r = 1e3, o = [], a = t(window);
function s() {
_i_("18c:1155"), t.makeArray(document.scripts).filter(function(e) {
return _i_("18c:2123"), _r_("track_copy" === e.type);
}).forEach(function(i) {
_i_("18c:1914");
var n = i.getAttribute("data-hash"), r = i.parentNode, a = t(r);
a.is(":visible") ? e.on("view", r).stage(n, 1) :o.push({
hash:n,
$node:a,
offsetTop:a.offset().top
}), _r_();
}), _r_();
}
function _() {
_i_("18c:1156");
var t = a.scrollTop() + a.height();
o.forEach(function(i, n) {
_i_("18c:1915"), i.offsetTop < t && (i.offsetTop = i.$node.offset().top, i.$node.is(":visible") && i.offsetTop < t && (e.stage(i.hash, 1), o.splice(n, 1))), _r_();
}), _r_();
}
return t(function() {
_i_("18c:1699"), s(), i && (n = setInterval(function() {
_i_("18c:2282"), o.length ? _() :clearInterval(n), _r_();
}, r)), _r_();
}), _r_({});
}), t("et_copy_tracking"), _r_();
}(B.define, B.require), booking[sNSExperiments].HOGeVdCScVUKeYEGecO = {
init:function() {
_i_("18c:413"), this.$first = $("#wl252-modal-1"), "true" !== $.cookie("wl252-gotit") && (booking[sNSStartup].lightbox.show(this.$first, {
customWrapperClassName:booking.et.track("MRLLfYCeHHQeFHVPSJQEZWSLCAae") ? "wl252-modal-wrapper--styled" :"wl252-modal"
}, this.autoFocus), booking.et.stage("MRLLfYCeHHQeFHVPSJQEZWSLCAae", 1), booking.eventEmitter.trigger("account-onboarding-modal-show")), this.setSkip(), this.gotIt(), this.saveNames(), this.saveStars(), this.placeholderShim(), _r_();
},
autoFocus:function() {
_i_("18c:414"), this.$first = $("#wl252-modal-1"), "msie" !== B.env.b_browser ? this.$first.find("#wl252-firstname").focus() :B.env.b_browser_version > 9 && this.$first.find("input:first").focus(), _r_();
},
placeholderShim:function() {
_i_("18c:415"), $("#wl252-firstname").add("#wl252-lastname").placeholder(), _r_();
},
gotIt:function() {
_i_("18c:416"), $(".wl252-gotit").click(function(e) {
_i_("18c:1157"), e.preventDefault(), $.cookie("wl252-gotit", "true"), booking[sNSStartup].lightbox.hide(), window.location.reload(), _r_();
}), _r_();
},
saveNames:function() {
_i_("18c:417");
var e = this, t = $("#wl252-onboard-name");
t.submit(function() {
_i_("18c:1158"), e.nextModal(1), _r_();
}), _r_();
},
saveStars:function() {
_i_("18c:418");
var e = this, t = $("#wl252-onboard-stars");
t.submit(function() {
_i_("18c:1159"), e.nextModal(2), _r_();
}), _r_();
},
nextModal:function(e) {
_i_("18c:419");
var t = e + 1, i = $("#wl252-modal-" + t);
0 !== i.length ? (booking[sNSStartup].lightbox.hide(), booking[sNSStartup].lightbox.show(i, {
customWrapperClassName:booking.et.track("MRLLfYCeHHQeFHVPSJQEZWSLCAae") ? "wl252-modal-wrapper--styled" :"wl252-modal"
})) :booking[sNSStartup].lightbox.hide(), _r_();
},
setSkip:function() {
_i_("18c:420");
var e = this;
$(".wl252-modal__skip").click(function(t) {
_i_("18c:1160"), t.preventDefault(), e.nextModal(parseInt($(this).data("modal"), 10)), _r_();
}), _r_();
}
}, window.switchDateStack = function(e, t) {
_i_("18c:154");
var i = e, n = 0;
for ($(e).parents("div").length && (i = $(e).parents("div").get(0)); i; ) "div" === i.nodeName.toLowerCase() && (n++, n == t && (i.style.display = "block")), i = i.nextSibling;
_r_();
}, function() {
_i_("18c:155"), booking[sNSStartup].AaSDdQeRYZDCATAJRXRT = {
init:function() {
_i_("18c:1161");
var e = "/resend_confirm_primary_email", t = this, i = $(".user-notification-email-confirm-resend, .js-notification-confirm-email");
this.$targetParent = i.parent(), i.click(function(n) {
_i_("18c:1916"), n.preventDefault();
var r = $(this).data("target-url") || e;
return r && (i.hide(), t.showLoadingMsg(), $.ajax({
url:r,
dataType:"json",
data:{
aid:B.env.b_aid,
lang:B.env.b_lang
},
success:function(e) {
_i_("18c:2332"), $(".user-notification-email-confirm-default").hide(), e && "sent" === e.status ? t.showSuccessMsg() :t.showErrorMsg(), _r_();
},
error:function() {
_i_("18c:2333"), $(".user-notification-email-confirm-default").hide(), t.showErrorMsg(), _r_();
}
})), _r_(!1);
}), _r_();
},
showLoadingMsg:function() {
_i_("18c:1162"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_loading", this.$targetParent).show(), _r_();
},
showErrorMsg:function() {
_i_("18c:1163"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_retry", this.$targetParent).show(), _r_();
},
showSuccessMsg:function() {
_i_("18c:1164"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_success", this.$targetParent).show(), _r_();
}
}, _r_();
}(), B[sNSStartup].destination_suggestion_on_right = {
init:function() {
_i_("18c:421");
var e, t = $("#searchbox_suggestion_on_right"), i = "destination-section", n = "tab-nav-item-active", r = "tab-content", o = "tab-panel", a = "tab-panel-active", s = ".tab-nav li", _ = 300;
t.delegate(s, "click", function(t) {
_i_("18c:1165"), t.preventDefault(), clearTimeout(e), c($(this)), _r_();
}), t.delegate(s, "mouseover", function() {
_i_("18c:1166");
var t = $(this);
e = setTimeout(function() {
_i_("18c:2052"), c(t), _r_();
}, _), _r_();
}), t.delegate(s, "mouseout", function() {
_i_("18c:1167"), clearTimeout(e), _r_();
});
function c(e) {
_i_("18c:774");
var t = e.closest("." + i), s = t.children("." + r);
e.siblings().removeClass(n), e.addClass(n), s.find("." + o).removeClass(a).eq(e.index()).addClass(a), _r_();
}
_r_();
}
}, booking[sNSStartup].emk_header_bar = function() {
"use strict";
_i_("18c:250");
function e() {
_i_("18c:546");
var e = $("#emk_header_bar");
if (!e.length) return _r_();
var t = function() {
_i_("18c:1506"), e.hide(), $("body").removeClass("emk_header"), _r_();
}, i = function() {
_i_("18c:1507");
var e = booking.env.b_label || "";
$.ajax({
url:"/newsletter/header_bar?label=" + e,
type:"GET",
success:function() {
_i_("18c:2192"), t(), _r_();
},
error:function() {
_i_("18c:2193"), t(), _r_();
}
}), _r_();
};
e.find(".js-close-emk-header-bar").click(function(e) {
_i_("18c:1508"), e.preventDefault(), i(), _r_();
}), _r_();
}
return _r_({
priority:9,
init:e
});
}(), $(function() {
_i_("18c:156");
var e = [ "item_searching", "topten", "item_volcano_eruption", "item_roomtypes", "item_pricing", "item_creditcards", "item_payments", "item_reservation_process", "item_hotelpolicies", "item_confirmation", "item_extrafacilities", "item_cancellation", "item_directions", "item_reviews" ], t = window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
if (null !== t && t.length > 1 && t[1].length) {
var i = t[1].split(",");
i.length && ($(e).each(function(e, t) {
_i_("18c:1700"), hideEl(t), _r_();
}), $.each(i, function(e, t) {
_i_("18c:1701");
var i = $("span#" + t), n = i.prev();
i && n && t.match(/faqa\d+/) && !n.parents("span.faqA").length && (n.clone().appendTo("#faq_deeplink"), i.clone().appendTo("#faq_deeplink")), _r_();
}));
}
if ($(".staticmenustyle").children("li").children("a").each(function(e, t) {
_i_("18c:775"), $(t).click(function() {
_i_("18c:1702"), $("#faq_deeplink").children().remove(), _r_();
}), _r_();
}), location && location.hash) {
var n = location.hash.slice(1);
if ("" != n) for (var r = 0; r < e.length; r++) {
var o = e[r];
o == "item_" + n || o == n ? showEl(o) :hideEl(o);
}
}
_r_();
}), booking.ensureNamespaceExists("feature"), booking.feature.transition = function() {
_i_("18c:251");
var e = document.body || document.documentElement, t = e.style, i = "transition";
if ("string" == typeof t[i]) return _r_(!0);
for (var n = [ "Moz", "webkit", "Webkit", "Khtml", "O", "ms" ], i = i.charAt(0).toUpperCase() + i.substr(1), r = 0; r < n.length; r++) if ("string" == typeof t[n[r] + i]) return _r_(!0);
return _r_(!1);
}(), booking[sNSStartup].fixMail = {
priority:9,
init:function() {
_i_("18c:422");
var e = this;
$(".encrypted").each(function() {
_i_("18c:1168"), $(this).html(e.deCode($(this).text())), $(this).removeClass("encrypted"), _r_();
}), _r_();
},
deCode:function(e) {
return _i_("18c:423"), _r_(e.replace(/[a-zA-Z]/g, function(e) {
return _i_("18c:1169"), _r_(String.fromCharCode(("Z" >= e ? 90 :122) >= (e = e.charCodeAt(0) + 13) ? e :e - 26));
}));
}
};

function calcage(e, t, i) {
return _i_("18c:2"), s = (Math.floor(e / t) % i).toString(), LeadingZero && s.length < 2 && (s = "0" + s), _r_("<b>" + s + "</b>");
}

function CountBack(e) {
if (_i_("18c:3"), 0 > e) {
if (document.getElementById("cntdwn")) return document.getElementById("cntdwn").innerHTML = FinishMessage, _r_();
} else e > 86400 ? (DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(e, 86400, 1e5)), document.getElementById("flash_days").innerHTML = DisplayStr_days) :document.getElementById("flash_days_wrapper").style.display = "none";
DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(e, 3600, 24)), DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(e, 60, 60)), DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(e, 1, 60)), document.getElementById("flash_hours").innerHTML = DisplayStr_hours, document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes, document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds, CountActive && setTimeout("CountBack(" + (e + CountStepper) + ")", SetTimeOutPeriod), _r_();
}

"undefined" == typeof TargetDate && (TargetDate = "12/31/2020 5:00 AM"), "undefined" == typeof DisplayFormat && (DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."), "undefined" == typeof CountActive && (CountActive = !0), "undefined" == typeof FinishMessage && (FinishMessage = ""), "number" != typeof CountStepper && (CountStepper = -1), "undefined" == typeof LeadingZero && (LeadingZero = !0), CountStepper = Math.ceil(CountStepper), 0 == CountStepper && (CountActive = !1);

var SetTimeOutPeriod = 1e3 * (Math.abs(CountStepper) - 1) + 990, dthen = new Date(TargetDate), dnow = new Date();

CountStepper > 0 ? ddiff = new Date(dnow - dthen) :ddiff = new Date(dthen - dnow), gsecs = Math.floor(ddiff.valueOf() / 1e3), document.getElementById("flash_seconds") && CountBack(gsecs), function() {
"use strict";
_i_("18c:157"), B.when({
events:"ready",
experiment:"fEDXfIVPbKETBUAFVbILT"
}).run(function(e) {
_i_("18c:776");
var t = e("jquery"), i = null;
function n(e) {
return _i_("18c:1170"), _r_(!!e.match(/^https?:\/\/(www|\w+\-app\.dev|\w+\-book\.dev)\.booking\.com/i));
}
function r(e) {
return _i_("18c:1171"), _r_(!t.trim(e).match(/^(https?:\/\/|\/\/|\#|javascript\:|mailto\:|tel\:|chrome-extension\:)/i));
}
function o(e) {
_i_("18c:1172");
var t = {
"/cares":!0,
dummy:!0
};
return _r_(!!e.match(/(adguard-ajax-api|weibo.com)/i) || t[e.toLowerCase()]);
}
function a(e) {
_i_("18c:1173");
var t = e.match(/[?&;]aid=(\d+)/);
return _r_(t ? t[1] :null);
}
function s(e) {
return _i_("18c:1174"), _r_(e && e.length && (n(e) || r(e)) && a(e) !== i && !o(e));
}
function _(e) {
_i_("18c:1175");
var i = t(e);
return _r_({
broken_aid_link_text:i.text(),
broken_aid_link_id:i.attr("id"),
broken_aid_link_class:i.attr("class"),
broken_aid_link_parent_id:i.parents("[id]:first").attr("id"),
broken_aid_link_parent_class:i.parents("[class]:first").attr("class")
});
}
function c() {
_i_("18c:1176"), t("a").each(function() {
_i_("18c:1917");
var e = t(this).attr("href");
if (e && s(e)) {
var i = _(this);
i.broken_aid_type = "Existing link", i.broken_aid_link_url = e, h(i);
}
_r_();
}), _r_();
}
function l() {
_i_("18c:1177"), t("body").on("click", "a", function(e) {
_i_("18c:1918");
var i = t(this).attr("href");
if (s(i)) {
var n = _(this);
if (n.broken_aid_type = "Link click", n.broken_aid_link_url = i, B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported()) {
var r = JSON.parse(B.browserStorageHandler.getSessionValue("aid_errors", !1)) || [];
r.push(n), B.browserStorageHandler.addSessionValue("aid_errors", JSON.stringify(r), !1);
}
}
_r_();
}), _r_();
}
function u() {
if (_i_("18c:1178"), B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported()) {
var e = JSON.parse(B.browserStorageHandler.getSessionValue("aid_errors", !1)) || [];
if (e instanceof Array) for (var t = 0; t < e.length; t++) h(e[t]);
B.browserStorageHandler.deleteSessionValue("aid_errors", !1);
}
_r_();
}
function d() {
if (_i_("18c:1179"), window.XMLHttpRequest) {
var e = XMLHttpRequest.prototype.open, t = XMLHttpRequest.prototype.setRequestHeader, n = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open = function(t, i, n, r, o) {
_i_("18c:2124"), this.___req_url___ = i, this.___req_method___ = t, this.___req_aid_header___ = null, e.apply(this, arguments), _r_();
}, XMLHttpRequest.prototype.setRequestHeader = function(e, i) {
_i_("18c:2125"), "X-Booking-AID" === e && (this.___req_aid_header___ = i), t.apply(this, arguments), _r_();
}, XMLHttpRequest.prototype.send = function(e) {
_i_("18c:2126"), n.apply(this, arguments), this.___req_aid_header___ !== i && s(this.___req_url___) && s("?" + e) && h({
broken_aid_type:"Ajax",
broken_aid_ajax_url:this.___req_url___,
broken_aid_ajax_method:this.___req_method___,
broken_aid_ajax_data:e,
broken_aid_ajax_header:this.___req_aid_header___
}), _r_();
};
}
_r_();
}
function h(e) {
_i_("18c:1180"), B.reportError && (e.broken_aid_data = JSON.stringify(e), B.reportError(new Error("Broken AID"), "Missing or wrong AID", e)), B.env.b_dev_server && window.console && console.warn && console.warn("Broken AID", e), _r_();
}
n(location.href) && (i = a(location.href)) && i === B.env.b_aid && (c(), l(), d()), u(), _r_();
}), _r_();
}(), function(e, t) {
_i_("18c:158");
function i() {
_i_("18c:424"), e.env.b_run_ge_new_newsletter_login && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("18c:1703"), t(".user_signup_password").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking.components.define("ge-lightbox", function(e, t) {
"use strict";
_i_("18c:159");
function i(i) {
_i_("18c:425");
var n = i.data, r = i.template, o = i.onOpen || function() {}, a = i.wrapperClassName || "ge-about-lightbox-wrapper";
e.require("profile/profile-menu/profile-menu").hide();
var s = "ge_about_lightbox" == r || "ge_about_lightbox_v2" == r;
parseInt(e.env.b_reg_user_is_genius) && s && e.et.goal("genius_about_lighbox_opened"), e.env.b_reg_user_qualify_genius_challenge && s && e.et.goal("aspiring_genius_about_lighbox_opened"), setTimeout(function() {
_i_("18c:1181"), t("#tooltip_wrap").hide(), _r_();
}, 300), t(".user_center_popover").hide(), e.lightbox.show(e.jstmpl(r).render(n), {
customWrapperClassName:a
}, function(i) {
_i_("18c:1182"), t(".ge-mod-button").click(function() {
return _i_("18c:1919"), e.lightbox.hide(), _r_(!1);
}), o && o(i), _r_();
}), _r_();
}
function n(e) {
_i_("18c:426");
var n = e.element;
t("body").delegate(n, "click", function(t) {
_i_("18c:1183"), t.preventDefault(), i(e), _r_();
}), _r_();
}
return _r_({
setup:n,
open:i
});
}), booking.jstmpl("ge_about_lightbox", function() {
_i_("18c:252");
var e, t = [ '\n\n    <div class="ge-about-lightbox-container ge-about-lightbox-v3">\n      <div class="ge-about-lightbox-v3__header u-clearfix">\n        <div class="ge-about-lightbox-v3__header-top u-clearfix">\n          <h1 class="ge-about-lightbox-v3__logo-container">Booking Genius</h1>\n          <p class="ge-about-lightbox-v3__slogan">', "/private/ge_exp_pb_lightbox_header/name", '</p>\n        </div>\n      </div>\n\n      <div class="ge-about-lightbox-v3__blocks-list u-clearfix">\n        <div class="u-clearfix">\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '" height="26px" class="ge-about-lightbox-v3__block-image" alt="">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_pay_less_members_usp/name", "</strong></h3>\n            <p>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block is-center-has-plus">\n            <img src="', "</strong>", "<strong>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '</p>\n          </div>\n        </div>\n\n        <div class="ge-about-lightbox-v3__explanation u-clearfix">\n          <div class="ge-about-lightbox-v3__genius-brand">\n            <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n              <i class="bicon-dotgeniusbg"></i>\n              <i class="bicon-dotgeniusfold"></i>\n              <i class="bicon-dotgenius"></i>\n            </span>\n          </div>\n\n          <div class="ge-about-lightbox-v3__genius-about">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "Booking.com", "</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n" ], i = [ "ge_exp_pay_less_members_desc", "ge_exp_lightbox_discount_header", "ge_exp_lightbox_discount_desc", "ge_exp_lightbox_freebies_header", "ge_exp_lightbox_freebies_desc", "ge_exp_pb_lightbox_what_is_genius", "ge_exp_lightbox_what_is_genius_desc" ];
return _r_(function(n) {
_i_("18c:777");
var r = "", o = this.fn;
return r += [ t[0], o.ME(t[1], o.MB, o.MN, null), t[2], o.STATIC_HOSTNAME("/static/img/genius-lightbox-bestprice.png", 0, 0, 0), t[3], o.ME(t[4], o.MB, o.MN, null), t[5], o.MB(i[0]), t[6], o.STATIC_HOSTNAME("/static/img/genius-lightbox-discount.png", 0, 0, 0), t[3], o.MB(i[1]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = o.MB(i[2]), n.shift(), e), t[9], o.STATIC_HOSTNAME("/static/img/genius-lightbox-perks.png", 0, 0, 0), t[3], o.MB(i[3]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = o.MB(i[4]), n.shift(), e), t[10], o.MB(i[5]), t[5], (n.unshift({
b_companyname:t[11],
end_bold:t[7],
start_bold:t[8]
}), e = o.MB(i[6]), n.shift(), e), t[12] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_about_lightbox_v2", function() {
_i_("18c:253");
var e, t = [ '\n    <div class="ge-about-lightbox-container">\n        <h1 class="ge-mod-genius-logo-container">\n            <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 40px">\n                <i class="bicon-dotgeniusbg"></i>\n                <i class="bicon-dotgeniusfold"></i>\n                <i class="bicon-dotgenius"></i>\n            </span>\n        </h1>\n        <p class="ge-slogan">', "/private/genius_pp_travel_rewards_programme/name", "</p>\n\n        \n        ", '\n        <div class="ge-mod-section ge-mod-section-why ', " ge-mod-section-why--bb", '">\n            <h2 class="ge-mod-title">\n                ', "\n                    ", "/private/ge_youre_now_a_genius/name", "\n                ", "/private/genius_pop_up_header_no_name/name", '\n            </h2>\n            <p class="ge-mod-description">\n                ', "/private/ge_you_booked_five_get_discount/name", "/private/genius_pop_up_subheader_explanation_less_than_five_bookings/name", "\n            </p>\n        </div>            \n        ", '\n\n        <div class="ge-mod-section ge-mod-section-what">\n            <h2 class="ge-mod-section-what-title ge-mod-title">\n            ', "/private/ge_benefits_of_genius/name", "\n            ", "/private/ge_instant_benefits/name", '\n            </h2>\n            <ul class="ge-mod-genius-benefit-list clearfix">\n                <li class="ge-mod-genius-benefit">\n                    <i class="ge-mod-icon bicon-pricetag"></i>\n                    <h2 class="ge-mod-title">', "/private/rebrand_genius_bb_10_header/name", "/private/ge_pay_less/name", '</h2>\n                    <p class="ge-mod-description">', "/private/rebrand_genius_10_discount_text/name", "/private/ge_with_ten_percent_off/name", '</p>\n                </li>\n                <li class="ge-mod-genius-benefit">\n                    <i class="ge-mod-icon bicon-gift"></i>\n                    <h2 class="ge-mod-title">', "/private/ge_extra_perks/name", '</h2>\n                    <p class="ge-mod-description">\n                    ', "\n                        ", "/private/ge_you_can_request/name", "/private/ge_free_late_checkout/name", '\n                    </p>\n                </li>\n                <li class="ge-mod-genius-benefit">\n                    <i class="ge-mod-icon bicon-olderphone"></i>\n                    <h2 class="ge-mod-title">', "/private/ge_personal_service/name", "/private/ge_skip_the_queue/name", '</p>\n                </li>\n                <li class="ge-mod-genius-benefit">\n                    <i class="ge-mod-icon bicon-checkmark"></i>\n                    <h2 class="ge-mod-title">', "/private/ge_its_free/name", "/private/ge_free_of_charge/name", "/private/ge_way_saying_thankyou/name", "\n                    </p>\n                </li>\n            </ul>\n        </div>\n\n\n        ", '\n            <div class="ge-mod-section ge-mod-section-how">\n                <span class="ge-iconfont-extended ge-mod-frube">\n                    <i class="bicon-bookingdotgenius"></i>\n                    <span class="genius-extended-module genius-extended-module-discount">\n                        <i class="ge-discount-rate">10%</i>\n                    </span>\n                    <span class="genius-extended-module genius-extended-module-freebies">\n                        <i class="bicon-gift"></i>\n                    </span>\n                </span>\n                <p class="ge-mod-look-for-badge">\n                ', "/private/ge_ready_to_make_5/name", "/private/ge_ready_to_search/name", "\n                </p>\n            </div>\n        ", '\n\n        <div class="ge-mod-button-container">\n            <a href="#" class="ge-mod-button b-button b-button_primary">', "/private/ge_lightbox_cta/name", "</a>\n        </div>\n    </div>\n" ], i = [ "b_is_bbtool_user", "b_genius_user", "b_reg_user_qualify_genius_challenge", "b_use_bbtool_copy" ];
return _r_(function(n) {
_i_("18c:778");
var r = "", o = this.fn;
return r += [ t[0], o.ME(t[1], o.MB, o.MN, null), t[2] ].join(""), o.MD(i[2]) || (r += t[3], o.MJ(o.MC(i[0])) && (r += t[4]), r += t[5], r += o.MJ(o.MG((o.MC(i[1]) || {}).first_name)) ? [ t[6], (n.unshift({
first_name:o.MG((o.MC(i[1]) || {}).first_name)
}), e = o.ME(t[7], o.MB, o.MN, null), n.shift(), e), t[8] ].join("") :[ t[6], o.ME(t[9], o.MB, o.MN, null), t[8] ].join(""), r += t[10], r += o.MJ(o.MC(i[1])) && o.MJ(o.MC(i[1]).num_stays >= 5) && o.MK(o.MC(i[0])) ? [ t[6], o.ME(t[11], o.MB, o.MN, null), t[8] ].join("") :[ t[6], o.ME(t[12], o.MB, o.MN, null), t[8] ].join(""), r += t[13]), r += t[14], r += o.MD(i[2]) ? [ t[8], o.ME(t[15], o.MB, o.MN, null), t[16] ].join("") :[ t[8], o.ME(t[17], o.MB, o.MN, null), t[16] ].join(""), r += t[18], r += o.MD(i[3]) ? o.ME(t[19], o.MB, o.MN, null) :o.ME(t[20], o.MB, o.MN, null), r += t[21], r += o.MD(i[3]) ? o.ME(t[22], o.MB, o.MN, null) :o.ME(t[23], o.MB, o.MN, null), r += [ t[24], o.ME(t[25], o.MB, o.MN, null), t[26] ].join(""), r += o.MD(i[2]) ? [ t[27], o.ME(t[28], o.MB, o.MN, null), t[6] ].join("") :[ t[27], o.ME(t[29], o.MB, o.MN, null), t[6] ].join(""), r += [ t[30], o.ME(t[31], o.MB, o.MN, null), t[21], o.ME(t[32], o.MB, o.MN, null), t[33], o.ME(t[34], o.MB, o.MN, null), t[26] ].join(""), r += o.MD(i[2]) ? [ t[27], o.ME(t[35], o.MB, o.MN, null), t[6] ].join("") :[ t[27], o.ME(t[36], o.MB, o.MN, null), t[6] ].join(""), r += t[37], o.MD(i[2]) || (r += t[38], r += o.MD(i[2]) ? [ t[6], o.ME(t[39], o.MB, o.MN, null), t[8] ].join("") :[ t[6], o.ME(t[40], o.MB, o.MN, null), t[8] ].join(""), r += t[41]), r += [ t[42], o.ME(t[43], o.MB, o.MN, null), t[44] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_100k_lighbox", function() {
_i_("18c:254");
var e = [ '\n    <div class="ge-100k-lightbox-container">\n\n        <img src="', '" width="400" height="300" />\n\n        <h2>', "/private/ge_join_us_celebrate/name", "</h2>\n        <p>\n            ", "/private/ge_with_so_many/name", '\n        </p>\n        <a href="#" class="ge-mod-button ge-100k-lightbox-action">', "/private/ge_cta_treat_yourself/name", "</a>\n    </div>\n" ];
return _r_(function(t) {
_i_("18c:779");
var i = "", n = this.fn;
return i += [ e[0], n.STATIC_HOSTNAME("/static/img/genius/100k/cake-genius.svg", 0, 0, 0), e[1], n.ME(e[2], n.MB, n.MN, null), e[3], n.ME(e[4], n.MB, n.MN, null), e[5], n.ME(e[6], n.MB, n.MN, null), e[7] ].join(""), _r_(i);
});
}()), booking.jstmpl("ge_genius_week_lightbox", function() {
_i_("18c:255");
var e = [ '\n  <div class="genius-week-lightbox">\n\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n        <span class="genius-week-word-brand">week</span>\n      </span>\n\n      <h4 class="genius-week-headline">', "/private/genius_pp_travel_rewards_programme/name", '</h4>\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">', "/private/ge_lighbox_ge_week_headline/name", '</h2>\n\n      <div class="genius-week-itens u-clearfix">\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-pricetag"></i>\n          </span>\n          <h3>', "/private/ge_10_percent_headline/name", "</h3>\n          <p>", "/private/ge_email_gw_discount/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-gift"></i>\n          </span>\n          <h3>', "/private/ge_free_travel_perks_headline/name", "/private/ge_email_gw_free_perks/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-olderphone"></i>\n          </span>\n          <h3>', "/private/ge_faster_service/name", "/private/ge_email_gw_faster_service/name", '</p>\n        </div>\n      </div>\n\n      <div class="genius-week-about u-clearfix">\n        <div class="genius-week-ge-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="genius-week-text">\n          <h2>', "/private/ge_lightbox_gw_want_to/name", "</h2>\n          <p>", "/private/ge_lightbox_gw_good_things/name", '</p>\n        </div>\n      </div>\n    </div>\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_ligtbox_gw_cta/name", "</a>\n  </div>\n" ];
return _r_(function(t) {
_i_("18c:780");
var i = "", n = this.fn;
return i += [ e[0], n.ME(e[1], n.MB, n.MN, null), e[2], n.ME(e[3], n.MB, n.MN, null), e[4], n.ME(e[5], n.MB, n.MN, null), e[6], n.ME(e[7], n.MB, n.MN, null), e[8], n.ME(e[9], n.MB, n.MN, null), e[6], n.ME(e[10], n.MB, n.MN, null), e[11], n.ME(e[12], n.MB, n.MN, null), e[6], n.ME(e[13], n.MB, n.MN, null), e[14], n.ME(e[15], n.MB, n.MN, null), e[16], n.ME(e[17], n.MB, n.MN, null), e[18], n.ME(e[19], n.MB, n.MN, null), e[20] ].join(""), _r_(i);
});
}()), booking.jstmpl("ge_perks_lightbox", function() {
_i_("18c:256");
var e, t = [ '\n  <div class="ge-about-lightbox-container ge-genius-tier-lightbox">\n    <h2 class="ge-genius-tier-lightbox-title"> ', "/private/ge_lightbox_trips_are/name", ' </h2>\n    <p class="ge-genius-tier-lightbox-text"> ', "/private/ge_lightbox_you_made/name", ' </p>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_new/name", '\n        <span class="ge-freebies-expires">', "/private/ge_lightbox_expires/name", ' </span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n            <span class="genius-extended-module-standalone-container">\n                <span class="genius-extended-module genius-extended-module-standalone">\n                    <i class="bicon-coffee"></i>\n                </span>\n            </span>\n            <span class="ge-freebie-item-text">\n                ', "/private/ge_perk_free_breakfast/name", '\n            </span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_travel_perks/name", "/private/ge_lightbox_no_expiry/name", '</span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n              <i class="ge-discount-rate">10%</i>\n            </span>\n          </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/1/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-earlycheckin"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/3/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-latecheckout"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/2/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-shuttlesmall"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/4/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bike"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/6/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bar"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/5/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-parking"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/8/name", '\n          </span>\n        </li>\n      </ul>\n    </div>\n\n    <span class="genius-lightbox-tip">', "/private/ge_lightbox_some_travel_perks/name", "</span>\n  </div>\n" ], i = [ "first_name", "plus_end_date" ];
return _r_(function(n) {
_i_("18c:781");
var r = "", o = this.fn;
return r += [ t[0], o.ME(t[1], o.MB, o.MN, null), t[2], (n.unshift({
first_name:o.MB(i[0])
}), e = o.ME(t[3], o.MB, o.MN, null), n.shift(), e), t[4], o.ME(t[5], o.MB, o.MN, null), t[6], (n.unshift({
numeric_date:o.MB(i[1])
}), e = o.ME(t[7], o.MB, o.MN, null), n.shift(), e), t[8], o.ME(t[9], o.MB, o.MN, null), t[10], o.ME(t[11], o.MB, o.MN, null), t[6], o.ME(t[12], o.MB, o.MN, null), t[13], o.ME(t[14], o.MB, o.MN, null), t[15], o.ME(t[16], o.MB, o.MN, null), t[17], o.ME(t[18], o.MB, o.MN, null), t[19], o.ME(t[20], o.MB, o.MN, null), t[21], o.ME(t[22], o.MB, o.MN, null), t[23], o.ME(t[24], o.MB, o.MN, null), t[25], o.ME(t[26], o.MB, o.MN, null), t[27], o.ME(t[28], o.MB, o.MN, null), t[29] ].join(""), _r_(r);
});
}()), booking[sNSStartup].ge_show_onb_msg = {
init:function() {
_i_("18c:427");
var e = function() {
_i_("18c:1184"), $.ajax({
type:"post",
url:"/genius_onb_message_seen",
data:{}
}), _r_();
}, t = null;
if ("" !== B.env.b_ge_should_show_onboarding_on_login && (t = parseInt(B.env.b_ge_should_show_onboarding_on_login, 10)), 1 === t) {
var i = B.components.require("ge-lightbox");
i.open({
data:{
b_genius_user:B.env.b_genius_user || {}
},
template:"ge_about_lightbox",
onOpen:function() {
_i_("18c:1920"), B.eventEmitter.bind("modal:close", e), _r_();
}
});
}
_r_();
}
}, function(e) {
_i_("18c:160");
var t, i = {
"SH:seen":"sh_seen",
"SH:clicked":"sh_clicked",
"SH:removed":"sh_removed",
"SH:sh-timestamp-today":"sh_resume_last_24",
"SH:sh-timestamp-24-48-hrs":"sh_resume_last_24_48",
"SH:sh-timestamp-48-72-hrs":"sh_resume_last_48_72",
"SH:sh-timestamp-72-96-hrs":"sh_resume_last_72_96"
};
for (t in i) i.hasOwnProperty(t) && e.eventEmitter.one(t, function(t) {
return _i_("18c:1788"), _r_(function() {
_i_("18c:2127"), e.et.goal(t), _r_();
});
}(i[t]));
_r_();
}(booking), function(e) {
_i_("18c:161"), e.when({
action:"searchresults",
events:"view #b_google_map_thumbnail"
}).run(function() {
_i_("18c:782"), t(), _r_();
}), e.when({
action:"searchresults",
events:"ready"
}).run(function(i) {
_i_("18c:783");
var n = i("searchresults/events");
n.on(n.ACTION_FILTERBOX_COLLAPSE, r);
function r() {
_i_("18c:1185");
var i = $("#b_google_map_thumbnail");
e.tools.dom.isBlockVisibleInViewport(i) && (t(), n.off(n.ACTION_FILTERBOX_COLLAPSE, r)), _r_();
}
_r_();
});
function t() {
_i_("18c:428");
var e = $("#b_google_map_thumbnail"), t = e.attr("data-map");
t && e.length && e.attr("style", "background-image: url(" + t + ");"), _r_();
}
_r_();
}(B), Array.prototype.walk || (Array.prototype.walk = function(e) {
_i_("18c:257");
for (var t = [], i = this.length; i--; ) t.push(e(this[i]));
return _r_(t.reverse());
}), Array.prototype.flatten || (Array.prototype.flatten = function() {
_i_("18c:258");
for (var e = [], t = -1, i = this.length; ++t < i; ) e = e.concat(this[t].constructor == Array ? this[t].flatten() :this[t]);
return _r_(e);
}), booking.ensureNamespaceExists("google"), booking.google.returnAnalyticsTrackingString = function(e) {
_i_("18c:162"), e = e && "object" == typeof e && Object.assign ? Object.assign({}, booking.env, e) :booking.env;
var t = [], i = e.b_this_urchin.replace(/&amp;$/, "");
return i = i.replace(/(&amp;)?(auth_key|bn|pin|reset_hash)([^;&]+)/gi, ""), t[t.length] = i, "hotel" === e.b_action && 0 === e.b_hotel_blocks && e.b_checkin_date && (t[t.length] = "ur_honovail=1"), -1 != window.location.href.indexOf("redirected=") && (-1 != window.location.href.indexOf("source=") ? t[t.length] = "redirected=" + window.location.href.match(/source=(\w+)/)[1] :t[t.length] = "redirected=1"), e.b_autoextension_radius_km && (t[t.length] = "sr_ae=" + e.b_autoextension_radius_km), +e.b_availability_checked || e.b_checkin_date ? t[t.length] = "ur_dat=1" :t[t.length] = "ur_nodat=1", "search" === e.b_action && e.b_multiple_destinations_found && (t[t.length] = "ur_srdis=1"), "searchresults" === e.b_action && "undefined" != typeof e.b_available_hotels && (0 == e.b_available_hotels ? t[t.length] = "ur_hc=0" :e.b_available_hotels <= 15 ? t[t.length] = "ur_hc=1" :t[t.length] = "ur_hc=2"), e.b_book_stage && (t[t.length] = "stage=" + e.b_book_stage), _r_(t.flatten().join("&amp;"));
}, booking.ensureNamespaceExists("google"), B.define("ga-tracker", function(e, t) {
_i_("18c:163");
var i = B && B.debug && B.debug("ga"), n = (window.ga, window._gaq);
function r(e, t) {
_i_("18c:429"), i && i.log("pageview", "url:", t), "undefined" != typeof t && ("undefined" != typeof n && n.push([ "_trackPageview", t ]), window.ga && window.ga("send", "pageview", t)), _r_();
}
function o(e, t, r, o, a) {
_i_("18c:430"), i && i.log("event", "tracker:", e, " | action:", t, " | label:", r || "none", " | value", o || "none"), "undefined" == typeof a && (a = 1), "undefined" != typeof e && ("undefined" != typeof n && n.push([ "_trackEvent", e, t, r, o, !0 ]), window.ga && window.ga("send", {
hitType:"event",
eventCategory:e,
eventAction:t,
eventLabel:r,
eventValue:o,
nonInteraction:1
})), _r_();
}
t.errorTracker = "Error", t.clickTracker = "Click", t.changeTracker = "Change", t.hoverTracker = "Hover", t.mapTracker = "Map", t.pageviewTracker = "Pageview", t.viewTracker = "View", t.cityTracker = "City", t.groupTracker = "Group", t.cardTracker = "Credit Card", t.comparisonTracker = "Hotel Comparison", t.userProfileTracker = "User profile", t.bookProcessTracker = "Book process", t.bookingProcessTracker = "Booking Process", t.hotelPageTracker = "Hotel Page", t.reviewSearchTracker = "Review search", t.BBToolTracker = "Business Bookers", t.TripPlannerTracker = "Trip Planner", t.growlTracker = "Growl", t.WebMessagingTracker = "Web Messaging", t.SearchResultsTracker = "Search Results", t.SearchResultsFilterTracker = "Filter", t.SearchResultsFilterMapTracker = "Filter - Map", t.articlesTracker = "Articles", t.DSFTracker = "DSF", t.ugcdTracker = "UGC Display", t.ugccDestinationTracker = "Destination UGC", t.ugccPropertyTracker = "Property UGC", t.assistantTracker = "Messaging V2", t.referralTracker = "Referral", t.trackEvent = o, t.trackPageview = r, _r_();
}), window.booking.google ? window.booking.google = $.extend(window.booking.google, B.require("ga-tracker")) :window.booking.google = B.require("ga-tracker"), function() {
_i_("18c:164");
var e = B.require("jquery");
booking[sNSStartup].event_tracking = {
priority:9,
init:function() {
if (_i_("18c:1186"), "undefined" != typeof _gaq) {
e(window).on("load", function() {
if (_i_("18c:2128"), "undefined" != typeof booking.env.b_changed_language) {
var e = booking.env.b_lang_for_url, t = booking.env.b_changed_language;
booking.google.trackEvent(booking.google.changeTracker, "Language", "From " + t + " to " + e);
}
_r_();
});
var t = function(e) {
return _i_("18c:2129"), _r_(e.id.match(/\d{5}/) ? e.className ? "." + e.className :e.tagName.toLowerCase() :e.id ? "#" + e.id :e.className ? "." + e.className :e.tagName.toLowerCase());
};
e("body").delegate(".tracked a, .tracked .trackit", "click", function(i) {
_i_("18c:2130");
var n = [];
e(this).parentsUntil(".tracked", "div").each(function() {
_i_("18c:2305"), n.unshift(t(this)), _r_();
}), n.push(t(this)), booking.google.trackEvent(booking.google.clickTracker, "Action: " + booking.env.b_action, n.join(" > ")), _r_();
});
function i(e, t) {
_i_("18c:1921"), t && booking.google.trackEvent(booking.google.groupTracker, t.rooms + " rooms | " + t.adults + " adults | " + t.children + " kids" + (t.children ? " (" + t.childrenAges.join(" | ") + ")" :""), booking.env.b_action), _r_();
}
e("#frm").submit(function(t) {
_i_("18c:2131"), t.isDefaultPrevented() || i(e.Event(), B.search.groupStorage.value), _r_();
});
for (var n = e(".error, .errorSimpleMsg"), r = 0; r < n.length; r++) if (0 == e(n[r]).hasClass("disabled")) {
var o = n[r].getAttribute("rel");
null != o && booking.google.trackEvent(booking.google.errorTracker, "Display", o);
}
this.bindCustomTrackClick(), "undefined" != typeof trigger_error404_event_tracking && 1 == trigger_error404_event_tracking && booking.google.trackEvent(booking.google.pageviewTracker, "404 Error", document.location.pathname + document.location.search + "&from=" + document.referrer), "hotel" === booking.env.b_action && e("#hcta").click(function() {
_i_("18c:2246");
var e = "Hotel cta";
booking.env.track_htca && (e += "v" + booking.env.track_htca), booking.google.trackEvent(booking.google.clickTracker, e, this.getAttribute("data-id")), _r_();
}), e("#bookconditions").click(function() {
_i_("18c:2132"), booking.google.trackEvent(booking.google.clickTracker, "Booking Conditions", "Link clicked"), _r_();
}), e("#localcurr_dis a").mouseenter(function() {
_i_("18c:2133"), booking.google.trackEvent(booking.google.clickTracker, "Action: " + booking.env.b_action, "hover_tooltip_local_currency"), _r_();
}), booking.env.smart_deals_count && booking.env.smart_deals_count > 0 && booking.google.trackEvent(booking.google.viewTracker, "Smart deal filter", booking.env.smart_deals_count + " deals displayed"), booking.env.b_track_search_from_tool && B.google.trackEvent(B.google.BBToolTracker, "Search - search from tool", "Search Page");
}
return _r_(!0);
},
bindCustomTrackClick:function(t) {
_i_("18c:1187"), !t || t.length ? t = e(".custom_track") :t.hasClass(".custom_track") || (t = t.find(".custom_track")), t.click(function() {
_i_("18c:1922");
var t = e(this).attr("data-trackname"), i = e(this).attr("data-track-prefix") || booking.env.b_action, n = e(this).attr("data-tracker") || "userProfileTracker";
t && booking.google[n] && booking.google.trackEvent(booking.google[n], i + " : " + t, booking.env.b_action), _r_();
}), _r_();
}
}, _r_();
}(), function(e, t, i, n, r) {
_i_("18c:165");
var o = !1, a = !1, s = [], _ = 0, c = function(i) {
_i_("18c:784"), _ && console.log("googleInit");
var r;
if (!o) {
o = !0, r = t.createElement("script"), r.type = "text/javascript", r.src = n.google_map_current_url;
var c = function() {
_i_("18c:1923"), a = !0;
for (var e, t = 0, i = s.length; i > t; t++) e = s[t], e.cb && e.cb.apply(e.ctx || null, e.args || []);
_r_();
};
e.rerunCreateMap = c, $("head").append(r);
}
a || s.push(i), _r_();
};
i.google_geo_api = {
loaded:function() {
return _i_("18c:1188"), _r_(a && e.google && google.maps);
},
load:c
}, _r_();
}(window, document, booking, booking.env, sNSStartupLoad), B.when({
events:"load"
}).run(function() {
if (_i_("18c:166"), "undefined" == typeof B.env.google_analytics_tracking_enabled || !B.env.google_analytics_tracking_enabled) return _r_();
var e, t = booking.env, i = t.b_action;
t.survey_key && $('div#survey[surveykey="' + t.survey_key + '"] button[value="accept"]').click(function() {
_i_("18c:1189"), booking.google.trackPageview("click", t.surveytracklink), _r_();
}), "confirmation" === i && $("#external_review_invite_link").click(function() {
_i_("18c:1190"), booking.google.trackPageview("click", "/outgoinglink/confirmation/external_review_invite/"), _r_();
}), /error/.test(i) && (e = (t.b_referrer || "").split("?")[0].replace(window.location.origin, "") || "dont-know", booking.google.trackPageview("click", "/error-action/" + i + "/caused-by" + e)), _r_();
}), B.define("gta/impression-tracking", [ "et", "jquery" ], function(e, t) {
_i_("18c:167");
var i = !0, n = [], r = [], o = null;
function a(e, t) {
_i_("18c:431");
var i = e.getAttribute("id");
i || (i = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(), e.setAttribute("id", i)), B.when({
events:[ "view #" + i, "gta:lightbox:init #" + i ]
}).run(function() {
_i_("18c:1191"), c(t.getCurrentPlacementName(), t.getMethodName()), _r_();
}), _r_();
}
function s(e) {
_i_("18c:432");
var t = e.getAttribute("id"), i = e.getAttribute("data-placement");
t || (t = ("gta-link-" + i).toLowerCase(), e.setAttribute("id", t)), B.when({
events:[ "view #" + t, "gta:lightbox:init #" + t ]
}).run(function() {
_i_("18c:1192"), c(i, "link"), _r_();
}), _r_();
}
function _() {
_i_("18c:433"), n.length && r.length && (l({
placement:n.join("|"),
method:r.join("|")
}), n.length = 0, r.length = 0), _r_();
}
function c(e, t) {
if (_i_("18c:434"), !e || !t) return _r_();
i ? (clearTimeout(o), n.push(e), r.push(t), o = setTimeout(_, 500)) :l({
placement:e,
method:t
}), _r_();
}
function l(e) {
_i_("18c:435"), t.ajax({
url:"/gta_impression",
type:"POST",
data:e
}), _r_();
}
return _r_({
trackWidgetImpressionOnView:function(e, t) {
_i_("18c:893"), a(e, t), _r_();
},
trackLinkImpressionOnView:function(e) {
_i_("18c:894"), s(e), _r_();
},
trackImpression:function(e, t) {
_i_("18c:895"), c(e, t), _r_();
}
});
}), B.require([ "gta/impression-tracking", "jquery" ], function(e, t) {
_i_("18c:168"), t(".gta-link-track").each(function(t, i) {
_i_("18c:785"), e.trackLinkImpressionOnView(i), _r_();
}), _r_();
}), B.define("gta/country-flags-dropdown", [ "et" ], function(e) {
return _i_("18c:169"), _r_({
init:function(t, i) {
_i_("18c:896");
var n = i || $(".gta-country-flag-dropdown").get(0), r = $(".gta-cfd-list", n), o = $(".gta-cfd-value", n), a = o.children(".cprefix"), s = o.children('[class^="cflag"]').get(0), _ = r.children(), c = !1, l = $(document);
t.setCountryCode(a.data("prefix"), {
isUserAction:!1
});
function u() {
_i_("18c:1510"), r.hide(), c = !1, l.unbind("click", h), l.unbind("keypress", p), _r_();
}
function d() {
_i_("18c:1511"), r.show(), c = !0, l.bind("click", h), l.bind("keypress", p), e.stage("dLPLOefMXWSSIVDdWRe", 1), _r_();
}
function h(e) {
_i_("18c:1512"), $.contains(n, e.target) || u(), _r_();
}
function p(t) {
_i_("18c:1513");
var i = String.fromCharCode(t.which).toLowerCase().replace(/[\n\s]/g, "");
if (!i.length) return _r_();
var n = _.filter('[data-s^="' + i + '"]').get(0);
if (n) {
var r = l.scrollTop();
n.scrollIntoView(!0), l.scrollTop(r);
}
e.stage("dLPLOefMXWSSIVDdWRe", 2), _r_();
}
r.delegate("li", "click", function() {
_i_("18c:1789");
var i = $(this).data();
a.text(i.cc + " +" + i.prefix), s.className = s.className.replace(/cflag-\w+/, "cflag-" + i.cc.toLowerCase()), t.setCountryCode(i.prefix, {
isUserAction:!0
}), u(), e.stage("dLPLOefMXWSSIVDdWRe", 3), _r_();
}), o.bind("click", function() {
_i_("18c:1790"), c ? u() :d(), _r_();
}), _r_();
}
});
}), B.define("gta/base-widget", [ "gta/impression-tracking", "et" ], function(e, t) {
_i_("18c:170");
var i = [ "placement", "exp", "variant", "source", "city", "firstname", "lastname", "booknumber", "pincode", "authkey" ], n = function(e) {
_i_("18c:786"), this.dom = {
root:e,
wrapper:e.parent(),
label:e.find(".gta-widget-label"),
input:e.find(".gta-widget-input"),
button:e.find(".gta-widget-submit"),
message:e.find(".gta-widget-message")
}, this.sharedParams = this.dom.wrapper.data(), this.payload = this.getPayload(), this.isInputMasked = this.dom.input.hasClass("gta-widget-input-masked"), this.addEvents(), _r_();
};
return n.prototype.addEvents = function() {
_i_("18c:787"), this.dom.button.bind("click", this.onSubmit.bind(this)), this.dom.label.bind("click", function() {
_i_("18c:1924"), this.dom.input.focus(), _r_();
}.bind(this)), this.dom.input.bind("keyup", function(e) {
_i_("18c:1925"), t.stage("dLPLOefMXWSSIVDdWRe", 4), 13 == e.keyCode && this.onSubmit(e), _r_();
}.bind(this)), e.trackWidgetImpressionOnView(this.dom.root.get(0), this), _r_();
}, n.prototype.getPayload = function() {
_i_("18c:788");
var e = {
stype:B.env.b_site_type_id,
page:B.env.b_action
};
for (var t in this.sharedParams) this.sharedParams.hasOwnProperty(t) && i.indexOf(t) > -1 && (e[t] = this.sharedParams[t]);
return _r_(e);
}, n.prototype.getCurrentPlacementName = function() {
return _i_("18c:789"), _r_(this.dom.wrapper.data("override-placement") || this.sharedParams.placement);
}, n.prototype.getMethodName = function() {
return _i_("18c:790"), _r_(this.method);
}, n.prototype.onSubmit = function(e) {
if (_i_("18c:791"), e.preventDefault(), this.hideMessage(), !this.validate()) return _r_();
this.payload.placement = this.getCurrentPlacementName(), this.disableInputs(), this.sendRequest(), _r_();
}, n.prototype.sendRequest = function() {
_i_("18c:792"), $.ajax({
url:this.action,
type:"POST",
data:this.payload,
success:this.onSucessCallback.bind(this),
error:this.onErrorCallback.bind(this)
}), _r_();
}, n.prototype.onSucessCallback = function(e) {
if (_i_("18c:793"), "true" === e.isOk) this.showMessage("success"), this.enableInputs(), t.stage("dLPLOefMXWSSIVDdWRe", 6); else switch (e.err) {
case "limited":
this.showMessage("limit");
break;

case "multiple":
this.showMessage("multiple");
break;

case "invalid":
this.showMessage("validation"), this.enableInputs(), this.dom.input.focus(), t.stage("dLPLOefMXWSSIVDdWRe", 5);
break;

default:
this.showMessage("error"), this.enableInputs();
}
_r_();
}, n.prototype.onErrorCallback = function() {
_i_("18c:794"), this.showMessage("error"), this.enableInputs(), _r_();
}, n.prototype.validate = function() {
return _i_("18c:795"), _r_(!1);
}, n.prototype.showMessage = function(e) {
_i_("18c:796"), this.dom.message.addClass(e.indexOf("success") > -1 ? "success" :"invalid").text(this.dom.message.data(e)), this.dom.message.slideDown(), _r_();
}, n.prototype.hideMessage = function() {
_i_("18c:797"), this.dom.message.hide().removeClass("success").removeClass("invalid"), _r_();
}, n.prototype.disableInputs = function() {
_i_("18c:798"), this.dom.button.attr("disabled", !0), this.dom.input.attr("disabled", !0), _r_();
}, n.prototype.enableInputs = function() {
_i_("18c:799"), this.dom.button.removeAttr("disabled"), this.dom.input.removeAttr("disabled"), _r_();
}, n.extend = function() {
if (_i_("18c:800"), void 0 != Object.create) return _r_(Object.create(n.prototype));
function e() {}
return e.prototype = n.prototype, _r_(new e());
}, _r_(n);
}), B.define("gta/sms-widget", [ "gta/base-widget", "gta/country-flags-dropdown", "et" ], function(e, t, i) {
_i_("18c:171");
var n = function(i) {
_i_("18c:801"), this.method = "sms", this.action = "/send_app_sms_v2", e.apply(this, arguments), this.dom.countryFlagsDropdown = this.dom.root.find(".gta-country-flag-dropdown"), this.countryCode = "", this.dom.countryFlagsDropdown.length && t.init(this, this.dom.countryFlagsDropdown.get(0)), _r_();
};
return n.prototype = e.extend(), n.prototype.addEvents = function() {
_i_("18c:802"), e.prototype.addEvents.apply(this, arguments);
var t = this;
this.isInputMasked && (this.dom.input.one("keyup input", function() {
_i_("18c:1926"), t.clearMaskedInput(), _r_();
}), this.dom.input.one("oncut", function() {
_i_("18c:1927"), setTimeout(t.clearMaskedInput, 0), _r_();
}), this.dom.input.one("onpropertychange", function() {
_i_("18c:1928"), "value" == event.propertyName && t.clearMaskedInput(), _r_();
})), _r_();
}, n.prototype.getPayload = function() {
_i_("18c:803");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_sms", _r_(t);
}, n.prototype.validate = function() {
if (_i_("18c:804"), this.isInputMasked) return delete this.payload.telno, delete this.payload.cc_prefix, _r_(!0);
var e = this.countryCode + this.dom.input.val().replace(/\D/g, "");
if (e.length < 6) return this.showMessage("validation"), _r_(!1);
return this.payload.telno = e, this.payload.cc_prefix = this.countryCode, _r_(!0);
}, n.prototype.setCountryCode = function(e, t) {
_i_("18c:805"), this.countryCode = e, this.isInputMasked && t.isUserAction && this.clearMaskedInput(), _r_();
}, n.prototype.clearMaskedInput = function() {
_i_("18c:806"), this.dom.input.val(""), this.isInputMasked = !1, _r_();
}, _r_(n);
}), B.define("gta/email-widget", [ "gta/base-widget" ], function(e) {
_i_("18c:172");
var t = function(t) {
_i_("18c:807"), this.method = "email", this.action = "/send_app_email_v2", e.apply(this, arguments), _r_();
};
return t.prototype = e.extend(), t.prototype.getPayload = function() {
_i_("18c:808");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_email", _r_(t);
}, t.prototype.validate = function() {
_i_("18c:809");
var e = this.dom.input.val();
if (!e) return _r_(!1);
if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) return this.showMessage("validation"), _r_(!1);
return this.payload.email = e, _r_(!0);
}, _r_(t);
}), B.require([ "gta/sms-widget", "gta/email-widget", "gta/base-widget", "et" ], function(e, t, i, n) {
_i_("18c:173");
var r = [];
$(".gta-sms-widget").each(function(t, i) {
_i_("18c:810"), r.push(new e($(i))), _r_();
}), $(".gta-email-widget").each(function(e, i) {
_i_("18c:811"), r.push(new t($(i))), _r_();
}), _r_();
}), B.require([ "gta/impression-tracking", "et", "jquery" ], function(e, t, i) {
_i_("18c:174");
var n = function(e) {
_i_("18c:812"), this.placeholder = i(e), this.placement = this.placeholder.data("placement"), this.image = null, this.init(), _r_();
};
n.prototype.loadImage = function() {
_i_("18c:813"), this.image = new Image(), this.image.onload = function() {
_i_("18c:1929"), this.placeholder.empty().append(this.image), e.trackImpression(this.placement, "qr"), _r_();
}.bind(this), this.image.src = this.placeholder.data("url"), _r_();
}, n.prototype.init = function() {
_i_("18c:814"), B.when({
events:[ "view #" + this.placeholder.attr("id"), "gta:lightbox:init #" + this.placeholder.attr("id") ]
}).run(this.loadImage.bind(this)), _r_();
}, i(".gta-qr-code-placeholder").each(function(e, t) {
_i_("18c:815"), new n(t), _r_();
}), _r_();
}), B.define("header/notifications/notifications", function(e, t, i) {
"use strict";
_i_("18c:175");
var n = !1, r = "1" === B.env.b_site_type_id, o = "2" === B.env.b_site_type_id;
i.exports = {
isLoggedIn:function() {
return _i_("18c:1194"), _r_(Number(B.env.auth_level) > 0);
},
init:function() {
_i_("18c:1195"), this.$root = $(".js-uc-notifications"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), this.bindEvents(), (this.getNotifications("unseen").length > 0 || this._hasMultipleTravelGuides) && this.lazySeen(), _r_();
},
refresh:function() {
_i_("18c:1196"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), _r_();
},
_readNotificationsFromDOM:function() {
_i_("18c:1197"), this._notifications = this.$root.find(".js-uc-notification").map(function(e, t) {
return _i_("18c:2194"), t = $(t), _r_({
type:t.attr("data-type"),
fingerprint:t.attr("data-fingerprint"),
id:t.data("id"),
seen:"0" !== String(t.attr("data-seen"))
});
}).toArray(), this._hasMultipleTravelGuides = this.getNotificationsByType("explorer_available").length > 1 || this.getNotificationsByType("multiple_travel_guides").length, _r_();
},
lazySeen:function() {
_i_("18c:1198");
var e = /notif_id=([\w\d]+)/.exec(window.location.href);
if (null == e) return _r_();
var t = e[1], i = this._notifications.filter(function(e) {
return _i_("18c:2134"), _r_(e.id === t);
})[0];
if (void 0 === i) return _r_();
r && this._hasMultipleTravelGuides && ("multiple_travel_guides" === i.type || "explorer_available" === i.type), _r_();
},
seen:function(e, t) {
_i_("18c:1199"), e.seen = t, this.getNotificationNode(e).toggleClass("uc-notification-seen", t).toggleClass("uc-notification-unseen", !t), _r_();
},
markAsSeen:function(e) {
_i_("18c:1200");
var t = this;
if (0 === e.length) return _r_();
var i = JSON.stringify(e), r = "/seen_notifications";
if (e.forEach(function(e) {
_i_("18c:1930"), t.seen(e, !0), _r_();
}), this.updateState(), n) return _r_();
$.ajax({
type:"POST",
url:r,
data:{
notifications:i
}
}), _r_();
},
_setCount:function(e) {
_i_("18c:1201");
var t = o ? $(".js-uc-notifications-bell-count") :this.$root.find(".js-uc-notifications-bell-count");
if (0 === t.length) return _r_();
t.text(e), t.toggleClass("g-hidden", 0 === e), o && this.$root.toggleClass("g-hidden", 0 === this._notifications.length), _r_();
},
updateState:function() {
_i_("18c:1202"), this.updateCounter(), this.$root.toggleClass("uc-notifactions-has-unseen", this.getNotifications("unseen").length > 0), _r_();
},
updateCounter:function() {
_i_("18c:1203"), this._setCount(this.getNotifications("unseen").length + this._getUnseenCountsFromGroups()), this.$root.toggleClass("uc-notifications_new", 0 !== this.getNotifications().length), _r_();
},
bindEvents:function() {
_i_("18c:1204");
var e = this;
B.eventEmitter.bind("header:notifications:item_removed", function() {
_i_("18c:1931"), e.updateState(), _r_();
}), r && (B.eventEmitter.bind("uc_popover_showed", function(e, t) {
_i_("18c:2135"), "notifications" === t.id && (B.eventEmitter.trigger("header:notifications:shown"), B.events.emit("header:notifications:shown")), _r_();
}), this.$root.delegate(".js-uc-notification a", "click", function(t) {
_i_("18c:2136");
var i = e.getNotificationFromEvent(t);
if (null == i) return _r_();
_r_();
})), B.eventEmitter.bind("header:notifications:hidden", function() {
_i_("18c:1932"), e.updateState(), _r_();
}), this.$root.delegate(".js-uc-notification-close", "click", function(t) {
_i_("18c:1933");
var i = e.getNotificationFromEvent(t);
e.hideNotification(i), _r_();
}), this.$root.delegate(".js-uc-notification-seen", "click", function(t) {
_i_("18c:1934");
var i = e.getNotificationFromEvent(t);
"thread" === i.type || e.markAsSeen([ i ]), _r_();
}), _r_();
},
getNotificationNode:function(e) {
return _i_("18c:1205"), _r_(this.$root.find('[data-fingerprint="' + e.fingerprint + '"][data-type="' + e.type + '"]'));
},
getNotificationData:function(e) {
_i_("18c:1206");
var t = null;
return this.getNotifications().forEach(function(i) {
_i_("18c:1935"), $(e).attr("data-type") === i.type && $(e).attr("data-fingerprint") === i.fingerprint && (t = i), _r_();
}), _r_(t);
},
getNotificationFromEvent:function(e) {
_i_("18c:1207");
var t = $(e.currentTarget).closest(".js-uc-notification");
return _r_(t && this.getNotificationData(t));
},
hideNotification:function(e) {
_i_("18c:1208");
var t = this.getNotifications().indexOf(e);
n || $.post("/dismiss_user_notification", e), this.getNotificationNode(e).addClass("uc-notification_hidden"), -1 !== t && this.getNotifications().splice(t, 1), B.eventEmitter.trigger("header:notifications:item_removed"), _r_();
},
_filters:{
seen:function(e) {
return _i_("18c:1704"), _r_(e.seen);
},
unseen:function(e) {
return _i_("18c:1705"), _r_(!e.seen);
}
},
getNotifications:function(e) {
if (_i_("18c:1209"), this._filters[e]) return _r_(this._notifications.filter(this._filters[e]));
return _r_(this._notifications);
},
getNotificationsByType:function(e) {
return _i_("18c:1210"), _r_(this._notifications.filter(function(t) {
return _i_("18c:1936"), _r_(t.type === e);
}));
},
_getUnseenCountsFromGroups:function() {
_i_("18c:1211");
var e = 0;
return this.$root.find(".uc-notifications-group_iframe").each(function(t, i) {
_i_("18c:1937");
var n = $(i).data("unread-count");
"undefined" != typeof n && (e += n), _r_();
}), _r_(e);
}
}, _r_();
}), B.require([ "require" ], function(e) {
_i_("18c:176"), e("header/notifications/notifications").init(), _r_();
}), booking[sNSStartup].header_cleaned_links = {
priority:9,
init:function() {
_i_("18c:436"), $(".js-user-access-form--back-to-signin").click(function() {
_i_("18c:1212");
var e = $(".user_access_signin_menu, .user_access_signup_menu");
e.find(".js-user-access-form--signin").removeClass("g-hidden"), e.find(".js-user-access-form--signup").removeClass("g-hidden"), e.find(".js-user-access-form--reminder").addClass("g-hidden"), e.find(".js-user-access-form--reminder-sent").addClass("g-hidden"), _r_();
}), $("body").delegate(".forgot_link_look, .forgot_pass_trigger", "click", function(e) {
if (_i_("18c:1213"), e.preventDefault(), B.env.b_show_user_accounts_features && $(this).closest(".user_access_signin_menu, .user_access_signup_menu").length) {
var t = $(this).closest(".user_access_signin_menu, .user_access_signup_menu");
t.find(".js-user-access-form--signin").addClass("g-hidden"), t.find(".js-user-access-form--signup").addClass("g-hidden"), t.find(".js-user-access-form--reminder").removeClass("g-hidden"), t.find(".js-user-access-form--reminder .user_access_email").val(t.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select(), booking.eventEmitter.one("UA:password-reminder-sent", function() {
_i_("18c:2137"), t.find(".form-loading").hide(), t.find(".alert-error").removeClass("alert-displayed"), t.find(".js-user-access-form--reminder").addClass("g-hidden"), t.find(".js-user-access-form--reminder-sent").removeClass("g-hidden"), _r_();
});
} else {
var i = $(this).attr("data-href") || $(this).attr("href");
window.open(i, "_blank", "left=42,top=42,height=502px,width=440px,resizable=false");
}
_r_();
}), $("body").delegate(".hide_reminder_iframe", "click", function() {
_i_("18c:1214"), $(this).parent(".reminder_iframe_wrapper").remove(), $(".better_login").show(), booking[sNSStartup].new_personal_menu.recheckHeight(), oThat.openSelect("current_account"), _r_();
}), $("#foldout_loggedin").delegate("li", "click", function() {
_i_("18c:1215");
var e = $(this);
e.hasClass("seo_link_look") && e.attr("data-href") && (e.hasClass("my_logout") || (window.location = e.attr("data-href"))), _r_();
}), _r_();
}
}, function() {
_i_("18c:177");
var e = B.require("jquery");
booking[sNSStartup].hotel_share_center = {
priority:9,
share_center:null,
share_center_popup:null,
prev_share_center_link:null,
init:function() {
_i_("18c:1216");
var t = !1;
"hotel" === B.env.b_action && e(".js-disable_share_center_button_icon").length && (t = !0);
var i = this;
e(".share_center .share_center_button strong, .general_share_center_button, div.hp_improve_share_center_button .share_center_button_icon").click(function(n) {
if (_i_("18c:1938"), t) return _r_(!1);
if (e("#general_share_center").length) {
i.share_center = e("#general_share_center").get(0), e(i.share_center).removeClass("has_short_url");
var r = e(this).attr("data-hotelname"), o = e(this).attr("data-hotelimage"), a = e(this).attr("data-sharelinks").split(","), s = e(i.share_center).attr("data-checkinvars"), _ = [ e(this).offset().left - e("#bodyconstraint-inner").offset().left, e(this).offset().top ];
e(".details", i.share_center).html('<img src="' + o + '" width="50" height="50" alt="" /><h3>' + r + "<small>" + a[0] + "</small></h3><hr />"), e("#share_center_url").val(a[0]), e(".sc_facebook a", i.share_center).attr("href", a[1] + s), e(".sc_google a", i.share_center).attr("href", a[2] + s), e(".sc_twitter a", i.share_center).attr("href", a[3] + s), e(".sc_email a", i.share_center).attr("href", a[4] + s), e(i.share_center).css({
left:_[0] + "px",
top:_[1] + "px"
});
} else i.share_center = e(this).closest(".share_center");
return i.share_center_popup = e(".share_center_popup", i.share_center), e(i.share_center).hasClass("open") ? null == i.prev_share_center_link || i.prev_share_center_link == this ? i.close() :i.addShortUrl() :(i.prev_share_center_link = this, i.open()), _r_(!1);
}), e(".share_center .close").click(function() {
return _i_("18c:1939"), i.close(" - Corner"), _r_(!1);
}), e(".share_center .out_link a").click(function() {
_i_("18c:1940");
var t = e(this).attr("rel"), i = e(this).attr("href");
return _gaq.push([ "_trackSocial", "Share Center", "Link Share on" + t ]), window.open(i, "sc_share", "menubar=0,resizable=1,width=600,height=400"), _r_(!1);
}), e(".share_center .sc_email a").click(function() {
_i_("18c:1941"), _gaq.push([ "_trackSocial", "Share Center", "Link Share onEmail" ]), _r_();
}), e(".share_center_url").click(function() {
_i_("18c:1942"), this.select(), e(".copy_hint", e(this).closest(".share_center")).fadeIn("fast"), _gaq.push([ "_trackSocial", "Share Center", "Copy URL" ]), _r_();
}), e(".share_center_url").blur(function() {
_i_("18c:1943"), e(".share_center .copy_hint", this).fadeOut("fast"), _r_();
}), _r_();
},
open:function() {
_i_("18c:1217"), e(this.share_center_popup).fadeIn("fast"), e(this.share_center).addClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Open Share Center" ]), this.addShortUrl(), _r_();
},
addShortUrl:function() {
if (_i_("18c:1218"), !e(this.share_center).hasClass("has_short_url")) {
var t = e(".share_center_url", this.share_center).val() + "?label=social_sharecenter_copy_url";
e(this.share_center).data("checkin") && e(this.share_center).data("checkout") && (t = t + "&checkin=" + e(this.share_center).data("checkin") + "&checkout=" + e(this.share_center).data("checkout")), e.get("/short_uri?url=" + escape(t) + "&aid=" + booking.env.aid, function(t) {
_i_("18c:2138");
var i = "http://booking.com/" + t.short_url;
e("h3 small", this.share_center).text(i), e(".share_center_url", this.share_center).val(i), e(this.share_center).addClass("has_short_url"), _r_();
});
}
_r_();
},
close:function(t) {
_i_("18c:1219"), this.prev_share_center_link = null, e(this.share_center_popup).fadeOut("fast"), e(this.share_center).removeClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Close Share Center" + t ]), _r_();
}
}, _r_();
}(), function() {
"use strict";
_i_("18c:178");
var e, t = window.jQuery, i = window.booking, n = {
selector_badge:".d-deal",
className_tt_left:"d-deal__tooltip-left",
className_tt_right:"d-deal__tooltip-right",
className_tt_preinit:"d-deal__pre-init"
}, r = t(window);
function o() {
_i_("18c:437"), clearTimeout(e), e = setTimeout(function() {
_i_("18c:1514");
var i, o, a = r.width() || 1e3;
clearTimeout(e), t(n.selector_badge).each(function(e, r) {
_i_("18c:2053"), i = t(r), i.removeClass(n.className_tt_preinit), i.removeClass(n.className_tt_left), i.removeClass(n.className_tt_right), o = i.offset().left, o > a - 270 ? i.addClass(n.className_tt_right) :200 > o && i.addClass(n.className_tt_left), _r_();
}), _r_();
}, 300), _r_();
}
o(), t(window).on("resize", o), i.events.on("HP:RT:RoomSelectChanged", function(e) {
_i_("18c:816"), o(), _r_();
}), _r_();
}(), "object" != typeof JSON && (JSON = {}), function() {
"use strict";
_i_("18c:179");
function f(e) {
return _i_("18c:438"), _r_(10 > e ? "0" + e :e);
}
"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
return _i_("18c:1220"), _r_(isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" :null);
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
return _i_("18c:1706"), _r_(this.valueOf());
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
}, rep;
function quote(e) {
return _i_("18c:439"), escapable.lastIndex = 0, _r_(escapable.test(e) ? '"' + e.replace(escapable, function(e) {
_i_("18c:1791");
var t = meta[e];
return _r_("string" == typeof t ? t :"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
}) + '"' :'"' + e + '"');
}
function str(e, t) {
_i_("18c:440");
var i, n, r, o, a, s = gap, _ = t[e];
switch (_ && "object" == typeof _ && "function" == typeof _.toJSON && (_ = _.toJSON(e)), "function" == typeof rep && (_ = rep.call(t, e, _)), typeof _) {
case "string":
return _r_(quote(_));

case "number":
return _r_(isFinite(_) ? String(_) :"null");

case "boolean":
case "null":
return _r_(String(_));

case "object":
if (!_) return _r_("null");
if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(_)) {
for (o = _.length, i = 0; o > i; i += 1) a[i] = str(i, _) || "null";
return r = 0 === a.length ? "[]" :gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" :"[" + a.join(",") + "]", gap = s, _r_(r);
}
if (rep && "object" == typeof rep) for (o = rep.length, i = 0; o > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, _), r && a.push(quote(n) + (gap ? ": " :":") + r)); else for (n in _) Object.prototype.hasOwnProperty.call(_, n) && (r = str(n, _), r && a.push(quote(n) + (gap ? ": " :":") + r));
return r = 0 === a.length ? "{}" :gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" :"{" + a.join(",") + "}", gap = s, _r_(r);
}
_r_();
}
"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
_i_("18c:1221");
var n;
if (gap = "", indent = "", "number" == typeof i) for (n = 0; i > n; n += 1) indent += " "; else "string" == typeof i && (indent = i);
if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
return _r_(str("", {
"":e
}));
}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
_i_("18c:1222");
var j;
function walk(e, t) {
_i_("18c:1707");
var i, n, r = e[t];
if (r && "object" == typeof r) for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n :delete r[i]);
return _r_(reviver.call(e, t, r));
}
if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return _i_("18c:2195"), _r_("\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), _r_("function" == typeof reviver ? walk({
"":j
}, "") :j);
throw new SyntaxError("JSON.parse");
}), _r_();
}(), $.cookie("b") ? window.b_cookie = JSON.parse($.cookie("b")) || {} :window.b_cookie = {};

var dont_execute_in_tdot = function() {
_i_("18c:180");
var e = B.require("jquery"), t = booking.env, i = booking[sNSStartupLoad].show_language = {
priority:9,
init:function() {
_i_("18c:1515");
var n = function() {
_i_("18c:2054"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), _r_();
};
if ("undefined" == typeof window.b_cookie && (window.b_cookie = {}), e("#langselectbutton, #languageselect input").hide(), e("#langselectformlist, #currList").change(function() {
_i_("18c:2055"), e("#languageselect")[0].submit(), n(), _r_();
}), e(".current_language, .prompt_close").click(function(t) {
_i_("18c:2056"), t.preventDefault(), e(".language_prompt").hide(), e.get("/general." + booking.env.b_lang + ".html?tmpl=blank"), _r_();
}), e(".language_flags").click(function() {
_i_("18c:2057"), n(), _r_();
}), t.show_language_suggestion) {
if (window.b_cookie.countLang) if (isNaN(window.b_cookie.countLang)) t.language_dialog_count2 = 1, window.b_cookie.countLang = 1; else {
var r = parseInt(parseInt(window.b_cookie.countLang, 10) + 1, 10);
4 >= r && (t.language_dialog_count2 = r, window.b_cookie.countLang = t.language_dialog_count2);
} else t.language_dialog_count2 = 1, window.b_cookie.countLang = 1;
"undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), "dontshow" !== window.b_cookie.langPrompt && t.language_dialog_count2 < 4 && !booking.affiliate.platform.isHybrid && setTimeout(i.createAlert, 2e3);
}
_r_();
},
createAlert:function(i) {
_i_("18c:1516");
var n, r = t.show_language_suggestion, o = !1, a = "", s = "", _ = "";
if (r) {
var c = 230, l = e("#current_currency").width(), u = e("#current_language").width(), d = Math.round(l + u / 2 - c / 2), h = "";
e("#languageselect .language-wrapper").length ? (n = e("#languageselect .language-wrapper"), a = "margin-top:10px;", s = "top: -2px;", t.b_is_ie7 && (_ = "margin-top:25px;left:100px;"), o = !0) :(n = e("#personal_form"), s = "top: -11px;", _ = "top:40px;"), h += '<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:' + c + "px;left:" + d + "px;" + _ + '"><div style="position:absolute;zoom:1;' + s + ";left:120px;width:17px;height:13px;background:url('//q.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);" + a + '"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">' + t.transl_close_x + "</a>", h += '<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(' + B.tools.jsStaticUrl("/static/img/flags/24/" + t.b_flag_to_suggest + ".png") + ') no-repeat;" data-lang-code="' + r.suggested_lang_select + '">' + r.transl_change_page_lang_to_x + "</a>", h += "</div></div>", n.append(h), e("#lang-prompt").fadeIn("slow"), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Show"), e("#lang-prompt .close").click(function() {
return _i_("18c:2196"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), e("#lang-prompt").hide(), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Close"), _r_(!1);
}), e("#lang-prompt .lang_change_link").click(function() {
_i_("18c:2197");
var i;
window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
});
var n = e(this).attr("data-lang-code");
o ? (e("#langselectformlist").val(n), e("#languageselect")[0].submit()) :(i = e(".lang_" + n).find("a").attr("href"), i && (window.location = i)), _r_();
});
}
_r_();
}
};
_r_();
};

booking.env.b_is_tablet || dont_execute_in_tdot(), booking[sNSExperiments].ng_last_viewed = {
priority:9,
resultsPerPage:booking.env.b_is_android_tablet ? 4 :5,
totalPages:0,
currentPage:0,
click:null,
googleTracked:!1,
lastViewedHotels:null,
overlay:null,
ajaxPath:"/userhistory." + booking.env.b_lang_for_url + ".html",
ajaxStatus:0,
staticPath:[],
init:function() {
_i_("18c:441"), this.staticPath = booking.env.b_static_images_hostnames, $("body").append('<div id="ng-overlay" hidden></div>'), this.$overlay = $("#ng-overlay"), this.addEvents(), _r_();
},
addEvents:function() {
_i_("18c:442");
var e = this, t = $("#top_lw_wrapper"), i = $("a#top_last_viewed");
i.bind("click", {
exp:e
}, function(i) {
_i_("18c:1223");
var n = ($(this), $("#history_count").attr("data-count"));
e.googleTracked || (booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the header button"), e.googleTracked = !0), e.isVisibleOverlay() && "lw" == e.click ? (e.distroyOverlay(), t.hide()) :(e.createOverlay(), $(".milk_menu").hide(), t.show(), e.click = "lw"), !e.ajaxStatus && n && n - 0 > 0 && e.getLastViewedHotels(), "undefined" != typeof booking.maps && booking.maps.map_opened && booking.maps.close(), i.preventDefault(), _r_();
}), $("#ng-overlay, #current_account, #header_currency, #header_language").bind(B.env.pointer_events.pointerclick, function(t) {
_i_("18c:1224");
var i = ($(this), $(t.target));
"ng-overlay" == i.get(0).id && t.preventDefault(), e.distroyOverlay(), _r_();
}), $("#lw_next, #lw_prev").bind(B.env.pointer_events.pointerclick, function(t) {
_i_("18c:1225");
var i, n = $(this);
t.preventDefault(), i = setTimeout(function() {
_i_("18c:2058"), e.renderItems(n.data("page")), _r_();
}, 300), _r_();
}), $("#sidebar_last_viewed").bind("click", function(e) {
_i_("18c:1226"), e.preventDefault(), $(document.body).animate({
scrollTop:0
}, 400, function() {
_i_("18c:1944"), i.trigger("click"), booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the sidebar button"), _r_();
}), _r_();
}), _r_();
},
handleCookieWarning:function(e) {
_i_("18c:443");
var t = !1;
if ("undefined" != typeof booking[sNSStartup].t_cookie_warning && !booking[sNSStartup].t_cookie_warning.getCookie() && /be|el|lt|pt|bg|es|lu|ro|cz|hu|si|dk|hr|mt|sk|de|it|fi|ee|cy|se|ie|lv|pl|uk|gb|fr|at/.test(booking.env.b_guest_country) && (t = !0), t) ; else if ("nl" != booking.env.b_guest_country || "undefined" != typeof booking[sNSExperiments].t_cookie_warning && booking[sNSExperiments].t_cookie_warning.getCookie()) return _r_();
var i = $("#cookie_warning");
i.length && ("show" == e ? i.show() :i.hide()), _r_();
},
createOverlay:function() {
_i_("18c:444");
var e = this;
e.handleCookieWarning(), $("#ng-overlay").height($("html").outerHeight(!0)).show(), _r_();
},
distroyOverlay:function() {
_i_("18c:445");
var e = this;
return $("#ng-overlay").hide(), $("#top_lw_wrapper").hide(), e.handleCookieWarning("show"), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), _r_(!1);
},
isVisibleOverlay:function() {
_i_("18c:446");
var e = this;
return _r_(e.$overlay.is(":visible"));
},
getLastViewedHotels:function() {
_i_("18c:447");
var e = this, t = $("#lw_list #spinner");
return e.ajaxStatus = 1, $.ajax && $.ajax({
type:"GET",
cache:!1,
url:e.ajaxPath,
dataType:"JSON",
data:{
last_viewed_json:1,
tmpl:"profile/json",
stid:350339
},
success:function(i) {
if (_i_("18c:1945"), e.ajaxStatus = 2, "object" != typeof i && (i = $.parseJSON(i)), !i || $.isEmptyObject(i) || i instanceof Array && !i.length) return _r_();
e.lastViewedHotels = i, e.totalPages = Math.ceil(i.length / e.resultsPerPage), e.renderItems(1), t.remove(), _r_();
}
}), _r_(!0);
},
renderItems:function(e) {
_i_("18c:448");
var t = this, i = $("#lw_next"), n = $("#lw_prev"), r = $("#lw_list"), o = t.lastViewedHotels, a = (e - 1) * t.resultsPerPage, s = a + t.resultsPerPage;
for (s = s > o.length ? o.length :s, r.empty(), t.currentPage = e, a; s > a; a++) r.append(this.renderItem(o[a]));
t.currentPage < t.totalPages ? i.data("page", t.currentPage + 1).show() :i.hide(), 1 != t.currentPage ? n.data("page", t.currentPage - 1).show() :n.hide(), _r_();
},
renderItem:function(e) {
_i_("18c:449");
var t = this, i = "";
if (i += "<li>", i += '<a class="ui-helper-clearfix" href="', i += booking.env.b_nonsecure_hostname_signup + e.url + booking.env.b_query_params_with_lang, i += booking.env.b_url_params + booking.env.b_query_params_delimiter, "undefined" != booking.env.b_param_do_availability_check && (i += "do_availability_check=on" + booking.env.b_query_params_delimiter, booking.env.b_checkin_date && booking.env.b_checkout_date && (i += "checkin=" + booking.env.b_checkin_date, i += booking.env.b_query_params_delimiter, i += "checkout=" + booking.env.b_checkout_date)), i += '">', e.photo_id) {
var n = Math.round(Math.random());
i += '<img width="60px" height="60px" src="' + t.staticPath[n] + "/images/hotel/square60/" + e.photo_id.substring(0, 3) + "/" + e.photo_id + '.jpg " />';
}
return i += '<span class="lw_hotel_name">' + e.title + "</span>", e.rating && (i += e.class_is_estimated && "de" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :e.class_is_estimated && "au" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :'<span class="retina_stars_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>'), e.address && (i += '<span class="lw_address">' + e.address + "</span>"), i += "</a>", i += "</li>", _r_(i);
},
loadRatingClass:function(e, t) {
return _i_("18c:450"), _r_(t ? "circle" + e + "i4half" :"circle" + e + "i4");
},
loadRetinaRatingClass:function(e, t) {
return _i_("18c:451"), _r_("retina_stars_small_" + e + (t ? "half" :""));
}
}, booking[sNSExperimentsLoad].lazy_load_print_css = {
priority:9,
init:function() {
_i_("18c:452");
var e = document.createElement("link");
e.rel = "stylesheet", e.type = "text/css", e.href = booking.env.print_css_href, e.media = "print", document.getElementsByTagName("head")[0].appendChild(e), _r_();
}
}, booking.ensureNamespaceExists(sNSStartup), booking.lightbox = booking[sNSStartup].lightbox = function() {
_i_("18c:453");
var e, t, i, n, r, o, a = $("body"), s = {
bAnimation:!0,
bCloseButton:!0,
bMaskClick:!0,
closeOnEsc:!0,
customWrapperClassName:"",
customMaskClassName:"",
bFullscreen:!1,
hideCallBack:null,
hideBeforeCallBack:null,
positionBeforeCallBack:null,
positionAfterCallBack:null,
cloneElement:!1,
bCanScroll:!1,
bOverflowVisible:!1,
autoCenter:!0,
limitHeight:!1,
opacity:.5,
autoWidth:!1,
position:"fixed",
topMargin:0,
bottomMargin:0,
preventBodyScroll:!1
}, _ = {}, c = [], l = function() {
_i_("18c:1517");
for (var e = [ "", "moz", "webkit" ], t = !1, i = 0; 3 > i; i++) if (e[i] + ("" === e[i] ? "b" :"B") + "oxSizing" in document.body.style) return _r_(!0);
return _r_(t);
}(), u = !1;
function d() {
_i_("18c:817");
var e = a.width();
o = parseInt(a.css("padding-right"), 10), a.css("overflow", "hidden");
var t = a.width() - e;
a.css("padding-right", o + t), _r_();
}
function h() {
_i_("18c:818"), a.css({
overflow:"auto",
paddingRight:o
}), _r_();
}
var p = function() {
_i_("18c:1227"), _.positionBeforeCallBack && _.positionBeforeCallBack(), e.css({
width:$(document).width(),
height:$(document).height()
});
var i = $(window).width(), n = Math.max(0, $(window).height() - _.topMargin - _.bottomMargin);
if (l || (i = i - parseInt(t.css("paddingLeft")) - parseInt(t.css("paddingRight")), n = n - parseInt(t.css("paddingTop")) - parseInt(t.css("paddingBottom"))), !_.limitHeight) {
var r = Math.max(0, $(window).height() - _.topMargin - _.bottomMargin);
t.outerHeight() > r ? t.css("height", n) :(t.css("height", ""), t.outerHeight() >= r && t.css("height", n));
}
if (t.outerWidth() > $(window).width()) t.css("width", i); else if (t.css("width", ""), t.outerWidth() >= $(window).width()) t.css("width", i); else if (_.autoWidth) {
var o = t.children().first().outerWidth();
l && (o += parseInt(t.css("padding-left"), 10) + parseInt(t.css("padding-right"), 10), o += parseInt(t.css("border-left-width"), 10) + parseInt(t.css("border-right-width"), 10)), t.css({
width:o
});
}
var a = 0, s = 0;
_.bFullscreen ? t.css({
width:i,
height:n
}) :(a = Math.max(_.topMargin, $(window).height() / 2 - t.outerHeight() / 2), s = Math.max(0, $(window).width() / 2 - t.outerWidth() / 2));
var c = "hidden";
_.bCanScroll ? c = "auto" :_.bOverflowVisible && (c = "visible"), "absolute" == _.position && (a = Math.max(0, $(window).height() / 2 - t.outerHeight() / 2), a += $(document).scrollTop(), t.css("position", "absolute")), t.css({
top:a,
left:s,
overflow:c
}), _.positionAfterCallBack && _.positionAfterCallBack(), _r_();
}, f = function() {
_i_("18c:1228"), t && t.is(":visible") && p(), _r_();
}, g = function() {
if (_i_("18c:1229"), !t) return _r_();
_.hideBeforeCallBack && _.hideBeforeCallBack(), _.cloneElement || (n.prepend(i), i.css("display", r)), e.remove(), t.remove(), u = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", f), $(window).unbind("resize", f), _.closeOnEsc && $(document).unbind("keyup", m), $("#calendar_popup").css("display", "none"), _.hideCallBack && _.hideCallBack(), _.preventBodyScroll && h(), booking.eventEmitter.trigger("modal:close"), _r_();
}, m = function(e) {
_i_("18c:1230"), 27 !== e.keyCode || c.length || g(), _r_();
}, v = function() {
_i_("18c:1231"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
_i_("18c:1946"), g(), _r_();
}), _.bMaskClick && $(".modal-mask").one("click", function() {
_i_("18c:2139"), g(), _r_();
}), _.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", f), "absolute" == _.position && _.autoCenter && $(window).bind("scroll", f), _r_();
}, b = function() {
_i_("18c:1232"), e = $('<div class="modal-mask"/>').appendTo(document.body), _.customMaskClassName.length > 0 && e.addClass(_.customMaskClassName), t = $('<div class="modal-wrapper"/>').appendTo(document.body), _.customWrapperClassName.length > 0 && t.addClass(_.customWrapperClassName), _.cloneElement ? i.clone().appendTo(t) :t.append(i), _.bCloseButton && t.append($('<div class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"/>')), _.bFullscreen && t.addClass("modal-wrapper--fullscreen"), u = !0, $("body").addClass("modal-visible"), _.preventBodyScroll && d(), i.show(), p(), v(), _r_();
}, w = function() {
if (_i_("18c:1233"), b(), t.css("visibility", "visible"), _.bAnimation) {
var i = _.bAnimation;
"number" != typeof i && (i = parseInt(i, 10) || 1e3), e.fadeTo(Math.max(0, Math.min(600, i - 400)), _.opacity), t.css("opacity", "0").animate({
opacity:1
}, i, function() {
_i_("18c:2140"), $(this).css("opacity", ""), _r_();
});
} else e.css("opacity", _.opacity).show();
_.ajax && "function" == typeof _.loadCallBack && _.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), _r_();
}, y = function(e, o, a) {
if (_i_("18c:1234"), t && t.is(":visible")) return _r_();
if (_ = {}, $.extend(_, s, o), _.iframe) {
var c = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + _.iframeHeight + '"></iframe> ');
"function" == typeof _.loadCallBack && c.load(_.loadCallBack), i = c, n = i.parent(), r = i.css("display"), w();
} else _.ajax ? jQuery.ajax({
url:e,
cache:!0,
success:function(e) {
_i_("18c:2283"), i = _.ajaxRawContent ? $(e) :$($.trim(e)).eq(0), n = i.parent(), r = i.css("display"), w(), _r_();
}
}) :(i = $(e), i.length && "SCRIPT" === i[0].tagName && (i = $($.trim(i.html()))), n = i.parent(), r = i.css("display"), w());
return "undefined" != typeof a && a(), _r_(t);
}, k = function(e, t, i, n) {
_i_("18c:1235"), booking[sNSStartup].lightbox.show($("#" + n)), _r_();
};
return _r_({
priority:5,
init:function() {},
show:y,
hide:g,
rePosition:f,
open:k,
isVisible:function() {
return _i_("18c:1519"), _r_(u);
},
pushEscStack:function(e) {
_i_("18c:1520"), c.push(e), _r_();
},
popEscStack:function() {
_i_("18c:1521"), c.pop(), _r_();
},
hideWithFade:function(i, n) {
_i_("18c:1522"), t.fadeOut(i), e.fadeOut(i, function() {
_i_("18c:2059"), g(), n && n(), _r_();
}), _r_();
}
});
}(), B.define("lightbox", booking.lightbox), booking[sNSStartup].loc_index_japanese_map = {
init:function() {
_i_("18c:454"), $(".map_links").hover(function() {
_i_("18c:1236");
var e = this.id;
$("#" + e + "_in").show(), _r_();
}, function() {
_i_("18c:1237");
var e = this.id;
$("#" + e + "_in").hide(), _r_();
}), $(".tab01").click(function() {
_i_("18c:1238"), $(".map_overseas").hide(), $(".map_ja").show(), $(".tab02").removeClass("active"), $(".tab01").addClass("active"), _r_();
}), $(".tab02, #ja11").click(function() {
_i_("18c:1239"), $(".map_ja").hide(), $(".map_overseas").show(), $(".tab01").removeClass("active"), $(".tab02").addClass("active"), _r_();
});
var e = $(".map_overseas"), t = $(".overseas_cities");
e.delegate(".country_list", "click", function(e) {
_i_("18c:1240"), e.preventDefault();
var n = $(this), r = n.data("id"), o = t.find(".country_" + r).clone();
i.open({
title:n.clone(),
content:o
}), _r_();
});
var i = function() {
_i_("18c:1523");
var e, t = $(".map_box_overlay"), i = t.find(".map_box_overlay_header_title"), n = t.find(".map_box_overlay_content");
return t.delegate(".map_box_overlay_mask", "click", function(t) {
_i_("18c:2198"), e.close(), _r_();
}).delegate(".map_box_overlay_close_button", "click", function(t) {
_i_("18c:2060"), e.close(), _r_();
}), e = {
open:function(e) {
_i_("18c:2199");
var r = e.content || "", o = e.title || "";
i.empty().append(o), n.empty().append(r), t.show(), _r_();
},
close:function() {
_i_("18c:2200"), t.hide(), _r_();
}
}, _r_(e);
}();
_r_();
},
initElse:function() {}
}, B.when({
experiment:"YdVGbWcVCET"
}).run(function(e) {
_i_("18c:181");
var t = e("jquery"), i = e("et");
function n(e, t) {
return _i_("18c:456"), e = new Date(e), t && e.setDate(e.getDate() + t), _r_(e);
}
t("body").on("change", "select.hp-availability-los", function() {
_i_("18c:819"), i.stage("YdVGbWcVCET", 2);
var e = n(B.search.dates("checkin").dateObject_, parseInt(t(this).val()));
B.search.dates("checkout", {
date:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}), _r_();
}), _r_();
}), B.when({
events:"ready"
}).run(function() {
_i_("18c:182");
var e = B.require("jquery"), t = B.require("et"), i = B.require("events");
i.on("rc-lightbox-open", function(i, n) {
_i_("18c:820"), e(n).hasClass("rt_resort_credits_info--selected_facilities") && t.stage("YdVXfCAUfDMcMGceTfBSBXe", 1), _r_();
}), _r_();
}), function() {
_i_("18c:183");
var e = B.require("jquery");
booking[sNSStartup].login_foldout = {
priority:9,
fontchange:!1,
init:function() {
_i_("18c:1241");
var t = this;
"https:" == location.protocol && booking.env.b_is_app && e(".stay_login, #login-form").each(function() {
_i_("18c:2141");
var t = e(this).attr("action");
if (-1 == t.indexOf("protocol=https")) {
var i = t;
i = t.indexOf("protocol=http") > -1 ? t.replace("protocol=http", "protocol=https_www") :sCurlink + "&protocol=https_www", e(this).attr("action", i);
}
_r_();
}), booking.env.b_can_acc_bp_auth_lightbox || e("#login_redesign").click(function() {
return _i_("18c:2142"), e(this).hasClass("no_arrow") || (e(this).hasClass("login_opened") ? e(this).removeClass("login_opened") :e(this).addClass("login_opened"), e("#login-form_wrapper fieldset").toggle()), _r_(!1);
}), e(".stay_login").submit(function() {
_i_("18c:1947"), booking.google.userProfileTracker && booking.google.trackEvent(booking.google.userProfileTracker, "Login attempt : Header", booking.env.b_action), e("#foldout_error").hide(), e("#login_loading").show();
var i = document.getElementById("username_input_top").value;
if ("" == i) return t.hideLoader(), e('label[for="username_input_top"]').css({
color:"#B30000",
"font-weight":"bold"
}), e("#username_input_top").focus(), _r_(!1);
var n = /^[0-9[\.]+$/.exec(i);
if (n) {
var r = e("#bm_log").val();
r += r.indexOf(!1) ? "&" :"?";
var o = e("#password_input_top", this).val();
r += "pincode=" + o + "&bn=" + i, e("#tar_tmpl").attr("value", ""), e(this).attr("action", r), e(this).attr("target", "_top");
}
setTimeout(function() {
_i_("18c:2247"), t.hideLoader(), _r_();
}, 1e4), _r_();
}), e('input[name="username"]').each(function() {
if (_i_("18c:1948"), !isNaN(e(this).val())) {
e(this).val("");
var t = e(this).parents("form").get(0);
e('input[name="password"]', t).val("");
}
_r_();
}), e("#signup_form_regular,#sign_up_form").submit(function() {
if (_i_("18c:1949"), !t.validateLoginSubmitData({
formId:this.id
})) return _r_(!1);
_r_();
}), e("#user_mybooking_login_form").submit(function() {
if (_i_("18c:1950"), !t.validateLoginSubmitData({
formId:this.id,
passwordIsNumeric:1,
loginIsBookingNr:1
})) return _r_(!1);
_r_();
}), e(".in-pagelogin-form").submit(function() {
if (_i_("18c:1951"), booking.env.auth_level < 1) var t = e(".in-pagelogin-form").height() - 11; else var t = e(".in-pagelogin-form").height() + 19;
e("#page_login_loading").css("height", t + "px").show(), _r_();
}), e(document).on("click", ".user_login_show_signin, .user_login_show_signup", function() {
return _i_("18c:1952"), e(this).hasClass("user_login_show_signup") ? booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this) :booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this), e(".user_login_error_msg").hide(), _r_(!1);
}), e(window).bind("beforeunload", function() {
_i_("18c:1953"), e("iframe[name=log_tar]").each(function() {
_i_("18c:2248");
var t = e(this).parent();
e(this).remove().attr("src", "about:blank").appendTo(t), _r_();
}), _r_();
}), _r_();
},
validateLoginSubmitData:function(t) {
_i_("18c:1242");
var i, n, r, o, a, s, _ = e("#" + t.formId);
if (o = _.parents(".user_login_form"), a = e(".user_login_error_msg", o), t.loginIsBookingNr && (s = e(".user_bn_login_input", _).val(), s = s.replace(/\./g, ""), e(".user_bn_login_input", _).val(s), !s.length || !/^\d+$/g.test(s))) return this.displayLoginErrorMsg({
errorTarget:a,
errorMsg:0 === s.length ? booking.env.b_blank_bkng_nr :booking.env.b_bkng_nr_must_be_numeric
}), _r_(!1);
if ($passwordInput = e(".password_input", _), !$passwordInput.length) return _r_(1);
if (i = $passwordInput.val(), t.passwordIsNumeric || a.length && o.hasClass("user_login_single_signup") || e(".userlogin_signup_tab", o).hasClass("active")) {
if (n = i && i.length ? i.length :0, t.passwordIsNumeric) {
if (!n || !/^\d+$/g.test(i)) return this.displayLoginErrorMsg({
errorTarget:a,
errorMsg:0 === n ? booking.env.b_blank_numeric_pin :booking.env.b_password_must_be_numeric
}), _r_(!1);
} else {
if (8 > n) return this.displayLoginErrorMsg({
errorTarget:a,
errorMsg:booking.env[n ? "password_needs_8" :"account_error_add_password"]
}), _r_(!1);
if (r = e(".username_input", _), r.length && r.val() && r.val() === i) return this.displayLoginErrorMsg({
errorTarget:a,
errorMsg:booking.env.password_cant_be_username
}), _r_(!1);
}
return _r_(!0);
}
_r_();
},
displayLoginErrorMsg:function(t) {
if (_i_("18c:1243"), !t || !t.errorTarget || !t.errorMsg) return _r_();
t.errorTarget.show().text(t.errorMsg), booking[sNSStartup].new_personal_menu.recheckHeight();
var i = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", i + "px"), _r_();
},
thirdParty:function(t, i, n, r) {
_i_("18c:1244"), i && !r && e("#log_tar").attr("src", n), r && e("#email_send").show("slow"), _r_();
},
thirdPartyCancel:function(t, i, n) {
_i_("18c:1245"), this.hideLoader(), "undefined" != typeof e.noticeAdd && e.noticeAdd({
text:"\n \n \n " + i + " \n \n \n ",
stay:!1,
textLabel:"login_foldout",
stayTime:3e3,
type:"users",
close:"all",
destination:""
}), n && e("#email_send").show("slow"), _r_();
},
reCall:function(t) {
_i_("18c:1246");
var i = this;
if (t.reload && (booking.env.b_req_login = "1"), "OK" == t.loginstatus) if (t.userlanguage || t.currency) {
var n = booking.env.b_this_url, r = n.indexOf("?") > 0 ? "&" :"?";
t.userlanguage && (n += r + "lang=" + t.userlanguage, r = "&"), t.currency && (n += r + "selected_currency=" + t.currency), n.replace("logout=1", ""), document.location.href = n;
} else if (booking.env.b_redirect) document.location.href = booking.env.b_redirect; else if ("1" == booking.env.b_req_login) {
var o = booking.env.b_this_url;
o.replace("logout=1", ""), document.location.href = o;
} else {
var a = booking.env.b_this_url;
if (a.replace("logout=1", ""), a = a.indexOf("?") > 0 ? a + ";logout=1" :a + "?logout=1", sLoginLinks = t.loginlink.replace("sign_out_url", a), e("#login-form_wrapper fieldset").hide(), e(".welcome_login_link").hide(), e("#current_account_foldout").removeClass("non_logged_in_user").addClass("logged_in_user"), booking.env.is_user_wishlists ? (e("#search_tab_favourite").hide(), e("#search_tab_wishlists").show(), booking.env.is_user_wishlists_for_all && (e("#wishlist_modal_user_access").hide(), e("#wishlist_modal_content").show(), booking.lightbox.rePosition(), booking.env.b_user_has_imported_faves && e("#search_tab_wishlists").find(".user_imported_faves_new").show()), long_list = !1, hotel_id = booking.env.b_hotel_id, e.get("/wishlist/get", {
hotel_id:hotel_id,
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id
}, function(t) {
if (_i_("18c:2344"), t && t.success && t.lists && t.lists.length) {
for (var i, n = (t.lists, ""), r = "", o = 0, a = t.lists.length; a > o; o++) t.lists.length > 3 && (long_list = !0), i = t.lists[o], n += '<li><label><input type="checkbox" id="wl_' + i.id + '" value="wl_' + i.id + '"' + (1 == i.selected ? 'checked="checked"' :"") + " />" + i.name + "</label></li>", r += '<li><a href="' + booking.env.new_wishlist_url + i.id + '"><span>' + i.name + "</span></a></li>";
e("#wl_list").html(n), e("#search_tab_wishlists_content .menu_wishlists").html(r), (long_list = !0) && e(".wl_list_box").addClass("scrolling_list");
}
_r_();
})) :(e("#search_tab_favourite").show(), e("#search_tab_wishlists").hide(), booking.lightbox.hide()), e("#login_redesign").length) {
var s = e("#login_redesign").get(0);
e(s).addClass("no_arrow"), e(s).mouseover(function() {
return _i_("18c:2345"), _r_(!1);
}), e(s.parentNode).mouseover(function() {
return _i_("18c:2346"), _r_(!1);
});
}
e("#current_account_foldout").css("width", "auto");
window.setTimeout(function() {
_i_("18c:2334"), e("#password_input_top").val(""), t.avatarurl && "0" != t.avatarurl ? e(".my_image img").length && e(".my_image img").each(function() {
_i_("18c:2369"), e(this).attr("src", t.avatarurl), e(".head_firstname").length && e(this).css({
"margin-top":"-5px",
width:"26px",
height:"26px"
}), _r_();
}) :0 != t.defaultavatar && e(".my_image img").length && (e(".my_image img").addClass("def_avtr"), e(".my_image img").addClass("t_s_avtr_" + t.defaultavatar), e(".my_image img").css({
"margin-top":"-4px",
"margin-left":"-1px",
width:"24px",
height:"24px"
})), setTimeout(function() {
_i_("18c:2366"), i.preShowMenu(), _r_();
}, 100), e("#b_header").length || "undefined" != typeof e.noticeAdd && t.growl1 && t.growl2 && e.noticeAdd({
text:"\n \n \n " + unescape(t.growl1) + "<br>" + unescape(t.growl2) + " \n \n \n ",
textLabel:"user_login_notice",
stay:!1,
stayTime:3e3,
type:"users",
close:"all",
destination:"",
addClassName:"notice_login"
}), _r_();
}, 500);
"" != t.email && (e("#email_confirm").length && "" == e("#email_confirm").val() && (e("#email_confirm").val(t.email), e("#error_email_confirm").hide(), e("#label_email_confirm").removeClass("val-no").addClass("val-yes")), e("#email").length && "" == e("#email").val() && (e("#email").val(t.email), e("#error_email").hide(), e("#label_email").removeClass("val-no").addClass("val-yes"))), t.fdata1 && e("#address1").length && "" == e("#address1").val() && e("#address1").val(t.fdata1), t.fdata2 && e("#city").length && "" == e("#city").val() && e("#city").val(t.fdata2), t.fdata3 && e("#zip").length && "" == e("#zip").val() && e("#zip").val(t.fdata3), t.fdata4 && e("#cc1").length && "" == e("#cc1").val() && e("#cc1").val(t.fdata4), t.fdata5 && e("#phone").length && "" == e("#phone").val() && e("#phone").val(t.fdata5);
var _ = " ";
t.fdata6 && (e("#lastname").length && "" == e("#lastname").val() && (e("#lastname").val(t.fdata6), e("#error_lastname").hide(), e("#label_lastname").removeClass("val-no").addClass("val-yes")), e(".head_lastname").text(t.fdata6), _ = t.fdata6), t.fdata7 ? (e("#firstname").length && "" == e("#firstname").val() && (e("#firstname").val(t.fdata7), e("#error_firstname").hide(), e("#label_firstname").removeClass("val-no").addClass("val-yes")), e(".head_firstname").text(t.fdata7), _ = t.fdata7 + " " + _) :t.fdata6 && e(".head_firstname").text(""), e(".login_for_name").length && " " != _ && (e(".login_for_name").val(_), e(".login_for_name").css({
color:"#003580"
})), e("input[name='username']").val(t.email), booking.lightbox && booking.lightbox.isopen && booking.lightbox.close(), booking[sNSStartup].new_personal_menu.closeSelect(null, !0, t.hasbookings), booking[sNSStartup].hide_email_confirm && booking[sNSStartup].hide_email_confirm.hideConfMailInit(), t.has_stored_cc > 0 && (current_book_url = booking.env.b_this_url, current_book_url = current_book_url.replace(";logout=1", ""), current_book_url += ";tmpl=profile/creditcards_ajax;", e("#bs3_cc_form #book_credit_card").load(current_book_url + " #book_credit_card"), e("#cc_img").remove()), e("#multiple_login").hide(), i.hideLoader();
} else {
if (t.error) var c = unescape(t.error); else var c = "";
var l = t.nofoldout ? !1 :!0;
window.setTimeout(function() {
if (_i_("18c:2201"), l) {
if (B.env.b_is_tdot_traffic) {
e("#foldout_error").html(c);
var t = e(".forgot_link_look").text(), i = e(".forgot_link_look").attr("data-href");
e(".forgot_pass_trigger").attr("href", i).attr("data-href", i).text(t), e("#foldout_error").show();
} else e("#foldout_error").html(c).show();
var n = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", n + "px"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), e(".user_login_show_signup").click(function() {
return _i_("18c:2347"), e("#username").val(e("#username_input_top").val()), e("#new_user").click(), _r_(!1);
});
} else e("#bs2_page_login_error").length && e("#bs2_page_login_error").html(c).show();
_r_();
}, 500);
i.hideLoader();
}
_r_();
},
toggle:function(t, i) {
_i_("18c:1247");
var n = t.getAttribute("shown");
if ("false" == n) {
if (e("#foldout_error").hide(), e(t).css("display", "block"), 1e3 == i) {
var r = e("#loginPopup form").get(0);
i = e(r).height();
}
e(t).animate({
height:i + "px"
}, 500, function() {
_i_("18c:2143"), document.getElementById("username_input_top").focus(), _r_();
}), t.setAttribute("shown", "true");
} else e(t).animate({
height:"0px"
}, 500, function() {
_i_("18c:2144"), e(this).css("display", "none"), _r_();
}), t.setAttribute("shown", "false");
_r_();
},
hideLoader:function() {
_i_("18c:1248"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
},
preShowMenu:function() {
_i_("18c:1249"), ("book" != booking.env.b_action || "1" == booking.env.is_exp_user_center_bar) && (booking[sNSStartup].new_personal_menu.openSelect("current_account"), oThat.moused_menu = !1, e("#current_account").mouseenter(function() {
_i_("18c:2145"), oThat.moused_menu = !0, _r_();
}), setTimeout(function() {
_i_("18c:2146"), oThat.moused_menu || booking[sNSStartup].new_personal_menu.closeSelect(), _r_();
}, 4e3)), _r_();
}
}, booking[sNSStartup].new_personal_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("18c:1250");
var t = this;
e(".b_msie_6").length && (this.is_ie = 6), e(".b_msie_7").length && (this.is_ie = 7), "1" == booking.env.is_user_center_bar || (e(".select_box").mouseenter(function() {
_i_("18c:2147"), e(this).addClass("sel_hover"), _r_();
}), e(".select_box").mouseleave(function() {
_i_("18c:2148"), e(this).removeClass("sel_hover"), _r_();
})), e("body").click(function(i) {
if (_i_("18c:1954"), 2 == t.opening_state) {
var n = e(i.target);
e(n).length && (e(n).parents("#current_account_foldout").length || t.closeSelect());
}
if (booking.maps && booking.maps.map_opened && (!booking.maps.is_sr || !booking.map.mapHasBeenDragged)) {
var r = e(i.target);
!booking.maps.is_hp && !booking.maps.is_sr || !r.length || r.is("#b_map_container") || r.parents("#b_map_container,#sr_map").length || "close_map" === r.attr("id") || /gstatic/.test(r.attr("src")) || (e("#close_map").length > 0 ? e("#close_map").click() :e("#close_map_lightbox").length > 0 && e("#close_map_lightbox").click());
}
_r_();
}), e(".select_box").click(function(i) {
_i_("18c:1955"), 0 == t.opening_state ? t.openSelect(e(this).attr("id")) :t.cur_open != e(this).attr("id") ? t.closeSelect(e(this).attr("id")) :e(i.target).parents("#current_account_foldout").length || t.closeSelect(), _r_();
}), _r_();
},
recheckHeight:function() {
_i_("18c:1251");
var t = e("#current_account_foldout .select_foldout_wrap").height() + 15;
e("#current_account_foldout").animate({
height:t + "px"
}, 400), _r_();
},
openSelect:function(t) {
if (_i_("18c:1252"), booking.env.b_is_tdot_traffic) {
var i = e("#" + t);
if ("show-auth-lightbox" === i.attr("data-command")) return _r_();
}
if ("1" != booking.env.is_user_center_bar || booking.env.b_is_tdot_traffic) {
if (oThat = this, "login_redesign" === t && booking.env.b_can_acc_bp_auth_lightbox) return _r_();
this.cur_open = t;
var n, r = e("#" + t + "_foldout"), o = "block" == e("#foldout_loggedin").css("display");
e("#" + t).addClass("sel_open"), this.opening_state = 1, r.css({
display:"block",
opacity:"0",
overflow:"hidden",
height:"400px",
width:"200px"
}), n = e(e(".select_foldout_wrap", r).get(0)), n.css({
"overflow-y":"hidden",
height:"auto"
});
var a = n.height(), s = n.width(), _ = this.max_select_height;
if (r.hasClass("flex_foldout")) var c = s + 10; else if (e("#" + t).hasClass("sel_done")) var c = s; else {
var c = s + 20;
e("#" + t).addClass("sel_done");
}
if (a >= this.max_select_height - 10 && "current_account_foldout" != r.attr("id") ? r.hasClass("flex_foldout") ? (_ = a + 10, 300 > _ && (_ = 300)) :(n.css({
"overflow-y":"scroll",
height:"230px",
width:c + "px"
}), 6 == !this.is_ie && 7 == !this.is_ie && (c += 10)) :(_ = a + 10, n.css({
"overflow-y":"hidden",
height:"auto"
})), 6 == this.is_ie || 7 == this.is_ie && !o ? (r.css({
opacity:"1",
height:"0px",
width:"0px"
}), r.css({
width:"auto"
}), r.hasClass("smaller_booking_nr_login") ? n.css({
width:"600px"
}) :n.css({
width:"482px"
}), s = n.width(), c = s + 10) :r.css({
opacity:"1",
height:"0px",
width:"auto"
}), r.hasClass("left_foldout") && !booking.env.rtl ? r.css({
width:c + "px",
"padding-right":"0px"
}) :r.css({
width:c + "px",
"padding-right":"10px",
left:"0"
}), 6 == this.is_ie || 7 == this.is_ie && !o) {
var l = r.parents(0).width();
if (r.hasClass("left_foldout") && !booking.env.rtl && (iFixedPointEx = l - r.width() - 2, iFixedPointEx < 0 && (l -= iFixedPointEx)), 6 == this.is_ie || 7 == this.is_ie) {
var u = 210;
e("#multiple_login", r).length && (u = e(".smaller_booking_nr_login").length && !o ? 550 :"block" != e("#foldout_loggedin").css("display") ? 482 :182), 7 == this.is_ie && (l += 100), r.css({
width:u + "px",
"padding-right":"18px"
});
} else r.css({
width:c + "px"
}), e(".select_foldout_wrap", r).css({
"overflow-x":"hidden"
});
}
this.openSlow ? (this.openSlow = !1, r.animate({
height:_ + "px"
}, 800)) :r.css({
height:_ + "px"
}), setTimeout(function() {
_i_("18c:2149"), oThat.opening_state = 2, _r_();
}, 200), booking.env.b_is_ipad && e("body").bind("touchstart", function(t) {
if (_i_("18c:2249"), 2 == oThat.opening_state) {
var i = e(t.target);
e(i).length && !e(i).is("#current_account") && (e(i).parents("#current_account_foldout").length || e(i).parents("#login_redesign") || (oThat.closeSelect(), e(this).unbind(t)));
}
_r_();
});
} else ;
_r_();
},
closeSelect:function(t, i, n) {
_i_("18c:1253");
var r = this;
i && (e("#foldout_login").css({
display:"none"
}), e("#multiple_login").css({
display:"none"
}), e("#foldout_loggedin").css({
display:"block"
}), n && e("#stats_menu_link").css({
display:"block"
})), 2 == this.opening_state && (e(".select_foldout").animate({
height:"0px"
}, 200, function() {
_i_("18c:2150"), e(".select_foldout").css({
display:"none"
}), e(".select_box").removeClass("sel_open"), t && null != t && r.openSelect(t), _r_();
}), this.opening_state = 0), e("#user_searches_menu").length && booking[sNSStartup].top_saved_searches.closeTabs(), _r_();
},
scrollToLogin:function() {
_i_("18c:1254"), booking.env.rtl ? e("body").scrollTo({
top:0,
left:0
}, 500) :e("body").scrollTo({
top:0,
left:1e3
}, 500), this.openSlow = !0, 0 == this.opening_state ? this.openSelect("current_account") :this.closeSelect("current_account"), _r_();
},
hideLoader:function() {
_i_("18c:1255"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
}
}, booking[sNSStartup].my_social_networks = {
priority:9,
tp_window:null,
tp_cur:"",
cur_state:"CLOSED",
window_sizes:{
yahoo:[ 510, 500 ],
facebook:[ 500, 450 ],
google:[ 850, 510 ]
},
init:function() {
_i_("18c:1256");
var t = this;
e(".signup_tp a, #re_log_in a, a.connect_with").click(function() {
_i_("18c:1956"), booking[sNSStartup].new_personal_menu.opening_state = 2;
var i = this, n = e(i).attr("href"), r = e(i).attr("id"), o = n;
if (e("#login_loading").show(), "OPENING" != t.cur_state) if (t.tp_window) t.tp_cur != r.toLowerCase() ? (window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED") :t.tp_window.focus(); else {
t.cur_state = "OPENING", t.tp_cur = r.toLowerCase();
var a = 500, s = 500;
if (t.window_sizes[t.tp_cur]) var a = t.window_sizes[t.tp_cur][0], s = t.window_sizes[t.tp_cur][0];
var _ = "width=" + a + ",height=" + s + ",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
t.tp_window = window.open(o, "", _);
var c = "rem_provider=" + t.tp_cur;
booking.env.b_this_url.indexOf(c) > -1 && (booking.env.b_this_url = booking.env.b_this_url.replace(";" + c, ""), booking.env.b_this_url = booking.env.b_this_url.replace(c, "")), t.checking_in = window.setInterval(function() {
_i_("18c:2348"), (t.tp_window && t.tp_window.closed || !t.tp_window) && (e("#login_loading").hide(), e("#page_login_loading").hide(), window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED"), _r_();
}, 1e3), t.cur_state = "OPENED", t.tp_window && t.tp_window.focus();
}
return _r_(!1);
}), _r_();
}
}, booking[sNSStartup].merge_mybooking_myaccount = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("18c:1257");
var t = this;
e("#user_pin_link").click(function() {
return _i_("18c:1957"), e("#foldout_error").hide(), e("#old_pin_login").css({
display:"block",
top:"0px"
}), e("#existing_user_login .login_right").hide(), e(".b_msie_8").length ? e("#old_pin_login").css({
left:"240px"
}) :e("#old_pin_login").animate({
left:"240px"
}), t.old_pin_show = !0, _r_(!1);
}), e("#new_user").click(function() {
_i_("18c:1958"), t.newUserOpen(!0, this), _r_();
}), e("#existing_user").click(function() {
_i_("18c:1959"), t.newUserOpen(!1, this), _r_();
}), e("#old_pin_login a").click(function() {
return _i_("18c:1960"), e("#foldout_error").hide(), e("#old_pin_login").css({
top:"0px"
}), e("#old_pin_login").animate({
left:"500px"
}, function() {
_i_("18c:2250"), e("#old_pin_login").css("display", "none"), _r_();
}), t.old_pin_show = !1, _r_(!1);
}), booking.env.b_is_on_signup_page && booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, document.getElementById("account_new_user")), _r_();
},
newUserOpen:function(t, i) {
_i_("18c:1258");
var n = e(i).parents(".user_login_form");
this.old_pin_show && (e("#old_pin_login", n).hide(), e("#existing_user_login .login_right", n).show()), t ? (e("#existing_user_login, #existing_user_signin", n).hide(), e("#foldout_signup, #new_user_signup", n).show(), e("#existing_user, #account_existing_user", n).removeClass("active"), e("#new_user, #account_new_user", n).addClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()) :(e("#existing_user_login, #existing_user_signin", n).show(), e("#foldout_signup, #new_user_signup", n).hide(), e("#existing_user, #account_existing_user", n).addClass("active"), e("#new_user, #account_new_user", n).removeClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()), e(".better_error").hide(), e("#old_pin_login").css("top", "0px"), _r_();
}
}, booking[sNSStartup].welcome_user = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("18c:1259"), e("#welcome_login").click(function() {
return _i_("18c:1961"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), _r_(!1);
}), e("#welcome_signup").click(function() {
return _i_("18c:1962"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this.id), _r_(!1);
}), _r_();
}
}, booking[sNSStartup].faq_login_foldout = {
priority:9,
init:function() {
_i_("18c:1260"), "general" == booking.env.b_action && "0" == booking.env.auth_level && e(".open_top_login").click(function() {
return _i_("18c:2151"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), e("body").scrollTo({
top:0,
left:0
}, 500), _r_(!1);
}), _r_();
}
}, _r_();
}(), booking[sNSExperiments].ZSUNCTYAbEOFefYSbC = function(e, t) {
_i_("18c:259");
var i = $(e);
function n() {
if (_i_("18c:547"), null == e.opener) return _r_();
if (screen.width <= i.width()) return _r_();
var n = "404815" == booking.env.b_partner_id, a = n, s = i.width() < .9 * screen.width;
a ? s && $("body").bind("click.resize_partners", function(t) {
if (_i_("18c:2061"), t && t.target && $(t.target).hasClass("no-trigger-resize")) return _r_();
e.resizeTo(.95 * screen.width, .95 * screen.height), o(), _r_();
}) :$("body").bind("click.resize_partners", function(t) {
if (_i_("18c:1792"), t && t.target && $(t.target).hasClass("no-trigger-resize")) return _r_();
e.resizeTo(screen.width, screen.height), o(), _r_();
}), "413084" === t.env.b_partner_id && t.et.track("AEJPdZeBSCUYSXGFPafSbfZALMO") && r(), _r_();
}
function r() {
_i_("18c:548"), $("body").trigger("click.resize_partners"), _r_();
}
function o() {
_i_("18c:549"), $("body").unbind("click.resize_partners"), e.moveTo(0, 0), $(e).trigger("resize"), _r_();
}
return _r_({
init:n,
priority:1
});
}(window, booking), booking[sNSStartupLoad].message_box = {
priority:9,
init:function() {
_i_("18c:457"), $("#self_change1 .messageBox").click(function(e) {
_i_("18c:1261");
var t = $(this).children("a").attr("href"), i = /(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
return t && "#" != t && !i.test(t) && (location.href = $(this).children("a").attr("href")), _r_(!1);
}), $("#isDifferent").fadeIn(), _r_();
}
}, booking.newsLanding = function() {
_i_("18c:260");
var e = function() {
_i_("18c:897"), $(document).on("focus", ".location_dropdowns select", function() {
_i_("18c:1793");
var e = $(this).find(":selected").text();
$(this).attr("oldValue", e), _r_();
}), $(".location_dropdowns select").change(function() {
_i_("18c:1794");
var e, t = $(this).attr("id"), i = $(this).find(":selected").val(), n = $(this).find(":selected").text(), r = $(this).attr("oldValue");
i.length > 0 ? "fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries | " + n :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions | " + n :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities | " + n) :"fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries Remove | " + r :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions Remove | " + r :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities Remove | " + r), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), this.form.submit(), _r_();
}), $("#b_sortbox select").change(function() {
_i_("18c:1795"), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", "df_dropdown_sorting"), this.form.submit(), _r_();
}), $("#checkin-flexible-form").submit(function() {
_i_("18c:1796");
var e, t = $("#b_fd_checkin_date").val(), i = $("#fd_flex").attr("checked");
e = "undefined" != t ? i ? booking.env.b_lang + " | Date Select | Flexible" :booking.env.b_lang + " | Date Select" :booking.env.b_lang + " | Date Remove | ", booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].newsletterSignup = {
priority:8,
init:function() {
if (_i_("18c:458"), $(".subscriptionbox").click(function() {
return _i_("18c:1262"), booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), _r_(!1);
}), booking.env.b_show_newsletter_popup && booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), booking.env.b_show_solicitation_popup) {
if (booking.env.b_show_success_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_success"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
if (booking.env.b_show_error_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_error"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
}
_r_();
}
}, booking[sNSStartup].newsletterTutorials = {
priority:8,
init:function() {
_i_("18c:459");
var e = 1, t = this;
if (booking.env.tutorialpopup && window.b_cookie && window.b_cookie.showthistutorial != booking.env.tutorialpopup) {
var i = booking.env.tutorialpopup, n = $(".tutorialwrapper_" + i).attr("id");
t.loadPopups("#tutorial_dyk_" + i + "_s" + e, i, e);
}
$("#tutorial_dyk_02_s1 a.fd_next").click(function() {
_i_("18c:1263"), $("#show_reviews_tab").click(), _r_();
}), $("a.fd_close").click(function() {
_i_("18c:1264"), t.closeTutorial(this), _r_();
}), $("a.fd_next").click(function() {
_i_("18c:1265"), t.nextPopup(this, n, i), _r_();
}), _r_();
},
loadPopups:function(e, t, i) {
_i_("18c:460");
var n = this, r = $("#tutorial_dyk_" + t + "_s" + i).attr("rel");
if (r) {
var o = new n.relativePosition(r, !0, !1), a = $(e).attr("rev"), s = $(e).width(), _ = new n.getRelInlineCss(e);
if (_.rgValues && $(this).css({
top:"",
right:"",
bottom:"",
left:""
}), "undefined" != a) if ("right" == a) var c = {
top:o.relDivTop + _.rgTop + "px",
left:o.relDivSide + _.rgLeft + "px"
}; else if ("left" == a) var c = {
top:o.relDivTop + _.rgTop + "px",
left:o.relDivSide - s + _.rgLeft + "px"
};
o.scrollToDiv && 1 == i ? $("html, body").delay(500).animate({
scrollTop:o.relDivTop - 50
}, 1e3, function() {
_i_("18c:1963"), $(e).css(c).fadeIn(300), _r_();
}) :$(e).delay(300).css(c).fadeIn(500);
} else $(e).delay(300).fadeIn(500);
_r_();
},
relativePosition:function(e) {
_i_("18c:461");
var t = $("#" + e).offset() || {};
this.relDivTop = t.top;
var i = t.left, n = $("#bodyconstraint-inner").offset().left;
this.relDivSide = i - n, this.relDivTop > 200 ? this.scrollToDiv = !0 :this.scrollToDiv = !1, _r_();
},
getRelInlineCss:function(e) {
_i_("18c:462"), this.rgTop = parseInt($(e).css("top").replace("px", "")) || 0, this.rgLeft = parseInt($(e).css("left").replace("px", "")) || 0, 0 == this.rgLeft && this.rgTop ? this.rgValues = !1 :this.rgValues = !0, _r_();
},
nextPopup:function(e, t, i) {
_i_("18c:463");
var n = $(e).attr("id").split("nextstep_")[1], r = parseInt(n) + 1, o = "#" + t + "_s" + n;
$(o).fadeOut(300), this.loadPopups("#tutorial_dyk_" + i + "_s" + r, i, r), _r_();
},
closeTutorial:function(e) {
return _i_("18c:464"), $(e).closest(".tutorial_dyk").fadeOut(300), window.b_cookie = window.b_cookie || {}, window.b_cookie.showthistutorial = booking.env.tutorialpopup, "undefined" != typeof JSON && $.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_(!1);
}
}, booking[sNSStartup].ow_page = {
init:function() {
_i_("18c:465"), $(".country_flag a").click(function(e) {
_i_("18c:1266"), B.et.customGoal("edJHFcdLMFAcUYcfJFO", 3);
var t = $(this).parents("div.country_block");
$("div.aaa:eq(0)", t).is(":visible") ? $("div.aaa", t).hide() :$("div.aaa", t).show(), e.preventDefault(), _r_();
}), $(".gcityname a").click(function(e) {
_i_("18c:1267"), B.et.customGoal("edJHFcdLMFAcUYcfJFO", 3);
var t = $(this).parents("div.office");
$("div.bbb:eq(0)", t).is(":visible") ? $("div.bbb", t).hide() :$("div.bbb", t).show(), e.preventDefault(), _r_();
}), _r_();
}
}, booking[sNSStartup].accounts_for_everybody = {
priority:9,
passwordFields:0,
passwordChar:"",
maskPass:"",
isAdding:!1,
keyCounter:0,
init:function() {
_i_("18c:466");
var e = this;
$(".passwd_strength").each(function() {
_i_("18c:1268");
var e = '<div class="pwd_strength"><div class="strength"></div></div><span class="jq_tooltip strength_text" title="' + booking.env.b_passwd_tooltip + '" rel="300">&nbsp;</span>';
$(this).after(e);
var t = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px");
var i = this;
$(".pwd_strength", this.parentNode).click(function() {
_i_("18c:1964"), $(i).focus(), _r_();
}), $(".pwd_strength", this.parentNode).mouseenter(function() {
_i_("18c:1965"), $(i).addClass("hoverText"), _r_();
}), $(".pwd_strength", this.parentNode).mouseleave(function() {
_i_("18c:1966"), $(i).removeClass("hoverText"), _r_();
}), _r_();
}), $(".passwd_strength").focus(function() {
_i_("18c:1269");
var e = parseInt($(this).css("margin-left").replace("px", "")), t = "safari" == booking.env.b_browser ? 2 :e + 2;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px"), _r_();
}), $(".passwd_strength").blur(function() {
_i_("18c:1270");
var e = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", e + "px"), _r_();
}), $(".passwd_strength").keyup(function() {
_i_("18c:1271"), e.keyCounter++;
var t = this, i = e.keyCounter;
setTimeout(function() {
_i_("18c:1967"), e.calculateStrength(t, i), _r_();
}, 400), _r_();
}), $("td.pass_fix").length && ($("#new_pass").blur(function() {
_i_("18c:1708");
var e = $(this).parents("tr").get(0);
"" != $(this).val() ? ($("th span", e).removeClass("val-no"), $("th span", e).addClass("val-yes")) :($("th span", e).removeClass("val-yes"), $("th span", e).addClass("val-no")), _r_();
}), $("#confirm_new_pass").blur(function() {
_i_("18c:1709");
var e = $("#new_pass").val(), t = $(this).parents("tr").get(0);
"" != $(this).val() && $(this).val() == e ? ($("th span", t).removeClass("val-no"), $("th span", t).addClass("val-yes")) :($("th span", t).removeClass("val-yes"), $("th span", t).addClass("val-no")), _r_();
})), _r_();
},
calculateStrength:function(e, t) {
if (_i_("18c:467"), this.keyCounter == t) {
var i = $(e).val(), n = $(".pwd_strength .strength", e.parentNode);
if (n.length) {
var r, o, a = 0, s = 0, _ = 0, c = 0, l = 0, u = i.length;
if (u > 0) {
a = parseInt(u / 2.5);
for (var d = 0; u > d; d++) {
var h = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_±¤", p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
isNaN(i.charAt(d)) || (s += 1), isNaN(i.charAt(d)) && (_ = 1), h.indexOf(i.charAt(d)) > -1 && (c += 2), p.indexOf(i.charAt(d)) > -1 && (l += 1);
}
c > 4 && (c = 4), s > 2 && (s = 2), l > 2 && (l = 2), 0 != _ && (a += s), a += c, a += l, a > 10 && (a = 10);
}
r = 26, ($(e).parents("#foldout_signup").length || $(e).parents("#registration_id").length) && (r = 18), o = r * a;
var f = parseInt(a / 2 + 1);
8 > u ? (n.addClass("strength_invalid"), 0 === o ? o = r :o > 3 && (o = 3 * r), f = 0) :n.removeClass("strength_invalid"), n.animate({
width:o + "px"
}), "" != i ? $(".strength_text", e.parentNode).text(booking.env.b_password_strength_msg[f]) :$(".strength_text", e.parentNode).text("");
}
}
_r_();
},
togglePasswd:function(e) {
_i_("18c:468");
var t = $(e).parents("form").get(0);
$(".textual_passwd", t).toggle();
var i = $(".textual_passwd", t).get(0), n = $(i).css("display"), r = $(i).attr("name");
r = r.split("textpwd_")[1];
var o = $("input[name='" + r + "']", t).get(0);
"none" != n ? (this.fixCursorPosition(null, i), $("td.pass_fix").length || $(o).addClass("focusText")) :($(o).removeClass("focusText"), this.fixCursorPosition(null, o)), this.syncPassFields($(i).get(0), !0), _r_();
},
fixCursorPosition:function(e, t) {
if (_i_("18c:469"), null != e) var i = document.getElementById(e); else var i = t;
i.focus();
var n = $(i).val().length;
if (n > 0) if ("selectionStart" in i) i.selectionStart = n, i.focus(); else {
var r = document.selection.createRange();
r.moveStart("character", n), r.moveEnd("character", 0), r.select();
}
_r_();
},
syncPassFieldsMask:function(e) {
_i_("18c:470");
var t = this, i = "textpwd_" + $(e).attr("name"), n = $("input." + i, e.parentNode).get(0), r = $(e).val(), o = "";
t.maskPass = "";
for (var a = 0; a < r.length; a++) a >= r.length - 1 ? (o += r[a], t.maskPass += this.passwordChar) :(o += this.passwordChar, t.maskPass += this.passwordChar);
$(n).val(o), setTimeout(function() {
_i_("18c:1272"), t.syncPassFieldsFullMask(n), _r_();
}, 1e3), _r_();
},
syncPassFieldsFullMask:function(e) {
_i_("18c:471"), $(e).val(this.maskPass), _r_();
},
syncPassFields:function(e, t) {
_i_("18c:472");
var i = !1, n = null, r = this;
if (t) {
var o = $(e).attr("name");
o = o.split("textpwd_")[1];
var a = $("input[name='" + o + "']", e.parentNode.parentNode).get(0), s = $(a).attr("id");
if (s.indexOf("confirm_") > -1) {
var _ = "#" + s.replace("confirm_", "");
$(_).length || (_ = "#" + s.replace("_confirm", "")), i = !0;
} else var _ = "#confirm_" + s;
if ($(_).length) {
n = $(_).get(0), $(n).val($(e).val());
var c = $(n).attr("name");
c = "textpwd_" + c;
var l = $("input." + c, n.parentNode.parentNode).get(0);
$(l).val($(e).val());
}
} else var o = "textpwd_" + $(e).attr("name"), a = $("input." + o, e.parentNode).get(0);
if ($(a).val($(e).val()), t) {
if (i) {
if ($(n).hasClass("passwd_strength")) {
this.keyCounter++;
var u = this.keyCounter;
setTimeout(function() {
_i_("18c:2152"), r.calculateStrength(n, u), _r_();
}, 400);
}
} else if ($(a).hasClass("passwd_strength")) {
this.keyCounter++;
var u = this.keyCounter;
setTimeout(function() {
_i_("18c:2153"), r.calculateStrength(n, u), _r_();
}, 400);
}
} else if ($(e).hasClass("passwd_strength")) {
this.keyCounter++;
var u = this.keyCounter;
setTimeout(function() {
_i_("18c:1968"), r.calculateStrength(n, u), _r_();
}, 400);
}
_r_();
}
}, booking[sNSStartup].pb_mybooking_bn_pin_login_resend_conf = function(e, t, i) {
_i_("18c:261");
var n = !1, r = 240, o = 0, a = 28, s = "g-hidden";
function _() {
_i_("18c:550"), t("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat", "click", l), t("body").delegate(".js-btn--close", "click", u), t("body").delegate(".resend-conf-form", "submit", d), t("body").delegate(".resend-conf-form__send", "click", d), _r_();
}
function c() {
_i_("18c:551"), n || (n = !0, r = t(".popover_content--has-footer").outerHeight(), t(".popover_content--has-footer").css("min-height", r), t(".resend-conf").addClass("resend-conf--absolute")), _r_();
}
function l(e) {
_i_("18c:552");
var i = t(e.target).closest(".resend-conf");
return i.closest(".popover_content--has-footer").length && c(), o = o || i.find(".resend-conf__step--invite").outerHeight(), r = booking.env.b_is_tdot_traffic ? r + 100 :r, i.addClass("resend-conf--active"), i.animate({
height:r - a
}, 250), i.find(".resend-conf__step").addClass(s), i.find(".resend-conf__step--form").removeClass(s), _r_(!1);
}
function u(e) {
_i_("18c:553");
var i = t(e.target).closest(".resend-conf");
return i.removeClass("resend-conf--active"), i.find(".resend-conf__step").addClass(s), i.find(".resend-conf__step--invite").removeClass(s), i.animate({
height:o
}, 250), _r_(!1);
}
function d(e) {
_i_("18c:554");
var i = t(e.target), n = i.closest(".resend-conf"), r = i.is("form") ? i :i.closest(".resend-conf-form"), o = n.find(".resend-conf-form__send");
if (e.preventDefault(), o.is(".disabled")) return _r_(!1);
if ("" == r.find("input[name=email]").val() || !r.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return r.find("input[name=email]").addClass("invalid-input"), r.find(".resend-conf-form__error").removeClass(s), _r_(!1);
r.find("input[name=email]").removeClass("invalid-input"), r.find(".resend-conf-form__error").addClass(s), o.addClass("disabled"), t.ajax({
url:r.attr("action") + "?" + r.serialize(),
dataType:"jsonp",
jsonpCallback:"booking_cb_" + Date.now(),
success:function() {
_i_("18c:1797"), p(n), h(n), _r_();
},
error:function() {
_i_("18c:1798"), f(n), _r_();
}
}), _r_();
}
function h(e) {
_i_("18c:555");
var t = e.find(".resend-conf-form");
t.length && t[0].reset(), e.find(".resend-conf-form input[name=email]").removeClass("invalid-input"), e.find(".resend-conf-form .resend-conf-form__error").addClass(s), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
function p(e) {
_i_("18c:556"), e.find(".resend-conf__step").addClass(s), e.find(".resend-conf__step--success").removeClass(s), e.find(".resend-conf__success__email").text(e.find(".resend-conf-form input[name=email]").val()), _r_();
}
function f(e) {
_i_("18c:557"), e.find(".resend-conf__step").addClass(s), e.find(".resend-conf__step--error").removeClass(s), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
return _r_({
init:_
});
}(booking, jQuery, jQuery(window)), function(e, t) {
_i_("18c:184");
var i = B.require("jquery"), n = function(e) {
_i_("18c:821");
var i, n, r, o = "msie" === B.env.b_browser;
for (i = 0, n = e.length; n > i; i += 1) {
if (o) {
new Image().src = e[i];
continue;
}
r = t.createElement("object"), r.data = e[i], o ? (r.width = 1, r.height = 1, r.style.visibility = "hidden", r.type = "text/plain") :(r.width = 0, r.height = 0), t.body.appendChild(r);
}
_r_();
};
i(e).on("load", function() {
_i_("18c:822");
var e = i(t.body), r = "mousemove keyup scroll mousedown", o = i("[data-preload-assets]"), a = i.cookie("has_preloaded"), s = 0, _ = function() {
_i_("18c:1710"), e.unbind(r, l), clearTimeout(s), n(o.data("preload-assets")), i.cookie && i.cookie("has_preloaded", 1, {
expires:1,
path:"/"
}), _r_();
}, c = function() {
_i_("18c:1711"), s = setTimeout(_, 1e4), _r_();
}, l = function() {
_i_("18c:1712"), clearTimeout(s), c(), _r_();
};
if (a) return _r_();
o.length && setTimeout(function() {
_i_("18c:1969"), c(), e.bind(r, l), _r_();
}, 1e4), _r_();
}), _r_();
}(window, window.document), function() {
_i_("18c:185");
var e = B.require("jquery");
booking[sNSStartup].rate_guarantee = {
priority:9,
init:function() {
_i_("18c:1273");
var t = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip " ].join(","), i = [ "status=1", "toolbar=0", "menubar=0", "width=450", "height=550", "scrollbars=1" ].join(","), n = function() {
return _i_("18c:1970"), window.open(this.href, "RateGuarantee", i), _r_(!1);
};
return e(document).on("click", t, n), _r_(!0);
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].search_engine_partitioned_disambiguation_page = {
priority:9,
init:function() {
_i_("18c:473"), $(".disambBlockHeader").click(function() {
_i_("18c:1274");
var e = $(this), t = $("#" + e.attr("data-results"));
return t.hasClass("disambBlockShown") ? t.slideUp().removeClass("disambBlockShown") :t.slideDown().addClass("disambBlockShown"), _r_(!1);
}), _r_();
}
}, B[sNSStartup].searchbox_dates_widget = function(e, t) {
_i_("18c:262");
var i;
function n(t) {
_i_("18c:558");
var i = e.require("search/searchbox/analytics");
i.send(t), _r_();
}
function r(i) {
_i_("18c:559"), e.Search.validators.create({
type:"dates",
name:"dates_are_not_empty",
test:function() {
_i_("18c:1799");
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("regular" !== e.search.dates().mode) return _r_(!1);
return _r_("valid" !== t.type && "valid" !== i.type);
},
fail:function() {
return _i_("18c:1800"), n("[error] dates: dates_are_not_empty"), _r_(e.jstmpl.translations("searchbox_error_msg_need_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_date_is_selected",
test:function() {
if (_i_("18c:1801"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== t.type);
},
fail:function() {
return _i_("18c:1802"), n("[error] dates: checkin_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_in_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkout_date_is_selected",
test:function() {
if (_i_("18c:1803"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== i.type);
},
fail:function() {
return _i_("18c:1804"), n("[error] dates: checkout_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_out_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"duration_is_less_than_30_days",
test:function() {
if (_i_("18c:1805"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(Math.abs(i - t) > 30);
},
fail:function() {
return _i_("18c:1806"), n("[error] dates: duration_is_less_than_30_days"), _r_(e.jstmpl.translations("sbox_error_30_night_res"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_is_earlier_than_checkout",
test:function() {
if (_i_("18c:1807"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t > i);
},
fail:function() {
return _i_("18c:1808"), n("[error] dates: checkin_is_earlier_than_checkout"), _r_(e.jstmpl.translations("sbox_error_checkout_after"));
}
}), e.Search.validators.create({
type:"dates",
name:"dates_are_not_in_past",
test:function() {
if (_i_("18c:1809"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
var n = e.calendar2.minToday();
return _r_(n > t.dateObject_ || n > i.dateObject_);
},
fail:function() {
return _i_("18c:1810"), n("[error] dates: dates_are_not_in_past"), _r_(e.jstmpl.translations("sbox_error_checkin_future"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_checkout_not_on_same_day",
test:function() {
if (_i_("18c:1811"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t.valueOf() == i.valueOf());
},
fail:function() {
return _i_("18c:1812"), n("[error] dates: checkin_checkout_not_on_same_day"), _r_(e.jstmpl.translations("search_box_cal_error_dates_same"));
}
}), e.eventEmitter.bind(e.Search.Events.DATE_INVALID, function(e, i) {
_i_("18c:1524");
var n, r = t(".js--sb-searchbox__dates-error"), o = i.validators;
if (!o) return _r_();
n = o.reduce(function(e, t) {
return _i_("18c:2154"), "fail" === t.status && t.message && e.push(t.message), _r_(e);
}, []), n.length > 0 && r.html(n.shift()).addClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_VALID, function() {
_i_("18c:1525");
var e = t(".js--sb-searchbox__dates-error");
e.html("").removeClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_MODE_CHANGED, function(t, i) {
_i_("18c:1526"), e.search.dates().validate("reset"), _r_();
}), t("#frm, .js--sb-searchbox").bind("submit", function(t) {
_i_("18c:1527");
var i, n = e.search.dates();
return n.mode !== e.Search.DateModes.NODATES && "valid" !== n.checkin.type && "valid" !== n.checkout.type && n.setMode(e.Search.DateModes.NODATES), i = n.validate(), _r_(i);
}), _r_();
}
function o(e, t) {
if (_i_("18c:560"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}
function a(n, r) {
_i_("18c:561");
var a, _, l = r.type, u = (e.Search.datePickerController.all(), e.search.dates(r.type)), d = 1;
e.et.track("OLTSXIYUGWcOCfNDJEfEdFVCET") && i && (d = i);
var h = function() {
_i_("18c:1528");
var e = t('[data-component="search/searchbox/searchbox"]').data("componentInstanceSearch/searchbox/searchbox");
if (e && e.model.destination && e.model.destination.get().acc_type_id) return _r_(e.model.destination.get().acc_type_id);
return _r_(null);
};
if (("resorts" === e.env.b_landingpage_theme || 206 == e.env.b_indirect_acc_type_id || 206 == h()) && (e.et.stage("YdVSfHRdZeEXfCYO", 1), e.et.track("YdVSfHRdZeEXfCYO") && (d = 4)), "checkin" !== l && "checkout" !== l) return _r_();
if ("valid" !== u.type && "month" !== u.type) return _r_();
if (a = e.search.dates("checkin"), _ = e.search.dates("checkout"), "checkin" === l && ("invalid" === _.type || a >= _) && (a >= _ && e.et.stage("OLTSXIYUGWcOCfNDJEfEdFVCET", 1), _ = e.search.dates("checkout", o(a, d))), "checkout" === l && ("valid" !== a.type && (a = e.search.dates("checkin", o(e.search.dates("checkout"), -d))), a >= _ && (e.et.stage("OLTSXIYUGWcOCfNDJEfEdFVCET", 1), a = e.search.dates("checkin", o(e.search.dates("checkout"), -d)))), s(), e.et.track("OLTSXIYUGWcOCfNDJEfEdFVCET") && (i = c()), e.search.dates("mode", e.Search.DateModes.REGULAR), "hotel" == booking.env.b_action) return _r_();
try {
"checkin" === l && "valid" === a.type && e[sNSStartup].calendar.syncDates(!1, a.date, a.month + 1, a.year, !1), "checkout" === l && "valid" === _.type && e[sNSStartup].calendar.syncDates(!0, _.date, _.month + 1, _.year, !1);
} catch (p) {
window.onerror("old_calendar_api_method_does_not_exist");
}
_r_();
}
function s() {
_i_("18c:562");
var i = c();
t(".js--sb-dates__los").html(e.jstmpl("search_dates_length_of_stay").render({
b_checkin_checkout_interval:i,
fe_sb_state_length_of_stay:i,
b_lang:e.env.b_lang
})), _r_();
}
function _(t) {
_i_("18c:563"), t.find(".b-date-selector, .js--sb-dates__check-in, .js--sb-dates__check-out").dateSelector(), e.eventEmitter.bind(e.Search.Events.DATE_CHANGED, a), e.eventEmitter.bind(e.Search.Events.DATE_MONTH_CHANGED, a), _r_();
}
function c() {
_i_("18c:564");
var t, i, n, r = 0;
return t = e.search.dates(), i = t && t.checkin, n = t && t.checkout, n && i && n.valueOf() > i.valueOf() && (r = n.valueOf() - i.valueOf()), _r_(r);
}
function l() {
if (_i_("18c:565"), e.env.b_is_villa_site) return _r_();
var i = t(".b-form__dates, .js--sb-dates");
_(i), r(i), "company" == booking.env.b_action && i.find(".b-form-flexible-dates__toggler input:checked").length && booking.search.dates().setMode("no-dates"), _r_();
}
return _r_({
init:l
});
}(B, $), B.Search.tracker = {
track:function(e, t, i) {
_i_("18c:474");
var n = [ "Searchbox", B.env.b_action, "[" + e + "] " + t, i ];
B.google.trackEvent.apply(B.google, n), _r_();
},
trackError:function(e) {},
trackEvent:function(e) {
return _i_("18c:476"), _r_(this.track("interaction", e));
}
}, B[sNSStartup].sb_group_widget = function() {
_i_("18c:263");
var e = B.require("jquery");
B.Search = B.Search || {}, B.Search.SPECIAL_DIGITS = {
"０":0,
"１":1,
"２":2,
"３":3,
"４":4,
"５":5,
"６":6,
"７":7,
"８":8,
"９":9,
"٠":0,
"١":1,
"٢":2,
"٣":3,
"٤":4,
"٥":5,
"٦":6,
"٧":7,
"٨":8,
"٩":9,
"۰":0,
"۱":1,
"۲":2,
"۳":3,
"۴":4,
"۵":5,
"۶":6,
"۷":7,
"۸":8,
"۹":9
}, B.Search.AbstractGroupConfigurationWidget = function(e, t) {}, B.Search.AbstractGroupConfigurationWidget.prototype.initialize = function(e, t) {
_i_("18c:899"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.setOptions = function(t) {
_i_("18c:900"), this.options || (this.options = {}), this.options = e.extend(this.options, t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.initEvents = function() {
throw _i_("18c:901"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("18c:902"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages = function(t) {
_i_("18c:903"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages");
for (var i = e("<ul></ul>", {
"class":"b-form-group__error-messages_list"
}), n = e("<li></li>", {
"class":"b-form-group__error-messages_list-item"
}), r = 0; r < t.length; r++) i.append(n.clone().html(t[r]));
this.$errorContainer.empty().append(i), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages = function() {
_i_("18c:904"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages"), this.$errorContainer.empty(), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.getConfig = function() {
throw _i_("18c:905"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.trigger = function(e, t) {
_i_("18c:906"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), "groupModeChanged" === e && "function" == typeof this.onExternalEventModeChanged && this.onExternalEventModeChanged.apply(this, [].slice.call(arguments, 1)), "groupInvalid" === e && "function" == typeof this.onExternalEventGroupInvalid && this.onExternalEventGroupInvalid.apply(this, [].slice.call(arguments, 1)), "groupValid" === e && "function" == typeof this.onExternalEventGroupValid && this.onExternalEventGroupValid.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onInit = function() {
_i_("18c:907");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("18c:2062"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onChange = function() {
_i_("18c:908"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractGroupConfigurationWidget.prototype.hide = function() {
_i_("18c:909"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.show = function() {
_i_("18c:910"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.PredefinedGroupSelector = function(e, t) {
_i_("18c:911"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.PredefinedGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.PredefinedGroupSelector.prototype.initialize = function(t, i) {
_i_("18c:912");
var n, r, o = {};
this.$element = t, this.$selector = t.find("select"), this.setOptions(i), this.$selector.find("option").each(function(t, i) {
_i_("18c:1813");
var a = e(i), s = B.Search.createGroup(a.data());
o[s] = i, "more_options" === s.type && (n = i), a.is(":selected") && (r = s), _r_();
}), this.defaultConfigurationOption = n, this.groupConfigurationOptions = o, this.selectedConfiguration = r, _r_();
}, B.Search.PredefinedGroupSelector.prototype.initEvents = function() {
_i_("18c:913"), this.$selector.bind("change", e.proxy(this.onChange, this)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onChange = function(e) {
_i_("18c:914");
var t = this.getConfig();
this.selectedConfiguration.valueOf() !== t.valueOf() && (this.selectConfiguration(t), "function" == typeof this.options.onChange && this.options.onChange.call(this, t)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.selectConfiguration = function(e) {
_i_("18c:915"), this.groupConfigurationOptions[e] ? (this.groupConfigurationOptions[e].setAttribute("selected", "selected"), this.selectedConfiguration = e) :(this.selectedConfiguration = !1, this.defaultConfigurationOption.setAttribute("selected", "selected")), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
if (_i_("18c:916"), this.selectedConfiguration.valueOf() === e.valueOf()) return _r_();
this.selectConfiguration(e), _r_();
}, B.Search.PredefinedGroupSelector.prototype.getConfig = function() {
_i_("18c:917");
var t = this.$selector.get(0), i = e(t.options[t.selectedIndex]), n = this.parseOption(i);
return _r_(n);
}, B.Search.PredefinedGroupSelector.prototype.parseOption = function(e) {
_i_("18c:918");
var t = e.data(), i = B.Search.createGroup(t);
return _r_(i);
}, B.Search.CustomGroupSelector = function(t, i) {
_i_("18c:919"), this.$element = t, this.setOptions(i), this.$adultsSelector = t.find("select[name=group_adults]"), this.$roomsSelector = t.find("select[name=no_rooms]"), this.$childrenSelector = t.find("select[name=group_children]"), this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]", "change", e.proxy(this.onChange, this)), this.onInit(), _r_();
}, B.Search.CustomGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.CustomGroupSelector.prototype.DISABLED_CLASS = "b-form-custom-group_disabled", B.Search.CustomGroupSelector.prototype.getConfig = function() {
_i_("18c:920");
var e = this.$adultsSelector.val(), t = this.$roomsSelector.val(), i = this.$childrenSelector.val(), n = {};
return e && !isNaN(parseInt(e, 10)) && (n.adults = parseInt(e, 10)), t && !isNaN(parseInt(t, 10)) && (n.rooms = parseInt(t, 10)), i && !isNaN(parseInt(i, 10)) && (n.children = parseInt(i, 10)), _r_(n);
}, B.Search.CustomGroupSelector.prototype.onChange = function(e) {
_i_("18c:921");
var t = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, t), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventModeChanged = function(e) {
_i_("18c:922"), "basic" === e.mode ? this.hide() :this.show(), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("18c:923");
var t;
e.adults !== t && this.$adultsSelector.val(e.adults), e.rooms !== t && this.$roomsSelector.val(e.rooms), e.children !== t && this.$childrenSelector.val(e.children), "basic" === e.type ? this.hide() :this.show(), _r_();
}, B.Search.ChildrenAgesSelector = function(e, t) {
_i_("18c:924"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.ChildrenAgesSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.ChildrenAgesSelector.prototype.show = function() {
_i_("18c:925"), B.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initialize = function(e, t) {
_i_("18c:926"), this.$element = e, this.$inputsContainer = this.$element.find(".b-custom-element__container"), this.ages = this.getAges(), this.setOptions(t), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initEvents = function() {
_i_("18c:927"), this.$element.delegate("select[name=age]", "change", e.proxy(this.onChange, this)), this.$inputsContainer.find(".b-custom-element__label").bind("click", e.proxy(this.onLabelClick, this)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.sanitizeInput = function() {
_i_("18c:928"), this.getInputs().each(function(e, t) {
_i_("18c:1814");
var i = t.value;
i = i.replace(/\D/g, function(e) {
return _i_("18c:2251"), _r_(B.Search.SPECIAL_DIGITS.hasOwnProperty(e) ? B.Search.SPECIAL_DIGITS[e] :e);
}), t.value = i, _r_();
}), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onChange = function() {
_i_("18c:929"), this.sanitizeInput();
var e = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, e), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onLabelClick = function(e) {
_i_("18c:930"), e.preventDefault();
var t = this.getInputs(), i = t.filter(function() {
return _i_("18c:2155"), _r_("" == this.value);
}).first();
i.length ? i.focus() :t.first().focus(), _r_();
}, B.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS = "b-form-children-ages_disabled", B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid = function(e) {
_i_("18c:931"), this.showErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid = function(e) {
_i_("18c:932"), this.hideErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("18c:933");
for (var t, i = this.getAges(), n = e.childrenAges, r = 0; r < n.length; r++) n[r] === t && (n[r] = i[r]);
0 === n.length ? this.hide() :((n.length !== i.length || n.join(",") !== this.serialize()) && this.render(n), this.show()), _r_();
}, B.Search.ChildrenAgesSelector.prototype.getInputs = function() {
return _i_("18c:934"), _r_(this.$inputsContainer.find(".b-children-ages-configurator__element"));
}, B.Search.ChildrenAgesSelector.prototype.getConfig = function() {
return _i_("18c:935"), _r_({
childrenAges:this.getAges()
});
}, B.Search.ChildrenAgesSelector.prototype.getAges = function() {
_i_("18c:936");
var t = this.getInputs(), i = [];
return t.each(function(t, n) {
_i_("18c:1815"), e(n).find(":selected").hasClass("sb_child_ages_empty_zero") ? i.push(void 0) :i.push(n.value), _r_();
}), this.ages = i, _r_(i);
}, B.Search.ChildrenAgesSelector.prototype.serialize = function() {
return _i_("18c:937"), _r_(this.ages.join(","));
}, B.Search.ChildrenAgesSelector.prototype.renderLabel = function(t) {
_i_("18c:938");
var i = null, n = null, r = null, o = null, a = null, s = B.require("formatting/date"), _ = B.search.dates("checkout"), c = this.$element.find(".b-custom-element__label");
"valid" === _.type ? (i = {
day:_.date,
month:_.month,
year:_.year
}, r = B.jstmpl.translations("bh_gsb_search_box_checkout_age", null, {
date:s.format(i, "short_date")
}), n = B.jstmpl.translations("bh_gsb_search_box_checkout_age_plural", null, {
date:s.format(i, "short_date")
}), c.text(1 == t ? r :n), "city" === B.env.b_action && (o = e(".lp_bold_date_picker_lightbox_clear.plural"), a = e(".lp_bold_date_picker_lightbox_clear.singular"), o.text(n), a.text(r))) :(n = B.jstmpl.translations("loc_sbox_children_age_plural"), r = B.jstmpl.translations("loc_sbox_children_age_singular"), c.text(1 == t ? r :n)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.render = function(e) {
_i_("18c:939");
var t, i = e.length, n = "";
this.$inputsContainer.find(".b-children-ages-configurator__element").remove(), this.renderLabel(i);
for (var r = 0; i > r; r++) t = e[r] >= 0 ? e[r] :"", n += this.renderSelector(t);
this.$inputsContainer.append(n), _r_();
}, B.Search.ChildrenAgesSelector.prototype.renderSelector = function(e, t, i) {
_i_("18c:940");
var n = "b-children-ages-configurator__element b-children-ages-configurator__element_selector js-multi-room-ages", r = '<select name="age" class="' + n + '">';
if (e) var e = parseInt(e, 10) || 0; else r += "index" === B.env.b_action || "hotel" === B.env.b_action || "searchresults" === B.env.b_action ? '<option class="sb_child_ages_empty_zero" value="12 " selected="selected"></option>' :'<option class="sb_child_ages_empty_zero" value="0 " selected="selected"></option>';
for (var o = 0; 17 >= o; o++) r += "<option " + (0 === o ? 'class="sb_child_ages_not_empty_zero"' :"") + ' value="' + o + '" ' + (o === e ? "selected" :"") + ">" + o + "</option>";
return r += "</select>", _r_(r);
}, B.Search.createWidgetPlugin("predefinedGroupSelector", B.Search.PredefinedGroupSelector), B.Search.createWidgetPlugin("customGroupSelector", B.Search.CustomGroupSelector), B.Search.createWidgetPlugin("childrenAgesSelector", B.Search.ChildrenAgesSelector);
function t() {
_i_("18c:566"), e(".b-form-predefined-group").predefinedGroupSelector({
onChange:function(e) {
_i_("18c:1816"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), "more_options" !== e.type && B.search.group(e), "more_options" === e.type ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED) :"basic" === e.type && 2 === e.adults && 1 === e.rooms && 0 === e.children ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED) :"basic" === e.type && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED), _r_();
},
onInit:function(e) {
_i_("18c:1817"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), _r_();
}
}), e(".b-form-custom-group").customGroupSelector({
onChange:function(e) {
_i_("18c:1818");
var t = B.search.group().value;
t.adults !== e.adults && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED), t.rooms !== e.rooms && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED), t.children !== e.children && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED), B.search.group(e), _r_();
},
onInit:function(e) {
_i_("18c:1819"), "basic" !== B.search.group().mode() && this.show(), _r_();
}
}), e(".b-form-children-ages").childrenAgesSelector({
onChange:function(e) {
_i_("18c:1820"), B.search.group("childrenAges", e.childrenAges), B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED), _r_();
},
onInit:function(e) {
_i_("18c:1821"), e.childrenAges.length > 0 ? this.show() :this.hide(), B.eventEmitter.bind(B.Search.Events.DATE_CHANGED, function(e, t) {
_i_("18c:2284"), "checkout" === t.type && this.renderLabel(this.getConfig().childrenAges.length), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_INVALID, function(e, t) {
_i_("18c:2285"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_MONTH_CHANGED, function(e, t) {
_i_("18c:2286"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), _r_();
}
}), B.eventEmitter.bind(B.Search.Events.GROUP_MODE_CHANGED, function(t, i) {
_i_("18c:1529"), e.fn.predefinedGroupSelector("notify", "groupModeChanged", i), e.fn.customGroupSelector("notify", "groupModeChanged", i), e.fn.childrenAgesSelector("notify", "groupModeChanged", i), B.search.group().validate("reset"), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_CHANGED, function(t, i) {
_i_("18c:1530"), e.fn.predefinedGroupSelector("notify", "groupChanged", i), e.fn.customGroupSelector("notify", "groupChanged", i), e.fn.childrenAgesSelector("notify", "groupChanged", i), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_INVALID, function(t, i) {
_i_("18c:1531");
for (var n = i.validators, r = [], o = [], a = 0; a < n.length; a++) n[a].validationParameters.invalidAges && r.push(n[a].validationParameters.invalidAges), n[a].message && o.push(n[a].message);
e.fn.childrenAgesSelector("notify", "groupInvalid", {
messages:o,
agesStatus:r
}), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_VALID, function(t, i) {
_i_("18c:1532"), e.fn.childrenAgesSelector("notify", "groupValid", {
message:"message",
agesStatus:[]
}), _r_();
}), e("#frm").bind("submit", function(e) {
return _i_("18c:1533"), _r_(B.search.group().validate());
}), e("#frm").find(".group-groupsearch").length && B.et.track("bHARWSEFQBINFeCTRe") && e("#frm").bind("submit", function(t) {
if (_i_("18c:1822"), !B.search.dates().validate()) return _r_(!1);
var i = e(this), n = [ "[name=group_adults]", "[name=group_children]", "[name=age]" ], r = i.find("[name=room1]");
i.find(n.join(",")).prop("disabled", !0), r.val(r.val().replace(" ", "")), _r_();
}), _r_();
}
return _r_({
init:t
});
}(), $(".city_reviews-wrp").length > 0 && (booking[sNSStartup].seo_city_reviews_refined = {
init:function() {
_i_("18c:823"), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseenter", function() {
_i_("18c:1713");
var e = $(this);
e.removeClass("hei-60 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseleave", function() {
_i_("18c:1714");
var e = $(this);
e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-60 col-grey73"), _r_();
}), _r_();
}
}), booking.ensureNamespaceExists(sNSExperiments), booking[sNSStartup].b_site_experiment_expand_signup = {
priority:9,
init:function() {
_i_("18c:477");
var e = B.require("jquery"), t = e("#newsletter_to", ".footerForm"), i = t.attr("value");
if (t.click(function() {
_i_("18c:1275");
var t = e(this);
e("dl #newsletter_to").removeClass("error"), t.val() === i ? t.val("") :t.select(), _r_();
}), t.blur(function() {
_i_("18c:1276");
var t = e(this);
"" === t.val() && t.val(i), _r_();
}), e("#newsletter_button_footer").click(function() {
_i_("18c:1277"), e(this).parents("form:first").submit(), _r_();
}), e(".signupForm").submit(function(t) {
_i_("18c:1278"), t.preventDefault(), e(".newsletter_ajax_error").hide();
var i, n = booking.env, r = e(this), o = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, a = e("input[name=url]", r).val(), s = e("input[name=hostname]", r).val(), _ = e("input[name=aid]", r).val(), c = e("input[name=companyname]", r).val(), l = e("input[name=subscribe_source]", r).val(), u = e("input[name=subscribe_notification]", r).val(), d = e("input[name=dest_id]", r).val(), h = e("input[name=dest_type]", r).val(), p = e("input[name=to]", r).val(), f = e("input[name=get_the_app]", r).is(":checked");
if ("" === p || !o.test(p)) return e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_invalid", r).show(), _r_(!1);
p = encodeURIComponent(p), i = "to=" + p + "&url=" + a + "&hostname=" + s + "&aid=" + _ + "&companyname=" + c + "&subscribe_source=" + l, "" !== u && (i = i + "&subscribe_notification=" + u), "" != d && (i = i + "&dest_id=" + d), "" != h && (i = i + "&dest_type=" + h), f === !0 && (i += "&get_the_app=1"), e(".newsletter_sub_preloader", r).show(), e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("18c:2156"), e(".newsletter_sub_preloader", r).hide(), 0 === t.success) return "denied" === t.error ? e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_denied", r).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide()) :"bad_params" === t.error && (e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_bad_unknown", r).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide())), _r_();
if (1 === t.success) if (B.et.stage("AdRdUNHDcOdFXSAVcUDJaT", 1), e("div#flashdealsbg_wrapper").length) window.location.href = n.b_nonsecure_hostname_signup + n.b_fd_searchresults_url_signup; else if (e("form").hasClass("unsubHero-action")) e("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide(), e(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show(), e(".unsubDesc strong").replaceWith("<strong>" + p + "</strong>"), e(".unsubHero-form").addClass("success"), e("body").hasClass("unsub_hero_thanks") || e("html, body").animate({
scrollTop:e(".unsubHero-form").offset().top
}, 750), e("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked", "checked"), e(".feedback.error", ".unsub_messages").hide(), e("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked"); else if (e(".newsletter_sub_info", r).hide(), e(".newsletter_sub_success", r).show(), e("#add_location_to").val(p), e(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid", r).hide(), t.has_account) {
var i = e("#userdataform form").eq(0);
i && i.attr("action", i.attr("data-url-login"));
}
_r_();
}
}), _r_();
}), "subscribe" == B.env.b_action && e("body").hasClass("unsub_hero_thanks") && e(document).ready(function() {
_i_("18c:1971"), e("#newsletter_button_footer").parents("form:first").submit(), _r_();
}), e(".signupWithnameForm").submit(function(t) {
_i_("18c:1279"), t.preventDefault(), e(".feedback_msg").each(function() {
_i_("18c:1972"), e(this).hide(), _r_();
});
var i, n = (booking.env, e(this)), r = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, o = e("input[name=companyname]", n).val(), a = e("input[name=aid]", n).val(), s = e("input[name=subscribe_source]", n).val(), _ = e("input[name=email]", n).val(), c = e("input[name=firstname]", n).val();
if ("" === _ || !r.test(_)) return e(".newsletter_subscribe_error_invalid", n).show(), _r_(!1);
e('<div class="loader_placer"></div>').appendTo("#sfl_stepOne"), i = "to=" + _ + "&email=" + _ + "&aid=" + a + "&companyname=" + o + "&subscribe_source=" + s, e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("18c:2157"), 0 == t.success) return e(".loader_placer").hide(), "denied" == t.error ? (e(".newsletter_subscribe_error_denied", n).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()) :("bad_params" == t.error || "unknown" == t.error) && (e(".newsletter_subscribe_error_bad_unknown", n).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()), _r_();
if (1 == t.success) if (e(".loader_placer").hide(), e(".uspfield").hide(), e("#sfl_stepOne").hide(), "" == c || booking.env.b_exclude_lang_firstname) e("#sfl_stepThree").show(), e(".userWithoutFirstname").show(); else if (c = escape(c), 1 == t.has_account) e(".firstnameplacer").html(c), e("#sfl_stepThree").show(), e(".userWithAccount").show(); else {
var i = booking.env.b_signup_iframe_url + "&firstname=" + c + "&email=" + escape(_);
i += "&aid=" + B.env.aid, i += "&label=" + B.env.b_label, e('<iframe border="0" id="sfl_stepTwo" src="' + i + '" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm");
}
_r_();
}
}), _r_();
}), e("#subscriber_account_active").submit(function(t) {
if (_i_("18c:1280"), e('input[name="mypassword"]').val().length < 1) return e(".newsletter_register_error_nopassword").show(), _r_(!1);
e('<input type="hidden" name="password" value="' + e('input[name="myssword"]').val() + '" />').appendTo("#subscriber_account_active"), _r_();
}), e(".modal-mask-closeBtn").click(function() {
return _i_("18c:1281"), _r_(!1);
}), e(".modal-mask").click(function() {
return _i_("18c:1282"), _r_(!1);
}), !e("#newsletter_form_footer_container").length) return _r_(!1);
e(".nl_inputfield_track, .newsletter_button").click(function() {
return _i_("18c:1715"), _r_(!1);
}), _r_();
}
}, booking.social_plugins_footer = function() {
_i_("18c:264");
var e = function() {
_i_("18c:941");
var e = $("#footer_weibo"), t = $("#footer_wechat"), i = $("#footer_naver");
i.hover(function() {
_i_("18c:1823"), i.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("18c:1824"), i.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), e.hover(function() {
_i_("18c:1825"), e.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("18c:1826"), e.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), t.hover(function() {
_i_("18c:1827"), t.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("18c:1828"), t.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].social_plugins_footer = {
priority:9,
init:function() {
_i_("18c:478"), booking.env.social_plugins_footer && booking.social_plugins_footer.init(), _r_();
}
}, booking[sNSStartup].store_cc_details = {
priority:9,
init:function() {
if (_i_("18c:479"), "book" === B.env.b_action) return _r_();
$("#saved_credit_cards .cc_save").attr("disabled", "disabled"), $("#saved_credit_cards .cc_save").addClass("cc_save_disabled"), $("#saved_credit_cards select").change(function() {
_i_("18c:1283");
var e = $(this).closest("form");
$(this).css({
"font-weight":"bold"
}), $(".cc_save", e).removeAttr("disabled"), $(".cc_save", e).removeClass("cc_save_disabled"), _r_();
}), $("#card_status").length && setTimeout(function() {
_i_("18c:1716"), $("#card_status").hide("slow"), _r_();
}, 5e3), "login" === B.env.b_action && $(".cc_delete").mousedown(function() {
_i_("18c:1717");
var e = $(this).closest("tr").get(0), t = $(this).val() || $(this).attr("value"), i = "/delete_cc_card?cc_id=" + t;
return $.ajax({
url:i,
type:"POST",
success:function(t) {
_i_("18c:2252"), $(e).hide(), _r_();
},
error:function(e) {
return _i_("18c:2253"), _r_(!1);
}
}), _r_(!1);
}), _r_();
}
}, booking.env.Tabs = function(e) {
_i_("18c:186");
var t = {
baseEl:"#newsletter_deals_city",
menuEl:".deals_menu",
contentEl:".deals_wrapper",
dealsEl:".deals",
navEl:".nav_menu",
defaultEl:1
}, e = $.extend(t, e);
$(e.menuEl + " li:nth-child(" + e.defaultEl + ")").addClass("active").show(), $(e.contentEl + " ul.deals:nth-child(" + e.defaultEl + ")").show(), $("li", e.menuEl).click(function() {
_i_("18c:824"), $("li", e.menuEl).removeClass("active"), $(this).addClass("active"), $(e.dealsEl, e.contentEl).hide();
var t = $(this).find("a").attr("href");
return $(t).show(), _r_(!1);
}), $(e.contentEl, e.baseEl).show(), _r_();
}, function(e, t, i, n) {
"use strict";
_i_("18c:187"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
if (_i_("18c:825"), !(e.env.b_is_ipad || !e.env.b_is_ipad && e.et.track("PYWIGJDFHQWXXdVLYGGIPKEePSbMC"))) return _r_();
var t, i, n, r, o, a = e.require("jquery"), s = !1;
function _(e) {
if (_i_("18c:1284"), t.isVisibleOverlay() && t.click == e) t.distroyOverlay(); else {
var i = r.data("spinner-loaded");
if (i || (r.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), o.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), r.data("spinner-loaded", !0)), t.createOverlay(), t.click = e, a(".milk_menu").hide(), a(".b_recentlyviewed").length && a(".b_recentlyviewed").removeClass("rv-content-visible"), a("#top_lw_wrapper").hide(), "lang" === e && !s) {
s = !0;
var n = r.clone();
n.find(".t_flag").each(function() {
_i_("18c:2254");
var e = a(this), t = e.data("img"), i = e.data("size");
e.append('<img src="' + t + '" width="' + i + '" height="' + i + '" />'), _r_();
}), r.html(n.html());
}
"lang" === e ? r.show() :"curr" === e && o.show();
}
_r_();
}
function c() {
_i_("18c:1285"), i.on("click", function() {
_i_("18c:1973"), _("lang"), _r_();
}), n.on("click", function() {
_i_("18c:1974"), _("curr"), _r_();
});
var e = function() {
_i_("18c:1975");
var e = a(this), i = e.parent();
if (i.hasClass("selected")) return t.distroyOverlay(), _r_(!1);
i.parent().parent().find("li.selected").removeClass("selected"), a(".mm_loading").removeClass("mm_loading"), i.addClass("mm_loading"), _r_();
};
r.on("click", "li a", e), o.on("click", "li a", e), _r_();
}
function l() {
_i_("18c:1286"), t = booking[sNSExperiments].ng_last_viewed || "", i = a("#b_nav_language"), n = a("#b_nav_currency"), r = a("#top_language"), o = a("#top_currency"), c(), _r_();
}
l(), _r_();
}), _r_();
}(window.booking, window, document), function() {
_i_("18c:188");
var e = B.require("jquery");
booking[sNSStartup].rewrite_tt = {
priority:7,
version:"1.2.5",
tt:null,
ttWinHeight:0,
ttWinWidth:0,
ttScrollTop:0,
ttScrollLeft:0,
ttShowLeft:!1,
ttShowTop:!1,
ttCounter:0,
ttShow:null,
ttContent:"",
ttCurElem:null,
ttCurText:"",
ttTimedOut:null,
ttTimeout:300,
ttClass:"basic_tooltip_class js-tooltip-wrap",
ttHidennodeAttr:"node_tt_id",
ttNodes:[ ".jq_tooltip", "*[data-title]", ".policy_name_tt" ],
toolTips:{},
preLoadedImages:{},
init:function() {
if (_i_("18c:1287"), booking.env.b_is_tdot_traffic && "book" === booking.env.b_action) return _r_(!0);
booking.env.rtl && (this.ttClass += " rtl_tooltip_class");
var t = this;
booking.env.b_is_ie7 && (this.ttTimeout = 0), this.tt = document.getElementById("tooltip_wrap") || function() {
_i_("18c:2158");
var e = document.createElement("div");
e.id = "tooltip_wrap";
var t = '<div class="tt_shadow"><div class="tt_content"></div></div>';
return document.body.appendChild(e), e.innerHTML = t, _r_(e);
}(), window.onresize = function() {
_i_("18c:1976"), t.setWindowSize(), _r_();
}, e(window).on("scroll", function() {
_i_("18c:1977"), t.setScrollPosition(), _r_();
}), setTimeout(function() {
_i_("18c:1978");
var i = t.ttNodes.join(", ");
if (t.ttContent = e(".tt_content", t.tt).length ? e(".tt_content", t.tt).get(0) :t.tt, t.setWindowSize(), t.setScrollPosition(), booking.env.b_is_tdot_traffic && e(document).on("touchstart.ttfix", ".js-tooltip-wrap", function() {
_i_("18c:2306"), t.showHideTooltip(null, 0, 0), _r_();
}), e("body").delegate(i, "mouseover mouseout mousemove", function(e) {
_i_("18c:2255");
var i = e || window.event, n = i.pageX || i.clientX + this.ttScrollLeft || 0, r = i.pageY || i.clientY + this.ttScrollTop || 0;
"mouseout" === i.type ? t.showHideTooltip(null, n, r) :t.showHideTooltip(this, n, r), _r_();
}), booking.env.b_is_ie8 || booking.env.b_is_ie9) {
var n = t.ttNodes.join("[title], ");
e(n).each(function() {
_i_("18c:2307");
var e = this.getAttribute("title");
this.setAttribute("data-title", e), this.removeAttribute("title"), _r_();
});
}
_r_();
}, 500), _r_();
},
showHideTooltip:function(e, t, i) {
if (_i_("18c:1288"), null != this.ttShow || null == e) {
if (e != this.ttCurElem && null != this.ttCurElem) this.ttShow = null, this.ttContent && (this.ttContent.innerHTML = ""), this.ttCurText = "", this.ttCurElem = null, this.ttShowLeft = !1, this.ttShowTop = !1, this.tt && (this.tt.style.display = "none", this.tt.className = "", this.tt.style.width = "auto"); else if (this.tt) {
var n = this.getPosition(t, i, this.tt);
n && n.length > 1 && (this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px");
}
} else {
var r = this.getTTNode(e);
if (null != r) {
this.ttShow = e.id;
var o = r;
this.ttCurElem = e, this.ttCurText = o[0];
var a = "" != o[1] ? o[1] :this.ttClass;
if (o[2] && (this.ttShowLeft = !0), o[5] && (this.ttShowTop = !0), o[4] && (a += " tt_loading", this.preloadImg(e.id)), this.ttContent.innerHTML = this.ttCurText, this.tt && (this.tt.className = a, null != o[3] ? this.tt.style.width = ("function" == typeof o[3] ? o[3].call(this.tt) :o[3]) + "px" :this.tt.style.width = "auto"), o[4] || this.showToolTip(0), this.tt) {
var n = this.getPosition(t, i, this.tt);
this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px";
}
}
}
_r_();
},
showToolTip:function(e) {
_i_("18c:1289");
var t = this;
if (0 != this.ttTimeout) {
var i = e < this.ttTimeout ? this.ttTimeout - e :10;
t.showingTooltip && clearTimeout(t.showingTooltip), t.showingTooltip = setTimeout(function() {
_i_("18c:2202"), "" != t.ttCurText ? (booking.eventEmitter.trigger("tooltip.show", [ t.ttCurElem, t ]), t.tt.style.display = "block") :t.showHideTooltip(null, 0, 0), _r_();
}, i);
} else this.tt && (this.tt.style.display = "block");
_r_();
},
setScrollPosition:function() {
_i_("18c:1290"), "number" == typeof window.pageYOffset ? (this.ttScrollLeft = window.pageXOffset, this.ttScrollTop = window.pageYOffset) :document.documentElement && document.documentElement.scrollTop ? (this.ttScrollLeft = document.documentElement.scrollLeft, this.ttScrollTop = document.documentElement.scrollTop) :(this.ttScrollLeft = document.body.scrollLeft, this.ttScrollTop = document.body.scrollTop), _r_();
},
setWindowSize:function() {
_i_("18c:1291"), window.innerWidth ? (this.ttWinWidth = window.innerWidth, this.ttWinHeight = window.innerHeight) :0 != document.documentElement.clientWidth ? (this.ttWinWidth = document.documentElement.clientWidth, this.ttWinHeight = document.documentElement.clientHeight) :(this.ttWinWidth = document.body.clientWidth, this.ttWinHeight = document.body.clientHeight), _r_();
},
getTTNode:function(t) {
if (_i_("18c:1292"), !e(t).attr("data-resized")) {
if (t.id) var i = t.id; else {
this.ttCounter++;
var i = "b_tt_holder_" + this.ttCounter;
t.id = i;
}
if (this.toolTips[i]) return _r_(this.toolTips[i]);
if (e(t).attr("data-" + this.ttHidennodeAttr) && e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).length) var n = e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).html(); else if (e(t).hasClass("policy_name_tt")) var n = e(t).siblings(".differing_policies").html(); else if (e(t).hasClass("fleximeter_tt")) var n = e(t).parents(".hp-rt__policy-list").siblings(".differing_policies").html(); else if (e(t).hasClass("non-refundable-savings")) var n = e(t).siblings(".differing_policies").html(); else {
var n = t.getAttribute("data-title") || t.getAttribute("title");
t.getAttribute("title") && !t.getAttribute("data-title") && (t.setAttribute("data-title", t.getAttribute("title")), t.removeAttribute("title"));
}
var r = t.nodeName.toLowerCase();
if (("option" == r || "link" == r || "select" == r) && (n = ""), n && "" != n) {
var o = this.ttClass, a = e(t).hasClass("left_tt"), s = !1, _ = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), c = _.exec(n), l = c && c[2];
if (l && (n = n.replace(_, ""), B.et.stage(l, 1)), s) return _r_(null);
var u = null, d = t.getAttribute("data-width");
if (d && !isNaN(d) && d > 150 && 1001 > d) u = d; else {
var h = t.getAttribute("rel");
h && !isNaN(h) && h > 150 && 1001 > h && (u = h);
}
var p = n.indexOf("<img") > -1 && null == u ? !0 :!1;
t.className.indexOf("large_tooltip") > -1 && (o += " tt_large"), p && (o += " blackBorderTooltip"), e(t).attr("data-tooltip-class") && (o += " " + e(t).attr("data-tooltip-class"));
var f = e(t).attr("data-toponly"), g = !!f;
return this.toolTips[i] = [ n, o, a, u, p, g ], null != t.getAttribute("title") && (null == t.getAttribute("data-title") && t.setAttribute("data-title", t.title), t.title = "", t.removeAttribute("title")), booking.env.b_is_ie && t.removeAttribute("alt"), _r_(this.toolTips[i]);
}
return _r_(null);
}
_r_();
},
getPosition:function(t, i, n) {
_i_("18c:1293");
var r = t + 15, o = i + 10, a = e(n).width(), s = e(n).height(), _ = 20;
return (t + a + this.ttScrollLeft > this.ttWinWidth - _ || this.ttShowLeft && t > a + _) && (r = t - a - _), this.ttShowTop ? i - s - 10 > this.ttScrollTop && (o = i - s - 10) :(this.ttShowTop || i + s - this.ttScrollTop > this.ttWinHeight - _) && (o = i - s - 10), _r_([ r, o ]);
},
preloadImg:function(e) {
_i_("18c:1294");
var t = this, i = new Date(), n = this.toolTips[e][0].match(/src=['"]([^'"]+)['"]/);
if (!n[1]) return this.toolTips[e][4] = !1, _r_();
if (this.preLoadedImages[n[1]]) return this.toolTips[e][4] = !1, -1 === this.preLoadedImages[n[1]].ttid.indexOf(e) && this.preLoadedImages[n[1]].ttid.push(e), _r_();
this.preLoadedImages[n[1]] = {
ttid:[ e ],
loaded:!1
};
var r = document.createElement("img");
r.onload = function() {
_i_("18c:1979"), t.preLoadedImages[this.src].loaded = !0, t.preLoadedImages[this.src].ttid.forEach(function(e) {
_i_("18c:2256");
var n = t.toolTips[e];
if (null != n[3]) {
var r = this.width + 20;
r > 150 && (n[3] = r);
}
if (n[4] = !1, t.ttShow !== e) return _r_();
null != n[3] && (t.tt.style.width = n[3] + "px");
var o = new Date(), a = o.getTime() - i.getTime();
t.showToolTip(a), _r_();
}), _r_();
}, r.src = n[1], _r_();
},
addTooltip:function(t, i, n, r, o, a) {
_i_("18c:1295"), "function" == typeof i && (i = i());
var s = this;
"string" == typeof t && e("#" + t).length ? (e("#" + t).addClass("jq_tooltip"), this.toolTips[t] = [ i, n, r, o, a ]) :"object" == typeof t && e(t).each(function() {
if (_i_("18c:2203"), e(this).addClass("jq_tooltip"), this.id) var t = this.id; else {
s.ttCounter++;
var t = "b_tt_holder_" + s.ttCounter;
this.id = t;
}
i || (i = e(this).attr("data-title")), o || (o = e(this).attr("data-width")), s.toolTips[t] = [ i, n, r, o, a ], _r_();
}), _r_();
},
updateTooltip:function(t, i, n, r) {
if (_i_("18c:1296"), r = r || {}, e(t).attr("id")) var o = e(t).attr("id"); else {
this.ttCounter++;
var o = "b_tt_holder_" + this.ttCounter;
e(t).attr("id", o);
}
!n && this.toolTips[o] ? (this.toolTips[o][0] = i, r.width && (this.toolTips[o][3] = r.width)) :this.addTooltip(o, i, "", !1, r.width || null, !1), _r_();
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].touch_device_check = {
priority:5,
init:function() {
return _i_("18c:480"), booking.env.touch_os = "ontouchstart" in document.documentElement ? !0 :!1, /(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && (booking.env.touch_os = !1), _r_(!0);
}
}, booking[sNSStartup].userAccessFormValidation = {
init:function() {
_i_("18c:481"), booking.userAccessFormHandler.init(), _r_();
}
}, booking.userAccessFormHandler = function(e) {
_i_("18c:265");
var t = B.require("jquery"), i = {
$userAccessMenu:{},
$parentForm:{},
$parentFormWrapper:{},
submitHooks:{},
globalSubmitHooks:{},
_init:function(e) {
_i_("18c:1534");
var i = this;
this.$userAccessMenu = t(".user_access_menu"), e && (this.$userAccessMenu = t(e)), this.$userAccessMenu.delegate(".user_access_section_trigger", "click", function() {
_i_("18c:2063");
var e = t(this), n = e.parents(".user_access_menu"), r = this.getAttribute("data-target");
return t(".form-section", n).addClass("form-hidden-section").removeClass("form-shown-section"), i.$parentForm = t("." + r, n), i.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section"), t(".form-tabs", n).removeClass("user_menu_active_tab"), t("." + r + "_tab", n).addClass("user_menu_active_tab"), booking.eventEmitter && ("user_access_signup_menu" === e.data("target") && booking.eventEmitter.trigger("user_access_menu_register_tab"), "user_access_signin_menu" === e.data("target") && booking.eventEmitter.trigger("user_access_menu_login_tab")), _r_(!1);
}), t(".user_access_menu_auth_low_not_me").click(function(e) {
_i_("18c:2064");
var i, n, r = t(e.target).attr("href");
r && (i = '<form method="POST" action="' + r + '" ><input type="hidden" name="logout" value="1" /></form>', n = t(i), n.prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'), e.preventDefault(), t("body").append(n), n.submit()), _r_();
}), t("body").delegate(".user_access_form", "submit", function() {
if (_i_("18c:2065"), i.$parentForm = t(this), i.$parentFormWrapper = t(this).parents(".form-section"), !i._validateForm()) return _r_(!1);
if (i.fe_run_china_login_with_phone_number && i.userNameIsPhone && i.$parentForm.hasClass("js-user-access-form--signup")) t(".js-suppress_refresh").val(1), t(".js-no_login_after_signup").val(1), t(".js-no_redirect").val(1), booking.phoneNumberLogin.setPassword(t("input[name=password]", i.$parentFormWrapper).val()); else if (t(".form-loading", i.$parentFormWrapper).show(), t(this).trigger("submit_pb_mybooking_cant_find"), t(this).hasClass("form-secondary-login") && "msie" === B.env.b_browser && B.env.b_browser_version < 9) {
var e = "&" + t(this).serialize(), n = t(this).attr("action"), r = n + e;
location.href = r;
} else booking.eventEmitter.trigger("user-acess-menu:valid-submit-start", i);
_r_();
}), t("#login_redesign").click(function() {
_i_("18c:2066"), t(".bs2_inline_signin_box").toggle(), B.eventEmitter.trigger("user-access-menu:toggle"), _r_();
}), this._initPassStrength(), "https:" === location.protocol && booking.env.b_is_app && t(".user_access_form").each(function() {
_i_("18c:2204");
var e = t(this), i = e.attr("action");
-1 !== i.indexOf("protocol=http") && -1 === i.indexOf("protocol=https") ? (i = i.replace("protocol=http", "protocol=https_www"), e.attr("action", i)) :-1 !== i.indexOf("protocol=https") && (i = i.replace("protocol=https", "protocol=https_www"), e.attr("action", i)), _r_();
}), _r_();
},
_initPassStrength:function(e) {
_i_("18c:1535");
var i, n, r = this;
e || (e = ".password_strength"), n = t(t(e).attr("data-wrapper")), n = n.length ? n :this.$userAccessMenu, n.delegate(e, "keyup", function() {
_i_("18c:2067");
var e = t(this), n = e.val();
i && clearTimeout(i), i = setTimeout(function() {
_i_("18c:2308"), r._calculatePasswordStrength(e, n), booking.eventEmitter && B.eventEmitter.trigger("passStrength"), _r_();
}, 400), _r_();
}), _r_();
},
_validations:{
email:function(e) {
_i_("18c:1829");
var t = e.indexOf("@"), i = e.lastIndexOf(".");
return _r_(t > 0 && i > t);
},
emailOrPhone:function(e) {
_i_("18c:1830");
var t = this.email(e), i = this.phone(e);
return _r_(t || i);
},
phone:function(e) {
_i_("18c:1831");
var t = e.match(/\d/g);
return _r_(t && t.length && t.length > 9 && t.length < 14);
}
},
fe_run_china_login_with_phone_number:0 === parseInt(B.env.auth_level, 10) && B.env.fe_run_china_login_with_phone_number,
fe_run_email_validation:0 === parseInt(B.env.auth_level, 10),
_validateForm:function() {
if (_i_("18c:1536"), !this.$parentForm.length) return _r_(1);
var i = !0, n = e.error_sign_up_password_email_combo_01, r = this;
return t("input", this.$parentForm).each(function() {
_i_("18c:2068");
var e, o, a, s, _ = t(this), c = _.attr("data-validation"), l = _.val();
if (c) {
c = c.split("|");
for (var u = 0, d = c.length; d > u && i; u++) e = c[u].split(/\{/), o = e[0], "required" !== o || l ? "numeric_with_dots" === o || "numeric" === o ? ("numeric_with_dots" === o && (l = l.replace(/\./g, ""), _.val(l)), /^\d+$/g.test(l) || (i = !1)) :/min_length\([0-9]+\)/.test(o) ? (a = o.split("(")[1], a = a.slice(0, -1), l.length < a && (i = !1)) :/required_match\([a-zA-Z_]+\)/.test(o) && (s = o.split("(")[1], s = s.slice(0, -1), t(this).val() !== t("#" + s).val() && (i = !1)) :i = !1, r.fe_run_china_login_with_phone_number ? "email-or-phone" === o && (i = r._validations.emailOrPhone(l), r.userNameIsPhone = r._validations.phone(l), r.userNameIsPhone && booking.phoneNumberLogin.setPhone(l)) :r.fe_run_email_validation && "email" === o && (i = r._validations.email(l)), e[1] && (n = e[1].slice(0, -1));
if (!i) return _r_(!1);
}
_r_();
}), i ? _r_(!0) :(t(".alert-error", this.$parentFormWrapper).html(n).show(), booking.eventEmitter.trigger("form-error", this.$parentFormWrapper), _r_(!1));
},
_calculatePasswordStrength:function(i, n) {
if (_i_("18c:1537"), "undefined" == typeof n || "undefined" == typeof n.length) return _r_();
for (var r, o, a = n.length, s = parseInt(a / 2.5, 10), _ = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", l = 0, u = !1, d = 0, h = 0, p = i.attr("data-wrapper") ? i.parents(i.attr("data-wrapper")) :i.parents(".user_access_form"), f = t(".user_access_password_strength", p).find(".pass_strength_step").width(), g = t(".user_access_password_strength", p).find(".pass_strength_progress"), m = 0; a > m; m++) isNaN(n.charAt(m)) ? u = !0 :l += 1, _.indexOf(n.charAt(m)) > -1 && (d += 2), c.indexOf(n.charAt(m)) > -1 && (h += 1);
d > 4 && (d = 4), l > 2 && (l = 2), h > 2 && (h = 2), u && (s += l), s += d, s += h, s > 10 ? s = 10 :0 === s && (s = 1), 8 > a ? (g.addClass("pass_strength_invalid"), s > 3 && (s = 3), o = 0) :(g.removeClass("pass_strength_invalid"), o = parseInt(s / 2, 10) + 1), o = o > 5 ? 5 :o, r = f * s, g.animate({
width:r + "px"
}), t(".pass_strength_text", p).text(e.b_password_strength_msg[o]), _r_();
},
_displayErrorMsg:function(e) {
if (_i_("18c:1538"), !e || !e.msg) return _r_();
var i, n, r;
e.parent && (n = t(e.parent)), i = e.target ? t(e.target, n) :t(".alert-error", n), i.html(e.msg).addClass("alert-displayed"), t(".form-loading, #page_login_loading").hide(), booking.env.is_genius_onboarding && (r = t("#slide1").height(), t("#slides").animate({
height:r
})), e.forgot_pass && t.inArray(B.env.b_lang, "bg ro ru sk sl".split(" ")) > -1 && B.et.stage("ZOCaNUUSASUYCODYNINbSXT", 1), _r_();
},
_addSubmitHook:function(e, t, i) {
_i_("18c:1539");
var n = i ? this.globalSubmitHooks :this.submitHooks;
if (!t || !e) return _r_();
n[e] = t, _r_();
},
_removeSubmitHook:function(e, t) {
_i_("18c:1540");
var n = t ? this.globalSubmitHooks :this.submitHooks;
if (!i) return _r_();
delete n[e], _r_();
}
};
return _r_({
init:function() {
_i_("18c:1297"), i._init(), _r_();
},
initPassStrength:function(e) {
_i_("18c:1298"), i._initPassStrength(e), _r_();
},
displayErrorMsg:i._displayErrorMsg
});
}(booking.env), booking[sNSStartup].user_menu_dropdowns = function() {
_i_("18c:266");
var e = !1, t = !1, i = $("#current_language_foldout"), n = function(e) {
_i_("18c:942"), $(e).each(function() {
_i_("18c:1832");
var e = $(this).attr("data-lang"), t = booking.env.b_switch_language_url[e];
$(this).find("a").attr("href", t), _r_();
}), _r_();
}, r = function(e) {
_i_("18c:943"), $(e).each(function() {
_i_("18c:1833");
var e = booking.env.b_this_url;
("genius" === booking.env.b_action || "guest" === booking.env.b_action) && (e = booking.env.b_this_url_without_lang);
var t = $(this).attr("data-currency"), i = e.indexOf("?") > -1 ? ";" :"?";
t += ";changed_currency=1";
var n = $(this).closest(".select_foldout_wrap").is(".select_foldout_wrap_top");
n && (t += ";top_currency=1"), $(this).attr("href", e + i + "selected_currency=" + t), _r_();
}), _r_();
}, o = function(e) {
_i_("18c:944");
var t = "loading_option";
e.delegate("a", "click", function(i) {
_i_("18c:1834");
var n = $(this).parent();
if (n.hasClass("selected_language") || n.hasClass("selected_currency")) return i.preventDefault(), _r_();
if (n.hasClass(t) ? i.preventDefault() :e.find("." + t).removeClass(t), n.addClass(t), B.env.b_run_sr_ajax) {
var r = B.require("searchresults/events");
r.trigger(r.UI_NAVIGATE_TO, {
url:$(this).attr("href"),
fixUrl:!0,
reload:!0
}), i.preventDefault();
}
_r_();
}), _r_();
}, a = function() {
_i_("18c:945"), e || $.get(booking.env.b_currency_url, function(t) {
_i_("18c:2069"), $("#current_currency").html(t), o($("#current_currency_foldout")), r($("#current_currency a")), e = !0, B.eventEmitter.trigger("b_currency_dropdown_ready"), B.events.trigger("b_currency_dropdown_ready"), _r_();
}), _r_();
}, s = function() {
_i_("18c:946"), t || $.get(booking.env.b_languages_url, function(e) {
_i_("18c:2070"), i.length ? i.replaceWith(e) :$("#current_language").html(e), o(i), n($("#current_language li")), t = !0, "zh" !== B.env.b_lang && B.et.customGoal("IZVJWcJRIEcVBLHJZIUC", 1), _r_();
}), _r_();
}, _ = function() {
_i_("18c:947");
var e = $("#current_language_foldout");
o(e), $(".uc_currency a.popover_trigger").click(function() {
_i_("18c:1835"), a(), _r_();
}), "zh" !== B.env.b_lang && ($(".uc_language a.popover_trigger").click(function() {
_i_("18c:2071"), B.et.stage("IZVJWcJRIEcVBLHJZIUC", 1), B.et.track("IZVJWcJRIEcVBLHJZIUC") || B.et.customGoal("IZVJWcJRIEcVBLHJZIUC", 1), _r_();
}), B.et.track("IZVJWcJRIEcVBLHJZIUC") && $(".uc_language a.popover_trigger").click(function() {
_i_("18c:2205"), s(), _r_();
})), "zh" === B.env.b_lang && $(".zh .uc_language a.popover_trigger").click(function() {
_i_("18c:2072"), s(), _r_();
}), _r_();
};
return _r_({
init:_
});
}(), booking.jstmpl("language_menu_item", function() {
_i_("18c:267");
var e = [ ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ' ], t = [ "lang" ];
return _r_(function(i) {
_i_("18c:826");
var n = "", r = this.fn;
return n += [ e[0], (r.MC(t[0]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[0]) || {}).current)) && (n += e[1]), n += [ e[2], (r.MC(t[0]) || {}).code, e[3], (r.MC(t[0]) || {}).url, e[4], (r.MC(t[0]) || {}).flag, e[5], (r.MC(t[0]) || {}).name, e[6] ].join(""), _r_(n);
});
}()), booking.jstmpl("language_menu_list", function() {
_i_("18c:268");
var e = [ '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n" ], t = [ "title", "columns", "lang" ];
return _r_(function(i) {
_i_("18c:827");
var n = "", r = this.fn;
function o(i) {
return _i_("18c:1299"), i += [ e[3], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[4]), i += [ e[5], (r.MC(t[2]) || {}).code, e[6], (r.MC(t[2]) || {}).url, e[7], (r.MC(t[2]) || {}).flag, e[8], (r.MC(t[2]) || {}).name, e[9] ].join(""), _r_(i);
}
n += [ e[0], r.MB(t[0]), e[1] ].join("");
var a = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var s, _ = 1, c = a.length; c >= _; _++) {
i[0].column = s = a[_ - 1], n += e[2];
var l = _, u = a, d = c, h = p, a = s || [];
i.unshift({
lang:null
});
for (var p, _ = 1, c = a.length; c >= _; _++) i[0].lang = p = a[_ - 1], i.unshift({
lang:p
}), n = o(n), i.shift();
i.shift(), _ = l, a = u, c = d, p = h, n += e[10];
}
return i.shift(), n += e[11], _r_(n);
});
}()), booking.jstmpl("language_menu", function() {
_i_("18c:269");
var e = [ "\n    ", "\n        ", '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n", "\n" ], t = [ "title", "columns", "lang", "popular_languages", "lang_dropdown_top_langs", "languages", "lang_dropdown_all_langs" ];
return _r_(function(i) {
_i_("18c:828");
var n = "", r = this.fn;
function o(n) {
_i_("18c:1300"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var o = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var a, _ = 1, c = o.length; c >= _; _++) {
i[0].column = a = o[_ - 1], n += e[4];
var l = _, u = o, d = c, h = p, o = a || [];
i.unshift({
lang:null
});
for (var p, _ = 1, c = o.length; c >= _; _++) i[0].lang = p = o[_ - 1], i.unshift({
lang:p
}), n = s(n), i.shift();
i.shift(), _ = l, o = u, c = d, p = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function a(n) {
_i_("18c:1301"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var o = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var a, s = 1, c = o.length; c >= s; s++) {
i[0].column = a = o[s - 1], n += e[4];
var l = s, u = o, d = c, h = p, o = a || [];
i.unshift({
lang:null
});
for (var p, s = 1, c = o.length; c >= s; s++) i[0].lang = p = o[s - 1], i.unshift({
lang:p
}), n = _(n), i.shift();
i.shift(), s = l, o = u, c = d, p = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function s(i) {
return _i_("18c:1302"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
function _(i) {
return _i_("18c:1303"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
return n += e[0], r.MD(t[3]) && (n += e[1], i.unshift({
columns:r.MB(t[3]),
title:r.MB(t[4])
}), n = o(n), i.shift(), n += e[0]), n += e[0], i.unshift({
columns:r.MB(t[5]),
title:r.MB(t[6])
}), n = a(n), i.shift(), n += e[14], _r_(n);
});
}()), booking[sNSStartupLoad].user_wishlists = {
init:function() {
_i_("18c:482"), $(".wl_dates_trigger").click(function() {
_i_("18c:1304"), booking[sNSStartup].lightbox.show($("#wl_dates_modal"), {
customWrapperClassName:"wl_dates_modal_wrapper",
bOverflowVisible:!0,
hideCallBack:function() {
_i_("18c:2159"), $(".alert-error").hide(), _r_();
}
}), _r_();
}), _r_();
}
}, booking[sNSStartup].viewed_hotels = {
priority:9,
fullListShowed:!1,
minListSize:5,
lastviewTimer:null,
loadStart:null,
init:function() {
_i_("18c:483"), this.loadStart = new Date();
var e = this;
if (document.getElementById("LastViewedHotels")) {
try {
this.minListSize = parseInt($("#LastViewedHotels").attr("min"), 10);
} catch (t) {}
$("a.remove_hotel").click(function() {
_i_("18c:1718");
var e = $(this).attr("href").substring(1);
return $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:e
}
}), booking[sNSStartup].viewed_hotels.cleanupHistoryList(this), this.blur(), _r_(!1);
}), $("#showAllHistory").length && $("#showAllHistory").click(function(e) {
return _i_("18c:1980"), booking[sNSStartup].viewed_hotels.showAll(e.target), this.blur(), _r_(!1);
}), $("#removeAllHistory").length && $("#removeAllHistory").click(function() {
return _i_("18c:1981"), booking[sNSStartup].viewed_hotels.removeAll(!0), this.blur(), _r_(!1);
});
}
return $(".lastVisitdate").length && ($(".lastVisitdate").parents("li").mouseenter(function() {
_i_("18c:1719");
var t = $(".lastVisitdate", this);
$(t).slideDown("fast"), $(this).addClass("selectedVisit"), e.updateTime(t), e.lastviewTimer = window.setInterval(function() {
_i_("18c:2206"), e.updateTime(t), _r_();
}, 1e3), _r_();
}), $(".lastVisitdate").parents("li").mouseleave(function() {
_i_("18c:1720"), window.clearInterval(e.lastviewTimer), $(".lastVisitdate", this).slideUp("fast"), $(this).removeClass("selectedVisit"), _r_();
})), _r_(!0);
},
updateTime:function(e) {
_i_("18c:484");
var t = this.loadStart, i = new Date();
void 0 == $(e).attr("sh") && ($(e).attr("sd", $(".viewed_d", e).text()), $(e).attr("sh", $(".viewed_h", e).text()), $(e).attr("sm", $(".viewed_m", e).text()), $(e).attr("ss", $(".viewed_s", e).text()), "" == $(e).attr("sd") && $(e).attr("sd", "0"), "" == $(e).attr("sh") && $(e).attr("sh", "0"), "" == $(e).attr("sm") && $(e).attr("sm", "0"), "" == $(e).attr("ss") && $(e).attr("ss", "0"));
var n = 0, r = 0, o = 0, a = 0, s = i.getSeconds() - t.getSeconds();
0 > s && (s = 60 - t.getSeconds() + i.getSeconds(), n = 1);
var _ = i.getMinutes() - t.getMinutes() - n;
0 > _ && (_ = 60 - t.getMinutes() + i.getMinutes() - n, r = 1);
var c = i.getHours() - t.getHours() - r;
0 > c && (c = 24 - t.getHours() + i.getHours() - r, o = 1), c > 24 && (c -= 24, a = 1 - o);
var l = parseInt($(e).attr("sh"), 10) + c, u = parseInt($(e).attr("sm"), 10) + _, d = parseInt($(e).attr("ss"), 10) + s;
d > 59 && (d -= 60, u += 1), u > 59 && (u -= 60, l += 1), l > 23 && (l -= 24, a += 1), 0 == d ? ($(".viewed_s", e).text(""), $(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).removeClass("show")) :($(".viewed_s", e).text(d), 1 == d ? ($(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).addClass("show")) :($(".viewed_seconds", e).addClass("show"), $(".viewed_second", e).removeClass("show"))), 0 == u ? ($(".viewed_m", e).text(""), $(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).removeClass("show")) :($(".viewed_m", e).text(u), 1 == u ? ($(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).addClass("show")) :($(".viewed_minutes", e).addClass("show"), $(".viewed_minute", e).removeClass("show"))), 0 == l ? ($(".viewed_h", e).text(""), $(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).removeClass("show")) :($(".viewed_h", e).text(l), 1 == l ? ($(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).addClass("show")) :($(".viewed_hours", e).addClass("show"), $(".viewed_hour", e).removeClass("show"))), 0 == a ? ($(".viewed_d", e).text(""), $(".viewed_days", e).removeClass("show"), $(".viewed_day", e).removeClass("show")) :($(".viewed_d", e).text(a), 1 == a ? ($(".viewed_days", e).removeClass("show"), $(".viewed_day", e).addClass("show")) :($(".viewed_days", e).addClass("show"), $(".viewed_day", e).removeClass("show"))), _r_();
},
cleanupHistoryList:function(e) {
_i_("18c:485");
var t = this, i = this.minListSize;
$(e).parent().fadeOut(500, function() {
_i_("18c:1305"), $(e).parents("li").remove();
var n = $("#LastViewedHotels"), r = n.find("ul.lastViewedList li"), o = n.find("#viewed_hotels_header");
if (r.length || booking[sNSStartup].viewed_hotels.removeAll(!1), r.length < 2 && $("#share_hotel_history").css("borderTop", "none"), r.length >= i) {
var a = r.get(i - 1);
$(a).fadeIn(1e3);
}
document.getElementById("showAllHistory") && r.length <= i && $("#moreHistoryLinkWrapper").hide(), n.hasClass("viewed_hotels_copy") && (r.length < 5 ? (n.removeClass("viewed_hotels_copy"), o.find(".base_header").show(), o.find(".variant_header").remove()) :5 == r.length && (o.find(".base_header").hide(), o.find(".variant_header").show())), booking.eventEmitter.trigger("viewed_hotels:update", {
items:r
}), t.callBack(), _r_();
}), _r_();
},
showAll:function(e) {
_i_("18c:486");
var t, i = this, n = $("#LastViewedHotels ul.lastViewedList li"), r = this.minListSize, o = $("#viewed_hotels_header");
if (booking[sNSStartup].viewed_hotels.fullListShowed) {
for (t = r; t < n.length; t++) $(n[t]).fadeOut(500, function() {
_i_("18c:1982"), i.callBack(), _r_();
});
booking[sNSStartup].viewed_hotels.fullListShowed = !1, e.className.indexOf("viewed_hotels_copy") > -1 && (o.find(".base_header").hide(), o.find(".variant_header").show());
} else {
for (t = r - 1; t < n.length; t++) $(n[t]).fadeIn(500), i.callBack();
booking[sNSStartup].viewed_hotels.fullListShowed = !0, e.className.indexOf("viewed_hotels_copy") > -1 && (o.find(".base_header").show(), o.find(".variant_header").hide());
}
booking[sNSStartup].viewed_hotels.switchCaption(), _r_();
},
removeAll:function(e) {
_i_("18c:487"), e && $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:-1
}
}), $("#LastViewedHotels").fadeOut(500, function() {
_i_("18c:1306"), $(this).remove(), _r_();
}), _r_();
},
switchCaption:function() {
_i_("18c:488"), booking[sNSStartup].viewed_hotels.fullListShowed ? ($("#showAllHistory .showLink").hide(), $("#showAllHistory .hideLink").show()) :($("#showAllHistory .showLink").show(), $("#showAllHistory .hideLink").hide()), _r_();
},
callBack:function() {}
}, B.define("profile/profile-menu/profile-menu", function(e, t, i) {
"use strict";
_i_("18c:189");
var n = e("jquery"), r = "[data-command=show-profile-menu]";
i.exports = {
_dropdown:null,
init:function() {
_i_("18c:1307");
var e = this;
n.fly.dropdown.extend({
init:function() {
_i_("18c:2257"), e._dropdown = this, this.bind(this.events.show, e.onshow.bind(e));
var t = booking.jstmpl("profile_menu_extra_class");
t && "__no_op__" !== t.name ? this.options.extraClass += " " + t.render(booking.env.profile_menu) :this.options.extraClass += " g-hidden", _r_();
}
}).delegate(r, {
extraClass:"fly-dropdown--profile-menu",
position:booking.env.rtl ? "bottom left" :"bottom right",
content:function() {
_i_("18c:2160");
var e = booking.jstmpl("profile_menu");
if (!e || "__no_op__" === e.name) {
var t = (this.handle() || n()).eq(0).children("a[href]"), i = t && t.attr("href") || "";
return /\/mydashboard/.test(i) && (window.location.href = i), _r_("");
}
var r = e.render(booking.env.profile_menu);
return _r_(n(r).loadComponents());
}
}), _r_();
},
onshow:function() {
_i_("18c:1308"), "android" === booking.env.b_browser && this.forceReflow(), n(".milk_menu").hide(), n(".b_recentlyviewed").length && n(".b_recentlyviewed").removeClass("rv-content-visible"), n(".uc_genius_tooltip").remove(), _r_();
},
hide:function() {
_i_("18c:1309"), this._dropdown && this._dropdown.hide(), _r_();
},
forceReflow:function() {
_i_("18c:1310"), setTimeout(function() {
_i_("18c:2161");
var e = this._dropdown && this._dropdown.root();
e && e.hide().show(0), _r_();
}.bind(this), 0), _r_();
}
}, _r_();
}), function() {
_i_("18c:190"), B[sNSStartup]["profile-menu"] = {
init:function() {
_i_("18c:1311"), B.require("profile/profile-menu/profile-menu").init(), _r_();
}
}, _r_();
}(), function(e) {
_i_("18c:191");
var t = e.require("jquery"), i = null, n = "show_non_age_message";
function r() {
return _i_("18c:490"), _r_(new RegExp(n + "=1").test(location.href));
}
function o() {
_i_("18c:491"), e.when({
action:"searchresults"
}).run(function(n) {
_i_("18c:1312");
function r() {
_i_("18c:1721"), i && i.hide(), _r_();
}
t('[name="group_children"]').on("change", r), e.eventEmitter.bind("CALENDAR:opened", r), _r_();
}), _r_();
}
function a() {
_i_("18c:492");
var n = 200, r = e.env.rtl ? "left" :"right", o = "searchbox_children_age_default_12_dropdown";
i && i.hide(), setTimeout(function() {
if (_i_("18c:1313"), 0 === t(".b-children-ages-configurator, .sb-group__children__field").length) return _r_();
i = t.fly.dropdown.extend({
defaults:{
position:r,
content:function() {
return _i_("18c:2323"), _r_(e.jstmpl("searchbox_children_ages_default_12_tooltip").render({}));
},
extraClass:o
},
actions:{
click:function(e) {
_i_("18c:2324"), t(e.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("18c:2288"), this.bind(this.events.show, function() {
_i_("18c:2349"), t("." + o).delegate(".fly-dropdown-close", "click", function(e) {
_i_("18c:2368"), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(".b-children-ages-configurator, .sb-group__children__field"), i.show(), _r_();
}, n), _r_();
}
e.when({
condition:r(),
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("18c:829"), a(), _r_();
}), e.when({
events:"load",
action:[ "index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "reviews_region", "reviews_city", "genius", "mydashboard" ]
}).run(function(e) {
_i_("18c:830");
var i = t("#frm"), r = i.find("[name=group_children]"), o = t('<input type="hidden" name="' + n + '" value="1">');
i.on("submit", function(e) {
_i_("18c:1722");
var t = i.find("[name=" + n + "]"), a = parseInt(r.val()), s = i.find("[name=age]").find(":selected.sb_child_ages_empty_zero").length;
a && s ? i.append(o) :t.remove(), _r_();
}), _r_();
}), e.when({
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("18c:831");
var t = (e("et"), e("searchresults/events"));
t.on(t.DATA_ENVIRONMENT_UPDATED, function(e) {
_i_("18c:1723"), r() && (o(), a()), _r_();
}), _r_();
}), o(), _r_();
}(booking), B.when({
events:"ready",
condition:$(".pincode_expired_error").length > 0
}).run(function() {
_i_("18c:192");
var e = $(".pincode_expired_error"), t = e.data("bn"), i = "<p>" + e.data("msg") + "</p>";
function n() {
_i_("18c:493"), e.html(i).closest(".js-pincode-ondemand-error").css({
backgroundColor:"#CEE5C3",
color:"#2C5520",
fontWeight:"bold"
}), _r_();
}
function r() {
_i_("18c:494");
var e = $(i);
e.hide(), $("body").append(e), B.require("lightbox").show(e, {
customWrapperClassName:"user-access-menu-lightbox user-access-menu-lightbox--user-center pincode_expired_error__resend_lightbox",
hideCallback:function() {
_i_("18c:1724"), e.remove(), _r_();
}
}), _r_();
}
e.find(".pincode_expired_error__resend_email_link").on("click", function(e) {
_i_("18c:832"), e.preventDefault(), $.ajax({
url:"/resend_confirmation_email",
type:"POST",
data:{
bn:t,
bhc_csrf_token:B.env.b_csrf_token
},
success:function() {
_i_("18c:1983"), "mdot" === B.env.b_site_type ? n() :r(), _r_();
}
}), _r_();
}), _r_();
}), B[sNSStartup].calendar2 = function(e, t, i, n, r) {
"use strict";
_i_("18c:270");
var o, a = i.require("hijri-calendar");
function s() {
_i_("18c:567"), i.search.dates("checkin") || r("#homein").find(".calendarLink").trigger("show"), _r_();
}
function _(e, t) {
_i_("18c:568");
var n = t.search || i.search, o = n.dates("checkin"), a = n.dates("checkout"), s = n.dates(t.type), _ = o && a && "valid" === o.type && "valid" === a.type;
r.fn.calendar2("each", function(e) {
if (_i_("18c:1541"), t.search && t.search !== e.search) return _r_();
e.type() === t.type && ("month" === s.type ? e.trigger("monthSelected", {
type:t.type,
value:s
}) :"valid" === s.type && e.trigger("dateSelected", {
type:t.type,
value:s
})), !_ || "checkin" !== e.type() && "checkout" !== e.type() || (e.trigger("rangeSelected", {
type:t.type,
startValue:o,
endValue:a
}), k(e, o, a, a.valueOf() - o.valueOf())), _r_();
}), _r_();
}
function c(e, t) {
switch (_i_("18c:569"), r.fn.calendar2("each", function(e) {
_i_("18c:1542"), e.adjustHeight(!0), t.id !== e.id() && e.trigger("hide"), ("calendar_6" == t.id || "calendar_7" == t.id) && (a.disable(), r(".hijri-toggle-2").removeClass("active")), _r_();
}), i.et.track("UBKeJbLYfTLUDQbSCUYdZYXYDHKESGIeKe") && r(".c2-calendar-body").addClass("sb-calendar-range"), i.env.b_action) {
case "index":
i.et.stage("UBKeJbLYfTLUDQbSCUYdZYXYDHKESGIeKe", 1);
break;

case "searchresults":
i.et.stage("UBKeJbLYfTLUDQbSCUYdZYXYDHKESGIeKe", 2);
break;

case "hotel":
i.et.stage("UBKeJbLYfTLUDQbSCUYdZYXYDHKESGIeKe", 3);
break;

default:
i.et.stage("UBKeJbLYfTLUDQbSCUYdZYXYDHKESGIeKe", 4);
}
_r_();
}
function l() {
_i_("18c:570"), r.fn.calendar2("hide"), _r_();
}
function u() {
_i_("18c:571");
var e = new Date();
return _r_(e);
}
function d() {
_i_("18c:572");
var e = p();
return e.setDate(e.getDate() - 1), _r_(e);
}
function h() {
_i_("18c:573");
var e = i.calendar2.today();
return e.setDate(e.getDate() + 1), _r_(e);
}
function p() {
_i_("18c:574");
var e = i.calendar2.today();
return i.env.b_search_max_months ? (e.setMonth(e.getMonth() + i.env.b_search_max_months), e.setDate(0)) :e = new Date(e.getFullYear() + 1, e.getMonth() + 1, 0), _r_(e);
}
function f(e, t, n) {
_i_("18c:575");
var r = this.search || i.search;
if (!e && !t) return _r_();
var o, a, s = e.type();
r.dates(s, {
year:t.getYear(),
month:t.getMonth(),
date:t.getDate()
}), o = r.dates("checkin"), a = r.dates("checkout"), "valid" === o.type && ("invalid" === a.type ? r.dates("checkout", r.dates("checkin").addDays(1)) :o > a && r.dates("checkout", r.dates("checkin").addDays(1))), "valid" === a.type && "invalid" === o.type && r.dates("checkin", r.dates("checkout").addDays(-1)), e && e.$element && e.$element.parents(".b-searchbox").length > 0 && ("checkin" === s ? i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKIN_DATEPICKER) :"checkout" === s && i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKOUT_DATEPICKER)), "checkin" === s && e && e.$element && (i.et.stage("TAeKPJNOdRUZOFBfWOOFVYYEO", 1), i.et.track("TAeKPJNOdRUZOFBfWOOFVYYEO") && e.$element.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkout").trigger("show")), e.$input.focus(), _r_();
}
function g(e, t) {
_i_("18c:576"), 13 !== t.which || e.shown() || (r("#frm").submit(), t.preventDefault()), _r_();
}
function m(e) {
_i_("18c:577");
var t, n, o = e.search || i.search, s = o.dates("checkout"), _ = o.dates("checkin"), c = _ && s && "valid" === _.type && "valid" === s.type, l = e.type();
"checkin" === l ? "valid" === _.type ? (t = "dateSelected", n = _) :"month" === _.type && (t = "monthSelected", n = _) :"checkout" === l && ("valid" === s.type ? (t = "dateSelected", n = s) :"month" === s.type && (t = "monthSelected", n = s)), t && n && e.trigger(t, {
type:l,
value:n
}), c && (e.trigger("rangeSelected", {
startValue:_,
endValue:s
}), k(e, _, s, s.valueOf() - _.valueOf())), a.available() && (r(".c2-wrapper-s-" + l + " .c2-calendar-header").contents().filter(function() {
return _i_("18c:2073"), _r_(3 === this.nodeType);
}).replaceWith(B(l)), a.enabled() && e.addState("hijri-enabled"), e.$calendarElement.delegate(".c2-calendar-header_hijri-toggle", "click", function(t) {
_i_("18c:1836"), t.preventDefault(), a.enabled() ? a.disable() :a.enable(), e.adjustHeight(!0), _r_();
})), _r_();
}
function v(e, t) {
_i_("18c:578");
var n = "";
if (i.env.b_year_months[e + "-" + (t + 1)] && (n = i.env.b_year_months[e + "-" + (t + 1)].name), a.available()) {
var r = a.convert({
year:e,
month:t,
day:1
}), o = a.convert({
year:e,
month:t,
day:i.calendar2.DAYS_IN_MONTH[t]
});
n += i.jstmpl("hijri_month").render({
monthTitleAddition:b(r, o)
});
}
return _r_(n);
}
function b(e, t) {
return _i_("18c:579"), _r_(e.year && t.year && e.year !== t.year ? i.jstmpl.translations("ar_islamic_calendar_two_years", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
first_year:e.hijri_year,
second_year:t.hijri_year
}) :e.hijri_month_tag && t.hijri_month_tag && e.hijri_month_tag !== t.hijri_month_tag ? i.jstmpl.translations("ar_islamic_calendar_two_months", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
year:e.hijri_year
}) :i.jstmpl.translations("ar_islamic_calendar_no_month_change", null, {
hijri_month:i.jstmpl.translations(e.hijri_month_tag),
year:e.hijri_year
}));
}
var w = "hover";
function y(t, n) {
_i_("18c:580");
var r, o, a, s, _, c = this.search || i.search;
if (n && n.hasState("disabled")) return _r_();
if (e.clearTimeout(t.rangeHighlightTimeout), "checkin" === t.type() ? (r = n.id(), a = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), s = c.dates("checkout"), o = i.calendar2.dayId(s.year, s.month, s.date)) :"checkout" === t.type() && (a = c.dates("checkin"), r = i.calendar2.dayId(a.year, a.month, a.date), s = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), o = n.id()), a && "valid" === a.type && s && "valid" === s.type && (_ = s.valueOf() - a.valueOf(), _ > 0)) {
if (t.unHighlightRange(w), t.selectedRange_) for (var l = 0, u = t.selectedRange_.length; u > l; l++) t.days[t.selectedRange_[l]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
t.highlightRange(r, o, {
name:w
}), k(t, a, s, _);
}
_r_();
}
function k(e, t, n, r) {
_i_("18c:581");
var s = S(t, n, r);
if (a.available() && (s += i.jstmpl("hijri_footer_warning").render()), i.env.b_cal_show_prices) try {
o || (o = i.require("search/dates/date-prices")), s += o.getInstance().getCalendarFooter(t, n, r);
} catch (_) {}
e.$element.find(".c2-calendar-footer").html(s), _r_();
}
function S(e, t, n) {
if (_i_("18c:582"), n > 0 && e && "valid" === e.type && t && "valid" === t.type) return _r_(i.jstmpl("length_of_stay_detailed").render({
b_interval:n,
b_checkin_date_formatted:i.formatter.date(e.toString(), "short_date_with_weekday_without_year"),
b_checkout_date_formatted:i.formatter.date(t.toString(), "short_date_with_weekday")
}));
return _r_("");
}
function C(e, t) {
_i_("18c:583");
var i;
t === w && (i = e.getSelectedDay(), i && i.removeState("selected")), _r_();
}
function x(t, n) {
_i_("18c:584");
var r = this.search || i.search;
t.rangeHighlightTimeout = e.setTimeout(function() {
_i_("18c:1725"), t.rangeHighlightTimeout && (t.unHighlightRange(w), t.selectedRange_ && t.selectedRange_.length && t.createRange_(t.selectedRange_, "selected"), k(t, r.dates("checkin"), r.dates("checkout"), r.dates("checkout").valueOf() - r.dates("checkin").valueOf())), _r_();
}, 100), _r_();
}
function B(e) {
_i_("18c:585");
var t = "";
return a.available() && (t += i.jstmpl("hijri_toggle").render({
type:e || this.type(),
hijri_visible:!1
})), _r_(t);
}
function E(e) {
_i_("18c:586"), r.fn.calendar2("each", function(e) {
_i_("18c:1543"), e.addState("hijri-enabled"), _r_();
}), _r_();
}
function T(e) {
_i_("18c:587"), r.fn.calendar2("each", function(e) {
_i_("18c:1544"), e.removeState("hijri-enabled"), _r_();
}), _r_();
}
function $() {
if (_i_("18c:588"), !i.env.b_calendar2) return _r_();
if (!i.calendar2 || i.env.b_is_tdot_traffic && "book" === i.env.b_action && 2 === i.env.b_book_stage) return _r_();
var e = r(".calendarLink, .b-datepicker");
if (0 === e.length) return _r_();
var t = n.sunday_first, o = n.b_simple_weekdays.slice(0), b = n.b_short_months;
t && o.unshift(o.pop());
var w = i.calendar2.generalOptions = {
dayNames:o,
sundayFirst:t,
monthNames:b,
direction:n.rtl ? "rtl" :"ltr",
lazy:!0,
closeButton:!0,
onDateSelected:f,
onLazyInitiated:m,
monthTitle:v,
onKeyDown:g,
onRangeHighlighted:C,
onDayMouseEnter:y,
onDayMouseLeave:x,
arrow:!0,
search:i.search
}, k = i.calendar2.checkinOptions = r.extend({}, w, {
type:"checkin",
defaultDate:i.search.dates("checkin"),
startDate:u(),
endDate:d(),
title:a.available() ? B :n.transl_checkin_title
}), S = i.calendar2.checkoutOptions = r.extend({}, w, {
type:"checkout",
defaultDate:i.search.dates("checkout"),
startDate:h(),
endDate:p(),
title:a.available() ? B :n.transl_checkout_title
});
e.each(function(e, t) {
_i_("18c:1545");
var i = r(t), n = i.attr("rel") || i.data("type") || i.data("calendar2-type");
i.unbind("click.calendar"), i.unbind("click.calendar2"), "checkin_year_month" === n || "checkin" === n ? i.calendar2(k) :("checkout_year_month" === n || "checkout" === n) && i.calendar2(S), _r_();
}), i.eventEmitter.bind("SEARCH:destination_selected", s), i.eventEmitter.bind("SEARCH:date_changed", _), i.eventEmitter.bind("SEARCH:month_changed", _), i.eventEmitter.bind("CALENDAR:opened", c), i.eventEmitter.bind("AUTOCOMPLETE:opened", l), i.eventEmitter.bind("CALENDAR:hijri_enabled", E), i.eventEmitter.bind("CALENDAR:hijri_disabled", T), i.maps && "function" == typeof i.maps.on && i.maps.on("click-open", l), _r_();
}
function D() {}
return _r_({
init:$,
initElse:D,
priority:8
});
}(window, document, booking, booking.env, $), function(e) {
if (_i_("18c:193"), e.getElementById("reactive_text_items")) {
var t = function() {
_i_("18c:1314");
var e = $("#reactive_text_items span").map(function() {
return _i_("18c:2207"), _r_("(" + decodeURIComponent($(this).text()) + ")");
}).get();
return _r_(new RegExp(e.join("|"), "i"));
}, i = function() {
return _i_("18c:1315"), _r_($("#reactive_text_items").children().length > 0);
};
$(function() {
_i_("18c:1316");
var e, n = t();
e = function() {
_i_("18c:1984");
var e = $(this).val();
n.test(e) || $("#reactive_text_box").is(":visible") && $("#reactive_text_box").fadeOut(), _r_();
}, $("#reactive_text_box").hide(), i() && $("#messagebox").keyup(e), _r_();
});
}
_r_();
}(document), function(e) {
_i_("18c:194"), e(function() {
_i_("18c:833"), e("#wl252-modal__if").length > 0 && booking.eventEmitter.bind("account-onboarding-modal-show", function() {
_i_("18c:1985"), e.cookie("wl252-gotit", "true", {
expires:365,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}), _r_();
}), _r_();
}(window.jQuery), function(e, t) {
_i_("18c:195");
var i, n, r, o = 0;
function a() {
_i_("18c:495");
var r = e(document).scrollTop(), o = t.tools.dom.getBounds(i);
return o.top = n + r, o.bottom = n + o.height + r, _r_(o);
}
function s(s) {
if (_i_("18c:496"), i || (i = e(".notice-wrap")), !i.length) return _r_();
n || (n = parseInt(i.css("top"), 10)), i.css({
transition:"0.3s top",
"-webkit-transition":"0.3s top"
});
var _ = +new Date() + s.stayTime;
_ > o && (o = _);
var c = n;
(function l(s) {
_i_("18c:1546");
var _ = e(".displace_growl:visible"), u = a();
c = n, _.each(function() {
_i_("18c:2074");
var e = t.tools.dom.getBounds(this), i = e.bottom;
t.tools.dom.boundsOverlap(e, u) && i >= c && (c = n + Math.max(0, i)), _r_();
});
var d = Math.max(n, c - e(document).scrollTop());
s != d && i.css({
top:d + "px"
}), new Date() < o && (clearTimeout(r), r = setTimeout(l, 500, d)), _r_();
}).call(), _r_();
}
function _() {
if (_i_("18c:497"), !window.navigator || !navigator.platform || -1 == navigator.platform.indexOf("Mac")) return _r_();
e(".uc_genius_tooltip").addClass("displace_growl"), t.eventEmitter.bind("growl:show", function(e, t) {
_i_("18c:1317"), s(t), _r_();
}), _r_();
}
t.ensureNamespaceExists(sNSStartup), B[sNSStartup].ge_adjust_growls_to_user_notice_popups = {
priority:9,
init:_
}, _r_();
}(window.jQuery, window.booking), booking[sNSExperiments].cQPHBAEWPAfJPESaO = {
init:function() {
_i_("18c:498");
var e, t, i = B.require("jquery"), n = this;
i('li.uc-notification[data-type="extension_announce"] a').click(function(r) {
_i_("18c:1318"), r.preventDefault(), e = i("#promo-chrome-ext-container"), t = i("#promo-chrome-ext"), i(".user_center_popover").hide(), n.initLightbox(e, t), booking[sNSStartup].lightbox.show(i("#promo-chrome-ext-container"), {
customWrapperClassName:"chrome-ext-container",
bAnimation:!0,
bCloseButton:!0
}), t.find(".cta-install-now a").click(function() {
_i_("18c:1986"), r.preventDefault(), chrome.webstore.install(booking.env.b_chrome_extension_install_url, function() {
_i_("18c:2258"), booking[sNSStartup].lightbox.hide(), _r_();
}), _r_();
}), t.find(".cta-play-again a").click(function() {
_i_("18c:1987"), r.preventDefault(), n.resetAnimation(t), n.startAnimation(t), _r_();
}), _r_();
}), _r_();
},
initElse:function() {},
initLightbox:function(e, t) {
_i_("18c:500"), t.hide().removeClass("hidden").show(), _r_();
},
resetAnimation:function(e) {
_i_("18c:501"), e.find(".cel-header").hide().css({
width:"362px",
height:"72px",
left:"189px",
top:"242px"
}), e.find(".cel-badge").hide(), e.find(".step-info").hide(), e.find(".popup").hide(), e.find(".cel-input").hide(), e.find(".extension-usps li").hide(), e.find(".cta-install-now,.cta-play-again").hide(), _r_();
},
startAnimation:function(e) {
_i_("18c:502"), e.queue("promoAnim", function() {
_i_("18c:1726"), $(this).find(".cel-header").delay(100).fadeIn(1e3).delay(1e3).fadeOut(1e3), $(this).dequeue("promoAnim"), _r_();
}).delay(4500, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1727"), $(this).find(".step-1").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1728"), $(this).find(".popup-step-1").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("18c:2353"), $(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2309"), $(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2162"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1729"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-2").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("18c:2163"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(2500, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1730"), $(this).find(".step-2").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1731"), $(this).find(".popup-step-3").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("18c:2354"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2310"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2164"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1732"), $(this).find(".popup-step-4").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("18c:2355"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2311"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("18c:2165"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1733"), $(this).find(".step-3").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1734"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-5").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(3e3).queue(function() {
_i_("18c:2166"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1735"), e.find(".cel-header").delay(1e3).css({
opacity:1
}).fadeIn(1e3).delay(1e3).animate({
width:181,
height:36,
top:130
}, 750), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("18c:1736"), e.queue(function() {
_i_("18c:2312"), function t() {
_i_("18c:2356"), e.find("li:hidden:first").delay(1e3).fadeIn(500, t), _r_();
}(), $(this).dequeue(), _r_();
}).delay(7e3).queue(function() {
_i_("18c:2167"), e.find(".cta-install-now,.cta-play-again").fadeIn(), $(this).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.dequeue("promoAnim"), _r_();
},
stopAnimation:function(e) {
_i_("18c:503"), e.clearQueue("promoAnim"), e.stop("promoAnim", !0, !0), _r_();
}
}, function(e, t) {
_i_("18c:196");
function i() {
_i_("18c:504"), e.user && e.user.showGeniusForGoogle && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("18c:1737"), t(".user_center_popover").css("z-index", "999"), e[sNSStartup].lightbox.rePosition(), t(".user_access_email").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking[sNSExperiments].cQPbbadAHHKe = {
init:function() {
_i_("18c:505"), booking.env.priceWatch.b_price_alert_all_canceled && booking[sNSStartup].lightbox.show($(".js-price-watch-unsubscribe--all"), {
customWrapperClassName:"price-watch-unsubscribe-wrapper"
}), _r_();
}
}, booking[sNSExperiments].header_2012 = function() {
_i_("18c:271");
var e = function() {
_i_("18c:948"), $("#b_nav_profile").bind("click", function() {
_i_("18c:1837"), $(this).toggleClass("selected"), $("#b_header").hasClass("profile_slide_down") ? $("#b_header").removeClass("profile_slide_down").addClass("profile_slide_up") :$("#b_header").removeClass("profile_slide_up").addClass("profile_slide_down"), _r_();
}), $(".profile_login_switcher").bind("click", function() {
_i_("18c:1838"), $("#profile_forms").toggleClass("profile_sign-in").toggleClass("profile_sign-up"), _r_();
}), $("select", "#header_currency").bind("change", function() {
_i_("18c:1839"), $(this).parent("form").submit(), _r_();
}), $("select", "#header_language").bind("change", function() {
_i_("18c:1840"), $(this).parent("form").submit(), _r_();
}), _r_();
}, t = function() {
_i_("18c:949"), e(), _r_();
};
return _r_({
init:t
});
}(), function(e) {
"use strict";
_i_("18c:197"), $(".profile-area__nav").delegate(".js-insiderguides-track", "click", function() {
_i_("18c:834");
var t = $(this).data("trackname");
e.google.trackEvent("Insider Guides", "Profile Nav Click", [ e.env.b_action, ":", t ].join(" ")), _r_();
}), _r_();
}(booking), booking[sNSExperiments].fEWUZbdJKbIYUYYeLT = function() {
_i_("18c:272");
function e() {
_i_("18c:590"), $(".ga-sh-tracker").click(function() {
_i_("18c:1547");
var e = $(this).data("google-track-event-category") || "Click", t = $(this).data("google-track-event-label") || "", i = $(this).data("google-track-event-action") || "", i = i.replace(/\n/g, ""), n = [];
"[" === i.substr(0, 1) && "]" === i.substr(-1) ? n = i.substr(1, i.length - 2).split(";") :i && n.push(i);
for (var r = 0; r < n.length; r++) n[r] && B.google.trackEvent(e, n[r], t);
_r_();
}), _r_();
}
return _r_({
init:e
});
}(), booking[sNSStartup].pss_bp_come_back = {
init:function() {
_i_("18c:506");
var e = B.require("user-left-client");
if (!(e.enabled && B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported())) return _r_();
e.register(B.env.b_action || "_client_"), _r_();
}
}, B[sNSStartup].responsive_header = function(e, t) {
"use strict";
_i_("18c:273");
var i = 167;
"ar" === t.env.b_lang && (i = 295), "zh-cn" === t.env.b_lang_for_url && (i = 236), t.env.b_is_villa_site && (i = 202);
function n(t) {
_i_("18c:591"), this.$element = e(t), this.priority_ = this.$element.data("priority") || 5, _r_();
}
n.prototype.width = function() {
return _i_("18c:950"), this.width_ || (this.width_ = this.$element.outerWidth()), _r_(this.width_);
}, n.prototype.priority = function() {
return _i_("18c:951"), _r_(this.priority_);
}, n.prototype.hide = function() {
return _i_("18c:952"), this.$element.hide(), _r_(this);
}, n.prototype.show = function() {
return _i_("18c:953"), this.$element.show(), _r_(this);
};
function r(t) {
_i_("18c:592"), this.$element = e(t), this.items = e.map(this.$element.find(".user_center_option"), function(e) {
return _i_("18c:1738"), _r_(new n(e));
}), this.sortedItems = this.items.sort(function(e, t) {
return _i_("18c:1739"), _r_(e.priority() - t.priority());
}), _r_();
}
r.prototype.fitWidth = function(t) {
return _i_("18c:954"), e.each(this.sortedItems, function(e, i) {
_i_("18c:1841"), t - i.width() > 0 ? (t -= i.width(), i.show()) :i.hide(), _r_();
}), _r_(this);
};
function o() {
_i_("18c:593");
var n = e("#top"), o = new r(n.find(".user_center_nav"));
function a() {
_i_("18c:955"), o.fitWidth(n.width() - i), _r_();
}
e(window).bind("resize", t.tools.functions.throttle(a, 300)), a(), _r_();
}
return _r_({
init:o,
priority:9
});
}($, booking), booking[sNSExperiments].notifications = {
priority:9,
init:function() {
_i_("18c:507"), this.initializeNotifications(), _r_();
},
initElse:function() {
_i_("18c:508"), this.initializeNotifications(), _r_();
},
initializeNotifications:function() {
_i_("18c:509");
var e = $("#notificationMenu .alert");
e.css({
display:"block",
visibility:"hidden"
});
var t = $("#formwrap"), i = t.height(), n = $(".sidebar_menu_placeholder").height();
n > i && t.animate({
"min-height":n
}, {
duration:400
}), e.css({
display:"none",
visibility:"visible"
}).css("opacity", 0).slideDown(500).animate({
opacity:1
}, {
queue:!1,
duration:750
}), _r_();
}
}, B[sNSStartup].search_summary_block = {
init:function() {
_i_("18c:510");
function e(e) {
_i_("18c:835");
var t = $("#searchboxInc");
t.find(".search_summary_block").hide(), t.find(".original_search_form").removeClass("original_search_form_hidden"), e.preventDefault(), _r_();
}
$(".search_summary_toggle_button").click(e), $(".sb-summary-block-item, .sb-summary-block__submit").click(function(e) {
_i_("18c:1319"), e.preventDefault(), $(".b-searchbox").removeClass("b-searchbox_summary"), _r_();
}), _r_();
}
}, booking[sNSStartup].SecretDeals = {
priority:8,
init:function() {
_i_("18c:511");
var e = this;
if (!$("#secretdeals-bg1").length) return _r_(!1);
$(window).bind("scroll", function(t) {
_i_("18c:1320"), e.parallaxScroll(), _r_();
}), $("a.section1").click(function() {
return _i_("18c:1321"), $("html, body").animate({
scrollTop:0
}, 1e3, function() {
_i_("18c:1988"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section2").click(function() {
return _i_("18c:1322"), $("html, body").animate({
scrollTop:$("#section2").offset().top
}, 1e3, function() {
_i_("18c:1989"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section3").click(function() {
return _i_("18c:1323"), $("html, body").animate({
scrollTop:$("#section3").offset().top
}, 1e3, function() {
_i_("18c:1990"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section4").click(function() {
return _i_("18c:1324"), $("html, body").animate({
scrollTop:$("#section4").offset().top
}, 1e3, function() {
_i_("18c:1991"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("nav#primary a").hover(function() {
_i_("18c:1325"), $(this).prev("h1").show(), _r_();
}, function() {
_i_("18c:1326"), $(this).prev("h1").hide(), _r_();
}), $(window).scroll(function() {
_i_("18c:1327");
var t = $(window).scrollTop();
900 >= t ? (e.removeActiveClass(), $("a#sd_nr1").addClass("active")) :t > 900 && 1750 > t ? (e.removeActiveClass(), $("a#sd_nr2").addClass("active")) :t > 1751 && 2500 > t ? (e.removeActiveClass(), $("a#sd_nr3").addClass("active")) :(e.removeActiveClass(), $("a#sd_nr4").addClass("active")), _r_();
}), _r_();
},
removeActiveClass:function() {
_i_("18c:512"), $(".sc_navigator a").each(function() {
_i_("18c:1328"), $(this).removeClass("active"), _r_();
}), _r_();
},
parallaxScroll:function() {
_i_("18c:513");
var e = $(window).scrollTop();
$("#secretdeals-bg1").css("top", 0 - .25 * e + "px"), $("#secretdeals-bg2").css("top", 0 - .5 * e + "px"), $("#secretdeals-bg3").css("top", 0 - .75 * e + "px"), $("#secretdeals-bg4").css("top", 0 - .3 * e + "px"), _r_();
}
}, "index" === B.env.b_action && $("#ed-wrapper").length > 0 && (booking[sNSExperiments].IZVJPVZMYCOKNIUAFCSDWLYScEUC = {
init:function() {
_i_("18c:1329");
var e = $("#ed-pagination"), t = $("#ed-prevpage"), i = $("#ed-nextpage"), n = $("#ed-cpagenum"), r = $("#ed-tpagenum"), o = $(".ed-list-wrapper.ed-cgrp"), a = $(".ed-list-wrapper"), s = a.length;
if (s > 1) {
a.each(function(e) {
_i_("18c:2168"), $(this).hasClass("ed-cgrp") && n.text(e + 1), _r_();
}), a.eq(s - 1).addClass("ed-lgrp"), e.show(), r.text(s);
function _() {
_i_("18c:1992");
var e = $(this);
"ed-prevpage" !== e.attr("id") || o.hasClass("ed-fgrp") ? "ed-nextpage" !== e.attr("id") || o.hasClass("ed-lgrp") || (o.removeClass("ed-cgrp").hide().next().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) + 1)) :(o.removeClass("ed-cgrp").hide().prev().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) - 1)), o = $(".ed-list-wrapper.ed-cgrp"), t.removeClass("ed-disclick"), i.removeClass("ed-disclick"), o.hasClass("ed-fgrp") ? t.addClass("ed-disclick") :o.hasClass("ed-lgrp") && i.addClass("ed-disclick"), _r_();
}
t.click(_), i.click(_);
}
_r_();
}
}), $(".popular_hotels-wrp").length > 0 && (booking[sNSExperiments].IZAFCSDWLCUC = {
init:function() {
_i_("18c:836"), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseenter", function() {
_i_("18c:1740");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-1").addClass("zind-10"), e.removeClass("hei-40 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseleave", function() {
_i_("18c:1741");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-10").addClass("zind-1"), e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-40 col-grey73"), _r_();
}), _r_();
}
}), booking[sNSStartup].survey = {
priority:9,
run:function() {
_i_("18c:514");
var e = $("#survey").attr("surveyurl");
if (e && (window.b_survey_url = e, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), "undefined" != typeof window.b_survey_url && window.b_survey_url) {
var t = $("#conf_survey,#survey,#conf_survey_bottom"), i = "/survey?", n = function() {
_i_("18c:1742"), "hotel" === booking.env.b_action && booking[sNSStartup].bookingSticker.update(), _r_();
}, r = function(e) {
if (_i_("18c:1743"), booking.env.showRevdSurvey2016Q1) var r = $(e.target).val(); else var r = $(this).val();
return r && (booking[sNSStartup].fix_move_book_header_and_button && (booking[sNSStartup].fix_move_book_header_and_button.surveyFixed = !1), "accept" === r || "Yes" === r || "yes" === r || "Ja, ik doe mee" === r || "Okay" === r ? window.open(window.b_survey_url, "booking_survey_window") :t.hide("normal", n), $.get(i + "decision=" + r + "&survey_key=" + booking.env.survey_key, {}, function(e) {
_i_("18c:2259"), t.hide("normal", function() {
_i_("18c:2335"), t.remove(), n(), _r_();
}), _r_();
})), _r_(!1);
};
booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
_i_("18c:1993"), t.addClass("show"), _r_();
}), t.find("button").on("click", r)) :(t.fadeIn("normal", n), t.find("button").click(r));
}
_r_();
},
init:function() {
if (_i_("18c:515"), this.run(), B.env.b_run_sr_ajax) {
var e = this;
B.require([ "searchresults/events" ], function(t) {
_i_("18c:1744"), t.on(t.UI_RESULTS_UPDATED, function() {
_i_("18c:2169"), e.run(), _r_();
}), _r_();
});
}
_r_();
}
}, function() {
_i_("18c:198");
var e = B.require("jquery");
booking[sNSExperiments].ZeZbObSAeOESJVWKMKe = {
init:function() {
_i_("18c:1330"), e(".wl_create_form").delegate(".wl-dropdown-toggle", "click", function() {
_i_("18c:1994"), e(this).toggleClass("collapsed"), e(this).parents(".wl-btn-group-wrap").next(".wl-dropdown-menu").slideToggle("fast"), _r_();
}), e(".wl_create_form").delegate(".wl-dropdown-menu-a", "click", function(t) {
_i_("18c:1995"), t.preventDefault();
var i = e(this);
e(".wl-privacy").val(this.rel), i.parents("form:first").submit(), "" != e(".wl_nameList_input").val() && e("#wl_create_shared_or_personal_list_modal").parent().css("opacity", .5), _r_();
}), _r_();
},
initElse:function() {}
}, _r_();
}(), B.define("component/banner", function(e, t, i) {
"use strict";
_i_("18c:199");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("18c:1548"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("18c:1549"), this.$el.on("click", ".js-close", this.hideEl.bind(this)), _r_();
},
hideEl:function(e) {
_i_("18c:1550"), e.preventDefault(), this.$el.fadeOut("fast"), _r_();
}
}), _r_();
}), booking[sNSStartup].user_autofocus_email_signinup = {
$ul:!1,
setFocusAndOrTrack:function() {
_i_("18c:516");
var e = this;
setTimeout(function() {
_i_("18c:1332"), e.$ul.find(".user_access_email:visible:first").select(), _r_();
}, 50), _r_();
},
setFocusSignIn:function() {
_i_("18c:517");
var e = this;
e.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function() {
_i_("18c:1333"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
setFocusSignUp:function() {
_i_("18c:518");
var e = this;
e.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function() {
_i_("18c:1334"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
init:function() {
_i_("18c:519"), this.$ul = $(".user_center_nav"), this.setFocusSignIn(), this.setFocusSignUp(), _r_();
}
}, function() {
_i_("18c:200");
var e = B.require("jquery");
booking[sNSExperiments].user_center_bar = {
priority:9,
init:function() {
_i_("18c:1335"), this.initializeUserCenterBar(), booking.events.emit("user_center_bar:init"), _r_();
},
initializeUserCenterBar:function() {
_i_("18c:1336");
var t = this, i = [];
if (i = i.concat([ {
className:"uc_language",
offset:0
} ]), booking.browserStorageHandler.deletePermanentValue("wl_fv", !0), booking.env.showFavesToWishlistNotice && !booking.browserStorageHandler.getPermanentValue("wl_fv2", !0)) {
var n = e("#top .uc_wishlists"), r = n.width() / 2, o = e("#faves_to_wishlist_notice"), a = o.width() / 2, s = a - r, _ = a - 8;
s = -Math.round(s) + "px", _ += "px", o.css("left", s), e("#faves_to_wishlist_notice .uc_top_arrow", n).css("left", _), o.show(), e(document).on("click", ".close_popover", function() {
_i_("18c:2170"), e(".popover_notice").remove(), _r_();
}), e(document).on("click", "#faves_to_wishlist_notice_link", function() {
_i_("18c:2171"), e(".popover_notice").remove(), e("#uc_wishlists_trigger").click(), _r_();
}), booking.browserStorageHandler.addPermanentValue("wl_fv2", 1, !0);
} else e(".user_imported_faves_new_badge").hide();
e(".popover_trigger").click(function(n) {
_i_("18c:1996");
var r = e(this);
r.parent(), r.parent().hasClass("logged_in_user");
if (r.hasClass("js-disable-popover")) return _r_();
n && n.currentTarget && e(n.currentTarget).hasClass("profile_menu_trigger") && booking.eventEmitter && booking.eventEmitter.trigger("user_access_menu_open"), n.preventDefault();
for (var o = {}, a = i.length - 1; a >= 0; a--) {
var s = r.parent().hasClass(i[a].className);
if (s) {
o.offset = i[a].offset;
break;
}
}
t.positionPopover(r, o), _r_();
}), e(document).ready(function() {
_i_("18c:1997");
e(".user_center_option");
e("body").mousedown(function(t) {
_i_("18c:2260"), t && t.target && !e(t.target).closest(".user_center_popover").length && (e(".user_center_popover").hide(), booking.eventEmitter.trigger("uc_popover_hidden"), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li.user_center_option").removeClass("active_option")), _r_();
}), (booking.user.showUserLoginOnLoad || booking.user.showUserLoginOnLoadDSF) && e(".signin_cta").click(), _r_();
});
var c = !1, l = !1;
function u() {
if (_i_("18c:1745"), c || l) return _r_();
booking.eventEmitter.trigger("uc_recently_viewed_opened"), l = !0;
var t = e(this).attr("data-href"), i = e(".uc_viewedhotels .hotels_container");
e.ajax({
url:t,
type:"GET",
success:function(e) {
_i_("18c:2261"), i.html(e), c = !0, booking.eventEmitter.trigger("uc_recently_viewed_loaded"), _r_();
},
complete:function() {
_i_("18c:2262"), e(".uc_viewedhotels .ajax_loading").hide(), e(".user_search_header").hide(), e(".no_listing:visible").length ? e(".uc_viewed_hotels .popover_content").addClass("empty_list") :(e(".user_search_header").appendTo(".uc_viewedhotels .popover_footer"), e(".user_search_header").show()), l = !1, _r_();
}
}), _r_();
}
e(".uc_viewed_hotels .popover_trigger").click(u), e(document).on("click", ".socnet_mailafriend", function() {
_i_("18c:1998"), setTimeout(function() {
_i_("18c:2263"), e(".user_center_popover").hide(), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li .popover_trigger").removeClass("active_option"), _r_();
}, 200), _r_();
}), e(document).on("click", "#user_form a.remove_hotel", function() {
_i_("18c:1999");
var i = e(this).attr("href").split("#")[1], n = {
hotel_id:i
};
n = t.addDefaultParams(n), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:n
}), this.blur();
var r = e(this).parents(".user_search_item").get(0), o = r.parentNode;
return e(r).hide("slow", function() {
if (_i_("18c:2264"), e(".hidden_item", o).length) {
var t = e(".hidden_item", o).get(0);
e(t).removeClass("hidden_item");
}
_r_();
}), t.removeOneHome(i), e("#user_form .user_search_item:visible").length || e(this).parents("#user_form").find(".user_search_item:visible").length || (e(".uc_viewedhotels .popover_footer").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_center_popover .no_listing").show()), _r_(!1);
}), e(document).on("click", "#user_form a#removeAllHistoryHotel", function() {
return _i_("18c:2000"), t.removeAll(e(this).attr("id")), e(".user_center_popover").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_searches_content").show(), e(".user_searches_content .user_search_item").hide(), e(".user_search_footer").hide(), e("#user_form .uc_viewed_hotels .popover_footer").remove(), e(".uc_viewed_hotels .no_listing").show(), e(".uc-notifications-recently-seen__count").fadeOut(), _r_(!1);
}), _r_();
},
removeAll:function(t) {
_i_("18c:1337");
var i = this, n = e("#" + t).parents(".user_searches_content");
if ("removeAllHistoryHotel" == t) {
var r = {
hotel_id:-1
};
r = this.addDefaultParams(r), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:r
}), i.removeAllHome();
} else booking[sNSStartup].search_history.removeAll(!0);
e("#" + t).blur(), e(".user_search_item", n).each(function() {
_i_("18c:2001"), e(this).hasClass("no_listing") ? e(this).show("slow") :e(this).hide("slow", function() {
_i_("18c:2313"), e(this).remove(), _r_();
}), _r_();
}), e(".user_search_header", n).hide(), e(".user_search_footer", n).hide(), _r_();
},
removeAllHome:function() {
_i_("18c:1338"), e(".user_searches_content").hide(), _r_();
},
removeOneHome:function(t) {
_i_("18c:1339"), e(".user_searches_content .remove_hotel").each(function() {
_i_("18c:2002");
var i;
e(this).attr("href") == "#" + t && (i = e(this).parents(".user_search_item"), i.remove()), _r_();
}), _r_();
},
positionPopover:function(t, i) {
_i_("18c:1340"), e("#faves_to_wishlist_notice").remove();
var n, r = e(t).parent(), o = r.width() / 2;
n = "string" == typeof i.popover ? e(i.popover, r) :e(".user_center_popover", r), "current_account" == r.attr("id") && (n.length > 1 || !n.hasClass("uc_genius_tooltip")) && (n = n.filter(":not(.uc_genius_tooltip)"), e(".uc_genius_tooltip").remove());
var a = n.width() / 2, s = a - o, _ = a - 8, c = r.offset().left - e("#bodyconstraint").offset().left, l = e("#bodyconstraint").width(), u = l - (a + o + c), d = c + o - a;
0 > u && d > 0 ? (s -= u, _ -= u) :u > 0 && 0 > d && (s += d, _ += d);
var h = i && i.offset;
if (h && (s += h, _ += h), n.css("left", -Math.round(s)), e(".user_center_popover .uc_top_arrow", r).css("left", _), e(".user_center_popover:visible").length && booking.eventEmitter.trigger("uc_popover_hidden"), e(".user_center_popover:visible", r).length) e(".user_center_popover").hide(); else {
var p = r.attr("data-id") || r.attr("id");
e(".user_center_popover").hide(), n.show(), booking.eventEmitter.trigger("uc_popover_showed", {
id:p
});
}
e("body.user_center #formwrap #signup_password:visible").length && (e("#formwrap #signup_password").css("z-index", "99"), e("#formwrap .pwd_strength").css("z-index", "99")), e("#dashboard_search #inout").css("z-index", "99"), _r_();
},
addDefaultParams:function(t) {
return _i_("18c:1341"), _r_(e.extend(t, {
aid:B.env.b_aid,
sid:B.env.b_sid,
stype:B.env.b_site_type_id,
stid:B.env.b_stid,
label:B.env.b_label
}));
}
}, _r_();
}(), booking[sNSStartup].wishlist_invite_multiple = {
init:function() {
_i_("18c:520");
var e = $(".mail_friend_box"), t = $(".wl_field_wrapper:first", e), i = $("#wishlist_modal"), n = $(".wl_field_and_remove_wrapper:first").clone(), r = function() {
return _i_("18c:1342"), _r_(n.clone());
}, o = $(".wl_share_list_toggle");
$(e).delegate(".wl_extra_email_field", "click", function() {
if (_i_("18c:1343"), 8 == $(".wl_field_wrapper", e).length) $(".wl_extra_email_field").addClass("disabled"); else {
var i = $(".wl_field_wrapper", e).length + 1;
t.clone().insertAfter($(".wl_field_wrapper:last", e)), $(".wl_field_wrapper:last .maf_input", e).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + i).attr("id", "to" + i), $(".wl_field_wrapper:last .wl_btn_remove_email_field", e).show();
}
_r_();
}), $(e).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("18c:1344"), $(this).parent().remove(), $(".wl_field_wrapper", e).length < 4 && $(".wl_extra_email_field").removeClass("disabled"), _r_();
}), $(e).delegate(".wl_add_message_field", "click", function() {
_i_("18c:1345"), $(".wl_add_message_input_field").toggle(), _r_();
}), $(".wl_email_share_trigger").click(function() {
_i_("18c:1346"), booking[sNSStartup].lightbox.show($("#wl_email_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_invite_share_trigger").click(function() {
_i_("18c:1347"), booking[sNSStartup].lightbox.show($("#wl_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_add_new_trigger").click(function() {
_i_("18c:1348"), booking[sNSStartup].lightbox.show($("#wl_create_shared_or_personal_list_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), i.find(".toggler").click(function() {
return _i_("18c:1349"), $(this).closest("div").find(".toggable").slideDown(), $(this).remove(), _r_(!1);
}), $("#shareCheck").click(function() {
_i_("18c:1350"), $(this).is(":checked") ? $(".wl_share_list_with_others").show() :$(".wl_share_list_with_others").hide(), _r_();
}), $(o).delegate(".wl_create_extra_email_field", "click", function() {
if (_i_("18c:1351"), 4 == $(".wl_field_and_remove_wrapper", o).length) $(".wl_create_extra_email_field").addClass("disabled"); else {
var e = $(".wl_field_and_remove_wrapper", o).length + 1;
r().appendTo($(".js-wl-emails-wrapper", o)), $(".wl_field_and_remove_wrapper:last .maf_input", o).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + e).attr("id", "to" + e), $(".wl_field_and_remove_wrapper:last .wl_btn_remove_email_field", o).show();
}
_r_();
}), $(o).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("18c:1352"), $(this).parent().remove(), $(".wl_field_and_remove_wrapper", o).length < 4 && $(".wl_create_extra_email_field").removeClass("disabled"), _r_();
}), _r_();
}
}, booking[sNSStartup].pp_bpg_overlay = function(e) {
_i_("18c:274");
var t = e.require("jquery");
function i() {
_i_("18c:594"), t("body").on("click", "a.open-bpg-in-overlay-instead", function(i) {
_i_("18c:1551"), i.preventDefault(), i.stopPropagation();
var n = e.require("lightbox");
n.hide(), setTimeout(function() {
_i_("18c:2075");
var i = e.jstmpl("bpg_module_overlay").render({
b_double_price_match_eligible:e.env.is_eligible_to_double_price_match,
b_site_type:e.env.b_site_type
});
n.show(i, {
customWrapperClassName:"bgp_module_overlay",
autoWidth:!1,
bCloseButton:!1,
bAnimation:!1
}), t(".bpg-overlay--content").on("click", ".bpg-overlay--close", function() {
_i_("18c:2289"), n.hide(), _r_();
}), _r_();
}, 50), _r_();
}), _r_();
}
function n() {
_i_("18c:595");
var i = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip", ".best_price_popup", ".pp_bpg_tooltip_holder", ".bp-usps__usp__title" ].join(",");
t("body").on("click", i, function() {
_i_("18c:1842"), e.events.trigger("BPG:Click"), _r_();
}).on("mouseenter", i, function() {
_i_("18c:1552"), e.events.trigger("BPG:Hover"), _r_();
}), _r_();
}
return _r_({
init:function() {
_i_("18c:1353"), n(), i(), _r_();
}
});
}(booking), B.events.on("TT-Fancy:show", function() {
_i_("18c:201"), $(".pp-bpg-tooltip--is-usp").length && B.et.stage("eDUbKSPOOFBeZMUYTC", 1), _r_();
}), booking[sNSExperiments].PVAYZQVceWTNOaEVC = {
init:function() {
_i_("18c:521");
var e = $(".da_tab_bar"), t = e.find(".da_tab"), i = e.find(".all_tab"), n = 0;
if (e.length < 1) return _r_();
var r = $(".disam-single-result").first().data("type");
t.each(function() {
_i_("18c:1354");
var e = $(this).data("tab"), t = $(".filter_type_" + e).length;
n += t, "all" !== e && ($("body").hasClass("lang_is_rtl") ? $(this).prepend("<span class='type_count'>" + t + "</span>") :$(this).append("<span class='type_count'>" + t + "</span>")), 0 === t && "all" !== e && $(this).hide(), _r_();
}), i.append("<span class='type_count'>" + n + "<span>"), t.click(function() {
_i_("18c:1355"), t.removeClass("active"), $(this).addClass("active");
var e = $(this).data("tab");
"all" === e ? $(".disam-single-result").show() :($(".disam-single-result").hide(), $(".filter_type_" + e).show()), _r_();
}), t.each(function() {
_i_("18c:1356"), $(this).data("tab") === r && $(this).click(), _r_();
}), e.css("visibility", "visible"), _r_();
}
}, B.when({
events:"load",
experiment:"EKMTOBAWGRcUQAcSWXCeLFSKe"
}).require([ "et", "jquery", "squeak" ], function(e, t, i) {
_i_("18c:202"), t('[id="req_info"]').length > 1 && i("GCaQadTGJNbHRKecbbRe"), _r_();
}), booking[sNSExperiments].fERXeNRJTBYbBeaPbPELXVC = function() {
_i_("18c:275");
var e = B.require("jquery");
function t() {
_i_("18c:596");
var t = e(".uc-notifications-recently-seen__count"), r = null, o = null, a = !1, s = 40, _ = {
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id,
stid:booking.env.b_stid,
label:booking.env.b_label
};
if (t.length) {
o = new Date().getTime(), e(document).delegate(".uc_viewedhotels .remove_hotel", "click", u), n(), e("#LastViewedHotels .remove_hotel").bindFirst("click", u), e(".uc_viewed_hotels").click(l);
var c = i();
c ? document.addEventListener(c.visibilityChange, function() {
_i_("18c:2076"), document[c.hidden] || l(), _r_();
}, !1) :"onfocusin" in document ? document.onfocusin = l :window.onfocus = l, l();
}
function l(i) {
if (_i_("18c:956"), a) return _r_();
if (i && i.target && e(i.target).closest(".remove_hotel").length) return _r_();
var n = new Date().getTime();
if (r && 5e3 > n - r) return _r_();
a = n - o > 60 * s * 1e3, r = n, e.getJSON("/hotel_history_counter", _, function(e) {
_i_("18c:1843"), e && void 0 !== typeof e.hotel_history_counter && (e.hotel_history_counter ? (t.html(e.hotel_history_counter), t.is(":visible") || t.css({
display:"inline-block",
opacity:0
}).animate({
opacity:1
})) :t.fadeOut()), _r_();
}), _r_();
}
function u() {
_i_("18c:957");
var e = parseInt(t.text(), 10);
B.et.customGoal("fERXeNRJTBYbBeaPbPELXVC", 2), !e || isNaN(e) || --e < 1 ? t.fadeOut() :t.html(e), _r_();
}
_r_();
}
function i() {
_i_("18c:597");
var e, t;
return "undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange") :"undefined" != typeof document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") :"undefined" != typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") :"undefined" != typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), _r_(e && t ? {
hidden:e,
visibilityChange:t
} :null);
}
function n() {
_i_("18c:598"), e.fn.bindFirst || (e.fn.bindFirst = function() {
_i_("18c:1844");
var t = Array.prototype.slice.call(arguments);
if (t.length > 1) return e.fn.bind.apply(this, arguments), i.call(this, t[0]), _r_(this);
function i(t) {
_i_("18c:2077");
var i, n = t.split(".")[0], r = "function" == typeof e._data ? e._data(this, "events") :e(this).data("events");
r && (i = r[n], i && i.length > 1 && i.unshift(i.pop())), _r_();
}
_r_();
}), _r_();
}
return _r_({
init:t
});
}(), B.define("font-face-on-load", function(e, t, i) {
"use strict";
_i_("18c:203");
var n = e("jquery"), r = B.debug("font-face-on-load"), o = "AxmTYklsjo190QW", a = "sans-serif", s = "serif", _ = {
normal:"400",
bold:"700"
}, c = {
tolerance:2,
delay:100,
glyphs:"",
success:function() {},
error:function() {},
timeout:5e3,
weight:"400",
style:"normal"
}, l = [ "display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap" ], u = '<div style="%s">' + o + "</div>";
function d() {
_i_("18c:522"), this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {}, _r_();
}
d.prototype.getMeasurements = function() {
return _i_("18c:837"), _r_({
sansSerif:{
width:this.sansSerif.offsetWidth,
height:this.sansSerif.offsetHeight
},
serif:{
width:this.serif.offsetWidth,
height:this.serif.offsetHeight
}
});
}, d.prototype.load = function() {
_i_("18c:838");
var e, t = new Date(), i = this, n = i.serif, o = i.sansSerif, _ = i.parent, c = i.appended, d = this.options, h = d.reference;
function p(e) {
return _i_("18c:1359"), _r_(l.concat([ "font-weight:" + d.weight, "font-style:" + d.style ]).concat("font-family:" + e).join(";"));
}
var f = u.replace(/\%s/, p(a)), g = u.replace(/\%s/, p(s));
_ || (_ = i.parent = document.createElement("div")), _.innerHTML = f + g, o = i.sansSerif = _.firstChild, n = i.serif = o.nextSibling, d.glyphs && (o.innerHTML += d.glyphs, n.innerHTML += d.glyphs);
function m(e, t, i) {
return _i_("18c:1360"), _r_(Math.abs(e.width - t.offsetWidth) > i || Math.abs(e.height - t.offsetHeight) > i);
}
function v() {
return _i_("18c:1361"), _r_(new Date().getTime() - t.getTime() > d.timeout);
}
!function b() {
_i_("18c:1746"), h || (h = document.body), !c && h && (h.appendChild(_), c = i.appended = !0, e = i.getMeasurements(), o.style.fontFamily = i.fontFamily + ", " + a, n.style.fontFamily = i.fontFamily + ", " + s), c && e && (m(e.sansSerif, o, d.tolerance) || m(e.serif, n, d.tolerance)) ? (r.log(i.fontFamily + " font loaded"), d.success()) :v() ? (r.error(i.fontFamily + " font loading timed out"), d.error()) :!c && "requestAnimationFrame" in window ? window.requestAnimationFrame(b) :window.setTimeout(b, d.delay), _r_();
}(), _r_();
}, d.prototype.checkFontFaces = function(e) {
_i_("18c:839");
var t = this;
document.fonts.forEach(function(i) {
_i_("18c:1747"), i.family.toLowerCase() === t.fontFamily.toLowerCase() && (_[i.weight] || i.weight) === "" + t.options.weight && i.style === t.options.style && i.load().then(function() {
_i_("18c:2265"), r.log(t.fontFamily + " font loaded"), t.options.success(), window.clearTimeout(e), _r_();
}), _r_();
}), _r_();
}, d.prototype.init = function(e, t) {
_i_("18c:840");
var i;
for (var o in c) t.hasOwnProperty(o) || (t[o] = c[o]);
this.options = t, this.fontFamily = e, !t.glyphs && "fonts" in document && "function" == typeof document.fonts.forEach ? (t.timeout && (i = window.setTimeout(n.proxy(function() {
_i_("18c:2266"), r.error(this.fontFamily + " font loading timed out"), t.error(), _r_();
}, this), t.timeout)), this.checkFontFaces(i)) :this.load(), _r_();
};
function h(e, t) {
_i_("18c:523");
var i = new d();
return i.init(e, t), _r_(i);
}
i.exports = h, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("18c:204");
var t = e("font-face-on-load"), i = {
woff:"//q.bstatic.com/static/css/fonticons_clean/base64/woff/5d61b8a7156073e5e3e9741f65dda44ae3eef7d2.css",
opentype:"//q.bstatic.com/static/css/fonticons_clean/base64/opentype/379fae32e03d316d4fa8a000bd53978baa8de48a.css",
truetype:"//r.bstatic.com/static/css/fonticons_clean/base64/truetype/789d396d92f96569dc6900688e31505670801b0e.css"
}, n = function() {
_i_("18c:841"), $("body").removeClass("iconfont_is_loading"), _r_();
}, r = function() {
if (_i_("18c:842"), "msie" == B.env.b_browser) return _r_("opentype");
if ("safari" == B.env.b_browser && B.env.b_browser <= 5) return _r_("truetype");
if ("android" == B.env.b_browser && B.env.b_browser_version <= 4.4) return _r_("truetype");
return _r_("woff");
}, o = function() {
_i_("18c:843");
var e = r();
return _r_(i[e]);
}, a = function() {
_i_("18c:844");
var e = o(), t = document.createElement("link");
t.type = "text/css", t.rel = "stylesheet", t.href = e;
var i = document.createElement("img");
i.onerror = function() {
_i_("18c:1748"), n(), _r_();
}, i.src = e, document.getElementsByTagName("head")[0].appendChild(t), _r_();
}, s = function() {
_i_("18c:845"), n(), _r_();
}, _ = function() {
_i_("18c:846"), a(), _r_();
};
t("booking-iconset", {
success:s,
error:_,
timeout:250
}), _r_();
}), B.define("profile/social/social-connect/social-connect", function(e, t, i) {
"use strict";
_i_("18c:205"), i.exports = {
getEnv:function() {
return _i_("18c:1362"), _r_(booking.env["social-connect"]);
},
findPendingState:function() {
return _i_("18c:1363"), _r_(this.getEnv().filter(function(e) {
return _i_("18c:2078"), _r_(/_REQUIRED|_CONFLICT|_EXISTING/.test(e.state));
})[0]);
},
clearState:function(e) {
_i_("18c:1364"), $.get("/update_facebook_connect_state", {
action:"clear_state",
state:e.state,
provider:e.provider
}), _r_();
}
}, _r_();
}), B.define("profile/social/social-connect-dialogs/social-connect-dialogs", function(e, t, i) {
"use strict";
_i_("18c:206");
var n = e("profile/social/social-connect/social-connect");
i.exports = {
support:{
MERGE_REQUIRED:"merge-required",
EMAIL_REQUIRED:"email-required",
EMAIL_CONFLICT:"email-conflict",
EMAIL_EXISTING:"email-existing",
CONNECTED:void 0
},
onload:function() {
_i_("18c:1365");
var e = n.findPendingState();
e && this.show(e), _r_();
},
selector:function(e) {
return _i_("18c:1366"), _r_(".js-social-connect-dialog--" + e.provider + "-" + this.support[e.state]);
},
show:function(e) {
_i_("18c:1367");
var t = $(this.selector(e));
if (0 === t.length) return _r_();
booking.lightbox.show(t, {
hideCallBack:n.clearState.bind(n, e),
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}
}, _r_();
}), B.when({
condition:B.env.b_run_social_connect,
events:"ready"
}).run(function() {
_i_("18c:207"), B.require("profile/social/social-connect-dialogs/social-connect-dialogs").onload(), _r_();
}), B.when({
language:"ja",
hover:"350ms .d-deal-b",
experiment:"YdVcRQZBESaTfQHZKe",
stage:1
}), B.when({
events:"ready",
experiment:"PVSfZFCPdaIFPXe",
condition:$("body").hasClass("sb_advanced_search")
}).run(function() {
_i_("18c:208");
var e = $("#searchboxInc #frm"), t = $(".b-form__booker-type", e), i = $(".group-groupsearch", e), n = $(".genius--white-yellow", e), r = $(".b-form-number-of-nights", e), o = $('<span class="advanced_link"> <b>' + B.jstmpl.translations("sbox_more_search_options_toggle") + "</b></span>"), a = $('<i class="bicon-upchevron"></i>'), s = $('<i class="bicon-downchevron"></i>', e);
e && e.length > 0 && (t.hide(), i.hide(), n.hide(), r.after(o), o.prepend(a).prepend(s), o.click(function() {
_i_("18c:1368"), B.et.customGoal("PVSfZFCPdaIFPXe", 1), t.toggle(), i.toggle(), n.toggle(), a.toggle(), s.toggle(), _r_();
})), _r_();
}), B.when({
events:"ready",
condition:B.env.b_genius_user && $("body").hasClass("sb_can_have_advanced_search")
}).run(function() {
_i_("18c:209"), B.et.stage("PVSfZFCPdaIFPXe", 1), _r_();
}), $(function() {
"use strict";
_i_("18c:210");
var e, t = B.require("jquery"), i = "vpmss";
if (t(window).on("resize", function() {
_i_("18c:847"), e && clearTimeout(e), e = setTimeout(function() {
_i_("18c:1845"), t.cookie(i, null), _r_();
}, 2e3), _r_();
}), t.cookie(i)) return _r_();
if (!B.env.vpm_log_screen_size) return _r_();
setTimeout(function() {
_i_("18c:848");
var e = t(window), r = parseInt(e.width(), 10), o = parseInt(e.height(), 10);
if (!n(r) || !n(o)) return _r_();
t.post("/vpmlogdesktopscreensize", {
width:r,
height:o
}), t.cookie(i, 1, {
expires:31,
path:"/"
}), _r_();
}, 5);
function n(e) {
return _i_("18c:524"), _r_(!isNaN(e) && isFinite(e) && e > 0);
}
_r_();
}), booking[sNSExperiments].cQHHMVHSGFO = function(e, t) {
_i_("18c:276");
var i, n, r = e(".book-challenge__stamp--current"), o = e(".book-challenge__message"), a = e(".book-challenge__message-inner"), s = a.html();
function _() {
if (_i_("18c:599"), e(".book-challenge__stamp--booked").on("mouseenter", function() {
_i_("18c:1553");
var t = e(this);
n = t.index() + 1, i && clearInterval(i);
var s = t.data("progMsg");
o.addClass("book-challenge__message__arrow--stamp" + n), r.removeClass("book-challenge__stamp--current"), a.addClass("book-challenge__message-hover"), s && a.html(s), _r_();
}), e(".js-genius-trial-desktop---show-challange").on("click", function() {
_i_("18c:1554"), e(".genius-trial-desktop--wrapper").toggleClass("genius-trial-desktop--ch-open"), e(".book-challenge").toggleClass("genius-trial-desktop-shown"), e(".genius-trial-desktop--challenge-info").toggleClass("ge-yellow-border"), e(".book-challenge").toggleClass("ge-yellow-border"), _r_();
}), e(".js-genius-trial-desktop--lightbox").length) {
var _ = t.components.require("ge-lightbox");
_.setup({
element:".js-genius-trial-desktop--lightbox",
template:"ge_about_lightbox",
data:{
b_genius_user:t.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:t.env.b_reg_user_qualify_genius_challenge || {}
}
});
}
if (e(".book-challenge__stamp--booked").on("mouseleave", function() {
_i_("18c:1555"), o.removeClass("book-challenge__message__arrow--stamp" + n), i = setTimeout(function() {
_i_("18c:2172"), r.addClass("book-challenge__stamp--current"), a.removeClass("book-challenge__message-hover"), a.html(s), _r_();
}, 100), _r_();
}), e(".ge_challenge_cta").length) {
var c = t.components.require("ge-lightbox");
c.setup({
element:".ge_challenge_cta",
template:"ge_about_lightbox",
data:{
b_genius_user:t.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:t.env.b_reg_user_qualify_genius_challenge || {},
b_action:t.env.b_action,
b_china_new_ge_challenge:e(".book-challenge").data("china_new_genius_chanllenge")
}
});
}
_r_();
}
return _r_({
init:_
});
}(jQuery, booking), B.when({
condition:$(".ge_challenge_cta").length,
experiment:"cQHHMVHSGSOOMLUCDbRT"
}).run(function(e) {
_i_("18c:211");
var t = e("jquery");
t(".ge_challenge_cta").click(function(e) {
_i_("18c:849"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_user_genius_status && parseInt(B.env.b_user_genius_status.is_genius_plus)
}).run(function() {
if (_i_("18c:212"), $("#genius-plus-progress-bar").length) {
var e = $("#genius-plus-progress-cont").data("days"), t = e / 365 * 100, i = $("#genius-plus-progress-bar"), n = i.attr("r"), r = Math.PI * (2 * n);
0 > t && (t = 0), t > 100 && (t = 100);
var o = (100 - t) / 100 * r;
i.css({
strokeDashoffset:o
});
}
var a = $("#js-ge-open-tier-lighbox");
a.length && a.on("click", function(e) {
_i_("18c:1369"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_perks_lightbox",
data:{
first_name:B.env.b_genius_user.first_name || "Genius",
plus_end_date:B.env.b_user_genius_status.plus_end_date
}
}), _r_();
});
var s = $("#js-ge-lonely-planet-lighbox");
s.length && s.on("click", function(e) {
_i_("18c:1370"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_lonely_planet_lightbox",
data:{}
}), _r_();
}), _r_();
}), booking.jstmpl("geIndexSavingsLightbox", function() {
_i_("18c:277");
var e = [ '\n    <h2 class="ge-savings-index-lb__title">Your Genius savings</h2>\n    <p class="ge-savings-index-lb__desc">\n        This is all the money that you’ve saved on your bookings thanks to your Genius 10% discount. <a href="#">What is Genius?</a>\n    </p>\n\n    <table class="ge-savings-index-lb__table">\n        <thead>\n            <tr>\n                <th>Booking</th>\n                <th>Savings</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><a href="#">Select Hotel</a> <span>for 2 nights</span></td>\n                <td>€12.53</td>\n            </tr>\n            <tr>\n                <td><span>Your total savings</span></td>\n                <td><strong>€87.71</strong></td>\n            </tr>\n        </tbody>\n    </table>\n\n    <p class="ge-savings-index-lb__disclaimer">\n        *All rates have been converted to your local currency (using the current exchange rates) to make these calculations.\n    </p>\n' ];
return _r_(function(t) {
_i_("18c:850");
var i = "";
this.fn;
return i += e[0], _r_(i);
});
}()), B.when({
condition:"www" === B.env.b_site_type,
events:"ready"
}).run(function() {
if (_i_("18c:213"), !$(".ge-savings-index__link").length) return _r_();
var e = B.components.require("ge-lightbox");
e.setup({
element:".ge-savings-index__link",
template:"geIndexSavingsLightbox",
wrapperClassName:"ge-savings-index-lb",
data:{
b_genius_user:B.env.b_genius_user || {}
}
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type,
events:"ready"
}).run(function() {
_i_("18c:214"), setTimeout(function() {
_i_("18c:851"), $(".ge-onboarding-index__timeline").addClass("animate"), _r_();
}, 100), _r_();
}), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDWe"
}), setTimeout(function() {
_i_("18c:215"), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDZSAcQeKe",
stage:1
}), _r_();
}, 1e3), function() {
_i_("18c:216");
var e = function(e) {
return _i_("18c:852"), _r_(e);
}, t = e.bind(B);
0 === t.length && B.et.stage("cDZRVCScTeKBWRCeNPaIeMNATYUAC", 1), _r_();
}(), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("18c:217");
var t = e("jquery"), i = B.components.require("ge-lightbox");
t(document).on("click", '[data-ge-id="js_user_menu_ge_lb_link"]', function(e) {
_i_("18c:853"), e.preventDefault(), i.open({
template:"ge_about_lightbox_v2",
data:{
b_genius_user:B.env.b_genius_user || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("18c:218");
var t = e("jquery"), i = t("#genius100k"), n = t("#genius100k-placeholder"), r = B.browserStorageHandler, o = t(".theme_index").length;
if (!r) return _r_();
function a() {
_i_("18c:525");
var e = n.offset().top + (o ? 0 :50);
i.css("top", e), _r_();
}
if (i.length) {
var s = B.components.require("ge-lightbox"), _ = r.getPermanentValue("genius_100k_hidden");
_ || (n.show(), i.show(), i.on("click", function(e) {
_i_("18c:1749"), s.open({
template:"ge_100k_lighbox",
data:{
b_genius_user:B.env.b_genius_user || {}
},
wrapperClassName:"ge-about-lightbox-wrapper ge-100k-lightbox-wrapper",
onOpen:function() {
_i_("18c:2267"), t(".ge-100k-lightbox-action").click(function() {
_i_("18c:2336"), B.et.customGoal("cQZfdPSOBYcDHET", 2), r.addPermanentValue("genius_100k_hidden", 1), i.hide(), n.hide(), _r_();
}), _r_();
}
}), e.preventDefault(), B.et.customGoal("cQZfdPSOBYcDHET", 1), _r_();
}), t(window).on("resize", a), setTimeout(a, 1e3));
}
_r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius && $(".js-ge-open-trial-lighbox").length
}).run(function() {
_i_("18c:219");
var e = B.components.require("ge-lightbox");
function t() {
_i_("18c:526"), $.ajax({
type:"post",
url:"/genius_trial_lightbox_seen?campaign_id=" + B.env.ge_trial_campaign_id,
data:{}
}), _r_();
}
B.env.show_ge_trial_lighbox_onload && setTimeout(function() {
_i_("18c:1371"), e.open({
template:"ge_genius_week_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
},
onOpen:function() {
_i_("18c:2173"), t(), _r_();
}
}), _r_();
}, 1500), $(document).on("click", ".js-ge-open-trial-lighbox", function(t) {
_i_("18c:854"), t.preventDefault(), B.et.customGoal("cQZWeAQPDHCOLcO", 1), e.open({
template:"ge_genius_week_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
}
}), _r_();
}), $(document).on("click", "#js_close_trial_lightbox", function() {
return _i_("18c:855"), B.lightbox.hide(), _r_(!1);
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("18c:220");
var t = e("jquery"), i = t("#ge_genius_rate"), n = B.browserStorageHandler;
if (!n) return _r_();
var r = n.getPermanentValue("genius_search_checkbox_checked");
if (r || !i.length) return _r_();
B.et.track("TAeKPWbAcBePNNFQTXWDTWOdMWe") ? i.on("change", function() {
_i_("18c:1372"), n.addPermanentValue("genius_search_checkbox_checked", 1), _r_();
}) :B.et.track("cQZVDZOKZdKNWYKe") && i.prop("checked", !0).on("change", function() {
_i_("18c:1750"), n.addPermanentValue("genius_search_checkbox_checked", 1), _r_();
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius,
action:"hotel",
events:"ready"
}).run(function() {
if (_i_("18c:221"), !$(".genius-rate-block").length) return _r_();
booking.eventEmitter.bind("growl:show", function(e, t) {
_i_("18c:856"), t.type = "" + t.type, ("genius-hp-message" === t.type || ~t.type.indexOf("users-track-js")) && B.et.stage("cQPZZRRDVBLcVT", 1), _r_();
}), _r_();
}), B.when({
condition:$('li.uc-notification[data-type="genius_challenge_reminder"] a').length,
experiment:"cQZaTaTaBMKWMAcQHPbPELXVC"
}).run(function(e) {
_i_("18c:222");
var t = e("jquery");
t('li.uc-notification[data-type="genius_challenge_reminder"] a').click(function(e) {
_i_("18c:857"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_reg_user_qualify_genius_challenge,
events:"header:notifications:shown",
experiment:"cQZaTaTaBMKWMAcQHPbPELXVC",
stage:2
}), B.when({
events:"ready",
condition:B.env.b_show_all_inclusive_switch
}).run(function(e) {
"use strict";
_i_("18c:223");
var t = e("events"), i = e("et"), n = "eDUfBDJFHVPDbJXEYHKe", r = $(".b-form__booker-type input[name=sb_travel_purpose]"), o = $(".b-form__price-options");
r.on("change", function() {
_i_("18c:858");
var e = $(this), i = e.val();
t.emit("sb_travel_purpose_changed_to_" + i), _r_();
}), t.on("sb_travel_purpose_changed_to_leisure", function() {
_i_("18c:859"), i.stage(n, 1), i.track(n) && o.removeClass("hidden"), _r_();
}), t.on("sb_travel_purpose_changed_to_business", function() {
_i_("18c:860"), i.track(n) && o.addClass("hidden"), _r_();
}), r.filter("[value=leisure]").is(":checked") && i.stage(n, 1), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("18c:224");
var r = "TNHQRXLDTJRPRSPaEHfXQWBBO", o = e.et, a = e.env, s = e.browserStorageHandler, _ = "www" === a.b_site_type, c = "t_touch_events_v4", l = c + "___touchSupport", u = c + "___preferTouch";
e.when({
condition:_ && s,
events:"ready"
}).run(function() {
_i_("18c:861");
var n = e.require("jquery"), _ = e.require("lightbox");
if (!a.b_bookings_owned) return _r_();
if (!s.isLocalStorageSupported()) return o.customGoal(r, 5), _r_();
if (s.deletePermanentValue("t_touch_events___touchSupport"), s.deletePermanentValue("t_touch_events___preferTouch"), s.deletePermanentValue("t_touch_events_v2___touchSupport"), s.deletePermanentValue("t_touch_events_v2___preferTouch"), s.deletePermanentValue("t_touch_events_v3___touchSupport"), s.deletePermanentValue("t_touch_events_v3___preferTouch"), !n("#footertopnav").length && !n("#footernav").length) return _r_();
if (!o.track(r)) return s.deletePermanentValue(l), s.deletePermanentValue(u), _r_();
function c() {
_i_("18c:1373"), n("#preferred_site_type_link").removeClass("g-hidden"), _r_();
}
function d() {
_i_("18c:1374"), n(i).on("click", ".touch-confirm__button--submit", function() {
_i_("18c:2003"), s.addPermanentValue(u, "1"), _r_();
}), n(i).on("click", ".touch-confirm__button--cancel", function() {
_i_("18c:2004"), _.hide(), _r_();
}), t.setTimeout(function() {
_i_("18c:2005"), _.show(n("#preferred_site_type_lightbox"), {
customWrapperClassName:"touch-confirm",
hideCallBack:function() {
_i_("18c:2314"), s.addPermanentValue(u, "0"), c(), o.customGoal(r, 3), _r_();
}
}), _r_();
}, 250), _r_();
}
function h() {
return _i_("18c:1375"), _r_(/^(index|hotel|searchresults|airport|city|country|district|landmark|region)$/.test(a.b_action));
}
function p() {
_i_("18c:1376"), o.stage(r, 1), 2 === o.track(r) && d(), _r_();
}
function f(e) {
_i_("18c:1377"), s.addPermanentValue(l, "1"), v(), e.closest('button[type="submit"], a[href]').length || p(), _r_();
}
function g(e) {
_i_("18c:1378");
var t = n(e.target);
if (!h()) return _r_();
"touchstart" === e.type ? f(t) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType) && f(t), _r_();
}
function m() {
_i_("18c:1379"), n(t).on("touchstart pointermove MSPointerMove", g), _r_();
}
function v() {
_i_("18c:1380"), n(t).off("touchstart pointermove MSPointerMove", g), _r_();
}
"1" === s.getPermanentValue(l) ? s.getPermanentValue(u) ? "0" === s.getPermanentValue(u) && c() :h() ? p() :(s.deletePermanentValue(l), m()) :m(), _r_();
}), _r_();
}(window.booking, window, document), function(e, t, i, n) {
"use strict";
_i_("18c:225"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
_i_("18c:862");
var t = e.require("jquery");
if (e.env.b_bookings_owned && 2 === e.et.track("TNHQRXLDTJRPRSPaEHfXQWBBO")) {
var i = t(".touch-version-message");
i.on("click pointerdown MSPointerDown", function() {
_i_("18c:2006"), i.remove(), _r_();
});
}
_r_();
}), _r_();
}(window.booking, window, document), B.when({
action:"index",
events:"ready",
experiment:"ZLLfICXWAWTCUZZCCQBC"
}).run(function(e) {
_i_("18c:226");
var t = e("jquery");
t(".dsf_entry_city").on("click", function() {
_i_("18c:863"), B.et.customGoal("ZLLfICXWAWTCUZZCCQBC", 1), _r_();
}), _r_();
});

try {
document.querySelector && "transition" in document.body.style && localStorage && (document.onreadystatechange = function() {
if (_i_("18c:864"), "interactive" === document.readyState) {
var e = document.querySelector(".booking-yeah-logo-animated");
if (e) {
function t(e) {
if (_i_("18c:2007"), !e.querySelector("img[data-src]")) {
var t = localStorage.getItem("bookingYeahPlay");
t = t ? t.split(",") :[], t.length > 0 && Date.now() - t[t.length - 1] > 864e5 && (t = []), t.length < 2 ? (t.push(Date.now()), localStorage.setItem("bookingYeahPlay", t), e.removeAttribute("hidden"), e.previousElementSibling.style.display = "none", e.addEventListener("animationend", function() {
_i_("18c:2337"), this.removeEventListener("animationend", arguments.callee), this.previousElementSibling.style.display = "", this.parentNode.removeChild(this), _r_();
})) :e.parentNode.removeChild(e);
}
_r_();
}
for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) i[n].onload = function() {
_i_("18c:2268"), this.removeAttribute("data-src"), t(e), _r_();
}, i[n].src = i[n].dataset.src;
}
B.et.stage("loc_us_animated_booking_yeah_logo", 1);
}
_r_();
});
} catch (e) {}

B.when({
experiment:"BffIEcEUXPNMPOHET",
condition:B.env.auth_level > 0,
events:"load"
}).require([ "jquery", "header/notifications/notifications" ], function(e, t) {
_i_("18c:227");
function i(t) {
_i_("18c:527"), e(".uc-notifications-group__messenger").height(t), _r_();
}
function n(i) {
_i_("18c:528"), e(".uc-notifications-group__messenger").data("unread-count", i), t.refresh(), _r_();
}
window.addEventListener("message", function(e) {
if (_i_("18c:865"), !e) return _r_();
if (!e.data) return _r_();
if (e.data.indexOf("notifications-height:") > -1) {
var t = parseInt(e.data.replace("notifications-height:", ""), 10);
isNaN(t) || i(t);
} else if (e.data.indexOf("notifications-unread-count:") > -1) {
var r = parseInt(e.data.replace("notifications-unread-count:", ""), 10);
isNaN(r) || n(r);
}
_r_();
}), B.eventEmitter.bind("uc_popover_showed", function(t, i) {
if (_i_("18c:866"), !i || !i.id || "notifications" !== i.id) return _r_();
var n = e(".uc-notifications__messenger").get(0);
if (!n || !n.contentWindow) return _r_();
n.contentWindow.postMessage("you-are-visible", n.src), _r_();
}), _r_();
}), B.when({
action:"index",
events:"ready"
}).run(function() {
"use strict";
_i_("18c:228");
var e = $("body"), t = "TAeKPJNOdYUOZIILZHe", i = "has_ultra_focus", n = B.require("search/searchbox/searchbox-sticky-controller").getController(), r = B.require("et");
$(".sb-date-picker, .sb-date-input__display, .sb-searchbox__outer, .sb_duo_dsf_wrapper, .sb_duo_nav").on("click", o), n.on("show", a), $(".sb_ultra_focus_overlay").on("click", a);
function o(n) {
_i_("18c:529");
var o = e.hasClass(i), a = $(n.target);
if (o) return _r_();
if (a.closest(".sb-searchbox-sticky").length) return r.stage(t, 2), _r_();
if (r.stage(t, 1), !r.track("TAeKPJNOdYUOZIILZHe")) return _r_();
e.addClass(i), _r_();
}
function a(n) {
_i_("18c:530");
var o = e.hasClass(i);
if (!o) return _r_();
if (!r.track("TAeKPJNOdYUOZIILZHe")) return _r_();
n && n.target && $(n.target).closest(".sb_ultra_focus_overlay").length && r.customGoal(t, 2), r.customGoal(t, 1), e.removeClass(i), _r_();
}
_r_();
}), B.when({
events:"click [data-dateselector-monthyear]",
condition:"www" == B.env.b_site_type,
experiment:"PVSfZfMGYSEETUC",
stage:2
}).run(function() {
_i_("18c:229"), B.env.fe_search_spain && B.et.stage(this.hash, 3), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("18c:230"), e.when({
condition:"www" === e.env.b_site_type && ("index" === e.env.b_action || "hotel" === e.env.b_action || "searchresults" === e.env.b_action),
events:"ready"
}).run(function(t) {
_i_("18c:867");
var i = t("jquery"), n = i("body"), r = "touchstart MSPointerDown pointerdown";
function o(t) {
_i_("18c:1381"), (t.type && "touchstart" === t.type || t.originalEvent.pointerType && ("touch" === t.originalEvent.pointerType || "pen" === t.originalEvent.pointerType)) && e.et.stage("PYHIeAKDKVIFAdKWOMTXEUDae", 1), n.off(r, o), _r_();
}
n.on(r, o), _r_();
}), _r_();
}(window.booking, window, document), $(function() {
"use strict";
_i_("18c:231");
var e = "fTbYZYTXSC";
if (!B.et.track(e)) return _r_();
var t = B.debug(e), i = window.ttiStats;
if (!i) return _r_();
t.log("init");
function n(e) {
_i_("18c:531"), i[e] ? r(e) :$(document).one(e, function() {
_i_("18c:1751"), setTimeout(function() {
_i_("18c:2174"), r(e), _r_();
}, 100), _r_();
}), _r_();
}
function r(e) {
if (_i_("18c:532"), window.ga) {
var n = i[e];
t.log(e, n), ga("send", "timing", "Time To Interact", e, n, B.env.b_action);
}
_r_();
}
n("click"), n("scroll"), _r_();
}), B.when({
condition:B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame
}).run(function() {
"use strict";
_i_("18c:232"), B.et.stage("EKCcHSCLWCWUbHTXWCPGEbfC", 1);
var e = B.debug("fps"), t = 200, i = {}, n = 0;
function r(t) {
_i_("18c:533");
var r = Math.min(t, 60), o = Math.floor(performance.now() / 6e4);
if (n !== o && 0 === n && (e.log("reset"), i = {}, n = o), e.log(t, r, o), r in i) return _r_();
i[r] = !0, 1 > o ? (e.log("js_scroll_fps_1st_minute", r), B.et.goalWithValue("js_scroll_fps_1st_minute", r)) :(e.log("js_scroll_fps", r), B.et.goalWithValue("js_scroll_fps", r)), _r_();
}
var o;
function a() {
_i_("18c:534");
var e = performance.now(), t = 0;
o = !1;
var i = function() {
if (_i_("18c:1382"), t++, o) {
var n = performance.now(), a = Math.round(1e3 * t / (n - e));
r(a);
} else requestAnimationFrame(i);
_r_();
};
requestAnimationFrame(i), _r_();
}
var s;
function _() {
_i_("18c:535"), s = void 0, o = !0, _r_();
}
window.addEventListener("scroll", function() {
_i_("18c:868"), s ? clearTimeout(s) :a(), s = setTimeout(_, t), _r_();
}, {
passive:!0
}), _r_();
}), B.eventEmitter.on("user_access_menu_login_tab user_access_menu_register_tab", function(e) {
_i_("18c:233");
var t = "YdVPYKDcdDVfdBNeURJLNFET", i = "user_access_menu_register_tab" === e.type ? "up" :"in", n = $("a.social-connect-button--facebook"), r = $("a.social-connect-button--google");
if (!n.length && !r.length) return _r_();
if (B.et.stage(t, 1), !B.et.track(t)) return _r_();
n.text(B.jstmpl.translations("loc_social_connect_facebook_sign_" + i)), r.text(B.jstmpl.translations("loc_social_connect_google_sign_" + i)), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("18c:234");
var r = "PYWIGJDFHQWXXdVLYGGIPKEePSbMC";
e.when({
condition:"tdot" === e.env.b_site_type && !e.env.b_is_ipad,
events:"ready"
}).run(function() {
_i_("18c:869");
var t = e.require("jquery");
e.et.track(r) ? t("#b_nav_language, #b_nav_currency").on(e.env.pointer_events.pointerdown, function() {
_i_("18c:2008"), e.et.stage(r, 1), _r_();
}) :t("#header_currency, #header_language").on(e.env.pointer_events.pointerdown, function() {
_i_("18c:2009"), e.et.stage(r, 1), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.define("component/core/number-input-spinner", [ "component" ], function(e) {
return _i_("18c:235"), _r_(e.extend({
init:function() {
_i_("18c:1383");
var e = this.$el.find("[data-input]"), t = this.$el.attr("data-max-value"), i = this.$el.attr("data-min-value"), n = this.$el.find("[data-increment]"), r = this.$el.find("[data-decrement]");
n.bind("click", function(i) {
_i_("18c:2010");
var n = parseInt(e.val(), 10);
if (n >= t) return _r_();
n += 1, e.val(n), e.trigger("change"), _r_();
}), r.bind("click", function(t) {
_i_("18c:2011");
var n = parseInt(e.val(), 10);
if (i >= n) return _r_();
n -= 1, e.val(n), e.trigger("change"), _r_();
}), _r_();
}
}));
}), $(function() {
if (_i_("18c:236"), !B.env) return _r_();
var e = "GCaRZEGcCSRPLSGSZKe";
switch (B.env.b_site_type) {
case "www":
case "villas":
B.et.stage(e, 1);
break;

case "tdot":
B.et.stage(e, 2);
break;

case "mdot":
B.et.stage(e, 3);
}
_r_();
}), B.define("component/villas-redirect-msg", function(e, t, i) {
_i_("18c:237");
var n = e("component"), r = B.env.b_is_tdot_traffic ? B[sNSStartup].lightbox :e("lightbox"), o = e("jquery");
i.exports = n.extend({
init:function() {
_i_("18c:1556"), o.cookie("villas_redirect_msg_seen") || (r.show(o(".villas-redirect-msg"), {
opacity:.7,
autoWidth:!0
}), o.cookie("villas_redirect_msg_seen", 1, {
path:"/"
})), _r_();
}
}), _r_();
}), function() {
_i_("18c:238");
var e = "#b_confirmation_body h1|.conf_wide_reassurance h1|.newsletter_selection_header .blurb|.pb_onboarding-modal__title--success|.pb-onboarding__btn|.pb-onboarding__btn--link|.conf-btn--print|.mb-tooltip-submenu .mb-conf-print__link|#b_confirmation_body .mybooking-block-sticky--header|.conf_restructured_content #b_confirmation_body .mybooking-block-sticky--header|.conf_aside h1|#b_confirmation_body .skiset-conf--title|.conf-carded h1#b_conf_thanks|.conf-carded #b_confirmation_body h1|.conf-carded .mybooking-block__header|.conf-carded.conf_wide_reassurance h1|.gta_qr_block|.mb-gta_qr_block|.pc-gta_qr_block|#mb-gta-open-lb|#confirmation_lightbox_app_download_content h1|.genius-plus-block-text .genius-plus-buttons-list .genius-plus-button.genius-plus-lonely-planet-button i|.ubutler__genius-exclusive p|.pass-activator__subtext|#doc .pass-activator__subtext|#b_confirmation_body .pass-activator__subtext|.genius-extended-module|.genius-extended-module .ge-discount-rate|.hotellist a.sr_hotel_preview_track span|.sr-group_recommendation .sr_gr_extrabed_free|.bbtlp-redesign__row--jumbo__signup|.company-signup__input|.company-signup__button--primary|.bbtlp-redesign__row__learn-more__text|.bbtlp-redesign__row--jumbo__title|.cgt_df_scan-qr-code-to-continue p|.cgt_df_membership-rewards h2|.cgt_df_membership-rewards ul li p|.loyalty__section.header .loyalty__section__subhead|.bbt-rewards-card__number|.bbt-rewards-card__label|.bbt-rewards-card__name|.bbt-rewards-card--history .bbt-rewards-card__number|.deal-card-property-rating|.deal-card-property-rating.estimated-rating|.dsf_city_intro__action|.dsf_city_intro__title|.dsf_city_intro__descr|.dsf-path|.dsf-stat|.dsf-card__title|.dsf-card__tag|.dsf-review-snippet__rate-text|.dsf-review-snippet__text|.dsf-review-snippet__author|.dsf-review-snippet__country|.dsf-review-snippet__date|.attraction--name|.attraction--type|.attraction--rating|.attraction--traveller__review-date|.attraction--traveller__review|a.attraction--call-to-action|.attraction--address|.dsf_card__rank|.navbar-fixed-top h1|.quick-view__overlay .quick-view__button .b-button__text|body.new_genius_branding #user_form .genius_user_box_update .header_name|body.new_genius_branding #user_form .popover_content .user_info li a|body.new_genius_branding #user_form .bbtool_no_genius .header_name|.wl_select .actions .save_wl|.wl-select-save .save_wl|.wl_modal_btn|.user_imported_faves_new|.wishlist-list-item-new-badge|.ge-slogan|.ge-features p|.ge-pa-branded-title|.ge-pa-signup|.genius-tagline|.ge-pa-about__details h2|.ge-pa-benefits h3|.ge-signup-title|#genius-partner .ge-pa-floor.ge-pa-response|#genius-partner *|#genius-partner|.floor.ge-big-photo-room p.ge-photo-headline|.floor.ge-big-photo-hotel p.ge-photo-headline|.floor.ge-big-photo.ge-big-photo-hotel p.ge-exclusive-tagline|.floor.ge-big-photo p.ge-hotel-title|.genius-landing-new h1|.genius-landing-new h2|.genius-landing-new h3|.genius-landing-new h4|.genius-landing-new h5|.genius-landing-new h6|.floor.ge-features|.floor.ge-separator-1|.floor.ge-how|.floor.ge-separator-2|.floor.ge-big-photo p.ge-photo-headline|.floor.ge-separator-1 p|.floor.ge-separator-2 p|.floor.ge-how p|h2.ge-slogan|div.ge-product-page-search|.ge-search-header-copy p|.ge-sc-header-secondary-copy|.lang_is_rtl .ge-sc-header-secondary-copy|.ge-sc-genius-slogan|.lang_is_rtl .ge-sc-genius-slogan|.floor.ge-trial-header .ge-slogan|.ge-footer .ge-slogan|.gt__gta__description|.genius-week-lightbox-header .genius-week-headline|.pr2_bg p|.pr2_bg span|.postcard .pc_count_nha|.postcard .pc_count|.now-box .lnk-now-cta|a.review_cta_button|a.review_cta_button_rtl|a.raf_cta_button|a.genius_cta_button|.hotel-card--price-old|.hotel-card--price-new|.main .header|.main_top .header|.pr_recommended_destination_new .photo_overlay a p span|.ugc-header-content|.ge-about-lightbox-container .ge-slogan|.aaa_rate|td.roomPrice .aaa_rate|.wl-btn-blue-bs|body.lv .inputWidget p|body.es .inputWidget p|.wl252-modal__title--success|.has_js_popup .but input[type=submit]|.has_js_popup #close a|.hotel-has-24h-frontdesk|.b_hotel_price_info-wide .b_was|.lt div.b_price|.b_price|h1#page_title|.full_width #b_sr_context_metadata form select|.tooltip|.popover|.submit .but input|.pbmap-poi-group__header|h1.specials|.settings-password|.onboarding_header h1|#slides h2|#doc #slides h2|.subheader_message|.genius_product_page_wrapper h1|#genius_page_grid .gp_stats .stats_nr|#genius_page_grid .gp_faq a.question|#genius_page_grid .gp_refresh > a|input.bigbluebutton|.rl_head h1|.rpp_review_confirm_redesign .rpp_card .photo_overlay a p span|.rf_header|.review-badge-tooltip|.revc-chat-ui button|.free_one_a|.sr_item_bbtool_details_heading|.iphoneLanding .iphoneQuote h3|.section__header|.b_travel_advisors_page_title_text".split("|");
B.when({
events:e.map(function(e) {
return _i_("18c:1846"), _r_("view " + e);
}),
experiment:"YQecaCPHWONQfTZCeAYNSRKXe",
stage:2
}).run(function() {}), B.when({
events:"ready"
}).run(function() {
_i_("18c:871");
var t = B.require("jquery"), i = B.require("et");
t(e.join(",")).length && i.stage("YQecaCPHWONQfTZCeAYNSRKXe", 1), _r_();
}), _r_();
}(), B.require([ "jquery", "et" ], function(e, t) {
_i_("18c:239");
var i = "eIBbFYHIIHTPZeVXGRcNcC";
e(".feedback_link_look").click(function() {
_i_("18c:872"), t.stage(i, 1), _r_();
}), e(".menu_help").click(function() {
_i_("18c:873"), t.stage(i, 2), _r_();
}), _r_();
}), B.define("detect-device", function() {
"use strict";
_i_("18c:240");
var e = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent :null;
if (!e) return _r_("Unknown");
return e = e.indexOf("Xbox") > -1 && e.indexOf("Xbox One") > -1 ? "Xbox One" :e.indexOf("Xbox") > -1 ? "Xbox 360" :e.indexOf("Playstation 4") > -1 ? "PlayStation 4" :e.indexOf("Playstation 3") > -1 ? "PlayStation 3" :e.indexOf("Nintendo WiiU") > -1 || e.indexOf("NintendoBrowser") > -1 ? "Nintendo" :e.indexOf("SMART-TV") > -1 || e.indexOf("SmartTV") > -1 || e.indexOf("Opera TV Store") > -1 || e.indexOf("PhilipsTV") > -1 ? "Smart TV" :e.indexOf("GoogleTV") > -1 ? "Google TV" :e.indexOf("AppleTV") > -1 ? "Apple TV" :e.indexOf("Android") > -1 && e.indexOf("SM-G900P") > -1 ? "Galaxy S5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 5") > -1 ? "Nexus 5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 6") > -1 ? "Nexus 6" :e.indexOf("Android") > -1 && e.indexOf("Nexus 7") > -1 ? "Nexus 7" :e.indexOf("Android") > -1 && e.indexOf("Nexus 10") > -1 ? "Nexus 10" :e.indexOf("Android") > -1 ? "Android" :e.indexOf("BlackBerry") > -1 ? "BlackBerry" :e.indexOf("KFAPWI") > -1 ? "Kindle Fire" :e.indexOf("NOKIA") > -1 || e.indexOf("NokiaBrowser") > -1 ? "Nokia" :e.indexOf("Windows Phone") > -1 ? "Windows Phone" :e.indexOf("MSIE") > -1 ? "Internet Explorer" :e.indexOf("Opera Mini") > -1 ? "Opera Mini" :e.indexOf("iPhone") > -1 ? "iPhone" :e.indexOf("iPod") > -1 ? "iPod" :e.indexOf("iPad") > -1 ? "iPad" :"Unknown", _r_(e);
}), function(e, t, i, n) {
_i_("18c:241");
var r = "EKMTOBASHUKTRSMdeLAGO";
e.when({
condition:e.env.b_is_landing_page || "index" === e.env.b_action || "hotel" === e.env.b_action || "searchresults" === e.env.b_action,
events:"ready"
}).run(function() {
_i_("18c:874");
var t = e.require("detect-device");
if (/Nintendo|Playstation|TV|Xbox/.test(t)) switch (e.et.stage(r, 1), t) {
case "Apple TV":
e.et.stage(r, 2);
break;

case "Google TV":
e.et.stage(r, 3);
break;

case "Smart TV":
e.et.stage(r, 4);
break;

case "Nintendo":
e.et.stage(r, 5);
break;

case "PlayStation 3":
e.et.stage(r, 6);
break;

case "PlayStation 4":
e.et.stage(r, 6);
break;

case "Xbox 360":
e.et.stage(r, 7);
break;

case "Xbox One":
e.et.stage(r, 7);
}
_r_();
}), _r_();
}(window.booking, window, document), B.when({
events:"ready",
condition:B.env.fe_run_china_login_with_phone_number,
experiment:"MKMBYVQOIOWSSIAUKELNFO"
}).run(function() {
_i_("18c:242"), booking.phoneNumberLogin = function() {
_i_("18c:958");
var e, t, i, n, r = $(".js-send_verification_code"), o = $(".js-wait_resend_verification_code"), a = $(".js-resend_cta_countdown_number"), s = $(".js-phone_error_message");
function _(e) {
_i_("18c:1557"), -1 === e ? $(".js-phone_generic_problem").removeClass("g-hidden") :-2 === e ? $(".js-phone_already_confirmed").removeClass("g-hidden") :-3 === e ? $(".js-phone_code_missing").removeClass("g-hidden") :-4 === e ? $(".js-phone_generic_problem").removeClass("g-hidden") :-5 === e ? $(".js-phone_generic_problem").removeClass("g-hidden") :-6 === e && $(".js-phone_code_wrong").removeClass("g-hidden"), _r_();
}
function c() {
_i_("18c:1558"), clearInterval(n), r.html(r.attr("data-resend-copy")), r.removeClass("g-hidden"), o.addClass("g-hidden"), _r_();
}
function l() {
_i_("18c:1559"), i = 60, a.html(i), n = setInterval(function() {
_i_("18c:2175"), i--, 0 === i ? c() :a.html(i), _r_();
}, 1e3), _r_();
}
return r.on("click", function(t) {
_i_("18c:1847"), t.preventDefault(), s.addClass("g-hidden"), r.addClass("g-hidden"), o.removeClass("g-hidden"), l(), $.ajax({
method:"POST",
url:B.env.b_secure_domain + "/send_verification_sms",
data:{
phone:e,
country_code:86
},
success:function(e) {
_i_("18c:2290"), 1 === e.success ? $(".js-verify_phone_number_success_send").removeClass("g-hidden") :e.error && (c(), _(e.error)), _r_();
},
error:function(e) {
_i_("18c:2291"), c(), _r_();
}
}), _r_();
}), $(".js-verify_phone_form").on("submit", function(i) {
_i_("18c:1848"), i.preventDefault(), s.addClass("g-hidden"), $.ajax({
method:"POST",
url:B.env.b_secure_domain + "/confirm_phone_number",
data:{
phone:e,
country_code:86,
confirmation_code:$(".js-verify_phone_confirmation_code").val()
},
success:function(i) {
_i_("18c:2292"), 1 === i.success ? ($(".js-user-access-form--signin input[name=username]").val(e), $(".js-user-access-form--signin input[name=password]").val(t), $(".js-user-access-form--signin").submit()) :i.error && _(i.error), _r_();
}
}), _r_();
}), _r_({
setPassword:function(e) {
_i_("18c:2012"), t = e, _r_();
},
setPhone:function(t) {
_i_("18c:2013"), e = t, _r_();
},
showLightbox:function() {
_i_("18c:2014");
var t = $(".user_access_menu");
$(".js-verify_phone_number").text(e), $(".form-section", t).addClass("form-hidden-section").removeClass("form-shown-section"), $(".user_access_verify_phone_menu", t).removeClass("form-hidden-section").addClass("form-shown-section"), booking.eventEmitter && booking.eventEmitter.trigger("user_access_menu_verify_phone_tab"), _r_();
}
});
}(), _r_();
}), B.define("defaultsjs:modules/lib/assistant/overview/overview.js", function(e, t, i) {
_i_("18c:243");
var n, r, o, a = e("jquery"), s = e("promise"), _ = B.env.b_messaging_assistant_overview_url || "/get_ba_overview", c = B.env.b_messaging_url || "/messages2.html", l = 6e4, u = [];
function d(e) {
return _i_("18c:536"), o = Object.assign({}, e, {
b_messaging_url:c,
reservations:e.reservations.map(function(e) {
return _i_("18c:2015"), _r_(Object.assign({}, e, {
fe_messaging_url:c + ";bn=" + e.reservation_id
}));
})
}), _r_(o);
}
function h(e) {
return _i_("18c:537"), n = null, _r_(e);
}
function p(e) {
return _i_("18c:538"), u.length && (r = window.setTimeout(g, l)), _r_(e);
}
function f(e) {
return _i_("18c:539"), u.forEach(function(t) {
_i_("18c:1384"), t(e), _r_();
}), _r_(e);
}
function g() {
return _i_("18c:540"), n ? _r_(n) :(n = s.resolve(a.getJSON(_)).then(d).then(h).then(p).then(f)["catch"](function(e) {
return _i_("18c:1849"), _r_(s.reject("failed to fetch overview"));
}), _r_(n));
}
function m(e) {
_i_("18c:541");
var t = u.length;
return u.push(e), 1 === u.length && 0 === t && g(), o && e(o), _r_(function() {
_i_("18c:959");
for (var t = 0; t < u.length; t++) u[t] === e && (u.splice(t, 1), u.length || window.clearTimeout(r));
_r_();
});
}
i.exports = {
subscribe:m,
fetchOnce:g
}, _r_();
}), B.define("assistant/tracker", function(e, t, i) {
_i_("18c:244");
var n = e("ga-tracker"), r = {
"bk_exit menu":"BK Exit Menu",
bk_wall:"BK Wall",
entry_point:"Entry Point"
};
i.exports.actions = r, i.exports.trackAssistantEvent = n.trackEvent.bind(null, n.assistantTracker), i.exports.trackAssistantEntryPoint = n.trackEvent.bind(null, n.assistantTracker, r.entry_point), _r_();
}), B.define("component/assistant/entrypoint", function(e, t, i) {
_i_("18c:245");
var n = e("component"), r = e("jquery"), o = e("defaultsjs:modules/lib/assistant/overview/overview.js").subscribe, a = e("assistant/tracker").trackAssistantEntryPoint, s = r("body"), _ = "disable_body_scrolling", c = "ba-entrypoint__text_has-unread-messages", l = !0, u = e("promise");
i.exports = n.extend({
init:function() {
if (_i_("18c:1560"), this._overview = null, this._url = this.$el.attr("data-messaging-url") || this.$el.attr("href"), this._bn = this.$el.attr("data-bn"), this._privacyPolicyUrl = this.$el.attr("data-privacy-policy-url"), !/bn=(\d*)/.test(this._url) && this._bn) {
var e = this._url.split("#");
e[0] = e[0] + ";bn=" + this._bn, this._url = e.join("#");
}
this._entryPoint = this.$el.attr("data-entrypoint"), this.$el.on("click", this.onEntryPointClick.bind(this)), this.$textEl = this.$el.find(".ba-entrypoint__text"), this._originalText = this.$textEl.text(), s.on("click", ".ba-intro--cta", this.onCtaClick.bind(this)), o(this.onGotOverview.bind(this)), _r_();
},
ensureOverviewLoaded:function() {
return _i_("18c:1561"), _r_(new u(function(e, t) {
_i_("18c:2079"), o(function() {
_i_("18c:2293"), e(), _r_();
}), _r_();
}));
},
shouldShowWelcomeScreen:function() {
if (_i_("18c:1562"), !l) return _r_(!1);
if (Boolean(this.$el.attr("data-skip-welcome-screen"))) return _r_(!1);
return _r_(!0);
},
onGotOverview:function(e) {
if (_i_("18c:1563"), this._overview = e, !e) return _r_();
if (!e.reservations || !e.reservations.length) return _r_();
l && "undefined" != typeof e.show_welcome_screen && Boolean(e.show_welcome_screen) === !1 && (l = !1);
var t = e.reservations.filter(function(e) {
return _i_("18c:2176"), _r_(e.reservation_id === this._bn);
}, this);
!t.length;
var i = t.length && t[0];
i.has_unread ? (this.$textEl.addClass(c), this.setText(B.jstmpl.translations("msg_entry_notification_unread_message"))) :(this.$textEl.removeClass(c), this.resetText()), _r_();
},
onEntryPointClick:function(e) {
_i_("18c:1564"), e.preventDefault(), this._entryPoint && a(this._entryPoint), this.shouldShowWelcomeScreen() ? (this.showLoadingScreen(), this.ensureOverviewLoaded().then(function() {
_i_("18c:2294"), this.shouldShowWelcomeScreen() ? this.showWelcomeScreen() :this.navigateToMessenger(), _r_();
}.bind(this))) :this.navigateToMessenger(), _r_();
},
onCtaClick:function(e) {
_i_("18c:1565"), e.preventDefault(), l = !1, this.showLoadingScreen(), this.navigateToMessenger(), _r_();
},
showWelcomeScreen:function(e) {
_i_("18c:1566"), r(".ba-loading-screen").remove();
var t = r(B.jstmpl("assistant_welcome_screen").render({
url:this._url,
privacy_policy_url:this._privacyPolicyUrl
}));
s.append(t), s.addClass(_), _r_();
},
showLoadingScreen:function() {
_i_("18c:1567");
var e = r(B.jstmpl("assistant_loading_overlay").render());
s.append(e), s.addClass(_), _r_();
},
navigateToMessenger:function() {
_i_("18c:1568"), window.location = this._url, _r_();
},
setText:function(e) {
if (_i_("18c:1569"), !e) return _r_();
this.$textEl.text(e), _r_();
},
resetText:function() {
_i_("18c:1570"), this.setText(this._originalText), _r_();
}
}), _r_();
}), B.define("component/assistant/modal-entrypoint", function(e, t, i) {
_i_("18c:246");
var n, r, o = e("component/assistant/entrypoint"), a = e("lightbox"), s = e("jquery"), _ = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
i.exports = o.extend({
renderViews:function() {
_i_("18c:1571"), n || (n = s(B.jstmpl("assistant_modal").render({
b_messaging_url:r,
privacy_policy_url:this._privacyPolicyUrl
}))), _r_();
},
showModal:function(e) {
_i_("18c:1572"), n ? r !== this._url && (r = this._url, n.find("iframe").attr("src", r)) :(r = this._url, this.renderViews()), n.find(".assistant-view").hide(), n.find(".assistant-view_" + e + "-screen").show(), a.show(n, _), _r_();
},
showWelcomeScreen:function(e) {
_i_("18c:1573"), this.showModal("welcome"), _r_();
},
showLoadingScreen:function() {
_i_("18c:1574"), this.showModal("loading"), _r_();
},
navigateToMessenger:function() {
_i_("18c:1575"), this.showModal("app"), _r_();
}
}), _r_();
}), booking.jstmpl("assistant_modal", function() {
_i_("18c:278");
var e = [ '\n\n  <div class="assistant-modal-view">\n    <div class="assistant-view assistant-view_loading-screen">\n      ', '<div class="l">\n  <span class=""></span>\n</div>\n', '\n    </div>\n    <div class="assistant-view assistant-view_welcome-screen">\n      ', '<div class="ba-welcome-screen', '">\n  <div class="ba-intro">\n    <h1 class="ba-intro--title">', "/private/msg_entry_meet_assistant_header/name", '</h1>\n    <p class="ba-intro--subtitle">', "/private/msg_entry_meet_assistant_subheader/name", '</p>\n    <a\n      href="', '"\n      class="ba-intro-privacy"\n      target="_blank"\n    >', "/private/msg_wlm_privacy_policy/name", '</a>\n    <a class="ba-intro--cta" href="', '">', "/private/msg_cta_lets_get_started/name", "</a>\n  </div>\n</div>\n", '\n    </div>\n    <div class="assistant-view assistant-view_app-screen">\n      <iframe\n        src="', '"\n        class="app-screen_iframe" frameborder="0"></iframe>\n    </div>\n  </div>\n' ], t = [ "fullscreen", "privacy_policy_url", "url", "b_messaging_url" ];
return _r_(function(i) {
_i_("18c:875");
var n = "", r = this.fn;
function o(t) {
return _i_("18c:1385"), t += e[1], _r_(t);
}
function a(i) {
return _i_("18c:1386"), i += [ e[3], r.MC(t[0]) ? " ba-welcome-screen_fullscreen" :"", e[4], r.ME(e[5], r.MB, r.MN, null), e[6], r.ME(e[7], r.MB, r.MN, null), e[8], r.MC(t[1]), e[9], r.ME(e[10], r.MB, r.MN, null), e[11], r.MC(t[2]), e[12], r.ME(e[13], r.MB, r.MN, null), e[14] ].join(""), _r_(i);
}
return n += e[0], n = o(n), n += e[2], n = a(n), n += [ e[15], r.MC(t[3]), e[16] ].join(""), _r_(n);
});
}()), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.main.run = !0);