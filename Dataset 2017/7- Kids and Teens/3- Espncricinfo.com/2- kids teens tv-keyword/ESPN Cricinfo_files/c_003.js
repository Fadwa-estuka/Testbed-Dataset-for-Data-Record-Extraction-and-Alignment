/** GENERATED: Sun Dec 18 21:15:56 PST 2016 **/
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============
 Adobe Visitor API for JavaScript version: 1.5.6
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(m,t){if(!m)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.5.6";var l=window,i=l.Visitor;i.version=a.version;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._c="Visitor";a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;a.pa={Ka:[]};var o=l.document,h=i.Ma;h||(h=null);var z=i.Na;z||(z=void 0);var j=i.ja;j||(j=!0);var k=i.La;k||(k=!1);a.S=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.r=function(a){var c=
"0123456789",b="",e="",f,g=8,n=10,h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*n),b+=c.substring(f,f+1),0==a&&9==f?n=3:(1==a||2==a)&&10!=n&&2>f?n=10:2<a&&(n=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.ma=function(){var a;!a&&l.location&&(a=l.location.hostname);
if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+o.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(o.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.A=function(a,c){try{"function"==typeof a?a.apply(l,c):a[1].apply(a[0],c)}catch(b){}};a.ra=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==z&&(a.g[d]=[]),a.g[d].push(c))};a.m=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.A(b.shift(),
c)}};a.j=h;a.oa=function(d,c,b){var e=0,f=0,g;if(c&&o){for(g=0;!e&&2>g;){try{e=(e=o.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(n){e=0}g++}if(!e)try{o.body&&(e=o.body)}catch(j){e=0}if(e)for(g=0;!f&&2>g;){try{f=o.createElement(0<g?"SCRIPT":"script")}catch(i){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),a.pa.Ka.push(c),b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};
a.ka=function(d){a.j!=h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.T=k;a.U=k;a.isAllowed=function(){if(!a.T&&(a.T=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.U=j;return a.U};a.a=h;a.d=h;var B=i.$a;B||(B="MC");var r=i.fb;r||(r="MCMID");var C=i.ab;C||(C="MCCIDH");var D=i.eb;D||(D="MCSYNCS");var F=i.bb;F||(F="MCIDTS");var x=i.cb;x||(x="MCOPTOUT");var A=i.Ya;A||(A="A");var p=i.Va;p||(p="MCAID");var y=i.Za;y||(y="AAM");var w=i.Xa;w||(w="MCAAMLH");var q=i.Wa;q||(q="MCAAMB");var s=
i.gb;s||(s="NONE");a.C=0;a.R=function(){if(!a.C){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.C=a.S(d)}return a.C};a.V=k;a.f=function(){if(!a.V){a.V=j;var d=a.R(),c=k,b=a.cookieRead(a.cookieName),e,f,g,n,i=new Date;a.a==h&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],
g=b[d+1],1<e.length?(n=parseInt(e[1],10),e=0<e[1].indexOf("s")):(n=0,e=k),c&&(f==C&&(g=""),0<n&&(n=i.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<n&&(a.a["expire"+f]=n+(e?"s":""),i.getTime()>=1E3*n||e&&!a.cookieRead(a.sessionCookieName))))a.d||(a.d={}),a.d[f]=j}if(!a.b(p)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(p,g))}};a.ta=function(){var d=a.R(),c,b;for(c in a.a)!Object.prototype[c]&&
a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=h&&(c||!a.d||!a.d[d])?a.a[d]:h};a.c=function(d,c,b){a.a==h&&(a.a={});a.a[d]=c;b||a.ta()};a.na=function(d,c){var b=a.b(d,c);return b?b.split("*"):h};a.sa=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Sa=function(d,c){var b=a.na(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.Ua=function(d,c,b){var e=
h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.sa(d,e,b)};a.k=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.a==h&&(a.a={});a.a["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.d||(a.d={}),a.d[d]=j):a.d&&(a.d[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.Q=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=
s)),!a||a!=s&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.ka(d);a.h!=h&&(a.h[d]=k);if(d==B){var b=a.b(r);if(!b){b="object"==typeof c&&c.mid?c.mid:a.Q(c);if(!b){if(a.v){a.getAnalyticsVisitorID(h,k,j);return}b=a.r()}a.c(r,b)}if(!b||b==s)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(y,c),a.v&&c.mid&&a.i(A,{id:c.id}));a.m(r,[b])}if(d==y&&"object"==typeof c){b=604800;c.id_sync_ttl!=z&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.b(w);e||((e=c.d_region)||
(e=c.dcs_region),e&&(a.k(w,b),a.c(w,e)));e||(e="");a.m(w,[e]);e=a.b(q);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.k(q,b),a.c(q,e);e||(e="");a.m(q,[e]);!c.error_msg&&a.t&&a.c(C,a.t)}if(d==A){b=a.b(p);b||((b=a.Q(c))?a.k(q,-1):b=s,a.c(p,b));if(!b||b==s)b="";a.m(p,[b])}a.idSyncDisableSyncs?u.ba=j:(u.ba=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,u.Ia(b));c===Object(c)&&(b=s,c.d_optout&&c.d_optout instanceof Array&&(b=c.d_optout.join(",")),e=parseInt(c.d_ottl,10),isNaN(e)&&(e=7200),a.k(x,e,!0),a.c(x,
b),a.m(x,[b]))};a.h=h;a.n=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.f(),f=a.b(d),!f&&(d==r||d==x?g=B:d==w||d==q?g=y:d==p&&(g=A),g))){if(c&&(a.h==h||!a.h[g]))a.h==h&&(a.h={}),a.h[g]=j,a.oa(g,c,function(){if(!a.b(d)){var b="";d==r?b=a.r():g==y&&(b={error_msg:"timeout"});a.i(g,b)}});a.ra(d,b);c||a.i(g,{id:s});return""}if((d==r||d==p)&&f==s)f="",e=j;b&&e&&a.A(b,[f]);return f};a._setMarketingCloudFields=function(d){a.f();a.i(B,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};
a.v=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.v=j);var b=a.s("_setMarketingCloudFields");return a.n(r,b,d,c)}return""};a.qa=function(){a.getAudienceManagerBlob()};i.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.q={};a.P=k;a.t="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=
z&&(e.authState=b.authState);a.q[c]=e}else a.q[c]={id:b};var d=a.getCustomerIDs(),e=a.b(C),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.t=a.S(f);a.t!=e&&(a.P=j,a.qa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.q)Object.prototype[c]||(b=a.q[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=z?b.authState:i.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.i(A,d)};a.setAnalyticsVisitorID=
function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?d_visid_ver="+a.version+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":
"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""));return a.n(b?r:p,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(y,d)};a.s=function(d){var c=a.audienceManagerServer,b="",e=a.b(r),f=a.b(q,j),g=a.b(p),g=g&&g!=s?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||
(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.v?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+a._in+"%5D."+
d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.s(),a.n(w,b,d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,
j)}));if(b)return b=a.s(),a.P&&a.k(q,-1),a.n(q,b,d,c)}return""};a.o="";a.u={};a.D="";a.F={};a.getSupplementalDataID=function(d,c){!a.o&&!c&&(a.o=a.r(1));var b=a.o;a.D&&!a.F[d]?(b=a.D,a.F[d]=j):b&&(a.u[d]&&(a.D=a.o,a.F=a.u,a.o=b=!c?a.r(1):"",a.u={}),b&&(a.u[d]=j));return b};i.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.s("_setMarketingCloudFields");return a.n(x,b,d,c)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=i.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.A(d,
[b==i.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==i.OptOut.GLOBAL||0<=b.indexOf(c):h):k};var v={l:!!l.postMessage,ha:1,O:864E5};a.Oa=v;a.X={postMessage:function(a,c,b){var e=1;c&&(v.l?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},K:function(a,c){var b;try{if(v.l)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?
"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var G={Y:function(){if(o.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(o.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==
typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},za:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.Ta=G;var u={ia:3E4,N:649,fa:k,id:h,I:h,aa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},e:h,url:h,Aa:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);this.e||(this.e="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?
"https://fast.":"https://");d=d+this.e+".demdex.net/dest5.html"+c;this.I=this.aa(d);this.id="destination_publishing_iframe_"+this.e+"_"+a.idSyncContainerID;return d},va:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);"string"===typeof a.B&&a.B.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.I=this.aa(a.B),this.url=a.B+d)},ba:h,H:k,M:k,w:h,hb:h,Ga:h,ib:h,L:k,z:[],Ea:[],Fa:[],ca:v.l?15:100,J:[],Ca:[],$:j,da:k,
Z:function(){function a(){e=document.createElement("iframe");e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ga=j;c();document.body.appendChild(e)}function c(){G.Y(e,"load",function(){e.className="aamIframeLoaded";b.w=j;b.p()})}this.M=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.w=j,this.p()):a();this.Ba=e},p:function(d){var c=this;d===Object(d)&&this.J.push(d);if((this.da||!v.l||
this.w)&&this.J.length)this.Ha(this.J.shift()),this.p();!a.idSyncDisableSyncs&&this.w&&this.z.length&&!this.L&&(this.fa||(this.fa=j,setTimeout(function(){c.ca=v.l?15:150},this.ia)),this.L=j,this.ea())},Ha:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),G.za(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],this.$?this.G(h.join("|")):g.fireURLSync&&this.wa(g,h.join("|"));this.Ca.push(a)},
wa:function(d,c){a.f();var b=a.b(D),e=k,f=k,g=Math.ceil((new Date).getTime()/v.O);if(b){if(b=b.split("*"),f=this.Ja(b,d.id,g),e=f.xa,f=f.ya,!e||!f)this.G(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.Da(b),a.c(D,b.join("*"))}else this.G(c),a.c(D,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},Ja:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{xa:e,ya:f}},Da:function(a){if(a.join("*").length>
this.N)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.N;)a.shift()},G:function(d){var c=encodeURIComponent;this.z.push((a.Qa?c("---destpub-debug---"):c("---destpub---"))+d)},ea:function(){var d=this,c;this.z.length?(c=this.z.shift(),a.X.postMessage(c,this.url,this.Ba.contentWindow),this.Ea.push(c),setTimeout(function(){d.ea()},this.ca)):this.L=k},K:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,
"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.$="true"===c[1]?j:k,this.da=j,this.p()),this.Fa.push(a))},Ia:function(d){this.url===h&&(this.e="string"===typeof a.W&&a.W.length?a.W:d.subdomain||"",this.url=this.Aa());d.ibs instanceof Array&&d.ibs.length&&(this.H=j);if(!a.idSyncDisable3rdPartySyncing&&(this.H||a.la)&&this.e&&"nosubdomainreturned"!==this.e&&!this.M)(i.ga||"complete"===o.readyState||"loaded"===o.readyState)&&this.Z();"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):
this.p(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},ua:function(d,c){return a.Ra||!d||c-d>v.ha}};a.Pa=u;0>m.indexOf("@")&&(m+="@AdobeOrg");a.marketingCloudOrgID=m;a.cookieName="AMCV_"+m;a.sessionCookieName="AMCVS_"+m;a.cookieDomain=a.ma();a.cookieDomain==l.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";if(t&&"object"==typeof t){for(var E in t)!Object.prototype[E]&&
(a[E]=t[E]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();E=a.b(F);var H=Math.ceil((new Date).getTime()/v.O);!a.idSyncDisableSyncs&&u.ua(E,H)&&(a.k(q,-1),a.c(F,H));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){u.va();G.Y(window,"load",function(){var d=u;i.ga=j;!a.idSyncDisable3rdPartySyncing&&(d.H||a.la)&&d.e&&"nosubdomainreturned"!==d.e&&d.url&&!d.M&&d.Z()});try{a.X.K(function(a){u.K(a.data)},u.I)}catch(I){}}}
Visitor.getInstance=function(m,t){var a,l=window.s_c_il,i;0>m.indexOf("@")&&(m+="@AdobeOrg");if(l)for(i=0;i<l.length;i++)if((a=l[i])&&"Visitor"==a._c&&a.marketingCloudOrgID==m)return a;return new Visitor(m,t)};(function(){function m(){t.ga=a}var t=window.Visitor,a=t.ja;a||(a=!0);window.addEventListener?window.addEventListener("load",m):window.attachEvent&&window.attachEvent("onload",m)})();

/*
	See documentation about new setup
	https://marketing.adobe.com/resources/help/en_US/mcvid/mcvid-setup-analytics.html
*/

var hostname = window.location.hostname;
var server = "w88.espn.com",
secureServer = "sw88.espn.com";

if(hostname.match(/\.go\./)){
	server = "w88.go.com";
	secureServer = "sw88.go.com";
}

var visitorConfig = {
	loadTimeout:30000,
	trackingServer: server, // same as s_omni.trackingServer
	trackingServerSecure: secureServer, // same as s_omni.trackingServerSecure

	// Enable CNAME support, add the following configuration variables
	marketingCloudServer: server, // same as s_omni.trackingServer
	marketingCloudServerSecure: secureServer // same as s_omni.trackingServerSecure
};

/*
cookieDomain
Required for multi-part, top-level domains where either of last 2 parts of the URL are > two characters.
The "www" prefix is not required when instantiating this variable.
Syntax: cookieDomain:"example.com.uk"

Examples:
Required: www.example.com.uk
Not required: www.example.co.uk
*/
if(hostname.match(/\.com\.../)){
	visitorConfig.cookieDomain = hostname.replace(/^(www\.|qa\.)/,'');
}


var visitor = Visitor.getInstance("EE0201AC512D2BE80A490D4C@AdobeOrg", visitorConfig);
/*
 * File: sOmni.2.js
 * Updated: Aug. 3, 2016
 * Version: AppMeasurement 1.6.1
 *
 ***************************** REQUIREMENTS *****************************
 * This file contains sOmniFuncs.4.beta.js + sOmni.2.beta.js
 * Declare "s_omni.account" variable globally (window)
 *
 * Files required by this script:
 * jQuery Library
 * jQuery pubSub Library
 * analytics.2.js (optional)
 *
 * This is the new sOmni js implementation
 * Contains setup methods attached to the (working name) "espn.track" namespace
 *
 */
;(function($,window,document) {

	window.espn = window.espn || {};

	/*
	 * Method : hasOwnProperty
	 * Custom "hasOwnProperty" Method - Solution by John Resig
	 * This method looks for an object that has a physical property and not coming from up the prototype chain --> object.hasOwnProperty
	 *
	 * Fallback: looks for an object that is iterable with properties of an object that will appear --> prop in object
	 *
	 * Parameters:
	 * >  obj - obj that is checked for properties
	 * >  prop - the key name value, we are looking for key of object
	 *
	 * Usage:
	 * ...
	 * if ( hasOwnProperty(s_omni, "prop1") ) {
	 * ...
	 *
	 */
	function hasOwnProperty (obj,prop) {
		var proto = obj.__proto__ || obj.constructor.prototype;
		return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
	}
	if (Object.prototype.hasOwnProperty) {
		hasOwnProperty = function(obj, prop) { //re-declare if prototype hasOwnProperty exists
			return obj.hasOwnProperty(prop);
		};
	}
	/*
	 * Method: isEmpty
	 * - A cross browser solution to "hasOwnProperty".validates of the value passed in is a
	 * string or an object with at least one property
	 *
	 * Validates that the string, array, object, number or boolean passed in, is not empty value
	 * if not object, check length for string, array, boolean, number
	 *
	 * Parameters:
	 * > arg - can be string, array, object, number or boolean value
	 */
	function isEmpty (arg) {
		var bool = true;
		if(arg) {
			var key, isObj = ((typeof arg === "object") && !(arg instanceof Array));
			if(isObj) {
				for(key in arg){
					if(hasOwnProperty(arg,key)) { //custom method see comments at bottom
						bool = false;
						break;
					}
				}
			} else {
				bool = (arg && arg.length === 0);
			}
		}
		return bool;
	}

	// PRIVATE VARIABLES
	/*
	 * Variable: _omniMap
	 * - omniture variable map properties with property values that represent, omni props to
	 * update (colon delimited values)
	 */
	var _omniMap = {
	 /*
		site: "prop1",
		section: "channel",
		storyName: "storyInfo",
		sections : "prop5",
		storyId: "storyInfo",
		linkPos: "linkGroup",
		linkId: "linkGroup",
	 */
		contentType : "prop4",
		pageName : "pageName",
		pageType : "pageType",
		linkGroup : "linkGroup:prop9:eVar74",
		gameInfo : "prop14:eVar14",
		storyInfo : "prop15:eVar15",
		sportsInfo : "prop32:eVar32",
		assetInfo : "prop3:eVar2",
		abTest : "prop19:eVar24",
		source : "prop13",
		countryRegion : "prop16:eVar12",
		events : "events",
		lang : "prop17:eVar9",
		columnist : "prop23:eVar10",
		sport : "prop25",
		convrSport : "eVar19",
		league : "prop26:eVar21",
		loginStatus : "prop29",
		insiderStatus : "prop11",
		birthAge : "prop21",
		gender : "prop22",
		userKey : "eVar7",
		premium : "prop30",
		state : "state",
		zip : "zip",
		srchKwd : "prop7",
		srchNumResults : "prop8:eVar41",
		srchTerm : "eVar4",
		srchType : "eVar5",
		srchPageNum : "eVar41",
		srchNumDims : "eVar42",
		srchSortKey : "eVar43",
		products : "products",
		purchaseId : "purchaseID",
		transactionId : "transactionID",
		regType : "eVar23",
		personalize : "eVar6",
		campaign : "campaign",
		convoLocal : "prop20",
		convoType : "prop33",
		convoSport : "prop34",
		espn3ContentType : "eVar11",
		espn3Affiliate : "prop42:eVar17",
		espn3AffiliateId : "prop43:eVar32",
		engagementTypeId : "eVar8",
		espnGamecast : "prop44",
		orientation : "prop38",
		userAgent : "prop37:eVar37",
		deviceProp : "eVar28",
		deviceInfo : "eVar38",
		trackType : "exec",
		socialShare : "prop72:eVar72",
		abTestLabel : "eVar73",
		fantasyPersonalize : "eVar70",
		subscription : "eVar68",
		linkName : "linkName",
		navMethod : "eVar44",
		linkType : "linkType",
		convPageName : "eVar13",
		watchespn : "prop45",
		couponCode : "eVar51",
		timeParting : "eVar1",
		appReferral : "eVar52",
		gameState: "eVar69",
		trackingName: "eVar20"
	},
	/*
	 * Variable: _ignoreMap
	 * - omniture string variables used to ignore properties names that should not be converted
	 */
	_ignoreMap = "account,site,section,sections,storyName,storyId",
	/*
	 * Variable: _qparams
	 * - used to hold query parameters
	 */
	_qparams = {},
	/*
	 *	Variable: _appMap
	 *	Used to dynamically replace some mobile report suite ids for application report suite ids
	 */
	_appMap = {
		'fc' : ['wdgwespmafcapps',false,'ma:espn:espnfc'],
		'sc' : ['wdgwespmascapps',false,'ma:espn:scorecenter'],
		'cbb' : ['wdgwespmabbapps',false,'ma:espn:bracketbound'],
		'cfb' : ['wdgwespmacollege',false,'ma:espn:collegefootball'],
		'fba' : ['wdgwespmafbaapps',false,'ma:espn:fantasybasketball'],
		'ffl' : ['wdgwespmafflapps',false,'ma:espn:ffl'],
		'fhl' : ['wdgwespmafhlapps',false,'ma:espn:fantasyhockey'],
		'flb' : ['wdgwespmaflbapps',false,'ma:espn:fantasybaseball'],
		'ocho' : ['wdgespappdesktop',false,'espn:ocho'],
		'test' : ['wdgesptest',false,'ma:espn:test'],
		'scfeedapp' : ['wdgwespmascfeed',false,'ma:espn:scfeed']
	},
	/*
	 * Variable: _nielsenConfig
	 * Used for nielsen tracking calls
	 */
	_nielsenConfig = {
		'key': 'default',
		'default': {
			server: 'secure-us',
			cid: 'us-903969h'
		},
		'espnau-en': {
			server: 'secure-au',
			cid: 'au-espn'
		},
		'en-au': {
			server: 'secure-au',
			cid: 'au-espn'
		}
	},
	/*
	 * Variable: _comscoreConfig
	 * Used for comscore settings
	 */
	 _comscoreConfig = {
		 c1: "2", 
		 c2: "3000005"
	 },
	/*
	 * Variable: _isNielsenLoaded
	 * Flag used to load nielsen script and make second nielsen call attempt
	 * Used for legacy setups that to not call initNielsen method
	 */
	_isNielsenLoaded = false,
	// PRIVATE METHODS
	/*
	 * Method: updateMobileRS
	 * Mobile Apps Report Suite Ids Update
	 *  - Based on a url parameter, we are dynamically replacing our mobile report suite ids
	 *	  to newly created application report suite ids
	 *  - expected query param flag "appsrc=[]"
	 *  - we also want to toggle on and off the global mobile suite id "wdgwespma"
	 *  - We track the device being used by our users on our Mobile Apps via the navigator.userAgent value
	 *  - Sample Output: wdgwespmafflandroid > wdgwespmafflandroidfflapps, wdgwespma
	 *  - Sample prop73 (device): ma:espn:ffl:ipad
	 */
	updateMobileRS = function(acct) {
		var v = acct.split(',')[0].replace(/ /g,''),
			a = _appMap[_qparams.appsrc] || [],
			id = a[0] || null,
			isRollup = (typeof a[1] !== "undefined") ? a[1] : false,
			agent, agentName = a[2] || null,
			findAgent = function(regexp) {
				return (regexp.test(navigator.userAgent)) ? true : false;
			};

		if (id) {
			// 1:1 appsrc to report suite mapping.
			acct = id;
			if (isRollup === true) {acct += ",wdgwespma";}
		}
		// detect device
		if(agentName) {
			if(findAgent(/iPad/i)){
				agent = 'ipad';
			}
			else if(findAgent(/iP(?:hone|od)/i)) {
				agent = 'iphone';
			}
			else if(findAgent(/Android/i)) {
				agent = 'android';
			}
			if(agent) {
				agent = [agentName,agent].join(':');
				// mobile agent
				if(!isEmpty(window._espntrack)){
					// device agent
					window._espntrack.push({'prop73': agent});
					window._espntrack.push({'eVar73': agent});
				} else {
					window._espntrack = [{'prop73': agent}, {'eVar73': agent}];
				}
			}
		}
		return acct;
	},
	/*
	 * Method: setReportSuite
	 * - using custom rules, sets s_omni.account value and returns a string value for all espn properties, including international sites
	 */
	setReportSuite = function (account) {
		// default report suites ids and test patterns
		var acct = "wdgesptest",
			addglobal = (typeof addglobalsuite  !== "undefined") ? addglobalsuite : true,
			gi  = /^wdgesp(couk|uk|star|360europe|360prodigymexico|360terrabrazil|360vtrchile|australia|scrum|classiceurope|scorecenter|brazil|nasn|racinglive|fantasy,wdgespwc2010|footytips)$/,
			gi2 = /^wdgespint|wdgesp(deportes|soccernet|australia|india)/,
			gx  = /wdgespge/,
			g   = /wdgesp(deportes|soccernet)|^wdgespfantasy,wdgespwc2010,wdgespinternational|^wdgespindia,wdgespinternational|^wdgespaustralia,wdgespinternational$/,
			gmx = /wdgwespma|wdgwespsoccernet|^(wdgesp(test|appdesktop)|wdgwesp(mobileweb|espnw|deportes))$/;

		if(s_omni) {
			if(window._espntrack !== undefined && window._espntrack.account !== undefined) {
				acct = _espntrack.account;
			}
			else if(typeof s_account !== "undefined") {
				acct = s_account;
			}
			else if(account && !!account) {
				acct = account;
			}
		}

		acct = acct.replace(/^\s+|\s+$|\s+/, ''); //trim trailing white space
		if(gi.test(acct) || gi2.test(acct)){ // exact match and contains test
			// Add International
			acct = acct + ",wdgespinternational";
			if(gx.test(acct)){
				// Exclude Global - do nothing
			} else if(addglobal && g.test(acct)) {
				// Add Global
				acct = acct + ",wdgespge";
			}
		} else {
			// Add Global
			if(addglobal && !gmx.test(acct)) {
				acct = acct + ",wdgespge";
			}
		}

		if(typeof(_qparams.appsrc) !== "undefined") { // Update RSIDs for Mobile Apps
			acct = updateMobileRS(acct);
		}

		return acct;
	},
	/*
	 * Method: getLinkSettings
	 * - getLinkSettings is used to change the default linktrack settings in external files
	 */
	getLinkSettings = function() {
		return {
			trackDownloadLinks : true,
			trackExternalLinks : false,
			trackInlineStats : true,
			linkLeaveQueryString : true,
			linkTrackEvents : "None",
			exec : 0, //toggle for page view vs custom link
			linkDownloadFileTypes : "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx",
			linkInternalFilters : "javascript:,espn.go.com,espn.com,jayski.com,cricinfo.com,scrum.com,nasn.com,espnclassicsport.com,espnshop.com,"
			+"espn360.com,horseracing.com,expn.go.com,expn.com,espntv.com,myespn.go.com,myespn.com,starwave.com,x.go.com,soccernet.com,soccernet.fr,"
			+"soccernet.es,soccernet.it,soccernet.de,espndeportes.com,espndeportes.fr,espndeportes.es,espndeportes.it,espndeportes.de,"
			+"spanishflytv.com,redfishcup.com,espnclassic.com,racing-live.com,quiznosmadfin.com,espn.com.au,collegebass.com,"
			+"espnamerica.com,espnstar.com,espndb.go.com,espn.co.uk,shop.expn.com,grantland.com,"
			+"espnpub01,espnmast01,vwtsbar02,b.espncdn.com,espncdn.com,a.espncdn.com,fantasybeta.espn.go.com,"
			+"espn-ffl-2013-stage.sportsr.us,espn-ffl-2013.sportsr.us,espnsync.com,espnfivethirtyeight.wordpress.com,fivethirtyeight.com,projects.fivethirtyeight.com,"
			+"espn.com.mx,espn.com.ar,espn.com.ve,espn.com.co,espnfc.com,espnfc.us,espnfc.co.uk,espnfc.mx,espnfc.com.ar,espnfc.com.ve,espnfc.com.co,"
			+"espnfc.com.br,espnfc.com.ng,espnfc.com.sg,espnfc.com.au,espnfc.com.my,espnfc.co.id,secsports.go.com,secsports.com,espn.uol.com.br,espnplayer.com,"
			+"footytips.com.au,espn.com.au,espnview.com.au,espn.cl,espnfcasia.com,sonyespn.com,espn.in",
			linkTrackVars : "prop1,prop2,prop9,prop12,eVar74"
		};
	},
	/*
	 * Method: setLinkSettings
	 * - Create setLinkSettings method to remove redundance
	 * private vars:
	 * - obj -> link settings object
	 */
	setLinkSettings = function() {
		// get custom settings if they exist
		var obj = getLinkSettings();
		// init settings
		s_omni.trackDownloadLinks = obj.trackDownloadLinks;
		s_omni.trackExternalLinks = obj.trackExternalLinks;
		s_omni.trackInlineStats = obj.trackInlineStats;
		s_omni.linkLeaveQueryString = obj.linkLeaveQueryString;
		s_omni.linkTrackEvents = obj.linkTrackEvents;
		s_omni.exec = obj.exec; //toggle for page view vs custom link
		s_omni.linkDownloadFileTypes = obj.linkDownloadFileTypes;
		s_omni.linkInternalFilters = obj.linkInternalFilters;
		s_omni.linkTrackVars = obj.linkTrackVars;
	},
	/*
	 * Method: updateLinkSettings
	 * - set linkTrackVars property for link tracking calls
	 *   checks for prop/evars, event properties and addes to linkTrackVars
	 * private vars:
	 * - omni  -> local copy of user properties copied from the functions arguments
	 * - obj   -> link settings object
	 * - allvars -> string variable to hold list of props, evars, hier and events names
	 * - exp -> regular expression
	 * - ltVars -> link tracking variable array used add all properties that need to be tracked
	 *   to the s_omni.linkTrackVars property
	 * - vars & evts -> temporary array placeholders for prop,eVar,hier, etc. and events names
	 */
	updateLinkSettings = function(props) {
		var omni = props || {}, allvars, exp,
			ltVars = [], vars = [], evts = [],
			obj = getLinkSettings();

		if(!isEmpty(props) && typeof JSON !== "undefined") {
			// get all props, eVars, events
			if(props.link) delete props.link;
			exp = new RegExp('(prop\\d+|eVar\\d+|hier\\d+|pageName|channel|server|pageType|products|campaign|events)|(event\\d+)','g');
			allvars = JSON.stringify(props);
			allvars.replace(exp, function(match, $1, $2){
				if($1 && obj.linkTrackVars.indexOf($1) === -1) {
					vars.push($1);
				}
				if($2 && obj.linkTrackVars.indexOf($2) === -1) {
					evts.push($2);
				}
			});
		}

		if(!omni.linkTrackVars) {
			ltVars.push(obj.linkTrackVars);
			if(vars.length > 0) {
				ltVars.push( vars.join(',') );
			}
			omni.linkTrackVars = ltVars.join(',');
		}
		s_omni.linkTrackVars = omni.linkTrackVars;

		if(!omni.linkTrackEvents) {
			if(evts.length > 0) {
				omni.linkTrackEvents = evts.join(',');
			}
			else {
				omni.linkTrackEvents = obj.linkTrackEvents;
			}
		}
		s_omni.linkTrackEvents = omni.linkTrackEvents;

		return omni;
	},
	/*
	 * Method: setEvents()
	 * - set events value on story and blog pages when users are
	 *
	 */
	setEvents = function(p) {
		if(p) {
			var s = /(?:anonymous|insider-no):premium-yes/, t = /^(?:story|blog)$/,
				type = p.contentType, evts = p.events, evt8 = "event8";

			if( s.test(p.insiderStatus) && type && t.test(type) ) {
				if (evts && !!evts) {
					evt8 = evts+","+ evt8;
				}
				p.events = evt8;
			}
		}
		return p;
	},
	/*
	 * Method: watchOverrides()
	 * - WatchESPN code to add to global analytics output
	 */
	watchOverrides = function(p) {
		if (p && window.e3aff && !!window.e3aff && window.e3fullString && !!window.e3fullString) {
			p.espn3Affiliate = e3fullString;
			p.espn3AffiliateId = e3aff;
		}
		return p;
	},
	/*
	 * Method: updateLinkProps()
	 * - Internal Support function. Create standard and custom link group values for linktracking calls
	 *
	 * Parameters: // bare minimal values
	 *	pObj = {
	 *  - linkPos
	 *  - linkId
	 *  - linkTrackVars (optional)
	 *  - pageName (optional)
	 *  }
	 *
	 * Example:
	 * ->	updateLinkProps({
				linkPos : '',
				linkId : '',
				pageName : 'custom page name',
				linkTrackVars : 'prop9,porp12,prop74,prop70',
				prop74 : 'custom page name',
				prop70 : "custom config data"
			});
	 *
	 * Private Vars:
	 * - omni  -> local copy of user properties copied from the functions arguments
	 * - lkGroup -> link group array used to combine linkPos and linkId values
	 * - pName -> omniture pageName string variable
	 * - site -> site string value populated with the value form 'prop1' or 'site'
	 * - obj   -> link settings object
	 */
	updateLinkProps = function(props) {
		var omni = props || {}, lkGroup = [], pName, site = omni.prop1 || omni.site;
		omni.site = site || 'espn';
		if(omni.prop9) {
			lkGroup.push(omni.prop9);
		}
		else {
			if(omni.linkPos) {
				lkGroup.push(omni.linkPos.replace(/ /gi, "+").toLowerCase());
			}
			if(omni.linkId) {
				lkGroup.push(omni.linkId.replace(/ /gi, "+").toLowerCase());
			}
		}
		lkGroup = lkGroup.join('+');
		omni.linkGroup = lkGroup;
		if(!omni.linkTrackingArray) {
			if(omni.pageName) {
				pName = omni.pageName.replace(/ /gi, "+").toLowerCase();
			}
			else {
				pName = (s_omni.pageName === "string") ? s_omni.pageName.replace(/ /gi, "+").toLowerCase() : "";
			}
			omni.linkTrackingArray = [window.location.hostname,lkGroup+"^"+pName,"1"];
		}
		omni = updateLinkSettings( updateProps(omni) );

		return omni;
	},
	/*
	 * Method: getDefaultProps()
	 *  Internal Support function. Created to set standard tracking values.
	 *
	 * Parameters: // bare minimal values
	 *  pObj = {
	 *  - site - The site section this link be tracked under (ie. espn)
	 *  - section - Top level section being tracked under (ie. nba, memberservices)
	 *  - sections - colon delimited value of all sections (top level:second level:third level)
	 *    (ie. teams:schedule:boston_celtics)
	 *  - storyName - The Unique Story Page Name. (ie. registersuccess)
	 *  - storyId - The Story ID, if applicable
	 *  - contentType - The Content Type. (ie. Statistics, index)
	 *  }
	 *
	 * Example:
	 * ->   getDefaultProps({
				site : 'espn',
				section : 'nba',
				sections : 'nba:standings'
				storyName : '<story title>',
				storyId : '1234567',
				contentType : 'story'
			});
	 *
	 * Private Vars:
	 * - props -> local copy of user properties passed in (pObj)
	 * - sections -> sections value
	 * - pNameL4 -> omniture pageName string variable
	 * - sectionLV2 -> sub sections level 2 ex. "espn:nba:standings"
	 * - storyInfo -> story info, combo of story/video id and story/video description
	 * - desc -> story/video description, combined with storyInfo variable
	 * - anHier -> hier1 property value
	 */
	getDefaultProps = function(pObj) {
		var props = pObj || {}, sections = [],
		sectLV2, storyInfo = "", desc, pNameL4, anHier,
		// common code snippets
		getP = function(key) { return (props[key] || ""); },
		addP = function(val) { sections.push(val); },
		mergeP = function() { return sections.join(':'); },
		site = getP("site"),
		section = getP("section"),
		type = getP("contentType"),
		id = getP("storyId"),
		conv1 = getP("timeParting"),
		pNameL4 = getP("convPageName"),
		pName = section;

		//if (section !== "") addP(section);
		if (!!getP("sections")) addP(getP("sections"));

		sectLV2 = mergeP(); // bugfix - site value appended twice
		if(props.storyInfo) {
			storyInfo = props.storyInfo;
		} else if (!!id) {
			storyInfo = id;
			desc = getP("storyName");
			if(!!desc) {
				storyInfo = storyInfo+"+"+desc.replace(/ /gi, "+");
			}
			addP(storyInfo);
		}

		if(props.pageName) { pName = props.pageName; }
		else { pName = mergeP(); }
		pNameL4 = pName;

		if(props.hier1) { anHier = props.hier1; }
		else { anHier = pName; }

		if(props.channel) { section = props.channel; }
		if(props.prop1) { site = props.prop1; }
		if(props.prop5) { sectLV2 = props.prop5; }
		if(props.eVar1) { conv1 = props.eVar1; }
		if(props.eVar13) { pNameL4 = props.eVar13; }

		if(storyInfo !== "") { props.storyInfo = storyInfo; }
		if(pName !== "") { props.pageName = pName; }
		if(section !== "") { props.channel = section; }
		if(site !== "") { props.prop1 = site; }
		if(type !== "") { props.prop4 = type; }
		if(sectLV2 !== "") { props.prop5 = sectLV2; }
		if(anHier !== "") { props.hier1 = anHier; }
		if(conv1 !== "") { props.eVar1 = conv1; }

		props.convPageName = pNameL4;
		props.server = window.location.host;

		return props;
	},
	/*
	 * Method: updateProps()
	 * - convert user category config names to omniture analytics properties and values.
	 * - updates any number of s_omni properties passed in as an arguments obj
	 *
	 * Parameters:
	 * > props - user properties functions arguments
	 * Private Vars:
	 * - key -> property key names
	 * - map -> omniture map property at current key name
	 * - value -> the actual value of omniture map property at current key name
	 * - c_omni -> local copy of updated omniture key/value pairs
	 * - update -> local function to update s_omni and local copy of omniture property
	 */
	updateProps = function(props) {
		if(!isEmpty(props)) {
			// omni custom settings
			var key, map, value, c_omni = {},
				update=function(key,val) {
					if(val !== "DoNotSet") {
						c_omni[key] = val;
						s_omni[key] = val;
					} else {
						delete c_omni[key];
						delete s_omni[key];
					}
				};

			for(key in props) {
				if (_ignoreMap.indexOf(key) === -1) {
					map = _omniMap[key];
					value = props[key];
					if(map) {
						var i, prop, obj = map.split(":"), len = obj.length;
						if(len>1) {
							for(i=0;i<len;i++) {
								update(obj[i], value);
							}
						} else {
							update(obj[0], value);
						}
					} else {
						update(key, value);
					}
				}
			}
			props = c_omni;
		}
		return props;
	},
	/*
	 * Method: clearProps
	 * - Clearing variable values for link tracking call, pass in comma delimited string
	 * Call sample: clearProps(["pageName,server,prop1,prop3,eVar2"]);
	 */
	clearProps = function(props){
		if(props && props instanceof Array) {
			for(var i=0, len=props.length; i<len; ++i) {
				s_omni[props[i]] = "";
			}
		}
	},
	/*
	 * Method: setDisabledCookieFuncs
	 * - Notes: @HACK: LIVEMOBILE-7188
	 * Omniture's code contains an infinite loop when cookies are disabled
	 * so we are going to fix it by making the cookie functions do nothing
	 */
	setDisabledCookieFuncs = function() {
		var ctest = "", name = "_omnicwtest";

		s_omni.Util.cookieWrite(name, "works");
		ctest = s_omni.Util.cookieRead(name);
		if(ctest !== "works") {
			s_omni.Util.cookieWrite = function() { return false; };
			s_omni.Util.cookieRead = function() { return ''; };
		}
	},
	/*
	 * Method: setPropsViaCookieVals
	 * - set custom s_omni properties via cookie values for refferer value and deportes editions
	 */
	setPropsViaCookieVals = function () {
		if(!!document.cookie) {
			/* Referrer Config - Parse oRef Cookie, if exists */
			var key = s_omni.Util.cookieRead('oRef'), // Referrer cookie
				loc = location.href,
				exp = /(espndeportes(.go)?.com)|(espn((.cl)|(.com.(mx|ar|ve|co))))/;
			if(!!key) {
				s_omni.referrer = decodeURIComponent(key);
				// remove the cookie
				s_omni.Util.cookieWrite('oRef','',new Date(+new Date()-864E5).toUTCString());
			}
			/* Deportes Editions - user region userccactual or usercc for prod and test environments */
			if(exp.test(loc)) {
				// user region cookies
				var ckey = s_omni.Util.cookieRead('usercc');
				if(!!ckey) {
					key = decodeURIComponent(ckey);
					// set omniture properties
					s_omni.prop16 = key;
					s_omni.eVar12 = key;
				}
			}
		}
	},
	/*
	 * Method: setVisitorAppID
	 * - read custom cookie value to track user sessions between mobile pages and mobile apps (viAppId)
	 * - updates for Barebones Player Window 8 (Ocho) visitorID solution
	 */
	setVisitorAppID = function() {
		/* App to Mobile Web Communication via visitorID (s_vi) as cookie value */
		if(!!document.cookie) {
			var key = s_omni.Util.cookieRead('viAppId'); // App Visitor ID cookie
			if(!!key) {
				s_omni.visitorID = decodeURIComponent(key);
			}
		}
		/* Barebones Player Windows 8 (ocho) visitorID solution (jQuery for apps)
		 *  - No Cookies Solution
			- look for custom format > rand="appConf~{<encoded object>}"
			- the object must be encoded using - encodeURIComponent(uri)
			- look for vid propert and set to visitorID value
			- Use JSON.parse, if it exists

			> Samples:
			> rand="appConf~{"vid":"[CS]v1|289FF70C05010795-60000106C01E468C[CE]"}
			> (encoded) rand=appConf~%7B"vid"%3A"%5BCS%5Dv1%7C289FF70C05010795-60000106C01E468C%5BCE%5D"%7D
			> rand="appConf~{"swid":"6D45F72A-408C-4589-85F7-2A408C55890B","vid":"[CS]v1|289FF70C05010795-60000106C01E468C[CE]"}
			> (encoded) rand=appConf~%7B"swid"%3A"6D45F72A-408C-4589-85F7-2A408C55890B"%2Cvid%3A"%5BCS%5Dv1%7C289FF70C05010795-60000106C01E468C%5BCE%5D"%7D

		 */
		 /* UPDATE: Mobile Redirects and Vanity URLs 'True' Refferal value via the Rand uncacheable  url query
			- redirects from social referral or organic search
			- redirects from vanity urls
		 	- update s_omni.referrer if the referrer value is null, ""(empty string), or contains '.espn.com'
			- do nothing if the document.referrer is valid
			- parse "true" referral value in "rand" query param
			- the string must be encoded using - encodeURIComponent(uri)
			- rand='ref~{"ref":"+document.referrer+"}'

			> Samples:
		 	> rand='ref~{"ref":"http://www.espn.com"}'
		 	> (encoded) rand=ref~%7B%22ref%22%3A%22http%3A%2F%2Fwww.espn.com%22%7D
			> rand="ref~{"ref":"https://twitter.com/espn"}"
			> (encoded) rand=ref~%7B%22ref%22%3A%22https%3A%2F%2Ftwitter.com%2Fespn%22%7D
			> rand="ref~{"ref":"https://t.co/7EHGfMHg1r"}"
			> (encoded) rand=ref~%7B%22ref%22%3A%22http%3A%2F%2Ft.co%2F7EHGfMHg1r%22%7D

		 */
		if (JSON !== undefined && typeof (JSON.parse) === "function") {
			var rand = _qparams.rand; // 1
			if (typeof (rand) === "string" && rand.indexOf("~") !== -1) {
				var index = rand.indexOf("~"),
					str = rand.substring(index+1),
					obj = JSON.parse(decodeURIComponent(str));

				if(obj && obj.vid) {
					var vid = obj.vid, exp = new Date();
					s_omni.visitorID = vid;
					// set 'viAppId' cookie
					if(!!document.cookie) {
						exp.setTime(exp.getTime()+(1*24*60*60*1000));
						s_omni.Util.cookieWrite('viAppId',vid,exp);
					}
				}

				if(obj.ref) {
					var trueRef = obj.ref, docRef = document.referrer;
					if (docRef === null || docRef === "") {
						// rewrite shorten twitter urls to twitter.com
						var isFound = trueRef.match(/(https?:\/\/)?(t(\.)co(\/)?([^a-z]))/);
						if(isFound) { trueRef = "http://twitter.com/"; }
						s_omni.referrer = trueRef;
					}
				}
			}
		}
	},
	/*
	 * Method: initPlugins
	 * - load omniture modules and plugins
	 */
	initPlugins = function() {
		/************************* PLUGINS FUNCTIONS ************************/
		/*
		 * Utility Function: ESPN setLinkId beta v1
		 */
		s_omni.setLinkId=new Function("p1", "p2", "p3", "qp", "d", "id", "t", "k", "L", "v1", "vd", "h",""
		+"var s=this;if(s.c_r(k)=='customlink'){s.c_w(k,'');return''}if(typeof h=='undefined'||h==''||(h[0]==''&&h[1]=='')){var h=s.getLinkId(p1,p2,p3,qp,d,id,L,v1,vd)}var v,kv,wh=s.Ja();if(!h[0]){kv=s.c_r(k);s.c_w(k,'');return kv}if(typeof h[0]=='object'){h[0]=h[0]+''}wh=h[0].indexOf(wh)>-1?'0':h[0].indexOf('javascript:')>-1?'0':'1';v=h[1].indexOf('atxt:')>-1?'1':'-1';if(s.linkType||s.linkName){if(typeof s.linkTrackingArray[2]!='undefined'&&s.linkTrackingArray[2]!=''){s.c_w(k,'')}else{s.c_w(k,'customlink')}return h[1]}else if(t=='0'||s.linkType=='d'||s.linkType=='e'){s.c_w(k,'');return h[1]}else if(wh=='1'){s.linkName=h[1];s.linkType='o';return h[1]}else if(t=='1'){if(v>-1){s.c_w(k,h[1]);return''}else{s.linkName=h[1];s.linkType='o';return h[1]}}else if(t=='2'){s.linkName=h[1];s.linkType='o';return h[1]}else{s.c_w(k,h[1]);return''}s.c_w(k,'');return'';");
		/*
		 * Utility Function: ESPN getLinkId beta v1
		 */
		s_omni.getLinkId=new Function("p1", "p1a", "p2","qp","d","id","L","v1","vd",""
		+"var s=this,h,n,r,h1,h1a,h2,h3,a,e,q; if(!s.linkObject&&!s.linkURL){return''} var o=s.linkObject?s.linkObject:s.linkURL; var y=s.B(o); var f=s.I(o); var n=f!=0?f.id:''; var x=f!=0?f.type: 0; if(s.linkObject&&o==s.linkObject){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode; if(!o){return''} y=s.B(o); f=s.I(o); n=f!=0?f.id:''; x=f!=0?f.type:0; } } d=d?d:'|'; id=id?id:':'; if(!o.href){return''} r=o.href; q=r.indexOf('?'); e=!o.name?'':o.name.indexOf('&')!=0?'&'+o.name:o.name; h=q>-1?r.substring(q)+e:e?'?'+e:''; if(s.linkLeaveQueryString==false){r=q>0?r.substring(0,q):r}if(h){h1=p1?s.Util.getQueryParam(p1,h,''):''; h2=p2?s.Util.getQueryParam(p2,h,''):''; h3=qp?s.Util.getQueryParam(qp,h,''):''} if(h3&&s.Util.getQueryParam(p2,h3,'')){h2=p2?s.Util.getQueryParam(p2,h3,''):''} if(!h1&&!h2){var oalt=s.getinnerHTML(o); oalt=oalt?oalt:o.alt?o.alt:''; if(!oalt){return''}else{h=L<1?'atxt'+id:'atxt'+id+oalt } }else{h1a=p1a?s.Util.getQueryParam(p1a,h,''):''; h1=h1+=h1a?id+h1a:''; h=h1+=h2?d+h2:''} h=v1?h+vd+v1:h; a=new Array; a[0]=r?r:''; a[1]=h; return a?a:'';");
		/*
		 * Utility Function: getinnerHTML v1.0
		 */
		s_omni.getinnerHTML=new Function("o",""
		+"var ih=''+o.innerHTML,ihl=ih.toLowerCase(),i=ihl.indexOf('<img');if(ih&&i>-1){eval(\"evl=/ src\s*=\s*['\\\"]?([^'\\\" ]+)['\\\"]?/i\");evl.exec(ih);if(RegExp.$1) ih=RegExp.$1}return(ih);");
		/*
		 * Utility Function: apl v1.1
		 */
		s_omni.apl=new Function("l","v","d","u",""
		+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");

		/*
		 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
		 */
		s_omni.split=new Function("l","d",""
		+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
		/*
		 *  Plugin: ESPN getLinkParams beta v1
		 */
		s_omni.getLinkParams=new Function("p","qp","m","q","ev",""
		+"var s=this,a='',t=0,l,ll,l2,r,e,la,ap,ev=ev?';;;'+ev+'=1':'';if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];r=l.href;e=l.name;e=!e?'':e.indexOf('&')!=0?'&'+e:e;la=r.indexOf('?')>-1?r.substring(r.indexOf('?'))+e:e?'?'+e:'';ll=la.toLowerCase();if(qp&&ll.indexOf(qp.toLowerCase())>0)l2=qp?s.Util.getQueryParam(qp,ll,''):'';else l2='';if(l2&&l2.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,l2+'','');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1}}else if(ll.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,la+'','');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1}}if(t==m)return a}return a}");
		/*
		 * Days since last Visit 1.1.H - capture time from last visit
		 */
		s_omni.getDaysSinceLastVisit=new Function("c",""
		+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");
		/*
		 * getValOnce 0.2 - get a value once per session or number of days
		 */
		s_omni.getValOnce=new Function("v","c","e",""
		+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
		/*
		 * getPreviousValue_v1.0 - return previous value of designated
		 *   variable (requires split utility)
		 */
		s_omni.getPreviousValue=new Function("v","c","el",""
		+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
		/*
		 * Plugin: getPercentPageViewed v1.71
		 */
		s_omni.getPercentPageViewed=new Function("n",""
		+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a");

		/****************************** MODULES *****************************/
		/*
		 * Module: AppMeasurement Media
		 */
		function AppMeasurement_Module_Media(s){var m=this;m.s=s;s=window;if(!s.s_c_in)s.s_c_il=[],s.s_c_in=0;m._il=s.s_c_il;m._in=s.s_c_in;m._il[m._in]=m;s.s_c_in++;m._c="s_m";m.list=[];m.open=function(w,b,c,h){var d={},a=new Date,g="",e;b||(b=-1);if(w&&c){if(!m.list)m.list={};m.list[w]&&m.close(w);if(h&&h.id)g=h.id;if(g)for(e in m.list)!Object.prototype[e]&&m.list[e]&&m.list[e].S==g&&m.close(m.list[e].name);d.name=w;d.length=b;d.u=0;d.c=0;d.playerName=m.playerName?m.playerName:c;d.S=g;d.L=0;d.f=0;d.timestamp=
		Math.floor(a.getTime()/1E3);d.j=0;d.r=d.timestamp;d.a=-1;d.B="";d.k=-1;d.C=0;d.H={};d.F=0;d.m=0;d.e="";d.A=0;d.K=0;d.z=0;d.D=0;d.l=!1;d.v="";d.I="";d.J=0;d.q=!1;d.G="";d.complete=0;d.Q=0;d.o=0;d.p=0;m.list[w]=d}};m.openAd=function(w,b,c,h,d,a,g,e){var f={};m.open(w,b,c,e);if(f=m.list[w])f.l=!0,f.v=h,f.I=d,f.J=a,f.G=g};m.M=function(w){var b=m.list[w];m.list[w]=0;b&&b.monitor&&clearTimeout(b.monitor.R)};m.close=function(w){m.g(w,0,-1)};m.play=function(w,b,c,h){var d=m.g(w,1,b,c,h);if(d&&!d.monitor)d.monitor=
		{},d.monitor.update=function(){d.j==1&&m.g(d.name,3,-1);d.monitor.R=setTimeout(d.monitor.update,1E3)},d.monitor.update()};m.click=function(w,b){m.g(w,7,b)};m.complete=function(w,b){m.g(w,5,b)};m.stop=function(w,b){m.g(w,2,b)};m.track=function(w){m.g(w,4,-1)};m.P=function(w,b){var c="a.media.",h=w.linkTrackVars,d=w.linkTrackEvents,a="m_i",g,e=w.contextData,f;if(b.l){c+="ad.";if(b.v)e["a.media.name"]=b.v,e[c+"pod"]=b.I,e[c+"podPosition"]=b.J;if(!b.F)e[c+"CPM"]=b.G}if(b.q)e[c+"clicked"]=!0,b.q=!1;e["a.contentType"]=
		"video"+(b.l?"Ad":"");e["a.media.channel"]=m.channel;e[c+"name"]=b.name;e[c+"playerName"]=b.playerName;if(b.length>0)e[c+"length"]=b.length;e[c+"timePlayed"]=Math.floor(b.f);Math.floor(b.f)>0&&(e[c+"timePlayed"]=Math.floor(b.f));if(!b.F)e[c+"view"]=!0,a="m_s",b.F=1;if(b.e){e[c+"segmentNum"]=b.m;e[c+"segment"]=b.e;if(b.A>0)e[c+"segmentLength"]=b.A;b.z&&b.f>0&&(e[c+"segmentView"]=!0)}if(!b.Q&&b.complete)e[c+"complete"]=!0,b.T=1;if(b.o>0)e[c+"milestone"]=b.o;if(b.p>0)e[c+"offsetMilestone"]=b.p;if(h)for(f in e)Object.prototype[f]||
		(h+=",contextData."+f);g=e["a.contentType"];w.pe=a;w.pev3=g;var s,n;if(m.contextDataMapping){if(!w.events2)w.events2="";h&&(h+=",events");for(f in m.contextDataMapping)if(!Object.prototype[f]){a=f.length>c.length&&f.substring(0,c.length)==c?f.substring(c.length):"";g=m.contextDataMapping[f];if(typeof g=="string"){s=g.split(",");for(n=0;n<s.length;n++)g=s[n],f=="a.contentType"?(h&&(h+=","+g),w[g]=e[f]):a=="view"||a=="segmentView"||a=="clicked"||a=="complete"||a=="timePlayed"||a=="CPM"?(d&&(d+=","+
		g),a=="timePlayed"||a=="CPM"?e[f]&&(w.events2+=(w.events2?",":"")+g+"="+e[f]):e[f]&&(w.events2+=(w.events2?",":"")+g)):a=="segment"&&e[f+"Num"]?(h&&(h+=","+g),w[g]=e[f+"Num"]+":"+e[f]):(h&&(h+=","+g),w[g]=e[f])}else if(a=="milestones"||a=="offsetMilestones")f=f.substring(0,f.length-1),e[f]&&m.contextDataMapping[f+"s"][e[f]]&&(d&&(d+=","+m.contextDataMapping[f+"s"][e[f]]),w.events2+=(w.events2?",":"")+m.contextDataMapping[f+"s"][e[f]]);e[f]&&(e[f]=0);a=="segment"&&e[f+"Num"]&&(e[f+"Num"]=0)}}w.linkTrackVars=
		h;w.linkTrackEvents=d};m.g=function(w,b,c,h,d){var a={},g=(new Date).getTime()/1E3,e,f,s=m.trackVars,n=m.trackEvents,o=m.trackSeconds,p=m.trackMilestones,q=m.trackOffsetMilestones,r=m.segmentByMilestones,t=m.segmentByOffsetMilestones,k,j,l=1,i={},u;if(!m.channel)m.channel=m.s.w.location.hostname;if(a=w&&m.list&&m.list[w]?m.list[w]:0){if(a.l)o=m.adTrackSeconds,p=m.adTrackMilestones,q=m.adTrackOffsetMilestones,r=m.adSegmentByMilestones,t=m.adSegmentByOffsetMilestones;c<0&&(c=a.j==1&&a.r>0?g-a.r+a.a:
		a.a);a.length>0&&(c=c<a.length?c:a.length);c<0&&(c=0);a.u=c;if(a.length>0)a.c=a.u/a.length*100,a.c=a.c>100?100:a.c;if(a.a<0)a.a=c;u=a.C;i.name=w;i.ad=a.l;i.length=a.length;i.openTime=new Date;i.openTime.setTime(a.timestamp*1E3);i.offset=a.u;i.percent=a.c;i.playerName=a.playerName;i.mediaEvent=a.k<0?"OPEN":b==1?"PLAY":b==2?"STOP":b==3?"MONITOR":b==4?"TRACK":b==5?"COMPLETE":b==7?"CLICK":"CLOSE";if(b>2||b!=a.j&&(b!=2||a.j==1)){if(!d)h=a.m,d=a.e;if(b){if(b==1)a.a=c;if((b<=3||b>=5)&&a.k>=0)if(l=!1,s=n=
		"None",a.k!=c){f=a.k;if(f>c)f=a.a,f>c&&(f=c);k=p?p.split(","):0;if(a.length>0&&k&&c>=f)for(j=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)&&f/a.length*100<e&&a.c>=e)l=!0,j=k.length,i.mediaEvent="MILESTONE",a.o=i.milestone=e;if((k=q?q.split(","):0)&&c>=f)for(j=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)&&f<e&&c>=e)l=!0,j=k.length,i.mediaEvent="OFFSET_MILESTONE",a.p=i.offsetMilestone=e}if(a.K||!d){if(r&&p&&a.length>0){if(k=p.split(",")){k.push("100");for(j=f=0;j<k.length;j++)if(e=k[j]?parseFloat(""+
		k[j]):0){if(a.c<e)h=j+1,d="M:"+f+"-"+e,j=k.length;f=e}}}else if(t&&q&&(k=q.split(","))){k.push(""+(a.length>0?a.length:"E"));for(j=f=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)||k[j]=="E"){if(c<e||k[j]=="E")h=j+1,d="O:"+f+"-"+e,j=k.length;f=e}}if(d)a.K=!0}if((d||a.e)&&d!=a.e){a.D=!0;if(!a.e)a.m=h,a.e=d;a.k>=0&&(l=!0)}if((b>=2||a.c>=100)&&a.a<c)a.L+=c-a.a,a.f+=c-a.a;if(b<=2||b==3&&!a.j)a.B+=(b==1||b==3?"S":"E")+Math.floor(c),a.j=b==3?1:b;if(!l&&a.k>=0&&b<=3&&(o=o?o:0)&&a.f>=o)l=!0,i.mediaEvent=
		"SECONDS";a.r=g;a.a=c}if(!b||b<=3&&a.c>=100)a.j!=2&&(a.B+="E"+Math.floor(c)),b=0,s=n="None",i.mediaEvent="CLOSE";if(b==7)l=i.clicked=a.q=!0;if(b==5||m.completeByCloseOffset&&(!b||a.c>=100)&&a.length>0&&c>=a.length-m.completeCloseOffsetThreshold)l=i.complete=a.complete=!0;g=i.mediaEvent;g=="MILESTONE"?g+="_"+i.milestone:g=="OFFSET_MILESTONE"&&(g+="_"+i.offsetMilestone);a.H[g]?i.eventFirstTime=!1:(i.eventFirstTime=!0,a.H[g]=1);i.event=i.mediaEvent;i.timePlayed=a.L;i.segmentNum=a.m;i.segment=a.e;i.segmentLength=
		a.A;m.monitor&&b!=4&&m.monitor(m.s,i);b==0&&m.M(w);if(l&&a.C==u){w={};w.contextData={};w.linkTrackVars=s;w.linkTrackEvents=n;if(!w.linkTrackVars)w.linkTrackVars="";if(!w.linkTrackEvents)w.linkTrackEvents="";m.P(w,a);w.linkTrackVars||(w["!linkTrackVars"]=1);w.linkTrackEvents||(w["!linkTrackEvents"]=1);m.s.track(w);if(a.D)a.m=h,a.e=d,a.z=!0,a.D=!1;else if(a.f>0)a.z=!1;a.B="";a.o=a.p=0;a.f-=Math.floor(a.f);a.k=c;a.C++}}}return a};m.O=function(w,b,c,h,d){var a=0;if(w&&(!m.autoTrackMediaLengthRequired||
		b&&b>0)){if(!m.list||!m.list[w]){if(c==1||c==3)m.open(w,b,"HTML5 Video",d),a=1}else a=1;a&&m.g(w,c,h,-1,0)}};m.attach=function(w){var b,c,h;if(w&&w.tagName&&w.tagName.toUpperCase()=="VIDEO"){if(!m.n)m.n=function(b,a,w){var c,f;if(m.autoTrack){c=b.currentSrc;(f=b.duration)||(f=-1);if(w<0)w=b.currentTime;m.O(c,f,a,w,b)}};b=function(){m.n(w,1,-1)};c=function(){m.n(w,1,-1)};m.i(w,"play",b);m.i(w,"pause",c);m.i(w,"seeking",c);m.i(w,"seeked",b);m.i(w,"ended",function(){m.n(w,0,-1)});m.i(w,"timeupdate",
		b);h=function(){!w.paused&&!w.ended&&!w.seeking&&m.n(w,3,-1);setTimeout(h,1E3)};h()}};m.i=function(m,b,c){m.attachEvent?m.attachEvent("on"+b,c):m.addEventListener&&m.addEventListener(b,c,!1)};if(m.completeByCloseOffset==void 0)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==void 0)m.completeCloseOffsetThreshold=1;m.N=function(){var w,b;if(m.autoTrack&&(w=m.s.d.getElementsByTagName("VIDEO")))for(b=0;b<w.length;b++)m.attach(w[b])};m.i(s,"load",m.N)}AppMeasurement_Module_Media.REMOVE=1;
		new AppMeasurement_Module_Media("REMOVE");
	},
	//************************** CONFIG SECTION **************************
	/*
	 * Method: setConfig
	 * Basic setup fro all s_omni properties and call required Configs, Modules and Plugins
	 */
	setConfig = function(s_omni) {
		/* E-commerce Config */
		s_omni.charSet="ISO-8859-1"
		s_omni.currencyCode="USD"
		// count cookie domain periods
		s_omni.cookieDomainPeriods=2;
		if(!window.location.hostname.match(/\.espn\.com$/)){
			var domainPeriodCount = location.hostname.split(".").length-1;
			if(domainPeriodCount>2){
				s_omni.cookieDomainPeriods=3;
			}
		}
		/* set initial values */
		if(typeof(window.anMultiStepConv)=== "undefined") {
			window.anMultiStepConv="";
		}
		setDisabledCookieFuncs();
		setPropsViaCookieVals(); // the cookie we'll be looking for
		setVisitorAppID();
		setLinkSettings();
		/* Plugin Config */
		s_omni.usePlugins = true;
		/*
		 * Method: s_omni_doPlugins
		 * Basic plugin setup
		 */
		function s_omni_doPlugins (s_omni) {
			/* external hack */
			s_omni.abort = false;
			function checkUserClicked(clicked) {
				var bool = false;
				if(s_omni.exec > 0) {
					if( clicked ) {
						espn.track.userClicked = false;
						s_omni.abort = false;
					}
					else {
						s_omni.abort = true;
						bool = true;
					}
				}
				return bool;
			}

			if(espn.track.exitLinkTrackDisable) {
				var disable = true,
					h = espn.track.exitLinkHandler || [],
					url = s_omni.linkURL;

				if(typeof url === "string" && url !== "") {
					for(i=0,len=h.length;i<len; i++) {
						var regexp = h[i];
						if( regexp.test(url) ) {
							disable = checkUserClicked(espn.track.userClicked);
							break;
						}
					}
				}
				else {
					disable = checkUserClicked(espn.track.userClicked);
				}
				if (disable) { return; }
			}
			/* Add async tracking info
			 *
				sample code
				window._espntrack = [
					{"prop1" : "value1"},
					{"prop2" : "value2", "prop3" : "value3"},
					...
				]
			 */
			if(!isEmpty(window._espntrack)) {
				// overwrite each property value
				var i,len = window._espntrack.length;
				if(len > 0) {
					for(i=0;i<len;i++){
						var p = updateProps( window._espntrack[i] );
					}
				}
			}

				s_omni.campaign=s_omni.getValOnce(s_omni.campaign,'s_v0',0); //de-duplicate consecutive instances of tracking code

				if(!s_omni.campaign) {
					if(!!s_omni.Util.getQueryParam('fb_ref', window.location.href)) {
						s_omni.campaign = s_omni.Util.getQueryParam('fb_ref', window.location.href); /* Facebook Open Graph Campaign Tracking */
					} else {
						s_omni.campaign = s_omni.Util.getQueryParam('ex_cid', window.location.href); /* External Campaign Tracking */
					}
				}

				if(s_omni.campaign)s_omni.events=s_omni.apl(s_omni.events,'event20',',',1); //set custom campaign clickthrough event

			s_omni.prop1=s_omni.prop1?s_omni.prop1:s_omni.w.location.hostname?s_omni.w.location.hostname:'No Hostname';
			s_omni.prop4=s_omni.prop4?s_omni.prop4:'NotSet';//Content Type - "not set" if blank
			s_omni.pageName=s_omni.pageName?s_omni.pageName:s_omni.w.location?s_omni.w.location:'';

				//dynamically pull SWID from header
				s_omni.prop2="D=SWID";

			// default
			if(s_omni.exec==0) {
				var disableSite = (typeof s_omni.disableSite !== "undefined") ? s_omni.disableSite : false;
				if(!disableSite) {
					// set site and prop1 values separately
					var site = s_omni.prop1, pSite="";
					site = site.split(':')[0];
					pSite = site+":";

					if(s_omni.channel)s_omni.channel=pSite+s_omni.channel; //Channel=Site Section Level 1 - prepend site
					if(s_omni.pageName)s_omni.pageName=pSite+s_omni.pageName; //Page Name - prepend site
					if(s_omni.prop5)s_omni.prop5=pSite+s_omni.prop5; //Site Section Level 2 - prepend site
					if(s_omni.hier1)s_omni.hier1=pSite+s_omni.hier1; //Hierarchy - prepend site
				}
				if(anMultiStepConv!="yes" && !s_omni.eVar11 && s_omni.channel && s_omni.prop4)s_omni.eVar11=s_omni.prop4+":"+s_omni.channel //Content Type:Site Section - combine component parts if blank
			}

				if(anMultiStepConv!="yes")s_omni.eVar13=s_omni.pageName;

			// default
			if(s_omni.prop7){
				/* Lowercase variables */
				s_omni.prop7=s_omni.prop7.toLowerCase();
				/* if no results, modify search query for pathing purposes */
				if(s_omni.prop8=="0"||s_omni.prop8=="zero")s_omni.prop8="null"
				if(s_omni.prop8=="null")s_omni.prop7="null:"+s_omni.prop7;
				if(anMultiStepConv!="yes")s_omni.eVar4=s_omni.prop7;

				/* Set de-duped onsite search event */
				var t_search=s_omni.getValOnce(s_omni.eVar4,'s_v4',0);
				if(t_search) s_omni.events=s_omni.apl(s_omni.events,'event2',',',1);
			}

			s_omni.prop24=s_omni.getDaysSinceLastVisit('s_c24'); //days since last visit
			s_omni.prop24=unescape(s_omni.prop24);// handles standard decoding
			s_omni.prop24=unescape(s_omni.prop24);// handles double decoding (doesn't hurt)
			if(s_omni.prop24=='Cookies Not Supported')s_omni.prop6='Cookies Not Supported'
			else if(s_omni.prop24=='First Visit')s_omni.prop6='New'
			else s_omni.prop6='Repeat'

			s_omni.events=s_omni.apl(s_omni.events,'event3',',',1); //set page view event

			if(!s_omni.eVar18) s_omni.eVar18=s_omni.Util.getQueryParam('w_cid'); //Widget Tracking
			s_omni.eVar18=s_omni.getValOnce(s_omni.eVar18,'s_v18',0); //de-duplicate consecutive instances of tracking code
			/* Set Search Vars */


			if(!s_omni.prop9) {
				s_omni.linkidT=s_omni.setLinkId('lpos', 'lid','addata','goto','|','+','3','s_omni_lid','0',s_omni.pageName,'^',s_omni.linkTrackingArray);
			} else {
				s_omni.linkidT = s_omni.prop9
			}

			s_omni.linkTrackingArray='';
			s_omni.linkidS=s_omni.linkidT.indexOf('|');
			s_omni.linkidX=s_omni.linkidT.indexOf('^');
			s_omni.gpv_pageName=s_omni.getPreviousValue(s_omni.pageName,'s_gpv_pn',''); //backup method for setting previous value of pagename
			s_omni.prop12=s_omni.linkidX>-1?s_omni.linkidT.substring(s_omni.linkidX+1):s_omni.gpv_pageName;
			s_omni.linkidT=s_omni.linkidX>-1?s_omni.linkidT.substring(0,s_omni.linkidX):s_omni.linkidT;
			if(s_omni.linkidS>-1) s_omni.eVar3=s_omni.linkidT.substring(s_omni.linkidS+1); //set addata
			s_omni.prop9=s_omni.linkidS<0?s_omni.linkidT:s_omni.linkidS>0?s_omni.linkidT.substring(0,s_omni.linkidS):s_omni.linkidT.substring(s_omni.linkidS+1);

			/* track the percentage of a page viewed */
			s_omni.prop28 = s_omni.getPercentPageViewed(); // max % viewed of prev page
			if(!s_omni.gpv_pageName||s_omni.gpv_pageName=='no value')s_omni.prop28=''; // clear max % viewed if no prev page view

			if(!s_omni.eVar3) s_omni.eVar3=s_omni.Util.getQueryParam('addata', window.location.href); //Internal Campaign Tracking

			s_omni.eVar3=s_omni.getValOnce(s_omni.eVar3,'s_v3',0); //de-duplicate consecutive instances of tracking code
			if(s_omni.eVar3){
				if (s_omni.exec<1) s_omni.products=s_omni.apl(s_omni.products,"ads;"+s_omni.eVar3+";;;event7=1",',',2); //don't overwrite product string on page load
				else s_omni.products="ads;"+s_omni.eVar3+";;;event7=1"; //overwrite product string on all other executions to prevent old values from being included
				s_omni.events=s_omni.apl(s_omni.events,"event7",",",2);
				s_omni.linkTrackVars="prop1,prop2,prop9,prop12,products,eVar3,events"
				s_omni.linkTrackEvents="event7";
			}

			/* Set Internal Campaign Views */
			/* Don't allow function to execute more than once per page */
			if (s_omni.exec<1) {
				s_omni.AdsT=s_omni.getLinkParams('addata','goto','8','ads;','event38');
				if(s_omni.AdsT){
					s_omni.products=s_omni.apl(s_omni.products,s_omni.AdsT,",",2);
					s_omni.events=s_omni.apl(s_omni.events,"event38",",",2);
				}
				s_omni.exec++;
			}
		};
		s_omni.doPlugins = s_omni_doPlugins;

		initPlugins();

		/* Configure Media Module Functions */
		s_omni.loadModule("Media");
		s_omni.Media.autoTrack=false;
		s_omni.Media.trackVars="events,prop1,prop2,prop3,prop4,prop15,prop17,prop25,prop26,eVar1,eVar2,eVar9,eVar11,eVar16,eVar19,eVar20,eVar21";
		s_omni.Media.trackEvents="event1,event4,event9,event11,event39,event40";
		s_omni.Media.trackWhilePlaying=true;
		s_omni.Media.trackUsingContextData = true;
		s_omni.Media.contextDataMapping = {
			"a.media.name":"eVar2,prop3",
			"a.contentType":"prop4",
			"a.media.view":"event1",
			"a.media.complete":"event11",
			"a.media.milestones":{ 50:"event9" }
		};
		s_omni.Media.trackMilestones="50";
		// Media Monitor Method
		s_omni.Media.monitor = function(s, media) {
			var m = s.Media;
			// milestones track event and maintain variables
			if (media.event === "MILESTONE" && media.eventFirstTime) {
				// 50% milestone
				if (media.milestone === 50) {
					m.track(media.name);
				}
			}
			// video playback complete
			if (media.event === "CLOSE") {
				m.track(media.name);
			}
		};
	};
	/*
	 * NameSpace: espn.track
	 * create espn.track namespace - removing from global namespace.
	 * default tracking apps method
	 */
	espn.track = espn.track || {};
	/*
	 * Variable: espn.track.exitLinkTrackDisable. default is false
	 * - enable exit link track disabling feature check.
	 */
	espn.track.exitLinkTrackDisable = false;
	/*
	 * Variable: espn.track.userClicked
	 * For externlink disabling via user ciick. default is false
	 */
	espn.track.userClicked = false;
	/*
	 * Variable: espn.track.exitLinkHandler
	 * Array that holds exit link hrefs, used to check for exit links triggered when users are triggering click events
	 */
	espn.track.exitLinkHandler  = [];
	/*
	 * Method: espn.track.trackLink
	 * For linktracking - fire link tracking (with custom object param)
	 *
	 * // feature omni props to update
	 * espn.track.trackLink( {prop1:"value",prop2:"value2", ...});
	 */
	espn.track.trackLink = function(props){
		var omni = props || {}, obj, linkType;
		if(!isEmpty(omni)) {
			obj = (omni.link) ? omni.link : this;
			omni = updateLinkProps(omni);
			linkType = (omni.linkType && omni.linkType === "exit") ? "e" : "o";
			s_omni.tl(obj,linkType,omni.linkName || omni.linkGroup);
			// broadcast to 'omni.tracked' and return s_omni
			if(typeof jQuery !== "undefined" && jQuery.publish && typeof jQuery.publish === "function") {
				jQuery.publish("omni.linkTracked",[s_omni]);
			}
		}
	};
	/*
	 * Method: espn.track.trackPage
	 * - for page tracking beacon call
	 *
	 * // omni props
	 * espn.track.trackpage({
	 *	site : "espn", // anSiteSection
	 *	section : "nba", // anContentSection
	 *	contentType : "index",
	 *	sport : "basketball",
	 *	league : "nba",
	 *	lang : "en_es",
	 *	pageName : "custom Page Name",
	 *	prop9 : "randonLInk"
	 * });
	 */
	espn.track.trackPage = function(props){
		var s_code, p = props,
			enableCB = (typeof p.enableCB !== "undefined") ? p.enableCB : true,
			enableCom = (typeof p.enableCom !== "undefined") ? p.enableCom : true,
			enableNielsen = (typeof p.enableNielsen !== 'undefined') ? p.enableNielsen : true,
			enableBluekai = (typeof p.enableBluekai !== 'undefined') ? p.enableBluekai : true;

		if(!isEmpty(p)) {
			this.clear(); // clear vars

			p.trackType = 0;
			if(p.account){ s_omni.account = setReportSuite(p.account); }
			p = getDefaultProps(p);

			if(p.site == "watchespn"){ p = watchOverrides(p); } // for watch only
			p = setEvents(p);
			p = updateProps(p);
			s_omni.pageURL = window.location.href;
			//  send a beacon call (for page view or just a custom link call)
			s_code = s_omni.t();
			// Broadcasts status to "omni.tracked" event and return s_omni
			if(typeof jQuery !== "undefined" && jQuery.publish && typeof jQuery.publish === "function") {
				jQuery.publish("omni.pageTracked",[s_omni]);
			}

			if(enableCB) espn.track.chartbeat( p.cbSettings );

			function init() {
				if(enableCom){ espn.track.comscore(); }
				if(enableNielsen){ espn.track.nielsen(); }
				if(enableBluekai){ espn.track.bluekai(p); }
			}

			if(document.readyState === "complete") {
				init();
			} else {
				var onloadEvent = window.onload;
				window.onload = (typeof window.onload !== "function") ? init : function () { onloadEvent(); init(); }
			}
		}
	};
	/*
	 * Public Method: espn.track.getTracklinkImgSrc
	 * - new asynchronous link tracking call - returns creates sc beacon img src value
	 */
	espn.track.getTracklinkImgSrc = function(props){
 		var src = "";
 		if(!isEmpty(props)) {
 			var omni = updateLinkProps(props); 
 			var obj = (omni.link) ? omni.link : this;
 			var linkType = (omni.linkType && omni.linkType === "exit") ? "e" : "o";
 			var protocol = s_omni.ssl ? "https://" : "http://";
 			var host = (s_omni.trackingServerSecure && s_omni.ssl) ? s_omni.trackingServerSecure : s_omni.trackingServer;
 			var version = "/" + (s_omni.mobile ? "5." : "") + "1/JS-" + s_omni.version;
 			var date = new Date(), timestamp = date.getYear();
 			
 			s_omni.linkObject = obj;
  			s_omni.linkURL = s_omni.ga(obj);
  		        s_omni.linkType = linkType;
  		        s_omni.linkName = omni.linkName || omni.linkGroup;
  		        s_omni.abort = false;
 			
 			try {
 				if( s_omni.nb() ) {
 					s_omni.ob();
 					var g = s_omni.mb();
 			  		timestamp = "t=" + s_omni.escape(date.getDate()
 						+ "/" + date.getMonth() + "/"
 						+ (timestamp < 1900 ? timestamp + 1900 : timestamp)
 						+ " " + date.getHours()
 						+ ":" + date.getMinutes()
 						+ ":" + date.getSeconds()
 						+ " " + date.getDay() + " "
 						+ date.getTimezoneOffset() + "&");

 					src = [protocol,host,"/b/ss/",s_omni.account,version,"/s",new Date().getTime(),"?AQB=1&ndh=1&",timestamp,g,"&AQE=1"].join('');
 				}
 			}
 			catch(e) {};
 		}
 		return src;
 	};
	/*
	 * Method: espn.track.set
	 * - updates any number of s_omni properties passed in as an arguments obj
	 * FYI - make sure you name the keys exactly as the s_omni properties, ie. pagename !== pageName
	 */
	espn.track.set = function(p,o){
		p = updateProps(p,o);
	};
	/*
	 * Method: espn.track.clear
	 *  Clears all values in props, eVars, heir and event variables.
	 */
	espn.track.clear = function() {
		// clear all variables
		s_omni.clearVars();
	};
	/*
	 * Method: getSWID
	 * - using log.espn.com service, we can access returning users SWID, or generate a new one for new visitors
	 * - deferred object
	 */
	espn.track.getSWID = function() {
		var defer = new $.Deferred(),
			SWID = window.sessionStorage['_swid'] || s_omni.Util.cookieRead("SWID"),
			protocol = (document.location.protocol === "https:") ? "https://" : "http://";

		if(!SWID && window.location.hostname.indexOf(".espn.com")===-1){
			$.ajax({
				url: protocol + 'log.espn.com/log?srvc=sz&silent&returnBody=SWID&responseType=JSONP',
				async: false,
				cache: true,
				jsonpCallback: 'dmpJSONP',
				contentType: 'application/json',
				dataType: 'jsonp'
			}).done(function(data){
				if(data && data.SWID){
					var _swid = data.SWID;
					window.sessionStorage['_swid'] = _swid;
					s_omni.Util.cookieWrite("SWID", _swid);
					defer.resolve(_swid);
				} else {
					defer.reject();
				}
			}).fail(function() {
				defer.reject();
			});
		} else {
			defer.resolve(SWID);
		}

		return defer.promise();
	};
	/*
	 * Method: espn.track.chartbeat
	 * - For tracking chartbeat dynamically via ajax calls.
	 *   This method assumes that chartbeat scripts have been loaded.
	 *
	 * Parameters
	 * > props
	 *
	 * Usage:
	 * espn.track.chartbeat({site : "espn", section : "/nba/standings", pagename : "page title"});
	 */
	espn.track.chartbeat = function(props) {
		var p = typeof props !== "undefined" ? props : {}, cbUrl, cbName;
		try {
			cbUrl = p.section || document.location.pathname;
			cbName = p.pagename || document.title;

			// set sections, authors and zones before virtualPage call
			window._sf_async_config.path = p.path || cbUrl;
			window._sf_async_config.sections = p.sections || cbUrl;
			window._sf_async_config.authors = p.authors || s_omni.contentType;
			if(typeof ad_site !== 'undefined') { window._sf_async_config.zone = ad_site; }

			pSUPERFLY.virtualPage(cbUrl,cbName);
		}
		catch(e) {}
	};

	espn.track.initCB = function(props) {
		if(props) {
			var p = props || {}, domain = p.domain || "www.espn.com",
				loadPubJS = (typeof p.loadPubJS !== "undefined") ? p.loadPubJS : false,
				loadVidJS = (typeof p.loadVidJS !== "undefined") ? p.loadVidJS : false,
				useCanonical = (typeof p.useCanonical !== "undefined") ? p.useCanonical : true;

			window._sf_async_config = {
				"uid":22222,
				"domain": domain,
				"pingServer":"pespn.chartbeat.net",
				"useCanonical":useCanonical,
				"useSubDomains":false,
				"path":window.location.pathname
			};

			if(p.path) { window._sf_async_config.path = p.path; }
			if(p.sections) { window._sf_async_config.sections = p.sections; }
			if(p.authors) { window._sf_async_config.authors = p.authors; }
			if(p.title) { window._sf_async_config.title = p.title; }
			if(typeof ad_site !== 'undefined') { window._sf_async_config.zone = ad_site; }

			// load both chartbeat_pub and chartbeat_video
			function loadScripts() {
				window._sf_endpt = (new Date()).getTime();
				var cbDomain = (("https:"==document.location.protocol)?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://static.chartbeat.com/");
				if(loadPubJS) {
					$.getScript(cbDomain+"js/chartbeat_pub.js");
				}
				if((loadVidJS) || (typeof StrategyInterface !== 'undefined' && (espn && espn.video))) {
					$.getScript(cbDomain+"js/chartbeat_video.js");
				}
				// load default chartbeat js others are disabled
				if(!loadVidJS && !loadPubJS) {
					$.getScript(cbDomain+"js/chartbeat.js");
				}
			}
			// reorder onload calls
			if( typeof espn_ui !== 'undefined' && espn_ui.loadReady ){
				loadScripts();
			}else{
				var onloadEvent = window.onload;
				window.onload = (typeof window.onload !== "function") ? loadScripts : function () { onloadEvent(); loadScripts(); }
			}
		}
	};
	/*
	 * Method: espn.track.comscore
	 * For firing comscore beacon calls dynamically.
	 * Assumes jQuery plugin is loaded
	 *
	 * Usage:
	 * espn.track.comscore();
	 */
	espn.track.comscore = function(props) {
		if(typeof self.COMSCORE !== 'undefined') {
			COMSCORE.beacon(_comscoreConfig); 
		} else {
			this.initComscore(props);
		}
	};
	 
	espn.track.initComscore = function(props) {
		if (jQuery !== 'undefined') {
			_comscoreConfig = props || _comscoreConfig;
			window._comscore = window._comscore || [];
			window._comscore.push(_comscoreConfig);
			jQuery.getScript((document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js");
		}
	};
	/*
	 * Method: espn.track.nielsen
	 * For firing nielsen tracking calls dynamically.
	 *
	 * Usage:
	 * espn.track.nielsen();
	 */
	espn.track.nielsen = function() {
		if(typeof nol_t !== 'undefined') {
			var config = _nielsenConfig[_nielsenConfig.key], trac = nol_t(config);
			trac.record().post();
		} else {
			if(!_isNielsenLoaded) {
				this.initNielsen();
			}
		}
	};
	/*
	 * Method: espn.track.initNielsen
	 * - init Nielsen with config variable to configure key and server values based on site or key
	 *
	 * Params
	 * > props
	 *
	 * Usage:
	 * espn.track.initNielsen({key: 'secure-au'});
	 *
	 */
	espn.track.initNielsen = function (props) {
		var key = props && props.key;
		if(key && (key in _nielsenConfig)) {
			_nielsenConfig.key = key
		}
		var config = _nielsenConfig[_nielsenConfig.key];
		if(!_isNielsenLoaded) {
			_isNielsenLoaded = true;
			$.getScript('//'+ config.server +'.imrworldwide.com/v60.js', function () {
				espn.track.nielsen();
			});
		}
	};
	/*
	 * Method: espn.track.bluekai
	 * For firing blue kai tracking calls dynamically.
	 *
	 * Usage:
	 * espn.track.bluekai();
	 */
	espn.track.bluekai = function(props){
		var siteIds = {
			"espn": 24667,
			"espnw":24767,
			"espnuk": 24765,
			"rugby": 24775,
			"f1": 24757,
			"theundefeated": 24769, 
			"fivethirtyeight": 24763,
			"cricinfo": 24753
		};
		var site = (props && props.site) ? props.site : (window.omniSite) ? window.omniSite : 'espn';
		if(site && site === 'espnuk' && espn.track && espn.track.data && espn.track.data.omniture && espn.track.data.omniture.section){
			section = espn.track.data.omniture.section;
			if(section && (section === 'f1' || section === 'rugby')){
				site = section;
			}
		}
		var siteId = siteIds[site], isBlueKai = window.location.search.indexOf('bluekai') > -1 ? true : false;
		if(siteId !== undefined || isBlueKai === true){
			window.bk_async = function(){
				try{
					if(typeof s_omni !== 'undefined'){
						bk_addPageCtx("pageName", (typeof s_omni.pageName !== 'undefined' ? s_omni.pageName : ''));
						bk_addPageCtx("channel", (typeof s_omni.channel !== 'undefined' ? s_omni.channel : ''));
						bk_addPageCtx("eVar34", (typeof s_omni.prop45 !== 'undefined' ? s_omni.prop45 : ''));
						bk_addPageCtx("events", (typeof s_omni.events !== 'undefined' ? s_omni.events : ''));
						bk_addPageCtx("prop1", (typeof s_omni.prop1 !== 'undefined' ? s_omni.prop1 : ''));
						bk_addPageCtx("swid", (espn.core && typeof espn.core.SWID !== 'undefined' ? espn.core.SWID : ''));
						bk_addPageCtx("prop4", (typeof s_omni.prop4 !== 'undefined' ? s_omni.prop4 : ''));
						bk_addPageCtx("prop9", (typeof s_omni.prop9 !== 'undefined' ? s_omni.prop9 : ''));
						bk_addPageCtx("prop23", (typeof s_omni.prop23 !== 'undefined' ? s_omni.prop23 : ''));
						bk_addPageCtx("prop25", (typeof s_omni.prop25 !== 'undefined' ? s_omni.prop25 : ''));
						bk_addPageCtx("prop26", (typeof s_omni.prop26 !== 'undefined' ? s_omni.prop26 : ''));
						bk_addPageCtx("prop30", (typeof s_omni.prop30 !== 'undefined' ? s_omni.prop30 : ''));
						bk_addPageCtx("prop32", (typeof s_omni.prop32 !== 'undefined' ? s_omni.prop32 : ''));
						bk_addPageCtx("prop45", (typeof s_omni.prop45 !== 'undefined' ? s_omni.prop45 : '')); //set for tv channels, which we don't have right now
					}
				}
				catch(e){}
				window.bk_allow_multiple_calls = true;
				window.bk_use_multiple_iframes = true;
				window.bk_pixel_url = 'https://tags.bluekai.com/';
				window.bk_pixel_secure = 'https://tags.bluekai.com/';

				if(window.BKTAG && window.BKTAG.doTag) {
					window.BKTAG.doTag(siteId, 10);
				}
			};

			if(typeof espn.track.bluekaiLoaded === 'undefined'){
				$.when( espn.track.getSWID(), $.getScript('https://tags.bkrtx.com/js/bk-coretag.js') ).done(function(swid) {
					// Only reset the in-memory SWID if swid comes back
					if ((typeof swid) === 'string' && swid.length) {
						espn = window.espn || {};
						espn.core = espn.core || {};
						espn.core.SWID = swid;
					}
					espn.track.bluekaiLoaded = true;
				});
			} else {
				window.bk_async();
			}
		}
	};
	/*
	 * Method: espn.track.init
	 * - base init function. Not called by default
	 *
	 * Setup custom ini tracking by
	 * - update tracking data,
	 * - get member services data (if applicable),
	 * - set global analytics properties
	 * - call initial page tracking function
	 */
	espn.track.init = function(props) {

		var p = props || {},
			// init Chartbeat - disabled by default
			initCB = (typeof p.initCB !== "undefined") ? p.initCB : false,
			// init Nielsen - disabled by defualt
			initNielsen = (typeof p.initNielsen !== "undefined") ? p.initNielsen : false,
 			cb = p.chartbeat || {domain:"espnfc.com", loadPubJS:false, loadVidJS:false},
 			nb = p.nielsen || {key: "default"};

		if(initCB) {
			espn.track.initCB(cb);
		}

		if(initNielsen) {
			espn.track.initNielsen(nb);
		}
	};
	/* INIT OMNITURE CONFIGS
	   - We get parameter values needed to process for desktop and mobile
	   - Current URL string. Replace method used to read query parameters from location href value. Parameters are pushed into the _qparams object
	   - We set the 'addglobalsuite' flag if it doesn't exist
	   - Basic s_omni.account implementation. First we, check that the s_omni.account variable has been declared prior to this function call, otherwise set to default value
	   - Make a call to the espn.track namespace object that updates the s_omni.account value.
	 */
	(function() {

		// get query params and set to _qparams object
		var setQParams = location.search.replace(/([^?=&]+)(=([^&#]*))?/g,function($0, $1, $2, $3) { _qparams[$1]=$3; });
		if(typeof s_omni === "undefined") {
			// config global s_omni
			window.s_omni = new AppMeasurement();
			s_omni.account = setReportSuite();
			// Config Visitor ID Service - Requires VisitorAPI.js //
			s_omni.visitor = Visitor.getInstance("EE0201AC512D2BE80A490D4C@AdobeOrg");
			s_omni.visitorNamespace = "espn";
			s_omni.trackingServer="w88.espn.com";
			s_omni.trackingServerSecure="sw88.espn.com";

			if(window.location.hostname.match(/\.go\./)){
				s_omni.trackingServer = "w88.go.com";
				s_omni.trackingServerSecure = "sw88.go.com";
			}

			s_omni.dc=112;
			// setup all tracking, campaigns, plugins and modules
			setConfig(s_omni);
			// broadcast to omni.loaded and return s_omni
			if(typeof jQuery !== "undefined" && jQuery.publish && typeof jQuery.publish === "function") {
				jQuery.publish("omni.loaded",[s_omni]);
			}
		}

	})();

})(jQuery,window,document);

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.6.1
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.6.1";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Cb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.sb=function(a){try{console.log(a)}catch(b){}};a.Da=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.kb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.H=[];a.ea=function(c,b,d){if(a.wa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.fa)for(a.fa=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.fa=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.H.push({m:c,a:b,t:e}),a.fa||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.qa();0<a.H.length;){d=a.H.shift();if(b&&!d.t&&d.t>c){a.H.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.wa=1;a[d.m].apply(a,d.a);a.wa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ea("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.L,(m=a.lightTrackVars)&&(m=","+m+","+a.ja.join(",")+",");else{d=a.e;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Bb,f=a[e].Ab));m&&(m=","+m+","+a.C.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.p=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.p(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.Da(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.mb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.L,(n=a.lightTrackVars)&&(n=","+n+","+a.ja.join(",")+",");else{b=a.e;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Bb,r=a[e].Ab));n&&(n=","+n+","+a.C.join(",")+",");r&&(r=","+r+",",
n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.p("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.p("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.p("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.p("mts",a[e],n,e));g="";break;default:a.Da(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.c&&(c+=a.c)}return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.Fb||"undefined"!=""+a.wb&&"HTML"!=(""+a.wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.za=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.I=function(c){var b=a.B(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.za(c),e)?{id:e.substring(0,100),type:g}:0};a.Db=function(c){for(var b=a.B(c),d=a.I(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.I(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.vb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ka=1;d||(a.ka=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.I(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.I(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ka=1;!e&&d&&(e=a.za(d));e&&
!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ca(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),
g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.c="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.c="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+
"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.nb=function(){var c=a.ka,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),
b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.c=a.p("c",m)+(a.c?a.c:"");if(c||a.c){c&&!a.c&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.c+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.c+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,1),d=1);c||(d=1);if(d){e=
"";m=2;!c&&a.c&&(e=a.escape(f.join(","))+"="+a.escape(a.c),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ob=function(){if(!a.zb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&
(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Eb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=
f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.zb=1}};a.M={};a.loadModule=function(c,b){var d=a.M[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.M[c]=a[c]=d;d.Sa=function(){return d.Wa};d.Xa=function(b){if(d.Wa=b)a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Sa,set:d.Xa}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=
b,a.ea(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.M)if(!Object.prototype[b]&&(d=a.M[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.N=function(c,b){var d,
f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.ra:a.e,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.La=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.ra:a.e,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ib=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,
7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};a.Ra=function(c){var b=
a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.aa=!1;a.F=!1;a.Za=function(){a.F=!0;a.i()};a.Y=!1;a.R=!1;a.Va=function(c){a.marketingCloudVisitorID=c;a.R=!0;a.i()};a.ba=!1;a.S=!1;a.$a=function(c){a.visitorOptedOut=c;a.S=!0;a.i()};a.V=!1;a.O=!1;a.Na=function(c){a.analyticsVisitorID=
c;a.O=!0;a.i()};a.X=!1;a.Q=!1;a.Pa=function(c){a.audienceManagerLocationHint=c;a.Q=!0;a.i()};a.W=!1;a.P=!1;a.Oa=function(c){a.audienceManagerBlob=c;a.P=!0;a.i()};a.Qa=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.D=!1;a.qa=function(){a.D=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.aa||a.F||(a.Ra(a.Za)?a.F=!0:a.aa=!0);if(a.aa&&!a.F)return!1;b&&b.isAllowed()&&(a.Y||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||
(a.Y=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Va]),a.marketingCloudVisitorID&&(a.R=!0)),a.ba||a.visitorOptedOut||!b.isOptedOut||(a.ba=!0,a.visitorOptedOut=b.isOptedOut([a,a.$a]),a.visitorOptedOut!=q&&(a.S=!0)),a.V||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.V=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Na]),a.analyticsVisitorID&&(a.O=!0)),a.X||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.X=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,
a.Pa]),a.audienceManagerLocationHint&&(a.Q=!0)),a.W||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.W=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Oa]),a.audienceManagerBlob&&(a.P=!0)),a.Y&&!a.R&&!a.marketingCloudVisitorID||a.V&&!a.O&&!a.analyticsVisitorID||a.X&&!a.Q&&!a.audienceManagerLocationHint||a.W&&!a.P&&!a.audienceManagerBlob||a.ba&&!a.S)&&(c=!1);a.Z||a.D||(a.Qa(a.qa)?a.D=!0:a.Z=!0);a.Z&&!a.D&&(c=!1);return c};a.k=q;a.q=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};
f.eb=c;f.cb=b;f.ab=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.q&&(a.q=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.Ya(),a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.cb.apply(c.eb,c.ab)};a.Ya=function(){a.q&&(clearInterval(a.q),a.q=0)};a.Ta=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.La(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;
var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+
f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.jb&&(a.authState=a.visitor.jb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Ta(c)||(b&&a.N(b),c&&(d={},a.La(d,0),a.N(c)),a.qb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.lb()),a.vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&
(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ma||(a.referrer=r.document.referrer),a.Ma=1,a.referrer=a.ib(a.referrer),a.l("_g")),a.nb()&&!a.abort&&(a.ob(),g+=a.mb(),a.ub(e,g),a.l("_t"),a.referrer=""))),c&&a.N(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.c=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.u=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.e.length;c++)if(b=a.e[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.ub=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+
"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.yb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.hb(d);a.ga()};a.hb=function(c){a.g||a.pb();a.g.push(c);a.ia=a.A();a.Ja()};a.pb=function(){a.g=a.rb();a.g||(a.g=[])};a.rb=function(){var c,b;if(a.na()){try{(b=k.localStorage.getItem(a.la()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.na=function(){var c=!0;a.trackOffline&&a.offlineFilename&&
k.localStorage&&k.JSON||(c=!1);return c};a.Aa=function(){var c=0;a.g&&(c=a.g.length);a.o&&c++;return c};a.ga=function(){if(a.o&&(a.v&&a.v.complete&&a.v.timeout&&a.v.pa(),a.o))return;a.Ba=q;if(a.ma)a.ia>a.K&&a.Ha(a.g),a.oa(500);else{var c=a.bb();if(0<c)a.oa(c);else if(c=a.xa())a.o=1,a.tb(c),a.xb(c)}};a.oa=function(c){a.Ba||(c||(c=0),a.Ba=setTimeout(a.ga,c))};a.bb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Ga;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.xa=function(){if(0<a.g.length)return a.g.shift()};a.tb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.sb(b)}};a.Ua=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.U=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.U=!0,a.T=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.T=function(a){return k.$.parseJSON(a)},a.U=!0):a.T=function(){return null};a.xb=function(c){var b,
d,f;a.Ua()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.U?b.ta=!0:b=0));!b&&a.Ka&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.va=function(){try{b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(a){}};b.onload=b.pa=function(){b.va();a.gb();a.ca();a.o=0;a.ga();if(b.ta){b.ta=!1;try{var c=a.T(b.responseText);a.AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.ya=function(){b.va();(a.trackOffline||a.ma)&&a.o&&a.g.unshift(a.fb);a.o=0;a.ia>a.K&&a.Ha(a.g);a.ca();
a.oa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.pa():b.ya())};a.Ga=a.A();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ea)try{f.removeChild(a.Ea)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ea=a.v}b.timeout=setTimeout(function(){b.timeout&&(b.complete?b.pa():(a.trackOffline&&
b.abort&&b.abort(),b.ya()))},5E3);a.fb=c;a.v=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.G||a.u)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.da=setTimeout(a.ca,a.forcedLinkTrackingTimeout)};a.gb=function(){if(a.na()&&!(a.Fa>a.K))try{k.localStorage.removeItem(a.la()),a.Fa=a.A()}catch(c){}};a.Ha=function(c){if(a.na()){a.Ja();try{k.localStorage.setItem(a.la(),k.JSON.stringify(c)),a.K=a.A()}catch(b){}}};a.Ja=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.xa()}};a.forceOffline=function(){a.ma=!0};a.forceOnline=function(){a.ma=!1};a.la=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};a.Ca=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.yb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.N(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.C="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.e=a.C.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ja="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.L=a.ja.slice(0);a.ra="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.e.push("prop"+n),a.L.push("prop"+n)),a.e.push("eVar"+n),a.L.push("eVar"+n),6>n&&a.e.push("hier"+n),4>n&&a.e.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.e=a.e.concat(n);a.C=a.C.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ga=0;a.ia=0;a.K=0;a.Fa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ka=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Ka=!0}}catch(z){}a.ca=function(){a.da&&(k.clearTimeout(a.da),a.da=q);a.j&&a.G&&a.j.dispatchEvent(a.G);a.u&&("function"==typeof a.u?a.u():a.j&&a.j.href&&(a.d.location=
a.j.href));a.j=a.G=a.u=0};a.Ia=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ua)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.ua=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.J&&a.J==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.J=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.J==m&&(a.J=0)},1E4);f=a.Aa();a.track();if(f<a.Aa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ca(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.G=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ua=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Ia,30)};a.Ia();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
