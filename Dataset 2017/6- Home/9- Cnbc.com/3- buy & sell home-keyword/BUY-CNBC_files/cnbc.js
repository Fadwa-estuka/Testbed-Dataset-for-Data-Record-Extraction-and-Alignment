
var CNBC_PWL_IDLE_ENABLED=false;var CNBC_PWL_ACTIVE_FLAG=false;var cnbc_pwl_max_idleTime=0;var cnbc_max_idleTime=0;var cnbc_lastIdleTime=new Date().getTime();var size_unit="em";var cnbc_defaultSize=1;var cnbc_maxSize=1.5;var cnbc_minSize=.75;var cnbc_fontSize=cnbc_defaultSize;var element;var streamPoolChecker=-1;var streamQSTimeStore="";var streamQSTimeId;var cnbc_flashproxy_data_reqqueue=new Array();var cnbc_com_errorsMessage=new Array();var cnbc_com_rep_confirm;var cnbc_com_page;var cnbc_com_pgn;var cnbc_com_comid;var cnbc_com_currpage;var cnbc_com_totalcount;var cnbc_com_charlimit;var cnbc_com_pagesize;var cnbc_com_futComid;var cnbc_com_repabsUrl;var cnbc_com_reportRedirect;var cnbc_com_allcomments;var cnbc_com_showComments;var cnbc_com_user_state;var cnbc_com_opt_in;var cnbc_com_reportTopPos;var cnbc_com_reportLeftPos;var cnbc_com_report_curid;var cnbc_com_cacheParams;var cnbc_com_partnerid;var cnbc_com_LinksPerPage;var cnbc_com_LinksDisplay;var cnbc_com_TotalPageCount;var cnbc_com_CurrentPageNum;var cnbc_com_HidePageDisplay;var cnbc_com_Separator;var cnbc_com_pagBaseUrl;var cnbc_com_PagLinks;var cnbc_com_authInterval;var cnbc_com_authTimeout;var cnbc_com_shidden;var cnbc_com_sloadArea;var cnbc_com_sloadInProgress='false';var cnbc_com_optin_cookie='c_sna';var cur_navSect="cnbc_hdsect";var symlookupSuggester=null;var symlookupsettings=null;var cnbc_commentCountMapObj=new cnbc_commentCountMap();var cnbc_tabScheduleArray=[];var EDT_TZ_OFFSET=-4;var EST_TZ_OFFSET=-5;var cnbc_UTCServerTime=0;var cnbc_uniqueNodeID;var cnbc_TotalTabCount;var cnbc_TabCompArray=[];var cnbc_weekArray={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
var cnbc_TabTime=function(tabID,dayofweek,startHours,startMinutes,endHours,endMinutes)
{this.tabID=tabID;this.dayofweek=dayofweek;this.startHours=startHours;this.startMinutes=startMinutes;this.endHours=endHours;this.endMinutes=endMinutes;}
function incrFontContent(id)
{var incrFont=getFontSize();incrFont+=.25;if(incrFont>=cnbc_maxSize)
{incrFont=cnbc_maxSize;}
setFontSize(incrFont);cnbc_createCookie("USERFONTSIZE",incrFont,"");if(id==null){id="cnbc_textbody";}
document.getElementById(id).style.fontSize=incrFont+size_unit;}
function dcrFontContent(id)
{var dcrFont=getFontSize();dcrFont-=.25;if(dcrFont<=cnbc_minSize)
{dcrFont=cnbc_minSize;}
setFontSize(dcrFont);cnbc_createCookie("USERFONTSIZE",dcrFont,"");if(id==null){id="cnbc_textbody";}
document.getElementById(id).style.fontSize=dcrFont+size_unit;}
function setDefault(id)
{var dfltFont=1;var cookieValue=cnbc_readCookie('USERFONTSIZE');if(cookieValue!=null){if(cookieValue>=cnbc_maxSize){dfltFont=cnbc_maxSize;}else if(cookieValue<=cnbc_minSize){dfltFont=cnbc_minSize;}else{dfltFont=cookieValue;}}else{dfltFont=1;}
setFontSize(dfltFont);cnbc_createCookie("USERFONTSIZE",dfltFont,"");if(id==null){id="cnbc_textbody";}
document.getElementById(id).style.fontSize=dfltFont+size_unit;}
function setFontSize(value)
{cnbc_fontSize=value;}
function getFontSize()
{return cnbc_fontSize;}
function printThis(){var x,s=location.href;if((x=s.indexOf('#'))>=0)
{s=s.substr(0,x);}
if(s.indexOf('?')>=0)
{s+='&print=1&displaymode=1098';}
else
{if(s.charAt(s.length-1)!='/')
{s+='/';}
s+='print/1/displaymode/1098/';}
var rdid=/[\?|&|\/]did[=|\/](\d*)/;var mdid=s.match(rdid);if(mdid!=null&&mdid[1]!='')
{var rid=/[\?|&|\/]id[=|\/](\d*)/;var mid=s.match(rid);if(mid!=null&&mid[1]!='')
{s=s.replace(mid[1],mdid[1])}}
var o=new UberSniff();if(o.webtv)
{location.href=s;}
else
{OCW(s,'print','width=640,height=480,scrollbars=1,resizable=1');}}
function CNBC_toggleTabs(id,parent,activetab_class,tab_class,element){var tabobj=document.getElementById(id);var els=document.getElementsByTagName(element);for(i=0;i<els.length;i++){if(els[i].parentNode.id==parent){els[i].className=tab_class;}}
if(tabobj.className==tab_class){tabobj.className=activetab_class;}}
function CNBC_toggleSections(id,parent,element){var sectobj=document.getElementById(id);var els=document.getElementsByTagName(element);for(i=0;i<els.length;i++){if(els[i].parentNode.id==parent){els[i].style.display="none";}}
sectobj.style.display="block";}
function cnbc_elementState(x,el,value){if(el=='cursor'){x.style.cursor=value;}else if(el=='background'){x.style.backgroundColor=value;}}
function cnbc_multiover(x){x.style.backgroundColor='#f7f7f7';}
function cnbc_multiout(x){x.style.backgroundColor='#FFFFFF';}
function cnbc_multionclick(loc){window.location=loc;}
function cnbc_toggleOnOff(on,off){var onObj=document.getElementById(on);var offObj=document.getElementById(off);if(onObj.className==""){onObj.className="bold";offObj.className="";}}
function cnbc_setSymbolInputField(){var strSymbol=cnbc_getURLParam('q');document.getElementById("symbol_input").value=strSymbol;}
function cnbc_getURLwithSymbol(url){location.href=url+'?q='+cnbc_getURLParam('q');}
function cnbc_addtoWatchlistTabs(){cnbc_watchlist_addSymbol(cnbc_getURLParam('q'));}
function create_modURL(url,params){var cnbc_curURL=location.href;var cnbc_index=cnbc_curURL.indexOf("http://www.cnbc.com");var cnbc_index2=cnbc_curURL.indexOf("http://cnbc.com");var index=params.indexOf("url");if(params.indexOf("commentsRedirectUrl")!=-1)
{cnbc_curURL=encodeURIComponent(((params.indexOf("commentsRedirectUrl")!=-1)&&(cnbc_curURL.indexOf("#comments_top")==-1))?cnbc_curURL+"#comments_top":cnbc_curURL);}
if(cnbc_index!=-1||cnbc_index2!=-1){if(index!=-1){return(url+params.replace(/url/,cnbc_curURL.replace("=","/").replace("?","/").replace("&","/")));}}else{if(index!=-1){index=cnbc_curURL.indexOf("?");var serviceURL=cnbc_curURL;if(index!=-1)
{serviceURL=cnbc_curURL.substring(0,index);}
return(url+params.replace(/url/,serviceURL));}else{return"";}}}
function cnbc_gotomodURL(url,params){var finalURL=create_modURL(url,params);if(finalURL!=""){window.location=finalURL;}}
function cnbc_signIn(url,params){var finalURL=create_modURL(url,params);if(finalURL!=""){document.getElementById("reg_user").style.display="none";document.getElementById("unreg_user").style.display="none";document.getElementById("overlay").style.display="block";var overLayCode='<div class="contentDiv" align="center"><iframe name="signInFrame" frameborder="0" style="height:276px;width:330px;background:#FFFFFF" scrolling="no" id="signInFrame"></iframe></div>';var overLayElm=document.createElement("DIV");overLayElm.id="signInDiv";overLayElm.align="center";overLayElm.className="signInDiv";overLayElm.innerHTML=document.getElementById("signInDivHidden").innerHTML+overLayCode;document.body.appendChild(overLayElm);var leftPos=cnbc_findPosLeft(document.getElementById("overlay"));var topPos=cnbc_findPosTop(document.getElementById("overlay"));document.getElementById("signInDiv").style.top=(topPos+23)+'px';document.getElementById("signInDiv").style.left=(leftPos-107)+'px';document.getElementById("signInFrame").src=finalURL;document.getElementById("signInDiv").style.display="block";hideCheck();}}
function hideOverLay(){document.body.removeChild(document.getElementById("signInDiv"));document.getElementById("overlay").style.display="none";cnbc_toggleUserState();}
function hideCheck(){divObj=document.getElementById("signInDiv");document.body.onmousedown=document.body.onmouseup=function(evt){evt=evt||window.event;evt_target=evt.target||evt.srcElement;if(evt.type=="mousedown"||evt.type=="mouseup"){if(evt_target.id!='signInDiv'){hideOverLay();document.body.onmousedown=document.body.onmouseup="";}}}}
function cnbc_toggleUserState(){var user_state=cnbc_watchlist_isRegistered();if(user_state){document.getElementById("reg_user").style.display="block";document.getElementById("unreg_user").style.display="none";}
else{document.getElementById("unreg_user").style.display="block";document.getElementById("reg_user").style.display="none";}}
function cnbc_displayUsername(parent,id){var isValidUser=cnbc_isLoggedIn(cnbc_validUserCheckURL);var x=document.getElementById(id);if(isValidUser){var user_state=cnbc_watchlist_isRegistered();if(user_state){var CookieUser=cnbc_readCookie('SUBSCRIBERINFO');if(!CookieUser)
{var temp=cnbc_readCookie('ACEGI_SECURITY_HASHED_REMEMBER_ME_COOKIE');if(temp)
{CookieUser=temp.split(":")[0];}
else
{CookieUser=cnbc_readCookie('CASTOKEN');if(!CookieUser)
{CookieUser="Guest";}}}
if(CookieUser.length>24)
{x.innerHTML=CookieUser;var p=document.getElementById(parent);var t=p.style.top;p.style.top="25px";}else{x.innerHTML="Welcome, "+CookieUser;}}else{x.innerHTML="Welcome, Guest";}}else{x.innerHTML="Welcome, Guest";}}
function emailThis(){trackit();var forPostfix='';if(location.href.search(/for\/cnbc/gi)!=-1)
{forPostfix='/for/cnbc';}
var et='mailto:?subject='+(pd_me.nw?'Newsweek.com%20on%20MSNBC':'CNBC.com')+'%20Article:%20'+pd_esc(pd_me.h)+'&body='+pd_esc(pd_me.h)+'%0D%0A'+pd_esc(pd_me.d)+'%0D%0Ahttp://'+location.host+'/id/'+pd_me.id+pd_me.su+forPostfix+'/';if(pd_me.ep!='')et+='%0D%0A_____________________________%0D%0A'+pd_me.ep;location.href=et;}
function setPermalink(){var pLink=document.getElementById("cnbc_permalink");pLink.innerHTML=location.href;}
function buildTagSheets(id,target,taglist,size)
{var oB=new UberSniff();if(oB.safari)
{var sheet=getObj(id+0);var ul_cnbctab=sheet.parentNode.childNodes[0];for(var i=0;i<ul_cnbctab.childNodes.length;i++)
{ul_cnbctab.childNodes[i].style.fontSize=11;}}
for(var i=0;i<taglist.length;i++)
{var sheet=getObj(id+i);var len=taglist[i].length;if(len>60)
size=Math.floor(len/3)+1;var start=0,end=size;while(len>size)
{buildTagUL(sheet,target,taglist[i],start,end);start+=size;end+=size;len-=size;}
if(start<taglist[i].length&&taglist[i][start])
{buildTagUL(sheet,target,taglist[i],start,taglist[i].length);}
setMPTabOffsetHeight(sheet);}}
function buildTagUL(parent,target,taglist,start,end)
{var list=createEl('ul');parent.appendChild(list);for(var j=start;j<end;j++)
{if(taglist[j])
{var item=createEl('li');item.innerHTML="<a href='/id/"+target+"/cid/"+taglist[j].id+"'>"+taglist[j].name+"</a>";list.appendChild(item);}}}
function switchMPTab(tab,sheetName)
{if(tab.className.indexOf("active")==0)return;var children=tab.parentNode.childNodes;var display;for(var i=0;i<children.length;i++)
{if(children[i]!=tab)
{children[i].className="inactive";display="none";}
else
{if(i==children.length-1)
tab.className="activeR";else
tab.className="active";display="";if(typeof(footLink)!="undefined"&&footLink[i])
{var foot=getObj("mpfootlink");foot.href=footLink[i].link;foot.innerHTML=footLink[i].text;}}
getObj(sheetName+i).style.display=display;setMPTabOffsetHeight(getObj(sheetName+i));}}
function setMPTabOffsetHeight(sheet)
{var ulChildren=sheet.childNodes;var maxUlHeight=0;for(var i=0;i<ulChildren.length;i++)
{maxUlHeight=ulChildren[i].offsetHeight>maxUlHeight?ulChildren[i].offsetHeight:maxUlHeight;}
sheet.style.height=maxUlHeight;}
function CNBCUpdateTimeStamp(pdt,mode){if(pdt!=''&&window.DateTime){var str;var d=parseInt((pdt-621355968000000000)/10000);var c=new Date();var m=parseInt(((c-d)/1000)/60);var h=Math.floor(m/60);if(h<1){if(m>=1){str=m+' min';if(mode=='normal')str+='ute';if(m>1)str+='s';str+=' ago';}}
else{str=h+' h';if(mode=='normal')str+='ou';str+='r';if(h>1)str+='s';str+=' ago';}
if(str!=undefined)
document.write(str);}}
function cnbc_readPartnerSessionCookie(name){if(document.cookie.length>0)
{c_start=document.cookie.indexOf(name+"=");if(c_start!=-1)
{c_start=c_start+name.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1)c_end=document.cookie.length
var c_value=unescape(document.cookie.substring(c_start,c_end));return c_value;}}
return null;}
function cnbc_createPartnerSessionCookie(c_name,value){var mydomain='cnbc.com';document.cookie=c_name+"="+value+";domain="+mydomain+";path=/";}
function cnbc_erasePartnerSessionCookie(c_name,value)
{var mydomain='cnbc.com';document.cookie=c_name+"="+value+";path=/"+";expires=Thu, 01-Jan-1970 00:00:01 GMT"+";domain="+mydomain;}
function cnbc_drpdwnmouseOver(subid){try{document.getElementById(subid).style.display='block';}
catch(e){};}
function cnbc_drpdwnmouseOut(subid){try{document.getElementById(subid).style.display='none';}
catch(e){};}
function cnbc_findPosLeft(adobj){var curleft=0;if(adobj.offsetParent){curleft=adobj.offsetLeft
while(adobj=adobj.offsetParent){curleft+=adobj.offsetLeft}}
return curleft;}
function cnbc_findPosTop(adobj){var curtop=0;if(adobj.offsetParent){curtop=adobj.offsetTop
while(adobj=adobj.offsetParent){curtop+=adobj.offsetTop}}
return curtop;}
function cnbc_drpdwnpos(hid,subid)
{try
{document.getElementById(subid).style.left=cnbc_findPosLeft(document.getElementById(hid))+"px";document.getElementById(subid).style.top=cnbc_findPosTop(document.getElementById(hid))+19+"px";}
catch(e){};}
function cnbc_init_droparrows(str,element,holder)
{try
{var els=document.getElementById(holder).getElementsByTagName(element);for(i=0;i<els.length;i++){if(els[i].id.indexOf(str)!=-1){els[i].style.display='inline';}}}
catch(e){};}
function cnbc_highlightSubText(curpageid,class_nam)
{try
{if(document.getElementById('hsubnav_'+curpageid)!=null){document.getElementById('hsubnav_'+curpageid).className=class_nam;}}
catch(e){};}
function cnbc_toggleElementsByID(hideID,showID,isRemovable,cookieName)
{if(hideID!=null)
{if(isRemovable==true)
{var pshd_value=cnbc_readPartnerSessionCookie(cookieName);if(cookieName==null||cookieName.length<=0||pshd_value!=null)
{var removeID=document.getElementById(hideID);if(removeID!=null)removeID.parentNode.removeChild(removeID);document.getElementById(showID).style.display="block";cur_navSect=showID;}}
else
{var removeID=document.getElementById(showID);if(removeID!=null)removeID.parentNode.removeChild(removeID);document.getElementById(hideID).style.display="block";cur_navSect=hideID;}}}
function cnbc_checkPageReferrer(ref_url,cookie)
{var cnbc_url="cnbc.com";var pshd_value=cnbc_readPartnerSessionCookie(cookie);if((pshd_value!=null)&&(ref_url!=null)&&(ref_url.length>0))
{var pshd_fun_value=pshd_value.split('|');var psh_PartnerURL=pshd_fun_value[7];var params_index=ref_url.indexOf("?");if(params_index!=-1)
{ref_url=ref_url.substring(0,params_index);}
var ref_index=ref_url.indexOf(psh_PartnerURL);var cnbc_index=ref_url.indexOf(cnbc_url);if((ref_index==-1)&&(cnbc_index==-1))
{cnbc_erasePartnerSessionCookie(cookie,"");return null;}
else
{return pshd_value;}}
else
{return pshd_value;}}
function cnbc_WSODChartLoad(url,id)
{var get_symbol=url.split("?");var chartSource=get_symbol[0]+"?"+cnbc_readCookie("cnbcChartAuthKeyCookie")+get_symbol[1];document.getElementById(id).src=chartSource;}
var preloader_iframe_count=0;var preloader_iframe_link;var preloader_iframe_id;function cnbcwsod_loadchart(symbol,hrefparam,chartid,symbolname){var new_display=symbolname;var get_symbol=symbol.split("?");document.getElementById('cnbcchart_symbol'+chartid).innerHTML=new_display;preloader_iframe_link=get_symbol[0]+"?"+cnbc_readCookie("cnbcChartAuthKeyCookie")+get_symbol[1];preloader_iframe_id='thumb_chart'+chartid;document.getElementById('init_cnbcchart_page_'+chartid).value=hrefparam;document.getElementById('thumb_chart'+chartid).src='http://media.cnbc.com/i/CNBC/CNBC_Images/blank.gif';cnbc_chart_clear_load();}
function chartlinkload(x){var flexQuote_storehref=document.getElementById('init_cnbcchart_page_'+x).value
try
{window.location=flexQuote_storehref;}
catch(e){};}
function cnbc_chart_clear_load(){preloader_iframe_count+=1
if(preloader_iframe_count<=4)
{document.getElementById(preloader_iframe_id).style.display='none';setTimeout("cnbc_chart_clear_load()",20);}
else
{document.getElementById(preloader_iframe_id).style.display='block';document.getElementById(preloader_iframe_id).src=preloader_iframe_link;preloader_iframe_count=0;}}
function init_sw_tab_MO(a,b,c){var init_store_MO_level=c;var init_start_tab='';var init_start_div='';var cookie_MO_recall_init=cnbc_readCookie("MarketOverviewRememberTabsLast"+init_store_MO_level);var cookie_MO_div_init=cnbc_readCookie("MarketOverviewRememberDivLast"+init_store_MO_level);var cookie_MO_recall_cookie=cnbc_readCookie("MarketOverviewRememberTabs"+init_store_MO_level+"Cookie");var tempCookieMOCheck;var cookie_MO_recall_store=cookie_MO_recall_cookie.split(",");if(cookie_MO_recall_init!=null)
{for(var j=0;j<cookie_MO_recall_store.length;++j)
{if(cookie_MO_recall_init.indexOf(cookie_MO_recall_store[j])!=-1)
{tempCookieMOCheck=cookie_MO_recall_store[j];break;}
else{tempCookieMOCheck=document.getElementById(a).id;}}
cnbc_eraseCookie("MarketOverviewRememberTabsLast"+c,"","");cnbc_createCookie("MarketOverviewRememberTabsLast"+c,tempCookieMOCheck,"");cnbc_eraseCookie("MarketOverviewRememberDivLast"+c,"","");cnbc_createCookie("MarketOverviewRememberDivLast"+c,tempCookieMOCheck+'div',"");cookie_MO_div_init=cnbc_readCookie("MarketOverviewRememberDivLast"+init_store_MO_level);init_start_tab=document.getElementById(tempCookieMOCheck);init_start_div=document.getElementById(cookie_MO_div_init);}
else if(cookie_MO_recall_init==null)
{cnbc_eraseCookie("MarketOverviewRememberTabsLast"+c,"","");cnbc_createCookie("MarketOverviewRememberTabsLast"+c,a,"");cnbc_eraseCookie("MarketOverviewRememberDivLast"+c,"","");cnbc_createCookie("MarketOverviewRememberDivLast"+c,b,"");init_start_tab=document.getElementById(a);init_start_div=document.getElementById(b);}
init_start_tab.className='h18 fL cnbc_MO_bd oranfont';init_start_tab.style.color='#fc7410';init_start_tab.style.backgroundColor='#ffffff';init_start_tab.style.borderBottom='1px solid #ffffff';init_start_div.style.display='block';}
function sw_tab_MO(x,y,z){var store_MO_level=z;var cookie_MO_recall='';var cookie_MO_recall_div='';var currentSelectionTab=x;var currentSelectionDiv=y;cookie_MO_recall=cnbc_readCookie("MarketOverviewRememberTabsLast"+store_MO_level);if(cookie_MO_recall!=null)
{cookie_MO_recall=cnbc_readCookie("MarketOverviewRememberTabsLast"+store_MO_level);cookie_MO_recall_div=cnbc_readCookie("MarketOverviewRememberDivLast"+store_MO_level);}
else if(cookie_MO_recall==null){cookie_MO_recall=cnbc_readCookie("MarketOverviewRememberTabs"+store_MO_level);cookie_MO_recall_div=cnbc_readCookie("MarketOverviewRememberDiv"+store_MO_level);}
if(currentSelectionTab!=cookie_MO_recall){var tab_sw_MO_A=document.getElementById(cookie_MO_recall);var tab_sw_MO_B=document.getElementById(currentSelectionTab);var div_sw_MO_A=document.getElementById(cookie_MO_recall_div);var div_sw_MO_B=document.getElementById(currentSelectionDiv);tab_sw_MO_B.style.color='#fc7410';tab_sw_MO_B.style.backgroundColor='#ffffff';tab_sw_MO_B.style.borderBottom='1px solid #ffffff';tab_sw_MO_B.style.cursor='default';div_sw_MO_B.style.display='block';tab_sw_MO_B.className='h18 fL cnbc_MO_bd oranfont';tab_sw_MO_A.style.color='#004276';tab_sw_MO_A.style.cursor='pointer';tab_sw_MO_A.className='h18 fL cnbc_MO_bd';tab_sw_MO_A.style.backgroundColor='#eeeeee';tab_sw_MO_A.style.borderBottom='1px solid #ccd6db';div_sw_MO_A.style.display='none';cnbc_createCookie("MarketOverviewRememberTabs"+store_MO_level,currentSelectionTab,"")
cnbc_createCookie("MarketOverviewRememberDiv"+store_MO_level,currentSelectionDiv,"")
cnbc_createCookie("MarketOverviewRememberTabsLast"+store_MO_level,currentSelectionTab,"");cnbc_createCookie("MarketOverviewRememberDivLast"+store_MO_level,currentSelectionDiv,"");}
else{return;}}
function init_sw_tab_PG(a,b,c){var init_store_PG_level=c;var init_start_tab;var init_start_div;var cookie_PG_recall_init=cnbc_readCookie("Program_LinksRememberTabs_last"+init_store_PG_level);if(cookie_PG_recall_init!=null)
{var cookie_PG_div_init=cnbc_readCookie("Program_LinksRememberDiv_last"+init_store_PG_level);init_start_tab=document.getElementById(cookie_PG_recall_init);init_start_div=document.getElementById(cookie_PG_div_init);}
else
{init_start_tab=document.getElementById(a);init_start_div=document.getElementById(b);}
init_start_tab.className='h18 fL oranfont';init_start_tab.style.color='#fc7410';init_start_div.style.display='block';}
function sw_tab_PG(x,y,z){var store_PG_level=z;var cookie_PG_recall
var cookie_PG_recall_div
cookie_PG_recall=cnbc_readCookie("Program_LinksRememberTabs_last"+store_PG_level);if(cookie_PG_recall!=null)
{cookie_PG_recall=cnbc_readCookie("Program_LinksRememberTabs_last"+store_PG_level);cookie_PG_recall_div=cnbc_readCookie("Program_LinksRememberDiv_last"+store_PG_level);}
else{cookie_PG_recall=cnbc_readCookie("Program_LinksRememberTabs"+store_PG_level);cookie_PG_recall_div=cnbc_readCookie("Program_LinksRememberDiv"+store_PG_level);}
if(x!=cookie_PG_recall){var tab_sw_PG_A=document.getElementById(cookie_PG_recall);var tab_sw_PG_B=document.getElementById(x);var div_sw_PG_A=document.getElementById(cookie_PG_recall_div);var div_sw_PG_B=document.getElementById(y);tab_sw_PG_B.style.color='#fc7410';div_sw_PG_B.style.display='block';tab_sw_PG_B.className='h18 fL cnbc_PG_bd oranfont';tab_sw_PG_A.style.color='#004276';tab_sw_PG_A.className='h18 fL cnbc_PG_bd';div_sw_PG_A.style.display='none';cnbc_createCookie("Program_LinksRememberTabs"+store_PG_level,x,"")
cnbc_createCookie("Program_LinksRememberDiv"+store_PG_level,y,"")
cnbc_createCookie("Program_LinksRememberTabs_last"+store_PG_level,x,"")
cnbc_createCookie("Program_LinksRememberDiv_last"+store_PG_level,y,"")}
else{return;}}
function redirect(x){var f=document.getElementById(x);var url=f.options[f.selectedIndex].value;window.location=url;}
function cnbc_renderTickerSymbol(cmpId){var strSymbol=cnbc_getURLParam('q');if(!strSymbol)
strSymbol='';for(var i=0;i<4;i++)
{var elem=document.getElementById('cnbc_rss_ticker_'+cmpId+'_'+i);elem.href=elem.href.replace('%7B$symbol%7D',escape(strSymbol));if(i<2)
{elem.innerHTML=elem.innerHTML.replace('{$symbol}',strSymbol.toUpperCase());}}}
function cnbc_addLink(rawHref,rawTitle)
{var heads=document.getElementsByTagName("head");var head=null;if(heads.length>0)
{head=heads[0];}
if(head)
{var tickerSymbol=cnbc_getURLParam('q');link=document.createElement("link");link.rel="alternate";link.type="application/rss+xml";link.href=rawHref.replace('{$symbol}',tickerSymbol);link.title=rawTitle.replace('{$symbol}',tickerSymbol.toUpperCase());head.appendChild(link);}}
var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz));}
function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz));}
function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz));}
function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data));}
function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data));}
function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data));}
function md5_vm_test()
{return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72";}
function core_md5(x,len)
{x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16)
{var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}
return Array(a,b,c,d);}
function md5_cmn(q,a,b,x,s,t)
{return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}
function md5_ff(a,b,c,d,x,s,t)
{return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}
function md5_gg(a,b,c,d,x,s,t)
{return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}
function md5_hh(a,b,c,d,x,s,t)
{return md5_cmn(b^c^d,a,b,x,s,t);}
function md5_ii(a,b,c,d,x,s,t)
{return md5_cmn(c^(b|(~d)),a,b,x,s,t);}
function core_hmac_md5(key,data)
{var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++)
{ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}
var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128);}
function safe_add(x,y)
{var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
function bit_rol(num,cnt)
{return(num<<cnt)|(num>>>(32-cnt));}
function str2binl(str)
{var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)
bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin;}
function binl2str(bin)
{var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)
str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str;}
function binl2hex(binarray)
{var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++)
{str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+
hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF);}
return str;}
function binl2b64(binarray)
{var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3)
{var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++)
{if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F);}}
return str;}
function cnbc_rssCmpClass(cmpId,className)
{if(window.location.href.indexOf("/sh/3")>-1||window.location.href.indexOf("&sh=3")>-1||window.location.href.indexOf("?sh=3")>-1)
{var rssCmp=document.getElementById(cmpId);if(rssCmp!=null)rssCmp.className+=' '+className;}}
function cnbc_RunQuoteStrip(w,x,y,z,update,streamSwitch,stream,realtime,client){var queryStringList=cnbc_getLastSlashValue("q");if((queryStringList=='')|(queryStringList=='undefined'|(queryStringList=='null')))
{return;}
else{new_param=queryStringList.toUpperCase();var imgsrc;document.getElementById("WSODQ"+w+"_"+x+"_NAME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_NAME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_SYMBOL_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_SYMBOL_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+new_param+"_SYMBOL_"+y+"_"+z).innerHTML=new_param;document.getElementById("WSODQ"+w+"_"+x+"_EXCHANGE_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_EXCHANGE_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_LAST_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_LAST_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_DYNACOLOR0_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_DYNACOLOR0_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_CHANGEARROW_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_CHANGEARROW_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_CHANGE_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_CHANGE_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_CHANGEPCT_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_CHANGEPCT_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_VOLUME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_VOLUME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_LASTTIME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_LASTTIME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_FLASH_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_FLASH_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_DISPLAYPARENT_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_DISPLAYPARENT_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_PROVIDER_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_PROVIDER_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_REALTIME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_REALTIME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_DELAYED_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_DELAYED_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_REALTIMEB_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_REALTIMEB_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_DELAYEDB_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_DELAYEDB_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_REALTIMENAME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_REALTIMENAME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_DELAYEDNAME_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_DELAYEDNAME_"+y+"_"+z;document.getElementById("WSODQ"+w+"_"+x+"_SOURCE_"+y+"_"+z).id="WSODQ"+w+"_"+new_param+"_SOURCE_"+y+"_"+z;document.getElementById("WSODQQUOTESTRIP_VALUE").value=new_param;imgsrc=document.getElementById("WSODQQUOTESTRIP_CHART_VALUE").value;streamQSTimeId="WSODQ"+w+"_"+new_param+"_LASTTIME_"+y+"_"+z;var newimgsrc=imgsrc.replace(x,new_param);document.getElementById("WSODQ_QUOTESTRIP_CHART").src=newimgsrc;cnbc_quoteComponent_init_getData(new_param,"WSODQ_COMPONENT_"+z,"WSODQ",realtime,"QUOTESTRIP",streamSwitch,stream,client);cnbc_master_service_pushSymbols(new_param,realtime);cnbc_master_service_update(update);}}
function cnbc_RunQuoteStripCheck(x)
{var streamQSid=document.getElementById(x)
if(streamQSid!=null)
{if(streamQSTimeStore=="")
{streamQSTimeStore=streamQSid.innerHTML;}
else
{if(streamQSTimeStore!=streamQSid.innerHTML)
{streamQSTimeStore=streamQSid.innerHTML;}
else
{cnbc_switch_off("masterSwitch")
clearInterval(streamPoolChecker);streamPoolChecker=-1;}}}}
function cnbc_RunQuoteStripAdd(){var sym=document.getElementById("WSODQQUOTESTRIP_VALUE").value;cnbc_watchlist_addSymbolsFromTextArea(sym);}
function cnbc_MasterContainerHide(x,y){var mcNodesCon=document.getElementById(y);var mcNodesBody=document.getElementById(x);if(mcNodesBody!=null){if(mcNodesBody.innerHTML!='')
{var tagsLength=mcNodesBody.getElementsByTagName("div");if(((mcNodesBody.innerHTML.indexOf("<script>")!=-1)||mcNodesBody.innerHTML.indexOf("<SCRIPT>")!=-1)&&(tagsLength.length==0))
{mcNodesCon.style.display="none";}}
else{if(mcNodesCon!=null)
{if((mcNodesCon.innerHTML.indexOf("cnbc_MasterContainerHide")==-1)){mcNodesCon.parentNode.removeChild(mcNodesCon);}}}}}
function AC_AddExtension(src,ext)
{if(src.indexOf('?')!=-1)
return src.replace(/\?/,ext+'?');else
return src+ext;}
function AC_FL_GetContent(){var ret=AC_GetArgs
(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");return AC_GenerateobjAsString(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_GenerateobjAsString(objAttrs,params,embedAttrs)
{var str='<object ';for(var i in objAttrs)
str+=i+'="'+objAttrs[i]+'" ';str+='>';for(var i in params)
str+='<param name="'+i+'" value="'+params[i]+'" /> ';str+='<embed ';for(var i in embedAttrs)
str+=i+'="'+embedAttrs[i]+'" ';str+=' ></embed></object>';return str;}
function AC_Generateobj(objAttrs,params,embedAttrs)
{var str='<object ';for(var i in objAttrs)
str+=i+'="'+objAttrs[i]+'" ';str+='>';for(var i in params)
str+='<param name="'+i+'" value="'+params[i]+'" /> ';str+='<embed ';for(var i in embedAttrs)
str+=i+'="'+embedAttrs[i]+'" ';str+=' ></embed></object>';document.write(str);}
function AC_FL_RunContent(){var ret=AC_GetArgs
(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_SW_RunContent(){var ret=AC_GetArgs
(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_GetArgs(args,ext,srcParamName,classid,mimeType){var ret=new Object();ret.embedAttrs=new Object();ret.params=new Object();ret.objAttrs=new Object();for(var i=0;i<args.length;i=i+2){var currArg=args[i].toLowerCase();switch(currArg){case"classid":break;case"pluginspage":case"name":ret.embedAttrs[args[i]]=args[i+1];break;case"src":case"movie":args[i+1]=AC_AddExtension(args[i+1],ext);ret.embedAttrs["src"]=args[i+1];ret.params[srcParamName]=args[i+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":ret.objAttrs[args[i]]=args[i+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"tabindex":ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];break;default:ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1];}}
ret.objAttrs["classid"]=classid;if(mimeType)ret.embedAttrs["type"]=mimeType;return ret;}
function finesseLL(parentContainer,heightLimit,removeIcons,wormHole){parentObject=document.getElementById(parentContainer);var childLinks=parentObject.getElementsByTagName("li");if(removeIcons){for(i=0;i<childLinks.length;i++){var childAnchors=childLinks[i].getElementsByTagName("a");var childImages=childAnchors[0].getElementsByTagName("img");childLinks[i].removeChild(childImages[0]);}}
if(typeof(wormHole)!='undefined'){if(typeof(wormHoleContent)=='undefined'){wormHoleContent=new Array();}
if(typeof(wormHoleContent[wormHole])=='undefined'){wormHoleContent[wormHole]=new Array();}}
var linkToDelete=1;var childLinksCount=childLinks.length;while(heightLimit<parentObject.clientHeight&&linkToDelete<childLinksCount){if(typeof(wormHoleContent[wormHole])=='object'){wormHoleContent[wormHole][wormHoleContent[wormHole].length]=childLinks[childLinksCount-linkToDelete].cloneNode(1);}
childLinks[childLinksCount-linkToDelete].parentNode.removeChild(childLinks[childLinksCount-linkToDelete]);linkToDelete++;}}
function displayWormHole(wormHole,divForOutput,beforeWormHole,afterWormHole,reverse){if(typeof(wormHoleContent[wormHole])=='object'){var divForOutput=document.getElementById(divForOutput);if(typeof(reverse)!='undefined'){wormHoleContent[wormHole].reverse();}
if(wormHoleContent[wormHole].length){document.write(beforeWormHole);}
for(i=0;i<wormHoleContent[wormHole].length;i++){if(typeof(wormHoleContent[wormHole][i])=='object'){divForOutput.appendChild(wormHoleContent[wormHole][i]);}else{document.write(wormHoleContent[wormHole][i]);}}
if(wormHoleContent[wormHole].length){document.write(afterWormHole);}}}
function cnbc_mouseOverLinklistPopup(id){var getInfo=id.getAttribute("linklistinfo").split("#|#");var divId=getInfo[0];var img="";if(getInfo[2]!="")
{img='<td class="vaT padR10"><img src="'+getInfo[2]+'" border="0"/></td>';}
var construct='<table border="0" cellpadding="0" cellspacing="0"><tr>'+img+'<td class="vaT">'+getInfo[3]+'</td></tr></table>';cnbc_ToolTipShow(divId,id,getInfo[4],getInfo[5],construct,getInfo[1]);}
function cnbc_mouseOutLinklistPopup(id){var getInfo=id.getAttribute("linklistinfo").split("#|#");cnbc_ToolTipHide(getInfo[0])}
function cnbc_ToolTipShow(tip_id,atagId,x,y,info,classname)
{var divList=document.getElementsByTagName('body');var browser=navigator.appName;var node=document.getElementById(tip_id)
if(divList[0]!=null)
{var divNodeW=document.createElement("div");divNodeW.setAttribute('id',tip_id);divList[0].appendChild(divNodeW);var tooltipDiv=document.getElementById(tip_id);tooltipDiv.innerHTML=info;if((tooltipDiv.style.top==''||tooltipDiv.style.top==0)&&(tooltipDiv.style.left==''||tooltipDiv.style.left==0))
{var xVal=cnbc_findPosLeft(atagId)+parseInt(x);var yVal=cnbc_findPosTop(atagId)+parseInt(y);tooltipDiv.style.top=yVal+'px';tooltipDiv.style.left=xVal+'px';if(browser.indexOf("Microsoft")!=-1){divNodeW.setAttribute('className',classname);}
else{divNodeW.setAttribute('class',classname);}}}}
function cnbc_ToolTipHide(id)
{try{tooltipDiv=document.getElementById(id);tooltipDiv.parentNode.removeChild(tooltipDiv);}
catch(e){}}
var cnbcComboQuoteMoveStore=new Array();var delayhide;var cnbcCurrentComboQuote="";function cnbc_comboQuoteMove(id)
{cnbcComboQuoteMoveStore.push({"id":id});}
function cnbc_comboQuoteMoveRun()
{if(cnbcComboQuoteMoveStore.length!=0)
{for(var i in cnbcComboQuoteMoveStore)
{try
{var id=cnbcComboQuoteMoveStore[i].id;comboDiv=document.getElementById(id);if(comboDiv!=null)
{newLoc=comboDiv.cloneNode(true);comboDiv.parentNode.removeChild(comboDiv);var bodyTag=document.getElementsByTagName("body");if(bodyTag[0]!=null)
{var newComboTag=document.createElement("div");var idTag="combo_"+id;newComboTag.setAttribute("id",idTag);bodyTag[0].appendChild(newComboTag);var newComboDiv=document.getElementById("combo_"+id);newComboDiv.appendChild(newLoc);newComboDiv.style.position="absolute";newComboDiv.style.display="none";newComboDiv.style.top="0px";newComboDiv.style.left="0px";newComboDiv.style.zIndex="1156841472";var newComboSpan=document.getElementById(id);newComboSpan.style.display="block";}}}
catch(e){}}}}
function cnbc_spanTipPopShow(tip_id,atagId,x,y)
{if(typeof delayhide!="undefined"){var node=document.getElementById(tip_id);clearTimeout(delayhide)
var oldNode=document.getElementById(cnbcCurrentComboQuote);if((oldNode!=null))
{if(tip_id!=cnbcCurrentComboQuote)
{oldNode.style.display="none";cnbcCurrentComboQuote=tip_id;}
else{node.style.display="block";}}
else{cnbcCurrentComboQuote=tip_id;}
if(node!=null)
{if((node.style.top==''||node.style.top=="0px")&&(node.style.left==''||node.style.left=="0px"))
{var xVal=cnbc_findPosLeft(atagId)+parseInt(x);var yVal=cnbc_findPosTop(atagId)+parseInt(y);node.style.top=yVal+'px';node.style.left=xVal+'px';node.style.display="block";}}}}
function cnbc_spanTipPopTimeHide(tip_id,atagId,x,y){delayhide=setTimeout("cnbc_spanTipPopHide(\'"+tip_id+"\',\'"+atagId+"\',\'"+x+"\',\'"+y+"\')",1200);}
function cnbc_spanTipPopHide(tip_id,atagId,x,y)
{var node=document.getElementById(tip_id);if(node!=null)
{node.style.display="none";}}
function cnbc_displayComments(url,params,comparent,parent,reporturl)
{cnbc_com_showComments=parent;cnbc_com_allcomments=comparent;cnbc_com_repabsUrl=reporturl;cnbc_com_cacheParams=params;if((cnbc_com_comid=="undefined")||(cnbc_com_comid<1)){cnbc_com_comid=1;}
url=url+"?"+params+"&page="+cnbc_com_comid+"&location="+encodeURIComponent(window.location.href);getData_FlashProxy(url,"cnbc_GetCommentsResponseHandler");return false;}
function cnbc_validate_preview_commentsform(thisform,url)
{var count=0;var prvw_errorcode;if(thisform.comments.value==""){prvw_errorcode=5;count++;}
if(thisform.comments.value.length>cnbc_com_charlimit){prvw_errorcode=6;count++;}
var str_newline=thisform.comments.value.replace(/</,"&lt;").replace(/>/,"&gt;");var str_newline_replaced=cnbc_replaceNewlines(str_newline);document.getElementById("prvw_comments").innerHTML=str_newline;document.getElementById("prvw_comments").outerHTML="<pre class=\"comdisplayarea\" id=\"prvw_comments\">"+str_newline_replaced+"</pre>";document.getElementById("prvw_content").value=thisform.comments.value;if(count>0){cnbc_ErrorConfirmMessages('error',prvw_errorcode);cnbc_toggleCommentsForms('preview');return false;}else{document.getElementById("add_comments").disabled=true;cnbc_showLoader('prvw','Loading Comment','prvw_btn');url=url+"?view=json&commentText="+encodeURIComponent(thisform.comments.value)+"&partnerId="+cnbc_com_partnerid+"&authkey="+cnbc_readCookie('cnbcCommentsAuthKeyCookie');getData_FlashProxy(url,"cnbc_FilterResponseHandler");return false;}}
function cnbc_submit_commentsform(thisform,url)
{cnbc_showLoader('edit_submit','Submitting Comment','submit_btn');cnbc_com_cacheParams=cnbc_com_cacheParams+"&page="+cnbc_com_futComid;url=url+"?view=json&contentType="+thisform.contenttype.value+"&contentID="+thisform.contentid.value+"&commentText="+encodeURIComponent(thisform.content.value)+"&partnerId="+cnbc_com_partnerid+"&authkey="+cnbc_readCookie('cnbcCommentsAuthKeyCookie')+"&cachebuster="+encodeURIComponent(cnbc_com_cacheParams)+"&location="+encodeURIComponent(window.location.href);document.getElementById("edit_but").style.display="none";getData_FlashProxy(url,"cnbc_SubmitResponseHandler");return false;}
function cnbc_toggleCommentsForms(state)
{if(state=='preview'){document.getElementById("add_comment").style.display="none";document.getElementById("preview_comment").style.display="block";document.getElementById("add_comments").disabled=true;}else if(state=='add'){document.getElementById("add_comment").style.display="block";document.getElementById("preview_comment").style.display="none";document.getElementById("add_comments").disabled=false;}else{document.getElementById("add_comment").style.display="none";document.getElementById("preview_comment").style.display="none";}}
function cnbc_ErrorConfirmMessages(state,error){try{if(state=='confirm'){document.getElementById("comments_confirm").innerHTML=cnbc_com_errorsMessage[error];document.getElementById("add_message").innerHTML="";document.getElementById("comments_confirm").style.display="block";document.getElementById("add_message").style.display="none";document.getElementById("submit_btn").style.display="block";document.getElementById("submit_btn").disabled=false;}else if(state=='error'){document.getElementById("comments_confirm").innerHTML="";document.getElementById("add_message").innerHTML=cnbc_com_errorsMessage[error];document.getElementById("comments_confirm").style.display="none";document.getElementById("add_message").style.display="block";document.getElementById("submit_btn").style.display="none";document.getElementById("submit_btn").disabled=true;}else if(state=='get_error'){document.getElementById("getcomments_error").setAttribute("class","clr regis_error");document.getElementById("getcomments_error").innerHTML="";document.getElementById("getcomments_error").innerHTML="<br/><br/>"+cnbc_com_errorsMessage[error];document.getElementById(cnbc_com_showComments).style.display="none";document.getElementById("getcomments_error").style.display="block";document.getElementById("submit_btn").style.display="none";document.getElementById("submit_btn").disabled=true;}else if(state=='no_comments'){document.getElementById("getcomments_error").setAttribute("class","clr confirm_error clr");document.getElementById("getcomments_error").innerHTML="";document.getElementById("getcomments_error").innerHTML="<br/><br/>"+cnbc_com_errorsMessage[error];document.getElementById(cnbc_com_showComments).style.display="none";document.getElementById("getcomments_error").style.display="block";document.getElementById("submit_btn").style.display="none";document.getElementById("submit_btn").disabled=true;if(document.getElementById('commentExpirationMessage').style.display=='block'){document.getElementById("getcomments_error").style.display="none";}}else{document.getElementById("comments_confirm").innerHTML="";document.getElementById("add_message").innerHTML="";document.getElementById("comments_confirm").style.display="none";document.getElementById("add_message").style.display="none";}}catch(e){}}
function cnbc_toggleCommentUserState(reg_id,unreg_id,element)
{cnbc_com_user_state=cnbc_watchlist_isRegistered();cnbc_com_opt_in=cnbc_comments_isOpted();if(cnbc_com_user_state&&cnbc_com_opt_in=='true'){document.getElementById(reg_id).style.display="block";document.getElementById(unreg_id).style.display="none";document.getElementById("add_comments").innerHTML="";document.getElementById("add_comments").disabled=false;document.getElementById("submit_btn").disabled=false;}else if(cnbc_com_user_state&&cnbc_com_opt_in!='true'){document.getElementById(unreg_id).style.display="block";document.getElementById(reg_id).style.display="none";document.getElementById("add_info_opt").style.display="block";document.getElementById("add_info").style.display="none";document.getElementById("add_comments").disabled=true;document.getElementById("add_comments").style.backgroundColor="#f0f3f6";document.getElementById("submit_btn").disabled=true;document.getElementById("prvw_btn").disabled=true;}else{document.getElementById(unreg_id).style.display="block";document.getElementById(reg_id).style.display="none";document.getElementById("add_info_opt").style.display="none";document.getElementById("add_info").style.display="block";document.getElementById("add_comments").disabled=true;document.getElementById("add_comments").style.backgroundColor="#f0f3f6";document.getElementById("submit_btn").disabled=true;document.getElementById("prvw_btn").disabled=true;}}
function cnbc_comments_isOpted()
{return cnbc_readCookie(cnbc_com_optin_cookie);}
function cnbc_displayCommentsUsername(addtext,id,display)
{try{var user_state=cnbc_watchlist_isRegistered();if(user_state){var x=document.getElementById(id);var CookieUser=cnbc_readCookie('SUBSCRIBERINFO3');x.innerHTML=addtext+CookieUser;x.style.display=display;}}catch(e){}}
function getData_FlashProxy(url,callback)
{if((typeof cnbc_flashproxy_init_flag!="undefined")&&cnbc_flashproxy_init_flag)
{var flashProxy=(navigator.appName.indexOf("Microsoft")!=-1)?window["flashQuoteProxy"]:document["flashQuoteProxy"];if(flashProxy!=null)
{try
{flashProxy.callGetData(url,callback);}
catch(e){}}}
else
{var key=cnbc_flashproxy_data_reqqueue.length;cnbc_flashproxy_data_reqqueue[key]=new Array();cnbc_flashproxy_data_reqqueue[key]['URL']=url;cnbc_flashproxy_data_reqqueue[key]['CALLBACK']=callback;}}
function getXML(xmlData)
{var xmlDoc=null;var browser=navigator.appName;try
{if(browser.indexOf('Microsoft')!=-1){xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async="false";xmlDoc.loadXML(xmlData);}else{var parser=new DOMParser();xmlDoc=parser.parseFromString(xmlData,"text/xml");}}
catch(e)
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);}
return xmlDoc;}
function cnbc_GetCommentsResponseHandler(data){if(data!=null&&data!="null"&&data!=''){var results=getXML(data.replace(/&/g,"&amp;").replace(/u0022/g,"\"").replace(/u0027/g,"\'").replace(/u000a/g,"&lt;br/&gt;"));if(results==null){errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);return;}
var errorcode,totalcomments,commentsResults;errorcode=results.getElementsByTagName("error-code")[0].childNodes[0].nodeValue;if(errorcode==0){try{commentsResults=results.getElementsByTagName("comments")[0];cnbc_com_totalcount=commentsResults.getAttribute("total");cnbc_com_futComid=Math.ceil(Number(Number(cnbc_com_totalcount)+1)/Number(cnbc_com_pagesize));cnbc_com_charlimit=commentsResults.getAttribute("commentTextLength");cnbc_charcount_init();totalcomments=commentsResults.getElementsByTagName("user-comment").length;if(totalcomments>0){if(cnbc_com_totalcount==1){document.getElementById("totalComments").innerHTML="1 Comment";}else{document.getElementById("totalComments").innerHTML=cnbc_com_totalcount+" Comments Total";}
document.getElementById(cnbc_com_showComments).style.display="block";document.getElementById("getcomments_error").style.display="none";for(var i=0;i<totalcomments;i++){var current_comments,allCommentsDiv,comDiv,userDiv,speciallUImg,speciallUImgLink,comUserName,comUserLink,comUserText,comJobTitle,comJobText,comDate,comDateText,comComments,comCommentsText,comReport,comReportLink,comReportText,comDivider,comDividerText,methcall;current_comments=commentsResults.getElementsByTagName("user-comment")[i];comDiv="<div class=\"com\">";userDiv="<div class=\"clr hdr\"><table class=\"tbl\"><tbody><tr>";if(current_comments.getElementsByTagName("specialUser")[0]!=null){if(current_comments.getElementsByTagName("imageUrl")[0]!=null){speciallUImg="<img class=\"hdr\" border=\"0\" src=\""+current_comments.getElementsByTagName("imageUrl")[0].childNodes[0].nodeValue+"\" />";if(current_comments.getElementsByTagName("profileUrl")[0]!=null){speciallUImgLink="<a class=\"hdr\" href=\""+current_comments.getElementsByTagName("profileUrl")[0].childNodes[0].nodeValue+" \">";speciallUImgLink+=speciallUImg+"</a>";userDiv+="<td>"+speciallUImgLink+"</td>";}else{userDiv+="<td>"+speciallUImg+"</td>";}}}
userDiv+="<td>";comUserName="<span class=\"cfont cstrong\">";if(current_comments.getElementsByTagName("specialUser")[0]!=null){if(current_comments.getElementsByTagName("profileUrl")[0]!=null){comUserLink="<a href=\""+current_comments.getElementsByTagName("profileUrl")[0].childNodes[0].nodeValue+" \">";comUserText=current_comments.getElementsByTagName("userName")[0].childNodes[0].nodeValue;comUserLink+=comUserText+"</a>";comUserName+=comUserLink+"</span>";userDiv+=comUserName;}else{comUserText=current_comments.getElementsByTagName("userName")[0].childNodes[0].nodeValue;comUserName+=comUserText+"</span>";userDiv+=comUserName;}}else{comUserText=current_comments.getElementsByTagName("userName")[0].childNodes[0].nodeValue;comUserName+=comUserText+"</span>";userDiv+=comUserName;}
if(current_comments.getElementsByTagName("specialUser")[0]!=null){if(current_comments.getElementsByTagName("title")[0]!=null){comJobTitle="<span class=\"cfont cstrong\">";comJobText=" | "+current_comments.getElementsByTagName("title")[0].childNodes[0].nodeValue;comJobTitle+=comJobText+"</span>";userDiv+=comJobTitle;}}
comDate="<span class=\"cfont\">";if(current_comments.getElementsByTagName("createDate")[0]!=null){comDateText=" | "+current_comments.getElementsByTagName("createDate")[0].childNodes[0].nodeValue.replace(/ /g,'&nbsp;')+" ET";comDate+=comDateText;userDiv+=comDate;}
userDiv+="</td></tr></tbody></table></div>";comComments="<div class=\"clr bdy\">";if(current_comments.getElementsByTagName("commentText")[0]!=null){comCommentsText=current_comments.getElementsByTagName("commentText")[0].childNodes[0].nodeValue;comCommentsText=comCommentsText.replace(/&lt;/g,"<").replace(/&gt;/g,">");comComments+=comCommentsText;}
comComments+="</div>";if(current_comments.getElementsByTagName("specialUser")[0]==null){comReport="<div class=\"fR clr rep\" id=\"repabs_"+current_comments.getElementsByTagName("commentID")[0].childNodes[0].nodeValue+"\">";if(cnbc_com_user_state&&cnbc_com_opt_in=='true'){methcall="cnbc_reportabuse('"+cnbc_com_repabsUrl+"','"+current_comments.getElementsByTagName("commentID")[0].childNodes[0].nodeValue+"','repabs_"+current_comments.getElementsByTagName("commentID")[0].childNodes[0].nodeValue+"'); return false;";}else{methcall="cnbc_gotomodURL('"+cnbc_com_reportRedirect+"','?commentsRedirectUrl=url');return false;";}
comReportLink="<a href=\"#\" id=\"repabslink_"+current_comments.getElementsByTagName("commentID")[0].childNodes[0].nodeValue+"\" onclick=\""+methcall+"\">";comReportText="<span class='chevron'> Report Abuse </span>";comReportLink+=comReportText+"</a>";comReport+=comReportLink+"</div>";}else{comReport="<div class=\"fR clr rep\">&#160;</div>";}
comDiv+=userDiv+comComments;comDiv+=comReport;comDivider="<div class=\"clr w100p cnDtLn bgX lh1\">&#160;</div>";comDiv+=comDivider+"</div>";allCommentsDiv=document.getElementById(cnbc_com_allcomments);allCommentsDiv.innerHTML+=comDiv;}
cnbc_GetPagination_Clientside('comPagination');}else{errorcode=7;cnbc_ErrorConfirmMessages('no_comments',errorcode);}}catch(e){errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);return;}}else{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);}}}
function cnbc_GetPagination_Clientside(pagid){cnbc_com_TotalPageCount=Math.ceil(cnbc_com_totalcount/cnbc_com_LinksPerPage);cnbc_com_pagBaseUrl="/id/"+cnbc_com_currpage;if(cnbc_com_page!=''){cnbc_com_pagBaseUrl+="/page/"+cnbc_com_page;}
if(cnbc_com_pgn!=''){cnbc_com_pagBaseUrl+="/pgn/"+cnbc_com_pgn;}
if((cnbc_com_CurrentPageNum=="undefined")||(cnbc_com_CurrentPageNum<1)){cnbc_com_CurrentPageNum=1;}else{cnbc_com_CurrentPageNum=cnbc_com_comid;}
document.getElementById(pagid).style.display="none";if(cnbc_com_TotalPageCount>1)
{if(cnbc_com_HidePageDisplay!='true')
{var start=1;var end=Number(cnbc_com_LinksDisplay);for(var i=1;i<=cnbc_com_TotalPageCount;i++)
{cnbc_com_PagLinks="";if(Number(cnbc_com_CurrentPageNum)<cnbc_com_LinksDisplay||cnbc_com_TotalPageCount<=cnbc_com_LinksDisplay){if(cnbc_com_TotalPageCount<=cnbc_com_LinksDisplay){var newcount=cnbc_com_TotalPageCount;}else{var newcount=cnbc_com_LinksDisplay;}
cnbc_com_PagLinks=cnbc_createLinkPages(newcount,start,cnbc_com_TotalPageCount,cnbc_com_CurrentPageNum,cnbc_com_pagBaseUrl);break;}
else if((Number(cnbc_com_CurrentPageNum)>(cnbc_com_TotalPageCount-(cnbc_com_LinksDisplay-1)))&&(Number(cnbc_com_CurrentPageNum)<=cnbc_com_TotalPageCount))
{var newstart=cnbc_com_TotalPageCount-(cnbc_com_LinksDisplay-1);cnbc_com_PagLinks=cnbc_createLinkPages(cnbc_com_LinksDisplay,newstart,cnbc_com_TotalPageCount,cnbc_com_CurrentPageNum,cnbc_com_pagBaseUrl);break;}
else if(start<=Number(cnbc_com_CurrentPageNum)<=end)
{var newstart=Number(cnbc_com_CurrentPageNum)-1;cnbc_com_PagLinks=cnbc_createLinkPages(cnbc_com_LinksDisplay,newstart,cnbc_com_TotalPageCount,cnbc_com_CurrentPageNum,cnbc_com_pagBaseUrl);break;}
else
{start=Number(start)+Number(cnbc_com_LinksDisplay);end=Number(end)+Number(cnbc_com_LinksDisplay);}}}
var pglinks;if(cnbc_com_CurrentPageNum!=1){pglinks=document.getElementById("leftPagCol").getElementsByTagName('a');pglinks[0].setAttribute("href",cnbc_com_pagBaseUrl+"/comid/1#comments_top");pglinks[1].setAttribute("href",cnbc_com_pagBaseUrl+"/comid/"+Number(cnbc_com_CurrentPageNum-1)+"#comments_top");document.getElementById("leftPagCol").style.display="block";}
if(cnbc_com_PagLinks!=undefined){document.getElementById("centerPagCol").innerHTML=cnbc_com_PagLinks;if(cnbc_com_TotalPageCount>=cnbc_com_LinksDisplay){document.getElementById("centerPagCol").innerHTML+=" of <a href=\""+cnbc_com_pagBaseUrl+"/comid/"+cnbc_com_TotalPageCount+"#comments_top\">"+cnbc_com_TotalPageCount+"</a>";}}
if(cnbc_com_CurrentPageNum!=cnbc_com_TotalPageCount){pglinks=document.getElementById("rightPagCol").getElementsByTagName('a');pglinks[0].setAttribute("href",cnbc_com_pagBaseUrl+"/comid/"+(Number(cnbc_com_CurrentPageNum)+Number(1))+"#comments_top");pglinks[1].setAttribute("href",cnbc_com_pagBaseUrl+"/comid/"+cnbc_com_TotalPageCount+"#comments_top");document.getElementById("rightPagCol").style.display="block";}
document.getElementById(pagid).style.display="block";}}
function cnbc_createLinkPages(count,page,total,current,url)
{var Links="";for(var i=1;i<=count;i++)
{if(page==current){if(page==total){if(i>1){Links+=cnbc_com_Separator;}
Links+="<span class=\"cnorm\">"+page+"</span>";}else{if(i>1){Links+=cnbc_com_Separator;}
Links+="<span class=\"cnorm\">"+page+"</span>";page++;}}else{if(page==total){if(i>1){Links+=cnbc_com_Separator;}
Links+="<a href=\""+url+"/comid/"+page+"#comments_top\">"+page+"</a>";}else{if(i>1){Links+=cnbc_com_Separator;}
Links+="<a href=\""+url+"/comid/"+page+"#comments_top\">"+page+"</a>";page++;}}}
return Links;}
function cnbc_updateAuthKey(componentid)
{var pagReq;if(window.XMLHttpRequest){pagReq=new XMLHttpRequest();if(pagReq.overrideMimeType){pagReq.overrideMimeType('text/html');}}else if(window.ActiveXObject){try{pagReq=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{pagReq=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e)
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);return;}}}
if(!pagReq){return false;}
pagReq.onreadystatechange=function()
{if(pagReq.readyState==4)
{if(pagReq.status==200)
{cnbc_com_authTimeout=setTimeout("cnbc_updateAuthKey("+componentid+")",cnbc_com_authInterval);}}}
var url="/id/"+componentid;pagReq.open("GET",url,true);pagReq.send(null);}
function cnbc_FilterResponseHandler(data)
{cnbc_hideLoader();if(typeof data=='undefined'||data==null||data==''||data=='null')
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);cnbc_toggleCommentsForms('add');return;}
var string=data;var filter_errorcode;var results;string=string.replace('cnbc-global-comments-response',"cnbc_global_comments_response");string=string.replace('error-code',"error_code");try{results=eval('('+string+')');}
catch(e)
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);}
if(results.cnbc_global_comments_response.error_code)
{filter_errorcode=results.cnbc_global_comments_response.error_code;}
if(filter_errorcode==0){cnbc_ErrorConfirmMessages('confirm',filter_errorcode);}
else
{cnbc_ErrorConfirmMessages('error',filter_errorcode);}
cnbc_toggleCommentsForms('preview');return;}
function cnbc_SubmitResponseHandler(data)
{cnbc_hideLoader();if(typeof data=='undefined'||data==null||data==''||data=='null')
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);cnbc_toggleCommentsForms('add');document.getElementById("edit_but").style.display="inline";return;}
var string=data;var errorcode;var results;string=string.replace('cnbc-global-comments-response',"cnbc_global_comments_response");string=string.replace('error-code',"error_code");try{results=eval('('+string+')');}
catch(e)
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);cnbc_toggleCommentsForms('add');document.getElementById("edit_but").style.display="inline";return;}
if(results.cnbc_global_comments_response.error_code)
{errorcode=results.cnbc_global_comments_response.error_code;}
if(errorcode==0){cnbc_toggleCommentsForms();document.getElementById("com_submit_success").style.display="block";}else{cnbc_ErrorConfirmMessages('error',errorcode);cnbc_toggleCommentsForms('add');document.getElementById("edit_but").style.display="inline";}
cnbc_reloadOnSubmit();return;}
function cnbc_reloadOnSubmit()
{var newUrl;var currentLocationRef=window.location.href.replace("#comments_top","");if(currentLocationRef.indexOf("comid/")!=-1){var params=currentLocationRef.split("comid/");newUrl=params[0]+"comid/"+cnbc_com_futComid;}else{newUrl=currentLocationRef+"/comid/"+cnbc_com_futComid;}
if(cnbc_com_comid==cnbc_com_futComid){document.getElementById('add_comments').value="";document.getElementById('prvw_comments').innerHTML="";newUrl=newUrl+"/cache/"+Math.round(Math.random()*1000,1)+"#comments_top";window.location.assign(newUrl);}else{newUrl=newUrl+"#comments_top";window.location.assign(newUrl);}}
function cnbc_reportabuse(url,commentid,id)
{cnbc_showLoader("repabs_"+commentid,'Sending',"repabslink_"+commentid);url=url+"?commentID="+commentid+"&view=json&partnerId="+cnbc_com_partnerid+"&authkey="+cnbc_readCookie('cnbcCommentsAuthKeyCookie');cnbc_com_report_curid=id;getData_FlashProxy(url,"cnbc_ReportResponseHandler");return false;}
function cnbc_ReportResponseHandler(data)
{cnbc_hideLoader();if(typeof data=='undefined'||data==null||data==''||data=='null')
{cnbc_showReportAbuse(cnbc_com_report_curid,cnbc_com_errorsMessage[1]);return;}
var string=data;var errorcode;var results;string=string.replace(/cnbc-global-comments-response/g,"cnbc_global_comments_response");string=string.replace(/error-code/g,"error_code");try{results=eval('('+string+')');}
catch(e)
{errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);return;}
if(results.cnbc_global_comments_response.error_code)
{errorcode=results.cnbc_global_comments_response.error_code;if(errorcode==0)
{cnbc_showReportAbuse(cnbc_com_report_curid,cnbc_com_rep_confirm);}
else
{cnbc_showReportAbuse(cnbc_com_report_curid,cnbc_com_errorsMessage[errorcode]);}}
return;}
function cnbc_RemoveChild()
{cnbc_ToolTipHide("repabs_message");}
function cnbc_showReportAbuse(id,message)
{if(cnbc_com_report_curid!=null){cnbc_RemoveChild();}
var repabs=document.getElementById(id);var message_wrapper="<div class=\"fL padB cFont cstrong\">REPORT ABUSE</div>";message_wrapper+="<div class=\"fR padB\"><a href=\"#\" onclick=\"cnbc_RemoveChild(); return false;\">";message_wrapper+="<img src=\"http://media.cnbc.com/i/CNBC/CNBC_Images/comments/close_reportabuse_btn.png\" border=\"0\" /></a></div>";message_wrapper+="<div class=\"clr w100p cnDtLn bgX lh1\" style=\"height:5px;line-height:5px;\"> </div>"
message_wrapper+="<div class=\"fL confirm_error clr padT10\">"+message;cnbc_ToolTipShow("repabs_message",repabs,cnbc_com_reportLeftPos,cnbc_com_reportTopPos,message_wrapper,"repabs_popup");}
function cnbc_showLoader(id,title,hide)
{if(cnbc_com_sloadInProgress=='false'){var loadArea=document.getElementById(id);var loadwrapper="<div class=\"clr\" id=\"loader\"><div class=\"fL padR\">";loadwrapper+="<img src=\"http://media.cnbc.com/i/CNBC/CNBC_Images/comments/loaderImage.gif\"/></div>";loadwrapper+="<div class=\"fL cFont cf10\">"+title+"</div></div>";var hide_obj=document.getElementById(hide);if(hide_obj!=null)
{document.getElementById(hide).style.display="none";}
loadArea.innerHTML+=loadwrapper;cnbc_com_shidden=hide;cnbc_com_sloadArea=id;cnbc_com_sloadInProgress='true';}}
function cnbc_hideLoader()
{if(cnbc_com_sloadInProgress=='true')
{var loader=document.getElementById('loader');loader.parentNode.removeChild(loader);var shidden_obj=document.getElementById(cnbc_com_shidden);if(shidden_obj!=null)
{shidden_obj.style.display="block";cnbc_com_sloadInProgress='false';}}}
function cnbc_updateCharCount(currcount,displayid)
{var count=cnbc_com_charlimit-currcount;var countDiv=document.getElementById(displayid);if(countDiv!=null)
{if(count<=-10000){count="--";}
countDiv.innerHTML=count;}}
function cnbc_delete_all_login_cookies(path)
{var myCookies=new Array("c_sna","c_ipb_pass_hash","c_ipb_session_id","c_ipb_member_id","snas","c_ws","SUBSCRIBERINFO3","SUBSCRIBERINFO2","SUBSCRIBERINFO","CASTOKEN","c_enc");for(var i=0;i<myCookies.length;i++)
{var name=unescape(myCookies[i]);cnbc_eraseCookie(name,path,"cnbc.com");}
window.location.reload();}
function cnbc_isLoggedIn(url)
{var loggedIn=false;var SessionCookie=cnbc_readCookie("SUBSCRIBERINFO");if(SessionCookie!=null&&SessionCookie!=''&&url!='')
{getData_FlashProxy(url,"cnbc_GetStaleResponseHandler");loggedIn=true;}
return loggedIn;}
function cnbc_GetStaleResponseHandler(data)
{if(data!=null&&data!='null'&&data!='')
{if(data.indexOf("<cnbc-global-login-response>1</cnbc-global-login-response>")!=-1){cnbc_delete_all_login_cookies("/");}}else{cnbc_delete_all_login_cookies("/");}
var url=(typeof cnbc_validUserCheckURL!='undefined')?cnbc_validUserCheckURL:"https://login.cnbc.com/cas/checkCasTicket?";var time=(typeof cnbc_validUserCheckTimeout!='undefined')?cnbc_validUserCheckTimeout:(3*60*60*1000);setTimeout("cnbc_isLoggedIn('"+url+"')",time);}
function cnbc_charcount_init()
{var charcount_title_obj=document.getElementById('charcount_title');var charcount_obj=document.getElementById('charcount');if((charcount_title_obj!=null)&&(charcount_obj!=null))
{charcount_title_obj.innerHTML="Your Comments (Up to "+cnbc_com_charlimit+" characters):";charcount_obj.innerHTML=cnbc_com_charlimit;}}
function cnbc_replaceNewlines(str)
{var str_split=str.split("\n");var str_concat='';for(i=0;i<str_split.length;i++){str_concat+=str_split[i]+'<br/>';}
return str_concat;}
function onloadAutoSuggest(){if(document.getElementById("cnbc_quote_box_header")!=null)
{document.cnbc_quote_box_header.setAttribute("action",cnbc_QuotePageURL);document.cnbc_quote_box_header.setAttribute("method","POST");document.cnbc_quote_box_header.setAttribute("autocomplete","off");try{symlookupsettings=new SymbolLookupSettings(cnbc_symmaxresults,",",cnbc_symSymbolCount,cnbc_symservice_url);var link_event="cnbc_radiogroup_submitSlash_form_with_symbol(document.getElementById(\"cnbc_quote_box_header\"),\"##param##\");";symlookupsettings.setLinkEvent(link_event);var inputNode=document.getElementById("cnbc_hdqbox");var containerNode=document.getElementById("symDropDownMenu");containerNode.style.display="none";containerNode.style.top=cnbc_symDropMenuTop;containerNode.style.left=cnbc_symDropMenuLeft;var symfooterDiv="<div id=\"dd_footer\" class=\"fL\">";symfooterDiv+="<div class=\"resultLink\"><span><a href=\"javascript: gotoSymLookupPage(\'"+cnbc_symlookup_page_url+"\', \'##prefix##\');\" class=\"cFont cf12\">&raquo;&#160;View All Results for &quot;##prefix##&quot;</a></span></div>";symfooterDiv+="<div class=\"hint\"><div class=\"fL padL10\" style=\"height:18px;line-height:14px;\"><img class=\"fL mT2 mR5\" hspace=\"0\" border=\"0\" align=\"left\" vspace=\"0\" width=\"30\" src=\"http://msnbcmedia.msn.com/i/CNBC/Sections/News_And_Analysis/__Story_Inserts/graphics/__PILLS_ALLEN/news_bug_new.gif\"/>";symfooterDiv+="<div class=\"fL\" style=\"display:inline;\">Enter multiple symbols separated by commas</div></div>";symfooterDiv+="<div class=\"fL padL10 padB\" style=\"height:18px;line-height:14px;\"><img class=\"fL mT2 mR5\" hspace=\"0\" border=\"0\" align=\"left\" vspace=\"0\" width=\"30\" src=\"http://msnbcmedia.msn.com/i/CNBC/Sections/News_And_Analysis/__Story_Inserts/graphics/__PILLS_ALLEN/news_bug_new.gif\"/>";symfooterDiv+="<div class=\"fL\" style=\"display:inline;\">London Quotes now available!</div></div></div>";symfooterDiv+="</div>";symlookupsettings.setFooterContent(symfooterDiv);symlookupSuggester=new SymLookupAutoSuggest(inputNode,containerNode,symlookupsettings);var uicontrols={"menu":"symDropDownMenu","menutext":"Loading...","showLoader":cnbc_showLoader};var views={"cnbc":new CNBCSymbolLookupView(symlookupSuggester,uicontrols)};var symLookupController=new BaseSymbolLookupController(new SymbolLookupModel(views),new FlashProxyRequestor("flashQuoteProxy","json"),new SymbolLookupParser());symlookupSuggester.setController(symLookupController);initAutoSuggest();}catch(e){}}}
function initAutoSuggest()
{var current_prefix=document.getElementById('cnbc_hdqbox').value;if(current_prefix!="Symbol / Company")
{symlookupsettings.setSavedPrefix(current_prefix);symlookupSuggester.initShowSymSuggest();}}
function gotoSymLookupPage(url,symbol)
{if(url.indexOf('?')!=-1){location.href=url+"&q="+escape(symbol);}else{location.href=url+"?q="+escape(symbol);}}
function cnbc_PageReloadInterval(){var currentTime=new Date().getTime();var elapsedIdleTime=(currentTime-cnbc_lastIdleTime)/1000;var refresh=true;var diagnosticKey=new String();if(CNBC_PWL_IDLE_ENABLED&&CNBC_PWL_ACTIVE_FLAG)
{diagnosticKey="PWL Enabled and in Edit Mode - Reload";if(elapsedIdleTime<cnbc_pwl_max_idleTime)
{refresh=false;}}
else if(CNBC_IDLE_ENABLED==true)
{diagnosticKey="CNBC Site - Reload";if(elapsedIdleTime<cnbc_max_idleTime)
{refresh=false;}}
if(refresh==true)
{window.location.reload();}
else
{if(cnbc_getURLParam('debugidletime')!='')
{var cnbc_reloadDebugNode=document.getElementById('cnbc_pagereloaddebug_div');if(cnbc_reloadDebugNode!='undefined'){cnbc_reloadDebugNode.style.display="block";cnbc_reloadDebugNode.innerHTML=diagnosticKey+" CNBC_IDLE_ENABLED("+CNBC_IDLE_ENABLED+")"+" <br/> CNBC_PWL_IDLE_ENABLED("+CNBC_PWL_IDLE_ENABLED+")"+" <br/> CNBC_MAX_IDLE_TIME("+cnbc_max_idleTime+")"+" <br/> CNBC_PWL_MAX_IDLE_TIME("+cnbc_pwl_max_idleTime+")"+" <br/> *******ELAPSED IDLE TIME:"+Number(elapsedIdleTime/60)+" Minutes"+" <br/> *******ELAPSED IDLE TIME:"+elapsedIdleTime+" Seconds <br/>";}}}}
function cnbc_ActivateAllEventListeners(method,obj){var object=obj||document;if(window.addEventListener){object.addEventListener('mousemove',method,false);object.addEventListener('mousedown',method,false);object.addEventListener('click',method,false);object.addEventListener('keyup',method,false);object.addEventListener('keydown',method,false);object.addEventListener('keypress',method,false);object.addEventListener('DOMMouseScroll',method,false)}else{object.attachEvent('onmousemove',method);object.attachEvent('onmousedown',method);object.attachEvent('onclick',method);object.attachEvent('keyup',method);object.attachEvent('keydown',method);object.attachEvent('keypress',method);object.onmousewheel=method;}}
function cnbc_disableAllEventListeners(method,obj){var object=obj||document;if(window.addEventListener){object.removeEventListener('mousemove',method,false);object.removeEventListener('mousedown',method,false);object.removeEventListener('click',method,false);object.removeEventListener('keyup',method,false);object.removeEventListener('keydown',method,false);object.removeEventListener('keypress',method,false);object.removeEventListener('DOMMouseScroll',method,false)}else{object.detachEvent('onmousemove',method);object.detachEvent('onmousedown',method);object.detachEvent('onclick',method);object.detachEvent('keyup',method);object.detachEvent('keydown',method);object.detachEvent('keypress',method);object.onmousewheel=null;}}
function cnbc_resetCounter(evt)
{cnbc_lastIdleTime=new Date().getTime();if(cnbc_getURLParam('debugidletime')!='')
{var cnbc_reloadDebugNode=document.getElementById('cnbc_pagereloaddebug_div');if(cnbc_reloadDebugNode!='undefined'){cnbc_reloadDebugNode.style.display="block";cnbc_reloadDebugNode.innerHTML=" Last IdleTime Set - "+new Date(cnbc_lastIdleTime).toString();}}}
function cnbc_editSignURL(url)
{var userURL=window.location.href;var checkHash=userURL.indexOf("#");if(checkHash>=0)
{userURL=userURL.split("#");userURL=encodeURIComponent(userURL[0]);}
var finalURL=url+userURL;if(finalURL!="")
{window.location=finalURL;}}
function createFlashProxy()
{try{var fproxy=document.getElementById('flashQuoteProxy');var fp_obj;if(fproxy==null){fp_obj=AC_FL_GetContent('codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0','width','1','height','1','src','http://quote.cnbc.com/quoteproxy','quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','align','middle','id','flashQuoteProxy','bgcolor','#ffffff','name','flashQuoteProxy','allowFullScreen','true','allowScriptAccess','always','movie','http://quote.cnbc.com/quoteproxy');document.write(fp_obj);}}catch(e){}}
function cnbc_video_search_toDateString(gmtTime)
{var month=new Array(12);month[0]="Jan.";month[1]="Feb.";month[2]="Mar.";month[3]="Apr.";month[4]="May";month[5]="Jun.";month[6]="Jul.";month[7]="Aug.";month[8]="Sept.";month[9]="Oct.";month[10]="Nov.";month[11]="Dec.";var weekday=new Array(7);weekday[0]="Sun.";weekday[1]="Mon.";weekday[2]="Tues.";weekday[3]="Wed.";weekday[4]="Thurs.";weekday[5]="Fri.";weekday[6]="Sat.";var dateTime=new Date();dateTime.setTime(gmtTime);var localeString=dateTime.toLocaleString();var date=localeString.slice(0,-11);var tmp_time=localeString.slice(-11);var am_pm=tmp_time.slice(-2);var time=tmp_time.slice(0,-6);return weekday[dateTime.getDay()]+" "+month[dateTime.getMonth()]+" "+dateTime.getDate()+" "+dateTime.getFullYear()+" | "+time+" "+am_pm;}
function getSubDomain(hostname)
{return hostname.substring(0,hostname.indexOf('.'));}
function cnbc_gotoCNBCURLLogout(url,params){window.location=url+'?service=http://www.cnbc.com/';}
function DetectIphone()
{if(uagent.search(deviceIphone)>-1)
return true;else
return false;}
function DetectIpod()
{if(uagent.search(deviceIpod)>-1)
return true;else
return false;}
function DetectIphoneOrIpod()
{if(DetectIphone())
return true;else if(DetectIpod())
return true;else
return false;}
var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;}
else if(dataProp)
return data[i].identity;}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1)return;return parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};function launchRTPlayerExp()
{if(document.cookie.indexOf('RTplayerLaunched=done')==-1)
{window.open('http://www.cnbc.com/id/25338037','cnbc_rt_play','width=350, height=380, status=no, toolbar=no, menubar=no, location=no');document.cookie='RTplayerLaunched=done; expires=Thu, 28 OCT 2010 20:47:11 UTC; path=/';}}
var cnbc_TabComp=function(uniqueNodeID,totalTabNodes)
{this.uniqueNodeID=uniqueNodeID;this.totalTabNodes=totalTabNodes;}
function cnbc_loadTabs(uniqueNodeID,totalTabNodes)
{var readTabCookie=cnbc_readCookie('cnbcTabs'+uniqueNodeID);if(readTabCookie)
{var selectedTabDiv=document.getElementById(readTabCookie);selectedTabDiv.className="cnbc_tabDefault cnbc_tabActive";document.getElementById('tabContent'+readTabCookie).style.display="block";}
else
{cnbc_TabCompArray.push(new cnbc_TabComp(uniqueNodeID,totalTabNodes));cnbc_checkServerTime(uniqueNodeID,totalTabNodes);}}
function cnbc_checkServerTime(uniqueNodeID,totalTabNodes)
{if(cnbc_UTCServerTime>0)
{cnbc_activateTabGroup();}
else
{setTimeout(function(){getData_FlashProxy(cnbc_serverTimeUrl,"cnbc_getServerTimeData")},100);cnbc_activateCurrentTab("1"+uniqueNodeID,uniqueNodeID,totalTabNodes);}}
function cnbc_getServerTimeData(serverdata)
{if(serverdata!=null&&serverdata!="null"&&serverdata!='')
{var string=serverdata;var results;string=string.replace(/cnbc-global-video-response/g,"cnbc_global_video_response");string=string.replace(/error-code/g,"error_code");string=string.replace(/list-items/g,"list_items");try
{results=eval('('+string+')');}
catch(e){}
if(results.cnbc_global_video_response.data.list_items)
{cnbc_UTCServerTime=results.cnbc_global_video_response.data.list_items;cnbc_activateTabGroup();}}}
function cnbc_activateTabGroup()
{for(var j=0;j<cnbc_TabCompArray.length;++j)
{var tabActivated=cnbc_activateTabByTime(cnbc_UTCServerTime,cnbc_TabCompArray[j].uniqueNodeID,cnbc_TabCompArray[j].totalTabNodes)
if(!tabActivated)
{cnbc_activateCurrentTab("1"+cnbc_TabCompArray[j].uniqueNodeID,cnbc_TabCompArray[j].uniqueNodeID,cnbc_TabCompArray[j].totalTabNodes);}}}
function cnbc_activateTabByTime(cnbc_UTCServerTime,uniqueNodeID,totalTabCount)
{var easternTimeOffset=cnbc_checkDaylightSavings()?EDT_TZ_OFFSET:EST_TZ_OFFSET;var currentServerTimeInUtcMsec=parseInt(cnbc_UTCServerTime);var serverTimeInEasternTimeMsec=currentServerTimeInUtcMsec+parseInt(easternTimeOffset*60*60*1000);var serverTimeInEasternTime=new Date(serverTimeInEasternTimeMsec);var serverDayOfWeekInEasternTime=serverTimeInEasternTime.getUTCDay();serverDayOfWeekInEasternTime=cnbc_weekArray[serverDayOfWeekInEasternTime];var serverTimeInEasternTimeValue=(serverTimeInEasternTime.getUTCHours()*60)+serverTimeInEasternTime.getUTCMinutes();for(var i=0;i<cnbc_tabScheduleArray.length;++i)
{if((cnbc_tabScheduleArray[i].tabID).match(uniqueNodeID)!=null)
{if(serverDayOfWeekInEasternTime!=cnbc_tabScheduleArray[i].dayofweek)
continue;var startTimeValue=parseInt(cnbc_tabScheduleArray[i].startHours*60)+parseInt(cnbc_tabScheduleArray[i].startMinutes);var endTimeValue=parseInt(cnbc_tabScheduleArray[i].endHours*60)+parseInt(cnbc_tabScheduleArray[i].endMinutes);if(serverTimeInEasternTimeValue<startTimeValue||serverTimeInEasternTimeValue>endTimeValue)
{continue;}
cnbc_activateCurrentTab(cnbc_tabScheduleArray[i].tabID,uniqueNodeID,totalTabCount);return true;}}
return false;}
function cnbc_tabSchedule(tabID,dayofweek,startHours,startMinutes,endHours,endMinutes)
{cnbc_tabScheduleArray.push(new cnbc_TabTime(tabID,dayofweek,startHours,startMinutes,endHours,endMinutes));}
function cnbc_checkDaylightSavings()
{var now=new Date();var winter=new Date(now.getYear(),01,01);var summer=new Date(now.getYear(),07,01);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var nowOffset=now.getTimezoneOffset();if((nowOffset==summerOffset)&&(nowOffset!=winterOffset))
{return true;}
else
{return false;}}
function cnbc_activateCurrentTab(selectedTabID,uniqueNodeID,totalTabCount)
{var selectedTabIndex=selectedTabID.split(uniqueNodeID,1);document.getElementById(selectedTabID).className="cnbc_tabDefault cnbc_tabActive";document.getElementById('tabContent'+selectedTabID).style.display="block";for(var i=1;i<=totalTabCount;++i)
{if(i!=selectedTabIndex)
{var tabDiv=document.getElementById(i+uniqueNodeID);tabDiv.className="cnbc_tabDefault";document.getElementById('tabContent'+i+uniqueNodeID).style.display="none";}}}
function cnbc_activateTabByClick(selectedTabID,uniqueNodeID,totalTabCount)
{cnbc_activateCurrentTab(selectedTabID,uniqueNodeID,totalTabCount);cnbc_createCookie("cnbcTabs"+uniqueNodeID,selectedTabID,"");}
function cnbc_commentCountMap(){this.cnbc_commentCountMap_keyArray=new Array();this.cnbc_commentCountMap_valArray=new Array();this.cnbc_commentCountMap_classArray=new Array();this.cnbc_commentCountMap_put=cnbc_commentCountMap_put;this.cnbc_commentCountMap_get=cnbc_commentCountMap_get;this.cnbc_commentCountMap_findIt=cnbc_commentCountMap_findIt;this.cnbc_commentCountMap_getClassNames=cnbc_commentCountMap_getClassNames;}
function cnbc_commentCountMap_put(key,val,className){if(key!=null&&key!=''&&key.indexOf('http')==-1&&key.indexOf('video')==-1){var elementIndex=this.cnbc_commentCountMap_findIt(key);if(elementIndex==(-1)){this.cnbc_commentCountMap_keyArray.push(key);var linklistIDs=new Array();linklistIDs[0]=val;this.cnbc_commentCountMap_valArray.push(linklistIDs);var classNames=new Array();classNames[0]=className;this.cnbc_commentCountMap_classArray.push(classNames);}else{var len=this.cnbc_commentCountMap_valArray[elementIndex].length;this.cnbc_commentCountMap_valArray[elementIndex][len]=val;this.cnbc_commentCountMap_classArray[elementIndex][len]=className;}}}
function cnbc_commentCountMap_get(key){var result=null;var elementIndex=this.cnbc_commentCountMap_findIt(key);if(elementIndex!=(-1)){result=this.cnbc_commentCountMap_valArray[elementIndex];}
return result;}
function cnbc_commentCountMap_getClassNames(key){var result=null;var elementIndex=this.cnbc_commentCountMap_findIt(key);if(elementIndex!=(-1)){result=this.cnbc_commentCountMap_classArray[elementIndex];}
return result;}
function cnbc_commentCountMap_findIt(key){var result=(-1);for(var i=0;i<this.cnbc_commentCountMap_keyArray.length;i++){if(this.cnbc_commentCountMap_keyArray[i]==key){result=i;break;}}
return result;}
function cnbc_getCommentsCount(url){if(cnbc_showcommentcount){var contentIDString='';var contentIDs=cnbc_commentCountMapObj.cnbc_commentCountMap_keyArray;var requestloopcount=(contentIDs.length/cnbc_commentsCountBatch);for(var i=0;i<requestloopcount;i++){for(var j=0;j<cnbc_commentsCountBatch;j++){var currentindex=(i*cnbc_commentsCountBatch)+j;if(currentindex<contentIDs.length){contentIDString+=contentIDs[currentindex]+"|";}else{break;}}
var currentlocation=window.location.href;if(currentlocation.indexOf("/id")==-1){currentlocation+="id/";}
var newurl=url+"?location="+encodeURIComponent(currentlocation)+"&contentIDs="+encodeURIComponent(contentIDString);getData_FlashProxy(newurl,"cnbc_CountCommentsResponseHandler");contentIDString='';}}}
function cnbc_CountCommentsResponseHandler(data){if(typeof data=='undefined'||data==null||data==''||data=='null'){errorcode=1;return;}
var string=data;var errorcode;var results;string=string.replace('cnbc-global-comments-response',"cnbc_global_comments_response");string=string.replace('error-code',"error_code");try{results=eval('('+string+')');}catch(e){errorcode=1;cnbc_ErrorConfirmMessages('get_error',errorcode);return;}
if(results.cnbc_global_comments_response.error_code){errorcode=results.cnbc_global_comments_response.error_code;}
var comment_count_array=results.cnbc_global_comments_response.commentcount;if(comment_count_array.length==undefined){comment_count_array=new Array();comment_count_array[0]=results.cnbc_global_comments_response.commentcount;}
for(var responsecount=0;responsecount<comment_count_array.length;responsecount++){var contentID=comment_count_array[responsecount].contentID;var totalcommentcount=comment_count_array[responsecount].total;var hrefurl='';var linklistIDs=cnbc_commentCountMapObj.cnbc_commentCountMap_get(contentID);var classNames=cnbc_commentCountMapObj.cnbc_commentCountMap_getClassNames(contentID);if(linklistIDs.length==undefined){linklistIDs=new Array();linklistIDs[0]=cnbc_commentCountMapObj.cnbc_commentCountMap_get(contentID);classNames=new Array();classNames[0]=cnbc_commentCountMapObj.cnbc_commentCountMap_getClassNames(contentID);}
for(var i=0;i<linklistIDs.length;i++){if(totalcommentcount>0){var span_tag=contentID+"_"+linklistIDs[i];if(classNames[i]=='cnbcCommentsIcon'){hrefurl="<a alt='"+totalcommentcount+" comments' href='http://"+location.host+"/id/"+contentID+"#comments_top"+"' class='"+classNames[i]+"'>"+totalcommentcount+"</a>";}else{if(classNames[i]=='cnbcCommentsEBlog'){hrefurl="<a style='color:#980606 !important;font-size: 11px !important; font-weight: bold;float:right;' alt='"+totalcommentcount+" comments' href='http://"+location.host+"/id/"+contentID+"#comments_top"+"' class='"+classNames[i]+"'>"+totalcommentcount+" Comments</a>";}else{hrefurl="<a alt='"+totalcommentcount+" comments' onmouseover='cnbc_commentsCountPopup(this,"+totalcommentcount+")' onmouseout='cnbc_commentsCountPopupHide(this)' href='http://"+location.host+"/id/"+contentID+"#comments_top"+"' class='"+classNames[i]+"'>("+totalcommentcount+")</a>";}}
document.getElementById(span_tag).innerHTML=hrefurl;document.getElementById(span_tag).style.display="block";}}}}
function cnbc_commentsCountPopup(id,commentsCount){var xpos=3;var ypos=-21;var popupDivID="commentsCountPopUpDiv";var popupClass="commentsCountPopUp";var displayCommentsTxt=commentsCount+" Comments";cnbc_ToolTipShow(popupDivID,id,xpos,ypos,displayCommentsTxt,popupClass);}
function cnbc_commentsCountPopupHide(id){cnbc_ToolTipHide("commentsCountPopUpDiv");}
function cnbc_checkServerTimeCommentExpiration(){try{var activeduration=document.getElementById('cnbc_activeduration').value;if(null!=activeduration&&activeduration!=''&&null!=document.getElementById('cnbc_story_publisheddate')){getData_FlashProxy(cnbc_serverTimeUrl,"cnbc_getServerTimeCommentExpiration");}else{document.getElementById('commentExpirationMessage').style.display='none';document.getElementById('add_comment').style.display='block';}}catch(ex){}}
function cnbc_getServerTimeCommentExpiration(serverdata){var cnbc_story_publisheddate=document.getElementById('cnbc_story_publisheddate').value;cnbc_story_publisheddate-=621355968000000000;cnbc_story_publisheddate/=10000;var serverTime='';if(serverdata!=null&&serverdata!="null"&&serverdata!=''){var string=serverdata;var results;string=string.replace(/cnbc-global-video-response/g,"cnbc_global_video_response");string=string.replace(/error-code/g,"error_code");string=string.replace(/list-items/g,"list_items");try{results=eval('('+string+')');}catch(e){}
if(results.cnbc_global_video_response.data.list_items){serverTime=results.cnbc_global_video_response.data.list_items;}}else{serverTime=cnbc_story_publisheddate;}
var timedifference=serverTime-cnbc_story_publisheddate;var activeduration=document.getElementById('cnbc_activeduration').value;activeduration=activeduration*24*60*60*1000;if((null!=activeduration)&&(activeduration!=""||activeduration==0)&&(timedifference>activeduration)){document.getElementById('add_comment').style.display='none';document.getElementById('getcomments_error').style.display='none';document.getElementById('commentExpirationMessage').style.display='block';}else{document.getElementById('commentExpirationMessage').style.display='none';document.getElementById('add_comment').style.display='block';}}
function truncateStr(str,strMaxlength,startCharPos,endCharPos)
{var updateStr=escape(str);if(updateStr.length>strMaxlength)
{updateStr=updateStr.substr(startCharPos,endCharPos)}
return updateStr;}
function getElementsByClass(node,searchClass,tag)
{var classElements=new Array();var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp("\\b"+searchClass+"\\b");for(i=0,j=0;i<elsLen;i++)
{if(pattern.test(els[i].className))
{classElements[j]=els[i];j++;}}
return classElements;}
function getPageShareData()
{var PageData=[];PageData[0]=new Array();var canonicalLink;var pageTitle=new String();var pageDesc=new String();if(document.body)
{var getLinkNodes=document.getElementsByTagName("link");var getMetaNodes=document.getElementsByTagName("meta");for(var i=0;i<getLinkNodes.length;i++)
{if(getLinkNodes[i].getAttribute('rel')=='canonical')
{canonicalLink=getLinkNodes[i].getAttribute('href');if((canonicalLink.length==0)||(canonicalLink===""))
{canonicalLink=document.location.href;}}}
if(canonicalLink==undefined)
{canonicalLink=document.location.href;}
PageData[0].canonicalLink=truncateStr(canonicalLink,255,0,255);for(var i=0;i<getMetaNodes.length;i++)
{if(getMetaNodes[i].getAttribute('name')=='description')
{pageDesc=getMetaNodes[i].getAttribute('content');PageData[0].pageDesc=truncateStr(pageDesc,300,0,300);}}
pageTitle=document.getElementsByTagName('title')[0];if(pageTitle){pageTitle=pageTitle.text;}
PageData[0].pageTitle=truncateStr(pageTitle,100,0,100);return PageData[0];}}
function getDiggParams()
{var pageData=getPageShareData();var diggShareLink=getElementsByClass(document,'diggShare','a');for(var a=0;a<diggShareLink.length;a++)
{diggShareLink[a].href='http://digg.com/submit?url='+pageData.canonicalLink+'&title='+pageData.pageTitle+'&bodytext='+pageData.pageDesc;}}
function cnbc_createTwitterURL()
{var pageData=getPageShareData();var tweetShare=getElementsByClass(document,'twitterShare','a');var maxTweetChars=140;var pageDesc=pageData.pageTitle.split('- CNBC');pageDesc=pageDesc[0].replace(/^\s*/,"").replace(/\s*$/,"");if((location.href+" "+pageDesc).length>maxTweetChars)
{var getPageDescLength=maxTweetChars-(location.href.length+1);pageDesc=pageDesc.slice(0,getPageDescLength);}
for(var i=0;i<tweetShare.length;i++)
{tweetShare[i].href='http://twitter.com/home?status='+pageDesc+'-'+location.href;}}
function cnbc_createYBuzzURL()
{var pageData=getPageShareData();var yBuzzShare=getElementsByClass(document,'yBuzzShare','a');for(var i=0;i<yBuzzShare.length;i++)
{yBuzzShare[i].href='http://buzz.yahoo.com/buzz?publisherurn=cnbc&targetUrl='+pageData.canonicalLink+'&headline='+pageData.pageTitle+'&summary='+pageData.pageDesc;}}