//tealium universal tag - utag.24 ut4.0.201612201446, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var s_account="ancestryca";var s=s_gi(s_account);s.dynamicAccountSelection=true;s.dynamicAccountList="devancestry=ancestrydev.ca;ancestrystage=ancestrystage.ca";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="zip,exe,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.linkInternalFilters=".ancestry.,javascript,#";s.linkLeaveQueryString=false;s.linkTrackVars="None";s.linkTrackEvents="None";s.usePlugins=false;s.currencyCode="USD";s.visitorNamespace="ancestry";s.trackingServer="metrics.ancestry.ca";s.trackingServerSecure="smetrics.ancestry.ca";s.dc=122;var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this"
+",t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.i"
+"ndexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf"
+"',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVi"
+"sibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s"
+"._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s"
+".mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)"
+"!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,"
+"a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n"
+":2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d"
+".cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifeti"
+"me,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?"
+"v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!"
+"s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;ret"
+"urn b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}"
+"else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e'"
+",'var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.lo"
+"cation;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtf"
+"set',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=func"
+"tion(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un"
+"),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'."
+"'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.im"
+"ages&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_"
+"il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,"
+"'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_"
+"c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTr"
+"ackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr()}',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=="
+"'_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=functi"
+"on(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;i"
+"f(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0"
+";if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie"
+",start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring"
+"(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s"
+"=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Obj"
+"ect||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.s"
+"ubstring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='bo"
+"olean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='chann"
+"el')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}"
+"}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s."
+"vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvent"
+"s}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring("
+"4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if"
+"(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationSer"
+"ver'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase"
+"()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProv"
+"ider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='"
+"c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionTyp"
+"e')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k]"
+",fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='"
+"retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop'"
+")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h"
+"){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLow"
+"erCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s"
+".wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&("
+"!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=func"
+"tion(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function("
+"'e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\""
+"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;s.t();s.eo=0;if(s.nrs>0&&s.useForcedLinkTracking"
+"&&e.target){t=e.target.target;if(e.target.dispatchEvent&&(!t||t==\\'_self\\'||t==\\'_top\\'||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();n=s.d.cr"
+"eateEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget"
+");n.s_fe=1;s.bct=e.target;s.bce=n;}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k)"
+")){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substri"
+"ng(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';i"
+"f(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.prot"
+"ocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x="
+"2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_o"
+"idt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.in"
+"dexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq'"
+",0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;re"
+"turn 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.pr"
+"ototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='"
+"+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclic"
+"k?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ism"
+"ac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTrackin"
+"g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s"
+"_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)"
+"{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu"
+"rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m"
+";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s"
+".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl"
+"=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'"
+",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m["
+"l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r"
+"eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind"
+"exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s."
+"m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i"
+"ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l"
+"oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}"
+"else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i"
+"n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250"
+";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/"
+"javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,"
+"u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v"
+"ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu"
+"nction(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;"
+"i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s."
+"dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t="
+"function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate("
+")+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Objec"
+"t;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(St"
+"ring&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf="
+"new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}"
+"}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n."
+"plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Fu"
+"nction('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#d"
+"efault#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution"
+"=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((v"
+"o&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer"
+"=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNod"
+"e;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.tar"
+"get;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h"
+"?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else "
+"if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){va"
+"r ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.ch"
+"arAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring("
+"ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?"
+"'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s"
+".hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.l"
+"inkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s"
+".lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContai"
+"ner=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_"
+"'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||"
+"(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}"
+"}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s"
+".h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera"
+" '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat"
+"(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s."
+"em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVar"
+"iablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextDa"
+"ta,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNa"
+"mespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campai"
+"gn,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+="
+"',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl"
+"_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,"
+"dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilt"
+"ers,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds()"
+";if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1,'link':1,'video':1};u.o=s;u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};u.map={"page_name":"eVar41,pageName","beanstalk_invite":"prop56,eVar56","beanstalk_node":"eVar55,prop55","campaign":"campaign","content_usage":"eVar18","content_view":"eVar11","content_view_type":"prop15","customer_segment":"prop12","db_view":"prop1","ext_cmp":"prop53","flow_type":"prop36,eVar60","hint_accepted":"eVar26","hint_filters":"prop34","img_view_src":"prop47","int_cmp":"prop54","last_db_denied":"eVar1","last_flow_type":"eVar47","mrkt_region":"prop38,eVar38","new_img_viewr_action":"prop40,eVar40","offer_id":"eVar54","offer_pg_view":"eVar61","org_srch_query":"eVar52","page_name_tier2":"eVar42,prop42","page_name_tier3":"eVar43,prop42","place_gpid":"prop35","product_type":"prop10,eVar15","reg_type":"eVar48","related_rcds_src":"eVar36","related_rcds_tgt":"eVar37","searc_dbid":"prop22,eVar22","search_type":"prop46","server":"server","site_cobrand":"eVar33,prop33","srch_center":"eVar51","subscription_type":"eVar15","tmp_eVar":"eVar70","tmp_prop":"prop70","tree_hints":"eVar5","ucdmid":"prop11","webservice_id":"prop51","cust_segment":"prop23","order_id":"eVar8","qp.utm_site":"eVar66"};u.extend=[function(a,b){s.trackTNT=new Function("v","p","b","var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;"
+"if(s.getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");s.manageQueryParam=new Function("p","w","e","u",""
+"var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo"
+"cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1"
+"?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf("
+"'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring"
+"(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le"
+"ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1"
+",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su"
+"bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)"
+"{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0"
+";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break"
+";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re"
+"p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i"
+"f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='"
+"?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if"
+"(qp)qs='?'+qp;return u+qs;");s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");function currentTime(){var sc_date_d=new Date();var sc_date_offset="-7";var sc_date_utc=sc_date_d.getTime()+(sc_date_d.getTimezoneOffset()*60000);var sc_date=new Date(sc_date_utc+(3600000*sc_date_offset));var sc_day=('0'+sc_date.getDate()).slice(-2);var sc_month=('0'+(sc_date.getMonth()+1)).slice(-2);var sc_year=sc_date.getFullYear();var sc_hour=('0'+sc_date.getHours()).slice(-2);var sc_minute=('0'+sc_date.getMinutes()).slice(-2);var sc_seconds=('0'+sc_date.getSeconds()).slice(-2);var sc_timezone=sc_date.getTimezoneOffset();var fulldate=sc_month+'/'+sc_day+'/'+sc_year+' '+sc_hour+':'+sc_minute+':'+sc_seconds;return(fulldate);}
function stripParameters(){var loc=window.location.href.split("?")[0];return loc.split("?")[0];}
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");function keepVars(kVar){for(var i=0;i<100;i++){if(!kVar.match(new RegExp('\\b'+'c'+i+'\\b','g')))
{s['prop'+i]='';}if(!kVar.match(new RegExp('\\b'+'v'+i+'\\b','g'))){s['eVar'+i]='';}
if(i<=5){if(!kVar.match(new RegExp('\\b'+'h'+i+'\\b','g'))){s['hier'+i]='';}}}
svarArr=['pageName','channel','products','events','campaign','purchaseID','state','zip','server','linkName'];for(var i=0;i<svarArr.length;i++){if(!kVar.match(new RegExp('\\b'+svarArr[i]+'\\b','g'))){s[svarArr[i]]='';}}}
function sc_npv(v,va,d){s.linkTrackVars="";s.linkTrackEvents="";var tD=new Date();var cD=new Date(d);if(tD<cD||d==0){var vAr=v.split("|");var vaAr=va.split("|");for(var i=0;i<vAr.length;i++){s[vAr[i]]=vaAr[i];if(vaAr[i].match(/=/g)){vARX=vaAr[i].split("=");}
if(s[vAr[i]].match(/event/g)){s.linkTrackEvents+=vARX[0]+",";s.linkTrackVars+='events,';}else{s.linkTrackVars+=vAr[i]+",";}}
if(s.linkTrackVars.substring(s.linkTrackVars.length-1,s.linkTrackVars.length)==','){s.linkTrackVars=s.linkTrackVars.substring(0,s.linkTrackVars.length-1);}
if(s.linkTrackEvents.substring(s.linkTrackEvents.length-1,s.linkTrackEvents.length)==','){s.linkTrackEvents=s.linkTrackEvents.substring(0,s.linkTrackEvents.length-1);}
if((document.location.href.indexOf('dna.ancestry')!=-1)||(document.location.href.indexOf('/dna')!=-1)){s.tl(this,'o','customlink');}}}
function dateFormat(d){var yyyy=d.getFullYear().toString();var mm=(d.getMonth()+1).toString();var dd=d.getDate().toString();var hh=d.getHours().toString();var mn=d.getMinutes().toString();if(mm<10){mm="0"+mm;}if(dd<10){dd="0"+dd;}
if(hh<10){hh="0"+hh;}if(mn<10){mn="0"+mn;}
return yyyy+mm+dd+hh+mn;}
s.apl=new Function("l","v","d","u",""+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"+"e()));}}if(!m)l=l?l+d+v:v;return l");var agent=navigator.userAgent.toLowerCase();var otherBrowser=(agent.indexOf("series60")!=-1)||(agent.indexOf("symbian")!=-1)||(agent.indexOf("windows ce")!=-1)||(agent.indexOf("blackberry")!=-1);var mobileOS=typeof orientation!='undefined'?true:false;var touchOS=('ontouchstart'in document.documentElement)?true:false;var iOS=(navigator.platform.indexOf("iPhone")!=-1)||(navigator.platform.indexOf("iPad")!=-1)?true:false;var android=(agent.indexOf("android")!=-1)||(!iOS&&!otherBrowser&&touchOS&&mobileOS)?true:false;s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z)u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y}}}return u};m.get=function(u,v){var p"
+"=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p."
+"_d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=func"
+"tion(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integ"
+"rate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;"
+"if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";s.m_i("Integrate");s.maxDelay=750;s.loadModule("Integrate");s.Integrate.onLoad=function(s,m){s.Integrate.add("ClickTale");s.Integrate.ClickTale.setVars=function(s,p){if(typeof ClickTaleGetUID=='function'&&typeof ClickTaleIsRecording=='function'){if(ClickTaleIsRecording())
s.contextData['clicktale_uid']=ClickTaleGetUID()+"."+ClickTaleGetPID();}}
if(typeof ClickTaleRegisterFormSubmit!='function')s.Integrate.ClickTale.delay();if(typeof ClickTaleOnReady==='function')
{s.Integrate.ClickTale.ready();}
else
{var ClickTaleOnReady=function(){s.Integrate.ClickTale.ready();}}
}
if(typeof(utag.data['dbCategory'])=='undefined'){utag.data['dbCategory']=s.getQueryParam('cat');}
var now=new Date();var loc=window.location.href.split("?")[0];var locP=loc.split('/');var domainExt='com';var domain=window.document.location.hostname.split('.');domainExt=(domain.length>2)?domain[2]:domain[1];domainExt=(domain.length>3)?domain[3]:domain[2];if(domain[1].indexOf('ancestrydev')!=-1){s.trackingServer='metrics.ancestrydev.com';s.trackingServerSecure='smetrics.ancestry.com';s.sa('devancestry');s_account='devancestry';}
else if(domain[1].indexOf('ancestrystage')!=-1){s.trackingServer='metrics.ancestrystage.com';s.trackingServerSecure='smetrics.ancestrystage.com';s.sa('ancestrystage');s_account='ancestrystage';}
else if(locP[3]=='wiki'){s.trackingServer='metrics.ancestry.com';s.trackingServerSecure='smetrics.ancestry.com';s.sa('ancestrywiki');s_account='ancestrywiki';}
else if(domain[1].indexOf('ancestrylibrary')!=-1){s.sa('ancestrylibrary,myfamilyancestry');s_account='ancestrylibrary,myfamilyancestry';}
else if(domain[1].indexOf('ancestryinstitution')!=-1){s.sa('ancestrylibrary,myfamilyancestry');s_account='ancestrylibrary,myfamilyancestry';}
else if(domain[1].indexOf('ancestryclassroom')!=-1){s.sa('ancestrylibrary,myfamilyancestry');s_account='ancestrylibrary,myfamilyancestry';}
else if(domainExt=='au'){s.trackingServer='metrics.ancestry.com.au';s.trackingServerSecure='smetrics.ancestry.com.au';s.sa('ancestrycomau');s_account='ancestrycomau';}
else if(domainExt=='ca'){s.trackingServer='metrics.ancestry.ca';s.trackingServerSecure='smetrics.ancestry.ca';s.sa('ancestryca');s_account='ancestryca';}
else if(domainExt=='fr'){s.trackingServer='metrics.ancestry.fr';s.trackingServerSecure='smetrics.ancestry.fr';s.sa('ancestryfr');s_account='ancestryfr';}
else if(domainExt=='de'){s.trackingServer='metrics.ancestry.de';s.trackingServerSecure='smetrics.ancestry.de';s.sa('ancestryde');s_account='ancestryde';}
else if(domainExt=='ie'){s.trackingServer='metrics.ancestry.ie';s.trackingServerSecure='smetrics.ancestry.ie';s.sa('ancestryie');s_account='ancestryie';}
else if(domainExt=='it'){s.trackingServer='metrics.ancestry.it';s.trackingServerSecure='smetrics.ancestry.it';s.sa('ancestryit');s_account='ancestryit';}
else if(domainExt=='com'){s.trackingServer='metrics.ancestry.com';s.trackingServerSecure='smetrics.ancestry.com';s.sa('myfamilyancestry');s_account='myfamilyancestry';domainExt='us';}
else if(domainExt=='mx'){s.trackingServer='metrics.ancestry.mx';s.trackingServerSecure='smetrics.ancestry.mx';s.sa('ancestrymexico');s_account='ancestrymexico';}
else if(domainExt=='se'){s.trackingServer='metrics.ancestry.se';s.trackingServerSecure='smetrics.ancestry.se';s.sa('ancestryse');s_account='ancestryse';}
else if(domainExt=='uk'){s.trackingServer='metrics.ancestry.co.uk';s.trackingServerSecure='smetrics.ancestry.co.uk';s.sa('ancestryuki');s_account='ancestryuki';}
else if(domain[0].indexOf('health')!=-1){s.sa('ancestryhealth');s_account='ancestryhealth';}
else if(domain[1].indexOf('familyhistoryhealth')!=-1){s.sa('ancestryhealth');s_account='ancestryhealth';}
else if(domain[0].indexOf('genealogy')!=-1||domain[1].indexOf('genealogy')!=-1){s.sa('gcom,myfamilyancestry');s_account='gcom,myfamilyancestry';}
else if(domain[0].indexOf('blogs')!=-1){s.sa('myfamilyancblog,myfamilyancestry');s_account='myfamilyancblog,myfamilyancestry';}
else{s.sa('myfamilyancestry');}
var sc_geo=domainExt;if(domainExt=='com'){sc_geo='us';}
s.tnt=s.trackTNT();var locS=window.location.href.split('/');if(loc.indexOf('support.ancestry')!=-1){b['page_name']='ancestry '+sc_geo+' : support : ';if(typeof(locS[4])!='undefined'&&locS[4]!=""){b['page_name']=b['page_name']+locS[4]+" : ";if(locS[4]=='topic'){if(typeof(locS[6])!='undefined'){b['page_name']=b['page_name']+decodeURI(locS[6]);}}else if(locS[4]=='article'){if(typeof(locS[5])!='undefined'){b['page_name']=b['page_name']+decodeURI(locS[5]);}}else if(locS[4]=='profile'||locS[4]=='feed'||locS[4]=='question'){if(typeof(locS[5])!='undefined'){b['page_name']=b['page_name']+decodeURI(locS[5]);}}else if(locS[4]=='gettingstarted'){b['page_name']=b['page_name']+"home : home";}else if(locS[4]=='search'){b['page_name']=b['page_name']+"results";s.prop28=decodeURIComponent(locS[7]).toLowerCase();}}else{b['page_name']=b['page_name']+"home : home";}
b['page_name'].toLowerCase();}
if(b.action){s.prop70=b.action;sc_npv('prop70',s.prop70,0);return false;}
var pName='none : none : none : needs valid page name';if(b['page_name']){pName=b['page_name'];}
if(pName.indexOf(' : ')==-1){pName=pName.replace(/:/g," : ");}
if(typeof(utag.data)!='undefined'){if(pName==''){pName=b['page_name'];}
if((utag.data['dom.url'].indexOf('home.ancestry'.toLowerCase())>-1)&&(utag.data['dom.pathname']=='/')){pName='ancestry '+sc_geo+' : home page : logged in : original';}
if(loc.indexOf('/Records/SEO~Records')!=-1){pName='ancestry '+sc_geo+' : wiz2 : seo : '+locP[5];}}
if(typeof pName=="undefined"||pName==''){pName='none : none : none : needs valid page name';}
if(typeof(s_pageName)!='undefined'){pName=s_pageName;}
pName=pName.toLowerCase();b['page_name']=pName;if(loc.indexOf('dna.ancestry')!=-1){if(b['page_name']=='none : none : none : needs valid page name'&&b['dom.pathname']=='/'){b['page_name']='ancestry '+sc_geo+' : dna : loading';}}
if(loc.indexOf('order.ancestry')!=-1){if(b['page_name']=='none : none : none : needs valid page name'){b['page_name']='ancestry '+sc_geo+' : secure : loading';}}
if(s_account=='myfamilyancestry'){if(b['dom.domain']=='dna.ancestry.com'&&b['dom.pathname']=='/'){b['page_name']='ancestry us : dna : home : home';}}else if(s_account=='ancestryca'){if(b['dom.domain']=='dna.ancestry.ca'&&b['dom.pathname']=='/'){b['page_name']='ancestry ca : dna : home : home';}}else if(s_account=='ancestryse'){if(b['dom.domain']=='dna.ancestry.cse'&&b['dom.pathname']=='/'){b['page_name']='ancestry se : dna : home : home';}}else if(s_account=='ancestryuki'){if(b['dom.domain']=='dna.ancestry.co.uk'&&b['dom.pathname']=='/'){b['page_name']='ancestry uk : dna : home : home';}}else if(s_account=='ancestrycomau'){if(b['dom.domain']=='dna.ancestry.com.au'&&b['dom.pathname']=='/'){b['page_name']='ancestry au : dna : home : home';}}
s.pageName=b['page_name'];s.pageName=window.s.pageName;if(loc.indexOf('blogs.ancestry')!=-1){b['page_name']=loc;s.prop42="blogs";s.prop43="blogs";s.eVar42="blogs";s.eVar43="blogs";}else if(pNameA=pName.split(' : ')){s.hier1=pName.replace(/ : /g,':');s.channel=pNameA[1];s.prop42=pNameA[0]+' : '+pNameA[1];s.prop43=pNameA[0]+' : '+pNameA[1]+' : '+pNameA[2];s.eVar42="D=c42";s.eVar43="D=c43";}
s.server=window.document.location.hostname;s.currencyCode='USD';s.trackInlineStats=true;s.charSet="UTF-8";s.cookieDomainPeriods=document.location.hostname.length-document.location.hostname.replace(/\./g,'').length;s.pageURL=s.manageQueryParam('s_kwcid',1,1);s.campaign=s.getQueryParam('o_xid');if(s.channel==''){s.channel='unknown';}
if((s.pageURL.match(/deny.aspx/g))||(s.pageURL.match(/offers\/join/g))||(s.pageURL.match(/offers\/freetrial/g))){s.events='event3';}
if(s.getQueryParam('dbid')){s.eVar1=s.getQueryParam('dbid');}
if(b['db_view']){s.prop1=b['db_view'];}
if(b['search_dbid']){s.eVar1=b['search_dbid'];}else{if(typeof(dbid)!='undefined'){s.eVar1=dbid;}}
s.eVar4=s.getQueryParam('o_iid');if(b['order_id']){s.eVar8=b['order_id'];}
if(b['eVar5']){s.prop10=b['eVar5'];}
if(b['product_type']){s.prop10=b['product_type'];}
if(s.c_r('LAU')){s.prop11=s.c_r('LAU');}else{s.prop11='00000000-0000-0000-0000-000000000000';}
if(b['content_view']){s.eVar11=b['content_view'];}
if(b['search_resultsQuality']){s.prop15=b['search_resultsQuality'];}
if(b['search_category']){s.prop16=b['search_category'];}
if(b['search_subcategory']){s.prop17=b['search_subcategory'];}
if(b['search_dbName']){s.prop18=b['search_dbName'];}
if(s.prop10!=''){s.eVar15='D=c10';}
s.prop20=s.getQueryParam('o_ufc');s.prop21=s.getQueryParam('o_cvc');if(b['sc_event']){if(b['sc_event'].indexOf('event1')!=-1){s.events=s.apl(s.events,'event1',',',0);}
if(b['sc_event'].indexOf('event21')!=-1){s.events=s.apl(s.events,'event21',',',0);}}
if(s.getQueryParam('cat')){s.prop22=s.getQueryParam('cat')+':n:category';s.eVar22='D=c22';}
if(s.c_r('OMNITURE')){s.prop23=s.c_r('OMNITURE').substring(s.c_r('OMNITURE').indexOf('=')+1);}else{s.prop23="NRVisitor";}
if(s.prop23!=''){s.eVar23='D=c23';}
if(b['cp.BAIT']){var sc_bait=b['cp.BAIT'];if(sc_bait.indexOf('CSub=0')>=1&&sc_bait.indexOf('ESub=1')>=1){s.prop24="win back";}else{s.prop24="not win back";}
if(sc_bait.indexOf('NewDna=1')!=-1){s.prop35='DNA User';s.eVar35='D=c35';}else if(sc_bait.indexOf('NewDna=1')==-1){s.prop35='Non DNA User';s.eVar35='D=c35';}}
if(b['search_type']=='New Search'){s.events='event31';}
if(b['hint_accepted']){s.eVar26=b['hint_accepted'];}
if(b['flow_type']){s.prop36=b['flow_type'];}
if(b['new_img_viewr_action']){s.prop40=b['new_img_viewr_action'];s.eVar40='D=c40';}
s.prop41=s.getPreviousValue(b['page_name'],'gpv_pn');if(s.pagName!=''){s.eVar41='D=pageName';}
s.prop42=s.prop42.toLowerCase();s.prop44=dateFormat(now);if(s.prop44!=''){s.eVar44='D=c44';}
s.prop45=loc;if(s.prop45!=''){s.eVar45='D=c45';}
if(b['reg_type']){s.eVar48=b['reg_type'];}
s.prop49=currentTime();if(s.prop49!=''){s.eVar49='D=c49';}
if(s.prop41!=''){s.prop50='D=c41';}
if(b['webservice_id']){s.prop51=b['webservice_id'];}
if(s.tnt){s.prop52=s.tnt;}
if(s.campaign!=''){s.prop53='D=v0';}
if(s.eVar4!=''){s.prop54='D=v4';}
if(b['offer_id']){s.eVar54=b['offer_id'];}
if(s.prop36!=''){s.eVar60='D=c36';}
if(s.prop0!=''){s.eVar62='D=v0';}
s.prop65=utag.data['dbCategory'];if(s.prop11!=''){s.eVar65='D=c11';}
s.prop66=s.getQueryParam('archvkw');if(navigator.userAgent){s.prop73=navigator.userAgent;}
s.eVar74=s.getQueryParam('gclid');if(typeof(b['trackingPageGuid'])!='undefined'){if(b['trackingPageGuid']=='8ee9f512-ecc6-4722-94de-7bf45616f749'){b=loginUdo;}
if(b['trackingPageGuid']=='867663FA-EDD9-49F6-84F8-969F8CEF7FBA'){if(b['flow_type']=='dna'){s.eVar36='DNA Kit';s.prop39='DNA Kit';s.products='AncestryDNA Kit;DNA Kit;'+utag.data['product_quantity']+';'+utag.data['offer_price'];s.events='purchase,event76';}else if(b['flow_type']=='hard offer'){s.eVar36='hard offer';s.prop39='Hard Offer';s.products='Subscription;'+utag.data['product_id']+';'+utag.data['product_quantity']+';'+utag.data['offer_price'];s.events='purchase,event33';}else if(b['flow_type']=='free trial'){s.eVar36='free Trial';s.prop39='Free Trial';s.products='Subscription;'+utag.data['product_id']+';'+utag.data['product_quantity']+';'+utag.data['offer_price'];s.events='purchase,event32';}else if(b['flow_type']=='upgrade'){s.eVar36='upgrade';s.prop39='Upgrade';s.products='Subscription;'+utag.data['product_id']+';'+utag.data['product_quantity']+';'+utag.data['offer_price'];s.events='purchase,event34';}else if(b['flow_type']=='gift sub'){s.eVar36='gift sub';s.prop39='Gift Sub';s.products='Subscription;'+utag.data['product_id']+';'+utag.data['product_quantity']+';'+utag.data['offer_price'];s.events='purchase,event36';}}}
if(typeof(TaggerData)!='undefined'){if(b['flow_type']=='hard offer'){s.products='Subscription;'+utag.data['product_id'][0]+';'+utag.data['product_quantity'][0]+';'+utag.data['offer_price']+';;';}
if(b['flow_type']=='free trial'){s.products='Subscription;'+utag.data['product_id'][0]+';'+utag.data['product_quantity'][0]+';;;';}
if(b['flow_type']=='upgrade'){s.products='Subscription;'+utag.data['product_id'][0]+';'+utag.data['product_quantity'][0]+';'+utag.data['order_total']+';;';}
if(b['flow_type']=='gift sub'){s.products='Subscription;'+utag.data['product_id'][0]+';'+utag.data['product_quantity'][0]+';'+utag.data['order_total']+';;';}
if(TaggerData.Id=='e499e543-3cef-4255-a3e1-bf13d2e71283'){if(b['flow_type']=='hard offer'){s.purchaseID=b['order_id'];s.prop39='Hard Offer';s.events='purchase,event33';}else if(b['flow_type']=='free trial'){s.purchaseID=b['order_id'];s.prop39='Free Trial';s.events='purchase,event32';}else if(b['flow_type']=='upgrade'){s.purchaseID=b['order_id'];s.prop39='Upgrade';s.events='purchase,event34';}else if(b['flow_type']=='dna'){s.purchaseID=b['order_id'];s.prop39='DNA Kit';s.events='purchase,event76';}}
if(TaggerData.Id=='4aca975c-ff6c-4f4a-8794-1397f83562fc'){if(b['flow_type']=='gift sub'){s.prop39='Gift Sub';s.events='purchase,event36';}}}
if(b['test_order']==true){s.prop39='Test Order : '+s.prop39;}
if(s.prop39!=''){s.eVar39='D=c39';}
if(s.visitorMigrationKey||s_visitorMigrationKey){return false;}},function(a,b){}];u.send=function(a,b,c,d,e,f,g,h,ev,evt){if(u.ev[a]||typeof u.ev.all!="undefined"){utag.DB("send:24");b.sc_events=b.sc_events||{};u.addEvent=function(v){if(v){b.sc_events[v]=1;u.pushlt(u.lte,v)};return b.sc_events};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};if(a=="link"){u.ltflag=true;if(typeof b.linkTrackVars=="undefined"){u.ltv=[]}
if(typeof b.linkTrackEvents=="undefined"){u.lte=[]}}
if(typeof b._cprod!="undefined"&&b._cprod!=""){c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for(g=0;g<f.length;g++){if(f[g].indexOf("PRODUCTS_evar")==0){d[f[g].substring(9)]=b[e].split(",")}else if(f[g].indexOf("PRODUCTS_event")==0){ev[f[g].substring(9)]=b[e]}}}}
e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
b.sc_prodevents=b.sc_prodevents||{};for(d=0;d<b._cprod.length;d++){var h2=h;if(typeof b.sc_prodevents[d]!="undefined"){for(f in utag.loader.GV(b.sc_prodevents[d])){if(h2)h2+="|"+f+'='+b.sc_prodevents[d][f];else h2=f+'='+b.sc_prodevents[d][f];}}
c.push((b._ccat[d]?b._ccat[d]:"")+";"+b._cprod[d]+";"+(b._cquan[d]?b._cquan[d]:"")+";"+(b._cprice[d]?((b._cquan[d]?parseInt(b._cquan[d]):1)*parseFloat(b._cprice[d])).toFixed(2):"")+";"+h2+";"+e);}
u.o.products=c.join(",");}
evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;for(c in utag.loader.GV(b)){d=[];if(typeof u.map[c+":"+b[c]]!="undefined"){b[c+":"+b[c]]=b[c];d=u.map[c+":"+b[c]].split(",");}else if(typeof u.map[c]!="undefined")d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&b[c]!=""){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.handler.ONCE("ev_"+b[c])){u.addEvent(f);}}else{u.addEvent(d[e]);}}}}
for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.loader.ONCE("map_"+b[c])){u.o[f]=b[c];u.pushlt(u.ltv,f)}}else if(d[e]=="doneAction"){b.doneAction=b[c];if(b.doneAction!="navigate"){b.doneAction=eval(b[c]);}}else{u.o[d[e]]=b[c];if(d[e]=="s_account"){u.o.dynamicAccountList=b[c]+"=."}
else if(d[e]=="linkTrackVars"){u.ltflag=false}
else u.pushlt(u.ltv,d[e])}}}}
d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};if(d.length>0){u.o.events=d.join(",");u.pushlt(u.lte,u.o.events);}
if(b._corder){u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);u.o.events=((u.o.events)?u.o.events:"purchase");if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};}
if(a=="view"){try{var t=u.o;var q={},l={};c={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(d=1;d<76;d++){c['prop'+d]='c'+d;c['eVar'+d]='v'+d;}
for(d in c){if(typeof c[d]!='function'){if(typeof t[d]!='undefined'&&t[d]!=''&&t[d].toString().indexOf('D=')!=0)
{if(typeof l[t[d]]=='undefined')l[t[d]]=c[d];else t[d]='D='+l[t[d]];}}}}catch(e){};u.o.t();}else if(a=="link"){if(typeof u.ltv!="undefined"&&u.ltflag){if(u.o.events){u.ltv.push("events")};b.linkTrackVars=u.ltv.join(',')}
if(typeof u.lte!="undefined"&&u.ltflag)b.linkTrackEvents=u.lte.join(',');u.o.linkTrackVars=(b.linkTrackVars)?b.linkTrackVars:"None";u.o.linkTrackEvents=(b.linkTrackEvents)?b.linkTrackEvents:"None";if(!u.o.linkType)u.o.linkType='o';if(b.link_name)b.link_text=b.link_name;b.link_text=(b.link_text)?b.link_text:"no link_name";if(b.link_type=='exit link'){u.o.linkType='e'}
else if(b.link_type=='download link')u.o.linkType='d';u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));}
utag.DB("send:24:COMPLETE");}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('24','ancestry.canada');}catch(e){};function sc_npv(v,va,d){if(utag.data['dna_ab1']||utag.data['dna_ab1']==0){v=v+',eVar67'
if(utag.data['dna_ab1']==0){utag.data['dna_ab1']='0';}
s.eVar67=utag.data['dna_ab1'];}
s.linkTrackVars="";s.linkTrackEvents="";var tD=new Date();var cD=new Date(d);if(tD<cD||d==0){var vAr=v.split("|");var vaAr=va.split("|");for(var i=0;i<vAr.length;i++){s[vAr[i]]=vaAr[i];if(vaAr[i].match(/=/g)){vARX=vaAr[i].split("=");}
if(s[vAr[i]].match(/event/g)){s.linkTrackEvents+=vARX[0]+",";s.linkTrackVars+='events,';}else{s.linkTrackVars+=vAr[i]+",";}}
if(s.linkTrackVars.substring(s.linkTrackVars.length-1,s.linkTrackVars.length)==','){s.linkTrackVars='eVar67,'+s.linkTrackVars.substring(0,s.linkTrackVars.length-1);}
if(s.linkTrackEvents.substring(s.linkTrackEvents.length-1,s.linkTrackEvents.length)==','){s.linkTrackEvents=s.linkTrackEvents.substring(0,s.linkTrackEvents.length-1);}
if(utag.data['dna_ab1']==0){utag.data['dna_ab1']='0';}
if(utag.data['dna_ab1']){s.eVar67=utag.data['dna_ab1'];}
if((document.location.href.indexOf('dna.ancestry')!=-1)||(document.location.href.indexOf('/dna')!=-1)){s.prop70=va;s.tl(this,'o','customlink');sx.eVar85=s.prop70;sx.eVar67=s.eVar67;sx.linkTrackVars='eVar85,eVar67,eVar12,eVar13,eVar14';sx.tl(this,'o','customlink');}}}
function s_initial_beacon(){if((document.location.host.indexOf('dna.ancestry')!=-1)||(document.location.host.indexOf('ancestrydna')!=-1)){if(s.pageName){pName=s.pageName;}
if(pNameA=pName.split(' : ')){s.hier1=pName.replace(/ : /g,':');s.channel=pNameA[1];s.prop42=pNameA[0]+' : '+pNameA[1];s.prop43=pNameA[0]+' : '+pNameA[1]+' : '+pNameA[2];s.eVar42="D=c42";s.eVar43="D=c43";}}
if(typeof(dna_deny)!=='undefined'){if(dna_deny===true&&s.pageName=='ancestry ca : dna : membermatch : at member match'){s.pageName='ancestry ca : dna : offer : deny : dna match';s.events='event3';}}
s.t();}
