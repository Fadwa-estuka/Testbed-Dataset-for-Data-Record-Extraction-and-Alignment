Bootstrapper.bindDependencyDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(!String.prototype.endsWith)Object.defineProperty(String.prototype,"endsWith",{enumerable:false,configurable:false,writable:false,value:function(searchString,position){position=position||this.length;position=position-searchString.length;var lastIndex=this.lastIndexOf(searchString);return lastIndex!==-1&&lastIndex===position}});if(!String.prototype.contains)Object.defineProperty(String.prototype,
"contains",{enumerable:false,configurable:false,writable:false,value:function(searchString){var index=this.indexOf(searchString);return index!==-1}});var pos=Bootstrapper.dataObject.getData("POS","locale","global"),posList={US:!0,CA:!0,JP:!0,IN:!0,PH:!0,GU:!0,TW:!0,MP:!0,MX:!0,BR:!0,PA:!0,PR:!0,PE:!0,GT:!0,EC:!0};if(posList[pos])(function($){function addFloodlightTag(cat){var axel=Math.random()+"";var a=axel*1E13;$("body").append('\x3ciframe src\x3d"https://3463749.fls.doubleclick.net/activityi;src\x3d3463749;type\x3dunite280;cat\x3d'+
cat+";ord\x3d"+a+'?" width\x3d"1" height\x3d"1" frameborder\x3d"0" style\x3d"display:none"\x3e\x3c/iframe\x3e')}var url=location.pathname.toLowerCase(),checkMe="";checkMe="/products/groups/meetingtravel/";if(url.contains(checkMe))if(url.endsWith(checkMe+"default.aspx")||url.endsWith(checkMe))addFloodlightTag("unite056");checkMe="/travel/inflight/wifi/";if(url.contains(checkMe))if(url.endsWith(checkMe+"default.aspx")||url.endsWith(checkMe))addFloodlightTag("unite514");checkMe="/products/business/";
if(url.contains(checkMe))if(url.endsWith(checkMe+"default.aspx")||url.endsWith(checkMe))addFloodlightTag("unite312");checkMe="/travelproducts/pages/";if(url.contains(checkMe))if(url.endsWith(checkMe+"economyplus.aspx"))addFloodlightTag("unite310");checkMe="/products/groups/";if(url.contains(checkMe))if(url.endsWith(checkMe+"default.aspx")||url.endsWith(checkMe))addFloodlightTag("unite296");checkMe="/products/groups/";if(url.contains(checkMe))if(url.endsWith(checkMe+"entertainment-travel.aspx")||url.endsWith(checkMe))addFloodlightTag("unite016")})(jQuery)},
1484945,[1443121],252558,[202660]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(typeof JSON!=="undefined"&&(typeof JSON.stringify==="function"&&typeof JSON.parse==="function")&&typeof jQuery==="function"){window._24x7Error=function(err,addtlInfo){try{window.ga("send","event","[24]7 Error Triggered",location.href,err.message+(addtlInfo?" ("+addtlInfo+")":""),{nonInteraction:true})}catch(err){}};try{window.Bootstrapper=window.Bootstrapper||
{};Bootstrapper._24x7Track={};var __24x7=Bootstrapper._24x7Track;__24x7.isError=false;__24x7.currDate=new Date;__24x7.locpath=location.pathname;__24x7.concatID="|";__24x7.chngConcat="#";__24x7.encryptVars={P2:!0,P5:!0,P6:!0,P7:!0,P8:!0,P9:!0,P21:!0,P29:!0,P30:!0,P31:!0,P33:!0};__24x7.cookieName={};__24x7.infGlobal={};__24x7.infPersonal={};__24x7.infSession={};__24x7.infBooking={};__24x7.infViewRes={};__24x7.infChgFlght={};__24x7.infCnclFlght={};__24x7.funcs={};var __funcs=__24x7.funcs;__24x7.cookieName.global=
"ua_247.glbl";__24x7.cookieName.personal="ua_247.prs";__24x7.cookieName.session="ua_247.sess";__24x7.cookieName.booking="ua_247.bkng";__24x7.cookieName.viewres="ua_247.viewres";__24x7.cookieName.chgflght="ua_247.chgflght";__24x7.cookieName.cnclflght="ua_247.cnclflght";__funcs.__saveValue=function(name,data,expiry){try{expiry=(expiry!==""?expiry:1)*24*60*60*1E3;expiry=__24x7.currDate.getTime()+expiry;Bootstrapper.localS.utilities.__setData(name,typeof data==="object"?JSON.stringify(data):data,expiry)}catch(err){window._24x7Error(err,
"__saveValue")}};__funcs.__clearValue=function(name){try{Bootstrapper.localS.utilities.__clearData(name)}catch(err){window._24x7Error(err,"__clearValue")}};__funcs.__populateObj=function(objName,cookieName){try{var cookie=Bootstrapper.localS.utilities.__getData(cookieName);Bootstrapper._24x7Track[objName]=cookie!==""&&cookie!==null?JSON.parse(cookie):{};__funcs.__clearValue(cookieName)}catch(err){window._24x7Error(err,"__populateObj -- length: "+cookie.length+" -- last 5: "+cookie.substr(cookie.length-
5))}};__funcs.__bootstrapVarAvail=function(nameSpace){try{var nsArr=nameSpace.split("."),checkElem=window,returnElem=checkElem;for(var i=0;i<=nsArr.length;i++){if(checkElem!==undefined)returnElem=checkElem;else return false;checkElem=checkElem[nsArr[i]]}return returnElem}catch(err){window._24x7Error(err,"__bootstrapVarAvail");return""}};__funcs.__setObjVar=function(objVar,nameSpace,checkVal){try{var objNames=objVar.split("."),value="";if(checkVal===null||(checkVal===undefined||checkVal==="")||__funcs.__bootstrapVarAvail(checkVal)){value=
__funcs.__bootstrapVarAvail(nameSpace);if(__24x7.encryptVars[objNames[1]]&&value!=="--")value=Bootstrapper.base64Encode(value)}return value}catch(err){window._24x7Error(err,"__setObjVar");return""}};__funcs.__flightSearchDest=function(tripType){try{var destArr=__funcs.__bootstrapVarAvail("Bootstrapper.dataObject.page.flightSearch.trips"),destinationVal="";if(destArr)if(tripType==="OW")destinationVal="";else if(tripType==="RT"){if(destArr[1]&&destArr[1].Destination)destinationVal=destArr[1].Destination}else if(tripType===
"MD")for(var i=1;i<destArr.length;i++)destinationVal+=(destinationVal!==""?__24x7.concatID:"")+destArr[i].Destination;else destinationVal="";else destinationVal="";return destinationVal}catch(err){window._24x7Error(err,"__flightSearchDest");return""}};__funcs.__tripTableDest=function(tripType){try{var destArr=[],destinationVal="";jQuery("table.tblTrip").each(function(){var $this=jQuery(this),arriveArr=$this.children("tbody").children("tr").children("td.tdArrive"),arriveMatch=arriveArr.eq(arriveArr.length-
1).children("div").eq(3).text().match(/[A-Z]{3}/);if(arriveMatch)destArr.push(arriveMatch[0])});if(destArr)if(tripType==="OW")destinationVal="";else if(tripType==="RT")destinationVal=destArr[0];else if(tripType==="MD")for(var i=0;i<destArr.length;i++)destinationVal+=(destinationVal!==""?__24x7.concatID:"")+destArr[i];else destinationVal="";else destinationVal="";return destinationVal}catch(err){window._24x7Error(err,"__tripTableDest");return""}};__funcs.__chgFlghtDest=function(tripType){try{var destArr=
[],destinationVal="",destElems=jQuery("#ctl00_ContentInfo_OriginalSegments_tableMain tbody tr td div.arriveDtl");destElems.each(function(){var $this=jQuery(this),arriveArr=$this.text().split(" | ");if($this.parent("td").parent("tr").next("tr").children("td").children("span.Content").length>0||jQuery.inArray(this,destElems)===destElems.length-1){var arriveMatch=arriveArr.length>=3?arriveArr[2].match(/[A-Z]{3}/):[];if(arriveMatch)destArr.push(arriveMatch[0])}});if(destArr)if(tripType==="OW")destinationVal=
"";else if(tripType==="RT")destinationVal=destArr[0];else if(tripType==="MD")for(var i=0;i<destArr.length;i++)destinationVal+=(destinationVal!==""?__24x7.concatID:"")+destArr[i];else destinationVal="";else destinationVal="";return destinationVal}catch(err){window._24x7Error(err,"__chgFlghtDest");return""}};__funcs.__flightSearchRetDate=function(tripType){try{var retDateArr=__funcs.__bootstrapVarAvail("Bootstrapper.dataObject.page.flightSearch.trips"),returnDateVal="",tmpDate;if(retDateArr)if(tripType===
"OW")returnDateVal="";else if(tripType==="RT"){if(retDateArr[2]&&retDateArr[2].DepartDate){tmpDate=new Date(decodeURIComponent(retDateArr[2].DepartDate));returnDateVal=tmpDate.format("MM/dd/yyyy")}}else if(tripType==="MD")for(var i=2;i<retDateArr.length;i++){tmpDate=new Date(decodeURIComponent(retDateArr[i].DepartDate));returnDateVal+=(returnDateVal!==""?__24x7.concatID:"")+tmpDate.format("MM/dd/yyyy")}else returnDateVal="";else returnDateVal="";return returnDateVal}catch(err){window._24x7Error(err,
"__flightSearchRetDate");return""}};__funcs.__tripTableRetDate=function(tripType){try{var retDateArr=[],returnDateVal="",tmpDate;jQuery("table.tblTrip").each(function(){var $this=jQuery(this),departArr=$this.children("tbody").children("tr").children("td.tdDepart");retDateArr.push(__funcs.__formatDate(departArr.eq(0).children("div").eq(2).text()))});if(retDateArr)if(tripType==="OW")returnDateVal="";else if(tripType==="RT"){tmpDate=new Date(decodeURIComponent(retDateArr[1]));returnDateVal=tmpDate.format("MM/dd/yyyy")}else if(tripType===
"MD")for(var i=1;i<retDateArr.length;i++){tmpDate=new Date(decodeURIComponent(retDateArr[i]));returnDateVal+=(returnDateVal!==""?__24x7.concatID:"")+tmpDate.format("MM/dd/yyyy")}else returnDateVal="";else returnDateVal="";return returnDateVal}catch(err){window._24x7Error(err,"__tripTableRetDate");return""}};__funcs.__chgFlghtRetDate=function(tripType){try{var retDateArr=[],returnDateVal="",tmpDate;jQuery("#ctl00_ContentInfo_OriginalSegments_tableMain tbody tr td div.departDtl").each(function(){var $this=
jQuery(this),departArr=$this.text().split(" | ");if($this.parent("td").parent("tr").children("td").children("span.Content").length>0)retDateArr.push(__funcs.__formatDate(departArr[1]))});if(retDateArr)if(tripType==="OW")returnDateVal="";else if(tripType==="RT"){tmpDate=new Date(decodeURIComponent(retDateArr[1]));returnDateVal=tmpDate.format("MM/dd/yyyy")}else if(tripType==="MD")for(var i=1;i<retDateArr.length;i++){tmpDate=new Date(decodeURIComponent(retDateArr[i]));returnDateVal+=(returnDateVal!==
""?__24x7.concatID:"")+tmpDate.format("MM/dd/yyyy")}else returnDateVal="";else returnDateVal="";return returnDateVal}catch(err){window._24x7Error(err,"__chgFlghtRetDate");return""}};__funcs.__getObjString=function(objName){try{var retStr="",objKeys=Object.keys(__24x7[objName]),i;for(i=0;i<objKeys.length;i++){var attVal=__24x7[objName][objKeys[i]];if(attVal!=="--")retStr+="\x26"+objKeys[i]+"\x3d"+encodeURIComponent(attVal)}return retStr}catch(err){window._24x7Error(err,"__getObjString");return""}};
__funcs.__createErrorUrl=function(){try{__24x7.errorStr="";__24x7.errorStr+=__funcs.__getObjString("infGlobal");__24x7.errorStr+=__funcs.__getObjString("infPersonal");__24x7.errorStr+=__funcs.__getObjString("infSession");if(location.pathname.indexOf("/apps/booking/flight")>=0||__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/booking/flight")>=0)__24x7.errorStr+=__funcs.__getObjString("infBooking");if(location.pathname.indexOf("/apps/reservation/flight/view/")>=0||__24x7.infSession.P32&&
__24x7.infSession.P32.indexOf("/apps/reservation/flight/view/")>=0)__24x7.errorStr+=__funcs.__getObjString("infViewRes");if(location.pathname.indexOf("/apps/reservation/flight/change/")>=0||__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/reservation/flight/change/")>=0)__24x7.errorStr+=__funcs.__getObjString("infChgFlght");if(location.pathname.indexOf("/apps/reservation/flight/cancel")>=0||__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/reservation/flight/cancel")>=0)__24x7.errorStr+=
__funcs.__getObjString("infCnclFlght");var errorStr="https://united"+(document.location.host.indexOf("stage")>=0?"-staging":"")+".app.pub.247-inc.net/pxdata?sid\x3d"+__24x7.infSession.P12+"\x26uuid\x3d"+__24x7.infSession.P17+"\x26ppage\x3d"+__24x7.infSession.P20+__24x7.errorStr;return errorStr}catch(err){window._24x7Error(err,"__createErrorUrl");return""}};__funcs.__triggerError=function(){try{__24x7.infSession.P11=__24x7.currDate.format("MM/dd/yyyy-HH:mm:ss");__24x7.errorUrl=__funcs.__createErrorUrl();
Bootstrapper.imageRequest(__24x7.errorUrl);window.ga("send","event","[24]7 Error Triggered",__24x7.infSession.P13,decodeURIComponent(__24x7.errorStr),{nonInteraction:true})}catch(err){window._24x7Error(err,"__triggerError")}};__funcs.__grabCookieData=function(){try{__funcs.__populateObj("infGlobal",__24x7.cookieName.global);__funcs.__populateObj("infPersonal",__24x7.cookieName.personal);__funcs.__populateObj("infSession",__24x7.cookieName.session);__funcs.__populateObj("infBooking",__24x7.cookieName.booking);
__funcs.__populateObj("infViewRes",__24x7.cookieName.viewres);__funcs.__populateObj("infChgFlght",__24x7.cookieName.chgflght);__funcs.__populateObj("infCnclFlght",__24x7.cookieName.cnclflght)}catch(err){window._24x7Error(err,"__grabCookieData")}};__funcs.__getCookieID=function(){try{var cookieName="ua_247.CID",CID=Bootstrapper.localS.utilities.__getData(cookieName);if(!CID||CID=="--")CID=""+parseInt(Math.random()*1E9)+(new Date).getTime();__24x7.infSession.P17=CID;__funcs.__saveValue(cookieName,CID,
788923)}catch(err){window._24x7Error(err,"__getCookieID")}};__funcs.__formatPhoneNumber=function(selector,objVar){try{var objNames=objVar.split("."),value=__24x7[objNames[0]][objNames[1]],phoneArr=value==="--"||value===""||value===undefined||value===null?[]:value.split(__24x7.concatID);if(jQuery(selector).length>0){jQuery(selector).each(function(){var $this=jQuery(this),thisText=$this.text()||$this.val(),cleanText=thisText.replace(/[^0-9]/g,"");if(cleanText!==""){var formattedNumber=cleanText.substring(0,
3)+"-"+cleanText.substring(3,6)+"-"+cleanText.substring(6);if(__24x7.encryptVars[objNames[1]])formattedNumber=Bootstrapper.base64Encode(formattedNumber);if(jQuery.inArray(formattedNumber,phoneArr)<0)phoneArr.push(formattedNumber)}});return phoneArr.join(__24x7.concatID)}return value||""}catch(err){window._24x7Error(err,"__formatPhoneNumber");return""}};__funcs.__formatEmail=function(selector,objVar){try{var objNames=objVar.split("."),value=__24x7[objNames[0]][objNames[1]],emailArr=value==="--"||value===
""||value===undefined||value===null?[]:value.split(__24x7.concatID);if(jQuery(selector).length>0){jQuery(selector).each(function(){var $this=jQuery(this),thisText=$this.text()||$this.val(),cleanText=thisText.trim();if(cleanText!==""){var formattedEmail=encodeURIComponent(cleanText);if(__24x7.encryptVars[objNames[1]])formattedEmail=Bootstrapper.base64Encode(formattedEmail);if(jQuery.inArray(formattedEmail,emailArr)<0)emailArr.push(formattedEmail)}});return emailArr.join(__24x7.concatID)}return value||
""}catch(err){window._24x7Error(err,"__formatEmail");return""}};__funcs.__formatGenericText=function(selector,objVar){try{var objNames=objVar.split("."),value=__24x7[objNames[0]][objNames[1]];if(jQuery(selector).length>0)jQuery(selector).each(function(){var $this=jQuery(this),thisText=$this.text()||$this.val();value=thisText.trim();if(value!=="")if(__24x7.encryptVars[objNames[1]])value=Bootstrapper.base64Encode(value)});return value||""}catch(err){window._24x7Error(err,"__formatGenericText");return""}};
__funcs.__formatPassedText=function(value,objVar){try{var objNames=objVar.split(".");value=value.trim();if(value!=="")if(__24x7.encryptVars[objNames[1]])value=Bootstrapper.base64Encode(value);return value||""}catch(err){window._24x7Error(err,"__formatPassedText");return""}};__funcs.__formatDate=function(date){try{var daysOfWeek={"Sun.":"Sunday","Mon.":"Monday","Tue.":"Tuesday","Wed.":"Wednesday","Thu.":"Thursday","Fri.":"Friday","Sat.":"Saturday"},monthsOfYear={"Jan.":"January","Feb.":"February",
"Mar.":"March","Apr.":"April","May.":"May","Jun.":"June","Jul.":"July","Aug.":"August","Sep.":"September","Oct.":"October","Nov.":"November","Dec.":"December"},replacedDay="",replacedMonth="",formattedDate=date;jQuery.each(daysOfWeek,function(key,val){if(date.indexOf(key)>=0){replacedDay=key;return false}});jQuery.each(monthsOfYear,function(key,val){if(date.indexOf(key)>=0){replacedMonth=key;return false}});if(replacedDay&&replacedMonth){var adjustedDate=date.replace(replacedDay,daysOfWeek[replacedDay]).replace(replacedMonth,
monthsOfYear[replacedMonth]),_Date=new Date(adjustedDate),_Day=_Date.getDate(),_Month=_Date.getMonth()+1,_Year=_Date.getFullYear();formattedDate=(_Month<10?"0":"")+_Month+"/"+((_Day<10?"0":"")+_Day)+"/"+_Year}return formattedDate}catch(err){window._24x7Error(err,"__formatDate");return""}};__funcs.__getTravelerName=function(selector,objVar){try{var objNames=objVar.split("."),value=__24x7[objNames[0]][objNames[1]],travelerArr=value==="--"||value===""||value===undefined||value===null?[]:value.split(__24x7.concatID);
if(jQuery(selector).length>0){jQuery(selector).each(function(){var $this=jQuery(this),thisText=$this.text(),cleanText=thisText.trim();if(cleanText!==""){if(__24x7.encryptVars[objNames[1]])cleanText=Bootstrapper.base64Encode(cleanText);if(jQuery.inArray(cleanText,travelerArr)<0)travelerArr.push(cleanText)}});return travelerArr.join(__24x7.concatID)}return value||""}catch(err){window._24x7Error(err,"__getTravelerName");return""}};__funcs.__getFrequentFlyerNum=function(selector,objVar){try{var objNames=
objVar.split("."),value=__24x7[objNames[0]][objNames[1]],ffNumArr=value==="--"||value===""||value===undefined||value===null?[]:value.split(__24x7.concatID);if(jQuery(selector).length>0){jQuery(selector).each(function(){var $this=jQuery(this),thisText=$this.text(),cleanText=thisText.trim();if(cleanText!==""){if(__24x7.encryptVars[objNames[1]])cleanText=Bootstrapper.base64Encode(cleanText);if(jQuery.inArray(cleanText,ffNumArr)<0)ffNumArr.push(cleanText)}});return ffNumArr.join(__24x7.concatID)}return value||
""}catch(err){window._24x7Error(err,"__getFrequentFlyerNum");return""}};__funcs.__saveCookieData=function(){try{__funcs.__saveValue(__24x7.cookieName.global,__24x7.infGlobal);__funcs.__saveValue(__24x7.cookieName.personal,__24x7.infPersonal);__funcs.__saveValue(__24x7.cookieName.session,__24x7.infSession);__funcs.__saveValue(__24x7.cookieName.booking,__24x7.infBooking);__funcs.__saveValue(__24x7.cookieName.viewres,__24x7.infViewRes);__funcs.__saveValue(__24x7.cookieName.chgflght,__24x7.infChgFlght);
__funcs.__saveValue(__24x7.cookieName.cnclflght,__24x7.infCnclFlght)}catch(err){window._24x7Error(err,"__saveCookieData")}};__funcs.__getLocation=function(){try{if(typeof Bootstrapper.Cookies._cookies.IP!=="undefined"){var lcnStr=Bootstrapper.Cookies._cookies.IP,LocArry=[],locStrArry;locStrArry=lcnStr.split("\x26");for(var i=0;i<locStrArry.length;i++){if(locStrArry[i].search("Country\x3d")>-1)LocArry[2]=locStrArry[i].substring(8);else if(locStrArry[i].search("City\x3d")>-1)LocArry[0]=locStrArry[i].substring(5);
else if(locStrArry[i].search("Region\x3d")>-1)LocArry[1]=locStrArry[i].substring(7);if(LocArry.length>3)break}return Bootstrapper.base64Encode(LocArry.join(","))}else return""}catch(err){window._24x7Error(err,"__getLocation");return""}};__funcs.__getCustID=function(){try{if(Bootstrapper.dataObject.global.visitor.CustomerId!==null&&typeof Bootstrapper.dataObject.global.visitor.CustomerId!="undefined"&&Bootstrapper.dataObject.global.visitor.CustomerId!==""){var custID=Bootstrapper.base64Encode(Bootstrapper.dataObject.global.visitor.CustomerId);
return custID}else return""}catch(err){window._24x7Error(err,"__getCustID");return""}};__funcs.__grabPageData=function(){try{__24x7.infGlobal.P1="web";__24x7.infGlobal.P2=__funcs.__setObjVar("infGlobal.P2","Bootstrapper.dataObject.global.visitor.CustomerId","Bootstrapper.dataObject.global.visitor.loggedIn")||__24x7.infGlobal.P2||"--";__24x7.infGlobal.P3=__funcs.__setObjVar("infGlobal.P3","Bootstrapper.dataObject.global.locale.POS")||__24x7.infGlobal.P3||"--";__24x7.infGlobal.P4=__funcs.__setObjVar("infGlobal.P4",
"Bootstrapper.dataObject.global.locale.langCode")||__24x7.infGlobal.P4||"--";__24x7.infGlobal.P5=__funcs.__getCustID()||__24x7.infGlobal.P5||"--";__24x7.infSession.P10=__24x7.infSession.P10!=="--"?__24x7.infSession.P10:__24x7.currDate.format("MM/dd/yyyy-HH:mm:ss");__24x7.infSession.P11="--";__24x7.infSession.P12=theForm&&theForm.hdnSID?theForm.hdnSID.value:__24x7&&__24x7.infSession&&__24x7.infSession.P12?__24x7.infSession.P12:"--";__24x7.infSession.P13="--";__24x7.infSession.P14=jQuery("span[id*\x3d'ErrorDetail']").text().split(":").length>
1?jQuery("span[id*\x3d'ErrorDetail']").text().split(":")[1].replace(/\s/g,""):"--";__24x7.infSession.P15="--";__24x7.infSession.P16="--";__24x7.infSession.P17="--";__24x7.infSession.P18="--";__24x7.infSession.P19="--";__24x7.infSession.P20=jQuery("title").text().replace(/\n/g,"");__24x7.infBooking.P21="--";__24x7.infBooking.P22="--";__24x7.infBooking.P23="--";__24x7.infBooking.P24="--";__24x7.infBooking.P25="--";__24x7.infBooking.P26="--";__24x7.infBooking.P27="--";__24x7.infBooking.P28="--";__24x7.infSession.P32=
window.location.hostname+window.location.pathname+window.location.search+window.location.hash;__24x7.infSession.P34=typeof Bootstrapper.Cookies.get("TLTSID")!="undefined"?Bootstrapper.Cookies.get("TLTSID"):"--";var prevPageMap=[{regex:/.*\.united\.com\/web\/.*\/default\.aspx\/?/i,pageName:"HomePage"},{regex:/.*\.united\.com\/web\/[^\/]+\/apps\/booking\/flight\/searchresult\d\.aspx/i,pageName:"Search"},{regex:/.*\.united\.com\/web\/.*\/apps\/booking\/flight\/(reviewAward|reviewRevenue)\.aspx\/?/i,
pageName:"Review Trip"},{regex:/.*\.united\.com\/web\/.*\/apps\/booking\/flight\/traveler\.aspx\/?/i,pageName:"Traveler"},{regex:/.*\.united\.com\/web\/.*\/apps\/booking\/flight\/seatSelector\.aspx\/?/i,pageName:"Seat Map"},{regex:/.*\.united\.com\/web\/.*\/apps\/booking\/flight\/billingRevenue\.aspx\/?/i,pageName:"Billing"},{regex:/.*\.united\.com\/web\/.*\/apps\/booking\/flight\/confirmRevenue\.aspx\/?/i,pageName:"Confirmation"}];for(var i=0;i<prevPageMap.length;i++)if(prevPageMap[i].regex.test(document.referrer)){__24x7.infSession.P20=
prevPageMap[i].pageName;break}if(location.pathname.indexOf("/apps/booking/flight")>=0){__24x7.infBooking.P21=__funcs.__formatGenericText(".uaConfirmationNumber","infBooking.P21")||"--";__24x7.infBooking.P22=__funcs.__setObjVar("infBooking.P22","Bootstrapper.dataObject.page.flightSearch.type")||__24x7.infBooking.P22||"--";__24x7.infBooking.P23=(__funcs.__setObjVar("infBooking.P23","Bootstrapper.dataObject.page.flightSearch.tripType")||__24x7.infBooking.P23||"--").replace("One Way","OW").replace("Round Trip",
"RT").replace("Multiple Destinations","MD");__24x7.infBooking.P24=__funcs.__setObjVar("infBooking.P24","Bootstrapper.dataObject.page.flightSearch.orig1")||__24x7.infBooking.P24||"--";__24x7.infBooking.P25=__funcs.__flightSearchDest(__24x7.infBooking.P23)||__24x7.infBooking.P25||"--";__24x7.infBooking.P26=__funcs.__setObjVar("infBooking.P26","Bootstrapper.dataObject.page.flightSearch.travelDate1")||__24x7.infBooking.P26||"--";__24x7.infBooking.P27=__funcs.__flightSearchRetDate(__24x7.infBooking.P23)||
__24x7.infBooking.P27||"--";__24x7.infBooking.P28=__funcs.__setObjVar("infBooking.P28","Bootstrapper.dataObject.page.flightSearch.paxCount")||__24x7.infBooking.P28||"--"}var deptMatch="",arrMatch="";if(location.pathname.indexOf("/apps/reservation/flight/view/")>=0){__24x7.infViewRes.P21=__funcs.__formatGenericText(".uaConfirmationNumber","infBooking.P21")||"--";__24x7.infViewRes.P22=jQuery("#ctl00_ContentInfo_ViewRes_PriceRewardSummary_Price_ctl00_spanPrice").text().indexOf("miles")>=0?"Award":"Revenue";
deptMatch=jQuery(".tblTrip .tdDepart").eq(0).children("div").eq(3).text().match(/[A-Z]{3}/g);if(!deptMatch)deptMatch=jQuery(".tblTrip div.hdrDeparting").text().match(/[A-Z]{3}/g);arrMatch=jQuery(".tblTrip .tdArrive").eq(jQuery(".tblTrip .tdArrive").length-1).children("div").eq(3).text().match(/[A-Z]{3}/g);if(!arrMatch)arrMatch=jQuery(".tblTrip div.hdrReturning").eq(jQuery(".tblTrip div.hdrReturning").length-1).text().match(/[A-Z]{3}/g);if(jQuery(".tblTrip").length===1)__24x7.infViewRes.P23="OW";else if(jQuery(".tblTrip").length===
2&&deptMatch[0]===arrMatch[arrMatch.length-1])__24x7.infViewRes.P23="RT";else __24x7.infViewRes.P23="MD";if(deptMatch)__24x7.infViewRes.P24=deptMatch[0];else __24x7.infViewRes.P24="--";var arrivalMatch=jQuery(".tblTrip .tdArrive").eq(0).children("div").eq(3).text().match(/[A-Z]{3}/g)[0];if(!arrivalMatch)arrivalMatch.push(jQuery(".tblTrip div.hdrDeparting").text().match(/[A-Z]{3}/g))[0];__24x7.infViewRes.P25=arrivalMatch||__24x7.infViewRes.P25||"--";__24x7.infViewRes.P26=__funcs.__formatDate(jQuery(".tblTrip .tdDepart").eq(0).children("div").eq(2).text()||
"--");__24x7.infViewRes.P27=__funcs.__tripTableRetDate(__24x7.infViewRes.P23)||__24x7.infViewRes.P27||"--";__24x7.infViewRes.P28=jQuery("div.traveler").length||"--"}if(location.pathname.indexOf("/apps/reservation/flight/change/")>=0){__24x7.infChgFlght.P21=__24x7.infChgFlght.P21||"--";__24x7.infChgFlght.P22=__24x7.infChgFlght.P22||"--";__24x7.infChgFlght.P23=__24x7.infChgFlght.P23||"--";__24x7.infChgFlght.P24=__24x7.infChgFlght.P24||"--";__24x7.infChgFlght.P25=__24x7.infChgFlght.P25||"--";__24x7.infChgFlght.P26=
__24x7.infChgFlght.P26||"--";__24x7.infChgFlght.P27=__24x7.infChgFlght.P27||"--";__24x7.infChgFlght.P28=__24x7.infChgFlght.P28||"--";var travelerArr=[],orig,dests,deptDate,retDates,depart,arrive;if(location.pathname.indexOf("default.aspx")>=0){__24x7.infChgFlght.P22=jQuery("table.fareDetails tr[id*\x3d'_ContentInfo_PriceSummary_'].total td[id*\x3d'_ContentInfo_PriceSummary_'].currency span.mileage").length>0?"Award":"Revenue";deptMatch=jQuery(".departDtl").eq(0).text().match(/[A-Z]{3}/);arrMatch=
jQuery(".arriveDtl").eq(jQuery(".arriveDtl").length-1).text().match(/[A-Z]{3}/);depart=deptMatch?deptMatch[0]:"";arrive=arrMatch?arrMatch[0]:"";__24x7.infChgFlght.P23=(jQuery("span.Content").length===1?"OW":jQuery("span.Content").length===2&&depart===arrive?"RT":jQuery("span.Content").length>=2&&depart!==arrive?"MD":"")||__24x7.infChgFlght.P23||"--";var deptSplitMatch=jQuery(".departDtl").eq(0).text().split(" | ")[2].match(/[A-Z]{3}/);var arrivalSplitMatch=jQuery(".arriveDtl").eq(0).text().split(" | ")[2].match(/[A-Z]{3}/);
__24x7.infChgFlght.P24=deptSplitMatch?deptSplitMatch[0]:__24x7.infChgFlght.P24||"--";__24x7.infChgFlght.P25=arrivalSplitMatch?arrivalSplitMatch[0]:__24x7.infChgFlght.P25||"--";__24x7.infChgFlght.P26=__funcs.__formatDate(jQuery(".departDtl").eq(0).text().split(" | ")[1]||__24x7.infChgFlght.P26||"--");__24x7.infChgFlght.P27=__funcs.__chgFlghtRetDate(__24x7.infChgFlght.P23)||__24x7.infChgFlght.P27||"--"}if(location.pathname.indexOf("searchNew")>=0){jQuery("#divShowTraveler span.PHead").each(function(){travelerArr.push(__funcs.__formatPassedText(jQuery(this).text().split(" - ")[0],
"infChgFlght.P29"))});__24x7.infChgFlght.P28=travelerArr.length||__24x7.infChgFlght.P28||"--"}if(location.pathname.indexOf("review")>=0){deptMatch=jQuery("table.tblTrip td.tdDepart").eq(0).children("div").eq(3).text().match(/[A-Z]{3}/);orig=deptMatch[0]||"";__24x7.infChgFlght.P24=orig?(__24x7.infChgFlght.P24.indexOf(__24x7.chngConcat)>=0?__24x7.infChgFlght.P24.split(__24x7.chngConcat)[0]:__24x7.infChgFlght.P24)+__24x7.chngConcat+orig:__24x7.infChgFlght.P24||"--";dests=__funcs.__tripTableDest(__24x7.infChgFlght.P23);
__24x7.infChgFlght.P25=dests?(__24x7.infChgFlght.P25.indexOf(__24x7.chngConcat)>=0?__24x7.infChgFlght.P25.split(__24x7.chngConcat)[0]:__24x7.infChgFlght.P25)+__24x7.chngConcat+dests:__24x7.infChgFlght.P25||"--";deptDate=__funcs.__formatDate(jQuery("table.tblTrip td.tdDepart").eq(0).children("div").eq(2).text()||"");__24x7.infChgFlght.P26=deptDate?(__24x7.infChgFlght.P26.indexOf(__24x7.chngConcat)>=0?__24x7.infChgFlght.P26.split(__24x7.chngConcat)[0]:__24x7.infChgFlght.P26)+__24x7.chngConcat+deptDate:
__24x7.infChgFlght.P26||"--";retDates=__funcs.__tripTableRetDate(__24x7.infChgFlght.P23);__24x7.infChgFlght.P27=retDates?(__24x7.infChgFlght.P27.indexOf(__24x7.chngConcat)>=0?__24x7.infChgFlght.P27.split(__24x7.chngConcat)[0]:__24x7.infChgFlght.P27)+__24x7.chngConcat+retDates:__24x7.infChgFlght.P27||"--"}if(location.pathname.indexOf("confirm")>=0)__24x7.infChgFlght.P21=(__24x7.infChgFlght.P21.indexOf(__24x7.chngConcat)>=0?__24x7.infChgFlght.P21.split(__24x7.chngConcat)[0]:__24x7.infChgFlght.P21)+
__24x7.chngConcat+(__funcs.__formatGenericText("#ctl00_ContentInfo_ReservationDetailRevenue_ConfirmItineraryNumbers_spPNR","infBooking.P21")||"--")}if(location.pathname.indexOf("/apps/reservation/flight/cancel")>=0){__24x7.infCnclFlght.P21=__funcs.__formatGenericText("#ctl00_ContentInfo_lblRecordLocator","infCnclFlght.P21")||"--";__24x7.infCnclFlght.P22=jQuery("div.paymentContainer div.priceDetails h3").text().toLowerCase().indexOf("mile")>=0?"Award":"Revenue";var cnclFltDeptArr=jQuery("table.tblTrip td.tdDepart").eq(0).children("div").eq(3).text().match(/[A-Z]{3}/),
cnclFltDept=cnclFltDeptArr!==null?cnclFltDeptArr[0]:"",cnclFltDestArr=jQuery("table.tblTrip td.tdArrive").eq(jQuery("table.tblTrip td.tdArrive").length-1).children("div").eq(3).text().match(/[A-Z]{3}/),cnclFltDest=cnclFltDestArr!==null?cnclFltDestArr[0]:"";__24x7.infCnclFlght.P23=jQuery("table.tblTrip").length===1?"OW":jQuery("table.tblTrip").length===2&&cnclFltDept&&cnclFltDest&&cnclFltDept===cnclFltDest?"RT":"MD";__24x7.infCnclFlght.P24=cnclFltDept||"--";__24x7.infCnclFlght.P25=__funcs.__tripTableDest(__24x7.infCnclFlght.P23)||
__24x7.infCnclFlght.P25||"--";__24x7.infCnclFlght.P26=__funcs.__formatDate(jQuery("table.tblTrip td.tdDepart").eq(0).children("div").eq(2).text()||"--");__24x7.infCnclFlght.P27=__funcs.__tripTableRetDate(__24x7.infCnclFlght.P23)||__24x7.infCnclFlght.P27||"--";__24x7.infCnclFlght.P28=__24x7.infViewRes.P28||jQuery("#ctl00_ContentInfo_PriceRevenueSummary_Price_ctl00_trDisplayTypeClass td").eq(0).text().split(" ")[0]||jQuery("#ctl00_ContentInfo_PriceRewardSummary_Price_ctl00_trDisplayTypeClass td").eq(0).text().split(" ")[0]||
"--"}__funcs.__saveCookieData()}catch(err){window._24x7Error(err,"__grabPageData")}};__funcs.__grabPageDataOnload=function(){try{if(location.pathname.indexOf("/apps/reservation/default.aspx")>=0)jQuery("body").on("click","a[id$\x3d'_ItinRecapCurrent_rptItineraries_ctl00_ItinRecap_ManageOptionsFlight_linkView']",function(){var $confNum=[];if(jQuery(this).parent().parent().siblings("span[id*\x3d'_spanConfNum']").length>0)$confNum=jQuery(this).parent().parent().siblings("span[id*\x3d'_spanConfNum']");
else if(jQuery(this).parent().parent().siblings("ul").children("li").children("span[id*\x3d'_spanConfNum']").length>0)$confNum=jQuery(this).parent().parent().siblings("ul").children("li").children("span[id*\x3d'_spanConfNum']");__24x7.infViewRes.P21=__funcs.__formatGenericText($confNum,"infViewRes.P21")||"--";__funcs.__saveValue(__24x7.cookieName.viewres,__24x7.infViewRes)});if(location.pathname.indexOf("/apps/reservation/flight/view/")>=0)jQuery("body").on("click","#ctl00_ContentInfo_ViewRes_ManageOptions_linkChangeFlight, #ctl00_ContentInfo_ViewRes_linkChangeFlight",
function(){__24x7.infChgFlght.P21=__funcs.__formatGenericText("#ctl00_ContentInfo_ViewRes_ConfirmItineraryNumbers1_spPNR","infChgFlght.P21")||"--";__funcs.__saveValue(__24x7.cookieName.chgflght,__24x7.infChgFlght)});if(location.pathname.indexOf("/apps/reservation/default.aspx")>=0)jQuery("body").on("click","a[id*\x3d'_linkChangeFlight']",function(){__24x7.infChgFlght.P21=__funcs.__formatGenericText(jQuery(this).parent().parent().siblings("span[id*\x3d'_spanConfNum']"),"infChgFlght.P21")||"--";__funcs.__saveValue(__24x7.cookieName.chgflght,
__24x7.infChgFlght)})}catch(err){window._24x7Error(err,"__grabPageDataOnload")}};__funcs.__resetData=function(){try{__funcs.__clearValue(__24x7.cookieName.session);__funcs.__clearValue(__24x7.cookieName.global);__funcs.__clearValue(__24x7.cookieName.booking);__funcs.__clearValue(__24x7.cookieName.personal);__funcs.__clearValue("ua_247.UAsession");__funcs.__clearValue("ua_247.traveler");__funcs.__clearValue("UA.247.signinAttemptCnt")}catch(err){window._24x7Error(err)}};try{__funcs.__grabCookieData();
__funcs.__getCookieID();__funcs.__grabPageDataOnload();var UAsessionID=Bootstrapper.localS.utilities.__getData("ua_247.UAsession");if(typeof UAsessionID!="undefined"&&UAsessionID!==""){if(UAsessionID!==Bootstrapper.dataObject.UASessionID){__funcs.__resetData();__funcs.__saveValue("ua_247.UAsession",Bootstrapper.dataObject.UASessionID,2)}}else{__funcs.__resetData();__funcs.__saveValue("ua_247.UAsession",Bootstrapper.dataObject.UASessionID,2)}if(location.pathname.indexOf("/apps/booking/flight")<0&&
__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/booking/flight")<0&&!__24x7.isError){__24x7.infBooking={};if(Bootstrapper.Cookies.get(__24x7.cookieName.booking))__funcs.__clearValue(__24x7.cookieName.booking)}if(location.pathname.indexOf("/apps/reservation/flight/view/")<0&&__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/reservation/flight/view/")<0&&!__24x7.isError){__24x7.infViewRes={};if(Bootstrapper.Cookies.get(__24x7.cookieName.viewres))__funcs.__clearValue(__24x7.cookieName.viewres)}if(location.pathname.indexOf("/apps/reservation/flight/change/")<
0&&__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/reservation/flight/change/")<0&&!__24x7.isError){__24x7.infChgFlght={};if(Bootstrapper.Cookies.get(__24x7.cookieName.chgflght))__funcs.__clearValue(__24x7.cookieName.chgflght)}if(location.pathname.indexOf("/apps/reservation/flight/cancel")<0&&__24x7.infSession.P32&&__24x7.infSession.P32.indexOf("/apps/reservation/flight/cancel")<0&&!__24x7.isError){__24x7.infCnclFlght={};if(Bootstrapper.Cookies.get(__24x7.cookieName.cnclflght))__funcs.__clearValue(__24x7.cookieName.cnclflght)}if(location.pathname.indexOf("error.aspx")>=
0){__24x7.isError=true;if(location.pathname.indexOf("/apps/booking/flight")>-1||document.referrer.indexOf("/apps/booking/flight")>-1)__24x7.infSession.P13="Booking Error";else if(location.pathname.indexOf("/apps/reservation")>-1||document.referrer.indexOf("/apps/reservation")>-1)__24x7.infSession.P13="ManageRes Error";__funcs.__triggerError()}if(jQuery.fn.on)jQuery("body").on("click","a[title\x3d'Click to speak to a representative.']",function(){__funcs.__grabPageData();__24x7.isError=true;__24x7.infSession.P13=
"click to talk";__funcs.__triggerError()});else jQuery("a[title\x3d'Click to speak to a representative.']").click(function(){__funcs.__grabPageData();__24x7.isError=true;__24x7.infSession.P13="click to talk";__funcs.__triggerError()});__24x7.signinFailureCnt=Bootstrapper.localS.utilities.__getData("ua_24x7.signinFailureCnt")||0;if(location.pathname.indexOf("apps/account/signin.aspx")>-1&&$("#ctl00_ContentInfo_lblErrMsg").length>0){__24x7.signinFailureCnt++;if(__24x7.signinFailureCnt===3){__24x7.isError=
true;__funcs.__grabPageData();__24x7.infSession.P13="signin failure";__funcs.__triggerError();__24x7.signinFailureCnt=0}}else __24x7.signinFailureCnt=0;__funcs.__saveValue("ua_24x7.signinFailureCnt",__24x7.signinFailureCnt);if(jQuery.fn.on)jQuery("body").on("click","a[title\x3d'Click to speak to a representative.']",function(){__funcs.__grabPageData();__24x7.isError=true;__24x7.infSession.P13="click to talk";__funcs.__triggerError()});else jQuery("a[title\x3d'Click to speak to a representative.']").click(function(){__funcs.__grabPageData();
__24x7.isError=true;__24x7.infSession.P13="click to talk";__funcs.__triggerError()});jQuery(window).load(function(){try{__funcs.__grabPageData()}catch(err){window._24x7Error(err)}});jQuery(window).unload(function(){try{__funcs.__grabPageData()}catch(err){window._24x7Error(err)}})}catch(err){window._24x7Error(err,"maintenance")}try{if(location.host.indexOf("stage.")>=0){var rtiPage=location.pathname.match(/reviewaward.aspx|reviewrevenue.aspx/i)!==null,billPage=location.pathname.match(/billingaward.aspx|billingrevenue.aspx/i)!==
null;if(rtiPage||billPage){__24x7.isError=false;__24x7.infSession.P13=rtiPage?"trip itinerary":billPage?"billing info":"unknown";__funcs.__triggerError()}}}catch(err){window._24x7Error(err,"test trigger")}}catch(err){window._24x7Error(err,"whole block")}}},1731742,[1443121],252258,[202660]);