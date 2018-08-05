/* SiteCatalyst code version: H.20.3. Copyright 1996-2010 Adobe, Inc. */
var s_account="ibmausopenlive";
var s=s_gi(s_account);
/************************** CONFIG SECTION **************************/
s.currencyCode="USD";
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters="javascript:,ausopen.com";
s.linkLeaveQueryString=false;
s.linkTrackVars="";
s.linkTrackEvents="";
s.usePlugins=true;
s.suppressEvent2='no';
s.visitorNamespace="ibminteractive";
s.trackingServer="metrics.ausopen.com";
s.trackingServerSecure = "smetrics.ausopen.com"
s._tpDST = {
2012:'4/1,10/7',
2013:'4/7,10/6',
2014:'4/6,10/5',
2015:'4/5,10/4',
2016:'4/3,10/2',
2017:'4/2,10/1',
2018:'4/1,10/7',
2019:'4/7,10/6'
};
function s_doPlugins(s) {
s.server=window.location.hostname;
/* uniques calculation for the event */ 
s.prop40="2017 Australian Open Tournament"
s.prop14=s.getNewRepeat(999);
/*time parting*/
var timeParted = s.getTimeParting('n', '-5');
s.eVar8=s.prop8=timeParted.substring(0, timeParted.indexOf("|"));
s.eVar9=s.prop9=timeParted.substring(timeParted.indexOf("|") + 1);
if(s.eVar9 == 'Sunday' || s.eVar9 == 'Saturday'){
s.eVar10=s.prop10='Weekend';
}else{
s.eVar10=s.prop10='Weekday';
}
/*internal search tracking*/
s.prop7=s.Util.getQueryParam('query')
s.prop7=s.prop7=="Search"?"":s.prop7;
s.prop7=s.prop7=="search"?"":s.prop7;
if (s.prop7) {
s.uniqueSearch=s.prop7=s.prop7.toLowerCase();
s.eVar7=s.prop7;
s.uniqueSearch=s.getValOnce(s.uniqueSearch,"s_c7",0);
if(s.uniqueSearch) s.events=s.apl(s.events,'event1',',',2);
}
/*featured content*/
s.eVar13=s.Util.getQueryParam('fpos')
s.eVar13=s.getValOnce(s.eVar13,"s_v13",0);
s.eVar14=s.Util.getQueryParam('fid')
if(s.eVar14=="true") {s.eVar14=s.pageName}
s.eVar14=s.getValOnce(s.eVar14,"s_v14",0);
if(s.eVar13||s.eVar14)s.events=s.apl(s.events,'event6',',',2);
/*new versus repeat visitor*/
s.eVar15=s.prop14=s.getNewRepeat(999);
/*external traffic*/
s.promoReferrer=s.referrer?s.referrer:document.referrer
s.promocheck=s.Util.getQueryParam('promo')
if (s.promocheck){
s.internalPromo=s.promoReferrer.indexOf('ausopen.com')>-1?'true':'';
}
if(!s.internalPromo){
s.channelManager('promo','','','1');
s._channel=s._channel=="Paid Non-Search"?"Promo":s._channel;
s.eVar18=s._channel;	
s.eVar19=s._campaignID;
s.eVar20=s._keywords;		
s.campaign=s._campaign;
s.eVar22=s.crossVisitParticipation(s._channel,'v22','90','5','>','',0);	
s.eVar21=s.crossVisitParticipation(s._campaign,'v21','90','5','>','',0);
}
/*copying traffic values to conversion variables*/
s.eVar11=s.pageName?s.pageName:"";
s.eVar12=s.channel?s.channel:"";
s.eVar1=s.prop1?s.prop1:"";
s.eVar2=s.prop2?s.prop2:"";
s.hier1=s.eVar3=s.prop3?s.prop3:"";
s.eVar4=s.prop4?s.prop4:"";
s.eVar5=s.prop5?s.prop5:"";
s.eVar6=s.prop6?s.prop6:"";
s.eVar15=s.prop15?s.prop15:"";
//s.eVar16=s.prop16?s.prop16:"";
s.eVar17=s.prop17?s.prop17:"";
//s.eVar18=s.prop18?s.prop18:"";
//s.eVar19=s.prop19?s.prop19:"";
//s.eVar20=s.prop20?s.prop20:"";
//s.eVar21=s.prop21?s.prop21:"";
//s.eVar22=s.prop22?s.prop22:"";
s.eVar23=s.prop23?s.prop23:"";
//s.eVar24=s.prop24?s.prop24:"";
//s.eVar25=s.prop25?s.prop25:"";
s.eVar26=s.prop26?s.prop26:"";
s.eVar27=s.prop27?s.prop27:"";
s.eVar28=s.prop28?s.prop28:"";
s.eVar29=s.prop29?s.prop29:"";
s.eVar30=s.prop30?s.prop30:"";
//s.eVar40=s.prop28?s.prop28:"";
s.eVar33=s.prop33?s.prop33:"";
s.eVar34=s.prop34?s.prop34:"";
/*deduplicate referrer*/
s.referrer=s.dedupeReferrer();
s.bounceCheck(s.eVar18,'event3','event4')
/*Exit Link*/
var url=s.exitLinkHandler()
if(url){
s.eVar25=url;
s.events="event9";
s.linkTrackVars="eVar25,events";
s.linkTrackEvents="event9";
}
/*download tracking*/
var dwnld=s.downloadLinkHandler();
if(dwnld){
s.eVar24=dwnld;
s.events="event5";
s.linkTrackVars="eVar24,events";
s.linkTrackEvents="event5";
}
/* external campaign tracking */
s.campaign=s.Util.getQueryParam('cmpid');
s.campaign=s.getValOnce(s.campaign,'s_v0',0)
/*conversion page view event*/
s.linkTrackVars=s.apl(s.linkTrackVars,'events',',',1);
s.linkTrackEvents=s.apl(s.linkTrackEvents,'event2',',',1);
s.events=s.apl(s.events,'event2',',',1);
if( s.suppressEvent2 != "no"){
s.events = null;
s.events = s.suppressEvent2;
s.linkTrackEvents = s.suppressEvent2;
}
/* dedupe referring instances */
s.prop51 = s.getPreviousValue(s.pageName,'s_ppn'); //prop21: prev page name
s.prop52 = s.getPercentPageViewed(); //prop52: max % viewed of prev page
if(!s.prop51||s.prop51=='no value')s.prop52=''; //clear max % viewed if no prev page view
}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
/*
* Utility Function: split v1.5 (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/* n=event name. o = time offset (this does not accoutn for dst) */
/*Plugin: downloadLinkHandler 0.5*/
s.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
/*exitLinkHandler 0.5*/
s.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
/*bounce rate*/
s.bounceCheck=new Function("v","e","b","c",""
+"var s=this,a,b,c=c?c:'bc';if(s.p_fo('bounceCheck')==1){a=s.events?s"
+".events+',':'';if(v){s.events=a+e;if(s.c_r(c)){b=parseInt(s.c_r(c))"
+"+1;s.c_w(c,b,0);}else{s.c_w(c,1,0);}}else{if(s.c_r(c)>=1){s.c_w(c,0"
+",0);s.events=a+b;}}}");
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");
/*apl*/
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");
/*campaign stacking v1.5*/
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v=='')return '';v=escape(v);var arry=new Array(),a=new Array("
+"),c=s.c_r(cn),g=0,h=new Array();if(c&&c!='')arry=eval(c);var e=new "
+"Date();e.setFullYear(e.getFullYear()+5);if(dv==0 && arry.length>0 &"
+"& arry[arry.length-1][0]==v)arry[arry.length-1]=[v, new Date().getT"
+"ime()];else arry[arry.length]=[v, new Date().getTime()];var start=a"
+"rry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;"
+"x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86"
+"400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry"
+"[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:"
+"\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce) s.c_w(cn"
+",'');return r;");
/*join*/
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
/*Replace v1.0*/
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
/*
* Plugin: getTimeParting 3.4
*/
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
/*
* Plugin: getValOnce_v1.11
*/
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*channelManager v2.2*/
s.channelManager=new Function("a","b","c","V",""
+"var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,"
+"G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y;g=s.referrer?s.referrer:documen"
+"t.referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.ind"
+"exOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLow"
+"erCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k"
+"[m])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexO"
+"f('//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring("
+"q,r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSea"
+"rchEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^'"
+");g=s.repl(g,'as_q','*');}A=s.split(v,'>');B=A.length;for(C=0;C<B;C"
+"++){D=A[C];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;"
+"G<F;G++){H=j.indexOf(E[G]);if(H>-1){I=s.split(D[1],',');J=I.length;"
+"for(K=0;K<J;K++){L=s.Util.getQueryParam(I[K],'',g);if(L){L=L.toLowerCase"
+"();M=L;if(D[2]){u=D[2];N=D[2]}else{N=t}if(V=='1'){N=s.repl(N,'#',' "
+"- ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','"
+"oogle');}}}}}}}O=s.Util.getQueryParam(a,b);if(O){u=O;if(M){P='Paid Searc"
+"h'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Search'}f=s."
+"_channelDomain;if(f){k=s.split(f,'>');l=k.length;for(m=0;m<l;m++){Q"
+"=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){"
+"W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;if(d){k=s."
+"split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.sp"
+"lit(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.Util.getQueryParam(R[T]);i"
+"f(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.length;"
+"for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length"
+";for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&&!O)"
+"{u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.getValO"
+"nce(T,U,0);}if(T)M=M?M:'n/a';s._referrer=T&&p?p:'';s._referringDoma"
+"in=T&&t?t:'';s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campai"
+"gn=T&&u?u:'';s._keywords=T&&M?M:'';s._channel=T&&P?P:'';");
s.seList="search.com|qu>search.about.com|terms>alltheweb.com|query,q>altavista.co,altavista.de|q,r>.aol.,suche.aolsvc.de|q,query>ask.jp,ask.co|q,ask>www.baidu.com|wd>search.biglobe.ne.jp,search.kbg.jp|q,extrakey>business.com/search|query>centrum.cz|q>clix.pt|question>cuil.com|q>daum.net,search.daum.net|q>Dictionary.com,Dictionary|term,query,q>eniro.|search_word>excite.|qkw,s,search,key,q>fireball.de|q,query>goo.ne.jp,search.mobile.goo.ne.jp|MT>google.,googlesyndication.com|q,as_q>icqit.com|q>infoseek.|qt,query>ixquick.com|query>kvasir.no|q,searchExpr>libero.it|query>bing.com|q>.livedoor.com|q,keyword>lycos.|query>mail.ru/search,go.mail.ru/search|q>bing.com|q>myway.com|searchfor>nate.com,search.nate.com|query>naver.com,search.naver.com|query>netscape.com|query,search>search.nifty.com|q>dmoz.org|search>reference.com|q>searchalot.com|query,q>sensis.com.au|find>seznam|w>starmedia.com|q>abcsok.no|q>terra.es|query>tiscali.it,www.tiscali.co.uk|key,query>toile.com|query,q>busca.uol.com.br|q>usseek.com|string>vinden.nl|query>virgilio.it|qs>walla.co.il|q>web.de|su>yahoo.com,yahoo.co.jp|p,va>yandex|text";
/*dedupeReferrer v1.0*/
s.dedupeReferrer=new Function("c","b",""
+"var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.refer"
+"rer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.le"
+"ngth;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.s"
+"plit(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';i"
+"f(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if"
+"(a){return a}else{return k[b]}}}");
/*
* Plugin: getPercentPageViewed v1.71
*/
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
* variable (requires split utility)
*/
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============
AppMeasurement for JavaScript version: 1.7.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.7.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.pb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.pb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ha=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ia)for(a.ia=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.ia=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ia||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.va();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ha("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.O,(m=a.lightTrackVars)&&(m=","+m+","+a.ma.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)m=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Hb,f=a[e].Gb));m&&(m=","+m+","+a.G.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+m+","))){k=!1;if(n)for(p=0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.r(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m=
"v0";break;default:a.Ha(w)&&("prop"==k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.sb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ma.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Hb,r=a[e].Gb));
n&&(n=","+n+","+a.G.join(",")+",");r&&(r=","+r+",",n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];
g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&
(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e=
"vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&
(g+=(""!=g?",":"")+s);if(r)for(m=g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;
case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],n,e));g="";break;default:a.Ha(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Mb||"undefined"!=""+a.Cb&&"HTML"!=(""+a.Cb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==
b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.L=function(c){var b=a.D(c),
d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Kb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Bb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.na=1;d||(a.na=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.na=1;!e&&d&&
(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ga(p)&&(a.linkInternalFilters||(a.linkInternalFilters=
k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.tb=function(){var c=a.na,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),
p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",m)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,
1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ub=function(){if(!a.Fb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",
c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Lb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Fb=1}};a.P={};a.loadModule=function(c,b){var d=a.P[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.P[c]=a[c]=d;d.Xa=function(){return d.ab};d.bb=function(b){if(d.ab=b)a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Xa,set:d.bb}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.P)if(!Object.prototype[b]&&(d=a.P[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.wb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.Q=
function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ob=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==
e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};
a.Wa=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.da=!1;a.I=!1;a.eb=function(){a.I=!0;a.j()};a.ba=!1;a.U=!1;a.$a=function(c){a.marketingCloudVisitorID=c;a.U=!0;a.j()};a.ea=!1;a.V=!1;a.fb=function(c){a.visitorOptedOut=c;a.V=!0;a.j()};a.Y=!1;
a.R=!1;a.Sa=function(c){a.analyticsVisitorID=c;a.R=!0;a.j()};a.aa=!1;a.T=!1;a.Ua=function(c){a.audienceManagerLocationHint=c;a.T=!0;a.j()};a.Z=!1;a.S=!1;a.Ta=function(c){a.audienceManagerBlob=c;a.S=!0;a.j()};a.Va=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.ca=!1;a.H=!1;a.va=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.da||a.I||(a.Wa(a.eb)?a.I=!0:a.da=!0);if(a.da&&!a.I)return!1;b&&b.isAllowed()&&
(a.ba||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ba=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.$a]),a.marketingCloudVisitorID&&(a.U=!0)),a.ea||a.visitorOptedOut||!b.isOptedOut||(a.ea=!0,a.visitorOptedOut=b.isOptedOut([a,a.fb]),a.visitorOptedOut!=q&&(a.V=!0)),a.Y||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Y=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Sa]),a.analyticsVisitorID&&(a.R=!0)),a.aa||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.aa=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ua]),a.audienceManagerLocationHint&&(a.T=!0)),a.Z||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.Z=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ta]),a.audienceManagerBlob&&(a.S=!0)),c=a.ba&&!a.U&&!a.marketingCloudVisitorID,b=a.Y&&!a.R&&!a.analyticsVisitorID,d=a.aa&&!a.T&&!a.audienceManagerLocationHint,f=a.Z&&!a.S&&!a.audienceManagerBlob,e=a.ea&&!a.V,c=c||b||d||f||e?!1:!0);a.ca||a.H||(a.Va(a.va)?a.H=!0:a.ca=
!0);a.ca&&!a.H&&(c=!1);return c};a.o=q;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.jb=c;f.ib=b;f.gb=d;a.o==q&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.cb(),a.o!=q))for(;0<a.o.length;)c=a.o.shift(),c.ib.apply(c.jb,c.gb)};a.cb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.Ya=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.qb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.p("_s");a.Ya(c)||(b&&a.Q(b),c&&(d={},a.Qa(d,0),a.Q(c)),a.wb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=
a.qb()),a.Bb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(a.referrer=r.document.referrer),a.Ra=1,a.referrer=a.ob(a.referrer),a.p("_g")),a.tb()&&!a.abort&&(a.ub(),g+=a.sb(),a.Ab(e,g),a.p("_t"),a.referrer=""))),c&&a.Q(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=
a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==
b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ab=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?
"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Eb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.mb(d);a.ja()};a.Pa=/{(%?)(.*?)(%?)}/;a.Ib=RegExp(a.Pa.source,"g");a.nb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)if(o=c.dests[b],"string"==
typeof o.c&&"aa."==o.id.substr(0,3))for(var d=o.c.match(a.Ib),b=0;b<d.length;++b){match=d[b];var f=match.match(a.Pa),e="";"%"==f[1]&&"timezone_offset"==f[2]?e=(new Date).getTimezoneOffset():"%"==f[1]&&"timestampz"==f[2]&&(e=a.rb());o.c=o.c.replace(match,a.escape(e))}};a.rb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ra={};a.doPostbacks=function(c){if("object"==typeof c)if(a.nb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)dest=
c.dests[b],"object"==typeof dest&&"string"==typeof dest.c&&"string"==typeof dest.id&&"aa."==dest.id.substr(0,3)&&(a.ra[dest.id]=new Image,a.ra[dest.id].alt="",a.ra[dest.id].src=dest.c)};a.mb=function(c){a.i||a.vb();a.i.push(c);a.la=a.C();a.Na()};a.vb=function(){a.i=a.xb();a.i||(a.i=[])};a.xb=function(){var c,b;if(a.qa()){try{(b=k.localStorage.getItem(a.oa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.qa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};
a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ja=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.ua(),a.q))return;a.Fa=q;if(a.pa)a.la>a.N&&a.La(a.i),a.ta(500);else{var c=a.hb();if(0<c)a.ta(c);else if(c=a.Ba())a.q=1,a.zb(c),a.Db(c)}};a.ta=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.ja,c))};a.hb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};
a.zb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.yb(b)}};a.Za=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.W=function(a){return k.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Db=function(c){var b,d,f;a.Za()&&2047<c.length&&("undefined"!=
typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.xa=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.za=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ua=function(){b.za();a.lb();a.fa();a.q=0;a.ja();if(b.xa){b.xa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(c){}}};b.onabort=b.onerror=b.Ca=function(){b.za();(a.trackOffline||a.pa)&&a.q&&a.i.unshift(a.kb);a.q=0;a.la>a.N&&a.La(a.i);a.fa();a.ta(500)};b.onreadystatechange=function(){4==
b.readyState&&(200==b.status?b.ua():b.Ca())};a.Ka=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.ua():(a.trackOffline&&b.abort&&b.abort(),b.Ca()))},5E3);a.kb=c;a.B=k["s_i_"+
a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ga=setTimeout(a.fa,a.forcedLinkTrackingTimeout)};a.lb=function(){if(a.qa()&&!(a.Ja>a.N))try{k.localStorage.removeItem(a.oa()),a.Ja=a.C()}catch(c){}};a.La=function(c){if(a.qa()){a.Na();try{k.localStorage.setItem(a.oa(),k.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>
a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.pa=!0};a.forceOnline=function(){a.pa=!1};a.oa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Eb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.Q(d);if(d.lmq)for(b=
0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,
getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ma="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ma.slice(0);a.wa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.g.push("prop"+n),a.O.push("prop"+n)),a.g.push("eVar"+n),a.O.push("eVar"+n),6>n&&a.g.push("hier"+n),4>n&&a.g.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ka=0;a.la=0;a.N=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Oa=!0}}catch(z){}a.fa=function(){a.ga&&(k.clearTimeout(a.ga),a.ga=q);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Ma=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ya)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ya=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.M=a.clickObject;a.ka&&(clearTimeout(a.ka),a.ka=0);a.ka=setTimeout(function(){a.M==m&&(a.M=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ya=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ma,30)};a.Ma();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
