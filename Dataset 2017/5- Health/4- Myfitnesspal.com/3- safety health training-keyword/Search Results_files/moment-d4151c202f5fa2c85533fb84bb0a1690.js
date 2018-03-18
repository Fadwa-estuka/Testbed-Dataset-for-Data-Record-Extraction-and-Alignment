(function(h,E){"object"===typeof exports&&"undefined"!==typeof module?module.exports=E():"function"===typeof define&&define.amd?define(E):h.moment=E()})(this,function(){function h(){return Ka.apply(null,arguments)}function E(a){return"[object Array]"===Object.prototype.toString.call(a)}function da(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function wb(a,b){var c=[],d;for(d=0;d<a.length;++d)c.push(b(a[d],d));return c}function J(a,b){return Object.prototype.hasOwnProperty.call(a,
b)}function ea(a,b){for(var c in b)J(b,c)&&(a[c]=b[c]);J(b,"toString")&&(a.toString=b.toString);J(b,"valueOf")&&(a.valueOf=b.valueOf);return a}function X(a,b,c,d){return La(a,b,c,d,!0).utc()}function p(a){null==a._pf&&(a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1});return a._pf}function Ma(a){if(null==a._isValid){var b=p(a);a._isValid=!isNaN(a._d.getTime())&&0>b.overflow&&!b.empty&&!b.invalidMonth&&
!b.nullInput&&!b.invalidFormat&&!b.userInvalidated;a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function Na(a){var b=X(NaN);null!=a?ea(p(b),a):p(b).userInvalidated=!0;return b}function Oa(a,b){var c,d,k;"undefined"!==typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject);"undefined"!==typeof b._i&&(a._i=b._i);"undefined"!==typeof b._f&&(a._f=b._f);"undefined"!==typeof b._l&&(a._l=b._l);"undefined"!==typeof b._strict&&
(a._strict=b._strict);"undefined"!==typeof b._tzm&&(a._tzm=b._tzm);"undefined"!==typeof b._isUTC&&(a._isUTC=b._isUTC);"undefined"!==typeof b._offset&&(a._offset=b._offset);"undefined"!==typeof b._pf&&(a._pf=p(b));"undefined"!==typeof b._locale&&(a._locale=b._locale);if(0<qa.length)for(c in qa)d=qa[c],k=b[d],"undefined"!==typeof k&&(a[d]=k);return a}function Y(a){Oa(this,a);this._d=new Date(+a._d);!1===ra&&(ra=!0,h.updateOffset(this),ra=!1)}function F(a){return a instanceof Y||null!=a&&null!=a._isAMomentObject}
function r(a){a=+a;var b=0;0!==a&&isFinite(a)&&(b=0<=a?Math.floor(a):Math.ceil(a));return b}function Pa(a,b,c){var d=Math.min(a.length,b.length),k=Math.abs(a.length-b.length),f=0,e;for(e=0;e<d;e++)(c&&a[e]!==b[e]||!c&&r(a[e])!==r(b[e]))&&f++;return f+k}function Qa(){}function Ra(a){return a?a.toLowerCase().replace("_","-"):a}function Sa(a){var b=null;if(!K[a]&&"undefined"!==typeof module&&module&&module.exports)try{b=fa._abbr,require("./locale/"+a),Z(b)}catch(c){}return K[a]}function Z(a,b){var c;
a&&(c="undefined"===typeof b?L(a):Ta(a,b))&&(fa=c);return fa._abbr}function Ta(a,b){if(null!==b)return b.abbr=a,K[a]||(K[a]=new Qa),K[a].set(b),Z(a),K[a];delete K[a];return null}function L(a){var b;a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr);if(!a)return fa;if(!E(a)){if(b=Sa(a))return b;a=[a]}a:{b=0;for(var c,d,k,f;b<a.length;){f=Ra(a[b]).split("-");c=f.length;for(d=(d=Ra(a[b+1]))?d.split("-"):null;0<c;){if(k=Sa(f.slice(0,c).join("-"))){a=k;break a}if(d&&d.length>=c&&Pa(f,d,!0)>=c-1)break;
c--}b++}a=null}return a}function u(a,b){var c=a.toLowerCase();$[c]=$[c+"s"]=$[b]=a}function x(a){return"string"===typeof a?$[a]||$[a.toLowerCase()]:void 0}function Ua(a){var b={},c,d;for(d in a)J(a,d)&&(c=x(d))&&(b[c]=a[d]);return b}function S(a,b){return function(c){return null!=c?(this._d["set"+(this._isUTC?"UTC":"")+a](c),h.updateOffset(this,b),this):ga(this,a)}}function ga(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function Va(a,b){var c;if("object"===typeof a)for(c in a)this.set(c,a[c]);
else if(a=x(a),"function"===typeof this[a])return this[a](b);return this}function sa(a,b,c){for(var d=""+Math.abs(a);d.length<b;)d="0"+d;return(0<=a?c?"+":"":"-")+d}function l(a,b,c,d){var k=d;"string"===typeof d&&(k=function(){return this[d]()});a&&(T[a]=k);b&&(T[b[0]]=function(){return sa(k.apply(this,arguments),b[1],b[2])});c&&(T[c]=function(){return this.localeData().ordinal(k.apply(this,arguments),a)})}function xb(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function yb(a){var b=
a.match(Wa),c,d;c=0;for(d=b.length;c<d;c++)b[c]=T[b[c]]?T[b[c]]:xb(b[c]);return function(k){var f="";for(c=0;c<d;c++)f+=b[c]instanceof Function?b[c].call(k,a):b[c];return f}}function ta(a,b){if(!a.isValid())return a.localeData().invalidDate();b=Xa(b,a.localeData());ua[b]||(ua[b]=yb(b));return ua[b](a)}function Xa(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(ha.lastIndex=0;0<=d&&ha.test(a);)a=a.replace(ha,c),ha.lastIndex=0,d-=1;return a}function g(a,b,c){va[a]="function"===typeof b?
b:function(a){return a&&c?c:b}}function zb(a,b){return J(va,a)?va[a](b._strict,b._locale):new RegExp(Ab(a))}function Ab(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,c,d,k,f){return c||d||k||f}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function t(a,b){var c,d=b;"string"===typeof a&&(a=[a]);"number"===typeof b&&(d=function(a,c){c[b]=r(a)});for(c=0;c<a.length;c++)wa[a[c]]=d}function aa(a,b){t(a,function(a,d,k,f){k._w=k._w||{};b(a,k._w,k,f)})}function xa(a,b){return(new Date(Date.UTC(a,
b+1,0))).getUTCDate()}function Ya(a,b){var c;if("string"===typeof b&&(b=a.localeData().monthsParse(b),"number"!==typeof b))return a;c=Math.min(a.date(),xa(a.year(),b));a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c);return a}function Za(a){return null!=a?(Ya(this,a),h.updateOffset(this,!0),this):ga(this,"Month")}function ya(a){var b;(b=a._a)&&-2===p(a).overflow&&(b=0>b[B]||11<b[B]?B:1>b[z]||b[z]>xa(b[C],b[B])?z:0>b[v]||24<b[v]||24===b[v]&&(0!==b[M]||0!==b[N]||0!==b[O])?v:0>b[M]||59<b[M]?M:0>b[N]||59<
b[N]?N:0>b[O]||999<b[O]?O:-1,p(a)._overflowDayOfYear&&(b<C||b>z)&&(b=z),p(a).overflow=b);return a}function $a(a){!1===h.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function y(a,b){var c=!0,d=a+"\n"+Error().stack;return ea(function(){c&&($a(d),c=!1);return b.apply(this,arguments)},b)}function ab(a){var b,c,d=a._i,k=Bb.exec(d);if(k){p(a).iso=!0;b=0;for(c=za.length;b<c;b++)if(za[b][1].exec(d)){a._f=za[b][0]+(k[6]||" ");break}b=0;for(c=
Aa.length;b<c;b++)if(Aa[b][1].exec(d)){a._f+=Aa[b][0];break}d.match(ia)&&(a._f+="Z");Ba(a)}else a._isValid=!1}function Cb(a){var b=Db.exec(a._i);null!==b?a._d=new Date(+b[1]):(ab(a),!1===a._isValid&&(delete a._isValid,h.createFromInputFallback(a)))}function Eb(a,b,c,d,k,f,e){b=new Date(a,b,c,d,k,f,e);1970>a&&b.setFullYear(a);return b}function Ca(a){var b=new Date(Date.UTC.apply(null,arguments));1970>a&&b.setUTCFullYear(a);return b}function Da(a){return 0===a%4&&0!==a%100||0===a%400}function P(a,b,
c){b=c-b;c-=a.day();c>b&&(c-=7);c<b-7&&(c+=7);a=q(a).add(c,"d");return{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function U(a,b,c){return null!=a?a:null!=b?b:c}function Ea(a){var b,c,d=[],k;if(!a._d){k=new Date;k=a._useUTC?[k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate()]:[k.getFullYear(),k.getMonth(),k.getDate()];if(a._w&&null==a._a[z]&&null==a._a[B]){var f,e,g;f=a._w;null!=f.GG||null!=f.W||null!=f.E?(b=1,g=4,c=U(f.GG,a._a[C],P(q(),1,4).year),e=U(f.W,1),f=U(f.E,1)):(b=a._locale._week.dow,
g=a._locale._week.doy,c=U(f.gg,a._a[C],P(q(),b,g).year),e=U(f.w,1),null!=f.d?(f=f.d,f<b&&++e):f=null!=f.e?f.e+b:b);var h=Ca(c,0,1).getUTCDay(),h=0===h?7:h;g=7*(e-1)+((null!=f?f:b)-b)+(b-h+(h>g?7:0)-(h<b?7:0))+1;b=0<g?c:c-1;c=0<g?g:(Da(c-1)?366:365)+g;a._a[C]=b;a._dayOfYear=c}a._dayOfYear&&(c=U(a._a[C],k[C]),a._dayOfYear>(Da(c)?366:365)&&(p(a)._overflowDayOfYear=!0),c=Ca(c,0,a._dayOfYear),a._a[B]=c.getUTCMonth(),a._a[z]=c.getUTCDate());for(c=0;3>c&&null==a._a[c];++c)a._a[c]=d[c]=k[c];for(;7>c;c++)a._a[c]=
d[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[v]&&0===a._a[M]&&0===a._a[N]&&0===a._a[O]&&(a._nextDay=!0,a._a[v]=0);a._d=(a._useUTC?Ca:Eb).apply(null,d);null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm);a._nextDay&&(a._a[v]=24)}}function Ba(a){if(a._f===h.ISO_8601)ab(a);else{a._a=[];p(a).empty=!0;var b=""+a._i,c,d,k,f,e,g=b.length,l=0;k=Xa(a._f,a._locale).match(Wa)||[];for(c=0;c<k.length;c++){f=k[c];if(d=(b.match(zb(f,a))||[])[0])e=b.substr(0,b.indexOf(d)),0<e.length&&p(a).unusedInput.push(e),
b=b.slice(b.indexOf(d)+d.length),l+=d.length;if(T[f]){if(d?p(a).empty=!1:p(a).unusedTokens.push(f),e=a,null!=d&&J(wa,f))wa[f](d,e._a,e,f)}else a._strict&&!d&&p(a).unusedTokens.push(f)}p(a).charsLeftOver=g-l;0<b.length&&p(a).unusedInput.push(b);!0===p(a).bigHour&&12>=a._a[v]&&0<a._a[v]&&(p(a).bigHour=void 0);b=a._a;c=v;g=a._locale;k=a._a[v];l=a._meridiem;null!=l&&(null!=g.meridiemHour?k=g.meridiemHour(k,l):null!=g.isPM&&((g=g.isPM(l))&&12>k&&(k+=12),g||12!==k||(k=0)));b[c]=k;Ea(a);ya(a)}}function Fb(a){if(!a._d){var b=
Ua(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond];Ea(a)}}function Gb(a){var b=a._i;void 0===b?a._d=new Date:da(b)?a._d=new Date(+b):"string"===typeof b?Cb(a):E(b)?(a._a=wb(b.slice(0),function(a){return parseInt(a,10)}),Ea(a)):"object"===typeof b?Fb(a):"number"===typeof b?a._d=new Date(b):h.createFromInputFallback(a)}function La(a,b,c,d,k){var f={};"boolean"===typeof c&&(d=c,c=void 0);f._isAMomentObject=!0;f._useUTC=f._isUTC=k;f._l=c;f._i=a;f._f=b;f._strict=d;a=f._i;
b=f._f;f._locale=f._locale||L(f._l);if(null===a||void 0===b&&""===a)f=Na({nullInput:!0});else if("string"===typeof a&&(f._i=a=f._locale.preparse(a)),F(a))f=new Y(ya(a));else{if(E(b)){var e,g,h;if(0===f._f.length)p(f).invalidFormat=!0,f._d=new Date(NaN);else{for(a=0;a<f._f.length;a++)if(b=0,e=Oa({},f),null!=f._useUTC&&(e._useUTC=f._useUTC),e._f=f._f[a],Ba(e),Ma(e)&&(b+=p(e).charsLeftOver,b+=10*p(e).unusedTokens.length,p(e).score=b,null==h||b<h))h=b,g=e;ea(f,g||e)}}else b?Ba(f):da(a)?f._d=a:Gb(f);f=
new Y(ya(f));f._nextDay&&(f.add(1,"d"),f._nextDay=void 0)}return f}function q(a,b,c,d){return La(a,b,c,d,!1)}function bb(a,b){var c,d;1===b.length&&E(b[0])&&(b=b[0]);if(!b.length)return q();c=b[0];for(d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function ja(a){a=Ua(a);var b=a.year||0,c=a.quarter||0,d=a.month||0,e=a.week||0,f=a.day||0;this._milliseconds=+(a.millisecond||0)+1E3*(a.second||0)+6E4*(a.minute||0)+36E5*(a.hour||0);this._days=+f+7*e;this._months=+d+3*c+12*b;this._data={};this._locale=
L();this._bubble()}function Fa(a){return a instanceof ja}function cb(a,b){l(a,0,0,function(){var a=this.utcOffset(),d="+";0>a&&(a=-a,d="-");return d+sa(~~(a/60),2)+b+sa(~~a%60,2)})}function Ga(a){a=(a||"").match(ia)||[];a=((a[a.length-1]||[])+"").match(Hb)||["-",0,0];var b=+(60*a[1])+r(a[2]);return"+"===a[0]?b:-b}function Ha(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(F(a)||da(a)?+a:+q(a))-+c,c._d.setTime(+c._d+d),h.updateOffset(c,!1),c):q(a).local()}function db(){return this._isUTC&&0===this._offset}
function G(a,b){var c=a,d=null;Fa(a)?c={ms:a._milliseconds,d:a._days,M:a._months}:"number"===typeof a?(c={},b?c[b]=a:c.milliseconds=a):(d=Ib.exec(a))?(c="-"===d[1]?-1:1,c={y:0,d:r(d[z])*c,h:r(d[v])*c,m:r(d[M])*c,s:r(d[N])*c,ms:r(d[O])*c}):(d=Jb.exec(a))?(c="-"===d[1]?-1:1,c={y:Q(d[2],c),M:Q(d[3],c),d:Q(d[4],c),h:Q(d[5],c),m:Q(d[6],c),s:Q(d[7],c),w:Q(d[8],c)}):null==c?c={}:"object"===typeof c&&("from"in c||"to"in c)&&(d=q(c.from),c=q(c.to),c=Ha(c,d),d.isBefore(c)?c=eb(d,c):(c=eb(c,d),c.milliseconds=
-c.milliseconds,c.months=-c.months),d=c,c={},c.ms=d.milliseconds,c.M=d.months);c=new ja(c);Fa(a)&&J(a,"_locale")&&(c._locale=a._locale);return c}function Q(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function eb(a,b){var c={milliseconds:0,months:0};c.months=b.month()-a.month()+12*(b.year()-a.year());a.clone().add(c.months,"M").isAfter(b)&&--c.months;c.milliseconds=+b-+a.clone().add(c.months,"M");return c}function fb(a,b){return function(c,d){var e;null===d||isNaN(+d)||(gb[b]||
($a("moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),gb[b]=!0),e=c,c=d,d=e);e=G("string"===typeof c?+c:c,d);hb(this,e,a);return this}}function hb(a,b,c,d){var e=b._milliseconds,f=b._days;b=b._months;d=null==d?!0:d;e&&a._d.setTime(+a._d+e*c);f&&(e=ga(a,"Date")+f*c,a._d["set"+(a._isUTC?"UTC":"")+"Date"](e));b&&Ya(a,ga(a,"Month")+b*c);d&&h.updateOffset(a,f||b)}function A(a){return 0>a?Math.ceil(a):Math.floor(a)}function ib(){var a=this.clone().utc();return 0<
a.year()&&9999>=a.year()?"function"===typeof Date.prototype.toISOString?this.toDate().toISOString():ta(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):ta(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jb(a){if(void 0===a)return this._locale._abbr;a=L(a);null!=a&&(this._locale=a);return this}function kb(){return this._locale}function ka(a,b){l(0,[a,a.length],0,b)}function lb(a,b,c){return P(q([a,11,31+b-c]),b,c).week}function mb(a,b){l(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),
b)})}function nb(a,b){return b._meridiemParse}function ob(a){return a}function pb(a,b,c,d){var e=L();b=X().set(d,b);return e[c](b,a)}function ba(a,b,c,d,e){"number"===typeof a&&(b=a,a=void 0);a=a||"";if(null!=b)return pb(a,b,c,e);var f=[];for(b=0;b<d;b++)f[b]=pb(a,b,c,e);return f}function qb(a,b,c,d){b=G(b,c);a._milliseconds+=d*b._milliseconds;a._days+=d*b._days;a._months+=d*b._months;return a._bubble()}function H(a){return function(){return this.as(a)}}function R(a){return function(){return this._data[a]}}
function Kb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function la(){var a=V(this.years()),b=V(this.months()),c=V(this.days()),d=V(this.hours()),e=V(this.minutes()),f=V(this.seconds()+this.milliseconds()/1E3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Ka,qa=h.momentProperties=[],ra=!1,K={},fa,$={},Wa=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
ha=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ua={},T={},rb=/\d/,w=/\d\d/,sb=/\d{3}/,Ia=/\d{4}/,ma=/[+-]?\d{6}/,s=/\d\d?/,na=/\d{1,3}/,Ja=/\d{1,4}/,oa=/[+-]?\d{1,6}/,pa=/[+-]?\d+/,ia=/Z|[+-]\d\d:?\d\d/gi,ca=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,va={},wa={},C=0,B=1,z=2,v=3,M=4,N=5,O=6;l("M",["MM",2],"Mo",function(){return this.month()+1});l("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)});l("MMMM",0,
0,function(a){return this.localeData().months(this,a)});u("month","M");g("M",s);g("MM",s,w);g("MMM",ca);g("MMMM",ca);t(["M","MM"],function(a,b){b[B]=r(a)-1});t(["MMM","MMMM"],function(a,b,c,d){d=c._locale.monthsParse(a,d,c._strict);null!=d?b[B]=d:p(c).invalidMonth=a});var gb={};h.suppressDeprecationWarnings=!1;var Bb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,za=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],
["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Aa=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Db=/^\/?Date\((\-?\d+)/i;h.createFromInputFallback=y("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=
new Date(a._i+(a._useUTC?" UTC":""))});l(0,["YY",2],0,function(){return this.year()%100});l(0,["YYYY",4],0,"year");l(0,["YYYYY",5],0,"year");l(0,["YYYYYY",6,!0],0,"year");u("year","y");g("Y",pa);g("YY",s,w);g("YYYY",Ja,Ia);g("YYYYY",oa,ma);g("YYYYYY",oa,ma);t(["YYYY","YYYYY","YYYYYY"],C);t("YY",function(a,b){b[C]=h.parseTwoDigitYear(a)});h.parseTwoDigitYear=function(a){return r(a)+(68<r(a)?1900:2E3)};var tb=S("FullYear",!1);l("w",["ww",2],"wo","week");l("W",["WW",2],"Wo","isoWeek");u("week","w");
u("isoWeek","W");g("w",s);g("ww",s,w);g("W",s);g("WW",s,w);aa(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});l("DDD",["DDDD",3],"DDDo","dayOfYear");u("dayOfYear","DDD");g("DDD",na);g("DDDD",sb);t(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)});h.ISO_8601=function(){};var Lb=y("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=q.apply(null,arguments);return a<this?this:a}),Mb=y("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
function(){var a=q.apply(null,arguments);return a>this?this:a});cb("Z",":");cb("ZZ","");g("Z",ia);g("ZZ",ia);t(["Z","ZZ"],function(a,b,c){c._useUTC=!0;c._tzm=Ga(a)});var Hb=/([\+\-]|\d\d)/gi;h.updateOffset=function(){};var Ib=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Jb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;G.fn=ja.prototype;var Nb=fb(1,"add"),Ob=fb(-1,"subtract");h.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
var ub=y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});l(0,["gg",2],0,function(){return this.weekYear()%100});l(0,["GG",2],0,function(){return this.isoWeekYear()%100});ka("gggg","weekYear");ka("ggggg","weekYear");ka("GGGG","isoWeekYear");ka("GGGGG","isoWeekYear");u("weekYear","gg");u("isoWeekYear","GG");g("G",pa);g("g",pa);g("GG",s,w);
g("gg",s,w);g("GGGG",Ja,Ia);g("gggg",Ja,Ia);g("GGGGG",oa,ma);g("ggggg",oa,ma);aa(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)});aa(["gg","GG"],function(a,b,c,d){b[d]=h.parseTwoDigitYear(a)});l("Q",0,0,"quarter");u("quarter","Q");g("Q",rb);t("Q",function(a,b){b[B]=3*(r(a)-1)});l("D",["DD",2],"Do","date");u("date","D");g("D",s);g("DD",s,w);g("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient});t(["D","DD"],z);t("Do",function(a,b){b[z]=r(a.match(s)[0],10)});
var vb=S("Date",!0);l("d",0,"do","day");l("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)});l("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)});l("dddd",0,0,function(a){return this.localeData().weekdays(this,a)});l("e",0,0,"weekday");l("E",0,0,"isoWeekday");u("day","d");u("weekday","e");u("isoWeekday","E");g("d",s);g("e",s);g("E",s);g("dd",ca);g("ddd",ca);g("dddd",ca);aa(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:p(c).invalidWeekday=
a});aa(["d","e","E"],function(a,b,c,d){b[d]=r(a)});l("H",["HH",2],0,"hour");l("h",["hh",2],0,function(){return this.hours()%12||12});mb("a",!0);mb("A",!1);u("hour","h");g("a",nb);g("A",nb);g("H",s);g("h",s);g("HH",s,w);g("hh",s,w);t(["H","HH"],v);t(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a);c._meridiem=a});t(["h","hh"],function(a,b,c){b[v]=r(a);p(c).bigHour=!0});var Pb=S("Hours",!0);l("m",["mm",2],0,"minute");u("minute","m");g("m",s);g("mm",s,w);t(["m","mm"],M);var Qb=S("Minutes",!1);l("s",
["ss",2],0,"second");u("second","s");g("s",s);g("ss",s,w);t(["s","ss"],N);var Rb=S("Seconds",!1);l("S",0,0,function(){return~~(this.millisecond()/100)});l(0,["SS",2],0,function(){return~~(this.millisecond()/10)});l(0,["SSS",3],0,"millisecond");l(0,["SSSS",3],0,"millisecond");u("millisecond","ms");g("S",na,rb);g("SS",na,w);g("SSS",na,sb);g("SSSS",/\d+/);t(["S","SS","SSS","SSSS"],function(a,b){b[O]=r(1E3*("0."+a))});var Sb=S("Milliseconds",!1);l("z",0,0,"zoneAbbr");l("zz",0,0,"zoneName");var e=Y.prototype;
e.add=Nb;e.calendar=function(a){a=a||q();var b=Ha(a,this).startOf("day"),b=this.diff(b,"days",!0),b=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.localeData().calendar(b,this,q(a)))};e.clone=function(){return new Y(this)};e.diff=function(a,b,c){a=Ha(a,this);var d=6E4*(a.utcOffset()-this.utcOffset());b=x(b);if("year"===b||"month"===b||"quarter"===b){var d=12*(a.year()-this.year())+(a.month()-this.month()),e=this.clone().add(d,
"months"),f;0>a-e?(f=this.clone().add(d-1,"months"),a=(a-e)/(e-f)):(f=this.clone().add(d+1,"months"),a=(a-e)/(f-e));a=-(d+a);"quarter"===b?a/=3:"year"===b&&(a/=12)}else a=this-a,a="second"===b?a/1E3:"minute"===b?a/6E4:"hour"===b?a/36E5:"day"===b?(a-d)/864E5:"week"===b?(a-d)/6048E5:a;return c?a:A(a)};e.endOf=function(a){a=x(a);return void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")};e.format=function(a){a=ta(this,a||h.defaultFormat);return this.localeData().postformat(a)};
e.from=function(a,b){return this.isValid()?G({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()};e.fromNow=function(a){return this.from(q(),a)};e.to=function(a,b){return this.isValid()?G({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()};e.toNow=function(a){return this.to(q(),a)};e.get=Va;e.invalidAt=function(){return p(this).overflow};e.isAfter=function(a,b){b=x("undefined"!==typeof b?b:"millisecond");return"millisecond"===b?(a=
F(a)?a:q(a),+this>+a):(F(a)?+a:+q(a))<+this.clone().startOf(b)};e.isBefore=function(a,b){var c;b=x("undefined"!==typeof b?b:"millisecond");if("millisecond"===b)return a=F(a)?a:q(a),+this<+a;c=F(a)?+a:+q(a);return+this.clone().endOf(b)<c};e.isBetween=function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)};e.isSame=function(a,b){var c;b=x(b||"millisecond");if("millisecond"===b)return a=F(a)?a:q(a),+this===+a;c=+q(a);return+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b)};e.isValid=function(){return Ma(this)};
e.lang=ub;e.locale=jb;e.localeData=kb;e.max=Mb;e.min=Lb;e.parsingFlags=function(){return ea({},p(this))};e.set=Va;e.startOf=function(a){a=x(a);switch(a){case "year":this.month(0);case "quarter":case "month":this.date(1);case "week":case "isoWeek":case "day":this.hours(0);case "hour":this.minutes(0);case "minute":this.seconds(0);case "second":this.milliseconds(0)}"week"===a&&this.weekday(0);"isoWeek"===a&&this.isoWeekday(1);"quarter"===a&&this.month(3*Math.floor(this.month()/3));return this};e.subtract=
Ob;e.toArray=function(){return[this.year(),this.month(),this.date(),this.hour(),this.minute(),this.second(),this.millisecond()]};e.toDate=function(){return this._offset?new Date(+this):this._d};e.toISOString=ib;e.toJSON=ib;e.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")};e.unix=function(){return Math.floor(+this/1E3)};e.valueOf=function(){return+this._d-6E4*(this._offset||0)};e.year=tb;e.isLeapYear=function(){return Da(this.year())};e.weekYear=function(a){var b=
P(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")};e.isoWeekYear=function(a){var b=P(this,1,4).year;return null==a?b:this.add(a-b,"y")};e.quarter=e.quarters=function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)};e.month=Za;e.daysInMonth=function(){return xa(this.year(),this.month())};e.week=e.weeks=function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")};e.isoWeek=e.isoWeeks=function(a){var b=
P(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")};e.weeksInYear=function(){var a=this.localeData()._week;return lb(this.year(),a.dow,a.doy)};e.isoWeeksInYear=function(){return lb(this.year(),1,4)};e.date=vb;e.day=e.days=function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();if(null!=a){a:{var c=this.localeData();if("string"===typeof a)if(isNaN(a)){if(a=c.weekdaysParse(a),"number"!==typeof a){a=null;break a}}else a=parseInt(a,10)}return this.add(a-b,"d")}return b};e.weekday=function(a){var b=
(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")};e.isoWeekday=function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)};e.dayOfYear=function(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864E5)+1;return null==a?b:this.add(a-b,"d")};e.hour=e.hours=Pb;e.minute=e.minutes=Qb;e.second=e.seconds=Rb;e.millisecond=e.milliseconds=Sb;e.utcOffset=function(a,b){var c=this._offset||0,d;return null!=a?("string"===typeof a&&(a=Ga(a)),
16>Math.abs(a)&&(a*=60),!this._isUTC&&b&&(d=15*-Math.round(this._d.getTimezoneOffset()/15)),this._offset=a,this._isUTC=!0,null!=d&&this.add(d,"m"),c!==a&&(!b||this._changeInProgress?hb(this,G(a-c,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,h.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?c:15*-Math.round(this._d.getTimezoneOffset()/15)};e.utc=function(a){return this.utcOffset(0,a)};e.local=function(a){this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(15*
-Math.round(this._d.getTimezoneOffset()/15),"m"));return this};e.parseZone=function(){this._tzm?this.utcOffset(this._tzm):"string"===typeof this._i&&this.utcOffset(Ga(this._i));return this};e.hasAlignedHourOffset=function(a){a=a?q(a).utcOffset():0;return 0===(this.utcOffset()-a)%60};e.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()};e.isDSTShifted=function(){if(this._a){var a=this._isUTC?X(this._a):q(this._a);return this.isValid()&&
0<Pa(this._a,a.toArray())}return!1};e.isLocal=function(){return!this._isUTC};e.isUtcOffset=function(){return this._isUTC};e.isUtc=db;e.isUTC=db;e.zoneAbbr=function(){return this._isUTC?"UTC":""};e.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""};e.dates=y("dates accessor is deprecated. Use date instead.",vb);e.months=y("months accessor is deprecated. Use month instead",Za);e.years=y("years accessor is deprecated. Use year instead",tb);e.zone=y("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
function(a,b){return null!=a?("string"!==typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()});var m=Qa.prototype;m._calendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};m.calendar=function(a,b,c){a=this._calendar[a];return"function"===typeof a?a.call(b,c):a};m._longDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"};
m.longDateFormat=function(a){var b=this._longDateFormat[a];!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b);return b};m._invalidDate="Invalid date";m.invalidDate=function(){return this._invalidDate};m._ordinal="%d";m.ordinal=function(a){return this._ordinal.replace("%d",a)};m._ordinalParse=/\d{1,2}/;m.preparse=ob;m.postformat=ob;m._relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",
m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};m.relativeTime=function(a,b,c,d){var e=this._relativeTime[c];return"function"===typeof e?e(a,b,c,d):e.replace(/%d/i,a)};m.pastFuture=function(a,b){var c=this._relativeTime[0<a?"future":"past"];return"function"===typeof c?c(b):c.replace(/%s/i,b)};m.set=function(a){var b,c;for(c in a)b=a[c],"function"===typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+
"|"+/\d{1,2}/.source)};m.months=function(a){return this._months[a.month()]};m._months="January February March April May June July August September October November December".split(" ");m.monthsShort=function(a){return this._monthsShort[a.month()]};m._monthsShort="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");m.monthsParse=function(a,b,c){var d,e;this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]);for(d=0;12>d;d++)if(e=X([2E3,d]),c&&!this._longMonthsParse[d]&&
(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(e="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(e.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a)||c&&"MMM"===b&&this._shortMonthsParse[d].test(a)||!c&&this._monthsParse[d].test(a))return d};m.week=function(a){return P(a,this._week.dow,this._week.doy).week};
m._week={dow:0,doy:6};m.firstDayOfYear=function(){return this._week.doy};m.firstDayOfWeek=function(){return this._week.dow};m.weekdays=function(a){return this._weekdays[a.day()]};m._weekdays="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");m.weekdaysMin=function(a){return this._weekdaysMin[a.day()]};m._weekdaysMin="Su Mo Tu We Th Fr Sa".split(" ");m.weekdaysShort=function(a){return this._weekdaysShort[a.day()]};m._weekdaysShort="Sun Mon Tue Wed Thu Fri Sat".split(" ");m.weekdaysParse=
function(a){var b,c;this._weekdaysParse||(this._weekdaysParse=[]);for(b=0;7>b;b++)if(this._weekdaysParse[b]||(c=q([2E3,1]).day(b),c="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(c.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b};m.isPM=function(a){return"p"===(a+"").toLowerCase().charAt(0)};m._meridiemParse=/[ap]\.?m?\.?/i;m.meridiem=function(a,b,c){return 11<a?c?"pm":"PM":c?"am":"AM"};Z("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,
ordinal:function(a){var b=a%10,b=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+b}});h.lang=y("moment.lang is deprecated. Use moment.locale instead.",Z);h.langData=y("moment.langData is deprecated. Use moment.localeData instead.",L);var D=Math.abs,Tb=H("ms"),Ub=H("s"),Vb=H("m"),Wb=H("h"),Xb=H("d"),Yb=H("w"),Zb=H("M"),$b=H("y"),ac=R("milliseconds"),bc=R("seconds"),cc=R("minutes"),dc=R("hours"),ec=R("days"),fc=R("months"),gc=R("years"),W=Math.round,I={s:45,m:45,h:22,d:26,M:11},
V=Math.abs,n=ja.prototype;n.abs=function(){var a=this._data;this._milliseconds=D(this._milliseconds);this._days=D(this._days);this._months=D(this._months);a.milliseconds=D(a.milliseconds);a.seconds=D(a.seconds);a.minutes=D(a.minutes);a.hours=D(a.hours);a.months=D(a.months);a.years=D(a.years);return this};n.add=function(a,b){return qb(this,a,b,1)};n.subtract=function(a,b){return qb(this,a,b,-1)};n.as=function(a){var b,c=this._milliseconds;a=x(a);if("month"===a||"year"===a)return b=this._days+c/864E5,
b=this._months+400*b/146097*12,"month"===a?b:b/12;b=this._days+Math.round(this._months/12*146097/400);switch(a){case "week":return b/7+c/6048E5;case "day":return b+c/864E5;case "hour":return 24*b+c/36E5;case "minute":return 1440*b+c/6E4;case "second":return 86400*b+c/1E3;case "millisecond":return Math.floor(864E5*b)+c;default:throw Error("Unknown unit "+a);}};n.asMilliseconds=Tb;n.asSeconds=Ub;n.asMinutes=Vb;n.asHours=Wb;n.asDays=Xb;n.asWeeks=Yb;n.asMonths=Zb;n.asYears=$b;n.valueOf=function(){return this._milliseconds+
864E5*this._days+this._months%12*2592E6+31536E6*r(this._months/12)};n._bubble=function(){var a=this._milliseconds,b=this._days,c=this._months,d=this._data,e=0;d.milliseconds=a%1E3;a=A(a/1E3);d.seconds=a%60;a=A(a/60);d.minutes=a%60;a=A(a/60);d.hours=a%24;b+=A(a/24);e=A(400*b/146097);b-=A(146097*e/400);c+=A(b/30);b%=30;e+=A(c/12);d.days=b;d.months=c%12;d.years=e;return this};n.get=function(a){a=x(a);return this[a+"s"]()};n.milliseconds=ac;n.seconds=bc;n.minutes=cc;n.hours=dc;n.days=ec;n.weeks=function(){return A(this.days()/
7)};n.months=fc;n.years=gc;n.humanize=function(a){var b=this.localeData(),c;c=!a;var d=G(this).abs(),e=W(d.as("s")),f=W(d.as("m")),g=W(d.as("h")),h=W(d.as("d")),l=W(d.as("M")),d=W(d.as("y")),e=e<I.s&&["s",e]||1===f&&["m"]||f<I.m&&["mm",f]||1===g&&["h"]||g<I.h&&["hh",g]||1===h&&["d"]||h<I.d&&["dd",h]||1===l&&["M"]||l<I.M&&["MM",l]||1===d&&["y"]||["yy",d];e[2]=c;e[3]=0<+this;e[4]=b;c=Kb.apply(null,e);a&&(c=b.pastFuture(+this,c));return b.postformat(c)};n.toISOString=la;n.toString=la;n.toJSON=la;n.locale=
jb;n.localeData=kb;n.toIsoString=y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",la);n.lang=ub;l("X",0,0,"unix");l("x",0,0,"valueOf");g("x",pa);g("X",/[+-]?\d+(\.\d{1,3})?/);t("X",function(a,b,c){c._d=new Date(1E3*parseFloat(a,10))});t("x",function(a,b,c){c._d=new Date(r(a))});h.version="2.10.3";Ka=q;h.fn=e;h.min=function(){var a=[].slice.call(arguments,0);return bb("isBefore",a)};h.max=function(){var a=[].slice.call(arguments,0);return bb("isAfter",a)};h.utc=
X;h.unix=function(a){return q(1E3*a)};h.months=function(a,b){return ba(a,b,"months",12,"month")};h.isDate=da;h.locale=Z;h.invalid=Na;h.duration=G;h.isMoment=F;h.weekdays=function(a,b){return ba(a,b,"weekdays",7,"day")};h.parseZone=function(){return q.apply(null,arguments).parseZone()};h.localeData=L;h.isDuration=Fa;h.monthsShort=function(a,b){return ba(a,b,"monthsShort",12,"month")};h.weekdaysMin=function(a,b){return ba(a,b,"weekdaysMin",7,"day")};h.defineLocale=Ta;h.weekdaysShort=function(a,b){return ba(a,
b,"weekdaysShort",7,"day")};h.normalizeUnits=x;h.relativeTimeThreshold=function(a,b){if(void 0===I[a])return!1;if(void 0===b)return I[a];I[a]=b;return!0};return h});
