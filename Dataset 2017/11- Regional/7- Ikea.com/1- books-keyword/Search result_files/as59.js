var ADGEAR=ADGEAR||{};ADGEAR.lang=ADGEAR.lang||{};
ADGEAR.lang.namespace=function(b){var a=b.split(".");
var d=window;var c;for(c=0;c<a.length;c++){d[a[c]]=d[a[c]]||{};
d=d[a[c]]}return d};ADGEAR.lang.singleton=function(){var d=Array.prototype.slice.call(arguments);
var c=d.shift();var h=d.shift();var b=c.split(".");
var j=window;var a=b.length-1;var g;var f;
for(f=0;f<a;f++){j[b[f]]=j[b[f]]||{};j=j[b[f]]
}g=j[b[a]];j[b[a]]=g||h.apply(null,d);return j
};ADGEAR.lang.klass=function(a,b){return ADGEAR.lang.singleton(a,function(){return b
})};ADGEAR.lang.bind=function(b,c){var a=c;
return function(){return b.apply(a,arguments)
}};ADGEAR.lang.mergeHashes=function(c,a){var d={};
var b;for(b in c){if(c.hasOwnProperty(b)){d[b]=c[b]
}}for(b in a){if(a.hasOwnProperty(b)){d[b]=a[b]
}}return d};ADGEAR.lang.log=function(m){if((typeof ADGEAR_JS_DEBUG==="undefined")||(ADGEAR_JS_DEBUG!==true)){return
}function l(i){return(i<10)?"0"+i:i}try{var j=Array.prototype.slice.call(arguments);
j.unshift("> AdGear Log:");if(window.console.debug){window.console.debug.apply(console,j)
}else{window.console.log.apply(console,j)
}j.shift();var k="";var f;for(f=0;f<j.length;
f++){if(typeof j[f]==="string"){k+=" "+j[f]
}else{if(typeof JSON!=="undefined"){try{k+=" "+JSON.stringify(j[f])
}catch(d){}}}}var a=document.getElementById("adgearPreviewConsole");
if(a){var b=a.getElementsByTagName("ul");
if(b&&b[0]){b=b[0]}else{b=document.createElement("ul");
a.appendChild(b)}var c=new Date();var g=document.createElement("li");
g.innerHTML="<strong>[ "+String(c.getFullYear())+"-"+String(l(c.getMonth()+1))+"-"+String(l(c.getDate()))+" "+String(l(c.getHours()))+":"+String(l(c.getMinutes()))+":"+String(l(c.getSeconds()))+"  ] &gt;&gt; </strong>"+String(k);
b.appendChild(g);a.scrollTop=a.scrollHeight
}}catch(h){}};ADGEAR.lang.indexOf=function(d,b){var a=d.length;
var c=Number(arguments[2])||0;c=(c<0)?Math.ceil(c):Math.floor(c);
if(c<0){c+=a}for(;(c>=0)&&(c<a);c++){if(d[c]===b){return c
}}return -1};ADGEAR.lang.safeDecodeURIComponent=function(c){var a="";
try{a=decodeURIComponent(c)}catch(b){}return a
};ADGEAR.lang.safeUrlAppend=function(f,b){var d=f.indexOf("?");
var a=f;var c="";if(b!==""){if(d<0){c="?"
}else{if(d!==(f.length-1)){c="&"}}a=a+c+b
}return a};ADGEAR.lang.klass("ADGEAR.EventQueue",function(){var i={num_processed:0,num_loaded:0,num_error:0,num_aborted:0};
var g=new Array();var b=new Image();var k=false;
function j(){i.num_processed+=1;b=new Image();
if(g.length>0){d()}else{k=false}}function f(){i.num_loaded+=1;
j()}function c(){i.num_error+=1;j()}function a(){i.num_aborted+=1;
j()}function d(){k=true;b.onload=f;b.onerror=c;
b.onabort=a;b.src=g.shift()}function h(){if(!k){d();
return true}return false}return{dispatch:function(l){if("string"===typeof(l)&&l.match(/^https?:\/\//)){g.push(l);
return h()}},stats:function(l){if(l in i){return i[l]
}return null}}});ADGEAR.lang.klass("ADGEAR.QueryString",function(f){var d="";
var b={};function c(i){var j={};for(var g in i){j[g]=i[g]
}return j}function a(k){var g,m,j,n,h,l;var o=ADGEAR.lang.safeDecodeURIComponent;
if((typeof k==="string")&&(k!=="")){d=k;if(d.substring(0,1)==="?"){d=d.substring(1)
}m=d.split("&");for(j=0;j<m.length;j++){n=m[j].split("=");
h=o(n.shift());l=((n!=null)&&(n.length>0))?o(n.join("=")):null;
b[h]=l}}else{if(typeof k==="object"){b=c(k);
g=new Array();for(h in b){l=encodeURIComponent(String(h));
if(b[h]!=null){l+="="+encodeURIComponent(String(b[h]))
}g.push(l)}d=g.join("&")}}}if(f!=null){a(f)
}return{toString:function(){return d},toHash:function(){return b
},isEmpty:function(){for(var g in b){if(b.hasOwnProperty(g)){return false
}}return true},update:function(g,h){b[g]=h;
a(b);return this},add:function(g,h){return this.update(g,h)
},del:function(g){delete b[g];a(b);return this
},contains:function(g){return !!(g in b)},get:function(g){if(this.contains(g)){return b[g]
}return null},delAdGearParams:function(){var h={};
for(var g in b){if(!g.match(/^AG_/)){h[g]=b[g]
}}a(h);return this},dup:function(){return ADGEAR.QueryString(this.toHash())
}}});ADGEAR.lang.singleton("ADGEAR.browser",function(){var b=ADGEAR.lang;
var f=null;var d=null;var c=null;var a=null;
return{type:{IE:!!(window.attachEvent&&(b.indexOf(navigator.userAgent,"Opera")===-1)),Opera:b.indexOf(navigator.userAgent,"Opera")>-1,WebKit:b.indexOf(navigator.userAgent,"AppleWebKit/")>-1,Gecko:b.indexOf(navigator.userAgent,"Gecko")>-1&&b.indexOf(navigator.userAgent,"KHTML")===-1,MobileSafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/)},topWindow:function(){if(f==null){try{f=window.parent;
while(f&&(f!=f.parent)){f=f.parent}}catch(g){}}return f
},isTopWindow:function(){return(this.topWindow()==window)
},currentQueryString:function(){if(d==null){try{d=ADGEAR.QueryString(window.location.search)
}catch(g){}}return d},trueReferrer:function(){if(c==null){try{c=this.topWindow().document.referrer
}catch(g){}if(c==null){c=""}}return c},trueReferer:function(){return this.trueReferrer()
},trueLocation:function(){if(a==null){try{a=String(this.topWindow().location)
}catch(g){}if(a==null){a=""}}return a},localtime:function(){var i="";
try{var n=new Date();var m=n.getTimezoneOffset();
var h=(m<0?"+":"-");m=Math.abs(m);var l=parseInt(m/60);
var g=(m%60);var k=function(o){o=String(o);
while(o.length<2){o="0"+o}return(o)};i=String(n.getFullYear())+"-"+k(n.getMonth()+1)+"-"+k(n.getDate())+"T"+k(n.getHours())+":"+k(n.getMinutes())+":"+k(n.getSeconds())+h+k(l)+":"+k(g)
}catch(j){}return i}}});ADGEAR.lang.klass("ADGEAR.Environment",function(a){var f={};
var c={};var b="ag"+String(Math.floor(Math.random()*100000000000000));
var j=ADGEAR.EventQueue();var d="http";for(var h in a){f[h]=a[h]
}function i(){f.durl="";f.aurl="";if(("delivery" in f)&&(d in f.delivery)&&("hostname" in f.delivery[d])&&(f.delivery[d]["hostname"]!=="")){f.durl=d+"://"+f.delivery[d]["hostname"]
}if(("assets" in f)&&(d in f.assets)&&("hostname" in f.assets[d])&&(f.assets[d]["hostname"]!=="")){f.aurl=d+"://"+f.assets[d]["hostname"];
if(("bucket" in f.assets[d])&&(f.assets[d]["bucket"]!=="")){f.aurl+="/"+f.assets[d]["bucket"]
}}}function g(o,l){var n=o.indexOf("?");var k=o;
var m="";if(l!==""){if(n<0){m="?"}else{if(n!=(o.length-1)){m="&"
}}k=k+m+l}return k}if(((typeof __ADGEAR_SSL!="undefined")&&__ADGEAR_SSL)||(window.location.protocol=="https:")){d="https"
}i();return{config:function(){return f},proto:function(){return d
},getSessionId:function(){return b},setSessionId:function(k){b=String(k)
},eventQueue:function(){return j},helloUrl:function(){this.setSessionId(arguments[0]||this.getSessionId());
return this.deliveryUrl("/session.js",{session:this.getSessionId()})
},deliveryUrl:function(o){var m=arguments[1]||{};
var l=ADGEAR.browser;var k=ADGEAR.QueryString({});
if("querystring" in m&&typeof(m.querystring.toHash)!=="undefined"){k=ADGEAR.QueryString(m.querystring.toHash())
}if(String(o).match(/^https?:\/\//)){return g(o,k.toString())
}if(!("cachebust" in m)||(m.cachebust!==false)){k.add("AG_R",String(Math.floor(Math.random()*100000000000000)))
}if(!("localtime" in m)||(m.localtime!==false)){k.add("AG_LT",l.localtime())
}if(!("trueref" in m)||(m.trueref!==false)){k.add("AG_REF",l.trueReferrer())
}if("session" in m){k.add("AG_SESSID",m.session)
}if(!("deliveryhints" in m)||(m.deliveryhints!==false)){for(var n in c){k.add(n,c[n].join(","))
}}return(f.durl+g(o,k.toString()))},assetUrl:function(m){var l=arguments[1]||{};
var k=ADGEAR.QueryString({});if("querystring" in l){k=ADGEAR.QueryString(l.querystring.toHash())
}if(String(m).match(/^https?:\/\//)){return g(m,k.toString())
}if(("cachebust" in l)&&(l.cachebust===true)){k.add("AG_R",String(Math.floor(Math.random()*100000000000000)))
}return(f.aurl+g(m,k.toString()))},addDeliveryHint:function(k,l){if(!(k in c)){c[k]=[]
}c[k].push(l)},isLivePreview:function(){return(("live_preview" in f)&&(f.live_preview===true))
}}});ADGEAR.lang.singleton("ADGEAR.envs",function(){var a={};
return{config:function(c){var b=c.name;if(!(b in a)){a[b]=ADGEAR.Environment(c)
}return a[b]}}});ADGEAR.lang.singleton("ADGEAR.templateApi",function(){return{getClickUrlFromPath:function(c){var b={querystring:arguments[1]||ADGEAR.QueryString({}),cachebust:false,localtime:false,trueref:false,deliveryhints:false};
if(this["adunit_click_url"]){b.querystring.add("AG_RED",this["adunit_click_url"])
}var a=this.env.deliveryUrl(c,b);if(this["source_clicktracker"]){var g;
if(this["source_clicktracker_is_encoded"]){g=ADGEAR.lang.safeDecodeURIComponent(this["source_clicktracker"])
}else{if(this["source_clicktracker_is_double_encoded"]){var f=ADGEAR.lang.safeDecodeURIComponent;
g=f(f(this["source_clicktracker"]))}else{g=this["source_clicktracker"]
}}var d=this["source_clicktracker_expects_encoded"]?encodeURIComponent(a):a;
a=g+d}return a},getClickUrl:function(b){if(!("clicks" in this)||!(b in this["clicks"])){return null
}if(this.env.isLivePreview()){return this.declared_click_urls[b]
}var a=arguments[1]||ADGEAR.QueryString({});
return this.getClickUrlFromPath(this.clicks[b],a)
},getInteractionUrl:function(a){if(("interactions" in this)&&(a in this["interactions"])){return this.env.deliveryUrl(this.interactions[a],{querystring:arguments[1]||ADGEAR.QueryString({}),localtime:false,trueref:false,deliveryhints:false})
}return null},getFileUrl:function(a){if(("files" in this)&&(a in this["files"])){return this.env.assetUrl(this.files[a])
}return null},getVariable:function(a){if(("variables" in this)&&(a in this["variables"])){return this.variables[a]
}return null},getContainerId:function(){return"adgear_"+String(this.instance_id).replace(/-/g,"_")
},getWidth:function(){var a=this["format_width"];
if(a&&String(a)!=="1"){return a}if(this["natural_width"]){return String(this["natural_width"])
}return"500"},getHeight:function(){var a=this["format_height"];
if(a&&String(a)!=="1"){return a}if(this["natural_height"]){return String(this["natural_height"])
}return"500"},getInstanceId:function(){return this.instance_id
},getTxnId:function(){return this.instance_id
},replaceKnownTokens:function(b){if(!b.match(/__AG_/)){return b
}b=b.replace(/__AG_PLACEMENT_ID__/g,this.placement_id);
b=b.replace(/__AG_AD_ID__/g,this.adunit_id);
b=b.replace(/__AG_AD_IMPRESSIONS_COUNT__/g,this.impressions_count);
b=b.replace(/__AG_AD_CLICKS_COUNT__/g,this.clicks_count);
b=b.replace(/__AG_INSTANCE_ID__/g,this.getInstanceId());
b=b.replace(/__AG_TXN_ID__/g,this.getTxnId());
b=b.replace(/__AG_CLIENT_IP__/g,this.client_ip);
if(b.match(/__AG_GEO/)){b=b.replace(/__AG_GEO_COUNTRY_CODE__/g,this.getGeoCountryCode());
b=b.replace(/__AG_GEO_COUNTRY_NAME__/g,this.getGeoCountryName());
b=b.replace(/__AG_GEO_REGION__/g,this.getGeoRegion());
b=b.replace(/__AG_GEO_CITY__/g,this.getGeoCity());
b=b.replace(/__AG_GEO_ZIP_CODE__/g,this.getGeoPostalCode());
b=b.replace(/__AG_GEO_ISP__/g,this.getGeoIsp());
b=b.replace(/__AG_GEO_NETSPEED__/g,this.getGeoNetspeed());
b=b.replace(/__AG_GEO_LONGITUDE__/g,this.getGeoLongitude());
b=b.replace(/__AG_GEO_LATITUDE__/g,this.getGeoLatitude());
b=b.replace(/__AG_GEO_DMA_CODE__/g,this.getGeoDmaCode());
b=b.replace(/__AG_GEO_AREA_CODE__/g,this.getGeoAreaCode());
b=b.replace(/__AG_GEO_ORGANIZATION__/g,this.getGeoAreaCode())
}if(b.match(/__AG_IMPR_HINT/)){for(var a in this.impression_hints){if(this.impression_hints.hasOwnProperty(a)){b=b.replace(RegExp("__AG_IMPR_HINT\\["+a+"\\]__","g"),this.getImpressionHint(a));
b=b.replace(RegExp("__AG_IMPR_HINT\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getImpressionHint(a)))
}}}if(b.match(/__AG_AD_VAR/)){for(var a in this.variables){if(this.variables.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_VAR\\["+a+"\\]__","g"),this.getVariable(a));
b=b.replace(RegExp("__AG_AD_VAR\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getVariable(a)))
}}}if(b.match(/__AG_AD_FILE_URL/)){for(var a in this.files){if(this.files.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_FILE_URL\\["+a+"\\]__","g"),this.getFileUrl(a));
b=b.replace(RegExp("__AG_AD_FILE_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getFileUrl(a)))
}}}if(b.match(/__AG_AD_CLICK_URL/)){for(var a in this.clicks){if(this.clicks.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_CLICK_URL\\["+a+"\\]__","g"),this.getClickUrl(a));
b=b.replace(RegExp("__AG_AD_CLICK_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getClickUrl(a)))
}}}if(b.match(/__AG_AD_IACTION_URL/)){for(var a in this.interactions){if(this.interactions.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_IACTION_URL\\["+a+"\\]__","g"),this.getInteractionUrl(a));
b=b.replace(RegExp("__AG_AD_IACTION_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getInteractionUrl(a)))
}}}return b},prepThirdParty:function(b){var d=b;
var a=this["click_tracker"];if(String(a).length>0){var c=this["adunit_click_url"];
delete this["adunit_click_url"];d=d.replace(/__CLICK_TRACKER_URL__/g,this.getClickUrlFromPath(a+"?"));
d=d.replace(/__CLICK_TRACKER_URL_ENCODED__/g,encodeURIComponent(this.getClickUrlFromPath(a+"?")));
this["adunit_click_url"]=c}d=d.replace(/__RANDOM_NUMBER__/g,Math.floor(Math.random()*100000000000000));
d=d.replace(/__AG_TXN_ID__/g,this.getTxnId());
d=this.replaceKnownTokens(d);return d},regClick:function(b){var a=arguments[1]||ADGEAR.QueryString({});
var c=this.getClickUrl(b,a);if(c){ADGEAR.lang.log("AdUnit registered CLICK with name: "+String(b)+" - redirect URL: "+c+" - params: [ "+a.toString()+" ]")
}else{ADGEAR.lang.log("AdUnit attempted to register CLICK with name: "+String(b)+" - params: [ "+a.toString()+" ] - but click NOT FOUND!")
}ADGEAR.browser.topWindow().location=c},regInteraction:function(c){var b=arguments[1]||ADGEAR.QueryString({});
var a=this.env.eventQueue();var d=this.getInteractionUrl(c,b);
if(d){ADGEAR.lang.log("AdUnit registered INTERACTION/EVENT with name: "+String(c)+" - params: [ "+b.toString()+" ]")
}else{ADGEAR.lang.log("AdUnit attempted to register INTERACTION/EVENT with name: "+String(c)+" - params: [ "+b.toString()+" ] - but interaction NOT FOUND!")
}return a.dispatch(d)},getGeoCountryCode:function(){if(("geo" in this)&&("country_code" in this["geo"])){return String(this.geo.country_code)
}return null},getGeoCountryName:function(){if(("geo" in this)&&("country_name" in this["geo"])){return String(this.geo.country_name)
}return null},getGeoRegion:function(){if(("geo" in this)&&("region" in this["geo"])){return String(this.geo.region)
}return null},getGeoCity:function(){if(("geo" in this)&&("city" in this["geo"])){return String(this.geo.city)
}return null},getGeoPostalCode:function(){if(("geo" in this)&&("postal_code" in this["geo"])){return String(this.geo.postal_code)
}return null},getGeoIsp:function(){if(("geo" in this)&&("isp" in this["geo"])){return String(this.geo.isp)
}return null},getGeoNetspeed:function(){if(("geo" in this)&&("netspeed" in this["geo"])){return String(this.geo.netspeed)
}return null},getGeoLongitude:function(){if(("geo" in this)&&("longitude" in this["geo"])){return String(this.geo.longitude)
}return null},getGeoLatitude:function(){if(("geo" in this)&&("latitude" in this["geo"])){return String(this.geo.latitude)
}return null},getGeoDmaCode:function(){if(("geo" in this)&&("dma_code" in this["geo"])){return String(this.geo.dma_code)
}return null},getGeoAreaCode:function(){if(("geo" in this)&&("area_code" in this["geo"])){return String(this.geo.area_code)
}return null},getImpressionHint:function(a){if(("impression_hints" in this)&&(a in this["impression_hints"])){return String(this.impression_hints[a])
}return null},doViewportDetect:function(){return(("viewport_detect" in this)&&(true===this["viewport_detect"])&&!this.env.isLivePreview())
},regOnLoadEvent:function(a){if(typeof window.addEventListener!="undefined"){window.addEventListener("load",a,false)
}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",a,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",a)
}else{if(typeof window.onload=="function"){var b=window.onload;
window.onload=function(){b();a()}}else{window.onload=a
}}}}}}});ADGEAR.render=function(i,j,f){function c(o){if(("placement_id" in o)&&("adunit_id" in o)){o.env.addDeliveryHint("AG_S","p"+String(o.placement_id)+",a"+String(o.adunit_id))
}}function h(q){var r=null;try{if("tilings" in q){r=q.tilings;
if("served" in r){q.env.addDeliveryHint("AG_TS",String(r.served))
}if("unserved" in r){for(var p=0;p<r.unserved.length;
p++){q.env.addDeliveryHint("AG_TN",String(r.unserved[p]))
}}}}catch(o){}}function a(p){for(var o in ADGEAR.templateApi){p[o]=ADGEAR.templateApi[o]
}}function l(o){o.source_clicktracker=null;
o.source_clicktracker_expects_encoded=false;
o.source_clicktracker_is_encoded=false;o.source_clicktracker_is_double_encoded=false;
if((typeof ADGEAR_SOURCE_CLICKTRACKER==="string")&&(String(ADGEAR_SOURCE_CLICKTRACKER).toLowerCase().match(/^http/))){o.source_clicktracker=ADGEAR_SOURCE_CLICKTRACKER
}o.source_clicktracker_expects_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED;
o.source_clicktracker_is_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED;
o.source_clicktracker_is_double_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED;
ADGEAR_SOURCE_CLICKTRACKER=null;ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED=null;
ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED=null;
ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED=null
}function n(o){if(typeof OOBClickTrack==="string"){o.OOBClickTrack=OOBClickTrack
}OOBClickTrack=null}function d(o){if(typeof ADGEAR_ADUNIT_CLICK_URL==="string"&&ADGEAR_ADUNIT_CLICK_URL.toLowerCase().match(/^(http|tel)/)){o.adunit_click_url=ADGEAR_ADUNIT_CLICK_URL
}ADGEAR_ADUNIT_CLICK_URL=null}function m(o){if(typeof ADGEAR_RENDER_CB==="function"){o.render_cb=ADGEAR_RENDER_CB
}ADGEAR_RENDER_CB=null}if(("env" in j)&&("name" in j.env)){var k=ADGEAR.envs.config(j.env);
if(!k){ADGEAR.lang.log("Unable to reference environment specified by AdUnit payload (name = "+String(j.env["name"])+"). Aborting rendering!");
return false}j.env=k;c(j);h(j);l(j);n(j);
d(j);m(j);a(j);try{i(j)}catch(g){ADGEAR.lang.log("Failed in executing ad rendering template '"+String(j.template)+"' - placement ID: "+String(j.placement_id)+", adunit ID: "+String(j.adunit_id)+" - in environment '"+String((k.config())["name"])+"'. Exception: "+String(g));
if(f){try{f(j)}catch(b){ADGEAR.lang.log("Failed in executing backup rendering handler provided by '"+String(j.template)+"' - placement ID: "+String(j.placement_id)+", adunit ID: "+String(j.adunit_id)+" - in environment '"+String((k.config())["name"])+"'. Exception: "+String(b))
}}return false}}try{j.render_cb&&j.render_cb(j)
}catch(g){ADGEAR.lang.log("Failed to call user-supplied render callback. Exception: "+String(g))
}return true};ADGEAR.lang.namespace("ADGEAR.vendor");
ADGEAR.vendor.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(d){var a="";
var m,k,h,l,j,g,f;var b=0;var c=ADGEAR.vendor.Base64;
d=c._utf8_encode(d);while(b<d.length){m=d.charCodeAt(b++);
k=d.charCodeAt(b++);h=d.charCodeAt(b++);l=m>>2;
j=((m&3)<<4)|(k>>4);g=((k&15)<<2)|(h>>6);
f=h&63;if(isNaN(k)){g=f=64}else{if(isNaN(h)){f=64
}}a=a+this._keyStr.charAt(l)+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(f)
}return a},decode:function(d){var a="";var m,k,h;
var l,j,g,f;var b=0;var c=ADGEAR.vendor.Base64;
d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(b<d.length){l=this._keyStr.indexOf(d.charAt(b++));
j=this._keyStr.indexOf(d.charAt(b++));g=this._keyStr.indexOf(d.charAt(b++));
f=this._keyStr.indexOf(d.charAt(b++));m=(l<<2)|(j>>4);
k=((j&15)<<4)|(g>>2);h=((g&3)<<6)|f;a=a+String.fromCharCode(m);
if(g!=64){a=a+String.fromCharCode(k)}if(f!=64){a=a+String.fromCharCode(h)
}}a=c._utf8_decode(a);return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");
var a="";for(var f=0;f<b.length;f++){var d=b.charCodeAt(f);
if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);
a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);
a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)
}}}return a},_utf8_decode:function(a){var d="";
var b=0;var f=c1=c2=0;while(b<a.length){f=a.charCodeAt(b);
if(f<128){d+=String.fromCharCode(f);b++}else{if((f>191)&&(f<224)){c2=a.charCodeAt(b+1);
d+=String.fromCharCode(((f&31)<<6)|(c2&63));
b+=2}else{c2=a.charCodeAt(b+1);c3=a.charCodeAt(b+2);
d+=String.fromCharCode(((f&15)<<12)|((c2&63)<<6)|(c3&63));
b+=3}}}return d}};ADGEAR.lang.namespace("ADGEAR.delivery");
ADGEAR.delivery.click_url=function(c,b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.click_url (please use adgear_instance.getClickUrl(name) instead)");
var a=c;if(typeof b!=="undefined"){ADGEAR.lang.log("Legacy click_url does not support arguments:",b)
}if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){var d={querystring:ADGEAR.QueryString({}),cachebust:false,localtime:false,trueref:false,deliveryhints:false};
a=ADGEAR_ENV.deliveryUrl(a,d)}return a};ADGEAR.delivery.file_url=function(b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.file_url (please use adgear_instance.getFileUrl(name) instead)");
var a=b;if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){a=ADGEAR_ENV.assetUrl(a)
}return a};ADGEAR.delivery.interaction_url=function(d,b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.interaction_url (please use adgear_instance.getInteractionUrl(name) instead)");
var a=d;if(typeof b!=="undefined"){ADGEAR.lang.log("Legacy interaction_url does not support arguments:",b)
}if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){var c={querystring:ADGEAR.QueryString({}),localtime:false,trueref:false,deliveryhints:false};
a=ADGEAR_ENV.deliveryUrl(a,c)}return a};ADGEAR.delivery.interaction=function(a){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.interaction (please use adgear_instance.regInteraction(name) instead)");
adgear_instance.env.eventQueue().dispatch(a)
};if(typeof ADGEAR==="undefined"){ADGEAR={}
}if((typeof ADGEAR==="object")&&!ADGEAR.hasOwnProperty("html5")){ADGEAR.html5={}
}ADGEAR.MsgBus=function(g,d){var a={};var b=d||window;
var f=false;try{window.postMessage({toString:function(){f=true
}},"*")}catch(c){}return{regListener:function(h,i){a[h]=i
},sendMessage:function(j,k,h){var i={bus:g,message:String(k),data:h};
if(f&&JSON&&JSON.stringify){i=JSON.stringify(i)
}if(typeof j.postMessage==="function"){j.postMessage(i,"*")
}},receiveMessage:function(k){var i=typeof k.data;
var j=null;if(i==="object"){j=k.data}else{if(i==="string"){try{j=JSON.parse(k.data)
}catch(h){}}}if(!j||!j.hasOwnProperty("bus")||!j.hasOwnProperty("message")||(j.bus!==g)||!a.hasOwnProperty(j.message)){return
}a[j.message](k.source,j.data)},regReceiver:function(h){if(typeof b.addEventListener!=="undefined"){b.addEventListener("message",h,false)
}else{if(typeof b.document.addEventListener!=="undefined"){b.document.addEventListener("message",h,false)
}else{if(typeof b.attachEvent!=="undefined"){b.attachEvent("onmessage",h)
}}}}}};ADGEAR.CreativeData=function(c){var b=c;
function a(d){return((b!==null)&&(b.hasOwnProperty("1pclick_encode"))&&b["1pclick_encode"])?encodeURIComponent(d):d
}return{isInitialized:function(){return(b)
},getField:function(d){return(this.isInitialized()&&b.hasOwnProperty(d))?b[d]:null
},getSubField:function(f,d){return(this.isInitialized()&&b.hasOwnProperty(f)&&b[f].hasOwnProperty(d))?b[f][d]:null
},buildClickTrackerUrl:function(g,h){var i=this.getField("1pclick_url");
var d=this.getField("clickdestoverride_url");
var f=this.getSubField("click_urls",g);if(!f){f=this.getSubField("click_urls","clickTag")
}if(!f){f=this.getSubField("click_urls","clickTAG")
}if(!f){f=this.getSubField("click_urls","clicktag")
}if(i){if(f){if(d){return(i+a(f+encodeURIComponent(d)))
}else{if(h){return(i+a(f+encodeURIComponent(h)))
}}return(i+a(f))}else{if(d){return(i+a(d))
}else{if(h){return(i+a(h))}}}}else{if(f){if(d){return(f+encodeURIComponent(d))
}else{if(h){return(f+encodeURIComponent(h))
}}return f}else{if(d){return d}else{if(h){return h
}}}}return null}}};ADGEAR.html5.adInFrame=window!==top;
ADGEAR.html5.canAccessTop=false;try{ADGEAR.html5.canAccessTop=!!(top.location.href)
}catch(e){}ADGEAR.html5.canAccessParent=false;
try{ADGEAR.html5.canAccessParent=!!(parent.location.href)
}catch(e){}ADGEAR.html5.isDAP=(typeof inDapMgrIf!=="undefined"||typeof inDapIF!=="undefined");
ADGEAR.html5.isAdSense=(typeof IN_ADSENSE_IFRAME!=="undefined")?IN_ADSENSE_IFRAME:false;
ADGEAR.html5.inFIF=(typeof window.inFIF!=="undefined");
ADGEAR.html5.isAJAX=(typeof window.isAJAX!=="undefined");
ADGEAR.html5.isYahoo=(ADGEAR.html5.inFIF||ADGEAR.html5.isAJAX);
ADGEAR.html5.isSafeFrame=(typeof window.$sf!=="undefined");
ADGEAR.html5.getWin=function(a){var b=a.getVariable("disable_iframe_busting");
if(ADGEAR.html5.adInFrame&&!ADGEAR.html5.canAccessTop&&!ADGEAR.html5.canAccessParent){return window
}if(!ADGEAR.html5.adInFrame||b||ADGEAR.html5.isAdSense||ADGEAR.html5.isSafeFrame){return window
}else{if(ADGEAR.html5.isYahoo||ADGEAR.html5.isDAP){return window.parent
}else{return ADGEAR.browser.topWindow()}}};
ADGEAR.html5.getDoc=function(a){return ADGEAR.html5.getWin(a).document
};ADGEAR.html5.getAssetsRoot=function(a){var c=a.env.proto();
var d=a.getVariable("bucket")||"a";var b=(c==="https")?"https://"+d+".adgear.com/":"http://cdn.adgear.com/"+d+"/";
return b};ADGEAR.html5.basicLoader=function(L,s,g){var W=ADGEAR.html5.getWin(g);
var q=ADGEAR.html5.getDoc(g);if(g.getVariable("mraid")==="true"){document.write('<script src="mraid.js"><\/script>')
}function y(ao,an){var am;for(am in ao){if(ao.hasOwnProperty(am)){an(ao[am],am,ao)
}}}function G(){ADGEAR.lang.log.apply(ADGEAR.lang,arguments)
}function d(am){if(am==="true"||am==="1"){return true
}else{if(am==="false"||am==="0"){return false
}}return am}function k(aq,am,an){if(typeof aq.addEventListener!=="undefined"){aq.addEventListener(am,an,false);
return true}else{if(typeof aq.attachEvent!=="undefined"){aq.attachEvent("on"+am,an);
return true}else{if(typeof aq["on"+am]==="function"){var ap=aq["on"+am];
aq["on"+am]=function(){ap();an()};return true
}else{try{aq["on"+am]=an}catch(ao){return false
}return typeof aq["on"+am]==="function"}}}}function af(){if(top===self){return null
}var aq=null;try{aq=window.frameElement;if(aq!==null&&(ADGEAR.html5.isYahoo||ADGEAR.html5.isDAP)){return aq
}}catch(ap){}if(document.body.id){try{return window.parent.document.getElementById(document.body.id)
}catch(ap){}}var am=window;var at=q.getElementsByTagName("iframe");
var ao=at.length;var an;for(;am!==top;am=am.parent){for(an=0;
an<ao;an++){try{if(at[an].contentWindow===am){return at[an]
}}catch(ar){}}}return null}function Z(ao,an){var am=af();
if(am){am.width=ao;am.style.width=ao+"px";
am.height=an;am.style.height=an+"px"}}function R(an){var aq=af();
var ao=aq.parentNode;var am=false;try{if(!am){ao.insertBefore(an,aq);
aq.style.display="none";am=true;return an
}}catch(ap){}}function ab(ao,aq,an,ap,am){var at={top:"auto",left:"auto",right:"auto",bottom:"auto"};
var ar={height:(am-an)/2,width:(ap-aq)/2};
switch(ao){case"C":at.top=ar.height;at.left=ar.width;
break;case"B":at.top=0;at.left=ar.width;break;
case"T":at.bottom=0;at.left=ar.width;break;
case"L":at.top=ar.height;at.right=0;break;
case"R":at.top=ar.height;at.left=0;break;
case"BL":at.top=0;at.right=0;break;case"TL":at.bottom=0;
at.right=0;break;case"TR":at.bottom=0;at.left=0;
break;case"BR":default:at.top=0;at.left=0;
break}return at}function ak(aq,am,av,ap,ao){var au=ap-am;
var ar=ao-av;var at=au/2;var an=ar/2;switch(aq){case"L":return{t:an,r:0,b:an,l:au};
case"R":return{t:an,r:au,b:an,l:0};case"B":return{t:0,r:at,b:ar,l:at};
case"T":return{t:ar,r:at,b:0,l:at};case"TL":return{t:ar,r:0,b:0,l:au};
case"TR":return{t:ar,r:au,b:0,l:0};case"BL":return{t:0,r:0,b:ar,l:au};
case"BR":return{t:0,r:au,b:ar,l:0};case"C":return{t:an,r:at,b:an,l:at};
default:break}}function I(an,am){var ao=0;
try{var aq;for(aq=an.parentNode;(typeof(aq)!=="undefined"&&aq.tagName&&aq.tagName!=="BODY");
aq=aq.parentNode){if(aq.style&&typeof(aq.style.overflow)!=="undefined"&&ao<=am){aq.style.overflow="visible"
}ao++}}catch(ap){}}function O(an){var ap=an+"=";
var am=document.cookie.split(";");var ao;
for(ao=0;ao<am.length;ao++){var aq=am[ao];
while(aq.charAt(0)===" "){aq=aq.substring(1,aq.length)
}if(aq.indexOf(ap)===0){return aq.substring(ap.length,aq.length)
}}return null}function w(ap,aq,an){var am="";
if(an){var ao=new Date();ao.setTime(ao.getTime()+(Number(an)*3600000));
am="; expires="+ao.toGMTString()}document.cookie=(ap+"="+aq+am+"; path=/")
}function Y(am){w(am,"",-1)}function aj(an){var am=365*24;
w(T,an,am);aa=an}function V(ap){var am=g.env.eventQueue();
var an=g.getVariable(ap);var ao=1;if(an!==null){am.dispatch(g.prepThirdParty(an))
}while(ao){an=g.getVariable(ap+String(ao));
if(an!==null){am.dispatch(g.prepThirdParty(an));
ao++}else{if(ao===1){ao++}else{ao=0;break
}}}}var Q={};Q.width=g.getVariable("width")||g.getWidth();
Q.height=g.getVariable("height")||g.getHeight();
Q["1pclick_url"]=g.source_clicktracker||null;
Q["1pclick_encode"]=g.source_clicktracker_expects_encoded||null;
Q["1pclick_is_double_encoded"]=g.source_clicktracker_is_double_encoded||null;
Q["1pclick_is_encoded"]=g.source_clicktracker_is_encoded||null;
Q.clickdestoverride_url=g.adunit_click_url||null;
Q["1poobclick_url"]=g.OOBClickTrack||null;
var r=ADGEAR.QueryString({});y(g.clicks,function(ap,an,am){var ao=g.getClickUrl(an);
if(ap.match(/^http/)){ao=ap}ao=ao.replace(g.source_clicktracker,"");
if(!g.live_preview){ao=ADGEAR.lang.safeUrlAppend(ao,"AG_RED=")
}r.add(an,ao)});Q.click_urls=r.toHash();Q.event_urls=g.interactions;
Q.config_vars=g.config_vars||{};Q.config_vars.isLive=!g.live_preview;
Q.config_vars.adunit_id=g.adunit_id;Q.config_vars.placement_id=g.placement_id;
Q.config_vars.campaign_id=g.campaign_id;Q.config_vars.width=Q.width;
Q.config_vars.height=Q.height;if(g.ad_choices_enabled){Q.config_vars.ad_choices_position=g.ad_choices_position
}y(g.variables,function(ao,an,am){if(an!=="payload"){Q.config_vars[an]=ao
}});Q.dynamic_vars=g.dynamic_vars||{};Q.dynamic_vars.geoip={};
y(g.geo,function(ao,an,am){Q.dynamic_vars.geoip[an]=ao
});if(window.ADGEAR_UDATA&&g.getImpressionHint("AGT_BUYER_ID")){Q.dynamic_vars.udata=ADGEAR_UDATA[g.getImpressionHint("AGT_BUYER_ID")]
}Q.impression_vars=g.impression_vars||{};
Q.impression_vars.instance_id=g.instance_id;
Q.impression_vars.client_ip=g.client_ip;y(g.impression_hints,function(ao,an,am){Q.impression_vars[an]=ao
});Q.debug=g.live_preview?true:false;var X=ADGEAR.CreativeData(Q);
var b=X.getField("width");var f=X.getField("height");
var F=s;var i=F.split("/");i.pop();var j=i.join("/")+"/";
var J=ADGEAR.html5.getAssetsRoot(g);var ag=g.getVariable("append_target")||false;
var al=d(g.getVariable("click_over"))||false;
var ah=g.getVariable("z_index")||g.getVariable("z-index")||g.getVariable("zIndex")||"10";
var z=g.getVariable("background_color")||"white";
var D=d(g.getVariable("center_banner"))||false;
var E=g.getVariable("expanded_path")||g.getVariable("expanded_src");
if(E&&!E.match(/^http/)){E=j+E}var P=d(g.getVariable("remove_iframe"))||false;
var t=d(g.getVariable("disable_scroll"))||false;
var C=d(g.getVariable("expanded_shading"))||false;
var n=g.getVariable("expanded_width")||95;
var a=g.getVariable("expanded_height")||25;
var v=g.getVariable("expand_type");var c=g.getVariable("expand_direction")||"BR";
var ai=d(g.getVariable("fullsize_iframe"))||false;
var p=d(g.getVariable("pushdown"))||false;
var U=ab(c,b,f,n,a);var h=af();var x=d(g.getVariable("show_ad_image"))||false;
var aa=null;var T="AdGear_ad"+g.adunit_id+"_state";
var u=g.getVariable("init_state")||"opened";
var S=d(g.getVariable("enable_saved_state"))||false;
if(S){u=O(T)||u}var B=(u!==null&&u==="closed")?true:false;
var N=g.getFileUrl("backup_image")||g.getVariable("backup_image")||"backup_image.jpg";
if(!N.match(/^http/)){N=j+N}var H=false;var A=d(g.getVariable("force_backup"))||false;
var o=g.getVariable("browser_condition");
if(o!==null&&!A){H=navigator.userAgent.toLowerCase().match(o.toLowerCase())?true:false
}if(A){H=true}var m=g.OOBClickTrack||null;
var l=J+"html/images/clicktag.png";function K(an,am){c=am
}function ae(ap){var at=ADGEAR.html5.getDoc(g);
var an=at.getElementById(L);var ar=at.getElementById("inner_container_"+L);
var aq=at.getElementById("iframe_"+L);if(v==="expand"||v==="billboard"){aq.style.width=(v==="billboard"?b:n)+"px";
aq.style.height=(v==="billboard"?f:a)+"px";
if(c==="C"){aq.style.top="0px";aq.style.left="0px";
aq.style.bottom="0px";aq.style.right="0px"
}}if(x){var ao=document.getElementById("adgear_show_ad_"+L);
an.removeChild(ao);if(P){}else{ar.style.display=""
}}if(typeof(mraid)!=="undefined"){mraid.setExpandProperties({width:Number((v==="billboard"?b:n)),height:Number((v==="billboard"?f:a)),useCustomClose:true,x:0,y:0});
mraid.expand()}if(p||v==="billboard"){an.style.width=(v==="billboard"?b:n)+"px";
an.style.height=(v==="billboard"?f:a)+"px"
}if(ADGEAR.html5.isDAP&&g.wlxRmAd){g.wlxRmAd.expand()
}if(ADGEAR.html5.isAdSense&&g.creativeToolset){if(!ap||!ap.expanding){g.creativeToolset.expandWindow()
}}if(ADGEAR.html5.isSafeFrame&&g.safeframe_api){var am=ak(c,(v==="billboard"?b:n),(v==="billboard"?f:a),(v==="billboard"?n:b),(v==="billboard"?a:f));
if(p&&g.safeframe_api.supports()["exp-push"]){am.push=true
}g.safeframe_api.expand(am)}Z((v==="billboard"?b:n),(v==="billboard"?f:a));
g.regInteraction("OPEN_LAYER");aj("opened");
V("expansion_tracker");if(t){at.getElementsByTagName("body")[0].style.overflow="hidden"
}if(ai){an.style.overflow=""}}function M(ao){var ar=ADGEAR.html5.getDoc(g);
var am=ar.getElementById(L);var aq=ar.getElementById("inner_container_"+L);
var ap=ar.getElementById("iframe_"+L);if(v==="expand"||v==="billboard"){if(!ai){ap.style.width=(v==="billboard"?n:b)+"px";
ap.style.height=(v==="billboard"?a:f)+"px"
}ap.style.top=!isNaN(U.top)?U.top+"px":U.top;
ap.style.left=!isNaN(U.left)?U.left+"px":U.left;
ap.style.bottom=!isNaN(U.bottom)?U.bottom+"px":U.bottom;
ap.style.right=!isNaN(U.right)?U.right+"px":U.right;
aq.style.top=!isNaN(U.top)?-(U.top)+"px":U.top;
aq.style.left=!isNaN(U.left)?-(U.left)+"px":U.left;
aq.style.bottom=!isNaN(U.bottom)?-(U.bottom)+"px":U.bottom;
aq.style.right=!isNaN(U.right)?-(U.right)+"px":U.right
}if(x){var an=document.createElement("img");
an.setAttribute("id","adgear_show_ad_"+L);
an.setAttribute("src",g.getFileUrl("show_ad"));
an.setAttribute("width",n);an.setAttribute("height",a);
an.style.width=n+"px";an.style.height=a+"px";
an.style.cursor="pointer";if(P){}else{aq.style.display="none"
}am.appendChild(an);k(an,"click",ae);am.style.width=n+"px";
am.style.height=a+"px"}if(typeof(mraid)!=="undefined"){mraid.close()
}if(p||v==="billboard"){am.style.width=(v==="billboard"?n:b)+"px";
am.style.height=(v==="billboard"?a:f)+"px"
}if(ADGEAR.html5.isDAP&&g.wlxRmAd){g.wlxRmAd.collapse()
}if(ADGEAR.html5.isAdSense&&g.creativeToolset){if(!ao||!ao.collapsing){g.creativeToolset.collapseWindow()
}}if(ADGEAR.html5.isSafeFrame&&g.safeframe_api){g.safeframe_api.collapse()
}Z((v==="billboard"?n:b),(v==="billboard"?a:f));
g.regInteraction("CLOSE_LAYER");aj("opened");
if(t){ar.getElementsByTagName("body")[0].style.overflow=""
}if(ai){am.style.overflow="hidden"}}var ad=ADGEAR.MsgBus("ADGEAR.html5",W);
ad.regListener("ad_ready",function(an,am){G("ad_ready called");
ad.sendMessage(an,"ld_ready",Q)});ad.regListener("ad_debug",function(an,am){G(am)
});ad.regListener("ad_expand",function(an,am){G("ad_expand called");
ae(am)});ad.regListener("ad_collapse",function(an,am){G("ad_collapse called");
M(am)});(function ac(){ad.regReceiver(function(aC){if(aC.source===q.getElementById("iframe_"+L).contentWindow){ad.receiveMessage(aC);
if(typeof(aC.data)==="string"&&aC.data.match(g.instance_id)){var aB=aC.data;
var az=null;var ay=null;try{az=aC.data.split("::")[1]
}catch(aA){}try{ay=aC.data.split("::")[2]
}catch(aA){}if(aB.match(/adgear_init/i)){aC.source.postMessage(JSON.stringify(ddata),"*")
}if(aB.match(/adgear_click/i)){agclick(az)
}if(aB.match(/adgear_interaction/i)){aginteraction(az,ay)
}if(aB.match(/adgear(|_billboard)_openlayer/i)){adgear_openlayer(az)
}if(aB.match(/adgear(|_billboard)_closelayer/i)){adgear_closelayer(az)
}}}});var ap=X.buildClickTrackerUrl("clickTAG")||X.buildClickTrackerUrl("clickTag")||X.buildClickTrackerUrl("clicktag")||X.buildClickTrackerUrl("click");
var an=ADGEAR.QueryString({});an.add("adserver","adgear");
if(ap){an.add("clickTag",ap)}F=ADGEAR.lang.safeUrlAppend(F,an.toString());
function ar(){if(m){var ay=g.env.eventQueue();
ay.dispatch(m)}}var av='if ("'+m+'" !== "null") {';
av+='var img = new Image(); img.src = "'+m+'"; }';
function au(aF){var aE=ADGEAR.html5.getWin(aF);
var aC=ab(aF);if(ADGEAR.html5.isDAP){var ay=aE["$WLXRmAd"];
if(ay){aF.wlxRmAd=ay;aF.wlxRmAd.init({width:aF.width,height:aF.height,offsetLeft:aC.left,offsetTop:aC.top,offsetRight:aC.right,offsetBottom:aC.bottom})
}}if(ADGEAR.html5.isAdSense){aF.creativeToolset=new CreativeToolset();
var aB=function(aG){switch(aG){case 0:return"TL";
case 1:return"TR";case 2:return"BR";case 3:return"BL"
}};var az=function(aH,aG,aI){K(aF,aB(aI));
ae({expanding:true})};var aD=function(){M({collapsing:true})
};aF.creativeToolset.enableExpansion({width:Number(aF.config.expandedWidth),height:Number(aF.config.expandedHeight),expansionCallback:az,collapseCallback:aD})
}if(ADGEAR.html5.isSafeFrame){aF.safeframe_api=window.$sf.ext;
var aA=function(aG,aH){};aF.safeframe_api.register(b,f,aA)
}}var am=document.createElement("div");am.setAttribute("id",L);
am.style.width=b+"px";am.style.height=f+"px";
am.style.position="relative";am.style.display="block";
am.style.visibility="visible";am.style.zIndex=ah;
if(D){am.style.margin="auto";am.style.textAlign="center"
}if(ai){am.style.overflow="hidden"}var at=document.createElement("iframe");
at.setAttribute("id","iframe_"+L);at.setAttribute("src",F);
at.setAttribute("width",ai?n:b);at.setAttribute("height",ai?a:f);
at.setAttribute("border","0");at.setAttribute("frameborder","0");
at.setAttribute("marginwidth","0");at.setAttribute("marginheight","0");
at.setAttribute("scrolling","no");at.setAttribute("seemless","seemless");
at.setAttribute("allowfullscreen","true");
at.setAttribute("webkitallowfullscreen","true");
at.setAttribute("mozallowfullscreen","true");
at.style.width=(ai?n:b)+"px";at.style.height=(ai?a:f)+"px";
at.style.border="0px";at.style.backgroundColor=z;
at.style.zIndex=ah;at.style.position="absolute";
at.style.top="0px";at.style.left="0px";if(!H&&v!==null){at.style.top=!isNaN(U.top)?U.top+"px":U.top;
at.style.left=!isNaN(U.left)?U.left+"px":U.left;
at.style.bottom=!isNaN(U.bottom)?U.bottom+"px":U.bottom;
at.style.right=!isNaN(U.right)?U.right+"px":U.right
}if(H||al){var aq=document.createElement("a");
aq.setAttribute("href",ap);aq.setAttribute("target","_blank");
aq.style.cursor="pointer";aq.style.position=(!H&&al)?"absolute":"relative";
aq.style.width=b+"px";aq.style.height=f+"px";
aq.style.zIndex=ah;aq.setAttribute("onclick",av);
var aw=document.createElement("img");aw.setAttribute("src",(!H&&al)?l:N);
aw.setAttribute("width",b);aw.setAttribute("height",f);
aw.setAttribute("border","0");aw.style.width=b+"px";
aw.style.height=f+"px";aw.style.border="0px";
aw.style.backgroundColor=(!H&&al)?"transparent":z;
aw.style.zIndex=ah;aq.appendChild(aw);am.appendChild(aq)
}if(!H&&v!==null){var ao=document.createElement("div");
ao.id="inner_container_"+L;ao.style.width=(v==="billboard"?b:n)+"px";
ao.style.height=(v==="billboard"?f:a)+"px";
ao.style.overflow="hidden";ao.style.position="absolute";
ao.style.top=!isNaN(U.top)?-(U.top)+"px":U.top;
ao.style.left=!isNaN(U.left)?-(U.left)+"px":U.left;
ao.style.bottom=!isNaN(U.bottom)?-(U.bottom)+"px":U.bottom;
ao.style.right=!isNaN(U.right)?-(U.right)+"px":U.right;
ao.appendChild(at);am.appendChild(ao);au(g)
}else{if(!H){am.appendChild(at)}}if(ag){document.querySelector(ag).appendChild(am)
}else{if(h){R(am)}else{var ax=document.createElement("div");
ax.appendChild(am);document.write(ax.innerHTML)
}}if(v!==null){if(B){M("init")}else{Z(b,f)
}}V("impressions_tracker");if(ADGEAR.adchoices){ADGEAR.adchoices.init(g)
}if(v!==null){I()}})()};ADGEAR.html5.loader=function(a){function b(i){if(i.getVariable("full_path")){return i.getVariable("full_path")
}var g=ADGEAR.html5.getAssetsRoot(i);var d=i.getVariable("main_directory");
var f=i.getVariable("campaign_id")||i.campaign_id;
var h=i.getVariable("path")||"";var c=g+"clients/"+encodeURIComponent(String(d))+"/"+encodeURIComponent(String(f))+"/"+h;
return c}ADGEAR.html5.basicLoader(a.getContainerId(),b(a),a)
};ADGEAR.lang.singleton("ADGEAR.comscore.vce",function(){var a;
function b(c){var d=document.createElement("div");
a=document.createElement("script");a.src=c.comscore_tracker;
d.appendChild(a);document.writeln(d.innerHTML)
}return{init:function(c){if(("comscore_tracker" in c)&&c.comscore_tracker!=null&&c.comscore_tracker!=""){b(c)
}}}});ADGEAR.lang.singleton("ADGEAR.nielsen.ocr",function(){var a;
function b(c){var d=document.createElement("div");
if(c.nielsen_masked_enabled!=null&&c.nielsen_masked_enabled===true){a=document.createElement("script")
}else{a=document.createElement("img");a.style.display="none"
}a.src=c.nielsen_tracker;d.appendChild(a);
document.writeln(d.innerHTML)}return{init:function(c){if(("nielsen_tracker" in c)&&c.nielsen_tracker!=null&&c.nielsen_tracker!=""){b(c)
}}}});ADGEAR.lang.singleton("ADGEAR.moat",function(){var a;
function b(g){var d=!!(top.location.href);
var h=(window!=top);var f=null;if(h&&d){f=top.document.getElementById(g)
}if(f===null){f=document.getElementById(g)
}return f}function c(g,f){var d;var h=document.createElement("div");
a=document.createElement("script");a.src=g.moat_viewability_tracker;
h.appendChild(a);if(f){d=b(f)}if(d){d.appendChild(a)
}else{document.writeln(h.innerHTML)}}return{init:function(f,d){if(("moat_viewability_tracker" in f)&&f.moat_viewability_tracker!=null&&f.moat_viewability_tracker!=""){c(f,d)
}}}});ADGEAR.render(function(ddata){var global_evaler=window.execScript||window.eval||eval;
(function(instance){var types=[["clicks","getClickUrl"],["interactions","getInteractionUrl"],["files","getFileUrl"]];
for(var i=0;i<types.length;i++){var type_name=types[i][0];
var resolver_name=types[i][1];if(!instance[type_name]){continue
}for(var name in instance[type_name]){var url=(instance[resolver_name])(name);
if(typeof url==="string"){instance[type_name][name]=url;
ADGEAR.lang.log("Warning - Legacy support: pre-resolved AdUnit URL: adgear_instance['"+type_name+"']['"+name+"'] = "+url)
}}}})(ddata);window.adgear_instance=ddata;
global_evaler(ddata.prepThirdParty(ADGEAR.vendor.Base64.decode(ddata.getVariable("payload"))));
ADGEAR.comscore.vce.init(ddata);ADGEAR.nielsen.ocr.init(ddata);
ADGEAR.moat.init(ddata)},{template:"Standard::Javascript",instance_id:"210a9b02-ee8d-11e6-8c84-0cc47a6f00ae",env:{delivery:{https:{hostname:"dcs.adgear.com"},http:{hostname:"dcs.adgear.com"}},assets:{https:{hostname:"acs.adgear.com",bucket:""},http:{hostname:"cdn.adgear.com",bucket:"acs"}},name:"cossette_production"},live_preview:false,tilings:{},campaign_id:2492,placement_id:1646311,adunit_id:61888,format_width:1,format_height:1,natural_width:null,natural_height:null,impressions_count:166379494,clicks_count:0,impression_tracker:"",click_tracker:"\/clicks\/thirdparty\/b=VFhOPTIxMGE5YjAyLWVlOGQtMTFlNi04Yzg0LTBjYzQ3YTZmMDBhZQ**\/as=59\/p=1646311\/a=61888",clicks:{ },interactions:{ },files:{},geo:{ "country_code": "CA", "country_name": "Canada", "region": "AB", "city": "Edmonton", "postal_code": "T6G", "isp": "University of Alberta", "netspeed": "Cable\/DSL", "organization": "University of Alberta", "longitude": "-113.532402", "latitude": "53.521000" },viewport_detect:false,impression_hints:{ "AG_R": "26843616", "page_name": "search>products>search result 1", "product": "09903014|00290783|00251809", "price": "159.00|24.99|179.00", "province": "ca", "language": "en", "page_url": "http:\/\/www.ikea.com\/ca\/en\/search\/?query=books", "referrer_url": "http:\/\/www.ikea.com\/ca\/en\/search\/?query=regional+books", "transaction_timestamp": "Wed Feb 08 2017 23:00:24 GMT-0800 (Pacific Standard Time)" },variables:{payload:"aWYodHlwZW9mKEFER0VBUl9FTlYpID09PSAidW5kZWZpbmVkIikgew0KICBBREdFQVJfRU5WID0gQURHRUFSLmVudnMuY29uZmlnKGFkZ2Vhcl9pbnN0YW5jZS5lbnYuY29uZmlnKCkpOw0KfQ0KQURHRUFSLmxhbmcubmFtZXNwYWNlKCJBREdFQVIudGFncyIpOw0KQURHRUFSLmxhbmcuc2luZ2xldG9uKCJBREdFQVIudGFncy5kYXRhIiwgZnVuY3Rpb24oKSB7DQogIHJldHVybiB7DQoJaW5pdDogZnVuY3Rpb24oKSB7DQogIAkvKiBuby1vcCAqLw0KCX0sDQoJZW1iZWQ6IGZ1bmN0aW9uKHByb2ZpbGUpIHsNCiAgCXRyeSB7DQogICAgCXZhciBpZnJhbWU7DQogICAgCXZhciBjaGlwID0gU3RyaW5nKHByb2ZpbGVbImNoaXBfa2V5Il0pOw0KICAgIAl2YXIgYXJncyA9IEFER0VBUi5RdWVyeVN0cmluZyh7fSk7DQogICAgCS8qIElmIGFscmVhZHkgc3RhbXBlZCBpbiB0aGUgRE9NLCBkb24ndCBkbyBpdCBhZ2FpbjogKi8NCiAgICAJaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaXApICE9IG51bGwpDQogICAgICAJcmV0dXJuIGZhbHNlOw0KICAgIAkvKiBJZiBwYXJhbXMgcHJvdmlkZWQsIGFkZCBhbGwgdG8gcXVlcnlzdHJpbmc6ICovDQogICAgCWlmICgoInBhcmFtcyIgaW4gcHJvZmlsZSkgJiYgKHByb2ZpbGVbInBhcmFtcyJdICE9IG51bGwpKSB7DQogICAgICAJZm9yICh2YXIgayBpbiBwcm9maWxlWyJwYXJhbXMiXSkgew0KICAgICAgICAJaWYgKHByb2ZpbGVbInBhcmFtcyJdLmhhc093blByb3BlcnR5KGspKQ0KICAgICAgICAgICAgICBhcmdzLmFkZChTdHJpbmcoayksIFN0cmluZyhwcm9maWxlWyJwYXJhbXMiXVtrXSkpOw0KICAgICAgCX0NCiAgICAJfQ0KIA0KICAgIAlpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpZnJhbWUiKTsNCiAgICAgICAgaWZyYW1lLm5hbWUgPSBjaGlwOw0KICAgIAlpZnJhbWUuaWQgPSBjaGlwOw0KICAgICAgICBpZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICJoaWRkZW4iOw0KICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSAiMXB4IjsNCiAgICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICIxcHgiOw0KICAgICAgICBpZnJhbWUuc3R5bGUucG9zaXRpb24gPSAiYWJzb2x1dGUiOw0KICAgICAgICBpZnJhbWUuc3R5bGUudG9wID0gIi0xcHgiOw0KICAgICAgICBpZnJhbWUuc3R5bGUubGVmdCA9ICItMXB4IjsNCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImJvZHkiKVswXS5hcHBlbmRDaGlsZChpZnJhbWUpOw0KICAgICAgICB3aW5kb3cuZnJhbWVzW2NoaXBdLmxvY2F0aW9uLnJlcGxhY2UoQURHRUFSX0VOVi5hc3NldFVybCgiL2RhdGEvIiArIFN0cmluZyhwcm9maWxlWyJpZCJdKSArICIuaHRtbCIsDQogICAgICAgIAl7ICJjYWNoZWJ1c3QiOiB0cnVlLCAicXVlcnlzdHJpbmciOiBhcmdzIH0pKTsNCiAgCX0gY2F0Y2goZSkgew0KICAgIAlyZXR1cm4gZmFsc2U7DQogIAl9Ow0KICAJcmV0dXJuIHRydWU7DQoJfQ0KICB9Ow0KfSk7DQpBREdFQVIubGFuZy5zaW5nbGV0b24oIkFER0VBUi50YWdzLmNvbnZlcnNpb24iLCBmdW5jdGlvbigpIHsNCiAgcmV0dXJuIHsNCglpbml0OiBmdW5jdGlvbigpIHsNCiAgCS8qIG5vLW9wICovDQoJfSwNCiANCgllbWJlZDogZnVuY3Rpb24oY29udmVyc2lvbikgew0KICAJdHJ5IHsNCiAgICAJdmFyIGlmcmFtZTsNCiAgICAJdmFyIGNoaXAgPSBTdHJpbmcoY29udmVyc2lvblsiY2hpcF9rZXkiXSk7DQogICAgCXZhciBhcmdzID0gQURHRUFSLlF1ZXJ5U3RyaW5nKHt9KTsNCiANCiAgICAJLyogSWYgYWxyZWFkeSBzdGFtcGVkIGluIHRoZSBET00sIGRvbid0IGRvIGl0IGFnYWluOiAqLw0KICAgIAlpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpcCkgIT0gbnVsbCkNCiAgICAgIAlyZXR1cm4gZmFsc2U7DQogDQogICAgCS8qIElmIHBhcmFtcyBwcm92aWRlZCwgYWRkIGFsbCB0byBxdWVyeXN0cmluZzogKi8NCiAgICAJaWYgKCgicGFyYW1zIiBpbiBjb252ZXJzaW9uKSAmJiAoY29udmVyc2lvblsicGFyYW1zIl0gIT0gbnVsbCkpIHsNCiAgICAgIAlmb3IgKHZhciBrIGluIGNvbnZlcnNpb25bInBhcmFtcyJdKSB7DQogICAgICAgIAlpZiAoY29udmVyc2lvblsicGFyYW1zIl0uaGFzT3duUHJvcGVydHkoaykpDQogICAgICAgICAgICAgIGFyZ3MuYWRkKFN0cmluZyhrKSwgU3RyaW5nKGNvbnZlcnNpb25bInBhcmFtcyJdW2tdKSk7DQogICAgICAJfQ0KICAgIAl9DQogICAgCS8qIElmIHJldmVudWUgcHJvdmlkZWQsIGZlZWQgaXQgdG8gdGhlIGRhdGEgdGFnIElGUkFNRTogKi8NCiAgICAJaWYgKCgicmV2ZW51ZSIgaW4gY29udmVyc2lvbikgJiYgKGNvbnZlcnNpb25bInJldmVudWUiXSAhPSBudWxsKSkNCiAgICAgICAgICBhcmdzLmFkZCgiQUdfUkVWIiwgU3RyaW5nKGNvbnZlcnNpb25bInJldmVudWUiXSkpOw0KICAgIAlpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpZnJhbWUiKTsNCiAgICAgICAgaWZyYW1lLm5hbWUgPSBjaGlwOw0KICAgIAlpZnJhbWUuaWQgPSBjaGlwOw0KICAgICAgICBpZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICJoaWRkZW4iOw0KICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSAiMXB4IjsNCiAgICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICIxcHgiOw0KICAgICAgICAvL2lmcmFtZS5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsNCiAgICAgICAgaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gImFic29sdXRlIjsNCiAgICAgICAgaWZyYW1lLnN0eWxlLnRvcCA9ICItMXB4IjsNCiAgICAgICAgaWZyYW1lLnN0eWxlLmxlZnQgPSAiLTFweCI7DQogICAgCWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJib2R5IilbMF0uYXBwZW5kQ2hpbGQoaWZyYW1lKTsNCiAgICAgICAgd2luZG93LmZyYW1lc1tjaGlwXS5sb2NhdGlvbi5yZXBsYWNlKEFER0VBUl9FTlYuYXNzZXRVcmwoIi9jb252ZXJzaW9ucy8iICsgU3RyaW5nKGNvbnZlcnNpb25bImlkIl0pICsgIi5odG1sIiwNCiAgICAgICAgCXsgImNhY2hlYnVzdCI6IHRydWUsICJxdWVyeXN0cmluZyI6IGFyZ3MgfSkpOw0KICAJfSBjYXRjaChlKSB7DQogICAgCXJldHVybiBmYWxzZTsNCiAgCX07DQogIAlyZXR1cm4gdHJ1ZTsNCgl9DQogIH07DQp9KTsNCiANCi8vIE5vdGUgdXNlIHRhZ3MuY29udmVyc2lvbi5lbWJlZCBmb3IgY29udmVyc2lvbiB0YWdzLCB0YWdzLmRhdGEuZW1iZWQgZm9yIERhdGEgUHJvZmlsZXMNCi8vIEVudGVyIHRoZSDigJxpZOKAnSBhbmQg4oCcY2hpcOKAnSBrZXkgZnJvbSB0aGUgY29udmVyc2lvbiB0YWcNCkFER0VBUi50YWdzLmRhdGEuZW1iZWQoeyAiaWQiOiAiMTY5NyIsICJjaGlwX2tleSI6ICJkM2QyMmQyMDY1NGUwMTMzNmMyNzAwMjRlODdhMzBjMiIgfSk7DQoNCg0KLy8gQWRHZWFyIFRyYWRlciBVbml2ZXJzYWwgc2VnbWVudCAvLw0KX19BR0RBVEEgPSB7DQp9Ow0KDQp2YXIgX19BR19TQ1JJUFRfVEFHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7DQpfX0FHX1NDUklQVF9UQUcuc2V0QXR0cmlidXRlKCJ0eXBlIiwgInRleHQvamF2YXNjcmlwdCIpOw0KX19BR19TQ1JJUFRfVEFHLnNldEF0dHJpYnV0ZSgic3JjIiwgIi8vY2RuLmFkZ3J4LmNvbS91c2VnbWVudHMvM1VTN0JRYUo3WE1pczhZYlZ5RDVEUndJTDFDQjM0TTFRa21LMzQ1MFVfYz0vMTE1LmpzIik7DQpfX0FHX1NDUklQVF9UQUcuc2V0QXR0cmlidXRlKCJhc3luYyIsICJ0cnVlIik7DQpkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiYm9keSIpWzBdLmFwcGVuZENoaWxkKF9fQUdfU0NSSVBUX1RBRyk7"},declared_click_urls:{},rtb_data:{ },comscore_tracker:null,nielsen_tracker:null,nielsen_masked_enabled:false,ad_choices_enabled:false,ad_choices_position:"TR",moat_viewability_tracker:null,client_ip:"142.244.63.135"});