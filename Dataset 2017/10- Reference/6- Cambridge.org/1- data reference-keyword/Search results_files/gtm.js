// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 2
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){














var db=this;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Oa=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},cb=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=cb(e,c[d])):Oa(e)?(Oa(c[d])||(c[d]={}),c[d]=cb(e,c[d])):c[d]=e}return c};var Sa=null,jb=Math.random(),kb=null,Ga=null,$a=!1,lb={},mb={},ab={};var nb,ob,pb,qb,rb,sb,tb,ub,vb,xb,yb,zb,T,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Pb,Qb,Rb,Sb,Tb,Ub,Wb,Xb,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,td,ud,vd,wd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,ae,be,ce,de,ee,fe,ge,he,ie,je,ke,le,me,ne,oe,pe,qe,re,se,te,ue,ve,we,xe,ye,ze,Ae,
Be,Ce,De,Ee,Fe,Ge,He,Ie,Je,Ke,Le,Me,Ne,Oe,Pe,Qe,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,df,ef,ff,gf,hf,jf,kf,lf,mf,nf,of,pf,qf,rf,sf;
(function(){var a=function(a){return{toString:function(){return a}}};nb=a("");ob=a("");pb="";qb=a("");rb=a("");sb=a("");tb=a("");ub=a("");vb=a("");xb=a("");yb=a("");zb=a("");T=a("");Ab=a("");Bb=a("");Cb=a("");
Db=a("");Eb=a("");Fb=a("");Gb=a("");Hb=a("");Ib=a("");Jb=a("");Kb=a("");Lb=a("");Mb=a("");Nb=a("");Pb=a("");Qb=a("");Rb=a("");
Sb=a("");Tb=a("");Ub=a("");Wb=a("");Xb=a("");Yb=a("");Zb=a("0");$b=a("");ac=a("");bc=a("");cc=a("");dc=a("");ec=a("");fc=a("");gc=a("");hc=a("");ic=a("");
jc=a("");kc=a("");lc=a("");mc=a("");nc=a("");oc=a("");pc=a("");qc=a("");rc=a("");sc=a("");tc=a("");uc=a("");vc=a("");wc=a("");xc=a("");yc=a("");zc=a("");
Ac=a("");Bc=a("");Cc=a("");Dc=a("");Ec=a("");Gc=a("");Hc=a("");Ic=a("");Jc=a("");Kc=a("");Lc=a("");Mc=a("");Nc=a("");Oc=a("");Pc=a("");Qc=a("");
Rc=a("");Sc=a("");Tc=a("");Uc=a("");Vc=a("");Wc=a("");Xc=a("");Yc=a("");Zc=a("");$c=a("");ad=a("");bd=a("1");cd=a("");dd=a("3");ed=a("4");fd=a("");gd=a("");
hd=a("");id=a("");jd=a("");kd=a("");ld=a("");md=a("");nd=a("2");od=a("");pd=a("");qd=a("");rd=a("");td=a("");ud=a("");vd=a("");wd=a("");Ad=a("");Bd=a("");Cd=a("");Dd=a("");Ed=a("");
Fd=a("");Gd=a("");Hd=a("");Id=a("");Jd=a("");Kd=a("");Ld=a("");Md=a("");Nd=a("");Od=a("");Pd=a("");Qd=a("");Rd=a("");Sd=a("");Td=a("");Ud=a("");Vd=a("");Wd=a("");Xd=a("");Yd=a("");
Zd=a("");$d=a("");ae=a("");be=a("");ce=a("");de=a("");ee=a("");fe=a("");ge=a("");he=a("");ie=a("");je=a("");ke=a("");le=a("");me=a("");ne=a("");oe=a("");pe=a("");qe=a("");
re=a("");se=a("");te=a("");ue=a("");ve=a("");we=a("");xe=a("");ye=a("");ze=a("");Ae=a("");Be=a("");Ce=a("");De=a("");Ee=a("");Fe=a("");Ge=
a("");He=a("");Ie=a("");Je=a("");Ke=a("");Le=a("");Me=a("");Ne=a("");Oe=a("");Pe=a("");Qe=a("");Re=a("");Se=a("");Te=a("");Ue=a("");Ve=a("");We=a("");
Xe=a("");Ye=a("");Ze=a("");$e=a("");af=a("");bf="";cf=a("");df=a("");ef=a("");ff=a("");gf=a("");hf=a("");jf=a("");kf=a("");lf=a("");mf=a("");nf=a("");of=
a("");pf=a("");qf=a("");rf=a("");sf=a("")})();var bb=function(a,b){return cb(a,b)},tf=function(){},R=function(a){return"function"==typeof a},N=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},uf=function(a){return"number"==hb(a)&&!isNaN(a)},vf=function(a){return/^[0-9]+$/.test(a)},wf=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Fa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},O=function(a){return Math.round(Number(a))||
0},Ia=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Cf=function(a){var b=[];if(N(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},J=function(){return new Date},Ka=function(a,b){if(!uf(a)||!uf(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Df=function(){this.prefix="gtm.";this.values={}};Df.prototype.set=function(a,b){this.values[this.prefix+a]=b};Df.prototype.get=function(a){return this.values[this.prefix+a]};
Df.prototype.contains=function(a){return void 0!==this.get(a)};
var Ef=function(a,b,c){try{if(!a[Hd])return a[bd](a,b||tf,c||tf);c&&c()}catch(d){}return!1},Ff=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Fa(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},Gf=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Hf=function(a){return function(){return a("GTM-PKX6ZK")}},If=function(a){for(var b=0;b<a.length;b++)a[b]()},Ma=function(){return"gtm"+Jf()},
Jf=function(){var a=Sa.sequence||0;Sa.sequence=a+1;return a},Pa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Lf=function(a){return null!==a&&void 0!==a&&void 0!==a.length},Mf=function(a,b){0==b?a.Xa=!0:a.complete=!0;var c=a.g;a.s&&(a.s.Ha[c]=b);lb[c]&&(lb[c].state=b)},Of=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var w=window,M=document,Qf=navigator,Za=function(a,b){var c=w[a];w[a]=void 0===c?b:c;return w[a]},L=function(a,b,c,d){return(d||"http:"!=w.location.protocol?a:b)+c},Rf=function(a){var b=M.getElementsByTagName("script")[0]||M.body||M.head;b.parentNode.insertBefore(a,b)},Ra=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},r=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;Ra(d,b);c&&(d.onerror=c);Rf(d);return d},ia=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";Rf(c);Ra(c,b);void 0!==a&&(c.src=a);return c},G=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Q=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},z=function(a){w.setTimeout(a,
0)},Ua=!1,Va=[],Sf=function(a){if(!Ua){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ua=!0;for(var e=0;e<Va.length;e++)Va[e]()}Va.push=function(){for(var a=0;a<arguments.length;a++)z(arguments[a]);return 0}}},Tf=0,Uf=function(){if(!Ua&&140>Tf){Tf++;try{M.documentElement.doScroll("left"),Sf()}catch(a){w.setTimeout(Uf,50)}}},za=function(a){var b=M.getElementById(a);if(b&&ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ua(document.all[a][c],
"id")==a)return document.all[a][c];return b},ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},xa=function(a){return a.target||a.srcElement||{}},Ea=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ya=function(a){var b=M.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},
ya=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},Vf=!1,Wf=[],Xf=function(){if(!Vf){Vf=!0;for(var a=0;a<Wf.length;a++)Wf[a]()}},Yf=function(a){a=a||w;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},Wa=function(a){window.console&&window.console.log&&window.console.log(a)};var aa=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||w.location.protocol.replace(":","")).toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||w.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:w.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var k=
f.split("/");0<=wf(d||[],k[k.length-1])&&(k[k.length-1]="");f=k.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var l=f.split("&"),m=0;m<l.length;m++){var n=l[m].split("=");if(decodeURIComponent(n[0]).replace(/\+/g," ")==e){f=decodeURIComponent(n.slice(1).join("=")).replace(/\+/g," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Zf=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},ba=function(a){var b=
M.createElement("a");a&&(b.href=a);return b};var ja=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ga=function(a,b,c){G(a,b,c)},ha=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=aa(ba(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},Ba=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var $f=new Df,ag={},cg={set:function(a,b){cb(bg(a,b),ag)},get:function(a){return S(a,2)},reset:function(){$f=new Df;ag={}}},S=function(a,b){if(2==b){for(var c=ag,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return $f.get(a)},bg=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var dg=!1,eg=!1;var fg=Math.random(),gg="0.100000">fg;
var hg=function(a,b){if(gg){var c="//www.googletagmanager.com/a?id=GTM-PKX6ZK&cv=2",d=function(a,b){b&&(c+=a+encodeURIComponent(b))};d("&v=","t");d("&n=",a);d("&s=",b&&b.state);d("&h=",b&&b.hideLatency);d("&g=",b&&b.gaLatency);d("&p=",b&&b.loadBy);d("&o=",b&&b.timeout);d("&l=",J().getTime()-O(kb));c+="&sr=0.100000";d("&ps=",fg);d("&cb=",Ka());G(c)}},ig=tf;var jg=tf,kg=[],lg=!1,ca=function(a){return w["dataLayer"].push(a)},mg=function(a){var b=!1;return function(){!b&&R(a)&&z(Hf(a));b=!0}},sg=function(){for(var a=!1;!lg&&0<kg.length;){lg=!0;var b=kg.shift();if(R(b))try{b.call(cg)}catch(oa){}else if(N(b))a:{var c=b;if("string"==hb(c[0])){for(var d=c[0].split("."),e=d.pop(),f=c.slice(1),g=ag,h=0;h<d.length;h++){if(void 0===g[d[h]])break a;g=g[d[h]]}try{g[e].apply(g,f)}catch(oa){}}}else{var k=void 0,l=void 0,m=b;for(l in m)if(m.hasOwnProperty(l)){var n=
l,q=m[l];$f.set(n,q);cb(bg(n,q),ag)}var u=!1,y=m.event;if(y){if(!m.hasOwnProperty("gtm.uniqueEventId")){m["gtm.uniqueEventId"]=Jf();var t=m["gtm.uniqueEventId"];$f.set("gtm.uniqueEventId",t);cb(bg("gtm.uniqueEventId",t),ag)}k=m["gtm.uniqueEventId"];Ga=y;var x=mg(m.eventCallback),F=m.eventTimeout;F&&w.setTimeout(x,Number(F));u=jg(k,y,x,m.eventReporter)}kb||(kb=m["gtm.start"])&&ig();var B=m,A=k,E=y,H=ag;if(!u){var C=k,I=y;}Ga=null;a=u||a}var P=b,K=ag;rg();lg=!1}return!a},tg=function(){var a=sg();try{var b=w["dataLayer"].hide;if(b&&void 0!==b["GTM-PKX6ZK"]&&b.end){b["GTM-PKX6ZK"]=
!1;var c=!0,d;for(d in b)if(!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a};var wa=function(a,b,c){Q(a,b,c,void 0)},ea=function(a,b,c){r(a,b,c)},Ha=function(a,b){return S(a,b||2)},fa=function(a,b){w[a]=b},p=function(a,b,c){var d=w;b&&(void 0===d[a]||c&&!d[a])&&(d[a]=b);return d[a]},v=function(a,b,c,d){return(d||"https:"==w.location.protocol?a:b)+c};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},yg=function(){var a=S("gtm.whitelist");
var b=a&&xg(Cf(a),vg),c=S("gtm.blacklist")||S("tagTypeBlacklist")||[];ug.test(w.location&&w.location.hostname)&&(c=Cf(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&xg(Cf(c),wg),e={};return function(f){var g=f&&f[bd];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>wf(b,g.a))if(g.b&&0<g.b.length)for(var k=0;k<g.b.length;k++){if(0>wf(b,
g.b[k])){h=!1;break a}}else{h=!1;break a}h=!0}var l=!1;if(c){var m;if(!(m=0<=wf(d,g.a)))a:{for(var n=g.b||[],q=new Df,u=0;u<d.length;u++)q.set(d[u],!0);for(u=0;u<n.length;u++)if(q.get(n[u])){m=!0;break a}m=!1}l=m}return e[g.a]=!h||l}};var Da=function(a){var b=M;return zg?b.querySelectorAll(a):null},Ag=!1;if(M.querySelectorAll)try{var Bg=M.querySelectorAll(":root");Bg&&1==Bg.length&&Bg[0]==M.documentElement&&(Ag=!0)}catch(a){}var zg=Ag;var _eu=function(a){var b=String(S("gtm.elementUrl")||a[yc]||""),c=ba(b);return b};_eu.a="eu";_eu.b=["google"];var Gg=/(^|\.)doubleclick\.net$/i,Hg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ja=function(a){for(var b=String(M.cookie).split(";"),c=[],d=0;d<b.length;d++){var e=b[d].split("="),f=Fa(e[0]);if(f&&f==a){var g=Fa(e.slice(1).join("="));g&&(g=decodeURIComponent(g));c.push(g)}}return c},Ig=function(a,b,c,d,e){if(Gg.test(M.location.hostname)||"/"==c&&Hg.test(d))return!1;var f=a+"="+b+"; ";c&&(f+="path="+c+"; ");e&&(f+="expires="+e.toGMTString()+"; ");d&&(f+="domain="+d+";");var g=M.cookie;M.cookie=f;return g!=
M.cookie||0<=wf(Ja(a),b)},Jg=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Kg=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length},Lg=function(){var a=aa(w.location,"host",!0).split(".");if(4==a.length&&/^[0-9]*$/.exec(a[3]))return["none"];for(var b=[],c=a.length-2;0<=c;c--)b.push(a.slice(c).join("."));b.push("none");return b};var Mg=function(a,b){this.f=a;this.j=b};Mg.prototype.toString=function(){var a=""+this.f;1<this.j&&(a=a+"-"+this.j);return a};var Ng=function(a,b){this.Fa=a;this.ka=b};Ng.prototype.toString=function(){return""+this.ka+"."+this.Fa};var Qg=function(a,b){var c=new Og(null,a,b);Pg(c);return c},Og=function(a,b,c){this.Oa=Math.floor(J().getTime()/864E5);this.ja=b||"auto";this.aa=c||"/";var d=Jg(this.ja),e=Kg(this.aa);this.F=a||new Mg(d,e);this.h=[];this.C=new Df},Sg=function(a,b,c){b&&(""==c.Fa?Rg(a,b):(a.C.contains(b)||a.h.push(b),a.C.set(b,c)))},Tg=function(a,b){for(var c=0;c<b.length;c++)Sg(a,b[c][0],b[c][1])},Rg=function(a,b){var c=wf(a.h,b);0<=c&&a.h.splice(c,1);a.C.set(b,void 0)},Ug=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.C.get(d)])}return b},Vg=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.C.get(a.h[c]).ka);return 864E5*b};Og.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.C.get(c).toString())}return"GAX1."+this.F.toString()+"."+a.join("!")};
var Wg=function(a,b){for(var c=new Date,d=Kg(a.aa),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.C.get(g).ka<a.Oa&&e.push(g)}for(f=0;f<e.length;f++)Rg(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime(Vg(a));if("auto"!=a.ja)return Ig("_gaexp",a.toString(),a.aa,a.ja,c);for(var h=Lg(),k=0;k<h.length;k++)if("none"!=h[k]&&(a.F=new Mg(Jg(h[k]),d),Ig("_gaexp",a.toString(),a.aa,h[k],c)))return!0;return!1},Pg=function(a){for(var b=a.F.f,c=a.F.j,d=Ja("_gaexp"),e=[],f=0;f<d.length;f++){var g=Xg(a,d[f]);g&&e.push(g)}Of(e,
function(a,d){var e=a.F,f=d.F;return e.f==f.f&&e.j==f.j?!1:e.f==b&&e.j==c?!0:f.f==b&&f.j==c?!1:e.f==b?f.f!=b||e.j<f.j:f.f==b?!1:e.j==c?f.f!=b&&(f.j!=c||e.f<f.f):f.j==c?!1:e.f<f.f||e.f==f.f&&e.j<f.j});a.F=0<e.length?e[0].F:new Mg(b,c);for(f=e.length-1;0<=f;f--)Tg(a,Ug(e[f]))},Xg=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=Fa(e[0]);if(0!=f.length){var g=2==e.length?Fa(e[1]):"1";if(vf(f)&&vf(g)){d=new Mg(O(f),O(g));
break a}}}d=void 0}if(d){for(var h=new Og(d,a.ja,a.aa),k=(c[2]||"").split("!"),l=0;l<k.length;l++){var m=k[l].split(".");if(3==m.length){if(!vf(m[1]))return;Sg(h,m[0],new Ng(m[2],O(m[1])))}}return h}}};var _f=function(a){var b=String(S("gtm.referrer")||M.referrer);if(!b)return b;var c=ba(b);return b};_f.a="f";_f.b=["google"];var Ca=function(a){var b=w.location,c;(c=a[nc]?a[nc]:S("gtm.url"))&&(b=ba(String(c)));var d=b.href,e=d.indexOf("#"),f=0>e?d:d.substr(0,e);a[Zb]&&(f=aa(b,a[Zb],a[ze],a[xc],a[me]));return f},_u=Ca;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a[zb])==String(a[T])};_eq.a="eq";_eq.b=["google"];var La=new String("undefined"),jh=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===La?b:a[d]);return c.join("")}};jh.prototype.toString=function(){return this.resolve("undefined")};jh.prototype.valueOf=jh.prototype.toString;var kh={},lh=function(a,b){var c=Jf();kh[c]=[a,b];return c},mh=function(a){var b=a?0:1;return function(a){var c=kh[a];if(c&&R(c[b]))c[b]();kh[a]=void 0}};var nh=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oh=function(a,b){return a<b?-1:a>b?1:0};var ph;a:{var qh=db.navigator;if(qh){var rh=qh.userAgent;if(rh){ph=rh;break a}}ph=""}var W=function(a){return-1!=ph.indexOf(a)};var sh=function(){W("iPod")},th=function(){return W("iPhone")&&!W("iPod")&&!W("iPad")};var uh=function(a){uh[" "](a);return a};uh[" "]=function(){};var wh=function(a,b){var c=vh;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var xh=W("Opera"),yh=W("Trident")||W("MSIE"),zh=W("Edge"),Ah;if(Ah=W("Gecko"))Ah=!(-1!=ph.toLowerCase().indexOf("webkit")&&!W("Edge"));var Bh=Ah&&!(W("Trident")||W("MSIE"))&&!W("Edge"),Ch=-1!=ph.toLowerCase().indexOf("webkit")&&!W("Edge");Ch&&W("Mobile");W("Macintosh");W("Windows");W("Linux")||W("CrOS");var Dh=db.navigator||null;Dh&&(Dh.appVersion||"").indexOf("X11");W("Android");th();W("iPad");sh();th()||W("iPad")||sh();var Eh=function(){var a=db.document;return a?a.documentMode:void 0},Fh;
a:{var Gh="",Hh=function(){var a=ph;if(Bh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(zh)return/Edge\/([\d\.]+)/.exec(a);if(yh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ch)return/WebKit\/(\S+)/.exec(a);if(xh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Hh&&(Gh=Hh?Hh[1]:"");if(yh){var Ih=Eh();if(null!=Ih&&Ih>parseFloat(Gh)){Fh=String(Ih);break a}}Fh=Gh}
var Jh=Fh,vh={},Kh=function(a){return wh(a,function(){for(var b=0,c=nh(String(Jh)).split("."),d=nh(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{var k=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],l=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==k[0].length&&0==l[0].length)break;b=oh(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||oh(0==k[2].length,0==l[2].length)||oh(k[2],l[2]);g=k[3];h=l[3]}while(0==b)}return 0<=b})},Lh;
var Mh=db.document;Lh=Mh&&yh?Eh()||("CSS1Compat"==Mh.compatMode?parseInt(Jh,10):5):void 0;var Nh;if(!(Nh=!Bh&&!yh)){var Oh;if(Oh=yh)Oh=9<=Number(Lh);Nh=Oh}Nh||Bh&&Kh("1.9.1");yh&&Kh("9");var Xa=function(a,b){var c="";yh&&!Ph(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Qh)a.srcdoc=d;else if(Rh){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Sh(a,d)},Qh=Ch&&"srcdoc"in document.createElement("iframe"),Rh=Bh||Ch||yh&&Kh(11),Sh=function(a,b){yh&&Kh(7)&&!Kh(10)&&6>Th()&&Uh(b)&&(b=Vh(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};yh&&!Ph(a)?Wh(a,c):c()},Th=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Ph=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{uh(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(e){b=!1}return b}catch(e){return!1}},Xh=0,Wh=function(a,b){var c="goog_rendering_callback"+Xh++;db[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Uh=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Vh=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var mi=function(a,b,c,d,e){var f=a+"{"+(b+": "+c+(d?" !important":""))+"}";e&&(f=e+"{"+f+"}");var g=document;if(g.createStyleSheet){var h=ji(g),k=h.rules.length;h.insertRule(f,k);return function(){h.deleteRule?h.deleteRule(k):h.removeRule(k);h.insertRule("x {}",k)}}var l=ki(f,g);li(l,g);var m=l.parentNode;return function(){m.removeChild(l)}},ni=null,ji=function(a){if(ni)return ni;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b],d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return ni=
c}0==a.styleSheets.length&&a.createStyleSheet();return ni=a.styleSheets[0]},ki=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},li=function(a,b){var c=b||document,d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)};var ui={},vi=void 0,wi=function(a){var b=ui[a];b||(b={id:a,v:[],W:0,Ia:null,za:void 0,Da:!1},ui[a]=b);vi=b},yi=function(a,b,c,d){var e=vi;if(!zg||!e)return!1;var f={id:e.id+":"+e.v.length,fb:b,U:[],$a:c,G:a,ua:0,sa:d||null,Na:0,V:!1};e.v.push(f);null===a?(f.V=!0,b(null)):xi(e);return!0},zi=function(a){var b=mi(a,"visibility","hidden",!0);return function(){R(b)&&b.apply();b=null}},Ai=function(a,b,c,d){var e=b;if(!Ua){var f=zi(a.A);Va.push(f);e=function(a,c){var d=b(a,c);f();return d}}return yi(a,e,
c,d)},xi=function(a){if(!a.Da){for(var b=a.W;b<a.v.length;b++){var c=a.v[b],d=b==a.W;if(!c.V&&!Bi(d,c))break;c.V&&d&&a.W++}a.v.length>a.W?(a.Ia||(a.Ia=w.setTimeout(function(){a.Ia=null;xi(a)},80)),Ua||a.za||(a.za=function(){z(function(){xi(a)})},Q(M,"DOMContentLoaded",a.za))):Ci(a)}},Ci=function(a){for(var b=0;b<a.v.length;b++){var c=a.v[b];if(c.G)for(var d=Da(c.G.A)||[],e=0;e<d.length;e++){var f=d[e];f.gtmProgressiveApplied&&f.gtmProgressiveApplied[c.id]||(Di(f,c.id),c.U.push(Ei(f,c.id)))}}},Bi=
function(a,b){var c=[];if(b.G){var d=Fi(b.G,b.id),e=null;b.sa&&(e=Fi(b.sa,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!Ua&&(null===b.sa.o||b.Na+c.length<b.sa.o)))break;c.push({element:g,Jb:h})}}if(!Ua&&b.$a&&(!a||null==b.G.o||b.G.o!=b.ua+c.length))return!1;for(var k=0;k<c.length;k++){var l=c[k].element,m=c[k].Jb,n;b.ua++;Di(l,b.id);m&&(b.Na++,n=b.id+"-t",Di(m,n));var q=b.fb(l,m);R(q)&&b.U.push(q);b.U.push(Ei(l,b.id));m&&n&&b.U.push(Ei(m,n))}if(b.G.o&&
b.G.o==b.ua||Ua)b.V=!0;return!0},Di=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},Ei=function(a,b){return function(){a.gtmProgressiveApplied&&delete a.gtmProgressiveApplied[b]}},Fi=function(a,b){for(var c=Da(a.A)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.D&&!Gi(f))break;d.push(f)}}return d},Gi=function(a){if(Ua)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var ka,Hi,Ii,sa=/(Firefox\D28\D)/g.test(Qf.userAgent),Ki=function(a,b){return function(c){c=c||w.event;var d=xa(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=ya(d,["a","area"]),e=!d||!d.href||Ji(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?ka:Ii;if(c.defaultPrevented||!1===c.returnValue||c.X&&c.X()){if(d){var g={simulateDefault:!1},h=la(f,["wnc","nwnc"]);h&&ma(a,d,g,f.wt,h)}}else{if(d){var g={},k,l=la(f,["wnc",
"nwnc","nwc","wc"]);(k=ma(a,d,g,f.wt,l))||(na(g.eventReport,f)?b=!0:e=!0);e=e||k||"LINK_CLICK"==a&&sa;g.simulateDefault=!k&&b&&!e;g.simulateDefault&&(e=va(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=k||!b||e;return c.returnValue}return!0}}}},ma=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||ua(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";
g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Li(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Mi(b);g.eventTimeout=f;g.eventCallback=Ni(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=(b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return ca(g)},Mi=
function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},ra=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},va=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(Qf.userAgent),e=ra(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=w.frames&&w.frames[f]||w[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName=
"gtm_autoEvent_"+J().getTime(),b.targetWindow=w.open("",b.targetWindowName));break;default:d&&!w.frames[e]?(b.simulateDefault=!1,c=!0):(w.frames[e]||(b.targetWindowName=e),b.targetWindow=w.frames[e]||w.open("",e))}return c},Li=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||J().getTime(),500>J().getTime()-c&&w.setTimeout(Li(a,b,c),25)))}},Ni=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&
(d=a.target,a.target=b.targetWindowName);M.gtmSubmitFormNow=!0;pa(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||J().getTime(),500>J().getTime()-c&&w.setTimeout(Ni(a,b,c),25)}},la=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Oi=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},na=function(a,b){if(b.wnc["0"]||b.wc["0"])return!0;
for(var c=0;c<Pi.length;c++)if(a.passingRules[c]){var d=Qi[c],e=d&&d[0]&&d[0][0]||d[1]&&d[1][0];if(e&&"0"!=e&&(b.wc[e]||b.wnc[e]))for(var f=Pi[c][1],g=0;g<f.length;g++)if(a.resolvedTags[f[g]])return!0}return!1},Aa=function(a,b,c,d,e){var f,g,h=!1;switch(a){case "CLICK":if(M.gtmHasClickListenerTag)return;M.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=xa(a);b&&ma("CLICK",b,{},d)};h=!0;break;case "LINK_CLICK":b&&!Hi&&(Hi=Zf(M.location));Oi(Ii,b||!1,c||!1,d,e);if(M.gtmHasLinkClickListenerTag)return;
M.gtmHasLinkClickListenerTag=!0;f="click";g=Ki(a,b||!1);break;case "FORM_SUBMIT":Oi(ka,b||!1,c||!1,d,e);if(M.gtmHasFormSubmitListenerTag)return;M.gtmHasFormSubmitListenerTag=!0;f="submit";g=Ki(a,b||!1);break;default:return}Q(M,f,g,h)},Ji=function(a){if(!Hi)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=ba(a);return Hi==Zf(c)},pa=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
M.gtmFormElementSubmitter||(M.gtmFormElementSubmitter=M.createElement("form"));return M.gtmFormElementSubmitter.submit.call?M.gtmFormElementSubmitter.submit:a.submit};var Qa=function(a,b){var c=b||db,d=c.onerror,e=!1;Ch&&!Kh("535.3")&&(e=!e);c.onerror=function(b,c,h,k,l){d&&d(b,c,h,k,l);a({message:b,fileName:c,Ta:h,Zb:k,error:l});return e}};var Nj=8,Oj=[],Pj=[],Qj=[],Rj=new Df,Sj=[],Z=[],Pi=[],Qi=[],Tj=function(){this.L=[]};Tj.prototype.set=function(a,b){this.L.push([a,b]);return this};Tj.prototype.resolve=function(a,b){for(var c={},d=0;d<this.L.length;d++){var e=Uj(this.L[d][0],a,b),f=Uj(this.L[d][1],a,b);c[e]=f}return c};var Vj=function(a){this.index=a};Vj.prototype.resolve=function(a,b){var c=Qj[this.index];if(c&&!b(c)){var d=c[nd];if(a){if(a.get(d))return;a.set(d,!0)}c=Uj(c,a,b);a&&a.set(d,!1);return Ef(c)}};
var _M=function(a){return new Vj(a)},Wj=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=Uj(Oj[a[f]],b,c);g===La&&(e=!0);d.push(g)}return e?new jh(d):d.join("")}},_T=function(a){return new Wj(arguments)},Xj=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=
function(c,d){var e=Uj(a[0],c,d);if(a[0]instanceof Vj&&b(8)&&b(16)){if(e===La)return e;var f=Ma();Rj.set(f,e);return'google_tag_manager["GTM-PKX6ZK"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=Y[a[g]](e);return e}},_E=function(a,b){return new Xj(arguments)},Yj=function(a,b){this.w=a;this.ra=b},_R=function(a,b){return new Yj(a,b)},Uj=function(a,b,c){var d=a;if(a instanceof Vj||a instanceof Tj||a instanceof Wj||a instanceof Xj)return a.resolve(b,c);if(!(a instanceof Yj))if(N(a))for(var d=
[],e=0;e<a.length;e++)d[e]=Uj(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Uj(a[f],b,c))}return d},Zj=function(a,b){var c=b[a],d=c;if(c instanceof Vj||c instanceof Xj||c instanceof Wj||c instanceof Yj)d=c;else if(N(c))for(var d=[],e=0;e<c.length;e++)d[e]=Zj(c[e],b);else if("object"==typeof c){var d=new Tj,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Zj(c[f],b))}return d},bk=function(a,b){for(var c=b?b.split(","):[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");
0==a&&(e[1]=Oj[e[1]]);if(1==a)for(var f=ak(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=Pj[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=ak(e[g]);3==a&&(c[d]=Oj[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var k=0;k<e[g].length;k++)e[g][k]=Oj[e[g][k]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},ak=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Nj;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f;f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:
62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},ck=function(a,b,c){a.push.apply(a,bk(b,c))};
var og=function(){},kk=function(a){},rg=function(){},lk=function(a){},mk=function(a,b){},nk=function(a,b){},pg=function(a){};var ok,pk;var zk=function(a){return function(){}},Ak=function(a){return function(){}};var Bk=function(a){var b=this;this.g=a;this.complete=this.Xa=!1;this.qa=[];this.la=[];this.S=function(){if(b.s&&b.s.event){var c=b.s.event,d=b.g;}b.complete||If(b.qa);Mf(b,1);if(mb[a])for(var e=0;e<mb[a].length;e++)mb[a].shift().S()};this.R=function(){if(b.s&&b.s.event){var c=b.s.event,d=b.g;}b.complete||
If(b.la);Mf(b,2);if(mb[a])for(var e=0;e<mb[a].length;e++)mb[a].shift().R()};this.B=tf},Ck=function(a,b){a.qa.push(b)},Dk=function(a,b){a.la.push(b)},Ek=function(a){this.M=[];this.Ga=[];this.Pa={};this.ya=[];this.Y=0;this.Wa={};this.Ya={};this.Ha={};this.event=a};Ek.prototype.addListener=function(a){this.ya.push(a)};
var Fk=function(a,b,c,d,e,f){if(!c.complete){a.M[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=N(d)?d.slice():["or",d];e=N(e)?e.slice():[e];f=N(f)?f.slice():[f];a.Pa[b]=d;a.Wa[b]=0<e.length;a.Ya[b]=0<f.length;a.Y++;var g=function(){0<a.Y&&a.Y--;0<a.Y||If(a.ya)};Ck(c,g);Dk(c,g)}},Gk=function(a,b,c){a.M[b]&&(Ck(a.M[b],function(){c(b,!0)}),Dk(a.M[b],function(){c(b,!1)}))},Hk=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof Yj&&a[g].w===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},Lk=function(a,b){var c=[],d=!1,e=function(b){var f,g,h=Z[b];if(a.event.c(h)){}else g=Ik(h,b,a);if(f=g){var k=Jk(b,!0);0<k.length&&e(k[0].w);c.push(f);var l=Jk(b,!1);0<l.length&&e(l[0].w)}else d=
!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],h=Jk(g.g,!0);if(0<h.length){var k=c[f-1],l=Kk(g);Ck(k,l);0==h[0].ra&&Dk(k,l)}var m=Jk(g.g,!1);0<m.length&&(l=Kk(c[f+1]),Ck(g,l),0==m[0].ra&&Dk(g,l))}a.Ga.push(c)}},Jk=function(a,b){var c=b?we:Ne,d=Z[a],e=void 0===d[c]?[]:d[c];return N(e)?e:[e]},Kk=function(a){return function(){a.B()}},Nk=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=Jk(a,!0);0<b.length&&f(b[0].w);e.push(a);var c=Jk(a,!1);0<c.length&&f(c[0].w)};
f(d.g);b[d.g]=e}Mk(a,b);return b},Mk=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<wf(b[e],d)){delete b[d];break}}};var Pk=function(a,b){return function(){a[dd]=b.S;a[ed]=b.R;var c=b.g,d=b.s&&b.s.Ha[c],e=lb[c]&&lb[c].state,f=d?void 0!==d:b.Xa||b.$b,g=lb[c]&&lb[c].firingOption,h=g&&2==g,k=g&&1==g;if(!f&&void 0===e||!f&&!h||!h&&!k){Mf(b,0);var l=b.s?b.s.event:void 0;a=Ok(a,l?l.c:yg());if(l){var m=a;mk(l,c)}Ef(a,b.S,b.R)}else h&&0==e||k&&0==d?mb[c].push(b):h&&1==e||k&&1==d?b.S():b.R()}},Ok=function(a,b){a=Uj(a,new Df,b);return a},Ik=function(a,b,c){var d=new Bk(b);d.s=c;Ck(d,zk(a));Dk(d,Ak(a));d.B=Pk(a,d);return d};var Uk=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Sj[b]&&Uj(Sj[b],new Df,c),e=d;if(d)if(d[yb]&&N(d[T]))for(var f=d[T],e=!1,g=0;!e&&g<f.length;g++)d[T]=f[g],e=Ef(d);else e=Ef(d);a[b]=[e,d]}return a[b]}},jk=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.P(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.P(e[d],a.c)[0])return!1;return!0},Vk=!1,jg=function(a,b,c,d){switch(b){case "gtm.js":if(Vk)return!1;Vk=!0;break;case "gtm.sync":if(S("gtm.snippet")!=jb)return!1}S("tagTypeBlacklist");
for(var e={id:a,name:b,ha:c||tf,fa:ak(),pa:ak(),P:Uk(),c:yg()},f=[],g=0;g<Pi.length;g++)if(jk(e,Pi[g])){f[g]=!0;for(var h=e,k=Pi[g],l=k[1],m=0;m<l.length;m++)h.fa[l[m]]=!0;for(var n=k[3],m=0;m<n.length;m++)h.pa[n[m]]=!0}else f[g]=!1;mk(e);var u=[];for(var y=0;y<Nj;y++)if(e.fa[y]&&!e.pa[y])if(e.c(Z[y])){}else{u[y]=Z[y];}e.T=u;for(var t=new Ek(e),x=0;x<Nj;x++)if(e.fa[x]&&!e.pa[x])if(e.c(Z[x])){}else{var F=e.T[x],B=Ik(F,x,t);Fk(t,x,B,F[zc],F[we],F[Ne]);if(F[nb])break}t.addListener(e.ha);for(var A=[],
E=0;E<t.M.length;E++){var H=t.M[E];if(H){var D=t.Pa[E],C=t.Wa[E],I=t.Ya[E];if(0!=D.length||C||I){if(0<D.length)for(var P=Hk(D,H.B),K=0;K<D.length;K++)D[K]instanceof Yj&&D[K].w!=E&&Gk(t,D[K].w,P);(C||I)&&Lk(t,E)}else A.push(E)}}for(E=0;E<A.length;E++)t.M[A[E]].B();for(E=0;E<t.Ga.length;E++){for(var oa=t.Ga[E],U=void 0,V=oa,qa=[],wb=0;wb<V.length;wb++){var fb=V[wb],Vb=fb.g,Kf=lb[Vb],xd=Kf.firingOption;0!=xd&&(1==xd&&void 0!==fb.s.Ha[Vb]||2==xd&&void 0!==Kf.state)&&qa.push(fb)}var yd=Nk(qa);for(U in yd)if(yd.hasOwnProperty(U)){for(var zd=
void 0,Nf=void 0,Fc=yd[U],il=Fc[0],oj=Fc[Fc.length-1],pj,Na=0;Na<V.length;Na++){var sd=V[Na];!zd&&sd.g==il&&0<Na&&(zd=V[Na-1]);sd.g==oj&&Na<V.length-1&&(Nf=V[Na+1]);if(-1<wf(Fc,sd.g))if(pj=V.splice(Na,1)[0],sd.g==oj)break;else Na--}if(pj){var qj=Number(U),ta=zd,xf=Nf;if(ta){var jl=ta.qa[0],kl=ta.la[0],rj=ta;rj.qa=[];rj.la=[];Ck(ta,jl);Dk(ta,kl)}if(ta&&xf){var yf=Kk(xf);Ck(ta,yf);var zf=Jk(ta.g,!1);0<zf.length&&zf[0].w!=qj&&0==zf[0].ra&&Dk(ta,yf);var Af=Jk(xf.g,!0);0<Af.length&&Af[0].w!=qj&&0==Af[0].ra&&
Dk(ta,yf)}}}0<oa.length&&oa[0].B()}0<t.Y||If(t.ya);d&&R(d)&&d({passingRules:f,resolvedTags:e.T});
if("gtm.js"==b||"gtm.sync"==b)a:{}for(var uj in e.T)if(e.T.hasOwnProperty(uj)){var vj=e.T[uj],Bf;if(!(Bf=void 0==vj[nd])){var wj=vj[nd];Bf=!("function"!=typeof String.prototype.startsWith?0===wj.indexOf("_implicit"):wj.startsWith("_implicit"))}if(Bf)return!0}return!1};var Wk={macro:function(a){if(Rj.contains(a))return Rj.get(a)}};Wk.dataLayer=cg;Wk.onHtmlSuccess=mh(!0);Wk.onHtmlFailure=mh(!1);Wk.callback=function(a){ab.hasOwnProperty(a)&&R(ab[a])&&ab[a]();delete ab[a]};Wk.kb=function(){var a=w.google_tag_manager;a||(a=w.google_tag_manager={});a["GTM-PKX6ZK"]||(a["GTM-PKX6ZK"]=Wk);Sa=a};(function(){var a=function(a){var b=Za("google_tag_manager",{}),d=b[a];d||(d=b[a]={},d.nwnc={},d.nwc={},d.wnc={},d.wc={},d.wt=null,d.l=!1);return d};Ii=a("linkClickMap");ka=a("formSubmitMap")})();
Oj.push.apply(Oj,function(){for(var a=[_u,'Page URL','Page Hostname','host','Page Path','path',_f,'Referrer'],b=[],c=0;c<a.length;c++)b[c]=Zj(c,a);return b}());ck(Pj,0,"1:0,2:1,2:2,0:3,2:4,0:5,1:6,2:7");ck(Qj,1,"D,N,x,AD");ck(Sj,1,"");ck(Z,1,"");ck(Pi,2,"");ck(Qi,4,"");for(var Xk=0;Xk<Z.length;Xk++){var Yk=Z[Xk],Zk=1;Yk[Ud]?Zk=2:Yk[ef]&&(Zk=0);lb[Xk]={firingOption:Zk,state:void 0};mb[Xk]=[]}Wk.kb();
(function(a){})("async");
(function(){var a=Za("dataLayer",[]),b=Za("google_tag_manager",{}),b=b["dataLayer"]=b["dataLayer"]||{};Va.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Wf.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(kg.push.apply(kg,b);300<this.length;)this.shift();return sg()};kg.push.apply(kg,a.slice(0));z(tg)})();var gl=w;
if("interactive"==M.readyState&&!M.createEventObject||"complete"==M.readyState)Sf();else{Q(M,"DOMContentLoaded",Sf);Q(M,"readystatechange",Sf);if(M.createEventObject&&M.documentElement.doScroll){var hl=!0;try{hl=!gl.frameElement}catch(a){}hl&&Uf()}Q(gl,"load",Sf)}"complete"===M.readyState?Xf():Q(w,"load",Xf);
(function(a){})("async");(function(){})();var _vs="res_ts:1442312525521000,srv_cl:145770385,ds:live,cv:2";
})()
