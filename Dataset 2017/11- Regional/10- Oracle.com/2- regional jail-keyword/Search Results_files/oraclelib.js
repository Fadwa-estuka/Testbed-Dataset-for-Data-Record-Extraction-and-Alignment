// Core JS library for oracle.com
//Updated by Umesh Soni

//-- Get and Set Language based information
//-- This can be moved to lang.js file when ready
var language_root  	= "";
var print_label    	= "Printer View";

// UCM Cookie Libraries //
function existsUCMCookie(s) {
	if (s == "ORA_UCM_VER") {
		if ((ORA_UCM_VER.version != null) &&
			(ORA_UCM_VER.username != null) &&
			(ORA_UCM_VER.username_enc != null) &&
			(ORA_UCM_VER.ipaddress != null) &&
			(ORA_UCM_VER.ipaddress_enc != null) ) {
		return true;
		}
	}
	else if (s == "ORA_UCM_INFO") {
		//MW: reduce for v2 cookies
		if ((ORA_UCM_INFO.version != null) &&
			(ORA_UCM_INFO.guid != null) &&
			(ORA_UCM_INFO.username != null)) {
		return true;
		}
	}
	else if (s == "ORA_UCM_SRVC") {
		if ((ORA_UCM_SRVC.value != null) &&
			(ORA_UCM_SRVC.version != null)) {
		}
		return true;
	}
	// Added by cyappert
	else if (s == "ORA_UCM_CMP") {
		if ((ORA_UCM_CMP.value != null) &&
			(ORA_UCM_CMP.version != null)) {
		}
		return true;
	}

	return false;
}
function isUCMRegistered() {

	if (existsUCMCookie("ORA_UCM_INFO") == true) {
		orainfo_exists = true;
		otnnm_exists = true;
		return true;
	}
	return false;
}
function getArg(arg_name, str) {
	var value = "", tmpstr = "";
	if (!str) str = location.search.substring(1);
	if (!str) return value;
	else {
		var tmparray = str.split("&");
		for (i=0; i<tmparray.length; i++) {
			tmpstr = tmparray[i].toUpperCase();
			if (tmpstr.indexOf(arg_name.toUpperCase() + "=") != -1) {
				var tmp2array = tmparray[i].split("=");
				value = tmp2array[1];
			}
		}
	}
	return value;
}
function isUCMAnonymous() {

	if ( (ORA_UCM_INFO.version != null) &&
		(ORA_UCM_INFO.guid != null) &&
		(isUCMRegistered() == false) ) {
	return true;
	}
	return false;
}
function getUCMCookies() {
	ORA_UCM_VER   = new private_ORA_UCM_VER();
	ORA_UCM_INFO  = new private_ORA_UCM_INFO();
	ORA_UCM_SRVC  = new private_ORA_UCM_SRVC();
}

function private_ORA_UCM_VER () {

	this.value_enc = getCookieData("ORA_UCM_VER");
	this.value     = private_UCMCookieDecode(this.value_enc);
	this.array     = this.value.split("OR1:");

	this.version       = this.array[0];
	this.username      = this.array[1];
	this.username_enc  = this.array[2];
	this.ipaddress     = this.array[3];
	this.ipaddress_enc = this.array[4];
}
//-- Cookie Functions
//JB: moved checkCMP to reglet.js



function goWin(url, x, w, h, scroll) {
 if (!x || x=="") x=1;
 if (x==1) top.location="./"+url
 else if (x==2) window.open(url,"smallWin","toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=1,scrollbars="+scroll+",width="+w+",height="+h+",top=0,screenY=0,left=0,screenX=0")
 else if (x==3) window.open(url,"fullWin")
}
// eloggerF
var gUrl="http://www.oracle.com/webapps/elog/trackurl";
var baseUrl="http://"+location.hostname;
var fromUrl=escapeURL(document.URL);
var refUrl=escapeURL(document.referrer); 

function escapeURL(p_txt) {
 r1= /\&/gi;
 r2= / /gi;
 r3= /\+/gi;
 var t=p_txt;
 t=t.replace(r1,"%26");
 t=t.replace(r2,"%2B");
 t=t.replace(r3,"%2B");
 return t;
}
function trackURL(p_url, p_object_id, p_subobject_id) {
 var toUrl=escapeURL(p_url);
 var destUrl="";
 var srcUrl="";
 var trackbleUrl="";
 if (toUrl.indexOf("http")==-1) destUrl=baseUrl+toUrl;
 if (fromUrl.indexOf("http")==-1) srcUrl=baseUrl+fromUrl;
 trackbleUrl=gUrl+"?d="+destUrl+"&s="+srcUrl+"&di="+p_object_id ;
 return trackbleUrl;
}
function goURL(p_url, p_object_id, p_subobject_id) {
 location=trackURL(p_url,p_object_id,p_subobject_id);
}
function logURL(p_object_id, p_subobject_id ) {
 var destUrl="";
 var srcUrl="";
 var trackbleUrl="";
 if (fromUrl.indexOf("http")==-1) destUrl=baseUrl+fromUrl;
 if (refUrl.indexOf("http")==-1) srcUrl=baseUrl+refUrl;
 trackbleUrl=gUrl+"?d="+destUrl+"&s="+srcUrl+"&di="+p_object_id+"&a=image" ;
 document.write("<img src=\""+trackbleUrl+"\">");
}
// OTN leftnav
function dropdown(mySel)
{
 var myWin, mV;
 mV=mySel.options[mySel.selectedIndex].value;
 if(mV) {
  if(mySel.form.target) myWin=parent[mySel.form.target]; 
  else myWin=window;
  if (!myWin) return true;
  myWin.location=mV;
 }
 return false;
}
// viewlets
function isViewletCompliant()
{
 ans=true;
 version=Math.round(parseFloat(navigator.appVersion) * 1000);
 if (navigator.appName.substring(0,9)=="Microsoft")
  if(version<4000) ans=false;
 if (navigator.appName.substring(0,8)=="Netscape")
  if ((navigator.appVersion.indexOf("Mac")> 0)&&(version<5000)) ans=false;
   else if (version<4060) ans=false;
 plugins=navigator.plugins;
 if (!ans && plugins!=null)
  for(i=0;i!=plugins.length;i++)
   if((plugins[i].name.indexOf("Java Plug-in")>=0)&&(plugins[i].name.indexOf("1.0")<0)) ans=true;
 return ans;
}
function openViewlet(htmlFile,htmlWidth,htmlHeight)
{
 str = 'resizable=0,toolbar=0,menubar=0,scrollbars=0,status=0,location=0,directory=0,width=350,height=200';
 if(!isViewletCompliant())
  open("http://www.qarbon.com/warning/index.html",'Leelou',str);
 else
  window.open(htmlFile,'Leelou','width='+htmlWidth+',height='+htmlHeight+',top=10,left=20');
}

var USER = new getUserInfo();

function printWelcome()
{
  var loc= window.location.href;
  var tempURL= window.location.href;

  var temp = new Array();
  temp = tempURL.split('/');

  var tmp = '<span class="profile">';
  if ( USER.guid ){
	 if(temp[4] == "global" ){
		tmp += 'Welcome ' + USER.firstname + ' ( <a style="color:black;" class="profile" href="javascript:sso_sign_out();">' +
			  'Sign Out'+ '<\/a> | <a class="profile" href="http://www.oracle.com/admin/account/index.html?'+temp[5]+ '">' + 'Account' + '<\/a> )';
	 }else{
		tmp += 'Welcome ' + USER.firstname + ' ( <a style="color:black;" class="profile" href="javascript:sso_sign_out();">' +
			  'Sign Out'+ '<\/a> | <a class="profile" href="http://www.oracle.com/admin/account/index.html">' + 'Account' + '<\/a> )';
	 }	

  }else{
     if(temp[4] == "global" ){
    	tmp += '<a style="color:black;" href="' + 'http://www.oracle.com/admin/account/index.html?'+temp[5]+ '">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';
  	 }else{
    	tmp += '<a style="color:black;" href="' + 'http://www.oracle.com/admin/account/index.html">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';
	 }	
  }
  tmp += '<\/span>';
  document.write(tmp);
  document.close();
}



function printWelcomeOPN()
{
	var url = location.href;
     if (url.indexOf('html?loc' ) > -1  )
		{
		  var param = url.replace( /^[^=]+\=/, '' );
          loc = param;		 
        }
	else  loc= window.location.href;
	  loc= escape(loc)
  var tmp = '<span class="profile">';
  if ( USER.guid )
    tmp += 'Welcome ' + USER.firstname + ' ( <a class="profile" href="javascript:sso_sign_out();">' +
          'Sign Out'+ '<\/a> | <a class="profile" href="http://www.oracle.com/partners/admin/web_account.html?loc='+loc + '">' + 'Account' + '<\/a> )';
  else
    tmp += '<a href="' + 'http://www.oracle.com/partners/admin/web_account.html?loc='+loc + '">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';

  tmp += '<\/span>';
  document.write(tmp);
  document.close();
}

function printWelcomeSES(username)
{
 
  var tmp = '<span class="profile">';
  if ( username != null && username != "")
  {
     
        tmp += 'Welcome ' + USER.firstname + ' ( <a style="color:black;" class="profile" href="/search/logout.jsp?return_url=/search/search">' +
              'Sign Out'+ '<\/a> | <a style="color:black;" class="profile" href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=' + location.href + '">' + 'Account' + '<\/a> )';                                  
              
  }   
  else
  {
   
        tmp += '<a style="color:black;" href="/search/formlogin.uix?return_url=/search/search">' + '(Sign In)'+ '<\/a>';
       
  }
  tmp += '<\/span>';
  document.write(tmp);
  document.close();
}


function DrawPrinterView()
{
  var printTemplate = '/ocom/ocom_item_templates/print';

  var Str = window.location.pathname;
  Str = Str.substring( 1 );
  Str = Str.substring( 0, Str.indexOf( '/' ) );
  if ( Str.length == 2 || Str.length == 5 || Str == 'global' ) printTemplate = '/ocom/ocom_item_templates/global/global_print';

  var Str = '<A href="javascript:location=location.pathname+\'?_template='+printTemplate+'\';" target=""><IMG ';
  Str += 'height=15 alt="'+strings.print_label+'" src="http://www.oracle.com/us/assets/print-17-15.gif" width=17 border=0><\/A> <A class=navlink ';
  Str += 'href="javascript:location=location.pathname+\'?_template='+printTemplate+'\';" target="">'+strings.print_label+'<\/A> ';
  document.write( Str );
  document.close();
}

/*
function signout(url) {
  var exp = new Date();
  exp.setYear(70);
  var exp_str = "expires=" + exp.toGMTString() + "; domain=.oracle.com; path=/;";
  document.cookie = "ORA_UCM_VER=;" + exp_str;
  document.cookie = "ORA_UCM_INFO=;" + exp_str;
  document.cookie = "ORA_UCM_SRVC=;" + exp_str;
  top.location = url;
}
*/
function signout(url)
{

  //rUrl = window.location.href; 
  rUrl = encodeURIComponent(window.location.href); 
  window.location="http://login.oracle.com/sso/logout?p_done_url="+rUrl; //stage only
}
function getCookieData(label) {
  var labelLen = label.length
  var cLen = document.cookie.length
  var i = 0
  var cEnd
  while (i < cLen) {
    var j=i+labelLen;
    if (document.cookie.substring(i,j) == label) {
      cEnd=document.cookie.indexOf(";",j);
      if (cEnd==-1) {
      	cEnd=document.cookie.length;
      }
      j++;
      var u = unescape(document.cookie.substring(j,cEnd));
      return cleanCookieContent(u);
    }
    i++;
  }
  return "";
}
//Clean out cookie content of scripting characters
function cleanCookieContent(b)
{
var d=(typeof(b)=="undefined")?"NoData":b;
var a="<>";
if(d!="NoData")
{
var c=d.length;
for(i=0;i<c;i++)
{
if(d.substr(i,1)!="."&&a.search(d.substr(i,1))>-1)
{d="Invalid";i=c+1;}
}
}
return d;
}

function getUserInfo() {
  var USER         = new Object();
  this.value_enc   = getCookieData("ORA_UCM_INFO");
  this.array       = this.value_enc.split("~");
  USER.version      = this.array[0];
  USER.guid         = this.array[1];
  USER.firstname    = this.array[2];
  USER.lastname     = this.array[3];
  USER.username     = this.array[4];
  USER.country      = this.array[5];
  USER.language     = this.array[6];
  USER.interest1    = this.array[7];
  USER.interest2    = this.array[8];
  USER.interest3    = this.array[9];
  USER.interest4    = this.array[10];
  USER.ascii        = this.array[11];	
  USER.email        = this.username;
  USER.companyname  = null;
  USER.title        = null;
  USER.characterset = null;
  USER.interest5    = null;
  return USER;
}

// Start of functions used by new Ocom search
function trim(value)
{
  s = new String(value);
  if (value != null) {
    var beginIndex = -1;
    var endIndex   = s.length;

    for (var i = 0; i < s.length; i++)
    {
      if (s.charAt(i) != " ") {
        beginIndex = i;
        break;
      }
    }
    if (beginIndex == -1) return "";

    for (var j = s.length -1; j > beginIndex; j--) {
      if (s.charAt(j) != " ") {
        endIndex = j;
        break;
      }
    }
    if (endIndex != s.length) return s.substring(beginIndex, endIndex);
    else return s.charAt(beginIndex);
  }
  return value;
}

// Special Characters validation
// Added isSplCharsExist() on 25th April by Girish
var splCharsInKeyword;
function isSplCharsExist(value) {
    splCharsInKeyword = '';
   //  var iChars = "!#$%^*()+=[]\\;{}|:<>?";
   var iChars = "";
        for (var i = 0; i < value.length; i++) {
                if (iChars.indexOf(value.charAt(i)) != -1) {   
                idx = iChars.indexOf(value.charAt(i));
                splCharsInKeyword +=  iChars.charAt(idx) + ' ';

               }
     }
     
     if (splCharsInKeyword == '' || trim(splCharsInKeyword).length == 0 ) {
        return false;
      } 
     else {
        return true;
     }
}

// Serach validation Global value
// Modified isNotNull() on 25th April by Girish
var isUserInput = false ;
function isNotNull(value)
{

	  if (value == null || trim(value).length == 0  || value == "search site" || value =="Search OPN" || isUserInput == false )
	  {
	    alert('You did not enter a search term.  Please try again.');
	    document.searchForm.q.value='';
	    isUserInput = true;
	    document.searchForm.q.focus();
	    return false;
	  }
	  else if (isSplCharsExist(value)) {
	  
		   if (trim(splCharsInKeyword).length > 1 ) {
		     splCharsInKeyword = 'Special characters ' + splCharsInKeyword + ' are ';
		   }
		   else {
		     splCharsInKeyword = 'Special character ' + splCharsInKeyword + ' is ';
		   }
		   
	   alert ( splCharsInKeyword +"not allowed.\n");
	   document.searchForm.q.focus();
	   return false;
	  }
	 else
	 return true;
}


function checkSearch( value )
{
  if ( document.searchForm && document.searchForm.datasetId && typeof( langDataSetId ) != 'undefined' && langDataSetId )
  {
    document.searchForm.datasetId.value = langDataSetId;
  }

  if ( value == null || trim(value).length == 0 )
  {
    alert('Please enter the keyword(s) to search for');
    return false;
  }
  else 
  {
    if ( document.searchForm ) document.searchForm.submit();
    return true;
  }
}

function checkGlobalSearch( value )
{
  return checkSearch( value );
}


// Start of OSES JS Form Check for Broadband - Ashish Patel, MAR-24-2006
//var OTNDocsNodeId= "1_374" ;
//var OTNDocsFId= "-1" ;
function setFormValues(form,groupname) {
if(groupname == "Video and Multimedia")
{
form.showSimilarDoc.value = "false";
}else{
form.showSimilarDoc.value = "true";
}
//The following code can be used when a node level search needs to be done. Not used now
//if(groupname == "OTNDocsNode")
//{
// form.nodeid.value = OTNDocsNodeId;
// form.fid.value = OTNDocsFId;
//}
}

//Method which deletes ORASSO_AUTH_HINT cookie
function invalidateAuthCookie()
{
    var oraSSOauthHint = getCookieData("ORASSO_AUTH_HINT");
    if (oraSSOauthHint != null)
    {
       //Delete ORASSO_AUTH_HINT if it exists
       var cookie_invalid_str = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
       document.cookie = cookie_invalid_str;
    }
}

function sso_sign_out() 
     { 
    //rUrl = window.location.href; 
    
    rUrl = escape(window.location.href); 

    
    if ( (rUrl.indexOf('\/secure') != -1) )
       rUrl = 'http://www.oracle.com/partners/'
   		
	invalidateAuthCookie();
	window.location="http://login.oracle.com/sso/logout?p_done_url="+rUrl; //stage only
} 

// Start of Live Edit Code - Dom Lindars, 28-JUL-2004
function GetCookie(sName)
{
  var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++)
  {
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0]) return unescape(aCrumb[1]);
  }
  return null;
}

function LiveEditStatus()
{
  var Str = GetCookie( 'WOCPortalLiveEdit' );
  if ( Str == 'Enabled' || Str == 'Disabled' ) return Str;
  else return 'Not installed';
}

var LiveEdit = true;

function DrawLiveEditToolbar()
{
  if ( typeof( USER ) != 'undefined' && USER && USER.guid && USER.username && USER.username.indexOf( '@oracle.com' ) > -1 )
  {
    var Status = LiveEditStatus();

    if ( LiveEdit && Status == 'Enabled' )
    {
      var path = location.pathname
      path = path.substring(1,path.lastIndexOf("/") + 1);
  
      if ( ( location.host == 'www-portal-stage.oracle.com' || location.host == 'www.oracle.com' ) && 
           path.indexOf( 'wocportal' ) == -1 && path.indexOf( 'pls/' ) == -1 )
      {
        document.write( '<script language=Javascript src="/us/assets/live-edit.js"><\/script>' );
        document.close;
      }
    }
  }
}

// isEmployee() function added by Srinivas Kasam on 29-Mar-2005

function isEmployee()
{
  if ( typeof( USER ) != 'undefined' && USER && USER.guid && USER.username && USER.username.indexOf( '@oracle.com' ) > -1 )
  {
	  return true;
  }
  else 
  {
    return false;
  }
}

// isPartner() function added by Srinivas Kasam on 01-Apr-2005
// This function checks if a user is an ACTIVE member of OPN

function isPartner()
{
  
  var ORA_UCM_SRVC  = new private_ORA_UCM_SRVC(); // private_ORA_UCM_SRVC is defined in lib.js
  var SrvcVal = getCookieData("ORA_UCM_SRVC");
  var StartPosofExpdtSE1;
  var EndPosofExpdtSE1;
  var ExpDTString;
  var FirstHypen;
  var SecondHypen;
  var DatePortion;
  var MonthPortionString;
  var MonthPortion = 1;
  var YearPortion;
  var CurrentDate;
  var CurrentDateMilliSec;
  var ExpiryDate;
  var ExpiryDateMilliSec;

  // Check if SRVC cookie is NULL or OPN service exists or not
  if ( ORA_UCM_SRVC == null || ORA_UCM_SRVC.services.indexOf("/OPN/") == -1 )
  {
	  return false;
  }
  else 
  {

    // Use EXTRA value of OPN service cookie to find out OPN Membership Expiry date

    // Logic to extract EXPIRY DATE from the service cookie -- delimiter 'SE1:'

    StartPosofExpdtSE1 =  SrvcVal.indexOf("SE1:");
    StartPosofExpdtSE1 =  SrvcVal.indexOf("SE1:", StartPosofExpdtSE1 + 1);
    StartPosofExpdtSE1 =  SrvcVal.indexOf("SE1:", StartPosofExpdtSE1 + 1);
    EndPosofExpdtSE1   =  SrvcVal.indexOf("SE1:", StartPosofExpdtSE1 + 1);

    ExpDTString = SrvcVal.substr(StartPosofExpdtSE1 + 4, EndPosofExpdtSE1 - StartPosofExpdtSE1 - 4);

    // Logic to extract Date, Month, Year portions from EXPIRY DATE obtained above -- delimiter is '-'
    FirstHypen = ExpDTString.indexOf("-");
    SecondHypen = ExpDTString.indexOf("-", FirstHypen + 1);

	DatePortion = parseInt(ExpDTString.substr(0, FirstHypen), 10);

    MonthPortionString = ExpDTString.substr(FirstHypen + 1, SecondHypen - FirstHypen - 1);

    switch (MonthPortionString.toUpperCase()) 
    {
      case 'JAN': MonthPortion=1; break
      case 'FEB': MonthPortion=2; break
      case 'MAR': MonthPortion=3; break
      case 'APR': MonthPortion=4; break
      case 'MAY': MonthPortion=5; break
      case 'JUN': MonthPortion=6; break
      case 'JUL': MonthPortion=7; break
      case 'AUG': MonthPortion=8; break
      case 'SEP': MonthPortion=9; break
      case 'OCT': MonthPortion=10; break
      case 'NOV': MonthPortion=11; break
      case 'DEC': MonthPortion=12; break
      default: MonthPortion=1;
    }

    YearPortion = parseInt(ExpDTString.substr(SecondHypen + 1 ), 10);
    if(YearPortion>=90 && YearPortion<=99)
       YearPortion = YearPortion+1900;
    else
      YearPortion = YearPortion+2000;

    // Construct DATE object using the date, month, year portions obtained above also get the number of millisec since EPOCH
	ExpiryDate = new Date(YearPortion, MonthPortion, DatePortion );
    ExpiryDateMilliSec = Date.parse(ExpiryDate);

	// Get current date from client PC and also get the number of millisec since EPOCH
	CurrentDate = new Date();
    CurrentDateMilliSec = Date.parse(CurrentDate);


    // Check if Expiry Date IS LESS THAN Current Date
	if(ExpiryDateMilliSec < CurrentDateMilliSec) 
      return false;
    else
      return true;
 
    }
  }

DrawLiveEditToolbar();
// End of Live Edit Code 

// Peoplesoft Pop up 
function pop(url, wide, tall, xtra) {
	if (xtra == '' || xtra == null) xtra='scrollbars=yes,resizable=yes';
	window.open(url, 'palf', 'width='+wide+',height='+tall+','+xtra);
}
// Peoplesoft Pop up ends

//Functions specific to broadband
//for ebn show the Ondemand window and show Quote window
function showOndemand(showid, cmsid, regsite, bitrate) {
   showLiveViewer(showid,cmsid);
/*
  var v_regsite;
  var v_bitrate;
  if (!bitrate) v_bitrate = 'L150'; else v_bitrate = bitrate;
  if (!regsite) v_regsite = ''; else v_regsite = regsite;
	mywin = SpecialWin("onDemandWin", "popup.on_demand", showid, cmsid, v_regsite, v_bitrate, "N", 405, 675);
*/
}
function showOndemand2(showid, cmsid, src, act, bitrate) {
	showLiveViewer(showid,cmsid);
/*
  var v_bitrate;
  if (!bitrate) v_bitrate = 'L150'; else v_bitrate = bitrate;
	if(src && act) {
	  getUCMCookies();
  	if (!isUCMRegistered()) {
    	if ( confirm("This functionality is available to registered users only.\n\nWould you like to register or sign in?\n\n") ) {
      	top.location = auth_host + "/jsp/reg/register.jsp?src="+src+"&Act="+act+"&nextURL=" + escape(top.location.href);
	    }
  	  return;
	  }
	}
	mywin = SpecialWin("onDemandWin", "popup.on_demand", showid, cmsid, '', v_bitrate, "N", 405, 675);
	*/
}
function showISeminar(showid, cmsid, regsite, bitrate) {
  if(parseInt(showid)<=1546274) {
    var v_regsite;
    var v_bitrate;
    if (!bitrate) v_bitrate = 'L150'; else v_bitrate = bitrate;
    if (!regsite) v_regsite = ''; else v_regsite = regsite;
  	mywin = SpecialWin("ISeminarWin", "iseminar_viewer.ondemand", showid, cmsid, v_regsite, v_bitrate, "Y", 635, 450);
  } else {
    showLiveViewer(showid,cmsid,1180587,6);
  }
}

//Requestor: DMT Team, Implementation: Tech Team, Purpose: The new demo opener.
function showMediaPlayer(id,ref,vWidth,vHeight)
{
 if(!vHeight) vHeight = 675;
    if(!vWidth) vWidth = 1000;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);
    if(screen.width <= 1024) {
      if(screen.width < 924) {
        alert("1024x768 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
// To fix browser related width adjustments  
if(navigator.appName == 'Microsoft Internet Explorer'){
   vWidth = screen.availWidth - 10;}
   else{
   vWidth = screen.availWidth - 8;}
      vHeight = screen.availHeight - 36;
    }
  window.open("http://dynpages-mktas.oracle.com/pls/ebn/swf_viewer.load?p_shows_id="+id+"&p_referred="+ref+"&p_width="+vWidth+"&p_height="+vHeight,"demoWin","width="+vWidth+",height="+vHeight+",resizable=0,top="+vTop+",left="+vLeft);
}
 
function showLiveViewer(showid,cmsid,src,act) {
    if(src && act) {
      getUCMCookies();
      if (!isUCMRegistered()) {
        if ( confirm("This functionality is available to registered users only.\n\nWould you like to register or sign in?\n\n") ) {
          top.location = auth_host + "/jsp/reg/register.jsp?src="+src+"&Act="+act+"&nextURL=" + escape(top.location.href);
        }
        return;
      }
    }

    var vWidth = 800;
    var vHeight = 360;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);

    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
    url = "http://www.oracle.com/pls/ebn/live_viewer.main?p_shows_id=" + showid + "&p_referred=" + cmsid;
    window.open(url,"liveWin","top="+vTop+",left="+vLeft+",width="+vWidth+",height="+vHeight+",status=yes,resizable=no");
}

function ISLive(showid, cmsid, regsite, bitrate) {
  var v_regsite;
  var v_bitrate;
  if (!bitrate) v_bitrate = 'L150'; else v_bitrate = bitrate;
  if (!regsite) v_regsite = ''; else v_regsite = regsite;
	mywin = SpecialWin("ISLiveWin", "iseminar_viewer.live", showid, cmsid, v_regsite, v_bitrate, "Y", 635, 600);
}

function SpecialWin(name, purl, showid, cmsid, regsite, bitrate, reg, w, h) {
	mywin=window.open('http://www.oracle.com/pls/ebn/' + purl + '?p_shows_id='+ showid + '&p_regreq=' + reg  + '&p_referred=' + cmsid + '&p_regsite=' + regsite + '&p_win_size=' + bitrate, name,'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=no,width=' + w + ',height=' + h );
	return mywin;
}

function showDemo(id,ref,vWidth,vHeight)
{
    if(!vHeight) vHeight = 600;
    if(!vWidth) vWidth = 800;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);
    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
  window.open("http://www.oracle.com/pls/ebn/swf_viewer.load?p_shows_id="+id+"&p_referred="+ref+"&p_width="+vWidth+"&p_height="+vHeight,"demoWin","width="+vWidth+",height="+vHeight+",resizable=0,top="+vTop+",left="+vLeft);
}

function Shwing(login, page, name, popup_width, popup_height) {
	var test = login.indexOf('%');
	if (test < 0) login = escape(login);
	page = page + '&args=' + login;
	window.open(page, name, 'toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes,width=' + popup_width + ',height=' + popup_height);
}

//This is an additional function to handle certain Broadband shows which work only on Windows Media Player
function showWmViewer(showid,cmsid,src,act) {
    if(src && act) {
      getUCMCookies();
      if (!isUCMRegistered()) {
        if ( confirm("This functionality is available to registered users only.\n\nWould you like to register or sign in?\n\n") ) {
          top.location = auth_host + "/jsp/reg/register.jsp?src="+src+"&Act="+act+"&nextURL=" + escape(top.location.href);
        }
        return;
      }
    }
    var vWidth = 800;
    var vHeight = 360;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);

    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
    url = "http://www.oracle.com/pls/ebn/wm_viewer.main?p_shows_id=" + showid; 
    window.open(url,"WmvWin","top="+vTop+",left="+vLeft+",width="+vWidth+",height="+vHeight+",status=yes,resizable=no");
}

//Functions specific to broadband ends
//Added for net Call by Ashok Chava
function getArg(arg_name, str) {
	var value = "", tmpstr = "";
	if (!str) str = location.search.substring(1);
	if (!str) return value;
	else {
		var tmparray = str.split("&");
		for (i=0; i<tmparray.length; i++) {
			tmpstr = tmparray[i].toUpperCase();
			if (tmpstr.indexOf(arg_name.toUpperCase() + "=") != -1) {
				var tmp2array = tmparray[i].split("=");
				value = tmp2array[1];
			}
		}
	}
	return value;
}
function startNewCallback(ichannel,tmp) {

  var netcall_url = "http://"+location.hostname+"/ocom/groups/public/documents/webcontent/";
  
  var w = 565;
  var h = 515;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "newlauncher.html", "newthankyou.html", "nhthankyou.html", "newerror.html", "5:00 - 17:00 PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html","nhthankyou.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html","nhthankyou.html", "error-fr.html", "9h à8h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {
		
      // build url
     
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][9] +
        "&timezone=" + escape(codes[i][10]) +
        "&ichannel=" + escape(codes[i][1])+
        "&nhresponseurl1=" + netcall_url  + codes[i][8] ;
      
      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}

//Added by Pramesh
// Function Call for Flash iSeminar  : 
//#################showFlashISeminar##############################
function showFlashISeminar(id,ref,vWidth,vHeight)
{
    if(!vHeight) vHeight = 600;
    if(!vWidth) vWidth = 800;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);
    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
  window.open("http://www.oracle.com/pls/ebn/swf_viewer.load?p_shows_id="+id+"&p_referred="+ref+"&p_width="+vWidth+"&p_height="+vHeight,"iSemFlashWin","width="+vWidth+",height="+vHeight+",resizable=0,top="+vTop+",left="+vLeft);
}

// Start OCOM Homepage rotating banner code

    var pageArray = new Array("page1","page2","page3");
    var arrayLength = 3;
    var currentIndex = 0;
    
    /**************************Preloading Images ***************************/
    
    
    
    var theImage = new Array()
    theImage[0] = 'http://www.oracleimg.com/us/assets/featnav_1on_sm.gif'
    theImage[1] = 'http://www.oracleimg.com/us/assets/featnav_2on_sm.gif'
    theImage[2] = 'http://www.oracleimg.com/us/assets/featnav_3on_sm.gif'
    /***********************************************************************/
    currentIndex = Math.floor(Math.random()*3);
    
    var x=0;
    
    //displayImage(currentIndex);
    
    function displayImage(i)
    {
        orimage();
    
        var blockName;
        var node ;
        for(j=0;j<3;j++)
        {
            blockName = pageArray[j];
            node = document.getElementById(blockName);
            node.style.display="none";
        }
    
        blockName = pageArray[i];
        node = document.getElementById(blockName);
        document.getElementById("myImage" + (i+1)).src=theImage[i];
        node.style.display="block";
        currentIndex = i;
    }
    
    function orimage()
    {
    document.getElementById("myImage1").src="http://www.oracleimg.com/us/assets/featnav-1off-sm-174904.gif"
    document.getElementById("myImage2").src="http://www.oracleimg.com/us/assets/featnav_2off_sm.gif"
    document.getElementById("myImage3").src="http://www.oracleimg.com/us/assets/featnav-3off-sm.gif"
    }
	
// End OCOM Homepage rotating banner code
    function printerView()
      {
      if (location.href.search(/\?/) != -1)
        window.open(location.href + '&printOnly=1','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      else
        window.open(location.href + '?printOnly=1','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      }
      
      function mailpage()
      {
      mail_str = "mailto:?subject=Thought this might interest you: " + document.title;
      mail_str += "&body=I thought you might be interested in this: " + document.title;
      mail_str += ". %0A%0AYou can view it at, " + location.href; 
      location.href = mail_str;
      }
function MM_openBrWindow(theURL,winName,features) { //v2.0
      window.open(theURL,winName,features);
      }

function DisplayElements(in_elem_array)
{
	sidelistsize = in_elem_array.length;
}

// Right Navigation Code for OCOM pages
/* Close all sideboxes */
function closeAll()
{
    for (i = 1; i <= sidelistsize; i++)
	{
		if( document.getElementById('sidebody'+i) )
		{
			document.getElementById('sidebody'+i).style.display = 'none';
		}
	}
}
/* Show all sideboxes */
function expandAll()
{
    for (i = 1; i <= sidelistsize; i++)
	{	
		if( document.getElementById('sidebody'+i) )
		{
			document.getElementById('sidebody'+i).style.display = 'block';
		}
    }
}
/* Toggle sidebox visibility */
function toggleSidebox(id) {
    if (document.getElementById(id).style.display == 'none') {
	document.getElementById(id).style.display = 'block';
    } else {
	document.getElementById(id).style.display = 'none';
    }
}

var sidelistsize = 0;
function getElementsByPrefix(inPrefix,inRoot)
{
	var elem_array = new Array;
	if(typeof inRoot.firstChild!= 'undefined')
	{
		var elem = inRoot.firstChild;
			while (elem!= null)
			{
				if(typeof elem.firstChild!= 'undefined')
				{
					elem_array = elem_array.concat(getElementsByPrefix(inPrefix,elem));
				}
				if(typeof elem.id!= 'undefined')
				{
					var reg = new RegExp ( '^'+inPrefix+'.*' );
						if(elem.id.match(reg))
						{
							elem_array.push(elem);
						}
				}
				elem = elem.nextSibling;
			}
	}
	return elem_array;
}


/* Display first right nav. box*/
function DisplayRightNav()
{
		for(i=1;i<=sidelistsize;i++)
		{
			
			if( document.getElementById('sidebody'+i) )
			{
				if (i <=1)
					document.getElementById('sidebody'+i).style.display = 'block';   
				else
					document.getElementById('sidebody'+i).style.display = 'none'; 
					
			}
			else
			{
				sidelistsize = sidelistsize+1;	
			}
		 }
}
//more industries
function indMOv(from) {
	var indarrow = document.getElementById("indarrow"); 
	var x = findPosX(indarrow);
	var y = findPosY(indarrow);

	var indDiv = document.getElementById("indDiv"); 

	if(from=="hp")
	{
		if (navigator.appName == "Netscape")
			y = y-60;
		else
			y = y-60;
	}
	else
	{
			x = x-26;
		if (navigator.appName == "Netscape")
			y = y+14;
		else
			y = y+14;
	}
	indDiv.style.left=x+'px';
	indDiv.style.top=y+'px';
	indDiv.style.position="absolute";
	
  	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indMOu() {
	var indDiv = document.getElementById("indDiv"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement)) {
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else {
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
		}
}

function indPanelMOv() {
	var indDiv = document.getElementById("indDiv"); 
	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indPanelMOu() {
	var indDiv = document.getElementById("indDiv"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement)){
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
			}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
		}
}

//Database
function indMOv2() {
	var indDiv = document.getElementById("indDiv2"); 
  indDiv.style.visibility = "visible";
}

function indMOv2(from) {
	var indarrow2 = document.getElementById("indarrow2"); 
	var x = findPosX(indarrow2);
	var y = findPosY(indarrow2);

	var indDiv = document.getElementById("indDiv2"); 
	if(from=="hp")
	{
		if (navigator.appName == "Netscape")
			y = y-60;
		else
			y = y-62;
	}
	else
	{
		x = x-26;
		if (navigator.appName == "Netscape")
			y = y+14;
		else
			y = y+12;
	}
	indDiv.style.left=x+'px';
	indDiv.style.top=y+'px';
	indDiv.style.position="absolute";
	
  	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indMOu2() {
	var indDiv = document.getElementById("indDiv2"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

function indPanelMOv2() {
	var indDiv = document.getElementById("indDiv2"); 
	indDiv.style.visibility = "visible";
}

function indPanelMOu2() {
	var indDiv = document.getElementById("indDiv2"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

//Middleware
function indMOv3() {
	var indDiv = document.getElementById("indDiv3"); 
  indDiv.style.visibility = "visible";
}

function indMOv3(from) {
	var indarrow3 = document.getElementById("indarrow3"); 
	var x = findPosX(indarrow3);
	var y = findPosY(indarrow3);

	var indDiv = document.getElementById("indDiv3"); 

	if(from=="hp")
	{
		if (navigator.appName == "Netscape")
			y = y-60;
		else
			y = y-62;
	}
	else
	{
		x = x-26;
		if (navigator.appName == "Netscape")
			y = y+14;
		else
			y = y+12;
	}
	indDiv.style.left=x+'px';
	indDiv.style.top=y+'px';
	indDiv.style.position="absolute";
	
  	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indMOu3() {
	var indDiv = document.getElementById("indDiv3"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

function indPanelMOv3() {
	var indDiv = document.getElementById("indDiv3"); 
	indDiv.style.visibility = "visible";
}

function indPanelMOu3() {
	var indDiv = document.getElementById("indDiv3"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

//Hardware
function indMOv4() {
	var indDiv = document.getElementById("indDiv4"); 
  indDiv.style.visibility = "visible";
}

function indMOv4(from) {
	var indarrow4 = document.getElementById("indarrow4"); 
	var x = findPosX(indarrow4);
	var y = findPosY(indarrow4);

	var indDiv = document.getElementById("indDiv4"); 
	if(from=="hp")
	{
		if (navigator.appName == "Netscape")
			y = y-20;
		else
			y = y-22;
	}
	else
	{
		x = x-26;
		if (navigator.appName == "Netscape")
			y = y+14;
		else
			y = y+12;
	}
	indDiv.style.left=x+'px';
	indDiv.style.top=y+'px';
	indDiv.style.position="absolute";
	
  	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indMOu4() {
	var indDiv = document.getElementById("indDiv4"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

function indPanelMOv4() {
	var indDiv = document.getElementById("indDiv4"); 
	indDiv.style.visibility = "visible";
}

function indPanelMOu4() {
	var indDiv = document.getElementById("indDiv4"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

//Business Solutions
function indMOv1() {
	var indDiv = document.getElementById("indDiv1"); 
  indDiv.style.visibility = "visible";
}

function indMOv1(from) {
	var indarrow1 = document.getElementById("indarrow1"); 
	var x = findPosX(indarrow1);
	var y = findPosY(indarrow1);

	var indDiv = document.getElementById("indDiv1"); 

	if(from=="hp")
	{
		if (navigator.appName == "Netscape")
			y = y-60;
		else
			y = y-62;
	}
	else
	{
		x = x-26;
		if (navigator.appName == "Netscape")
			y = y+14;
		else
			y = y+12;
	}
	indDiv.style.left=x+'px';
	indDiv.style.top=y+'px';
	indDiv.style.position="absolute";
	
  	indDiv.style.visibility = "visible";
	indDiv.style.display = "";
}

function indMOu1() {
	var indDiv = document.getElementById("indDiv1"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

function indPanelMOv1() {
	var indDiv = document.getElementById("indDiv1"); 
	indDiv.style.visibility = "visible";
}

function indPanelMOu1() {
	var indDiv = document.getElementById("indDiv1"); 
	if (navigator.appName != "Netscape") {
		if (!indDiv.contains(window.event.toElement))
		{
			indDiv.style.visibility = "hidden";
			indDiv.style.display = "";
		}
	} else
	{
		indDiv.style.visibility = "hidden";
		indDiv.style.display = "";
	}
}

// Function for the Oracle and Sun popup

function oracleAndsun(site,lang){
document.writeln('<div id="panelDiva" style="position:absolute; visibility:hidden; z-index:1000001; WIDTH: 171px; BORDER-RIGHT: #9A9A9A 1px solid; BORDER-TOP: #9A9A9A 1px solid;   BORDER-LEFT: #9A9A9A 1px solid; margin-left:-31px; PADDING: 0;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff" onmouseover=\"mvqMOv(\'panelDiva\',\'oracleandsun\');\" onmouseout=\"mvqMOu(\'panelDiva\');\">\
<table width=100% border=0 cellspacing=0 cellpadding=0>\
<tr valign=top><td class="sngPsta" style="border-bottom:#9a9a9a 1px solid;padding:10px 0px;">\
<div nowrap><a href="http://www.oracle.com/technetwork/indexes/downloads/index.html" onclick="navTrack(\'' + site + '\',\'' + lang + '\',\'header\',\'downloads\');" class="sngPsta">Downloads</a></div> \
<div nowrap><a href="http://www.oracle.com/us/products/servers-storage/index.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'hardware\');" class="sngPsta">Hardware</a></div> \
<div nowrap><a href="http://www.sun.com/software/" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'software\');" class="sngPsta">Software</a></div> \
<div nowrap><a href="http://sunsolve.sun.com/" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'support\');" class="sngPsta">Support</a></div> \
<div nowrap><a href="http://docs.sun.com/" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'documentation\');" class="sngPsta">Documentation</a></div> \
<div nowrap><a href="http://www.oracle.com/global/us/education/sun_select_country.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'training\');" class="sngPsta">Training</a></div></td></tr> \
<tr valign=top><td class="sngPsta" style="border-bottom:#9a9a9a 1px solid;padding:10px 0px;">\
<div nowrap><a href="https://portal.sun.com/portal/dt" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'sun log-in\');" class="sngPsta">Sun Log In</a></div> \
<div nowrap><a href="http://www.sun.com/contact/" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'sun contacts\');" class="sngPsta">Sun Contacts</a></div> \
<div nowrap><a href="http://www.sun.com/sales/index.jsp" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'how to buy\');" class="sngPsta">How to Buy</a></div></td></tr>\
<tr valign=top><td class="sngPsta" style="padding:10px 0px;">\
<div nowrap><a href="http://www.oracle.com/sun/index.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'oracle and sun\');" class="sngPsta">Oracle and Sun</a></div>\
<div nowrap><a href="http://www.sun.com/worldwide/index.jsp" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'sun worldwide\');" class="sngPsta">Sun Worldwide</a></div> \
<div nowrap><a href="/technetwork/index.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'java developers\');" class="sngPsta">Java Developers</a></div> \
<div nowrap><a href="/technetwork/systems/index.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'solaris admins and developers\');" class="sngPsta">Solaris Admins and Developers</a></div> \
<div nowrap><a href="/technetwork/java/index.html" onclick="navTrack(\'' + site+ '\',\'' + lang + '\',\'header\',\'java.com\');" class="sngPsta">Java.com</a></div> \
</td></tr>\
<tr><td></td></tr>\
</table>\
</div>');
}



function positionXY(id,axis)
{
	var el = document.getElementById(id);
	if(axis == 'x' || axis == 'X') {
		var pos = el.offsetLeft;
		el = el.offsetParent;
		while (el != null && el != 'undefined') { if(el.offsetLeft != 'undefined' && el.offsetLeft > 0) {pos += el.offsetLeft ; } el = el.offsetParent; }
	  }
	if(axis == 'y' || axis == 'Y') {
	  var pos = el.offsetTop;
		  el = el.offsetParent;
		  while (el != null && el != 'undefined') { if(el.offsetTop != 'undefined' && el.offsetTop > 0) {pos += el.offsetTop ; } el = el.offsetParent; }
	}
  return (pos);
}

// Oracle Sun popup menu

function panelMOva() {
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "hidden";
	}
	var p = document.getElementById("panelDiva");
	p.style.visibility = "visible";
}

function panelMOua() {
	var p = document.getElementById("panelDiva");
	p.style.visibility = "hidden";
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}

function mvqMOva() {

var el = document.getElementById('oracleandsun');
if ( typeof el != 'undefined' && el != null ) {
	var x = positionXY("oracleandsun", "X");
	var y = positionXY("oracleandsun", "Y");
	var imgWidth = el.width ;
	document.getElementById("panelDiva").style.left = x - (140 - (imgWidth - (navigator.appName!="Netscape" ? 0:2) )) +"px";
	document.getElementById("panelDiva").style.top = y+18 +"px";
}
	
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "hidden";
	}

	var mvqPDiv = document.getElementById("panelDiva"); 
	mvqPDiv.style.visibility = "visible";
}

function mvqMOua() {
	var mvqPDiv = document.getElementById("panelDiva"); 
	mvqPDiv.style.visibility = "hidden";

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}

// Function for the worldwide popup
function worldwideCountries(from){
if(from=="hp")
{
	document.writeln("<div id=\'panelDiv\' style=\"position:absolute; visibility:hidden; left:0px; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A  1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDiv\',\'img1\');\" onmouseout=\"panelMOu(\'panelDiv\');\">");
}

else if (from=="events")
{
         // This is the new line
         document.writeln("<div id=\'evSearch\' style=\"position:absolute; right:10px; top:23px; visibility:hidden; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'evSearch\',\'img1\');\" onmouseout=\"panelMOu(\'evSearch\');\">");
}


else
{	
	document.writeln("<div id=\'panelDiv\' style=\"position:absolute; visibility:hidden; left:0px; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDiv\',\'img1\');\" onmouseout=\"panelMOu(\'panelDiv\');\">");
}
document.writeln("<table width=100%>");
document.writeln("<tr align=left><td colspan=5 class=\'sngPst\' style=\"border-bottom:#cccccc 1px solid\" title=\"select a country region\"><b>SELECT A COUNTRY/REGION<\/b><\/td><\/tr>");
document.writeln("<tr valign=top align=left><td width=20% class=\'sngPst\'>");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ao/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:AFRICA OPERATIONS\';\" id=\"Africa Operations\">Africa Operation<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ARGENTINA\';\" id=\"Argentina\">Argentina<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/au/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:AUSTRALIA\';\" id=\"Australia\">Australia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/at/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:AUSTRIA\';\" id=\"Austria\">Austria<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BAHRAIN\';\" id=\"Bahrain\">Bahrain<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/bangladesh-316183-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BANGLADESH\';\" id=\"Bangladesh\">Bangladesh<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/be/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BELGIUM AND LUXEMBOURG\';\" id=\"Belgium &amp; Luxembourg\">Belgium &amp; Luxembourg<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BELIZE\';\" id=\"Belize\">Belize<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/bhutan-316187-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BHUTAN\';\" id=\"Bhutan\">Bhutan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BOLIVIA\';\" id=\"Bolivia\">Bolivia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ba/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BOSNIA AND HERZEGOVINA\';\" id=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/br/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BRASIL\';\" id=\"Brasil\">Brasil<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/brunei-316198-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BRUNEI\';\" id=\"Brunei\">Brunei<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/bg/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:BULGARIA\';\" id=\"Bulgaria\">Bulgaria<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/cambodia-316193-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CAMBODIA\';\" id=\"Cambodia\">Cambodia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ca-en/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CANADA - ENGLISH\';\" id=\"Canada - English\">Canada - English<\/a><\/div> ");

document.writeln("<div nowrap><a href=\"http://www.oracle.com/ca-fr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CANADA - FRENCH\';\" id=\"Canada - French\">Canada - French<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CHILE\';\" id=\"Chile\">Chile<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/cn/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CHINA\';\" id=\"China\">China<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:COLOMBIA\';\" id=\"Colombia\">Colombia<\/a><\/div> ");
document.writeln("<\/td>");
document.writeln("<td width=20% class=\'sngPst\'>");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:COSTA RICA\';\" id=\"Costa Rica\">Costa Rica<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/hr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CROATIA\';\" id=\"Croatia\">Croatia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/cy/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CYPRUS\';\" id=\"Cyprus\">Cyprus<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/cz/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:CZECH REPUBLIC\';\" id=\"Czech Republic\">Czech Republic<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/dk/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:DENMARK\';\" id=\"Denmark\">Denmark<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ECUADOR\';\" id=\"Ecuador\">Ecuador<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:EGYPT\';\" id=\"Egypt\">Egypt<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ee/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ESTONIA\';\" id=\"Estonia\">Estonia<\/a><\/div> ");

document.writeln("<div nowrap><a href=\"http://www.oracle.com/fi/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:FINLAND\';\" id=\"Finland\">Finland<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/fr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:FRANCE\';\" id=\"France\">France<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/de/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:GERMANY\';\" id=\"Germany\">Germany<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/gr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:GREECE\';\" id=\"Greece\">Greece<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:GAUTEMALA\';\" id=\"Guatemala\">Guatemala<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:HONDURAS\';\" id=\"Honduras\">Honduras<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/hk/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:HONGKONG\';\" id=\"Hong Kong\">Hong Kong<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/hu/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:HUNGARY\';\" id=\"Hungary\">Hungary<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/in/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:INDIA\';\" id=\"India\">India<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:INDONESIA\';\" id=\"Indonesia\">Indonesia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:IRAQ\';\" id=\"Iraq\">Iraq<\/a><\/div>");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ie/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:IRELAND\';\" id=\"Ireland\">Ireland<\/a><\/div>");
document.writeln("<\/td>");
document.writeln("<td width=20% class=\'sngPst\'>");

document.writeln("<div nowrap><a href=\"http://www.oracle.com/il/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ISRAEL\';\" id=\"Israel\">Israel<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/it/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ITALY';\" id=\"Italy\">Italy<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.co.jp/\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:JAPAN\';\" id=\"Japan\">Japan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:JORDAN\';\" id=\"Jordan\">Jordan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ru/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:KAZAKHSTAN\';\" id=\"Kazakhstan\">Kazakhstan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/kr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:KOREA\';\" id=\"Korea\">Korea<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:KUWAIT\';\" id=\"Kuwait\">Kuwait<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/laos-316260-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:LAOS\';\" id=\"Laos\">Laos<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lv/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:LATVIA\';\" id=\"Lativa\">Latvia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:LEBANON\';\" id=\"Lebanon\">Lebanon<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lt/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:LITHUANIA\';\" id=\"Lithuania\">Lithuania<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:MALAYSIA\';\" id=\"Malaysia\">Malaysia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/maldives-316209-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:MALDIVES\';\" id=\"Maldives\">Maldives<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/mt/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:MALTA\';\" id=\"Malta\">Malta<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:MEXICO\';\" id=\"Mexico\">Mexico<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ru/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:MOLDOVA\';\" id=\"Moldova\">Moldova<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/nepal-316215-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:NEPAL\';\" id=\"Nepal\">Nepal<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/nl/\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:NETHERLANDS\';\" id=\"Netherlands\">Netherlands<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/nz/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:NEW ZEALAND\';\" id=\"New Zealand\">New Zealand<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:NICARAGUA\';\" id=\"Nicaragua\">Nicaragua<\/a><\/div> ");
document.writeln("<\/td>");
document.writeln("<td width=20% class=\'sngPst\'>");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/no/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:NORWAY\';\" id=\"Norway\">Norway<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:OMAN\';\" id=\"Oman\">Oman<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/pakistan-316185-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PAKISTAN\';\" id=\"Pakistan\">Pakistan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PANAMA\';\" id=\"Panama\">Panama<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PARAGUAY\';\" id=\"Paraguay\">Paraguay<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PERU\';\" id=\"Peru\">Peru<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PHILLIPINES\';\" id=\"Philippines\">Philippines<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/pl/\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:POLAND\';\" id=\"Poland\">Poland<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/pt/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PORTUGAL\';\" id=\"Portugal\">Portugal<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:PUERTO RICO\';\" id=\"Puerto Rico\">Puerto Rico<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:QATAR\';\" id=\"Qatar\">Qatar<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ro/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:ROMANIA\';\" id=\"Romania\">Romania<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ru/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:RUSSIA\';\" id=\"Russia\">Russia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SAUDI ARABIA\';\" id=\"Saudi Arabia\">Saudi Arabia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/yu/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SERBIA AND MONTENGRO\';\" id=\"Serbia &amp; Montenegro\">Serbia &amp; Montenegro<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SINGAPORE\';\" id=\"Singapore\">Singapore<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/sk/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SLOVAKIA\';\" id=\"Slovakia\">Slovakia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/si/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SLOVENIA\';\" id=\"Slovenia\">Slovenia<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/za/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SOUTH AFRICA\';\" id=\"South Africa\">South Africa<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/es/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SPAIN\';\" id=\"Spain\">Spain<\/a><\/div> ");
document.writeln("<\/td>");
document.writeln("<td width=20% class='sngPst'>");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/srilanka-316250-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SRI LANKA\';\" id=\"Sri Lanka\">Sri Lanka<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/se/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SWEDEN\';\" id=\"Sweden\">Sweden<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ch-fr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SWITZERLAND -- FRENCH\';\" id=\"Switzerland - French\">Switzerland -- French<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ch-de/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:SWITZERLAND -- GERMAN\';\" id=\"Switzerland - German\">Switzerland -- German<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/tw/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:TAIWAN\';\" id=\"Taiwan\">Taiwan<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:THAILAND\';\" id=\"Thailand\">Thailand<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/tr/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:TURKEY\';\" id=\"Turkey\">Turkey<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/ru/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:UKRAINE\';\" id=\"Ukraine\">Ukraine<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:UNITED ARAB EMIRATES\';\" id=\"United Arab Emirates\">United Arab Emirates<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/uk/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:UNITED KINGDOM\';\" id=\"United Kingdom\">United Kingdom<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/us/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:UNITED STATES\';\" id=\"United States\">United States<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:URAGUAY\';\" id=\"Uruguay\">Uruguay<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/lad/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:VENEZUELA\';\"id=\"Venezuela\">Venezuela<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/as/corporate/contact/vietnam-316254-en-as.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:VIETNAM\';\" id=\"Vietnam\">Vietnam<\/a><\/div> ");
document.writeln("<div nowrap><a href=\"http://www.oracle.com/me/index.html\" class=\'sngPst\' onClick=\"s_objectID=\'R8:WW:YEMEN\';\" id=\"Yemen\">Yemen<\/a><\/div> ");
document.writeln("<\/td><\/tr>");
document.writeln("<tr><td><\/td><\/tr>");
document.writeln("<\/table>");
document.writeln("<\/div>");
}

// Worldwide popup menu
function panelMOv() {
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "hidden";
	}
	var p = document.getElementById("panelDiv");
	p.style.visibility = "visible";
}

function panelMOu() {
	var p = document.getElementById("panelDiv");
	p.style.visibility = "hidden";
	
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}

function mvqMOv() {

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "hidden";
	}
	
	var mvqPDiv = document.getElementById("panelDiv"); 
	mvqPDiv.style.visibility = "visible";

}

function mvqMOu() {
	var mvqPDiv = document.getElementById("panelDiv"); 
	mvqPDiv.style.visibility = "hidden";

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}
	function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }
  
  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
  }

//Functions added from lib.js
  
function getUCMCookies() {
	ORA_UCM_VER   = new private_ORA_UCM_VER();
	ORA_UCM_INFO  = new private_ORA_UCM_INFO();
	ORA_UCM_SRVC  = new private_ORA_UCM_SRVC();
}

function private_ORA_UCM_VER () {

	this.value_enc = getCookieData("ORA_UCM_VER");
	this.value     = private_UCMCookieDecode(this.value_enc);
	this.array     = this.value.split("OR1:");

	this.version       = this.array[0];
	this.username      = this.array[1];
	this.username_enc  = this.array[2];
	this.ipaddress     = this.array[3];
	this.ipaddress_enc = this.array[4];
}

function private_UCMCookieDecode(value) {
	var asciiArray = " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.";
	var urldecodevalue = unescape(value);
	var ucmdecodevalue = '';
	var ch = '';

	for (i=0; i<urldecodevalue.length; i++) {

		ch = urldecodevalue.charAt(i)
		j = asciiArray.indexOf(ch);
		if (j != -1) {

			j +=2;
			if( j > ( asciiArray.length - 1 ) ) {
				j -= asciiArray.length;
			}
			ucmdecodevalue += asciiArray.charAt( j );
		}
		else {
			ucmdecodevalue += ch;
		}
	}
	return ucmdecodevalue;
}


function private_ORA_UCM_INFO() {
  this.value_enc   = getCookieData("ORA_UCM_INFO");

  // check for new or old cookie format
  if (this.value_enc.substr(0,4) == "/MP/") { // this is version 1

    this.value       = private_UCMCookieDecode(this.value_enc);
    this.array       = this.value.split("OR1:");

    this.version      = this.array[0];
    this.guid         = this.array[1];
    this.firstname    = this.array[2];
    this.lastname     = this.array[3];
    this.username     = this.array[4];
    this.email        = this.array[5];
    this.companyname  = this.array[6];
    this.title        = this.array[7];
    this.country      = this.array[8];
    this.language     = this.array[9];
    this.characterset = this.array[10];
    this.interest1    = this.array[11];
    this.interest2    = this.array[12];
    this.interest3    = this.array[13];
    this.interest4    = this.array[14];
    this.interest5    = this.array[15];
    // MW: old cookies only support ascii first and last name
    this.ascii		  = 1;


  } else { // this is version 2 or 3

    this.array       = this.value_enc.split("~");

    this.version      = this.array[0];
    this.guid         = this.array[1];
    this.firstname    = this.array[2];
    this.lastname     = this.array[3];
    this.username     = this.array[4];
    this.country      = this.array[5];
    this.language     = this.array[6];
    this.interest1    = this.array[7];
    this.interest2    = this.array[8];
    this.interest3    = this.array[9];
    this.interest4    = this.array[10];
    this.ascii        = this.array[11];
    this.email        = this.username;
    this.companyname  = null;
    this.title        = null;
    this.characterset = null;
    this.interest5    = null;
  }

  // upgrade from v2 to v3
  if (this.version == 2) {

    // interest 1
    var Jobs = new Array();
    Jobs["2"]  = "";
    Jobs["3"]  = "";
    Jobs["-1"] = "";
    Jobs["5"]  = "";
    Jobs["8"]  = "";
    Jobs["0"]  = "";
    Jobs["23"] = 33;
    Jobs["31"] = 22;
    Jobs["4"]  = 33;
    Jobs["1"]  = 33;
    if (Jobs[this.interest1]!=null)
      this.interest1 = Jobs[this.interest1];

    // interest 2
    if (this.interest2!=null) {
      var OldIndustries = this.interest2.split("/");
      for (i=1; i<OldIndustries.length; i++) {
        if (OldIndustries[i]!=null) {
          this.interest2 = OldIndustries[i];
          i = OldIndustries.length;
        }
      }
    }

    var Industries = new Array();
    Industries["1"]  = 40;
    Industries["3"]  = 13;
    Industries["5"]  = 13;
    Industries["7"]  = 40;
    Industries["9"]  = 10;
    Industries["12"] = 34;
    Industries["14"] = 13;
    Industries["15"] = 33;
    Industries["16"] = 34;
    Industries["18"] = 22;
    Industries["19"] = 19;
    Industries["22"] = 41;
    Industries["26"] = 27;
    Industries["28"] = 27;
    Industries["29"] = 10;
    Industries["30"] = 8;
    Industries["32"] = 34;
    Industries["41"] = 13;
    Industries["43"] = 20;
    if (Industries[this.interest2]!=null)
      this.interest2 = Industries[this.interest2];

    // interest 3
    var Relationships = new Array();
    Relationships["0"] = 6;
    Relationships["2"] = "";
    Relationships["3"] = "";
    Relationships["4"] = "";
    if (Relationships[this.interest3]!=null)
      this.interest3 = Relationships[this.interest3];

    var newCookie = [
      "3", this.guid, this.firstname,
      this.lastname, this.username, this.country,
      this.language, this.interest1, this.interest2,
      this.interest3, this.interest4, this.ascii,
      this.email, this.companyname, this.title,
      this.characterset, this.interest5
    ];

    var cookieData = newCookie.join("~");
    setCookie("ORA_UCM_INFO", cookieData, 1, "year");
  }
}
/* Added by Santhosh S on 13th, April 2010 for setCookie function */
//-- Utility function defs
var min = (60 * 1000)
var hour = (60 * min)
var day = (24 * hour)
var year = (365 * day)
/* End */

function setCookie(name, value, time, ttype) {
	var exp = new Date();
	var cookieval = name + "=" + escape(value) + "; ";
	var date = exp.getTime();
	if (time > 0) {
      	if (ttype == "year") exp.setTime(date + (time * year));
		else if (ttype == "day") exp.setTime(date + (time * day));
		else if (ttype == "hour") exp.setTime(date + (time * hour));

      	cookieval += "expires=" + exp.toGMTString();
	}
    cookieval += "; domain=.oracle.com; path=/";
	document.cookie = cookieval;
}

function private_ORA_UCM_SRVC () {
  this.value_enc = getCookieData("ORA_UCM_SRVC");
  var delimiter; // used to do the second split

  // check for encoded version
  if (this.value_enc.substr(0,4) == "/QT/") { // version 1
    this.value     = private_UCMCookieDecode(this.value_enc);
    this.array     = this.value.split("SV1:");
    delimiter = "OR1:";
  } else { // version 2
    this.array     = this.value_enc.split("*");
    delimiter = "~";
  }

  this.version    = this.array[0];
  this.services   = '/';

  for (i=1; i<this.array.length; i++) {
    this.srvc_pieces = this.array[i].split(delimiter);

    eval ('this.' + this.srvc_pieces[0] + ' = new Array();');
    eval ('this.' + this.srvc_pieces[0] + '.code   = this.srvc_pieces[0];');
    eval ('this.' + this.srvc_pieces[0] + '.member = this.srvc_pieces[1];');
    eval ('this.' + this.srvc_pieces[0] + '.admin  = this.srvc_pieces[2];');
    eval ('this.' + this.srvc_pieces[0] + '.role   = this.srvc_pieces[3];');

    if (this.srvc_pieces[4] != null || this.srvc_pieces[4] != "") {
      eval ('this.' + this.srvc_pieces[0] + '.extra  = this.srvc_pieces[4].split("SE1:");');
    }
    this.services += this.srvc_pieces[0];
    this.services += '/';
  }
}
function isUCMRegistered() {

	if (existsUCMCookie("ORA_UCM_INFO") == true) {
		orainfo_exists = true;
		otnnm_exists = true;
		return true;
	}
	return false;
}

function existsUCMCookie(s) {
	if (s == "ORA_UCM_VER") {
		if ((ORA_UCM_VER.version != null) &&
			(ORA_UCM_VER.username != null) &&
			(ORA_UCM_VER.username_enc != null) &&
			(ORA_UCM_VER.ipaddress != null) &&
			(ORA_UCM_VER.ipaddress_enc != null) ) {
		return true;
		}
	}
	else if (s == "ORA_UCM_INFO") {
		//MW: reduce for v2 cookies
		if ((ORA_UCM_INFO.version != null) &&
			(ORA_UCM_INFO.guid != null) &&
			(ORA_UCM_INFO.username != null)) {
		return true;
		}
	}
	else if (s == "ORA_UCM_SRVC") {
		if ((ORA_UCM_SRVC.value != null) &&
			(ORA_UCM_SRVC.version != null)) {
		}
		return true;
	}
	// Added by cyappert
	else if (s == "ORA_UCM_CMP") {
		if ((ORA_UCM_CMP.value != null) &&
			(ORA_UCM_CMP.version != null)) {
		}
		return true;
	}

	return false;
}

//End new functions 

//-- Hipbone to Netcall mapping
//-- contact john burbridge to make changes!!
function startCallback(ichannel,tmp) {

  var netcall_url = "http://www.oracle.com/us/assets/";
  var w = 440;
  var h = 260;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallocomlauncher.html", "netcallocomthankyou.html", "netcallocomerror.html", "5:00am - 5:00pm PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html", "error-fr.html", "9h ? 18h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {

      // build url
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][8] +
        "&timezone=" + escape(codes[i][9]);

      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}


function startNewCallback(ichannel,tmp) {

  var netcall_url = "http://"+location.hostname+"/ocom/groups/public/@ocompublic/documents/webcontent/";
  
  var w = 565;
  var h = 515;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallcrmodlauncher.html", "netcallcrmodthankyou.html", "netcallnhthankyou.html", "netcallcrmoderror.html", "5:00 - 17:00 PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html","nhthankyou.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html","nhthankyou.html", "error-fr.html", "9h ? 18h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {
		
      // build url
     
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][9] +
        "&timezone=" + escape(codes[i][10]) +
        "&ichannel=" + escape(codes[i][1])+
        "&nhresponseurl1=" + netcall_url  + codes[i][8] ;
      
      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}

// new functions to find dynamic position of any given element added.

function positionedOffsetLeft(element) {
    var valueT = 0, valueL = 0;
    do {
      // valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (element.tagName.toUpperCase() == 'BODY') break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);
   return valueL ;
  }
  
  function positionedOffsetTop(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      // valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (element.tagName.toUpperCase() == 'BODY') break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);
    return valueT;
  }

function panelMOv(panelID) {
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
	var p = document.getElementById(panelID);
	p.style.visibility = "visible";
}

function panelMOu(panelID) {
	var p = document.getElementById(panelID);
	p.style.visibility = "hidden";
	
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
}

function mvqMOv(panelID,imgID) {

	var el = document.getElementById(imgID);
	if ( typeof el != 'undefined' && el != null ) {
		var x = positionedOffsetLeft(el);
		var y = positionedOffsetTop(el);
		var imgWidth = el.width ;
		
		if(panelID=="panelDiv")
		{
			document.getElementById(panelID).style.left = x - (413) +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_iam" || panelID=="panelDiv_comm")
		{
			document.getElementById(panelID).style.left = x -195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_iwanto")
		{
			document.getElementById(panelID).style.left = x -195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_search")
		{
			document.getElementById(panelID).style.left = x-5 +"px";
			document.getElementById(panelID).style.top = y - (navigator.appName!="Netscape" ? 0:7) +"px";	
		}
		else if(panelID=="panelDiva")
		{
			document.getElementById(panelID).style.left = x - 35 +"px";
			document.getElementById(panelID).style.top = y+18 +"px";	
		}
		else if(panelID=="OPNpanelDiv")
		{
			document.getElementById(panelID).style.left = x - (navigator.appName!="Netscape" ? 340:365) +"px";
			document.getElementById(panelID).style.top = y + 12+"px";	
		}
		else if(panelID=="panelDivOTN")
		{
			document.getElementById(panelID).style.left = x - 195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";	
		}
		
		  else if(panelID=="evSearch")
		 {
		        document.getElementById(panelID).style.left = x - (413) +"px";
		        document.getElementById(panelID).style.top = y+9 +"px";
                }
				
	}

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
	
	var mvqPDiv = document.getElementById(panelID); 
	mvqPDiv.style.visibility = "visible";

}

function mvqMOu(panelID) {
	var mvqPDiv = document.getElementById(panelID); 
	mvqPDiv.style.visibility = "hidden";

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
}

function OTNWorldwideCountries(lang){
	document.writeln("<div id=\'panelDivOTN\' style=\"position:absolute;left:0px;visibility:hidden; z-index:3700; WIDTH: 180px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDivOTN\',\'img1\'); \" onmouseout=\"panelMOu(\'panelDivOTN\');\">");
	document.writeln("<table width=100%>");
	document.writeln("<tr align=left><td  class=\'sngPst\' style=\"border-bottom:#cccccc 1px solid\"><b>SELECT A COUNTRY/REGION<\/b><\/td><\/tr>");
	document.writeln("<tr height='4'><td><!--spacer--></td></tr>");
	document.writeln("<tr valign=top align=left><td  class=\'sngPst\'>");
	document.writeln('<div><a href="http://www.oracle.com/technology/global/lad-pt/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Brazil\');" class="sngPst">Brazil</a></div>');
	document.writeln('<div><a href="/technetwork/cn/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'China\');" class="sngPst">China</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technetwork/jp/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Japan\');" class="sngPst">Japan</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technology/global/kr/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Korea\');" class="sngPst">Korea</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technology/global/lad-es/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Latin America\');" class="sngPst">Latin America</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technology/global/ru/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Russia\');" class="sngPst">Russia</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technetwork/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'United States\');" class="sngPst">United States</a></div>');
	document.writeln("</td></tr>");
	document.writeln("<tr><td></td></tr>");
	document.writeln("</table>");
	document.writeln("</div>");
}

///////////////////////////Start of Brightcove LightBox Function//////////////////////////////////////////////////
function bcvideolightbox(video_Id,player_Id,description_Id)
{
var vp_videoId=video_Id;	
var vp_playerId=player_Id;
var vp_descriptionId=description_Id;
if (vp_playerId == "chromeless-noshare")
{
			vp_playerId = "602202985001";
} 
else if (vp_playerId == "chromeless-share")
{
			vp_playerId = "72925238001";
} 	
var vpObject='<object id="myExperienceLightBox" class="BrightcoveExperience">'+
	         '<param value="#FFFFFF" name="bgcolor" />'+
	         '<param value="640" name="width" />'+
			 '<param value="360" name="height" />'+
			 '<param value="'+vp_playerId+'" name="playerID" />'+
			 '<param value="1460825906" name="publisherID" />'+
        	 '<param name="autoStart" value="true" />'+
			 '<param value="true" name="isVid" />'+
			 '<param value="true" name="isUI" />'+
			 '<param name="dynamicStreaming" value="true" />'+
        	 '<param name="@videoPlayer" value="'+vp_videoId+'" />'+	
			 '<param name="wmode" value="transparent" />'+
             '</object>';
var vpFooter=document.getElementById(vp_descriptionId).innerHTML;
var vpcode='<div style="padding-left:15px; padding-right:15px;background-color:#E5E5E5;"><div class="bcvideoclose"><a style="cursor:pointer;" onclick="showclose();"><img src="http://www.oracleimg.com/us/assets/lightbox-close-button.gif" width="12" height="12" border="0" alt="Close"></a></div>'+
	        vpObject+'<div class="videotext" style="padding-top:10px;padding-bottom:20px;">'+vpFooter+'</div></div>';

document.getElementById('bcVideoPlayer').innerHTML =  vpcode;

brightcove.createExperiences();
isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 

document.getElementById('bcVideoPlayer').style.display="block";
document.getElementById('lightbox_brightcove').style.display="block";


}
function showclose()
{
   document.getElementById('bcVideoPlayer').innerHTML =  '';
	isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 					
		document.getElementById('lightbox_brightcove').style.display="none";
		document.getElementById('bcVideoPlayer').style.display="none";
                if(isIE6)
		document.searchForm.group.style.visibility = "visible"; 
}
//////////////////////////End of Brightcove LightBox Function//////////////////////////////////////////////////

/////////////////////////Start of Brightcove Embedded Function//////////////////////////////////////////////////////
	function getUrlVars()
	{
	    var vars = [], hash;
	    var url = window.location.href;
	    if (url.indexOf("#") != -1) url = url.split("#")[0];
	    var hashes = url.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}
	
	function embedBrightcoveQS()
	{
		var q = getUrlVars();
		bcvideoembed(q["bctid"], q["chrome"], q["size"], q["autoplay"]);
	}
	
	function bcvideoembed(bctid, chrome, size, autoplay)
	{
		if (bctid == undefined)
		{
			document.write('This request does not contain a "bctid" value.');
			return;
		}
		
		// Video size
		var width;
		var height;
		var rnd = Math.random();
		
		switch (size) {
			case "medium":
				width = 480;
				height = 270;
				break;
			case "large":
				width = 960;
				height = 540;
				break;
			default:
				// Default is medium
				case "medium":
				width = 480;
				height = 270;
		}
		
		// Chrome, defaults to chromeless-share
		if (chrome == "chromeless-noshare")
		{
			playerID = "602202985001";
		}
		else if (chrome == "chromeless-share")
		{
			playerID = "72925238001";
		}
		
		
		// Autoplay, default is false
		if (autoplay == undefined) autoplay = false;
		
		document.write('<object id="myExperience' + rnd + '" class="BrightcoveExperience">\
			<param name="@videoPlayer" value="' + bctid + '">\
			<param name="bgcolor" value="#000000" />\
			<param name="width" value="' + width + '" />\
			<param name="height" value="' + height + '" />\
			<param name="playerID" value="' + playerID + '" />\
			<param name="publisherID" value="1460825906"/>\
			<param name="isVid" value="true" />\
			<param name="isUI" value="true" />\
			<param name="dynamicStreaming" value="true">\
			<param name="autoStart" value="' + autoplay + '">\
			<param name="wmode" value="transparent" />\
			</object>');
	}
/////////////////////////End of Brightcove Embedded Function//////////////////////////////////////////////////////

	

