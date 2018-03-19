/* SiteCatalyst code version: H.24.3. Copyright 1996-2011 Adobe, Inc. All Rights Reserved More info available at http://www.omniture.com (td 2016-11-29) */
var s_time = s_gi(s_account);
var s_time_rsid2="timeglobalvideo";
/* Dynamic s_account2 selection fix */
if(/(file:\/\/\/|localhost|v5\.timeinc\.net|time\.dev|time\.vip\.dev|devwp\.time\.com|dev-wpcom\.timeinc\.net|qa\.elasticbeanstalk|staging\.elasticbeanstalk)/.test(location.href)){s_time_rsid2="timeglobalvideodev";}
var s_account2=s_account+','+s_time_rsid2;
/************************** TIME.JS SECTION *************************/
s_time.charSet="UTF-8";
s_time.currencyCode="USD";
/* Link Tracking Config */
s_time.trackDownloadLinks=true;
s_time.trackExternalLinks=true;
s_time.trackInlineStats=true;
s_time.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls,xml,rss,swf";
s_time.linkInternalFilters="javascript:,timecovers,time.com,timearchive,time-blog.com,time.blogs.com,techland.com,timeinc.net,traffic.outbrain.com,elasticbeanstalk.com";
s_time.linkLeaveQueryString=false;
s_time.linkTrackVars="None";
s_time.linkTrackEvents="None";
s_time.enableVideoTracking=true;
var omniPauseFlg = new Boolean(false); // MB - 7/16/13 Added for Nielsen / comScore to address restart / scrub becons
s_time.cook=false;if (s_time.c_r('s_cc')) {s_time.cook=true;} // session cookie flag 
/* BC Plug-in SWF */
function omniGetProp16(o_var) {return s_time.prop16;}
function omniGetChannel(o_var) {return s_time.channel;}
/*---*/
function omnitureHookFunction() {}
s_time.ticmExp=new Function('var tiiDate=new Date(); tiiDate.setTime(tiiDate.getTime()-(24*60*60*1000)); return tiiDate');
/* Plugin Config */
s_time.usePlugins=true;
/*--------------------------------*/
s_time.debugTracking=false;
/* allow console.log on browsers that support it */
try{console.log("Time.com Multi-video v2.0")}
catch(e){console={},console.log=function(a){}}
/*--------------------------------------*/
var temp_pageName="";
var temp_counter=0;
var temp_events="";
var array_content_id=[];
var counter_for_array=0;
var check_for_content=0;
var prev_content_id="";
function s_time_doPlugins(s_time) {
s_time.eVar16 = s_time.getQueryParam('pcd');
if ((s_time.eVar16 == '')&& (window.location.search.indexOf('pcd=')>-1)){
var temp_pcd = '';
var tempQuery = window.location.search.substr(1);
var tempPairs = tempQuery.split('&');
for (i=0;i < tempPairs.length;i++) {
if(tempPairs[i].indexOf('pcd=')>-1) {
temp_pcd_pair = tempPairs[i].split('=');temp_pcd = temp_pcd_pair[1];}
}
s_time.eVar16 = temp_pcd;
}
/*Prop28 - Author Name to lowercase */
if(s_time.prop28){
s_time.prop28=s_time.prop28.toLowerCase();
}
s_time.eVar16 = s_time.getValOnce(s_time.eVar16,'s_var_16',0);
s_time.server = window.location.hostname;
s_time.events=s_time.apl(s_time.events,'event1',',','1');
s_time.events=s_time.apl(s_time.events,'event32',',','1');
s_time.campaign = s_time.getQueryParam('xid');
s_time.eVar2 = s_time.getQueryParam('pkw,iq_id');
/* User Status Cookie handler 03/28/12 */
if (s_time.c_r('TimeSub')) {s_time.prop31=s_time.eVar41='logged-in';
s_time.events=s_time.apl(s_time.events,'event24',',','1')}
else if (s_time.c_r('TimeCpgn')) {s_time.prop31=s_time.eVar41='open-house';
s_time.events=s_time.apl(s_time.events,'event26',',','1')}
else {s_time.prop31=s_time.eVar41='not-logged-in';
s_time.events=s_time.apl(s_time.events,'event25',',','1')}
/* Do not relocate: If session cookie is there then count the iid  */
if (s_time.cook) {s_time.eVar1  = s_time.getQueryParam('iid');
if (s_time.eVar1) {s_time.prop9=s_time.eVar1;s_time.events=s_time.apl(s_time.events,'event2',',','1')}}
//s_time.eVar29 = s_time.getQueryParam('lid');
omniLTV();
/* Paywall Links */
s_time.prevPageTemp = s_time.getPreviousValue(s_time.pageName,'gpv_v17','');
if(s_time.eVar16) {s_time.events=s_time.apl(s_time.events,'event27',',','1');s_time.eVar17 = s_time.prevPageTemp;}
/* unique search */
if(s_time.prop18){
s_time.eVar18 = s_time.prop18;
var t_search = s_time.getValOnce(s_time.eVar18,'s_var_18',0);
if(t_search) {s_time.events=s_time.apl(s_time.events,'event21',',','1')}}
/* visit no.  */
s_time.eVar32=s_time.getVisitNumCustom('d'); // daily
s_time.eVar33=s_time.getVisitNumCustom('w'); // weekly
s_time.eVar34=s_time.getVisitNumCustom('m'); // monthly
/* hp visitation  */
if(s_time.prop16 == 'home') {s_time.eVar9 = s_time.getVisitNumHome('d');s_time.eVar10 = s_time.getVisitNumHome('w');s_time.eVar3 = s_time.getVisitNumHome('m');}
else {s_time.eVar9 = s_time.eVar10 = s_time.eVar3 = '';}
/* time parting */
s_time.prop36 = s_time.eVar31 = s_time.getTimeParting('h','-5',s_time.tiiGetFullYear());
s_time.prop38 = s_time.eVar38 = s_time.getTimeParting('d','-5',s_time.tiiGetFullYear());
s_time.prop37 = s_time.eVar37 = s_time.getTimeParting('w','-5',s_time.tiiGetFullYear());
/* URL override */
s_time.prop17=location.protocol+"//"+location.host+location.pathname;
if(s_time.setFreeTeaserPV) {s_time.events=s_time.apl(s_time.events,'event28',',','1')}
if(s_time.setFreeFullPV) {s_time.events=s_time.apl(s_time.events,'event29',',','1')}
if(s_time.setPaidFullPV) {s_time.events=s_time.apl(s_time.events,'event30',',','1')}
/* MB - 08/16/11 - Added eVar30, also changed to double pipes on 9/22/11 */
//if (typeof (s_time.prop26) != "undefined") {s_time.eVar30=s_time.prop14+'|'+s_time.prop30;}
if(s_time.prop14)
{
if (typeof (s_time.prop26) != "undefined") {s_time.eVar30='||'+s_time.prop14+'||'+s_time.prop30+'||';}
}
else
{
if (typeof (s_time.prop26) != "undefined") {s_time.eVar30='||'+s_time.prop17+'||'+s_time.prop30+'||';}
}
/* Exit Domain Code */
var omniTempExitURL = s_time.exitLinkHandler();
var omniExit = null;
if(typeof omniTempExitURL != 'undefined' && omniTempExitURL != ''){omniExit = omniTempExitURL;}
if(omniExit != null){
s_time.linkTrackVars = 'prop43,prop44';
s_time.tempD= omniExit.match(/:\/\/(.[^/]+)/)[1]; // host
s_time.tempD=s_time.tempD.split('.');
var omniExitDomain = s_time.tempD.slice(-2).join('.');
if(omniExitDomain.search(/^(wxch|imwx)/) != -1)omniExitDomain = "weather.com";
s_time.prop44=omniExitDomain;
//console.log('>> omniExitDomain: '+ omniExitDomain);
(typeof(s_time.prop16) !='undefined') ? s_time.prop43=s_time.prop16 : s_time.prop43='unknown';
}
/* Email Event */
if(s_time.pageName =='email_a_friend') {s_time.events = s_time.apl(s_time.events,'event47',',','1');}
/*  prop16 override */
if(s_time.prop16 == 'travel') {s_time.prop16= 'style';s_time.prop11 = 'travel';}
else if((s_time.prop16 == 'specials') && (s_time.prop11 =='style_design')) {s_time.prop16= 'style';}
/*  props copied into eVars */
if (!s_time.prop64) {s_time.prop64='v1';}
s_time.eVar11 = 'D=c34';
s_time.eVar12 = 'D=c33';
s_time.eVar13 = 'D=c12';
s_time.eVar14 = 'D=c5';
s_time.eVar15 = 'D=c27';
s_time.eVar23 = 'D=pageName';
s_time.eVar24 = 'D=c16';
s_time.eVar27 = 'D=c7';
s_time.eVar61 = 'D=c32';
s_time.eVar64 = 'D=c64';
s_time.eVar65 = 'D=c30';
s_time.eVar66 = 'D=c66';
s_time.eVar68 = 'D=c68';
s_time.list1 = 'D=c65';
s_time.list2 = 'D=c67';
s_time.eVar70 = 'D=c70';
/* Begin Optimizely Custom Omniture Integration */
var evar_slot = 36;
window.optimizely = window.optimizely || [];
var allExp = window.optimizely.allExperiments || [];
for (key in allExp) {
if (allExp.hasOwnProperty(key) && allExp[key].hasOwnProperty("enabled")){
allExp[key].site_catalyst_evar = evar_slot;
}}
window.optimizely.push(['activateSiteCatalyst', {"sVariable": s_time}]);
if (s_time.eVar36) {if (s_time.events.search('event18')<0) s_time.apl(s_time.events,'event18',',','1')}
/* End Optimizely block */
/*--- TICM_omni channel cookie ---*/
if((document.domain.indexOf('time.com')>-1)&&(typeof(s_time.eo)=='undefined')){
(typeof(s_time.prop16)=='string')?s_time.tcm16=s_time.prop16:s_time.tcm16='';
(typeof(s_time.prop11)=='string')?s_time.tcm11=s_time.prop11:s_time.tcm11='';
s_time.tcmval='c16='+s_time.tcm16+'~'+'c11='+s_time.tcm11;
document.cookie='TICM_omni='+ escape(s_time.tcmval)+'; expires=; path=/; domain=time.com';}
/*--- end TICM_omni channel cookie ---*/
/*--- TICM_omni lpid cookie---*/
s_time.tcm_lpid = s_time.getQueryParam('pcd');
s_time.tcm_lpadid = s_time.getQueryParam('lpadid');
s_time.tcm_lpcrid = s_time.getQueryParam('lpcrid');
if ((s_time.tcm_lpid!='' || s_time.tcm_lpadid!='' || s_time.tcm_lpcrid!='') && (document.domain.indexOf('time.com')>-1)){
s_time.tcmval_lpid='lpid='+s_time.tcm_lpid+'~'+'lpadid='+s_time.tcm_lpadid+'~'+'lpcrid='+s_time.tcm_lpcrid;
document.cookie='TICM_omni_lpid='+ escape(s_time.tcmval_lpid)+'; expires=; path=/; domain=time.com';}
else {document.cookie='TICM_omni_lpid=; expires='+s_time.ticmExp()+'; path=/; domain=time.com';}
/*--- end TICM_omni lpid cookie ---*/
/*--- multi-suite video ---*/
if(s_time.pev3=='video') {s_time.sa(s_account2);}
/* clear video bc vars for non-video calls */
if(s_time.pev3 != 'video') {s_time.contextData['bc_channel'] = s_time.contextData['bc_tags'] = '';}

/* set event71 */
if(temp_counter==0)
{
temp_pageName=s_time.pageName;
temp_events=s_time.events;
temp_counter=1;
}
else{
if(temp_pageName!=s_time.pageName && (s_time.prop7 != 'article' || s_time.prop7 != 'brief' || s_time.prop7 != 'collections' || s_time.prop7 != 'list' || s_time.prop7 != 'special story' || s_time.prop7 != 'interactive' || s_time.prop7 != 'standard'||s_time.prop7 != 'print version'||s_time.prop7 != 'microsite'|| s_time.prop7 != 'super article'|| s_time.prop7 != 'review'||s_time.prop7 != 'recap' || (prev_content_id!=s_time.prop8)))
{
if(temp_events.indexOf('event71')>-1)
{
temp_events.replace(',event71','');
}
s_time.events=temp_events;
temp_pageName=s_time.pageName;
}
}	
prev_content_id=s_time.prop8;
if(s_time.prop7 == 'article' || s_time.prop7 == 'brief' || s_time.prop7 == 'collections' || s_time.prop7 == 'list' || s_time.prop7 == 'special story' || s_time.prop7 == 'interactive' || s_time.prop7 == 'standard'||s_time.prop7 == 'print version'||s_time.prop7 == 'microsite'|| s_time.prop7 == 'super article'|| s_time.prop7 == 'review'||s_time.prop7 == 'recap' ){
var omni_contentId = s_time.prop8;
for(i=0;i<=counter_for_array;i++)
{
if(array_content_id[i]==omni_contentId) { 
check_for_content=1;
break;
}
}
if(check_for_content==0)
{
s_time.events=s_time.apl(s_time.events,'event71',',','1');
array_content_id[counter_for_array]=omni_contentId;
counter_for_array++;
}
else{
if((s_time.events.indexOf('event79')>-1) || (s_time.events.indexOf('event80')>-1) || (s_time.events.indexOf('event9')>-1) )
{
}
else
{
if(temp_events.indexOf('event71')>-1)
{
temp_events.replace(',event71','');
}
s_time.events=temp_events;
//temp_events=="";
}
}
temp_pageName=s_time.pageName;
check_for_content=0;
}
/* user action event*/
if (s_time.prop20) {s_time.events=s_time.apl(s_time.events,'event43',',','1');}
/* PayWall Code */
var omni_value=s_time.c_r('TICM_pcs_meter');if(omni_value)
{
s_time.prop62 = omni_value;
}
s_time.eVar71='D=c71';
s_time.eVar62='D=c62';
s_time.prop72=s_time.eVar72='anonymous';
var omni_val=s_time.c_r('TimeSub');if(omni_val) {
var omni_sub_val=omni_val.split('|');
var hashMap=new Object();
for (var i=0; i<omni_sub_val.length; i++){ 
var tilde=omni_sub_val[i].split('~');  
nameVal=tilde[0].toString();
valuVal=tilde[1].toString();   
if (typeof valuVal=='undefined'||valuVal=="") {} else {hashMap [nameVal]=valuVal;}}
if (typeof hashMap['availableAppIds']=="string"){var aApps=hashMap['availableAppIds'];var aApps=aApps.split(',').join('|');s_time.list3=aApps;}
if (typeof hashMap['bundleId']=="string"){s_time.prop61=s_time.eVar67=hashMap['bundleId'];}  
if (typeof hashMap['treatAsRegistered']=="string"){omniTreatAsRegistered=hashMap['treatAsRegistered'];} 
if (typeof hashMap['tierLevel']=="string"){s_time.prop63=s_time.eVar63=hashMap['tierLevel'];}  
if (typeof hashMap['subscriberType']=="string"){s_time.prop73=s_time.eVar73=hashMap['subscriberType'];}  
if (typeof hashMap['subscriberId']=="string"){s_time.prop74=s_time.eVar74=hashMap['subscriberId'];}
if (omniTreatAsRegistered == 'false' && s_time.list3.indexOf("paywall")!=-1)
s_time.prop72=s_time.eVar72='subscribed';
else if (omniTreatAsRegistered == 'false') {s_time.prop72=s_time.eVar72='registered';}
else {s_time.prop72=s_time.eVar72='registered';}
}
/* PayWall Code End */
}
// end of doPlugins section
s_time.doPlugins=s_time_doPlugins;
// Clear Omniture vars
function omniClearVars() {
s_time.events = '';
for (var i=0; i < 75; i++) {s_time['prop'+i]='';s_time['eVar'+i]='';}
}
/* Begin Brightcove Smart Code / Media Module Video block */
var checkForFifteen = 0;
var checkForThirty = 0;
if(s_time.enableVideoTracking){
s_time.loadModule("Media");
s_time.Media.autoTrack=false;
s_time.Media.trackWhilePlaying=true;
/* TrackVars and TrackEvents are needed to properly track additional video data points. */
s_time.Media.trackVars="events,eVar6,eVar7,eVar29,prop51,eVar52,eVar53,eVar54,eVar56,eVar57,eVar58,eVar59,eVar60,channel,server,contextData.bc_tags,contextData.bc_channel";
s_time.Media.trackEvents="event6,event7,event8,event56,event57,event58,event59,event60";
s_time.Media.trackMilestones="25,50,75,99";
s_time.Media.segmentByMilestones = true;
s_time.Media.trackUsingContextData = true;
s_time.Media.contextDataMapping = {
"a.media.name":"prop51,eVar6,eVar60",
"a.media.segment":"eVar56",
"a.media.timePlayed":"event58",
"a.media.view":"event6",
"a.media.segmentView":"event59",
"a.media.complete":"event8",
"a.media.milestones":{25:"event56",50:"event7",75:"event57",99:"event60"}};}; // 9/24/13 - changed 55 to 60
/* End Brightcove Smart Code Video block */ 
/*  visit tracking */
s_time.dimo=new Function ("m","y", "var d=new Date(y,m+1,0); return d.getDate();");
s_time.endof=new Function ("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);"
	+"t.setSeconds(0); if(x=='m') d=s_time.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;"
	+"else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;");
s_time.getVisitNumCustom=new Function("tp", ""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s_time.endof(tp),"
+"y=eo.getTime();e.setTime(y);cval=s_time.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}"
+"cvisit=s_time.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else return 'unknown visit number';}"
+"else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s_time.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else{s_time.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return 1;}}"
);
s_time.getVisitNumHome=new Function("tp", ""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_h_'+tp,c2='sinvisit_h_'+tp,eo=s_time.endof(tp),"
+"y=eo.getTime();e.setTime(y);cval=s_time.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}"
+"cvisit=s_time.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else return 'unknown visit number';}"
+"else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s_time.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return str;}"
+"else{s_time.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s_time.c_w(c2,'true',e);return 1;}}"
);
/* 08-05-2008 search on submit */
function omniSearch(searchStr) {
if((typeof(searchStr)=='string') && (searchStr!='')) {
var s_time = s_gi(s_account);
s_time.linkTrackVars='events,eVar19';
s_time.linkTrackEvents='event22';
s_time.events='event22';
s_time.eVar19 = searchStr.toLowerCase();
linkName='Search Performed';
s_time.tl(this,'o',linkName);
s_time.linkTrackVars= s_time.linkTrackEvents = 'None';
s_time.eVar19 = s_time.events = '';}}
/* 11-09-2010 user actions */
function omniTrack(desc){
if(typeof(desc)=='undefined')return 0;
var s = s_gi(s_account); 
s_time.linkTrackVars = 'prop20'; 
s_time.linkTrackEvents = 'None'; 
s_time.prop20 = desc;   
s_time.tl(this,'o',desc);
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.prop20 = '';}
/* MB - 9/19/11 Added generic omni_Tracker function */
function omni_Tracker(omniStr,p1){
var regexp=/View:|UA:/;
if(!regexp.test(omniStr))return 0;
var s=s_gi(s_account);
var omniPgName=s_time.pageName;
var omniSplit=omniStr.indexOf(':');
var omniType=omniStr.substr(0,omniSplit);
var omniDetail=omniStr.substr(omniSplit+1,omniStr.length);
if(omniType=='View'){
if (typeof (p1) != "undefined") {s_time.prop1=p1;}
s_time.pageName=s_time.eVar23=omniDetail.toLowerCase();
s_time.t();}
else if(omniType=='UA'){
s_time.prop20=omniDetail;
s_time.prop24=omniPgName;
s_time.linkTrackEvents='None';
s_time.linkTrackVars='prop20,prop24'; 
s_time.tl(this,'o','omniTracker User Actions:'+omniDetail);
s_time.linkTrackVars=s_time.linkTrackEvents='None';
s_time.prop20=s_time.prop24='';}}
/* LTV */
function omniLTV() {
var ltv_time=new Date();var ct=ltv_time.getTime();ltv_time.setTime(ct+180*24*60*60*1000);
var ccxp=new Date();var cct=ccxp.getTime();ccxp.setTime(cct+30*60*1000);
/* PKW / LTV */
var cpval1=s_time.getQueryParam('pkw');
var isCamp;if(cpval1){isCamp='LTV:'+cpval1}
var isFtcv=s_time.c_r('s_ftcv');var isVisit=s_time.c_r('s_current');
if((isCamp) && (!isFtcv)){
s_time.c_w('s_ftcv',isCamp,ltv_time);s_time.c_w('s_current',isCamp,ccxp);
s_time.events=s_time.apl(s_time.events,'event4',',','1');
s_time.eVar4=isCamp;} 
if(isVisit){s_time.c_w('s_current','cpvisitor',ccxp)}
if((isFtcv) && (!isVisit)){
s_time.events=s_time.apl(s_time.events,'event3',',','1');
s_time.events=s_time.apl(s_time.events,'event5',',','1');} 
/* XID / LTV  */
var cpval1x=s_time.getQueryParam('xid');
var isCampx;if(cpval1x){isCampx='XIDLTV:'+cpval1x}
var isFtcvx=s_time.c_r('s_ftcv_xl');var isVisitx=s_time.c_r('s_current_xl');
if((isCampx) && (!isFtcvx)){ 
s_time.c_w('s_ftcv_xl',isCampx,ltv_time);
s_time.c_w('s_current_xl',isCampx,ccxp);
s_time.events=s_time.apl(s_time.events,'event16',',','1');
s_time.eVar5=isCampx;}
if(isVisit){s_time.c_w('s_current_xl','cpvisitor',ccxp)}
if((isFtcvx) && (!isVisitx)){
s_time.events=s_time.apl(s_time.events,'event15',',','1');
s_time.events=s_time.apl(s_time.events,'event17',',','1');} 
}
/* UA */	
function omniActionTracker(desc) {
var ue_Event='event23';
var s = s_gi(s_account);
s_time.linkTrackVars='events';  
s_time.linkTrackEvents=ue_Event;  
s_time.events=ue_Event;   
s_time.tl(this,'o','Link Clicks: '+desc);
s_time.linkTrackVars=s_time.linkTrackEvents='None';
s_time.events = '';  
}
/* Page View Tracking */	
function omniPgTracker(desc) {
if ((typeof(desc)!='string') || (typeof(s_account)!='string')) return 0;
var s_time = s_gi(s_account);
s_time.pageName = desc;
s_time.t();
}
/* Flyout Tracker */
function omniFlyOutTracker(desc,p2) {
var s_time = s_gi(s_account); 
if (desc=='close'||desc=='next'||desc=='previous') {
s_time.linkTrackVars=s_time.linkTrackEvents='None';
s_time.tl(this,"o","Fly-Out: "+ desc);
return;}
if (desc=='image_click'||desc=='headline_click'||desc=='cta_click') {// clicks
if (typeof(p2)!='string') p2='no headline value specified';			
s_time.linkTrackVars="events,eVar13";
s_time.linkTrackEvents=s_time.events="event34";
s_time.eVar13=p2;
s_time.tl(this,"o","Fly-Out: "+ desc);
s_time.eVar13='';
return;}
if (desc=='impression') {// impressions
if (typeof(p2)!='string') p2='no headline value specified';			
s_time.linkTrackVars="events,eVar13";
s_time.linkTrackEvents=s_time.events="event33";
s_time.eVar13=p2;
s_time.tl(this,"o","Fly-Out: "+ desc);
s_time.eVar13='';}}
/* UA & Comment Tracker 08-23-2012 */
function omniHex(s){ var h = '';for(var i=0;i<s.length;i++) {h +=s.charCodeAt(i).toString(16);}return h;}
function omniTrackEv(omniStr,omniStr2) {
if ((typeof(omniStr)!='string')||(typeof s_account!='string'))return 0;
var s_time = s_gi(s_account);
s_time.linkTrackVars='events,eVar43,eVar45,prop20,prop24,prop43';
var aEvent='event43';
var aList = [['comment','event44'],['email','event45'],['print','event45'],['share','event45'],['write','event45'],['follow','event45'],['fb-like','event46'],['fb-share','event46'],['reddit','event46'],['tweet','event46'],['google+','event46'],['linkedin','event46'],['fb-micro','event46'],['twitter-micro','event46'],['reddit-micro','event46'],['google+-micro','event46'],['hub-menu','event48'],['more-photos-menu','event48'],['adwhitelist_display','event111'],['adwhitelist_click','event112'],['adwhitelist_activate','event113'],['adwhitelist_deactivate','event114']];
for (i=0; i < aList.length; i++) {
if(omniStr.toLowerCase()==aList[i][0]){aEvent = s_time.apl(aEvent,aList[i][1],',','1');}
}
s_time.linkTrackEvents = s_time.events = aEvent;
s_time.prop20 = s_time.eVar43 = omniStr;
(typeof s_time.prop30 == 'string' && s_time.prop30 !='') ?  s_time.prop24 = s_time.prop30 : s_time.prop24 = s_time.pageName;
s_time.prop43 = s_time.prop16;
if(typeof(omniStr2)!='undefined'){
    if(omniStr == 'comment'){s_time.eVar45 = omniHex(omniStr2)}
    else {s_time.prop24 = omniStr2}
    }
s_time.tl(true,'o','Event:'+omniStr);
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.eVar45 = s_time.eVar43 = s_time.prop20 = s_time.prop24 = s_time.prop43 = s_time.events = ''; 
}
/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s_time.trackingServer="metrics.time.com"; // mb - added for fpc on 4/20/13
s_time.trackingServerSecure="smetrics.time.com"; // mb - added for fpc on 4/20/13
s_time.dc="122";
/************************** TCM FUNCTIONS SECTION *******************/
function omniLinkCode(obj,linkType,linkName){
var s=s_gi(s_account);
s.linkTrackVars='None';
s.linkTrackEvents='None';
var lt=obj.href!=null?s.lt(obj.href):"";
if (lt==""){s.tl(obj,linkType,linkName);}}
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/* getPreviousValue_v1.0 - return previous value of designated variable (requires split utility) */
s_time.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s_time.events){i=s_time.split(el,',');j=s_time.split(s_time.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s_time.c_r(c)) r=s_time.c_r(c);v?s_time.c_w(c,v,t)"
+":s_time.c_w(c,'no value',t);return r}}}}}else{if(s_time.c_r(c)) r=s_time.c_r(c);v?"
+"s_time.c_w(c,v,t):s_time.c_w(c,'no value',t);return r}");
/* Plugin: exitLinkHandler 0.7 - identify and report exit links */
s_time.exitLinkHandler=new Function("p","o",""
+"var s=this,h=s_time.p_gh(),n='linkInternalFilters',i,t;if(!h||(s_time.linkTyp"
+"e&&(h||s_time.linkName)))return'';i=h.href.indexOf('?');t=s[n];s[n]=p?p:"
+"t;h.ref=s_time.linkLeaveQueryString||i<0?h.href:h.href.substring(0,i);if"
+"(s_time.lt(h.href)=='e')s_time.linkType='e';else h='';s[n]=t;return o?h:h.hre"
+"f;");
s_time.p_gh=new Function("",""
+"var s=this;if(!s_time.eo&&!s_time.lnk)return'';var o=s_time.eo?s_time.eo:s.lnk,y=s_time.ot(o"
+"),n=s_time.oid(o),x=o.s_oidt;if(s_time.eo&&o==s_time.eo){while(o&&!n&&y!='BODY'){o"
+"=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s_time.ot"
+"(o);n=s_time.oid(o);x=o.s_oidt;}}return o?o:'';");
/* Plugin: getQueryParam 2.3 */
s_time.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s_time.pageURL?s_time.pageURL:s_time.wd.locati"
//+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s_time.pageURL?s_time.wd.location:s_time.wd.locati"
+"on);if(u=='f')u=s_time.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s_time.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s_time.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s_time.pt(q,'&','p_gvf',k)}return v");
s_time.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s_time."
+"epa(v)}return ''");
/* Plugin: getValOnce_v1.0 */
s_time.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s_time.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s_time.c_w(c,v,e?a:0);}return"
+" v==k?'':v");
/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s_time.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/* Plugin Utility: apl v1.1 */
s_time.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s_time.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");
/*  Returns full 4 digit year across browsers */
s_time.tiiGetFullYear=new Function(""
	+"var tiiNewDate=new Date();"
	+"return tiiNewDate.getFullYear();"
);
/* Plugin: getTimeParting 1.3 - Set timeparting values based on time zone */
s_time.getTimeParting=new Function("t","z","y",""
+"dc=new Date('1/1/2000');var f=15;var ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};"
);
/* Plugin: Days since last Visit 1.1.H - capture time from last visit */
s_time.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");
/* Plugin: Popup Blocker v1.1 */
s_time.pupopOnce=0;
s_time.getPBD=new Function(""
+"var s=this;if(s_time.pupopOnce==0){if(s_time.c_w('s_ccc','true',0)){cval=s_time.c_"
+"r('s_dpopups');if(!cval||s_time.putp()){s_time.tpw=window.open('','scpt','wid"
+"th=1,height=1,top=1,left=2000');if(s_time.tpw==null){s_time.c_w('s_dpopups','"
+"N',0);return 'Blocked';}else{s_time.tpw.close();s_time.c_w('s_dpopups','Y',0)"
+";return 'Allowed';}}else{if(cval.indexOf('Y')!=-1)return 'Allowed';"
+"else return 'Blocked';}}else return 'Unknown';s_time.pupopOnce=1;}");
s_time.putp=new Function(""
+"var s=this;var pnl=s_time.pupageNames,pn=!s_time.pageName?window.location.hos"
+"t+window.location.pathname:s_time.pageName;if(pnl)return s_time.pt(pnl,',',s."
+"ee,pn)==''?false:true;return false;");
s_time.ee=new Function("e","n",""
+"return e.toLowerCase()==n.toLowerCase();");
/*--- Begin BC SmartPlayer Analytics v1.0 --- */
var player;
var modVP;
var modExp;
var modCon;
var mediaFriendly;
var mediaName;
var mediaID=0;
var mediaLength;
var mediaOffset=1; 
var mediaTagsArray=[];
var mediaTagsArray2=[];
var mediaRefID;
var mediaPlayerType;
var media_customFields;
var mediaPlayerName="Brightcove Smart Player"; //Hard code player name here.
var mediaTest=[];
s_time.comscoreCust = "6035728"; // comscore customer
s_time.comscoreId = "Time.com"; // comscore site
s_time.nielsenCust = "us-100120"; // nielsen customer id
s_time.nielsenSite = "c06"; // nielsen site id
/* NEW MULTI-PLAYER BC CODE */
var players = [];
var playerHash=new Object();
var playerInfo=new Object(); // this is the JSON object
var vidPlayer=new Object();
/*------------*/
function omni_myTemplateLoaded (id) {
console.log('> * omni_onTemplateLoad ID = "'+id+'"');
players.push(id);}
/*------------*/
function omni_onTemplateReady (event) {
  console.log('> * omni_onTemplateReady event = "'+event+'" ');
  try {
  var player = brightcove.api.getExperience(event.target.experience.id);}
  catch(err) {console.log('>> ** error = "'+err+'"');}  
  if (typeof playerHash[player.id]=='boolean') {return;}
  playerHash[player.id]=true; 
  var videoPlayer=player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
  var videoAds=player.getModule(brightcove.api.modules.APIModules.ADVERTISING);
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY,function(event) {onPlay(event);});
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP,function(event) {onStop(event);});
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PROGRESS,function(event) {onProgress(event);});
  videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,function(event) {onComplete(event);});
  videoAds.addEventListener(brightcove.api.events.AdEvent.START,function(event) {onAdStart(event);});
} 
/* start preroll tracker */
function omniAdTrack(evt) {
var s_time = s_gi(s_account2); 
s_time.linkTrackVars="events,channel,server,contextData.bc_channel";
s_time.linkTrackEvents=s_time.events="event9";
(s_time.channel && s_time.prop16) ? s_time.contextData['bc_channel']=s_time.channel+': '+s_time.prop16 : s_time.contextData['bc_channel']='people mobile: unknown';
s_time.tl(true,'o','video preroll');
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.events = '';
s_time.sa(s_account);
}
/* end preroll tracker */
function onAdStart(evt) {
	console.log('> * * ad started');		
    var id=evt.target.experience.id;
    var cs_adpix=new Image();cs_adpix.src="http://b.scorecardresearch.com/p?c1=1&c2="+s_time.comscoreCust+"&c3="+s_time.comscoreId+"&c5=010000&rn="+Math.ceil(Math.random()*10000000000);
	/* comScore Ad Starts */
    omniAdTrack(evt);
	pausePlayers(evt); // pause all other players
}
/*--------------------P A U S E  P L A Y E R S------------------*/
function pausePlayers(event) {
    var id=event.target.experience.id;
    console.log ("Player " + id + " playing"); 
 // Loop through the players array, and stop the others
   for (var i = 0; i < players.length; i++) {
       if (players[i] != id) {
            //console.log (">> Stopping player " + players[i]);
            var player=brightcove.api.getExperience(players[i]);
            var videoPlayer=player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
            videoPlayer.pause(true);
    }}}
/*-------------------------C O M P L E T E----------------------*/ 
function onComplete(evt) { /* Nielsen Complete */
s_time.omniPauseFlg=false;
var scDU=Math.round(evt.duration);var scCI=s_time.nielsenCust;
var scTL=escape(mediaName);var scCG=escape(mediaName);
var scC6 = s_time.nielsenSite;var vc_pix=new Image();vc_pix.src="http://secure-us.imrworldwide.com/cgi-bin/m?ci="+scCI
+"&cg="+scCG+"&tl=dav2-"+scTL+"&du="+scDU+"&cc=1&c6=vc,"+scC6+"&rnd=" + Math.ceil(Math.random()*100000000); 
checkForFifteen = 0;checkForThirty = 0;	
}
/*--------------------------P L A Y----------------------------*/	
function onPlay(evt){
  //console.log('>> onPlay '+evt.media.displayName);
  var id = evt.target.experience.id; 
  var playingPlayer = brightcove.api.getExperience(evt.target.experience.id);
  //console.log ("* PlayerPlayer Playing is " + playingPlayer.id + " playing"); 
  //console.log ("Player " + id + " playing");
  for (var i = 0; i < players.length; i++) {
    if (players[i] == id) {
    	var currentPlayer = brightcove.api.getExperience(players[i]);
	    //console.log('>> current player player id"'+currentPlayer.id+'" position="'+evt.position+'"');		
    }	
   }
   pausePlayers(evt); // pause all other players 
/*------------*/
mediaLength=evt.duration;
mediaOffset=Math.floor(evt.position);
if(s_time.mediaChange) {mediaOffset = 0;}
  mediaID=(evt.media.id).toString(); // video asset id
  mediaFriendly=evt.media.displayName;
  var videoMM=Math.floor(mediaLength/60).toString(); // minutess
  var videoSS=Math.floor(mediaLength%60).toString();  // seconds 
  (videoMM.length==1) ? videoMM='(0'+videoMM : videoMM='('+videoMM;(videoSS.length==1) ? videoSS='0'+videoSS +')' : videoSS=videoSS+')';
  mediaName=mediaFriendly+' '+videoMM+':'+videoSS; // video (mm:ss) 
/* Tags */
  mediaTagsArray=evt.media.tags; // tags  
  var media_franchise    = 'franchise unavailable';
  var media_subfranchise = 'subfranchise unavailable';
  var media_partner = 'partner unavailable';
  var media_campaign_id = 'campaign id unavailable';
  media_customFields=evt.media.customFields;
	if(typeof media_customFields.section=='string') { media_subfranchise=media_customFields.section.toLowerCase();}
	if(typeof media_customFields.campaign_id == 'string') {media_campaign_id = media_customFields.campaign_id.toLowerCase(); }
	if(typeof media_customFields.franchise == 'string'){ media_franchise = media_customFields.franchise.toLowerCase();}
	else if(typeof media_customFields.subsection == 'string') { media_franchise   = media_customFields.subsection.toLowerCase();}         
	if(typeof media_customFields.partner == 'string') { media_partner = media_customFields.partner.toLowerCase();}
/* New Metrics Area */    
var brightcove_video_date = "date unavailable";
	var media_date='';
	try { 
	if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('Android') > -1) {
    brightcove_video_date=evt.media.publishedDate;
	}
	else {	
    brightcove_video_date=evt.media.creationDate;
	}
	}
	catch (err) {
	  console.log('>> error * * * trying to get video date = "'+err+'"'); 	  
	}
	if (brightcove_video_date!='date unavailable') {
		brightcove_video_date=brightcove_video_date.toString();		
			var pdYYYY = brightcove_video_date.split(' ')[3]; // year	
			var pdDD   = brightcove_video_date.split(' ')[2]; // dd
			var pdMM   = brightcove_video_date.split(' ')[1]; // mm	
			if (pdMM == "Jan"){pdMM=01}
			else if (pdMM == "Jan"){pdMM="01"}
			else if (pdMM == "Feb"){pdMM="02"}
			else if (pdMM == "Mar"){pdMM="03"}
			else if (pdMM == "Apr"){pdMM="04"}
			else if (pdMM == "May"){pdMM="05"}
			else if (pdMM == "Jun"){pdMM="06"}
			else if (pdMM == "Jul"){pdMM="07"}
			else if (pdMM == "Aug"){pdMM="08"}
			else if (pdMM == "Sep"){pdMM="09"}
			else if (pdMM == "Oct"){pdMM="10"}
			else if (pdMM == "Nov"){pdMM="11"}
			else if (pdMM == "Dec"){pdMM="12"}
			if (pdDD.length==1) {pdDD='0'+pdDD;}
			var pdYYYY_MM_DD=pdYYYY+'-'+pdMM+'-'+pdDD;	   
			media_date=pdYYYY_MM_DD;
  } 

  vidPlayer[currentPlayer.id] = {
	 "object"        : currentPlayer.id,
     "franchise"     : media_franchise,
	 "subfranchise"  : media_subfranchise,
	 "campaign_id"   : media_campaign_id,
     "assetID"       : mediaID,
	 "partner": media_partner,
     "currentVideo"  : evt.media.displayName,
	 "brightcoveVideoDate" : media_date,
	 "videoPaused"   : 'none',
	 "mediaPlayerName" : mediaPlayerName,
   //"videoPausePos": 0
  }; 

  mediaRefID=evt.media.referenceId;
  mediaPlayerType=currentPlayer.type; //mb mod for multi-player 
  
  if (mediaOffset==0){
/* These data points are optional */
// s_time.contextData['bc_refid']=mediaRefID;
// s_time.contextData['bc_tags'] = mediaTagsArray2.toString();
// console.log('> * id="'+id+'" franchiseHash = "'+franchiseHash[id]+'"');
  s_time.contextData['bc_tags'] = vidPlayer[currentPlayer.id].franchise;
  (s_time.channel && s_time.prop16) ? s_time.contextData['bc_channel']= s_time.channel+': '+s_time.prop16 : s_time.contextData['bc_channel']='time: unknown';
/*-----------------------------------------------*/
  //s_time.list3  = 'published date='+vidPlayer[currentPlayer.id].publishedDate+'|'+'economics='+vidPlayer[currentPlayer.id].economics;
  //s_time.list3  = 'published date='+vidPlayer[currentPlayer.id].publishedDate; // switch to eVar 
  s_time.eVar7 = vidPlayer[currentPlayer.id].partner; // partner
  s_time.eVar29 = vidPlayer[currentPlayer.id].campaign_id; // media campaign id
  s_time.eVar52 = vidPlayer[currentPlayer.id].brightcoveVideoDate;   // video publish date 
  s_time.eVar53 = vidPlayer[currentPlayer.id].assetID;   // assetID
  s_time.eVar54 = vidPlayer[currentPlayer.id].subfranchise; // from "section" in BC custom fields
  s_time.eVar57 = vidPlayer[currentPlayer.id].franchise; // franchise
  s_time.eVar58 = vidPlayer[currentPlayer.id].mediaPlayerName; // player name
  s_time.eVar59 = mediaPlayerType; // Returns flash or html
  s_time.Media.open(mediaName,mediaLength,mediaPlayerName);
  s_time.Media.play(mediaName,mediaOffset);
  s_time.mediaChange = false;
  }
    else{s_time.Media.play(mediaName,mediaOffset);}
/* Nielsen Starts */
  if (s_time.omniPauseFlg==false) {
  var scCI=s_time.nielsenCust;var scTL=escape(mediaName);var scCG=escape(mediaName);
  var scC6 = s_time.nielsenSite;var vc_pix=new Image();vc_pix.src="http://secure-us.imrworldwide.com/cgi-bin/m?ci="+scCI+"&cg="+scCG+"&tl=dav0-"+scTL+"&cc=1&c6=vc,"+scC6+"&rnd="+Math.ceil(Math.random()*100000000);
  var cs_pix=new Image();cs_pix.src="http://b.scorecardresearch.com/p?c1=1&c2="+s_time.comscoreCust+"&c3="+s_time.comscoreId+"&c5=020000&rn="+Math.ceil(Math.random()*10000000000);/* comScore Content Starts */
  s_time.omniPauseFlg=true; // spoof true to avoid additional calls
}}
/*----------------------------------------------------------------------------------------------*/ 
function onStop(evt){
var playerStatus = brightcove.api.getExperience(evt.target.experience.id);	
mediaOffset=Math.floor(evt.position);
if (mediaOffset==mediaLength) {
s_time.omniPauseFlg=false;
s_time.Media.stop(mediaName,mediaOffset);
s_time.Media.close(mediaName);
}else{ // video is paused
vidPlayer[playerStatus.id].videoPausedPos=mediaOffset;
s_time.Media.stop(mediaName,mediaOffset);
s_time.omniPauseFlg = true; // video is just paused set pause flag to true
}}
/*----------------------C H A N G E-------------------------*/
function onChange(evt){
var thisPLayerID = brightcove.api.getExperience(evt.target.experience.id);
console.log('> onChange: thisPlayerID='+thisPlayerID+' duration='+evt.duration+'  position='+evt.position+' video='+evt.media.displayName);
console.log('>');
s_time.mediaChange = true;
s_time.omniPauseFlg = false;// video stopped
}
/*----------------------P R O G R E S S-------------------------*/
function onProgress(evt){
if(evt.position>=15 && checkForFifteen==0)
{
var s_time = s_gi(s_account2); 
s_time.linkTrackVars="events,channel,server,contextData.bc_channel";
s_time.linkTrackEvents=s_time.events="event79";
(s_time.channel && s_time.prop16) ? s_time.contextData['bc_channel']=s_time.channel+': '+s_time.prop16 : s_time.contextData['bc_channel']='ew : unknown';
s_time.tl(true,'o','video 15 sec');
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.events = '';
s_time.sa(s_account);
checkForFifteen=1;
}
if(evt.position>=30 && checkForThirty==0)
{
var s_time = s_gi(s_account2); 
s_time.linkTrackVars="events,channel,server,contextData.bc_channel";
s_time.linkTrackEvents=s_time.events="event80";
(s_time.channel && s_time.prop16) ? s_time.contextData['bc_channel']=s_time.channel+': '+s_time.prop16 : s_time.contextData['bc_channel']='ew : unknown';
s_time.tl(true,'o','video 30 sec');
s_time.linkTrackVars = s_time.linkTrackEvents = 'None';
s_time.events = '';
s_time.sa(s_account);
checkForThirty=1;
} 
s_time.Media.monitor = function (s,media) {
//console.log('>>>> * * media.evt = "'+media.event+'" position: '+evt.position);
if (media.event == "MILESTONE") { // needs to be event not evt 
var playerMilestone = brightcove.api.getExperience(evt.target.experience.id);
s_time.eVar7 = vidPlayer[playerMilestone.id].partner;  // synch franchise with video during milestones	
s_time.eVar52 = vidPlayer[playerMilestone.id].brightcoveVideoDate; // video publish date 	
s_time.eVar53 = vidPlayer[playerMilestone.id].assetID;   // synch assetID with video during milestones
s_time.eVar54 = vidPlayer[playerMilestone.id].subfranchise; // from "section" in BC custom fields
s_time.eVar57 = vidPlayer[playerMilestone.id].franchise;  // synch franchise with video during miletones
/* Use to set additional data points during milestone calls */
s_time.Media.track(media.name);}}}
/*--------------------P A U S E  P L A Y E R S------------------*/
function pausePlayers(event) {
   var id=event.target.experience.id;
   for (var i = 0; i < players.length; i++) {
       if (players[i] != id) {
            var player=brightcove.api.getExperience(players[i]);
            var videoPlayer=player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
            videoPlayer.pause(true);
       }
   }
}
/* end BC SmartPlayer Analytics v1.0 */
/* Module: Media - From Omniture Consultant Code */
s_time.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+"Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
+"+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
+".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
+"n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
+"c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
+"2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
+"x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
+"ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.fl"
+"oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
+"s,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
+"m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
+"=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
+"':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
+".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
+".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
+".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
+"'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
+"c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
+"i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
+"=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
+"k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
+"ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
+".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx="
+"sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
+"uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
+"c=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s"
+"_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
+"ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
+",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
+"1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
+"';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
+"hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
+"?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
+"';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
+",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
+"+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
+"(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
+"+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
+"\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTag"
+"Name(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,fal"
+"se);if(m.onLoad)m.onLoad(s,m)";
s_time.m_i("Media");
/* H24.3 from LSG */
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.3';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
+"fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
+"s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
+"rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
+"pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
+"(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
+"=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
+"_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
+"x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
+"r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+"oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
+"s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
+"('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
+"ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
+"ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
+"=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
+"(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window"
+".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
+"s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
+"(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
+"me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
+"=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
+"=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
+"e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
+"=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
+"bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
+"){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)"
+"&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)"
+"sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(s"
+"v)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk="
+"='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring("
+"0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv"
+"+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].tra"
+"ckEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.sub"
+"string(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';"
+"else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigra"
+"tionServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUp"
+"perCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='varia"
+"bleProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDep"
+"th')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connec"
+"tionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('"
+"c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else "
+"if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b="
+"='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=funct"
+"ion(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?"
+"t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=li"
+"f?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef'"
+",h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true"
+"');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||"
+"s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if"
+"(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.subs"
+"tring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toU"
+"pperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c"
+",n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),"
+"\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.s"
+"rc;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf('"
+",'+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&'"
+",'rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=functi"
+"on(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x i"
+"n s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q"
+"||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.leng"
+"th;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s"
+"=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'o"
+"nload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*="
+"100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,"
+"x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccoun"
+"tMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0"
+"?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substrin"
+"g(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in"
+"++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r"
+"._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._"
+"in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m."
+"_i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_"
+"l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if"
+"(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.lengt"
+"h;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+"
+"1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;"
+"b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.m"
+"axDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\""
+");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}r"
+"eturn o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};"
+"s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k]"
+"[x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)f"
+"or(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.d"
+"lt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250"
+";s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.ge"
+"tYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='"
+"',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&Str"
+"ing.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Funct"
+"ion('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'"
+"Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.doc"
+"umentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}cat"
+"ch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl"
+".length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight"
+"=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pag"
+"eURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,o"
+"c;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.ind"
+"exOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s."
+"linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o."
+"sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}"
+"else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s"
+".retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd"
+".s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.l"
+"ightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&"
+"&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s["
+"x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if"
+"(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLow"
+"erCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netsca"
+"pe6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netsc"
+"ape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s"
+".ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%"
+"C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,v"
+"isitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,"
+"retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s."
+"vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s."
+"vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaE"
+"nabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCo"
+"okieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlin"
+"eStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg="
+"pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functio"
+"n(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()