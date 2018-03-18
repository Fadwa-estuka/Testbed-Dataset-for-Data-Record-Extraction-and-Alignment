//
// vendor/omniture/ar_s_code.js
//
/* ar_s_code_20150812
/* Specify the Report Suite ID(s) to track here */
var s_account = "rdallrecipesdev";
if (enviromentOmnitureId) {
    s_account = enviromentOmnitureId;
}
var s = s_gi(s_account);

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */

/* E-commerce Config */
s.currencyCode = "USD";
/* Link Tracking Config */
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters = "javascript:,allrecipes.com,build.allrecipes.com,.allrecipes.com,.allrecipes.corp";
s.linkLeaveQueryString = false;
s.linkTrackVars = "channel,server,prop1,prop5,prop6,prop8,prop12,prop13,prop14,prop17,prop18,prop19,prop20,prop22,prop23,prop24,prop32,prop33,prop34,prop37,prop38,prop39,prop40,prop41,prop42,prop49,prop50,eVar1,eVar4,eVar6,eVar7,eVar8,eVar9,eVar10,eVar11,eVar14,eVar15,eVar16,eVar21,eVar22,eVar23,eVar24,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar49,list1,list2,list3,events";
s.linkTrackEvents = "event9,event10,event11,event12,event15,event16,event17";

/* Plugin Config */
s.usePlugins = true;
function s_doPlugins(s) {
    // set to original values
    s.linkTrackVars = "channel,server,prop1,prop5,prop6,prop8,prop12,prop13,prop14,prop17,prop18,prop19,prop20,prop22,prop23,prop24,prop32,prop33,prop34,prop37,prop38,prop39,prop40,prop41,prop42,prop49,prop50,eVar1,eVar4,eVar6,eVar7,eVar8,eVar9,eVar10,eVar11,eVar14,eVar15,eVar16,eVar21,eVar22,eVar23,eVar24,eVar25,eVar26,eVar27,eVar28,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar49,list1,list2,list3,events";
    s.linkTrackEvents = "event9,event10,event11,event12,event15,event16,event17";
    
    // set versions
    s.prop50=""+s.version+"|next 20150812";

    // set event1 for all page views
    if(s.callType()=='t') {
        s.events=s.apl(s.events,'event1',',',1);
    }
    
    // event17
    if(s.events!=undefined && s.events.indexOf('event12')>-1){
        s.events=s.apl(s.events,'event17',',',1);
    }
    
    // event23
    if(s.events!=undefined && s.events.indexOf('event23')!=-1){
        s.linkTrackEvents=s.apl(s.linkTrackEvents,'event23',',',1);
        s.linkTrackVars=s.apl(s.linkTrackVars,'eVar19',',',1);
        s.linkTrackVars=s.apl(s.linkTrackVars,'eVar20',',',1);
    }
    
    //prop33
    s.prop33='undefined';
    try {   s.prop33=dataLayer.user[0].profile[0].profileInfo.profileId; }
    catch(err) {}
    
    //prop49 & eVar49
    s.temp1='undefined';
    s.temp2='undefined';
    s.temp3='undefined';
    s.prop49='undefined';
    s.eVar49='D=c49';
    try {   s.temp1=dataLayer.user[0].segment.loginStatus; }
    catch(err) {}
    try {   s.temp2=dataLayer.user[0].profile[0].profileInfo.loginType; }
    catch(err) {}
    try {   s.temp3=dataLayer.user[0].segment.visitorType; }
    catch(err) {}
    try {
        s.prop49=''+s.temp1+'|'+s.temp2+'|'+s.temp3
        s.prop49=s.prop49.toLowerCase();
    }
    catch(err) {}

    
}
s.doPlugins = s_doPlugins;

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "readersdigest";
s.trackingServer = "metric.allrecipes.com";
s.trackingServerSecure = "metrics.allrecipes.com";
s.dc = 122;

/*
 * Plugin: callType v2.4 - determine the type of call in progress
 */
s.callType=new Function("var s=this,U,e=s.eo,l=s.linkObject,t=s.linkT"
+"ype,o=e||l,h=o?o.href||o.download:0,R=t||(typeof s.lt=='function'&&"
+"typeof h=='string'?s.lt(h):'');if(!R&&e===U&&t===U&&s.linkName===U&"
+"&l==U&&h===0)R='t';if(!R&&h===0&&!(t===0))R='o';return R||'+'");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.2.1
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function AppMeasurement(){var s=this;s.version="1.2.1";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.fb;k||(k=null);var m=w,i,n;try{i=m.parent;for(n=m.location;i&&i.location&&n&&""+i.location!=""+n&&m.location&&""+i.location!=""+m.location&&i.location.host==n.host;)m=i,i=m.parent}catch(p){}s.Sa=function(s){try{console.log(s)}catch(a){}};s.ja=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<
0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Ja=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.ca&&
!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.ca=c>0?b.substring(c):b}return s.ca};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Ja(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&d!="NONE"&&((f=a!=
""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.C=[];s.B=function(b,a,c){if(s.da)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.cb,g=["webkitvisibilitychange","visibilitychange"];if(!f)f=s.d.eb;
if(f&&f=="prerender"){if(!s.M){s.M=1;for(c=0;c<g.length;c++)s.d.addEventListener(g[c],function(){var b=s.d.cb;if(!b)b=s.d.eb;if(b=="visible")s.M=0,s.delayReady()})}e=1;d=0}else c||s.q("_d")&&(e=1);e&&(s.C.push({m:b,a:a,t:d}),s.M||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.q("_d")&&(a=1);s.C.length>0;){c=s.C.shift();if(a&&!c.t&&c.t>b){s.C.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.da=1;s[c.m].apply(s,c.a);s.da=
0}};s.setAccount=s.sa=function(b){var a,c;if(!s.B("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.W=function(b,a,c,e,d){var f="",g,j,w,q,i=0;b=="contextData"&&(b="c");if(a){for(g in a)if(!Object.prototype[g]&&(!d||g.substring(0,d.length)==d)&&a[g]&&(!c||c.indexOf(","+(e?e+".":"")+g+",")>=0)){w=!1;if(i)for(j=0;j<i.length;j++)g.substring(0,
i[j].length)==i[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[g],d&&(g=g.substring(d.length)),g.length>0))if(w=g.indexOf("."),w>0)j=g.substring(0,w),w=(d?d:"")+j+".",i||(i=[]),i.push(w),f+=s.W(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=g.substring(0,4),q=g.substring(4),g){case "transactionID":g="xact";break;case "channel":g="ch";break;case "campaign":g="v0";break;default:s.ja(q)&&(w=="prop"?g="c"+q:w=="eVar"?g="v"+
q:w=="list"?g="l"+q:w=="hier"&&(g="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(g)+"="+s.escape(j)}}f!=""&&(f+="&."+b)}return f};s.La=function(){var b="",a,c,e,d,f,g,j,w,i="",k="",m=c="";if(s.lightProfileID)a=s.P,(i=s.lightTrackVars)&&(i=","+i+","+s.ma.join(",")+",");else{a=s.e;if(s.pe||s.linkType)if(i=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))i=s[c].pb,k=s[c].ob;i&&(i=","+i+","+s.H.join(",")+",");k&&(k=","+k+",",i&&(i+=",events,"));s.events2&&
(m+=(m!=""?",":"")+s.events2)}for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);g=d.substring(4);!f&&d=="events"&&m&&(f=m,m="");if(f&&(!i||i.indexOf(","+d+",")>=0)){switch(d){case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d="aid";break;case "audienceManagerVisitorID":d="aamid";break;case "audienceManagerLocationHint":d="aamlh";break;case "pageURL":d="g";if(f.length>
255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d=
"vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";break;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "plugins":d="p";break;case "events":m&&(f+=(f!=""?",":"")+m);if(k){g=
f.split(",");f="";for(e=0;e<g.length;e++)j=g[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),k.indexOf(","+j+",")>=0&&(f+=(f?",":"")+g[e])}break;case "events2":f="";break;case "contextData":b+=s.W("c",s[d],i,d);f="";break;case "lightProfileID":d="mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d=
"mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.W("mts",s[d],i,d));f="";break;default:s.ja(g)&&(e=="prop"?d="c"+g:e=="eVar"?d="v"+g:e=="list"?d="l"+g:e=="hier"&&(d="h"+g,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&(b+=s.g)}return b};s.u=function(s){var a=s.tagName;if(""+s.nb!="undefined"||""+s.Xa!="undefined"&&(""+s.Xa).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||
a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.fa=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.D=function(b){var a=s.u(b),c,e,d="",f=0;if(a){c=b.protocol;
e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.fa(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.kb=function(b){for(var a=s.u(b),c=s.D(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:
b.parentNode)a=s.u(b),c=s.D(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.Va=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,g;s.Q=1;if(!c)s.Q=0,c=s.j;if(c){b=s.u(c);for(a=s.D(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.u(c),a=s.D(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.Q=1;!d&&c&&(d=s.fa(c));
d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var i=0,k=0,m;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");g=j.indexOf("#");f>=0?g>=0&&g<f&&(f=g):f=g;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");for(g=0;g<f.length;g++)(m=f[g])&&j.substring(j.length-(m.length+1))=="."+m&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.ia(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;
f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),i=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(g=0;g<f.length;g++)m=f[g],j.indexOf(m)>=0&&(k=1);k?i&&(e="e"):i||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+
d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ma=function(){var b=s.Q,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,g,j,w;d=0;if(f)for(g=0;g<f.length;g++)j=f[g].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),
a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(g=0;g<e.length;g++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[g]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+"&u=0"),a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";g=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),g=1);for(j in a)!Object.prototype[j]&&g>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+
"="+s.escape(j),g--);s.cookieWrite("s_sq",d)}}}return b};s.Na=function(){if(!s.bb){var b=new Date,a=m.location,c,e,d,f=d=e=c="",g="",w="",i="1.2",k=s.cookieWrite("s_cc","true",0)?"Y":"N",n="",p="",o=0;if(b.setUTCDate&&(i="1.3",o.toPrecision&&(i="1.5",c=[],c.forEach))){i="1.6";d=0;e={};try{d=new Iterator(e),d.next&&(i="1.7",c.reduce&&(i="1.8",i.trim&&(i="1.8.1",Date.parse&&(i="1.8.2",Object.create&&(i="1.8.5")))))}catch(r){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;w=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;b=navigator.plugins;try{s.b.addBehavior("#default#homePage"),n=s.b.lb(a)?"Y":"N"}catch(t){}try{s.b.addBehavior("#default#clientCaps"),p=s.b.connectionType}catch(u){}if(b)for(;o<b.length&&o<30;){if(a=b[o].name)a=a.substring(0,100)+";",f.indexOf(a)<0&&(f+=a);o++}s.resolution=c;s.colorDepth=e;s.javascriptVersion=i;s.javaEnabled=d;s.cookiesEnabled=
k;s.browserWidth=g;s.browserHeight=w;s.connectionType=p;s.homepage=n;s.plugins=f;s.bb=1}};s.G={};s.loadModule=function(b,a){var c=s.G[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.G[b]=s[b]=c;c.ua=function(){return c.wa};c.xa=function(a){if(c.wa=a)s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.ua,set:c.xa}):c._olc=1}catch(e){c._olc=1}}a&&(s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c))};
s.q=function(b){var a,c;for(a in s.G)if(!Object.prototype[a]&&(c=s.G[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.Qa=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};s.I=function(b,a){var c,e,d,f,g,w;for(c=0;c<2;c++){e=c>0?
s.$:s.e;for(d=0;d<e.length;d++)if(f=e[d],(g=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])g[w]||(g[w]=s[f][w]);s[f]=g}}};s.qa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.$:s.e;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Ia=function(s){var a,c,e,d,f,g=0,w,i="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(w=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&
(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?g=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(g=",p,ei,"),g&&w)))){if((s=w.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&g.indexOf(","+d.substring(0,c)+",")>=0?i+=(i?"&":"")+d:k+=(k?"&":"")+d;i&&k?w=i+"&"+k:k=""}c=253-(w.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):"")+"?"+w}return s};s.za=!1;s.Z=!1;s.ib=function(b){s.marketingCloudVisitorID=
b;s.Z=!0;s.z()};s.J=!1;s.X=!1;s.ta=function(b){s.analyticsVisitorID=b;s.X=!0;s.z()};s.ya=!1;s.Y=!1;s.hb=function(b){s.audienceManagerVisitorID=b;if(s.audienceManagerVisitorID&&s.visitor.getAudienceManagerLocationHint)s.audienceManagerLocationHint=s.visitor.getAudienceManagerLocationHint();s.Y=!0;s.z()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.J&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.ta]),!s.analyticsVisitorID))s.J=
!0;if(s.za&&!s.Z&&!s.marketingCloudVisitorID||s.J&&!s.X&&!s.analyticsVisitorID||s.ya&&!s.Y&&!s.audienceManagerVisitorID)b=!1}return b};s.k=k;s.l=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Da=b;e.Ca=a;e.Aa=c;if(s.k==k)s.k=[];s.k.push(e);if(s.l==0)s.l=setInterval(s.z,100)};s.z=function(){var b;if(s.isReadyToTrack()){if(s.l)clearInterval(s.l),s.l=0;if(s.k!=k)for(;s.k.length>0;)b=s.k.shift(),b.Ca.apply(b.Da,b.Aa)}};s.va=function(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e=
{},b)e[c]=b[c];d={};s.qa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Ka=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=function(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+
Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());s.q("_s");if(!s.B("track",arguments)){if(!s.va(b)){a&&s.I(a);b&&(c={},s.qa(c,0),s.I(b));if(s.Qa()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Ka();s.Va();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/
1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.ra)s.referrer=m.document.referrer,s.ra=1;s.referrer=s.Ia(s.referrer);s.q("_g")}s.Ma()&&!s.abort&&(s.Na(),f+=s.La(),s.Ua(d,f));s.abort||s.q("_t")}}b&&s.I(c,1)}s.timestamp=s.linkObject=s.j=s.linkURL=s.linkName=s.linkType=w.mb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.p=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=
a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.e.length;b++)if(a=s.e[b],a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.Ua=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=
s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.gb(0,e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+"1/JS-"+s.version+(s.ab?"T":"")+"/"+b+"?AQB=1&ndh=1&"+a+"&AQE=1";s.Pa&&(c=c.substring(0,2047));s.Ga(c);s.N()};s.Ga=function(b){s.c||s.Oa();s.c.push(b);s.O=s.r();s.pa()};s.Oa=function(){s.c=
s.Ra();if(!s.c)s.c=[]};s.Ra=function(){var b,a;if(s.T()){try{(a=w.localStorage.getItem(s.R()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.T=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.ga=function(){var b=0;if(s.c)b=s.c.length;s.v&&b++;return b};s.N=function(){if(!s.v)if(s.ha=k,s.S)s.O>s.F&&s.na(s.c),s.V(500);else{var b=s.Ba();if(b>0)s.V(b);else if(b=s.ea())s.v=1,s.Ta(b),s.Ya(b)}};s.V=function(b){if(!s.ha)b||(b=0),s.ha=setTimeout(s.N,b)};s.Ba=
function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.r()-s.la;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.ea=function(){if(s.c.length>0)return s.c.shift()};s.Ta=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+s.unescape(b[c]);s.Sa(a)}};s.Ya=function(b){var a;if(!a)a=new Image,a.alt="";a.ba=function(){try{if(s.U)clearTimeout(s.U),s.U=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=
0}catch(b){}};a.onload=a.$a=function(){a.ba();s.Fa();s.K();s.v=0;s.N()};a.onabort=a.onerror=a.Ha=function(){a.ba();(s.trackOffline||s.S)&&s.v&&s.c.unshift(s.Ea);s.v=0;s.O>s.F&&s.na(s.c);s.K();s.V(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.$a():a.Ha())};s.la=s.r();a.src=b;if(a.abort)s.U=setTimeout(a.abort,5E3);s.Ea=b;s.jb=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.A||s.p){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.L=setTimeout(s.K,
s.forcedLinkTrackingTimeout)}};s.Fa=function(){if(s.T()&&!(s.ka>s.F))try{w.localStorage.removeItem(s.R()),s.ka=s.r()}catch(b){}};s.na=function(b){if(s.T()){s.pa();try{w.localStorage.setItem(s.R(),w.JSON.stringify(b)),s.F=s.r()}catch(a){}}};s.pa=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.c.length>s.offlineLimit;)s.ea()}};s.forceOffline=function(){s.S=!0};s.forceOnline=function(){s.S=!1};s.R=function(){return s.offlineFilename+"-"+s.visitorNamespace+
s.account};s.r=function(){return(new Date).getTime()};s.ia=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,c,e;s.ab=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.I(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!=
"function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+
1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.H=["timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID","analyticsVisitorID","audienceManagerVisitorID","audienceManagerLocationHint","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName",
"pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.e=s.H.concat(["purchaseID","variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","tnt"]);s.ma=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds",
"lightIncrementBy"];s.P=s.ma.slice(0);s.$=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling","s.visitorSamplingGroup","linkObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking",
"forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay"];for(i=0;i<=75;i++)s.e.push("prop"+i),s.P.push("prop"+i),s.e.push("eVar"+i),s.P.push("eVar"+i),i<6&&s.e.push("hier"+i),i<4&&s.e.push("list"+i);i=["resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","plugins"];s.e=s.e.concat(i);s.H=s.H.concat(i);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=
0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.la=0;s.O=0;s.F=0;s.ka=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.Pa=navigator.appName=="Microsoft Internet Explorer"}catch(o){}s.K=function(){if(s.L)w.clearTimeout(s.L),s.L=k;s.i&&s.A&&s.i.dispatchEvent(s.A);if(s.p)if(typeof s.p=="function")s.p();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.A=s.p=0};s.oa=function(){s.b=
s.d.body;if(s.b)if(s.o=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b.Wa)){if(s.aa)if(s.useForcedLinkTracking)s.b.removeEventListener("click",s.o,!1);else{s.b.removeEventListener("click",s.o,!0);s.aa=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.j=b.srcElement?b.srcElement:b.target;try{if(s.j&&(s.j.tagName||s.j.parentElement||s.j.parentNode))if(e=s.ga(),s.track(),e<s.ga()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!=
"A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.ia(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(g){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(i){a=0}if(a)a.Wa=1,b.stopPropagation(),b.Za&&b.Za(),b.preventDefault(),
s.i=b.target,s.A=a}}}}catch(k){}s.j=0}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.o);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.aa=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.o,!0);s.b.addEventListener("click",s.o,!1)}}else setTimeout(s.oa,30)};s.oa()}
function s_gi(s){var w,k=window.s_c_il,m,i=s.split(","),n,p,o=0;if(k)for(m=0;!o&&m<k.length;){w=k[m];if(w._c=="s_c"&&w.account)if(w.account==s)o=1;else{if(!w.allAccounts)w.allAccounts=w.account.split(",");for(n=0;n<i.length;n++)for(p=0;p<w.allAccounts.length;p++)i[n]==w.allAccounts[p]&&(o=1)}m++}o||(w=new AppMeasurement);w.setAccount(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var s=window,w=s.s_giq,k,m,i;if(w)for(k=0;k<w.length;k++)m=w[k],i=s_gi(m.oun),i.setAccount(m.un),i.setTagContainer(m.tagContainerName);s.s_giq=0}s_pgicq();

//
// source/js/analytics/client-analytics.js
//
var ClientAnalytics=function(a){var h=this;function g(){if(!window.loadTime){var j=new Date().getTime(),k=window.performance?performance.timing:0,i=k?k.requestStart:window.inHeadTS||0;
window.loadTime=i?(j-i):""}return window.loadTime}function b(){var l=window,i=document,j=i.documentElement,k=i.getElementsByTagName("body")[0];
return l.innerHeight||j.clientHeight||k.clientHeight}function c(){var l=window,i=document,j=i.documentElement,k=i.getElementsByTagName("body")[0];
return l.innerWidth||j.clientWidth||k.clientWidth}function f(){var j;var i=new Date();var k=i.getHours();if(k==12){j=k+" PM"}else{if(k>12){j=(k-12)+" PM"
}else{j=k+" AM"}}return j}function d(){var i="";switch(new Date().getDay()){case 0:i="Sun";break;case 1:i="Mon";break;case 2:i="Tue";
break;case 3:i="Wed";break;case 4:i="Thu";break;case 5:i="Fri";break;case 6:i="Sat";break}return i}var e=function(){if(typeof Krux==="undefined"){return""
}var i="";i=i.concat(";kuid=").concat(Krux.user);return i};this.ExtendDataLayerWithClientAvailableProperties=function(){if(a.page&&a.page.pageInfo){a.page.pageInfo.hourOfDay=f();
a.page.pageInfo.dayOfWeek=d();a.page.pageInfo.screenWidth=window.screen.width;a.page.pageInfo.screenHeight=window.screen.height;
a.page.pageInfo.browserWidth=c();a.page.pageInfo.browserHeight=b();if(window.orientation&&(window.orientation===90||window.orientation===-90)){a.page.pageInfo.viewOrientation="Landscape"
}else{a.page.pageInfo.viewOrientation="Portrait"}Object.defineProperty(a.page.pageInfo,"pageLoadTime",{get:function(){return g()
}});if(window.adService&&window.adService.unitValues){var i=window.adService.mobileAds?"ar.mdp.mob":"ar.mdp.com";var k=window.adService.unitValues.channel;
var l=window.adService.unitValues.parent;var j=i+"/"+k+"/"+l;a.page.category.adZone=j}}if(a.page&&a.page.pageInfo&&a.page.category&&a.page.category.adKeys){a.page.category.adKeys=a.page.category.adKeys.concat(e())
}};h.ExtendDataLayerWithClientAvailableProperties()};
//
// source/js/analytics/comscore-shim.js
//
var ComscoreShim=function(a,e){var d={};var c=function(g){return g in d};var b=function(g){return _.contains(["infinite scroll down","private profile","recipe review detail nav","public profile","recipe photos"],g)
};var f=function(k,h,i,j,l){if((!b(h)||c(i))&&!j){return}d[i]=true;if(typeof window.COMSCORE!=="undefined"){var g={c1:"2",c2:"6036305"};
if(l!=null){g.c4=l}window.COMSCORE.beacon(g)}};e.listen("An.Event.ToBe.Tracked","ComscoreShim.SendBeacon",f)};
//
// source/js/analytics/omniture-shim.js
//
"use strict";var OmnitureShim=function(a,b,c){OmnitureShim.init(a,b,c)};OmnitureShim.allrecipesOmnitureMappings={pageName:"event1","Login Started":"event16","Login Completed":"event17","Free Registration Started":"event11","Free Registration Completed":"event12","Action Complete":"event10","recipe review detail nav":"event10","recipe review detail sort":"event10","Error Message":"event22","Local Offers Loaded":"event23","right rail nav":"event10"};
OmnitureShim.dl=null;OmnitureShim.omnitureApi=null;OmnitureShim.pubsub=null;OmnitureShim.FullOverride=function(b,a){for(var c in b){if(b.hasOwnProperty(c)){var d=b[c];
if(d&&d.createIfUndefined&&d.value){a[c]=d.value}else{if((a[c]&&a[c]!=="function")||(d.type==="spa")){a[c]=d.value}}}}};OmnitureShim.init=function(b,c,d){OmnitureShim.dl=b;
OmnitureShim.omnitureApi=c;OmnitureShim.omnitureApi.eventsAr=[];OmnitureShim.pubsub=d;var a=undefined;if(!OmnitureShim.dl.IsTrackingDisabled){if(b.event&&b.event.length>0){b.event[0].eventPageLoad=true;
a=b.event[0]}OmnitureShim.SetSCodeProps(b,c,a);setRightRails(b,b.page.category.contentType,OmnitureShim.omnitureApi);OmnitureShim.omnitureApi.events=OmnitureShim.omnitureApi.eventsAr.join(",");
OmnitureShim.omnitureApi.t()}OmnitureShim.pubsub.listen("An.Event.ToBe.Tracked","OmnitureShim.SendBeacon",function(e){OmnitureShim.sendBeacon(e)
});OmnitureShim.pubsub.listen("globalNavClick","OmnitureShim.SetGlobalNavEvars",function(e){OmnitureShim.SetGlobalNavEvars(e)
});OmnitureShim.pubsub.listen("notificationNavClick","OmnitureShim.SetNotificiationClickEvars ",function(e){OmnitureShim.SetNotifciationClickEvars(e)
});OmnitureShim.pubsub.listen("saveTastePreferenceBtnClick","OmnitureShim.SetPageTastePreferences ",function(e){OmnitureShim.SetPageTastePreferences(e)
});d.listen("registrationSource","OmnitureShim",function(e){OmnitureShim.omnitureApi.eVar25=e;OmnitureShim.omnitureApi.events="event10";
OmnitureShim.omnitureApi.tl(true,"o","Registration Tracking")})};OmnitureShim.sendBeacon=function(b){var a=OmnitureShim.getCurrentEvent(OmnitureShim.dl,b);
OmnitureShim.SetSCodeProps(OmnitureShim.dl,OmnitureShim.omnitureApi,a);OmnitureShim.omnitureApi.events=OmnitureShim.omnitureApi.eventsAr.join(",");
if(a.OmnitureOverride){OmnitureShim.FullOverride(a.OmnitureOverride,OmnitureShim.omnitureApi)}switch(a.eventType){case"spa_page_load":OmnitureShim.omnitureApi.events="event1";
OmnitureShim.omnitureApi.eVar7=null;OmnitureShim.omnitureApi.eVar8=null;OmnitureShim.omnitureApi.eVar9=null;OmnitureShim.omnitureApi.eVar16=null;
OmnitureShim.omnitureApi.t();break;default:OmnitureShim.omnitureApi.tl(OmnitureShim.omnitureApi,"o",a.eventInfo.eventName);break
}OmnitureShim.resetOmnitureEvents(OmnitureShim.omnitureApi)};OmnitureShim.getCurrentEvent=function(a,b){var c=a.event.length-1;
for(;c>=0;c-=1){if(a.event[c].uid===b){return a.event[c]}}return null};OmnitureShim.resetOmnitureEvents=function(a){a.eventsAr=[];
a.eVar7="";a.eVar8="";a.eVar9="";a.eVar24="";a.prop24=""};OmnitureShim.SetSCodeProps=function(b,c,a){if(!b){return}if(b.externalLinkId){OmnitureShim.omnitureApi.campaign=OmnitureShim.omnitureApi.prop11=b.externalLinkId
}OmnitureShim.SetPageInfoProps(b,c);OmnitureShim.SetPageIngredientSearchProps(b,c);OmnitureShim.SetPageCategoryProps(b,c);OmnitureShim.SetPageParameterProps(b,c);
OmnitureShim.SetUserProps(b,c);if(!StringHelper.IsNullOrEmpty(a)){OmnitureShim.SetEventProps(b,c,a)}OmnitureShim.SetNewsletterProps(b,c)
};OmnitureShim.SetPageInfoProps=function(b,d){if(!b.page||!b.page.pageInfo){return}if(b.page.pageInfo.pageId){d.prop32=b.page.pageInfo.pageId
}if(b.page.pageInfo.pageTitle){d.contextData.pagetitle=b.page.pageInfo.pageTitle}if(b.page.pageInfo.destinationUrl){d.contextData.url=b.page.pageInfo.destinationUrl
}if(b.page.pageInfo.domain){d.prop38=b.page.pageInfo.domain;d.eVar15=b.page.pageInfo.domain}if(b.page.pageInfo.onSiteSearchTerm){d.prop17=b.page.pageInfo.onSiteSearchTerm;
d.eVar11=b.page.pageInfo.onSiteSearchTerm}if(b.page.pageInfo.onSiteSearchResults){d.prop14=b.page.pageInfo.onSiteSearchResults
}if(b.page.pageInfo.sysEnv){d.server=b.page.pageInfo.sysEnv}if(b.page.pageInfo.pageName){d.pageName=b.page.pageInfo.pageName;
d.eVar1=b.page.pageInfo.pageName}if(b.page.pageInfo.variant){d.eVar13=b.page.pageInfo.variant}if(b.page.pageInfo.destinationUrl){if(b.page.pageInfo.destinationUrl.toLowerCase().indexOf("tab=tasteprefs")>0){d.pageName+="taste-preference/";
d.eVar1=d.pageName}}var c=function(){return b.page.pageInfo.abTestName!==undefined&&b.page.pageInfo.abTestName!=="undefined"};
if(c()){var a=b.page.pageInfo.abTestName+"|"+b.page.pageInfo.variant;d.eVar31=a}else{d.eVar31==null}d.prop22=b.page.pageInfo.hourOfDay;
d.prop23=b.page.pageInfo.dayOfWeek;d.prop37=b.page.pageInfo.viewOrientation;d.prop39=b.page.pageInfo.pageLoadTime};var setRightRails=function(b,a,c){var e=(window.localStorage.getItem("RightRailImpressionTracking"));
if(e){var d=[];if(a){var f=JSON.parse(e);switch(a){case"recipe":case"recipes":d=f.recipeRightRailTraceList;break;case"video":case"videos":d=f.videoRightRailTraceList;
break;case"category":case"categories":d=f.hubRightRailTraceList;break;case"article":case"articles":d=f.articleRightRailTraceList;
break}if(d.length>0){c.list1=d}}}};OmnitureShim.SetPageCategoryProps=function(b,c){if(!b.page||!b.page.category){return}var a=b.page.category;
if(a.contentType){c.prop6=a.contentType}if(a.subContentType){c.prop45=a.subContentType}if(a.primaryCategory){c.channel=a.primaryCategory
}if(a.adZone){c.prop5=a.adZone}if(a.adKeys){c.prop8=a.adKeys;c.eVar4=a.adKeys}if(a.contentSource){c.prop20=a.contentSource}if(b.pageImpressionTraceList){c.list1=b.pageImpressionTraceList
}};OmnitureShim.SetPageIngredientSearchProps=function(a,d){if(!a.page||!a.page.pageInfo){return}var c=a.page.pageInfo.onSiteSearchIncludedIngredients;
var b=a.page.pageInfo.onSiteSearchExcludedIngredients;if(c){d.prop12=c.length>0?c[0].trim():null;d.prop13=c.length>1?c[1].trim():null
}if(b){d.prop18=b.length>0?b[0].trim():null;d.prop19=b.length>1?b[1].trim():null}if((c||b)&&a.page.pageInfo.queryStringParameters){d.eVar14=a.page.pageInfo.queryStringParameters
}};OmnitureShim.SetPageTastePreferences=function(a){OmnitureShim.omnitureApi.events=a.events;if(a.page.pageInfo.parameters.preference){OmnitureShim.omnitureApi.list2=a.page.pageInfo.parameters.preference
}if(a.page.pageInfo.pageName){OmnitureShim.omnitureApi.pageName=a.page.pageInfo.pageName}OmnitureShim.omnitureApi.tl(OmnitureShim.omnitureApi,"o",a.eventName)
};OmnitureShim.SetPageParameterProps=function(a,b){if(a.page.pageInfo&&a.page.pageInfo.parameters){if(a.page.pageInfo.parameters.internalSource){b.prop24=a.page.pageInfo.parameters.internalSource;
if(a.page.pageInfo.parameters.referringContentType){b.prop42=a.page.pageInfo.parameters.referringContentType}if(a.page.pageInfo.parameters.referringId){b.prop41=a.page.pageInfo.parameters.referringId
}if(a.page.pageInfo.parameters.clickId){b.eVar16=a.page.pageInfo.parameters.clickId;b.oid=a.page.pageInfo.parameters.clickId}else{if(a.page.pageInfo.parameters.referringPosition){b.eVar16=a.page.pageInfo.parameters.referringPosition
}}if(a.page.pageInfo.parameters.linkName){b.prop34=a.page.pageInfo.parameters.linkName}}if(a.page.pageInfo.parameters.did){b.prop44=a.page.pageInfo.parameters.did
}}};OmnitureShim.SetUserProps=function(a,b){if(!a.user||a.user.length<1){return}if(a.user[0].segment){b.eVar10=a.user[0].segment.visitorType;
b.eVar6=a.user[0].segment.loginStatus;if(a.user[0].segment.hashId){b.prop43=a.user[0].segment.hashId}}if(a.user[0].profile&&a.user[0].profile.length>0){if(a.user[0].profile[0].profileInfo){b.prop33=a.user[0].profile[0].profileInfo.profileId;
if(a.user[0].segment.visitorType==="anonymous"){b.eVar21="None"}else{b.eVar21=a.user[0].profile[0].profileInfo.loginType}}}};
OmnitureShim.SetEventProps=function(b,c,a){if(!b.event||b.event.length<1){return}if(!c.events){c.events=[]}if(b.event&&b.event.length>0){OmnitureShim.setEventInfo(b,c,a)
}};OmnitureShim.setEventInfo=function(a,e,b){if(b.eventInfo){if(b.eventInfo.eventName){e.eVar8=b.eventInfo.eventName}if(b.eventInfo.eventAction){if(b.eventInfo.eventAction!=="Login Completed"&&e.eventsAr.indexOf("event17")>-1){e.eventsAr.splice(e.eventsAr.indexOf("event17"),1)
}e.eventsAr.push(OmnitureShim.allrecipesOmnitureMappings[b.eventInfo.eventAction])}if(b.eventInfo.errorText){e.eVar24=b.eventInfo.errorText
}}if(b.attributes){if(b.attributes.pageName){e.eventsAr.push(OmnitureShim.allrecipesOmnitureMappings[b.attributes.pageName])}if(b.attributes.itemId){e.eVar9=b.attributes.itemId
}if(b.attributes.paginatedUrl){e.eVar1=b.attributes.paginatedUrl}if(b.attributes.clickId){e.eVar16=b.attributes.clickId;e.oid=b.attributes.clickId;
setRightRails(a,b.attributes.clickId,e)}if(b.attributes.internalSource){e.prop24=b.attributes.internalSource}if(b.attributes.localOffers instanceof Array){var c;
var d=b.attributes.localOffers.reduce(function(g,h){var f=Object.keys(h).reduce(function(j,i){if(i==="isShown"){return j}return j===""?(h[i]):(j+"_"+h[i])
},"");if(h.isShown){c=f}return g===""?f:g+";"+f},"");e.eVar19=d;if(c){e.eVar20=c}}}if(b.attributes){if(b.attributes.actionSource){e.eVar7=b.attributes.actionSource
}}if(a.page.attributes){if(a.page.attributes.contentId){e.eVar23=a.page.attributes.contentId}}if(b.eventPageLoad){if(b.eventInfo){if(b.eventInfo.eventAction&&b.eventInfo.eventName.indexOf("global nav")===-1){e.eVar8=b.eventInfo.eventAction
}if(b.eventInfo.eventName&&b.eventInfo.eventName.indexOf("global nav")===-1){e.eVar9=b.eventInfo.eventName;if(a.page.pageInfo.parameters.clickId!=="next recipe module"){e.eVar16=b.eventInfo.eventName
}}}if(b.attributes){if(b.attributes.sourceContentType){e.eVar7=b.attributes.sourceContentType}if(b.attributes.sourceContentId){e.eVar23=b.attributes.sourceContentId
}}}};OmnitureShim.SetNewsletterProps=function(a,b){if(!a.newsletter){return}if(a.newsletter.mailingId){b.prop25=a.newsletter.mailingId
}if(a.newsletter.mailingName){b.prop26=a.newsletter.mailingName}if(a.newsletter.mailingDate){b.prop27=a.newsletter.mailingDate
}if(a.newsletter.mailingLinkGroup){b.prop28=a.newsletter.mailingLinkGroup}if(a.newsletter.mailingLinkName){b.prop29=a.newsletter.mailingLinkName
}if(b.prop26&&b.prop27){b.eVar5=b.prop26+"_"+b.prop27}};OmnitureShim.SetGlobalNavEvars=function(a){if(!a&!a.value){return}OmnitureShim.omnitureApi.events="event10";
OmnitureShim.omnitureApi.eVar7="global nav";OmnitureShim.omnitureApi.eVar8="global nav click";if(a.value.indexOf("menus")>0||a.value.indexOf("blog")>0){OmnitureShim.omnitureApi.eVar8="global nav click|profile"
}if(a.value.indexOf("notification")>=0){OmnitureShim.omnitureApi.eVar9=a.value;OmnitureShim.omnitureApi.eVar8="global nav click|notification"
}OmnitureShim.omnitureApi.eVar16=OmnitureShim.omnitureApi.eVar9="global nav|"+a.value;OmnitureShim.omnitureApi.tl()};OmnitureShim.SetNotifciationClickEvars=function(a){if(!a&!a.value){return
}OmnitureShim.omnitureApi.events="event10";OmnitureShim.omnitureApi.eVar7="global nav";OmnitureShim.omnitureApi.eVar8="global nav cick|notification";
OmnitureShim.omnitureApi.eVar16=OmnitureShim.omnitureApi.eVar9="global nav|notification|"+a.eventElement;OmnitureShim.omnitureApi.list1=a.pageTraceList;
OmnitureShim.omnitureApi.tl(OmnitureShim.omnitureApi,"o",a.eventName)};
//
// source/js/analytics/krux-shim.js
//
"use strict";var KruxShim=function(a,c){var d=this,e=function(j,i,g,f){var h=this;h.topicName=j;h.subscriberName=i;h.pixelUrl="http://beacon.krxd.net/event.gif?event_id="+g+"&event_type="+(f||"cact")
},b;b=[new e("SocialShareStart","KruxShim.TrackSocialStart","JOv1lOzu"),new e("VideoStart","KruxShim.TrackVideoStart","JOv2xW41"),new e("Recipe.AddToRecipeBox","KruxShim.TrackRecipeSave","JOv3FPm8"),new e("Recipe.Print","KruxShim.TrackRecipePrint","JOv3vazh"),new e("ShoppingListSave","KruxShim.TrackShoppingListSave","JOv3gD_c"),new e("IMadeIt","KruxShim.TrackIMadeIt","Jj4-pZQF","clk"),new e("Recipe.ATC.Appetizers","KruxShim.TrackAtcAppetizers","KHPWzBvJ"),new e("Recipe.ATC.Breads","KruxShim.TrackAtcBreads","KVkwPZr5"),new e("Recipe.ATC.Desserts","KruxShim.TrackAtcDesserts","KVkxMYfL"),new e("Recipe.ATC.Drinks","KruxShim.TrackAtcDrinks","KVk2NpnH"),new e("Recipe.ATC.MainDishes","KruxShim.TrackAtcMainDishes","KVk2hIKz"),new e("Recipe.ATC.Salads","KruxShim.TrackAtcSalads","KVk2wlM1"),new e("Recipe.ATC.SideDishes","KruxShim.TrackAtcSideDishes","KVk27rF1"),new e("Recipe.ATC.Snacks","KruxShim.TrackAtcSnacks","KVlY0NKZ"),new e("Recipe.ATC.Soups","KruxShim.TrackAtcSoups","KVlZBhjz")];
d.createTrackingPixel=function(f){if(a&&!a.IsTrackingDisabled){(new Image()).src=f}};(function(){b.map(function(f){c.listen(f.topicName,f.subscriberName,function(){d.createTrackingPixel(f.pixelUrl)
})})}())};
//
// source/js/analytics/kraft-tracking.js
//
(function(){pubsub.listen("VideoStart","KraftTracking.TrackVideoStart",function(a){var c=["3086","3087","3088","3230","3231","3234","3235","3236","3237","4253","4254"];
if(c.indexOf(a.videoId)>-1){var d=Math.random()*1e+16;var b=document.createElement("iframe");b.src="http://ad.doubleclick.net/adi/N7954.1043.MEREDITHCORPORATION/B7989229.106008831;sz=1x1;click=;ord="+d+"?";
document.body.appendChild(b)}})})();
//
// source/js/analytics/facebook-pixel.js
//
!function(d,a,c,j,g,i,h){if(d.fbq){return}g=d.fbq=function(){g.callMethod?g.callMethod.apply(g,arguments):g.queue.push(arguments)
};if(!d._fbq){d._fbq=g}g.push=g;g.loaded=!0;g.version="2.0";g.queue=[];i=a.createElement(c);i.async=!0;i.src=j;h=a.getElementsByTagName(c)[0];
h.parentNode.insertBefore(i,h)}(window,document,"script","//connect.facebook.net/en_US/fbevents.js");var AR=AR||{};AR.FacebookPixel=AR.FacebookPixel||{};
AR.FacebookPixel.init=function(){window.fbq("init","538674146243368");AR.FacebookPixel.pageViewTrack();AR.FacebookPixel.viewContentTrack()
};AR.FacebookPixel.pageViewTrack=function(){window.fbq("track","PageView")};AR.FacebookPixel.viewContentTrack=function(){window.fbq("track","ViewContent")
};AR.FacebookPixel.searchTrack=function(){window.fbq("track","Search")};AR.FacebookPixel.addToCartTrack=function(b){if(b&&b.id&&b.type){var a=new Object();
var c=true;switch(b.type.toLowerCase()){case"collection":a={collectionId:b.id};break;case"recipe":a={recipeId:b.id};break;default:c=false;
console.log("Type is not supported => "+a.type)}if(c){window.fbq("track","AddToCart",a)}}else{window.fbq("track","AddToCart")
}};
//
// vendor/google-analytics/google-analytics-snippet.js
//
(function(d,j,f,c,h,b,e){d.GoogleAnalyticsObject=h;d[h]=d[h]||function(){(d[h].q=d[h].q||[]).push(arguments)},d[h].l=1*new Date();
b=j.createElement(f),e=j.getElementsByTagName(f)[0];b.async=1;b.src=c;e.parentNode.insertBefore(b,e)})(window,document,"script","//google-analytics.com/analytics.js","ga");
//
// source/js/analytics/google-analytics-shim.js
//
var GoogleAnalyticsShim=function(a,b,d){var c=this;var e=function(){c.SetGACodeProps();b("send","pageview")};d.listen("GoogleAnalytics","GoogleAnalyticsShim.SendAnalytics",e);
this.CreateTracker=function(){if(!a){return}if(a.page.pageInfo.domain.indexOf(".corp")>-1){b("create","UA-43872967-7","auto")
}else{b("create","UA-43872967-6","auto")}};this.SetGACodeProps=function(){if(!a){return}c.CreateTracker();c.SetPageProps();c.SetPageCategoryProps();
c.SetUserProps()};this.SetPageProps=function(){if(!a.page||!a.page.pageInfo){return}if(a.page.pageInfo.pageName){b("set","page",a.page.pageInfo.pageName)
}if(a.page.pageInfo.pageId){b("set","dimension2",a.page.pageInfo.pageId)}b("set","dimension6",a.page.pageInfo.hourOfDay);b("set","dimension7",a.page.pageInfo.dayOfWeek);
b("set","dimension8",a.page.pageInfo.viewOrientation)};this.SetPageCategoryProps=function(){if(!a.page||!a.page.category){return
}if(a.page.category.contentType){b("set","dimension1",a.page.category.contentType)}if(a.page.category.adZone){b("set","dimension4",a.page.category.adZone)
}if(a.page.category.contentSource){b("set","dimension5",a.page.category.contentSource)}};this.SetUserProps=function(){if(!a.user||a.user.length<1){return
}if(a.user[0].profile&&a.user[0].profile.length>0){if(a.user[0].profile[0].profileInfo){b("set","dimension3",a.user[0].profile[0].profileInfo.profileId)
}}}};
