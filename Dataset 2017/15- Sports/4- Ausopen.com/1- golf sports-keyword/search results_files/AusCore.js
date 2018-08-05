/*! AusOpen-Core - v1.5.8 - 2017-01-05 */
/*
Source: htdocs/aus/js/core/src/AusMain.js
*/
/**
* Create a core object for namespacing general core functionality and utilities
* - public namespace/stores for modules may use for organization of shared data
* - the application is instantiated in windown scope here but started once the page has been
* initialized and is ready for the app to begin loading
*/
(function($) {
function AusCore() {
var api = new Object();
var self = this;
//var serverTime;
// core app states
this.core = {
//version: '@@package-version',
initialized: false
}
this.pageNavigation;
this.multimediaNavigation;
this.weatherData;
this.playerProfile;
this.text;
this.stickyNav;
this.modalWindow;
this.predictiveSearch;
this.favorite;
// get server date
//$.ajax( {
//url :'/date',
//type :'GET',
//dataType :'html',
//timeout :1000,
//async : false,
//error : function() {
//alert('Error loading /date XML document');
//},
//success : function(txt) {
//assume date to be UTC
//txt += ' UTC';
//serverTime = new Date(txt);
//console.log('getDate hours:%o %o', serverTime.getUTCHours(), serverTime.getHours());
//}
//});
//api.getServerDate = function() {
//return serverTime;
//}
return api;
}
window.ausCore = new AusCore();
}(jQuery));
/*
* jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
* http://benalman.com/projects/jquery-bbq-plugin/
*
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
* jQuery hashchange event - v1.2 - 2/11/2010
* http://benalman.com/projects/jquery-hashchange-plugin/
*
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",g=document.documentMode,h=navigator.userAgent.indexOf('MSIE')>-1&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);;
/*
Source: htdocs/aus/js/core/src/PredictiveSearch.js
*/
(function($, ausCore) {
/**
* Poller Class
* Used for setting up repeating AJAX loads. Supports
* a variety of options ranging from simple to complex.
*/
function PredictiveSearch() {
var id = 'PredictiveSearch';
var logger = new eventsCore.util.Logger(id);
var api = new Object();
var searchField;
var searchDisplay;
var loadsrc;
var loader;
var arrowDown = false;
var profileBoost = 10;
var playerDist = 0.8;
var siteDist = 0.6;
var inputVal = '';
var url_pre = '';
var url_post = '&wt=json&fl=url,htsearch,score,metatag.description&rows=10';
var url = url_pre + '/slsearch/cmauso/select?'
var query = "q=(((htsearch:[SEARCH_TEXT]*) OR (htsearch:[SEARCH_TEXT]~[PLAYER_DIST])) AND (url:players/overview)^[PROFILE_BOOST]) OR (title:[SEARCH_TEXT]*~[SITE_DIST]) OR (title:[SEARCH_TEXT]) OR (content:[SEARCH_TEXT])";
/*
//orig
q=(htsearch:[SEARCH_TEXT]*)%5E6%20and%20(url:players/overview)ˆ2&wt=json&fl=url,htsearch,score,metatag.description&rows=10&indent=true
//test
q=(htsearch:+%22feder*%22%20OR%20(htsearch:+%22feder*%22%20AND%20url:%22players/overview%22))&wt=json&fl=url,htsearch,score,metatag.description&rows=10
//new
q=((htsearch:+"feder*")%20AND%20(url:"players/overview")%5E6)%20OR%20htsearch:+"feder*"&wt=json&fl=url,htsearch,score,metatag.description&rows=10
q=((htsearch:+"[SEARCH_TEXT]*")%20AND%20(url:"players/overview")%5E6)%20OR%20htsearch:+"[SEARCH_TEXT]*"&wt=json&fl=url,htsearch,score,metatag.description&rows=10
//new2
q=((htsearch:"[SEARCH_TEXT]*%20Player%20Profile"~2)%5E100%20OR%20htsearch:[SEARCH_TEXT]*)&wt=json&fl=url,htsearch,score,metatag.description&rows=10
q=((htsearch:fed*)%20AND%20(url:players/overview))%20OR%20(htsearch:feder*)&wt=json&fl=url,htsearch,score,metatag.description&rows=10
*/
var hideMenu = function() {
$(searchDisplay).hide();
};
var searchLoadHandler = function(data) {
logger.info('searchLoadHandler - data:%o', data);
var results = data.response.docs;
var displayText;
$(searchDisplay).html('');
hideMenu();
hasResults = false;
$(searchDisplay).append('<li class="title">POPULAR RESULTS</li>');
_.each(results, function(result, key) {
if (result.score >= 0.0001 && result.htsearch !== undefined) {
//logger.info('searchLoadHandler - data:%o score:%o url:%o', result.htsearch, result.score, result.url);
hasResults = true;
displayText = highlightText(result.htsearch, inputVal, '<span class="match">', '</span>');
//logger.info('searchLoadHandler - display:%o ', displayText);
$(searchDisplay).append('<li class="result"><a href="' + result.url + '">' + displayText + '</a></li>');
}
});
$(searchDisplay).append('<li class="more"><span class="icon"></span><a href="/en_AU/search/results.html?query=' + inputVal + '">see more results <i class="icon-arrow-right"></i></a></li>');
if (hasResults)
$(searchDisplay).show();
$(searchDisplay).addClass('searchDisplayList');
//$( "#menu" ).menu();
};
var initKeyWatch = function() {
$(searchField).on('paste input', function( event ) {
inputVal = event.target.value;
logger.info('init - value:%o last:%o', inputVal, (inputVal.substr(inputVal.length - 1) != ' '));
if (inputVal) {
if (inputVal.substr(inputVal.length - 1) != ' ') {
var searchUrl = url + api.query(inputVal) + url_post;
searchUrl = encodeURI(searchUrl);
logger.info('init - url:%o', searchUrl);
loadsrc = {};
loadsrc[searchUrl] = searchLoadHandler;
loader.add(loadsrc, -1);
}
}
else {
$(searchDisplay).hide();
}
});
$(searchField).on('keydown', function( event ) {
return;
if (event.which === 40) {
arrowDown = true;
$(searchField).blur();
logger.info('keydown - value:%o', $(searchDisplay).find('li').first());
$(searchDisplay).find('li').first().addClass('highlight'); 
}
});
$('html').on('keydown', function( event ) {
var children = $(searchDisplay).children();
//logger.info('keydown - value:%o children:%o', event.which, children.length);
//down arrow
if (event.which === 40) {
if (children.length > 0){
arrowDown = true;
$(searchField).blur();
var hl = $(searchDisplay).find('.highlight');
//logger.info('keydown - child%o hl:%o', $(children[0]), hl);
if (hl.length > 0) {
$(hl).removeClass('highlight');
if ($(hl).next().length) {
$(hl).next().addClass('highlight'); 
}
else {
$(hl).addClass('highlight');
}
}
else {
$(children[0]).addClass('highlight'); 
}
}
}
//up arrow
else if (event.which === 38) {
if (children.length > 0){
var hl = $(searchDisplay).find('.highlight');
//logger.info('keydown - child%o hl:%o', $(children[0]), hl);
if (hl.length > 0) {
$(hl).removeClass('highlight');
if ($(hl).prev().length) {
$(hl).prev().addClass('highlight'); 
}
else {
$(hl).addClass('highlight');
}
}
}
}
});
$(searchField).blur(function( event ) {
//logger.info('blur - value:%o', event.target.value);
if (!arrowDown){
setTimeout(hideMenu, 200);
}
arrowDown = false;
});
$(searchField).focus(function( event ) {
//logger.info('focus - value:%o', event.target.value);
});
}
var replaceAll= function (value, search, replace, caseSensitive) {
//return target.replace(new RegExp(search, 'g'), replacement);
return value.split(search).join(replace);
};
var highlightText = function (value, term, pre, post) {
//logger.info("highlight 1 - val:%o term:%o", value, term);
var pos = 0;
var vall = value.toLowerCase();
var terml = term.toLowerCase();
var limit = 0;
while (pos < vall.length && limit < 5) {
pos = vall.indexOf(terml, pos);
if (pos > -1) {
//logger.info("highlight a - pos:%o", pos);
value = [value.slice(0, pos), pre, value.slice(pos)].join('');
vall = value.toLowerCase();
pos += terml.length + pre.length;
//logger.info("highlight b - pos:%o val:%o", pos, value);
value = [value.slice(0, pos), post, value.slice(pos)].join('');
vall = value.toLowerCase();
pos += post.length;
//logger.info("highlight c - pos:%o val:%o", pos, value);
}
else {
pos = vall.length + 1;
}
limit++;
} 
//logger.info("highlight 2 - val:%o term:%o", value, term);
return value; 
}
api.init = function(on, field, display) {
logger.info('init - field:%o enabled:%o', field, on);
if (on) {
$(document).ready(function(){
searchField = $('#' + field)[0];
searchDisplay = $('#' + display)[0];
$(searchDisplay).hide();
logger.info('init - field:%o', searchField);
if (searchField) {
loader = eventsCore.Poller('search');
initKeyWatch();
}
});
}
};
api.searchTerm = function(val) {
logger.info('searchTerm - val:%o', val);
};
api.query = function(searchTerm) {
searchTerm = searchTerm.toLowerCase();
var q = replaceAll(query, "[SEARCH_TEXT]", searchTerm);
q = replaceAll(q, "[PLAYER_DIST]", playerDist);
q = replaceAll(q, "[PROFILE_BOOST]", profileBoost);
q = replaceAll(q, "[SITE_DIST]", siteDist);
return q;
}
return api;
};
ausCore.predictiveSearch = new PredictiveSearch();
}(jQuery, window.ausCore));
//# sourceMappingURL=AusCore.js.map