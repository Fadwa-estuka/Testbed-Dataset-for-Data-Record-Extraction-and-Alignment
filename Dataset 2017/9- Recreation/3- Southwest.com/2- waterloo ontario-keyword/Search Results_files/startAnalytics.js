var analyticsDisabled = false;

function setMemberNumber(c) {
    if (!analyticsDisabled) {
        s = s || s_gi();
        s.eVar45 = c;
    }
}

function setMemberNumberLazily(g, d) {
    if (g) {
        setMemberNumber(d)
    }
}

function setTripLength(g, d, f) {
    if (analyticsDisabled) {
        return
    }
    s.eVar15 = "No Return";
    if (d) {
        s.eVar15 = String(Math.round((f - g) / (1000 * 60 * 60 * 24)))
    }
}

function sendAnalyticsOnLoad() {
    if (analyticsDisabled) {
        return
    }
    if (typeof gatherDataOnLoad == "function") {
        gatherDataOnLoad()
    }
    var a = s.t();
    if (a) {
        document.write(a)
    }
}

function sendAnalyticsOnSubmit(d, g, c, f) {
    if (analyticsDisabled) {
        return
    }
    d.tl(true, c, f);
    var h = 500;
    var a = e = new Date;
    while (e.getTime() - a.getTime() < h) {
        e = new Date
    }
}

function calcBookingCurve(d, b) {
    if (analyticsDisabled) {
        return ""
    }
    var i = getMonthNumberFromName(d);
    if (i == -1) {
        return ""
    }
    var h = new Date();
    var f = new Date(h.getFullYear(), h.getMonth(), h.getDate());
    var c = new Date(h.getFullYear(), i, b);
    if (f.getTime() > c.getTime()) {
        c.setFullYear(c.getFullYear() + 1)
    }
    var g = c.getTime() - f.getTime();
    var a = (g / (24 * 3600000));
    a = Math.round(a);
    return (a > 0) ? a + "" : "Zero"
}

function calcBookingPace(a, b) {
    return calcBookingCurve(a, b)
}

function buildDateFromMonthDay(f, c) {
    if (analyticsDisabled) {
        return ""
    }
    var b = getMonthNumberFromName(f);
    if (b == -1) {
        return ""
    }
    var g = new Date();
    var a = g.getFullYear();
    if ((b < g.getMonth()) || ((b == g.getMonth()) && (c < g.getDate()))) {
        ++a
    }
    var d = ++b + "/";
    if (b < 10) {
        d = "0" + d
    }
    if (c < 10) {
        d = d + "0"
    }
    d = d + c + "/" + a;
    return d
}

function getSrcValue() {
    var a = s.getQueryParam("src");
    if (!a) {
        referrerVal = s.c_r("referrer");
        if (referrerVal) {
            a = referrerVal.replace(/[^&]*&src=([^&]*).*/, "$1")
        }
    }
    return a
}

function getVendorTrackingValue() {
    var a = s.getQueryParam("vendor");
    if (!a) {
        a = s.getQueryParam("vast")
    }
    return a
}


function testLinkVar(a, b) {
    if (analyticsDisabled) {
        return
    }
    if (a) {
        linkTrackVars += "," + b
    }
}

function getMonthNumberFromName(f) {
    if (analyticsDisabled) {
        return -1
    }
    var a = new Array("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER");
    var c = false;
    var b = 0;
    var d = f.toUpperCase();
    for (; b < a.length; b++) {
        if (a[b].indexOf(d) == 0) {
            c = true;
            break
        }
    }
    if (!c) {
        return -1
    }
    return b
}
/* The following code is for use with Adobe Marketing Cloud only. Do not change the values contained in this document without contacting Jordan Johnson or Pam Hooper in Marketing. */

/*Determines Language site is viewed in.*/
var SWA = typeof SWA === 'undefined' ? {} : SWA;
SWA.languages = {
    availableLanguages: {
        'Default': ['English'],
        'Spanish': ['espanol', 'es'],
        'Italian': ['it'],
        'French': ['fr'],
        'Dutch': ['nl'],
        'German': ['de'],
        'Portuguese': ['pt']
    },
    getLanguage: function () {
        var getHost = window.location.host,
            showedHost = getHost.split("."),
            langTocheck = showedHost[0],
            languages = this.availableLanguages;

        for (var lang in languages) {
            if (languages.hasOwnProperty(lang)) {
                for (var i = 0; i < languages[lang].length; i++) {
                    if (languages[lang][i] === langTocheck) {
                        return lang;
                    }
                }
            }
        }
        return languages.Default[0];
    }
};

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.10.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(q,v){function y(a){function c(a,d,c){c=c?c+="|":c;return c+(a+"="+encodeURIComponent(d))}for(var b="",e=0,f=a.length;e<f;e++){var g=a[e],h=g[0],g=g[1];g!=i&&g!==t&&(b=c(h,g,b))}return function(a){var d=(new Date).getTime(),a=a?a+="|":a;return a+("TS="+d)}(b)}if(!q)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.10.0";var m=window,l=m.Visitor;l.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=
a;m.s_c_in++;a.ja={Fa:[]};var u=m.document,i=l.Cb;i||(i=null);var E=l.Db;E||(E=void 0);var j=l.Oa;j||(j=!0);var k=l.Ma;k||(k=!1);a.fa=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.s=function(a,c){var b="0123456789",e="",f="",g,h,i=8,k=10,l=10;c===n&&(w.isClientSideMarketingCloudVisitorID=j);if(1==a){b+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*i),e+=b.substring(h,h+1),h=Math.floor(Math.random()*i),f+=b.substring(h,h+1),i=16;return e+
"-"+f}for(g=0;19>g;g++)h=Math.floor(Math.random()*k),e+=b.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=b.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+f};a.Ra=function(){var a;!a&&m.location&&(a=m.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+u.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(u.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.J=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Xa=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==E&&(a.h[d]=[]),a.h[d].push(c))};a.r=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.J(b.shift(),
c)}};a.v=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=x.vb(a);a=x.mb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=x.$a(f[1],b,e);return a+e+c};a.Qa=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.Wa=function(){var d=i,c=m.location.href;try{var b=a.Qa(c,r.Z);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
a.ba=function(){var d=a.Wa();if(d&&d.TS&&!(((new Date).getTime()-d.TS)/6E4>r.Ka||d[I]!==q)){var c=d[n],b=a.setMarketingCloudVisitorID;c&&c.match(r.u)&&b(c);a.j(s,-1);d=d[p];c=a.setAnalyticsVisitorID;d&&d.match(r.u)&&c(d)}};a.Va=function(d){function c(d){x.pb(d)&&a.setCustomerIDs(d)}function b(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=
d.supplementalDataIDLastConsumed||{}}d&&d[a.marketingCloudOrgID]&&(d=d[a.marketingCloudOrgID],c(d.customerIDs),b(d.sdid))};a.l=i;a.Ta=function(d,c,b,e){c=a.v(c,"d_fieldgroup",d,1);e.url=a.v(e.url,"d_fieldgroup",d,1);e.m=a.v(e.m,"d_fieldgroup",d,1);w.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.la.C.D?a.la.ib(e,b,d):a.useCORSOnly||a.ia(d,c,b)};a.ia=function(d,c,b){var e=0,f=0,g;if(c&&u){for(g=0;!e&&2>g;){try{e=(e=u.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{u.body&&
(e=u.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=u.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,o.d[d]={requestStart:o.o(),url:c,ta:e,ra:o.ya(),sa:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.ja.Fa.push(c))};a.Pa=function(d){a.l!=i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ga=k;a.ha=k;a.isAllowed=function(){if(!a.ga&&(a.ga=j,a.cookieRead(a.cookieName)||
a.cookieWrite(a.cookieName,"T",1)))a.ha=j;return a.ha};a.b=i;a.c=i;var F=l.Ub;F||(F="MC");var n=l.ac;n||(n="MCMID");var I=l.Yb;I||(I="MCORGID");var H=l.Vb;H||(H="MCCIDH");var L=l.Zb;L||(L="MCSYNCS");var J=l.$b;J||(J="MCSYNCSOP");var K=l.Wb;K||(K="MCIDTS");var B=l.Xb;B||(B="MCOPTOUT");var D=l.Sb;D||(D="A");var p=l.Pb;p||(p="MCAID");var C=l.Tb;C||(C="AAM");var A=l.Rb;A||(A="MCAAMLH");var s=l.Qb;s||(s="MCAAMB");var t=l.bc;t||(t="NONE");a.L=0;a.ea=function(){if(!a.L){var d=a.version;a.audienceManagerServer&&
(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.L=a.fa(d)}return a.L};a.ka=k;a.f=function(){if(!a.ka){a.ka=j;var d=a.ea(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==H&&
(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=j}c=a.loadSSL?!!a.trackingServerSecure:!!a.trackingServer;if(!a.a(p)&&c&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(r.u)&&a.e(p,g))}};a.Za=function(){var d=a.ea(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&
(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.c||!a.c[d])?a.b[d]:i};a.e=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.Za()};a.Sa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.Ya=function(d,c,b){a.e(d,c?c.join("*"):"",b)};a.Jb=function(d,c){var b=a.Sa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Lb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||
(e.push(f),e.push(c[f]));a.Ya(d,e,b)};a.j=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.c||(a.c={}),a.c[d]=j):a.c&&(a.c[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.da=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=t)),!a||a!=t&&!a.match(r.u)))a="";return a};a.k=
function(d,c){a.Pa(d);a.i!=i&&(a.i[d]=k);o.d[d]&&(o.d[d].Ab=o.o(),o.I(d));w.d[d]&&w.Ha(d,k);if(d==F){w.isClientSideMarketingCloudVisitorID!==j&&(w.isClientSideMarketingCloudVisitorID=k);var b=a.a(n);if(!b||a.overwriteCrossDomainMCIDAndAID){b="object"==typeof c&&c.mid?c.mid:a.da(c);if(!b){if(a.B){a.getAnalyticsVisitorID(i,k,j);return}b=a.s(0,n)}a.e(n,b)}if(!b||b==t)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(C,c),a.B&&c.mid&&a.k(D,{id:c.id}));a.r(n,[b])}if(d==C&&"object"==
typeof c){b=604800;c.id_sync_ttl!=E&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(A);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(A,b),a.e(A,e)));e||(e="");a.r(A,[e]);e=a.a(s);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(s,b),a.e(s,e);e||(e="");a.r(s,[e]);!c.error_msg&&a.A&&a.e(H,a.A)}if(d==D){b=a.a(p);if(!b||a.overwriteCrossDomainMCIDAndAID)(b=a.da(c))?b!==t&&a.j(s,-1):b=t,a.e(p,b);if(!b||b==t)b="";a.r(p,[b])}a.idSyncDisableSyncs?z.za=j:(z.za=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,
z.wb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(B));f||(f=t,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(B,b,j),a.e(B,f));a.r(B,[f])}};a.i=i;a.t=function(d,c,b,e,f){var g="",h,k=x.ob(d);if(a.isAllowed()&&(a.f(),g=a.a(d,M[d]===j),a.disableThirdPartyCalls&&!g&&(d===n?(g=a.s(0,n),a.setMarketingCloudVisitorID(g)):d===p&&!k&&(g="",a.setAnalyticsVisitorID(g))),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)))if(d==n||d==B?h=F:
d==A||d==s?h=C:d==p&&(h=D),h){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ta(h,c,function(c,b){if(!a.a(d))if(o.d[h]&&(o.d[h].timeout=o.o(),o.d[h].nb=!!c,o.I(h)),b===Object(b)&&!a.useCORSOnly)a.ia(h,b.url,b.G);else{c&&w.Ha(h,j);var e="";d==n?e=a.s(0,n):h==C&&(e={error_msg:"timeout"});a.k(h,e)}},f);if(g)return g;a.Xa(d,b);c||a.k(h,{id:t});return""}if((d==n||d==p)&&g==t)g="",e=j;b&&(e||a.disableThirdPartyCalls)&&a.J(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(F,d)};a.setMarketingCloudVisitorID=
function(d){a._setMarketingCloudFields(d)};a.B=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.B=j);var b=a.z("_setMarketingCloudFields");return a.t(n,b.url,d,c,b)}return""};a.Ua=function(){a.getAudienceManagerBlob()};l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.w={};a.ca=k;a.A="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==
typeof b){var e={};b.id&&(e.id=b.id);b.authState!=E&&(e.authState=b.authState);a.w[c]=e}else a.w[c]={id:b};var d=a.getCustomerIDs(),e=a.a(H),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.A=a.fa(f);a.A!=e&&(a.ca=j,a.Ua())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.w)Object.prototype[c]||(b=a.w[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=E?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=
function(d){a.f();a.k(D,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+
a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.oa=i}h.url=g;return a.t(b?n:p,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(C,d)};a.z=function(d){var c=a.audienceManagerServer,b="",e=a.a(n),f=a.a(s,j),
g=a.a(p),g=g&&g!=t?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+
"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+"?"+e,oa:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,
j)}));if(b)return b=a.z(),a.t(A,b.url,d,c,b)}return""};a.getLocationHint=a.getAudienceManagerLocationHint;a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,j)}));if(b){var b=a.z(),e=b.url;a.ca&&a.j(s,-1);return a.t(s,e,d,c,b)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed=
{};a.getSupplementalDataID=function(d,c){!a._supplementalDataIDCurrent&&!c&&(a._supplementalDataIDCurrent=a.s(1));var b=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?(b=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=j):b&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=b=!c?a.s(1):"",a._supplementalDataIDCurrentConsumed=
{}),b&&(a._supplementalDataIDCurrentConsumed[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.z("_setMarketingCloudFields");return a.t(B,b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.J(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){var c=r.Z,b=y([[n,a.a(n)],[p,a.a(p)],[I,a.marketingCloudOrgID]]);try{return a.v(d,
c,b)}catch(e){return d}};var r={q:!!m.postMessage,La:1,aa:864E5,Z:"adobe_mc",u:/^[0-9a-fA-F\-]+$/,Ka:5};a.Eb=r;a.na={postMessage:function(a,c,b){var e=1;c&&(r.q?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},U:function(a,c){var b;try{if(r.q)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":
"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var x={M:function(){if(u.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(u.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;
for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},va:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},vb:function(a){var c=a.indexOf("#");return 0<c?a.substr(c):""},mb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},$a:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")},ob:function(d,c,b){if(d!==p)return k;c||(c=a.trackingServer);b||(b=a.trackingServerSecure);d=a.loadSSL?b:c;return"string"===
typeof d&&d.length?0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},pb:function(a){return Boolean(a&&a===Object(a))}};a.Kb=x;var N={C:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.Bb).indexOf("Constructor")&&
(c=k));return{D:a,Nb:c}}(),jb:function(){return"none"===this.C.D?i:new window[this.C.D]},ib:function(d,c,b){var e=this;c&&(d.G=c);try{var f=this.jb();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.C.D&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");
break a}}catch(c){e.n(d,c,"Error parsing response as JSON");break a}try{for(var b=d.oa,f=window,g=0;g<b.length;g++)f=f[b[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();o.d[b]={requestStart:o.o(),url:d.m,ta:f.timeout,ra:o.ya(),sa:1};a.ja.Fa.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Ob:d,error:c,description:b});d.G&&("ontimeout"===b?d.G(j):d.G(k,
d))}};a.la=N;var z={Na:3E4,$:649,Ja:k,id:i,T:[],Q:i,xa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,kb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.Q=this.xa(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},cb:function(){var d=
"?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);"string"===typeof a.K&&a.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.Q=this.xa(a.K),this.url=a.K+d)},za:i,ua:k,W:k,F:i,cc:i,ub:i,dc:i,V:k,H:[],sb:[],tb:[],Ba:r.q?15:100,R:[],qb:[],pa:j,Ea:k,Da:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ua||a.Gb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.W},O:function(){function a(){e=document.createElement("iframe");
e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.ub=j;c();document.body.appendChild(e)}function c(){x.M(e,"load",function(){e.className="aamIframeLoaded";b.F=j;b.p()})}this.W=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.F=j,this.Aa=e,this.p()):a();this.Aa=e},p:function(d){var c=this;d===Object(d)&&(this.R.push(d),
this.xb(d));if((this.Ea||!r.q||this.F)&&this.R.length)this.I(this.R.shift()),this.p();!a.idSyncDisableSyncs&&this.F&&this.H.length&&!this.V&&(this.Ja||(this.Ja=j,setTimeout(function(){c.Ba=r.q?15:150},this.Na)),this.V=j,this.Ga())},xb:function(a){var c,b,e;if((c=a.ibs)&&c instanceof Array&&(b=c.length))for(a=0;a<b;a++)e=c[a],e.syncOnPage&&this.qa(e,"","syncOnPage")},I:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||
""),c(g.tag||""),x.va(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],g.syncOnPage||(this.pa?this.N(h.join("|")):g.fireURLSync&&this.qa(g,h.join("|")));this.qb.push(a)},qa:function(d,c,b){var e=(b="syncOnPage"===b?j:k)?J:L;a.f();var f=a.a(e),g=k,h=k,i=Math.ceil((new Date).getTime()/r.aa);f?(f=f.split("*"),h=this.yb(f,d.id,i),g=h.gb,h=h.hb,(!g||!h)&&this.wa(b,d,c,f,e,i)):(f=[],this.wa(b,d,c,f,e,i))},yb:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],
10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{gb:e,hb:f}},rb:function(a){if(a.join("*").length>this.$)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.$;)a.shift()},wa:function(d,c,b,e,f,g){var h=this;if(d){if("img"===c.tag){var d=c.url,b=a.loadSSL?"https:":"http:",j,k,l;for(e=0,j=d.length;e<j;e++){k=d[e];l=/^\/\//.test(k);var m=new Image;x.M(m,"load",function(b,c,d,e){return function(){h.T[b]=
i;a.f();var g=a.a(f),j=[];if(g){var g=g.split("*"),k,l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+c.id+"-")||j.push(m)}h.Ia(j,c,d,e)}}(this.T.length,c,f,g));m.src=(l?b:"")+k;this.T.push(m)}}}else this.N(b),this.Ia(e,c,f,g)},N:function(d){var c=encodeURIComponent;this.H.push((a.Hb?c("---destpub-debug---"):c("---destpub---"))+d)},Ia:function(d,c,b,e){d.push(c.id+"-"+(e+Math.ceil(c.ttl/60/24)));this.rb(d);a.e(b,d.join("*"))},Ga:function(){var d=this,c;this.H.length?(c=this.H.shift(),a.na.postMessage(c,
this.url,this.Aa.contentWindow),this.sb.push(c),setTimeout(function(){d.Ga()},this.Ba)):this.V=k},U:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.pa="true"===c[1]?j:k,this.Ea=j,this.p()),this.tb.push(a))},wb:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.ma&&a.ma.length?a.ma:d.subdomain||"",this.url=this.kb();d.ibs instanceof Array&&d.ibs.length&&
(this.ua=j);this.Da()&&(a.idSyncAttachIframeOnWindowLoad?(l.Y||"complete"===u.readyState||"loaded"===u.readyState)&&this.O():this.ab());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.p(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},bb:function(d,c){return a.Ib||!d||c-d>r.La},ab:function(){function a(){c.W||(document.body?c.O():setTimeout(a,30))}var c=this;a()}};a.Fb=z;a.timeoutMetricsLog=[];var o={fb:window.performance&&window.performance.timing?
1:0,Ca:window.performance&&window.performance.timing?window.performance.timing:i,X:i,P:i,d:{},S:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.fb+"&d_winload="+this.lb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},
lb:function(){this.P===i&&(this.P=this.Ca?this.X-this.Ca.navigationStart:this.X-l.eb);return this.P},o:function(){return(new Date).getTime()},I:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.ta;b.d_visid_cors=c.sa;b.d_fieldgroup=a;b.d_settimeout_overriden=c.ra;c.timeout?c.nb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,
b.d_visid_response=c.Ab-c.requestStart);b.d_visid_url=c.url;l.Y?this.send(b):this.S.push(b);delete this.d[a]},zb:function(){for(var a=0,c=this.S.length;a<c;a++)this.send(this.S[a])},ya:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Mb=o;var w={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},Ha:function(a,c){switch(a){case F:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=
k):this.MCIDCallTimedOut=c;break;case D:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case C:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut};
a.idSyncGetOnPageSyncInfo=function(){a.f();return a.a(J)};a.idSyncByURL=function(d){var c,b=d||{};c=b.minutesToLive;var e="";a.idSyncDisableSyncs&&(e=e?e:"Error: id syncs have been disabled");if("string"!==typeof b.dpid||!b.dpid.length)e=e?e:"Error: config.dpid is empty";if("string"!==typeof b.url||!b.url.length)e=e?e:"Error: config.url is empty";if("undefined"===typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)e=e?e:"Error: config.minutesToLive needs to be a positive number";c={error:e,ec:c};
if(c.error)return c.error;var e=d.url,f=encodeURIComponent,b=z,g,e=e.replace(/^https:/,"").replace(/^http:/,"");g=x.va(["",d.dpid,d.dpuuid||""],",");d=["ibs",f(d.dpid),"img",f(e),c.ttl,"",g];b.N(d.join("|"));b.p();return"Successfully queued"};a.idSyncByDataSource=function(d){if(d!==Object(d)||"string"!==typeof d.dpuuid||!d.dpuuid.length)return"Error: config or config.dpuuid is empty";d.url="//dpm.demdex.net/ibs:dpid="+d.dpid+"&dpuuid="+d.dpuuid;return a.idSyncByURL(d)};0>q.indexOf("@")&&(q+="@AdobeOrg");
a.marketingCloudOrgID=q;a.cookieName="AMCV_"+q;a.sessionCookieName="AMCVS_"+q;a.cookieDomain=a.Ra();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var M={};M[A]=j;M[s]=j;if(v&&"object"==typeof v){for(var G in v)!Object.prototype[G]&&(a[G]=v[G]);a.idSyncContainerID=a.idSyncContainerID||0;a.ba();a.f();N=a.a(K);G=Math.ceil((new Date).getTime()/
r.aa);!a.idSyncDisableSyncs&&z.bb(N,G)&&(a.j(s,-1),a.e(K,G));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.Va(a.serverState)}else a.ba();if(!a.idSyncDisableSyncs){z.cb();x.M(window,"load",function(){l.Y=j;o.X=o.o();o.zb();var a=z;a.Da()&&a.O()});try{a.na.U(function(a){z.U(a.data)},z.Q)}catch(O){}}}
Visitor.getInstance=function(q,v){var y,a=window.s_c_il,m;0>q.indexOf("@")&&(q+="@AdobeOrg");if(a)for(m=0;m<a.length;m++)if((y=a[m])&&"Visitor"==y._c&&y.marketingCloudOrgID==q)return y;return new Visitor(q,v)};(function(){function q(){v.Y=y}var v=window.Visitor,y=v.Oa,a=v.Ma;y||(y=!0);a||(a=!1);window.addEventListener?window.addEventListener("load",q):window.attachEvent&&window.attachEvent("onload",q);v.eb=(new Date).getTime()})();
/* End Visitor API JavaScript*/

/* Visitor ID */
var visitor = Visitor.getInstance("65D316D751E563EC0A490D4C@AdobeOrg", {
    trackingServer: "metrics.southwest.com",
    trackingServerSecure: "smetrics.southwest.com",

    // Enables CNAME support
    marketingCloudServer: "metrics.southwest.com",
    marketingCloudServerSecure: "smetrics.southwest.com"
});

// This is a "work around" because VisitorAPI library has the potential to be include 2x (mbox + AppMeasurement, mbox + DTM, or AppMeasurement-only)
// Once there we are able to implement in the standard prescribed, we can remove this and change all references of "myVisitor" to just "Visitor"
var myVisitor = {
    AuthState:{UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2}
}
// end

s_getLoadTime();

/* Sets the Analytics report suite dynamically */
s=new AppMeasurement();
s.account="swadev"

var domainList = ",southwest.com,www.southwest.com,espanol.southwest.com,global.southwest.com,espanol.global.southwest.com,travel.southwest.com,espanoltravel.southwest.com,rapidrewardsshopping.southwest.com,swabiz.com,www.swabiz.com,espanol.swabiz.com,buy.points.com,storefront.points.com,luv.southwest.com,bbcorporate.bookingbuilder.com,download.southwest.com,luv.southwest.com,";
var domainMatch = window.location.host;
if (domainFoundInList (domainList, domainMatch)) {
    s.account="swaprod";
}

var s=s_gi(s.account);

/************************************************CONFIGURATION SECTION**************************************************************/
s.currencyCode="USD";
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,dmg";
s.linkInternalFilters="javascript:,southwest.com,swabiz.com,rapidrewards.com,swacargo.com,swacorp.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
s.formList="";
s.trackFormList=false;
s.trackPageName=true;
s.useCommerce=false;
s.eventList="";
s.siteID="";
s.defaultPage="";
s.queryVarsList="";
s.pathExcludeDelim=";";
s.pathConcatDelim="/";
s.pathExcludeList="";
s.visitor = Visitor.getInstance("65D316D751E563EC0A490D4C@AdobeOrg");

/* Sets global variable values in Analytics */
s.server=document.domain;
s.eVar1=s.prop1="FullSite";
if (s.eVar45) {
  s.prop5="hot";
} else {
  s.prop5="cold";
};
s.prop34 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");
s.eVar55="D=g"
s.prop55="D=g"
s.prop56 = SWA.languages.getLanguage();
if (document.cookie.indexOf('PrefID') > -1 ) {
s.prop70 = s.c_r("PrefID");
}

s.usePlugins=true;
	
s.doPlugins=function(s){ /*Util.getQueryParam key is case sensitive. The Javascript OR statement solves for that.*/
    if(s.pageName==null)
        s.pageName=s.prop50+":"+s.getPageName();
    s.campaign=s.Util.getQueryParam("src")||s.Util.getQueryParam("SRC");
    if(s.campaign) { s.cookieWrite('cname', s.campaign, 0); }
    s.eVar32=s.Util.getQueryParam("vast")||s.Util.getQueryParam("VAST");
    s.eVar38=s.Util.getQueryParam("rrid")||s.Util.getQueryParam("RRID");
    s.eVar39=s.Util.getQueryParam("rmid")||s.Util.getQueryParam("RMID");
    s.eVar46=s.Util.getQueryParam("int")||s.Util.getQueryParam("INT");
    s.eVar54=s.Util.getQueryParam("f")||s.Util.getQueryParam("F");
    s.eVar57=s.Util.getQueryParam("ref")||s.Util.getQueryParam("REF");
    s.prop60=s.Util.getQueryParam("clk")||s.Util.getQueryParam("CLK");

    s.prop4=s_getLoadTime();

 // Customer ID for alias eVar45 and SOuthW3st
	if(s.eVar45){
		visitor.setCustomerIDs({
			"eVar45": {
				"id":s.eVar45,
				"authState":myVisitor.AuthState.AUTHENTICATED
			},
			"SOuthW3st": {
				"id":s.eVar45,
				"authState":myVisitor.AuthState.AUTHENTICATED
			}
		});
	} 

// Customer ID for alias eVar38
	if(s.eVar38){
		visitor.setCustomerIDs({
			"eVar38": {
				"id":s.eVar38,
				"authState":myVisitor.AuthState.AUTHENTICATED
			}
		});
	} 

// Customer ID for alias prop40	
	if(s.prop40){
		visitor.setCustomerIDs({
			"prop40": {
				"id":s.prop40,
				"authState":myVisitor.AuthState.AUTHENTICATED
			}
		});
	} 

    s.AudienceManagement.setup({
        "partner":"swa",
        "containerNSID":0,
        "disableDefaultRequest": true,
        "disableScriptAttachment": true
    });
};

s.visitorNamespace="southwestairlines";
s.trackingServer="metrics.southwest.com";
s.trackingServerSecure="smetrics.southwest.com";
s.dc=112;

/************************************************PLUGINS SECTION*************************************************************************/

/* Code from Adobe to Capture PageNames for pages that are not set on the page itself */
s.getPageName=new Function("u",""+"var s=this,v=u?u:''+s.w.location,x=v.indexOf(':'),y=v.indexOf('/',x"+"+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s.q"+"ueryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.subs"+"tring(y+1,q?z:v.length);z=p.indexOf('#');s.fl=function(x,l){return "+"x?(''+x).substring(0,l):x};s.pt=function(x,d,f,a){var s=this,t=x,z="+"0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r"+"=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t="+"z<x.length?t:''}return''};p=z<0?p:s.fl(p,z);x=e?p.indexOf(e):-1;p=x"+"<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.defaultPage:'';y="+"c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=s.fl(p,x);if(!"+"s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substring(x+1)}y"+"=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=s.fl(g,x);z=s"+".pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substring(x+1)}re"+"turn n");

/* Code from Adobe to caputure url parameter sent from the mobile apps. */
if (s.Util.getQueryParam("appvi")) {
    s.new_vi_date=new Date;
    s.new_vi_date.setFullYear(s.new_vi_date.getFullYear() + 5);
    s.c_w("app_vi",s.getQueryParam("appvi"),s.new_vi_date);
    s.visitorID=s.c_r("app_vi");
}
else if (s.c_r("app_vi")) {
    s.visitorID=s.c_r("app_vi");
}

function domainFoundInList (fDomainList, fDomainMatch) {
    // remove "www." from the domain
    fDomainMatch = String(fDomainMatch).replace(/^(https?:\/\/)?(www\.)?/,'')
    // add commas around fDomainMatch so you don't accidentally get a match for "west.com"
    fDomainMatch = "," + fDomainMatch + ",";

    // if match, then return true
    if (fDomainList.search(fDomainMatch) > -1 ) {
        return (true);
    }
    return (false);
}

/* Function to collect Load Time for a prop. */
function s_getLoadTime(){
    if(!window.s_loadT){
        var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''
    }return s_loadT
}

s.loadModule("AudienceManagement");

//AppMeasurement_Module_AudienceManagement.js library file version: 6.6
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(a,c){var e=[],d,g;a!==Object(a)&&(a={});var h,l,t,v,p,n,w,E,r,A,L,B,C,F;h=a.partner;l=a.containerNSID;t=!!a.disableDestinationPublishingIframe;v=a.iframeAkamaiHTTPS;p=a.mappings;n=a.uuidCookie;w=!0===a.enableErrorReporting;E=a.visitorService;r=a.declaredId;A=!0===a.removeFinishedScriptsAndCallbacks;L=!0===a.delayAllUntilWindowLoad;B=!0===a.disableIDSyncs;C="undefined"===typeof a.secureDataCollection||!0===a.secureDataCollection;F=!0===a.useCORSOnly;
var M,N,I,G,O,P,Q,R;M=!0===a.disableScriptAttachment;N=!0===a.disableDefaultRequest;I=a.afterResultForDefaultRequest;G=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;Q=a.visitorConstructor;R=!0===a.disableCORS;w&&DIL.errorModule.activate();var T=!0===window._dil_unit_tests;(d=c)&&e.push(d+"");if(!h||"string"!==typeof h)return d="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:d,filename:"dil.js"}),Error(d);d="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
if(l||"number"===typeof l)l=parseInt(l,10),!isNaN(l)&&0<=l&&(d="");d&&(l=0,e.push(d),d="");g=DIL.getDil(h,l);if(g instanceof DIL&&g.api.getPartner()===h&&g.api.getContainerNSID()===l)return g;if(this instanceof DIL)DIL.registerDil(this,h,l);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+h+" and containerNSID = "+l);var y={IS_HTTPS:C||"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC",
MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(h)+"_"+l,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP"},J={stuffed:{}},s={},q={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],
num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:l+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(b){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=
!0;var k=this,m,f,a,d;if("function"===typeof b&&"function"===typeof b.getInstance){if(E===Object(E)&&(m=E.namespace)&&"string"===typeof m)f=b.getInstance(m,{idSyncContainerID:l});else{this.releaseType="no namespace";this.releaseRequests();return}if(f===Object(f)&&f instanceof b&&"function"===typeof f.isAllowed&&"function"===typeof f.getMarketingCloudVisitorID&&"function"===typeof f.getCustomerIDs&&"function"===typeof f.isOptedOut){this.VisitorAPI=b;if(!f.isAllowed()){this.releaseType="VisitorAPI not allowed";
this.releaseRequests();return}this.instance=f;a=function(b){"VisitorAPI"!==k.releaseType&&(k.mid=b,k.releaseType="VisitorAPI",k.releaseRequests())};d=f.getMarketingCloudVisitorID(a);if("string"===typeof d&&d.length){a(d);return}setTimeout(function(){"VisitorAPI"!==k.releaseType&&(k.releaseType="timeout",k.releaseRequests())},this.getLoadTimeout());return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=
!0;q.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var b=x.isPopulatedString,k=this.getMarketingCloudVisitorID();b(this.mid)&&this.mid===k||(this.mid=k);return b(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(b){if(b===Object(b)){var k="",m=[],f=[],a,d;for(a in b)b.hasOwnProperty(a)&&
(f[0]=a,d=b[a],d===Object(d)&&(f[1]=d.id||"",f[2]=d.authState||0,m.push(f),f=[]));if(f=m.length)for(b=0;b<f;b++)k+="&d_cid_ic="+u.encodeAndBuildRequest(m[b],"%01");return k}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(b){this.isOptedOut=b;this.isOptedOutCallbackCalled=!0;q.registerRequest()},getLoadTimeout:function(){var b=
this.instance;if(b){if("function"===typeof b.getLoadTimeout)return b.getLoadTimeout();if("undefined"!==typeof b.loadTimeout)return b.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(b,k){var m=x.isPopulatedString,f=encodeURIComponent;if(b===Object(b)&&m(k)){var a=b.dpid,d=b.dpuuid,e=null;if(m(a)&&m(d)){e=f(a)+"$"+f(d);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+
k+"'";this.declaredIdCombos[e]=!0;this.declaredId[k]={dpid:a,dpuuid:d};return"setDeclaredId: succeeded for type '"+k+"'"}}return"setDeclaredId: failed for type '"+k+"'"},getDeclaredIdQueryString:function(){var b=this.declaredId.request,k=this.declaredId.init,m=encodeURIComponent,f="";null!==b?f="&d_dpid="+m(b.dpid)+"&d_dpuuid="+m(b.dpuuid):null!==k&&(f="&d_dpid="+m(k.dpid)+"&d_dpuuid="+m(k.dpuuid));return f}},registerRequest:function(b){var k=this.firingQueue;b===Object(b)&&k.push(b);this.firing||
!k.length||L&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,b=k.shift(),b.src=b.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),x.isPopulatedString(b.corsPostData)&&(b.corsPostData=b.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),D.fireRequest(b),this.firstRequestHasFired||
"script"!==b.tag&&"cors"!==b.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(Q||window.Visitor)},requestRemoval:function(b){if(!A)return"removeFinishedScriptsAndCallbacks is not boolean true";var k=this.toRemove,m,f;b===Object(b)&&(m=b.script,f=b.callbackName,(m===Object(m)&&"SCRIPT"===m.nodeName||"no script created"===m)&&"string"===typeof f&&f.length&&k.push(b));if(this.readyToRemove&&k.length){f=k.shift();m=f.script;f=f.callbackName;"no script created"!==m?
(b=m.src,m.parentNode.removeChild(m)):b=m;window[f]=null;try{delete window[f]}catch(a){}this.removed.push({scriptSrc:b,callbackName:f});DIL.variables.scriptsRemoved.push(b);DIL.variables.callbacksRemoved.push(f);return this.requestRemoval()}return"requestRemoval() processed"}};g=function(){var b="http://fast.",k="?d_nsid="+l+"#"+encodeURIComponent(document.location.href);if("string"===typeof G&&G.length)return G+k;y.IS_HTTPS&&(b=!0===v?"https://fast.":"https://");return b+h+".demdex.net/dest5.html"+
k};var z={THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+h+"_"+l,url:g(),onPagePixels:[],iframeHost:null,getIframeHost:function(b){if("string"===typeof b){var k=b.split("/");if(3<=k.length)return k[0]+"//"+k[2];e.push("getIframeHost: url is malformed: "+b);return b}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:y.POST_MESSAGE_ENABLED?15:100,ibsDeleted:[],jsonWaiting:[],jsonProcessed:[],
canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,attachIframe:function(){function b(){f=document.createElement("iframe");f.sandbox="allow-scripts allow-same-origin";f.title="Adobe ID Syncing iFrame";f.id=m.id;f.style.cssText="display: none; width: 0; height: 0;";f.src=m.url;m.newIframeCreated=!0;k();document.body.appendChild(f)}function k(){u.addListener(f,"load",function(){f.className="aamIframeLoaded";
m.iframeHasLoaded=!0;m.requestToProcess()})}var m=this,f=document.getElementById(this.id);f?"IFRAME"!==f.nodeName?(this.id+="_2",this.iframeIdChanged=!0,b()):(this.newIframeCreated=!1,"aamIframeLoaded"!==f.className?(this.originalIframeHasLoadedAlready=!1,k()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=f,this.requestToProcess())):b();this.iframe=f},requestToProcess:function(b,k){var m=this;b&&!x.isEmptyObject(b)&&this.jsonWaiting.push([b,k]);if((this.receivedThirdPartyCookiesNotification||
!y.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var f=this.jsonWaiting.shift();this.process(f[0],f[1]);this.requestToProcess()}this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){m.messageSendingInterval=y.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},processSyncOnPage:function(b){var k,m,f;if((k=b.ibs)&&k instanceof Array&&(m=k.length))for(b=
0;b<m;b++)f=k[b],f.syncOnPage&&this.checkFirstPartyCookie(f,"","syncOnPage")},process:function(b,k){var m=encodeURIComponent,f,a,d,e,c,h;k===Object(k)&&(h=u.encodeAndBuildRequest(["",k.dpid||"",k.dpuuid||""],","));if((f=b.dests)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=[m("dests"),m(e.id||""),m(e.y||""),m(e.c||"")],this.addMessage(c.join("|"));if((f=b.ibs)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=[m("ibs"),m(e.id||""),m(e.tag||""),u.encodeAndBuildRequest(e.url||
[],","),m(e.ttl||""),"",h,e.fireURLSync?"true":"false"],e.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(c.join("|")):e.fireURLSync&&this.checkFirstPartyCookie(e,c.join("|")));if((f=b.dpcalls)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=e.callback||{},c=[c.obj||"",c.fn||"",c.key||"",c.tag||"",c.url||""],c=[m("dpm"),m(e.id||""),m(e.tag||""),u.encodeAndBuildRequest(e.url||[],","),m(e.ttl||""),u.encodeAndBuildRequest(c,","),h],this.addMessage(c.join("|"));this.jsonProcessed.push(b)},
checkFirstPartyCookie:function(b,k,a){var f=(a="syncOnPage"===a?!0:!1)?y.FIRST_PARTY_SYNCS_ON_PAGE:y.FIRST_PARTY_SYNCS,d=this.getOnPageSyncData(f),e=!1,c=!1,h=Math.ceil((new Date).getTime()/y.MILLIS_PER_DAY);d?(d=d.split("*"),c=this.pruneSyncData(d,b.id,h),e=c.dataPresent,c=c.dataValid,e&&c||this.fireSync(a,b,k,d,f,h)):(d=[],this.fireSync(a,b,k,d,f,h))},getOnPageSyncData:function(b){var k=q.adms.instance;return k&&"function"===typeof k.idSyncGetOnPageSyncInfo?k.idSyncGetOnPageSyncInfo():u.getDilCookieField(b)},
pruneSyncData:function(b,k,a){var f=!1,d=!1,e,c,h;if(b instanceof Array)for(c=0;c<b.length;c++)e=b[c],h=parseInt(e.split("-")[1],10),e.match("^"+k+"-")?(f=!0,a<h?d=!0:(b.splice(c,1),c--)):a>=h&&(b.splice(c,1),c--);return{dataPresent:f,dataValid:d}},manageSyncsSize:function(b){if(b.join("*").length>this.MAX_SYNCS_LENGTH)for(b.sort(function(b,a){return parseInt(b.split("-")[1],10)-parseInt(a.split("-")[1],10)});b.join("*").length>this.MAX_SYNCS_LENGTH;)b.shift()},fireSync:function(b,k,a,f,d,e){function c(b,
k,a,f){return function(){h.onPagePixels[b]=null;var m=h.getOnPageSyncData(a),d=[];if(m){var m=m.split("*"),e,c,g;e=0;for(c=m.length;e<c;e++)g=m[e],g.match("^"+k.id+"-")||d.push(g)}h.setSyncTrackingData(d,k,a,f)}}var h=this;if(b){if("img"===k.tag){b=k.url;a=y.IS_HTTPS?"https:":"http:";var g,l,n;f=0;for(g=b.length;f<g;f++){l=b[f];n=/^\/\//.test(l);var r=new Image;u.addListener(r,"load",c(this.onPagePixels.length,k,d,e));r.src=(n?a:"")+l;this.onPagePixels.push(r)}}}else this.addMessage(a),this.setSyncTrackingData(f,
k,d,e)},addMessage:function(b){var k=encodeURIComponent,k=w?k("---destpub-debug---"):k("---destpub---");this.messages.push(k+b)},setSyncTrackingData:function(b,k,a,f){b.push(k.id+"-"+(f+Math.ceil(k.ttl/60/24)));this.manageSyncsSize(b);u.setDilCookieField(a,b.join("*"))},sendMessages:function(){var b=this,k;this.messages.length?(k=this.messages.shift(),DIL.xd.postMessage(k,this.url,this.iframe.contentWindow),this.messagesPosted.push(k),setTimeout(function(){b.sendMessages()},this.messageSendingInterval)):
this.sendingMessages=!1},receiveMessage:function(b){var k=/^---destpub-to-parent---/;"string"===typeof b&&k.test(b)&&(k=b.replace(k,"").split("|"),"canSetThirdPartyCookies"===k[0]&&(this.canSetThirdPartyCookies="true"===k[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(b))}},K={traits:function(b){x.isValidPdata(b)&&(s.sids instanceof Array||(s.sids=[]),u.extendArray(s.sids,b));return this},pixels:function(b){x.isValidPdata(b)&&(s.pdata instanceof
Array||(s.pdata=[]),u.extendArray(s.pdata,b));return this},logs:function(b){x.isValidLogdata(b)&&(s.logdata!==Object(s.logdata)&&(s.logdata={}),u.extendObject(s.logdata,b));return this},customQueryParams:function(b){x.isEmptyObject(b)||u.extendObject(s,b,q.reservedKeys);return this},signals:function(b,k){var a,f=b;if(!x.isEmptyObject(f)){if(k&&"string"===typeof k)for(a in f={},b)b.hasOwnProperty(a)&&(f[k+a]=b[a]);u.extendObject(s,f,q.reservedKeys)}return this},declaredId:function(b){q.declaredId.setDeclaredId(b,
"request");return this},result:function(b){"function"===typeof b&&(s.callback=b);return this},afterResult:function(b){"function"===typeof b&&(s.postCallbackFn=b);return this},useImageRequest:function(){s.useImageRequest=!0;return this},clearData:function(){s={};return this},submit:function(){D.submitRequest(s);s={};return this},getPartner:function(){return h},getContainerNSID:function(){return l},getEventLog:function(){return e},getState:function(){var b={},k={};u.extendObject(b,q,{callbackPrefix:!0,
useJSONP:!0,registerRequest:!0});u.extendObject(k,z,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:a,pendingRequest:s,otherRequestInfo:b,destinationPublishingInfo:k}},idSync:function(b){if(B)return"Error: id syncs have been disabled";if(b!==Object(b)||"string"!==typeof b.dpid||!b.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof b.url||!b.url.length)return"Error: config.url is empty";var k=b.url,a=b.minutesToLive,f=encodeURIComponent,
d,k=k.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof a)a=20160;else if(a=parseInt(a,10),isNaN(a)||0>=a)return"Error: config.minutesToLive needs to be a positive number";d=u.encodeAndBuildRequest(["",b.dpid,b.dpuuid||""],",");b=["ibs",f(b.dpid),"img",f(k),a,"",d];z.addMessage(b.join("|"));q.firstRequestHasFired&&z.requestToProcess();return"Successfully queued"},aamIdSync:function(b){if(B)return"Error: id syncs have been disabled";if(b!==Object(b)||"string"!==typeof b.dpuuid||!b.dpuuid.length)return"Error: config or config.dpuuid is empty";
b.url="//dpm.demdex.net/ibs:dpid="+b.dpid+"&dpuuid="+b.dpuuid;return this.idSync(b)},passData:function(b){if(x.isEmptyObject(b))return"Error: json is empty or not an object";z.ibsDeleted.push(b.ibs);delete b.ibs;D.defaultCallback(b);return b},getPlatformParams:function(){return q.platformParams},getEventCallConfigParams:function(){var b=q,k=b.modStatsParams,a=b.platformParams,f;if(!k){k={};for(f in a)a.hasOwnProperty(f)&&!b.nonModStatsParams[f]&&(k[f.replace(/^d_/,"")]=a[f]);b.modStatsParams=k}return k}},
D={corsMetadata:function(){var b="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?b="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?b="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:b,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===
this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(b){q.registerRequest(D.createQueuedRequest(b));return!0},createQueuedRequest:function(b){var a=q,d,f=b.callback,e="img",c;if(!x.isEmptyObject(p)){var h,g,n;for(h in p)p.hasOwnProperty(h)&&(g=p[h],null!=g&&""!==g&&h in b&&!(g in b||g in q.reservedKeys)&&(n=b[h],null!=n&&""!==n&&(b[g]=n)))}x.isValidPdata(b.sids)||(b.sids=[]);x.isValidPdata(b.pdata)||(b.pdata=[]);x.isValidLogdata(b.logdata)||(b.logdata={});
b.logdataArray=u.convertObjectToKeyValuePairs(b.logdata,"=",!0);b.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof f&&(f=this.defaultCallback);a.useJSONP=!0!==b.useImageRequest;a.useJSONP&&(e="script",d=a.callbackPrefix+"_"+l+"_"+(new Date).getTime());a=this.makeRequestSrcData(b,d);P&&!F||!(c=this.getCORSInstance())||(e="cors");return{tag:e,src:a.src,corsSrc:a.corsSrc,internalCallbackName:d,callbackFn:f,postCallbackFn:b.postCallbackFn,useImageRequest:!!b.useImageRequest,requestData:b,
corsInstance:c,corsPostData:a.corsPostData}},defaultCallback:function(b,a){z.processSyncOnPage(b);var d,f,e,c,h,g,l,r,w;if((d=b.stuff)&&d instanceof Array&&(f=d.length))for(e=0;e<f;e++)if((c=d[e])&&c===Object(c)){h=c.cn;g=c.cv;l=c.ttl;if("undefined"===typeof l||""===l)l=Math.floor(u.getMaxCookieExpiresInMinutes()/60/24);r=c.dmn||"."+document.domain.replace(/^www\./,"");w=c.type;h&&(g||"number"===typeof g)&&("var"!==w&&(l=parseInt(l,10))&&!isNaN(l)&&u.setCookie(h,g,1440*l,"/",r,!1),J.stuffed[h]=g)}d=
b.uuid;x.isPopulatedString(d)&&!x.isEmptyObject(n)&&(f=n.path,"string"===typeof f&&f.length||(f="/"),e=parseInt(n.days,10),isNaN(e)&&(e=100),u.setCookie(n.name||"aam_did",d,1440*e,f,n.domain||"."+document.domain.replace(/^www\./,""),!0===n.secure));t||q.abortRequests||z.requestToProcess(b,a)},makeRequestSrcData:function(b,a){b.sids=x.removeEmptyArrayValues(b.sids||[]);b.pdata=x.removeEmptyArrayValues(b.pdata||[]);var d=q,f=d.platformParams,e=u.encodeAndBuildRequest(b.sids,","),c=u.encodeAndBuildRequest(b.pdata,
","),g=(b.logdataArray||[]).join("&");delete b.logdataArray;var n=y.IS_HTTPS?"https://":"http://",r=d.declaredId.getDeclaredIdQueryString(),w=d.adms.instance?d.adms.getCustomerIDsQueryString(d.adms.getCustomerIDs()):"",p;p=[];var s,t,v,A;for(s in b)if(!(s in d.reservedKeys)&&b.hasOwnProperty(s))if(t=b[s],s=encodeURIComponent(s),t instanceof Array)for(v=0,A=t.length;v<A;v++)p.push(s+"="+encodeURIComponent(t[v]));else p.push(s+"="+encodeURIComponent(t));p=p.length?"&"+p.join("&"):"";e="d_nsid="+f.d_nsid+
r+w+(e.length?"&d_sid="+e:"")+(c.length?"&d_px="+c:"")+(g.length?"&d_ld="+encodeURIComponent(g):"");f="&d_rtbd="+f.d_rtbd+"&d_jsonv="+f.d_jsonv+"&d_dst="+f.d_dst;n=n+h+".demdex.net/event";c=d=n+"?"+e+(d.useJSONP?f+"&d_cb="+(a||""):"")+p;2048<d.length&&(d=d.substring(0,2048).substring(0,d.lastIndexOf("&")));return{corsSrc:n+"?"+(O?"testcors=1&d_nsid="+l+"&":"")+"_ts="+(new Date).getTime(),src:d,originalSrc:c,corsPostData:e+f+p,isDeclaredIdCall:""!==r}},fireRequest:function(b){if("img"===b.tag)this.fireImage(b);
else{var a=q.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===b.tag?this.fireScript(b,a):"cors"===b.tag&&this.fireCORS(b,a)}},fireImage:function(b){var a=q,c,f;a.abortRequests||(a.firing=!0,c=new Image(0,0),a.sent.push(b),c.onload=function(){a.firing=!1;a.fired.push(b);a.num_of_img_responses++;a.registerRequest()},f=function(f){d="imgAbortOrErrorHandler received the event of type "+f.type;e.push(d);a.abortRequests=!0;a.firing=!1;a.errored.push(b);
a.num_of_img_errors++;a.registerRequest()},c.addEventListener?(c.addEventListener("error",f,!1),c.addEventListener("abort",f,!1)):c.attachEvent&&(c.attachEvent("onerror",f),c.attachEvent("onabort",f)),c.src=b.src)},fireScript:function(b,a){var c=this,f=q,g,l,n=b.src,r=b.postCallbackFn,w="function"===typeof r,p=b.internalCallbackName;f.abortRequests||(f.firing=!0,window[p]=function(c){try{c!==Object(c)&&(c={});B&&(z.ibsDeleted.push(c.ibs),delete c.ibs);var m=b.callbackFn;f.firing=!1;f.fired.push(b);
f.num_of_jsonp_responses++;m(c,a);w&&r(c,a)}catch(g){g.message="DIL jsonp callback caught error with message "+g.message;d=g.message;e.push(d);g.filename=g.filename||"dil.js";g.partner=h;DIL.errorModule.handleError(g);try{m({error:g.name+"|"+g.message},a),w&&r({error:g.name+"|"+g.message},a)}catch(n){}}finally{f.requestRemoval({script:l,callbackName:p}),f.registerRequest()}},M||F?(f.firing=!1,f.requestRemoval({script:"no script created",callbackName:p})):(l=document.createElement("script"),l.addEventListener&&
l.addEventListener("error",function(a){f.requestRemoval({script:l,callbackName:p});d="jsonp script tag error listener received the event of type "+a.type+" with src "+n;c.handleScriptError(d,b)},!1),l.type="text/javascript",l.src=n,g=DIL.variables.scriptNodeList[0],g.parentNode.insertBefore(l,g)),f.sent.push(b),f.declaredId.declaredId.request=null)},fireCORS:function(b,a){var c=this,f=q,g=this.corsMetadata.corsType,l=b.corsSrc,n=b.corsInstance,r=b.corsPostData,p=b.postCallbackFn,w="function"===typeof p;
if(!f.abortRequests&&!R){f.firing=!0;try{n.open("post",l,!0),"XMLHttpRequest"===g&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var g;try{if(g=JSON.parse(this.responseText),g!==Object(g)){c.handleCORSError(b,a,"Response is not JSON");break a}}catch(l){c.handleCORSError(b,a,"Error parsing response as JSON");break a}B&&(z.ibsDeleted.push(g.ibs),delete g.ibs);try{var n=b.callbackFn;
f.firing=!1;f.fired.push(b);f.num_of_cors_responses++;n(g,a);w&&p(g,a)}catch(r){r.message="DIL handleCORSResponse caught error with message "+r.message;d=r.message;e.push(d);r.filename=r.filename||"dil.js";r.partner=h;DIL.errorModule.handleError(r);try{n({error:r.name+"|"+r.message},a),w&&p({error:r.name+"|"+r.message},a)}catch(V){}}finally{f.registerRequest()}}}),n.onerror=function(){c.handleCORSError(b,a,"onerror")},n.ontimeout=function(){c.handleCORSError(b,a,"ontimeout")},n.send(r)}catch(s){this.handleCORSError(b,
a,"try-catch")}f.sent.push(b);f.declaredId.declaredId.request=null}},handleCORSError:function(b,a,c){q.num_of_cors_errors++;q.corsErrorSources.push(c);"ontimeout"===c||F||(b.tag="script",this.fireScript(b,a))},handleScriptError:function(b,a){q.num_of_jsonp_errors++;this.handleRequestError(b,a)},handleRequestError:function(b,a){var c=q;e.push(b);c.abortRequests=!0;c.firing=!1;c.errored.push(a);c.registerRequest()}},x={isValidPdata:function(b){return b instanceof Array&&this.removeEmptyArrayValues(b).length?
!0:!1},isValidLogdata:function(b){return!this.isEmptyObject(b)},isEmptyObject:function(b){if(b!==Object(b))return!0;for(var a in b)if(b.hasOwnProperty(a))return!1;return!0},removeEmptyArrayValues:function(b){for(var a=0,c=b.length,f,d=[],a=0;a<c;a++)f=b[a],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(f);return d},isPopulatedString:function(b){return"string"===typeof b&&b.length}},u={addListener:function(){if(document.addEventListener)return function(b,a,c){b.addEventListener(a,function(b){"function"===
typeof c&&c(b)},!1)};if(document.attachEvent)return function(b,a,c){b.attachEvent("on"+a,function(b){"function"===typeof c&&c(b)})}}(),convertObjectToKeyValuePairs:function(b,a,c){var f=[],d,e;a||(a="=");for(d in b)b.hasOwnProperty(d)&&(e=b[d],"undefined"!==typeof e&&null!==e&&""!==e&&f.push(d+a+(c?encodeURIComponent(e):e)));return f},encodeAndBuildRequest:function(b,a){return this.map(b,function(b){return encodeURIComponent(b)}).join(a)},map:function(b,a){if(Array.prototype.map)return b.map(a);if(void 0===
b||null===b)throw new TypeError;var c=Object(b),d=c.length>>>0;if("function"!==typeof a)throw new TypeError;for(var e=Array(d),g=0;g<d;g++)g in c&&(e[g]=a.call(a,c[g],g,c));return e},filter:function(b,a){if(!Array.prototype.filter){if(void 0===b||null===b)throw new TypeError;var c=Object(b),d=c.length>>>0;if("function"!==typeof a)throw new TypeError;for(var e=[],g=0;g<d;g++)if(g in c){var h=c[g];a.call(a,h,g,c)&&e.push(h)}return e}return b.filter(a)},getCookie:function(b){b+="=";var a=document.cookie.split(";"),
c,d,e;c=0;for(d=a.length;c<d;c++){for(e=a[c];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return null},setCookie:function(b,a,c,d,e,g){var h=new Date;c&&(c*=6E4);document.cookie=b+"="+encodeURIComponent(a)+(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(g?";secure":"")},extendArray:function(b,a){return b instanceof Array&&a instanceof Array?(Array.prototype.push.apply(b,
a),!0):!1},extendObject:function(b,a,c){var d;if(b===Object(b)&&a===Object(a)){for(d in a)!a.hasOwnProperty(d)||!x.isEmptyObject(c)&&d in c||(b[d]=a[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60},getCookieField:function(b,a){var c=this.getCookie(b),d=decodeURIComponent;if("string"===typeof c){var c=c.split("|"),e,g;e=0;for(g=c.length-1;e<g;e++)if(d(c[e])===a)return d(c[e+1])}return null},getDilCookieField:function(b){return this.getCookieField(y.DIL_COOKIE_NAME,
b)},setCookieField:function(b,a,c){var d=this.getCookie(b),e=!1,g=encodeURIComponent;a=g(a);c=g(c);if("string"===typeof d){var d=d.split("|"),h,g=0;for(h=d.length-1;g<h;g++)if(d[g]===a){d[g+1]=c;e=!0;break}e||(g=d.length,d[g]=a,d[g+1]=c)}else d=[a,c];this.setCookie(b,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(b,a){return this.setCookieField(y.DIL_COOKIE_NAME,b,a)},getDomain:function(b){!b&&window.location&&(b=window.location.hostname);if(b)if(/^[0-9.]+$/.test(b))b=
"";else{var a=b.split("."),c=a.length-1,d=c-1;1<c&&2>=a[c].length&&(2===a[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+a[c]+","))&&d--;if(0<d)for(b="";c>=d;)b=a[c]+(b?".":"")+b,c--}return b}};"error"===h&&0===l&&u.addListener(window,"load",function(){DIL.windowLoaded=!0});var S=!1,H=function(){S||(S=!0,q.registerRequest(),U(),t||q.abortRequests||z.attachIframe(),q.readyToRemove=!0,q.requestRemoval())},U=function(){t||setTimeout(function(){N||q.firstRequestHasFired||("function"===typeof I?
K.afterResult(I).submit():K.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};C=document;"error"!==h&&(DIL.windowLoaded?H():"complete"!==C.readyState&&"loaded"!==C.readyState?u.addListener(window,"load",function(){DIL.windowLoaded=!0;H()}):(DIL.windowLoaded=!0,H()));if("error"!==h)try{DIL.xd.receiveMessage(function(b){z.receiveMessage(b.data)},z.getIframeHost(z.url))}catch(W){}q.declaredId.setDeclaredId(r,"init");q.processVisitorAPI();this.api=K;this.getStuffedVariable=function(b){var a=J.stuffed[b];
a||"number"===typeof a||(a=u.getCookie(b))||"number"===typeof a||(a="");return a};this.validators=x;this.helpers=u;this.constants=y;this.log=e;T&&(this.pendingRequest=s,this.requestController=q,this.setDestinationPublishingUrl=g,this.destinationPublishing=z,this.requestProcs=D,this.variables=J,this.callWindowLoadFunctions=H)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",
c,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var c;if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"6.6",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){return(new Image(0,
0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,c,e){c=c+"$"+e;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var e;"string"!==typeof a&&(a="");c||(c=0);e=a+"$"+c;return e in this.dils?this.dils[e]:
Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,e){c=this.getDil(c,e);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,e){var d=1;c&&(window.postMessage?e.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(e.location=c.replace(/#.*$/,"")+"#"+ +new Date+d++ +"&"+a))},receiveMessage:function(a,c){var e;try{if(window.postMessage)if(a&&(e=function(d){if("string"===typeof c&&d.origin!==c||"[object Function]"===
Object.prototype.toString.call(c)&&!1===c(d.origin))return!1;a(d)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",e,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",e)}catch(d){}}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,
typeerror:15019,urierror:15020},e=!1;return{activate:function(){e=!0},handleError:function(d){if(!e)return"DIL error module has not been activated";d!==Object(d)&&(d={});var g=d.name?(d.name+"").toLowerCase():"",h=[];d={name:g,filename:d.filename?d.filename+"":"",partner:d.partner?d.partner+"":"no_partner",site:d.site?d.site+"":document.location.href,message:d.message?d.message+"":""};h.push(g in c?c[g]:c.noerrortypedefined);a.api.pixels(h).logs(d).useImageRequest().submit();return"DIL error report sent"},
pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,e){var d="";c=c||"Error caught in DIL module/submodule: ";a===Object(a)?d=c+(a.message||"err has no message"):(d=c+"err is not a valid object",a={});a.message=d;e instanceof DIL&&(a.partner=e.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=d}}});
DIL.tools.getSearchReferrer=function(a,c){var e=DIL.getDil("error"),d=DIL.tools.decomposeURI(a||document.referrer),g="",h="",l={queryParam:"q"};return(g=e.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!d.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:d.hostname,keywords:(e.helpers.extendObject(l,g),h=l.queryPattern?
(g=(""+d.search).match(l.queryPattern))?g[1]:"":d.uriParams[l.queryParam],decodeURIComponent(h||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),e=document.createElement("a");e.href=a||document.referrer;return{hash:e.hash,host:e.host.split(":").shift(),hostname:e.hostname,href:e.href,pathname:e.pathname.replace(/^\//,""),protocol:e.protocol,search:e.search,uriParams:function(a,e){c.helpers.map(e.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},e.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),e,d,g,h,l;e=0;for(g=arguments.length;e<g;e++)if(h=arguments[e],null!==h)for(d=0;d<c.length;d++)if(l=c[d],l.name===h){a[h]=l.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e,d){try{var g=this,h={name:"DIL Site Catalyst Module Error"},l=function(a){h.message=a;DIL.errorModule.handleError(h);return a};this.options=d===Object(d)?d:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return l("dilInstance is not a valid instance of DIL");h.partner=c.api.getPartner();if(a!==Object(a))return l("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var c="function"===typeof a.m_i?a.m_i("DIL"):this;if(c!==Object(c))return l("m is not an object");c.trackVars=g.constructTrackVars(e);c.d=0;c.s=a;c._t=function(){var a,c,d=","+this.trackVars+",",e=this.s,h,p=[];h=[];var t={},v=!1;if(e!==Object(e))return l("Error in m._t function: s is not an object");if(this.d){if("function"===typeof e.foreachVar)e.foreachVar(function(a,c){"undefined"!==typeof c&&(t[a]=c,v=!0)},this.trackVars);else{if(!(e.va_t instanceof Array))return l("Error in m._t function: s.va_t is not an array");
if(e.lightProfileID)(a=e.lightTrackVars)&&(a=","+a+","+e.vl_mr+",");else if(e.pe||e.linkType)a=e.linkTrackVars,e.pe&&(c=e.pe.substring(0,1).toUpperCase()+e.pe.substring(1),e[c]&&(a=e[c].trackVars)),a&&(a=","+a+","+e.vl_l+","+e.vl_l2+",");if(a){c=0;for(p=a.split(",");c<p.length;c++)0<=d.indexOf(","+p[c]+",")&&h.push(p[c]);h.length&&(d=","+h.join(",")+",")}h=0;for(c=e.va_t.length;h<c;h++)a=e.va_t[h],0<=d.indexOf(","+a+",")&&"undefined"!==typeof e[a]&&null!==e[a]&&""!==e[a]&&(t[a]=e[a],v=!0)}g.includeContextData(e,
t).store_populated&&(v=!0);v&&this.d.api.signals(t,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return h.message?h.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(t){return this.handle(t,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],e,d,g,h,l;if(a===Object(a)){e=a.names;if(e instanceof Array&&(g=e.length))for(d=0;d<g;d++)h=e[d],"string"===typeof h&&h.length&&c.push(h);a=a.iteratedNames;if(a instanceof Array&&
(g=a.length))for(d=0;d<g;d++)if(e=a[d],e===Object(e)&&(h=e.name,l=parseInt(e.maxIndex,10),"string"===typeof h&&h.length&&!isNaN(l)&&0<=l))for(e=0;e<=l;e++)c.push(h+e);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var e={},d=!1;if(a.contextData===Object(a.contextData)){var g=a.contextData,h=this.options.replaceContextDataPeriodsWith,
l=this.options.filterFromContextVariables,t={},v,p,n,w;"string"===typeof h&&h.length||(h="_");if(l instanceof Array)for(v=0,p=l.length;v<p;v++)n=l[v],this.dil.validators.isPopulatedString(n)&&(t[n]=!0);for(w in g)!g.hasOwnProperty(w)||t[w]||!(l=g[w])&&"number"!==typeof l||(w=("contextData."+w).replace(/\./g,h),c[w]=l,d=!0)}e.store_populated=d;return e}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var d={name:"DIL GA Module Error"},g="";c instanceof DIL?(this.dil=c,d.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",
d.message=g,DIL.errorModule.handleError(d));a instanceof Array&&a.length?this.arr=a:(g="gaArray is not an array or is empty",d.message=g,DIL.errorModule.handleError(d));this.tv=this.constructTrackVars(e);this.errorMessage=g}catch(h){this.handle(h,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],e,d,g,h;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){g=this.defaultTrackVars;h={};e=0;for(d=g.length;e<d;e++)h[g[e]]=
!0;this.defaultTrackVarsObj=h}else h=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(d=a.length))for(e=0;e<d;e++)g=a[e],"string"===typeof g&&g.length&&g in h&&c.push(g);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var e,d,g,h;e=0;for(d=a.length;e<d;e++)g=a[e],g instanceof Array&&g.length&&(g=[],h=a[e],g instanceof Array&&h instanceof Array&&Array.prototype.push.apply(g,h),h=g.shift(),"string"===
typeof h&&h.length&&(c[h]instanceof Array||(c[h]=[]),c[h].push(g)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,c,d){"string"===typeof c&&c.length&&this.addToSignals("c_"+c,d)},_addItem:function(a,c,d,e,
g,h){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",c);this.addToSignals("c_itemName",d);this.addToSignals("c_itemCategory",e);this.addToSignals("c_itemPrice",g);this.addToSignals("c_itemQuantity",h)},_addTrans:function(a,c,d,e,g,h,l,t){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",c);this.addToSignals("c_transTotal",d);this.addToSignals("c_transTax",e);this.addToSignals("c_transShipping",g);this.addToSignals("c_transCity",h);this.addToSignals("c_transState",
l);this.addToSignals("c_transCountry",t)},_trackSocial:function(a,c,d,e){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",c);this.addToSignals("c_socialTarget",d);this.addToSignals("c_socialPagePath",e)}},e=this.tv,d,g,h,l,t,v;d=0;for(g=e.length;d<g;d++)if(h=e[d],a.hasOwnProperty(h)&&c.hasOwnProperty(h)&&(v=a[h],v instanceof Array))for(l=0,t=v.length;l<t;l++)c[h].apply(this,v[l])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();
return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,e){try{this.callback=this.dil=null,this.errorMessage=
"",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(e)?e:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(d){this.handle(d,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,e,d,g,h,l;l=!1;var t=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(e=c.length))for(a=0;a<e;a++)if((d=
c[a])&&d===Object(d)&&(g=d.cn,h=d.cv,g===this.cookieName&&this.v(h))){l=!0;break}if(l){c=h.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);d=window._gaq;a=0;for(e=c.length;a<e&&!(l=c[a].split("="),h=l[0],l=l[1],this.v(h)&&this.v(l)&&d.push(["_setCustomVar",t++,h,l,1]),t>this.LIMIT);a++);this.errorMessage=1<t?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},
submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=e===Object(e)?e:{};e={name:"DIL Peer39 Module Error"};var d=[],g="";this.isSecurePageButNotEnabled(document.location.protocol)&&(g="Module has not been enabled for a secure page",d.push(g),e.message=g,DIL.errorModule.handleError(e));c instanceof
DIL?(this.dil=c,e.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",d.push(g),e.message=g,DIL.errorModule.handleError(e));"string"===typeof a&&a.length?this.aid=a:(g="aid is not a string or is empty",d.push(g),e.message=g,DIL.errorModule.handleError(e));this.errorMessage=d.join("\n")}catch(h){this.handle(h,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),e=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var c=a.processData(p39_KVP_Short("c_p","|").split("|"));c.hasSignals&&a.dil.api.signals(c.signals).submit()}catch(e){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};e.parentNode.insertBefore(c,e);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,e,d,g,h={},l=
!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,e=a.length;c<e;c++)d=a[c].split("="),g=d[0],d=d[1],g&&isFinite(d)&&!isNaN(parseInt(d,10))&&(h[g]instanceof Array||(h[g]=[]),h[g].push(d),l=!0);return{hasSignals:l,signals:h}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,e=c.scriptId,d=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof e&&e.length?e:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof d&&d.length?a.src=d:(a.src=document.location.protocol+
"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};
//AppMeasurement_Module_AudienceManagement library END

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.8.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.8.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var n=h.AppMeasurement.Ob;n||(n=null);var p=h,l,r;try{for(l=p.parent,r=p.location;l&&l.location&&r&&""+l.location!=""+r&&p.location&&""+l.location!=""+p.location&&l.location.host==r.host;)p=l,l=p.parent}catch(s){}a.P=function(a){try{console.log(a)}catch(b){}};a.La=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.vb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.vb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ia=function(c,b,d){if(a.Ea)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ea=1;a[d.m].apply(a,d.a);a.Ea=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.na.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].Mb,f=a[e].Lb));k&&(k=","+k+","+a.G.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",k,m,h,t,l=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+k+","))){h=!1;if(l)for(m=0;m<l.length;m++)k.substring(0,l[m].length)==l[m]&&(h=!0);if(!h&&(""==g&&(g+="&"+c+"."),m=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)m=k.substring(0,h),h=(e?e:"")+m+".",l||(l=[]),l.push(h),g+=a.r(m,b,d,f,h);else if("boolean"==typeof m&&(m=m?"true":"false"),m){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),t=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k=
"v0";break;default:a.La(t)&&("prop"==h?k="c"+t:"eVar"==h?k="v"+t:"list"==h?k="l"+t:"hier"==h&&(k="h"+t,m=m.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(m)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.yb=function(){var c="",b,d,f,e,g,k,m,h,l="",p="",q=e="";if(a.lightProfileID)b=a.O,(l=a.lightTrackVars)&&(l=","+l+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)l=a.linkTrackVars,p=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(l=a[e].Mb,p=a[e].Lb));
l&&(l=","+l+","+a.G.join(",")+",");p&&(p=","+p+",",l&&(l+=",events,"));a.events2&&(q+=(""!=q?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=n;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,
4);k=e.substring(4);!g&&"events"==e&&q&&(g=q,q="");if(g&&(!l||0<=l.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),
g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":q&&(g+=(""!=g?",":"")+q);if(p)for(k=
g.split(","),g="",f=0;f<k.length;f++)m=k[f],h=m.indexOf("="),0<=h&&(m=m.substring(0,h)),h=m.indexOf(":"),0<=h&&(m=m.substring(0,h)),0<=p.indexOf(","+m+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],l,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],l,e));g="";break;default:a.La(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Rb||"undefined"!=""+a.Hb&&"HTML"!=(""+a.Hb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ha=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.D(c),d,f,e="",
g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ha(c),e)?{id:e.substring(0,100),type:g}:0};a.Pb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Gb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var m=d.onclick?""+d.onclick:"";if(0<=m.indexOf(".tl(")||0<=m.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&
(e=a.Ha(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var l=0,p=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(m=e.toLowerCase(),g=m.indexOf("?"),k=m.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(m=m.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(n=g[k])&&m.substring(m.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(m=e.toLowerCase(),a.Ka(m)&&(a.linkInternalFilters||(a.linkInternalFilters=
h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),l=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)n=g[k],0<=m.indexOf(n)&&(p=1);p?l&&(f="e"):l||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.zb=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,m,h,e=0;if(g)for(k=0;k<g.length;k++)m=g[k].split("="),f=a.unescape(m[0]).split(","),
m=a.unescape(m[1]),b[m]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.r("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(m in b)if(!Object.prototype[m])for(h=0;h<f.length;h++)for(e&&(g=b[m].join(","),g==a.account&&(a.e+=("&"!=m.charAt(0)?"&":"")+m,b[m]=[],d=1)),k=0;k<b[m].length;k++)g=b[m][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=m.charAt(0)?"&":"")+m+"&u=0"),b[m].splice(k,
1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(m in b)!Object.prototype[m]&&0<k&&0<b[m].length&&(e+=(e?"&":"")+a.escape(b[m].join(","))+"="+a.escape(m),k--);a.cookieWrite("s_sq",e)}}}return c};a.Ab=function(){if(!a.Kb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",h="1.2",l=a.cookieWrite("s_cc","true",0)?"Y":"N",n="",q="";if(c.setUTCDate&&(h="1.3",(0).toPrecision&&(h="1.5",c=[],c.forEach))){h="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(h="1.7",
c.reduce&&(h="1.8",h.trim&&(h="1.8.1",Date.parse&&(h="1.8.2",Object.create&&(h="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),n=a.b.Qb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(u){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=h;a.javaEnabled=e;a.cookiesEnabled=l;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=n;a.Kb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.cb=function(){return d.hb};d.ib=function(b){if(d.hb=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.cb,set:d.ib}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};
a.R=function(c,b){var d,f,e,g,k,h;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]=k}};a.Ua=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ub=function(a){var b,d,f,e,g,k=0,h,l="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,
"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?l+=(l?"&":"")+e:n+=(n?"&":"")+e;l&&n?h=l+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+
"?"+h}return a};a.$a=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.I=!1;a.kb=function(){a.I=!0;a.j()};a.ca=!1;a.V=!1;a.gb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.lb=function(c){a.visitorOptedOut=c;a.W=!0;
a.j()};a.Z=!1;a.S=!1;a.Wa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Ya=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Xa=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.Za=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.H=!1;a.xa=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.I||(a.$a(a.kb)?a.I=!0:a.ea=!0);if(a.ea&&!a.I)return!1;b&&
b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.gb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.lb]),a.visitorOptedOut!=n&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Wa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ya]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Xa]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.H||(a.Za(a.xa)?a.H=!0:
a.da=!0);a.da&&!a.H&&(c=!1);return c};a.o=n;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.pb=c;f.ob=b;f.mb=d;a.o==n&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.jb(),a.o!=n))for(;0<a.o.length;)c=a.o.shift(),c.ob.apply(c.pb,c.mb)};a.jb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.eb=function(c){var b,d,f=n,e=n;if(!a.isReadyToTrack()){b=[];if(c!=n)for(d in f={},c)f[d]=c[d];e={};a.Ua(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.wb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.eb(c)||(b&&a.R(b),c&&(d={},a.Ua(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.wb()),a.Gb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=
a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=h.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Va||(a.referrer=p.document.referrer),a.Va=1,a.referrer=a.ub(a.referrer),a.p("_g")),a.zb()&&!a.abort&&(a.Ab(),g+=a.yb(),a.Fb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=
h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPreTrackCallback")};a.bb=function(c){a.wa(a.za,c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPostTrackCallback")};
a.ab=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.P(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=
a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Fb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,
f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Jb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.bb(d);
a.sb(d);a.ka()};a.Ta=/{(%?)(.*?)(%?)}/;a.Nb=RegExp(a.Ta.source,"g");a.tb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Nb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ta),l="";"%"==h[1]&&"timezone_offset"==h[2]?l=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(l=a.xb());d.c=d.c.replace(g,a.escape(l))}}};a.xb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));
return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.tb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.sb=function(c){a.i||a.Bb();a.i.push(c);a.ma=a.C();a.Ra()};a.Bb=function(){a.i=a.Db();a.i||(a.i=[])};a.Db=function(){var c,b;if(a.ra()){try{(b=h.localStorage.getItem(a.pa()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ia=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.va(),a.q))return;a.Ja=n;if(a.qa)a.ma>a.N&&a.Pa(a.i),a.ua(500);else{var c=a.nb();if(0<c)a.ua(c);else if(c=a.Fa())a.q=1,a.Eb(c),a.Ib(c)}};a.ua=function(c){a.Ja||(c||(c=0),a.Ja=setTimeout(a.ka,c))};a.nb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Oa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Fa=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.P(b)}};a.fb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var q;try{q=JSON.parse('{"x":"y"}')}catch(u){q=null}q&&"y"==q.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.X=function(a){return h.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Ib=function(c){var b,
d,f;a.fb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Sa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=n}));b.Da=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.va=function(){a.ab(c);b.Da();a.rb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ga=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.qb);a.q=0;a.ma>a.N&&a.Pa(a.i);
a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ga())};a.Oa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ma)try{f.removeChild(a.Ma)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ma=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.va():(a.trackOffline&&
b.abort&&b.abort(),b.Ga()))},5E3);a.qb=c;a.B=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.rb=function(){if(a.ra()&&!(a.Na>a.N))try{h.localStorage.removeItem(a.pa()),a.Na=a.C()}catch(c){}};a.Pa=function(c){if(a.ra()){a.Ra();try{h.localStorage.setItem(a.pa(),h.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Ra=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Fa()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ka=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Jb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:h.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(l=0;250>=l;l++)76>l&&(a.g.push("prop"+l),a.O.push("prop"+l)),a.g.push("eVar"+l),a.O.push("eVar"+l),6>l&&a.g.push("hier"+l),4>l&&a.g.push("list"+l);l="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(l);a.G=a.G.concat(l);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Oa=0;a.ma=0;a.N=0;a.Na=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Sa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Sa=!0}}catch(w){}a.ga=function(){a.ha&&(h.clearTimeout(a.ha),a.ha=n);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Qa=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var k=a.M=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ia();a.track();if(f<a.Ia()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ka(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(n){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(p){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
h.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Qa,30)};a.Qa();a.loadModule("ActivityMap")}
function s_gi(a){var h,n=window.s_c_il,p,l,r=a.split(","),s,q,u=0;if(n)for(p=0;!u&&p<n.length;){h=n[p];if("s_c"==h._c&&(h.account||h.oun))if(h.account&&h.account==a)u=1;else for(l=h.account?h.account:h.oun,l=h.allAccounts?h.allAccounts:l.split(","),s=0;s<r.length;s++)for(q=0;q<l.length;q++)r[s]==l[q]&&(u=1);p++}u||(h=new AppMeasurement);h.setAccount?h.setAccount(a):h.sa&&h.sa(a);return h}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,h=a.s_giq,n,p,l;if(h)for(n=0;n<h.length;n++)p=h[n],l=s_gi(p.oun),l.setAccount(p.un),l.setTagContainer(p.tagContainerName);a.s_giq=0}s_pgicq();
/* End AppMeasurement */

var old_s_gi = s_gi;
s_gi = function () {
    function detectEnvironment(){
        var environment="swadev",
            domainList = ",southwest.com,www.southwest.com,espanol.southwest.com,global.southwest.com,espanol.global.southwest.com,travel.southwest.com,espanoltravel.southwest.com,rapidrewardsshopping.southwest.com,swabiz.com,www.swabiz.com,espanol.swabiz.com,buy.points.com,storefront.points.com,luv.southwest.com,bbcorporate.bookingbuilder.com,download.southwest.com,luv.southwest.com,",
            domainMatch = window.location.host;

        if (domainFoundInList (domainList, domainMatch)) {
            environment="swaprod";
        }
        return environment;
    }
    s.account = detectEnvironment();
    return old_s_gi (s.account);
}

AppMeasurement.getInstance = s_gi;
