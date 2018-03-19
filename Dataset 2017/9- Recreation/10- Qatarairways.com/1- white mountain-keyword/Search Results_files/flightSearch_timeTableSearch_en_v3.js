var isHomepage=false;
var dateminLength = 2;  
var pagePath = window.location.pathname;
if((pagePath.indexOf("homepage.page")!=-1) || (pagePath.indexOf("Homepage_new.page")!=-1)){ dateminLength = 3; isHomepage=true;}
var removeformat_regex = "/<(.|\n)*?>/";

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

function FLIGHT_SEARCH() {}
var jsCount = 0;
var setDay=1;
var siteURL=document.URL;
var countryName=siteURL.split("/")[3];
if(countryName=="sa" || countryName=="om" || countryName=="ir")
  setDay=6;
else if(countryName=="us" || countryName=="qa" || countryName=="ye" || countryName=="bh" || countryName=="kw" || countryName=="iq" || countryName=="jo" || countryName=="lb" || countryName=="dz" || countryName=="bd" || countryName=="eg" || countryName=="sd" || countryName=="ae")
setDay=0;
var arrCity = []; 
var temp="";
function parseXml(xml,inputWdg,index)
{
    xml=eval(xml);
	arrCity.pop();
	arrCity.push(xml);
	if(inputWdg =="F")
	{
	FLIGHT_SEARCH.getRelavantToStations();
    FLIGHT_SEARCH.buildToStations(); 
	$("#ToTemp").val("");
	$("#autocompleteTo,#ToTemp").val("");
    $("#toStation").val("");
    $("#ToTemp").focus();
	return true;
	}
	else if(inputWdg =="T")
	{
	TTABLE_SEARCH.getRelavanttoStationTimeTables();
    TTABLE_SEARCH.buildtoStationTimeTables();
	$("#autocompleteToTimeTable,#TToTemp").val("");
    $("#toStationTimeTable").val("");
	$("#TToTemp").val("");
    $("#TToTemp").focus();
	return true;
	}
	else if(inputWdg =="M")
	{
	MULTICITY_FLIGHT_SEARCH.getRelavantToStations(index);
    MULTICITY_FLIGHT_SEARCH.buildToStations(index);
	 $("#autocompleteMultiTo" + (index + 1)).val("");
     $("#toStation" + (index + 1)).val("");
	 $("#MToTemp" + (index+1)).val("");
	 $("#MToTemp" + (index + 1)).focus();
	 $("#MToTemp" + (index + 1)).css("background-color","#F3F3ED");     
	 $(".MToBooking" + (index + 1)).css("background-color","#F3F3ED"); 
	return true;
	}
	else if(inputWdg =="MN")
	{
	MULTICITY_FLIGHT_SEARCH_JULY.getRelavantToStations(index);
    MULTICITY_FLIGHT_SEARCH_JULY.buildToStations(index);
	 $("#autocompleteMultiTo" + (index + 1)).val("");
     $("#toStation" + (index + 1)).val("");
	 $("#MToTemp" + (index+1)).val("");
	 $("#MToTemp" + (index + 1)).focus();
	 $("#MToTemp" + (index + 1)).css("background-color","#F3F3ED");     
	 $(".MToBooking" + (index + 1)).css("background-color","#F3F3ED"); 
	return true;
	}
}
function mappingLoad(from,inputwidget,index){
	var ajaxRequest;  
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	    ajaxRequest.onreadystatechange = function(){
		 if(ajaxRequest.readyState == 4){
		 temp=ajaxRequest.responseText;
         parseXml(temp,inputwidget,index);
          
		}
	}
	var queryString = "?qs=" + from;
	ajaxRequest.open("GET", "/script/IBE/routes.php" + queryString, true);
	ajaxRequest.send(null); 
}

FLIGHT_SEARCH.intMaxAdults = 9;
FLIGHT_SEARCH.intMaxChild = 8;
FLIGHT_SEARCH.blnAdultReq = "Y";
FLIGHT_SEARCH.strDDays = "0";
FLIGHT_SEARCH.strRDays = "0";
FLIGHT_SEARCH.strSysDate = "";
FLIGHT_SEARCH.strTripType = "";
FLIGHT_SEARCH.strMinPur = " 0^ 0";
FLIGHT_SEARCH.blnBuildReturn = false;
FLIGHT_SEARCH.depatureDate = "";
FLIGHT_SEARCH.returnDate = "";
var flag = 0;
var hostName = "";
$(document).ready(function () {
// Entry For Tag Edit autocomplete //
    $(".acfb-holder").live("click", function()
	{
	$(this).find("input:text:visible:first").focus();  // tag edit-uday
	$(this).find("input:text:visible:first").css("background-color","#F3F3ED");
	$(this).css("background-color","#F3F3ED");
	});
	$(".acfb-holder").live("keydown", function(e)
	{
	 if (e.keyCode == 8) {
	 $(this).find("input:text:visible:first").css("width","200px");
	 $(this).next("input:hidden").val("").next("input:hidden").val("");
	 $(this).find("li:visible:first").remove();
     return true;
         }
	});

//This function is for global vs local pages title change
var title_title;
if($('.pageTitle h1').length > 0)
{
	//title_title=$('.pageTitle h1').html();
	title_title=$('title').html()
	if($('.pageTitle h1').is(':empty'))
	{
			title_title=$('title').html()
	}
}
else
{
	title_title=$('title').html()
}

var a_test;
a_test=title_title.split("|");
title_title=a_test[0];
title_title2=a_test[0];
var title_pathname = window.location.pathname;
if(title_title.length < 0){
title_title = title_pathname.substring(title_pathname.lastIndexOf("/")+1, title_pathname.indexOf(".page"));
}
var title_LN1 = title_pathname.split("/"); 
var title_url = title_LN1[2] + '_' +title_LN1[1];

 if(title_LN1[2].match(/page$/)) 
	  {
	   	title_url = title_LN1[1] + '_sites';
	  }
	 if(title_LN1[2].substring(0,6)!="english" && !title_LN1[2].match(/page$/) && (title_LN1[2]!="en") && (title_LN1[2]!="pl") && (title_LN1[2]!="hr") && (title_LN1[2]!="ka"))
	  {
	    if(title_LN1[1]!="sites")
	    	title_url = title_LN1[1] + '_sites';
		else
			title_url = title_LN1[2] + '_sites';
	  }

var title_count = new Array();
title_count['en_au']= 'Qatar Airways Australia';
title_count['en_bh']= 'Qatar Airways Bahrain';
title_count['en_bd']= 'Qatar Airways Bangladesh';
title_count['en_be']= 'Qatar Airways Belgium';
title_count['en_bg']= 'Qatar Airways Bulgaria';
title_count['en_ca']= 'Qatar Airways Canada';
title_count['en_kh']= 'Qatar Airways Cambodia';
title_count['en_cy']= 'Qatar Airways Cyprus';
title_count['en_dk']= 'Qatar Airways Denmark';
title_count['en_eg']= 'Qatar Airways Egypt';
title_count['en_global']= 'Qatar Airways Global';
title_count['en_hk']= 'Qatar Airways Hongkong';
title_count['en_hu']= 'Qatar Airways Hungary';
title_count['en_in']= 'Qatar Airways India';
title_count['en_id']= 'Qatar Airways Indonesia';
title_count['en_jo']= 'Qatar Airways Jordan';
title_count['en_ke']= 'Qatar Airways Kenya';
title_count['en_kw']= 'Qatar Airways Kuwait';
title_count['en_lb']= 'Qatar Airways lebanon';
title_count['en_my']= 'Qatar Airways malaysia';
title_count['en_mv']= 'Qatar Airways maldives';
title_count['en_ng']= 'Qatar Airways nigeria';
title_count['en_no']= 'Qatar Airways norway';
title_count['no_no']= 'Qatar Airways norway';
title_count['en_om']= 'Qatar Airways oman';
title_count['en_pk']= 'Qatar Airways Pakistan';
title_count['en_ph']= 'Qatar Airways philippines';
title_count['en_qa']= 'Qatar Airways qatar';
title_count['en_ro']= 'Qatar Airways romania';
title_count['en_rw']= 'Qatar Airways rwanda';
title_count['en_sa']= 'Qatar Airways saudi arabia';
title_count['en_sg']= 'Qatar Airways singapore';
title_count['en_za']= 'Qatar Airways south africa';
title_count['en_sd']= 'Qatar Airways sudan';
title_count['en_se']= 'Qatar Airways sweden';
title_count['en_tz']= 'Qatar Airways tanzania';
title_count['en_th']= 'Qatar Airways thailand';
title_count['th_th']= 'Qatar Airways thailand';
title_count['en_ug']= 'Qatar Airways uganda';
title_count['en_ae']= 'Qatar Airways United arab emirates';
title_count['en_uk']= 'Qatar Airways united kingdom';
title_count['en_us']= 'Qatar Airways united states';
title_count['en_vn']= 'Qatar Airways vietnam';
title_count['en_iq']= 'Qatar Airways iraq';
title_count['en_ir']= 'Qatar Airways iran';
title_count['en_np']= 'Qatar Airways nepal';
title_count['en_lk']= 'Qatar Airways sri lanka';
title_count['en_ye']= 'Qatar Airways yemen';
title_count['en_mm']= 'Qatar Airways myanmar';
title_count['pl_pl']= 'Qatar Airways Polska';
title_count['hr_hr']= 'Qatar Airways Hrvatska';
title_count['ka_ge']= 'Qatar Airways Georgia';
title_count['ro_ro']= 'Qatar Airways romania';
title_count['sr_rs']= 'Qatar Airways serbia';
  

title_count['english_australia_sites']= 'Qatar Airways Australia';
title_count['english_bahrain_sites']= 'Qatar Airways Bahrain';
title_count['english_bangladesh_sites']= 'Qatar Airways Bangladesh';
title_count['english_belgium_sites']= 'Qatar Airways Belgium';
title_count['english_bulgaria_sites']= 'Qatar Airways Bulgaria';
title_count['english_cambodia_sites']= 'Qatar Airways Cambodia';
title_count['english_cyprus_sites']= 'Qatar Airways Cyprus';
title_count['english_canada_sites']= 'Qatar Airways Canada';
title_count['english_denmark_sites']= 'Qatar Airways Denmark';
title_count['english_egypt_sites']= 'Qatar Airways Egypt';
title_count['english_global_sites']= 'Qatar Airways Global';
title_count['english_hongkong_sites']= 'Qatar Airways Hongkong';
title_count['english_hungary_sites']= 'Qatar Airways Hungary';
title_count['english_india_sites']= 'Qatar Airways India';
title_count['english_indonesia_sites']= 'Qatar Airways Indonesia';
title_count['english_jordan_sites']= 'Qatar Airways Jordan';
title_count['english_kenya_sites']= 'Qatar Airways Kenya';
title_count['english_kuwait_sites']= 'Qatar Airways Kuwait';
title_count['english_lebanon_sites']= 'Qatar Airways lebanon';
title_count['english_malaysia_sites']= 'Qatar Airways malaysia';
title_count['english_maldives_sites']= 'Qatar Airways maldives';
title_count['english_nigeria_sites']= 'Qatar Airways nigeria';
title_count['english_norway_sites']= 'Qatar Airways norway';
title_count['norway_norwegian_sites']= 'Qatar Airways norway';
title_count['english_oman_sites']= 'Qatar Airways oman';
title_count['english_pakistan_sites']= 'Qatar Airways Pakistan';
title_count['english_philippines_sites']= 'Qatar Airways philippines';
title_count['english_qatar_sites']= 'Qatar Airways qatar';
title_count['english_romania_sites']= 'Qatar Airways romania';
title_count['english_rwanda_sites']= 'Qatar Airways rwanda';
title_count['english_saudi_arabia_sites']= 'Qatar Airways saudi arabia';
title_count['english_singapore_sites']= 'Qatar Airways singapore';
title_count['english_south_africa_sites']= 'Qatar Airways south africa';
title_count['english_sudan_sites']= 'Qatar Airways sudan';
title_count['english_sweden_sites']= 'Qatar Airways sweden';
title_count['english_tanzania_sites']= 'Qatar Airways tanzania';
title_count['english_thailand_sites']= 'Qatar Airways thailand';
title_count['thai_thailand_sites']= 'Qatar Airways thailand';
title_count['english_uganda_sites']= 'Qatar Airways uganda';
title_count['english_united_arab_emirates_sites']= 'Qatar Airways United arab emirates';
title_count['english_united_kingdom_sites']= 'Qatar Airways united kingdom';
title_count['english_united_states_sites']= 'Qatar Airways united states';
title_count['english_vietnam_sites']= 'Qatar Airways vietnam';
title_count['english_nepal_sites']= 'Qatar Airways nepal';
title_count['english_iran_sites']= 'Qatar Airways iran';
title_count['english_iraq_sites']= 'Qatar Airways iraq';
title_count['english_yemen_sites']= 'Qatar Airways yemen';
title_count['english_sri_lanka_sites']= 'Qatar Airways sri lanka';
title_count['english_myanmar_sites']= 'Qatar Airways myanmar';
title_count['polish_poland_sites']= 'Qatar Airways Polska';
title_count['croatian_croatia_sites']= 'Qatar Airways Hrvatska';
title_count['georgian_georgia_sites']= 'Qatar Airways Georgia';
title_count['romanian_romania_sites']= 'Qatar Airways romania';
title_count['serbian_serbia_sites']= 'Qatar Airways serbia';


var title_lang = title_count[title_url];

	title_title = title_title.replace(/_/g," "); 
	//title_title = title_title.replace(/-/g," ");
	title_title = title_title.replace(/&amp;/g,"&");
	//title_title = title_title + ' |  ' + title_count[title_url];
	//title_title = title_title.toLowerCase();//.replace(/\b[a-z]/g, function(letter) {  alert(letter);  return letter.toUpperCase(); }); 
	//title_title=replaceChar(title_title);
	//title_title=title_title.substring(0,1).toUpperCase() + title_title.substring(1,title_title.length);

	//	document.title=title_title;
	if(!isHomepage){ document.title = setPageTitle2(title_title, "y");}
	//document.title = setPageTitle2(title_title, "y");

});
/*Newsletter popvoer script for travel pages */
  $(".nav2 ul li").live("click", function()
  {
	//setInterval(travelpopover, 1000);
	createCookie("travelpage" ,"travelpage" , 20);
  });
   $("#head2").live("click", function()
  {
	//setInterval(travelpopover, 1000);
	createCookie("travelpage" ,"travelpage" , 20);
  });
/*Newsletter popvoer script for travel pages */
$(".darkpurple_tabs").live("click", function()
{
 placeholdeFix();
});

	function replaceChar(title_up_space)
	{
		var title_len=title_up_space.length;
		var i = 0 ;
		for (i=0; i<=title_len; i++) 
		{
			var txt_space = (title_up_space.substring(i,i+1));
			if ( txt_space == " " ) {
			title_up_space=title_up_space.substring(0,i+1) + title_up_space.substring(i+1,i+2).toUpperCase() + title_up_space.substring(i+2,title_len);
			}
		}
		return title_up_space;

	}
	/* End of the function for global vs local pages title change */
FLIGHT_SEARCH.initialize = function () {
   // dynamicScript("/script/IBE/routes.js");
    //$("#ToTemp").val("type/select destination city");
	$("#FromTemp").attr("placeholder", "City or airport");
	$("#ToTemp").attr("placeholder", "City or airport");
	$("#swaplocation").attr("aria-label", "Swap departure and arrival destinations");
    //$("#autocompleteFrom").focus();
    FLIGHT_SEARCH.buildFromStations();
    FLIGHT_SEARCH.buildPax();
    FLIGHT_SEARCH.setCalenderDate();
    FLIGHT_SEARCH.formEvent();
    FLIGHT_SEARCH.buildDatePicker();
};
FLIGHT_SEARCH.getRelavantToStations = function () {
var strValue = $("#fromStation").val();
    arrBFToCity = new Array();
    var arrCnt = "";
    var arrRoute = "";
    var arrI = 0;
    var desc = "";
	
    $.each(arrCity, function (index, value) {
	  
        arrCnt = aCnt_1[value[0]];
	
        if (typeof arrCnt != "undefined") {
            var strTempDStation = arrCnt.split("^");
	
            if (strTempDStation[6] == strValue) {
                if ((value[1] != "") && (value[1].indexOf(",") != -1)) {
                    var strRoutes = value[1].split(",");
					
					
                    $.each(strRoutes, function (index, strRouteElem) {
                        var arrRouteElem = strRouteElem.split("/");
                        arrRoute = aCnt_1[arrRouteElem[0]];
						   
                        if (typeof arrRoute != "undefined") {
             var strTempStation = arrRoute.split("^");
							
					
							if(strTempStation.length == 8){/*aCnt_1 not Re-create in first load time, becoz length is Different*/
								desc = strTempStation[2]+"|";
								desc += strTempStation[3]+"|";
								desc += strTempStation[4];
								desccode=strTempStation[5]+"|"+strTempStation[6]+"|"+strTempStation[7];
								/*Create arrBFFromCity array with specific Locals*/
								arrBFToCity[arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc+"|" +desccode));
							}else{
								desc = strTempStation[2]+"|";
								desc += strTempStation[7]+"|";
								/*Create arrBFFromCity array with specific Locals*/
								arrBFToCity[arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc));
							}
							desc = "";
							arrI++;
                        }
                    });
                }
                return false;
            }
        }
    });
};
FLIGHT_SEARCH.getRelavantFromStations = function () {
    var desc = "";
    var arrCnt = "";
    var arrI = 0;
    $.each(arrCity1, function (index, value) {
        arrCnt = aCnt_1[value];
        if (typeof arrCnt != "undefined") {
             var strTempStation = arrCnt.split("^");
          //  aCnt_1[value] = strTempStation[0] + "^" + strTempStation[1] + "^^^" + value[2] + "^" + value[3] + "^" + strTempStation[2] + "^" + strTempStation[3] + "^" + strTempStation[4];
            desc = strTempStation[2] + "|";
            desc += strTempStation[3] + "|";
            desc += strTempStation[4];
			desccode=strTempStation[5]+"|"+strTempStation[6]+"|"+strTempStation[7];

            arrBFFromCity[arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc+"|"+desccode));

            desc = "";
            arrI++;
        }
    });
};
$(document).click(function(e) {

  if(!$(this).hasClass("ui-autocomplete")){ 
   //alert("dfg");
    $('ul.ui-autocomplete').hide();
  }
});
function placeholdeFix(){
(function ($) {
	 $.support.placeholder = ('placeholder' in document.createElement('input'));
 })(jQuery);

 //fix for IE7 and IE8
 $(function () {
	 if (!$.support.placeholder) {
		 $("[placeholder]").focus(function () {
			 if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
		 }).blur(function () {
			 if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
		 }).blur();

		 $("[placeholder]").parents("form").submit(function () {
			 $(this).find('[placeholder]').each(function() {
				 if ($(this).val() == $(this).attr("placeholder")) {
					 $(this).val("");
				 }
			 });
		 });
	 }
 });
} 
// Surya : auto complete new  source select function 
function processSelect(request, response,inputArray){
  var term = $.ui.autocomplete.escapeRegex(request.term)
             
                , endssWithQRMatcher = new RegExp("qr"+"$", "i")
                , endssWithQR = $.grep(inputArray, function(value) {
				   
                    return endssWithQRMatcher.test(value);
                })
                            
            
                , wordStartMatcher = new RegExp("^"+term+"\|"+"\\|"+term+"\|"+"\\/"+term+"\|"+"\\*"+term,"i")
                , wordStart = $.grep(endssWithQR, function (value) {
                    return     wordStartMatcher.test(value);
                })
            
                    , fullwordMatcher = new RegExp("\\b"+term +"\\|"+"\\b","i")
                , fullword = $.grep(wordStart, function(value) {
                    
                    return fullwordMatcher.test(value);
                })
                , startsWithMatcher = new RegExp("^"+term, "i")
                , startsWith = $.grep(endssWithQR, function(value) {
                    return $.inArray(value, fullword) < 0 && startsWithMatcher.test(value);
                })
            
                , containsMatcher = new RegExp(term, "i")
                , contains = $.grep(wordStart, function (value) {
				//alert("before return: "+containsMatcher.test(value)+" : "+value);
                    return  $.inArray(value, fullword) < 0 &&  $.inArray(value, startsWith) < 0 &&
                        containsMatcher.test(value);
                })
             , endssWithONEWORLDMatcher = new RegExp("ow"+"$", "i")
                , endssWithONEWORLD = $.grep(inputArray, function(value) {
                    return endssWithONEWORLDMatcher.test(value);
                })
            
                , startsWithMatcherONE = new RegExp("^"+term+"\|"+"\\|"+term,"i")
                , startsWithONE = $.grep(endssWithONEWORLD, function(value) {
                    return startsWithMatcher.test(value) && $.inArray(value, endssWithQR) < 0 ;
                })
              
            
                , wordStartMatcherONE = new RegExp("^"+term+"\|"+"\\|"+term+"\|"+"\\/"+term+"\|"+"\\*"+term,"i")
                , wordStartONE = $.grep(endssWithONEWORLD, function (value) {
                    return   wordStartMatcherONE.test(value) && $.inArray(value, endssWithQR) < 0;
                })
            
                    , fullwordMatcherONE = new RegExp("\\b"+ term +"\\|"+"\\b","i")
                , fullwordONE = $.grep(wordStartONE, function(value) {
                    
                    return fullwordMatcherONE.test(value) ;
                })
            
            
                , containsMatcherONE = new RegExp(term, "i")
                , containsONE = $.grep(wordStartONE, function (value) {
                    return  $.inArray(value, fullwordONE) < 0 &&
                        containsMatcherONE.test(value) ;
                })
                   , endssWithCODESHAREMatcher = new RegExp("cs"+"$", "i")
                , endssWithCODESHARE = $.grep(inputArray, function(value) {
                    return endssWithCODESHAREMatcher.test(value);
                })
            
                , startsWithMatcherCODESHARE = new RegExp("^"+term, "i")
                , startsWithCODESHARE = $.grep(endssWithCODESHARE, function(value) {
                    return startsWithMatcher.test(value) && $.inArray(value, endssWithQR) < 0 ;
                })
              
            
                , wordStartMatcherCODESHARE = new RegExp("^"+term+"\|"+"\\|"+term+"\|"+"\\/"+term+"\|"+"\\*"+term,"i")
                , wordStartCODESHARE = $.grep(endssWithCODESHARE, function (value) {
                    return   wordStartMatcherCODESHARE.test(value) && $.inArray(value, endssWithQR) < 0;
                })
            
                    , fullwordMatcherCODESHARE = new RegExp("\\b"+ term +"\\|"+"\\b","i")
                , fullwordCODESHARE = $.grep(wordStartCODESHARE, function(value) {
                    
                    return fullwordMatcherCODESHARE.test(value) ;
                })
            
            
                , containsMatcherCODESHARE = new RegExp(term, "i")
                , containsCODESHARE = $.grep(wordStartCODESHARE, function (value) {
                    return  $.inArray(value, fullwordCODESHARE) < 0 &&
                        containsMatcherCODESHARE.test(value) ;
                })
            
               , endssWithOFFLINEMatcher = new RegExp("ol"+"$", "i")
                , endssWithOFFLINE = $.grep(inputArray, function(value) {
                    return endssWithOFFLINEMatcher.test(value);
                })
            
                , startsWithMatcherOFFLINE = new RegExp("^"+term, "i")
                , startsWithOFFLINE = $.grep(endssWithOFFLINE, function(value) {
                    return startsWithMatcher.test(value) && $.inArray(value, endssWithQR) < 0 ;
                })
              
            
                , wordStartMatcherOFFLINE = new RegExp("^"+term+"\|"+"\\|"+term+"\|"+"\\/"+term+"\|"+"\\*"+term,"i")
                , wordStartOFFLINE = $.grep(endssWithOFFLINE, function (value) {
                    return   wordStartMatcherOFFLINE.test(value) && $.inArray(value, endssWithQR) < 0;
                })
            
                    , fullwordMatcherOFFLINE = new RegExp("\\b"+ term +"\\|"+"\\b","i")
                , fullwordOFFLINE = $.grep(wordStartOFFLINE, function(value) {
                    
                    return fullwordMatcherOFFLINE.test(value) ;
                })
            
            
                , containsMatcherOFFLINE = new RegExp(term, "i")
                , containsOFFLINE = $.grep(wordStartOFFLINE, function (value) {
                    return  $.inArray(value, fullwordOFFLINE) < 0 &&
                        containsMatcherOFFLINE.test(value) ;
                });
             
          var partial=contains.sort();
          
		
         var partialONE=containsONE.sort();
             var partialCODESHARE=containsCODESHARE.sort();
         var partialOFFLINE=containsOFFLINE.sort();   
      	
		var responseString=fullword.concat(startsWith.concat(partial.concat(fullwordONE.concat(partialONE.concat(fullwordCODESHARE.concat(partialCODESHARE.concat(fullwordOFFLINE.concat(partialOFFLINE))))))));
		var ResultArray = [];
		if(responseString.length>0)
		{
		for(var i=0;i<responseString.length;i++)
		{
		var changeFormatSrc=responseString[i].toString();
		var changeFormatArr=changeFormatSrc.split("|");
		var cityName=changeFormatArr[0].trim();
		var cityCode=changeFormatArr[1].trim();
		var airportName=changeFormatArr[2].trim();
		var airportCode=changeFormatArr[3].trim();
		var countryName=changeFormatArr[4].trim();
		var ibeCode=changeFormatArr[6];
		var dispVal="";
		var postDisplay="";
		if(cityName!="")
		{
			var cityNameArray=cityName.split("*");
         cityName=cityNameArray[0];
            dispVal=cityName;
          postDisplay= cityName; 
			 if(ibeCode!="")
		  {
              postDisplay+=" ("+ibeCode+")";
                 
		  }
           
		  if(cityCode!="")
		  {
              dispVal+=" ("+cityCode+")";
                 
		  }
		}
		if(airportName!="")
		{
		  dispVal+=" - "+airportName;
		  if(airportCode!="")
		  {
		  dispVal+=" ("+airportCode+")";
		  }
		}
		if(countryName!="")
		{
		  dispVal+=" - "+countryName;
		}
		ResultArray.push({
            label: dispVal,
			post:postDisplay,
            value: ibeCode
        });
		}
		}
		else
		{
		ResultArray.push({
            label: "There are no cities matching your request.",
			post:"",
            value: ""
        });
		}
		return ResultArray;
   
}
var teenagerEnabeld =false;
var toteengerenabled=false;
var ukIatas = ["BFS","BHD","BHX","BRS","CWL","EDI","EXT","GCI","GLA","INV","IOM","JER","LBA","LHR","MAN","MME","NCL","NQY","NWI","SOU","ABZ"];
FLIGHT_SEARCH.buildFromStations = function () {
 
    $(".FromBooking .ibeFrom").autocomplete({
        width: 220,
      	minLength:3,
	autoFocus: false,
        source: function (request, response) {
		 var ResArray=processSelect(request, response,arrBFFromCity);
		 response(ResArray);
		//console.log(ResArray.length);
		if(ResArray.length==1){
			if(ResArray[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray.length+ " result is available"
			}
			$("#FromTemp").prev().html(msg);
		}else{
			$("#FromTemp").prev().html(ResArray.length+ " results are available");
		}
		
        },
		
		select:function(event,ui, data, formatted) {
		event.preventDefault();
		var dispVal=ui.item.post;
		var arrS = ui.item.value;
		var labelval = ui.item.label;
		var displcity = dispVal.split("(")[0];
		if(arrS!=""){

	          $("#fromStation").val(arrS);
		$("#autocompleteFrom").val($.trim(displcity));
	 //*** Added by uday on 13-03-2013 for autocomplete with tagedit ** //
		$("#FromTemp").val("");
		var f="acfb-data";
		var v = '<li class="'+f+'"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img alt="clear" class="p" id="remFrom" title="clear" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".FromBooking li").remove();
         $(this).before(v);
            }
		//$("#FromTemp").css("width","0px");
              //$("#FromTemp").addClass("remheight");
              $("#FromTemp").css("display","none");
			  $("#ToTemp").css("display","block");
		$("#ToTemp").css("width","200px");
		$(".ToBooking li").remove();
		$("#ToTemp").val("");
		$("#toStation").val("");
		$("#autocompleteTo,#ToTemp").val("");
		$(".ui-autocomplete").hide();
		if(isHomepage){
			if(ukIatas.indexOf(arrS)!=-1){
				$(".teenagerdiv").show();
				$("#teenager").attr("disabled",false);
				$(".adltspan").text(adultAgeWTeenage);
				teenagerEnabeld=true;
				$("#ukteenager").val("uko");
				$("#uladults").trigger("click");
				addAdltOpts("");
				toteengerenabled=false;
			}else{
				$(".teenagerdiv").hide();
				$("#teenager").attr("disabled",true);
				$(".adltspan").text(adultAgeWOTeenage);
				$("#ukteenager").val("notuk");
				teenagerEnabeld=false;
				$("#uladults").trigger("click");
				//removeAdltOpts();
			}
		}else{
			if(ukIatas.indexOf(arrS)!=-1){
				$(".teenlabel,.adltTd").show();
				$("#teenager").attr("disabled",false);
				$(".adultlabel span").text($("#adultAgeWTeenage").val());
				teenagerEnabeld=true;
				$("#ukteenager").val("uko");
				addAdltOptstab("");
				toteengerenabled=false;
			}else{
				$(".teenlabel,.adltTd").hide();
				$("#teenager").attr("disabled",true);
				$(".adultlabel span").text($("#adultAgeWOTeenage").val());
				$("#ukteenager").val("notuk");
				teenagerEnabeld=false;				
			}

		}
		
		$("#remFrom").live("click", function()
			{
			if(!toteengerenabled){
				$("#teenager").attr("disabled",true);
				if(isHomepage){
					removeAdltOpts("");
					$(".teenagerdiv").hide();
				}else{
					removeAdltOptstab("");
					$(".teenlabel,.adltTd").hide();
				}
			}
                     $("#FromTemp").css("display","block");
			$("#FromTemp").val("");
                     
			$("#FromTemp").css("width","200px");
               //     $("#FromTemp").css("height","20px");
			$("#fromStation").val("");
		    $("#autocompleteFrom,#FromTemp").val("");
			$(".FromBooking li").remove();
			$(".ToBooking li").remove();
                     $("#ToTemp").css("display","block");
			$("#ToTemp").val("");
			$("#toStation").val("");
			// arrBFToCity = [];
			$("#autocompleteTo,#ToTemp").val("");
			$("#FromTemp").focus();
		}); 
	//****** Tag Edit End  ############# //
		
        mappingLoad(arrS,'F',0);
		
	   $("#FromTemp").css("width","2px");
	   }
   
		},
		focus:function (event,ui){
           event.preventDefault();
		  var dispVal=ui.item.post;
		   var arrS = ui.item.value;
		
		   if(arrS!=""){
		 
		  $("#fromStation").val(arrS);
        $("#autocompleteFrom").val(dispVal);
		if(!isHomepage){
	$("#FromTemp").val(dispVal);
}

		 }
		 else{
		 
		 $("#fromStation").val("");
        $("#autocompleteFrom,#FromTemp").val("");
		 }
       
          },
		 change: function (event, ui){
			  $("#FromTemp").prev().html(" ");
		 }	
	
    });
	
/* 	$(".FromBooking .ibeFrom").live('focusout', function (event) {
		var dispVal=$("#autocompleteFrom").val();
		var val=$("#fromStation").val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		$("#FromTemp").val("");
		var f="acfb-data";
		var v = '<li class="'+f+'"><span>'+dispVal+'</span> <img class="p" id="remFrom" src="/images/iberemove.gif"/></li>';
		
		 $(".FromBooking li").remove();
         $(this).before(v);
     
		$("#FromTemp").css("width","0px");
		$("#ToTemp").css("width","200px");
		$(".ToBooking li").remove();
		$("#ToTemp").val("");
		$("#toStation").val("");
		$("#autocompleteTo").val("");
		
		
		
		$("#remFrom").live("click", function()
			{
			$("#FromTemp").val("");
			$("#FromTemp").css("width","200px");
			$("#fromStation").val("");
		    $("#autocompleteFrom").val("");
			$(".FromBooking li").remove();
			$(".ToBooking li").remove();
                     $("#ToTemp").css("display","block");
			$("#ToTemp").val("");
			$("#toStation").val("");
			$("#autocompleteTo").val("");
			$("#FromTemp").focus();
		}); 
	//****** Tag Edit End  ############# //
		
        mappingLoad(val,'F',0);
		
		}
		
		});  */
 
};
FLIGHT_SEARCH.buildToStations = function () {
    // $(".ToBooking .ibeTo").flushCache();  
	$(".ToBooking .ibeTo").autocomplete("destroy");
	
    $(".ToBooking .ibeTo").autocomplete({
        width: 220,
        max: 30,
	   	minLength:3,
		autoFocus:false,
         source: function (request, response) {
		 	 var ResArray=processSelect(request, response,arrBFToCity);
		 response(ResArray);
           if(ResArray.length==1){
			   if(ResArray[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray.length+ " result is available"
			}
				$("#ToTemp").prev().html(msg);
			}else{
				$("#ToTemp").prev().html(ResArray.length+ " results are available");
			}
        },
		select:function(event,ui, data, formatted) {
		 event.preventDefault();
		
		var arrS = ui.item.value;
		var dispVal=ui.item.post;
		var labelval = ui.item.label;
		var displcity=dispVal.split("(")[0];
		if(arrS!="")
		{
		$("#toStation").val(arrS);
       $("#autocompleteTo").val($.trim(displcity));
        
		//********** Added by uday on 13-03-2013 for autocomplete with tag edit  ******** //
		$("#ToTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img alt="" class="p" id="remTo" title="clear" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".ToBooking li").remove();
              
         $("#ToTemp").before(v);
            }
		//$("#ToTemp").css("width","0px");
            // $("#ToTemp").addClass( "remheight");

               $("#ToTemp").css("display","none");
		$(".ui-autocomplete").hide();
          
             $("#bc_return").focus();
       if(FLIGHT_SEARCH.blnBuildReturn){
		if(isHomepage){
				if(ukIatas.indexOf(arrS)!=-1){
					$(".teenagerdiv").show();
					$("#teenager").attr("disabled",false);
					$(".adltspan").text(adultAgeWTeenage);
					$("#ukteenager").val("ukrd");
					$("#uladults").trigger("click");
					toteengerenabled=true;
					addAdltOpts("");
				}else if(teenagerEnabeld){
					$(".teenagerdiv").show();
					$("#teenager").attr("disabled",false);
					$(".adltspan").text(adultAgeWTeenage);
					$("#ukteenager").val("ukro");
					$("#uladults").trigger("click");
					toteengerenabled=false;
				}else{
					$(".teenagerdiv").hide();
					$("#teenager").attr("disabled",true);
					$(".adltspan").text(adultAgeWOTeenage);
					$("#ukteenager").val("notuk");
					$("#uladults").trigger("click");
					//removeAdltOpts();
					toteengerenabled=false;
				}
			}else{
				if(ukIatas.indexOf(arrS)!=-1){
					$(".teenlabel,.adltTd").show();
					$("#teenager").attr("disabled",false);
					$(".adultlabel span").text($("#adultAgeWTeenage").val());
					$("#ukteenager").val("ukrd");
					toteengerenabled=true;
					addAdltOptstab("");
				}else if(teenagerEnabeld){
					$(".teenlabel,.adltTd").show();
					$("#teenager").attr("disabled",false);
					$(".adultlabel span").text($("#adultAgeWTeenage").val());
					$("#ukteenager").val("ukro");
					toteengerenabled=false;
				}else{
					$(".teenlabel,.adltTd").hide();
					$("#teenager").attr("disabled",true);
					$(".adultlabel span").text($("#adultAgeWOTeenage").val());
					$("#ukteenager").val("notuk");
					toteengerenabled=false;
				}

			}
		}else if(ukIatas.indexOf(arrS)!=-1){ 
			$("#ukteenager").val("ukod");
		}
		$("#remTo").live("click", function()
			{
			if(toteengerenabled){
				$("#teenager").attr("disabled",true);
				if(isHomepage){
					removeAdltOpts("");
					$(".teenagerdiv").hide();
				}else{
					removeAdltOptstab("");
					$(".teenlabel,.adltTd").hide();
				}
			}
                       $("#ToTemp").css("display","block");
			$("#ToTemp").val("");
			$("#ToTemp").css("width","200px");
            //        $("#ToTemp").css("height","20px");
			$("#toStation").val("");
		    $("#autocompleteTo,#ToTemp").val("");
			$(".ToBooking li").remove();
			$("#ToTemp").focus();
		}); 
		
		
		
		}
               $("#ToTemp").css("width","1px");
               //$("#bc_return").focus();
			   $("#departing").focus();
               var focused = $(':focus').attr("id");
               //alert(focused);
		},
		focus:function (event,ui){
           event.preventDefault();
		   var dispVal=ui.item.post;
		    var arrS = ui.item.value;
			if(arrS!="")
			{
			$("#toStation").val(arrS);
			$("#autocompleteTo").val(dispVal);
                      if(!isHomepage){
	                $("#ToTemp").val(dispVal);
                     }
			}         
	},
	change: function (event, ui){
			  $("#ToTemp").prev().html(" ");
		 }
         	
    });
	/* $(".ToBooking .ibeTo").live('focusout', function (event) {
         
		   	var dispVal=$("#autocompleteTo").val();
		var val=$("#toStation").val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		    $("#bc_return").focus()
		//********** Added by uday on 13-03-2013 for autocomplete with tag edit  ******** //
		$("#ToTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <img class="p" id="remTo" src="/images/iberemove.gif"/></li>';
		
		 $(".ToBooking li").remove();
         $(this).before(v);
       
		$("#ToTemp").css("width","1px");
		$("#remTo").live("click", function()
			{
			$("#ToTemp").val("");
			$("#ToTemp").css("width","200px");
			$("#toStation").val("");
		    $("#autocompleteTo").val("");
			$(".ToBooking li").remove();
			$("#ToTemp").focus();
		}); 
		
		}
				 
    }); */
};
FLIGHT_SEARCH.buildPax = function () {
    var intAdultsStart = 1;
    if (FLIGHT_SEARCH.blnAdultReq == "N") {
        intAdultsStart = 0;
    }
    for (var i = 0; i < (Number(FLIGHT_SEARCH.intMaxAdults) + 1); i++) {
        arrAdults[i - intAdultsStart] = new Array();
        arrAdults[i - intAdultsStart][0] = i;
        if (i <= FLIGHT_SEARCH.intMaxChild) {
            arrChild[i] = new Array();
            arrChild[i][0] = i;
        }
    }
    var htmlAdult;
    var htmlChild;
    $.each(arrAdults, function (index, value) {
        htmlAdult += "<option value=" + value + ">" + value + "</option>";
    });
    $.each(arrChild, function (index, value) {
		if((index+intAdultsStart) <=9)
        htmlChild += "<option value=" + value + ">" + value + "</option>";
    });
    $("select#adults").html(htmlAdult);
    $("select#children").html(htmlChild);
    FLIGHT_SEARCH.selAdults_onChange();
};
FLIGHT_SEARCH.selAdults_onChange = function () {
    var intAdults = $("select#adults").val();
	var childcount = Number($("select#children").val());
    arrInfants = new Array();
    for (var i = 0; i <= intAdults; i++) {
        arrInfants[i] = new Array();
        arrInfants[i][0] = i;
    }
    var htmlInfant = "";
    $.each(arrInfants, function (index, value) {
        htmlInfant += "<option value=" + value + ">" + value + "</option>";
    });
    $("select#infants").html(htmlInfant);
	var htmlchild = "";
    for (var i = 0; i+Number(intAdults) <=9; i++) {
	htmlchild += "<option value=" + i + ">" + i + "</option>";
    }
    if(Number(intAdults)==0){
	$("select#children").html(htmlInfant);
    }else{
	$("select#children").html(htmlchild);
    }
   $("select#children>option:eq("+childcount+")").attr('selected', true);
   if($('.adltTd').is(':hidden')==false){
		var intteenager = Number($("#teenager").val());													
		$("select#teenager").html(htmlchild);
		$("select#teenager>option:eq("+intteenager+")").attr('selected', true);
		onChangeTeenOpt("");
   }
};
function onChangeTeenOpt(selectid) {
	var adultcount = $("#"+selectid+"adults").val();
	var childcount = Number($("#"+selectid+"children").val());
	var teencount = $("#"+selectid+"teenager").val();
	var htmlchild = "";
	var lioptschild="";
	var dhtmlchild = "<option value="+0+">"+0+"</option>";
	for (var i = 0; i+Number(adultcount)+Number(teencount) <= 9; i++) {
		htmlchild += "<option value=" + i + ">" + i + "</option>";
	}
	if(Number(adultcount)==0){
		$("select#"+selectid+"children").html(dhtmlchild);
	}else{
		$("select#"+selectid+"children").html(htmlchild);
	}	
	$("select#"+selectid+"children>option:eq("+childcount+")").attr('selected', true);
}
FLIGHT_SEARCH.setCalenderDate = function () {
    var strSysDateDef = FLIGHT_SEARCH.strSysDate;
    var dtSysDate = StringToDate(FLIGHT_SEARCH.strSysDate);
    strSysDateDef = DateToString(addDays(dtSysDate, Number(arrParams[18])));
    strSeleDDay = DateToString(addDays(StringToDate(strSysDateDef), Number(FLIGHT_SEARCH.strDDays)));
    strSeleRDay = DateToString(addDays(StringToDate(strSysDateDef), Number(FLIGHT_SEARCH.strRDays)));
    $("#departing").val(dateChk(strSeleDDay, "DD-MMM-YYYY"));
    $("#returning").val(dateChk(strSeleRDay, "DD-MMM-YYYY"));
};
FLIGHT_SEARCH.buildDatePicker = function () {
    FLIGHT_SEARCH.datePickerFrom.init();
    FLIGHT_SEARCH.datePickerTo.init();
};
FLIGHT_SEARCH.initializeParameter = function () {
    FLIGHT_SEARCH.intMaxAdults = arrParams[3];
    FLIGHT_SEARCH.intMaxChild = arrParams[19];
    FLIGHT_SEARCH.blnAdultReq = arrParams[17];
    FLIGHT_SEARCH.strDDays = "7";
    FLIGHT_SEARCH.strRDays = "14";
    var dtC = new Date();
    var dtCM = dtC.getMonth() + 1;
    var dtCD = dtC.getDate();
    FLIGHT_SEARCH.strSysDate = DateToString(dtC);
    FLIGHT_SEARCH.blnBuildReturn = true;
    FLIGHT_SEARCH.strTripType = "R";
    $("#autocompleteFrom,#FromTemp").val("");
//    $("#ToTemp").val("type/select destination city");  // Tag Edit
 $("#ToTemp").attr("placeholder", "Type/Select destination city");
};
FLIGHT_SEARCH.formEvent = function () {
    $("select#adults").change(function () {
        FLIGHT_SEARCH.selAdults_onChange();
    });
	$("select#teenager").change(function () {
		onChangeTeenOpt("");
    });
    $("#flexibleDateOption").change(function () {
        FLIGHT_SEARCH.selectBestFare();
    });
    $("#bc_oneway").live("click", FLIGHT_SEARCH.bc_oneWayField);
    $("#bc_mb_oneway").live("click", FLIGHT_SEARCH.bc_oneWayField);
    $("#bc_return").live("click", FLIGHT_SEARCH.bc_enableField);
    $("#bc_mb_return").live("click", FLIGHT_SEARCH.bc_enableField);
    $("#multicity").click(MULTICITY_FLIGHT_SEARCH.toggleMultiCity);
    $("#autocompleteFrom").click(function () {
        if ($("#fromStation").val() == "") {
            $("#autocompleteFrom,#FromTemp").val("");
        }
        return false;
    });
    $("#autocompleteTo").click(function () {
        if ($("#toStation").val() == "") {
            $("#autocompleteTo,#ToTemp").val("");
        }
        return false;
    });
};
FLIGHT_SEARCH.selectBestFare = function () {
    if ($("#flexibleDateOption").is(":checked")) {
        $("#selSearchType")[0].selectedIndex = 0;
        $("#selSearchType").attr("disabled", "disabled");
    } else {
        $("#selSearchType").removeAttr("disabled");
    }
};
function removeAdltOptstab(selectid){
	if($("#"+selectid+"adults option[value=0]").length != 0){
		var selectedoption = Number($("#"+selectid+"adults").val())-1;
		var adultopthtml =  $("select#"+selectid+"adults").html();
		if(adultopthtml!=undefined){
			adultopthtml = adultopthtml.replace('undefined', "");
			adultopthtml = adultopthtml.replace('<option value="0">0</option>', "");
			$("select#"+selectid+"adults").html(adultopthtml);
			//$("#ul"+selectid+"adults li:nth-child("+selectedoption+")").trigger("click");
			$("select#"+selectid+"adults>option:eq("+selectedoption+")").attr('selected', true);
		}
	}
if(selectid=="")
 FLIGHT_SEARCH.selAdults_onChange();
else
 MULTICITY_FLIGHT_SEARCH.selAdults_onChange();

}
function addAdltOptstab(selectid){
	if($("#"+selectid+"adults option[value=0]").length == 0){
		var selectedoption = Number($("#"+selectid+"adults").val());
		var adultopthtml =  $("select#"+selectid+"adults").html();
		if(adultopthtml!=undefined){
			adultopthtml = adultopthtml.replace('undefined', "");
			$("select#"+selectid+"adults").prepend("<option value="+0+">"+0+"</option>");	
			//$("#ul"+selectid+"adults li:nth-child("+selectedoption+")").trigger("click");
			$("select#"+selectid+"adults>option:eq("+selectedoption+")").attr('selected', true);
		}
	}
if(selectid=="")
 FLIGHT_SEARCH.selAdults_onChange();
else
 MULTICITY_FLIGHT_SEARCH.selAdults_onChange();	
}
function ibeerrorhandling(messg)
{
if(isHomepage){
messg = messg.replaceAll("</td></tr>",",");
messg = messg.replace(removeformat_regex, "");
messg = messg.replaceAll(",","<br/>");
messg = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+messg+"</p></div></div>";
$('.darkpurple_error').remove();
$("#BookFlight").prepend(messg);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table  class='darkpurple_error'><tbody>"+messg+"</tbody></table>";
$("#bookcont #bc_close").after(err);
$("#bookcont .darkpurple_error").attr("tabindex","0").focus();
}
}
var ibebookingError;
FLIGHT_SEARCH.validate = function () {   // booking
   ibebookingError="";
   $("#bookcont .darkpurple_error").remove();
    if (!FLIGHT_SEARCH.validateEmpty()) {
	    ibeerrorhandling(ibebookingError);
        return false;
    }
    return true;
};
FLIGHT_SEARCH.checkAdultRequired = function (intAdults, strTripType, strDept, strRetu) {
    var strOut = "";
    var strRet = "";
    var blnReturn = false;
    var arrDeptRoute = aCnt_1[strDept].split("^");
    var arrRetuRoute = aCnt_1[strRetu].split("^");
    strOut = arrDeptRoute[4];
    strRet = arrRetuRoute[4];
    if (strOut == "N") {
        if (Number(intAdults) == 0) {
            blnReturn = true;
        }
    }
    if (FLIGHT_SEARCH.strTripType == "R") {
        if ((strRet == "N") || (strOut == "N")) {
            if (Number(intAdults) == 0) {
                blnReturn = true;
            } else {
                blnReturn = false;
            }
        }
    }
    return blnReturn;
};
FLIGHT_SEARCH.validateEmpty = function () {     //v1-uday    

    var validate = true;
    if (($("#autocompleteFrom").val() == "") || ($("#fromStation").val() == "")) {
	    ibebookingError+="<tr class='er'><td>Departure airport is missing</td></tr>";
		$(".FromBooking").css("background-color","#FEFFAF");
		$("#FromTemp").css("background-color","#FEFFAF");
		validate=false;
    }
    if (($("#autocompleteTo").val() == "") || ($("#toStation").val() == "")) {
	ibebookingError+="<tr class='er'><td>Destination airport is missing</td></tr>";
      $(".ToBooking").css("background-color","#FEFFAF");
	  $("#ToTemp").css("background-color","#FEFFAF");
	  validate=false;
    }
	
	if ($("#departing").val() == "") {
 	    ibebookingError+="<tr class='er'><td>Departure date is missing</td></tr>";
		 $('#departing').attr('style', 'background-color: #FEFFAF !important');
		validate=false; 
    }
	if ($("#departing").val() != "") {
		try{
			var data = $.datepicker.parseDate("dd-M-yy", $("#departing").val());
			FLIGHT_SEARCH.depatureDate = $.datepicker.formatDate("dd/mm/yy", data);
		}catch(ed){
			ibebookingError+="<tr class='er'><td>Please enter valid Departure date</td></tr>";
		}
	
    if (!CheckDates(FLIGHT_SEARCH.strSysDate, FLIGHT_SEARCH.depatureDate)) {
	  ibebookingError+="<tr class='er'><td>Departure date cannot be before today's date</td></tr>";
	  $('#departing').attr('style', 'background-color: #FEFFAF !important');
	  validate=false;
	  }
	  }
	if (FLIGHT_SEARCH.blnBuildReturn) {
	 if ($("#returning").val() == "") {
		 ibebookingError+="<tr class='er'><td>Return date is missing</td></tr>";
		 $('#returning').attr('style', 'background-color: #FEFFAF !important');
		 validate=false;
        }
		}
		if ($("#returning").val() != "") {
		if (FLIGHT_SEARCH.blnBuildReturn) {
			try{
				var data = $.datepicker.parseDate("dd-M-yy", $("#returning").val());
				FLIGHT_SEARCH.returnDate = $.datepicker.formatDate("dd/mm/yy", data);
			}catch(er){
				ibebookingError+="<tr class='er'><td>Please enter valid Return date</td></tr>";
			}
        
        if (!CheckDates(FLIGHT_SEARCH.depatureDate, FLIGHT_SEARCH.returnDate)) {
		 ibebookingError+="<tr class='er'><td>Return date cannot be before departure date</td></tr>";
		  $('#returning').attr('style', 'background-color: #FEFFAF !important');
		  validate=false;
        }
       }
	}
	if(($("#fromStation").val() != "") && ($("#toStation").val() !=""))
	{
	 FLIGHT_SEARCH.strMinPur = COMMON_SEARCH.getMinPurchaseTime($("#fromStation").val(), $("#toStation").val());
    var arrMinPur = FLIGHT_SEARCH.strMinPur.split("^");
    //$("#minPurTime").val(FLIGHT_SEARCH.strMinPur);
	$("#minPurTime").val($.trim(arrMinPur[0]));
    var arrDeptRoute = $("#fromStation").val();
    $.each(arrCity, function (index, value) {
        if (arrDeptRoute == (value[0])) {
            $("#addTaxToFare").val(value[3]);
        }
    });
	   /* if (arrMinPur.length > 1) {
        arrMinPur[0] = $.trim(arrMinPur[0]);
        arrMinPur[1] = $.trim(arrMinPur[1]);
        strDeptDate = addHours(StringToDate(FLIGHT_SEARCH.strSysDate), Number(arrMinPur[0]));
      	
		 if (!checkTime(strDeptDate, FLIGHT_SEARCH.depatureDate)) {
            if (arrMinPur[0] < 24) {
			 ibebookingError+="<tr class='er'><td>Departure date must be at least " + (arrMinPur[0]) + " hour(s) in the future</td></tr>";
			 validate=false;
            } else {
			 ibebookingError+="<tr class='er'><td>Departure date must be " + (arrMinPur[0] / 24) + " day(s) in the future</td></tr>";
			 validate=false;
            }
        }				
    }*/
	}
	var intTotPax = Number($("select#adults").val()) + Number($("select#children").val())+ Number($("select#teenager").val());
    if (intTotPax == 0) {
	  ibebookingError+="<tr class='er'><td>Please select the number of passengers.</td></tr>";
	  
	  	$("#adults").css("background-color","#FEFFAF");
	    $("#children").css("background-color","#FEFFAF");
	    $("#infants").css("background-color","#FEFFAF");
		 validate=false;
    }

    if (intTotPax > Number(arrParams[16])) {
	   ibebookingError+="<tr class='er'><td>Total number of Adults and Children cannot exceed nine people</td></tr>";
	   $("#adults").css("background-color","#FEFFAF");
	   $("#children").css("background-color","#FEFFAF");
	   $("#infants").css("background-color","#FEFFAF");
	   validate=false;
     }
	
	if(($("#fromStation").val() != "") && ($("#toStation").val() !=""))
	{
	if (FLIGHT_SEARCH.checkAdultRequired($("select#adults").val(), FLIGHT_SEARCH.strTripType, $("#fromStation").val(), $("#toStation").val())) {
	 ibebookingError+="<tr class='er'><td>Child cannot travel alone.</td></tr>";
	  ibeerrorhandling(ibebookingError);
	 validate=false;
    }
	}
    return validate;
};
$("#FromTemp").live("blur", function () {
  $(".FromBooking").css("background-color","#F3F3ED");
 $("#FromTemp").css("background-color","#F3F3ED");
});

$("#ToTemp").live("blur", function () {
  $(".ToBooking").css("background-color","#F3F3ED");
 $("#ToTemp").css("background-color","#F3F3ED");
});


FLIGHT_SEARCH.showMessage = function (message) {
    $("#FlightDialog").html("<p class='messageBox'>" + message + "</p>");
    $("#FlightDialog").dialog({
        modal: true
    });
};
FLIGHT_SEARCH.showiFrameMessage= function (message) {
    $("#FlightDialog").html("<p class='messageBox'>" + message + "</p>");
	
    $("#FlightDialog").dialog({
        modal: true
    });
	$("div[role='dialog']").css("min-width","625px");
	$("div[role='dialog'] div.ui-dialog-titlebar").css("width","600px");
	$("#FlightDialog").css("width","600px");
	
};
FLIGHT_SEARCH.bc_oneWayField = function () {
    var disable = $("span.returnTDInput").find("#returning");
    if (disable.length == 1) {
        $("#returning").parents("span.returnTDInput").css("display", "none");
        $("#returnTDText").css("display", "none");
        FLIGHT_SEARCH.blnBuildReturn = false;
        FLIGHT_SEARCH.strTripType = "O";
    }
	try {
		if(!isHomepage){
		var ukteenval = $("#ukteenager").val();
		if(ukteenval=="uko" || ukteenval=="ukro" || ukteenval=="ukoo"){
			$("#ukteenager").val("ukoo");
			$("#teenager").attr("disabled",false);		
			$(".teenlabel,.adltTd").show();
			$(".adultlabel span").text($("#adultAgeWTeenage").val());
			try {addAdltOptstab("");}
			catch(err) {}
		}else{
			$(".teenlabel,.adltTd").hide();
			$("#teenager").attr("disabled",true);
			$(".adultlabel span").text($("#adultAgeWOTeenage").val());
			try {removeAdltOptstab("");}
			catch(err) {}
		}
		if(ukteenval=="ukrd"){
			$("#ukteenager").val("ukod");
		}
		}
	}catch(err) {}
};
FLIGHT_SEARCH.bc_enableField = function () {
    if (!($("#returning").parents("span.returnTDInput").is(":visible"))) {
        $("#returning").parents("span.returnTDInput").css("display", "block");
        $("#returnTDText").css("display", "block");
        FLIGHT_SEARCH.blnBuildReturn = true;
        FLIGHT_SEARCH.strTripType = "R";
    }
	try{
	if(!isHomepage){
		var ukteenval = $("#ukteenager").val();
		if(ukteenval!="" && ukteenval!="notuk"){
			$("#teenager").attr("disabled",false);
			$(".teenlabel,.adltTd").show();
			$(".adultlabel span").text($("#adultAgeWTeenage").val());
			try {addAdltOptstab("");}
			catch(err) {}
		}else{
			$(".teenlabel,.adltTd").hide();
			$("#teenager").attr("disabled",true);
			$(".adultlabel span").text($("#adultAgeWOTeenage").val());
			try {removeAdltOptstab("");}
			catch(err) {}
		}
		if(ukteenval=="ukoo"){
			$("#ukteenager").val("ukro");
		}else if(ukteenval=="ukod"){
			$("#ukteenager").val("ukrd");
		}
	}
	}catch(err){}
};
FLIGHT_SEARCH.datePickerFrom = {
    init: function () {
        $("#departing,#TimeTabledeparting").live("click", datePickerFrom);

        function datePickerFrom() {
         /*   $(this).datepicker({
                showOn: "focus",
                numberOfMonths: [1, 2],
                showButtonPanel: true,
                minDate: 0,
                dateFormat: "dd-M-yy",
                maxDate: "+361D",
                onSelect: function (dateText, inst) {
                    var data = $.datepicker.parseDate("dd-M-yy", dateText);
                    var formatedDate = $.datepicker.formatDate("dd/mm/yy", data);
                    strSeleRDay = DateToString(addDays(StringToDate(formatedDate), Number(FLIGHT_SEARCH.strRDays)));
                    $("#returning").val(dateChk(strSeleRDay, "DD-MMM-YYYY"));
                    $("#TimeTablereturning").val(dateChk(strSeleRDay, "DD-MMM-YYYY"));
                }
            }, ("option", "dayNamesMin")).focus(); */
	              $("#TimeTabledeparting").css("background-color","#F3F3ED");
	              $("#departing").css("background-color","#F3F3ED");
	              $.datepicker.setDefaults( $.datepicker.regional["en-GB"] );
                              $(this).datepicker({
                         numberOfMonths: dateminLength,
						closeText: '',
						hideIfNoPrevNext:true,	
						showButtonPanel: true,
						//showAnim:'slide',
						maxDate: '+361D',
						isFlageText:false,
						minDate: new Date(),
						onSelect: function( selectedDate ,inst) {
                      var data = $.datepicker.parseDate("dd-M-yy", selectedDate);
                      var formatedDate = $.datepicker.formatDate("dd/mm/yy", data);
                     strSeleRDay = DateToString(addDays(StringToDate(formatedDate), Number(FLIGHT_SEARCH.strRDays)));
                       $("#ui-datepicker-div").addClass("calenderIE8issue");
                       if(inst.id=="departing"){
							 $( "#returning").datepicker( "option", "minDate", $("#departing").val());
                                            /*browser Return date issue fix  */
                                                 var che=$('#bc_oneway').is(':checked');
							if(!che)
						 window.setTimeout('$("#returning").click()',2);
						 }
						 else {
							 $( "#TimeTablereturning").datepicker( "option", "minDate", $("#TimeTabledeparting").val());
							             var che=$('#timeTableoneway').is(':checked');
                                                                if(!che)
                                                                window.setTimeout('$("#TimeTablereturning").click()',2);
						 }
						
                                          /*end browser Return date issue fix  */



						}
            }, ("option", "dayNamesMin")).focus();
        }
    }
};
FLIGHT_SEARCH.datePickerTo = {
    init: function () {
        $("#returning,#TimeTablereturning").live("click", datePickerTo);

        function datePickerTo() {
            //$(this).datepicker({
              /*  showOn: "focus",
                numberOfMonths: [1, 2],
                showButtonPanel: true,
                minDate: 0,
                dateFormat: "dd-M-yy",
                maxDate: "+12M",
                onSelect: function (dateText, inst) {}
            }, ("option", "dayNamesMin")).focus(); */
			$("#TimeTablereturning").css("background-color","#F3F3ED");  //v4
			 $("#returning").css("background-color","#F3F3ED");
	        var dyvalue=$("#departing").val();
			$("#ui-datepicker-div").addClass("calenderIE8issue");
	    	if(this.id=="TimeTablereturning")
			dyvalue=$("#TimeTabledeparting").val();

			//alert("dyvalue"+dyvalue);
			$.datepicker.setDefaults( $.datepicker.regional["en-GB"] );
            $(this).datepicker({
                showOn: "focus",
				hideIfNoPrevNext:true,	
                 numberOfMonths: dateminLength,
                showButtonPanel: true,
				isFlageText:true,	
                minDate:dyvalue,
                dateFormat: "dd-M-yy",
               maxDate: '+361D',
                onSelect: function (dateText, inst) {}
            }, ("option", "dayNamesMin")).focus();
        }
    }
};
$("#ui-datepicker-div").addClass("calenderIE8issue");
$(".datePicker").live("focus", function () {
    if (flag == 0) {
        flag = 1;
        $(this).trigger("click");
        flag = 0;
    }
});

function UI_Index() {}

function HOLIDAY_SEARCH() {}
UI_Index.searchCriteria = "";

/*  Cookie Section */
function surveyCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
/*  Survey Section   */
function later() {
    surveyCookie('QRSurvey', 'yes', 60)
    $('#survey').dialog('close');
    $(".ui-dialog-titlebar-close").show();
}

function startSurvey() {
    $(".ui-dialog-titlebar-close").show();
    surveyCookie('QRSurvey', 'yes', 60)
    var pageURL = (document.URL).split("/");
    if (pageURL[4] == "ar") {
        window.open('https://surveys.surveyanalytics.com/a/TakeSurvey?id=2778911&mode=languageSelected&externalID=10', 'mywindow', 'width=900,height=800,scrollbars=1')
    } else {
        window.open('https://surveys.surveyanalytics.com/a/TakeSurvey?id=2778911&mode=languageSelected&externalID=0', 'mywindow', 'width=900,height=800,scrollbars=1')
    }
    $('#survey').dialog('close');
}

function survey() {
    var message = '<div style="height:auto;"><p style="font-family:tahoma;font-size: 14px;color:#662046;">Please take 5 minutes to participate in our user survey and tell us how we can improve qatarairways.com. To continue browsing before completing the survey, simply click the link below to open the survey in a new window</p><p style="float:left;margin:5px 35px 10px 0;"><a style="float:right;margin-top:11px;text-decoration: underline;font-size: 18px;" href="javascript:later();"><span style="padding-right:30px !important;font-family:Tahoma, Arial, Helvetica, sans-serif;font-size:12px">No thanks</span></a><a class="btnPurple" href="javascript:startSurvey();"><span>Open survey in a new window</span></a></p></div>';
    if (readCookie('QRSurvey') != "yes") {
        $('#survey').html('<p>' + message + '</p>');
        $('#survey').dialog({
            title: '<h2 style="font:bold 1em futuraMedium;color:#662046">HELP US IMPROVE QATARAIRWAYS.COM</h2>',
            modal: true,
            closeOnEscape: false,
            open: function (event, ui) {
                $(".ui-dialog-titlebar-close").hide();
            }
        });
    }
}
$(document).ready(function () {

		/*$("#search_promotion" ).live("click",function() {    
//alert("search promotion"+document.getElementById("type_list_tab").value);
//alert("country :"+document.getElementById("country2").value);

  if(document.getElementById("type_list_tab").value == "ALL") { 
		                  // onLoad();
					//  alert("<xsl:value-of select="/Properties/Data/Datum[@ID='DetailsPage']" />");
					 // window.location.href="<xsl:value-of select="/Properties/Data/Datum[@ID='DetailsPage']" />";
					 window.location.href="/english_qatar/offers.page";

						   $('#Promcount').slideUp();
					//	$('#book_desc').hide();	
					//	$('#book_det').hide();
						$('#tabOverlay').fadeOut();
					   	$('.offer_tabs li').removeClass('selected');
						$('#informationTable').removeClass('inftbl');
						imgtext_Offer();
						}

  else  { 
	  var dyvalue=document.getElementById("type_list_tab").value;
	  if(dyvalue.indexOf(" ")>0)
	  dyvalue=dyvalue.split(" ")[0]+"_"+dyvalue.split(" ")[1];

	 //var docRoot = '<xsl:text><xsl:value-of select="//Datum[@Name="SiteDocroot"]" disable-output-escaping="yes"/></xsl:text>';
	//  alert(docRoot);
	  window.location.href="/english_qatar/offers.page?countryValue="+document.getElementById("country2").value+"&amp;searchtype="+dyvalue; 
	 
   
     }
	
              
 });*/



    $('.searchHolidays').attr('id', 'searchHolidays');
    $('.searchHolidays').attr('id', 'searchHolidays');
	
    $("a[href='/in/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/qa/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/us/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/sa/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/sg/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/ae/en/plan-my-trip.page']").attr("target", "_blank");
    $("a[href='/uk/en/plan-my-trip.page']").attr("target", "_blank");

    $("#PrivClubRadio").attr("disabled", "disabled");
    $("#PrivClub").attr("disabled", "disabled");
    $("#passwordOrPin").attr("disabled", "disabled");
    $("#BookingRefRadio").attr("checked", "checked");
    var validation = readCookie('memberIDS');
    if (validation) {
        $("input.inputcheckbox:last").attr("checked", "checked")
        $("#loginForm_rhs #memberID:last").val(readCookie('memberIDS'));
        //$("#loginForm_rhs #pinCode:last").val(readCookie('password'));
    } else {
        $("input.inputcheckbox:last").attr("checked", "checked")
        $("#loginForm_rhs #memberID:last").val("");
        $("#loginForm_rhs #pinCode:last").val("");
    }
    // section for Survey
    $("#footer").append('<div id="survey" name="survey"></div>');
    //setTimeout("survey()",30000);
});


;
$("#bookFlight").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();
    }
});
$("#bookFlight").live("click", function (event) {
	var frm=$("#fromStation").val();   // udaya
	if(frm !="")
	{
	mappingLoad(frm,'P',0);
	}
	ibebookingError="";
    var FSobjFrm = getFieldByID("homeSearch");
    if (($("#departing").val() != "") && ($("#returning").val() != "")) {
		try{
			var frm = $.datepicker.parseDate("dd-M-yy", $("#departing").val());
			frm = $.datepicker.formatDate("dd-mm-yy", frm);
		}catch(er1){}
               
        frm = frm.split("-");
        var tempfromdate = (frm[0] + " ^" + frm[1] + "/" + frm[2]);
        try{
			var to = $.datepicker.parseDate("dd-M-yy", $("#returning").val());
		}catch(er2){}
        var temptodate = "";
        if (to != null) {
            to = $.datepicker.formatDate("dd-mm-yy", to);
            to = to.split("-");
            temptodate = (to[0] + " ^" + to[1] + "/" + to[2]);
        } else {
            temptodate = " ^";
        }
    }
    FSobjFrm.target = "_top";
    if (FLIGHT_SEARCH.validate()) {
		var FSURL="";
		$("#dHidden").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#departing").val())));
		//if($("#returning").val() != ""){
		if(FLIGHT_SEARCH.blnBuildReturn){
		$("#rHidden").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#returning").val())));}
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            FSURL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
        } else {
            //objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
			//FSURL = "http://nspuat.qatarairways.com.qa/nsp/views/showBooking.action?selLang=en";
FSURL = "https://booking.qatarairways.com/nsp/views/showBooking.action?selLang=en";

        }
    FSobjFrm.action = FSURL;
//  alert(FSURL);
	FSobjFrm.method = "get";
    FSobjFrm.submit();
    }
});
$("#rhsbookFlight").live("click", function (event) {
    var objFrm = getFieldByID("Rhs-Search");
    if (($("#rhsdeparting").val() != "") && ($("#rhsreturning").val() != "")) {
        var frm = $.datepicker.parseDate("dd-M-yy", $("#rhsdeparting").val());
        frm = $.datepicker.formatDate("dd-mm-yy", frm);
        frm = frm.split("-");
        var tempfromdate = (frm[0] + " ^" + frm[1] + "/" + frm[2]);
        var to = $.datepicker.parseDate("dd-M-yy", $("#rhsreturning").val());
        var temptodate = "";
        if (to != null) {
            to = $.datepicker.formatDate("dd-mm-yy", to);
            to = to.split("-");
            temptodate = (to[0] + " ^" + to[1] + "/" + to[2]);
        } else {
            temptodate = " ^";
        }
    }
    objFrm.target = "_top";
    if (RHS_FSEARCH.validate()) {
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
        } else {
            objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
        }
        objFrm.submit();
    }
});
var slected_value = "BKG_REF";
$("#check_refno").live("click", function (event) {
    $("#FF_NO").val("");
    $("#ETKT_NO").val("");
    slected_value = "BKG_REF";
});
$("#check_freq").live("click", function (event) {
    $("#BKG_REF").val("");
    $("#ETKT_NO").val("");
    slected_value = "FF_NO";
});
$("#check_etic").live("click", function (event) {
    $("#BKG_REF").val("");
    $("#FF_NO").val("");
    slected_value = "ETKT_NO";
});
$("#BKG_REF").live("click", function (event) {
    $("#check_refno").attr("checked", "checked");
    $("#FF_NO").val("");
    $("#ETKT_NO").val("");
    slected_value = "BKG_REF";
});
$("#BKG_REF").live("focus", function (event) {
    $("#check_refno").attr("checked", "checked");
    $("#FF_NO").val("");
    $("#ETKT_NO").val("");
    slected_value = "BKG_REF";
});
$("#FF_NO").live("click", function (event) {
    $("#check_freq").attr("checked", "checked");
    $("#BKG_REF").val("");
    $("#ETKT_NO").val("");
    slected_value = "FF_NO";
});
$("#FF_NO").live("focus", function (event) {
    $("#check_freq").attr("checked", "checked");
    $("#BKG_REF").val("");
    $("#ETKT_NO").val("");
    slected_value = "FF_NO";
});
$("#ETKT_NO").live("click", function (event) {
    $("#check_etic").attr("checked", "checked");
    $("#BKG_REF").val("");
    $("#FF_NO").val("");
    slected_value = "ETKT_NO";
});
$("#ETKT_NO").live("focus", function (event) {
    $("#check_etic").attr("checked", "checked");
    $("#BKG_REF").val("");
    $("#FF_NO").val("");
    slected_value = "ETKT_NO";
});
$("#check_online").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#check_online").click();
    }
});
$("#BKG_REF").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#check_online").click();
    }
});
$("#FF_NO").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#check_online").click();
    }
});
$("#ETKT_NO").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#check_online").click();
    }
});
function chekinError(err)
{
if(isHomepage){
err = err.replaceAll("</td></tr>",",");
err = err.replace(removeformat_regex, "");
err = err.replaceAll(",","<br/>");
err = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+err+"</p></div></div>";
$('.darkpurple_error').remove();
$("#checkincont").prepend(err);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table class='darkpurple_error'><tbody>"+err+"</tbody></table>";
$("#checkincont #check_close").after(err);
$("#checkincont .darkpurple_error").attr("tabindex","0").focus();
}
}
var errorChkin;
$("#check_online").live("click", function (event) {
   errorChkin="";
   $("#checkincont .darkpurple_error").remove();
   $("#FF_NO").css("background-color","#F3F3ED");
   $("#ETKT_NO").css("background-color","#F3F3ED");
   $("#BKG_REF").css("background-color","#F3F3ED");
   $("#check_lastname").css("background-color","#F3F3ED");
    var lstname = "";
    var tempvalue = "";
    var v = "";
    var v1 = "";
	var regex= /^[A-Za-z\s]*$/;
	var pattern = /^\d{13,15}$/;
	//var number = /^\d{9}$/;
	var number = /^[0-9a-zA-Z]+$/;
	var pattn=/^[0-9a-zA-Z]+$/;  
	
    lstname = document.getElementById("check_lastname").value;
   if ((lstname != "") && (regex.test(lstname))) {
        var lname = document.getElementById("hdnLn").value = lstname;
    } else {
      errorChkin+="<tr><td>Numerical characters are not allowed in the Last name field</td></tr>";
	  $("#check_lastname").css("background-color","#FEFFAF");
    }
    tempvalue = document.getElementById(slected_value).value;
	if((tempvalue !="") && (slected_value =="BKG_REF") && (pattn.test(tempvalue)) && (tempvalue.length =="6"))
	{
	v=document.getElementById("hdnFOID").value = slected_value;
    v1=document.getElementById("hdnFOIDNo").value = tempvalue.toUpperCase();
	}else if((tempvalue !="") && (slected_value =="FF_NO") && (number.test(tempvalue)))
	{
	v=document.getElementById("hdnFOID").value = slected_value;
    v1=document.getElementById("hdnFOIDNo").value = tempvalue;
	var temp_fn = $("#check_ffnumberselect").val();
    document.getElementById("hdnFOIDAL").value = temp_fn;
	}
	else if((tempvalue !="") && (slected_value =="ETKT_NO") && (pattern.test(tempvalue)))
	{
	v=document.getElementById("hdnFOID").value = slected_value;
    v1=document.getElementById("hdnFOIDNo").value = tempvalue;
	}
	else
	{
	Error(slected_value);
	if(errorChkin!="")
	{
	chekinError(errorChkin);
	return false;
	}
	}
	
    var a = getFieldByID("frmWci");
    var url = "";
    if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
       // url = "https://wci.qatarairways.com/checkin/wci/web?hdnLang=en&hdnCountry=qa"; 
		url="https://cki.qatarairways.com/cki-web/pages/search.xhtml";
    } else {
	      url="https://cki.qatarairways.com/cki-web/pages/search.xhtml";
        //url = "https://newwci.qatarairways.com/checkin/wci/web?hdnLang=en&hdnCountry=qa"; 
		
    }

    a.method = "POST";
    a.action = url;
    a.submit();

    function Error(e) {
        if (e == "BKG_REF") {
		errorChkin+="<tr><td>Your booking reference number should not be empty.</td></tr>";
        $("#BKG_REF").css("background-color","#FEFFAF");
        } else {
            if (e == "FF_NO") {
			errorChkin+="<tr><td>You have typed an incorrect frequent flyer number. Please try again.</td></tr>";
               $("#FF_NO").css("background-color","#FEFFAF");
            } else {
                if (e == "ETKT_NO") {
				errorChkin+="<tr><td>Your E-ticket number is incorrect. Please make sure it contains 13 numeric characters</td></tr>";
				  $("#ETKT_NO").css("background-color","#FEFFAF");
                 }
            }
        }
	
    }
});

var valueselected = "froute";
$("#nav_status_flroot").live("click", function (event) {
    $("#nav_flightnumber").val("");
    valueselected = "froute";
});
$("#nav_status_flightnumber").live("click", function (event) {
    $("#NavFromTemp").val("");
    $("#NavToTemp").val("");
    valueselected = "fnumber";
    /*For clearing from to airports new*/
    $("#NavFromTemp").css("display","block");
	$("#NavToTemp").css("display","block");
	$("#NavFromTemp").css("width","200px");
	$("#nav_Statusfrom,#NavFromTemp").val("");
	$("#nav_StatusfromValue").val("");
	$(".NavFromBooking li").remove();
	$(".NavToBooking li").remove();
	$("#nav_StatusTo,#NavToTemp").val("");
	$("#nav_StatusToValue").val("");
});
$("#nav_flightnumber").live("click", function (event) {
    $("#nav_status_flightnumber").attr("checked", "checked");
    $("#NavFromTemp").val("");
   $("#NavToTemp").val("");
    valueselected = "fnumber";
});
$("#nav_flightnumber").live("focus", function (event) {
    $("#nav_status_flightnumber").attr("checked", "checked");
    $("#NavFromTemp").val("");
   $("#NavToTemp").val("");
    valueselected = "fnumber";

});
$("#NavFromTemp").live("click", function (event) {
    $("#nav_status_flroot").attr("checked", "checked");
    $("#nav_flightnumber").val("");
    valueselected = "froute";
	$("#NavFromTemp").css("background-color","#F3F3ED");
});
$("#NavFromTemp").live("focus", function (event) {
    $("#nav_status_flroot").attr("checked", "checked");
    $("#nav_flightnumber").val("");
    valueselected = "froute";
	
});
$("#NavToTemp").live("click", function (event) {
    if (($("#NavFromTemp").val() == "")) {
        $("#NavFromTemp").val("");
        valueselected = "froute";
    }
});
$("#NavToTemp").live("keydown", function (event) {
$("#NavToTemp").css("background-color","#F3F3ED");
    if (event.keyCode == 13) {
        //$("#status_searchoffer").click();
        $("#status_date").click();
		
    }
});
$("#nav_flightnumber").live("keydown", function (event) {
 $("#nav_flightnumber").css("background-color","#F3F3ED");
    if (event.keyCode == 13) {
        $("#status_searchoffer").click();
    }
});
$("#status_searchoffer").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#status_searchoffer").click();
    }
});



function fserrorhandling(mesg)
{
if(isHomepage){
mesg = mesg.replaceAll("</td></tr>",",");
mesg = mesg.replace(removeformat_regex, "");
mesg = mesg.replaceAll(",","<br/>");
mesg = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+mesg+"</p></div></div>";
$('.darkpurple_error').remove();
$("#FlightStatus").prepend(mesg);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table  class='darkpurple_error'><tbody>"+mesg+"</tbody></table>";
$("#statuscont #status_close").after(err);
$("#statuscont .darkpurple_error").attr("tabindex","0").focus();
}
}
var fstatuserror;

$("#status_searchoffer,#status_searchofferFN").live("click", function (event) {
 fstatuserror="";
	$("#nav_Statusfrom").css("background-color","#F3F3ED");
	$("#nav_StatusTo").css("background-color","#F3F3ED");
    $("#nav_flightnumber").css("background-color","#F3F3ED");
	 $("#statuscont .darkpurple_error").remove();
    var param = "";
    var FsDate = $("#status_date").val();
	var FsDateFN = $("#status_dateFN").val();
    if (valueselected == "froute") {
        if (($("#nav_Statusfrom").val() == "") || ($("#nav_Statusfrom").val() == "type/select departure city")) {
            fstatuserror+="<tr class='er'><td>Departure airport is missing</td></tr>";
         $("#nav_Statusfrom").css("background-color","#FEFFAF");
        } 
            if (($("#nav_StatusTo").val() == "") || ($("#nav_StatusTo").val() == "type/select destination city")) {
                 fstatuserror+="<tr class='er'><td>Destination airport is missing</td></tr>";
            $("#nav_StatusTo").css("background-color","#FEFFAF");
            }
        
		if(fstatuserror!="")
		{
		fserrorhandling(fstatuserror);
		return false;
		}
        var From = $("#nav_Statusfrom").val();
        var To = $("#nav_StatusTo").val();
        param = "?valueselected=" + valueselected + "&Statusfrom=" + From + "&StatusTo=" + To + "&status_date=" + FsDate;
        FSubmit();
    }
    if (valueselected == "fnumber") {
        if ($("#nav_flightnumber").val() == "") {
            fstatuserror+="<tr class='er'><td>Flight number is missing</td></tr>";
		   $("#nav_flightnumber").css("background-color","#FEFFAF");
		     fserrorhandling(fstatuserror);
        } else {
            var FNo = $("#nav_flightnumber").val();
            param = "?valueselected=" + valueselected + "&flightnumber=" + FNo + "&status_date=" + FsDateFN;
            FSubmit();
        }
    }

    function FSubmit() {
        var FsObj = getFieldByID("NAV");
        FsObj.target = "_top";
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            FsObj.action = "http://fs.qatarairways.com/fltstatus/search" + param;
        } else {
             FsObj.action = "http://fs.qatarairways.com/fltstatus/search" + param;
        }
        FsObj.submit();
    }
});
var selectedvalue = "froutevalue";
$("#nav_status_flrootvalue").live("click", function (event) {
    $("#nav_flightnumber_value").val("");
    selectedvalue = "froutevalue";
});
$("#nav_status_flightnumber_value").live("click", function (event) {
    $("#nav_Statusflightfrom").val("type/select departure city");
    $("#nav_StatusflightTo").val("type/select destination city");
    selectedvalue = "fnumberflight";
});
$("#nav_flightnumber_value").live("click", function (event) {
    $("#nav_status_flightnumber_value").attr("checked", "checked");
    selectedvalue = "fnumberflight";
});
$("#nav_Statusflightfrom").live("click", function (event) {
    $("#nav_status_flrootvalue").attr("checked", "checked");
    selectedvalue = "froutevalue";
});
$("#status_searchoffervalue").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#status_searchoffervalue").click();
    }
});
$("#status_searchoffervalue").live("click", function (event) {
    var param = "";
    var FsDate1 = $("#status_date1").val();
    if (selectedvalue == "froutevalue") {
        if (($("#nav_Statusflightfrom").val() == "") || ($("#nav_Statusflightfrom").val() == "type/select departure city")) {
            FLIGHT_SEARCH.showMessage("Please enter your Departure city/airport");
            return false;
        } else {
            if (($("#nav_StatusflightTo").val() == "") || ($("#nav_StatusflightTo").val() == "type/select destination city")) {
                FLIGHT_SEARCH.showMessage("Please enter your To city/airport");
                return false;
            }
        }
        var From1 = $("#nav_Statusflightfrom").val();
        var To1 = $("#nav_StatusflightTo").val();
        param = "?valueselected=" + selectedvalue + "&Statusfrom=" + From1 + "&StatusTo=" + To1 + "&status_date=" + FsDate1;
        FSubmit1();
    }
    if (selectedvalue == "fnumberflight") {
        if ($("#nav_flightnumber_value").val() == "") {
            FLIGHT_SEARCH.showMessage("Flight Number can not be null!");
            return false;
        } else {
            var FNo1 = $("#nav_flightnumber_value").val();
            param = "?valueselected=" + selectedvalue + "&flightnumber=" + FNo1 + "&status_date=" + FsDate1;
            FSubmit1();
        }
    }

    function FSubmit1() {
        var FsObj1 = getFieldByID("NavFlight");
        FsObj1.target = "_top";
        FsObj1.action = "http://fs.qatarairways.com/fltstatus/search" + param;
        FsObj1.submit();
    }
});
$("#timeTableResult").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#timeTableResult").click();
    }
});
$("#timeTableResult").live("click", function (event) {
    var TTSobjFrm = getFieldByID("timeTableSearch");
    TTSobjFrm.target = "_top";

    if (TTABLE_SEARCH.validate()) {
	if(isHomepage){
		$("#TTdepartingHidden").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#TimeTabledeparting").val())));
		if($("#TimeTablereturning").val() != ""){
		$("#TTreturningHidden").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#TimeTablereturning").val())));}
	}else{
		$("#TimeTabledeparting").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#TimeTabledeparting").val())));
		if($("#TimeTablereturning").val() != ""){
		$("#TimeTablereturning").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#TimeTablereturning").val())));}
	}
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
           	TTSobjFrm.action = "https://booking.qatarairways.com/nsp/views/timeTableServlet.action?selLang=en";
        } else {
            //TTSobjFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=TMETBLE&selLang=en";
		TTSobjFrm.action = "https://booking.qatarairways.com/nsp/views/timeTableServlet.action?selLang=en";
        }
	//var queryString = $('#timeTableSearch').serialize();
	//alert(queryString);
    TTSobjFrm.method = "get";
    TTSobjFrm.submit();
    }
});
function Merrorhandling(messg)
{
if(isHomepage){
messg = messg.replaceAll("</td></tr>",",");
messg = messg.replace(removeformat_regex, "");
messg = messg.replaceAll(",","<br/>");
messg = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+messg+"</p></div></div>";
$('.darkpurple_error').remove();
$("#BookFlight").prepend(messg);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table  class='darkpurple_error'><tbody>"+messg+"</tbody></table>";
$("#bookcont #bc_close").after(err);
$("#bookcont .darkpurple_error").attr("tabindex","0").focus();
}
}
 var MultiError;
$("#frmMultibtn").live("click", function (event) {
MultiError="";
	 $("#bookcont .darkpurple_error").remove();
    var objFrm = getFieldByID("frmMultiSearch");
    objFrm.target = "_top";
    if (MULTICITY_FLIGHT_SEARCH.validate()) {
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MLC&selLang=en";
        } else {
            objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MLC&selLang=en";
        }
        objFrm.method = "post";
        objFrm.submit();
    }
});
$("#submitMMB").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#submitMMB").click();
    }
});
$("#mc_lastname").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#submitMMB").click();
    }
});
$("#pinCode").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#submitMMB").click();
    }
});
$("#mc_opt1").live("click", function (event) {
    var obj = document.forms.manageMyBooking;
    obj.elements.pinCode.value = "";
    obj.elements.memberID.value = "";
    $("#temp").val("1");
	$("#manageMyBooking #memberID").css("background-color","#F3F3ED");
	$("#pinCode").css("background-color","#F3F3ED");
	$("#managecont .darkpurple_error").remove();
});
$("#mc_opt2").live("click", function (event) {
    $("#mc_lastname").val("");
    $("#mc_bookref").val("");
    $("#temp").val("2");
	$("#mc_lastname").css("background-color","#F3F3ED");
	$("#mc_bookref").css("background-color","#F3F3ED");
});
$("#mc_bookref").live("click", function (event) {
    $("#mc_opt1").attr("checked", "checked");
    var obj = document.forms.manageMyBooking;
    obj.elements.pinCode.value = "";
    obj.elements.memberID.value = "";
    $("#temp").val("1");
	$("#manageMyBooking #memberID").css("background-color","#F3F3ED");
	$("#pinCode").css("background-color","#F3F3ED");
});
$("#mc_bookref").live("focus", function (event) {
    $("#mc_opt1").attr("checked", "checked");
    var obj = document.forms.manageMyBooking;
    obj.elements.pinCode.value = "";
    obj.elements.memberID.value = "";
    $("#temp").val("1");
});
$("#memberID").live("click", function (event) {
    $("#mc_opt2").attr("checked", "checked");
    $("#mc_lastname").val("");
    $("#mc_bookref").val("");
    $("#temp").val("2");
	$("#mc_lastname").css("background-color","#F3F3ED");
	$("#mc_bookref").css("background-color","#F3F3ED"); 
});
$("#memberID").live("focus", function (event) {
    $("#mc_opt2").attr("checked", "checked");
    $("#mc_lastname").val("");
    $("#mc_bookref").val("");
    $("#temp").val("2");
});

$("#mc_bookref").live("blur", function (event) {
  $("#mc_bookref").css("background-color","#F3F3ED");
 });

$("#mc_lastname").live("blur", function (event) {
  $("#mc_lastname").css("background-color","#F3F3ED");
 });

$("#manageMyBooking #memberID").live("blur", function (event) {
 $("#manageMyBooking #memberID").css("background-color","#F3F3ED");
 });

 $("#pinCode").live("blur", function (event) {
  $("#pinCode").css("background-color","#F3F3ED");
 });
function errorhandling(divID,messg)
{
if(isHomepage){
messg = messg.replaceAll("</td></tr>",",");
messg = messg.replace(removeformat_regex, "");
messg = messg.replaceAll(",","<br/>");
messg = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+messg+"</p></div></div>";
$('.darkpurple_error').remove();
$("#ManageBooking").prepend(messg);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table  class='darkpurple_error'><tbody>"+Managebooking+"</tbody></table>";
$("#managecont #mc_close").after(err);
$("#managecont .darkpurple_error").attr("tabindex","0").focus(); 
}
}

var Managebooking;
$("#submitMMB").live("click", function (event) {
   
    Managebooking="";      // Errorform handling
    $("#managecont .darkpurple_error").remove();
    var objFrm = getFieldByID("manageMyBooking");
	var v = $("#temp").val();
    if (v == "1") {
        if (validatePNR()) {
            var URL = "";
            if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
                URL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MB&mode=RVWMB&selLang=en";
            } else {
               // URL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MB&mode=RVWMB&selLang=en";				
			   URL = "http://booking.qatarairways.com/nsp/views/manageBooking.action?selLang=en";								
            }
           
            objFrm.action = URL;
			objFrm.method = "get";
            objFrm.submit();
        }
    } else {
        if (validatePRI()) {
            var URL1 = "";
            if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
               URL1 = "http://booking.qatarairways.com/nsp/views/manageBooking.action?selLang=en";
            } else {
                //URL1 = "https://qmiles.qatarairways.com/ffponline/ffp-online/login.jsf";
				 URL1 = "http://booking.qatarairways.com/nsp/views/manageBooking.action?selLang=en";
            }
            objFrm.action = URL1;
			objFrm.method = "get";
            objFrm.submit();
        }
    }
});

function validatePNR() {

    if ($("#mc_bookref").val() == "") {	
        Managebooking+="<tr class='er'><td>Booking reference is missing</td></tr>";
		$("#mc_bookref").css("background-color","#FEFFAF");
    }

    if ($("#mc_lastname").val() == "") {
	   Managebooking+="<tr class='er'><td>Last name is missing</td></tr>";
	   $("#mc_lastname").css("background-color","#FEFFAF");
    }
	var br_ref=$("#mc_bookref").val().toUpperCase();
	$("#mc_bookref").val(br_ref);
	if(Managebooking!="")
	{
	errorhandling("#managecont",Managebooking);
	return false;
	}
    return true;
}

function validatePRI() {
    var obj = document.forms.manageMyBooking;
    var passwrd = obj.elements.pinCode.value;
    var PrivevNo = obj.elements.memberID.value;
    if (PrivevNo == "") {
	    Managebooking+="<tr><td>Privilege Club number is missing</td></tr>";
		$("#manageMyBooking #memberID").css("background-color","#FEFFAF");
    }
    if (passwrd == "") {
	   Managebooking+="<tr><td>Lastname is missing</td></tr>";
		 $("#pinCode").css("background-color","#FEFFAF");
     }
	if(Managebooking!="")
	{
	errorhandling("#managecont",Managebooking);
	return false;
	}
    return true;
}

function getValue(strControlID) {
    var objControl = getFieldByID(strControlID);
    var strType = getFieldType(objControl);
    var strReturn = "";
    switch (strType) {
    case "TEXT":
        strReturn = objControl.value;
        break;
    case "PASSWORD":
        strReturn = objControl.value;
        break;
    case "HIDDEN":
        strReturn = objControl.value;
        break;
    case "TEXTAREA":
        strReturn = objControl.value;
        break;
    case "CHECKBOX":
        objControl = getFieldByName(strControlID);
        var intLength = objControl.length;
        if (intLength > 0) {
            for (var i = 0; i < intLength; i++) {
                if (strReturn != "") {
                    strReturn += ",";
                }
                if (objControl[i].checked) {
                    strReturn += objControl[i].value + "^";
                }
                strReturn += objControl[i].checked;
            }
        }
        break;
    case "RADIO":
        objControl = getFieldByName(strControlID);
        var intLength = objControl.length;
        for (var i = 0; i < intLength; i++) {
            if (objControl[i].checked) {
                if (strReturn != "") {
                    strReturn += ",";
                }
                strReturn += objControl[i].value;
            }
        }
        break;
    case "SELECT-ONE":
        strReturn = objControl.value;
        break;
    case "SELECT-MULTIPLE":
        var intLengrh = objControl.length;
        for (var i = 0; i < intLengrh; i++) {
            if (objControl.options[i].selected) {
                if (strReturn != "") {
                    strReturn += ",";
                }
                strReturn += objControl.options[i].value;
            }
        }
        break;
    }
    return strReturn;
}

function getFieldByName(strControlName) {
    return document.getElementsByName(strControlName);
}

function getFieldByID(strControlID) {
    return document.getElementById(strControlID);
}

function getDisplay(strControlID) {
    var objControl = getFieldByID(strControlID);
    if (objControl.style.display == "block") {
        return true;
    } else {
        return false;
    }
}

function setChecked(strControlID, blnStatus) {
    var objControl = getFieldByID(strControlID);
    var strType = getFieldType(objControl);
    switch (strType) {
    case "CHECKBOX":
        objControl = getFieldByName(strControlID);
        var intLengrh = objControl.length;
        for (var i = 0; i < intLengrh; i++) {
            objControl[i].checked = blnStatus;
        }
        break;
    case "RADIO":
        objControl = getFieldByName(strControlID);
        var intLengrh = objControl.length;
        for (var i = 0; i < intLengrh; i++) {
            objControl[i].checked = blnStatus;
        }
        break;
    }
}

function getChecked(strControlID) {
    var objControl = getFieldByID(strControlID);
    var strType = getFieldType(objControl);
    var blnStatus = false;
    switch (strType) {
    case "CHECKBOX":
        if (objControl.checked) {
            blnStatus = true;
        }
        break;
    }
    return blnStatus;
}

function getVisible(strControlID) {
    var objControl = getFieldByID(strControlID);
    if (objControl.style.visibility == "visible") {
        return true;
    } else {
        return false;
    }
}

function getFieldType(objControl) {
    if (objControl != null) {
        return objControl.type.toUpperCase();
    }
    return objControl;
}

function setField(strControlID, strControlValue) {
    var objControl = getFieldByID(strControlID);
    var strType = getFieldType(objControl);
    switch (strType) {
    case "TEXT":
        objControl.value = strControlValue;
        break;
    case "PASSWORD":
        objControl.value = strControlValue;
        break;
    case "HIDDEN":
        objControl.value = strControlValue;
        break;
    case "TEXTAREA":
        objControl.value = strControlValue;
        break;
    case "CHECKBOX":
        objControl = getFieldByName(strControlID);
        var intLength = objControl.length;
        if (strControlValue != true && strControlValue != false) {
            var arrConValue = strControlValue.split(",");
            var intArrLength = arrConValue.length;
            if (strControlValue == "") {
                for (var i = 0; i < intLength; i++) {
                    objControl[i].checked = false;
                }
            }
            for (var x = 0; x < intArrLength; x++) {
                for (var i = 0; i < intLength; i++) {
                    if (objControl[i].value == arrConValue[x]) {
                        if (!objControl[i].disabled) {
                            objControl[i].checked = true;
                        }
                        break;
                    }
                }
            }
        } else {
            for (var i = 0; i < intLength; i++) {
                if (!objControl[i].disabled) {
                    objControl[i].checked = strControlValue;
                }
            }
        }
        break;
    case "RADIO":
        objControl = getFieldByName(strControlID);
        var intLengrh = objControl.length;
        if (strControlValue == "") {
            for (var i = 0; i < intLengrh; i++) {
                objControl[i].checked = false;
            }
        }
        for (var i = 0; i < intLengrh; i++) {
            if (objControl[i].value == strControlValue) {
                objControl[i].checked = true;
                break;
            }
        }
        break;
    case "SELECT-ONE":
        var intLengrh = objControl.length;
        for (var i = 0; i < intLengrh; i++) {
            if (objControl.options[i].value == strControlValue) {
                objControl.options[i].selected = true;
                break;
            }
        }
        break;
    case "SELECT-MULTIPLE":
        var intLengrh = objControl.length;
        var arrConValue = strControlValue.split(",");
        var intArrLength = arrConValue.length;
        if (strControlValue == "") {
            for (var i = 0; i < intLengrh; i++) {
                objControl.options[i].selected = false;
            }
        }
        for (var x = 0; x < intArrLength; x++) {
            for (var i = 0; i < intLengrh; i++) {
                if (objControl.options[i].value == arrConValue[x]) {
                    objControl.options[i].selected = true;
                    break;
                }
            }
        }
        break;
    }
}
$("#pc_longin").live("click", function (event) {
	//alert('test');
    var URL = $("#submiturl").val();
    var passwrd = $("#HpinCode").val();
    var PrivevNo = $("#memberID").val();
    if ((PrivevNo != "") && (passwrd != "")) {
        document.loginForm.action = URL;
        document.loginForm.submit();
    } else {
        showMessage("Enter your Privilege Club number and Password ");
    }
});

$("#pc_longin1").live("click", function (event) {
	//alert('test');
    var URL = $("#submiturl1").val();
    var passwrd = $("#HpinCode1").val();
    var PrivevNo = $("#memberID1").val();
    if ((PrivevNo != "") && (passwrd != "")) {
        document.loginForm1.action = URL;
        document.loginForm1.submit();
    } else {
        showMessage("Enter your Privilege Club number and Password ");
    }
});

$("#pc_login_rhs").live("click", function (event) {
    var objRHSForm = document.forms.loginForm_rhs;
    var passwrd = objRHSForm.elements.pinCode.value;
    var PrivevNo = objRHSForm.elements.memberID.value;
    var URL_RHS = objRHSForm.elements.submiturl.value;
    if ((PrivevNo != "") && (passwrd != "")) {
        objRHSForm.action = URL_RHS;
        objRHSForm.submit();
    } else {
        showMessage("Enter your Privilege Club number and Password ");
    }
});

function showMessage(message) {
    $("#altmsg1").html("<p class='messageBox'>" + message + "</p>");
    $("#altmsg1").dialog({
        modal: true
    });
}

function google_search(searchresultlandpage) {
    var a = getFieldByID("searchbox_001386561677912454871:vqo-otufzbo");
    var cx = $("#cx").val();
    var cof = $("#cof").val();
    var q = $("#sField").val();
    var url = searchresultlandpage + "?cx=" + cx + "&cof=" + cof + "&q=" + q;
    a.method = "POST";
    a.action = url;
    a.submit();
}
	function validateCountry()
{
var Status="no";
var countryID =geoip_country_code().toLowerCase();  // getting country code
Status="yes";
return Status;
}
function PkgSearch() {
    var TotalRooms = "";
    var TotalNoInfants = "";
    var infants1 = "";
    var infants2 = "";
    var infants3 = "";
    var infants4 = "";
    var F = document.getElementById("from1");
    var From = (F.options[F.selectedIndex].value);
    var T = document.getElementById("to1");
    var To = (T.options[T.selectedIndex].value);
    var DepartDate = (document.getElementById("depart_hidden").value);
    var ReturnDate = (document.getElementById("retrn_hidden").value);
    var ADT = document.getElementById("Air_DepTime");
    var Air_DepTime = (ADT.options[ADT.selectedIndex].value);
    var ART = document.getElementById("Air_RetTime");
    var Air_RetTime = (ART.options[ART.selectedIndex].value);
    var CT = document.getElementById("Class-type");
    var ClassType = (CT.options[CT.selectedIndex].value);
    var HT = document.getElementById("Hotel-type");
    var HotelType = (HT.options[HT.selectedIndex].value);
    for (i = 1; i <= Room; i++) {
        var tempadults = "adults" + i;
        var tempchildren = "children" + i;
        var tempinfants = "Infant" + i;
        var Adlt = document.getElementById(tempadults);
        var No_Adults = (Adlt.options[Adlt.selectedIndex].value);
        var Chld = document.getElementById(tempchildren);
        var No_children = (Chld.options[Chld.selectedIndex].value);
        var Infnt = document.getElementById(tempinfants);
        var No_infants = (Infnt.options[Infnt.selectedIndex].value);
        if (i == 1) {
            infants1 = "@" + No_infants;
            TotalNoInfants = infants1;
            var R1 = No_Adults + "|" + No_children + "|-|%25|%25@";
            Room1 = getChildAge(R1, "1");
            TotalRooms = Room1;
        }
        if (i == 2) {
            infants2 = "@" + No_infants;
            TotalNoInfants = infants1 + infants2;
            var R2 = No_Adults + "|" + No_children + "|-|%25|%25@";
            Room2 = getChildAge(R2, "2");
            TotalRooms = Room1 + Room2;
        }
        if (i == 3) {
            infants3 = "@" + No_infants;
            TotalNoInfants = infants1 + infants2 + infants3;
            var R3 = No_Adults + "|" + No_children + "|-|%25|%25@";
            Room3 = getChildAge(R3, "3");
            TotalRooms = Room1 + Room2 + Room3;
        }
        if (i == 4) {
            infants4 = "@" + No_infants;
            TotalNoInfants = infants1 + infants2 + infants3 + infants4;
            var R4 = No_Adults + "|" + No_children + "|-|%25|%25@";
            Room4 = getChildAge(R4, "4");
            TotalRooms = Room1 + Room2 + Room3 + Room4;
        }
    }

    function getChildAge(R, S) {
        var buildurl = R;
        if (No_children != 0) {
            var ChildrenAge = "";
            for (var c = 1; c <= No_children; c++) {
                var Child_Age = "Age" + S + "-" + c;
                var C = document.getElementById(Child_Age);
                var CAge = (C.options[C.selectedIndex].value);
                if (c == 1) {
                    ChildrenAge = CAge;
                }
                if (c == 2) {
                    ChildrenAge = ChildrenAge + "," + CAge;
                }
                if (c == 3) {
                    ChildrenAge = ChildrenAge + "," + CAge;
                }
                if (c == 4) {
                    ChildrenAge = ChildrenAge + "," + CAge;
                }
            }
            buildurl = No_Adults + "|" + No_children + "|" + ChildrenAge + "|%25|%25@";
        }
        return buildurl;
    }
    if (From == "") {
        HOLIDAY_SEARCH.showMessage("From field should not be empty.");
        return false;
    }
    if (To == "") {
        HOLIDAY_SEARCH.showMessage("To field should not be empty.");
        return false;
    }
	


var date_from = DepartDate.split("-");
var date_to = ReturnDate.split("-");

var Format_from= new Date(date_from[0], date_from[1]-1, date_from[2]);
var Format_to= new Date(date_to[0], date_to[1]-1, date_to[2]);


var timeDiff = Math.abs(Format_to.getTime() - Format_from.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
if((Format_to.getTime() - Format_from.getTime())<0)
{
HOLIDAY_SEARCH.showMessage("Return Date should not be less than Departure Date ");
	return false;
}


var today=new Date();



var timeDiff1 = Math.abs(Format_from.getTime() - today.getTime());

var diffDays1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24)); 
if(diffDays1<3)
{
	HOLIDAY_SEARCH.showMessage("For your booking please contact your nearest Qatar Airways office or email to holidays@qatarairways.com.qa ");
	return false;
}


	
    var tmepFrom = From.split("|");
    var tmepTo = To.split("|");
    if (tmepFrom[1] == tmepTo[1]) {
        HOLIDAY_SEARCH.showMessage("From and To field should not be same.");
        return false;
    } else {
        var promo_code = document.getElementById("promo_holidayNav").value;
        if ((promo_code == "") || (promo_code == null)) {
            promo_code = "";
        }
        var params = "ActionType=Pkg&dlr=Y&DLR16=" + Air_DepTime + "&DLR18=" + Air_RetTime + "&DLR44=N&DLR21=" + ClassType + "&DLR22=R&DLR23=" + DepartDate + "&DLR24=" + ReturnDate + "&DLR12=" + TotalRooms + "&DLR34=" + From + "&DLR36=" + To + "&DLR47=" + HotelType + "&DLR38=V&DLR45=" + TotalNoInfants + "&DLR46=" + promo_code;
        window.location.href = "/global/en/holidays/holiday-processing.page?" + params;
    }
}

function HotelSearch() {
    var citylist = new Array();
    var depart = new Array();
    var return1 = new Array();
    var cityid = "";
    var city = "";
    var citycode = "";
    var country = "";
    var checkindate = "";
    var checkinmonth = "";
    var checkinyear = "";
    var checkoutdate = "";
    var checkoutmonth = "";
    var checkoutyear = "";
    var TotalRooms1 = "";
    var HTotalNoInfants = "";
    var Hinfants1 = "";
    var Hinfants2 = "";
    var Hinfants3 = "";
    var Hinfants4 = "";
    var HCountry = document.getElementById("Holiday_country");
    var countryValue = (HCountry.options[HCountry.selectedIndex].value);
    var HCity = document.getElementById("Holiday_City");
    var cityValue = (HCity.options[HCity.selectedIndex].value);
    citylist = cityValue.split("|");
    cityid = citylist[0];
    city = citylist[1];
    citycode = citylist[2];
    country = citylist[3];
    var hrooms = document.getElementById("HotelRooms");
    var HotelRooms = (hrooms.options[hrooms.selectedIndex].value);
    var DepartingDate = (document.getElementById("depart_hotel").value);
    var start = DepartingDate;
    depart = DepartingDate.split("-");
    checkinyear = depart[0];
    checkinmonth = depart[1];
    checkindate = depart[2];
    var night = document.getElementById("hotel_night");
    var nightValue = (night.options[night.selectedIndex].value);
    var TempD = DepartingDate.split("-");
    var passDate = TempD[2] + "/" + TempD[1] + "/" + TempD[0];
    HOLIDAY_SEARCH.Nights = nightValue;
    HOLIDAY_SEARCH.checkDate = passDate;
    var d = HOLIDAY_SEARCH.setCheckOutDate(nightValue);
    return1 = d.split("-");
    checkoutyear = return1[0];
    checkoutmonth = return1[1];
    checkoutdate = return1[2];
    var hotelTypeValue = "ALL";
    /*var HotelType = "All"; */
	var H=document.getElementById("Hoteltype");
	var HotelType=(H.options[H.selectedIndex].value);
    for (i = 1; i <= HotelRooms; i++) {
        var Htempadults = "adultsh" + i;
        var Htempchildren = "childrenh" + i;
        var Htempinfants = "Infanth" + i;
        var HAdlt = document.getElementById(Htempadults);
        var HNo_Adults = (HAdlt.options[HAdlt.selectedIndex].value);
        var Chld = document.getElementById(Htempchildren);
        var No_children1 = (Chld.options[Chld.selectedIndex].value);
        var Infnth = document.getElementById(Htempinfants);
        var HNo_infants = (Infnth.options[Infnth.selectedIndex].value);
        if (i == 1) {
            Hinfants1 = "@" + HNo_infants;
            HTotalNoInfants = Hinfants1;
            var R11 = HNo_Adults + "|" + No_children1 + "|-|%25|%25@";
            R1 = getChildAge1(R11, "1");
            TotalRooms1 = R1;
        }
        if (i == 2) {
            Hinfants2 = "@" + HNo_infants;
            HTotalNoInfants = Hinfants1 + Hinfants2;
            var R12 = HNo_Adults + "|" + No_children1 + "|-|%25|%25@";
            R2 = getChildAge1(R12, "2");
            TotalRooms1 = R1 + R2;
        }
        if (i == 3) {
            Hinfants3 = "@" + HNo_infants;
            HTotalNoInfants = Hinfants1 + Hinfants2 + Hinfants3;
            var R13 = HNo_Adults + "|" + No_children1 + "|-|%25|%25@";
            R3 = getChildAge1(R13, "3");
            TotalRooms1 = R1 + R2 + R3;
        }
        if (i == 4) {
            Hinfants4 = "@" + HNo_infants;
            HTotalNoInfants = Hinfants1 + Hinfants2 + Hinfants3 + Hinfants3;
            var R14 = HNo_Adults + "|" + No_children1 + "|-|%25|%25@";
            R4 = getChildAge1(R14, "4");
            TotalRooms1 = R1 + R2 + R3 + R4;
        }
    }

    function getChildAge1(R, S) {
        var buildurl = R;
        if (No_children1 != 0) {
            var ChildrenAge1 = "";
            for (var c = 1; c <= No_children1; c++) {
                var Child_Age = "Ageh" + S + "-" + c;
                var C1 = document.getElementById(Child_Age);
                var CAge1 = (C1.options[C1.selectedIndex].value);
                if (c == 1) {
                    ChildrenAge1 = CAge1;
                }
                if (c == 2) {
                    ChildrenAge1 = ChildrenAge1 + "," + CAge1;
                }
                if (c == 3) {
                    ChildrenAge1 = ChildrenAge1 + "," + CAge1;
                }
                if (c == 4) {
                    ChildrenAge1 = ChildrenAge1 + "," + CAge1;
                }
            }
            buildurl = HNo_Adults + "|" + No_children1 + "|" + ChildrenAge1 + "|%25|%25@";
        }
        return buildurl;
    }
    if (countryValue == "" || countryValue == "null") {
        HOLIDAY_SEARCH.showMessage("Country field should not be empty.");
        return false;
    }
	

var date_from = DepartingDate.split("-");
var today=new Date();


var Format_from= new Date(date_from[0], date_from[1]-1, date_from[2]);
var timeDiff = Math.abs(Format_from.getTime() - today.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
if(diffDays<3)
{
	HOLIDAY_SEARCH.showMessage("For your booking please contact your nearest Qatar Airways office or email to holidays@qatarairways.com.qa ");
	return false;
}

	
    if (cityValue == "") {
        HOLIDAY_SEARCH.showMessage("Location field should not be empty.");
        return false;
    } else {
        var hpromo_code = document.getElementById("promo_hotelNav").value;
        if ((hpromo_code == "") || (hpromo_code == null)) {
            hpromo_code = "";
        }
        var params1 = "ActionType=H&dlr=Y&DLR42=0&DLR2=" + country + "&DLR3=" + cityid + "&DLR4=" + nightValue + "&DLR5=" + checkindate + "&DLR6=" + checkinmonth + "&DLR7=" + checkinyear + "&DLR8=" + HotelRooms + "&DLR9=" + checkoutdate + "&DLR10=" + checkoutmonth + "&DLR11=" + checkoutyear + "&DLR12=" + TotalRooms1 + "&DLR45=" + HTotalNoInfants + "&DLR1=" + cityValue + "&DLR13=" + countryValue + "&DLR46=" + hpromo_code;
        window.location.href = "/global/en/holidays/hotel-processing.page?" + params1 + "&DLR47=" + HotelType;
    }
}
HOLIDAY_SEARCH.showMessage = function (message) {
    $("#searchMessage").html("<p class='messageBox'>" + message + "</p>");
    $("#searchMessage").dialog({
        modal: true
    });
};

function MULTICITY_FLIGHT_SEARCH() {}
MULTICITY_FLIGHT_SEARCH.intMaxAdults = 9;
MULTICITY_FLIGHT_SEARCH.intMaxChild = 8;
MULTICITY_FLIGHT_SEARCH.blnAdultReq = "Y";
MULTICITY_FLIGHT_SEARCH.strDDays = "7";
MULTICITY_FLIGHT_SEARCH.strRDays = "14";
MULTICITY_FLIGHT_SEARCH.strSysDate = "";
MULTICITY_FLIGHT_SEARCH.strTripType = "";
MULTICITY_FLIGHT_SEARCH.strMinPur = " 0^ 0";
MULTICITY_FLIGHT_SEARCH.blnBuildReturn = false;
MULTICITY_FLIGHT_SEARCH.depatureDateLeg1 = "";
MULTICITY_FLIGHT_SEARCH.returnDateLeg2 = "";
MULTICITY_FLIGHT_SEARCH.activeControls = 1;
MULTICITY_FLIGHT_SEARCH.flag = 1;
var ukarrm = Array();
MULTICITY_FLIGHT_SEARCH.initialize = function () {
//    datePicker.init();
     MULTICITY_FLIGHT_SEARCH.multiDatePickerFrom.init();
    arrBFFromCity = new Array();
    arrBFToCityHolder = new Array();
    arrBFToCityHolder[0] = new Array();
    arrBFToCityHolder[1] = new Array();
    arrBFToCityHolder[2] = new Array();
    arrBFToCityHolder[3] = new Array();
    arrBFToCityHolder[4] = new Array();
    arrBFToCityHolder[5] = new Array();
    arrAdults = new Array();
    arrChild = new Array();
    arrInfants = new Array();
    MULTICITY_FLIGHT_SEARCH.formEvent();
    MULTICITY_FLIGHT_SEARCH.initializeParameter();
    MULTICITY_FLIGHT_SEARCH.getRelavantFromStations();
    MULTICITY_FLIGHT_SEARCH.buildFromStations(0);
    MULTICITY_FLIGHT_SEARCH.buildPax();
    MULTICITY_FLIGHT_SEARCH.setCalenderDate();
    $("select#bc_mb_adults").change(function () {
        MULTICITY_FLIGHT_SEARCH.selAdults_onChange();
    });
};
MULTICITY_FLIGHT_SEARCH.clearMultiSearch = function (index) {
    arrBFToCityHolder[index] = new Array();
	if(ukarrm.length!=0&&ukarrm.indexOf(index + 1)!=-1){
		ukarrm.splice(ukarrm.indexOf(index + 1), 1);
		if(ukarrm.length<=0){
			$(".teenager,#bc_mb_teenager").hide();
			$("#bc_mb_teenager").attr("disabled",true);
			removeAdltOptstab("bc_mb_");
			$(".adltspanm span").text($("#adultAgeWOTeenage").val());
		}
	}
    $("#fromStation" + (index + 1)).val("");
    $("#toStation" + (index + 1)).val("");
    $("#autocompleteMultiFrom" + (index + 1)).val("");
    $("#autocompleteMultiTo" + (index + 1)).val("");
    $("#departing" + (index + 1)).val("");
    MULTICITY_FLIGHT_SEARCH.unBindFromToEvent(index + 1);
};
MULTICITY_FLIGHT_SEARCH.getRelavantToStations = function (indexh) {
    var strValue = $("#fromStation" + (indexh + 1)).val();
    arrBFToCityHolder[indexh] = new Array();
    var arrCnt = "";
    var arrRoute = "";
    var arrI = 0;
    var desc = "";
	var desccode = "";
    $.each(arrCity, function (index, value) {
        arrCnt = aCnt_1[value[0]];
        if (typeof arrCnt != "undefined") {
            var strTempDStation = arrCnt.split("^");
            if (strTempDStation[6] == strValue) {
                if ((value[1] != "") && (value[1].indexOf(",") != -1)) {
                    var strRoutes = value[1].split(",");
                    $.each(strRoutes, function (index, strRouteElem) {
                        var arrRouteElem = strRouteElem.split("/");
                        arrRoute = aCnt_1[arrRouteElem[0]];
                        if (typeof arrRoute != "undefined") {
                    var strTempStation = arrRoute.split("^");
							//alert(strTempStation.length);
					
							if(strTempStation.length == 8){/*aCnt_1 not Re-create in first load time, becoz length is Different*/
								desc = strTempStation[2]+"|";
								desc += strTempStation[3]+"|";
								desc += strTempStation[4];
								desccode=strTempStation[5]+"|"+strTempStation[6]+"|"+strTempStation[7];
								/*Create arrBFFromCity array with specific Locals*/
								arrBFToCityHolder[indexh][arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc+"|" +desccode));
							}else{
								desc = strTempStation[2]+"|";
								desc += strTempStation[7]+"|";
								/*Create arrBFFromCity array with specific Locals*/
								arrBFToCityHolder[indexh][arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc));
							}
							desc = "";
							arrI++;
                        }
                    });
                }
                return false;
            }
        }
    });
};
MULTICITY_FLIGHT_SEARCH.getRelavantFromStations = function () {
       var desc = "";
    var arrCnt = "";
    var arrI = 0;
	var desccode = "";
    $.each(arrCity1, function (index, value) {
           arrCnt = aCnt_1[value];
		 	if (typeof arrCnt != "undefined"){/*Ignore IATA code which is not in Local aCnt_1 array*/
	  		var strTempStation = arrCnt.split("^");
          //  aCnt_1[value] = strTempStation[0] + "^" + strTempStation[1] + "^^^" + value[2] + "^" + value[3] + "^" + strTempStation[2] + "^" + strTempStation[3] + "^" + strTempStation[4];
            desc = strTempStation[2] + "|";
            desc += strTempStation[3] + "|";
            desc += strTempStation[4];
			desccode=strTempStation[5]+"|"+strTempStation[6]+"|"+strTempStation[7];
            arrBFFromCity[arrI] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + desc+"|"+desccode));
            desc = "";
            arrI++;
        }
    });
};
MULTICITY_FLIGHT_SEARCH.buildFromStations = function (index) {
    //$("#MFromTemp" + (index + 1)).flushCache();
	$("#MFromTemp" + (index + 1)).autocomplete("destroy");
    $("#MFromTemp" + (index + 1)).autocomplete({
        width: 220,
      	minLength:3,
		autoFocus:true,
         source: function (request, response) {
		  var ResArray=processSelect(request, response,arrBFFromCity);
		 response(ResArray);
            },
	    select:function(event,ui, data, formatted) {
		 event.preventDefault();
		
		var arrS = ui.item.value;
		var dispVal=ui.item.post;
        $("#fromStation" + (index + 1)).val(arrS);
        $("#autocompleteMultiFrom" + (index + 1)).val(dispVal);
//*** Added by uday on 13-03-2013 for autocomplete with tagedit multibooking ** //
		 $("#MFromTemp" + (index + 1)).val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="remMFrom'+(index + 1)+'" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".MFromBooking" + (index + 1)+" li").remove();
         $(this).before(v);
            }
        var mfrom=".MFromBooking" + (index + 1)+" li";
		var mto=".MToBooking" + (index + 1)+" li";	
		$("#MFromTemp" + (index + 1)).css("width","1px");
		$("#MFromTemp" + (index + 1)).css("display","none");
		$("#MToTemp" + (index + 1)).css("width","200px");
		$(mto).remove();
		$(".ui-autocomplete").hide();
		if(ukIatas.indexOf(arrS)!=-1){
				$(".teenager,#bc_mb_teenager").show();
				$(".adltspanm span").text($("#adultAgeWTeenage").val());
				$("#bc_mb_teenager").attr("disabled",false);
				ukarrm.push(index + 1);
				addAdltOptstab("bc_mb_");
				
			}else{
				if(ukarrm.length<=0){
					$(".teenager,#bc_mb_teenager").hide();
					$(".adltspanm span").text($("#adultAgeWOTeenage").val());
					$("#bc_mb_teenager").attr("disabled",true);
					removeAdltOptstab("bc_mb_");
				}			
			}
		$("#remMFrom" +(index + 1)).live("click", function()
			{
			if(ukarrm.length!=0&&ukarrm.indexOf(index + 1)!=-1){
				ukarrm.splice(ukarrm.indexOf(index + 1), 1);
				if(ukarrm.length<=0){
				$(".teenager,#bc_mb_teenager").hide();
				$("#bc_mb_teenager").attr("disabled",true);
				removeAdltOptstab("bc_mb_");
				$(".adltspanm span").text($("#adultAgeWOTeenage").val());
				}
			}
			$("#MFromTemp" +(index + 1)).css("width","200px");
			$("#MFromTemp" + (index + 1)).css("display","block");
			$("#MToTemp" + (index + 1)).css("display","block");
			$("#fromStation" + (index + 1)).val("");
            $("#autocompleteMultiFrom" + (index + 1)).val("");
			$(mfrom).remove();
			$(mto).remove();
		}); 

//****** Tag Edit End  ############# //
        mappingLoad(arrS,'M',index);
		
		$("#MFromTemp" + (index + 1)).css("width","2px");
		
		},
		focus:function (event,ui){
           event.preventDefault();
		   
		var arrS = ui.item.value;
		var dispVal=ui.item.post;
		if(arrS!=""){
		$("#fromStation" + (index + 1)).val(arrS);
        $("#autocompleteMultiFrom" + (index + 1)).val(dispVal);
		}
         else{
		 
		$("#fromStation" + (index + 1)).val("");
        $("#autocompleteMultiFrom" + (index + 1)).val("");
		 }
          }
    });
/* 	$("#MFromTemp" + (index + 1)).live('focusout', function (event) {
		
		var dispVal=$("#autocompleteMultiFrom" + (index + 1)).val();
		var val=$("#fromStation" + (index + 1)).val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		 $("#MFromTemp" + (index + 1)).val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <img class="p" id="remMFrom'+(index + 1)+'" src="/images/iberemove.gif"/></li>';
		 
		 $(".MFromBooking" + (index + 1)+" li").remove();
         $(this).before(v);
      
        var mfrom=".MFromBooking" + (index + 1)+" li";
		var mto=".MToBooking" + (index + 1)+" li";			
		$("#MFromTemp" + (index + 1)).css("width","1px");
		$("#MToTemp" + (index + 1)).css("width","200px");
		$(mto).remove();
		$("#remMFrom" +(index + 1)).live("click", function()
			{
			$("#MFromTemp" +(index + 1)).css("width","200px");
			$("#fromStation" + (index + 1)).val("");
            $("#autocompleteMultiFrom" + (index + 1)).val("");
			$(mfrom).remove();
			$(mto).remove();
		}); 

//****** Tag Edit End  ############# //
        mappingLoad(val,'M',index);
		}
			 
		}); */

};
MULTICITY_FLIGHT_SEARCH.buildToStations = function (index) {
   // $("#MToTemp" + (index + 1)).flushCache();
   $("#MToTemp" + (index + 1)).autocomplete("destroy");
    $("#MToTemp" + (index + 1)).autocomplete({
        width: 220,
      	minLength:3,
		autoFocus:true,
         source: function (request, response) {
		   var ResArray=processSelect(request, response,arrBFToCityHolder[index]);
		 response(ResArray);
            },
	    select:function(event,ui, data, formatted) {
		event.preventDefault();
		
		var arrS = ui.item.value;
		var dispVal=ui.item.post;
		
		$("#toStation" + (index + 1)).val(arrS);
        $("#autocompleteMultiTo" + (index + 1)).val(dispVal);
        //$("#departing" + (index + 1)).focus();
//*** Added by uday on 13-03-2013 for autocomplete with tagedit multibooking ** //
		 $("#MToTemp" + (index + 1)).val("");
		 var mmto=".MToBooking" + (index + 1)+" li";	
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="remMTo'+(index + 1)+'" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(mmto).remove();
         $(this).before(v);
$(".ui-autocomplete").hide();
            }
		$("#MToTemp" + (index + 1)).css("width","1px");
		$("#MToTemp" + (index + 1)).css("display","none");
		$("#remMTo" +(index + 1)).live("click", function()
		{
		    $("#MToTemp" + (index + 1)).css("display","block");
			$("#MToTemp" +(index + 1)).css("width","200px");
			$("#toStation" + (index + 1)).val("");
            $("#autocompleteMultiTo" + (index + 1)).val("");
			$(mmto).remove();
			$("#remMTo" +(index + 1)).focus();
		}); 
//****** Tag Edit End  ############# //
		$('#departing' + (index+1)).click();
		
		$("#MToTemp" + (index + 1)).css("width","2px");

		},
		focus:function (event,ui){
           event.preventDefault();
		 var dispVal=ui.item.post;
		var arrS = ui.item.value;
		
		if(arrS!=""){
		$("#toStation" + (index + 1)).val(arrS);
        $("#autocompleteMultiTo" + (index + 1)).val(dispVal);
		}
		else{
		$("#toStation" + (index + 1)).val("");
        $("#autocompleteMultiTo" + (index + 1)).val("");
		}
          }
    });
    /*  $("#MToTemp" + (index + 1)).live('focusout', function (event) {
		
		    var dispVal=$("#autocompleteMultiTo" + (index + 1)).val();
		var val=$("#toStation" + (index + 1)).val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		    $("#MToTemp" + (index + 1)).val("");
		 var mmto=".MToBooking" + (index + 1)+" li";	
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <img class="p" id="remMTo'+(index + 1)+'" src="/images/iberemove.gif"/></li>';
		 
		 $(mmto).remove();
         $(this).before(v);
           
		$("#MToTemp" + (index + 1)).css("width","1px");
		$("#remMTo" +(index + 1)).live("click", function()
		{
			$("#MToTemp" +(index + 1)).css("width","200px");
			$("#toStation" + (index + 1)).val("");
            $("#autocompleteMultiTo" + (index + 1)).val("");
			$(mmto).remove();
			$("#remMTo" +(index + 1)).focus();
		}); 
//****** Tag Edit End  ############# //
		$('#departing' + (index+1)).click();
		
		}
			 
	 });  */ 
};
MULTICITY_FLIGHT_SEARCH.buildPax = function () {
    var intAdultsStart = 1;
    if (MULTICITY_FLIGHT_SEARCH.blnAdultReq == "N") {
        intAdultsStart = 0;
    }
    for (var i = 0; i < (Number(MULTICITY_FLIGHT_SEARCH.intMaxAdults) + 1); i++) {
        arrAdults[i - intAdultsStart] = new Array();
        arrAdults[i - intAdultsStart][0] = i;
        if (i <= MULTICITY_FLIGHT_SEARCH.intMaxChild) {
            arrChild[i] = new Array();
            arrChild[i][0] = i;
        }
    }
    var htmlAdult;
    var htmlChild;
    $.each(arrAdults, function (index, value) {
        htmlAdult += "<option value=" + value + ">" + value + "</option>";
    });
    $.each(arrChild, function (index, value) {
        htmlChild += "<option value=" + value + ">" + value + "</option>";
    });
    $("select#bc_mb_adults").html(htmlAdult);
    $("select#bc_mb_children").html(htmlChild);
    MULTICITY_FLIGHT_SEARCH.selAdults_onChange();
};
MULTICITY_FLIGHT_SEARCH.selAdults_onChange = function () {
    var intAdults = $("select#bc_mb_adults").val();
	var childcount= Number($("select#bc_mb_children").val());
    arrInfants = new Array();
    for (var i = 0; i <= intAdults; i++) {
        arrInfants[i] = new Array();
        arrInfants[i][0] = i;
    }
    var htmlInfant = "";
    $.each(arrInfants, function (index, value) {
        htmlInfant += "<option value=" + value + ">" + value + "</option>";
    });
    $("select#bc_mb_infants").html(htmlInfant);
	 var htmlchild = "";
    for (var i = 0; i+Number(intAdults) <=9; i++) {
	htmlchild += "<option value=" + i + ">" + i + "</option>";
    }
    if(Number(intAdults)==0){
	$("select#bc_mb_children").html(htmlInfant);
    }else{
	$("select#bc_mb_children").html(htmlchild);
    }
   $("select#bc_mb_children>option:eq("+childcount+")").attr('selected', true);
   if($('.teenager').is(':hidden')==false){
		var intteenager = Number($("#bc_mb_teenager").val());													
		$("select#bc_mb_teenager").html(htmlchild);
		$("select#bc_mb_teenager>option:eq("+intteenager+")").attr('selected', true);
		onChangeTeenOpt("bc_mb_");
   }
};
MULTICITY_FLIGHT_SEARCH.setCalenderDate = function () {
    var strSysDateDef = MULTICITY_FLIGHT_SEARCH.strSysDate;
    var dtSysDate = StringToDate(MULTICITY_FLIGHT_SEARCH.strSysDate);
    strSysDateDef = DateToString(addDays(dtSysDate, Number(arrParams[18])));
    strSeleDDay = DateToString(addDays(StringToDate(strSysDateDef), Number(MULTICITY_FLIGHT_SEARCH.strDDays)));
    $("#departing1").val(dateChk(strSeleDDay, "DD-MMM-YYYY"));
};
MULTICITY_FLIGHT_SEARCH.buildDatePicker = function () {
    MULTICITY_FLIGHT_SEARCH.multiDatePickerFrom.init();
};
MULTICITY_FLIGHT_SEARCH.initializeParameter = function () {
    MULTICITY_FLIGHT_SEARCH.activeControls = 1;
    MULTICITY_FLIGHT_SEARCH.flag = 1;
    MULTICITY_FLIGHT_SEARCH.intMaxAdults = arrParams[3];
    MULTICITY_FLIGHT_SEARCH.intMaxChild = arrParams[19];
    MULTICITY_FLIGHT_SEARCH.blnAdultReq = arrParams[17];
    MULTICITY_FLIGHT_SEARCH.strDDays = arrParams[1];
    MULTICITY_FLIGHT_SEARCH.strRDays = arrParams[2];
    var dtC = new Date();
    var dtCM = dtC.getMonth() + 1;
    var dtCD = dtC.getDate();
    MULTICITY_FLIGHT_SEARCH.strSysDate = DateToString(dtC);
    MULTICITY_FLIGHT_SEARCH.blnBuildReturn = false;
    MULTICITY_FLIGHT_SEARCH.strTripType = "O";
    MULTICITY_FLIGHT_SEARCH.setFirstMultiRow();
};
MULTICITY_FLIGHT_SEARCH.setFirstMultiRow = function () {
    $('<div class="wrapping notSeen"><div class="flightSerialNumber"><p class="number"></p></div><div class="fromAirport"><p><ul class="MFromBooking'+MULTICITY_FLIGHT_SEARCH.flag+' acfb-holder"><input class="MibeFrom acfb-input" type="text" id="MFromTemp' + MULTICITY_FLIGHT_SEARCH.flag + '"/></ul><input type="hidden" id="autocompleteMultiFrom' + MULTICITY_FLIGHT_SEARCH.flag + '" class="txtField" name="multicityFrom"/><input type="hidden" id="fromStation' + MULTICITY_FLIGHT_SEARCH.flag + '" name="fromStation"/></p></div><div class="toAirport"><p><ul class="MToBooking'+MULTICITY_FLIGHT_SEARCH.flag+' acfb-holder"><input class="MibeTo acfb-input" type="text" id="MToTemp' + MULTICITY_FLIGHT_SEARCH.flag + '"/></ul><input type="hidden" id="autocompleteMultiTo' + MULTICITY_FLIGHT_SEARCH.flag + '" class="txtField" name="multicityTo"/><input type="hidden" id="toStation' + MULTICITY_FLIGHT_SEARCH.flag + '" name="toStation"/></p></div><div class="departingDate"><p><input type="text" id="departing' + MULTICITY_FLIGHT_SEARCH.flag + '" name="departing" class="txtFieldSmall datePicker multiDatePicker" /></p><a href="#" class="deleteRow" id="deleteRow' + MULTICITY_FLIGHT_SEARCH.flag + '" title="Click to delete row">delete</a></div></div><div class="clear"></div>').insertAfter("div.wrapping:last").slideDown("slow");
    $("#MFromTemp" + MULTICITY_FLIGHT_SEARCH.flag).val("type/select departure city");
    $("#MToTemp" + MULTICITY_FLIGHT_SEARCH.flag).val("type/select destination city");  // tagEdit
    MULTICITY_FLIGHT_SEARCH.bindFromToEvent(MULTICITY_FLIGHT_SEARCH.flag);
    $("#deleteRow1").hide();
};
MULTICITY_FLIGHT_SEARCH.formEvent = function () {
    $("select#bc_mb_adults").change(function () {
        MULTICITY_FLIGHT_SEARCH.selAdults_onChange();
    });
	$("select#bc_mb_teenager").change(function () {
		onChangeTeenOpt("bc_mb_");
    });
    MULTICITY_FLIGHT_SEARCH.multicity.init();
};
MULTICITY_FLIGHT_SEARCH.selectBestFare = function () {
    if ($("#flexibleDateOption").is(":checked")) {
        $("#selSearchType")[0].selectedIndex = 0;
        $("#selSearchType").attr("disabled", "disabled");
    } else {
        $("#selSearchType").removeAttr("disabled");
    }
};
MULTICITY_FLIGHT_SEARCH.validate = function () {   //udaya
    if (!MULTICITY_FLIGHT_SEARCH.validateEmpty()) {

	  Merrorhandling(MultiError);

        return false;
    }
 var data = $.datepicker.parseDate('dd-M-yy', $("#departing1").val());
	MULTICITY_FLIGHT_SEARCH.depatureDateLeg1 = $.datepicker.formatDate('dd/mm/yy', data);
	
	var strDtMessages = MULTICITY_FLIGHT_SEARCH.checkDate();
	//MULTICITY_FLIGHT_SEARCH.checkDate();
	if(strDtMessages!==""){
		//alert(strDtMessages);
		MULTICITY_FLIGHT_SEARCH.showMultiMessage(strDtMessages);
		return false;
	}
    


    if (!MULTICITY_FLIGHT_SEARCH.validateNoOfCities()) {
	    MultiError+="<tr class='er'><td>A maximum of 4 different cities can be selected in your search. <br>Please modify your search and resubmit your request.</td></tr>";
		Merrorhandling(MultiError);
       // MULTICITY_FLIGHT_SEARCH.showMessage("A maximum of 4 different cities can be selected in your search. <br>Please modify your search and resubmit your request.");
       return false;
    }
    if (!MULTICITY_FLIGHT_SEARCH.validateSameCityPair()) {
	    MultiError+="<tr class='er'><td>Two of your flights are the same, please change.</td></tr>";
		Merrorhandling(MultiError);
       // MULTICITY_FLIGHT_SEARCH.showMessage("You cannot define two identical segments (Origin/Destination). Please modify your selection and resubmit your request.");
        return false;
    }
    if (!MULTICITY_FLIGHT_SEARCH.validateDateCount()) {
	 MultiError+="<tr class='er'><td>You cannot book more than two flights on the same day</td></tr>";
	 Merrorhandling(MultiError);
       // MULTICITY_FLIGHT_SEARCH.showMessage("Up to 2 segments can be requested for the same date. Please modify your selection and resubmit your request");
        return false;
    }
    if (!MULTICITY_FLIGHT_SEARCH.validateItineraryInterruption()) {
	    MultiError+="<tr class='er'><td>The total amount of flight interruption in the itinerary (surface sectors) is limited to two.</td></tr>";
		Merrorhandling(MultiError);
       // MULTICITY_FLIGHT_SEARCH.showMessage("The total amount of flight interruption in the itinerary (surface sectors) is limited to two.");
        return false;
    }
    MULTICITY_FLIGHT_SEARCH.strMinPur = COMMON_SEARCH.getMinPurchaseTime($("#fromStation1").val(), $("#toStation1").val());
    var arrMinPur = MULTICITY_FLIGHT_SEARCH.strMinPur.split("^");
    $("#minPurTimem").val(MULTICITY_FLIGHT_SEARCH.strMinPur);
    if (arrMinPur.length > 1) {
        arrMinPur[0] = $.trim(arrMinPur[0]);
        arrMinPur[1] = $.trim(arrMinPur[1]);
        strDeptDate = addHours(StringToDate(MULTICITY_FLIGHT_SEARCH.strSysDate), Number(arrMinPur[0]));
			
        if (!checkTime(strDeptDate, MULTICITY_FLIGHT_SEARCH.depatureDateLeg1)) {
		
		 if (arrMinPur[0] < 24) {
		     MultiError+="<tr class='er'><td>Departure date must be at least " + (arrMinPur[0]) + " hour(s) in the future</td></tr>";
               // MULTICITY_FLIGHT_SEARCH.showMessage("Departure time must be " + (arrMinPur[0]) + " hour(s) ahead from current date.");
            } else {
			 MultiError+="<tr class='er'><td>Departure date must be " + (arrMinPur[0] / 24) + " day(s) in the future</td></tr>";
                //MULTICITY_FLIGHT_SEARCH.showMessage("Departure time must be " + (arrMinPur[0] / 24) + " day(s) ahead from current date.");
            }
		   Merrorhandling(MultiError);
		     return false;
        }
    }
    var intTotPax = Number($("select#bc_mb_adults").val()) + Number($("select#bc_mb_children").val())+Number($("select#bc_mb_teenager").val());
    if (intTotPax == 0) {
	$("#bc_mb_adults").css("background-color","#FEFFAF");
	  $("#bc_mb_children").css("background-color","#FEFFAF");
	  $("#bc_mb_infants").css("background-color","#FEFFAF");
	    MultiError+="<tr class='er'><td>Please select the number of passengers.</td></tr>";
		 Merrorhandling(MultiError);
        //MULTICITY_FLIGHT_SEARCH.showMessage("Please select the number of passengers.");
        return false;
    }
    if (intTotPax > Number(arrParams[16])) {
	
	 MultiError+="<tr class='er'><td>Maximum " + arrParams[16] + " passengers allowed.</td></tr>";
	  Merrorhandling(MultiError);
	  $("#bc_mb_adults").css("background-color","#FEFFAF");
	  $("#bc_mb_children").css("background-color","#FEFFAF");
	  $("#bc_mb_infants").css("background-color","#FEFFAF");
        //MULTICITY_FLIGHT_SEARCH.showMessage("Maximum " + arrParams[16] + " passengers allowed.");
        return false;
    }
		
    if (MULTICITY_FLIGHT_SEARCH.checkAdultRequired($("select#bc_mb_adults").val(), MULTICITY_FLIGHT_SEARCH.strTripType, $("#fromStation1").val(), $("#toStation1").val())) {
       // MULTICITY_FLIGHT_SEARCH.showMessage("Child cannot travel alone.");
	   $("#bc_mb_adults").css("background-color","#FEFFAF");
	  $("#bc_mb_children").css("background-color","#FEFFAF");
	  $("#bc_mb_infants").css("background-color","#FEFFAF");
		 MultiError+="<tr class='er'><td>Child cannot travel alone.</td></tr>";
	  Merrorhandling(MultiError);
        return false;
    }
    return true;
};


MULTICITY_FLIGHT_SEARCH.checkAdultRequired = function (intAdults, strTripType, strDept, strRetu) {
    var strOut = "";
    var strRet = "";
    var blnReturn = false;
    var arrDeptRoute = aCnt_1[strDept].split("^");
    var arrRetuRoute = aCnt_1[strRetu].split("^");
    strOut = arrDeptRoute[4];
    strRet = arrRetuRoute[4];
    if (strOut == "N") {
        if (Number(intAdults) == 0) {
            blnReturn = true;
        }
    }
    if (MULTICITY_FLIGHT_SEARCH.strTripType == "R") {
        if ((strRet == "N") || (strOut == "N")) {
            if (Number(intAdults) == 0) {
                blnReturn = true;
            } else {
                blnReturn = false;
            }
        }
    }
    return blnReturn;
};
MULTICITY_FLIGHT_SEARCH.showMessage = function (message) {
    $("#FlightDialog").html("<p class='messageBox'>" + message + "</p>");
    $("#FlightDialog").dialog({
        modal: true
    });
};
MULTICITY_FLIGHT_SEARCH.showMultiMessage = function (message) {
    $("#FlightDialog").html(message);
    $("#FlightDialog").dialog({
        modal: true
    });
};
MULTICITY_FLIGHT_SEARCH.multiDatePickerFrom = {
    init: function () {
        $(".multiDatePicker").live("click", multiDatePickerFrom);

        function multiDatePickerFrom() {
	
	var muldate=new Date();

		        if(this.id=="departing2"){
					muldate= $("#departing1").val();


               //  $("departing1").datepicker( "option", "minDate", dateText);
					

				}
					
				
			  else if(this.id=="departing3"){
				  muldate= $("#departing2").val();
				
			  }
				  
			  
			  else if(this.id=="departing4"){
				   muldate= $("#departing3").val();
				
			  }
				   
			  
			  else if(this.id=="departing5"){
				   muldate= $("#departing4").val();
				   
			  }
				   
			  
			  else if(this.id=="departing6"){
				   muldate= $("#departing5").val();
				  
			  }
			$(this).datepicker({
					numberOfMonths:2,
					showButtonPanel: true,
					isFlageText:false,
					hideIfNoPrevNext:true,
					minDate: muldate,
					dateFormat: 'dd-M-yy',
					maxDate: '+12M',
					onSelect: function(dateText, inst) {		
			  if(inst.id=="departing1"){
					 $("#departing2").datepicker( "option", "minDate", dateText);
			  }	
			  else if(inst.id=="departing2"){
				  $("#departing3").datepicker( "option", "minDate", dateText);
			  }
			  else if(inst.id=="departing3") {
				  $("#departing4").datepicker( "option", "minDate", dateText);
			  } 
			  else if(inst.id=="departing4"){
				   $("#departing5").datepicker( "option", "minDate", dateText);  
			  }
				
			  else if(inst.id=="departing5"){
				  $("#departing6").datepicker( "option", "minDate", dateText); 
				
			  }		
			}
		},("option", "dayNamesMin")).focus();
    }
    }
};
MULTICITY_FLIGHT_SEARCH.toggleMultiCity = function () {
    MULTICITY_FLIGHT_SEARCH.loadAjaxMultiCityHtmlSegment("multicity.html", "multibookingWrapper");
    $("#onewayWrapper").fadeOut("fast", function () {
        $("#multibookingWrapper").fadeIn("slow");
        $("#onewayWrapper .divider, #onewayWrapper #previousSearches, #onewayWrapper #panel").css("display", "none");
    });
    return false;
};
MULTICITY_FLIGHT_SEARCH.loadAjaxMultiCityHtmlSegment = function (segmentpath, targetDivId) {
    var jContent = $("#" + targetDivId);
    $.ajax({
        cache: false,
        url: segmentpath,
        type: "get",
        dataType: "html",
        error: function () {
            jContent.html("<p>Page Not Found!!</p>");
        },
        beforeSend: function () {},
        complete: function () {},
        success: function (strData) {
            jContent.html(strData);
            MULTICITY_FLIGHT_SEARCH.initialize();
        }
    });
};
MULTICITY_FLIGHT_SEARCH.multicity = {
    init: function () {
        var divs;
        $("a.deleteRow").live("click", function () {
            if ($("div.wrapping").length > 3) {
                $(this).parents("div.wrapping").prev().find(".deleteRow").fadeIn();
            }
            $("#addbutton").fadeIn();
            if (MULTICITY_FLIGHT_SEARCH.flag == 1) {
                return false;
            }
            $(this).parents("div.wrapping").slideUp("slow", function () {
                $(this).remove();
                MULTICITY_FLIGHT_SEARCH.clearMultiSearch(MULTICITY_FLIGHT_SEARCH.flag);
                if (MULTICITY_FLIGHT_SEARCH.flag != 1) {
                    $("#deleteRow" + (MULTICITY_FLIGHT_SEARCH.flag)).show();
                }
            });
            MULTICITY_FLIGHT_SEARCH.flag = MULTICITY_FLIGHT_SEARCH.flag - 1;
            MULTICITY_FLIGHT_SEARCH.activeControls = MULTICITY_FLIGHT_SEARCH.flag;
            return false;
        });
        $("a#openRow").live("click", function () {
            if (MULTICITY_FLIGHT_SEARCH.flag < 6) {
                MULTICITY_FLIGHT_SEARCH.flag = MULTICITY_FLIGHT_SEARCH.flag + 1;
                $('<div class="wrapping notSeen"><div class="flightSerialNumber"><p class="number"></p></div><div class="fromAirport"><p><ul class="MFromBooking'+MULTICITY_FLIGHT_SEARCH.flag+' acfb-holder"><input  class="MibeFrom acfb-input" type="text" id="MFromTemp' + MULTICITY_FLIGHT_SEARCH.flag + '"/></ul><input type="hidden" id="autocompleteMultiFrom' + MULTICITY_FLIGHT_SEARCH.flag + '" class="txtField" name="multicityFrom"/><input type="hidden" id="fromStation' + MULTICITY_FLIGHT_SEARCH.flag + '" name="fromStation"/></p></div><div class="toAirport"><p><ul class="MToBooking'+MULTICITY_FLIGHT_SEARCH.flag+' acfb-holder"><input class="MibeTo acfb-input" type="text" id="MToTemp' + MULTICITY_FLIGHT_SEARCH.flag + '"/></ul><input type="hidden" id="autocompleteMultiTo' + MULTICITY_FLIGHT_SEARCH.flag + '" class="txtField" name="multicityTo"/></p></div><div class="departingDate"><p><input type="text" id="departing' + MULTICITY_FLIGHT_SEARCH.flag + '" name="departing" class="txtFieldSmall datePicker multiDatePicker" /><input type="hidden" id="toStation' + MULTICITY_FLIGHT_SEARCH.flag + '" name="toStation"/></p><a href="#" class="deleteRow" id="deleteRow' + MULTICITY_FLIGHT_SEARCH.flag + '" title="Click to delete row">delete</a></div></div><div class="clear"></div>').insertAfter("div.wrapping:last").slideDown("slow");
                $("div.wrapping:last").prev().find(".deleteRow").fadeOut();
                MULTICITY_FLIGHT_SEARCH.buildFromStations(MULTICITY_FLIGHT_SEARCH.flag - 1);
                var date = $.datepicker.parseDate("dd-M-yy", $("#departing" + (MULTICITY_FLIGHT_SEARCH.flag - 1)).val());
                var strSysDateDef = DateToString(addDays(date, 1));
                $("#departing" + MULTICITY_FLIGHT_SEARCH.flag).val(dateChk(strSysDateDef, "DD-MMM-YYYY"));
                MULTICITY_FLIGHT_SEARCH.activeControls = MULTICITY_FLIGHT_SEARCH.flag;
                $("#MFromTemp" + MULTICITY_FLIGHT_SEARCH.flag).val("type/select departure city");
                $("#MToTemp" + MULTICITY_FLIGHT_SEARCH.flag).val("type/select destination city"); 
                MULTICITY_FLIGHT_SEARCH.bindFromToEvent(MULTICITY_FLIGHT_SEARCH.flag);
                if (MULTICITY_FLIGHT_SEARCH.flag == 6) {
                    $("#addbutton").fadeOut();
                }
		  $("div.wrapping:last").find('input[type!=hidden]:first').focus();
            }
            return false;
        });
    }
};
MULTICITY_FLIGHT_SEARCH.bindFromToEvent = function (flag) {
    $("#MFromTemp" + flag).bind("click", function () {
        if ($("#fromStation" + flag).val() == "") {
            $("#autocompleteMultiFrom" + flag).val("");
			 $("#MFromTemp" + flag).val("");
        }
    });
    $("#MToTemp" + flag).bind("click", function () {
        if ($("#toStation" + flag).val() == "") {
            $("#autocompleteMultiTo" + flag).val("");
			$("#MToTemp" + flag).val("");
        }
    });
};
MULTICITY_FLIGHT_SEARCH.unBindFromToEvent = function (flag) {
    $("#autocompleteMultiFrom" + flag).unbind("click");
    $("#autocompleteMultiTo" + flag).unbind("click");
};

MULTICITY_FLIGHT_SEARCH.validateEmpty = function () {
    var isNotEmpty = true;
    var messages = "";
    for (var k = 0; k < MULTICITY_FLIGHT_SEARCH.activeControls; k++) {
        if (($("#autocompleteMultiFrom" + (k + 1)).val() == "") || ($("#fromStation" + (k + 1)).val() == "")) {
            MultiError += "<tr class='er'><td>Departure airport for flight " + (k + 1) +"  is missing</td></tr>";
			var f=".MFromBooking"+(k+1);
			var I="#MFromTemp"+(k+1);
            $(f).css("background-color","#FEFFAF");
            $(I).css("background-color","#FEFFAF");
            isNotEmpty = false;
        }
        if (($("#autocompleteMultiTo" + (k + 1)).val() == "") || ($("#toStation" + (k + 1)).val() == "")) {
            MultiError += "<tr class='er'><td>Destination airport for flight " + (k + 1) +"  is missing</td></tr>";
			var f=".MToBooking"+(k+1);
			var I="#MToTemp"+(k+1);
            $(f).css("background-color","#FEFFAF");
            $(I).css("background-color","#FEFFAF");
            isNotEmpty = false;
        }
        if ($("#departing" + (k + 1)).val() == "") {
		    $("#departing" + (k + 1)).attr("style","background-color:#FEFFAF !important");
            MultiError += "<tr class='er'><td>Departure date for flight " + (k + 1) +"  is missing</td></tr>";
            isNotEmpty = false;
        }

    }
    return isNotEmpty;
};

MULTICITY_FLIGHT_SEARCH.validateNoOfCities = function () {
    var diffCityCount = 1;
    var strTemp = "";
    var arrTemp = new Array();
    var blnFind = false;
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls; i++) {
        blnFind = false;
        strTemp = $("#fromStation" + (i + 1)).val();
        for (var j = 0; j < arrTemp.length; j++) {
            if (strTemp == arrTemp[j]) {
                blnFind = true;
            }
        }
        if (blnFind == false) {
            arrTemp[arrTemp.length] = strTemp;
        }
    }
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls; i++) {
        blnFind = false;
        strTemp = $("#toStation" + (i + 1)).val();
        for (var j = 0; j < arrTemp.length; j++) {
            if (strTemp == arrTemp[j]) {
                blnFind = true;
            }
        }
        if (blnFind == false) {
            arrTemp[arrTemp.length] = strTemp;
        }
    }
    if (arrTemp.length >= 5) {
        return false;
    } else {
        return true;
    }
};
MULTICITY_FLIGHT_SEARCH.validateSameCityPair = function () {
    var strTemp = "";
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls; i++) {
        strTemp += $("#fromStation" + (i + 1)).val() + $("#toStation" + (i + 1)).val() + "/";
    }
    var arrTemp = strTemp.split("/");
    var tempArrLength = arrTemp.length - 1;
    if (tempArrLength > 1) {
        for (var i = 0; i < tempArrLength; i++) {
            var tempValue = arrTemp[i];
            for (var j = i + 1; j < tempArrLength; j++) {
                if (tempValue == arrTemp[j]) {
                    return false;
                }
            }
        }
    }
    return true;
};
MULTICITY_FLIGHT_SEARCH.validateDateCount = function () {
    var strTemp = "";
    var dateCount = 1;
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls; i++) {
        var tempValue = $("#departing" + (i + 1)).val();
        for (var j = (i + 1); j < MULTICITY_FLIGHT_SEARCH.activeControls; j++) {
            if (tempValue == $("#departing" + (j + 1)).val()) {
                dateCount++;
            }
        }
        if (dateCount >= 3) {
            return false;
        } else {
            dateCount = 1;
        }
    }
    return true;
};
MULTICITY_FLIGHT_SEARCH.validateItineraryInterruption = function () {
    var count = 0;
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls - 1; i++) {
        if ($("#fromStation" + (i + 2)).val() != $("#toStation" + (i + 1)).val()) {
            count++;
        }
    }
    if (count >= 3) {
        return false;
    } else {
        return true;
    }
};
MULTICITY_FLIGHT_SEARCH.checkDate = function () {
    var preId = 0;
    var currId = 0;
    var strErrMsg = "";
    for (var i = 0; i < MULTICITY_FLIGHT_SEARCH.activeControls; i++) {
        currId = i + 1;
        if (currId != 1) {
            preId = (currId - 1);
        } else {
            preId = currId;
        }
        var preDate = $.datepicker.parseDate("dd-M-yy", $("#departing" + preId).val());
        var currDate = $.datepicker.parseDate("dd-M-yy", $("#departing" + currId).val());
        var preStrDate = $.datepicker.formatDate("dd/mm/yy", preDate);
        var currStrDate = $.datepicker.formatDate("dd/mm/yy", currDate);
        if (!CheckDates(preStrDate, currStrDate)) {
            strErrMsg += "Departure date for flight " + currId + " cannot be before flight " + preId + ".";
			
        }
    }
    return strErrMsg;
};

function COMMON_SEARCH() {}
COMMON_SEARCH.getMinPurchaseTime = function (strDept, strArr) {
    var strReturn = " 0^ 0";
    var arrDeptRoute = "";
    var arrRetuRoute = "";
    for (var i = 0; i < arrCity.length; i++) {
        if ($.trim(arrCity[i][0]) == $.trim(strDept)) {
            var strArrStations = String(arrCity[i][1]);
            var arrArrStations = strArrStations.split(",");
            for (var x = 0; x < arrArrStations.length; x++) {
                var strTemArr = arrArrStations[x];
                var arrTemArr = strTemArr.split("/");
                if (arrTemArr.length > 1) {
                    if ($.trim(arrTemArr[0]) == $.trim(strArr)) {
                        arrDeptRoute = arrTemArr[1];
                        break;
                    }
                } else {
                    arrDeptRoute = String(arrCity[i][4]);
                    break;
                }
            }
            break;
        }
    }
    if (arrDeptRoute == "") {
        arrDeptRoute = arrParams[39];
    }
    strReturn = arrDeptRoute + " ^" + arrRetuRoute;
    return strReturn;
};

function TTABLE_SEARCH() {}
TTABLE_SEARCH.strDDays = "0";
TTABLE_SEARCH.strRDays = "0";
TTABLE_SEARCH.strSysDate = "";
TTABLE_SEARCH.strTripType = "";
TTABLE_SEARCH.strMinPur = " 0^ 0";
TTABLE_SEARCH.blnBuildReturn = false;
TTABLE_SEARCH.depatureDate = "";
TTABLE_SEARCH.returnDate = "";
TTABLE_SEARCH.existingSearchCriteria = null;
var From = [];
var To = [];
var ToRHS = [];
var data_array = [];
var data_array_rhs = [];
var temp_from = "";
var FromStation = "";
var FromStationRHS = "";
var ToStation = "";
var ToStationRHS = "";
var temp_to = [];
$(document).ready(function () {

$("a[href='http://qadev:81/iw-mount/qr_redesign/main/qa_web/WORKAREA/work/posts.rss']").attr("href","http://qatarairways.zendesk.com/posts.rss");

    $("#nav_Statusfrom").live("blur", function (event) {
        if ($("#nav_Statusfrom").val() == "") {
            $("#NavFromTemp").val("type/select departure city");
        }
    });
    $("#nav_StatusTo").live("blur", function (event) {
        if ($("#nav_StatusTo").val() == "" && $("#nav_Statusfrom").val() == "" || $("#nav_Statusfrom").val() == "type/select departure city") {
           $("#NavToTemp").val("type/select destination city");
        }
    });
    $("#nav_Statusflightfrom").live("blur", function (event) {
        if ($("#nav_Statusflightfrom").val() == "") {
            $("#nav_Statusflightfrom").val("type/select departure city");
        }
    });
    $("#nav_StatusflightTo").live("blur", function (event) {
        if ($("#nav_StatusflightTo").val() == "" && $("#nav_Statusflightfrom").val() == "" || $("#nav_Statusflightfrom").val() == "type/select departure city") {
            $("#nav_StatusflightTo").val("type/select destination city");
        }
    });
  /* $("#autocompleteFromTimeTable").live("blur", function (event) {
        if ($("#autocompleteFromTimeTable1").val() == "") {
            $("#autocompleteFromTimeTable").val("type/select departure city");
        } 
    });  */
   /* $("#autocompleteToTimeTable").live("blur", function (event) {
        if ($("#autocompleteToTimeTable").val() == "" && $("#autocompleteFromTimeTable").val() == "" || $("#autocompleteFromTimeTable").val() == "type/select departure city") {
            $("#autocompleteToTimeTable").val("type/select destination city");
        }
    }); */
	
	$('#sField').live("focus", function(event) {
		document.getElementById("sField").value = "";
	});
				
	$('#sField').live("blur", function(event) {
		var defalt_text = $("#default_text_auto").val();
		var fval = $(this).val();
		if(fval=="")
		{
			$(this).css('background','none');
			$(this).val(defalt_text);
		}
		
	});
});
TTABLE_SEARCH.initialize = function () {
    arrBFFromCityTTable = new Array();
    arrBFToCityTTable = new Array();
    TTABLE_SEARCH.initializeParameter();
    TTABLE_SEARCH.getRelavantfromStationTimeTables();
    TTABLE_SEARCH.buildfromStationTimeTables();
    TTABLE_SEARCH.setCalenderDate();
    TTABLE_SEARCH.formEvent();
//    $("#TFromTemp").val("type/select departure city");
//    $("#TToTemp").val("type/select destination city");
	$("#TFromTemp").attr("placeholder","City or airport");
	$("#TToTemp").attr("placeholder","City or airport");
};
TTABLE_SEARCH.initializeParameter = function () {
    TTABLE_SEARCH.strDDays = "7";
    TTABLE_SEARCH.strRDays = "14";
    var dtC = new Date();
    var dtCM = dtC.getMonth() + 1;
    var dtCD = dtC.getDate();
    FLIGHT_SEARCH.strSysDate = DateToString(dtC);
    TTABLE_SEARCH.blnBuildReturn = true;
    TTABLE_SEARCH.strTripType = "R";
};
TTABLE_SEARCH.getRelavanttoStationTimeTables = function () {
   var strValue = $("#fromStationTimeTable").val();
    arrBFToCityTTable = new Array();
    var arrCntTTable = "";
    var arrRoute = "";
    var arrITTable = 0;
    var descTTable = "";
    $.each(arrCity, function (index, value) {
        arrCntTTable = aCnt_1[value[0]];
		
        if (typeof arrCntTTable != "undefined") {
            var strTempDStation = arrCntTTable.split("^");
            if (strTempDStation[6] == strValue) {
                if ((value[1] != "") && (value[1].indexOf(",") != -1)) {
                    var strRoutes = value[1].split(",");
                    $.each(strRoutes, function (index, strRouteElem) {
                        var arrRouteElem = strRouteElem.split("/");
                        arrRoute = aCnt_1[arrRouteElem[0]];
						
                        if (typeof arrRoute != "undefined") {
                            var strTempStation = arrRoute.split("^");
                            if (strTempStation.length == 8) {
							    descTTable = strTempStation[2] + "|"; 
							    descTTable+= strTempStation[3] + "|"; 
                                descTTable = descTTable+strTempStation[4] + "|";
                                descTTable= descTTable+strTempStation[5] + "|";
								descTTable= descTTable+strTempStation[6] + "|";
                                descTTable=descTTable+strTempStation[7];
                                arrBFToCityTTable[arrITTable] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + descTTable));
								
                            } else {
                                descTTable = strTempStation[1] + ", ";
                                descTTable += strTempStation[7] + " - ";
                                descTTable += strTempStation[8];
                                arrBFToCityTTable[arrITTable] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + descTTable));
								
                            }
                            descTTable = "";
                            arrITTable++;
                        }
                    });
                }
                return false;
            }
        }
    });
};
TTABLE_SEARCH.getRelavantfromStationTimeTables = function () {
    var descTTable = "";
    var arrCntTTable = "";
    var arrITTable = 0;
    $.each(arrCity1, function (index, value) {
        arrCntTTable = aCnt_1[value];
	
        if (typeof arrCntTTable != "undefined") {
            var strTempStation = arrCntTTable.split("^");
			
            if (strTempStation.length == 8) {
                descTTable = strTempStation[2] + "|";
                descTTable += strTempStation[3] + "|";
                descTTable += strTempStation[4]+ "|";
				 descTTable += strTempStation[5]+ "|";
				  descTTable += strTempStation[6]+ "|";
				   descTTable += strTempStation[7];
                arrBFFromCityTTable[arrITTable] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + descTTable));
				
            } else {
			    
                descTTable = strTempStation[1] + "|";
                descTTable += strTempStation[7] + "|";
                descTTable += strTempStation[8];
                arrBFFromCityTTable[arrITTable] = new Array(toUnicode(strTempStation[0] + "|" + strTempStation[1] + "|" + descTTable));
				
            }
            descTTable = "";
            arrITTable++;
        }
    });
};
TTABLE_SEARCH.buildfromStationTimeTables = function () {
    $(".TFromBooking .TibeFrom").autocomplete({
        width: 220,
      	minLength:3,
		autoFocus:false,
         source: function (request, response) {
		  var ResArray=processSelect(request, response,arrBFFromCityTTable);
		 response(ResArray);
		 if(ResArray.length==1){
			 if(ResArray[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray.length+ " result is available"
			}
			$("#TFromTemp").prev().html(msg);
		}else{
				$("#TFromTemp").prev().html(ResArray.length+ " results are available");
		}
          
        },
	    select:function(event,ui, data, formatted) {
		 event.preventDefault();
		var dispVal=ui.item.post;
		var arrS = ui.item.value;
		
	    $("#fromStationTimeTable").val(arrS);
		$("#autocompleteFromTimeTable").val(dispVal);
		$("#TToTemp").focus();
    //*** Added by uday on 13-03-2013 for autocomplete with tagedit ** //
		$("#TFromTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="TremFrom" title="clear" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".TFromBooking li").remove();
         $(this).before(v);
            }
		$("#TFromTemp").css("width","1px");
		$("#TToTemp").css("width","200px");
		$("#TFromTemp").css("display","none");
		$("#TToTemp").css("display","block");
		$(".TToBooking li").remove();
		$(".ui-autocomplete").hide();
		$("#TremFrom").live("click", function()
			{
			$("#TFromTemp").css("display","block");
			$("#TToTemp").css("display","block");
			$("#TFromTemp").css("width","200px");
			$("#fromStationTimeTable").val("");
		    $("#autocompleteFromTimeTable,#TFromTemp").val("");
			$(".TFromBooking li").remove();
			$(".TToBooking li").remove();
			arrBFToCityTTable=[];
			$("#TFromTemp").focus();
		}); 
	//****** Tag Edit End  ############# //
		//uday
        mappingLoad(arrS,'T',0);
		},
	
		focus:function (event,ui){
           event.preventDefault();
           var dispVal=ui.item.post;
		   var arrS = ui.item.value;
		
		if(arrS!=""){
		$("#fromStationTimeTable").val(arrS);
		$("#autocompleteFromTimeTable").val(dispVal);
		$("#TFromTemp").val(dispVal);
		}
        else{
		$("#fromStationTimeTable").val("");
		$("#autocompleteFromTimeTable,#TFromTemp").val("");
		}
          },
		change: function (event, ui){
			$("#TFromTemp").prev().html(" ");
		}

    });
	/*  $(".TFromBooking .TibeFrom").live('focusout', function (event) {
		
		    var dispVal=$("#autocompleteFromTimeTable").val();
		var val=$("#fromStationTimeTable").val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		   $("#TToTemp").focus();
    //*** Added by uday on 13-03-2013 for autocomplete with tagedit ** //
		$("#TFromTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <img class="p" id="TremFrom" src="/images/iberemove.gif"/></li>';
	
		 $(".TFromBooking li").remove();
         $(this).before(v);
        
		$("#TFromTemp").css("width","1px");
		$("#TToTemp").css("width","200px");
		$(".TToBooking li").remove();
		$("#TremFrom").live("click", function()
			{
			$("#TFromTemp").css("width","200px");
			$("#fromStationTimeTable").val("");
		    $("#autocompleteFromTimeTable").val("");
			$(".TFromBooking li").remove();
			$(".TToBooking li").remove();
			$("#TFromTemp").focus();
		}); 
	//****** Tag Edit End  ############# //
		//uday
        mappingLoad(val,'T',0);
		}
			 
	 }); */  
};
TTABLE_SEARCH.buildtoStationTimeTables = function () {
    //$(".TToBooking .TibeTo").flushCache();
	
	$(".TToBooking .TibeTo").autocomplete("destroy");
    $(".TToBooking .TibeTo").autocomplete( {
       
	    width: 220,
      	minLength:3,
		autoFocus:false,
         source: function (request, response) {
		  var ResArray=processSelect(request, response,arrBFToCityTTable);
		 response(ResArray);
		if(ResArray.length==1){
			if(ResArray[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray.length+ " result is available"
			}
			$("#TToTemp").prev().html(msg);
		}else{
			$("#TToTemp").prev().html(ResArray.length+ " results are available");
		}
           	
        },
	    select:function(event,ui, data, formatted) {
		 event.preventDefault();
		var dispVal=ui.item.post;
		var arrS = ui.item.value;
		
	    $("#toStationTimeTable").val(arrS);
        $("#autocompleteToTimeTable").val(dispVal);
        //$("#timeTablereturn").focus();
		$("#TimeTabledeparting").focus();
		//********** Added by uday on 13-03-2013 for autocomplete with tag edit  ******** //
		$("#TToTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="TremTo" title="clear" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".TToBooking li").remove();
         $(this).before(v);
$(".ui-autocomplete").hide();
            }
		$("#TToTemp").css("width","1px");
		$("#TToTemp").css("display","none");
		$("#TremTo").live("click", function()
			{
			$("#TToTemp").css("display","block");
			$("#TToTemp").css("width","200px");
			$("#toStationTimeTable").val("");
		    $("#autocompleteToTimeTable,#TToTemp").val("");
			$(".TToBooking li").remove();
			$("#TToTemp").focus();
		}); 
       //***** Tag Edit End  ********//
		},
	
		focus:function (event,ui){
           event.preventDefault();
		 var dispVal=ui.item.post;  
		var arrS = ui.item.value;
		
		if(arrS!=""){
        $("#toStationTimeTable").val(arrS);
        $("#autocompleteToTimeTable").val(dispVal);
		$("#TToTemp").val(dispVal);
		}
         else{
		$("#toStationTimeTable").val("");
        $("#autocompleteToTimeTable,#TToTemp").val("");
		}
        },
		change: function (event, ui){
			$("#TToTemp").prev().html(" ");
		}
	   
    });
    /*   $(".TToBooking .TibeTo").live('focusout', function (event) {
		
		    var dispVal=$("#autocompleteToTimeTable").val();
		var val=$("#toStationTimeTable").val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		     $("#timeTablereturn").focus();
		//********** Added by uday on 13-03-2013 for autocomplete with tag edit  ******** //
		$("#TToTemp").val("");
		var v = '<li class="acfb-data"><span>'+dispVal+'</span> <img class="p" id="TremTo" src="/images/iberemove.gif"/></li>';
		 
		 $(".TToBooking li").remove();
         $(this).before(v);
         
		$("#TToTemp").css("width","1px");
		$("#TremTo").live("click", function()
			{
			$("#TToTemp").css("width","200px");
			$("#toStationTimeTable").val("");
		    $("#autocompleteToTimeTable").val("");
			$(".TToBooking li").remove();
			$("#TToTemp").focus();
		}); 
       
		}
			 
	 }); */  
};
TTABLE_SEARCH.buildDatePicker = function () {
    TTABLE_SEARCH.datePickerFromTTable.init();
    TTABLE_SEARCH.datePickerToTTable.init();
};
TTABLE_SEARCH.initializeParameter = function () {
    TTABLE_SEARCH.strDDays = "7";
    TTABLE_SEARCH.strRDays = "14";
    var dtC = new Date();
    var dtCM = dtC.getMonth() + 1;
    var dtCD = dtC.getDate();
    TTABLE_SEARCH.strSysDate = DateToString(dtC);
    TTABLE_SEARCH.blnBuildReturn = true;
    TTABLE_SEARCH.strTripType = "R";
};
TTABLE_SEARCH.initializePreviousSearchCriteria = function (searchCritIndex) {
    if (TTABLE_SEARCH.existingSearchCriteria != null) {
        for (var j = 0; j < TTABLE_SEARCH.existingSearchCriteria.length; j++) {
            if (j == searchCritIndex) {
                $("#autocompleteFrom").val(TTABLE_SEARCH.existingSearchCriteria[j].fromLongName);
                $("#fromStation").val(TTABLE_SEARCH.existingSearchCriteria[j].fromIATA);
                $("#departing").val(dateChk(TTABLE_SEARCH.existingSearchCriteria[j].deptDate, "DD-MMM-YYYY"));
                if (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "R") {
                    $('input[name="tripType"]')[0].checked = true;
                    $("#returning").val(dateChk(TTABLE_SEARCH.existingSearchCriteria[j].retDate, "DD-MMM-YYYY"));
                    FLIGHT_SEARCH.enableField();
                }
                if (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "O") {
                    $('input[name="tripType"]')[1].checked = true;
                    FLIGHT_SEARCH.oneWayField();
                }
                $("#bookingClass").val(TTABLE_SEARCH.existingSearchCriteria[j].cabinClass);
                $("#selSearchType").val(TTABLE_SEARCH.existingSearchCriteria[j].searchType);
                $("#adults").val(TTABLE_SEARCH.existingSearchCriteria[j].adults);
                $("#children").val(TTABLE_SEARCH.existingSearchCriteria[j].children);
                $("#infants").val(TTABLE_SEARCH.existingSearchCriteria[j].infants);
                if (TTABLE_SEARCH.existingSearchCriteria[j].isFlexi == "Y") {
                    $("#flexibleDateOption").attr("checked", true);
                    FLIGHT_SEARCH.selectBestFare();
                } else {
                    $("#flexibleDateOption").attr("checked", false);
                    FLIGHT_SEARCH.selectBestFare();
                }
                FLIGHT_SEARCH.getRelavantToStations();
                FLIGHT_SEARCH.buildToStations();
                $("#toStation").val(TTABLE_SEARCH.existingSearchCriteria[j].toIATA);
                $("#autocompleteTo").val(TTABLE_SEARCH.existingSearchCriteria[j].toLongName);
                break;
            }
        }
    }
};
TTABLE_SEARCH.buildPreviousSearch = function (searchCritIndex) {
    var searchContent = "";
    searchContent = "<ul>";
    if (TTABLE_SEARCH.existingSearchCriteria != null) {
        for (var j = 0; j < TTABLE_SEARCH.existingSearchCriteria.length; j++) {
            if (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "M") {
                continue;
            }
            var adult = Number(TTABLE_SEARCH.existingSearchCriteria[j].adults);
            var child = Number(TTABLE_SEARCH.existingSearchCriteria[j].children);
            var infant = Number(TTABLE_SEARCH.existingSearchCriteria[j].infants);
            searchContent += "<li onclick='TTABLE_SEARCH.initializePreviousSearchCriteria(" + j + ")'>";
            searchContent += "<span class='flight'>" + TTABLE_SEARCH.existingSearchCriteria[j].fromLongName + " to " + TTABLE_SEARCH.existingSearchCriteria[j].toLongName + "</span>";
            searchContent += "<span class='details'>" + dateChk(TTABLE_SEARCH.existingSearchCriteria[j].deptDate, "DD-MMM-YYYY") + (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "R" ? " / " + dateChk(TTABLE_SEARCH.existingSearchCriteria[j].retDate, "DD-MMM-YYYY") : "") + "</span>";
            searchContent += "<span class='details'>" + (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "R" ? "Return" : "") + (TTABLE_SEARCH.existingSearchCriteria[j].tripType == "O" ? "One Way" : "") + "</span>";
            searchContent += "<span class='details'>" + (adult > 0 ? adult + " Adult" : "") + (child > 0 ? " " + child + " Children" : "") + (infant > 0 ? " " + infant + " Infant" : "") + "</span>";
            searchContent += "</li>";
        }
    }
    searchContent += "</ul>";
    $("#previousSearchesList").html(searchContent);
};
function Terrorhandling(messg)
{
if(isHomepage){
messg = messg.replaceAll("</td></tr>",",");
messg = messg.replace(removeformat_regex, "");
messg = messg.replaceAll(",","<br/>");
messg = "<div class='error-box darkpurple_error'><div class='error-box-info' id='mc_close'><p>"+messg+"</p></div></div>";
$('.darkpurple_error').remove();
$("#Hotel").prepend(messg);
$('.error-box').attr("tabindex","0").focus();
}else{
var err="<table  class='darkpurple_error'><tbody>"+messg+"</tbody></table>";
$("#timetablecont #tt_close").after(err);
$("#timetablecont .darkpurple_error").attr("tabindex","0").focus();
}
}
var timetableError;
TTABLE_SEARCH.validate = function () {
timetableError="";
 $("#timetablecont .darkpurple_error").remove();
 $(".TFromBooking").css("background-color","#F3F3ED");
 $("#TFromTemp").css("background-color","#F3F3ED");
 $(".TToBooking").css("background-color","#F3F3ED");
  $("#TToTemp").css("background-color","#F3F3ED");
 
    if (!TTABLE_SEARCH.validateEmpty()) {
        return false;
    }
    if ($("#TimeTabledeparting").val() == "") {
        timetableError+="<tr class='er'><td>Departure date is missing</td></tr>";

    }
    var data = $.datepicker.parseDate("dd-M-yy", $("#TimeTabledeparting").val());
    TTABLE_SEARCH.depatureDate = $.datepicker.formatDate("dd/mm/yy", data);
	  if ($("#TimeTabledeparting").val() != ""){
    if (!CheckDates(TTABLE_SEARCH.strSysDate, TTABLE_SEARCH.depatureDate)) {
         timetableError+="<tr class='er'><td>Departure date cannot be before today's date</td></tr>";
	  $('#TimeTabledeparting').attr('style', 'background-color: #FEFFAF !important');
		}
    }
    if (TTABLE_SEARCH.blnBuildReturn) {
        if ($("#TimeTablereturning").val() == "") {
            timetableError+="<tr class='er'><td>Return date is missing</td></tr>";;

        }
        var data = $.datepicker.parseDate("dd-M-yy", $("#TimeTablereturning").val());
        TTABLE_SEARCH.returnDate = $.datepicker.formatDate("dd/mm/yy", data);
		 if ($("#TimeTablereturning").val() != "") {
        if (!CheckDates(TTABLE_SEARCH.depatureDate, TTABLE_SEARCH.returnDate)) {
            timetableError+="<tr class='er'><td>Return date cannot be before departure date</td></tr>";
			$('#TimeTablereturning').attr('style', 'background-color: #FEFFAF !important');
        }
		}
    }
	if(timetableError!="")
	{
	Terrorhandling(timetableError);
	return false;
	}
    return true;
};
TTABLE_SEARCH.validateEmpty = function () {
    if (($("#fromStationTimeTable").val() == "") || ($("#autocompleteFromTimeTable").val() == "type/select departure city") || ($("#autocompleteFromTimeTable").val() == "")) {
      timetableError+="<tr class='er'><td>Departure airport is missing</td></tr>";
	  $(".TFromBooking").css("background-color","#FEFFAF");
      $("#TFromTemp").css("background-color","#FEFFAF");
	 
    }
    if (($("#toStationTimeTable").val() == "") || ($("#autocompleteToTimeTable").val() == "type/select destination city") || ($("#autocompleteToTimeTable").val() == "")) {
	    timetableError+="<tr class='er'><td>Destination airport is missing</td></tr>";
      $(".TToBooking").css("background-color","#FEFFAF");
      $("#TToTemp").css("background-color","#FEFFAF");
    }
    return true;
};
$("#TFromTemp").live("keydown", function (event) {
  $(".TFromBooking").css("background-color","#F3F3ED");
 $("#TFromTemp").css("background-color","#F3F3ED");
 
});

$("#TToTemp").live("keydown", function (event) {
   $(".TToBooking").css("background-color","#F3F3ED");
  $("#TToTemp").css("background-color","#F3F3ED");
});

TTABLE_SEARCH.showMessage = function (message) {
    $("#timeTableDialog").html("<p class='messageBox'>" + message + "</p>");
    $("#timeTableDialog").dialog({
        modal: true
    });
};
TTABLE_SEARCH.setCalenderDate = function () {
    var strSysDateDef = TTABLE_SEARCH.strSysDate;
    var dtSysDate = StringToDate(TTABLE_SEARCH.strSysDate);
    strSysDateDef = DateToString(addDays(dtSysDate, Number(arrParams[18])));
    strSeleDDay = DateToString(addDays(StringToDate(strSysDateDef), Number(TTABLE_SEARCH.strDDays)));
    strSeleRDay = DateToString(addDays(StringToDate(strSysDateDef), Number(TTABLE_SEARCH.strRDays)));
    $("#TimeTabledeparting").val(dateChk(strSeleDDay, "DD-MMM-YYYY"));
    $("#TimeTablereturning").val(dateChk(strSeleRDay, "DD-MMM-YYYY"));
};
TTABLE_SEARCH.formEvent = function () {
    $("#timeTableoneway").live("click", TTABLE_SEARCH.oneWayField);
    $("#timeTablereturn").live("click", TTABLE_SEARCH.enableField);

	
	$("#TFromTemp").click(function () {
        if ($("#fromStationTimeTable").val() == "") {  //uday
            $("#TFromTemp").val("");
        }
        $("#autocompleteFromTimeTable,#TFromTemp").val("");
        $("#TToTemp").val(toUnicode(""));
		return false;
    });
    $("#TToTemp").click(function () {
        if ($("#toStationTimeTable").val() == "") {
            $("#autocompleteToTimeTable,#TToTemp").val("");
        }
        $("#TToTemp").val("");

        return false;
    });
	
};
TTABLE_SEARCH.oneWayField = function () {
    var disable = $("span.searchRetInp").find("#TimeTablereturning");
    if (disable.length == 1) {
        $("#TimeTablereturning").parents("span.searchRetInp").css("display", "none");
        $("#searchRetText").css("display", "none");
        TTABLE_SEARCH.blnBuildReturn = false;
        TTABLE_SEARCH.strTripType = "O";
    }
};
TTABLE_SEARCH.enableField = function () {
    if (!($("#TimeTablereturning").parents("span.searchRetInp").is(":visible"))) {
        $("#TimeTablereturning").parents("span.searchRetInp").css("display", "block");
        $("#searchRetText").css("display", "block");
        TTABLE_SEARCH.blnBuildReturn = true;
        TTABLE_SEARCH.strTripType = "R";
    }
};
TTABLE_SEARCH.fillSearchCriteria = function (searchCriteria) {
    $("#autocompleteFrom").val(searchCriteria.fromLongName);
    $("#fromStation").val(searchCriteria.from);
    FLIGHT_SEARCH.getRelavantToStations();
    FLIGHT_SEARCH.buildToStations();
    $("#toStation").val(searchCriteria.to);
    $("#autocompleteTo").val(searchCriteria.toLongName);
    if (searchCriteria.stringDepartureDate != null && searchCriteria.stringDepartureDate != "") {
        $("#departing").val(searchCriteria.stringDepartureDate);
    }
    if (searchCriteria.tripType == "R") {
        $('input[name="tripType"]')[0].checked = true;
        if (searchCriteria.stringArrivalDate != null && searchCriteria.stringArrivalDate != "") {
            $("#returning").val(searchCriteria.stringArrivalDate);
        }
        FLIGHT_SEARCH.enableField();
    }
    if (searchCriteria.tripType == "O") {
        $('input[name="tripType"]')[1].checked = true;
        FLIGHT_SEARCH.oneWayField();
    }
};

//--------component js for pagetitle starts------------
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.toCapitalize = function() {   
return this.toUpperCase().replace(/^.|\s\S/g, function(a)
 {
 return a.toUpperCase(); 
 }); 
 } 
 function TermsPopup(divTerms)
		{
			
			var message=document.getElementById(divTerms).innerHTML;
			$('#cover_tc_popup').html('<div class="messageBox">' + message + '</div>');
			$('#cover_tc_popup').dialog({
				title: '<span style="font:bold 1em futuraMedium;color:#662046">TERMS & CONDITIONS</span>',
				modal: true
			});
		}

		 function showimage(title,name)
		{
			alert("call");
			
			//var message=document.getElementById(divTerms).innerHTML;
			$('#cover_tc_popup').html('<div class="messageBox"><img src="' + title + '"></div>');
			$('#cover_tc_popup').dialog({
				title: '<span style="font:bold 1em futuraMedium;color:#662046">'+name+'</span>',
				modal: true
			});
		}





 function toTitleCase(str) 
 {    
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); 
 } 
function setPageTitle(pageTitle, countryname, titles)
{
//if(pageTitle!=''){
pageTitle = document.title;
titles = pageTitle+" | Qatar Airways";
titles = titles.replace("_"," ");
titles = toTitleCase(titles);
//alert(titles);
//}
return titles;
}
function setPageTitle2(titless, countryname)
{
 var mtitle='';
     if(titless.indexOf("|")==-1){
     mtitle = String(titless).trim();
     mtitle = mtitle.replace("_"," "); 
     //mtitle = toTitleCase(mtitle);
     mtitle = mtitle+" | Qatar Airways";
     }else{
     titless = titless.split("|",1);
     mtitle = String(titless).trim();
     mtitle = mtitle.replace("_"," ");
     //mtitle = mtitle.replace("-"," ");
     //mtitle = toTitleCase(mtitle);
     mtitle = mtitle+" | Qatar Airways";
     }
return mtitle;
}
/* hot keys working code done by santosh on 16th jan-2012*/
$("#pinCodeRHS").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#pc_login_rhs').click();

    }
});
$("#promo_holidayNav").live("keydown", function (event) {

    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#searchHolidays').click();

    }
});
$("#Class-type").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('.searchHolidays').click();

    }
});
$("#promo_hotelNav").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#searchHotels').click();
    }
});
$("#adultsh1").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#searchHotels').click();
    }
});
$("#childrenh1").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#searchHotels').click();

    }
});

$("#Infanth1").live("keydown", function (event) {
    if (event.keyCode == 13) {
        //$("#check_online").click();
        $('#searchHotels').click();

    }
});
$("#selSearchType").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();

    }
});

$("#selSearchType").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();

    }
});
$("#TimeTablereturning").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#timeTableResult").click();

    }
});
$("#TimeTabledeparting").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#timeTableResult").click();

    }
});
$("#check_ffnumberselect").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#check_online").click();

    }
});
$("#HpinCode").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#pc_longin").click();

    }
});
/*
$("#bc_mb_infants").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();

    }
});
$("#bc_mb_children").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();

    }
});
$("#bc_mb_adults").live("keydown", function (event) {
    if (event.keyCode == 13) {
        $("#bookFlight").click();

    }
});
*/
$("#bc_multicity").live("click", function () {
  $("#bookcont .darkpurple_error").remove();
});

// =============== Flight Status  developed by uday Function Start=====================   //
var FSClick="0";
var temp_formt="";
var code="";
var temp_to="";

TTABLE_SEARCH.flightStatus = function(){
 var today = new Date();//get today's date
						var dayYesterday = new Date();;
						dayYesterday.setDate(today.getDate() - 2);//get day before yesterday's date
						var yesterday = new Date();;
						yesterday.setDate(today.getDate() - 1);//get yesterday's date
						var tomorrow = new Date();
						tomorrow.setDate(today.getDate() + 1);//get tomorrow's date
						
						var tomorrow1 = new Date();
						tomorrow1.setDate(today.getDate() + 2);//get tomorrow's date
						
						var tomorrow2 = new Date();
						tomorrow2.setDate(today.getDate() + 3);//get tomorrow's date
						
						var tomorrow3 = new Date();
						tomorrow3.setDate(today.getDate() + 4);//get tomorrow's date
						
						var tomorrow4 = new Date();
						tomorrow4.setDate(today.getDate() + 5);//get tomorrow's date
						
						
						var month = today.getMonth();
						var year = today.getYear();
						var fdtm = new Date(year, month, 1);//first day of month
						var ldtm = new Date(year, month + 1, 0);//last day of month
						//Show Result depending upon type

						var today_value = today.defaultView();
						var yesterday_value = yesterday.defaultView();
						var dayYesterday_value=dayYesterday.defaultView();
						var tomorrow_value = tomorrow.defaultView();
						var tomorrow1_value = tomorrow1.defaultView();
						var tomorrow2_value = tomorrow2.defaultView();
						var tomorrow3_value = tomorrow3.defaultView();
						var tomorrow4_value = tomorrow4.defaultView();
						var today_lable = today.dropDownDate();
						var yesterday_lable = yesterday.dropDownDate();
						var dayYesterday_lable = dayYesterday.dropDownDate();
						var tomorrow_lable = tomorrow.dropDownDate();
						var tomorrow1_lable = tomorrow1.dropDownDate();
						var tomorrow2_lable = tomorrow2.dropDownDate();
						var tomorrow3_lable = tomorrow3.dropDownDate();
						var tomorrow4_lable = tomorrow4.dropDownDate();

						var date_values = '';
						//date_values+='<select class="date" id="status_date" TABINDEX="1" name="status_date" style="width:150px !important">';
						date_values+='<select class="date" id="status_date" name="status_date">';
						date_values+='<option value="'+dayYesterday_value+'">'+dayYesterday_lable+'</option>';
						date_values+='<option value="'+yesterday_value+'">'+yesterday_lable+'</option>';
						date_values+='<option  selected="t" value="'+today_value+'">'+today_lable+'</option>';
						date_values+='<option value="'+tomorrow_value+'">'+tomorrow_lable+'</option>';
						date_values+='<option value="'+tomorrow1_value+'">'+tomorrow1_lable+'</option>';
						date_values+='<option value="'+tomorrow2_value+'">'+tomorrow2_lable+'</option>';
						date_values+='<option value="'+tomorrow3_value+'">'+tomorrow3_lable+'</option>';
						date_values+='<option value="'+tomorrow4_value+'">'+tomorrow4_lable+'</option>';
						date_values+='</select>';
						if(!isHomepage){
							document.getElementById("getDateFS").innerHTML=date_values;							
						}
if(FSClick=="0")
{
FSClick=1;
////qadev/qr_redesign/main/qaweb_new/WORKAREA/work/images/carousel
	//$.getJSON("http://newqrsit.qatarairways.com.qa/script/results.json",function(result)
	//$.getJSON("http://newstguat.qatarairways.com.qa/script/results.json",function(result)
	$.getJSON("/script/results.json",function(result)
	//$.getJSON("http://qadev.polaris.co.in/script/results.json",function(result)
	//$.getJSON("http://teamsite.qatarairways.com.qa/script/results.json",function(result)	
	{
	 $.each(result.PODMAPPING, function(key) {
	 
	  FromStation = result.PODMAPPING[key];
	  //alert("The FromStation"+FromStation);
	  //alert(key+"the key")
      //var temp_val =FromStation.LN+","+FromStation.CN+" - "+FromStation.AN;	
      //alert(temp_val+"the temp_val");
      //var ita_val=FromStation.LN;
//alert(ita_val);	  
        //data_array.push(temp_val);	
				//data_array= aCnt_1[key];
				temp_formt=aCnt_1[key];
				//alert(temp_formt+"::temp_formt");
				//var temp_ita=temp_formt.LN+","+temp_formt.CN+" - "+temp_formt.AN;
                if(temp_formt!=undefined)
				{
				  var LN = temp_formt.split("^");
					//alert("LN Array::"+LN);
					if(LN.length == 8)
					{
						code = LN[1]+",";
						code += LN[3]+" - ";
						code += LN[4];
						//var res=LN[1]+", "+LN[3]+" - "+LN[4];
						var res=LN[0]+"|"+LN[1]+"|"+LN[2]+"|"+LN[3]+"|"+LN[4]+"|"+LN[5]+"|"+LN[6]+"|"+LN[7];
						//alert("the result"+res);
						data_array.push(toUnicode(res));
						code="";
					}
					else
					{
						code = LN[1]+", ";
						code += LN[7]+" - ";
						code += LN[8];
						/*Create arrBFFromCityTTable array with specific Locals*/
						var res=LN[1]+", "+LN[7]+" - "+LN[8];
						//alert("the result"+res);
						data_array.push(toUnicode(res));
						code="";
					}
			    } 
			
				//alert(LN+"LN");
				//data_array.push(temp_val);
				//alert(data_array+"the data_array");

		  });
 $(".NavFromBooking .ibeFrom").autocomplete({
          width: 220,
      	minLength:3,
		autoFocus: false,
        source: function (request, response) {
		 var ResArray=processSelect(request, response,data_array);
		 response(ResArray);
		 if(ResArray.length==1){
			 if(ResArray[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray.length+ " result is available"
			}
			$("#NavFromTemp").prev().html(msg);
		}else{
			$("#NavFromTemp").prev().html(ResArray.length+ " results are available");
		}
        },
		change: function (event, ui){
			$("#NavFromTemp").prev().html(" ");
		},
	    select:function(event,ui, data, formatted) {
		event.preventDefault();
		var dispVal=ui.item.post;
		var arrS = ui.item.value;
        dispVal= dispVal.replace(/\([^\]]+\)/g, '('+arrS+')');
		 if(arrS!=""){
		            To=[];
				   $("#nav_StatusfromValue").val(arrS);
                    $("#nav_Statusfrom").val(dispVal);
			       $("#nav_StatusTo,#NavToTemp").val("");
				  var f="acfb-data";
		var v = '<li class="'+f+'"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="remFrom" title="clear" src="/images/iberemove.gif"/></a></li>';
		 if (formatted != "N") {
		 $(".NavFromBooking li").remove();
         $(this).before(v);
$(".ui-autocomplete").hide();
            }
        $("#NavFromTemp").css("width","0px");
		$("#NavFromTemp").css("display","none");
		$("#NavToTemp").css("width","200px");
		$(".NavToBooking li").remove();
		$("#NavToTemp").val("");
		$("#nav_StatusTo,#NavToTemp").val("");
		$("#nav_StatusToValue").val("");
				   	$("#remFrom").live("click", function()
			{
			$("#NavFromTemp").css("display","block");
			$("#NavToTemp").css("display","block");
		    $("#NavFromTemp").val("");
			$("#NavFromTemp").css("width","200px");
			$("#nav_Statusfrom,#NavFromTemp").val("");
		    $("#nav_StatusfromValue").val("");
			$(".NavFromBooking li").remove();
			$(".NavToBooking li").remove();
			$("#NavToTemp").val("");
			$("#nav_StatusTo,#NavToTemp").val("");
			$("#nav_StatusToValue").val("");
			$("#NavFromTemp").focus();
		});   
			       $.each(result.PODMAPPING[arrS], function(index, val) {
					   temp_to=aCnt_1[val];
					   if(temp_to!=undefined)
					   {
					  var LN1 = temp_to.split("^");   // Pass the IATA Code to CityList_en.js file
					
					  if(LN1.length == 8){
					  // alert("LN1.length:"+LN1.length);
						code = LN1[1]+",";
						code += LN1[3]+" - ";
						code += LN1[4];
						var res_to=LN1[0]+"|"+LN1[1]+"|"+LN1[2]+"|"+LN1[3]+"|"+LN1[4]+"|"+LN1[5]+"|"+LN1[6]+"|"+LN1[7];
						//alert("the result"+res_to);
						To.push(toUnicode(res_to));
						
						
						}else{
						   
							code = LN1[1]+", ";
							code += LN1[7]+" - ";
							code += LN1[8];
							var res_to=LN1[1]+", "+LN1[7]+" - "+LN1[8];
							//alert("the result"+res_to);
							To.push(toUnicode(res_to));
						}
					 
					  }
		         }); 
			 
				}
				//alert("To LIst::"+To);
$(".NavToBooking .ibeTo").autocomplete("destroy");
$("#NavToTemp").focus();
$(".NavToBooking .ibeTo").autocomplete({
         minLength:3,
		 autoFocus: false,
		 source:function (request, response) {
		 var ResArray1=processSelect(request, response,To);		 
		 response(ResArray1);
		 if(ResArray1.length==1){
			 if(ResArray1[0].value == ""){
				var msg = "0 results are available";
			}else{
				var msg = ResArray1.length+ " result is available"
			}
			$("#NavToTemp").prev().html(msg);
		}else{
			$("#NavToTemp").prev().html(ResArray1.length+ " results are available");
		}
        },
	          
		
				select:function(event,ui, data, formatted) {
					event.preventDefault();
					
					var arrS = ui.item.value;
					var dispVal=ui.item.post;
					dispVal= dispVal.replace(/\([^\]]+\)/g, '('+arrS+')');
					if(arrS!=""){
						$("#nav_StatusToValue").val(arrS);
						$("#nav_StatusTo").val(dispVal);
						$("#NavToTemp").val("");
						var f="acfb-data";
						var v = '<li class="'+f+'"><span>'+dispVal+'</span> <a class="clrButtn" href="javascript:void(0)"><img class="p" id="remTo" title="clear" src="/images/iberemove.gif"/></a></li>';
						 if (formatted != "N") {
						 $(".NavToBooking li").remove();
						 $(this).before(v);
						$(".ui-autocomplete").hide();
						 //$("#status_date").focus();
						 $("#status_searchoffer").focus();
							}
						$("#NavToTemp").css("width","0px");
						$("#NavToTemp").css("display","none");
						$(".ui-autocomplete").hide();		


						$("#remTo").live("click", function()
							{
							$("#NavToTemp").css("display","block");
							$("#NavToTemp").val("");
							$("#NavToTemp").css("width","200px");
							$("#toStation").val("");
							$("#nav_StatusTo,#NavToTemp").val("");
							$(".NavToBooking li").remove();
							$("#NavToTemp").focus();
						});
					}	
				},
				
				focus:function (event,ui){
				   event.preventDefault();
					 var dispVal=ui.item.post;  
					var arrS = ui.item.value;
					
					if(arrS!=""){
					$("#nav_StatusToValue").val(arrS);
					$("#nav_StatusTo").val(dispVal);
					$("#NavToTemp").val(dispVal);
					}
					 else{
					$("#nav_StatusToValue").val("");
					$("#nav_StatusTo,#NavToTemp").val("");
					}
				},
				change: function (event, ui){
					$("#NavToTemp").prev().html(" ");
				}
	   
	          });
			   
		},
		
		focus:function (event,ui){
           event.preventDefault();
		  
		var arrS = ui.item.value;
		var dispVal=ui.item.post;
		dispVal= dispVal.replace(/\([^\]]+\)/g, '('+arrS+')');
         if(arrS!=""){
		 
		 To=[];
				   $("#nav_StatusfromValue").val(arrS);
        $("#nav_Statusfrom").val(dispVal);
		$("#NavFromTemp").val(dispVal);	    
		 }
		 else{
		 
		     $("#nav_StatusfromValue").val("");
		 }
       
          }	
		}); 
		/*   $("#nav_Statusfrom").live('focusout', function (event) {
		var dispVal=$("#nav_Statusfrom").val();
		var val=$("#nav_StatusfromValue").val();
		if(dispVal!="" && dispVal!=null && val!="" && val!=null){
		To=[];
		$("#FromTemp").val("");
		  
		 $.each(result.PODMAPPING[val], function(index, val) {
	           temp_to=aCnt_1[val];
			   if(temp_to!=undefined)
			   {
			   
	          var LN1 = temp_to.split("^");   // Pass the IATA Code to CityList_en.js file
             //alert("LN1::"+LN1);
			  if(LN1.length == 8){
	  			code = LN1[1]+",";
	  			code += LN1[3]+" - ";
	  			code += LN1[4];
	  			var res_to=LN1[0]+"|"+LN1[1]+"|"+LN1[2]+"|"+LN1[3]+"|"+LN1[4]+"|"+LN1[5]+"|"+LN1[6]+"|"+LN1[7];
				//alert("the result"+res);
				To.push(res_to);
				
				
			}else{
				code = LN1[1]+", ";
				code += LN1[7]+" - ";
				code += LN1[8];
				var res_to=LN1[1]+", "+LN1[7]+" - "+LN1[8];
				//alert("the result"+res);
				To.push(res_to);
			}
			
              }
		         }); 
				 $("#nav_StatusTo").val("");
				 $("#nav_StatusTo").focus();
		
		}
		
		}); */
  
});


$("#NavFromTemp").attr("placeholder", "City or airport");
$("#NavToTemp").attr("placeholder", "City or airport");

$("#NavFromTemp").click(function() {
$("#NavFromTemp").val("");
$("#NavToTemp").attr("placeholder", "Type/Select destination city");
return true;
	});
	$("#NavToTemp").click(function() {
    $("#NavToTemp").val("");
		return true;
	});
}
}
 
/* For stand-alone ibe widget code included by pavan*/

/*function createCookie(names ,values , exdays) { 
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var values=escape(values) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());

document.cookie = names+"="+values+";path=/";
}
*/

function createCookie(names ,values , exTimeInSec) { 
		var exdate=new Date();
	exdate.setTime(exdate.getTime()+(exTimeInSec*1000));
		var values=escape(values) + ((exTimeInSec==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie = names+"="+values+";path=/";
		}	
function readCookieVal(name) { 
	var nameEQ = name + "=";  
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) { 
	var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);  
	if (c.indexOf(nameEQ) == 0) 		{
	var val = c.substring(nameEQ.length,c.length);
	return unescape(val);
	}  
	} 
	return null;
	}

/* stand-alone code end */



/* for carousel order in eglish related sites*/

$(document).ready(function() {

$("#tDeparting").attr("disabled", "disabled");
   // $("#tDeparting").prop("disabled",true);
	$("#fDeparting").live("click", datePickerFromOffers);
  $("#tDeparting").live("click", datePickerToOffers);


function datePickerFromOffers() {
			$.datepicker.setDefaults( $.datepicker.regional["en-GB"] );
            $(this).datepicker({
                         numberOfMonths: 2,
						hideIfNoPrevNext:true,	
						showButtonPanel: true,
						//showAnim:'slide',
						maxDate: '+10M',
						isFlageText:false,
						minDate: new Date(),
						onSelect: function( selectedDate ,inst) {
							$("#tDeparting").datepicker( "option", "minDate",$("#fDeparting").val());
                        $("#tDeparting").removeAttr("disabled");
						//alert(selectedDate);
                         
							 window.setTimeout('$("#tDeparting").click()',2);
						}	 
				 }, ("option", "dayNamesMin")).focus();
        }
   
   

		 function datePickerToOffers() {
			 $("#tDeparting").datepicker( "option", "minDate",$("#fDeparting").val());
			$.datepicker.setDefaults( $.datepicker.regional["en-GB"] );
            $(this).datepicker({
                 hideIfNoPrevNext:true,	
                 numberOfMonths: 2,
                showButtonPanel: true,
				isFlageText:true,	
              //  minDate:$("#tDeparting").val(),
                dateFormat: "dd-M-yy",
               maxDate: '+10M',
						onSelect: function( selectedDate ,inst) {}
                      }, ("option", "dayNamesMin")).focus();
        }
// offers start

$("#country2").live('change', function()
 {
 //alert($("#country").val());
if($("#country").val() !="" &&  $("#country").val() !=null && $("#country").val() !="undefined")
$("#country").val($(this).val());
});


function setOfferscheckbox(checkbox)

{
//alert(document.getElementById("Privilege Club"));
if(document.getElementById("Privilege Club") !=null && document.getElementById(checkbox) !="undefined"  && 
document.getElementById("Car Rentals") !=null && document.getElementById(checkbox) !="undefined"  && 
document.getElementById("Flights") !=null && document.getElementById(checkbox) !="undefined" ){
	if(checkbox =="Car Rentals")
	{
		document.getElementById(checkbox).checked = true;
		document.getElementById("Flights").checked = false;
		document.getElementById("Privilege Club").checked = false;
	}
    else if (checkbox =="Flights")
    {
		document.getElementById(checkbox).checked = true;
		document.getElementById("Car Rentals").checked = false;
		document.getElementById("Privilege Club").checked = false;
    }
	else if (checkbox =="Privilege Club")
    {
		document.getElementById(checkbox).checked = true;
		document.getElementById("Car Rentals").checked = false;
		document.getElementById("Flights").checked = false;
    }
	else if(checkbox =="ALL")
	{
		document.getElementById("Car Rentals").checked = false;
		document.getElementById("Flights").checked = false;
		document.getElementById("Privilege Club").checked = false;
	}

}
}
$("#type_list_tab").live('change', function()
{
setOfferscheckbox($(this).val());
});

//offers end




    var car_divhtml = "";
    $(".slider-feature").each(function(){
    car_divhtml = car_divhtml+$(this).html();
    car_divhtml=car_divhtml+"^";
    
    });
    
    //$("#slider").empty();
    var result=car_divhtml.split("^");
        var car_text ='<div class = "slider-feature">'+result[0]+"</div>";
    for (var i = result.length-2;i >= 1; --i)
    {
    car_text=car_text +'<div class = "slider-feature">' + result[i]+ "</div>";
    } 
	//alert(car_text);
    $("#slider").html(car_text);
	 $(".slider-caption").each(function(){
	   	 $(this).find("h2").prependTo($(this).find("a"));
    });
	

if(window.location.href.indexOf("homepage") == -1) {
	   $('#skipButton').append('<a class="skip-main" href="javascript:void(0);" onclick="javascript:skipToBookingInner();">Skip to booking</a>');
	   $('#skipButton').after('<a class="skip-main" href="javascript:void(0);" onclick="javascript:skipToContentInner();">Skip to main content</a>');	   
    }	
$("#flighttab_wrapper").on("focusin", ".clrButtn", function(){
		$(this).keydown(function (e) {
			e.stopPropagation();
			if (e.keyCode === 13){
				$(this).find('img').trigger('click');
			} 
		});
	});
});
	
function skipToBookingInner(){	
	setTimeout(function() {
		$("#book").click();
		$("#bc_return").click();
		$("#FromTemp").focus();
	}, 100);
} 
function skipToContentInner(){

	setTimeout(function() {
		$("#ContentArea a:first").focus();
		//if($("#CLiquid").length){
		//	$("#ContentArea a:first").focus();
		//}else{
		//	$("#RLiquid  a:first").focus();
		//}
	}, 100);
} 	   
/* carousel code end */

// Google map

$("a#googleMap1").click(function(){
$("div#googleMapApi").dialog({
resizable:false,
modal:true,
width:770,
minHeight:525,
position:["center","center"],
overlay:{backgroundColor:"#000",opacity:0.5}
});
return false
});


/*** Offers tab script added on 24-01-2013    **/



/** End of the offers tab script  **/


/* for full screen template */
$(window).load(function () {
	 if(document.getElementById("CLiquidFullScreen")){
	 var hgt = $("div#CLiquidFullScreen").height();
		if(hgt != "" && hgt != null && hgt != undefined){
			var newhgt = hgt+30+'px';
			$("#CLiquidFullScreen").parent().height(newhgt);
		}
	}
});

/* end of full screen template */
$("#adults").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});
$("#children").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});
$("#infants").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});	

$("#bc_mb_adults").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});
	
$("#bc_mb_children").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});
$("#bc_mb_infants").live("change",function()
{
$(this).css("background-color","#F3F3ED");
});	

/* For removing the departure/dest place when clicked on close button START */
$("#remFrom").live("click", function()
{
	var ulClass= $(this).parent().parent().attr('class');
	if(ulClass.indexOf('FromBooking') != -1){
		$('#autocompleteFrom').removeAttr('value');
	}else{
		$('#autocompleteTo').removeAttr('value');
	}
	$(this).parent().remove();			
});
/* For removing the departure/dest place when clicked on close button END */


$("#bookFlightNSP").live("click", function (event) {
	var tempFrom= $("#autocompleteFrom").val();
	var tempTo= $("#autocompleteTo").val();
	var displFcity=tempFrom.split("(")[0];
	var displTcity=tempTo.split("(")[0];
	$("#autocompleteFrom").val($.trim(displFcity));
	$("#autocompleteTo").val($.trim(displTcity));
	 var newInput = $('<input type="hidden" name="selLang" value="EN" />');
 	 $("#book_desc").before(newInput);

	var frm=$("#fromStation").val();   // udaya
	if(frm !="")
	{
	mappingLoad(frm,'P',0);
	}
	ibebookingError="";
    var FSobjFrm = getFieldByID("homeSearch");
  /*  if (($("#departing").val() != "") && ($("#returning").val() != "")) {
        var frm = $.datepicker.parseDate("dd-M-yy", $("#departing").val());
        frm = $.datepicker.formatDate("dd-mm-yy", frm);
        frm = frm.split("-");
        var tempfromdate = (frm[0] + " ^" + frm[1] + "/" + frm[2]);
        var to = $.datepicker.parseDate("dd-M-yy", $("#returning").val());
        var temptodate = "";
        if (to != null) {
            to = $.datepicker.formatDate("dd-mm-yy", to);
            to = to.split("-");
            temptodate = (to[0] + " ^" + to[1] + "/" + to[2]);
        } else {
            temptodate = " ^";
        }
    }*/
    FSobjFrm.target = "_top";
    if (FLIGHT_SEARCH.validate()) {
		var FSURL="";
		$("#departing").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#departing").val())));
		//if($("#returning").val() != ""){
		if(FLIGHT_SEARCH.blnBuildReturn){
		$("#returning").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#returning").val())));}
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            FSURL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
        } else {
            //objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
			//FSURL = "http://nspuat.qatarairways.com.qa/nsp/views/showBooking.action?selLang=en";
	FSURL = "https://booking.qatarairways.com/nsp/views/showBooking.action?selLang=en";

        }
    FSobjFrm.action = FSURL;
//  alert(FSURL);
	FSobjFrm.method = "get";
    FSobjFrm.submit();
    }
});
$("#rhsbookFlightNSP").live("click", function (event) {
    var objFrm = getFieldByID("Rhs-Search");
   
	var tempFrom= $("#RHSautocompleteFrom").val();
	var tempTo= $("#RHSautocompleteTo").val();
	var displFcity=tempFrom.split("(")[0];
	var displTcity=tempTo.split("(")[0];
	$("#RHSautocompleteFrom").val($.trim(displFcity));
	$("#RHSautocompleteTo").val($.trim(displTcity));
	 var newInput = $('<input type="hidden" name="selLang" value="EN" />');
 	 $(".t06flightSearchIBE").before(newInput);

    objFrm.target = "_top";
    if (RHS_FSEARCH.validate()) {

	$("#rhsdeparting").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#rhsdeparting").val())));
	if($("#rhsreturning").val() != ""){
	//if(FLIGHT_SEARCH.blnBuildReturn){
	$("#rhsreturning").val($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", $("#rhsreturning").val())));}

        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
           // objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
		objFrm.action = "https://booking.qatarairways.com/nsp/views/showBooking.action?selLang=en";
        } else {
           // objFrm.action = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=BF&selLang=en";
		objFrm.action = "https://booking.qatarairways.com/nsp/views/showBooking.action?selLang=en";
        }
	objFrm.method = "get";
        objFrm.submit();
    }
});
$("#frmMultibtnNSP").live("click", function (event) {
	
	var multiFarr = document.getElementsByName("multicityFrom");
	for(var j=0;j<multiFarr.length;j++){
			var tempFrom = multiFarr[j].value;
			var displFcity=tempFrom.split("(")[0];
			multiFarr[j].value = $.trim(displFcity);
	}
	var multiTarr = document.getElementsByName("multicityTo");
	for(var j=0;j<multiTarr.length;j++){
			var tempTo = multiTarr[j].value;
			var displTcity=tempTo.split("(")[0];
			multiTarr[j].value = $.trim(displTcity);
	}

MultiError="";
 	var newInput = $('<input type="hidden" name="selLang" value="EN" />');
  	$(".multiBooking").before(newInput);
	 $("#bookcont .darkpurple_error").remove();
    var objFrm = getFieldByID("frmMultiSearch");
    objFrm.target = "_top";
    if (MULTICITY_FLIGHT_SEARCH.validate()) {
		var datesarr = document.getElementsByName("departing");
		 for(var j=1;j<datesarr.length;j++){
			datesarr[j].value = ($.datepicker.formatDate("yy-mm-dd", $.datepicker.parseDate("dd-M-yy", datesarr[j].value)));
		 }
        if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
            objFrm.action = "https://ibeuat.qatarairways.com.qa/qribe-web/public/showBooking.action?widget=MLC&selLang=en";
        } else {
            //objFrm.action = "https://ibeuat.qatarairways.com.qa/qribe-web/public/showBooking.action?widget=MLC&selLang=en";
			  objFrm.action = "https://booking.qatarairways.com/nsp/views/showBooking.action?selLang=en";
        }
		
        objFrm.method = "get";
        objFrm.submit();
    }
});
$("#submitMMBNSP").live("click", function (event) {

 // $('input[id!="mc_lastname"][id!="mc_bookref"]').attr("disabled", true);
$("#mc_bookref").attr("name","pnr");
$("#mc_lastname").attr("name","lastName");

	var newInput = $('<input type="hidden" name="selLang" value="EN" />');
	$('input#mc_lastname').before(newInput);

    Managebooking="";      // Errorform handling
    $("#managecont .darkpurple_error").remove();
    var objFrm = getFieldByID("manageMyBooking");
	var v = $("#temp").val();
    if (v == "1") {
        if (validatePNR()) {
            var URL = "";
            if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
               // URL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MB&mode=RVWMB&selLang=en";
		URL  = "http://booking.qatarairways.com/nsp/views/manageBooking.action?selLang=en";  		
            } else {
               // URL = "https://booking.qatarairways.com/qribe-web/public/showBooking.action?widget=MB&mode=RVWMB&selLang=en";				
		 URL = "http://booking.qatarairways.com/nsp/views/manageBooking.action?selLang=en";  						
            }
 
            objFrm.action = URL;
		objFrm.method = "get";
            objFrm.submit(); 
        }
    } else {
        if (validatePRI()) {
            var URL1 = "";
            if ((hostName == "www.qatarairways.com") || (hostName == "qatarairways.com")) {
                URL1 = "https://qmiles.qatarairways.com/ffponline/ffp-online/login.jsf";
            } else {
                URL1 = "https://qmiles.qatarairways.com/ffponline/ffp-online/login.jsf";
            }
            objFrm.action = URL1;
	         objFrm.submit();
        }
    }
});	

