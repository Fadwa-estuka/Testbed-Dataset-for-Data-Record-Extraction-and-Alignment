var _i_ = window._i_ || function() {}, _r_ = window._r_ || function(t) {
return t;
};

B.define("caret", function() {
_i_("155:1");
var t = function(t) {
_i_("155:84");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), e.moveStart("character", -t.value.length), _r_(e.text.length);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionStart);
return _r_(0);
}, e = function(t, e) {
_i_("155:85");
var i;
if (!t) return _r_();
document.selection ? (t.focus(), i = document.selection.createRange(), i.moveStart("character", -t.value.length), i.moveStart("character", e), i.moveEnd("character", 0), i.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = e, t.focus()), _r_();
}, i = function(t, e, i) {
_i_("155:86");
var n;
if (!t) return _r_();
document.selection ? (t.focus(), n = document.selection.createRange(), n.moveStart("character", -t.value.length), n.moveStart("character", e), n.moveEnd("character", i - e), n.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = i, t.focus()), _r_();
}, n = function(t) {
_i_("155:87");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), _r_(e.text.length || 0);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionEnd - t.selectionStart);
return _r_(0);
};
return _r_({
getPosition:t,
setPosition:e,
setSelection:i,
getSelectionLength:n
});
}), B.define("click-out", function(t, e, i) {
"use strict";
_i_("155:2");
var n = {}, s = !1;
function a() {
_i_("155:43"), s || (s = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", r) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", r)), _r_();
}
function r(t) {
_i_("155:44");
var e, i = Object.keys(n), s = {}, a = !1;
if (i.length) for (e = t.target || t.srcElement; e && (i.forEach(function(t) {
_i_("155:433"), n[t].element === e && (s[t] = !0, 1 == i.length && (a = !0)), _r_();
}), !a); ) e = e.parentNode;
i.forEach(function(t) {
_i_("155:121"), !s[t] && n[t] && (n[t].callback.call(!1), o(t)), _r_();
}), _r_();
}
function o(t) {
_i_("155:45"), n[t] && delete n[t], _r_();
}
function _() {
_i_("155:46");
var t = Object.keys(n);
t.forEach(function(t) {
_i_("155:122"), n[t].callback.call(!1), o(t), _r_();
}), _r_();
}
e.addMonitor = function(t, e) {
_i_("155:88"), a();
var i = Math.random();
return "string" == typeof t.jquery && (t = t[0]), setTimeout(function() {
_i_("155:418"), n[i] = {
element:t,
callback:e
}, _r_();
}, 4), _r_(i);
}, e.removeMonitor = o, e.forceClickOut = _, _r_();
}), B.define("keycodes", [], function() {
"use strict";
_i_("155:3");
var t = {
backspace:8,
tab:9,
enter:13,
shift:16,
control:17,
alt:18,
escape:27,
space:32,
pageUp:33,
pageDown:34,
end:35,
home:36,
leftArrow:37,
upArrow:38,
rightArrow:39,
downArrow:40,
"delete":46,
navigation:[ 9 ].concat(i(33, 40)),
deletion:[ 8, 46 ],
arrow:i(37, 40),
number:i(48, 57).concat(i(96, 105)),
alphabetic:i(65, 90),
modifier:i(16, 18)
};
t = n(t);
function e(t) {
return _i_("155:47"), _r_(t.slice(0, 1).toUpperCase() + t.slice(1));
}
function i(t, e) {
_i_("155:48");
for (var i = [], n = 0; e - t >= n; n++) i.push(t + n);
return _r_(i);
}
function n(t) {
_i_("155:49");
var e = 65;
return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(t, i) {
return _i_("155:123"), t[i] = e++, _r_(t);
}, t));
}
function s(e, i) {
if (_i_("155:50"), Array.isArray(t[e]) && -1 !== t[e].indexOf(i)) return _r_(!0);
if (t[e] === i) return _r_(!0);
return _r_(!1);
}
function a(t, e) {
return _i_("155:51"), _r_(s(e, t));
}
function r(e) {
_i_("155:52");
var i = [];
return Object.keys(t).forEach(function(t) {
_i_("155:124"), s(t, e) && i.push(t), _r_();
}), _r_(i);
}
var o = {
getTypes:r,
isKeycodeType:a
};
return Object.keys(t).forEach(function(t) {
_i_("155:89"), o["is" + e(t)] = function(e) {
return _i_("155:419"), _r_(a(e, t));
}, _r_();
}), _r_(o);
}), B.define("read-data-options", function(t, e, i) {
_i_("155:4"), i.exports = function(t, e) {
_i_("155:90");
var i = {};
return t.jquery && (t = t[0]), Object.keys(e).forEach(function(n) {
_i_("155:420");
var s = e[n], a = "data-" + n, r = null;
if ("function" == typeof s && (s = {
type:s
}), "string" == typeof s.name && (a = "data-" + s.name), !t.attributes[a]) {
if (s.hasOwnProperty("defaultValue")) i[n] = s.defaultValue; else if (s.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + a + " attribute");
return _r_();
}
var r = t.getAttribute(a);
if (s.type === Boolean) r = !/^0|false|no|off$/.test(r); else if (s.type === String) r = r || s.defaultValue; else {
if (s.type !== Number) throw new Error("data-options: Invalid option type for " + n);
r = parseFloat(r, 10), isNaN(r) && (r = s.defaultValue);
}
i[n] = r, _r_();
}), _r_(i);
}, _r_();
}), B.define("calendar-base", function(t, e, i) {
_i_("155:5");
function n(t) {
_i_("155:53"), t = t || {}, this.startDate = t.startDate, this.endDate = t.endDate, this.siblingMonths = t.siblingMonths, this.weekNumbers = t.weekNumbers, this.weekStart = t.weekStart, void 0 === this.weekStart && (this.weekStart = 0), _r_();
}
n.prototype.getCalendar = function(t, e) {
_i_("155:91");
var i = new Date(Date.UTC(t, e, 1, 0, 0, 0, 0));
t = i.getUTCFullYear(), e = i.getUTCMonth();
for (var s, a, r, o, _, l = [], h = i.getUTCDay(), d = -((7 - this.weekStart + h) % 7), c = n.daysInMonth(t, e), u = (c - d) % 7, p = n.daysInMonth(t, e - 1), f = d, m = c - f + (0 != u ? 7 - u :0) + d, g = null; m > f; ) a = f + 1, s = ((1 > f ? 7 + f :f) + h) % 7, 1 > a || a > c ? this.siblingMonths ? (1 > a ? (o = e - 1, _ = t, 0 > o && (o = 11, _--), a = p + a) :a > c && (o = e + 1, _ = t, o > 11 && (o = 0, _++), a = f - c + 1), r = {
day:a,
weekDay:s,
month:o,
year:_,
siblingMonth:!0
}) :r = !1 :r = {
day:a,
weekDay:s,
month:e,
year:t
}, r && this.weekNumbers && (null === g ? g = n.calculateWeekNumber(r) :1 == s && 52 == g ? g = 1 :1 == s && g++, r.weekNumber = g), r && this.startDate && (r.selected = this.isDateSelected(r)), l.push(r), f++;
return _r_(l);
}, n.prototype.isDateSelected = function(t) {
if (_i_("155:92"), t.year == this.startDate.year && t.month == this.startDate.month && t.day == this.startDate.day) return _r_(!0);
if (this.endDate) {
if (t.year == this.startDate.year && t.month == this.startDate.month && t.day < this.startDate.day) return _r_(!1);
if (t.year == this.endDate.year && t.month == this.endDate.month && t.day > this.endDate.day) return _r_(!1);
if (t.year == this.startDate.year && t.month < this.startDate.month) return _r_(!1);
if (t.year == this.endDate.year && t.month > this.endDate.month) return _r_(!1);
if (t.year < this.startDate.year) return _r_(!1);
if (t.year > this.endDate.year) return _r_(!1);
return _r_(!0);
}
return _r_(!1);
}, n.prototype.setStartDate = function(t) {
_i_("155:93"), this.startDate = t, _r_();
}, n.prototype.setEndDate = function(t) {
_i_("155:94"), this.endDate = t, _r_();
}, n.prototype.setDate = n.prototype.setStartDate, n.diff = function(t, e) {
return _i_("155:95"), t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), _r_(Math.ceil((t.getTime() - e.getTime()) / 864e5));
}, n.interval = function(t, e) {
return _i_("155:96"), _r_(Math.abs(n.diff(t, e)) + 1);
}, n.compare = function(t, e) {
if (_i_("155:97"), "object" != typeof t || "object" != typeof e || null === t || null === e) throw new TypeError("dates must be objects");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
}, n.daysInMonth = function(t, e) {
return _i_("155:98"), _r_(new Date(t, e + 1, 0).getDate());
}, n.isLeapYear = function(t) {
return _i_("155:99"), _r_(t % 4 == 0 && t % 100 != 0 || t % 400 == 0);
}, n.calculateWeekNumber = function(t) {
_i_("155:100");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), i = new Date(e.valueOf()), n = (e.getUTCDay() + 6) % 7;
i.setUTCDate(i.getUTCDate() - n + 3);
var s = i.valueOf();
return i.setUTCMonth(0, 1), 4 != i.getUTCDay() && i.setUTCMonth(0, 1 + (4 - i.getUTCDay() + 7) % 7), _r_(1 + Math.ceil((s - i) / 6048e5));
}, i.exports = {
Calendar:n
}, _r_();
}), B.define("morphdom", function(t, e, i) {
_i_("155:6"), function(t) {
if (_i_("155:102"), "object" == typeof e && "undefined" != typeof i) i.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = t();
}
_r_();
}(function() {
_i_("155:101");
var t, e;
t = {
exports:e = {}
};
var i, n, s = "undefined" != typeof document ? document.body || document.createElement("div") :{}, a = "http://www.w3.org/1999/xhtml", r = 1, o = 3, _ = 8;
n = s.hasAttributeNS ? function(t, e, i) {
return _i_("155:434"), _r_(t.hasAttributeNS(e, i));
} :s.hasAttribute ? function(t, e, i) {
return _i_("155:458"), _r_(t.hasAttribute(i));
} :function(t, e, i) {
return _i_("155:459"), _r_(!!t.getAttributeNode(i));
};
function l(t) {
_i_("155:125");
for (var e in t) if (t.hasOwnProperty(e)) return _r_(!1);
return _r_(!0);
}
function h(t) {
_i_("155:126"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var e;
return i && i.createContextualFragment ? e = i.createContextualFragment(t) :(e = document.createElement("body"), e.innerHTML = t), _r_(e.childNodes[0]);
}
var d = {
OPTION:function(t, e) {
_i_("155:435"), t.selected = e.selected, t.selected ? t.setAttribute("selected", "") :t.removeAttribute("selected", ""), _r_();
},
INPUT:function(t, e) {
_i_("155:436"), t.checked = e.checked, t.checked ? t.setAttribute("checked", "") :t.removeAttribute("checked"), t.value !== e.value && (t.value = e.value), n(e, null, "value") || t.removeAttribute("value"), t.disabled = e.disabled, t.disabled ? t.setAttribute("disabled", "") :t.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(t, e) {
_i_("155:437");
var i = e.value;
t.value !== i && (t.value = i), t.firstChild && (t.firstChild.nodeValue = i), _r_();
}
};
function c() {}
var u = function(t, e) {
return _i_("155:421"), _r_(t.nodeName === e.nodeName && t.namespaceURI === e.namespaceURI);
};
function p(t, e) {
return _i_("155:128"), _r_(e && e !== a ? document.createElementNS(e, t) :document.createElement(t));
}
function f(t, e) {
_i_("155:129");
var i, s, a, r, o, _, l = e.attributes;
for (i = l.length - 1; i >= 0; i--) s = l[i], a = s.name, o = s.value, r = s.namespaceURI, r ? (a = s.localName || a, _ = t.getAttributeNS(r, a)) :_ = t.getAttribute(a), _ !== o && (r ? t.setAttributeNS(r, a, o) :t.setAttribute(a, o));
for (l = t.attributes, i = l.length - 1; i >= 0; i--) s = l[i], s.specified !== !1 && (a = s.name, r = s.namespaceURI, n(e, r, r ? a = s.localName || a :a) || t.removeAttributeNode(s));
_r_();
}
function m(t, e) {
_i_("155:130");
for (var i = t.firstChild; i; ) {
var n = i.nextSibling;
e.appendChild(i), i = n;
}
return _r_(e);
}
function g(t) {
return _i_("155:131"), _r_(t.id);
}
function v(t, e, i) {
if (_i_("155:132"), i || (i = {}), "string" == typeof e) if ("#document" === t.nodeName || "HTML" === t.nodeName) {
var n = e;
e = document.createElement("html"), e.innerHTML = n;
} else e = h(e);
var s = {}, a = {}, v = i.getNodeKey || g, b = i.onBeforeNodeAdded || c, y = i.onNodeAdded || c, M = i.onBeforeElUpdated || i.onBeforeMorphEl || c, B = i.onElUpdated || c, k = i.onBeforeNodeDiscarded || c, C = i.onNodeDiscarded || c, w = i.onBeforeElChildrenUpdated || i.onBeforeMorphElChildren || c, x = i.childrenOnly === !0, D = [];
function E(t, e) {
_i_("155:422");
var i = v(t);
if (i ? s[i] = t :e || C(t), t.nodeType === r) for (var n = t.firstChild; n; ) E(n, e || i), n = n.nextSibling;
_r_();
}
function $(t) {
if (_i_("155:423"), t.nodeType === r) for (var e = t.firstChild; e; ) v(e) || (C(e), $(e)), e = e.nextSibling;
_r_();
}
function T(t, e, i) {
if (_i_("155:424"), k(t) === !1) return _r_();
e.removeChild(t), i ? v(t) || (C(t), $(t)) :E(t), _r_();
}
function S(t, e, i, n) {
_i_("155:425");
var l = v(e);
if (l && delete s[l], !n) {
if (M(t, e) === !1) return _r_();
if (f(t, e), B(t), w(t, e) === !1) return _r_();
}
if ("TEXTAREA" !== t.nodeName) {
var h, c, p, m, g, k = e.firstChild, C = t.firstChild;
t:for (;k; ) {
for (p = k.nextSibling, h = v(k); C; ) {
var x = v(C);
if (c = C.nextSibling, !i && x && (g = a[x])) {
g.parentNode.replaceChild(C, g), S(C, g, i), C = c;
continue;
}
var E = C.nodeType;
if (E === k.nodeType) {
var $ = !1;
if (E === r ? (u(C, k) && (x || h ? h === x && ($ = !0) :$ = !0), $ && S(C, k, i)) :(E === o || E == _) && ($ = !0, C.nodeValue = k.nodeValue), $) {
k = p, C = c;
continue t;
}
}
T(C, t, i), C = c;
}
h && ((m = s[h]) ? (S(m, k, !0), k = m) :a[h] = k), b(k) !== !1 && (t.appendChild(k), y(k)), k.nodeType === r && (h || k.firstChild) && D.push(k), k = p, C = c;
}
for (;C; ) c = C.nextSibling, T(C, t, i), C = c;
}
var P = d[t.nodeName];
P && P(t, e), _r_();
}
var P = t, J = P.nodeType, N = e.nodeType;
if (!x) if (J === r) N === r ? u(t, e) || (C(t), P = m(t, p(e.nodeName, e.namespaceURI))) :P = e; else if (J === o || J === _) {
if (N === J) return P.nodeValue = e.nodeValue, _r_(P);
P = e;
}
if (P === e) C(t); else {
S(P, e, !1, x);
var V = function(t) {
_i_("155:475");
for (var e = t.firstChild; e; ) {
var i = e.nextSibling, n = v(e);
if (n) {
var a = s[n];
if (a && u(e, a)) {
if (e.parentNode.replaceChild(a, e), S(a, e, !0), e = i, l(s)) return _r_(!1);
continue;
}
}
e.nodeType === r && V(e), e = i;
}
_r_();
};
if (!l(s)) t:for (;D.length; ) {
var F = D;
D = [];
for (var I = 0; I < F.length; I++) if (V(F[I]) === !1) break t;
}
for (var A in s) if (s.hasOwnProperty(A)) {
var O = s[A];
C(O), $(O);
}
}
return !x && P !== t && t.parentNode && t.parentNode.replaceChild(P, t), _r_(P);
}
return t.exports = v, _r_(t.exports);
}), _r_();
}), B.define("search/modules/flags", function(t, e, i) {
_i_("155:7");
function n(t) {
_i_("155:54");
var e = {};
if ("string" != typeof t) throw new TypeError("First argument must be a string");
if (t = t.trim(), "" === t) return _r_(e);
return t.split(/\s+/).forEach(function(t) {
_i_("155:133");
var i = t, n = !0, s = t.indexOf(":");
-1 !== s && (i = t.substr(0, s), n = parseInt(t.substr(s + 1), 10)), e[i] = n, _r_();
}), _r_(e);
}
i.exports = {
parse:n
}, _r_();
}), B.define("search/modules/search-date", function(t, e, i) {
_i_("155:8");
var n = t("calendar-base").Calendar;
function s(t) {
_i_("155:55"), this.year = null, this.month = null, this.day = null, this.complete = !1, "number" == typeof t.year && (this.year = t.year), "number" == typeof t.month && (this.month = t.month), "number" == typeof t.day && (this.day = t.day), null !== this.month && (this.month < 0 ? this.month = 0 :this.month > 11 && (this.month = 11)), null !== this.day && (this.day < 0 ? this.day = 0 :this.day > a(this.year, this.month) && (this.day = a(this.year, this.month))), this.complete = null !== this.year && null !== this.month && null !== this.day, _r_();
}
s.prototype = {
toString:function() {
if (_i_("155:134"), !this.complete) return _r_("");
var t = this.month + 1;
return _r_(this.year + "-" + (10 > t ? "0" :"") + t + "-" + (this.day < 10 ? "0" :"") + this.day);
},
toNative:function() {
if (_i_("155:135"), !this.complete) return _r_(new Date(NaN));
return _r_(new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0)));
},
valueOf:function() {
return _i_("155:136"), _r_(this.toNative().valueOf());
}
}, s.create = function(t) {
if (_i_("155:103"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
return _r_(new s(t));
}, s.createFromString = function(t) {
if (_i_("155:104"), "string" != typeof t) throw new TypeError("dateString must be a string");
var e = t.split(/-/g), i = {
year:parseInt(e[0], 10),
month:parseInt(e[1], 10) - 1,
day:parseInt(e[2], 10)
};
return _r_(s.create(i));
}, s.createFlexible = function(t) {
if (_i_("155:105"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
if ("number" != typeof t.year || "number" != typeof t.month || "number" != typeof t.day) throw new TypeError("invalid date");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0));
return t = {
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}, _r_(s.create(t));
}, s.isStrictlyValid = function(t) {
_i_("155:106");
var e = s.create(t);
return _r_(t.year === e.year && t.month === e.month && t.day === e.day);
}, s.compare = function(t, e) {
if (_i_("155:107"), !(t instanceof s && e instanceof s)) throw new TypeError("dates must be an instance of SearchDate");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
};
function a(t, e) {
return _i_("155:56"), _r_("number" == typeof t && "number" == typeof e ? n.daysInMonth(t, e) :3 == e || 5 == e || 8 == e || 10 == e ? 30 :1 == e ? 29 :31);
}
i.exports = {
SearchDate:s
}, _r_();
}), B.define("component/autocomplete-core", function(t, e, i) {
_i_("155:9");
var n = t("jquery"), s = t("component"), a = t("read-data-options");
i.exports = s.extend({
init:function() {
_i_("155:227"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = t("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
openFocus:{
name:"open-focus",
type:Boolean
},
highlightFirst:{
name:"highlight-first",
type:Boolean
}
}), this.options = a(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_();
},
addInputEventListeners:function() {
_i_("155:228");
var t = this.$input.component("keyboard");
t.on("keydown:Escape", this.inputEscape.bind(this)), t.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), t.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), t.on("keydown:Enter", this.inputEnter.bind(this)), t.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_();
},
addListEventListeners:function() {
_i_("155:229"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_();
},
addItemsEventListeners:function() {
_i_("155:230"), this.$items.click(this.listItemClick.bind(this)), _r_();
},
addClickOutEventListener:function() {
_i_("155:231"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_();
},
removeClickOutEventListener:function() {
_i_("155:232"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_();
},
calculateListHeight:function() {
_i_("155:233"), this.listHeight = this.$list.outerHeight(), _r_();
},
inputClick:function(t) {},
inputFocus:function(t) {
_i_("155:235"), this.options.openFocus && (this.listShow(), this.autocomplete({
fromFocus:!0
})), _r_();
},
inputBlur:function(t) {
_i_("155:236"), setTimeout(this.inputBlurSync.bind(this), 4), _r_();
},
inputBlurSync:function() {
_i_("155:237"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
inputKeyDown:function(t) {
_i_("155:238");
var e = t.ctrlKey || t.metaKey || t.shiftKey || t.altKey, i = 8 == t.which || 46 == t.which;
this.isDeletion = i, this.taintedKeyDown = e, _r_();
},
inputInput:function(t) {
_i_("155:239"), this.autocomplete(), _r_();
},
inputKeyUp:function(t) {
_i_("155:240");
var e = this.taintedKeyDown || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey || t.which >= 16 && t.which <= 18 || 91 == t.which, i = 32 == t.which || t.which >= 48, n = t.which >= 37 && t.which <= 40;
e || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_();
},
inputEscape:function(t) {
_i_("155:241"), this.listVisible && (t.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_();
},
inputArrowUp:function(t) {
_i_("155:242"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() :this.listShow(), _r_();
},
inputArrowDown:function(t) {
_i_("155:243"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() :this.listShow(), _r_();
},
inputEnter:function(t) {
_i_("155:244"), this.listVisible && -1 != this.highlightedIndex && (t.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_();
},
inputTab:function(t) {
_i_("155:245"), this.inputEnter.apply(this, arguments), _r_();
},
listItemClick:function(t) {
_i_("155:246");
var e = n(t.currentTarget);
this.choose(e.data("i")), _r_();
},
listMouseDown:function(t) {
_i_("155:247"), this.preventBlurClose = !0, _r_();
},
listMouseUp:function(t) {
_i_("155:248"), this.preventBlurClose = !1, _r_();
},
clickOut:function() {
_i_("155:249"), this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
setValue:function(t) {
_i_("155:250"), this.input.value = t, setTimeout(function() {
_i_("155:481"), this.listVisible || this.$input.trigger("autocomplete:setvalue-and-close", t), _r_();
}.bind(this)), _r_();
},
listShow:function() {
_i_("155:251"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
_i_("155:513"), this.$list[0].scrollTop = 0, _r_();
}.bind(this), 10)), _r_();
},
listHide:function() {
_i_("155:252"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_();
},
highlightPrevious:function() {
_i_("155:253");
var t = this.highlightedIndex;
do -1 == t ? t = this.items.length - 1 :t--; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightNext:function() {
_i_("155:254");
var t = this.highlightedIndex;
do t == this.items.length - 1 ? t = -1 :t++; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightFromNavigation:function(t, e) {
if (_i_("155:255"), (-1 == this.highlightedIndex || e) && (this.valueBuffer = this.input.value), -1 == t) this.highlightReset({
preserveFocus:!0
}); else if (this.supportsInputEvent) if (this.valueBuffer && 0 == this.items[t].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
var i = this.valueBuffer.length, n = this.items[t].value.length, s = this.valueBuffer + this.items[t].value.substring(i);
if (this.input.value != s && this.setValue(s), this.input.setSelectionRange) this.input.setSelectionRange(i, n); else if (this.input.createTextRange) {
var a = this.input.createTextRange();
a.collapse(!0), a.moveStart("character", i), a.moveEnd("character", n), a.select();
} else void 0 !== this.input.selectionStart && (this.input.selectionStart = i, this.input.selectionEnd = n);
} else this.setValue(this.items[t].value), this.fixIEFocusLoss();
this.highlight(t), _r_();
},
highlightFromAutocomplete:function() {
_i_("155:256");
var t = this.input.value, e = this.getListFirstIndex();
-1 !== e && this.options.highlightFirst && !this.isDeletion && t && 0 === this.items[e].valueLowerCase.indexOf(t.toLowerCase()) ? this.highlightFromNavigation(e, !0) :this.highlight(-1), _r_();
},
highlight:function(t) {
_i_("155:257"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != t && this.$items.eq(t).addClass("-highlighted"), this.highlightedIndex = t, this.highlightScroll(), _r_();
},
highlightReset:function(t) {
_i_("155:258"), t = t || {}, null === this.valueBuffer || t.preserveInputValue || (this.setValue(this.valueBuffer), t.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_();
},
highlightScroll:function() {
_i_("155:259");
var t = !1, e = this.$list[0].scrollTop;
if (-1 != this.highlightedIndex) {
var i = this.$items.eq(this.highlightedIndex), n = (1 == i.length && i.position().top) + e, s = i.outerHeight();
n + s > this.listHeight + e ? t = n + s - this.listHeight :e > n && (t = n);
} else t = 0;
t !== !1 && t != e && (this.$list[0].scrollTop = t), _r_();
},
getListLength:function() {
return _i_("155:260"), _r_(this.items.length);
},
getListFirstIndex:function() {
return _i_("155:261"), _r_(0 === this.items.length ? -1 :0);
},
autocomplete:function() {
_i_("155:262"), this.postAutocomplete(), _r_();
},
postAutocomplete:function() {
_i_("155:263"), 0 === this.getListLength() ? this.listHide() :(this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete()), _r_();
},
choose:function(t) {
_i_("155:264"), this.selectedIndex = t, this.selectedValue = this.items[t].value, this.setValue(this.selectedValue), this.reset(), _r_();
},
reset:function(t) {
_i_("155:265"), t = t || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), t.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_();
},
resetFlags:function() {
_i_("155:266"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_();
},
fixIEFocusLoss:function() {
if (_i_("155:267"), this.input.createTextRange) {
var t = this.input.createTextRange();
t.moveStart("character", this.input.value.length), t.collapse(), t.select();
}
_r_();
}
}), _r_();
}), B.define("component/core/input-placeholder", function(t, e, i) {
"use strict";
_i_("155:10");
var n = t("component"), s = t("read-data-options");
return _r_(n.extend({
init:function() {
if (_i_("155:137"), this.browserSupported()) return _r_();
this.options = s(this.$el, {
placeholderClass:{
name:"placeholder-class",
type:String
},
placeholderColor:{
name:"placeholder-color",
type:String,
defaultValue:"#7C90A6"
}
});
var t = "input, textarea", e = this.$el.find(t);
this.$el.is(t) && (e = e.add(this.$el)), e.filter(function(t, e) {
return _i_("155:477"), _r_(!!$(e).attr("placeholder"));
}).each(function(t, e) {
_i_("155:476"), this.setupPlaceholder($(e)), _r_();
}.bind(this)), _r_();
},
browserSupported:function() {
_i_("155:138");
var t = $('input[type="text"]')[0] || $('<input type="text">')[0];
return _r_(!!("placeholder" in t));
},
setupPlaceholder:function(t) {
_i_("155:139");
var e = $("<label />").text(t.attr("placeholder")).css({
width:t.width() + "px",
height:t.height() + "px",
paddingTop:t.css("padding-top"),
paddingLeft:t.css("padding-left"),
paddingRight:t.css("padding-right"),
fontFamily:t.css("font-family"),
fontSize:t.css("font-size"),
color:this.options.placeholderColor,
overflow:"hidden",
cursor:"text",
position:"absolute"
});
this.options.placeholderClass && e.addClass(this.options.placeholderClass), e.insertBefore(t), e.click(function() {
_i_("155:438"), t.focus(), _r_();
}), t.focus(function() {
_i_("155:478"), e.hide(), _r_();
}).blur(function() {
_i_("155:439"), e[t.val().length ? "hide" :"show"](), _r_();
}), t.get(0) === document.activeElement ? t.triggerHandler("focus") :t.triggerHandler("blur"), _r_();
}
}));
}), B.define("component/keyboard", function(t, e, i) {
_i_("155:11");
var n = t("component"), s = t("event-emitter"), a = {
8:"Backspace",
46:"Delete",
9:"Tab",
13:"Enter",
32:"Space",
27:"Escape",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"ArrowLeft",
38:"ArrowUp",
39:"ArrowRight",
40:"ArrowDown",
48:"0",
49:"1",
50:"2",
51:"3",
52:"4",
53:"5",
54:"6",
55:"7",
56:"8",
57:"9",
65:"A",
66:"B",
67:"C",
68:"D",
69:"E",
70:"F",
71:"G",
72:"H",
73:"I",
74:"J",
75:"K",
76:"L",
77:"M",
78:"N",
79:"O",
80:"P",
81:"Q",
82:"R",
83:"S",
84:"T",
85:"U",
86:"V",
87:"W",
88:"X",
89:"Y",
90:"Z"
};
function r(t, e) {
return _i_("155:57"), _r_(function(i) {
_i_("155:115");
var n = "";
i.which && void 0 !== a[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + a[i.which], t.trigger(e + n, {
keys:e + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("155:268"), s.extend(this), this.$el.bind("keydown", r(this, "keydown")).bind("keyup", r(this, "keyup")), _r_();
}
}), _r_();
}), B.define("component/tooltip-loc", function(t, e, i) {
"use strict";
_i_("155:12");
var n = t("component"), s = t("jquery");
i.exports = n.extend({
DEFAULTS:{
template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
placement:"top",
alignment:"center",
trigger:"hover focus",
animation:"true"
},
init:function() {
_i_("155:269"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("155:270"), this.options = s.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = s(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("155:271");
var t = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (t = t + " " + this.options.extraClass), "true" === this.options.animation && (t += " tooltip-animate"), this.$tip = s(this.options.template), this.$tip.addClass(t), this._attachContent(), this.$tip.appendTo(s("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("155:272");
var t = this.$tip.find(".tooltip-inner");
this.options.target ? t.append(this.options.target.clone()) :(this.options.target = [], t.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("155:273"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("155:274"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(t) {
if (_i_("155:275"), !B.env.rtl) return _r_(t);
if ("left" === t) return _r_("right");
if ("right" === t) return _r_("left");
return _r_(t);
},
_placeTooltip:function() {
_i_("155:276");
var t = this._accountForRTL(this.position), e = this.dimension;
this._accountForRTL(this.options.placement) === t ? this[t] = this.elOffset[t] - this.$tip[e]() :this[t] = this.elOffset[t] + this.$el[e](), _r_();
},
_alignTooltip:function() {
_i_("155:277");
var t, e;
switch ("left" === this.position ? (t = "top", e = "outerHeight") :(t = "left", e = "outerWidth"), this._accountForRTL(this.options.alignment)) {
case t:
this[t] = this.elOffset[t];
break;

case "center":
this[t] = this.$el[e]() / 2 + this.elOffset[t] - this.$tip[e]() / 2;
break;

default:
this[t] = this.elOffset[t] + this.$el[e]() - this.$tip[e]();
}
_r_();
},
_attachEvents:function() {
if (_i_("155:278"), this.options.trigger.match(/manual/)) return _r_();
var t, e, i, n = this.options.trigger.split(" "), a = n.length, r = this.$el.add(this.$tip);
for (this.options.intangible && (r = this.$el), a; a--; ) t = n[a], "click" === t ? this.$el.on("click", $proxy(this.toggle, this)) :(e = "hover" == t ? "mouseenter" :"focusin", i = "hover" == t ? "mouseleave" :"focusout", r.on(e, s.proxy(this.show, this)), r.on(i, s.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(t) {
_i_("155:279");
var e = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("155:460"), e.trigger(t, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("155:280"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("155:281"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("155:282"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.define("component/search/destination/input", function(t, e, i) {
"use strict";
_i_("155:13"), booking.jstmpl("search_destination_autocomplete_results", function() {
_i_("155:116");
var t = [ "\n		", "\n\n	", '\n\n		\n\n		<li\n			class="', "c-autocomplete__item sb-autocomplete__item ", "sb-autocomplete__item--cjk ", "sb-autocomplete__item--airport ", "sb-autocomplete__item--city ", "sb-autocomplete__item--country ", "sb-autocomplete__item--district ", "sb-autocomplete__item--hotel ", "sb-autocomplete__item--landmark ", "sb-autocomplete__item--region ", "sb-autocomplete__item--theme ", "sb-autocomplete__item--theme-expanded ", "first_theme ", "1", "smaller_theme_wrapper ", '"\n			data-list-item\n			data-i="', '"\n			data-value="', '"\n			>', '<div data-component="track" data-track="view" data-hash="', '" data-stage="1"></div>', '<span class="icon_type_before icon_ac_type"></span>', "", '<span class="sb-autocomplete__badge sb-autocomplete__badge-dest-type">', "/private/disambiguation_property/name", "/destinationtype/{dest_type}/name", "</span>", '<div class="', "sb_passion_highlight_wrapper smaller_theme ", '">\n					<p class="sb_passion_highlight_inner">\n						<i class="', "sb_passion_icon dficon-", " ", "rtl_passion_icon", '">\n							</i>\n						<strong class="', "sb_passion_highlight_heading ", "rtl_passion_highlight", '">', "</strong>\n					</p>\n				</div>", '<span class="sb-autocomplete__item__highlight">', '<span class="sb-autocomplete__item__extra">', '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "/private/search_top_50_badge/name", '<span class="icon_type_after icon_ac_type"></span>', "</li>\n	", '\n		<li class="sb-autocomplete__google"></li>\n	', "\n", "\n	" ], e = [ "results", "lc", "dest_type", "is_first_theme", "index", "value", "dest_id", "label", "label_blocks", "highlighted", "text", "label_highlighted", "additional_label", "flags", "is_powered_by_google" ];
return _r_(function(i) {
_i_("155:426");
var n = "", s = this.fn;
function a(n) {
if (_i_("155:440"), s.MD(e[0])) {
n += t[1], s.MN("index", 0), n += t[1];
var a = s.MC(e[0]) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) {
if (i[0] = a[r - 1], n += t[2], n += t[3], s.MJ(/zh|xt|ja|ko/.test(s.MB(e[1]))) && (n += t[4]), s.MJ(s.MB(e[2]) + "" == "airport") ? n += t[5] :s.MJ(s.MB(e[2]) + "" == "city") ? n += t[6] :s.MJ(s.MB(e[2]) + "" == "country") ? n += t[7] :s.MJ(s.MB(e[2]) + "" == "district") ? n += t[8] :s.MJ(s.MB(e[2]) + "" == "hotel") ? n += t[9] :s.MJ(s.MB(e[2]) + "" == "landmark") ? n += t[10] :s.MJ(s.MB(e[2]) + "" == "region") ? n += t[11] :s.MJ(s.MB(e[2]) + "" == "theme") && (n += t[12]), s.MJ(s.MB(e[2]) + "" == "theme") && (n += t[13], s.MD(e[3]) || (n += t[14], s.MN(e[3], t[15])), n += t[16]), n += [ t[17], s.MC(e[4]), t[18], s.F.entities(s.MC(e[5])), t[19] ].join(""), n += [ t[20], "PVdIdXSeGEVSBRe", t[21] ].join(""), s.MJ(s.MB(e[2]) + "" != "theme") && s.MJ(1 == s.track_experiment("PVdIdXSeGEVSBRe")) && (n += t[22]), n += t[23], s.MJ(s.MB(e[2]) + "" != "theme") && s.MJ(s.track_experiment("PVdIeNSBQcaNYCLC")) && (n += t[24], n += s.MJ(s.MB(e[2]) + "" == "hotel") ? [ t[23], s.ME(t[25], s.MB, s.MN, null), t[23] ].join("") :[ t[23], s.F.entities(s.ME(t[26], s.MB, s.MN, null)), t[23] ].join(""), n += t[27]), n += t[23], s.MJ(s.MB(e[2]) + "" == "theme")) n += t[28], n += t[29], n += t[30], n += [ t[31], s.F.entities(s.MC(e[6])), t[32] ].join(""), s.MJ(s.track_experiment("UBKeJMWANKOeWYPCSBXe")) && (n += t[33]), n += t[34], n += t[35], s.MJ(s.track_experiment("UBKeJMWANKOeWYPCSBXe")) && (n += t[36]), n += [ t[37], s.F.entities(s.MC(e[7])), t[38] ].join(""); else {
if (n += t[23], s.MD(e[8])) {
n += t[23];
var _ = r, l = a, h = o, a = s.MC(e[8]) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) i[0] = a[r - 1], n += t[23], s.MD(e[9]) && (n += t[39]), n += [ t[23], s.F.entities(s.MC(e[10])), t[23] ].join(""), s.MD(e[9]) && (n += t[27]), n += t[23];
i.shift(), r = _, a = l, o = h, n += t[23];
} else s.MD(e[11]) ? n += [ t[23], s.MC(e[11]), t[23] ].join("") :s.MD(e[7]) && (n += [ t[23], s.F.entities(s.MC(e[7])), t[23] ].join(""));
n += t[23], s.MD(e[12]) && (n += [ t[40], s.MC(e[12]), t[27] ].join("")), n += t[23], s.MJ(s.MG((s.MC(e[13]) || {}).popular)) && (n += [ t[41], s.F.entities(s.ME(t[42], s.MB, s.MN, null)), t[27] ].join("")), n += t[23];
}
n += t[23], s.MN("index", s.MI(s.MB(e[4])) + s.MI(1)), n += t[23], s.MJ(s.MB(e[2]) + "" != "theme") && s.MJ(2 == s.track_experiment("PVdIdXSeGEVSBRe")) && (n += t[43]), n += t[23], n += t[44];
}
i.shift(), n += t[1], s.MD(e[14]) && (n += t[45]), n += t[46];
}
return n += t[46], _r_(n);
}
return n += t[0], n = a(n), n += t[47], _r_(n);
});
}()), booking.jstmpl("search_destination_autocomplete_loading", function() {
_i_("155:117");
var t = [ "\n		", "\n", "\n	", '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n	\n	', '\n		<li class="c-autocomplete__item c-autocomplete__item--loading sb-autocomplete__item sb-autocomplete__item--city">\n			<span style="width: 340px;" class="sb-autocomplete__item-placeholder-text js-placeholder-text sb-autocomplete-list--loading-animation"></span>\n		</li>\n		<li class="c-autocomplete__item c-autocomplete__item--loading sb-autocomplete__item sb-autocomplete__item--city">\n			<span style="width: 235px;" class="sb-autocomplete__item-placeholder-text js-placeholder-text sb-autocomplete-list--loading-animation"></span>\n		</li>\n		<li class="c-autocomplete__item c-autocomplete__item--loading sb-autocomplete__item sb-autocomplete__item--city">\n			<span style="width: 300px;" class="sb-autocomplete__item-placeholder-text js-placeholder-text sb-autocomplete-list--loading-animation"></span>\n		</li>\n		<li class="c-autocomplete__item c-autocomplete__item--loading sb-autocomplete__item sb-autocomplete__item--city">\n			<span style="width: 197px;" class="sb-autocomplete__item-placeholder-text js-placeholder-text sb-autocomplete-list--loading-animation"></span>\n		</li>\n		<li class="c-autocomplete__item c-autocomplete__item--loading sb-autocomplete__item sb-autocomplete__item--city">\n			<span style="width: 300px;" class="sb-autocomplete__item-placeholder-text js-placeholder-text sb-autocomplete-list--loading-animation"></span>\n		</li>\n	', '\n			<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n				', '\n					<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n				', "\n			</li>\n		", "\n</ul>\n" ], e = [ "fe_sb_autocomplete_loading_items" ];
return _r_(function(i) {
_i_("155:427");
var n = "", s = this.fn;
function a(n) {
if (_i_("155:441"), s.MN("fe_sb_autocomplete_loading_items", 5), n += t[1], s.MJ(s.track_experiment("TAeKPWbAcBdJXIMWdXUC")) && (n += t[2], s.MN("fe_sb_autocomplete_loading_items", 8), n += t[1]), n += t[3], s.MJ(0) && s.MJ(s.track_experiment("UBKeJbLNecDKOLeENaReCJIKe"))) n += t[4]; else {
n += t[0];
var a = s.seq(1, s.MB(e[0])) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) {
i[0] = a[r - 1], n += t[5];
var _ = r, l = a, h = o, a = s.seq(1, 3) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) i[0] = a[r - 1], n += t[6];
i.shift(), r = _, a = l, o = h, n += t[7];
}
i.shift(), n += t[2];
}
return n += t[8], _r_(n);
}
return n += t[0], n = a(n), n += t[2], _r_(n);
});
}());
var n = t("component/autocomplete-core"), s = t("search/searchbox/model"), a = t("search/searchbox/analytics"), r = t("et");
i.exports = n.extend({
init:function() {
_i_("155:283"), this.optionsSpec = {
delay:{
name:"delay",
type:Number,
defaultValue:300
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
filterDestType:{
name:"filter-dest-type",
type:String
},
gpf:{
name:"gpf",
type:Boolean
},
gpOnly:{
name:"gp-only",
type:Boolean
},
minLength:{
name:"minlength",
type:Number,
defaultValue:2
},
focusOnLoad:{
name:"focus-on-load",
type:Boolean
},
focusOnKeypress:{
name:"focus-on-keypress",
type:Boolean
},
required:{
name:"required",
type:Boolean
},
flags:{
name:"flags",
type:String,
defaultValue:""
}
}, $.extend(this.optionsSpec, this.extendOptions()), this.$errors = this.$el.find("[data-error-id]"), this.$clear = this.$el.find('[data-clear=""]'), n.prototype.init.apply(this, arguments), this.model = s.getInstance(this.options.modelId), this.model.use("destination"), this.model.updateFlags(this.options.flags), this.model.on("change", this.modelChange.bind(this)), this.model.on("validation", this.modelValidation.bind(this)), this.options.required && this.model.destination.configure({
validate:!0
}), this.options.gpOnly && this.model.destination.configurePredictions({
gpo:1
}), this.options.gpf && this.model.destination.configure({
gpf:1
}), this.options.filterDestType && this.model.destination.configurePredictions({
dest_type:this.options.filterDestType
}), this.options.focusOnLoad && this.focusOnLoad(), this.options.focusOnKeypress && this.focusOnKeypress(), this.$errors.filter(".-visible").length && (this.model.destination.valid = !1), this.templateResults = B.jstmpl("search_destination_autocomplete_results"), this.toggleClear(), this.modelInit(), this.renderLoadingElement(), this.model.getFlag("VOGZKZPHcHOHRCTeMeNfRDcfFdHVT") && this.$el.find(".popdest").on("click", ".popdest__item", function(t) {
_i_("155:514"), B.et.customGoal("VOGZKZPHcHOHRCTeMeNfRDcfFdHVT", 1);
var e = $(t.currentTarget), i = e.data();
this.model.destination.setSearchString(i.title), this.model.destination.set({
ss:i.destTitle,
dest_id:i.destId,
dest_type:i.destType
}), this.displayPopularDestinations(!1), _r_();
}.bind(this)), _r_();
},
addInputEventListeners:function() {
_i_("155:284"), n.prototype.addInputEventListeners.apply(this, arguments), this.$clear.length && this.$clear.on("click", this.clearClick.bind(this)), _r_();
},
renderLoadingElement:function() {
_i_("155:285"), this.shouldShowLoadingState = !0, this.$loading = $(B.jstmpl("search_destination_autocomplete_loading").render()), this.$loading.find(".js-placeholder-text").each(function() {
_i_("155:461"), $(this).width(65 + parseInt(65 * Math.random(), 10)), _r_();
}), this.$loading.insertAfter(this.$list), _r_();
},
showLoading:function() {
_i_("155:286"), this.shouldShowLoadingState && (n.prototype.listHide.apply(this), this.$loading.addClass("-visible")), _r_();
},
hideLoading:function() {
_i_("155:287"), this.shouldShowLoadingState && this.$loading.removeClass("-visible"), _r_();
},
modelInit:function() {
_i_("155:288");
var t = {
ss:this.input.value
};
this.model.destination.init(t), _r_();
},
modelChange:function(t) {
if (_i_("155:289"), t && t.group && "destination" == t.group) {
var e = this.isDeletion && B.et.track("AEJPAcBNHJYfJQMECTQOYRLXMGZeQMIKe");
this.isDeletion && "msie" === B.env.b_browser && "8" === B.env.b_browser_version && B.et.stage("AEJPAcBNHJYfJQMECTQOYRLXMGZeQMIKe", 1);
var i = this.model.destination.get();
i.ss == this.input.value || e || this.setValue(i.ss), t.onlyCurrentCountry && (this.$input.focus(), this.autocomplete());
}
_r_();
},
modelValidation:function(t) {
_i_("155:290"), t && "destination" == t.group && (this.$errors.filter(".-visible").removeClass("-visible"), this.model.destination.valid || (this.$errors.filter('[data-error-id="' + this.model.destination.validationError + '"]').addClass("-visible"), a.send("[error] destination: " + this.model.destination.validationError), "search-string-empty" === this.model.destination.validationError && r.stage("ZOVMWAJfcVDZBHSWedNDeQfYYT", 1))), _r_();
},
inputClick:function() {
_i_("155:291");
var t = "PVdIVcZAJDKVGPMPSXPPTLPYO";
"" === this.input.value && (this.model.getFlag("PVdIVcZAJDKVGPMPSXPPTLPYO_tk") && r.stage(t, 1), (this.model.getFlag("PVdIVcZAJDKVGPMPSXPPTLPYO") || this.model.getFlag("PVdIVcZAJDKVTKe")) && this.showSuggestions()), n.prototype.inputClick.apply(this, arguments), this.displayPopularDestinations(), _r_();
},
inputInput:function() {
_i_("155:292"), this.model.destination.setSearchString(this.input.value), n.prototype.inputInput.apply(this, arguments), _r_();
},
inputKeyUp:function() {
_i_("155:293"), n.prototype.inputKeyUp.apply(this, arguments), this.displayPopularDestinations(this.input.value.length < this.options.minLength), _r_();
},
inputFocus:function() {
_i_("155:294"), a.send("[interaction] search input focus"), n.prototype.inputFocus.apply(this, arguments), _r_();
},
inputBlur:function() {
_i_("155:295"), this.model.getFlag("VOGZKZPHcHOHRCTeMeNfRDcfFdHVT") && setTimeout(this.displayPopularDestinations.bind(this, !1), 200), clearTimeout(this.timer);
var t = "UBKeJbLNecDKOLeENaReCJIKe";
this.model.getFlag(t) && (this.hideLoading(), this._loading = !1), this.model.destination.abortPredictions();
var e = this.model.destination.get().ss_raw;
if (e) {
var i = e.split(/\s+/).length;
a.sendOnce("[interaction] autocomplete tokens typed [" + i + "]");
}
n.prototype.inputBlur.apply(this, arguments), this.suggestionsLocked = !1, _r_();
},
inputEnter:function(t) {
_i_("155:296"), a.send("[interaction] search input pressed enter"), n.prototype.inputEnter.apply(this, arguments), _r_();
},
clearClick:function(t) {
_i_("155:297"), t.preventDefault(), this.reset({
hard:!0
}), this.input.focus(), _r_();
},
setValue:function(t) {
_i_("155:298"), n.prototype.setValue.apply(this, arguments), this.toggleClear(), _r_();
},
toggleClear:function() {
_i_("155:299"), this.$clear.length && this.$clear.toggleClass("-visible", "" !== this.input.value), _r_();
},
listShow:function() {
_i_("155:300"), this.items.length > 0 && this.input.value.length >= this.options.minLength ? n.prototype.listShow.apply(this, arguments) :this.items.length > 0 && (this.model.getFlag("PVdIVcZAJDKVGPMPSXPPTLPYO") || 2 === this.model.getFlag("PVdIVcZAJDKVTKe")) && n.prototype.listShow.apply(this, arguments), _r_();
},
autocomplete:function(t) {
_i_("155:301"), t = t || {}, this.highlightReset({
preserveInputValue:!0
});
var e = "UBKeJbLNecDKOLeENaReCJIKe";
clearTimeout(this.timer), this.model.destination.abortPredictions(), this.model.getFlag(e) || this.hideLoading(), this.toggleClear(), t.fromFocus || (this.isDeletion ? this.model.destination.reset() :this.postAutocomplete(), this.input.value.length >= this.options.minLength && (this.model.getFlag(e) && !this._loading && this.showLoading(), this._loading = !0, B.et.stage(e, 1)), this.timer = setTimeout(function() {
_i_("155:517"), this.input.value.length >= this.options.minLength && (this.model.destination.getPredictions(this.query(), this.render.bind(this)), this.model.getFlag(e) || this.showLoading()), _r_();
}.bind(this), this.options.delay)), _r_();
},
query:function() {
return _i_("155:302"), _r_(this.input.value);
},
extendOptions:function() {
return _i_("155:303"), _r_({});
},
render:function(t, e) {
_i_("155:304"), this.results = [], this.items = [], this.$items = $({}), this.PVdIVcZAJDKVGPMPSXPPTLPYO = !1, this.PVdIVcZAJDKVTKe = !1, this.hideLoading();
var i = this.model.getFlag("PVdIVcZAJDKVGPMPSXPPTLPYO");
!t && i && e.PVdIVcZAJDKVGPMPSXPPTLPYO && (this.PVdIVcZAJDKVGPMPSXPPTLPYO = !0), i = this.model.getFlag("PVdIVcZAJDKVTKe"), !t && i && e.PVdIVcZAJDKVTKe && (B.et.stage("PVdIVcZAJDKVTKe", 1), B.et.stage("PVdIVcZAJDKVTKe", e.__from_history__ ? 3 :2), 2 === i ? this.PVdIVcZAJDKVTKe = !0 :e.results = []), this._loading = !1, !t || "service-booking-no-results" != t.toString() && -1 === t.toString().indexOf("ZERO_RESULTS") || a.send("[context] autocomplete zero results search"), !t && Array.isArray(e.results) ? (a.send("[context] autocomplete suggestions [" + e.results.length + "]"), e.is_powered_by_google && a.send("[context] autocomplete google place search"), this.results = e.results, this.items = e.results.map(function(t) {
return _i_("155:505"), _r_({
value:t.label,
valueLowerCase:t.label.toLowerCase()
});
}), this.$list.html(this.templateResults.render(e)), this.$items = this.$list.find('[data-list-item=""]')) :t || this.$list.html(this.templateResults.render(e)), this.postAutocomplete(), _r_();
},
choose:function(t) {
_i_("155:305"), a.send("[interaction] autocomplete click position [" + t + "]"), a.send("[interaction] autocomplete click [" + this.results[t].dest_type + "]"), clearTimeout(this.timer), this.model.destination.abortPredictions(), this.model.destination.set(this.results[t]), n.prototype.choose.apply(this, arguments), this.PVdIVcZAJDKVTKe && B.et.customGoal("PVdIVcZAJDKVTKe", 1), this.PVdIVcZAJDKVGPMPSXPPTLPYO && B.et.customGoal("PVdIVcZAJDKVGPMPSXPPTLPYO", 1), B.et.goal("autocomplete_option_selected"), "theme" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_theme") :"hotel" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_hotel") :this.results[t].place_id ? B.et.goal("autocomplete_option_selected_google_places") :"query_finder" == this.results[t].result_type || B.et.goal("autocomplete_option_selected_destination"), ("theme" == this.results[t].dest_type || "theme_dest" == this.results[t].result_type) && this.model.submit(), "query_finder" == this.results[t].result_type && ($(".b-sb-acc-types").remove(), $(".b-travel-purpose").removeClass("b-form__booker-type--align-with-acc-types")), this.showCalendarOnDesinationChange(), _r_();
},
displayPopularDestinations:function(t) {
_i_("155:306");
var e = "VOGZKZPHcHOHRCTeMeNfRDcfFdHVT", i = this.$el.find(".popdest"), n = this.model.getFlag(e) && !this.$el.closest("sb-searchbox-sticky").length, s = this.input.value.length < this.options.minLength && (void 0 === t || t);
if (!n) return _r_();
return s && B.et.stage(e, 3), s && B.et.track(e) ? i.removeClass("g-hidden") :i.addClass("g-hidden"), _r_(n);
},
showCalendarOnDesinationChange:function() {
if (_i_("155:307"), !this.model.getFlag("calendar_on_destination_change") || this.model.dates.get().checkin) return _r_();
this.showCalendar(), _r_();
},
showCalendar:function() {
_i_("155:308"), setTimeout(function() {
_i_("155:482"), this.$el.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkin").trigger("show"), _r_();
}.bind(this)), _r_();
},
showSuggestions:function() {
if (_i_("155:309"), this.suggestionsLocked) return _r_();
this.model.destination.getSuggestions(this.render.bind(this)), this.suggestionsLocked = !0, _r_();
},
focusOnLoad:function() {
_i_("155:310");
var t = $(document);
t.ready(function() {
_i_("155:483"), this.input.focus(), this.$input.on("focus", this.displayPopularDestinations.bind(this)), _r_();
}.bind(this)), _r_();
},
focusOnKeypress:function() {
_i_("155:311");
var t = $(document);
this.$input.on("blur", function() {
_i_("155:484"), t.on("keydown.autofocus", this.inputFocusAndScroll.bind(this)), _r_();
}.bind(this)), this.$input.on("focus", function() {
_i_("155:485"), t.off("keydown.autofocus", this.inputFocusAndScroll.bind(this)), _r_();
}.bind(this)), _r_();
},
inputFocusAndScroll:function(t) {
_i_("155:312");
var e = this.$input.offset().top, i = t.keyCode, n = i > 47 && 58 > i || i > 64 && 91 > i || i > 95 && 112 > i;
n && document.activeElement && !/INPUT|TEXTAREA/.test(document.activeElement.nodeName) && this.$input.is(":visible") && !$(".modal-mask").length && (this.input.focus(), window.scrollY > e && $("html, body").animate({
scrollTop:e - 5
})), _r_();
},
reset:function() {
_i_("155:313"), this.selectedValue || this.model.destination.reset(), n.prototype.reset.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("search/destination/model", function(t, e, i) {
"use strict";
_i_("155:14");
var n = t("search/destination/service");
function s(t) {
_i_("155:58"), this.model = t, this.data = {
ss:""
}, this.valid = !0, this.validationError = "", this.options = {}, this.predicitonParameters = {}, this.searchInstance = null, this.suggestionsCache = {
results:[]
}, _r_();
}
$.extend(s.prototype, {
init:function(t) {
_i_("155:140"), this.data = t, (this.model.getFlag("PVdIVcZAJDKVGPMPSXPPTLPYO") || this.model.getFlag("PVdIVcZAJDKVTKe")) && (this.model.use("group"), this.model.on("init", function(t) {
_i_("155:506"), "group" === t.group && this.fetchSuggestions(), _r_();
}.bind(this))), this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("155:141"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
getOption:function(t) {
return _i_("155:142"), _r_(this.options[t]);
},
get:function() {
return _i_("155:143"), _r_(this.data);
},
set:function(t) {
if (_i_("155:144"), this.searchInstance && this.searchInstance.getResultDetails && !t._details) return this.searchInstance.getResultDetails(t, function(e, i) {
_i_("155:507"), i = i || {}, i._details = !0, this.set(i), window.ga && window.ga("send", "event", "ac_google_places", [ i.place_types || "unknown", i.name ].join("|"), this.data.ss_raw, t.position), _r_();
}.bind(this)), _r_();
this.data.ss = t.ss, this.data.dest_id = t.dest_id, this.data.dest_type = t.dest_type, t.nr_hotels && (this.data.nr_hotels = t.nr_hotels), this.data.acc_type_id = t.acc_type_id, t.place_id && t.latitude && t.longitude ? (this.data.place_id = t.place_id, this.data.latitude = t.latitude, this.data.longitude = t.longitude, this.data.place_types = t.place_types) :(this.data.place_id = "", this.data.latitude = "", this.data.longitude = "", this.data.place_types = null), t._fa && this.model.setFormAction(t._fa), B.env.fe_search_spain = "es" == t.cc1, t._ef = t._ef || [], this.data.dest_id && t._ef.push({
name:"dest_id",
value:this.data.dest_id
}), this.data.dest_type && t._ef.push({
name:"dest_type",
value:this.data.dest_type
}), this.data.place_id && t._ef.push({
name:"place_id",
value:this.data.place_id
}), this.data.latitude && t._ef.push({
name:"place_id_lat",
value:this.data.latitude
}), this.data.longitude && t._ef.push({
name:"place_id_lon",
value:this.data.longitude
}), this.data.place_types && Array.isArray(this.data.place_types) && t._ef.push({
name:"place_types",
value:this.data.place_types.join(",")
}), t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"search_selected",
value:"true"
}), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", t._ef), this.emit("change"), _r_();
},
setSearchString:function(t) {
_i_("155:145"), this.data.ss = t, this.data.ss_raw = t, this.valid || this.validate(), _r_();
},
reset:function() {
_i_("155:146"), this.data.dest_id = null, this.data.dest_type = null, this.data.place_id = null, this.data.latitude = null, this.data.longitude = null, this.model.setFormAction(null), this.model.setFields("destination", []), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", [ {
name:"dest_id",
value:""
}, {
name:"dest_type",
value:""
}, {
name:"search_pageview_id",
value:B.env.pageview_id
}, {
name:"search_selected",
value:"false"
} ]), this.emit("change"), _r_();
},
setTrackingFields:function(t, e) {
_i_("155:147"), this.model.setFields(t, e), this.emit("change"), _r_();
},
validate:function() {
_i_("155:148");
var t = !0, e = "";
if (!this.options.validate) return this.valid = t, this.validationError = e, _r_(t);
return "" === this.data.ss && (t = !1, e = "search-string-empty"), this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
initPredictions:function() {
if (_i_("155:149"), this.options.gpf) {
var t = B.require("search/destination/service-atlas");
t.init();
}
_r_();
},
configurePredictions:function(t) {
_i_("155:150"), $.extend(this.predicitonParameters, t), _r_();
},
getPredictions:function(t, e) {
_i_("155:151");
var i = $.extend({}, B.env.search_autocomplete_params, this.predicitonParameters);
this.searchInstance && this.searchInstance.abort();
function s(t, i) {
_i_("155:428"), i && (this.model.setFields("destination", i._ef), this.model.setFields("destinationNotSelected", i._efd)), e.apply(null, arguments), _r_();
}
i.ss = t, i.gpf = this.options.gpf, this.options.onlyCurrentCountry && (i.e_acf_i = B.env.b_country_id, i.e_acf_t = "country"), this.searchInstance = n.search(i, s.bind(this)), this.model.setFields("destinationOriginal", [ {
name:"ss_raw",
value:i.ss
} ]), this.model.setFields("destinationSelected", [ {
name:"search_pageview_id",
value:B.env.pageview_id
} ]), _r_();
},
abortPredictions:function() {
_i_("155:152"), this.searchInstance && this.searchInstance.abort(), _r_();
},
getSuggestions:function(t) {
if (_i_("155:153"), this.suggestionsCache.results.length) return setTimeout(function() {
_i_("155:508"), t(null, this.suggestionsCache), _r_();
}.bind(this), 0), _r_();
this.model.one("destination:suggestions", function() {
_i_("155:479"), this.suggestionsCache.results.length && t(null, this.suggestionsCache), _r_();
}.bind(this)), _r_();
},
fetchSuggestions:function() {
if (_i_("155:154"), this.suggestionsLoading) return _r_();
var t = function(t, e) {
_i_("155:442"), !t && e && e.results && (e.PVdIVcZAJDKVGPMPSXPPTLPYO = e.results.length > 0, e.PVdIVcZAJDKVTKe = e.results.length > 0, this.suggestionsCache = e), this.suggestionsLoading = !1, this.emit("destination:suggestions"), _r_();
}, e = B.require("search/destination/service-booking");
this.suggestionsInstance = e.getSuggestions(t.bind(this), this.model.group.get()), this.suggestionsLoading = !0, _r_();
},
initOnlyCurrentCountry:function(t) {
_i_("155:155"), this.options.onlyCurrentCountry = !!t, _r_();
},
getOnlyCurrentCountry:function() {
return _i_("155:156"), _r_(!!this.options.onlyCurrentCountry);
},
setOnlyCurrentCountry:function(t) {
_i_("155:157"), this.options.onlyCurrentCountry = !!t, this.emit("change", {
onlyCurrentCountry:!0
}), _r_();
},
emit:function(t, e) {
_i_("155:158"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"destination"
})), _r_();
}
}), i.exports = s, _r_();
}), B.define("search/destination/service", function(t, e, i) {
"use strict";
_i_("155:15");
var n = t("search/destination/service-booking"), s = t("search/destination/service-atlas");
function a(t, e, i) {
_i_("155:59");
var n, s, a, o = [], _ = [], l = [], h = 0, d = function(t, e, n) {
if (_i_("155:159"), h++, o.length && (e ? _.push(e) :l[t] = n, h == o.length)) if (_.length == o.length) i.call(null, _[0], null); else {
var s = r(l);
i.call(null, null, s);
}
_r_();
}, c = function() {
for (_i_("155:160"), n = 0; n < o.length; n++) o[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) s = t[n].search.call(t[n], $.extend({}, e), d.bind(null, n)), s.getResultDetails && (a = s.getResultDetails), o.push(s);
return _r_({
abort:c,
getResultDetails:a
});
}
function r(t) {
_i_("155:60");
var e = 6, i = 3, n = {
results:[],
_ef:[],
_efd:[]
};
return t.forEach(function(t) {
if (_i_("155:161"), !t) return _r_();
if (t.results) if (n.results.length) {
t.results = t.results.filter(l), t.results.splice(i);
var s = e - t.results.length;
n.results.splice(s), n.results = t.results.concat(n.results);
} else n.results = t.results;
[ "_ef", "_efd" ].forEach(function(e) {
_i_("155:443"), t[e] && (n[e] = n[e].concat(t[e].filter(o(n[e])))), _r_();
}), n.is_powered_by_google = n.is_powered_by_google || t.results.length && t.is_powered_by_google, _r_();
}), n.results.forEach(function(t, e) {
_i_("155:162"), t._ef = _(t._ef, "ac_position", e), _r_();
}), n.city = n.results, n.__js_upa__ = n.is_powered_by_google, _r_(n);
}
function o(t) {
_i_("155:61");
var e = {};
return t.forEach(function(t) {
_i_("155:163"), e[t.name] = !0, _r_();
}), _r_(function(t) {
return _i_("155:118"), _r_(!e[t.name]);
});
}
function _(t, e, i) {
return _i_("155:62"), t = t.filter(function(t) {
return _i_("155:314"), _r_(t.name !== e);
}), t.push({
name:e,
value:i
}), _r_(t);
}
function l(t) {
return _i_("155:63"), _r_(-1 != [ "route", "postal_code", "street_address" ].indexOf(t.place_type));
}
function h(t, e, i) {
_i_("155:64");
var n, s = [], a = [], r = function(t, e) {
if (_i_("155:164"), s.length) if (t) a.push(t), a.length == s.length && i.call(null, t, e); else for (i.call(null, t, e), n = 0; n < s.length; n++) s[n].abort();
_r_();
}, o = function() {
for (_i_("155:165"), n = 0; n < s.length; n++) s[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) s.push(t[n].search.call(t[n], $.extend({}, e), r));
return _r_({
abort:o
});
}
function d(t, e, i) {
_i_("155:65");
var n, s = {}, a = function(e, n) {
_i_("155:166"), setTimeout(function() {
_i_("155:444"), e && t.length ? r() :i.call(null, e, n), _r_();
}, 0), _r_();
}, r = function() {
_i_("155:167");
var i = t.shift();
n = i.search.call(i, $.extend({}, e), a), s.getResultDetails = n.getResultDetails, _r_();
}, o = function() {
_i_("155:168"), n && n.abort(), _r_();
};
return r(), s.abort = o, _r_(s);
}
i.exports = {
search:function(t, e) {
if (_i_("155:169"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
return _r_(t.gpo ? s.search(t, e) :t.fesp_acf_i || t.fesp_acf_i_regions || t.fesp_acf_i_cities ? n.search(t, e) :t.gpf && t.ss.match(/[0-9]/) ? a([ n, s ], t, e) :t.gpr ? h([ n, s ], t, e) :t.gpf ? d([ n, s ], t, e) :n.search(t, e));
}
}, _r_();
}), B.define("search/destination/service-atlas", function(t, e, i) {
"use strict";
_i_("155:16");
var n = t("event-emitter"), s = B.env.b_map_center_latitude || B.env.b_latitude || void 0, a = B.env.b_map_center_longitude || B.env.b_longitude || void 0, r = 3e4, o = 2, _ = [ "ChIJNy0jzGPMUQ4RWpboPw0ztMY", "ChIJ2xJC2SwmsUcRBqiHnUEubtY", "ChIJT-IyeGHurw0Rx89nUEaYTPM", "ChIJk_Swujrurw0R7yS_X2BSuD4" ], l = {
administrative_area_level_1:"region",
administrative_area_level_2:"region",
administrative_area_level_3:"region",
administrative_area_level_4:"region",
administrative_area_level_5:"region",
airport:"airport",
country:"country",
locality:"city",
point_of_interest:"landmark",
route:"region",
street_address:"region",
postal_code:"region",
sublocality:"district"
};
function h() {
return _i_("155:66"), _r_(!!B.atlas);
}
function d(t, e, i) {
_i_("155:67");
var n = {
city:[]
};
n.__upa__ = e.filter(c).slice(0, 5).map(function(e, i) {
_i_("155:315"), e = e.get("data");
var n = {
upa:!0,
nr_hotels:0,
nr_hotels_25:0,
ss_raw:t.ss,
dest_id:e.id,
place_id:e.id,
dest_type:l[e.types && e.types[0]] || "landmark",
place_type:e.types && e.types[0],
place_types:e.types,
ss:e.description,
label:e.description,
label_blocks:m(e.description, e.matched_substrings),
label_highlighted:f(e.description, e.matched_substrings, {
encode:t.gpf_encode
}),
label_multiline:"<span><b>" + e.description + "</b></span>",
hotels:0,
lc:B.env.b_lang,
position:i,
_ef:[],
cjk:"zh" === B.env.b_lang || "xt" === B.env.b_lang || "ja" === B.env.b_lang || "ko" === B.env.b_lang
};
return n._ef.push({
name:"ac_position",
value:i
}), _r_(n);
}), n.results = n.__upa__, n._ef = [], n._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), n.is_powered_by_google = n.results.length > 0, n.__js_upa__ = n.is_powered_by_google, i(null, n), _r_();
}
function c(t) {
_i_("155:68");
var e = t.get("data");
return _r_(-1 === _.indexOf(e.id));
}
function u(t, e, i) {
_i_("155:69"), t = t || {}, t.id = e.id || e.place_id, t.place_id = t.id, t.name = e.name || e.formatted_address, t.latitude = e.geometry.location.lat(), t.longitude = e.geometry.location.lng(), t.place_types = e.types, t.dest_type = l[e.types && e.types[0]] || "landmark", t._ef = t._ef || [], t._ef.push({
name:"ss_short",
value:e.name
}), i(null, t), _r_();
}
function p(t, e) {
if (_i_("155:70"), !t.place_id) return e(null, t), _r_();
this.atlas.getGeocodeDetails({
placeId:t.place_id
}, function(i) {
_i_("155:170"), u(t, i, e), _r_();
}), _r_();
}
function f(t, e, i) {
_i_("155:71");
var n = "";
if (i = i || {}, !e || 0 === e.length) return _r_(t);
for (var s = e.map(function(t) {
return _i_("155:316"), _r_(t.offset);
}), a = e.map(function(t) {
return _i_("155:317"), _r_(t.offset + t.length - 1);
}), r = 0; r < t.length; r++) -1 != s.indexOf(r) && (n += "<b>"), n += t.charAt(r), -1 != a.indexOf(r) && (n += "</b>");
return i.encode && (n = B.jstmpl.fn.FILTERS.entities(n), n = n.replace(/&lt;b&gt;/g, "<b>"), n = n.replace(/&lt;&#47;b&gt;/g, "</b>")), _r_(n);
}
function m(t, e) {
_i_("155:72");
var i = [];
if (!e || 0 === e.length) return _r_([ {
text:t
} ]);
return "www" == B.env.b_site_type && e[0].offset && B.et.track("PVYRUDUbJSXPJGEIQDNCXO") && i.push({
text:t.substr(0, e[0].offset)
}), e.forEach(function(n, s) {
_i_("155:171");
var a = n.offset + n.length, r = (e[s + 1] && e[s + 1].offset || t.length) - a;
i.push({
highlighted:!0,
text:t.substr(n.offset, n.length)
}), r && i.push({
text:t.substr(a, r)
}), _r_();
}), _r_(i);
}
i.exports = n.extend({
init:function(t, e) {
_i_("155:318"), t = t || {};
var i = "booking-places";
if (!h()) return _r_();
if (this.initialized) return e && this.atlas.done(e), _r_();
this.initialized = !0;
var n = B.atlas.require("atlas-places"), s = document.createElement("div");
this.atlas = new n({
provider:"provider-places",
modules:[ "autocomplete", "places" ],
options:{
domNode:s,
channel:i
}
}), e && this.atlas.done(e), _r_();
},
search:function(t, e) {
if (_i_("155:319"), !t || !t.ss || "function" != typeof e) throw new Error("service-atlas-invalid-arguments");
if (t.ss.length < o) return setTimeout(function() {
_i_("155:486"), e(new Error("service-atlas-too-short-search-string"), {}), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
if (!h()) return setTimeout(function() {
_i_("155:487"), e(new Error("service-atlas-no-atlas"), null), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
var i = !1, n = {
query:t.ss
};
s && a && r && (n.lat = s, n.lon = a, n.radius = r);
var _ = function(n) {
_i_("155:462"), i || (n && Array.isArray(n) ? d(t, n, e) :e(new Error("service-atlas-invalid-results"), null)), _r_();
}, l = function(t) {
_i_("155:463"), i || e(new Error("service-atlas-error " + t), null), _r_();
};
this.init(t, function() {
_i_("155:488"), this.atlas.autocomplete(n, _, l), _r_();
}.bind(this));
var c = function() {
_i_("155:464"), i = !0, _r_();
};
return _r_({
getResultDetails:p.bind(this),
abort:c
});
}
}), _r_();
}), B.define("search/destination/service-booking", function(t, e, i) {
"use strict";
_i_("155:17");
var n = t("event-emitter"), s = B.env.b_sb_autocomplete_predictions_url;
function a(t) {
return _i_("155:73"), t.term = t.ss, delete t.ss, _r_(t);
}
function r(t, e, i) {
_i_("155:74"), t && t.city ? t.__upa__ || 0 !== t.city.length || t.bbtoollocations && 0 !== t.bbtoollocations.length || t.theme && 0 !== t.theme.length || t.searches && 0 !== t.searches.length ? (t.city = t.city.map(function(e, i) {
return _i_("155:465"), !e.label && e.labels && (e.label = o(e.labels)), !e.labels || "zh" !== e.lc && "xt" !== e.lc && "ja" !== e.lc && "ko" !== e.lc || (e.label_blocks = _(e.labels)), e.ss = e.label, e.label_highlighted = e.label_highlighted || e.label, e.position = i, e._ef = e._ef || [], e._ef.push({
name:"ac_position",
value:i
}), e._ef.push({
name:"ac_langcode",
value:e.lc
}), t.__did_you_mean__ && (e._ef.push({
name:"suggested_term",
value:t.__did_you_mean__.suggestion
}), e._ef.push({
name:"suggestion_clicked",
value:1
})), _r_(e);
}), t.results = t.city, t.bbtoollocations && (t.results = t.bbtoollocations.map(function(t, e) {
return _i_("155:515"), delete t.label_highlighted, t.label_blocks = [ {
highlighted:1,
text:t.name
}, {
text:", "
}, {
text:t.address
} ], t.ss = t.name, t.latitude = t.place_id_lat, t.longitude = t.place_id_lon, t.position = e, t._ef = t._ef || [], t._ef.push({
name:"bbtoollocation",
value:"1"
}), _r_(t);
}).concat(t.results)), t.theme && (t.theme = t.theme.map(function(e, i) {
return _i_("155:489"), e.ss = e.label, e._ef = e._ef || [], e._ef.push({
name:"ac_position",
value:i + t.city.length
}), _r_(e);
}), t.theme.length && e.limitOneTheme && (t.theme = [ t.theme[0] ]), t.results = t.results.concat(t.theme)), t.searches && t.searches.length > 0 && (t.results = t.searches.concat(t.results)), t._ef = t._ef || [], t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"ac_suggestion_list_length",
value:t.city.length
}), t._ef.push({
name:"ac_suggestion_theme_list_length",
value:t.theme ? t.theme.length :0
}), t._efd = t._efd || [], i(null, t)) :i(new Error("service-booking-no-results"), t) :i(new Error("service-booking-data-invalid"), null), _r_();
}
function o(t) {
return _i_("155:75"), _r_(t.map(function(t) {
return _i_("155:429"), _r_(t.text);
}).join(", "));
}
function _(t) {
_i_("155:76");
var e = [];
return t.forEach(function(t, i) {
_i_("155:172"), i > 0 && e.push({
text:", "
}), e.push({
highlighted:!!t.hl,
text:t.text
}), _r_();
}), _r_(e);
}
i.exports = n.extend({
search:function(t, e) {
if (_i_("155:320"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
var i = a(t);
this.emit("beforeajax", t, i);
var n = $.ajax({
type:"get",
url:s,
data:i,
success:function(i, n, s) {
_i_("155:518"), r(i, t, e), _r_();
}.bind(this),
error:function(t, i, n) {
_i_("155:519"), "abort" !== i && e(new Error("service-booking-error " + n), null), _r_();
}.bind(this)
}), o = function() {
_i_("155:466"), n && n.abort && n.abort(), _r_();
};
return _r_({
abort:o
});
},
getSuggestions:function(t, e) {
_i_("155:321");
var i = B.env.search_autocomplete_params, n = 0;
B.env.bb && B.env.ibb ? n = 5 :e && (n = 0 === e.children_ages.length ? 1 === e.adults_count ? 1 :2 === e.adults_count ? 2 :3 :4), i = Object.assign({}, i, {
ttype:n
});
var s = $.ajax({
type:"get",
url:"/search_history_and_suggestions",
data:i,
success:function(e, i, n) {
_i_("155:509"), t(null, e), _r_();
},
error:function(e, i, n) {
if (_i_("155:510"), "abort" === i) return _r_();
t(new Error("service-booking-error " + n), null), _r_();
}
}), a = function() {
_i_("155:467"), s && s.abort && s.abort(), _r_();
};
return _r_({
abort:a
});
}
}), _r_();
}), B.define("component/search/submit", function(t, e, i) {
"use strict";
_i_("155:18");
var n = "AEJPVZMYCIPeAZNIBbLYcYC", s = t("component"), a = t("search/searchbox/model");
function r() {
if (_i_("155:77"), this.$model.destination && this.$model.destination.data && this.$model.destination.data.nr_hotels) {
var t = this.$model.destination.data.nr_hotels;
B.et.track(n) && this.render(t);
}
_r_();
}
i.exports = s.extend({
init:function() {
_i_("155:322"), this.$model = a.getInstance("main"), this.$searchForm = this.$el.closest("form"), this.buttonText = this.$el.text(), this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("155:323");
var t = this;
this.$model.on("change", function() {
_i_("155:468"), r.call(t), _r_();
}), _r_();
},
render:function(t) {
_i_("155:324");
var e = $("<span/>").text(B.jstmpl.translations("generalised_num_properties", t, {
num_hotels:t
}));
this.$el.html(e), e.prepend(this.buttonText), _r_();
}
}), _r_();
}), B.define("component/search/dates/date-field", function(t, e, i) {
"use strict";
_i_("155:19");
var n = t("caret"), s = t("component"), a = t("formatting/date"), r = t("keycodes"), o = t("read-data-options"), _ = t("search/searchbox/model");
i.exports = s.extend({
init:function() {
_i_("155:325"), this.options = o(this.el, {
forceInitRender:{
name:"force-init-render",
type:Boolean,
defaultValue:!1
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
modelMode:{
name:"mode",
type:String,
defaultValue:"single"
}
}), this.model = _.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.model.dates.configure({
noValidation:!0,
allowMaxLos:!0
}), this.$display = this.$el.find("[data-display]"), this.$inputs = this.$el.find("[data-input]"), this.$inputYear = this.$inputs.filter('[data-input-fragment="year"]'), this.$inputMonth = this.$inputs.filter('[data-input-fragment="month"]'), this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]'), this.$controls = this.$el.find("[data-controls]"), this.$iconDay = this.$el.find("[data-icon-day]"), this.$field = this.$el.find("[data-field]"), this.$controls.on("mousedown", this.controlsMouseDown.bind(this)), this.$inputs.on("focus", this.inputFocus.bind(this)), this.$inputs.on("blur", this.inputBlur.bind(this)), this.$inputs.on("keydown", this.inputKeyDown.bind(this)), this.$inputs.on("keyup", this.inputKeyUp.bind(this)), this.$inputs.on("keypress", this.inputKeyPress.bind(this)), B.eventEmitter.on("CALENDAR:shown CALENDAR:closed", this.updateFocusClass.bind(this)), this.previousState = {}, this.state = {
editing:!1,
currentField:null
}, this.initModel(), this.showNoDatesTip(), _r_();
},
initModel:function() {
_i_("155:326");
var t = !1, e = this.$inputYear.val(), i = this.$inputMonth.val(), n = this.$inputDay.val();
t = e && i && n ? this.model.dates.initDate(this.options.modelMode, {
year:+e,
month:+i - 1,
day:+n
}) :this.model.dates.initDate(this.options.modelMode, null), (!t || this.options.forceInitRender) && this.render(), _r_();
},
modelChange:function(t) {
if (_i_("155:327"), "dates" !== t.group || !t[this.options.modelMode]) return _r_();
this.render(), _r_();
},
controlsMouseDown:function(t) {
_i_("155:328"), this.inputBlurPrevented = !0, setTimeout(function() {
_i_("155:490"), this.inputBlurPrevented = !1, _r_();
}.bind(this)), _r_();
},
inputFocus:function(t) {
_i_("155:329"), clearTimeout(this.inputBlurTimer), this.state.editing = !0, this.state.currentField = t.target.getAttribute("data-input-fragment"), this.startEditing(), this.updateFocusClass(), _r_();
},
inputBlur:function(t) {
_i_("155:330");
var e = t.target, i = e.getAttribute("data-input-fragment");
this.inputBlurPrevented || (this.state.editing = !1, this.state.currentField = null), this.setDateFragment(i, e.value), this.inputBlurTimer = setTimeout(function() {
_i_("155:511"), this.apply(), this.updateFocusClass(), _r_();
}.bind(this)), _r_();
},
inputKeyDown:function(t) {
_i_("155:331");
var e = t.target, i = e.getAttribute("data-input-fragment");
if (r.isModifier(t.which)) return _r_();
r.isUpArrow(t.which) ? (this.adjustDateFragment(i, e.value, 1), t.preventDefault()) :r.isDownArrow(t.which) ? (this.adjustDateFragment(i, e.value, -1), t.preventDefault()) :r.isLeftArrow(t.which) || r.isBackspace(t.which) ? this.inputMoveAdjacent(t, -1, {
backspace:r.isBackspace(t.which)
}) :r.isRightArrow(t.which) && this.inputMoveAdjacent(t, 1), _r_();
},
inputKeyUp:function(t) {
_i_("155:332");
var e = t.target;
if (r.isModifier(t.which)) return _r_();
!r.isNavigation(t.which) && !r.isDeletion(t.which) && e.value.length >= Math.floor(e.getAttribute("maxlength")) && this.inputMoveAdjacent(t, 1, {
automatic:!0
}), _r_();
},
inputMoveAdjacent:function(t, e, i) {
_i_("155:333");
var s, a, r = t.target, o = this.$inputs.length, _ = n.getPosition(r), l = 0, h = this.$inputs.filter(r).index(), d = o - 1, i = i || {};
if (e > 0 && (l = r.value.length, d = 0), i.automatic && h == o - 1) return _r_();
if (!i.force && n.getSelectionLength(r)) return _r_();
(i.force || _ == l) && (h += e, (0 > h || h > o - 1) && (h = d), s = this.$inputs.get(h), i.automatic && s.value.length ? s.select() :(a = e > 0 ? 0 :s.value.length, n.setPosition(s, a), i.backspace || t.preventDefault())), _r_();
},
inputKeyPress:function(t) {
_i_("155:334"), t.keyCode && r.isNavigation(t.keyCode) || !(t.which < 48 || t.which > 57) || (this.inputMoveAdjacent(t, 1, {
automatic:!0,
force:!0
}), t.preventDefault()), _r_();
},
startEditing:function() {
_i_("155:335"), setTimeout(function() {
_i_("155:491"), this.model.dates.startEditing(), _r_();
}.bind(this)), this.render(), _r_();
},
setDateFragment:function(t, e) {
_i_("155:336"), e = "" === e ? null :+e, "month" === t && null !== e && (e -= 1), this.model.dates.setEditingFragment(this.options.modelMode, t, e), _r_();
},
adjustDateFragment:function(t, e, i) {
_i_("155:337"), e = "" === e ? 0 :+e, "month" === t && (e -= 1), this.model.dates.adjustEditingFragment(this.options.modelMode, t, e, i), _r_();
},
apply:function() {
_i_("155:338"), this.model.dates.applyEditing(this.options.modelMode), _r_();
},
render:function() {
_i_("155:339");
var t = this.$field.hasClass("-editing"), e = this.model.dates.get(), i = this.$inputYear.val(), n = this.$inputMonth.val(), s = this.$inputDay.val(), r = e[this.options.modelMode], o = e["editing_" + this.options.modelMode] || {}, _ = o.year, l = o.month, h = o.day, d = "date_with_weekday";
i = "" === i ? null :+i, n = "" === n ? null :+n, s = "" === s ? null :+s, _ = "number" == typeof _ ? _ :null, l = "number" == typeof l ? l + 1 :null, h = "number" == typeof h ? h :null, t != this.state.editing && (t = this.state.editing, this.$field.toggleClass("-editing", t)), i !== _ && (this.$inputYear.val(_), "year" === this.state.currentField && this.$inputYear.select()), n !== l && (this.$inputMonth.val(l), "month" === this.state.currentField && this.$inputMonth.select()), s !== h && (this.$inputDay.val(h), "day" === this.state.currentField && this.$inputDay.select()), t || r || (this.$field.addClass("-empty"), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), !t && r && (this.$field.removeClass("-empty"), d = this.$display.data("date-format") || d, this.$display.html(a.format(r, d)), this.$iconDay.html(a.format(r, "{day_of_month}"))), _r_();
},
updateFocusClass:function() {
_i_("155:340"), setTimeout(function() {
_i_("155:492");
var t = this.$el.parent(), e = this.state.editing, i = !t.hasClass("c2-wrapper-s-hidden");
e || i ? (this.$el.addClass("-focus"), B.et.stage("PVSfHJefFaXaRQMUO", 1)) :this.$el.removeClass("-focus"), _r_();
}.bind(this), 100), _r_();
},
showNoDatesTip:function() {
_i_("155:341"), "searchresults" === B.env.b_action && "0" === B.env.b_has_valid_dates_not_in_past && B.env.b_newcomer_by_cookie && "checkin" === this.options.modelMode && B.et.track("AEJPCcMEfTLWCKVbJeDIBLaT") && ($("#inspire_filter_block").hide(), this.$el.attr({
"data-component-delay":2e3,
"data-component-position":B.env.rtl ? "left" :"right",
"data-component-content":"sb_no_dates_fly_dropdown_block",
"data-component-extra-class":"no-dates-fly-dropdown",
"data-component-show-once-key":"sb_no_dates_fly_dropdown"
}).component("dropdown-onload-shower")), _r_();
}
}), _r_();
}), B.define("search/dates/date-prices", function(t, e, i) {
_i_("155:20");
var n, s = t("component"), a = t("fragment"), r = t("promise"), o = B.utils.accounting.formatMoney, _ = "UBKeJbLYQCLBMJFUWOEQeRe", l = t("et"), h = {
daysToDisplay:62
}, d = {}, c = {}, u = /^(city|country|district|region)$/;
booking.jstmpl("search_calendar_date_prices", function() {
_i_("155:119");
var t = [ "\n		", '\n<span class="sb-date-prices-footer">\n	', "/private/sxp_calendar_average_starting_prices_with_dates/name", "\n	", "/private/sxp_calendar_starting_prices_with_dates_error/name", "\n</span>\n" ], e = [ "price" ];
return _r_(function(i) {
_i_("155:430");
var n = "", s = this.fn;
function a(i) {
return _i_("155:445"), i += t[1], i += s.MD(e[0]) ? [ t[0], s.ME(t[2], s.MB, s.MN, null), t[3] ].join("") :[ t[0], s.ME(t[4], s.MB, s.MN, null), t[3] ].join(""), i += t[5], _r_(i);
}
return n += t[0], n = a(n), n += t[3], _r_(n);
});
}());
var p = s.extend({
init:function(t, e) {
_i_("155:342"), this.model || (this.model = t, this.model.use("destination"), e ? (this.initParameters(), this.bindEvents()) :(this.initParameters(), this.initTrackingOnly())), _r_();
},
initParameters:function() {
_i_("155:343"), "index" === B.env.b_action ? this.resetParameters() :parseInt(B.env.b_cal_dest_id, 10) && B.env.b_cal_dest_type && B.env.b_cal_dest_type.match(u) ? (this.destinationId = parseInt(B.env.b_cal_dest_id, 10), this.destinationType = B.env.b_cal_dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters(), _r_();
},
resetParameters:function() {
_i_("155:344"), this.destinationId = !1, this.destinationType = !1, $(".c2-wrapper").addClass("calendar-no-prices"), _r_();
},
bindEvents:function() {
_i_("155:345"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.onCalendarShown.bind(this)), this.model.on("change", this.modelChange.bind(this)), _r_();
},
modelChange:function(t) {
_i_("155:346"), t && t.group && "destination" == t.group && (this.cleanPrices(), t = this.model.destination.get(), parseInt(t.dest_id, 10) && t.dest_type && t.dest_type.match(u) ? (this.destinationId = parseInt(t.dest_id), this.destinationType = t.dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters()), _r_();
},
initTrackingOnly:function() {
_i_("155:347"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.trackStage.bind(this)), this.model.on("change", this.modelChange.bind(this)), _r_();
},
trackStage:function(t, e) {
if (_i_("155:348"), !e || !e.instance || !e.instance.options || "av_calendar" === e.instance.options.category) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
switch (l.stage(_, 1), B.env.b_is_domestic && l.stage(_, 3), B.env.b_action) {
case "index":
l.stage(_, 2);
break;

case "searchresults":
l.stage(_, 4);
}
_r_();
},
onCalendarShown:function(t, e) {
if (_i_("155:349"), !e || !e.instance || !e.instance.options || "av_calendar" === e.instance.options.category) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
this.trackStage(t, e);
var i = e.instance, n = this.getDatesToQuery(i.getCurrentMonthUtc());
this.showLoading(i), this.getPricesFromCache({
dates:n,
datesData:[],
days:h.daysToDisplay
}).then(this.getPrices.bind(this)).then(this.displayPrices.bind(this, i, n)).then(this.hideLoading.bind(this, i))["catch"](this.hideLoading.bind(this, i)), _r_();
},
getPrices:function(t) {
return _i_("155:350"), _r_(t.dates ? a.call("lp.get_av_calendar_prices", {
dest_type:this.destinationType,
dest_id:this.destinationId,
checkin:t.dates.startFromDay,
n_days:t.days,
adults:2
}).then(function(e) {
if (_i_("155:493"), !e || !e.dates) return _r_(t.datesData);
return _r_(t.datesData.concat(e.dates));
}) :t.datesData);
},
getPricesFromCache:function(t) {
return _i_("155:351"), _r_(new r(function(e, i) {
_i_("155:494");
for (var n, s, a = new Date(t.dates.startFromDay), r = new Date(t.dates.endUntilDay), o = t.datesData; r >= a && (n = d[this.formatDate(a)]); ) o.push(n), a = this.addDay(a);
if (a >= r) return t.dates = !1, _r_(e($.extend(t, {
dates:t.dates,
datesData:o
})));
for (t.dates.startFromDay = this.formatDate(this.substractDay(a)), s = new Date(t.dates.startFromDay), a = new Date(t.dates.endUntilDay); a >= s && (n = d[this.formatDate(a)]); ) o.push(n), a = this.substractDay(a);
return s >= a ? t.dates = !1 :(t.dates.endUntilDay = this.formatDate(this.addDay(a)), t.days = this.daysBetween(t.dates.startFromDay, t.dates.endUntilDay)), _r_(e($.extend(t, {
dates:t.dates,
datesData:o
})));
}.bind(this)));
},
getDatesToQuery:function(t) {
_i_("155:352");
var e = new Date(t), i = new Date(t);
return i.setDate(i.getDay() + h.daysToDisplay), _r_({
startFromDay:this.formatDate(e),
endUntilDay:this.formatDate(i)
});
},
getCalendarFooter:function(t, e, i) {
if (_i_("155:353"), !(t && e && t.dateObject_ && e.dateObject_)) return _r_("");
for (var n = new Date(t.dateObject_), s = new Date(e.dateObject_), a = "", r = 0; s > n; ) {
if (a = this.formatDate(n), !d[a]) {
r = 0;
break;
}
r += parseInt(d[a].avg_price_raw, 10), n = this.addDay(n);
}
return r && (r = o(r, B.env.b_selected_currency)), _r_(B.jstmpl("search_calendar_date_prices").render({
price:r,
start_bold:"<b>",
end_bold:"</b>"
}));
},
cleanPrices:function() {
_i_("155:354"), d = {}, c = {}, $(".c2-day-price-ready").each(function() {
_i_("155:469"), $(this).removeClass("c2-day-price-ready").data("day-price", "").html('<i class="bicon bicon-search"></i>'), _r_();
}), _r_();
},
displayPrices:function(t, e, i) {
_i_("155:355");
var n, s, a, r = 0, _ = 0, l = t.$screen, h = t.id();
if (!i) return this.hideLoading(t), _r_();
c[h] = c[h] || {};
for (var u = 0; u < i.length; u++) {
if (i[u].error) continue;
if (n = new Date(i[u].checkin), a = this.formatDate(n), c[h][a]) continue;
if (d[a] = i[u], c[h][a] = !0, _ = Math.floor(parseInt(i[u].avg_price_raw, 10)), r = i[u].avg_price_pretty, r = o(_, B.env.b_selected_currency), !r) break;
s = l.find("[data-id=" + n.getTime() + "]").find(".c2-day-price"), s.length && s.hasClass("c2-day-price-ready") || (s.addClass("c2-day-price-ready"), s.data("day-price", _), s.html(r));
}
_r_();
},
hideLoading:function(t) {
_i_("155:356"), t.$header.find(".c2-progress-bar-inner").removeClass("c2-progress-bar-animation"), _r_();
},
showLoading:function(t) {
_i_("155:357"), t.$header.find(".c2-progress-bar-inner").addClass("c2-progress-bar-animation"), _r_();
},
addDay:function(t) {
_i_("155:358");
var e = new Date(t);
return e.setDate(e.getDate() + 1), _r_(e);
},
substractDay:function(t) {
_i_("155:359");
var e = new Date(t);
return e.setDate(e.getDate() - 1), _r_(e);
},
formatDate:function(t) {
_i_("155:360");
var e = new Date(t), i = "" + (e.getMonth() + 1), n = "" + e.getDate(), s = e.getFullYear();
return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([ s, i, n ].join("-"));
},
daysBetween:function(t, e) {
_i_("155:361"), t = new Date(t), e = new Date(e);
var i = 864e5, n = t.getTime(), s = e.getTime(), a = Math.abs(n - s);
return _r_(Math.round(a / i));
}
});
i.exports = {
getInstance:function() {
return _i_("155:173"), n || (n = new p()), _r_(n);
}
}, _r_();
}), B.define("component/search/dates/dates-errors", function(t, e, i) {
"use strict";
_i_("155:21");
var n = t("component"), s = t("jstmpl"), a = t("read-data-options"), r = t("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("155:362"), this.options = a(this.el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("validation", this.modelValidation.bind(this)), this.template = s("fe_search_dates_errors"), _r_();
},
modelValidation:function(t) {
if (_i_("155:363"), "dates" !== t.group) return _r_();
t.valid ? this.$el.html("") :this.$el.html(this.template.render({
fe_error:t.validationError,
fe_new:!0
})), _r_();
}
}), _r_();
}), booking.jstmpl("search_dates_length_of_stay", function() {
_i_("155:40");
var t, e = [ "\n	", "\n", '\n    <div class="sb-dates__los ', "-bolder", '" data-component="track"\n        data-track="view"\n        data-hash="', '"\n        data-stage="1">\n      ', "\n        ", '\n          <select class="hp-availability-los">\n            ', "\n            ", "\n              <option ", "selected", ' value="', '">', "</option>\n            ", "\n          </select>\n        ", "/private/sbox_general_dates_num_nights_1/name", "\n      ", '\n          <span class="sb-best-month" data-component="search/top-rated-month/experiment_ugcd_best_month_to_visit"></span>\n      ', "\n    </div>\n" ], i = [ "loc_hp_select_html", "fe_sb_state_length_of_stay", "fe_max_los" ];
return _r_(function(n) {
_i_("155:108");
var s = "", a = this.fn;
function r(s) {
if (_i_("155:174"), s += e[1], a.MJ(a.MB(i[1]))) {
if (s += e[2], a.MJ(a.track_experiment("ABbJNOIKSBOdDZET")) && (s += e[3]), s += [ e[4], "YdVGbWcVCET", e[5] ].join(""), a.MJ(a.track_experiment("YdVGbWcVCET"))) {
s += e[6];
var r = "";
r += e[7], a.MN("fe_max_los", a.MJ(a.MB(i[1]) > 30) ? a.MB(i[1]) :30), r += e[8];
var o = a.seq(1, a.MB(i[2])) || [];
n.unshift(null);
for (var _ = 1, l = o.length; l >= _; _++) n[0] = o[_ - 1], r += e[9], a.MJ(_ == a.MB(i[1])) && (r += e[10]), r += [ e[11], _, e[12], _, e[13] ].join("");
n.shift(), r += e[14], a.MN(i[0], r), s += [ e[6], (n.unshift({
num_nights:a.MB(i[0])
}), t = a.ME(e[15], a.MB, a.MN, a.MO(a.MC(i[1]), null, e[15])), n.shift(), t), e[16] ].join("");
} else s += [ e[6], (n.unshift({
num_nights:a.MB(i[1])
}), t = a.ME(e[15], a.MB, a.MN, a.MO(a.MC(i[1]), null, e[15])), n.shift(), t), e[16] ].join("");
s += e[16], a.MJ(a.track_experiment("adUAVGZGeAZCCNUEVNFJO")) && (s += e[17]), s += e[18];
}
return s += e[1], _r_(s);
}
return s += e[0], s = r(s), s += e[1], _r_(s);
});
}()), B.define("component/search/dates/length-of-stay", function(t, e, i) {
_i_("155:22");
var n = t("calendar-base").Calendar, s = t("component"), a = t("read-data-options"), r = t("search/searchbox/model");
i.exports = s.extend({
init:function() {
_i_("155:364"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
isAvailability:{
name:"is-availability",
type:Boolean
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.state = {}, this.template = B.jstmpl("search_dates_length_of_stay"), _r_();
},
modelChange:function(t) {
if (_i_("155:365"), !t || "dates" != t.group) return _r_();
this.render(), _r_();
},
render:function() {
_i_("155:366");
var t = this.model.dates.get();
this.state.fe_is_availability = this.options.isAvailability, this.state.fe_sb_state_length_of_stay = !t.editing && t.checkin && t.checkout && n.diff(t.checkout, t.checkin) > 0 ? n.interval(t.checkin, t.checkout) - 1 :"", this.$el.html(this.template.render(this.state)), B.et.track("adUAVGZGeAZCCNUEVNFJO") && this.$el.loadComponents(), _r_();
}
}), _r_();
}), B.define("search/dates/model", function(t, e, i) {
"use strict";
_i_("155:23");
var n = t("calendar-base").Calendar, s = t("search/modules/search-date").SearchDate, a = B.env.b_timestamp, r = B.env.sunday_first, o = B.env.b_search_max_months || 13;
function _(t) {
_i_("155:78"), this._model = t, this._data = {
initialized:!1,
checkin:null,
checkout:null,
firstValidDay:null,
lastValidDay:null,
editing:!1,
editing_checkin:null,
editing_checkout:null,
length_of_stay:null,
week_start:r ? 0 :1
}, this._valid = !0, this._validationError = "", this._options = {
maxLos:30,
maxMonths:o,
syncLegacy:!0
};
var e = new Date(1e3 * (a - 39600));
this._data.firstValidDay = s.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}), this._data.lastValidDay = s.createFlexible({
year:e.getUTCFullYear(),
month:e.getUTCMonth() + this._options.maxMonths,
day:0
}), this._data.firstValidCheckoutDay = s.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate() + 1
}), this._options.syncLegacy && (this.boundLegacyDateChange = this.legacyDateChange.bind(this), B.eventEmitter.on(B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange)), _r_();
}
$.extend(_.prototype, {
init:function(t) {
_i_("155:175");
var e = s.create(t.checkin), i = s.create(t.checkout);
this.validateDate("checkin", e).valid && this.validateDate("checkout", i, {
checkin:e
}).valid && (this.setDate("checkin", e, {
init:!0
}), this.setDate("checkout", i, {
init:!0
}), this.emit("init")), _r_();
},
configure:function(t, e) {
_i_("155:176");
var i = this._options.maxMonths, n = this._options.syncLegacy;
void 0 !== e ? this._options[t] = e :"object" == typeof t && $.extend(this._options, t), i != this._options.maxMonths && (this._data.lastValidDay = s.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month + this._options.maxMonths,
day:0
})), n !== this._options.syncLegacy && B.eventEmitter[this._options.syncLegacy ? "on" :"off"](B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange), _r_();
},
getOption:function(t) {
return _i_("155:177"), _r_(this._options[t]);
},
get:function() {
return _i_("155:178"), _r_(this._data);
},
initDate:function(t, e, i) {
_i_("155:179"), i = i || {}, i.init = !0;
var n = !1;
if (this._data.initialized) return _r_(!1);
return e && (n = this.setDate(t, e, i)), this["initialized" + t] = !0, this.initializedcheckin && this.initializedcheckout && (this.emit("init"), this._data.initialized = !0), _r_(n);
},
setDate:function(t, e, i) {
_i_("155:180"), i = i || {};
var a, r, o, _ = {};
if (e = s.create(e), !this._options.noValidation && !this.validateDate(t, e, {
loose:!0
}).valid) return _r_(!1);
if ("checkin" == t) this._data.checkin = e, r = !0, s.compare(this._data.checkin, this._data.firstValidDay) < 0 && (this._data.checkin = s.create(this._data.firstValidDay)), s.compare(this._data.checkin, this._data.lastValidDay) > 0 && (this._data.checkin = s.createFlexible({
year:this._data.lastValidDay.year,
month:this._data.lastValidDay.month,
day:this._data.lastValidDay.day - 1
})), this._data.checkout ? (a = n.diff(this._data.checkout, e), 0 >= a ? (this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0) :!this._options.allowMaxLos && a > this._options.maxLos && (this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + this._options.maxLos
}), o = !0)) :(this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0); else {
if ("checkout" != t) return _r_(!1);
this._data.checkout = e, o = !0, s.compare(this._data.checkout, this._data.lastValidDay) > 0 && (this._data.checkout = s.create(this._data.lastValidDay)), 0 == s.compare(this._data.checkout, this._data.firstValidDay) && (this._data.checkin = s.create(this._data.firstValidDay), this._data.checkout = s.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month,
day:this._data.firstValidDay.day + 1
}), o = !0), this._data.checkin && (a = n.diff(e, this._data.checkin), 0 >= a && (this._data.checkin = null)), this._data.checkin || (this._data.checkin = s.createFlexible({
year:e.year,
month:e.month,
day:e.day - 1
}), r = !0);
}
return r && (this._options.syncLegacy && B.search.setDate_("checkin", this._data.checkin.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkin = this._data.checkin, _.checkin = !0), o && (this._options.syncLegacy && B.search.setDate_("checkout", this._data.checkout.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkout = this._data.checkout, _.checkout = !0), (r || o) && (this._data.length_of_stay = this._data.checkin && this._data.checkout && n.interval(this._data.checkin, this._data.checkout) - 1), this._data.editing = !1, i.init || this.emit("change", _), _r_(!0);
},
startEditing:function() {
if (_i_("155:181"), this._data.editing) return _r_();
this._data.editing = !0, this.emit("change", {
editing:!0
}), _r_();
},
setEditingFragment:function(t, e, i) {
if (_i_("155:182"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
if ("number" != typeof i && null !== i) throw new TypeError("invalid value");
var n = this._data["editing_" + t] || {}, a = {
year:n.year,
month:n.month,
day:n.day
}, r = {
editing:!0
};
return a[e] = i, this._data.editing = !0, this._data["editing_" + t] = s.create(a), r[t] = !0, this.emit("change", r), _r_(!0);
},
adjustEditingFragment:function(t, e, i, n) {
if (_i_("155:183"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
var s = 1, a = (this._data["editing_" + t] || {}, i + n);
return "month" == e ? s = 0 :"year" == e && (s = this._data.firstValidDay.year), s > a && (a = s), _r_(this.setEditingFragment(t, e, a));
},
applyEditing:function(t) {
if (_i_("155:184"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
return this._data["editing_" + t].complete ? _r_(this.setDate(t, this._data["editing_" + t])) :(this.clearDates(), _r_(!0));
},
clearDates:function() {
_i_("155:185"), this._data.checkin = null, this._data.checkout = null, this._data.editing = !1, this._data.editing_checkin = null, this._data.editing_checkout = null, this._data.length_of_stay = null, this._options.syncLegacy && (B.search.setDate_("checkin", "", {
referrer:"search/dates/model"
}), B.search.setDate_("checkout", "", {
referrer:"search/dates/model"
})), this.emit("change", {
checkin:!0,
checkout:!0
}), _r_();
},
validate:function(t) {
_i_("155:186"), t = t || {};
var e = !0, i = "";
if (!e || !t.notEmpty || this._data.checkin && this._data.checkout || (e = !1, i = "missing-dates"), e && !this._data.checkin && this._data.checkout && (e = !1, i = "missing-checkin"), e && this._data.checkin && !this._data.checkout && (e = !1, i = "missing-checkout"), e && this._data.checkin) {
var n = this.validateDate("checkin", this._data.checkin);
n.valid || (e = n.valid, i = n.validationError);
}
if (e && this._data.checkout) {
var n = this.validateDate("checkout", this._data.checkout);
n.valid || (e = n.valid, i = n.validationError);
}
return t.checkOnly || this._valid == e || (this._valid = e, this._validationError = i, this.emit("validation", {
valid:e,
validationError:i
})), _r_(e);
},
validateDate:function(t, e, i) {
_i_("155:187"), i = i || {}, i.checkin = i.checkin || this._data.checkin;
var a = null;
if (!t || "checkin" != t && "checkout" != t) return _r_({
valid:!1,
validationError:"invalid-data"
});
if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day || isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) return _r_({
valid:!1,
validationError:"invalid-data"
});
if ("checkin" == t && s.compare(e, this._data.firstValidDay) < 0 || "checkout" == t && 0 == s.compare(e, this._data.firstValidDay)) return _r_({
valid:!1,
validationError:"past"
});
if ("checkout" == t && i.checkin && (a = n.diff(e, i.checkin)), null !== a) {
if (0 == a) return _r_({
valid:!1,
validationError:"more-than-one-day"
});
if (0 > a) return _r_({
valid:!1,
validationError:"negative-period"
});
if (a > this._options.maxLos) return _r_({
valid:!1,
validationError:"exceeds-max-los"
});
}
return _r_({
valid:!0,
validationError:""
});
},
legacyDateChange:function(t, e) {
_i_("155:188");
var i, n;
if ("search/dates/model" == e.referrer) return _r_();
i = "checkin" == e.type ? "checkin" :"checkout", n = s.createFromString(e.value.toString()), this.setDate(i, n), _r_();
},
emit:function(t, e) {
_i_("155:189"), e = e || {}, this._model.emit(t, $.extend(e, {
group:"dates"
})), _r_();
}
}), i.exports = _, _r_();
}), booking.jstmpl("fe_search_dates_errors", function() {
_i_("155:41");
var t = [ "\n	", '\n	<div class="sb-searchbox__error -visible">\n		', "\n			", "/error/checkout_date_invalid/name", "\n		", "/error/checkin_date_invalid/name", "/private/sbox_error_checkin_future/name", "/error/checkin_date_to_far_in_the_future/name", "/private/sbox_error_checkout_after/name", "/private/sbox_error_30_night_res/name", "\n	</div>\n", "\n" ], e = [ "fe_error", "s_raw_param_errorc_checkout_date_invalid", "s_raw_param_errorc_checkin_date_invalid", "s_raw_param_errorc_checkin_date_in_the_past", "s_raw_param_errorc_checkin_date_to_far_in_the_future", "s_raw_param_errorc_checkout_date_not_after_checkin_date", "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin" ];
return _r_(function(i) {
_i_("155:109");
var n = "", s = this.fn;
function a(i) {
return _i_("155:190"), (s.MJ(s.MB(e[0])) || s.MJ(s.MC(e[1])) || s.MJ(s.MC(e[2])) || s.MJ(s.MC(e[3])) || s.MJ(s.MC(e[4])) || s.MJ(s.MC(e[5])) || s.MJ(s.MC(e[6]))) && (i += t[1], s.MJ(s.MB(e[0]) + "" == "missing-checkout") || s.MJ(s.MC(e[1])) ? i += [ t[2], s.ME(t[3], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0]) + "" == "missing-checkin") || s.MJ(s.MC(e[2])) ? i += [ t[2], s.ME(t[5], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0]) + "" == "past") || s.MJ(s.MC(e[3])) ? i += [ t[2], s.ME(t[6], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0]) + "" == "checkin_date_to_far_in_the_future") || s.MJ(s.MC(e[4])) ? i += [ t[2], s.ME(t[7], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0]) + "" == "negative-period") || s.MJ(s.MC(e[5])) ? i += [ t[2], s.ME(t[8], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0]) + "" == "exceeds-max-los") || s.MJ(s.MC(e[6])) ? i += [ t[2], s.ME(t[9], s.MB, s.MN, null), t[4] ].join("") :s.MJ(s.MB(e[0])) && (i += [ t[2], s.ME(t[5], s.MB, s.MN, null), t[4] ].join("")), i += t[10]), i += t[11], _r_(i);
}
return n += t[0], n = a(n), n += t[11], _r_(n);
});
}()), B.define("component/search/destination/country-only", function(t, e, i) {
"use strict";
_i_("155:24");
var n = t("component"), s = t("search/searchbox/model"), a = t("read-data-options");
i.exports = n.extend({
init:function() {
_i_("155:367"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = s.getInstance(this.options.modelId), this.model.use("destination"), this.model.on("change", this.modelChange.bind(this)), this.$onlyCurrentCountry = this.$el.find("[data-input]"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("155:368");
var t = this.$onlyCurrentCountry.is(":checked");
this.model.destination.initOnlyCurrentCountry(t), _r_();
},
modelChange:function(t) {
if (_i_("155:369"), !t || !t.onlyCurrentCountry) return _r_();
var e = this.$onlyCurrentCountry.is(":checked"), i = this.model.destination.getOnlyCurrentCountry();
e != i && this.$onlyCurrentCountry.prop("checked", i), _r_();
},
onlyCurrentCountryChange:function() {
_i_("155:370"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
}
}), _r_();
}), B.define("component/search/group/group", function(t, e, i) {
_i_("155:25"), booking.jstmpl("search_group_group_html", function() {
_i_("155:120");
var t, e = [ "\n		", "\n", '\n	<div data-component="track" data-track="view" data-hash="', '" data-custom-goal="1"></div>\n', '" data-custom-goal="2"></div>\n', '" data-custom-goal="3"></div>\n', '\n\n\n<div class="u-clearfix', " sb-group--flex-compact", " sb-group--flex-wide", '" data-render>\n\n', "\n\n", "\n	", "\n\n\n\n", '\n		<input type="hidden" name="', '" value="', '">\n	', "\n			", '\n		<input type="hidden" name="room', '">\n		', "\n\n\n	", "\n\n		\n		", '\n			<div class="sb-group__field sb-group__field-rooms">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="1" data-max-value="', '">\n					<input type="hidden" name="no_rooms" id="no_rooms" value="', '" data-group-rooms-count data-input>\n					<button type="button" class="sb-group__input__button sb-group__input__button--left" data-decrement', " disabled", '>-</button>\n					<span class="sb-group__input__label">', "/private/search_box_room_filter/name", '</span>\n					<button type="button" class="sb-group__input__button sb-group__input__button--right" data-increment', ">+</button>\n				</div>\n			</div>\n		\n		", '\n			<div class="sb-group__field-a sb-group__field-rooms">\n				<label class="sb-searchbox__label -small sb-group__label" for="no_rooms">', "/private/sbox_rooms/name", '</label>\n				<div class="sb-group__input">\n					', '\n			<select name="no_rooms" id="no_rooms" data-group-rooms-count ', 'class="sb-searchbox__input sb-group__input__select"', "1", ">\n				", '\n					<option value="', '" ', 'selected="selected"', ">\n						", "\n					</option>\n				", "\n			</select>\n		", '\n					<i class="sb-group__input__chevron bicon-downchevron"></i>\n				</div>\n			</div>\n		', '\n			<div class="sb-group__field-a -b sb-group__field-rooms">\n				<div class="sb-group__input">\n					', '\n			<div class="sb-group__field sb-group__field-rooms">\n				<label class="sb-searchbox__label sb-group__field__label ', "-inline", ' -small" for="no_rooms">', "</label>\n				", "\n			</div>\n		", '\n		<input type="hidden" name="no_rooms" value="', "\n\n	", '\n			<div class="sb-group__field">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="1" data-max-value="', '">\n					<input type="hidden" name="group_adults" id="group_adults" value="', '" data-group-adults-count data-input>\n					<button type="button" class="sb-group__input__button sb-group__input__button--left" data-decrement', "/private/search_box_adults_filter/name", '\n			<div class="sb-group__field-a">\n				<label class="sb-searchbox__label -small sb-group__label" for="group_adults">\n					', "/private/sbox_adults/name", "/private/bbt_searchbox_travellers/name", '\n				</label>\n				<div class="sb-group__input">\n					', '\n			<select name="group_adults" id="group_adults" data-group-adults-count ', '\n			<div class="sb-group__field-a -b">\n				<div class="sb-group__input">\n					', '\n			<div class="sb-group__field">\n				<label class="sb-searchbox__label sb-group__field__label ', ' -small" for="group_adults">\n					', "\n				</label>\n				", '\n		<input type="hidden" name="group_adults" value="', '\n			<div class="sb-group__field">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="0" data-max-value="', '">\n					<input type="hidden" name="group_children" id="group_children" value="', '" data-component="search/group/children-ages-tooltip" data-group-children-count data-input>\n					<button type="button" class="sb-group__input__button  sb-group__input__button--left" data-decrement', '>-</button>\n					<span class="sb-group__input__label">\n						', "\n							", "/private/search_box_no_children_filter_default/name", "\n						", "/private/search_box_children_filter/name", '\n					</span>\n					<button type="button" class="sb-group__input__button sb-group__input__button--right" data-increment', '\n			<div class="sb-group__field-a">\n				<label class="sb-searchbox__label -small sb-group__label" for="group_children">', "/private/sbox_children/name", '\n			<select name="group_children" id="group_children" data-group-children-count data-component="search/group/children-ages-tooltip" ', '\n			<div class="sb-group__field ', "ex-es-fx", '">\n				<label class="sb-searchbox__label sb-group__field__label ', ' -small" for="group_children">\n				', "\n					", "/private/sbox_children_clarification/name", "&nbsp;", "\n				", '\n			<div class="sb-group__children__field', " -a", '">\n				', '\n				<label class="sb-searchbox__label -small sb-group__children__label">\n					', "/private/bh_gsb_search_box_checkout_age/name", "/private/bh_gsb_search_box_checkout_age_plural/name", "/private/loc_sbox_children_age_singular/name", "/private/loc_sbox_children_age_plural/name", "\n\n				", '\n							<div class="sb-group__input">\n						', "\n						<select ", ' name="age" data-group-child-age="', '">\n							<option class="sb_child_ages_empty_zero" value="12 ">', "\n								", "\n									", "/private/gsb_search_box_age_on_date/name", "/private/gsb_search_box_age_no_date/name", "</option>\n							", '\n								<option value="', ">\n									", "\n										", "\n											", "/private/gsb_index_sb_child_age_under/name", "/private/gsb_index_sb_child_age/name", "/private/loc_counter_word_child_age_cjk/name", "\n								</option>\n							", "\n						</select>\n						", '\n								<i class="sb-group__input__chevron bicon-downchevron"></i>\n							</div>\n						', "\n\n</div>\n" ], i = [ "b_search_config", "fe_sb_width", "fe_sb_bbtool_searchbox", "b_browser", "fe_sb_state_traveller", "fe_sb_group_always_expanded", "fe_sb_include_traveller", "fe_sb_state_room_distribution", "fe_sb_state_rooms", "fe_room_parameter", "aux_counter", "fe_sb_group_max_rooms", "fe_sb_state_number_of_rooms", "fe_text", "fe_sb_group_block_labels", "fe_new", "fe_sb_group_rooms_hide", "fe_sb_group_max_adults", "fe_sb_state_number_of_adults", "fe_sb_group_use_adults_label", "fe_sb_group_adults_hide", "fe_sb_group_max_children", "fe_sb_state_number_of_children", "fe_sb_group_children_hide", "fe_sb_group_localized_short_date", "fe_sb_state_checkout", "fe_children_ages", "fe_child_i", "fe_sb_group_max_children_age", "b_lang_is_cjk", "fe_sb_state_children_ages" ];
return _r_(function(n) {
_i_("155:431");
var s = "", a = this.fn;
function r(s) {
if (_i_("155:446"), s += e[1], a.MJ(a.MC(i[0])) && a.MJ(a.MC(i[0]).b_nr_rooms_needed > 1) && (s += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[3] ].join("")), s += e[1], a.MJ(a.MC(i[0])) && a.MJ(a.MC(i[0]).b_adults_total > 2) && (s += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[4] ].join("")), s += e[1], a.MJ(a.MC(i[0])) && a.MJ(a.MC(i[0]).b_children_total > 0) && (s += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[5] ].join("")), s += e[6], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (s += a.MJ(/small/.test(a.MB(i[1]))) ? e[7] :e[8]), s += e[9], a.MN("fe_sb_group_max_rooms", 30), s += e[1], a.MN("fe_sb_group_max_pets", 10), s += e[1], a.MN("fe_sb_group_max_adults", 30), s += e[1], a.MN("fe_sb_group_max_children", 10), s += e[1], a.MN("fe_sb_group_max_children_age", 17), s += e[10], a.MJ(a.MC(i[3])) && a.MJ(a.MC(i[3]) + "" != "msie") && a.MJ(a.track_experiment_stage("search_sb_groups_new_style", 1)), s += e[1], a.MJ(a.MC(i[3])) && a.MJ(a.MC(i[3]) + "" == "msie") && a.MJ(a.track_experiment_stage("search_sb_groups_new_style", 2)), s += e[1], a.MJ(a.MC(i[3])) && a.MJ(a.MC(i[3]) + "" != "msie") && a.MK(a.MB(i[2])) && a.MJ(a.track_experiment_stage("gs_sb_plus_minus_controls", 1)), s += e[1], a.MJ(a.MC(i[3])) && a.MJ(a.MC(i[3]) + "" == "msie") && a.MK(a.MB(i[2])) && a.MJ(a.track_experiment_stage("gs_sb_plus_minus_controls", 2)), s += e[1], a.MK(a.MB(i[2])) && a.MJ(/small/.test(a.MB(i[1]))) && a.MJ(a.track_experiment_stage("gs_sb_plus_minus_controls", 3)) ? s += e[11] :a.MK(a.MB(i[2])) && a.MJ(a.track_experiment_stage("gs_sb_plus_minus_controls", 4)) && (s += e[1]), s += e[12], a.MK(a.MB(i[5])) && a.MJ(a.MB(i[6])) && (s += e[11], a.MJ(a.MB(i[4]) + "" == "couple") ? (s += e[0], a.MN("fe_sb_group_rooms_hide", 1), s += e[0], a.MN("fe_sb_group_adults_hide", 1), s += e[0], a.MN("fe_sb_group_children_hide", 1), s += e[11]) :a.MJ(a.MB(i[4]) + "" == "solo") ? (s += e[0], a.MN("fe_sb_group_rooms_hide", 1), s += e[0], a.MN("fe_sb_group_adults_hide", 1), s += e[0], a.MN("fe_sb_group_children_hide", 1), s += e[11]) :a.MJ(a.MB(i[4]) + "" == "business") && (s += e[0], a.MN("fe_sb_group_use_adults_label", 1), s += e[0], a.MN("fe_sb_group_children_hide", 1), s += e[11]), s += e[1]), s += e[10], a.MD(i[7])) {
s += e[11];
var r = a.MC(i[7]) || [];
n.unshift({
fe_room:null
});
for (var v, b = 1, y = r.length; y >= b; b++) n[0].fe_room = v = r[b - 1], s += [ e[13], a.F.entities((v || {}).name), e[14], a.F.entities((v || {}).value), e[15] ].join("");
n.shift(), s += e[1];
} else if (a.MD(i[8])) {
s += e[11], a.MN("aux_counter", 1), s += e[11];
var r = a.MC(i[8]) || [];
n.unshift({
fe_room:null
});
for (var v, b = 1, y = r.length; y >= b; b++) {
n[0].fe_room = v = r[b - 1], s += e[0], a.MN("fe_room_parameter", ""), s += e[0];
var M = b, B = r, k = y, C = w, r = a.seq(1, v.b_adults) || [];
n.unshift({
i:null
});
for (var w, b = 1, y = r.length; y >= b; b++) n[0].i = w = r[b - 1], s += e[16], a.MN("fe_room_parameter", a.MB(i[9]) + "" + (a.MB(i[9]) ? "," :"") + "A"), s += e[0];
n.shift(), b = M, r = B, y = k, w = C, s += e[0];
var M = b, B = r, k = y, x = D, r = (v || {}).b_children_ages || [];
n.unshift({
fe_child_age:null
});
for (var D, b = 1, y = r.length; y >= b; b++) n[0].fe_child_age = D = r[b - 1], s += e[16], a.MN("fe_room_parameter", a.MB(i[9]) + "" + (a.MB(i[9]) ? "," :"") + (D || "0")), s += e[0];
n.shift(), b = M, r = B, y = k, D = x, s += [ e[17], a.F.entities(a.MC(i[10])), e[14], a.F.entities(a.MC(i[9])), e[18] ].join(""), a.MN("aux_counter", a.MI(a.MB(i[10])) + a.MI(1)), s += e[11];
}
n.shift(), s += e[1];
}
if (s += e[19], a.MK(a.MB(i[16])) ? (s += e[0], s += e[20], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (s += [ e[21], a.MC(i[11]), e[22], a.MC(i[12]), e[23] ].join(""), a.MJ(1 == a.MB(i[12])) && (s += e[24]), s += [ e[25], (n.unshift({
num_rooms:a.MB(i[12])
}), t = a.ME(e[26], a.MB, a.MN, a.MO(a.MC(i[12]), null, e[26])), n.shift(), t), e[27] ].join(""), a.MJ(a.MB(i[12]) == a.MB(i[11])) && (s += e[24]), s += e[28]) :a.MJ(1 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += [ e[29], a.ME(e[30], a.MB, a.MN, null), e[31] ].join(""), n.unshift({
fe_new:e[34]
}), s = _(s), n.shift(), s += e[42]) :a.MJ(2 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += e[43], n.unshift({
fe_new:e[34],
fe_text:e[34]
}), s = l(s), n.shift(), s += e[42]) :(s += e[44], a.MD(i[14]) || (s += e[45]), s += [ e[46], a.ME(e[30], a.MB, a.MN, null), e[47] ].join(""), s = o(s), s += e[48]), s += e[11]) :s += [ e[49], a.F.entities(a.MC(i[12])), e[15] ].join(""), s += e[50], a.MK(a.MB(i[20])) ? (s += e[0], s += e[20], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (s += [ e[51], a.MC(i[17]), e[52], a.MC(i[18]), e[53] ].join(""), a.MJ(1 == a.MB(i[18])) && (s += e[24]), s += [ e[25], (n.unshift({
num_adults:a.MB(i[18])
}), t = a.ME(e[54], a.MB, a.MN, a.MO(a.MC(i[18]), null, e[54])), n.shift(), t), e[27] ].join(""), a.MJ(a.MB(i[18]) == a.MB(i[17])) && (s += e[24]), s += e[28]) :a.MJ(1 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += e[55], s += a.MD(i[19]) ? a.ME(e[57], a.MB, a.MN, null) :a.ME(e[56], a.MB, a.MN, null), s += e[58], n.unshift({
fe_new:e[34]
}), s = d(s), n.shift(), s += e[42]) :a.MJ(2 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += e[60], n.unshift({
fe_new:e[34],
fe_text:e[34]
}), s = c(s), n.shift(), s += e[42]) :(s += e[61], a.MD(i[14]) || (s += e[45]), s += e[62], s += a.MD(i[19]) ? a.ME(e[57], a.MB, a.MN, null) :a.ME(e[56], a.MB, a.MN, null), s += e[63], s = h(s), s += e[48]), s += e[11]) :s += [ e[64], a.F.entities(a.MC(i[18])), e[15] ].join(""), s += e[50], a.MK(a.MB(i[23])) && (s += e[0], s += e[20], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (s += [ e[65], a.MC(i[21]), e[66], a.MC(i[22]), e[67] ].join(""), a.MJ(0 == a.MB(i[22])) && (s += e[24]), s += e[68], s += a.MJ(0 == a.MB(i[22])) ? [ e[69], a.ME(e[70], a.MB, a.MN, null), e[71] ].join("") :[ e[69], (n.unshift({
num_kids:a.MB(i[22])
}), t = a.ME(e[72], a.MB, a.MN, a.MO(a.MC(i[22]), null, e[72])), n.shift(), t), e[71] ].join(""), s += e[73], a.MJ(a.MB(i[22]) == a.MB(i[21])) && (s += e[24]), s += e[28]) :a.MJ(1 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += [ e[74], a.ME(e[75], a.MB, a.MN, null), e[31] ].join(""), n.unshift({
fe_new:e[34]
}), s = f(s), n.shift(), s += e[42]) :a.MJ(2 == a.track_experiment("PVSfZRSdUDDDBMURET")) ? (s += e[60], n.unshift({
fe_new:e[34],
fe_text:e[34]
}), s = p(s), n.shift(), s += e[42]) :(s += e[77], a.MJ(a.track_experiment("ZOBMJUYOAAREaQXMDMWJINFUKBQVIKe")) && (s += e[78]), s += e[79], a.MD(i[14]) || (s += e[45]), s += e[80], s += a.MJ(a.track_experiment("ZOBMJUYOAAREaQXMDMWJINFUKBQVIKe")) ? [ e[81], (n.unshift({
nbsp:e[83]
}), t = a.ME(e[82], a.MB, a.MN, null), n.shift(), t), e[84] ].join("") :[ e[81], a.ME(e[75], a.MB, a.MN, null), e[84] ].join(""), s += e[63], s = u(s), s += e[48]), s += e[11]), s += e[50], a.MK(a.MB(i[23]))) {
if (s += e[0], a.MJ(a.MB(i[22])) && (a.MJ(a.MB(i[8])) || a.MJ(a.MB(i[30])))) {
if (s += e[85], a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) && (s += e[86]), s += e[87], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) || (s += e[88], a.MD(i[25]) ? (a.MN(i[24], a.DATE(a.MB(i[25]), "short_date", "", "", "")), s += a.MJ(1 == a.MB(i[22])) ? [ (n.unshift({
date:a.MB(i[24])
}), t = a.ME(e[89], a.MB, a.MN, null), n.shift(), t), e[1] ].join("") :[ (n.unshift({
date:a.MB(i[24])
}), t = a.ME(e[90], a.MB, a.MN, null), n.shift(), t), e[1] ].join("")) :s += a.MJ(1 == a.MB(i[22])) ? [ a.ME(e[91], a.MB, a.MN, null), e[1] ].join("") :[ a.ME(e[92], a.MB, a.MN, null), e[1] ].join(""), s += e[63]), s += e[93], a.MN("fe_child_i", 0), s += e[93], s += e[93], a.MD(i[30])) s += e[81], n.unshift({
fe_children_ages:a.MB(i[30])
}), s = g(s), n.shift(), s += e[84]; else if (a.MD(i[8])) {
s += e[81];
var r = a.MC(i[8]) || [];
n.unshift({
fe_room:null
});
for (var v, b = 1, y = r.length; y >= b; b++) n[0].fe_room = v = r[b - 1], s += e[71], n.unshift({
fe_children_ages:a.MG((v || {}).b_children_ages)
}), s = m(s), n.shift(), s += e[81];
n.shift(), s += e[84];
}
s += e[48];
}
s += e[11];
}
return s += e[113], _r_(s);
}
function o(s) {
_i_("155:447"), s += e[32], a.MD(i[15]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[11])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[12]) == o.value) && (s += e[38]), s += e[39], a.MD(i[13]) ? (n.unshift({
num_rooms:o.value
}), t = a.ME(e[26], a.MB, a.MN, a.MO(o.value, null, e[26])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function _(s) {
_i_("155:448"), s += e[32], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[11])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[12]) == o.value) && (s += e[38]), s += e[39], a.MD(i[13]) ? (n.unshift({
num_rooms:o.value
}), t = a.ME(e[26], a.MB, a.MN, a.MO(o.value, null, e[26])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function l(s) {
_i_("155:449"), s += e[32], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[11])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[12]) == o.value) && (s += e[38]), s += e[39], a.MJ(e[34]) ? (n.unshift({
num_rooms:o.value
}), t = a.ME(e[26], a.MB, a.MN, a.MO(o.value, null, e[26])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function h(s) {
_i_("155:450"), s += e[59], a.MD(i[15]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[17])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[18]) == o.value) && (s += e[38]), s += e[39], a.MD(i[13]) ? (n.unshift({
num_adults:o.value
}), t = a.ME(e[54], a.MB, a.MN, a.MO(o.value, null, e[54])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function d(s) {
_i_("155:451"), s += e[59], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[17])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[18]) == o.value) && (s += e[38]), s += e[39], a.MD(i[13]) ? (n.unshift({
num_adults:o.value
}), t = a.ME(e[54], a.MB, a.MN, a.MO(o.value, null, e[54])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function c(s) {
_i_("155:452"), s += e[59], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(1, a.MB(i[17])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[18]) == o.value) && (s += e[38]), s += e[39], a.MJ(e[34]) ? (n.unshift({
num_adults:o.value
}), t = a.ME(e[54], a.MB, a.MN, a.MO(o.value, null, e[54])), n.shift(), s += t) :s += o.value, s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function u(s) {
_i_("155:453"), s += e[76], a.MD(i[15]) && (s += e[33]), s += e[35];
var r = a.seq(0, a.MB(i[21])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[22]) == o.value) && (s += e[38]), s += e[39], s += a.MJ(a.MB(i[13])) && a.MJ(0 == o.value) ? [ e[69], a.ME(e[70], a.MB, a.MN, null), e[71] ].join("") :a.MJ(a.MB(i[13])) ? [ e[69], (n.unshift({
num_kids:o.value
}), t = a.ME(e[72], a.MB, a.MN, a.MO(o.value, null, e[72])), n.shift(), t), e[71] ].join("") :[ e[69], o.value, e[71] ].join(""), s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function p(s) {
_i_("155:454"), s += e[76], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(0, a.MB(i[21])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[22]) == o.value) && (s += e[38]), s += e[39], s += a.MJ(e[34]) && a.MJ(0 == o.value) ? [ e[69], a.ME(e[70], a.MB, a.MN, null), e[71] ].join("") :a.MJ(e[34]) ? [ e[69], (n.unshift({
num_kids:o.value
}), t = a.ME(e[72], a.MB, a.MN, a.MO(o.value, null, e[72])), n.shift(), t), e[71] ].join("") :[ e[69], o.value, e[71] ].join(""), s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function f(s) {
_i_("155:455"), s += e[76], a.MJ(e[34]) && (s += e[33]), s += e[35];
var r = a.seq(0, a.MB(i[21])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[36], a.F.entities(o.value), e[37] ].join(""), a.MJ(a.MB(i[22]) == o.value) && (s += e[38]), s += e[39], s += a.MJ(a.MB(i[13])) && a.MJ(0 == o.value) ? [ e[69], a.ME(e[70], a.MB, a.MN, null), e[71] ].join("") :a.MJ(a.MB(i[13])) ? [ e[69], (n.unshift({
num_kids:o.value
}), t = a.ME(e[72], a.MB, a.MN, a.MO(o.value, null, e[72])), n.shift(), t), e[71] ].join("") :[ e[69], o.value, e[71] ].join(""), s += e[40];
return n.shift(), s += e[41], _r_(s);
}
function m(s) {
_i_("155:456"), s += e[81];
var r = c, o = h, _ = u, l = d, h = a.MC(i[26]) || [];
n.unshift({
fe_child_age:null
});
for (var d, c = 1, u = h.length; u >= c; c++) {
n[0].fe_child_age = d = h[c - 1], s += e[71], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[94]), s += e[95], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[33]), s += [ e[96], a.F.entities(a.MC(i[27])), e[97] ].join(""), a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (s += e[98], a.MD(i[25]) ? (s += e[99], a.MN(i[24], a.DATE(a.MB(i[25]), "short_date", "", "", "")), s += [ e[99], (n.unshift({
checkout_date:a.MB(i[24])
}), t = a.ME(e[100], a.MB, a.MN, null), n.shift(), t), e[98] ].join("")) :s += [ e[99], a.ME(e[101], a.MB, a.MN, null), e[98] ].join(""), s += e[69]), s += e[102];
var p = c, f = h, m = u, g = v, h = a.seq(0, a.MB(i[28])) || [];
n.unshift({
i:null
});
for (var v, c = 1, u = h.length; u >= c; c++) n[0].i = v = h[c - 1], s += [ e[103], a.F.entities(v.value), e[37] ].join(""), a.MJ(d + "" != "") && a.MJ(d + "" == "" + v.value) && (s += e[38]), s += e[104], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (s += e[105], s += a.MJ(v.value + "" == "0") ? [ e[106], a.ME(e[107], a.MB, a.MN, null), e[105] ].join("") :[ e[106], (n.unshift({
num:a.MG((v || {}).value)
}), t = a.ME(e[108], a.MB, a.MN, a.MO((v || {}).value, null, e[108])), n.shift(), t), e[105] ].join(""), s += e[99]) :(s += [ e[105], v.value ].join(""), a.MD(i[29]) && (s += a.ME(e[109], a.MB, a.MN, null)), s += e[99]), s += e[110];
n.shift(), c = p, h = f, u = m, v = g, s += e[111], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[112]), s += e[71], a.MN("fe_child_i", a.MI(a.MB(i[27])) + a.MI(1)), s += e[81];
}
return n.shift(), c = r, h = o, u = _, d = l, s += e[84], _r_(s);
}
function g(s) {
_i_("155:457"), s += e[81];
var r = a.MC(i[26]) || [];
n.unshift({
fe_child_age:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) {
n[0].fe_child_age = o = r[_ - 1], s += e[71], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[94]), s += e[95], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[33]), s += [ e[96], a.F.entities(a.MC(i[27])), e[97] ].join(""), a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (s += e[98], a.MD(i[25]) ? (s += e[99], a.MN(i[24], a.DATE(a.MB(i[25]), "short_date", "", "", "")), s += [ e[99], (n.unshift({
checkout_date:a.MB(i[24])
}), t = a.ME(e[100], a.MB, a.MN, null), n.shift(), t), e[98] ].join("")) :s += [ e[99], a.ME(e[101], a.MB, a.MN, null), e[98] ].join(""), s += e[69]), s += e[102];
var h = _, d = r, c = l, u = p, r = a.seq(0, a.MB(i[28])) || [];
n.unshift({
i:null
});
for (var p, _ = 1, l = r.length; l >= _; _++) n[0].i = p = r[_ - 1], s += [ e[103], a.F.entities(p.value), e[37] ].join(""), a.MJ(o + "" != "") && a.MJ(o + "" == "" + p.value) && (s += e[38]), s += e[104], a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (s += e[105], s += a.MJ(p.value + "" == "0") ? [ e[106], a.ME(e[107], a.MB, a.MN, null), e[105] ].join("") :[ e[106], (n.unshift({
num:a.MG((p || {}).value)
}), t = a.ME(e[108], a.MB, a.MN, a.MO((p || {}).value, null, e[108])), n.shift(), t), e[105] ].join(""), s += e[99]) :(s += [ e[105], p.value ].join(""), a.MD(i[29]) && (s += a.ME(e[109], a.MB, a.MN, null)), s += e[99]), s += e[110];
n.shift(), _ = h, r = d, l = c, p = u, s += e[111], (a.MJ(a.track_experiment("PVSfZRSdUDDDBMURET")) || a.MK(a.MB(i[2])) && a.MJ(a.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (s += e[112]), s += e[71], a.MN("fe_child_i", a.MI(a.MB(i[27])) + a.MI(1)), s += e[81];
}
return n.shift(), s += e[84], _r_(s);
}
return s += e[0], s = r(s), s += e[11], _r_(s);
});
}());
var n = t("component"), s = t("morphdom"), a = t("read-data-options"), r = t("search-config"), o = (t("et"), t("search/searchbox/model"));
i.exports = n.extend({
init:function() {
_i_("155:371"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
sbWidth:{
name:"sb-width",
type:String
},
sbBBToolSearchbox:{
name:"sb-bbtool-searchbox",
type:Boolean
},
childrenHide:{
name:"sb-group-children-hide",
type:Boolean
},
petsHide:{
name:"sb-group-pets-hide",
type:Boolean
},
useAdultsLabel:{
name:"sb-group-use_adults_label",
type:Boolean
},
blockLabels:{
name:"sb-group-block-labels",
type:Boolean
},
alwaysExpanded:{
name:"sb-group-always-expanded",
type:Boolean
},
removeOldParams:{
name:"sb-group-remove-old-params",
type:Boolean
}
}), this.model = o.getInstance(this.options.modelId), this.model.use("group"), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.$form = this.$el.parents("form"), this.options.removeOldParams && this.$form.on("submit", this.formSubmit.bind(this)), r.on("change", this.searchConfigChange.bind(this)), this.$el.on("change", '[data-group-rooms-count=""]', this.groupRoomsChange.bind(this)), this.$el.on("change", '[data-group-adults-count=""]', this.groupAdultsChange.bind(this)), this.$el.on("change", '[data-group-children-count=""]', this.groupChildrenChange.bind(this)), this.$el.on("change", "[data-group-child-age]", this.groupChildAgeChange.bind(this)), this.renderEl = this.$el.find('[data-render=""]')[0], this.template = B.jstmpl("search_group_group_html"), this.$form.on("change", ".b-booker-type__input_business-booker", this.businessBookerSelected.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("155:372");
var t = {
rooms_count:r.rooms ? r.rooms.length :1,
adults_count:r.adults || 2,
children_ages:r.childrenAges || [],
default_empty_age_to:"12 "
};
this.model.group.init(t), _r_();
},
modelChange:function(t) {
if (_i_("155:373"), !t || "group" != t.group && "dates" != t.group) return _r_();
this.render(), _r_();
},
searchConfigChange:function() {
_i_("155:374"), this.model.group.set({
key:"rooms_count",
value:Array.isArray(r.rooms) ? r.rooms.length :1
}), this.model.group.set({
key:"adults_count",
value:r.adults
}), this.model.group.set({
key:"children_count",
value:Array.isArray(r.childrenAges) ? r.childrenAges.length :1
}), Array.isArray(r.childrenAges) && r.childrenAges.forEach(function(t, e) {
_i_("155:512"), this.model.group.set({
key:"children_ages",
i:e,
value:t
}), _r_();
}.bind(this)), _r_();
},
groupRoomsChange:function(t) {
_i_("155:375");
var e = $(t.currentTarget);
this.model.group.set({
key:"rooms_count",
value:e.val()
}), _r_();
},
groupAdultsChange:function(t) {
_i_("155:376");
var e = $(t.currentTarget);
this.model.group.set({
key:"adults_count",
value:e.val()
}), this.groupAdultsChanged = !0, _r_();
},
groupChildrenChange:function(t) {
_i_("155:377");
var e = $(t.currentTarget);
this.model.group.set({
key:"children_count",
value:e.val()
}), _r_();
},
groupChildAgeChange:function(t) {
_i_("155:378");
var e = $(t.currentTarget), i = e.attr("data-group-child-age");
this.model.group.set({
key:"children_ages",
i:+i,
value:e.val()
}), _r_();
},
formSubmit:function(t) {
if (_i_("155:379"), t.isDefaultPrevented()) return _r_(!1);
var e = [ "[data-group-adults-count]", "[data-group-children-count]", "[data-group-child-age]" ], i = this.$el.find("[name=room1]");
this.$el.find(e.join(",")).prop("disabled", !0), i.val(i.val().replace(" ", "")), _r_();
},
render:function() {
_i_("155:380");
var t = {}, e = this.model.group.get(), i = this.model.dates.get();
e = {
fe_sb_state_number_of_rooms:e.rooms_count,
fe_sb_state_number_of_adults:e.adults_count,
fe_sb_state_number_of_children:e.children_ages.length,
fe_sb_state_children_ages:e.children_ages,
fe_sb_state_traveller:e.fe_sb_state_traveller,
fe_sb_state_rooms:[ {
b_adults:e.adults_count,
b_children:e.children_ages.length,
b_children_ages:e.children_ages,
b_room_order:1
} ]
}, B.env.b_lang_is_cjk && (e.b_lang_is_cjk = B.env.b_lang_is_cjk), i.checkout && (e.fe_sb_state_checkout = i.checkout.toString()), this.options.sbWidth && (e.fe_sb_width = this.options.sbWidth), this.options.childrenHide && (e.fe_sb_group_children_hide = 1), this.options.petsHide && (e.fe_sb_group_pets_hide = 1), this.options.blockLabels && (e.fe_sb_group_block_labels = 1), this.options.alwaysExpanded && (e.fe_sb_group_always_expanded = 1), this.options.useAdultsLabel && (e.fe_sb_group_use_adults_label = 1), this.options.sbBBToolSearchbox && (e.fe_sb_bbtool_searchbox = 1), this.model.hasFlag("PVSfZTKDEIIYBKbONdPbCTNNC") && (e.fe_sb_include_traveller = 1);
var n = this.template.render(e).trim();
"msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = function(t, e) {
_i_("155:495");
var i = t.getAttribute(jQuery.expando);
return i && e.setAttribute(jQuery.expando, i), _r_(!0);
}), s(this.renderEl, n, t), _r_();
},
businessBookerSelected:function() {
_i_("155:381"), B.et.stage("AEJPAcBAHTWBcbFMUBBO", 1), B.et.track("AEJPAcBAHTWBcbFMUBBO") && !this.groupAdultsChanged && this.model.group.set({
key:"adults_count",
value:1
}), _r_();
}
}), _r_();
}), B.define("search/group/model", function(t, e, i) {
"use strict";
_i_("155:26");
t("et");
function n(t) {
_i_("155:79"), this.model = t, this.data = {
preset:-1
}, this.valid = !0, this.validationError = "", this.options = {}, this.model.getFlag("PVSfZTKDEIIYBKbONdPbCTNNC") && (this.model.use("traveller"), this.model.on("change", this.modelChange.bind(this))), _r_();
}
$.extend(n.prototype, {
init:function(t) {
_i_("155:191"), this.data = t, this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("155:192"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
get:function() {
if (_i_("155:193"), this.model.getFlag("PVSfZTKDEIIYBKbONdPbCTNNC")) {
var t = this.model.traveller.get().travellerType;
this.data.fe_sb_state_traveller = t;
}
return _r_(this.data);
},
set:function(t) {
if (_i_("155:194"), !t || !t.key) return _r_(!1);
if ("children_count" == t.key) if (this.data.children_ages || (this.data.children_ages = []), 0 == t.value) this.data.children_ages = []; else if (this.data.children_ages.length < t.value) for (var e = this.data.children_ages.length; e < t.value; e++) this.data.default_empty_age_to ? this.data.children_ages.push(this.data.default_empty_age_to) :this.data.children_ages.push(""); else this.data.children_ages.length > t.value && this.data.children_ages.splice(t.value, this.data.children_ages.length - t.value); else t.hasOwnProperty("i") ? this.data[t.key] ? this.data[t.key][t.i] = t.value :(this.data[t.key] = [], this.data[t.key][t.i] = t.value) :this.data[t.key] = t.value;
return this.emit("change"), _r_(!0);
},
validate:function() {
_i_("155:195");
var t = !0, e = "";
return this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
modelChange:function(t) {
if (_i_("155:196"), !t || "traveller" !== t.group) return _r_();
var e = this.model.traveller.get().travellerType;
switch (e) {
case null:
case "":
case "couple":
this.data.rooms_count = 1, this.data.adults_count = 2, this.data.children_ages = [];
break;

case "solo":
case "business":
this.data.rooms_count = 1, this.data.adults_count = 1, this.data.children_ages = [];
break;

case "family":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages && 0 != this.data.children_ages.length || (this.data.children_ages = [ this.data.default_empty_age_to ]);
break;

case "group":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages = [];
}
this.data.fe_sb_state_traveller = e, this.emit("change"), _r_();
},
emit:function(t, e) {
_i_("155:197"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"group"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("component/search/filters/keep-filters", function(t, e, i) {
_i_("155:27");
var n = t("component"), s = t("read-data-options"), a = t("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("155:382"), this.$input = this.$el.find("input[name=nflt]"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = a.getInstance(this.options.modelId), this.model.use("filters"), this.model.on("change", this.modelChange.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("155:383");
var t = {
nflt:this.$input.val()
};
this.model.filters.init(t), _r_();
},
modelChange:function(t) {
if (_i_("155:384"), t && "filters" == t.group) {
var e = this.model.filters.get().nflt;
this.$input.val(e), this.$el.toggleClass("g-hidden", "" === e);
}
_r_();
}
}), _r_();
}), B.define("search/filters/model", function(t, e, i) {
"use strict";
_i_("155:28");
var n = t("events");
function s(t) {
_i_("155:80"), this.model = t, this.data = {
nflt:""
}, _r_();
}
$.extend(s.prototype, {
init:function(t) {
_i_("155:198"), this.data = t, this.emit("init"), n.on("SR:DATA_ENVIRONMENT_UPDATED", this.environmentChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), _r_();
},
get:function() {
return _i_("155:199"), _r_(this.data);
},
set:function(t) {
if (_i_("155:200"), !t || !t.key) return _r_(!1);
return this.data[t.key] = t.value, this.emit("change"), _r_(!0);
},
validate:function() {
return _i_("155:201"), _r_(!0);
},
environmentChange:function(t) {
if (_i_("155:202"), t && t.get) {
var e = t.get("b_selected_nflt_url_param_decoded");
void 0 !== e && this.set({
key:"nflt",
value:e
});
}
_r_();
},
modelChange:function(t) {
_i_("155:203"), t && "destination" === t.group && (this.data.nflt = "", this.emit("change")), _r_();
},
emit:function(t, e) {
_i_("155:204"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"filters"
})), _r_();
}
}), i.exports = s, _r_();
}), B.define("search/searchbox/analytics", function(t, e, i) {
_i_("155:29");
var n = {};
e.send = function(t, e, i) {
if (_i_("155:110"), !window.ga) return _r_();
window.ga("send", "event", "Searchbox", B.env.b_action, t, e, i), _r_();
}, e.sendNonInteractive = function(t, i) {
_i_("155:111"), e.send(t, i, {
nonInteraction:!0
}), _r_();
}, e.sendOnce = function(t, i) {
_i_("155:112");
var s = t + ":" + i;
n[s] || (e.send(t, i), n[s] = !0), _r_();
}, _r_();
}), B.define("search/searchbox/model", function(t, e, i) {
"use strict";
_i_("155:30");
var n = t("event-emitter"), s = t("search/modules/flags"), a = {};
function r(t) {
_i_("155:81"), n.extend(this), this.id = t, this.formAction, this.fieldGroups = {
track:[]
}, this.flags = {}, this.validators = [], _r_();
}
$.extend(r.prototype, {
use:function(e) {
if (_i_("155:205"), this[e]) return _r_();
switch (e) {
case "destination":
var i = t("search/destination/model");
this[e] = new i(this);
break;

case "dates":
var n = t("search/dates/model");
this[e] = new n(this);
break;

case "filters":
var s = t("search/filters/model");
this[e] = new s(this);
break;

case "group":
var a = t("search/group/model");
this[e] = new a(this);
break;

case "traveller":
var r = t("search/traveller/model");
this[e] = new r(this);
break;

default:
return _r_();
}
"function" == typeof this[e].validate && this.validators.push(this[e].validate.bind(this[e])), _r_();
},
submit:function() {
_i_("155:206"), this.emit("submit"), _r_();
},
getFormAction:function() {
return _i_("155:207"), _r_(this.formAction);
},
setFormAction:function(t) {
_i_("155:208"), this.formAction = t, _r_();
},
getFields:function() {
_i_("155:209");
var t = [];
return Object.keys(this.fieldGroups).forEach(function(e) {
_i_("155:480"), Array.isArray(this.fieldGroups[e]) && (t = t.concat(this.fieldGroups[e])), _r_();
}.bind(this)), _r_(t);
},
setFields:function(t, e) {
_i_("155:210"), this.fieldGroups[t] = e, _r_();
},
hasFlag:function(t) {
return _i_("155:211"), _r_(t in this.flags);
},
getFlag:function(t) {
return _i_("155:212"), _r_(this.flags[t]);
},
updateFlags:function(t) {
_i_("155:213");
var e = s.parse(t);
Object.assign(this.flags, e), _r_();
},
validate:function() {
_i_("155:214");
var t = this.validators.filter(function(t) {
return _i_("155:470"), _r_(t.call());
});
return _r_(t.length == this.validators.length);
}
}), i.exports = {
getInstance:function(t) {
return _i_("155:215"), a[t] || (a[t] = new r(t)), _r_(a[t]);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox", function(t, e, i) {
"use strict";
_i_("155:31");
var n = t("component"), s = t("search/searchbox/model"), a = t("read-data-options"), r = t("search/dates/date-prices"), o = [ "country", "dest_id", "dest_type", "district", "iata", "landmark", "latitude", "longitude", "place_id", "place_id_lat", "place_id_lon", "region", "prefill_submitted" ];
i.exports = n.extend({
init:function() {
if (_i_("155:385"), this.hiddenFields = [], this.options = a(this.$el, {
animOnAutocomplete:{
name:"sb-animate-on-autocomplete",
type:Boolean
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
flags:{
name:"sb-flags",
type:String,
defaultValue:""
},
isFirstVisible:{
name:"is-first-visible",
type:Boolean
}
}), this.model = s.getInstance(this.options.modelId), this.model.on("init", this.modelChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), this.model.on("submit", this.modelSubmit.bind(this)), this.model.updateFlags(this.options.flags), this.$form = this.$el.is("form") ? this.$el :this.$el.find("form:eq(0)"), this.$form.submit(this.formSubmit.bind(this)), this.originalAction = this.$form.attr("action"), this.options.isFirstVisible && this.model.hasFlag("sticky")) {
var e = t("search/searchbox/searchbox-sticky-controller").getController();
e.setElement(this.$form);
}
this.$searchOverlay = this.$el.find("[data-searching-overlay]"), this.shouldShowSearchOverlay = this.model.getFlag("AEJPAcBacPONDcFGHT") && this.$searchOverlay.length, this.shouldShowSearchOverlay && (this.$searchOverlay.on("click", this.searchOverlayClick.bind(this)), $(document).on("keydown", this.hideSearchOverlay.bind(this))), this.options.animOnAutocomplete && this.$form.on("autocomplete:setvalue-and-close", this.animateFormOnAutocomplete.bind(this)), this.initCurrentCountryField(), this.initMapTrigger(), this.model.getFlag("UBKeJbLYQCLBMJFUWOEQeRe") && (this.datePrices = r.getInstance(), this.datePrices.init(this.model, B.et.track("UBKeJbLYQCLBMJFUWOEQeRe"))), _r_();
},
modelChange:function(t) {
_i_("155:386"), this.updateHiddenFields(), _r_();
},
modelSubmit:function() {
_i_("155:387"), this.$form.submit(), _r_();
},
initMapTrigger:function() {
_i_("155:388");
var t = this.$form;
if ("index" != B.env.b_action) return _r_();
t.find("input[name=map]").change(function() {
_i_("155:471"), $(this).prop("checked") ? t.append('<input type="hidden" name="map_open_trigger" value=1>') :t.find("input[name=map_open_trigger]").remove(), _r_();
}), _r_();
},
initCurrentCountryField:function() {
_i_("155:389");
var t = !1;
this.$onlyCurrentCountry = this.$form.find("#limit-search-area"), this.$onlyCurrentCountry.length && (t = this.$onlyCurrentCountry.is(":checked"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.model.use("destination"), this.model.destination.initOnlyCurrentCountry(t)), _r_();
},
onlyCurrentCountryChange:function() {
_i_("155:390"), this.model.use("destination"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
},
updateHiddenFields:function() {
_i_("155:391");
var t = this.model.getFormAction(), e = this.$form.attr("action");
t || (t = this.originalAction), e != t && this.$form.attr("action", t), this.hiddenFields && this.hiddenFields.forEach(function(t) {
_i_("155:496"), t.$node.remove(), t.$node = null, _r_();
});
var i = this.model.getFields();
this.hiddenFields = [];
var n = [], s = !1;
i.forEach(function(t) {
_i_("155:497"), this.hiddenFields.push({
name:t.name,
value:t.value
}), n.push(t.name), -1 != o.indexOf(t.name) && (s = !0), _r_();
}.bind(this)), this.$form.find("input").filter(function() {
return _i_("155:498"), _r_(s && -1 != o.indexOf(this.name) || -1 != n.indexOf(this.name));
}).remove(), this.hiddenFields.forEach(function(t) {
_i_("155:499");
var e = $("<input>");
e.attr("type", "hidden"), e.attr("name", t.name), e.attr("value", t.value), t.$node = e, this.$form.append(e), _r_();
}.bind(this)), _r_();
},
formSubmit:function(t) {
_i_("155:392");
var e = this.model.validate();
if (!e) return t.preventDefault(), _r_();
this.shouldShowSearchOverlay && this.showSearchOverlay(), _r_();
},
searchOverlayClick:function() {
_i_("155:393"), this.abortSubmit(), this.hideSearchOverlay(), B.et.customGoal("AEJPAcBacPONDcFGHT", 1), _r_();
},
abortSubmit:function() {
_i_("155:394"), window.stop ? window.stop() :document.execCommand && document.execCommand("Stop"), _r_();
},
animateFormOnAutocomplete:function() {
_i_("155:395");
var t, e, i = this.model.dates && this.model.dates.validate({
notEmpty:!0,
checkOnly:!0
}), n = B.et.track("ebcOLSfPedeIHOERT");
if (!i) return _r_();
if (/^(index|country|city|airport|region|district|destination|continent|landmark|place)$/.test(B.env.b_action) ? B.et.stage("ebcOLSfPedeIHOERT", 1) :"searchresults" == B.env.b_action ? B.et.stage("ebcOLSfPedeIHOERT", 2) :"hotel" == B.env.b_action && B.et.stage("ebcOLSfPedeIHOERT", 3), B.et.stage("ebcOLSfPedeIHOERT", 4), 1 > n) return _r_();
t = this.$form.find(".sb-searchbox__button"), e = 600, setTimeout(function() {
_i_("155:472"), t.addClass("sb-animated sb-animation-bounceIn"), _r_();
}, e), setTimeout(function() {
_i_("155:473"), t.removeClass("sb-animated sb-animation-bounceIn"), _r_();
}, 2 * e), _r_();
},
showSearchOverlay:function() {
_i_("155:396"), this.$searchOverlay.addClass("-visible"), _r_();
},
hideSearchOverlay:function() {
_i_("155:397"), this.$searchOverlay.removeClass("-visible"), _r_();
}
}), _r_();
}), B.define("search/searchbox/searchbox-sticky-controller", function(t, e, i) {
"use strict";
_i_("155:32");
var n = t("jquery"), s = t("event-emitter"), a = null;
function r() {
_i_("155:82"), s.extend(this), this.visible = !1, this.bottomPosition = null, this.$el = null, this.$window = n(window), this.$window.on("scroll", this.windowScroll.bind(this)), _r_();
}
Object.assign(r.prototype, {
setElement:function(t) {
if (_i_("155:216"), this.bottomPosition) {
var e = t.offset(), i = t.outerHeight();
if (e && e.top + i > this.bottomPosition) return _r_();
}
this.$el = t, this.recalculate(), _r_();
},
isVisible:function() {
return _i_("155:217"), _r_(this.visible);
},
recalculate:function() {
if (_i_("155:218"), null === this.$el) return _r_();
var t = this.$el.offset(), e = this.$el.outerHeight();
if (!t) return _r_();
this.bottomPosition = t.top + e, this.updateStatus(), _r_();
},
updateStatus:function() {
_i_("155:219"), !this.visible && this.$window.scrollTop() >= this.bottomPosition ? (this.visible = !0, this.emit("show"), "searchresults" == B.env.b_action && B.et.stage("OLSfZPXCSFMEfTRe", 1)) :this.visible && this.$window.scrollTop() < this.bottomPosition && (this.visible = !1, this.emit("hide")), _r_();
},
windowScroll:function(t) {
if (_i_("155:220"), null === this.bottomPosition) return _r_();
this.updateStatus(), _r_();
}
}), i.exports = {
getController:function() {
return _i_("155:221"), a || (a = new r()), _r_(a);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox-sticky", function(t, e, i) {
"use strict";
_i_("155:33");
var n = t("component"), s = t("events"), a = t("search/searchbox/searchbox-sticky-controller").getController();
i.exports = n.extend({
init:function() {
_i_("155:398"), a.on("show", this.show.bind(this)), a.on("hide", this.hide.bind(this)), a.isVisible() && this.hardShow(), _r_();
},
show:function(t) {
_i_("155:399"), this.$el.addClass("-visible-1"), s.trigger("searchbox-sticky:show"), setTimeout(function() {
_i_("155:500"), this.$el.addClass("-visible-2"), _r_();
}.bind(this), 0), _r_();
},
hardShow:function() {
_i_("155:400"), this.$el.addClass("-visible-1 -visible-2"), _r_();
},
hide:function(t) {
_i_("155:401"), this.$el.removeClass("-visible-2"), setTimeout(function() {
_i_("155:501"), this.$el.removeClass("-visible-1"), _r_();
}.bind(this), 1e3), _r_();
}
}), _r_();
}), B.define("component/search/group/children-ages-tooltip", function(t, e, i) {
"use strict";
_i_("155:34");
var n = t("jquery"), s = t("jstmpl"), a = t("component");
i.exports = a.extend({
init:function() {
_i_("155:402"), this.dropdown = !1, this.$form = n("#frm"), this.isPopupAlreadyShown = !1, this.agesSelector = '[name="age"]', this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("155:403"), this.$el.change(this.showTooltip.bind(this)), this.$form.delegate(this.agesSelector, "click", this.hideTooltip.bind(this)), B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)), _r_();
},
showTooltip:function(t) {
_i_("155:404");
var e = parseInt(this.$el.val()) > 0;
e && !this.isPopupAlreadyShown && setTimeout(function() {
if (_i_("155:516"), 0 === n("#frm " + this.agesSelector + ":eq(0)").length) return _r_();
this.dropdown = n.fly.dropdown.extend({
defaults:{
position:B.et.track("bHVSfPTGTfNdSPeXJdFGC") ? "bottom" :"bottom left",
content:function() {
return _i_("155:520"), _r_(s("searchbox_children_ages_tooltip").render({}));
},
extraClass:"searchbox_children_ages_tooltip"
}
}).create("#frm " + this.agesSelector + ":eq(0)"), this.dropdown.show(), this.isPopupAlreadyShown = !0, _r_();
}.bind(this), 0), _r_();
},
hideTooltip:function(t) {
_i_("155:405"), this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()), _r_();
}
}), _r_();
}), B.define("search/traveller/model", function(t, e, i) {
"use strict";
_i_("155:35");
function n(t) {
_i_("155:83"), this.model = t, this.data = {
travellerType:null
}, _r_();
}
Object.assign(n.prototype, {
initTravellerType:function(t) {
_i_("155:222"), this.data.travellerType = t, this.emit("init"), _r_();
},
get:function() {
return _i_("155:223"), _r_(this.data);
},
setTravellerType:function(t) {
_i_("155:224"), this.data.travellerType = t, this.data.sb_travel_purpose = "business" == t ? "business" :"", this.emit("change"), _r_();
},
emit:function(t, e) {
_i_("155:225"), e = e || {}, this.model.emit(t, Object.assign(e, {
group:"traveller"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("component/search/traveller/travel-party", function(t, e, i) {
_i_("155:36");
var n = t("component"), s = t("search/searchbox/model"), a = t("read-data-options");
i.exports = n.extend({
init:function() {
_i_("155:406"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = s.getInstance(this.options.modelId), this.model.use("traveller"), this.model.on("change", this.modelChange.bind(this)), this.modelInit(), this.$travellerTypes = this.$el.find(), this.$el.on("click", "[data-traveller-value]", this.travellerChange.bind(this)), this.$el.find("label[for]").on("keyup", function(t) {
if (_i_("155:474"), 13 != t.keyCode) return _r_();
var e = $(this);
return $("#" + e.attr("for")).click(), _r_(!1);
}), _r_();
},
modelInit:function() {
_i_("155:407");
var t = this.$el.find("[data-traveller-value]");
"radio" == t.attr("type") && (t = this.$el.find('[data-traveller=""]:checked')), t.length && this.model.traveller.initTravellerType(t.val()), _r_();
},
modelChange:function(t) {
if (_i_("155:408"), !t || "traveller" !== t.group) return _r_();
var t = this.model.traveller.get();
this.$el.find("[data-param-travel-purpose]").val(t.sb_travel_purpose), t.travellerType && ("msie" === B.env.b_browser && "8" === B.env.b_browser_version && (this.$el.find("[data-traveller-value]").removeClass("-checked"), this.$el.find('[data-traveller-value="' + t.travellerType + '"]').addClass("-checked"), this.$el.find('[data-traveller-value="' + t.travellerType + '"] input').attr("checked", "checked")), this.$el.find('[data-traveller-info=""]').remove()), this._count = this._count || 0, this._count++, B.et.customGoal("PVSfZTKDEIIYBKbONdPbCTNNC", 1 == this._count ? 1 :2 == this._count ? 2 :3), _r_();
},
travellerChange:function(t) {
_i_("155:409");
var e = $(t.currentTarget), i = $(t.target);
if (("msie" != B.env.b_browser || "8" != B.env.b_browser_version) && !i.is("input")) return _r_();
this.model.traveller.setTravellerType(e.attr("data-traveller-value")), _r_();
}
}), _r_();
}), B.define("component/search/top-rated-month/experiment_ugcd_best_month_to_visit", function(t, e, i) {
"use strict";
_i_("155:37");
var n, s, a, r = 3, o = "/get_top_months_per_ufi?ufi={ufi_code}&num_months={num_months}", _ = t("component"), l = (t("jstmpl"), t("read-data-options")), h = t("search/searchbox/model"), d = !1;
i.exports = _.extend({
init:function() {
if (_i_("155:410"), !d) {
var t = this.$el.closest("[data-sb-id]");
t.length && (this.options = l(t, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = h.getInstance(this.options.modelId), this.model.use("dates"), this.model.use("destination"), this.model.on("change", this.onChange.bind(this)), this.onChange(), d = !0);
}
_r_();
},
loadBestMonthsForDestination:function(t, e) {
_i_("155:411");
var i = this;
$.ajax({
url:o.replace("{ufi_code}", t.dest_id).replace("{num_months}", e),
method:"GET",
success:function(e) {
_i_("155:502"), a = e, a.dest_id = t.dest_id, i.refresh(), _r_();
},
error:function() {
_i_("155:503"), a = null, i.refresh(), _r_();
}
}), _r_();
},
onChange:function(t) {
_i_("155:412"), n = this.model.destination.get(), s = this.model.dates.get(), !n.dest_id && B.env.b_dest_id && (n.dest_id = B.env.b_dest_id), /^-/.test(n.dest_id) || (n = !1), n && n.dest_id ? a && n.dest_id == a.dest_id || this.loadBestMonthsForDestination(n, r) :a = null, this.refresh(), _r_();
},
refresh:function() {
_i_("155:413");
var t, e = "";
if (a && a.top_months && a.top_months.length && s) for (t = 0; t < a.top_months.length; t++) if (s.checkin.month + 1 == a.top_months[t].month) {
e = B.jstmpl("calendar_top_dates_marker").render({
score:Math.round(10 * a.top_months[t].avg_rating) / 10,
review_num:a.top_months[t].nr_reviews,
city:a.top_months[t].city,
month:a.top_months[t].month
});
break;
}
e && B.et.stage("adUAVGZGeAZCCNUEVNFJO", 1), 2 == B.et.track("adUAVGZGeAZCCNUEVNFJO") && $(".sb-best-month").css("opacity", 0).html(e).animate({
opacity:1
}, 500).loadComponents(), _r_();
}
}), _r_();
}), booking.jstmpl("calendar_top_dates_marker", function() {
_i_("155:42");
var t, e = [ "\n	", "\n\n", "\n	\n	\n	", "\n		", "/month_for_formatted_date/1/name", "/month_for_formatted_date/2/name", "/month_for_formatted_date/3/name", "/month_for_formatted_date/4/name", "/month_for_formatted_date/5/name", "/month_for_formatted_date/6/name", "/month_for_formatted_date/7/name", "/month_for_formatted_date/8/name", "/month_for_formatted_date/9/name", "/month_for_formatted_date/10/name", "/month_for_formatted_date/11/name", "/month_for_formatted_date/12/name", "\n", '\n\n<span class="jq_tooltip sb-best-month-message"\n	data-title="<div class=\'sb-best-month-tooltip\'><strong>', "/private/ugcd_best_month_book_pro/name", "</strong><div>", "/private/ugcd_best_month_date_picker_reviews/name", '</div></div>">\n	\n	<span data-component="track" data-track="mouseenter" data-custom-goal="1" data-hash="', '">\n		&bull; ', "/private/ugcd_best_month_date_picker/name", "\n	</span>\n</span>\n" ], i = [ "fe_best_month_name", "month", "city", "review_num" ];
return _r_(function(n) {
_i_("155:113");
var s = "", a = this.fn;
function r(s) {
_i_("155:226"), s += e[1];
var r = "";
return r += e[2], a.MJ(1 == a.MB(i[1])) ? r += [ e[3], a.ME(e[4], a.MB, a.MN, null), e[0] ].join("") :a.MJ(2 == a.MB(i[1])) ? r += [ e[3], a.ME(e[5], a.MB, a.MN, null), e[0] ].join("") :a.MJ(3 == a.MB(i[1])) ? r += [ e[3], a.ME(e[6], a.MB, a.MN, null), e[0] ].join("") :a.MJ(4 == a.MB(i[1])) ? r += [ e[3], a.ME(e[7], a.MB, a.MN, null), e[0] ].join("") :a.MJ(5 == a.MB(i[1])) ? r += [ e[3], a.ME(e[8], a.MB, a.MN, null), e[0] ].join("") :a.MJ(6 == a.MB(i[1])) ? r += [ e[3], a.ME(e[9], a.MB, a.MN, null), e[0] ].join("") :a.MJ(7 == a.MB(i[1])) ? r += [ e[3], a.ME(e[10], a.MB, a.MN, null), e[0] ].join("") :a.MJ(8 == a.MB(i[1])) ? r += [ e[3], a.ME(e[11], a.MB, a.MN, null), e[0] ].join("") :a.MJ(9 == a.MB(i[1])) ? r += [ e[3], a.ME(e[12], a.MB, a.MN, null), e[0] ].join("") :a.MJ(10 == a.MB(i[1])) ? r += [ e[3], a.ME(e[13], a.MB, a.MN, null), e[0] ].join("") :a.MJ(11 == a.MB(i[1])) ? r += [ e[3], a.ME(e[14], a.MB, a.MN, null), e[0] ].join("") :a.MJ(12 == a.MB(i[1])) && (r += [ e[3], a.ME(e[15], a.MB, a.MN, null), e[0] ].join("")), r += e[16], a.MN(i[0], r), s += [ e[17], (n.unshift({
destination_name:a.MB(i[2]),
month_name:a.MB(i[0])
}), t = a.ME(e[18], a.MB, a.MN, null), n.shift(), t), e[19], (n.unshift({
num_reviews:a.MB(i[3])
}), t = a.ME(e[20], a.MB, a.MN, null), n.shift(), t), e[21], "adUAVGZGeAZCCNUEVNFJO", e[22], a.ME(e[23], a.MB, a.MN, null), e[24] ].join(""), _r_(s);
}
return s += e[0], s = r(s), s += e[16], _r_(s);
});
}()), function() {
_i_("155:38"), B.when({
events:"ready",
condition:B.env
}).run(function(t) {
_i_("155:114");
var e = t("jquery"), i = t("et"), n = B.eventEmitter ? B.eventEmitter :e(window), s = "PVSfPPbDACIILZYXMHO";
"index" === B.env.b_action ? i.stage(s, 2) :"searchresults" === B.env.b_action && i.stage(s, 4);
var a = !1, r = function() {
_i_("155:432"), a || (i.stage(s, 1), "index" === B.env.b_action ? i.stage(s, 3) :"searchresults" === B.env.b_action && i.stage(s, 5), a = !0), _r_();
};
n.on("CALENDAR:shown", r), e(".sb-searchbox").on("keypress", ".sb-searchbox__input", r), _r_();
}), _r_();
}(), B.define("component/search/searchbox/experiments/experiment_deals_search_box_filter", function(t, e, i) {
"use strict";
_i_("155:39");
var n = t("component"), s = t("jquery"), a = t("et"), r = "YPNEJYOCGVKe", o = s("input#deals_search_deals_filter"), _ = s("#deals_search_deals_filter_had_preference"), l = !0;
i.exports = n.extend({
init:function() {
_i_("155:414");
var t = this;
if ("index" === B.env.b_action || "searchresults" === B.env.b_action) {
var e = this.getSavedPreference();
null !== e && ("index" === B.env.b_action && (o.prop("checked", e), _.val("0")), l = !1), o.change(function() {
_i_("155:504"), l && (o.prop("checked") && 1 === a.track(r) ? _.val("1") :o.prop("checked") || 2 !== a.track(r) ? _.val("0") :_.val("2")), t.setSavedPreference(o.prop("checked")), _r_();
});
}
"searchresults" === B.env.b_action && this.setCheckboxBasedOnFilters(), _r_();
},
setCheckboxBasedOnFilters:function() {
_i_("155:415");
var t = !0, e = s("a[data-id='any_deal-1']").length > 0, i = s("a[data-id='any_deal-1']").hasClass("active"), n = s("a[data-id='any_deal-2']").length > 0, a = s("a[data-id='any_deal-2']").hasClass("active"), r = s("a[data-id='any_deal-3']").length > 0, _ = s("a[data-id='any_deal-3']").hasClass("active");
e && !i && (t = !1), n && !a && (t = !1), r && !_ && (t = !1), o.prop("checked", t), _r_();
},
setSavedPreference:function(t) {
if (_i_("155:416"), !localStorage) return _r_();
localStorage.setItem(r + "_preference", t), _r_();
},
getSavedPreference:function() {
if (_i_("155:417"), !localStorage) return _r_(null);
var t = localStorage.getItem(r + "_preference");
if (null !== t) return _r_("true" === t);
return _r_(null);
}
}), _r_();
});